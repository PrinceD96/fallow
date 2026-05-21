window.BENCHMARK_DATA = {
  "lastUpdate": 1779363732904,
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
          "id": "7445a42021e50bca8cb498929dbdca192023a1ef",
          "message": "chore: shrink VS Code extension package and add CSS path alias tests\n\n- .vscodeignore now excludes pnpm-lock.yaml, .fallow/, .test-dist/,\n  test/, vitest.config.mts, tsconfig.test.json, and .fallowrc.json.\n  Reduces the VSIX from 192KB to 100KB (48% smaller).\n- Add regression tests for CSS path aliases (@/components/Button.css)\n  sharing the @-prefix with scoped packages. Path aliases must stay\n  bare so the resolver's alias path handles them.",
          "timestamp": "2026-04-10T22:26:29+02:00",
          "tree_id": "916a746b341c25a8e02c3aa4935c7446cd630dc1",
          "url": "https://github.com/fallow-rs/fallow/commit/7445a42021e50bca8cb498929dbdca192023a1ef"
        },
        "date": 1775853178079,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44164,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1757416,
            "range": "± 23874",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3105604,
            "range": "± 93357",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15364807,
            "range": "± 73116",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110348,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2032,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 214398,
            "range": "± 21762",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 958712,
            "range": "± 12047",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1741668,
            "range": "± 35101",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 527070,
            "range": "± 30834",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4161393,
            "range": "± 63428",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2654305,
            "range": "± 19150",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775853581056,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43642,
            "range": "± 1172",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1766350,
            "range": "± 17380",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3117622,
            "range": "± 57488",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15428242,
            "range": "± 53628",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106007,
            "range": "± 1951",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2047,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212404,
            "range": "± 6206",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 946674,
            "range": "± 10281",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1719260,
            "range": "± 20971",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 520501,
            "range": "± 29805",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4355487,
            "range": "± 39512",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2632321,
            "range": "± 5978",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775853852249,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44335,
            "range": "± 805",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1791128,
            "range": "± 23102",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3152975,
            "range": "± 46100",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16336871,
            "range": "± 586424",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108775,
            "range": "± 2087",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2043,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213410,
            "range": "± 5898",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 952340,
            "range": "± 305097",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1738162,
            "range": "± 16857",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531553,
            "range": "± 32937",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4209814,
            "range": "± 37864",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2622768,
            "range": "± 21796",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775856411453,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35365,
            "range": "± 746",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1818676,
            "range": "± 45750",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3234190,
            "range": "± 19211",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16366153,
            "range": "± 217688",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109044,
            "range": "± 869",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2096,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 174684,
            "range": "± 5257",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 772021,
            "range": "± 9215",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1627285,
            "range": "± 26677",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 506996,
            "range": "± 34512",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3582562,
            "range": "± 58338",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2082466,
            "range": "± 17900",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775857303548,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44090,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1775552,
            "range": "± 24970",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3168250,
            "range": "± 37499",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17026405,
            "range": "± 461637",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115236,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2011,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 219644,
            "range": "± 10086",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 961689,
            "range": "± 29651",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1754709,
            "range": "± 33102",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535996,
            "range": "± 33499",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4307905,
            "range": "± 64786",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2708736,
            "range": "± 23898",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775857941476,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34820,
            "range": "± 1317",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1804655,
            "range": "± 22166",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3206532,
            "range": "± 23618",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17536285,
            "range": "± 556719",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106777,
            "range": "± 847",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2058,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 175204,
            "range": "± 2780",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 768640,
            "range": "± 17890",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1629462,
            "range": "± 21839",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 504909,
            "range": "± 23763",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3551444,
            "range": "± 32624",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2066688,
            "range": "± 13925",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1775858488404,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35537,
            "range": "± 694",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1808057,
            "range": "± 33379",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3228942,
            "range": "± 19241",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17135552,
            "range": "± 279143",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112740,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2074,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 174124,
            "range": "± 5446",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 773835,
            "range": "± 7641",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1647501,
            "range": "± 252578",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 511468,
            "range": "± 8621",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3599304,
            "range": "± 45997",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2083527,
            "range": "± 11456",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775858962731,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44347,
            "range": "± 746",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1781517,
            "range": "± 25117",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3134574,
            "range": "± 31802",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15349319,
            "range": "± 115730",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109291,
            "range": "± 811",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2023,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 210288,
            "range": "± 6009",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 945836,
            "range": "± 17104",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1729522,
            "range": "± 24281",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 525331,
            "range": "± 13696",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4364587,
            "range": "± 82473",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2627697,
            "range": "± 4787",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1775860114621,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44996,
            "range": "± 1089",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1773121,
            "range": "± 57485",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3131826,
            "range": "± 29678",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15844550,
            "range": "± 446574",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111078,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2024,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211757,
            "range": "± 5190",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 950487,
            "range": "± 8964",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1727950,
            "range": "± 18094",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 526997,
            "range": "± 31835",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4332032,
            "range": "± 48238",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2630925,
            "range": "± 18769",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775860376066,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44236,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1772186,
            "range": "± 27015",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3149257,
            "range": "± 122963",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15413383,
            "range": "± 65773",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112744,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2025,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213641,
            "range": "± 4110",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 959325,
            "range": "± 107347",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1750678,
            "range": "± 28291",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531402,
            "range": "± 27302",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4243526,
            "range": "± 33228",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2661046,
            "range": "± 5701",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775906543706,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44329,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1770796,
            "range": "± 40195",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3098507,
            "range": "± 107824",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15245424,
            "range": "± 126133",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106697,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2011,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211620,
            "range": "± 1247",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 954312,
            "range": "± 11096",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1736839,
            "range": "± 19018",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531301,
            "range": "± 28376",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4345132,
            "range": "± 46715",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2638856,
            "range": "± 8657",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775927574000,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44665,
            "range": "± 1137",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1783383,
            "range": "± 23410",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3142158,
            "range": "± 22308",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15385942,
            "range": "± 81960",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109547,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2286,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 216999,
            "range": "± 4619",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1003102,
            "range": "± 30268",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1845897,
            "range": "± 49956",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 546208,
            "range": "± 54480",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4440739,
            "range": "± 62448",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2693698,
            "range": "± 73170",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775928113506,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 42985,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1803767,
            "range": "± 40900",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3130485,
            "range": "± 38043",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15378174,
            "range": "± 81295",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106554,
            "range": "± 1301",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2070,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213197,
            "range": "± 1678",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 956811,
            "range": "± 11668",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1756959,
            "range": "± 19415",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531195,
            "range": "± 31187",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4372629,
            "range": "± 35600",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2639460,
            "range": "± 9465",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775933673292,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43760,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1775842,
            "range": "± 75343",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3146404,
            "range": "± 37241",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16480335,
            "range": "± 240874",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112763,
            "range": "± 3487",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2022,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212661,
            "range": "± 8664",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 951695,
            "range": "± 11088",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1733470,
            "range": "± 23009",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 548352,
            "range": "± 17896",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4238642,
            "range": "± 39380",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2653739,
            "range": "± 13345",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775936438900,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 37863,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1533410,
            "range": "± 27216",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2566488,
            "range": "± 41580",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 11898673,
            "range": "± 507735",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114422,
            "range": "± 2909",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2829,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157061,
            "range": "± 4815",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 717734,
            "range": "± 44646",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1508156,
            "range": "± 20100",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 462583,
            "range": "± 13638",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3324494,
            "range": "± 57948",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1974922,
            "range": "± 21450",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775940445482,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43982,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1788326,
            "range": "± 67462",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3129131,
            "range": "± 28122",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15437935,
            "range": "± 297862",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113784,
            "range": "± 1603",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2018,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213349,
            "range": "± 3296",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 958887,
            "range": "± 9128",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1743266,
            "range": "± 116347",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531302,
            "range": "± 15481",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4241275,
            "range": "± 51168",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2652348,
            "range": "± 19579",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775940860405,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44378,
            "range": "± 1918",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1786191,
            "range": "± 26234",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3143993,
            "range": "± 36118",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15833847,
            "range": "± 308319",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110902,
            "range": "± 2287",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2006,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213585,
            "range": "± 1713",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 950830,
            "range": "± 20004",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1727482,
            "range": "± 18754",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532505,
            "range": "± 31320",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4185286,
            "range": "± 46284",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2672698,
            "range": "± 6842",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775979579798,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43259,
            "range": "± 1000",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1777169,
            "range": "± 55290",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3122788,
            "range": "± 73789",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15480647,
            "range": "± 112897",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115067,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2043,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213966,
            "range": "± 1691",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 961265,
            "range": "± 10395",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1738693,
            "range": "± 19541",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 529903,
            "range": "± 10155",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4411031,
            "range": "± 37570",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2655579,
            "range": "± 5894",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775979985732,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 38253,
            "range": "± 679",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1540580,
            "range": "± 33880",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2543749,
            "range": "± 19941",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 11684629,
            "range": "± 261894",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110240,
            "range": "± 3726",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2800,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157546,
            "range": "± 3334",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 704510,
            "range": "± 4751",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1485959,
            "range": "± 24129",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 453358,
            "range": "± 8467",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3293595,
            "range": "± 43142",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1938392,
            "range": "± 10585",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775981198342,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34949,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1802912,
            "range": "± 27102",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3220617,
            "range": "± 19740",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16123824,
            "range": "± 152211",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 100150,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2849,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 173652,
            "range": "± 1612",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 764968,
            "range": "± 11417",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1656329,
            "range": "± 23102",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 505345,
            "range": "± 34543",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3605918,
            "range": "± 44266",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2079298,
            "range": "± 11243",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775981770365,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44312,
            "range": "± 1444",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1769315,
            "range": "± 58749",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3116443,
            "range": "± 22971",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15685984,
            "range": "± 162258",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109712,
            "range": "± 3771",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2018,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 215711,
            "range": "± 6330",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 966082,
            "range": "± 10951",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1749367,
            "range": "± 17479",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537409,
            "range": "± 21688",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4227504,
            "range": "± 54403",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2653504,
            "range": "± 8378",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1775982055282,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 37577,
            "range": "± 1328",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1542834,
            "range": "± 32961",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2546820,
            "range": "± 15135",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 11748359,
            "range": "± 110175",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106758,
            "range": "± 6215",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2951,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157008,
            "range": "± 1235",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 707401,
            "range": "± 9754",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1493683,
            "range": "± 13821",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 467710,
            "range": "± 14369",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3309972,
            "range": "± 65644",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1916978,
            "range": "± 32413",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776032089250,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43620,
            "range": "± 2844",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1757120,
            "range": "± 17123",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3126756,
            "range": "± 29609",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15462264,
            "range": "± 86606",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106633,
            "range": "± 687",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2016,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211719,
            "range": "± 6321",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 946195,
            "range": "± 7970",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1747010,
            "range": "± 14488",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 527919,
            "range": "± 14661",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4392695,
            "range": "± 28093",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2626823,
            "range": "± 4407",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776032832837,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34891,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1808737,
            "range": "± 21326",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3220577,
            "range": "± 74264",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16355683,
            "range": "± 554629",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106791,
            "range": "± 2414",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2065,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 173828,
            "range": "± 2093",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 764304,
            "range": "± 6736",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1628842,
            "range": "± 16027",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 507141,
            "range": "± 27894",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3565332,
            "range": "± 61988",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2072057,
            "range": "± 36346",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776065681648,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 38343,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1544786,
            "range": "± 21234",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2560036,
            "range": "± 60282",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 11679958,
            "range": "± 45667",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106639,
            "range": "± 3193",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2825,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 155987,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 698994,
            "range": "± 7891",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1498360,
            "range": "± 21061",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 456789,
            "range": "± 8045",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3299843,
            "range": "± 19800",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1908372,
            "range": "± 13142",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1776067129908,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34822,
            "range": "± 711",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1796620,
            "range": "± 21289",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3218145,
            "range": "± 17541",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16627621,
            "range": "± 572809",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 100995,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2072,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 175183,
            "range": "± 1913",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 774024,
            "range": "± 19278",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1628154,
            "range": "± 42069",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 508916,
            "range": "± 34058",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3573495,
            "range": "± 36771",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2081958,
            "range": "± 46688",
            "unit": "ns/iter"
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
        "date": 1776068613836,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 38416,
            "range": "± 1022",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1565320,
            "range": "± 26756",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2599366,
            "range": "± 35288",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 12367239,
            "range": "± 214969",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108188,
            "range": "± 2174",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2836,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156812,
            "range": "± 4185",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 707727,
            "range": "± 6369",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1487785,
            "range": "± 22743",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 453848,
            "range": "± 14299",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3258453,
            "range": "± 76096",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1979314,
            "range": "± 15394",
            "unit": "ns/iter"
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
        "date": 1776070131518,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34403,
            "range": "± 1573",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1799843,
            "range": "± 22638",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3231247,
            "range": "± 16770",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17246971,
            "range": "± 206356",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103099,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2103,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 175495,
            "range": "± 2287",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 775274,
            "range": "± 6619",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1634652,
            "range": "± 23725",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 515582,
            "range": "± 23981",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3641033,
            "range": "± 46125",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2097574,
            "range": "± 8855",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776080092608,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44746,
            "range": "± 1973",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1790519,
            "range": "± 18252",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3141898,
            "range": "± 29913",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15344918,
            "range": "± 43171",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109779,
            "range": "± 1023",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2082,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213551,
            "range": "± 3421",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 960815,
            "range": "± 22603",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1737071,
            "range": "± 20741",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530532,
            "range": "± 27754",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4221577,
            "range": "± 46576",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2678929,
            "range": "± 4218",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776080392721,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43855,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1784696,
            "range": "± 38183",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3135784,
            "range": "± 30372",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16164313,
            "range": "± 297332",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113168,
            "range": "± 621",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2049,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212046,
            "range": "± 5991",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 947983,
            "range": "± 230945",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1735921,
            "range": "± 25962",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536614,
            "range": "± 15024",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4205135,
            "range": "± 38241",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2640403,
            "range": "± 16660",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776081283402,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45354,
            "range": "± 1438",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1745140,
            "range": "± 17005",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3117957,
            "range": "± 29646",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15357630,
            "range": "± 64609",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113474,
            "range": "± 2848",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2026,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211942,
            "range": "± 8033",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 946482,
            "range": "± 34508",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1726337,
            "range": "± 22969",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 527133,
            "range": "± 30094",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4200674,
            "range": "± 44695",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2632633,
            "range": "± 104435",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776081537407,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 38594,
            "range": "± 697",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1547615,
            "range": "± 35165",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2547721,
            "range": "± 42235",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 11719463,
            "range": "± 215163",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109747,
            "range": "± 5130",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2810,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156821,
            "range": "± 5204",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 709353,
            "range": "± 9110",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1504659,
            "range": "± 16640",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 455700,
            "range": "± 4480",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3303944,
            "range": "± 17851",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1971875,
            "range": "± 10579",
            "unit": "ns/iter"
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
        "date": 1776082779124,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44833,
            "range": "± 712",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1772233,
            "range": "± 22207",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3153113,
            "range": "± 37212",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15885002,
            "range": "± 327720",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108495,
            "range": "± 1559",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2093,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213603,
            "range": "± 7215",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 955917,
            "range": "± 9227",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1773269,
            "range": "± 23565",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537292,
            "range": "± 29284",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4225125,
            "range": "± 33422",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2650135,
            "range": "± 18117",
            "unit": "ns/iter"
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
        "date": 1776083030280,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 39029,
            "range": "± 1244",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1565655,
            "range": "± 27696",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 2606953,
            "range": "± 38118",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 12393687,
            "range": "± 191565",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103385,
            "range": "± 3182",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2836,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156802,
            "range": "± 1550",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 721911,
            "range": "± 17925",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1503340,
            "range": "± 16216",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 455779,
            "range": "± 11344",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3282279,
            "range": "± 25085",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2055885,
            "range": "± 11426",
            "unit": "ns/iter"
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
        "date": 1776091311041,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45656,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1764131,
            "range": "± 20860",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3147521,
            "range": "± 26502",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15602145,
            "range": "± 138996",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108487,
            "range": "± 967",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2036,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 214108,
            "range": "± 3521",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 962753,
            "range": "± 10326",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1752047,
            "range": "± 19173",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 528888,
            "range": "± 29875",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4238913,
            "range": "± 31573",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2663834,
            "range": "± 4011",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "f0efabefc8f162fb96b4e44b325f6fc2aac6f9e3",
          "message": "feat: add ignoreImports option to exclude imports from duplication detection\n\nAdd `ignoreImports` config option and `--ignore-imports` CLI flag that\nstrips ES import declarations from the token stream before clone\ndetection. Reduces noise from sorted import blocks that naturally look\nsimilar across files.\n\nCloses #113",
          "timestamp": "2026-04-13T19:56:18+02:00",
          "tree_id": "c51384d5672b9ec0a8ded6962702190e1d8dc23f",
          "url": "https://github.com/fallow-rs/fallow/commit/f0efabefc8f162fb96b4e44b325f6fc2aac6f9e3"
        },
        "date": 1776103235243,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44712,
            "range": "± 3944",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1783945,
            "range": "± 28866",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3140598,
            "range": "± 29114",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16464411,
            "range": "± 175254",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104894,
            "range": "± 5825",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2047,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212822,
            "range": "± 3859",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 955074,
            "range": "± 20664",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1746790,
            "range": "± 151614",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 539448,
            "range": "± 44517",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4239337,
            "range": "± 51365",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2636834,
            "range": "± 10065",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776103484220,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44448,
            "range": "± 1074",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1778551,
            "range": "± 34711",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3150234,
            "range": "± 78373",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16223203,
            "range": "± 305304",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111584,
            "range": "± 1167",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2033,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213073,
            "range": "± 3422",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 956560,
            "range": "± 121608",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1744898,
            "range": "± 19502",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537602,
            "range": "± 16672",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4246711,
            "range": "± 38699",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2650508,
            "range": "± 7537",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776115134000,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44888,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 1767378,
            "range": "± 22955",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3123231,
            "range": "± 35108",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15941015,
            "range": "± 158394",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110334,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2041,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 214732,
            "range": "± 3311",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 957189,
            "range": "± 17857",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1740200,
            "range": "± 47856",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538993,
            "range": "± 10826",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4388308,
            "range": "± 143254",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2668745,
            "range": "± 6520",
            "unit": "ns/iter"
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
        "date": 1776115516157,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45642,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3387276,
            "range": "± 191673",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4386039,
            "range": "± 194168",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15802672,
            "range": "± 346789",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111805,
            "range": "± 1905",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2018,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212989,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 957237,
            "range": "± 7294",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1738472,
            "range": "± 19330",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535619,
            "range": "± 31269",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4199650,
            "range": "± 76220",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2629252,
            "range": "± 36424",
            "unit": "ns/iter"
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
        "date": 1776118446621,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45067,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3649067,
            "range": "± 136349",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4619740,
            "range": "± 199137",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15903274,
            "range": "± 272763",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116640,
            "range": "± 903",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2024,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211622,
            "range": "± 1305",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 950092,
            "range": "± 10062",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1726071,
            "range": "± 42508",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 526824,
            "range": "± 33053",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4343189,
            "range": "± 30762",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2626983,
            "range": "± 8337",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776118694387,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44275,
            "range": "± 2225",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3207572,
            "range": "± 189118",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4203193,
            "range": "± 208043",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16042735,
            "range": "± 351066",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119213,
            "range": "± 1199",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2017,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212054,
            "range": "± 5881",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 949098,
            "range": "± 9996",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1729338,
            "range": "± 20157",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534838,
            "range": "± 9231",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4363100,
            "range": "± 33239",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2626479,
            "range": "± 8776",
            "unit": "ns/iter"
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
        "date": 1776118977038,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45004,
            "range": "± 713",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3373109,
            "range": "± 163501",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4222744,
            "range": "± 164097",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15834817,
            "range": "± 313572",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116861,
            "range": "± 986",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2013,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211778,
            "range": "± 1862",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 950481,
            "range": "± 10193",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1731693,
            "range": "± 18518",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 548953,
            "range": "± 25039",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4344922,
            "range": "± 42123",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2625506,
            "range": "± 4806",
            "unit": "ns/iter"
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
        "date": 1776119221141,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43953,
            "range": "± 2826",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3413964,
            "range": "± 212808",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4256815,
            "range": "± 233583",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16525685,
            "range": "± 407945",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112307,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2021,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213328,
            "range": "± 3653",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 953245,
            "range": "± 10213",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1734399,
            "range": "± 20471",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533292,
            "range": "± 8903",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4197810,
            "range": "± 50381",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2628649,
            "range": "± 3962",
            "unit": "ns/iter"
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
        "date": 1776144999846,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43017,
            "range": "± 2665",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3624035,
            "range": "± 145111",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4627775,
            "range": "± 142230",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15987620,
            "range": "± 261628",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111829,
            "range": "± 1500",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2020,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 214522,
            "range": "± 8100",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 960043,
            "range": "± 36255",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1746252,
            "range": "± 54663",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534592,
            "range": "± 29481",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4247774,
            "range": "± 44259",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2677772,
            "range": "± 10985",
            "unit": "ns/iter"
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
        "date": 1776152672998,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35113,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3128494,
            "range": "± 114894",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4139016,
            "range": "± 96922",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16690257,
            "range": "± 479252",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103893,
            "range": "± 2525",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2399,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 173212,
            "range": "± 5892",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 762214,
            "range": "± 8930",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1622917,
            "range": "± 24549",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 503666,
            "range": "± 9309",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3543733,
            "range": "± 130923",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2055909,
            "range": "± 4929",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776153108134,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44133,
            "range": "± 2474",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3670514,
            "range": "± 239177",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4606299,
            "range": "± 301846",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16679589,
            "range": "± 1455582",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113865,
            "range": "± 897",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2011,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213564,
            "range": "± 2968",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 961791,
            "range": "± 6393",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1748677,
            "range": "± 62510",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537701,
            "range": "± 5425",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4239452,
            "range": "± 34611",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2672749,
            "range": "± 6252",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776155570928,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35659,
            "range": "± 776",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3062020,
            "range": "± 85575",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4138471,
            "range": "± 99100",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16687372,
            "range": "± 291915",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110770,
            "range": "± 588",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2091,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 175938,
            "range": "± 5163",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 771782,
            "range": "± 3482",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1629834,
            "range": "± 19832",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 509191,
            "range": "± 11296",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3577756,
            "range": "± 46053",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2094778,
            "range": "± 4109",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776156268228,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 38976,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 2787443,
            "range": "± 77891",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3629101,
            "range": "± 39544",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 13758489,
            "range": "± 305252",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108662,
            "range": "± 3463",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2802,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 161477,
            "range": "± 27944",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 730644,
            "range": "± 8297",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1516130,
            "range": "± 28532",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 496676,
            "range": "± 24407",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3385070,
            "range": "± 43732",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1991356,
            "range": "± 19289",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776156855932,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44993,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3682732,
            "range": "± 153797",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4724657,
            "range": "± 153052",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16382941,
            "range": "± 478605",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112733,
            "range": "± 2715",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2189,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 214054,
            "range": "± 7332",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 958295,
            "range": "± 12080",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1726760,
            "range": "± 53213",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 545799,
            "range": "± 15572",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4368323,
            "range": "± 126480",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2678617,
            "range": "± 45175",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776157728042,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43939,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3512234,
            "range": "± 156139",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4583300,
            "range": "± 153755",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15875560,
            "range": "± 244095",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107834,
            "range": "± 2241",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2079,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211983,
            "range": "± 7318",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 946729,
            "range": "± 11542",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1724206,
            "range": "± 27713",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530068,
            "range": "± 13775",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4147139,
            "range": "± 40687",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2624486,
            "range": "± 9307",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776158387907,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45478,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3374951,
            "range": "± 168948",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4288320,
            "range": "± 186035",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16237650,
            "range": "± 285915",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111322,
            "range": "± 2610",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2052,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211988,
            "range": "± 6020",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 955081,
            "range": "± 8599",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1754768,
            "range": "± 21122",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537826,
            "range": "± 22950",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4267778,
            "range": "± 71032",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2641730,
            "range": "± 9027",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776175613728,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34769,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3265563,
            "range": "± 168110",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4223548,
            "range": "± 183063",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16530482,
            "range": "± 235567",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109496,
            "range": "± 2725",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2319,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 174787,
            "range": "± 5820",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 772195,
            "range": "± 28913",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1628331,
            "range": "± 72367",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 506981,
            "range": "± 34965",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3609159,
            "range": "± 61009",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2086848,
            "range": "± 21689",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776176159301,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45326,
            "range": "± 3505",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3550252,
            "range": "± 161929",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4418210,
            "range": "± 185874",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16628602,
            "range": "± 463176",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112785,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2232,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212218,
            "range": "± 4650",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 950737,
            "range": "± 38861",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1726553,
            "range": "± 35392",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 529870,
            "range": "± 31768",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4314625,
            "range": "± 32449",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2629252,
            "range": "± 7949",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776202953009,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35295,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3128456,
            "range": "± 126566",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4203259,
            "range": "± 117050",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16603667,
            "range": "± 279657",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111161,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2168,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 174014,
            "range": "± 3801",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 766868,
            "range": "± 9194",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1631036,
            "range": "± 19405",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 505961,
            "range": "± 34368",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3567875,
            "range": "± 32550",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2077745,
            "range": "± 8365",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776238800781,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44827,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3726295,
            "range": "± 207778",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4550535,
            "range": "± 173687",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15900434,
            "range": "± 315542",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109923,
            "range": "± 1560",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2022,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 213598,
            "range": "± 5742",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 960512,
            "range": "± 8908",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1751180,
            "range": "± 17034",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531893,
            "range": "± 30578",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4266612,
            "range": "± 166075",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2668712,
            "range": "± 5704",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776239177280,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45888,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3539386,
            "range": "± 165254",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4433917,
            "range": "± 179724",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16634346,
            "range": "± 307794",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111491,
            "range": "± 2247",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2034,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212753,
            "range": "± 4381",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 952908,
            "range": "± 94277",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1748378,
            "range": "± 27980",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536563,
            "range": "± 18306",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4395588,
            "range": "± 77658",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2636345,
            "range": "± 46724",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776243450997,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43901,
            "range": "± 2110",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3525159,
            "range": "± 190469",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4405293,
            "range": "± 183571",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15753672,
            "range": "± 314961",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 102468,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2094,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 211236,
            "range": "± 4467",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 952692,
            "range": "± 9100",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1729863,
            "range": "± 18255",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533325,
            "range": "± 3787",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4363297,
            "range": "± 131620",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2647904,
            "range": "± 5171",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776332627291,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44118,
            "range": "± 2961",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3404783,
            "range": "± 219222",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4300262,
            "range": "± 244166",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15786498,
            "range": "± 365129",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110157,
            "range": "± 1584",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2011,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 212123,
            "range": "± 4963",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 951243,
            "range": "± 76074",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1723249,
            "range": "± 25229",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 541231,
            "range": "± 25602",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4253733,
            "range": "± 82053",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2637947,
            "range": "± 40914",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776346985649,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44241,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3652184,
            "range": "± 128198",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4733896,
            "range": "± 190573",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16507413,
            "range": "± 405893",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110915,
            "range": "± 6500",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2140,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 188252,
            "range": "± 5397",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 834087,
            "range": "± 32826",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1641129,
            "range": "± 23797",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 501372,
            "range": "± 29869",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3957356,
            "range": "± 37405",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2296682,
            "range": "± 26155",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776348367416,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43810,
            "range": "± 1115",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3719873,
            "range": "± 209815",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4509381,
            "range": "± 171799",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16113459,
            "range": "± 415368",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107362,
            "range": "± 3214",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2381,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 187187,
            "range": "± 17336",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 831290,
            "range": "± 3079",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1639374,
            "range": "± 16988",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 510760,
            "range": "± 18560",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4013084,
            "range": "± 39481",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2288999,
            "range": "± 81796",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776350433365,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 27253,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 2642823,
            "range": "± 107384",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3568098,
            "range": "± 103339",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 13190246,
            "range": "± 280022",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 73696,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1629,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 130075,
            "range": "± 3356",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 565435,
            "range": "± 11299",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1233962,
            "range": "± 16035",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 388643,
            "range": "± 19648",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2665720,
            "range": "± 19865",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1530816,
            "range": "± 7124",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776373179784,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35453,
            "range": "± 1292",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3044333,
            "range": "± 83295",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4144049,
            "range": "± 97395",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16819593,
            "range": "± 326943",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106892,
            "range": "± 1084",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2042,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 167397,
            "range": "± 32682",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 736264,
            "range": "± 10773",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1592962,
            "range": "± 24015",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 501015,
            "range": "± 34818",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3427801,
            "range": "± 32356",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1987350,
            "range": "± 13344",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776373725364,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 27296,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 2561920,
            "range": "± 54608",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3441800,
            "range": "± 78629",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 13339611,
            "range": "± 246943",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 75955,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1590,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 129144,
            "range": "± 884",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 571030,
            "range": "± 5794",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1237382,
            "range": "± 14714",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 395920,
            "range": "± 13863",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2679004,
            "range": "± 17660",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1531917,
            "range": "± 18008",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776375316655,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35398,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3130045,
            "range": "± 123846",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4180944,
            "range": "± 112878",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16827843,
            "range": "± 289363",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107532,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2056,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 165698,
            "range": "± 2588",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 729667,
            "range": "± 3533",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1590489,
            "range": "± 19279",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 503641,
            "range": "± 6179",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3451122,
            "range": "± 65688",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1954411,
            "range": "± 18412",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776377134720,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 38300,
            "range": "± 1888",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 2779989,
            "range": "± 75025",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3649734,
            "range": "± 60696",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 14022241,
            "range": "± 372898",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104649,
            "range": "± 4412",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2830,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 153124,
            "range": "± 2237",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 695256,
            "range": "± 5438",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1471124,
            "range": "± 28371",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 462796,
            "range": "± 22471",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3299767,
            "range": "± 35327",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1889503,
            "range": "± 7516",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776410795135,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44774,
            "range": "± 10160",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3678829,
            "range": "± 157661",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4560801,
            "range": "± 180969",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16439757,
            "range": "± 543321",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108350,
            "range": "± 1082",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2209,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186123,
            "range": "± 1733",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 830722,
            "range": "± 19328",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1629792,
            "range": "± 32928",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 511342,
            "range": "± 17158",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3937005,
            "range": "± 47737",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2314545,
            "range": "± 9688",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776415882312,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 38752,
            "range": "± 1403",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 2731812,
            "range": "± 88891",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3611051,
            "range": "± 85391",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 13205938,
            "range": "± 225145",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 98362,
            "range": "± 5415",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2831,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 152863,
            "range": "± 10133",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 694962,
            "range": "± 5630",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1472938,
            "range": "± 17414",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 468457,
            "range": "± 14793",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3276784,
            "range": "± 63271",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1908492,
            "range": "± 36960",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776417884738,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43727,
            "range": "± 2116",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3459829,
            "range": "± 136626",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4447526,
            "range": "± 166881",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16204331,
            "range": "± 375715",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 101795,
            "range": "± 11337",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2019,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185357,
            "range": "± 15346",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 826089,
            "range": "± 3613",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1628079,
            "range": "± 21306",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 503481,
            "range": "± 12927",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3926591,
            "range": "± 41793",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2298219,
            "range": "± 15997",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776418283169,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44649,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3459338,
            "range": "± 147861",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4519549,
            "range": "± 177637",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16287289,
            "range": "± 332838",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109075,
            "range": "± 1027",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2051,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185136,
            "range": "± 3829",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 827109,
            "range": "± 29601",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1620621,
            "range": "± 26340",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 504248,
            "range": "± 13529",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3937736,
            "range": "± 32549",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2285946,
            "range": "± 13292",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776423399639,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45620,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3270055,
            "range": "± 208315",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4159027,
            "range": "± 142971",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15870534,
            "range": "± 312717",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110212,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2208,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185149,
            "range": "± 3762",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822186,
            "range": "± 115981",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1612970,
            "range": "± 40389",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 502422,
            "range": "± 15052",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3916151,
            "range": "± 37500",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2281122,
            "range": "± 9895",
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
          "id": "c7cfff394380542f9007e4162bb7f6a6bea0a5a2",
          "message": "feat: add scoped usedClassMembers rules",
          "timestamp": "2026-04-17T13:05:15+02:00",
          "tree_id": "080fd1b8e9fcb7c514be06704e4412718a9d21da",
          "url": "https://github.com/fallow-rs/fallow/commit/c7cfff394380542f9007e4162bb7f6a6bea0a5a2"
        },
        "date": 1776424165671,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 38870,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 2765524,
            "range": "± 69029",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3747133,
            "range": "± 92606",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 13974562,
            "range": "± 258079",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108476,
            "range": "± 3703",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2810,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 152027,
            "range": "± 8565",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 689574,
            "range": "± 15332",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1472395,
            "range": "± 24132",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 465059,
            "range": "± 3725",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3261032,
            "range": "± 40490",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1897496,
            "range": "± 6940",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776435441561,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 39205,
            "range": "± 774",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 2960202,
            "range": "± 113439",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3870649,
            "range": "± 90772",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 15232781,
            "range": "± 404309",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103065,
            "range": "± 3670",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2854,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 153509,
            "range": "± 4908",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 698438,
            "range": "± 4299",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1491793,
            "range": "± 76355",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 495760,
            "range": "± 14113",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3405878,
            "range": "± 51015",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1936608,
            "range": "± 16775",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776436391725,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46452,
            "range": "± 1291",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3313468,
            "range": "± 151179",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4372219,
            "range": "± 165888",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16838073,
            "range": "± 410155",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108089,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2031,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185781,
            "range": "± 7611",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 829501,
            "range": "± 25850",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1619872,
            "range": "± 45968",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 499226,
            "range": "± 5496",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3949934,
            "range": "± 84075",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2273930,
            "range": "± 89411",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776440667084,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45501,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3443457,
            "range": "± 142721",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4347056,
            "range": "± 146573",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16543971,
            "range": "± 279935",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109766,
            "range": "± 1223",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2021,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 190871,
            "range": "± 10044",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 845198,
            "range": "± 10395",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1674649,
            "range": "± 92646",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 516894,
            "range": "± 4880",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4075062,
            "range": "± 44642",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2364131,
            "range": "± 28561",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776441625692,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44501,
            "range": "± 1922",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3609334,
            "range": "± 196071",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4489021,
            "range": "± 150563",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17982495,
            "range": "± 559982",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111271,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2020,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 187809,
            "range": "± 3053",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 837577,
            "range": "± 38926",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1644788,
            "range": "± 31616",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 496317,
            "range": "± 24183",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4028031,
            "range": "± 181837",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2296238,
            "range": "± 14557",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776453295658,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35723,
            "range": "± 1301",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3194452,
            "range": "± 137538",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4311117,
            "range": "± 129898",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17581226,
            "range": "± 290294",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105438,
            "range": "± 611",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2127,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 167500,
            "range": "± 4557",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 723994,
            "range": "± 5462",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1593094,
            "range": "± 18351",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 499239,
            "range": "± 34045",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3401039,
            "range": "± 31387",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1968588,
            "range": "± 4726",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1776453550804,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45847,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3763346,
            "range": "± 115167",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4662754,
            "range": "± 158344",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 16554014,
            "range": "± 287685",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112292,
            "range": "± 1178",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2070,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 187611,
            "range": "± 11259",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 833652,
            "range": "± 86676",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1625059,
            "range": "± 21586",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 497416,
            "range": "± 11482",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3953058,
            "range": "± 28319",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2287648,
            "range": "± 5492",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
          "id": "8e29fd5f25efb45ba61e29e099279bd24d9b1c2e",
          "message": "chore(ci): re-enable disabled workflows after quota scare",
          "timestamp": "2026-05-20T14:29:15+01:00",
          "tree_id": "95428c30fa6a7969f55bbd5bc817e614c4b31fe1",
          "url": "https://github.com/fallow-rs/fallow/commit/8e29fd5f25efb45ba61e29e099279bd24d9b1c2e"
        },
        "date": 1779284111780,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 55800,
            "range": "± 1001",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3967811,
            "range": "± 149718",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5239768,
            "range": "± 151823",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21707451,
            "range": "± 518957",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109946,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2090,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233637,
            "range": "± 19323",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1053065,
            "range": "± 63977",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1498956,
            "range": "± 17478",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572975,
            "range": "± 14133",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4291078,
            "range": "± 32179",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4315094,
            "range": "± 29307",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2914971,
            "range": "± 7699",
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
          "id": "25960fda32a6460c52f1fdd6c21d763eeec4f195",
          "message": "chore(deps): bump similar from 2.7.0 to 3.1.0 (#439)\n\nBumps [similar](https://github.com/mitsuhiko/similar) from 2.7.0 to 3.1.0.\n- [Changelog](https://github.com/mitsuhiko/similar/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/mitsuhiko/similar/compare/2.7.0...3.1.0)\n\n---\nupdated-dependencies:\n- dependency-name: similar\n  dependency-version: 3.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-20T14:29:38+01:00",
          "tree_id": "5e4bdef9c939bc84d2d0789ae62b869792b20c18",
          "url": "https://github.com/fallow-rs/fallow/commit/25960fda32a6460c52f1fdd6c21d763eeec4f195"
        },
        "date": 1779284402298,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 55341,
            "range": "± 1803",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3982495,
            "range": "± 261837",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4981049,
            "range": "± 185377",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21385698,
            "range": "± 567497",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104299,
            "range": "± 513",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2073,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233078,
            "range": "± 2330",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1053340,
            "range": "± 17638",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1498394,
            "range": "± 21864",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 568232,
            "range": "± 33152",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4295871,
            "range": "± 34492",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4308612,
            "range": "± 29649",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2914141,
            "range": "± 8628",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779284853584,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41708,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3584904,
            "range": "± 138956",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4947688,
            "range": "± 169218",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22053602,
            "range": "± 339511",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114870,
            "range": "± 936",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2135,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184642,
            "range": "± 5947",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819333,
            "range": "± 18010",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1310339,
            "range": "± 25728",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533791,
            "range": "± 9442",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3278572,
            "range": "± 52286",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3321108,
            "range": "± 28677",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2224308,
            "range": "± 21914",
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
          "id": "b14fd612ce21ea710ee9c41860c24d73c14d0589",
          "message": "fix(extract): barrel re-export member propagation, source-order-independent (#427)\n\nClass-inheritance and interface-implementer credit now walks re-export\norigins, so a child class extends BaseShape (or implements RenderableShape)\nthrough a contracts/index.ts barrel correctly credits the parent's this.*\naccesses on the actual defining file. The visitor also now resolves\nexport { X }; import { X } from './a'; (export-before-import) as a\nre-export instead of a local export, matching the existing import-before-\nexport behavior. A local declaration of X in the same module shadows the\nimport and keeps the export local.\n\nCACHE_VERSION bumped 83 to 84 so warm caches get the new ModuleInfo shape\non upgrade.\n\nThanks @M-Hassan-Raza for the patch.",
          "timestamp": "2026-05-20T15:20:42+01:00",
          "tree_id": "992b899202c8d6c9d38cd81a03c384a179f20b7f",
          "url": "https://github.com/fallow-rs/fallow/commit/b14fd612ce21ea710ee9c41860c24d73c14d0589"
        },
        "date": 1779287143457,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 57923,
            "range": "± 982",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3669763,
            "range": "± 188451",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4887218,
            "range": "± 198617",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21355628,
            "range": "± 335631",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112267,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2132,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233193,
            "range": "± 6919",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1047890,
            "range": "± 33686",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1492831,
            "range": "± 19386",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 568259,
            "range": "± 10504",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4277878,
            "range": "± 27623",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4310458,
            "range": "± 30448",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2915207,
            "range": "± 6207",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779290801586,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 57583,
            "range": "± 685",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3713503,
            "range": "± 216055",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5072019,
            "range": "± 242439",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21043188,
            "range": "± 302157",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109727,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2096,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233623,
            "range": "± 5174",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1048962,
            "range": "± 139037",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1493409,
            "range": "± 21471",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 567580,
            "range": "± 7800",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4258432,
            "range": "± 62216",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4293692,
            "range": "± 70623",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2911646,
            "range": "± 120228",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779291613109,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 41743,
            "range": "± 1271",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3635929,
            "range": "± 140243",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4910681,
            "range": "± 146915",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22074207,
            "range": "± 391029",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109622,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2197,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185383,
            "range": "± 3107",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819736,
            "range": "± 116642",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1310571,
            "range": "± 26072",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530331,
            "range": "± 13112",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3287414,
            "range": "± 25524",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3312688,
            "range": "± 30402",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2219259,
            "range": "± 5919",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779296287579,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 48385,
            "range": "± 1364",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3086702,
            "range": "± 69098",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4225356,
            "range": "± 59064",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17496927,
            "range": "± 331427",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103586,
            "range": "± 3970",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2873,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157683,
            "range": "± 3146",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 713813,
            "range": "± 30651",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1179829,
            "range": "± 27978",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 464499,
            "range": "± 15113",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2876190,
            "range": "± 13874",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2914763,
            "range": "± 21701",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1954078,
            "range": "± 64235",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779300074846,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 32770,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3070162,
            "range": "± 130318",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4110745,
            "range": "± 140749",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17632729,
            "range": "± 300356",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 80799,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1656,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143215,
            "range": "± 1743",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 635062,
            "range": "± 76988",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1017066,
            "range": "± 25463",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 428161,
            "range": "± 19651",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2560646,
            "range": "± 24619",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2570367,
            "range": "± 24081",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1736779,
            "range": "± 8292",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779304039673,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 58359,
            "range": "± 2875",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3846638,
            "range": "± 172946",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5100027,
            "range": "± 189089",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22133314,
            "range": "± 376594",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113770,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2219,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235878,
            "range": "± 5602",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1067416,
            "range": "± 32982",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1529680,
            "range": "± 32563",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576738,
            "range": "± 16564",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4363113,
            "range": "± 31626",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4372955,
            "range": "± 37552",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2966000,
            "range": "± 8394",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779304440766,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 56571,
            "range": "± 746",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3644236,
            "range": "± 209219",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4717783,
            "range": "± 112745",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21169756,
            "range": "± 387029",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 104511,
            "range": "± 2774",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2173,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235505,
            "range": "± 8913",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1065892,
            "range": "± 11969",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1511197,
            "range": "± 13998",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 575719,
            "range": "± 7867",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4332301,
            "range": "± 29107",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4355901,
            "range": "± 41101",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2991770,
            "range": "± 11464",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779307283132,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 57071,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3764671,
            "range": "± 188388",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4895638,
            "range": "± 169528",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22104869,
            "range": "± 481218",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110593,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2208,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235441,
            "range": "± 10774",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1067681,
            "range": "± 13750",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1514030,
            "range": "± 17468",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577785,
            "range": "± 30616",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4420819,
            "range": "± 33779",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4448742,
            "range": "± 42669",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2968803,
            "range": "± 13802",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779308344328,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 57740,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3674689,
            "range": "± 173018",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4920152,
            "range": "± 149544",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21595828,
            "range": "± 328553",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111291,
            "range": "± 1580",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2210,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234908,
            "range": "± 12842",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1063754,
            "range": "± 37531",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1515025,
            "range": "± 16329",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572883,
            "range": "± 8648",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4344088,
            "range": "± 25903",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4379080,
            "range": "± 90753",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2958062,
            "range": "± 9035",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779349471132,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 58529,
            "range": "± 924",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3548579,
            "range": "± 183409",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4814305,
            "range": "± 157125",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21371147,
            "range": "± 455938",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119915,
            "range": "± 1909",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2209,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236592,
            "range": "± 6198",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1059149,
            "range": "± 14874",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1528837,
            "range": "± 16675",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 568922,
            "range": "± 20816",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4306450,
            "range": "± 52254",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4341104,
            "range": "± 70164",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2931684,
            "range": "± 17041",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779351673134,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 42409,
            "range": "± 2339",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3732147,
            "range": "± 146032",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4987327,
            "range": "± 199075",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23045954,
            "range": "± 917596",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 100222,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2235,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184390,
            "range": "± 5655",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818611,
            "range": "± 29450",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1313991,
            "range": "± 30963",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532909,
            "range": "± 26955",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3295029,
            "range": "± 33587",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3320774,
            "range": "± 23994",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2224994,
            "range": "± 11940",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779352057813,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 59765,
            "range": "± 2635",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3761979,
            "range": "± 206369",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5091845,
            "range": "± 190255",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21583167,
            "range": "± 347334",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119335,
            "range": "± 3001",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2154,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235295,
            "range": "± 20756",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1066521,
            "range": "± 15325",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1516518,
            "range": "± 22147",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 578599,
            "range": "± 13044",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4339446,
            "range": "± 32284",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4366911,
            "range": "± 31583",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2974454,
            "range": "± 35983",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779352762690,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 49008,
            "range": "± 1847",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3063640,
            "range": "± 71479",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4197273,
            "range": "± 48478",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17707735,
            "range": "± 487330",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111654,
            "range": "± 3143",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2979,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156965,
            "range": "± 2661",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 710496,
            "range": "± 16980",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1206788,
            "range": "± 32827",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 464811,
            "range": "± 15185",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2861238,
            "range": "± 21593",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2896616,
            "range": "± 66204",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1934616,
            "range": "± 6156",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779353620523,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 58948,
            "range": "± 3688",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4001578,
            "range": "± 172962",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5176188,
            "range": "± 205787",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22166879,
            "range": "± 494194",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119307,
            "range": "± 1223",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2179,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236780,
            "range": "± 7752",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069632,
            "range": "± 15020",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1527340,
            "range": "± 15006",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 588584,
            "range": "± 16598",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4377367,
            "range": "± 36156",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4261908,
            "range": "± 40018",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2991249,
            "range": "± 28365",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779356990528,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 42985,
            "range": "± 675",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3672120,
            "range": "± 139096",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5075909,
            "range": "± 180436",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23191354,
            "range": "± 419499",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107991,
            "range": "± 5205",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2258,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185679,
            "range": "± 21588",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819049,
            "range": "± 13671",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1315739,
            "range": "± 41802",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533705,
            "range": "± 32333",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3301155,
            "range": "± 27652",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3334389,
            "range": "± 24209",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2218397,
            "range": "± 25131",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779357358518,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43205,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3634309,
            "range": "± 129438",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4891676,
            "range": "± 163429",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22171619,
            "range": "± 314493",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119590,
            "range": "± 4292",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2219,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184216,
            "range": "± 19149",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 815569,
            "range": "± 2392",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1305327,
            "range": "± 18154",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534771,
            "range": "± 19263",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3280646,
            "range": "± 83312",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3327527,
            "range": "± 38547",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2224201,
            "range": "± 46965",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779358016239,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 57886,
            "range": "± 860",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3943410,
            "range": "± 183665",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5087043,
            "range": "± 174475",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21803725,
            "range": "± 335115",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120294,
            "range": "± 3150",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2179,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235533,
            "range": "± 27725",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1074025,
            "range": "± 16952",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1517259,
            "range": "± 16195",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 579550,
            "range": "± 26546",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4345754,
            "range": "± 44362",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4382944,
            "range": "± 31668",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2981553,
            "range": "± 8464",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779358841668,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43196,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3566241,
            "range": "± 155160",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4879235,
            "range": "± 109347",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22516525,
            "range": "± 345529",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121031,
            "range": "± 1180",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2471,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185093,
            "range": "± 16553",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819182,
            "range": "± 5507",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1308730,
            "range": "± 27135",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534146,
            "range": "± 15624",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3280639,
            "range": "± 28943",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3309847,
            "range": "± 34820",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2245455,
            "range": "± 11338",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779359330708,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 57919,
            "range": "± 1695",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4095923,
            "range": "± 291553",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5329098,
            "range": "± 206021",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21513398,
            "range": "± 332026",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109618,
            "range": "± 2946",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2183,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234775,
            "range": "± 4084",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1065681,
            "range": "± 11232",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1509328,
            "range": "± 16796",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574012,
            "range": "± 25819",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4326781,
            "range": "± 31226",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4350583,
            "range": "± 46595",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2958707,
            "range": "± 12470",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1779363731004,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 57270,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3598153,
            "range": "± 155832",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4838107,
            "range": "± 122065",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21632708,
            "range": "± 451258",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119850,
            "range": "± 2793",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2196,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233399,
            "range": "± 5474",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1061384,
            "range": "± 11457",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1503237,
            "range": "± 18648",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 563516,
            "range": "± 29240",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4290214,
            "range": "± 34764",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4300735,
            "range": "± 41684",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2958531,
            "range": "± 4463",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}