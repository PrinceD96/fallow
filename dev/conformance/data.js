window.BENCHMARK_DATA = {
  "lastUpdate": 1781864580629,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Fallow Conformance": [
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
          "id": "e7d831cfb1c958dde87f70d656058b50257431d7",
          "message": "refactor: remove RSS tracking from real-world benchmarks\n\nRSS values are machine-specific and can't be backfilled, causing\ninconsistent data point counts between cold/warm and RSS metrics.\nTrack only cold and warm analysis times for consistent charts.",
          "timestamp": "2026-03-26T23:10:27Z",
          "url": "https://github.com/fallow-rs/fallow/commit/e7d831cfb1c958dde87f70d656058b50257431d7"
        },
        "date": 1774594851694,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.8,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 141,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 7257,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 670,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3.1,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 2.9,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 9,
            "unit": "%"
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
        "date": 1774680632305,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 147,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 7403,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 670,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.4,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 9.1,
            "unit": "%"
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
        "date": 1774767496764,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 147,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 7395,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 670,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.4,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 9.1,
            "unit": "%"
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
          "id": "a4f34290e24f2b304d16b1c6daaa73eec0f35ef3",
          "message": "chore: track .claude/rules and .claude/agents in git\n\nThese are project-specific context files that benefit any contributor\nusing Claude Code. Rules scope crate-level guidance, agents define\ncustom reviewer/panel configurations.",
          "timestamp": "2026-03-30T07:05:40Z",
          "url": "https://github.com/fallow-rs/fallow/commit/a4f34290e24f2b304d16b1c6daaa73eec0f35ef3"
        },
        "date": 1774855233298,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 147,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 7395,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 670,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.4,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 9.1,
            "unit": "%"
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
        "date": 1774940797961,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 147,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 7393,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 670,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.4,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 9.1,
            "unit": "%"
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
          "id": "636fe4f18d157410ed9f8ef8ff5d9257a0524a7b",
          "message": "refactor: add 6 restriction lints from oxc\n\n- filetype_is_file: use !is_dir() to include symlinked source files\n- rest_pat_in_fully_bound_structs: catch redundant .. in patterns\n- pub_underscore_fields: catch accidentally public _-prefixed fields\n- non_zero_suggestions: suggest NonZero types\n- precedence_bits: catch bitwise precedence mistakes\n- map_with_unused_argument_over_ranges: prefer repeat/repeat_with",
          "timestamp": "2026-03-31T14:30:34Z",
          "url": "https://github.com/fallow-rs/fallow/commit/636fe4f18d157410ed9f8ef8ff5d9257a0524a7b"
        },
        "date": 1775027613528,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.8,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 147,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 7426,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 670,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.4,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 9.1,
            "unit": "%"
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
          "id": "b03d6253eba68e7e62a047a2f085fffd31251e56",
          "message": "docs: add boundary preset example to README",
          "timestamp": "2026-04-01T18:53:39Z",
          "url": "https://github.com/fallow-rs/fallow/commit/b03d6253eba68e7e62a047a2f085fffd31251e56"
        },
        "date": 1775113554171,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.8,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 147,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 7426,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 670,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.4,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 9.1,
            "unit": "%"
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
          "id": "285c6dfbec92d5e730b469ac64aa2b9caa7389a6",
          "message": "chore: release v2.10.1",
          "timestamp": "2026-04-03T06:53:11Z",
          "url": "https://github.com/fallow-rs/fallow/commit/285c6dfbec92d5e730b469ac64aa2b9caa7389a6"
        },
        "date": 1775199773421,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 147,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 7426,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.4,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 9.1,
            "unit": "%"
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
        "date": 1775285529753,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 147,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 7430,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.4,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 9.1,
            "unit": "%"
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
        "date": 1775372392229,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 147,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 7430,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.4,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 9.1,
            "unit": "%"
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
        "date": 1775460164763,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 147,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 7140,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 2.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.3,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 10.4,
            "unit": "%"
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
          "id": "da3f00fda8a08e6c63388f2329d8df3afee5be71",
          "message": "test: add integration tests for root-relative HTML resolution\n\nAdd fixture and 3 integration tests covering root-relative paths\n(/src/entry.ts, /src/global.css) in HTML files. Also add missing\ncanonical_fallback lookup for symlink parity with the main resolution\npath.",
          "timestamp": "2026-04-07T06:25:21Z",
          "url": "https://github.com/fallow-rs/fallow/commit/da3f00fda8a08e6c63388f2329d8df3afee5be71"
        },
        "date": 1775545799000,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 147,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 6268,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 2.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.3,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 19.4,
            "unit": "%"
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
          "id": "59cf13a3fb42a09d19145257a898c9c4a77d5a41",
          "message": "fix: skip create_resolver tests under Miri (statx unsupported)\n\nTests directly calling specifier::create_resolver() trigger oxc_resolver\nwhich uses the statx syscall via rustix. Miri doesn't support statx\nunder isolation. Added #[cfg_attr(miri, ignore)] to 5 tests.",
          "timestamp": "2026-04-08T06:34:51Z",
          "url": "https://github.com/fallow-rs/fallow/commit/59cf13a3fb42a09d19145257a898c9c4a77d5a41"
        },
        "date": 1775632337744,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 147,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 6265,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 2.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.3,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 19.4,
            "unit": "%"
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
          "id": "9ad9a68f42741179007c3ab8ffa119322c47f6d1",
          "message": "chore: release v2.23.1",
          "timestamp": "2026-04-09T06:02:18Z",
          "url": "https://github.com/fallow-rs/fallow/commit/9ad9a68f42741179007c3ab8ffa119322c47f6d1"
        },
        "date": 1775718944200,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.1,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 146,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 6434,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.5,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 14.7,
            "unit": "%"
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
          "id": "79243fb69d3686ff035184e180d0dd8144d17514",
          "message": "fix: typo in test name (unparseable -> unparsable)",
          "timestamp": "2026-04-10T05:16:52Z",
          "url": "https://github.com/fallow-rs/fallow/commit/79243fb69d3686ff035184e180d0dd8144d17514"
        },
        "date": 1775805664437,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.1,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 146,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 6434,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.5,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 14.7,
            "unit": "%"
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
        "date": 1775890519712,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.1,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 146,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 6344,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 3,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 14.7,
            "unit": "%"
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
          "id": "d0d69aa669ece6b526e6166761cbf6afa70cbe8c",
          "message": "chore: release v2.28.2",
          "timestamp": "2026-04-11T20:47:06Z",
          "url": "https://github.com/fallow-rs/fallow/commit/d0d69aa669ece6b526e6166761cbf6afa70cbe8c"
        },
        "date": 1775977744175,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.3,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 155,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 6351,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 2.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 8.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 14.7,
            "unit": "%"
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
          "id": "cf3fa79f9c1215b1bf796f3a8d49f525ae71f56c",
          "message": "feat: add Hardhat, UnoCSS, Qwik, Convex, pnpm plugins (85 -> 90)\n\nFive new framework plugins, each validated against real open source\nprojects:\n\n- Hardhat: Ethereum dev framework. Parses hardhat.config via new\n  extract_imports_and_requires() to capture both import statements and\n  side-effect require() calls. Entry points for test/, scripts/, tasks/,\n  deploy/, ignition/modules/.\n- UnoCSS: Atomic CSS engine. Supports both uno.config and unocss.config\n  file names. Extracts preset/transformer imports via imports_only.\n  Prefix enabler @unocss/ catches all scoped packages.\n- Qwik: Web framework (v1 @builder.io + v2 @qwik.dev). File-system\n  routing with used_exports for route handlers (onGet, onPost, etc.)\n  and layouts including reset layouts (layout!).\n- Convex: Backend platform. All convex/**/*.ts files are entry points.\n  Protects _generated/, schema, auth, http from unused-file detection.\n- pnpm: Package manager with file-existence detection (pnpm-lock.yaml,\n  pnpm-workspace.yaml) since pnpm is rarely a package.json dependency.\n\nAlso adds extract_imports_and_requires() to config_parser.rs for\nconfigs that load plugins via top-level require() statements.",
          "timestamp": "2026-04-13T07:29:52Z",
          "url": "https://github.com/fallow-rs/fallow/commit/cf3fa79f9c1215b1bf796f3a8d49f525ae71f56c"
        },
        "date": 1776066825090,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.3,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 155,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 6354,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 2.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 8.3,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 14.7,
            "unit": "%"
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
          "id": "7b468e52310cf9a90e61e86fb8449ae5a2b224b8",
          "message": "perf: share parsed modules between check and health in combined mode\n\nWhen running bare `fallow` (dead-code + dupes + health), the check\npipeline now parses with need_complexity=true and retains the\nmodules + discovered files. Health reuses them, skipping its own\ndiscovery and parse pass.\n\nOn next.js (21K files): eliminates ~374ms of redundant parsing.\nNet wall-clock savings ~250ms (complexity visitor adds ~100ms to\nthe check parse, offsetting part of the savings).",
          "timestamp": "2026-04-14T05:29:58Z",
          "url": "https://github.com/fallow-rs/fallow/commit/7b468e52310cf9a90e61e86fb8449ae5a2b224b8"
        },
        "date": 1776151424620,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.3,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 155,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 6354,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 2.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 8.3,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 14.7,
            "unit": "%"
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
          "id": "a36a915fa5afbc806c186ad90f60f0563f24db66",
          "message": "chore: release v2.36.0",
          "timestamp": "2026-04-14T21:38:28Z",
          "url": "https://github.com/fallow-rs/fallow/commit/a36a915fa5afbc806c186ad90f60f0563f24db66"
        },
        "date": 1776237847422,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.3,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 155,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 6351,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 2.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 8.3,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 14.7,
            "unit": "%"
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
        "date": 1776324294652,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.3,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 155,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 6351,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 2.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 8.3,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 14.7,
            "unit": "%"
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
          "id": "b9e06014a170bcabfb53f78ffd88b8e5940936bc",
          "message": "fix(license): resolve user home dir on Windows via USERPROFILE\n\ndefault_license_path() and canonical_sidecar_path() both read $HOME\ndirectly and fell back to \"./.fallow/...\" when unset. On native Windows\n(cmd / PowerShell, not Git Bash) $HOME is not set; the fallback silently\nwrites the license JWT to a cwd-relative .fallow directory, which breaks\nCI runners that run fallow from a repo checkout.\n\nAdds fallow_license::user_home_dir() which checks $HOME first (Unix and\nGit Bash / MSYS / Cygwin on Windows) then %USERPROFILE% (native Windows),\nreturning None only when neither resolves to a non-empty value. Both\ncallers switch to this helper.\n\nAlso guards against the CI footgun of HOME=\"\" (exported but empty): the\nprevious code would return PathBuf::from(\"\") whose .join(\".fallow\")\nproduced \"/.fallow\" — invalid.\n\n4 unit tests cover: HOME preferred over USERPROFILE, USERPROFILE\nfallback, empty-string skip, and the no-home-at-all None case.\n\nNo behavior change on Unix. No new dependencies.",
          "timestamp": "2026-04-17T07:20:28Z",
          "url": "https://github.com/fallow-rs/fallow/commit/b9e06014a170bcabfb53f78ffd88b8e5940936bc"
        },
        "date": 1776410706212,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.3,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 155,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 6351,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 662,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 2.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 8.3,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 14.7,
            "unit": "%"
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
          "id": "eae99cc6d6592d55bcac3a5ea97665cb3a0ed01d",
          "message": "fix(suppress): surface unknown issue-kind tokens as stale findings\n\nSuppression markers with a typo or an obsolete issue-kind name no longer\nsilently discard the entire line. `// fallow-ignore-next-line\nunused-export, complexity-typo` now suppresses `unused-export` normally\nand surfaces `complexity-typo` as a `stale-suppression` finding so the\nuser sees the typo instead of losing their suppression in silence.\n\n`parse_issue_kind_list` in `crates/extract/src/suppress.rs` switches from\nreturning `Option<Vec<IssueKind>>` to `(Vec<IssueKind>, Vec<String>)`,\naccumulating known kinds alongside unknown tokens. The new\n`UnknownSuppressionKind` type on `ModuleInfo` carries each token through\nthe parser, cache, and graph layers; `SuppressionContext::find_stale`\nemits one extra `StaleSuppression` per unknown token, reusing\n`SuppressionOrigin::Comment` with a new additive `kind_known: bool` wire\nfield so JSON, MCP, and CI consumers can distinguish unknown-kind tokens\nfrom stale-but-known kinds without parsing prose. The\n`StaleSuppression::explanation()` and `display_message()` helpers branch\non `kind_known` to render `'<token>' is not a recognized fallow issue\nkind. Did you mean '<closest>'? Other tokens on this line still apply.`\nwith a Levenshtein hint when an existing kind is within edit distance 2;\nSARIF, CodeClimate, and compact pick up the same actionable copy via the\nnew helper.\n\nCACHE_VERSION bumps 86 to 87 so warm `.fallow/cache` directories pick up\nthe new field on upgrade. The bundled GitHub Action annotation and\nsummary jq scripts plus the GitLab CI summary jq branch on\n`origin.kind_known == false` to render the typo-fix copy instead of \"no\nlonger matches any active issue.\" `ModuleInfo` size assertion bumps 472\nto 496 bytes for the new `Vec<UnknownSuppressionKind>` field. The\n`docs/output-schema.json` regenerates with the additive optional\n`kind_known` (non-required), and the generated TypeScript bindings in\n`editors/vscode/src/generated/` and `npm/fallow/types/` flow through.\n\nFixes #449.",
          "timestamp": "2026-05-21T08:48:33Z",
          "url": "https://github.com/fallow-rs/fallow/commit/eae99cc6d6592d55bcac3a5ea97665cb3a0ed01d"
        },
        "date": 1779354389643,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 669,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 31519,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2030,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 5.3,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 20.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
        "date": 1779440289509,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 669,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 31518,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2030,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 5.3,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 20.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
        "date": 1779524115672,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 670,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 32013,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2030,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 5.3,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 22.7,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
        "date": 1779611173764,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 670,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 32010,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2030,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 5.3,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 22.7,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
        "date": 1779703115223,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 670,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 32010,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2030,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 5.3,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 22.7,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "4f150680c3140e2ded8314447cfaefdcee310149",
          "message": "fix: handle Deno jsr/npm/url imports and Supabase Edge Function roots (#690)\n\nTreat jsr: and URL specifiers as external runtime imports and normalize\nnpm:<pkg>@version to its npm package so Deno/Supabase Edge Function imports\nno longer report as unresolved-import or bogus unlisted dependencies. A\npackage imported only via npm: is self-declaring and not reported as\nunlisted (mirrors the per-file bun: carve-out). Add a built-in supabase\nplugin that marks supabase/functions/*/index.* as runtime entry roots and\ncredits the supabase CLI as tooling; _shared code stays reachable via\nrelative imports.\n\nCloses #624",
          "timestamp": "2026-05-26T09:12:40Z",
          "url": "https://github.com/fallow-rs/fallow/commit/4f150680c3140e2ded8314447cfaefdcee310149"
        },
        "date": 1779788764618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 670,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 32003,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2030,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 5.6,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 22.6,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "8a1a699fa7482dc2d15427e006ff74cc19417bd5",
          "message": "feat: ignore unresolved imports by specifier\n\nCloses #726",
          "timestamp": "2026-05-27T09:21:33Z",
          "url": "https://github.com/fallow-rs/fallow/commit/8a1a699fa7482dc2d15427e006ff74cc19417bd5"
        },
        "date": 1779874749647,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.1,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 699,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 32024,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2030,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 7.1,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.2,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
        "date": 1779962172778,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2.1,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 699,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 32024,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2030,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 7.1,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.2,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "49b820fde252762f4fb4b74a2acee76f9cdea575",
          "message": "refactor(core,lsp): unify plugin-result merging via field-exhaustive merge_into (#776)\n\nReplace the two hand-maintained field-by-field merge sites with merge_into\nmethods that exhaustively destructure their own struct, so adding a field\nbecomes a compile error in the merge logic instead of a silent divergence\nbetween the CLI and the LSP.\n\n- AggregatedPluginResult::merge_into + apply_workspace_prefix (core): the\n  workspace merge loop in run_plugins now prefixes each workspace result then\n  folds it in via the single union method. Pre-refactor behavior preserved\n  exactly: workspace config_patterns / used_class_members / scss_include_paths\n  (populated by run_workspace_fast but never merged) stay dropped, and\n  script_used_packages (never populated there) is cleared too so a future\n  change cannot silently alter root script-credit. Whether the populated-field\n  drops are latent bugs is tracked in #772.\n- AnalysisResults::merge_into (types): the LSP merge_results becomes a thin\n  wrapper delegating to it.\n- merge_test_source_with_all_fields drops ..Default::default() so the test\n  fixture is also a compile-time field-coverage gate.\n- Re-export FeatureFlag / FlagKind / FlagConfidence from fallow_core::results\n  so the feature_flags element type is nameable by consumers.\n\nPure refactor: no change to merged outputs (all benchmark fixtures\nbyte-identical OLD vs NEW).\n\nCloses #444.",
          "timestamp": "2026-05-29T09:14:41Z",
          "url": "https://github.com/fallow-rs/fallow/commit/49b820fde252762f4fb4b74a2acee76f9cdea575"
        },
        "date": 1780047958846,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 667,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 31757,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2030,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.2,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
        "date": 1780129464783,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 668,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 31758,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2030,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.2,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
        "date": 1780217016857,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 668,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 31758,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2030,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.2,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "b54c3be7ea7af3c6dd49932de28d8b35941e744d",
          "message": "test(schema): allow schema drift expects\n\nThe schema-emit CI path runs clippy against the test build of fallow-schema-emit with the schema-emit feature enabled. Its drift tests intentionally use expect calls for invariant checks over the committed schema.\n\nAdd the same test-only unwrap and expect allowance used by other test entry points so production schema generation remains covered while CI can compile the drift checks under the workspace lint ratchet.",
          "timestamp": "2026-06-01T11:04:43Z",
          "url": "https://github.com/fallow-rs/fallow/commit/b54c3be7ea7af3c6dd49932de28d8b35941e744d"
        },
        "date": 1780312718235,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 668,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 31758,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.6,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.2,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "2df7aaebcb8dba125545bcd933c793bba37c40fe",
          "message": "feat(security): data-driven tainted-sink candidate catalogue\n\nAdd a deterministic, opt-in local security-candidate layer surfaced only by\n`fallow security`. Findings are CANDIDATES for downstream agent verification\n(the DeepSec / Warden model), never under bare `fallow` or the audit gate.\n\nA shape-agnostic ModuleInfo.security_sinks extract capture feeds a data-driven\nmatcher catalogue (crates/core/data/security_matchers.toml + catalogue.rs), so\nadding a CWE category is a TOML row with no Rust enum churn. One generic\nSecurityFindingKind::TaintedSink carries category + cwe; IssueKind::SecuritySink\nand a default-off security_sink rule gate it. Nine seed categories ship, each\nwith positive and literal-negative integration fixtures: dangerous-html (CWE-79),\ncommand-injection (78, provenance-gated), code-injection (94, eval + vm),\nsql-injection (89), ssrf (918), path-traversal (22), open-redirect (601),\nweak-crypto (327), unsafe-deserialization (502). The bespoke graph-structural\nclient-server-leak class is unchanged.\n\nConservative non-literal-argument trigger (literal args never fire); blind spots\ncounted in-band via unresolved_callee_sites. Human / JSON / SARIF output carry\ncategory + cwe. ADR-021 non-goals (SCA, CVE/advisory feeds, auth-logic finding)\nstay out of scope.",
          "timestamp": "2026-06-01T21:20:14Z",
          "url": "https://github.com/fallow-rs/fallow/commit/2df7aaebcb8dba125545bcd933c793bba37c40fe"
        },
        "date": 1780395325192,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 630,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30501,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.8,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.7,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "5a6884f0ae6526884aff0b17024a3786b44fe399",
          "message": "fix(extract): credit structural class member calls\n\nTrack local typed function calls that receive concrete class instances and credit only the class members read through the matching typed parameter. The extractor keeps this scoped to local callees, exact argument positions, direct constructor arguments, and constructor-bound identifiers.\n\nRespect block-scoped shadows of the typed parameter name so unrelated local objects do not credit the concrete class argument. The change adds extractor and core regressions, updates detection notes, bumps the extraction cache for the new member-access semantics, and aligns the CODEOWNERS smoke test with the current scoped owner file.\n\nFixes #910.",
          "timestamp": "2026-06-03T09:25:35Z",
          "url": "https://github.com/fallow-rs/fallow/commit/5a6884f0ae6526884aff0b17024a3786b44fe399"
        },
        "date": 1780484045010,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 630,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30499,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.8,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 3.7,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "e0c6e2171bba529b632a2e7f54e52513a951a796",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.88.3",
          "timestamp": "2026-06-04T09:46:20Z",
          "url": "https://github.com/fallow-rs/fallow/commit/e0c6e2171bba529b632a2e7f54e52513a951a796"
        },
        "date": 1780566759486,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 630,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30402,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.8,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "76ca098b6ec76019f7a1039d2255f82a026a1c39",
          "message": "fix(tanstack): skip route contract duplicate exports\n\nTanStack Router route modules are allowed to repeat framework contract exports such as Route. The duplicate-export detector now applies TanStack route used-export rules to duplicate grouping, and also recognizes Route exports imported by generated routeTree.gen files from nested route directories.\n\nOrdinary duplicate Route exports outside TanStack route files still report. Regression coverage includes the OpenWaggle-shaped generated route tree plus configured route directories, lazy routes, ignore prefixes, and virtual route config.\n\nFixes #947.",
          "timestamp": "2026-06-05T09:39:40Z",
          "url": "https://github.com/fallow-rs/fallow/commit/76ca098b6ec76019f7a1039d2255f82a026a1c39"
        },
        "date": 1780652524759,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 2,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 630,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30402,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.8,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "65e53f7f3a21226a1a36f2289d3c2be080b5037f",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.89.0",
          "timestamp": "2026-06-05T17:03:16Z",
          "url": "https://github.com/fallow-rs/fallow/commit/65e53f7f3a21226a1a36f2289d3c2be080b5037f"
        },
        "date": 1780734812508,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 593,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30362,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "08912ff4b864e56e5e2f1439292338c12feb3207",
          "message": "fix(security): flag source-backed redos regex sinks\n\nCapture risky literal regex applications as source-backed security sink candidates. The extractor records the risky regex fragment for literal regexes and constant RegExp strings, then the existing catalogue emits redos-regex CWE-1333 findings only when the input traces to an untrusted source.\n\nSafe literal patterns, mutable regex bindings, and source-free inputs stay quiet. The extraction cache version is bumped because security_sinks now carries the optional regex fragment metadata.\n\nFixes #928.",
          "timestamp": "2026-06-07T08:38:38Z",
          "url": "https://github.com/fallow-rs/fallow/commit/08912ff4b864e56e5e2f1439292338c12feb3207"
        },
        "date": 1780822470344,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 593,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30363,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
        "date": 1780914470780,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 593,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30363,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "b5868dd2d6ef5cd8f3c7f025bcc125f203e303d4",
          "message": "fix(vscode): open dynamic route paths\n\nRoute VS Code sidebar tree opens through an internal `fallow.openFile` command so bracketed filesystem paths remain decoded until the extension host calls `Uri.file(...)`.\n\nApply the same open-path handling across unused-code, duplicates, health, security, and coverage tree items, with unit coverage for decoded Next.js dynamic route paths and the command handler.\n\nFixes #1071.",
          "timestamp": "2026-06-09T09:04:17Z",
          "url": "https://github.com/fallow-rs/fallow/commit/b5868dd2d6ef5cd8f3c7f025bcc125f203e303d4"
        },
        "date": 1780997670323,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 593,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30363,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "c22eb0680279b8c96a9f15189d46ca1929600c40",
          "message": "fix: apply boundary coverage rules consistently\n\nApply per-file `boundary-violation` overrides to both import boundary findings and boundary coverage findings.\n\nRender boundary coverage in human output when it is the only structure finding, and keep embedded config-action paths relative in JSON output.",
          "timestamp": "2026-06-10T09:13:32Z",
          "url": "https://github.com/fallow-rs/fallow/commit/c22eb0680279b8c96a9f15189d46ca1929600c40"
        },
        "date": 1781085046461,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 593,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30363,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
        "date": 1781258808404,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 593,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30361,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "4bbacc94af59a4e5b20523d7422bf21cd5f4696b",
          "message": "feat(nextjs): flag server-only exports in \"use client\" files (#1229)\n\nFirst stage of the Next.js RSC differentiated-detection program (panel-approved).\n\n**C.1 `invalid-client-export` (new issue type, default warn):** a file carrying the `\"use client\"` directive that also exports a Next.js server-only or route-segment-config name (`metadata`, `generateMetadata`, `generateStaticParams`, `getServerSideProps`, route HTTP methods, `revalidate`, `dynamic`, ...). Next.js throws this at build time; fallow catches it statically in the same pass as the rest of dead-code analysis. The client component's `default` export is never flagged, and the rule only runs when `next` is a declared dependency (FP gate). Reported across human, JSON, SARIF, CodeClimate, compact, and markdown plus the LSP; suppressible via `// fallow-ignore-next-line invalid-client-export`; participates in audit introduction attribution and baselines.\n\n**E (capability headline):** integration coverage proving fallow reports route-internal unused exports (a stray helper export or a typo'd `metadata`) inside `app/page.tsx` where knip cannot, because fallow credits a precise per-route-file export allowlist rather than treating the whole route file as an opaque entry point.\n\nTeam review: rust, cli-output, json-output, ci-formats, lsp, github-action reviewers; one BLOCK (audit-attribution annotation) and two CONCERNs (human footer/suppress hint, jq tests) all resolved with regression tests. Full workspace test, clippy, fmt, doc, VS Code codegen, and jq suites green.",
          "timestamp": "2026-06-13T08:39:15Z",
          "url": "https://github.com/fallow-rs/fallow/commit/4bbacc94af59a4e5b20523d7422bf21cd5f4696b"
        },
        "date": 1781341002705,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 593,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30361,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "f9b6926884113b997f08366df1474c236d81b46d",
          "message": "fix(extract): credit Vue components rendered after a nested template slot (#1247)\n\nThe Vue SFC template-usage scanner matched the root template against the first </template> (non-greedy capture), truncating the body at a nested <template #slot> close and dropping every component rendered after it, causing false unused-export findings.\n\nThe scanner now locates the root close with nesting depth tracking, byte-safe (CJK), with an unclosed-comment fall-through. Verified on a real corpus: vue-vben-admin layout-ui went from 4 false unused-exports to 0, no new FPs. CACHE_VERSION 156 to 157.",
          "timestamp": "2026-06-14T08:16:14Z",
          "url": "https://github.com/fallow-rs/fallow/commit/f9b6926884113b997f08366df1474c236d81b46d"
        },
        "date": 1781429370580,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 593,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30362,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "8593f955ae31647444ec6f6f679571339cefafec",
          "message": "fix(dupes): ignore module wiring in imports filter\n\nExtend the existing ignoreImports duplicate filter beyond ES imports so re-export barrels and top-level static CommonJS require binding declarations no longer create clone groups by default.\n\nThe tokenizer now skips source-backed re-exports and whole top-level require-binding declarations while preserving runtime code, local exports, side-effect require calls, nested require calls, dynamic require arguments, and mixed declarations. The duplicate token cache version is bumped so warm caches do not reuse the old token stream.\n\nConfig schema, CLI help, changelog, agent rules, and shipped skill reference wording now describe the broader module-wiring scope.\n\nFixes #1225.",
          "timestamp": "2026-06-15T11:06:02Z",
          "url": "https://github.com/fallow-rs/fallow/commit/8593f955ae31647444ec6f6f679571339cefafec"
        },
        "date": 1781524571634,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 593,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30208,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2028,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.9,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 24.3,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "c541c92cf270988b4b6dd7b75d03c2da812ac335",
          "message": "refactor: reduce sig unit-size hotspots\n\nSplit large Rust units across CLI audit, health, reporting, LSP, MCP, config, extract, and core analysis paths into focused helpers.\n\nThis is a maintainability-only refactor. Output contracts, schemas, and user-facing behavior stay stable while the SIG unit-size pressure drops across the branch.",
          "timestamp": "2026-06-16T10:40:25Z",
          "url": "https://github.com/fallow-rs/fallow/commit/c541c92cf270988b4b6dd7b75d03c2da812ac335"
        },
        "date": 1781607970913,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 593,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30233,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2035,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.7,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 22.8,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "9fb44aac4684f23967b73dcaaa30ca8598e2a4f1",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.98.0",
          "timestamp": "2026-06-17T10:30:55Z",
          "url": "https://github.com/fallow-rs/fallow/commit/9fb44aac4684f23967b73dcaaa30ca8598e2a4f1"
        },
        "date": 1781692686089,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 593,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30232,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2035,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.7,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 22.8,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "906d0beef87ce240c6558844d71070cad03d938a",
          "message": "perf(cli): stream SARIF file output\n\nWrite SARIF files through a buffered JSON writer instead of first building a pretty JSON string in memory. This keeps the existing parent directory handling and warning behavior while avoiding the extra allocation for file output.\n\nFlush the writer explicitly so late IO errors are still reported before the success message.",
          "timestamp": "2026-06-18T09:44:58Z",
          "url": "https://github.com/fallow-rs/fallow/commit/906d0beef87ce240c6558844d71070cad03d938a"
        },
        "date": 1781777896630,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.8,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 586,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30223,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2044,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.6,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 23,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
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
          "id": "1779391d89029381f0ca8130c64fc37b2b6009ab",
          "message": "test(audit): pin LF in shifted-duplicate test for Windows",
          "timestamp": "2026-06-19T10:21:05Z",
          "url": "https://github.com/fallow-rs/fallow/commit/1779391d89029381f0ca8130c64fc37b2b6009ab"
        },
        "date": 1781864577752,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Agreement Rate",
            "value": 1.9,
            "unit": "%"
          },
          {
            "name": "Agreed Issues",
            "value": 593,
            "unit": "issues"
          },
          {
            "name": "Fallow Total",
            "value": 30232,
            "unit": "issues"
          },
          {
            "name": "Knip Total",
            "value": 2044,
            "unit": "issues"
          },
          {
            "name": "fastify Agreement",
            "value": 6.1,
            "unit": "%"
          },
          {
            "name": "next.js Agreement",
            "value": 1.7,
            "unit": "%"
          },
          {
            "name": "preact Agreement",
            "value": 4.2,
            "unit": "%"
          },
          {
            "name": "query Agreement",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "svelte Agreement",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "vite Agreement",
            "value": 6.7,
            "unit": "%"
          },
          {
            "name": "vue-core Agreement",
            "value": 22.8,
            "unit": "%"
          },
          {
            "name": "zod Agreement",
            "value": 2.8,
            "unit": "%"
          }
        ]
      }
    ]
  }
}