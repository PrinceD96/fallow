window.BENCHMARK_DATA = {
  "lastUpdate": 1779402608727,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Fallow Allocations": [
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
          "id": "920a8e0cca3e1b58d0ef5bf106aacde11102cb96",
          "message": "chore: release v2.29.1",
          "timestamp": "2026-04-12T10:13:19+02:00",
          "tree_id": "f81e7cb7beb5212473becb3033f76f4a0820a639",
          "url": "https://github.com/fallow-rs/fallow/commit/920a8e0cca3e1b58d0ef5bf106aacde11102cb96"
        },
        "date": 1775981897243,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3602856,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15309,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
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
          "id": "712bc212ac0d728a6065422a6b49847e2954d7e4",
          "message": "test: integration tests for all 5 features, fix default export resolution\n\nAdd 4 test fixtures and 7 integration tests:\n- arrow-wrapped-dynamic-imports: React.lazy, lazy() reachability + default export credit\n- visibility-tags: @public/@internal/@beta/@alpha suppress unused-export detection\n- entry-export-validation: --include-entry-exports flag enables/disables entry skip\n- script-multiplexers: concurrently/npm-run-all deps not false-flagged\n\nFix: arrow-wrapped imports with destructured_names [\"default\"] now produce\nImportedName::Default instead of ImportedName::Named(\"default\"), so the\ndefault export is correctly credited in the module graph.",
          "timestamp": "2026-04-13T00:07:27+02:00",
          "tree_id": "2157129d81c7b481451fa37e3bea58c8aa38aa70",
          "url": "https://github.com/fallow-rs/fallow/commit/712bc212ac0d728a6065422a6b49847e2954d7e4"
        },
        "date": 1776031927104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3616376,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15329,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
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
          "id": "7266c648d08820283e95da0567017783b810755b",
          "message": "chore: release v2.30.0",
          "timestamp": "2026-04-13T00:22:53+02:00",
          "tree_id": "64da1dfc25eb916ef271c9a9ba666650d7406d29",
          "url": "https://github.com/fallow-rs/fallow/commit/7266c648d08820283e95da0567017783b810755b"
        },
        "date": 1776032675264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3612720,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15327,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
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
          "id": "cf3fa79f9c1215b1bf796f3a8d49f525ae71f56c",
          "message": "feat: add Hardhat, UnoCSS, Qwik, Convex, pnpm plugins (85 -> 90)\n\nFive new framework plugins, each validated against real open source\nprojects:\n\n- Hardhat: Ethereum dev framework. Parses hardhat.config via new\n  extract_imports_and_requires() to capture both import statements and\n  side-effect require() calls. Entry points for test/, scripts/, tasks/,\n  deploy/, ignition/modules/.\n- UnoCSS: Atomic CSS engine. Supports both uno.config and unocss.config\n  file names. Extracts preset/transformer imports via imports_only.\n  Prefix enabler @unocss/ catches all scoped packages.\n- Qwik: Web framework (v1 @builder.io + v2 @qwik.dev). File-system\n  routing with used_exports for route handlers (onGet, onPost, etc.)\n  and layouts including reset layouts (layout!).\n- Convex: Backend platform. All convex/**/*.ts files are entry points.\n  Protects _generated/, schema, auth, http from unused-file detection.\n- pnpm: Package manager with file-existence detection (pnpm-lock.yaml,\n  pnpm-workspace.yaml) since pnpm is rarely a package.json dependency.\n\nAlso adds extract_imports_and_requires() to config_parser.rs for\nconfigs that load plugins via top-level require() statements.",
          "timestamp": "2026-04-13T09:29:52+02:00",
          "tree_id": "49a7c77b15fdb3a97dfb38b63788a078c79ecb5b",
          "url": "https://github.com/fallow-rs/fallow/commit/cf3fa79f9c1215b1bf796f3a8d49f525ae71f56c"
        },
        "date": 1776065520431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3609912,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15325,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "7916cc5c85af7a96188948f16af08b69ef891f11",
          "message": "docs: update detection.md with production mode config glob details (#111)",
          "timestamp": "2026-04-13T09:53:29+02:00",
          "tree_id": "8cf5ce3cb688b532a87caa723ccb599a82453f76",
          "url": "https://github.com/fallow-rs/fallow/commit/7916cc5c85af7a96188948f16af08b69ef891f11"
        },
        "date": 1776066970648,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3637393,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15318,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 542105,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5538,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "9687a650ad8d6722b8a205a3e868c02e6dbcbc45",
          "message": "chore: release v2.31.0",
          "timestamp": "2026-04-13T10:18:52+02:00",
          "tree_id": "a0c54496251ea78ed8811f676f0df20d30786b69",
          "url": "https://github.com/fallow-rs/fallow/commit/9687a650ad8d6722b8a205a3e868c02e6dbcbc45"
        },
        "date": 1776068459874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3630265,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15312,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 542105,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5538,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "bc2ac04af20694bea9f773243d21077df9aec6ed",
          "message": "fix(test): prevent git operations from leaking into main repo via GIT_DIR\n\nWhen the pre-push hook runs cargo test, git sets GIT_DIR in the hook\nenvironment pointing to the main repo's .git directory. Test helpers\nthat create temp git repos via current_dir() were still committing to\nthe main repo because GIT_DIR overrides current_dir. Added\nenv_remove(\"GIT_DIR\") and env_remove(\"GIT_WORK_TREE\") to both the\nhealth_tests and audit_tests git helpers.",
          "timestamp": "2026-04-13T10:44:32+02:00",
          "tree_id": "bd03c9a8667771534930d1508746e7694dcf2c59",
          "url": "https://github.com/fallow-rs/fallow/commit/bc2ac04af20694bea9f773243d21077df9aec6ed"
        },
        "date": 1776069968264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3642833,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15334,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 542105,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5538,
            "unit": "allocations"
          }
        ]
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
          "id": "9a372be83e39b91758711aeb2b6789cb2be605d6",
          "message": "docs: update README, output schema, and knip analysis for stale suppressions\n\nAdd stale suppression comments and @expected-unused JSDoc tag to\nREADME \"Dead code\" section. Add StaleSuppression definition and\nstale_suppressions field to docs/output-schema.json. Mark items\n#6 and #10 as shipped in knip-issue-analysis.md.",
          "timestamp": "2026-04-13T13:29:09+02:00",
          "tree_id": "5b28531801a5ed9f8da1167861fb20db9df28e37",
          "url": "https://github.com/fallow-rs/fallow/commit/9a372be83e39b91758711aeb2b6789cb2be605d6"
        },
        "date": 1776079933605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3644169,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15332,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 542105,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5538,
            "unit": "allocations"
          }
        ]
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
          "id": "0fd3a4f91d73186af661911c7c46052c6d052a78",
          "message": "chore: release v2.32.0",
          "timestamp": "2026-04-13T13:33:21+02:00",
          "tree_id": "b05a03262ade3b3b5ac680df61ecbb4cedc14324",
          "url": "https://github.com/fallow-rs/fallow/commit/0fd3a4f91d73186af661911c7c46052c6d052a78"
        },
        "date": 1776080112562,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3632201,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15316,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 542105,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5538,
            "unit": "allocations"
          }
        ]
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
          "id": "06c108192e0308605c8c4839d9d11932d343d3e9",
          "message": "test: add integration fixture and exhaustiveness test for stale suppressions\n\nIntegration fixture exercises all stale suppression variants:\n- Stale next-line comment (used export)\n- Active next-line comment (unused export, suppression working)\n- Stale blanket comment (no issues on next line)\n- Stale file-level comment (file is reachable)\n- Stale @expected-unused tag (export became used)\n- Active @expected-unused tag (export genuinely unused)\n\nExhaustiveness test ensures every IssueKind variant is classified\nin either core_kinds (checked by SuppressionContext) or NON_CORE_KINDS\n(excluded from stale detection). Fails when a new variant is added\nwithout being classified.",
          "timestamp": "2026-04-13T13:50:36+02:00",
          "tree_id": "82700228de6a3dc1cba36a97c3a39e73d0e09d10",
          "url": "https://github.com/fallow-rs/fallow/commit/06c108192e0308605c8c4839d9d11932d343d3e9"
        },
        "date": 1776081130470,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3647841,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15338,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 542105,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5538,
            "unit": "allocations"
          }
        ]
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
          "id": "2b76af893757da9d453ffdddab26b3e864f7925f",
          "message": "style: apply rustfmt to stale suppression tests",
          "timestamp": "2026-04-13T13:53:03+02:00",
          "tree_id": "0ec9e18ccb5b1cd07772aec91c67ed5f80a20760",
          "url": "https://github.com/fallow-rs/fallow/commit/2b76af893757da9d453ffdddab26b3e864f7925f"
        },
        "date": 1776081280650,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3643617,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15338,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 542105,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5538,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "a9458e58fbb4d2943a732a5bc0f8f0be9dd929e1",
          "message": "fix: use is_config_file predicate for workspace-level config detection (#112)\n\nAfter #111 narrowed PRODUCTION_EXCLUDE_PATTERNS from **/*.config.* to\n*.config.* (root-anchored), find_test_only_dependencies no longer matched\nworkspace-level config files like packages/foo/vitest.config.ts.\n\nAdd is_config_file() as an additional predicate alongside the glob match.\nThe curated predicate checks filenames against ~50 known config patterns\nat any depth, avoiding false matches on application configs like\napp.config.ts while correctly matching workspace-level tooling configs.\n\nCloses #112",
          "timestamp": "2026-04-13T14:13:01+02:00",
          "tree_id": "57e8c1bad9d7e2db0d2928e7bdd34287c0ae4068",
          "url": "https://github.com/fallow-rs/fallow/commit/a9458e58fbb4d2943a732a5bc0f8f0be9dd929e1"
        },
        "date": 1776082613783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3638393,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15328,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 542105,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5538,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "ea005f479a5a184cd55a9b98fa38d416dc28f00b",
          "message": "chore: release v2.32.1",
          "timestamp": "2026-04-13T14:16:33+02:00",
          "tree_id": "33766a0603a3ac74230de23772a0c749721588eb",
          "url": "https://github.com/fallow-rs/fallow/commit/ea005f479a5a184cd55a9b98fa38d416dc28f00b"
        },
        "date": 1776082866595,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3624841,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15300,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 542105,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5538,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "ac43d767717fa11e1ed4d1537d378acf55ad9419",
          "message": "fix: harden CI workflow permissions for OpenSSF Scorecard\n\nRemove unnecessary `deployments: write` from 7 benchmark/CI workflows\nsince benchmark-action only needs `contents: write` for gh-pages push.\n\nAdd top-level `permissions: {}` to test-action.yml and move\ndependabot-auto-merge.yml permissions from workflow to job level.",
          "timestamp": "2026-04-13T15:32:46+02:00",
          "tree_id": "001a4bc0c736b419b62c35796d92bf2c9ae1968a",
          "url": "https://github.com/fallow-rs/fallow/commit/ac43d767717fa11e1ed4d1537d378acf55ad9419"
        },
        "date": 1776091166297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3637409,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15322,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 542105,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5538,
            "unit": "allocations"
          }
        ]
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
          "id": "8e38ff62d1daa5c4454569c8a3f3a921c84bc2d3",
          "message": "chore: release v2.33.0",
          "timestamp": "2026-04-13T19:57:50+02:00",
          "tree_id": "9fa73cb7ce8a1bb5a4e79e6741fa6ff62a6da95e",
          "url": "https://github.com/fallow-rs/fallow/commit/8e38ff62d1daa5c4454569c8a3f3a921c84bc2d3"
        },
        "date": 1776103187160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3645737,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15340,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 542105,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5538,
            "unit": "allocations"
          }
        ]
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
          "id": "a7f42022f109241317d9b06833310ea59d8ca7e0",
          "message": "feat: surface per-file LOC in health output\n\nShow file line count as the first metric on the file health detail line,\ninclude LOC in SplitHighImpact, ExtractComplexFunctions, and\nExtractDependencies recommendation messages, and add a \"lines\" metric\nentry to health_meta() for JSON explain consumers.",
          "timestamp": "2026-04-13T23:12:20+02:00",
          "tree_id": "33aa79294ae5091b5493993ed26dc54bc9317bc1",
          "url": "https://github.com/fallow-rs/fallow/commit/a7f42022f109241317d9b06833310ea59d8ca7e0"
        },
        "date": 1776114984272,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3645137,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15334,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 542105,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5538,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "bfe4b648ce1a82563114bf55510d89c949270512",
          "message": "perf: borrow line_offsets in compute_complexity instead of cloning\n\nChange ComplexityVisitor to borrow &[u32] line offsets instead of\ntaking ownership of Vec<u32>. Eliminates one Vec clone per file\nwhen complexity metrics are enabled (health command).",
          "timestamp": "2026-04-13T23:16:57+02:00",
          "tree_id": "c1dd51c07f5afb99b234d41fb7b25cb4cee2914c",
          "url": "https://github.com/fallow-rs/fallow/commit/bfe4b648ce1a82563114bf55510d89c949270512"
        },
        "date": 1776115363296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3736031,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15514,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "148a8d0fcf4e254145e71807e4705ebdaa09771e",
          "message": "perf: eliminate O(n^2) patterns in analyze, cross-reference, and families\n\n- Pre-compile public_packages glob matchers once instead of per-workspace\n- Use FxHashSet for ignore_dependencies in find_type_only_dependencies\n  (was linear scan, matching sibling functions)\n- Build per-file index for cross_reference unused export lookup\n  (was O(clones * all_exports), now O(clones * per_file_exports))\n- Use FxHashMap for clone family grouping (was O(N*M) Vec scan)",
          "timestamp": "2026-04-14T00:07:02+02:00",
          "tree_id": "7f3d6bb02e974520337b1592e2d3ebe9dc4d90b2",
          "url": "https://github.com/fallow-rs/fallow/commit/148a8d0fcf4e254145e71807e4705ebdaa09771e"
        },
        "date": 1776118298792,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3724079,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15490,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "e2ba7dd6e8900c560af50301fabed82e1a58e267",
          "message": "feat: add total LOC vital sign and improve penalty breakdown visibility\n\nAdd total_loc to VitalSigns, computed unconditionally from parsed module\nline counts. Populate VitalSignsCounts.total_lines unconditionally\n(previously only set by the duplication pipeline). Bump snapshot schema\nto v6.\n\nImprove health score penalty breakdown: sort penalties by magnitude\n(largest first), highlight the top penalty in yellow, dim the rest.\nShorten labels to \"deps\" per design system conventions.\n\nSurfaces in all output formats: human (thousands-formatted in Metrics\nline), JSON (total_loc field), compact (total_loc=N), markdown (table\nrow).",
          "timestamp": "2026-04-14T00:13:38+02:00",
          "tree_id": "3d31c302eef8f5a0ea0c347dee75e9fac55295db",
          "url": "https://github.com/fallow-rs/fallow/commit/e2ba7dd6e8900c560af50301fabed82e1a58e267"
        },
        "date": 1776118511977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3722335,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15485,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "da0cf78405cc033bc17bdd2f24a990b5447ef255",
          "message": "fix: add deterministic tiebreaker to clone family sort\n\nFxHashMap iteration order is non-deterministic, so families with\nequal total_duplicated_lines and group count could appear in\narbitrary order. Add first file path as a third sort key.",
          "timestamp": "2026-04-14T00:16:16+02:00",
          "tree_id": "f604a6d4d24a68ad90633329b1d659a65f3695ff",
          "url": "https://github.com/fallow-rs/fallow/commit/da0cf78405cc033bc17bdd2f24a990b5447ef255"
        },
        "date": 1776118823556,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3711655,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15471,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "cfb451e3794e9c884a32cabfa39a317ef6c51ea8",
          "message": "revert: remove unmeasured perf changes, keep parallel walker\n\nReverts the O(n^2) algorithmic fixes and export dedup that showed\nno measurable improvement on real projects or benchmarks. Keeps only\nthe parallel file walker and line_offsets borrow which had verified\nreal-world impact.\n\nReverted commits:\n- perf: eliminate O(n^2) patterns in analyze, cross-reference, and families\n- fix: add deterministic tiebreaker to clone family sort\n- perf: O(1) export name dedup in build_module_node",
          "timestamp": "2026-04-14T00:19:10+02:00",
          "tree_id": "5fe15b72345d2b3d48251d6c1cc5f39aeddddd3e",
          "url": "https://github.com/fallow-rs/fallow/commit/cfb451e3794e9c884a32cabfa39a317ef6c51ea8"
        },
        "date": 1776119007138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3738031,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15469,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 582941,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5626,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "7b468e52310cf9a90e61e86fb8449ae5a2b224b8",
          "message": "perf: share parsed modules between check and health in combined mode\n\nWhen running bare `fallow` (dead-code + dupes + health), the check\npipeline now parses with need_complexity=true and retains the\nmodules + discovered files. Health reuses them, skipping its own\ndiscovery and parse pass.\n\nOn next.js (21K files): eliminates ~374ms of redundant parsing.\nNet wall-clock savings ~250ms (complexity visitor adds ~100ms to\nthe check parse, offsetting part of the savings).",
          "timestamp": "2026-04-14T07:29:58+02:00",
          "tree_id": "3461b3f22786ecfa1f93d7345101797cc9734167",
          "url": "https://github.com/fallow-rs/fallow/commit/7b468e52310cf9a90e61e86fb8449ae5a2b224b8"
        },
        "date": 1776144841489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3713999,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15474,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "a8a54f45cc69fd3ec94ae0cd21e2380ad69d921d",
          "message": "perf: share analysis graph between check and health in combined mode\n\nExtends the shared parse optimization to also share the module graph\nand analysis results. Health's compute_filtered_file_scores now\nreuses the pre-computed AnalysisOutput instead of re-running\ndiscovery + plugins + resolution + graph build for file scoring.\n\nOn next.js (21K files): eliminates ~1.5s of redundant analysis.\nCombined with module sharing: 6.2s -> ~5.0s (-19%).",
          "timestamp": "2026-04-14T09:37:56+02:00",
          "tree_id": "92a0f4faf53210c6bc9fd0ba151372b4c826d3bb",
          "url": "https://github.com/fallow-rs/fallow/commit/a8a54f45cc69fd3ec94ae0cd21e2380ad69d921d"
        },
        "date": 1776152521928,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3714063,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15470,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "aaee82e2b04b77783a12c6aafd46073a0426e197",
          "message": "perf: share analysis graph between check and health in combined mode\n\nExtends the shared parse optimization to also share the module graph\nand analysis results. Health's compute_filtered_file_scores now\nreuses the pre-computed AnalysisOutput instead of re-running\ndiscovery + plugins + resolution + graph build for file scoring.\n\nOn next.js (21K files): eliminates ~1.5s of redundant analysis.\nCombined with module sharing: 6.2s -> ~5.0s (-19%).",
          "timestamp": "2026-04-14T09:37:56+02:00",
          "tree_id": "92a0f4faf53210c6bc9fd0ba151372b4c826d3bb",
          "url": "https://github.com/fallow-rs/fallow/commit/aaee82e2b04b77783a12c6aafd46073a0426e197"
        },
        "date": 1776152959650,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3714383,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15474,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "7b1c7d7d1d690641a6b6c3bae38b416b6487f21d",
          "message": "fix: expand {projectRoot} and {workspaceRoot} tokens in Nx includePaths (#114)\n\nNx project.json uses {projectRoot} and {workspaceRoot} placeholder\ntokens in stylePreprocessorOptions.includePaths. These are now expanded\nbefore resolving SCSS include directories, fixing false unresolved\nimport reports in Angular+Nx monorepos.",
          "timestamp": "2026-04-14T10:28:43+02:00",
          "tree_id": "7815b65e705126ce64f70956f3bf1b53eef5caad",
          "url": "https://github.com/fallow-rs/fallow/commit/7b1c7d7d1d690641a6b6c3bae38b416b6487f21d"
        },
        "date": 1776155425623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3731639,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15498,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "b6cbf40ab98fb34614c20165b823224b56936d63",
          "message": "chore: bump cache version for .then() extraction, clean up clone",
          "timestamp": "2026-04-14T10:40:11+02:00",
          "tree_id": "7a56106c839368eff8f7a3c9f83b9e3501c082cc",
          "url": "https://github.com/fallow-rs/fallow/commit/b6cbf40ab98fb34614c20165b823224b56936d63"
        },
        "date": 1776156111727,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3716127,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15468,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "89130f8d7377c10d72e1749e7a8729d71d89ab18",
          "message": "fix: expand Nx tokens in main and tsConfig fields, not just includePaths\n\n{projectRoot} and {workspaceRoot} can appear in any path-valued field\nin project.json. Hoisted token expansion above all three path fields\n(main, tsConfig, includePaths) so they all expand consistently.",
          "timestamp": "2026-04-14T10:49:59+02:00",
          "tree_id": "43bf52d8c0f2ec92ae902ddce0dfee644e3a28b8",
          "url": "https://github.com/fallow-rs/fallow/commit/89130f8d7377c10d72e1749e7a8729d71d89ab18"
        },
        "date": 1776156699090,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3725559,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15500,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "7305e1c0702336258b8b057dc2ec397e449984bb",
          "message": "fix: resolve CLI binary names to package names via dependency bin fields\n\nPackages whose binary name diverges from the package name (e.g.,\n@arethetypeswrong/cli provides \"attw\") were falsely flagged as unused\ndependencies when used in npm scripts. Build a dynamic bin-to-package\nreverse map from dependency package.json bin fields, probing node_modules\nat both project root and workspace roots for non-hoisted setups.\n\nCloses #107",
          "timestamp": "2026-04-14T11:02:18+02:00",
          "tree_id": "705bfb6976b38bd74173351a7a2819de8d632179",
          "url": "https://github.com/fallow-rs/fallow/commit/7305e1c0702336258b8b057dc2ec397e449984bb"
        },
        "date": 1776157581879,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3748257,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15493,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 582941,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5626,
            "unit": "allocations"
          }
        ]
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
          "id": "50f6b7af3a54858ff8c0fb25f4af9ed91729415d",
          "message": "chore: release v2.34.0",
          "timestamp": "2026-04-14T11:11:01+02:00",
          "tree_id": "6f1602074a4487d1b4ed944f452eee3557294f55",
          "url": "https://github.com/fallow-rs/fallow/commit/50f6b7af3a54858ff8c0fb25f4af9ed91729415d"
        },
        "date": 1776158230730,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3718441,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15481,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "56264f745abdb403647240a6e8969368043bb9ac",
          "message": "feat: add severity tiers to health findings, fix MI formula for small files (#118, #119)\n\nAdd FindingSeverity (moderate/high/critical) to HealthFinding based on\nhow far above thresholds. Default thresholds: cognitive 25/40, cyclomatic\n30/50. Add --min-severity flag for CI exit code filtering.\n\nFix Maintainability Index formula distortion for small files by adding\nLOC dampening factor min(lines/50, 1.0). A 5-line type guard no longer\nscores worse than a 192-line nightmare function.\n\nChanges:\n- FindingSeverity enum with Ord derive, compute_finding_severity() helper\n- MI formula: dampening prevents density from dominating on files <50 lines\n- --min-severity moderate|high|critical CLI flag for exit code filtering\n- Severity counts on HealthSummary (computed before --top truncation)\n- All 6 report formats: human (CRITICAL/HIGH badges), JSON (severity field),\n  SARIF (level mapping), compact, markdown (Severity column), CodeClimate\n- MCP server: min_severity param on HealthParams\n- GitHub Action: min-severity input, severity in annotations/summaries\n- GitLab CI: severity column in summary table\n- SARIF defaultConfiguration.level updated to \"note\" for health rules\n- SNAPSHOT_SCHEMA_VERSION bumped to 7\n- Health test fixtures with actual findings covering all severity levels",
          "timestamp": "2026-04-14T15:59:18+02:00",
          "tree_id": "852dd24db82407225c397d7ad13e5964a1549b6d",
          "url": "https://github.com/fallow-rs/fallow/commit/56264f745abdb403647240a6e8969368043bb9ac"
        },
        "date": 1776175456382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3724881,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15492,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "485d7de07bc7c0a532f96436bf78d92fd6cc068d",
          "message": "chore: release v2.35.0",
          "timestamp": "2026-04-14T16:08:41+02:00",
          "tree_id": "d12b9b7e5cc2bea1c4225c6d707afe6f1cddf44f",
          "url": "https://github.com/fallow-rs/fallow/commit/485d7de07bc7c0a532f96436bf78d92fd6cc068d"
        },
        "date": 1776175993356,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3745121,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15483,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 582941,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5626,
            "unit": "allocations"
          }
        ]
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
          "id": "a36a915fa5afbc806c186ad90f60f0563f24db66",
          "message": "chore: release v2.36.0",
          "timestamp": "2026-04-14T23:38:28+02:00",
          "tree_id": "de2f70dfc477f5b74915f68c6e846838137ab119",
          "url": "https://github.com/fallow-rs/fallow/commit/a36a915fa5afbc806c186ad90f60f0563f24db66"
        },
        "date": 1776202800372,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3719169,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15480,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "073d29d979974a036c0103c95b0bd09a8ff98577",
          "message": "fix(plugins): extract object-form `input` from Angular/Nx entry arrays\n\nThe Angular CLI workspace schema allows two forms in `styles`, `scripts`,\nand `polyfills` arrays:\n\n  \"styles\": [\n    \"src/styles.scss\",\n    { \"input\": \"src/theme.scss\", \"bundleName\": \"theme\", \"inject\": false }\n  ]\n\nThe object form is used for vendor stylesheets that opt out of\nauto-injection or need an explicit bundle name. The shared helper\n`expression_to_string_or_array` in `config_parser.rs` silently dropped\nobject-form array elements because its `ArrayExpression` arm filtered\neach element through `expression_to_string`, which returns `None` for\n`ObjectExpression`. That caused false-positive \"unused file\" reports\nfor any file referenced via the object form in either `angular.json`\n(Angular plugin) or `project.json` (Nx plugin).\n\nFix: when an array element is an object, extract its `input` property\nvia the pre-existing `find_property` helper. Objects without `input`\nare still dropped (matches previous behavior). Strings are unchanged.\nOther property values like `bundleName` are NOT extracted as paths.\n\nTests: direct unit test on the helper plus end-to-end tests through\nboth Angular and Nx plugins covering string-form preserved, object-form\nextracted, objects-without-input ignored, and no-leak of other properties.\n\nCloses #126.",
          "timestamp": "2026-04-15T09:28:17+02:00",
          "tree_id": "de48f8bd7c7fa7f15bbf7ca45b4f64cb37bbedc5",
          "url": "https://github.com/fallow-rs/fallow/commit/073d29d979974a036c0103c95b0bd09a8ff98577"
        },
        "date": 1776238649462,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3726633,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15500,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "c07d06b0000536b69f883c56cb3ce95e4eea88f4",
          "message": "chore: release v2.37.0",
          "timestamp": "2026-04-15T09:39:07+02:00",
          "tree_id": "fcd20f02d94471d15b576e6498af3f852217019b",
          "url": "https://github.com/fallow-rs/fallow/commit/c07d06b0000536b69f883c56cb3ce95e4eea88f4"
        },
        "date": 1776239021546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3719657,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15493,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "77c956fb040565e5f76901e7380751f9da1a3ba7",
          "message": "chore: release v2.38.0",
          "timestamp": "2026-04-15T10:53:07+02:00",
          "tree_id": "7227bcaf30f778bbce1d103164549f8397c31667",
          "url": "https://github.com/fallow-rs/fallow/commit/77c956fb040565e5f76901e7380751f9da1a3ba7"
        },
        "date": 1776243297049,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3748545,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15489,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 582941,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5626,
            "unit": "allocations"
          }
        ]
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
          "id": "039fb44c1627d0512f7c578a0b7839b670219e85",
          "message": "fix: stabilize production coverage health flow",
          "timestamp": "2026-04-16T11:36:50+02:00",
          "tree_id": "0b1acc311e2c78591ed966b8bc399ab48150fefe",
          "url": "https://github.com/fallow-rs/fallow/commit/039fb44c1627d0512f7c578a0b7839b670219e85"
        },
        "date": 1776332474865,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3736249,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15473,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 582941,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5626,
            "unit": "allocations"
          }
        ]
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
          "id": "0fc7fc01cb7c7588910909c2c96956a2e98e3aae",
          "message": "fix: finalize production coverage hardening",
          "timestamp": "2026-04-16T15:37:39+02:00",
          "tree_id": "a9eda4090cdb9c1c64d539874e4cc8506b733a58",
          "url": "https://github.com/fallow-rs/fallow/commit/0fc7fc01cb7c7588910909c2c96956a2e98e3aae"
        },
        "date": 1776346832861,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3722385,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15498,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "0368c055cc3f971a8569012544d528ead40a2a46",
          "message": "fix: polish coverage input detection and docs",
          "timestamp": "2026-04-16T16:01:45+02:00",
          "tree_id": "eba619400b8fafafd59679f58dc2ea6048e81c38",
          "url": "https://github.com/fallow-rs/fallow/commit/0368c055cc3f971a8569012544d528ead40a2a46"
        },
        "date": 1776348211490,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3710817,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15480,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "5c228a9bdc3ce5d2f65ec9c56cce52925a247fa9",
          "message": "fix: resolve CI regressions on main",
          "timestamp": "2026-04-16T16:36:04+02:00",
          "tree_id": "b5d83a6d772586be73e5634e7e3d5dc7e0f6a48a",
          "url": "https://github.com/fallow-rs/fallow/commit/5c228a9bdc3ce5d2f65ec9c56cce52925a247fa9"
        },
        "date": 1776350285831,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3714785,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15479,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "0936e8e8d02e6dcc211ce798f5c0f6ce2650dee6",
          "message": "fix: stabilize remaining CI checks",
          "timestamp": "2026-04-16T22:55:21+02:00",
          "tree_id": "fbca194f0b389966642deb0400fcb8e052b7fb7d",
          "url": "https://github.com/fallow-rs/fallow/commit/0936e8e8d02e6dcc211ce798f5c0f6ce2650dee6"
        },
        "date": 1776373026309,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3715793,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15475,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "23a90cc0da3a4f1bb8f850a33590ffd523819de9",
          "message": "fix: address rust 1.95 clippy regressions",
          "timestamp": "2026-04-16T23:04:42+02:00",
          "tree_id": "a674c7987d4e8a369c8b3cadb2f84d0a10b3ce79",
          "url": "https://github.com/fallow-rs/fallow/commit/23a90cc0da3a4f1bb8f850a33590ffd523819de9"
        },
        "date": 1776373588966,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3736472,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15446,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 576185,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5600,
            "unit": "allocations"
          }
        ]
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
          "id": "d6d73ac91d5af4878f7c4ec6f736e6c7b90c55a6",
          "message": "fix: address rust 1.95 ci regressions\n\n- Swap Duration::from_secs for from_mins to satisfy the new\n  clippy::duration_suboptimal_units lint in 1.95.\n- Soft-fail the Module Coupling job: cargo-modules (via cargo_metadata)\n  still passes --lockfile-path to `cargo metadata`, which 1.95 removed.\n  Drop --locked to let a fixed cargo_metadata land, gate analyze/store\n  steps on actual graph collection, and mark the job continue-on-error\n  so this metric workflow does not block main while upstream catches up.",
          "timestamp": "2026-04-16T23:30:56+02:00",
          "tree_id": "08448ef675577b0c8d40790b78febab319a777fa",
          "url": "https://github.com/fallow-rs/fallow/commit/d6d73ac91d5af4878f7c4ec6f736e6c7b90c55a6"
        },
        "date": 1776375168856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3766049,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15518,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 582941,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5626,
            "unit": "allocations"
          }
        ]
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
          "id": "33e919ac16cba068fd7151e080bb61ddfccfa1ff",
          "message": "fix(cli): address production-coverage review findings\n\nPost-v2.38.0 cleanup after the team review of the Phase 2\nproduction-coverage landing. Combines three CI-format correctness\nblockers, a batch of ship-with-notes concerns, and a follow-up on\nthe license/refresh error surface.\n\nSARIF:\n- register fallow/production-never-called,\n  fallow/production-coverage-unavailable, and fallow/production-coverage\n  in tool.driver.rules with matching explain.rs entries\n  (fullDescription + helpUri)\n- replace Debug formatting in the result message with the Display impl\n\nCodeClimate:\n- category \"ProductionCoverage\" -> \"Bug Risk\" (valid GitLab category)\n- severity \"info\" -> \"minor\" so CoverageUnavailable entries render as\n  MR inline annotations\n- replace Debug formatting in the description with the Display impl\n\nTypes + JSON:\n- add Display impls on ProductionCoverageState / Confidence / Verdict /\n  Watermark, backed by as_str() returning kebab-case strings that match\n  serde rename_all\n- #[serde(rename = \"type\")] on ProductionCoverageAction.kind so JSON\n  emits `type` natively; drop the post-hoc normalize_embedded_actions\n  rename hack\n- ProductionCoverageHotPath gains actions: Vec<Action> with\n  skip_serializing_if for future per-hot-path recommendations\n- expose pub fn build_health_json so insta snapshot tests can lock the\n  health JSON shape without stdout capture; new\n  json_health_with_production_coverage snapshot\n\nCompact + Markdown:\n- replace {:?} with {} in every production-coverage code path so the\n  compact grep contract and markdown tables use kebab-case\n- markdown paths wrapped via normalize_uri + escape_backticks (Windows\n  backslash handling)\n- prepend a blank line before ## Production Coverage so GFM parses the\n  heading correctly\n\nLicense:\n- fallow-license: LicenseClaims gains refresh_after: Option<i64> parsed\n  with #[serde(default)]; round-trip test\n- CLI license activate: write ~/.fallow/license.jwt with mode 0600 on\n  Unix; parse trialEndsAt from the backend response and surface it on\n  stdout during trial activation\n- CLI license status: append a refresh hint when refresh_after has\n  passed (proactive nudge while license is still valid)\n- http_status_message now parses the {error, message, code} envelope\n  and maps refresh/token_stale, refresh/invalid_token,\n  refresh|trial/unauthorized, and trial/rate_limit_exceeded to targeted\n  reactivation and rate-limit hints; unknown codes fall back to the\n  backend message, then the raw body\n- --trial help text mentions the 5/hr/IP rate limit and the CI\n  FALLOW_LICENSE fallback\n\nSidecar discovery:\n- FALLOW_COV_BIN set to a non-existent file now returns a helpful\n  error instead of silently falling through to auto-discovery\n\nexplain.rs:\n- add health_meta entries for the new production-coverage metrics\n  (verdict, state, confidence, invocations, percent_dead_in_production)\n- add HEALTH_RULES entries for the three new rules so --explain JSON\n  covers them and SARIF rules carry fullDescription + helpUri\n\nMCP:\n- HealthParams gains production_coverage: Option<String> and\n  min_invocations_hot: Option<u64>; threaded through build_health_args\n- check_health tool description documents the new params and notes the\n  FALLOW_TIMEOUT_SECS knob for long coverage analyses\n- schema test + arg-builder tests updated; new test asserting the\n  description mentions production_coverage\n\ndocs/output-schema.json:\n- ProductionCoverageHotPath gains actions[]\n\n.claude/rules:\n- cli-crate.md + mcp-server.md updated with new license behavior,\n  FALLOW_COV_BIN early-error, and MCP check_health params\n\n10 new unit tests (4 license error-mapping, 1 refresh_after round-trip,\n5 Display/kebab-case/action-rename). All existing tests and snapshots\nupdated. cargo check / test / clippy / fmt pass.",
          "timestamp": "2026-04-16T23:56:27+02:00",
          "tree_id": "20c4901917a37dd6d212c306f87604d6a4a1c6b8",
          "url": "https://github.com/fallow-rs/fallow/commit/33e919ac16cba068fd7151e080bb61ddfccfa1ff"
        },
        "date": 1776376979879,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3723817,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15500,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "b9e06014a170bcabfb53f78ffd88b8e5940936bc",
          "message": "fix(license): resolve user home dir on Windows via USERPROFILE\n\ndefault_license_path() and canonical_sidecar_path() both read $HOME\ndirectly and fell back to \"./.fallow/...\" when unset. On native Windows\n(cmd / PowerShell, not Git Bash) $HOME is not set; the fallback silently\nwrites the license JWT to a cwd-relative .fallow directory, which breaks\nCI runners that run fallow from a repo checkout.\n\nAdds fallow_license::user_home_dir() which checks $HOME first (Unix and\nGit Bash / MSYS / Cygwin on Windows) then %USERPROFILE% (native Windows),\nreturning None only when neither resolves to a non-empty value. Both\ncallers switch to this helper.\n\nAlso guards against the CI footgun of HOME=\"\" (exported but empty): the\nprevious code would return PathBuf::from(\"\") whose .join(\".fallow\")\nproduced \"/.fallow\" — invalid.\n\n4 unit tests cover: HOME preferred over USERPROFILE, USERPROFILE\nfallback, empty-string skip, and the no-home-at-all None case.\n\nNo behavior change on Unix. No new dependencies.",
          "timestamp": "2026-04-17T09:20:28+02:00",
          "tree_id": "5f0be0c6932ddfe92e68d7ba9202200b31b3a134",
          "url": "https://github.com/fallow-rs/fallow/commit/b9e06014a170bcabfb53f78ffd88b8e5940936bc"
        },
        "date": 1776410644216,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3730841,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15511,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "781f9c0fd1221ef7faa99c546bc320c02cb63644",
          "message": "fix(cli): support GitLab CODEOWNERS section headers and exclusions\n\nCloses #127. The CODEOWNERS parser previously treated `[Section name]`\nheaders as glob character classes, causing hard errors for `--group-by\nowner` and silent null ownership for `--ownership` on any GitLab\nproject using sections.\n\n- Recognize section headers (`[Name]`, `^[Name]`, `[Name][N]`) and skip\n  them as rules; propagate section default owners to bare pattern lines.\n- Accept GitLab 17.10+ exclusion patterns (`!path`) and clear ownership\n  for files whose last matching rule is a negation.\n- Emit a stderr warning when `--ownership` encounters an unparsable\n  CODEOWNERS instead of silently returning null ownership data.",
          "timestamp": "2026-04-17T10:46:47+02:00",
          "tree_id": "de8c3da53f739f1f4881b916258b941081fa78c7",
          "url": "https://github.com/fallow-rs/fallow/commit/781f9c0fd1221ef7faa99c546bc320c02cb63644"
        },
        "date": 1776415730138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3757217,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15503,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 582941,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5626,
            "unit": "allocations"
          }
        ]
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
          "id": "04c3c04d8b9f9f0e3992e2795a8a014f16880a8c",
          "message": "chore(cli): flip fallow-cov-protocol from path dep to crates.io 0.2\n\nNow that fallow-cov-protocol 0.2.0 is published, drop the path dep used\nduring the Wave 3 integration. The CLI ships against the identical bytes\nthe sidecar consumes.",
          "timestamp": "2026-04-17T11:18:17+02:00",
          "tree_id": "5e3a348fa860e8e0eb19369bd7536fe6122dd68b",
          "url": "https://github.com/fallow-rs/fallow/commit/04c3c04d8b9f9f0e3992e2795a8a014f16880a8c"
        },
        "date": 1776417728249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3720481,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15490,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "f1f24d2e54705609eff99ae6c1a476cd88d4ebfe",
          "message": "chore: release v2.39.0",
          "timestamp": "2026-04-17T11:24:26+02:00",
          "tree_id": "cbf0e78ae13212f38bc1015ae94f86989b9f14b7",
          "url": "https://github.com/fallow-rs/fallow/commit/f1f24d2e54705609eff99ae6c1a476cd88d4ebfe"
        },
        "date": 1776418117402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3713209,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15481,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "90869d0bc79d760fed5dbc273dcd4315414a725c",
          "message": "fix(cli): allow unnecessary_wraps on non-unix license permission stub\n\nThe #[cfg(not(unix))] stub returns Result<(), String> to mirror the Unix\nvariant's signature, but rust 1.95 clippy's unnecessary_wraps flags it.\nSuppress with an explicit reason; #[expect] would be unfulfilled on Unix.",
          "timestamp": "2026-04-17T12:50:15+02:00",
          "tree_id": "b814fa6a792b3780d698d4eaa7a9a42cb213c48a",
          "url": "https://github.com/fallow-rs/fallow/commit/90869d0bc79d760fed5dbc273dcd4315414a725c"
        },
        "date": 1776423249855,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3714473,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15482,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 578797,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
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
          "id": "c7cfff394380542f9007e4162bb7f6a6bea0a5a2",
          "message": "feat: add scoped usedClassMembers rules",
          "timestamp": "2026-04-17T13:05:15+02:00",
          "tree_id": "080fd1b8e9fcb7c514be06704e4412718a9d21da",
          "url": "https://github.com/fallow-rs/fallow/commit/c7cfff394380542f9007e4162bb7f6a6bea0a5a2"
        },
        "date": 1776424017844,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3968805,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 17603,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 581221,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "215f4d0f7c62187e81dcd035aee5d7870f7a9ad7",
          "message": "feat(cli): install real BINARY_SIGNING_VERIFY_KEY pubkey (Phase 2.5 B1)\n\nReplaces the Phase 2.5 A' placeholder (32 zero bytes) with the public\nkey matching the Ed25519 seed that was provisioned to:\n\n  - Fly secret ED25519_BINARY_SIGNING_PRIVATE_KEY on app fallow-api (staged)\n  - GitHub Actions secret ED25519_BINARY_SIGNING_PRIVATE_KEY on\n    fallow-rs/fallow-cloud (used by release-sidecar.yml to sign every\n    platform binary)\n  - GitHub Actions repo variable ED25519_BINARY_SIGNING_PUBLIC_KEY on\n    fallow-rs/fallow-cloud (used by release-sidecar.yml to self-verify\n    the signature it just produced, and by binary-signing-parity.yml\n    to assert byte-for-byte equality with THIS constant daily)\n\nThe placeholder-guard unit test is now unconditional (was #[ignore]'d);\nany future revert to [0u8; 32] would break cargo test immediately,\nnot just release-time.\n\nRotation procedure: fallow-cloud/decisions/008-sidecar-key-rotation.md.\n\nThis commit is a prerequisite for v2.40.0. The next step is to run\n/fallow-release to cut the CLI release, then tag sidecar-v0.1.0 in\nfallow-cloud which triggers the first signed sidecar publish to npm.",
          "timestamp": "2026-04-17T16:10:22+02:00",
          "tree_id": "0850292a8ae5c6b3733d789e51b994c07e37da02",
          "url": "https://github.com/fallow-rs/fallow/commit/215f4d0f7c62187e81dcd035aee5d7870f7a9ad7"
        },
        "date": 1776435282433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3988173,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 17589,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 585365,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5626,
            "unit": "allocations"
          }
        ]
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
          "id": "987d9e205a120678411973bc90280cc3dc4ffcc8",
          "message": "chore: release v2.40.0",
          "timestamp": "2026-04-17T16:24:33+02:00",
          "tree_id": "698e1d247e68134da994de20b7ff67fd6b5ae03c",
          "url": "https://github.com/fallow-rs/fallow/commit/987d9e205a120678411973bc90280cc3dc4ffcc8"
        },
        "date": 1776436244447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3962925,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 17595,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 581221,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "0d19245369b74b6b439c1e7d924bd60838bbee4f",
          "message": "feat(cli): rotate BINARY_SIGNING_VERIFY_KEY to fix sidecar-v0.1.0/0.1.1 failure\n\nThe first two sidecar release tags (sidecar-v0.1.0, sidecar-v0.1.1)\nfailed in CI because the ED25519_BINARY_SIGNING_PRIVATE_KEY GitHub\nsecret on fallow-rs/fallow-cloud was set with the wrong flag\ncombination (`gh secret set --body -`, which gh interprets as body=\nliteral '-' rather than stdin). The sign step reported 'expected\n32-byte Ed25519 seed, got 0 bytes' because base64-decoding '-'\nreturns an empty buffer.\n\nSince the previous seed was scrubbed from the shell env after write\nand fly/gh secrets are write-only, the recovery was to regenerate\nthe keypair from scratch: new seed, new pubkey, new values in\nthe fly secret, GH secret (correctly, no --body flag), and GH\nvariable. This commit updates BINARY_SIGNING_VERIFY_KEY to match.\n\nValidation: dispatched release-sidecar.yml via workflow_dispatch\nbefore committing; sign-binary.mjs produced a 64-byte signature on\nboth darwin targets against the new seed, confirming the GH secret\nis correctly set this time.\n\nRequires cutting fallow v2.40.1 so the published CLI binary embeds\nthe new pubkey. sidecar-v0.1.0 and sidecar-v0.1.1 tags will remain\nas tombstones on origin (per OIDC 'never force-push once published'\nrule, even though neither tag reached npm publish); first real\nsidecar release will be sidecar-v0.1.2 against v2.40.1.",
          "timestamp": "2026-04-17T17:38:17+02:00",
          "tree_id": "c3254e3d06604184cbca6714cbdfc1e6cd3a3228",
          "url": "https://github.com/fallow-rs/fallow/commit/0d19245369b74b6b439c1e7d924bd60838bbee4f"
        },
        "date": 1776440519217,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3950677,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 17581,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 581221,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "1419e2d3261b6864438808c237e1bdc60abd00f0",
          "message": "chore: release v2.40.1",
          "timestamp": "2026-04-17T17:45:57+02:00",
          "tree_id": "ad63d6e2c67c46dd3a079b627c124440e722004a",
          "url": "https://github.com/fallow-rs/fallow/commit/1419e2d3261b6864438808c237e1bdc60abd00f0"
        },
        "date": 1776441470207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3952837,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 17578,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 581221,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5624,
            "unit": "allocations"
          }
        ]
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
          "id": "5d433b3afe73a12bdf017b7f89cd244a5399bd93",
          "message": "fix(extract): credit super.method() calls to parent class\n\nsuper.method() calls inside a subclass body were silently dropped by\nthe visitor because visit_static_member_expression only handled\nExpression::Identifier and Expression::ThisExpression objects, not\nExpression::Super. This caused false-positive unused-class-member\nreports on base class methods only called via super.method() from\nsubclasses.\n\nTrack a class_super_stack in the visitor: push the extends identifier\non visit_class entry, pop on exit. When visiting Super.member, emit a\nMemberAccess against the super-class local identifier. The existing\nlocal_to_imported mapping in find_unused_members resolves it to the\nparent's export name, crediting the member as used.\n\nVerified against svelte (13 false positives eliminated, all with real\nsuper.X calls in source) and vite (-2). Zero new findings introduced.\n\nCloses #130",
          "timestamp": "2026-04-17T21:08:34+02:00",
          "tree_id": "ad1b2c23536e3c058c8ea690878a03af34533148",
          "url": "https://github.com/fallow-rs/fallow/commit/5d433b3afe73a12bdf017b7f89cd244a5399bd93"
        },
        "date": 1776453147645,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3972725,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 17579,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 585365,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5626,
            "unit": "allocations"
          }
        ]
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
          "id": "6f2d860b48f52d32fac48daa10354d1441b97642",
          "message": "chore: release v2.40.2",
          "timestamp": "2026-04-17T21:12:20+02:00",
          "tree_id": "4a165af62506084a5a5e9eebf61cbc1213083c27",
          "url": "https://github.com/fallow-rs/fallow/commit/6f2d860b48f52d32fac48daa10354d1441b97642"
        },
        "date": 1776453242663,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3996973,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 17618,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 585365,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5626,
            "unit": "allocations"
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
          "id": "25960fda32a6460c52f1fdd6c21d763eeec4f195",
          "message": "chore(deps): bump similar from 2.7.0 to 3.1.0 (#439)\n\nBumps [similar](https://github.com/mitsuhiko/similar) from 2.7.0 to 3.1.0.\n- [Changelog](https://github.com/mitsuhiko/similar/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/mitsuhiko/similar/compare/2.7.0...3.1.0)\n\n---\nupdated-dependencies:\n- dependency-name: similar\n  dependency-version: 3.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-20T14:29:38+01:00",
          "tree_id": "5e4bdef9c939bc84d2d0789ae62b869792b20c18",
          "url": "https://github.com/fallow-rs/fallow/commit/25960fda32a6460c52f1fdd6c21d763eeec4f195"
        },
        "date": 1779284042836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5035472,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 26660,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708035,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6792,
            "unit": "allocations"
          }
        ]
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
          "id": "a212e66d1edc5110cac8e4274626f18c20325069",
          "message": "feat(config): validate user-supplied glob patterns at load time (#486)\n\nReject absolute paths, `..` traversal segments, and invalid glob syntax in\nevery user-controlled config field that compiles to a glob or names a\nproject-relative directory. Loading fails with exit code 2 and a message\nnaming every offending field + pattern in one run.\n\nCovered glob fields: entry, ignorePatterns, dynamicallyLoaded,\nduplicates.ignore, health.ignore, overrides[].files, ignoreExports[].file,\nignoreCatalogReferences[].consumer, boundaries.zones[].patterns, plus every\nglob-bearing field on inline framework[] plugin definitions and on external\nplugin files discovered from .fallow/plugins/, root-level\nfallow-plugin-*.{toml,json,jsonc}, or the plugins: config list. Covered\ndirectory-path fields: boundaries.zones[].root and\nboundaries.zones[].autoDiscover.\n\nPreviously, invalid patterns silently no-op'd at three compile sites in\nentry_points.rs and warn-and-skipped at the other sites. The\nframework[].detection.fileExists.pattern path was the most dangerous: it\nreaches glob::glob on disk via root.join(pattern) in\ncrates/core/src/plugins/registry/helpers.rs, so a .fallowrc.json or\n.fallow/plugins/leak.json shipped via PR on a misconfigured CI runner could\nenumerate real filesystem paths outside the project root.\n\nCompile sites now trust pre-validated input via .expect(); existing\nwarn-and-skip tests rewritten as should_panic to pin the new contract.\n\nFixes #463",
          "timestamp": "2026-05-20T14:42:35+01:00",
          "tree_id": "6de2502d6766725d5ed5846c5e79e22820f16187",
          "url": "https://github.com/fallow-rs/fallow/commit/a212e66d1edc5110cac8e4274626f18c20325069"
        },
        "date": 1779284697630,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5061488,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 26685,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 706443,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6795,
            "unit": "allocations"
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
          "id": "b14fd612ce21ea710ee9c41860c24d73c14d0589",
          "message": "fix(extract): barrel re-export member propagation, source-order-independent (#427)\n\nClass-inheritance and interface-implementer credit now walks re-export\norigins, so a child class extends BaseShape (or implements RenderableShape)\nthrough a contracts/index.ts barrel correctly credits the parent's this.*\naccesses on the actual defining file. The visitor also now resolves\nexport { X }; import { X } from './a'; (export-before-import) as a\nre-export instead of a local export, matching the existing import-before-\nexport behavior. A local declaration of X in the same module shadows the\nimport and keeps the export local.\n\nCACHE_VERSION bumped 83 to 84 so warm caches get the new ModuleInfo shape\non upgrade.\n\nThanks @M-Hassan-Raza for the patch.",
          "timestamp": "2026-05-20T15:20:42+01:00",
          "tree_id": "992b899202c8d6c9d38cd81a03c384a179f20b7f",
          "url": "https://github.com/fallow-rs/fallow/commit/b14fd612ce21ea710ee9c41860c24d73c14d0589"
        },
        "date": 1779286984768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5060772,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27444,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708591,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
            "unit": "allocations"
          }
        ]
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
          "id": "e91ccd2086db43b2854ede205ba416450931ae42",
          "message": "fix(cli): redact api_key and bearer tokens from Debug + ureq errors (#487)\n\nCloudRequest, UploadInventoryArgs, and ActivateArgs previously derived\nDebug on their public api_key / raw_jwt fields. A future tracing::debug!,\ndbg!, or unwrap-on-Err with the Debug formatter would have leaked the\nfull credential to stderr (and into CI logs).\n\nureq's Display impl can include the outgoing request's headers on TLS,\nconnection, and internal failure modes. Any Authorization: Bearer <key>\nwe set on the request could bleed into stderr via emit_error.\n\nMask the secrets at the type level via manual fmt::Debug impls, and\nadd sanitize_network_error(detail: &str) in crates/cli/src/api.rs to\nreplace every Bearer <token> substring with Bearer ***. The helper is\nwired at every format!(\"{err}\") site that runs after an Authorization:\nBearer header is set: cloud_client, upload_inventory, upload_source_maps,\nlicense::activate_trial, license::refresh_active_license, and the\nci::with_rate_limit_retry path used by GitHub PR-comment posting.\n\nToken charset matches the JWT / fallow API-key alphabet\n([A-Za-z0-9_.\\-=]); non-token bytes after `Bearer ` are preserved so\nprose mentioning the literal `Bearer ` is untouched.\n\nNo real disclosure has hit production; this is a defensive lockdown.\n\nTests: api::sanitize_network_error_* (5 cases),\ncloud_request_debug_masks_api_key, upload_inventory_args_debug_masks_api_key,\nactivate_args_debug_masks_raw_jwt.\n\nFixes #476",
          "timestamp": "2026-05-20T16:21:54+01:00",
          "tree_id": "3e20c1fdb0a294c401613fc61beef1123e1c2b17",
          "url": "https://github.com/fallow-rs/fallow/commit/e91ccd2086db43b2854ede205ba416450931ae42"
        },
        "date": 1779290644491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5089580,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27479,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708035,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6792,
            "unit": "allocations"
          }
        ]
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
          "id": "54552a01e8b58619da71b45000d174ab28eafcad",
          "message": "fix(ci): sync bundled gitlab template",
          "timestamp": "2026-05-20T17:35:06+02:00",
          "tree_id": "741872199ed7811f87f2567e9277a472722e06d1",
          "url": "https://github.com/fallow-rs/fallow/commit/54552a01e8b58619da71b45000d174ab28eafcad"
        },
        "date": 1779291448904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5091508,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27475,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711736,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6830,
            "unit": "allocations"
          }
        ]
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
          "id": "a526f8ff6f50d2f5ae5da2bebbcb21ca18472606",
          "message": "fix(lsp): escape hover markdown + validate code-action line shape (#490)\n\nHover bodies now embed user-controlled identifiers via CommonMark code spans (new `format_inline_code` helper with fence escalation), and `build_remove_export_actions` validates the live declaration shape via `declares_export_name` before producing a `TextEdit`. The validator strips `export ` + declaration/modifier keywords and asserts the leading identifier equals the cached name, rejecting substring collisions, value-position collisions (cached `foo` vs live `export const bar = foo;` which would otherwise strip `export ` from `bar`), and re-export blocks. `Diagnostic.message` stays plain text per the LSP spec so VS Code's \"Fix all in file\" correlation keeps working.\n\nFixes #480",
          "timestamp": "2026-05-20T17:50:47+01:00",
          "tree_id": "8ef9e5f17c20ec22f51184b7382f8f3e30db50aa",
          "url": "https://github.com/fallow-rs/fallow/commit/a526f8ff6f50d2f5ae5da2bebbcb21ca18472606"
        },
        "date": 1779296014548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5057644,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27439,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708035,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6792,
            "unit": "allocations"
          }
        ]
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
          "id": "4ae297e6a6cc9f8cb370f44a1548aec9f33cc53e",
          "message": "fix(audit): harden worktree lifecycle against panic, Windows orphans, parallel races (#489)\n\nThree structural fragilities in fallow audit's git worktree lifecycle:\n\n1. WorktreeCleanupGuard rolls back both git's `.git/worktrees/<name>`\n   registration and the on-disk directory on any early-return between\n   `git worktree add` success and `BaseWorktree` struct construction.\n   `defuse(&mut self)` is idempotent and consumes no return value.\n\n2. `process_is_alive` on Windows was a `cfg(not(unix)) true` stub; orphan\n   sweep never cleaned worktrees owned by dead PIDs. Real Windows impl\n   added via target-gated `windows-sys 0.61`: `OpenProcess` +\n   `WaitForSingleObject(handle, 0) != WAIT_OBJECT_0`, with\n   `ProcessHandle(HANDLE)` RAII for `CloseHandle`.\n   `ERROR_ACCESS_DENIED` is treated as alive (matches Unix `kill -0`\n   EPERM); `ERROR_INVALID_PARAMETER` is dead. `WaitForSingleObject` is\n   preferred over `GetExitCodeProcess + STILL_ACTIVE` because 259 is a\n   valid u32 exit code.\n\n3. `BaseWorktree::reuse_or_create` now takes a kernel-level advisory\n   lock on `<reusable_audit_worktree_path>.lock` via\n   `std::fs::File::try_lock` (stable since Rust 1.89, MSRV is 1.92).\n   `flock(2)` on Unix, `LockFileEx` on Windows. Concurrent `fallow\n   audit` runs against the same `base_sha` no longer race on\n   `git worktree add` against the same cached path; the loser falls\n   through to the non-reusable PID-named worktree.\n\n`remove_audit_worktree` now emits `tracing::warn!` only when\n`git worktree remove --force` returns non-zero AND the on-disk dir\nsurvives, so leaked git registrations are observable under\n`RUST_LOG=warn` rather than silent.\n\nFive new tests cover guard cleanup, guard defuse, dead-PID sweep,\nlive-PID sweep, and lock exclusion. The lock test exercises the\nin-process exclusion path only (same-process re-acquire is not\nasserted because macOS `flock(2)` can keep the lock visible to other\nopen file descriptions in the same process for a brief window after\nclose; cross-process release is exercised by every real audit run).\n\nNo new third-party deps; `windows-sys` is target-gated to `cfg(windows)`.\n\nFixes #472",
          "timestamp": "2026-05-20T18:56:40+01:00",
          "tree_id": "01e57d04c0ec892295212239fafc123112ca0f1b",
          "url": "https://github.com/fallow-rs/fallow/commit/4ae297e6a6cc9f8cb370f44a1548aec9f33cc53e"
        },
        "date": 1779299929426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5088540,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27470,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 706459,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
            "unit": "allocations"
          }
        ]
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
          "id": "1ecdecf68222686f7a08c592cdf69134929b3207",
          "message": "feat(unused-class-members): add ignoreDecorators config opt-out (#508)\n\nCloses #471\n\nAdds FallowConfig.ignoreDecorators so users can opt utility decorators (Playwright @step, internal @measure/@log) out of the default skip-all-decorated behavior. Methods decorated only with listed names are checked for usage like undecorated methods; methods with any non-listed decorator stay skipped, preserving NestJS / Angular / TypeORM defaults. Default empty list = no behavior change.\n\nDual matching: dotted entries (\"decorators.log\") match the full path; bare entries (\"step\" or \"decorators\") match the leftmost segment. Both \"@step\" and \"step\" round-trip equivalently. Unmatched entries emit a one-time warning at end of run via a pre-pass over all class members' decorator names (so the warning does not falsely fire when the decorator only appears on used members).\n\nCACHE_VERSION bumped 84 -> 85 so warm caches invalidate on upgrade.\n\nThanks @vethman for the report.",
          "timestamp": "2026-05-20T20:02:27+01:00",
          "tree_id": "a84908d9c7171cd34e983fb7d4e51306e0939f81",
          "url": "https://github.com/fallow-rs/fallow/commit/1ecdecf68222686f7a08c592cdf69134929b3207"
        },
        "date": 1779303882242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5087028,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27469,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708299,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6795,
            "unit": "allocations"
          }
        ]
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
          "id": "be4f7e30099dc104dd57eb09400229b5e2d71022",
          "message": "fix(config): warn on misspelled rule names with Levenshtein suggestion (#510)\n\n* fix(config): warn on misspelled rule names with Levenshtein suggestion\n\nPhase 1 of a staged migration toward `#[serde(deny_unknown_fields)]` on\n`RulesConfig` / `PartialRulesConfig`. Today a typo in a rule name in\n`.fallowrc.json` is silently dropped, and the affected rule falls back\nto its hardcoded default severity, so the user's intent is lost without\nany signal.\n\n`crates/config/src/config/rules.rs` now ships a canonical\n`KNOWN_RULE_NAMES` list covering every canonical kebab-case rule name\nplus every documented `#[serde(alias)]` form, a small Levenshtein\nhelper, and `find_unknown_rule_keys(value, context)` returning a typed\n`Vec<UnknownRuleKey>` so tests can assert against the data without\nsubscribing to tracing output.\n\n`FallowConfig::load` walks the merged config value after `extends`\nresolution and emits one `tracing::warn!` per unknown key under `rules`\nor `overrides[i].rules`. Warnings are deduped process-wide via a\n`OnceLock<Mutex<FxHashSet<_>>>` keyed on `\"{context}::{key}\"`, so a\ncombined-mode run (`check` + `dupes` + `health` through one config\nload path) emits at most one warning per (context, key) pair instead\nof three.\n\nThree drift guards: a count assertion, a serialized-default walk that\nasserts every canonical name is in the list, and a per-entry roundtrip\nthrough `PartialRulesConfig` that catches stale or missing aliases.\n\nA wiring regression test asserts `FallowConfig::load` actually invokes\nthe warn pass on the merged value by introspecting a process-wide\ncounter that increments on every emitted warning; verified to fail\nwhen the wiring line is removed from `load`.\n\nPhase 2 (a future minor release) will flip `RulesConfig` and\n`PartialRulesConfig` to `#[serde(deny_unknown_fields)]` and turn the\nwarning into a hard config-load error. `_typos.toml` exempts the two\nintentional misspellings used in the new test fixtures (`unsued`,\n`dependnecy`).\n\nCloses #467\n\n* fix(config): tighten dedupe + thread-local wiring + source-level alias drift guard\n\nThree corrections raised by parallel review on the previous commit:\n\n1. Dedupe key now includes the config file path: two different config\n   files with the same typo each warn once, instead of the second one\n   being silenced by the process-wide cache. The warning text now also\n   names the config path so the user knows which file to fix.\n\n2. The wiring regression test was switched from a process-wide atomic\n   counter with an exact `+1` assertion to a thread-local capture\n   buffer. The previous shape was a CI flake risk under parallel test\n   execution: any other `FallowConfig::load` racing into the warn path\n   could increment the same counter between the test's `before` /\n   `after` reads. The thread-local buffer is installed for the duration\n   of the test's `body` closure and discarded after, so parallel\n   threads cannot collide.\n\n3. A source-level drift guard reads the `rules.rs` source at test\n   time, extracts every `alias = \"<kebab>\"` literal, and asserts each\n   one is in `KNOWN_RULE_NAMES`. The existing count and roundtrip\n   guards already caught new-field and stale-entry drift; this third\n   guard catches the harder case where a contributor adds a NEW alias\n   to an existing field but forgets to update `KNOWN_RULE_NAMES`.\n   Verified by mental-revert: removing an entry from the const fails\n   the test with `serde alias 'X' is in rules.rs source but missing\n   from KNOWN_RULE_NAMES`.\n\nRefs #467",
          "timestamp": "2026-05-20T20:08:57+01:00",
          "tree_id": "1c578c4c73e8866ab3705d9bdc8c52f54844c1de",
          "url": "https://github.com/fallow-rs/fallow/commit/be4f7e30099dc104dd57eb09400229b5e2d71022"
        },
        "date": 1779304320713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5138268,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27504,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 664243,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6292,
            "unit": "allocations"
          }
        ]
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
          "id": "6bfda71d4bf4c04dc5b02ea7c88f273bbb14cb13",
          "message": "fix(unused-class-members): credit Playwright POM methods via helper-function fixtures\n\nThe #268 fix correlated `const test = base.extend<MyFixtures>(...)` definitions\nwith their callback-side member uses, but the helper form (`export function\nappTest() { return base.extend<MyFixtures>(...); }` consumed as `appTest()(...)`)\nreintroduced the false positive on nested POM methods. Three declarator shapes\nnow capture the helper (function declaration, arrow expression, function\nexpression) when the body is a single `return <call>` statement; a finalize-time\npass gates the `base` local on `@playwright/test`'s `test` named import and\nemits the same def-sentinel `MemberAccess` the analyzer already correlates with\nuse sentinels. Same-file helper chains propagate via a capped fixed-point pass\nover `(caller, callee)` aliases. The use-side `appTest()(...)` form is\nrecognised by extending `playwright_test_callee_name` with a `CallExpression`\nrecursion arm. Cross-file helper chains are out of scope.\n\nBumps `CACHE_VERSION` to 86 so warm caches refresh on upgrade.\n\nFixes #491.",
          "timestamp": "2026-05-20T20:56:00+01:00",
          "tree_id": "9bd374296be7afbf2ac3acc6ae50499efaec28fa",
          "url": "https://github.com/fallow-rs/fallow/commit/6bfda71d4bf4c04dc5b02ea7c88f273bbb14cb13"
        },
        "date": 1779307127628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5076924,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27469,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 706459,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
            "unit": "allocations"
          }
        ]
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
          "id": "a55c1b180a88e4afa4976bfbbd861c48f3af687d",
          "message": "fix(plugins): surface silent-fail diagnostics for collisions, enabler typos, invalid regex\n\n* fix(plugins): surface silent-fail diagnostics for collisions, enabler typos, invalid regex\n\nThree plugin-system silent-fail patterns now emit `tracing::warn!` at config\nload time instead of letting users hit confusing analysis output:\n\n1. Two plugins (built-in or external) declaring an identical config_patterns\n   string warn once per (pattern, owners) pair and document the\n   registration-order precedence rule. Sub-glob overlap is intentionally out\n   of scope; only byte-identical patterns collide.\n\n2. External plugin enablers that do not match any project dependency but\n   have a Levenshtein-close dep name warn with \"did you mean '<closest>'?\".\n   Plugins with a `detection` block or empty enablers are skipped; no warn\n   fires when no close dep exists, so plugins that legitimately do not\n   apply stay silent.\n\n3. Invalid regexes in PathRule.exclude_regexes / exclude_segment_regexes\n   (extracted by built-in plugins from user code) are validated eagerly\n   inside process_config_result; invalid patterns are dropped after a warn\n   that names the plugin and the source config file.\n\nLevenshtein helper lifted out of crates/config/src/config/rules.rs into a\nshared crates/config/src/levenshtein.rs module so both the rule-name path\n(closest_known_rule_name from #467) and the new enabler-typo path share one\ndistance/length policy.\n\nAll three diagnostics dedupe process-wide via OnceLock<Mutex<FxHashSet>>\nso combined-mode (check + dupes + health) emits at most one warning per\n(kind, key) pair. Tracing-warn matches #467 / #510's staged-migration\nprecedent: no exit non-zero, no new CLI flag.\n\nTested via 9 new unit tests in crates/core/src/plugins/registry/tests.rs.\n\nFixes #479\n\n* fix(plugins): preserve registration order in collision warning; add staged-migration notice\n\nPanel review of #479 flagged two refinements over the initial commit:\n\n1. detect_pattern_collisions previously sorted owners alphabetically, so\n   the warning's 'owners[0] runs first (registration order)' could disagree\n   with reality. Switch the per-pattern owner store to an insertion-ordered\n   Vec (with a sibling FxHashSet for self-dedup) so the winner field is\n   actually correct.\n\n2. All three diagnostics (collision, enabler typo, invalid regex) now end\n   with 'A future release may reject ...' so users see the staged-migration\n   intent on first encounter, matching #510's 'A future release will reject\n   unknown rule names' precedent. The collision message also now says\n   'identical pattern' explicitly so the byte-equal scope is visible from\n   the warning itself.\n\nCHANGELOG entry updated to document the byte-identical scope and the\nstaged-migration design.\n\nRefs #479",
          "timestamp": "2026-05-20T21:14:12+01:00",
          "tree_id": "60d8ea0e30e71a219fdec5dd3eee2b9975cf4e40",
          "url": "https://github.com/fallow-rs/fallow/commit/a55c1b180a88e4afa4976bfbbd861c48f3af687d"
        },
        "date": 1779308213755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5069892,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27452,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 706459,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
            "unit": "allocations"
          }
        ]
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
          "id": "92fc81875c763396c746ffa9573b79fdbafc357e",
          "message": "fix(boundaries): exit 2 on unknown zone references and redundant root prefixes\n\n* fix(boundaries): exit 2 on unknown zone references and redundant root prefixes\n\nBoundary validation in resolution.rs previously emitted `tracing::error!`\nand continued. A typo'd `from`/`allow`/`allowTypeOnly` zone name or a stale\nreference from a renamed zone left the rule active with a phantom target,\nand `is_import_allowed` returned `false` for every import to the\nnon-existent zone. Users saw a flood of false-positive boundary violations\n(\"ui cannot import from typo-zone\") with no signal that the config itself\nwas the problem; the `tracing::error!` was invisible in normal operation.\n\nThis change moves both `validate_zone_references` and\n`validate_root_prefixes` from gentle-fail into a hard config-load error\nreturned through `FallowConfig::validate_resolved_boundaries(root: &Path)`.\nValidation runs AFTER preset expansion and `expand_auto_discover`, so\nBulletproof's authored rule referencing the logical `features` group still\nloads cleanly once children are discovered. Every offending tuple lands in\none rendered diagnostic so users fix all entries in one pass.\n\nTwo wiring sites cover all real-world load paths:\n- `runtime_support::load_config_for_analysis` (CLI: check, dupes, health,\n  watch, audit, combined; renders `invalid boundary configuration:\\n  - ...`\n  via the existing `emit_error` ladder, exit code 2).\n- `core::lib::config_for_project` (LSP server, programmatic embedders via\n  `fallow_core::config_for_project`; surfaces as `FallowError::config`).\n\n`validate_zone_references` returns `Vec<UnknownZoneRef { rule_index, kind,\nzone_name }>` instead of `Vec<(usize, &str)>` so the diagnostic surfaces\nWHICH field (`from`/`allow`/`allowTypeOnly`) carries the typo.\n`validate_root_prefixes` returns `Vec<RedundantRootPrefix { zone_name,\npattern, root }>` instead of `Vec<String>`; the `Display` impl on\n`ZoneValidationError::RedundantRootPrefix` preserves the legacy\n`FALLOW-BOUNDARY-ROOT-REDUNDANT-PREFIX` tag so existing CI grep recipes\ncontinue to work. The `tracing::error!` calls in `resolution.rs::resolve()`\nare dropped; resolve() now relies on callers having validated upstream.\n\nTests:\n- 5 unit tests in `crates/config/src/config/parsing.rs` covering\n  happy-path, unknown-zone-aggregation, redundant-root-prefix, mixed,\n  Bulletproof-preset expansion.\n- 3 integration tests in `crates/cli/tests/exit_code_tests.rs` covering\n  the CLI exit-2 path end-to-end with stderr substring assertions.\n\nThe invalid-glob-pattern half of #468 was already closed by #486\n(`validate_user_globs` covering `boundaries.zones[].{patterns, root,\nautoDiscover}`); this PR completes the issue.\n\nFixes #468\nRefs #486, #499\n\n* fix(boundaries): wire #468 validation into `fallow config` and respect --format on `fallow list`\n\nReview of e4925042 surfaced two wiring gaps in the lesser-trafficked CLI\nsubcommands that bypassed the new boundary-validation contract:\n\n1. `fallow config` (config.rs) called `FallowConfig::load` /\n   `find_and_load` directly, never the new\n   `validate_resolved_boundaries`. A config with `allow: [\"typo-zone\"]`\n   exited 0 from `fallow config` while `fallow check` (correctly) exited 2.\n   Users hitting `fallow config` for debugging would see a false \"loaded\n   fine\" view. Validation now runs after the load, mirroring the analysis\n   path's contract.\n\n2. `fallow list` (list.rs) passed `OutputFormat::Human` to `load_config`\n   instead of threading `opts.output` through. `fallow list --boundaries\n   --format json` correctly exited 2 on bad boundary config, but the error\n   surfaced as human text on stderr instead of the structured\n   `{\"error\": true, \"message\": ..., \"exit_code\": 2}` JSON envelope on\n   stdout. Agents and CI consumers expecting the JSON contract saw raw\n   text; trivial one-line fix threads the user's actual format through.\n\n`run_config` gained an `output: OutputFormat` parameter (call site in\nmain.rs updated, six existing unit tests + one new one cover the new\nsignature). `run_list` no change to its public surface; the hardcoded\n`OutputFormat::Human` becomes `opts.output`.\n\nTests:\n- `fallow_config_subcommand_rejects_unknown_boundary_zone` (integration):\n  verifies exit 2 on the config subcommand human path.\n- `fallow_config_subcommand_json_format_emits_structured_error_envelope`\n  (integration): asserts the JSON envelope shape on stdout for\n  `fallow --format json config`.\n- `fallow_list_boundaries_json_format_emits_structured_error_envelope`\n  (integration): same shape assertion for `fallow --format json list\n  --boundaries`.\n- `run_config_rejects_unknown_boundary_zone_reference` (unit): in-process\n  exit-code check via `tempfile::tempdir`.\n\nRefs #468",
          "timestamp": "2026-05-21T08:39:35+01:00",
          "tree_id": "c7d48ae17d813d6f9588c6792e5199b44e08e134",
          "url": "https://github.com/fallow-rs/fallow/commit/92fc81875c763396c746ffa9573b79fdbafc357e"
        },
        "date": 1779349305143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5091572,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27480,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 706459,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
            "unit": "allocations"
          }
        ]
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
          "id": "7bf1fa2e4bfbb5e7368f073353aaa2bfc08a7996",
          "message": "fix(action,ci): surface gh api + pagination failures instead of silent degradation\n\nSix call sites in action/scripts/{analyze,review,comment}.sh and\nci/scripts/{review,comment}.sh previously masked gh api / curl_paginate\nfailures behind `2>/dev/null || true` and `... || echo '[]'` patterns.\nA transient 5xx during the changed-files lookup made the action run\nunscoped (every finding posted, not just findings on PR-changed lines);\na 502 on page 2 of an existing-comment dedup lookup made the action\npost N duplicate review threads on every retry.\n\nEach site now consumes the helper exit code via a two-step capture and\nemits structured diagnostics:\n\n- changed-files lookup failure (analyze.sh) emits a ::warning:: naming the\n  API failure mode and writes changed_files_unavailable=true to\n  GITHUB_OUTPUT; initialized to false unconditionally so downstream gates\n  always see a definitive value.\n\n- Multi-comment fingerprint dedup failure (review.sh) aborts the inline\n  review POST because N duplicate threads is materially worse than no\n  inline review. Exit policy splits on failure class: stderr matching a\n  permanent 4xx pattern (excluding 429, which is retry-eligible)\n  escalates to exit 1 for loud CI failure; 5xx / 429 / network errors\n  fall through to exit 0 so transient blips do not break PRs.\n\n- Summary-only dedup failure (comment.sh, review.sh summary branch)\n  posts a fresh summary anyway because a duplicate summary is collapsible\n  while a missing summary is silently broken. Two distinct markers\n  capture this: post_skipped_reason flips only on the multi-comment\n  abort, dedup_lookup_failed flips on any lookup failure including the\n  post-anyway paths.\n\n- GitLab template writes parallel sidecar artifacts (fallow-skip-reason.txt,\n  fallow-dedup-lookup-failed.txt) declared in artifacts: paths: so\n  downstream jobs can gate on them. review.sh only initializes a marker\n  when the file does not already exist, so comment.sh's prior `true`\n  value (when both steps run in sequence) is preserved rather than\n  clobbered. gitlab-ci.yml's existing `bash review.sh || echo \"WARNING:\n  ...\"` swallows our exit 1, so the 4xx escalation is advisory for the\n  default template; operators who want CI-fatal behavior can drop the\n  `|| echo` or gate on the sidecars.\n\n- action.yml exposes three new composite outputs: changed-files-unavailable,\n  post-skipped-reason, dedup-lookup-failed. The composite expression for\n  dedup-lookup-failed evaluates each step output's string value\n  explicitly (`== 'true'`) rather than relying on truthiness, since\n  non-empty strings (including the literal \"false\") evaluate truthy in\n  GitHub Actions expressions. Step IDs added to Post PR comment + Post\n  review comments.\n\n- mktemp files cleaned up via single `trap '... EXIT'` per script.\n\nThe bundled `fallow ci-template gitlab` payload at crates/cli/templates/ci/\nis kept byte-equivalent to the workspace sources via the existing\n`bundled_templates_match_workspace_sources` drift gate.\n\nRegression tests inject synthetic 5xx, 4xx, and retry-exhausted 429\nfailures on every affected call site and assert marker contracts plus\nabsence of duplicate POSTs. Added test covers the comment-before-review\nmarker preservation contract on the GitLab side.\n\nCloses #470",
          "timestamp": "2026-05-21T09:15:20+01:00",
          "tree_id": "93b7bd0b4d1e87ebde90078ffeecbd4e18185c17",
          "url": "https://github.com/fallow-rs/fallow/commit/7bf1fa2e4bfbb5e7368f073353aaa2bfc08a7996"
        },
        "date": 1779351554260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5107236,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27499,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708599,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6797,
            "unit": "allocations"
          }
        ]
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
          "id": "b099e2f6bca12ca9ea7b2d1876f5442de7461065",
          "message": "fix(graph): harden re-export chain resolution against silent truncation\n\n* fix(graph): harden re-export chain resolution against silent truncation\n\nTwo structural silent-fail bugs in Phase 4 re-export chain resolution:\n\n1. The fixpoint loop in resolve_re_export_chains capped iterations at 20\n   and emitted only a tracing::warn! when the cap was hit. Barrel chains\n   deeper than 20 hops silently under-credited references on the leaf.\n   The cap is now removed; the fixpoint terminates naturally because\n   each propagation helper adds references through an FxHashSet\n   dedup-by-from_file check, bounding monotone growth by |files| *\n   |exports|. A defensive safety backstop bounded by re_export_info.len()\n   + 1 iterations stays in place and logs tracing::error! if a future\n   regression violates monotonicity.\n\n2. Re-export cycles (a.ts: export * from './b' paired with\n   b.ts: export * from './a') and barrels that re-export from\n   themselves were silently absorbed by the iteration cap. They are now\n   detected up front via iterative Tarjan SCC over the (barrel, source)\n   edge subgraph and surfaced as one tracing::warn! per cycle or\n   self-loop with the member file paths.\n\n3. propagate_star_re_export's synthetic bridge stub hardcoded\n   is_type_only: false, so multi-hop export type * chains lost the\n   type-only flag at every synthesised hop. The stub now inherits\n   is_type_only from the triggering re-export edge. When both a\n   type-only and a value star edge reach the same source for the same\n   name, a synthetic_stubs side set tracks the stub identity so the\n   value edge can downgrade is_type_only: false. Real export type Foo\n   declarations on the source are never in the set and stay type-only.\n\n6 new regression tests cover: 21-hop and 25-hop chains (just over and\nwell past the old cap), a 3-node cycle non-blocking unrelated\npropagation, type-only star chains via both entry-point and named\nconsumer paths, contradictory type-only/value paths resolving to value,\nand self-re-export not panicking.\n\nNo CACHE_VERSION bump (no extract-layer change). No CLI surface, JSON\nshape, MCP tool, or companion-repo change. Surfacing the cycle\ndiagnostic as a structured AnalysisResults finding is tracked\nseparately as a follow-up.\n\nFixes #442\n\n* docs(changelog): link issue #515 for re-export cycle surfacing follow-up\n\n* docs(changelog): merge re-export bullet into existing Unreleased Fixed section\n\nThe post-rebase tree had two ### Fixed sections under [Unreleased]: a new\none above ### Added carrying the #442 bullet, and the pre-existing one\nbeneath ### Changed carrying #491/#479/#467/#480/#472/#427/#476. Keep-a-\nChangelog prescribes one subsection per category, so merge the new bullet\ninto the existing ### Fixed section.\n\n* test(graph): assert exact tracing::warn! payload on re-export cycles and self-loops\n\nAdds tracing-subscriber as a dev-dep on fallow-graph plus a scoped\nMakeWriter helper that captures warn output inside a single test block\nvia tracing::subscriber::with_default. Two new tests cover the gap that\nPR #516's review flagged as non-blocking: the existing structural tests\nprove cycles terminate without panic but never read the warn message,\nso a regression to a context-free \"cycle detected\" string would pass\nsilently.\n\n- re_export_cycle_warn_payload_lists_member_paths: 3-node cycle,\n  asserts the warn header, every member path, and the cycle_size=3\n  field appear in the captured output.\n- self_re_export_warn_payload_names_file: self-loop, asserts the warn\n  header and the offending file path appear in the captured output.\n\nThe capture helper is scoped to the test block (with_default rather\nthan try_init) so it never leaks across parallel test threads.\n\n* chore(graph): sync Cargo.lock for tracing-subscriber dev-dep",
          "timestamp": "2026-05-21T09:22:17+01:00",
          "tree_id": "b16f8fc165ef649ec790f2ce193a0a0eb8cb62f5",
          "url": "https://github.com/fallow-rs/fallow/commit/b099e2f6bca12ca9ea7b2d1876f5442de7461065"
        },
        "date": 1779351908789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5097012,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27457,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 710603,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6798,
            "unit": "allocations"
          }
        ]
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
          "id": "4394edac78a1ad60bb94ee1ee44f78073e68451e",
          "message": "fix(regression): exit 2 on schema_version mismatch with regenerate hint\n\n`load_regression_baseline` in `crates/cli/src/regression/baseline.rs`\ndeserialized via `serde_json::from_str` without validating `schema_version`.\n`CheckCounts` carries `#[serde(default)]` on every field, so a baseline\nwritten under a different `REGRESSION_SCHEMA_VERSION` silently loaded with\nmissing fields defaulting to zero, masking real regressions and letting\nCI gates pass on a structurally invalid baseline.\n\nThe loader now validates `baseline.schema_version == REGRESSION_SCHEMA_VERSION`\nimmediately after parse, with two helpers (`format_schema_mismatch_error`,\n`format_missing_schema_version_error`) producing actionable messages that\nname the path, expected and actual versions, the writer fallow version,\nand a copy-pasteable `fallow check --save-regression-baseline <path>`\nregenerate command. `schema_version: 0` is special-cased as \"predates\nschema versioning\"; baselines missing the field entirely get the same\nhint instead of raw serde \"missing field\" noise. The pre-existing\nNotFound, read-error, parse-error paths plus the new mismatch path all\nroute through `emit_error`, so `--format json` CI consumers receive the\nstructured `{\"error\": true, \"message\": \"...\", \"exit_code\": 2}` envelope\non stdout instead of human text on stderr.\n\n`RegressionOpts` gains an `output: OutputFormat` field threaded through\n`compare_check_regression` into `load_regression_baseline`. The single-caller\n`build_regression_opts` helper is inlined into `DispatchContext::regression_opts`\nto keep the constructor under clippy's `too_many_arguments` limit. Existing\nbaselines with `schema_version: 1` continue to load unchanged; future\nschema bumps require regenerating.\n\nFixes #451.",
          "timestamp": "2026-05-21T09:34:37+01:00",
          "tree_id": "8d1793f02d64e543c622fb77a060716ab58e695e",
          "url": "https://github.com/fallow-rs/fallow/commit/4394edac78a1ad60bb94ee1ee44f78073e68451e"
        },
        "date": 1779352649557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5083868,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27443,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 712743,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6799,
            "unit": "allocations"
          }
        ]
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
          "id": "eae99cc6d6592d55bcac3a5ea97665cb3a0ed01d",
          "message": "fix(suppress): surface unknown issue-kind tokens as stale findings\n\nSuppression markers with a typo or an obsolete issue-kind name no longer\nsilently discard the entire line. `// fallow-ignore-next-line\nunused-export, complexity-typo` now suppresses `unused-export` normally\nand surfaces `complexity-typo` as a `stale-suppression` finding so the\nuser sees the typo instead of losing their suppression in silence.\n\n`parse_issue_kind_list` in `crates/extract/src/suppress.rs` switches from\nreturning `Option<Vec<IssueKind>>` to `(Vec<IssueKind>, Vec<String>)`,\naccumulating known kinds alongside unknown tokens. The new\n`UnknownSuppressionKind` type on `ModuleInfo` carries each token through\nthe parser, cache, and graph layers; `SuppressionContext::find_stale`\nemits one extra `StaleSuppression` per unknown token, reusing\n`SuppressionOrigin::Comment` with a new additive `kind_known: bool` wire\nfield so JSON, MCP, and CI consumers can distinguish unknown-kind tokens\nfrom stale-but-known kinds without parsing prose. The\n`StaleSuppression::explanation()` and `display_message()` helpers branch\non `kind_known` to render `'<token>' is not a recognized fallow issue\nkind. Did you mean '<closest>'? Other tokens on this line still apply.`\nwith a Levenshtein hint when an existing kind is within edit distance 2;\nSARIF, CodeClimate, and compact pick up the same actionable copy via the\nnew helper.\n\nCACHE_VERSION bumps 86 to 87 so warm `.fallow/cache` directories pick up\nthe new field on upgrade. The bundled GitHub Action annotation and\nsummary jq scripts plus the GitLab CI summary jq branch on\n`origin.kind_known == false` to render the typo-fix copy instead of \"no\nlonger matches any active issue.\" `ModuleInfo` size assertion bumps 472\nto 496 bytes for the new `Vec<UnknownSuppressionKind>` field. The\n`docs/output-schema.json` regenerates with the additive optional\n`kind_known` (non-required), and the generated TypeScript bindings in\n`editors/vscode/src/generated/` and `npm/fallow/types/` flow through.\n\nFixes #449.",
          "timestamp": "2026-05-21T09:48:33+01:00",
          "tree_id": "dca450d6eecafd0ba5583259d5a1d6d15c313da6",
          "url": "https://github.com/fallow-rs/fallow/commit/eae99cc6d6592d55bcac3a5ea97665cb3a0ed01d"
        },
        "date": 1779353461491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5069524,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27449,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708259,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6790,
            "unit": "allocations"
          }
        ]
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
          "id": "3b2733f372944ecb2d88b51c56e277efb202bd24",
          "message": "fix(suppress): skip stale emission when rule severity is off\n\nSuppression markers for a rule currently disabled (rules.<kind> == \"off\",\nincluding per-file overrides.rules) no longer surface as stale-suppression\nfindings. SuppressionContext::find_stale resolves rules once per file via\nResolvedConfig::resolve_rules_for_path and skips emission when the\nsuppression's target kind has severity Off. The marker documents\nintentional dormancy and becomes valid again when the rule is re-enabled.\n\nBlanket markers without a kind continue to surface as stale when nothing\nmatches, since they are not anchored to any specific dormant rule.\n\nA new exhaustive severity_for_kind helper in fallow-core maps every\nIssueKind to its corresponding RulesConfig field, so a future IssueKind\nvariant triggers a compile error here.\n\nFixes #482",
          "timestamp": "2026-05-21T10:41:36+01:00",
          "tree_id": "4be6dbdf1d6290d05e4b22d872c64bf9cd1dad1c",
          "url": "https://github.com/fallow-rs/fallow/commit/3b2733f372944ecb2d88b51c56e277efb202bd24"
        },
        "date": 1779356727714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5091044,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27467,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711059,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
            "unit": "allocations"
          }
        ]
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
          "id": "6fd51d1802ec2c1e78944d839f761e1b2bdba63c",
          "message": "test(stale-suppressions): relax exact-count assertion to lower bound\n\n`total_stale_suppressions_count` asserted `len() == 4` against the\nstale-suppressions fixture. Future additions to the fixture (or sibling\ntests that grow the fixture's stale surface) would break this test\nwithout surfacing a real regression. Each of the 4 documented findings\nis already covered by a dedicated presence assertion above, so the\ncount test's safety net is \"no expected finding is silently dropped\"\nwhich `>=` preserves.\n\nRelax the assertion to `>= 4` and update the rationale comment.",
          "timestamp": "2026-05-21T10:47:16+01:00",
          "tree_id": "9289079f54eb3cef4f1602224889c6a8892030e5",
          "url": "https://github.com/fallow-rs/fallow/commit/6fd51d1802ec2c1e78944d839f761e1b2bdba63c"
        },
        "date": 1779356983636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5077844,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27447,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 662659,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6292,
            "unit": "allocations"
          }
        ]
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
          "id": "c224787ed950fa22c5d039f6f38358339e8b946f",
          "message": "fix(fix): refuse stale writes, batch commits atomically, compose cross-fixer edits\n\n`fallow fix` re-ran analysis in-process and then wrote each per-file rewrite\nvia a standalone `atomic_write`. If a parallel editor save, CI rebase, or\nother tool mutated a target file between the analysis read and the\nfix-time write, the line offsets computed during analysis landed on the\nwrong bytes and silently corrupted the file. Per-file writes also ran\nunbatched, so an OOM or transient I/O failure mid-run left the project in\na half-applied state where the surviving files' offsets no longer matched\nthe original analysis.\n\nCapture every parsed source file's xxh3 content hash during analysis (the\nsame value the extract cache already computes) and thread the\n`CapturedHashes` map through each fixer. Per-file entry recomputes the\nhash and emits a `skipped: true` record with `skip_reason: \"content_changed\"`\non mismatch; the run exits 2 so CI surfaces the mismatch instead of\ntreating a partial run as a clean no-op. The new `FixPlan` accumulator in\n`crates/cli/src/fix/plan.rs` stages every rewrite into a sibling\n`NamedTempFile`; the orchestrator commits the plan in one batch after all\nfixers run. Stage failure leaves every target file at its original\ncontent; rename failure mid-batch is reported per-path.\n\nTwo structural invariants the pre-refactor `atomic_write` provided were\npreserved explicitly: (1) the second fixer reads its source bytes from\nthe in-flight plan when the path is already staged, so cross-fixer\nsame-file edits compose into one coherent rewrite instead of overwriting\nvia last-write-wins; (2) the commit canonicalizes through symlinks so the\nfinal rename writes to the real target instead of replacing the link\nitself with a regular file.\n\nJSON envelope gains a top-level `skipped_content_changed: number` (always\npresent) and a new per-file entry shape\n`{type: \"skipped\", path: ..., skipped: true, skip_reason: \"content_changed\"}`\nin `fixes[]`. The existing `skipped` counter keeps its prior semantics\n(catalog / YAML guard skips only). `action/jq/summary-fix.jq` counts\nsuccessful fix attempts in its headline and surfaces\n`skipped_content_changed` in the prose. MCP `fix_preview` / `fix_apply`\ndescriptions and the VS Code `FallowFixResult` type document the new\nfield and skip reason.\n\nFive new regression tests cover round-trip clearing of targeted findings,\nbatch abort on a read-only target directory, the envelope-field contract,\ncross-fixer composition, and symlink follow-through.\n\nFixes #454.",
          "timestamp": "2026-05-21T10:59:03+01:00",
          "tree_id": "d682cc7ef0d9a814b4a6703777cad403627d6062",
          "url": "https://github.com/fallow-rs/fallow/commit/c224787ed950fa22c5d039f6f38358339e8b946f"
        },
        "date": 1779357673692,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5072476,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27535,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711075,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6797,
            "unit": "allocations"
          }
        ]
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
          "id": "c53b74337579d8c5bb7c1ba73984d2de92285d5d",
          "message": "fix(config): preserve target file mode in atomic_write and FixPlan commit\n\n`NamedTempFile` creates the temp with mode `0600` by default. Both the\npre-existing `fallow_config::atomic_write` and the issue #454\n`FixPlan::commit` persisted that temp directly, so a target file\npreviously at `0644` ended up at `0600` post-write. Shared workspaces and\nCI runners that rely on group / other read permissions broke silently\nbecause the JSON output reported `applied: true` and the bytes on disk\nwere correct; only the mode bits had drifted.\n\nIntroduce `fallow_config::preserve_target_mode(temp, target)` as a thin\nhelper called between the temp write and the rename. When the target\nexists, copy its mode (lower 12 bits) onto the temp; when the target\ndoes not yet exist (fresh creation, e.g. the duplicate-exports config-add\nfallback writing `.fallowrc.json` for the first time), leave the temp's\ndefault mode in place so the user's umask still applies via whatever\n`NamedTempFile` produces. Windows ACLs persist with the underlying file\nacross `MoveFileEx`, so the helper is a no-op on non-Unix targets.\n\nThree new regression tests pin the contract: `atomic_write` against an\nexisting target at `0644` (must preserve), `atomic_write` against a\nfresh path (must produce a non-zero mode), and `FixPlan::commit` against\nan existing target at `0644` (must preserve). A real-world smoke against\nthe issue #454 reproducer confirms the fix flows through:\n`fallow fix --yes` on a `0644` source file produces a `0644` post-fix\nfile instead of the previous `0600`.",
          "timestamp": "2026-05-21T11:15:24+01:00",
          "tree_id": "7261f97e84097f2d7885fd999984ba6d8c111ea4",
          "url": "https://github.com/fallow-rs/fallow/commit/c53b74337579d8c5bb7c1ba73984d2de92285d5d"
        },
        "date": 1779358681375,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5145308,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27589,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 713027,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6798,
            "unit": "allocations"
          }
        ]
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
          "id": "8c3c68497551b1d29543c804460321996a0a5e75",
          "message": "fix(workspace): surface malformed package.json and unreachable glob matches\n\nSeven silent-drop sites in crates/config/src/workspace/{mod.rs,parsers.rs}\nbecome typed WorkspaceDiagnostic values carrying a kind discriminator\n(undeclared-workspace, malformed-package-json, glob-matched-no-package-json,\nmalformed-tsconfig, tsconfig-reference-dir-missing). Severity is per site: a\nmalformed root package.json exits 2 at config load (mirrors #468); declared\nworkspace package.json malformed warns and continues so analysis still runs\non the rest; glob-matched-no-package-json warns only when the path is not in\nthe conventional skip list and not in user ignorePatterns; shallow-scan\ncandidates stay silent because the user did not declare them; missing\ntsconfig.json stays silent. Diagnostics emit via deduplicated tracing::warn!\n(process-wide OnceLock keyed on canonical-root + kind + path) and land in a\nshared registry so the JSON envelope on check / dupes / health carries a new\noptional workspace_diagnostics[] field.\n\nA new fallow list --workspaces flag and a dedicated fallow workspaces\nsubcommand expose the discovery topology for introspection. The legacy\ndiscover_workspaces back-compat wrapper now routes through a silent\ncollector that does NOT emit, so sibling analyze + file-discovery callers\nno longer re-warn on paths the user already excluded via ignorePatterns.\nThe analyze pipeline's undeclared-workspace pass also folds into the same\nregistry and suppresses entries that already carry a MalformedPackageJson\ndiagnostic, so a typo'd workspace is no longer double-reported. Path\nnormalisation handles macOS /private/tmp canonicalisation symmetrically;\nPackageJson::load strips a leading UTF-8 BOM so Windows-authored or\nvite-fixture-style configs do not surface as false positives.\n\nFixes #473.",
          "timestamp": "2026-05-21T11:23:46+01:00",
          "tree_id": "0770a3196b14e7e72198f1e234c0302132f9905a",
          "url": "https://github.com/fallow-rs/fallow/commit/8c3c68497551b1d29543c804460321996a0a5e75"
        },
        "date": 1779359175491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5139562,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27589,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 715167,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6799,
            "unit": "allocations"
          }
        ]
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
          "id": "85f3507ae3fa57993d3f6517eb8b50f97b62d45f",
          "message": "fix(signal): install SIGINT/SIGTERM handlers + reap spawned subprocesses\n\n* feat(signal): install SIGINT/SIGTERM handlers + scoped child registry (#477)\n\nWires a process-wide signal handler into the CLI so long-running\nspawned children (fallow-cov sidecar, npm install, self-invoked\nfallow health, git log churn analysis, git worktree audit ops) are\nkilled when the user hits Ctrl+C or CI sends SIGTERM.\n\nNew module `crates/cli/src/signal/`:\n- `ChildRegistry` keyed by monotonic AtomicU64, stores PIDs only;\n  signal handler kills by PID (libc kill -9 on Unix, TerminateProcess\n  on Windows) so the wrapper can own the Child outright and call\n  wait_with_output normally.\n- `ScopedChild` RAII wrapper: register on spawn, deregister on\n  wait/drop.\n- Unix listener: signal-hook 0.4 iterator on a dedicated std::thread\n  (blocking sigwait sidesteps async-signal-safety constraints).\n- Windows listener: SetConsoleCtrlHandler via windows-sys\n  (CTRL_C/BREAK -> 130, CTRL_CLOSE/LOGOFF/SHUTDOWN -> 143).\n- One-shot drain guard + bounded try_wait budget (500ms Unix, 1500ms\n  Windows).\n\nRefactored spawn sites to ScopedChild:\n- crates/cli/src/health/coverage.rs::run_sidecar (fallow-cov)\n- crates/cli/src/coverage/mod.rs::install_sidecar + run_health_analysis\n- crates/cli/src/audit.rs BaseWorktree::{create, reuse_or_create} +\n  remove_audit_worktree\n- crates/core/src/churn.rs::analyze_churn_events via set_spawn_hook\n  function pointer so core stays cli-independent\n\nWatch mode (crates/cli/src/watch.rs) opts into cooperative shutdown\nvia GracefulModeGuard: SIGINT only sets a flag, watch loop polls via\nrecv_timeout(200ms) and exits cleanly with code 0 because Ctrl+C is\nthe documented termination path.\n\nLSP shutdown (crates/lsp/src/main.rs) now cancels via Arc<AtomicBool>:\nrun_analysis checks the flag at entry and after spawn_blocking so\npost-shutdown publishes are suppressed. Honest doc-comment: rayon\nwork in flight runs to completion on the blocking thread pool; the\n250ms grace is for quiescence, not cancellation.\n\nTests:\n- 8 unit tests under crates/cli/src/signal/*\n- 2 integration tests under crates/cli/tests/signal_tests.rs using\n  sub-process pattern via env!(\"CARGO_BIN_EXE_fallow\") +\n  FALLOW_TEST_SIGNAL_HELPER=1; asserts exit 130/143 + inner sleep PID\n  reaped within 5s.\n- 2 LSP unit tests verifying shutdown flips cancellation and\n  run_analysis short-circuits afterwards.\n\nCloses #477\n\n* fix(signal,docs): apply review fixes + changelog + cli-crate rule note (#477)\n\nReview fixes from rust-reviewer + lsp-reviewer:\n\n- Drop unused `ScopedChild::kill` method (was YAGNI; signal handler\n  covers cancel via PID side channel).\n- Remove dead `EXIT_CODE` static from signal/windows.rs (its stored\n  value was never read; `handle_signal` takes `exit_code` as a\n  parameter directly).\n- Update registry.rs + scoped_child.rs module docs to say `kill -9\n  <pid>` shell exec on Unix instead of the misleading `libc::kill`\n  (we avoid adding `libc` as a workspace dep).\n- Drop the unnecessary `pid as i32` cast + #[expect] annotation in\n  kill_pid (the shell command takes a string).\n- Tighten `scoped_child::output` to unconditionally set\n  `stdin(Stdio::null())` plus piped stdout/stderr, matching\n  `Command::output` semantics exactly.\n- Replace the vacuous `try_lock().is_ok()` assertion in the LSP\n  short-circuit test with `backend.results.read().await.is_none()`,\n  which is the actual post-condition that proves cancellation\n  short-circuited `spawn_blocking`.\n\nDocs:\n- CHANGELOG.md [Unreleased] entry under Fixed.\n- .claude/rules/cli-crate.md `signal/` section with adoption\n  guidance + cross-platform notes.\n\nRefs #477\n\n* fix(signal): codex review fixes for #477\n\nTwo BLOCK-level findings from parallel /fallow-review (Codex):\n\n1. **changed_files.rs git subprocesses were unregistered.**\n   crates/core/src/changed_files.rs:117,147 still called raw\n   git_command(cwd,...).output() through git_env, so SIGINT delivered\n   to the parent during watch + --changed-since left git rev-parse /\n   git diff / git ls-files children running. Added the same\n   ChurnSpawnHook-style function pointer as crates/core/src/churn.rs\n   (set_spawn_hook + spawn_output) and installed it from cli's main()\n   pointing at signal::scoped_child::output. Core stays cli-\n   independent; the indirection costs nothing for embedders / tests\n   that don't install a hook.\n\n2. **Watch graceful mode skipped registry drain.**\n   handle_signal returned early on GRACEFUL=true BEFORE\n   drain_and_kill, so a Ctrl+C during analyze_and_report (which spawns\n   git via changed_files / churn) let those git subprocesses run to\n   completion - defeating the contract issue #477 spelled out for\n   watch mode. Moved drain_and_kill BEFORE the graceful check; the\n   graceful path now always reaps in-flight children but returns\n   instead of process::exit, letting the watch loop's outer\n   is_shutting_down() check terminate cleanly with exit 0.\n\nRegression coverage:\n- New integration test sigint_in_graceful_mode_drains_children_but_does_not_exit\n  asserts the post-fix behavior. Achieved via a new\n  FALLOW_TEST_SIGNAL_HELPER_GRACEFUL=1 env-var gate on the test-helper\n  subcommand that flips graceful mode before spawning the inner sleep.\n- Existing integration tests for non-graceful 130/143 paths still\n  pass.\n\nAlso (non-blocking CONCERN from Codex):\n- Documented the PID-recycle race in scoped_child.rs module doc\n  (microseconds-wide window between wait_with_output returning and\n  deregister; consequence is one stray SIGKILL during shutdown).\n\nRefs #477",
          "timestamp": "2026-05-21T12:37:23+01:00",
          "tree_id": "5f72da805ba34021671aae06988c1c6010b26b0b",
          "url": "https://github.com/fallow-rs/fallow/commit/85f3507ae3fa57993d3f6517eb8b50f97b62d45f"
        },
        "date": 1779363575123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5093321,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27535,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 655911,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6267,
            "unit": "allocations"
          }
        ]
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
          "id": "ab3a66f3b831f5bb9c9720d837d0faab77aceb91",
          "message": "fix(ci-template): symlink bundled GitLab templates to workspace sources\n\nReplaces the byte-copy of `crates/cli/templates/ci/{gitlab-ci.yml,\nscripts/comment.sh, scripts/review.sh}` with git symlinks pointing at the\ncanonical workspace `ci/` files. Contributors now edit one source of\ntruth; `cargo package` dereferences the symlinks into regular files so\nthe published crate stays self-contained.\n\nRemoves the `bundled_templates_match_workspace_sources` byte-drift test\nin favour of the inode equivalence the symlink provides. The companion\n`gitlab_ci_template_for_loops_match_vendored_files` test still guards\nthe `GITLAB_FILES` list against `for f in ...` loop drift inside the\ntemplate.\n\nDocuments the Windows prerequisite (`git config --global core.symlinks\ntrue`) in `CONTRIBUTING.md` and updates `.claude/rules/cli-crate.md` to\ndescribe the new packaging contract.\n\nFixes #518.",
          "timestamp": "2026-05-21T12:49:52+01:00",
          "tree_id": "0e813a531d3e692f016e49c9dc118c7dc1238478",
          "url": "https://github.com/fallow-rs/fallow/commit/ab3a66f3b831f5bb9c9720d837d0faab77aceb91"
        },
        "date": 1779364374575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5101042,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27579,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708539,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6795,
            "unit": "allocations"
          }
        ]
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
          "id": "1e4e082a906ced586687ddf01f063f1145386dca",
          "message": "fix(cache): write-time size cap + config-aware invalidation\n\n* feat(cache): write-time cap + LRU eviction + config-aware invalidation\n\nCloses #466.\n\nTwo structural gaps in `crates/extract/src/cache/`:\n\n1. Write-time size cap. The 256 MB cap was only enforced at load time, so\n   long-lived developer caches silently discarded everything once they crossed\n   the threshold. `CacheStore::save` now encodes once, evicts LRU entries when\n   the encoded size exceeds 80% of the cap, re-encodes after eviction, and\n   writes atomically via tmp+rename. The eviction floor honors the user's cap\n   (single-entry overshoot logs `tracing::warn!` rather than silently lying).\n\n   `last_access_secs: u64` lives on `CachedModule`. It is set at insertion\n   time (cache miss or content change) and NOT refreshed on cache-hit reads;\n   refreshing on read would collapse the LRU because `update_cache`\n   iterates every in-scope file every run.\n\n   Override via `FALLOW_CACHE_MAX_SIZE` env var or `cache.maxSizeMb` config\n   field (env var wins). No CLI flag, matching the ecosystem convention\n   (knip, eslint, biome, turbo all use config or implicit caps).\n\n2. Config-aware invalidation. The cache key is `(file_path, content_hash)`\n   plus a global `CACHE_VERSION`. Disabling a plugin or removing a\n   `framework: [...]` entry left the cache stale. The cache header now\n   carries a `config_hash: u64` computed via xxh3 over a sorted list of\n   active external plugin names plus inline framework definition names. A\n   mismatch on load discards the cache (same shape as a version mismatch).\n\n   ADR-009 documents the narrow ingredient set, the rationale for excluding\n   `entry`/`ignorePatterns` (detection inputs, not extraction inputs), the\n   plugin-file-content limitation, and the contract for adding new\n   ingredients.\n\n`CACHE_VERSION` bumps 87 -> 88 (new field on `CachedModule`, new header\nfield on `CacheStore`). A `tracing::info!` fires on the version-mismatch\nload path so users see the one-time rebuild.\n\nEviction is `tracing::debug!` by default and promotes to `tracing::info!`\nonly when at least 25% of entries are removed in a single save, so warm-cache\nsaves stay silent.\n\nPre panel-review: dropped the proposed `--cache-max-size` global flag,\nadopted env-var + config-field surface, replaced two-encode eviction with\nsingle-encode plus an estimated cost check, replaced the \"100-entry floor\"\nwith always-honor-cap-plus-warn, added atomic save.\n\n* fix(cache): preserve last_access_secs on metadata-only refresh + safe BPS math\n\nPost review-fix for #466.\n\nTwo correctness gaps the rust-reviewer surfaced:\n\n1. `update_cache`'s `touch`-handling branch (mtime/size differ, content\n   hash matches) previously rebuilt the cache entry via `module_to_cached`,\n   which stamps the current epoch second into `last_access_secs`. Result:\n   any build pipeline that `touch`es files before invoking fallow (common\n   with sed-based codegen and `make` rebuilds) would refresh every entry's\n   LRU recency on every run, defeating the eviction order. Now: the\n   refreshed entry preserves the existing `last_access_secs`, so the LRU\n   continues to discriminate even across `touch`-heavy workflows.\n\n2. `max_size_bytes.saturating_mul(EVICTION_TRIGGER_BPS) / 10_000` could\n   saturate at pathologically-large caps (above ~2.3 PB) and produce a\n   trigger threshold half of the intended value. Divide-first ordering\n   keeps the arithmetic well below `usize::MAX` at every realistic cap,\n   with at most 0.008% rounding error. Applied to both the trigger and\n   target computations. `initial_entries * EVICTION_SIGNIFICANT_BPS` stays\n   multiply-then-divide since `initial_entries` is bounded by the file\n   count (typically 100k-1M) and small caches need the precision to keep\n   the significance threshold non-zero.\n\n* docs(changelog): cache hardening Unreleased entry for #466\n\n* fix(cache): honor user cache cap on load + emit upgrade log on decode fail\n\nPost /fallow-review + Codex BLOCK fixes for #466.\n\n(1) `CacheStore::load` now takes `max_size_bytes` so a user setting\n    `cache.maxSizeMb = 512` (or `FALLOW_CACHE_MAX_SIZE=512`) can write a\n    400 MB cache and load it back; the previous code gated load on the\n    hardcoded `DEFAULT_CACHE_MAX_SIZE` (256 MB) and silently discarded any\n    larger cache on the next run. The load ceiling is now\n    `max(max_size_bytes, DEFAULT_CACHE_MAX_SIZE)` so a misconfigured tiny\n    cap (e.g. `FALLOW_CACHE_MAX_SIZE=1`) does NOT trash a valid existing\n    cache; user caps take effect on the next SAVE via the eviction logic.\n    All four load callsites updated (`core/lib.rs`, `cli/flags.rs`,\n    `cli/health/mod.rs`, `cli/coverage/analyze.rs`) via a new\n    `fallow_core::resolve_cache_max_size_bytes(&config)` helper.\n\n(2) The upgrade `tracing::info!(\"Cache format upgraded, rebuilding ...\")`\n    log now fires on bitcode decode FAILURE as well as version mismatch.\n    Across a `CACHE_VERSION` bump the on-disk schema typically changes\n    shape, so the new `CacheStore` struct cannot deserialize old bytes\n    and bitcode returns an error before reaching the version check.\n    The old code went silent on this common path; now both paths emit\n    the same info log.\n\n(3) Regenerated `schema.json` to publish the new `cache.maxSizeMb`\n    config field + `CacheConfig` definition for IDE autocomplete.\n\n(4) Added `FALLOW_CACHE_MAX_SIZE` to the in-repo env var inventories\n    (`CLAUDE.md`, `.claude/rules/cli-crate.md`) so future contributors\n    discover it. Companion-repo docs already carry it.\n\nTwo new regression tests in `crates/extract/src/cache/tests.rs`:\n- `cache_load_honors_user_max_size_above_default`: covers both the\n  \"user cap > default\" load path and the \"user cap < default does not\n  discard valid cache\" floor semantics.\n- `cache_load_returns_none_on_bitcode_decode_failure`: covers the\n  upgrade-path decode failure that the old test (which mutated the\n  version byte inside the new schema) did not exercise.",
          "timestamp": "2026-05-21T12:57:52+01:00",
          "tree_id": "ed9d1910ed8aaf810bebd8677dc6008b534a7007",
          "url": "https://github.com/fallow-rs/fallow/commit/1e4e082a906ced586687ddf01f063f1145386dca"
        },
        "date": 1779364822565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5104906,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27578,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711075,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6797,
            "unit": "allocations"
          }
        ]
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
          "id": "7b6ae40f93ded729402406f422930214763f3089",
          "message": "fix(migrate): warn on dropped knip rules + glob-drift caveat\n\n`fallow migrate` previously dropped three classes of knip input without\ndiagnostic: rule keys under `rules` / `exclude` / `include` that were\nneither in `KNIP_RULE_MAP` nor in `KNIP_UNMAPPABLE_ISSUE_TYPES` (typos,\nfuture knip rules, internal rules the migrator had not yet catalogued)\ndisappeared from the generated config, and `entry` / `ignorePatterns`\nglobs were copied verbatim with no statement about knip's glob engine vs\nfallow's `globset` potentially diverging on corner cases.\n\n`warn_unmapped_rule_key` in `crates/cli/src/migrate/knip_fields.rs` now\nemits a `MigrationWarning` for every untranslated key across all three\nfields, with two shapes: documented-unmappable issue types keep the\nexisting message; completely-unknown keys get a new \"unknown knip issue\ntype\" message with a docs-URL suggestion. `run_migrate` appends a single\n`Note:` line after the warnings section when knip was a migration source\nAND the migrated config carries `entry` or `ignorePatterns`, suppressed\nfor jscpd-only and rules-only knip configs. The warnings header is now\nsingular/plural-aware since a single typo'd rule is the most common\ncount-one case. Content-detected `--from custom-name.json` paths are\ntagged internally with `(knip config)` so the glob caveat fires through\nthat branch; a `source_head` helper strips the tag (via `rsplit_once`\nplus closing-paren guard, so paths containing their own ` (...)` segment\nare preserved) before printing the user-visible \"Migrated from:\" line\nand the generated `// Migrated from ...` header. `OutputFormat::pick`\nruns through the same helper so `.jsonc` auto-mirror keeps working\nthrough tagged sources.\n\nA new `migrate_roundtrip_globs_match_knip_documented_semantics`\nintegration test builds a Next.js-shaped fixture project, runs the\nmigrator, runs `fallow list --files` against the migrated config, and\nasserts the discovered file set exactly matches a hand-recorded ground\ntruth derived from knip's documented glob semantics; new unit tests\ncover the unknown-key warning at all three field paths, the glob-caveat\ngating across knip / jscpd / combined sources, the `source_head` edge\ncases (path with parens, unclosed paren, empty input), and a small set\nof `knip_glob_equivalence_*` assertions documenting where both engines\nagree today plus one negative case for `!` negation drift.\n\nFixes #457.",
          "timestamp": "2026-05-21T13:12:17+01:00",
          "tree_id": "c8d51d269fb703648629e8b71495d2cba501e478",
          "url": "https://github.com/fallow-rs/fallow/commit/7b6ae40f93ded729402406f422930214763f3089"
        },
        "date": 1779365692427,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5096130,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27573,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708883,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
            "unit": "allocations"
          }
        ]
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
          "id": "99c315052e24624532a7ae160650f873e26b0b12",
          "message": "chore(ci): unblock Documentation + Windows ARM64 jobs\n\nTwo CI failures landed on main in the back-to-back merges of #473\n(workspace diagnostics) and #477 (signal handlers). Both are\none-line follow-ups; #466 caught them on its post-merge run.\n\nDocumentation job: `discover_workspaces` in `crates/config/src/\nworkspace/mod.rs:70` referenced the private `emit_warn` helper via\na rustdoc intra-doc link `[`emit_warn`]`. `-D warnings` promotes\n`rustdoc::private_intra_doc_links` to a hard error since `emit_warn`\nis `pub(super)` inside the sibling `diagnostics` module. Switched to\na plain backtick code span plus a short pointer to where the helper\nlives so the reader can still find it without the link.\n\nWindows ARM64 Native Compile job: `crates/cli/src/signal/windows.rs`\nimported `BOOL` from `windows_sys::Win32::Foundation::BOOL`, which\nno longer resolves under windows-sys 0.61. Confirmed via the crate\nsource that `BOOL` now lives at `windows_sys::core::BOOL` and matches\nthe `SetConsoleCtrlHandler` signature `add: windows_sys::core::BOOL\n-> windows_sys::core::BOOL`. Updated the import path and added a\ncomment explaining the move so the next windows-sys bump audit picks\nit up.",
          "timestamp": "2026-05-21T13:24:18+01:00",
          "tree_id": "404c3d2146d38996544a601c21b3e63ecdff1894",
          "url": "https://github.com/fallow-rs/fallow/commit/99c315052e24624532a7ae160650f873e26b0b12"
        },
        "date": 1779366483744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5098586,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27587,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 710731,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
            "unit": "allocations"
          }
        ]
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
          "id": "9d47eda745e6e35534bd4b578b0f4bc77653379a",
          "message": "fix(lsp): skip stale diagnostic publishes when document version moves mid-analysis\n\n* fix(lsp): skip stale diagnostic publishes when document version moves mid-analysis\n\nThe LSP captured analysis input at run_analysis entry and published its\noutput unconditionally, even when the user had typed further between\nspawn_blocking dispatch and publish. Squiggles ended up pinned to lines\nthe user no longer wrote.\n\nTrack per-URI document `version` alongside the cached text (LSP supplies\nit on did_open / did_change). Snapshot the live version map once at\nrun_analysis entry, thread the snapshot through to\npublish_collected_diagnostics, and per URI:\n\n  - If the live version has advanced past the snapshot (strict `>`), or\n    if the document was closed mid-run (in snapshot, absent from live),\n    skip publish + cache update. Still insert the URI into `new_uris`\n    so the next-run stale-clearing branch does not erase the last-valid\n    diagnostics from the client.\n  - Otherwise publish as before, passing `Some(snapshot_version)` to\n    `publish_diagnostics` so LSP 3.17 clients can use the standard\n    PublishDiagnosticsParams.version slot.\n\nThe single-flight `analysis_guard`, did_save debouncer, and pull-model\ndiagnostic handler are unchanged. The stale-clearing branch mirrors the\nsame skip and reads all needed live versions before acquiring the\n`cached_diagnostics.write()` lock (avoids holding a write-lock across an\nawait on `documents.read()`).\n\nAdds 7 tests covering: stale-skip on advanced version, equal-version\npublishes, URI-not-in-snapshot publishes, did_close-mid-run skip,\n`Some(snapshot_version)` is threaded to publish_diagnostics, stale-\nclearing branch skips advanced URIs, skipped URIs land in\nprevious_diagnostic_uris.\n\nFixes #450\n\n* docs(lsp): document diagnostic publish staleness invariant + changelog\n\nAdds a \"Diagnostic publish staleness\" section to .claude/rules/lsp-server.md\ncovering the snapshot-then-compare semantics, the stale-skip + new_uris\npreservation invariant, the LSP 3.17 PublishDiagnosticsParams.version slot\nthreading, and the pull-model cache-at-last-valid behavior. Adds the\nmatching user-facing CHANGELOG entry under Unreleased.\n\nCompanion to #450.\n\n* fix(lsp): also treat opened-mid-run URIs as stale; tighten staleness contract\n\nCodex's parallel /fallow-review on the #450 stale-publish fix BLOCKed on a\nrace in `uri_is_stale`: a URI absent from the snapshot but PRESENT in\n`live_versions` was treated as non-stale. That covered the legitimate\n\"cross-file diagnostic on a never-opened file\" case, but it also let an\n`did_open` landing between snapshot capture and publish slip through:\nthe analysis ran without seeing the just-opened buffer, the publish went\nout with `version: None` (no snapshot for that URI), and the client could\nnot version-discard the mismatched payload server-to-client.\n\n`uri_is_stale` now requires a URI to be absent from BOTH the snapshot AND\nthe live `documents` map to count as non-stale. Three conditions now\nshort-circuit to STALE: live > snapshot (edited mid-run), snapshot\npresent + live absent (closed mid-run), snapshot absent + live present\n(opened mid-run). Only the (None, None) case publishes unconditionally,\ncovering cross-file diagnostics anchored to files the user never opened\nvia the LSP (`package.json`, `pnpm-workspace.yaml`).\n\nAdds `publish_skips_uri_when_opened_mid_run`; renames the existing\n`publish_emits_when_uri_absent_from_snapshot` to\n`publish_emits_when_uri_absent_from_snapshot_and_live` and tightens its\ncomment so the contract is explicit. Updates the LSP staleness invariant\nsection in `.claude/rules/lsp-server.md` to match the corrected\nsemantics.\n\nRefs #450.",
          "timestamp": "2026-05-21T13:36:44+01:00",
          "tree_id": "d0af9dda8e722a2896fac93f1b68e79904549967",
          "url": "https://github.com/fallow-rs/fallow/commit/9d47eda745e6e35534bd4b578b0f4bc77653379a"
        },
        "date": 1779367161229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5152962,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27607,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 715203,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6798,
            "unit": "allocations"
          }
        ]
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
          "id": "9035c4b2e8b10bc1d444b32a36732c548d3ca581",
          "message": "chore(ci): add schema.json drift gate against FallowConfig::json_schema()\n\nMirrors the docs/output-schema.json drift gate (issue #338) on the\nsymmetric config-input chain. A new `#[cfg(test)] mod config_schema_drift`\nin crates/cli/src/init.rs parses the committed schema.json and the live\n`FallowConfig::json_schema()` output to `serde_json::Value` and\n`assert_eq!`s them, guarded by `is_object()` against the production\ncode's `unwrap_or_default()` swallowing a future schemars failure into\n`Value::Null`. On mismatch a three-line panic points at the regen\ncommand (`cargo run --bin fallow -- config-schema > schema.json`).\n\nThe include_str! path resolves inside the crate via a git symlink\ncrates/cli/schema.json -> ../../schema.json so cargo package dereferences\ninto a self-contained tarball, matching the existing pattern at\ncrates/cli/templates/ci/gitlab-ci.yml. The ci.yml `rust:` paths-filter\nnow also matches edits to schema.json directly so schema-only PRs still\ntrigger the check job; `schema.json` is added to the `npm-package:`\nfilter too so the new `diff schema.json npm/fallow/schema.json` step\nfires at PR time on schema-only PRs. Both ci.yml and release.yml now\nfollow `cp schema.json npm/fallow/schema.json` with a `diff` invariant\nguard so a future refactor that drops or moves the cp fails loud rather\nthan shipping a stale schema to npm consumers.\n\nFixes #440.",
          "timestamp": "2026-05-21T14:08:02+01:00",
          "tree_id": "8877b82009ffadd726fc9aa70a78fb47ee53c226",
          "url": "https://github.com/fallow-rs/fallow/commit/9035c4b2e8b10bc1d444b32a36732c548d3ca581"
        },
        "date": 1779369019105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5087858,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27573,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 710587,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6793,
            "unit": "allocations"
          }
        ]
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
          "id": "7755f3637f5f5420f87c0ae37a99c18daf93e77e",
          "message": "feat(audit): age-based GC for persistent reusable base-snapshot caches\n\n* feat(audit): age-based GC for persistent reusable base-snapshot caches\n\n`fallow audit` keys persistent worktree caches in\n`std::env::temp_dir()/fallow-audit-base-cache-<repo_hash>-<sha>`. Until\nnow these never expired: every distinct base SHA the user ever audited\naccumulated a cache entry, easily reaching hundreds of MB to multiple\nGB on developer machines after weeks of daily audits.\n\nAdd `sweep_old_reusable_caches` invoked at the top of `execute_audit`\nthat walks git-registered worktrees, filters to reusable cache paths,\nand removes entries whose sidecar `.last-used` mtime exceeds the\nconfigured age. The sidecar is touched on every cache-hit reuse so the\nstaleness signal stays current even when the cache directory itself\nis not mutated.\n\nConfiguration:\n- env: FALLOW_AUDIT_CACHE_MAX_AGE_DAYS (wins)\n- config: `audit.cacheMaxAgeDays` (Option<u32>)\n- default: 30 days\n- `0` from either source disables the sweep\n- Invalid env values silently fall back to config / default\n\nConcurrency invariants:\n- Each candidate is gated by `ReusableWorktreeLock::try_acquire`; the\n  sweep skips on contention so an in-flight `fallow audit` mid-rebuild\n  is not disturbed.\n- The `.lock` file is NEVER deleted. An unlinked-but-still-flocked\n  inode plus a racer's `open(O_CREAT)` at the same path would produce\n  two processes each holding a kernel flock on different inodes. Lock\n  files are tens of bytes; leaking them is harmless.\n\nPre-upgrade grace: existing caches lacking a sidecar (created before\nthis feature shipped) are NOT removed on first encounter; instead the\nsweep seeds a fresh sidecar so the next invocation can age from real\nlast-use. Without this grace, the dir's own mtime (= creation date on\nPOSIX) would wipe every legitimately-warm pre-upgrade cache on the\nfirst run after upgrade.\n\nObservability: per-entry removal failures emit `tracing::warn!`; the\nsweep emits a `tracing::info!` summary line on non-empty reclaim and\na stderr \"fallow: reclaimed N stale base-snapshot caches\" when\n`!opts.quiet`.\n\nFixes #498\n\n* docs(audit): document #498 GC threshold env var + config field\n\n- CHANGELOG.md: user-facing bold entry under [Unreleased] Fixed.\n- .claude/rules/cli-crate.md: env var section + audit.rs bullet (#498 lifecycle).\n- docs/backwards-compatibility.md: list FALLOW_AUDIT_CACHE_MAX_AGE_DAYS as stable.\n- schema.json: regenerated from updated AuditConfig.\n\nRefs #498\n\n* fix(audit): only count actually-removed cache entries in reclaim summary\n\nrust-reviewer flagged that `removed += 1` unconditionally incremented\nthe counter after the `remove_dir_all` match block. When the directory\nsurvived removal (the `warn!` branch), the summary line \"fallow:\nreclaimed N stale base-snapshot caches\" and the `tracing::info!` event\nboth over-counted by including entries whose on-disk content was NOT\nactually reclaimed. The git registration cleanup still happens in that\nbranch (via the preceding `remove_audit_worktree`), so `git worktree\nprune` remains correct; only the user-facing count was misleading.\n\nTrack dir-removal success and only bump the counter on Ok / NotFound.\n\nRefs #498\n\n* fix(audit): stamp sidecar on fresh-create so age is measured from creation\n\n`AuditConfig::cache_max_age_days`'s docstring contract reads\n\"Maximum age (in days since last reuse or fresh create)\". The shipped\ncode touched the sidecar on the cache-hit branch only, leaving every\nfreshly-created cache without a sidecar until the NEXT audit\ninvocation grace-seeded it. For one-off base SHAs the cache would\nsurvive the first stale sweep regardless of age; for users who run\naudit infrequently the documented 30-day window expanded into\n\"30 days starting from the next audit run\", silently doubling the\neffective lifespan.\n\nStamp the sidecar at the end of the fresh-create branch in\n`BaseWorktree::reuse_or_create`, mirroring what the cache-hit branch\nalready does. The sweep's sidecar-absent grace path is still\nload-bearing for pre-upgrade caches created before this feature\nshipped (it seeds them on first encounter rather than wiping).\n\nAdd a regression test that pins both halves of the contract: a fresh\n`reuse_or_create` writes a near-now sidecar AND backdating that\nsidecar causes the next sweep to actually remove the entry.\n\nRefs #498\n\n* docs(rules): drop em-dash on touched audit.rs bullet in cli-crate.md\n\nCLAUDE.md style rule forbids em-dashes in any output. My #498 edit\nappended an \"Age-based GC\" paragraph to the audit.rs bullet, which\nre-emits the bullet's leading \"audit.rs — Audit command:\" through git\ndiff. Swap that em-dash for a colon + parenthesis on the line I\ntouched so the diff is em-dash-clean. Other untouched bullets in the\nsame file retain their em-dashes (drive-by reformatting is out of\nscope for this PR).",
          "timestamp": "2026-05-21T14:45:20+01:00",
          "tree_id": "361bacc1b8750cb701ca6ac8f280b6d04b45776c",
          "url": "https://github.com/fallow-rs/fallow/commit/7755f3637f5f5420f87c0ae37a99c18daf93e77e"
        },
        "date": 1779371349815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5080402,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27564,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708131,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6789,
            "unit": "allocations"
          }
        ]
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
          "id": "bfe89df1823479e7d3dbe6d44472e0bab3ed605f",
          "message": "chore(audit): name lock-lifecycle invariant in test comments substantively\n\nTest comments and assertion messages in `reusable_cache_gc_preserves_lock_file_after_removal`\nreferenced an internal review-process label rather than the substantive\ninvariant they pin. Switch to \"lock-file lifecycle invariant\" so the\ntest reads correctly to future maintainers without dependencies on\nout-of-tree review nomenclature.\n\nNo functional change.",
          "timestamp": "2026-05-21T14:50:11+01:00",
          "tree_id": "1a3968b6e5dfc332584e928b2c97e0580a9b77b1",
          "url": "https://github.com/fallow-rs/fallow/commit/bfe89df1823479e7d3dbe6d44472e0bab3ed605f"
        },
        "date": 1779371568737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5083090,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27565,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 656799,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6285,
            "unit": "allocations"
          }
        ]
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
          "id": "ec210c3b255b8f1d7594b15773461ff9e1df1154",
          "message": "fix(fix): preserve UTF-8 BOM + skip mixed CRLF/LF files\n\nTwo file-encoding correctness gaps in `fallow fix` are closed in one\npass. Previously, mixed CRLF/LF source files were silently mangled\nbecause `read_source` detected the line ending by `contains(\"\\r\\n\")`\nand then split exclusively on that style; lines that did not end with\nthe detected separator got embedded into adjacent lines and the fix\nwrote to the wrong line. Now `read_source` returns `EncodingError::\nMixedLineEndings` on detection, the orchestrator translates that into\n`SkipReason::MixedLineEndings`, the JSON envelope grows an additive\nsibling counter `skipped_mixed_line_endings: N` next to the existing\n`skipped_content_changed`, and the run exits with code 2. The skip is\nNOT self-healing: a stderr line names `dos2unix` and `git config\ncore.autocrlf input` as the required remediation. `FixPlan::skip`\ndedupes on `(path, reason)` so a file carrying findings for multiple\nfixers (e.g. an unused export AND an unused enum member) surfaces as\none entry, not one per fixer.\n\nUTF-8 BOM handling becomes symmetric. The extract layer's three read\nentry points (`parse_single_file_cached`, `parse_single_file`,\n`parse_from_content`) now strip the leading BOM before hashing and\nbefore parsing, so `content_hash`, `compute_line_offsets`, and the\noxc parser all see a consistent post-BOM byte sequence; line numbers\non BOM-bearing files no longer shift by the codepoint. The fix layer's\n`stage_fixed_content` re-prepends the BOM bytes (`EF BB BF`) on write\nwhen the source had one, so Windows-authored files round-trip with\ntheir BOM intact. `parse_source_to_module` carries a defense-in-depth\nstrip for out-of-tree callers (fuzzers, integration fixtures). fallow\nneither adds nor removes a BOM. The extraction cache `CACHE_VERSION`\nbumps from 88 to 89 because pre-fix caches keyed hashes over BOM-\nincluded bytes; first run after upgrade is uncached, subsequent runs\nare warm.\n\nThe `fix_preview` and `fix_apply` MCP tool descriptions are updated to\nflag the non-self-healing nature of the mixed-EOL skip for AI agents.\nCompanion-repo docs (fallow-docs/cli/fix.mdx + fallow-skills/.../cli-\nreference.md) get a new \"File encoding contract\" section covering both\nhalves.\n\nFixes #475.",
          "timestamp": "2026-05-21T15:25:53+01:00",
          "tree_id": "2aed5ba11fc461928f0a95014d0ddd36f63174fb",
          "url": "https://github.com/fallow-rs/fallow/commit/ec210c3b255b8f1d7594b15773461ff9e1df1154"
        },
        "date": 1779373718082,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5113866,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27598,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711280,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6867,
            "unit": "allocations"
          }
        ]
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
          "id": "3e8f66272385783858d138445678968cb31c6119",
          "message": "feat: surface re-export cycles as user-visible findings\n\n* feat(types,config,graph,core,cli): scaffold re-export-cycle finding (WIP)\n\nAdds the new `re-export-cycle` issue type across the types, config,\ngraph crates plus the cross-cutting match-arm + struct-literal sites in\ncore, cli, and regression baseline. Detection logic already exists in\n`crates/graph/src/graph/re_exports/mod.rs::find_re_export_cycles`\n(formerly `warn_on_re_export_cycles`, added in #442); this commit gives\nit a structured return type, threads cycles onto the ModuleGraph, and\nprepares every downstream literal so the rest of the pipeline (D-L from\n.plans/issue-515-re-export-cycles.md) can be hooked up incrementally\nwithout per-step compile breakage.\n\ntypes:\n- `ReExportCycle { files, kind: ReExportCycleKind }` plus wrapper\n  `ReExportCycleFinding` carrying typed `actions[]`\n  (`refactor-re-export-cycle` informational primary + `suppress-file`\n  secondary; cycles are file-scoped so a single suppression on\n  alphabetically-first member breaks the cycle).\n- `IssueKind::ReExportCycle` (discriminant 26) with parse aliases\n  `re-export-cycle`, `re-export-cycles`, `reexport-cycle`,\n  `reexport-cycles`.\n- `FixActionType::RefactorReExportCycle`.\n\nconfig:\n- `RulesConfig.re_export_cycle: Severity` defaulting to `Warn`\n  (panel-reviewed: existing projects with latent cycles do not get\n  sudden CI failures on upgrade). Same three serde aliases on both\n  `RulesConfig` and `PartialRulesConfig`.\n- Per-file `overrides.rules.re-export-cycle` is a no-op (cycle spans\n  multiple files); load-time warn block extended to point users at the\n  working escape hatch.\n- `KNOWN_RULE_NAMES.len()` 48 -> 52; alias-in-source drift guard passes.\n\ngraph:\n- `find_re_export_cycles` (renamed from `warn_on_re_export_cycles`)\n  returns `Vec<GraphReExportCycle>` while keeping the existing\n  `RUST_LOG=warn` emissions intact. Carries parallel `files` +\n  `file_ids` arrays so the downstream detector can call\n  `suppressions.is_file_suppressed` without a path-to-FileId lookup.\n- `ModuleGraph` gains a `re_export_cycles: Vec<GraphReExportCycle>`\n  field populated after Phase 4 chain resolution.\n\ncore (cross-cutting only):\n- `severity_for_kind` and the stale-suppression kind-to-string map\n  cover the new `IssueKind::ReExportCycle` variant.\n\ncli, regression baseline (cross-cutting only):\n- `CheckCounts` + `RegressionBaseline` (cli local + fallow_config) gain\n  a `re_export_cycles: usize` field.\n- All `RulesConfig {}` test literals across cli/check/rules.rs,\n  cli/report/*, cli/tests/snapshot_tests.rs, core integration tests\n  gain `re_export_cycle: Severity::<X>` to keep workspace builds clean.\n\nRemaining work for #515:\n- Wire `find_re_export_cycles` detector into `find_dead_code_full` and\n  populate `AnalysisResults.re_export_cycles`.\n- CLI plumbing: `--re-export-cycles` flag, IssueFilters, baseline\n  retain, explain RuleDef, all 6 report formats.\n- LSP diagnostic + MCP tool description + GH Action/GitLab CI jq +\n  VS Code TS contract.\n- Snapshot tests + integration fixtures + schema regen.\n\nRefs #515\n\n* feat(core,cli,lsp,mcp,types): wire re-export-cycle finding end-to-end (WIP)\n\nLifts the upfront Tarjan SCC pass added in #442 from a `tracing::warn!`\ninto a user-visible AnalysisResults finding, then threads it through the\nCLI filter / baseline / explain / 6 output formats, the LSP diagnostic\nprovider, and the MCP tool registry.\n\ncore:\n- new `analyze/re_export_cycles.rs` detector: walks the graph-layer\n  `GraphReExportCycle` vec, applies file-level suppression (any member\n  file with `// fallow-ignore-file re-export-cycle` short-circuits the\n  whole cycle), and maps each entry to a typed `ReExportCycleFinding`\n  via the existing `with_actions` wrapper.\n- `find_dead_code_full` rayon-join arm hoisted into three small helper\n  fns (`run_circular_dep_detector`, `run_re_export_cycle_detector`,\n  `run_export_usages_collector`) to keep the tree under the clippy\n  `excessive_nesting` threshold (7); each helper does the `Severity::Off`\n  gate plus the wrapper map.\n- `core::results` re-exports `ReExportCycleFinding`, `ReExportCycle`,\n  `ReExportCycleKind` so downstream crates (cli, lsp) can build literals\n  without touching `fallow_types::*` directly.\n\ncli:\n- `--re-export-cycles` clap flag on `check` and the matching field on\n  `IssueFilters`, `DeadCodeFilters`, and the napi `DeadCodeOptionsJs`.\n- `apply_rules` / `has_error_severity_issues` / `promote_warns_to_errors`\n  arms for the new `rules.re_export_cycle` severity.\n- workspace + changed-files retain logic (`retain(any-member-under-X)`,\n  matching circular_dependencies).\n- baseline: new `re_export_cycles: Vec<String>` field keyed by\n  `kind:<sorted-paths-joined-with-<->` so self-loops cannot\n  keyspace-collide with future single-file multi-node shapes (panel\n  catch #7, Sarah/Aisha).\n- explain `RuleDef` entry under \"Architecture\" with plain-English fix\n  guidance; `CHECK_RULES.len()` bumped 22 -> 23.\n- all six report formats:\n  human/check.rs: `build_re_export_cycles_section` + Structure-category\n  hookup + summary-line \"re-export cycles\" and Re-Export Cycles row in\n  `print_check_summary`.\n  json.rs: count in `CheckSummary`, `suppression_kind_rank` arm at 10\n  (between circular-dependency at 9 and boundary-violation at 11).\n  sarif.rs: `sarif_re_export_cycle_fields` builder + rule registration\n  with helpUri pointing at `explanations/dead-code#re-export-cycles`.\n  compact.rs: emits `re-export-cycle:<first>:1:0:<chain>(self-loop)?`.\n  markdown.rs: Re-export-cycles section renders chain joined by `<->`\n  with `*(self-loop)*` italic tag.\n  codeclimate.rs: `push_re_export_cycle_issues` with kind-prefixed\n  fingerprint so self-loop and multi-node shapes hash distinctly.\n  ci/pr_comment.rs: `fallow/re-export-cycle` registered as\n  source-file-scoped (not project-level).\n\nlsp:\n- `push_re_export_cycle_diagnostics` emits one Diagnostic per member\n  file at line 1 col 0 (cycle is file-scoped; per-edge anchoring\n  deferred). Severity inherits from the resolved rule severity.\n- `DIAGNOSTIC_ISSUE_TYPES` extended with `re-export-cycle` so editor\n  clients can toggle it via `initializationOptions.issueTypes`.\n- `merge_results` and `dedup_results` paths cover the new field; the\n  dedup key includes the `kind` discriminant for the same self-loop\n  collision reason as the baseline key.\n\nmcp:\n- `(\"re-export-cycles\", \"--re-export-cycles\")` added to\n  `ISSUE_TYPE_FLAGS`; flag-count assertion bumped 18 -> 19.\n- `analyze` tool description prose updated with the explicit Kai wording\n  \"barrel files that form a structural loop, silently breaking\n  re-exports\".\n- `params.rs` `issue_types` doc comment extended.\n\ntypes/envelope:\n- `CheckSummary.re_export_cycles: usize` with `#[serde(default)]` so\n  pre-existing baselines and consumers parse unchanged.\n\ntests:\n- 5 per-format snapshot tests (json / sarif / compact / markdown /\n  codeclimate) drive a 2-finding fixture (one multi-node, one self-loop)\n  to lock the wire shape; sample_results gains one re-export-cycle so\n  every existing snapshot exercises the additive field too.\n- 4-arm alias round-trip test in config/rules.rs:\n  `re-export-cycle` / `re-export-cycles` / `reexport-cycle` /\n  `reexport-cycles` all deserialize to the same field (panel catch #10).\n- 4 fixtures under `tests/fixtures/re-export-cycle-{2-node,3-node,\n  self-loop,type-only}/` plus the matching integration test asserting\n  the cycle list is populated, the `kind` discriminator is correct, and\n  every finding ships with a non-empty `actions[]` (AC19); type-only\n  fixture also pins panel catch #9 (chain propagation is a no-op for\n  `export type *` cycles, so the finding still fires).\n\nDrift-guard / count bumps:\n- `KNOWN_RULE_NAMES`: 48 -> 52 (4 new alias name forms).\n- `KNOWN_ISSUE_KIND_NAMES`: matching bump.\n- `CHECK_RULES.len()`: 22 -> 23.\n- `ISSUE_TYPE_FLAGS.len()`: 18 -> 19.\n- `IssueKind::ReExportCycle` discriminant: 26 (next free after\n  `EmptyCatalogGroup = 25`).\n- `severity_for_kind` + stale-suppression kind-to-string map cover the\n  new variant.\n\nDefault severity stays `Warn` (user-confirmed): existing projects with\nlatent cycles don't get sudden CI failures on upgrade. Users opt into\n`error` via `rules.re-export-cycle: error`.\n\nRefs #515\n\n* feat(schema,action,ci,vscode): wire re-export-cycle into ci surfaces + tooling\n\nLands the remaining downstream surfaces for the #515 finding type after\nthe core/cli/lsp/mcp/types work in 62a54f26.\n\nschema:\n- regenerated docs/output-schema.json from the Rust source via the\n  fallow-schema-emit binary; new `re_export_cycles` arrays + summary\n  count + `ReExportCycleFinding` + `ReExportCycle` + `ReExportCycleKind`\n  + `refactor-re-export-cycle` FixActionType constant. All additions are\n  optional on the wire (`?`) so pinned consumers stay typecheck-clean.\n- regenerated editors/vscode/src/generated/output-contract.d.ts and\n  npm/fallow/types/output-contract.d.ts via codegen-types.mjs.\n- ajv strict=true passes; tsc --noEmit passes (covers panel catch #5b\n  in the additive-shape sense; the field is `?` so a pinned consumer\n  that doesn't reference it stays valid).\n\naction/ (GitHub Action):\n- summary-check.jq: new \"Re-export cycles\" table_row + section block\n  rendering chain joined by ` <-> ` plus a kind column.\n- summary-combined.jq: per-category count row gated on length > 0.\n- summary-audit.jq: audit-table row using the same chain format and\n  the `kind` discriminator as item.\n- annotations-check.jq: one ::warning per member file, with copy that\n  branches on `kind == \"self-loop\"` for the fix hint.\n- filter-changed.jq: `.re_export_cycles |= map(select(.files | any(in_changed)))`\n  retain + matching `(.re_export_cycles // [] | length) +` term in the\n  total_issues recalc block (panel catch #11).\n- fixtures patched via jq (not echoed wrappers, per the seed-by-patch\n  rule); `bash action/tests/run.sh` -> 238 passed.\n\nci/ (GitLab CI):\n- summary-check.jq, summary-combined.jq, summary-audit.jq: same shape\n  as the action/ jq.\n- HARD ACK: `grep -n total_issues ci/jq/` returns no\n  filter-changed.jq; the GitLab pipeline currently has no\n  changed-file filter. No total_issues recalc to mirror.\n- fixtures patched the same way; `bash ci/tests/run.sh` -> 222 passed.\n\neditors/vscode:\n- labels.ts: new `re-export-cycles` IssueCategory + \"Re-Export Cycles\"\n  label.\n- settings.ts: new `re-export-cycles: boolean` field on\n  IssueTypeConfig.\n- commands.ts: filter arm + summary count.\n- treeView.ts: tree node entry using the `sync-ignored` icon (visually\n  distinct from circular_dependencies' `sync`); the IssueItem label\n  branches on kind (Self-loop vs N files).\n- analysis-utils.ts: `re_export_cycles?.length ?? 0` added to the\n  total-issues sum.\n- statusBar-utils.ts: `reExportCycles: number` on\n  AnalysisCompleteParams + the buildParamsFromCli mapping + a\n  BreakdownLine row in STATUS_BAR_BREAKDOWN.\n- config.ts: default `re-export-cycles: true` in getIssueTypes.\n- diagnosticFilter.ts: bundled DIAGNOSTIC_CATEGORIES fallback row\n  matching the new LSP issue type so muting still works if the\n  `fallow/issueTypes` LSP request fails.\n- package.json: enabled in `fallow.issueTypes` default + a new\n  `re-export-cycles: boolean` property in the schema.\n- test fixture updated for AnalysisCompleteParams shape.\n- `pnpm lint` + `pnpm test` -> all 104 tests pass.\n- bundled dist/extension.js regenerated via prebuild + codegen.\n\nRefs #515\n\n* fix(audit,changed-since,types): close re-export-cycle attribution gaps from review\n\nAddresses BLOCK + CONCERN findings from the rust-reviewer and\ncli-output-reviewer Phase 4 audit.\n\nBLOCK fixes:\n\n1. Audit attribution trio (rust-reviewer): re_export_cycles was missing\n   from all three attribution surfaces in crates/cli/src/audit.rs, so a\n   newly-introduced re-export cycle would never set `introduced: true`\n   on the JSON, the `retain_introduced_dead_code` gate-filter would not\n   touch it, and `dead_code_keys` would undercount the verdict.\n   - `dead_code_keys`: new key block. Format `re-export-cycle:<kind>:<sorted-paths-joined-with-|>`\n     where kind is `multi-node` or `self-loop`, mirroring the baseline\n     `re_export_cycle_key` rationale (panel catch #7: prevent self-loop\n     vs single-file multi-node keyspace collision).\n   - `retain_introduced_dead_code`: matching `.retain` block.\n   - `annotate_dead_code_json`: matching `annotate_issue_array` call\n     under key `\"re_export_cycles\"`.\n\n2. Changed-since filter (rust-reviewer):\n   `crates/core/src/changed_files.rs::filter_results_by_changed_files`\n   had no retain block for re_export_cycles, so the `--changed-since`\n   path silently dropped every re-export-cycle finding regardless of\n   the changed file set. Added a retain mirroring the circular_deps\n   shape (any member file in the changed set keeps the cycle).\n\n3. Absolute-path leak in SuppressFile description (rust-reviewer +\n   json-output-reviewer; both flagged BLOCK):\n   `ReExportCycleFinding::with_actions` was embedding raw\n   `PathBuf::display().to_string()` paths into the SuppressFile\n   `description` string. The CLI's `strip_root_prefix` post-pass only\n   strips strings that START with the prefix; the description text\n   starts with \"Suppress with...\" so absolute machine paths were\n   leaking into the JSON `description` field on every multi-node\n   cycle.\n   Fix: the description no longer embeds member paths. Consumers\n   needing the member list read the sibling `files` array; the new\n   wording points them there explicitly.\n\nCONCERN fixes:\n\n4. Docs URL noise in human output (cli-output-reviewer): every\n   re-export-cycle entry rendered its own\n   `https://fallow.tools/explanations/dead-code#re-export-cycles`\n   trailer. No other section in `report/human/check.rs` repeats the\n   docs URL per item; the SARIF helpUri already covers tool-driven\n   navigation. Dropped the per-item URL.\n\n5. Compact `:1:0:` placeholder (cli-output-reviewer): the line was\n   `re-export-cycle:<file>:1:0:<chain>` even though the finding is\n   file-scoped (no real line/col exists). The convention for other\n   file-scoped issues (`unlisted-dep`, `duplicate-export`) omits\n   line/col entirely. Aligned to `re-export-cycle:<file>:<chain>`.\n\nNotes on a rust-reviewer recommendation we did NOT take:\n\nThe reviewer suggested adding `!has_overrides` symmetry guard to\n`has_error_severity_issues` for re_export_cycle, parallel to\ncircular_dependencies. The guard exists for circular_dependencies\nbecause the file-scoped block above re-resolves circular_dependencies\nseverity per-cycle-member-path. Re-export-cycle is intentionally NOT\nfile-scopable (`overrides.rules.re-export-cycle` is a no-op per\n`crates/config/src/config/resolution.rs`), so it is NOT included in\nthe file-scoped block. Adding the `!has_overrides` guard would\nsilently mute re_export_cycle errors whenever an override exists for\nany unrelated rule — the opposite of the reviewer's intent.\nDocumented in a comment at the call site so the asymmetry doesn't\nlook like a bug.\n\nLSP unit tests (lsp-reviewer CONCERN):\n\nAdded two tests to crates/lsp/src/diagnostics/structural.rs:\n- `re_export_cycle_multi_node_emits_one_diagnostic_per_member`: pins\n  the one-diagnostic-per-member behavior (deliberate divergence from\n  circular-dep which emits one per cycle), the helpUri anchor, the\n  message format, the related_information skip-self, and the file-\n  scoped line/col (0,0).\n- `re_export_cycle_self_loop_emits_self_loop_message_and_no_related_info`:\n  pins the singularized \"1 file\" copy and the self-loop fix hint, and\n  that single-member findings emit no related_information.\n\nRefs #515\n\n* fix(action,ci): consolidate re-export-cycle annotation + strip bogus fixture summary\n\nTwo fixes from github-action-reviewer Phase 4 CONCERN:\n\n1. Annotation fan-out budget (action/jq/annotations-check.jq line 45-47).\n   The previous implementation emitted one ::warning per member file for\n   each cycle, so a 6-file cycle would burn 6 of GitHub's 10 annotations-\n   per-step budget on a single finding. Aligned with the circular-\n   dependency pattern at line 44: emit ONE annotation per cycle,\n   anchored at $files[0]. The annotation body still names every member\n   so the user sees the full chain; the diff between the two patterns\n   is purely the annotation-count fan-out, not the displayed info.\n   (LSP keeps per-member diagnostics; the jump-to-any-file UX makes\n   sense in an editor's Problems panel but is the wrong tradeoff against\n   GitHub's hard annotation cap.)\n\n2. Self-loop fixture gap. check.json carried only a multi-node entry,\n   so the self-loop arm of the jq `if $kind == \"self-loop\"` branch in\n   annotations-check.jq line 47 was untested. Added a second\n   re_export_cycles entry with kind=\"self-loop\" via jq patch.\n\nAlso: stripped a bogus `.summary` object I inadvertently added to all 8\naction/ci fixtures in the earlier J/K commits. The real CLI envelope's\ntop-level `summary` is computed elsewhere and the jq scripts read\ndirectly from the array fields; the patched `.summary` object only ever\nheld a stub `re_export_cycles` count that no script consumed.\n\n`bash action/tests/run.sh` -> 238 passed.\n`bash ci/tests/run.sh` -> 222 passed.\n\nRefs #515\n\n* docs: re-export-cycle finding type — CHANGELOG, detection rules, AGENTS issue tokens\n\nPhase 5 in-repo documentation for #515. Captures the user-visible\ncontract of the new `re-export-cycle` finding so consumers reading\nCHANGELOG / AGENTS / detection.md understand the surface ahead of\nthe companion-repo docs update (fallow-docs + fallow-skills).\n\nCHANGELOG.md (Unreleased > Added):\n- New entry leading with the finding's role: lifts the upfront SCC\n  pass added in #442 from `tracing::warn!` into a structured\n  AnalysisResults finding with `files`, `kind` (`multi-node` /\n  `self-loop`), and a typed `actions[]` array. Names the explicit\n  CLI flag (`--re-export-cycles`), default severity (`Warn`), four\n  config aliases, suppression form, panel-catch wording (\"barrel\n  files that form a structural loop, silently breaking re-exports\")\n  in the MCP description, and the heads-up note about `total_issues`\n  showing a step change on the first run after upgrade (panel catch\n  from Marcus). Cache version is intentionally NOT bumped.\n\n.claude/rules/detection.md (`export *` chain propagation bullet):\n- Extended the existing #442 bullet to point at the new\n  user-visible surface. Documents BOTH paths surfacing in parallel:\n  `tracing::warn!` for RUST_LOG=warn discoverability AND the typed\n  `AnalysisResults.re_export_cycles` finding. Names the four\n  suppression alias spellings, the file-scoped semantics\n  (`overrides.rules.re-export-cycle` is a no-op), and the type-only\n  cycle behavior (still fires).\n\nAGENTS.md:\n- Added `--re-export-cycles` to the dead-code issue-type filter\n  list.\n- Added `re-export-cycle` to the issue-type tokens list.\n\nDid NOT touch:\n- `.claude/rules/cli-crate.md` (no per-flag enumeration to extend).\n- `.claude/rules/mcp-server.md` (tool count unchanged; per-tool\n  description was already updated in 62a54f26).\n- `docs/backwards-compatibility.md` (the stable-list is global\n  flags only, no per-issue-type filter table to extend).\n- `docs/output-schema.json` (regenerated in c9a4bf2d).\n\nRefs #515\n\n* docs(schema): regenerate root config-input schema for re-export-cycle rule\n\nCatches the root `schema.json` regen that was missed in the #515\nimplementation. This is the config-input schema (powers\n`.fallowrc.json` IDE autocomplete and ships verbatim in the npm\npackage), distinct from `docs/output-schema.json` (output envelope,\nalready regenerated in c9a4bf2d). The root file has no CI drift gate\n(`project_schema_json_no_drift_gate.md`), so the gap survived through\nPhase 5 docs and was caught by `/fallow-review`.\n\nDiff:\n- `RulesConfig` default map: `\"re-export-cycle\": \"warn\"` so editors\n  show the live default when a user creates a fresh `.fallowrc.json`.\n- `RulesConfig` schema property `\"re-export-cycle\"` referencing\n  `#/$defs/Severity` with `default: \"warn\"`.\n- `PartialRulesConfig` (per-file overrides) arm `\"re-export-cycle\"`\n  with the same `Severity | null` anyOf shape every sibling carries.\n  Per-file overrides for re-export-cycle are documented as no-ops at\n  runtime (the cycle spans multiple files), but the schema still\n  needs to accept the key to avoid an editor \"unknown property\"\n  squiggle on a config the resolver gracefully ignores.\n- `RegressionBaseline.counts` schema: `reExportCycles` integer with\n  `default: 0` matching the rest of the per-issue-type counts.\n\nRegenerated via `cargo run --bin fallow -- config-schema`. Diff is\npurely additive (no field renames or removals). Existing\n`.fallowrc.json` files validate unchanged.\n\nRefs #515\n\n* fix(codegen,docs): export bare ReExportCycle alias + extend stable issue-type list\n\nTwo follow-ups from the /fallow-review verdict that would have leaked\ninto the npm release if not caught:\n\n1. `editors/vscode/scripts/codegen-types.mjs::BARE_DEAD_CODE_ALIASES`\n   was missing the `ReExportCycle` entry. Because\n   `ReExportCycleFinding` uses `#[serde(flatten)] cycle: ReExportCycle`,\n   json-schema-to-typescript dedupes the parent type away (the same\n   pattern documented in `project_serde_flatten_ts_codegen_dedupes`),\n   so the bare `ReExportCycle` interface never appeared in\n   `npm/fallow/types/output-contract.d.ts`. External consumers doing\n   `import type { ReExportCycle } from \"fallow/types\"` would have\n   failed at type-check while every sibling bare alias\n   (`CircularDependency`, `BoundaryViolation`, `DuplicateExport`, ...)\n   worked. Adding the alias entry, regenerating both committed TS\n   contracts; `pnpm run check:codegen` clean.\n\n2. `docs/backwards-compatibility.md:20` stable issue-type-arrays list\n   was missing `re_export_cycles`. Adding it keeps the list authoritative\n   for SemVer / backwards-compat reasoning (the array follows the same\n   wire-shape stability contract as every sibling: skip-serializing-if-\n   empty so absence is the default, additive optional field so\n   schema_version does not bump).\n\nThe /fallow-review noted both as FIX FIRST: (1) is a real consumer\nbreak the npm release would have shipped; (2) is a docs-truth gate.\nBoth land before the fallow PR opens so the npm types and the\nbackwards-compat doc agree with the wire shape on day one.\n\nRefs #515",
          "timestamp": "2026-05-21T17:58:36+01:00",
          "tree_id": "ade3e118b72c66c9f49499197e544e06c8444b9d",
          "url": "https://github.com/fallow-rs/fallow/commit/3e8f66272385783858d138445678968cb31c6119"
        },
        "date": 1779382916508,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5120154,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27579,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 713027,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6798,
            "unit": "allocations"
          }
        ]
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
          "id": "ba5885547ea36666b3722639c9cba570e94fba1f",
          "message": "feat(review): evolve review-{github,gitlab} envelope to v2\n\n* feat(review): evolve review-{github,gitlab} envelope to v2\n\nCloses #528.\n\nAdds five additive fields to ReviewEnvelopeOutput plus one independent\ncorrectness fix for GitLab inline comments on renamed files. v1 readers\nare unaffected (additive shape); v2 readers populate the new fields and\nrecognize the new marker shape.\n\n- ReviewEnvelopeSchema::V2 (\"fallow-review-envelope/v2\") bumped because\n  comments[] is no longer 1:1 with findings (same-line merging) and the\n  fingerprint-marker shape changed. v1 retained on the enum for read-\n  side back-compat.\n- summary: { body, fingerprint } at root. Body is byte-identical to the\n  legacy top-level body field; fingerprint is FNV-1a(body). Consumers\n  upsert a single sticky PR/MR summary by marker reconciliation without\n  invoking fallow twice.\n- marker_regex at root. Stable\n  (?m)^<!-- fallow-fingerprint:v2: ((?:[a-z]+:)?[0-9a-f]{16}) -->\\s*$\n  consumers grep + capture against. Works in Rust regex and JS ES2018\n  via the inline (?m) flag, no flag-awareness on consumer side. The\n  :v2: magic-byte segment prevents v1 marker collision and reduces\n  user-paste spoofing.\n- Same-(path, line) merging in comments[] with a two-tier fingerprint\n  contract: primary fingerprint = linecomp:<16-hex of path:line>\n  stable across runs, plus constituent_fingerprints: Vec<String>\n  carrying the per-finding fingerprints. (Reverted to hashed-composite\n  in a follow-up commit; see the next fix(review) entry.)\n- UTF-8-safe body truncation at 65,536 bytes (conservative floor under\n  GitHub's 65,536-char limit; GitLab is 1,000,000 chars per\n  https://docs.gitlab.com/administration/instance_limits/). Three\n  signals: typed truncated: bool field, inline <!-- fallow-truncated -->\n  HTML marker, and human \"... (truncated)\" text. Char-boundary safe.\n- DiffIndex.rename_pairs (head_path -> base_path) populated from\n  rename from / rename to extended-diff headers. Threaded through\n  render_review_envelope to render_merged_comment; GitLab position\n  block's old_path now carries the base-side filename for renamed\n  files. Wire-correctness bug fix valid under v1 schema too; ships\n  together for one-PR atomicity.\n\nReconcile-review (fallow ci reconcile-review) gains\nextract_fallow_fingerprint() helper that accepts both v1 and v2 marker\nshapes so consumers migrating from v1 captures continue to reconcile.\n\nSchema regenerated: ReviewEnvelopeSummary added to\ndocs/output-schema.json definitions; new fields in\nReviewEnvelopeOutput, GitHubReviewComment, GitLabReviewComment.\nTypeScript types regenerated in editors/vscode/src/generated/ and\nnpm/fallow/types/.\n\nOut of scope (deferred):\n\n- TS pipeline steps for per-file unused-export grouping, per-group\n  clone-instance dedup, and refactoring-target drops.\n- New CLI flag for --max-comments paralleling FALLOW_MAX_COMMENTS.\n- Body byte-cap as a configurable knob.\n\n* fix(review): make vendor shell scripts accept v2 envelope shape\n\nBundled action/scripts/review.sh and ci/scripts/review.sh gated on\n.meta.schema == \"fallow-review-envelope/v1\" exactly, so the v1->v2\nschema bump silently breaks the entire posting step: render_with_fallow\nreturns 1, the if-guard skips the POST loop, no inline comments are\nposted, and the workflow exits 0 with only a warning in the log.\nCompound regression: the sed-based dedup fingerprint extractor matches\n`fallow-fingerprint: ` (with space) which is wrong for the v2 marker\nshape (`fallow-fingerprint:v2:` with no space before the namespace);\nv2 markers had captured `v2:` as the fingerprint, breaking dedup\nidempotency on re-runs.\n\nBoth shell scripts now accept any `fallow-review-envelope/v<N>` schema\nvia `test(\"^fallow-review-envelope/v[0-9]+$\")`. The sed dedup extracts\nfingerprints from both v1 and v2 marker shapes (v2 first to avoid the\nv1 substring capturing `v2:`), sort -u to dedupe in case a single\ncomment carries both. ci/scripts/review.sh is symlinked into\ncrates/cli/templates/ci/ so the bundled drift gate stays green.\n\nThree follow-up cleanups folded in:\n\n- output_envelope.rs::is_false drops the spurious clippy #[expect] in\n  favor of #[allow] (trivially_copy_pass_by_ref is pedantic-only and\n  fires inconsistently across build configurations, which would trip\n  unfulfilled_lint_expectations under #[expect]; project convention in\n  .claude/rules/code-quality.md is #[allow] with reason for\n  pedantic-only lints).\n- truncation breadcrumb in review.rs::TRUNCATION_SUFFIX moves from\n  `... (truncated)` plain prose to `> Body truncated by fallow.`\n  blockquote, matching the existing `> Run fallow fix --files...`\n  convention in suggestion.rs so the breadcrumb reads as fallow\n  speaking rather than as truncated content. Co-presence invariant\n  with `truncated: bool` and `<!-- fallow-truncated -->` HTML marker\n  spelled out in the doc comment.\n- GitHub + GitLab comment `truncated` doc comments document the\n  three-signal invariant explicitly (typed bool authoritative, HTML\n  marker + blockquote always co-present).\n\nSchema regenerated + TS codegen regenerated (no breaking changes;\nonly description-string updates on `truncated` fields).\n\n* docs(review): document v2 envelope evolution\n\nCHANGELOG.md [Unreleased] gains a bold one-liner under Changed for\nthe issue #528 review-envelope v2 migration, covering all five\nadditive surface changes (summary block, marker_regex, same-line\nmerging with stable linecomp:<...> primary fingerprint plus\nconstituent_fingerprints array, UTF-8-safe body truncation with\nco-present truncated/HTML-marker/blockquote signals, GitLab\nposition.old_path for renamed files) and the v1/v2 marker\nrecognition in both the bundled reconcile-review subcommand and the\nGitHub Action + GitLab CI template scripts.\n\n(The CHANGELOG entry is corrected in the follow-up fix(review)\ncommit when same-line merging is reverted to hashed-composite.)\n\n.claude/rules/cli-crate.md adds an entry for report/ci/review.rs\ncovering the render pipeline shape (group_by_path_line then\nrender_merged_comment, body truncation byte budget, GitLab old_path\nplumbing via DiffIndex.rename_pairs) and tightens the ci.rs entry to\ndocument the extract_fallow_fingerprint v2-first ordering plus the\nschema-version regex used by the bundled shell scripts. So future\nimplementers don't re-litigate the marker shape or v1->v2 fingerprint\nextraction ordering when extending this surface.\n\nThe fallow-docs CI section was updated in the companion repo\n(fallow-rs/docs@0504e8d) in the same drop.\n\nCompanion to fallow-rs/fallow#528.\n\n* fix(review): use hashed-composite fingerprint for merged comments\n\nReplaces the prior per-line stable identity (linecomp:<hash of path:line>)\nplus secondary constituent_fingerprints array with a single hashed-\ncomposite primary fingerprint: merged:<16-char hash of sorted\nconstituent fingerprints>. Single-finding comments keep the bare v1-\nstyle fingerprint. The constituent_fingerprints field is dropped from\nboth GitHubReviewComment and GitLabReviewComment.\n\nThe motivation: the bundled wrappers (action/scripts/review.sh,\nci/scripts/review.sh) and `fallow ci reconcile-review` dedupe on the\nprimary fingerprint only. Under the prior stable-linecomp design that\nmeant a merged comment whose constituent findings changed kept showing\nstale content forever (primary fingerprint unchanged so skip-if-exists\nsilently skipped the re-post). Under hashed-composite the primary\nfingerprint changes when constituents change, so the existing\nskip-if-exists logic correctly re-posts on content change.\n\nConsumers that need true update-in-place reconciliation (preserve\nreviewer reply threads across content changes) implement their own\nidentity tracking via marker_regex and the vendor edit endpoints\n(`PATCH /pulls/comments/{id}` on GitHub, `PUT /discussions/.../notes/\n{note_id}` on GitLab). The bundled scripts intentionally do not pay\nthat cost; the auth scopes, retry semantics, and edit-on-resolved-\nthread 422 handling are non-trivial.\n\nAlso clarifies the ReviewEnvelopeSummary::fingerprint docstring:\nthe FNV-1a hash is computed over the summary body BEFORE the trailing\nfallow-fingerprint marker line is appended (the marker contains the\nfingerprint, so the fingerprint cannot depend on the marker without\ncircularity). Consumers verifying from summary.body strip the line\nmatching marker_regex and hash the remainder.\n\nCompanion fallow-docs commit: fallow-rs/docs@8918062.\n\nOut of scope (unchanged): bundled shell scripts, ci.rs envelope\nreconciliation, marker shape, truncation contract, rename-pair plumbing.\nTouches output_envelope.rs, fingerprint.rs, review.rs, ci.rs (doc\nupdate), docs/output-schema.json (regen), TS codegen (regen),\nsnapshots, CHANGELOG, .claude/rules/cli-crate.md.\n\nRefs #528.\n\n* fix(review): split marker_regex from marker_regex_flags for JS compat\n\nThe v2 contract claim that the marker regex \"works in both Rust regex\nand JavaScript ES2018 RegExp without flag-awareness on the consumer\nside\" was wrong: JavaScript RegExp rejects the standalone `(?m)`\ninline flag group with `SyntaxError: Invalid regular expression ...\nInvalid group`. Verified by `node -e 'new RegExp(\"(?m)foo\")'` against\nNode 22.\n\nThe envelope now emits two fields:\n\n- `marker_regex`: anchored pattern WITHOUT `(?m)` baked in:\n  `^<!-- fallow-fingerprint:v2: ((?:[a-z]+:)?[0-9a-f]{16}) -->\\s*$`\n- `marker_regex_flags`: `\"m\"` so the anchored `^` / `$` match per-line\n  inside multi-line comment bodies.\n\nConsumers pass both to their regex engine:\n\n- JS: `new RegExp(env.marker_regex, env.marker_regex_flags)`\n- Rust: `RegexBuilder::new(&pat).multi_line(true).build()`\n\nVerified in Node: the new pattern + `m` flag compiles, matches a\nmarker on its own line, and rejects a marker pasted mid-line\n(anti-spoofing intact).\n\nSchema, TS codegen, and snapshots regenerated. CHANGELOG + cli-crate\nrule updated to describe the two-field contract. Companion fallow-docs\ncommit `fallow-rs/docs@2e1497b` updates the documented wire example,\nJS/Rust construction snippets, and consumer-side reconciliation\nexample.\n\nRefs #528.",
          "timestamp": "2026-05-21T18:20:39+01:00",
          "tree_id": "57119969498c6d84346cf8a5ccfbb6fb534ca3d3",
          "url": "https://github.com/fallow-rs/fallow/commit/ba5885547ea36666b3722639c9cba570e94fba1f"
        },
        "date": 1779384225794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5118818,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27572,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 712539,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6794,
            "unit": "allocations"
          }
        ]
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
          "id": "ce9f2b1ec960d1792bef6c0d7c60ac223493cc9f",
          "message": "chore(fix): rename test comment to describe BOM-preservation invariant\n\nThe test comment on `staged_content_round_trip_through_second_fixer_preserves_bom`\nreferenced the review-process source of the invariant (\"per panel\nfeedback\") instead of the substantive property being asserted (BOM\npreservation across the staged-content fast path). Rename the comment\nto describe the invariant directly so the public source on GitHub\nreads as a self-contained assertion of the behavior, not a pointer to\ninternal review notes.\n\nMirrors the discipline added in `.claude/skills/fallow-implement` Phase\n4d: internal review nomenclature (\"panel BLOCK 1\", \"panelist 3 caught\",\n\"panel feedback\") must not leak into shipped source comments or test\nassertions; the comment should name the property being asserted and\nthe location where it is enforced, not the review step that\nidentified it.\n\nNo behavioral change. Existing test passes unchanged.",
          "timestamp": "2026-05-21T18:28:30+01:00",
          "tree_id": "590b96e01ba59904fb2b66154deb0903a7879803",
          "url": "https://github.com/fallow-rs/fallow/commit/ce9f2b1ec960d1792bef6c0d7c60ac223493cc9f"
        },
        "date": 1779384640143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5083122,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27561,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 662959,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6294,
            "unit": "allocations"
          }
        ]
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
          "id": "fed4b483dd1cbba8c1f55dcfe5b9599c389f95a8",
          "message": "chore: release v2.77.0",
          "timestamp": "2026-05-21T19:42:46+02:00",
          "tree_id": "1f9b319f425e05d1da67a05a3cdf791363e2fc06",
          "url": "https://github.com/fallow-rs/fallow/commit/fed4b483dd1cbba8c1f55dcfe5b9599c389f95a8"
        },
        "date": 1779385769057,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5091802,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27580,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711059,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
            "unit": "allocations"
          }
        ]
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
          "id": "b16f3cdf097edf08def56aef0584d12160135067",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.77.0",
          "timestamp": "2026-05-21T21:07:36+02:00",
          "tree_id": "9e30bd688dac06bc66a225b18893caf378beb1fd",
          "url": "https://github.com/fallow-rs/fallow/commit/b16f3cdf097edf08def56aef0584d12160135067"
        },
        "date": 1779390583086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5104426,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27576,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 710595,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6794,
            "unit": "allocations"
          }
        ]
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
          "id": "6303864bf02c45bd1f9b7c3dceae7f6b4d89533d",
          "message": "fix(cli): classify POSIX-style absolute paths as absolute on Windows\n\n* fix(cli): classify POSIX-style absolute paths as absolute on Windows\n\n`Path::is_absolute()` returns false on Windows for POSIX-style paths\nlike `/project/foo.ts` (Windows requires `C:\\foo` or a UNC root). Five\ncall sites in `crates/cli/src/` gated on `Path::is_absolute()` directly,\nso cross-platform user-supplied paths (CiIssue.path deserialized from\nJSON output on a Unix host, --diff-file/--file CLI flags in a CI config\nshared across runners, audit baseline path in .fallowrc.json, source\nmap content authored on any OS) leaked through as \"relative\" on Windows\nand downstream logic produced wrong results. Surfaced by 13 test\nfailures on the new push-to-main Windows CI matrix leg from #447.\n\nNew crates/cli/src/path_util.rs exposes is_absolute_path_any_platform\nwhich recognises host absolute (via Path::is_absolute), POSIX-style\nroot (via Component::RootDir which matches `/foo` on both platforms),\nand Windows-style drive prefix (via byte-level scan of OsStr encoding\nso Unix hosts classify `C:/foo` source-map content correctly too). The\nexisting looks_like_windows_absolute_path helper in coverage.rs is\nlifted into the same module.\n\nWired into relative_to_diff_path (the original 13-test root cause),\nresolve_audit_baseline_path, resolve_source_map_base, the --file\nfilter in check/mod.rs, and supersedes the local helper in coverage.rs.\nrelative_to_diff_path now strip_prefix-first regardless of platform,\nfalling back on the helper only for the outside-root early-return.\n\nSix new path_util unit tests cover POSIX root, Windows drive, relative\nshapes, host absolute via current_dir, the &str variant, and a\nPathBuf round-trip from a Windows drive-prefixed string. All 13\npreviously-failing Windows tests pass under the new logic; Ubuntu and\nmacOS behaviour is unchanged.\n\nFixes #545.\nRefs #447.\n\n* chore(cli): replace 'mis-classify' with 'misclassify' to satisfy typos\n\nThe previous fix(cli) commit lost the typos-fix Edits between Edit-buffer\nand stash-pop merge during the pre-commit cycle. typos rejects `mis` as\nan unknown word when separated by hyphen; the merged form passes the\ngate.",
          "timestamp": "2026-05-21T21:10:02+01:00",
          "tree_id": "e7013f68a0750b755d34cea8aed92290268786fc",
          "url": "https://github.com/fallow-rs/fallow/commit/6303864bf02c45bd1f9b7c3dceae7f6b4d89533d"
        },
        "date": 1779394335758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5103466,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27595,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708883,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
            "unit": "allocations"
          }
        ]
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
          "id": "02dc1cccb62b7b55ccb94904f91fdad960503fb1",
          "message": "fix(cli): classify POSIX-style absolute paths in health diff filter on Windows\n\nFollow-up to PR #548 (the #545 main fix). The Windows CI matrix run on\n`6303864b` showed 6 health::* test failures remained after the\ncheck-side fix: `crates/cli/src/health/mod.rs` carried a near-duplicate\n`relative_to_root` helper with the same `Path::is_absolute()` gate bug,\nand `retain_hot_paths_in_change_scope` applied the same gate to\n`hot_path.path` before joining against the root.\n\nBoth sites are now routed through the shared `crate::path_util`\nhelpers introduced in PR #548. `relative_to_root` adopts the\nstrip_prefix-first shape that mirrors\n`report::ci::diff_filter::relative_to_diff_path`, so POSIX-style\nabsolute paths in cross-platform CI configs (or deserialized from JSON\noutput authored on a Unix host) classify correctly on Windows.\n\nAll 6 previously-failing tests pass under the new logic on Ubuntu;\nthe Windows CI matrix on push to main will be the empirical\nconfirmation.\n\nRefs #545.",
          "timestamp": "2026-05-21T21:22:45+01:00",
          "tree_id": "a1db6d1b65fd722830f01a52197d2d674b583b74",
          "url": "https://github.com/fallow-rs/fallow/commit/02dc1cccb62b7b55ccb94904f91fdad960503fb1"
        },
        "date": 1779395106907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5140098,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27595,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 714739,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
            "unit": "allocations"
          }
        ]
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
          "id": "8ee61a22454a80a815b04b53d34616b41f8a6370",
          "message": "fix(cli): normalise fallow-cov sidecar request paths to forward slashes\n\n`crates/cli/src/health/coverage.rs::build_request` emitted\n`static_findings.files[].path` via `relative.to_string_lossy().into_owned()`,\nwhich preserves backslashes on Windows checkouts. The sidecar JSON\nwire format must be host-OS-independent (a sidecar or downstream\nconsumer can run on a different machine), so the path now goes\nthrough `.replace('\\\\\\\\', \"/\")` to match the existing convention in\n`report::ci::diff_filter::relative_to_diff_path` and\n`health::mod::relative_to_root`.\n\nCloses the last Windows-only test failure observed on the push-to-main\nCI matrix after PR #548 + #551 (13 -> 6 -> 1 -> 0).\n\nRefs #545.",
          "timestamp": "2026-05-21T21:42:45+01:00",
          "tree_id": "d55a1ddf02c24ff3f3623ea8d4e5a4e91400fcaf",
          "url": "https://github.com/fallow-rs/fallow/commit/8ee61a22454a80a815b04b53d34616b41f8a6370"
        },
        "date": 1779396278076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5105042,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27559,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 674388,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6371,
            "unit": "allocations"
          }
        ]
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
          "id": "936fee7235c98eb460b9726c90ca418cdce6fe03",
          "message": "fix(cli): group top-level help commands",
          "timestamp": "2026-05-21T23:45:56+02:00",
          "tree_id": "8334c179a9f5e820c0ea25d8959ad8c474100b87",
          "url": "https://github.com/fallow-rs/fallow/commit/936fee7235c98eb460b9726c90ca418cdce6fe03"
        },
        "date": 1779400119320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5112666,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27587,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711075,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6797,
            "unit": "allocations"
          }
        ]
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
          "id": "2d26dc151e1416fb46f3103da9df1d6326ae257e",
          "message": "fix(audit): normalise Windows verbatim path prefix in relative_key_path\n\n`crates/cli/src/audit.rs::relative_key_path` stripped the project root\nfrom each finding path before building the BASE-vs-HEAD intersection\nkey. On Windows, `config.root` (often canonicalised via\n`std::fs::canonicalize`, which adds the `\\\\?\\` verbatim prefix) and\n`finding.path` (constructed from the BASE worktree's\n`std::env::temp_dir()` join, which does NOT) disagreed on prefix\nshape; `strip_prefix` silently fell through to the un-stripped path,\nHEAD keys landed as `src/foo.ts` while BASE keys landed as\n`C:/Users/.../Temp/fallow-audit-base-xxx/src/foo.ts`, and the\nintersection was empty.\n\nResult on the push-to-main Windows CI matrix: 8 audit integration\ntests in `crates/cli/tests/audit_tests.rs` reported 0 pre-existing\nfindings where 5+ were expected, because every inherited finding\nlanded as \"introduced\".\n\nFix: route both inputs through `dunce::simplified` before\n`strip_prefix`. `dunce::simplified` strips the `\\\\?\\` verbatim prefix\nwithout touching the filesystem; on POSIX it is a no-op so there is\nno behaviour change off-Windows.\n\nFixes #561.\nRefs #447, #545.",
          "timestamp": "2026-05-21T22:49:13+01:00",
          "tree_id": "3cdcb113204c9b8ae47f0ea7f8023e626cbc77e0",
          "url": "https://github.com/fallow-rs/fallow/commit/2d26dc151e1416fb46f3103da9df1d6326ae257e"
        },
        "date": 1779400300464,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5098946,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27574,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711023,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6797,
            "unit": "allocations"
          }
        ]
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
          "id": "fb814dac1f7fcb483768f923c200c3ccec6c7c49",
          "message": "fix(cli): render workspace-relative paths in nudge and rollup lines\n\n* fix(cli): render workspace-relative paths in nudge and rollup lines\n\nReplace four human-output sites that previously rendered bare basenames\nvia `path.file_name()` with workspace-relative paths via a new\n`format_display_path` helper in `report/mod.rs`. Affects:\n\n- combined-mode failure footer (\"start with index.ts\" becomes \"start\n  with apps/server/src/index.ts\").\n- combined-mode refactoring-targets nudge.\n- Angular component rollup template path in the health rollup line.\n- inherited-from owner display on CRAP-coverage suffix.\n\nIn Nx / Angular / Rust workspaces, many files share basenames like\n`index.ts`, `mod.rs`, `*.component.ts`. Bare basenames cannot identify\nthe intended file, so the nudge tells users nothing actionable.\nWorkspace-relative paths resolve the ambiguity in a single uniform\nshape across all four sites, matching knip / ts-prune / depcheck.\n\nJSON, SARIF, CodeClimate, and MCP output already serialize full paths\nand are unchanged.\n\nFixes #547\n\n* docs(changelog): note workspace-relative paths in nudge / rollup / inherited-from\n\nAdds the [Unreleased] entry for #547 covering the four human-output\nsites whose bare-basename rendering was replaced with project-relative\npaths.",
          "timestamp": "2026-05-21T23:02:02+01:00",
          "tree_id": "b7336b749be8b697745aa29c713826edd66d08d5",
          "url": "https://github.com/fallow-rs/fallow/commit/fb814dac1f7fcb483768f923c200c3ccec6c7c49"
        },
        "date": 1779401064063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5104034,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27577,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 710323,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6790,
            "unit": "allocations"
          }
        ]
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
          "id": "b3b1ae8a68f99860c2304953c362e0b7ec749e10",
          "message": "chore(cli): route dupes + health file headers through format_display_path\n\nFollow-up to #547. Two human-output sites (`dupes.rs:240`,\n`health.rs:861`) still rendered file paths via\n`relative_path(...).display().to_string()` without forward-slash\nnormalisation, so on Windows the dupes section and the complexity\nfindings file header emitted backslashes while the four #547 sites\nemitted forward slashes within the same combined run. Routing both\nsites through the shared `format_display_path` helper closes the\ncross-line inconsistency without changing macOS or Linux output. No\nJSON / SARIF / CodeClimate / MCP shape changes.\n\nSurfaced by the cli-output-reviewer pass on #547 as a non-blocking\nfollow-up.",
          "timestamp": "2026-05-21T23:09:41+01:00",
          "tree_id": "4ac2d1de841155d0fc85ff14d210933dc66ab3bf",
          "url": "https://github.com/fallow-rs/fallow/commit/b3b1ae8a68f99860c2304953c362e0b7ec749e10"
        },
        "date": 1779401587791,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5143818,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27598,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 713027,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6798,
            "unit": "allocations"
          }
        ]
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
          "id": "ac09e464b7f835bb9babc3b542f8c442c4018510",
          "message": "fix(extract): record real source positions on CSS Modules exports\n\nextract_css_module_exports emitted Span::default() (start=0, end=0) on\nevery ExportInfo, so downstream compute_line_offsets resolved every\n.module.css and .module.scss unused-export finding to line:1 col:0\nregardless of where the class actually appeared in the file. LSP go-to\ndefinition jumped to the file header, SARIF regions all anchored at\nline 1, and the --diff-file line-overlap classifier never intersected\nreal diff hunks because every CSS-Modules finding looked like it lived\non line 1.\n\nThe four pre-existing strip passes (block comments, SCSS line comments,\nquoted strings plus url(...), and the @layer / @import prelude strip\nadded in #540) now replace each match with ASCII spaces of equal byte\nlength instead of collapsing the range, so CSS_CLASS_RE capture offsets\nin the masked buffer index 1:1 back into the original source. Each\nemitted ExportInfo carries Span::new(start, end) pointing at the bare\nclass identifier (no leading dot), matching how oxc spans identifiers\nelsewhere in the codebase. The function signature gains is_scss: bool\nso the SCSS-line-comment strip only fires for .module.scss; the lone\nin-tree callers (parse_css_to_module, the fuzz target, the fallow-core\nre-export) move with it.\n\nCACHE_VERSION bumps 90 to 91 because cached ExportInfo.span payloads\nchange shape from default to real offsets; warm caches invalidate on\nupgrade and re-extract CSS-Modules files on first run.\n\nFixes #549.",
          "timestamp": "2026-05-21T23:22:03+01:00",
          "tree_id": "6ba61e41584664b0cf6c3b7e42297f4ab30bd1f4",
          "url": "https://github.com/fallow-rs/fallow/commit/ac09e464b7f835bb9babc3b542f8c442c4018510"
        },
        "date": 1779402249392,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5149506,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27600,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 715203,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6798,
            "unit": "allocations"
          }
        ]
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
          "id": "19b761ef61cc7f7bc6f0a7c12d1915e4bf90a289",
          "message": "fix(audit): sweep std::fs::canonicalize to dunce in audit.rs production sites\n\nFollow-up to PR #566. The earlier fix to `resolve_git_toplevel` closed\nthe changed_files mismatch but the next Windows CI run surfaced 3\naudit unit tests that still fail with assertion panics:\n\n- `audit_dupes_only_materializes_groups_touching_changed_files`:\n  \"changed file should still match unchanged duplicate code\"\n- `audit_gate_new_only_inherits_pre_existing_duplicates_in_focused_files`:\n  \"current run should detect the pre-existing duplicate\"\n- `audit_gate_new_only_skips_base_snapshot_for_docs_only_diff`:\n  \"assertion failed: result.base_snapshot_skipped\"\n\nRoot cause: four other production sites in `crates/cli/src/audit.rs`\nstill used `std::fs::canonicalize`, each producing a `\\\\?\\C:\\...`\nverbatim path on Windows that mismatched against non-verbatim paths\nfrom other code paths. Sites switched to `dunce::canonicalize`:\n\n- `can_reuse_current_as_base::canonical_cache_dir` (load-bearing for\n  the docs-only test: `path.starts_with(canonical_cache_dir)` checked\n  a verbatim path against a non-verbatim changed_files entry)\n- `reusable_audit_worktree_path::repo_root` (hashes the repo root, so\n  inconsistent prefix shape produces unstable cache keys)\n- `paths_equal` (worktree-identity equality check)\n- `path_is_inside_temp_dir` (worktree temp-dir filter)\n\n`dunce::canonicalize` is identical to `std::fs::canonicalize` on POSIX\nso behaviour off Windows is unchanged.\n\nRefs #561.",
          "timestamp": "2026-05-21T23:27:03+01:00",
          "tree_id": "53cdbd59056d0392ba10a6e05e02375cbc5b2d33",
          "url": "https://github.com/fallow-rs/fallow/commit/19b761ef61cc7f7bc6f0a7c12d1915e4bf90a289"
        },
        "date": 1779402607493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5094522,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27573,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711023,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6797,
            "unit": "allocations"
          }
        ]
      }
    ]
  }
}