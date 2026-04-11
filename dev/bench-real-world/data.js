window.BENCHMARK_DATA = {
  "lastUpdate": 1775894380382,
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
      }
    ]
  }
}