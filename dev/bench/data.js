window.BENCHMARK_DATA = {
  "lastUpdate": 1780000569752,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b4dd4b5ab71f033ae66eabff22167e61dd5b670",
          "message": "fix(cli): render --score health line in combined human output\n\n`fallow --score` (bare combined mode) and `fallow --trend` already\nserialized the health score / trend to JSON / SARIF / CodeClimate, but\n`combined::print_orientation_header` never called the existing\nrender_health_score / render_health_trend helpers in\nreport::human::health, so the headline a user came to read was missing\nfrom terminal output. `fallow health --score` (the subcommand) already\nrendered the score via its inline path, so the contract documented at\nfallow-docs `cli/health.mdx` was only half-true.\n\nPromote both helpers from private fn to pub fn, re-export them from\nreport::mod, and call them at the top of print_orientation_header.\nSuppress the leading blank in the vital signs block when the score\nblock already wrote its trailing blank.\n\nA naive add-call-site fix renders the score twice because the\ndownstream Complexity section's print_health_human also invokes\nrender_health_score via build_health_human_lines_with_explain. Add\nskip_score_and_trend: bool to ReportContext, thread it through\nprint_health_result, print_health_human, and\nbuild_health_human_lines_with_explain. Combined-mode caller sets\ntrue (orientation header is the single render site); standalone\n`fallow health` and `fallow audit` keep false so their renderers stay\ninline. check.rs, dupes.rs, watch.rs ctx literals updated with false\n(no orientation header upstream).\n\nRegression tests assert EXACTLY ONE \"Health score:\" line for both\ncombined --score and standalone health --score (the previous\n.contains() shape passed even with a duplicate). A control test pins\nthat bare `fallow` without --score does not render the line. A\nstandalone test covers `fallow health --min-score 100` to confirm the\nCI gate still fires when the score is below threshold.\n\nJSON / SARIF / CodeClimate / markdown output and the --min-score\nexit-code gate are unchanged.\n\nFixes #557.",
          "timestamp": "2026-05-22T12:38:52+01:00",
          "tree_id": "1ea82333bbf6aed037c0def7591bb7e19cd32b41",
          "url": "https://github.com/fallow-rs/fallow/commit/0b4dd4b5ab71f033ae66eabff22167e61dd5b670"
        },
        "date": 1779450579475,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 58866,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3717935,
            "range": "± 175810",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4894840,
            "range": "± 137551",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21649896,
            "range": "± 396232",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117822,
            "range": "± 1174",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2399,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237166,
            "range": "± 4415",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1075791,
            "range": "± 17610",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1518634,
            "range": "± 113674",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 578997,
            "range": "± 9923",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4388306,
            "range": "± 45005",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4291193,
            "range": "± 39331",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2982707,
            "range": "± 8496",
            "unit": "ns/iter"
          }
        ]
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
          "id": "23c7403f0e1ccd0e271d1d9448f739b5452acb81",
          "message": "fix(report): defer CodeClimate severity mapping + centralise next to SARIF\n\nThe three generic-iterator helpers in `crates/cli/src/report/codeclimate.rs`\n(`push_dep_cc_issues`, `push_unused_export_issues`, `push_unused_member_issues`)\neagerly called `severity_to_codeclimate(severity)` BEFORE iterating their\nfindings, so any caller passing `severity = Off` and an empty (or\nproduction-filtered) findings vec hit the `Off => unreachable!()` arm and\nexited 101 with `internal error: entered unreachable code`. Reproduced via\n`fallow check --format codeclimate --root benchmarks/fixtures/real-world/zod\n--production`. The slice-based helpers were already safe via their existing\n`is_empty()` early-return guards. The fix moves the severity mapping inside\neach generic helper's loop body so the call only fires when there is a\nfinding to emit; behaviour for non-empty findings stays byte-identical.\n\nIn the same pass, the inline `severity_to_codeclimate` body is now a one-line\ndelegate to a new `crates/cli/src/report/ci/severity.rs::codeclimate_severity`\nhelper, alongside the pre-existing `sarif_level` and `review_label` mappers.\nAll three CI-format severity vocabularies now live in one module, and adding\na future `Severity` variant compile-fails at every mapper simultaneously\nrather than silently fallthrough on the CodeClimate side. The 14+ call sites\nof `severity_to_codeclimate` are unchanged (mirrors the\n`severity_to_sarif_level` wrapper pattern in `sarif.rs`).\n\nNew regression test\n`build_codeclimate_with_off_severity_and_empty_findings_does_not_panic` locks\nin the production-mode safety property. A new\n`codeclimate_severity_off_is_unreachable` `#[should_panic]` test in\n`ci/severity.rs::tests` mirrors the SARIF mapper's coverage. The pre-existing\nstale `severity_off_maps_to_minor` test name (which actually asserts the\n`unreachable!()` panic) was renamed opportunistically to\n`severity_off_is_unreachable`.\n\nFixes #452.",
          "timestamp": "2026-05-22T12:47:43+01:00",
          "tree_id": "9ead4a026629d06b5e8fea35149bf1a9a01675a9",
          "url": "https://github.com/fallow-rs/fallow/commit/23c7403f0e1ccd0e271d1d9448f739b5452acb81"
        },
        "date": 1779450877877,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44121,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3623496,
            "range": "± 168247",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4875959,
            "range": "± 155567",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22265227,
            "range": "± 371766",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115536,
            "range": "± 3157",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2303,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184665,
            "range": "± 8742",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818630,
            "range": "± 11325",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1313926,
            "range": "± 25494",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537939,
            "range": "± 12896",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3298554,
            "range": "± 26227",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3338619,
            "range": "± 60255",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2325029,
            "range": "± 7868",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e5e082abbfa94ce234d6a33036b38975e30fef9a",
          "message": "chore: release v2.78.0",
          "timestamp": "2026-05-22T14:10:23+02:00",
          "tree_id": "7476225041fb4838486d000a08f8ab0de925903f",
          "url": "https://github.com/fallow-rs/fallow/commit/e5e082abbfa94ce234d6a33036b38975e30fef9a"
        },
        "date": 1779452135729,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43690,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3549994,
            "range": "± 127003",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4872977,
            "range": "± 113719",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22461545,
            "range": "± 482593",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120692,
            "range": "± 2673",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2472,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184772,
            "range": "± 26157",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820631,
            "range": "± 61778",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1311945,
            "range": "± 23058",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535533,
            "range": "± 32831",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3312937,
            "range": "± 133665",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3334044,
            "range": "± 36382",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2237335,
            "range": "± 21824",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "92e2533d695ad798636f8e5e072c87085928c647",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.78.0",
          "timestamp": "2026-05-22T14:44:02+02:00",
          "tree_id": "407ba1d548c54e39b5efb1729371b2af2aae0974",
          "url": "https://github.com/fallow-rs/fallow/commit/92e2533d695ad798636f8e5e072c87085928c647"
        },
        "date": 1779454132770,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 57879,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3875470,
            "range": "± 310285",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5055869,
            "range": "± 202224",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21496340,
            "range": "± 463279",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118726,
            "range": "± 719",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2203,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236785,
            "range": "± 6181",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1073952,
            "range": "± 7804",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1522653,
            "range": "± 15985",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577381,
            "range": "± 26366",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4304938,
            "range": "± 30528",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4419312,
            "range": "± 38057",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2986019,
            "range": "± 7902",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b467e04c1377424747107ce1554a82bf64687a22",
          "message": "fix(ci): silence two more Windows-only clippy regressions on `main`\n\nSibling to PR #587 and the v2.78.0 release commit's mcp tests fix. Rust 1.95's\nstrict `-D warnings` surfaced two more Windows-only paths on the post-release\nci.yml run for main:\n\n- `crates/cli/src/ci_template.rs::set_executable` Windows stub returns\n  `std::io::Result<()>` to match the Unix signature so the unconditional\n  caller can `?`-propagate without `#[cfg]` branching. The Windows body is\n  trivially `Ok(())`, so clippy's `unnecessary_wraps` fires. Suppress via\n  `#[expect(clippy::unnecessary_wraps, reason = \"...\")]` on the Windows\n  stub; matching the Unix signature is load-bearing for the caller.\n\n- `crates/cli/src/signal/scoped_child.rs::assert_deregistered` test helper\n  is only called from two `#[cfg(unix)]` tests in the same module. Gating\n  the helper itself with `#[cfg(unix)]` aligns it with its callers and\n  silences the `dead-code` lint on Windows.\n\nBoth are post-release CI fixes; v2.78.0 binaries are unaffected. Refs #447.",
          "timestamp": "2026-05-22T16:15:53+02:00",
          "tree_id": "05dfc715ccb9403790a2796c1247b4c3dd63fee6",
          "url": "https://github.com/fallow-rs/fallow/commit/b467e04c1377424747107ce1554a82bf64687a22"
        },
        "date": 1779459656070,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43267,
            "range": "± 674",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3652895,
            "range": "± 153238",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4927065,
            "range": "± 133843",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22266739,
            "range": "± 432570",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108223,
            "range": "± 504",
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
            "value": 184307,
            "range": "± 2406",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818048,
            "range": "± 3276",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1308713,
            "range": "± 19434",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 526776,
            "range": "± 35891",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3300059,
            "range": "± 170344",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3321212,
            "range": "± 32769",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2220495,
            "range": "± 18173",
            "unit": "ns/iter"
          }
        ]
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
          "id": "721f47b3d036b2582f6acd68b32693713dc71f0c",
          "message": "fix(cli): silence Windows-only dead_code on ScopedChild::id (#595)\n\nAfter PR #587 and b467e04c closed the bulk of the cfg(windows) clippy hits, one Rust 1.95 lint remained that POSIX clippy never sees: ScopedChild::id is consumed only by the cfg(unix) signal_test_helper in main.rs; on Windows the helper is excluded so the method has no caller. Tag with #[cfg_attr(not(unix), expect(dead_code))] to preserve the symmetric public surface for embedders rather than gating the method itself with #[cfg(unix)].\n\nPOSIX clippy + workspace tests stay green.\n\nRefs #561",
          "timestamp": "2026-05-22T17:47:50+01:00",
          "tree_id": "991866f70fad5320edde9b52b7ead5ebbaeb88f4",
          "url": "https://github.com/fallow-rs/fallow/commit/721f47b3d036b2582f6acd68b32693713dc71f0c"
        },
        "date": 1779468745008,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34296,
            "range": "± 627",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 2984963,
            "range": "± 102386",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3994648,
            "range": "± 152955",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17653318,
            "range": "± 343583",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 84935,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1786,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 142804,
            "range": "± 6633",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 633089,
            "range": "± 3682",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1019083,
            "range": "± 25225",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 418503,
            "range": "± 20828",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2557878,
            "range": "± 27734",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2592465,
            "range": "± 31868",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1723298,
            "range": "± 13002",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7f89de4fc78789364b4d35df1a7e647ed783e316",
          "message": "chore: release v2.78.1",
          "timestamp": "2026-05-22T19:06:03+02:00",
          "tree_id": "35d64bc4b79b7ac57ab36da1c73cfc80ecd3f260",
          "url": "https://github.com/fallow-rs/fallow/commit/7f89de4fc78789364b4d35df1a7e647ed783e316"
        },
        "date": 1779469882467,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 42717,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3591972,
            "range": "± 115708",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4951775,
            "range": "± 161081",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22321786,
            "range": "± 342960",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107133,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2290,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184335,
            "range": "± 6144",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818908,
            "range": "± 9110",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1315216,
            "range": "± 17638",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534118,
            "range": "± 9195",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3291477,
            "range": "± 27344",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3320770,
            "range": "± 27601",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2238891,
            "range": "± 5003",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "dfa5b8996744d934a8173a793473f192f51ed53d",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.78.1",
          "timestamp": "2026-05-22T19:38:31+02:00",
          "tree_id": "c92064d5310efe013a6cd73c0826a354f98c9210",
          "url": "https://github.com/fallow-rs/fallow/commit/dfa5b8996744d934a8173a793473f192f51ed53d"
        },
        "date": 1779471808405,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43210,
            "range": "± 1390",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3616251,
            "range": "± 140522",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4878373,
            "range": "± 489919",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22404081,
            "range": "± 421168",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120074,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2283,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184925,
            "range": "± 24298",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819236,
            "range": "± 3531",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1309769,
            "range": "± 22424",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537102,
            "range": "± 16218",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3303422,
            "range": "± 37821",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3341535,
            "range": "± 34776",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2242370,
            "range": "± 6304",
            "unit": "ns/iter"
          }
        ]
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
          "id": "8604f89c14304bd43d3394782b736ffc983bce9a",
          "message": "fix(cli): gate scoped_child::tests module behind cfg(unix) (#599)\n\nAfter PR #595 and the v2.78.1 follow-up release made assert_deregistered cfg(unix), every test inside scoped_child::tests is cfg(unix) (they all exec /bin/sh / true / echo). On Windows the module reduces to just use super::*;, which Rust 1.95's -D unused-imports flags.\n\nGate the module itself with #[cfg(all(test, unix))] so the whole suite (and its imports) only compile when the bodies have a chance to run. No Windows test loss because there were no Windows tests in this module to begin with.\n\nRefs #561",
          "timestamp": "2026-05-22T18:40:15+01:00",
          "tree_id": "498d8a4c02a390681e72aafa4e36372e6f4547e1",
          "url": "https://github.com/fallow-rs/fallow/commit/8604f89c14304bd43d3394782b736ffc983bce9a"
        },
        "date": 1779472112165,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43473,
            "range": "± 1084",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3635215,
            "range": "± 170195",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4896036,
            "range": "± 139543",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22414857,
            "range": "± 580520",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109401,
            "range": "± 619",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2267,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184585,
            "range": "± 2373",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 815282,
            "range": "± 4713",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1310171,
            "range": "± 17742",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533522,
            "range": "± 20257",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3288378,
            "range": "± 27055",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3324689,
            "range": "± 26508",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2227416,
            "range": "± 3785",
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
          "id": "57110c3385106100bd0b3bc431632db66c1fab18",
          "message": "fix: reduce Wrangler, Content Collections, and loader false positives (#596)\n\nReduces false positives across three framework / runtime conventions:\n\n* Cloudflare Workers: read `wrangler.{toml,json,jsonc}` for the `main:`\n  worker entry plus `env.<name>.main` overrides, and widen the static\n  glob to `src/{index,worker}.{ts,tsx,js,jsx,mts,mjs}` so JSX worker\n  entries (rwsdk, React Router worker, Hono on Workers) stay reachable.\n\n* Node `module.register()`: credit loader-hook exports (`initialize`,\n  `resolve`, `load`, `globalPreload`, plus the legacy `getFormat`,\n  `getSource`, `transformSource` for projects still on older Node) on\n  the resolved loader target so they survive `unused-export` detection.\n  Resolves both literal-string and `new URL(...)`-bound specifiers,\n  including the conditional `condition ? srcUrl : distUrl` shape.\n\n* Content Collections: new plugin marking\n  `content-collections.{ts,tsx,js,jsx,mts,mjs,cts,cjs}` as a framework\n  entry and crediting the `@content-collections/*` tooling. Activates on\n  any of `@content-collections/{core,vite,next,solid-start,remix-vite,qwik,vinxi}`\n  so projects that only list a framework integration at the top level\n  (the common case) are still detected.\n\nBumps the extraction cache version so users on warm caches pick up the\nloader-hook credit on first run after upgrading.\n\nCloses #588\nCloses #589\nCloses #590",
          "timestamp": "2026-05-22T19:53:19+01:00",
          "tree_id": "3c6695a333e7ae1ea11cd865ccef53dbd3e2019f",
          "url": "https://github.com/fallow-rs/fallow/commit/57110c3385106100bd0b3bc431632db66c1fab18"
        },
        "date": 1779476366575,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43548,
            "range": "± 866",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3487963,
            "range": "± 106751",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4867635,
            "range": "± 169819",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22839312,
            "range": "± 551212",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119829,
            "range": "± 998",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2278,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185963,
            "range": "± 3126",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819674,
            "range": "± 5288",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1313890,
            "range": "± 47327",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538798,
            "range": "± 26153",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3305742,
            "range": "± 86892",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3301904,
            "range": "± 32721",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2236589,
            "range": "± 32021",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5a4bcc0b8c0498059a19894948d554e72716f746",
          "message": "docs: reposition fallow as codebase intelligence",
          "timestamp": "2026-05-22T21:34:50+02:00",
          "tree_id": "b890279d99ac3adf9069bede3ddb65d93175a2ae",
          "url": "https://github.com/fallow-rs/fallow/commit/5a4bcc0b8c0498059a19894948d554e72716f746"
        },
        "date": 1779478798808,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43496,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3545065,
            "range": "± 149324",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4915448,
            "range": "± 135618",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22265102,
            "range": "± 328109",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108803,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2297,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184698,
            "range": "± 3582",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 816878,
            "range": "± 9485",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1308926,
            "range": "± 34714",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538800,
            "range": "± 7525",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3292075,
            "range": "± 28323",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3294923,
            "range": "± 78180",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2230113,
            "range": "± 7517",
            "unit": "ns/iter"
          }
        ]
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
          "id": "07b784a4b81c774ed3367b04678a2fa9c907ee05",
          "message": "fix(unused-class-members): credit Playwright helper fixtures\n\nPlaywright users can wrap base.extend in exported helper functions that do local setup before returning the extended test. The extractor previously only recognized helper bodies whose sole statement was return base.extend, so nested fixture page-object methods could be reported as unused.\n\nThis updates helper-function extraction to inspect the final returned call while preserving the existing direct-return and alias-chain behavior. The extraction cache is bumped because cached modules from older builds can miss the fixture definition sentinels.\n\nRegression coverage adds an extractor unit test plus an integration fixture that checks both the local-setup helper path and a direct-return control path, while still reporting genuinely unused methods.\n\nFixes #586.",
          "timestamp": "2026-05-22T20:46:21+01:00",
          "tree_id": "91b82ce3b832350e276d7a95c4ea2e3fd676077e",
          "url": "https://github.com/fallow-rs/fallow/commit/07b784a4b81c774ed3367b04678a2fa9c907ee05"
        },
        "date": 1779479506366,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 57191,
            "range": "± 2605",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3942212,
            "range": "± 163264",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5196798,
            "range": "± 195553",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21570296,
            "range": "± 706821",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116478,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2223,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234545,
            "range": "± 1675",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1066808,
            "range": "± 15119",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1504745,
            "range": "± 16863",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 578695,
            "range": "± 18660",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4309549,
            "range": "± 52901",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4347426,
            "range": "± 35170",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2958971,
            "range": "± 53570",
            "unit": "ns/iter"
          }
        ]
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
          "id": "e63fbe4d1783276468f87bd81ca022fe8d7a5d48",
          "message": "fix(cli): polish human summary output\n\nCombined human summary output now lets the combined renderer own the section headings while the per-analysis summary renderers suppress their duplicate titles. The report context carries that choice through dead-code, duplication, and health output without changing JSON or CI formats.\n\nExplain accepts issue labels split across words, so commands like `fallow explain unused files` resolve to the same rule metadata as the hyphenated form. Config-loaded notices are deduped by canonical config path so combined runs do not repeat the same line while separate configs still report independently.",
          "timestamp": "2026-05-22T21:05:15+01:00",
          "tree_id": "dcca61d3d8ed640dbc187769c5032fa093b32c53",
          "url": "https://github.com/fallow-rs/fallow/commit/e63fbe4d1783276468f87bd81ca022fe8d7a5d48"
        },
        "date": 1779480652586,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 58377,
            "range": "± 765",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3650261,
            "range": "± 156052",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4911577,
            "range": "± 186252",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21449913,
            "range": "± 638080",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117302,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2198,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235359,
            "range": "± 1786",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1063038,
            "range": "± 32115",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1505068,
            "range": "± 11374",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 578618,
            "range": "± 6400",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4329433,
            "range": "± 177954",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4358952,
            "range": "± 36347",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2969979,
            "range": "± 10250",
            "unit": "ns/iter"
          }
        ]
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
          "id": "4e7eecf09fdb817b09e0d4654cf6f1f962f4d8d4",
          "message": "fix(tanstack): suppress generated route tree imports\n\nTanStack Router and Start projects commonly import the generated\nroute tree as ./routeTree.gen before src/routeTree.gen.ts exists in a\nclean checkout. That framework artifact was reported as an unresolved\nimport even though TanStack tooling creates it during codegen.\n\nRegister /routeTree.gen as a TanStack Router generated import suffix\nthrough the existing plugin hook. The suppression stays plugin-gated,\nso non-TanStack projects still report the same missing import.\n\nAdd a regression fixture with an active TanStack Router project, no\ngenerated route tree file, and a separate missing import control. The\ntest locks in both the false-positive fix and the ordinary unresolved\nimport behavior.\n\nFixes #646.",
          "timestamp": "2026-05-22T21:17:01+01:00",
          "tree_id": "2063a9403501a471813b45358e0f121025b00554",
          "url": "https://github.com/fallow-rs/fallow/commit/4e7eecf09fdb817b09e0d4654cf6f1f962f4d8d4"
        },
        "date": 1779481304398,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 34195,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3055848,
            "range": "± 103030",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4096672,
            "range": "± 144035",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 17651879,
            "range": "± 351907",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 84023,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1804,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 142203,
            "range": "± 9459",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 635236,
            "range": "± 19843",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1019084,
            "range": "± 18201",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 420430,
            "range": "± 15237",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2562967,
            "range": "± 18318",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2567689,
            "range": "± 52295",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1732435,
            "range": "± 16797",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mike@mike-engel.com",
            "name": "Mike Engel",
            "username": "mike-engel"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cdc1f078a43b692b968ea393adcea07f4f14c06",
          "message": "feat(glimmer): add support for strict-mode glimmer/ember\n\nAdds native support for Ember strict-mode glimmer components (.gts, .gjs):\n\n- New ember.js / glimmer / embroider plugin (97 total framework plugins)\n- Scan glimmer <template> blocks for imported-binding usage, including triple-stash helpers\n- Resolve .ts/.js imports to sibling .gts/.gjs files\n- Skip template-placeholder specifiers in HTML asset scanner\n- ember-classic integration fixture\n- CACHE_VERSION 95\n\nCloses #369.",
          "timestamp": "2026-05-22T21:51:29+01:00",
          "tree_id": "63434c0b9548677a685b7478d1a9257c8a102e90",
          "url": "https://github.com/fallow-rs/fallow/commit/2cdc1f078a43b692b968ea393adcea07f4f14c06"
        },
        "date": 1779483384652,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 50032,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3437769,
            "range": "± 180328",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4461622,
            "range": "± 120726",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 18870021,
            "range": "± 394866",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108589,
            "range": "± 1957",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3053,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156220,
            "range": "± 4179",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 715390,
            "range": "± 16226",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1189064,
            "range": "± 23331",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 486727,
            "range": "± 12022",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2967729,
            "range": "± 31527",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2993777,
            "range": "± 32029",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1963235,
            "range": "± 65126",
            "unit": "ns/iter"
          }
        ]
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
          "id": "9a142be9494a3779f06db016f54080a84010c652",
          "message": "fix(jsx): ignore generic JSX resource attributes as side-effect imports\n\nBefore, lowercase intrinsic `<script src=\"...\">` and\n`<link rel=\"stylesheet|modulepreload\" href=\"...\">` literals inside JSX\nand TSX files emitted synthetic `SideEffect` imports via the AST\nvisitor, so SSR-style serializer tests (notably Hono's JSX layout\ntests) produced large false `unresolved-imports` clusters for runtime\nHTML metadata that is not bundler-resolved.\n\nAfter, the JSX visitor path that recorded those attributes is removed.\nHTML files keep their dedicated asset scanner, and bare `html` tagged\ntemplates in JS/TS continue to extract asset references via the\nregex-based HTML scanner. The web-root-relative resolver still applies\nto JS/TS-family files for the tagged-template case. Framework-specific\nJSX asset semantics can be reintroduced later as constrained opt-in\nlogic rather than broad attribute extraction.\n\nExtraction `CACHE_VERSION` is bumped to 96 so warm caches drop the\nstale JSX resource edges on first run after upgrade. Tests are\nrestructured: the unit suite in `tests/js_ts/jsx_assets.rs` asserts the\nnew no-emission behavior, and the integration test renames the fixture\nfrom a static-folder layout to a JSDoc-consumer shape that exercises\nthe remaining JSDoc and `html` tagged-template paths.\n\nFixes #640.",
          "timestamp": "2026-05-22T21:58:29+01:00",
          "tree_id": "cc5eb1a3ab7a022a28240272893cd3489117b688",
          "url": "https://github.com/fallow-rs/fallow/commit/9a142be9494a3779f06db016f54080a84010c652"
        },
        "date": 1779483821956,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43379,
            "range": "± 1610",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3519821,
            "range": "± 135004",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4870719,
            "range": "± 142134",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22576418,
            "range": "± 330515",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110732,
            "range": "± 4004",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2358,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184388,
            "range": "± 7722",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 817053,
            "range": "± 10871",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1306811,
            "range": "± 21771",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 539833,
            "range": "± 30917",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3306405,
            "range": "± 82065",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3337314,
            "range": "± 34306",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2228940,
            "range": "± 21103",
            "unit": "ns/iter"
          }
        ]
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
          "id": "62bed8d6298ba5e83a178f4fcbee05ee7ae548d1",
          "message": "fix(unused-class-members): preserve public package APIs\n\nTreat class members on classes exported from non-private package entry points as part of the public package API, including transitive star barrels and source-first package entry fallbacks. This keeps library builder APIs from being reported as removable internals while still reporting genuinely unused internal members and enum members.\n\nResolve package entry paths that point at missing root build artifacts back to source indexes, and recognize exportless source subpath indexes when no exports map exists. Package manifests also ignore non-boolean private values instead of aborting analysis on permissive real-world package.json data.\n\nFixes #643.",
          "timestamp": "2026-05-22T22:04:17+01:00",
          "tree_id": "da1796a0cbdf1cd2c9b6b88b6351b1ad7f71817a",
          "url": "https://github.com/fallow-rs/fallow/commit/62bed8d6298ba5e83a178f4fcbee05ee7ae548d1"
        },
        "date": 1779484170159,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43402,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3639541,
            "range": "± 133729",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5480884,
            "range": "± 147117",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27527944,
            "range": "± 386876",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118657,
            "range": "± 661",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2275,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184346,
            "range": "± 5864",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819165,
            "range": "± 19166",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1312088,
            "range": "± 30272",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537500,
            "range": "± 11646",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3296373,
            "range": "± 38667",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3333500,
            "range": "± 140592",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2241535,
            "range": "± 10802",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6d5b84cd74fbb99e839d1b75ff12933eb26c84b6",
          "message": "chore: release v2.79.0",
          "timestamp": "2026-05-22T23:29:18+02:00",
          "tree_id": "d476e7566053f30eb08ef07ff88ca5fa1f716bff",
          "url": "https://github.com/fallow-rs/fallow/commit/6d5b84cd74fbb99e839d1b75ff12933eb26c84b6"
        },
        "date": 1779485708769,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 59134,
            "range": "± 880",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4008657,
            "range": "± 202589",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5588012,
            "range": "± 194457",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26367798,
            "range": "± 379791",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119798,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2237,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234327,
            "range": "± 1508",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1061255,
            "range": "± 70473",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1521982,
            "range": "± 30832",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 565344,
            "range": "± 26142",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4295787,
            "range": "± 25915",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4348291,
            "range": "± 89735",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2939602,
            "range": "± 17784",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a23dba54581ec3f59a19ef5e13aaf2713b0896c7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.79.0",
          "timestamp": "2026-05-22T23:59:39+02:00",
          "tree_id": "eb1bb2f69d5d896e3508e09d2dec9c819fcd6fa0",
          "url": "https://github.com/fallow-rs/fallow/commit/a23dba54581ec3f59a19ef5e13aaf2713b0896c7"
        },
        "date": 1779487478077,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 59637,
            "range": "± 690",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3942334,
            "range": "± 156974",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5616036,
            "range": "± 195349",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26909321,
            "range": "± 926237",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119882,
            "range": "± 3489",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2228,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233461,
            "range": "± 2964",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1059961,
            "range": "± 10741",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1504864,
            "range": "± 35604",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576306,
            "range": "± 12651",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4296556,
            "range": "± 89524",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4360386,
            "range": "± 32695",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2946832,
            "range": "± 4654",
            "unit": "ns/iter"
          }
        ]
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
          "id": "4a4873a732459e727c9cba9b37152be367648227",
          "message": "fix(graph): resolve prebuild package maps to source\n\nResolve package.json imports and workspace/root package exports that point at missing prebuild output back to tracked source files. The resolver now loads root and workspace package manifests, evaluates package maps in manifest order, and keeps blocked or unmatched subpaths unresolved instead of turning them into dependency noise.\n\nPreserve dependency accounting by carrying package usage metadata alongside internal file resolution, so self/workspace package imports can still feed unused and unlisted dependency analysis while participating in the module graph.\n\nAdds regression fixtures for Nitro-style package imports and Redux Toolkit-style workspace exports, including blocked, missing, unexported, declared, and undeclared workspace import cases.\n\nFixes #641.",
          "timestamp": "2026-05-23T07:40:46+01:00",
          "tree_id": "91e435d207290ee63851ccaa878a435209f235e9",
          "url": "https://github.com/fallow-rs/fallow/commit/4a4873a732459e727c9cba9b37152be367648227"
        },
        "date": 1779518772175,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 58891,
            "range": "± 1158",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3799760,
            "range": "± 267745",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5323180,
            "range": "± 164307",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26252703,
            "range": "± 563433",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118802,
            "range": "± 2222",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2242,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233656,
            "range": "± 5066",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1061092,
            "range": "± 5858",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1508612,
            "range": "± 16096",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 570536,
            "range": "± 8330",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4318804,
            "range": "± 50938",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4337964,
            "range": "± 47063",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2955315,
            "range": "± 6280",
            "unit": "ns/iter"
          }
        ]
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
          "id": "e4bb70d946e9481c738f8857c15df5a2ba01b648",
          "message": "fix(plugins): suppress React Router route type imports\n\nReact Router v7 and Remix generate sibling ./+types route modules during typegen, and clean checkouts can omit those files. Thread a plugin-provided generated type-import prefix through aggregation and unresolved-import filtering so type-only imports under that prefix do not report as missing.\n\nKeep the suppression narrow: it is plugin-gated, exact-prefix based, and only applies to type-only imports. Runtime imports under ./+types/ continue to report as unresolved, and projects without the React Router or Remix plugins keep the normal missing-import behavior.\n\nAdd unit coverage for the type-only filter, plugin-gated behavior, and runtime negative case, plus React Router and Remix integration fixture coverage.\n\nFixes #645.",
          "timestamp": "2026-05-23T07:45:49+01:00",
          "tree_id": "b0f0c1bc46d749073991cdc2944d731ca925574b",
          "url": "https://github.com/fallow-rs/fallow/commit/e4bb70d946e9481c738f8857c15df5a2ba01b648"
        },
        "date": 1779519132309,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 43101,
            "range": "± 928",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3708101,
            "range": "± 188147",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5455964,
            "range": "± 156304",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28002997,
            "range": "± 522547",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109480,
            "range": "± 3020",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2312,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185181,
            "range": "± 2022",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818108,
            "range": "± 16918",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1331175,
            "range": "± 23573",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535912,
            "range": "± 21751",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3341885,
            "range": "± 132459",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3348812,
            "range": "± 31728",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2226069,
            "range": "± 3847",
            "unit": "ns/iter"
          }
        ]
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
          "id": "2f8fc779cffcde8caf01b419a60e1017307a5a49",
          "message": "fix(mdx): ignore imports inside documentation code fences\n\nMDX extraction previously treated import and export examples inside fenced Markdown blocks as executable top-level MDX statements. Documentation snippets that use virtual file boundaries could therefore create graph edges and false unresolved-import findings.\n\nTrack CommonMark-style backtick and tilde fences before the existing MDX statement extractor runs. Fenced blocks are skipped entirely, while real top-level MDX imports and exports continue through the same parser path.\n\nAdd unit, parser, and integration coverage for fenced examples, including a fixture that preserves a real top-level missing import as a control. Bump the extraction cache version so warm MDX cache entries are re-extracted on upgrade.\n\nFixes #639.",
          "timestamp": "2026-05-23T07:47:09+01:00",
          "tree_id": "a5459ca8fa383ccdc1ae4582d7cbe993efb94235",
          "url": "https://github.com/fallow-rs/fallow/commit/2f8fc779cffcde8caf01b419a60e1017307a5a49"
        },
        "date": 1779519518371,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 49786,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3097957,
            "range": "± 55908",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4504740,
            "range": "± 87908",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 19971492,
            "range": "± 290928",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108697,
            "range": "± 4238",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3057,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156985,
            "range": "± 12465",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 709141,
            "range": "± 7839",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1173091,
            "range": "± 7285",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 464285,
            "range": "± 5512",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2870215,
            "range": "± 18454",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2899435,
            "range": "± 16160",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1953439,
            "range": "± 8453",
            "unit": "ns/iter"
          }
        ]
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
          "id": "a9cefb483b39a3fe21e171d56fa7def1dc4bace4",
          "message": "fix(core): treat bare bun as builtin\n\nCloses #642.",
          "timestamp": "2026-05-23T08:04:32+01:00",
          "tree_id": "7ffcc0816f0bda828e6478c5186a364c86c15a22",
          "url": "https://github.com/fallow-rs/fallow/commit/a9cefb483b39a3fe21e171d56fa7def1dc4bace4"
        },
        "date": 1779520167460,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 44217,
            "range": "± 2094",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3686626,
            "range": "± 177667",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5386489,
            "range": "± 131016",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27622363,
            "range": "± 456712",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115136,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2310,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185280,
            "range": "± 4576",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819245,
            "range": "± 20143",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1311438,
            "range": "± 25251",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535383,
            "range": "± 11707",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3272583,
            "range": "± 26331",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3323070,
            "range": "± 94894",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2215912,
            "range": "± 6115",
            "unit": "ns/iter"
          }
        ]
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
          "id": "f92318a75a2aee0732382d8069d8366931f01572",
          "message": "fix(tanstack): suppress Start virtual modules\n\nTanStack Start imports manifest and injected-head script modules through framework-provided virtual specifiers with a :v suffix. Those specifiers are not npm packages, but the TanStack plugin did not register them as virtual modules, so dead-code analysis reported them as unlisted dependencies.\n\nRegister the colon-suffixed TanStack Start virtual module prefixes through the existing plugin virtual-prefix hook. Add plugin-gated positive and negative coverage, including unresolved-import suppression and end-to-end analysis fixtures for static and dynamic imports.\n\nFixes #636.",
          "timestamp": "2026-05-23T08:33:06+01:00",
          "tree_id": "f8c31997a7b57f6ab66e7a20f46bd0f0e039a531",
          "url": "https://github.com/fallow-rs/fallow/commit/f92318a75a2aee0732382d8069d8366931f01572"
        },
        "date": 1779521906159,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 60135,
            "range": "± 1691",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3970258,
            "range": "± 169692",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5604791,
            "range": "± 154854",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27425639,
            "range": "± 586055",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121294,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2195,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235911,
            "range": "± 21263",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1066750,
            "range": "± 22235",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1513598,
            "range": "± 28881",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 581621,
            "range": "± 12132",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4357345,
            "range": "± 32867",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4371321,
            "range": "± 36019",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2957956,
            "range": "± 5691",
            "unit": "ns/iter"
          }
        ]
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
          "id": "a13ec35cec22c6edab315ed472cd634d218f6451",
          "message": "fix(extract): credit Node script runner entrypoints\n\nResolve extensionless package-script paths through directory index files after exact and extension fallback.\n\nCredit statically resolvable local child_process.fork runner targets from proven Node child_process imports and requires, including path.resolve(fileURLToPath(import.meta.url), ...).\n\nFixes #638.",
          "timestamp": "2026-05-23T15:25:08+01:00",
          "tree_id": "cc2a64b75e2862a036c38750f4687a0c2e105a93",
          "url": "https://github.com/fallow-rs/fallow/commit/a13ec35cec22c6edab315ed472cd634d218f6451"
        },
        "date": 1779546645771,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45668,
            "range": "± 3649",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3692164,
            "range": "± 145792",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5428283,
            "range": "± 134408",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27380846,
            "range": "± 349166",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111717,
            "range": "± 643",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2283,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184848,
            "range": "± 4057",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 817890,
            "range": "± 29891",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1305759,
            "range": "± 56092",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532179,
            "range": "± 19398",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3295575,
            "range": "± 79417",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3347872,
            "range": "± 34274",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2228764,
            "range": "± 3722",
            "unit": "ns/iter"
          }
        ]
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
          "id": "ac81b9247538cf526db76f97dd2bf18a2f4dceb3",
          "message": "fix(core): honor Wrangler config precedence\n\nMatch Wrangler's same-directory config selection before extracting worker main entries. Only the highest-precedence sibling config contributes main and environment main entry patterns, while all wrangler config files remain credited as used.\n\nPin Wrangler's current source order, json, jsonc, toml, with pairwise tests, a no-fallback presence test, non-sibling isolation, and an end-to-end unused-file regression for stale migration configs.\n\nFixes #630.",
          "timestamp": "2026-05-23T15:52:30+01:00",
          "tree_id": "fb031db1f013464842049888ef4d77509678aaaa",
          "url": "https://github.com/fallow-rs/fallow/commit/ac81b9247538cf526db76f97dd2bf18a2f4dceb3"
        },
        "date": 1779548242339,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 60799,
            "range": "± 5657",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4006465,
            "range": "± 154052",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5501689,
            "range": "± 196532",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26630093,
            "range": "± 444577",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115205,
            "range": "± 980",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2225,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 231147,
            "range": "± 2675",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1041825,
            "range": "± 15528",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1476856,
            "range": "± 16234",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 578326,
            "range": "± 12353",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4261839,
            "range": "± 34759",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4301115,
            "range": "± 37664",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2891787,
            "range": "± 7136",
            "unit": "ns/iter"
          }
        ]
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
          "id": "c82ba6ffbb26df4fa411b342fe3f0116e00b8eef",
          "message": "feat: add optional review guidance\n\n* feat: add optional review guidance\n\n* test(ci): cover review guidance wiring",
          "timestamp": "2026-05-23T18:25:52+01:00",
          "tree_id": "3bb8bded8e399b9bc2fc1885ddabb9acbacb7aec",
          "url": "https://github.com/fallow-rs/fallow/commit/c82ba6ffbb26df4fa411b342fe3f0116e00b8eef"
        },
        "date": 1779557448461,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45256,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3733602,
            "range": "± 168295",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5425867,
            "range": "± 172541",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27946114,
            "range": "± 466560",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110853,
            "range": "± 695",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2369,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185309,
            "range": "± 3435",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821845,
            "range": "± 5423",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1311275,
            "range": "± 16636",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 539726,
            "range": "± 12565",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3295310,
            "range": "± 41228",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3326007,
            "range": "± 28589",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2257068,
            "range": "± 7455",
            "unit": "ns/iter"
          }
        ]
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
          "id": "4ce779558a06ddbe8cae6096de095b4fee39e9dd",
          "message": "feat: add PR comment summary scope\n\n* chore: open issue #661 implementation branch\n\n* fix(ci): add diff scope for sticky summaries\n\n* test(ci): avoid racy summary scope env mutation",
          "timestamp": "2026-05-24T08:28:55+01:00",
          "tree_id": "4cc7a012a41ca56fae83a44ae06a2000ad424af2",
          "url": "https://github.com/fallow-rs/fallow/commit/4ce779558a06ddbe8cae6096de095b4fee39e9dd"
        },
        "date": 1779608043829,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45197,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3663678,
            "range": "± 141792",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5438433,
            "range": "± 166853",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28048158,
            "range": "± 1306074",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119398,
            "range": "± 9161",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2313,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186318,
            "range": "± 4190",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 831082,
            "range": "± 16000",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1327396,
            "range": "± 24019",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 547787,
            "range": "± 42160",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3510852,
            "range": "± 145882",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3507168,
            "range": "± 59356",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2259728,
            "range": "± 13228",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "017658ea7af7473dcc87c921a092f0bd507457fd",
          "message": "chore: release v2.80.0",
          "timestamp": "2026-05-24T09:38:07+02:00",
          "tree_id": "46bd21cb4f96e15a0d4a8dce8b03a8d51af3ba2a",
          "url": "https://github.com/fallow-rs/fallow/commit/017658ea7af7473dcc87c921a092f0bd507457fd"
        },
        "date": 1779608620696,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61469,
            "range": "± 1276",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3761110,
            "range": "± 261936",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5423178,
            "range": "± 198875",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26588634,
            "range": "± 435733",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118864,
            "range": "± 833",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2218,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234940,
            "range": "± 4128",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1065208,
            "range": "± 7271",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1504055,
            "range": "± 14621",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 581870,
            "range": "± 29250",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4333977,
            "range": "± 52247",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4347198,
            "range": "± 26823",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2962092,
            "range": "± 3690",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e32cc0a415dcfddc776e9ec032eed6de218e0135",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.80.0",
          "timestamp": "2026-05-24T10:10:02+02:00",
          "tree_id": "c1be6b2b1dc4f2a25c95e6b5029c47cca05d7dd2",
          "url": "https://github.com/fallow-rs/fallow/commit/e32cc0a415dcfddc776e9ec032eed6de218e0135"
        },
        "date": 1779610492667,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 52225,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3104323,
            "range": "± 55264",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4514588,
            "range": "± 73291",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 20144599,
            "range": "± 324012",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105928,
            "range": "± 4210",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3064,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156033,
            "range": "± 20825",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 712404,
            "range": "± 5595",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1176046,
            "range": "± 16091",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 472391,
            "range": "± 6605",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2879385,
            "range": "± 15464",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2924300,
            "range": "± 59687",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1947221,
            "range": "± 9123",
            "unit": "ns/iter"
          }
        ]
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
          "id": "04fc48077af977a27894861d8db1a7c4243c4640",
          "message": "fix: recognize Danger and Stryker tooling configs\n\n* chore: open issue #618 implementation branch\n\n* fix: recognize Danger and Stryker tooling configs",
          "timestamp": "2026-05-25T12:08:53+01:00",
          "tree_id": "ebcbe56176684396b09e661625d1befe40aaa2c8",
          "url": "https://github.com/fallow-rs/fallow/commit/04fc48077af977a27894861d8db1a7c4243c4640"
        },
        "date": 1779707846109,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62426,
            "range": "± 1239",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4007183,
            "range": "± 175098",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5931227,
            "range": "± 217659",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29512473,
            "range": "± 557370",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113920,
            "range": "± 840",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2204,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234828,
            "range": "± 10858",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069632,
            "range": "± 8311",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1517892,
            "range": "± 23031",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 591410,
            "range": "± 21567",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4399758,
            "range": "± 28964",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4431794,
            "range": "± 47410",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2991311,
            "range": "± 19481",
            "unit": "ns/iter"
          }
        ]
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
          "id": "3d93824183baf1a797d8fa4baf36edd9a168bc16",
          "message": "fix: skip platform builtins in unresolved imports\n\nSkip unresolved-import findings when an unresolvable specifier is accepted by is_builtin_module.\n\nAdd regression coverage for current Node, Bun, Cloudflare, Sass, and Deno builtin forms, while keeping builtin-like package names and fake node subpaths reportable.\n\nFixes #634.",
          "timestamp": "2026-05-25T12:26:22+01:00",
          "tree_id": "518433c3eacf3d2fcf6ff740632d20956da63b76",
          "url": "https://github.com/fallow-rs/fallow/commit/3d93824183baf1a797d8fa4baf36edd9a168bc16"
        },
        "date": 1779708657045,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35159,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3131068,
            "range": "± 108971",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4469774,
            "range": "± 129550",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21703254,
            "range": "± 352499",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 82312,
            "range": "± 1753",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1755,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143281,
            "range": "± 2473",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 635473,
            "range": "± 4004",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1017645,
            "range": "± 19066",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 432384,
            "range": "± 24666",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2557462,
            "range": "± 17832",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2580300,
            "range": "± 24008",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1743644,
            "range": "± 29850",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77008265+pasTa4667@users.noreply.github.com",
            "name": "pasTa",
            "username": "pasTa4667"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "683ccdedea393f00b2ca6b7b57852b0db671d3e1",
          "message": "fix(plugins): parse jsPlugins for oxlint config (#667)\n\nParse jsPlugins from .oxlintrc.json, oxlint.json, and oxlint.config.ts: credit string entries, alias-object specifier values, and tuple first-elements as npm dependencies; record relative/absolute plugin paths as setup files; ignore built-in plugin names.\n\nThanks @pasTa4667.\n\nCloses #607",
          "timestamp": "2026-05-25T13:04:26+01:00",
          "tree_id": "eff4e67a238a89e5c503cc2b6eeb43759e02b2a1",
          "url": "https://github.com/fallow-rs/fallow/commit/683ccdedea393f00b2ca6b7b57852b0db671d3e1"
        },
        "date": 1779711057805,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 60657,
            "range": "± 1313",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4039972,
            "range": "± 154849",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5726520,
            "range": "± 199709",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26879816,
            "range": "± 698723",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119325,
            "range": "± 693",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2253,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234829,
            "range": "± 3394",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1063001,
            "range": "± 106074",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1503963,
            "range": "± 16250",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 569489,
            "range": "± 26297",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4304708,
            "range": "± 127372",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4327897,
            "range": "± 55430",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2949208,
            "range": "± 6192",
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
          "id": "0ba5cf0b0d03c821b244625fa24fcce4c9c61a6e",
          "message": "fix: handle re-export resolver source edges (#666)\n\nFixes resolver source edges that were only handled for imports.\n\nUnresolved named and star re-export sources now use the same source-edge contract as imports, so they are reported instead of being skipped.\n\nPackage imports and exports array targets now preserve fallback order. Package imports also credit external package targets, which avoids false unlisted dependency reports for package import aliases.",
          "timestamp": "2026-05-25T13:26:13+01:00",
          "tree_id": "0c56b912166f6340edb225166aeb0458a9ee8dd9",
          "url": "https://github.com/fallow-rs/fallow/commit/0ba5cf0b0d03c821b244625fa24fcce4c9c61a6e"
        },
        "date": 1779712260463,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 60792,
            "range": "± 1084",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3880331,
            "range": "± 243800",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5447545,
            "range": "± 162365",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26925565,
            "range": "± 462586",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116781,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2369,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235755,
            "range": "± 5873",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1071616,
            "range": "± 12456",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1518680,
            "range": "± 18844",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 585820,
            "range": "± 29643",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4328450,
            "range": "± 49700",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4318250,
            "range": "± 57086",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2992376,
            "range": "± 11470",
            "unit": "ns/iter"
          }
        ]
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
          "id": "2f4a8313def90099019820c3e03ba0d571c5bdae",
          "message": "fix: guard CachedModule cache shape\n\n* chore: open issue 443 implementation branch\n\n* fix: guard cached module shape",
          "timestamp": "2026-05-25T13:57:59+01:00",
          "tree_id": "a414603807ce9de5bc42c3bc5f3a639ecb8b0a68",
          "url": "https://github.com/fallow-rs/fallow/commit/2f4a8313def90099019820c3e03ba0d571c5bdae"
        },
        "date": 1779714165808,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 60157,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3806289,
            "range": "± 239176",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5394409,
            "range": "± 164230",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26621470,
            "range": "± 476367",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118093,
            "range": "± 2110",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2204,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 239529,
            "range": "± 17324",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1081736,
            "range": "± 9117",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1519594,
            "range": "± 20286",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 580354,
            "range": "± 30536",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4385697,
            "range": "± 31384",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4408456,
            "range": "± 50023",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3011465,
            "range": "± 12321",
            "unit": "ns/iter"
          }
        ]
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
          "id": "a48e02fed77f1ec08347e771a8c6e72d465801ef",
          "message": "fix(health): clarify ownership state\n\nFixes #478.",
          "timestamp": "2026-05-25T14:46:04+01:00",
          "tree_id": "4649914d7218365d935d0c06bc54813332c0733a",
          "url": "https://github.com/fallow-rs/fallow/commit/a48e02fed77f1ec08347e771a8c6e72d465801ef"
        },
        "date": 1779717052209,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 60492,
            "range": "± 2170",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4174205,
            "range": "± 178468",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5775387,
            "range": "± 183772",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27887816,
            "range": "± 709210",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120065,
            "range": "± 978",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2265,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236362,
            "range": "± 10655",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1072818,
            "range": "± 15753",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1519216,
            "range": "± 16707",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 583454,
            "range": "± 16810",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4388623,
            "range": "± 26867",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4404366,
            "range": "± 26786",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2992024,
            "range": "± 11086",
            "unit": "ns/iter"
          }
        ]
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
          "id": "c0f47b501edd68de711a5c59cdec99d52ef5e91b",
          "message": "fix: harden programmatic napi analysis context\n\nAdd per-call Rayon pools for programmatic and N-API analyses so thread counts do not become first-call-wins process state.\n\nAdd programmatic diff_file and N-API diffFile, and thread explicit diff indexes through dead-code, duplication, and health execution without letting embedded callers fall back to the CLI shared diff cache.\n\nAdd regression coverage for CLI global parity, per-call thread counts, per-call diff scoping, shared-diff isolation, and Node diffFile usage.\n\nFixes #469.",
          "timestamp": "2026-05-25T14:59:20+01:00",
          "tree_id": "b3afbf6694de62a65356b73ca946001919187f5c",
          "url": "https://github.com/fallow-rs/fallow/commit/c0f47b501edd68de711a5c59cdec99d52ef5e91b"
        },
        "date": 1779717852365,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45473,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3794231,
            "range": "± 148158",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5457270,
            "range": "± 177830",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27364810,
            "range": "± 407237",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112443,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2303,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185600,
            "range": "± 6495",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 817485,
            "range": "± 6338",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1315831,
            "range": "± 18303",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536879,
            "range": "± 9078",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3307477,
            "range": "± 35029",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3317395,
            "range": "± 33178",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2233828,
            "range": "± 25764",
            "unit": "ns/iter"
          }
        ]
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
          "id": "2a38c0a6b2ae19425265647648c7bfc4d03e8abb",
          "message": "fix: harden fallow cloud API client\n\nCentralize cloud API client setup, Retry-After handling, shared error-envelope parsing, and FALLOW_CA_BUNDLE support across fallow cloud paths.\n\nFixes #464.",
          "timestamp": "2026-05-25T15:10:51+01:00",
          "tree_id": "983f95bba320d2c443d068ddd73c11162e609973",
          "url": "https://github.com/fallow-rs/fallow/commit/2a38c0a6b2ae19425265647648c7bfc4d03e8abb"
        },
        "date": 1779718535609,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 60575,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3866907,
            "range": "± 268022",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5223122,
            "range": "± 152564",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26056672,
            "range": "± 426494",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113330,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2227,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235450,
            "range": "± 5190",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069573,
            "range": "± 9524",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1507485,
            "range": "± 11643",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 569110,
            "range": "± 29033",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4352920,
            "range": "± 28220",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4400264,
            "range": "± 31076",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2982403,
            "range": "± 7328",
            "unit": "ns/iter"
          }
        ]
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
          "id": "de21eb76e285ceb042bfb24a08cae294c60200fa",
          "message": "fix: harden reconcile-review apply\n\n* chore: open issue #459 implementation branch\n\n* fix: make reconcile review apply fail fast",
          "timestamp": "2026-05-25T19:08:44+01:00",
          "tree_id": "6ac8bcc88c718f5e1778035edd064d95cba0bcf0",
          "url": "https://github.com/fallow-rs/fallow/commit/de21eb76e285ceb042bfb24a08cae294c60200fa"
        },
        "date": 1779732820052,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46127,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3752081,
            "range": "± 177731",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5439714,
            "range": "± 148407",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28104947,
            "range": "± 538124",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108723,
            "range": "± 889",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2428,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184321,
            "range": "± 3261",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 817580,
            "range": "± 3916",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1312884,
            "range": "± 26410",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537228,
            "range": "± 33678",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3290423,
            "range": "± 35732",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3329557,
            "range": "± 26401",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2208512,
            "range": "± 8347",
            "unit": "ns/iter"
          }
        ]
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
          "id": "20661a470e8c88f99af9018aa8c0705121b7349e",
          "message": "fix: harden watch mode filtering and recovery\n\n* chore: open issue #456 implementation branch\n\n* fix: harden watch debounce lifecycle",
          "timestamp": "2026-05-25T19:12:45+01:00",
          "tree_id": "309fbe9a8f66aae2bca9579d883f7999e9d32e1e",
          "url": "https://github.com/fallow-rs/fallow/commit/20661a470e8c88f99af9018aa8c0705121b7349e"
        },
        "date": 1779733236902,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46088,
            "range": "± 893",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3666408,
            "range": "± 138084",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5477848,
            "range": "± 122228",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28035262,
            "range": "± 467175",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114688,
            "range": "± 3553",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2280,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 183895,
            "range": "± 968",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 815682,
            "range": "± 12341",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1309101,
            "range": "± 32502",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537855,
            "range": "± 14861",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3290488,
            "range": "± 29896",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3315569,
            "range": "± 37912",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2251777,
            "range": "± 30824",
            "unit": "ns/iter"
          }
        ]
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
          "id": "32ba9d5bed686d80322176eebd695868c8061590",
          "message": "fix: make coverage setup resumable\n\nPersist coverage setup progress in `.fallow/setup.json`, guard human setup runs with `.fallow/setup.lock`, and validate resume state against current project artifacts before skipping work.\n\nFixes #460.",
          "timestamp": "2026-05-25T19:15:09+01:00",
          "tree_id": "e9570c8b648845afc03c142805cdb7d5bc93d878",
          "url": "https://github.com/fallow-rs/fallow/commit/32ba9d5bed686d80322176eebd695868c8061590"
        },
        "date": 1779733567641,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45461,
            "range": "± 4442",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3754051,
            "range": "± 175096",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5479059,
            "range": "± 133756",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27589588,
            "range": "± 566752",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121937,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2310,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 183965,
            "range": "± 6856",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820468,
            "range": "± 10810",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1313796,
            "range": "± 17094",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530879,
            "range": "± 33939",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3302210,
            "range": "± 38943",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3344819,
            "range": "± 56267",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2235512,
            "range": "± 15178",
            "unit": "ns/iter"
          }
        ]
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
          "id": "3bbc57c10ff91d823d29d06779921330da07b935",
          "message": "test: gate MCP tool default drift\n\nCloses #455",
          "timestamp": "2026-05-25T19:24:23+01:00",
          "tree_id": "92b272b9aed73a1a8ddcb463550cdeada56cee99",
          "url": "https://github.com/fallow-rs/fallow/commit/3bbc57c10ff91d823d29d06779921330da07b935"
        },
        "date": 1779733859256,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 51489,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3152155,
            "range": "± 103385",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4617162,
            "range": "± 316266",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 20232802,
            "range": "± 760836",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113718,
            "range": "± 3460",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3049,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156591,
            "range": "± 2102",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 708266,
            "range": "± 8911",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1178318,
            "range": "± 22151",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 468249,
            "range": "± 7963",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2864533,
            "range": "± 24900",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2933010,
            "range": "± 20992",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1929354,
            "range": "± 3576",
            "unit": "ns/iter"
          }
        ]
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
          "id": "7f225736d007ddfa3a0959f71c274cc0ba3d144c",
          "message": "fix: treat scaffold templates as used assets\n\n* chore: open issue #635 implementation branch\n\n* fix: treat scaffold templates as used assets",
          "timestamp": "2026-05-25T22:07:46+01:00",
          "tree_id": "f2c36b50d7864fa21033a8a0bb305726d775117a",
          "url": "https://github.com/fallow-rs/fallow/commit/7f225736d007ddfa3a0959f71c274cc0ba3d144c"
        },
        "date": 1779743554196,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 52407,
            "range": "± 1452",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3368783,
            "range": "± 420368",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4623727,
            "range": "± 267874",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 20191840,
            "range": "± 1913572",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110463,
            "range": "± 2579",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3131,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157411,
            "range": "± 4520",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 712744,
            "range": "± 7651",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1180318,
            "range": "± 22886",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 467168,
            "range": "± 20353",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2926216,
            "range": "± 140270",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2920717,
            "range": "± 92684",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1940571,
            "range": "± 30539",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "10c5ec717d3b09c0c151dec306f458555fdd7ebc",
          "message": "fix: normalize coverage lock path assertion",
          "timestamp": "2026-05-25T23:16:13+02:00",
          "tree_id": "8ccaf38c7ef9e7167bc3dbde0a1bcd868f5a43c6",
          "url": "https://github.com/fallow-rs/fallow/commit/10c5ec717d3b09c0c151dec306f458555fdd7ebc"
        },
        "date": 1779744061748,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61647,
            "range": "± 1226",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3585081,
            "range": "± 141514",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5290201,
            "range": "± 166703",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 25966870,
            "range": "± 337919",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116457,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2195,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236475,
            "range": "± 8557",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1074825,
            "range": "± 102289",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1517424,
            "range": "± 16933",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577268,
            "range": "± 20256",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4365486,
            "range": "± 24094",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4400670,
            "range": "± 29505",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2993151,
            "range": "± 8546",
            "unit": "ns/iter"
          }
        ]
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
          "id": "1eafebd46c6c3aa7d88ddf7504aea857402c117d",
          "message": "feat: add RedwoodSDK worker entrypoints\n\nAdd a built-in RedwoodSDK plugin activated by `rwsdk` that marks `src/worker.*` as a runtime entrypoint within the active workspace. Keep Vite config ownership with the existing Vite plugin so `rwsdk/vite` apps do not trigger config-pattern collisions.\n\nFixes #632.",
          "timestamp": "2026-05-25T22:20:23+01:00",
          "tree_id": "5e45b3ed56c62e94eb0e97d9f84c2fcc43767891",
          "url": "https://github.com/fallow-rs/fallow/commit/1eafebd46c6c3aa7d88ddf7504aea857402c117d"
        },
        "date": 1779744418632,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45331,
            "range": "± 791",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3797146,
            "range": "± 189551",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5505042,
            "range": "± 179861",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28026925,
            "range": "± 459346",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118520,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2280,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184634,
            "range": "± 7167",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818710,
            "range": "± 6564",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1312013,
            "range": "± 25494",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535945,
            "range": "± 34498",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3320852,
            "range": "± 170987",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3333208,
            "range": "± 43853",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2223791,
            "range": "± 4695",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c0a171773f0af14a229b9bb3199db896cd69cf2d",
          "message": "test: drain mock HTTP requests in reconcile tests",
          "timestamp": "2026-05-25T23:32:25+02:00",
          "tree_id": "16b26941c764053be0bb7300f4c79dbbd63ad8d0",
          "url": "https://github.com/fallow-rs/fallow/commit/c0a171773f0af14a229b9bb3199db896cd69cf2d"
        },
        "date": 1779745029031,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 52106,
            "range": "± 805",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3115991,
            "range": "± 88381",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4510369,
            "range": "± 82744",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 20239960,
            "range": "± 592120",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113315,
            "range": "± 2845",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3016,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156625,
            "range": "± 10741",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 709387,
            "range": "± 6323",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1176405,
            "range": "± 25181",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 467469,
            "range": "± 15279",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2874485,
            "range": "± 17340",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2913536,
            "range": "± 21177",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1943195,
            "range": "± 5096",
            "unit": "ns/iter"
          }
        ]
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
          "id": "52a20b670b9f1da1838afdb6e5eb1687bdcb7c90",
          "message": "fix: add Wuchale plugin support\n\n* chore: open issue-631 implementation branch\n\n* fix: add Wuchale plugin support\n\n* fix: activate Wuchale plugin from config file\n\nWuchale projects can be identifiable by the documented wuchale.config.js file even when package dependencies are not enough to activate the plugin path. Teach the plugin to activate from that config file, and keep the narrow JavaScript-only config contract for Vite configFile references.\n\nAdd regression coverage for config-file activation without an enabler dependency so the adapter package import is credited only through the config path.\n\nFixes #631.",
          "timestamp": "2026-05-25T22:33:24+01:00",
          "tree_id": "a33dd7cb4d1ffc490438d4aca44e1b72f387ce96",
          "url": "https://github.com/fallow-rs/fallow/commit/52a20b670b9f1da1838afdb6e5eb1687bdcb7c90"
        },
        "date": 1779745317013,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 60561,
            "range": "± 2412",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3645394,
            "range": "± 188121",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5295774,
            "range": "± 151695",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26181272,
            "range": "± 330143",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119627,
            "range": "± 731",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2192,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235156,
            "range": "± 6651",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1071542,
            "range": "± 7695",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1514407,
            "range": "± 14105",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 575442,
            "range": "± 12411",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4367409,
            "range": "± 62816",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4262486,
            "range": "± 24717",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2987359,
            "range": "± 4600",
            "unit": "ns/iter"
          }
        ]
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
          "id": "295e2904232c41f81b021716955278d72c059e6b",
          "message": "feat: add OpenCode plugin support\n\nAdds built-in OpenCode plugin support so OpenCode project plugin files and opencode.json plugin dependencies are treated as reachable.\n\nFixes #629.",
          "timestamp": "2026-05-25T22:37:32+01:00",
          "tree_id": "7794b0b1c5573b7148375d0a8fc6d6b0970773cd",
          "url": "https://github.com/fallow-rs/fallow/commit/295e2904232c41f81b021716955278d72c059e6b"
        },
        "date": 1779745607430,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 51782,
            "range": "± 806",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3176232,
            "range": "± 104195",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4497405,
            "range": "± 91924",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 19735914,
            "range": "± 375091",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113898,
            "range": "± 3184",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3034,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 155230,
            "range": "± 4512",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 710224,
            "range": "± 3708",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1179581,
            "range": "± 37358",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 462630,
            "range": "± 7159",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2851479,
            "range": "± 13732",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2900199,
            "range": "± 15175",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1955542,
            "range": "± 9437",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6e9b848395bcb0199dbfffc2c65df00fff5d7ffc",
          "message": "test: reject rooted package asset entries",
          "timestamp": "2026-05-25T23:49:27+02:00",
          "tree_id": "1064d747d2f58c1f3938b4376e52a928f5a24c99",
          "url": "https://github.com/fallow-rs/fallow/commit/6e9b848395bcb0199dbfffc2c65df00fff5d7ffc"
        },
        "date": 1779746065154,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61202,
            "range": "± 1614",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3926997,
            "range": "± 195004",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5538614,
            "range": "± 212712",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26217549,
            "range": "± 367371",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121673,
            "range": "± 1432",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2189,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234551,
            "range": "± 31422",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1059707,
            "range": "± 10914",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1505043,
            "range": "± 14282",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 567908,
            "range": "± 18190",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4304941,
            "range": "± 28590",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4338766,
            "range": "± 24278",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2947630,
            "range": "± 5632",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9c7a564b9b65a6bde49dc60d4e1e8c1b1d26e8c1",
          "message": "test: scope unix-only coverage imports",
          "timestamp": "2026-05-26T00:06:57+02:00",
          "tree_id": "90a117df701ad5cdaef388717b14e74e55827a0f",
          "url": "https://github.com/fallow-rs/fallow/commit/9c7a564b9b65a6bde49dc60d4e1e8c1b1d26e8c1"
        },
        "date": 1779747091459,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35626,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3158568,
            "range": "± 124905",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4586278,
            "range": "± 159876",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21952726,
            "range": "± 520476",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 88229,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1773,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143064,
            "range": "± 3123",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 633709,
            "range": "± 13218",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1019291,
            "range": "± 30446",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 419414,
            "range": "± 9929",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2562895,
            "range": "± 20068",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2585449,
            "range": "± 22124",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1731038,
            "range": "± 11130",
            "unit": "ns/iter"
          }
        ]
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
          "id": "ebe0042e39ce7455a85dc957a7ff0b673eddf1da",
          "message": "fix(graph): classify node:sqlite and mandatory-node-prefix builtins\n\nis_builtin_module stripped the node: prefix and checked the remainder\nagainst a flat builtin list that omitted sqlite and sea, so imports of\nnode:sqlite surfaced as unlisted dependencies or unresolved imports and\nforced projects to add node:sqlite to ignoreDependencies.\n\nIntroduce NODE_PREFIX_ONLY_BUILTINS (sea, sqlite, test, test/reporters),\nthe modules Node documents as available only under the node: scheme, and\nmatch them only when the node: prefix is present. The bare forms now\nclassify as ordinary npm packages, because Node refuses to resolve these\nwithout the prefix and real npm packages share the names (sqlite,\nbetter-sqlite3, the test package). test and test/reporters move out of\nthe always-available list, so a bare import 'test' is no longer treated\nas a builtin (behavior change). is_builtin_module is the single gate for\nboth the unlisted-dependency path and the unresolved-import path, and\nextract_package_name retains the node: prefix on the package-usage key,\nso the one predicate covers both.\n\nFixes #627.",
          "timestamp": "2026-05-25T23:44:12+01:00",
          "tree_id": "ca57f2d898b6d34da670be9b031eae71263c7db8",
          "url": "https://github.com/fallow-rs/fallow/commit/ebe0042e39ce7455a85dc957a7ff0b673eddf1da"
        },
        "date": 1779749342796,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61577,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3831343,
            "range": "± 176475",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5491445,
            "range": "± 186364",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26895463,
            "range": "± 768390",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117212,
            "range": "± 1879",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2210,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234801,
            "range": "± 1487",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1062011,
            "range": "± 10786",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1502492,
            "range": "± 12840",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572912,
            "range": "± 13640",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4296919,
            "range": "± 37736",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4333367,
            "range": "± 35320",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2956617,
            "range": "± 23049",
            "unit": "ns/iter"
          }
        ]
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
          "id": "f12e98010219a828e6ff9264e6b0c6a78d86ef1c",
          "message": "feat(plugins): credit Lexical custom node lifecycle methods as used (#682)\n\nLexical reconstructs, clones, serializes, reconciles, and decorates custom\nnodes through a fixed set of class methods called reflectively at runtime.\nLocal project code never calls them directly, so they surfaced as\nunused-class-member false positives.\n\nThe new built-in lexical plugin (enabler: lexical, @lexical/) returns\nheritage-scoped used_class_member_rules for the three documented extendable\nnode bases: DecoratorNode, ElementNode, and TextNode. The shared lifecycle\nset (getType, clone, importJSON, importDOM, exportJSON, exportDOM, createDOM,\nupdateDOM, updateFromJSON, getTextContent, isInline) is credited on all three;\ndecorate is scoped to DecoratorNode only. Non-lifecycle methods on a node\nsubclass are still reported.\n\nReplaces the manual scoped usedClassMembers allowlist users hand-write today.\n\nFixes #628",
          "timestamp": "2026-05-25T23:47:26+01:00",
          "tree_id": "d627bb3d543c2683c735a31557e5081c29f93843",
          "url": "https://github.com/fallow-rs/fallow/commit/f12e98010219a828e6ff9264e6b0c6a78d86ef1c"
        },
        "date": 1779749745238,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63586,
            "range": "± 4278",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3983173,
            "range": "± 172446",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5655978,
            "range": "± 183865",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26508348,
            "range": "± 492224",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 122290,
            "range": "± 4233",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2249,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237375,
            "range": "± 61277",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1079154,
            "range": "± 7863",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1520230,
            "range": "± 13173",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 575625,
            "range": "± 18765",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4378614,
            "range": "± 24060",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4315642,
            "range": "± 34147",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3025074,
            "range": "± 4062",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9de44d7faf6a0832739993df9829a11f5812ac2d",
          "message": "chore: release v2.81.0",
          "timestamp": "2026-05-26T06:48:04+02:00",
          "tree_id": "c3d1de812df994e846909ad2229dcda901e8834f",
          "url": "https://github.com/fallow-rs/fallow/commit/9de44d7faf6a0832739993df9829a11f5812ac2d"
        },
        "date": 1779771223356,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61997,
            "range": "± 1267",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3775864,
            "range": "± 227351",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5311771,
            "range": "± 148417",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26417572,
            "range": "± 595106",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120048,
            "range": "± 1813",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2212,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237289,
            "range": "± 7081",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1067002,
            "range": "± 5141",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1510719,
            "range": "± 16415",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 579775,
            "range": "± 20388",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4349888,
            "range": "± 39393",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4309026,
            "range": "± 44818",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2982404,
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
          "id": "7c2888f05cc6ef87c40e24a384083b78a87229af",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.81.0",
          "timestamp": "2026-05-26T07:22:59+02:00",
          "tree_id": "253ee97ac5f1b60662600a187c0ba573a67fa3f6",
          "url": "https://github.com/fallow-rs/fallow/commit/7c2888f05cc6ef87c40e24a384083b78a87229af"
        },
        "date": 1779773261910,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35659,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3160713,
            "range": "± 132453",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4531004,
            "range": "± 139168",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21754467,
            "range": "± 421604",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 84259,
            "range": "± 645",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1837,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143024,
            "range": "± 45669",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 634954,
            "range": "± 3583",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1014806,
            "range": "± 15994",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 426817,
            "range": "± 11738",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2560127,
            "range": "± 28486",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2586707,
            "range": "± 60849",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1728396,
            "range": "± 13384",
            "unit": "ns/iter"
          }
        ]
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
          "id": "3c1b1c8e0a1736cc3dc26f7e2b01a6166a5c675e",
          "message": "chore(lint): adopt oxlint + oxfmt across JS/TS surfaces\n\nAdds `oxlint` 1.66.0 and `oxfmt` 0.51.0 as root devDependencies and wires\nthem into CI. Closes a real gap: until this PR fallow's own JS/TS code\n(npm wrapper, benchmarks, .github scripts, VS Code extension, crates/napi)\nshipped with no linter and no formatter at all. CodeQL caught a leaked\n`freshEnv` dead-helper in lazy-verify.test.js (PR #684) that an\noxlint `no-unused-vars` pass would have caught locally before commit.\n\nWhat lands:\n\n1. `.oxlintrc.json` at the repo root. Plugins: import, node, promise,\n   unicorn. Categories: correctness + suspicious as error, perf as\n   warn. Stylistic rules (`no-underscore-dangle`, `no-await-in-loop`,\n   `unicorn/consistent-function-scoping`) explicitly off where they\n   conflicted with existing conventions (test helpers prefixed `_`,\n   intentional sequential `await` in `verifyInstalled`'s per-binary\n   loop). Test files relax the rest-siblings rule.\n2. `.oxfmtrc.json` at the repo root. `ignorePatterns` only; oxfmt is\n   opinionated (matches Oxc ecosystem consistency from CLAUDE.md).\n3. Root `package.json` scripts: `lint:js`, `fmt:js`, `fmt:js:check`.\n4. CI: new `JS Lint and Format` job runs both on every push + PR;\n   added to the `ci-ok` aggregate `needs:` list.\n5. Existing JS/TS files reformatted to oxfmt's house style (single ->\n   double quotes, line wrapping). Lint findings fixed: removed three\n   unused imports (`relative` in generate-dupes-fixtures, `writeFileSync`\n   in bench-circular + compare), prefixed three unused params with `_`,\n   renamed shadowed `stats` to `jscpdStats` in bench-dupes, removed dead\n   `freshEnv`-style spread fallback, fixed promise-always-return in\n   extension.ts, migrated `.sort()` -> `.toSorted()` everywhere, and\n   bumped editors/vscode tsconfig `target`/`lib` to ES2023 so\n   `Array.prototype.toSorted` resolves (VS Code 1.96 ships with Node\n   20.18 which supports it).\n\nThe npm wrapper itself ships unchanged. This PR is pure tooling +\nmechanical reformatting; no functional behavior changes.",
          "timestamp": "2026-05-26T08:16:47+01:00",
          "tree_id": "4398bc810dd4a8677a3f2fc91ad67506f0a0f04f",
          "url": "https://github.com/fallow-rs/fallow/commit/3c1b1c8e0a1736cc3dc26f7e2b01a6166a5c675e"
        },
        "date": 1779780157254,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46615,
            "range": "± 1937",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3810092,
            "range": "± 159706",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5521655,
            "range": "± 185065",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28858032,
            "range": "± 983580",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113093,
            "range": "± 747",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2355,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 187323,
            "range": "± 23169",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 827826,
            "range": "± 9772",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317104,
            "range": "± 19597",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 539063,
            "range": "± 35329",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3323095,
            "range": "± 49260",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3341527,
            "range": "± 32272",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2256857,
            "range": "± 11369",
            "unit": "ns/iter"
          }
        ]
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
          "id": "e97b955e2daed6a34a12dfec9c6a66adb0ce5650",
          "message": "feat(perf): annotate parallel parse CPU and reused stages in --performance (#687)\n\nTwo clarity fixes to the `--performance` breakdown (issue #481).\n\nParallel parse annotation: parse_all_files now sums the wall-clock time of\nthe actual AST parses across rayon workers (cache-miss path only, so warm\nruns add ~0 and pay no measurement overhead). The renderer appends\n`(parallel: ~Nms CPU)` to the parse/extract line when the stage cleared a\n5ms floor and the summed CPU is at least 1.5x the stage's wall-clock. This\nshows that a stage whose wall-clock looks cheap can burn far more CPU, which\nis what users tuning thread counts on CI runners need to see.\n\nReused-stage label: in combined mode health reuses the dead-code pass's\ndiscovered + parsed files, so those stages previously rendered a misleading\n`0.0ms`. They now read `(measured above)`, pointing at the Pipeline\nPerformance box. The shared-parse path also measures its own config load\ninstead of reporting `0.0ms`.\n\nReconciliation: both tables gain an `(other)` row (TOTAL minus the displayed\nstages) so the rows provably sum to TOTAL. Health TOTAL now folds in\nconfig/discover/parse, which it previously excluded, so the breakdown\nreconciles in every mode.\n\nJSON `--performance` gains `parse_cpu_ms` (PipelineTimings + HealthTimings)\nand `shared_parse` (HealthTimings); additive, observational, non-deterministic.\n\nCloses #481",
          "timestamp": "2026-05-26T08:25:13+01:00",
          "tree_id": "49979184f39e9f53079ae6f2b131c1dea0f59d02",
          "url": "https://github.com/fallow-rs/fallow/commit/e97b955e2daed6a34a12dfec9c6a66adb0ce5650"
        },
        "date": 1779780651843,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46449,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3980223,
            "range": "± 216967",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5799877,
            "range": "± 236798",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30623716,
            "range": "± 905237",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114075,
            "range": "± 2737",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2264,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185474,
            "range": "± 8637",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820015,
            "range": "± 14897",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1322580,
            "range": "± 21264",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 552366,
            "range": "± 45114",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3399069,
            "range": "± 50987",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3464638,
            "range": "± 101616",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2221360,
            "range": "± 7490",
            "unit": "ns/iter"
          }
        ]
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
          "id": "116332ae2e92de62f07e1bf246f29ce66791cad3",
          "message": "feat(plugins): add Mintlify plugin (#689)\n\n* feat: add Mintlify plugin\n\nModel Mintlify documentation sites driven by docs.json / mint.json and\nthe mint / mintlify CLI. The plugin activates on the mint / mintlify\ndependency or the presence of docs.json / mint.json, keeps the config\nfile always-used, credits the CLI as tooling, and marks {md,mdx} under\nthe config file's directory as runtime-used so docs content no longer\nneeds manual dynamicallyLoaded entries. The content pattern is scoped\nto the docs root so non-Mintlify MDX stays governed by other plugins.\n\nFixes #626\n\n* docs: document Mintlify plugin\n\nAdd the Mintlify plugin to detection.md, plugins.md, the README plugin\ncount (now 105 with Lexical and Mintlify), and the CHANGELOG.\n\nRefs #626",
          "timestamp": "2026-05-26T09:17:34+01:00",
          "tree_id": "a66f2bffe4ee871013deb89e945107a92fed8499",
          "url": "https://github.com/fallow-rs/fallow/commit/116332ae2e92de62f07e1bf246f29ce66791cad3"
        },
        "date": 1779783748859,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61954,
            "range": "± 2058",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3996531,
            "range": "± 170365",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5647969,
            "range": "± 216261",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26615612,
            "range": "± 470753",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120355,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2213,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237323,
            "range": "± 8786",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070088,
            "range": "± 4406",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1514911,
            "range": "± 17222",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 582154,
            "range": "± 11847",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4366919,
            "range": "± 29829",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4410692,
            "range": "± 37747",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3034699,
            "range": "± 14912",
            "unit": "ns/iter"
          }
        ]
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
          "id": "04add82a217ad0dfcc1c0d7c23f85daeca764eb6",
          "message": "feat: add k6 runtime entry surfaces\n\n* chore: open issue #625 implementation branch\n\n* feat: add k6 runtime entry support",
          "timestamp": "2026-05-26T09:44:13+01:00",
          "tree_id": "05f3191da24e2d895d697156bb1206798f3abd75",
          "url": "https://github.com/fallow-rs/fallow/commit/04add82a217ad0dfcc1c0d7c23f85daeca764eb6"
        },
        "date": 1779785344832,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62657,
            "range": "± 677",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3685588,
            "range": "± 173265",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5405881,
            "range": "± 212075",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26578204,
            "range": "± 753815",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115367,
            "range": "± 715",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2431,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235091,
            "range": "± 4659",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1060607,
            "range": "± 185543",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1507631,
            "range": "± 46066",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577018,
            "range": "± 15476",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4354477,
            "range": "± 37859",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4355361,
            "range": "± 117096",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2972535,
            "range": "± 57610",
            "unit": "ns/iter"
          }
        ]
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
          "id": "4f150680c3140e2ded8314447cfaefdcee310149",
          "message": "fix: handle Deno jsr/npm/url imports and Supabase Edge Function roots (#690)\n\nTreat jsr: and URL specifiers as external runtime imports and normalize\nnpm:<pkg>@version to its npm package so Deno/Supabase Edge Function imports\nno longer report as unresolved-import or bogus unlisted dependencies. A\npackage imported only via npm: is self-declaring and not reported as\nunlisted (mirrors the per-file bun: carve-out). Add a built-in supabase\nplugin that marks supabase/functions/*/index.* as runtime entry roots and\ncredits the supabase CLI as tooling; _shared code stays reachable via\nrelative imports.\n\nCloses #624",
          "timestamp": "2026-05-26T10:12:40+01:00",
          "tree_id": "734d030720646d638895e03bca2e2e0634880a53",
          "url": "https://github.com/fallow-rs/fallow/commit/4f150680c3140e2ded8314447cfaefdcee310149"
        },
        "date": 1779787069348,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 51994,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3185040,
            "range": "± 60027",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4506639,
            "range": "± 99286",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 20294157,
            "range": "± 419728",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111469,
            "range": "± 1528",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3046,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156157,
            "range": "± 5485",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 712282,
            "range": "± 6296",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1177515,
            "range": "± 15659",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 468117,
            "range": "± 9335",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2865340,
            "range": "± 28684",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2918181,
            "range": "± 25050",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1966915,
            "range": "± 11996",
            "unit": "ns/iter"
          }
        ]
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
          "id": "9c4b1d0a00a7e599a27cde0d6dc895f640fb67da",
          "message": "fix(fix): withhold low-confidence unused-export rewrites when consumers may be off-graph\n\n`fallow fix --yes` stripped the export keyword from every export reported\nas unused, including symbols consumed only through paths fallow's graph\ncannot see (Vitest mock aliases, off-workspace e2e suites, fixture/golden\nbuild steps). That turned an analysis false positive into a source-level\nbreak.\n\nThe export fixer now withholds removals in two low-confidence cases:\nfiles under an off-graph consumer directory (__mocks__, __fixtures__,\nfixtures, e2e, e2e-tests, cypress, playwright, examples, evals, golden)\nand files that themselves have an unresolved import. Both surface as\nintentional skips: new SkipReason::LowConfidenceOffGraph /\nLowConfidenceUnresolvedImports, a combined skipped_low_confidence_exports\nenvelope counter, per-record skip_reason, and a human summary line. The\nskip does not change the exit code; the export stays reported by\n`fallow check` for manual review. High-confidence exports are removed\nunchanged.\n\nFixes #602",
          "timestamp": "2026-05-26T11:15:25+01:00",
          "tree_id": "6ffdc2b3f12f9bea40378a1572ed0d2e3dbb0b8c",
          "url": "https://github.com/fallow-rs/fallow/commit/9c4b1d0a00a7e599a27cde0d6dc895f640fb67da"
        },
        "date": 1779790838219,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62487,
            "range": "± 2066",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3668198,
            "range": "± 224310",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5315900,
            "range": "± 153299",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26467276,
            "range": "± 479976",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116322,
            "range": "± 1382",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2206,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234235,
            "range": "± 2732",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1059160,
            "range": "± 13876",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1489703,
            "range": "± 17312",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 564688,
            "range": "± 26750",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4299747,
            "range": "± 28672",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4323748,
            "range": "± 30905",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2975836,
            "range": "± 9380",
            "unit": "ns/iter"
          }
        ]
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
          "id": "b4305cbb928b7af0f5295456654248f7423277a3",
          "message": "fix: credit class members reached via new Class().method() receivers (#692)\n\nMethods called on a freshly-constructed instance were not traced, so they\nsurfaced as unused-class-member false positives. Two public adoption PRs had\nto add inline fallow-ignore comments / usedClassMembers entries for exactly\nthis gap (everr#144, graphql-markdown#2949).\n\nExtends the #387 static-factory chain credit to constructor roots:\n\n- static_member_object_name gains a NewExpression arm (bare Identifier callee,\n  builtin-guarded), so direct new Repo(client).search(data) and the first\n  method off any constructor chain credit Class.member through the existing\n  local_to_export_keys path.\n- try_record_fluent_chain_access recognizes a NewExpression root and emits a\n  distinct FLUENT_CHAIN_NEW_SENTINEL ({class}:{chain}, no root method).\n- propagate_fluent_chain_new_accesses resolves the class, walks re-export\n  origins, and credits downstream members only when every chain step is a\n  self-returning ClassMethod, preserving the #387 safety check.\n\nCACHE_VERSION 98 -> 99 (extraction output changes for these patterns).\n\nFixes #605",
          "timestamp": "2026-05-26T11:32:17+01:00",
          "tree_id": "bed51ce8cd4b059d40344977ced3fd9f37d47f43",
          "url": "https://github.com/fallow-rs/fallow/commit/b4305cbb928b7af0f5295456654248f7423277a3"
        },
        "date": 1779791834225,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47316,
            "range": "± 794",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3709706,
            "range": "± 135510",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5466666,
            "range": "± 127097",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28030055,
            "range": "± 365776",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107977,
            "range": "± 6777",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2319,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185367,
            "range": "± 7130",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821420,
            "range": "± 8063",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1311552,
            "range": "± 19586",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536087,
            "range": "± 17074",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3319379,
            "range": "± 74297",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3369745,
            "range": "± 35375",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2261707,
            "range": "± 30879",
            "unit": "ns/iter"
          }
        ]
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
          "id": "4727b97948b2e24d1563167aeda78f5cf94ef4e1",
          "message": "feat(plugins): recognize Vitest test.alias/resolve.alias in vite.config, projects, and workspace files (#698)\n\nFollow-up to #601. The Vitest plugin parsed test.alias only from a top-level\nvitest.config.* (plus test.projects[*].test.alias), leaving three common shapes\nas false unresolved-import / unlisted-dependency / unused-export findings:\n- the Vitest config embedded in vite.config.ts (defineConfig({ test, resolve }));\n- project-level resolve.alias mocks (test.projects[*].resolve.alias);\n- the vitest.workspace.{ts,js} array file (defineWorkspace([...])), which\n  find_config_object cannot reach (array default export).\n\nA new shared crate::plugins::test_alias module funnels every alias surface\nthrough one process_test_alias: the Vitest plugin handles vitest.config.* and the\nworkspace-array file; the Vite plugin reuses apply_test_block_aliases for the\ntest-block + projects surfaces inside vite.config.* (which never reaches the\nVitest plugin). Top-level resolve.alias in vite.config.* keeps its existing\npath-alias-only behavior to avoid changing non-test Vite projects.\n\nThe package-to-package special case ('lodash-es' -> 'lodash') is now\ndistinguished from a directory alias (@ -> path.resolve(__dirname, 'src')) by a\ndeterministic, filesystem-free check: a path-builder or ./-prefixed replacement\nis a path, a plain bare string literal is a package (extract_config_aliases_kinded\nflags this). No is_dir() probe, so results are identical across sparse checkouts,\nDocker layers, and published tarballs.\n\nStatically-unreachable config shapes (mergeConfig, imported-and-spread base\nconfigs) and nested test.projects inside a workspace-array element are out of\nscope; the former emits a RUST_LOG=debug line.\n\nRefs #601.",
          "timestamp": "2026-05-26T13:59:14+01:00",
          "tree_id": "6cd63ce932b58393e065d30a623893ad65b93135",
          "url": "https://github.com/fallow-rs/fallow/commit/4727b97948b2e24d1563167aeda78f5cf94ef4e1"
        },
        "date": 1779800688382,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45619,
            "range": "± 2602",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3823460,
            "range": "± 192148",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5475701,
            "range": "± 147516",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28742886,
            "range": "± 1496995",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 122354,
            "range": "± 1428",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2344,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185648,
            "range": "± 4862",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820516,
            "range": "± 6084",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1313356,
            "range": "± 17207",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 528352,
            "range": "± 23317",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3287058,
            "range": "± 88349",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3327247,
            "range": "± 32288",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2250539,
            "range": "± 13635",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b460904c42446648518f40584d3a74109fb2ecf2",
          "message": "test(types): property-test the forward-slash path serializer\n\nThe example tests only exercise a local normalize() proxy; the real\nserde_path::serialize / serialize_vec functions were never driven through\na Serializer. Add proptests over arbitrary mixed-separator paths that run\nthe real functions through serde_json:\n\n- output never contains a backslash and equals input with every backslash\n  rewritten to a forward slash (the cross-platform JSON/SARIF invariant)\n- a serialized path reads back as its normalized form\n- serialization is idempotent over already-normalized input\n- the vec serializer agrees element-for-element with the scalar one\n\nproptest reads its failure-persistence file via env::current_dir() at\nstartup, which aborts under Miri isolation (getcwd unsupported), so skip\nproptests in the fallow-types Miri job to match the fallow-graph job.",
          "timestamp": "2026-05-26T15:37:54+02:00",
          "tree_id": "0743f723d9b4539f622ae499f06d5465f8b27e49",
          "url": "https://github.com/fallow-rs/fallow/commit/b460904c42446648518f40584d3a74109fb2ecf2"
        },
        "date": 1779803192636,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61041,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4149693,
            "range": "± 282881",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5552872,
            "range": "± 247575",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26598153,
            "range": "± 435021",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116960,
            "range": "± 1805",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2216,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234655,
            "range": "± 3947",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1061952,
            "range": "± 7611",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1498335,
            "range": "± 14679",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574966,
            "range": "± 12782",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4294470,
            "range": "± 27456",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4314895,
            "range": "± 324962",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2968149,
            "range": "± 6830",
            "unit": "ns/iter"
          }
        ]
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
          "id": "1c1fb174f8209ec69e14a383be743f068278cb4a",
          "message": "fix(plugins): evaluate path-helper calls in bundler entry config (#700)\n\n* fix(plugins): evaluate path-helper calls in bundler entry config\n\nbuild.rollupOptions.input and build.lib.entry values written as\npath-helper calls (resolve(__dirname, \"src/app.ts\"), path.resolve(...),\njoin(...), and the import.meta.dirname equivalents) were CallExpressions\nthat the leaf evaluator dropped, so files declared only via path helpers\nwere reported as unused until the user duplicated the entry list into\n.fallowrc.\n\nexpression_to_string_or_array now evaluates leaf values through\nexpression_to_path_string (a superset of expression_to_string that\nfalls through to it for string/template literals), so the change is\nadditive: it only adds previously-dropped path-helper entries, never\nchanging string-literal behavior. call_expression_to_path_string also\ntreats import.meta.dirname as a current-directory anchor alongside\n__dirname, which improves alias resolution for every config sharing the\nhelper. CSS inputs are preserved like any other entry.\n\nFixes #604\n\n* docs(changelog): note path-helper evaluation in bundler entry config\n\nDocument issue #604 fix in CHANGELOG [Unreleased], detection.md, and\nplugins.md (Vite entry/input now evaluates resolve/path.resolve/join +\nimport.meta.dirname path-helper calls via the shared extractor).",
          "timestamp": "2026-05-26T15:54:23+01:00",
          "tree_id": "ac1b51f51694d7d886c85ad53553519f200713c4",
          "url": "https://github.com/fallow-rs/fallow/commit/1c1fb174f8209ec69e14a383be743f068278cb4a"
        },
        "date": 1779807608214,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 52335,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3268656,
            "range": "± 265479",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4605252,
            "range": "± 144895",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21433124,
            "range": "± 548810",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105035,
            "range": "± 2300",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3034,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156316,
            "range": "± 2141",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 714629,
            "range": "± 16326",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1183231,
            "range": "± 19082",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 467334,
            "range": "± 6118",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2872299,
            "range": "± 23384",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2906009,
            "range": "± 26395",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1951354,
            "range": "± 22723",
            "unit": "ns/iter"
          }
        ]
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
          "id": "27f7ae06183552e141e47ead1141e11bbfa176f4",
          "message": "feat(plugins): parse Playwright webServer.command for CLI deps and script entries\n\nParse webServer.command (object and array forms) from playwright.config.* and run\neach command through the shared package.json script parser: invoked npm binaries are\ncredited as referenced dependencies and local file arguments are seeded as reachable\nsetup files. File paths (and globalSetup/globalTeardown) resolve relative to the\nconfig file's directory, matching Playwright's webServer.cwd default; an explicit cwd\noverrides that base. Package-manager delegations (npm run start) credit nothing.\n\nFixes #621.",
          "timestamp": "2026-05-26T16:00:09+01:00",
          "tree_id": "ca3b44127b7cf2062ee473d5bfbfda9ed97f042f",
          "url": "https://github.com/fallow-rs/fallow/commit/27f7ae06183552e141e47ead1141e11bbfa176f4"
        },
        "date": 1779807988196,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 52026,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3275791,
            "range": "± 114717",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4641325,
            "range": "± 96767",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21877184,
            "range": "± 434207",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111727,
            "range": "± 3038",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2997,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 159556,
            "range": "± 2843",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 723509,
            "range": "± 8388",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1201343,
            "range": "± 26589",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 492163,
            "range": "± 25979",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2964531,
            "range": "± 39119",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2992940,
            "range": "± 49115",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1991149,
            "range": "± 16957",
            "unit": "ns/iter"
          }
        ]
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
          "id": "61a391d392dd1485fb56625cd8fcf33bf6eceb25",
          "message": "feat(plugins): parse electron.vite.config rollupOptions.input entries (#701)\n\nThe Electron plugin activated for electron-vite and kept\nelectron.vite.config.{ts,js,mjs} alive but never parsed it, so\nmulti-window renderer HTML entries declared in\nrenderer.build.rollupOptions.input (commonly\nresolve(__dirname, 'src/renderer/index.html')) were missed and the\n<script src> source trees behind them reported as unused-files. The\nplugin now reads the main/preload/renderer build.rollupOptions.input in\nstring, array, and object forms and seeds each value as an entry point,\nnormalized relative to the config file so monorepo subpackage configs\nmap correctly.\n\nObject/array values commonly use path helpers, so a new electron-only\nconfig_parser::extract_config_path_string_or_array routes each value\nthrough expression_to_path_string, recovering resolve(__dirname, ...),\njoin(...), fileURLToPath(...), and new URL(..., import.meta.url) plus\nplain string and template literals. The shared\nextract_config_string_or_array is intentionally left unchanged (it only\nrecovers string literals in object/array positions); broadening it is a\nseparate, benchmark-moving change. The static main/preload fallback\nglobs also widen to {ts,tsx,js,jsx,mts,mjs}.\n\nCrediting is scoped to declared inputs, so a renderer source file linked\nfrom no declared entry is still reported. Per-section function-wrapped\nconfigs (renderer: defineConfig({...})) are out of scope, matching the\nVite plugin's plain-object nesting requirement.\n\nFixes #600.",
          "timestamp": "2026-05-26T16:02:10+01:00",
          "tree_id": "2f79087d9af571ba49a6d9bbf83d4d0d60c09a4e",
          "url": "https://github.com/fallow-rs/fallow/commit/61a391d392dd1485fb56625cd8fcf33bf6eceb25"
        },
        "date": 1779808291150,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62876,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3709096,
            "range": "± 203473",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5346332,
            "range": "± 160324",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26712185,
            "range": "± 393660",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114700,
            "range": "± 2509",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2223,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235492,
            "range": "± 9465",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1057928,
            "range": "± 10564",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1519081,
            "range": "± 24397",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572340,
            "range": "± 23165",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4286500,
            "range": "± 26143",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4323840,
            "range": "± 33668",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2940430,
            "range": "± 9866",
            "unit": "ns/iter"
          }
        ]
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
          "id": "3f54a2d2656a3ae0fde8693486e738f2a66d75fa",
          "message": "feat(plugins): parse ng-packagr ng-package.json lib.entryFile as Angular library public API (#703)\n\nThe Angular plugin now reads lib.entryFile from ng-package.json /\nng-package.prod.json and treats it as a package entry point, resolved\nrelative to the config directory. ng-packagr, not the app graph, consumes\nthat file, so previously the public-api entry file surfaced as unused-file\nand its re-exported symbols as unused-export.\n\nWhen lib.entryFile is omitted it falls back to ng-packagr's schema default\nsrc/public_api.ts (underscore, per ng-package.schema.json; hyphenated\npublic-api.ts libraries set entryFile explicitly). Nested\nsecondary-entry-point configs in the package subtree are scanned too\n(bounded depth, skipping node_modules/dist/out/tmp/coverage/hidden dirs;\nsame-directory siblings left to config discovery). The plugin also\nactivates on a ng-packagr dependency in addition to @angular/core;\nenabler detection reads peerDependencies.\n\nVerified on unjs/unhead packages/angular: the primary entry plus the\nclient/server secondary entries (12 angular findings) flip from unused to\nused with zero collateral elsewhere. Benchmark counts unchanged on all\nfixtures (the path is gated behind Angular enablers + ng-package*.json).\n\nFixes #606",
          "timestamp": "2026-05-26T16:17:52+01:00",
          "tree_id": "c902536473f52db8fb02af22cf0db13168b4f331",
          "url": "https://github.com/fallow-rs/fallow/commit/3f54a2d2656a3ae0fde8693486e738f2a66d75fa"
        },
        "date": 1779808971902,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 52586,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3125919,
            "range": "± 98985",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4488041,
            "range": "± 116560",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21097152,
            "range": "± 388620",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107775,
            "range": "± 2476",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3031,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 155766,
            "range": "± 1931",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 707056,
            "range": "± 6007",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1174829,
            "range": "± 14645",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 467895,
            "range": "± 6258",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2869253,
            "range": "± 17074",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2922409,
            "range": "± 22159",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1931871,
            "range": "± 13506",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779809861142,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45943,
            "range": "± 784",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3739652,
            "range": "± 167718",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5481699,
            "range": "± 174349",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28219021,
            "range": "± 404919",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120988,
            "range": "± 6826",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2281,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184647,
            "range": "± 1682",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 817047,
            "range": "± 5207",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1312492,
            "range": "± 22553",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531067,
            "range": "± 34822",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3297012,
            "range": "± 27497",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3318982,
            "range": "± 117831",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2225701,
            "range": "± 56288",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779811109034,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46520,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3757789,
            "range": "± 164052",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5509520,
            "range": "± 170149",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28052805,
            "range": "± 441353",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120835,
            "range": "± 15598",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2282,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185436,
            "range": "± 12524",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819110,
            "range": "± 7202",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1308436,
            "range": "± 18980",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537177,
            "range": "± 10607",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3291796,
            "range": "± 97521",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3313952,
            "range": "± 46130",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2223861,
            "range": "± 20854",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779816705602,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46030,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3805160,
            "range": "± 150511",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5557442,
            "range": "± 194494",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28388535,
            "range": "± 886914",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117586,
            "range": "± 892",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2321,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184315,
            "range": "± 2846",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822318,
            "range": "± 5057",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1311507,
            "range": "± 27648",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537320,
            "range": "± 11348",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3299796,
            "range": "± 28507",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3343905,
            "range": "± 33443",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2242731,
            "range": "± 36031",
            "unit": "ns/iter"
          }
        ]
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
          "id": "21153aa074350fbdbdbcad49c82d6e4e1abf0aa0",
          "message": "test: enforce serde_path on serialized paths\n\n* chore: open issue #615 implementation branch\n\n* test: enforce serde_path on serialized paths",
          "timestamp": "2026-05-26T22:00:20+01:00",
          "tree_id": "698de7923e076c5d6a887b44f50d5203e3e7f0f1",
          "url": "https://github.com/fallow-rs/fallow/commit/21153aa074350fbdbdbcad49c82d6e4e1abf0aa0"
        },
        "date": 1779829691805,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 24623,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 2568180,
            "range": "± 47836",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 3860524,
            "range": "± 82564",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 18558752,
            "range": "± 460285",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 70488,
            "range": "± 1828",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1774,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 103886,
            "range": "± 3163",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 469441,
            "range": "± 14931",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 750934,
            "range": "± 27391",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 319554,
            "range": "± 13905",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 1818332,
            "range": "± 44019",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 1851482,
            "range": "± 51491",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1264931,
            "range": "± 83904",
            "unit": "ns/iter"
          }
        ]
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
          "id": "05590e14e08195a48d5185b9fcfdd4849cffe878",
          "message": "fix: credit React Compiler Babel plugin config\n\nCredit babel-plugin-react-compiler when React Compiler is enabled through documented Next.js and Vite compiler configuration. Disabled and unrelated config shapes still report the dependency as unused.\n\nCloses #623.",
          "timestamp": "2026-05-26T22:06:25+01:00",
          "tree_id": "9f137a2e74c9570c1800e09eb9e9c69e116c6f71",
          "url": "https://github.com/fallow-rs/fallow/commit/05590e14e08195a48d5185b9fcfdd4849cffe878"
        },
        "date": 1779830140923,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63707,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4055014,
            "range": "± 186994",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5703271,
            "range": "± 186832",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26962624,
            "range": "± 992229",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119828,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2199,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 238534,
            "range": "± 1569",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1072228,
            "range": "± 11891",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1522114,
            "range": "± 17606",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 578095,
            "range": "± 29244",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4320871,
            "range": "± 123694",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4357093,
            "range": "± 36016",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2986495,
            "range": "± 8618",
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
          "id": "1b91ccf1e04dc7dfb411d8fcca35315107b2f224",
          "message": "chore(deps): bump sha2 from 0.10.9 to 0.11.0 (#717)\n\nBumps [sha2](https://github.com/RustCrypto/hashes) from 0.10.9 to 0.11.0.\n- [Commits](https://github.com/RustCrypto/hashes/compare/sha2-v0.10.9...sha2-v0.11.0)\n\n---\nupdated-dependencies:\n- dependency-name: sha2\n  dependency-version: 0.11.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-26T22:15:04+01:00",
          "tree_id": "a7a37cbd2cd3e785e7ff52e0233f8e56515d48d1",
          "url": "https://github.com/fallow-rs/fallow/commit/1b91ccf1e04dc7dfb411d8fcca35315107b2f224"
        },
        "date": 1779830727414,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63345,
            "range": "± 1037",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3995144,
            "range": "± 261325",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5562236,
            "range": "± 208555",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26906622,
            "range": "± 440101",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121091,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2246,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235729,
            "range": "± 4453",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070517,
            "range": "± 65538",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1511754,
            "range": "± 79364",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 570929,
            "range": "± 14492",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4367070,
            "range": "± 39891",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4386841,
            "range": "± 29510",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2977070,
            "range": "± 5014",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779831496027,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47252,
            "range": "± 763",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3750941,
            "range": "± 208719",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5800804,
            "range": "± 179951",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29256827,
            "range": "± 512917",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115786,
            "range": "± 1776",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2293,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185741,
            "range": "± 2348",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 826398,
            "range": "± 11281",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320508,
            "range": "± 19360",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533782,
            "range": "± 15996",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3311991,
            "range": "± 27748",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3341295,
            "range": "± 34063",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2231433,
            "range": "± 25686",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779831920871,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61724,
            "range": "± 2266",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3683300,
            "range": "± 185583",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5363764,
            "range": "± 141957",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27006922,
            "range": "± 424485",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118482,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2207,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235124,
            "range": "± 4486",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069377,
            "range": "± 86813",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1526638,
            "range": "± 20626",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 569169,
            "range": "± 16783",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4350655,
            "range": "± 26084",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4382347,
            "range": "± 74764",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2977155,
            "range": "± 5055",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779832938733,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45540,
            "range": "± 3617",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3790781,
            "range": "± 178202",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5574531,
            "range": "± 136817",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28617597,
            "range": "± 466760",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116448,
            "range": "± 2467",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2366,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184797,
            "range": "± 2034",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820939,
            "range": "± 74799",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1318457,
            "range": "± 20180",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531358,
            "range": "± 7826",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3314289,
            "range": "± 117532",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3333353,
            "range": "± 30566",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2226385,
            "range": "± 9548",
            "unit": "ns/iter"
          }
        ]
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
          "id": "deb45dfc573e56bece471e92de81d487e0dcea10",
          "message": "fix: support OpenNext Cloudflare config\n\n* chore: start issue 613 implementation\n\n* fix: support OpenNext Cloudflare config",
          "timestamp": "2026-05-27T06:32:34+01:00",
          "tree_id": "01da804a832353b882ed79c56daa11d2420bff8b",
          "url": "https://github.com/fallow-rs/fallow/commit/deb45dfc573e56bece471e92de81d487e0dcea10"
        },
        "date": 1779860263824,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47313,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3784907,
            "range": "± 167192",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5595566,
            "range": "± 225523",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29133008,
            "range": "± 494195",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120401,
            "range": "± 1153",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2318,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185473,
            "range": "± 21070",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821812,
            "range": "± 9626",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321246,
            "range": "± 69655",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533872,
            "range": "± 8229",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3327791,
            "range": "± 30792",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3345775,
            "range": "± 27908",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2234873,
            "range": "± 72128",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779860560906,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62223,
            "range": "± 1370",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3748384,
            "range": "± 191251",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5461799,
            "range": "± 191602",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27323690,
            "range": "± 671636",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118474,
            "range": "± 1019",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2249,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235538,
            "range": "± 5408",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070236,
            "range": "± 7915",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1523643,
            "range": "± 13390",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 571721,
            "range": "± 26439",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4359732,
            "range": "± 25737",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4379643,
            "range": "± 27175",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2989777,
            "range": "± 7570",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779862438240,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61983,
            "range": "± 2602",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3992153,
            "range": "± 270118",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5519327,
            "range": "± 207375",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27649412,
            "range": "± 451026",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121540,
            "range": "± 1452",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2218,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 238794,
            "range": "± 5570",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1075236,
            "range": "± 12068",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1528879,
            "range": "± 16936",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572720,
            "range": "± 62032",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4367905,
            "range": "± 25141",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4419716,
            "range": "± 36501",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3009762,
            "range": "± 7901",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779866342941,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62415,
            "range": "± 1449",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3889350,
            "range": "± 256357",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5516694,
            "range": "± 267966",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28314542,
            "range": "± 460076",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119965,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2574,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234150,
            "range": "± 17361",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1066437,
            "range": "± 7661",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1511330,
            "range": "± 14507",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 570228,
            "range": "± 26560",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4354447,
            "range": "± 98187",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4396041,
            "range": "± 25965",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2964751,
            "range": "± 7850",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779867132872,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 35121,
            "range": "± 1118",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3127620,
            "range": "± 99640",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4560195,
            "range": "± 110141",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23229744,
            "range": "± 567579",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 84653,
            "range": "± 1515",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1793,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143416,
            "range": "± 8921",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 638183,
            "range": "± 8387",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1027185,
            "range": "± 29223",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 423514,
            "range": "± 28340",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2577881,
            "range": "± 61909",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2589628,
            "range": "± 54741",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1734408,
            "range": "± 24913",
            "unit": "ns/iter"
          }
        ]
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
          "id": "ceaac6dfad07cc265d87067126f92bb76ed970b2",
          "message": "fix(tests): normalize Contentlayer fixture paths\n\nThe Contentlayer integration test asserted Unix-style suffixes against raw analyzer file paths. On Windows the analyzer can return absolute backslash paths, which made the test fail even though the orphan file was correctly reported.\n\nNormalize unused file paths relative to the fixture root before making the reachability assertions. This keeps the regression coverage focused on Contentlayer behavior instead of host path formatting.",
          "timestamp": "2026-05-27T08:50:48+01:00",
          "tree_id": "825a41a8bfb2804300f2fd5fa8938702702ce9cb",
          "url": "https://github.com/fallow-rs/fallow/commit/ceaac6dfad07cc265d87067126f92bb76ed970b2"
        },
        "date": 1779868555720,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45758,
            "range": "± 1326",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3810919,
            "range": "± 179293",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5614185,
            "range": "± 173409",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29118986,
            "range": "± 391009",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120749,
            "range": "± 367",
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
            "value": 185376,
            "range": "± 5817",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821282,
            "range": "± 5423",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320216,
            "range": "± 21208",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531382,
            "range": "± 7257",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3299157,
            "range": "± 35446",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3335281,
            "range": "± 27716",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2239111,
            "range": "± 4005",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779868922798,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46407,
            "range": "± 599",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3656555,
            "range": "± 138831",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5824987,
            "range": "± 189884",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29049523,
            "range": "± 635257",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120854,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2406,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184851,
            "range": "± 3753",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819088,
            "range": "± 102742",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1325610,
            "range": "± 18612",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535394,
            "range": "± 48791",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3308587,
            "range": "± 31759",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3337336,
            "range": "± 34952",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2228536,
            "range": "± 6998",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "102022084+Hal-Spidernight@users.noreply.github.com",
            "name": "Hal",
            "username": "Hal-Spidernight"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fea97b1fa7cb64ea86fd14a37cfc0864648ef5e3",
          "message": "fix(audit): symlink Nuxt/Astro generated dirs into base worktree\n\nExtend the audit base worktree's host-symlink mechanism (previously node_modules only) to also cover the gitignored `.nuxt/` and `.astro/` meta-framework generated directories, driven by a shared MATERIALIZED_CONTEXT_DIRS constant. Without them, `git worktree add --detach` left the base pass unable to resolve tsconfig `references` chains into the generated tsconfigs, emitting spurious \"missing .nuxt/tsconfig.json\" / \"missing .astro/\" warnings and falling back to resolver-less resolution. The trade-off matches node_modules: the symlinked dir is HEAD-shaped, not base-shaped, but the recovered alias-resolution accuracy outweighs the residual drift.\n\nIncludes a cross-reference between MATERIALIZED_CONTEXT_DIRS and the plugin registry's meta-framework prerequisite list so the two sets cannot silently drift, plus unit tests covering symlink creation, the skip-when-absent and preserve-real-dir branches, and per-dir independence.",
          "timestamp": "2026-05-27T09:12:40+01:00",
          "tree_id": "0cc6fb34d385b66bb70c7e7f99ba1e5d24880bd2",
          "url": "https://github.com/fallow-rs/fallow/commit/fea97b1fa7cb64ea86fd14a37cfc0864648ef5e3"
        },
        "date": 1779869857865,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61724,
            "range": "± 1468",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3895572,
            "range": "± 201696",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5563539,
            "range": "± 167041",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27517957,
            "range": "± 359958",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116494,
            "range": "± 716",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2237,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237385,
            "range": "± 3628",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1074272,
            "range": "± 9587",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1527372,
            "range": "± 15223",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574776,
            "range": "± 10401",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4352299,
            "range": "± 23698",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4410087,
            "range": "± 26913",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2987143,
            "range": "± 4756",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779874007652,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63883,
            "range": "± 2209",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4100555,
            "range": "± 153650",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6118655,
            "range": "± 196433",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28528178,
            "range": "± 645056",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117565,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2384,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235980,
            "range": "± 1131",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1067014,
            "range": "± 7136",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1510790,
            "range": "± 14188",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576288,
            "range": "± 5538",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4368959,
            "range": "± 158010",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4390762,
            "range": "± 40676",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2964015,
            "range": "± 9872",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779876534652,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45973,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4028112,
            "range": "± 165109",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5882532,
            "range": "± 350852",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 31045981,
            "range": "± 698003",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109195,
            "range": "± 731",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2288,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185365,
            "range": "± 7827",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823741,
            "range": "± 6692",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1326802,
            "range": "± 21219",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532728,
            "range": "± 32545",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3331074,
            "range": "± 26709",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3357645,
            "range": "± 38621",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2252039,
            "range": "± 113160",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779877887141,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46708,
            "range": "± 2167",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3786660,
            "range": "± 144196",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5718174,
            "range": "± 215653",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30196478,
            "range": "± 748494",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118943,
            "range": "± 4343",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2303,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185158,
            "range": "± 2378",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822129,
            "range": "± 4716",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1322647,
            "range": "± 55004",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536064,
            "range": "± 37925",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3314536,
            "range": "± 24367",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3336486,
            "range": "± 25563",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2259573,
            "range": "± 13904",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779880211651,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62052,
            "range": "± 813",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4148732,
            "range": "± 181540",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5787028,
            "range": "± 192644",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28081225,
            "range": "± 467028",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121511,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2270,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 231595,
            "range": "± 1323",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1048669,
            "range": "± 28803",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1495743,
            "range": "± 18944",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 568433,
            "range": "± 13805",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4249794,
            "range": "± 26302",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4277471,
            "range": "± 44899",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2957640,
            "range": "± 11997",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779889857961,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63949,
            "range": "± 1801",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4016499,
            "range": "± 183018",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5855561,
            "range": "± 251885",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30902285,
            "range": "± 693371",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114942,
            "range": "± 797",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2217,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233585,
            "range": "± 26143",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1054570,
            "range": "± 8349",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1516566,
            "range": "± 19845",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 589074,
            "range": "± 12558",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4419398,
            "range": "± 30145",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4446878,
            "range": "± 38184",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2979557,
            "range": "± 38489",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779890387608,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47147,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3746286,
            "range": "± 210057",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5692088,
            "range": "± 156795",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29320707,
            "range": "± 857813",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121473,
            "range": "± 655",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2309,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185373,
            "range": "± 2526",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821574,
            "range": "± 11415",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1318429,
            "range": "± 24875",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534043,
            "range": "± 10699",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3297793,
            "range": "± 116768",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3341952,
            "range": "± 75433",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2235655,
            "range": "± 8166",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779892230828,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47859,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3851245,
            "range": "± 170028",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5891838,
            "range": "± 206683",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29194497,
            "range": "± 430279",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119288,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2292,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184919,
            "range": "± 4110",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819988,
            "range": "± 8801",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1312518,
            "range": "± 17633",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 523947,
            "range": "± 31104",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3308379,
            "range": "± 28044",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3359079,
            "range": "± 24443",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2240140,
            "range": "± 9184",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779894339597,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63050,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4231102,
            "range": "± 153118",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5836946,
            "range": "± 211330",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29781069,
            "range": "± 776891",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111496,
            "range": "± 3487",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2218,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236252,
            "range": "± 1712",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1073483,
            "range": "± 13173",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1530954,
            "range": "± 19001",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 580522,
            "range": "± 17954",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4340064,
            "range": "± 46767",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4290628,
            "range": "± 64477",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2987867,
            "range": "± 24625",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779967626171,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46148,
            "range": "± 808",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3813779,
            "range": "± 193681",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5761695,
            "range": "± 175648",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30018014,
            "range": "± 535501",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117428,
            "range": "± 2266",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2311,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185502,
            "range": "± 5611",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821038,
            "range": "± 11499",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1319245,
            "range": "± 16003",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533406,
            "range": "± 7927",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3320238,
            "range": "± 30166",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3352361,
            "range": "± 34498",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2235659,
            "range": "± 4332",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779968827741,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45661,
            "range": "± 2158",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3855682,
            "range": "± 147674",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5769492,
            "range": "± 161487",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29415610,
            "range": "± 451416",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115739,
            "range": "± 1972",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2302,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186059,
            "range": "± 2669",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 829340,
            "range": "± 15919",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1318307,
            "range": "± 15521",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534558,
            "range": "± 14937",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3300399,
            "range": "± 65552",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3336795,
            "range": "± 39684",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2237893,
            "range": "± 9997",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779970884996,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 51950,
            "range": "± 885",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3918310,
            "range": "± 221495",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5417976,
            "range": "± 271335",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23748685,
            "range": "± 1187568",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105499,
            "range": "± 2525",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3082,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157485,
            "range": "± 8590",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 716210,
            "range": "± 34935",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1201684,
            "range": "± 26416",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 487556,
            "range": "± 24255",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3019402,
            "range": "± 33884",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3058666,
            "range": "± 42341",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1974070,
            "range": "± 30664",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779971948905,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46302,
            "range": "± 1052",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3791641,
            "range": "± 146492",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5688146,
            "range": "± 144326",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29146635,
            "range": "± 552890",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121078,
            "range": "± 3646",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2362,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186146,
            "range": "± 6217",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 824373,
            "range": "± 8031",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317664,
            "range": "± 25541",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 519528,
            "range": "± 35508",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3285976,
            "range": "± 32465",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3295959,
            "range": "± 45337",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2221823,
            "range": "± 14298",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779992104886,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62976,
            "range": "± 1342",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3998758,
            "range": "± 206688",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5879998,
            "range": "± 199046",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28067527,
            "range": "± 472427",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116643,
            "range": "± 967",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2218,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235261,
            "range": "± 8852",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070435,
            "range": "± 19438",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1523272,
            "range": "± 23516",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572007,
            "range": "± 21907",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4349963,
            "range": "± 154564",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4372863,
            "range": "± 31127",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2976965,
            "range": "± 10505",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1779999275988,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46875,
            "range": "± 2733",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3784128,
            "range": "± 151096",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5939579,
            "range": "± 216175",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29278124,
            "range": "± 389951",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120700,
            "range": "± 6084",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2359,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185206,
            "range": "± 4910",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819139,
            "range": "± 9392",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1314757,
            "range": "± 20476",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 526898,
            "range": "± 34525",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3286941,
            "range": "± 27534",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3318889,
            "range": "± 56477",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2233450,
            "range": "± 47835",
            "unit": "ns/iter"
          }
        ]
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
          "id": "d789bba393152501e4083c326a73bb67786dde3c",
          "message": "fix(plugins): credit babel-plugin-react-compiler via reactCompilerPreset() (#764)\n\nThe #623 react-compiler detection only recognised the dependency when it\nwas wired through a Babel `plugins` array. The documented @vitejs/plugin-react\n6.x setup enables React Compiler through the `reactCompilerPreset()` preset\nhelper instead (`babel({ presets: [reactCompilerPreset()] })` via the\nstandalone @rolldown/plugin-babel), so the dependency kept surfacing as an\nunused dev-dependency and projects worked around it with ignoreDependencies.\n\nExtracts the react-compiler crediting logic out of vite.rs into a shared\ncrates/core/src/plugins/react_compiler.rs module used by both the Vite and\nElectron plugins. The Vite plugin scans the top-level `plugins` array; the\nElectron plugin scans each electron-vite section (main/preload/renderer)\n`<section>.plugins` array, since the Vite plugin never sees\nelectron.vite.config.*. Plugin-name strings/tuples are credited on `plugins`\npaths (the #623 shape); the provenance-checked `reactCompilerPreset()` helper\ncall is credited only inside `presets`/`babel.presets` arrays. A preset call\nin a `plugins` slot, the namespace-import form, and the variable-indirection\nform are deliberately not credited.\n\nFixes #751.",
          "timestamp": "2026-05-28T20:26:08Z",
          "tree_id": "06ad0cc1fc277de483a1f23e2fb90f26a663b523",
          "url": "https://github.com/fallow-rs/fallow/commit/d789bba393152501e4083c326a73bb67786dde3c"
        },
        "date": 1780000272967,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 45937,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3797248,
            "range": "± 137762",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5749049,
            "range": "± 154759",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29139859,
            "range": "± 378626",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116245,
            "range": "± 283",
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
            "value": 184306,
            "range": "± 2068",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819453,
            "range": "± 10672",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320742,
            "range": "± 17481",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 526254,
            "range": "± 18397",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3300191,
            "range": "± 68892",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3318868,
            "range": "± 40771",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2224388,
            "range": "± 18577",
            "unit": "ns/iter"
          }
        ]
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
        "date": 1780000567909,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 60737,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3945460,
            "range": "± 267533",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5812446,
            "range": "± 241648",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27680228,
            "range": "± 1000911",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115054,
            "range": "± 2289",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2236,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236496,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1074384,
            "range": "± 5423",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1531314,
            "range": "± 22653",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574349,
            "range": "± 29521",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4369176,
            "range": "± 36637",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4415004,
            "range": "± 32022",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3039600,
            "range": "± 10744",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}