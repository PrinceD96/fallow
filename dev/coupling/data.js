window.BENCHMARK_DATA = {
  "lastUpdate": 1775844081339,
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
      }
    ]
  }
}