window.BENCHMARK_DATA = {
  "lastUpdate": 1776082844056,
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
        "date": 1775734096231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
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
          "id": "0838d23ef6c3f18bbc8045620028575c58a91990",
          "message": "feat(health): add large function drill-down and duplication score penalty\n\nAdd two new health features:\n\n1. Large function drill-down: list functions exceeding 60 LOC in a new\n   \"Large functions\" section when the very-high-risk bin is >= 3%.\n   Includes file path, function name, line number, and LOC count.\n   Sorted by line count descending, truncated to 10 items.\n\n2. Duplication in health score: run duplication analysis when --score is\n   active and penalize when duplication exceeds 5%. Formula:\n   min(max(0, duplication_pct - 5) * 1.0, 10), max 10 points.\n   Updates deductions line, vital signs metrics, JSON output,\n   trend tracking, and snapshot persistence.\n\nBump SNAPSHOT_SCHEMA_VERSION to 5 for the formula change.",
          "timestamp": "2026-04-09T14:28:14+02:00",
          "tree_id": "20a55bea7e01cdd5cbdbed931a437208bc00cc4f",
          "url": "https://github.com/fallow-rs/fallow/commit/0838d23ef6c3f18bbc8045620028575c58a91990"
        },
        "date": 1775737768303,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
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
          "id": "96e417f252eee3517b2abfd24edc53d23577ecb7",
          "message": "refactor(health): add progressive disclosure hints and duplication timing\n\n- Add \"use --top N to see all N\" hint when large functions or complexity\n  findings are truncated, closing the progressive disclosure gap\n- Emit duplication analysis timing to stderr when --score runs it\n- Show health.ignore tip when duplication penalty >= 5 points",
          "timestamp": "2026-04-09T14:47:02+02:00",
          "tree_id": "d628877df2bb89ee495ccfce5f92166c1e696443",
          "url": "https://github.com/fallow-rs/fallow/commit/96e417f252eee3517b2abfd24edc53d23577ecb7"
        },
        "date": 1775738900647,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
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
          "id": "12b9f61371290122751ba77e01b9032e3f0a217a",
          "message": "refactor(health): improve hint wording for duplication tip and --top\n\n- Add concrete examples to health.ignore tip (\"dist\", \"__generated__\")\n- Drop redundant second number from --top hint (\"use --top N to see all\")",
          "timestamp": "2026-04-09T14:54:33+02:00",
          "tree_id": "538c559ab87097a9fd78802228b7ead6ff4dcae4",
          "url": "https://github.com/fallow-rs/fallow/commit/12b9f61371290122751ba77e01b9032e3f0a217a"
        },
        "date": 1775739339754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
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
          "id": "5317e5460319655ef298c93482b0929f1e26f94e",
          "message": "fix(lsp): disable ANSI escape codes in tracing output\n\nLSP server is always spawned as a subprocess by editors. VS Code's\nOutput panel does not render ANSI sequences, causing raw escape codes\nto appear in the output. Matches the pattern already used by the MCP\nserver.\n\nCloses #89",
          "timestamp": "2026-04-09T15:12:21+02:00",
          "tree_id": "c2db61098754cfbc0481b6fe7a2b87d6cd53eec2",
          "url": "https://github.com/fallow-rs/fallow/commit/5317e5460319655ef298c93482b0929f1e26f94e"
        },
        "date": 1775740428037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
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
          "id": "f4ecafbb1d969c38205d1f80878937e7a4ae0d93",
          "message": "chore: release v2.25.0",
          "timestamp": "2026-04-09T15:14:56+02:00",
          "tree_id": "46e68d99822a32f1c8d6725517c1c7666eef7f1d",
          "url": "https://github.com/fallow-rs/fallow/commit/f4ecafbb1d969c38205d1f80878937e7a4ae0d93"
        },
        "date": 1775740598327,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
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
          "id": "1d3561fdf9eb394147199f8c7a9ef153a9941a62",
          "message": "refactor: deduplicate test helpers and add Default derives for test structs\n\n- Extract strip_ansi/plain to shared pub(super) in report/human/mod.rs,\n  remove 5 duplicate copies across check, health, dupes, cross_ref, perf\n- Add Default derive to VitalSigns and VitalSignsCounts, simplify 13\n  test constructions in vital_signs.rs\n- Simplify FallowConfig test constructions across walk.rs, parsing.rs,\n  unused_exports.rs, boundary.rs, unused_deps_tests using ..Default::default()\n\nDuplication: 10.5% -> 9.9% (below 3-star SIG threshold of 10%)",
          "timestamp": "2026-04-09T15:24:32+02:00",
          "tree_id": "3b213e8b8e42b87e8d4da10f48ca0567368ac52d",
          "url": "https://github.com/fallow-rs/fallow/commit/1d3561fdf9eb394147199f8c7a9ef153a9941a62"
        },
        "date": 1775741148831,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
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
          "id": "7da37c2fb364cef02693babdfa6b1c71aa1e829d",
          "message": "fix(deps): update oxc_coverage_instrument to 0.2.11\n\nFixes parsing of coverage-final.json files containing null values or\nmissing fields in hit count maps and position objects, as produced by\nsome Istanbul-compatible coverage tools.",
          "timestamp": "2026-04-09T15:33:33+02:00",
          "tree_id": "91bae0515b03999959a05b8739d8d177ffa4e806",
          "url": "https://github.com/fallow-rs/fallow/commit/7da37c2fb364cef02693babdfa6b1c71aa1e829d"
        },
        "date": 1775741684095,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
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
          "id": "ba62bf4078fc41ca273ec67ff923b6bbac8d0bb2",
          "message": "fix(lsp): deduplicate diagnostics in multi-root workspaces\n\nbuild_diagnostics was called once per workspace root from the merged\nresults, producing N copies of every diagnostic. Call it once with the\nworkspace root instead, since each result item already carries its own\nfile path.\n\nCloses #90",
          "timestamp": "2026-04-09T15:39:21+02:00",
          "tree_id": "b7953944fefeac93c130c1e053708323819b4cf3",
          "url": "https://github.com/fallow-rs/fallow/commit/ba62bf4078fc41ca273ec67ff923b6bbac8d0bb2"
        },
        "date": 1775742166528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
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
          "id": "64d0f84d1ab4e73da2a4ec208b144886f7eb986f",
          "message": "chore: release v2.25.1",
          "timestamp": "2026-04-09T15:42:51+02:00",
          "tree_id": "5c89fc1d209ad45bed091d2b00d2ebebc06d58f2",
          "url": "https://github.com/fallow-rs/fallow/commit/64d0f84d1ab4e73da2a4ec208b144886f7eb986f"
        },
        "date": 1775742277975,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
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
          "id": "263d76905e430c01585b4f6d567ba19623a1feb4",
          "message": "fix(lsp): merge test_only_dependencies, boundary_violations, and export_usages across workspace roots",
          "timestamp": "2026-04-09T15:54:42+02:00",
          "tree_id": "27b2d47ffb22527722341821c34dac867433776c",
          "url": "https://github.com/fallow-rs/fallow/commit/263d76905e430c01585b4f6d567ba19623a1feb4"
        },
        "date": 1775742956551,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
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
          "id": "9f98c70a6df62ee8eee519970de89523d8fbb1a9",
          "message": "feat: add Expo Router and TanStack Router convention coverage (#88)\n\nfeat: add Expo Router and TanStack Router convention coverage\n\nAdds ExpoRouterPlugin (85th built-in plugin) with configurable route root from app.json, special file exports (+api, +middleware, +html, +not-found, +native-intent), and API route HTTP method exports.\n\nEnhances TanstackRouterPlugin with tsr.config.json parsing for custom route directories, route file prefix/ignore patterns, lazy route export separation, and replace semantics for config-driven overrides.\n\nIntroduces PathRule with glob/regex/segment-regex exclusions and CompiledPathRule for strict entry-point and used-export matching. Refactors define_plugin! macro to remove custom resolve_config body variant in favor of explicit Plugin trait impls.",
          "timestamp": "2026-04-09T14:25:19Z",
          "tree_id": "ac511e0951e2d1f10f162426cce303a2eb694a0b",
          "url": "https://github.com/fallow-rs/fallow/commit/9f98c70a6df62ee8eee519970de89523d8fbb1a9"
        },
        "date": 1775744788786,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 217,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 454,
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
          "id": "4bfd1d3885e98aaf3b5ca288bb7fe030d683190a",
          "message": "chore: release v2.26.0",
          "timestamp": "2026-04-09T18:00:19+02:00",
          "tree_id": "2ef95295b829d817bb729f9a0e2b2366f7b818fc",
          "url": "https://github.com/fallow-rs/fallow/commit/4bfd1d3885e98aaf3b5ca288bb7fe030d683190a"
        },
        "date": 1775750510698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 217,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 454,
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
          "id": "3b3f1484f58df1a8a5d03a519e5b45dbcb119c89",
          "message": "perf(health): add churn disk cache, parallelize git log, and add --performance timing\n\n- Cache git churn data in .fallow/churn.bin keyed by HEAD SHA + since string.\n  Cache hit skips the git log shell-out entirely. Atomic write via temp+rename.\n  Prints dim note on cold miss >500ms. Respects --no-cache.\n\n- Run compute_filtered_file_scores and fetch_churn_data in parallel via\n  std::thread::scope when both are needed. On cold cache this overlaps the\n  git log (~1-5s) with the dead-code analysis for file scoring (~0.5s).\n\n- Extend --performance to the health command with a pipeline timing table\n  showing config, discover, parse, complexity, file scores, git churn\n  (with cache hit/miss), hotspots, duplication, targets, and total.\n  Works in both human and JSON modes.",
          "timestamp": "2026-04-09T18:37:58+02:00",
          "tree_id": "b1ccd5071a86f3d564aeec7243d79d54e2cba700",
          "url": "https://github.com/fallow-rs/fallow/commit/3b3f1484f58df1a8a5d03a519e5b45dbcb119c89"
        },
        "date": 1775752746612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 217,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 455,
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
          "id": "a2fa03c7df0e1a19d4eb88c4edf3c9e579fd023c",
          "message": "chore: release v2.26.1",
          "timestamp": "2026-04-09T18:39:47+02:00",
          "tree_id": "0ef80113c8f7593f8057c16ed4df215e9913e9e2",
          "url": "https://github.com/fallow-rs/fallow/commit/a2fa03c7df0e1a19d4eb88c4edf3c9e579fd023c"
        },
        "date": 1775752859150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 217,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 455,
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
          "id": "8157a284d61eb455f3b8be3a23a6b13b02241138",
          "message": "refactor(extract): deduplicate SFC template tag parser\n\nExtract parse_tag_attrs() to shared.rs, replacing the near-identical\nparse_tag (vue.rs) and parse_markup_tag (svelte.rs) implementations.\nThe shared parser accepts a braced_values flag for Svelte's {expr}\nattribute syntax. Also consolidates the duplicated HTML_COMMENT_RE\nregex into shared.rs.",
          "timestamp": "2026-04-10T09:42:54+02:00",
          "tree_id": "f5497442876bf6dafa376f6d0b804690fe210a11",
          "url": "https://github.com/fallow-rs/fallow/commit/8157a284d61eb455f3b8be3a23a6b13b02241138"
        },
        "date": 1775807700728,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 217,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 456,
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
          "id": "5cfa7cbc5fd0d324b1c144167b929bb3136fd627",
          "message": "chore: address final review housekeeping items\n\n- Fix stale doc comment on extract_flags (remove \"need_flags\" reference)\n- Update .claude/rules/mcp-server.md tool count 9 -> 10, add feature_flags\n- Add schema_version comment referencing report/json.rs source of truth",
          "timestamp": "2026-04-10T12:02:43+02:00",
          "tree_id": "c4007e3f3b12f156ed3cf1c35be6fd8be73b9c05",
          "url": "https://github.com/fallow-rs/fallow/commit/5cfa7cbc5fd0d324b1c144167b929bb3136fd627"
        },
        "date": 1775815526012,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 459,
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
          "id": "e7992f9104a67f471bd526414e7d703f1fd1978e",
          "message": "fix: wire dead code cross-reference into fallow flags command\n\nThe correlate_with_dead_code() function existed but was never called\nfrom the flags command. Now runs full dead code analysis via\nanalyze_with_parse_result() (reusing pre-parsed modules) and populates\nguarded_dead_exports on each flag. Output shows \"Flags guarding dead\ncode\" section with line counts and dead export names.",
          "timestamp": "2026-04-10T12:39:31+02:00",
          "tree_id": "58fc1c68419aeba1690141437de80046e3e6c6a7",
          "url": "https://github.com/fallow-rs/fallow/commit/e7992f9104a67f471bd526414e7d703f1fd1978e"
        },
        "date": 1775817638311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 459,
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
          "id": "563824ea2e5219c2b0590d3ef5d6694d55f79b35",
          "message": "feat: add SARIF, Markdown, and CodeClimate format support for flags\n\nAll 6 output formats now supported by fallow flags:\n- SARIF 2.1.0 with rule definition and dead code cross-reference in messages\n- Markdown with cross-reference table first, then inventory table\n- CodeClimate (GitLab Code Quality) with FNV-1a fingerprints\n- Badge format emits a warning (health-only)",
          "timestamp": "2026-04-10T12:51:54+02:00",
          "tree_id": "98e50c1a7b900eefa49b28e198d5cde40aa02b91",
          "url": "https://github.com/fallow-rs/fallow/commit/563824ea2e5219c2b0590d3ef5d6694d55f79b35"
        },
        "date": 1775818383253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 459,
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
          "id": "ff02943f8825e764a78af080c36f9d72965426f3",
          "message": "fix: address format reviewer concerns for flags output\n\n- SARIF: badge format now returns exit code 2 (was silently returning 0)\n- SARIF/CodeClimate: use normalize_uri() for bracket-safe paths (Next.js)\n- Markdown: add summary heading, backtick escaping for paths/names\n- Markdown: dead exports shown in backticks for consistency",
          "timestamp": "2026-04-10T12:58:19+02:00",
          "tree_id": "885339c473fae0da38bea5d8fe8e14aa0bd0ac53",
          "url": "https://github.com/fallow-rs/fallow/commit/ff02943f8825e764a78af080c36f9d72965426f3"
        },
        "date": 1775818764227,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 459,
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
          "id": "5c24a840f5b964fd8cca7bcc69d276b6e291da21",
          "message": "Improve Docusaurus convention coverage (#91)\n\n* refactor(core): share config parser AST helpers\n\n* feat(core): harden docusaurus convention coverage",
          "timestamp": "2026-04-10T13:20:23+02:00",
          "tree_id": "f337a9806aa317c7bac202b7cbd7705e747c0987",
          "url": "https://github.com/fallow-rs/fallow/commit/5c24a840f5b964fd8cca7bcc69d276b6e291da21"
        },
        "date": 1775820089047,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "af1c1a3ee1ac7de5ae1d14a3c19904e34cd9a6c2",
          "message": "feat(core): improve Docusaurus convention coverage (#91)",
          "timestamp": "2026-04-10T13:23:27+02:00",
          "tree_id": "f337a9806aa317c7bac202b7cbd7705e747c0987",
          "url": "https://github.com/fallow-rs/fallow/commit/af1c1a3ee1ac7de5ae1d14a3c19904e34cd9a6c2"
        },
        "date": 1775820895113,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "970c16c2bbad2c20a38d3bde6eeb13a2074ab1e1",
          "message": "chore: release v2.27.0",
          "timestamp": "2026-04-10T13:47:36+02:00",
          "tree_id": "bdebe461be739022a7722500fa8ef476d182c4b9",
          "url": "https://github.com/fallow-rs/fallow/commit/970c16c2bbad2c20a38d3bde6eeb13a2074ab1e1"
        },
        "date": 1775821847627,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "33868b8595ff88595172049b8e0a7585115e2e62",
          "message": "fix(extract): Angular @defer, @let, @else if, and outputFromObservable support (#92, #93, #94)\n\nAdd missing Angular template syntax and signal API recognition to\neliminate false positive unused-class-member reports:\n\n- @defer (when expr) / (prefetch when) / (hydrate when) conditions\n- @let name = expr; template-local variables with scope tracking\n- @else if (condition) expression scanning\n- outputFromObservable() as Angular signal API in ANGULAR_SIGNAL_APIS\n\nBump CACHE_VERSION 28->29 for changed extraction semantics.",
          "timestamp": "2026-04-10T19:29:38+02:00",
          "tree_id": "911f33ad29bb98b0a36e953ad56fdb31037799c6",
          "url": "https://github.com/fallow-rs/fallow/commit/33868b8595ff88595172049b8e0a7585115e2e62"
        },
        "date": 1775842244226,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "460afaee1c2411dbf289ae6dbec4fd95d0cd9bff",
          "message": "test(extract): harden Angular @defer nested parens and @else if word boundary\n\nAdd word boundary check for @else if detection to prevent matching\nidentifiers starting with \"if\" (e.g. @else iffy). Add test for\n@defer (on timer(1s)) confirming nested parentheses in triggers\ndon't break the scanner.",
          "timestamp": "2026-04-10T19:44:38+02:00",
          "tree_id": "efad6a8704b4dbc5f6bb99fd87094571a8581020",
          "url": "https://github.com/fallow-rs/fallow/commit/460afaee1c2411dbf289ae6dbec4fd95d0cd9bff"
        },
        "date": 1775843145024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "3531f8e369452c04843ca6f56467e2fa4c2753c2",
          "message": "chore: release v2.27.1",
          "timestamp": "2026-04-10T19:50:06+02:00",
          "tree_id": "3b4d4381b4e477ccbeef204982fe33fd0293f106",
          "url": "https://github.com/fallow-rs/fallow/commit/3531f8e369452c04843ca6f56467e2fa4c2753c2"
        },
        "date": 1775843478212,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "a85dd288b75720ebda86b2e2b47d11eec859aa9c",
          "message": "fix: SCSS partial resolution and inheritance-aware class member detection (#95, #96)\n\nSCSS partial files prefixed with `_` now resolve when imported via `@use`\nor `@import` without the underscore prefix, eliminating cascading false\npositives across unresolved imports, unlisted dependencies, and unused\nfiles. Class members accessed via `this.*` in parent classes now propagate\nto child class overrides through an inheritance map built from `extends`\nclauses, reducing unused class member false positives from 7 to 1 in\ntypical polymorphic dispatch patterns.",
          "timestamp": "2026-04-10T19:57:39+02:00",
          "tree_id": "383a7a250dbbc2c170ca06d2b80898fae00a215b",
          "url": "https://github.com/fallow-rs/fallow/commit/a85dd288b75720ebda86b2e2b47d11eec859aa9c"
        },
        "date": 1775844080381,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "1b76bfa33b0fbe3f992790c709bddc2782219c40",
          "message": "chore: release v2.27.2",
          "timestamp": "2026-04-10T20:12:26+02:00",
          "tree_id": "0f63c8a8d53327d3eca3918f8a392abf633203be",
          "url": "https://github.com/fallow-rs/fallow/commit/1b76bfa33b0fbe3f992790c709bddc2782219c40"
        },
        "date": 1775844995825,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "824884c7f9fd6825445b0bb90059df4b0de8b6e7",
          "message": "fix: harden SCSS index convention and default export class extends\n\nAdd SCSS directory index resolution: `@use 'components'` now resolves to\n`components/_index.scss` or `components/index.scss`. Add test coverage\nfor `export default class extends Foo` inheritance pattern.",
          "timestamp": "2026-04-10T20:40:38+02:00",
          "tree_id": "773e9796a59368ef19bd17f7d7b898cfaf9fec9f",
          "url": "https://github.com/fallow-rs/fallow/commit/824884c7f9fd6825445b0bb90059df4b0de8b6e7"
        },
        "date": 1775846629241,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "e629a4a0100da2643634b270fe621883d59d365b",
          "message": "fix: CSS scoped package imports and HTML workspace root-relative paths\n\nTwo false-positive fixes discovered by running fallow on fallow-cloud:\n\n1. CSS scoped npm package imports (e.g., @fontsource/monaspace-neon/400.css,\n   @fallow/design-system/styles.css) were being normalized with a leading ./,\n   causing them to be reported as unresolved instead of resolved from\n   node_modules. normalize_css_import_path() now keeps scoped specifiers\n   (@scope/pkg) bare regardless of file extension.\n\n2. HTML root-relative paths (<script src=\"/src/main.tsx\">) in workspace\n   members resolved against the monorepo root instead of the workspace member\n   root. site/index.html referencing /src/main.tsx was looking for\n   <root>/src/main.tsx instead of site/src/main.tsx. Now resolves from the\n   HTML file's parent directory first, with fallback to project root for\n   the public/index.html case.\n\nCACHE_VERSION bumped 29 -> 30 because the CSS change alters import specifiers\nstored at extraction time.",
          "timestamp": "2026-04-10T21:26:49+02:00",
          "tree_id": "7649e2e285a430448e4522b3b95222053e7a9177",
          "url": "https://github.com/fallow-rs/fallow/commit/e629a4a0100da2643634b270fe621883d59d365b"
        },
        "date": 1775849403324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "254e25fc89d89d296e9d1c14b9775588d94a58f0",
          "message": "chore: release v2.27.3",
          "timestamp": "2026-04-10T21:31:19+02:00",
          "tree_id": "48d11b49cf0142881ac662bdeaf05f5dc0bfef0e",
          "url": "https://github.com/fallow-rs/fallow/commit/254e25fc89d89d296e9d1c14b9775588d94a58f0"
        },
        "date": 1775849701426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "7445a42021e50bca8cb498929dbdca192023a1ef",
          "message": "chore: shrink VS Code extension package and add CSS path alias tests\n\n- .vscodeignore now excludes pnpm-lock.yaml, .fallow/, .test-dist/,\n  test/, vitest.config.mts, tsconfig.test.json, and .fallowrc.json.\n  Reduces the VSIX from 192KB to 100KB (48% smaller).\n- Add regression tests for CSS path aliases (@/components/Button.css)\n  sharing the @-prefix with scoped packages. Path aliases must stay\n  bare so the resolver's alias path handles them.",
          "timestamp": "2026-04-10T22:26:29+02:00",
          "tree_id": "916a746b341c25a8e02c3aa4935c7446cd630dc1",
          "url": "https://github.com/fallow-rs/fallow/commit/7445a42021e50bca8cb498929dbdca192023a1ef"
        },
        "date": 1775853004688,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "1cb2d98e43d3068fbb0bd2dd5ab168c27a4540be",
          "message": "fix(graph): fallback resolution when sibling tsconfig has broken extends chain (#97)\n\nA solution-style tsconfig.json with references to a sibling tsconfig that has a\nbroken extends chain (e.g., extends pointing to a non-existent file) caused\noxc_resolver::Resolver::resolve_file to fail for every file in the workspace,\nincluding files covered by a healthy sibling tsconfig. All relative imports were\nreported as unresolved and the failure was silent.\n\nWhen resolve_file returns a tsconfig-loading error (TsconfigNotFound,\nTsconfigCircularExtend, TsconfigSelfReference, Json, IOError), retry with\nresolver.resolve(dir, specifier), which passes None for tsconfig in Auto mode and\nskips discovery entirely. Relative, absolute, and bare imports then resolve\nnormally; path aliases in the broken workspace remain unresolvable (they were\nalready broken in tsc).\n\nA shared Mutex<FxHashSet<String>> on ResolveContext dedupes tracing::warn! to one\nmessage per unique broken chain, surfacing the failure to users without log spam.\n\nAdds unit tests for the error classifier plus an integration fixture\n(tests/fixtures/tsconfig-broken-extends) that reproduces the bug verbatim.",
          "timestamp": "2026-04-10T22:34:06+02:00",
          "tree_id": "ac86c3b5b4c72bf41cfa3241e3fd65f7e64cc74e",
          "url": "https://github.com/fallow-rs/fallow/commit/1cb2d98e43d3068fbb0bd2dd5ab168c27a4540be"
        },
        "date": 1775853398231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "8b362e65f153b57cf96dc2efe1b99bcd7fcf33db",
          "message": "chore: release v2.27.4",
          "timestamp": "2026-04-10T22:38:30+02:00",
          "tree_id": "8040373a8f7c63d4c343e7d8105b2f14705bad0c",
          "url": "https://github.com/fallow-rs/fallow/commit/8b362e65f153b57cf96dc2efe1b99bcd7fcf33db"
        },
        "date": 1775853588431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "e05ebda310edacdc7a2946a9f9beb459e8500286",
          "message": "fix: detect import-then-reexport pattern as re-export\n\nThe pattern `import { X } from './a'; export { X };` is semantically\nequivalent to `export { X } from './a';` but the visitor was treating\nthe bottom export as a NEW local declaration, causing two false positive\nclasses:\n\n1. Duplicate-export findings when the same name was also exported from\n   the original source file (because both files appeared to declare X\n   locally).\n2. Unused-export findings at the export site, since the re-export chain\n   propagation only follows ReExportInfo edges and never reached the\n   misclassified ExportInfo entries.\n\nThe visitor now scans `self.imports` for a matching local binding when\nprocessing `export { X }` without a `from` clause. If found, it emits a\nReExportInfo pointing back to the original source instead of an\nExportInfo. Handles renames on either side, default imports\n(`imported_name: \"default\"`), and mixed local + re-export statements.\nOrder-sensitive: relies on imports preceding exports in source order\n(standard practice).\n\nCACHE_VERSION bumped 30 -> 31 because extraction output now differs for\nfiles using this pattern.\n\nEliminated 4 duplicate-export false positives in fallow-cloud's\n`packages/beacon/src/transport.ts` (a real-world Vite + Bun monorepo).\n9 new unit tests cover the basic case, type-only variants, renames on\nboth sides, default imports, mixed statements, namespace edge case, and\nthe regression guard for pure local exports.",
          "timestamp": "2026-04-10T23:20:03+02:00",
          "tree_id": "a2a3def3c63ff85b33f596e9fdf1ca81d3f3528a",
          "url": "https://github.com/fallow-rs/fallow/commit/e05ebda310edacdc7a2946a9f9beb459e8500286"
        },
        "date": 1775856227163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "0cbd99146c6eb610aa7b5eafab3bb7c328280691",
          "message": "fix: report accurate line numbers for unused re-exports\n\nRe-exports synthesized from ReExportInfo into ExportSymbol entries were\nreported with line :1 because the synthesis used Span::new(0, 0) as a\nsentinel for 'no source location'. This applied even to import-then-\nreexport patterns and `export { X } from './a'` statements that DO have\nreal source spans.\n\nPlumb a span field from ReExportInfo (set by the visitor) through\nReExportEdge into the synthesized ExportSymbol so unused-export reporting\ncan compute the correct line via byte_offset_to_line_col. The (0, 0)\nsentinel is now reserved for graph-internal synthesis (star re-export\nchain propagation, namespace narrowing).\n\nThe unused-export detector previously inferred is_re_export from the\nspan(0, 0) sentinel. With real spans propagating through, the detection\nnow looks up the export name in the module's re_exports list instead,\nwhich is the semantic check.\n\nCACHE_VERSION bumped 31 -> 32 because CachedReExport gained span_start\nand span_end fields. ReExportEdge size assertion bumped 56 -> 64 bytes\nto account for the new span field.",
          "timestamp": "2026-04-10T23:35:09+02:00",
          "tree_id": "ac482df32ec0cc4e16334add492c162d5a554c46",
          "url": "https://github.com/fallow-rs/fallow/commit/0cbd99146c6eb610aa7b5eafab3bb7c328280691"
        },
        "date": 1775857109290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "7d788037ade9caea0daaff0a8e8a183809c8e703",
          "message": "perf: O(N) re-export name lookup in unused-export detection\n\nThe is_re_export check introduced in the previous commit used\n`module.re_exports.iter().any(...)` per export specifier. For barrel\nfiles with hundreds of synthesized re-export entries, this made the\nper-module work O(N²) (N exports × M re_exports, where N ≈ M for\nbarrels).\n\nLift a FxHashSet<&str> of re-exported names out of the inner loop so\nthe lookup becomes O(1) per export, making total work O(N + M). vue-core\nhas barrel files with 86+ re-exports per file where this matters most.",
          "timestamp": "2026-04-10T23:45:17+02:00",
          "tree_id": "875f1f598d83ef3ad557ec86d9e2f600b4f1e5e6",
          "url": "https://github.com/fallow-rs/fallow/commit/7d788037ade9caea0daaff0a8e8a183809c8e703"
        },
        "date": 1775857764906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "da5f29945923d1ffb0920d62df138b33e2f1a4d3",
          "message": "fix(extract): normalize Angular templateUrl/styleUrl without ./ prefix (#100)\n\nAngular's @Component decorator resolves both 'app.component.html' and\n'./app.component.html' relative to the component file. Fallow was\nemitting the raw specifier as an ImportInfo source, so downstream\nresolution classified bare filenames as npm packages and reported them\nas unlisted dependencies.\n\nAdd a normalize_angular_asset_url helper that prepends './' to bare\nfilenames while leaving already-relative, absolute, URL, and scoped\npackage paths untouched. Mirrors the existing CSS import normalization\npattern. Bump CACHE_VERSION so warm caches don't keep the stale bare\nspecifier.\n\nFixes #99",
          "timestamp": "2026-04-10T23:57:22+02:00",
          "tree_id": "e99329854b2c6ba7e8998ca052fee39e37c361a2",
          "url": "https://github.com/fallow-rs/fallow/commit/da5f29945923d1ffb0920d62df138b33e2f1a4d3"
        },
        "date": 1775858309793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "47f8ac37e3296d612bcb5eede0f154d44f02cdb1",
          "message": "chore: release v2.27.5",
          "timestamp": "2026-04-11T00:02:00+02:00",
          "tree_id": "fd8478487500ab9bd6502acf15b0e1dca5cb3e82",
          "url": "https://github.com/fallow-rs/fallow/commit/47f8ac37e3296d612bcb5eede0f154d44f02cdb1"
        },
        "date": 1775858779103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 218,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 460,
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
          "id": "413f950df3ce238d1b831d6118714473f6e553dc",
          "message": "fix(extract): normalize bare HTML/SFC asset specifiers without ./ prefix (#101)\n\nHTML `<script src>`, `<link rel=\"stylesheet\" href>`, and\n`<link rel=\"modulepreload\" href>` as well as Vue/Svelte `<script src>`\nwere emitting their raw user-authored strings as `ImportInfo.source`.\nBare filenames like `app.js`, `styles.css`, or `logic.ts` were then\nclassified as npm package specifiers and reported as unlisted\ndependencies. Browsers, Vite, Parcel, and Vue/Svelte tooling all\nresolve these references relative to the document or component file\nwhether or not they start with `./`.\n\nGeneralize the Angular templateUrl normalizer (from the #99 fix) into\na shared `crate::asset_url::normalize_asset_url` helper and call it\nfrom all five emission sites. The helper now also guards `data:` URIs\ndefensively so it's safe to call from sites that don't pre-filter via\n`is_remote_url`. Bump `CACHE_VERSION` 33 -> 34 so warm caches don't\nkeep stale bare specifiers.\n\nFound during the post-ship audit for #99.",
          "timestamp": "2026-04-11T00:24:28+02:00",
          "tree_id": "917011212a506748384b827b408a68ec2c648a9a",
          "url": "https://github.com/fallow-rs/fallow/commit/413f950df3ce238d1b831d6118714473f6e553dc"
        },
        "date": 1775859930718,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 463,
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
          "id": "79b1fc8050f8a278776f5302d6da992b0489ae7c",
          "message": "chore: release v2.27.6",
          "timestamp": "2026-04-11T00:27:17+02:00",
          "tree_id": "b649d3a4de2a3b262d371aa7b834ecd164079414",
          "url": "https://github.com/fallow-rs/fallow/commit/79b1fc8050f8a278776f5302d6da992b0489ae7c"
        },
        "date": 1775860115267,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 463,
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
          "id": "32c198b8cf4d0c18214e540c423d60b5435fd001",
          "message": "fix: resolve three false-positive sources in dead-code analysis\n\n- #102: entry points in ignored output dirs (dist/build/out/esm/cjs)\n  fall back to src/index.*, src/main.*, index.*, main.* when no direct\n  src/ mirror exists. Prevents the entire source tree becoming\n  unreachable in TypeScript libraries whose compiled entry has no\n  one-to-one source mapping.\n\n- #98: class member allowlist is now configurable. Top-level\n  FallowConfig.usedClassMembers and ExternalPluginDef.usedClassMembers\n  extend the built-in Angular/React lifecycle check with third-party\n  framework-invoked method names (ag-Grid agInit/refresh, Web Components\n  connectedCallback, TypeORM MigrationInterface.up/down). The allowlist\n  is merged with plugin contributions in analyze/mod.rs and scoped to\n  class members only, so enum members with matching names are still\n  flagged.\n\n- #103: Angular plugin reads stylePreprocessorOptions.includePaths from\n  angular.json, and the Nx plugin reads the same key from project.json.\n  Absolute directories thread through PluginResult.scssIncludePaths into\n  ResolveContext. Bare SCSS specifiers that fail file-local resolution\n  retry against each include directory using the SCSS partial / index\n  conventions. Parent-relative specifiers (../shared/vars) are left\n  untouched.\n\nSchema regenerated for the new usedClassMembers config fields. New\nintegration fixture tests/fixtures/angular-scss-include-paths/ covers\nthe end-to-end SCSS include-path flow.",
          "timestamp": "2026-04-11T13:18:12+02:00",
          "tree_id": "f4fa2973ee4091ab15e099c49a8e7114743183dd",
          "url": "https://github.com/fallow-rs/fallow/commit/32c198b8cf4d0c18214e540c423d60b5435fd001"
        },
        "date": 1775906363092,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 463,
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
          "id": "017fa39da072d4ab068fced7f2cf6211eac34795",
          "message": "fix: resolve sass builtins and workspace self-references\n\n- #104: SCSS sass:* built-in modules (sass:string, sass:math, etc.) are\n  now recognized as platform builtins alongside node:, bun:, cloudflare:,\n  and Deno std. Sass built-ins are language features provided by the Sass\n  compiler and cannot appear in package.json — imports like\n  `@use 'sass:color'` previously produced one false unlisted dependency\n  per unique module used across a codebase (up to 7). The sass: prefix\n  check is strict: the `sass` compiler package, sass-loader, and\n  @types/sass remain normal npm packages.\n\n- #106: Workspace libraries that use self-referencing package imports\n  (a Node.js v12+ feature commonly used by Angular libraries built with\n  ng-packagr) no longer report every secondary entry point file as\n  unused. A new workspace package fallback strips the matching package\n  name prefix from any bare specifier whose package name is in the\n  workspace registry and resolves the remainder against the library's\n  source tree via oxc_resolver::resolve_file, bypassing package.json\n  exports maps that point at compiled output. The fallback also covers\n  cross-workspace imports in monorepos that haven't run npm install,\n  where bare `@org/pkg/sub` specifiers would previously fall through to\n  NpmPackage classification and create false unused-file and\n  unlisted-dependency reports.\n\n  Wired into three sites in resolve/specifier.rs: the Err branch before\n  NpmPackage classification (primary path for the reproduction), and\n  both the Ok(canonical) and Err-canonical branches where the resolver\n  landed inside node_modules for a workspace package name but neither\n  try_source_fallback nor try_pnpm_workspace_fallback could map it back\n  to a source file.\n\nIssue #105 (HTML <script src=\\\"file.ts\\\"> bare filename) was already\nfixed in 2.27.6 by PR #101 (normalize_asset_url in html.rs) — no code\nchange needed.\n\nNew integration test fixture under\ntests/fixtures/workspace-self-reference/ mirrors the exact repro from\nissue #106.",
          "timestamp": "2026-04-11T19:05:06+02:00",
          "tree_id": "7ce2e029dd2e8fcd184db7bb370b8e0ae9eeed2e",
          "url": "https://github.com/fallow-rs/fallow/commit/017fa39da072d4ab068fced7f2cf6211eac34795"
        },
        "date": 1775927398922,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 463,
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
          "id": "e31cf48749026072c259b881e57ea8ac2c29a21b",
          "message": "chore: release v2.28.0",
          "timestamp": "2026-04-11T19:17:12+02:00",
          "tree_id": "a95c524acd7646e6e5497c948ed25b591fd7e081",
          "url": "https://github.com/fallow-rs/fallow/commit/e31cf48749026072c259b881e57ea8ac2c29a21b"
        },
        "date": 1775927928290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 463,
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
          "id": "1ae2f7e6cc4ea56a5174fb156dd80074f715008b",
          "message": "chore: release v2.28.1",
          "timestamp": "2026-04-11T20:48:57+02:00",
          "tree_id": "7aecae1d27deb3eb517de61519d8b98be6b0823b",
          "url": "https://github.com/fallow-rs/fallow/commit/1ae2f7e6cc4ea56a5174fb156dd80074f715008b"
        },
        "date": 1775933482869,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 464,
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
          "id": "d2d4600a7903ba89c7163cc53e30dcaa413c528a",
          "message": "test(extract): direct unit tests for scan_jsdoc_imports_in and has_public_tag\n\nAdd a `#[cfg(test)] mod tests` block in parse.rs with 26 direct unit\ntests for the two pure helper functions introduced in #105 and earlier.\n\nThe scan_jsdoc_imports_in tests (21) cover: single import with member,\nsingle/double quoted paths, multiple imports per body, union annotations\nwith multiple import() expressions, nested member access (first segment\nwins), parent-relative paths, bare package specifiers, side-effect form\nwithout a member, empty path, truncated body with no closing quote,\nmissing closing paren, whitespace between `)` and `.`, whitespace\nbetween `(` and quote, non-quote char after `(`, prose containing the\nword \"import\" but not the expression, multi-byte UTF-8 in paths, empty\nbody, body with no import(), append-to-existing-vec behavior, member\nident boundary parsing, and empty member name after the dot.\n\nThe has_public_tag tests (5) cover: bare @public tag, @api public\nvariant, rejection of partial words (@publicly), rejection of\n@apipublic, and rejection of unprefixed \"public\".\n\nNo behavior change. Addresses the rust-reviewer CONCERN on the original\n#105 implementation that flagged the absence of direct unit tests for\ncursor-advancement edge cases in the byte-scanning loop.",
          "timestamp": "2026-04-11T21:36:27+02:00",
          "tree_id": "19e6cdfb34d2ad91b015da9e490b1ed344e29106",
          "url": "https://github.com/fallow-rs/fallow/commit/d2d4600a7903ba89c7163cc53e30dcaa413c528a"
        },
        "date": 1775936259944,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 464,
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
          "id": "ba2141a1b3270ffceaac23c7e78d1d5bfef1c19e",
          "message": "fix(extract): track html`` tagged template literal asset references (#105)\n\nFollow-up to till's comment on #105: the v2.28.1 JSX `<script src>` /\n`<link href>` override only fires on JSX opening elements, but Hono\nlayouts written in plain `.ts` files emit HTML through the\n`hono/html` tagged template literal — so `/static/otp-input.js`\nreferenced from `` html`<script src=\"/static/otp-input.js\">` `` was\nstill being flagged as unused.\n\nA new `visit_tagged_template_expression` override mirrors the JSX path\nfor tagged templates whose tag is the bare identifier `html`. Each\nquasi is scanned independently with the existing HTML asset regexes\n(extracted into a shared `crate::html::collect_asset_refs` helper so\nthe HTML file parser and the visitor share one pipeline). Asset\nreferences that span an interpolation boundary\n(`` html`<script src=\"${base}/app.js\">` ``) are deliberately skipped\nrather than producing a garbled, unresolvable specifier.\n\nThe match is intentionally conservative — only the bare `html`\nidentifier is recognised. `css`, `sql`, `gql`, `styled.div`, and\nmember/call expressions are left alone so unrelated tagged templates\nin the same file are never misread as HTML. Mirrors the JSX\noverride's \"lowercase intrinsic only\" posture.\n\nCache version 35 -> 36 so warm caches miss the new extraction\nsemantics. Includes 14 unit tests and 1 end-to-end integration test\nvia a new `hono-html-tagged-template` fixture exercising the full\n`html\\`\\`` -> `static/otp-input.js` (SideEffect) reachability chain\nwith no external dependencies.",
          "timestamp": "2026-04-11T22:40:30+02:00",
          "tree_id": "d7a59c770bbd44f7ee3429abd33b9c61e1b55169",
          "url": "https://github.com/fallow-rs/fallow/commit/ba2141a1b3270ffceaac23c7e78d1d5bfef1c19e"
        },
        "date": 1775940264300,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 464,
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
          "id": "d0d69aa669ece6b526e6166761cbf6afa70cbe8c",
          "message": "chore: release v2.28.2",
          "timestamp": "2026-04-11T22:47:06+02:00",
          "tree_id": "68566d470d3f4348762a67ac2818c80bced1d51d",
          "url": "https://github.com/fallow-rs/fallow/commit/d0d69aa669ece6b526e6166761cbf6afa70cbe8c"
        },
        "date": 1775940682375,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 464,
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
          "id": "65104286192c17e875cc95b7ba5ac86b32abb892",
          "message": "feat(health): inline suppression for complexity findings (#108)\n\nAdd `IssueKind::Complexity` (discriminant 18) to the inline\nsuppression system so health command complexity findings can be\nsuppressed per-function or per-file:\n\n  // fallow-ignore-next-line complexity\n  function parseCsv(text) { ... }\n\n  // fallow-ignore-file complexity   (suppresses all functions in file)\n  // fallow-ignore-next-line         (blanket, also covers complexity)\n\nThe check happens in `collect_findings()` before pushing a finding,\nusing `suppress::is_suppressed()` with the function's line number.\nFile scores, vital signs, and hotspots are unaffected by suppression\nsince they reflect actual complexity, not alerting.\n\nHuman output now shows a suppress hint in the findings footer when\n3+ functions exceed thresholds.\n\nCache version 36 -> 37 so stale caches re-parse files that already\ncontain `// fallow-ignore-next-line complexity` comments (previously\nsilently ignored because the kind was unrecognised).",
          "timestamp": "2026-04-12T09:32:55+02:00",
          "tree_id": "4115c434a1562834e193e4a93e8b699f85100ddf",
          "url": "https://github.com/fallow-rs/fallow/commit/65104286192c17e875cc95b7ba5ac86b32abb892"
        },
        "date": 1775979398408,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 464,
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
          "id": "888b6ec5a6807219e20b1f3bd13436ac2a776e44",
          "message": "chore: release v2.29.0",
          "timestamp": "2026-04-12T09:39:00+02:00",
          "tree_id": "b17f3cd2d4d29ba9160114ba4c14ddab6013e99d",
          "url": "https://github.com/fallow-rs/fallow/commit/888b6ec5a6807219e20b1f3bd13436ac2a776e44"
        },
        "date": 1775979797389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 464,
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
          "id": "5ea37114e61b8f961c154288622959eb77afa39f",
          "message": "fix(flags): wire inline suppression into feature flag collection\n\nThe JSON output action suggested `// fallow-ignore-next-line feature-flag`\nbut the flags command never checked suppressions. Both the built-in and\ncustom flag collection loops now call `is_suppressed()` /\n`is_file_suppressed()` with `IssueKind::FeatureFlag`, matching the\ncontract the JSON output already promised.",
          "timestamp": "2026-04-12T10:00:05+02:00",
          "tree_id": "945fa52df7642983222a90b91013b73861cc78bb",
          "url": "https://github.com/fallow-rs/fallow/commit/5ea37114e61b8f961c154288622959eb77afa39f"
        },
        "date": 1775981022313,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 464,
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
          "id": "85ab8885f35c91c5ec5fb006dfa0fddd54385dd9",
          "message": "test(flags): regression test for feature-flag inline suppression\n\nThe fix in 5ea37114 wired is_suppressed() into the flags collection\nloop but shipped without a test. Add a CLI-level regression test\nverifying that // fallow-ignore-next-line feature-flag suppresses the\nannotated flag while leaving unsuppressed flags visible. Uses a\ndedicated feature-flag-suppression fixture with two env var flags,\none suppressed and one not.",
          "timestamp": "2026-04-12T10:09:31+02:00",
          "tree_id": "4d61e434fabebeb0c06dd493017d282763f98aa7",
          "url": "https://github.com/fallow-rs/fallow/commit/85ab8885f35c91c5ec5fb006dfa0fddd54385dd9"
        },
        "date": 1775981587284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 464,
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
          "id": "920a8e0cca3e1b58d0ef5bf106aacde11102cb96",
          "message": "chore: release v2.29.1",
          "timestamp": "2026-04-12T10:13:19+02:00",
          "tree_id": "f81e7cb7beb5212473becb3033f76f4a0820a639",
          "url": "https://github.com/fallow-rs/fallow/commit/920a8e0cca3e1b58d0ef5bf106aacde11102cb96"
        },
        "date": 1775981869172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 464,
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
          "id": "712bc212ac0d728a6065422a6b49847e2954d7e4",
          "message": "test: integration tests for all 5 features, fix default export resolution\n\nAdd 4 test fixtures and 7 integration tests:\n- arrow-wrapped-dynamic-imports: React.lazy, lazy() reachability + default export credit\n- visibility-tags: @public/@internal/@beta/@alpha suppress unused-export detection\n- entry-export-validation: --include-entry-exports flag enables/disables entry skip\n- script-multiplexers: concurrently/npm-run-all deps not false-flagged\n\nFix: arrow-wrapped imports with destructured_names [\"default\"] now produce\nImportedName::Default instead of ImportedName::Named(\"default\"), so the\ndefault export is correctly credited in the module graph.",
          "timestamp": "2026-04-13T00:07:27+02:00",
          "tree_id": "2157129d81c7b481451fa37e3bea58c8aa38aa70",
          "url": "https://github.com/fallow-rs/fallow/commit/712bc212ac0d728a6065422a6b49847e2954d7e4"
        },
        "date": 1776031904048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 464,
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
          "id": "7266c648d08820283e95da0567017783b810755b",
          "message": "chore: release v2.30.0",
          "timestamp": "2026-04-13T00:22:53+02:00",
          "tree_id": "64da1dfc25eb916ef271c9a9ba666650d7406d29",
          "url": "https://github.com/fallow-rs/fallow/commit/7266c648d08820283e95da0567017783b810755b"
        },
        "date": 1776032647855,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 219,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 464,
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
          "id": "cf3fa79f9c1215b1bf796f3a8d49f525ae71f56c",
          "message": "feat: add Hardhat, UnoCSS, Qwik, Convex, pnpm plugins (85 -> 90)\n\nFive new framework plugins, each validated against real open source\nprojects:\n\n- Hardhat: Ethereum dev framework. Parses hardhat.config via new\n  extract_imports_and_requires() to capture both import statements and\n  side-effect require() calls. Entry points for test/, scripts/, tasks/,\n  deploy/, ignition/modules/.\n- UnoCSS: Atomic CSS engine. Supports both uno.config and unocss.config\n  file names. Extracts preset/transformer imports via imports_only.\n  Prefix enabler @unocss/ catches all scoped packages.\n- Qwik: Web framework (v1 @builder.io + v2 @qwik.dev). File-system\n  routing with used_exports for route handlers (onGet, onPost, etc.)\n  and layouts including reset layouts (layout!).\n- Convex: Backend platform. All convex/**/*.ts files are entry points.\n  Protects _generated/, schema, auth, http from unused-file detection.\n- pnpm: Package manager with file-existence detection (pnpm-lock.yaml,\n  pnpm-workspace.yaml) since pnpm is rarely a package.json dependency.\n\nAlso adds extract_imports_and_requires() to config_parser.rs for\nconfigs that load plugins via top-level require() statements.",
          "timestamp": "2026-04-13T09:29:52+02:00",
          "tree_id": "49a7c77b15fdb3a97dfb38b63788a078c79ecb5b",
          "url": "https://github.com/fallow-rs/fallow/commit/cf3fa79f9c1215b1bf796f3a8d49f525ae71f56c"
        },
        "date": 1776065496323,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 224,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 475,
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
        "date": 1776066939557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 224,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 475,
            "unit": "count"
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
        "date": 1776068430628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 224,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 475,
            "unit": "count"
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
        "date": 1776069946011,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 224,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 475,
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
          "id": "9a372be83e39b91758711aeb2b6789cb2be605d6",
          "message": "docs: update README, output schema, and knip analysis for stale suppressions\n\nAdd stale suppression comments and @expected-unused JSDoc tag to\nREADME \"Dead code\" section. Add StaleSuppression definition and\nstale_suppressions field to docs/output-schema.json. Mark items\n#6 and #10 as shipped in knip-issue-analysis.md.",
          "timestamp": "2026-04-13T13:29:09+02:00",
          "tree_id": "5b28531801a5ed9f8da1167861fb20db9df28e37",
          "url": "https://github.com/fallow-rs/fallow/commit/9a372be83e39b91758711aeb2b6789cb2be605d6"
        },
        "date": 1776079909080,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 224,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 476,
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
          "id": "0fd3a4f91d73186af661911c7c46052c6d052a78",
          "message": "chore: release v2.32.0",
          "timestamp": "2026-04-13T13:33:21+02:00",
          "tree_id": "b05a03262ade3b3b5ac680df61ecbb4cedc14324",
          "url": "https://github.com/fallow-rs/fallow/commit/0fd3a4f91d73186af661911c7c46052c6d052a78"
        },
        "date": 1776080082824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 224,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 476,
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
          "id": "06c108192e0308605c8c4839d9d11932d343d3e9",
          "message": "test: add integration fixture and exhaustiveness test for stale suppressions\n\nIntegration fixture exercises all stale suppression variants:\n- Stale next-line comment (used export)\n- Active next-line comment (unused export, suppression working)\n- Stale blanket comment (no issues on next line)\n- Stale file-level comment (file is reachable)\n- Stale @expected-unused tag (export became used)\n- Active @expected-unused tag (export genuinely unused)\n\nExhaustiveness test ensures every IssueKind variant is classified\nin either core_kinds (checked by SuppressionContext) or NON_CORE_KINDS\n(excluded from stale detection). Fails when a new variant is added\nwithout being classified.",
          "timestamp": "2026-04-13T13:50:36+02:00",
          "tree_id": "82700228de6a3dc1cba36a97c3a39e73d0e09d10",
          "url": "https://github.com/fallow-rs/fallow/commit/06c108192e0308605c8c4839d9d11932d343d3e9"
        },
        "date": 1776081102627,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 224,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 476,
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
          "id": "2b76af893757da9d453ffdddab26b3e864f7925f",
          "message": "style: apply rustfmt to stale suppression tests",
          "timestamp": "2026-04-13T13:53:03+02:00",
          "tree_id": "0ec9e18ccb5b1cd07772aec91c67ed5f80a20760",
          "url": "https://github.com/fallow-rs/fallow/commit/2b76af893757da9d453ffdddab26b3e864f7925f"
        },
        "date": 1776081249748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 224,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 476,
            "unit": "count"
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
        "date": 1776082587075,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 224,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 477,
            "unit": "count"
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
        "date": 1776082842739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 224,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 477,
            "unit": "count"
          }
        ]
      }
    ]
  }
}