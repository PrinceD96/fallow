window.BENCHMARK_DATA = {
  "lastUpdate": 1780767086168,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Fallow Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780302393913,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63954,
            "range": "± 884",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4104760,
            "range": "± 142058",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5864808,
            "range": "± 190952",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28027212,
            "range": "± 710539",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119394,
            "range": "± 1413",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2266,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235812,
            "range": "± 33473",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1067199,
            "range": "± 24332",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1512486,
            "range": "± 16727",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574443,
            "range": "± 35032",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4357220,
            "range": "± 92589",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4387401,
            "range": "± 32854",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2971969,
            "range": "± 27876",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780303738311,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62613,
            "range": "± 2107",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3992721,
            "range": "± 165036",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5933142,
            "range": "± 189643",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28025744,
            "range": "± 505909",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117324,
            "range": "± 853",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2254,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234755,
            "range": "± 7041",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069121,
            "range": "± 8801",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1509679,
            "range": "± 17603",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577884,
            "range": "± 11243",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4339827,
            "range": "± 29976",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4392010,
            "range": "± 26683",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2985177,
            "range": "± 8125",
            "unit": "ns/iter"
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
        "date": 1780304126570,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47076,
            "range": "± 1040",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3665148,
            "range": "± 127362",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5744870,
            "range": "± 140549",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29089414,
            "range": "± 435460",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120398,
            "range": "± 2600",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2300,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185703,
            "range": "± 6440",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820183,
            "range": "± 7251",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321646,
            "range": "± 30175",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538702,
            "range": "± 36910",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3302935,
            "range": "± 27775",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3348250,
            "range": "± 34020",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2243851,
            "range": "± 14365",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780304943948,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46880,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4002410,
            "range": "± 220106",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6096480,
            "range": "± 218619",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31722306,
            "range": "± 1305365",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 124191,
            "range": "± 3631",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2301,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 190865,
            "range": "± 8119",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 887593,
            "range": "± 27598",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1332519,
            "range": "± 35068",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 544779,
            "range": "± 26927",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3427745,
            "range": "± 87316",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3468445,
            "range": "± 98486",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2404169,
            "range": "± 33454",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780307174505,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 48534,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3861569,
            "range": "± 155414",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5839939,
            "range": "± 265021",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30742061,
            "range": "± 1295040",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114217,
            "range": "± 603",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2282,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 188842,
            "range": "± 6136",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 836692,
            "range": "± 24916",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1326717,
            "range": "± 22250",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 528134,
            "range": "± 35315",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3311210,
            "range": "± 35500",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3336894,
            "range": "± 31373",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2231008,
            "range": "± 23110",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780307663973,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 54100,
            "range": "± 750",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3452620,
            "range": "± 232917",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4999844,
            "range": "± 348203",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23796666,
            "range": "± 842018",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110577,
            "range": "± 2181",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3059,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157449,
            "range": "± 4157",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 711202,
            "range": "± 3730",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1195183,
            "range": "± 16549",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 471751,
            "range": "± 13857",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2934733,
            "range": "± 55669",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2982546,
            "range": "± 51573",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1954735,
            "range": "± 66913",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780308326724,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 65086,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4058113,
            "range": "± 154661",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5920826,
            "range": "± 179406",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27893344,
            "range": "± 427035",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119663,
            "range": "± 564",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2242,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235411,
            "range": "± 2847",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1065468,
            "range": "± 66742",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1509938,
            "range": "± 15478",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574574,
            "range": "± 6057",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4338534,
            "range": "± 41005",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4299071,
            "range": "± 38972",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2982300,
            "range": "± 36017",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780311243809,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 64110,
            "range": "± 1343",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4034093,
            "range": "± 145941",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5917302,
            "range": "± 207522",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28121897,
            "range": "± 484355",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118094,
            "range": "± 2116",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2240,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234327,
            "range": "± 4299",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1056081,
            "range": "± 214027",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1508333,
            "range": "± 34517",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574826,
            "range": "± 17707",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4332017,
            "range": "± 27141",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4377379,
            "range": "± 141092",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2928299,
            "range": "± 85482",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780312200566,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 48433,
            "range": "± 984",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3815181,
            "range": "± 166315",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5782691,
            "range": "± 234703",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29183237,
            "range": "± 397333",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119014,
            "range": "± 2183",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2320,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184345,
            "range": "± 3766",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818802,
            "range": "± 5248",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1316698,
            "range": "± 26625",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532486,
            "range": "± 11704",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3302280,
            "range": "± 28956",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3326992,
            "range": "± 93612",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2342682,
            "range": "± 37877",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780314295386,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63636,
            "range": "± 1005",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3727596,
            "range": "± 188152",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5694234,
            "range": "± 239263",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27581229,
            "range": "± 449359",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115997,
            "range": "± 1131",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2218,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237672,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1076911,
            "range": "± 72952",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1531332,
            "range": "± 13770",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 573968,
            "range": "± 26733",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4387965,
            "range": "± 32720",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4306434,
            "range": "± 34526",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2990852,
            "range": "± 28325",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780318062316,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47740,
            "range": "± 1185",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3855707,
            "range": "± 148688",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5845168,
            "range": "± 183924",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30228877,
            "range": "± 597888",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113710,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2427,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185385,
            "range": "± 808",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821028,
            "range": "± 3199",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1323424,
            "range": "± 14151",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535177,
            "range": "± 25232",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3328652,
            "range": "± 71628",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3371210,
            "range": "± 59196",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2240049,
            "range": "± 9396",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780319420195,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47901,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3651568,
            "range": "± 148106",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5868048,
            "range": "± 160507",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30366676,
            "range": "± 623041",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119525,
            "range": "± 1585",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2310,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184854,
            "range": "± 1474",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822410,
            "range": "± 19539",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320410,
            "range": "± 18082",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536458,
            "range": "± 11439",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3333617,
            "range": "± 105810",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3363531,
            "range": "± 38387",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2317876,
            "range": "± 31090",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780320105307,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 48077,
            "range": "± 708",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3871594,
            "range": "± 173953",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6015463,
            "range": "± 189757",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30599161,
            "range": "± 517506",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111818,
            "range": "± 4711",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2311,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185967,
            "range": "± 1856",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819953,
            "range": "± 7444",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320927,
            "range": "± 19599",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534968,
            "range": "± 9210",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3314738,
            "range": "± 37654",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3350759,
            "range": "± 29161",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2221508,
            "range": "± 69047",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780327904697,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 64423,
            "range": "± 1477",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4145417,
            "range": "± 184723",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6074143,
            "range": "± 265739",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28572230,
            "range": "± 444367",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114679,
            "range": "± 2981",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2276,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234378,
            "range": "± 28087",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1065068,
            "range": "± 9464",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1510947,
            "range": "± 113093",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 570562,
            "range": "± 29307",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4340438,
            "range": "± 27966",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4364707,
            "range": "± 59505",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2968126,
            "range": "± 10541",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780328752417,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 64228,
            "range": "± 2031",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4139887,
            "range": "± 157309",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5979071,
            "range": "± 197581",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29298865,
            "range": "± 575236",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114691,
            "range": "± 3175",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2237,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235440,
            "range": "± 3061",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069155,
            "range": "± 8217",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1525375,
            "range": "± 17032",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 580196,
            "range": "± 6985",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4374495,
            "range": "± 31873",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4267632,
            "range": "± 29777",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2978568,
            "range": "± 18676",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780330526651,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 53992,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3213797,
            "range": "± 92339",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4748542,
            "range": "± 87004",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23513323,
            "range": "± 446904",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114955,
            "range": "± 3235",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3078,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156452,
            "range": "± 3401",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 713564,
            "range": "± 7554",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1191156,
            "range": "± 27912",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 470584,
            "range": "± 12160",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2914399,
            "range": "± 40612",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2956932,
            "range": "± 31986",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1952209,
            "range": "± 9125",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b75aa9f9e05fe6d713ba436cfa68855761f1d2f2",
          "message": "fix(coverage): use registry srcmap dependencies\n\nMove fallow onto oxc_coverage_instrument 0.7.6, which depends on the registry-published srcmap 0.3.7 crates. This removes the temporary git source alias while keeping the GeneratedOffsetLookup remapping path in place.\n\nUpdate the CLI fixture construction for the newer FileCoverage shape, refresh the stale agent-file manifest that was already failing CI, and align VS Code test fixtures with the generated output contract.",
          "timestamp": "2026-06-01T19:14:01+02:00",
          "tree_id": "cd845142b8b04970956f63d85fea28c675b48ca4",
          "url": "https://github.com/fallow-rs/fallow/commit/b75aa9f9e05fe6d713ba436cfa68855761f1d2f2"
        },
        "date": 1780335021529,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 64086,
            "range": "± 2859",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4099334,
            "range": "± 147573",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6015985,
            "range": "± 205219",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28841105,
            "range": "± 421554",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117182,
            "range": "± 1314",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2248,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235554,
            "range": "± 4662",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1052472,
            "range": "± 97552",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1510893,
            "range": "± 17073",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 571312,
            "range": "± 10735",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4256818,
            "range": "± 26141",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4285862,
            "range": "± 50525",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2922837,
            "range": "± 28614",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5d142fa900321ab2f997eebefb19d9db1bd806a4",
          "message": "fix: ignore Svelte script src imports\n\nSvelte treats markup-level script src tags as runtime HTML, including tags in svelte:head. The extractor still parses src metadata for spans, but only Vue external scripts emit graph imports now.\n\nThis keeps root-relative browser assets out of unresolved-imports while preserving Vue script src and SFC style src behavior. The cache version is bumped to drop stale synthetic Svelte script edges.\n\nFixes #835.",
          "timestamp": "2026-06-01T20:32:49+02:00",
          "tree_id": "2ba71c88026959f2b76c5afbb76251a7279e6f5e",
          "url": "https://github.com/fallow-rs/fallow/commit/5d142fa900321ab2f997eebefb19d9db1bd806a4"
        },
        "date": 1780339122842,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47752,
            "range": "± 1099",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3790689,
            "range": "± 203197",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5820902,
            "range": "± 169530",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29830141,
            "range": "± 691685",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115077,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2348,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185322,
            "range": "± 4407",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 824387,
            "range": "± 11048",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1319703,
            "range": "± 28665",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531342,
            "range": "± 18792",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3315258,
            "range": "± 60439",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3360347,
            "range": "± 58628",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2250396,
            "range": "± 35275",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "216094f3ecfc0452033d9a81c6c89b21150d4724",
          "message": "fix(pinia): resolve Nuxt store auto-imports\n\nPinia's Nuxt module makes direct stores/ and app/stores/ files available to user code without imports. Fallow already captured unresolved script identifiers for Nuxt auto-imports, but it had no plugin rules mapping store factory names back to store files.\n\nAdd a Pinia plugin activated by @pinia/nuxt. It contributes analysis-time auto-import rules for value exports named use<Name>Store from direct default store directories, which keeps the provider file and matching export reachable while leaving unrelated sibling exports reportable.\n\nNested store directories and custom storesDirs config remain out of scope for the default detector. The regression fixtures cover the supported directories, disabled activation, type-only exports, non-store exports, and nested-store exclusion.\n\nFixes #740.",
          "timestamp": "2026-06-01T20:41:36+02:00",
          "tree_id": "e43bde7cf96742d1ea189a94198f43fccccd8d83",
          "url": "https://github.com/fallow-rs/fallow/commit/216094f3ecfc0452033d9a81c6c89b21150d4724"
        },
        "date": 1780339647957,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47773,
            "range": "± 888",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3881843,
            "range": "± 174189",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5971277,
            "range": "± 219620",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30818105,
            "range": "± 623628",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111429,
            "range": "± 1129",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2349,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184955,
            "range": "± 8468",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818715,
            "range": "± 14759",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1315669,
            "range": "± 29197",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 543523,
            "range": "± 30595",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3309633,
            "range": "± 34169",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3333946,
            "range": "± 87881",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2225334,
            "range": "± 7704",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5efa81c680e8f5a0af1d7cede4d34c68acac572e",
          "message": "test: cover runtime-coverage pure helpers (sidecar, source-map, utf16)\n\nAdd unit tests for the deterministic, network-free helpers in the\nruntime-coverage module that the fixture-heavy integration tests don't\nreach directly: parse_sidecar_version_key, sidecar_package_version_key,\nnormalize_package_manager_path, project_local_sidecar_names,\nsidecar_missing_message (generic + pnpm project root),\nutf16_source_offset_to_byte_offset (surrogate-pair and out-of-range\ncases), file_url_to_path, resolve_source_map_base (inline/relative/\nremote), virtual_source_candidates, resolve_virtual_source_path scheme\nguard, and location_precedes ordering.",
          "timestamp": "2026-06-01T22:50:21+02:00",
          "tree_id": "a828eb16f0330b929a70baf020cdc0be6bc3f39c",
          "url": "https://github.com/fallow-rs/fallow/commit/5efa81c680e8f5a0af1d7cede4d34c68acac572e"
        },
        "date": 1780347346782,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 48491,
            "range": "± 2164",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3920051,
            "range": "± 161360",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5942010,
            "range": "± 176331",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29831299,
            "range": "± 443685",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119471,
            "range": "± 917",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2304,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184614,
            "range": "± 2870",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822249,
            "range": "± 15312",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317065,
            "range": "± 20625",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 529998,
            "range": "± 15101",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3325272,
            "range": "± 44315",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3338647,
            "range": "± 38605",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2216879,
            "range": "± 8892",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "89f1fa216afdc45088beedf6b433d07e6934ef8c",
          "message": "docs: changelog and detection notes for #838-#848 fixes\n\nRecords the nine shipped fixes (issues #838, #839, #840, #841, #843, #845, #846, #847, #848) in CHANGELOG, with detection.md / plugins.md capability notes and the agent-file manifest re-bless.",
          "timestamp": "2026-06-02T11:05:07+02:00",
          "tree_id": "a1ca9716b0015e1c6b8a21a12709bc55088cba7f",
          "url": "https://github.com/fallow-rs/fallow/commit/89f1fa216afdc45088beedf6b433d07e6934ef8c"
        },
        "date": 1780391614203,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46904,
            "range": "± 868",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3894999,
            "range": "± 167206",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5828301,
            "range": "± 163102",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29987906,
            "range": "± 515775",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113270,
            "range": "± 6898",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2318,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185658,
            "range": "± 7092",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822593,
            "range": "± 5561",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1316385,
            "range": "± 17359",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536704,
            "range": "± 13284",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3309387,
            "range": "± 26159",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3340248,
            "range": "± 29936",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2224983,
            "range": "± 9709",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2df7aaebcb8dba125545bcd933c793bba37c40fe",
          "message": "feat(security): data-driven tainted-sink candidate catalogue\n\nAdd a deterministic, opt-in local security-candidate layer surfaced only by\n`fallow security`. Findings are CANDIDATES for downstream agent verification\n(the DeepSec / Warden model), never under bare `fallow` or the audit gate.\n\nA shape-agnostic ModuleInfo.security_sinks extract capture feeds a data-driven\nmatcher catalogue (crates/core/data/security_matchers.toml + catalogue.rs), so\nadding a CWE category is a TOML row with no Rust enum churn. One generic\nSecurityFindingKind::TaintedSink carries category + cwe; IssueKind::SecuritySink\nand a default-off security_sink rule gate it. Nine seed categories ship, each\nwith positive and literal-negative integration fixtures: dangerous-html (CWE-79),\ncommand-injection (78, provenance-gated), code-injection (94, eval + vm),\nsql-injection (89), ssrf (918), path-traversal (22), open-redirect (601),\nweak-crypto (327), unsafe-deserialization (502). The bespoke graph-structural\nclient-server-leak class is unchanged.\n\nConservative non-literal-argument trigger (literal args never fire); blind spots\ncounted in-band via unresolved_callee_sites. Human / JSON / SARIF output carry\ncategory + cwe. ADR-021 non-goals (SCA, CVE/advisory feeds, auth-logic finding)\nstay out of scope.",
          "timestamp": "2026-06-02T12:10:35+02:00",
          "tree_id": "2142dd9c28752b63b29c50ef875c7fa7355116d4",
          "url": "https://github.com/fallow-rs/fallow/commit/2df7aaebcb8dba125545bcd933c793bba37c40fe"
        },
        "date": 1780395595435,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 56077,
            "range": "± 1006",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3408577,
            "range": "± 139197",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4924819,
            "range": "± 140552",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23352870,
            "range": "± 446903",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107922,
            "range": "± 2602",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3097,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156496,
            "range": "± 2359",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 714903,
            "range": "± 6355",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1194310,
            "range": "± 14773",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 473580,
            "range": "± 15842",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2919083,
            "range": "± 30803",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2974127,
            "range": "± 21628",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1966738,
            "range": "± 21340",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "1c8319d890a2c984d3ef6dd67aaeca79fa1a284c",
          "message": "chore: release v2.86.0",
          "timestamp": "2026-06-02T13:00:50+02:00",
          "tree_id": "82e1a936d7429e3d2926df3785762549bc316c05",
          "url": "https://github.com/fallow-rs/fallow/commit/1c8319d890a2c984d3ef6dd67aaeca79fa1a284c"
        },
        "date": 1780398409115,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 67754,
            "range": "± 2690",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4184812,
            "range": "± 167401",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6031456,
            "range": "± 157092",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28894203,
            "range": "± 817669",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117317,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2249,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 231552,
            "range": "± 1254",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1048395,
            "range": "± 17732",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1496609,
            "range": "± 13282",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 565718,
            "range": "± 17580",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4266417,
            "range": "± 146026",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4280800,
            "range": "± 202694",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2935656,
            "range": "± 28849",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a6b63f1e411fcaf1f217779f7353f395eade348c",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.86.0",
          "timestamp": "2026-06-02T13:36:55+02:00",
          "tree_id": "8f8002300c66d5dec673e5c2b211d209070064e5",
          "url": "https://github.com/fallow-rs/fallow/commit/a6b63f1e411fcaf1f217779f7353f395eade348c"
        },
        "date": 1780400535767,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 49157,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3785919,
            "range": "± 144500",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5837670,
            "range": "± 196837",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30190088,
            "range": "± 543677",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109553,
            "range": "± 891",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2336,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185568,
            "range": "± 7668",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821915,
            "range": "± 3264",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317777,
            "range": "± 17170",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536887,
            "range": "± 4223",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3329041,
            "range": "± 33535",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3366666,
            "range": "± 35063",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2255206,
            "range": "± 14339",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ae240a0a375ac6fb691cd611c055f223c9826a49",
          "message": "fix(extract): bind useMemo-returned class instances for member crediting\n\nA service instantiated through useMemo (const svc = useMemo(() => new Svc(), [])) left its methods reported as unused-class-member, because only the array-destructured useState form was tracked. useMemo returns the factory's product directly, so the non-destructured identifier is now bound to the constructed class. Scoped to useMemo / React.useMemo: useState (tuple-returning) and arbitrary wrappers are not bound from the non-destructured form. Bumps the extraction CACHE_VERSION.\n\nFixes #844",
          "timestamp": "2026-06-02T13:57:50+02:00",
          "tree_id": "66eea1ea710fbd6e6d265fe94ef6d4692384e5d4",
          "url": "https://github.com/fallow-rs/fallow/commit/ae240a0a375ac6fb691cd611c055f223c9826a49"
        },
        "date": 1780401935143,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 68496,
            "range": "± 828",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4011248,
            "range": "± 186248",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6024953,
            "range": "± 182827",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28839152,
            "range": "± 489573",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116010,
            "range": "± 1648",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2255,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235740,
            "range": "± 4775",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070663,
            "range": "± 13352",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1524215,
            "range": "± 17654",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 579362,
            "range": "± 7905",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4388670,
            "range": "± 32312",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4386481,
            "range": "± 28536",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2993018,
            "range": "± 58988",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "eecb1d601bf131e0c3fa59d63496cea1749f9ed9",
          "message": "feat(security): reachability-weighted ranking from entry points (#860)",
          "timestamp": "2026-06-02T15:22:50+02:00",
          "tree_id": "8d32c1089005507044774d50ed6c92fea03ee3de",
          "url": "https://github.com/fallow-rs/fallow/commit/eecb1d601bf131e0c3fa59d63496cea1749f9ed9"
        },
        "date": 1780408065120,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 51395,
            "range": "± 1056",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3811289,
            "range": "± 147630",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5857149,
            "range": "± 225103",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29938491,
            "range": "± 954361",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117744,
            "range": "± 1099",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2333,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186020,
            "range": "± 7756",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823395,
            "range": "± 5001",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321448,
            "range": "± 17073",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535560,
            "range": "± 13089",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3332880,
            "range": "± 112812",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3364606,
            "range": "± 154073",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2234292,
            "range": "± 6762",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "85eb70dd15a1a1adcf2ec2a0af13c2616a2e13e6",
          "message": "feat(security): framework-aware sinks via the plugin system (#861)",
          "timestamp": "2026-06-02T15:43:29+02:00",
          "tree_id": "6a30e96efa35758e0c4c60816feb33396cb62114",
          "url": "https://github.com/fallow-rs/fallow/commit/85eb70dd15a1a1adcf2ec2a0af13c2616a2e13e6"
        },
        "date": 1780408397761,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 68672,
            "range": "± 1477",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4266083,
            "range": "± 131064",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6113625,
            "range": "± 182582",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29282111,
            "range": "± 518427",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114086,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2457,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234468,
            "range": "± 5885",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1062800,
            "range": "± 4766",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1512571,
            "range": "± 22363",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 570274,
            "range": "± 18666",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4333414,
            "range": "± 25720",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4379443,
            "range": "± 27293",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2960470,
            "range": "± 9930",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "0c58d98394040e3e68c3d15ea8469fe9a4f640a7",
          "message": "feat(security): model untrusted sources for source-to-sink precision (#859)",
          "timestamp": "2026-06-02T15:52:02+02:00",
          "tree_id": "05e9c2a49722d8a5379fa6f643e8a088e961da10",
          "url": "https://github.com/fallow-rs/fallow/commit/0c58d98394040e3e68c3d15ea8469fe9a4f640a7"
        },
        "date": 1780408722046,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 50977,
            "range": "± 654",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3840949,
            "range": "± 165659",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5892259,
            "range": "± 218471",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30187682,
            "range": "± 586917",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119745,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2373,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186171,
            "range": "± 3770",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 826660,
            "range": "± 16492",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1323533,
            "range": "± 28182",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538346,
            "range": "± 13308",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3323325,
            "range": "± 57232",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3373772,
            "range": "± 63709",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2239793,
            "range": "± 18677",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "1243f9893f5852ace2f7804e5ec27ba34580fe7a",
          "message": "feat(security): add deterministic CWE catalogue categories (#862)",
          "timestamp": "2026-06-02T17:36:39+02:00",
          "tree_id": "49d48ad019ff309b9a761b193781c65508f16968",
          "url": "https://github.com/fallow-rs/fallow/commit/1243f9893f5852ace2f7804e5ec27ba34580fe7a"
        },
        "date": 1780415145556,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 51700,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3935394,
            "range": "± 172145",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6018905,
            "range": "± 181813",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31796197,
            "range": "± 992089",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118557,
            "range": "± 1048",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2350,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186524,
            "range": "± 3612",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820584,
            "range": "± 5469",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317535,
            "range": "± 30125",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537588,
            "range": "± 34074",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3319744,
            "range": "± 61332",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3347119,
            "range": "± 45067",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2235510,
            "range": "± 7420",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "766aeafafe109ee223af9deee98276f4ca34ac52",
          "message": "docs(security): fix redundant explicit doc link in tainted_sink\n\nThe catalogue detector module doc used an explicit [`SinkSite`](path)\ntarget; the bare label already resolves, so rustdoc's\n`redundant-explicit-links` lint failed the Documentation CI job (the\nlocal pre-push hook only runs fmt+clippy, so it slipped through).",
          "timestamp": "2026-06-02T17:49:35+02:00",
          "tree_id": "13e45472566f94188acf68c5a12e0b1407f500b5",
          "url": "https://github.com/fallow-rs/fallow/commit/766aeafafe109ee223af9deee98276f4ca34ac52"
        },
        "date": 1780415703093,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 51606,
            "range": "± 1417",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3744037,
            "range": "± 135011",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5831715,
            "range": "± 241179",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29893614,
            "range": "± 425652",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117913,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2332,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186386,
            "range": "± 2556",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821830,
            "range": "± 3379",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1323412,
            "range": "± 17970",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 525115,
            "range": "± 31834",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3348880,
            "range": "± 39330",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3390878,
            "range": "± 26892",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2245257,
            "range": "± 11827",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a3adfa9fd45ac6440cd11202c2b00ddd507b921e",
          "message": "test(security): pin prototype-pollution __proto__ matcher + cast blind spot\n\nThe catalogue had a `*.__proto__` member-assign matcher but the fixture\nonly exercised the recursive-merge row. Add a static `obj.__proto__ = x`\npositive (asserted by line so it is distinct from the merge candidate)\nand a TypeScript-cast `(obj as {...}).__proto__ = x` negative that pins\nthe documented flattening blind spot (cast object is a TSAsExpression,\nnot a bare identifier, so the callee path does not resolve). Also note\nthe blind spot in security_matchers.toml.",
          "timestamp": "2026-06-02T18:14:33+02:00",
          "tree_id": "002613256f3816c6016fcc9360a434ce3531d53a",
          "url": "https://github.com/fallow-rs/fallow/commit/a3adfa9fd45ac6440cd11202c2b00ddd507b921e"
        },
        "date": 1780417191414,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 69319,
            "range": "± 1553",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4110769,
            "range": "± 195923",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6125263,
            "range": "± 210495",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29201916,
            "range": "± 628288",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116895,
            "range": "± 603",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2283,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232387,
            "range": "± 3244",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1048840,
            "range": "± 4766",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1495807,
            "range": "± 13721",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572237,
            "range": "± 8095",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4280187,
            "range": "± 56333",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4344200,
            "range": "± 63945",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2913898,
            "range": "± 28567",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "60a9b7667a7e6536d2838fd408f8432f84cf4ca5",
          "message": "fix(extract): remap SFC security sink spans\n\nSecurity sink extraction in Vue and Svelte scripts reused parser-local byte offsets after the surrounding SFC source had been restored for line lookup. This made reports point at the same line number inside the script body instead of the real line in the component file.\n\nRemap captured sink spans through the same SFC offset translation used for imports, exports, and other extracted references. Add a Vue script setup regression test that checks the sink span resolves to the original component source.",
          "timestamp": "2026-06-02T20:58:53+02:00",
          "tree_id": "004ab96213410aa65db768a4c7faa2f662d35373",
          "url": "https://github.com/fallow-rs/fallow/commit/60a9b7667a7e6536d2838fd408f8432f84cf4ca5"
        },
        "date": 1780427051560,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 70189,
            "range": "± 4045",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4117784,
            "range": "± 186128",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6096291,
            "range": "± 178000",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29218409,
            "range": "± 381156",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120013,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2293,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232036,
            "range": "± 4021",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1047979,
            "range": "± 56550",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1497779,
            "range": "± 35275",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 569622,
            "range": "± 10070",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4252695,
            "range": "± 25977",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4273440,
            "range": "± 34327",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2922386,
            "range": "± 14469",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "50d1ef0541b80b6ee0432d95949eb21621fcc95d",
          "message": "feat(mcp): add security candidates tool\n\nAgents need a structured way to inspect the existing fallow security candidate surface without shelling out or enabling mutating CLI paths. Add a read-only MCP tool that runs fallow security in JSON mode and keeps the wording explicit that results are unverified candidates, not confirmed vulnerabilities.\n\nThe MCP layer now has SecurityCandidatesParams plus a dedicated arg builder, server registration, schema and description checks, argument tests, and an e2e smoke against the security fixture. The exposed params are limited to root, config, workspace, changed_since, changed_workspaces, no_cache, and threads; SARIF, CI, failure, summary, baseline, and fix behavior remain CLI-only.\n\nThe MCP rule docs, bundled npm skill, changelog, and agent-file checksum are updated for the new tool inventory.\n\nFixes #864.",
          "timestamp": "2026-06-02T21:09:17+02:00",
          "tree_id": "9841920ddf28744782405080f2cd832957decb8e",
          "url": "https://github.com/fallow-rs/fallow/commit/50d1ef0541b80b6ee0432d95949eb21621fcc95d"
        },
        "date": 1780427684092,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 58444,
            "range": "± 750",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3126661,
            "range": "± 95154",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4708262,
            "range": "± 152185",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22436284,
            "range": "± 329327",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116934,
            "range": "± 3971",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3057,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156862,
            "range": "± 1773",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 712531,
            "range": "± 13293",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1186549,
            "range": "± 15273",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 461104,
            "range": "± 9038",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2875951,
            "range": "± 11051",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2923610,
            "range": "± 15793",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1948790,
            "range": "± 5102",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "571d78a5805e1dff2e27f3ae93b01d7ff9ec031b",
          "message": "fix(security): suppress DOMPurify-backed HTML sinks\n\nHTML sink candidates are higher signal when fallow can distinguish values that pass through a trusted sanitizer before they reach the sink. This teaches extraction to recognize DOMPurify and isomorphic-dompurify provenance from default imports, namespace imports, and CommonJS require bindings, then records sanitized sink arguments for the security analyzer.\n\nSanitized locals are resolved lexically during extraction so shadowed identifiers cannot suppress unrelated sinks. The analyzer only applies the suppression to HTML sink categories; redirect and path-containment sanitizer handling remains out of scope.\n\nRefs #863.",
          "timestamp": "2026-06-02T21:10:48+02:00",
          "tree_id": "fee314638f09ed803c84ab30035451b6a275c0b2",
          "url": "https://github.com/fallow-rs/fallow/commit/571d78a5805e1dff2e27f3ae93b01d7ff9ec031b"
        },
        "date": 1780428006067,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 53684,
            "range": "± 2534",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3886274,
            "range": "± 165671",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5963507,
            "range": "± 178147",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30513874,
            "range": "± 505065",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119015,
            "range": "± 564",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2332,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186610,
            "range": "± 4127",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823691,
            "range": "± 19455",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1325946,
            "range": "± 19580",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536938,
            "range": "± 34709",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3326914,
            "range": "± 27260",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3363245,
            "range": "± 28153",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2254339,
            "range": "± 5368",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "92fbd74399bc6138a771c51a9dde7c8dbd83ae95",
          "message": "fix(unused-class-members): credit Ionic lifecycle hooks\n\nIonic Angular invokes page lifecycle methods by name through its router outlet, with the TypeScript interfaces acting as optional compile-time structure rather than the runtime dispatch boundary. Treat the documented Ionic page hooks as framework-used whenever the Ionic Angular plugin is active.\n\nAdd a built-in Ionic plugin that activates on @ionic/angular, keeps ionic.config.json reachable, and credits common Ionic tooling dependencies. The regression fixture keeps the real lifecycle names quiet while preserving a same-prefix typo as an unused class member.\n\nFixes #868.",
          "timestamp": "2026-06-02T21:46:24+02:00",
          "tree_id": "0e0ad03b4b8e40a540f04161c387088fa5fa503b",
          "url": "https://github.com/fallow-rs/fallow/commit/92fbd74399bc6138a771c51a9dde7c8dbd83ae95"
        },
        "date": 1780429967858,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61190,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3363829,
            "range": "± 247381",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4937749,
            "range": "± 336963",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23196835,
            "range": "± 1022652",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112780,
            "range": "± 3229",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3121,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157704,
            "range": "± 2421",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 718684,
            "range": "± 4308",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1204222,
            "range": "± 32624",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 469028,
            "range": "± 16611",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2937115,
            "range": "± 34192",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2976804,
            "range": "± 33281",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1958336,
            "range": "± 30912",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "011ab0d125ddc254e3c76ecaac775e21912e1124",
          "message": "fix(sass): resolve package entrypoint imports\n\nSass package roots can resolve through package export conditions such as `sass` and `style`, but fallow only applied the style resolver to package subpaths that already looked like stylesheet files. This left Angular Material theming imports reported as unresolved and cascaded into unused dependency findings.\n\nThis wires the Sass condition into the style resolver, preserves resolved package stylesheets as external style files, and lets the external style scanner follow package-local relative Sass imports with partial and index lookup. Synthetic package credits are limited to packages declared by the importing root or workspace, so dependency internals do not create new unlisted dependency findings.\n\nFixes #871.",
          "timestamp": "2026-06-02T22:40:27+02:00",
          "tree_id": "87709ce8bb0467c3c2a1047338d6e4fb13900076",
          "url": "https://github.com/fallow-rs/fallow/commit/011ab0d125ddc254e3c76ecaac775e21912e1124"
        },
        "date": 1780433155637,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 52561,
            "range": "± 1325",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4022261,
            "range": "± 165716",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6214541,
            "range": "± 425041",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31151254,
            "range": "± 563168",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106622,
            "range": "± 1206",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2352,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186752,
            "range": "± 3555",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 824273,
            "range": "± 8612",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1324715,
            "range": "± 22158",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538003,
            "range": "± 11490",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3328454,
            "range": "± 29534",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3362904,
            "range": "± 33243",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2231859,
            "range": "± 6058",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d96cd668b184d9f01d6c7654ae52858869e8821c",
          "message": "fix(plugins): keep Firebase Messaging worker reachable\n\nFirebase Messaging loads its default service worker by browser convention from public/firebase-messaging-sw.js, so normal import graph reachability cannot see it. Treating that file as an ordinary unreferenced source file caused valid notification setups to report an unused file.\n\nThis adds a built-in Firebase plugin that activates on the exact firebase dependency and marks the root and nested public service worker paths as always used. Dependency credit is intentionally unchanged, so the firebase package still depends on source imports or other package usage.\n\nThe regression fixture covers root and nested public workers plus ordinary public control files, and the detection note records the convention for future plugin work.\n\nFixes #873.",
          "timestamp": "2026-06-03T00:46:07+02:00",
          "tree_id": "071e4dacfa38951d4a196470a95c6559ebdf3b1a",
          "url": "https://github.com/fallow-rs/fallow/commit/d96cd668b184d9f01d6c7654ae52858869e8821c"
        },
        "date": 1780440680266,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40838,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3168705,
            "range": "± 133852",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4862157,
            "range": "± 174392",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 24336519,
            "range": "± 601158",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 86964,
            "range": "± 704",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1832,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143845,
            "range": "± 24747",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 637530,
            "range": "± 7552",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1024937,
            "range": "± 16515",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 421878,
            "range": "± 11512",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2570028,
            "range": "± 27148",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2593237,
            "range": "± 30602",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1738635,
            "range": "± 12115",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b1d9593b4341ff105f424cffd6a8dc89aa8f9c5f",
          "message": "fix(security): suppress sanitized sink candidates\n\nTeach the extraction pipeline to carry sanitizer metadata for URL and path security sink candidates without changing the security output contract.\n\nURL suppression is limited to fail-closed guards backed by literal local const arrays or Sets. Path suppression is limited to path.resolve, path.normalize, or path.join values tied to path.relative containment checks. Mutated allowlists, reassigned guarded values, helper predicates, post-use guards, and wrong-domain sanitizer use remain candidates.\n\nThe analyzer applies each sanitizer scope only to matching catalogue categories, and the extraction cache version is bumped so warm caches re-extract affected files.\n\nFixes #863.",
          "timestamp": "2026-06-03T00:48:10+02:00",
          "tree_id": "9ab3ecae27aff89ac1aa5eabd45f2f8bb0fe10d5",
          "url": "https://github.com/fallow-rs/fallow/commit/b1d9593b4341ff105f424cffd6a8dc89aa8f9c5f"
        },
        "date": 1780440984330,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 82909,
            "range": "± 1663",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3910955,
            "range": "± 194266",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5805683,
            "range": "± 236619",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29774302,
            "range": "± 485689",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119981,
            "range": "± 1648",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2294,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235996,
            "range": "± 4474",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1068645,
            "range": "± 11845",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1524924,
            "range": "± 100994",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 579317,
            "range": "± 11372",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4357708,
            "range": "± 23090",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4384843,
            "range": "± 267463",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2976790,
            "range": "± 4380",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d9d22a3d447bf9581594d0cced31796cd294d9e2",
          "message": "chore: release v2.87.0",
          "timestamp": "2026-06-03T08:39:52+02:00",
          "tree_id": "815db7248a43c7e4143447b82a5460727d8b5229",
          "url": "https://github.com/fallow-rs/fallow/commit/d9d22a3d447bf9581594d0cced31796cd294d9e2"
        },
        "date": 1780469174443,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61541,
            "range": "± 1252",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3709467,
            "range": "± 147455",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5988648,
            "range": "± 172033",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31117158,
            "range": "± 468031",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121365,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2359,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185713,
            "range": "± 7115",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 824137,
            "range": "± 8910",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1322499,
            "range": "± 22014",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533685,
            "range": "± 46298",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3292136,
            "range": "± 28814",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3350696,
            "range": "± 37241",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2228663,
            "range": "± 11866",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "423f294107bf5e29eb8e30e8740ede36cf66ce29",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.87.0",
          "timestamp": "2026-06-03T09:15:48+02:00",
          "tree_id": "b63977ad16375415cb575923f4d794efc98ce773",
          "url": "https://github.com/fallow-rs/fallow/commit/423f294107bf5e29eb8e30e8740ede36cf66ce29"
        },
        "date": 1780471270681,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 80595,
            "range": "± 1628",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3871423,
            "range": "± 206721",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5772074,
            "range": "± 222859",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29203424,
            "range": "± 451476",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119802,
            "range": "± 1250",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2263,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235323,
            "range": "± 1643",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1068721,
            "range": "± 23718",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1522146,
            "range": "± 16419",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 567392,
            "range": "± 25436",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4347808,
            "range": "± 29719",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4243544,
            "range": "± 30385",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2972864,
            "range": "± 58082",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ce102d0bd0315b0f52f96d003c268fd44f574899",
          "message": "feat(dupes): surface minOccurrences in combined mode and VS Code\n\nThe duplication minOccurrences threshold (rule-of-three control) was\nonly reachable via the config file or the standalone `fallow dupes`\nsubcommand, so users who drive fallow through the bare combined command\nor the VS Code extension could not raise it. Add a global\n`--dupes-min-occurrences` flag (combined mode), validated `>= 2` through\nthe shared `parse_min_occurrences` parser and threaded through\nCombinedOptions into the dupes options with a config-value fallback, and\na matching `fallow.duplication.minOccurrences` extension setting\nforwarded to the CLI in commands.ts.\n\nWhile surfacing it, fix a pre-existing mislabel on the neighbouring\n`fallow.duplication.threshold` setting: it forwards `--dupes-threshold`\n(a duplication-percentage failure cap where 0 means no limit), not a\nminimum line count, and it defaulted to 5, silently imposing a 5%\nfailure ceiling that diverged from the CLI default. Correct the\ndescription and align the default to 0.\n\nLive LSP diagnostics continue to read the config file directly, matching\nhow the existing mode and threshold settings behave; that path is out of\nscope here. Docs and the settings enumeration are updated to match.\n\nFixes #894.",
          "timestamp": "2026-06-03T09:25:13+02:00",
          "tree_id": "10db92e160e4dc1dfd6ea19a0490631de3b8415e",
          "url": "https://github.com/fallow-rs/fallow/commit/ce102d0bd0315b0f52f96d003c268fd44f574899"
        },
        "date": 1780471831520,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62542,
            "range": "± 1100",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3869389,
            "range": "± 179952",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6017628,
            "range": "± 181493",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30543018,
            "range": "± 600428",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119566,
            "range": "± 869",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2318,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 187089,
            "range": "± 19563",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 832124,
            "range": "± 10637",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1324965,
            "range": "± 20460",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533445,
            "range": "± 24072",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3305487,
            "range": "± 34464",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3332577,
            "range": "± 42283",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2264630,
            "range": "± 16008",
            "unit": "ns/iter"
          }
        ]
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
          "id": "9910174dcf74e1be3826e7dcba76c13cf0d650a5",
          "message": "fix(unused-class-members): credit Angular inject templates\n\nAngular external templates can reference service members through component fields initialized with Angular's inject() helper. Those untyped fields were already credited for in-class member access, but they were missing from ClassHeritageInfo instance bindings, so the external-template bridge could not resolve the target service member.\n\nThis change shares the Angular inject target extraction with class instance binding extraction, keeps the match gated to named imports from @angular/core, and covers alias imports such as inject as ngInject. It also bumps the extract cache version so warm caches re-extract affected component files.\n\nFixes #911.",
          "timestamp": "2026-06-03T10:59:32+02:00",
          "tree_id": "d71167b481164c85a137b6aeafb418bd28de077d",
          "url": "https://github.com/fallow-rs/fallow/commit/9910174dcf74e1be3826e7dcba76c13cf0d650a5"
        },
        "date": 1780477640538,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 80743,
            "range": "± 1956",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4054369,
            "range": "± 210338",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6058825,
            "range": "± 234262",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30325526,
            "range": "± 641832",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116809,
            "range": "± 743",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2281,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234504,
            "range": "± 2126",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1066021,
            "range": "± 12987",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1515591,
            "range": "± 35306",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 571851,
            "range": "± 10100",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4343224,
            "range": "± 68948",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4246386,
            "range": "± 45747",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3004089,
            "range": "± 35116",
            "unit": "ns/iter"
          }
        ]
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
          "id": "5a6884f0ae6526884aff0b17024a3786b44fe399",
          "message": "fix(extract): credit structural class member calls\n\nTrack local typed function calls that receive concrete class instances and credit only the class members read through the matching typed parameter. The extractor keeps this scoped to local callees, exact argument positions, direct constructor arguments, and constructor-bound identifiers.\n\nRespect block-scoped shadows of the typed parameter name so unrelated local objects do not credit the concrete class argument. The change adds extractor and core regressions, updates detection notes, bumps the extraction cache for the new member-access semantics, and aligns the CODEOWNERS smoke test with the current scoped owner file.\n\nFixes #910.",
          "timestamp": "2026-06-03T11:25:35+02:00",
          "tree_id": "58212b3a8868620e346dafbf2e92f33f4072b0fb",
          "url": "https://github.com/fallow-rs/fallow/commit/5a6884f0ae6526884aff0b17024a3786b44fe399"
        },
        "date": 1780479136874,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62480,
            "range": "± 986",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3953174,
            "range": "± 163104",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5934818,
            "range": "± 156893",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31204114,
            "range": "± 735295",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113786,
            "range": "± 1220",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2373,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185478,
            "range": "± 1681",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822410,
            "range": "± 14686",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1312355,
            "range": "± 17243",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 539666,
            "range": "± 11279",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3291267,
            "range": "± 85789",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3345222,
            "range": "± 99604",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2225502,
            "range": "± 12435",
            "unit": "ns/iter"
          }
        ]
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
          "id": "a45deb010be1b521c33ab78f8e3be4106658c183",
          "message": "fix: credit bare pnpm script binaries\n\nCredit dependency usage for package scripts, workspace scripts, and CI run blocks that invoke a declared package binary through bare `pnpm <binary>`. The parser keeps its syntax-only public path conservative, while the analysis path now receives dependency and script-name context before crediting pnpm implicit execution.\n\nKeep pnpm script delegation and built-in commands out of dependency credit, including local script names that were filtered out of production-mode analysis. This avoids trading the envinfo false positive for new false negatives around `pnpm build`, `pnpm lint`, `pnpm test`, `pnpm start`, `pnpm install`, `pnpm audit`, and `pnpm add`.\n\nFixes #914.",
          "timestamp": "2026-06-03T12:59:58+02:00",
          "tree_id": "aa78ad8e40397ea78ab35ac1f18779dcc68133d8",
          "url": "https://github.com/fallow-rs/fallow/commit/a45deb010be1b521c33ab78f8e3be4106658c183"
        },
        "date": 1780484709257,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 70665,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3167589,
            "range": "± 81887",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4784351,
            "range": "± 142235",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23110225,
            "range": "± 350853",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103115,
            "range": "± 2573",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3192,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157354,
            "range": "± 4459",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 717527,
            "range": "± 5762",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1193716,
            "range": "± 43943",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 467148,
            "range": "± 15724",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2898431,
            "range": "± 53208",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2941083,
            "range": "± 62661",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1962866,
            "range": "± 14034",
            "unit": "ns/iter"
          }
        ]
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
          "id": "5a7ea079cf47bdc2dd22426693ce151c3e2190cf",
          "message": "feat(cli): accept -v as a version flag alias\n\nMake -v, -V, and --version all print the version. Previously clap's\ndefault exposed only -V/--version. Lowercase -v is the version flag in\nthe TS/JS toolchain fallow's users run (node, npm, pnpm, yarn, bun, tsc,\neslint, prettier), so it becomes the primary short form; -V is kept for\nback-compat (matching knip, oxlint, biome).\n\nDisables clap's auto version flag and adds a custom version arg with\nshort = 'v', visible_short_alias = 'V', and long = version, keeping the\ncrate version string set so ArgAction::Version has a value to print.\n\nFixes #916.",
          "timestamp": "2026-06-03T14:14:58+02:00",
          "tree_id": "a6379be25bc14a82ca7b6b091761903b8cd2ba92",
          "url": "https://github.com/fallow-rs/fallow/commit/5a7ea079cf47bdc2dd22426693ce151c3e2190cf"
        },
        "date": 1780489211296,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 85186,
            "range": "± 1107",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4128414,
            "range": "± 150827",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6177601,
            "range": "± 187490",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31195989,
            "range": "± 621938",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111183,
            "range": "± 849",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2387,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235534,
            "range": "± 2321",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1067962,
            "range": "± 10289",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1511838,
            "range": "± 17546",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576816,
            "range": "± 11118",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4348153,
            "range": "± 92513",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4385503,
            "range": "± 63452",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2950707,
            "range": "± 17502",
            "unit": "ns/iter"
          }
        ]
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
          "id": "e55a2e99465680156af180a0ce5732672a633a09",
          "message": "fix: resolve root HTML public assets\n\nHTML entries can reference assets from a Vite-style public directory with browser-root URLs. The resolver keeps the existing document-root lookup order, then tries <root>/public/... only for real .html importers so JS and TS root-relative imports keep their previous behavior.\n\nStatic directory joins now reject parent traversal, absolute paths, and Windows drive prefixes before probing the filesystem. The regression fixture covers the reported public JS and CSS assets and preserves unresolved reporting for missing public files.\n\nFixes #915.",
          "timestamp": "2026-06-03T14:18:20+02:00",
          "tree_id": "491354d34c1f48a5042baee9b48477709b2964d3",
          "url": "https://github.com/fallow-rs/fallow/commit/e55a2e99465680156af180a0ce5732672a633a09"
        },
        "date": 1780489534876,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 70224,
            "range": "± 765",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3326708,
            "range": "± 148884",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5092503,
            "range": "± 317628",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 24260681,
            "range": "± 911866",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112392,
            "range": "± 2853",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3103,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 158243,
            "range": "± 3265",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 716114,
            "range": "± 6867",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1198204,
            "range": "± 32407",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 469989,
            "range": "± 12643",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2983754,
            "range": "± 40882",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2989500,
            "range": "± 33869",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1965888,
            "range": "± 33760",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9a3dc7dafe169bb807b17c73211c516ec807895f",
          "message": "chore: release v2.88.0",
          "timestamp": "2026-06-03T15:04:14+02:00",
          "tree_id": "b5e28a237500fdb4e688a46330759930b4a12e81",
          "url": "https://github.com/fallow-rs/fallow/commit/9a3dc7dafe169bb807b17c73211c516ec807895f"
        },
        "date": 1780492264023,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 84226,
            "range": "± 2285",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4156353,
            "range": "± 163678",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6203544,
            "range": "± 237538",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30831253,
            "range": "± 655229",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113961,
            "range": "± 2430",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2264,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235918,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1068986,
            "range": "± 10539",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1518373,
            "range": "± 15624",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 578854,
            "range": "± 14504",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4291371,
            "range": "± 71535",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4393795,
            "range": "± 95840",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2961451,
            "range": "± 8723",
            "unit": "ns/iter"
          }
        ]
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
          "id": "0686852b1a7ea66e1d4e94e6965b227b35065c5a",
          "message": "fix: credit Angular inject(InjectionToken) template members (#924)\n\nFollow-up to #911 / #913. A component field initialized with inject(SOME_TOKEN), where SOME_TOKEN is an InjectionToken<Interface> and a project class implements that interface, left the implementation's methods reported as unused class members when the only reference was an Angular external-template call through that field. #913 fixed the concrete-class case; this covers the token case the prior fix could not reach.\n\nExtraction records new InjectionToken<I>(...) declarations from @angular/core as (token, interface) pairs on ModuleInfo.injection_tokens. The analyze-layer template-chain bridge follows the token to its interface and credits the accessed member on every class implementing that interface, covering both the untyped and interface-typed field forms. Crediting all implementers is the safe over-credit direction; provider parsing is out of scope. Extract CACHE_VERSION bumped.\n\nFixes #920.",
          "timestamp": "2026-06-03T15:26:36+02:00",
          "tree_id": "64a8a9b1ca7af09cb39e94f10306c4c4b62135fe",
          "url": "https://github.com/fallow-rs/fallow/commit/0686852b1a7ea66e1d4e94e6965b227b35065c5a"
        },
        "date": 1780493777620,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 82614,
            "range": "± 885",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4181508,
            "range": "± 201559",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6064564,
            "range": "± 174583",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30319849,
            "range": "± 1606855",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114006,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2273,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237542,
            "range": "± 2736",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1073955,
            "range": "± 14318",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1534283,
            "range": "± 20429",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576624,
            "range": "± 27050",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4530663,
            "range": "± 107098",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4434216,
            "range": "± 86760",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3051399,
            "range": "± 30375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2b077f76c560fa11399796a662ee6f31b984f7e7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.88.0",
          "timestamp": "2026-06-03T15:40:02+02:00",
          "tree_id": "033007ff69aeaaa1dbce82d40beacffafdbeb337",
          "url": "https://github.com/fallow-rs/fallow/commit/2b077f76c560fa11399796a662ee6f31b984f7e7"
        },
        "date": 1780494333052,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83418,
            "range": "± 658",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4065926,
            "range": "± 153462",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5991650,
            "range": "± 176701",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29812074,
            "range": "± 472467",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119776,
            "range": "± 744",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2282,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235642,
            "range": "± 5766",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070956,
            "range": "± 79037",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1523618,
            "range": "± 25192",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 571563,
            "range": "± 13982",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4370300,
            "range": "± 29192",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4402033,
            "range": "± 33908",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2980391,
            "range": "± 18151",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "157f6bd4d53c0c7ad3bb8293dec6c6c1bc366571",
          "message": "chore: release v2.88.1",
          "timestamp": "2026-06-03T17:13:41+02:00",
          "tree_id": "847a5172bc2fbda88d8994035de8cb55ae6f7c1e",
          "url": "https://github.com/fallow-rs/fallow/commit/157f6bd4d53c0c7ad3bb8293dec6c6c1bc366571"
        },
        "date": 1780499978430,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83069,
            "range": "± 4357",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4012582,
            "range": "± 200426",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6072882,
            "range": "± 189179",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30118467,
            "range": "± 672874",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116308,
            "range": "± 947",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2269,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234132,
            "range": "± 2716",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070999,
            "range": "± 9296",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1524349,
            "range": "± 18232",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 581811,
            "range": "± 10547",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4326400,
            "range": "± 39577",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4314739,
            "range": "± 45764",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2975863,
            "range": "± 13643",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "dfecf5f20c9971519820c658f6c9b935187f8e98",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.88.1",
          "timestamp": "2026-06-03T18:45:42+02:00",
          "tree_id": "15e23789422a41b3a03ba44ec7d8de4f2cdbb154",
          "url": "https://github.com/fallow-rs/fallow/commit/dfecf5f20c9971519820c658f6c9b935187f8e98"
        },
        "date": 1780505462168,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 85322,
            "range": "± 5652",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4205804,
            "range": "± 140378",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6251624,
            "range": "± 246977",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30756224,
            "range": "± 820784",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120792,
            "range": "± 1524",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2273,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237204,
            "range": "± 8804",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1071850,
            "range": "± 9898",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1525422,
            "range": "± 17008",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577008,
            "range": "± 15106",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4316957,
            "range": "± 55546",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4410437,
            "range": "± 39008",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2998469,
            "range": "± 228810",
            "unit": "ns/iter"
          }
        ]
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
          "id": "8e76b84eb47170f9d6338dc54bcabedfbc855f3f",
          "message": "fix(lsp): report a version for --version so binary-skew detection works (#926)\n\nfallow-lsp and fallow-mcp were stdio servers with no argument parsing, so a --version probe started the server, hit EOF on stdin, and exited silently. The VS Code binary-skew check reads <binary> --version, so getBinaryVersion's loose semver regex latched onto stray numbers (a Node crash banner, a sentinel-path digit, the npm shim's verified line), producing a bogus version-mismatch warning.\n\nfallow-lsp / fallow-mcp now honor --version / -V / -v and print <bin> <version>; getBinaryVersion anchors to that shape and returns null otherwise.\n\nSurfaced while investigating the regression in #894.",
          "timestamp": "2026-06-03T19:23:56+02:00",
          "tree_id": "6952e46edf47a6d7ee9d0423efc21835a81057a0",
          "url": "https://github.com/fallow-rs/fallow/commit/8e76b84eb47170f9d6338dc54bcabedfbc855f3f"
        },
        "date": 1780507746476,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62466,
            "range": "± 531",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3615021,
            "range": "± 73098",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5921371,
            "range": "± 163953",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30641408,
            "range": "± 355656",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109222,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2342,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185991,
            "range": "± 1414",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822012,
            "range": "± 10011",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317199,
            "range": "± 20991",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 525821,
            "range": "± 20975",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3295896,
            "range": "± 55311",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3323266,
            "range": "± 31543",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2233528,
            "range": "± 11392",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9492a4d98b5c4ca95670716fced39029cc28f375",
          "message": "chore: release v2.88.2",
          "timestamp": "2026-06-03T19:49:51+02:00",
          "tree_id": "1cc38f272b3a33b077eb84d47342f2f7469e5327",
          "url": "https://github.com/fallow-rs/fallow/commit/9492a4d98b5c4ca95670716fced39029cc28f375"
        },
        "date": 1780509321385,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 84205,
            "range": "± 2682",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4101367,
            "range": "± 159646",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6077825,
            "range": "± 189968",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30453222,
            "range": "± 536726",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116179,
            "range": "± 1026",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2286,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236175,
            "range": "± 1719",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1075559,
            "range": "± 13641",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1526164,
            "range": "± 31144",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577352,
            "range": "± 10268",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4451091,
            "range": "± 46357",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4328985,
            "range": "± 50897",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2995315,
            "range": "± 15936",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "45f8c17eed7cf602ffff88ff8b9b8e8d648838aa",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.88.2",
          "timestamp": "2026-06-03T20:24:13+02:00",
          "tree_id": "2546e14eba7661a574b0460f9d12efc8a4c98534",
          "url": "https://github.com/fallow-rs/fallow/commit/45f8c17eed7cf602ffff88ff8b9b8e8d648838aa"
        },
        "date": 1780511377277,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62759,
            "range": "± 3930",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3930911,
            "range": "± 171563",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6157866,
            "range": "± 242605",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31929107,
            "range": "± 665391",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117771,
            "range": "± 1851",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2366,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184377,
            "range": "± 20864",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 817442,
            "range": "± 65385",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1315041,
            "range": "± 24262",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534238,
            "range": "± 35418",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3306486,
            "range": "± 30500",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3356098,
            "range": "± 31782",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2224712,
            "range": "± 11425",
            "unit": "ns/iter"
          }
        ]
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
          "id": "d1521c271ae0eb77482c7b211ec07532742b616b",
          "message": "test(core): cover Vite array aliases\n\nThe issue report used Vite's resolve.alias array form with an @ shortcut that maps to src via path.resolve. Existing resolver support handled this shape, but there was no fixture matching the reported config, so future resolver changes could regress it silently.\n\nAdd a dedicated Vite fixture with array aliases and an integration assertion that @/auth.js is resolved, src/auth.js is not treated as unused, and unused exports inside the reachable module still report normally.\n\nRefs #915.",
          "timestamp": "2026-06-04T07:14:07+02:00",
          "tree_id": "a44361b5ce5c700a35521112460f9371aee1f199",
          "url": "https://github.com/fallow-rs/fallow/commit/d1521c271ae0eb77482c7b211ec07532742b616b"
        },
        "date": 1780550539949,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63235,
            "range": "± 4397",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3744967,
            "range": "± 125957",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5820577,
            "range": "± 156837",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29581178,
            "range": "± 626033",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121244,
            "range": "± 2696",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2367,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184790,
            "range": "± 16223",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820621,
            "range": "± 19649",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1318927,
            "range": "± 22193",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533549,
            "range": "± 9546",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3283041,
            "range": "± 40227",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3332345,
            "range": "± 39179",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2238446,
            "range": "± 20913",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6e1a3db21cdeed9e0a83376e283d7adb4a4c9805",
          "message": "chore: release v2.88.3\n\nShips the #944 packaging integrity gate (declared-files + every-binary-signed),\nthe version-aware sig-missing error, the Action dual-knob failure context, the\nfallow --version signing annotation, and the SECURITY.md signing-epoch section.\nAlso includes two fixes that landed since v2.88.2: fallow -v through the npm\nlauncher now prints the verified line, and the VS Code extension self-heals\nwhen the resolved CLI predates the extension.\n\nBundles an oxfmt 0.52.0 reformat of run-binary.test.js (one wrapped assert line)\nto keep main CI green after the oxfmt dependency bump.",
          "timestamp": "2026-06-04T11:04:52+02:00",
          "tree_id": "eefa33722cc29adcf00f1b95b192341a653aea0f",
          "url": "https://github.com/fallow-rs/fallow/commit/6e1a3db21cdeed9e0a83376e283d7adb4a4c9805"
        },
        "date": 1780564286664,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62374,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3850052,
            "range": "± 164147",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5922055,
            "range": "± 179737",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31143469,
            "range": "± 641667",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107979,
            "range": "± 2194",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2364,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184653,
            "range": "± 7958",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821705,
            "range": "± 18605",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1322013,
            "range": "± 22712",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 542861,
            "range": "± 11817",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3315697,
            "range": "± 32584",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3351736,
            "range": "± 44968",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2214509,
            "range": "± 6861",
            "unit": "ns/iter"
          }
        ]
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
          "id": "a9763c24cf7ddbf973bf71e0edb6fe08e70c5a4d",
          "message": "feat(vscode): expose duplication settings\n\nExpose the remaining duplication settings in VS Code and pass them through the sidebar combined analysis run.\n\nAdd matching combined-mode duplication flags in the CLI so the extension can apply those settings without creating a temporary config file. Keep stale resolved CLIs on the existing version-gated degradation path.\n\nFixes #909.",
          "timestamp": "2026-06-04T11:24:25+02:00",
          "tree_id": "1434758cb1bb4758f24aab67aec052a9a492bf4f",
          "url": "https://github.com/fallow-rs/fallow/commit/a9763c24cf7ddbf973bf71e0edb6fe08e70c5a4d"
        },
        "date": 1780565388749,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63563,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3850571,
            "range": "± 172239",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5905178,
            "range": "± 190861",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29996957,
            "range": "± 436533",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115825,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2375,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185478,
            "range": "± 3845",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821250,
            "range": "± 8741",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320614,
            "range": "± 17805",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538028,
            "range": "± 11901",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3305914,
            "range": "± 28465",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3329513,
            "range": "± 33618",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2233462,
            "range": "± 4891",
            "unit": "ns/iter"
          }
        ]
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
          "id": "200a337dc3acc3bcb6879f6c76d71dc521c4d8ba",
          "message": "fix(unused-class-members): credit Angular inline inject tokens\n\nInline Angular templates now feed same-file template chains through the existing InjectionToken to interface to implementer bridge. This credits inline-only calls such as greeter.inlineGreet() while preserving unused-member reporting for unrelated members on the same class.\n\nFixes #923.",
          "timestamp": "2026-06-04T11:31:50+02:00",
          "tree_id": "fd317337a4efe09304043448845fe2feb80abcae",
          "url": "https://github.com/fallow-rs/fallow/commit/200a337dc3acc3bcb6879f6c76d71dc521c4d8ba"
        },
        "date": 1780565835928,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83140,
            "range": "± 2211",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4066206,
            "range": "± 189493",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5894167,
            "range": "± 213912",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28977566,
            "range": "± 402376",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118735,
            "range": "± 3594",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2298,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237885,
            "range": "± 7013",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1073204,
            "range": "± 10923",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1526558,
            "range": "± 13162",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 575058,
            "range": "± 7500",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4374482,
            "range": "± 33933",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4422418,
            "range": "± 25711",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2977556,
            "range": "± 53481",
            "unit": "ns/iter"
          }
        ]
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
          "id": "88fd8c96b801e150e85353f6e28fa34c594d2838",
          "message": "fix: resolve relative package root source entries\n\nRelative imports that point at the package root could be reported unresolved when the package only has source files and package metadata points at an unbuilt entry. This affected source-first packages such as preact, where tests import ../../ and the generated dist entry is absent from the fixture.\n\nThis adds a narrow fallback for relative imports that land exactly on a known package root. The fallback resolves through safe package source entries and existing source-index conventions, with regression coverage for non-standard source entry paths.",
          "timestamp": "2026-06-04T11:34:55+02:00",
          "tree_id": "a54e3bf530bc2e27a636ea3ee62cc8211a54100f",
          "url": "https://github.com/fallow-rs/fallow/commit/88fd8c96b801e150e85353f6e28fa34c594d2838"
        },
        "date": 1780566319520,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62646,
            "range": "± 2282",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3865694,
            "range": "± 177610",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5843773,
            "range": "± 255843",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30059773,
            "range": "± 483168",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121149,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2412,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185518,
            "range": "± 5260",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822821,
            "range": "± 9251",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320987,
            "range": "± 26916",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531128,
            "range": "± 33642",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3327990,
            "range": "± 33621",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3355500,
            "range": "± 39479",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2218844,
            "range": "± 48138",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e0c6e2171bba529b632a2e7f54e52513a951a796",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.88.3",
          "timestamp": "2026-06-04T11:46:20+02:00",
          "tree_id": "5c5fc2e17ff7c88bd7f62cdb5c51e2c5257ed554",
          "url": "https://github.com/fallow-rs/fallow/commit/e0c6e2171bba529b632a2e7f54e52513a951a796"
        },
        "date": 1780566688950,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83416,
            "range": "± 1768",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4231420,
            "range": "± 161554",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6184277,
            "range": "± 217512",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29844147,
            "range": "± 785278",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117168,
            "range": "± 780",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2280,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233972,
            "range": "± 3208",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1062327,
            "range": "± 7180",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1515241,
            "range": "± 73279",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 578455,
            "range": "± 19575",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4356297,
            "range": "± 34201",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4413152,
            "range": "± 45895",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2957934,
            "range": "± 4861",
            "unit": "ns/iter"
          }
        ]
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
          "id": "219211dbfd1021a75f88d95fbc2b359569e3596b",
          "message": "test(conformance): harden source fallback coverage\n\nAdd explicit positive and negative coverage for package source path handling so relative package source entries stay accepted while unsafe paths remain rejected.\n\nUpdate the conformance comparison script to tolerate BOM-prefixed JSON, normalize relative and absolute path shapes, and report real tool execution errors separately from JSON parse failures.",
          "timestamp": "2026-06-04T12:13:18+02:00",
          "tree_id": "aceebf2a049587839b01f91433ddfb00582b3074",
          "url": "https://github.com/fallow-rs/fallow/commit/219211dbfd1021a75f88d95fbc2b359569e3596b"
        },
        "date": 1780568361082,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62877,
            "range": "± 2692",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3896841,
            "range": "± 156266",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5944805,
            "range": "± 185837",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30995891,
            "range": "± 690445",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120208,
            "range": "± 2078",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2421,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185938,
            "range": "± 2150",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 825064,
            "range": "± 83600",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320030,
            "range": "± 27923",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538698,
            "range": "± 6903",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3352549,
            "range": "± 31227",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3383046,
            "range": "± 29224",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2255554,
            "range": "± 25642",
            "unit": "ns/iter"
          }
        ]
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
          "id": "b740cf1a817c8d9bc8a7498f61e0e404f71a4ba4",
          "message": "fix(vscode): align provider and duplication behavior\n\nAdd a VS Code plugin that credits provider interface methods when a class implements the matching VS Code provider interface.\n\nForward VS Code duplication settings into LSP initialization options so live diagnostics match sidebar CLI analysis.\n\nHarden VS Code LSP restart handling for rapid config changes during client startup.\n\nFixes #948.\nFixes #905.",
          "timestamp": "2026-06-04T12:33:57+02:00",
          "tree_id": "b6fe6d55376f03a7da643ad0d48ee9923d9e8d29",
          "url": "https://github.com/fallow-rs/fallow/commit/b740cf1a817c8d9bc8a7498f61e0e404f71a4ba4"
        },
        "date": 1780569524885,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 49251,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3250878,
            "range": "± 116900",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4897309,
            "range": "± 188993",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 24686226,
            "range": "± 1207157",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 89357,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1881,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143695,
            "range": "± 18408",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 637491,
            "range": "± 34528",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1020499,
            "range": "± 25383",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 415450,
            "range": "± 10022",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2566385,
            "range": "± 17851",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2611738,
            "range": "± 26447",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1735024,
            "range": "± 20272",
            "unit": "ns/iter"
          }
        ]
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
          "id": "88f048b7af1acc3200cd32b7f3ef2b1adc27e0ab",
          "message": "fix(vscode): honor explicit duplication overrides\n\nRead VS Code duplication settings as explicit overrides instead of effective package defaults, so project config remains the source of truth unless the user configured a setting.\n\nSidebar analysis now forwards only configured duplication CLI flags. LSP initialization sends the same optional override payload and applies explicit boolean values after project config. The client restart path also waits through startup so config restarts do not race stale clients.",
          "timestamp": "2026-06-04T12:57:14+02:00",
          "tree_id": "ef5a596290ed50c15cdba45db7db027bd36ae973",
          "url": "https://github.com/fallow-rs/fallow/commit/88f048b7af1acc3200cd32b7f3ef2b1adc27e0ab"
        },
        "date": 1780570944394,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83423,
            "range": "± 903",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4010605,
            "range": "± 191618",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6009844,
            "range": "± 251678",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28783686,
            "range": "± 447315",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112377,
            "range": "± 816",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2503,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232587,
            "range": "± 4888",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1052088,
            "range": "± 13364",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1504265,
            "range": "± 14782",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 573253,
            "range": "± 21742",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4280110,
            "range": "± 23874",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4315504,
            "range": "± 28350",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2928369,
            "range": "± 8273",
            "unit": "ns/iter"
          }
        ]
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
          "id": "d85c07a9b940a6025bf5466e7867ab293efc4493",
          "message": "feat(vscode): manage the fallow license from the editor (#904)\n\nCloses #904",
          "timestamp": "2026-06-04T18:16:32+02:00",
          "tree_id": "fa105078eda95c7b0b0d2ec3b3d67a17b0955e4e",
          "url": "https://github.com/fallow-rs/fallow/commit/d85c07a9b940a6025bf5466e7867ab293efc4493"
        },
        "date": 1780590119263,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63424,
            "range": "± 1869",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3772465,
            "range": "± 138178",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6029328,
            "range": "± 229482",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30490585,
            "range": "± 451989",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120845,
            "range": "± 2215",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2374,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 187103,
            "range": "± 2905",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821445,
            "range": "± 6607",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1319116,
            "range": "± 17828",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532912,
            "range": "± 34266",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3356371,
            "range": "± 106973",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3357829,
            "range": "± 35790",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2246254,
            "range": "± 19054",
            "unit": "ns/iter"
          }
        ]
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
          "id": "131343784f7b80cbc874948fc6dde33714bd6f3b",
          "message": "fix(graph): dedup dynamic-import-pattern edge symbols per importing file (#968)\n\nGlob-matched dynamic-import patterns each resolve to a set of target files, and a single importing file can hold many such patterns whose match sets overlap. The edge builder pushed one Namespace symbol per matched file per pattern, accumulating O(patterns * files) symbols and Phase-2 references that drove the language server into tens of GB on large React Native / Expo trees.\n\nThe duplicate symbols are redundant: a Namespace symbol with an empty local_name credits the whole target for reachability, the first one already does that, reachability BFS reads only edge.target, and Phase-2 attach_reference already dedups by from_file. Each distinct target is now credited at most once per importing file. Output is byte-identical on all 8 benchmark fixtures; recursive cross-directory matching is preserved.\n\nFixes #963.",
          "timestamp": "2026-06-04T18:30:46+02:00",
          "tree_id": "87ee72f1a98b011599cd3534963971a0d040ef39",
          "url": "https://github.com/fallow-rs/fallow/commit/131343784f7b80cbc874948fc6dde33714bd6f3b"
        },
        "date": 1780591021836,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 64120,
            "range": "± 1442",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3996210,
            "range": "± 172533",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5967182,
            "range": "± 214806",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30858760,
            "range": "± 835302",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115409,
            "range": "± 2394",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2411,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185018,
            "range": "± 7664",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820077,
            "range": "± 3536",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320631,
            "range": "± 17287",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 541521,
            "range": "± 16050",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3326300,
            "range": "± 26838",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3369227,
            "range": "± 29360",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2233752,
            "range": "± 16380",
            "unit": "ns/iter"
          }
        ]
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
          "id": "85618a165b956bcb1d9e58af6141a483dd4b13c7",
          "message": "fix(lsp): analyze the workspace root once instead of per workspace package (#977)\n\nThe LSP returned the workspace root plus every discovered sub-package from find_project_roots and re-ran the full analysis pipeline per root, then collapsed the cross-root duplicates with a dedup pass. The single root pass already walks the whole tree and is workspace-aware (run_workspace_fast applies each package's plugin and script config), so the per-package passes were redundant CPU and allocation, and analyzing a sub-package in isolation lost cross-package reachability, surfacing false-positive unused-export findings the root pass resolves.\n\nfind_project_roots now returns exactly one root (the canonicalized workspace root), matching the CLI. The now-unreachable dedup_results/dedup_by_key_preserving_order helpers and their five cross-root tests are removed; merge_results/merge_duplication stay to fold the single result and keep the field-drift guard. A sub-package's own .fallowrc.json still applies when that folder is opened directly as the editor workspace.\n\nAlso allowlists unparseable and vulnerabilit in _typos.toml (left un-allowlisted by recent VS Code editor-parity work, which was blocking local commits via the whole-repo typos gate).\n\nCloses #971.",
          "timestamp": "2026-06-04T19:25:15+02:00",
          "tree_id": "90d7af0512c63402a248800a5e4f14dc4d690d4c",
          "url": "https://github.com/fallow-rs/fallow/commit/85618a165b956bcb1d9e58af6141a483dd4b13c7"
        },
        "date": 1780594312012,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83465,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4048729,
            "range": "± 190819",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6014760,
            "range": "± 178933",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28670210,
            "range": "± 389783",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116042,
            "range": "± 710",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2305,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 238584,
            "range": "± 2381",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1076650,
            "range": "± 8371",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1529302,
            "range": "± 17217",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 566737,
            "range": "± 28770",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4395113,
            "range": "± 26671",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4418449,
            "range": "± 30820",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2991815,
            "range": "± 5679",
            "unit": "ns/iter"
          }
        ]
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
          "id": "08c11441fe165b62dd27696c4d05bcc22ed4c7f0",
          "message": "fix(cli): reclaim audit base-snapshot worktrees orphaned by external dir removal\n\nWhen an external cleanup process (a `$TMPDIR` reaper, a container restart, a CI cache eviction) removes a reusable base-snapshot worktree directory but leaves git's admin entry behind, the entry lingered indefinitely as a `prunable` row in `git worktree list`. The age-based sweep keyed only on the `.last-used` sidecar, which survives next to the deleted directory, so it re-touched a fresh sidecar and never reclaimed these orphans.\n\n`sweep_old_reusable_caches` now takes `Option<Duration>` and runs on every audit invocation. It reclaims any reusable entry whose directory is gone before the age branch: lock-guarded, re-checked under the lock against a concurrent rebuild, removing the git admin entry and the stale sidecar. The reclaim runs even when age-based GC is disabled, so dead admin entries no longer accumulate. Adds two regression tests covering enabled and disabled GC thresholds.",
          "timestamp": "2026-06-04T19:31:16+02:00",
          "tree_id": "dd1a2244fdad94a53a96fea1f9de12f06e4e3176",
          "url": "https://github.com/fallow-rs/fallow/commit/08c11441fe165b62dd27696c4d05bcc22ed4c7f0"
        },
        "date": 1780594648387,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 84808,
            "range": "± 2785",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4303232,
            "range": "± 150292",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6126351,
            "range": "± 201789",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30928082,
            "range": "± 584357",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120023,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2294,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 238943,
            "range": "± 6827",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1085318,
            "range": "± 92288",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1548640,
            "range": "± 44836",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 586905,
            "range": "± 10235",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4353313,
            "range": "± 68449",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4419697,
            "range": "± 43094",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3052315,
            "range": "± 13409",
            "unit": "ns/iter"
          }
        ]
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
          "id": "cf8dea7f73197c1387cbdcdf97c1f464d293ac68",
          "message": "fix(vscode): review follow-ups for #904 (license-management)\n\n* fix(cli): emit full LicenseStatusJson shape on license deactivate\n\nThe deactivate --format json envelope hand-rolled a six-key json! literal,\nomitting seven fields (tier, seats, features, days_until_expiry,\ndays_since_expiry, refresh_suggested, runtime_coverage_enabled) that the\nLicenseStatusJson contract declares non-optional. The VS Code extension\nforce-casts every license envelope to that interface, so the gap was a latent\ncontract break.\n\nRoute deactivate through a shared build_status_payload helper so every envelope\ncarries the same field set; removed is now an Option<bool> with\nskip_serializing_if so status/activate/refresh envelopes stay byte-identical.\nAlso:\n\n- Report an honest <inline FALLOW_LICENSE> sentinel for license_path when the\n  inline JWT env var is set (loader precedence was previously mis-reported as\n  the default file path).\n- Log rather than silently swallow the rare JSON serialization failure.\n- Fix the LicenseStatusJson doc comment that wrongly claimed hard_fail carries\n  no claims.\n- Add a Rust key-parity test asserting the deactivate envelope matches the TS\n  interface, plus env-precedence coverage via a pure resolver.\n\n* fix(vscode): address review follow-ups for #904 license management\n\n- Surface the Deactivate License command in the dead-code view-title menu\n  (license@4 group), not just the command palette.\n- Drop the redundant disposeLicenseStatusBar wrapper pushed to subscriptions;\n  the item is already pushed and disposed in deactivate(), matching the main\n  analysis status-bar pattern (no double-dispose).\n- Document the deactivate envelope now carrying the full status shape in the\n  license-types.ts doc comment.\n- Document the license feature in README.md: a Features bullet, four\n  Commands-table rows, and two Settings-table rows.\n- Extend tests: a parseLicenseJson case for the full deactivate envelope and a\n  package-manifest assertion that every license command is in the view-title\n  menu.\n- Rebuild the dist bundle.",
          "timestamp": "2026-06-04T19:53:49+02:00",
          "tree_id": "b9e1b4e223db96760cc3071a68cb1b8dd02fff0c",
          "url": "https://github.com/fallow-rs/fallow/commit/cf8dea7f73197c1387cbdcdf97c1f464d293ac68"
        },
        "date": 1780595951380,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62932,
            "range": "± 1972",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3756360,
            "range": "± 145813",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6023631,
            "range": "± 207106",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31624287,
            "range": "± 983717",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108392,
            "range": "± 610",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2390,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186710,
            "range": "± 2227",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822409,
            "range": "± 10299",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1327524,
            "range": "± 23915",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535327,
            "range": "± 34536",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3351553,
            "range": "± 51381",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3379397,
            "range": "± 46122",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2223185,
            "range": "± 8684",
            "unit": "ns/iter"
          }
        ]
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
          "id": "89e76ab006ca8f09293b36b692eefb5ec70cf085",
          "message": "perf(cli): avoid CI renderer JSON roundtrip\n\nKeep combined CodeClimate output as the same serialized array, but let the PR comment and review-envelope paths consume the typed CodeClimate issues directly. This removes the serialize-then-parse hop from combined CI renderers while preserving existing diff filtering and ordering.\n\nThe review envelope grouping now applies the comment cap during grouping so large reports stop building unused groups. Regression coverage pins typed severity parity and max-comment behavior, including zero comments and same-line merged findings.",
          "timestamp": "2026-06-04T20:25:43+02:00",
          "tree_id": "67bdfc2b26e0c2542f997bbfdc1bc94bd3255547",
          "url": "https://github.com/fallow-rs/fallow/commit/89e76ab006ca8f09293b36b692eefb5ec70cf085"
        },
        "date": 1780597846144,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 48771,
            "range": "± 836",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3222748,
            "range": "± 132300",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4810519,
            "range": "± 143547",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23159823,
            "range": "± 323370",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 86992,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1831,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 142605,
            "range": "± 3048",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 634653,
            "range": "± 11599",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1018803,
            "range": "± 13478",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 416659,
            "range": "± 10512",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2550776,
            "range": "± 24513",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2588132,
            "range": "± 23856",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1733535,
            "range": "± 14881",
            "unit": "ns/iter"
          }
        ]
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
          "id": "fd40652326c8c20e240b17537688a2a319d99e67",
          "message": "feat(cli): nudge stale local installs\n\nAdds a cached, human-TTY-only upgrade nudge for stale local fallow installs. The nudge is displayed from a local cache so command startup never waits on the network, while a detached best-effort fetch refreshes the cache for later runs.\\n\\nAdds FALLOW_UPDATE_CHECK as the explicit opt-out and honors DO_NOT_TRACK, FALLOW_TELEMETRY_DISABLED, CI, quiet, non-TTY, and machine-format paths. The live api.fallow.cloud endpoint returns the latest stable version, and all failure paths stay silent.\\n\\nFixes #978.",
          "timestamp": "2026-06-04T21:54:33+02:00",
          "tree_id": "43b20d938c661a16ef1facd277b6432b8b890126",
          "url": "https://github.com/fallow-rs/fallow/commit/fd40652326c8c20e240b17537688a2a319d99e67"
        },
        "date": 1780603274052,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 49160,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3115085,
            "range": "± 150328",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4766272,
            "range": "± 155208",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23570372,
            "range": "± 413725",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 80945,
            "range": "± 1050",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1911,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143093,
            "range": "± 6421",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 636598,
            "range": "± 20206",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1021655,
            "range": "± 13423",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 413015,
            "range": "± 10210",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2564971,
            "range": "± 19507",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2593816,
            "range": "± 105045",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1735271,
            "range": "± 15497",
            "unit": "ns/iter"
          }
        ]
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
          "id": "c3f3bbdf4f699ffb35abb56d6785ed5a9d4b0eb8",
          "message": "feat(security): add catalogue sink rows\n\nAdd catalogue-only security sink rows for issue #882, covering dynamic CommonJS module loading, node:fs path sinks, response header injection, raw SQL escape hatches, DOM navigation, source-backed mass assignment, and additional SSRF clients.\n\nAdd a small source-required matcher gate for broad sinks such as `Object.assign`, keeping that category tied to the existing untrusted-source model instead of reporting source-free non-literal objects. Refresh the security command reference text and keep the VS Code self-analysis configuration clean after the rebase onto current main.\n\nFixes #882.",
          "timestamp": "2026-06-04T22:02:07+02:00",
          "tree_id": "64c59213a59e2d5a5ea137fe944f9f1f058cdbb1",
          "url": "https://github.com/fallow-rs/fallow/commit/c3f3bbdf4f699ffb35abb56d6785ed5a9d4b0eb8"
        },
        "date": 1780603643401,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62958,
            "range": "± 2519",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3770949,
            "range": "± 177088",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5921273,
            "range": "± 201478",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30194188,
            "range": "± 614516",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 122017,
            "range": "± 5983",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2346,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185149,
            "range": "± 1994",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823355,
            "range": "± 21763",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1319013,
            "range": "± 21126",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530877,
            "range": "± 33534",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3338904,
            "range": "± 44094",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3347979,
            "range": "± 24785",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2227573,
            "range": "± 23603",
            "unit": "ns/iter"
          }
        ]
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
          "id": "2f0d8893b41e3987151c16573c84a576b03716bc",
          "message": "fix(cli): name the upgrade-nudge opt-out inline (#988)\n\nThe #978 upgrade nudge repeats on every interactive run until you upgrade,\nunlike the one-time telemetry opt-in note, but it was the only unsolicited\nstderr line with no self-described way to silence it: FALLOW_UPDATE_CHECK=off\nwas undiscoverable from the output itself.\n\nAppend \"(silence: FALLOW_UPDATE_CHECK=off)\" to the printed line, interpolating\nthe existing env-var const so the name stays single-sourced. CHANGELOG\n[Unreleased] entry updated. No gating or logic change.\n\nRefs #978.",
          "timestamp": "2026-06-04T23:28:05+02:00",
          "tree_id": "78867aeb6c5398d2443ca4acbb5076dc62b54903",
          "url": "https://github.com/fallow-rs/fallow/commit/2f0d8893b41e3987151c16573c84a576b03716bc"
        },
        "date": 1780608818209,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62390,
            "range": "± 3682",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3954029,
            "range": "± 158971",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6169023,
            "range": "± 189715",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32193126,
            "range": "± 891902",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115192,
            "range": "± 769",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2565,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 187709,
            "range": "± 3376",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 827529,
            "range": "± 6849",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1329570,
            "range": "± 22043",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 542053,
            "range": "± 39891",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3337240,
            "range": "± 43708",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3347669,
            "range": "± 44825",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2251366,
            "range": "± 7491",
            "unit": "ns/iter"
          }
        ]
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
          "id": "d0e29acf8b4b495952032e7890c4239dc0d978e9",
          "message": "feat(security): add catalogue sink rows batch 2 (#990)\n\nAdd catalogue-only tainted-sink rows for issue #897: insecure randomness\n(crypto.pseudoRandomBytes), deprecated cipher constructors\n(crypto.createCipher/createDecipher), template escape bypass (SafeString),\nXPath injection (xpath.select/select1), unsafe Buffer allocation\n(Buffer.allocUnsafe/allocUnsafeSlow), and react-native-webview injected\nscripts (injectJavaScript / injectedJavaScript, enabler-gated). Extend the\nraw-SQL escape-hatch row with Sequelize.literal.\n\nNo extractor, cache, or schema change: every row fits the existing\nnon-literal-arg sink model and fires on a non-literal argument only.\n\nThree of the issue's listed rows are deferred and documented in the catalogue\nDEFERRED block: sensitive client storage and info/error exposure need an\nidentifier / error-object shape gate (fold into #892), and mysql\nmultipleStatements needs option-object capture (#875).\n\nFixes #897.",
          "timestamp": "2026-06-04T23:46:30+02:00",
          "tree_id": "c95897cab8baef34767d3092a6e09ced9bea6d21",
          "url": "https://github.com/fallow-rs/fallow/commit/d0e29acf8b4b495952032e7890c4239dc0d978e9"
        },
        "date": 1780609903832,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 64160,
            "range": "± 469",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3849212,
            "range": "± 164059",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6078259,
            "range": "± 283853",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30117802,
            "range": "± 570957",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114828,
            "range": "± 5524",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2386,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185525,
            "range": "± 3931",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822404,
            "range": "± 21180",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1328694,
            "range": "± 28893",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531795,
            "range": "± 21170",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3336990,
            "range": "± 62219",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3364980,
            "range": "± 28816",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2234685,
            "range": "± 6336",
            "unit": "ns/iter"
          }
        ]
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
          "id": "6898a24b96248c0eed09d9b8a88c57125d851b62",
          "message": "feat(telemetry): findings_present, workflow split, MCP surface tagging (#994)\n\nThree telemetry accuracy gaps, all telemetry-only (no analysis output, exit codes, or user-facing behavior change; payload stays off-by-default and allowlisted).\n\n#972 adds an optional findings_present field set from each analysis's real result, decoupled from the exit-code outcome gate (default-config dupes never gates, so outcome=success was the only signal). #974 routes Command::Impact/Security/Fix/Explain to their own Workflow variants. #973 tags MCP-spawned CLI runs as integration_surface=mcp with a per-tool mcp_tool dimension via FALLOW_INTEGRATION_SURFACE / FALLOW_MCP_TOOL, so one correctly-labeled event is emitted with the same privacy posture.\n\nCloses #972.\nCloses #973.\nCloses #974.",
          "timestamp": "2026-06-05T00:28:03+02:00",
          "tree_id": "946f7c8e86e4aab83898fa8b6b5081035b573788",
          "url": "https://github.com/fallow-rs/fallow/commit/6898a24b96248c0eed09d9b8a88c57125d851b62"
        },
        "date": 1780612440280,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 81139,
            "range": "± 548",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4088952,
            "range": "± 174590",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6001687,
            "range": "± 252750",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28946772,
            "range": "± 482996",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119761,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2292,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234581,
            "range": "± 5605",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1064570,
            "range": "± 9205",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1506416,
            "range": "± 21412",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 568661,
            "range": "± 24169",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4342370,
            "range": "± 52319",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4348814,
            "range": "± 36414",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2961569,
            "range": "± 29848",
            "unit": "ns/iter"
          }
        ]
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
          "id": "ddde044d2c739ac260aa9c425d9c664c82c4e8c9",
          "message": "feat(health): import VCS churn via --churn-file for non-git hotspots (#996)\n\nAdd a global --churn-file flag accepting a fallow-churn/v1 JSON document so\nprojects on a non-git VCS (Yandex Arc, Mercurial, Perforce) get hotspots,\nownership, and bus-factor. fallow runs all existing recency-weighting, trend,\nand ownership logic on the imported events unchanged (imported and git churn\naggregate identically). The file is authoritative for the window, so --since\nonly labels output; a malformed file is a loud up-front error (exit 2). No JSON\noutput shape change. Exposed on the MCP check_health tool as churn_file.\n\nScope: powers the churn-backed health signals only; audit, impact, and\n--changed-since still require git.\n\nCloses #980.",
          "timestamp": "2026-06-05T08:45:42+02:00",
          "tree_id": "e217f7a01e254e27b2ccf93898aace1be59f38dc",
          "url": "https://github.com/fallow-rs/fallow/commit/ddde044d2c739ac260aa9c425d9c664c82c4e8c9"
        },
        "date": 1780642473013,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 53714,
            "range": "± 2341",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3630316,
            "range": "± 147681",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5424403,
            "range": "± 204114",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27497837,
            "range": "± 764358",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 97448,
            "range": "± 1725",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2144,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 165407,
            "range": "± 7012",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 733851,
            "range": "± 12990",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1192744,
            "range": "± 45601",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 495618,
            "range": "± 14547",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2980812,
            "range": "± 78023",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2963093,
            "range": "± 71900",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1935831,
            "range": "± 37477",
            "unit": "ns/iter"
          }
        ]
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
          "id": "927fb614f5eb5779b74cccf5b6be82e12d127b1b",
          "message": "fix(bun): discover default test files\n\nModel Bun's documented test file discovery patterns as plugin entry roots so projects do not need manual entry workarounds for bun test files.\n\nWhen bunfig.toml declares [test].root, replace the unscoped Bun defaults with root-scoped patterns while preserving top-level and test preload entries. Add regression coverage for scoped discovery and non-test helpers under the test root.\n\nFixes #951.",
          "timestamp": "2026-06-05T11:34:35+02:00",
          "tree_id": "f982df1a28bb4f6107d52bc9cd1c261a0f9f191c",
          "url": "https://github.com/fallow-rs/fallow/commit/927fb614f5eb5779b74cccf5b6be82e12d127b1b"
        },
        "date": 1780652738106,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 84007,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4181479,
            "range": "± 243395",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6254328,
            "range": "± 229090",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29795017,
            "range": "± 615384",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119810,
            "range": "± 913",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2473,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 242520,
            "range": "± 5297",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1094866,
            "range": "± 8977",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1551947,
            "range": "± 16019",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576936,
            "range": "± 26468",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4365420,
            "range": "± 74294",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4375690,
            "range": "± 52205",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3050070,
            "range": "± 13434",
            "unit": "ns/iter"
          }
        ]
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
          "id": "181bc35ff549eb068b53c1e5351c2e4b15aa5531",
          "message": "fix(deps): credit Nuxt UI script Iconify strings\n\nExtract Vue SFC object-property icon strings that use Nuxt UI's i-<collection>-<icon> form and store them in the extraction cache alongside the existing Iconify prefix data.\n\nResolve those names against declared @iconify-json/* packages using longest-prefix matching, so hyphenated collections such as simple-icons are credited without broad arbitrary string matching.\n\nFixes #955.",
          "timestamp": "2026-06-05T11:42:59+02:00",
          "tree_id": "b58cb1cc9be296336488b2d8cb13881e202d98b1",
          "url": "https://github.com/fallow-rs/fallow/commit/181bc35ff549eb068b53c1e5351c2e4b15aa5531"
        },
        "date": 1780653223276,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 82605,
            "range": "± 1064",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4155748,
            "range": "± 184380",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6182078,
            "range": "± 203900",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29145722,
            "range": "± 528065",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111545,
            "range": "± 1955",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2302,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233091,
            "range": "± 1397",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1048725,
            "range": "± 7611",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1501090,
            "range": "± 14346",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572048,
            "range": "± 10933",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4258474,
            "range": "± 37762",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4290228,
            "range": "± 58353",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2936690,
            "range": "± 44362",
            "unit": "ns/iter"
          }
        ]
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
          "id": "1657f10c9911ea96460a08868fad8130ef585045",
          "message": "fix(playwright): credit pnpm exec web server CLIs\n\nPlaywright web server commands can be written as template literals when they interpolate values such as ports. Recover static command text from those templates for command parsing while keeping path-like config extraction unchanged.\n\nThe Playwright plugin now sends those recovered commands through the existing script parser, so package-manager exec forms like pnpm exec srvx credit the invoked CLI package. Dynamic commands that start with interpolation or split a static shell token stay skipped.\n\nFixes #956.",
          "timestamp": "2026-06-05T11:46:30+02:00",
          "tree_id": "34b25554942dfd9e0214b7be4f3b77dc987ed187",
          "url": "https://github.com/fallow-rs/fallow/commit/1657f10c9911ea96460a08868fad8130ef585045"
        },
        "date": 1780653657386,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62970,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3845217,
            "range": "± 143390",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5913684,
            "range": "± 213583",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30095313,
            "range": "± 896452",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120421,
            "range": "± 2573",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2589,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185146,
            "range": "± 6822",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822477,
            "range": "± 31867",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1319500,
            "range": "± 37499",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534368,
            "range": "± 12540",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3326723,
            "range": "± 27519",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3352498,
            "range": "± 33633",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2234664,
            "range": "± 35409",
            "unit": "ns/iter"
          }
        ]
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
          "id": "3fa9bc58bde716adda65d24bd66cdfb4af886d23",
          "message": "fix(mcp): gate unix-only test helpers",
          "timestamp": "2026-06-05T12:24:48+02:00",
          "tree_id": "7992326077e722733c6ee2427c7a80ea32bc77f2",
          "url": "https://github.com/fallow-rs/fallow/commit/3fa9bc58bde716adda65d24bd66cdfb4af886d23"
        },
        "date": 1780655441577,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62322,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3857342,
            "range": "± 177073",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5935454,
            "range": "± 195732",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29829961,
            "range": "± 625224",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119464,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2395,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185556,
            "range": "± 15936",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820116,
            "range": "± 3947",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1319725,
            "range": "± 17379",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538330,
            "range": "± 11891",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3323272,
            "range": "± 35913",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3349661,
            "range": "± 42741",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2226668,
            "range": "± 7634",
            "unit": "ns/iter"
          }
        ]
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
          "id": "d6efaabdbc2c0978588eb4645c3b6c473e65c26e",
          "message": "fix(unused-deps): credit pino transport targets\n\nFixes #954.",
          "timestamp": "2026-06-05T14:10:24+02:00",
          "tree_id": "012eae776a0410fed85611554992d3dacc8f3f5e",
          "url": "https://github.com/fallow-rs/fallow/commit/d6efaabdbc2c0978588eb4645c3b6c473e65c26e"
        },
        "date": 1780661737728,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 85795,
            "range": "± 1420",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4214646,
            "range": "± 169824",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6122091,
            "range": "± 202897",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29125512,
            "range": "± 764006",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120164,
            "range": "± 788",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2348,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233192,
            "range": "± 2274",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1050986,
            "range": "± 5603",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1503087,
            "range": "± 17198",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576139,
            "range": "± 6292",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4317815,
            "range": "± 69109",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4320619,
            "range": "± 37274",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2933626,
            "range": "± 11076",
            "unit": "ns/iter"
          }
        ]
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
          "id": "b473402c34747e00e9f897cb1ee43d8447ba1cba",
          "message": "fix(dead-code): credit package path resolution deps\n\nRecord statically recoverable package path resolution references during JS and TS extraction, then credit those package names in the dependency graph. The detection is limited to package roots and package manifest lookups so arbitrary dynamic strings and unrelated subpaths do not hide unused dependencies.\n\nAdd a regression fixture for build-script package roots and static font package tables, including the real issue shape where a package name flows into require.resolve of package.json. Bump the extract cache version because cached modules now carry the new reference list.\n\nFixes #952.",
          "timestamp": "2026-06-05T14:20:00+02:00",
          "tree_id": "fff8d11f2760fc028721ebf67bf6498ea79953d2",
          "url": "https://github.com/fallow-rs/fallow/commit/b473402c34747e00e9f897cb1ee43d8447ba1cba"
        },
        "date": 1780662371844,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 85399,
            "range": "± 1386",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4110697,
            "range": "± 254088",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5977391,
            "range": "± 192430",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29161924,
            "range": "± 403145",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119650,
            "range": "± 743",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2297,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235081,
            "range": "± 5045",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1073351,
            "range": "± 14100",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1526294,
            "range": "± 15789",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577575,
            "range": "± 16770",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4388652,
            "range": "± 29792",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4287380,
            "range": "± 33766",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2987658,
            "range": "± 14251",
            "unit": "ns/iter"
          }
        ]
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
          "id": "5eb0929aa20010f2d5735a0fb518a9b9dfed8180",
          "message": "fix: credit this-returning fluent chains\n\nCloses #953\n\nAlso keeps the filesystem-canonicalization fallback test out of Miri isolation, matching the existing CI scope for filesystem-heavy graph tests.",
          "timestamp": "2026-06-05T14:42:55+02:00",
          "tree_id": "187df349dbc92721dc717bc522b0653eeb7f811b",
          "url": "https://github.com/fallow-rs/fallow/commit/5eb0929aa20010f2d5735a0fb518a9b9dfed8180"
        },
        "date": 1780663684182,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83788,
            "range": "± 1038",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4226697,
            "range": "± 179600",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6175693,
            "range": "± 217044",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29062509,
            "range": "± 430340",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113092,
            "range": "± 1840",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2481,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235559,
            "range": "± 34319",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069921,
            "range": "± 12300",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1524984,
            "range": "± 16629",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 573944,
            "range": "± 17373",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4303694,
            "range": "± 51318",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4415270,
            "range": "± 33055",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2991795,
            "range": "± 6214",
            "unit": "ns/iter"
          }
        ]
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
          "id": "dcb36bf9508bc94681cbf95a29b313424a6f397f",
          "message": "fix(security): detect template html sinks\n\n* chore: open issue 883 implementation branch\n\n* fix(security): detect template html sinks",
          "timestamp": "2026-06-05T15:08:38+02:00",
          "tree_id": "337bb276097106d4d52713ce51e9acb1431a6e57",
          "url": "https://github.com/fallow-rs/fallow/commit/dcb36bf9508bc94681cbf95a29b313424a6f397f"
        },
        "date": 1780665233653,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 64913,
            "range": "± 1207",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3804418,
            "range": "± 128639",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5838959,
            "range": "± 221135",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29961005,
            "range": "± 427874",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121622,
            "range": "± 2549",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2372,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184322,
            "range": "± 8515",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821314,
            "range": "± 10881",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1318921,
            "range": "± 22834",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533263,
            "range": "± 9746",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3299152,
            "range": "± 129778",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3375813,
            "range": "± 88480",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2218308,
            "range": "± 22626",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "95c6ff90a9054864e6ef76d3937cb6833d469eca",
          "message": "test: improve coverage for trace reporting",
          "timestamp": "2026-06-05T16:34:39+02:00",
          "tree_id": "20dfd3803b865bfa267c58c2c124e1d2ef5cc5c1",
          "url": "https://github.com/fallow-rs/fallow/commit/95c6ff90a9054864e6ef76d3937cb6833d469eca"
        },
        "date": 1780670420842,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83873,
            "range": "± 2591",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3830054,
            "range": "± 201751",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5775491,
            "range": "± 162789",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28440367,
            "range": "± 393853",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121153,
            "range": "± 1752",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2380,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237728,
            "range": "± 8568",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1074726,
            "range": "± 32056",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1528719,
            "range": "± 15927",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574294,
            "range": "± 9779",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4386872,
            "range": "± 24257",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4423516,
            "range": "± 31964",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3014672,
            "range": "± 5548",
            "unit": "ns/iter"
          }
        ]
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
          "id": "4770ce5dca328f47d52d6eb4f9d4a65fd38c0613",
          "message": "feat(vscode): editor-intelligence batch for the extension and LSP (#1009)\n\nLands the in-editor intelligence work as one change on top of origin/main.\n\n- Per-decision-point complexity breakdown (health --complexity-breakdown, VS Code inline markers + hover, MCP complexity_breakdown).\n- Per-file circular-dependency diagnostics (one squiggly per file anchored at the closing import, rotated message, cycleId in Diagnostic.data, additive edges[] JSON), plus find_import_span_start anchoring on the value import on mixed type/value edges.\n- unresolved-import diagnostics anchored under the require specifier (source_span).\n- VS Code sidebar UX overhaul + references code-lens fix.\n- VS Code license indicator only shown when license material is present.\n\nCACHE_VERSION bumped to 122 (one-time re-extract on upgrade).",
          "timestamp": "2026-06-05T17:28:22+02:00",
          "tree_id": "da15d07b9c403db06de40f2b833f134e7cbf0089",
          "url": "https://github.com/fallow-rs/fallow/commit/4770ce5dca328f47d52d6eb4f9d4a65fd38c0613"
        },
        "date": 1780673683476,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 85083,
            "range": "± 3038",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4102847,
            "range": "± 173406",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6057513,
            "range": "± 189232",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29801361,
            "range": "± 589794",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119806,
            "range": "± 1071",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2345,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233342,
            "range": "± 1827",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1056335,
            "range": "± 26777",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1505636,
            "range": "± 18341",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577652,
            "range": "± 16944",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4284959,
            "range": "± 48474",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4314846,
            "range": "± 38909",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2953098,
            "range": "± 27318",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "647fe2d90f7316b9a95ccd690481224e9a95333b",
          "message": "chore: release v2.89.0",
          "timestamp": "2026-06-05T18:13:59+02:00",
          "tree_id": "4ff254848515b9a263a51bfdaa0160e2ea19f29e",
          "url": "https://github.com/fallow-rs/fallow/commit/647fe2d90f7316b9a95ccd690481224e9a95333b"
        },
        "date": 1780677014219,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83357,
            "range": "± 973",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4139234,
            "range": "± 250908",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5954993,
            "range": "± 218591",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28738503,
            "range": "± 439189",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120159,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2492,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 247288,
            "range": "± 5423",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1057559,
            "range": "± 13352",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1503725,
            "range": "± 13077",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 575237,
            "range": "± 30185",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4274834,
            "range": "± 26588",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4303656,
            "range": "± 26753",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2921303,
            "range": "± 6975",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "65e53f7f3a21226a1a36f2289d3c2be080b5037f",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.89.0",
          "timestamp": "2026-06-05T19:03:16+02:00",
          "tree_id": "eead14fa45ebe37658e426c37439f9e3ce986ddd",
          "url": "https://github.com/fallow-rs/fallow/commit/65e53f7f3a21226a1a36f2289d3c2be080b5037f"
        },
        "date": 1780679312640,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 82213,
            "range": "± 2056",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4140599,
            "range": "± 255234",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6144465,
            "range": "± 209333",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29083362,
            "range": "± 460999",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118799,
            "range": "± 801",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2310,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232463,
            "range": "± 7796",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1049385,
            "range": "± 14123",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1501368,
            "range": "± 71564",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 571947,
            "range": "± 27944",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4264580,
            "range": "± 27429",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4315847,
            "range": "± 69466",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2923908,
            "range": "± 10809",
            "unit": "ns/iter"
          }
        ]
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
          "id": "e665f88427a70751a7c0b7cecc8f7379d00d3da4",
          "message": "fix(cli): name canonical `fallow dead-code` in user-facing messages (#1011)\n\nSeveral user-facing messages still told users to run the deprecated `fallow check` alias (which already prints a deprecation warning). The fix skip notes, migrate caveat, regression-baseline hint, and fix MCP tool descriptions now reference `fallow dead-code`. Internal doc comments updated to match; the `check` alias keeps working.",
          "timestamp": "2026-06-06T11:14:42+02:00",
          "tree_id": "2ee8660fea286ffed5a9676ede49c8dfb5aecd6e",
          "url": "https://github.com/fallow-rs/fallow/commit/e665f88427a70751a7c0b7cecc8f7379d00d3da4"
        },
        "date": 1780737638921,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 65109,
            "range": "± 776",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3841699,
            "range": "± 151324",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5944072,
            "range": "± 171388",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30738328,
            "range": "± 495251",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118013,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2376,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185974,
            "range": "± 9727",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820723,
            "range": "± 12460",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317480,
            "range": "± 73348",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536394,
            "range": "± 18749",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3321839,
            "range": "± 33433",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3357683,
            "range": "± 63726",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2227915,
            "range": "± 18428",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "8939da6204bfba025c5769c0bd7f9638a777d062",
          "message": "test: improve coverage for napi and audit",
          "timestamp": "2026-06-06T13:26:53+02:00",
          "tree_id": "612f46a82a7dcfcbcf09eac14ec40c038c840021",
          "url": "https://github.com/fallow-rs/fallow/commit/8939da6204bfba025c5769c0bd7f9638a777d062"
        },
        "date": 1780747671191,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 64367,
            "range": "± 1716",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3968010,
            "range": "± 222487",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6000099,
            "range": "± 186699",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32376640,
            "range": "± 623006",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117508,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2423,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 189637,
            "range": "± 4000",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 825225,
            "range": "± 17885",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1324303,
            "range": "± 19032",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533964,
            "range": "± 35722",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3344604,
            "range": "± 224270",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3361709,
            "range": "± 49172",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2288621,
            "range": "± 30685",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c575f84da75c61b276392aa443edd7b0ff20fef1",
          "message": "test: improve coverage for node bindings",
          "timestamp": "2026-06-06T14:15:39+02:00",
          "tree_id": "6a5f80c40cd215682f88104f5a73eac5f8a85b9c",
          "url": "https://github.com/fallow-rs/fallow/commit/c575f84da75c61b276392aa443edd7b0ff20fef1"
        },
        "date": 1780748488405,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 85447,
            "range": "± 931",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4051214,
            "range": "± 245036",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5955613,
            "range": "± 221381",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29586068,
            "range": "± 477318",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117259,
            "range": "± 1455",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2371,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232661,
            "range": "± 5496",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1049994,
            "range": "± 10849",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1498939,
            "range": "± 21505",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572116,
            "range": "± 19179",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4267057,
            "range": "± 29292",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4294550,
            "range": "± 39995",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2937622,
            "range": "± 6969",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "7969561+jsgoldman@users.noreply.github.com",
            "name": "jsgoldman",
            "username": "jsgoldman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45b3d87f7686009c8429b20a3d6270beb01845d4",
          "message": "fix(extract): ignore prose JSDoc import examples\n\nTighten JSDoc import-type extraction so prose examples do not create false unresolved-import findings. The extractor now only follows import(\"...\") references inside type-bearing JSDoc brace groups, while preserving real annotations including @type, @returns, @satisfies, @template, and @enum.\n\nThanks @jsgoldman for the original patch in #1010.",
          "timestamp": "2026-06-06T14:20:02+02:00",
          "tree_id": "6ea5757997558fa23ff4b04d63294b50a79f7e50",
          "url": "https://github.com/fallow-rs/fallow/commit/45b3d87f7686009c8429b20a3d6270beb01845d4"
        },
        "date": 1780748796086,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 72098,
            "range": "± 1078",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3344605,
            "range": "± 114175",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5034514,
            "range": "± 149300",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23747828,
            "range": "± 642466",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110941,
            "range": "± 2371",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3087,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156818,
            "range": "± 1549",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 708461,
            "range": "± 5060",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1186673,
            "range": "± 16422",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 468327,
            "range": "± 28512",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2918034,
            "range": "± 22986",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2946614,
            "range": "± 51838",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1946202,
            "range": "± 11513",
            "unit": "ns/iter"
          }
        ]
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
          "id": "cd64a84e458da30a8280db60a515223b432d90ba",
          "message": "fix(security): detect Vite import.meta.env secret reads\n\nDetect static import.meta.env secret reads as env sources for the opt-in client/server leak security candidate rule.\n\nKeep public Vite-prefixed reads excluded, preserve the package import-condition behavior for browser entries, and guard against mislabeling new.target.env as import.meta.env.\n\nFixes #877.",
          "timestamp": "2026-06-06T14:37:16+02:00",
          "tree_id": "c595500af985c18cd119e566e9629d329dae8199",
          "url": "https://github.com/fallow-rs/fallow/commit/cd64a84e458da30a8280db60a515223b432d90ba"
        },
        "date": 1780749827657,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 71412,
            "range": "± 1039",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3193819,
            "range": "± 70429",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4834014,
            "range": "± 72184",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23015504,
            "range": "± 397107",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107892,
            "range": "± 3791",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3106,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 158113,
            "range": "± 1613",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 707571,
            "range": "± 4238",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1192037,
            "range": "± 17821",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 468630,
            "range": "± 16496",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2878382,
            "range": "± 15867",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2933775,
            "range": "± 19503",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1946883,
            "range": "± 16121",
            "unit": "ns/iter"
          }
        ]
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
          "id": "2ee51cbae9014a263c9d23ef230ef3ae21ad1baa",
          "message": "fix(vscode): schema-gate workspaces output\n\nAdd a Rust-owned schema contract for `fallow workspaces --format json`, regenerate the JSON schema plus VS Code and npm declaration outputs, and route the VS Code workspace picker through the generated type surface.\n\nFixes #991.",
          "timestamp": "2026-06-06T14:38:01+02:00",
          "tree_id": "137305f275c65fbc7b1637f3baa0da1cb83f41e3",
          "url": "https://github.com/fallow-rs/fallow/commit/2ee51cbae9014a263c9d23ef230ef3ae21ad1baa"
        },
        "date": 1780750198074,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 84032,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4118104,
            "range": "± 177217",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6065653,
            "range": "± 169737",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29081944,
            "range": "± 453267",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115588,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2317,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 242873,
            "range": "± 5918",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1079038,
            "range": "± 9279",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1534594,
            "range": "± 15152",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574757,
            "range": "± 10769",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4391044,
            "range": "± 27759",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4438401,
            "range": "± 26837",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3007258,
            "range": "± 84192",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2c48dd5128ed461cc0255dd030dc7101d55774d2",
          "message": "test: cover coverage analyze helpers",
          "timestamp": "2026-06-06T14:42:13+02:00",
          "tree_id": "25f3b461ebf421cb52c18da530d70f1bbaf3645a",
          "url": "https://github.com/fallow-rs/fallow/commit/2c48dd5128ed461cc0255dd030dc7101d55774d2"
        },
        "date": 1780750501872,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 49993,
            "range": "± 866",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3159370,
            "range": "± 113942",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4751540,
            "range": "± 146341",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23574724,
            "range": "± 460796",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 86393,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1855,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143365,
            "range": "± 5357",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 634585,
            "range": "± 83753",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1018740,
            "range": "± 15703",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 417739,
            "range": "± 15716",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2557460,
            "range": "± 51013",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2584878,
            "range": "± 22882",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1728776,
            "range": "± 8673",
            "unit": "ns/iter"
          }
        ]
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
          "id": "13b5c322dac21fbbff9f575d221dc6395f39d83f",
          "message": "fix(deps): credit pnpm workspace package imports\n\nCredit valid bare package imports when resolver canonicalization follows a pnpm workspace symlink outside the analyzed package root.\n\nKeep path aliases excluded from the fallback, so aliases like @/shared and #polyfill are not credited as dependencies. Add regression coverage for analyzing a consumer workspace package directly.\n\nFixes #1008.",
          "timestamp": "2026-06-06T15:02:53+02:00",
          "tree_id": "5074eb5757799ddcdc6bd800b4972a84bf6a0fcc",
          "url": "https://github.com/fallow-rs/fallow/commit/13b5c322dac21fbbff9f575d221dc6395f39d83f"
        },
        "date": 1780751293657,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63443,
            "range": "± 1682",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3665155,
            "range": "± 141200",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5798982,
            "range": "± 161787",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29539942,
            "range": "± 354421",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120302,
            "range": "± 678",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2509,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185509,
            "range": "± 1365",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821018,
            "range": "± 27209",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1318813,
            "range": "± 41338",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533492,
            "range": "± 10738",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3321392,
            "range": "± 25857",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3347932,
            "range": "± 23532",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2230711,
            "range": "± 19653",
            "unit": "ns/iter"
          }
        ]
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
          "id": "5e5418b2b636b62246f79cf7f6821bd3e8d47944",
          "message": "feat(security): capture literal-aware sink candidates\n\nCapture literal-aware security sink candidates for wildcard postMessage origins, permissive CORS, insecure cookie options, weak crypto algorithms, string-code execution, JWT alg none, Math.random token contexts, and cloud metadata URLs.\n\nPreserve the existing opt-in fallow security candidate contract: extraction records richer sink metadata, catalogue rows decide which candidates emit. Bump the extract cache version for the expanded SinkSite wire shape.\n\nFixes #875.",
          "timestamp": "2026-06-06T15:07:36+02:00",
          "tree_id": "76e04c24a1569b401e68a21dc7721c6e1a08a1c0",
          "url": "https://github.com/fallow-rs/fallow/commit/5e5418b2b636b62246f79cf7f6821bd3e8d47944"
        },
        "date": 1780751630718,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 86646,
            "range": "± 779",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4081265,
            "range": "± 172625",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6072771,
            "range": "± 175342",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29540594,
            "range": "± 612331",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115699,
            "range": "± 2216",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2307,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236596,
            "range": "± 5017",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069949,
            "range": "± 13002",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1522226,
            "range": "± 14769",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 571105,
            "range": "± 27813",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4356251,
            "range": "± 40639",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4391870,
            "range": "± 29492",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2974391,
            "range": "± 9043",
            "unit": "ns/iter"
          }
        ]
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
          "id": "9bf6bab61519f100b226c285e778114d04312df4",
          "message": "feat(lsp): add opt-in inline complexity lenses\n\nAdd opt-in LSP code lenses for functions that exceed Fallow Health cyclomatic or cognitive thresholds.\n\nWire the VS Code setting fallow.health.inlineComplexity, defaulting to false, through LSP initialization. Keep existing export reference code lenses intact and document the setting in the VS Code extension README.\n\nFixes #992.",
          "timestamp": "2026-06-06T15:16:41+02:00",
          "tree_id": "40d764ed317efc1438afc71dd0cfa1cfc2231cbf",
          "url": "https://github.com/fallow-rs/fallow/commit/9bf6bab61519f100b226c285e778114d04312df4"
        },
        "date": 1780752211296,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 87154,
            "range": "± 2295",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4069564,
            "range": "± 223555",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6089448,
            "range": "± 212154",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29278380,
            "range": "± 425352",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118896,
            "range": "± 1011",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2463,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236663,
            "range": "± 19357",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1068876,
            "range": "± 8326",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1522267,
            "range": "± 19297",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 570708,
            "range": "± 31017",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4363182,
            "range": "± 24913",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4391840,
            "range": "± 71506",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2969301,
            "range": "± 5981",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "dfd782b22e296802e272206565174c4bb996f482",
          "message": "fix(security): unwrap typed literal sink arguments",
          "timestamp": "2026-06-06T19:00:16+02:00",
          "tree_id": "64f7123415bde25d71d046623a72a2b2d74fc552",
          "url": "https://github.com/fallow-rs/fallow/commit/dfd782b22e296802e272206565174c4bb996f482"
        },
        "date": 1780765595953,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 85526,
            "range": "± 1137",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4013207,
            "range": "± 218514",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5907459,
            "range": "± 249770",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29686628,
            "range": "± 467889",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116444,
            "range": "± 1305",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2364,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235479,
            "range": "± 2990",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1064828,
            "range": "± 10003",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1516598,
            "range": "± 17722",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 575314,
            "range": "± 10907",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4357688,
            "range": "± 28013",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4246319,
            "range": "± 24577",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2958665,
            "range": "± 46117",
            "unit": "ns/iter"
          }
        ]
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
          "id": "d8d4f9fafe307febab0b98844c632d7fd83a71d3",
          "message": "fix(security): detect dynamic regex construction\n\nDetect non-literal RegExp(pattern) and new RegExp(pattern) through the existing security-sink catalogue, with CWE-1333 metadata and candidate framing.\n\nLiteral regex patterns stay quiet, and literal regex catastrophic-backtracking analysis remains out of scope for the separate regex-complexity work.\n\nFixes #896.",
          "timestamp": "2026-06-06T19:16:42+02:00",
          "tree_id": "b966124e0e7584d154cca907fcaaf08bc69402e1",
          "url": "https://github.com/fallow-rs/fallow/commit/d8d4f9fafe307febab0b98844c632d7fd83a71d3"
        },
        "date": 1780766766459,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 65889,
            "range": "± 538",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3777506,
            "range": "± 145368",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6013418,
            "range": "± 218433",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30447948,
            "range": "± 695052",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114936,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2397,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185558,
            "range": "± 1864",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822253,
            "range": "± 6618",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1328262,
            "range": "± 18029",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536693,
            "range": "± 16975",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3397428,
            "range": "± 45960",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3434962,
            "range": "± 137557",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2257033,
            "range": "± 48922",
            "unit": "ns/iter"
          }
        ]
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
          "id": "5dd55c2a9948a8969a604d88b1864e1e4a94beda",
          "message": "feat(security): detect source-backed log exposure\n\nAdd a source-backed logging sink category for fallow security. The catalogue now flags common console, logger, and log calls only when their first argument traces to process.env or request input, so ordinary literal and source-free logging remains quiet.\n\nStore direct source paths on captured sink arguments so expressions such as process.env.SECRET can be matched without an intermediate local binding. Bump the extraction cache version and add focused extraction plus integration coverage.\n\nFixes #876.",
          "timestamp": "2026-06-06T19:25:24+02:00",
          "tree_id": "c99ebadad92fab011c844eabc8a8f5b62736d2e8",
          "url": "https://github.com/fallow-rs/fallow/commit/5dd55c2a9948a8969a604d88b1864e1e4a94beda"
        },
        "date": 1780767083288,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 87192,
            "range": "± 1179",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4200685,
            "range": "± 193706",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6080685,
            "range": "± 217170",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29447275,
            "range": "± 451086",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115360,
            "range": "± 1173",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2298,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237777,
            "range": "± 6784",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1085330,
            "range": "± 27301",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1533317,
            "range": "± 15283",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 584841,
            "range": "± 19539",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4381857,
            "range": "± 38998",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4374053,
            "range": "± 42025",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3024990,
            "range": "± 29755",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}