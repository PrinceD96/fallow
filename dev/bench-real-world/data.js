window.BENCHMARK_DATA = {
  "lastUpdate": 1780051744423,
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
          "id": "56b4a06bd9fc6f2bed96134bdea34f968795a24c",
          "message": "fix: add bench-real-world.yml to zizmor superfluous-actions ignore list",
          "timestamp": "2026-03-27T07:46:07Z",
          "url": "https://github.com/fallow-rs/fallow/commit/56b4a06bd9fc6f2bed96134bdea34f968795a24c"
        },
        "date": 1774598734152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 57,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 106,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 90,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 438,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 420,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 336,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 321,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 217,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 210,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1910,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1753,
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
          "id": "9e65ad1327a908010b3815c3411e8e7e2348d680",
          "message": "chore: release v2.5.0",
          "timestamp": "2026-03-28T00:11:56Z",
          "url": "https://github.com/fallow-rs/fallow/commit/9e65ad1327a908010b3815c3411e8e7e2348d680"
        },
        "date": 1774684361653,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 60,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 101,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 113,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 98,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 430,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 417,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 334,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 321,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 224,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 210,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1874,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1777,
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
          "id": "9a10769adcd44174a91945238758424486f8d81e",
          "message": "fix: gate parser-invoking extract tests with #[cfg(not(miri))]\n\nThe sfc, astro, and mdx parse_*_to_module tests invoke the Oxc parser\nwhich is ~1000x slower under Miri, causing the 30-minute CI timeout.\nGate these 11 tests so only string-extraction tests run under Miri.",
          "timestamp": "2026-03-28T22:39:21Z",
          "url": "https://github.com/fallow-rs/fallow/commit/9a10769adcd44174a91945238758424486f8d81e"
        },
        "date": 1774771141146,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 54,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 31,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 116,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 100,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 439,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 427,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 346,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 330,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 224,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 219,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1900,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1820,
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
          "id": "1b89cd86611bd85a1c0ebdef7678f56ffd3f95e1",
          "message": "docs: mark trend reporting as shipped in roadmap",
          "timestamp": "2026-03-30T08:11:11Z",
          "url": "https://github.com/fallow-rs/fallow/commit/1b89cd86611bd85a1c0ebdef7678f56ffd3f95e1"
        },
        "date": 1774859239349,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 59,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 34,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 115,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 96,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 449,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 424,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 346,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 335,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 237,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 215,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1927,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1826,
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
          "id": "1c685b1a3e1aad0cd10adacd136d2898f3541109",
          "message": "test: improve health scoring coverage",
          "timestamp": "2026-03-30T21:43:34Z",
          "url": "https://github.com/fallow-rs/fallow/commit/1c685b1a3e1aad0cd10adacd136d2898f3541109"
        },
        "date": 1774944951402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 48,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 119,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 113,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 480,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 478,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 346,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 339,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 245,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 226,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2072,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2001,
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
          "id": "38ce08ade8ead8635595db67d232ceeb787b3f7e",
          "message": "chore: release v2.8.0",
          "timestamp": "2026-04-01T07:55:32Z",
          "url": "https://github.com/fallow-rs/fallow/commit/38ce08ade8ead8635595db67d232ceeb787b3f7e"
        },
        "date": 1775031778816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 30,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 88,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 326,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 312,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 299,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 281,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 192,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 179,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1553,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1445,
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
          "id": "181f611ec3433b99dada91ea4aa26885e18b54ad",
          "message": "refactor: use Display for EntryPointSource and relative paths in list output\n\nAdd Display impl for EntryPointSource with human-readable strings\n(e.g. \"package.json main\" instead of \"PackageJsonMain\"). Switch list\ncommand human output to relative paths and Display formatting.",
          "timestamp": "2026-04-02T07:42:06Z",
          "url": "https://github.com/fallow-rs/fallow/commit/181f611ec3433b99dada91ea4aa26885e18b54ad"
        },
        "date": 1775117684097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 33,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 112,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 101,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 461,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 433,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 334,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 320,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 222,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 213,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1950,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1883,
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
          "id": "b82e6eab66c63d51f7cf1f19f575699414ebb9b9",
          "message": "fix: use slurpfile for PR files to avoid ARG_MAX on large PRs\n\nThe --argjson flag inlines the entire PR files JSON on the command line,\nwhich exceeds ARG_MAX for PRs with 100+ files (each carrying patch data).\nSwitch to --slurpfile which reads from a temp file instead. The jq script\nnormalizes both formats so tests using --argjson still work.",
          "timestamp": "2026-04-03T08:05:37Z",
          "url": "https://github.com/fallow-rs/fallow/commit/b82e6eab66c63d51f7cf1f19f575699414ebb9b9"
        },
        "date": 1775203775536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 59,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 36,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 111,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 92,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 448,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 425,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 337,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 321,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 225,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 215,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1938,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1854,
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
          "id": "fc0321f8aa0dc39a312d71aa92b2b6e8f8a514c8",
          "message": "chore: release v2.12.0",
          "timestamp": "2026-04-03T22:37:34Z",
          "url": "https://github.com/fallow-rs/fallow/commit/fc0321f8aa0dc39a312d71aa92b2b6e8f8a514c8"
        },
        "date": 1775289303653,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 52,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 45,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 115,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 565,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 462,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 358,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 348,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 249,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 241,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2076,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1991,
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
          "id": "31ad2b795659f758b0815386fdacc05d56844e61",
          "message": "chore: release v2.13.0",
          "timestamp": "2026-04-04T10:03:19Z",
          "url": "https://github.com/fallow-rs/fallow/commit/31ad2b795659f758b0815386fdacc05d56844e61"
        },
        "date": 1775376139968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 56,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 33,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 117,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 96,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 462,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 435,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 349,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 328,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 243,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 233,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 1976,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1868,
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
          "id": "c78e241a27479311715dedcc0d8984bed19a4ec1",
          "message": "chore: release v2.13.4",
          "timestamp": "2026-04-06T07:17:00Z",
          "url": "https://github.com/fallow-rs/fallow/commit/c78e241a27479311715dedcc0d8984bed19a4ec1"
        },
        "date": 1775464146463,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 54,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 47,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 120,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 98,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 467,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 453,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 359,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 343,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 246,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 236,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2132,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 1931,
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
          "id": "b434ec77dddff007406ec3267cfa42840e57dfd4",
          "message": "chore: release v2.17.0",
          "timestamp": "2026-04-07T08:18:42Z",
          "url": "https://github.com/fallow-rs/fallow/commit/b434ec77dddff007406ec3267cfa42840e57dfd4"
        },
        "date": 1775550094624,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 41,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 54,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 50,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 38,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 116,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 95,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 475,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 440,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 464,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 436,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 247,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 232,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3420,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3215,
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
          "id": "f7955c8067782e012efc811550f2a90faa15a897",
          "message": "chore: release v2.19.3",
          "timestamp": "2026-04-08T08:12:24Z",
          "url": "https://github.com/fallow-rs/fallow/commit/f7955c8067782e012efc811550f2a90faa15a897"
        },
        "date": 1775636432779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 46,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 70,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 57,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 43,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 37,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 123,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 100,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 480,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 443,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 459,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 428,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 248,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 221,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3404,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3181,
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
          "id": "ec2eccfd30a46277e8b9977eb39936ed3c5ecaa8",
          "message": "feat(vscode): log binary resolution steps to output channel\n\nEach candidate checked during LSP binary resolution is now logged to the\noutput channel, making it easy to diagnose version mismatches or\nunexpected binary selection.",
          "timestamp": "2026-04-09T07:22:10Z",
          "url": "https://github.com/fallow-rs/fallow/commit/ec2eccfd30a46277e8b9977eb39936ed3c5ecaa8"
        },
        "date": 1775723237770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 30,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 58,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 40,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 35,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 30,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 110,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 81,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 373,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 309,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 471,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 404,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 224,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 187,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 2309,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 2165,
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
          "id": "4a044265d4ab6858c72cf851d932674173211996",
          "message": "chore: add ADRs, reviewer subagents, and team assembly rule\n\nAdd Architecture Decision Records (ADRs 001-005) documenting key\ndesign choices. Add specialized reviewer subagents for CI formats,\nCLI output, GitHub Actions, GitLab CI, JSON output, LSP, MCP, and\nVS Code extension. Add team assembly rule for coordinating parallel\nagent work.",
          "timestamp": "2026-04-10T07:51:17Z",
          "url": "https://github.com/fallow-rs/fallow/commit/4a044265d4ab6858c72cf851d932674173211996"
        },
        "date": 1775809721946,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "preact (cold)",
            "value": 51,
            "unit": "ms"
          },
          {
            "name": "preact (warm)",
            "value": 44,
            "unit": "ms"
          },
          {
            "name": "fastify (cold)",
            "value": 58,
            "unit": "ms"
          },
          {
            "name": "fastify (warm)",
            "value": 49,
            "unit": "ms"
          },
          {
            "name": "zod (cold)",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "zod (warm)",
            "value": 39,
            "unit": "ms"
          },
          {
            "name": "vue-core (cold)",
            "value": 124,
            "unit": "ms"
          },
          {
            "name": "vue-core (warm)",
            "value": 105,
            "unit": "ms"
          },
          {
            "name": "svelte (cold)",
            "value": 496,
            "unit": "ms"
          },
          {
            "name": "svelte (warm)",
            "value": 443,
            "unit": "ms"
          },
          {
            "name": "query (cold)",
            "value": 623,
            "unit": "ms"
          },
          {
            "name": "query (warm)",
            "value": 588,
            "unit": "ms"
          },
          {
            "name": "vite (cold)",
            "value": 294,
            "unit": "ms"
          },
          {
            "name": "vite (warm)",
            "value": 256,
            "unit": "ms"
          },
          {
            "name": "next.js (cold)",
            "value": 3524,
            "unit": "ms"
          },
          {
            "name": "next.js (warm)",
            "value": 3342,
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
      }
    ]
  }
}