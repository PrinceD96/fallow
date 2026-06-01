window.BENCHMARK_DATA = {
  "lastUpdate": 1780330388384,
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
          "id": "3f54a2d2656a3ae0fde8693486e738f2a66d75fa",
          "message": "feat(plugins): parse ng-packagr ng-package.json lib.entryFile as Angular library public API (#703)\n\nThe Angular plugin now reads lib.entryFile from ng-package.json /\nng-package.prod.json and treats it as a package entry point, resolved\nrelative to the config directory. ng-packagr, not the app graph, consumes\nthat file, so previously the public-api entry file surfaced as unused-file\nand its re-exported symbols as unused-export.\n\nWhen lib.entryFile is omitted it falls back to ng-packagr's schema default\nsrc/public_api.ts (underscore, per ng-package.schema.json; hyphenated\npublic-api.ts libraries set entryFile explicitly). Nested\nsecondary-entry-point configs in the package subtree are scanned too\n(bounded depth, skipping node_modules/dist/out/tmp/coverage/hidden dirs;\nsame-directory siblings left to config discovery). The plugin also\nactivates on a ng-packagr dependency in addition to @angular/core;\nenabler detection reads peerDependencies.\n\nVerified on unjs/unhead packages/angular: the primary entry plus the\nclient/server secondary entries (12 angular findings) flip from unused to\nused with zero collateral elsewhere. Benchmark counts unchanged on all\nfixtures (the path is gated behind Angular enablers + ng-package*.json).\n\nFixes #606",
          "timestamp": "2026-05-26T16:17:52+01:00",
          "tree_id": "c902536473f52db8fb02af22cf0db13168b4f331",
          "url": "https://github.com/fallow-rs/fallow/commit/3f54a2d2656a3ae0fde8693486e738f2a66d75fa"
        },
        "date": 1779808846293,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "eb934f3b435899da5d74bb1fb67c118548d82801",
          "message": "test(plugins): make Playwright nested-config-dir tests platform-absolute for Windows CI\n\nThe three nested-config Playwright tests passed `/project/apps/web/...`\nconfig paths, which are absolute on Unix but NOT on Windows (no drive\nletter). resolve_config's `parent().is_absolute()` gate therefore dropped\nthe nested config directory on Windows and fell back to the project root,\nfailing the assertions on windows-latest CI while passing on Unix.\n\nThe registry always passes a genuinely-absolute config path at runtime\n(drive-rooted on Windows), so the production resolution is correct; only\nthe tests were Unix-only. Added an `abs()` test helper that drive-roots\n`/project/...` logical paths on Windows and is the identity on Unix, and\nrouted resolve_at + the three nested assertions through it. Test-only\nchange, no production behavior difference.",
          "timestamp": "2026-05-26T17:32:23+02:00",
          "tree_id": "901c5a8ab28e9131b75d0cc5b835536ce2651d5e",
          "url": "https://github.com/fallow-rs/fallow/commit/eb934f3b435899da5d74bb1fb67c118548d82801"
        },
        "date": 1779809720183,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "c9d5682ac1beb16d4952fe098a60c6322e588d5f",
          "message": "chore: release v2.82.0",
          "timestamp": "2026-05-26T17:52:47+02:00",
          "tree_id": "94dde70ddc824f19cf6bf7f30fc107c5da118921",
          "url": "https://github.com/fallow-rs/fallow/commit/c9d5682ac1beb16d4952fe098a60c6322e588d5f"
        },
        "date": 1779810968395,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "b00e97c1253cf5fbf986dbf11baea64d4c8f9236",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.82.0",
          "timestamp": "2026-05-26T19:26:31+02:00",
          "tree_id": "cc4819276aa7c621ee7fa3fbeadc3d54c2fd1e47",
          "url": "https://github.com/fallow-rs/fallow/commit/b00e97c1253cf5fbf986dbf11baea64d4c8f9236"
        },
        "date": 1779816565801,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "0aecb80c6f7f7346cc46d4dd45790b2852d73c7f",
          "message": "fix(npm): swallow EPIPE on wrapper stdout so piped --version exits clean\n\nThe bin wrapper writes a trailing `verified:` status line to stdout after the\nchild binary exits. When stdout is piped to a reader that closes early (e.g.\n`fallow --version | head`), that write surfaced as an unhandled EPIPE 'error'\nevent and dumped a Node stack trace.\n\nEPIPE arrives asynchronously as an 'error' event on the stdout stream, not as a\nthrow, so a try/catch around the write cannot catch it. Install a stdout 'error'\nhandler that exits cleanly on EPIPE and rethrows every other code. Scoped to\nstdout so a genuine verification-failure write to stderr still exits 1.",
          "timestamp": "2026-05-26T20:20:37+02:00",
          "tree_id": "4783db8ace9868a519ed52b2180c9ed2cad55225",
          "url": "https://github.com/fallow-rs/fallow/commit/0aecb80c6f7f7346cc46d4dd45790b2852d73c7f"
        },
        "date": 1779819808888,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "1b91ccf1e04dc7dfb411d8fcca35315107b2f224",
          "message": "chore(deps): bump sha2 from 0.10.9 to 0.11.0 (#717)\n\nBumps [sha2](https://github.com/RustCrypto/hashes) from 0.10.9 to 0.11.0.\n- [Commits](https://github.com/RustCrypto/hashes/compare/sha2-v0.10.9...sha2-v0.11.0)\n\n---\nupdated-dependencies:\n- dependency-name: sha2\n  dependency-version: 0.11.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-26T22:15:04+01:00",
          "tree_id": "a7a37cbd2cd3e785e7ff52e0233f8e56515d48d1",
          "url": "https://github.com/fallow-rs/fallow/commit/1b91ccf1e04dc7dfb411d8fcca35315107b2f224"
        },
        "date": 1779830509282,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "033a5fa88d4e22320b737aa9f6b2d9035d9feb84",
          "message": "fix: parse browser extension manifest entrypoints\n\n* chore: open issue #616 implementation branch\n\n* fix: parse browser extension manifest entrypoints",
          "timestamp": "2026-05-26T22:32:35+01:00",
          "tree_id": "fc86255d043ff905ac5c0f143dff28c19360e2d7",
          "url": "https://github.com/fallow-rs/fallow/commit/033a5fa88d4e22320b737aa9f6b2d9035d9feb84"
        },
        "date": 1779831407411,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "89626663b10ddea96a9341ee06ed458fd5b653d9",
          "message": "feat: add Varlock plugin\n\nAdd a built-in Varlock plugin that keeps .env.schema reachable, credits package-like @plugin(...) schema references, and treats varlock plus @varlock/vite-integration as tooling dependencies.\\n\\nUpdate regression coverage and plugin-count docs.\\n\\nFixes #622.",
          "timestamp": "2026-05-26T22:38:13+01:00",
          "tree_id": "42fdb42b68d8fe4f70af8f0f950fb992a301d70f",
          "url": "https://github.com/fallow-rs/fallow/commit/89626663b10ddea96a9341ee06ed458fd5b653d9"
        },
        "date": 1779831666033,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "d8c40a1ab4032ae94dc415f72031ddc8fa528210",
          "message": "fix: share cross-platform absolute path helper\n\nMove the cross-platform absolute path helper into fallow-types while preserving the existing CLI re-export.\n\nUse the shared helper in the config extends resolver, plugin setup-file resolver, and health coverage path resolver so Windows-drive and POSIX-rooted absolute paths are not root-joined on the wrong host.\n\nFixes #614.",
          "timestamp": "2026-05-26T22:54:03+01:00",
          "tree_id": "5b9057774c29f26c4c41ed41e819c44d32ea5618",
          "url": "https://github.com/fallow-rs/fallow/commit/d8c40a1ab4032ae94dc415f72031ddc8fa528210"
        },
        "date": 1779832678871,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "a2ece98c46f8e93d64e1f9f821211117e28f7282",
          "message": "feat: add WXT plugin\n\n* chore: open issue #612 implementation branch\n\n* feat: add WXT plugin",
          "timestamp": "2026-05-27T06:34:14+01:00",
          "tree_id": "90eb1bd388bbf7fb26f8d1cdb5d367d93c5eee01",
          "url": "https://github.com/fallow-rs/fallow/commit/a2ece98c46f8e93d64e1f9f821211117e28f7282"
        },
        "date": 1779860361767,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "0c90dbf8e14973c113698f5c210d587249a2defe",
          "message": "feat: add Obsidian plugin support\n\n* chore: open issue 617 implementation branch\n\n* feat: add Obsidian plugin support",
          "timestamp": "2026-05-27T07:09:05+01:00",
          "tree_id": "31ac4e0e89f47d3f1492e3b53aee638584a4fa76",
          "url": "https://github.com/fallow-rs/fallow/commit/0c90dbf8e14973c113698f5c210d587249a2defe"
        },
        "date": 1779862290906,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "26635fbe5f2fcc92badc4a78c48d135d35874e8f",
          "message": "fix(graph): resolve no-exports workspace packages to source\n\nResolve workspace packages without exports back to source when legacy package fields point at missing prebuild output.\n\nAdd a focused workspace regression fixture for #725 and keep exports-blocked package map behavior unchanged. Gate an existing cwd-dependent path test under Miri isolation after CI exposed the unrelated failure on this PR.\n\nFixes #725.",
          "timestamp": "2026-05-27T08:14:09+01:00",
          "tree_id": "c7390dff1bdcb28499451c7f4bd73346d94dcd5d",
          "url": "https://github.com/fallow-rs/fallow/commit/26635fbe5f2fcc92badc4a78c48d135d35874e8f"
        },
        "date": 1779866210357,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "33806186d4bb583820240153132fd00dbfe14b11",
          "message": "feat: add public Fallow config corpus\n\n* chore: open issue 603 implementation branch\n\n* feat: add public config corpus tooling\n\n* fix(corpus): bound public config search subprocess\n\nAdd a timeout for the GitHub code-search subprocess so corpus generation cannot hang before raw config fetches begin. Surface search failures as a concise exit-2 error instead of a Python traceback.\n\nCover timeout validation in the offline fixture harness and document the live-run timeout flags.",
          "timestamp": "2026-05-27T08:23:26+01:00",
          "tree_id": "50b68b43f78151cb87f152c3858ca58c99f7e38a",
          "url": "https://github.com/fallow-rs/fallow/commit/33806186d4bb583820240153132fd00dbfe14b11"
        },
        "date": 1779866765913,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "abba841bd3bf1aa319a0c82726365cb55314511a",
          "message": "feat: add Contentlayer plugin\n\nAdd a built-in Contentlayer plugin that activates from Contentlayer and next-contentlayer packages or a root config file. The plugin keeps Contentlayer config files, generated .contentlayer modules, and static content roots reachable without requiring users to hand-maintain entry globs.\n\nThe config resolver credits imported packages and extracts static contentDirPath plus same-file defineDocumentType filePathPattern literals. Dynamic config execution and cross-file document type evaluation stay out of scope so the plugin avoids broad over-crediting.\n\nFixes #610.",
          "timestamp": "2026-05-27T08:27:32+01:00",
          "tree_id": "01b5ccc9ec41a775ec7d38ec34713f362432777b",
          "url": "https://github.com/fallow-rs/fallow/commit/abba841bd3bf1aa319a0c82726365cb55314511a"
        },
        "date": 1779867090374,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "041b717044b03317649fdedb2c21681f340cca2c",
          "message": "fix(health): sort file scores by triage concern and tag the driver\n\nSort file health scores by risk-aware triage concern instead of bare Maintainability Index, tag each human-table row with the signal that placed it, and break equal-concern ties by raw CRAP so the visible Risk column reads top-down.\n\nFixes #554.",
          "timestamp": "2026-05-27T08:52:18+01:00",
          "tree_id": "9ee977478dd6ebd1c8d2f77d2da6d558cd874a12",
          "url": "https://github.com/fallow-rs/fallow/commit/041b717044b03317649fdedb2c21681f340cca2c"
        },
        "date": 1779868553291,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "b98ab0c3d4ff232a87857241b491e29b63d121f4",
          "message": "docs(changelog): note audit Nuxt/Astro base-worktree symlink fix",
          "timestamp": "2026-05-27T09:14:26+01:00",
          "tree_id": "22ae48c58ab6c7eb236023d64d7fafa736120fd8",
          "url": "https://github.com/fallow-rs/fallow/commit/b98ab0c3d4ff232a87857241b491e29b63d121f4"
        },
        "date": 1779869840894,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "580ffd209ec33d6d8bd9dcbb746d7180091e2ef4",
          "message": "feat(action): configure artifact paths\n\n* chore: open issue #735 implementation branch\n\n* feat(action): configure artifact paths",
          "timestamp": "2026-05-27T09:59:05+01:00",
          "tree_id": "7feb0317c89b7c45383a31941519e0076259f55c",
          "url": "https://github.com/fallow-rs/fallow/commit/580ffd209ec33d6d8bd9dcbb746d7180091e2ef4"
        },
        "date": 1779872505585,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "8a1a699fa7482dc2d15427e006ff74cc19417bd5",
          "message": "feat: ignore unresolved imports by specifier\n\nCloses #726",
          "timestamp": "2026-05-27T10:21:33+01:00",
          "tree_id": "f6443cb41a853e6528688181f8d08fb50f5e085b",
          "url": "https://github.com/fallow-rs/fallow/commit/8a1a699fa7482dc2d15427e006ff74cc19417bd5"
        },
        "date": 1779873913698,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "92cc0594d45d2266153478496993a64c437bae87",
          "message": "feat(coverage): consume FunctionIdentity v2 across coverage joins\n\nAdopt fallow-cov-protocol 0.7.1's FunctionIdentity (a fallow:fn:<hash> join\nkey over file + name + start_line, line-position-independent). Fallow now\nproduces it on the static inventory and the sidecar request, and consumes\nidentity.stable_id as the join key (preferring it over (path, name, line)).\n\n- Inventory walker emits 1-indexed UTF-16 columns + end position per function;\n  upload-inventory builds a Resolved FunctionIdentity over the REPO-RELATIVE\n  path (not the --path-prefix-prefixed filePath) so producer and consumer agree.\n- health build_request constructs the now-#[non_exhaustive] StaticFunction via a\n  serde round-trip and attaches an Unresolved identity (stable_id only, no\n  columns; source not retained at health time).\n- convert_response, coverage analyze --cloud, and the cloud client thread\n  stable_id; analyze adds a stable_id-first match tier with a debug log when a\n  present stable_id diverges but path/name/line still matches.\n- Runtime-coverage JSON exposes stable_id on findings/hot-paths/blast/importance.\n- Baseline keys prefer stable_id when present; readers accept both the stable_id\n  and the legacy fallow:prod: id during the grace window, so old baselines keep\n  suppressing and new ones survive line moves.\n- --explain documents the fallback order and the suppression-key vs join-key\n  distinction. RiskBand/CoverageSource Unknown sentinels handled. Schema + TS\n  contracts regenerated.\n\nCloses #506",
          "timestamp": "2026-05-27T11:03:47+01:00",
          "tree_id": "0c55474739cf0c389d3e759488cf007a99a4ad29",
          "url": "https://github.com/fallow-rs/fallow/commit/92cc0594d45d2266153478496993a64c437bae87"
        },
        "date": 1779876368930,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "e581961b5f8f1a63708017c4aeeb8beb299e855a",
          "message": "docs(coverage): correct stable_id cross-surface framing\n\nA thorough end-to-end smoke (real published 0.3.0 sidecar) showed stable_id is NOT immune to a function moving lines: function_identity_id hashes start_line, so a moved function gets a new stable_id (verified: coldFn fallow:fn:de5223fd@2 -> fallow:fn:62a6be2a@5, and the finding resurfaced against a saved baseline).\n\nThe shipped #506 docs claimed stable_id 'survives line moves' and that baselines keyed on it 'keep suppressing after a function moves lines'. That is false. Correct the framing in CHANGELOG, the --explain text (explain.rs), the baseline.rs writer/reader comments, and the RuntimeCoverageFinding.stable_id doc to describe the ACTUAL property: stable_id is a cross-surface (one value across findings/hot-paths/blast-radius/importance; the per-finding id uses a per-surface salt) and cross-producer (V8/Istanbul/oxc agree, columns excluded) join key. Like id, it changes when file/name/start_line change.\n\nCode behavior is unchanged; this is a documentation accuracy fix. Schema + VS Code/npm TS contracts regenerated. Refs #506.",
          "timestamp": "2026-05-27T11:24:58+01:00",
          "tree_id": "86df69d5fb7e0554fe4b088aefa40da42b530ecf",
          "url": "https://github.com/fallow-rs/fallow/commit/e581961b5f8f1a63708017c4aeeb8beb299e855a"
        },
        "date": 1779877724559,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "429577db22e94059e6a5a674cc8522f5dba0f847",
          "message": "feat(plugins): resolve Nuxt convention auto-imported components in the module graph (#743)\n\nFrameworks like Nuxt expose components to templates by filesystem convention\n(`<Card001 />` resolving to `components/Card001.vue`) with no `import` statement,\nso fallow previously kept whole convention directories alive as entry points and\ncould never report a genuinely-unreferenced component as unused.\n\nThis adds a first-class `Plugin::auto_imports` capability. The work splits across\ntwo layers so per-file extraction caching stays correct: extraction captures the\nunmatched PascalCase template tags into `ModuleInfo.auto_import_candidates`\n(content-local, cached), and graph-build synthesizes the edges from the active\nplugins' auto-import table (a function of other files, never cached). The Nuxt\nplugin derives the directory-prefixed PascalCase name with prefix-overlap dedup,\npre-expands the implicit `Lazy` variant, strips `.client` / `.server` / `.global`\nsuffixes, and preserves acronym casing (`UICard`).\n\nSynthesis is unconditional and additive (a component's default export is credited\nunder `--include-entry-exports` with zero new `unused-file` reports). The opt-in\n`autoImports: true` config field gates only the Nuxt component entry-pattern\nremoval, guarded by a tolerant `components:` check on the root and workspace\n`nuxt.config` files so custom `prefix` / `pathPrefix` / `dirs` layouts keep their\nprotection. Composable, util, and Pinia store auto-imports are tracked separately\nin follow-up issues. Bumps the extract CACHE_VERSION for the new field.\n\nFixes #704.",
          "timestamp": "2026-05-27T12:04:56+01:00",
          "tree_id": "dc9924670aac42e7f8e04b0eaf800bea7dd8cdb0",
          "url": "https://github.com/fallow-rs/fallow/commit/429577db22e94059e6a5a674cc8522f5dba0f847"
        },
        "date": 1779880135298,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "92b245db9bd6eecc588360f0df8159251a39a215",
          "message": "fix: recognize tsdown mts and cts configs\n\n* chore: open issue #744 implementation branch\n\n* fix: recognize tsdown mts and cts configs\n\n* docs: correct plugin notes count",
          "timestamp": "2026-05-27T14:45:47+01:00",
          "tree_id": "45ca3f519f2924e2db1255edd572f9b3fb5f87d9",
          "url": "https://github.com/fallow-rs/fallow/commit/92b245db9bd6eecc588360f0df8159251a39a215"
        },
        "date": 1779889706556,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "7871342186d731f10d0f5caa971c57cbbd8aee2d",
          "message": "feat(coverage)!: adopt fallow-cov-protocol 0.8.0 stable_id recipe\n\nBump the fallow-cov-protocol pin 0.7 -> 0.8 in cli + extract so the CLI's\nemitted stable_id uses the reconciled recipe (NUL-delimited file/name/\nstart_line, 16 hex, fallow:fn: prefix), matching the cloud and sidecar\nproducers byte-for-byte. Updated the cross-producer conformance anchors\nto the 0.8.0 value (fallow:fn:cb4482d6aef7c79a for render@42).\n\nBREAKING: CLI-emitted stable_ids change. Runtime-coverage baselines\nwritten on 0.7.x re-surface once and need re-baselining; a\nfunction_identity_id_v1 grace-window match is a follow-up. source_hash\nline-move suppression (the additive #742 work) is unaffected.",
          "timestamp": "2026-05-27T15:52:28+02:00",
          "tree_id": "f8e1d0b75ee8c13a6c77c2e7123f99785077ee05",
          "url": "https://github.com/fallow-rs/fallow/commit/7871342186d731f10d0f5caa971c57cbbd8aee2d"
        },
        "date": 1779890237597,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "8c5618273a1c514abede395ba9cc1de37a158425",
          "message": "chore: release v2.83.0",
          "timestamp": "2026-05-27T16:24:18+02:00",
          "tree_id": "9e1a43f8439c7726bbaa8769f0db662382aaa357",
          "url": "https://github.com/fallow-rs/fallow/commit/8c5618273a1c514abede395ba9cc1de37a158425"
        },
        "date": 1779892081956,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "bcd212c555565601468535fb59a364a4f5bec638",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.83.0",
          "timestamp": "2026-05-27T17:00:27+02:00",
          "tree_id": "387d451daa0c0b8edf83c7aa30aafeb29165fb5a",
          "url": "https://github.com/fallow-rs/fallow/commit/bcd212c555565601468535fb59a364a4f5bec638"
        },
        "date": 1779894187601,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "9475785bd2600544b6d20161623e8655574f40d0",
          "message": "feat(plugins): add @sanity/pkg-utils build-config plugin (#749)\n\nProjects built with @sanity/pkg-utils discover their build configs by\nfilename convention rather than importing them from source, so each\npackage.config.* and package.bundle.* surfaced as an unused-file and had\nto be listed manually in the entry config.\n\nAdds a dedicated pkg-utils plugin that activates only on an exact\n@sanity/pkg-utils dependency (not the broad @sanity/ prefix the CMS\nsanity plugin uses, so plain @sanity/client consumers are unaffected). It\nmarks package.config.{ts,js,mts,mjs,cts,cjs} and package.bundle.* as\nalways-used at the repo root and in every workspace package (each pattern\nin bare and **/-prefixed form, since always_used matching uses\nliteral_separator with no auto prefix), and credits @sanity/pkg-utils as\na tooling dependency. No config parsing: the exports.source condition\nplus the workspace-package fallback already keep src/** reachable, so\nseeding package.bundle.ts's lib.entry would be redundant.\n\nThe credit is scoped to the two build-config filenames, so an\nunreferenced ordinary source file still reports. pkg-utils monorepos can\nnow drop the package.config.ts / package.bundle.ts lines from their entry\nconfig entirely.",
          "timestamp": "2026-05-28T12:22:03+01:00",
          "tree_id": "fcbc946a292393aed772a150f9885f7c4cd38704",
          "url": "https://github.com/fallow-rs/fallow/commit/9475785bd2600544b6d20161623e8655574f40d0"
        },
        "date": 1779967482844,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "1fe7ae6722408aa817501c164933637a57af56a9",
          "message": "chore: release v2.84.0",
          "timestamp": "2026-05-28T13:39:56+02:00",
          "tree_id": "f3d04772b3909376c77bee6e263d3ce2115b6aed",
          "url": "https://github.com/fallow-rs/fallow/commit/1fe7ae6722408aa817501c164933637a57af56a9"
        },
        "date": 1779968673253,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "739840a0fe4afd3744d7429774fae0aca3f0d236",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.84.0",
          "timestamp": "2026-05-28T14:16:12+02:00",
          "tree_id": "d1d920151f1c89d1d76d5fab046517e4d4794223",
          "url": "https://github.com/fallow-rs/fallow/commit/739840a0fe4afd3744d7429774fae0aca3f0d236"
        },
        "date": 1779970741460,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "c1e389f2bee8a7ef185dd4b6ff641cdf5f5a4dac",
          "message": "chore(skills): re-vendor npm/fallow/skills from canonical fallow-skills (#750)\n\nThe npm package ships npm/fallow/skills/ verbatim (it is listed in\npackage.json#files), but nothing ever re-vendored it from the canonical\nfallow-skills repo: release.yml has no sync step and the release flow only\nspot-checked for specific format-name tokens. It had silently drifted to\n\"97 framework plugins\" with a stale capability description while canonical\nwas at 114, so every recent release bundled outdated agent guidance.\n\nRe-vendors all four files (SKILL.md + the three references) so the bundled\ncopy is byte-identical to canonical fallow-skills (114 plugins, v2.84.0).",
          "timestamp": "2026-05-28T13:30:07+01:00",
          "tree_id": "aa1b09d539974d95738dbf18c39a148cfe5f30f0",
          "url": "https://github.com/fallow-rs/fallow/commit/c1e389f2bee8a7ef185dd4b6ff641cdf5f5a4dac"
        },
        "date": 1779971562320,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "38a0387a8baa0d127f5ff341d7f57586034da0c7",
          "message": "fix: catch baseline drift on config-only PRs\n\n* chore: open issue 746 implementation branch\n\n* fix: disable auto PR scoping for baseline config changes",
          "timestamp": "2026-05-28T13:34:02+01:00",
          "tree_id": "44cee84a34eba33a025983ec540196f096177a06",
          "url": "https://github.com/fallow-rs/fallow/commit/38a0387a8baa0d127f5ff341d7f57586034da0c7"
        },
        "date": 1779971796722,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "ff672bef2ae5895a0b7717fd8284b978b9686408",
          "message": "feat(dupes): clone fingerprint + trace-by-fingerprint deep-dive\n\n* feat(dupes): clone fingerprint + trace-by-fingerprint deep-dive\n\nAdd a stable content fingerprint (dup:<8hex>) to every clone group,\nsurfaced in the dupes human listing and the JSON output (clone_groups[]\nand the per-bucket --group-by output), and let 'fallow dupes --trace'\naddress a group by 'dup:<fp>' in addition to FILE:LINE.\n\nThe trace deep-dive now carries, per group, a fingerprint header, a\ngroup-level extract-function suggestion with estimated line savings, a\nbest-effort suggested name (dominant non-generic identifier; omitted when\ngeneric or tied), and a docs link.\n\nThe MCP trace_clone tool accepts an optional 'fingerprint' (file/line are\nnow optional, exactly-one-of enforced) so an agent can discover a group\nvia find_dupes (clone_groups[].fingerprint) and deep-dive it in one\nfollow-up call.\n\nThe fingerprint is derived from the representative instance's source\nfragment, so it is stable across runs, content-derived (not line-based),\nand sibling-stable (editing one group never changes another's id).\n\n* docs(dupes): document trace fingerprint, apply review notes\n\nCHANGELOG [Unreleased] entry, .claude/rules/mcp-server.md (trace_clone\ntwo addressing forms + TraceCloneParams now derives Default + find_dupes\nfingerprint), and .claude/rules/cli-crate.md (dupes --trace dup:<fp>).\n\nReview-note follow-ups: correct the clone_fingerprint empty-group\ndocstring, document the AttributedCloneGroupFinding fingerprint\norder-preservation invariant, and consolidate the duplicated docs URL\nonto the shared DOCS_DUPLICATION constant.\n\n* fix(dupes): never propose single-letter clone-extract names\n\nThe trace deep-dive's best-effort suggested_name now rejects any\nsingle-character identifier, so generic type params (T, U, K, V) and\nloop/lambda vars join the existing single-lowercase exclusions and are\nnever proposed as an extract-function name. Also document the\ndupes --trace dup:<fp> form in the README quick-reference.\n\n* fix(dupes): drop TS type keywords + globals from clone-extract names\n\nThe trace deep-dive's suggested_name was proposing TS primitive type\nkeywords (string, number, any, never, ...) and JS globals (Math, BigInt,\nJSON, ...) on type-heavy codebases, where they win the frequency count;\non zod they were the single most-proposed name. Extend is_generic_identifier\n(which already excluded void/object) with the remaining TS primitives and\ncommon globals, so these abstain instead. Verified on zod: the top name\nshifts from 'string' to 'expect'/'parse' and every keyword/global name is\ngone, while vue-core's real names are unaffected.\n\nAlso correct the MCP trace_clone description: suggested_name is OMITTED\n(serde skip_serializing_if), not null, when there is no confident name;\nagents should branch on key presence and never auto-apply.",
          "timestamp": "2026-05-28T19:10:06+01:00",
          "tree_id": "c31e1452f45377ce5cc1fbe4550b3678d307ea62",
          "url": "https://github.com/fallow-rs/fallow/commit/ff672bef2ae5895a0b7717fd8284b978b9686408"
        },
        "date": 1779991954600,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "bfb1e43410644b1d0376c62a8b9cf0661b4cd796",
          "message": "fix(scripts): credit a binary run via `bun --flag <bin>` in a script (#761)\n\nA package.json script like \"prepare\": \"is-ci || bun --bun prek install\"\nleft the providing package flagged unused. The shell parser treated\n`bun --bun ...` as a bare `bun <script>` invocation (like `yarn build`)\nand dropped the whole command before the `prek` binary could be resolved\nto its package.\n\nbun's leading boolean runtime flags (--bun, --watch, --hot, --smol,\n--no-clear-screen) are now skipped so the executed binary is extracted\nand credited through the existing bin-to-package map. `bun --watch run\ndev` and bare `bun <script>` still resolve to script delegations, and\n`bun x <pkg>` (the bun-native alias of bunx) is recognized. An\nunrecognized leading flag is conservatively treated as a script\ndelegation rather than guessed at, since it may consume a value.\n\nCloses #755",
          "timestamp": "2026-05-28T21:08:49+01:00",
          "tree_id": "8414e9c93daeae582b473d8c497c7aa378ba1f50",
          "url": "https://github.com/fallow-rs/fallow/commit/bfb1e43410644b1d0376c62a8b9cf0661b4cd796"
        },
        "date": 1779999084538,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "7d66ae525b5387a8bf41378a9fa42aaa286df16e",
          "message": "fix: resolve workspace imports when tsconfig paths point at unbuilt dist (#763)\n\nA common monorepo convention maps a sibling-package specifier to compiled\noutput in tsconfig (`\"@scope/*\": [\"../*/dist/index.d.ts\"]`). The TypeScript\nplugin registers `@scope/` as a path alias, so a `@scope/pkg` import matches\n`matches_plugin_alias`. When the project is analyzed pre-build, the dist target\ndoes not exist, `try_path_alias_fallback` returns None, and `resolve_specifier`\nreturned `Unresolvable` without trying the workspace-package fallback. Every\nconsumer reported `unresolved-import` and the package reported\n`unused-dependency`.\n\nIn the Failed branch's `is_alias || matches_plugin_alias` arm, fall through to\n`try_workspace_package_fallback` for a valid bare package specifier when the\nalias fallback fails, before reporting `Unresolvable`. The workspace fallback\nalready maps `dist`->`src`, so the import resolves against the package source.\n\nPre-build clone of graphql-markdown/graphql-markdown: 264 false\n`unresolved-import` findings and the matching `unused-dependency` reports clear.\nBenchmark deltas are directionally correct (astro/next.js/vite unresolved down,\nunused deps down; a small unlisted increase is correct reclassification of\npreviously-unresolved workspace imports).\n\nFixes #757",
          "timestamp": "2026-05-28T21:28:18+01:00",
          "tree_id": "345d36a26d1b63b2da6a09fdf2465a92efe39dfc",
          "url": "https://github.com/fallow-rs/fallow/commit/7d66ae525b5387a8bf41378a9fa42aaa286df16e"
        },
        "date": 1780000269064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "d22ba3781fb7c0588c7a62acd6fc242b41ff8ce2",
          "message": "fix(extract): credit class members used via typed destructure bindings (#762)\n\nClass methods/properties called as `<local>.<method>(...)` where `<local>`\nis a typed destructured binding (`let { resultState }: Props = $props()` with\n`interface Props { resultState: ResultState }`, or an inline type literal, or a\ndestructured function parameter) were reported as `unused-class-member`. The\nvisitor only seeded `binding_target_names` for `new`-expression instances,\nsingle-identifier typed bindings, formal params, and class properties, never\nfor destructured bindings, so neither script-level calls nor Svelte/Vue\ntemplate member access credited the class members.\n\nTyped destructure bindings now populate `binding_target_names`: inline type\nliterals resolve in place; named interface / object-type-alias references defer\nto a finalize step that resolves through a module-scope property-type map\n(source-order-independent, since interfaces hoist). Wired into the SFC path\nbefore the template scan reads the targets. Resolution is type-driven, so it\nalso covers plain TypeScript and Vue. Conservative: only bare single-name\nproperty types resolve; genuinely unused members are still reported.\n\nBumps the extract CACHE_VERSION (102 -> 103) because the resulting\nmember_accesses change.\n\nFixes #752",
          "timestamp": "2026-05-28T20:45:49Z",
          "tree_id": "d51918e2852f050046c6d27013648ee06ecfc900",
          "url": "https://github.com/fallow-rs/fallow/commit/d22ba3781fb7c0588c7a62acd6fc242b41ff8ce2"
        },
        "date": 1780001298236,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "ae4801953a1bf07f585b5795592671c4840f7451",
          "message": "fix: activate Danger plugin from dangerfiles\n\n* chore: open issue 758 implementation branch\n\n* fix: activate Danger plugin from dangerfiles",
          "timestamp": "2026-05-28T22:51:43+01:00",
          "tree_id": "7022d2bd7cf381aa7dca43696f7c41cd6ceb31d9",
          "url": "https://github.com/fallow-rs/fallow/commit/ae4801953a1bf07f585b5795592671c4840f7451"
        },
        "date": 1780005253694,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "a48fa7e875adb5cbf80fd7e003319568ca4a5e06",
          "message": "test(cli): guard credential redaction paths\n\nAdds regression guards for authenticated ureq paths that must pass transport errors through sanitize_network_error.\n\nAdds source-level guards that known credential-bearing CLI argument and request structs keep manual Debug implementations that redact token fields.\n\nRefs #476.",
          "timestamp": "2026-05-28T23:05:58+01:00",
          "tree_id": "aa3336e2d564054eb917ffa26e76ad6fe7b69708",
          "url": "https://github.com/fallow-rs/fallow/commit/a48fa7e875adb5cbf80fd7e003319568ca4a5e06"
        },
        "date": 1780006115485,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "7a1efb9bfce7a5e177c6a1bd008ce4365056a365",
          "message": "feat(health): add coverage intelligence verdict (#768)\n\n* chore: open issue #507 implementation branch\n\n* feat: add coverage intelligence verdict\n\n* fix: tighten coverage intelligence output",
          "timestamp": "2026-05-29T07:01:29+01:00",
          "tree_id": "9045cdfa4e17ce2e66c0b4ce5ca3d3f0d8073fbb",
          "url": "https://github.com/fallow-rs/fallow/commit/7a1efb9bfce7a5e177c6a1bd008ce4365056a365"
        },
        "date": 1780034644625,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "bd359f719bf1f512f32aed3bad6562fa6c5af0a6",
          "message": "fix(extract): preserve container source positions\n\nPreserve source-authored spans when MDX, Astro, Vue/Svelte SFC, and CSS/SCSS extraction feed generated fragments through the JavaScript parser. The shared remapper translates parsed spans back to original container byte offsets before module info is finalized, while intentionally synthetic reachability edges remain unpositioned.\n\nAlso credit Svelte 5 $derived(new Class()) and $derived.by(...) template member access through the derived class instance.\n\nCloses #445.",
          "timestamp": "2026-05-29T06:43:04Z",
          "tree_id": "b01bed3d94bec33fd8e37788dabe070966551de5",
          "url": "https://github.com/fallow-rs/fallow/commit/bd359f719bf1f512f32aed3bad6562fa6c5af0a6"
        },
        "date": 1780037134911,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "51e5aa2199c98611d72f84f7506e61e655b2b75c",
          "message": "test(cli): snapshot coverage-intelligence render + drop stale dead_code allow (#771)\n\n* chore(health): drop stale dead_code allow on includes_crap\n\nExceededThreshold::includes_crap carried an #[allow(dead_code)] whose doc\ncomment claimed \"the binary target has no direct caller today\". That is no\nlonger true: baseline.rs, finding.rs, health/mod.rs, and the new\ncoverage_intelligence.rs all call it on the binary side, so the lint cannot\nfire. Remove the attribute and the stale rationale, aligning the doc comment\nwith its includes_cyclomatic / includes_cognitive siblings. Clippy stays\nclean with -D warnings.\n\n* test(cli): snapshot coverage-intelligence render across formats\n\nAdd a HealthReport fixture that carries a populated coverage_intelligence\nblock (a risky changed hot path plus a high-confidence delete candidate, with\none ambiguous match skipped) alongside runtime coverage, then render it\nthrough the public build_health_json / build_health_markdown /\nbuild_health_sarif / build_health_codeclimate entry points and snapshot each.\n\nPreviously the coverage-intelligence rendering was exercised only by\nper-format helper unit tests; these committed snapshots lock the live combined\nwire format across all four string-returning formats so future changes to the\nblock surface as reviewable snapshot diffs. The compact path keeps its\nexisting dedicated unit test (it prints to stdout rather than returning a\nstring).",
          "timestamp": "2026-05-29T06:56:51Z",
          "tree_id": "f11e27302b06d0014a2552c15df217e69c5287da",
          "url": "https://github.com/fallow-rs/fallow/commit/51e5aa2199c98611d72f84f7506e61e655b2b75c"
        },
        "date": 1780037961771,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "0a3791a07ff9d064cd7bf2f568e06c982ccb62cc",
          "message": "fix: harden dupes deep-dive handles (#769)\n\nReport-scoped dupes fingerprint assignment preserves short dup:<8hex> handles by default and widens only colliding groups, routed through human output, JSON wrappers, grouped output, clone-family nested groups, and trace lookup so ambiguous short handles never resolve to the wrong group.\n\nTightens suggested_name selection with deterministic scoring, structured-name preference, near-tie abstention, and stronger margins for plain single-token names. Updates MCP/README/CHANGELOG/schema/generated TypeScript contract wording for widened fingerprints.\n\nCloses #759",
          "timestamp": "2026-05-29T07:08:55Z",
          "tree_id": "18a37376184019ab08a7bae032649f590f718d3d",
          "url": "https://github.com/fallow-rs/fallow/commit/0a3791a07ff9d064cd7bf2f568e06c982ccb62cc"
        },
        "date": 1780038694972,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "de3503081b23a8ba6d0962a47424ed74174eec42",
          "message": "feat(telemetry): opt-in agent and CI workflow telemetry\n\nOpt-in, off-by-default product telemetry for improving agent, CI, MCP, and editor workflows.\n\nAdds `fallow telemetry status|enable|disable|inspect`, coarse allowlisted workflow events (never code, paths, names, config, or raw env), `FALLOW_AGENT_SOURCE` attribution, and a non-blocking best-effort upload that never affects command output or exit code. DO_NOT_TRACK honored. Docs and drift-guard tests included.",
          "timestamp": "2026-05-29T07:37:47Z",
          "tree_id": "292f3789fda0ba9eda79e82b87d2a0470cec1e0b",
          "url": "https://github.com/fallow-rs/fallow/commit/de3503081b23a8ba6d0962a47424ed74174eec42"
        },
        "date": 1780040433607,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "2221f056c19880ef70edad19a5b0c3f1262fded3",
          "message": "feat(plugins): add Velite plugin (#774)\n\n* feat(plugins): add Velite plugin\n\nDetect Velite content-pipeline projects (velite dependency or\nvelite.config.{ts,mts,cts,js,mjs,cjs}). Keep the config and generated\n.velite output reachable, traverse the hidden .velite dir, and parse\ndefineConfig/defineCollection to mark content roots (root default\ncontent, joined with each collection pattern) as support entry points\nso Velite-managed markdown/MDX content is not reported as unused.\nCredit velite as a tooling dependency.\n\nRefs #609\n\n* test(plugins): add Velite integration fixture (#609)\n\npetersen-pack-shaped fixture: velite.config.ts, content/blog content,\nand generated .velite output stay credited; an MDX file outside the\ncontent root and a plain orphan stay reported; left-pad stays an\nunused dev dependency. Verified regression-strength (fails when the\nplugin registration is removed).\n\n* fix(plugins): refine Velite output-data + negation handling; document\n\nAddress review of the Velite plugin: fall back to the content-root glob\nwhen only negation patterns survive (not just when no pattern parses),\nand compare the raw output.data value against the default before\nnormalizing so a monorepo config that spells out the default .velite\ndoes not add a redundant always-used entry. Add tests for negation-only\nfallback, default output.data in a workspace, and config-relative custom\noutput.data.\n\nDocument the plugin in detection.md and plugins.md (rich-config count\n25 to 26, total 110 to 115), bump the README plugin count to 115, and\nadd a CHANGELOG entry.\n\nVerified on BlakePetersen/petersen-pack: velite.config.ts and 43\ncontent MDX files flip from unused to credited, zero new findings.\n\nRefs #609",
          "timestamp": "2026-05-29T07:50:40Z",
          "tree_id": "1e782fab9918555ff9e31de0753774745fddcc47",
          "url": "https://github.com/fallow-rs/fallow/commit/2221f056c19880ef70edad19a5b0c3f1262fded3"
        },
        "date": 1780041209374,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "56a30b5f529fbbfa40871b6e783548c75f0d84a9",
          "message": "feat(core): enforce git-only process spawning on the analysis path (#773)\n\n* feat(core): enforce git-only process spawning on the analysis path\n\nfallow's static analysis never executes the analyzed project's code; the\nonly external program the analysis path runs is git. This makes that\ninvariant machine-checkable instead of a prose promise.\n\nAdds fallow_core::spawn::git, the single sanctioned caller of\nstd::process::Command::new in fallow-core/extract/graph, and routes the\nexisting changed_files and churn git invocations through it. A new\n.clippy.toml disallowed-methods ban on std::process::Command::new is set\nto allow workspace-wide (the CLI and MCP crates legitimately spawn git\nworktrees, the coverage sidecar, and subprocesses off the analysis path)\nand re-denied at the crate root of fallow-core/extract/graph via\ncfg_attr(not(test)), so any new process spawn on the analysis path fails\nthe build and the author is pointed at the wrapper. Test helpers that\nshell out to git to build fixtures stay exempt.\n\nA new safe_analysis integration test is the runtime backstop: it runs\nanalysis on a project whose package.json declares preinstall/postinstall/\nprepare scripts that would write a sentinel file, and asserts the sentinel\nnever appears (fallow reads package.json as data, it never invokes a\npackage manager).\n\n* chore(security): harden build-time supply chain and document the trust boundary\n\nSets `yanked = \"deny\"` in deny.toml so a yanked crate (an early signal of\na withdrawn or compromised release) fails the cargo-deny gate, alongside the\nexisting advisories-deny-by-default, wildcard ban, and unknown-source ban.\nCargo build scripts and proc-macros run arbitrary code at build time on the\nrunner that signs fallow's binaries, and npm --ignore-scripts does nothing\nfor that Cargo-side vector, so cargo-deny is the gate for it.\n\nDocuments the build-time trust boundary in SECURITY.md as a section distinct\nfrom the existing runtime threat model, and notes that the runtime\n\"does not execute user code\" property is now compile-time enforced via the\nanalysis-crate Command::new ban introduced in the preceding commit.\n\n* test(core): make the safe-analysis non-vacuity assertion graph-dependent\n\nMake index.ts the package `main` so it is an entry point, then assert\nused.ts is reachable (NOT unused) in addition to orphan.ts being unused.\nThe used.ts assertion specifically requires the import graph to have been\ntraversed; the prior orphan-only assertion passed even with no entry points\n(all files unreachable), so it did not actually prove the pipeline ran.\n\n* docs(core): document the spawn::git process-spawn boundary in the crate rule\n\n* refactor(core): use #[expect] over #[allow] on the spawn::git guard suppression\n\nThe lint fires (Command::new is actually called), so #[expect] is fulfilled\nin both the non-test deny config and the test allow config. Per\n.claude/rules/code-quality.md, #[allow] is reserved for cases where #[expect]\nwould be unfulfilled; this is not one.\n\n* docs(core): use a colon separator in the spawn.rs rule entry (no em-dash)",
          "timestamp": "2026-05-29T08:10:09Z",
          "tree_id": "6989cc0986a9e5b9b9333ddb9ebd1f83dfc876a4",
          "url": "https://github.com/fallow-rs/fallow/commit/56a30b5f529fbbfa40871b6e783548c75f0d84a9"
        },
        "date": 1780042366122,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "88f5eb3d1cc3f82f4cef07c23615a52157d0debc",
          "message": "chore(ci): pass --ignore-scripts on dev-dependency installs (#775)\n\nThe CI dev-dependency installs ran lifecycle scripts of transitive\ndependencies (a supply-chain execution surface). Adds --ignore-scripts to\nthe four installs that lacked it: the NAPI npm ci (debug build + Windows\nARM64), the root npm ci (oxlint/oxfmt tooling), and the editors/vscode\npnpm install. Verified each consuming build still works with scripts\ndisabled: root oxlint + oxfmt resolve their platform binaries, the\n@napi-rs/cli binary resolves, and the editors/vscode rolldown build\ncompletes. None of these dependencies needs an install lifecycle script\n(all use lazy platform-binary resolution), so there is no exception to\ndocument. The published-package install test at ci.yml already asserts\nzero-script install; this extends the same posture to the dev installs.",
          "timestamp": "2026-05-29T10:29:45+02:00",
          "tree_id": "5b3cde6bc95b02bdfec6998b25a0ae4c14ddd031",
          "url": "https://github.com/fallow-rs/fallow/commit/88f5eb3d1cc3f82f4cef07c23615a52157d0debc"
        },
        "date": 1780043555380,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "2c2ddebfbb90052cdc166a1bd714c587577f1016",
          "message": "chore(telemetry): changelog entry, retention wording, cross-repo allowlist drift checker\n\nAdds the [Unreleased] telemetry CHANGELOG entry, corrects retention wording to match the server, and adds a release-time cross-repo agent-source allowlist drift checker.",
          "timestamp": "2026-05-29T08:32:39Z",
          "tree_id": "9f37cc740460319c359ff5c8df208c2e1cf72590",
          "url": "https://github.com/fallow-rs/fallow/commit/2c2ddebfbb90052cdc166a1bd714c587577f1016"
        },
        "date": 1780043719455,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "8b537dc9a3430d465338b223793b5905e8bf0a78",
          "message": "chore(security): guard against hidden-unicode and agent-file poisoning (#779)\n\nAdds scripts/scan-hidden-unicode.py, a stdlib scanner shared by two\ndefense-in-depth guards against the agent-context-poisoning supply-chain\nclass:\n\nT2 (committed surface, blocking): the pre-commit hook scans staged text\nfiles and a CI step (the Typos job) scans the tracked surface for\nzero-width and bidirectional-override code points. Emoji ZWJ sequences are\nallowlisted so family/profession emoji pass. A hit fails the commit / CI;\nthese characters have no legitimate place in source.\n\nT1' (local agent surface, advisory): a Claude Code SessionStart hook scans\nthe agent-instruction allowlist (AGENTS.md, .codex/**, .claude/**,\n.cursorrules, *.mcp.json) INCLUDING untracked / gitignored files that never\nreach a pull request. Hidden code points are reported; shell-exec injection\nshapes (curl | sh, base64 -d, eval, node -e) are warn-only and only on the\nun-reviewed (untracked) files, since tracked reviewer prompts legitimately\ndiscuss those commands and blocking on a bypassable heuristic is theater; a\nscripts/agent-files.sha256 baseline warns (never blocks) when a tracked\nagent file changed since it was last blessed. The hook never hard-blocks a\nsession.\n\nscripts/test-scan-hidden-unicode.sh drives the scanner over a fixture tree\n(clean / zero-width / bidi / family-emoji / keyword / drift) and asserts the\nexit codes; it runs in CI alongside the scan. SECURITY.md documents the\nagent-instruction surface.",
          "timestamp": "2026-05-29T08:41:30Z",
          "tree_id": "7e29e3ee4c1efb98fd158b412a3c9eecca9ed8f4",
          "url": "https://github.com/fallow-rs/fallow/commit/8b537dc9a3430d465338b223793b5905e8bf0a78"
        },
        "date": 1780044247399,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "54e50793b2ee8797dee43c049aec3a3378da5279",
          "message": "chore(ci): trigger required workflows on merge_group for merge queue (#778)\n\nPrepares for enabling GitHub's merge queue on main. A merge queue runs\nrequired status checks against a synthetic merge_group ref; any required\ncheck whose workflow does not trigger on merge_group never reports, which\nstalls the queue permanently.\n\n- Add merge_group: to the on: triggers of ci.yml and commitlint.yml (the\n  only two workflows that own required checks).\n- Add '|| github.event_name == merge_group' to every path-gated required\n  job in ci.yml (check, doc, npm-package, fallow-self-analyze, vscode,\n  windows-arm64, test-gitlab-ci, audit, deny, shear, zizmor). On a\n  merge_group event the paths-filter base-ref differs and the existing\n  '== push' escape does not fire, so without this the jobs skip and a\n  skipped required check stalls the queue.\n- miri runs on merge_group too (previously pull_request-only).\n- zed and msrv are intentionally left unwired: neither is a required\n  check (msrv is if:false and was removed from required checks separately),\n  so skipping them in the queue is harmless and saves CI time.\n\nThese triggers are inert until the merge queue is enabled on main, so this\nis safe to land ahead of that switch. No runtime or output change.\n\nRefs #444.",
          "timestamp": "2026-05-29T08:54:35Z",
          "tree_id": "1eeece7c4ed14eb00697e363e92e4c3abfce9962",
          "url": "https://github.com/fallow-rs/fallow/commit/54e50793b2ee8797dee43c049aec3a3378da5279"
        },
        "date": 1780045037340,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "49b820fde252762f4fb4b74a2acee76f9cdea575",
          "message": "refactor(core,lsp): unify plugin-result merging via field-exhaustive merge_into (#776)\n\nReplace the two hand-maintained field-by-field merge sites with merge_into\nmethods that exhaustively destructure their own struct, so adding a field\nbecomes a compile error in the merge logic instead of a silent divergence\nbetween the CLI and the LSP.\n\n- AggregatedPluginResult::merge_into + apply_workspace_prefix (core): the\n  workspace merge loop in run_plugins now prefixes each workspace result then\n  folds it in via the single union method. Pre-refactor behavior preserved\n  exactly: workspace config_patterns / used_class_members / scss_include_paths\n  (populated by run_workspace_fast but never merged) stay dropped, and\n  script_used_packages (never populated there) is cleared too so a future\n  change cannot silently alter root script-credit. Whether the populated-field\n  drops are latent bugs is tracked in #772.\n- AnalysisResults::merge_into (types): the LSP merge_results becomes a thin\n  wrapper delegating to it.\n- merge_test_source_with_all_fields drops ..Default::default() so the test\n  fixture is also a compile-time field-coverage gate.\n- Re-export FeatureFlag / FlagKind / FlagConfidence from fallow_core::results\n  so the feature_flags element type is nameable by consumers.\n\nPure refactor: no change to merged outputs (all benchmark fixtures\nbyte-identical OLD vs NEW).\n\nCloses #444.",
          "timestamp": "2026-05-29T09:14:41Z",
          "tree_id": "a57b1fcb7b92649f6808b949f48161f317161131",
          "url": "https://github.com/fallow-rs/fallow/commit/49b820fde252762f4fb4b74a2acee76f9cdea575"
        },
        "date": 1780046998094,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "93d5321c9b087817e6504468eeb2b929bd35275c",
          "message": "docs(security): add signing-key rotation and compromise-response runbook (#781)\n\nDocuments how to rotate the Ed25519 binary-signing keypair and what to do if\nthe private key leaks. Covers the split surfaces (the\nED25519_BINARY_SIGNING_PRIVATE_KEY release secret vs the raw public key\nhardcoded in editors/vscode/src/download.ts + npm/fallow/scripts/verify-binary.js\nand the fingerprint in this file, kept in sync by hand since no CI parity job\nasserts it), why rotation is a clean per-version cutover that needs no dual-key\ngrace window (each consumer pins one key and only fetches its own version's\nbinary), the scheduled-rotation steps, and the compromise-response sequence\n(rotate-first patch release, GHSA advisory, deprecate exposed versions without\nforce-rewriting tags, rotate co-located secrets).",
          "timestamp": "2026-05-29T10:25:48Z",
          "tree_id": "912dc0f2bf12731e5dad928401d767b00a7eca51",
          "url": "https://github.com/fallow-rs/fallow/commit/93d5321c9b087817e6504468eeb2b929bd35275c"
        },
        "date": 1780051111632,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "distinct": false,
          "id": "9af2175229a48f92e08f38e0a03eddbe47792a25",
          "message": "feat(config): warn when multiple config files coexist in one directory (#780)\n\nfind_and_load picks the first of .fallowrc.json > .fallowrc.jsonc >\nfallow.toml > .fallow.toml per directory. Previously a stale lower-precedence\nconfig (left over from a migration or a partial fallow init) was silently\nshadowed, so output looked correct but came from the wrong source.\n\nNow config discovery emits a deduped tracing::warn! (visible on stderr at the\ndefault level) naming the loaded file and the lower-precedence file(s) it\nignored, mirroring the existing warn_on_unknown_rule_keys path (process-wide\nOnceLock dedupe keyed on the canonical directory, thread-local test capture\nwith capture-before-dedupe). It fires once per directory per run; an explicit\n--config <path> performs no discovery and never warns.\n\nDocs and the fallow config help text now state that .fallowrc.json accepts\nJSONC and .fallowrc.jsonc is identical (the extension is only an editor hint),\nand document the first-match-wins precedence ladder.\n\nCloses #458",
          "timestamp": "2026-05-29T10:35:55Z",
          "tree_id": "a516a9285d0c810023508297377cc006b1fa1026",
          "url": "https://github.com/fallow-rs/fallow/commit/9af2175229a48f92e08f38e0a03eddbe47792a25"
        },
        "date": 1780051850649,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "30ff077a594b83512a38679bf7f61da59eab3202",
          "message": "chore(release): pass --ignore-scripts on release-pipeline dev installs (#782)\n\nExtends the ci.yml --ignore-scripts posture (#775) to release.yml's four\ndependency installs: the NAPI npm ci in the build matrix and npm-prep jobs,\nand the editors/vscode pnpm install in the vscode-prep and vscode-publish-prep\njobs. These run in prep jobs that carry no publish tokens (the prep/publish\nsplit is the primary supply-chain guard); --ignore-scripts is belt-and-suspenders\non top of it.\n\nVerified locally that the consuming builds still work with scripts disabled:\nthe full release-shape NAPI build (npm ci --omit=optional --ignore-scripts\nthen napi build --release --platform) produces the native addon, and the\neditors/vscode rolldown build runs after pnpm install --ignore-scripts. The\nnpm-prep comment that claimed @napi-rs/cli needs its install scripts is\nreconciled: napi build does not need them.\n\nVerified on darwin-arm64; the release matrix also builds linux / windows /\nmac-x64, where napi build is equally script-independent. actionlint clean;\nzizmor introduces zero new findings vs origin/main.",
          "timestamp": "2026-05-29T10:41:32Z",
          "tree_id": "067963ca9e7f96def9145b5b3c4b15e1c42167b0",
          "url": "https://github.com/fallow-rs/fallow/commit/30ff077a594b83512a38679bf7f61da59eab3202"
        },
        "date": 1780052183314,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "b5bc8c5c64989d04f1c2310f8bdfc7a62a6de312",
          "message": "feat(flags): surface configuration hint on empty fallow flags output (#785)\n\nWhen `fallow flags` finds nothing, the human-output empty line now appends\na discovery hint: the built-in env prefixes and SDK providers fallow scanned\nfor (sourced from crates/extract/src/flags.rs, not hardcoded), plus pointers\nto flags.sdkPatterns / flags.configObjectHeuristics and the docs URL. Users\nwho already configured custom flags.* patterns get a single terse line\nacknowledging their config instead of the discovery block.\n\nJSON / SARIF / compact / markdown / codeclimate output is unchanged; no\nschema bump. --quiet still suppresses the whole block.\n\nRefs #562",
          "timestamp": "2026-05-29T11:48:11Z",
          "tree_id": "1959f593bce693e2dc1dbc4c581554ba6f70ddc9",
          "url": "https://github.com/fallow-rs/fallow/commit/b5bc8c5c64989d04f1c2310f8bdfc7a62a6de312"
        },
        "date": 1780056389381,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "id": "5e73fdd8b0b06b973203ee55c3f404e37e56459e",
          "message": "fix(plugins): add rspress plugin crediting @theme virtual module (#787)\n\nrspress exposes its theme layer through the `@theme` build-time virtual\nmodule (and `@theme/<component>` subpaths), the same convention as\nDocusaurus. fallow had no rspress plugin, so importing `@theme` from docs\nor source surfaced as an unlisted-dependency. A new minimal rspress plugin\nactivates on `rspress` or any `@rspress/`-scoped dependency and contributes\n`@theme/` and `@theme-original/` as virtual_module_prefixes(), covering both\nunlisted-dependency and unresolved-import for the bare specifier and its\nsubpaths. Real scoped packages like `@theme-ui/core` are unaffected.\nDocusaurus already covered bare `@theme` via the existing `@theme/` entry.\n\nFixes #756",
          "timestamp": "2026-05-29T12:09:59Z",
          "tree_id": "f025e6d85827d5ffb7abb89b5e90e040676928f1",
          "url": "https://github.com/fallow-rs/fallow/commit/5e73fdd8b0b06b973203ee55c3f404e37e56459e"
        },
        "date": 1780057486064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "distinct": false,
          "id": "63d9af9d5142ead85bff9195555427345e14f708",
          "message": "chore(security): re-bless agent-file baseline for detection and plugins rules (#789)\n\n`.claude/rules/detection.md` and `.claude/rules/plugins.md` were edited on\nmain without updating their blessed hashes in scripts/agent-files.sha256, so\nthe agent-file hidden-unicode guard reported drift on every session start.\nRe-bless both to their current content. No content change to the rule files\nthemselves; this only syncs the integrity baseline.",
          "timestamp": "2026-05-29T12:38:14Z",
          "tree_id": "08bedfac7ac0aa36b794c0ba66eb59be44368ec8",
          "url": "https://github.com/fallow-rs/fallow/commit/63d9af9d5142ead85bff9195555427345e14f708"
        },
        "date": 1780059142866,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.7,
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
          "distinct": false,
          "id": "7c3bbc09fd78a9393826abbb548855e21137f94f",
          "message": "feat(impact): add `fallow impact` value report (v1: surfacing, trend, containment) (#788)\n\n* feat(impact): add `fallow impact` value report (v1: surfacing, trend, containment)\n\nAdds an opt-in, local-only `fallow impact` command reporting what fallow has\ndone for you: how many issues it is surfacing, the trend since the last\nrecorded run, and how many commits its pre-commit gate blocked then cleared.\n\nHistory accrues in a single rolling .fallow/impact.json (gitignored) on\n`fallow audit` runs, once enabled via `fallow impact enable`. Writes are\nbest-effort and never change a command's exit code or output. The generated\npre-commit hook now tags gate runs with --gate-marker pre-commit so\nblocked-then-fixed commits are recorded as contained.\n\nPer-finding resolved/suppressed/moved attribution is intentionally deferred\nuntil active-suppression state can be captured, so a suppressed finding is\nnever miscounted as a win.\n\n* fix(impact): address review (top-level help, JSON schema surface, lint hygiene, docs)\n\nResolves the pre-ship and parallel review findings on the impact v1 feature:\n\n- Add `impact` to the top-level --help command listing + extend the\n  help-grouping test, so the new stable command is discoverable.\n- Register the `fallow impact --format json` shape in the published output\n  schema: a FallowOutput::Impact variant plus JsonSchema-derived ImpactReport,\n  ImpactCounts, TrendSummary, ImpactTrendDirection, and ContainmentEvent\n  definitions, wired into schema-emit. Regenerated docs/output-schema.json and\n  the VS Code + npm TypeScript contracts; drift and path-field gates pass.\n- Swap the three new lint suppressions from #[allow] to #[expect] (the\n  expectations are fulfilled under -D warnings).\n- Document the command in CHANGELOG, README, CLAUDE.md, and the cli-crate rules.\n\n* fix(impact): atomic store writes, scope-honest labels, unified trend vocab, latest sha\n\nAddresses the post-implementation panel review:\n\n- Persist the rolling store with `fallow_config::atomic_write` (tempfile +\n  rename) instead of plain `fs::write`, so a crash or concurrent writer can no\n  longer leave a torn file that the next load treats as corrupt and silently\n  disables tracking on. A present-but-unparsable store now warns (once) and\n  degrades, rather than silently resetting; the corrupt file is left on disk.\n- Relabel the report: the per-run counts are CHANGED-FILE scoped (each record\n  comes from a `fallow audit` run whose default new-only gate counts only\n  changed files), so 'SURFACING N issues you can act on' becomes\n  'LATEST RUN (changed files): N flagged', and the trend is qualified as\n  changed-file scope across the last two runs. Avoids presenting a per-diff\n  number as a project total.\n- Use one human-facing trend vocabulary (down/up/flat) in both the text and\n  markdown renderers via a shared `trend_arrow`; the JSON enum stays the\n  machine form.\n- Add `latest_git_sha` to the JSON report so a consumer can tell which commit\n  the counts belong to. Schema and TS contracts regenerated.\n\n* chore(security): re-bless agent-file baseline for impact docs\n\nThe impact feature added an `impact.rs` entry to `.claude/rules/cli-crate.md`\nand registered the module in `CLAUDE.md`'s crate map. Update the blessed\nhashes in scripts/agent-files.sha256 so the agent-file hidden-unicode guard\nstops flagging these two legitimate edits as drift once they land on main.",
          "timestamp": "2026-05-29T12:41:59Z",
          "tree_id": "5fb455fbfe6441394218714ca33b920cf64cd900",
          "url": "https://github.com/fallow-rs/fallow/commit/7c3bbc09fd78a9393826abbb548855e21137f94f"
        },
        "date": 1780059459605,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "distinct": false,
          "id": "3afc7256c1d353fc9c3331a637c944e887373902",
          "message": "feat(cli): make fallow health a usable CI gate (--min-score authoritative, --report-only) (#790)\n\nfallow health previously exited 1 whenever any above-threshold function\nexisted, regardless of the health score, so --min-score only added a second\nfail condition and 'fallow health --min-score 0' still exited 1. Health could\nonly ever be advisory.\n\nWhen --min-score N is set it is now the authoritative complexity gate: the run\nexits 0 when score >= N (so --min-score 0 always passes) and complexity findings\nare demoted to informational while still printed. --min-severity composes with\n--min-score (fail if either gate trips). Plain 'fallow health' with no gate flag\nkeeps the back-compatible behavior of exiting 1 on any finding.\n\nNew --report-only flag prints the score and findings but never fails CI (always\nexit 0); it is mutually exclusive with --min-score / --min-severity (exit 2). The\nruntime-coverage and coverage-gap gates stay independent explicit opt-ins. The\n--min-score help text now signposts 'fallow audit --gate new-only' for gating on\nnewly-introduced complexity.\n\nFixes #786",
          "timestamp": "2026-05-29T12:52:02Z",
          "tree_id": "78bbc7818c0d50a844deed514ced3644453ff49e",
          "url": "https://github.com/fallow-rs/fallow/commit/3afc7256c1d353fc9c3331a637c944e887373902"
        },
        "date": 1780060020584,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "distinct": false,
          "id": "618fd5263cf20b4ae91e6c8c06878ee73aa5bacf",
          "message": "chore(security): re-bless agent-file baseline for cli-crate rule (#793)\n\nThe cli-crate.md health-gate documentation edit from #790 changed the\nfile's content hash without refreshing the blessed manifest, so the\nSessionStart agent-file guard flags it as drift. Re-bless to match.",
          "timestamp": "2026-05-29T18:12:20Z",
          "tree_id": "0d350dc9416c8bd2ccc7c9c0a54aeef49a5c8d4f",
          "url": "https://github.com/fallow-rs/fallow/commit/618fd5263cf20b4ae91e6c8c06878ee73aa5bacf"
        },
        "date": 1780079100091,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "distinct": false,
          "id": "65147e21f6b7f33d43900cd2ec66b86981d67d9d",
          "message": "chore(security): gate agent-file baseline drift in CI (#794)\n\nThe agent-file integrity baseline (scripts/agent-files.sha256) had no\nenforcement: editing a tracked agent-instruction file (.claude/rules/**,\n.claude/agents/**, CLAUDE.md, .claude/settings.json) without re-blessing left\nthe baseline stale, and the only signal was the warn-only SessionStart guard,\nwhich fires on every later session until someone notices. Stale drift\naccumulated on main as feature PRs touched rule docs in passing.\n\nAdd a blocking CI gate. scan-hidden-unicode.py gains a `--mode check-manifest`\nthat exits nonzero when any blessed file differs from its hash or a tracked\nagent file has no entry at all, and ci.yml runs it in the typos job alongside\nthe existing committed-surface scan. This makes a PR that edits a tracked agent\nfile re-bless the manifest in the same change. The SessionStart drift check\nstays warn-only so an in-progress edit never hard-blocks a session.\n\nRe-bless the one outstanding drift (.claude/rules/cli-crate.md) so the gate is\ngreen, extend the scanner self-test with block/clean/unblessed cases, and\ndocument the new surface in SECURITY.md.",
          "timestamp": "2026-05-29T18:20:35Z",
          "tree_id": "23601d4733f422a8ad7cf890c7d1caddd4ffd012",
          "url": "https://github.com/fallow-rs/fallow/commit/65147e21f6b7f33d43900cd2ec66b86981d67d9d"
        },
        "date": 1780079981748,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "distinct": false,
          "id": "3297be51072765aab0cdd9bf6fab7acd88bf152e",
          "message": "fix(impact): gitignore the store on enable; reject unsupported formats (#795)\n\nTwo gaps found smoke-testing `fallow impact`:\n\n`fallow impact enable` created `.fallow/impact.json` but did not ensure\n`.fallow/` was gitignored. In a project that had not run `fallow init` (which\ndoes add the entry), a routine `git add -A` would stage and push the store,\ncontradicting the feature's local-only / \"never uploaded\" promise that the\nenable message itself prints. `enable` now appends `.fallow/` to `.gitignore`\nbest-effort (idempotent, and a no-op when the entry already exists), so the\nguarantee holds at the moment the store is created regardless of caller. The\nhelper is self-contained in impact.rs because that module is in the library\ncrate while setup_hooks (which has the equivalent) is binary-only.\n\n`fallow impact --format sarif|compact|codeclimate|badge|...` silently fell back\nto the human report, so a CI step requesting a machine format got human text it\ncould not parse. The format dispatch is now exhaustive and rejects unsupported\nformats with exit 2 and a clear message, matching `fallow explain`. The\nsupported set (human, json, markdown) is unchanged.\n\nBoth paths are covered by a new unit test (enable gitignores, idempotent) and\nverified end-to-end.",
          "timestamp": "2026-05-29T18:37:19Z",
          "tree_id": "3ac9d81a9ade3541eb09725e8f4907755df04a24",
          "url": "https://github.com/fallow-rs/fallow/commit/3297be51072765aab0cdd9bf6fab7acd88bf152e"
        },
        "date": 1780080810618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "distinct": false,
          "id": "7f9cda0deff535e29c3fadb2521a802e8ab8ac3b",
          "message": "feat(cli): upload-static-findings subcommand for the source-evidence viewer (#796)\n\n* feat(cli): upload-static-findings subcommand for source-evidence viewer\n\nAdd `fallow coverage upload-static-findings`, the CLI emit for the\nPOST /v1/coverage/:repo/static-findings cloud endpoint (ADR 024). Runs\nfallow static analysis and uploads unused_export + dead_file verdicts\nkeyed to a git SHA, mirroring upload-inventory's structure.\n\nFindings are replace-by-SHA: each run sends the complete set for the\nSHA, so an empty set is a valid clearing (no empty-result rejection,\nunlike upload-inventory). filePath is repo-relative POSIX so it lines\nup with source-map sources in the viewer. The error classifier maps\nHTTP 413 (not 400) to PayloadTooLarge for the 200,000-finding cap.\nAuth uses a live FALLOW_API_KEY; the unauthorized hint calls out that\na publishable ingest key is rejected here.\n\n* style(cli): rustfmt upload-static-findings",
          "timestamp": "2026-05-29T18:49:39Z",
          "tree_id": "bb13b89cd7711e5c0a5cea454fe3f3d814cae1ab",
          "url": "https://github.com/fallow-rs/fallow/commit/7f9cda0deff535e29c3fadb2521a802e8ab8ac3b"
        },
        "date": 1780081749070,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "distinct": false,
          "id": "20fe77f83733dc5e3bbf36135f7e0c2b4522a668",
          "message": "fix(health): surface churn-hotspot window in metrics line and markdown vital signs (#799)\n\nThe hotspot analysis window (default 6m, --since) only appeared in the\n'Hotspots (N files, since 6 months)' section header, which is omitted\nentirely at zero hotspots. The orientation 'Metrics:' line read\n'0 churn hotspots' with no anchor, so a reader could not tell zero in the\nwindow from zero ever, and the window vanished on healthy repos.\n\nAppend '(since <window>)' to the hotspot segment of the human Metrics line\nand to the markdown Vital Signs row label, sourced from\nreport.hotspot_summary.since. Falls back to no suffix when the churn\npipeline did not run (hotspot_summary absent). Human and markdown output\nonly; JSON/SARIF/compact/CodeClimate unchanged.\n\nCloses #552",
          "timestamp": "2026-05-29T19:14:07Z",
          "tree_id": "9120782b369f89f05711c11777286a4e7dd7477a",
          "url": "https://github.com/fallow-rs/fallow/commit/20fe77f83733dc5e3bbf36135f7e0c2b4522a668"
        },
        "date": 1780083094430,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "1eb8b5d7deeedbcf3697421ac5fba0150c227b8f",
          "message": "fix(impact): apply post-merge review polish (#798)\n\n* fix(impact): apply post-merge review polish\n\nSix findings from the post-merge team review of the (unreleased) impact\nfeature:\n\n1. ImpactReport now carries a required schema_version on the JSON wire, typed\n   as its own ImpactReportSchemaVersion discriminator (serializes as \"1\"),\n   matching the other independently-versioned envelopes. This is decoupled from\n   the on-disk store version (renamed to STORE_SCHEMA_VERSION) and from the\n   global SchemaVersion, so the store shape and the report wire shape can evolve\n   on their own cadences. Regenerated docs/output-schema.json and both TS\n   contracts.\n2. latest_git_sha is documented as an abbreviated SHA (it flows from audit's\n   short head_sha); consumers joining against a full 40-char SHA are warned in\n   the schema description rather than misled. Full-SHA emission is deferred.\n3. Human and markdown footers show the first-recorded date only (2026-05-29)\n   instead of a raw ISO timestamp, and markdown now shows it for parity with the\n   human renderer.\n4. load() emits a tracing::warn when a store's schema_version is newer than this\n   build understands, mirroring the corrupt-store warning.\n5. TREND_TOLERANCE's comment now matches its zero value.\n6. The .gitignore write in enable() goes through atomic_write, matching the\n   store write's durability.\n\nNew unit tests cover schema_version presence (enabled and disabled), the\ndate-only trim, and best-effort load of a future-version store.\n\n* docs(impact): fix rustdoc intra-doc links on ImpactReportSchemaVersion\n\nThe doc comment used `[crate::output_envelope::SchemaVersion]` (unresolved\npath) and `[STORE_SCHEMA_VERSION]` (a public item linking to a private const),\nboth of which fail under the Documentation CI job's RUSTDOCFLAGS=-D warnings\n(broken-intra-doc-links and private-intra-doc-links). Drop the intra-doc links\nto plain code spans; the references are descriptive, not navigational.",
          "timestamp": "2026-05-29T19:24:29Z",
          "tree_id": "b662a8c54e5fe30f5e06689222d5ecdfffa7e4c3",
          "url": "https://github.com/fallow-rs/fallow/commit/1eb8b5d7deeedbcf3697421ac5fba0150c227b8f"
        },
        "date": 1780083535435,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "47f7233f413a094af63fffb3806a41cedf761cbe",
          "message": "ci: add windows-latest smoke for audit orphan-sweep and process_is_alive (#800)\n\nRun the three audit lifecycle tests on windows-latest so the orphan-sweep,\nprocess_is_alive, and reusable-worktree-lock code paths execute against real\nWin32 OpenProcess / WaitForSingleObject and NTFS LockFileEx semantics rather\nthan just compiling. The check matrix only runs the full suite on Windows for\npush and merge_group, so PRs never exercised these paths on Windows before.\n\nThe new windows-audit-smoke job is gated on the rust changes filter (plus push\nand merge_group), mirroring the check and windows-arm64 convention, and runs\nexactly the three named tests via cargo test --lib -- --exact. It is wired into\nci-ok needs so a Windows lifecycle regression blocks merge; ci-ok treats skipped\nas success, so non-Rust PRs do not deadlock the merge queue. Narrower than the\nfull Windows matrix tracked in #447.\n\nFixes #497.",
          "timestamp": "2026-05-29T19:47:42Z",
          "tree_id": "8850ea58263c41b1b4b66faca7ebfd413352fe1a",
          "url": "https://github.com/fallow-rs/fallow/commit/47f7233f413a094af63fffb3806a41cedf761cbe"
        },
        "date": 1780085071348,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "distinct": false,
          "id": "69acf17bcd03460535d3739b5b6459add545c395",
          "message": "fix(plugins): recognize SvelteKit layout-reset routes as entry points (#797)\n\n* fix(plugins): recognize SvelteKit layout-reset routes as entry points\n\nThe SvelteKit plugin matched +page.svelte / +layout.svelte literally but\nnot the @-suffixed layout-reset variants (+page@.svelte, +page@named.svelte,\n+layout@.svelte, +layout@named.svelte), so routes using SvelteKit's\nbreak-out-of-layout convention were reported as unused-file.\n\nAdd src/routes/**/+page@*.svelte and src/routes/**/+layout@*.svelte as entry\npatterns plus matching used_exports rules crediting the default export. The *\ncovers both the empty (@.svelte) and named (@named.svelte) forms;\nliteral_separator(true) keeps the match within one path segment. Only .svelte\ncomponent files take the suffix: SvelteKit throws on @ in .ts/.js route files,\nso the co-located load files are unaffected.\n\nFixes #791\n\n* test(plugins): cover SvelteKit layout-reset group form\n\nAdd a +page@(checkout).svelte fixture and assertion to\nsveltekit_layout_reset_routes_are_entry_points so the parenthesized\ngroup form of the layout-reset segment is exercised end to end. This is\nthe riskiest assumption in the +page@*.svelte entry glob: globset treats\n( and ) as literal characters, not metacharacters, so * must match the\n(group) form. Neither the existing unit nor integration test covered it.\n\nRefs #791.\n\n* chore(security): re-bless agent-file baseline for detection.md\n\nThe SvelteKit layout-reset bullet added to .claude/rules/detection.md\nchanged the file's hash; re-bless scripts/agent-files.sha256 so the\nagent-file drift gate passes. No content concern (no hidden unicode;\nplain ASCII bullet).\n\nRefs #791.",
          "timestamp": "2026-05-29T20:02:22Z",
          "tree_id": "9574d7d24c2d7e94b8ede54d7f4c431bfdcf1dd4",
          "url": "https://github.com/fallow-rs/fallow/commit/69acf17bcd03460535d3739b5b6459add545c395"
        },
        "date": 1780086275461,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "distinct": false,
          "id": "2280b31dabf6cbb8a31ec083de967a43dc3276b2",
          "message": "fix(core): preserve workspace class members and scss include paths through merge (#783)\n\nThe run_plugins workspace-merge loop cleared used_class_members and\nscss_include_paths on each workspace result before folding it into the\nroot aggregate, silently dropping every workspace package's framework\ncontributions. In a monorepo where a framework is active only in a\nworkspace package (Lit/Lexical/Ember class-member allowlists, or\nAngular/Nx stylePreprocessorOptions.includePaths), the package's\nheritage-scoped class-member allowlist was dropped (false\nunused-class-member findings) and its SCSS include paths were dropped\n(false unresolved-import for @use/@import resolving via includePaths).\n\nBoth fields are prefix-agnostic (member names and absolute directories),\nso apply_workspace_prefix leaves them untouched and merge_into unions\nthem as-is. config_patterns stays cleared (inert post-merge) and\nscript_used_packages stays cleared (never populated by\nrun_workspace_fast). Single-package projects were never affected.\n\nAdds a monorepo fixture activating Lit only in packages/elements and\nAngular only in packages/ng-styles, with integration tests asserting the\npackage's Lit firstUpdated() survives the merge (with a genuinely-unused\ncontrol still flagged) and its SCSS @import 'variables' resolves.\n\nFixes #772",
          "timestamp": "2026-05-29T20:14:19Z",
          "tree_id": "8d004752700c6f1f2bf62b0fc8c791f4c8098a29",
          "url": "https://github.com/fallow-rs/fallow/commit/2280b31dabf6cbb8a31ec083de967a43dc3276b2"
        },
        "date": 1780086571258,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "132771e3fb63bd67405870ba64b06b3d87b6971d",
          "message": "feat(impact): per-finding attribution crediting resolved findings (v1.5) (#803)\n\nTeach `fallow impact` to credit genuinely resolved findings while never\ncounting a `fallow-ignore` suppression as a win. Captures present-suppression\nstate during analysis (AnalysisResults.active_suppressions, an internal\nserde-skip field populated from SuppressionContext) and adds a per-file\nfrontier plus a fingerprint-keyed clone frontier to the store (bumped to\nSTORE_SCHEMA_VERSION 2, forward-compatible read of v1 stores) that audit diffs\neach run for the files it re-analyzed. Each disappearance is classified\nresolved, suppressed (conservative: a covering suppression that newly appeared\nis never a win), or moved (within-run cross-file cancellation plus a\ncross-run un-credit when a prior resolution's symbol reappears elsewhere;\nwithin-file line moves are free since the identity excludes line). Covers\ndead code, complexity, and duplication.\n\nSurfaces resolved_total, suppressed_total, and a recent-resolutions list\n(ResolutionEvent) in human, json (schema-registered), and markdown, with\nneutral \"marked intentional\" wording, an always-present RESOLVED section, an\nhonest empty state, a bounded recent list, and on-disk frontier pruning.\nAttribution is documented as a local-developer signal that accrues only where\n.fallow/impact.json persists across runs. Boundary-violation identities are\nforward-slash normalized for cross-platform stability.\n\nBuilds on the unreleased impact v1 (surfacing/trend/containment) and its\n#795/#798 follow-ups (gitignore-on-enable, format rejection, report wire\nschema_version). No MCP/LSP/CI surface in this change.",
          "timestamp": "2026-05-29T20:22:07Z",
          "tree_id": "22bdd109bddfdc98624bbe9daaf5e64d67af7e33",
          "url": "https://github.com/fallow-rs/fallow/commit/132771e3fb63bd67405870ba64b06b3d87b6971d"
        },
        "date": 1780087320533,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "db4a8cc6b595d04a2d8f946da8b1770d766a06d6",
          "message": "feat(mcp): expose fallow impact as a read-only MCP tool (#804)\n\n* feat(mcp): expose fallow impact as a read-only MCP tool\n\nAdd an \"impact\" tool wrapping \"fallow impact --format json\" so AI agents\ncan read the local value report (surfacing, trend, gate containment, and\nv1.5 resolved/suppressed attribution) the same way they query check_health\nand audit. Impact was the only first-class CLI surface with no MCP tool.\n\nThe tool is read-only and root-only: it runs no analysis and reads only\n.fallow/impact.json, so the config / no_cache / threads knobs the analysis\ntools expose are omitted as inert. The mutating enable / disable lifecycle\nis intentionally not exposed; on an enabled:false report the agent should\nrecommend the user run \"fallow impact enable\", not toggle it. Annotated\nread_only_hint=true, idempotent_hint=true, open_world_hint=false (a single\nclosed-world local file read, like fallow_explain).\n\n* docs(mcp): document the impact MCP tool\n\nBump the fallow-mcp tool count to 21 and add an impact entry in\n.claude/rules/mcp-server.md, add a CHANGELOG [Unreleased] note, and\nre-bless scripts/agent-files.sha256 for the rules-file edit (CI drift gate).",
          "timestamp": "2026-05-29T20:52:35Z",
          "tree_id": "01a38e3a6c5c5c1bc97576d9265737b97887e250",
          "url": "https://github.com/fallow-rs/fallow/commit/db4a8cc6b595d04a2d8f946da8b1770d766a06d6"
        },
        "date": 1780088726770,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "b0cb61ab23a37e0189decdfcc344eeaf676050f7",
          "message": "fix(plugins): credit @nuxt/content content.config.ts as a default-export entry (#801)\n\n* fix(plugins): credit @nuxt/content content.config.ts as a default-export entry\n\n@nuxt/content v3 reads a root content.config.ts (export default\ndefineContentConfig(...)) at build time; nothing in app source imports it,\nso fallow reported it as unused-file plus unused-export. When @nuxt/content\nis registered in the nuxt.config modules: array, credit\ncontent.config.{ts,js,mts,mjs,cts,cjs} (config-dir-relative) as a\ndefault-export entry via the existing push_used_export_rule path.\n\nGated on module registration rather than mere package.json presence: an\ninstalled-but-unregistered @nuxt/content leaves a genuinely-orphan\ncontent.config correctly flagged. Scoped to the first-party @nuxt/content\nonly (per #138).\n\nFixes #792\n\n* docs(plugins): document @nuxt/content content.config crediting (#792)\n\ndetection.md bullet + plugins.md Nuxt line + CHANGELOG [Unreleased] entry,\nand re-bless scripts/agent-files.sha256 for the detection.md/plugins.md edits.",
          "timestamp": "2026-05-29T22:04:38Z",
          "tree_id": "312dd6e5be2e8c222e31c4c0b4adc6429bb955ad",
          "url": "https://github.com/fallow-rs/fallow/commit/b0cb61ab23a37e0189decdfcc344eeaf676050f7"
        },
        "date": 1780093197535,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "8a483c3144b8641acdee3d6c967358a99ada205b",
          "message": "refactor(plugins): move tooling list to TOML catalogue (#806)\n\n* refactor(plugins): move tooling list to data-driven TOML catalogue, drop framework-plugin shadows\n\nMove the hardcoded prefix + exact tooling lists in tooling.rs into a\ncommunity-maintainable crates/core/data/tooling.toml, embedded via\ninclude_str! and parsed once at startup behind a OnceLock. is_known_tooling_dependency\nkeeps its API; adding a tool is now a one-line TOML edit with no regen step.\n\nDrop the framework-plugin-specific exact entries (vite-plugin-svgr,\nvite-plugin-eslint, prettier-plugin-tailwindcss, prettier-plugin-organize-imports,\n@ianvs/prettier-plugin-sort-imports). These were a false negative: a plugin\ndeclared in devDependencies but never wired into the config was silently\ntreated as used by the exact-name shadow. They are now credited only when they\nactually appear (vite plugins via the import graph on the discovered config\nfile; prettier plugins via the Prettier config parser), so a declared-but-unused\nplugin correctly surfaces.\n\nClose the prettier gap: parse the plugins array from .prettierrc.{yml,yaml,toml}\n(the import graph cannot read non-JS config), so YAML/TOML configs keep their\nlisted plugins credited.\n\nGuards (parse tests): pattern/name required, empty/whitespace prefixes rejected\n(an empty prefix would match every package), duplicates rejected, and\nvite-plugin-* / prettier-plugin-* / eslint-plugin-* / @rollup/plugin-* rejected\nas exact entries so the shadow cannot be reintroduced via a TOML PR.\n\nRefs #462\n\n* docs(plugins): document data-driven tooling catalogue + framework-plugin shadow removal\n\n- CONTRIBUTING.md: 'Adding a known tooling dependency' section (one TOML entry, no regen, validation command, framework-plugin exclusion).\n- detection.md: known-tooling catalogue bullet covering the data-driven move and the shadow-removal behavior change.\n- plugins.md: Prettier entry now notes YAML/TOML + package.json#prettier plugin parsing and the credit-only-when-listed behavior.\n- CHANGELOG [Unreleased] Changed: behavior change (declared-but-unused framework plugins now surface) + the catalogue move.\n- Re-bless scripts/agent-files.sha256 for the detection.md + plugins.md edits.\n\nRefs #462",
          "timestamp": "2026-05-29T22:31:50Z",
          "tree_id": "c0c6a9116ee88cf11697921a3ac6650273b01e14",
          "url": "https://github.com/fallow-rs/fallow/commit/8a483c3144b8641acdee3d6c967358a99ada205b"
        },
        "date": 1780094781691,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "005462b33c2696e8a810721f3fdd4a92495498d0",
          "message": "fix(plugins): credit oxlint CLI tooling packages (oxlint-tsgolint) as used (#802)\n\n* fix(plugins): credit oxlint CLI tooling packages (oxlint-tsgolint) as used\n\noxlint-tsgolint is the type-aware companion package the oxlint binary loads\nat runtime (via --type-aware / options.typeAware). It is never imported in\nsource nor listed in an .oxlintrc.json jsPlugins array, so the #607 jsPlugins\ncredit does not cover it. When declared in prod dependencies (where the general\ntooling-prefix credit does not apply, that only covers devDependencies), it was\nfalsely reported as unused.\n\nAdd oxlint-tsgolint to the oxlint plugin's tooling_dependencies, which is honored\nfor both prod and dev categories and is gated on the oxlint plugin being active.\nExact-name credit, not an oxlint- prefix, so an unrelated oxlint-prefixed prod\ndependency still reports.\n\nFixes #753\n\n* docs(plugins): document oxlint CLI tooling credit (oxlint-tsgolint)\n\ndetection.md + plugins.md note the exact-name oxlint-tsgolint tooling credit,\nCHANGELOG [Unreleased] gets the user-facing entry, and the agent-file baseline\nis re-blessed for the two edited rule files.\n\nRefs #753",
          "timestamp": "2026-05-30T05:37:34Z",
          "tree_id": "0eec03b87d2697abd80008cd7eeddb698138cbac",
          "url": "https://github.com/fallow-rs/fallow/commit/005462b33c2696e8a810721f3fdd4a92495498d0"
        },
        "date": 1780120346787,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "5f928483d8635fc322e5954473772b45d085881d",
          "message": "fix(plugins): credit eslint meta-preset plugins pulled via peerDependencies (#805)\n\nA flat config that calls a preset factory (export default antfu({...}))\nnames no individual plugins, so the plugins the preset enables (declared\nas its own optional peerDependencies) surfaced as unused-dev-dependency.\nThe flat-config plugins object-key credit had nothing to match, and the\ngeneric required-peer-dependency closure intentionally skips optional peers.\n\nWhen the ESLint config imports a package whose name matches a preset shape\n(eslint-config-* or @scope/eslint-config[-*]), fallow now reads that preset's\nown package.json and credits the eslint-ecosystem entries (eslint-plugin-*,\nscoped plugins, shareable configs, parsers, import resolvers) it declares in\ndependencies / peerDependencies / optionalDependencies. General-purpose runtime\ndeps (globals, ansis) are excluded, and a plain plugin import does not pull in\nits own dependency fan.\n\nOn the real-world repro (antfu({...}).append({...})) this credits the three\nplugins antfu 9 genuinely pulls (@eslint-react/eslint-plugin, eslint-plugin-format,\neslint-plugin-react-refresh); plugins the preset does not declare stay reported.\n\nCloses #754.",
          "timestamp": "2026-05-30T10:59:11Z",
          "tree_id": "2075bfbb948d319cf4d2f856d649af79c434c210",
          "url": "https://github.com/fallow-rs/fallow/commit/5f928483d8635fc322e5954473772b45d085881d"
        },
        "date": 1780139648928,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "6d5c5a722b0bf86c9c3c5169c96d1ea3ccf7d9bd",
          "message": "fix(dupes): forward-slash normalize paths in human output on Windows (#807)\n\nThe clone-group, clone-family, and grouped-bucket listings in\nreport/human/dupes.rs rendered file paths via raw relative_path().display(),\nwhich emits backslashes on Windows (src\\copy1.ts) instead of the forward\nslashes used everywhere else in fallow output. The directory/filename split\nkeys on '/', so it also misfired on those paths. This made the\ndupes_human_output snapshot test fail on windows-latest CI.\n\nRoute all four sites through crate::report::format_display_path (the same\nhelper the family-names branch already uses), which appends .replace('\\\\',\n\"/\"). No change on Unix (no backslashes to replace); Windows output now\nmatches the committed forward-slash snapshot.",
          "timestamp": "2026-05-30T12:13:00Z",
          "tree_id": "47f9d1faeb684c74d0d49cc528e38472bd994ff3",
          "url": "https://github.com/fallow-rs/fallow/commit/6d5c5a722b0bf86c9c3c5169c96d1ea3ccf7d9bd"
        },
        "date": 1780143948705,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "bbb3e0233abf8ffa3af3ccf8c345552422b68f7f",
          "message": "fix(dupes): make clone fingerprints CRLF-invariant for cross-platform stability (#809)\n\nThe clone fingerprint (dup:<id>) hashes a group's representative source\nfragment via xxh3. The fragment carried the raw line endings, so a CRLF\n(Windows) checkout produced a different hash than an LF (Unix) checkout for\nidentical code, breaking `dupes --trace dup:<id>` and fingerprint-keyed\nbaselines across platforms (e.g. Windows dev vs Linux CI). This also made the\ndupes_human_output snapshot fail on windows-latest after the path-separator\nfix landed (the only remaining diff was the fingerprint).\n\nAdd a hash_fragment helper that strips \\r before hashing and route both\nfingerprint sites (CloneFingerprintSet::from_groups and\nfingerprint_for_fragment) through it. The strip is a no-op on Unix-checkout\nfragments, so existing fingerprints and the committed snapshot are unchanged.\n\nAlso pin tests/fixtures/** to LF via .gitattributes so fixture bytes (and\nthus snapshot output) are deterministic across platforms regardless of\ncore.autocrlf.",
          "timestamp": "2026-05-30T12:44:58Z",
          "tree_id": "7ec0cd6352b6d3953a5c955060498f327e96a94b",
          "url": "https://github.com/fallow-rs/fallow/commit/bbb3e0233abf8ffa3af3ccf8c345552422b68f7f"
        },
        "date": 1780146019920,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "distinct": false,
          "id": "986651adbe6817842da67fdd126eca359e33bbd5",
          "message": "feat(coverage): upload each source map's repo-relative path for monorepo source resolution (#810)\n\nupload-source-maps now sends the map file's path relative to the repo\nroot (e.g. dashboard/dist/assets/X.js.map) alongside the existing\nfileName, as a new optional mapPath field. The fallow.cloud\nsource-evidence viewer uses it to resolve a map's relative sources[]\n(../../src/components/X.tsx) against the map's directory, recovering the\npackage-prefixed path dashboard/src/components/X.tsx so it matches the\nmonorepo-relative runtime coverage path. Previously only the basename\nwas known, so the cloud collapsed ../../src/X to src/X and the viewer\nreported source_not_in_maps for monorepo sub-packages.\n\nThe field is omitted when a map is not under the repo root (an absolute\n--dir outside it); the cloud then falls back to its prior root-anchored\nnormalization, so the change is backwards compatible and a no-op for\nsingle-package projects. fileName and --strip-path are unchanged.\n\nCloses fallow-rs/fallow-cloud#260.",
          "timestamp": "2026-05-30T17:00:19Z",
          "tree_id": "425d5323b3ea41b2261ecc8e87f99e94abf893dc",
          "url": "https://github.com/fallow-rs/fallow/commit/986651adbe6817842da67fdd126eca359e33bbd5"
        },
        "date": 1780161305432,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "distinct": false,
          "id": "238ca291e95bdf9b70018a132bb52ec9b437b1ee",
          "message": "feat(impact): whole-project value track credited from full fallow runs (#812)\n\nAdd a separate whole-project Impact track recorded best-effort at the\nend of a full fallow run, kept apart from the changed-file audit track\nso the two scopes never share a trend. A full run also credits\nduplication and whole-repo cleanups fixed outside a changed-file audit.\n\nThe writer is gated airtight so it records only on a true whole-repo run\n(check + dupes + health, no scope-narrowing flags, no diff filter, no\nproduction mode). A reshaped clone still duplicated under a new\nfingerprint is not falsely credited resolved. ImpactReport gains\noptional project_surfacing and project_trend (report schema_version\nstays 1); human and markdown render an understated whole-project\nsection labelled context, not a to-do.",
          "timestamp": "2026-05-30T20:32:55Z",
          "tree_id": "f3c5e7b2ca700bfbfe3aa87d0b8f9f08744b5d8d",
          "url": "https://github.com/fallow-rs/fallow/commit/238ca291e95bdf9b70018a132bb52ec9b437b1ee"
        },
        "date": 1780174058973,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "03f5f19cd2d87423878c95cf8f6ec4ff08153dc0",
          "message": "chore: move ADRs to private repo, symlink locally (#814)\n\n* chore: move ADRs to private repo, symlink locally\n\nThe decisions/ ADRs (001-010 + README + template) now live in the private\nfallow-cloud repo and are symlinked back into the working tree (gitignored),\nmatching the existing .internal/ pattern. Forward-only: existing public history\nis unchanged. De-linked the now-private ADR references in CLAUDE.md and\nCONTEXT.md so they no longer 404.\n\n* chore: re-bless agent-file manifest for CLAUDE.md edit",
          "timestamp": "2026-05-30T20:44:10Z",
          "tree_id": "731d0c77ff462d7eed334d646e83a2a73b475652",
          "url": "https://github.com/fallow-rs/fallow/commit/03f5f19cd2d87423878c95cf8f6ec4ff08153dc0"
        },
        "date": 1780174604563,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "b1f7da57699cd3a92a409967f2d8460a6f306f2a",
          "message": "chore: release v2.85.0 (#815)",
          "timestamp": "2026-05-30T21:22:21Z",
          "tree_id": "7a381898583ee1ee23f233c7e3191d86da6ab105",
          "url": "https://github.com/fallow-rs/fallow/commit/b1f7da57699cd3a92a409967f2d8460a6f306f2a"
        },
        "date": 1780177053752,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "cab4ab3dacdefa41a43f2172801f189ea42b5df4",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.85.0 (#816)\n\n* chore(napi): sync package.json / package-lock / index.js to v2.85.0\n\n* docs(telemetry): bump payload example version to 2.85.0",
          "timestamp": "2026-05-30T22:04:25Z",
          "tree_id": "be9ac7e6e6fde965133ae6e9402ecafe207cc518",
          "url": "https://github.com/fallow-rs/fallow/commit/cab4ab3dacdefa41a43f2172801f189ea42b5df4"
        },
        "date": 1780179591803,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niels.mentink@gmail.com",
            "name": "Niels Mentink",
            "username": "V1RE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a157e80af66838463fde5c0a21d5c470dd76635",
          "message": "fix: mark vercel.ts config as used (#821)\n\n* fix: mark vercel ts config as used\n\n* chore: address Vercel plugin review follow-ups\n\nUpdate the documented built-in plugin count after adding the Vercel plugin and list deployment-oriented plugins separately in the README table.\n\nRename the Vercel regression fixture and integration test from issue 819 to issue 820 so the test history matches the bug this PR closes.\n\nRefs #820.\n\n---------\n\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-06-01T07:11:29Z",
          "tree_id": "066feaed586c60e2529c090c00c9bae5c17cab9c",
          "url": "https://github.com/fallow-rs/fallow/commit/5a157e80af66838463fde5c0a21d5c470dd76635"
        },
        "date": 1780298651501,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "distinct": false,
          "id": "d744deb080d0c434046eadeefe61c0e97cb99ecc",
          "message": "fix(action): upload SARIF on public repos (Code Scanning is free without GHAS) (#825)\n\nThe Code Scanning availability check probed the code-scanning/alerts\nendpoint, which returns 404 on a public repo that has never initialized\nCode Scanning, so the SARIF upload was skipped even though public repos\nget Code Scanning for free (no GitHub Advanced Security). The first\nupload is what initializes it, so the probe could never pass on a\nnot-yet-set-up public repo.\n\nGate on repository visibility instead: visibility == \"public\" is\navailable directly; private and internal repos fall back to the alerts\nprobe as a GHAS-availability proxy. Internal enterprise repos report\nprivate:false but still require GHAS, so the check keys on visibility,\nnot private. The inline step is extracted into a tested\naction/scripts/check-code-scanning.sh with mocked-gh unit tests covering\npublic, private/internal with and without GHAS, and the unreadable\nvisibility fallback.\n\nOn a public repo the upload step now runs unconditionally, so a workflow\nmissing permissions: security-events: write fails the upload step rather\nthan skipping silently; documented in the action README and CHANGELOG.\n\nCloses #817",
          "timestamp": "2026-06-01T07:36:50Z",
          "tree_id": "e84cbc816fd91eb89635a597c50bf9885bf9d8e6",
          "url": "https://github.com/fallow-rs/fallow/commit/d744deb080d0c434046eadeefe61c0e97cb99ecc"
        },
        "date": 1780300230582,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niels@ment.ink",
            "name": "Niels Mentink",
            "username": "V1RE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "618e24ac0555a3e627905720fdb1f83323252b28",
          "message": "fix: credit package.json prettier string configs (#819)",
          "timestamp": "2026-06-01T07:41:00Z",
          "tree_id": "305062407a449d44c95f2e968191496aec0ca03e",
          "url": "https://github.com/fallow-rs/fallow/commit/618e24ac0555a3e627905720fdb1f83323252b28"
        },
        "date": 1780300639379,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "7da3687a8b7e182bfb92572b084fa09ce7e3e9b3",
          "message": "fix(action): validate SARIF file instead of exit code in fallback (#827)\n\nThe fallback SARIF generation block in action/scripts/analyze.sh gated\nits '::warning::SARIF generation failed' on the fallow exit code. But\nexit 1 means 'issues found' (normal); only exit code 2 and above is a\nreal error. So 'command: health' on any repo with complexity findings\n(which exits 1 whenever findings exist) logged the warning on every run\neven though a valid SARIF file was written. health never gets\n--sarif-file support, so the fallback block always runs for it.\n\nThe block now validates the produced file (non-empty and valid JSON via\njq -e) instead of gating on the exit code, matching the block's own\nentry condition and fallow's exit-code semantics. A regression test in\naction/tests/run.sh covers the valid-SARIF-on-exit-1 path (no warning,\nfile written) and the empty/invalid path (warning still fires).\n\nFixes #813.",
          "timestamp": "2026-06-01T08:05:42Z",
          "tree_id": "4340b0060885d4869233d7c914e8f413b7da7e69",
          "url": "https://github.com/fallow-rs/fallow/commit/7da3687a8b7e182bfb92572b084fa09ce7e3e9b3"
        },
        "date": 1780301310541,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "a8e5d02f872a8aca8fb4eaf14d02693fd28ed848",
          "message": "Merge pull request #822 from fallow-rs/comment-cleanup\n\nfix(mcp): restore schema descriptions and regenerate schema",
          "timestamp": "2026-06-01T10:14:12+02:00",
          "tree_id": "1ae10301813b78020b2ddc76cf4427858637cb1f",
          "url": "https://github.com/fallow-rs/fallow/commit/a8e5d02f872a8aca8fb4eaf14d02693fd28ed848"
        },
        "date": 1780301872700,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "e4f488b6130e5514e00850cc64bc7aa00baa846a",
          "message": "refactor(plugins): drop json from alias sibling extension probe\n\nJSON parses as a bare expression with no export, so find_exported_init can\nnever recover an alias literal from it; probing .json was dead I/O.",
          "timestamp": "2026-06-01T10:18:01+02:00",
          "tree_id": "b4d0a3021ad4cc9173d55c05e3d5a40e9e0c19f6",
          "url": "https://github.com/fallow-rs/fallow/commit/e4f488b6130e5514e00850cc64bc7aa00baa846a"
        },
        "date": 1780302254109,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "2005da8df9f06501189cb65d2c7c9a664abc96cc",
          "message": "chore(vscode): regenerate output-contract TS after output-schema change\n\nThe output schema was regenerated when doc comments were cleaned up, but\nthe dependent TypeScript contracts (`editors/vscode/src/generated/` and\n`npm/fallow/types/`) were not, so the VS Code Extension `check:codegen`\ngate failed with the generated files out of date with\n`docs/output-schema.json`. Regenerated via `codegen:types` so the\ncontracts match the current schema.",
          "timestamp": "2026-06-01T10:42:14+02:00",
          "tree_id": "76f30ef02ac879a25004c6d4524d7810a3ee7c5d",
          "url": "https://github.com/fallow-rs/fallow/commit/2005da8df9f06501189cb65d2c7c9a664abc96cc"
        },
        "date": 1780303504696,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niels@ment.ink",
            "name": "Niels Mentink",
            "username": "V1RE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b747ddcc3e2b1d00a60a27212b43e0c8bc02513",
          "message": "fix(resolve): preserve pnpm package source aliases (#824)\n\n* fix: preserve pnpm package source aliases\n\n* fix(resolve): keep resolved package name for bare path-alias imports\n\nFollow-up to the pnpm package-source-alias fix: package_usage_name_for_resolved_package\ncredited the declared specifier for every bare specifier, but Node.js subpath\nimports (#foo), ~/ , @/ , @@/ and PascalCase scope aliases are also bare and can\nmap to an external npm package whose real name is only recoverable from the\nresolved node_modules path. Guard the declared-name branch with !is_path_alias so\nthose keep the resolved-package name, preventing a false unused-dependency when a\npackage.json imports map points at an external package. Adds a direct regression\ntest for the pnpm-alias, scoped-subpath, common, #import-guard, and not-in-node_modules\ncases.\n\n---------\n\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-06-01T08:50:15Z",
          "tree_id": "d5d8089d8f32730e83a73bcb3f782ee1a687b9dd",
          "url": "https://github.com/fallow-rs/fallow/commit/1b747ddcc3e2b1d00a60a27212b43e0c8bc02513"
        },
        "date": 1780303938545,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "f84edcc82320d3cb3caa861bdba10e1d9114e505",
          "message": "fix(plugins): suppress built-in-only config_patterns collision warning\n\nThe silent-fail plugin diagnostic (#479) warned about config_patterns\ncollisions between two built-in plugins, e.g. vite and tanstack-router\nboth claiming vite.config.{ts,js,mts,mjs} (tanstack-router parses the\ntanstackRouter({...}) call there to find a custom generatedRouteTree\npath). The collision is benign: Phase 3a config matching runs every\nmatching plugin's resolve_config independently, so there is no data\nloss. The warning is also un-actionable for a built-in: its advice to\nrename the pattern or remove the duplicate plugin cannot be followed.\n\ndetect_pattern_collisions now emits a finding only when at least one\nowner is NOT a built-in plugin. Keying suppression on the built-in name\nset (rather than the external set) is robust even if a user-authored\nexternal plugin shares a built-in's name: the built-in owner alone never\nre-enables the warning. Built-in-vs-external and external-vs-external\ncollisions still warn. Regression tests use the real vite +\ntanstack-router pair (silent), a built-in-vs-external pair (warns), and a\nname-shadowing external (still silent).\n\nCloses #808",
          "timestamp": "2026-06-01T11:03:01+02:00",
          "tree_id": "e3b6c4124792f74ce5962ef320151b8ddac65f0b",
          "url": "https://github.com/fallow-rs/fallow/commit/f84edcc82320d3cb3caa861bdba10e1d9114e505"
        },
        "date": 1780304795220,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "d36365a6311919213b6d38b89d6084e67855c263",
          "message": "fix(health): clarify CRAP coverage hints\n\nHuman health output now explains whether CRAP scores come from Istanbul coverage or fallow's export-reference estimate. Mixed Istanbul runs also call out that unmatched functions fall back to estimates, so the high-complexity section no longer shows CRAP values without provenance.\n\nThe top-level parser now catches the common bare --coverage typo before clap suggests unrelated global flags. The regular subcommand error path is preserved for commands that do not support coverage, and focused tests cover both paths plus the human-output coverage notes.\n\nRefs #474.",
          "timestamp": "2026-06-01T11:40:49+02:00",
          "tree_id": "22d6824dfa78c51215e0d2705f405b0775311e85",
          "url": "https://github.com/fallow-rs/fallow/commit/d36365a6311919213b6d38b89d6084e67855c263"
        },
        "date": 1780307019029,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "40f7519af2a9039ba344867231791991e4b7f953",
          "message": "fix(health): detect Istanbul notes from match counts\n\nComplexity-only health output intentionally omits summary.coverage_model, but it can still include Istanbul match counters when --coverage or auto-detected coverage is active. The human CRAP provenance note now treats those counters as the source signal, so mixed coverage runs no longer claim every CRAP score is estimated.\n\nA regression test covers this complexity-only shape using Istanbul match counts without a populated coverage_model.\n\nRefs #474.",
          "timestamp": "2026-06-01T11:49:10+02:00",
          "tree_id": "99c09511f4ea18abda4b6a0072c365868a36ef34",
          "url": "https://github.com/fallow-rs/fallow/commit/40f7519af2a9039ba344867231791991e4b7f953"
        },
        "date": 1780307520379,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "4989d5e09f35689a525c2d9bc30f2ca4763d09a3",
          "message": "chore(lints): require unwrap and expect justifications\n\nEnable the workspace clippy unwrap_used and expect_used lints so new panic-prone calls need an explicit local reason instead of slipping into production code unnoticed.\n\nProduction sites now either avoid the panic path or carry scoped expectations for analyzer invariants such as validated glob patterns, infallible string formatting, hard-coded regexes, and guarded graph traversal state. Test and benchmark entry points get cfg/test allowances so fixture setup can stay concise without weakening release builds.\n\nThis is limited to the lint ratchet and required mechanical cleanup. It does not change CLI output contracts or analysis semantics.\n\nFixes #446.",
          "timestamp": "2026-06-01T11:59:58+02:00",
          "tree_id": "f697278aa4080de1b6f479c2330b3c839b23c76f",
          "url": "https://github.com/fallow-rs/fallow/commit/4989d5e09f35689a525c2d9bc30f2ca4763d09a3"
        },
        "date": 1780308192449,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "5340c6912fab59e9a963c66d50e52306e1203ee7",
          "message": "test(coverage): isolate git fixture signing\n\nCoverage upload tests create temporary git repositories to exercise dirty-worktree validation. Those repos should not inherit global commit signing settings from the developer machine or agent environment.\n\nDisable commit.gpgsign inside the fixture repositories while keeping the local author identity explicit. This keeps the tests focused on worktree state instead of host GPG availability.",
          "timestamp": "2026-06-01T12:47:59+02:00",
          "tree_id": "88403513b28353735f2cfc005de037a57ef73db8",
          "url": "https://github.com/fallow-rs/fallow/commit/5340c6912fab59e9a963c66d50e52306e1203ee7"
        },
        "date": 1780311102575,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "b54c3be7ea7af3c6dd49932de28d8b35941e744d",
          "message": "test(schema): allow schema drift expects\n\nThe schema-emit CI path runs clippy against the test build of fallow-schema-emit with the schema-emit feature enabled. Its drift tests intentionally use expect calls for invariant checks over the committed schema.\n\nAdd the same test-only unwrap and expect allowance used by other test entry points so production schema generation remains covered while CI can compile the drift checks under the workspace lint ratchet.",
          "timestamp": "2026-06-01T13:04:43+02:00",
          "tree_id": "9b72c8141951b37314efc21f1d99072365c6df91",
          "url": "https://github.com/fallow-rs/fallow/commit/b54c3be7ea7af3c6dd49932de28d8b35941e744d"
        },
        "date": 1780312052047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "8267f91ed4654e4105e61d65fa583417c5968edb",
          "message": "chore(release): use trusted publishing for crate publishes\n\nSwitch the Rust crate publish job from the long-lived crates.io token secret to GitHub Actions OIDC via rust-lang/crates-io-auth-action. The publish job now requests id-token permission and every cargo publish step consumes the action's short-lived token.\n\nThis keeps the existing nine-crate publish order and index waits unchanged, while removing the secret dependency that zizmor flagged for trusted publishing.\n\nFixes #519.",
          "timestamp": "2026-06-01T13:31:17+02:00",
          "tree_id": "1f27fe1c71502ad36a30a49bb3e39eeb7ec63f0a",
          "url": "https://github.com/fallow-rs/fallow/commit/8267f91ed4654e4105e61d65fa583417c5968edb"
        },
        "date": 1780313666170,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "d57b9ba37630c6b5f9cf748b6a25ae3bb9a6c6bb",
          "message": "refactor(plugins): type config path parsing\n\nPath-shaped values extracted from JavaScript and TypeScript config files now flow through typed PathBuf helpers instead of plain strings. The parser keeps plugin output in forward-slash string form at the boundary, while webpack, Nuxt, Vite, SvelteKit, TypeScript, Wrangler, and Docusaurus consume filesystem paths internally where appropriate.\n\nThis keeps package-style alias semantics out of scope and preserves the existing PluginResult contract. Regression coverage now exercises mixed separators, project-root-style leading slashes, imported alias spread kind preservation, webpack context entries, and Nuxt srcDir normalization.\n\nFixes #448.",
          "timestamp": "2026-06-01T13:39:26+02:00",
          "tree_id": "456a9d8b8de6820a54b1563bfcdfcb55adc71c94",
          "url": "https://github.com/fallow-rs/fallow/commit/d57b9ba37630c6b5f9cf748b6a25ae3bb9a6c6bb"
        },
        "date": 1780314161875,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.5,
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
          "id": "351f2cd34cf7abe42f57a5053e7852e61eb2b307",
          "message": "feat(nuxt): resolve script auto-import providers\n\nNuxt composables and utils can be referenced from scripts without explicit imports, so fallow now records unresolved value identifiers during JS, TS, and SFC script extraction and resolves them through the plugin auto-import table during graph build.\n\nThe Nuxt plugin scans convention script providers, including recursive shared utils and shared types, emits named and default export rules, and keeps custom imports configs on the fallback entry-pattern path. The resolver skips known JS, Web, Vue, and Nuxt built-ins so framework globals do not credit user files by accident.\n\nRegression fixtures cover zero-import script setup usage, normal TS files, default basename exports, collisions, explicit imports, local shadowing, built-ins, type-only references, and custom imports config fallbacks.\n\nFixes #739.",
          "timestamp": "2026-06-01T14:42:18+02:00",
          "tree_id": "4fad3bc5f4b9d1dbde527d7675d4ef1cc474ce63",
          "url": "https://github.com/fallow-rs/fallow/commit/351f2cd34cf7abe42f57a5053e7852e61eb2b307"
        },
        "date": 1780317922534,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "c72736fbf9c7df6cdf0c09541e0f68cc12e87e81",
          "message": "feat(schema): add JSON kind discriminator\n\nFallow's object-shaped JSON roots previously required consumers to infer report type from field presence. That was fragile for generated contracts and agent integrations, especially while the legacy check command continues as an alias.\n\nSerialize typed FallowOutput roots with canonical kind values, add --legacy-envelope to remove only the document-root discriminator for one cycle, and keep check deprecated with dead-code wire names. Schema emission now rewrites the FallowOutput union into draft-07 allOf intersections so validators and TypeScript codegen see the discriminator.\n\nRefresh generated schemas, snapshots, N-API option docs and tests, and packaged agent guidance. Helper roots such as flags, non-boundary list, SARIF, and CodeClimate stay outside this migration.\n\nFixes #413.",
          "timestamp": "2026-06-01T15:04:35+02:00",
          "tree_id": "5fb71993fcc679c4bff5815cdcd83ef12bcb2e73",
          "url": "https://github.com/fallow-rs/fallow/commit/c72736fbf9c7df6cdf0c09541e0f68cc12e87e81"
        },
        "date": 1780319283491,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "b888a0bd7b5db2d4698cf64ca414bc0041d76309",
          "message": "feat(health): expose CRAP source consistency\n\nCRAP health findings now keep their coverage provenance visible across the JSON contract. The health report summary and grouped health buckets expose coverage_source_consistency so agents can distinguish uniform source data from mixed Istanbul and estimated inputs.\n\nThe scoring path now centralizes CRAP coverage source precedence: Angular template inheritance wins first, Istanbul data wins next, and static estimates remain the fallback. Istanbul path canonicalization stays inside the Istanbul branch so ordinary static scoring does not add filesystem work.\n\nThe secondary CRAP refactor action also moves from a fixed internal constant to health.crapRefactorBand, with config schema, output schema, generated TypeScript contracts, MCP prose, and tests updated around the new contract.\n\nFixes #474.",
          "timestamp": "2026-06-01T15:16:04+02:00",
          "tree_id": "9a9a38239174b0ac0d0362dbdadd2dd912c89864",
          "url": "https://github.com/fallow-rs/fallow/commit/b888a0bd7b5db2d4698cf64ca414bc0041d76309"
        },
        "date": 1780319958669,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "e855cab3f26e5b73854af4185aeb2b0d92c8aeef",
          "message": "fix(plugins): clarify TanStack route ignore regex warnings\n\nTanStack Router accepts JavaScript regular expressions for routeFileIgnorePattern, but fallow validates route ignore patterns with Rust's regex engine before matching route file segments. JavaScript-only syntax such as lookahead should not look like a generic user typo or a future hard-error candidate in v2.\n\nThis keeps the existing warn-and-ignore behavior and routes TanStack segment-regex failures through a compatibility-specific warning. Generic plugin exclude regex diagnostics keep the existing wording, and the registry tests cover live unsupported pattern shapes plus the unchanged strip behavior.\n\nRefs #513.",
          "timestamp": "2026-06-01T17:26:25+02:00",
          "tree_id": "3e7358d4ebb747852d2cb0b22b376fc7bbd0f189",
          "url": "https://github.com/fallow-rs/fallow/commit/e855cab3f26e5b73854af4185aeb2b0d92c8aeef"
        },
        "date": 1780327762374,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.6,
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
          "id": "ee7c5c2b3e57845140a898905a7e035ab6cab02d",
          "message": "feat(security): add client-server leak scan\n\nAdd an opt-in fallow security command for local security candidates. The MVP enables a single graph-structural client-server-leak rule that starts at React client boundaries and reports direct or transitive access to non-public process.env values.\n\nWire the command through human, JSON, and SARIF output with typed root envelopes, suppress actions, schema/codegen updates, cache versioning, and CI flag parity. Security candidates stay outside bare fallow and audit, and the findings remain framed for human or agent verification rather than as confirmed vulnerabilities.\n\nKeep incremental CI filtering trace-aware so a changed secret-source module on an existing client import path is not silently dropped.",
          "timestamp": "2026-06-01T17:35:14+02:00",
          "tree_id": "db995891fb2707ad112c1df529324bb0f3eb439e",
          "url": "https://github.com/fallow-rs/fallow/commit/ee7c5c2b3e57845140a898905a7e035ab6cab02d"
        },
        "date": 1780328617266,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "a0fec05ac5d4a8ffdaf975c2c62780d8c15d83e8",
          "message": "fix(coverage): use srcmap offset lookup for remapping\n\nUpdate the direct CLI source-map consumer to srcmap v0.3.7 so runtime coverage remapping can use GeneratedOffsetLookup for generated-source position lookup.\n\nKeep the dependency aliased because oxc_coverage_instrument still exact-pins the registry srcmap v0.3.6 packages. The remapper preserves the existing V8 UTF-16 offset contract by converting those offsets to generated-source byte offsets before calling the new srcmap lookup helper.",
          "timestamp": "2026-06-01T18:09:54+02:00",
          "tree_id": "b77099d317d2d7cdaba6381dcd7f800071e741e4",
          "url": "https://github.com/fallow-rs/fallow/commit/a0fec05ac5d4a8ffdaf975c2c62780d8c15d83e8"
        },
        "date": 1780330386668,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
            "unit": "%"
          }
        ]
      }
    ]
  }
}