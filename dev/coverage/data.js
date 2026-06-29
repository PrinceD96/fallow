window.BENCHMARK_DATA = {
  "lastUpdate": 1782751736547,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Fallow Coverage": [
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "411df94954babda13edc97328327db70eda21399",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.100.0",
          "timestamp": "2026-06-19T13:33:37+02:00",
          "tree_id": "bd173402d162c19b107f9b8b408c318622dbc280",
          "url": "https://github.com/fallow-rs/fallow/commit/411df94954babda13edc97328327db70eda21399"
        },
        "date": 1781869197244,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781882383649,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781884760872,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0541f1184331b39db2815b515156432e5efaba63",
          "message": "docs(npm): refresh stale benchmark claims in npm README\n\nSync npm README benchmark framing to the corrected main README (jscpd Rust rewrite is faster for duplication; knip mixed). Refs #1316.",
          "timestamp": "2026-06-19T19:52:25+02:00",
          "tree_id": "53b80895a170864424782d6f311bb6f740c95703",
          "url": "https://github.com/fallow-rs/fallow/commit/0541f1184331b39db2815b515156432e5efaba63"
        },
        "date": 1781891769430,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781893477173,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781894223377,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781895904624,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781899590492,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "8d7c91573b893d9a67822de901165195397a4b3a",
          "message": "chore: remove stray plans/ research doc and ignore the path\n\nA research scratch doc was committed under an undotted plans/ directory.\nScratch plan/research docs belong in the gitignored .plans/ and should not\nship in the repo. Remove the file and add plans/ to .gitignore so git add -A\ncannot sweep one in again.",
          "timestamp": "2026-06-19T22:20:35+02:00",
          "tree_id": "5aebfecbf67775ca0b9d4c7398775497d1f4cf42",
          "url": "https://github.com/fallow-rs/fallow/commit/8d7c91573b893d9a67822de901165195397a4b3a"
        },
        "date": 1781900676986,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dba8a87a0f9d2b7d5e122de05896af8bae5e886",
          "message": "docs(benchmarks): refresh comparison numbers on current tooling\n\nRegenerate README + BENCHMARKS from one fresh run (fallow 2.100.0 vs knip 6.6.1 / jscpd 5.0.10 / madge 8.0.0). knip errors on next.js/vite/vue-core; jscpd 5.x faster for duplication. Refs #1316.",
          "timestamp": "2026-06-19T22:59:29+02:00",
          "tree_id": "f5d11d1633e8b9098499e5192d322178455be2c6",
          "url": "https://github.com/fallow-rs/fallow/commit/0dba8a87a0f9d2b7d5e122de05896af8bae5e886"
        },
        "date": 1781902995745,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781939545646,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781940587358,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781940826716,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781941707948,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781942645829,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781945465580,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781947001967,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781947256911,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781948179902,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781949590520,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781952076014,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781955386796,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781958591943,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781958880163,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781959373627,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781959892464,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781960731319,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781961001267,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781961465915,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781962830194,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781963118232,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781963712105,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781964182430,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781964798360,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781965019196,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781965982251,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781967070934,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781968015406,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781969066469,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781969337606,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781969746076,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781970233084,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781990651040,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781992226316,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781993819634,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781996423134,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782035983572,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ecd9905bffc7e9c19fbc45833e05540253b88da1",
          "message": "ci(coverage): enforce a hard 92% coverage floor\n\nCoverage was report-only; add a hard 92% floor to coverage.yml (current main ~92.7%). Ratchets upward only; closes the CRAP loop alongside the clippy complexity gate.",
          "timestamp": "2026-06-21T15:48:06+02:00",
          "tree_id": "c19fefc3efaf0a45fb3b56a6131e873189eb11c7",
          "url": "https://github.com/fallow-rs/fallow/commit/ecd9905bffc7e9c19fbc45833e05540253b88da1"
        },
        "date": 1782049924762,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
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
        "date": 1782067311635,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.2,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a46ab94fc51b6eed0fb663af2f201cc589b802d",
          "message": "ci(zizmor): suppress adhoc-packages for ci.yml and release.yml\n\nzizmor v1.26.1 added the adhoc-packages audit, flagging four deliberate pinned --ignore-scripts installs (ci.yml tarball smoke test, release.yml two-step pinned npm bootstrap, pinned vsce/ovsx). All already hardened per the release-workflow boundary; ignore the audit for those two files, matching existing per-rule suppressions.",
          "timestamp": "2026-06-21T22:45:21+02:00",
          "tree_id": "35f9ff2cb1cecbb8fafa3223cb9b5fce7487a576",
          "url": "https://github.com/fallow-rs/fallow/commit/9a46ab94fc51b6eed0fb663af2f201cc589b802d"
        },
        "date": 1782074953756,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.2,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782115053999,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.2,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782116137204,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.2,
            "unit": "%"
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
        "date": 1782118155058,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782119736820,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "182e269f7d2fd6e18666e3d3d30d60d1291a6e53",
          "message": "test: raise RUST_MIN_STACK to 16 MiB so Windows test threads survive clap-tree construction\n\nlibtest spawns each test on a thread sized from RUST_MIN_STACK (default ~2 MiB),\nnot the main-thread /STACK reserve. Building the full Cli::command() clap tree\n(exercised by crates/cli/src/schema.rs tests) outgrew that on Windows as the CLI\nsurface expanded, aborting the whole test binary with STATUS_STACK_OVERFLOW. Pin\ntest threads to the same 16 MiB the main thread (/STACK) and rayon workers already\nuse, via .cargo/config.toml [env]. Harmless lazy virtual reserve on POSIX hosts.",
          "timestamp": "2026-06-22T11:34:56+02:00",
          "tree_id": "e5f397b646c06ad472d2d3ddad2ebc9e305274e3",
          "url": "https://github.com/fallow-rs/fallow/commit/182e269f7d2fd6e18666e3d3d30d60d1291a6e53"
        },
        "date": 1782121141433,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782125819354,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782167380880,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782200497141,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ce37db1bfe3eb610ae094d7a4bd873eb9eeb1a7",
          "message": "feat(review): the fallow review app (Electron) (#1366)\n\nNative Electron review app: author brief + decision surface + model-inferred trade-offs (fallow-validated via change_anchors) + diff with comment-back-to-the-agent. Spawns the workspace fallow build by default.",
          "timestamp": "2026-06-23T09:59:19+02:00",
          "tree_id": "b0cf7b7cb4f9ba7a34583562a9ed5feeb2d4a0ab",
          "url": "https://github.com/fallow-rs/fallow/commit/2ce37db1bfe3eb610ae094d7a4bd873eb9eeb1a7"
        },
        "date": 1782201806300,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782202561857,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782203539175,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782206045911,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e585f058e59b78b2d64339c7d16e380fbbcfc484",
          "message": "refactor(review-app): namespace persisted state under fallow-review instead of fre\n\nRenames the review app's terse `fre` storage/env prefix to the explicit `fallow-review` namespace and drops the stopgap _typos.toml allowlist. String-literal-only; no persisted-state migration needed.",
          "timestamp": "2026-06-23T11:28:32+02:00",
          "tree_id": "6f4fc465bd3ac4490e0f5d135b8a2d021034a3a0",
          "url": "https://github.com/fallow-rs/fallow/commit/e585f058e59b78b2d64339c7d16e380fbbcfc484"
        },
        "date": 1782207162601,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782228198539,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782245014982,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782248095749,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "235f9ce1be056885cbcada39fe438bd90e716874",
          "message": "docs: tighten fallow trace example in README to match command help",
          "timestamp": "2026-06-23T23:52:15+02:00",
          "tree_id": "e110046965757b6b09b1e18be9116c026eb55704",
          "url": "https://github.com/fallow-rs/fallow/commit/235f9ce1be056885cbcada39fe438bd90e716874"
        },
        "date": 1782251746646,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3a40fb927410b008aa0b454f3cbf1df293393a50",
          "message": "docs(agent): generate trace + decision-surface cli-reference sections; re-vendor skills",
          "timestamp": "2026-06-24T08:33:18+02:00",
          "tree_id": "a84a7f05b1087c6f0e6032cfd3d8652472060bad",
          "url": "https://github.com/fallow-rs/fallow/commit/3a40fb927410b008aa0b454f3cbf1df293393a50"
        },
        "date": 1782283038326,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "fd94cfd999c583c3a924a42ce365b3db647f1d4b",
          "message": "docs(agent): re-vendor skills with em-dashes removed",
          "timestamp": "2026-06-24T09:05:07+02:00",
          "tree_id": "018a6edc075220a546375ea6c2bdf7967606535c",
          "url": "https://github.com/fallow-rs/fallow/commit/fd94cfd999c583c3a924a42ce365b3db647f1d4b"
        },
        "date": 1782284976466,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "446714f8c8f9b5008f04454b92e896d0c9c3d06d",
          "message": "docs(npm): replace em-dash in platform package READMEs",
          "timestamp": "2026-06-24T09:17:36+02:00",
          "tree_id": "f8c90f0b22686134d950cd0c6152d7265dfa07b5",
          "url": "https://github.com/fallow-rs/fallow/commit/446714f8c8f9b5008f04454b92e896d0c9c3d06d"
        },
        "date": 1782285709627,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
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
          "id": "27d8a5402aededded27235521e4ad04400b59585",
          "message": "chore(deps): bump pnpm/action-setup from 6.0.8 to 6.0.9 (#1379)\n\nBumps [pnpm/action-setup](https://github.com/pnpm/action-setup) from 6.0.8 to 6.0.9.\n- [Release notes](https://github.com/pnpm/action-setup/releases)\n- [Commits](https://github.com/pnpm/action-setup/compare/0e279bb959325dab635dd2c09392533439d90093...0ebf47130e4866e96fce0953f49152a61190b271)\n\n---\nupdated-dependencies:\n- dependency-name: pnpm/action-setup\n  dependency-version: 6.0.9\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-24T09:59:10+02:00",
          "tree_id": "b351c12e5b2adf922b4c2d6299161d5f3ceed95a",
          "url": "https://github.com/fallow-rs/fallow/commit/27d8a5402aededded27235521e4ad04400b59585"
        },
        "date": 1782288183457,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782295327204,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782303655507,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782338399475,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782479349990,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782480452630,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782481797797,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a348354c0102d245827e063e16b07ac43e38ba4",
          "message": "docs(changelog): record the #1634 cluster FP fixes\n\nBroaden the store-member [Unreleased] entry to cover inline useFooStore().member (#1489 Case 1) and add the #1439 component-props entry that #1634 omitted. Docs-only.",
          "timestamp": "2026-06-26T15:51:11+02:00",
          "tree_id": "3f4d7f5cb9b4b71956c440b8baeed447f464ec8f",
          "url": "https://github.com/fallow-rs/fallow/commit/2a348354c0102d245827e063e16b07ac43e38ba4"
        },
        "date": 1782482173697,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782589548332,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782592037556,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782594444434,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782596033348,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 94.1,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782625080219,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782628764759,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "078c8372557fe5303dfa8d9de93123b07a75e402",
          "message": "fix(release): publish new fallow-output/engine/api crates to crates.io\n\nThe engine/output contract refactor (v2.103.0) split out fallow-output,\nfallow-engine, and fallow-api, which are build dependencies of the published\nfallow-config / fallow-cli crates. The hardcoded crates.io publish list omitted\nthem, so fallow-config could not resolve fallow-output on the index and the\npublish chain broke after fallow-types. Add the three crates in dependency\norder (output after types; engine after core; api after engine).",
          "timestamp": "2026-06-28T09:22:56+02:00",
          "tree_id": "5f321989fb0f47a8f7c105ccca93c3eb0b2293ed",
          "url": "https://github.com/fallow-rs/fallow/commit/078c8372557fe5303dfa8d9de93123b07a75e402"
        },
        "date": 1782631753432,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782632534090,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782653821264,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782683114906,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782719392689,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782720199839,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782721419560,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782723754876,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782727207439,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782729624092,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782731498375,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782737707620,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782739803917,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1782742693722,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
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
        "date": 1782744926872,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
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
        "date": 1782751733157,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      }
    ]
  }
}