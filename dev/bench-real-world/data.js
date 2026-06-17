window.BENCHMARK_DATA = {
  "lastUpdate": 1781696483368,
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
      }
    ]
  }
}