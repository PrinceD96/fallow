window.BENCHMARK_DATA = {
  "lastUpdate": 1776066826187,
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
      }
    ]
  }
}