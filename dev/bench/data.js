window.BENCHMARK_DATA = {
  "lastUpdate": 1775844275702,
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
          "id": "682617040f37ed60c90467752c86623946831e38",
          "message": "test: add route group parentheses coverage for SvelteKit $types (#54)\n\nAdds a fixture file inside nested route groups (app)/(admin) importing\n./$types to verify that parentheses in route group names do not break\ngenerated import suppression. The matching operates on the specifier\nstring, not the file path, so parentheses are irrelevant.",
          "timestamp": "2026-04-06T23:38:56+02:00",
          "tree_id": "54cadec0b0442477515d95dee939a05c16df8ea0",
          "url": "https://github.com/fallow-rs/fallow/commit/682617040f37ed60c90467752c86623946831e38"
        },
        "date": 1775511782593,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45365,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1680388,
            "range": "± 37148",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3049816,
            "range": "± 122325",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16030249,
            "range": "± 207606",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105523,
            "range": "± 2423",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1988,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204841,
            "range": "± 7495",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 913824,
            "range": "± 8730",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1716059,
            "range": "± 28896",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 528608,
            "range": "± 26853",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4247164,
            "range": "± 41811",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2544912,
            "range": "± 8353",
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
          "id": "21e62ef76d6815b6b77a992c05a0119530f34094",
          "message": "fix: normalize Windows path separators in health coverage-gaps tests\n\nBackslash paths on Windows caused 3 coverage-gaps test assertions to\nfail. Normalize at the collection point with .replace('\\\\', \"/\") so\nends_with/contains checks work cross-platform.",
          "timestamp": "2026-04-06T23:48:58+02:00",
          "tree_id": "6271baf285760342c4d5d42ea1aa730ecbc47f9f",
          "url": "https://github.com/fallow-rs/fallow/commit/21e62ef76d6815b6b77a992c05a0119530f34094"
        },
        "date": 1775512373899,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45056,
            "range": "± 833",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1691496,
            "range": "± 20423",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3075968,
            "range": "± 29969",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15752226,
            "range": "± 145247",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108172,
            "range": "± 3858",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2007,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205317,
            "range": "± 4848",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 918074,
            "range": "± 22781",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1715521,
            "range": "± 29521",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 514965,
            "range": "± 31236",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4248975,
            "range": "± 29328",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2537034,
            "range": "± 12429",
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
          "id": "ce34a911c04101597021ab985cb8b64233e7769e",
          "message": "perf: lazy complexity, packed ModuleNode flags, smart BFS, dupe detection\n\nSkip per-function complexity AST walk in the dead-code pipeline (only\nneeded by health command), reducing full_pipeline_1000 by ~35%.  Cache\nhits with missing complexity are skipped when the caller needs it,\npreventing cross-contamination between check and health commands.\n\nPack ModuleNode's 5 boolean flags into a u8 bitfield, shrinking the\nstruct from 104 to 96 bytes for better cache line utilization.\n\nSkip redundant BFS passes in mark_reachable when runtime entry points\nequal overall entry points or test entry points are empty (common case\nvia build()).\n\nOptimize dupe detection: explicit HashMap entry match in ranking, direct\nloop for line table construction, cleaner path index in subset removal.",
          "timestamp": "2026-04-07T00:41:42+02:00",
          "tree_id": "a378206b743b4ef3af75f7ed64be2e1ff70e43b1",
          "url": "https://github.com/fallow-rs/fallow/commit/ce34a911c04101597021ab985cb8b64233e7769e"
        },
        "date": 1775515539594,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41928,
            "range": "± 1314",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1670253,
            "range": "± 28906",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3053042,
            "range": "± 33715",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15414447,
            "range": "± 104750",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108636,
            "range": "± 1213",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2039,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203579,
            "range": "± 4749",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 915946,
            "range": "± 51208",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1706045,
            "range": "± 19231",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 505197,
            "range": "± 23553",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4197809,
            "range": "± 25088",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2516705,
            "range": "± 10862",
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
          "id": "3861d72528b1815c1066cfbaa48be252c541c337",
          "message": "chore: release v2.16.0",
          "timestamp": "2026-04-07T07:40:46+02:00",
          "tree_id": "b58847e1861aa27174fa473fb0550e5c109e2e75",
          "url": "https://github.com/fallow-rs/fallow/commit/3861d72528b1815c1066cfbaa48be252c541c337"
        },
        "date": 1775540735352,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 42304,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1679372,
            "range": "± 26827",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3061286,
            "range": "± 109420",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15802527,
            "range": "± 435264",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107128,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1981,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206095,
            "range": "± 1948",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 917965,
            "range": "± 29120",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1714046,
            "range": "± 98584",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 514639,
            "range": "± 23012",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4231201,
            "range": "± 39518",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2532930,
            "range": "± 9290",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kamilthedev@gmail.com",
            "name": "Kamil",
            "username": "KamilDev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d8b17ec2196ecfcd7506d487047b2c5124b87f4",
          "message": "fix: resolve root-relative HTML asset paths from project root (#61)\n\nIn Vite, Parcel, and other dev servers, `<script src=\"/src/main.tsx\">` means\n\"relative to the project root\", not an absolute filesystem path. The existing\nHTML parser correctly extracts these references, but the resolver couldn't\nresolve them, reporting false-positive unresolved imports which cascaded into\nfalse-positive unused files.\n\nResolve root-relative paths in HTML files by converting `/src/main.tsx` to\n`./src/main.tsx` and resolving against the project root directory.\n\nAlso adds canonical_fallback lookup for symlink parity with the main\nresolution path, and 3 integration tests with a dedicated fixture.",
          "timestamp": "2026-04-07T08:25:40+02:00",
          "tree_id": "00b2486e55e54570914cab2acee6a1bd09cf1cae",
          "url": "https://github.com/fallow-rs/fallow/commit/4d8b17ec2196ecfcd7506d487047b2c5124b87f4"
        },
        "date": 1775543381685,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41033,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1662057,
            "range": "± 19608",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3000098,
            "range": "± 67937",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15638905,
            "range": "± 259803",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106682,
            "range": "± 1219",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1975,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204708,
            "range": "± 2810",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908351,
            "range": "± 15019",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1703064,
            "range": "± 19046",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 522710,
            "range": "± 22485",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4198985,
            "range": "± 46398",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2514826,
            "range": "± 9141",
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
          "id": "da3f00fda8a08e6c63388f2329d8df3afee5be71",
          "message": "test: add integration tests for root-relative HTML resolution\n\nAdd fixture and 3 integration tests covering root-relative paths\n(/src/entry.ts, /src/global.css) in HTML files. Also add missing\ncanonical_fallback lookup for symlink parity with the main resolution\npath.",
          "timestamp": "2026-04-07T08:26:07+02:00",
          "tree_id": "30b22b849e8597ba2cc23c6f405f0cd936f6211c",
          "url": "https://github.com/fallow-rs/fallow/commit/da3f00fda8a08e6c63388f2329d8df3afee5be71"
        },
        "date": 1775543621637,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35939,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1471891,
            "range": "± 37138",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2491106,
            "range": "± 77052",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 11684218,
            "range": "± 65070",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 99252,
            "range": "± 4043",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2777,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 163769,
            "range": "± 1521",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 727225,
            "range": "± 4259",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1525749,
            "range": "± 20295",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 453511,
            "range": "± 7359",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3427993,
            "range": "± 22125",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2050541,
            "range": "± 8364",
            "unit": "ns/iter"
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
        "date": 1775547861618,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40034,
            "range": "± 1381",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1675152,
            "range": "± 39557",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3012020,
            "range": "± 23958",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15510882,
            "range": "± 105908",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112110,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1999,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205102,
            "range": "± 3599",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908975,
            "range": "± 12151",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1740379,
            "range": "± 20937",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 510636,
            "range": "± 27862",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4242019,
            "range": "± 85720",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2526027,
            "range": "± 5343",
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
          "id": "037d220c40cb555e4638134f19401086823bfe07",
          "message": "chore(ci): raise benchmark alert thresholds to reduce noise\n\nBench: 110% → 150% (micro-benchmarks fluctuate on shared CI runners).\nConformance: 105% → 115% (correctness improvements shift issue totals).",
          "timestamp": "2026-04-07T09:53:46+02:00",
          "tree_id": "95e4b1d76822d6ee2c1e10ef8283ee2a60c5d6f2",
          "url": "https://github.com/fallow-rs/fallow/commit/037d220c40cb555e4638134f19401086823bfe07"
        },
        "date": 1775548663289,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34238,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1711664,
            "range": "± 48004",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3129972,
            "range": "± 26257",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16240423,
            "range": "± 61095",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109768,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2037,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 180234,
            "range": "± 6533",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 793865,
            "range": "± 39023",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1663470,
            "range": "± 32989",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 506021,
            "range": "± 35422",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3689856,
            "range": "± 30981",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2145775,
            "range": "± 34480",
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
          "id": "b434ec77dddff007406ec3267cfa42840e57dfd4",
          "message": "chore: release v2.17.0",
          "timestamp": "2026-04-07T10:18:42+02:00",
          "tree_id": "bf4fd6f117333efd1ab0ad31ee1304c2e91cf2c5",
          "url": "https://github.com/fallow-rs/fallow/commit/b434ec77dddff007406ec3267cfa42840e57dfd4"
        },
        "date": 1775550169200,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40194,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1650200,
            "range": "± 39275",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3032608,
            "range": "± 26518",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15446472,
            "range": "± 73285",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 101861,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2000,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205277,
            "range": "± 1792",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 910359,
            "range": "± 22916",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1717353,
            "range": "± 18088",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 514917,
            "range": "± 10943",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4239694,
            "range": "± 54120",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2508221,
            "range": "± 25778",
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
          "id": "a9c906bd202f254b954dc31e732bf8e06e5f2853",
          "message": "chore: release v2.17.1",
          "timestamp": "2026-04-07T10:58:17+02:00",
          "tree_id": "32d50cbb6874ddb21b12c82e2f47eb363bfebf06",
          "url": "https://github.com/fallow-rs/fallow/commit/a9c906bd202f254b954dc31e732bf8e06e5f2853"
        },
        "date": 1775552543095,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41336,
            "range": "± 1117",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1667216,
            "range": "± 42015",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3030195,
            "range": "± 32880",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16022912,
            "range": "± 248306",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107826,
            "range": "± 903",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1984,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203290,
            "range": "± 6888",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 909681,
            "range": "± 10288",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1732295,
            "range": "± 24355",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 512397,
            "range": "± 33511",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4233210,
            "range": "± 51631",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2504148,
            "range": "± 79993",
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
          "id": "96be261b4fa3cc4daf6a50ea76c1715b6ba355fb",
          "message": "fix(action): use metric labels, add first-run hint, improve CI docs\n\n- Use trend metric .label field (e.g., \"avg complexity\") instead of\n  hardcoded names in delta header for robustness and clarity\n- Add progressive disclosure footnote on first run (score present but\n  no trend): suggests enabling save-snapshot for trend tracking\n- Fix action.yml descriptions to mention bare command support and\n  snapshot location (.fallow/snapshots/)\n- Add inline comments to GitLab CI env vars for discoverability",
          "timestamp": "2026-04-07T11:53:42+02:00",
          "tree_id": "abadf24e78d4f2540485b79b1112c5ad02f8d63b",
          "url": "https://github.com/fallow-rs/fallow/commit/96be261b4fa3cc4daf6a50ea76c1715b6ba355fb"
        },
        "date": 1775556122849,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41493,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1669912,
            "range": "± 18163",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3014527,
            "range": "± 20437",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15476427,
            "range": "± 79083",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107357,
            "range": "± 946",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1975,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203349,
            "range": "± 1349",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 905519,
            "range": "± 11704",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1728394,
            "range": "± 26155",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 510258,
            "range": "± 31412",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4211509,
            "range": "± 44786",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2521440,
            "range": "± 9892",
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
          "id": "f4b28b6229cab9ac6dd8d8e9bccbf08098ceb643",
          "message": "chore: release v2.18.0",
          "timestamp": "2026-04-07T12:04:41+02:00",
          "tree_id": "03847cd5bb04cac27726b72b27e344c0b7228c09",
          "url": "https://github.com/fallow-rs/fallow/commit/f4b28b6229cab9ac6dd8d8e9bccbf08098ceb643"
        },
        "date": 1775556530968,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40539,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1682095,
            "range": "± 40075",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3005502,
            "range": "± 48587",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15487565,
            "range": "± 150575",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104294,
            "range": "± 1500",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2003,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203315,
            "range": "± 5981",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908990,
            "range": "± 193642",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1720829,
            "range": "± 37789",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 517701,
            "range": "± 14579",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4235644,
            "range": "± 70423",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2510631,
            "range": "± 16562",
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
          "id": "ef6f521dfd40c5a4dbd2f38897c22826eb677f2c",
          "message": "test: add integration tests for unused fixtures\n\n- barrel-default-reexport: verify unused Card re-export detected,\n  Button correctly recognized as used\n- config-toml-project: verify fallow.toml config loading, rule\n  severity parsing, and full analysis pipeline with TOML config\n- workspace-nested-exports: verify dist/esm/ exports map paths\n  resolve back to source files via fallback",
          "timestamp": "2026-04-07T13:18:41+02:00",
          "tree_id": "80fcfb6df782f6a49ee42f7ad5a7211f8628ed14",
          "url": "https://github.com/fallow-rs/fallow/commit/ef6f521dfd40c5a4dbd2f38897c22826eb677f2c"
        },
        "date": 1775561268533,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41152,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1688860,
            "range": "± 68174",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3054614,
            "range": "± 28499",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15535316,
            "range": "± 108541",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104189,
            "range": "± 1255",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1997,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205052,
            "range": "± 2525",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 917844,
            "range": "± 151994",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1743096,
            "range": "± 20064",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 522822,
            "range": "± 40109",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4291587,
            "range": "± 56625",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2545014,
            "range": "± 48656",
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
          "id": "324fbba6d9acc7bbf694654a148206a55ebe505a",
          "message": "chore: low-priority quality improvements from audit\n\n- Decompose run_combined from 275 to 127 lines (4 extracted functions)\n- Narrow tokio features from \"full\" to 6 specific features\n- Move miette fancy feature from config to CLI only\n- Add --all-targets to pre-commit/pre-push hooks\n- Add npm ecosystem entries to Dependabot (vscode, npm wrapper)\n- Replace magic numbers: 86400 -> SECS_PER_DAY, 30 -> COGNITIVE_EXTRACTION_THRESHOLD\n- Fix release.yml: publish-crates needs build, remove duplicate npm install\n- Switch test temp dirs to tempfile::tempdir() for RAII cleanup\n- Add LSP boundary violation diagnostic tests (5 tests)\n- Add plugin resolve_config tests for tsup, rollup, rolldown (20 tests)",
          "timestamp": "2026-04-07T13:42:06+02:00",
          "tree_id": "7a02bff40c85b666f6c1e0e11a698bbd982f24e3",
          "url": "https://github.com/fallow-rs/fallow/commit/324fbba6d9acc7bbf694654a148206a55ebe505a"
        },
        "date": 1775562377833,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 36316,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1467250,
            "range": "± 28181",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2465775,
            "range": "± 18141",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 11823555,
            "range": "± 128237",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 96527,
            "range": "± 3352",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2755,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 162704,
            "range": "± 1866",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 732891,
            "range": "± 6994",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1552421,
            "range": "± 16478",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 457367,
            "range": "± 9777",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3466961,
            "range": "± 24306",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2015523,
            "range": "± 4222",
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
          "id": "c684f8f965af619e67e9e3d949767e9c70ca9622",
          "message": "refactor: replace bincode with bitcode for cache serialization\n\nBincode is archived and unmaintained. Bitcode provides the same\nEncode/Decode derive pattern with smaller output and faster\nencode/decode. Bump CACHE_VERSION 21→22 to invalidate old caches.",
          "timestamp": "2026-04-07T13:53:46+02:00",
          "tree_id": "c3ce508c1571d4efa97d9fb0fd59972785258fd8",
          "url": "https://github.com/fallow-rs/fallow/commit/c684f8f965af619e67e9e3d949767e9c70ca9622"
        },
        "date": 1775563248192,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35363,
            "range": "± 610",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1470138,
            "range": "± 27030",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2476492,
            "range": "± 19862",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 11891942,
            "range": "± 242703",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 101225,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2773,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 162202,
            "range": "± 2918",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 726139,
            "range": "± 5299",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1533076,
            "range": "± 19177",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 458694,
            "range": "± 17056",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3471657,
            "range": "± 30651",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1999617,
            "range": "± 11300",
            "unit": "ns/iter"
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
          "id": "4747bbf1b773b5cc1240dcb4feae378ec9bae6de",
          "message": "chore(deps): bump insta from 1.46.3 to 1.47.2 (#68)\n\nBumps [insta](https://github.com/mitsuhiko/insta) from 1.46.3 to 1.47.2.\n- [Release notes](https://github.com/mitsuhiko/insta/releases)\n- [Changelog](https://github.com/mitsuhiko/insta/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/mitsuhiko/insta/compare/1.46.3...1.47.2)\n\n---\nupdated-dependencies:\n- dependency-name: insta\n  dependency-version: 1.47.2\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-07T14:03:23+02:00",
          "tree_id": "349d90e06aebfe8fbc783364745461575def7109",
          "url": "https://github.com/fallow-rs/fallow/commit/4747bbf1b773b5cc1240dcb4feae378ec9bae6de"
        },
        "date": 1775563676839,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 42083,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1677055,
            "range": "± 47901",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3055346,
            "range": "± 23563",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15510337,
            "range": "± 126974",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109623,
            "range": "± 1384",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1993,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 207709,
            "range": "± 6359",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 925094,
            "range": "± 93210",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1765717,
            "range": "± 17049",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 521748,
            "range": "± 22403",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4307471,
            "range": "± 33972",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2584746,
            "range": "± 8128",
            "unit": "ns/iter"
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
        "date": 1775563987678,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41433,
            "range": "± 1204",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1680667,
            "range": "± 22281",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3004602,
            "range": "± 21694",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15399064,
            "range": "± 127769",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108046,
            "range": "± 672",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2018,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203555,
            "range": "± 2996",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 910094,
            "range": "± 15825",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1712818,
            "range": "± 35309",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 513732,
            "range": "± 29557",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4210062,
            "range": "± 47488",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2517813,
            "range": "± 7727",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kamilthedev@gmail.com",
            "name": "Kamil",
            "username": "KamilDev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "774f13a35ce83470fa7ca26d73c74aeef546601f",
          "message": "fix(extract): resolve chained member access through class field assignments (#63)\n\nWhen a class stores an instance in a field (this.service = new MyService())\nand later calls a method through it (this.service.doWork()), the analysis\nnow correctly recognizes doWork as a used member of MyService.",
          "timestamp": "2026-04-07T14:24:10+02:00",
          "tree_id": "c53f2c5c711ec5d7329920cd0f0958f9a7ab2d1c",
          "url": "https://github.com/fallow-rs/fallow/commit/774f13a35ce83470fa7ca26d73c74aeef546601f"
        },
        "date": 1775564900627,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40381,
            "range": "± 538",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1675306,
            "range": "± 26693",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3052752,
            "range": "± 30588",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16269996,
            "range": "± 282187",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 102271,
            "range": "± 2428",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1995,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206993,
            "range": "± 5523",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 921698,
            "range": "± 127063",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1721204,
            "range": "± 37400",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 519563,
            "range": "± 31611",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4262024,
            "range": "± 84730",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2541825,
            "range": "± 80639",
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
          "id": "0dee83f4a5e0650a0dd0975f71672b7b2692c728",
          "message": "fix(extract): bump CACHE_VERSION for this.field chained access tracking\n\nInvalidates stale caches that lack the new MemberAccess entries with\nsynthetic \"this.field\" object keys added in #63. Also documents the\nchained access pattern in detection.md.",
          "timestamp": "2026-04-07T14:24:54+02:00",
          "tree_id": "72ed7a6c719003b4079177d4e29717c028e491d1",
          "url": "https://github.com/fallow-rs/fallow/commit/0dee83f4a5e0650a0dd0975f71672b7b2692c728"
        },
        "date": 1775565142894,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41575,
            "range": "± 1241",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1708465,
            "range": "± 24689",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3126805,
            "range": "± 84540",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15951570,
            "range": "± 246012",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108909,
            "range": "± 2114",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2026,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 208347,
            "range": "± 4658",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 937953,
            "range": "± 37022",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1755923,
            "range": "± 21272",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 529611,
            "range": "± 30009",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4169412,
            "range": "± 60704",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2583817,
            "range": "± 35437",
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
          "id": "4ab51218db1aa28f1c020ff05429f6dec6d99731",
          "message": "chore: release v2.18.1",
          "timestamp": "2026-04-07T15:15:41+02:00",
          "tree_id": "721ba0103fbd3fdfb8dbfb9543554823e9791d22",
          "url": "https://github.com/fallow-rs/fallow/commit/4ab51218db1aa28f1c020ff05429f6dec6d99731"
        },
        "date": 1775568028182,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40420,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1657055,
            "range": "± 14983",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3007408,
            "range": "± 17111",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15506148,
            "range": "± 536366",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104733,
            "range": "± 986",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2010,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203939,
            "range": "± 2847",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 912541,
            "range": "± 11937",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1712848,
            "range": "± 29241",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 514693,
            "range": "± 28426",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4192068,
            "range": "± 24761",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2509642,
            "range": "± 5535",
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
          "id": "4ddfaf43529cc55cded694b921f22cd0a02d0559",
          "message": "chore: release v2.18.2",
          "timestamp": "2026-04-07T16:06:14+02:00",
          "tree_id": "0baaec0ca3593326969f85c0ec1e3d40e338d33f",
          "url": "https://github.com/fallow-rs/fallow/commit/4ddfaf43529cc55cded694b921f22cd0a02d0559"
        },
        "date": 1775571018909,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40856,
            "range": "± 564",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1653387,
            "range": "± 30594",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3010698,
            "range": "± 123837",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15570337,
            "range": "± 499517",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108789,
            "range": "± 843",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1986,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203091,
            "range": "± 6633",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908462,
            "range": "± 20541",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1725501,
            "range": "± 87428",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 515011,
            "range": "± 34560",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4222007,
            "range": "± 55608",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2513137,
            "range": "± 5469",
            "unit": "ns/iter"
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
        "date": 1775571707644,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40972,
            "range": "± 1298",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1685581,
            "range": "± 37582",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3009685,
            "range": "± 68459",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15463724,
            "range": "± 99712",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111687,
            "range": "± 1414",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2037,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203901,
            "range": "± 15297",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 910469,
            "range": "± 73027",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1719265,
            "range": "± 17655",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 515443,
            "range": "± 22746",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4220174,
            "range": "± 158122",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2494583,
            "range": "± 16988",
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
          "id": "618337cb6880ce422a212f6aa50c7773332a6c78",
          "message": "refactor(fix): robustify export type whitespace detection",
          "timestamp": "2026-04-07T16:19:06+02:00",
          "tree_id": "af56e304c467eb53ed9c4db5e56372422f9f9f12",
          "url": "https://github.com/fallow-rs/fallow/commit/618337cb6880ce422a212f6aa50c7773332a6c78"
        },
        "date": 1775571959540,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 42241,
            "range": "± 2548",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1712811,
            "range": "± 44180",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3081152,
            "range": "± 46953",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15806712,
            "range": "± 633641",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104595,
            "range": "± 2120",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2590,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 207804,
            "range": "± 4147",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 923388,
            "range": "± 16984",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1758150,
            "range": "± 22338",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 522326,
            "range": "± 28012",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4275481,
            "range": "± 85127",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2557490,
            "range": "± 98459",
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
          "id": "e24ccda4e623128111b49cd10b8260923b72d08e",
          "message": "chore: release v2.18.3",
          "timestamp": "2026-04-07T16:39:29+02:00",
          "tree_id": "2a5f4d1813696868d3cea7d3cc1fdfb510a0c1cd",
          "url": "https://github.com/fallow-rs/fallow/commit/e24ccda4e623128111b49cd10b8260923b72d08e"
        },
        "date": 1775573021277,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35232,
            "range": "± 1526",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1504063,
            "range": "± 13551",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2540277,
            "range": "± 31420",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 13025294,
            "range": "± 215045",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 98459,
            "range": "± 2594",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2777,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 166758,
            "range": "± 4623",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 750412,
            "range": "± 15249",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1547438,
            "range": "± 34244",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 477636,
            "range": "± 18236",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3529567,
            "range": "± 96675",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2062854,
            "range": "± 24236",
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
          "id": "4d530b570a3be4f496d4f98fde3af8cf87631a58",
          "message": "feat: Angular template tracking for external HTML files\n\nParse @Component decorators to extract templateUrl/styleUrl references,\ncreating graph edges that prevent false unused-file reports. Scan Angular\nHTML templates for identifier references in interpolation ({{ }}),\nproperty bindings ([prop]), event bindings ((event)), two-way bindings\n([(ngModel)]), structural directives (*ngIf, *ngFor), Angular 17+\ncontrol flow (@if, @for, @switch), and pipes (| pipeName). Bridge\ntemplate-referenced identifiers to component class members to prevent\nfalse unused-class-member reports.\n\nCloses #73",
          "timestamp": "2026-04-07T17:41:41+02:00",
          "tree_id": "3a5ff13c1694ec313e245cab2577e9da1504bb9b",
          "url": "https://github.com/fallow-rs/fallow/commit/4d530b570a3be4f496d4f98fde3af8cf87631a58"
        },
        "date": 1775576780676,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41593,
            "range": "± 1083",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1700420,
            "range": "± 25451",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3062768,
            "range": "± 41631",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16705917,
            "range": "± 589441",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107780,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1977,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206569,
            "range": "± 3075",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 920702,
            "range": "± 11406",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1724970,
            "range": "± 31937",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 526804,
            "range": "± 9898",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4352918,
            "range": "± 46150",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2564965,
            "range": "± 12660",
            "unit": "ns/iter"
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
        "date": 1775583308303,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 33871,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1713728,
            "range": "± 110855",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3119876,
            "range": "± 35079",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16244038,
            "range": "± 76955",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 100078,
            "range": "± 538",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1999,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 179005,
            "range": "± 4333",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 791356,
            "range": "± 23591",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1654068,
            "range": "± 45547",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 513718,
            "range": "± 9434",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3678755,
            "range": "± 44055",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2149463,
            "range": "± 34253",
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
          "id": "b16139982a6b342e09f7a6cad7710da59fb54798",
          "message": "chore: release v2.19.0",
          "timestamp": "2026-04-07T19:52:22+02:00",
          "tree_id": "7e71084079a9bf4c00c4ec7dab9e716ff608aa1d",
          "url": "https://github.com/fallow-rs/fallow/commit/b16139982a6b342e09f7a6cad7710da59fb54798"
        },
        "date": 1775584590650,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34929,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1460444,
            "range": "± 139379",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2473294,
            "range": "± 20529",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 11907586,
            "range": "± 223765",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 93980,
            "range": "± 3187",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2773,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 161915,
            "range": "± 1533",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 734897,
            "range": "± 6952",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1536466,
            "range": "± 32259",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 464496,
            "range": "± 18147",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3494198,
            "range": "± 37106",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2032589,
            "range": "± 7167",
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
          "id": "f192c52ab78007cf0a06cb9a90e80816caeee040",
          "message": "refactor: split large modules into focused submodules\n\nSplit graph/build.rs narrowing helpers into graph/narrowing.rs and\nanalyze/predicates.rs into predicates/{file,import,lifecycle}.rs for\nbetter cohesion. Zero API changes, all call sites unchanged.",
          "timestamp": "2026-04-07T19:54:23+02:00",
          "tree_id": "2e801a594aea5b7b4f298680d8cea6a3acc07a94",
          "url": "https://github.com/fallow-rs/fallow/commit/f192c52ab78007cf0a06cb9a90e80816caeee040"
        },
        "date": 1775584880155,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34079,
            "range": "± 1258",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1716251,
            "range": "± 30842",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3120595,
            "range": "± 68031",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16318138,
            "range": "± 395821",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 102023,
            "range": "± 1003",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2019,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 180230,
            "range": "± 8933",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 795627,
            "range": "± 6490",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1648517,
            "range": "± 26099",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 510985,
            "range": "± 34631",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3689029,
            "range": "± 99805",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2155559,
            "range": "± 5134",
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
          "id": "6f461b6f1968810f71cec0f17b70c32674d9d1f5",
          "message": "fix: skip duplicate-export for value/type declaration merging\n\nTypeScript allows a const and a type to share the same name via\ndeclaration merging. This is idiomatic with Zod (`export const Status =\nz.enum([...]); export type Status = z.infer<typeof Status>`), Prisma\ngenerated types, and class+interface patterns. These were falsely\nflagged as duplicate exports because the detection only compared names\nwithout considering is_type_only.\n\nNow tracks whether each export is type-only and skips groups where\nexports span both value and type namespaces, unless either namespace\nalone has cross-file duplicates.\n\nCloses #81",
          "timestamp": "2026-04-07T21:23:45+02:00",
          "tree_id": "c86bfbf3f3c176a32af7ddf46df428a6cd278ec0",
          "url": "https://github.com/fallow-rs/fallow/commit/6f461b6f1968810f71cec0f17b70c32674d9d1f5"
        },
        "date": 1775590082040,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40624,
            "range": "± 3395",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1667644,
            "range": "± 15447",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3031864,
            "range": "± 28005",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16062452,
            "range": "± 274653",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 102907,
            "range": "± 1645",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2020,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205322,
            "range": "± 1840",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 914508,
            "range": "± 14805",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1717886,
            "range": "± 17926",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 519327,
            "range": "± 20899",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4219248,
            "range": "± 25381",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2523407,
            "range": "± 3325",
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
          "id": "518aea81f2bd3dbc6c1c983a7e8e7c05f9db7c0f",
          "message": "chore: release v2.19.1",
          "timestamp": "2026-04-07T21:26:54+02:00",
          "tree_id": "5c4b1769d0b51c144905f106e474f11fbd741c7f",
          "url": "https://github.com/fallow-rs/fallow/commit/518aea81f2bd3dbc6c1c983a7e8e7c05f9db7c0f"
        },
        "date": 1775590333231,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34638,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1486913,
            "range": "± 16673",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2488617,
            "range": "± 20844",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 11714934,
            "range": "± 41670",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 98347,
            "range": "± 4339",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2773,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 161647,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 733278,
            "range": "± 4238",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1553572,
            "range": "± 25196",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 465710,
            "range": "± 7331",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3478577,
            "range": "± 20251",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2045733,
            "range": "± 8864",
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
          "id": "8004a7f34830d528770197a77f9ca4d5d10ec79c",
          "message": "test: improve coverage for plugins, specifier resolution, results, and duplicate detection\n\nAdd 105 tests across 7 files targeting the largest coverage gaps:\nplugins (tailwind, playwright, semantic_release, tsdown), resolve\nspecifier classification, results sort/serialization, and clone\ndetection edge cases. Overall coverage 90.2% to 90.6%.",
          "timestamp": "2026-04-07T21:49:48+02:00",
          "tree_id": "d44939c849f3687cfcdc87b10b6d9d32909283c0",
          "url": "https://github.com/fallow-rs/fallow/commit/8004a7f34830d528770197a77f9ca4d5d10ec79c"
        },
        "date": 1775591722936,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40491,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1661202,
            "range": "± 38066",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3016813,
            "range": "± 19473",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15481183,
            "range": "± 88993",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 101851,
            "range": "± 1589",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1982,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204631,
            "range": "± 1903",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 914313,
            "range": "± 13040",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1720394,
            "range": "± 24517",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 518983,
            "range": "± 4415",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4220445,
            "range": "± 41142",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2514226,
            "range": "± 13835",
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
          "id": "e51d40440c4cc37febfd2be9c730f5b9a00484ac",
          "message": "test: improve coverage for svelte, shared templates, config format, gatsby, and churn\n\nAdd 153 tests across 5 files: svelte template parsing (42), shared\ntemplate utilities (64), config format detection (4), gatsby plugin\n(12), and git churn analysis (31). Overall coverage 90.6% to 90.9%.",
          "timestamp": "2026-04-07T22:57:08+02:00",
          "tree_id": "903669856c8e0d9d3141f4c5a8a9a92cb9f8a999",
          "url": "https://github.com/fallow-rs/fallow/commit/e51d40440c4cc37febfd2be9c730f5b9a00484ac"
        },
        "date": 1775595675885,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35171,
            "range": "± 1143",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1484333,
            "range": "± 20930",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2512499,
            "range": "± 25272",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 12448338,
            "range": "± 190183",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104882,
            "range": "± 4329",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2873,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 164147,
            "range": "± 3741",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 736671,
            "range": "± 10907",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1560490,
            "range": "± 29329",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 460226,
            "range": "± 11669",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3512418,
            "range": "± 45327",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2030658,
            "range": "± 46333",
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
          "id": "e1fed16c3ae8e3de70fd2bfcd922b8a81f1c60c2",
          "message": "chore: apply rustfmt to test files from coverage session",
          "timestamp": "2026-04-08T00:06:06+02:00",
          "tree_id": "ea28275757ea247e3224d1c86604347d0716bc0a",
          "url": "https://github.com/fallow-rs/fallow/commit/e1fed16c3ae8e3de70fd2bfcd922b8a81f1c60c2"
        },
        "date": 1775599812929,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41611,
            "range": "± 2252",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1680715,
            "range": "± 38383",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3039106,
            "range": "± 31543",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15723652,
            "range": "± 317481",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 100454,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1991,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205139,
            "range": "± 4254",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 913331,
            "range": "± 85798",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1705453,
            "range": "± 43855",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 526949,
            "range": "± 16911",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4222755,
            "range": "± 48666",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2571399,
            "range": "± 39527",
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
          "id": "621225af0cf364089b9b1684068b9ec7a4c5f794",
          "message": "chore: release v2.19.2",
          "timestamp": "2026-04-08T00:08:56+02:00",
          "tree_id": "0b517965cd9c591cea4a3b699f166993359167f3",
          "url": "https://github.com/fallow-rs/fallow/commit/621225af0cf364089b9b1684068b9ec7a4c5f794"
        },
        "date": 1775600114522,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40566,
            "range": "± 2133",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1668943,
            "range": "± 31913",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3017590,
            "range": "± 27338",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15453583,
            "range": "± 257736",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105965,
            "range": "± 1423",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1983,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205793,
            "range": "± 4315",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 911962,
            "range": "± 134504",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1703630,
            "range": "± 19326",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 521317,
            "range": "± 16146",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4209817,
            "range": "± 61172",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2531869,
            "range": "± 9301",
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
          "id": "59cf13a3fb42a09d19145257a898c9c4a77d5a41",
          "message": "fix: skip create_resolver tests under Miri (statx unsupported)\n\nTests directly calling specifier::create_resolver() trigger oxc_resolver\nwhich uses the statx syscall via rustix. Miri doesn't support statx\nunder isolation. Added #[cfg_attr(miri, ignore)] to 5 tests.",
          "timestamp": "2026-04-08T08:34:51+02:00",
          "tree_id": "4ab6a9daf9a39db01d9de97156a1be8ab8592b01",
          "url": "https://github.com/fallow-rs/fallow/commit/59cf13a3fb42a09d19145257a898c9c4a77d5a41"
        },
        "date": 1775630329335,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 33717,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1721562,
            "range": "± 45402",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3134398,
            "range": "± 22502",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16218830,
            "range": "± 64920",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105184,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2070,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 179004,
            "range": "± 2403",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 788750,
            "range": "± 4552",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1649979,
            "range": "± 27781",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 511482,
            "range": "± 9803",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3642678,
            "range": "± 34612",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2155351,
            "range": "± 7407",
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
          "id": "bd459982c085b657be302888ba986b9abfe87f82",
          "message": "fix: match ignorePatterns against relative paths during file discovery\n\nGlob patterns in ignorePatterns (e.g. \"src/api/generated/**\") were matched\nagainst absolute walker paths, so only patterns with **/ prefix worked.\nStrip project root before matching, consistent with production_excludes.\n\nCloses #83",
          "timestamp": "2026-04-08T10:07:23+02:00",
          "tree_id": "00601be2891f0eb3bf70206a82e206dd580e4144",
          "url": "https://github.com/fallow-rs/fallow/commit/bd459982c085b657be302888ba986b9abfe87f82"
        },
        "date": 1775635908425,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 42072,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1694516,
            "range": "± 37216",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3058186,
            "range": "± 50137",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15712276,
            "range": "± 275433",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107044,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1995,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205319,
            "range": "± 2747",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 913397,
            "range": "± 9824",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1722750,
            "range": "± 24125",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 524264,
            "range": "± 27057",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4259130,
            "range": "± 43368",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2529374,
            "range": "± 8565",
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
          "id": "f7955c8067782e012efc811550f2a90faa15a897",
          "message": "chore: release v2.19.3",
          "timestamp": "2026-04-08T10:12:24+02:00",
          "tree_id": "cd5e8df572dc4a1229c03ff1e81f5e3360ebfa3a",
          "url": "https://github.com/fallow-rs/fallow/commit/f7955c8067782e012efc811550f2a90faa15a897"
        },
        "date": 1775636191962,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41248,
            "range": "± 2206",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1678665,
            "range": "± 36900",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3048090,
            "range": "± 40701",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15523310,
            "range": "± 104875",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103842,
            "range": "± 518",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2030,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 202706,
            "range": "± 7915",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908965,
            "range": "± 35122",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1709594,
            "range": "± 17403",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 518614,
            "range": "± 10963",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4216009,
            "range": "± 29744",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2519233,
            "range": "± 13175",
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
          "id": "36b0664949574c5474abc466075412ee3f344153",
          "message": "chore: release v2.20.0",
          "timestamp": "2026-04-08T11:09:12+02:00",
          "tree_id": "2450f9aba8357e8febc2ad47b395afa58270d904",
          "url": "https://github.com/fallow-rs/fallow/commit/36b0664949574c5474abc466075412ee3f344153"
        },
        "date": 1775639601690,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 39952,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1648652,
            "range": "± 17257",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3012990,
            "range": "± 114758",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15614188,
            "range": "± 87298",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104419,
            "range": "± 670",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2018,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204346,
            "range": "± 1509",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 912852,
            "range": "± 7871",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1718516,
            "range": "± 18373",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 525798,
            "range": "± 17316",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4244083,
            "range": "± 31863",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2525626,
            "range": "± 9073",
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
          "id": "3a8fc3d4f64f84e0e36f64e8bf39b5f1512b4243",
          "message": "feat: Istanbul match-rate stats, snapshot coverage_model, CI warning, --coverage-root\n\n- Add istanbul_matched/istanbul_total to HealthSummary JSON (only when\n  coverage_model is istanbul). Human output shows match rate in footer.\n- Persist coverage_model in VitalSignsSnapshot (schema v3). Trend output\n  warns when comparing snapshots with different CRAP models.\n- CI auto-detection note: when CI=true and coverage was auto-detected,\n  emit \"note:\" on stderr suggesting explicit --coverage.\n- New --coverage-root flag to rebase Istanbul file paths for cross-\n  environment matching (CI runner paths vs local checkout).",
          "timestamp": "2026-04-08T12:00:55+02:00",
          "tree_id": "bbc1f72ddd6b4f5202ebbbe8e41b996946946e5a",
          "url": "https://github.com/fallow-rs/fallow/commit/3a8fc3d4f64f84e0e36f64e8bf39b5f1512b4243"
        },
        "date": 1775642698990,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41228,
            "range": "± 895",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1695983,
            "range": "± 30584",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3074273,
            "range": "± 32877",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15646066,
            "range": "± 265976",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111429,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2007,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204537,
            "range": "± 2224",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 915248,
            "range": "± 48861",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1716072,
            "range": "± 33721",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 514027,
            "range": "± 32751",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4255196,
            "range": "± 266768",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2528291,
            "range": "± 56167",
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
          "id": "b49a818eb3832f3ead6d1f3be8ccc0fe65433042",
          "message": "chore: release v2.21.0",
          "timestamp": "2026-04-08T12:02:49+02:00",
          "tree_id": "656a38347e069cac00a29db44c32889fc05bfd3b",
          "url": "https://github.com/fallow-rs/fallow/commit/b49a818eb3832f3ead6d1f3be8ccc0fe65433042"
        },
        "date": 1775642949774,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 36225,
            "range": "± 631",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1483562,
            "range": "± 33109",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2519005,
            "range": "± 21558",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 12171889,
            "range": "± 163396",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 95764,
            "range": "± 3716",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2844,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 161629,
            "range": "± 1990",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 733472,
            "range": "± 8843",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1532612,
            "range": "± 34652",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 464327,
            "range": "± 15577",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3460561,
            "range": "± 40909",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2015986,
            "range": "± 156351",
            "unit": "ns/iter"
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
          "id": "0932ae169e5d742f02b15a132739166eaa7c6211",
          "message": "feat: expand framework convention coverage across Astro, React Router, Remix, Gatsby, and VitePress (#84)\n\n* feat: expand Astro and Gatsby convention coverage\n\n* feat: cover React Router and Remix route contracts\n\n* feat: support VitePress docs scaffold conventions",
          "timestamp": "2026-04-08T13:00:53+02:00",
          "tree_id": "5f96cb8c151c87ec21a8357284cd87a74f5929b4",
          "url": "https://github.com/fallow-rs/fallow/commit/0932ae169e5d742f02b15a132739166eaa7c6211"
        },
        "date": 1775646294022,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41051,
            "range": "± 1105",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1636709,
            "range": "± 18406",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3003410,
            "range": "± 19342",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15429940,
            "range": "± 182313",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106122,
            "range": "± 1502",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1990,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206030,
            "range": "± 4832",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 911109,
            "range": "± 8211",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1712743,
            "range": "± 22649",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 517736,
            "range": "± 27349",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4208502,
            "range": "± 35381",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2522550,
            "range": "± 21438",
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
          "id": "6a048d82e55778e8061d02c8677030fc57021736",
          "message": "chore: release v2.22.0",
          "timestamp": "2026-04-08T13:06:01+02:00",
          "tree_id": "dcb4dcc239eaea6da3b090726617ffd532a44c39",
          "url": "https://github.com/fallow-rs/fallow/commit/6a048d82e55778e8061d02c8677030fc57021736"
        },
        "date": 1775646618048,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34016,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1714906,
            "range": "± 34073",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3137602,
            "range": "± 106973",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16612458,
            "range": "± 396071",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104724,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2248,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 180111,
            "range": "± 2017",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 795559,
            "range": "± 11196",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1656068,
            "range": "± 44414",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 514424,
            "range": "± 36335",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3716662,
            "range": "± 40142",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2148041,
            "range": "± 10723",
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
          "id": "1d41343f87cfa04ecfecc1e10dfce750e4ce7615",
          "message": "fix: Astro frontmatter CRLF handling and typos config for Istanbul abbreviation\n\nThe Astro frontmatter regex required LF after --- delimiters, failing\non Windows where git checks out CRLF. Add \\r? to handle both line\nendings. Also allow \"ist\" (Istanbul abbreviation) in typos config.",
          "timestamp": "2026-04-08T14:02:50+02:00",
          "tree_id": "cb75ae87c747ae988bed4a32d4ffa7ba705e1be7",
          "url": "https://github.com/fallow-rs/fallow/commit/1d41343f87cfa04ecfecc1e10dfce750e4ce7615"
        },
        "date": 1775650014104,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 33337,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1701636,
            "range": "± 17740",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3132809,
            "range": "± 83300",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16263088,
            "range": "± 100887",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106626,
            "range": "± 2981",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2063,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 180426,
            "range": "± 4743",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 793120,
            "range": "± 3085",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1654349,
            "range": "± 30497",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 512901,
            "range": "± 8645",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3696610,
            "range": "± 35745",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2151334,
            "range": "± 24422",
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
          "id": "2685ac54e2ea21fbf93a5ecad2184cec5a7b30d1",
          "message": "chore: release v2.22.1",
          "timestamp": "2026-04-08T14:10:03+02:00",
          "tree_id": "590c7804526d23d4fb400e4463a92b4471efd7aa",
          "url": "https://github.com/fallow-rs/fallow/commit/2685ac54e2ea21fbf93a5ecad2184cec5a7b30d1"
        },
        "date": 1775650451678,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 39811,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1690009,
            "range": "± 23647",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3068591,
            "range": "± 120884",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15594235,
            "range": "± 105562",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103422,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1990,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204496,
            "range": "± 3635",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 911353,
            "range": "± 11523",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1711579,
            "range": "± 23739",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 525126,
            "range": "± 33011",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4212736,
            "range": "± 40174",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2540708,
            "range": "± 7591",
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
          "id": "c4af48aa7e21c218f70013786ae94f8a8a2677b4",
          "message": "fix: discover sub-packages from package.json exports map\n\nProjects like preact define sub-packages (compat/, hooks/, debug/) as\ndirectories with their own package.json, referenced via the root exports\nmap (e.g., \"./compat\": {...}). These were not discovered as entry points\nbecause they don't live in the hardcoded monorepo dirs (packages/, apps/).\n\nExtract directory prefixes from exports map keys and scan those for\npackage.json files with source/main/module fields. Reduces false\npositives on preact by 13 files and 19 exports (259 -> 227 issues).",
          "timestamp": "2026-04-08T14:25:10+02:00",
          "tree_id": "7903eea0e7a8d4202ab3bd244e16918bc34eef48",
          "url": "https://github.com/fallow-rs/fallow/commit/c4af48aa7e21c218f70013786ae94f8a8a2677b4"
        },
        "date": 1775651378962,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40134,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1675756,
            "range": "± 19794",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3076003,
            "range": "± 94429",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17331888,
            "range": "± 200179",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106876,
            "range": "± 1190",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2036,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206687,
            "range": "± 9001",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 920084,
            "range": "± 14025",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1735206,
            "range": "± 45328",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537044,
            "range": "± 17214",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4327033,
            "range": "± 46185",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2551560,
            "range": "± 13917",
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
          "id": "eb64ba27383c5af19232ce2f253e81fca8acc6e8",
          "message": "chore: reduce binary size by 16.6% (-1.38MB)\n\n- Switch ureq from rustls to native-tls (uses OS TLS stack)\n- Disable regex unicode features (keep only unicode-perl)\n- Remove ureq gzip feature (unused for remote config fetch)\n- Per-crate opt-level \"z\" for 10 non-hot-path dependencies",
          "timestamp": "2026-04-08T15:12:11+02:00",
          "tree_id": "148a9ae34619f6642b4a3ece9225ed3fbd9938e1",
          "url": "https://github.com/fallow-rs/fallow/commit/eb64ba27383c5af19232ce2f253e81fca8acc6e8"
        },
        "date": 1775654204070,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40055,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1761307,
            "range": "± 40827",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3124675,
            "range": "± 88130",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16343305,
            "range": "± 423001",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105470,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1992,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 207524,
            "range": "± 8205",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 924896,
            "range": "± 11989",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1716938,
            "range": "± 22884",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 527848,
            "range": "± 29368",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4277346,
            "range": "± 34813",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2588335,
            "range": "± 28730",
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
          "id": "0c84df62b979f7708151a1d69e4ff1e37d911831",
          "message": "fix: add vendored OpenSSL for Linux musl and cross-compilation targets\n\nThe native-tls switch requires OpenSSL on Linux. The vendored feature\ncompiles OpenSSL from source, ensuring musl and aarch64 cross-builds\nwork without system libssl-dev headers.",
          "timestamp": "2026-04-08T15:16:44+02:00",
          "tree_id": "3950dd0565e4a463826026d6955116fa6d02b941",
          "url": "https://github.com/fallow-rs/fallow/commit/0c84df62b979f7708151a1d69e4ff1e37d911831"
        },
        "date": 1775654522937,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40929,
            "range": "± 752",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1790588,
            "range": "± 23597",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3153251,
            "range": "± 28841",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15592731,
            "range": "± 323384",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104579,
            "range": "± 1461",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2047,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204891,
            "range": "± 4059",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 912611,
            "range": "± 48909",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1712789,
            "range": "± 25867",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 516840,
            "range": "± 28251",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4229500,
            "range": "± 37909",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2520286,
            "range": "± 18247",
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
          "id": "76414e27990bfcd35dbfa0e7e452776fb9c99a66",
          "message": "chore: upgrade oxc deps from 0.123 to 0.124\n\nAligns with oxc_coverage_instrument's transitive deps, eliminating\nduplicate compilation of the entire oxc stack (parser, AST, semantic,\nvisitor, etc.) in both 0.123 and 0.124 versions.",
          "timestamp": "2026-04-08T15:29:34+02:00",
          "tree_id": "102bd4fbac25caf2c4c924f3817642f647552f75",
          "url": "https://github.com/fallow-rs/fallow/commit/76414e27990bfcd35dbfa0e7e452776fb9c99a66"
        },
        "date": 1775655229756,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 39515,
            "range": "± 713",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1772243,
            "range": "± 107161",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3141488,
            "range": "± 33604",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15602185,
            "range": "± 237530",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106357,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2030,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206191,
            "range": "± 2619",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 913973,
            "range": "± 15783",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1720011,
            "range": "± 29094",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 516338,
            "range": "± 31770",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4227625,
            "range": "± 32047",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2529310,
            "range": "± 36952",
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
          "id": "31e41fe5f963d8fa942d0254fa9f0e04e67e7206",
          "message": "fix: configure ureq to use native-tls provider explicitly\n\nureq 3.x defaults to Rustls even when the native-tls feature is enabled.\nThe provider must be set explicitly via TlsConfig::builder().provider().\nWithout this, HTTPS requests panic at runtime.",
          "timestamp": "2026-04-08T15:40:04+02:00",
          "tree_id": "8c2f283f733d5ecfa0baf80a57fa7c0b7d99586d",
          "url": "https://github.com/fallow-rs/fallow/commit/31e41fe5f963d8fa942d0254fa9f0e04e67e7206"
        },
        "date": 1775655863237,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 33466,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1818971,
            "range": "± 26543",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3231778,
            "range": "± 102400",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16518961,
            "range": "± 89980",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103954,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2019,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 180161,
            "range": "± 2026",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 793907,
            "range": "± 96551",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1648130,
            "range": "± 24471",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 520582,
            "range": "± 38962",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3713505,
            "range": "± 29235",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2162923,
            "range": "± 15213",
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
          "id": "f9028d8338e03253c682f0e79e7f5aaa5075c6d1",
          "message": "fix: add unicode-case feature to regex for case-insensitive HTML/SFC matching\n\nThe (?i) flag in HTML and SFC regex patterns requires the unicode-case\nfeature. Without it, patterns like (?si)<script\\b... panic at runtime\nwhen parsing HTML files.",
          "timestamp": "2026-04-08T15:45:33+02:00",
          "tree_id": "36a62acd7a25229fc766d4547e22f3bd48384a9b",
          "url": "https://github.com/fallow-rs/fallow/commit/f9028d8338e03253c682f0e79e7f5aaa5075c6d1"
        },
        "date": 1775656181156,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 33806,
            "range": "± 1416",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1794288,
            "range": "± 63541",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3248980,
            "range": "± 20352",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16463158,
            "range": "± 232834",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 101386,
            "range": "± 1944",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2106,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 179778,
            "range": "± 2336",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 793486,
            "range": "± 3159",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1657506,
            "range": "± 293858",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 512287,
            "range": "± 10642",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3689308,
            "range": "± 28329",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2154430,
            "range": "± 8487",
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
          "id": "5aaafac267fe705b4d163bedfb32745d4992d3be",
          "message": "test: add regex compilation smoke tests for all file type parsers\n\nAll LazyLock<Regex> statics are lazily compiled on first use. If a regex\nfeature is missing, it panics at runtime only when that file type is\nactually parsed. This adds tests that parse a minimal file of each type\n(HTML, CSS, SCSS, Vue, Svelte, Astro, Angular) to force every regex to\ncompile, catching feature mismatches at test time instead of in production.",
          "timestamp": "2026-04-08T15:49:10+02:00",
          "tree_id": "c9d8b71d64b4be6f14fd9f118e7b0772e3a3082e",
          "url": "https://github.com/fallow-rs/fallow/commit/5aaafac267fe705b4d163bedfb32745d4992d3be"
        },
        "date": 1775656426416,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41163,
            "range": "± 1089",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1780180,
            "range": "± 26392",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3140000,
            "range": "± 31546",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15585379,
            "range": "± 77252",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 102802,
            "range": "± 1445",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2185,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203200,
            "range": "± 2542",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908921,
            "range": "± 13586",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1700854,
            "range": "± 17227",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 514312,
            "range": "± 36305",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4182710,
            "range": "± 39089",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2527633,
            "range": "± 5088",
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
          "id": "ab9d4b2c2e083be3c82e91476e6af6a71cee5e09",
          "message": "test: add CLI flag collision detection and dead_code_ratio type exclusion tests\n\n- CLI debug_assert test catches flag name collisions across subcommands\n  (prevents repeat of --base alias collision incident)\n- 3 new dead_code_ratio tests verify type-only exports are excluded from\n  both numerator and denominator (prevents ratio inflation incident)",
          "timestamp": "2026-04-08T16:06:11+02:00",
          "tree_id": "4306d53555b2da901c84978f127af29abe0bdb6e",
          "url": "https://github.com/fallow-rs/fallow/commit/ab9d4b2c2e083be3c82e91476e6af6a71cee5e09"
        },
        "date": 1775657431749,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40659,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1778733,
            "range": "± 30803",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3179682,
            "range": "± 29178",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17232292,
            "range": "± 190475",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104259,
            "range": "± 1099",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1983,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204965,
            "range": "± 7417",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 910538,
            "range": "± 11365",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1716099,
            "range": "± 21342",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 541055,
            "range": "± 17399",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4278468,
            "range": "± 48720",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2531377,
            "range": "± 80346",
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
          "id": "03c1a5982d039dade6572b8a47967f240a422737",
          "message": "test: add scoring tests for Istanbul lookup, CRAP formulas, and test refs\n\nAdd tests for IstanbulFileCoverage::lookup (exact, fuzzy, boundary),\ncompute_crap_scores_istanbul (empty, statistics), compute_crap_scores_binary\n(all branches), compute_crap_scores_estimated (mixed), and\nbuild_test_referenced_exports.",
          "timestamp": "2026-04-08T17:15:20+02:00",
          "tree_id": "faba04ace72d2e2fdf02fc3488fd203057b0a86e",
          "url": "https://github.com/fallow-rs/fallow/commit/03c1a5982d039dade6572b8a47967f240a422737"
        },
        "date": 1775663027990,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35133,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1559701,
            "range": "± 18633",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2601438,
            "range": "± 80593",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 12301479,
            "range": "± 322731",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106387,
            "range": "± 4739",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2812,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 161675,
            "range": "± 13105",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 739356,
            "range": "± 8412",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1539684,
            "range": "± 27179",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 465973,
            "range": "± 21824",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3469231,
            "range": "± 49462",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2037009,
            "range": "± 11778",
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
          "id": "f81d31f7ff65399417710e14edf5e6d02977db19",
          "message": "fix: propagate star re-exports through entry point chains\n\nStar re-export propagation was demand-driven: only names explicitly\nimported by name from a barrel got reference credit. Types that were\nre-exported via `export *` from a barrel that was itself star-re-exported\nfrom an entry point got zero references and were falsely reported unused.\n\nExample: entry.ts -> export * from './types' -> types/index.ts ->\nexport * from '../components/AuthForm.vue'. AuthFormField was reported\nas an unused type even though it's part of the public API surface.\n\nNow, barrels that are star-re-exported directly from an entry point\nare treated the same as entry points for propagation purposes: all\nsource exports get reference credit.\n\nFixes 271 false positive unused types on Nuxt UI (376 -> 105).\nNo regressions on zod, preact, vue-core.",
          "timestamp": "2026-04-08T17:39:05+02:00",
          "tree_id": "3aae6ce3f9ae75dce5d64f69d2f3157e4e8133a2",
          "url": "https://github.com/fallow-rs/fallow/commit/f81d31f7ff65399417710e14edf5e6d02977db19"
        },
        "date": 1775663281202,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40366,
            "range": "± 693",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1784656,
            "range": "± 20254",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3171013,
            "range": "± 96027",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15955254,
            "range": "± 281455",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106918,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2008,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206570,
            "range": "± 1759",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 923205,
            "range": "± 19410",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1720565,
            "range": "± 21254",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 527867,
            "range": "± 11777",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4293611,
            "range": "± 115076",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2571226,
            "range": "± 7658",
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
          "id": "791d14e58fb3605ff37a7e091da66a05e3d640aa",
          "message": "chore: rustfmt formatting adjustments",
          "timestamp": "2026-04-08T17:59:11+02:00",
          "tree_id": "9e9a103ccd6420a50f7c1f85f81115afb4989b7f",
          "url": "https://github.com/fallow-rs/fallow/commit/791d14e58fb3605ff37a7e091da66a05e3d640aa"
        },
        "date": 1775664392208,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40636,
            "range": "± 1696",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1767050,
            "range": "± 21097",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3135650,
            "range": "± 32744",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15576382,
            "range": "± 127103",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107003,
            "range": "± 1739",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2024,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206604,
            "range": "± 3868",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 921740,
            "range": "± 28619",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1713495,
            "range": "± 22946",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 520120,
            "range": "± 15778",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4234227,
            "range": "± 34319",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2537818,
            "range": "± 4193",
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
          "id": "27a6b7e2e35ba621b2a6645ec913f7abb53b1883",
          "message": "chore: release v2.22.2",
          "timestamp": "2026-04-08T18:05:57+02:00",
          "tree_id": "bd9e1f90bb411020f5cf4a3593b4b1f97c52e9e8",
          "url": "https://github.com/fallow-rs/fallow/commit/27a6b7e2e35ba621b2a6645ec913f7abb53b1883"
        },
        "date": 1775664652320,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35163,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1568597,
            "range": "± 20741",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2775168,
            "range": "± 50185",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 13206067,
            "range": "± 755540",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 101400,
            "range": "± 4964",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2800,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 163617,
            "range": "± 4984",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 732011,
            "range": "± 8571",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1544022,
            "range": "± 28086",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 473938,
            "range": "± 26383",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3502502,
            "range": "± 36288",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2030230,
            "range": "± 8573",
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
          "id": "d2ece8fb3e19e60236d5583439965d44c10d31aa",
          "message": "perf: precompute entry star re-export targets for O(1) lookup\n\nThe is_star_re_exported_from_entry_or_public check iterated over all\nmodules on every call inside the re-export propagation hot loop. For\nmonorepos with many modules this caused O(n * m * iterations) work.\n\nPrecompute the set of FileIds that are star-re-exported from entry\npoints once before the loop starts, then use O(1) HashSet lookup.\nAlso fix trailing whitespace from cargo fmt.",
          "timestamp": "2026-04-08T18:10:53+02:00",
          "tree_id": "cfbbb4529430c4b0f4f8b352db820c6ff1910490",
          "url": "https://github.com/fallow-rs/fallow/commit/d2ece8fb3e19e60236d5583439965d44c10d31aa"
        },
        "date": 1775664914832,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40057,
            "range": "± 1031",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1790826,
            "range": "± 55375",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3181296,
            "range": "± 28905",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16004559,
            "range": "± 365804",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106876,
            "range": "± 1357",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2003,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206352,
            "range": "± 30482",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 919543,
            "range": "± 17839",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1729565,
            "range": "± 26002",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 518709,
            "range": "± 23876",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4263949,
            "range": "± 80113",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2539084,
            "range": "± 8994",
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
          "id": "16f2401e423bd61ec1bc2ba5a456b0a3488df835",
          "message": "chore: release v2.22.3",
          "timestamp": "2026-04-08T18:55:00+02:00",
          "tree_id": "f87b1c6156ff8881e3ae0698c24e5ba7adf0eae8",
          "url": "https://github.com/fallow-rs/fallow/commit/16f2401e423bd61ec1bc2ba5a456b0a3488df835"
        },
        "date": 1775667561430,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34409,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1819803,
            "range": "± 21777",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3241374,
            "range": "± 25184",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16542919,
            "range": "± 165134",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 100434,
            "range": "± 2195",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2038,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 180530,
            "range": "± 3381",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 794259,
            "range": "± 3661",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1664885,
            "range": "± 25609",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 511856,
            "range": "± 20085",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3690311,
            "range": "± 47704",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2148816,
            "range": "± 3977",
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
          "id": "1ccf31f7d35cb8a6bbe17708b0edb029b84ac57e",
          "message": "fix: prune node_modules during workspace glob traversal\n\nThe glob crate's `**` expansion walks into node_modules before\nfiltering, which is catastrophic with pnpm's deep symlink trees\n(50,000+ entries for `packages/**/*` in starlight). This caused\nmonorepo analysis to hang indefinitely.\n\nReplace glob for patterns containing `**` with a manual recursive\nwalk that prunes node_modules and .git directories during traversal.\nNon-recursive patterns still use glob.\n\nStarlight monorepo: from infinite hang to 0.74s.",
          "timestamp": "2026-04-08T19:06:29+02:00",
          "tree_id": "0b8983bc94a3b04b483f595f893c0930460865ee",
          "url": "https://github.com/fallow-rs/fallow/commit/1ccf31f7d35cb8a6bbe17708b0edb029b84ac57e"
        },
        "date": 1775668255704,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41198,
            "range": "± 2172",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1809128,
            "range": "± 19570",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3257685,
            "range": "± 48565",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17735808,
            "range": "± 243157",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109657,
            "range": "± 1247",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1997,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205982,
            "range": "± 5625",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 920972,
            "range": "± 98877",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1750456,
            "range": "± 31146",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 541989,
            "range": "± 26949",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4204794,
            "range": "± 88825",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2539607,
            "range": "± 11012",
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
          "id": "241c0e4feb9d45dbf9fc16bfadca81c194400d69",
          "message": "fix: replace em dashes with colons in meta-framework warnings",
          "timestamp": "2026-04-08T19:25:22+02:00",
          "tree_id": "81db31e4099de755e65d1f5d08102098fb33fa16",
          "url": "https://github.com/fallow-rs/fallow/commit/241c0e4feb9d45dbf9fc16bfadca81c194400d69"
        },
        "date": 1775669362568,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40568,
            "range": "± 2094",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1774531,
            "range": "± 22098",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3165160,
            "range": "± 34024",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15834750,
            "range": "± 258696",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110186,
            "range": "± 1219",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2005,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205337,
            "range": "± 1782",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 910208,
            "range": "± 19382",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1734790,
            "range": "± 20332",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 522645,
            "range": "± 6813",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4237705,
            "range": "± 34797",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2514044,
            "range": "± 8976",
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
          "id": "483822c3a66df6337270ff7c18b22ffca618d518",
          "message": "test: add regression tests for extension priority, wildcard exports, and workspace glob\n\nThree conformance loop fixes shipped without dedicated tests. Add 8\nregression tests that fail without the fixes and pass with them:\n\n- .d.ts extension priority: 3 tests verifying .js resolves before\n  .d.ts when both exist, .ts before .d.ts, and fallback to .d.ts\n  when no runtime file exists\n\n- Wildcard subpath exports: 3 tests verifying expand_wildcard_entries\n  matches CSS files, handles empty dirs, and respects extensions\n\n- Workspace glob pruning: 2 tests verifying node_modules directories\n  (including deeply nested pnpm .pnpm/ trees) are pruned during\n  recursive workspace discovery",
          "timestamp": "2026-04-08T19:47:27+02:00",
          "tree_id": "6881d9431d68ad93adc2f3bcfcfcc975eee61940",
          "url": "https://github.com/fallow-rs/fallow/commit/483822c3a66df6337270ff7c18b22ffca618d518"
        },
        "date": 1775670692067,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 33779,
            "range": "± 1152",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1825603,
            "range": "± 29485",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3236208,
            "range": "± 23009",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16523344,
            "range": "± 128728",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 99683,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2157,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 181375,
            "range": "± 2592",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 792489,
            "range": "± 32948",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1655130,
            "range": "± 62015",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 514374,
            "range": "± 35887",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3680611,
            "range": "± 54696",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2163523,
            "range": "± 55043",
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
          "id": "eac05fa01ac34afcdd4880e49a8fc66d11528558",
          "message": "perf: optimize re-export chain resolution with O(1) duplicate detection\n\nReplace O(n) linear scan for duplicate reference detection in\npropagate_star_re_export with FxHashSet for O(1) lookups. Also\npre-build reverse edge index for O(incoming) instead of O(all_edges)\nper star re-export, and group references by name to reduce\nper-name export lookups.\n\nThe quadratic duplicate check was the dominant cost in barrel-heavy\nmonorepos: reference lists grow across iterations, making each check\nincreasingly expensive. The HashSet fix provides increasing savings\nin later iterations as reference lists grow.\n\nReal-world impact (vrs-portals, 1123 files, 259 re-exports):\n- re-export chain resolution: 38.7ms -> 21.2ms (-45%)\n- per-iteration cost reduction: iteration 2: 10.8ms -> 6.3ms (-42%)",
          "timestamp": "2026-04-08T21:50:17+02:00",
          "tree_id": "9940f255d5e949663ef9d4af6ddab37bb00dd4eb",
          "url": "https://github.com/fallow-rs/fallow/commit/eac05fa01ac34afcdd4880e49a8fc66d11528558"
        },
        "date": 1775678058336,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34087,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1812523,
            "range": "± 22795",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3201433,
            "range": "± 70338",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16146842,
            "range": "± 48594",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 102144,
            "range": "± 2062",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2048,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 174224,
            "range": "± 4393",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 762428,
            "range": "± 4466",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1619537,
            "range": "± 20904",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 502976,
            "range": "± 35129",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3554445,
            "range": "± 33367",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2082194,
            "range": "± 8253",
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
          "id": "dcf68d2c48f5a8540aec8a95cd6c503d70b12111",
          "message": "chore: release v2.22.4",
          "timestamp": "2026-04-08T21:52:53+02:00",
          "tree_id": "a10b190ef4557081de2ff2e27822625cf9f74c1f",
          "url": "https://github.com/fallow-rs/fallow/commit/dcf68d2c48f5a8540aec8a95cd6c503d70b12111"
        },
        "date": 1775678323442,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34397,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1806670,
            "range": "± 92255",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3213651,
            "range": "± 19337",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16139186,
            "range": "± 45346",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113090,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2092,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 174485,
            "range": "± 3802",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 769255,
            "range": "± 6561",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1635428,
            "range": "± 16757",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 502102,
            "range": "± 34165",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3552241,
            "range": "± 35759",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2080575,
            "range": "± 5323",
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
          "id": "da66e0cb96cc43c776b3f5c481238554cfb9eeb9",
          "message": "fix: strip type annotations in collect_pattern_usage to prevent infinite recursion\n\nSame bug as the Svelte snippet fix (f3018a69) but in the sibling\nfunction `collect_pattern_usage`. Typed destructuring patterns like\n`{ id, name }: Item` in Vue v-for/v-slot directives would also\ninfinite-recurse because `strip_wrapping` fails on the trailing type\nannotation, falling through to a comma-split that returns the whole\nstring unchanged.",
          "timestamp": "2026-04-09T07:22:29+02:00",
          "tree_id": "a42fea46b3a187937aa6de6c302a5dab232422ef",
          "url": "https://github.com/fallow-rs/fallow/commit/da66e0cb96cc43c776b3f5c481238554cfb9eeb9"
        },
        "date": 1775712386811,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40331,
            "range": "± 1313",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1774515,
            "range": "± 121908",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3098745,
            "range": "± 35331",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15318851,
            "range": "± 140582",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111052,
            "range": "± 1164",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2018,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211879,
            "range": "± 4218",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 946218,
            "range": "± 12270",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1720425,
            "range": "± 15678",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 542445,
            "range": "± 14424",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4350262,
            "range": "± 44623",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2608790,
            "range": "± 6565",
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
          "id": "325a49dd3f4ec1769f33b4f0ba255f44a750a797",
          "message": "test: add regression test for star re-export many-consumers scenario\n\nCovers the pattern that was quadratic before the O(1) duplicate\ndetection fix: 20 consumers importing the same named export through\na star-re-exporting barrel. Verifies all references propagate without\nduplicates and that unused exports remain unreferenced.\n\nAlso fixes rustfmt formatting in plugin registry.",
          "timestamp": "2026-04-09T07:23:06+02:00",
          "tree_id": "d5700ed2663843b9af701f00e793277281b7253a",
          "url": "https://github.com/fallow-rs/fallow/commit/325a49dd3f4ec1769f33b4f0ba255f44a750a797"
        },
        "date": 1775712633814,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41297,
            "range": "± 604",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1775612,
            "range": "± 25259",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3117152,
            "range": "± 121161",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15234740,
            "range": "± 59002",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111065,
            "range": "± 1602",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1989,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211989,
            "range": "± 4005",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 949015,
            "range": "± 10716",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1721852,
            "range": "± 41149",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 528190,
            "range": "± 28870",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4328457,
            "range": "± 29468",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2612331,
            "range": "± 6714",
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
          "id": "8d64ddac69b197eb2ecd6de8b9ebd67b072b5bc6",
          "message": "test: add regression tests for typed template bindings in Vue and Svelte\n\nAdd unit tests (Vue v-for, v-slot, Svelte snippet) and full-pipeline\nintegration tests verifying that TypeScript type annotations on\ndestructuring patterns do not cause infinite recursion.\n\nAlso fix stale rustfmt drift in registry/mod.rs.",
          "timestamp": "2026-04-09T07:26:59+02:00",
          "tree_id": "4caf0f2e3e5da24df0421eed82bcf762f6e1aff0",
          "url": "https://github.com/fallow-rs/fallow/commit/8d64ddac69b197eb2ecd6de8b9ebd67b072b5bc6"
        },
        "date": 1775712881465,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41660,
            "range": "± 843",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1774014,
            "range": "± 30671",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3103547,
            "range": "± 31516",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15389106,
            "range": "± 122469",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108262,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2038,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212310,
            "range": "± 5275",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 949216,
            "range": "± 12156",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1723611,
            "range": "± 18603",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533288,
            "range": "± 14218",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4332671,
            "range": "± 28787",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2615314,
            "range": "± 8950",
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
          "id": "dd5fb860aade25c942ea090e6ac83ae08555d0dc",
          "message": "chore: release v2.23.0",
          "timestamp": "2026-04-09T07:35:15+02:00",
          "tree_id": "58aaf0684101f2d09c4cc39665a55799d8e08644",
          "url": "https://github.com/fallow-rs/fallow/commit/dd5fb860aade25c942ea090e6ac83ae08555d0dc"
        },
        "date": 1775713164199,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 33748,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1812201,
            "range": "± 25118",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3207312,
            "range": "± 80714",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16300693,
            "range": "± 232215",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108247,
            "range": "± 3149",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2013,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 175692,
            "range": "± 4558",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 772531,
            "range": "± 8348",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1624300,
            "range": "± 22939",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 509126,
            "range": "± 37001",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3568806,
            "range": "± 39905",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2097627,
            "range": "± 16741",
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
          "id": "9ad9a68f42741179007c3ab8ffa119322c47f6d1",
          "message": "chore: release v2.23.1",
          "timestamp": "2026-04-09T08:02:18+02:00",
          "tree_id": "7ac7ff32c7489c3f6ab786ecce6fc0ec611ca053",
          "url": "https://github.com/fallow-rs/fallow/commit/9ad9a68f42741179007c3ab8ffa119322c47f6d1"
        },
        "date": 1775714780945,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41488,
            "range": "± 677",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1777520,
            "range": "± 27578",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3112160,
            "range": "± 39631",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15486625,
            "range": "± 278666",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107149,
            "range": "± 880",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1998,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 214136,
            "range": "± 4766",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 960333,
            "range": "± 9580",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1745764,
            "range": "± 28416",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535570,
            "range": "± 30518",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4232947,
            "range": "± 27909",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2669033,
            "range": "± 24645",
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
          "id": "32750ac7d73d91ee04c5b13dd269b4f8867d60b7",
          "message": "fix: improve zero-match warning message and add to dupes/health baselines\n\n- Improve warning text: use accessible language, include the baseline\n  file path in the re-save hint\n- Add zero-match warning to dupes baseline loading (was check-only)\n- Add zero-match warning to health baseline loading (was check-only)",
          "timestamp": "2026-04-09T12:00:34+02:00",
          "tree_id": "a0f2c0cf31ad0424d0251ed55d30de1388efba4e",
          "url": "https://github.com/fallow-rs/fallow/commit/32750ac7d73d91ee04c5b13dd269b4f8867d60b7"
        },
        "date": 1775729078216,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 42114,
            "range": "± 983",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1774716,
            "range": "± 23633",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3087378,
            "range": "± 28161",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15426106,
            "range": "± 101564",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112346,
            "range": "± 1321",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2002,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213086,
            "range": "± 13143",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 961351,
            "range": "± 87097",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1735359,
            "range": "± 19897",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 553133,
            "range": "± 36961",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4405345,
            "range": "± 53652",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2666723,
            "range": "± 14806",
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
          "id": "cfec946206a390eb070a595974ebecbd1782f0a8",
          "message": "feat(health): add function size and parameter risk profiles to vital signs\n\nAdd quality metrics inspired by SIG's maintainability model to the\nexisting health command, integrated into the A-F grade system.\n\nNew extraction: param_count on FunctionComplexity (excludes TS `this`\nparameter, includes rest parameters). Cache version bumped 26->27.\n\nNew vital signs fields: unit_size_profile and unit_interfacing_profile\n(RiskProfile with low/medium/high/very_high risk bins), p95_fan_in,\nand coupling_high_pct. Snapshot schema bumped v3->v4 with backward\ncompat via serde defaults.\n\nNew health score penalties: unit_size (max 10 pts, activates when >5%\nof functions exceed 60 LOC) and coupling (max 5 pts, activates when\np95 fan-in exceeds 30). Conservatively calibrated: zero penalty on\nclean projects (zod, preact, vite all unaffected).\n\nHuman output: separate risk profile section between metrics and\nfindings. Trend output: schema version migration warning when\ncomparing against older snapshots. Deductions line includes new\npenalty categories.",
          "timestamp": "2026-04-09T12:31:14+02:00",
          "tree_id": "8cc2f522a56f1cd5732abceb03bd12000daa0f63",
          "url": "https://github.com/fallow-rs/fallow/commit/cfec946206a390eb070a595974ebecbd1782f0a8"
        },
        "date": 1775731005147,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40116,
            "range": "± 953",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1759712,
            "range": "± 23928",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3118867,
            "range": "± 28909",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15637146,
            "range": "± 337635",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109529,
            "range": "± 2227",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2004,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213385,
            "range": "± 2733",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 964901,
            "range": "± 6954",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1744049,
            "range": "± 25748",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530831,
            "range": "± 34521",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4241878,
            "range": "± 58667",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2661841,
            "range": "± 5793",
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
          "id": "0be2bee514517490f4f36207c8a2a0c26394a508",
          "message": "refactor: unify baseline key helpers and add baseline stats to combined JSON\n\n- Replace inline strip_prefix in clone_group_key, target_baseline_key,\n  and health_finding_key with the shared relative_path() helper\n- Add baseline match stats to combined-mode JSON output (was check-only)",
          "timestamp": "2026-04-09T12:34:21+02:00",
          "tree_id": "f8e8e24f80355ffb896cd94de98e0ca4bd9c38f4",
          "url": "https://github.com/fallow-rs/fallow/commit/0be2bee514517490f4f36207c8a2a0c26394a508"
        },
        "date": 1775731246864,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40741,
            "range": "± 1028",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1760577,
            "range": "± 30862",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3116223,
            "range": "± 32249",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15441200,
            "range": "± 262658",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109625,
            "range": "± 2063",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2035,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 214525,
            "range": "± 1862",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 960181,
            "range": "± 9096",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1748716,
            "range": "± 259755",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530082,
            "range": "± 20686",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4233221,
            "range": "± 38631",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2659418,
            "range": "± 19173",
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
          "id": "bf934af1aff4b3283cfc349b1febaa9edb89031e",
          "message": "refactor(health): conditional rendering for risk profiles\n\nShow function size profile only when very_high_risk >= 3% (approaching\nthe 5% penalty threshold). Show parameter profile only when high or\nvery_high bins carry signal. Suppress both on healthy projects to\nreduce noise.\n\nRemove early return that suppressed profiles when trend was active,\nso users can see absolute distributions alongside trend deltas.",
          "timestamp": "2026-04-09T12:51:27+02:00",
          "tree_id": "4153bfea25b9efae928b7baeb56485ad3e87a009",
          "url": "https://github.com/fallow-rs/fallow/commit/bf934af1aff4b3283cfc349b1febaa9edb89031e"
        },
        "date": 1775732128484,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40218,
            "range": "± 1392",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1785196,
            "range": "± 21716",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3165426,
            "range": "± 32674",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15767842,
            "range": "± 126247",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110486,
            "range": "± 1086",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2033,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213708,
            "range": "± 10012",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 959093,
            "range": "± 11871",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1740402,
            "range": "± 18731",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532353,
            "range": "± 21144",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4250136,
            "range": "± 88058",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2660577,
            "range": "± 7558",
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
          "id": "07cceb25b60c4159efa937970223121a99160b9d",
          "message": "chore: release v2.24.0",
          "timestamp": "2026-04-09T12:58:20+02:00",
          "tree_id": "f1d01dc3b83e57085f5907dd307ca9144447c68f",
          "url": "https://github.com/fallow-rs/fallow/commit/07cceb25b60c4159efa937970223121a99160b9d"
        },
        "date": 1775732555158,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41550,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1804501,
            "range": "± 34046",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3132393,
            "range": "± 35146",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15363570,
            "range": "± 290518",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110300,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2204,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212628,
            "range": "± 3216",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 951574,
            "range": "± 150657",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1743355,
            "range": "± 19213",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535181,
            "range": "± 19848",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4382123,
            "range": "± 28267",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2678811,
            "range": "± 30345",
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
          "id": "f4ead2ec300d57e2e9bd224384c9896f371600ab",
          "message": "chore: apply rustfmt to expect attributes",
          "timestamp": "2026-04-09T13:19:14+02:00",
          "tree_id": "425d6f52c45a0e0441fc0c0fb67a19e7d1700242",
          "url": "https://github.com/fallow-rs/fallow/commit/f4ead2ec300d57e2e9bd224384c9896f371600ab"
        },
        "date": 1775733824097,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 33905,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1822265,
            "range": "± 50376",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3228974,
            "range": "± 22197",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16441411,
            "range": "± 218865",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112060,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2159,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 175643,
            "range": "± 3145",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 775049,
            "range": "± 4928",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1625319,
            "range": "± 17879",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 509306,
            "range": "± 37894",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3570413,
            "range": "± 46134",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2081285,
            "range": "± 6709",
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
          "id": "0838d23ef6c3f18bbc8045620028575c58a91990",
          "message": "feat(health): add large function drill-down and duplication score penalty\n\nAdd two new health features:\n\n1. Large function drill-down: list functions exceeding 60 LOC in a new\n   \"Large functions\" section when the very-high-risk bin is >= 3%.\n   Includes file path, function name, line number, and LOC count.\n   Sorted by line count descending, truncated to 10 items.\n\n2. Duplication in health score: run duplication analysis when --score is\n   active and penalize when duplication exceeds 5%. Formula:\n   min(max(0, duplication_pct - 5) * 1.0, 10), max 10 points.\n   Updates deductions line, vital signs metrics, JSON output,\n   trend tracking, and snapshot persistence.\n\nBump SNAPSHOT_SCHEMA_VERSION to 5 for the formula change.",
          "timestamp": "2026-04-09T14:28:14+02:00",
          "tree_id": "20a55bea7e01cdd5cbdbed931a437208bc00cc4f",
          "url": "https://github.com/fallow-rs/fallow/commit/0838d23ef6c3f18bbc8045620028575c58a91990"
        },
        "date": 1775737943592,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34032,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1820972,
            "range": "± 66562",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3208427,
            "range": "± 60150",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16254258,
            "range": "± 54969",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111867,
            "range": "± 536",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2052,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 176993,
            "range": "± 2600",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 770081,
            "range": "± 18286",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1628547,
            "range": "± 21972",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 510087,
            "range": "± 8382",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3566536,
            "range": "± 27242",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2087347,
            "range": "± 6728",
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
          "id": "96e417f252eee3517b2abfd24edc53d23577ecb7",
          "message": "refactor(health): add progressive disclosure hints and duplication timing\n\n- Add \"use --top N to see all N\" hint when large functions or complexity\n  findings are truncated, closing the progressive disclosure gap\n- Emit duplication analysis timing to stderr when --score runs it\n- Show health.ignore tip when duplication penalty >= 5 points",
          "timestamp": "2026-04-09T14:47:02+02:00",
          "tree_id": "d628877df2bb89ee495ccfce5f92166c1e696443",
          "url": "https://github.com/fallow-rs/fallow/commit/96e417f252eee3517b2abfd24edc53d23577ecb7"
        },
        "date": 1775739067590,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41128,
            "range": "± 290",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1775145,
            "range": "± 51458",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3140638,
            "range": "± 23380",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15428894,
            "range": "± 68807",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111794,
            "range": "± 2753",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2017,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212543,
            "range": "± 3512",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 949912,
            "range": "± 8158",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1736206,
            "range": "± 19818",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534800,
            "range": "± 42390",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4374152,
            "range": "± 42224",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2630587,
            "range": "± 67757",
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
          "id": "12b9f61371290122751ba77e01b9032e3f0a217a",
          "message": "refactor(health): improve hint wording for duplication tip and --top\n\n- Add concrete examples to health.ignore tip (\"dist\", \"__generated__\")\n- Drop redundant second number from --top hint (\"use --top N to see all\")",
          "timestamp": "2026-04-09T14:54:33+02:00",
          "tree_id": "538c559ab87097a9fd78802228b7ead6ff4dcae4",
          "url": "https://github.com/fallow-rs/fallow/commit/12b9f61371290122751ba77e01b9032e3f0a217a"
        },
        "date": 1775739512688,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35875,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1545259,
            "range": "± 46996",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2561305,
            "range": "± 68065",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 11965356,
            "range": "± 134187",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106625,
            "range": "± 3491",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2801,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156785,
            "range": "± 2171",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 708350,
            "range": "± 10021",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1482536,
            "range": "± 20003",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 459398,
            "range": "± 18595",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3342665,
            "range": "± 42085",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1996519,
            "range": "± 10333",
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
          "id": "5317e5460319655ef298c93482b0929f1e26f94e",
          "message": "fix(lsp): disable ANSI escape codes in tracing output\n\nLSP server is always spawned as a subprocess by editors. VS Code's\nOutput panel does not render ANSI sequences, causing raw escape codes\nto appear in the output. Matches the pattern already used by the MCP\nserver.\n\nCloses #89",
          "timestamp": "2026-04-09T15:12:21+02:00",
          "tree_id": "c2db61098754cfbc0481b6fe7a2b87d6cd53eec2",
          "url": "https://github.com/fallow-rs/fallow/commit/5317e5460319655ef298c93482b0929f1e26f94e"
        },
        "date": 1775740602043,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40421,
            "range": "± 1351",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1757478,
            "range": "± 32419",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3089291,
            "range": "± 63137",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15275263,
            "range": "± 79517",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113191,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2005,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212445,
            "range": "± 3040",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 949985,
            "range": "± 7936",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1734219,
            "range": "± 16028",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538053,
            "range": "± 15574",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4377570,
            "range": "± 29512",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2644455,
            "range": "± 4251",
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
          "id": "f4ecafbb1d969c38205d1f80878937e7a4ae0d93",
          "message": "chore: release v2.25.0",
          "timestamp": "2026-04-09T15:14:56+02:00",
          "tree_id": "46e68d99822a32f1c8d6725517c1c7666eef7f1d",
          "url": "https://github.com/fallow-rs/fallow/commit/f4ecafbb1d969c38205d1f80878937e7a4ae0d93"
        },
        "date": 1775740919711,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40913,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1779596,
            "range": "± 32301",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3076928,
            "range": "± 26808",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15194354,
            "range": "± 90218",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107250,
            "range": "± 625",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2020,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213730,
            "range": "± 2137",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 960136,
            "range": "± 38662",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1742756,
            "range": "± 28450",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534163,
            "range": "± 5012",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4242260,
            "range": "± 92917",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2652098,
            "range": "± 6339",
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
          "id": "1d3561fdf9eb394147199f8c7a9ef153a9941a62",
          "message": "refactor: deduplicate test helpers and add Default derives for test structs\n\n- Extract strip_ansi/plain to shared pub(super) in report/human/mod.rs,\n  remove 5 duplicate copies across check, health, dupes, cross_ref, perf\n- Add Default derive to VitalSigns and VitalSignsCounts, simplify 13\n  test constructions in vital_signs.rs\n- Simplify FallowConfig test constructions across walk.rs, parsing.rs,\n  unused_exports.rs, boundary.rs, unused_deps_tests using ..Default::default()\n\nDuplication: 10.5% -> 9.9% (below 3-star SIG threshold of 10%)",
          "timestamp": "2026-04-09T15:24:32+02:00",
          "tree_id": "3b213e8b8e42b87e8d4da10f48ca0567368ac52d",
          "url": "https://github.com/fallow-rs/fallow/commit/1d3561fdf9eb394147199f8c7a9ef153a9941a62"
        },
        "date": 1775741325536,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 33459,
            "range": "± 2014",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1835645,
            "range": "± 17283",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3244992,
            "range": "± 22854",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16630868,
            "range": "± 181369",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110613,
            "range": "± 1664",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2031,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 173950,
            "range": "± 1775",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 768112,
            "range": "± 12464",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1626387,
            "range": "± 23538",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 503874,
            "range": "± 9032",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3558583,
            "range": "± 54439",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2077212,
            "range": "± 6778",
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
          "id": "7da37c2fb364cef02693babdfa6b1c71aa1e829d",
          "message": "fix(deps): update oxc_coverage_instrument to 0.2.11\n\nFixes parsing of coverage-final.json files containing null values or\nmissing fields in hit count maps and position objects, as produced by\nsome Istanbul-compatible coverage tools.",
          "timestamp": "2026-04-09T15:33:33+02:00",
          "tree_id": "91bae0515b03999959a05b8739d8d177ffa4e806",
          "url": "https://github.com/fallow-rs/fallow/commit/7da37c2fb364cef02693babdfa6b1c71aa1e829d"
        },
        "date": 1775741871372,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41292,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1775343,
            "range": "± 25180",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3122403,
            "range": "± 72453",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15527323,
            "range": "± 113747",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112784,
            "range": "± 2315",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2027,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213095,
            "range": "± 1570",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 962492,
            "range": "± 8482",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1753479,
            "range": "± 20379",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530769,
            "range": "± 3148",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4250256,
            "range": "± 49437",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2668788,
            "range": "± 25358",
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
          "id": "ba62bf4078fc41ca273ec67ff923b6bbac8d0bb2",
          "message": "fix(lsp): deduplicate diagnostics in multi-root workspaces\n\nbuild_diagnostics was called once per workspace root from the merged\nresults, producing N copies of every diagnostic. Call it once with the\nworkspace root instead, since each result item already carries its own\nfile path.\n\nCloses #90",
          "timestamp": "2026-04-09T15:39:21+02:00",
          "tree_id": "b7953944fefeac93c130c1e053708323819b4cf3",
          "url": "https://github.com/fallow-rs/fallow/commit/ba62bf4078fc41ca273ec67ff923b6bbac8d0bb2"
        },
        "date": 1775742338577,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41438,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1792784,
            "range": "± 37215",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3144477,
            "range": "± 23097",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16308687,
            "range": "± 285155",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107997,
            "range": "± 1935",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2005,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 214393,
            "range": "± 3273",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 963266,
            "range": "± 16345",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1761968,
            "range": "± 18126",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537885,
            "range": "± 30567",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4267713,
            "range": "± 45916",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2669382,
            "range": "± 16404",
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
          "id": "64d0f84d1ab4e73da2a4ec208b144886f7eb986f",
          "message": "chore: release v2.25.1",
          "timestamp": "2026-04-09T15:42:51+02:00",
          "tree_id": "5c89fc1d209ad45bed091d2b00d2ebebc06d58f2",
          "url": "https://github.com/fallow-rs/fallow/commit/64d0f84d1ab4e73da2a4ec208b144886f7eb986f"
        },
        "date": 1775742601127,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40384,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1767679,
            "range": "± 35092",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3121298,
            "range": "± 36715",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15381639,
            "range": "± 256932",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109472,
            "range": "± 794",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1988,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 215122,
            "range": "± 2719",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 961664,
            "range": "± 149437",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1751728,
            "range": "± 42629",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 529290,
            "range": "± 27497",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4261227,
            "range": "± 32840",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2679586,
            "range": "± 68019",
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
          "id": "263d76905e430c01585b4f6d567ba19623a1feb4",
          "message": "fix(lsp): merge test_only_dependencies, boundary_violations, and export_usages across workspace roots",
          "timestamp": "2026-04-09T15:54:42+02:00",
          "tree_id": "27b2d47ffb22527722341821c34dac867433776c",
          "url": "https://github.com/fallow-rs/fallow/commit/263d76905e430c01585b4f6d567ba19623a1feb4"
        },
        "date": 1775743125302,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 40107,
            "range": "± 803",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1790145,
            "range": "± 26735",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3107108,
            "range": "± 31440",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15409541,
            "range": "± 383034",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111060,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1996,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213548,
            "range": "± 1743",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 962483,
            "range": "± 25361",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1752976,
            "range": "± 202952",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531560,
            "range": "± 7329",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4254211,
            "range": "± 48014",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2673057,
            "range": "± 10756",
            "unit": "ns/iter"
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
        "date": 1775744981026,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41364,
            "range": "± 1849",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1781588,
            "range": "± 33356",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3105200,
            "range": "± 31718",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15295063,
            "range": "± 235470",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110883,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2122,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211342,
            "range": "± 7295",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 948962,
            "range": "± 9982",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1738097,
            "range": "± 11536",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 525976,
            "range": "± 14162",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4368569,
            "range": "± 44823",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2644005,
            "range": "± 31718",
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
          "id": "4bfd1d3885e98aaf3b5ca288bb7fe030d683190a",
          "message": "chore: release v2.26.0",
          "timestamp": "2026-04-09T18:00:19+02:00",
          "tree_id": "2ef95295b829d817bb729f9a0e2b2366f7b818fc",
          "url": "https://github.com/fallow-rs/fallow/commit/4bfd1d3885e98aaf3b5ca288bb7fe030d683190a"
        },
        "date": 1775750682229,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 39700,
            "range": "± 1401",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1786056,
            "range": "± 32916",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3115655,
            "range": "± 36217",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15446255,
            "range": "± 229688",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111531,
            "range": "± 1057",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1993,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213475,
            "range": "± 10426",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 956276,
            "range": "± 20736",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1740410,
            "range": "± 47610",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535227,
            "range": "± 18959",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4379069,
            "range": "± 37586",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2641822,
            "range": "± 5441",
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
          "id": "3b3f1484f58df1a8a5d03a519e5b45dbcb119c89",
          "message": "perf(health): add churn disk cache, parallelize git log, and add --performance timing\n\n- Cache git churn data in .fallow/churn.bin keyed by HEAD SHA + since string.\n  Cache hit skips the git log shell-out entirely. Atomic write via temp+rename.\n  Prints dim note on cold miss >500ms. Respects --no-cache.\n\n- Run compute_filtered_file_scores and fetch_churn_data in parallel via\n  std::thread::scope when both are needed. On cold cache this overlaps the\n  git log (~1-5s) with the dead-code analysis for file scoring (~0.5s).\n\n- Extend --performance to the health command with a pipeline timing table\n  showing config, discover, parse, complexity, file scores, git churn\n  (with cache hit/miss), hotspots, duplication, targets, and total.\n  Works in both human and JSON modes.",
          "timestamp": "2026-04-09T18:37:58+02:00",
          "tree_id": "b1ccd5071a86f3d564aeec7243d79d54e2cba700",
          "url": "https://github.com/fallow-rs/fallow/commit/3b3f1484f58df1a8a5d03a519e5b45dbcb119c89"
        },
        "date": 1775752936456,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41780,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1780026,
            "range": "± 82843",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3088061,
            "range": "± 36882",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15749329,
            "range": "± 364373",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109553,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2114,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 214481,
            "range": "± 7998",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 964883,
            "range": "± 10175",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1769611,
            "range": "± 21948",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533517,
            "range": "± 28579",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4260930,
            "range": "± 41915",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2664897,
            "range": "± 4560",
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
          "id": "a2fa03c7df0e1a19d4eb88c4edf3c9e579fd023c",
          "message": "chore: release v2.26.1",
          "timestamp": "2026-04-09T18:39:47+02:00",
          "tree_id": "0ef80113c8f7593f8057c16ed4df215e9913e9e2",
          "url": "https://github.com/fallow-rs/fallow/commit/a2fa03c7df0e1a19d4eb88c4edf3c9e579fd023c"
        },
        "date": 1775753206389,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34317,
            "range": "± 879",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1810050,
            "range": "± 27690",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3206547,
            "range": "± 101938",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16705139,
            "range": "± 183325",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110514,
            "range": "± 1440",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2006,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 175470,
            "range": "± 9729",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 771880,
            "range": "± 7694",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1625976,
            "range": "± 19426",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 514006,
            "range": "± 8267",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3601321,
            "range": "± 28607",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2081418,
            "range": "± 4578",
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
          "id": "8157a284d61eb455f3b8be3a23a6b13b02241138",
          "message": "refactor(extract): deduplicate SFC template tag parser\n\nExtract parse_tag_attrs() to shared.rs, replacing the near-identical\nparse_tag (vue.rs) and parse_markup_tag (svelte.rs) implementations.\nThe shared parser accepts a braced_values flag for Svelte's {expr}\nattribute syntax. Also consolidates the duplicated HTML_COMMENT_RE\nregex into shared.rs.",
          "timestamp": "2026-04-10T09:42:54+02:00",
          "tree_id": "f5497442876bf6dafa376f6d0b804690fe210a11",
          "url": "https://github.com/fallow-rs/fallow/commit/8157a284d61eb455f3b8be3a23a6b13b02241138"
        },
        "date": 1775807651269,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41046,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1777395,
            "range": "± 29338",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3117161,
            "range": "± 29753",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15310503,
            "range": "± 75931",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113070,
            "range": "± 1019",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2050,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 214267,
            "range": "± 3850",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 962004,
            "range": "± 17679",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1755796,
            "range": "± 31795",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533032,
            "range": "± 27099",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4262525,
            "range": "± 65554",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2661266,
            "range": "± 12641",
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
          "id": "5cfa7cbc5fd0d324b1c144167b929bb3136fd627",
          "message": "chore: address final review housekeeping items\n\n- Fix stale doc comment on extract_flags (remove \"need_flags\" reference)\n- Update .claude/rules/mcp-server.md tool count 9 -> 10, add feature_flags\n- Add schema_version comment referencing report/json.rs source of truth",
          "timestamp": "2026-04-10T12:02:43+02:00",
          "tree_id": "c4007e3f3b12f156ed3cf1c35be6fd8be73b9c05",
          "url": "https://github.com/fallow-rs/fallow/commit/5cfa7cbc5fd0d324b1c144167b929bb3136fd627"
        },
        "date": 1775815707985,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45583,
            "range": "± 619",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1777000,
            "range": "± 24581",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3138087,
            "range": "± 109560",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15853906,
            "range": "± 334869",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111103,
            "range": "± 620",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1996,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212951,
            "range": "± 2033",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 950668,
            "range": "± 33017",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1737941,
            "range": "± 24335",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531807,
            "range": "± 29602",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4242872,
            "range": "± 61524",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2638661,
            "range": "± 65066",
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
          "id": "e7992f9104a67f471bd526414e7d703f1fd1978e",
          "message": "fix: wire dead code cross-reference into fallow flags command\n\nThe correlate_with_dead_code() function existed but was never called\nfrom the flags command. Now runs full dead code analysis via\nanalyze_with_parse_result() (reusing pre-parsed modules) and populates\nguarded_dead_exports on each flag. Output shows \"Flags guarding dead\ncode\" section with line counts and dead export names.",
          "timestamp": "2026-04-10T12:39:31+02:00",
          "tree_id": "58fc1c68419aeba1690141437de80046e3e6c6a7",
          "url": "https://github.com/fallow-rs/fallow/commit/e7992f9104a67f471bd526414e7d703f1fd1978e"
        },
        "date": 1775817821754,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46468,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1824349,
            "range": "± 61960",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3205907,
            "range": "± 40898",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16723560,
            "range": "± 389471",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107999,
            "range": "± 1023",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1998,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213631,
            "range": "± 6973",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 954269,
            "range": "± 14841",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1738809,
            "range": "± 26412",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 552053,
            "range": "± 45710",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4284748,
            "range": "± 65882",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2662311,
            "range": "± 47213",
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
          "id": "563824ea2e5219c2b0590d3ef5d6694d55f79b35",
          "message": "feat: add SARIF, Markdown, and CodeClimate format support for flags\n\nAll 6 output formats now supported by fallow flags:\n- SARIF 2.1.0 with rule definition and dead code cross-reference in messages\n- Markdown with cross-reference table first, then inventory table\n- CodeClimate (GitLab Code Quality) with FNV-1a fingerprints\n- Badge format emits a warning (health-only)",
          "timestamp": "2026-04-10T12:51:54+02:00",
          "tree_id": "98e50c1a7b900eefa49b28e198d5cde40aa02b91",
          "url": "https://github.com/fallow-rs/fallow/commit/563824ea2e5219c2b0590d3ef5d6694d55f79b35"
        },
        "date": 1775818562685,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45798,
            "range": "± 576",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1795964,
            "range": "± 25123",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3140485,
            "range": "± 119098",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15502489,
            "range": "± 95172",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110015,
            "range": "± 1220",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2020,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211639,
            "range": "± 6285",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 949012,
            "range": "± 8145",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1725223,
            "range": "± 46647",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 527724,
            "range": "± 31356",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4351056,
            "range": "± 170209",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2681951,
            "range": "± 7025",
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
          "id": "ff02943f8825e764a78af080c36f9d72965426f3",
          "message": "fix: address format reviewer concerns for flags output\n\n- SARIF: badge format now returns exit code 2 (was silently returning 0)\n- SARIF/CodeClimate: use normalize_uri() for bracket-safe paths (Next.js)\n- Markdown: add summary heading, backtick escaping for paths/names\n- Markdown: dead exports shown in backticks for consistency",
          "timestamp": "2026-04-10T12:58:19+02:00",
          "tree_id": "885339c473fae0da38bea5d8fe8e14aa0bd0ac53",
          "url": "https://github.com/fallow-rs/fallow/commit/ff02943f8825e764a78af080c36f9d72965426f3"
        },
        "date": 1775818944449,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44592,
            "range": "± 609",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1762076,
            "range": "± 42881",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3086888,
            "range": "± 25017",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15297771,
            "range": "± 79305",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110903,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2030,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211972,
            "range": "± 2652",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 948162,
            "range": "± 10197",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1722473,
            "range": "± 25832",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531102,
            "range": "± 29302",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4342587,
            "range": "± 64772",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2623550,
            "range": "± 7294",
            "unit": "ns/iter"
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
        "date": 1775820269743,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46251,
            "range": "± 1603",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1813327,
            "range": "± 24764",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3178268,
            "range": "± 30236",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15808537,
            "range": "± 97478",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112058,
            "range": "± 2009",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2039,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212782,
            "range": "± 2394",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 960863,
            "range": "± 9526",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1752283,
            "range": "± 19592",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530497,
            "range": "± 12696",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4266005,
            "range": "± 84804",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2643890,
            "range": "± 4303",
            "unit": "ns/iter"
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
        "date": 1775821083469,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34860,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1809253,
            "range": "± 46066",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3206223,
            "range": "± 25791",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16216813,
            "range": "± 53538",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109420,
            "range": "± 1043",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2068,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 173148,
            "range": "± 2308",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 765603,
            "range": "± 31646",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1625881,
            "range": "± 42401",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 506121,
            "range": "± 35775",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3555188,
            "range": "± 27961",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2067627,
            "range": "± 41214",
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
          "id": "970c16c2bbad2c20a38d3bde6eeb13a2074ab1e1",
          "message": "chore: release v2.27.0",
          "timestamp": "2026-04-10T13:47:36+02:00",
          "tree_id": "bdebe461be739022a7722500fa8ef476d182c4b9",
          "url": "https://github.com/fallow-rs/fallow/commit/970c16c2bbad2c20a38d3bde6eeb13a2074ab1e1"
        },
        "date": 1775822026574,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43766,
            "range": "± 619",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1783177,
            "range": "± 18317",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3140878,
            "range": "± 32084",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15550603,
            "range": "± 399090",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114517,
            "range": "± 658",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2001,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 216435,
            "range": "± 5271",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 961522,
            "range": "± 21207",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1734538,
            "range": "± 20067",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533176,
            "range": "± 24778",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4206014,
            "range": "± 39824",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2652875,
            "range": "± 11714",
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
          "id": "33868b8595ff88595172049b8e0a7585115e2e62",
          "message": "fix(extract): Angular @defer, @let, @else if, and outputFromObservable support (#92, #93, #94)\n\nAdd missing Angular template syntax and signal API recognition to\neliminate false positive unused-class-member reports:\n\n- @defer (when expr) / (prefetch when) / (hydrate when) conditions\n- @let name = expr; template-local variables with scope tracking\n- @else if (condition) expression scanning\n- outputFromObservable() as Angular signal API in ANGULAR_SIGNAL_APIS\n\nBump CACHE_VERSION 28->29 for changed extraction semantics.",
          "timestamp": "2026-04-10T19:29:38+02:00",
          "tree_id": "911f33ad29bb98b0a36e953ad56fdb31037799c6",
          "url": "https://github.com/fallow-rs/fallow/commit/33868b8595ff88595172049b8e0a7585115e2e62"
        },
        "date": 1775842429010,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44692,
            "range": "± 947",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1848883,
            "range": "± 99032",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3218995,
            "range": "± 27278",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16460466,
            "range": "± 475118",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111937,
            "range": "± 1398",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2001,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211651,
            "range": "± 4568",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 953333,
            "range": "± 13603",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1731797,
            "range": "± 15806",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 540041,
            "range": "± 7145",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4225101,
            "range": "± 75147",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2635292,
            "range": "± 11890",
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
          "id": "460afaee1c2411dbf289ae6dbec4fd95d0cd9bff",
          "message": "test(extract): harden Angular @defer nested parens and @else if word boundary\n\nAdd word boundary check for @else if detection to prevent matching\nidentifiers starting with \"if\" (e.g. @else iffy). Add test for\n@defer (on timer(1s)) confirming nested parentheses in triggers\ndon't break the scanner.",
          "timestamp": "2026-04-10T19:44:38+02:00",
          "tree_id": "efad6a8704b4dbc5f6bb99fd87094571a8581020",
          "url": "https://github.com/fallow-rs/fallow/commit/460afaee1c2411dbf289ae6dbec4fd95d0cd9bff"
        },
        "date": 1775843326426,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44348,
            "range": "± 1872",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1795506,
            "range": "± 23191",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3151962,
            "range": "± 97015",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15932056,
            "range": "± 340115",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110641,
            "range": "± 777",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2057,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213072,
            "range": "± 3620",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 954862,
            "range": "± 12059",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1745711,
            "range": "± 23631",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533325,
            "range": "± 17282",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4383877,
            "range": "± 207147",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2704727,
            "range": "± 12564",
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
          "id": "3531f8e369452c04843ca6f56467e2fa4c2753c2",
          "message": "chore: release v2.27.1",
          "timestamp": "2026-04-10T19:50:06+02:00",
          "tree_id": "3b4d4381b4e477ccbeef204982fe33fd0293f106",
          "url": "https://github.com/fallow-rs/fallow/commit/3531f8e369452c04843ca6f56467e2fa4c2753c2"
        },
        "date": 1775843657515,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35033,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1800532,
            "range": "± 22008",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3181074,
            "range": "± 101809",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16039988,
            "range": "± 59994",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112995,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2020,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 175549,
            "range": "± 8443",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 771225,
            "range": "± 14098",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1628008,
            "range": "± 28807",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 509016,
            "range": "± 20288",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3566216,
            "range": "± 27505",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2073420,
            "range": "± 5401",
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
          "id": "a85dd288b75720ebda86b2e2b47d11eec859aa9c",
          "message": "fix: SCSS partial resolution and inheritance-aware class member detection (#95, #96)\n\nSCSS partial files prefixed with `_` now resolve when imported via `@use`\nor `@import` without the underscore prefix, eliminating cascading false\npositives across unresolved imports, unlisted dependencies, and unused\nfiles. Class members accessed via `this.*` in parent classes now propagate\nto child class overrides through an inheritance map built from `extends`\nclauses, reducing unused class member false positives from 7 to 1 in\ntypical polymorphic dispatch patterns.",
          "timestamp": "2026-04-10T19:57:39+02:00",
          "tree_id": "383a7a250dbbc2c170ca06d2b80898fae00a215b",
          "url": "https://github.com/fallow-rs/fallow/commit/a85dd288b75720ebda86b2e2b47d11eec859aa9c"
        },
        "date": 1775844274099,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45439,
            "range": "± 2758",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1796369,
            "range": "± 21142",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3180115,
            "range": "± 33171",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15809656,
            "range": "± 123055",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111657,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2079,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212512,
            "range": "± 1889",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 952747,
            "range": "± 101676",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1726616,
            "range": "± 26736",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 540951,
            "range": "± 6219",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4358327,
            "range": "± 40047",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2637534,
            "range": "± 6275",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}