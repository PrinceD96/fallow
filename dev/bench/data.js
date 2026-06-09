window.BENCHMARK_DATA = {
  "lastUpdate": 1781038093708,
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
          "id": "de853cace5d58bff04fc6eb43a544c45e3fa735e",
          "message": "fix(security): flag jwt verify without algorithms\n\nDetect jsonwebtoken verify calls that omit an explicit algorithms option while keeping safe allowlisted calls and unprovenanced lookalikes quiet.\n\nFixes #898.",
          "timestamp": "2026-06-06T19:34:54+02:00",
          "tree_id": "ba5dffa33fbcb4f7baab9387f4bb9461e1d66ebe",
          "url": "https://github.com/fallow-rs/fallow/commit/de853cace5d58bff04fc6eb43a544c45e3fa735e"
        },
        "date": 1780767640125,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 89664,
            "range": "± 824",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4211356,
            "range": "± 160302",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6201139,
            "range": "± 180290",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30246626,
            "range": "± 644558",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118803,
            "range": "± 949",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2290,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236641,
            "range": "± 3176",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1078481,
            "range": "± 11148",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1526257,
            "range": "± 20135",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577618,
            "range": "± 7953",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4367288,
            "range": "± 81823",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4338390,
            "range": "± 74473",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2986015,
            "range": "± 21300",
            "unit": "ns/iter"
          }
        ]
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
          "id": "3de5f84b8817c0284d6808a17c4483db3c96e1ca",
          "message": "fix(security): flag disabled TLS validation\n\nAdd a security catalogue candidate for disabled TLS certificate validation in Node HTTPS and TLS option objects. The detector captures rejectUnauthorized: false only on provenance-gated HTTPS/TLS call shapes, plus the exact NODE_TLS_REJECT_UNAUTHORIZED = \"0\" assignment.\n\nThis keeps same-named local helpers and safe rejectUnauthorized values quiet, while preserving the opt-in candidate framing for agent verification.\n\nFixes #895.",
          "timestamp": "2026-06-06T19:45:52+02:00",
          "tree_id": "5d36c12045a52275207ed6730647eee70a1ff587",
          "url": "https://github.com/fallow-rs/fallow/commit/3de5f84b8817c0284d6808a17c4483db3c96e1ca"
        },
        "date": 1780768316731,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 75622,
            "range": "± 924",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3219982,
            "range": "± 62576",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4866525,
            "range": "± 109862",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23521455,
            "range": "± 597968",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110042,
            "range": "± 1304",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3141,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 158136,
            "range": "± 2013",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 712260,
            "range": "± 14917",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1197446,
            "range": "± 21561",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 470837,
            "range": "± 5973",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2917913,
            "range": "± 34608",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2947199,
            "range": "± 46266",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1936610,
            "range": "± 14993",
            "unit": "ns/iter"
          }
        ]
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
          "id": "fd60baab71a41f62fa4c0d10a50dac5d09d4501f",
          "message": "fix(security): unwrap static option objects for jwt checks\n\nFix a review-found gap in the JWT missing-algorithms candidate. Object-key metadata now unwraps static TypeScript wrappers such as `as const`, matching the existing literal and object-property capture behavior.\n\nThe regression fixture covers missing options, missing algorithm keys, static-wrapped missing keys, and static-wrapped safe allowlists.\n\nFollow-up to #898.",
          "timestamp": "2026-06-06T20:02:59+02:00",
          "tree_id": "7304af88a0c0aa7a60520ee2acdb57a6ec04c5f4",
          "url": "https://github.com/fallow-rs/fallow/commit/fd60baab71a41f62fa4c0d10a50dac5d09d4501f"
        },
        "date": 1780769338209,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 68675,
            "range": "± 1707",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3848054,
            "range": "± 146328",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5950038,
            "range": "± 153245",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29990810,
            "range": "± 457249",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107739,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2397,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184590,
            "range": "± 3871",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819733,
            "range": "± 9858",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1318966,
            "range": "± 19777",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 529867,
            "range": "± 34712",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3300244,
            "range": "± 23648",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3341148,
            "range": "± 28964",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2224230,
            "range": "± 5141",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "09a2417e6705c7363f9aa36ff579b2b7eab35b29",
          "message": "refactor: split report builders",
          "timestamp": "2026-06-06T20:20:58+02:00",
          "tree_id": "615bb33e420aa18850ffa048d4b5043f1631886a",
          "url": "https://github.com/fallow-rs/fallow/commit/09a2417e6705c7363f9aa36ff579b2b7eab35b29"
        },
        "date": 1780770451433,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 69447,
            "range": "± 901",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3767842,
            "range": "± 130289",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5859573,
            "range": "± 153233",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30292137,
            "range": "± 842106",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121229,
            "range": "± 6707",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2681,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185224,
            "range": "± 5135",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820492,
            "range": "± 6464",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317777,
            "range": "± 15469",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534387,
            "range": "± 32173",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3307081,
            "range": "± 71219",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3328849,
            "range": "± 29965",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2220261,
            "range": "± 4691",
            "unit": "ns/iter"
          }
        ]
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
          "id": "e605a07767baf5593829f1bdb07b9da14f865970",
          "message": "feat(security): add cleartext and ECB candidates\n\nAdd cleartext-transport candidates for literal HTTP and FTP request URLs plus WebSocket constructors using ws URLs.\n\nExtend weak-crypto literal coverage to flag AES ECB cipher algorithm literals while keeping the rest of #901 queued for capture shapes that need separate work.\n\nRefs #901.",
          "timestamp": "2026-06-06T21:34:23+02:00",
          "tree_id": "284af1e59e05c5e8e67a8320a090dfc0b2d81323",
          "url": "https://github.com/fallow-rs/fallow/commit/e605a07767baf5593829f1bdb07b9da14f865970"
        },
        "date": 1780774785293,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 92842,
            "range": "± 1764",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4133065,
            "range": "± 164129",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6079900,
            "range": "± 177685",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29794771,
            "range": "± 444260",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118236,
            "range": "± 1008",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2330,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235605,
            "range": "± 4593",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1067765,
            "range": "± 6318",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1512451,
            "range": "± 15060",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574045,
            "range": "± 22990",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4366754,
            "range": "± 30151",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4422249,
            "range": "± 66032",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2967492,
            "range": "± 14832",
            "unit": "ns/iter"
          }
        ]
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
          "id": "871a76504fc4878f2bad7208740639724d9d91e0",
          "message": "feat(mcp): scope security candidates by path\n\nAdd a file scope to the existing security_candidates MCP tool by forwarding path filters through fallow security.\n\nExpose the same scope as a repeated --file flag on the security command so agents can ask for candidates anchored in or traced through recently edited files without scanning unrelated findings.\n\nFixes #889.",
          "timestamp": "2026-06-06T21:36:57+02:00",
          "tree_id": "ae00436b2d8df65bfb833e1ff96a2fbe611dd0f2",
          "url": "https://github.com/fallow-rs/fallow/commit/871a76504fc4878f2bad7208740639724d9d91e0"
        },
        "date": 1780775128063,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 68219,
            "range": "± 520",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3833789,
            "range": "± 156061",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5875532,
            "range": "± 229009",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29858544,
            "range": "± 396513",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118767,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2458,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185528,
            "range": "± 6155",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819115,
            "range": "± 9371",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317123,
            "range": "± 18461",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 529538,
            "range": "± 23970",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3295128,
            "range": "± 29440",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3332426,
            "range": "± 27878",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2230306,
            "range": "± 3196",
            "unit": "ns/iter"
          }
        ]
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
          "id": "33935030597a35f5f33577d8988584b78c3aacaa",
          "message": "feat(security): add opt-in hardcoded secret candidates\n\nAdd an opt-in hardcoded-secret security category for first-party literal credentials.\n\nDetect known provider credential prefixes first, and only use entropy when the surrounding binding or property name is secret-shaped. Evidence stays redacted and the category remains explicitly scoped through security category configuration.\n\nFixes #892.",
          "timestamp": "2026-06-06T21:42:46+02:00",
          "tree_id": "1e600c86eb4e70f2bf63f4fab7a6f73288785559",
          "url": "https://github.com/fallow-rs/fallow/commit/33935030597a35f5f33577d8988584b78c3aacaa"
        },
        "date": 1780775483796,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 68443,
            "range": "± 1843",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4032555,
            "range": "± 212743",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6049769,
            "range": "± 196880",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30548878,
            "range": "± 465929",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109032,
            "range": "± 5200",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2501,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185481,
            "range": "± 6100",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823023,
            "range": "± 11727",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320784,
            "range": "± 26624",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 539646,
            "range": "± 36930",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3338632,
            "range": "± 25442",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3374937,
            "range": "± 36538",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2227657,
            "range": "± 59427",
            "unit": "ns/iter"
          }
        ]
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
          "id": "7a9db3ff4e37e9279b56e9ffa7133aed251db180",
          "message": "feat(security): rank framework entry-point sources\n\nAdd dependency-gated source rows for framework handler inputs, Next.js handlers and server actions, queue job payloads, and MCP tool inputs.\n\nRecord recognizable framework callback parameters during extraction so existing security sink candidates can be ranked as source-backed. Direct request accessor paths still take precedence over broader handler-param bindings, keeping evidence specific when both sources are present.\n\nNestJS decorator-injected params remain out of scope because they need decorator parameter capture rather than member-path matching.\n\nFixes #879.",
          "timestamp": "2026-06-07T10:15:44+02:00",
          "tree_id": "05f61c32d5a79aeb01c0f8bfe527da426f40d08f",
          "url": "https://github.com/fallow-rs/fallow/commit/7a9db3ff4e37e9279b56e9ffa7133aed251db180"
        },
        "date": 1780820449976,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 91193,
            "range": "± 1608",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4167693,
            "range": "± 247900",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6217217,
            "range": "± 191008",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29884444,
            "range": "± 917573",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114741,
            "range": "± 2481",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2304,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237191,
            "range": "± 52329",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1080100,
            "range": "± 21897",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1538907,
            "range": "± 18970",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 582265,
            "range": "± 13595",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4278526,
            "range": "± 50801",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4324924,
            "range": "± 37396",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2995913,
            "range": "± 5949",
            "unit": "ns/iter"
          }
        ]
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
          "id": "beb99e87d7e6d777f40639c07441d391cc2c0af7",
          "message": "fix(security): rank one-hop source helper sinks\n\nRecord conservative same-module helper summaries for function declarations, const arrow helpers, and const function expressions that return source-backed parameter paths. Locals initialized from one helper call now inherit the source-backed ranking signal while aliases, cross-module calls, helper chains, and shadowed helper names stay unbacked.\n\nBump the extract cache version and cover the behavior with extract-layer and security catalogue regressions, including hoisted functions and negative shadowed or multi-hop cases.\n\nFixes #878.",
          "timestamp": "2026-06-07T10:22:10+02:00",
          "tree_id": "751529794f7f11307bfba82b43e3b770c4dceb5a",
          "url": "https://github.com/fallow-rs/fallow/commit/beb99e87d7e6d777f40639c07441d391cc2c0af7"
        },
        "date": 1780820845276,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 91872,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3812154,
            "range": "± 179030",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5808036,
            "range": "± 191544",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29299461,
            "range": "± 618213",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117755,
            "range": "± 3909",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2319,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 230775,
            "range": "± 4240",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1048077,
            "range": "± 12215",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1496213,
            "range": "± 13939",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 567169,
            "range": "± 28030",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4242890,
            "range": "± 67007",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4289094,
            "range": "± 30465",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2910751,
            "range": "± 4330",
            "unit": "ns/iter"
          }
        ]
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
          "id": "71394a249e57846fca99797a9a48c06876cb79c5",
          "message": "fix(security): add issue 901 literal rows\n\nFixes #901.\n\nAdds the remaining literal-tier security catalogue rows for Electron unsafe BrowserWindow preferences, world-writable chmod modes, predictable temp-file writes, and mysql/mysql2 multipleStatements options.\n\nVerification passed locally:\n- cargo check --workspace\n- cargo test --workspace --all-targets\n- cargo clippy --workspace --all-targets -- -D warnings\n- cargo fmt --all -- --check\n- git diff --check\n- typos .\n- rustdoc with warnings denied\n- fallow audit JSON\n- real-project fallow security JSON smoke",
          "timestamp": "2026-06-07T10:31:01+02:00",
          "tree_id": "3d41dc604ae831b9e2577c74d0a182546c6d2b15",
          "url": "https://github.com/fallow-rs/fallow/commit/71394a249e57846fca99797a9a48c06876cb79c5"
        },
        "date": 1780821389251,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 71379,
            "range": "± 1364",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3856863,
            "range": "± 199867",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6013945,
            "range": "± 152848",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30749084,
            "range": "± 360057",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121759,
            "range": "± 878",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3055,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185615,
            "range": "± 4235",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821503,
            "range": "± 9853",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1322200,
            "range": "± 20110",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534426,
            "range": "± 13167",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3330766,
            "range": "± 35318",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3363203,
            "range": "± 45433",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2234539,
            "range": "± 5827",
            "unit": "ns/iter"
          }
        ]
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
          "id": "08912ff4b864e56e5e2f1439292338c12feb3207",
          "message": "fix(security): flag source-backed redos regex sinks\n\nCapture risky literal regex applications as source-backed security sink candidates. The extractor records the risky regex fragment for literal regexes and constant RegExp strings, then the existing catalogue emits redos-regex CWE-1333 findings only when the input traces to an untrusted source.\n\nSafe literal patterns, mutable regex bindings, and source-free inputs stay quiet. The extraction cache version is bumped because security_sinks now carries the optional regex fragment metadata.\n\nFixes #928.",
          "timestamp": "2026-06-07T10:38:38+02:00",
          "tree_id": "a4a3e3df008bb9c95870e97a515a18cd4009fd34",
          "url": "https://github.com/fallow-rs/fallow/commit/08912ff4b864e56e5e2f1439292338c12feb3207"
        },
        "date": 1780821903525,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 74696,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3745362,
            "range": "± 111180",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5854827,
            "range": "± 151311",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30179535,
            "range": "± 423206",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116517,
            "range": "± 3021",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2521,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185363,
            "range": "± 6701",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 817403,
            "range": "± 44820",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1315096,
            "range": "± 14980",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532695,
            "range": "± 10009",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3298973,
            "range": "± 31705",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3318155,
            "range": "± 31610",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2225793,
            "range": "± 10301",
            "unit": "ns/iter"
          }
        ]
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
          "id": "f7161395e92145f1e673fa5b9d99bf52e60ec28e",
          "message": "fix: tighten security source matching\n\nTighten framework-source detection and package-subpath provenance for the security catalogue follow-up.",
          "timestamp": "2026-06-07T11:20:22+02:00",
          "tree_id": "5294391a49e046cbaf9051049998d81006f00613",
          "url": "https://github.com/fallow-rs/fallow/commit/f7161395e92145f1e673fa5b9d99bf52e60ec28e"
        },
        "date": 1780824347696,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 75682,
            "range": "± 1794",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3785028,
            "range": "± 141973",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6079596,
            "range": "± 216928",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31885376,
            "range": "± 779640",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115256,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2393,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185452,
            "range": "± 3343",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821905,
            "range": "± 5305",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1330294,
            "range": "± 22144",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535070,
            "range": "± 20912",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3329284,
            "range": "± 28162",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3335891,
            "range": "± 51349",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2244802,
            "range": "± 14888",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c9a61199b79273e3aff6c43bd724ea781cef1c24",
          "message": "refactor: group file report inputs",
          "timestamp": "2026-06-07T11:44:44+02:00",
          "tree_id": "c26304f47df0fe3645a647cb63d5a4ba8bb60be6",
          "url": "https://github.com/fallow-rs/fallow/commit/c9a61199b79273e3aff6c43bd724ea781cef1c24"
        },
        "date": 1780827104235,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 74751,
            "range": "± 7405",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3821740,
            "range": "± 272047",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5872970,
            "range": "± 159057",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30050669,
            "range": "± 363430",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120028,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2402,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185078,
            "range": "± 15373",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819408,
            "range": "± 6444",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1316719,
            "range": "± 21392",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534219,
            "range": "± 11096",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3309156,
            "range": "± 28088",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3327797,
            "range": "± 75240",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2239785,
            "range": "± 21604",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "122a6fc5f4d96af9f131ff844780461637cd27f3",
          "message": "refactor: group large function inputs",
          "timestamp": "2026-06-07T12:33:17+02:00",
          "tree_id": "01280b9464e868236493ac18cbe2d933fbdc62a0",
          "url": "https://github.com/fallow-rs/fallow/commit/122a6fc5f4d96af9f131ff844780461637cd27f3"
        },
        "date": 1780831456922,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 97079,
            "range": "± 2033",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3910410,
            "range": "± 198313",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5771970,
            "range": "± 196531",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29454608,
            "range": "± 412525",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114155,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2327,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237103,
            "range": "± 17587",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1072299,
            "range": "± 4456",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1535269,
            "range": "± 22767",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574676,
            "range": "± 6336",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4379308,
            "range": "± 27569",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4395928,
            "range": "± 54848",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2993985,
            "range": "± 30208",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "0c0b0205780338c7db2742fb39ce0a548972cb96",
          "message": "refactor: group health snapshot inputs",
          "timestamp": "2026-06-07T13:53:56+02:00",
          "tree_id": "dbb08a2244f2d7815b6a8a006e6647c51718e376",
          "url": "https://github.com/fallow-rs/fallow/commit/0c0b0205780338c7db2742fb39ce0a548972cb96"
        },
        "date": 1780841846478,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35433,
            "range": "± 940",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 2610610,
            "range": "± 69594",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3896135,
            "range": "± 68000",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 19056541,
            "range": "± 723278",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 69067,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1783,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 100473,
            "range": "± 4611",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 449503,
            "range": "± 11351",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 741075,
            "range": "± 32926",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 319925,
            "range": "± 16209",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 1835011,
            "range": "± 33030",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 1826328,
            "range": "± 39058",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1238703,
            "range": "± 30822",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "65fcdcbe2e999e45fc3246ea8453aa314d5bb49b",
          "message": "fix: restore literal security tracking after rebase",
          "timestamp": "2026-06-07T23:54:53+02:00",
          "tree_id": "933a81834d1aa340d2108d5f1dfb5e509f47b2f7",
          "url": "https://github.com/fallow-rs/fallow/commit/65fcdcbe2e999e45fc3246ea8453aa314d5bb49b"
        },
        "date": 1780869757174,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 74869,
            "range": "± 3014",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3871652,
            "range": "± 152415",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5923675,
            "range": "± 196775",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31033998,
            "range": "± 746796",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116854,
            "range": "± 695",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2420,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185712,
            "range": "± 15203",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823720,
            "range": "± 5427",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1323965,
            "range": "± 18492",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 539381,
            "range": "± 13205",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3341559,
            "range": "± 35015",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3361807,
            "range": "± 35868",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2244192,
            "range": "± 10522",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tris203@gmail.com",
            "name": "Tristan Knight",
            "username": "tris203"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24a5b4ad426c3683a4ebad174ff3ef34c63e6ce4",
          "message": "feat(lsp): modernize diagnostics and add Neovim integration docs (#1033)\n\nMigrates the LSP server from tower-lsp/lsp-types to the maintained tower-lsp-server + ls-types, adds LSP 3.17 pull diagnostics with workspace/diagnostic/refresh, and documents Neovim integration.\n\nDiagnostic delivery keys on whether a client actually pulls (a real textDocument/diagnostic), not on the advertised refreshSupport, so push-only clients like the VS Code extension keep receiving open-file diagnostics while pull clients (Neovim, Zed, Helix) avoid duplicate push/pull namespaces. Diagnostic and code-lens refreshes are fire-and-forget so a slow client cannot stall analysis. Includes a Server::serve-level integration test and allows the MIT-0 license for the new dependency chain.",
          "timestamp": "2026-06-08T07:38:38+02:00",
          "tree_id": "b0f13f1e032cb209944a995f717de7bd1424ffe4",
          "url": "https://github.com/fallow-rs/fallow/commit/24a5b4ad426c3683a4ebad174ff3ef34c63e6ce4"
        },
        "date": 1780897435796,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 76572,
            "range": "± 986",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3770967,
            "range": "± 169802",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5970439,
            "range": "± 189971",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30265848,
            "range": "± 370879",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121502,
            "range": "± 870",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2385,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186363,
            "range": "± 1311",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823864,
            "range": "± 10134",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1322661,
            "range": "± 22320",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 539501,
            "range": "± 19247",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3318801,
            "range": "± 62345",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3342391,
            "range": "± 26840",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2247988,
            "range": "± 4799",
            "unit": "ns/iter"
          }
        ]
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
          "id": "a89af3aaad692a74ab9c95c5c18f13f735f4b347",
          "message": "fix(vscode): remove redundant pull diagnostic plumbing\n\nRemove the VS Code pull-disable override now that the LSP server uses observed pull requests, not advertised refresh support, to decide when push diagnostics should be suppressed.\n\nWire the existing diagnostic filter into pull diagnostics so editor mutes apply consistently across push and pull delivery. Refresh the LSP comments and rule prose to describe the observed-pull invariant without relying on the old VS Code-specific workaround.\n\nFixes #1041.",
          "timestamp": "2026-06-08T10:05:03+02:00",
          "tree_id": "3657139c14056a04cf96c3067dafd022d831406c",
          "url": "https://github.com/fallow-rs/fallow/commit/a89af3aaad692a74ab9c95c5c18f13f735f4b347"
        },
        "date": 1780906223772,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 74677,
            "range": "± 2597",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3890323,
            "range": "± 184216",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6017042,
            "range": "± 209537",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30863032,
            "range": "± 750521",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109461,
            "range": "± 1447",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2503,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186740,
            "range": "± 23642",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822951,
            "range": "± 61023",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317956,
            "range": "± 23311",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534128,
            "range": "± 12273",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3331609,
            "range": "± 83534",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3369997,
            "range": "± 28569",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2224924,
            "range": "± 87060",
            "unit": "ns/iter"
          }
        ]
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
          "id": "7a62ce34de8dd92f6635f71f0ffa122d6bc16c06",
          "message": "feat(cli): add --output-file / -o to write the report to a file\n\nAdds a global --output-file <PATH> flag (short -o) that redirects the rendered\nreport to a file instead of stdout, for any --format (human, JSON, SARIF,\ncompact, markdown, CodeClimate, badge, PR/MR comment and review envelopes),\nincluding bare/combined mode and audit. The file never contains ANSI codes, even\nwhen run attached to a TTY; progress and a 'Report written to <path>'\nconfirmation stay on stderr (suppressed by --quiet and by a no-content-written\nguard).\n\nImplemented as an ambient process-global sink (report/sink.rs) read by new\noutln!/out! macros that replace println!/print! at every report-content site,\nset once in main before dispatch so no Options struct threads the path and the\nprogrammatic/NAPI consumers are unaffected. Valid with\ndead-code/dupes/health/security/audit/bare (mirrors --sarif-file's gate) and\ncomposes with --sarif-file.\n\nCloses #1037.",
          "timestamp": "2026-06-08T10:09:54+02:00",
          "tree_id": "50fdf94a2068ecae8f043d90a09bd3942532352a",
          "url": "https://github.com/fallow-rs/fallow/commit/7a62ce34de8dd92f6635f71f0ffa122d6bc16c06"
        },
        "date": 1780906778665,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 75134,
            "range": "± 2801",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3890015,
            "range": "± 174645",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6053937,
            "range": "± 182260",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31837777,
            "range": "± 620986",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113285,
            "range": "± 1937",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2397,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186630,
            "range": "± 1869",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 825774,
            "range": "± 4329",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1330655,
            "range": "± 24340",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537888,
            "range": "± 21034",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3354734,
            "range": "± 34773",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3373503,
            "range": "± 93611",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2237753,
            "range": "± 10019",
            "unit": "ns/iter"
          }
        ]
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
          "id": "485fc8030389e7b4dfc848e1ce44c3f3d6cb0df1",
          "message": "feat(config): add configurable cache directory\n\nAdd `cache.dir` and `FALLOW_CACHE_DIR` so teams can relocate fallow's persistent extraction and audit snapshot caches outside the default `.fallow/` directory.\n\nKeep the default project-local cache path for compatibility, but print a one-time human first-run note when the default cache directory is newly created. Quiet runs, machine formats, CI, non-TTY paths, and `--no-cache` stay silent.\n\nFixes #1036.",
          "timestamp": "2026-06-08T10:23:39+02:00",
          "tree_id": "5704779c02e1e25d238fb58f7e800e31bd32499e",
          "url": "https://github.com/fallow-rs/fallow/commit/485fc8030389e7b4dfc848e1ce44c3f3d6cb0df1"
        },
        "date": 1780907355276,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 95738,
            "range": "± 2462",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4356826,
            "range": "± 188228",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6288524,
            "range": "± 260229",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31823786,
            "range": "± 1319514",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119494,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2323,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237469,
            "range": "± 7425",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069238,
            "range": "± 13254",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1512035,
            "range": "± 22220",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 580450,
            "range": "± 21842",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4485269,
            "range": "± 102420",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4387077,
            "range": "± 117461",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3002996,
            "range": "± 50624",
            "unit": "ns/iter"
          }
        ]
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
          "id": "db88c3d2cf5cfb5451e37df043467a0567a500e1",
          "message": "test(cli): make cache remap tests platform-neutral\n\nMake the cache remap tests build platform-native absolute paths from a temporary directory so they pass on Windows as well as Unix.",
          "timestamp": "2026-06-08T10:36:09+02:00",
          "tree_id": "1c59e514a9c420241c811ce14814e100c9e3f8cb",
          "url": "https://github.com/fallow-rs/fallow/commit/db88c3d2cf5cfb5451e37df043467a0567a500e1"
        },
        "date": 1780908133725,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 95963,
            "range": "± 2033",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3951332,
            "range": "± 217428",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6049057,
            "range": "± 187406",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29768474,
            "range": "± 543333",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113509,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2309,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 239110,
            "range": "± 31578",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1072568,
            "range": "± 143992",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1520118,
            "range": "± 17817",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 569185,
            "range": "± 39039",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4270727,
            "range": "± 26335",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4306983,
            "range": "± 30215",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2970125,
            "range": "± 7414",
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
          "id": "fd52fb8b248ce9bc1ec31e22ebcc7fec609a2d03",
          "message": "Merge pull request #1049 from fallow-rs/chore/license-team-to-pro-doc\n\nchore(license): reflect team -> pro tier rename in claims doc and fixtures",
          "timestamp": "2026-06-08T10:50:34+02:00",
          "tree_id": "136bc7b503f3d3268a87d2e2c08fc0baa7281511",
          "url": "https://github.com/fallow-rs/fallow/commit/fd52fb8b248ce9bc1ec31e22ebcc7fec609a2d03"
        },
        "date": 1780908945395,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 93543,
            "range": "± 1215",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4120444,
            "range": "± 161202",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6069304,
            "range": "± 217712",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29860510,
            "range": "± 485393",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115525,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2480,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236941,
            "range": "± 3861",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1064634,
            "range": "± 13658",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1501523,
            "range": "± 22702",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 558613,
            "range": "± 25769",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4261620,
            "range": "± 59452",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4290148,
            "range": "± 38760",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2963002,
            "range": "± 11533",
            "unit": "ns/iter"
          }
        ]
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
          "id": "baec513f7210dde8a55a774c6dbd256309531021",
          "message": "feat(security): detect resource amplification sinks (CWE-400) (#1034)\n\nAdd a source-backed resource-amplification (CWE-400) category to the opt-in\nfallow security tainted-sink catalogue. Untrusted request input that reaches\nArray(n) / new Array(n), Buffer.alloc / allocUnsafe / allocUnsafeSlow, or\nString.prototype.repeat / padStart / padEnd now surfaces as a candidate for\nagent verification, so an attacker-controlled size that drives an unbounded\nallocation no longer looks clean.\n\nThe extract visitor skips size arguments that are directly clamped with\nMath.min(input, literalCap) (or a nested Math.max(..., Math.min(...))) before\ncatalogue matching, keeping the rule false-negative-biased. The matcher set\nlives in crates/core/data/security_matchers.toml; the clamp pruning lives in\ncrates/extract/src/visitor/visit_impl.rs; CACHE_VERSION bumps 134 to 135\nbecause warm caches predate the clamp pruning. The category reuses the existing\ntainted-sink finding kind, so there is no new IssueKind, CLI flag, or output\nformat, and findings never appear under bare fallow or audit.\n\nFixes #929.",
          "timestamp": "2026-06-08T11:00:57+02:00",
          "tree_id": "c44966ba91d36f3fe0fc7aa20e0e77c2805f1042",
          "url": "https://github.com/fallow-rs/fallow/commit/baec513f7210dde8a55a774c6dbd256309531021"
        },
        "date": 1780909599190,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 76921,
            "range": "± 661",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3768667,
            "range": "± 194181",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6002962,
            "range": "± 211261",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30520335,
            "range": "± 429792",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118566,
            "range": "± 1342",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2448,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 187307,
            "range": "± 2230",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 828469,
            "range": "± 8625",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1331068,
            "range": "± 101427",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 541438,
            "range": "± 24580",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3347403,
            "range": "± 33333",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3390267,
            "range": "± 32776",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2251321,
            "range": "± 12182",
            "unit": "ns/iter"
          }
        ]
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
          "id": "1e134741270e263249f4228f5298094005dfdf62",
          "message": "feat(security): rank sinks by source reachability\n\nAdd module-level untrusted-source reachability to security candidate ranking. The ranking pass now seeds source modules from existing source catalogue evidence and value-import graph traversal, keeps runtime reachability ahead of the new signal, and excludes client-server leaks and hardcoded-secret candidates.\n\nSurface the context through JSON, SARIF, human output, MCP descriptions, VS Code tooltips, generated contracts, and changed-file filtering. The trace is ranking context only and does not prove value flow.\n\nFixes #885.",
          "timestamp": "2026-06-08T11:35:15+02:00",
          "tree_id": "5bac23ee53f8fa769371625e9d5feb5526b6d7a5",
          "url": "https://github.com/fallow-rs/fallow/commit/1e134741270e263249f4228f5298094005dfdf62"
        },
        "date": 1780911729864,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 81128,
            "range": "± 863",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3363844,
            "range": "± 180134",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5044698,
            "range": "± 207699",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23543167,
            "range": "± 354211",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103484,
            "range": "± 3509",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3133,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157999,
            "range": "± 1309",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 711160,
            "range": "± 6929",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1188060,
            "range": "± 12278",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 465823,
            "range": "± 5772",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2896396,
            "range": "± 15625",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2942252,
            "range": "± 18881",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1940568,
            "range": "± 6231",
            "unit": "ns/iter"
          }
        ]
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
          "id": "b6abad014ce375ed88a80cb57b0479dea588fa41",
          "message": "fix(security): keep source reachability diff matches\n\nShared diff filtering already retained security candidates when the sink anchor or detector trace matched the changed lines. Source reachability added a second trace under reachability, but that trace was not included in the diff predicate, so diff-scoped runs could hide a candidate introduced by an untrusted-source path change.\n\nInclude reachability.untrusted_source_trace in the shared diff filter, add regression coverage for that path, and update nearby comments so the ranking and SARIF docs describe the current source-reachability contract.\n\nFollow-up to #1050.",
          "timestamp": "2026-06-08T12:03:23+02:00",
          "tree_id": "3b3e8b4375605a49d7d50da1ab224a20e43afc17",
          "url": "https://github.com/fallow-rs/fallow/commit/b6abad014ce375ed88a80cb57b0479dea588fa41"
        },
        "date": 1780913348465,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 96614,
            "range": "± 961",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4276308,
            "range": "± 247642",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6029859,
            "range": "± 197793",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29347465,
            "range": "± 415922",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116181,
            "range": "± 695",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2304,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232808,
            "range": "± 25104",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1050856,
            "range": "± 8179",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1505648,
            "range": "± 18872",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 580711,
            "range": "± 15165",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4263324,
            "range": "± 26185",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4297546,
            "range": "± 27446",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2902513,
            "range": "± 7862",
            "unit": "ns/iter"
          }
        ]
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
          "id": "2e1d6f5b76f8f0e2510904b5bc25bdebc0be5835",
          "message": "feat(lsp): surface security candidates as opt-in diagnostics (#891)\n\nSurface AnalysisResults.security_findings as opt-in LSP diagnostics at INFORMATION severity (the LSP translation of the CLI's advisory framing for unverified candidates, not mapped from rule severity), with a confidence-first hover and a suppress code action. Reuses the existing diagnostics, hover, and code-action infrastructure; opt-in is automatic because the security rules default off and the LSP reuses the project config, so findings appear only when a rule is raised to warn or error.\n\nEach diagnostic carries structured data (kind, category, cwe, sourceBacked, reachableFromEntry, blastRadius, crossesBoundary) so agents reading editor diagnostics triage off the wire. The hover leads with the confidence signals and points to fallow security --file for the full trace. A line-level suppress is offered only for TaintedSink (the only kind whose detector honors line-level suppression); both kinds keep the file-level suppress.\n\nEditor-agnostic: the squiggle, hover, and code action work in any LSP client (VS Code, Neovim, Helix, Zed) with no client change.\n\nFixes #891.",
          "timestamp": "2026-06-08T14:26:30+02:00",
          "tree_id": "0c9527a081318ea6a8cfa0f10bdc655cf2de991b",
          "url": "https://github.com/fallow-rs/fallow/commit/2e1d6f5b76f8f0e2510904b5bc25bdebc0be5835"
        },
        "date": 1780921938917,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 95542,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4013605,
            "range": "± 238634",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6093491,
            "range": "± 155722",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29492077,
            "range": "± 450609",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116741,
            "range": "± 908",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2684,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 231910,
            "range": "± 6130",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1050790,
            "range": "± 20013",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1497567,
            "range": "± 16365",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 568978,
            "range": "± 14683",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4242098,
            "range": "± 29274",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4280692,
            "range": "± 49268",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2919061,
            "range": "± 13421",
            "unit": "ns/iter"
          }
        ]
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
          "id": "606aac909e8d2f0c64b9e9259bc98ae1a84687a8",
          "message": "feat(security): regression gate for new sinks in changed lines (#886)\n\nTier 1 of the security regression gate (#886). fallow security --gate new reports ONLY security-sink candidates introduced on a CHANGED line and exits 8 if any exist, so a PR can be gated on new exposure without gating on the whole candidate backlog. A refactor that merely touches a file already containing a sink passes; a diff the gate cannot compute is a loud exit 2, never a green gate.\n\nThe gate predicate is a separate, stricter pass than the advisory diff filter: it keeps a new sink anchor on an added line or an UntrustedSource/Sink trace hop on an added line, and drops the SecretSource file-level exception and pass-through hops. Exit 8 is dedicated and pure; the gate supersedes --fail-on-issues. Findings stay unverified candidates (REVIEW REQUIRED human output, SARIF level note with the verdict in run.properties.fallowGate, additive gate JSON block).\n\nTier 2 (newly-reachable reachability delta) is deferred and tracked in #1056.\n\nRefs #886.",
          "timestamp": "2026-06-08T15:36:55+02:00",
          "tree_id": "8f0b98e576157bf0833e26eb5727e9b23004b9c0",
          "url": "https://github.com/fallow-rs/fallow/commit/606aac909e8d2f0c64b9e9259bc98ae1a84687a8"
        },
        "date": 1780926277557,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 95225,
            "range": "± 1544",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4263830,
            "range": "± 249927",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6325655,
            "range": "± 284771",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31660705,
            "range": "± 1177542",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 124016,
            "range": "± 3828",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2416,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 241216,
            "range": "± 47373",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1125595,
            "range": "± 40565",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1531808,
            "range": "± 44224",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574614,
            "range": "± 26699",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4313473,
            "range": "± 75148",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4328455,
            "range": "± 68473",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2941446,
            "range": "± 70292",
            "unit": "ns/iter"
          }
        ]
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
          "id": "ea6e3daf3df99a5a3c637ab673f47abaa15c7269",
          "message": "fix(vscode,lsp): keep production mode in sync across editor surfaces (#1059)\n\n`fallow.production` reached the CLI-driven sidebar (`--production`) but was never forwarded to the `fallow-lsp` server, so the sidebar tree and the editor diagnostics disagreed on dead-code findings whenever production mode was on.\n\nThe setting is now forwarded to both surfaces and becomes a tri-state `auto` / `on` / `off` (default `auto`): `auto` defers to the project `.fallowrc.json`, `on` forces production on, `off` forces it off on both surfaces. A new global `--no-production` flag (conflicts with `--production`) gives the CLI sidebar the force-off the LSP override already has. `fallow.production` and the `fallow.duplication.*` settings now use `resource` scope so a stale global value no longer overrides a project's committed config.\n\nEditor-only: CI, `fallow dead-code`, and `fallow audit` are unchanged.\n\nFixes #1055.",
          "timestamp": "2026-06-08T16:28:34+02:00",
          "tree_id": "3e42f47c483e44bfdbbbe20c8f918b225be8ad6a",
          "url": "https://github.com/fallow-rs/fallow/commit/ea6e3daf3df99a5a3c637ab673f47abaa15c7269"
        },
        "date": 1780929340900,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 96219,
            "range": "± 2521",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4014065,
            "range": "± 153784",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5952538,
            "range": "± 186661",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29436608,
            "range": "± 459712",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117759,
            "range": "± 1002",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2345,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233103,
            "range": "± 9935",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1049825,
            "range": "± 10027",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1499368,
            "range": "± 14180",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 571087,
            "range": "± 7245",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4253560,
            "range": "± 51287",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4295461,
            "range": "± 61594",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2913325,
            "range": "± 9275",
            "unit": "ns/iter"
          }
        ]
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
          "id": "5dc83a4cb637758600098436cf11b665bf7b8c9e",
          "message": "feat(security): structure findings as agent-actionable candidate records\n\nReshape `fallow security --format json` so an AI agent can act on each finding directly. All additions are additive and output-only; the schema version stays V1, and human and SARIF output are unchanged.\n\nEvery finding gains a `candidate { source_kind, sink, boundary }` record (the untrusted-input kind as a stable catalogue id, a self-contained sink with the captured callee, and the boundary crossed), an optional `taint_flow { source, sink, path }` triple present only when an untrusted source is import-reachable to the sink, and a stable `finding_id` equal to its SARIF fingerprint for cross-run correlation. There is no `impact` field: deciding exploitability is the agent's job.\n\nThe candidate and taint_flow are pure re-projection of data the analysis already computes (the reachability pass, the previously-discarded catalogue source id, the SARIF fingerprint). No new taint analysis. The `taint_flow.path` is a compact shape; the full ordered hops stay on `reachability.untrusted_source_trace` and are not duplicated. The `export_visibility` and package boundary kinds are reserved for a follow-up rather than emitted as always-false.\n\nFixes #900.",
          "timestamp": "2026-06-08T16:54:37+02:00",
          "tree_id": "2f472a92829898760e8e8132db5451963b1167e7",
          "url": "https://github.com/fallow-rs/fallow/commit/5dc83a4cb637758600098436cf11b665bf7b8c9e"
        },
        "date": 1780930802101,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 77848,
            "range": "± 1486",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3759370,
            "range": "± 120107",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5872480,
            "range": "± 191637",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30273201,
            "range": "± 461393",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120858,
            "range": "± 1472",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2387,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186354,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821578,
            "range": "± 5047",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1318965,
            "range": "± 21976",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535023,
            "range": "± 28330",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3320812,
            "range": "± 38049",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3365244,
            "range": "± 29577",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2229626,
            "range": "± 9690",
            "unit": "ns/iter"
          }
        ]
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
          "id": "171d49a4c1acc707f3b08d19a7da20d27557fc31",
          "message": "feat(security): expand source-backed entry inputs\n\nAdd catalogue rows and extractor bindings for GraphQL resolver args, tRPC procedure input, webhook raw request bodies, and exact DOM source reads. The tRPC capture is limited to procedure chains so ordinary query callbacks do not gain a source-backed ranking signal.\\n\\nAdd focused extractor, catalogue, integration, and fixture coverage for the new source shapes. Bump the extraction cache version so warm caches re-extract files with the updated tainted-binding semantics.\\n\\nFixes #899.",
          "timestamp": "2026-06-08T20:12:53+02:00",
          "tree_id": "5fe67bda57eca90f39db59f1988b9466c120a98a",
          "url": "https://github.com/fallow-rs/fallow/commit/171d49a4c1acc707f3b08d19a7da20d27557fc31"
        },
        "date": 1780942697305,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 94599,
            "range": "± 820",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3884245,
            "range": "± 172653",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5965059,
            "range": "± 216585",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29404663,
            "range": "± 387629",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116064,
            "range": "± 3711",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2301,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235557,
            "range": "± 1786",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1067420,
            "range": "± 8697",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1509984,
            "range": "± 17209",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 578174,
            "range": "± 18742",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4377114,
            "range": "± 34001",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4417271,
            "range": "± 53691",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2964698,
            "range": "± 24340",
            "unit": "ns/iter"
          }
        ]
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
          "id": "22158ab9fd6601b6c00885558585df7e0dfd3577",
          "message": "feat(security): rank sink candidates with runtime coverage\n\nAdd opt-in runtime coverage enrichment to `fallow security` for tainted-sink candidates. The security output now records whether a candidate is runtime hot, runtime cold, never executed, or unknown when runtime evidence is supplied.\n\nUse the runtime state as an additive ranking signal: hot candidates move up, cold and never-executed candidates move down, and static reachability remains the fallback when no runtime evidence is available.\n\nFixes #887.",
          "timestamp": "2026-06-08T20:49:38+02:00",
          "tree_id": "c38248471c5de5f1794a4f80a492870f0b24ba49",
          "url": "https://github.com/fallow-rs/fallow/commit/22158ab9fd6601b6c00885558585df7e0dfd3577"
        },
        "date": 1780944931477,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 77028,
            "range": "± 779",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3752831,
            "range": "± 156707",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6042539,
            "range": "± 217105",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30406118,
            "range": "± 472241",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 106752,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2815,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185405,
            "range": "± 18078",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 817934,
            "range": "± 75171",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320509,
            "range": "± 26192",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 525912,
            "range": "± 33744",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3308812,
            "range": "± 26889",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3351080,
            "range": "± 30005",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2252268,
            "range": "± 8327",
            "unit": "ns/iter"
          }
        ]
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
          "id": "6215accdd197743fd176646afaad0c0d8139a0a2",
          "message": "feat(security): add attack surface inventory\n\nAdd an opt-in `fallow security --surface` JSON inventory that maps untrusted entry points to reachable sink candidates. The output is agent-facing and keeps defensive-boundary context as a verification prompt, not a human-facing missing-guard verdict.\n\nExpose the surface flag through MCP and keep the generated JSON schema and TypeScript contracts aligned with the new security output shape.\n\nFixes #888.",
          "timestamp": "2026-06-08T20:58:20+02:00",
          "tree_id": "1bb4928bc1a9e866aa2dff34bde53186d74a8a6e",
          "url": "https://github.com/fallow-rs/fallow/commit/6215accdd197743fd176646afaad0c0d8139a0a2"
        },
        "date": 1780945447449,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 77114,
            "range": "± 776",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3843682,
            "range": "± 137776",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5879029,
            "range": "± 194384",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30318596,
            "range": "± 385665",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118928,
            "range": "± 508",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2382,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186412,
            "range": "± 5529",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819732,
            "range": "± 4469",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1318666,
            "range": "± 17710",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530848,
            "range": "± 23800",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3307009,
            "range": "± 33182",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3323862,
            "range": "± 29964",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2233510,
            "range": "± 6329",
            "unit": "ns/iter"
          }
        ]
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
          "id": "1d26ae1ccca04cc69803a6ff3d19599c61cfb8d5",
          "message": "feat(security): secret-to-network exfil category with destination signal\n\nAdds an opt-in `secret-to-network` security candidate category (CWE-201): a non-public `process.env` / `import.meta.env` secret reaching a network sink's body/options argument (`fetch` / `axios` / `got` / `http(s).request`) via same-identifier source-backed flow, not module-level co-occurrence.\n\nBecause legitimate auth IS secret-to-network, the category is include-required (admitted only via `security.categories.include`, like `hardcoded-secret`). A new `requires_source_kinds` matcher field gates it to a SECRET source (`process-env` / `import-meta-env`), so request-input-to-fetch stays the `ssrf` category's job. Each candidate carries a destination-host signal (`candidate.network.destination`: the request URL when it is a static literal, usually intended auth, or absent when the destination is dynamic, the higher-signal exfil case) so a reviewing agent triages exfil from intended auth without re-reading source.\n\nThe change also stops treating public-by-convention env vars (`NEXT_PUBLIC_`, `VITE_`, `REACT_APP_`, ...) as secrets across the catalogue (the shared `is_public_env_var` predicate moved to fallow-types), which also removes a latent false positive from the shipped `secret-pii-log`, and models Vite's `import.meta.env` as a secret source via a new `flatten_member_path` MetaProperty arm. The destination is captured on `SinkSite.url_arg_literal`; `CACHE_VERSION` 137 -> 138. No new IssueKind or schema-version bump (the `candidate.network` field is additive, output-only). Hardcoded-secret-as-source and a provider-match heuristic are reserved follow-ups; the candidate carries no `impact` (the agent's job).\n\nFixes #890.",
          "timestamp": "2026-06-08T23:15:57+02:00",
          "tree_id": "5d94d6839aa477d6dc34a2cc579864ae75864225",
          "url": "https://github.com/fallow-rs/fallow/commit/1d26ae1ccca04cc69803a6ff3d19599c61cfb8d5"
        },
        "date": 1780953739372,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 98662,
            "range": "± 1514",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4064079,
            "range": "± 260595",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6017608,
            "range": "± 225071",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29331953,
            "range": "± 425231",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118072,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2381,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236193,
            "range": "± 4412",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069102,
            "range": "± 6607",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1521738,
            "range": "± 15644",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 569051,
            "range": "± 10318",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4350505,
            "range": "± 28749",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4404100,
            "range": "± 35644",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2979119,
            "range": "± 6680",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c36e7746273b0eb5f2887836f8af2a7a34a4e245",
          "message": "chore: release v2.90.0",
          "timestamp": "2026-06-08T23:44:08+02:00",
          "tree_id": "9f895f30acebc9b4fd91b0237ed49600a2f99968",
          "url": "https://github.com/fallow-rs/fallow/commit/c36e7746273b0eb5f2887836f8af2a7a34a4e245"
        },
        "date": 1780990565169,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 76176,
            "range": "± 804",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3768635,
            "range": "± 190517",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5955288,
            "range": "± 245176",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30271145,
            "range": "± 372602",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121144,
            "range": "± 901",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2381,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 183985,
            "range": "± 1960",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820967,
            "range": "± 14103",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317281,
            "range": "± 17921",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530916,
            "range": "± 10811",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3306694,
            "range": "± 60178",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3404276,
            "range": "± 80944",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2240368,
            "range": "± 8304",
            "unit": "ns/iter"
          }
        ]
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
          "id": "bd1ec11575519b16a32fa6da2d82dae72fa58e9d",
          "message": "fix(telemetry): report findings presence for audit and security\n\nAudit and security now report findings_present from the final results that users and agents see. Audit records the OR of its sub-results, including the no-change path as false, while security records whether the final filtered security_findings list is non-empty.\n\nThe regression coverage exercises inspect-mode telemetry for positive and clean audit and security runs, keeps no-analysis commands omitting the field, and updates the telemetry docs and changelog to match the wire contract.\n\nFixes #1060.",
          "timestamp": "2026-06-09T09:46:59+02:00",
          "tree_id": "864a4dc3a49e10890771d10e501c8d935b80e8b9",
          "url": "https://github.com/fallow-rs/fallow/commit/bd1ec11575519b16a32fa6da2d82dae72fa58e9d"
        },
        "date": 1780991532568,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 101782,
            "range": "± 920",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4106934,
            "range": "± 263366",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5894694,
            "range": "± 179487",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29776753,
            "range": "± 386052",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120430,
            "range": "± 3620",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2332,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236957,
            "range": "± 2389",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1077463,
            "range": "± 26758",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1530421,
            "range": "± 23953",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576890,
            "range": "± 19499",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4398334,
            "range": "± 97391",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4399316,
            "range": "± 78711",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2992287,
            "range": "± 28370",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b6aaa2eefeb3a8148f0164a029cf03eda6f0a1d2",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.90.0",
          "timestamp": "2026-06-09T10:11:20+02:00",
          "tree_id": "6b930100cf05e06bc723b4103776f8dda355cfbc",
          "url": "https://github.com/fallow-rs/fallow/commit/b6aaa2eefeb3a8148f0164a029cf03eda6f0a1d2"
        },
        "date": 1780993003227,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 78219,
            "range": "± 3582",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3886362,
            "range": "± 248864",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6040301,
            "range": "± 171809",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30598110,
            "range": "± 399444",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115893,
            "range": "± 4671",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2533,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185649,
            "range": "± 4540",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819546,
            "range": "± 9233",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321936,
            "range": "± 29303",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 528211,
            "range": "± 9699",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3330112,
            "range": "± 83284",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3344073,
            "range": "± 28928",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2246188,
            "range": "± 6417",
            "unit": "ns/iter"
          }
        ]
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
          "id": "3d2577419d553a28adceb0b3a045c76e43182272",
          "message": "test(core): cover issue 1032 multi-entry workspaces\n\nExtend the issue 1032 regression fixture so the workspace tsconfig case matches the reporter's follow-up shape: no root tsconfig, multiple runtime entry modules, and per-module path mappings into a sibling package src tree.\n\nThe assertions now prove App, Backend, Event, and the aliased Firlefanz source file remain reachable while unrelated sibling source still reports unused. This is test-only coverage for the already released fix.\n\nFollow-up to #1032.",
          "timestamp": "2026-06-09T11:40:26+02:00",
          "tree_id": "742392e37006d00e20a6547b7e51024124b31e06",
          "url": "https://github.com/fallow-rs/fallow/commit/3d2577419d553a28adceb0b3a045c76e43182272"
        },
        "date": 1780998349158,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 58267,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3186065,
            "range": "± 128139",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4901762,
            "range": "± 156523",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 24689647,
            "range": "± 934358",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 83345,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1870,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143680,
            "range": "± 11388",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 636481,
            "range": "± 28391",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1020488,
            "range": "± 14293",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 409982,
            "range": "± 9553",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2561570,
            "range": "± 18631",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2600029,
            "range": "± 77033",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1725346,
            "range": "± 17151",
            "unit": "ns/iter"
          }
        ]
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
          "id": "4ed32a0de76079a62b8102696b8b4c7b4a0b2819",
          "message": "feat(telemetry): split admin workflow buckets\n\nTelemetry now labels project inventory, setup, and license command families with coarse workflow values instead of collapsing them into unknown. Watch remains grouped with code quality review because it continuously reruns analysis.\n\nThe regression tests cover routing, inspect-mode payloads, and the absence of findings_present for non-analysis commands. The telemetry docs and changelog describe the allowlisted buckets and privacy boundary.\n\nFixes #1061.",
          "timestamp": "2026-06-09T11:55:30+02:00",
          "tree_id": "37b923db945eb8d35ccbe877c5f8f342d4904085",
          "url": "https://github.com/fallow-rs/fallow/commit/4ed32a0de76079a62b8102696b8b4c7b4a0b2819"
        },
        "date": 1780999323486,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 76137,
            "range": "± 784",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3931276,
            "range": "± 151844",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6066175,
            "range": "± 181406",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31682510,
            "range": "± 983358",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110181,
            "range": "± 669",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2398,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184866,
            "range": "± 6101",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818835,
            "range": "± 3298",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317548,
            "range": "± 18558",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536169,
            "range": "± 7850",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3322085,
            "range": "± 32747",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3367429,
            "range": "± 117100",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2238963,
            "range": "± 46297",
            "unit": "ns/iter"
          }
        ]
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
          "id": "705379c845d566deb9e557809aa8f74c30b99ac5",
          "message": "feat(telemetry): add failure reason\n\nRecord a coarse allowlisted failure_reason on failed workflow telemetry events. Known post-parse validation, diff setup, and unsupported-format failures are tagged at explicit failure boundaries, while unclassified failures stay unknown instead of parsing error text.\n\nSuccessful workflow events continue to omit the field. The inspect-mode tests, telemetry docs, and packaged skill reference cover the new allowlist and omission behavior.\n\nFixes #1063.",
          "timestamp": "2026-06-09T12:05:20+02:00",
          "tree_id": "a5a257027c1195ead5daadcb6139f63ffff570e0",
          "url": "https://github.com/fallow-rs/fallow/commit/705379c845d566deb9e557809aa8f74c30b99ac5"
        },
        "date": 1780999857032,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 77437,
            "range": "± 1168",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3861710,
            "range": "± 187015",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6097796,
            "range": "± 187743",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31306121,
            "range": "± 1085157",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116973,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2380,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184810,
            "range": "± 5842",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819864,
            "range": "± 5655",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320978,
            "range": "± 15834",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531662,
            "range": "± 17558",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3342526,
            "range": "± 58505",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3337507,
            "range": "± 69268",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2229813,
            "range": "± 18876",
            "unit": "ns/iter"
          }
        ]
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
          "id": "da9fe17065e5c736eb0b8da6e5077503095e8806",
          "message": "perf(telemetry): spool events and upload on the next run to remove the hot-path block\n\nTelemetry was recorded at process exit and the upload blocked the main thread up to 200ms (about 50ms on a healthy network) to let the POST land before exit, adding latency to every telemetry-enabled run and contradicting the module's never-add-latency contract. Warm dead-code on zod went from 33ms to 105ms.\n\nAppend the serialized event to a local spool (telemetry-spool.jsonl, next to telemetry.json) at exit, which is sub-millisecond and network-free, and drain plus POST it on a detached thread at the start of the next run where it overlaps analysis. The spool is bounded on the write path (a single fstat against SPOOL_MAX_BYTES, trim to the newest SPOOL_MAX_EVENTS) rather than by the drain finishing, because on a fast command the detached drain is abandoned mid-POST and its own cap never runs. The drain is flock-guarded, POSTs oldest-first, stops at the first failure, drops corrupt lines, and atomically rewrites the undelivered tail. Inspect and disabled modes write and upload nothing; the payload is unchanged.\n\nWarm dead-code on zod with telemetry enabled drops from ~105ms to ~35ms, matching telemetry-off.",
          "timestamp": "2026-06-09T12:22:12+02:00",
          "tree_id": "d05a9eff4bc92a1fd820090728b25c92a99f539f",
          "url": "https://github.com/fallow-rs/fallow/commit/da9fe17065e5c736eb0b8da6e5077503095e8806"
        },
        "date": 1781000964096,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 76034,
            "range": "± 3015",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3790482,
            "range": "± 135875",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5895192,
            "range": "± 163267",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30577674,
            "range": "± 625914",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120416,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2446,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184116,
            "range": "± 9252",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818513,
            "range": "± 4944",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320762,
            "range": "± 29919",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533746,
            "range": "± 13622",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3297346,
            "range": "± 28455",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3330493,
            "range": "± 43383",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2224824,
            "range": "± 4265",
            "unit": "ns/iter"
          }
        ]
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
          "id": "aceeecd930028947fd21302a3fa83b59cfb671c0",
          "message": "feat(telemetry): add outcome buckets\n\nRecord coarse result-count buckets and review/report truncation fields in workflow telemetry without exposing exact counts, paths, rule ids, finding names, or snippets.\n\nWire the bucket helpers from final command results, preserve the existing findings_present and failure_reason contracts, and document the inspect-mode payload.\n\nFixes #1080.",
          "timestamp": "2026-06-09T12:27:46+02:00",
          "tree_id": "80875a5447f76a36f50e2783c77413048eea30a5",
          "url": "https://github.com/fallow-rs/fallow/commit/aceeecd930028947fd21302a3fa83b59cfb671c0"
        },
        "date": 1781001299686,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 97651,
            "range": "± 1258",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4038581,
            "range": "± 198355",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6111830,
            "range": "± 170752",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30608328,
            "range": "± 994408",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116830,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2326,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236971,
            "range": "± 4031",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1076292,
            "range": "± 13959",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1533285,
            "range": "± 17109",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574275,
            "range": "± 13748",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4328586,
            "range": "± 38272",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4273156,
            "range": "± 40656",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3002656,
            "range": "± 14769",
            "unit": "ns/iter"
          }
        ]
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
          "id": "57b444fab427b1b8ed98377e85ddf24c7a4c0c14",
          "message": "feat(telemetry): expose safe follow-up dimensions\n\nCloses #1078.\n\nAdds privacy-safe parent-run follow-up dimensions to telemetry events, keeps raw parent-run tokens out of event properties, and uses sanitized correlation only as private upload metadata.",
          "timestamp": "2026-06-09T12:40:24+02:00",
          "tree_id": "e0a90a49ed6066aadc6c6713da12fe2b5c2edf7d",
          "url": "https://github.com/fallow-rs/fallow/commit/57b444fab427b1b8ed98377e85ddf24c7a4c0c14"
        },
        "date": 1781002010261,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 75836,
            "range": "± 1887",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3980074,
            "range": "± 161551",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6201007,
            "range": "± 211125",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32690649,
            "range": "± 709976",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120561,
            "range": "± 694",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2413,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185459,
            "range": "± 1859",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 827046,
            "range": "± 8571",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1330368,
            "range": "± 27789",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 554992,
            "range": "± 50066",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3381632,
            "range": "± 39299",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3408882,
            "range": "± 41914",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2252696,
            "range": "± 10024",
            "unit": "ns/iter"
          }
        ]
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
          "id": "e10ddd5b4a0df3e4acdcadae99d3457450669b30",
          "message": "feat(telemetry): add cache context to code quality review\n\nAdd a privacy-safe cache_state dimension for combined code_quality_review telemetry events. Values are allowlisted to cold, warm, partial, or unknown, and raw cache paths, directories, counts, timings, and repository identifiers stay out of the payload.\n\nPreserve the existing telemetry dimensions from current main, including admin workflow buckets, failure reason, outcome buckets, result count and truncation fields, spooled delivery, and safe follow-up dimensions.\n\nFixes #1062.",
          "timestamp": "2026-06-09T12:47:19+02:00",
          "tree_id": "910a85f6e77f27f144158d94ea187114e5b64869",
          "url": "https://github.com/fallow-rs/fallow/commit/e10ddd5b4a0df3e4acdcadae99d3457450669b30"
        },
        "date": 1781002487490,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 74358,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3954890,
            "range": "± 167549",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6308796,
            "range": "± 197434",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33343898,
            "range": "± 968860",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109456,
            "range": "± 632",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2385,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185387,
            "range": "± 9966",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822552,
            "range": "± 9566",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1331084,
            "range": "± 20272",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535979,
            "range": "± 13025",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3351375,
            "range": "± 64801",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3454217,
            "range": "± 64186",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2263363,
            "range": "± 43205",
            "unit": "ns/iter"
          }
        ]
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
          "id": "3290cd87a23554fdab424758851ec10c63d82d69",
          "message": "feat(telemetry): add coarse run context dimensions\n\nAdd privacy-preserving workflow context fields for run scope, config shape, report destination, and analysis mode. The CLI derives them from parsed arguments and already-loaded config state, using fixed enum buckets only.\n\nExtend inspect-mode coverage and telemetry docs so agents and operators can verify the exact payload shape without sending events. The event contract avoids raw paths, workspace names, config file names, rule names, package names, command lines, and repository identifiers.\n\nFixes #1079.",
          "timestamp": "2026-06-09T12:53:13+02:00",
          "tree_id": "36eaa2de14cf47d05eb6c703f9db123ef4ce60ed",
          "url": "https://github.com/fallow-rs/fallow/commit/3290cd87a23554fdab424758851ec10c63d82d69"
        },
        "date": 1781002941124,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 99748,
            "range": "± 9034",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4126662,
            "range": "± 173628",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6069444,
            "range": "± 164112",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31457486,
            "range": "± 592906",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114750,
            "range": "± 3462",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2381,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 238686,
            "range": "± 20117",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1080359,
            "range": "± 17631",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1538971,
            "range": "± 18022",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 581290,
            "range": "± 12032",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4349812,
            "range": "± 52882",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4357246,
            "range": "± 118328",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3010996,
            "range": "± 32691",
            "unit": "ns/iter"
          }
        ]
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
          "id": "b69e2ead08540bdf26e99716e355b8db3d6b30b8",
          "message": "feat(telemetry): add scale buckets\n\nOpt-in telemetry now records coarse file-count, function-count, and average fan-out buckets for eligible analysis workflows.\n\nThe values are derived only from counts and graph counters that the workflow already computed, so exact counts, paths, dependency names, graph diameter, depth, and coupling metrics stay out of the payload.\n\nFixes #1064.",
          "timestamp": "2026-06-09T13:02:12+02:00",
          "tree_id": "d78ebcea9f0ffda82428112510cc6a229a05e343",
          "url": "https://github.com/fallow-rs/fallow/commit/b69e2ead08540bdf26e99716e355b8db3d6b30b8"
        },
        "date": 1781003392946,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 76944,
            "range": "± 1236",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3840089,
            "range": "± 147050",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6214146,
            "range": "± 252764",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32508440,
            "range": "± 611952",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114387,
            "range": "± 3264",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2394,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186025,
            "range": "± 8514",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 825264,
            "range": "± 12547",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1323639,
            "range": "± 32794",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 542886,
            "range": "± 17100",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3340572,
            "range": "± 32980",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3382176,
            "range": "± 205457",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2239438,
            "range": "± 8146",
            "unit": "ns/iter"
          }
        ]
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
          "id": "cd4f982b7ee8249dc6e2207d206142069b74987c",
          "message": "feat(security): propagate taint through local bindings\n\nRecord source-backed local bindings when template literals, string concatenation, or object literals embed recognized untrusted source member paths. This keeps fallow security in the existing advisory candidate model while improving rank and evidence for common injection shapes.\n\nThe extractor keeps propagation one-hop and same-module, bumps the extraction cache version, and adds focused visitor plus integration coverage for the new binding forms.\n\nFixes #1095.",
          "timestamp": "2026-06-09T14:03:34+02:00",
          "tree_id": "c59e3a586828feb13337fc683e91d8d5511c42bb",
          "url": "https://github.com/fallow-rs/fallow/commit/cd4f982b7ee8249dc6e2207d206142069b74987c"
        },
        "date": 1781006999098,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 75329,
            "range": "± 1776",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4174524,
            "range": "± 173537",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6424317,
            "range": "± 249680",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32690806,
            "range": "± 678684",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109508,
            "range": "± 5328",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2407,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185821,
            "range": "± 5185",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819715,
            "range": "± 12353",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1315010,
            "range": "± 26768",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535510,
            "range": "± 13430",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3323764,
            "range": "± 54771",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3352245,
            "range": "± 44921",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2231284,
            "range": "± 40100",
            "unit": "ns/iter"
          }
        ]
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
          "id": "6996b9675e53accd9048c0e0769daea6b4d7999d",
          "message": "fix(security): emit SARIF code flows and CWE metadata\n\nFixes #1097.",
          "timestamp": "2026-06-09T14:23:21+02:00",
          "tree_id": "fa5b26ae1b6b67576123e50322bc9e1f6475f4d0",
          "url": "https://github.com/fallow-rs/fallow/commit/6996b9675e53accd9048c0e0769daea6b4d7999d"
        },
        "date": 1781008106575,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 98648,
            "range": "± 1992",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4196794,
            "range": "± 143348",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6233741,
            "range": "± 201310",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30926036,
            "range": "± 853293",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110858,
            "range": "± 2357",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2295,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236661,
            "range": "± 1994",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1068026,
            "range": "± 47703",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1526237,
            "range": "± 12706",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 557289,
            "range": "± 26957",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4219614,
            "range": "± 30651",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4231449,
            "range": "± 31643",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2960423,
            "range": "± 92279",
            "unit": "ns/iter"
          }
        ]
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
          "id": "70d5167074917d27e02531e8a669463bb52784c5",
          "message": "fix(discover): skip oversized files to guard against large-repo OOM (#1107)\n\nRunning `fallow` at a large repository root read and parsed every discovered source file at once, so one multi-megabyte generated, vendored, or bundled file could exhaust all memory and hang before producing output.\n\nFallow now skips source files larger than a per-file limit (default 5 MB) at discovery, never reading, parsing, or analyzing them. Declaration files are exempt. The limit is set via `--max-file-size <MB>` or `FALLOW_MAX_FILE_SIZE` (`0` disables it). Skipped files surface in `workspace_diagnostics[]` (`kind: \"skipped-large-file\"`) and an aggregated stderr warn; a pre-parse note lists the largest files when the set or a single file is unusually large. Default ignores gain `*.bundle.js` and `*.min.cjs`.\n\nThe durable bounded-parse fix (#1104) and the VS Code backoff/memory ceiling (#1105) are tracked separately.\n\nRefs #1086.",
          "timestamp": "2026-06-09T14:34:59+02:00",
          "tree_id": "68aa2e0bba334fe16255fdcc9b6e63390532db3f",
          "url": "https://github.com/fallow-rs/fallow/commit/70d5167074917d27e02531e8a669463bb52784c5"
        },
        "date": 1781008870211,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 76159,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3959893,
            "range": "± 170683",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6027715,
            "range": "± 322354",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31101460,
            "range": "± 500781",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116026,
            "range": "± 1547",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2408,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186174,
            "range": "± 6143",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822899,
            "range": "± 11006",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1323061,
            "range": "± 47986",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536492,
            "range": "± 9028",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3346976,
            "range": "± 45639",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3379900,
            "range": "± 67526",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2265077,
            "range": "± 35821",
            "unit": "ns/iter"
          }
        ]
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
          "id": "86401d73c8451a47b76250779e34f6b82f3de78f",
          "message": "feat(security): recognize declarative validation controls\n\nFixes #1094.",
          "timestamp": "2026-06-09T14:59:10+02:00",
          "tree_id": "8de7afdfc3992f82ea5dc2282ee735a1c965280c",
          "url": "https://github.com/fallow-rs/fallow/commit/86401d73c8451a47b76250779e34f6b82f3de78f"
        },
        "date": 1781010270631,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 104405,
            "range": "± 5150",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4300607,
            "range": "± 169720",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6282940,
            "range": "± 201772",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34478781,
            "range": "± 853036",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118921,
            "range": "± 811",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2336,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232690,
            "range": "± 3441",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1051358,
            "range": "± 11476",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1506351,
            "range": "± 15622",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576580,
            "range": "± 14225",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4290215,
            "range": "± 39680",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4353117,
            "range": "± 29125",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2932533,
            "range": "± 6448",
            "unit": "ns/iter"
          }
        ]
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
          "id": "e823fe3032315b7f69a3c29ee980d732626ca515",
          "message": "fix(cli): explain security categories\n\nAdd security rule metadata to the standalone explain command so users can inspect tainted-sink, client-server-leak, hardcoded-secret, and catalogue-backed security IDs without running a scan.\n\nThe implementation keeps security detection and output unchanged. It adds drift guards against the security matcher catalogue and CLI regression coverage for the required explain tokens.\n\nFixes #1098.",
          "timestamp": "2026-06-09T15:06:44+02:00",
          "tree_id": "298ef81a734eaae9f9791955eb5c4a55fa86ffb5",
          "url": "https://github.com/fallow-rs/fallow/commit/e823fe3032315b7f69a3c29ee980d732626ca515"
        },
        "date": 1781010875248,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 101258,
            "range": "± 2812",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3851932,
            "range": "± 226277",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5969737,
            "range": "± 210660",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32678125,
            "range": "± 448452",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116236,
            "range": "± 656",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2360,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233458,
            "range": "± 3029",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1049472,
            "range": "± 38679",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1500419,
            "range": "± 14534",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576126,
            "range": "± 7250",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4259856,
            "range": "± 26265",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4307051,
            "range": "± 32059",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2921353,
            "range": "± 11597",
            "unit": "ns/iter"
          }
        ]
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
          "id": "a3eb38a2d942345236c4deba2f9488c3cf2dcbe9",
          "message": "fix(core): release graph-only parse payloads\n\nRelease extraction vectors that resolution and graph construction have already consumed, while keeping the module data needed by analysis, health, security, LSP, coverage, and fix drift checks.\n\nAdd focused unit coverage for the ModuleInfo compaction boundary and an integration regression that proves retained modules are compacted after analysis without losing line offsets or complexity data.\n\nFixes #1104.",
          "timestamp": "2026-06-09T15:10:55+02:00",
          "tree_id": "971c5f1f7f27428a9b056bad3472be2fa4fc89e6",
          "url": "https://github.com/fallow-rs/fallow/commit/a3eb38a2d942345236c4deba2f9488c3cf2dcbe9"
        },
        "date": 1781011258919,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 103449,
            "range": "± 803",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3991802,
            "range": "± 170308",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6061211,
            "range": "± 171689",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33435475,
            "range": "± 726914",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117731,
            "range": "± 1671",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2328,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236530,
            "range": "± 39149",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1072319,
            "range": "± 17933",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1526194,
            "range": "± 15030",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 573876,
            "range": "± 17255",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4408354,
            "range": "± 43282",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4314704,
            "range": "± 66910",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2980207,
            "range": "± 18638",
            "unit": "ns/iter"
          }
        ]
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
          "id": "0de37afb42cb9e8d5694ecd5d8dc8721abb611ee",
          "message": "feat(security): receiver-gate HTTP sources, tier arg-vs-module taint (#1092, #1093)\n\nReceiver-gate the global HTTP-input source patterns (*.query/*.params/*.body) by a request-object allowlist so ORM receivers (db.query, prisma.query, knex) no longer classify their module as an untrusted source (#1092). Add a structured taint_confidence (arg-level | module-level) tier, a ModuleSource trace role for honest module-level labeling, and anchor the arg-level trace source node at the real source-read line via TaintedBinding.source_span_start (#1093). Ranking and gating behavior unchanged.\n\nCloses #1092.\nCloses #1093.",
          "timestamp": "2026-06-09T15:45:39+02:00",
          "tree_id": "c99c920981f97a03d4dadde9630e0062a1f74bd0",
          "url": "https://github.com/fallow-rs/fallow/commit/0de37afb42cb9e8d5694ecd5d8dc8721abb611ee"
        },
        "date": 1781013392274,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62530,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3254401,
            "range": "± 149612",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5080248,
            "range": "± 172742",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26043616,
            "range": "± 621310",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 87713,
            "range": "± 1653",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1877,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143746,
            "range": "± 871",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 636316,
            "range": "± 13732",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1026344,
            "range": "± 15429",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 414669,
            "range": "± 21760",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2571062,
            "range": "± 17166",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2596350,
            "range": "± 17863",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1734467,
            "range": "± 18833",
            "unit": "ns/iter"
          }
        ]
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
          "id": "32499248e30eebfc284ebfc71e99c8ecd0fcd84c",
          "message": "feat(security): surface severity tiers\n\nDerive high, medium, and low review-priority tiers for security candidates from runtime, reachability, boundary, and source-backed signals. Surface the tier in JSON, human output, SARIF levels, generated schemas, TypeScript contracts, and editor fixtures while keeping candidates unverified and gates unchanged.\n\nFixes #1096.",
          "timestamp": "2026-06-09T16:29:46+02:00",
          "tree_id": "98b5c7639f800f699b5d9f3cab5bc2a3dcbb44e7",
          "url": "https://github.com/fallow-rs/fallow/commit/32499248e30eebfc284ebfc71e99c8ecd0fcd84c"
        },
        "date": 1781015705910,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 81030,
            "range": "± 2036",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3858890,
            "range": "± 149313",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5951605,
            "range": "± 236770",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33147391,
            "range": "± 499710",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116963,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2437,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185641,
            "range": "± 5327",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 825017,
            "range": "± 103374",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1328839,
            "range": "± 145027",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538167,
            "range": "± 12704",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3334178,
            "range": "± 27510",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3381237,
            "range": "± 29756",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2247819,
            "range": "± 11394",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "340a1d11c5a82864bc58a610f6a17e834737340a",
          "message": "fix: align security candidate severity contract",
          "timestamp": "2026-06-09T17:17:45+02:00",
          "tree_id": "c57698d52272a66ee3d8d6654c464866f74be90e",
          "url": "https://github.com/fallow-rs/fallow/commit/340a1d11c5a82864bc58a610f6a17e834737340a"
        },
        "date": 1781018664130,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 80313,
            "range": "± 1499",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4050154,
            "range": "± 143883",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6128516,
            "range": "± 220223",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34829887,
            "range": "± 613220",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115942,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2408,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185894,
            "range": "± 1811",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821415,
            "range": "± 22632",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321224,
            "range": "± 18368",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531197,
            "range": "± 34848",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3313748,
            "range": "± 44958",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3357883,
            "range": "± 27320",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2228153,
            "range": "± 4038",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6e87e12ff54a666badd1650aa191ededaad73237",
          "message": "chore: release v2.91.0",
          "timestamp": "2026-06-09T19:41:02+02:00",
          "tree_id": "1fee3017d90914a5f4c943759438d5c04de082bb",
          "url": "https://github.com/fallow-rs/fallow/commit/6e87e12ff54a666badd1650aa191ededaad73237"
        },
        "date": 1781027250465,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 79872,
            "range": "± 1719",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3874373,
            "range": "± 198062",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6025783,
            "range": "± 193975",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32914808,
            "range": "± 485371",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112918,
            "range": "± 685",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2390,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185348,
            "range": "± 2324",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820545,
            "range": "± 13034",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1318759,
            "range": "± 22775",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532972,
            "range": "± 37950",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3318138,
            "range": "± 31528",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3331832,
            "range": "± 108352",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2231290,
            "range": "± 5951",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "84f2b2e8b10f48a66121f4c64d9bada29883fab4",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.91.0",
          "timestamp": "2026-06-09T20:20:36+02:00",
          "tree_id": "d6a31bd8377cf9b07e0cb17545aa04a06b8f3038",
          "url": "https://github.com/fallow-rs/fallow/commit/84f2b2e8b10f48a66121f4c64d9bada29883fab4"
        },
        "date": 1781029564231,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 103525,
            "range": "± 3273",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4165427,
            "range": "± 170420",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6188492,
            "range": "± 192470",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33821684,
            "range": "± 907500",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115834,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2384,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237422,
            "range": "± 1532",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1079807,
            "range": "± 8497",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1537447,
            "range": "± 15332",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 603262,
            "range": "± 37618",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4346212,
            "range": "± 51830",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4349334,
            "range": "± 44312",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3026539,
            "range": "± 34517",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a97fb2d4635557aa5896d086fa3822698edce25d",
          "message": "docs: correct npm README knip speed multipliers to match benchmarks",
          "timestamp": "2026-06-09T21:57:34+02:00",
          "tree_id": "e0f31cb68e00d79e7f37e0c889c61876352a9986",
          "url": "https://github.com/fallow-rs/fallow/commit/a97fb2d4635557aa5896d086fa3822698edce25d"
        },
        "date": 1781035386168,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 80874,
            "range": "± 2369",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3792773,
            "range": "± 140077",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5955827,
            "range": "± 167773",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32897438,
            "range": "± 545229",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113052,
            "range": "± 707",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2398,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185507,
            "range": "± 2492",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818842,
            "range": "± 67552",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320483,
            "range": "± 15404",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532230,
            "range": "± 9312",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3360968,
            "range": "± 146713",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3336796,
            "range": "± 57100",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2239212,
            "range": "± 39729",
            "unit": "ns/iter"
          }
        ]
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
          "id": "4491deceee75ff2766a3a2ce2db68b2fc1a2d17f",
          "message": "fix(discovery): skip large minified JS assets\n\nVite-style generated assets can be smaller than the per-file byte limit while still expanding into very large parser and extraction payloads. Treat large one-line JS assets as generated output during source discovery while the max-file-size guard is enabled.\n\nThe discovery walk now records skipped minified assets as skipped-minified-file diagnostics, keeps --max-file-size 0 as the opt-out, and leaves declaration files plus large multiline JS in the analyzed set. The output schema, generated TypeScript contracts, and CLI reference now document the new diagnostic kind.\n\nFixes #1086.",
          "timestamp": "2026-06-09T22:33:13+02:00",
          "tree_id": "dc19f1e03e7c7a16aafe650497b07bbaa62c7ad3",
          "url": "https://github.com/fallow-rs/fallow/commit/4491deceee75ff2766a3a2ce2db68b2fc1a2d17f"
        },
        "date": 1781037602019,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 103336,
            "range": "± 3568",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3979576,
            "range": "± 226075",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5972804,
            "range": "± 206194",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32625868,
            "range": "± 1035109",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119884,
            "range": "± 1197",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2343,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235986,
            "range": "± 1624",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070429,
            "range": "± 6450",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1523246,
            "range": "± 13654",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 571769,
            "range": "± 7331",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4361478,
            "range": "± 26070",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4378953,
            "range": "± 29410",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2984948,
            "range": "± 8908",
            "unit": "ns/iter"
          }
        ]
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
          "id": "bac297f6ded5ea0481b58a2add428b7ea80e438c",
          "message": "feat(security): configure request receivers\n\nAdd `security.requestReceivers` so projects can register local HTTP request object names that should participate in tainted input detection.\n\nThe config stays additive to the built-in receiver list and is validated through the config schema. The detector now uses the configured receivers for local source tracking, direct sink arguments, and the ranking pass that marks findings as reachable from untrusted input.\n\nThe fixture covers configured, built-in, and unconfigured receiver behavior, including the expected arg-level reachability for configured request receivers.\n\nFixes #1125.",
          "timestamp": "2026-06-09T22:42:39+02:00",
          "tree_id": "9a41c09830b597b4e7bb293c2fa1f96b97ca69de",
          "url": "https://github.com/fallow-rs/fallow/commit/bac297f6ded5ea0481b58a2add428b7ea80e438c"
        },
        "date": 1781038090371,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 102725,
            "range": "± 3535",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3807687,
            "range": "± 184039",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5829784,
            "range": "± 157819",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32279887,
            "range": "± 398956",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113738,
            "range": "± 937",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2324,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235559,
            "range": "± 8815",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1064932,
            "range": "± 66270",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1510399,
            "range": "± 16360",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 568953,
            "range": "± 9885",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4343606,
            "range": "± 48229",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4377601,
            "range": "± 82612",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2980062,
            "range": "± 11515",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}