window.BENCHMARK_DATA = {
  "lastUpdate": 1782755503645,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Fallow Allocations": [
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcaa8fcf8d22c210a6eb5b497dc696f045696780",
          "message": "perf(dupes): replace prefix-doubling suffix array with linear-time SA-IS\n\nClone detection built its suffix array with prefix-doubling + radix sort,\nan O(N log N) algorithm whose doubling passes dominated clone detection\n(the largest itemized stage of health/dupes/audit). Replace it with SA-IS\n(suffix array by induced sorting), which runs in linear time.\n\nThe i64 token stream (token ranks plus distinct negative per-file\nsentinels) is remapped to a dense non-negative alphabet with an appended\nunique smallest terminator; the terminator position is dropped from the\nresult, preserving the prefix-sorts-first ordering the LCP and clone\nextraction passes rely on.\n\nA within-process A/B on the same input measures ~2.7x to 11x faster suffix\narray construction with byte-identical output. The prefix-doubling routine\nis retained under cfg(test) as a differential-test reference, with a\nproperty test comparing SA-IS against it and a naive sort across thousands\nof random inputs including sentinel-separated streams.",
          "timestamp": "2026-06-19T17:15:08+02:00",
          "tree_id": "f77f83dd925c0b18b65ff6d553f42572bf355162",
          "url": "https://github.com/fallow-rs/fallow/commit/dcaa8fcf8d22c210a6eb5b497dc696f045696780"
        },
        "date": 1781882305581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7751018,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36759,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827228,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6691,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca8dc6bfd241c6fc2dd43ca97f7162bd8ef82f4a",
          "message": "refactor: decompose oversized functions to clear SIG unit-size very-high-risk band\n\nBehavior-preserving decomposition of oversized functions across the workspace, driven by a SIG maintainability audit. Reduces the Unit Size very-high-risk band (function LOC in units >60 lines) from 19.3% to 4.0%, under the 8.3% 4-star ceiling, by splitting large orchestration and detector functions into focused private helpers across core, extract, graph, config, lsp, mcp, and cli.\n\nIrreducible field-plumbing, lookup/match tables, and wide struct literals are left intact rather than split arbitrarily; the >30 and >15 size bands remain capped by the codebase's inherent function granularity and are intentionally not pursued. Pure extraction, no behavior change: full workspace build, clippy -D warnings, and the full test suite pass; no public signatures, output, schema, config, or API surface changed.",
          "timestamp": "2026-06-19T17:55:33+02:00",
          "tree_id": "c3e09601b00d6d9d9e6c7fadbd97fd3575904b5c",
          "url": "https://github.com/fallow-rs/fallow/commit/ca8dc6bfd241c6fc2dd43ca97f7162bd8ef82f4a"
        },
        "date": 1781884737858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7749396,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36861,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827364,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6693,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "47ec5324173cda53eb28259965bd22b3ad8aa029",
          "message": "perf(plugins): parallelize workspace file bucketing\n\nbucket_files_by_workspace assigned every discovered file to its first\nmatching workspace on a single thread: an O(files x workspaces) prefix\nscan plus a path clone and relative-path allocation per file. On a 21k-file\nmonorepo this was a measurable slice of the plugins pipeline stage.\n\nMove the per-file assignment to a rayon par_iter and keep only the cheap\nbucket fill sequential. First-match-by-workspace-declaration-order and\nper-bucket file order are both preserved, so output is byte-identical.\n\nPlugins stage ~655ms -> ~607ms on the next.js fixture (21043 files, 41\nworkspaces); dead-code JSON byte-identical on next.js and vue-core.",
          "timestamp": "2026-06-19T20:19:17+02:00",
          "tree_id": "72e8eac3bc8d81b9e2a84859cc4c245cb86f83db",
          "url": "https://github.com/fallow-rs/fallow/commit/47ec5324173cda53eb28259965bd22b3ad8aa029"
        },
        "date": 1781893449987,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7805748,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36883,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 831852,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6696,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "405d77aa44a49baaca9a8c19fba506a25414d1c5",
          "message": "perf(resolve): reuse a resolver session across external-stylesheet scans\n\naugment_external_style_package_usage resolves every node_modules stylesheet\nindividually, recursing through @import / @use chains. Each scan called the\nfull resolve_all_imports, which rebuilt the resolver instances, re-loaded the\nroot and per-workspace package.json manifests, and re-canonicalized every\nworkspace root. On a 41-workspace monorepo that re-did ~80 package.json reads\nand ~80 canonicalize calls per stylesheet, scaling with the external-style count.\n\nExtract that invariant setup into a reusable ResolverSession and split\nresolve_all_imports into build-session + resolve_all_imports_with_session (one\nshared resolution code path, so the parallel project pass is unchanged). The\nexternal-style scanner builds the session once and resolves each stylesheet\nthrough it.\n\nresolve-imports stage ~880ms -> ~847ms on the next.js fixture (21043 files, 41\nworkspaces); dead-code JSON byte-identical on next.js and vue-core.",
          "timestamp": "2026-06-19T20:32:53+02:00",
          "tree_id": "9ff9634d26883fe0cdd2b87afc79620443431669",
          "url": "https://github.com/fallow-rs/fallow/commit/405d77aa44a49baaca9a8c19fba506a25414d1c5"
        },
        "date": 1781894213056,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7915628,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37143,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 829660,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6695,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f2c90cb40919aae559babe971332fcd955d8ea9",
          "message": "feat(dupes): add private rolling duplicate detector\n\nAdd a private FALLOW_DUPES_ROLLING detector path to compare a rolling-window candidate-first strategy against the current suffix-array extraction. The default detector remains intact, component-heavy corpora fall back to the suffix path, and the prototype reuses existing filtering and statistics so parity can be measured without changing public CLI behavior.\n\nRefresh the jscpd benchmark harness and README with corrected jscpd v5 comparison data, a version-mismatch guard, JS web formats, and a dedicated rolling comparator. Add interval-pressure benchmark coverage, rolling detector tests, and the research plan covering kept and rejected optimization rounds.",
          "timestamp": "2026-06-19T20:59:40+02:00",
          "tree_id": "10bfcd1646cbebb1536f3f4804075fd7d7009175",
          "url": "https://github.com/fallow-rs/fallow/commit/5f2c90cb40919aae559babe971332fcd955d8ea9"
        },
        "date": 1781895884037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7891108,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37135,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827220,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6690,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "661fcd6261dc59595219496f255366ba3a0799c6",
          "message": "docs(changelog): note faster plugin/config detection + traversal-rules refinement",
          "timestamp": "2026-06-19T21:48:42+02:00",
          "tree_id": "67c93a8a0e4a702d42e1c889b4302343f9d03aef",
          "url": "https://github.com/fallow-rs/fallow/commit/661fcd6261dc59595219496f255366ba3a0799c6"
        },
        "date": 1781899530334,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10439963,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56531,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "86ea6ebd886e6aa52e53176f6db6e5342b2c492f",
          "message": "perf(plugins): activate browser-extension/obsidian via discovery index\n\nRoute filesystem-manifest activation for the browser-extension and obsidian\nplugins through the discovery walk's ConfigCandidateIndex instead of probing\nevery candidate directory's manifest.json. Outside production mode the plugins\nconsult the in-memory listing the walk already built; in production (None) they\nfall back to the filesystem probe, preserving prior behavior.\n\nPlugin::is_enabled_with_files gains an Option<&ConfigCandidateIndex> argument\nthreaded from collect_active_plugins. danger/k6/varlock take the argument but\nignore it (their activation reads source files already in the walk). varlock's\ndead nested .env.schema scan is left for a follow-up.\n\nOutput is byte-identical across the 10 real-world benchmark fixtures; the\nplugins stage on next.js drops ~60ms under load.",
          "timestamp": "2026-06-20T09:08:05+02:00",
          "tree_id": "1a40b5b8d1c2129e4fcf3c94d3e91a119b98bc8b",
          "url": "https://github.com/fallow-rs/fallow/commit/86ea6ebd886e6aa52e53176f6db6e5342b2c492f"
        },
        "date": 1781939508073,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10413243,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56541,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "595f8d0a1c15d9cc0d2128d6ae1c478d2112f02e",
          "message": "refactor: group parse finalization inputs",
          "timestamp": "2026-06-20T09:24:24+02:00",
          "tree_id": "7f8f9c5cc04dd484143632298a6632ff5f98219f",
          "url": "https://github.com/fallow-rs/fallow/commit/595f8d0a1c15d9cc0d2128d6ae1c478d2112f02e"
        },
        "date": 1781940560921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10432923,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56530,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b7055f6144038611012d5c0b78daa8feea72d061",
          "message": "refactor: split render fan-in analyzer phases",
          "timestamp": "2026-06-20T09:29:05+02:00",
          "tree_id": "071d7e49b22c667f2b7cb0c3d667562370412d0a",
          "url": "https://github.com/fallow-rs/fallow/commit/b7055f6144038611012d5c0b78daa8feea72d061"
        },
        "date": 1781940765359,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10463979,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56532,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ade73c11cccb7b8ee9cc14f008dede26bff8d84b",
          "message": "refactor: split load data key analyzer phases",
          "timestamp": "2026-06-20T09:37:29+02:00",
          "tree_id": "6b24d8ce1cba64ba67371f35889bdb9ef80f2020",
          "url": "https://github.com/fallow-rs/fallow/commit/ade73c11cccb7b8ee9cc14f008dede26bff8d84b"
        },
        "date": 1781941300769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10427091,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56532,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6b23aecb084923791a902d278c9808d119d20335",
          "message": "refactor: split catalog dependency line scanner",
          "timestamp": "2026-06-20T09:43:49+02:00",
          "tree_id": "a75a6078eebd5744a31e360ef6026ce4e4e5151b",
          "url": "https://github.com/fallow-rs/fallow/commit/6b23aecb084923791a902d278c9808d119d20335"
        },
        "date": 1781941678997,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10460187,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56546,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7d96c6788d0432ae78a153b1776b6d56255bec34",
          "message": "refactor: group review comment inputs",
          "timestamp": "2026-06-20T09:58:57+02:00",
          "tree_id": "73d98d1a94e89a92cbd0b3a10ccf77c6688d6c12",
          "url": "https://github.com/fallow-rs/fallow/commit/7d96c6788d0432ae78a153b1776b6d56255bec34"
        },
        "date": 1781942613605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10419843,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56511,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "17e911238ae50fdedeb89d26d731bcc5d355963a",
          "message": "refactor: split duplicate prop shape bucketing",
          "timestamp": "2026-06-20T10:46:45+02:00",
          "tree_id": "6a61790c132a5164ff4ba2ff2b943ab42c32651d",
          "url": "https://github.com/fallow-rs/fallow/commit/17e911238ae50fdedeb89d26d731bcc5d355963a"
        },
        "date": 1781945440603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10404123,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56525,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b8170c2ac3ca29e25febb48a8d9be0543d40eb44",
          "message": "refactor: split pnpm catalog line scan",
          "timestamp": "2026-06-20T10:55:52+02:00",
          "tree_id": "b855585cfab2b0750bf6774675b90573cfcfa37d",
          "url": "https://github.com/fallow-rs/fallow/commit/b8170c2ac3ca29e25febb48a8d9be0543d40eb44"
        },
        "date": 1781945972455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10400739,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56531,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "765e59f077f48e0fdb65e93b69a097b4b71d2b02",
          "message": "refactor: split external plugin file loading",
          "timestamp": "2026-06-20T11:12:16+02:00",
          "tree_id": "15da211549f550ae207d1afd1712afa8be6ea118",
          "url": "https://github.com/fallow-rs/fallow/commit/765e59f077f48e0fdb65e93b69a097b4b71d2b02"
        },
        "date": 1781946953256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10412435,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56567,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "bbfb3fcb64970a8d0a434841ddbba53b61be29eb",
          "message": "refactor: split churn file import folding",
          "timestamp": "2026-06-20T11:17:54+02:00",
          "tree_id": "b78cc819dd62db74ab1e9b1f17eaeff4694ee0f0",
          "url": "https://github.com/fallow-rs/fallow/commit/bbfb3fcb64970a8d0a434841ddbba53b61be29eb"
        },
        "date": 1781947285750,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10454091,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56565,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "235bbfcb3a09e6951fd0b654e12a0f2af1535fbf",
          "message": "refactor: split workspace plugin fast path",
          "timestamp": "2026-06-20T11:31:56+02:00",
          "tree_id": "b27e8d08193b76df79a1eb61f547a843eb1c0681",
          "url": "https://github.com/fallow-rs/fallow/commit/235bbfcb3a09e6951fd0b654e12a0f2af1535fbf"
        },
        "date": 1781948149393,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10392483,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56522,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "48ab37ffff16b61bfe7ef72842ab5468c8750fdd",
          "message": "refactor: split tainted sink matching",
          "timestamp": "2026-06-20T11:46:13+02:00",
          "tree_id": "c5884ee2fe56bcee65a5fc4b2b0a5ac7cb5fbaf2",
          "url": "https://github.com/fallow-rs/fallow/commit/48ab37ffff16b61bfe7ef72842ab5468c8750fdd"
        },
        "date": 1781949004279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10436695,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56534,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9d890e248516d730b035a0aef636dd35fe68a470",
          "message": "refactor: split thin wrapper module scan",
          "timestamp": "2026-06-20T11:55:36+02:00",
          "tree_id": "c60f3b8b083192c6bc81c332a1b7f6c8baeead5f",
          "url": "https://github.com/fallow-rs/fallow/commit/9d890e248516d730b035a0aef636dd35fe68a470"
        },
        "date": 1781949555602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10462143,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56535,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b20308f0e3b36aa848aaec53ffea8f40608b54e5",
          "message": "refactor: split unused export finding build",
          "timestamp": "2026-06-20T12:36:50+02:00",
          "tree_id": "3212e80c06acbcf2384c4d721940bf0a23530c5d",
          "url": "https://github.com/fallow-rs/fallow/commit/b20308f0e3b36aa848aaec53ffea8f40608b54e5"
        },
        "date": 1781952047604,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10415367,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56513,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "051eff6da9c2adf3bfccb44960dc89027bea6c11",
          "message": "refactor: split angular component scan target",
          "timestamp": "2026-06-20T13:15:35+02:00",
          "tree_id": "4e9d2a33bf90d1a3be647ca048d6fa7e1d58b7de",
          "url": "https://github.com/fallow-rs/fallow/commit/051eff6da9c2adf3bfccb44960dc89027bea6c11"
        },
        "date": 1781954350355,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10416487,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56551,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6ca8b73f42d93cde47f40708ff07157103cca64e",
          "message": "refactor: split prop drilling target resolution",
          "timestamp": "2026-06-20T13:32:27+02:00",
          "tree_id": "51981527a503cb9728b5befc69c9d62e792eb812",
          "url": "https://github.com/fallow-rs/fallow/commit/6ca8b73f42d93cde47f40708ff07157103cca64e"
        },
        "date": 1781955365183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10424447,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56529,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9b5bbf68e8890723cce26bfe0b84252e9ab77024",
          "message": "refactor: split unlisted dependency plugin context",
          "timestamp": "2026-06-20T14:04:27+02:00",
          "tree_id": "fb1d49dab6d21aac7e490ab903ae51d7d69217f9",
          "url": "https://github.com/fallow-rs/fallow/commit/9b5bbf68e8890723cce26bfe0b84252e9ab77024"
        },
        "date": 1781957289675,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10459055,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56610,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "82e69fc9b56153051749a81fa6bd5a5fd94b3967",
          "message": "refactor: split check result completion",
          "timestamp": "2026-06-20T14:08:06+02:00",
          "tree_id": "dbe4ca8e8425adf1abe4332b9711f4b9853a38ba",
          "url": "https://github.com/fallow-rs/fallow/commit/82e69fc9b56153051749a81fa6bd5a5fd94b3967"
        },
        "date": 1781957497039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10453639,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56586,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5bce473c4dc3c6d97cf8f761e4bf8127399503dc",
          "message": "refactor: split agents guide prefill",
          "timestamp": "2026-06-20T14:25:50+02:00",
          "tree_id": "cef5fc6c5c60bb0881270ed0b83b041f0a3cddc9",
          "url": "https://github.com/fallow-rs/fallow/commit/5bce473c4dc3c6d97cf8f761e4bf8127399503dc"
        },
        "date": 1781958574813,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10421567,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56603,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c1dc0da9a24611711db12bac734df541d9dcfdcb",
          "message": "refactor: split changed-file result filters",
          "timestamp": "2026-06-20T14:30:48+02:00",
          "tree_id": "c6b980ce7a7e59bca6a98a6ab21e89b0712cb2af",
          "url": "https://github.com/fallow-rs/fallow/commit/c1dc0da9a24611711db12bac734df541d9dcfdcb"
        },
        "date": 1781958850273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10405319,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56592,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "341c7a8d35a051fdacbe4cc1c8a63901adaa5f78",
          "message": "refactor: split full analysis core run",
          "timestamp": "2026-06-20T14:38:53+02:00",
          "tree_id": "46e071e07c0fae9e8efe98ce70ab3f84b492718a",
          "url": "https://github.com/fallow-rs/fallow/commit/341c7a8d35a051fdacbe4cc1c8a63901adaa5f78"
        },
        "date": 1781959292102,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10444767,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56600,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "4e87a61b68123a9873ee70c7e38dc724756c09aa",
          "message": "refactor: split health result assembly",
          "timestamp": "2026-06-20T14:47:34+02:00",
          "tree_id": "05741d294fde5f91d705dd16f33c88e6037a4140",
          "url": "https://github.com/fallow-rs/fallow/commit/4e87a61b68123a9873ee70c7e38dc724756c09aa"
        },
        "date": 1781959873165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10438599,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56594,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7a7eb10f39beb057536bc12059bb2e9f9f2cd503",
          "message": "refactor: split health core section prep",
          "timestamp": "2026-06-20T14:53:19+02:00",
          "tree_id": "f9e040addacdf7b2c5450745bca1474132bd717d",
          "url": "https://github.com/fallow-rs/fallow/commit/7a7eb10f39beb057536bc12059bb2e9f9f2cd503"
        },
        "date": 1781960205770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10393767,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56580,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "76e3ab1a9b0c9db3ffe7b87c4cd028072cc32040",
          "message": "test: improve runtime coverage sidecar tests",
          "timestamp": "2026-06-20T14:57:30+02:00",
          "tree_id": "14cb8ef4d3d70b94264a0dcc11b4d86acf0c6311",
          "url": "https://github.com/fallow-rs/fallow/commit/76e3ab1a9b0c9db3ffe7b87c4cd028072cc32040"
        },
        "date": 1781960460207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10433655,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56593,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "16fcfaf1d914e0aded6e0124e725594e08a3cad3",
          "message": "refactor: split programmatic analysis options",
          "timestamp": "2026-06-20T15:00:26+02:00",
          "tree_id": "4aabe866b974a0ee759e63557528ac2f326bcd38",
          "url": "https://github.com/fallow-rs/fallow/commit/16fcfaf1d914e0aded6e0124e725594e08a3cad3"
        },
        "date": 1781960685019,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10395719,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56577,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a12395fa191f9d08522e875b642412d3e6a478a2",
          "message": "refactor: split component baseline filtering",
          "timestamp": "2026-06-20T15:05:59+02:00",
          "tree_id": "4900c81efa400850762c78b6f259b5eee17e7475",
          "url": "https://github.com/fallow-rs/fallow/commit/a12395fa191f9d08522e875b642412d3e6a478a2"
        },
        "date": 1781960971887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10404351,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56593,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "0bae19fb9d15a6ef6433a0a8f99d6ceb68ba943f",
          "message": "refactor: split config resolution phases",
          "timestamp": "2026-06-20T15:13:55+02:00",
          "tree_id": "28cd450ec00f55ddb9e5238f992cc8c0e56a10f4",
          "url": "https://github.com/fallow-rs/fallow/commit/0bae19fb9d15a6ef6433a0a8f99d6ceb68ba943f"
        },
        "date": 1781961448079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10395391,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56574,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2e7473e679250855cc4827a1e2144a91e4d30735",
          "message": "refactor: split prop drilling population",
          "timestamp": "2026-06-20T15:36:10+02:00",
          "tree_id": "6781048366d8bdf0b5534db06f8826f975162016",
          "url": "https://github.com/fallow-rs/fallow/commit/2e7473e679250855cc4827a1e2144a91e4d30735"
        },
        "date": 1781962804181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10419351,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56612,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "83096135fb6d43f6aafe6979061406cdbb7da62d",
          "message": "refactor: group framework finding population",
          "timestamp": "2026-06-20T15:41:01+02:00",
          "tree_id": "cdeb27705e596f8ac8c4869f6c3aefee420a33f9",
          "url": "https://github.com/fallow-rs/fallow/commit/83096135fb6d43f6aafe6979061406cdbb7da62d"
        },
        "date": 1781963082263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10400031,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56584,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6fff1cae115b97f486f779f140dbdec47521733e",
          "message": "refactor: split changed-file framework filtering",
          "timestamp": "2026-06-20T15:51:41+02:00",
          "tree_id": "b10248014363959ca182815ca6e009bf14ae86fa",
          "url": "https://github.com/fallow-rs/fallow/commit/6fff1cae115b97f486f779f140dbdec47521733e"
        },
        "date": 1781963717548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10489292,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56633,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "af5f0874d424d303b206caff92cf331cf317ca72",
          "message": "refactor: split clone interval extraction",
          "timestamp": "2026-06-20T15:58:47+02:00",
          "tree_id": "c20c676283875666581ba148f4131f09d90e1d86",
          "url": "https://github.com/fallow-rs/fallow/commit/af5f0874d424d303b206caff92cf331cf317ca72"
        },
        "date": 1781964146051,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10418951,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56584,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "edf288a8af526c09c2a0909dcef07ad2494cff6a",
          "message": "refactor: split health shared analysis prep",
          "timestamp": "2026-06-20T16:05:33+02:00",
          "tree_id": "826dd61b4317fc7e4ef2515f2439410af4cd12d8",
          "url": "https://github.com/fallow-rs/fallow/commit/edf288a8af526c09c2a0909dcef07ad2494cff6a"
        },
        "date": 1781964532875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10440671,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56604,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "16360a0025390b9ecca036ec07664d33a6bb5204",
          "message": "refactor: group code mode arg dispatch",
          "timestamp": "2026-06-20T16:09:06+02:00",
          "tree_id": "9b7709b68168e2e09ddf92c1f9842c92412d6801",
          "url": "https://github.com/fallow-rs/fallow/commit/16360a0025390b9ecca036ec07664d33a6bb5204"
        },
        "date": 1781964752026,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10394655,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56575,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "97462e517bf3524c5309673b0770a43fc3b8816a",
          "message": "refactor: split codeowners parse state",
          "timestamp": "2026-06-20T16:13:39+02:00",
          "tree_id": "ce3163fb68c09b91c4830799b4396ffa1ce469c7",
          "url": "https://github.com/fallow-rs/fallow/commit/97462e517bf3524c5309673b0770a43fc3b8816a"
        },
        "date": 1781965028809,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10435295,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56595,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "498a0948fe7d39c27616b4f00e2ced6bb07e6a3d",
          "message": "refactor: split analysis pipeline phases",
          "timestamp": "2026-06-20T16:18:21+02:00",
          "tree_id": "08778436dbf57fbb2910d800947d120bcac98055",
          "url": "https://github.com/fallow-rs/fallow/commit/498a0948fe7d39c27616b4f00e2ced6bb07e6a3d"
        },
        "date": 1781965303655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10472767,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56592,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "71d4f8ed28ee53b34e3cbfa29846ec37ff532e45",
          "message": "refactor: split health finding collection",
          "timestamp": "2026-06-20T16:21:42+02:00",
          "tree_id": "cb8c49f9c2adf662dad5984529820017707adcee",
          "url": "https://github.com/fallow-rs/fallow/commit/71d4f8ed28ee53b34e3cbfa29846ec37ff532e45"
        },
        "date": 1781965509451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10441655,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56597,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "8f313d479b98ada7112ec674cd2135c2cfa235f6",
          "message": "refactor: split base collection rules",
          "timestamp": "2026-06-20T16:28:56+02:00",
          "tree_id": "f899e788f427fd078c3cb42d566d5af57a591157",
          "url": "https://github.com/fallow-rs/fallow/commit/8f313d479b98ada7112ec674cd2135c2cfa235f6"
        },
        "date": 1781965950499,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10427583,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56580,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ac987df598ee477b778417ab2591b455ce4c2328",
          "message": "refactor: split specifier resolution phases",
          "timestamp": "2026-06-20T16:42:50+02:00",
          "tree_id": "a33879001b43a2634e4825474d05cabf4a421294",
          "url": "https://github.com/fallow-rs/fallow/commit/ac987df598ee477b778417ab2591b455ce4c2328"
        },
        "date": 1781966785509,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10393279,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56574,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "90312950b59f8a69f44b181283271c5748cd2fae",
          "message": "refactor: split css property token collection",
          "timestamp": "2026-06-20T16:47:00+02:00",
          "tree_id": "861454345c1f383fc9b94131512ec3106759dc80",
          "url": "https://github.com/fallow-rs/fallow/commit/90312950b59f8a69f44b181283271c5748cd2fae"
        },
        "date": 1781967035333,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10430063,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56576,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a7b117a8e66538ddc2cfbe7e989bbd226fb87481",
          "message": "refactor: split call sink capture",
          "timestamp": "2026-06-20T17:02:45+02:00",
          "tree_id": "b448824da3fcef62509c204ae01059343dd770db",
          "url": "https://github.com/fallow-rs/fallow/commit/a7b117a8e66538ddc2cfbe7e989bbd226fb87481"
        },
        "date": 1781967997542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10452631,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56614,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9a154d2b0d82d2ec737efe64b87fc24b02764da9",
          "message": "refactor: split member assignment sink capture",
          "timestamp": "2026-06-20T17:10:09+02:00",
          "tree_id": "172910a0cad58507db2c492adb9954fd0d94701f",
          "url": "https://github.com/fallow-rs/fallow/commit/9a154d2b0d82d2ec737efe64b87fc24b02764da9"
        },
        "date": 1781968422798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10441383,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56605,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "086246b5e8c4b6706cce868d443c1201e42910c9",
          "message": "refactor: split health report input assembly",
          "timestamp": "2026-06-20T17:20:28+02:00",
          "tree_id": "79151e178b642066489a6bdcf6639544eca218a2",
          "url": "https://github.com/fallow-rs/fallow/commit/086246b5e8c4b6706cce868d443c1201e42910c9"
        },
        "date": 1781969040238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10434591,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56596,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "17f2f49aebd1fda430dbe1c521a7a86996246b46",
          "message": "refactor: split lsp code action assembly",
          "timestamp": "2026-06-20T17:24:47+02:00",
          "tree_id": "d820b316644c2124e836531c9b91b8caf8f57b24",
          "url": "https://github.com/fallow-rs/fallow/commit/17f2f49aebd1fda430dbe1c521a7a86996246b46"
        },
        "date": 1781969299113,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10432303,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56579,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e8c584bb058c547d215603e5e5eb23f6046c5c98",
          "message": "refactor: split extractor merge phases",
          "timestamp": "2026-06-20T17:31:37+02:00",
          "tree_id": "b9d2a207807e91dffc3ac8b93f838e3566965558",
          "url": "https://github.com/fallow-rs/fallow/commit/e8c584bb058c547d215603e5e5eb23f6046c5c98"
        },
        "date": 1781969728628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10421583,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56563,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "48cb04fabb7375f32edaff7e635fe45c995076ae",
          "message": "refactor: split introduced finding filtering",
          "timestamp": "2026-06-20T17:40:07+02:00",
          "tree_id": "93f132799218e2a311f1517baacceaecec5b7e6d",
          "url": "https://github.com/fallow-rs/fallow/commit/48cb04fabb7375f32edaff7e635fe45c995076ae"
        },
        "date": 1781970176363,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10448383,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56572,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe51f1c840c9ce790a7e8d081b20d5cb5663f428",
          "message": "fix(unrendered-component): credit Vue components rendered through namespace re-exports\n\nThe unrendered-component render-usage chain walk (credit_rendered_sfc_chain)\nfollowed named and star re-export edges but never followed a namespace\nre-export edge (export * as List from './components/List', encoded as\nimported_name == \"*\", exported_name == \"List\"). A design system that exposes\ncompound components as namespaces and renders members via dotted tags\n(import { List } from '@/design-system'; <List.Root />) had every such member\nfalsely reported as reachable-but-rendered-nowhere.\n\nThe chain walk now follows a namespace re-export edge matching the walked name\nand credits every SFC the namespace target re-exports via a name-agnostic\ncredit_all_reexported_sfcs helper, mirroring the existing direct import * as ns\nhandling. Over-crediting can only suppress a finding, never create one. A\nnamespace barrel that is never consumed stays correctly flagged. Analyze-layer\nonly, so no CACHE_VERSION bump and no output/schema/CLI change.\n\nFixes #1351.",
          "timestamp": "2026-06-20T23:20:08+02:00",
          "tree_id": "a7465f66caf4ba901fb47a10ed68d64601101792",
          "url": "https://github.com/fallow-rs/fallow/commit/fe51f1c840c9ce790a7e8d081b20d5cb5663f428"
        },
        "date": 1781990803077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10404391,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56590,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dab1571c0f49795d93ebe1725dc84449ae2bb025",
          "message": "fix(unrendered-component): credit whole-namespace-import rendered components\n\nFollow-up to the #1351 named-import fix. The unrendered-component detector also\nfalse-flagged components rendered through a whole-namespace import\n(import * as DS from '@/design-system'; <DS.List.Root />) when the design-system\nbarrel re-exported through nested export * as / export * barrels. That path goes\nthrough the ImportedName::Namespace arm of credit_static_import, which re-walked\neach re-export edge under the unmatched name '*', crediting nothing past a direct\nleaf named re-export.\n\nThe arm now routes through the name-agnostic credit_all_reexported_sfcs helper,\ncrediting every SFC reachable from the imported module through any re-export\nshape. A component reachable but outside the imported namespace still flags.\n8 benchmark fixtures byte-identical.\n\nRefs #1351.",
          "timestamp": "2026-06-20T23:42:59+02:00",
          "tree_id": "cebcb77bc1aaf6c1bd7b7f773a8570f9749ad4dc",
          "url": "https://github.com/fallow-rs/fallow/commit/dab1571c0f49795d93ebe1725dc84449ae2bb025"
        },
        "date": 1781992114438,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10432335,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56580,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5da5e73aba1b06bebe51be17f1d65c30c5a36ee7",
          "message": "chore: release v2.101.0",
          "timestamp": "2026-06-21T00:12:15+02:00",
          "tree_id": "d912638b67ebf4779656a5082130ceba5dfcd5aa",
          "url": "https://github.com/fallow-rs/fallow/commit/5da5e73aba1b06bebe51be17f1d65c30c5a36ee7"
        },
        "date": 1781993776311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10430271,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56589,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "16ef25b141f81fc45db5809eee3a6abd725a9a16",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.101.0",
          "timestamp": "2026-06-21T00:56:22+02:00",
          "tree_id": "ca000e10f40d551ed0ec73addf20fae7c8f59c11",
          "url": "https://github.com/fallow-rs/fallow/commit/16ef25b141f81fc45db5809eee3a6abd725a9a16"
        },
        "date": 1781996384585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10436623,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56597,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fde7abc51cd3cc841cc981968bac245b22fce12",
          "message": "refactor: ratchet unit-size/interfacing clippy gates and bundle param clusters\n\nTighten the project's SIG-aligned unit-size and unit-interfacing gates to their next ratchet step and eliminate the resulting outliers with genuine refactors.\n\n- .clippy.toml: too_many_lines 150 to 100, too_many_arguments 7 to 6. Every production function is now under 100 lines; the 7-parameter outliers drop from 25 to 4 (frozen public/deprecated APIs with reasoned #[expect]).\n- Over-100-line production functions are split into cohesive private helpers; private 7-param functions are bundled into input/context structs (SarifCtx, HealthScanCtx, SecurityRankingInput, LoadConfigArgs, and several *Input structs).\n- Test fixtures keep their length via reasoned #[expect] rather than being fragmented.\n\nBehavior is unchanged: clippy --all-targets -D warnings clean at the new thresholds, full test suite green, output byte-identical across all formats.",
          "timestamp": "2026-06-21T11:55:42+02:00",
          "tree_id": "ace49869b9140fea7508da29f06e9c12a7d54020",
          "url": "https://github.com/fallow-rs/fallow/commit/6fde7abc51cd3cc841cc981968bac245b22fce12"
        },
        "date": 1782035982041,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10414959,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56559,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
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
          "id": "de828f7de4029d5b61344f15f82a9fb76b997877",
          "message": "test: cover hardcoded-secret classification and import-resolution fallbacks",
          "timestamp": "2026-06-21T20:37:49+02:00",
          "tree_id": "253c25e92677f18774115490d78fef368c6086d5",
          "url": "https://github.com/fallow-rs/fallow/commit/de828f7de4029d5b61344f15f82a9fb76b997877"
        },
        "date": 1782067323509,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10396327,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56576,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b594834c097157dda41ea60229d9d4e193f1f8a9",
          "message": "test(config,ci): make env-var tests deterministic on Windows CI\n\nurl_timeout and FALLOW_BOT_LOGIN tests raced on parallel env mutation (passed on macOS, failed windows-latest). config: pure url_timeout_from parser, no env mutation. ci: serialize the two FALLOW_BOT_LOGIN override tests behind a shared mutex.",
          "timestamp": "2026-06-22T09:30:30+02:00",
          "tree_id": "b8815aae5fca9fbdc9145db97ca9e3e92af85ffa",
          "url": "https://github.com/fallow-rs/fallow/commit/b594834c097157dda41ea60229d9d4e193f1f8a9"
        },
        "date": 1782113952172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10457143,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56565,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1584760b83c1e91ded7b8431455772ee0de9efc2",
          "message": "ci: de-flake sidecar-resolution tests and pin zizmor version\n\nExtract pure resolve_sidecar_from_output helper so the yarn/npm sidecar tests stop spawning a subprocess (flaked under instrumented Coverage CI). Pin Actions Security to uvx zizmor@1.26.1 so a new audit cannot redden main with no fallow change.",
          "timestamp": "2026-06-22T10:11:04+02:00",
          "tree_id": "67875dd49ec395a5a4dc454b10cd649c6bbb9810",
          "url": "https://github.com/fallow-rs/fallow/commit/1584760b83c1e91ded7b8431455772ee0de9efc2"
        },
        "date": 1782116475445,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10451447,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56586,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
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
          "id": "93e9700587dda05b878ea7fa8b20e027254e9a52",
          "message": "Merge pull request #1363 from fallow-rs/fix/review-quality\n\nfeat: graph-grounded review brief, decision surface, walkthrough loop, and symbol trace",
          "timestamp": "2026-06-22T10:44:26+02:00",
          "tree_id": "d978aafb6323609462762565ee59cb62a2329047",
          "url": "https://github.com/fallow-rs/fallow/commit/93e9700587dda05b878ea7fa8b20e027254e9a52"
        },
        "date": 1782118387140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10443087,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56579,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "88fe8a03a5384d902d0ddc025bad03d29266b1ce",
          "message": "fix(vscode): resolve native fallow binaries from platform packages (#1359)\n\nThe extension only probed node_modules/.bin/<name> and honored fallow.lspPath\nvia a bare existsSync, so a global or local npm install was never detected and\nthe LSP was re-downloaded on every startup (and CLI resolution failed with\nautoDownload off). On Windows the .bin entry is a non-spawnable .cmd/.ps1\nlauncher shim, and the real executable lives in the @fallow-cli/<target>\nplatform package.\n\nResolve the real native executable directly:\n- findLocalBinary now probes node_modules/@fallow-cli/<target>/<name>(.exe)\n  first (mirroring npm/fallow/scripts/platform-package.js), then the unix .bin\n  shim; on Windows it never returns the unspawnable shim.\n- findBinaryInPath re-resolves a .cmd/.ps1 launcher shim on PATH to the sibling\n  platform-package exe (both npm-prefix layouts), skipping it if absent.\n- resolveConfiguredBinaryPath honors fallow.lspPath as typed: exact file, a\n  directory install folder, a missing Windows extension, and a directly\n  configured launcher shim, plus the fallow CLI sibling for commands.ts.\n\nOn Linux both gnu and musl package names are probed since libc is not detected\nin the extension host. Adds deterministic cross-platform regression tests that\nmock os/fs/path to exercise the win32 and linux resolution from a POSIX host.",
          "timestamp": "2026-06-22T11:09:37+02:00",
          "tree_id": "0c7b8b8e6fc8fec7e10a1883bca5e3cc7c846629",
          "url": "https://github.com/fallow-rs/fallow/commit/88fe8a03a5384d902d0ddc025bad03d29266b1ce"
        },
        "date": 1782119701488,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10425135,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56564,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d65589eac55a4823d0f9cbf98990200f7c200e30",
          "message": "fix(audit): make non-reusable base-worktree paths unique per call\n\nBaseWorktree::create built the non-reusable worktree path from pid plus a\nwall-clock nanos read. nanos is not monotonic and repeats across threads, so two\naudit runs in one process (parallel unit tests, or a future in-process batch)\ncould mint the same temp path and race on `git worktree add`; the loser failed\nand the audit aborted with a generic exit 2. It surfaced as a flaky\naudit::tests::audit_dupes_falls_back_to_own_discovery_when_health_off (and audit\nsiblings) under parallel test runs, exposed once the Windows schema stack\noverflow stopped aborting the suite before those tests ran.\n\nAppend a process-global monotonic counter so every path is distinct regardless\nof clock resolution; the pid stays the first segment so orphan-sweep parsing is\nunchanged. Adds deterministic uniqueness and pid-parse regression tests.",
          "timestamp": "2026-06-22T12:52:17+02:00",
          "tree_id": "77d1a352eb910070ee9620c34c0d204ad7858c00",
          "url": "https://github.com/fallow-rs/fallow/commit/d65589eac55a4823d0f9cbf98990200f7c200e30"
        },
        "date": 1782125851526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10416703,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56594,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2ce880ffbb3ddd8ec62daee23e545c067584f4a",
          "message": "perf(cli): speed up command-only surfaces\n\nReuse file discovery in fallow list so plugin and entry-point listing do not walk the same project twice.\n\nRun optional fallow inspect evidence queries concurrently while capping each child to a fair share of the requested thread budget. Skip dirty-worktree checks for coverage upload dry-runs because no SHA-keyed upload happens.\n\nBenchmarked the affected release-binary command paths with hyperfine and verified output equivalence for the changed JSON and text surfaces.",
          "timestamp": "2026-06-23T00:22:47+02:00",
          "tree_id": "7cffd6e4edff66653cc96f929df11b94f1f9506d",
          "url": "https://github.com/fallow-rs/fallow/commit/d2ce880ffbb3ddd8ec62daee23e545c067584f4a"
        },
        "date": 1782167234068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10435375,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56614,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8c0f881df379523229daf23bef79db86d45e3fe",
          "message": "fix(telemetry): classify CLI failure reasons\n\nRecord lower-level cloud runtime failures before they reach generic emit_error paths, and let the workflow epilogue use explicit, noted, or fallback failure reasons before telemetry is serialized.\n\nAdd a scheduled PostHog fail-rate gate for the published CLI version so regressions like the 2.101.0 spike are detected against a trailing baseline after enough telemetry is present.\n\nFixes fallow-rs/fallow-cloud#375.\nFixes fallow-rs/fallow-cloud#376.",
          "timestamp": "2026-06-23T09:37:24+02:00",
          "tree_id": "4f4f98c5bdc0f4547e3977b0632c1486af79f15a",
          "url": "https://github.com/fallow-rs/fallow/commit/a8c0f881df379523229daf23bef79db86d45e3fe"
        },
        "date": 1782200451706,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10405487,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56602,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5de6a978fd5fd97b5533d6710ab8228c5c108062",
          "message": "feat(review): change_anchors for the walkthrough guide + validator (#1367)\n\nPer-hunk content-addressed change_anchors in the walkthrough guide; the validator accepts signal_id OR change_anchor (anchor_kind), folded into the snapshot hash. Schema + .d.ts regenerated.",
          "timestamp": "2026-06-23T10:10:30+02:00",
          "tree_id": "c61803b365bdcefc84e1d1e4efe16e9dd42ae0b2",
          "url": "https://github.com/fallow-rs/fallow/commit/5de6a978fd5fd97b5533d6710ab8228c5c108062"
        },
        "date": 1782202515326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10424431,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56602,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95e55a7cd35a29eaa7b53b4973225a81982c9fff",
          "message": "feat(cli): enrich decision surface with honest consumer count + trade-off clause\n\nThe human decision surface presented each removal or rename decision without two facts that change how a reviewer reads it: how many in-repo modules still import the symbol, and the structural trade-off the change makes. Deleting an export reads very differently when zero modules depend on it versus eight.\n\nThis computes an honest internal_consumer_count from the module graph per decision and renders a one-line trade-off clause in the human surface (audit_decision_surface.rs, audit_brief.rs, check/mod.rs). Both fields are added to the JSON contract and the generated TypeScript and JSON schemas, so the review surface and any agent read the same data. The clause keeps subject-verb agreement across singular and plural consumer counts.",
          "timestamp": "2026-06-23T10:24:30+02:00",
          "tree_id": "4f9301c0736bb915968055ec60b482f7054b7215",
          "url": "https://github.com/fallow-rs/fallow/commit/95e55a7cd35a29eaa7b53b4973225a81982c9fff"
        },
        "date": 1782203412872,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10441623,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56582,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f893d59ec16b212fde2555f59411a30990579cd9",
          "message": "feat(lsp): React component intelligence + deeper prop extraction\n\nSurface descriptive React/Preact component context in the editor with no new rule, finding, severity, or gating. A code lens above each component summarizes it (render fan-in, prop count, hook breakdown), and a per-prop hover shows whether the prop is read in the body and how many call sites pass it, plus a prop-drilling trace (`forwarded N levels: A > B > C`) when the prop is forwarded. The data is an in-process serde-skip carrier read only by the LSP, gated on the editor `collect_usages` path so bare `fallow` / `audit` never compute it.\n\nThe same change deepens the React prop harvest feeding the existing `unused-component-prop` rule: same-file typed-interface props (`(props: Props) => props.x`) and generic `forwardRef<Ref, Props>`, not only inline destructure, with the zero-false-positive abstain ladder intact. No new CLI / JSON / MCP / SARIF / CI / schema surface; `CACHE_VERSION` 185 to 188.",
          "timestamp": "2026-06-23T10:59:52+02:00",
          "tree_id": "d0a1609844973fbae671e3e15d7c4b82938278fb",
          "url": "https://github.com/fallow-rs/fallow/commit/f893d59ec16b212fde2555f59411a30990579cd9"
        },
        "date": 1782205441484,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10454993,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56974,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ffd4caa625a79cdcc9bb233d73c6c69a5e51131",
          "message": "test(unused-members): cover issue-844 typed-instance crediting at monorepo path-alias scale\n\nAdds a regression test for issue #844's useMemo-bound typed-instance crediting at multi-package monorepo + tsconfig path-alias scale, reparented into the existing issue_844 module with a monorepo fixture. Test-only, no source change.",
          "timestamp": "2026-06-23T11:07:32+02:00",
          "tree_id": "b8b748e3b7226b7d114b1588c912a4b3ac9f3c1b",
          "url": "https://github.com/fallow-rs/fallow/commit/0ffd4caa625a79cdcc9bb233d73c6c69a5e51131"
        },
        "date": 1782205854605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10459905,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 57005,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5e53b54fc2c0fc7668449b432727f58044bd839",
          "message": "fix(dead-code): credit merged namespace star re-export values\n\nMerged namespace/value declarations can produce duplicate same-named exports. A value consumer imported through an export-star barrel now keeps the same type/value intent as a direct named import, including multi-hop star barrels that need synthetic forwarding stubs.\n\nThe graph re-export pass now carries importer context through star propagation, splits synthetic type and value forwarding, and trace selection prefers the referenced duplicate export. The regression fixture covers the reported shape plus mixed type/value consumers.\n\nFixes #1373.",
          "timestamp": "2026-06-23T17:16:46+02:00",
          "tree_id": "6cb71d05a8c607d2375e4b8d4a9d9cd3af82b1be",
          "url": "https://github.com/fallow-rs/fallow/commit/b5e53b54fc2c0fc7668449b432727f58044bd839"
        },
        "date": 1782228092779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10450817,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56989,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "8a83dc0e86232d874f845eee306c75f3fb9c95d7",
          "message": "chore: release v2.102.0",
          "timestamp": "2026-06-23T21:57:36+02:00",
          "tree_id": "85570dec2eca4a16b2f60214ee9c23381f294998",
          "url": "https://github.com/fallow-rs/fallow/commit/8a83dc0e86232d874f845eee306c75f3fb9c95d7"
        },
        "date": 1782244970579,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10442057,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56977,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "bb16e3b6c725d214056e46b098dac56b46226d24",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.102.0",
          "timestamp": "2026-06-23T22:50:32+02:00",
          "tree_id": "7912ec0c3aea28faa9bc8b0c09de18eee3f3bac8",
          "url": "https://github.com/fallow-rs/fallow/commit/bb16e3b6c725d214056e46b098dac56b46226d24"
        },
        "date": 1782248079190,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10450433,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56987,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7de6b4ee07eb2635621af39a10e120bd8b75db8b",
          "message": "fix(config): normalize leading dot ignore patterns\n\nStrip a single leading ./ before compiling ignorePatterns and ignoreUnresolvedImports so user globs match the project-root-relative paths used by source discovery and unresolved-import filtering.\n\nAdd focused regression coverage for resolved matchers and the source walker so the silent no-match case stays fixed.\n\nFixes #1385.",
          "timestamp": "2026-06-24T11:56:51+02:00",
          "tree_id": "4076857b89fbc8bc694e5149f0acaf8a8de66a4f",
          "url": "https://github.com/fallow-rs/fallow/commit/7de6b4ee07eb2635621af39a10e120bd8b75db8b"
        },
        "date": 1782295207779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10449681,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56998,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0a7fdd8e75cae2c130f6c9ba24e822f4ba8d13a",
          "message": "feat(dupes): ignore tests by default\n\nAdd test and mock path defaults to duplicate detection while keeping duplicates.ignoreDefaults: false as the opt-out. Optimize merged ignore matching so default skip accounting does not add another glob pass per file.\\n\\nFixes #1386.",
          "timestamp": "2026-06-24T14:16:50+02:00",
          "tree_id": "a273c5ad4ad73933ad99e582f5d4e433a598ac4b",
          "url": "https://github.com/fallow-rs/fallow/commit/c0a7fdd8e75cae2c130f6c9ba24e822f4ba8d13a"
        },
        "date": 1782303643109,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10484009,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56993,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d80978332b8dba841a4ace0abc8a375b4b19df3",
          "message": "feat(coverage): hint source-map upload command when cloud coverage is unresolved (#1431)\n\nWhen `fallow coverage analyze --cloud` returns a coverage_unresolved warning\n(the cloud could not map runtime positions to source, almost always because no\nsource maps were uploaded for the commit) and the project has built source maps\non disk, print a copy-paste hint naming the exact upload command and build dir:\n\n  Hint: found source maps under .next/ that may not be uploaded for this commit.\n    Run `fallow coverage upload-source-maps --dir .next` so runtime coverage\n    attributes to your source files.\n\nRe-running the upload fixes both the never-uploaded and the stale-SHA cases, so\none hint covers both. Human output only: JSON consumers already get the\nstructured coverage_unresolved warning in report.warnings. The hint is gated on\nthe cloud warning code so it never fires when resolution is healthy. Scanned\nbuild dirs (dist, .next, out, build) cover the common bundlers; the scan skips\nnode_modules and stops at the first .map.",
          "timestamp": "2026-06-24T21:53:51Z",
          "tree_id": "9ed8d496f7d3d8bd34088f9149ce52df056d0600",
          "url": "https://github.com/fallow-rs/fallow/commit/7d80978332b8dba841a4ace0abc8a375b4b19df3"
        },
        "date": 1782338304800,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10463489,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 57008,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c8927efaf8a3677d36986701e43f4a1ed574758",
          "message": "fix(extract): harden member usage crediting (#1634)\n\n* fix(extract): harden member usage crediting\n\nConsolidate Vue template close parsing, inline Pinia store member crediting, and same-file/cross-module factory-return member tracing into one extract false-positive hardening slice.\n\nBump parse cache semantics for the new extraction facts and add regression fixtures across extract, graph, and core.\n\n* perf(extract): omit empty factory returns from cache\n\n* perf(extract): compact factory return payloads",
          "timestamp": "2026-06-26T15:03:14+02:00",
          "tree_id": "750609ea8a4058e92a9c8204421f5fee75fd1072",
          "url": "https://github.com/fallow-rs/fallow/commit/4c8927efaf8a3677d36986701e43f4a1ed574758"
        },
        "date": 1782479267417,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10627257,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58589,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "367ecaf9c03de9a5643aba4e141a520ba035171e",
          "message": "fix(extract): credit Pinia store members through typed params (#1489 Case 2)\n\nA Pinia store passed as a param typed ReturnType<typeof useFooStore> (inline or\nvia a local type alias), and read as store.member, props.store.member, or\nconst { member } = props.store, was reported as an unused-store-members false\npositive: crediting only joined on the store-factory name and never resolved a\nparam typed as the store.\n\nRecords the type-alias-to-factory mapping and resolves a store-typed param to\nthe factory name through the existing binding_target_names remap, gated on the\nuse<Name>Store convention so a non-store ReturnType param never masks a real\nunused member. Extract-only; no analyze, CLI, or LSP change. CACHE_VERSION\nbumped 191 to 192.\n\nCompletes #1489 (Case 1, the inline form, shipped in #1634).\n\nCloses #1489.",
          "timestamp": "2026-06-26T15:23:40+02:00",
          "tree_id": "55fa1adc270c18c91bcb83e840e4d6b4e622e668",
          "url": "https://github.com/fallow-rs/fallow/commit/367ecaf9c03de9a5643aba4e141a520ba035171e"
        },
        "date": 1782480423967,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10646073,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58567,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "400c8416172afe7c1ae78c8bdd04dfb159e91ec7",
          "message": "test(core): pin #1441 inferred-return factory member crediting\n\n## Summary\n\nThe factory/composable indirection false positive for `unused-class-members` was\nfixed in #1634 (factory-return crediting), but its fixtures all annotate the\nfactory return type. Issue #1441's headline is specifically the INFERRED return\ntype: `const api = useApi(); api.Member()` where `useApi` has no return\nannotation, so the class type reaches the consumer only through the typed\nmodule-local the factory returns.\n\nVerified on current `main` that the exact #1441 repro is fixed (`Api.ViaFactory`\nno longer flagged), with a non-vacuous control (a genuinely dead member still\nflags). This PR pins that exact inferred-return shape against regression and\nrecords the user-facing CHANGELOG entry the original fix omitted.\n\nTest-only plus a fixture and CHANGELOG entry; no production code change.\n\nCloses #1441.",
          "timestamp": "2026-06-26T15:45:14+02:00",
          "tree_id": "92818d3665d76f20bfd3ee13407fd89fcb7b544c",
          "url": "https://github.com/fallow-rs/fallow/commit/400c8416172afe7c1ae78c8bdd04dfb159e91ec7"
        },
        "date": 1782481906214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10657225,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58586,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7dadcaa188d4cc744330d120389c0b4b942fb098",
          "message": "fix(svelte): credit bind:/style:/class: directive shorthands as prop usage\n\nA Svelte directive written without an explicit value is shorthand for `directive:NAME={NAME}`, so the directive name itself references a local binding: `bind:open` = `bind:open={open}`, `style:height` = `style:height={height}`, `class:active` = `class:active={active}`. The template scanner only credited `use:`/`animate:`/`in:`/`out:`/`transition:` directive names, so a prop referenced only through a `bind:`/`style:`/`class:` shorthand was reported as `unused-component-props`.\n\nCredit the directive name as a reference only for value-less attributes; with an explicit `={...}` value the name is a target (child prop, CSS property, or class name) and the value path already credits the real binding. A leading-character guard skips CSS custom properties (`style:--accent`).\n\nCACHE_VERSION 192 -> 193: prop `used_in_template` flags change.\n\nFixes #1641",
          "timestamp": "2026-06-27T21:28:41+02:00",
          "tree_id": "74631c1ce7cab6cf9b65d269c0befb2e9eb5ab07",
          "url": "https://github.com/fallow-rs/fallow/commit/7dadcaa188d4cc744330d120389c0b4b942fb098"
        },
        "date": 1782589064106,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10613072,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58546,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1775944e57c47367250f410889f2948545f8789a",
          "message": "fix(vue): credit v-bind shorthand and <style> v-bind() as prop usage\n\nTwo Vue `unused-component-props` false positives from the SFC scanner missing prop references.\n\n1. Value-less `v-bind` same-name shorthand (Vue 3.4+): `:open` = `:open=\"open\"`, `:some-prop` = `:some-prop=\"someProp\"`. The camelCase argument of a value-less `:arg` / `v-bind:arg` is now credited.\n\n2. `<style> v-bind()`: Vue SFC CSS `v-bind(accent)` / `v-bind(props.accent)` / `v-bind('a.b')` binds a script or prop value into CSS. `<style>` bodies are now scanned for these references (quote- and paren-aware) and the referenced binding is credited.\n\nA `v-bind` written with an explicit value is unchanged. CACHE_VERSION 193 -> 195.\n\nRefs #1641.",
          "timestamp": "2026-06-27T22:20:18+02:00",
          "tree_id": "70fcb3b09cffc2a37b3a5d6cf85294cfe1ee98cb",
          "url": "https://github.com/fallow-rs/fallow/commit/1775944e57c47367250f410889f2948545f8789a"
        },
        "date": 1782592065884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10640625,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58613,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b006fb79cf1e6b80608532b80cdf290a9d9baad3",
          "message": "feat(coverage): confidence-discriminator contract on analyze findings (#1645)\n\n* feat(coverage): emit confidence-discriminator contract on analyze findings (#321)\n\nEvery `coverage analyze` finding now carries a `discriminators` block alongside its verdict so an agent can reproduce the verdict and see the min-observation confidence cap instead of re-deriving them: tracking_state (called / never_called / untracked) from the three-state signal, invocation_ratio (invocations / trace_count), the low_traffic_threshold + min_observation_volume in effect (resolved CLI-side with the sidecar's own defaults, 0.001 / 5000), and trace_count + meets_observation_volume (floor visibility).\n\nF4: makes the EXISTING Fallow-owned discriminators legible; not a new or external signal and gates nothing. Additive + backwards-compatible (Optional, omitted when absent; the merge pipeline populates it, the cloud-join path omits it pending #328). All output formats + snapshots unaffected (fixtures omit it). fallow-rs/fallow-cloud#321\n\n* chore(schema): regenerate output-schema for the discriminator block (#321)\n\nThe new RuntimeCoverageDiscriminators struct + discriminators finding field changed the derived JsonSchema; regenerate the committed docs/output-schema.json so the schema_emit drift tests pass. Additive only.",
          "timestamp": "2026-06-27T23:00:07+02:00",
          "tree_id": "38924ceb8cc7d7b8c8eccadfb0a8c3dcde340fc0",
          "url": "https://github.com/fallow-rs/fallow/commit/b006fb79cf1e6b80608532b80cdf290a9d9baad3"
        },
        "date": 1782594334483,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10640305,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58612,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a664dea3888b76e535b83f46b4ab2b4d4cf0f49",
          "message": "feat(coverage): mirror cloud trust-output contract on local analyze report (#1646)\n\n* feat(coverage): mirror cloud trust-output contract on local analyze report (#316, #319)\n\n`coverage analyze` now emits the cloud runtime-context trust-output shape on the local report: actionable + actionability_reason + actionability_verdict (#316, a capture with no tracked functions is non-actionable with a first-class insufficient_evidence verdict, never read as cold) and a provenance block (#319: data_source, is_production 'unknown' locally, freshness_days, untracked_ratio, unresolved_ratio, stale, stale_after_days 14 mirrored from the cloud RUNTIME_STALE_AFTER_DAYS).\n\nF4: actionable is a non-action floor and provenance is context only; neither gates a positive verdict or confidence. The cloud-join path (analyze --cloud) carries the same shape; full cloud-provenance pass-through is #328. Additive (only the JSON format surfaces the block; 2 snapshots updated). fallow-rs/fallow-cloud#316 fallow-rs/fallow-cloud#319\n\n* chore(schema): regenerate output-schema for runtime-coverage provenance/actionable (#316, #319)\n\nThe new RuntimeCoverageProvenance struct + actionable/provenance report fields changed the derived JsonSchema; regenerate the committed docs/output-schema.json so the schema_emit drift tests pass. Additive only.",
          "timestamp": "2026-06-27T23:27:47+02:00",
          "tree_id": "4a134cb6d61be100c26b2f3907c296dc54b08da4",
          "url": "https://github.com/fallow-rs/fallow/commit/5a664dea3888b76e535b83f46b4ab2b4d4cf0f49"
        },
        "date": 1782595937153,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10631257,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58598,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8eb3dd6a2103fdcd20f210957ed7a0d4ff8914b",
          "message": "refactor: consolidate engine api and output contracts\n\nSplit the architecture into explicit engine, output, API, and programmatic CLI boundaries so CLI rendering is no longer the implicit API surface. Typed engine results now feed CLI, LSP, NAPI, MCP, and programmatic consumers through shared contracts.\n\nMove output contracts out of CLI ownership, replace extraction sentinel protocols with typed semantic facts, unify issue metadata and cache fingerprints, and keep the graph cache behind stable FileId-aware keys. The final perf pass also removes an allocation from dupes identifier labeling.",
          "timestamp": "2026-06-28T07:30:51+02:00",
          "tree_id": "d9c5eb2f44852a326fc1c97da926f36b46b28d80",
          "url": "https://github.com/fallow-rs/fallow/commit/f8eb3dd6a2103fdcd20f210957ed7a0d4ff8914b"
        },
        "date": 1782624937640,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10590968,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58376,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ac68a1a4e99d9ee38ff9198c519f438d172358d2",
          "message": "chore: release v2.103.0",
          "timestamp": "2026-06-28T08:34:02+02:00",
          "tree_id": "790514ee70408a663a30317868d06140ab2ba051",
          "url": "https://github.com/fallow-rs/fallow/commit/ac68a1a4e99d9ee38ff9198c519f438d172358d2"
        },
        "date": 1782628740967,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10566809,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58414,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e28929f58d96b190038826bce07c38808cff4166",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.103.0",
          "timestamp": "2026-06-28T09:38:13+02:00",
          "tree_id": "9575d956e7f2887730990aedd3331d1ee44d733d",
          "url": "https://github.com/fallow-rs/fallow/commit/e28929f58d96b190038826bce07c38808cff4166"
        },
        "date": 1782632594040,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10602281,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58421,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00f0814ca8d59228a2ff587a2ddaaaad524ceb6e",
          "message": "fix(config): resolve config passed as a named const to a wrapper call\n\n`find_config_object` (the shared resolver behind every config-parsing plugin) resolved a bare `export default config` identifier but not a config passed as an identifier argument to a wrapper call: `export default withMDX(nextConfig)` (the official @next/mdx docs idiom), `module.exports = createJestConfig(customConfig)`, nested `withMDX(withFoo(nextConfig))`, and curried `compose(...)(nextConfig)` all resolved to nothing, so the Next.js plugin never saw `pageExtensions` and App Router `page.mdx` pages were reported as unused-files.\n\n`resolve_wrapped_config_object` follows a wrapper call's argument (through nested wrapper calls and TS `satisfies`/`as`) to its local `const NAME = {...}`, wired as a fallback in both the default-export and `module.exports` paths. Already-resolving shapes are unchanged; byte-identical issue counts on all eight benchmark fixtures. On leerob.io (exact idiom) the fix removes all 4 App Router `page.mdx` false positives and adds nothing.\n\nFixes #1642.",
          "timestamp": "2026-06-28T15:32:16+02:00",
          "tree_id": "1a7774334197fb53b43f93881c1202b1b506e1a1",
          "url": "https://github.com/fallow-rs/fallow/commit/00f0814ca8d59228a2ff587a2ddaaaad524ceb6e"
        },
        "date": 1782653874101,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10614385,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58438,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7226852618979a43dbceeb860ca3bacc8369e7a5",
          "message": "perf(graph): cache dunce::canonicalize results during import resolution\n\nImport classification realpath's every specifier that resolves to a\nnode_modules / output-dir / symlinked target (the non-raw-map hits in\nResolvedPathContext::resolve), and the same package path is\nre-canonicalized once per file that imports the package. canonicalize\nis a pure function of the path's on-disk state, constant within a run.\n\nAdd a session-local CanonicalizeCache on ResolveContext keyed by input\npath (created fresh per resolve_all_imports call, so watch-mode rebuilds\nsee filesystem changes). Cuts the resolve-imports stage ~5% on a large\nmonorepo; the realpath/canonicalize syscalls also dominate the resolver\nFS traffic that the resolve-bound health command pays. Output is\nbyte-identical.",
          "timestamp": "2026-06-28T23:40:46+02:00",
          "tree_id": "9ab4ad01fba8f73b295e5017f61a4298818fbd16",
          "url": "https://github.com/fallow-rs/fallow/commit/7226852618979a43dbceeb860ca3bacc8369e7a5"
        },
        "date": 1782683075619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10598393,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58418,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "226f80498eaa9aa7159cb8181709c7b59245a1f3",
          "message": "perf(core): scope public-API entry-point canonicalization to the entry's package\n\npublic_api_package_entry_points built a path->FileId index that\ncanonicalized every module up front (one realpath syscall per module,\n~21k on a large monorepo) so an entry point expressed in a module's\ncanonical form could be matched. That eager sweep is almost entirely\nwasted: the consumer already canonicalizes the ENTRY and matches it\nagainst raw module paths, which covers every project with no\nintra-project symlinks.\n\nBuild the index from raw module paths only, and handle the residual\nsymlinked-module case lazily and package-scoped: on a miss, canonicalize\nonly the modules under the entry's own package_root. A fruitless miss\n(e.g. a bin script that is not a discovered module) is now bounded by\nthat package's file count instead of canonicalizing the whole graph.\n\nCuts the analyze stage ~30% (~280ms) on a 21k-file monorepo, and the\nremoved realpath storm also stabilizes the stage's run-to-run variance.\nOutput is byte-identical.",
          "timestamp": "2026-06-29T09:45:45+02:00",
          "tree_id": "f5c49bda62dfa1a6ad737d409281f799b3237416",
          "url": "https://github.com/fallow-rs/fallow/commit/226f80498eaa9aa7159cb8181709c7b59245a1f3"
        },
        "date": 1782719379414,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10565022,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58318,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b294a60257e6900b0a209a2ffc0da38dd20ebcc0",
          "message": "chore: mark fallow-programmatic-cli publish = false to match release crate list",
          "timestamp": "2026-06-29T09:54:58+02:00",
          "tree_id": "d7af88fbd12ad06a63fd3d4ee2dfa4bd93809cf5",
          "url": "https://github.com/fallow-rs/fallow/commit/b294a60257e6900b0a209a2ffc0da38dd20ebcc0"
        },
        "date": 1782719933278,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10567534,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58322,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "4caf4a8dfd12600fe6f5d01d752d3917128faf51",
          "message": "test(core): pin scoped-canonical symlink fallback for public-API entry points\n\nExtract the matching core of resolve_entry_via_scoped_canonical into a\nModuleGraph-free helper (match_canonical_entry_under_package) and add a\nUnix-only tempdir+symlink unit test for the intra-project-symlink case\nthe fallback exists to handle: a module discovered through a symlinked\ndirectory whose raw path differs from the canonicalized entry path. The\ncommon no-symlink path is covered by the byte-identical integration\ncorpus; this pins the residual branch the raw-map lookup cannot reach,\nplus the package-root scoping and non-match negatives.",
          "timestamp": "2026-06-29T09:58:47+02:00",
          "tree_id": "0bb2821cebb0d91e1ad76767c82aaab0695e8e6f",
          "url": "https://github.com/fallow-rs/fallow/commit/4caf4a8dfd12600fe6f5d01d752d3917128faf51"
        },
        "date": 1782720153541,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10562126,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58316,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "4f5aabde8eda855175aee7c0e1dbd695f31e9923",
          "message": "test(release): guard crates.io publish list matches publishable workspace crates",
          "timestamp": "2026-06-29T10:19:37+02:00",
          "tree_id": "e545ffd666a6dc86ee5d9cc7f957f4e730cabff1",
          "url": "https://github.com/fallow-rs/fallow/commit/4f5aabde8eda855175aee7c0e1dbd695f31e9923"
        },
        "date": 1782721372817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10591294,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58314,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a338591d631f24f0e14e108b19437a93e2179e4e",
          "message": "fix(members): credit framework-dispatched OpenLayers methods and coerced toString\n\nTwo `unused-class-members` false positives where the only use is not an explicit `instance.member()` call (split from #1441).\n\nGAP 1: a method OpenLayers invokes by convention on a subclass of an `ol/interaction/*` base (`handleEvent`, the `PointerInteraction` `handle*Event` / `stopDown` protocol) is credited via a heritage-scoped, import-source-verified built-in. A same-named local base does not credit; a genuinely-dead non-dispatched member still reports. Analyze-time only.\n\nGAP 2: a `toString` invoked only through string coercion (template-literal interpolation, `String(...)`, or `+` with a string sibling) is credited when `new Class()` flows directly into the coercion position. A tagged template (`html` / styled-components / `gql`) is NOT a coercion position and does not credit (an `in_tagged_template_quasi` guard, consumed per-quasi so a nested plain template still coerces). CACHE_VERSION bumped.\n\nFixes #1638.",
          "timestamp": "2026-06-29T10:57:22+02:00",
          "tree_id": "be9a162d693d208216b4e64dcb96d539ec15f428",
          "url": "https://github.com/fallow-rs/fallow/commit/a338591d631f24f0e14e108b19437a93e2179e4e"
        },
        "date": 1782723897386,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10585385,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58557,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a64ff318455f77583bbe9d4805792fc5da7e2962",
          "message": "fix(telemetry): note find-state for security survivors and blind-spots\n\nThe security survivors and blind-spots subcommands emit a security workflow\ntelemetry event but never noted their find-state, so the process-global\nfindings-present accumulator stayed unset and findings_present serialized as\nnull. findings_present is the field that distinguishes found-candidates from\nerrored (security exits non-zero only on findings when the rule is raised to\nerror), so a null value lost that signal for these modes.\n\nrun_survivors now notes its retained (non-dismissed) candidate count and\nrun_blind_spots notes its unresolved-callee-site count before exit, matching the\ndefault, --file, and --gate paths. No change to the telemetry payload shape.\nFour neuter-verified regression tests assert findings_present is non-null per\nsubcommand.\n\nFixes #1650.",
          "timestamp": "2026-06-29T11:55:32+02:00",
          "tree_id": "3e35cb9e456b47f0693db84438926a4e688139ab",
          "url": "https://github.com/fallow-rs/fallow/commit/a64ff318455f77583bbe9d4805792fc5da7e2962"
        },
        "date": 1782727246252,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10618336,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58533,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae0214951c811db6eb71ff52ef0dbd4413a460b9",
          "message": "feat(config): exempt props via unusedComponentProps.ignorePattern (#1654)\n\nAdds an opt-in `unusedComponentProps: { ignorePattern: \"<regex>\" }` config section. The regex is matched against each declared component prop's local destructure binding name (e.g. `_stage`), exempting it from `unused-component-props`. Honors the leading-underscore \"accepted-but-intentionally-unused\" convention (Svelte 5 `$props()`, React destructure) mirroring TypeScript `noUnusedParameters` and ESLint `varsIgnorePattern` / `argsIgnorePattern`.\n\nApplies to all four arms sharing the `ComponentProp` IR (Vue, Svelte, Astro, React/Preact). Validated at config load (invalid regex fails load with exit 2), compiled defensively at resolve. Matching is unanchored, so users anchor with `^_`. A human-output note reports the exempted count. No `CACHE_VERSION` bump. Default behavior unchanged (opt-in only).\n\nFixes #1648.",
          "timestamp": "2026-06-29T12:36:17+02:00",
          "tree_id": "7b1f22d13dcc425a67d2b921a0f36ad30246f441",
          "url": "https://github.com/fallow-rs/fallow/commit/ae0214951c811db6eb71ff52ef0dbd4413a460b9"
        },
        "date": 1782729652188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10621953,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58565,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59b20c7565930a5cb0df3e62a3e711941b1cde69",
          "message": "fix(telemetry): note find-state for flags/watch and guard the workflow class\n\nFollow-up to #1650. flags and watch emit a code_quality_review telemetry event\n(the same workflow as combined fallow, which populates findings_present) but\nnever noted their find-state, so findings_present serialized as null. flags now\nnotes its feature-flag count and watch notes each cycle's issue count.\n\nFocused dead-code/dupes trace and impact-closure views early-return before the\nnormal note; they still run the full analysis, so they now record its result\ncount. findings_present reflects what the analysis surfaced independent of the\noutput view.\n\nAdds a structural guard: an exhaustive Workflow::surfaces_findings()\nclassification (a new workflow variant fails to compile until classified) plus a\ndebug-build invariant at the single telemetry event-emission point that fails\nfast if a finding-surfacing workflow records a non-failing event without noting\nfind-state. The guard caught the dead-code and dupes trace-mode gaps during this\nchange. No change to the telemetry payload shape.\n\nRefs #1650.",
          "timestamp": "2026-06-29T13:01:42+02:00",
          "tree_id": "76e2940f8897c7b8bda5f8e293138ee89bb0cb44",
          "url": "https://github.com/fallow-rs/fallow/commit/59b20c7565930a5cb0df3e62a3e711941b1cde69"
        },
        "date": 1782731606310,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10584473,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58557,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fcfee6ad71b3bc70c16cabc59b5b6fa4d93123d",
          "message": "feat(review): runtime-weighted focus map + safe explicit-skip\n\nWhen `--runtime-coverage` is present, the weighted focus map (the `fallow\nreview` / `audit --brief` attention ranking) weights hot files by bucketed\ninvocation count so a hot path amplifies the blast and outranks an\notherwise-equal cold unit, and a unit the runtime proves cold (only\nsafe-to-delete findings, no hot path) that carries zero deterministic signal and\nno confidence flag earns the safe explicit-skip label. With no runtime input the\noutput is byte-identical to the existing deterministic focus map: the runtime\ncomponent is 0 and omitted from the wire, and no unit can reach the skip arm.\n\n- output: FocusLabel::Skip (runtime-backed only) + additive FocusScore.runtime\n- engine: RuntimeFocus on FocusInputs; score_unit adds the bucketed weight;\n  is_safe_skip gates on runtime-cold + zero static signal + no confidence flag\n- wiring: build_runtime_focus derives per-file hot/cold from the runtime-coverage\n  report; reconcile_runtime_focus (pure, unit-tested) does the mixed-verdict\n  exclusion + hot-excludes-cold + peak aggregation\n- docs/output-schema.json + the generated VS Code / npm type contracts\n  regenerated (FocusLabel gains skip, FocusScore gains runtime)\n\nHonest boundary: the runtime report's findings omit active functions, so a\nmid-traffic active function below the hot threshold is invisible to the cold\nsignal; hence safe-skip is gated on zero static risk + no confidence flag,\nscoped to diff files, and always advisory (kept in the escape-hatch list).",
          "timestamp": "2026-06-29T12:50:55Z",
          "tree_id": "2941ce7c1624b4a06c1a72af23f076d2d85ed4c7",
          "url": "https://github.com/fallow-rs/fallow/commit/1fcfee6ad71b3bc70c16cabc59b5b6fa4d93123d"
        },
        "date": 1782737687760,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10573649,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58538,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19a5a58c8a5ce73b2928dd0a8ed2b7d7a6e3f15b",
          "message": "test(review): end-to-end runtime-weighted focus map coverage\n\nAdds a gated integration test driving real `fallow review --runtime-coverage`:\na signed stub sidecar reports a hot path on a changed module, and the test\nasserts the brief's focus map weights it (a `runtime` score component that\nlifts the file into `review-here`). A negative control runs the same repo\nwithout `--runtime-coverage` and asserts no `runtime` component and no `skip`\nlabel.\n\nCovers the seam the unit tests cannot reach on their own: that\n`--runtime-coverage` populates `result.health.report.runtime_coverage` and that\n`build_runtime_focus` joins it onto the focus map end-to-end. Gated behind the\n`test-sidecar-key` cargo feature (signed stub + minted license).",
          "timestamp": "2026-06-29T13:26:11Z",
          "tree_id": "83dd19a5d0c726271e84d53a33e105516eb9f4fc",
          "url": "https://github.com/fallow-rs/fallow/commit/19a5a58c8a5ce73b2928dd0a8ed2b7d7a6e3f15b"
        },
        "date": 1782739788888,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10626201,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58573,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35bf033986a4d8bc2aea76d6fb52febf16202fb9",
          "message": "docs(test): target the binary in the runtime-focus e2e run command\n\nThe documented run command used a bare `runtime_focus` name filter, which\nmatches none of the test fn names (`review_runtime_coverage_*`) and so runs\nzero of the two tests. Use `--test audit_brief_runtime_focus_tests` instead.",
          "timestamp": "2026-06-29T14:14:28Z",
          "tree_id": "87278c037e32f028ed04c59953929fae4b7b6703",
          "url": "https://github.com/fallow-rs/fallow/commit/35bf033986a4d8bc2aea76d6fb52febf16202fb9"
        },
        "date": 1782742713173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10630377,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58576,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
          }
        ]
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
          "id": "4f87432ab0118d4ef65ee82dd2f0bdef0d80a85c",
          "message": "fix(review): correct --walkthrough rendered output\n\nFollow-up to #1657. Smoke-testing the walkthrough on a real multi-file\ndiff surfaced rendered-output bugs (the data and plumbing were fine):\n\n- counts: the Review Focus header, the status line, and the real changed\n  set now reconcile (staged + cleared + excluded == changed), with the\n  breakdown shown instead of three disagreeing totals.\n- non-source files (migrations, lockfiles, config) are surfaced as an\n  honest \"N non-source not reviewed\" bucket instead of silently dropped.\n- a de-prioritized or --mark-viewed file now collapses out of its stage\n  and appears only under Cleared (each file in exactly one place).\n- Stage-1 guidance is no longer truncated mid-word; the trailing\n  coordination question survives and only the contract-member list caps\n  to N + \"+M more\".\n- markdown no longer re-prints the path or emits escaped backticks.\n- dropped the contradictory raw \"(score N)\"; the visible fact carries\n  the ordering signal.\n\nThe fact, accounting, and membership logic is shared in a new\nfallow-output::walkthrough_render module so the human and markdown\nsurfaces stay consistent by construction. The --walkthrough-guide and\n--walkthrough-file JSON contracts and the review exit-0 invariant are\nuntouched: --walkthrough --format json stays byte-identical to\n--walkthrough-guide.",
          "timestamp": "2026-06-29T16:50:54+02:00",
          "tree_id": "286331f9188607b44c2dc9667e02a752cebbd806",
          "url": "https://github.com/fallow-rs/fallow/commit/4f87432ab0118d4ef65ee82dd2f0bdef0d80a85c"
        },
        "date": 1782744889805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10604377,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58543,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
          }
        ]
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
          "id": "bab6c6815925776b36ddccb503ea8bd73e9daba6",
          "message": "fix(review): make --walkthrough output release-clean\n\nFollow-up to #1660. A tidiness pass on the walkthrough renderer:\n\n- ordering: each stage now orders by the concrete count it displays, so\n  position is explained by a visible number. Stage 1 by out-of-diff\n  consumer count (\"consumed by N modules\"); Stage 2 by fan-in importer\n  count, then fan-out. The most-imported file leads Stage 2 instead of\n  sitting mid-list, and no abstract score/connectedness number is shown.\n- markdown now honors --mark-viewed: viewed files collapse out of their\n  stage into Cleared in markdown too (was silently ignored), matching the\n  human surface.\n- the status line reports the number of stages actually rendered (was a\n  hardcoded \"2 stages\" that could lie when a stage was empty).\n- removed em-dashes from the rendered output (headers and list\n  separators) for one consistent separator vocabulary.\n\nRender-surface and sort-order only: --walkthrough --format json stays\nbyte-identical to --walkthrough-guide, and the review exit-0 invariant is\nuntouched.",
          "timestamp": "2026-06-29T18:44:52+02:00",
          "tree_id": "7763038eecab77495314b931d2a072315b509489",
          "url": "https://github.com/fallow-rs/fallow/commit/bab6c6815925776b36ddccb503ea8bd73e9daba6"
        },
        "date": 1782751710451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10579977,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58549,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "309059d83fa1302f18488cd06726af84538bcac6",
          "message": "feat(health): confidence-gate the styling-health grade on sparse CSS\n\nAdd a descriptive confidence marker to the styling-health CSS-quality grade so a grade computed from a thin authored-CSS surface is not read with the same weight as one from a full design system (CSS program roadmap Phase 1). Descriptive-only: no exit-code, badge, gating, or code-score effect.\n\nStylingHealth gains confidence (high/low) and confidence_reason; low when total_declarations is below 50, where the declaration-normalized penalty ratios are hypersensitive. Score, grade, penalties, and STYLING_HEALTH_FORMULA_VERSION are byte-identical. Human output dims a low-confidence grade (prefixed ~) with a plain-text caveat; the JSON field is additive (schema + both TS contracts regenerated). The v2 rubric was re-validated against a 10-project corpus and left unchanged.",
          "timestamp": "2026-06-29T19:44:03+02:00",
          "tree_id": "fa620d70e56cf122261ec1a3ecdacf5d0bd95ff4",
          "url": "https://github.com/fallow-rs/fallow/commit/309059d83fa1302f18488cd06726af84538bcac6"
        },
        "date": 1782755501065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10582001,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58553,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
          }
        ]
      }
    ]
  }
}