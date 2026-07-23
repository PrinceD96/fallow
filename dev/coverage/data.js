window.BENCHMARK_DATA = {
  "lastUpdate": 1784827376988,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Fallow Coverage": [
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c21d5498e9c322669842d725da43423fdd092fc",
          "message": "fix(extract): scope this.* binding keys per enclosing class (#1833)\n\n`binding_target_names` is module-flat, so two classes in one module that\ndeclare a same-named field collided on the `this.<field>` key via\nlast-write-wins: `constructor(private dep: DepA)` in one class and\n`readonly dep = new DepB()` in another both wrote `this.dep`, so every\n`this.dep.*` access in the module resolved against the surviving target\nonly, and the losing class's dep members were falsely reported as\nunused-class-member cross-module. This is the collision behind the issue's\nprivParam row (order-dependent: reversing the class declarations flipped\nwhich class's members were flagged).\n\nQualify `this.`-rooted binding keys and receiver spellings with an internal\nper-class scope id during the walk (`this@<id>.<field>`), pushed and popped\nalongside the class-super / class-context stacks in `visit_class`. Both the\ninsert side and the access / whole-object / iteration-receiver read sides\nare qualified consistently, so the longest-prefix resolution and the typed\nproperty-hop expansion keep working within one class scope. The qualifier\nis an extraction-only disambiguator: `strip_this_scope_qualifiers` runs last\nin `finalize_resolution_phase`, after every resolution pass, and rewrites\nevery `this@<id>.` spelling back to `this.` across `member_accesses` and\n`whole_object_uses` before any spelling reaches `ModuleInfo`, so no\npersisted spelling and no downstream consumer (core self-access `== \"this\"`,\nheritage `!= \"this\"`, unused-component-output `this.<name>`, SFC template\n`starts_with(\"this.\")`) ever sees it. Bare `this` (the per-file self-access\nkey) and module-level `this` are never qualified.\n\nCorrecting last-write-wins removes accidental credit, so a member that\nexists on both colliding classes but is called on only one can surface as a\nnew true-positive finding. Validated on ten real-world projects: one such\nfinding (`NextNodeServer.revalidate` in next.js, where a `this.server`\ngetter on an unrelated class had been borrowing a sibling class's\n`server: NextNodeServer` field binding) and zero non-member drift.\n\nCACHE_VERSION 233 -> 234 (the emitted member_accesses change for modules\nwith same-named fields across classes; warm 233 caches keep the collision).\n\nFixes #1821",
          "timestamp": "2026-07-12T21:49:10+02:00",
          "tree_id": "bc6ab1b2c0eb6cca94da84fec8c310d9e3c18818",
          "url": "https://github.com/fallow-rs/fallow/commit/2c21d5498e9c322669842d725da43423fdd092fc"
        },
        "date": 1783886123817,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jernej.barbaric@gmail.com",
            "name": "Jerc92",
            "username": "Jerc92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "976a868175368846efa5c43145b367ca9224c76d",
          "message": "fix(report)!: address CI files from the repository root (#1808)\n\n* fix(report)!: address CI files from the repository root\n\nWhen --root pointed at a package inside a larger repo, fallow's CI output was\nunusable in two ways that shared one cause: findings were keyed and emitted\nrelative to the analysis root, while CI platforms and git address files from\nthe repository root.\n\nReport paths. codeclimate, review-github, and review-gitlab emitted\n--root-relative paths, so GitLab's Code Quality widget matched nothing and\nevery inline review discussion was rejected for naming a file absent from the\nMR diff. github-annotations already rebased onto the git toplevel; the others\nnow do too, via the same PathRebase. The review and sticky-summary formats\nderive their paths from CodeClimate issues, so one seam covers them all.\n--annotations-path-prefix becomes --report-path-prefix (old name kept as an\nalias) and governs every CI format. Both names are now registered in\nglobal_value_options, fixing a latent misparse of the following subcommand.\nThe generated capability manifest and CLI reference are regenerated for the\nrename.\n\nThe prefix is presentation only. The review and sticky-summary filters used to\nkey issues by their rendered path, so a custom or empty prefix silently stopped\nmatching the diff and dropped every inline comment. They now key by the\nanalysis-root-relative path plus the diff's own base.\n\nDiff filtering. --diff-file compared diff keys against finding paths already\nstripped to --root, so below the toplevel nothing matched: every\nsource-anchored finding was dropped and the run reported a clean diff, exit 0,\nsilently. A unified diff does not declare its own base, and both conventions\noccur in practice -- `git diff` writes toplevel-relative paths, `git diff\n--relative` writes root-relative ones. The base is therefore resolved from the\ndiff's paths themselves: whichever candidate directory they actually name\nfiles under wins. The chosen base rides on DiffIndex, the type that defines\nthe namespace, so every filter call site picks it up and callers that build\ntheir own index keep today's behavior.\n\nExistence cannot always place a diff. A path naming a real file under both\ncandidates is ambiguous, and a path naming one under neither is foreign. Both\nare reported. Silence here would rebuild the very failure this change removes:\na filter that matches nothing looks exactly like a clean diff.\n\nWhen --root is the repository toplevel the two candidates coincide and output\nis byte-identical, which the untouched snapshot suite pins.\n\nSARIF is deliberately excluded: four builders and its own URI encoding make it\na separate change, so it is left out of the flag's allowlist rather than\nhalf-rebased.\n\nBREAKING CHANGE: codeclimate, review-github, and review-gitlab now emit\nrepository-root-relative paths when --root is a subdirectory. Consumers that\nprepend the offset themselves should drop that step or pass\n--report-path-prefix '' to restore the previous output.\n\n* fix(report): filter parsed diffs with no analyzable files to zero scope\n\nA diff that parses but names no analyzable head-side file (empty,\ndeletion-only, or binary-only) is a real empty scope, not an unplaceable\nbase. init_shared_diff conflated the two: choose_diff_base returned None\nfor both, so such diffs were discarded and the run reported at full\nscope, flipping a change that touches nothing analyzable from clean to\nnoisy (including when --root equals the git toplevel).\n\nSplit the two: touched_files being empty keeps the empty index so every\nsource-anchored finding filters out; only a diff whose paths resolve\nnowhere (foreign) or in two places at once (ambiguous) still falls open.\n\nMake the discard decision authoritative for the FALLOW_DIFF_FILE path\ntoo: filter_issues_from_env now distinguishes a resolved cache, a\ndeliberately-discarded cache (full scope), and an unset cache (embedder\nfallback), so the env route no longer re-reads and re-filters against a\ndiff base detection already rejected.\n\nAlign the ambiguous- and foreign-base warnings with the fail-open\nbehavior: they report at full scope, not a clean report.\n\n* perf(report): resolve CI path prefix only for formats that use it\n\ninit_report_prefix shells out to git rev-parse --show-toplevel on every\nrun, but only codeclimate and review-{github,gitlab} read the resolved\nglobal (report_prefix()); the github-native formats compute their rebase\nfrom root directly. Gate the probe on those three formats so the other\nformats skip the subprocess.\n\n---------\n\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-07-12T23:52:34+02:00",
          "tree_id": "cf4aed763f9b85800c73ae295cb2a8c621b0cd00",
          "url": "https://github.com/fallow-rs/fallow/commit/976a868175368846efa5c43145b367ca9224c76d"
        },
        "date": 1783893452402,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e9313ddd139a994e38c004b67e31d4dd21415ab",
          "message": "docs: classify the CI path-rebase as a behavior change, not a semver major\n\nThe #1808 CHANGELOG entry led with BREAKING, which would push the next release toward a major bump for a fix whose affected cohort (subdirectory --root runs) previously got output their only consumers rejected, and which has a one-flag restore (--report-path-prefix ''). Relabels the entry as a behavior change with the rationale inline, and records it in the backwards-compatibility doc's new v3 notable-behavior-changes section. v4 stays reserved for the announced kind-tagged FallowOutput / alias-removal major (#413).",
          "timestamp": "2026-07-13T10:43:14+02:00",
          "tree_id": "cccc0312fab1b5c076929ed01299a2e01244c61e",
          "url": "https://github.com/fallow-rs/fallow/commit/2e9313ddd139a994e38c004b67e31d4dd21415ab"
        },
        "date": 1783932481414,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab61b4073f08af78335aef83d5fb997836c57c85",
          "message": "fix(cli): emit parseable suppress tokens in every human footer section (#1835)\n\nsection_suppress_rule in the human report emitted hardcoded token strings that\nfallow_types::suppress::parse_suppression_target did not recognize for eight\nsections (unused-exports, unused-types, unused-dependencies, unused-enum-members,\nunused-class-members, unresolved-imports, unlisted-dependencies, duplicate-exports):\nthe strings existed only as config keys or MCP names, never as IssueKind codes or\naliases. Following the printed hint produced a comment that suppressed nothing and\nthen surfaced a stale-suppression finding.\n\nDerive each section's token from the issue registry instead. A section-title to\nIssueKind map feeds issue_kind_to_kebab (the kind's suppress_token, falling back\nto its code), so the emitted token always parses back to the same kind.\nis_file_level_only is likewise derived from the registry's suppress_file_level\nflag, fixing two drifts: duplicate-export (file-level-only per its detector) now\nprints the file-level form, and circular-dependency / boundary-violation (which\nhonor next-line suppression) now print the next-line form. Dependency sections\nwhose findings live in package.json emit no hint rather than a token pointing at\nan impossible inline comment.\n\nA roundtrip guard test asserts every token section_suppress_rule can emit parses\nvia parse_suppression_target and uses the file-level form exactly when the\nregistry marks the kind file-level-only, so this surface stays locked down.\n\nFixes #1828",
          "timestamp": "2026-07-13T10:51:20+02:00",
          "tree_id": "5d74c6a0f39afac5e1717b56035bbf5f97dc1cea",
          "url": "https://github.com/fallow-rs/fallow/commit/ab61b4073f08af78335aef83d5fb997836c57c85"
        },
        "date": 1783933124229,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "0f2de24d23679cca1568b85aa8028d9f4ea6ed38",
          "message": "chore: release v3.4.0",
          "timestamp": "2026-07-13T11:35:29+02:00",
          "tree_id": "9e849ef300cd8fa21173a0444904b2d36b1cc74f",
          "url": "https://github.com/fallow-rs/fallow/commit/0f2de24d23679cca1568b85aa8028d9f4ea6ed38"
        },
        "date": 1783935825780,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "83762f1dc7852f6910e70e3c3a1ca0eb179ff98e",
          "message": "chore: release v3.4.1\n\nv3.4.0's tag never published: the first Windows run of the relocated\ncross-platform checks failed the staged subgenerator byte-comparison\nbecause core.autocrlf converted the committed contract surfaces to CRLF\nwhile generators write LF. Contract surfaces are now pinned to LF in\n.gitattributes; the 3.4.0 changelog section ships unchanged as 3.4.1.",
          "timestamp": "2026-07-13T12:42:02+02:00",
          "tree_id": "04359d9b49accbf637cf688407585c1a31ba21df",
          "url": "https://github.com/fallow-rs/fallow/commit/83762f1dc7852f6910e70e3c3a1ca0eb179ff98e"
        },
        "date": 1783939713890,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe9812109059f5b77d2506da61bece83f484f526",
          "message": "ci: make release validation dispatchable before any version exists (#1836)\n\nExtract the three release-gating validation jobs (Windows correctness\nand lifecycle, Zed verification, codegen drift) into a reusable\nrelease-validation.yml. release.yml calls it on tag runs so publishes\nkeep gating on the identical set; workflow_dispatch lets the release\npre-flight run the full validation on main BEFORE bumping a version, so\na failing check can no longer burn a release tag (v3.4.0 and v3.4.1\nwere both lost to a Windows-only CRLF failure that had never run\npre-tag); a weekly cron surfaces runner-image drift between releases.",
          "timestamp": "2026-07-13T13:46:24+02:00",
          "tree_id": "3baf10b1de3f2273debbd93c143ae7edc59f9424",
          "url": "https://github.com/fallow-rs/fallow/commit/fe9812109059f5b77d2506da61bece83f484f526"
        },
        "date": 1783943791723,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1a6f2b254df3ab5be2f72c99d59f81fa032dd48",
          "message": "chore(docker): pin FALLOW_VERSION 3.4.2 with refreshed checksums (#1838)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-13T14:50:03+02:00",
          "tree_id": "181b3039bb6811efa1f77d6e0c94b685a89071f6",
          "url": "https://github.com/fallow-rs/fallow/commit/d1a6f2b254df3ab5be2f72c99d59f81fa032dd48"
        },
        "date": 1783947436294,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5cdf83b10de669b72f559142ecdd36f54c7bc4a5",
          "message": "docs(skills): re-vendor after bumping action references to v3",
          "timestamp": "2026-07-13T15:02:50+02:00",
          "tree_id": "17beaf15398fd3de099f4fce9b1936c1a8f1ef26",
          "url": "https://github.com/fallow-rs/fallow/commit/5cdf83b10de669b72f559142ecdd36f54c7bc4a5"
        },
        "date": 1783948154976,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f57215bf3224b5276ecd8582f5fcac519dce3598",
          "message": "feat(action): render annotations and job summary via the native GitHub formats\n\nThe action's annotate and summary steps rendered through ~90KB of bundled jq that duplicated what the binary renders natively since v3.4.2. They now call `fallow report --from <results.json> --format github-annotations|github-summary`, re-rendering the same saved analysis JSON the run already produced behind a capability probe (HAS_NATIVE_REPORT via $GITHUB_ENV). Older binaries fall back to the jq renderers automatically; a step log line names which renderer ran.\n\nRender precedence is native > typed > jq, fail-open at each step. The action keeps applying its max-annotations cap plus truncation notice on the native stream. fix stays on the jq summary (report --from has no fix kind yet). No jq file is modified or deleted; jq retirement is a separate follow-up.\n\nCloses #1816.",
          "timestamp": "2026-07-13T16:43:40+02:00",
          "tree_id": "80683b5d9d61f84cf7a80df5bfb87cce376e9931",
          "url": "https://github.com/fallow-rs/fallow/commit/f57215bf3224b5276ecd8582f5fcac519dce3598"
        },
        "date": 1783954115128,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b17f59b8052f78b9ba7a9a66b9c9f48c24faaa5",
          "message": "feat: harden review and reliability workflows (#1840)\n\nReviewed and validated across the CLI, editor, Electron, and real-project surfaces.",
          "timestamp": "2026-07-13T18:01:34+02:00",
          "tree_id": "d9e90111eb2e84c40f4dbb45b85adf6169358478",
          "url": "https://github.com/fallow-rs/fallow/commit/0b17f59b8052f78b9ba7a9a66b9c9f48c24faaa5"
        },
        "date": 1783958979494,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a876f51642cf3c317d046c7696d2e1f69f770c18",
          "message": "feat(npm): ship one multicall binary per platform package (#1841)\n\n* refactor(lsp,mcp): extract reusable stdio server entry points\n\nMove the fallow-lsp and fallow-mcp binary bodies into library crates\nexposing run_stdio_server(), leaving each main.rs as a thin delegator.\nEach entry builds its own multi-threaded tokio runtime (replacing\ntokio::main) so a synchronous caller can drive it, and preserves the\nversion-probe, stdio wiring, and exit semantics of the standalone\nbinaries unchanged. This makes both server entries callable from a\nfuture multicall fallow binary without duplicating the runtime setup.\n\n* refactor(cli): expose run() as the library entry point\n\nPromote the clap command tree and dispatch from the fallow binary's\nmain.rs into the fallow-cli library as pub fn run(), leaving main.rs a\nthin delegator. This lets the multicall fallow-multicall binary drive\nthe full CLI without forking the command surface. The single coverage\nunit-test snapshot compiled into the old bin moves to the fallow_cli__\ninsta prefix (payload unchanged) now that its module lives in the lib.\n\n* feat(multicall): add fallow-multicall single-binary entry\n\nNew publish=false crate producing the fallow-multicall binary, which the\nnpm platform packages and the VS Code extension ship (renamed to fallow)\nso one binary answers as the CLI, the LSP server, and the MCP server.\nargv[1] lsp-server / mcp-server route to the bundled server entries;\nevery other invocation delegates verbatim to fallow_cli::run. Parity\ntests pin byte-identical CLI behavior against the standalone fallow bin\nand the exact fallow X.Y.Z version shape; dispatch tests prove each\nserver subcommand routes correctly and the LSP server completes an\ninitialize handshake when started as a multicall subcommand. Keeping the\ncrate publish=false leaves crates.io publishing and cargo install\nfallow-cli untouched.\n\n* feat(npm): ship one multicall binary per platform package\n\nPlatform packages (@fallow-cli/<platform>) now ship a single `fallow`\nbinary built from fallow-multicall instead of three fat binaries that\neach statically link the analysis engine. The bundled `fallow-lsp` /\n`fallow-mcp` npm bins become launcher shims that spawn `fallow\nlsp-server` / `fallow mcp-server` through the existing run-binary\nmachinery, preserving stdio, signal, and exit-code forwarding.\n\nrelease.yml builds fallow-multicall per target (cargo-zigbuild on\naarch64-musl since it links rquickjs through the MCP lib), signs it, and\nstages it as the platform payload; the standalone fallow/fallow-lsp/\nfallow-mcp GitHub release assets and the crates.io publish list are\nunchanged. The verify machinery (lazy-verify + verify-binary) and each\nplatform package.json `files` list now track the single shipped binary;\nthe GitHub Action installer verifies the same package. Tests updated to\nthe single-binary shape (npm scripts, action install verify,\nverify-pack-contents). actionlint clean; zizmor adds only low-confidence\ntemplate-injection findings on trusted matrix vars (no new medium/high).\n\n* feat(vscode): resolve the multicall fallow binary for the LSP\n\nWhen the workspace platform package ships only the bundled `fallow`\nbinary, resolve the LSP to `fallow lsp-server` instead of a standalone\nfallow-lsp. binary-utils gains findLocalLspBinary, which returns a\n{command, args} pair: a real fallow-lsp (args []) when present, else the\nmulticall fallow (args [\"lsp-server\"]), else the Unix .bin launcher\nshim. client.ts threads that shape through resolveBinaryPath and the LSP\nserverOptions. Configured paths, PATH lookups, and the GitHub\nauto-download still resolve real fallow-lsp binaries, so a new npm\npackage with an older extension degrades to the auto-download path and\nold and new installs coexist.\n\n* ci: track all shipped binary sizes, changelog the multicall packaging\n\nThe Binary Size workflow tracked only the fallow CLI, so the ~5x\nfallow-mcp growth in v2.104.0 went unseen. It now builds and records\nfallow, fallow-lsp, fallow-mcp, and fallow-multicall as separate\ncustomSmallerIsBetter series, so a per-binary jump trips the alert. Adds\nan Unreleased changelog entry for the single-binary platform packaging,\nthe roughly-halved install size, and the unchanged-consumer compat\nstory.\n\n* fix(cli): reconcile source references after the run() extraction\n\nThe fallow-cli command tree moving from main.rs to lib.rs had three\nfollow-on effects: restore the error module to pub (a public report doc\nlink resolves to it, matching the pre-move lib surface); repoint the MCP\ntool-description default-drift gate at cli/src/lib.rs where the clap\ndefaults now live; and add the new crates/multicall crate to the\nCONTRIBUTING project map that the architecture-boundaries test enforces.",
          "timestamp": "2026-07-13T18:34:00+02:00",
          "tree_id": "b5257724f5f20c1c068370225686a939a81f11b5",
          "url": "https://github.com/fallow-rs/fallow/commit/a876f51642cf3c317d046c7696d2e1f69f770c18"
        },
        "date": 1783960790104,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfe11ff668693aaee685af664d84a97162c67734",
          "message": "docs(npm): describe fallow-lsp/fallow-mcp as launchers, not separate binaries (#1842)\n\nSince the multicall packaging (#1841) the platform package ships one\nbinary; the fallow-lsp and fallow-mcp bins are launchers that start the\nservers from it.",
          "timestamp": "2026-07-13T20:03:43+02:00",
          "tree_id": "b4bd66b007d00a59e8d0b74a7b819ae120ef317e",
          "url": "https://github.com/fallow-rs/fallow/commit/cfe11ff668693aaee685af664d84a97162c67734"
        },
        "date": 1783966077840,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc4e0fe190675feb5db6966e7376284c9ef1c0a3",
          "message": "fix(cli): box the large MapOutcome::Ready variant (Windows clippy) (#1844)\n\nclippy's large_enum_variant fires on Windows (the Ready payload is 256\nbytes there, over the 200-byte threshold; under it on macOS/Linux, so\nit never showed in PR CI). The Windows clippy step only runs in the\nrelease-validation Windows job, so this was latent on main and would\nhave failed the next release. Boxing the variant drops it to a pointer\non every platform.",
          "timestamp": "2026-07-13T20:26:19+02:00",
          "tree_id": "8f9f5c709118b7f5e2438a15abfb4154ebdf0954",
          "url": "https://github.com/fallow-rs/fallow/commit/bc4e0fe190675feb5db6966e7376284c9ef1c0a3"
        },
        "date": 1783967603166,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6dd3032cc311d1a7de0ca97a517f8b30c1442ad",
          "message": "fix(cli): expect unsafe_code on the Windows source-map canonicalizer (#1847)\n\nSecond latent Windows-only clippy failure in the same file: the\ncfg(windows) securely_open_source_map makes three Win32 FFI calls\n(GetFinalPathNameByHandleW, CompareStringOrdinal) whose unsafe blocks\ntrip -D unsafe_code, which only runs on the release Windows clippy leg.\nAnnotated at the function level with a reason, matching the existing\nWin32 FFI pattern in crates/mcp process_tree.rs.",
          "timestamp": "2026-07-13T20:51:06+02:00",
          "tree_id": "6af59bb236cf751c0605b4495cfb028ddf51e9a0",
          "url": "https://github.com/fallow-rs/fallow/commit/b6dd3032cc311d1a7de0ca97a517f8b30c1442ad"
        },
        "date": 1783969670657,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98c028c8b53da9d8de9cf27fe431bf089920ec91",
          "message": "fix(cli): label config edit failures accurately\n\nDistinguish configuration read failures from errors while preparing ignoreExports edits. Add behavior-level regression coverage for unreadable and malformed configs.",
          "timestamp": "2026-07-13T19:26:36Z",
          "tree_id": "a0f2feede7936c3de78e94319a0372ba5183f0ac",
          "url": "https://github.com/fallow-rs/fallow/commit/98c028c8b53da9d8de9cf27fe431bf089920ec91"
        },
        "date": 1783971326748,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48f88e87776b4d85aeef649bfa1a6ac024be7ba1",
          "message": "fix(ci): allow multi-binary size checks to finish\n\nThe binary-size workflow began building LSP, MCP, and multicall release artifacts but retained a budget sized for the CLI-only job. Raise the timeout to 30 minutes and guard the minimum budget with a workflow policy test.",
          "timestamp": "2026-07-13T19:36:48Z",
          "tree_id": "3c43d4e00445fef864e4ebf97703c28528928da5",
          "url": "https://github.com/fallow-rs/fallow/commit/48f88e87776b4d85aeef649bfa1a6ac024be7ba1"
        },
        "date": 1783971695931,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e7c2abfa177f0a31320532eb50cb5ee880aaab2",
          "message": "feat(output): model the --format json error envelope in the published schema\n\nCloses the plan-028 (F5) contract follow-ups. The structured --format json error document is now a typed ErrorOutput document-root branch in docs/output-schema.json (discriminated by error:true, no kind), exported from fallow/types; emit_error serializes the typed struct byte-identically (no wire change). The CLI `fallow trace` kind:\"trace\" surface is confirmed live and validated end-to-end; the api programmatic trace serializers stay deliberately un-enveloped (guard doc updated). Adds CLI conformance coverage for the error envelope and the trace kind.",
          "timestamp": "2026-07-13T21:45:47+02:00",
          "tree_id": "b6461c6447abf7fe5ab6325ff3c64eeb3361364c",
          "url": "https://github.com/fallow-rs/fallow/commit/2e7c2abfa177f0a31320532eb50cb5ee880aaab2"
        },
        "date": 1783972221544,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9d1afa161fa444cbb09afd792409fdc62d1abbb",
          "message": "fix(ci): split binary size builds by artifact mode",
          "timestamp": "2026-07-13T20:20:10Z",
          "tree_id": "7cda5c034df6300c9d09c61c87d678d921254c03",
          "url": "https://github.com/fallow-rs/fallow/commit/a9d1afa161fa444cbb09afd792409fdc62d1abbb"
        },
        "date": 1783974239124,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a377bb2ecb4626f46670efae3cf1cec5e07373c",
          "message": "fix(ci): scope bloat debug profile to CLI",
          "timestamp": "2026-07-13T20:43:45Z",
          "tree_id": "cc2819b9e7f9412956c9e52738f3c55c0fe520a6",
          "url": "https://github.com/fallow-rs/fallow/commit/9a377bb2ecb4626f46670efae3cf1cec5e07373c"
        },
        "date": 1783975691271,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "26d268c16940da3423a558fed32f57b1f02ab08e",
          "message": "feat(report): render the fix job summary from a saved envelope via report --from\n\nAdds EnvelopeKind::Fix so `fallow report --from <fix-results.json> --format github-summary` renders the auto-fix job summary natively (advisor plan 027 fix-kind follow-up). No wire change: the fix envelope stays kind-less and is detected by field presence (fixes array + numeric total_fixed); the renderer reuses the existing render_fix_summary (a 1:1 port of summary-fix.jq), so output is byte-identical to the direct run. github-annotations for fix emits nothing, matching the action. Verified: 31 github-format tests, neuter-checked, clippy/fmt clean, empty + non-empty smoke parity.",
          "timestamp": "2026-07-13T23:14:14+02:00",
          "tree_id": "72d9450930da3e83dca19f32c46097ee1697721d",
          "url": "https://github.com/fallow-rs/fallow/commit/26d268c16940da3423a558fed32f57b1f02ab08e"
        },
        "date": 1783977601771,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c68954e6de9bee9d9895cf11b4e086e2f987023d",
          "message": "fix(graph): bound star re-export propagation work (#1855)\n\nReuse the named-import origin index across star re-export propagation and batch reference deduplication per export.\n\nFixes #1843.",
          "timestamp": "2026-07-14T00:18:41+02:00",
          "tree_id": "8097a0e09139f95f49a944f049c4397da3e44115",
          "url": "https://github.com/fallow-rs/fallow/commit/c68954e6de9bee9d9895cf11b4e086e2f987023d"
        },
        "date": 1783981383364,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d8d11622bc1529345e167025ec7eef34ebf0300",
          "message": "fix(report): singular noun for a single fix in the github-summary headline\n\nThe --format github-summary auto-fix headline read 'would apply 1 fixes' for a single fix; it now reads '1 fix', branching on the count. Shared by the live fallow fix and report --from paths (both call render_fix_summary). Adds a singular-case test; plural snapshot unchanged.",
          "timestamp": "2026-07-14T06:37:44+02:00",
          "tree_id": "b787e737c42c695cef7eb294e5d8f0485fa585a0",
          "url": "https://github.com/fallow-rs/fallow/commit/3d8d11622bc1529345e167025ec7eef34ebf0300"
        },
        "date": 1784004137001,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5b06369ef95a02f68414220b02198da409f45d3d",
          "message": "chore: release v3.5.0",
          "timestamp": "2026-07-14T07:38:53+02:00",
          "tree_id": "68ca7aab37aede7785c0bc19de300a692045c4ce",
          "url": "https://github.com/fallow-rs/fallow/commit/5b06369ef95a02f68414220b02198da409f45d3d"
        },
        "date": 1784007987863,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "bc7cd251ba3f813b7d7a35712fa140baaf058647",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.5.0",
          "timestamp": "2026-07-14T08:58:48+02:00",
          "tree_id": "daae30760de81297d79fa7067241c61b7a76d9b6",
          "url": "https://github.com/fallow-rs/fallow/commit/bc7cd251ba3f813b7d7a35712fa140baaf058647"
        },
        "date": 1784012774157,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c802c2d5ddcfd6a3cee7bcceb4542a7842a34569",
          "message": "docs: document the --legacy-envelope removal and clear stale references\n\nAdds the missing v2.104.0 changelog entry for the --legacy-envelope / legacyEnvelope removal, re-vendors the skills SKILL.md without the stale flag mention, and rewrites the stale programmatic.rs bullet in the cli-crate rules (the module moved to fallow-api; napi no longer depends on fallow-cli).",
          "timestamp": "2026-07-14T10:29:28+02:00",
          "tree_id": "9e843d00c39776136b7fed8d208a51d6b3ef0575",
          "url": "https://github.com/fallow-rs/fallow/commit/c802c2d5ddcfd6a3cee7bcceb4542a7842a34569"
        },
        "date": 1784018046393,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7936189eb0040a97190baafb7522d9a9e392ded",
          "message": "fix: harden analysis boundaries and verification (#1860)\n\nPreserve Git path identity across changed-file and churn flows, redact and canonicalize remote config URLs, and clean completed MCP process trees on every return path.\n\nBound extraction-cache eviction work, align Action and generated-contract verification with current ownership, and add focused Windows PR coverage for platform-specific paths and cleanup.",
          "timestamp": "2026-07-14T11:41:35+02:00",
          "tree_id": "5056d2b5d840cfb50d24214c048864db8db69dbc",
          "url": "https://github.com/fallow-rs/fallow/commit/c7936189eb0040a97190baafb7522d9a9e392ded"
        },
        "date": 1784022456100,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9314f204e4aac4c803bf725056fe502effe5d2e5",
          "message": "fix: harden analysis correctness and verification\n\nCorrect star re-export default semantics, store license tokens through private atomic files, and clean completed MCP process trees. Preserve exact changed-file paths across the GitHub Action boundary.\n\nExercise packaged launchers and repository scripts in CI, refresh security and ownership guidance, and add benchmark-backed indexes for named re-export stubs and workspace bucketing. The higher-risk re-export fixpoint rewrite remains out of scope because current measurements do not justify it.",
          "timestamp": "2026-07-14T14:38:26+02:00",
          "tree_id": "0682a832ceb6207fbdb281a5c023ae8f4abfdd80",
          "url": "https://github.com/fallow-rs/fallow/commit/9314f204e4aac4c803bf725056fe502effe5d2e5"
        },
        "date": 1784033327141,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "469332212e313f044637f6765707207cff7b24a8",
          "message": "test(npm): allow launcher tests without dependencies\n\nMirror the production Linux platform fallback when detect-libc is unavailable. This preserves the npm Package job zero-install contract while still exercising both multicall launchers.",
          "timestamp": "2026-07-14T14:52:49+02:00",
          "tree_id": "306bb3a23713248b77c08626a8876a72723aa92d",
          "url": "https://github.com/fallow-rs/fallow/commit/469332212e313f044637f6765707207cff7b24a8"
        },
        "date": 1784033944792,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cdd5e649d61a29226958edbcfd8f51080088802e",
          "message": "docs(readme): research-backed rewrite for humans and agents\n\nReplace the 1128-line README with a 279-line version: masthead covering the five analysis areas plus styling drift, a captured fallow 3.5.0 audit excerpt from the vitest monorepo, quick start, a curated command table plus a complete overview of the remaining command surface, output formats and exit codes, a consolidated agent block (MCP, agent skill, hooks, compliance loop), suppression syntax, CI setup, the optional runtime layer, and benchmark numbers sourced from BENCHMARKS.md. Depth delegates to docs.fallow.tools deep links, all verified live.\n\nEvery command, flag, config key, and count traces to the clap definitions or to captured runs; the plugin-count contradiction (123 vs a stale 114) resolves to a stable \"over 100\" with 123 verified in the builtin registry. Also fixes command drift in CONTEXT.md: the coverage subcommand list (no coverage explain; the three upload subcommands were missing), regression gating documented as flag-driven rather than a fallow regression subcommand, the nonexistent fallow validate removed, and stylelint added as a migrate source.",
          "timestamp": "2026-07-14T15:27:11+02:00",
          "tree_id": "885c9bae55ddda92f949138ea421481760f3ec76",
          "url": "https://github.com/fallow-rs/fallow/commit/cdd5e649d61a29226958edbcfd8f51080088802e"
        },
        "date": 1784038316237,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb7e4db6cd07a8ab166158a7abe186601c2f5d80",
          "message": "docs(readme): feature fallow recommend as the onboarding entry point\n\nThe first-run section now points at fallow recommend before hand-authored config, the command table promotes it out of the long tail, and the agent block explains the decision-set contract: detected stack, proposed config, per-decision tier and rationale, and subjective choices delivered as ready-to-ask questions with options and tradeoffs. The npm README gets the same pointer in its configuration section.",
          "timestamp": "2026-07-14T16:50:11+02:00",
          "tree_id": "b2aa70036d39d22da538e1a453a8624bd6459f7e",
          "url": "https://github.com/fallow-rs/fallow/commit/cb7e4db6cd07a8ab166158a7abe186601c2f5d80"
        },
        "date": 1784041107020,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c621903ebc2b451fd062d2a4e9e8edd771ae0f99",
          "message": "chore(deps): bump astral-sh/setup-uv from 8.2.0 to 8.3.1 (#1873)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from 8.2.0 to 8.3.1.\n- [Release notes](https://github.com/astral-sh/setup-uv/releases)\n- [Commits](https://github.com/astral-sh/setup-uv/compare/fac544c07dec837d0ccb6301d7b5580bf5edae39...f98e06938123ccabd21905ea5d0069192241f9f1)\n\n---\nupdated-dependencies:\n- dependency-name: astral-sh/setup-uv\n  dependency-version: 8.3.1\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-14T17:02:54+02:00",
          "tree_id": "536df4bda4ef74fa627487e0ab3d03bace62a854",
          "url": "https://github.com/fallow-rs/fallow/commit/c621903ebc2b451fd062d2a4e9e8edd771ae0f99"
        },
        "date": 1784041737637,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b96ee785bc315963ac6d44f1873b4dc553bda5ef",
          "message": "docs(readme): apply panel-review fixes\n\nFixes from a nine-persona panel review of the rewritten README. The two make-or-break items: the agent snippet taught `|| true`, which hid exit 2 (real errors) from anything checking the exit code, and the CI section framed the Action as a report while fail-on-issues defaults to a blocking gate. Also: SARIF upload marked opt-in, tag-pinning rationale, format-to-command mapping for badge and the CI envelopes, benchmark capture version named explicitly, a first-timer caption on the terminal excerpt, the introduced-only audit gate default stated in prose, an adoption paragraph signposting baselines, and the long-tail command table collapsed behind a details element.",
          "timestamp": "2026-07-14T17:10:04+02:00",
          "tree_id": "05f68a820777cac1f86e1d870dbef693af704568",
          "url": "https://github.com/fallow-rs/fallow/commit/b96ee785bc315963ac6d44f1873b4dc553bda5ef"
        },
        "date": 1784042101437,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9869f3b325d4845125655c162c50903c08a8730c",
          "message": "chore(deps): bump CodSpeedHQ/action from 4.18.1 to 4.18.2 (#1881)\n\nBumps [CodSpeedHQ/action](https://github.com/codspeedhq/action) from 4.18.1 to 4.18.2.\n- [Release notes](https://github.com/codspeedhq/action/releases)\n- [Changelog](https://github.com/CodSpeedHQ/action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/codspeedhq/action/compare/a4a36bb07c0638b0b4ca52bf1f3dad1b4289e52f...4e969336ab9acd4f6f8d025fdd793292b0835df0)\n\n---\nupdated-dependencies:\n- dependency-name: CodSpeedHQ/action\n  dependency-version: 4.18.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-14T17:40:58+02:00",
          "tree_id": "c0b5c74162c12f5cfb58341469b2823af4b96db4",
          "url": "https://github.com/fallow-rs/fallow/commit/9869f3b325d4845125655c162c50903c08a8730c"
        },
        "date": 1784043957063,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52989ec9627d0ca7baaa74d36a6b1bb17d11b688",
          "message": "chore(deps): consolidate dependabot bumps (napi, oxlint/oxfmt, vscode) (#1891)\n\nnapi 3.10.3 + napi-derive 3.5.9, oxlint 1.73.0 + oxfmt 0.58.0, vscode-languageclient 10.1.0 + @types/node 26.1.0. Each pair needed a coordinated lockfile or paired bump to compile/pass; landing them together avoids the per-PR failures.\n\nCloses #1867\nCloses #1869\nCloses #1870\nCloses #1875\nCloses #1878\nCloses #1880",
          "timestamp": "2026-07-14T15:52:57Z",
          "tree_id": "9f924e60d9167241146921ec96a60bc7d697c771",
          "url": "https://github.com/fallow-rs/fallow/commit/52989ec9627d0ca7baaa74d36a6b1bb17d11b688"
        },
        "date": 1784044915666,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03bee8e7efb444aad1ec8eb86a60578e8a7cb6bc",
          "message": "chore(deps): bump dorny/paths-filter from 4.0.1 to 4.0.2 (#1876)\n\nSafe github-actions patch bump. Landed via admin bypass; the failing required checks (Skills vendor drift, JS Lint) are a pre-existing main issue unrelated to this action-version bump.",
          "timestamp": "2026-07-14T18:14:09+02:00",
          "tree_id": "30d8ffd16a911b21d25d5eaa082c2556c145cae0",
          "url": "https://github.com/fallow-rs/fallow/commit/03bee8e7efb444aad1ec8eb86a60578e8a7cb6bc"
        },
        "date": 1784045950274,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "f762e887556c2c930d05dc8d4b84c8dc9fd49856",
          "message": "test(ci): bump paths-filter SHA in workflow-policy test to v4.0.2\n\nFollow-up to #1876: the dorny/paths-filter bump changed the pinned SHA in\nci.yml and coverage.yml, but workflow-policy.test.mjs still asserted the\nold 4.0.1 SHA, red-ing the JS Lint script-tests step. Update the expected\nSHA to match.",
          "timestamp": "2026-07-14T18:34:33+02:00",
          "tree_id": "07397f2ea2f9d084952f8009ba117c989e3e6ad4",
          "url": "https://github.com/fallow-rs/fallow/commit/f762e887556c2c930d05dc8d4b84c8dc9fd49856"
        },
        "date": 1784047146154,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "811fa409b4aecaddf64596646e9c5553a6327882",
          "message": "refactor: group dependency override inputs",
          "timestamp": "2026-07-14T19:23:11+02:00",
          "tree_id": "d2c9b75e9f93144ab387cdfc9d3320b6cd5f8a73",
          "url": "https://github.com/fallow-rs/fallow/commit/811fa409b4aecaddf64596646e9c5553a6327882"
        },
        "date": 1784050140069,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d22ff4bc095d641781cf7cbcfd5e67de6615daf",
          "message": "fix(nextjs): credit metadata route config exports\n\nCredit framework-consumed config exports in App Router metadata routes while leaving dynamicParams and arbitrary helpers reportable.\n\nCorrect Knip migration suppression hints, preserve documented suppression reasons, and clarify config-backed regression baseline updates across generated and companion documentation.",
          "timestamp": "2026-07-14T19:52:04+02:00",
          "tree_id": "12d5945835e0a6d8f1592bbb62df3f79a8639c22",
          "url": "https://github.com/fallow-rs/fallow/commit/4d22ff4bc095d641781cf7cbcfd5e67de6615daf"
        },
        "date": 1784051886145,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1129ac09c042effa88a78eeaea7ea9e2bfa4188",
          "message": "docs(changelog): reference hardening PR\n\nLink the Unreleased correctness, security, and performance entries to PR #1864 so the changelog keeps a traceable review history.",
          "timestamp": "2026-07-14T19:59:27+02:00",
          "tree_id": "24d97290a65714a189ca1ed475732feda781db6b",
          "url": "https://github.com/fallow-rs/fallow/commit/e1129ac09c042effa88a78eeaea7ea9e2bfa4188"
        },
        "date": 1784052260641,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6ef02ff843a6e46a44d42eb70fcfbdcb5dc7e849",
          "message": "test(core): normalize path separators in workspace-bucketing assertion\n\nThe workspace-bucketing test built its expected relative paths with\nPathBuf::join (all-backslash on Windows) while the code preserves the\ninput path's original separators, which are mixed when the fixture is\nbuilt via multiple join calls (web\\src/first.ts). Compare with\nseparators normalized so the assertion checks bucketing and file order,\nnot host path formatting. Windows-only failure; passed on Linux/macOS.",
          "timestamp": "2026-07-14T21:26:23+02:00",
          "tree_id": "8e3fea4a14c6cdc1194876b639b61f66ad45b837",
          "url": "https://github.com/fallow-rs/fallow/commit/6ef02ff843a6e46a44d42eb70fcfbdcb5dc7e849"
        },
        "date": 1784057491539,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "11f0adea9977d1946e2d7736f0ae14085e994b1a",
          "message": "chore: release v3.5.1",
          "timestamp": "2026-07-14T22:16:02+02:00",
          "tree_id": "d983980b5d370b3d48c8132b5a4363d57488d274",
          "url": "https://github.com/fallow-rs/fallow/commit/11f0adea9977d1946e2d7736f0ae14085e994b1a"
        },
        "date": 1784060704895,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3a1b86d22d922863b71cfe056cf544bb231bc532",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.5.1",
          "timestamp": "2026-07-15T08:16:27+02:00",
          "tree_id": "50abd2d4c0ab4480c28b72409911f962a02fffb8",
          "url": "https://github.com/fallow-rs/fallow/commit/3a1b86d22d922863b71cfe056cf544bb231bc532"
        },
        "date": 1784096631038,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d86455c69123a2f8ff5d4aeb6e3fc0786609c534",
          "message": "feat(cli): compact JSON output by default\n\nEmit compact machine-readable JSON across CLI, error, watch, and MCP paths while preserving the parsed schema and fixed CI formats.\n\nAdd `--pretty` for explicit indented output and validate it against each command's actual payload. This addresses the efficiency goal without adding TOON or another interchange format.\n\nFixes #1861.",
          "timestamp": "2026-07-15T09:16:39+02:00",
          "tree_id": "38f02292575111462610616899818b653baadc5c",
          "url": "https://github.com/fallow-rs/fallow/commit/d86455c69123a2f8ff5d4aeb6e3fc0786609c534"
        },
        "date": 1784100092560,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bartwaardenburg@gmail.com",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29e84905254d37b5c20577ecd31f4daba4349926",
          "message": "Merge pull request #1898 from fallow-rs/codex/fix-pnpm-audit-ci\n\nfix(ci): restore VS Code dependency audit",
          "timestamp": "2026-07-15T10:02:47+02:00",
          "tree_id": "472855cc88d2f36584095d08452b9431918810d8",
          "url": "https://github.com/fallow-rs/fallow/commit/29e84905254d37b5c20577ecd31f4daba4349926"
        },
        "date": 1784102831691,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hi@ryolambert.dev",
            "name": "Ryo Lambert",
            "username": "ryolambert"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1675bfc3f0debd0b40e81f3b6d3ba0aa46ab19dd",
          "message": "feat(cli): add root-owned audit cache cleanup\n\nAdd root-keyed reusable audit base snapshots with full-SHA readiness, explicit lock release, private cache ownership checks, and safe Git admin cleanup.\n\nExpose fallow audit-cache remove --root with dry-run and structured JSON, reclaim legacy entries, and synchronize generated skill contracts.\n\nThanks to Ryo Lambert for the original contribution.",
          "timestamp": "2026-07-15T11:44:29+02:00",
          "tree_id": "52cc4ae2f99c03f089e34c0a04d163275905f5b2",
          "url": "https://github.com/fallow-rs/fallow/commit/1675bfc3f0debd0b40e81f3b6d3ba0aa46ab19dd"
        },
        "date": 1784109246795,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ab6c16927f569c2df9455d0c393c5f66baf8b88",
          "message": "fix(cli): honor JSON style for schema commands\n\nSchema-oriented CLI commands now use the shared JSON presentation style, producing compact output by default while honoring `--pretty` for manual inspection.\n\nThe contract generator explicitly requests pretty output so committed schema artifacts remain reviewable and byte-stable. JSON values, field ordering, exit codes, and schema versions are unchanged.",
          "timestamp": "2026-07-15T11:56:01+02:00",
          "tree_id": "f6418489b00606b724db13231e9bc75e7aeb999f",
          "url": "https://github.com/fallow-rs/fallow/commit/3ab6c16927f569c2df9455d0c393c5f66baf8b88"
        },
        "date": 1784110108648,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d261eb39ffe53b1bdc60f1a84e4805aac62e24e4",
          "message": "fix(lsp): normalize Windows diagnostic paths\n\nWindows canonicalization returned verbatim paths that the LSP URI layer could not encode for editor diagnostics.\n\nNormalize all LSP path ingress through dunce, cover workspace and legacy initialization on Windows, and keep the focused regression plus platform Clippy in pull request CI. UNC shares and irreducible verbatim inputs remain outside this local-drive fix.\n\nFixes #1899.",
          "timestamp": "2026-07-15T13:33:10+02:00",
          "tree_id": "123aeea0469d27373af3b274df755e7ce6b9756c",
          "url": "https://github.com/fallow-rs/fallow/commit/d261eb39ffe53b1bdc60f1a84e4805aac62e24e4"
        },
        "date": 1784115630785,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6c74e746d31b1821dae87247754e76aefb00bb8",
          "message": "fix: harden analysis and integration contracts\n\nHarden dependency attribution, CSS artifact reuse, Action input validation, and current-binary integration coverage across the GitHub Action and VS Code extension.\\n\\nAlign repository tooling and documentation contracts, and preserve parent dependency ownership for package-less TypeScript project references. The fallow fix promotion-race item remains out of scope.",
          "timestamp": "2026-07-15T13:43:28+02:00",
          "tree_id": "1f667074e29803c7a1e21258c9c1a4ca35aad006",
          "url": "https://github.com/fallow-rs/fallow/commit/a6c74e746d31b1821dae87247754e76aefb00bb8"
        },
        "date": 1784116558282,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "852cc98798b2521885f2d23e6e160a02dcde598b",
          "message": "chore: remove superpowers workflow artifacts",
          "timestamp": "2026-07-15T14:29:39+02:00",
          "tree_id": "86cc64e1f5fd64e7b298b45af4e9d7da3f45a639",
          "url": "https://github.com/fallow-rs/fallow/commit/852cc98798b2521885f2d23e6e160a02dcde598b"
        },
        "date": 1784119105432,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bef4d7df15fb4fa76c3a16bea72cc0f4f948f2f6",
          "message": "chore(docker): pin FALLOW_VERSION 3.5.1 with refreshed checksums\n\nRefresh the Docker image to download fallow v3.5.1 for amd64 and arm64.\n\nPin each architecture to the SHA-256 digest published with the matching release asset.\n\nRefs #1817.",
          "timestamp": "2026-07-15T15:58:56+02:00",
          "tree_id": "e8f52b8ee1f4831015f1b09cec3a74a4402b88a2",
          "url": "https://github.com/fallow-rs/fallow/commit/bef4d7df15fb4fa76c3a16bea72cc0f4f948f2f6"
        },
        "date": 1784124209674,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "502e793f2fe86c35db582f2a4d181b5a3bc03000",
          "message": "test(audit): mirror production hashing in reusable-cache identity test\n\nThe Windows correctness gate failed on\nreusable_cache_identity_is_canonical_root_owned_and_sha_independent: the\ntest recomputed the expected cache identity from Path::canonicalize plus\nto_string_lossy bytes, which diverges from production on Windows. There,\nstd canonicalize keeps the \\\\?\\ verbatim prefix (production strips it via\ndunce) and the path identity is hashed as UTF-16LE bytes, not UTF-8, so\nboth the repo and root hashes differed.\n\nExpose canonical_root_hash and source the expected hashes from it, so the\nidentity assertion is reconstructed through the exact production code path\non every platform. No production behavior change.",
          "timestamp": "2026-07-15T18:51:49+02:00",
          "tree_id": "28e46fd142862ae943066d026ba3dbb76ecc93c2",
          "url": "https://github.com/fallow-rs/fallow/commit/502e793f2fe86c35db582f2a4d181b5a3bc03000"
        },
        "date": 1784134763775,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2fb4b7d3676f1800e5fbad5bb2ffbb5c07135ebf",
          "message": "test(audit): resolve integration cache paths via production hash\n\nThe Windows correctness gate failed on the audit-cache remove integration\ntests: audit_cache_paths recomputed the cache identity from\nPath::canonicalize + to_string_lossy bytes, which diverges from production\non Windows (std canonicalize keeps the \\\\?\\ verbatim prefix that production\nstrips via dunce, and the identity is hashed as UTF-16LE, not UTF-8). The\nfixtures then landed at paths the spawned binary never enumerated, so\nwould_remove was wrong and the lock-contention path reported success.\n\nRe-export canonical_root_hash and derive the fixture paths from it, matching\nthe exact hashing the binary uses on every platform.",
          "timestamp": "2026-07-15T19:07:45+02:00",
          "tree_id": "5057f610b15a34f838af21991359e9d46a1b586a",
          "url": "https://github.com/fallow-rs/fallow/commit/2fb4b7d3676f1800e5fbad5bb2ffbb5c07135ebf"
        },
        "date": 1784135566273,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "4e46717fc4b5822227380febf2955468e5473f83",
          "message": "fix(audit): silence Windows unnecessary_wraps on ownership no-op\n\nThe release-validation Windows Clippy job flagged\nclippy::unnecessary_wraps on the #[cfg(not(unix))] ensure_cache_entry_is_owned\nstub: it always returns Ok(()) because there is no POSIX owner to verify on\nnon-Unix. The io::Result signature must mirror the fallible Unix ownership\ncheck, so annotate the stub with #[expect(clippy::unnecessary_wraps)],\nmatching the sibling stubs in crates/engine/src/repo_refs.rs.",
          "timestamp": "2026-07-15T19:34:51+02:00",
          "tree_id": "dd7327aec050e87acb7f5c0dd63d50e2e2eb875c",
          "url": "https://github.com/fallow-rs/fallow/commit/4e46717fc4b5822227380febf2955468e5473f83"
        },
        "date": 1784137231138,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5795c10548a3b67790a2b21058f977e8b48ecf1a",
          "message": "fix(ci): drop flaky pnpm cache from release-validation setup-node\n\nOn a cache miss the actions/setup-node post-step failed the Windows and Zed\nrelease-validation jobs with \"Path Validation Error: Path(s) specified in\nthe action for caching do(es) not exist\" while every real step passed. The\npnpm store path is absent at save time on Windows, so the save aborts and\nfails the job's overall conclusion. Because release.yml gates publishing on\nthis reusable workflow, a cache-miss tag run would skip every publish job\nand burn the version tag.\n\nRemove cache: pnpm / cache-dependency-path from both setup-node steps. The\npnpm install for the small editors/vscode contract deps runs uncached on\nthis rarely-run gate, trading a negligible slowdown for a deterministic gate.",
          "timestamp": "2026-07-15T20:18:59+02:00",
          "tree_id": "2c128252a61975bcdb4db72c5ccecc5fafd06f1e",
          "url": "https://github.com/fallow-rs/fallow/commit/5795c10548a3b67790a2b21058f977e8b48ecf1a"
        },
        "date": 1784139801962,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "32b3f89fe28c286c85a6b0aed4ec5be120f54da6",
          "message": "chore: release v3.6.0",
          "timestamp": "2026-07-15T21:05:35+02:00",
          "tree_id": "b27c5cd01e55fb4e58e8182595d25eb44ca07f41",
          "url": "https://github.com/fallow-rs/fallow/commit/32b3f89fe28c286c85a6b0aed4ec5be120f54da6"
        },
        "date": 1784142832994,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3d30c38a4a49ccb912174e22d674e19377ebf910",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.6.0",
          "timestamp": "2026-07-15T22:36:00+02:00",
          "tree_id": "2c22bdd157bf5bf49b96498bdb32f0faf9c1f7f4",
          "url": "https://github.com/fallow-rs/fallow/commit/3d30c38a4a49ccb912174e22d674e19377ebf910"
        },
        "date": 1784148181736,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "398af909d30e0c68541fa2c089da743b7b30dda2",
          "message": "docs: document the multicall crate in the project-structure map",
          "timestamp": "2026-07-16T14:33:43+02:00",
          "tree_id": "e43c65ed411a8a7830da2b897f363277bf40ed68",
          "url": "https://github.com/fallow-rs/fallow/commit/398af909d30e0c68541fa2c089da743b7b30dda2"
        },
        "date": 1784205525080,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41dc3988b0c371de1a42855e3fe76c6976a24f57",
          "message": "feat(vscode): set baseline at HEAD\n\nAdd a VS Code command that creates a local fallow baseline tag at HEAD, persists the effective changed-since setting, and refreshes analysis for a single-folder workspace. Existing tags, settings, and multi-root workspaces are handled explicitly.\n\nCreate the tag with --no-sign so user-level tag.gpgSign configuration cannot turn the lightweight local workflow into a signing failure. The command never pushes to a remote.",
          "timestamp": "2026-07-16T15:27:43+02:00",
          "tree_id": "51d89453d6c3247a0765b27cf62821e1a11c7b8a",
          "url": "https://github.com/fallow-rs/fallow/commit/41dc3988b0c371de1a42855e3fe76c6976a24f57"
        },
        "date": 1784209027286,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc632a1c2f2b57580bc0af8222038fe3b3cd1e53",
          "message": "fix: harden external input boundaries\n\nHarden external input boundaries before analysis: bound churn and diff reads, reject unsafe imported paths and aggregate overflow, and keep source and manifest symlink targets inside the configured project root. Oversized diffs continue with unfiltered reporting instead of truncated parsing.\n\nAdd focused regression coverage, real-repository probes, and Windows CI coverage for the platform-gated core symlink paths and all-target Clippy.",
          "timestamp": "2026-07-16T15:52:16+02:00",
          "tree_id": "2bd5478623b7cc405d91a7d073f9a2b1e2610db4",
          "url": "https://github.com/fallow-rs/fallow/commit/fc632a1c2f2b57580bc0af8222038fe3b3cd1e53"
        },
        "date": 1784210432444,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcc1d69e312a65c9348b64a4626ceb333e8db8e4",
          "message": "docs(detection): note the taint-binding breadth cap (#1843)\n\nRecords MAX_TAINTED_BINDINGS_PER_MODULE (4096) as the per-module breadth companion to the MAX_TAINT_BINDING_HOPS depth cap, and adds #1843 to the CACHE_VERSION bump list. Follow-up to the #1843 memory fix.",
          "timestamp": "2026-07-19T21:06:07+02:00",
          "tree_id": "6d69c10795e3ab76621cdadee70a1b44ad93b75c",
          "url": "https://github.com/fallow-rs/fallow/commit/fcc1d69e312a65c9348b64a4626ceb333e8db8e4"
        },
        "date": 1784488400570,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fbcd06f18ee0f2423fef4b4f5d63c92f54c4d6d",
          "message": "perf(analysis): harden super-linear paths found by the #1843 audit\n\nFollow-up to the #1843 taint-memory fix. Bounds or linearizes eight more paths with the same accumulator/scan pathology: duplicate-export and class-heritage grouping, star re-export propagation, object-binding and factory-return candidate caps, incremental JSDoc brace scanning, depth-guarded template and CSS-in-JS scanners (stack-overflow hardening), and linearized health-time line/mask scanners. Behavior-preserving on ordinary code (verified byte-identical old-vs-new across the fixture corpus). CACHE_VERSION 236 to 237 for the candidate caps.\n\nFollow-up to #1843.",
          "timestamp": "2026-07-20T00:35:50+02:00",
          "tree_id": "877ff829d7479d2103da37820e88ae78c8ca7e98",
          "url": "https://github.com/fallow-rs/fallow/commit/6fbcd06f18ee0f2423fef4b4f5d63c92f54c4d6d"
        },
        "date": 1784501055360,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f65edb595df848573d94fbec0125513a30cd466",
          "message": "perf(extract): bound the object-binding resolver on minified bundles (#1843)\n\nThe object-binding member-resolution fixed-point blew up on a real 2 MB minified vendor bundle full of nested object maps (>90s parse). Bounded three ways: an ancestor-prefix index makes copy_nested O(matches); a size cap (8192) stops the fixed-point from multiplying binding_target_names; and a pass cap (8) stops it running candidate-count passes. Byte-identical on ordinary code (over-cap files degrade to a false negative). The 2 MB bundle now analyzes in ~0.2s. CACHE_VERSION 237 to 238.\n\nFollow-up to #1843.",
          "timestamp": "2026-07-20T01:41:02+02:00",
          "tree_id": "533e3831f73940113352df8fa9302052f2efd5a6",
          "url": "https://github.com/fallow-rs/fallow/commit/2f65edb595df848573d94fbec0125513a30cd466"
        },
        "date": 1784504890224,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "4551fc703c79ba261513feb7c5d3f64d42b7ea82",
          "message": "chore(skills): re-vendor viz-less SKILL.md to match main binary contract",
          "timestamp": "2026-07-20T07:35:01+02:00",
          "tree_id": "482a3800cf3e678420066b2d2922c3dfdec353d5",
          "url": "https://github.com/fallow-rs/fallow/commit/4551fc703c79ba261513feb7c5d3f64d42b7ea82"
        },
        "date": 1784525990778,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d9937cde797ecea0cd015ddacedd58a2fd867071",
          "message": "chore: release v3.7.0",
          "timestamp": "2026-07-20T08:43:24+02:00",
          "tree_id": "bce3fd11936daa8818656b2eb8dd3d83dfb77156",
          "url": "https://github.com/fallow-rs/fallow/commit/d9937cde797ecea0cd015ddacedd58a2fd867071"
        },
        "date": 1784530242922,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e96d32efc7c124aeae8da4b399cbb1a9a56fc906",
          "message": "perf(graph): elide per-name synthetic-export scan on star re-export synthesis path\n\n`matching_synthetic_export_index` did an O(source_exports) `.position()` scan\nper re-exported name on the star re-export synthesis path (both call sites in\n`ensure_matching_star_exports`), giving O(names x source_exports) on a wide\nvalue+type merge barrel.\n\nReplace it with `synthesize_and_locate_star_export`: the branch only runs when\nthe source carries no earlier `Named(name)` export of that type-ness (otherwise\n`build_named_export_index` would have populated the index and skipped it) and\n`name` is never `default` (filtered upstream in `apply_star_refs_to_source`), so\na freshly appended stub at `exports.len() - 1` is the unique first match. The\npositional scan is retained as a defensive fallback for the currently-unreachable\n`default` / non-appending cases, so output is byte-identical.\n\nFollow-up to #1843 / #1914. Closes #1916.",
          "timestamp": "2026-07-20T09:42:02+02:00",
          "tree_id": "3864b9c0d8bbc11d1510834e72a8608c94c786bd",
          "url": "https://github.com/fallow-rs/fallow/commit/e96d32efc7c124aeae8da4b399cbb1a9a56fc906"
        },
        "date": 1784533863843,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe845138c24513e0c73f14eb69b3f187c96fe9b3",
          "message": "chore(docker): pin FALLOW_VERSION 3.7.0 with refreshed checksums",
          "timestamp": "2026-07-20T10:01:08+02:00",
          "tree_id": "aa900f5cd5383fdbe0bd044b5585dca684d8632e",
          "url": "https://github.com/fallow-rs/fallow/commit/fe845138c24513e0c73f14eb69b3f187c96fe9b3"
        },
        "date": 1784534780034,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "dbae50c8da7012a71ae84c7b1ae7582311390efe",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.7.0",
          "timestamp": "2026-07-20T10:08:41+02:00",
          "tree_id": "a9bcf8d24bd7eb11b679ec9d6b09a0ea96b42945",
          "url": "https://github.com/fallow-rs/fallow/commit/dbae50c8da7012a71ae84c7b1ae7582311390efe"
        },
        "date": 1784535257851,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e20398e0809c10d47a46af8a351cdcef12d40285",
          "message": "fix(napi): restore @emnapi lockfile entries for cross-platform npm ci",
          "timestamp": "2026-07-20T10:26:26+02:00",
          "tree_id": "1cba20c4652fad2f21bc72491afc5bfe6ea2f9ba",
          "url": "https://github.com/fallow-rs/fallow/commit/e20398e0809c10d47a46af8a351cdcef12d40285"
        },
        "date": 1784536278683,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "124ad5cc84484f890cfd728240d6688d3b68df4d",
          "message": "fix(napi): bump lockfile fallow-node entries to v3.7.0",
          "timestamp": "2026-07-20T10:39:44+02:00",
          "tree_id": "03383d1f3a4318f706631c9828073077f8e936c7",
          "url": "https://github.com/fallow-rs/fallow/commit/124ad5cc84484f890cfd728240d6688d3b68df4d"
        },
        "date": 1784537210547,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d9185a5dc8258b44b89a8fbc670b6c55f0047e3",
          "message": "chore: prevent narrator-style comments\n\nAdd conservative comment guidance and a repository-owned guard for high-signal narrator comments while preserving Rustdoc, JSDoc, and non-obvious rationale.\n\nRun the guard for staged commits, Claude Stop hooks, and CI. Full-file context prevents false positives inside multiline strings, and repeated Stop hooks exit safely.",
          "timestamp": "2026-07-20T11:12:04+02:00",
          "tree_id": "4d7e554016e98edd67c1fce731138d171dccf299",
          "url": "https://github.com/fallow-rs/fallow/commit/0d9185a5dc8258b44b89a8fbc670b6c55f0047e3"
        },
        "date": 1784539099861,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dacea3780abcf5e2c5d98ac208a88a4cdeb3529e",
          "message": "fix: inherited-member (#1910) and tsconfig-alias (#1911) false positives\n\nTwo dead-code false-positive fixes: credit members reached through an inherited/generic base-class property (#1910), and activate the TypeScript plugin on tsconfig presence so paths aliases are not misreported as unlisted dependencies (#1911).\n\nCloses #1910\nCloses #1911",
          "timestamp": "2026-07-20T09:21:52Z",
          "tree_id": "430b7bd8dde924b133675adce583910e58523691",
          "url": "https://github.com/fallow-rs/fallow/commit/dacea3780abcf5e2c5d98ac208a88a4cdeb3529e"
        },
        "date": 1784539600353,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5988b978230134388b89060a39707a501211085a",
          "message": "chore: release v3.7.1",
          "timestamp": "2026-07-20T12:27:48+02:00",
          "tree_id": "2a8eb4aaa7cf4312714172670cd945dcd733705e",
          "url": "https://github.com/fallow-rs/fallow/commit/5988b978230134388b89060a39707a501211085a"
        },
        "date": 1784543766052,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e45850977cdecfe8624d5ec4abe7def0fe484bf",
          "message": "chore(docker): pin FALLOW_VERSION 3.7.1 with refreshed checksums\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-20T14:00:52+02:00",
          "tree_id": "cb735ea714bb297a16c03060aaa67ec08f2f61b2",
          "url": "https://github.com/fallow-rs/fallow/commit/8e45850977cdecfe8624d5ec4abe7def0fe484bf"
        },
        "date": 1784549279123,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "bfe588034642dfa5d812e9e06d8c79d00d3cb0ca",
          "message": "ci: replace docker-lockstep PR job with maintainer-flow Dockerfile pin\n\nThe release.yml docker-lockstep job opened a docker-lockstep/vX.Y.Z PR each\nrelease that then needed an admin merge. Fold the Dockerfile pin into the\nmaintainer release flow (fallow-release skill step 13) as a direct commit to\nmain, mirroring the crates/napi lockfile catch-up (step 12): download the\njust-published musl assets, re-hash them, run update-dockerfile-pins.mjs, and\npush. The ci.yml Docker job re-verifies the pin end-to-end on that commit.\n\nThe shared rewrite helper and its node --test suite stay. Refs #1817.",
          "timestamp": "2026-07-20T14:11:24+02:00",
          "tree_id": "50633c7753304941a21647e1b8381a13690fef9c",
          "url": "https://github.com/fallow-rs/fallow/commit/bfe588034642dfa5d812e9e06d8c79d00d3cb0ca"
        },
        "date": 1784549789526,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "443638cb2a7135230a5768ebc98948c87f87db0f",
          "message": "docs(changelog): move the fallow viz entry to Unreleased\n\nThe viz feature squash-merged while v3.7.0 was freshly cut, so the server-side\n3-way merge anchored its CHANGELOG entry inside the released 3.7.0 section even\nthough that binary does not contain viz. Move it under [Unreleased]. Also\nclarify the object-binding termination test comment to name the resolver's\nper-module caps (main's #1843 breadth and size caps) instead of the depth cap\nthis branch's now-superseded fix used.",
          "timestamp": "2026-07-21T11:39:34+02:00",
          "tree_id": "719fabeb50978ab23f43135eaf897a5ba37c09e7",
          "url": "https://github.com/fallow-rs/fallow/commit/443638cb2a7135230a5768ebc98948c87f87db0f"
        },
        "date": 1784627189806,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b47f16da3b607980aed5603a8db39fdff99c6472",
          "message": "fix(hooks): add viz-frontend/src to pre-commit JS lint scope\n\nfeat(viz) added viz-frontend/src to the lint:js / fmt:js:check targets in\npackage.json and to CI, but not to the pre-commit hook's staged-path\nexpression. The command-policy parity test enforces the hook mirror the\npackage.json scopes, so it failed once oxfmt stopped masking it. Mirror the\nnew scope in the hook.",
          "timestamp": "2026-07-21T13:34:54+02:00",
          "tree_id": "e33af38844f3e8aebcb6894c870cbd6460d02f05",
          "url": "https://github.com/fallow-rs/fallow/commit/b47f16da3b607980aed5603a8db39fdff99c6472"
        },
        "date": 1784634135302,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d3a107c408d5d1b7eec23965391b5fd13d0f64f7",
          "message": "fix(skills): regenerate SKILL.md so viz row matches generated order\n\nMy earlier re-vendor mirrored canonical, which placed the viz row after\n`workspaces` and tripped the contract bundle drift gate (generate-all emits\nit after `setup-hooks`). Regenerate from generate-all so the vendored copy\nsatisfies both the contract bundle and vendor-drift gates; canonical was\naligned in fallow-skills 241ddf6.",
          "timestamp": "2026-07-21T13:49:57+02:00",
          "tree_id": "0e147f3761af637343b1e1b3ab85094e74800477",
          "url": "https://github.com/fallow-rs/fallow/commit/d3a107c408d5d1b7eec23965391b5fd13d0f64f7"
        },
        "date": 1784634881262,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa5cff99933b7d37be9b7dabd99dcf5efbd8ca82",
          "message": "chore(deps): bump taiki-e/install-action from 2.82.10 to 2.83.2 (#1925)\n\nBumps [taiki-e/install-action](https://github.com/taiki-e/install-action) from 2.82.10 to 2.83.2.\n- [Release notes](https://github.com/taiki-e/install-action/releases)\n- [Changelog](https://github.com/taiki-e/install-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/taiki-e/install-action/compare/50414676f9f5d50a65992c6dd2ed02641263226c...43aecc8d72668fbcfe75c31400bc4f890f1c5853)\n\n---\nupdated-dependencies:\n- dependency-name: taiki-e/install-action\n  dependency-version: 2.83.2\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-21T15:33:22+02:00",
          "tree_id": "4ccccb17864a13cab73ff5413abcc369224ba681",
          "url": "https://github.com/fallow-rs/fallow/commit/aa5cff99933b7d37be9b7dabd99dcf5efbd8ca82"
        },
        "date": 1784641364180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b67f6ddd01b98a6b038ce0c19cae8ab7a9e954c",
          "message": "chore(deps): bump actions/setup-node from 6.4.0 to 7.0.0 (#1934)\n\nBumps [actions/setup-node](https://github.com/actions/setup-node) from 6.4.0 to 7.0.0.\n- [Release notes](https://github.com/actions/setup-node/releases)\n- [Commits](https://github.com/actions/setup-node/compare/48b55a011bda9f5d6aeb4c2d9c7362e8dae4041e...820762786026740c76f36085b0efc47a31fe5020)\n\n---\nupdated-dependencies:\n- dependency-name: actions/setup-node\n  dependency-version: 7.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-21T13:56:04Z",
          "tree_id": "41212ebb767fedf80c0adbbda0aae9f27f82ad03",
          "url": "https://github.com/fallow-rs/fallow/commit/3b67f6ddd01b98a6b038ce0c19cae8ab7a9e954c"
        },
        "date": 1784642460037,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9698f06c5a93231cea94dc2e1ff27813c0a432f1",
          "message": "chore(deps): bump astral-sh/setup-uv from 8.3.1 to 8.3.2 (#1933)\n\nClean GitHub Actions bump, all checks green.",
          "timestamp": "2026-07-21T16:14:52+02:00",
          "tree_id": "ffa68163faf9ca970b4daa98b1b331aad2645577",
          "url": "https://github.com/fallow-rs/fallow/commit/9698f06c5a93231cea94dc2e1ff27813c0a432f1"
        },
        "date": 1784643617539,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5184b9d74d2ede605538a96f1bae9ec0edaf73e3",
          "message": "fix: resolve audit and analysis improvement findings\n\nImprove inherited member and alias resolution, audit comparison context, styling attribution, and annotation safety across CLI, API, MCP, CI, and editor surfaces.\n\nReuse shared repository context for audit attribution and base snapshots, and reduce clone-family and warm CSS analysis overhead without changing stable output contracts. Preserve the existing CSS benchmark workload and track the heavier many-file workload separately.\n\nRefresh dependency coverage and invalidate affected extraction and audit caches.",
          "timestamp": "2026-07-22T10:13:36+02:00",
          "tree_id": "29fab722dabc0865d6662233b000dddb805f52df",
          "url": "https://github.com/fallow-rs/fallow/commit/5184b9d74d2ede605538a96f1bae9ec0edaf73e3"
        },
        "date": 1784708417437,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f0dcb3c2c3cdfda0b1341c221c93615ebe36868",
          "message": "chore(deps-dev): update TypeScript in viz frontend\n\nUpdate the visualization frontend to TypeScript 7. Its focused lint, test, and build checks pass.",
          "timestamp": "2026-07-22T11:16:18+02:00",
          "tree_id": "751862b29fcffa80ccae06fe5a86ffab3a8ef618",
          "url": "https://github.com/fallow-rs/fallow/commit/8f0dcb3c2c3cdfda0b1341c221c93615ebe36868"
        },
        "date": 1784712268562,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a495ce796f1c5f89fc07e5dd1f6c5fe0ca56bd1e",
          "message": "chore(deps): resolve nested workspace updates\n\nApply the useful nested-workspace dependency updates with their required compatibility changes. Migrate review Electron to TypeScript 7 and Babel 8, align its Node types with the embedded runtime, and hold Vite majors until electron-vite supports them.\n\nUpdate the N-API generator and checked-in loader, remove the unused Tinybench dependency, and preserve the Dependabot boundaries with repository policy tests.",
          "timestamp": "2026-07-22T11:40:49+02:00",
          "tree_id": "0302c416f04c93061a12aca874961d92a870a905",
          "url": "https://github.com/fallow-rs/fallow/commit/a495ce796f1c5f89fc07e5dd1f6c5fe0ca56bd1e"
        },
        "date": 1784714064748,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fbe048925397c809a429d640fd07d7df958e67f",
          "message": "fix(ci): hold incompatible React Vite plugin major\n\nKeep @vitejs/plugin-react on its Vite 7-compatible major while electron-vite 5 prevents the review app from moving to Vite 8. A clean install of the proposed plugin major fails its peer dependency resolution.\n\nExtend the repository policy test so Dependabot cannot reopen that incompatible major independently.",
          "timestamp": "2026-07-22T12:06:59+02:00",
          "tree_id": "5754ad1e137637c751ebca571c1ce45820bd01a9",
          "url": "https://github.com/fallow-rs/fallow/commit/1fbe048925397c809a429d640fd07d7df958e67f"
        },
        "date": 1784716209870,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4474ddd16488a27aee1e515e6f40e45c516f513",
          "message": "refactor: narrow internal Rust visibility with Hawk\n\nApply Hawk's lint-clean visibility reductions across internal Rust modules while preserving supported contract crates and externally compiled benchmark surfaces.\n\nKeep dead-public deletion out of scope until Hawk exposes stable cross-target identities, and align rustdoc with the narrower module boundaries.",
          "timestamp": "2026-07-22T13:02:02+02:00",
          "tree_id": "0b77dfec341fc8433b5835a7d2095be8925de35a",
          "url": "https://github.com/fallow-rs/fallow/commit/a4474ddd16488a27aee1e515e6f40e45c516f513"
        },
        "date": 1784719562826,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "038aa0b9c9c0ef61c699ced92aa110f7df93dd32",
          "message": "fix(zed): remove obsolete ed25519 feature\n\nRemove the obsolete `std` feature from the Zed extension's `ed25519-dalek` 3 dependency while keeping default features disabled.\n\nThis restores native tests and the packaged WASM build after the major dependency update in #1951.",
          "timestamp": "2026-07-22T13:31:16+02:00",
          "tree_id": "01938b811854bcce502f124c1eb5372673886973",
          "url": "https://github.com/fallow-rs/fallow/commit/038aa0b9c9c0ef61c699ced92aa110f7df93dd32"
        },
        "date": 1784720296196,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2e967fdb4fcd2bbe8d5fbaa4a09732369c418bc",
          "message": "fix(ci): make fuzzing operational\n\nRun every cargo-fuzz harness under AddressSanitizer for relevant pull requests and pushes, with a longer weekly campaign. Pin the nightly toolchain and cargo-fuzz version, validate locked dependencies, and preserve crash inputs as workflow artifacts.\n\nAlign corpus directories with their target names, enforce the workflow contract in policy tests, and exclude seed fixtures from fallow self-analysis. Keep each run bounded while allowing every target to execute even when an earlier target fails.",
          "timestamp": "2026-07-22T13:44:53+02:00",
          "tree_id": "3e430dfb011514b7aae61fb1a7ac00f5ff0b9969",
          "url": "https://github.com/fallow-rs/fallow/commit/c2e967fdb4fcd2bbe8d5fbaa4a09732369c418bc"
        },
        "date": 1784721078139,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29308d1c2e3a4ec957e2115bd906175abf6656a8",
          "message": "fix(ci): repair dependency validation gaps\n\nRequire the path-specific Zed job in aggregate CI, with a policy test preventing accidental removal.\n\nMake Electron E2E runs deterministic by reviewing isolated Git fixtures and resolving an available release, debug, or PATH binary. Keep screenshot capture separate from asserted E2E runs.",
          "timestamp": "2026-07-22T13:52:10+02:00",
          "tree_id": "98d934b1d294a01d40249c76b9c1d4a998a85eb0",
          "url": "https://github.com/fallow-rs/fallow/commit/29308d1c2e3a4ec957e2115bd906175abf6656a8"
        },
        "date": 1784721413077,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73cc071cf4d346cfc867e9270fc726a1e9977f8b",
          "message": "fix: credit Next.js fallback metadata exports\n\nNext.js resolves metadata and viewport exports from App Router fallback modules. Credit those framework-consumed exports for not-found, default, forbidden, unauthorized, and root global-not-found files while leaving unsupported special files and arbitrary helpers reportable.\n\nAdd exact plugin and integration coverage for static and generated forms, plus negative controls that preserve unused-export precision.\n\nFixes #1987.",
          "timestamp": "2026-07-22T16:21:32+02:00",
          "tree_id": "e0c96fb111ba5451a29f575ef613f280b8e311f9",
          "url": "https://github.com/fallow-rs/fallow/commit/73cc071cf4d346cfc867e9270fc726a1e9977f8b"
        },
        "date": 1784730526927,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "85f36fcdf367ea349cb77b6f647f7ae24e755236",
          "message": "chore: release v3.8.0",
          "timestamp": "2026-07-22T17:08:05+02:00",
          "tree_id": "99667e89bdc6e3390f7dd3e630c015a1d41334fa",
          "url": "https://github.com/fallow-rs/fallow/commit/85f36fcdf367ea349cb77b6f647f7ae24e755236"
        },
        "date": 1784733476948,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "acd28051c4c2c217f9fac612f288e9546c86b6c3",
          "message": "chore(docker): pin FALLOW_VERSION 3.8.0 with refreshed checksums",
          "timestamp": "2026-07-22T18:22:02+02:00",
          "tree_id": "5bf53cfdd40c8f868aabf82e4e2e49b99e4a7d96",
          "url": "https://github.com/fallow-rs/fallow/commit/acd28051c4c2c217f9fac612f288e9546c86b6c3"
        },
        "date": 1784738166894,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a85bcce4e5ae2df6ff4a3ab0550e5a5bf71d118",
          "message": "fix: preserve cloud runtime actionability\n\nPreserve the cloud runtime-context actionability decision, evidence reason, verdict, and deployment provenance in cloud analysis output.\n\nOlder cloud responses keep the existing tracked-function fallback. Repository self-audit also excludes the bundled comparison fixtures it should not treat as product source.",
          "timestamp": "2026-07-23T13:45:02+02:00",
          "tree_id": "dbb8600b33891813d461a24c30f955480a920dec",
          "url": "https://github.com/fallow-rs/fallow/commit/2a85bcce4e5ae2df6ff4a3ab0550e5a5bf71d118"
        },
        "date": 1784807516265,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe967602b0e6c71225406ab1dcb2087f2cbee9f3",
          "message": "chore: integrate trigger-tree agent telemetry\n\nIntegrate trigger-tree v1.21.0 for Codex and Claude Code with pinned plugin sources and project-specific documentation routing.\n\nKeep Fallow prompt telemetry hash-only, use an off fallback for unconfigured Codex repositories, preserve existing hooks, and document hook trust, upgrades, privacy, and removal.\n\nValidate both clients with real host sessions, client-attributed events, prompt privacy probes, healthy doctors, and repository gates.",
          "timestamp": "2026-07-23T14:25:14+02:00",
          "tree_id": "e8a9034fa9d07b180466002c0cdd0d1256a79a2b",
          "url": "https://github.com/fallow-rs/fallow/commit/fe967602b0e6c71225406ab1dcb2087f2cbee9f3"
        },
        "date": 1784809782510,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "69be8fc7a004f28e7a43e3ed3d9ad3eb64b962f7",
          "message": "chore: release v3.8.1",
          "timestamp": "2026-07-23T15:07:31+02:00",
          "tree_id": "08640f77484c57a195e14940f1dbb8ce096343df",
          "url": "https://github.com/fallow-rs/fallow/commit/69be8fc7a004f28e7a43e3ed3d9ad3eb64b962f7"
        },
        "date": 1784812604411,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "f2561ae8d7e7b3a4b602f8056a9531ce76e6ebf7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.8.1",
          "timestamp": "2026-07-23T16:53:11+02:00",
          "tree_id": "84fbfbf791f4d366d4c0389a2d7615ff5f826c0f",
          "url": "https://github.com/fallow-rs/fallow/commit/f2561ae8d7e7b3a4b602f8056a9531ce76e6ebf7"
        },
        "date": 1784818911339,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b652718d6934f22e7418c3dc2c96fcf43c181b9",
          "message": "chore: upgrade trigger-tree to v1.22.0\n\nPin the Claude and Codex Trigger Tree integrations to v1.22.0 and its exact tagged commit. Preserve Fallow's project prompt hashing and the Codex user-wide marker-only fallback.\n\nDocument and validate the new deterministic GitLab Code Quality output from the static documentation gate.",
          "timestamp": "2026-07-23T17:10:33+02:00",
          "tree_id": "46e205611ea647d87ff6ea7719f6fa78e7166a48",
          "url": "https://github.com/fallow-rs/fallow/commit/3b652718d6934f22e7418c3dc2c96fcf43c181b9"
        },
        "date": 1784819702244,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91869523531eca1fe5aae45af2d4fe6a6b6a385b",
          "message": "chore: upgrade trigger-tree to v1.23.1\n\nPin the Claude and Codex Trigger Tree integrations to v1.23.1 and its exact tagged commit. Use the upstream user-wide configuration layer for marker-only defaults while preserving Fallow's project hash override.\n\nKeep Codex CLI 0.144.6 deterministic through a local tag-exact marketplace entry until upstream issue #6 is resolved, without modifying Trigger Tree runtime code.",
          "timestamp": "2026-07-23T17:39:24+02:00",
          "tree_id": "f8859588b08b25c6d32f74f78b13832e927e2959",
          "url": "https://github.com/fallow-rs/fallow/commit/91869523531eca1fe5aae45af2d4fe6a6b6a385b"
        },
        "date": 1784821460429,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd3770291d0495b80a8fc724b7c32a463a2f8949",
          "message": "chore: upgrade trigger-tree to v1.23.2\n\nPin the Claude and Codex Trigger Tree integrations to v1.23.2 and its exact tagged commit. Use the official Codex marketplace now that relative plugin resolution makes the documented tag pin deterministic.\n\nPreserve the upstream user-wide marker-only default and Fallow's project hash override while removing the obsolete local marketplace wrapper.",
          "timestamp": "2026-07-23T17:56:58+02:00",
          "tree_id": "70783aeb270e7ad51ac35ed26b4c8e246642b700",
          "url": "https://github.com/fallow-rs/fallow/commit/fd3770291d0495b80a8fc724b7c32a463a2f8949"
        },
        "date": 1784822577128,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "faf2b968cfd44d94b34146575b853d64510f0aae",
          "message": "fix: preserve cloud never-called confidence\n\nPreserve the Cloud provenance that distinguishes runtime-observed never-called functions from inventory backfill.\n\nKeep inventory-backed, missing, and future provenance conservative. Only runtime-observed evidence can retain the existing high-confidence deletion recommendation.",
          "timestamp": "2026-07-23T19:17:09+02:00",
          "tree_id": "e5fddc0e980063a53dc7f59c72d193950bc73a9d",
          "url": "https://github.com/fallow-rs/fallow/commit/faf2b968cfd44d94b34146575b853d64510f0aae"
        },
        "date": 1784827372707,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      }
    ]
  }
}