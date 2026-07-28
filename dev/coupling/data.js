window.BENCHMARK_DATA = {
  "lastUpdate": 1785248996250,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Module Coupling": [
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
          "id": "e893500daea980960952ccb948c24c78f9c4b59f",
          "message": "docs(cli): drop intra-doc link to the cfg(test)-only UNSET snapshot (#1831)\n\nThe Documentation CI job documents non-test code, where\nRunAccumulatorSnapshot::UNSET does not exist, so the intra-doc link from\n#1830 was unresolved under -D warnings. Plain code span instead.",
          "timestamp": "2026-07-12T14:10:25+02:00",
          "tree_id": "cc027cbc180653c4f03b987f0fbc77d3424f58b7",
          "url": "https://github.com/fallow-rs/fallow/commit/e893500daea980960952ccb948c24c78f9c4b59f"
        },
        "date": 1783858490795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 986,
            "unit": "count"
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
          "id": "8cd68866fadd5c274c7bf261a8fb7c2436622f35",
          "message": "style(cli): wrap is_file_level_only matches! arm over rustfmt width (#1832)\n\nFollow-up to #1820: the added \"unused-file\" token pushed the matches!\nline over the rustfmt width; the contributor's fork disallows maintainer\nedits, so the wrap lands as this immediate follow-up.",
          "timestamp": "2026-07-12T19:45:18+02:00",
          "tree_id": "c77add0a1d66e0d8cac47deefa90ba807b6f57d1",
          "url": "https://github.com/fallow-rs/fallow/commit/8cd68866fadd5c274c7bf261a8fb7c2436622f35"
        },
        "date": 1783878402262,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 986,
            "unit": "count"
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
          "id": "2c21d5498e9c322669842d725da43423fdd092fc",
          "message": "fix(extract): scope this.* binding keys per enclosing class (#1833)\n\n`binding_target_names` is module-flat, so two classes in one module that\ndeclare a same-named field collided on the `this.<field>` key via\nlast-write-wins: `constructor(private dep: DepA)` in one class and\n`readonly dep = new DepB()` in another both wrote `this.dep`, so every\n`this.dep.*` access in the module resolved against the surviving target\nonly, and the losing class's dep members were falsely reported as\nunused-class-member cross-module. This is the collision behind the issue's\nprivParam row (order-dependent: reversing the class declarations flipped\nwhich class's members were flagged).\n\nQualify `this.`-rooted binding keys and receiver spellings with an internal\nper-class scope id during the walk (`this@<id>.<field>`), pushed and popped\nalongside the class-super / class-context stacks in `visit_class`. Both the\ninsert side and the access / whole-object / iteration-receiver read sides\nare qualified consistently, so the longest-prefix resolution and the typed\nproperty-hop expansion keep working within one class scope. The qualifier\nis an extraction-only disambiguator: `strip_this_scope_qualifiers` runs last\nin `finalize_resolution_phase`, after every resolution pass, and rewrites\nevery `this@<id>.` spelling back to `this.` across `member_accesses` and\n`whole_object_uses` before any spelling reaches `ModuleInfo`, so no\npersisted spelling and no downstream consumer (core self-access `== \"this\"`,\nheritage `!= \"this\"`, unused-component-output `this.<name>`, SFC template\n`starts_with(\"this.\")`) ever sees it. Bare `this` (the per-file self-access\nkey) and module-level `this` are never qualified.\n\nCorrecting last-write-wins removes accidental credit, so a member that\nexists on both colliding classes but is called on only one can surface as a\nnew true-positive finding. Validated on ten real-world projects: one such\nfinding (`NextNodeServer.revalidate` in next.js, where a `this.server`\ngetter on an unrelated class had been borrowing a sibling class's\n`server: NextNodeServer` field binding) and zero non-member drift.\n\nCACHE_VERSION 233 -> 234 (the emitted member_accesses change for modules\nwith same-named fields across classes; warm 233 caches keep the collision).\n\nFixes #1821",
          "timestamp": "2026-07-12T21:49:10+02:00",
          "tree_id": "bc6ab1b2c0eb6cca94da84fec8c310d9e3c18818",
          "url": "https://github.com/fallow-rs/fallow/commit/2c21d5498e9c322669842d725da43423fdd092fc"
        },
        "date": 1783885826639,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 986,
            "unit": "count"
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
        "date": 1783893226203,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 987,
            "unit": "count"
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
        "date": 1783932761623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 987,
            "unit": "count"
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
        "date": 1783935469131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 987,
            "unit": "count"
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
        "date": 1783939662543,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 987,
            "unit": "count"
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
          "id": "4789329b984be2a65ab7d3878825738f812d2a49",
          "message": "chore: release v3.4.2\n\nv3.4.0 and v3.4.1 never published: the relocated Windows correctness\njob failed both byte-comparison directions of the CRLF class (committed\nside CRLF in v3.4.0, generator-input side CRLF in v3.4.1). The\nrepo-wide LF normalization commit precedes this release; the 3.4.0\nchangelog content ships unchanged as 3.4.2.",
          "timestamp": "2026-07-13T13:34:25+02:00",
          "tree_id": "b1e75a7e2a4911de01eadf77439db666fed1301e",
          "url": "https://github.com/fallow-rs/fallow/commit/4789329b984be2a65ab7d3878825738f812d2a49"
        },
        "date": 1783943190359,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 987,
            "unit": "count"
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
          "id": "29770c49b2ca0ddf978fa502d8441620e7597981",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.4.2",
          "timestamp": "2026-07-13T15:01:41+02:00",
          "tree_id": "7ac98fc1ec476d0b4bc8dd67b1a59b7920fa3747",
          "url": "https://github.com/fallow-rs/fallow/commit/29770c49b2ca0ddf978fa502d8441620e7597981"
        },
        "date": 1783948043137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 987,
            "unit": "count"
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
        "date": 1783958741036,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 988,
            "unit": "count"
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
        "date": 1783960771952,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
            "unit": "count"
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
        "date": 1783967314346,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
            "unit": "count"
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
          "id": "91565369edcad66c4ec5bddb049be22d2bc31163",
          "message": "fix(output): conform feature-flags _meta to the published schema\n\n`fallow flags --format json` without --explain injects a _meta.telemetry block, but the schema required the explain-only feature_flags field and did not model telemetry, so the default-path document failed schema validation. The MCP feature_flags tool and Code Mode emit the same shape. FeatureFlagsMeta now models both fields optional, mirroring Meta/CombinedMeta. Wire bytes unchanged (no schema_version bump); schema + TS contracts regenerated; regression test added.\n\nFound by the plan-028 agent-surface instance-validation probe.",
          "timestamp": "2026-07-13T20:35:28+02:00",
          "tree_id": "4c1b03947381ab82b292b70c8306f409e5028068",
          "url": "https://github.com/fallow-rs/fallow/commit/91565369edcad66c4ec5bddb049be22d2bc31163"
        },
        "date": 1783967848613,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
            "unit": "count"
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
          "id": "06b8ccb911d5e364c158a92c8d6d29482d651d18",
          "message": "test(cli): per-IssueKind drift guard for the GitHub-native formats\n\nAdds a Rust guard iterating the counted dead-code ISSUE_RESULT_META rows and asserting each kind renders in both github-summary and github-annotations, mirroring the shell drift guard so the native GitHub surfaces cannot silently drop a counted IssueKind. Includes a fixture-vs-registry trip-wire and a count pin. Advisor plan 027 Phase A; hardens the live native path and prerequisites the eventual jq retirement (Phase B deferred).",
          "timestamp": "2026-07-13T20:39:56+02:00",
          "tree_id": "4b9bd3b5f64b1fee4669c5e5170af9b0c781b54c",
          "url": "https://github.com/fallow-rs/fallow/commit/06b8ccb911d5e364c158a92c8d6d29482d651d18"
        },
        "date": 1783968377112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
            "unit": "count"
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
        "date": 1783969113635,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
            "unit": "count"
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
          "id": "f0f242566fed03cee095aed08a7966cd8155d4ee",
          "message": "test: agent-surface contract tests (instance validation + cross-surface parity)\n\nHeld item F5. Adds instance-level conformance (jsonschema dev-dep) validating real api-serializer and real-binary JSON output per-kind against docs/output-schema.json, and a CAPABILITY_PARITY table drift-tested from all three agent surfaces (31 MCP tools, 7 napi exports, 17 api runners) with required omission-intent notes. The Step 0 probe found the feature-flags _meta schema bug fixed in #1845. Recorded follow-ups: un-enveloped trace serializers, unmodeled error envelope, possibly-orphaned SymbolChainTrace `trace` kind.",
          "timestamp": "2026-07-13T21:19:52+02:00",
          "tree_id": "ec203f4bc72b96184792d99897b5b4c0542ec970",
          "url": "https://github.com/fallow-rs/fallow/commit/f0f242566fed03cee095aed08a7966cd8155d4ee"
        },
        "date": 1783970554878,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
            "unit": "count"
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
        "date": 1783970878087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
            "unit": "count"
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
        "date": 1783972332768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
            "unit": "count"
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
        "date": 1783977326042,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
            "unit": "count"
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
        "date": 1783981177468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
        "date": 1784003988018,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
        "date": 1784007629229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
        "date": 1784012666160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
        "date": 1784022168578,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
          "id": "f15d741df3d05f922d721a2a30d110acaa1edeb3",
          "message": "fix(members): credit class members through object-literal factory returns (#1862)\n\n`unused-class-members` no longer false-flags a class method reached through a factory that returns an object literal whose property values are class instances (`export function createUi() { const factory = new InvokerFactory(); return { orders: factory.ordersPage } }`), consumed as `const ui = createUi(); ui.orders.member()`. This is the general root cause behind the Playwright page-object-factory pattern; it is not Playwright-specific.\n\nEvery property-value shape resolves: a direct `new Class()`, a local `const` alias, and a member read of a separately-constructed instance (field or getter). Nested literals, the assigned-then-returned form, and same-file consumption are covered, cross-module and same-file.\n\nAdditive, false-negative-only, over-credit-safe: a new `function_body_returns_object_shape` classifier captures the returned literal's shape; a finalize resolver reuses the proven #1785/#1788 `resolve_bound_object_name` + `expand_typed_property_compound` helpers; the shape persists on a new `ModuleInfo.exported_factory_return_object_shapes` field; a new `FactoryReturnObjectPropertyAccess` fact and `propagate_factory_return_object_accesses` analyze pass join them, gated by the existing `export_is_class_with_members` guard. CACHE_VERSION 234 to 235. The assigned-then-returned trace is restricted to `const` so a reassigned mutable binding cannot record a stale shape.\n\nOut of scope (documented follow-ups): a factory class in a different file than the factory function, a property value that is itself a factory call, and an unbound consumer call-chain.\n\nThanks @committedpazz for the precise bisection.\n\nFixes #1858.",
          "timestamp": "2026-07-14T14:29:07+02:00",
          "tree_id": "b61d4bd682e53c1bc12ab73fe14719ce031fbcc9",
          "url": "https://github.com/fallow-rs/fallow/commit/f15d741df3d05f922d721a2a30d110acaa1edeb3"
        },
        "date": 1784032291263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
        "date": 1784032922010,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
          "id": "a3f68d3c81c9304ee105c1896ab63da1120d0a17",
          "message": "fix(members): credit interface-typed property dispatch through implementers (#1863)\n\nunused-class-members false-flagged a method reached through a property whose declared type is an interface, on a class that implements that interface (ports-and-adapters / hexagonal DI): useIt(deps: Deps) { deps.greeter.greet() } where Deps.greeter: GreeterPort and class GreeterAdapter implements GreeterPort. The interface dispatch already worked through a direct parameter or variable; this closes the remaining gap where the receiver is reached via an interface property hop.\n\nThe #1785 typed-property hop resolves the terminal to interface GreeterPort, but the terminal credit only handled classes (export_is_class_with_members gates out interfaces), so it never reached the interface-to-implementer propagation that already covers the direct-parameter case. propagate_typed_property_accesses now routes an interface terminal to its canonical export key so the later propagate_interface_member_accesses pass carries the member to every implementing class.\n\nAdditive and false-negative-only. Analyze-only, so no CACHE_VERSION bump. Third in the #1785 / #1788 / #1858 cluster. Thanks @lukeramsden for the clean minimal reduction.\n\nCloses #1863",
          "timestamp": "2026-07-14T16:38:25+02:00",
          "tree_id": "c0583cfcc376ff50a6c5d81f6456c1c2d41f4fce",
          "url": "https://github.com/fallow-rs/fallow/commit/a3f68d3c81c9304ee105c1896ab63da1120d0a17"
        },
        "date": 1784040556172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
        "date": 1784044721055,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
        "date": 1784050181511,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
        "date": 1784051691859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
        "date": 1784057291806,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
          "id": "4e29fb136c133b964f1c0afa40ae00619930e594",
          "message": "fix(mcp): prevent stale process-group cleanup\n\nKeep completed Unix child leaders unreaped until their dedicated process group has been cleaned. This prevents stale process-group identifiers from targeting unrelated concurrent subprocesses.\n\nApply the protected lifecycle to MCP CLI subprocesses and Code Mode, while retaining Windows Job Object cleanup. Harden regression guards so cleanup never signals PIDs already confirmed dead.",
          "timestamp": "2026-07-14T22:11:24+02:00",
          "tree_id": "2cd1acd91e20cf30c54f8940ecdc6a2e0431d9d6",
          "url": "https://github.com/fallow-rs/fallow/commit/4e29fb136c133b964f1c0afa40ae00619930e594"
        },
        "date": 1784059958390,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
        "date": 1784060285103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
        "date": 1784096542220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
            "unit": "count"
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
        "date": 1784100078092,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 44,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1149,
            "unit": "count"
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
        "date": 1784109011291,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 44,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1149,
            "unit": "count"
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
        "date": 1784109592914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1151,
            "unit": "count"
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
        "date": 1784116164747,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1151,
            "unit": "count"
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
        "date": 1784134659405,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1151,
            "unit": "count"
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
        "date": 1784135625557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784136982207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784142493246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784148070741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784205601007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
          "id": "b5d94599737c419804015cd7f2596593d5b2843d",
          "message": "fix(cli): honor JSON style for audit-cache remove output\n\naudit-cache remove --format json used the always-pretty report::emit_json chokepoint; route it through emit_report_json so it is compact by default and honors --pretty, matching every other --format json command (values, fields, exit codes unchanged).",
          "timestamp": "2026-07-16T15:14:49+02:00",
          "tree_id": "8f1d5f1fddf1e08d9b06967a3786f3bdbe5913a8",
          "url": "https://github.com/fallow-rs/fallow/commit/b5d94599737c419804015cd7f2596593d5b2843d"
        },
        "date": 1784208032634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
          "id": "979a5591649778f4cb9ca8e03f959b8552b6ea59",
          "message": "perf: queue re-export propagation work\n\nReplace repeated full re-export scans with a deterministic FIFO queue that revisits only propagation edges affected by newly added state. Differential tests preserve the legacy result and stable ordering.\n\nKeep termination protection operational by bounding synthetic-export states to modules that actually contain star re-exports. Benchmarks retain the measured improvement at both reviewed chain sizes.",
          "timestamp": "2026-07-16T15:26:24+02:00",
          "tree_id": "7e96607c3d4ec1cae42bcc22bab4bfcc5e14d6e3",
          "url": "https://github.com/fallow-rs/fallow/commit/979a5591649778f4cb9ca8e03f959b8552b6ea59"
        },
        "date": 1784208857475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784210188201,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784501280914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784504535175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784530189917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784533756853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784535015660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784536081068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784536887634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784538852214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1152,
            "unit": "count"
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
        "date": 1784539398453,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1153,
            "unit": "count"
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
        "date": 1784543665018,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1153,
            "unit": "count"
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
          "id": "2e7d5bdc0e9b0fa564b7f98f7ce6b9b07e361f9e",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.7.1",
          "timestamp": "2026-07-20T13:53:45+02:00",
          "tree_id": "e7f3c47ed6d7bac7b84ccf92a1b8f43481579f06",
          "url": "https://github.com/fallow-rs/fallow/commit/2e7d5bdc0e9b0fa564b7f98f7ce6b9b07e361f9e"
        },
        "date": 1784548769775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1153,
            "unit": "count"
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
          "id": "094c4c1bb2cfccde19c2fa19e0d2d87e79137c9d",
          "message": "feat(viz): interactive codebase map (fallow viz)\n\nNew `fallow viz` command renders the codebase as a single self-contained\ninteractive HTML file (no server, no external assets): a nested treemap sized by\nbytes plus a force-directed import graph, sharing four lenses (dead code,\nduplication, boundaries, complexity hotspots). Clicking a file opens a detail\npanel with the evidence and a runnable `fallow ... --trace` verify command.\nSearch, breadcrumb drill-down, keyboard shortcuts, URL deep links, and dark/light\nthemes are built in; `--viz-format dot|mermaid` emit the import graph as text,\n`--no-open`/`--out` control output. Read-only, respects `--production`,\n`--config`, `--no-cache`.\n\nEngine databuilder `fallow_engine::viz::build_viz_data` runs from one project\nanalysis; `crates/cli/src/viz.rs` emits the HTML embedding the rolldown-bundled\nTypeScript frontend (`viz-frontend/` into `crates/cli/viz-assets/`), with payload\nescaping, a symlink-refusing `--out`, and control-char sanitization for the text\nformats.",
          "timestamp": "2026-07-21T11:34:58+02:00",
          "tree_id": "c0f1613ba3c72a1a048cfc33c304184da1031af8",
          "url": "https://github.com/fallow-rs/fallow/commit/094c4c1bb2cfccde19c2fa19e0d2d87e79137c9d"
        },
        "date": 1784626604249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1156,
            "unit": "count"
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
        "date": 1784626858045,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1156,
            "unit": "count"
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
        "date": 1784708351554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
        "date": 1784713608644,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
          "id": "31e30337a694755e762c93d7b627d3aea97c1de9",
          "message": "chore(deps): update Cargo lockfile dependencies\n\nUpdate regex, toml, toml_edit, and indicatif to their latest compatible releases after GitHub's Dependabot Cargo updater failed while generating the lockfile changes.\n\nInclude the compatible transitive lockfile updates selected by Cargo's resolver.",
          "timestamp": "2026-07-22T12:03:36+02:00",
          "tree_id": "367005f1de267fe92702134bd218b7478d4c6773",
          "url": "https://github.com/fallow-rs/fallow/commit/31e30337a694755e762c93d7b627d3aea97c1de9"
        },
        "date": 1784715198661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
          "id": "01779a66d8d2ec5e2ba905b1f409dce92cd7e03e",
          "message": "chore: integrate Hawk and upgrade Rust to 1.97.1\n\nUpgrade the default, development, and Linux release toolchains to Rust 1.97.1 while preserving and correctly enforcing the Rust 1.92 MSRV.\n\nAdd a pinned, checksum-verified Hawk 0.1.9 workspace audit with protected contract crates, scheduled artifact retention, and contributor guidance. Keep dead-public removal informational until Hawk exposes stable cross-target identities.",
          "timestamp": "2026-07-22T12:53:12+02:00",
          "tree_id": "81f509db076e6aa89a6f3915a7f54b969b1d1656",
          "url": "https://github.com/fallow-rs/fallow/commit/01779a66d8d2ec5e2ba905b1f409dce92cd7e03e"
        },
        "date": 1784717968763,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
        "date": 1784718347850,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
        "date": 1784730432816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
        "date": 1784733257416,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
          "id": "2f632e879b550d333df14dfae1ec50490f99a07d",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.8.0",
          "timestamp": "2026-07-22T18:20:56+02:00",
          "tree_id": "e1029e15210b9263478b4e4b892596fddc327fce",
          "url": "https://github.com/fallow-rs/fallow/commit/2f632e879b550d333df14dfae1ec50490f99a07d"
        },
        "date": 1784737794948,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
        "date": 1784807443525,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
        "date": 1784812367198,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
        "date": 1784818804721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
        "date": 1784827367422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
          "id": "ddbdaa94e3dadb5bf39914d17ddf100bdcc38c07",
          "message": "docs: harden maintainer knowledge architecture",
          "timestamp": "2026-07-23T22:40:55+02:00",
          "tree_id": "57260586ef2df0e5cf5a10ed16b78036e2132b22",
          "url": "https://github.com/fallow-rs/fallow/commit/ddbdaa94e3dadb5bf39914d17ddf100bdcc38c07"
        },
        "date": 1784839587168,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
          "distinct": false,
          "id": "3925887ede0b710c855a60d1a5a48e215593360b",
          "message": "docs: complete unreleased changelog",
          "timestamp": "2026-07-23T23:01:37+02:00",
          "tree_id": "9f549f91c275ee3116a72e9721ced17dcca9f9f1",
          "url": "https://github.com/fallow-rs/fallow/commit/3925887ede0b710c855a60d1a5a48e215593360b"
        },
        "date": 1784841724736,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
          "id": "b9f65158db327fba64d2bad2ebb216c1e4bb4693",
          "message": "chore: release v3.9.0",
          "timestamp": "2026-07-23T23:35:52+02:00",
          "tree_id": "30f8f746d0053f3a648f8ec516604b605572a26b",
          "url": "https://github.com/fallow-rs/fallow/commit/b9f65158db327fba64d2bad2ebb216c1e4bb4693"
        },
        "date": 1784842753160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
          "id": "3f6d4a5f817525d322365d64953940ff47175bf2",
          "message": "chore: release v3.9.1",
          "timestamp": "2026-07-24T00:01:26+02:00",
          "tree_id": "b65b4e0cfd7b53c4e78d3e744f2656632ffc91b1",
          "url": "https://github.com/fallow-rs/fallow/commit/3f6d4a5f817525d322365d64953940ff47175bf2"
        },
        "date": 1784844196013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
            "email": "bartwaardenburg@gmail.com",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "1548c96af4d6675a0a8488d7e0690fcc07f4413c",
          "message": "fix: validate Impact statusline flags",
          "timestamp": "2026-07-24T00:38:29+02:00",
          "tree_id": "d420bbd1259a67fbbe665d24342ae26a8699d078",
          "url": "https://github.com/fallow-rs/fallow/commit/1548c96af4d6675a0a8488d7e0690fcc07f4413c"
        },
        "date": 1784846716747,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
          "id": "45f1642a21b049771ecf54fb92133dda4ce0c1fe",
          "message": "chore(docker): pin FALLOW_VERSION 3.9.1 with refreshed checksums",
          "timestamp": "2026-07-24T01:22:42+02:00",
          "tree_id": "73bee3e92aa4e7f1025a39dade93875c9ed4741d",
          "url": "https://github.com/fallow-rs/fallow/commit/45f1642a21b049771ecf54fb92133dda4ce0c1fe"
        },
        "date": 1784849327507,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1154,
            "unit": "count"
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
          "id": "20972d541b1deadad79108d780ffae6fd9c48163",
          "message": "feat: add stable type-aware TypeScript analysis\n\n* chore: open type-aware proof of concept branch\n\n* feat: prototype type-aware class member refinement\n\n* fix: harden type-aware proof of concept\n\n* fix: cover type-aware sidecar in git hook\n\n* fix: keep unpublished flags out of agent docs\n\n* feat: mature type-aware class member refinement\n\n* fix: harden type-aware refinement gates\n\n* test: isolate case-sensitive sidecar projects\n\n* fix: satisfy Windows process tree lint\n\n* fix: harden type-aware release evidence\n\n* fix: defer type-aware corpus dependencies\n\n* test: isolate optional sidecar dependencies\n\n* feat: add project-wide type-aware analysis\n\n* test: cover type-aware protocol adapter\n\n* fix: apply type-aware API surface results\n\n* feat: complete type-aware analysis integration\n\n* fix: make type-aware CI dependencies explicit\n\n* feat: expand type-aware semantic analysis\n\n* feat: refine type-aware unused exports\n\n* fix: update vulnerable VS Code dependency\n\n* fix: harden type-aware export evidence\n\n* refactor: stabilize type-aware architecture\n\n* perf: benchmark type-aware cold and warm paths\n\n* fix: await instrumented type-aware benchmarks\n\n* fix: use supported CodSpeed walltime runner\n\n* fix: run type-aware walltime on available runner\n\n* feat: recommend type-aware analysis for TypeScript\n\n* fix(ci): verify branded PR comment author",
          "timestamp": "2026-07-27T12:30:03+02:00",
          "tree_id": "8d29e98abd6ab9eb32502f7ac2f06c942c1b26fd",
          "url": "https://github.com/fallow-rs/fallow/commit/20972d541b1deadad79108d780ffae6fd9c48163"
        },
        "date": 1785148538160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1163,
            "unit": "count"
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
          "id": "9746941c8cdc6cea9e287245bd46e54963c203f6",
          "message": "chore: release v3.10.0",
          "timestamp": "2026-07-27T13:12:14+02:00",
          "tree_id": "7ac54040090a916b3f8961fb88cd1f083a3864a7",
          "url": "https://github.com/fallow-rs/fallow/commit/9746941c8cdc6cea9e287245bd46e54963c203f6"
        },
        "date": 1785150811664,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1163,
            "unit": "count"
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
          "id": "ac87521aae348889b4aa8d7826d7fdd0fdf06f7b",
          "message": "fix: add breathing room to Fallow icons\n\n* chore: prepare icon breathing room update\n\n* fix: add breathing room to Fallow icons",
          "timestamp": "2026-07-27T13:47:15+02:00",
          "tree_id": "4f8bdfe262c925df0e1e7aeaa595b4d503d689a1",
          "url": "https://github.com/fallow-rs/fallow/commit/ac87521aae348889b4aa8d7826d7fdd0fdf06f7b"
        },
        "date": 1785153175193,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1163,
            "unit": "count"
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
          "id": "9b26c3a21ea6d2f15ccd21492408d36bd56406e3",
          "message": "test: stabilize Windows sidecar validation",
          "timestamp": "2026-07-27T16:26:14+02:00",
          "tree_id": "81749f10c5dde42bea7006090b13aa6925d66cba",
          "url": "https://github.com/fallow-rs/fallow/commit/9b26c3a21ea6d2f15ccd21492408d36bd56406e3"
        },
        "date": 1785162455491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1163,
            "unit": "count"
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
          "id": "c151c4ef468487308c62a8202e92fb1f07932dd6",
          "message": "fix: make type-aware release validation portable",
          "timestamp": "2026-07-27T17:04:09+02:00",
          "tree_id": "8b0bc9c95d042081217951e9e5e966e7b3a5e663",
          "url": "https://github.com/fallow-rs/fallow/commit/c151c4ef468487308c62a8202e92fb1f07932dd6"
        },
        "date": 1785164744117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1163,
            "unit": "count"
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
          "id": "1142d229914e21b25dba587d48983ecd6fb06fd4",
          "message": "test: expose type-aware CLI failure output",
          "timestamp": "2026-07-27T17:18:35+02:00",
          "tree_id": "912e7f901b1fe3b530d441ac2cc9d2d6596aedbe",
          "url": "https://github.com/fallow-rs/fallow/commit/1142d229914e21b25dba587d48983ecd6fb06fd4"
        },
        "date": 1785165727658,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1163,
            "unit": "count"
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
          "id": "7f3aee31f26599b8d1631a5a6821f8fd46128768",
          "message": "fix: normalize type-aware Windows paths",
          "timestamp": "2026-07-27T17:36:54+02:00",
          "tree_id": "0fd58de1d283f1bd6d8a939661167cbfa910e9ff",
          "url": "https://github.com/fallow-rs/fallow/commit/7f3aee31f26599b8d1631a5a6821f8fd46128768"
        },
        "date": 1785166731889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1163,
            "unit": "count"
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
          "id": "11bf96c8fcadfe58b247ceaea44c9de656950fde",
          "message": "fix: increase standalone icon safe area",
          "timestamp": "2026-07-27T15:43:43Z",
          "tree_id": "309750bdd7d62c1da34ceb8edb47fd65c736986c",
          "url": "https://github.com/fallow-rs/fallow/commit/11bf96c8fcadfe58b247ceaea44c9de656950fde"
        },
        "date": 1785167458834,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1163,
            "unit": "count"
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
          "id": "7667b6ab3b9987ab6f254947d0a005a4f6e0355a",
          "message": "test: share type-aware sidecar launcher",
          "timestamp": "2026-07-27T17:51:31+02:00",
          "tree_id": "0fc4f74b2b4d8b428d4f3570e150ea7bf83c1637",
          "url": "https://github.com/fallow-rs/fallow/commit/7667b6ab3b9987ab6f254947d0a005a4f6e0355a"
        },
        "date": 1785167709525,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1163,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "r.salhab@aiyexpertsolutions.com",
            "name": "Rayan Salhab",
            "username": "cyphercodes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d73cee930b1e20cf90fd33cdc202275e4581d2ac",
          "message": "fix(graph): preserve TypeScript path aliases excluded by ignorePatterns\n\nA tsconfig `paths` alias whose target is excluded from discovery by `ignorePatterns` fell through to npm-package classification and was reported as an unlisted dependency. The resolver now keeps the concrete target when the alias resolves inside the project root, while targets outside it keep npm-package accounting so workspace install symlinks stay credited.\n\nBumps GRAPH_CACHE_VERSION so a cache written before the change does not replay the old classification.\n\nFixes #1942",
          "timestamp": "2026-07-27T18:14:37+02:00",
          "tree_id": "c90768a88519b517156e5b96079564d12a32db63",
          "url": "https://github.com/fallow-rs/fallow/commit/d73cee930b1e20cf90fd33cdc202275e4581d2ac"
        },
        "date": 1785168940038,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1163,
            "unit": "count"
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
          "id": "cca693b5988ca2626d1f522e09df6fff954050ec",
          "message": "test: avoid global sidecar environment mutation",
          "timestamp": "2026-07-27T18:16:53+02:00",
          "tree_id": "70fc9a0df8679b4adc30e2ab77cd27ead7d48492",
          "url": "https://github.com/fallow-rs/fallow/commit/cca693b5988ca2626d1f522e09df6fff954050ec"
        },
        "date": 1785169108239,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1163,
            "unit": "count"
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
          "id": "d3b7350e7fc5e8df6bde87384738aed3eba17ac4",
          "message": "fix(deps): credit dependencies referenced by config callbacks and CLI flags\n\nResolves two unused-dependency false positives.\n\nThe config parser only traversed the concise arrow inside a config call, so a block-bodied `defineConfig(({ mode }) => { return { ... } })` extracted nothing. The vitest plugin also listed `vite.config.*` for activation only, never for parsing. With both fixed, a `test` block in a vite config is read again, and `canvas` is credited as the optional jsdom peer it is.\n\nScript and CI command parsing discarded flag values, so a package named only as a flag argument had no reference anywhere. eslint's `--format gha` shorthand now credits `eslint-formatter-gha`.\n\nMeasured on a real project: three false positives removed, none added.\n\nFixes #2005\nFixes #2006",
          "timestamp": "2026-07-27T18:25:25+02:00",
          "tree_id": "315accf3d79289ac4245008ba722ba9d2d5a142a",
          "url": "https://github.com/fallow-rs/fallow/commit/d3b7350e7fc5e8df6bde87384738aed3eba17ac4"
        },
        "date": 1785169601841,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 445,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1163,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "raihassanraza10@gmail.com",
            "name": "Muhammad Hassan Raza",
            "username": "M-Hassan-Raza"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55d72c006cfda0e5843bcdb12035ccf433320eaf",
          "message": "feat(config): add ignoreFindings to hide findings without removing files from the graph\n\nknip's `ignore` migrated to `ignorePatterns`, which removes matching files from discovery, resolution, and the module graph, so anything they imported became unreachable and surfaced as new findings. `ignoreFindings` hides the findings a path owns while keeping the file fully analyzed, and `fallow migrate` now targets it.\n\nA finding with multiple source owners is hidden only when every owner matches. Negated `!` patterns keep matching paths reportable. Architecture, policy, suppression-hygiene, and framework-correctness findings stay visible, as do manifest-owned findings that no source file owns.\n\nAdmin merge: the only failing check is Commit messages, which rejects a `merge:` subject in this branch's history. The squash collapses that history and this subject replaces it.\n\nCloses #1991",
          "timestamp": "2026-07-27T18:27:25+02:00",
          "tree_id": "40fbc4522266fce22678ecc573d2e945e0627516",
          "url": "https://github.com/fallow-rs/fallow/commit/55d72c006cfda0e5843bcdb12035ccf433320eaf"
        },
        "date": 1785169724744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
            "unit": "count"
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
          "id": "28810138faa8fdbc830b8d585d0c15d65c39c3fd",
          "message": "test: scope process lint expectation to Unix",
          "timestamp": "2026-07-27T18:36:55+02:00",
          "tree_id": "81f7a366361951493117f4736d3a811d6effdf83",
          "url": "https://github.com/fallow-rs/fallow/commit/28810138faa8fdbc830b8d585d0c15d65c39c3fd"
        },
        "date": 1785170307014,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
            "unit": "count"
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
          "id": "a8e0a2bb3611219c9a77a13324de38e25f93e421",
          "message": "fix(plugins): close config-extraction and dependency-crediting gaps\n\nWrapper calls were scanned for the first object literal at any argument position, so a wrapper's own options object shadowed the config whenever the config arrived as an identifier or a nested call, which is the shape the @sentry/nextjs wizard emits. Config callbacks were searched for a return only among top-level statements, so the mode-branching shape Vite documents extracted nothing. Vite and Vitest also load .cts and .cjs configs, which were not enumerated.\n\nAlongside those: the fully qualified `jest-environment-jsdom` now gets the same optional-peer credit as the bare name, `edge-runtime` credits `@edge-runtime/vm` instead of two names that do not exist, and scoped eslint formatters such as `@microsoft/eslint-formatter-sarif` are no longer mistaken for file paths.\n\nEvery change is paired with a negative case, and a real-project probe holds at 752 issues with all seven genuine unused dependencies still reported.\n\nAdmin merge: the only failing check is CodSpeed Performance Analysis, which reports an internal error while processing the run's data. Every benchmark job in the workflow itself succeeded, and analysis timing on a real project is unchanged (101-167ms against a 156ms baseline).",
          "timestamp": "2026-07-27T20:42:40+02:00",
          "tree_id": "5a47dbd4e0169278059c4a2b7f0a79cd42821a66",
          "url": "https://github.com/fallow-rs/fallow/commit/a8e0a2bb3611219c9a77a13324de38e25f93e421"
        },
        "date": 1785178105102,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
            "unit": "count"
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
          "id": "722e4a64347f3c7c544df5084ce9211b2aa18d25",
          "message": "chore(napi): refresh 3.10.0 lockfile after publish",
          "timestamp": "2026-07-27T21:01:11+02:00",
          "tree_id": "d2da57f724338c0b0a8278f3bdab4b1706403c63",
          "url": "https://github.com/fallow-rs/fallow/commit/722e4a64347f3c7c544df5084ce9211b2aa18d25"
        },
        "date": 1785178958867,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
            "unit": "count"
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
          "id": "742076bafcbcb626e8b39a01aa35ec13eddd86c0",
          "message": "fix(plugins): let a callback's own return outrank a branch return\n\nBranch descent searched returns at the same precedence as the callback's own statements, so a guard clause shadowed the real config: `if (!mode) { return {}; } return { test: {...} };` resolved to the empty object. That shape worked before descent existed, so it was a regression.\n\nA return at the body's own level now always wins; branches are searched only when there is none, which keeps Vite's documented if/else form working.\n\nThe test meant to guard this asserted the regressed value, so it locked the bug in rather than catching it. Replaced with cases that pin the trailing return, plus an else-if chain.\n\nAdmin merge: the only failing check is CodSpeed Performance Analysis reporting an internal error while processing the run's data; every benchmark job in the workflow succeeded.",
          "timestamp": "2026-07-27T21:38:40+02:00",
          "tree_id": "4b56dd17d210e593241e480bcfe8fb7a8b78001a",
          "url": "https://github.com/fallow-rs/fallow/commit/742076bafcbcb626e8b39a01aa35ec13eddd86c0"
        },
        "date": 1785181199164,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
            "unit": "count"
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
          "id": "52732287e06d6ca4886ec548c7686b7563724943",
          "message": "fix(brand): tighten standalone icon safe area",
          "timestamp": "2026-07-27T19:43:09Z",
          "tree_id": "b9374c05679fd87b6e32abc8d8c77bd9031a3985",
          "url": "https://github.com/fallow-rs/fallow/commit/52732287e06d6ca4886ec548c7686b7563724943"
        },
        "date": 1785181461318,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
            "unit": "count"
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
          "id": "2ffd3a327285b23e4163bd8b867d8b784a5d7f4e",
          "message": "fix: make report favicon edge to edge",
          "timestamp": "2026-07-27T21:44:29Z",
          "tree_id": "d37f37a0852463ca65cd18423f1e07e1d6eb10f6",
          "url": "https://github.com/fallow-rs/fallow/commit/2ffd3a327285b23e4163bd8b867d8b784a5d7f4e"
        },
        "date": 1785188733713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
            "unit": "count"
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
          "id": "e0ae72ba0344f3ab2cf9daa555463f5229672ca7",
          "message": "feat(plugins): parse nx.json and .releaserc.json, credit lightningcss and folded CI runs\n\nNx and semantic-release both listed a config file for activation but not for parsing, so it was protected from unused-file reporting while everything it declared stayed invisible. nx.json now yields its plugins, targetDefaults executors and task runners; .releaserc.json joins the JS forms already parsed, while the YAML forms and the extensionless variant stay activation-only because the extractor is a JS/JSON parser.\n\nVite ships the lightningcss integration but not the package, so css.transformer or build.cssMinify selecting it makes the dependency load-bearing with no import anywhere.\n\nThe CI scanner recognized only the literal block scalar, so a folded 'run: >' pushed the string '>' as the command and discarded the actual script.\n\nAn empty ignoreFindings pattern is also no longer a hard config-load failure: ignorePatterns already accepts it, and the error message named a negation the pattern does not contain.\n\nEach fix carries a negative control, and the real-project probe holds at 752 issues with all seven genuine unused dependencies still reported.\n\nCloses #2015",
          "timestamp": "2026-07-28T00:43:49+02:00",
          "tree_id": "9ad7d9b47329ee4a3067d16aceabc0bfd555e1b3",
          "url": "https://github.com/fallow-rs/fallow/commit/e0ae72ba0344f3ab2cf9daa555463f5229672ca7"
        },
        "date": 1785192560841,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
            "unit": "count"
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
          "id": "55944e88c96fe0cc60679470781808977fd1e0fc",
          "message": "fix(dupes): apply the duplication threshold gate to standalone runs\n\nStandalone `fallow dupes` rendered through `print_dupes_result_with_grouping`,\nwhich returned the renderer's exit code without ever consulting\n`exceeds_threshold`. The gate lived only in `print_dupes_result`, which\nstandalone runs no longer call after the grouping refactor, so\n`fallow dupes --threshold 1` exited 0 at 100% duplication and printed no\ndiagnostic. Both the `--threshold` flag and a `duplicates.threshold` config\nvalue were affected, in every output format. Combined mode (bare `fallow`)\nrendered through the second, near-identical function that did gate, so the two\nentry points disagreed.\n\nThe two renderers differed only in `group_by`, which `print_dupes_result`\nalready passed as `None`. That duplication is what let the gate drift out of\none copy, so they are collapsed into one: `print_dupes_result` delegates and\nthe gate moves onto the single shared renderer. The source diff is\nnet-negative. New coverage in `crates/cli/tests/dupes_tests.rs` exercises the\nflag path, the config path, and the output formats, each with a\nbelow-threshold control so it cannot pass vacuously. The existing\n`exit_code_tests` case asserted `code == 0 || code == 1`, true of any\nnon-crashing run, and was named for `--fail-on-issues`, which `fallow dupes`\ndoes not wire. It is renamed to `dupes_threshold_exits_1_with_clones`, asserts\nthe exit code exactly, and carries a comment recording why the inert flag is\nabsent. Wiring `--fail-on-issues` for dupes is a separate behaviour change and\nis out of scope here.\n\nProjects that set a duplication threshold and were silently passing will start\nfailing as documented. Runs that set no threshold are unaffected, since the\ndefault (`0`) still means no limit.\n\nFixes #2009.",
          "timestamp": "2026-07-28T02:37:53+02:00",
          "tree_id": "dc0a7a43d729e195b937921a821d25263be28584",
          "url": "https://github.com/fallow-rs/fallow/commit/55944e88c96fe0cc60679470781808977fd1e0fc"
        },
        "date": 1785199137853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
            "unit": "count"
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
          "id": "1e39ca6da3fe60a19b9ea64f7778d10be204f49c",
          "message": "docs(migrate): state that ignoreFindings is narrower than knip ignore (#2056)\n\nknip's ignore suppresses every issue whose file path matches, including dependency and manifest issues. fallow's ignoreFindings only hides findings a matching source file owns, so a migrated config silently narrows the semantics.\n\nfallow migrate now prints one note about that scope difference for every knip migration, not only when ignore was present. The generated config and the exit codes are unchanged.\n\nFixes #2017",
          "timestamp": "2026-07-28T16:02:49+02:00",
          "tree_id": "c42a71ded879dabba87ef13a1678c2369f26daa1",
          "url": "https://github.com/fallow-rs/fallow/commit/1e39ca6da3fe60a19b9ea64f7778d10be204f49c"
        },
        "date": 1785248992257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
            "unit": "count"
          }
        ]
      }
    ]
  }
}