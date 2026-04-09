window.BENCHMARK_DATA = {
  "lastUpdate": 1775740452805,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "682617040f37ed60c90467752c86623946831e38",
          "message": "test: add route group parentheses coverage for SvelteKit $types (#54)\n\nAdds a fixture file inside nested route groups (app)/(admin) importing\n./$types to verify that parentheses in route group names do not break\ngenerated import suppression. The matching operates on the specifier\nstring, not the file path, so parentheses are irrelevant.",
          "timestamp": "2026-04-06T23:38:56+02:00",
          "tree_id": "54cadec0b0442477515d95dee939a05c16df8ea0",
          "url": "https://github.com/fallow-rs/fallow/commit/682617040f37ed60c90467752c86623946831e38"
        },
        "date": 1775511615590,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.4,
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
          "id": "21e62ef76d6815b6b77a992c05a0119530f34094",
          "message": "fix: normalize Windows path separators in health coverage-gaps tests\n\nBackslash paths on Windows caused 3 coverage-gaps test assertions to\nfail. Normalize at the collection point with .replace('\\\\', \"/\") so\nends_with/contains checks work cross-platform.",
          "timestamp": "2026-04-06T23:48:58+02:00",
          "tree_id": "6271baf285760342c4d5d42ea1aa730ecbc47f9f",
          "url": "https://github.com/fallow-rs/fallow/commit/21e62ef76d6815b6b77a992c05a0119530f34094"
        },
        "date": 1775512213193,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.4,
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
          "id": "ce34a911c04101597021ab985cb8b64233e7769e",
          "message": "perf: lazy complexity, packed ModuleNode flags, smart BFS, dupe detection\n\nSkip per-function complexity AST walk in the dead-code pipeline (only\nneeded by health command), reducing full_pipeline_1000 by ~35%.  Cache\nhits with missing complexity are skipped when the caller needs it,\npreventing cross-contamination between check and health commands.\n\nPack ModuleNode's 5 boolean flags into a u8 bitfield, shrinking the\nstruct from 104 to 96 bytes for better cache line utilization.\n\nSkip redundant BFS passes in mark_reachable when runtime entry points\nequal overall entry points or test entry points are empty (common case\nvia build()).\n\nOptimize dupe detection: explicit HashMap entry match in ranking, direct\nloop for line table construction, cleaner path index in subset removal.",
          "timestamp": "2026-04-07T00:41:42+02:00",
          "tree_id": "a378206b743b4ef3af75f7ed64be2e1ff70e43b1",
          "url": "https://github.com/fallow-rs/fallow/commit/ce34a911c04101597021ab985cb8b64233e7769e"
        },
        "date": 1775515388896,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.4,
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
          "id": "5b6a212c12a6f717a69df248eb71329b626483d6",
          "message": "fix(ci): skip PR comment test on fork PRs\n\nFork PRs receive a restricted github.token that cannot write PR\ncomments (HTTP 403), causing the test-comment job to always fail on\ncontributor PRs.  Skip the job when the PR originates from a fork.",
          "timestamp": "2026-04-07T07:20:04+02:00",
          "tree_id": "a370c263647c13a28a10363929fafadc3abd3fd6",
          "url": "https://github.com/fallow-rs/fallow/commit/5b6a212c12a6f717a69df248eb71329b626483d6"
        },
        "date": 1775539276678,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.4,
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
          "id": "3861d72528b1815c1066cfbaa48be252c541c337",
          "message": "chore: release v2.16.0",
          "timestamp": "2026-04-07T07:40:46+02:00",
          "tree_id": "b58847e1861aa27174fa473fb0550e5c109e2e75",
          "url": "https://github.com/fallow-rs/fallow/commit/3861d72528b1815c1066cfbaa48be252c541c337"
        },
        "date": 1775540567742,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "da3f00fda8a08e6c63388f2329d8df3afee5be71",
          "message": "test: add integration tests for root-relative HTML resolution\n\nAdd fixture and 3 integration tests covering root-relative paths\n(/src/entry.ts, /src/global.css) in HTML files. Also add missing\ncanonical_fallback lookup for symlink parity with the main resolution\npath.",
          "timestamp": "2026-04-07T08:26:07+02:00",
          "tree_id": "30b22b849e8597ba2cc23c6f405f0cd936f6211c",
          "url": "https://github.com/fallow-rs/fallow/commit/da3f00fda8a08e6c63388f2329d8df3afee5be71"
        },
        "date": 1775543264739,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "d6e8fbb7c88d7ee30aab205dca8c14cf8edb8c26",
          "message": "docs: add HTML root-relative path resolution to detection.md",
          "timestamp": "2026-04-07T09:14:05+02:00",
          "tree_id": "9f61509fccac41b452a8b9c804408e3c1762db0f",
          "url": "https://github.com/fallow-rs/fallow/commit/d6e8fbb7c88d7ee30aab205dca8c14cf8edb8c26"
        },
        "date": 1775546133838,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
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
          "id": "8dc91a2b81a0e696a765f0e164835210e1101435",
          "message": "feat: harden Vue and Nuxt framework edge cases (#60)",
          "timestamp": "2026-04-07T09:40:31+02:00",
          "tree_id": "aa7bbc8e3bb49614c5b6b9c2a8af35ed2f511ac3",
          "url": "https://github.com/fallow-rs/fallow/commit/8dc91a2b81a0e696a765f0e164835210e1101435"
        },
        "date": 1775547716174,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "037d220c40cb555e4638134f19401086823bfe07",
          "message": "chore(ci): raise benchmark alert thresholds to reduce noise\n\nBench: 110% → 150% (micro-benchmarks fluctuate on shared CI runners).\nConformance: 105% → 115% (correctness improvements shift issue totals).",
          "timestamp": "2026-04-07T09:53:46+02:00",
          "tree_id": "95e4b1d76822d6ee2c1e10ef8283ee2a60c5d6f2",
          "url": "https://github.com/fallow-rs/fallow/commit/037d220c40cb555e4638134f19401086823bfe07"
        },
        "date": 1775548506383,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "d17a43bc11b416ee46b38149ab13692c4f021951",
          "message": "docs: add crap_max, crap_above_threshold, coverage_model to output-schema.json",
          "timestamp": "2026-04-07T10:17:15+02:00",
          "tree_id": "ad1e19aa63baf1a28df3363d72d874db786fdc35",
          "url": "https://github.com/fallow-rs/fallow/commit/d17a43bc11b416ee46b38149ab13692c4f021951"
        },
        "date": 1775549911899,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "b434ec77dddff007406ec3267cfa42840e57dfd4",
          "message": "chore: release v2.17.0",
          "timestamp": "2026-04-07T10:18:42+02:00",
          "tree_id": "bf4fd6f117333efd1ab0ad31ee1304c2e91cf2c5",
          "url": "https://github.com/fallow-rs/fallow/commit/b434ec77dddff007406ec3267cfa42840e57dfd4"
        },
        "date": 1775550010600,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "5c411bddfd272664aa338694562ea7d0dfbf0d4e",
          "message": "fix(action): use HTML anchor for duplication link in summary details\n\nMarkdown links inside <summary> tags are not rendered by GitHub.\nUse <a href> instead for the Duplication header link.",
          "timestamp": "2026-04-07T10:46:48+02:00",
          "tree_id": "2b4c7e5513573d27eaf24d4aef271c488cbb8d58",
          "url": "https://github.com/fallow-rs/fallow/commit/5c411bddfd272664aa338694562ea7d0dfbf0d4e"
        },
        "date": 1775551686397,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "0c552eb5d571c7a2ecc1de2b174890241fcfe711",
          "message": "fix(action): link all summary headers and metrics to docs pages\n\nAll three section headers (Code issues, Duplication, Complexity) now link\nto their respective docs pages using HTML anchors in <summary> tags.\nCodebase health header links to health docs. All table metrics link to\nspecific anchors: Maintainability, Avg complexity, Duplicated lines,\nClone instances, Cyclomatic, and Cognitive.",
          "timestamp": "2026-04-07T10:51:52+02:00",
          "tree_id": "67166a259d3c6143a64f8377137a08f2664729aa",
          "url": "https://github.com/fallow-rs/fallow/commit/0c552eb5d571c7a2ecc1de2b174890241fcfe711"
        },
        "date": 1775552003041,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "a9c906bd202f254b954dc31e732bf8e06e5f2853",
          "message": "chore: release v2.17.1",
          "timestamp": "2026-04-07T10:58:17+02:00",
          "tree_id": "32d50cbb6874ddb21b12c82e2f47eb363bfebf06",
          "url": "https://github.com/fallow-rs/fallow/commit/a9c906bd202f254b954dc31e732bf8e06e5f2853"
        },
        "date": 1775552375841,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "96be261b4fa3cc4daf6a50ea76c1715b6ba355fb",
          "message": "fix(action): use metric labels, add first-run hint, improve CI docs\n\n- Use trend metric .label field (e.g., \"avg complexity\") instead of\n  hardcoded names in delta header for robustness and clarity\n- Add progressive disclosure footnote on first run (score present but\n  no trend): suggests enabling save-snapshot for trend tracking\n- Fix action.yml descriptions to mention bare command support and\n  snapshot location (.fallow/snapshots/)\n- Add inline comments to GitLab CI env vars for discoverability",
          "timestamp": "2026-04-07T11:53:42+02:00",
          "tree_id": "abadf24e78d4f2540485b79b1112c5ad02f8d63b",
          "url": "https://github.com/fallow-rs/fallow/commit/96be261b4fa3cc4daf6a50ea76c1715b6ba355fb"
        },
        "date": 1775555950389,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "f4b28b6229cab9ac6dd8d8e9bccbf08098ceb643",
          "message": "chore: release v2.18.0",
          "timestamp": "2026-04-07T12:04:41+02:00",
          "tree_id": "03847cd5bb04cac27726b72b27e344c0b7228c09",
          "url": "https://github.com/fallow-rs/fallow/commit/f4b28b6229cab9ac6dd8d8e9bccbf08098ceb643"
        },
        "date": 1775556361038,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "ef6f521dfd40c5a4dbd2f38897c22826eb677f2c",
          "message": "test: add integration tests for unused fixtures\n\n- barrel-default-reexport: verify unused Card re-export detected,\n  Button correctly recognized as used\n- config-toml-project: verify fallow.toml config loading, rule\n  severity parsing, and full analysis pipeline with TOML config\n- workspace-nested-exports: verify dist/esm/ exports map paths\n  resolve back to source files via fallback",
          "timestamp": "2026-04-07T13:18:41+02:00",
          "tree_id": "80fcfb6df782f6a49ee42f7ad5a7211f8628ed14",
          "url": "https://github.com/fallow-rs/fallow/commit/ef6f521dfd40c5a4dbd2f38897c22826eb677f2c"
        },
        "date": 1775561103024,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.4,
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
          "id": "324fbba6d9acc7bbf694654a148206a55ebe505a",
          "message": "chore: low-priority quality improvements from audit\n\n- Decompose run_combined from 275 to 127 lines (4 extracted functions)\n- Narrow tokio features from \"full\" to 6 specific features\n- Move miette fancy feature from config to CLI only\n- Add --all-targets to pre-commit/pre-push hooks\n- Add npm ecosystem entries to Dependabot (vscode, npm wrapper)\n- Replace magic numbers: 86400 -> SECS_PER_DAY, 30 -> COGNITIVE_EXTRACTION_THRESHOLD\n- Fix release.yml: publish-crates needs build, remove duplicate npm install\n- Switch test temp dirs to tempfile::tempdir() for RAII cleanup\n- Add LSP boundary violation diagnostic tests (5 tests)\n- Add plugin resolve_config tests for tsup, rollup, rolldown (20 tests)",
          "timestamp": "2026-04-07T13:42:06+02:00",
          "tree_id": "7a02bff40c85b666f6c1e0e11a698bbd982f24e3",
          "url": "https://github.com/fallow-rs/fallow/commit/324fbba6d9acc7bbf694654a148206a55ebe505a"
        },
        "date": 1775562214643,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "070ad2191a03c58ffea10ab2ef9fed45427689e6",
          "message": "chore(deps-dev): bump vitest from 3.2.4 to 4.1.2 in /editors/vscode (#64)\n\nBumps [vitest](https://github.com/vitest-dev/vitest/tree/HEAD/packages/vitest) from 3.2.4 to 4.1.2.\n- [Release notes](https://github.com/vitest-dev/vitest/releases)\n- [Commits](https://github.com/vitest-dev/vitest/commits/v4.1.2/packages/vitest)\n\n---\nupdated-dependencies:\n- dependency-name: vitest\n  dependency-version: 4.1.2\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-07T13:57:18+02:00",
          "tree_id": "ebbb6e697ac7a10278def5697ce2f2f9b47bd484",
          "url": "https://github.com/fallow-rs/fallow/commit/070ad2191a03c58ffea10ab2ef9fed45427689e6"
        },
        "date": 1775563243347,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "fd4aeed83d72054e5ea39f595c59ea34cbda35ce",
          "message": "chore(deps): bump the oxc group with 7 updates (#67)\n\nBumps the oxc group with 7 updates:\n\n| Package | From | To |\n| --- | --- | --- |\n| [oxc_allocator](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_ast](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_ast_visit](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_parser](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_semantic](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_span](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_syntax](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n\n\nUpdates `oxc_allocator` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_ast` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_ast_visit` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_parser` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_semantic` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_span` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_syntax` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\n---\nupdated-dependencies:\n- dependency-name: oxc_allocator\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_ast\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_ast_visit\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_parser\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_semantic\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_span\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_syntax\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-07T14:06:47+02:00",
          "tree_id": "af4578715f266b33af55b71e8510b27bc92aa801",
          "url": "https://github.com/fallow-rs/fallow/commit/fd4aeed83d72054e5ea39f595c59ea34cbda35ce"
        },
        "date": 1775563818179,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "e5673660325ac1dbcd00d033d1ee9e6ff2c51669",
          "message": "chore(deps-dev): bump @types/node in /editors/vscode (#66)\n\nBumps [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/node) from 20.19.37 to 25.5.0.\n- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)\n- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/node)\n\n---\nupdated-dependencies:\n- dependency-name: \"@types/node\"\n  dependency-version: 25.5.0\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-07T14:13:28+02:00",
          "tree_id": "a2849b2d021c5a1cb908c859e1d14cb4ba0df77d",
          "url": "https://github.com/fallow-rs/fallow/commit/e5673660325ac1dbcd00d033d1ee9e6ff2c51669"
        },
        "date": 1775564078496,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "17e6cc28a37e262c6cab73a8659f7f1fac64d420",
          "message": "chore: supply chain hardening\n\n- Pin npm dependency versions (remove carets)\n- Add .npmrc with ignore-scripts and min-release-age (7 days)\n- Add pnpm audit step to vscode CI job\n- Add path-based CI job filtering (skip Rust checks on npm-only PRs)\n- Add CI summary job for branch protection\n- Add OpenSSF Scorecard workflow",
          "timestamp": "2026-04-07T14:15:11+02:00",
          "tree_id": "c836925772192f22279b4909104be6b532566b6c",
          "url": "https://github.com/fallow-rs/fallow/commit/17e6cc28a37e262c6cab73a8659f7f1fac64d420"
        },
        "date": 1775564195874,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "0971f0561454e366fd2635cc6fa81346db6674f4",
          "message": "chore: add Dependabot auto-merge for patch/minor bumps\n\nAuto-merges Dependabot PRs after CI passes, except major version\nbumps which still require manual review.",
          "timestamp": "2026-04-07T14:17:41+02:00",
          "tree_id": "d2e0d3cea8f1a6687e722fd99e766e3780a33d90",
          "url": "https://github.com/fallow-rs/fallow/commit/0971f0561454e366fd2635cc6fa81346db6674f4"
        },
        "date": 1775564333897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "2ef236de42f39ccddfcaba96e188167739b97acf",
          "message": "fix: use pull_request_target for Dependabot auto-merge, add tests/ to CI path filter\n\n- pull_request gives Dependabot read-only GITHUB_TOKEN, blocking merges\n- tests/fixtures/ was not triggering Rust CI on changes",
          "timestamp": "2026-04-07T14:19:41+02:00",
          "tree_id": "d93f1111b4dfd2a01dfcb4610d768b2613dfc1b5",
          "url": "https://github.com/fallow-rs/fallow/commit/2ef236de42f39ccddfcaba96e188167739b97acf"
        },
        "date": 1775564458153,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "f9dc5cb5f97d59491baa1808d0c5591dd9ac336f",
          "message": "chore: create CODE_OF_CONDUCT.md",
          "timestamp": "2026-04-07T14:22:09+02:00",
          "tree_id": "f02dd9f4c2670181d4022d223ff203a699b4b144",
          "url": "https://github.com/fallow-rs/fallow/commit/f9dc5cb5f97d59491baa1808d0c5591dd9ac336f"
        },
        "date": 1775564622465,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "4b4547138dfdc410212d4b4d566ce1c518b21300",
          "message": "fix: address review findings in supply chain hardening\n\n- Scope dependabot auto-merge to main branch only\n- Use minimal permissions in scorecard workflow (was read-all)\n- Add crates/config/** to miri path filter (transitive dep)\n- Add unit comments to .npmrc (pnpm=minutes, npm=days)",
          "timestamp": "2026-04-07T14:25:38+02:00",
          "tree_id": "651675f1c413fd9faf4685bdf9697bd2f3e7303d",
          "url": "https://github.com/fallow-rs/fallow/commit/4b4547138dfdc410212d4b4d566ce1c518b21300"
        },
        "date": 1775564844159,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "f28ec13eb4927274e7b044ba9796c82e06396c8f",
          "message": "fix: regenerate lockfile for pinned versions, fix scorecard SHA and zizmor config\n\n- Lockfile specifiers now match pinned versions (no carets)\n- Use correct codeql-action/upload-sarif SHA (v3.35.1)\n- Add zizmor ignores for dependabot-auto-merge (pull_request_target)\n  and ci-ok (safe toJSON template)",
          "timestamp": "2026-04-07T14:30:33+02:00",
          "tree_id": "93418fd90cefe94b1666f21b8f4537eee927dc26",
          "url": "https://github.com/fallow-rs/fallow/commit/f28ec13eb4927274e7b044ba9796c82e06396c8f"
        },
        "date": 1775565108824,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "19e67689abc6ff0f9f5510e7029d66f349e2afa1",
          "message": "fix: use pnpm audit --prod, add bot-conditions zizmor ignore\n\n- pnpm audit --prod skips devDependency vulnerabilities (mocha, vsce, vitest)\n- zizmor bot-conditions ignore for standard GitHub dependabot actor check",
          "timestamp": "2026-04-07T14:33:54+02:00",
          "tree_id": "538f7a0135d0fc07acd1b8849ff155b824b46c2d",
          "url": "https://github.com/fallow-rs/fallow/commit/19e67689abc6ff0f9f5510e7029d66f349e2afa1"
        },
        "date": 1775565315604,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "0fef7bc181c342a9f4368091ab245a1b5ef48c8c",
          "message": "fix: pin @types/vscode to 1.85.0 to match engines.vscode\n\nvsce package validates that @types/vscode does not exceed the\nengines.vscode range. Pinning to the minimum engine version also\nensures only APIs available in VS Code 1.85+ are used.",
          "timestamp": "2026-04-07T14:36:27+02:00",
          "tree_id": "3abaeedebce8b1a6cc8c582eecc40e5b9a9c9497",
          "url": "https://github.com/fallow-rs/fallow/commit/0fef7bc181c342a9f4368091ab245a1b5ef48c8c"
        },
        "date": 1775565464676,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "eefe6c6b9d10c6f1bff9fc3f8e46b2d57c57638f",
          "message": "fix: increase Miri timeout to 45 minutes (cold cache after workflow move)",
          "timestamp": "2026-04-07T15:09:56+02:00",
          "tree_id": "6523c7dfe164b1396b46f1327bd50c5ec463b256",
          "url": "https://github.com/fallow-rs/fallow/commit/eefe6c6b9d10c6f1bff9fc3f8e46b2d57c57638f"
        },
        "date": 1775567477914,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "4ab51218db1aa28f1c020ff05429f6dec6d99731",
          "message": "chore: release v2.18.1",
          "timestamp": "2026-04-07T15:15:41+02:00",
          "tree_id": "721ba0103fbd3fdfb8dbfb9543554823e9791d22",
          "url": "https://github.com/fallow-rs/fallow/commit/4ab51218db1aa28f1c020ff05429f6dec6d99731"
        },
        "date": 1775567866367,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "ab5b7ddf1280a871fad241c786640b8656c86c3d",
          "message": "fix(ci): pin npm@10 to avoid promise-retry module error on Node 22",
          "timestamp": "2026-04-07T15:38:46+02:00",
          "tree_id": "47691e0701c93f90842a86fb084d6fbcf86ba775",
          "url": "https://github.com/fallow-rs/fallow/commit/ab5b7ddf1280a871fad241c786640b8656c86c3d"
        },
        "date": 1775569207484,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "4ddfaf43529cc55cded694b921f22cd0a02d0559",
          "message": "chore: release v2.18.2",
          "timestamp": "2026-04-07T16:06:14+02:00",
          "tree_id": "0baaec0ca3593326969f85c0ec1e3d40e338d33f",
          "url": "https://github.com/fallow-rs/fallow/commit/4ddfaf43529cc55cded694b921f22cd0a02d0559"
        },
        "date": 1775570849898,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mohamd514.m@gmail.com",
            "name": "Muhammad Swalha",
            "username": "swalha1999"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23b1d4c5c99022e6fe1c7084ae1f7b4ab5a6fa5c",
          "message": "fix: handle `export { ... }` specifier lists in fix command (#74)\n\nPreviously, `fallow fix` would strip `export ` from `export { A, B }`\nlines, leaving invalid `{ A, B }` syntax. Now it properly handles\nnamed export lists by removing individual specifiers or deleting the\nentire line when all specifiers are unused.\n\nHandles:\n- `export { A, B, C }` — remove individual unused specifiers\n- `export { A, B } from \"./mod\"` — same with re-exports\n- `export type { A, B }` — same for type exports\n- `export { A as B }` — aliased specifiers\n- Delete entire line when all specifiers are removed",
          "timestamp": "2026-04-07T16:17:44+02:00",
          "tree_id": "e9bcbaf5667d60820219813160ebd7be558a8070",
          "url": "https://github.com/fallow-rs/fallow/commit/23b1d4c5c99022e6fe1c7084ae1f7b4ab5a6fa5c"
        },
        "date": 1775571549275,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "618337cb6880ce422a212f6aa50c7773332a6c78",
          "message": "refactor(fix): robustify export type whitespace detection",
          "timestamp": "2026-04-07T16:19:06+02:00",
          "tree_id": "af56e304c467eb53ed9c4db5e56372422f9f9f12",
          "url": "https://github.com/fallow-rs/fallow/commit/618337cb6880ce422a212f6aa50c7773332a6c78"
        },
        "date": 1775571622069,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "07bada33acc11ba99e6737631a572a6823267b5c",
          "message": "fix(ci): restore two-step npm bootstrap for OIDC publishing",
          "timestamp": "2026-04-07T16:37:56+02:00",
          "tree_id": "ced6c9f05a694d7701c6c84bd08b9f9eed1732ae",
          "url": "https://github.com/fallow-rs/fallow/commit/07bada33acc11ba99e6737631a572a6823267b5c"
        },
        "date": 1775572755969,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "e24ccda4e623128111b49cd10b8260923b72d08e",
          "message": "chore: release v2.18.3",
          "timestamp": "2026-04-07T16:39:29+02:00",
          "tree_id": "2a5f4d1813696868d3cea7d3cc1fdfb510a0c1cd",
          "url": "https://github.com/fallow-rs/fallow/commit/e24ccda4e623128111b49cd10b8260923b72d08e"
        },
        "date": 1775572849801,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "4d530b570a3be4f496d4f98fde3af8cf87631a58",
          "message": "feat: Angular template tracking for external HTML files\n\nParse @Component decorators to extract templateUrl/styleUrl references,\ncreating graph edges that prevent false unused-file reports. Scan Angular\nHTML templates for identifier references in interpolation ({{ }}),\nproperty bindings ([prop]), event bindings ((event)), two-way bindings\n([(ngModel)]), structural directives (*ngIf, *ngFor), Angular 17+\ncontrol flow (@if, @for, @switch), and pipes (| pipeName). Bridge\ntemplate-referenced identifiers to component class members to prevent\nfalse unused-class-member reports.\n\nCloses #73",
          "timestamp": "2026-04-07T17:41:41+02:00",
          "tree_id": "3a5ff13c1694ec313e245cab2577e9da1504bb9b",
          "url": "https://github.com/fallow-rs/fallow/commit/4d530b570a3be4f496d4f98fde3af8cf87631a58"
        },
        "date": 1775576607025,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "e5a6e71b16e8ec37c822513169768781a2c132c0",
          "message": "chore(deps): bump dependabot/fetch-metadata from 2.4.0 to 3.0.0 (#78)\n\nBumps [dependabot/fetch-metadata](https://github.com/dependabot/fetch-metadata) from 2.4.0 to 3.0.0.\n- [Release notes](https://github.com/dependabot/fetch-metadata/releases)\n- [Commits](https://github.com/dependabot/fetch-metadata/compare/08eff52bf64351f401fb50d4972fa95b9f2c2d1b...ffa630c65fa7e0ecfa0625b5ceda64399aea1b36)\n\n---\nupdated-dependencies:\n- dependency-name: dependabot/fetch-metadata\n  dependency-version: 3.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-07T19:11:56+02:00",
          "tree_id": "ad6616f3b4bf0375ffc4225cb7863fcdd45d6981",
          "url": "https://github.com/fallow-rs/fallow/commit/e5a6e71b16e8ec37c822513169768781a2c132c0"
        },
        "date": 1775581988429,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "ce7fcee0ce048655b9dc4c9df604b8edd17cc3e2",
          "message": "fix(ci): disable auto-changed-since in clean project test\n\nThe clean project at /tmp is not a git repo, so auto-scoping to\nPR changed files causes fallow to error. Disabling auto-changed-since\nfor this test since it validates zero-issue behavior, not PR scoping.",
          "timestamp": "2026-04-07T19:23:17+02:00",
          "tree_id": "61a44c1b5e444ca7b64b3d89f8de86fd206bceea",
          "url": "https://github.com/fallow-rs/fallow/commit/ce7fcee0ce048655b9dc4c9df604b8edd17cc3e2"
        },
        "date": 1775582674617,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kamilthedev@gmail.com",
            "name": "KamilDev",
            "username": "KamilDev"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a67f9c5c617e9bc477da106c242bc7aea88de1d6",
          "message": "fix(extract): track class instances through factory initializers (#79)\n\nWhen a class is instantiated inside a factory function passed to a\nwrapper like React's useState, e.g. `const [svc] = useState(() => new\nMyService())`, the first array-destructured binding is now recognized\nas an instance of that class, so member accesses on it correctly count\nas usage.\n\nHandles arrow expression bodies, arrow block bodies, and function\nexpressions. Built-in constructors are filtered. Whole-object use\npropagation works through the factory pattern.\n\nCloses #79",
          "timestamp": "2026-04-07T19:31:02+02:00",
          "tree_id": "ebf820523170b03366fec0a0f75ff850dcb2723c",
          "url": "https://github.com/fallow-rs/fallow/commit/a67f9c5c617e9bc477da106c242bc7aea88de1d6"
        },
        "date": 1775583151913,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "d3a0be3398c2ceb042c67e0b7fd555b32d47d0df",
          "message": "fix(vscode): re-download binaries when version mismatches extension\n\nThe auto-downloaded fallow-lsp binary in global storage was never\nrefreshed after initial download. When a user updated the extension\n(or installed a newer CLI globally), the stale binary continued to\nserve LSP diagnostics, causing version skew between VS Code and CLI.\n\nNow checks the installed binary's version on activation and removes\nstale binaries to trigger a fresh download from the matching release.\n\nFixes #80",
          "timestamp": "2026-04-07T19:45:55+02:00",
          "tree_id": "5ec576c8be1ac8708802c2f4218a42604fa6d363",
          "url": "https://github.com/fallow-rs/fallow/commit/d3a0be3398c2ceb042c67e0b7fd555b32d47d0df"
        },
        "date": 1775584024709,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "b16139982a6b342e09f7a6cad7710da59fb54798",
          "message": "chore: release v2.19.0",
          "timestamp": "2026-04-07T19:52:22+02:00",
          "tree_id": "7e71084079a9bf4c00c4ec7dab9e716ff608aa1d",
          "url": "https://github.com/fallow-rs/fallow/commit/b16139982a6b342e09f7a6cad7710da59fb54798"
        },
        "date": 1775584426096,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "f192c52ab78007cf0a06cb9a90e80816caeee040",
          "message": "refactor: split large modules into focused submodules\n\nSplit graph/build.rs narrowing helpers into graph/narrowing.rs and\nanalyze/predicates.rs into predicates/{file,import,lifecycle}.rs for\nbetter cohesion. Zero API changes, all call sites unchanged.",
          "timestamp": "2026-04-07T19:54:23+02:00",
          "tree_id": "2e801a594aea5b7b4f298680d8cea6a3acc07a94",
          "url": "https://github.com/fallow-rs/fallow/commit/f192c52ab78007cf0a06cb9a90e80816caeee040"
        },
        "date": 1775584638110,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "6f461b6f1968810f71cec0f17b70c32674d9d1f5",
          "message": "fix: skip duplicate-export for value/type declaration merging\n\nTypeScript allows a const and a type to share the same name via\ndeclaration merging. This is idiomatic with Zod (`export const Status =\nz.enum([...]); export type Status = z.infer<typeof Status>`), Prisma\ngenerated types, and class+interface patterns. These were falsely\nflagged as duplicate exports because the detection only compared names\nwithout considering is_type_only.\n\nNow tracks whether each export is type-only and skips groups where\nexports span both value and type namespaces, unless either namespace\nalone has cross-file duplicates.\n\nCloses #81",
          "timestamp": "2026-04-07T21:23:45+02:00",
          "tree_id": "c86bfbf3f3c176a32af7ddf46df428a6cd278ec0",
          "url": "https://github.com/fallow-rs/fallow/commit/6f461b6f1968810f71cec0f17b70c32674d9d1f5"
        },
        "date": 1775589918153,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "518aea81f2bd3dbc6c1c983a7e8e7c05f9db7c0f",
          "message": "chore: release v2.19.1",
          "timestamp": "2026-04-07T21:26:54+02:00",
          "tree_id": "5c4b1769d0b51c144905f106e474f11fbd741c7f",
          "url": "https://github.com/fallow-rs/fallow/commit/518aea81f2bd3dbc6c1c983a7e8e7c05f9db7c0f"
        },
        "date": 1775590092554,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "8004a7f34830d528770197a77f9ca4d5d10ec79c",
          "message": "test: improve coverage for plugins, specifier resolution, results, and duplicate detection\n\nAdd 105 tests across 7 files targeting the largest coverage gaps:\nplugins (tailwind, playwright, semantic_release, tsdown), resolve\nspecifier classification, results sort/serialization, and clone\ndetection edge cases. Overall coverage 90.2% to 90.6%.",
          "timestamp": "2026-04-07T21:49:48+02:00",
          "tree_id": "d44939c849f3687cfcdc87b10b6d9d32909283c0",
          "url": "https://github.com/fallow-rs/fallow/commit/8004a7f34830d528770197a77f9ca4d5d10ec79c"
        },
        "date": 1775591573481,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.8,
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
          "id": "e51d40440c4cc37febfd2be9c730f5b9a00484ac",
          "message": "test: improve coverage for svelte, shared templates, config format, gatsby, and churn\n\nAdd 153 tests across 5 files: svelte template parsing (42), shared\ntemplate utilities (64), config format detection (4), gatsby plugin\n(12), and git churn analysis (31). Overall coverage 90.6% to 90.9%.",
          "timestamp": "2026-04-07T22:57:08+02:00",
          "tree_id": "903669856c8e0d9d3141f4c5a8a9a92cb9f8a999",
          "url": "https://github.com/fallow-rs/fallow/commit/e51d40440c4cc37febfd2be9c730f5b9a00484ac"
        },
        "date": 1775595508892,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
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
          "id": "e1fed16c3ae8e3de70fd2bfcd922b8a81f1c60c2",
          "message": "chore: apply rustfmt to test files from coverage session",
          "timestamp": "2026-04-08T00:06:06+02:00",
          "tree_id": "ea28275757ea247e3224d1c86604347d0716bc0a",
          "url": "https://github.com/fallow-rs/fallow/commit/e1fed16c3ae8e3de70fd2bfcd922b8a81f1c60c2"
        },
        "date": 1775599643901,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
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
          "id": "621225af0cf364089b9b1684068b9ec7a4c5f794",
          "message": "chore: release v2.19.2",
          "timestamp": "2026-04-08T00:08:56+02:00",
          "tree_id": "0b517965cd9c591cea4a3b699f166993359167f3",
          "url": "https://github.com/fallow-rs/fallow/commit/621225af0cf364089b9b1684068b9ec7a4c5f794"
        },
        "date": 1775599820677,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
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
          "id": "59cf13a3fb42a09d19145257a898c9c4a77d5a41",
          "message": "fix: skip create_resolver tests under Miri (statx unsupported)\n\nTests directly calling specifier::create_resolver() trigger oxc_resolver\nwhich uses the statx syscall via rustix. Miri doesn't support statx\nunder isolation. Added #[cfg_attr(miri, ignore)] to 5 tests.",
          "timestamp": "2026-04-08T08:34:51+02:00",
          "tree_id": "4ab6a9daf9a39db01d9de97156a1be8ab8592b01",
          "url": "https://github.com/fallow-rs/fallow/commit/59cf13a3fb42a09d19145257a898c9c4a77d5a41"
        },
        "date": 1775630163793,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
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
          "id": "b389950764e98cf2d649c4300a4e712d16f9a2df",
          "message": "fix: skip parser-heavy extract tests under Miri\n\nOnly suppress, css, and visitor/helpers have pure data logic worth\ntesting under Miri. Parser-heavy modules (visitor::tests, sfc_template,\nhtml, template_usage) have no unsafe code and exceed Miri timeout\nafter recent test additions.",
          "timestamp": "2026-04-08T09:21:48+02:00",
          "tree_id": "21baf26d36857281a86230cd545a415bd5a35a77",
          "url": "https://github.com/fallow-rs/fallow/commit/b389950764e98cf2d649c4300a4e712d16f9a2df"
        },
        "date": 1775632988585,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
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
          "id": "bd459982c085b657be302888ba986b9abfe87f82",
          "message": "fix: match ignorePatterns against relative paths during file discovery\n\nGlob patterns in ignorePatterns (e.g. \"src/api/generated/**\") were matched\nagainst absolute walker paths, so only patterns with **/ prefix worked.\nStrip project root before matching, consistent with production_excludes.\n\nCloses #83",
          "timestamp": "2026-04-08T10:07:23+02:00",
          "tree_id": "00601be2891f0eb3bf70206a82e206dd580e4144",
          "url": "https://github.com/fallow-rs/fallow/commit/bd459982c085b657be302888ba986b9abfe87f82"
        },
        "date": 1775635746791,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
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
          "id": "f7955c8067782e012efc811550f2a90faa15a897",
          "message": "chore: release v2.19.3",
          "timestamp": "2026-04-08T10:12:24+02:00",
          "tree_id": "cd5e8df572dc4a1229c03ff1e81f5e3360ebfa3a",
          "url": "https://github.com/fallow-rs/fallow/commit/f7955c8067782e012efc811550f2a90faa15a897"
        },
        "date": 1775636034914,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
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
          "id": "b8c47704ae3a5386d1536ba1f789e2928ac400c5",
          "message": "chore: raise benchmark alert thresholds to reduce false positives\n\nThe github-action-benchmark action compares against the single previous\nstored data point, which can be many commits old when path-filtered\nworkflows skip non-Rust changes. This causes false regression alerts\nfrom normal CI runner variance.\n\nChanges:\n- real-world benchmarks: 120% -> 200% (highest runner variance)\n- conformance: 115% -> 130% (upstream repos change between daily runs)\n- binary size: 115% -> 120% (deterministic but LTO varies slightly)\n- allocations: add explicit 120% (was using default 110%)\n- add max-items-in-chart: 100 to prevent unbounded gh-pages growth",
          "timestamp": "2026-04-08T10:31:35+02:00",
          "tree_id": "193d92dda1c35c0aa0768ac4a5845d6d07abcbe6",
          "url": "https://github.com/fallow-rs/fallow/commit/b8c47704ae3a5386d1536ba1f789e2928ac400c5"
        },
        "date": 1775637181217,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
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
          "id": "36b0664949574c5474abc466075412ee3f344153",
          "message": "chore: release v2.20.0",
          "timestamp": "2026-04-08T11:09:12+02:00",
          "tree_id": "2450f9aba8357e8febc2ad47b395afa58270d904",
          "url": "https://github.com/fallow-rs/fallow/commit/36b0664949574c5474abc466075412ee3f344153"
        },
        "date": 1775639454408,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94,
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
          "id": "3a8fc3d4f64f84e0e36f64e8bf39b5f1512b4243",
          "message": "feat: Istanbul match-rate stats, snapshot coverage_model, CI warning, --coverage-root\n\n- Add istanbul_matched/istanbul_total to HealthSummary JSON (only when\n  coverage_model is istanbul). Human output shows match rate in footer.\n- Persist coverage_model in VitalSignsSnapshot (schema v3). Trend output\n  warns when comparing snapshots with different CRAP models.\n- CI auto-detection note: when CI=true and coverage was auto-detected,\n  emit \"note:\" on stderr suggesting explicit --coverage.\n- New --coverage-root flag to rebase Istanbul file paths for cross-\n  environment matching (CI runner paths vs local checkout).",
          "timestamp": "2026-04-08T12:00:55+02:00",
          "tree_id": "bbc1f72ddd6b4f5202ebbbe8e41b996946946e5a",
          "url": "https://github.com/fallow-rs/fallow/commit/3a8fc3d4f64f84e0e36f64e8bf39b5f1512b4243"
        },
        "date": 1775642546048,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "b49a818eb3832f3ead6d1f3be8ccc0fe65433042",
          "message": "chore: release v2.21.0",
          "timestamp": "2026-04-08T12:02:49+02:00",
          "tree_id": "656a38347e069cac00a29db44c32889fc05bfd3b",
          "url": "https://github.com/fallow-rs/fallow/commit/b49a818eb3832f3ead6d1f3be8ccc0fe65433042"
        },
        "date": 1775642650969,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "dd60a0fbbe9a1b66d98f0e875333cd38b3ec4bdf",
          "message": "docs: add .vitepress to hidden directory allowlist in docs\n\nFollow-up to PR #84 which added .vitepress to ALLOWED_HIDDEN_DIRS.",
          "timestamp": "2026-04-08T13:01:36+02:00",
          "tree_id": "c2f8123039c7c79ca508fe905e9057d7487bf788",
          "url": "https://github.com/fallow-rs/fallow/commit/dd60a0fbbe9a1b66d98f0e875333cd38b3ec4bdf"
        },
        "date": 1775646197041,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "6a048d82e55778e8061d02c8677030fc57021736",
          "message": "chore: release v2.22.0",
          "timestamp": "2026-04-08T13:06:01+02:00",
          "tree_id": "dcb4dcc239eaea6da3b090726617ffd532a44c39",
          "url": "https://github.com/fallow-rs/fallow/commit/6a048d82e55778e8061d02c8677030fc57021736"
        },
        "date": 1775646454081,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "1d41343f87cfa04ecfecc1e10dfce750e4ce7615",
          "message": "fix: Astro frontmatter CRLF handling and typos config for Istanbul abbreviation\n\nThe Astro frontmatter regex required LF after --- delimiters, failing\non Windows where git checks out CRLF. Add \\r? to handle both line\nendings. Also allow \"ist\" (Istanbul abbreviation) in typos config.",
          "timestamp": "2026-04-08T14:02:50+02:00",
          "tree_id": "cb75ae87c747ae988bed4a32d4ffa7ba705e1be7",
          "url": "https://github.com/fallow-rs/fallow/commit/1d41343f87cfa04ecfecc1e10dfce750e4ce7615"
        },
        "date": 1775649854597,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "2685ac54e2ea21fbf93a5ecad2184cec5a7b30d1",
          "message": "chore: release v2.22.1",
          "timestamp": "2026-04-08T14:10:03+02:00",
          "tree_id": "590c7804526d23d4fb400e4463a92b4471efd7aa",
          "url": "https://github.com/fallow-rs/fallow/commit/2685ac54e2ea21fbf93a5ecad2184cec5a7b30d1"
        },
        "date": 1775650291311,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "c4af48aa7e21c218f70013786ae94f8a8a2677b4",
          "message": "fix: discover sub-packages from package.json exports map\n\nProjects like preact define sub-packages (compat/, hooks/, debug/) as\ndirectories with their own package.json, referenced via the root exports\nmap (e.g., \"./compat\": {...}). These were not discovered as entry points\nbecause they don't live in the hardcoded monorepo dirs (packages/, apps/).\n\nExtract directory prefixes from exports map keys and scan those for\npackage.json files with source/main/module fields. Reduces false\npositives on preact by 13 files and 19 exports (259 -> 227 issues).",
          "timestamp": "2026-04-08T14:25:10+02:00",
          "tree_id": "7903eea0e7a8d4202ab3bd244e16918bc34eef48",
          "url": "https://github.com/fallow-rs/fallow/commit/c4af48aa7e21c218f70013786ae94f8a8a2677b4"
        },
        "date": 1775651198831,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "eb64ba27383c5af19232ce2f253e81fca8acc6e8",
          "message": "chore: reduce binary size by 16.6% (-1.38MB)\n\n- Switch ureq from rustls to native-tls (uses OS TLS stack)\n- Disable regex unicode features (keep only unicode-perl)\n- Remove ureq gzip feature (unused for remote config fetch)\n- Per-crate opt-level \"z\" for 10 non-hot-path dependencies",
          "timestamp": "2026-04-08T15:12:11+02:00",
          "tree_id": "148a9ae34619f6642b4a3ece9225ed3fbd9938e1",
          "url": "https://github.com/fallow-rs/fallow/commit/eb64ba27383c5af19232ce2f253e81fca8acc6e8"
        },
        "date": 1775654024695,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "0c84df62b979f7708151a1d69e4ff1e37d911831",
          "message": "fix: add vendored OpenSSL for Linux musl and cross-compilation targets\n\nThe native-tls switch requires OpenSSL on Linux. The vendored feature\ncompiles OpenSSL from source, ensuring musl and aarch64 cross-builds\nwork without system libssl-dev headers.",
          "timestamp": "2026-04-08T15:16:44+02:00",
          "tree_id": "3950dd0565e4a463826026d6955116fa6d02b941",
          "url": "https://github.com/fallow-rs/fallow/commit/0c84df62b979f7708151a1d69e4ff1e37d911831"
        },
        "date": 1775654434444,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "76414e27990bfcd35dbfa0e7e452776fb9c99a66",
          "message": "chore: upgrade oxc deps from 0.123 to 0.124\n\nAligns with oxc_coverage_instrument's transitive deps, eliminating\nduplicate compilation of the entire oxc stack (parser, AST, semantic,\nvisitor, etc.) in both 0.123 and 0.124 versions.",
          "timestamp": "2026-04-08T15:29:34+02:00",
          "tree_id": "102bd4fbac25caf2c4c924f3817642f647552f75",
          "url": "https://github.com/fallow-rs/fallow/commit/76414e27990bfcd35dbfa0e7e452776fb9c99a66"
        },
        "date": 1775655052587,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "cd5062b0dc6061ea93af330d0121099218382fb8",
          "message": "chore: add .playwright-mcp to gitignore",
          "timestamp": "2026-04-08T15:32:27+02:00",
          "tree_id": "063bcd2732393ae8de21a1329b39ab821abad998",
          "url": "https://github.com/fallow-rs/fallow/commit/cd5062b0dc6061ea93af330d0121099218382fb8"
        },
        "date": 1775655242378,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "31e41fe5f963d8fa942d0254fa9f0e04e67e7206",
          "message": "fix: configure ureq to use native-tls provider explicitly\n\nureq 3.x defaults to Rustls even when the native-tls feature is enabled.\nThe provider must be set explicitly via TlsConfig::builder().provider().\nWithout this, HTTPS requests panic at runtime.",
          "timestamp": "2026-04-08T15:40:04+02:00",
          "tree_id": "8c2f283f733d5ecfa0baf80a57fa7c0b7d99586d",
          "url": "https://github.com/fallow-rs/fallow/commit/31e41fe5f963d8fa942d0254fa9f0e04e67e7206"
        },
        "date": 1775655689675,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "f9028d8338e03253c682f0e79e7f5aaa5075c6d1",
          "message": "fix: add unicode-case feature to regex for case-insensitive HTML/SFC matching\n\nThe (?i) flag in HTML and SFC regex patterns requires the unicode-case\nfeature. Without it, patterns like (?si)<script\\b... panic at runtime\nwhen parsing HTML files.",
          "timestamp": "2026-04-08T15:45:33+02:00",
          "tree_id": "36a62acd7a25229fc766d4547e22f3bd48384a9b",
          "url": "https://github.com/fallow-rs/fallow/commit/f9028d8338e03253c682f0e79e7f5aaa5075c6d1"
        },
        "date": 1775656019848,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "5aaafac267fe705b4d163bedfb32745d4992d3be",
          "message": "test: add regex compilation smoke tests for all file type parsers\n\nAll LazyLock<Regex> statics are lazily compiled on first use. If a regex\nfeature is missing, it panics at runtime only when that file type is\nactually parsed. This adds tests that parse a minimal file of each type\n(HTML, CSS, SCSS, Vue, Svelte, Astro, Angular) to force every regex to\ncompile, catching feature mismatches at test time instead of in production.",
          "timestamp": "2026-04-08T15:49:10+02:00",
          "tree_id": "c9d8b71d64b4be6f14fd9f118e7b0772e3a3082e",
          "url": "https://github.com/fallow-rs/fallow/commit/5aaafac267fe705b4d163bedfb32745d4992d3be"
        },
        "date": 1775656255906,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "ab9d4b2c2e083be3c82e91476e6af6a71cee5e09",
          "message": "test: add CLI flag collision detection and dead_code_ratio type exclusion tests\n\n- CLI debug_assert test catches flag name collisions across subcommands\n  (prevents repeat of --base alias collision incident)\n- 3 new dead_code_ratio tests verify type-only exports are excluded from\n  both numerator and denominator (prevents ratio inflation incident)",
          "timestamp": "2026-04-08T16:06:11+02:00",
          "tree_id": "4306d53555b2da901c84978f127af29abe0bdb6e",
          "url": "https://github.com/fallow-rs/fallow/commit/ab9d4b2c2e083be3c82e91476e6af6a71cee5e09"
        },
        "date": 1775657263284,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.9,
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
          "id": "03c1a5982d039dade6572b8a47967f240a422737",
          "message": "test: add scoring tests for Istanbul lookup, CRAP formulas, and test refs\n\nAdd tests for IstanbulFileCoverage::lookup (exact, fuzzy, boundary),\ncompute_crap_scores_istanbul (empty, statistics), compute_crap_scores_binary\n(all branches), compute_crap_scores_estimated (mixed), and\nbuild_test_referenced_exports.",
          "timestamp": "2026-04-08T17:15:20+02:00",
          "tree_id": "faba04ace72d2e2fdf02fc3488fd203057b0a86e",
          "url": "https://github.com/fallow-rs/fallow/commit/03c1a5982d039dade6572b8a47967f240a422737"
        },
        "date": 1775662849552,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "f81d31f7ff65399417710e14edf5e6d02977db19",
          "message": "fix: propagate star re-exports through entry point chains\n\nStar re-export propagation was demand-driven: only names explicitly\nimported by name from a barrel got reference credit. Types that were\nre-exported via `export *` from a barrel that was itself star-re-exported\nfrom an entry point got zero references and were falsely reported unused.\n\nExample: entry.ts -> export * from './types' -> types/index.ts ->\nexport * from '../components/AuthForm.vue'. AuthFormField was reported\nas an unused type even though it's part of the public API surface.\n\nNow, barrels that are star-re-exported directly from an entry point\nare treated the same as entry points for propagation purposes: all\nsource exports get reference credit.\n\nFixes 271 false positive unused types on Nuxt UI (376 -> 105).\nNo regressions on zod, preact, vue-core.",
          "timestamp": "2026-04-08T17:39:05+02:00",
          "tree_id": "3aae6ce3f9ae75dce5d64f69d2f3157e4e8133a2",
          "url": "https://github.com/fallow-rs/fallow/commit/f81d31f7ff65399417710e14edf5e6d02977db19"
        },
        "date": 1775663083868,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "791d14e58fb3605ff37a7e091da66a05e3d640aa",
          "message": "chore: rustfmt formatting adjustments",
          "timestamp": "2026-04-08T17:59:11+02:00",
          "tree_id": "9e9a103ccd6420a50f7c1f85f81115afb4989b7f",
          "url": "https://github.com/fallow-rs/fallow/commit/791d14e58fb3605ff37a7e091da66a05e3d640aa"
        },
        "date": 1775664233588,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "27a6b7e2e35ba621b2a6645ec913f7abb53b1883",
          "message": "chore: release v2.22.2",
          "timestamp": "2026-04-08T18:05:57+02:00",
          "tree_id": "bd9e1f90bb411020f5cf4a3593b4b1f97c52e9e8",
          "url": "https://github.com/fallow-rs/fallow/commit/27a6b7e2e35ba621b2a6645ec913f7abb53b1883"
        },
        "date": 1775664452396,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "d2ece8fb3e19e60236d5583439965d44c10d31aa",
          "message": "perf: precompute entry star re-export targets for O(1) lookup\n\nThe is_star_re_exported_from_entry_or_public check iterated over all\nmodules on every call inside the re-export propagation hot loop. For\nmonorepos with many modules this caused O(n * m * iterations) work.\n\nPrecompute the set of FileIds that are star-re-exported from entry\npoints once before the loop starts, then use O(1) HashSet lookup.\nAlso fix trailing whitespace from cargo fmt.",
          "timestamp": "2026-04-08T18:10:53+02:00",
          "tree_id": "cfbbb4529430c4b0f4f8b352db820c6ff1910490",
          "url": "https://github.com/fallow-rs/fallow/commit/d2ece8fb3e19e60236d5583439965d44c10d31aa"
        },
        "date": 1775664743627,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "16f2401e423bd61ec1bc2ba5a456b0a3488df835",
          "message": "chore: release v2.22.3",
          "timestamp": "2026-04-08T18:55:00+02:00",
          "tree_id": "f87b1c6156ff8881e3ae0698c24e5ba7adf0eae8",
          "url": "https://github.com/fallow-rs/fallow/commit/16f2401e423bd61ec1bc2ba5a456b0a3488df835"
        },
        "date": 1775667392041,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "1ccf31f7d35cb8a6bbe17708b0edb029b84ac57e",
          "message": "fix: prune node_modules during workspace glob traversal\n\nThe glob crate's `**` expansion walks into node_modules before\nfiltering, which is catastrophic with pnpm's deep symlink trees\n(50,000+ entries for `packages/**/*` in starlight). This caused\nmonorepo analysis to hang indefinitely.\n\nReplace glob for patterns containing `**` with a manual recursive\nwalk that prunes node_modules and .git directories during traversal.\nNon-recursive patterns still use glob.\n\nStarlight monorepo: from infinite hang to 0.74s.",
          "timestamp": "2026-04-08T19:06:29+02:00",
          "tree_id": "0b8983bc94a3b04b483f595f893c0930460865ee",
          "url": "https://github.com/fallow-rs/fallow/commit/1ccf31f7d35cb8a6bbe17708b0edb029b84ac57e"
        },
        "date": 1775668080489,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "241c0e4feb9d45dbf9fc16bfadca81c194400d69",
          "message": "fix: replace em dashes with colons in meta-framework warnings",
          "timestamp": "2026-04-08T19:25:22+02:00",
          "tree_id": "81db31e4099de755e65d1f5d08102098fb33fa16",
          "url": "https://github.com/fallow-rs/fallow/commit/241c0e4feb9d45dbf9fc16bfadca81c194400d69"
        },
        "date": 1775669200118,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "483822c3a66df6337270ff7c18b22ffca618d518",
          "message": "test: add regression tests for extension priority, wildcard exports, and workspace glob\n\nThree conformance loop fixes shipped without dedicated tests. Add 8\nregression tests that fail without the fixes and pass with them:\n\n- .d.ts extension priority: 3 tests verifying .js resolves before\n  .d.ts when both exist, .ts before .d.ts, and fallback to .d.ts\n  when no runtime file exists\n\n- Wildcard subpath exports: 3 tests verifying expand_wildcard_entries\n  matches CSS files, handles empty dirs, and respects extensions\n\n- Workspace glob pruning: 2 tests verifying node_modules directories\n  (including deeply nested pnpm .pnpm/ trees) are pruned during\n  recursive workspace discovery",
          "timestamp": "2026-04-08T19:47:27+02:00",
          "tree_id": "6881d9431d68ad93adc2f3bcfcfcc975eee61940",
          "url": "https://github.com/fallow-rs/fallow/commit/483822c3a66df6337270ff7c18b22ffca618d518"
        },
        "date": 1775670521840,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "d711313df2cbc1b218d8b802f4ab48bd4967dc4e",
          "message": "feat: detect Nuxt module authoring convention in plugin\n\nNuxt modules (projects with `@nuxt/kit` dependency) place runtime code\nin `src/runtime/` and register it programmatically via `addComponentsDir`,\n`addImportsDir`, and `addPlugin`. The Nuxt plugin now:\n\n- Activates when `@nuxt/kit` is in dependencies (module authoring)\n- Treats `src/module.{ts,js}` as a config file and always-used entry\n- Adds entry patterns for `src/runtime/` subdirectories: components,\n  composables, plugins, utils, locale, types, and vue\n\nTested on Nuxt UI v3: false positive unused files dropped from 521 to\n226 (-295). Consumer Nuxt apps (e.g. nuxt-dashboard) unaffected (0 FPs).",
          "timestamp": "2026-04-08T21:50:39+02:00",
          "tree_id": "149815e277091b65e731dccd612e8770dcef557a",
          "url": "https://github.com/fallow-rs/fallow/commit/d711313df2cbc1b218d8b802f4ab48bd4967dc4e"
        },
        "date": 1775677937182,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "dcf68d2c48f5a8540aec8a95cd6c503d70b12111",
          "message": "chore: release v2.22.4",
          "timestamp": "2026-04-08T21:52:53+02:00",
          "tree_id": "a10b190ef4557081de2ff2e27822625cf9f74c1f",
          "url": "https://github.com/fallow-rs/fallow/commit/dcf68d2c48f5a8540aec8a95cd6c503d70b12111"
        },
        "date": 1775678087772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "325a49dd3f4ec1769f33b4f0ba255f44a750a797",
          "message": "test: add regression test for star re-export many-consumers scenario\n\nCovers the pattern that was quadratic before the O(1) duplicate\ndetection fix: 20 consumers importing the same named export through\na star-re-exporting barrel. Verifies all references propagate without\nduplicates and that unused exports remain unreferenced.\n\nAlso fixes rustfmt formatting in plugin registry.",
          "timestamp": "2026-04-09T07:23:06+02:00",
          "tree_id": "d5700ed2663843b9af701f00e793277281b7253a",
          "url": "https://github.com/fallow-rs/fallow/commit/325a49dd3f4ec1769f33b4f0ba255f44a750a797"
        },
        "date": 1775712265047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "8d64ddac69b197eb2ecd6de8b9ebd67b072b5bc6",
          "message": "test: add regression tests for typed template bindings in Vue and Svelte\n\nAdd unit tests (Vue v-for, v-slot, Svelte snippet) and full-pipeline\nintegration tests verifying that TypeScript type annotations on\ndestructuring patterns do not cause infinite recursion.\n\nAlso fix stale rustfmt drift in registry/mod.rs.",
          "timestamp": "2026-04-09T07:26:59+02:00",
          "tree_id": "4caf0f2e3e5da24df0421eed82bcf762f6e1aff0",
          "url": "https://github.com/fallow-rs/fallow/commit/8d64ddac69b197eb2ecd6de8b9ebd67b072b5bc6"
        },
        "date": 1775712498539,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "eb1113dc4e1c1571a1a753b371157a96318d7f49",
          "message": "feat(vscode): resolve binaries from local node_modules/.bin first\n\nTeams installing fallow as a devDependency now get consistent versions\nacross all developers. The extension checks node_modules/.bin in the\nworkspace root before falling back to fallow.lspPath, PATH, or\nauto-download.\n\nCloses #86",
          "timestamp": "2026-04-09T07:33:45+02:00",
          "tree_id": "58881b20ffe9b90bb32cadadd35e95f47f33f45f",
          "url": "https://github.com/fallow-rs/fallow/commit/eb1113dc4e1c1571a1a753b371157a96318d7f49"
        },
        "date": 1775712916628,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "dd5fb860aade25c942ea090e6ac83ae08555d0dc",
          "message": "chore: release v2.23.0",
          "timestamp": "2026-04-09T07:35:15+02:00",
          "tree_id": "58aaf0684101f2d09c4cc39665a55799d8e08644",
          "url": "https://github.com/fallow-rs/fallow/commit/dd5fb860aade25c942ea090e6ac83ae08555d0dc"
        },
        "date": 1775713003200,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "9ad9a68f42741179007c3ab8ffa119322c47f6d1",
          "message": "chore: release v2.23.1",
          "timestamp": "2026-04-09T08:02:18+02:00",
          "tree_id": "7ac7ff32c7489c3f6ab786ecce6fc0ec611ca053",
          "url": "https://github.com/fallow-rs/fallow/commit/9ad9a68f42741179007c3ab8ffa119322c47f6d1"
        },
        "date": 1775714634934,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "ec2eccfd30a46277e8b9977eb39936ed3c5ecaa8",
          "message": "feat(vscode): log binary resolution steps to output channel\n\nEach candidate checked during LSP binary resolution is now logged to the\noutput channel, making it easy to diagnose version mismatches or\nunexpected binary selection.",
          "timestamp": "2026-04-09T09:22:10+02:00",
          "tree_id": "2746a0521fcd783d33968ddbe7ce27fe0c9ab244",
          "url": "https://github.com/fallow-rs/fallow/commit/ec2eccfd30a46277e8b9977eb39936ed3c5ecaa8"
        },
        "date": 1775719419866,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "32750ac7d73d91ee04c5b13dd269b4f8867d60b7",
          "message": "fix: improve zero-match warning message and add to dupes/health baselines\n\n- Improve warning text: use accessible language, include the baseline\n  file path in the re-save hint\n- Add zero-match warning to dupes baseline loading (was check-only)\n- Add zero-match warning to health baseline loading (was check-only)",
          "timestamp": "2026-04-09T12:00:34+02:00",
          "tree_id": "a0f2c0cf31ad0424d0251ed55d30de1388efba4e",
          "url": "https://github.com/fallow-rs/fallow/commit/32750ac7d73d91ee04c5b13dd269b4f8867d60b7"
        },
        "date": 1775728914421,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "cfec946206a390eb070a595974ebecbd1782f0a8",
          "message": "feat(health): add function size and parameter risk profiles to vital signs\n\nAdd quality metrics inspired by SIG's maintainability model to the\nexisting health command, integrated into the A-F grade system.\n\nNew extraction: param_count on FunctionComplexity (excludes TS `this`\nparameter, includes rest parameters). Cache version bumped 26->27.\n\nNew vital signs fields: unit_size_profile and unit_interfacing_profile\n(RiskProfile with low/medium/high/very_high risk bins), p95_fan_in,\nand coupling_high_pct. Snapshot schema bumped v3->v4 with backward\ncompat via serde defaults.\n\nNew health score penalties: unit_size (max 10 pts, activates when >5%\nof functions exceed 60 LOC) and coupling (max 5 pts, activates when\np95 fan-in exceeds 30). Conservatively calibrated: zero penalty on\nclean projects (zod, preact, vite all unaffected).\n\nHuman output: separate risk profile section between metrics and\nfindings. Trend output: schema version migration warning when\ncomparing against older snapshots. Deductions line includes new\npenalty categories.",
          "timestamp": "2026-04-09T12:31:14+02:00",
          "tree_id": "8cc2f522a56f1cd5732abceb03bd12000daa0f63",
          "url": "https://github.com/fallow-rs/fallow/commit/cfec946206a390eb070a595974ebecbd1782f0a8"
        },
        "date": 1775730839924,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.3,
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
          "id": "0be2bee514517490f4f36207c8a2a0c26394a508",
          "message": "refactor: unify baseline key helpers and add baseline stats to combined JSON\n\n- Replace inline strip_prefix in clone_group_key, target_baseline_key,\n  and health_finding_key with the shared relative_path() helper\n- Add baseline match stats to combined-mode JSON output (was check-only)",
          "timestamp": "2026-04-09T12:34:21+02:00",
          "tree_id": "f8e8e24f80355ffb896cd94de98e0ca4bd9c38f4",
          "url": "https://github.com/fallow-rs/fallow/commit/0be2bee514517490f4f36207c8a2a0c26394a508"
        },
        "date": 1775730940248,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.2,
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
          "id": "46d85626863107cdaa1060fd51890d1bcd87339f",
          "message": "chore: gitignore quality/ dir, update AGENTS.md with risk profile fields",
          "timestamp": "2026-04-09T12:36:44+02:00",
          "tree_id": "ebc92058e17a09b4880dada4f0710f9493036bde",
          "url": "https://github.com/fallow-rs/fallow/commit/46d85626863107cdaa1060fd51890d1bcd87339f"
        },
        "date": 1775731084669,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.2,
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
          "id": "bf934af1aff4b3283cfc349b1febaa9edb89031e",
          "message": "refactor(health): conditional rendering for risk profiles\n\nShow function size profile only when very_high_risk >= 3% (approaching\nthe 5% penalty threshold). Show parameter profile only when high or\nvery_high bins carry signal. Suppress both on healthy projects to\nreduce noise.\n\nRemove early return that suppressed profiles when trend was active,\nso users can see absolute distributions alongside trend deltas.",
          "timestamp": "2026-04-09T12:51:27+02:00",
          "tree_id": "4153bfea25b9efae928b7baeb56485ad3e87a009",
          "url": "https://github.com/fallow-rs/fallow/commit/bf934af1aff4b3283cfc349b1febaa9edb89031e"
        },
        "date": 1775731973504,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.2,
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
          "id": "07cceb25b60c4159efa937970223121a99160b9d",
          "message": "chore: release v2.24.0",
          "timestamp": "2026-04-09T12:58:20+02:00",
          "tree_id": "f1d01dc3b83e57085f5907dd307ca9144447c68f",
          "url": "https://github.com/fallow-rs/fallow/commit/07cceb25b60c4159efa937970223121a99160b9d"
        },
        "date": 1775732394282,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.2,
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
          "id": "f4ead2ec300d57e2e9bd224384c9896f371600ab",
          "message": "chore: apply rustfmt to expect attributes",
          "timestamp": "2026-04-09T13:19:14+02:00",
          "tree_id": "425d6f52c45a0e0441fc0c0fb67a19e7d1700242",
          "url": "https://github.com/fallow-rs/fallow/commit/f4ead2ec300d57e2e9bd224384c9896f371600ab"
        },
        "date": 1775733649575,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.2,
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
          "id": "ae0442cea53729e201afd48d8dc377b00ab067bc",
          "message": "chore: document why --acyclic is omitted from coupling workflow",
          "timestamp": "2026-04-09T13:23:07+02:00",
          "tree_id": "b428e37f8cc8c059ed8a8aeaaa112bb9af282d59",
          "url": "https://github.com/fallow-rs/fallow/commit/ae0442cea53729e201afd48d8dc377b00ab067bc"
        },
        "date": 1775733874116,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.2,
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
          "id": "0838d23ef6c3f18bbc8045620028575c58a91990",
          "message": "feat(health): add large function drill-down and duplication score penalty\n\nAdd two new health features:\n\n1. Large function drill-down: list functions exceeding 60 LOC in a new\n   \"Large functions\" section when the very-high-risk bin is >= 3%.\n   Includes file path, function name, line number, and LOC count.\n   Sorted by line count descending, truncated to 10 items.\n\n2. Duplication in health score: run duplication analysis when --score is\n   active and penalize when duplication exceeds 5%. Formula:\n   min(max(0, duplication_pct - 5) * 1.0, 10), max 10 points.\n   Updates deductions line, vital signs metrics, JSON output,\n   trend tracking, and snapshot persistence.\n\nBump SNAPSHOT_SCHEMA_VERSION to 5 for the formula change.",
          "timestamp": "2026-04-09T14:28:14+02:00",
          "tree_id": "20a55bea7e01cdd5cbdbed931a437208bc00cc4f",
          "url": "https://github.com/fallow-rs/fallow/commit/0838d23ef6c3f18bbc8045620028575c58a91990"
        },
        "date": 1775737777374,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.2,
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
          "id": "96e417f252eee3517b2abfd24edc53d23577ecb7",
          "message": "refactor(health): add progressive disclosure hints and duplication timing\n\n- Add \"use --top N to see all N\" hint when large functions or complexity\n  findings are truncated, closing the progressive disclosure gap\n- Emit duplication analysis timing to stderr when --score runs it\n- Show health.ignore tip when duplication penalty >= 5 points",
          "timestamp": "2026-04-09T14:47:02+02:00",
          "tree_id": "d628877df2bb89ee495ccfce5f92166c1e696443",
          "url": "https://github.com/fallow-rs/fallow/commit/96e417f252eee3517b2abfd24edc53d23577ecb7"
        },
        "date": 1775738900271,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
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
          "id": "12b9f61371290122751ba77e01b9032e3f0a217a",
          "message": "refactor(health): improve hint wording for duplication tip and --top\n\n- Add concrete examples to health.ignore tip (\"dist\", \"__generated__\")\n- Drop redundant second number from --top hint (\"use --top N to see all\")",
          "timestamp": "2026-04-09T14:54:33+02:00",
          "tree_id": "538c559ab87097a9fd78802228b7ead6ff4dcae4",
          "url": "https://github.com/fallow-rs/fallow/commit/12b9f61371290122751ba77e01b9032e3f0a217a"
        },
        "date": 1775739356872,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
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
          "id": "5317e5460319655ef298c93482b0929f1e26f94e",
          "message": "fix(lsp): disable ANSI escape codes in tracing output\n\nLSP server is always spawned as a subprocess by editors. VS Code's\nOutput panel does not render ANSI sequences, causing raw escape codes\nto appear in the output. Matches the pattern already used by the MCP\nserver.\n\nCloses #89",
          "timestamp": "2026-04-09T15:12:21+02:00",
          "tree_id": "c2db61098754cfbc0481b6fe7a2b87d6cd53eec2",
          "url": "https://github.com/fallow-rs/fallow/commit/5317e5460319655ef298c93482b0929f1e26f94e"
        },
        "date": 1775740451311,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      }
    ]
  }
}