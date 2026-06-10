window.BENCHMARK_DATA = {
  "lastUpdate": 1781121704115,
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
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b5eee77f7f249a31be86fb211096eb7bfb8f2ef",
          "message": "fix(cli): clarify security human output\n\nRework the fallow security human renderer so the first lines explain that findings are items to check, not confirmed vulnerabilities.\n\nUse plain-language labels for evidence, code paths, import traces, and blind spots. Keep the detailed candidate framing in place for JSON, SARIF, MCP, and downstream verifier workflows.",
          "timestamp": "2026-06-09T23:09:27+02:00",
          "tree_id": "813d64a4a72043bfd14f2a0cda453f9d9f15f208",
          "url": "https://github.com/fallow-rs/fallow/commit/1b5eee77f7f249a31be86fb211096eb7bfb8f2ef"
        },
        "date": 1781040014763,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 103021,
            "range": "± 3415",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4099505,
            "range": "± 190376",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6057129,
            "range": "± 205367",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32313911,
            "range": "± 467571",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119201,
            "range": "± 844",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2340,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235150,
            "range": "± 5180",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1063824,
            "range": "± 7877",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1508935,
            "range": "± 48203",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 567281,
            "range": "± 27490",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4346836,
            "range": "± 25467",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4391987,
            "range": "± 146030",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2964643,
            "range": "± 10757",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "54ffd5d7adc99fa0d4f02e8710e9b3ce2a4d9c49",
          "message": "feat(security): gate newly reachable candidates\n\nAdd a newly-reachable mode for the security gate so CI and agents can catch existing sink candidates that become reachable from entry points. The mode compares the head tree with a materialized base tree from --changed-since and keeps the existing changed-line gate behavior unchanged.\n\nShare the base worktree helper with audit, wire the gate through CLI JSON and human output, and expose the parameter through the MCP security_candidates tool. Regenerate the published schema and TypeScript contracts.\n\nFixes #1056.",
          "timestamp": "2026-06-09T23:30:48+02:00",
          "tree_id": "9abd249d9c17118cea9123d2a6e905bd7fdc05cf",
          "url": "https://github.com/fallow-rs/fallow/commit/54ffd5d7adc99fa0d4f02e8710e9b3ce2a4d9c49"
        },
        "date": 1781041062966,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 61552,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3187606,
            "range": "± 156342",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4797879,
            "range": "± 148315",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 25747811,
            "range": "± 1412494",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 82883,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1889,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 144064,
            "range": "± 5398",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 638809,
            "range": "± 22927",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1025676,
            "range": "± 22118",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 418116,
            "range": "± 26397",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2583448,
            "range": "± 51769",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2603331,
            "range": "± 47698",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1732610,
            "range": "± 24382",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "208434a8ced4bbc3162153202858fcf956f5faf7",
          "message": "feat(mcp): add read-only Code Mode\n\nAdd code_execute, a bounded read-only JavaScript sandbox for MCP agents that need to compose multiple fallow analysis calls without shelling out repeatedly. It exposes a frozen allowlisted fallow host API, injects a default root, rejects mutating fix tools, and returns a stable mcp-code-execute/v1 envelope with call metadata and limits.\n\nThe implementation runs QuickJS with memory, stack, timeout, host-call, code-size, and output limits. Fallow subprocess output is redirected through temp files so large JSON cannot deadlock pipes, and oversized or timed-out runs fail with structured errors.\n\nDocs, telemetry allowlists, packaged agent guidance, and server schema tests were updated for the new tool. Mutating fixes remain available only through existing standalone MCP tools.",
          "timestamp": "2026-06-09T23:39:21+02:00",
          "tree_id": "a15b171324706ec165339482939e927cab5f3163",
          "url": "https://github.com/fallow-rs/fallow/commit/208434a8ced4bbc3162153202858fcf956f5faf7"
        },
        "date": 1781041548713,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 104060,
            "range": "± 1013",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4037583,
            "range": "± 176007",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6182447,
            "range": "± 209517",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33663594,
            "range": "± 776357",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119079,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2325,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235794,
            "range": "± 2250",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1062935,
            "range": "± 11286",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1514217,
            "range": "± 18622",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 570826,
            "range": "± 14919",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4349649,
            "range": "± 28112",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4392146,
            "range": "± 82548",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2965228,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "643080188c563ea9294448624d951f1d6b49603f",
          "message": "fix: emit telemetry run ids in json output",
          "timestamp": "2026-06-09T23:59:31+02:00",
          "tree_id": "a88baa8c6952b6384840dc7f107a398477ecd81d",
          "url": "https://github.com/fallow-rs/fallow/commit/643080188c563ea9294448624d951f1d6b49603f"
        },
        "date": 1781042725599,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 104775,
            "range": "± 763",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3970791,
            "range": "± 220674",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5881945,
            "range": "± 254413",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33441393,
            "range": "± 970268",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120264,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2361,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235191,
            "range": "± 2643",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1064873,
            "range": "± 24931",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1510703,
            "range": "± 16506",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 581931,
            "range": "± 14096",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4379544,
            "range": "± 125317",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4330160,
            "range": "± 60894",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2956413,
            "range": "± 20442",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b8495b2425a493247cc471921ae82a3fb534f71a",
          "message": "fix: preserve security ranking within severity tiers\n\nKeep the final security candidate order grouped by high, medium, and low severity while preserving the existing within-tier priority signals. Runtime context, entry reachability, arg-level and module-level source reachability, blast radius, boundary crossing, and dead-code context now sort before path fallback when severity ties.\\n\\nThis keeps stronger same-severity candidates ahead of weaker ones without changing schema shape or treating candidates as verified vulnerabilities.\\n\\nFixes #1133.",
          "timestamp": "2026-06-10T00:25:21+02:00",
          "tree_id": "49678e41b94cfa0c0bf6335cc5b688dfb5afbda9",
          "url": "https://github.com/fallow-rs/fallow/commit/b8495b2425a493247cc471921ae82a3fb534f71a"
        },
        "date": 1781044230490,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 104213,
            "range": "± 819",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3982449,
            "range": "± 190516",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6059586,
            "range": "± 202371",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 32545701,
            "range": "± 404539",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118123,
            "range": "± 1050",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2324,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234224,
            "range": "± 26673",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1064651,
            "range": "± 58123",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1509335,
            "range": "± 20274",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 573331,
            "range": "± 11872",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4353410,
            "range": "± 41810",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4378351,
            "range": "± 24281",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2967768,
            "range": "± 7725",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93aa49fc19329a3d901505b7c5e43a5a97d04e98",
          "message": "feat: add security JSON metadata\n\nAdd version, elapsed time, and privacy-safe config metadata to the security JSON envelope. The config block records configured and effective security rule severities plus category include and exclude filters without raw paths or config contents.\n\nEnable --explain for fallow security --format json and emit security-specific _meta through the shared typed metadata path so telemetry metadata remains compatible.\n\nFixes #1135.",
          "timestamp": "2026-06-10T00:50:39+02:00",
          "tree_id": "d1c581310fa904d7849d73b9b4b3780059e7f631",
          "url": "https://github.com/fallow-rs/fallow/commit/93aa49fc19329a3d901505b7c5e43a5a97d04e98"
        },
        "date": 1781045749997,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 103592,
            "range": "± 3244",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3992652,
            "range": "± 218551",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5918537,
            "range": "± 164218",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 33128720,
            "range": "± 895538",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116268,
            "range": "± 1359",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2314,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 235035,
            "range": "± 828",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1064788,
            "range": "± 12498",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1509913,
            "range": "± 18007",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576308,
            "range": "± 28898",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4350506,
            "range": "± 28120",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4394644,
            "range": "± 29402",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2953876,
            "range": "± 16927",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
      }
    ]
  }
}