window.BENCHMARK_DATA = {
  "lastUpdate": 1787125279072,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Fallow Real-World Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "79b1fc8050f8a278776f5302d6da992b0489ae7c",
          "message": "chore: release v2.27.6",
          "timestamp": "2026-04-10T22:27:17Z",
          "url": "https://github.com/fallow-rs/fallow/commit/79b1fc8050f8a278776f5302d6da992b0489ae7c"
        },
        "date": 1775894379534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 55,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 53,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 132,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 109,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 499,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 478,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 639,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 608,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 297,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 257,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3622,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3456,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "5ea37114e61b8f961c154288622959eb77afa39f",
          "message": "fix(flags): wire inline suppression into feature flag collection\n\nThe JSON output action suggested `// fallow-ignore-next-line feature-flag`\nbut the flags command never checked suppressions. Both the built-in and\ncustom flag collection loops now call `is_suppressed()` /\n`is_file_suppressed()` with `IssueKind::FeatureFlag`, matching the\ncontract the JSON output already promised.",
          "timestamp": "2026-04-12T08:00:05Z",
          "url": "https://github.com/fallow-rs/fallow/commit/5ea37114e61b8f961c154288622959eb77afa39f"
        },
        "date": 1775981442328,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 126,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 99,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 524,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 491,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 642,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 608,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 314,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 275,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3322,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3075,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Test User",
            "username": "bhanuprasad14",
            "email": "test@example.com"
          },
          "committer": {
            "name": "Test User",
            "username": "bhanuprasad14",
            "email": "test@example.com"
          },
          "id": "bc2ac04af20694bea9f773243d21077df9aec6ed",
          "message": "fix(test): prevent git operations from leaking into main repo via GIT_DIR\n\nWhen the pre-push hook runs cargo test, git sets GIT_DIR in the hook\nenvironment pointing to the main repo's .git directory. Test helpers\nthat create temp git repos via current_dir() were still committing to\nthe main repo because GIT_DIR overrides current_dir. Added\nenv_remove(\"GIT_DIR\") and env_remove(\"GIT_WORK_TREE\") to both the\nhealth_tests and audit_tests git helpers.",
          "timestamp": "2026-04-13T08:44:32Z",
          "url": "https://github.com/fallow-rs/fallow/commit/bc2ac04af20694bea9f773243d21077df9aec6ed"
        },
        "date": 1776071373527,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 61,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 123,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 106,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 530,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 464,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 647,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 616,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 300,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 266,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3696,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3472,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Test User",
            "username": "bhanuprasad14",
            "email": "test@example.com"
          },
          "committer": {
            "name": "Test User",
            "username": "bhanuprasad14",
            "email": "test@example.com"
          },
          "id": "8c957bdae413dc5401ba0167d6871447febbd30c",
          "message": "chore: benchmark full pipeline (check) instead of dead-code only\n\nThe real-world benchmark now runs `fallow check` which exercises\ndead-code + dupes + health together, matching what users actually\nrun. Previously only measured dead-code analysis.",
          "timestamp": "2026-04-13T22:26:07Z",
          "url": "https://github.com/fallow-rs/fallow/commit/8c957bdae413dc5401ba0167d6871447febbd30c"
        },
        "date": 1776119668628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 111,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 82,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 326,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 288,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 536,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 503,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 242,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 208,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2231,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2121,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Test User",
            "username": "bhanuprasad14",
            "email": "test@example.com"
          },
          "committer": {
            "name": "Test User",
            "username": "bhanuprasad14",
            "email": "test@example.com"
          },
          "id": "c157b043953c6bf27780b0545b07b83ad7a18079",
          "message": "fix: use bare fallow (not check) for real-world benchmarks\n\n`fallow check` is an alias for `fallow dead-code`. Bare `fallow`\nruns the full pipeline (dead-code + dupes + health).",
          "timestamp": "2026-04-13T22:33:17Z",
          "url": "https://github.com/fallow-rs/fallow/commit/c157b043953c6bf27780b0545b07b83ad7a18079"
        },
        "date": 1776120112174,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 173,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 170,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 265,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 263,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 176,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 177,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 485,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 461,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1271,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1195,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1393,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1371,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 700,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 674,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 11870,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 12054,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "aaee82e2b04b77783a12c6aafd46073a0426e197",
          "message": "perf: share analysis graph between check and health in combined mode\n\nExtends the shared parse optimization to also share the module graph\nand analysis results. Health's compute_filtered_file_scores now\nreuses the pre-computed AnalysisOutput instead of re-running\ndiscovery + plugins + resolution + graph build for file scoring.\n\nOn next.js (21K files): eliminates ~1.5s of redundant analysis.\nCombined with module sharing: 6.2s -> ~5.0s (-19%).",
          "timestamp": "2026-04-14T07:37:56Z",
          "url": "https://github.com/fallow-rs/fallow/commit/aaee82e2b04b77783a12c6aafd46073a0426e197"
        },
        "date": 1776153325991,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 128,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 121,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 186,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 180,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 123,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 118,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 354,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 322,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 750,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 713,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 682,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 694,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 437,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 375,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7717,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7334,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "89130f8d7377c10d72e1749e7a8729d71d89ab18",
          "message": "fix: expand Nx tokens in main and tsConfig fields, not just includePaths\n\n{projectRoot} and {workspaceRoot} can appear in any path-valued field\nin project.json. Hoisted token expansion above all three path fields\n(main, tsConfig, includePaths) so they all expand consistently.",
          "timestamp": "2026-04-14T08:49:59Z",
          "url": "https://github.com/fallow-rs/fallow/commit/89130f8d7377c10d72e1749e7a8729d71d89ab18"
        },
        "date": 1776156681477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 166,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 144,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 226,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 213,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 148,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 147,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 418,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 364,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 908,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 852,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 866,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 824,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 500,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 434,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 9172,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 8270,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "77c956fb040565e5f76901e7380751f9da1a3ba7",
          "message": "chore: release v2.38.0",
          "timestamp": "2026-04-15T08:53:07Z",
          "url": "https://github.com/fallow-rs/fallow/commit/77c956fb040565e5f76901e7380751f9da1a3ba7"
        },
        "date": 1776243213616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 122,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 114,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 192,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 188,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 123,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 146,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 385,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 337,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 783,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 716,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 736,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 753,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 559,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 516,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 8061,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7290,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "77c956fb040565e5f76901e7380751f9da1a3ba7",
          "message": "chore: release v2.38.0",
          "timestamp": "2026-04-15T08:53:07Z",
          "url": "https://github.com/fallow-rs/fallow/commit/77c956fb040565e5f76901e7380751f9da1a3ba7"
        },
        "date": 1776329599450,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 141,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 137,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 220,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 214,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 149,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 144,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 414,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 362,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 927,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 793,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 901,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 857,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 656,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 584,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 9149,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 8242,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "781f9c0fd1221ef7faa99c546bc320c02cb63644",
          "message": "fix(cli): support GitLab CODEOWNERS section headers and exclusions\n\nCloses #127. The CODEOWNERS parser previously treated `[Section name]`\nheaders as glob character classes, causing hard errors for `--group-by\nowner` and silent null ownership for `--ownership` on any GitLab\nproject using sections.\n\n- Recognize section headers (`[Name]`, `^[Name]`, `[Name][N]`) and skip\n  them as rules; propagate section default owners to bare pattern lines.\n- Accept GitLab 17.10+ exclusion patterns (`!path`) and clear ownership\n  for files whose last matching rule is a negation.\n- Emit a stderr warning when `--ownership` encounters an unparsable\n  CODEOWNERS instead of silently returning null ownership data.",
          "timestamp": "2026-04-17T08:46:47Z",
          "url": "https://github.com/fallow-rs/fallow/commit/781f9c0fd1221ef7faa99c546bc320c02cb63644"
        },
        "date": 1776415970874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 116,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 115,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 201,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 121,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 119,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 351,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 334,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 752,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 687,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 703,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 740,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 560,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 524,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7590,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7211,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8c3c68497551b1d29543c804460321996a0a5e75",
          "message": "fix(workspace): surface malformed package.json and unreachable glob matches\n\nSeven silent-drop sites in crates/config/src/workspace/{mod.rs,parsers.rs}\nbecome typed WorkspaceDiagnostic values carrying a kind discriminator\n(undeclared-workspace, malformed-package-json, glob-matched-no-package-json,\nmalformed-tsconfig, tsconfig-reference-dir-missing). Severity is per site: a\nmalformed root package.json exits 2 at config load (mirrors #468); declared\nworkspace package.json malformed warns and continues so analysis still runs\non the rest; glob-matched-no-package-json warns only when the path is not in\nthe conventional skip list and not in user ignorePatterns; shallow-scan\ncandidates stay silent because the user did not declare them; missing\ntsconfig.json stays silent. Diagnostics emit via deduplicated tracing::warn!\n(process-wide OnceLock keyed on canonical-root + kind + path) and land in a\nshared registry so the JSON envelope on check / dupes / health carries a new\noptional workspace_diagnostics[] field.\n\nA new fallow list --workspaces flag and a dedicated fallow workspaces\nsubcommand expose the discovery topology for introspection. The legacy\ndiscover_workspaces back-compat wrapper now routes through a silent\ncollector that does NOT emit, so sibling analyze + file-discovery callers\nno longer re-warn on paths the user already excluded via ignorePatterns.\nThe analyze pipeline's undeclared-workspace pass also folds into the same\nregistry and suppresses entries that already carry a MalformedPackageJson\ndiagnostic, so a typo'd workspace is no longer double-reported. Path\nnormalisation handles macOS /private/tmp canonicalisation symmetrically;\nPackageJson::load strips a leading UTF-8 BOM so Windows-authored or\nvite-fixture-style configs do not surface as false positives.\n\nFixes #473.",
          "timestamp": "2026-05-21T10:23:46Z",
          "url": "https://github.com/fallow-rs/fallow/commit/8c3c68497551b1d29543c804460321996a0a5e75"
        },
        "date": 1779360111199,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 153,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 148,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 252,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 230,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 149,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 130,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 477,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 384,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1062,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 872,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 880,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 847,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 746,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 672,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 8282,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7057,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d177bab8546290ca50321e3a8ab16d02ca74d456",
          "message": "fix(core): serialise trace output PathBufs with serde_path forward-slash (#585)\n\nAttach #[serde(serialize_with = \"serde_path::serialize\")] to every single-PathBuf field and serialize_vec to every Vec<PathBuf> field in the trace output structs (ExportTrace, ExportReference, ReExportChain, FileTrace, TracedReExport, DependencyTrace, CloneTrace). After PR #584 fixed path_matches so the lookup succeeded on Windows, the output still serialised backslash-separated paths via serde's default, breaking JSON consumers (MCP agents, CI glob filters, downstream pipelines) that expect forward-slash. CloneInstance.file already used this convention; trace structs now match.\n\nTwo cross-platform regression tests build a backslash-shaped PathBuf literal and assert the JSON contains the forward-slash form for every newly-decorated field.\n\nFixes the remaining MCP e2e e2e_trace_export_returns_json and e2e_trace_file_returns_json failures.\n\nRefs #561",
          "timestamp": "2026-05-22T08:43:06Z",
          "url": "https://github.com/fallow-rs/fallow/commit/d177bab8546290ca50321e3a8ab16d02ca74d456"
        },
        "date": 1779445612576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 136,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 133,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 242,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 239,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 132,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 138,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 450,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 397,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 999,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 911,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 914,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 904,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 756,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 664,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 8107,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7042,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f92318a75a2aee0732382d8069d8366931f01572",
          "message": "fix(tanstack): suppress Start virtual modules\n\nTanStack Start imports manifest and injected-head script modules through framework-provided virtual specifiers with a :v suffix. Those specifiers are not npm packages, but the TanStack plugin did not register them as virtual modules, so dead-code analysis reported them as unlisted dependencies.\n\nRegister the colon-suffixed TanStack Start virtual module prefixes through the existing plugin virtual-prefix hook. Add plugin-gated positive and negative coverage, including unresolved-import suppression and end-to-end analysis fixtures for static and dynamic imports.\n\nFixes #636.",
          "timestamp": "2026-05-23T07:33:06Z",
          "url": "https://github.com/fallow-rs/fallow/commit/f92318a75a2aee0732382d8069d8366931f01572"
        },
        "date": 1779527180055,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 151,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 143,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 260,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 240,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 145,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 130,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 446,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 379,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1194,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1160,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 891,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 874,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 786,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 710,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7728,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 6880,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "e32cc0a415dcfddc776e9ec032eed6de218e0135",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.80.0",
          "timestamp": "2026-05-24T08:10:02Z",
          "url": "https://github.com/fallow-rs/fallow/commit/e32cc0a415dcfddc776e9ec032eed6de218e0135"
        },
        "date": 1779614608573,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 170,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 146,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 262,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 223,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 141,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 127,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 433,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 356,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1090,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 955,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 852,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 893,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 755,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 674,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7470,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 6742,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "04fc48077af977a27894861d8db1a7c4243c4640",
          "message": "fix: recognize Danger and Stryker tooling configs\n\n* chore: open issue #618 implementation branch\n\n* fix: recognize Danger and Stryker tooling configs",
          "timestamp": "2026-05-25T11:08:53Z",
          "url": "https://github.com/fallow-rs/fallow/commit/04fc48077af977a27894861d8db1a7c4243c4640"
        },
        "date": 1779707581524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 133,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 131,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 247,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 229,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 132,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 126,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 436,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 350,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1104,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 997,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 904,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 918,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 759,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 679,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7389,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 6727,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e581961b5f8f1a63708017c4aeeb8beb299e855a",
          "message": "docs(coverage): correct stable_id cross-surface framing\n\nA thorough end-to-end smoke (real published 0.3.0 sidecar) showed stable_id is NOT immune to a function moving lines: function_identity_id hashes start_line, so a moved function gets a new stable_id (verified: coldFn fallow:fn:de5223fd@2 -> fallow:fn:62a6be2a@5, and the finding resurfaced against a saved baseline).\n\nThe shipped #506 docs claimed stable_id 'survives line moves' and that baselines keyed on it 'keep suppressing after a function moves lines'. That is false. Correct the framing in CHANGELOG, the --explain text (explain.rs), the baseline.rs writer/reader comments, and the RuntimeCoverageFinding.stable_id doc to describe the ACTUAL property: stable_id is a cross-surface (one value across findings/hot-paths/blast-radius/importance; the per-finding id uses a per-surface salt) and cross-producer (V8/Istanbul/oxc agree, columns excluded) join key. Like id, it changes when file/name/start_line change.\n\nCode behavior is unchanged; this is a documentation accuracy fix. Schema + VS Code/npm TS contracts regenerated. Refs #506.",
          "timestamp": "2026-05-27T10:24:58Z",
          "url": "https://github.com/fallow-rs/fallow/commit/e581961b5f8f1a63708017c4aeeb8beb299e855a"
        },
        "date": 1779879599520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 179,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 157,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 254,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 233,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 145,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 133,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 459,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 375,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1302,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1265,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 960,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 925,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 828,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 749,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 8387,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7524,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "bcd212c555565601468535fb59a364a4f5bec638",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.83.0",
          "timestamp": "2026-05-27T15:00:27Z",
          "url": "https://github.com/fallow-rs/fallow/commit/bcd212c555565601468535fb59a364a4f5bec638"
        },
        "date": 1779965779722,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 166,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 145,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 260,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 240,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 144,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 128,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 490,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 402,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1355,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1175,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 933,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1024,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 833,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 761,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 8591,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7401,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9af2175229a48f92e08f38e0a03eddbe47792a25",
          "message": "feat(config): warn when multiple config files coexist in one directory (#780)\n\nfind_and_load picks the first of .fallowrc.json > .fallowrc.jsonc >\nfallow.toml > .fallow.toml per directory. Previously a stale lower-precedence\nconfig (left over from a migration or a partial fallow init) was silently\nshadowed, so output looked correct but came from the wrong source.\n\nNow config discovery emits a deduped tracing::warn! (visible on stderr at the\ndefault level) naming the loaded file and the lower-precedence file(s) it\nignored, mirroring the existing warn_on_unknown_rule_keys path (process-wide\nOnceLock dedupe keyed on the canonical directory, thread-local test capture\nwith capture-before-dedupe). It fires once per directory per run; an explicit\n--config <path> performs no discovery and never warns.\n\nDocs and the fallow config help text now state that .fallowrc.json accepts\nJSONC and .fallowrc.jsonc is identical (the extension is only an editor hint),\nand document the first-match-wins precedence ladder.\n\nCloses #458",
          "timestamp": "2026-05-29T10:35:55Z",
          "url": "https://github.com/fallow-rs/fallow/commit/9af2175229a48f92e08f38e0a03eddbe47792a25"
        },
        "date": 1780051741808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 144,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 146,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 278,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 251,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 151,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 136,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 459,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 405,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1265,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1137,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 947,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1017,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 821,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 757,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 8375,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7656,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "005462b33c2696e8a810721f3fdd4a92495498d0",
          "message": "fix(plugins): credit oxlint CLI tooling packages (oxlint-tsgolint) as used (#802)\n\n* fix(plugins): credit oxlint CLI tooling packages (oxlint-tsgolint) as used\n\noxlint-tsgolint is the type-aware companion package the oxlint binary loads\nat runtime (via --type-aware / options.typeAware). It is never imported in\nsource nor listed in an .oxlintrc.json jsPlugins array, so the #607 jsPlugins\ncredit does not cover it. When declared in prod dependencies (where the general\ntooling-prefix credit does not apply, that only covers devDependencies), it was\nfalsely reported as unused.\n\nAdd oxlint-tsgolint to the oxlint plugin's tooling_dependencies, which is honored\nfor both prod and dev categories and is gated on the oxlint plugin being active.\nExact-name credit, not an oxlint- prefix, so an unrelated oxlint-prefixed prod\ndependency still reports.\n\nFixes #753\n\n* docs(plugins): document oxlint CLI tooling credit (oxlint-tsgolint)\n\ndetection.md + plugins.md note the exact-name oxlint-tsgolint tooling credit,\nCHANGELOG [Unreleased] gets the user-facing entry, and the agent-file baseline\nis re-blessed for the two edited rule files.\n\nRefs #753",
          "timestamp": "2026-05-30T05:37:34Z",
          "url": "https://github.com/fallow-rs/fallow/commit/005462b33c2696e8a810721f3fdd4a92495498d0"
        },
        "date": 1780132763233,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 165,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 154,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 257,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 258,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 144,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 130,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 453,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 384,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1302,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1158,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 929,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 900,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 816,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 741,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7534,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 6797,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cab4ab3dacdefa41a43f2172801f189ea42b5df4",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.85.0 (#816)\n\n* chore(napi): sync package.json / package-lock / index.js to v2.85.0\n\n* docs(telemetry): bump payload example version to 2.85.0",
          "timestamp": "2026-05-30T22:04:25Z",
          "url": "https://github.com/fallow-rs/fallow/commit/cab4ab3dacdefa41a43f2172801f189ea42b5df4"
        },
        "date": 1780221156292,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 144,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 134,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 269,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 259,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 147,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 134,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 471,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 389,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1255,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1236,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 924,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 925,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 835,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 752,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 8154,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7631,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "d57b9ba37630c6b5f9cf748b6a25ae3bb9a6c6bb",
          "message": "refactor(plugins): type config path parsing\n\nPath-shaped values extracted from JavaScript and TypeScript config files now flow through typed PathBuf helpers instead of plain strings. The parser keeps plugin output in forward-slash string form at the boundary, while webpack, Nuxt, Vite, SvelteKit, TypeScript, Wrangler, and Docusaurus consume filesystem paths internally where appropriate.\n\nThis keeps package-style alias semantics out of scope and preserves the existing PluginResult contract. Regression coverage now exercises mixed separators, project-root-style leading slashes, imported alias spread kind preservation, webpack context entries, and Nuxt srcDir normalization.\n\nFixes #448.",
          "timestamp": "2026-06-01T11:39:26Z",
          "url": "https://github.com/fallow-rs/fallow/commit/d57b9ba37630c6b5f9cf748b6a25ae3bb9a6c6bb"
        },
        "date": 1780317511063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 140,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 137,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 264,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 238,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 148,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 133,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 426,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 379,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1277,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1058,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 930,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1028,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 802,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 729,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7875,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7701,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "1c8319d890a2c984d3ef6dd67aaeca79fa1a284c",
          "message": "chore: release v2.86.0",
          "timestamp": "2026-06-02T11:00:50Z",
          "url": "https://github.com/fallow-rs/fallow/commit/1c8319d890a2c984d3ef6dd67aaeca79fa1a284c"
        },
        "date": 1780399306174,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 185,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 175,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 326,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 302,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 164,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 141,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 532,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 478,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1045,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1111,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 800,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 774,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 695,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 613,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7308,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 6836,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a45deb010be1b521c33ab78f8e3be4106658c183",
          "message": "fix: credit bare pnpm script binaries\n\nCredit dependency usage for package scripts, workspace scripts, and CI run blocks that invoke a declared package binary through bare `pnpm <binary>`. The parser keeps its syntax-only public path conservative, while the analysis path now receives dependency and script-name context before crediting pnpm implicit execution.\n\nKeep pnpm script delegation and built-in commands out of dependency credit, including local script names that were filtered out of production-mode analysis. This avoids trading the envinfo false positive for new false negatives around `pnpm build`, `pnpm lint`, `pnpm test`, `pnpm start`, `pnpm install`, `pnpm audit`, and `pnpm add`.\n\nFixes #914.",
          "timestamp": "2026-06-03T10:59:58Z",
          "url": "https://github.com/fallow-rs/fallow/commit/a45deb010be1b521c33ab78f8e3be4106658c183"
        },
        "date": 1780488007511,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 144,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 141,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 277,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 234,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 149,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 131,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 437,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 404,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1324,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1084,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 931,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 955,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 861,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 773,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7611,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 6824,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b740cf1a817c8d9bc8a7498f61e0e404f71a4ba4",
          "message": "fix(vscode): align provider and duplication behavior\n\nAdd a VS Code plugin that credits provider interface methods when a class implements the matching VS Code provider interface.\n\nForward VS Code duplication settings into LSP initialization options so live diagnostics match sidebar CLI analysis.\n\nHarden VS Code LSP restart handling for rapid config changes during client startup.\n\nFixes #948.\nFixes #905.",
          "timestamp": "2026-06-04T10:33:57Z",
          "url": "https://github.com/fallow-rs/fallow/commit/b740cf1a817c8d9bc8a7498f61e0e404f71a4ba4"
        },
        "date": 1780569897643,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 151,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 144,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 272,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 154,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 142,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 486,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1366,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1274,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1003,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 955,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 946,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 829,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 8766,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 8067,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fa9bc58bde716adda65d24bd66cdfb4af886d23",
          "message": "fix(mcp): gate unix-only test helpers",
          "timestamp": "2026-06-05T10:24:48Z",
          "url": "https://github.com/fallow-rs/fallow/commit/3fa9bc58bde716adda65d24bd66cdfb4af886d23"
        },
        "date": 1780656636338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 141,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 132,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 272,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 231,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 148,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 135,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 424,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 368,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1297,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1126,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 914,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 954,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 839,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 773,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7469,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7199,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e665f88427a70751a7c0b7cecc8f7379d00d3da4",
          "message": "fix(cli): name canonical `fallow dead-code` in user-facing messages (#1011)\n\nSeveral user-facing messages still told users to run the deprecated `fallow check` alias (which already prints a deprecation warning). The fix skip notes, migrate caveat, regression-baseline hint, and fix MCP tool descriptions now reference `fallow dead-code`. Internal doc comments updated to match; the `check` alias keeps working.",
          "timestamp": "2026-06-06T09:14:42Z",
          "url": "https://github.com/fallow-rs/fallow/commit/e665f88427a70751a7c0b7cecc8f7379d00d3da4"
        },
        "date": 1780738160202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 152,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 143,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 292,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 253,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 163,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 143,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 487,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 393,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1320,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1142,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 959,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 939,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 889,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 800,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7565,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7451,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f7161395e92145f1e673fa5b9d99bf52e60ec28e",
          "message": "fix: tighten security source matching\n\nTighten framework-source detection and package-subpath provenance for the security catalogue follow-up.",
          "timestamp": "2026-06-07T09:20:22Z",
          "url": "https://github.com/fallow-rs/fallow/commit/f7161395e92145f1e673fa5b9d99bf52e60ec28e"
        },
        "date": 1780826722483,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 196,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 175,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 315,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 256,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 162,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 139,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 501,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 428,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1360,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1327,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 973,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 931,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 896,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 802,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7998,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7173,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b6abad014ce375ed88a80cb57b0479dea588fa41",
          "message": "fix(security): keep source reachability diff matches\n\nShared diff filtering already retained security candidates when the sink anchor or detector trace matched the changed lines. Source reachability added a second trace under reachability, but that trace was not included in the diff predicate, so diff-scoped runs could hide a candidate introduced by an untrusted-source path change.\n\nInclude reachability.untrusted_source_trace in the shared diff filter, add regression coverage for that path, and update nearby comments so the ranking and SARIF docs describe the current source-reachability contract.\n\nFollow-up to #1050.",
          "timestamp": "2026-06-08T10:03:23Z",
          "url": "https://github.com/fallow-rs/fallow/commit/b6abad014ce375ed88a80cb57b0479dea588fa41"
        },
        "date": 1780919967278,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 162,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 158,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 369,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 316,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 185,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 162,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 613,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 556,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1156,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1009,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 898,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 897,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 757,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 685,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 8180,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7550,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aceeecd930028947fd21302a3fa83b59cfb671c0",
          "message": "feat(telemetry): add outcome buckets\n\nRecord coarse result-count buckets and review/report truncation fields in workflow telemetry without exposing exact counts, paths, rule ids, finding names, or snippets.\n\nWire the bucket helpers from final command results, preserve the existing findings_present and failure_reason contracts, and document the inspect-mode payload.\n\nFixes #1080.",
          "timestamp": "2026-06-09T10:27:46Z",
          "url": "https://github.com/fallow-rs/fallow/commit/aceeecd930028947fd21302a3fa83b59cfb671c0"
        },
        "date": 1781001613723,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 182,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 175,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 282,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 257,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 162,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 144,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 500,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 397,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1383,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1218,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 977,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 959,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 904,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 818,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 7697,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 7229,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "47a0e4cfd291e8203480fba8ae1dc6edda00f906",
          "message": "fix: credit napi-rs optional prebuild packages\n\nnapi-rs packages declare generated platform prebuilds as optionalDependencies, but their runtime loader selects them dynamically instead of through static imports. Fallow now reads package.json napi metadata and credits only exact generated package names listed in the same optionalDependencies map.\n\nThe plugin registry now has a package.json metadata hook that runs for both root and workspace packages. These credits are scoped to the declaring package.json, so unrelated sibling workspace dependencies remain reportable.\n\nFixes #1164.",
          "timestamp": "2026-06-10T10:24:02Z",
          "url": "https://github.com/fallow-rs/fallow/commit/47a0e4cfd291e8203480fba8ae1dc6edda00f906"
        },
        "date": 1781089210859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 237,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 222,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 425,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 398,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 262,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 231,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 1096,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 715,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1730,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1600,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1222,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1118,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1037,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 946,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 12431,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 11954,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1f2bf7070b2650dd2e613fe0b84df61f7363a741",
          "message": "fix(cli): clear test-only-dependency findings under single-type filters (#1194)\n\nIssueFilters::apply() clears every issue category not selected by a single-type filter flag, but the --unused-deps clear arm omitted test_only_dependencies, so a focused run like `fallow dead-code --unused-files` on a project with a production dependency imported only from test files leaked that test-only finding alongside the requested issue type.\n\nThis groups test-only-dependency with the other dependency kinds under --unused-deps (matching type-only and the --file scope, which already cleared all five categories), sets filter_flag to --unused-deps for the test-only-dependency row in the capability manifest, regenerates the SKILL.md issue-types table, and adds a neuter-verified filter-parity regression test.\n\nFixes #1192.",
          "timestamp": "2026-06-11T10:56:25Z",
          "url": "https://github.com/fallow-rs/fallow/commit/1f2bf7070b2650dd2e613fe0b84df61f7363a741"
        },
        "date": 1781177310774,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 243,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 220,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 490,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 397,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 261,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 242,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 692,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 628,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1667,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1480,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1140,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1116,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1030,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 911,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 11637,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 11034,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "8d811649ba1750b819d43474a374fe81cb8a447e",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.94.0",
          "timestamp": "2026-06-12T00:48:45Z",
          "url": "https://github.com/fallow-rs/fallow/commit/8d811649ba1750b819d43474a374fe81cb8a447e"
        },
        "date": 1781262467697,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 295,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 270,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 544,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 440,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 269,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 246,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 836,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 716,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1731,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1586,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1313,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1278,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1200,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1066,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 13445,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 12619,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e96ae8e67c33c9b923483e9827424c93db2e4bab",
          "message": "feat(security): flag use-client cones that reach server-only code (#1231)\n\nStage 2 of the Next.js RSC differentiated-detection program.\n\nExtends the opt-in `fallow security` `client-server-leak` rule (default `off`) with a second sink predicate: a `\"use client\"` file whose transitive static-import cone reaches **server-only code**, emitted as a distinct `server-only-import` candidate category on the same rule, suppress kind, and finding shape. fallow catches this without requiring the `server-only` poison package and before a build (Next.js only errors at build time when the marker is present).\n\n- **Narrow sink set** (FP-conservative, no DB-client heuristic): a `\"use server\"` module, a `server-only` import, or a named server-only API (`next/headers` `cookies`/`headers`/`draftMode`, `next/server`, node `fs`/`child_process`, both `node:` and bare forms).\n- **`next/dynamic(..., { ssr: false })` aware**: a server module reached only through the sanctioned client-only dynamic import is not a leak. The extract layer captures those import spans on `ModuleInfo.client_only_dynamic_import_spans` (CACHE_VERSION bump) and the BFS skips an edge reached only through them.\n- **Direct case**: a `\"use client\"` file that itself imports a server-only sink is reported with a single self-hop trace; the transitive emit is gated so it reports once.\n- Opt-in and candidate-framed (never a verified vulnerability); `security_findings` stays out of bare `fallow` / `audit`. `SecuritySchemaVersion` bumped to V7 since `client-server-leak` findings can now carry the `server-only-import` category.\n\nTeam review: rust, json-output, mcp reviewers (zero BLOCKs); the direct-case coverage gap, the V7 schema bump, stale doc/schema descriptions, a misleading fixture comment, and thin sink-predicate fixtures were all addressed with new tests. Full workspace test, clippy, fmt, doc, codegen, and the security smoke (10 findings, `schema_version: 7`, zero under bare `fallow`) green.",
          "timestamp": "2026-06-13T09:39:29Z",
          "url": "https://github.com/fallow-rs/fallow/commit/e96ae8e67c33c9b923483e9827424c93db2e4bab"
        },
        "date": 1781344953082,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 290,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 226,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 481,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 398,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 263,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 235,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 750,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 671,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1696,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1454,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1331,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1246,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1147,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1033,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 12393,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 11302,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d0f5b42e4588b0452eb5859c3578500a5695d05d",
          "message": "feat(nextjs): graduate route-collision to default error, keep dynamic-segment-name-conflict at warn\n\nroute-collision now defaults to error (it mirrors a next build failure, so a project hitting it was already red); dynamic-segment-name-conflict stays warn (a runtime crash next build does NOT catch) and graduates to error in a later release once field-proven.\n\nAlso corrects the dynamic-segment-name-conflict rustdoc (it wrongly claimed the build fails), rewrites the human and markdown conflict line to be crash-grade, and adds a monorepo-gate regression test proving the rule arms when next is declared only in a sub-app. Regenerated schema.json and re-accepted SARIF snapshots (route-collision rule level warning to error). No JSON schema or TS contract change.",
          "timestamp": "2026-06-14T09:32:57Z",
          "url": "https://github.com/fallow-rs/fallow/commit/d0f5b42e4588b0452eb5859c3578500a5695d05d"
        },
        "date": 1781433036932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 243,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 235,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 421,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 392,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 260,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 229,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 667,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 607,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1589,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1478,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1340,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1230,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1127,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 992,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 12214,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 11186,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2f636206b0f16edd8cac2f493331f2e8ba8dc322",
          "message": "fix: wire post-2.96.0 IssueKinds through LSP severity, VS Code, and CI summaries (#1262)\n\nThe cluster of new IssueKinds shipped since v2.96.0 was complete in the Rust output but under-wired in three surfaces outside the Rust drift gates.\n\nLSP: route-collision and dynamic-segment-name-conflict now emit ERROR severity to match their core default (were hardcoded WARNING), with regression tests. VS Code: the new kinds are now counted, rendered in the Issues tree, and filterable instead of silently dropped from the sidebar; dist rebuilt. CI: the five missing kinds plus route-collision and dynamic-segment-name-conflict now appear in the GitHub Action and GitLab CI summary, annotation, combined, and audit breakdowns, with jq tests added. A shared drift guard fails when a future dead-code IssueKind is absent from the summary scripts.",
          "timestamp": "2026-06-15T12:57:12Z",
          "url": "https://github.com/fallow-rs/fallow/commit/2f636206b0f16edd8cac2f493331f2e8ba8dc322"
        },
        "date": 1781529175102,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 257,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 233,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 490,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 416,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 270,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 243,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 771,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 702,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1707,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1562,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1368,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1319,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1173,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1079,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 13305,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 12535,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "d2ccd78184f74a2e6211d60d2a304cfe6182b28e",
          "message": "chore(ci): retrigger main checks",
          "timestamp": "2026-06-15T17:15:14Z",
          "url": "https://github.com/fallow-rs/fallow/commit/d2ccd78184f74a2e6211d60d2a304cfe6182b28e"
        },
        "date": 1781546144679,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 301,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 269,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 436,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 263,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 238,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 739,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 672,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1661,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1497,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1376,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1307,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1147,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1054,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 12675,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 11776,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f2ac13530e8ae5d4c775c295b4d60e8d6567d14c",
          "message": "feat(health): React/JSX component-health suite\n\nA React/Preact component-health layer on a new JSX structural extraction pass\n(component functions, props, hooks, render edges), mirroring and extending the\nVue component-analysis stack. CACHE_VERSION 170.\n\nSignals (dep-gated on react/react-dom/next/preact):\n- unused-component-prop React arm (default warn): prop declared but read nowhere\n  in the component body; shares the Vue rule key / suppress token.\n- React-aware complexity: JSX nesting depth folds into cognitive, hook/prop\n  density into the per-component contribution; descriptive hook profile (kind\n  breakdown + max useEffect dep-array arity).\n- prop-drilling (opt-in, off): a prop forwarded unused through >= 3 pass-through\n  components; located per-chain records + small capped health penalty.\n- thin-wrapper (opt-in, off): a component whose whole body is a spread-forwarded\n  single child render.\n- duplicate-prop-shape (opt-in, off): 3+ components across 2+ files with an\n  identical significant prop-name set.\n- render fan-in: descriptive blast-radius metric (component-graph analogue of\n  module fan-in) with a located top-N list; headline is distinct render\n  locations, test/spec files excluded.\n\nThe shared ChildResolver lives in analyze/react_resolve.rs. Validated zero false\npositives across next.js, query, preact, and vrs-portals; duplicate-prop-shape\nfound 23 true positives on vrs-portals. Companion docs (fallow-docs,\nfallow-skills) updated separately.",
          "timestamp": "2026-06-16T11:53:37Z",
          "url": "https://github.com/fallow-rs/fallow/commit/f2ac13530e8ae5d4c775c295b4d60e8d6567d14c"
        },
        "date": 1781612128198,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 248,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 228,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 483,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 261,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 237,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 731,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 656,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1698,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1460,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1359,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1257,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1165,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1024,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 12588,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 11412,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a7c8bc7de7abfc05e695aa28edd921df410b83af",
          "message": "test: improve coverage across CLI output helpers\n\nAdds focused coverage for CLI audit output, combined output helpers, cache notice lifecycle, and human report helper behavior.\n\nThe branch keeps production code unchanged and stops the coverage loop once the remaining gains became marginal.",
          "timestamp": "2026-06-17T11:10:47Z",
          "url": "https://github.com/fallow-rs/fallow/commit/a7c8bc7de7abfc05e695aa28edd921df410b83af"
        },
        "date": 1781696480543,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 253,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 235,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 442,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 430,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 264,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 238,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 775,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 652,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1746,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1515,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1404,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1323,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1184,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1083,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 13012,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 11861,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "88b0c6b8465dd6272d86f813f14e560e85430502",
          "message": "fix(ci): skip timed out benchmark projects\n\nKeep real-world benchmark runs from failing the whole workflow when one project hits the per-project watchdog; partial benchmark JSON is still produced with skip diagnostics.",
          "timestamp": "2026-06-18T15:28:02Z",
          "url": "https://github.com/fallow-rs/fallow/commit/88b0c6b8465dd6272d86f813f14e560e85430502"
        },
        "date": 1781797207840,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 512,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 817,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 714,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1738,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1433,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1532,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1329,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1230,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1124,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "eaeb0634af797a69bae7600d2020dd99b33402ad",
          "message": "chore: release v2.100.0",
          "timestamp": "2026-06-19T10:48:37Z",
          "url": "https://github.com/fallow-rs/fallow/commit/eaeb0634af797a69bae7600d2020dd99b33402ad"
        },
        "date": 1781868391044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 412,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 512,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 513,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 920,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 817,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1744,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1637,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1531,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1435,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1332,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1232,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "64ead321071c8b461f7d479ab4a56f36eaa58ec1",
          "message": "refactor: split react prop module scan",
          "timestamp": "2026-06-20T10:06:20Z",
          "url": "https://github.com/fallow-rs/fallow/commit/64ead321071c8b461f7d479ab4a56f36eaa58ec1"
        },
        "date": 1781950110038,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 412,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 616,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 613,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1644,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1537,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1430,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1328,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1226,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1122,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6fde7abc51cd3cc841cc981968bac245b22fce12",
          "message": "refactor: ratchet unit-size/interfacing clippy gates and bundle param clusters\n\nTighten the project's SIG-aligned unit-size and unit-interfacing gates to their next ratchet step and eliminate the resulting outliers with genuine refactors.\n\n- .clippy.toml: too_many_lines 150 to 100, too_many_arguments 7 to 6. Every production function is now under 100 lines; the 7-parameter outliers drop from 25 to 4 (frozen public/deprecated APIs with reasoned #[expect]).\n- Over-100-line production functions are split into cohesive private helpers; private 7-param functions are bundled into input/context structs (SarifCtx, HealthScanCtx, SecurityRankingInput, LoadConfigArgs, and several *Input structs).\n- Test fixtures keep their length via reasoned #[expect] rather than being fragmented.\n\nBehavior is unchanged: clippy --all-targets -D warnings clean at the new thresholds, full test suite green, output byte-identical across all formats.",
          "timestamp": "2026-06-21T09:55:42Z",
          "url": "https://github.com/fallow-rs/fallow/commit/6fde7abc51cd3cc841cc981968bac245b22fce12"
        },
        "date": 1782038251422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 305,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 410,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 407,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 610,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 511,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1330,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1223,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1223,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1222,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1027,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 917,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "d65589eac55a4823d0f9cbf98990200f7c200e30",
          "message": "fix(audit): make non-reusable base-worktree paths unique per call\n\nBaseWorktree::create built the non-reusable worktree path from pid plus a\nwall-clock nanos read. nanos is not monotonic and repeats across threads, so two\naudit runs in one process (parallel unit tests, or a future in-process batch)\ncould mint the same temp path and race on `git worktree add`; the loser failed\nand the audit aborted with a generic exit 2. It surfaced as a flaky\naudit::tests::audit_dupes_falls_back_to_own_discovery_when_health_off (and audit\nsiblings) under parallel test runs, exposed once the Windows schema stack\noverflow stopped aborting the suite before those tests ran.\n\nAppend a process-global monotonic counter so every path is distinct regardless\nof clock resolution; the pid stays the first segment so orphan-sweep parsing is\nunchanged. Adds deterministic uniqueness and pid-parse regression tests.",
          "timestamp": "2026-06-22T10:52:17Z",
          "url": "https://github.com/fallow-rs/fallow/commit/d65589eac55a4823d0f9cbf98990200f7c200e30"
        },
        "date": 1782132949479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 308,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 411,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 410,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 717,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 616,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1639,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1433,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1329,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1331,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1231,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1125,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e585f058e59b78b2d64339c7d16e380fbbcfc484",
          "message": "refactor(review-app): namespace persisted state under fallow-review instead of fre\n\nRenames the review app's terse `fre` storage/env prefix to the explicit `fallow-review` namespace and drops the stopgap _typos.toml allowlist. String-literal-only; no persisted-state migration needed.",
          "timestamp": "2026-06-23T09:28:32Z",
          "url": "https://github.com/fallow-rs/fallow/commit/e585f058e59b78b2d64339c7d16e380fbbcfc484"
        },
        "date": 1782211202514,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 311,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 308,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 514,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 409,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 615,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 614,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1642,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1433,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1332,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1333,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1227,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1128,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7de6b4ee07eb2635621af39a10e120bd8b75db8b",
          "message": "fix(config): normalize leading dot ignore patterns\n\nStrip a single leading ./ before compiling ignorePatterns and ignoreUnresolvedImports so user globs match the project-root-relative paths used by source discovery and unresolved-import filtering.\n\nAdd focused regression coverage for resolved matchers and the source walker so the silent no-match case stays fixed.\n\nFixes #1385.",
          "timestamp": "2026-06-24T09:56:51Z",
          "url": "https://github.com/fallow-rs/fallow/commit/7de6b4ee07eb2635621af39a10e120bd8b75db8b"
        },
        "date": 1782296798153,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 311,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 411,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 409,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 718,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 612,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1639,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1431,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1431,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1329,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1226,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1127,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d80978332b8dba841a4ace0abc8a375b4b19df3",
          "message": "feat(coverage): hint source-map upload command when cloud coverage is unresolved (#1431)\n\nWhen `fallow coverage analyze --cloud` returns a coverage_unresolved warning\n(the cloud could not map runtime positions to source, almost always because no\nsource maps were uploaded for the commit) and the project has built source maps\non disk, print a copy-paste hint naming the exact upload command and build dir:\n\n  Hint: found source maps under .next/ that may not be uploaded for this commit.\n    Run `fallow coverage upload-source-maps --dir .next` so runtime coverage\n    attributes to your source files.\n\nRe-running the upload fixes both the never-uploaded and the stale-SHA cases, so\none hint covers both. Human output only: JSON consumers already get the\nstructured coverage_unresolved warning in report.warnings. The hint is gated on\nthe cloud warning code so it never fires when resolution is healthy. Scanned\nbuild dirs (dist, .next, out, build) cover the common bundlers; the scan skips\nnode_modules and stops at the first .map.",
          "timestamp": "2026-06-24T21:53:51Z",
          "url": "https://github.com/fallow-rs/fallow/commit/7d80978332b8dba841a4ace0abc8a375b4b19df3"
        },
        "date": 1782383015478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 511,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 410,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1633,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1437,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1334,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1225,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1129,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1122,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d80978332b8dba841a4ace0abc8a375b4b19df3",
          "message": "feat(coverage): hint source-map upload command when cloud coverage is unresolved (#1431)\n\nWhen `fallow coverage analyze --cloud` returns a coverage_unresolved warning\n(the cloud could not map runtime positions to source, almost always because no\nsource maps were uploaded for the commit) and the project has built source maps\non disk, print a copy-paste hint naming the exact upload command and build dir:\n\n  Hint: found source maps under .next/ that may not be uploaded for this commit.\n    Run `fallow coverage upload-source-maps --dir .next` so runtime coverage\n    attributes to your source files.\n\nRe-running the upload fixes both the never-uploaded and the stale-SHA cases, so\none hint covers both. Human output only: JSON consumers already get the\nstructured coverage_unresolved warning in report.warnings. The hint is gated on\nthe cloud warning code so it never fires when resolution is healthy. Scanned\nbuild dirs (dist, .next, out, build) cover the common bundlers; the scan skips\nnode_modules and stops at the first .map.",
          "timestamp": "2026-06-24T21:53:51Z",
          "url": "https://github.com/fallow-rs/fallow/commit/7d80978332b8dba841a4ace0abc8a375b4b19df3"
        },
        "date": 1782469659347,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 509,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1430,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1224,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1120,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1021,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1019,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 917,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2a348354c0102d245827e063e16b07ac43e38ba4",
          "message": "docs(changelog): record the #1634 cluster FP fixes\n\nBroaden the store-member [Unreleased] entry to cover inline useFooStore().member (#1489 Case 1) and add the #1439 component-props entry that #1634 omitted. Docs-only.",
          "timestamp": "2026-06-26T13:51:11Z",
          "url": "https://github.com/fallow-rs/fallow/commit/2a348354c0102d245827e063e16b07ac43e38ba4"
        },
        "date": 1782552959660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 207,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 512,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 410,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1642,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1434,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1330,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1226,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1128,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1030,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "e28929f58d96b190038826bce07c38808cff4166",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.103.0",
          "timestamp": "2026-06-28T07:38:13Z",
          "url": "https://github.com/fallow-rs/fallow/commit/e28929f58d96b190038826bce07c38808cff4166"
        },
        "date": 1782641112188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 207,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 512,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 409,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1640,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1431,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1225,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1122,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1126,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1023,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "59b20c7565930a5cb0df3e62a3e711941b1cde69",
          "message": "fix(telemetry): note find-state for flags/watch and guard the workflow class\n\nFollow-up to #1650. flags and watch emit a code_quality_review telemetry event\n(the same workflow as combined fallow, which populates findings_present) but\nnever noted their find-state, so findings_present serialized as null. flags now\nnotes its feature-flag count and watch notes each cycle's issue count.\n\nFocused dead-code/dupes trace and impact-closure views early-return before the\nnormal note; they still run the full analysis, so they now record its result\ncount. findings_present reflects what the analysis surfaced independent of the\noutput view.\n\nAdds a structural guard: an exhaustive Workflow::surfaces_findings()\nclassification (a new workflow variant fails to compile until classified) plus a\ndebug-build invariant at the single telemetry event-emission point that fails\nfast if a finding-surfacing workflow records a non-failing event without noting\nfind-state. The guard caught the dead-code and dupes trace-mode gaps during this\nchange. No change to the telemetry payload shape.\n\nRefs #1650.",
          "timestamp": "2026-06-29T11:01:42Z",
          "url": "https://github.com/fallow-rs/fallow/commit/59b20c7565930a5cb0df3e62a3e711941b1cde69"
        },
        "date": 1782734661662,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 511,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 409,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1640,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1335,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1123,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1125,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1123,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1023,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5c72d26939cd6f21847c0897de42f81873842184",
          "message": "fix(health): no implicit px on custom-property values in object CSS-in-JS (#1672)\n\nThe object serializer applied implicit-px to numeric custom-property values\n(`--space: 8` -> `--space:8px`), fabricating a unit the bundler never emits.\nEmotion's own serializer guards px with `!isCustomProperty(key)`\n(@emotion/serialize) and React does the same, so a numeric `--x` value stays\nunitless. Skip implicit px for `--*` properties so the lifted CSS matches the\nreal compiled output. Found while smoke-testing the emotion site's\n`<Global>` custom-property block on real public projects.",
          "timestamp": "2026-06-30T10:33:40Z",
          "url": "https://github.com/fallow-rs/fallow/commit/5c72d26939cd6f21847c0897de42f81873842184"
        },
        "date": 1782815881470,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 207,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 511,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1638,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1335,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1124,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1020,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1122,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1021,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "16d7934f39e7cb96d0e29f906b251fb621af3d18",
          "message": "chore(deps): bump syn from 2.0.117 to 2.0.118 (#1695)\n\nBumps [syn](https://github.com/dtolnay/syn) from 2.0.117 to 2.0.118.\n- [Release notes](https://github.com/dtolnay/syn/releases)\n- [Commits](https://github.com/dtolnay/syn/compare/2.0.117...2.0.118)\n\n---\nupdated-dependencies:\n- dependency-name: syn\n  dependency-version: 2.0.118\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-01T09:28:01Z",
          "url": "https://github.com/fallow-rs/fallow/commit/16d7934f39e7cb96d0e29f906b251fb621af3d18"
        },
        "date": 1782902989288,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 207,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 208,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 514,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 409,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1643,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1431,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1128,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1125,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1127,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1025,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "7d7ca6d3c8d7737501beba662a7b50146ff8a4be",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.104.0",
          "timestamp": "2026-07-01T21:16:05Z",
          "url": "https://github.com/fallow-rs/fallow/commit/7d7ca6d3c8d7737501beba662a7b50146ff8a4be"
        },
        "date": 1782986681990,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 511,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 409,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1635,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1325,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1123,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1021,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1121,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1120,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Revaz Zakalashvili",
            "username": "revazi",
            "email": "revaz.zakalashvili@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "88c3f434bd53d2536914607ee9a6d193a7bacb82",
          "message": "docs: add repo-scoped agent skills\n\nAdd portable Agent Skills adapters for the CI formats, CLI output, and JSON output reviewers.\n\nKeep the Agent Skills bodies aligned with their Claude reviewer counterparts where possible, while removing dependencies on local internal files or private maintainer context.",
          "timestamp": "2026-07-03T07:55:37Z",
          "url": "https://github.com/fallow-rs/fallow/commit/88c3f434bd53d2536914607ee9a6d193a7bacb82"
        },
        "date": 1783072914147,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 616,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1637,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1328,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1131,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1020,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1121,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1124,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "630722b016a5b785d6fa05ee54db6b339eb3c4fa",
          "message": "chore: release v3.0.0",
          "timestamp": "2026-07-04T08:58:59Z",
          "url": "https://github.com/fallow-rs/fallow/commit/630722b016a5b785d6fa05ee54db6b339eb3c4fa"
        },
        "date": 1783157160907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 613,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 409,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1739,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1333,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1227,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1021,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1126,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1123,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "6b9eb819620baf9aaf892e2ec552e92eb8a63e2e",
          "message": "refactor(engine): route workspace discovery through engine",
          "timestamp": "2026-07-05T09:44:05Z",
          "url": "https://github.com/fallow-rs/fallow/commit/6b9eb819620baf9aaf892e2ec552e92eb8a63e2e"
        },
        "date": 1783244979279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 509,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 406,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1427,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1223,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1016,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 916,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1017,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 915,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ba423ccec8b0e7edc3e5cdb67ba97ea1c9b2c25d",
          "message": "docs(extract): clarify parse scheduling\n\nClarifies that extraction uses a sequential fast path for small file sets and parallel parsing for larger file sets.\n\nAlso documents why the small-input threshold exists: avoiding Rayon scheduling overhead on cache-hot inputs.",
          "timestamp": "2026-07-06T10:02:31Z",
          "url": "https://github.com/fallow-rs/fallow/commit/ba423ccec8b0e7edc3e5cdb67ba97ea1c9b2c25d"
        },
        "date": 1783337673889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 614,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 409,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1739,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1329,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1229,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1020,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1331,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1225,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e7878f27ede3575df0ca7142e03db38ad56acb00",
          "message": "refactor: remove architecture debt\n\nMove SARIF-family assembly and shared formatter facts behind fallow-output while keeping fallow-api as a compatibility facade.\n\nReclassify fallow-core as an internal detector backend behind fallow-engine, tighten architecture guards for direct core calls, IO/cache ownership, analyzer placement, manifest drift, and protocol prose.\n\nRemove stale exception language from contributor docs and add pre-ship guard coverage so the architecture debt cannot silently return.",
          "timestamp": "2026-07-07T05:51:22Z",
          "url": "https://github.com/fallow-rs/fallow/commit/e7878f27ede3575df0ca7142e03db38ad56acb00"
        },
        "date": 1783420272641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 614,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 410,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1739,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1332,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1224,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1020,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1223,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1121,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "df2f052a926c23937a359551ba771fcbe795cbe2",
          "message": "refactor(skill): split MCP catalogue to references/mcp.md; add vendored-skill drift gate (#1781)\n\nMove the MCP tool catalogue out of the always-loaded SKILL.md into references/mcp.md, add a CI gate keeping npm/fallow/skills in lockstep with canonical fallow-skills, and reconcile capabilities.json + both skill trees with the binary (adds plugin-check, fixing the stale contract bundle).",
          "timestamp": "2026-07-08T09:24:03Z",
          "url": "https://github.com/fallow-rs/fallow/commit/df2f052a926c23937a359551ba771fcbe795cbe2"
        },
        "date": 1783503194782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 614,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 409,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1740,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1331,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1222,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1021,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1226,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1221,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "b39782a149db879383734aef60f1329e967b0317",
          "message": "docs(rules): document the PositionMapper byte-to-UTF-16 boundary convention",
          "timestamp": "2026-07-09T10:26:37Z",
          "url": "https://github.com/fallow-rs/fallow/commit/b39782a149db879383734aef60f1329e967b0317"
        },
        "date": 1783593102862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 615,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1745,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1333,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1228,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1021,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1225,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1222,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4d019eeb4785ea71412d8e7f56dc8a208d03e94f",
          "message": "feat(mcp): add list_suppressions tool for the suppression inventory\n\nThe fallow suppressions inventory was CLI-only, so agents on the MCP surface could not see what a clean verdict was hiding without shelling out. The new read-only list_suppressions tool wraps `fallow suppressions --format json` as a subprocess (the security_candidates shape, so timeout handling, telemetry tagging, and process-lifecycle hardening come from the shared run_tool path) and returns the suppression-inventory envelope verbatim, introducing no new wire contract.\n\nThe tool forwards workspace, changed_since, and repeated file scoping plus production, root, config, no_cache, threads, and the per-request allow_remote_extends config-trust opt-in; empty file entries are rejected with a structured validation error. changed-workspaces is deliberately not forwarded in v1. Includes the capability-manifest row, regenerated capabilities.json and MCP tools table, tests, and a corrected feature_flags doc line that advertised never-forwarded params.",
          "timestamp": "2026-07-10T09:19:18Z",
          "url": "https://github.com/fallow-rs/fallow/commit/4d019eeb4785ea71412d8e7f56dc8a208d03e94f"
        },
        "date": 1783679290156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 310,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 615,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 411,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1851,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1435,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1226,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1024,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1329,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1224,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c05420909051aec49c0362c8e1de28132d82a86b",
          "message": "ci: move telemetry fail-rate gate to cloud",
          "timestamp": "2026-07-10T21:56:39Z",
          "url": "https://github.com/fallow-rs/fallow/commit/c05420909051aec49c0362c8e1de28132d82a86b"
        },
        "date": 1783759938006,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 509,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1324,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1120,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 920,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 814,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1020,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1022,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dfcc69f429c943a91751a587990a0e7f078b325e",
          "message": "ci: move cross-platform checks to release\n\nKeep regular pull request and main CI on Ubuntu for fast feedback. Move Windows correctness, lifecycle, NAPI, ARM64, and macOS or Windows Zed coverage into token-free release verification.\n\nGate crates.io, npm, GitHub release, and editor publication paths behind the aggregate release verification job.",
          "timestamp": "2026-07-11T20:36:08Z",
          "url": "https://github.com/fallow-rs/fallow/commit/dfcc69f429c943a91751a587990a0e7f078b325e"
        },
        "date": 1783847325044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 103,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 509,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 407,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1429,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1225,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1019,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 915,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1123,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1019,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "0f2de24d23679cca1568b85aa8028d9f4ea6ed38",
          "message": "chore: release v3.4.0",
          "timestamp": "2026-07-13T09:35:29Z",
          "url": "https://github.com/fallow-rs/fallow/commit/0f2de24d23679cca1568b85aa8028d9f4ea6ed38"
        },
        "date": 1783938433401,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 208,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 511,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1431,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1119,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 919,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 815,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1119,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1019,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c802c2d5ddcfd6a3cee7bcceb4542a7842a34569",
          "message": "docs: document the --legacy-envelope removal and clear stale references\n\nAdds the missing v2.104.0 changelog entry for the --legacy-envelope / legacyEnvelope removal, re-vendors the skills SKILL.md without the stale flag mention, and rewrites the stale programmatic.rs bullet in the cli-crate rules (the module moved to fallow-api; napi no longer depends on fallow-cli).",
          "timestamp": "2026-07-14T08:29:28Z",
          "url": "https://github.com/fallow-rs/fallow/commit/c802c2d5ddcfd6a3cee7bcceb4542a7842a34569"
        },
        "date": 1784020274120,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 617,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1745,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1429,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1227,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1022,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1327,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1226,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bartwaardenburg@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "29e84905254d37b5c20577ecd31f4daba4349926",
          "message": "Merge pull request #1898 from fallow-rs/codex/fix-pnpm-audit-ci\n\nfix(ci): restore VS Code dependency audit",
          "timestamp": "2026-07-15T08:02:47Z",
          "url": "https://github.com/fallow-rs/fallow/commit/29e84905254d37b5c20577ecd31f4daba4349926"
        },
        "date": 1784107001254,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 615,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1644,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1427,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1223,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1022,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1230,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1224,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "3d30c38a4a49ccb912174e22d674e19377ebf910",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.6.0",
          "timestamp": "2026-07-15T20:36:00Z",
          "url": "https://github.com/fallow-rs/fallow/commit/3d30c38a4a49ccb912174e22d674e19377ebf910"
        },
        "date": 1784193497489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1328,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1122,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1020,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 918,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1124,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1119,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc632a1c2f2b57580bc0af8222038fe3b3cd1e53",
          "message": "fix: harden external input boundaries\n\nHarden external input boundaries before analysis: bound churn and diff reads, reject unsafe imported paths and aggregate overflow, and keep source and manifest symlink targets inside the configured project root. Oversized diffs continue with unfiltered reporting instead of truncated parsing.\n\nAdd focused regression coverage, real-repository probes, and Windows CI coverage for the platform-gated core symlink paths and all-target Clippy.",
          "timestamp": "2026-07-16T13:52:16Z",
          "url": "https://github.com/fallow-rs/fallow/commit/fc632a1c2f2b57580bc0af8222038fe3b3cd1e53"
        },
        "date": 1784279677807,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 616,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1737,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1328,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1227,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1022,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1330,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1230,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc632a1c2f2b57580bc0af8222038fe3b3cd1e53",
          "message": "fix: harden external input boundaries\n\nHarden external input boundaries before analysis: bound churn and diff reads, reject unsafe imported paths and aggregate overflow, and keep source and manifest symlink targets inside the configured project root. Oversized diffs continue with unfiltered reporting instead of truncated parsing.\n\nAdd focused regression coverage, real-repository probes, and Windows CI coverage for the platform-gated core symlink paths and all-target Clippy.",
          "timestamp": "2026-07-16T13:52:16Z",
          "url": "https://github.com/fallow-rs/fallow/commit/fc632a1c2f2b57580bc0af8222038fe3b3cd1e53"
        },
        "date": 1784364802649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 616,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1742,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1329,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1225,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1121,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1333,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1226,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc632a1c2f2b57580bc0af8222038fe3b3cd1e53",
          "message": "fix: harden external input boundaries\n\nHarden external input boundaries before analysis: bound churn and diff reads, reject unsafe imported paths and aggregate overflow, and keep source and manifest symlink targets inside the configured project root. Oversized diffs continue with unfiltered reporting instead of truncated parsing.\n\nAdd focused regression coverage, real-repository probes, and Windows CI coverage for the platform-gated core symlink paths and all-target Clippy.",
          "timestamp": "2026-07-16T13:52:16Z",
          "url": "https://github.com/fallow-rs/fallow/commit/fc632a1c2f2b57580bc0af8222038fe3b3cd1e53"
        },
        "date": 1784452308678,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 509,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 406,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1223,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1124,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1019,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 917,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 914,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 815,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dacea3780abcf5e2c5d98ac208a88a4cdeb3529e",
          "message": "fix: inherited-member (#1910) and tsconfig-alias (#1911) false positives\n\nTwo dead-code false-positive fixes: credit members reached through an inherited/generic base-class property (#1910), and activate the TypeScript plugin on tsconfig presence so paths aliases are not misreported as unlisted dependencies (#1911).\n\nCloses #1910\nCloses #1911",
          "timestamp": "2026-07-20T09:21:52Z",
          "url": "https://github.com/fallow-rs/fallow/commit/dacea3780abcf5e2c5d98ac208a88a4cdeb3529e"
        },
        "date": 1784541728567,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 614,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1746,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1328,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1228,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1124,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1327,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1226,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "bfe588034642dfa5d812e9e06d8c79d00d3cb0ca",
          "message": "ci: replace docker-lockstep PR job with maintainer-flow Dockerfile pin\n\nThe release.yml docker-lockstep job opened a docker-lockstep/vX.Y.Z PR each\nrelease that then needed an admin merge. Fold the Dockerfile pin into the\nmaintainer release flow (fallow-release skill step 13) as a direct commit to\nmain, mirroring the crates/napi lockfile catch-up (step 12): download the\njust-published musl assets, re-hash them, run update-dockerfile-pins.mjs, and\npush. The ci.yml Docker job re-verifies the pin end-to-end on that commit.\n\nThe shared rewrite helper and its node --test suite stay. Refs #1817.",
          "timestamp": "2026-07-20T12:11:24Z",
          "url": "https://github.com/fallow-rs/fallow/commit/bfe588034642dfa5d812e9e06d8c79d00d3cb0ca"
        },
        "date": 1784626442170,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 614,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1640,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1428,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1228,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1022,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1328,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1224,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ec6dca830f375ac5a0200ab2f417f160bb42bf0e",
          "message": "chore(deps): bump lucide-react in /apps/review-electron (#1978)\n\nBumps [lucide-react](https://github.com/lucide-icons/lucide/tree/HEAD/packages/lucide-react) from 1.21.0 to 1.24.0.\n- [Release notes](https://github.com/lucide-icons/lucide/releases)\n- [Commits](https://github.com/lucide-icons/lucide/commits/1.24.0/packages/lucide-react)\n\n---\nupdated-dependencies:\n- dependency-name: lucide-react\n  dependency-version: 1.24.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-22T09:19:28Z",
          "url": "https://github.com/fallow-rs/fallow/commit/ec6dca830f375ac5a0200ab2f417f160bb42bf0e"
        },
        "date": 1784712818717,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 616,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1639,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1330,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1226,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1021,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1331,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1226,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "acd28051c4c2c217f9fac612f288e9546c86b6c3",
          "message": "chore(docker): pin FALLOW_VERSION 3.8.0 with refreshed checksums",
          "timestamp": "2026-07-22T16:22:02Z",
          "url": "https://github.com/fallow-rs/fallow/commit/acd28051c4c2c217f9fac612f288e9546c86b6c3"
        },
        "date": 1784799079523,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 207,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 617,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 511,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1846,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1433,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1328,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1123,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1329,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1329,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "45f1642a21b049771ecf54fb92133dda4ce0c1fe",
          "message": "chore(docker): pin FALLOW_VERSION 3.9.1 with refreshed checksums",
          "timestamp": "2026-07-23T23:22:42Z",
          "url": "https://github.com/fallow-rs/fallow/commit/45f1642a21b049771ecf54fb92133dda4ce0c1fe"
        },
        "date": 1784885181323,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 614,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1743,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1429,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1231,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1123,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1327,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1224,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "45f1642a21b049771ecf54fb92133dda4ce0c1fe",
          "message": "chore(docker): pin FALLOW_VERSION 3.9.1 with refreshed checksums",
          "timestamp": "2026-07-23T23:22:42Z",
          "url": "https://github.com/fallow-rs/fallow/commit/45f1642a21b049771ecf54fb92133dda4ce0c1fe"
        },
        "date": 1785057553777,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 614,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1744,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1332,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1234,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1024,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1328,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1225,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "20972d541b1deadad79108d780ffae6fd9c48163",
          "message": "feat: add stable type-aware TypeScript analysis\n\n* chore: open type-aware proof of concept branch\n\n* feat: prototype type-aware class member refinement\n\n* fix: harden type-aware proof of concept\n\n* fix: cover type-aware sidecar in git hook\n\n* fix: keep unpublished flags out of agent docs\n\n* feat: mature type-aware class member refinement\n\n* fix: harden type-aware refinement gates\n\n* test: isolate case-sensitive sidecar projects\n\n* fix: satisfy Windows process tree lint\n\n* fix: harden type-aware release evidence\n\n* fix: defer type-aware corpus dependencies\n\n* test: isolate optional sidecar dependencies\n\n* feat: add project-wide type-aware analysis\n\n* test: cover type-aware protocol adapter\n\n* fix: apply type-aware API surface results\n\n* feat: complete type-aware analysis integration\n\n* fix: make type-aware CI dependencies explicit\n\n* feat: expand type-aware semantic analysis\n\n* feat: refine type-aware unused exports\n\n* fix: update vulnerable VS Code dependency\n\n* fix: harden type-aware export evidence\n\n* refactor: stabilize type-aware architecture\n\n* perf: benchmark type-aware cold and warm paths\n\n* fix: await instrumented type-aware benchmarks\n\n* fix: use supported CodSpeed walltime runner\n\n* fix: run type-aware walltime on available runner\n\n* feat: recommend type-aware analysis for TypeScript\n\n* fix(ci): verify branded PR comment author",
          "timestamp": "2026-07-27T10:30:03Z",
          "url": "https://github.com/fallow-rs/fallow/commit/20972d541b1deadad79108d780ffae6fd9c48163"
        },
        "date": 1785149241756,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 615,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1639,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1329,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1228,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1021,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1329,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1225,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "55944e88c96fe0cc60679470781808977fd1e0fc",
          "message": "fix(dupes): apply the duplication threshold gate to standalone runs\n\nStandalone `fallow dupes` rendered through `print_dupes_result_with_grouping`,\nwhich returned the renderer's exit code without ever consulting\n`exceeds_threshold`. The gate lived only in `print_dupes_result`, which\nstandalone runs no longer call after the grouping refactor, so\n`fallow dupes --threshold 1` exited 0 at 100% duplication and printed no\ndiagnostic. Both the `--threshold` flag and a `duplicates.threshold` config\nvalue were affected, in every output format. Combined mode (bare `fallow`)\nrendered through the second, near-identical function that did gate, so the two\nentry points disagreed.\n\nThe two renderers differed only in `group_by`, which `print_dupes_result`\nalready passed as `None`. That duplication is what let the gate drift out of\none copy, so they are collapsed into one: `print_dupes_result` delegates and\nthe gate moves onto the single shared renderer. The source diff is\nnet-negative. New coverage in `crates/cli/tests/dupes_tests.rs` exercises the\nflag path, the config path, and the output formats, each with a\nbelow-threshold control so it cannot pass vacuously. The existing\n`exit_code_tests` case asserted `code == 0 || code == 1`, true of any\nnon-crashing run, and was named for `--fail-on-issues`, which `fallow dupes`\ndoes not wire. It is renamed to `dupes_threshold_exits_1_with_clones`, asserts\nthe exit code exactly, and carries a comment recording why the inert flag is\nabsent. Wiring `--fail-on-issues` for dupes is a separate behaviour change and\nis out of scope here.\n\nProjects that set a duplication threshold and were silently passing will start\nfailing as documented. Runs that set no threshold are unaffected, since the\ndefault (`0`) still means no limit.\n\nFixes #2009.",
          "timestamp": "2026-07-28T00:37:53Z",
          "url": "https://github.com/fallow-rs/fallow/commit/55944e88c96fe0cc60679470781808977fd1e0fc"
        },
        "date": 1785231768538,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 615,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 509,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1639,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1330,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1226,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1020,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1327,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1322,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "57adb47d2ddc8720f1870dcaabca5096529d0c05",
          "message": "feat(health): add an identity-preserving baseline mode (#2064)\n\nThe default count baseline matches per file and category, so a new hotspot replacing an old one in the same file consumed the existing allowance and the gate stayed green. --baseline-mode identity matches per function identity instead: a replacement hotspot is reported, line shifts and severity improvements stay suppressed, and resolved findings disappear without a refresh.\n\nThe default stays count. Identity baselines keep their count buckets so both modes read them, and comparing in identity mode against a count-only baseline is an input error rather than a silent fallback. A finding identity is file path plus function name, so renaming or moving a function that is still in the baseline reports it as new; the flag documentation states that limit and the re-save rule.\n\nRefs #2010",
          "timestamp": "2026-07-28T20:48:23Z",
          "url": "https://github.com/fallow-rs/fallow/commit/57adb47d2ddc8720f1870dcaabca5096529d0c05"
        },
        "date": 1785318227940,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 406,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1224,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1017,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1019,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 913,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 917,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 912,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "92623a5f54a52e1834318256218ba989efadeefc",
          "message": "chore(agents): finish the reviewer-skill migration (#2072)\n\nSeven review subjects already follow one shape: a thin <x>-review skill that reads its checklist from .agents/agents/<x>-reviewer.md and its constraints from .agents/rules. Three still carried the older fat <x>-reviewer skill alongside it, so both generations loaded and competed for the same triggers.\n\nThe fat skills were not pure duplicates, so their unique content moved into the agent definitions first: the four CI-format audits, the human-format audit, the pluralization rule for counted nouns, and the note that the real-world corpus must be downloaded before any audit command works, which was missing from every agent definition.\n\nReviewer names in team-assembly refer to agents to spawn rather than skills, so they keep resolving.",
          "timestamp": "2026-07-29T22:06:22Z",
          "url": "https://github.com/fallow-rs/fallow/commit/92623a5f54a52e1834318256218ba989efadeefc"
        },
        "date": 1785404145817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 615,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1740,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1327,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1228,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1123,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1326,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1329,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "92623a5f54a52e1834318256218ba989efadeefc",
          "message": "chore(agents): finish the reviewer-skill migration (#2072)\n\nSeven review subjects already follow one shape: a thin <x>-review skill that reads its checklist from .agents/agents/<x>-reviewer.md and its constraints from .agents/rules. Three still carried the older fat <x>-reviewer skill alongside it, so both generations loaded and competed for the same triggers.\n\nThe fat skills were not pure duplicates, so their unique content moved into the agent definitions first: the four CI-format audits, the human-format audit, the pluralization rule for counted nouns, and the note that the real-world corpus must be downloaded before any audit command works, which was missing from every agent definition.\n\nReviewer names in team-assembly refer to agents to spawn rather than skills, so they keep resolving.",
          "timestamp": "2026-07-29T22:06:22Z",
          "url": "https://github.com/fallow-rs/fallow/commit/92623a5f54a52e1834318256218ba989efadeefc"
        },
        "date": 1785491302127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 308,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 615,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1646,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1430,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1227,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1121,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1325,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1328,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "92623a5f54a52e1834318256218ba989efadeefc",
          "message": "chore(agents): finish the reviewer-skill migration (#2072)\n\nSeven review subjects already follow one shape: a thin <x>-review skill that reads its checklist from .agents/agents/<x>-reviewer.md and its constraints from .agents/rules. Three still carried the older fat <x>-reviewer skill alongside it, so both generations loaded and competed for the same triggers.\n\nThe fat skills were not pure duplicates, so their unique content moved into the agent definitions first: the four CI-format audits, the human-format audit, the pluralization rule for counted nouns, and the note that the real-world corpus must be downloaded before any audit command works, which was missing from every agent definition.\n\nReviewer names in team-assembly refer to agents to spawn rather than skills, so they keep resolving.",
          "timestamp": "2026-07-29T22:06:22Z",
          "url": "https://github.com/fallow-rs/fallow/commit/92623a5f54a52e1834318256218ba989efadeefc"
        },
        "date": 1785575457474,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 613,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 509,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1739,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1334,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1225,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1023,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1327,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1224,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "763066883ef36e51c0c99c9971b676beca9a8e55",
          "message": "docs: use dead-code instead of the deprecated check alias in the migration doc",
          "timestamp": "2026-08-02T06:28:57Z",
          "url": "https://github.com/fallow-rs/fallow/commit/763066883ef36e51c0c99c9971b676beca9a8e55"
        },
        "date": 1785662209938,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 714,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 509,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1637,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1332,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1228,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1030,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1429,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1326,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "4e83c23c025e17874f34f0c674166c86cfba6bf1",
          "message": "chore(docker): pin FALLOW_VERSION 3.12.0 with refreshed checksums",
          "timestamp": "2026-08-03T08:59:33Z",
          "url": "https://github.com/fallow-rs/fallow/commit/4e83c23c025e17874f34f0c674166c86cfba6bf1"
        },
        "date": 1785753936186,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 614,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1427,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1225,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1120,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1018,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1117,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1118,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "7093ed409c5b7e64162bd70826dd62e7db88a08c",
          "message": "chore(docker): pin FALLOW_VERSION 3.14.0 with refreshed checksums",
          "timestamp": "2026-08-04T09:01:32Z",
          "url": "https://github.com/fallow-rs/fallow/commit/7093ed409c5b7e64162bd70826dd62e7db88a08c"
        },
        "date": 1785836781098,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 617,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1744,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1431,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1333,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1127,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1534,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1433,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "589885290490eeeb02fcc274defc55a3c11789dc",
          "message": "fix(viz): add the wasm-runtime peer entry for @emnapi/runtime 1.11.3\n\nThe @napi-rs/wasm-runtime peer dependency needs a top-level runtime entry\nthat macOS resolution never materializes; clean npm ci now passes with and\nwithout --omit=optional and the build and tests are green from scratch.",
          "timestamp": "2026-08-04T16:31:25Z",
          "url": "https://github.com/fallow-rs/fallow/commit/589885290490eeeb02fcc274defc55a3c11789dc"
        },
        "date": 1785923004850,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 617,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 511,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1745,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1432,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1332,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1124,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1432,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1429,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "24e84bc0ca81bd48d3b0a520cbcdcd2ab090ef75",
          "message": "feat(cli): progressive root help, specifier-anchored imports, code-span table cells (#2149)\n\nfallow -h leads with the task cheat sheet, shows the Analysis and Workflow groups plus everyday options, and points to --help for the complete list (197 to 49 lines; the machine schema is unchanged). Unresolved-import findings anchor on the source specifier via new statement and source spans threaded through extract, the caches, and the graph, so one suppression above a multi-line re-export covers the deduped finding and the stale-suppression contradiction is gone. Identifier and path cells in github-summary tables render as code spans with pipe escaping, mirrored in the action/ and ci/ jq fallback renderers, and the shared helper collapses CR/LF so identifiers cannot split a table row.",
          "timestamp": "2026-08-05T21:34:55Z",
          "url": "https://github.com/fallow-rs/fallow/commit/24e84bc0ca81bd48d3b0a520cbcdcd2ab090ef75"
        },
        "date": 1786009507229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 509,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 410,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1322,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1123,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1020,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 916,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1120,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1421,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d8de238c7fce3f4805a1d671cf54b408e9e9d445",
          "message": "refactor: consolidate entry-point discovery on the fallow-core implementation (#2154)\n\nDeletes the engine's diverged copy of entry-point discovery (net +131/-1428) and routes the engine through core_backend pass-throughs, mirroring the discovery-walk consolidation. BackendAggregatedPluginResult wraps the core AggregatedPluginResult directly so plugin entry-point provenance survives without mirror-type reconstruction; the engine e2e tests moved to core before the fork was deleted; the orphaned regex and glob dependencies are removed. Behavior verified byte-identical against a pristine baseline binary on three real projects (dead-code, check, and list JSON, cold and warm cache). One log-only change: the skipped-entry warning dedupe is a single process-wide set.",
          "timestamp": "2026-08-07T07:14:05Z",
          "url": "https://github.com/fallow-rs/fallow/commit/d8de238c7fce3f4805a1d671cf54b408e9e9d445"
        },
        "date": 1786090893436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 309,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 311,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 207,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 207,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 723,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 515,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 2268,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1852,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1564,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1332,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1650,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1548,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dffec365267ba06a983bfa0944be5ff339f1fb64",
          "message": "refactor: harden duplication architecture\n\n* refactor: start duplication architecture hardening\n\n* refactor: harden duplication architecture\n\n* test: keep spread proptest out of miri",
          "timestamp": "2026-08-08T06:48:38Z",
          "url": "https://github.com/fallow-rs/fallow/commit/dffec365267ba06a983bfa0944be5ff339f1fb64"
        },
        "date": 1786175587507,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 613,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 410,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1748,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1336,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1227,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1020,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1427,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1327,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d4c08465b2c66afbaf3ea1e25b6259a02da30327",
          "message": "fix: close duplication sweep gaps\n\n* chore: start duplication filter follow-up\n\n* fix: close duplication sweep gaps",
          "timestamp": "2026-08-08T20:57:45Z",
          "url": "https://github.com/fallow-rs/fallow/commit/d4c08465b2c66afbaf3ea1e25b6259a02da30327"
        },
        "date": 1786262174094,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 406,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 405,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1217,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1012,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 912,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 810,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 912,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 914,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b8e9c8c305dd7a5ae9f4f3afa7880738028ad943",
          "message": "fix(health): handle inline Svelte await states",
          "timestamp": "2026-08-09T21:00:28Z",
          "url": "https://github.com/fallow-rs/fallow/commit/b8e9c8c305dd7a5ae9f4f3afa7880738028ad943"
        },
        "date": 1786350839950,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 511,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 407,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1536,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1326,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1121,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1020,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1124,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1122,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b8e9c8c305dd7a5ae9f4f3afa7880738028ad943",
          "message": "fix(health): handle inline Svelte await states",
          "timestamp": "2026-08-09T21:00:28Z",
          "url": "https://github.com/fallow-rs/fallow/commit/b8e9c8c305dd7a5ae9f4f3afa7880738028ad943"
        },
        "date": 1786436090608,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 617,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 411,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1741,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1432,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1328,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1124,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1433,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1326,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "id": "354ee1c6a92bdf2e8f84c336cb35e22eff039dd8",
          "message": "chore(docker): pin FALLOW_VERSION 3.15.0 with refreshed checksums",
          "timestamp": "2026-08-12T07:51:43Z",
          "url": "https://github.com/fallow-rs/fallow/commit/354ee1c6a92bdf2e8f84c336cb35e22eff039dd8"
        },
        "date": 1786522910279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 615,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 510,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1741,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1431,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1327,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1022,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1429,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1328,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bartwaardenburg@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "95728543e804a0e4a4a0ca9dd239f328c6adde4d",
          "message": "Merge pull request #2247 from fallow-rs/feat/manual-rust-walltime\n\nci: add manual Rust walltime benchmarks",
          "timestamp": "2026-08-13T06:56:58Z",
          "url": "https://github.com/fallow-rs/fallow/commit/95728543e804a0e4a4a0ca9dd239f328c6adde4d"
        },
        "date": 1786609486745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 207,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 513,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1644,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1332,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1226,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1020,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1426,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1326,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "95a7ae9faf9e987616fe2366b74e99626dfd58c6",
          "message": "fix: surface star-export ambiguity instead of blaming the sources (#2268)\n\nWhen two star re-export sources supply the same name, the barrel exports nothing under that name. Unused-export and unused-type findings are now suppressed for the declarations that contribute to such a collision, instead of blaming both source files for a mistake in the barrel. Traces carry an optional star_export_ambiguity block naming the contributing files and namespaces, so an ambiguous name is no longer indistinguishable from a misspelled one. The unrendered-component and unprovided-inject headers now state the guarantee the code actually offers, including the abstain carve-out that remains. The value-derived type fallback lane is seeded lazily, which makes barrel-chain resolution roughly ten percent cheaper.\n\nCloses #2262\nCloses #2263\nCloses #2264",
          "timestamp": "2026-08-14T06:35:39Z",
          "url": "https://github.com/fallow-rs/fallow/commit/95a7ae9faf9e987616fe2366b74e99626dfd58c6"
        },
        "date": 1786695569595,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 207,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 615,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1641,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1329,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1226,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1022,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1329,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1326,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6ab2c847bad9bc88a85e6fa29139a811db7203a0",
          "message": "fix(type-aware): bound generic scans and identify Svelte host gaps\n\n* chore: start type-aware issue fixes\n\n* fix: harden type-aware generic and Svelte analysis",
          "timestamp": "2026-08-14T09:14:51Z",
          "url": "https://github.com/fallow-rs/fallow/commit/6ab2c847bad9bc88a85e6fa29139a811db7203a0"
        },
        "date": 1786779356378,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 207,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 617,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 409,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1640,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1327,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1228,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1024,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1431,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1329,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8437d52e6688cd1ce823d5da8c6670e7a23f839f",
          "message": "fix: close analysis and audit follow-ups\n\n* chore: start issue follow-up batch\n\n* chore: start issue follow-up batch\n\n* fix: close analysis and audit follow-ups",
          "timestamp": "2026-08-15T23:07:16Z",
          "url": "https://github.com/fallow-rs/fallow/commit/8437d52e6688cd1ce823d5da8c6670e7a23f839f"
        },
        "date": 1786865784431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 308,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 617,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 409,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1649,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1334,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1237,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1028,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1436,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1431,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aba36fe9c341c4365ead772ba7ff274a74ecf8eb",
          "message": "chore(benchmarks): remove stale CodSpeed coverage\n\n* chore: start CodSpeed benchmark cleanup\n\n* chore(benchmarks): remove stale CodSpeed coverage",
          "timestamp": "2026-08-17T07:32:16Z",
          "url": "https://github.com/fallow-rs/fallow/commit/aba36fe9c341c4365ead772ba7ff274a74ecf8eb"
        },
        "date": 1786953278401,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 203,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 102,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 405,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 305,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1012,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1019,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 917,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 710,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 810,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 812,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "172d9f1ca0f3eb73b1a8404548b67cbe6dafdee4",
          "message": "ci(benchmarks): add config walltime workload",
          "timestamp": "2026-08-17T19:38:28Z",
          "url": "https://github.com/fallow-rs/fallow/commit/172d9f1ca0f3eb73b1a8404548b67cbe6dafdee4"
        },
        "date": 1787038948373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 205,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 306,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 206,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 512,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 408,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1639,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1225,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1224,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 1020,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1327,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1324,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg",
            "email": "bart@waardenburg.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "43b0526540c84f669ea1f4a43bf23dbba0c596da",
          "message": "perf(benchmarks): track viz rendering",
          "timestamp": "2026-08-19T07:01:34Z",
          "url": "https://github.com/fallow-rs/fallow/commit/43b0526540c84f669ea1f4a43bf23dbba0c596da"
        },
        "date": 1787125275419,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 204,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 509,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 407,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 1328,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 1118,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 1019,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 916,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 1122,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 1123,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}