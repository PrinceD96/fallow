window.BENCHMARK_DATA = {
  "lastUpdate": 1775639603264,
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
          "id": "181f611ec3433b99dada91ea4aa26885e18b54ad",
          "message": "refactor: use Display for EntryPointSource and relative paths in list output\n\nAdd Display impl for EntryPointSource with human-readable strings\n(e.g. \"package.json main\" instead of \"PackageJsonMain\"). Switch list\ncommand human output to relative paths and Display formatting.",
          "timestamp": "2026-04-02T09:42:06+02:00",
          "tree_id": "847e9f12d07e624543604e25f05e2715adabc3be",
          "url": "https://github.com/fallow-rs/fallow/commit/181f611ec3433b99dada91ea4aa26885e18b54ad"
        },
        "date": 1775116128744,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 36374,
            "range": "± 813",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1679630,
            "range": "± 26946",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3072280,
            "range": "± 19027",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16163501,
            "range": "± 280435",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103420,
            "range": "± 1031",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2009,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 179480,
            "range": "± 2490",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 798552,
            "range": "± 17439",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1659591,
            "range": "± 24448",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 509885,
            "range": "± 8564",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3663394,
            "range": "± 48081",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2149838,
            "range": "± 10332",
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
          "id": "189c5bfef115b1b8b4109a540cb451135c1b726e",
          "message": "fix: address review findings from pre-ship audit\n\n- Remove expect() in save_snapshot by passing path as parameter\n- Add missing unused_optional_dependencies assertion in config test\n- Fix inaccurate doc: static_imports handles import declarations only\n- Update CLAUDE.md and rules for regression/ and diagnostics/ splits",
          "timestamp": "2026-04-02T11:13:57+02:00",
          "tree_id": "62a5ee52b0fa0809facc4409e3a45b4bbf163e88",
          "url": "https://github.com/fallow-rs/fallow/commit/189c5bfef115b1b8b4109a540cb451135c1b726e"
        },
        "date": 1775121681118,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43730,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1632922,
            "range": "± 47313",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3003056,
            "range": "± 71782",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15452423,
            "range": "± 327559",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 99740,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1990,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 239907,
            "range": "± 9576",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 936940,
            "range": "± 21716",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1759654,
            "range": "± 36056",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 509268,
            "range": "± 29345",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4235534,
            "range": "± 44739",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2556056,
            "range": "± 14811",
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
          "id": "07672829d12b9726615eaf48dc2431fe557d12f4",
          "message": "refactor: split health_types.rs into focused submodules\n\nSplit into health_types/ directory with:\n- mod.rs: HealthReport + re-exports\n- scores.rs: score types, penalties, thresholds\n- vital_signs.rs: vital signs + snapshot schema\n- trends.rs: trend tracking types\n- targets.rs: refactoring targets + evidence",
          "timestamp": "2026-04-02T11:46:39+02:00",
          "tree_id": "e5dddea145693ad07bba1130ff3a146c73d27d04",
          "url": "https://github.com/fallow-rs/fallow/commit/07672829d12b9726615eaf48dc2431fe557d12f4"
        },
        "date": 1775123506569,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44010,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1619655,
            "range": "± 45188",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3004759,
            "range": "± 24106",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15730098,
            "range": "± 226960",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104059,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2006,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 202557,
            "range": "± 6018",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 905498,
            "range": "± 36123",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1714888,
            "range": "± 22005",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 517178,
            "range": "± 19954",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4188495,
            "range": "± 43938",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2499111,
            "range": "± 10568",
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
          "id": "9026172cd64b9a4f92aa03ba8757bb6ccdaf3494",
          "message": "fix: sort circular deps by files and export usage reference locations\n\nAddress review findings: sort circular_dependencies by files (not\nlength) for path-consistent ordering, and sort nested\nreference_locations within export_usages for LSP determinism.",
          "timestamp": "2026-04-02T12:53:36+02:00",
          "tree_id": "8b5e065307648cf479390d8949eea6a3d8c19a7b",
          "url": "https://github.com/fallow-rs/fallow/commit/9026172cd64b9a4f92aa03ba8757bb6ccdaf3494"
        },
        "date": 1775127450936,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44634,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1601075,
            "range": "± 50477",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3004965,
            "range": "± 24756",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15479819,
            "range": "± 90599",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104429,
            "range": "± 1257",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1983,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203247,
            "range": "± 3347",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 902774,
            "range": "± 9925",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1707937,
            "range": "± 19259",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 525365,
            "range": "± 7983",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4197390,
            "range": "± 36818",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2483970,
            "range": "± 6764",
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
          "id": "3e39c26723fc9a6177aeb55acfe8db5ebd32046e",
          "message": "chore: release v2.9.1",
          "timestamp": "2026-04-02T13:03:06+02:00",
          "tree_id": "9d0752e16ccf69f0d95c154afe98f6267fed10ba",
          "url": "https://github.com/fallow-rs/fallow/commit/3e39c26723fc9a6177aeb55acfe8db5ebd32046e"
        },
        "date": 1775128031766,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44766,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1609726,
            "range": "± 20793",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3001273,
            "range": "± 33070",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15523028,
            "range": "± 78988",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 101393,
            "range": "± 548",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1987,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203720,
            "range": "± 5214",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 903080,
            "range": "± 12229",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1708964,
            "range": "± 48760",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 513311,
            "range": "± 17346",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4208882,
            "range": "± 47650",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2488245,
            "range": "± 4008",
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
          "id": "f1fe55081e25831e99fb0ba4410eab0b153dd391",
          "message": "feat: harden MCP server to quality 9\n\n- Add subprocess timeout (120s default, FALLOW_TIMEOUT_SECS env var)\n- Pass through structured JSON errors from CLI stdout on exit code 2+\n- Inject actions into health JSON (findings, targets, hotspots)\n- Inject actions into dupes JSON (clone families, clone groups)\n- Audit inherits actions for all three sub-analyses\n- Add list_boundaries tool (9th MCP tool)\n- Add boundary_violations convenience param on analyze\n- Add changed_since param on find_dupes\n- Add section params on project_info (entry_points, files, plugins, boundaries)",
          "timestamp": "2026-04-02T16:10:10+02:00",
          "tree_id": "6d215dbd9b3bfc5aef3af78bae82b913c2ede8fa",
          "url": "https://github.com/fallow-rs/fallow/commit/f1fe55081e25831e99fb0ba4410eab0b153dd391"
        },
        "date": 1775139260497,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 39466,
            "range": "± 1304",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1447415,
            "range": "± 25022",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2510173,
            "range": "± 68760",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 12382733,
            "range": "± 179289",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 97135,
            "range": "± 2118",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2774,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 161662,
            "range": "± 1411",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 728566,
            "range": "± 4819",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1571175,
            "range": "± 27580",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 462499,
            "range": "± 7473",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3585466,
            "range": "± 60506",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2060733,
            "range": "± 31882",
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
          "id": "e3699a2f65d287c3f0af6e480256389458535116",
          "message": "feat: add npm package resolution to config extends field\n\nSupport `npm:` prefixed specifiers in the `extends` config field for\ncross-repo config inheritance via npm packages.\n\nResolution: walks up `node_modules/`, checks `package.json`\nexports/main (including `node` condition), falls back to standard\nconfig file names. Subpaths supported (e.g., `npm:@co/config/strict.json`).\n\nSecurity: path confinement via canonicalize + starts_with on all\nresolution paths, package name validation rejects traversal components,\nmalformed package.json is a hard error.\n\nIncompatible with Yarn PnP (no `node_modules/` directory).",
          "timestamp": "2026-04-02T17:24:49+02:00",
          "tree_id": "35942bfa1fc1a797d6b7fb56448de2842480ac7f",
          "url": "https://github.com/fallow-rs/fallow/commit/e3699a2f65d287c3f0af6e480256389458535116"
        },
        "date": 1775144220198,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45380,
            "range": "± 852",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1703986,
            "range": "± 21419",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3095205,
            "range": "± 119002",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16471352,
            "range": "± 773522",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104425,
            "range": "± 1811",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2001,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206967,
            "range": "± 2588",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 927372,
            "range": "± 24262",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1752711,
            "range": "± 93734",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 524677,
            "range": "± 10969",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4132751,
            "range": "± 56187",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2561085,
            "range": "± 17718",
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
          "id": "5a63d4ea14799b93a73cb4232f8ebce0656eb502",
          "message": "chore: release v2.9.2",
          "timestamp": "2026-04-02T19:33:44+02:00",
          "tree_id": "9a05251d5250855d1aab868aae4ea379b2ff4bc9",
          "url": "https://github.com/fallow-rs/fallow/commit/5a63d4ea14799b93a73cb4232f8ebce0656eb502"
        },
        "date": 1775151496537,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44940,
            "range": "± 2515",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1627352,
            "range": "± 36198",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3002013,
            "range": "± 35685",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15451031,
            "range": "± 242594",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107557,
            "range": "± 1209",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2001,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203810,
            "range": "± 22473",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908871,
            "range": "± 9020",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1708683,
            "range": "± 24604",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 515641,
            "range": "± 16098",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4187174,
            "range": "± 31700",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2496119,
            "range": "± 6493",
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
          "id": "e62239363b17b9627f6dc869754c6e96e281292d",
          "message": "chore: release v2.9.3",
          "timestamp": "2026-04-03T07:25:29+02:00",
          "tree_id": "8accee72b1cce0bdd30dd8a12a32bc7575841beb",
          "url": "https://github.com/fallow-rs/fallow/commit/e62239363b17b9627f6dc869754c6e96e281292d"
        },
        "date": 1775194209162,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43988,
            "range": "± 2631",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1626846,
            "range": "± 19689",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3014648,
            "range": "± 97537",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15574070,
            "range": "± 130932",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108268,
            "range": "± 2898",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2023,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204463,
            "range": "± 5527",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 906835,
            "range": "± 12027",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1706624,
            "range": "± 19532",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 514512,
            "range": "± 25067",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4198414,
            "range": "± 26294",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2495662,
            "range": "± 22074",
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
          "id": "69aa4bb6c8e6c49e0d983408072c1f603fba4949",
          "message": "feat: add HTTPS URL resolution to config extends field\n\nThe `extends` field in `.fallowrc.json` now supports three resolution\nstrategies: relative paths, npm packages (`npm:`), and HTTPS URLs.\n\nURL extends fetch remote JSON configs with a 5s timeout (configurable\nvia `FALLOW_EXTENDS_TIMEOUT_SECS`), enforce HTTPS-only, cap response\nbodies at 1 MB, and normalize URLs for cycle detection. URL-sourced\nconfigs may extend other URLs or npm packages but not relative paths.",
          "timestamp": "2026-04-03T08:20:56+02:00",
          "tree_id": "761ff2f282e64f893daa86344cfe65e99cdbdf38",
          "url": "https://github.com/fallow-rs/fallow/commit/69aa4bb6c8e6c49e0d983408072c1f603fba4949"
        },
        "date": 1775197514437,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44512,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1615250,
            "range": "± 21348",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3003091,
            "range": "± 64848",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15557755,
            "range": "± 142459",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106379,
            "range": "± 1060",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2013,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205968,
            "range": "± 4681",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 913146,
            "range": "± 10832",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1723707,
            "range": "± 35756",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 514030,
            "range": "± 28596",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4207757,
            "range": "± 50257",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2552566,
            "range": "± 9196",
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
          "id": "f7fda81f4d9c7739dce649f4f5e614dcc2fc7657",
          "message": "chore: release v2.10.0",
          "timestamp": "2026-04-03T08:27:35+02:00",
          "tree_id": "f4766ca2b2fa84b732e57a3caec0979ce65ae73a",
          "url": "https://github.com/fallow-rs/fallow/commit/f7fda81f4d9c7739dce649f4f5e614dcc2fc7657"
        },
        "date": 1775197894530,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44936,
            "range": "± 959",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1605887,
            "range": "± 21716",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2998490,
            "range": "± 91407",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15535899,
            "range": "± 169990",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103546,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1987,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206544,
            "range": "± 3508",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 916088,
            "range": "± 210459",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1727743,
            "range": "± 27408",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 519018,
            "range": "± 22161",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4257111,
            "range": "± 39282",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2528484,
            "range": "± 7104",
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
          "id": "285c6dfbec92d5e730b469ac64aa2b9caa7389a6",
          "message": "chore: release v2.10.1",
          "timestamp": "2026-04-03T08:53:11+02:00",
          "tree_id": "a418a2b4770a64f0bb77d7d9cc7a8e16111a13e7",
          "url": "https://github.com/fallow-rs/fallow/commit/285c6dfbec92d5e730b469ac64aa2b9caa7389a6"
        },
        "date": 1775199442021,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45742,
            "range": "± 1173",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1632437,
            "range": "± 28641",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3005882,
            "range": "± 24930",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16197456,
            "range": "± 309714",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 100651,
            "range": "± 1964",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2003,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204696,
            "range": "± 9837",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 907427,
            "range": "± 12101",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1710309,
            "range": "± 26261",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 512541,
            "range": "± 19020",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4210168,
            "range": "± 37060",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2516800,
            "range": "± 85112",
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
          "id": "f021dec3e7b9bfaeff9550c51d82439c2474e7db",
          "message": "feat: add --group-by owner|directory for team-level issue triage\n\nCODEOWNERS parser with auto-probe (CODEOWNERS, .github/CODEOWNERS,\n.gitlab/CODEOWNERS, docs/CODEOWNERS), last-match-wins pattern semantics,\nfirst-owner-on-line selection. Groups all dead-code analysis output into\nlabeled sections by team ownership or first directory component.\n\nAll 6 output formats supported: human (colored group headers), JSON\n(grouped envelope with groups array), compact (group prefix per line),\nmarkdown (## sections), SARIF (properties.owner), CodeClimate (owner field).\n\nConfig: optional `codeowners` path field for custom CODEOWNERS location.\nMCP: `group_by` parameter on the analyze tool.",
          "timestamp": "2026-04-03T10:04:05+02:00",
          "tree_id": "276e4231c44f1c0213a17c1621841cc30b8e814f",
          "url": "https://github.com/fallow-rs/fallow/commit/f021dec3e7b9bfaeff9550c51d82439c2474e7db"
        },
        "date": 1775203676883,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44619,
            "range": "± 2341",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1607371,
            "range": "± 21540",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3006418,
            "range": "± 21365",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15508940,
            "range": "± 128004",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 102043,
            "range": "± 16399",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1994,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205823,
            "range": "± 3246",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 907930,
            "range": "± 158767",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1716063,
            "range": "± 29105",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534511,
            "range": "± 28923",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4225555,
            "range": "± 49096",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2503383,
            "range": "± 13961",
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
          "id": "fc879aeffe737846ec2c326c29bcda6b8c1977cb",
          "message": "feat: polish --group-by output with summary, sort, rule annotations\n\nFive improvements from panel review:\n1. Summary line at top showing all groups sorted by issue count\n2. Sort groups by count descending (biggest first, unowned last)\n3. CODEOWNERS rule annotation on group headers (e.g. \"matched by *.tsx\")\n4. Deduplicate doc URL footers across groups (each appears once)\n5. Breakdown in group header showing per-type counts",
          "timestamp": "2026-04-03T10:23:57+02:00",
          "tree_id": "ee1ce3c698e27f1ba0793185b14dfb94da8e7ad6",
          "url": "https://github.com/fallow-rs/fallow/commit/fc879aeffe737846ec2c326c29bcda6b8c1977cb"
        },
        "date": 1775204869834,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45110,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1615127,
            "range": "± 43528",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3001899,
            "range": "± 18760",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15506816,
            "range": "± 87768",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 101818,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2014,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 207519,
            "range": "± 2985",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 916088,
            "range": "± 15665",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1712107,
            "range": "± 20509",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 513690,
            "range": "± 26680",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4207184,
            "range": "± 33548",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2526794,
            "range": "± 12845",
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
          "id": "e7c16e59db867a83f0c47b231cac985eed652209",
          "message": "fix: wire --group-by through combined mode and add grouping tests\n\nCombined mode (no subcommand) now passes the ownership resolver to\nprint_check_result instead of hardcoded None, so `fallow --group-by\ndirectory` produces grouped output.\n\nAdds 19 unit tests for group_analysis_results covering: empty input,\nsingle/multiple groups, count-descending sort, unowned-last ordering,\nmulti-location type fallbacks, directory mode, and owner mode.",
          "timestamp": "2026-04-03T11:14:37+02:00",
          "tree_id": "3115d70e1a49e2931141b1346f2dd8b1ba2d7b5d",
          "url": "https://github.com/fallow-rs/fallow/commit/e7c16e59db867a83f0c47b231cac985eed652209"
        },
        "date": 1775207918353,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44318,
            "range": "± 978",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1626169,
            "range": "± 17710",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3003424,
            "range": "± 22490",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15528168,
            "range": "± 67266",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110022,
            "range": "± 1086",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1999,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203876,
            "range": "± 2410",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 905965,
            "range": "± 8312",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1705076,
            "range": "± 19491",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 509608,
            "range": "± 20360",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4197054,
            "range": "± 26216",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2508406,
            "range": "± 12105",
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
          "id": "ba0af01e313788b4726aee30efc8c0785c89e9b1",
          "message": "chore: release v2.11.0",
          "timestamp": "2026-04-03T11:16:17+02:00",
          "tree_id": "5224d714756e3888542c6c42f97697984bf099f7",
          "url": "https://github.com/fallow-rs/fallow/commit/ba0af01e313788b4726aee30efc8c0785c89e9b1"
        },
        "date": 1775208158736,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45637,
            "range": "± 1198",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1651274,
            "range": "± 18703",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3011181,
            "range": "± 118895",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15736141,
            "range": "± 95932",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106101,
            "range": "± 2127",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1982,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205165,
            "range": "± 14020",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 912469,
            "range": "± 9480",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1703385,
            "range": "± 37521",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 513962,
            "range": "± 66709",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4223421,
            "range": "± 42932",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2530562,
            "range": "± 4789",
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
          "id": "ad6aefd99dfcbba905aca34200082fb3a6a698c4",
          "message": "feat: comprehensive human output improvements from panel review\n\nOrientation header: vital signs + analysis scope + \"start here\" nudge at\ntop of combined output, repeated in the Failed: line at the bottom.\n\nInformation hierarchy: directory rollup for >200 unused files with\n\"(project root)\" grouping for root-level files, test vs src split\nannotation, scoping hints (--workspace/--changed-since) on all truncation\npaths including rollups.\n\nTrust fixes: duplicate count now shows pairs not raw structs, \"churn\nhotspot\" terminology unified across combined and standalone modes, MI\nscore contextualized with good/moderate/low labels and scale legend,\npre-pluralized labels singularized for count=1.\n\nFalse positive reduction: generated code (generated) annotation on AJV\nvalidators, (type-only) tag on .d.ts circular dependency cycles,\nunused exports suppressed when file is already reported as unused.\n\nConfig guidance: dominant-directory signal with branched advice (source\ndirs suggest entry-point verification, test/example dirs suggest\nignorePatterns/--production with explanation), docs URLs on all advisory\nnotes, duplication mirror advisory at 80%+ rate.\n\nSuppression UX: inline hints gated at ≥3 items, file-level hint for\ncircular deps/boundary violations, config-level hint for directory\nrollups, auto-fix hint (fallow fix --dry-run) for fixable categories.\n\nSeverity defaults: unused_dev_dependencies and unused_optional_dependencies\nnow default to Warn (was Error). BREAKING for CI users relying on the old\ndefault.\n\nNew flags: --top N on dead-code check command, consistent with existing\n--top on dupes and health.\n\nFailed: line now includes health results and repeats the start-here\nrefactoring target for terminal scroll visibility.",
          "timestamp": "2026-04-03T19:35:32+02:00",
          "tree_id": "6aa89b5fe6990d278c67332e635e8fe432fb2887",
          "url": "https://github.com/fallow-rs/fallow/commit/ad6aefd99dfcbba905aca34200082fb3a6a698c4"
        },
        "date": 1775237978307,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45432,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1620128,
            "range": "± 25751",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3003753,
            "range": "± 22125",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15536205,
            "range": "± 496743",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110002,
            "range": "± 2836",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1978,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203257,
            "range": "± 10073",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908749,
            "range": "± 40614",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1692484,
            "range": "± 22923",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 512709,
            "range": "± 36357",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4208736,
            "range": "± 144657",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2700353,
            "range": "± 89598",
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
          "id": "1008f2daac43bbc835870256d06aaff6c4023327",
          "message": "fix: suppressed-export ordering, --top test, gitignore proptest\n\n- Fix insert_test_src_split ordering: suppressed-export count now\n  inserts before the trailing blank line, keeping it visually\n  connected to the section it belongs to\n- Add test for --top flag effect on build_human_lines (reviewer\n  finding #4: verifies truncation at custom limit)\n- Add proptest-regressions/ to .gitignore",
          "timestamp": "2026-04-03T19:41:16+02:00",
          "tree_id": "d52685bb50da8bde780c3936b7f299be3c4648e0",
          "url": "https://github.com/fallow-rs/fallow/commit/1008f2daac43bbc835870256d06aaff6c4023327"
        },
        "date": 1775238303619,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44746,
            "range": "± 536",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1626288,
            "range": "± 24969",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3020678,
            "range": "± 52657",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15553417,
            "range": "± 282625",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105825,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2002,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 202783,
            "range": "± 3226",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 905278,
            "range": "± 90708",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1693556,
            "range": "± 34407",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 512502,
            "range": "± 20301",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4185654,
            "range": "± 57088",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2510739,
            "range": "± 4644",
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
          "id": "86579fef424125f618f9676f41dcca57d307cf87",
          "message": "chore: regenerate schema.json, add singularization test, gitignore proptest\n\n- Regenerate schema.json to reflect devDeps/optionalDeps default change\n  from Error to Warn\n- Add test for count=1 singularization of pre-pluralized summary labels\n  (\"1 enum member\" not \"1 enum members\")\n- Add proptest-regressions/ to .gitignore",
          "timestamp": "2026-04-03T19:55:35+02:00",
          "tree_id": "cf88ec4f4d48f8952f1064c4be0c591afc4ca1b5",
          "url": "https://github.com/fallow-rs/fallow/commit/86579fef424125f618f9676f41dcca57d307cf87"
        },
        "date": 1775239179089,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44852,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1604993,
            "range": "± 29984",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3005136,
            "range": "± 23075",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15566420,
            "range": "± 183028",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109798,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1972,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203425,
            "range": "± 3006",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 906639,
            "range": "± 19603",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1701692,
            "range": "± 17834",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 516597,
            "range": "± 7053",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4191598,
            "range": "± 27232",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2505205,
            "range": "± 8413",
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
          "id": "28f45e286d4423b80f6bf6256df14cf633c21bbe",
          "message": "fix: improve section footer descriptions for clarity and actionability\n\nRewrite section footer descriptions to be more actionable:\n- \"Files not reachable from any entry point\" (was \"not imported or referenced\")\n- \"Exported symbols with no known consumers\" (was \"not imported by any reachable file\")\n- Split dep descriptions per category (dependencies/devDependencies/optionalDependencies)\n- \"Import paths that could not be resolved — check for missing packages\" (was generic)\n- \"Import cycles that can cause initialization failures\" (was \"files that import each other\")\n- Add boundary violations footer text\n- \"consider moving to devDependencies\" for type-only deps",
          "timestamp": "2026-04-03T20:02:58+02:00",
          "tree_id": "8edd14cb86a3e9c519a614f21e5231703f9997b5",
          "url": "https://github.com/fallow-rs/fallow/commit/28f45e286d4423b80f6bf6256df14cf633c21bbe"
        },
        "date": 1775239608193,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46834,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1619370,
            "range": "± 35962",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2998612,
            "range": "± 37043",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15445260,
            "range": "± 705171",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 98496,
            "range": "± 1430",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2044,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 201444,
            "range": "± 7513",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 903675,
            "range": "± 38407",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1693355,
            "range": "± 23184",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 516070,
            "range": "± 27755",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4180232,
            "range": "± 68567",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2488835,
            "range": "± 7139",
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
          "id": "8932dc7c3f40e173b1445cc1fd507449148b5924",
          "message": "feat: panel review improvements — vital signs referents, baseline deltas, entry-point display, and blocker fixes\n\nImplements 22 items from the panel review improvement plan across 5 batches:\n\nBatch 1 (human output): MI legend gating, plugin discovery hint, config note\nthreshold, --effort filter, dynamicallyLoaded config, non-test nudge filter,\ncross-package circular deps, fixture_glob_patterns, summary footer filtered\ncounts, scale-aware nudge, advisory placement, mirrored directories in JSON,\nsecond-level rollup, --group-by package, publicPackages config, smarter init,\nundeclared workspace diagnostic, entry-point detection inline.\n\nBatch 2-5 (cross-cutting): vital signs percentage referents (\"63.5% (N of M)\"),\ncheck JSON entry_points object, baseline-aware deltas (BaselineDeltas struct),\n--summary flag wiring, MCP server params for --effort and --summary.\n\nBlocker fixes: filter non-package-name unlisted deps ($DIR, __barrel_optimize__),\nskip nudge when all targets are test/fixture paths, extend is_test_path with\nplayground/examples/generated-file heuristics.",
          "timestamp": "2026-04-03T23:56:18+02:00",
          "tree_id": "fd72ee20920258f2923d16563a13ca2a6b6fcb48",
          "url": "https://github.com/fallow-rs/fallow/commit/8932dc7c3f40e173b1445cc1fd507449148b5924"
        },
        "date": 1775253622216,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44801,
            "range": "± 3236",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1652072,
            "range": "± 29820",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3006567,
            "range": "± 28124",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15511041,
            "range": "± 64716",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 101258,
            "range": "± 2576",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1987,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233177,
            "range": "± 7932",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 948326,
            "range": "± 15783",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1778381,
            "range": "± 33702",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 514917,
            "range": "± 10679",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4227660,
            "range": "± 35715",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2584939,
            "range": "± 12980",
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
          "id": "7bcce6c5cc0d41420cc576286fbd00104dd50ed6",
          "message": "feat: complete --summary dispatch and JSON per-category summary counts\n\nWire the --summary flag through CLI arg → options → ReportContext dispatch.\nThree summary rendering functions added for check (category counts with\nseverity colors), dupes (families, groups, lines, rate), and health\n(functions analyzed, threshold, MI, score).\n\nAdd per-category summary counts object to check JSON output — enables\nCI dashboards to read issue counts without computing array lengths.",
          "timestamp": "2026-04-04T00:16:30+02:00",
          "tree_id": "df6940a8a8ff19018715b71cc104b6f568fc5d2e",
          "url": "https://github.com/fallow-rs/fallow/commit/7bcce6c5cc0d41420cc576286fbd00104dd50ed6"
        },
        "date": 1775254835439,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44296,
            "range": "± 1645",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1624208,
            "range": "± 33586",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3003493,
            "range": "± 32849",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15677443,
            "range": "± 208457",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 100918,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1985,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 207551,
            "range": "± 4653",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 910398,
            "range": "± 7005",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1714853,
            "range": "± 27853",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 515766,
            "range": "± 12757",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4216528,
            "range": "± 27502",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2552742,
            "range": "± 5391",
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
          "id": "fc0321f8aa0dc39a312d71aa92b2b6e8f8a514c8",
          "message": "chore: release v2.12.0",
          "timestamp": "2026-04-04T00:37:34+02:00",
          "tree_id": "bfbcc8910d8dfc87e1e9cb0bc51d55c5e8d3eb2b",
          "url": "https://github.com/fallow-rs/fallow/commit/fc0321f8aa0dc39a312d71aa92b2b6e8f8a514c8"
        },
        "date": 1775256180026,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46107,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1602231,
            "range": "± 44439",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3024928,
            "range": "± 112738",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15474746,
            "range": "± 218204",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107597,
            "range": "± 295",
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
            "value": 205189,
            "range": "± 2400",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 913740,
            "range": "± 40149",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1706338,
            "range": "± 20558",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 528145,
            "range": "± 5573",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4220772,
            "range": "± 52169",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2546137,
            "range": "± 4343",
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
          "id": "1e1772dcc424491f4632ff7208e31dabe488a857",
          "message": "fix: preserve original indentation in export auto-fix (#37)\n\nfix: preserve original indentation in export auto-fix",
          "timestamp": "2026-04-04T11:12:27+02:00",
          "tree_id": "cd7b5b12e52d2895444fed2d6dd29f249bab4179",
          "url": "https://github.com/fallow-rs/fallow/commit/1e1772dcc424491f4632ff7208e31dabe488a857"
        },
        "date": 1775294183232,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45704,
            "range": "± 1731",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1649411,
            "range": "± 18265",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3005015,
            "range": "± 23929",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15564593,
            "range": "± 202236",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105068,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2006,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 209477,
            "range": "± 2290",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 917936,
            "range": "± 11323",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1709304,
            "range": "± 22108",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 521215,
            "range": "± 52124",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4239113,
            "range": "± 33385",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2565973,
            "range": "± 10169",
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
          "id": "e82a7d1733469c9ff5ff4b4b72818e36f1ead127",
          "message": "style: fix trailing blank line in export fix tests",
          "timestamp": "2026-04-04T11:12:48+02:00",
          "tree_id": "c61033dae3a04e871279c4b6fd4de7571b2131ea",
          "url": "https://github.com/fallow-rs/fallow/commit/e82a7d1733469c9ff5ff4b4b72818e36f1ead127"
        },
        "date": 1775294424238,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46737,
            "range": "± 735",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1691431,
            "range": "± 65671",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3129247,
            "range": "± 170093",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17303883,
            "range": "± 834097",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111835,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1992,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 207062,
            "range": "± 3692",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 920730,
            "range": "± 23115",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1734478,
            "range": "± 54985",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 523554,
            "range": "± 9667",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4306839,
            "range": "± 57051",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2547857,
            "range": "± 10860",
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
          "id": "fb94c27136d55fd22de1b8204efea94d79161bb4",
          "message": "chore: release v2.12.1",
          "timestamp": "2026-04-04T11:22:02+02:00",
          "tree_id": "7f0d0ecba22c76bdd097d972ae68fe081503ea88",
          "url": "https://github.com/fallow-rs/fallow/commit/fb94c27136d55fd22de1b8204efea94d79161bb4"
        },
        "date": 1775295546222,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45543,
            "range": "± 3455",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1650533,
            "range": "± 22701",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3021421,
            "range": "± 31687",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15676671,
            "range": "± 245216",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109581,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1996,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203056,
            "range": "± 3721",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 903836,
            "range": "± 16891",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1708900,
            "range": "± 318737",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 513397,
            "range": "± 29629",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4204534,
            "range": "± 30686",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2493109,
            "range": "± 23676",
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
          "id": "31ad2b795659f758b0815386fdacc05d56844e61",
          "message": "chore: release v2.13.0",
          "timestamp": "2026-04-04T12:03:19+02:00",
          "tree_id": "05d19286a08e2d2d3c8da10469c4304354b81d1a",
          "url": "https://github.com/fallow-rs/fallow/commit/31ad2b795659f758b0815386fdacc05d56844e61"
        },
        "date": 1775297256423,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45089,
            "range": "± 1425",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1613449,
            "range": "± 23360",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3008242,
            "range": "± 28859",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16099277,
            "range": "± 307080",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111632,
            "range": "± 1718",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1976,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206992,
            "range": "± 7074",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 917715,
            "range": "± 66039",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1737390,
            "range": "± 20099",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 518820,
            "range": "± 14454",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4257296,
            "range": "± 36525",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2528526,
            "range": "± 9816",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "h.raza1164@yahoo.com",
            "name": "Muhammad Hassan Raza",
            "username": "M-Hassan-Raza"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71790b18bec1f38a36bd3ecb7ae7e69a8b5d96ae",
          "message": "fix: align init hook CLI names (#43)",
          "timestamp": "2026-04-05T15:23:06+02:00",
          "tree_id": "d39c2898c45bf580390a370231e2231c4028fce4",
          "url": "https://github.com/fallow-rs/fallow/commit/71790b18bec1f38a36bd3ecb7ae7e69a8b5d96ae"
        },
        "date": 1775395621995,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44897,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1620620,
            "range": "± 31692",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3004683,
            "range": "± 25710",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16426010,
            "range": "± 439233",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106405,
            "range": "± 3071",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1986,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 209629,
            "range": "± 3656",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 918698,
            "range": "± 25393",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1748954,
            "range": "± 31410",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 523886,
            "range": "± 40279",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4320723,
            "range": "± 47133",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2594739,
            "range": "± 6553",
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
          "id": "f704663f6934ef7e8f522227c27285bc820fdb56",
          "message": "fix: replace legacy fallow check with fallow dead-code in user-facing messages",
          "timestamp": "2026-04-05T15:29:52+02:00",
          "tree_id": "eb693f7db712f487d194542b03750770e3daa0c1",
          "url": "https://github.com/fallow-rs/fallow/commit/f704663f6934ef7e8f522227c27285bc820fdb56"
        },
        "date": 1775396026596,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44976,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1623139,
            "range": "± 23171",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3003477,
            "range": "± 21043",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15555431,
            "range": "± 100061",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107953,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1992,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206319,
            "range": "± 2007",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 916388,
            "range": "± 5665",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1740195,
            "range": "± 20449",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 511875,
            "range": "± 32067",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4243932,
            "range": "± 22031",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2541921,
            "range": "± 7026",
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
          "id": "0d88519cb64edfca6142a28a772ac8c3aae0b012",
          "message": "chore: release v2.13.1",
          "timestamp": "2026-04-05T15:39:05+02:00",
          "tree_id": "22e95308560e66b8c93627dac0056cf318004b41",
          "url": "https://github.com/fallow-rs/fallow/commit/0d88519cb64edfca6142a28a772ac8c3aae0b012"
        },
        "date": 1775396585923,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45360,
            "range": "± 422",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1644566,
            "range": "± 22479",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3004843,
            "range": "± 75990",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15482866,
            "range": "± 69707",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104913,
            "range": "± 1279",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1992,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 206378,
            "range": "± 4180",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 907574,
            "range": "± 10064",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1711106,
            "range": "± 64133",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 516608,
            "range": "± 24061",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4192647,
            "range": "± 26831",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2503779,
            "range": "± 3928",
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
          "id": "3a61a3e4d421bedd3f99e542c3a6df1df0d024b2",
          "message": "fix: use dead-code instead of check in Failed summary line",
          "timestamp": "2026-04-05T19:54:55+02:00",
          "tree_id": "a0c5570162f534bd5392ad2022d9f3fa834bc18b",
          "url": "https://github.com/fallow-rs/fallow/commit/3a61a3e4d421bedd3f99e542c3a6df1df0d024b2"
        },
        "date": 1775411929751,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46240,
            "range": "± 1546",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1609816,
            "range": "± 23997",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3009998,
            "range": "± 23085",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15718984,
            "range": "± 200989",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105326,
            "range": "± 881",
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
            "value": 204461,
            "range": "± 6474",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908022,
            "range": "± 12954",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1715461,
            "range": "± 17009",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 519237,
            "range": "± 5642",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4218996,
            "range": "± 46574",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2505575,
            "range": "± 15423",
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
          "id": "48ee537e6dfdaa8c382024acc72070862b2ba466",
          "message": "fix: include plugin entry points in list mode (#45)",
          "timestamp": "2026-04-05T20:29:43+02:00",
          "tree_id": "4cb4f03b3faf49df4641fb44a2a1d928a794c2cd",
          "url": "https://github.com/fallow-rs/fallow/commit/48ee537e6dfdaa8c382024acc72070862b2ba466"
        },
        "date": 1775414014797,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46940,
            "range": "± 1153",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1613683,
            "range": "± 69838",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3005152,
            "range": "± 91249",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15574343,
            "range": "± 68733",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105912,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1989,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 227304,
            "range": "± 7069",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 918141,
            "range": "± 18745",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1733346,
            "range": "± 46052",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 521471,
            "range": "± 4242",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4210143,
            "range": "± 107966",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2505843,
            "range": "± 25049",
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
          "id": "d6fa214ed900fe1009c08ffe8a194e452e1946b8",
          "message": "chore: release v2.13.2",
          "timestamp": "2026-04-05T20:33:26+02:00",
          "tree_id": "a0b967cb692362166ffb2dad165200a91a01ce63",
          "url": "https://github.com/fallow-rs/fallow/commit/d6fa214ed900fe1009c08ffe8a194e452e1946b8"
        },
        "date": 1775414248055,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45791,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1639829,
            "range": "± 49641",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3034264,
            "range": "± 79073",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15855007,
            "range": "± 450520",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108530,
            "range": "± 1584",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1971,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 214401,
            "range": "± 3500",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 925841,
            "range": "± 25331",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1744579,
            "range": "± 28833",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 519129,
            "range": "± 6394",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4281042,
            "range": "± 186628",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2536264,
            "range": "± 12931",
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
          "id": "61c8cb97b5271f83ca4d4513c858b1b239720baa",
          "message": "fix: label health score deductions and metrics lines for clarity",
          "timestamp": "2026-04-05T20:51:48+02:00",
          "tree_id": "ba7fa121fee167c25f8595307a2f3568f1a9a007",
          "url": "https://github.com/fallow-rs/fallow/commit/61c8cb97b5271f83ca4d4513c858b1b239720baa"
        },
        "date": 1775415349229,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45968,
            "range": "± 620",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1607629,
            "range": "± 25326",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3002547,
            "range": "± 87463",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15747867,
            "range": "± 171788",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103989,
            "range": "± 1155",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2018,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 202624,
            "range": "± 7729",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 904124,
            "range": "± 21474",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1705813,
            "range": "± 18467",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 513436,
            "range": "± 5194",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4189447,
            "range": "± 28348",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2497156,
            "range": "± 10091",
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
          "id": "dca8c3017f7d2bfb056c1308ab5fa79f1262689b",
          "message": "fix: spell out maintainability instead of MI in all user-facing output",
          "timestamp": "2026-04-05T21:13:03+02:00",
          "tree_id": "2288463488835f884ca25a528766ab9ec6793602",
          "url": "https://github.com/fallow-rs/fallow/commit/dca8c3017f7d2bfb056c1308ab5fa79f1262689b"
        },
        "date": 1775416626268,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45372,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1665427,
            "range": "± 40819",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3099870,
            "range": "± 45192",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16030996,
            "range": "± 111208",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109318,
            "range": "± 957",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2021,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 207748,
            "range": "± 5935",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 926235,
            "range": "± 83247",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1740962,
            "range": "± 26666",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 518949,
            "range": "± 30391",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4273560,
            "range": "± 47296",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2560950,
            "range": "± 25544",
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
          "id": "fda33d3ec9971efb55bbdd8af7b5a3692b2f76c7",
          "message": "fix: spell out dependencies instead of deps in all user-facing output",
          "timestamp": "2026-04-05T21:27:35+02:00",
          "tree_id": "adad5ce3ef8769a12289dd302573302f9014f466",
          "url": "https://github.com/fallow-rs/fallow/commit/fda33d3ec9971efb55bbdd8af7b5a3692b2f76c7"
        },
        "date": 1775417496153,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45367,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1628117,
            "range": "± 22962",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3006337,
            "range": "± 48743",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15801688,
            "range": "± 381613",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 100387,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1966,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203403,
            "range": "± 1908",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908250,
            "range": "± 38852",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1705837,
            "range": "± 49399",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 515007,
            "range": "± 10675",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4185686,
            "range": "± 33457",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2510086,
            "range": "± 6992",
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
          "id": "35b80aaa34bf80ee10bd23b4cced2f19b0eb7162",
          "message": "fix: label combined metrics line (#46)\n\n* fix: label combined metrics line\n\n* test: tighten combined metrics regression",
          "timestamp": "2026-04-05T21:49:32+02:00",
          "tree_id": "2e750c905180aa0c886a3144036e780c2b72d59d",
          "url": "https://github.com/fallow-rs/fallow/commit/35b80aaa34bf80ee10bd23b4cced2f19b0eb7162"
        },
        "date": 1775418801962,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47171,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1614842,
            "range": "± 60540",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2999562,
            "range": "± 18199",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15607246,
            "range": "± 174160",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108218,
            "range": "± 778",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1980,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 201991,
            "range": "± 3512",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 899483,
            "range": "± 9267",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1709941,
            "range": "± 17003",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 516489,
            "range": "± 21392",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4197211,
            "range": "± 27874",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2502769,
            "range": "± 5096",
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
          "id": "e004c98ae162291e935879551bab015fc67007c8",
          "message": "fix: keep boundaries opt-in in list output (#49)\n\n* test: cover list boundaries output\n\n* fix: keep boundaries opt-in in list output\n\n* test: format list boundaries assertions",
          "timestamp": "2026-04-05T21:49:38+02:00",
          "tree_id": "1f7e8f73a733c33ede411c33fb171df104cd8892",
          "url": "https://github.com/fallow-rs/fallow/commit/e004c98ae162291e935879551bab015fc67007c8"
        },
        "date": 1775419034865,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45580,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1651189,
            "range": "± 98775",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3074077,
            "range": "± 51871",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16012322,
            "range": "± 283126",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106594,
            "range": "± 1552",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2041,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 215802,
            "range": "± 8482",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 943906,
            "range": "± 251757",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1766523,
            "range": "± 30873",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 517195,
            "range": "± 46492",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4123071,
            "range": "± 64879",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2559092,
            "range": "± 26791",
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
          "id": "e927425d6a5ec9f831f5288c5c1588ab4772e6c9",
          "message": "fix: label audit metrics line, update stale command names and plugin counts\n\n- Add \"Metrics:\" label to audit vital signs line (same fix as combined.rs)\n- Replace legacy `fallow check` with `fallow dead-code` in bench-ci.sh and\n  conformance/run.sh\n- Correct plugin count from 84 to 85 across README, docs, and rules",
          "timestamp": "2026-04-05T21:58:23+02:00",
          "tree_id": "9600cd1d2a3a9cc2e03fe018df990ae239690f19",
          "url": "https://github.com/fallow-rs/fallow/commit/e927425d6a5ec9f831f5288c5c1588ab4772e6c9"
        },
        "date": 1775419334353,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44870,
            "range": "± 1097",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1607341,
            "range": "± 30120",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3000181,
            "range": "± 17710",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15514478,
            "range": "± 91898",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 98645,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1983,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 202774,
            "range": "± 12285",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 903424,
            "range": "± 17478",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1700002,
            "range": "± 24066",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 511346,
            "range": "± 18324",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4185307,
            "range": "± 40260",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2494136,
            "range": "± 4610",
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
          "id": "8950c4c74a6d26e1bac8568f22c563e6a8fc1547",
          "message": "feat: add section headers to dead-code human output\n\nVisually separates issue types into three categories:\n- Unused Code (files, exports, types, enum/class members)\n- Dependencies (unused, unlisted, unresolved, type-only, test-only)\n- Structure (duplicate exports, circular dependencies, boundary violations)\n\nAlso updates the dead-code command description to reflect all three categories.",
          "timestamp": "2026-04-05T22:06:12+02:00",
          "tree_id": "0742bcdb9d86917d42f0e3efb66e25f0de0fb334",
          "url": "https://github.com/fallow-rs/fallow/commit/8950c4c74a6d26e1bac8568f22c563e6a8fc1547"
        },
        "date": 1775419810032,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45074,
            "range": "± 622",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1632770,
            "range": "± 77263",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2999959,
            "range": "± 13959",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15503614,
            "range": "± 201649",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107412,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1981,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213444,
            "range": "± 5419",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 920993,
            "range": "± 52054",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1701876,
            "range": "± 20884",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 513844,
            "range": "± 17757",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4192207,
            "range": "± 37410",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2520430,
            "range": "± 12964",
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
          "id": "5045d6cb72ad88570d7263331c7d829d12844a3d",
          "message": "style: apply rustfmt formatting",
          "timestamp": "2026-04-05T22:13:19+02:00",
          "tree_id": "b75c04a6ce894d948966d9181d1bd79fa605885b",
          "url": "https://github.com/fallow-rs/fallow/commit/5045d6cb72ad88570d7263331c7d829d12844a3d"
        },
        "date": 1775420236418,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 39019,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1428033,
            "range": "± 19332",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2463800,
            "range": "± 40579",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 11859545,
            "range": "± 47587",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 101694,
            "range": "± 3106",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2751,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 162228,
            "range": "± 5485",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 733896,
            "range": "± 4740",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1516181,
            "range": "± 20155",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 459645,
            "range": "± 14265",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3445342,
            "range": "± 30438",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2017652,
            "range": "± 4107",
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
          "id": "d6206bfed89d0109df56dbbc35bc73b23b4fdca0",
          "message": "chore: release v2.13.3",
          "timestamp": "2026-04-05T22:24:13+02:00",
          "tree_id": "b1101c76898b7c4c586c33b5a6060b618d0af934",
          "url": "https://github.com/fallow-rs/fallow/commit/d6206bfed89d0109df56dbbc35bc73b23b4fdca0"
        },
        "date": 1775420889604,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44865,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1646005,
            "range": "± 32658",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3029836,
            "range": "± 120288",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15684041,
            "range": "± 369913",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 100790,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2002,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211368,
            "range": "± 4207",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 916294,
            "range": "± 22395",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1719854,
            "range": "± 22246",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 525774,
            "range": "± 24972",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4210000,
            "range": "± 44092",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2523271,
            "range": "± 71783",
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
          "id": "628c8db924d10eed320430184edaf6727965fdad",
          "message": "fix: keep unreachable subtrees dead in unused file analysis (#51)\n\n* fix: keep unreachable subtrees dead in unused file analysis\n\n* test: cover unreachable subtree edge cases",
          "timestamp": "2026-04-06T08:27:17+02:00",
          "tree_id": "b9ad3f1b02c24e54504db1e198ad3b5f5797ded5",
          "url": "https://github.com/fallow-rs/fallow/commit/628c8db924d10eed320430184edaf6727965fdad"
        },
        "date": 1775457072525,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44254,
            "range": "± 779",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1602161,
            "range": "± 21546",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3002492,
            "range": "± 27175",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15415757,
            "range": "± 96878",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 99106,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2003,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203293,
            "range": "± 4850",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 903343,
            "range": "± 82033",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1697135,
            "range": "± 17967",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 521412,
            "range": "± 19210",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4181725,
            "range": "± 43706",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2519369,
            "range": "± 10580",
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
          "id": "648d91f5881a848de6189cb5de659e2f1bb78243",
          "message": "fix: prevent false positive unused exports from namespace exports (#52)\n\nTypeScript namespace inner exports (e.g., `export namespace Foo { export function bar() {} }`)\nwere incorrectly extracted as independent top-level module exports, causing them to be reported\nas unused even when accessed via `Foo.bar()`.\n\nThree interacting bugs:\n- TSModuleDeclaration always used push_type_export (type-only), even for runtime namespaces\n- AST walker descended into namespace body, extracting inner exports as flat top-level exports\n- Member accesses like Foo.bar() were never matched back to the leaked inner exports\n\nFix: track namespace nesting depth during extraction. Inner exports are now collected as\nMemberInfo entries (NamespaceMember kind) on the namespace's ExportInfo, not as separate\ntop-level exports. Runtime namespaces (no `declare`) are correctly marked as non-type-only.",
          "timestamp": "2026-04-06T09:15:24+02:00",
          "tree_id": "ef33fb35393add8b81c93fe291c4e068e6b7cc82",
          "url": "https://github.com/fallow-rs/fallow/commit/648d91f5881a848de6189cb5de659e2f1bb78243"
        },
        "date": 1775459973814,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44249,
            "range": "± 1220",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1666528,
            "range": "± 35658",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3016776,
            "range": "± 46786",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16692619,
            "range": "± 554693",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105027,
            "range": "± 1585",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2000,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212685,
            "range": "± 4178",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 913195,
            "range": "± 17430",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1713266,
            "range": "± 46714",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532369,
            "range": "± 12369",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4265269,
            "range": "± 52378",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2509502,
            "range": "± 6957",
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
          "id": "c78e241a27479311715dedcc0d8984bed19a4ec1",
          "message": "chore: release v2.13.4",
          "timestamp": "2026-04-06T09:17:00+02:00",
          "tree_id": "14a7d5c9dabd8525133e2294870a812b20e744ba",
          "url": "https://github.com/fallow-rs/fallow/commit/c78e241a27479311715dedcc0d8984bed19a4ec1"
        },
        "date": 1775460249290,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45574,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1609681,
            "range": "± 51791",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3000233,
            "range": "± 22412",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15471723,
            "range": "± 81941",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 100655,
            "range": "± 868",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2000,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205202,
            "range": "± 3400",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 913633,
            "range": "± 36815",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1712946,
            "range": "± 20089",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 516788,
            "range": "± 5563",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4187346,
            "range": "± 39587",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2525039,
            "range": "± 10232",
            "unit": "ns/iter"
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
          "id": "80669b3be214442eecf11be73a2beecdc7eeff0a",
          "message": "feat: add static coverage gaps to health (#53)\n\nfeat: add static coverage gaps to health",
          "timestamp": "2026-04-06T13:12:58+02:00",
          "tree_id": "1af722df2d997da5666ed7be4df0bd686e6896d9",
          "url": "https://github.com/fallow-rs/fallow/commit/80669b3be214442eecf11be73a2beecdc7eeff0a"
        },
        "date": 1775474210636,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 36109,
            "range": "± 1483",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1681712,
            "range": "± 25322",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3086839,
            "range": "± 24959",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16302482,
            "range": "± 74195",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104314,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2029,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 176970,
            "range": "± 22200",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 783025,
            "range": "± 16053",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1655964,
            "range": "± 30423",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 508976,
            "range": "± 34045",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3623461,
            "range": "± 45343",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2119395,
            "range": "± 9365",
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
          "id": "53ded201ee9e51db70149cd87a16d6ce72061862",
          "message": "chore: release v2.14.0",
          "timestamp": "2026-04-06T13:16:34+02:00",
          "tree_id": "39bf7d0362d3c175eb5dc2b853ba478b9dc94ccd",
          "url": "https://github.com/fallow-rs/fallow/commit/53ded201ee9e51db70149cd87a16d6ce72061862"
        },
        "date": 1775474445715,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45524,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1627908,
            "range": "± 111333",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3009120,
            "range": "± 93015",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15534041,
            "range": "± 86953",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108830,
            "range": "± 1005",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2003,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203688,
            "range": "± 7597",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908004,
            "range": "± 18391",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1693532,
            "range": "± 56519",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 516547,
            "range": "± 31402",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4191299,
            "range": "± 44304",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2507262,
            "range": "± 86196",
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
          "id": "f0eabbe1001a8bae4619bf0872c68539003bc8ca",
          "message": "feat: coverage gap improvements and MCP integration\n\n- Add suppress-file action to coverage gap JSON output for incremental adoption\n- Filter CSS/SCSS/LESS/SASS files from coverage gap analysis (not testable)\n- Group barrel file re-exports in human output (collapse >10 exports per file)\n- Add coverage_gaps param to MCP health tool with description update",
          "timestamp": "2026-04-06T16:43:37+02:00",
          "tree_id": "cc7a7021c6e739fa32f2b7d6b784ed09f762b3f0",
          "url": "https://github.com/fallow-rs/fallow/commit/f0eabbe1001a8bae4619bf0872c68539003bc8ca"
        },
        "date": 1775486855342,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45087,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1627546,
            "range": "± 26583",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2999106,
            "range": "± 27031",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15495938,
            "range": "± 87026",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104233,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1988,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203332,
            "range": "± 6974",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 906196,
            "range": "± 44015",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1694952,
            "range": "± 46126",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 526850,
            "range": "± 31324",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4186527,
            "range": "± 29946",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2515980,
            "range": "± 6126",
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
          "id": "75402d16385f847b68829c094a7de09814bf892b",
          "message": "feat: coverage gap improvements and MCP integration\n\n- Add suppress-file action to coverage gap JSON output for incremental adoption\n- Filter CSS/SCSS/LESS/SASS files from coverage gap analysis (not testable)\n- Group barrel file re-exports in human output (collapse >10 exports per file)\n- Add coverage_gaps param to MCP health tool with description update",
          "timestamp": "2026-04-06T16:45:28+02:00",
          "tree_id": "9a27c1520453daaa495a9196eae39f79e17e02c6",
          "url": "https://github.com/fallow-rs/fallow/commit/75402d16385f847b68829c094a7de09814bf892b"
        },
        "date": 1775487104151,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44482,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1631460,
            "range": "± 27114",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3055573,
            "range": "± 152610",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16720247,
            "range": "± 696181",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104762,
            "range": "± 765",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1983,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204043,
            "range": "± 1414",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 911694,
            "range": "± 181360",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1714162,
            "range": "± 22016",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530038,
            "range": "± 11339",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4253836,
            "range": "± 40320",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2531588,
            "range": "± 14498",
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
          "id": "f1aee24dc81bf57ac0940a59ac790e6ae2e2230f",
          "message": "feat: wire coverage-gaps into inline suppression system\n\nAdd IssueKind::CoverageGaps variant (discriminant 16) so\n`// fallow-ignore-file coverage-gaps` comments are parsed and\nhonored. Coverage gap analysis now checks file suppressions\nbefore counting runtime files or reporting untested exports.",
          "timestamp": "2026-04-06T16:51:00+02:00",
          "tree_id": "d1de27ff0e3c8ceead662d4676096233f82c4dc5",
          "url": "https://github.com/fallow-rs/fallow/commit/f1aee24dc81bf57ac0940a59ac790e6ae2e2230f"
        },
        "date": 1775487338797,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45664,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1673925,
            "range": "± 29856",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3070781,
            "range": "± 96419",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15842824,
            "range": "± 207284",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 99958,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1994,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 203656,
            "range": "± 3263",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908285,
            "range": "± 19975",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1714882,
            "range": "± 21705",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 512982,
            "range": "± 10823",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4221568,
            "range": "± 52775",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2513680,
            "range": "± 36032",
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
          "id": "ee2a012538ca83af772fa0bd87a7d3ef9a28bb93",
          "message": "test: add integration test for coverage-gaps inline suppression\n\nVerifies that `// fallow-ignore-file coverage-gaps` excludes a file\nand its exports from coverage gap analysis end-to-end.",
          "timestamp": "2026-04-06T17:17:48+02:00",
          "tree_id": "b35275bb72554cc68c5bacac3d5100d0ec05c02e",
          "url": "https://github.com/fallow-rs/fallow/commit/ee2a012538ca83af772fa0bd87a7d3ef9a28bb93"
        },
        "date": 1775488907088,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45622,
            "range": "± 592",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1649431,
            "range": "± 29294",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3005444,
            "range": "± 24334",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15666703,
            "range": "± 347094",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110816,
            "range": "± 1090",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1980,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 207925,
            "range": "± 3897",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 906230,
            "range": "± 57230",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1715805,
            "range": "± 29609",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 515913,
            "range": "± 5656",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4200114,
            "range": "± 43195",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2500991,
            "range": "± 4639",
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
          "id": "15302258efc225303ba4d0f0ca6354a1752dd639",
          "message": "chore: release v2.14.1",
          "timestamp": "2026-04-06T17:19:13+02:00",
          "tree_id": "8808c56d3dbcecda57ea97b0fa89311d55e21989",
          "url": "https://github.com/fallow-rs/fallow/commit/15302258efc225303ba4d0f0ca6354a1752dd639"
        },
        "date": 1775489146667,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45340,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1654986,
            "range": "± 26959",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3010900,
            "range": "± 25729",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15534006,
            "range": "± 83428",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110850,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2035,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 229736,
            "range": "± 29942",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 930249,
            "range": "± 16731",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1708612,
            "range": "± 20917",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 511220,
            "range": "± 28493",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4179593,
            "range": "± 42194",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2512254,
            "range": "± 4343",
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
          "id": "3ffa128a9c0d90ee1c1cdb418e7090df65407f0e",
          "message": "fix: reduce false positives for type-only cycles and duplicate exports\n\nTwo detection accuracy improvements addressing #54:\n\n1. Type-only circular dependency filtering: `import type` edges now carry\n   `is_type_only` through `ImportedSymbol` to cycle detection. Edges where\n   all symbols are type-only are excluded from Tarjan's SCC, preventing\n   false circular dependency reports from type-only bidirectional imports.\n\n2. Duplicate export common-importer filter: duplicate exports are only\n   reported when at least two files sharing the same export name also share\n   a common importer in the module graph. Unrelated leaf files (e.g.,\n   SvelteKit route modules in different directories) that coincidentally\n   export the same name are no longer flagged.",
          "timestamp": "2026-04-06T19:38:24+02:00",
          "tree_id": "b4c6199b69b7d632d29da37f24c6fcf16b02be7b",
          "url": "https://github.com/fallow-rs/fallow/commit/3ffa128a9c0d90ee1c1cdb418e7090df65407f0e"
        },
        "date": 1775498194623,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44654,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1645536,
            "range": "± 21335",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3008298,
            "range": "± 26216",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15535415,
            "range": "± 70064",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 101387,
            "range": "± 1098",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1993,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212983,
            "range": "± 2284",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 914488,
            "range": "± 15211",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1715305,
            "range": "± 25400",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 510659,
            "range": "± 9039",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4161984,
            "range": "± 26479",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2507414,
            "range": "± 9777",
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
          "id": "1a6a31fba5b6e99386ba0da57de85cc6ccfc2ca7",
          "message": "test: add integration test fixtures for type-only cycles and duplicate exports\n\nEnd-to-end fixtures validating the #54 false positive fixes:\n\n- type-only-cycle: user.ts and post.ts with bidirectional `import type`\n  verifies no circular dependency is reported\n- route-duplicate-exports: SvelteKit-style route files with same export\n  names but separate importers, plus shared utils with a common importer\n  verifies the common-importer filter works correctly",
          "timestamp": "2026-04-06T20:07:51+02:00",
          "tree_id": "1ebfb190a1ab67ffabcf86866a1257e737c9e92b",
          "url": "https://github.com/fallow-rs/fallow/commit/1a6a31fba5b6e99386ba0da57de85cc6ccfc2ca7"
        },
        "date": 1775499117070,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44202,
            "range": "± 675",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1653464,
            "range": "± 15217",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3038650,
            "range": "± 37686",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17308323,
            "range": "± 437322",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 101223,
            "range": "± 4729",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1997,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 209859,
            "range": "± 5878",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 910391,
            "range": "± 35440",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1704498,
            "range": "± 19177",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 521865,
            "range": "± 6807",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4203405,
            "range": "± 33419",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2513684,
            "range": "± 9515",
            "unit": "ns/iter"
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
          "id": "da2dc07b4718a9331880bea23705c3b593eea056",
          "message": "Merge pull request #58 from M-Hassan-Raza/feat/sfc-template-usage\n\nfeat: track template-visible import usage in SFCs",
          "timestamp": "2026-04-06T20:15:42+02:00",
          "tree_id": "bc7e6477f60ffabd9b94c0c528b4f7cc1687a41f",
          "url": "https://github.com/fallow-rs/fallow/commit/da2dc07b4718a9331880bea23705c3b593eea056"
        },
        "date": 1775499599739,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44696,
            "range": "± 2374",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1674437,
            "range": "± 21630",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3048671,
            "range": "± 38078",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15541738,
            "range": "± 89255",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109973,
            "range": "± 366",
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
            "value": 206142,
            "range": "± 15630",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 920150,
            "range": "± 11650",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1705167,
            "range": "± 18222",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 515213,
            "range": "± 33486",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4221513,
            "range": "± 44222",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2534599,
            "range": "± 4223",
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
          "id": "4bdb26a6ae0c90b99945a56f95f70f88def04245",
          "message": "fix: bump CACHE_VERSION to 20 for SFC template extraction changes",
          "timestamp": "2026-04-06T20:20:41+02:00",
          "tree_id": "1470ce28f39fc28ed720ba0d3bb594643e63d462",
          "url": "https://github.com/fallow-rs/fallow/commit/4bdb26a6ae0c90b99945a56f95f70f88def04245"
        },
        "date": 1775499884201,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44612,
            "range": "± 1547",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1688896,
            "range": "± 39038",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3089406,
            "range": "± 56114",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15783193,
            "range": "± 331543",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105658,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1985,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205746,
            "range": "± 4074",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 917740,
            "range": "± 258026",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1714439,
            "range": "± 35769",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 522070,
            "range": "± 38419",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4292753,
            "range": "± 35462",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2568245,
            "range": "± 10191",
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
          "id": "949316dd543825d8ad1ec0992415039aa821fecf",
          "message": "fix: use dunce::canonicalize to avoid \\?\\ path prefix on Windows (#55)",
          "timestamp": "2026-04-06T20:25:00+02:00",
          "tree_id": "4e1a65ae2d493c70c97a1392752a0638b41c589e",
          "url": "https://github.com/fallow-rs/fallow/commit/949316dd543825d8ad1ec0992415039aa821fecf"
        },
        "date": 1775500137544,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46008,
            "range": "± 1102",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1678279,
            "range": "± 29788",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3074336,
            "range": "± 117117",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15747867,
            "range": "± 69558",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105365,
            "range": "± 1601",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1965,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204406,
            "range": "± 2369",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 908087,
            "range": "± 31370",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1701215,
            "range": "± 21568",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 515825,
            "range": "± 28229",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4183775,
            "range": "± 28845",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2520438,
            "range": "± 4120",
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
          "id": "e00f1724786da9266e6bae510fb350cd6c855b11",
          "message": "fix: propagate generated_import_patterns and path_aliases from workspace plugins\n\nThe workspace plugin merge loop was not merging generated_import_patterns\nor path_aliases from workspace-level plugins. This caused SvelteKit's\n$types suppression and $lib/ alias to silently fail in monorepo setups,\nproducing false-positive unresolved imports for every ./$types reference.\n\nFixes #54 ($types portion)",
          "timestamp": "2026-04-06T21:14:36+02:00",
          "tree_id": "b72c49f555266cd57cd6fc4e65621888153bb58b",
          "url": "https://github.com/fallow-rs/fallow/commit/e00f1724786da9266e6bae510fb350cd6c855b11"
        },
        "date": 1775503115210,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45712,
            "range": "± 1760",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1687257,
            "range": "± 17548",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3057771,
            "range": "± 60835",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15864465,
            "range": "± 304423",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111006,
            "range": "± 582",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1972,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 204098,
            "range": "± 2153",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 907587,
            "range": "± 49570",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1703915,
            "range": "± 38987",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 515913,
            "range": "± 27933",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4197168,
            "range": "± 47956",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2507781,
            "range": "± 8877",
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
          "id": "a670b7c16f6c7884435991b27c1def4831a38c95",
          "message": "chore: release v2.14.2",
          "timestamp": "2026-04-06T21:16:27+02:00",
          "tree_id": "997d4c73cb95682678e33ed2a09af6bb0414c6a9",
          "url": "https://github.com/fallow-rs/fallow/commit/a670b7c16f6c7884435991b27c1def4831a38c95"
        },
        "date": 1775503412167,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45855,
            "range": "± 1007",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1674843,
            "range": "± 44808",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3044050,
            "range": "± 41932",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16274363,
            "range": "± 589965",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107041,
            "range": "± 1218",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1977,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 243774,
            "range": "± 6114",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1043716,
            "range": "± 37609",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1756198,
            "range": "± 57509",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 520343,
            "range": "± 10602",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4060210,
            "range": "± 65255",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2636137,
            "range": "± 27900",
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
          "id": "52029bed1d363f0fc43035201762e64d763a2705",
          "message": "feat: expand framework convention and template coverage (#59)\n\n- Expand Next.js convention handling: App Router/Pages Router special files,\n  route segment exports, mdx-components, instrumentation, proxy, and\n  transpilePackages treated as framework usage\n- Parse config aliases for Vite, Nuxt, and SvelteKit, feed into resolver\n  fallbacks so config-defined aliases stop producing false reports\n- Improve Vue and Svelte SFC template extraction: component tags, custom\n  directives, v-on=\"handlers\", Svelte attribute expressions, shorthand\n  props, and $store subscriptions mark imports as used\n- Harden unused export analysis so entry-point files with framework-used\n  exports still report unrelated unused helpers\n- Add Nuxt srcDir support with custom alias, imports.dirs, and components\n  directory detection\n- Bump CACHE_VERSION to 21 for new template extraction semantics\n- Fix Svelte template scanner index advancement after HTML tag parsing\n- Fix panic on malformed Svelte brace attribute expressions\n\nCloses #59",
          "timestamp": "2026-04-06T22:48:19+02:00",
          "tree_id": "9908c120264b7097d39be203e0d3e837b3e752b6",
          "url": "https://github.com/fallow-rs/fallow/commit/52029bed1d363f0fc43035201762e64d763a2705"
        },
        "date": 1775508774132,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45324,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1694416,
            "range": "± 19173",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3080390,
            "range": "± 29869",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16281353,
            "range": "± 260481",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110266,
            "range": "± 755",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2014,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211892,
            "range": "± 5297",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 932364,
            "range": "± 36117",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1744299,
            "range": "± 16332",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536187,
            "range": "± 18010",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4285394,
            "range": "± 29723",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2585061,
            "range": "± 11674",
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
          "id": "1749b8ecacdd45be89a43c09973aab43f87cd249",
          "message": "chore: release v2.15.0",
          "timestamp": "2026-04-06T22:50:09+02:00",
          "tree_id": "e3d485f2fafdd21638a43a93a6644736c262c389",
          "url": "https://github.com/fallow-rs/fallow/commit/1749b8ecacdd45be89a43c09973aab43f87cd249"
        },
        "date": 1775509014666,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 39526,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1490320,
            "range": "± 47332",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2555461,
            "range": "± 30806",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 13124059,
            "range": "± 369801",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104776,
            "range": "± 3530",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2859,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 163319,
            "range": "± 3105",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 736403,
            "range": "± 5432",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1536243,
            "range": "± 23006",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 492281,
            "range": "± 19683",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3586837,
            "range": "± 46844",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2035268,
            "range": "± 12876",
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
          "id": "e9f639c22ee528aa40afcd90423172db148df8f4",
          "message": "chore: release v2.15.0",
          "timestamp": "2026-04-06T23:03:18+02:00",
          "tree_id": "e3d485f2fafdd21638a43a93a6644736c262c389",
          "url": "https://github.com/fallow-rs/fallow/commit/e9f639c22ee528aa40afcd90423172db148df8f4"
        },
        "date": 1775509688199,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44194,
            "range": "± 1454",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1669893,
            "range": "± 36448",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3035554,
            "range": "± 32547",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15800009,
            "range": "± 512331",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109038,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1984,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 205385,
            "range": "± 2493",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 915165,
            "range": "± 18692",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1717343,
            "range": "± 15113",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 513823,
            "range": "± 36511",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4233244,
            "range": "± 40077",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2533608,
            "range": "± 3339",
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
      }
    ]
  }
}