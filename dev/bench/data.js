window.BENCHMARK_DATA = {
  "lastUpdate": 1781528734051,
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
          "id": "dd4285e9bdc35772909fdad8095a00e4378b9c6b",
          "message": "fix: align security help with supported globals\n\nHide inherited global flags from the `fallow security` help surface when that command still rejects them through its structured validation path. This keeps `security --help` and `help security` aligned with runtime behavior without changing how unsupported flags are parsed or reported.\n\nKeep `--explain` visible and supported for security after the metadata work, and add regression coverage for the filtered help forms plus the validator contract for hidden globals.\n\nFixes #1131.",
          "timestamp": "2026-06-10T01:23:05+02:00",
          "tree_id": "dfc667ef5bae0f34aeec0a32512fde35718e58a8",
          "url": "https://github.com/fallow-rs/fallow/commit/dd4285e9bdc35772909fdad8095a00e4378b9c6b"
        },
        "date": 1781047711311,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 105627,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4298233,
            "range": "± 153778",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6214911,
            "range": "± 208730",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 35504285,
            "range": "± 728656",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118874,
            "range": "± 1009",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2373,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236054,
            "range": "± 2401",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1071075,
            "range": "± 8249",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1519961,
            "range": "± 16991",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 585052,
            "range": "± 30850",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4328038,
            "range": "± 43377",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4336803,
            "range": "± 67179",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2985359,
            "range": "± 10282",
            "unit": "ns/iter"
          }
        ]
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
          "id": "2e00978bd13ace7f98ac1f9d0eb9782ad50c76aa",
          "message": "fix: emit compact security summary json\n\nTeach security summary JSON to serialize a compact aggregate envelope instead of reusing the full candidate payload. The summary keeps the security discriminator, schema version, and gate state while exposing stable counts by severity, category, unresolved analysis limits, and attack-surface entries.\n\nThe summary path bypasses per-run telemetry metadata so repeated summary JSON is deterministic, and the output schema now documents both security JSON variants.\n\nFixes #1132.",
          "timestamp": "2026-06-10T01:51:07+02:00",
          "tree_id": "120795c89c4ce376708d622c31db2f641dfa43e4",
          "url": "https://github.com/fallow-rs/fallow/commit/2e00978bd13ace7f98ac1f9d0eb9782ad50c76aa"
        },
        "date": 1781049443126,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 101862,
            "range": "± 5511",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3951324,
            "range": "± 177861",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6109431,
            "range": "± 181823",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32897032,
            "range": "± 420587",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114885,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2309,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235563,
            "range": "± 20926",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1065945,
            "range": "± 6563",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1513004,
            "range": "± 24136",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577444,
            "range": "± 10622",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4391971,
            "range": "± 26643",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4297880,
            "range": "± 257338",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2991823,
            "range": "± 5387",
            "unit": "ns/iter"
          }
        ]
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
          "id": "e2d2dae4bc670c88a458b836f6946f53cb888ff8",
          "message": "feat: add unresolved callee diagnostics\n\n* chore: open issue 1134 implementation branch\n\n* feat: add unresolved callee diagnostics",
          "timestamp": "2026-06-10T02:46:14+02:00",
          "tree_id": "b26f9db14bc676a1f784b36db80ea6e2a6ad81e8",
          "url": "https://github.com/fallow-rs/fallow/commit/e2d2dae4bc670c88a458b836f6946f53cb888ff8"
        },
        "date": 1781052688323,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 104325,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4147241,
            "range": "± 141819",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6236593,
            "range": "± 140807",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33386989,
            "range": "± 721659",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114945,
            "range": "± 2225",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2316,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235786,
            "range": "± 41455",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1067015,
            "range": "± 10845",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1511678,
            "range": "± 15773",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577294,
            "range": "± 10880",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4352705,
            "range": "± 25718",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4395211,
            "range": "± 32054",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2968268,
            "range": "± 20815",
            "unit": "ns/iter"
          }
        ]
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
          "id": "5fb5cdcab1b58cc8d356def78bdca245708e3082",
          "message": "feat(mcp): add inspect target evidence bundle\n\nAdd a read-only MCP inspect_target tool that accepts tagged file and symbol targets, then composes existing trace, dead-code, duplication, complexity, and security evidence into one typed bundle.\n\nWire the tool through MCP server metadata, schema tests, e2e coverage, telemetry tool attribution, and packaged agent guidance. Symbol targets expose precise trace_export identity while marking supporting evidence as file-scoped until enclosing-symbol mapping exists.\n\nFixes #1144.",
          "timestamp": "2026-06-10T07:46:22+02:00",
          "tree_id": "1c8222d487397668d54129337b79a637fe5ca865",
          "url": "https://github.com/fallow-rs/fallow/commit/5fb5cdcab1b58cc8d356def78bdca245708e3082"
        },
        "date": 1781070915783,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 81709,
            "range": "± 1172",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3841560,
            "range": "± 197028",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5972282,
            "range": "± 273556",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33582050,
            "range": "± 966121",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120625,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2417,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185720,
            "range": "± 6868",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822798,
            "range": "± 4276",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1323253,
            "range": "± 66643",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538166,
            "range": "± 19727",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3405916,
            "range": "± 58551",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3375725,
            "range": "± 38486",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2264802,
            "range": "± 26707",
            "unit": "ns/iter"
          }
        ]
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
          "id": "7be005b9b27684c19b06a22691716ee8e2b08005",
          "message": "fix(plugins): hard error invalid plugin regexes\n\nInvalid regexes extracted from plugin path-rule exclusions now aggregate into a config-load error instead of being stripped from the rule with a warning. The core analysis path and list plugins path both surface the error as exit code 2 with the existing JSON error envelope.\n\nThe unchanged plugin-system silent-fail diagnostics for config pattern collisions and external enabler typos remain warnings. Regression coverage now pins core aggregation, CLI JSON behavior, list plugins behavior, and the TanStack Router config path.\n\nFixes #513.",
          "timestamp": "2026-06-10T07:48:00+02:00",
          "tree_id": "42b08c7466afbf1cd810ce98d2437bb766f63f65",
          "url": "https://github.com/fallow-rs/fallow/commit/7be005b9b27684c19b06a22691716ee8e2b08005"
        },
        "date": 1781071364019,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 80313,
            "range": "± 861",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3683251,
            "range": "± 144247",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5941888,
            "range": "± 167415",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32475256,
            "range": "± 469121",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120488,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2402,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186638,
            "range": "± 26770",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818778,
            "range": "± 6125",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1315673,
            "range": "± 19704",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535501,
            "range": "± 11121",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3297195,
            "range": "± 27410",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3314863,
            "range": "± 36507",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2248079,
            "range": "± 10371",
            "unit": "ns/iter"
          }
        ]
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
          "id": "87e983e33813043ae1f0c3733d0ca86219daf399",
          "message": "fix(security): align summary JSON metadata\n\nAlign the security command contract so advertised flags are supported consistently, JSON summary mode emits compact aggregate data, and machine consumers receive stable run metadata for comparisons.\n\nThe change also exposes capped unresolved-callee diagnostics and updates the generated output schema plus bundled agent reference so downstream consumers can rely on the new summary shape.\n\nFixes #1139.",
          "timestamp": "2026-06-10T08:10:51+02:00",
          "tree_id": "c83b7f5543d69b6599decac5915c05f3cf38fb42",
          "url": "https://github.com/fallow-rs/fallow/commit/87e983e33813043ae1f0c3733d0ca86219daf399"
        },
        "date": 1781072166530,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 102073,
            "range": "± 932",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4072572,
            "range": "± 138001",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6061884,
            "range": "± 199413",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32615332,
            "range": "± 476459",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119479,
            "range": "± 1065",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2357,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236518,
            "range": "± 15313",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070530,
            "range": "± 11201",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1522870,
            "range": "± 14968",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572328,
            "range": "± 9717",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4374796,
            "range": "± 135563",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4285007,
            "range": "± 48763",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2988322,
            "range": "± 15492",
            "unit": "ns/iter"
          }
        ]
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
          "id": "bc9b5a364298fe016013efcfdcd997fbca4945d5",
          "message": "feat(health): add target relation evidence\n\nAdd relation evidence to health refactoring targets so JSON consumers can see direct importers and duplicate-code siblings without making separate trace calls.\n\nThe implementation reuses existing graph and duplication data, keeps the JSON fields additive, updates generated schema and TypeScript contracts, and only expands human target output when evidence is present.\n\nFixes #1145.",
          "timestamp": "2026-06-10T08:15:14+02:00",
          "tree_id": "d635777989c7a644bbecf20a05bc86eb8da910b2",
          "url": "https://github.com/fallow-rs/fallow/commit/bc9b5a364298fe016013efcfdcd997fbca4945d5"
        },
        "date": 1781072540098,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 102606,
            "range": "± 648",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4141933,
            "range": "± 217567",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6260239,
            "range": "± 167915",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32791325,
            "range": "± 625937",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118277,
            "range": "± 1218",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2384,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236064,
            "range": "± 1546",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1071765,
            "range": "± 38593",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1525653,
            "range": "± 14773",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 575488,
            "range": "± 32188",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4320548,
            "range": "± 67644",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4425814,
            "range": "± 25565",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2983716,
            "range": "± 16910",
            "unit": "ns/iter"
          }
        ]
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
          "id": "9ebddf7856116cc3239d6f79a5b192acc158d447",
          "message": "feat(ci): expose security delta gate\n\nExpose command: security in the GitHub Action and GitLab CI template, with dedicated security-gate and FALLOW_SECURITY_GATE inputs for the existing new and newly-reachable gate modes.\n\nCount security gate matches from the JSON gate block, preserve exit code 8 for gated security failures, and add a compact Action job summary for security runs while skipping unsupported typed PR comment renderers.\n\nFixes #886.",
          "timestamp": "2026-06-10T08:34:18+02:00",
          "tree_id": "ce2ebe39d459fb912452cde6daed7dde47129860",
          "url": "https://github.com/fallow-rs/fallow/commit/9ebddf7856116cc3239d6f79a5b192acc158d447"
        },
        "date": 1781073644553,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 105162,
            "range": "± 2200",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4265712,
            "range": "± 187703",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6385625,
            "range": "± 228292",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 35517043,
            "range": "± 671775",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118774,
            "range": "± 3887",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2339,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237903,
            "range": "± 4951",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1075128,
            "range": "± 10774",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1533361,
            "range": "± 12544",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 589071,
            "range": "± 17223",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4469018,
            "range": "± 57576",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4410655,
            "range": "± 55580",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3036604,
            "range": "± 12918",
            "unit": "ns/iter"
          }
        ]
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
          "id": "245bd6071b1a3d8ce2f13e93eda7c70cb28590f7",
          "message": "fix(security): propagate constant sink literals\n\nClassify simple module-scope constant expressions before security sink matching. The extractor now carries literal metadata through const identifiers, String coercion, unary numeric constants, and constant-only templates so non-literal catalogue rows do not fire on static values.\n\nTreat public CI metadata env names as non-secret sources unless the env name is secret-shaped. This keeps build refs and SHAs out of source-backed logging candidates while preserving tokens and keys.\n\nFixes #1138.",
          "timestamp": "2026-06-10T08:35:46+02:00",
          "tree_id": "ed884f2ecacec48508a8c397e781e3b646ea8cfb",
          "url": "https://github.com/fallow-rs/fallow/commit/245bd6071b1a3d8ce2f13e93eda7c70cb28590f7"
        },
        "date": 1781074007813,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 102555,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4214205,
            "range": "± 152826",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6260945,
            "range": "± 173961",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33218104,
            "range": "± 661402",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117215,
            "range": "± 1083",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2334,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236299,
            "range": "± 4899",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1075808,
            "range": "± 9056",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1531679,
            "range": "± 14714",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577452,
            "range": "± 18518",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4324764,
            "range": "± 48330",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4389618,
            "range": "± 44463",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3000918,
            "range": "± 19296",
            "unit": "ns/iter"
          }
        ]
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
          "id": "6a1dd0a772820b7ee1102384fb584a0b62d95ad5",
          "message": "fix: trust local sanitizer flows\n\n* chore: open issue-1136 implementation branch\n\n* fix(security): trust local sanitizer flows",
          "timestamp": "2026-06-10T09:01:53+02:00",
          "tree_id": "2a3d78f3509f7bc139560d8c8edeb95d63c302bc",
          "url": "https://github.com/fallow-rs/fallow/commit/6a1dd0a772820b7ee1102384fb584a0b62d95ad5"
        },
        "date": 1781075232566,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 107915,
            "range": "± 1242",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4205435,
            "range": "± 175867",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6258699,
            "range": "± 225904",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33657237,
            "range": "± 802243",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119902,
            "range": "± 2174",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2338,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233296,
            "range": "± 1634",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1056293,
            "range": "± 10484",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1514598,
            "range": "± 54993",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574980,
            "range": "± 6594",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4301629,
            "range": "± 31274",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4329100,
            "range": "± 177835",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2925088,
            "range": "± 12285",
            "unit": "ns/iter"
          }
        ]
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
          "id": "18c70b766e28138e5795dff81ad82c7432d980c9",
          "message": "fix(security): classify fixed-origin URL sinks\n\nClassifies URL-like security sink candidates as fixed-origin dynamic paths or dynamic origins, carries `candidate.sink.url_shape` through JSON/schema/generated contracts, and keeps literal fixed URL destinations omitted from nonliteral open-redirect candidates.\n\nFixes #1137.",
          "timestamp": "2026-06-10T09:11:16+02:00",
          "tree_id": "f391a29633aef93f018776728e3f6a36e5a2072f",
          "url": "https://github.com/fallow-rs/fallow/commit/18c70b766e28138e5795dff81ad82c7432d980c9"
        },
        "date": 1781075834595,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83396,
            "range": "± 2177",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3869730,
            "range": "± 155954",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6016871,
            "range": "± 166411",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33152396,
            "range": "± 823594",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109319,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2625,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 187080,
            "range": "± 3590",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822483,
            "range": "± 10087",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1315533,
            "range": "± 27265",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 529316,
            "range": "± 36883",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3300959,
            "range": "± 28836",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3346068,
            "range": "± 42903",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2227912,
            "range": "± 6801",
            "unit": "ns/iter"
          }
        ]
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
          "id": "30a3a0a10cfa8b252757bdd90ad230150b2ca825",
          "message": "feat(init): scaffold agent guidance\n\nAdd an opt-in init mode that writes a starter AGENTS.md for project-specific coding-agent context. The scaffold refuses to overwrite existing guidance and avoids project readiness scoring language.\n\nCloses #1124",
          "timestamp": "2026-06-10T09:46:55+02:00",
          "tree_id": "7cf1814ef39f69a274cd7e99054412a006f3389a",
          "url": "https://github.com/fallow-rs/fallow/commit/30a3a0a10cfa8b252757bdd90ad230150b2ca825"
        },
        "date": 1781077944147,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 85132,
            "range": "± 3332",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3943904,
            "range": "± 168591",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6085025,
            "range": "± 191153",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33552276,
            "range": "± 717036",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107026,
            "range": "± 5432",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2399,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185439,
            "range": "± 26751",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818725,
            "range": "± 4204",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1313072,
            "range": "± 16602",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534877,
            "range": "± 9376",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3301101,
            "range": "± 65405",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3338623,
            "range": "± 32537",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2228700,
            "range": "± 8369",
            "unit": "ns/iter"
          }
        ]
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
          "id": "f5f8944a679bab69f1ad4d9c0ee80beeeb1c9230",
          "message": "fix(schema): include security summary root contract\n\nFollow-up from final review across #1152, #1153, #1154, and #1155.",
          "timestamp": "2026-06-10T09:53:01+02:00",
          "tree_id": "e3b8636f465f9254c151d10e4cf2f73be8bd5f17",
          "url": "https://github.com/fallow-rs/fallow/commit/f5f8944a679bab69f1ad4d9c0ee80beeeb1c9230"
        },
        "date": 1781078296223,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 103778,
            "range": "± 2389",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3950510,
            "range": "± 158996",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6072075,
            "range": "± 191964",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32950381,
            "range": "± 684789",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118694,
            "range": "± 2123",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2347,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236776,
            "range": "± 17966",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1071569,
            "range": "± 11225",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1526369,
            "range": "± 38750",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 569512,
            "range": "± 28899",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4347892,
            "range": "± 21159",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4413971,
            "range": "± 31759",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3008675,
            "range": "± 16260",
            "unit": "ns/iter"
          }
        ]
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
          "id": "99dc0ce058d89ecd530b91d3040a82f281a86439",
          "message": "feat(boundaries): require zone coverage for files\n\nAdd `boundaries.coverage.requireAllFiles` and `boundaries.coverage.allowUnmatched` so teams can require analyzed source files to match a configured boundary zone.\n\nReport unmatched files as boundary coverage findings across CLI output, JSON/SARIF/CodeClimate, LSP diagnostics, baselines, regression counts, CI summaries, and generated schemas.\n\nRefs #1147.",
          "timestamp": "2026-06-10T10:17:17+02:00",
          "tree_id": "6daa8bc542250f84922aab1276c6870378ee6df9",
          "url": "https://github.com/fallow-rs/fallow/commit/99dc0ce058d89ecd530b91d3040a82f281a86439"
        },
        "date": 1781079848131,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 105823,
            "range": "± 1753",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4021710,
            "range": "± 371305",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5964016,
            "range": "± 175882",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32643740,
            "range": "± 411422",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119238,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2332,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235519,
            "range": "± 4186",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070164,
            "range": "± 11240",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1519649,
            "range": "± 14913",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 573034,
            "range": "± 10760",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4351186,
            "range": "± 31428",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4389350,
            "range": "± 31106",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2977388,
            "range": "± 8103",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "351085e83521d2a0fe7e4060920d6e2b4e48dbe7",
          "message": "chore(agents): add path-local AGENTS.md guides and pre-bash guard hook\n\nAdd per-area AGENTS.md guides (crates/cli, crates/core, crates/extract,\ncrates/graph, editors/vscode, tests, .github/workflows) so Codex and other\nagents pick up ownership maps and validation steps local to the files they\nedit, mirroring the colocated-guidance pattern.\n\nAdd a PreToolUse Bash guard (.claude/hooks/pre-bash-guard.py) that steers\nagents to the local fallow binary instead of an installed one, requires\nbounded output for workspace cargo runs, and blocks VS Code source commits\nthat omit the rebuilt dist bundle. Detection uses a quote-aware token walk\nover pipeline segments, so commands that only mention fallow or \"git commit\"\nas data (heredocs, fixtures, echoes) are not flagged, while chained or\nenv-prefixed real invocations are. Set SKIP_FALLOW_AGENT_GUARD=1 to bypass.\n\nThe guard activates on a committed sentinel (crates/cli/AGENTS.md) so it runs\non every clone, and track the new guides and hook despite the broad .claude/*\nand AGENTS.md ignore rules.",
          "timestamp": "2026-06-10T10:30:43+02:00",
          "tree_id": "1572c5577b5c874347272ce28f41c5598659e67f",
          "url": "https://github.com/fallow-rs/fallow/commit/351085e83521d2a0fe7e4060920d6e2b4e48dbe7"
        },
        "date": 1781080573749,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 104196,
            "range": "± 3093",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4156319,
            "range": "± 219010",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6205678,
            "range": "± 174851",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32573958,
            "range": "± 478873",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119073,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2333,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237467,
            "range": "± 3034",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1072459,
            "range": "± 15000",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1521177,
            "range": "± 21110",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 569116,
            "range": "± 18068",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4345087,
            "range": "± 24237",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4383352,
            "range": "± 23368",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2985716,
            "range": "± 7066",
            "unit": "ns/iter"
          }
        ]
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
          "id": "c22eb0680279b8c96a9f15189d46ca1929600c40",
          "message": "fix: apply boundary coverage rules consistently\n\nApply per-file `boundary-violation` overrides to both import boundary findings and boundary coverage findings.\n\nRender boundary coverage in human output when it is the only structure finding, and keep embedded config-action paths relative in JSON output.",
          "timestamp": "2026-06-10T11:13:32+02:00",
          "tree_id": "28565d35fb506035c8af006e678a2666d9b3af88",
          "url": "https://github.com/fallow-rs/fallow/commit/c22eb0680279b8c96a9f15189d46ca1929600c40"
        },
        "date": 1781083134585,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 105668,
            "range": "± 2564",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4156356,
            "range": "± 152865",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6114418,
            "range": "± 163012",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34847646,
            "range": "± 644205",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121870,
            "range": "± 1037",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2330,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236202,
            "range": "± 3250",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1073011,
            "range": "± 14667",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1530180,
            "range": "± 16013",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 573367,
            "range": "± 26659",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4416457,
            "range": "± 51495",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4420294,
            "range": "± 40652",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2995891,
            "range": "± 10767",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "73bac370d02877bb88c84bab906eeebd9ce3373b",
          "message": "docs: sync fallow skill metadata",
          "timestamp": "2026-06-10T12:18:42+02:00",
          "tree_id": "2d3487c781ab02f7752830f971d568f60eb1aacd",
          "url": "https://github.com/fallow-rs/fallow/commit/73bac370d02877bb88c84bab906eeebd9ce3373b"
        },
        "date": 1781087072645,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 104537,
            "range": "± 1426",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3897603,
            "range": "± 224385",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6030399,
            "range": "± 191792",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32481652,
            "range": "± 543831",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113638,
            "range": "± 827",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2383,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235052,
            "range": "± 16886",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1071114,
            "range": "± 9938",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1523803,
            "range": "± 24743",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 570647,
            "range": "± 10871",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4291061,
            "range": "± 88125",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4285052,
            "range": "± 39670",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2993444,
            "range": "± 20938",
            "unit": "ns/iter"
          }
        ]
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
          "id": "47a0e4cfd291e8203480fba8ae1dc6edda00f906",
          "message": "fix: credit napi-rs optional prebuild packages\n\nnapi-rs packages declare generated platform prebuilds as optionalDependencies, but their runtime loader selects them dynamically instead of through static imports. Fallow now reads package.json napi metadata and credits only exact generated package names listed in the same optionalDependencies map.\n\nThe plugin registry now has a package.json metadata hook that runs for both root and workspace packages. These credits are scoped to the declaring package.json, so unrelated sibling workspace dependencies remain reportable.\n\nFixes #1164.",
          "timestamp": "2026-06-10T12:24:02+02:00",
          "tree_id": "d376eb0b298dcf99c98bddc00292022ea7908391",
          "url": "https://github.com/fallow-rs/fallow/commit/47a0e4cfd291e8203480fba8ae1dc6edda00f906"
        },
        "date": 1781087495080,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83277,
            "range": "± 1791",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3849826,
            "range": "± 137760",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5915510,
            "range": "± 160709",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33426757,
            "range": "± 601997",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120290,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2508,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185867,
            "range": "± 29576",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821090,
            "range": "± 12084",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320686,
            "range": "± 16025",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534446,
            "range": "± 22875",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3315674,
            "range": "± 46581",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3342175,
            "range": "± 35666",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2251845,
            "range": "± 7505",
            "unit": "ns/iter"
          }
        ]
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
          "id": "1921037ffca9d142168919be36583403b3aad7e5",
          "message": "fix(audit): resolve base to merge-base, not stale local main (#1169)\n\nfallow audit with no --base auto-detected the comparison base by discovering the default branch via origin/HEAD but returning the bare name 'main', which git resolves to the stale local refs/heads/main. On worktree checkouts cut from origin/main whose local main is never updated, this diffed every branch against an ancient base and could fail the agent gate on a one-line change (the agent-gate twin of #242).\n\nauto_detect_base_ref now resolves to the git merge-base (fork point) against the branch's upstream or the remote default (origin/HEAD, origin/main, origin/master), falling back to the upstream/remote tip on merge-base failure and to local main/master when there is no origin. A new FALLOW_AUDIT_BASE env var pins the base; the audit scope line, an additive-optional base_description JSON field, and the VS Code extension surface the resolved base with provenance.\n\nCloses #1168.",
          "timestamp": "2026-06-10T13:55:18+02:00",
          "tree_id": "1b1a8df099c827f9402b264005569f356e78967c",
          "url": "https://github.com/fallow-rs/fallow/commit/1921037ffca9d142168919be36583403b3aad7e5"
        },
        "date": 1781092867719,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83382,
            "range": "± 1677",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3768362,
            "range": "± 195550",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6096823,
            "range": "± 189962",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33605423,
            "range": "± 405225",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108235,
            "range": "± 2036",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2460,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186038,
            "range": "± 5620",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823609,
            "range": "± 6202",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1322179,
            "range": "± 19310",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 528791,
            "range": "± 37492",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3312689,
            "range": "± 53606",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3343231,
            "range": "± 57838",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2251233,
            "range": "± 9846",
            "unit": "ns/iter"
          }
        ]
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
          "id": "adbd09776e877b539ff5777a44e131aea9d21e9e",
          "message": "test(audit): cover FALLOW_AUDIT_BASE precedence and validation (#1170)\n\nSubprocess integration tests for the audit base env override (#1169): env value honored with provenance when no flag, explicit --base wins, malformed value exits 2. Test-only. Refs #1168.",
          "timestamp": "2026-06-10T14:12:36+02:00",
          "tree_id": "cafa827006e3a9b898d2d2ef7f7eca81ac15e908",
          "url": "https://github.com/fallow-rs/fallow/commit/adbd09776e877b539ff5777a44e131aea9d21e9e"
        },
        "date": 1781093953400,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 105645,
            "range": "± 1925",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4080180,
            "range": "± 254148",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6110173,
            "range": "± 220891",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34237947,
            "range": "± 773799",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118068,
            "range": "± 1508",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2478,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232491,
            "range": "± 20706",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1049926,
            "range": "± 8613",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1500291,
            "range": "± 16647",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 566504,
            "range": "± 30356",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4272719,
            "range": "± 50941",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4290484,
            "range": "± 70814",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2921895,
            "range": "± 9255",
            "unit": "ns/iter"
          }
        ]
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
          "id": "61ec8e856ef43245aaf6a13f33e1c9778d87f49d",
          "message": "feat(security): chain tainted local bindings through up to three hops (#1171)\n\nfallow security now traces untrusted input through chained same-module local bindings, up to three hops. Injection shapes that route a request value through one or two intermediate variables (alias, template literal, string concat, or object-literal initializers) are upgraded to arg-level confidence with the trace anchored at the original untrusted read instead of staying module-level.\n\nChaining stays conservative: call, conditional, and property-read initializers do not chain, and a flow that exceeds the hop limit degrades to module-level rather than claiming arg-level confidence. RUST_LOG=debug logs when a chain is dropped for exceeding the limit. Integration fixtures cover two-hop, three-hop, and over-limit four-hop flows, and the detection docs describe the bounded chaining behavior.\n\nFixes #1146.",
          "timestamp": "2026-06-10T14:28:47+02:00",
          "tree_id": "b487b2283c2f3f8109eb541c1cf7932003c64d87",
          "url": "https://github.com/fallow-rs/fallow/commit/61ec8e856ef43245aaf6a13f33e1c9778d87f49d"
        },
        "date": 1781094914028,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 88504,
            "range": "± 3287",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3236180,
            "range": "± 114314",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5091477,
            "range": "± 174019",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26511510,
            "range": "± 629012",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109416,
            "range": "± 2974",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3146,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156989,
            "range": "± 13141",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 717040,
            "range": "± 7506",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1195306,
            "range": "± 18244",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 471591,
            "range": "± 9242",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2924433,
            "range": "± 77634",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2974897,
            "range": "± 48232",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1950498,
            "range": "± 4155",
            "unit": "ns/iter"
          }
        ]
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
          "id": "447094fdf27a3518060479d411c53dac6ce6982f",
          "message": "test(audit): characterize base-reuse predicate (#1172)\n\nPin the behavior of the audit base-reuse predicate (can_reuse_current_as_base and js_ts_tokens_equivalent) before any refactor of its internals. The predicate decides whether fallow audit can skip the base snapshot analysis when every changed file is non-behavioral, so a wrong answer silently produces a wrong CI verdict.\n\nUnit tests cover token equivalence across whitespace-only, comment-only, identifier-rename, string-literal, suppression-marker, and non-JS cases, plus the file classification helpers. Two tests pin a known soundness gap: TemplateLiteral and RegExpLiteral tokens carry no payload, so content changes inside template literals or regex literals are treated as equivalent today. Integration tests assert end-to-end audit attribution across the reuse decision.",
          "timestamp": "2026-06-10T15:39:59+02:00",
          "tree_id": "4bf97b4e8b9013a3843cfe2381b24b8cc0287ecb",
          "url": "https://github.com/fallow-rs/fallow/commit/447094fdf27a3518060479d411c53dac6ce6982f"
        },
        "date": 1781099155462,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 83693,
            "range": "± 1132",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3867566,
            "range": "± 143688",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5920884,
            "range": "± 140092",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32718947,
            "range": "± 402304",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119043,
            "range": "± 1957",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2406,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186754,
            "range": "± 2987",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 825399,
            "range": "± 4466",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321569,
            "range": "± 30670",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534356,
            "range": "± 39549",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3359424,
            "range": "± 80852",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3376709,
            "range": "± 41533",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2234481,
            "range": "± 5983",
            "unit": "ns/iter"
          }
        ]
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
          "id": "557d2dc0beee0b27665580c9d3bf9d8847de3adc",
          "message": "feat(boundaries): forbid specific callee patterns per zone (#1173)\n\nAdds the opt-in boundaries.calls.forbidden config section. Boundary zones can now ban specific callee patterns per zone, with callee accepting a string or an array. Presets and existing zone rules are unchanged.\n\nMatching is segment-aware and import-resolved, so one pattern covers child_process and node:child_process across named, namespace, and default imports, plus globals like console.*. Violations report as boundary_call_violations across human, JSON, SARIF, CodeClimate, compact, and markdown output, LSP diagnostics, baselines, audit attribution, and GitHub Action / GitLab CI summaries, sharing the boundary-violation severity and suppression token. Forbidden-call rules apply only to files classified into a zone; a rule pointing at a zone that matches no files warns at analysis time, and inert patterns such as a bare * are rejected at config load.\n\nThe boundaries.effects.allowed section from the same proposal stays gated on #1143.\n\nFixes #1147.",
          "timestamp": "2026-06-10T15:57:09+02:00",
          "tree_id": "ee498a13e4a3379ac2e7625ca80a1e3dae8d9468",
          "url": "https://github.com/fallow-rs/fallow/commit/557d2dc0beee0b27665580c9d3bf9d8847de3adc"
        },
        "date": 1781100172199,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 87011,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3900963,
            "range": "± 168549",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6073873,
            "range": "± 212975",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34589289,
            "range": "± 1637248",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119644,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2636,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186384,
            "range": "± 12589",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 827467,
            "range": "± 11958",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1335299,
            "range": "± 28679",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536752,
            "range": "± 21752",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3333804,
            "range": "± 98416",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3389458,
            "range": "± 116726",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2259539,
            "range": "± 23048",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "f9ab4d12427777e4f2e8ee9c4dd31b35b1660b2f",
          "message": "refactor: extract health telemetry recording",
          "timestamp": "2026-06-10T16:27:35+02:00",
          "tree_id": "74d4d575464c0fcddc30cc3fd77efed1ca2778a9",
          "url": "https://github.com/fallow-rs/fallow/commit/f9ab4d12427777e4f2e8ee9c4dd31b35b1660b2f"
        },
        "date": 1781102054322,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 92887,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3441706,
            "range": "± 168706",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4865531,
            "range": "± 94526",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 25037175,
            "range": "± 477646",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109595,
            "range": "± 3348",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3224,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156382,
            "range": "± 2144",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 709898,
            "range": "± 6094",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1188169,
            "range": "± 19974",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 466314,
            "range": "± 10000",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2883259,
            "range": "± 20008",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2924991,
            "range": "± 25051",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1932111,
            "range": "± 4931",
            "unit": "ns/iter"
          }
        ]
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
          "id": "56335efcfd5183d325c65fa396b38b2e98bb0cda",
          "message": "refactor(audit): make new-finding wiring exhaustive at filter and key sites (#1174)\n\nAdding a new finding collection to AnalysisResults previously required remembering to hand-wire it into the changed-files filter and the audit key and attribution sites; a miss silently dropped the new findings from --changed-since runs or audit verdicts. filter_results_by_changed_files, dead_code_keys, and retain_introduced_dead_code now destructure AnalysisResults exhaustively with no rest pattern, so a new field fails compilation exactly where a wiring decision is required.\n\nretain_introduced_dead_code now computes the introduced key set before the three fast-path retains instead of after (borrow-checker requirement); the set is provably identical, and behavior parity was verified against release binaries on real projects. The rebase folded in boundary_call_violations from #1173, which exercised the guard exactly as intended.",
          "timestamp": "2026-06-10T17:13:42+02:00",
          "tree_id": "23b4d148e2143c4388382817a675adc244a9257f",
          "url": "https://github.com/fallow-rs/fallow/commit/56335efcfd5183d325c65fa396b38b2e98bb0cda"
        },
        "date": 1781104796992,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 85357,
            "range": "± 1596",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3700149,
            "range": "± 125118",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5805149,
            "range": "± 122146",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32865027,
            "range": "± 648549",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109525,
            "range": "± 1340",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2407,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185290,
            "range": "± 5036",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819868,
            "range": "± 9868",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317686,
            "range": "± 21390",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534438,
            "range": "± 9264",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3297515,
            "range": "± 37860",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3353275,
            "range": "± 38747",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2231851,
            "range": "± 8163",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9bd0fd89336b54ff3f6a8188d029cb63e68ab166",
          "message": "test: cover runtime coverage helper tables",
          "timestamp": "2026-06-10T17:16:49+02:00",
          "tree_id": "2174964cbf6557dcd4d2a6fe50cbde2c406c483f",
          "url": "https://github.com/fallow-rs/fallow/commit/9bd0fd89336b54ff3f6a8188d029cb63e68ab166"
        },
        "date": 1781105122501,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 108953,
            "range": "± 874",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3831870,
            "range": "± 240846",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6032720,
            "range": "± 292037",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32514145,
            "range": "± 419978",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119665,
            "range": "± 2226",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2610,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236012,
            "range": "± 3109",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070213,
            "range": "± 8466",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1534570,
            "range": "± 17379",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 569925,
            "range": "± 11164",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4357551,
            "range": "± 27991",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4400514,
            "range": "± 174329",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2998508,
            "range": "± 153553",
            "unit": "ns/iter"
          }
        ]
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
          "id": "d109daca4c675ea30d262c0ed77c5d0326f21341",
          "message": "test(health): pin complexity metric baselines (#1175)\n\nComplexity metrics are scoring data that users gate CI on (--max-crap, health score thresholds). The existing health tests are snapshot-shaped, so a visitor or formula change that shifts scores gets re-blessed together with the change and can ship silent drift that flips downstream CI gates.\n\nThis adds a pinned-value regression suite: five fixture functions, each asserting exact cyclomatic and cognitive values with the hand-count arithmetic in comments, plus a file header making clear that a diff here is a user-facing scoring change needing deliberate changelog treatment.",
          "timestamp": "2026-06-10T17:21:06+02:00",
          "tree_id": "4eef8bb4dfed22ad974266653c54984c90aca10f",
          "url": "https://github.com/fallow-rs/fallow/commit/d109daca4c675ea30d262c0ed77c5d0326f21341"
        },
        "date": 1781105565833,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 88053,
            "range": "± 2801",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3918474,
            "range": "± 175115",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6171953,
            "range": "± 200601",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34253159,
            "range": "± 661288",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119719,
            "range": "± 881",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2428,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184676,
            "range": "± 1919",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821997,
            "range": "± 56115",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320763,
            "range": "± 24882",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 541978,
            "range": "± 14531",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3380465,
            "range": "± 58665",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3387030,
            "range": "± 96795",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2234330,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b6be7f1ea787634fab9f67b1fc222f1f707cda7e",
          "message": "refactor: satisfy helper clippy checks",
          "timestamp": "2026-06-10T17:25:30+02:00",
          "tree_id": "0f71711d30d87997c60d8adc5f9746969de61d92",
          "url": "https://github.com/fallow-rs/fallow/commit/b6be7f1ea787634fab9f67b1fc222f1f707cda7e"
        },
        "date": 1781105905429,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 86269,
            "range": "± 1107",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4026295,
            "range": "± 151297",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6358679,
            "range": "± 257665",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 35598906,
            "range": "± 738166",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120416,
            "range": "± 942",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2488,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186097,
            "range": "± 3237",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823623,
            "range": "± 12462",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317357,
            "range": "± 16572",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532056,
            "range": "± 7796",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3313086,
            "range": "± 27055",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3345989,
            "range": "± 28274",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2247765,
            "range": "± 9114",
            "unit": "ns/iter"
          }
        ]
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
          "id": "a9994097865b74302c423eabd590ef8e258541b4",
          "message": "feat(init): prefill AGENTS.md scaffold from detected project info (#1177)\n\nfallow init --agents previously wrote a static template with empty placeholders even though run_init already calls detect_project and uses the result to tailor the generated config. The agents guide now prefills the lines detection can answer reliably and leaves everything else blank.\n\nPrefill rules are deliberately conservative, since a confidently wrong line in an agent-consumed file is worse than a blank one: Primary app stays blank, Module boundaries fills for monorepos only, no UI-framework or Storybook lines, a provenance comment appears only when something was prefilled, Install derives from packageManager or pnpm-workspace.yaml and never from lockfile sniffing, Test only when exactly one framework is detected, Typecheck only for TypeScript. Empty-project output stays byte-identical to the previous template, pinned by a regression test.",
          "timestamp": "2026-06-10T17:45:16+02:00",
          "tree_id": "99272bd11bebd7d311f7b770268eb8934156cc10",
          "url": "https://github.com/fallow-rs/fallow/commit/a9994097865b74302c423eabd590ef8e258541b4"
        },
        "date": 1781106822459,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 86791,
            "range": "± 1961",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3924243,
            "range": "± 146000",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6265995,
            "range": "± 214200",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34901212,
            "range": "± 555981",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108485,
            "range": "± 3709",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2512,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185706,
            "range": "± 50292",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823214,
            "range": "± 4362",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1322783,
            "range": "± 18471",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 539383,
            "range": "± 28961",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3346802,
            "range": "± 39038",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3395779,
            "range": "± 41922",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2246385,
            "range": "± 9719",
            "unit": "ns/iter"
          }
        ]
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
          "id": "1f5b9e799c7e0cbee4556b6b5e33b6fab844212d",
          "message": "fix(boundaries): accept the boundary-call-violation suppression token (#1178)\n\nThe boundary-call-violation finding suppresses via the family token\nboundary-violation, but every other fallow finding has a token that\nmatches its rule id, so users derive boundary-call-violation by analogy\nand previously got a silent no-op. The rule-id-shaped token (and its\nplural) now parse as aliases of the boundary family kind, so either\ntoken suppresses import, coverage, and call findings alike, and the\nalias is consumed rather than surfaced as an unknown-kind stale\nsuppression.\n\nThe boundary-calls human section now ends with a suppress hint naming\nthe working token, and the explain guide for\nfallow/boundary-call-violation spells out the one-family-token model\nwith the alias noted. README and detection notes lead the forbidden-call\nrollout with a staged warn-then-error path, correct the optional-chaining\nclaim (cp?.exec() call sites are matched), and document that the check\ncovers direct callee paths only. Test pins cover optional-chaining\ncapture, re-bound callees staying quiet, and written-form dedupe.\n\nFixes #1147",
          "timestamp": "2026-06-10T17:57:55+02:00",
          "tree_id": "345d6768e4a88e15c696f9e1eb81d312fc4904cd",
          "url": "https://github.com/fallow-rs/fallow/commit/1f5b9e799c7e0cbee4556b6b5e33b6fab844212d"
        },
        "date": 1781107514185,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 108515,
            "range": "± 1021",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4264407,
            "range": "± 194049",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6293909,
            "range": "± 229621",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33986784,
            "range": "± 1567235",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116087,
            "range": "± 813",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2363,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237212,
            "range": "± 1979",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1068399,
            "range": "± 28649",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1522830,
            "range": "± 17576",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 587149,
            "range": "± 13022",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4242307,
            "range": "± 46053",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4304695,
            "range": "± 41249",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2984073,
            "range": "± 19675",
            "unit": "ns/iter"
          }
        ]
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
          "id": "d0ca8ab8e786cbfa01fbcc933194290a02fec503",
          "message": "feat(config): declarative rule packs with policy-violation findings\n\nAdds the rulePacks config key: standalone JSON/JSONC pack files of\nbanned-call and banned-import rules that encode project policy as pure\ndata. Loading a pack never executes project code, and matches report as\npolicy-violation findings identified by <pack>/<rule-id>.\n\nbanned-call matching is segment-aware and import-resolved over the\nexisting callee_uses capture (one child_process.* pattern covers bare\nand node:-prefixed named, namespace, and default imports, including\nliteral-only and zero-argument calls); banned-import matches raw\nspecifiers segment-aware over imports and re-exports with an\nignoreTypeOnly escape hatch. Rules scope via files/exclude globs and\ncarry an optional per-rule severity overriding the rules.\"policy-violation\"\nmaster (default warn); the exit-code gate reads the effective per-finding\nseverity. Findings flow through human, JSON, SARIF, CodeClimate, compact,\nand markdown output, LSP diagnostics, baselines, audit attribution,\nregression counts, workspace and issue filters, and the GitHub Action and\nGitLab CI summaries. The fallow rule-pack-schema command prints the pack\nJSON Schema, committed at the repo root so documented $schema URLs\nresolve, and invalid packs fail config load loudly with exit code 2.\n\nFixes #1148.",
          "timestamp": "2026-06-10T19:56:15+02:00",
          "tree_id": "525d1ac48caf22010af9d4660803fcee308bebc5",
          "url": "https://github.com/fallow-rs/fallow/commit/d0ca8ab8e786cbfa01fbcc933194290a02fec503"
        },
        "date": 1781114557393,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 110570,
            "range": "± 6391",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4288692,
            "range": "± 184178",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6383404,
            "range": "± 228044",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 36385784,
            "range": "± 595302",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119600,
            "range": "± 2812",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2339,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235220,
            "range": "± 11779",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1058907,
            "range": "± 19915",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1518203,
            "range": "± 19145",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 597728,
            "range": "± 43698",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4442432,
            "range": "± 75742",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4302276,
            "range": "± 44897",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2957222,
            "range": "± 7971",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "fd30d63408240c5dd6c02c435165262f0915012c",
          "message": "chore: release v2.92.0",
          "timestamp": "2026-06-10T21:10:32+02:00",
          "tree_id": "67581680361bd1e91ce348dd6df8ab8162e08170",
          "url": "https://github.com/fallow-rs/fallow/commit/fd30d63408240c5dd6c02c435165262f0915012c"
        },
        "date": 1781119041021,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 92223,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3268818,
            "range": "± 120083",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5092011,
            "range": "± 136334",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26801219,
            "range": "± 541408",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115597,
            "range": "± 3207",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3179,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157413,
            "range": "± 1602",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 711047,
            "range": "± 4565",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1193464,
            "range": "± 15836",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 461141,
            "range": "± 14276",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2890068,
            "range": "± 33123",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2950724,
            "range": "± 26893",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1934677,
            "range": "± 7547",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "1f9aaac198a279b340f688bd4ee56655e43551f4",
          "message": "chore: release v2.92.1",
          "timestamp": "2026-06-10T21:54:40+02:00",
          "tree_id": "9dc4f2ff03f6671976eaa53b0383036b88cd0904",
          "url": "https://github.com/fallow-rs/fallow/commit/1f9aaac198a279b340f688bd4ee56655e43551f4"
        },
        "date": 1781121701810,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 108915,
            "range": "± 4028",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3895953,
            "range": "± 242566",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6108593,
            "range": "± 218165",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33090243,
            "range": "± 623853",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118006,
            "range": "± 4791",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2343,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235316,
            "range": "± 2880",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1066986,
            "range": "± 20800",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1518313,
            "range": "± 16362",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 597280,
            "range": "± 10687",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4319552,
            "range": "± 120546",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4333840,
            "range": "± 45614",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2976586,
            "range": "± 12518",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e451a5be35445a18909739c4dcfd3aa9d8d5c2e1",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.92.1",
          "timestamp": "2026-06-10T22:33:55+02:00",
          "tree_id": "aea86598af7fd93199cbbeaee0328e92a58a02d7",
          "url": "https://github.com/fallow-rs/fallow/commit/e451a5be35445a18909739c4dcfd3aa9d8d5c2e1"
        },
        "date": 1781123971900,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 92689,
            "range": "± 1027",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3638419,
            "range": "± 248510",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5366053,
            "range": "± 251212",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27471342,
            "range": "± 697694",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108905,
            "range": "± 4377",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3177,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156588,
            "range": "± 4487",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 715528,
            "range": "± 4461",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1197403,
            "range": "± 27909",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 477498,
            "range": "± 14326",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3003972,
            "range": "± 46428",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3015013,
            "range": "± 37503",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1959872,
            "range": "± 7632",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b1db5200de6ee324da58be5be7a9b0b612e3aad3",
          "message": "test: improve coverage across cli workflows",
          "timestamp": "2026-06-11T07:14:57+02:00",
          "tree_id": "31b0001b1281d9963d5125c16c42e0ffdb92b920",
          "url": "https://github.com/fallow-rs/fallow/commit/b1db5200de6ee324da58be5be7a9b0b612e3aad3"
        },
        "date": 1781155352579,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 86639,
            "range": "± 2848",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3880005,
            "range": "± 164866",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6061720,
            "range": "± 254586",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34828564,
            "range": "± 834949",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109021,
            "range": "± 3450",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2427,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186885,
            "range": "± 2121",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 825677,
            "range": "± 4551",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1328681,
            "range": "± 55097",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 547635,
            "range": "± 10651",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3365354,
            "range": "± 35016",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3376814,
            "range": "± 30778",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2238079,
            "range": "± 64114",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3895e47fca699364537ff366377ffd078aedc44d",
          "message": "refactor: split security human rendering",
          "timestamp": "2026-06-11T07:51:26+02:00",
          "tree_id": "92ffd20fe48592915a030ca8b4d6f133ed22bf92",
          "url": "https://github.com/fallow-rs/fallow/commit/3895e47fca699364537ff366377ffd078aedc44d"
        },
        "date": 1781157573438,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 86812,
            "range": "± 1362",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3727830,
            "range": "± 168705",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6086691,
            "range": "± 184266",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34392839,
            "range": "± 538182",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 125630,
            "range": "± 1921",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2455,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185920,
            "range": "± 4093",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 824701,
            "range": "± 7392",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320716,
            "range": "± 16228",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531179,
            "range": "± 35412",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3335459,
            "range": "± 66204",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3358383,
            "range": "± 76289",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2251885,
            "range": "± 5815",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bartwaardenburg@gmail.com",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d0a3e7206b1e462bd3457ded727f34a9d1d72769",
          "message": "refactor(cli): split combined.rs into orchestrator, output, orientation, impact modules\n\ncombined.rs concentrated analysis orchestration, the output-format printers,\nthe orientation header, entry-point display, and impact recording in a single\nlarge file, making it the repo's merge-conflict magnet.\n\nSplit it into a combined/ module: mod.rs keeps the orchestrator\n(CombinedOptions, resolve_analyses, run_combined, run_combined_dupes,\nbuild_health_opts); output.rs holds the format printers; orientation.rs the\nheader and entry-point display; impact.rs the telemetry recording. Pure code\nmotion with zero behavior change (visibility and use-paths only); the\nrayon::join parallelism and shared-parse threading are untouched. Test and\nsnapshot suites pass with no modifications.",
          "timestamp": "2026-06-11T10:23:01+02:00",
          "tree_id": "b3a40c57e6b9a6cf8c55554884d39ddf0b39fd9e",
          "url": "https://github.com/fallow-rs/fallow/commit/d0a3e7206b1e462bd3457ded727f34a9d1d72769"
        },
        "date": 1781166512895,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 110069,
            "range": "± 3241",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4098694,
            "range": "± 177385",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6186159,
            "range": "± 196193",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33886838,
            "range": "± 806036",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 122192,
            "range": "± 1115",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2318,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235075,
            "range": "± 2843",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1065392,
            "range": "± 5319",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1510539,
            "range": "± 17821",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577097,
            "range": "± 6292",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4367334,
            "range": "± 37851",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4444148,
            "range": "± 62224",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2965444,
            "range": "± 18013",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bartwaardenburg@gmail.com",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ba3580ac64d4458843366acda80376fb395c2047",
          "message": "docs(combined): narrow the conflict-magnet rule to combined/mod.rs\n\ncombined.rs was split into a combined/ module, so the merge-conflict\nconcentration now lives in the orchestrator (combined/mod.rs); the output,\norientation, and impact submodules are independent files editable in\nparallel. Relax the CLAUDE.md serialization rule accordingly.",
          "timestamp": "2026-06-11T10:33:05+02:00",
          "tree_id": "4b8bc1e9dd931312c2ce9c51193904fac5da34cd",
          "url": "https://github.com/fallow-rs/fallow/commit/ba3580ac64d4458843366acda80376fb395c2047"
        },
        "date": 1781167167420,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 109826,
            "range": "± 3161",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4045230,
            "range": "± 159365",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6117585,
            "range": "± 164412",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33997577,
            "range": "± 693189",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116113,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2327,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235658,
            "range": "± 2745",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1065882,
            "range": "± 13733",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1514959,
            "range": "± 131255",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576106,
            "range": "± 10747",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4366619,
            "range": "± 33744",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4412858,
            "range": "± 67294",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2962158,
            "range": "± 5655",
            "unit": "ns/iter"
          }
        ]
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
          "id": "1b8fb06993052b21424379e98c13d0956ce93eda",
          "message": "feat(schema): complete capability manifest for agent introspection\n\nfallow schema previously documented 13 hand-maintained issue types and a fraction of the env vars, while the CLI exposed far more. The manifest is now derived from the code it describes: issue_types iterates the explain rule registry (one row per rule across dead-code, health, dupes, flags, and security) augmented with per-id metadata for filter flags, fixability, suppression comments, caveats, and free/freemium license markings. Every emitted suppress_comment is tested to round-trip through IssueKind::parse so agents cannot copy a no-op suppression.\n\nNew top-level blocks: manifest_version (\"1\"), mcp_tools (all 24 MCP server tools with kind grouping, key params, read-only and license markings, backed by a shared manifest in fallow-types that drift tests in crates/mcp keep in sync with the live tool router), plugins (count and names derived live from the builtin registry), and a completed user-facing environment_variables set with an exclusion guard for internal plumbing. The telemetry MCP tool allowlist now reads the shared manifest instead of its own hand-maintained copy, and the flags analysis gained its own explain rule so fallow explain feature-flag works.",
          "timestamp": "2026-06-11T10:56:40+02:00",
          "tree_id": "07db84fb901c060169dce698a642072938006254",
          "url": "https://github.com/fallow-rs/fallow/commit/1b8fb06993052b21424379e98c13d0956ce93eda"
        },
        "date": 1781168589793,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 87673,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4022990,
            "range": "± 164302",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6138764,
            "range": "± 177186",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34813502,
            "range": "± 788930",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120373,
            "range": "± 778",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2491,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186928,
            "range": "± 3848",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 824136,
            "range": "± 9583",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321883,
            "range": "± 18406",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538577,
            "range": "± 13839",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3344262,
            "range": "± 32618",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3389624,
            "range": "± 31447",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2252786,
            "range": "± 9593",
            "unit": "ns/iter"
          }
        ]
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
          "id": "be84f982ad20fbdf9c3b9b78c5bb4b09afff12a5",
          "message": "docs(mcp): align runtime_coverage license prose with single-capture-free nuance\n\nThe check_health and audit tool descriptions said the runtime_coverage param is a paid feature / license-gated without the carve-out the five dedicated runtime-coverage tools document: a single local capture is free, only continuous or multi-capture monitoring requires a license. Wording now matches across all seven runtime-coverage surfaces.",
          "timestamp": "2026-06-11T10:58:58+02:00",
          "tree_id": "9b56c7b831623b022f430f05e5f04f6dae1b9e8e",
          "url": "https://github.com/fallow-rs/fallow/commit/be84f982ad20fbdf9c3b9b78c5bb4b09afff12a5"
        },
        "date": 1781169023887,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 87116,
            "range": "± 944",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3799350,
            "range": "± 147870",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5936275,
            "range": "± 211628",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33607128,
            "range": "± 1418601",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120645,
            "range": "± 2790",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2409,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185536,
            "range": "± 2657",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821824,
            "range": "± 4078",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321671,
            "range": "± 17340",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537138,
            "range": "± 22068",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3322230,
            "range": "± 27717",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3341647,
            "range": "± 102218",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2256462,
            "range": "± 7142",
            "unit": "ns/iter"
          }
        ]
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
          "id": "1f2bf7070b2650dd2e613fe0b84df61f7363a741",
          "message": "fix(cli): clear test-only-dependency findings under single-type filters (#1194)\n\nIssueFilters::apply() clears every issue category not selected by a single-type filter flag, but the --unused-deps clear arm omitted test_only_dependencies, so a focused run like `fallow dead-code --unused-files` on a project with a production dependency imported only from test files leaked that test-only finding alongside the requested issue type.\n\nThis groups test-only-dependency with the other dependency kinds under --unused-deps (matching type-only and the --file scope, which already cleared all five categories), sets filter_flag to --unused-deps for the test-only-dependency row in the capability manifest, regenerates the SKILL.md issue-types table, and adds a neuter-verified filter-parity regression test.\n\nFixes #1192.",
          "timestamp": "2026-06-11T12:56:25+02:00",
          "tree_id": "6b7edb8f5c3a17bc453260d61349ba1c2e906f76",
          "url": "https://github.com/fallow-rs/fallow/commit/1f2bf7070b2650dd2e613fe0b84df61f7363a741"
        },
        "date": 1781175848021,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 93338,
            "range": "± 1151",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3252988,
            "range": "± 74575",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4902715,
            "range": "± 57107",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 25943193,
            "range": "± 606019",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109566,
            "range": "± 1706",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3246,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156990,
            "range": "± 1637",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 711897,
            "range": "± 11278",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1187355,
            "range": "± 12146",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 470141,
            "range": "± 12541",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2895002,
            "range": "± 13995",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2936217,
            "range": "± 15341",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1952651,
            "range": "± 55835",
            "unit": "ns/iter"
          }
        ]
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
          "id": "f1a5e17acccb3a01b2b7bc28e5775962f871ff54",
          "message": "fix(unused-class-members): credit imported Playwright fixtures\n\nPlaywright fixture definitions can route setup through an orchestrator class while declaring the fixture shape through an imported object type alias. The unused class member analyzer previously correlated callback-side fixture uses only with locally collected fixture map aliases, so nested methods on the target POM class could still report unused.\n\nThis teaches extraction to emit fixture-type sentinel accesses for imported alias bindings and expands those aliases in core before correlating Playwright fixture definitions with uses. The regression fixture keeps an actually unused decorated method to ensure the fix credits only the used chain.\n\nOut of scope: recursive imported alias expansion across multiple imported alias hops remains conservative.\n\nFixes #1190.",
          "timestamp": "2026-06-11T13:30:44+02:00",
          "tree_id": "980204cbafc6467feb3ee53a41857e6efc8cda2f",
          "url": "https://github.com/fallow-rs/fallow/commit/f1a5e17acccb3a01b2b7bc28e5775962f871ff54"
        },
        "date": 1781177792553,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 108978,
            "range": "± 3774",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4233869,
            "range": "± 148854",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6258952,
            "range": "± 219045",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 35768918,
            "range": "± 1111245",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118664,
            "range": "± 1184",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2399,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236418,
            "range": "± 1534",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1076048,
            "range": "± 46593",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1529746,
            "range": "± 17766",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574657,
            "range": "± 27387",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4316802,
            "range": "± 37413",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4354728,
            "range": "± 55792",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3001600,
            "range": "± 8058",
            "unit": "ns/iter"
          }
        ]
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
          "id": "f3f2e8b5f51fe84c98f3450a6ab957c1a680822b",
          "message": "feat(cli): add command-level next_steps[] to JSON envelopes\n\nAdds an optional top-level next_steps[] array to the dead-code, health, dupes, combined, audit, and grouped JSON envelopes, plus a TTY-only Next: hint on bare fallow's human output. Each entry is { id, command, reason }: a read-only, runnable follow-up command computed from the run's findings, pointing agents and humans at fallow's adjacent verification surface (trace, complexity breakdown, audit, workspace scoping) that telemetry shows agents rarely discover from the output alone.\n\nTwo contracts hold for every entry, enforced by a constructor debug-assert and unit tests: the command is never a fix or any other mutating command (fallow surfaces evidence; deciding and applying the change is the agent's job), and it is runnable as-is with no placeholders. The array is deduplicated, priority-ordered, capped at three, and omitted when empty; it never contributes to total_issues. FALLOW_SUGGESTIONS=off suppresses it.\n\nAdditive-optional field, no schema-version bump. Schema and both TS contracts regenerated; the field rides through the MCP tools unchanged.",
          "timestamp": "2026-06-11T14:45:50+02:00",
          "tree_id": "da335935bd9cda0b838465f75d830bab6bfd3c7e",
          "url": "https://github.com/fallow-rs/fallow/commit/f3f2e8b5f51fe84c98f3450a6ab957c1a680822b"
        },
        "date": 1781182465720,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 111599,
            "range": "± 2708",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4189239,
            "range": "± 198604",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6182992,
            "range": "± 181825",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33115587,
            "range": "± 456995",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117786,
            "range": "± 991",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2413,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236481,
            "range": "± 4596",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069372,
            "range": "± 26517",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1522183,
            "range": "± 23237",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572013,
            "range": "± 30712",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4360780,
            "range": "± 29722",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4396479,
            "range": "± 31983",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2980318,
            "range": "± 84467",
            "unit": "ns/iter"
          }
        ]
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
          "id": "4b63590037a81906054633c47cad1762809f8e42",
          "message": "fix(graph): keep tsconfig aliases out of dependency reports\n\nWhen a bare specifier matches compilerOptions.paths, a missing local alias target was falling through to NpmPackage and surfacing as an unlisted dependency. That made imports like @app/foo look like missing package.json entries even though they are project-local aliases.\n\nResolve local tsconfig path aliases before package fallback even outside the broken-tsconfig fallback path, and only mark an alias unresolved after package imports and workspace package fallbacks have had a chance to resolve it.\n\nThe regression covers the false positive, listed package credit, and a real unlisted scoped package in the same tsconfig-path project so the fix does not hide genuine dependency issues.",
          "timestamp": "2026-06-11T16:09:03+02:00",
          "tree_id": "ab41d7007fcc3318b88df34006f5c5a04f7ed43f",
          "url": "https://github.com/fallow-rs/fallow/commit/4b63590037a81906054633c47cad1762809f8e42"
        },
        "date": 1781187423797,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 107970,
            "range": "± 700",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4046675,
            "range": "± 162597",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6091029,
            "range": "± 185807",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34588141,
            "range": "± 669762",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118124,
            "range": "± 1437",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2340,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237410,
            "range": "± 3225",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1073813,
            "range": "± 8229",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1526320,
            "range": "± 13466",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 575185,
            "range": "± 9029",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4397419,
            "range": "± 142620",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4289637,
            "range": "± 42138",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2996296,
            "range": "± 62870",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "27545232325f3d0e15faeafe87769da6b41963f3",
          "message": "chore: release v2.93.0",
          "timestamp": "2026-06-11T16:56:14+02:00",
          "tree_id": "017d01940022a6810352a0fd0073ab4edb6a8672",
          "url": "https://github.com/fallow-rs/fallow/commit/27545232325f3d0e15faeafe87769da6b41963f3"
        },
        "date": 1781190179375,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 88183,
            "range": "± 1551",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3840774,
            "range": "± 282866",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6052341,
            "range": "± 207574",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33435332,
            "range": "± 370404",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 123266,
            "range": "± 4851",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2432,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185688,
            "range": "± 2475",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821561,
            "range": "± 53110",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321212,
            "range": "± 19147",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537103,
            "range": "± 11304",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3321451,
            "range": "± 78135",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3347301,
            "range": "± 28715",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2232524,
            "range": "± 13066",
            "unit": "ns/iter"
          }
        ]
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
          "id": "0fa99d2eaeb7eae5c440dcb374ab94bfc84bcd4c",
          "message": "feat(cli): agent task-to-command matrix and telemetry install id\n\nTelemetry shows AI agents cluster on dead-code, audit, dupes, and health and never discover the rest of the CLI surface. This lands the remaining discoverability work.\n\nA task-to-command matrix is defined once in crates/cli/src/task_matrix.rs and rendered into four surfaces: an additive task_matrix section in the fallow schema capability manifest, the init --agents AGENTS.md template, the managed AGENTS.md block that hooks install --target agent refreshes on upgrade, and a compact cheat sheet in the root --help. The agent-docs generator renders the same matrix into SKILL.md from the schema JSON, tolerating targets that have not adopted the markers. Drift tests parse every row through the live CLI, and a unit test pins the read-only contract (no mutating commands).\n\nOpt-in telemetry gains a stable anonymous install grouping token so adoption breadth (distinct workflows per install per week) becomes measurable. The token is freshly random, minted on explicit enable (or lazily under env-only FALLOW_TELEMETRY=on without persisting a config-level enable), deleted on disable, and sent only as the X-Fallow-Install transport header, never as an event property, keeping serialized events identifier-free.",
          "timestamp": "2026-06-11T17:01:07+02:00",
          "tree_id": "6c8b22263a3ce5c1897fff1f15b07210a30c25f8",
          "url": "https://github.com/fallow-rs/fallow/commit/0fa99d2eaeb7eae5c440dcb374ab94bfc84bcd4c"
        },
        "date": 1781190655200,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 92047,
            "range": "± 2210",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3941266,
            "range": "± 197246",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5622689,
            "range": "± 254163",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28738730,
            "range": "± 1606539",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 111933,
            "range": "± 2959",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3168,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 158828,
            "range": "± 1576",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 721209,
            "range": "± 13912",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1214706,
            "range": "± 27661",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 481114,
            "range": "± 30861",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3036131,
            "range": "± 32673",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3086359,
            "range": "± 31084",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1998384,
            "range": "± 57268",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "af46158ac03683c59215ccdf0b697a6e31296865",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.93.0",
          "timestamp": "2026-06-11T17:36:58+02:00",
          "tree_id": "a416807dc2edb6726faa6522d8128e33d5af394d",
          "url": "https://github.com/fallow-rs/fallow/commit/af46158ac03683c59215ccdf0b697a6e31296865"
        },
        "date": 1781192624107,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 107138,
            "range": "± 957",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3591724,
            "range": "± 100283",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5965538,
            "range": "± 206675",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33045144,
            "range": "± 605391",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112008,
            "range": "± 1160",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2315,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235183,
            "range": "± 22094",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1066640,
            "range": "± 13244",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1514565,
            "range": "± 11403",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 578815,
            "range": "± 10503",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4348493,
            "range": "± 50991",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4391571,
            "range": "± 102611",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2977224,
            "range": "± 5360",
            "unit": "ns/iter"
          }
        ]
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
          "id": "b49fc78ccf5554ebb543948bc196527253f177bf",
          "message": "refactor(telemetry): thread the install id into the spool drain as a parameter\n\ndrain_spool_file resolved the install grouping token internally, reading the real env and config dir; on a developer machine with telemetry enabled, cargo test could mint a token into the developer's real telemetry.json. The live resolution moves to the flush_spool_in_background spawn site (same background thread, same On-gating) and the drain takes the resolved token as a parameter, so unit tests never touch the real environment.",
          "timestamp": "2026-06-11T18:27:56+02:00",
          "tree_id": "ff29ba110e98165102a0ed390b52398e9c605722",
          "url": "https://github.com/fallow-rs/fallow/commit/b49fc78ccf5554ebb543948bc196527253f177bf"
        },
        "date": 1781195755784,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 86702,
            "range": "± 3475",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3722907,
            "range": "± 126635",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5936123,
            "range": "± 169558",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33748168,
            "range": "± 723990",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121185,
            "range": "± 1483",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2430,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185172,
            "range": "± 8170",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822993,
            "range": "± 7869",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321683,
            "range": "± 21796",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 528139,
            "range": "± 17372",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3409431,
            "range": "± 84145",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3509200,
            "range": "± 64692",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2259920,
            "range": "± 10266",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2feb62016515316b235bce1133be0a6ebe8bd731",
          "message": "refactor: reduce oversized analysis helpers",
          "timestamp": "2026-06-11T18:48:08+02:00",
          "tree_id": "1c594f6f51249415fe15ff67dd041122ecd25837",
          "url": "https://github.com/fallow-rs/fallow/commit/2feb62016515316b235bce1133be0a6ebe8bd731"
        },
        "date": 1781196993355,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 106791,
            "range": "± 1068",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3957787,
            "range": "± 173021",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6001112,
            "range": "± 171356",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33764928,
            "range": "± 594731",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114737,
            "range": "± 823",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2337,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235818,
            "range": "± 20919",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069876,
            "range": "± 72994",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1521174,
            "range": "± 19191",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 573512,
            "range": "± 16769",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4386683,
            "range": "± 32640",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4302912,
            "range": "± 60742",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2988756,
            "range": "± 8716",
            "unit": "ns/iter"
          }
        ]
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
          "id": "6afcaa987555292f319e8a7d70856afeaea7a82c",
          "message": "feat(agent): add onboarding flow primitives\n\nAdd read-only hook status JSON for Git, Claude, and Codex surfaces so agents can inspect managed setup before mutating files. Mark agent gate audit runs with the existing hidden gate marker so Impact can record blocked-then-cleared containment events.\n\nPersist project-level onboarding declines in the existing Impact store and expose telemetry explicit-decision state so the skill can avoid repeat prompts and avoid asking users who already chose telemetry on or off.",
          "timestamp": "2026-06-11T21:06:34+02:00",
          "tree_id": "cb2fba2ffa59622ff0bcb8f0f5af09c89f9d8007",
          "url": "https://github.com/fallow-rs/fallow/commit/6afcaa987555292f319e8a7d70856afeaea7a82c"
        },
        "date": 1781205119136,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 107908,
            "range": "± 7798",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3920242,
            "range": "± 238648",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6248676,
            "range": "± 225932",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33564429,
            "range": "± 733223",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118664,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2313,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235870,
            "range": "± 5942",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1068740,
            "range": "± 128038",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1523543,
            "range": "± 14513",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 568870,
            "range": "± 28436",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4359469,
            "range": "± 26293",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4371821,
            "range": "± 31341",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2977589,
            "range": "± 9216",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "291c4b22f6121b8ac7e442dac0dd2c50d3392a13",
          "message": "fix(hooks): raise agent gate version floor to 2.85.0\n\nThe gate script now passes --gate-marker agent, a flag introduced in\nv2.85.0. A PATH binary between 2.46.0 and 2.84.x passed the old floor\ncheck but rejects the flag with a usage error, so every audit took the\nfail-open skip path and the gate silently stopped gating. Raising the\nfloor turns that combination into the designed hard block with an\nupgrade hint.",
          "timestamp": "2026-06-11T21:39:13+02:00",
          "tree_id": "cae9ecd0176487471c7e152a83a645db117742d7",
          "url": "https://github.com/fallow-rs/fallow/commit/291c4b22f6121b8ac7e442dac0dd2c50d3392a13"
        },
        "date": 1781207085559,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 108708,
            "range": "± 1756",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4040690,
            "range": "± 257724",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5973378,
            "range": "± 227291",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34330413,
            "range": "± 577862",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117742,
            "range": "± 1217",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2336,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236176,
            "range": "± 23347",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1071630,
            "range": "± 13331",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1520373,
            "range": "± 13480",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576125,
            "range": "± 4042",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4356861,
            "range": "± 29569",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4383083,
            "range": "± 26926",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2989375,
            "range": "± 4919",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "f1b91c2c75aa0afbc2c4afa5ce47e1e2868e0a2f",
          "message": "refactor: continue sig unit-size reductions",
          "timestamp": "2026-06-11T21:55:07+02:00",
          "tree_id": "18cd4616b415d735c5d867027c51305ec036334b",
          "url": "https://github.com/fallow-rs/fallow/commit/f1b91c2c75aa0afbc2c4afa5ce47e1e2868e0a2f"
        },
        "date": 1781208139870,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 86135,
            "range": "± 2433",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3738061,
            "range": "± 119027",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5999342,
            "range": "± 154144",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34638072,
            "range": "± 579876",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115489,
            "range": "± 2619",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2398,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185745,
            "range": "± 3808",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819229,
            "range": "± 9094",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1379911,
            "range": "± 24646",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534233,
            "range": "± 19087",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3386479,
            "range": "± 36019",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3426935,
            "range": "± 50876",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2245524,
            "range": "± 12485",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ccd01ff82498bc7f2924faae33b3123a9e68ec76",
          "message": "feat(suggestions): first-contact setup pointer for unconfigured projects\n\nBare fallow and the standalone analyses now point first-time users at the\nguided-setup surface, on the channel each audience actually reads:\n\n- JSON envelopes (dead-code, health, dupes, combined) lead next_steps[]\n  with a read-only 'setup' step (command: fallow schema) whose manifest\n  lists the agent-guide and commit-gate commands to offer the user. The\n  read-only contract holds: the mutating commands are named in the\n  manifest and skill layer, never embedded in a next-step.\n- Bare fallow human output prints a one-line setup hint, deliberately\n  not TTY-gated so agents reading piped output see it too.\n\nBoth surfaces share one gate: no config file (searched to the repo\nroot), not CI, suggestions enabled, findings present, and no recorded\nfallow impact decline-onboarding. The human Next: line keeps showing an\nanalysis follow-up; the prose hint is the human setup channel.",
          "timestamp": "2026-06-11T21:59:09+02:00",
          "tree_id": "1584b4bc82f8d9508b0409b3cb767d6f3271975f",
          "url": "https://github.com/fallow-rs/fallow/commit/ccd01ff82498bc7f2924faae33b3123a9e68ec76"
        },
        "date": 1781208466270,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 108073,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4191660,
            "range": "± 146262",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6122928,
            "range": "± 157089",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34662940,
            "range": "± 533696",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117163,
            "range": "± 895",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2379,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236550,
            "range": "± 1353",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1073626,
            "range": "± 21889",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1529529,
            "range": "± 19276",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 583044,
            "range": "± 8203",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4329290,
            "range": "± 45757",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4326507,
            "range": "± 67993",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2980868,
            "range": "± 7839",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6ba7c22124b08d103612444f9a65e3b76d263d02",
          "message": "refactor(init): move the onboarding decline to fallow init --decline\n\nThe decline surfaced as a hidden impact subcommand because its storage\nlives in the Impact store, but storage is an implementation detail and\nthe command namespace is UX: declining setup has nothing to do with the\nImpact value report, and the setup hint now names the command in\nuser-facing output. init is the setup namespace, so the decline lives\nthere: fallow init --decline persists the decision (no config written,\nImpact stays untouched) and conflicts with the scaffolding flags. The\nimpact decline-onboarding subcommand is removed without an alias; it\nwas never released.",
          "timestamp": "2026-06-11T22:58:40+02:00",
          "tree_id": "32a26fb7a8dc66725564408a22a0eb780fa3857b",
          "url": "https://github.com/fallow-rs/fallow/commit/6ba7c22124b08d103612444f9a65e3b76d263d02"
        },
        "date": 1781211845674,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 87287,
            "range": "± 1000",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3876817,
            "range": "± 172797",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6002584,
            "range": "± 174480",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34020967,
            "range": "± 381325",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114368,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2427,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186283,
            "range": "± 10537",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 825588,
            "range": "± 7618",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1313802,
            "range": "± 21536",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 529604,
            "range": "± 16911",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3307157,
            "range": "± 36225",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3337659,
            "range": "± 29758",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2237714,
            "range": "± 14044",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c8e0ccc48e0b36c71088af5dd528384702bb3cd6",
          "message": "fix(suggestions): print the setup hint after the failure summary\n\nIn the header position the hint scrolled away on any sizable first run;\nthe failure summary tail is what a human actually reads. The hint now\nfollows the Failed: line on stderr, sharing its quiet gate, so it is\nthe last line of a failing first-contact run.",
          "timestamp": "2026-06-11T23:09:03+02:00",
          "tree_id": "2ed0a91b24eb73cf5108268ad29ccb2a4bafe1ad",
          "url": "https://github.com/fallow-rs/fallow/commit/c8e0ccc48e0b36c71088af5dd528384702bb3cd6"
        },
        "date": 1781212436139,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 66248,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3158158,
            "range": "± 119879",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4752510,
            "range": "± 110215",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26167693,
            "range": "± 350999",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 82744,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1931,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143646,
            "range": "± 20172",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 635425,
            "range": "± 13141",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1022932,
            "range": "± 23693",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 410046,
            "range": "± 9633",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2560196,
            "range": "± 41322",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2589426,
            "range": "± 33403",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1740775,
            "range": "± 19333",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "290d639d13fd0cc357b4c155f3ed2d8781045dc2",
          "message": "refactor: continue sig unit-size cleanup",
          "timestamp": "2026-06-11T23:31:42+02:00",
          "tree_id": "9ea5193723fd3f1e0c0e24202a955d1c2cdc48a6",
          "url": "https://github.com/fallow-rs/fallow/commit/290d639d13fd0cc357b4c155f3ed2d8781045dc2"
        },
        "date": 1781213877550,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 110835,
            "range": "± 4069",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4014845,
            "range": "± 200339",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5936624,
            "range": "± 188987",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34965775,
            "range": "± 728883",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116773,
            "range": "± 1138",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2337,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235560,
            "range": "± 31372",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1071364,
            "range": "± 14032",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1523695,
            "range": "± 16393",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576480,
            "range": "± 11446",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4380731,
            "range": "± 28263",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4280775,
            "range": "± 34013",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2992293,
            "range": "± 11098",
            "unit": "ns/iter"
          }
        ]
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
          "id": "781b3adf69cd2e1030506cbe00bb8d251e721a49",
          "message": "feat(cli): support coverage inputs in combined mode\n\nBare combined analysis now accepts the same Istanbul coverage inputs as standalone health, so default fallow runs can use exact CRAP scoring instead of silently falling back to the static estimate.\n\nThe CLI resolves coverage inputs for standalone health and bare combined mode with CLI, env, config, then auto-detection precedence. The coverage data is forwarded through CombinedOptions into the embedded health pass, while pre-subcommand bare coverage flags are rejected with a structured error so fallow --coverage file dead-code cannot be ignored.\n\nThe GitHub Action and GitLab template now forward coverage inputs for their default combined runs, and the config schema, docs, companion references, and regression tests cover CLI, env, config, mixed precedence, and wrapper paths.\n\nThe merge also keeps setup guidance from appearing for nonexistent analysis roots, which removes a local versus CI split in JSON snapshot tests after the latest mainline setup hint change.\n\nFixes #300.",
          "timestamp": "2026-06-11T23:40:28+02:00",
          "tree_id": "8cfa1e09ad3c9f98b4f629e59ab8dead96022157",
          "url": "https://github.com/fallow-rs/fallow/commit/781b3adf69cd2e1030506cbe00bb8d251e721a49"
        },
        "date": 1781214365396,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 85826,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3790577,
            "range": "± 162477",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5921783,
            "range": "± 208214",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34208269,
            "range": "± 659004",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118559,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2473,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186547,
            "range": "± 3113",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 826854,
            "range": "± 15092",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1342425,
            "range": "± 20193",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 538763,
            "range": "± 14889",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3367317,
            "range": "± 63463",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3404046,
            "range": "± 32743",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2274070,
            "range": "± 75447",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "28e59c02f873b5036fa430a4859fcde3fabfaa08",
          "message": "feat(impact): periodic value digest and explicit opt-in decision state\n\nTwo agent-loop additions so the user hears what fallow does for them\nand is asked for the impact/telemetry opt-ins exactly once:\n\n- impact-report next_step: an at-most-weekly local value digest (real\n  counters: commits contained at the gate, findings resolved) on the\n  dead-code/health/dupes/combined envelopes, plus a one-line human\n  Impact: counterpart with the run summary. The cadence stamp lives in\n  the impact store so it is consistent across agents and sessions; CI,\n  disabled suggestions, and zero counters suppress it. Unlike every\n  other trigger it may ride a clean run: a clean project after a period\n  of containment is exactly when the value report is informative.\n- explicit_decision on the impact store and report: impact enable and\n  disable both record that the user decided, so a skill can distinguish\n  asked-and-declined from never-asked (mirrors telemetry's field) and\n  offer the opt-in once, also on already-configured projects.\n\nContracts regenerated (output-schema.json + both output-contract.d.ts).",
          "timestamp": "2026-06-11T23:54:12+02:00",
          "tree_id": "3b92376de1b404ddf9c4840e7a4ace657d242887",
          "url": "https://github.com/fallow-rs/fallow/commit/28e59c02f873b5036fa430a4859fcde3fabfaa08"
        },
        "date": 1781215181709,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 108560,
            "range": "± 2859",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3958400,
            "range": "± 249692",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6131220,
            "range": "± 217857",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32932196,
            "range": "± 546959",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119489,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2386,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235048,
            "range": "± 1416",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1062438,
            "range": "± 75988",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1511232,
            "range": "± 15415",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 573691,
            "range": "± 10357",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4344020,
            "range": "± 24317",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4390223,
            "range": "± 28017",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2979420,
            "range": "± 19604",
            "unit": "ns/iter"
          }
        ]
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
          "id": "d04815b71bc795ed1c59fb45c031962600030934",
          "message": "fix(docs): avoid private rustdoc links in impact digest\n\nThe periodic impact digest docs linked to a private interval constant from public items, which fails rustdoc with private intra-doc links denied.\n\nKeep the constant name visible as code text without making it an intra-doc link, so the documentation build passes under the workspace rustdoc gate.",
          "timestamp": "2026-06-12T01:16:07+02:00",
          "tree_id": "bd535c155d71504060aaf508a4edf041e5b9ebd1",
          "url": "https://github.com/fallow-rs/fallow/commit/d04815b71bc795ed1c59fb45c031962600030934"
        },
        "date": 1781220140490,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 109033,
            "range": "± 8561",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4078317,
            "range": "± 176203",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6133516,
            "range": "± 168783",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33402767,
            "range": "± 535264",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119327,
            "range": "± 2647",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2326,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237144,
            "range": "± 18566",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1065468,
            "range": "± 11907",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1512007,
            "range": "± 14342",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 575025,
            "range": "± 26151",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4364300,
            "range": "± 28068",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4406877,
            "range": "± 28884",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2956772,
            "range": "± 10371",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rice@shawnrice.org",
            "name": "Shawn Patrick Rice",
            "username": "shawnrice"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e35d2b50c84318d3bda4b1f634fc61695fe6beb",
          "message": "fix(extract): skip multi-byte escapee in quoted attribute scanner\n\nThe quoted attribute scanner advanced a fixed byte count after a backslash, which could leave the cursor inside a multi-byte escaped character.\n\nAdvance past the backslash and then over one full UTF-8 character, matching the rest of the scanner and preventing char-boundary panics on Angular templates.",
          "timestamp": "2026-06-12T01:20:20+02:00",
          "tree_id": "6b3e5c5093658d4125e1c4735f7197328893cb87",
          "url": "https://github.com/fallow-rs/fallow/commit/4e35d2b50c84318d3bda4b1f634fc61695fe6beb"
        },
        "date": 1781220470697,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 92008,
            "range": "± 773",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3371318,
            "range": "± 167676",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5107857,
            "range": "± 135284",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27541462,
            "range": "± 614371",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110390,
            "range": "± 3542",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3192,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156715,
            "range": "± 1814",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 716445,
            "range": "± 6967",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1201697,
            "range": "± 40387",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 469322,
            "range": "± 11714",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2924220,
            "range": "± 27211",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2980039,
            "range": "± 32943",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1949490,
            "range": "± 8062",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "1a5676dbb1146d079ee2ef977f152087d96d38e5",
          "message": "chore: release v2.94.0",
          "timestamp": "2026-06-12T02:10:23+02:00",
          "tree_id": "0778f413eb6272cc3a9f65a5a5be1d476e400367",
          "url": "https://github.com/fallow-rs/fallow/commit/1a5676dbb1146d079ee2ef977f152087d96d38e5"
        },
        "date": 1781223380514,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 107067,
            "range": "± 3331",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3948440,
            "range": "± 219290",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5977588,
            "range": "± 204996",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32844348,
            "range": "± 504836",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120235,
            "range": "± 1209",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2320,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232148,
            "range": "± 20170",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1045905,
            "range": "± 19034",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1498222,
            "range": "± 14274",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 568774,
            "range": "± 8975",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4232897,
            "range": "± 56582",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4267470,
            "range": "± 35893",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2950961,
            "range": "± 7838",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "8d811649ba1750b819d43474a374fe81cb8a447e",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.94.0",
          "timestamp": "2026-06-12T02:48:45+02:00",
          "tree_id": "e88d0481fa0852ccb409725a1a66af33fec62691",
          "url": "https://github.com/fallow-rs/fallow/commit/8d811649ba1750b819d43474a374fe81cb8a447e"
        },
        "date": 1781225652478,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 110662,
            "range": "± 4357",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4391226,
            "range": "± 323403",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6230389,
            "range": "± 188766",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34693912,
            "range": "± 703731",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121850,
            "range": "± 5588",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2341,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 233135,
            "range": "± 1433",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1055390,
            "range": "± 13640",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1504438,
            "range": "± 20787",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574416,
            "range": "± 27951",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4387697,
            "range": "± 37031",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4287852,
            "range": "± 35219",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2980668,
            "range": "± 13076",
            "unit": "ns/iter"
          }
        ]
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
          "id": "969307e5d38b97cb7ef543d798f9a8098d916f78",
          "message": "refactor(unit-size): split oversized Rust functions\n\nContinue the SIG unit-size cleanup by extracting focused helpers from large CLI, config, core, extract, graph, LSP, and MCP functions.\n\nThe refactors keep behavior intact while reducing the share of function LOC in the high-risk unit-size buckets. Validation covered conflict-marker checks, em-dash checks, cargo build, and the workspace test suite before commit.",
          "timestamp": "2026-06-12T14:57:29+02:00",
          "tree_id": "ca9ebaaa7ee48b6c010664de4d4ff490543d8eaf",
          "url": "https://github.com/fallow-rs/fallow/commit/969307e5d38b97cb7ef543d798f9a8098d916f78"
        },
        "date": 1781269410502,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 86519,
            "range": "± 3864",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3798663,
            "range": "± 136027",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6086457,
            "range": "± 166119",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33642788,
            "range": "± 469613",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 122839,
            "range": "± 4695",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2421,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184240,
            "range": "± 1158",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 817874,
            "range": "± 15439",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321622,
            "range": "± 23782",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534414,
            "range": "± 13849",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3320269,
            "range": "± 64557",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3345715,
            "range": "± 34255",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2243395,
            "range": "± 52245",
            "unit": "ns/iter"
          }
        ]
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
          "id": "9618e15c326f4202aa00b43e78a8c418c43edf84",
          "message": "feat: scope policy rule suppressions\n\nRule-pack policy suppressions can now target a single policy identity with `policy-violation:<pack>/<rule-id>`, while the bare `policy-violation` token remains the broad family suppression.\n\nThe implementation preserves scoped targets through extraction and duplicate caches, stale suppression reporting, active suppression attribution, generated actions, human guidance, and generated output contracts. Rule-pack names and rule ids now reject ambiguous characters so scoped tokens do not need escaping.\n\nFixes #1180.",
          "timestamp": "2026-06-12T15:36:32+02:00",
          "tree_id": "d87f6771b0525c4658c236c6de644a6f466e2877",
          "url": "https://github.com/fallow-rs/fallow/commit/9618e15c326f4202aa00b43e78a8c418c43edf84"
        },
        "date": 1781271742533,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 86790,
            "range": "± 2290",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3838897,
            "range": "± 152408",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6042488,
            "range": "± 235672",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34601622,
            "range": "± 689089",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116182,
            "range": "± 609",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2461,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184846,
            "range": "± 8068",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820812,
            "range": "± 72960",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320660,
            "range": "± 28148",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531894,
            "range": "± 28657",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3314124,
            "range": "± 29179",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3327178,
            "range": "± 31423",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2242719,
            "range": "± 39455",
            "unit": "ns/iter"
          }
        ]
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
          "id": "c187b94f0cddf9ea2e0f77e6a21707001764c434",
          "message": "feat: add health threshold overrides\n\nAdd health.thresholdOverrides for local cyclomatic, cognitive, and CRAP ceilings matched by file glob and optional function name.\n\nThread effective thresholds through health and audit, including report actions and active, stale, and no-match state across output contracts.\n\nUpdate docs, schemas, MCP descriptions, generated TypeScript contracts, and regression coverage for config loading, health output, audit behavior, scoped runs, and real fixture validation.\n\nFixes #1206.",
          "timestamp": "2026-06-12T16:00:16+02:00",
          "tree_id": "64ddd6978354d671c9aa7c93528ea126a7d06108",
          "url": "https://github.com/fallow-rs/fallow/commit/c187b94f0cddf9ea2e0f77e6a21707001764c434"
        },
        "date": 1781273139256,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 110496,
            "range": "± 1719",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4158730,
            "range": "± 171744",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6119810,
            "range": "± 189223",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32949760,
            "range": "± 476523",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113944,
            "range": "± 1134",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2356,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236325,
            "range": "± 1785",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069046,
            "range": "± 11114",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1523323,
            "range": "± 15663",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 575580,
            "range": "± 36021",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4364382,
            "range": "± 36769",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4396742,
            "range": "± 32907",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2979899,
            "range": "± 5955",
            "unit": "ns/iter"
          }
        ]
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
          "id": "f4d2d5113f84725fff0de249bb91e7125337e093",
          "message": "fix: credit Playwright fixture wrapper members\n\nPlaywright projects can compose typed fixture test objects through `mergeTests(...)` and wrapper `.extend(...)` calls. The direct fixture correlation already credited page-object methods, but wrapper test objects lost the fixture definition side of that correlation, so `unused-class-members` reported methods that were only reached through merged or extended fixtures.\n\nThis adds a conservative Playwright fixture alias sentinel in extraction and expands those aliases in the unused-member analyzer with a bounded, deduped fixed-point pass. The import gate only accepts Playwright's named `mergeTests` import, including aliased imports, and unmatched wrapper aliases do not credit anything. Namespace imports remain out of scope.\n\nRegression coverage includes extractor alias tests, a full issue fixture covering direct, merged, extended, and transitive wrapper paths, and controls proving genuinely unused decorated methods still report.\n\nFixes #1210.",
          "timestamp": "2026-06-12T16:28:13+02:00",
          "tree_id": "fadd10b74170c665bc37f3787ce8298bb618889f",
          "url": "https://github.com/fallow-rs/fallow/commit/f4d2d5113f84725fff0de249bb91e7125337e093"
        },
        "date": 1781274879562,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 110664,
            "range": "± 1075",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4141632,
            "range": "± 176277",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6143111,
            "range": "± 177514",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34890712,
            "range": "± 763063",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115406,
            "range": "± 6054",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2407,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232634,
            "range": "± 2589",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1050180,
            "range": "± 14694",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1497984,
            "range": "± 15329",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 573152,
            "range": "± 15327",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4256708,
            "range": "± 33270",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4292947,
            "range": "± 26830",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2909938,
            "range": "± 15290",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7efec6de07a5aff41d8e047cab2734d69580d2fc",
          "message": "chore: release v2.95.0",
          "timestamp": "2026-06-12T16:53:10+02:00",
          "tree_id": "856ce377e9c44f4e8f77d9976da5e9be6d427939",
          "url": "https://github.com/fallow-rs/fallow/commit/7efec6de07a5aff41d8e047cab2734d69580d2fc"
        },
        "date": 1781276388172,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 109400,
            "range": "± 2517",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4273950,
            "range": "± 137967",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6321127,
            "range": "± 169860",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34275086,
            "range": "± 715978",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119459,
            "range": "± 2706",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2339,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236233,
            "range": "± 4665",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070713,
            "range": "± 10960",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1526460,
            "range": "± 16581",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 581746,
            "range": "± 32073",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4373728,
            "range": "± 34963",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4269300,
            "range": "± 55339",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2987595,
            "range": "± 6475",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "12504f54b9332c3b7f6038d22c21c8c1c3ac3d28",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.95.0",
          "timestamp": "2026-06-12T17:30:25+02:00",
          "tree_id": "f07d582b4f701f9c19fe93de14814933351b26c8",
          "url": "https://github.com/fallow-rs/fallow/commit/12504f54b9332c3b7f6038d22c21c8c1c3ac3d28"
        },
        "date": 1781278575714,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 84831,
            "range": "± 6864",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3911537,
            "range": "± 158681",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6194952,
            "range": "± 179031",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 35253978,
            "range": "± 581564",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120152,
            "range": "± 1112",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2429,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 187009,
            "range": "± 2632",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823636,
            "range": "± 23548",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1330557,
            "range": "± 21639",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 539067,
            "range": "± 28799",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3332161,
            "range": "± 126876",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3389341,
            "range": "± 47211",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2240200,
            "range": "± 14461",
            "unit": "ns/iter"
          }
        ]
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
          "id": "4925a499e2f1696435eca1afd5e69bd5be98273b",
          "message": "feat(dupes): make ignoreImports the default with opt-out (#1226)\n\nFlip `fallow dupes`'s `ignoreImports` from opt-in (shipped in 2.33.0) to default-`true`. Token-identical sorted import blocks are a formatting artifact, not copy-paste, so they no longer surface as clone groups on a first run.\n\nThe OR-merge could not express opt-out, so `DupesOptions.ignore_imports` (and the programmatic `DuplicationOptions`) became `Option<bool>` resolved by precedence (CLI override > config > default-true) at the single `build_dupes_config` chokepoint. New opt-out flags `--no-ignore-imports` (standalone) and `--dupes-no-ignore-imports` (combined), both `conflicts_with` their opt-in pair. MCP `find_dupes` / `trace_clone` emit `--no-ignore-imports` on `ignore_imports: false` and now name the default in their descriptions and param docs. The VS Code `fallow.duplication.ignoreImports` setting controls both directions (it previously no-op'd on `false`). A human-format-only stderr note points users at the opt-out when import blocks were excluded and clone groups were reported.\n\nScope is ES `import` declarations only; CommonJS `require()` calls and `export ... from` re-export blocks are still counted (extending coverage to those is queued as #1225). Upgraders with a tuned `duplicates.threshold` gate or saved duplication baselines/trends get explicit CHANGELOG notes (the measured percentage drops, so a tuned gate loosens and a one-time baseline/Impact step-down is expected).\n\nFixes #1224.",
          "timestamp": "2026-06-13T08:36:36+02:00",
          "tree_id": "c5247ba5afc62e720fb5de44dbfde1d03981a848",
          "url": "https://github.com/fallow-rs/fallow/commit/4925a499e2f1696435eca1afd5e69bd5be98273b"
        },
        "date": 1781332929804,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 86244,
            "range": "± 2761",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3886963,
            "range": "± 136837",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6128317,
            "range": "± 186502",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 35356651,
            "range": "± 649128",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108256,
            "range": "± 2354",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2422,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184973,
            "range": "± 1683",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820076,
            "range": "± 6891",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1315350,
            "range": "± 20482",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533054,
            "range": "± 5548",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3304072,
            "range": "± 80051",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3320872,
            "range": "± 31706",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2320998,
            "range": "± 10029",
            "unit": "ns/iter"
          }
        ]
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
          "id": "0f54c7ea3a35dfdf4fb9255d584d68f4d51ce7ec",
          "message": "feat(impact): relocate store to user config dir; global opt-in default\n\nRelocates the Fallow Impact store out of each repo's .fallow/impact.json into the user's private config dir (<config-dir>/fallow/impact/<project-key>.json, the same base as telemetry.json), so enabling Impact or recording a run writes nothing into the working tree: no .fallow/ directory, no .gitignore edit. The store is keyed by repo identity via git rev-parse --git-common-dir, so running fallow impact from any subdirectory or any git worktree of a repo resolves to one shared history.\n\nAdds a user-global opt-in (fallow impact default on|off) with a per-project enable/disable always winning; the report and MCP tool gain enabled_source (project/user/default); new fallow impact reset [--all] deletes history (the global toggle survives a wipe); per-finding attribution baselines are namespaced per worktree (store schema 3 to 4); recording is forced off in CI. An existing in-repo .fallow/impact.json is imported once on first run and then left untouched. EnabledSource is regenerated into docs/output-schema.json and both TS contracts; ImpactReportSchemaVersion stays V1 (wire-additive).",
          "timestamp": "2026-06-13T09:21:01+02:00",
          "tree_id": "b9fea371c160c07b5c45809a6d2b786529e62b5f",
          "url": "https://github.com/fallow-rs/fallow/commit/0f54c7ea3a35dfdf4fb9255d584d68f4d51ce7ec"
        },
        "date": 1781335601185,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 65674,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3183955,
            "range": "± 170229",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4853241,
            "range": "± 139050",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26243461,
            "range": "± 590299",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 87829,
            "range": "± 3822",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1925,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143199,
            "range": "± 3324",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 636511,
            "range": "± 9260",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1022163,
            "range": "± 26866",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 423680,
            "range": "± 30821",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2580860,
            "range": "± 55859",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2612610,
            "range": "± 27355",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1744059,
            "range": "± 32168",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7bed9e48bf7a27d3a1e78f1d0c29b3a64a10c36c",
          "message": "fix(impact): isolate the CI record-gate in unit tests\n\nrecord_audit_run / record_combined_run short-circuit on telemetry::is_ci()\nso Impact never records on CI. The unit tests run on CI too (GitHub Actions\nsets CI / GITHUB_ACTIONS), so that gate made 16 record-dependent impact tests\nwrite nothing and fail on the Linux and Windows runners while passing on a\ndeveloper's machine where CI is unset.\n\nRoute the gate through a record_gate_is_ci() helper that, under #[cfg(test)],\nreads a per-test TEST_FORCE_CI thread-local (default false) instead of the\nambient env, mirroring the existing TEST_CONFIG_DIR isolation. Tests now record\ninto their isolated temp store regardless of the suite's CI environment, and a\nnew record_is_a_noop_in_ci test forces the override true to pin the production\ngate. The release binary is unchanged: under #[cfg(not(test))] the helper is\nexactly telemetry::is_ci(), so the feature's CI behavior is untouched.",
          "timestamp": "2026-06-13T09:45:57+02:00",
          "tree_id": "db3cd1b741a48d6c5a1d4a185c15580d4abc1042",
          "url": "https://github.com/fallow-rs/fallow/commit/7bed9e48bf7a27d3a1e78f1d0c29b3a64a10c36c"
        },
        "date": 1781337095975,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 85602,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3824750,
            "range": "± 160761",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6081453,
            "range": "± 182998",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33769988,
            "range": "± 533323",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118700,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2397,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185016,
            "range": "± 3928",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823129,
            "range": "± 12012",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1313505,
            "range": "± 25252",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536229,
            "range": "± 30449",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3322418,
            "range": "± 26995",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3333482,
            "range": "± 68258",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2247065,
            "range": "± 37585",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5d837a2353f383a7e576f8fe9c059813d12b8992",
          "message": "docs(impact): drop intra-doc link to cfg(test)-only TEST_FORCE_CI\n\nrecord_gate_is_ci is compiled in non-test builds, so cargo doc resolves its\ndoc comment; the [`TEST_FORCE_CI`] intra-doc link pointed at a #[cfg(test)]\nitem absent from the doc build, failing the Documentation job under\n-D warnings. Render it as a plain inline code span instead.",
          "timestamp": "2026-06-13T09:59:28+02:00",
          "tree_id": "e8e78d8d5777d2402e9e2b690a09c02dbdb4c344",
          "url": "https://github.com/fallow-rs/fallow/commit/5d837a2353f383a7e576f8fe9c059813d12b8992"
        },
        "date": 1781337887812,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 92341,
            "range": "± 1508",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3351141,
            "range": "± 205011",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4984494,
            "range": "± 109930",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26392544,
            "range": "± 680906",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113110,
            "range": "± 3072",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3166,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 158596,
            "range": "± 1586",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 711716,
            "range": "± 6580",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1197909,
            "range": "± 14540",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 489079,
            "range": "± 11624",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2957666,
            "range": "± 29362",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2951313,
            "range": "± 26631",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1964572,
            "range": "± 4838",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "24a30b1d266f477c30f6878fc9e4c34c00d04d75",
          "message": "chore: release v2.96.0",
          "timestamp": "2026-06-13T10:20:00+02:00",
          "tree_id": "7fab582fbe8086f206009876318678e3fa5f2685",
          "url": "https://github.com/fallow-rs/fallow/commit/24a30b1d266f477c30f6878fc9e4c34c00d04d75"
        },
        "date": 1781339142905,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 86160,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3884980,
            "range": "± 160179",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6083397,
            "range": "± 173199",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33580991,
            "range": "± 437201",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107395,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2395,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186088,
            "range": "± 11519",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 825671,
            "range": "± 6987",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1333068,
            "range": "± 35393",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535163,
            "range": "± 13050",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3328812,
            "range": "± 87679",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3367870,
            "range": "± 29827",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2238290,
            "range": "± 11671",
            "unit": "ns/iter"
          }
        ]
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
          "id": "4bbacc94af59a4e5b20523d7422bf21cd5f4696b",
          "message": "feat(nextjs): flag server-only exports in \"use client\" files (#1229)\n\nFirst stage of the Next.js RSC differentiated-detection program (panel-approved).\n\n**C.1 `invalid-client-export` (new issue type, default warn):** a file carrying the `\"use client\"` directive that also exports a Next.js server-only or route-segment-config name (`metadata`, `generateMetadata`, `generateStaticParams`, `getServerSideProps`, route HTTP methods, `revalidate`, `dynamic`, ...). Next.js throws this at build time; fallow catches it statically in the same pass as the rest of dead-code analysis. The client component's `default` export is never flagged, and the rule only runs when `next` is a declared dependency (FP gate). Reported across human, JSON, SARIF, CodeClimate, compact, and markdown plus the LSP; suppressible via `// fallow-ignore-next-line invalid-client-export`; participates in audit introduction attribution and baselines.\n\n**E (capability headline):** integration coverage proving fallow reports route-internal unused exports (a stray helper export or a typo'd `metadata`) inside `app/page.tsx` where knip cannot, because fallow credits a precise per-route-file export allowlist rather than treating the whole route file as an opaque entry point.\n\nTeam review: rust, cli-output, json-output, ci-formats, lsp, github-action reviewers; one BLOCK (audit-attribution annotation) and two CONCERNs (human footer/suppress hint, jq tests) all resolved with regression tests. Full workspace test, clippy, fmt, doc, VS Code codegen, and jq suites green.",
          "timestamp": "2026-06-13T10:39:15+02:00",
          "tree_id": "59623c553fab4695b70e4506f0bd2217beb4d544",
          "url": "https://github.com/fallow-rs/fallow/commit/4bbacc94af59a4e5b20523d7422bf21cd5f4696b"
        },
        "date": 1781340299019,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 92161,
            "range": "± 1355",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3366040,
            "range": "± 140864",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5072821,
            "range": "± 107148",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27412538,
            "range": "± 967875",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114137,
            "range": "± 2438",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3387,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157051,
            "range": "± 2717",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 711752,
            "range": "± 4533",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1203358,
            "range": "± 21528",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 465020,
            "range": "± 6678",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2920238,
            "range": "± 36608",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2951624,
            "range": "± 26066",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1946017,
            "range": "± 8718",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3bcde2d9e7558740987a852a23ade52b23ddd09e",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.96.0",
          "timestamp": "2026-06-13T10:56:53+02:00",
          "tree_id": "0c52351e18f9df84d7997f72bc78ef33d075ed1f",
          "url": "https://github.com/fallow-rs/fallow/commit/3bcde2d9e7558740987a852a23ade52b23ddd09e"
        },
        "date": 1781341346594,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 87209,
            "range": "± 4137",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3857756,
            "range": "± 164200",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5980109,
            "range": "± 148859",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33404936,
            "range": "± 420132",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 123423,
            "range": "± 6169",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2403,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184790,
            "range": "± 2882",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819691,
            "range": "± 2747",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1319470,
            "range": "± 25822",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 525515,
            "range": "± 33197",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3303384,
            "range": "± 26621",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3341629,
            "range": "± 45476",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2238563,
            "range": "± 5966",
            "unit": "ns/iter"
          }
        ]
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
          "id": "e96ae8e67c33c9b923483e9827424c93db2e4bab",
          "message": "feat(security): flag use-client cones that reach server-only code (#1231)\n\nStage 2 of the Next.js RSC differentiated-detection program.\n\nExtends the opt-in `fallow security` `client-server-leak` rule (default `off`) with a second sink predicate: a `\"use client\"` file whose transitive static-import cone reaches **server-only code**, emitted as a distinct `server-only-import` candidate category on the same rule, suppress kind, and finding shape. fallow catches this without requiring the `server-only` poison package and before a build (Next.js only errors at build time when the marker is present).\n\n- **Narrow sink set** (FP-conservative, no DB-client heuristic): a `\"use server\"` module, a `server-only` import, or a named server-only API (`next/headers` `cookies`/`headers`/`draftMode`, `next/server`, node `fs`/`child_process`, both `node:` and bare forms).\n- **`next/dynamic(..., { ssr: false })` aware**: a server module reached only through the sanctioned client-only dynamic import is not a leak. The extract layer captures those import spans on `ModuleInfo.client_only_dynamic_import_spans` (CACHE_VERSION bump) and the BFS skips an edge reached only through them.\n- **Direct case**: a `\"use client\"` file that itself imports a server-only sink is reported with a single self-hop trace; the transitive emit is gated so it reports once.\n- Opt-in and candidate-framed (never a verified vulnerability); `security_findings` stays out of bare `fallow` / `audit`. `SecuritySchemaVersion` bumped to V7 since `client-server-leak` findings can now carry the `server-only-import` category.\n\nTeam review: rust, json-output, mcp reviewers (zero BLOCKs); the direct-case coverage gap, the V7 schema bump, stale doc/schema descriptions, a misleading fixture comment, and thin sink-predicate fixtures were all addressed with new tests. Full workspace test, clippy, fmt, doc, codegen, and the security smoke (10 findings, `schema_version: 7`, zero under bare `fallow`) green.",
          "timestamp": "2026-06-13T11:39:29+02:00",
          "tree_id": "50ea45079671eac9673e065f90adb8630273d4a0",
          "url": "https://github.com/fallow-rs/fallow/commit/e96ae8e67c33c9b923483e9827424c93db2e4bab"
        },
        "date": 1781343984962,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 88077,
            "range": "± 2746",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3782340,
            "range": "± 183402",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6123920,
            "range": "± 182681",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34420536,
            "range": "± 946992",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113099,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2427,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185412,
            "range": "± 3863",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822343,
            "range": "± 8361",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1326301,
            "range": "± 33930",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 541770,
            "range": "± 16441",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3343685,
            "range": "± 73300",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3363822,
            "range": "± 50899",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2248294,
            "range": "± 56541",
            "unit": "ns/iter"
          }
        ]
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
          "id": "0e773171cd5d6dcf17019c270b7a8fe98a0f5f7b",
          "message": "feat(nextjs): flag barrels that re-export both client and server-only code (#1232)\n\nAdds the mixed-client-server-barrel issue type (default warn): a barrel file that re-exports BOTH a \"use client\" origin module AND a server-only origin module, dragging directive context across the React Server Components boundary.\n\nThe detector classifies only direct re-export origins, is gated on the project declaring next, and shares the server-only predicate with the security detector. FP guards: client + server-only trigger only (not client + plain util), type-only re-exports skipped. No auto-fix; suppress hint only. Full plumbing across results, audit attribution, all six report formats, LSP diagnostics, schema, and TS contracts.",
          "timestamp": "2026-06-13T12:38:33+02:00",
          "tree_id": "4d94908b3e5b24abd105202abd6a3388abc613cd",
          "url": "https://github.com/fallow-rs/fallow/commit/0e773171cd5d6dcf17019c270b7a8fe98a0f5f7b"
        },
        "date": 1781347495549,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 84177,
            "range": "± 956",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3856471,
            "range": "± 207484",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5950101,
            "range": "± 173560",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33309030,
            "range": "± 376302",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117882,
            "range": "± 3484",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2413,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185229,
            "range": "± 4552",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819415,
            "range": "± 12559",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1313896,
            "range": "± 31824",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530201,
            "range": "± 32344",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3297681,
            "range": "± 35373",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3338016,
            "range": "± 38017",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2234287,
            "range": "± 16503",
            "unit": "ns/iter"
          }
        ]
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
          "id": "81f5da2d2376ed00a92cb29ea9e6d93b66489a5c",
          "message": "feat(impact): add cross-repo view (fallow impact --all)\n\nAggregate every project's Impact history into one roll-up: what has fallow done for me across all my repos. `fallow impact --all` reads the per-project stores in the user config dir (the substrate the v2.96 store relocation created); read-only, never writes.\n\n--all is a flag on the impact command (rejected with exit 2 alongside a mutating subcommand), with --sort {recent,resolved,contained,name} (default recent) and --limit N (totals always reflect every store). load_all enumerates the config dir, skipping corrupt files (counted, never defaulted); build_aggregate_report reuses build_report per store and sums totals over all tracked projects, excluding enabled-but-empty ones from the rows. New FallowOutput::ImpactCrossRepo(CrossRepoImpactReport) envelope (kind:\"impact-cross-repo\", independent schema version) embeds the per-project ImpactReport verbatim plus a stable project_key and a basename label; the single-project impact contract is byte-identical. Additive store field label (git-toplevel basename only, never a path; STORE_SCHEMA_VERSION 4 to 5) captured on record so rows are legible without reversing the opaque key. JSON/markdown leak zero paths.",
          "timestamp": "2026-06-13T13:17:02+02:00",
          "tree_id": "4b9a92b91e0837a61d99193ecbbdbe17bf04d279",
          "url": "https://github.com/fallow-rs/fallow/commit/81f5da2d2376ed00a92cb29ea9e6d93b66489a5c"
        },
        "date": 1781349794269,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 91961,
            "range": "± 1428",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3533478,
            "range": "± 135345",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5445977,
            "range": "± 208588",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28375525,
            "range": "± 565326",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110013,
            "range": "± 1773",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3163,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157021,
            "range": "± 4908",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 714201,
            "range": "± 8325",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1200978,
            "range": "± 35413",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 477101,
            "range": "± 17159",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3021152,
            "range": "± 28097",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3075479,
            "range": "± 36728",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1956220,
            "range": "± 13657",
            "unit": "ns/iter"
          }
        ]
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
          "id": "df250ec9880b62786b61ed3a13b014fbe56dbc34",
          "message": "docs(impact): fix stale store path and redundant intra-doc link (#1234)\n\nUpdate the README impact paragraph to reflect the relocated store: history\nnow lives in the user config directory, not a gitignored .fallow/impact.json\nin the repo, and add a pointer to the new fallow impact --all cross-repo view.\n\nAlso drop the redundant explicit target on the is_server_only_module intra-doc\nlink in the mixed-barrel detection module docs, which was tripping the\ncargo doc -D warnings Documentation CI check on main.",
          "timestamp": "2026-06-13T13:26:11+02:00",
          "tree_id": "502219210e3db1d45775f87cc66d1d4f66837d92",
          "url": "https://github.com/fallow-rs/fallow/commit/df250ec9880b62786b61ed3a13b014fbe56dbc34"
        },
        "date": 1781350311339,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 107165,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3880659,
            "range": "± 209778",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6005137,
            "range": "± 196825",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33121120,
            "range": "± 701284",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112183,
            "range": "± 2402",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2336,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235559,
            "range": "± 2076",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069824,
            "range": "± 10273",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1521202,
            "range": "± 33547",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 566913,
            "range": "± 28224",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4356834,
            "range": "± 44216",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4381535,
            "range": "± 33757",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2977379,
            "range": "± 39112",
            "unit": "ns/iter"
          }
        ]
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
          "id": "6f6714cceea62286efdbaa670ba63cfaa3816eb2",
          "message": "feat(impact): harden store with advisory lock, age-based GC, and impact_all MCP tool (#1235)\n\nConcurrency: record paths take a blocking advisory lock (kernel flock on a\n<store>.lock sidecar) around their load-mutate-save window, so two worktrees of\none repo cannot lost-update each other; best-effort, sidecar never deleted.\n\nHousekeeping: FALLOW_IMPACT_STORE_MAX_AGE_DAYS makes a recorded run reclaim\nper-project stores older than the window, leaving the active store, lock\nsidecars, and global toggle untouched. Unset / 0 / invalid disable the sweep.\n\nMCP: new read-only impact_all tool wraps fallow impact --all (cross-repo\naggregate, hashed keys plus optional basename labels, never paths).",
          "timestamp": "2026-06-13T13:49:42+02:00",
          "tree_id": "133edb6fe3902ea86cb309f9fc8851942aef6ab0",
          "url": "https://github.com/fallow-rs/fallow/commit/6f6714cceea62286efdbaa670ba63cfaa3816eb2"
        },
        "date": 1781351843426,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 86903,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3866285,
            "range": "± 187311",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6008701,
            "range": "± 156228",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33552619,
            "range": "± 481784",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121106,
            "range": "± 2530",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2437,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184792,
            "range": "± 5671",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820981,
            "range": "± 61375",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1316692,
            "range": "± 16198",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531857,
            "range": "± 8936",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3319501,
            "range": "± 104503",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3340477,
            "range": "± 43859",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2239244,
            "range": "± 11007",
            "unit": "ns/iter"
          }
        ]
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
          "id": "af513438fe3f37b814718301d535b9fb4965da5e",
          "message": "feat(nextjs): flag misplaced use client / use server directives (#1236)\n\nAdds the misplaced-directive issue type (default warn): a \"use client\" / \"use server\" directive written below an import rather than in the leading prologue, which the parser silently ignores so the file is treated as a server module.\n\nA new extract pass scans program.body for the two RSC directive strings (CACHE_VERSION 151 to 152, CachedModule mirror + conversion both directions), gated on the project declaring next. No auto-fix; suppress hint only. Full plumbing across results, audit attribution, all six report formats, LSP diagnostics, schema, and TS contracts. Also wires the human-output footer + suppress hint for the three RSC siblings in the agent capability manifest.",
          "timestamp": "2026-06-13T13:50:06+02:00",
          "tree_id": "66416533b8e092e9cc52e65c81e02a2ad0a40442",
          "url": "https://github.com/fallow-rs/fallow/commit/af513438fe3f37b814718301d535b9fb4965da5e"
        },
        "date": 1781352183455,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 88041,
            "range": "± 2267",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3941819,
            "range": "± 178624",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6025130,
            "range": "± 160380",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33529120,
            "range": "± 640314",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113166,
            "range": "± 1293",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2576,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186295,
            "range": "± 4700",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820698,
            "range": "± 9311",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320051,
            "range": "± 20892",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530594,
            "range": "± 13162",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3307210,
            "range": "± 26998",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3348003,
            "range": "± 53403",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2311422,
            "range": "± 7477",
            "unit": "ns/iter"
          }
        ]
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
          "id": "11af6fe65f62f375350560b63317bdb7d94098d7",
          "message": "feat(stores): cross-graph unused Pinia store member detection (#1241)\n\nAdds a new unused-store-member rule (default warn): a Pinia store member (an option-store state/getters/actions key, or a setup-store returned key) declared but accessed by zero consumers project-wide. The cross-file dead-input direction that single-file linters and type-checkers do not cover. Reuses unused_members.rs via MemberKind::StoreMember; gated on pinia/@pinia/nuxt; suppress-only. Validated on vue-vben-admin with zero false positives. Wired through all report formats, LSP, MCP, schema/codegen, and CI jq.",
          "timestamp": "2026-06-13T20:15:26+02:00",
          "tree_id": "4f49ea8a22a2b1232d9f28288ee4ed2c618645a9",
          "url": "https://github.com/fallow-rs/fallow/commit/11af6fe65f62f375350560b63317bdb7d94098d7"
        },
        "date": 1781374896061,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 93151,
            "range": "± 2403",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3528039,
            "range": "± 217948",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5240834,
            "range": "± 213376",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 25758934,
            "range": "± 430406",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105594,
            "range": "± 4245",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3176,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157049,
            "range": "± 1904",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 713832,
            "range": "± 7194",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1190064,
            "range": "± 12554",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 467849,
            "range": "± 5539",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2899212,
            "range": "± 14429",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2954289,
            "range": "± 13442",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1949709,
            "range": "± 9686",
            "unit": "ns/iter"
          }
        ]
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
          "id": "5bd32d41321e69532655c72707b6e04f976d5f99",
          "message": "feat(unprovided-inject): flag Vue inject / Svelte getContext with no provider\n\nAdd a new cross-graph `unprovided-inject` rule (default severity warn, suppress-only) that flags a Vue inject(KEY) or Svelte getContext(KEY) whose symbol key is provide()/setContext()'d nowhere in the analyzed project. At runtime a dead inject silently returns undefined, surfaced only when the affected path renders; no static tool in the Vue/Svelte/Nuxt ecosystems catches it.\n\nNew persisted ModuleInfo.di_key_sites + has_dynamic_provide (CACHE_VERSION 153 to 155) feed a two-pass set-difference detector keyed on the canonical defining-site ExportKey, so a direct-imported provide and a barrel-imported inject of the same key match. Zero-FP abstain ladder: dep-gated on vue/@vue/runtime-core/svelte; package-imported keys, string-literal-const keys, public-API keys, and any dynamic-keyed provide all abstain. Wired through every report format, LSP, MCP, napi, VS Code, schema.json, the JSON contract, and the jq summaries. Nuxt string-keyed provide and the provided-never-injected direction are out of scope.",
          "timestamp": "2026-06-13T22:14:17+02:00",
          "tree_id": "ca538b23960136b75dda32e29723cf2c7165bcf9",
          "url": "https://github.com/fallow-rs/fallow/commit/5bd32d41321e69532655c72707b6e04f976d5f99"
        },
        "date": 1781381976991,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 67138,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3069459,
            "range": "± 71025",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4770167,
            "range": "± 152744",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 25806804,
            "range": "± 640383",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 88076,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1915,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143980,
            "range": "± 1897",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 639934,
            "range": "± 41800",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1028883,
            "range": "± 16594",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 417606,
            "range": "± 14401",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2571169,
            "range": "± 27622",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2604053,
            "range": "± 29728",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1732897,
            "range": "± 12093",
            "unit": "ns/iter"
          }
        ]
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
          "id": "58dc4fe0e548ffc1577b54c63b895e0044e83981",
          "message": "fix: address post-release v2.96.0 review follow-ups (#1244)\n\nCumulative follow-up patch for findings from the post-release retrospective of v2.96.0..HEAD.\n\n- The three Next.js RSC checks (invalid-client-export, mixed-client-server-barrel, misplaced-directive) emit a structured fix action in JSON output (move-to-server-module / split-mixed-barrel / hoist-directive) alongside the suppress action.\n- The combined-mode CI summary (GitHub Action + GitLab CI) lists the three RSC finding types in the Code issues breakdown table.\n- fallow impact --all --format markdown pluralizes project / issue counts.\n- fallow dead-code --explain injects a description for the misplaced-directive section.\n- collect_matching_rules covers mixed-barrels under --group-by owner, pinned by a neuter-checked regression test.\n- The impact_all MCP open-world annotation is asserted; its description guides agents on an empty (project_count 0) result.\n- The SARIF invalid-client-export fallback string matches explain.rs.\n- The VS Code orphan-temp sweep is deferred off the synchronous getInstallDir path; two code comments are corrected.\n\nSchema and TypeScript contracts regenerated; JSON snapshots accepted.",
          "timestamp": "2026-06-13T23:00:15+02:00",
          "tree_id": "e37312d8c48b6b8adc06aa731bb569018ac0d137",
          "url": "https://github.com/fallow-rs/fallow/commit/58dc4fe0e548ffc1577b54c63b895e0044e83981"
        },
        "date": 1781384882834,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 88147,
            "range": "± 3093",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3871886,
            "range": "± 160116",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5965347,
            "range": "± 182283",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33794032,
            "range": "± 550492",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115241,
            "range": "± 1085",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2446,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185187,
            "range": "± 1854",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819580,
            "range": "± 8493",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1316377,
            "range": "± 26111",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531357,
            "range": "± 7254",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3305769,
            "range": "± 62836",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3341674,
            "range": "± 65310",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2246277,
            "range": "± 9703",
            "unit": "ns/iter"
          }
        ]
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
          "id": "60781db879d8ef414c75742116a3648e8e1f0922",
          "message": "fix(vscode,lsp): drive un-hide diagnostics through server refresh (#1243)\n\nAfter \"Toggle Hide All Findings\", showing findings again now re-renders open files immediately. The mute toggle asks the language server to re-drive its diagnostic refresh (the path used after analysis and on file reopen, which fires every pull provider unconditionally) instead of relying only on a client-side per-document re-pull that could silently match nothing.\n\nServer: new fallow/refreshDiagnostics custom request that re-drives workspace/diagnostic/refresh (gated on whether the client pulls). Client: the toggle sends it fire-and-forget (swallowing MethodNotFound on older binaries), keeping the local re-pull as a fast-path fallback.\n\nAdds a Fallow: Reset Hidden Findings (Restart Server) command that clears every editor-side hide and restarts the client, the guaranteed recovery for a stuck-hidden workspace. Because the hidden state is stored per workspace and survives uninstalling the extension and deleting .fallow, the extension also nudges once when everything is hidden, with a one-click Show all findings. CI and the CLI are unaffected by these editor-only filters.\n\nRefs discussion #287.",
          "timestamp": "2026-06-14T07:39:57+02:00",
          "tree_id": "3db24d4e3b10b66366306dc045258ccc5720c76c",
          "url": "https://github.com/fallow-rs/fallow/commit/60781db879d8ef414c75742116a3648e8e1f0922"
        },
        "date": 1781415964875,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 89324,
            "range": "± 1410",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3929587,
            "range": "± 192356",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6060659,
            "range": "± 165931",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33328501,
            "range": "± 413689",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117780,
            "range": "± 2275",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2438,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186093,
            "range": "± 7031",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823940,
            "range": "± 22059",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1330712,
            "range": "± 21612",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535421,
            "range": "± 7277",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3317424,
            "range": "± 48333",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3352807,
            "range": "± 40302",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2237447,
            "range": "± 66637",
            "unit": "ns/iter"
          }
        ]
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
          "id": "10a1f0031865874985b260706cca84299da073dc",
          "message": "feat(nextjs): flag App Router route collisions and dynamic-segment name conflicts\n\nTwo next-gated, warn-default whole-project App Router checks built on a new path-only route-tree primitive (crates/core/src/analyze/route_tree.rs; no AST, no type system, no extraction).\n\nroute-collision flags two or more page/route files resolving to the same URL within one app-root (a next build failure, verified against Next 15.5.0, including the route.ts-vs-page.tsx same-segment case); fallow surfaces every colliding file where the build names only one. dynamic-segment-name-conflict flags sibling dynamic segments using different slug names ([id] vs [slug]); Next throws at dev/runtime and next build does NOT catch it, so CI passes while the route crashes.\n\nPer-app-root scoping on discovered workspace package roots is the load-bearing false-positive gate; parallel @slot siblings, private _folders, and intercepting markers are excluded. Wired through results/total_issues/sort, IssueKind, RulesConfig, all six report formats, LSP diagnostics, jq (action + ci), filters/baseline/audit, schemas + TS contracts, and docs. The primary action is manual guidance, not suppress.",
          "timestamp": "2026-06-14T08:02:20+02:00",
          "tree_id": "8a7480a3f3ea02a7d8866ea29384c60e4b303766",
          "url": "https://github.com/fallow-rs/fallow/commit/10a1f0031865874985b260706cca84299da073dc"
        },
        "date": 1781417291822,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 88043,
            "range": "± 3295",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3796236,
            "range": "± 155356",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6036209,
            "range": "± 187260",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33337023,
            "range": "± 821130",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118515,
            "range": "± 1949",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2512,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185359,
            "range": "± 5786",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821753,
            "range": "± 7995",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320644,
            "range": "± 23020",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533410,
            "range": "± 13628",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3317471,
            "range": "± 37470",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3331739,
            "range": "± 33509",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2242725,
            "range": "± 3971",
            "unit": "ns/iter"
          }
        ]
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
          "id": "de74ee1c7f347a65a6965715436c9a259d540e99",
          "message": "feat(sfc): flag missing static template asset refs via unresolved-import (#1246)\n\nVue / Svelte SFC markup is now scanned for static relative asset references (img/source/video/audio/track/embed src and poster). A reference that points to no file on disk surfaces as unresolved-import; an existing asset resolves with no finding.\n\nExtraction-only, reuses the existing unresolved-import category (no new rule, flag, or finding type). Conservative to stay false-positive-safe: only plain relative literals on genuine asset elements are checked; dynamic, aliased, root-relative, remote, interpolated, and query-suffixed values are skipped, custom-component src props are never read as assets, and refs inside script/style/comments are masked before scanning.\n\nCACHE_VERSION bumped 155 to 156 (SFC markup asset refs now emit SideEffect imports into the cached module shape).",
          "timestamp": "2026-06-14T08:03:13+02:00",
          "tree_id": "5af017763f8f3de7619ef25e7d51f2222d34b0d3",
          "url": "https://github.com/fallow-rs/fallow/commit/de74ee1c7f347a65a6965715436c9a259d540e99"
        },
        "date": 1781417654041,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 92456,
            "range": "± 2126",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3168849,
            "range": "± 45688",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4880529,
            "range": "± 67402",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 26038543,
            "range": "± 679482",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110113,
            "range": "± 2300",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3216,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156583,
            "range": "± 3327",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 709317,
            "range": "± 7015",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1192409,
            "range": "± 16729",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 464241,
            "range": "± 11089",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2882941,
            "range": "± 90305",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2936958,
            "range": "± 30894",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1932996,
            "range": "± 3831",
            "unit": "ns/iter"
          }
        ]
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
          "id": "f9b6926884113b997f08366df1474c236d81b46d",
          "message": "fix(extract): credit Vue components rendered after a nested template slot (#1247)\n\nThe Vue SFC template-usage scanner matched the root template against the first </template> (non-greedy capture), truncating the body at a nested <template #slot> close and dropping every component rendered after it, causing false unused-export findings.\n\nThe scanner now locates the root close with nesting depth tracking, byte-safe (CJK), with an unclosed-comment fall-through. Verified on a real corpus: vue-vben-admin layout-ui went from 4 false unused-exports to 0, no new FPs. CACHE_VERSION 156 to 157.",
          "timestamp": "2026-06-14T10:16:14+02:00",
          "tree_id": "4b2fb34d5bedf580400126865fb4529fab347508",
          "url": "https://github.com/fallow-rs/fallow/commit/f9b6926884113b997f08366df1474c236d81b46d"
        },
        "date": 1781425611317,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 89045,
            "range": "± 1130",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3871777,
            "range": "± 154163",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6061208,
            "range": "± 161936",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34430526,
            "range": "± 408138",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 125957,
            "range": "± 7380",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2497,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184858,
            "range": "± 6892",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821370,
            "range": "± 4096",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321809,
            "range": "± 21781",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537646,
            "range": "± 12736",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3319091,
            "range": "± 43954",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3366523,
            "range": "± 29850",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2230967,
            "range": "± 13809",
            "unit": "ns/iter"
          }
        ]
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
          "id": "d0f5b42e4588b0452eb5859c3578500a5695d05d",
          "message": "feat(nextjs): graduate route-collision to default error, keep dynamic-segment-name-conflict at warn\n\nroute-collision now defaults to error (it mirrors a next build failure, so a project hitting it was already red); dynamic-segment-name-conflict stays warn (a runtime crash next build does NOT catch) and graduates to error in a later release once field-proven.\n\nAlso corrects the dynamic-segment-name-conflict rustdoc (it wrongly claimed the build fails), rewrites the human and markdown conflict line to be crash-grade, and adds a monorepo-gate regression test proving the rule arms when next is declared only in a sub-app. Regenerated schema.json and re-accepted SARIF snapshots (route-collision rule level warning to error). No JSON schema or TS contract change.",
          "timestamp": "2026-06-14T11:32:57+02:00",
          "tree_id": "c8eca53852b845ab75dd48c5716d953b3b426a3e",
          "url": "https://github.com/fallow-rs/fallow/commit/d0f5b42e4588b0452eb5859c3578500a5695d05d"
        },
        "date": 1781429921045,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 89691,
            "range": "± 918",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3975481,
            "range": "± 256649",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6269827,
            "range": "± 226103",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 36933387,
            "range": "± 604196",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121140,
            "range": "± 1409",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2457,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186783,
            "range": "± 2619",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 827295,
            "range": "± 7884",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1330898,
            "range": "± 19089",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536914,
            "range": "± 16537",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3353620,
            "range": "± 33986",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3365674,
            "range": "± 129494",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2283293,
            "range": "± 4842",
            "unit": "ns/iter"
          }
        ]
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
          "id": "a53c744cf95aa09768c6e27e4b46d904d1409932",
          "message": "feat(analyze): flag Vue/Svelte components reachable but rendered nowhere (#1249)\n\nNew unrendered-component rule (default warn): a Vue/Svelte SFC default export kept reachable by a barrel re-export but instantiated nowhere (no tag, :is/this, components/app.component, h()/auto-import, or value-read). unused-file and unused-export both miss it.\n\nReuses the module graph; only new persisted state is a derived ModuleInfo.referenced_import_bindings (uncached). Rendered set built liberally (barrel chains, Nuxt auto-imports, dynamic/side-effect imports). Abstains: dep-gate, entry-point components, and components re-exported through the full multi-hop chain from a non-private package entry point. Suppress-only.\n\nValidated on a 10-project real corpus: 11 true positives (bits-ui orphaned icons, vue-vben-admin shadcn context-menu variants), zero false positives. Reports through human/JSON/SARIF/CodeClimate/compact/markdown/LSP/MCP.",
          "timestamp": "2026-06-14T14:05:43+02:00",
          "tree_id": "466aca746cb18c809762697b4acd6bade58d439c",
          "url": "https://github.com/fallow-rs/fallow/commit/a53c744cf95aa09768c6e27e4b46d904d1409932"
        },
        "date": 1781439137341,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 93462,
            "range": "± 2967",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3254248,
            "range": "± 75976",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5005735,
            "range": "± 106865",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 25960618,
            "range": "± 794333",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 105537,
            "range": "± 3628",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3171,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156722,
            "range": "± 1850",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 713488,
            "range": "± 7151",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1192935,
            "range": "± 22652",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 472734,
            "range": "± 14612",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2918515,
            "range": "± 47400",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2950601,
            "range": "± 38289",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1954415,
            "range": "± 13336",
            "unit": "ns/iter"
          }
        ]
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
          "id": "60d77438381022256ef51249f1f04dc35fe0484a",
          "message": "feat(analyze): flag Vue defineProps props used nowhere in their component (#1251)\n\nNew unused-component-prop rule (default warn): a Vue <script setup> defineProps declared prop referenced by no code in its own SFC (script or template). Harvests inline TS / runtime object / withDefaults forms; credits script (destructured local / props.foo) and template usage. False-positive-safe abstains: $attrs/props fallthrough, whole-object props use, defineExpose, defineModel, renamed-destructure alias, v-bind forward, imported prop-type alias. Vue <script setup> only.\n\nReports through human/JSON/SARIF/CodeClimate/compact/markdown/LSP/MCP. Validated on a real corpus: 7 true positives (elk, vue-vben-admin, vuestic-admin, nuxt-ui), zero false positives.",
          "timestamp": "2026-06-14T17:37:16+02:00",
          "tree_id": "7daf23c242845ff61d3dac2545aa056f13284d0e",
          "url": "https://github.com/fallow-rs/fallow/commit/60d77438381022256ef51249f1f04dc35fe0484a"
        },
        "date": 1781451807277,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 88514,
            "range": "± 1592",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3690755,
            "range": "± 151869",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5903376,
            "range": "± 141461",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33892973,
            "range": "± 509562",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 113018,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2728,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186978,
            "range": "± 14954",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821530,
            "range": "± 46251",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321795,
            "range": "± 22080",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532932,
            "range": "± 10037",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3311310,
            "range": "± 42200",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3316809,
            "range": "± 48981",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2226836,
            "range": "± 7807",
            "unit": "ns/iter"
          }
        ]
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
          "id": "7fcff8f00a2362fdd7867c50a721b72948924d29",
          "message": "feat(analyze): flag Vue defineEmits events emitted nowhere in their component (#1252)\n\nAdd an `unused-component-emit` rule (default severity `warn`): a Vue `<script setup>` `defineEmits` declared event emitted by no code in its own single-file component, neither through `emit('name')` in `<script>` nor `emit('name')` / `$emit('name')` in `<template>`. The emit-side sibling of `unused-component-prop` (#1251), the in-component dead-output direction vue-tsc / Volar do not cover.\n\nHarvests event names from the array, type / object, and bound (renamed-binding aware) forms; credits usage from the script call walk and the template; abstains on the whole component for dynamic emit, whole-object emit use, `defineModel`, or an imported emit-type alias. Full output wiring mirrors the prop sibling. Vue `<script setup>` only.\n\nValidated on a 10-project corpus: 6 true positives, zero false positives.",
          "timestamp": "2026-06-14T19:57:01+02:00",
          "tree_id": "97bfc823593160b1fb9a5f20b86623cb10ed6548",
          "url": "https://github.com/fallow-rs/fallow/commit/7fcff8f00a2362fdd7867c50a721b72948924d29"
        },
        "date": 1781460150094,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 112991,
            "range": "± 5762",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4048395,
            "range": "± 159355",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6147598,
            "range": "± 226939",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33615087,
            "range": "± 439460",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114921,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2406,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236119,
            "range": "± 27924",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1069863,
            "range": "± 11694",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1520519,
            "range": "± 27887",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 571914,
            "range": "± 28724",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4368827,
            "range": "± 56495",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4411414,
            "range": "± 30725",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 3026074,
            "range": "± 29081",
            "unit": "ns/iter"
          }
        ]
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
          "id": "79727c19a63d502662438990750448bfd9f0ba24",
          "message": "docs(types): fix mis-flagged typo in ModuleInfo abstain comments (#1253)\n\nReword the `has_unharvestable_props` / `has_unharvestable_emits` doc comments from \"mis-flagged\" (the `mis` token trips the typos check) to \"falsely flagged\". Doc-comment only, no behavior change.",
          "timestamp": "2026-06-14T20:00:11+02:00",
          "tree_id": "3e145a1ea62da8348dfebbd76b2d3ac8b76d1ee8",
          "url": "https://github.com/fallow-rs/fallow/commit/79727c19a63d502662438990750448bfd9f0ba24"
        },
        "date": 1781460491017,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 112759,
            "range": "± 904",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4196852,
            "range": "± 180259",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6175921,
            "range": "± 209863",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33639157,
            "range": "± 760163",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120176,
            "range": "± 844",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2464,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235664,
            "range": "± 4868",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1073350,
            "range": "± 10366",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1524205,
            "range": "± 18547",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 571056,
            "range": "± 9186",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4361651,
            "range": "± 25159",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4399655,
            "range": "± 31771",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2974810,
            "range": "± 184435",
            "unit": "ns/iter"
          }
        ]
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
          "id": "b8c03ae81e1f6e90327aede79d8753711a447047",
          "message": "feat(nextjs): flag unused server actions (use-server exports referenced nowhere) (#1254)\n\nAdds a new unused-server-action rule (default warn): an exported function in a Next.js \"use server\" file that no code in the project references (no import-and-call, no action={fn} binding, no <form action={fn}>). Cross-file dead-action direction eslint-plugin-next cannot see.\n\nRe-classifies the server-action subset of unused_exports (files whose directives contain \"use server\") into unused_server_actions, after the parallel detectors and before stale-suppression detection, inheriting every unused-exports abstain. action={fn} / <form action={fn}> are already credited as references by oxc_semantic. Gated on next; when the rule is off, findings stay as unused-export.\n\nWired across types/suppress (IssueKind disc 40, CACHE_VERSION 161), config, all six report formats, baseline, audit attribution, LSP, MCP, NAPI, and the regenerated schema + TS contracts. Validated zero false positives on 13 real Next.js projects plus local projects (one true positive). Inline \"use server\" body directives deferred.",
          "timestamp": "2026-06-14T22:36:05+02:00",
          "tree_id": "09c89a6c71039f9da98c81d5e00164b42bc033b1",
          "url": "https://github.com/fallow-rs/fallow/commit/b8c03ae81e1f6e90327aede79d8753711a447047"
        },
        "date": 1781469706939,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 87391,
            "range": "± 820",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3796084,
            "range": "± 136050",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6050912,
            "range": "± 255196",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33321240,
            "range": "± 719536",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120198,
            "range": "± 6019",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2545,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186700,
            "range": "± 1476",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 827829,
            "range": "± 42826",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321226,
            "range": "± 30991",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534308,
            "range": "± 20677",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3299255,
            "range": "± 108367",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3326387,
            "range": "± 33669",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2246894,
            "range": "± 17681",
            "unit": "ns/iter"
          }
        ]
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
          "id": "1de4f0125e8d5d99dc13639ac579b546a060369d",
          "message": "feat(extract): track SvelteKit data-prop destructure as member accesses (#1255)\n\nPrimitive A for unused-load-data-key: a destructure off the SvelteKit `data` prop (`const { user } = data`) emits `data.<key>` member accesses (rest -> whole-object abstain). CACHE_VERSION 162. Findings-byte-identical on all 10 benchmark fixtures; full test + clippy green.",
          "timestamp": "2026-06-15T08:39:18+02:00",
          "tree_id": "cda7ee180568bd52e5ad15451612859084209203",
          "url": "https://github.com/fallow-rs/fallow/commit/1de4f0125e8d5d99dc13639ac579b546a060369d"
        },
        "date": 1781505885816,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 109676,
            "range": "± 3603",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4112024,
            "range": "± 168690",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6013934,
            "range": "± 183104",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33372637,
            "range": "± 412614",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114647,
            "range": "± 5742",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2403,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236008,
            "range": "± 5113",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1068673,
            "range": "± 12337",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1521749,
            "range": "± 16882",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 570968,
            "range": "± 35700",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4355670,
            "range": "± 29054",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4381331,
            "range": "± 33763",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2976384,
            "range": "± 6699",
            "unit": "ns/iter"
          }
        ]
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
          "id": "05c25a03012b3bd728860b88f4effb9ee26b8335",
          "message": "feat(extract): credit SvelteKit route data prop as template-visible (#1257)\n\nPrimitive B for unused-load-data-key: a SvelteKit route component now credits the `data` prop as a template-visible root, so `{data.x}` and `{#each data.items as i}` markup reads emit `data.<key>` member accesses for the cross-file load-data-key join.\n\nRoute-narrowed (not all `.svelte`): a non-route component's parent-passed `data` is a different binding, so crediting it as load data would be semantically wrong. The predicate matches `+page.svelte` / `+layout.svelte` AND their layout-reset variants, all of which still receive the `load()` data prop; `+error.svelte` and non-route `+pageHelper.svelte` are excluded by the grammar.\n\nInternal extraction primitive with zero finding delta, so no CHANGELOG/detection.md entry, mirroring Primitive A (#1255). CACHE_VERSION 162 to 163. Findings byte-identical on all 10 benchmark fixtures and 10 real SvelteKit apps; extract + core + full-workspace tests, clippy, fmt, and cargo doc all green.",
          "timestamp": "2026-06-15T11:38:26+02:00",
          "tree_id": "a58325f0f0ba3147687e6ff07640d036a71e36be",
          "url": "https://github.com/fallow-rs/fallow/commit/05c25a03012b3bd728860b88f4effb9ee26b8335"
        },
        "date": 1781516667235,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 93609,
            "range": "± 1097",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3277251,
            "range": "± 176290",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5111099,
            "range": "± 278090",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27530015,
            "range": "± 1178194",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 107566,
            "range": "± 3443",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3258,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 155795,
            "range": "± 2470",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 713088,
            "range": "± 5564",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1186132,
            "range": "± 43528",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 460860,
            "range": "± 6454",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2867312,
            "range": "± 55948",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2910612,
            "range": "± 18352",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1932752,
            "range": "± 10833",
            "unit": "ns/iter"
          }
        ]
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
          "id": "39d9ff2c8adddcb936ae0531ee923bf503d340e3",
          "message": "feat(nextjs): graduate dynamic-segment-name-conflict to default error (#1259)\n\ndynamic-segment-name-conflict now defaults to error, joining route-collision in the error-runtime severity tier: a green next build that fallow fails because the route is a deterministic runtime crash on first request that next build lets through, so fallow is the only gate that catches it.\n\nThe detector is pure path arithmetic on the same route_tree primitive as route-collision (no AST, no heuristic to misfire), and its false-positive surface (route groups, parallel slots, per-app-root monorepo scoping) was exercised false-positive-free across a 22-project corpus, so the graduation rests on the path-deterministic primitive, not a zero-findings count. Human and markdown lines were already crash-grade, so no message change. Regenerated schema.json and re-accepted the default-derived SARIF snapshots (warning to error); the explicit sarif_mixed_severity fixture stays at warn. No JSON output schema or TS contract change.",
          "timestamp": "2026-06-15T11:56:02+02:00",
          "tree_id": "2178cc6c1393340cfa104fee6f3477efea1878b9",
          "url": "https://github.com/fallow-rs/fallow/commit/39d9ff2c8adddcb936ae0531ee923bf503d340e3"
        },
        "date": 1781517715332,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 114018,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4123840,
            "range": "± 163582",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6182414,
            "range": "± 185642",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 35714984,
            "range": "± 532136",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120310,
            "range": "± 844",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2413,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236085,
            "range": "± 41430",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1073420,
            "range": "± 9989",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1532617,
            "range": "± 43239",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 580746,
            "range": "± 20456",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4443223,
            "range": "± 54578",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4288051,
            "range": "± 75087",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2985607,
            "range": "± 10220",
            "unit": "ns/iter"
          }
        ]
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
          "id": "8c26b85369db46e2d00234d19aa8825475b07618",
          "message": "feat(extract): recover SvelteKit page.data.<key> depth in templates (#1260)\n\nPrimitive C for unused-load-data-key: a SvelteKit global page-store read in a template, `{$page.data.KEY}` (Svelte 4 `$app/stores`) or `{page.data.KEY}` (Svelte 5 `$app/state`), now recovers the nested `page.data.<key>` member access for the cross-file load-data-key detector's project-wide global-store consumer channel.\n\nThe template scanner's `remap_object_name` previously remapped only the root identifier and dropped the `.data` suffix, so the consumed key was lost. It now recovers the canonical `page.data` object, gated on the Svelte dollar-ref path (excludes Vue) and scoped to the page store's `data` member. The script context already emitted the dotted form via the visitor's recursive member-name builder, so no visit_impl.rs change was needed.\n\nInternal extraction primitive with zero finding delta, so no CHANGELOG/detection.md entry, mirroring Primitives A (#1255) and B (#1257). CACHE_VERSION 164. Findings byte-identical on all 10 benchmark fixtures and 10 real SvelteKit corpus apps; extract + core + full-workspace tests, clippy, fmt, and cargo doc all green.",
          "timestamp": "2026-06-15T12:37:14+02:00",
          "tree_id": "24635a4b4b60e55ad741c4cd99416367843eec1e",
          "url": "https://github.com/fallow-rs/fallow/commit/8c26b85369db46e2d00234d19aa8825475b07618"
        },
        "date": 1781520192809,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 90486,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3788534,
            "range": "± 286802",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5995816,
            "range": "± 162497",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33998555,
            "range": "± 570975",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121044,
            "range": "± 1351",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2445,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185335,
            "range": "± 10534",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821881,
            "range": "± 8088",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320343,
            "range": "± 26541",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533082,
            "range": "± 11260",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3300481,
            "range": "± 91712",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3334475,
            "range": "± 37057",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2236527,
            "range": "± 8244",
            "unit": "ns/iter"
          }
        ]
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
          "id": "8593f955ae31647444ec6f6f679571339cefafec",
          "message": "fix(dupes): ignore module wiring in imports filter\n\nExtend the existing ignoreImports duplicate filter beyond ES imports so re-export barrels and top-level static CommonJS require binding declarations no longer create clone groups by default.\n\nThe tokenizer now skips source-backed re-exports and whole top-level require-binding declarations while preserving runtime code, local exports, side-effect require calls, nested require calls, dynamic require arguments, and mixed declarations. The duplicate token cache version is bumped so warm caches do not reuse the old token stream.\n\nConfig schema, CLI help, changelog, agent rules, and shipped skill reference wording now describe the broader module-wiring scope.\n\nFixes #1225.",
          "timestamp": "2026-06-15T13:06:02+02:00",
          "tree_id": "34508a99dd9f5fca0403666dd7af6834922cb6dc",
          "url": "https://github.com/fallow-rs/fallow/commit/8593f955ae31647444ec6f6f679571339cefafec"
        },
        "date": 1781522082260,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 112798,
            "range": "± 1860",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4318932,
            "range": "± 179713",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6346340,
            "range": "± 251514",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 34156966,
            "range": "± 711940",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119402,
            "range": "± 1748",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2408,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236572,
            "range": "± 5856",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1070596,
            "range": "± 10546",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1526645,
            "range": "± 15958",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 580626,
            "range": "± 31219",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4383863,
            "range": "± 39606",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4418527,
            "range": "± 33688",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2991376,
            "range": "± 12998",
            "unit": "ns/iter"
          }
        ]
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
          "id": "2f636206b0f16edd8cac2f493331f2e8ba8dc322",
          "message": "fix: wire post-2.96.0 IssueKinds through LSP severity, VS Code, and CI summaries (#1262)\n\nThe cluster of new IssueKinds shipped since v2.96.0 was complete in the Rust output but under-wired in three surfaces outside the Rust drift gates.\n\nLSP: route-collision and dynamic-segment-name-conflict now emit ERROR severity to match their core default (were hardcoded WARNING), with regression tests. VS Code: the new kinds are now counted, rendered in the Issues tree, and filterable instead of silently dropped from the sidebar; dist rebuilt. CI: the five missing kinds plus route-collision and dynamic-segment-name-conflict now appear in the GitHub Action and GitLab CI summary, annotation, combined, and audit breakdowns, with jq tests added. A shared drift guard fails when a future dead-code IssueKind is absent from the summary scripts.",
          "timestamp": "2026-06-15T14:57:12+02:00",
          "tree_id": "a5e385775dd165214646469edeaa96bef41fcfdb",
          "url": "https://github.com/fallow-rs/fallow/commit/2f636206b0f16edd8cac2f493331f2e8ba8dc322"
        },
        "date": 1781528731445,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 109633,
            "range": "± 11837",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4097743,
            "range": "± 293372",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6184226,
            "range": "± 211521",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33473901,
            "range": "± 1014940",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116980,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2388,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235362,
            "range": "± 6617",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1068654,
            "range": "± 50476",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1519304,
            "range": "± 17539",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 571748,
            "range": "± 15512",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4349310,
            "range": "± 24386",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4392710,
            "range": "± 53878",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2979365,
            "range": "± 14018",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}