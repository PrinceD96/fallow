window.BENCHMARK_DATA = {
  "lastUpdate": 1780507748257,
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
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d22ba3781fb7c0588c7a62acd6fc242b41ff8ce2",
          "message": "fix(extract): credit class members used via typed destructure bindings (#762)\n\nClass methods/properties called as `<local>.<method>(...)` where `<local>`\nis a typed destructured binding (`let { resultState }: Props = $props()` with\n`interface Props { resultState: ResultState }`, or an inline type literal, or a\ndestructured function parameter) were reported as `unused-class-member`. The\nvisitor only seeded `binding_target_names` for `new`-expression instances,\nsingle-identifier typed bindings, formal params, and class properties, never\nfor destructured bindings, so neither script-level calls nor Svelte/Vue\ntemplate member access credited the class members.\n\nTyped destructure bindings now populate `binding_target_names`: inline type\nliterals resolve in place; named interface / object-type-alias references defer\nto a finalize step that resolves through a module-scope property-type map\n(source-order-independent, since interfaces hoist). Wired into the SFC path\nbefore the template scan reads the targets. Resolution is type-driven, so it\nalso covers plain TypeScript and Vue. Conservative: only bare single-name\nproperty types resolve; genuinely unused members are still reported.\n\nBumps the extract CACHE_VERSION (102 -> 103) because the resulting\nmember_accesses change.\n\nFixes #752",
          "timestamp": "2026-05-28T20:45:49Z",
          "tree_id": "d51918e2852f050046c6d27013648ee06ecfc900",
          "url": "https://github.com/fallow-rs/fallow/commit/d22ba3781fb7c0588c7a62acd6fc242b41ff8ce2"
        },
        "date": 1780001452777,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47832,
            "range": "± 2170",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3803558,
            "range": "± 208333",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5880196,
            "range": "± 181885",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29212026,
            "range": "± 387319",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120199,
            "range": "± 2648",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2380,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184743,
            "range": "± 20928",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823165,
            "range": "± 7432",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1322360,
            "range": "± 20915",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532203,
            "range": "± 16428",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3323268,
            "range": "± 25050",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3350684,
            "range": "± 29493",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2234441,
            "range": "± 5723",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae4801953a1bf07f585b5795592671c4840f7451",
          "message": "fix: activate Danger plugin from dangerfiles\n\n* chore: open issue 758 implementation branch\n\n* fix: activate Danger plugin from dangerfiles",
          "timestamp": "2026-05-28T22:51:43+01:00",
          "tree_id": "7022d2bd7cf381aa7dca43696f7c41cd6ceb31d9",
          "url": "https://github.com/fallow-rs/fallow/commit/ae4801953a1bf07f585b5795592671c4840f7451"
        },
        "date": 1780005399385,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63985,
            "range": "± 893",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3948120,
            "range": "± 226871",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5776721,
            "range": "± 199676",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27616650,
            "range": "± 656308",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118869,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2225,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 231281,
            "range": "± 3619",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1046495,
            "range": "± 16999",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1496167,
            "range": "± 16100",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 566751,
            "range": "± 11973",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4262676,
            "range": "± 34821",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4292817,
            "range": "± 115541",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2903533,
            "range": "± 11614",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a48fa7e875adb5cbf80fd7e003319568ca4a5e06",
          "message": "test(cli): guard credential redaction paths\n\nAdds regression guards for authenticated ureq paths that must pass transport errors through sanitize_network_error.\n\nAdds source-level guards that known credential-bearing CLI argument and request structs keep manual Debug implementations that redact token fields.\n\nRefs #476.",
          "timestamp": "2026-05-28T23:05:58+01:00",
          "tree_id": "aa3336e2d564054eb917ffa26e76ad6fe7b69708",
          "url": "https://github.com/fallow-rs/fallow/commit/a48fa7e875adb5cbf80fd7e003319568ca4a5e06"
        },
        "date": 1780006254168,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 62710,
            "range": "± 1067",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3949516,
            "range": "± 193380",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5796136,
            "range": "± 222226",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27505426,
            "range": "± 434502",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118409,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2221,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 231514,
            "range": "± 27818",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1049221,
            "range": "± 36387",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1495463,
            "range": "± 15836",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 570041,
            "range": "± 13136",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4250676,
            "range": "± 22348",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4286508,
            "range": "± 49858",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2914309,
            "range": "± 2831",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a1efb9bfce7a5e177c6a1bd008ce4365056a365",
          "message": "feat(health): add coverage intelligence verdict (#768)\n\n* chore: open issue #507 implementation branch\n\n* feat: add coverage intelligence verdict\n\n* fix: tighten coverage intelligence output",
          "timestamp": "2026-05-29T07:01:29+01:00",
          "tree_id": "9045cdfa4e17ce2e66c0b4ce5ca3d3f0d8073fbb",
          "url": "https://github.com/fallow-rs/fallow/commit/7a1efb9bfce7a5e177c6a1bd008ce4365056a365"
        },
        "date": 1780034786398,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 54167,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3197129,
            "range": "± 99768",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4717264,
            "range": "± 109839",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22010569,
            "range": "± 553841",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 103640,
            "range": "± 2596",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3093,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 158059,
            "range": "± 3841",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 720803,
            "range": "± 7731",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1201708,
            "range": "± 19312",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 463548,
            "range": "± 7732",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2892203,
            "range": "± 19094",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2964894,
            "range": "± 95202",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1971402,
            "range": "± 30270",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd359f719bf1f512f32aed3bad6562fa6c5af0a6",
          "message": "fix(extract): preserve container source positions\n\nPreserve source-authored spans when MDX, Astro, Vue/Svelte SFC, and CSS/SCSS extraction feed generated fragments through the JavaScript parser. The shared remapper translates parsed spans back to original container byte offsets before module info is finalized, while intentionally synthetic reachability edges remain unpositioned.\n\nAlso credit Svelte 5 $derived(new Class()) and $derived.by(...) template member access through the derived class instance.\n\nCloses #445.",
          "timestamp": "2026-05-29T06:43:04Z",
          "tree_id": "b01bed3d94bec33fd8e37788dabe070966551de5",
          "url": "https://github.com/fallow-rs/fallow/commit/bd359f719bf1f512f32aed3bad6562fa6c5af0a6"
        },
        "date": 1780037281138,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 65971,
            "range": "± 1105",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4183825,
            "range": "± 176840",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6132230,
            "range": "± 173389",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28272618,
            "range": "± 618868",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119948,
            "range": "± 3423",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2277,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232913,
            "range": "± 2466",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1053548,
            "range": "± 85096",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1504242,
            "range": "± 16060",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 571602,
            "range": "± 12755",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4280731,
            "range": "± 28469",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4297874,
            "range": "± 38013",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2922799,
            "range": "± 11022",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51e5aa2199c98611d72f84f7506e61e655b2b75c",
          "message": "test(cli): snapshot coverage-intelligence render + drop stale dead_code allow (#771)\n\n* chore(health): drop stale dead_code allow on includes_crap\n\nExceededThreshold::includes_crap carried an #[allow(dead_code)] whose doc\ncomment claimed \"the binary target has no direct caller today\". That is no\nlonger true: baseline.rs, finding.rs, health/mod.rs, and the new\ncoverage_intelligence.rs all call it on the binary side, so the lint cannot\nfire. Remove the attribute and the stale rationale, aligning the doc comment\nwith its includes_cyclomatic / includes_cognitive siblings. Clippy stays\nclean with -D warnings.\n\n* test(cli): snapshot coverage-intelligence render across formats\n\nAdd a HealthReport fixture that carries a populated coverage_intelligence\nblock (a risky changed hot path plus a high-confidence delete candidate, with\none ambiguous match skipped) alongside runtime coverage, then render it\nthrough the public build_health_json / build_health_markdown /\nbuild_health_sarif / build_health_codeclimate entry points and snapshot each.\n\nPreviously the coverage-intelligence rendering was exercised only by\nper-format helper unit tests; these committed snapshots lock the live combined\nwire format across all four string-returning formats so future changes to the\nblock surface as reviewable snapshot diffs. The compact path keeps its\nexisting dedicated unit test (it prints to stdout rather than returning a\nstring).",
          "timestamp": "2026-05-29T06:56:51Z",
          "tree_id": "f11e27302b06d0014a2552c15df217e69c5287da",
          "url": "https://github.com/fallow-rs/fallow/commit/51e5aa2199c98611d72f84f7506e61e655b2b75c"
        },
        "date": 1780038121630,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47240,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3894310,
            "range": "± 164963",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5852021,
            "range": "± 199491",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29260396,
            "range": "± 473614",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108704,
            "range": "± 654",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2339,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185771,
            "range": "± 18233",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823304,
            "range": "± 7221",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1327226,
            "range": "± 17797",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 537832,
            "range": "± 11380",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3323592,
            "range": "± 34717",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3352468,
            "range": "± 41529",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2231864,
            "range": "± 6783",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a3791a07ff9d064cd7bf2f568e06c982ccb62cc",
          "message": "fix: harden dupes deep-dive handles (#769)\n\nReport-scoped dupes fingerprint assignment preserves short dup:<8hex> handles by default and widens only colliding groups, routed through human output, JSON wrappers, grouped output, clone-family nested groups, and trace lookup so ambiguous short handles never resolve to the wrong group.\n\nTightens suggested_name selection with deterministic scoring, structured-name preference, near-tie abstention, and stronger margins for plain single-token names. Updates MCP/README/CHANGELOG/schema/generated TypeScript contract wording for widened fingerprints.\n\nCloses #759",
          "timestamp": "2026-05-29T07:08:55Z",
          "tree_id": "18a37376184019ab08a7bae032649f590f718d3d",
          "url": "https://github.com/fallow-rs/fallow/commit/0a3791a07ff9d064cd7bf2f568e06c982ccb62cc"
        },
        "date": 1780038833916,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 52926,
            "range": "± 664",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3219802,
            "range": "± 141705",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4703519,
            "range": "± 152031",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23135526,
            "range": "± 514585",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110868,
            "range": "± 3533",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3060,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157883,
            "range": "± 3589",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 718724,
            "range": "± 12532",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1199418,
            "range": "± 30761",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 469926,
            "range": "± 15808",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2979276,
            "range": "± 48147",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3004561,
            "range": "± 31949",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1960731,
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
          "id": "de3503081b23a8ba6d0962a47424ed74174eec42",
          "message": "feat(telemetry): opt-in agent and CI workflow telemetry\n\nOpt-in, off-by-default product telemetry for improving agent, CI, MCP, and editor workflows.\n\nAdds `fallow telemetry status|enable|disable|inspect`, coarse allowlisted workflow events (never code, paths, names, config, or raw env), `FALLOW_AGENT_SOURCE` attribution, and a non-blocking best-effort upload that never affects command output or exit code. DO_NOT_TRACK honored. Docs and drift-guard tests included.",
          "timestamp": "2026-05-29T07:37:47Z",
          "tree_id": "292f3789fda0ba9eda79e82b87d2a0470cec1e0b",
          "url": "https://github.com/fallow-rs/fallow/commit/de3503081b23a8ba6d0962a47424ed74174eec42"
        },
        "date": 1780040576603,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47302,
            "range": "± 1237",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3792789,
            "range": "± 151592",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5835560,
            "range": "± 173639",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29024159,
            "range": "± 370665",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116213,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2289,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185763,
            "range": "± 13739",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 821028,
            "range": "± 5185",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317307,
            "range": "± 22072",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 530921,
            "range": "± 33615",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3312384,
            "range": "± 42714",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3361141,
            "range": "± 25884",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2236802,
            "range": "± 15485",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2221f056c19880ef70edad19a5b0c3f1262fded3",
          "message": "feat(plugins): add Velite plugin (#774)\n\n* feat(plugins): add Velite plugin\n\nDetect Velite content-pipeline projects (velite dependency or\nvelite.config.{ts,mts,cts,js,mjs,cjs}). Keep the config and generated\n.velite output reachable, traverse the hidden .velite dir, and parse\ndefineConfig/defineCollection to mark content roots (root default\ncontent, joined with each collection pattern) as support entry points\nso Velite-managed markdown/MDX content is not reported as unused.\nCredit velite as a tooling dependency.\n\nRefs #609\n\n* test(plugins): add Velite integration fixture (#609)\n\npetersen-pack-shaped fixture: velite.config.ts, content/blog content,\nand generated .velite output stay credited; an MDX file outside the\ncontent root and a plain orphan stay reported; left-pad stays an\nunused dev dependency. Verified regression-strength (fails when the\nplugin registration is removed).\n\n* fix(plugins): refine Velite output-data + negation handling; document\n\nAddress review of the Velite plugin: fall back to the content-root glob\nwhen only negation patterns survive (not just when no pattern parses),\nand compare the raw output.data value against the default before\nnormalizing so a monorepo config that spells out the default .velite\ndoes not add a redundant always-used entry. Add tests for negation-only\nfallback, default output.data in a workspace, and config-relative custom\noutput.data.\n\nDocument the plugin in detection.md and plugins.md (rich-config count\n25 to 26, total 110 to 115), bump the README plugin count to 115, and\nadd a CHANGELOG entry.\n\nVerified on BlakePetersen/petersen-pack: velite.config.ts and 43\ncontent MDX files flip from unused to credited, zero new findings.\n\nRefs #609",
          "timestamp": "2026-05-29T07:50:40Z",
          "tree_id": "1e782fab9918555ff9e31de0753774745fddcc47",
          "url": "https://github.com/fallow-rs/fallow/commit/2221f056c19880ef70edad19a5b0c3f1262fded3"
        },
        "date": 1780041344257,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 53521,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3384957,
            "range": "± 152136",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4907282,
            "range": "± 260850",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23749783,
            "range": "± 793409",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 108937,
            "range": "± 908",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3030,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 157545,
            "range": "± 3759",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 714973,
            "range": "± 14799",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1197167,
            "range": "± 13511",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 477813,
            "range": "± 17866",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2930567,
            "range": "± 25382",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3079276,
            "range": "± 90421",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1959732,
            "range": "± 7530",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56a30b5f529fbbfa40871b6e783548c75f0d84a9",
          "message": "feat(core): enforce git-only process spawning on the analysis path (#773)\n\n* feat(core): enforce git-only process spawning on the analysis path\n\nfallow's static analysis never executes the analyzed project's code; the\nonly external program the analysis path runs is git. This makes that\ninvariant machine-checkable instead of a prose promise.\n\nAdds fallow_core::spawn::git, the single sanctioned caller of\nstd::process::Command::new in fallow-core/extract/graph, and routes the\nexisting changed_files and churn git invocations through it. A new\n.clippy.toml disallowed-methods ban on std::process::Command::new is set\nto allow workspace-wide (the CLI and MCP crates legitimately spawn git\nworktrees, the coverage sidecar, and subprocesses off the analysis path)\nand re-denied at the crate root of fallow-core/extract/graph via\ncfg_attr(not(test)), so any new process spawn on the analysis path fails\nthe build and the author is pointed at the wrapper. Test helpers that\nshell out to git to build fixtures stay exempt.\n\nA new safe_analysis integration test is the runtime backstop: it runs\nanalysis on a project whose package.json declares preinstall/postinstall/\nprepare scripts that would write a sentinel file, and asserts the sentinel\nnever appears (fallow reads package.json as data, it never invokes a\npackage manager).\n\n* chore(security): harden build-time supply chain and document the trust boundary\n\nSets `yanked = \"deny\"` in deny.toml so a yanked crate (an early signal of\na withdrawn or compromised release) fails the cargo-deny gate, alongside the\nexisting advisories-deny-by-default, wildcard ban, and unknown-source ban.\nCargo build scripts and proc-macros run arbitrary code at build time on the\nrunner that signs fallow's binaries, and npm --ignore-scripts does nothing\nfor that Cargo-side vector, so cargo-deny is the gate for it.\n\nDocuments the build-time trust boundary in SECURITY.md as a section distinct\nfrom the existing runtime threat model, and notes that the runtime\n\"does not execute user code\" property is now compile-time enforced via the\nanalysis-crate Command::new ban introduced in the preceding commit.\n\n* test(core): make the safe-analysis non-vacuity assertion graph-dependent\n\nMake index.ts the package `main` so it is an entry point, then assert\nused.ts is reachable (NOT unused) in addition to orphan.ts being unused.\nThe used.ts assertion specifically requires the import graph to have been\ntraversed; the prior orphan-only assertion passed even with no entry points\n(all files unreachable), so it did not actually prove the pipeline ran.\n\n* docs(core): document the spawn::git process-spawn boundary in the crate rule\n\n* refactor(core): use #[expect] over #[allow] on the spawn::git guard suppression\n\nThe lint fires (Command::new is actually called), so #[expect] is fulfilled\nin both the non-test deny config and the test allow config. Per\n.claude/rules/code-quality.md, #[allow] is reserved for cases where #[expect]\nwould be unfulfilled; this is not one.\n\n* docs(core): use a colon separator in the spawn.rs rule entry (no em-dash)",
          "timestamp": "2026-05-29T08:10:09Z",
          "tree_id": "6989cc0986a9e5b9b9333ddb9ebd1f83dfc876a4",
          "url": "https://github.com/fallow-rs/fallow/commit/56a30b5f529fbbfa40871b6e783548c75f0d84a9"
        },
        "date": 1780042510475,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46975,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3983770,
            "range": "± 165339",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5855148,
            "range": "± 188382",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29375731,
            "range": "± 961962",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 122111,
            "range": "± 1990",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2304,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 184920,
            "range": "± 4138",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820647,
            "range": "± 58996",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1318456,
            "range": "± 21965",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535538,
            "range": "± 7371",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3310903,
            "range": "± 91460",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3351596,
            "range": "± 34435",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2263335,
            "range": "± 13176",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49b820fde252762f4fb4b74a2acee76f9cdea575",
          "message": "refactor(core,lsp): unify plugin-result merging via field-exhaustive merge_into (#776)\n\nReplace the two hand-maintained field-by-field merge sites with merge_into\nmethods that exhaustively destructure their own struct, so adding a field\nbecomes a compile error in the merge logic instead of a silent divergence\nbetween the CLI and the LSP.\n\n- AggregatedPluginResult::merge_into + apply_workspace_prefix (core): the\n  workspace merge loop in run_plugins now prefixes each workspace result then\n  folds it in via the single union method. Pre-refactor behavior preserved\n  exactly: workspace config_patterns / used_class_members / scss_include_paths\n  (populated by run_workspace_fast but never merged) stay dropped, and\n  script_used_packages (never populated there) is cleared too so a future\n  change cannot silently alter root script-credit. Whether the populated-field\n  drops are latent bugs is tracked in #772.\n- AnalysisResults::merge_into (types): the LSP merge_results becomes a thin\n  wrapper delegating to it.\n- merge_test_source_with_all_fields drops ..Default::default() so the test\n  fixture is also a compile-time field-coverage gate.\n- Re-export FeatureFlag / FlagKind / FlagConfidence from fallow_core::results\n  so the feature_flags element type is nameable by consumers.\n\nPure refactor: no change to merged outputs (all benchmark fixtures\nbyte-identical OLD vs NEW).\n\nCloses #444.",
          "timestamp": "2026-05-29T09:14:41Z",
          "tree_id": "a57b1fcb7b92649f6808b949f48161f317161131",
          "url": "https://github.com/fallow-rs/fallow/commit/49b820fde252762f4fb4b74a2acee76f9cdea575"
        },
        "date": 1780047152338,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63954,
            "range": "± 962",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4028629,
            "range": "± 195764",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5841071,
            "range": "± 237476",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28247775,
            "range": "± 454418",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112715,
            "range": "± 1143",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2296,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237528,
            "range": "± 1791",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1078035,
            "range": "± 16308",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1528709,
            "range": "± 13944",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572682,
            "range": "± 26493",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4386882,
            "range": "± 40613",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4282851,
            "range": "± 33463",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2994929,
            "range": "± 5385",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9af2175229a48f92e08f38e0a03eddbe47792a25",
          "message": "feat(config): warn when multiple config files coexist in one directory (#780)\n\nfind_and_load picks the first of .fallowrc.json > .fallowrc.jsonc >\nfallow.toml > .fallow.toml per directory. Previously a stale lower-precedence\nconfig (left over from a migration or a partial fallow init) was silently\nshadowed, so output looked correct but came from the wrong source.\n\nNow config discovery emits a deduped tracing::warn! (visible on stderr at the\ndefault level) naming the loaded file and the lower-precedence file(s) it\nignored, mirroring the existing warn_on_unknown_rule_keys path (process-wide\nOnceLock dedupe keyed on the canonical directory, thread-local test capture\nwith capture-before-dedupe). It fires once per directory per run; an explicit\n--config <path> performs no discovery and never warns.\n\nDocs and the fallow config help text now state that .fallowrc.json accepts\nJSONC and .fallowrc.jsonc is identical (the extension is only an editor hint),\nand document the first-match-wins precedence ladder.\n\nCloses #458",
          "timestamp": "2026-05-29T10:35:55Z",
          "tree_id": "a516a9285d0c810023508297377cc006b1fa1026",
          "url": "https://github.com/fallow-rs/fallow/commit/9af2175229a48f92e08f38e0a03eddbe47792a25"
        },
        "date": 1780051995616,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47302,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3999838,
            "range": "± 192385",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5998011,
            "range": "± 231941",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30345420,
            "range": "± 507852",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117334,
            "range": "± 870",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2296,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185330,
            "range": "± 1394",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819987,
            "range": "± 6545",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320732,
            "range": "± 17766",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 529451,
            "range": "± 18437",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3326738,
            "range": "± 28799",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3342522,
            "range": "± 32085",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2226665,
            "range": "± 13194",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "4ff2796af4fe081fbe4aad2a25363c67df1cd359",
          "message": "refactor(v8-coverage): document oxc_coverage_v8 boundary, drop dead emitter (#784)\n\nfallow-v8-coverage and oxc_coverage_v8 solve inverse problems in opposite\nunit spaces: fallow maps real Node V8 dumps in UTF-16-code-unit space, while\noxc_coverage_v8 fills an AST-built Istanbul FileCoverage in byte space. They\nare intentionally not consolidated; record the rationale in ADR-010.\n\nReal Node (v22) emits coverage offsets in UTF-16 code units (a function\npreceded by an emoji on the same line is reported at the UTF-16 offset, not\nthe byte offset), so fallow's LineOffsetTable is correct and a byte model is\nnot. Harden the UTF-16 conformance test to assert a within-line column, where\nthat distinction is observable, instead of a line start.\n\nRemove the crate's never-consumed forward emitter (normalize_script and its\nIstanbulFileCoverage / IstanbulFunction / IstanbulRange output types). The CLI\nbuilds its own remapped output from the input structs plus LineOffsetTable, and\nCRAP scoring uses a separate local IstanbulFileCoverage, so these were dead\nwithin fallow. Keep IstanbulPosition (LineOffsetTable::position's return type)\nand retarget the null-column regression test onto it directly.\n\nNo change to the CLI's behavior, output, or the runtime-coverage wire format.\n\nFixes #509",
          "timestamp": "2026-05-29T11:45:24Z",
          "tree_id": "7c4986fe87eb66113ccf89c785b01da185440a8c",
          "url": "https://github.com/fallow-rs/fallow/commit/4ff2796af4fe081fbe4aad2a25363c67df1cd359"
        },
        "date": 1780056155808,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63547,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4075735,
            "range": "± 210839",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5957613,
            "range": "± 230627",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28558333,
            "range": "± 661555",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119336,
            "range": "± 1449",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2273,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237220,
            "range": "± 3514",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1075686,
            "range": "± 17863",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1530232,
            "range": "± 102044",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574799,
            "range": "± 27921",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4389648,
            "range": "± 38608",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4368965,
            "range": "± 49346",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2999727,
            "range": "± 6850",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5bc8c5c64989d04f1c2310f8bdfc7a62a6de312",
          "message": "feat(flags): surface configuration hint on empty fallow flags output (#785)\n\nWhen `fallow flags` finds nothing, the human-output empty line now appends\na discovery hint: the built-in env prefixes and SDK providers fallow scanned\nfor (sourced from crates/extract/src/flags.rs, not hardcoded), plus pointers\nto flags.sdkPatterns / flags.configObjectHeuristics and the docs URL. Users\nwho already configured custom flags.* patterns get a single terse line\nacknowledging their config instead of the discovery block.\n\nJSON / SARIF / compact / markdown / codeclimate output is unchanged; no\nschema bump. --quiet still suppresses the whole block.\n\nRefs #562",
          "timestamp": "2026-05-29T11:48:11Z",
          "tree_id": "1959f593bce693e2dc1dbc4c581554ba6f70ddc9",
          "url": "https://github.com/fallow-rs/fallow/commit/b5bc8c5c64989d04f1c2310f8bdfc7a62a6de312"
        },
        "date": 1780056522164,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46930,
            "range": "± 520",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3707864,
            "range": "± 149361",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5853978,
            "range": "± 285959",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29964524,
            "range": "± 813276",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116763,
            "range": "± 2153",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2296,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185052,
            "range": "± 12980",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 818338,
            "range": "± 7149",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1315767,
            "range": "± 15899",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 531119,
            "range": "± 13324",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3299009,
            "range": "± 22971",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3338136,
            "range": "± 29269",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2230663,
            "range": "± 9117",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e73fdd8b0b06b973203ee55c3f404e37e56459e",
          "message": "fix(plugins): add rspress plugin crediting @theme virtual module (#787)\n\nrspress exposes its theme layer through the `@theme` build-time virtual\nmodule (and `@theme/<component>` subpaths), the same convention as\nDocusaurus. fallow had no rspress plugin, so importing `@theme` from docs\nor source surfaced as an unlisted-dependency. A new minimal rspress plugin\nactivates on `rspress` or any `@rspress/`-scoped dependency and contributes\n`@theme/` and `@theme-original/` as virtual_module_prefixes(), covering both\nunlisted-dependency and unresolved-import for the bare specifier and its\nsubpaths. Real scoped packages like `@theme-ui/core` are unaffected.\nDocusaurus already covered bare `@theme` via the existing `@theme/` entry.\n\nFixes #756",
          "timestamp": "2026-05-29T12:09:59Z",
          "tree_id": "f025e6d85827d5ffb7abb89b5e90e040676928f1",
          "url": "https://github.com/fallow-rs/fallow/commit/5e73fdd8b0b06b973203ee55c3f404e37e56459e"
        },
        "date": 1780057624522,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63301,
            "range": "± 995",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4071191,
            "range": "± 193171",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5911098,
            "range": "± 196471",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27574531,
            "range": "± 425617",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119216,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2234,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236748,
            "range": "± 3497",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1074390,
            "range": "± 9150",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1522690,
            "range": "± 24142",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577514,
            "range": "± 8810",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4349144,
            "range": "± 28906",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4386288,
            "range": "± 41785",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2982856,
            "range": "± 6251",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "7c3bbc09fd78a9393826abbb548855e21137f94f",
          "message": "feat(impact): add `fallow impact` value report (v1: surfacing, trend, containment) (#788)\n\n* feat(impact): add `fallow impact` value report (v1: surfacing, trend, containment)\n\nAdds an opt-in, local-only `fallow impact` command reporting what fallow has\ndone for you: how many issues it is surfacing, the trend since the last\nrecorded run, and how many commits its pre-commit gate blocked then cleared.\n\nHistory accrues in a single rolling .fallow/impact.json (gitignored) on\n`fallow audit` runs, once enabled via `fallow impact enable`. Writes are\nbest-effort and never change a command's exit code or output. The generated\npre-commit hook now tags gate runs with --gate-marker pre-commit so\nblocked-then-fixed commits are recorded as contained.\n\nPer-finding resolved/suppressed/moved attribution is intentionally deferred\nuntil active-suppression state can be captured, so a suppressed finding is\nnever miscounted as a win.\n\n* fix(impact): address review (top-level help, JSON schema surface, lint hygiene, docs)\n\nResolves the pre-ship and parallel review findings on the impact v1 feature:\n\n- Add `impact` to the top-level --help command listing + extend the\n  help-grouping test, so the new stable command is discoverable.\n- Register the `fallow impact --format json` shape in the published output\n  schema: a FallowOutput::Impact variant plus JsonSchema-derived ImpactReport,\n  ImpactCounts, TrendSummary, ImpactTrendDirection, and ContainmentEvent\n  definitions, wired into schema-emit. Regenerated docs/output-schema.json and\n  the VS Code + npm TypeScript contracts; drift and path-field gates pass.\n- Swap the three new lint suppressions from #[allow] to #[expect] (the\n  expectations are fulfilled under -D warnings).\n- Document the command in CHANGELOG, README, CLAUDE.md, and the cli-crate rules.\n\n* fix(impact): atomic store writes, scope-honest labels, unified trend vocab, latest sha\n\nAddresses the post-implementation panel review:\n\n- Persist the rolling store with `fallow_config::atomic_write` (tempfile +\n  rename) instead of plain `fs::write`, so a crash or concurrent writer can no\n  longer leave a torn file that the next load treats as corrupt and silently\n  disables tracking on. A present-but-unparsable store now warns (once) and\n  degrades, rather than silently resetting; the corrupt file is left on disk.\n- Relabel the report: the per-run counts are CHANGED-FILE scoped (each record\n  comes from a `fallow audit` run whose default new-only gate counts only\n  changed files), so 'SURFACING N issues you can act on' becomes\n  'LATEST RUN (changed files): N flagged', and the trend is qualified as\n  changed-file scope across the last two runs. Avoids presenting a per-diff\n  number as a project total.\n- Use one human-facing trend vocabulary (down/up/flat) in both the text and\n  markdown renderers via a shared `trend_arrow`; the JSON enum stays the\n  machine form.\n- Add `latest_git_sha` to the JSON report so a consumer can tell which commit\n  the counts belong to. Schema and TS contracts regenerated.\n\n* chore(security): re-bless agent-file baseline for impact docs\n\nThe impact feature added an `impact.rs` entry to `.claude/rules/cli-crate.md`\nand registered the module in `CLAUDE.md`'s crate map. Update the blessed\nhashes in scripts/agent-files.sha256 so the agent-file hidden-unicode guard\nstops flagging these two legitimate edits as drift once they land on main.",
          "timestamp": "2026-05-29T12:41:59Z",
          "tree_id": "5fb455fbfe6441394218714ca33b920cf64cd900",
          "url": "https://github.com/fallow-rs/fallow/commit/7c3bbc09fd78a9393826abbb548855e21137f94f"
        },
        "date": 1780059584261,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63583,
            "range": "± 690",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3705101,
            "range": "± 185318",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5768120,
            "range": "± 256124",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27686034,
            "range": "± 412410",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115745,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2217,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236382,
            "range": "± 2319",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1071092,
            "range": "± 12356",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1525049,
            "range": "± 18209",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 573543,
            "range": "± 26276",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4368766,
            "range": "± 33011",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4406672,
            "range": "± 41756",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2976698,
            "range": "± 6735",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3afc7256c1d353fc9c3331a637c944e887373902",
          "message": "feat(cli): make fallow health a usable CI gate (--min-score authoritative, --report-only) (#790)\n\nfallow health previously exited 1 whenever any above-threshold function\nexisted, regardless of the health score, so --min-score only added a second\nfail condition and 'fallow health --min-score 0' still exited 1. Health could\nonly ever be advisory.\n\nWhen --min-score N is set it is now the authoritative complexity gate: the run\nexits 0 when score >= N (so --min-score 0 always passes) and complexity findings\nare demoted to informational while still printed. --min-severity composes with\n--min-score (fail if either gate trips). Plain 'fallow health' with no gate flag\nkeeps the back-compatible behavior of exiting 1 on any finding.\n\nNew --report-only flag prints the score and findings but never fails CI (always\nexit 0); it is mutually exclusive with --min-score / --min-severity (exit 2). The\nruntime-coverage and coverage-gap gates stay independent explicit opt-ins. The\n--min-score help text now signposts 'fallow audit --gate new-only' for gating on\nnewly-introduced complexity.\n\nFixes #786",
          "timestamp": "2026-05-29T12:52:02Z",
          "tree_id": "78bbc7818c0d50a844deed514ced3644453ff49e",
          "url": "https://github.com/fallow-rs/fallow/commit/3afc7256c1d353fc9c3331a637c944e887373902"
        },
        "date": 1780060168420,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 65096,
            "range": "± 2208",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4108980,
            "range": "± 154476",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6031899,
            "range": "± 283601",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28576293,
            "range": "± 671215",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 120330,
            "range": "± 3763",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2228,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 236865,
            "range": "± 5320",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1071499,
            "range": "± 8472",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1527346,
            "range": "± 20801",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 574625,
            "range": "± 31113",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4374618,
            "range": "± 26086",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4388974,
            "range": "± 39650",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2987684,
            "range": "± 22672",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3297be51072765aab0cdd9bf6fab7acd88bf152e",
          "message": "fix(impact): gitignore the store on enable; reject unsupported formats (#795)\n\nTwo gaps found smoke-testing `fallow impact`:\n\n`fallow impact enable` created `.fallow/impact.json` but did not ensure\n`.fallow/` was gitignored. In a project that had not run `fallow init` (which\ndoes add the entry), a routine `git add -A` would stage and push the store,\ncontradicting the feature's local-only / \"never uploaded\" promise that the\nenable message itself prints. `enable` now appends `.fallow/` to `.gitignore`\nbest-effort (idempotent, and a no-op when the entry already exists), so the\nguarantee holds at the moment the store is created regardless of caller. The\nhelper is self-contained in impact.rs because that module is in the library\ncrate while setup_hooks (which has the equivalent) is binary-only.\n\n`fallow impact --format sarif|compact|codeclimate|badge|...` silently fell back\nto the human report, so a CI step requesting a machine format got human text it\ncould not parse. The format dispatch is now exhaustive and rejects unsupported\nformats with exit 2 and a clear message, matching `fallow explain`. The\nsupported set (human, json, markdown) is unchanged.\n\nBoth paths are covered by a new unit test (enable gitignores, idempotent) and\nverified end-to-end.",
          "timestamp": "2026-05-29T18:37:19Z",
          "tree_id": "3ac9d81a9ade3541eb09725e8f4907755df04a24",
          "url": "https://github.com/fallow-rs/fallow/commit/3297be51072765aab0cdd9bf6fab7acd88bf152e"
        },
        "date": 1780080960089,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47128,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3902799,
            "range": "± 162680",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5851201,
            "range": "± 173877",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29238548,
            "range": "± 700074",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 114946,
            "range": "± 643",
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
            "value": 184977,
            "range": "± 1863",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 819331,
            "range": "± 4110",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1317616,
            "range": "± 16497",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 534603,
            "range": "± 13869",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3307074,
            "range": "± 29211",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3338126,
            "range": "± 39739",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2275414,
            "range": "± 17311",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "7f9cda0deff535e29c3fadb2521a802e8ab8ac3b",
          "message": "feat(cli): upload-static-findings subcommand for the source-evidence viewer (#796)\n\n* feat(cli): upload-static-findings subcommand for source-evidence viewer\n\nAdd `fallow coverage upload-static-findings`, the CLI emit for the\nPOST /v1/coverage/:repo/static-findings cloud endpoint (ADR 024). Runs\nfallow static analysis and uploads unused_export + dead_file verdicts\nkeyed to a git SHA, mirroring upload-inventory's structure.\n\nFindings are replace-by-SHA: each run sends the complete set for the\nSHA, so an empty set is a valid clearing (no empty-result rejection,\nunlike upload-inventory). filePath is repo-relative POSIX so it lines\nup with source-map sources in the viewer. The error classifier maps\nHTTP 413 (not 400) to PayloadTooLarge for the 200,000-finding cap.\nAuth uses a live FALLOW_API_KEY; the unauthorized hint calls out that\na publishable ingest key is rejected here.\n\n* style(cli): rustfmt upload-static-findings",
          "timestamp": "2026-05-29T18:49:39Z",
          "tree_id": "bb13b89cd7711e5c0a5cea454fe3f3d814cae1ab",
          "url": "https://github.com/fallow-rs/fallow/commit/7f9cda0deff535e29c3fadb2521a802e8ab8ac3b"
        },
        "date": 1780081897592,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 64285,
            "range": "± 1170",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4065573,
            "range": "± 175488",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5938968,
            "range": "± 182863",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27590453,
            "range": "± 412024",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118685,
            "range": "± 931",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2229,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234911,
            "range": "± 6877",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1071641,
            "range": "± 19831",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1535793,
            "range": "± 13083",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 577525,
            "range": "± 11168",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4381573,
            "range": "± 31952",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4402876,
            "range": "± 102252",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2982529,
            "range": "± 26098",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "20fe77f83733dc5e3bbf36135f7e0c2b4522a668",
          "message": "fix(health): surface churn-hotspot window in metrics line and markdown vital signs (#799)\n\nThe hotspot analysis window (default 6m, --since) only appeared in the\n'Hotspots (N files, since 6 months)' section header, which is omitted\nentirely at zero hotspots. The orientation 'Metrics:' line read\n'0 churn hotspots' with no anchor, so a reader could not tell zero in the\nwindow from zero ever, and the window vanished on healthy repos.\n\nAppend '(since <window>)' to the hotspot segment of the human Metrics line\nand to the markdown Vital Signs row label, sourced from\nreport.hotspot_summary.since. Falls back to no suffix when the churn\npipeline did not run (hotspot_summary absent). Human and markdown output\nonly; JSON/SARIF/compact/CodeClimate unchanged.\n\nCloses #552",
          "timestamp": "2026-05-29T19:14:07Z",
          "tree_id": "9120782b369f89f05711c11777286a4e7dd7477a",
          "url": "https://github.com/fallow-rs/fallow/commit/20fe77f83733dc5e3bbf36135f7e0c2b4522a668"
        },
        "date": 1780083244107,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 36391,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3210443,
            "range": "± 148385",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4778599,
            "range": "± 186744",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 23679438,
            "range": "± 824765",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 84021,
            "range": "± 2283",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1808,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143900,
            "range": "± 15589",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 639788,
            "range": "± 115212",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1027723,
            "range": "± 22941",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 424403,
            "range": "± 16734",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2603573,
            "range": "± 188158",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2621010,
            "range": "± 76782",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1748255,
            "range": "± 14963",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1eb8b5d7deeedbcf3697421ac5fba0150c227b8f",
          "message": "fix(impact): apply post-merge review polish (#798)\n\n* fix(impact): apply post-merge review polish\n\nSix findings from the post-merge team review of the (unreleased) impact\nfeature:\n\n1. ImpactReport now carries a required schema_version on the JSON wire, typed\n   as its own ImpactReportSchemaVersion discriminator (serializes as \"1\"),\n   matching the other independently-versioned envelopes. This is decoupled from\n   the on-disk store version (renamed to STORE_SCHEMA_VERSION) and from the\n   global SchemaVersion, so the store shape and the report wire shape can evolve\n   on their own cadences. Regenerated docs/output-schema.json and both TS\n   contracts.\n2. latest_git_sha is documented as an abbreviated SHA (it flows from audit's\n   short head_sha); consumers joining against a full 40-char SHA are warned in\n   the schema description rather than misled. Full-SHA emission is deferred.\n3. Human and markdown footers show the first-recorded date only (2026-05-29)\n   instead of a raw ISO timestamp, and markdown now shows it for parity with the\n   human renderer.\n4. load() emits a tracing::warn when a store's schema_version is newer than this\n   build understands, mirroring the corrupt-store warning.\n5. TREND_TOLERANCE's comment now matches its zero value.\n6. The .gitignore write in enable() goes through atomic_write, matching the\n   store write's durability.\n\nNew unit tests cover schema_version presence (enabled and disabled), the\ndate-only trim, and best-effort load of a future-version store.\n\n* docs(impact): fix rustdoc intra-doc links on ImpactReportSchemaVersion\n\nThe doc comment used `[crate::output_envelope::SchemaVersion]` (unresolved\npath) and `[STORE_SCHEMA_VERSION]` (a public item linking to a private const),\nboth of which fail under the Documentation CI job's RUSTDOCFLAGS=-D warnings\n(broken-intra-doc-links and private-intra-doc-links). Drop the intra-doc links\nto plain code spans; the references are descriptive, not navigational.",
          "timestamp": "2026-05-29T19:24:29Z",
          "tree_id": "b662a8c54e5fe30f5e06689222d5ecdfffa7e4c3",
          "url": "https://github.com/fallow-rs/fallow/commit/1eb8b5d7deeedbcf3697421ac5fba0150c227b8f"
        },
        "date": 1780083676047,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 36856,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3196356,
            "range": "± 173128",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4731780,
            "range": "± 152578",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22758842,
            "range": "± 331688",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 86038,
            "range": "± 4673",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 1790,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 143264,
            "range": "± 6307",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 639680,
            "range": "± 4228",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1019780,
            "range": "± 18844",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 414864,
            "range": "± 8235",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2564623,
            "range": "± 45307",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2582281,
            "range": "± 18886",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1732478,
            "range": "± 14343",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "69acf17bcd03460535d3739b5b6459add545c395",
          "message": "fix(plugins): recognize SvelteKit layout-reset routes as entry points (#797)\n\n* fix(plugins): recognize SvelteKit layout-reset routes as entry points\n\nThe SvelteKit plugin matched +page.svelte / +layout.svelte literally but\nnot the @-suffixed layout-reset variants (+page@.svelte, +page@named.svelte,\n+layout@.svelte, +layout@named.svelte), so routes using SvelteKit's\nbreak-out-of-layout convention were reported as unused-file.\n\nAdd src/routes/**/+page@*.svelte and src/routes/**/+layout@*.svelte as entry\npatterns plus matching used_exports rules crediting the default export. The *\ncovers both the empty (@.svelte) and named (@named.svelte) forms;\nliteral_separator(true) keeps the match within one path segment. Only .svelte\ncomponent files take the suffix: SvelteKit throws on @ in .ts/.js route files,\nso the co-located load files are unaffected.\n\nFixes #791\n\n* test(plugins): cover SvelteKit layout-reset group form\n\nAdd a +page@(checkout).svelte fixture and assertion to\nsveltekit_layout_reset_routes_are_entry_points so the parenthesized\ngroup form of the layout-reset segment is exercised end to end. This is\nthe riskiest assumption in the +page@*.svelte entry glob: globset treats\n( and ) as literal characters, not metacharacters, so * must match the\n(group) form. Neither the existing unit nor integration test covered it.\n\nRefs #791.\n\n* chore(security): re-bless agent-file baseline for detection.md\n\nThe SvelteKit layout-reset bullet added to .claude/rules/detection.md\nchanged the file's hash; re-bless scripts/agent-files.sha256 so the\nagent-file drift gate passes. No content concern (no hidden unicode;\nplain ASCII bullet).\n\nRefs #791.",
          "timestamp": "2026-05-29T20:02:22Z",
          "tree_id": "9574d7d24c2d7e94b8ede54d7f4c431bfdcf1dd4",
          "url": "https://github.com/fallow-rs/fallow/commit/69acf17bcd03460535d3739b5b6459add545c395"
        },
        "date": 1780086443380,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46984,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3740962,
            "range": "± 143830",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5775629,
            "range": "± 287633",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29075215,
            "range": "± 400474",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 122116,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2299,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185130,
            "range": "± 5090",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820685,
            "range": "± 5848",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1314740,
            "range": "± 15657",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 532851,
            "range": "± 18584",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3294819,
            "range": "± 103524",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3329926,
            "range": "± 68768",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2239856,
            "range": "± 40136",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "2280b31dabf6cbb8a31ec083de967a43dc3276b2",
          "message": "fix(core): preserve workspace class members and scss include paths through merge (#783)\n\nThe run_plugins workspace-merge loop cleared used_class_members and\nscss_include_paths on each workspace result before folding it into the\nroot aggregate, silently dropping every workspace package's framework\ncontributions. In a monorepo where a framework is active only in a\nworkspace package (Lit/Lexical/Ember class-member allowlists, or\nAngular/Nx stylePreprocessorOptions.includePaths), the package's\nheritage-scoped class-member allowlist was dropped (false\nunused-class-member findings) and its SCSS include paths were dropped\n(false unresolved-import for @use/@import resolving via includePaths).\n\nBoth fields are prefix-agnostic (member names and absolute directories),\nso apply_workspace_prefix leaves them untouched and merge_into unions\nthem as-is. config_patterns stays cleared (inert post-merge) and\nscript_used_packages stays cleared (never populated by\nrun_workspace_fast). Single-package projects were never affected.\n\nAdds a monorepo fixture activating Lit only in packages/elements and\nAngular only in packages/ng-styles, with integration tests asserting the\npackage's Lit firstUpdated() survives the merge (with a genuinely-unused\ncontrol still flagged) and its SCSS @import 'variables' resolves.\n\nFixes #772",
          "timestamp": "2026-05-29T20:14:19Z",
          "tree_id": "8d004752700c6f1f2bf62b0fc8c791f4c8098a29",
          "url": "https://github.com/fallow-rs/fallow/commit/2280b31dabf6cbb8a31ec083de967a43dc3276b2"
        },
        "date": 1780086774119,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 53642,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3130075,
            "range": "± 56744",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4640736,
            "range": "± 53031",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21321557,
            "range": "± 559144",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 112354,
            "range": "± 3690",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3054,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 156214,
            "range": "± 3078",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 708848,
            "range": "± 3028",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1188015,
            "range": "± 8016",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 465690,
            "range": "± 5041",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2875201,
            "range": "± 18346",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2905678,
            "range": "± 32694",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1941769,
            "range": "± 11358",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "132771e3fb63bd67405870ba64b06b3d87b6971d",
          "message": "feat(impact): per-finding attribution crediting resolved findings (v1.5) (#803)\n\nTeach `fallow impact` to credit genuinely resolved findings while never\ncounting a `fallow-ignore` suppression as a win. Captures present-suppression\nstate during analysis (AnalysisResults.active_suppressions, an internal\nserde-skip field populated from SuppressionContext) and adds a per-file\nfrontier plus a fingerprint-keyed clone frontier to the store (bumped to\nSTORE_SCHEMA_VERSION 2, forward-compatible read of v1 stores) that audit diffs\neach run for the files it re-analyzed. Each disappearance is classified\nresolved, suppressed (conservative: a covering suppression that newly appeared\nis never a win), or moved (within-run cross-file cancellation plus a\ncross-run un-credit when a prior resolution's symbol reappears elsewhere;\nwithin-file line moves are free since the identity excludes line). Covers\ndead code, complexity, and duplication.\n\nSurfaces resolved_total, suppressed_total, and a recent-resolutions list\n(ResolutionEvent) in human, json (schema-registered), and markdown, with\nneutral \"marked intentional\" wording, an always-present RESOLVED section, an\nhonest empty state, a bounded recent list, and on-disk frontier pruning.\nAttribution is documented as a local-developer signal that accrues only where\n.fallow/impact.json persists across runs. Boundary-violation identities are\nforward-slash normalized for cross-platform stability.\n\nBuilds on the unreleased impact v1 (surfacing/trend/containment) and its\n#795/#798 follow-ups (gitignore-on-enable, format rejection, report wire\nschema_version). No MCP/LSP/CI surface in this change.",
          "timestamp": "2026-05-29T20:22:07Z",
          "tree_id": "22bdd109bddfdc98624bbe9daaf5e64d67af7e33",
          "url": "https://github.com/fallow-rs/fallow/commit/132771e3fb63bd67405870ba64b06b3d87b6971d"
        },
        "date": 1780087463072,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 64641,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4034600,
            "range": "± 155213",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5929931,
            "range": "± 158087",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28066379,
            "range": "± 511636",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 115618,
            "range": "± 3085",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2221,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 234586,
            "range": "± 3057",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1062847,
            "range": "± 10922",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1508058,
            "range": "± 16121",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 576122,
            "range": "± 5079",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4350171,
            "range": "± 31219",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4271818,
            "range": "± 65164",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2975193,
            "range": "± 15791",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db4a8cc6b595d04a2d8f946da8b1770d766a06d6",
          "message": "feat(mcp): expose fallow impact as a read-only MCP tool (#804)\n\n* feat(mcp): expose fallow impact as a read-only MCP tool\n\nAdd an \"impact\" tool wrapping \"fallow impact --format json\" so AI agents\ncan read the local value report (surfacing, trend, gate containment, and\nv1.5 resolved/suppressed attribution) the same way they query check_health\nand audit. Impact was the only first-class CLI surface with no MCP tool.\n\nThe tool is read-only and root-only: it runs no analysis and reads only\n.fallow/impact.json, so the config / no_cache / threads knobs the analysis\ntools expose are omitted as inert. The mutating enable / disable lifecycle\nis intentionally not exposed; on an enabled:false report the agent should\nrecommend the user run \"fallow impact enable\", not toggle it. Annotated\nread_only_hint=true, idempotent_hint=true, open_world_hint=false (a single\nclosed-world local file read, like fallow_explain).\n\n* docs(mcp): document the impact MCP tool\n\nBump the fallow-mcp tool count to 21 and add an impact entry in\n.claude/rules/mcp-server.md, add a CHANGELOG [Unreleased] note, and\nre-bless scripts/agent-files.sha256 for the rules-file edit (CI drift gate).",
          "timestamp": "2026-05-29T20:52:35Z",
          "tree_id": "01a38e3a6c5c5c1bc97576d9265737b97887e250",
          "url": "https://github.com/fallow-rs/fallow/commit/db4a8cc6b595d04a2d8f946da8b1770d766a06d6"
        },
        "date": 1780088864686,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 48151,
            "range": "± 2948",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3707867,
            "range": "± 131786",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5777492,
            "range": "± 169121",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29652488,
            "range": "± 578152",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118671,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2301,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185927,
            "range": "± 14727",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820926,
            "range": "± 5275",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320697,
            "range": "± 29922",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 539471,
            "range": "± 11220",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3328303,
            "range": "± 40825",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3380613,
            "range": "± 32396",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2229929,
            "range": "± 4238",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0cb61ab23a37e0189decdfcc344eeaf676050f7",
          "message": "fix(plugins): credit @nuxt/content content.config.ts as a default-export entry (#801)\n\n* fix(plugins): credit @nuxt/content content.config.ts as a default-export entry\n\n@nuxt/content v3 reads a root content.config.ts (export default\ndefineContentConfig(...)) at build time; nothing in app source imports it,\nso fallow reported it as unused-file plus unused-export. When @nuxt/content\nis registered in the nuxt.config modules: array, credit\ncontent.config.{ts,js,mts,mjs,cts,cjs} (config-dir-relative) as a\ndefault-export entry via the existing push_used_export_rule path.\n\nGated on module registration rather than mere package.json presence: an\ninstalled-but-unregistered @nuxt/content leaves a genuinely-orphan\ncontent.config correctly flagged. Scoped to the first-party @nuxt/content\nonly (per #138).\n\nFixes #792\n\n* docs(plugins): document @nuxt/content content.config crediting (#792)\n\ndetection.md bullet + plugins.md Nuxt line + CHANGELOG [Unreleased] entry,\nand re-bless scripts/agent-files.sha256 for the detection.md/plugins.md edits.",
          "timestamp": "2026-05-29T22:04:38Z",
          "tree_id": "312dd6e5be2e8c222e31c4c0b4adc6429bb955ad",
          "url": "https://github.com/fallow-rs/fallow/commit/b0cb61ab23a37e0189decdfcc344eeaf676050f7"
        },
        "date": 1780093321201,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 64672,
            "range": "± 1284",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3993601,
            "range": "± 154986",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5919644,
            "range": "± 168317",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27627413,
            "range": "± 558543",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116434,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2267,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 237471,
            "range": "± 3279",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1075615,
            "range": "± 10059",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1526686,
            "range": "± 16776",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 572345,
            "range": "± 27473",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4371118,
            "range": "± 27301",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4413824,
            "range": "± 63475",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2987869,
            "range": "± 6128",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a483c3144b8641acdee3d6c967358a99ada205b",
          "message": "refactor(plugins): move tooling list to TOML catalogue (#806)\n\n* refactor(plugins): move tooling list to data-driven TOML catalogue, drop framework-plugin shadows\n\nMove the hardcoded prefix + exact tooling lists in tooling.rs into a\ncommunity-maintainable crates/core/data/tooling.toml, embedded via\ninclude_str! and parsed once at startup behind a OnceLock. is_known_tooling_dependency\nkeeps its API; adding a tool is now a one-line TOML edit with no regen step.\n\nDrop the framework-plugin-specific exact entries (vite-plugin-svgr,\nvite-plugin-eslint, prettier-plugin-tailwindcss, prettier-plugin-organize-imports,\n@ianvs/prettier-plugin-sort-imports). These were a false negative: a plugin\ndeclared in devDependencies but never wired into the config was silently\ntreated as used by the exact-name shadow. They are now credited only when they\nactually appear (vite plugins via the import graph on the discovered config\nfile; prettier plugins via the Prettier config parser), so a declared-but-unused\nplugin correctly surfaces.\n\nClose the prettier gap: parse the plugins array from .prettierrc.{yml,yaml,toml}\n(the import graph cannot read non-JS config), so YAML/TOML configs keep their\nlisted plugins credited.\n\nGuards (parse tests): pattern/name required, empty/whitespace prefixes rejected\n(an empty prefix would match every package), duplicates rejected, and\nvite-plugin-* / prettier-plugin-* / eslint-plugin-* / @rollup/plugin-* rejected\nas exact entries so the shadow cannot be reintroduced via a TOML PR.\n\nRefs #462\n\n* docs(plugins): document data-driven tooling catalogue + framework-plugin shadow removal\n\n- CONTRIBUTING.md: 'Adding a known tooling dependency' section (one TOML entry, no regen, validation command, framework-plugin exclusion).\n- detection.md: known-tooling catalogue bullet covering the data-driven move and the shadow-removal behavior change.\n- plugins.md: Prettier entry now notes YAML/TOML + package.json#prettier plugin parsing and the credit-only-when-listed behavior.\n- CHANGELOG [Unreleased] Changed: behavior change (declared-but-unused framework plugins now surface) + the catalogue move.\n- Re-bless scripts/agent-files.sha256 for the detection.md + plugins.md edits.\n\nRefs #462",
          "timestamp": "2026-05-29T22:31:50Z",
          "tree_id": "c0c6a9116ee88cf11697921a3ac6650273b01e14",
          "url": "https://github.com/fallow-rs/fallow/commit/8a483c3144b8641acdee3d6c967358a99ada205b"
        },
        "date": 1780094933960,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 54783,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3740861,
            "range": "± 175345",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5334795,
            "range": "± 231848",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 25427730,
            "range": "± 623464",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 110424,
            "range": "± 2198",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3197,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 158422,
            "range": "± 3281",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 719339,
            "range": "± 9664",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1210515,
            "range": "± 24770",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 483660,
            "range": "± 31027",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3123409,
            "range": "± 97987",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3135125,
            "range": "± 57793",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2002976,
            "range": "± 13378",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "005462b33c2696e8a810721f3fdd4a92495498d0",
          "message": "fix(plugins): credit oxlint CLI tooling packages (oxlint-tsgolint) as used (#802)\n\n* fix(plugins): credit oxlint CLI tooling packages (oxlint-tsgolint) as used\n\noxlint-tsgolint is the type-aware companion package the oxlint binary loads\nat runtime (via --type-aware / options.typeAware). It is never imported in\nsource nor listed in an .oxlintrc.json jsPlugins array, so the #607 jsPlugins\ncredit does not cover it. When declared in prod dependencies (where the general\ntooling-prefix credit does not apply, that only covers devDependencies), it was\nfalsely reported as unused.\n\nAdd oxlint-tsgolint to the oxlint plugin's tooling_dependencies, which is honored\nfor both prod and dev categories and is gated on the oxlint plugin being active.\nExact-name credit, not an oxlint- prefix, so an unrelated oxlint-prefixed prod\ndependency still reports.\n\nFixes #753\n\n* docs(plugins): document oxlint CLI tooling credit (oxlint-tsgolint)\n\ndetection.md + plugins.md note the exact-name oxlint-tsgolint tooling credit,\nCHANGELOG [Unreleased] gets the user-facing entry, and the agent-file baseline\nis re-blessed for the two edited rule files.\n\nRefs #753",
          "timestamp": "2026-05-30T05:37:34Z",
          "tree_id": "0eec03b87d2697abd80008cd7eeddb698138cbac",
          "url": "https://github.com/fallow-rs/fallow/commit/005462b33c2696e8a810721f3fdd4a92495498d0"
        },
        "date": 1780120484945,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 63757,
            "range": "± 745",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4041701,
            "range": "± 171201",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5911954,
            "range": "± 226531",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28499354,
            "range": "± 477341",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116666,
            "range": "± 1300",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2221,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232061,
            "range": "± 21707",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1050819,
            "range": "± 15143",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1500268,
            "range": "± 16689",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 573349,
            "range": "± 7827",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4258797,
            "range": "± 72957",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4286345,
            "range": "± 46652",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2916058,
            "range": "± 67495",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f928483d8635fc322e5954473772b45d085881d",
          "message": "fix(plugins): credit eslint meta-preset plugins pulled via peerDependencies (#805)\n\nA flat config that calls a preset factory (export default antfu({...}))\nnames no individual plugins, so the plugins the preset enables (declared\nas its own optional peerDependencies) surfaced as unused-dev-dependency.\nThe flat-config plugins object-key credit had nothing to match, and the\ngeneric required-peer-dependency closure intentionally skips optional peers.\n\nWhen the ESLint config imports a package whose name matches a preset shape\n(eslint-config-* or @scope/eslint-config[-*]), fallow now reads that preset's\nown package.json and credits the eslint-ecosystem entries (eslint-plugin-*,\nscoped plugins, shareable configs, parsers, import resolvers) it declares in\ndependencies / peerDependencies / optionalDependencies. General-purpose runtime\ndeps (globals, ansis) are excluded, and a plain plugin import does not pull in\nits own dependency fan.\n\nOn the real-world repro (antfu({...}).append({...})) this credits the three\nplugins antfu 9 genuinely pulls (@eslint-react/eslint-plugin, eslint-plugin-format,\neslint-plugin-react-refresh); plugins the preset does not declare stay reported.\n\nCloses #754.",
          "timestamp": "2026-05-30T10:59:11Z",
          "tree_id": "2075bfbb948d319cf4d2f856d649af79c434c210",
          "url": "https://github.com/fallow-rs/fallow/commit/5f928483d8635fc322e5954473772b45d085881d"
        },
        "date": 1780139792656,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 65411,
            "range": "± 1103",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4137465,
            "range": "± 144517",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5980588,
            "range": "± 190599",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 27949142,
            "range": "± 664120",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 118309,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2323,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 230016,
            "range": "± 8437",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1042235,
            "range": "± 14382",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1471206,
            "range": "± 18304",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 570878,
            "range": "± 12531",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4259333,
            "range": "± 50170",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4320508,
            "range": "± 53275",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2928090,
            "range": "± 10910",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d5c5a722b0bf86c9c3c5169c96d1ea3ccf7d9bd",
          "message": "fix(dupes): forward-slash normalize paths in human output on Windows (#807)\n\nThe clone-group, clone-family, and grouped-bucket listings in\nreport/human/dupes.rs rendered file paths via raw relative_path().display(),\nwhich emits backslashes on Windows (src\\copy1.ts) instead of the forward\nslashes used everywhere else in fallow output. The directory/filename split\nkeys on '/', so it also misfired on those paths. This made the\ndupes_human_output snapshot test fail on windows-latest CI.\n\nRoute all four sites through crate::report::format_display_path (the same\nhelper the family-names branch already uses), which appends .replace('\\\\',\n\"/\"). No change on Unix (no backslashes to replace); Windows output now\nmatches the committed forward-slash snapshot.",
          "timestamp": "2026-05-30T12:13:00Z",
          "tree_id": "47f9d1faeb684c74d0d49cc528e38472bd994ff3",
          "url": "https://github.com/fallow-rs/fallow/commit/6d5c5a722b0bf86c9c3c5169c96d1ea3ccf7d9bd"
        },
        "date": 1780144107025,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 65136,
            "range": "± 1012",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3934905,
            "range": "± 160274",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5852288,
            "range": "± 213545",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28221137,
            "range": "± 968234",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 117077,
            "range": "± 927",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2283,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 231512,
            "range": "± 30869",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1051685,
            "range": "± 14572",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1501994,
            "range": "± 18777",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 568356,
            "range": "± 27719",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4264376,
            "range": "± 31421",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4279913,
            "range": "± 32325",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2918637,
            "range": "± 4259",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbb3e0233abf8ffa3af3ccf8c345552422b68f7f",
          "message": "fix(dupes): make clone fingerprints CRLF-invariant for cross-platform stability (#809)\n\nThe clone fingerprint (dup:<id>) hashes a group's representative source\nfragment via xxh3. The fragment carried the raw line endings, so a CRLF\n(Windows) checkout produced a different hash than an LF (Unix) checkout for\nidentical code, breaking `dupes --trace dup:<id>` and fingerprint-keyed\nbaselines across platforms (e.g. Windows dev vs Linux CI). This also made the\ndupes_human_output snapshot fail on windows-latest after the path-separator\nfix landed (the only remaining diff was the fingerprint).\n\nAdd a hash_fragment helper that strips \\r before hashing and route both\nfingerprint sites (CloneFingerprintSet::from_groups and\nfingerprint_for_fragment) through it. The strip is a no-op on Unix-checkout\nfragments, so existing fingerprints and the committed snapshot are unchanged.\n\nAlso pin tests/fixtures/** to LF via .gitattributes so fixture bytes (and\nthus snapshot output) are deterministic across platforms regardless of\ncore.autocrlf.",
          "timestamp": "2026-05-30T12:44:58Z",
          "tree_id": "7ec0cd6352b6d3953a5c955060498f327e96a94b",
          "url": "https://github.com/fallow-rs/fallow/commit/bbb3e0233abf8ffa3af3ccf8c345552422b68f7f"
        },
        "date": 1780146156470,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 64802,
            "range": "± 1797",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3986577,
            "range": "± 170689",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5864395,
            "range": "± 156830",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 28418391,
            "range": "± 572126",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 116685,
            "range": "± 1599",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2200,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 232417,
            "range": "± 3415",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 1048707,
            "range": "± 13845",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1498747,
            "range": "± 17934",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 564811,
            "range": "± 9133",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 4276803,
            "range": "± 60090",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 4280418,
            "range": "± 42188",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2908969,
            "range": "± 50011",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "986651adbe6817842da67fdd126eca359e33bbd5",
          "message": "feat(coverage): upload each source map's repo-relative path for monorepo source resolution (#810)\n\nupload-source-maps now sends the map file's path relative to the repo\nroot (e.g. dashboard/dist/assets/X.js.map) alongside the existing\nfileName, as a new optional mapPath field. The fallow.cloud\nsource-evidence viewer uses it to resolve a map's relative sources[]\n(../../src/components/X.tsx) against the map's directory, recovering the\npackage-prefixed path dashboard/src/components/X.tsx so it matches the\nmonorepo-relative runtime coverage path. Previously only the basename\nwas known, so the cloud collapsed ../../src/X to src/X and the viewer\nreported source_not_in_maps for monorepo sub-packages.\n\nThe field is omitted when a map is not under the repo root (an absolute\n--dir outside it); the cloud then falls back to its prior root-anchored\nnormalization, so the change is backwards compatible and a no-op for\nsingle-package projects. fileName and --strip-path are unchanged.\n\nCloses fallow-rs/fallow-cloud#260.",
          "timestamp": "2026-05-30T17:00:19Z",
          "tree_id": "425d5323b3ea41b2261ecc8e87f99e94abf893dc",
          "url": "https://github.com/fallow-rs/fallow/commit/986651adbe6817842da67fdd126eca359e33bbd5"
        },
        "date": 1780161452834,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 47507,
            "range": "± 1508",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3923263,
            "range": "± 176592",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5807665,
            "range": "± 179114",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29070036,
            "range": "± 396245",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 121602,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2301,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185220,
            "range": "± 4275",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 820829,
            "range": "± 5297",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1320282,
            "range": "± 17596",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533271,
            "range": "± 5176",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3314556,
            "range": "± 23529",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3331633,
            "range": "± 36212",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2225813,
            "range": "± 49280",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "238ca291e95bdf9b70018a132bb52ec9b437b1ee",
          "message": "feat(impact): whole-project value track credited from full fallow runs (#812)\n\nAdd a separate whole-project Impact track recorded best-effort at the\nend of a full fallow run, kept apart from the changed-file audit track\nso the two scopes never share a trend. A full run also credits\nduplication and whole-repo cleanups fixed outside a changed-file audit.\n\nThe writer is gated airtight so it records only on a true whole-repo run\n(check + dupes + health, no scope-narrowing flags, no diff filter, no\nproduction mode). A reshaped clone still duplicated under a new\nfingerprint is not falsely credited resolved. ImpactReport gains\noptional project_surfacing and project_trend (report schema_version\nstays 1); human and markdown render an understated whole-project\nsection labelled context, not a to-do.",
          "timestamp": "2026-05-30T20:32:55Z",
          "tree_id": "f3c5e7b2ca700bfbfe3aa87d0b8f9f08744b5d8d",
          "url": "https://github.com/fallow-rs/fallow/commit/238ca291e95bdf9b70018a132bb52ec9b437b1ee"
        },
        "date": 1780174207209,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46978,
            "range": "± 854",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3819218,
            "range": "± 178705",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5755433,
            "range": "± 156771",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30041564,
            "range": "± 490369",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109916,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2356,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185085,
            "range": "± 2131",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 823510,
            "range": "± 9884",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1319127,
            "range": "± 33432",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 536028,
            "range": "± 13909",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3316699,
            "range": "± 29697",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3361928,
            "range": "± 35226",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2242738,
            "range": "± 5159",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b1f7da57699cd3a92a409967f2d8460a6f306f2a",
          "message": "chore: release v2.85.0 (#815)",
          "timestamp": "2026-05-30T21:22:21Z",
          "tree_id": "7a381898583ee1ee23f233c7e3191d86da6ab105",
          "url": "https://github.com/fallow-rs/fallow/commit/b1f7da57699cd3a92a409967f2d8460a6f306f2a"
        },
        "date": 1780177197174,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 49105,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3899210,
            "range": "± 160125",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5836313,
            "range": "± 188938",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29507590,
            "range": "± 399557",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119973,
            "range": "± 841",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2349,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185845,
            "range": "± 1517",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822873,
            "range": "± 27847",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1322487,
            "range": "± 18698",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 533874,
            "range": "± 20503",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3300969,
            "range": "± 28018",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3343000,
            "range": "± 33522",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2246158,
            "range": "± 8499",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cab4ab3dacdefa41a43f2172801f189ea42b5df4",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.85.0 (#816)\n\n* chore(napi): sync package.json / package-lock / index.js to v2.85.0\n\n* docs(telemetry): bump payload example version to 2.85.0",
          "timestamp": "2026-05-30T22:04:25Z",
          "tree_id": "be9ac7e6e6fde965133ae6e9402ecafe207cc518",
          "url": "https://github.com/fallow-rs/fallow/commit/cab4ab3dacdefa41a43f2172801f189ea42b5df4"
        },
        "date": 1780179723012,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 37282,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 2998780,
            "range": "± 52016",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4516584,
            "range": "± 74422",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 22855015,
            "range": "± 319343",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 85602,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2143,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 142856,
            "range": "± 1940",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 635362,
            "range": "± 14709",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1019188,
            "range": "± 9448",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 413386,
            "range": "± 8515",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2550490,
            "range": "± 16010",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2576395,
            "range": "± 31927",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1733310,
            "range": "± 19658",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niels.mentink@gmail.com",
            "name": "Niels Mentink",
            "username": "V1RE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a157e80af66838463fde5c0a21d5c470dd76635",
          "message": "fix: mark vercel.ts config as used (#821)\n\n* fix: mark vercel ts config as used\n\n* chore: address Vercel plugin review follow-ups\n\nUpdate the documented built-in plugin count after adding the Vercel plugin and list deployment-oriented plugins separately in the README table.\n\nRename the Vercel regression fixture and integration test from issue 819 to issue 820 so the test history matches the bug this PR closes.\n\nRefs #820.\n\n---------\n\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-06-01T07:11:29Z",
          "tree_id": "066feaed586c60e2529c090c00c9bae5c17cab9c",
          "url": "https://github.com/fallow-rs/fallow/commit/5a157e80af66838463fde5c0a21d5c470dd76635"
        },
        "date": 1780298790584,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 48083,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 4041534,
            "range": "± 225429",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 6061139,
            "range": "± 187352",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 30318105,
            "range": "± 859731",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119224,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2300,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 186419,
            "range": "± 5762",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 822077,
            "range": "± 55714",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321989,
            "range": "± 16190",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535538,
            "range": "± 13613",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3320497,
            "range": "± 29680",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3351694,
            "range": "± 83100",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2245873,
            "range": "± 4225",
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
          "id": "618e24ac0555a3e627905720fdb1f83323252b28",
          "message": "fix: credit package.json prettier string configs (#819)",
          "timestamp": "2026-06-01T07:41:00Z",
          "tree_id": "305062407a449d44c95f2e968191496aec0ca03e",
          "url": "https://github.com/fallow-rs/fallow/commit/618e24ac0555a3e627905720fdb1f83323252b28"
        },
        "date": 1780300734727,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 53820,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3135985,
            "range": "± 62127",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 4651027,
            "range": "± 91068",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 21794355,
            "range": "± 398439",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 109088,
            "range": "± 1818",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 3034,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 155922,
            "range": "± 3508",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 708724,
            "range": "± 6015",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1187829,
            "range": "± 39365",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 462193,
            "range": "± 11409",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 2872407,
            "range": "± 14578",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 2909849,
            "range": "± 19227",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 1934401,
            "range": "± 7065",
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
          "id": "a8e5d02f872a8aca8fb4eaf14d02693fd28ed848",
          "message": "Merge pull request #822 from fallow-rs/comment-cleanup\n\nfix(mcp): restore schema descriptions and regenerate schema",
          "timestamp": "2026-06-01T10:14:12+02:00",
          "tree_id": "1ae10301813b78020b2ddc76cf4427858637cb1f",
          "url": "https://github.com/fallow-rs/fallow/commit/a8e5d02f872a8aca8fb4eaf14d02693fd28ed848"
        },
        "date": 1780301984564,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_single_file",
            "value": 46916,
            "range": "± 1582",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_10_files",
            "value": 3894651,
            "range": "± 162470",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_100_files",
            "value": 5824474,
            "range": "± 176715",
            "unit": "ns/iter"
          },
          {
            "name": "full_pipeline_1000_files",
            "value": 29134221,
            "range": "± 440947",
            "unit": "ns/iter"
          },
          {
            "name": "resolve_re_export_chains",
            "value": 119691,
            "range": "± 1083",
            "unit": "ns/iter"
          },
          {
            "name": "cache_round_trip",
            "value": 2314,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x500_identical",
            "value": 185663,
            "range": "± 2842",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x2000_identical",
            "value": 826331,
            "range": "± 12768",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_10x500_identical",
            "value": 1321192,
            "range": "± 16071",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_50x200_diverse",
            "value": 535141,
            "range": "± 8009",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed",
            "value": 3320205,
            "range": "± 25117",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_100x200_mixed_focused",
            "value": 3340383,
            "range": "± 28259",
            "unit": "ns/iter"
          },
          {
            "name": "dupe_detect_2x5000_identical",
            "value": 2240156,
            "range": "± 5118",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
      }
    ]
  }
}