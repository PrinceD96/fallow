window.BENCHMARK_DATA = {
  "lastUpdate": 1775859959076,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ef6f521dfd40c5a4dbd2f38897c22826eb677f2c",
          "message": "test: add integration tests for unused fixtures\n\n- barrel-default-reexport: verify unused Card re-export detected,\n  Button correctly recognized as used\n- config-toml-project: verify fallow.toml config loading, rule\n  severity parsing, and full analysis pipeline with TOML config\n- workspace-nested-exports: verify dist/esm/ exports map paths\n  resolve back to source files via fallback",
          "timestamp": "2026-04-07T13:18:41+02:00",
          "tree_id": "80fcfb6df782f6a49ee42f7ad5a7211f8628ed14",
          "url": "https://github.com/fallow-rs/fallow/commit/ef6f521dfd40c5a4dbd2f38897c22826eb677f2c"
        },
        "date": 1775561110395,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3567392,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15494,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "324fbba6d9acc7bbf694654a148206a55ebe505a",
          "message": "chore: low-priority quality improvements from audit\n\n- Decompose run_combined from 275 to 127 lines (4 extracted functions)\n- Narrow tokio features from \"full\" to 6 specific features\n- Move miette fancy feature from config to CLI only\n- Add --all-targets to pre-commit/pre-push hooks\n- Add npm ecosystem entries to Dependabot (vscode, npm wrapper)\n- Replace magic numbers: 86400 -> SECS_PER_DAY, 30 -> COGNITIVE_EXTRACTION_THRESHOLD\n- Fix release.yml: publish-crates needs build, remove duplicate npm install\n- Switch test temp dirs to tempfile::tempdir() for RAII cleanup\n- Add LSP boundary violation diagnostic tests (5 tests)\n- Add plugin resolve_config tests for tsup, rollup, rolldown (20 tests)",
          "timestamp": "2026-04-07T13:42:06+02:00",
          "tree_id": "7a02bff40c85b666f6c1e0e11a698bbd982f24e3",
          "url": "https://github.com/fallow-rs/fallow/commit/324fbba6d9acc7bbf694654a148206a55ebe505a"
        },
        "date": 1775562224762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3580448,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15518,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "c684f8f965af619e67e9e3d949767e9c70ca9622",
          "message": "refactor: replace bincode with bitcode for cache serialization\n\nBincode is archived and unmaintained. Bitcode provides the same\nEncode/Decode derive pattern with smaller output and faster\nencode/decode. Bump CACHE_VERSION 21→22 to invalidate old caches.",
          "timestamp": "2026-04-07T13:53:46+02:00",
          "tree_id": "c3ce508c1571d4efa97d9fb0fd59972785258fd8",
          "url": "https://github.com/fallow-rs/fallow/commit/c684f8f965af619e67e9e3d949767e9c70ca9622"
        },
        "date": 1775563151781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3577440,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15510,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
            "unit": "allocations"
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
          "id": "20f4148bb7c0ce7d4de8e429eaa202dc874b44f0",
          "message": "chore(deps): bump rmcp from 1.2.0 to 1.3.0 (#70)\n\nBumps [rmcp](https://github.com/modelcontextprotocol/rust-sdk) from 1.2.0 to 1.3.0.\n- [Release notes](https://github.com/modelcontextprotocol/rust-sdk/releases)\n- [Changelog](https://github.com/modelcontextprotocol/rust-sdk/blob/main/release-plz.toml)\n- [Commits](https://github.com/modelcontextprotocol/rust-sdk/compare/rmcp-v1.2.0...rmcp-v1.3.0)\n\n---\nupdated-dependencies:\n- dependency-name: rmcp\n  dependency-version: 1.3.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-07T14:04:13+02:00",
          "tree_id": "45ab112165f78d4117601886ab2919ce3ecb6ba2",
          "url": "https://github.com/fallow-rs/fallow/commit/20f4148bb7c0ce7d4de8e429eaa202dc874b44f0"
        },
        "date": 1775563572761,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3583352,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15524,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
            "unit": "allocations"
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
          "id": "fd4aeed83d72054e5ea39f595c59ea34cbda35ce",
          "message": "chore(deps): bump the oxc group with 7 updates (#67)\n\nBumps the oxc group with 7 updates:\n\n| Package | From | To |\n| --- | --- | --- |\n| [oxc_allocator](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_ast](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_ast_visit](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_parser](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_semantic](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_span](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_syntax](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n\n\nUpdates `oxc_allocator` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_ast` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_ast_visit` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_parser` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_semantic` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_span` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_syntax` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\n---\nupdated-dependencies:\n- dependency-name: oxc_allocator\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_ast\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_ast_visit\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_parser\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_semantic\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_span\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_syntax\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-07T14:06:47+02:00",
          "tree_id": "af4578715f266b33af55b71e8510b27bc92aa801",
          "url": "https://github.com/fallow-rs/fallow/commit/fd4aeed83d72054e5ea39f595c59ea34cbda35ce"
        },
        "date": 1775563743923,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578696,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15512,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "0dee83f4a5e0650a0dd0975f71672b7b2692c728",
          "message": "fix(extract): bump CACHE_VERSION for this.field chained access tracking\n\nInvalidates stale caches that lack the new MemberAccess entries with\nsynthetic \"this.field\" object keys added in #63. Also documents the\nchained access pattern in detection.md.",
          "timestamp": "2026-04-07T14:24:54+02:00",
          "tree_id": "72ed7a6c719003b4079177d4e29717c028e491d1",
          "url": "https://github.com/fallow-rs/fallow/commit/0dee83f4a5e0650a0dd0975f71672b7b2692c728"
        },
        "date": 1775564805570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578904,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15516,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "4ab51218db1aa28f1c020ff05429f6dec6d99731",
          "message": "chore: release v2.18.1",
          "timestamp": "2026-04-07T15:15:41+02:00",
          "tree_id": "721ba0103fbd3fdfb8dbfb9543554823e9791d22",
          "url": "https://github.com/fallow-rs/fallow/commit/4ab51218db1aa28f1c020ff05429f6dec6d99731"
        },
        "date": 1775567871324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3587200,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15526,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "4ddfaf43529cc55cded694b921f22cd0a02d0559",
          "message": "chore: release v2.18.2",
          "timestamp": "2026-04-07T16:06:14+02:00",
          "tree_id": "0baaec0ca3593326969f85c0ec1e3d40e338d33f",
          "url": "https://github.com/fallow-rs/fallow/commit/4ddfaf43529cc55cded694b921f22cd0a02d0559"
        },
        "date": 1775570861893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3575032,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15508,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mohamd514.m@gmail.com",
            "name": "Muhammad Swalha",
            "username": "swalha1999"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23b1d4c5c99022e6fe1c7084ae1f7b4ab5a6fa5c",
          "message": "fix: handle `export { ... }` specifier lists in fix command (#74)\n\nPreviously, `fallow fix` would strip `export ` from `export { A, B }`\nlines, leaving invalid `{ A, B }` syntax. Now it properly handles\nnamed export lists by removing individual specifiers or deleting the\nentire line when all specifiers are unused.\n\nHandles:\n- `export { A, B, C }` — remove individual unused specifiers\n- `export { A, B } from \"./mod\"` — same with re-exports\n- `export type { A, B }` — same for type exports\n- `export { A as B }` — aliased specifiers\n- Delete entire line when all specifiers are removed",
          "timestamp": "2026-04-07T16:17:44+02:00",
          "tree_id": "e9bcbaf5667d60820219813160ebd7be558a8070",
          "url": "https://github.com/fallow-rs/fallow/commit/23b1d4c5c99022e6fe1c7084ae1f7b4ab5a6fa5c"
        },
        "date": 1775571558520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3584504,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15524,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "618337cb6880ce422a212f6aa50c7773332a6c78",
          "message": "refactor(fix): robustify export type whitespace detection",
          "timestamp": "2026-04-07T16:19:06+02:00",
          "tree_id": "af56e304c467eb53ed9c4db5e56372422f9f9f12",
          "url": "https://github.com/fallow-rs/fallow/commit/618337cb6880ce422a212f6aa50c7773332a6c78"
        },
        "date": 1775571652444,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3574064,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15506,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "e24ccda4e623128111b49cd10b8260923b72d08e",
          "message": "chore: release v2.18.3",
          "timestamp": "2026-04-07T16:39:29+02:00",
          "tree_id": "2a5f4d1813696868d3cea7d3cc1fdfb510a0c1cd",
          "url": "https://github.com/fallow-rs/fallow/commit/e24ccda4e623128111b49cd10b8260923b72d08e"
        },
        "date": 1775572862703,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3590312,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15536,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "4d530b570a3be4f496d4f98fde3af8cf87631a58",
          "message": "feat: Angular template tracking for external HTML files\n\nParse @Component decorators to extract templateUrl/styleUrl references,\ncreating graph edges that prevent false unused-file reports. Scan Angular\nHTML templates for identifier references in interpolation ({{ }}),\nproperty bindings ([prop]), event bindings ((event)), two-way bindings\n([(ngModel)]), structural directives (*ngIf, *ngFor), Angular 17+\ncontrol flow (@if, @for, @switch), and pipes (| pipeName). Bridge\ntemplate-referenced identifiers to component class members to prevent\nfalse unused-class-member reports.\n\nCloses #73",
          "timestamp": "2026-04-07T17:41:41+02:00",
          "tree_id": "3a5ff13c1694ec313e245cab2577e9da1504bb9b",
          "url": "https://github.com/fallow-rs/fallow/commit/4d530b570a3be4f496d4f98fde3af8cf87631a58"
        },
        "date": 1775576619418,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3580840,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15520,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kamilthedev@gmail.com",
            "name": "KamilDev",
            "username": "KamilDev"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a67f9c5c617e9bc477da106c242bc7aea88de1d6",
          "message": "fix(extract): track class instances through factory initializers (#79)\n\nWhen a class is instantiated inside a factory function passed to a\nwrapper like React's useState, e.g. `const [svc] = useState(() => new\nMyService())`, the first array-destructured binding is now recognized\nas an instance of that class, so member accesses on it correctly count\nas usage.\n\nHandles arrow expression bodies, arrow block bodies, and function\nexpressions. Built-in constructors are filtered. Whole-object use\npropagation works through the factory pattern.\n\nCloses #79",
          "timestamp": "2026-04-07T19:31:02+02:00",
          "tree_id": "ebf820523170b03366fec0a0f75ff850dcb2723c",
          "url": "https://github.com/fallow-rs/fallow/commit/a67f9c5c617e9bc477da106c242bc7aea88de1d6"
        },
        "date": 1775583155855,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3585000,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15528,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "b16139982a6b342e09f7a6cad7710da59fb54798",
          "message": "chore: release v2.19.0",
          "timestamp": "2026-04-07T19:52:22+02:00",
          "tree_id": "7e71084079a9bf4c00c4ec7dab9e716ff608aa1d",
          "url": "https://github.com/fallow-rs/fallow/commit/b16139982a6b342e09f7a6cad7710da59fb54798"
        },
        "date": 1775584440999,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3589056,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15534,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "f192c52ab78007cf0a06cb9a90e80816caeee040",
          "message": "refactor: split large modules into focused submodules\n\nSplit graph/build.rs narrowing helpers into graph/narrowing.rs and\nanalyze/predicates.rs into predicates/{file,import,lifecycle}.rs for\nbetter cohesion. Zero API changes, all call sites unchanged.",
          "timestamp": "2026-04-07T19:54:23+02:00",
          "tree_id": "2e801a594aea5b7b4f298680d8cea6a3acc07a94",
          "url": "https://github.com/fallow-rs/fallow/commit/f192c52ab78007cf0a06cb9a90e80816caeee040"
        },
        "date": 1775584664359,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3582176,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15518,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "6f461b6f1968810f71cec0f17b70c32674d9d1f5",
          "message": "fix: skip duplicate-export for value/type declaration merging\n\nTypeScript allows a const and a type to share the same name via\ndeclaration merging. This is idiomatic with Zod (`export const Status =\nz.enum([...]); export type Status = z.infer<typeof Status>`), Prisma\ngenerated types, and class+interface patterns. These were falsely\nflagged as duplicate exports because the detection only compared names\nwithout considering is_type_only.\n\nNow tracks whether each export is type-only and skips groups where\nexports span both value and type namespaces, unless either namespace\nalone has cross-file duplicates.\n\nCloses #81",
          "timestamp": "2026-04-07T21:23:45+02:00",
          "tree_id": "c86bfbf3f3c176a32af7ddf46df428a6cd278ec0",
          "url": "https://github.com/fallow-rs/fallow/commit/6f461b6f1968810f71cec0f17b70c32674d9d1f5"
        },
        "date": 1775589921254,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3609952,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15558,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "518aea81f2bd3dbc6c1c983a7e8e7c05f9db7c0f",
          "message": "chore: release v2.19.1",
          "timestamp": "2026-04-07T21:26:54+02:00",
          "tree_id": "5c4b1769d0b51c144905f106e474f11fbd741c7f",
          "url": "https://github.com/fallow-rs/fallow/commit/518aea81f2bd3dbc6c1c983a7e8e7c05f9db7c0f"
        },
        "date": 1775590110600,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3586064,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15514,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "8004a7f34830d528770197a77f9ca4d5d10ec79c",
          "message": "test: improve coverage for plugins, specifier resolution, results, and duplicate detection\n\nAdd 105 tests across 7 files targeting the largest coverage gaps:\nplugins (tailwind, playwright, semantic_release, tsdown), resolve\nspecifier classification, results sort/serialization, and clone\ndetection edge cases. Overall coverage 90.2% to 90.6%.",
          "timestamp": "2026-04-07T21:49:48+02:00",
          "tree_id": "d44939c849f3687cfcdc87b10b6d9d32909283c0",
          "url": "https://github.com/fallow-rs/fallow/commit/8004a7f34830d528770197a77f9ca4d5d10ec79c"
        },
        "date": 1775591578875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3586376,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15520,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "e51d40440c4cc37febfd2be9c730f5b9a00484ac",
          "message": "test: improve coverage for svelte, shared templates, config format, gatsby, and churn\n\nAdd 153 tests across 5 files: svelte template parsing (42), shared\ntemplate utilities (64), config format detection (4), gatsby plugin\n(12), and git churn analysis (31). Overall coverage 90.6% to 90.9%.",
          "timestamp": "2026-04-07T22:57:08+02:00",
          "tree_id": "903669856c8e0d9d3141f4c5a8a9a92cb9f8a999",
          "url": "https://github.com/fallow-rs/fallow/commit/e51d40440c4cc37febfd2be9c730f5b9a00484ac"
        },
        "date": 1775595517475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578528,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15502,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "e1fed16c3ae8e3de70fd2bfcd922b8a81f1c60c2",
          "message": "chore: apply rustfmt to test files from coverage session",
          "timestamp": "2026-04-08T00:06:06+02:00",
          "tree_id": "ea28275757ea247e3224d1c86604347d0716bc0a",
          "url": "https://github.com/fallow-rs/fallow/commit/e1fed16c3ae8e3de70fd2bfcd922b8a81f1c60c2"
        },
        "date": 1775599657554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3591584,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15526,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "621225af0cf364089b9b1684068b9ec7a4c5f794",
          "message": "chore: release v2.19.2",
          "timestamp": "2026-04-08T00:08:56+02:00",
          "tree_id": "0b517965cd9c591cea4a3b699f166993359167f3",
          "url": "https://github.com/fallow-rs/fallow/commit/621225af0cf364089b9b1684068b9ec7a4c5f794"
        },
        "date": 1775599839261,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3582400,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15510,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "59cf13a3fb42a09d19145257a898c9c4a77d5a41",
          "message": "fix: skip create_resolver tests under Miri (statx unsupported)\n\nTests directly calling specifier::create_resolver() trigger oxc_resolver\nwhich uses the statx syscall via rustix. Miri doesn't support statx\nunder isolation. Added #[cfg_attr(miri, ignore)] to 5 tests.",
          "timestamp": "2026-04-08T08:34:51+02:00",
          "tree_id": "4ab6a9daf9a39db01d9de97156a1be8ab8592b01",
          "url": "https://github.com/fallow-rs/fallow/commit/59cf13a3fb42a09d19145257a898c9c4a77d5a41"
        },
        "date": 1775630182232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578816,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15502,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "bd459982c085b657be302888ba986b9abfe87f82",
          "message": "fix: match ignorePatterns against relative paths during file discovery\n\nGlob patterns in ignorePatterns (e.g. \"src/api/generated/**\") were matched\nagainst absolute walker paths, so only patterns with **/ prefix worked.\nStrip project root before matching, consistent with production_excludes.\n\nCloses #83",
          "timestamp": "2026-04-08T10:07:23+02:00",
          "tree_id": "00601be2891f0eb3bf70206a82e206dd580e4144",
          "url": "https://github.com/fallow-rs/fallow/commit/bd459982c085b657be302888ba986b9abfe87f82"
        },
        "date": 1775635747674,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578768,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15501,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "f7955c8067782e012efc811550f2a90faa15a897",
          "message": "chore: release v2.19.3",
          "timestamp": "2026-04-08T10:12:24+02:00",
          "tree_id": "cd5e8df572dc4a1229c03ff1e81f5e3360ebfa3a",
          "url": "https://github.com/fallow-rs/fallow/commit/f7955c8067782e012efc811550f2a90faa15a897"
        },
        "date": 1775636041094,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3602160,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15541,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "b8c47704ae3a5386d1536ba1f789e2928ac400c5",
          "message": "chore: raise benchmark alert thresholds to reduce false positives\n\nThe github-action-benchmark action compares against the single previous\nstored data point, which can be many commits old when path-filtered\nworkflows skip non-Rust changes. This causes false regression alerts\nfrom normal CI runner variance.\n\nChanges:\n- real-world benchmarks: 120% -> 200% (highest runner variance)\n- conformance: 115% -> 130% (upstream repos change between daily runs)\n- binary size: 115% -> 120% (deterministic but LTO varies slightly)\n- allocations: add explicit 120% (was using default 110%)\n- add max-items-in-chart: 100 to prevent unbounded gh-pages growth",
          "timestamp": "2026-04-08T10:31:35+02:00",
          "tree_id": "193d92dda1c35c0aa0768ac4a5845d6d07abcbe6",
          "url": "https://github.com/fallow-rs/fallow/commit/b8c47704ae3a5386d1536ba1f789e2928ac400c5"
        },
        "date": 1775637193729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3587768,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15519,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "36b0664949574c5474abc466075412ee3f344153",
          "message": "chore: release v2.20.0",
          "timestamp": "2026-04-08T11:09:12+02:00",
          "tree_id": "2450f9aba8357e8febc2ad47b395afa58270d904",
          "url": "https://github.com/fallow-rs/fallow/commit/36b0664949574c5474abc466075412ee3f344153"
        },
        "date": 1775639452067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3584760,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15511,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "3a8fc3d4f64f84e0e36f64e8bf39b5f1512b4243",
          "message": "feat: Istanbul match-rate stats, snapshot coverage_model, CI warning, --coverage-root\n\n- Add istanbul_matched/istanbul_total to HealthSummary JSON (only when\n  coverage_model is istanbul). Human output shows match rate in footer.\n- Persist coverage_model in VitalSignsSnapshot (schema v3). Trend output\n  warns when comparing snapshots with different CRAP models.\n- CI auto-detection note: when CI=true and coverage was auto-detected,\n  emit \"note:\" on stderr suggesting explicit --coverage.\n- New --coverage-root flag to rebase Istanbul file paths for cross-\n  environment matching (CI runner paths vs local checkout).",
          "timestamp": "2026-04-08T12:00:55+02:00",
          "tree_id": "bbc1f72ddd6b4f5202ebbbe8e41b996946946e5a",
          "url": "https://github.com/fallow-rs/fallow/commit/3a8fc3d4f64f84e0e36f64e8bf39b5f1512b4243"
        },
        "date": 1775642536316,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3589024,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15521,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "b49a818eb3832f3ead6d1f3be8ccc0fe65433042",
          "message": "chore: release v2.21.0",
          "timestamp": "2026-04-08T12:02:49+02:00",
          "tree_id": "656a38347e069cac00a29db44c32889fc05bfd3b",
          "url": "https://github.com/fallow-rs/fallow/commit/b49a818eb3832f3ead6d1f3be8ccc0fe65433042"
        },
        "date": 1775642668740,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3605168,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15549,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "raihassanraza10@gmail.com",
            "name": "Muhammad Hassan Raza",
            "username": "M-Hassan-Raza"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0932ae169e5d742f02b15a132739166eaa7c6211",
          "message": "feat: expand framework convention coverage across Astro, React Router, Remix, Gatsby, and VitePress (#84)\n\n* feat: expand Astro and Gatsby convention coverage\n\n* feat: cover React Router and Remix route contracts\n\n* feat: support VitePress docs scaffold conventions",
          "timestamp": "2026-04-08T13:00:53+02:00",
          "tree_id": "5f96cb8c151c87ec21a8357284cd87a74f5929b4",
          "url": "https://github.com/fallow-rs/fallow/commit/0932ae169e5d742f02b15a132739166eaa7c6211"
        },
        "date": 1775646136725,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3592608,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15529,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "6a048d82e55778e8061d02c8677030fc57021736",
          "message": "chore: release v2.22.0",
          "timestamp": "2026-04-08T13:06:01+02:00",
          "tree_id": "dcb4dcc239eaea6da3b090726617ffd532a44c39",
          "url": "https://github.com/fallow-rs/fallow/commit/6a048d82e55778e8061d02c8677030fc57021736"
        },
        "date": 1775646462124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3596064,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15529,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "1d41343f87cfa04ecfecc1e10dfce750e4ce7615",
          "message": "fix: Astro frontmatter CRLF handling and typos config for Istanbul abbreviation\n\nThe Astro frontmatter regex required LF after --- delimiters, failing\non Windows where git checks out CRLF. Add \\r? to handle both line\nendings. Also allow \"ist\" (Istanbul abbreviation) in typos config.",
          "timestamp": "2026-04-08T14:02:50+02:00",
          "tree_id": "cb75ae87c747ae988bed4a32d4ffa7ba705e1be7",
          "url": "https://github.com/fallow-rs/fallow/commit/1d41343f87cfa04ecfecc1e10dfce750e4ce7615"
        },
        "date": 1775649866030,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3604776,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15547,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "2685ac54e2ea21fbf93a5ecad2184cec5a7b30d1",
          "message": "chore: release v2.22.1",
          "timestamp": "2026-04-08T14:10:03+02:00",
          "tree_id": "590c7804526d23d4fb400e4463a92b4471efd7aa",
          "url": "https://github.com/fallow-rs/fallow/commit/2685ac54e2ea21fbf93a5ecad2184cec5a7b30d1"
        },
        "date": 1775650302046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3580912,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15509,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "c4af48aa7e21c218f70013786ae94f8a8a2677b4",
          "message": "fix: discover sub-packages from package.json exports map\n\nProjects like preact define sub-packages (compat/, hooks/, debug/) as\ndirectories with their own package.json, referenced via the root exports\nmap (e.g., \"./compat\": {...}). These were not discovered as entry points\nbecause they don't live in the hardcoded monorepo dirs (packages/, apps/).\n\nExtract directory prefixes from exports map keys and scan those for\npackage.json files with source/main/module fields. Reduces false\npositives on preact by 13 files and 19 exports (259 -> 227 issues).",
          "timestamp": "2026-04-08T14:25:10+02:00",
          "tree_id": "7903eea0e7a8d4202ab3bd244e16918bc34eef48",
          "url": "https://github.com/fallow-rs/fallow/commit/c4af48aa7e21c218f70013786ae94f8a8a2677b4"
        },
        "date": 1775651218266,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3581960,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15507,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "eb64ba27383c5af19232ce2f253e81fca8acc6e8",
          "message": "chore: reduce binary size by 16.6% (-1.38MB)\n\n- Switch ureq from rustls to native-tls (uses OS TLS stack)\n- Disable regex unicode features (keep only unicode-perl)\n- Remove ureq gzip feature (unused for remote config fetch)\n- Per-crate opt-level \"z\" for 10 non-hot-path dependencies",
          "timestamp": "2026-04-08T15:12:11+02:00",
          "tree_id": "148a9ae34619f6642b4a3ece9225ed3fbd9938e1",
          "url": "https://github.com/fallow-rs/fallow/commit/eb64ba27383c5af19232ce2f253e81fca8acc6e8"
        },
        "date": 1775654040549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3593472,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15529,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "0c84df62b979f7708151a1d69e4ff1e37d911831",
          "message": "fix: add vendored OpenSSL for Linux musl and cross-compilation targets\n\nThe native-tls switch requires OpenSSL on Linux. The vendored feature\ncompiles OpenSSL from source, ensuring musl and aarch64 cross-builds\nwork without system libssl-dev headers.",
          "timestamp": "2026-04-08T15:16:44+02:00",
          "tree_id": "3950dd0565e4a463826026d6955116fa6d02b941",
          "url": "https://github.com/fallow-rs/fallow/commit/0c84df62b979f7708151a1d69e4ff1e37d911831"
        },
        "date": 1775654365910,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3581672,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15507,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "76414e27990bfcd35dbfa0e7e452776fb9c99a66",
          "message": "chore: upgrade oxc deps from 0.123 to 0.124\n\nAligns with oxc_coverage_instrument's transitive deps, eliminating\nduplicate compilation of the entire oxc stack (parser, AST, semantic,\nvisitor, etc.) in both 0.123 and 0.124 versions.",
          "timestamp": "2026-04-08T15:29:34+02:00",
          "tree_id": "102bd4fbac25caf2c4c924f3817642f647552f75",
          "url": "https://github.com/fallow-rs/fallow/commit/76414e27990bfcd35dbfa0e7e452776fb9c99a66"
        },
        "date": 1775655075961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3588736,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15521,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "31e41fe5f963d8fa942d0254fa9f0e04e67e7206",
          "message": "fix: configure ureq to use native-tls provider explicitly\n\nureq 3.x defaults to Rustls even when the native-tls feature is enabled.\nThe provider must be set explicitly via TlsConfig::builder().provider().\nWithout this, HTTPS requests panic at runtime.",
          "timestamp": "2026-04-08T15:40:04+02:00",
          "tree_id": "8c2f283f733d5ecfa0baf80a57fa7c0b7d99586d",
          "url": "https://github.com/fallow-rs/fallow/commit/31e41fe5f963d8fa942d0254fa9f0e04e67e7206"
        },
        "date": 1775655709926,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3592424,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15531,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "f9028d8338e03253c682f0e79e7f5aaa5075c6d1",
          "message": "fix: add unicode-case feature to regex for case-insensitive HTML/SFC matching\n\nThe (?i) flag in HTML and SFC regex patterns requires the unicode-case\nfeature. Without it, patterns like (?si)<script\\b... panic at runtime\nwhen parsing HTML files.",
          "timestamp": "2026-04-08T15:45:33+02:00",
          "tree_id": "36a62acd7a25229fc766d4547e22f3bd48384a9b",
          "url": "https://github.com/fallow-rs/fallow/commit/f9028d8338e03253c682f0e79e7f5aaa5075c6d1"
        },
        "date": 1775656032510,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3580416,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15505,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "5aaafac267fe705b4d163bedfb32745d4992d3be",
          "message": "test: add regex compilation smoke tests for all file type parsers\n\nAll LazyLock<Regex> statics are lazily compiled on first use. If a regex\nfeature is missing, it panics at runtime only when that file type is\nactually parsed. This adds tests that parse a minimal file of each type\n(HTML, CSS, SCSS, Vue, Svelte, Astro, Angular) to force every regex to\ncompile, catching feature mismatches at test time instead of in production.",
          "timestamp": "2026-04-08T15:49:10+02:00",
          "tree_id": "c9d8b71d64b4be6f14fd9f118e7b0772e3a3082e",
          "url": "https://github.com/fallow-rs/fallow/commit/5aaafac267fe705b4d163bedfb32745d4992d3be"
        },
        "date": 1775656248004,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578480,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15501,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "ab9d4b2c2e083be3c82e91476e6af6a71cee5e09",
          "message": "test: add CLI flag collision detection and dead_code_ratio type exclusion tests\n\n- CLI debug_assert test catches flag name collisions across subcommands\n  (prevents repeat of --base alias collision incident)\n- 3 new dead_code_ratio tests verify type-only exports are excluded from\n  both numerator and denominator (prevents ratio inflation incident)",
          "timestamp": "2026-04-08T16:06:11+02:00",
          "tree_id": "4306d53555b2da901c84978f127af29abe0bdb6e",
          "url": "https://github.com/fallow-rs/fallow/commit/ab9d4b2c2e083be3c82e91476e6af6a71cee5e09"
        },
        "date": 1775657277541,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3593552,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15525,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "03c1a5982d039dade6572b8a47967f240a422737",
          "message": "test: add scoring tests for Istanbul lookup, CRAP formulas, and test refs\n\nAdd tests for IstanbulFileCoverage::lookup (exact, fuzzy, boundary),\ncompute_crap_scores_istanbul (empty, statistics), compute_crap_scores_binary\n(all branches), compute_crap_scores_estimated (mixed), and\nbuild_test_referenced_exports.",
          "timestamp": "2026-04-08T17:15:20+02:00",
          "tree_id": "faba04ace72d2e2fdf02fc3488fd203057b0a86e",
          "url": "https://github.com/fallow-rs/fallow/commit/03c1a5982d039dade6572b8a47967f240a422737"
        },
        "date": 1775662865142,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3583792,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15509,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "f81d31f7ff65399417710e14edf5e6d02977db19",
          "message": "fix: propagate star re-exports through entry point chains\n\nStar re-export propagation was demand-driven: only names explicitly\nimported by name from a barrel got reference credit. Types that were\nre-exported via `export *` from a barrel that was itself star-re-exported\nfrom an entry point got zero references and were falsely reported unused.\n\nExample: entry.ts -> export * from './types' -> types/index.ts ->\nexport * from '../components/AuthForm.vue'. AuthFormField was reported\nas an unused type even though it's part of the public API surface.\n\nNow, barrels that are star-re-exported directly from an entry point\nare treated the same as entry points for propagation purposes: all\nsource exports get reference credit.\n\nFixes 271 false positive unused types on Nuxt UI (376 -> 105).\nNo regressions on zod, preact, vue-core.",
          "timestamp": "2026-04-08T17:39:05+02:00",
          "tree_id": "3aae6ce3f9ae75dce5d64f69d2f3157e4e8133a2",
          "url": "https://github.com/fallow-rs/fallow/commit/f81d31f7ff65399417710e14edf5e6d02977db19"
        },
        "date": 1775663085081,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3595096,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15527,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "791d14e58fb3605ff37a7e091da66a05e3d640aa",
          "message": "chore: rustfmt formatting adjustments",
          "timestamp": "2026-04-08T17:59:11+02:00",
          "tree_id": "9e9a103ccd6420a50f7c1f85f81115afb4989b7f",
          "url": "https://github.com/fallow-rs/fallow/commit/791d14e58fb3605ff37a7e091da66a05e3d640aa"
        },
        "date": 1775664237868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3594256,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15533,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "27a6b7e2e35ba621b2a6645ec913f7abb53b1883",
          "message": "chore: release v2.22.2",
          "timestamp": "2026-04-08T18:05:57+02:00",
          "tree_id": "bd9e1f90bb411020f5cf4a3593b4b1f97c52e9e8",
          "url": "https://github.com/fallow-rs/fallow/commit/27a6b7e2e35ba621b2a6645ec913f7abb53b1883"
        },
        "date": 1775664478607,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3594544,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15533,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "d2ece8fb3e19e60236d5583439965d44c10d31aa",
          "message": "perf: precompute entry star re-export targets for O(1) lookup\n\nThe is_star_re_exported_from_entry_or_public check iterated over all\nmodules on every call inside the re-export propagation hot loop. For\nmonorepos with many modules this caused O(n * m * iterations) work.\n\nPrecompute the set of FileIds that are star-re-exported from entry\npoints once before the loop starts, then use O(1) HashSet lookup.\nAlso fix trailing whitespace from cargo fmt.",
          "timestamp": "2026-04-08T18:10:53+02:00",
          "tree_id": "cfbbb4529430c4b0f4f8b352db820c6ff1910490",
          "url": "https://github.com/fallow-rs/fallow/commit/d2ece8fb3e19e60236d5583439965d44c10d31aa"
        },
        "date": 1775664766170,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3585728,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15513,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "16f2401e423bd61ec1bc2ba5a456b0a3488df835",
          "message": "chore: release v2.22.3",
          "timestamp": "2026-04-08T18:55:00+02:00",
          "tree_id": "f87b1c6156ff8881e3ae0698c24e5ba7adf0eae8",
          "url": "https://github.com/fallow-rs/fallow/commit/16f2401e423bd61ec1bc2ba5a456b0a3488df835"
        },
        "date": 1775667418945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3595488,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15529,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "1ccf31f7d35cb8a6bbe17708b0edb029b84ac57e",
          "message": "fix: prune node_modules during workspace glob traversal\n\nThe glob crate's `**` expansion walks into node_modules before\nfiltering, which is catastrophic with pnpm's deep symlink trees\n(50,000+ entries for `packages/**/*` in starlight). This caused\nmonorepo analysis to hang indefinitely.\n\nReplace glob for patterns containing `**` with a manual recursive\nwalk that prunes node_modules and .git directories during traversal.\nNon-recursive patterns still use glob.\n\nStarlight monorepo: from infinite hang to 0.74s.",
          "timestamp": "2026-04-08T19:06:29+02:00",
          "tree_id": "0b8983bc94a3b04b483f595f893c0930460865ee",
          "url": "https://github.com/fallow-rs/fallow/commit/1ccf31f7d35cb8a6bbe17708b0edb029b84ac57e"
        },
        "date": 1775668077743,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3581384,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15507,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "241c0e4feb9d45dbf9fc16bfadca81c194400d69",
          "message": "fix: replace em dashes with colons in meta-framework warnings",
          "timestamp": "2026-04-08T19:25:22+02:00",
          "tree_id": "81db31e4099de755e65d1f5d08102098fb33fa16",
          "url": "https://github.com/fallow-rs/fallow/commit/241c0e4feb9d45dbf9fc16bfadca81c194400d69"
        },
        "date": 1775669208026,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3580024,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15503,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "483822c3a66df6337270ff7c18b22ffca618d518",
          "message": "test: add regression tests for extension priority, wildcard exports, and workspace glob\n\nThree conformance loop fixes shipped without dedicated tests. Add 8\nregression tests that fail without the fixes and pass with them:\n\n- .d.ts extension priority: 3 tests verifying .js resolves before\n  .d.ts when both exist, .ts before .d.ts, and fallback to .d.ts\n  when no runtime file exists\n\n- Wildcard subpath exports: 3 tests verifying expand_wildcard_entries\n  matches CSS files, handles empty dirs, and respects extensions\n\n- Workspace glob pruning: 2 tests verifying node_modules directories\n  (including deeply nested pnpm .pnpm/ trees) are pruned during\n  recursive workspace discovery",
          "timestamp": "2026-04-08T19:47:27+02:00",
          "tree_id": "6881d9431d68ad93adc2f3bcfcfcc975eee61940",
          "url": "https://github.com/fallow-rs/fallow/commit/483822c3a66df6337270ff7c18b22ffca618d518"
        },
        "date": 1775670537461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3592112,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15525,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "d711313df2cbc1b218d8b802f4ab48bd4967dc4e",
          "message": "feat: detect Nuxt module authoring convention in plugin\n\nNuxt modules (projects with `@nuxt/kit` dependency) place runtime code\nin `src/runtime/` and register it programmatically via `addComponentsDir`,\n`addImportsDir`, and `addPlugin`. The Nuxt plugin now:\n\n- Activates when `@nuxt/kit` is in dependencies (module authoring)\n- Treats `src/module.{ts,js}` as a config file and always-used entry\n- Adds entry patterns for `src/runtime/` subdirectories: components,\n  composables, plugins, utils, locale, types, and vue\n\nTested on Nuxt UI v3: false positive unused files dropped from 521 to\n226 (-295). Consumer Nuxt apps (e.g. nuxt-dashboard) unaffected (0 FPs).",
          "timestamp": "2026-04-08T21:50:39+02:00",
          "tree_id": "149815e277091b65e731dccd612e8770dcef557a",
          "url": "https://github.com/fallow-rs/fallow/commit/d711313df2cbc1b218d8b802f4ab48bd4967dc4e"
        },
        "date": 1775677948067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3566140,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15298,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "dcf68d2c48f5a8540aec8a95cd6c503d70b12111",
          "message": "chore: release v2.22.4",
          "timestamp": "2026-04-08T21:52:53+02:00",
          "tree_id": "a10b190ef4557081de2ff2e27822625cf9f74c1f",
          "url": "https://github.com/fallow-rs/fallow/commit/dcf68d2c48f5a8540aec8a95cd6c503d70b12111"
        },
        "date": 1775678114298,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578412,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15318,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "325a49dd3f4ec1769f33b4f0ba255f44a750a797",
          "message": "test: add regression test for star re-export many-consumers scenario\n\nCovers the pattern that was quadratic before the O(1) duplicate\ndetection fix: 20 consumers importing the same named export through\na star-re-exporting barrel. Verifies all references propagate without\nduplicates and that unused exports remain unreferenced.\n\nAlso fixes rustfmt formatting in plugin registry.",
          "timestamp": "2026-04-09T07:23:06+02:00",
          "tree_id": "d5700ed2663843b9af701f00e793277281b7253a",
          "url": "https://github.com/fallow-rs/fallow/commit/325a49dd3f4ec1769f33b4f0ba255f44a750a797"
        },
        "date": 1775712317279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3584612,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15332,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "8d64ddac69b197eb2ecd6de8b9ebd67b072b5bc6",
          "message": "test: add regression tests for typed template bindings in Vue and Svelte\n\nAdd unit tests (Vue v-for, v-slot, Svelte snippet) and full-pipeline\nintegration tests verifying that TypeScript type annotations on\ndestructuring patterns do not cause infinite recursion.\n\nAlso fix stale rustfmt drift in registry/mod.rs.",
          "timestamp": "2026-04-09T07:26:59+02:00",
          "tree_id": "4caf0f2e3e5da24df0421eed82bcf762f6e1aff0",
          "url": "https://github.com/fallow-rs/fallow/commit/8d64ddac69b197eb2ecd6de8b9ebd67b072b5bc6"
        },
        "date": 1775712506678,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3584980,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15328,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "dd5fb860aade25c942ea090e6ac83ae08555d0dc",
          "message": "chore: release v2.23.0",
          "timestamp": "2026-04-09T07:35:15+02:00",
          "tree_id": "58aaf0684101f2d09c4cc39665a55799d8e08644",
          "url": "https://github.com/fallow-rs/fallow/commit/dd5fb860aade25c942ea090e6ac83ae08555d0dc"
        },
        "date": 1775713006580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3570300,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15306,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "9ad9a68f42741179007c3ab8ffa119322c47f6d1",
          "message": "chore: release v2.23.1",
          "timestamp": "2026-04-09T08:02:18+02:00",
          "tree_id": "7ac7ff32c7489c3f6ab786ecce6fc0ec611ca053",
          "url": "https://github.com/fallow-rs/fallow/commit/9ad9a68f42741179007c3ab8ffa119322c47f6d1"
        },
        "date": 1775714627440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3594084,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15348,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "32750ac7d73d91ee04c5b13dd269b4f8867d60b7",
          "message": "fix: improve zero-match warning message and add to dupes/health baselines\n\n- Improve warning text: use accessible language, include the baseline\n  file path in the re-save hint\n- Add zero-match warning to dupes baseline loading (was check-only)\n- Add zero-match warning to health baseline loading (was check-only)",
          "timestamp": "2026-04-09T12:00:34+02:00",
          "tree_id": "a0f2c0cf31ad0424d0251ed55d30de1388efba4e",
          "url": "https://github.com/fallow-rs/fallow/commit/32750ac7d73d91ee04c5b13dd269b4f8867d60b7"
        },
        "date": 1775728931411,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3594268,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15346,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "cfec946206a390eb070a595974ebecbd1782f0a8",
          "message": "feat(health): add function size and parameter risk profiles to vital signs\n\nAdd quality metrics inspired by SIG's maintainability model to the\nexisting health command, integrated into the A-F grade system.\n\nNew extraction: param_count on FunctionComplexity (excludes TS `this`\nparameter, includes rest parameters). Cache version bumped 26->27.\n\nNew vital signs fields: unit_size_profile and unit_interfacing_profile\n(RiskProfile with low/medium/high/very_high risk bins), p95_fan_in,\nand coupling_high_pct. Snapshot schema bumped v3->v4 with backward\ncompat via serde defaults.\n\nNew health score penalties: unit_size (max 10 pts, activates when >5%\nof functions exceed 60 LOC) and coupling (max 5 pts, activates when\np95 fan-in exceeds 30). Conservatively calibrated: zero penalty on\nclean projects (zod, preact, vite all unaffected).\n\nHuman output: separate risk profile section between metrics and\nfindings. Trend output: schema version migration warning when\ncomparing against older snapshots. Deductions line includes new\npenalty categories.",
          "timestamp": "2026-04-09T12:31:14+02:00",
          "tree_id": "8cc2f522a56f1cd5732abceb03bd12000daa0f63",
          "url": "https://github.com/fallow-rs/fallow/commit/cfec946206a390eb070a595974ebecbd1782f0a8"
        },
        "date": 1775730850780,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3588196,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15340,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "0be2bee514517490f4f36207c8a2a0c26394a508",
          "message": "refactor: unify baseline key helpers and add baseline stats to combined JSON\n\n- Replace inline strip_prefix in clone_group_key, target_baseline_key,\n  and health_finding_key with the shared relative_path() helper\n- Add baseline match stats to combined-mode JSON output (was check-only)",
          "timestamp": "2026-04-09T12:34:21+02:00",
          "tree_id": "f8e8e24f80355ffb896cd94de98e0ca4bd9c38f4",
          "url": "https://github.com/fallow-rs/fallow/commit/0be2bee514517490f4f36207c8a2a0c26394a508"
        },
        "date": 1775730954271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3579980,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15326,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "bf934af1aff4b3283cfc349b1febaa9edb89031e",
          "message": "refactor(health): conditional rendering for risk profiles\n\nShow function size profile only when very_high_risk >= 3% (approaching\nthe 5% penalty threshold). Show parameter profile only when high or\nvery_high bins carry signal. Suppress both on healthy projects to\nreduce noise.\n\nRemove early return that suppressed profiles when trend was active,\nso users can see absolute distributions alongside trend deltas.",
          "timestamp": "2026-04-09T12:51:27+02:00",
          "tree_id": "4153bfea25b9efae928b7baeb56485ad3e87a009",
          "url": "https://github.com/fallow-rs/fallow/commit/bf934af1aff4b3283cfc349b1febaa9edb89031e"
        },
        "date": 1775731983610,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3582388,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15328,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "07cceb25b60c4159efa937970223121a99160b9d",
          "message": "chore: release v2.24.0",
          "timestamp": "2026-04-09T12:58:20+02:00",
          "tree_id": "f1d01dc3b83e57085f5907dd307ca9144447c68f",
          "url": "https://github.com/fallow-rs/fallow/commit/07cceb25b60c4159efa937970223121a99160b9d"
        },
        "date": 1775732403942,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3574644,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15312,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "f4ead2ec300d57e2e9bd224384c9896f371600ab",
          "message": "chore: apply rustfmt to expect attributes",
          "timestamp": "2026-04-09T13:19:14+02:00",
          "tree_id": "425d6f52c45a0e0441fc0c0fb67a19e7d1700242",
          "url": "https://github.com/fallow-rs/fallow/commit/f4ead2ec300d57e2e9bd224384c9896f371600ab"
        },
        "date": 1775733663238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3589820,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15338,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "0838d23ef6c3f18bbc8045620028575c58a91990",
          "message": "feat(health): add large function drill-down and duplication score penalty\n\nAdd two new health features:\n\n1. Large function drill-down: list functions exceeding 60 LOC in a new\n   \"Large functions\" section when the very-high-risk bin is >= 3%.\n   Includes file path, function name, line number, and LOC count.\n   Sorted by line count descending, truncated to 10 items.\n\n2. Duplication in health score: run duplication analysis when --score is\n   active and penalize when duplication exceeds 5%. Formula:\n   min(max(0, duplication_pct - 5) * 1.0, 10), max 10 points.\n   Updates deductions line, vital signs metrics, JSON output,\n   trend tracking, and snapshot persistence.\n\nBump SNAPSHOT_SCHEMA_VERSION to 5 for the formula change.",
          "timestamp": "2026-04-09T14:28:14+02:00",
          "tree_id": "20a55bea7e01cdd5cbdbed931a437208bc00cc4f",
          "url": "https://github.com/fallow-rs/fallow/commit/0838d23ef6c3f18bbc8045620028575c58a91990"
        },
        "date": 1775737791269,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3570588,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15306,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "96e417f252eee3517b2abfd24edc53d23577ecb7",
          "message": "refactor(health): add progressive disclosure hints and duplication timing\n\n- Add \"use --top N to see all N\" hint when large functions or complexity\n  findings are truncated, closing the progressive disclosure gap\n- Emit duplication analysis timing to stderr when --score runs it\n- Show health.ignore tip when duplication penalty >= 5 points",
          "timestamp": "2026-04-09T14:47:02+02:00",
          "tree_id": "d628877df2bb89ee495ccfce5f92166c1e696443",
          "url": "https://github.com/fallow-rs/fallow/commit/96e417f252eee3517b2abfd24edc53d23577ecb7"
        },
        "date": 1775738920091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3588564,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15336,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "12b9f61371290122751ba77e01b9032e3f0a217a",
          "message": "refactor(health): improve hint wording for duplication tip and --top\n\n- Add concrete examples to health.ignore tip (\"dist\", \"__generated__\")\n- Drop redundant second number from --top hint (\"use --top N to see all\")",
          "timestamp": "2026-04-09T14:54:33+02:00",
          "tree_id": "538c559ab87097a9fd78802228b7ead6ff4dcae4",
          "url": "https://github.com/fallow-rs/fallow/commit/12b9f61371290122751ba77e01b9032e3f0a217a"
        },
        "date": 1775739359718,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578516,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15320,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "5317e5460319655ef298c93482b0929f1e26f94e",
          "message": "fix(lsp): disable ANSI escape codes in tracing output\n\nLSP server is always spawned as a subprocess by editors. VS Code's\nOutput panel does not render ANSI sequences, causing raw escape codes\nto appear in the output. Matches the pattern already used by the MCP\nserver.\n\nCloses #89",
          "timestamp": "2026-04-09T15:12:21+02:00",
          "tree_id": "c2db61098754cfbc0481b6fe7a2b87d6cd53eec2",
          "url": "https://github.com/fallow-rs/fallow/commit/5317e5460319655ef298c93482b0929f1e26f94e"
        },
        "date": 1775740448625,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3583724,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15326,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "f4ecafbb1d969c38205d1f80878937e7a4ae0d93",
          "message": "chore: release v2.25.0",
          "timestamp": "2026-04-09T15:14:56+02:00",
          "tree_id": "46e68d99822a32f1c8d6725517c1c7666eef7f1d",
          "url": "https://github.com/fallow-rs/fallow/commit/f4ecafbb1d969c38205d1f80878937e7a4ae0d93"
        },
        "date": 1775740628627,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3585084,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15330,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "1d3561fdf9eb394147199f8c7a9ef153a9941a62",
          "message": "refactor: deduplicate test helpers and add Default derives for test structs\n\n- Extract strip_ansi/plain to shared pub(super) in report/human/mod.rs,\n  remove 5 duplicate copies across check, health, dupes, cross_ref, perf\n- Add Default derive to VitalSigns and VitalSignsCounts, simplify 13\n  test constructions in vital_signs.rs\n- Simplify FallowConfig test constructions across walk.rs, parsing.rs,\n  unused_exports.rs, boundary.rs, unused_deps_tests using ..Default::default()\n\nDuplication: 10.5% -> 9.9% (below 3-star SIG threshold of 10%)",
          "timestamp": "2026-04-09T15:24:32+02:00",
          "tree_id": "3b213e8b8e42b87e8d4da10f48ca0567368ac52d",
          "url": "https://github.com/fallow-rs/fallow/commit/1d3561fdf9eb394147199f8c7a9ef153a9941a62"
        },
        "date": 1775741171192,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3584404,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15328,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "7da37c2fb364cef02693babdfa6b1c71aa1e829d",
          "message": "fix(deps): update oxc_coverage_instrument to 0.2.11\n\nFixes parsing of coverage-final.json files containing null values or\nmissing fields in hit count maps and position objects, as produced by\nsome Istanbul-compatible coverage tools.",
          "timestamp": "2026-04-09T15:33:33+02:00",
          "tree_id": "91bae0515b03999959a05b8739d8d177ffa4e806",
          "url": "https://github.com/fallow-rs/fallow/commit/7da37c2fb364cef02693babdfa6b1c71aa1e829d"
        },
        "date": 1775741707290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3574172,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15314,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "ba62bf4078fc41ca273ec67ff923b6bbac8d0bb2",
          "message": "fix(lsp): deduplicate diagnostics in multi-root workspaces\n\nbuild_diagnostics was called once per workspace root from the merged\nresults, producing N copies of every diagnostic. Call it once with the\nworkspace root instead, since each result item already carries its own\nfile path.\n\nCloses #90",
          "timestamp": "2026-04-09T15:39:21+02:00",
          "tree_id": "b7953944fefeac93c130c1e053708323819b4cf3",
          "url": "https://github.com/fallow-rs/fallow/commit/ba62bf4078fc41ca273ec67ff923b6bbac8d0bb2"
        },
        "date": 1775742175791,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3579588,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15324,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "64d0f84d1ab4e73da2a4ec208b144886f7eb986f",
          "message": "chore: release v2.25.1",
          "timestamp": "2026-04-09T15:42:51+02:00",
          "tree_id": "5c89fc1d209ad45bed091d2b00d2ebebc06d58f2",
          "url": "https://github.com/fallow-rs/fallow/commit/64d0f84d1ab4e73da2a4ec208b144886f7eb986f"
        },
        "date": 1775742287590,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3588300,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15342,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "263d76905e430c01585b4f6d567ba19623a1feb4",
          "message": "fix(lsp): merge test_only_dependencies, boundary_violations, and export_usages across workspace roots",
          "timestamp": "2026-04-09T15:54:42+02:00",
          "tree_id": "27b2d47ffb22527722341821c34dac867433776c",
          "url": "https://github.com/fallow-rs/fallow/commit/263d76905e430c01585b4f6d567ba19623a1feb4"
        },
        "date": 1775742975942,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3568652,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15302,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "raihassanraza10@gmail.com",
            "name": "Muhammad Hassan Raza",
            "username": "M-Hassan-Raza"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f98c70a6df62ee8eee519970de89523d8fbb1a9",
          "message": "feat: add Expo Router and TanStack Router convention coverage (#88)\n\nfeat: add Expo Router and TanStack Router convention coverage\n\nAdds ExpoRouterPlugin (85th built-in plugin) with configurable route root from app.json, special file exports (+api, +middleware, +html, +not-found, +native-intent), and API route HTTP method exports.\n\nEnhances TanstackRouterPlugin with tsr.config.json parsing for custom route directories, route file prefix/ignore patterns, lazy route export separation, and replace semantics for config-driven overrides.\n\nIntroduces PathRule with glob/regex/segment-regex exclusions and CompiledPathRule for strict entry-point and used-export matching. Refactors define_plugin! macro to remove custom resolve_config body variant in favor of explicit Plugin trait impls.",
          "timestamp": "2026-04-09T14:25:19Z",
          "tree_id": "ac511e0951e2d1f10f162426cce303a2eb694a0b",
          "url": "https://github.com/fallow-rs/fallow/commit/9f98c70a6df62ee8eee519970de89523d8fbb1a9"
        },
        "date": 1775744825460,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3581540,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15328,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "4bfd1d3885e98aaf3b5ca288bb7fe030d683190a",
          "message": "chore: release v2.26.0",
          "timestamp": "2026-04-09T18:00:19+02:00",
          "tree_id": "2ef95295b829d817bb729f9a0e2b2366f7b818fc",
          "url": "https://github.com/fallow-rs/fallow/commit/4bfd1d3885e98aaf3b5ca288bb7fe030d683190a"
        },
        "date": 1775750524874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3587612,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15334,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "3b3f1484f58df1a8a5d03a519e5b45dbcb119c89",
          "message": "perf(health): add churn disk cache, parallelize git log, and add --performance timing\n\n- Cache git churn data in .fallow/churn.bin keyed by HEAD SHA + since string.\n  Cache hit skips the git log shell-out entirely. Atomic write via temp+rename.\n  Prints dim note on cold miss >500ms. Respects --no-cache.\n\n- Run compute_filtered_file_scores and fetch_churn_data in parallel via\n  std::thread::scope when both are needed. On cold cache this overlaps the\n  git log (~1-5s) with the dead-code analysis for file scoring (~0.5s).\n\n- Extend --performance to the health command with a pipeline timing table\n  showing config, discover, parse, complexity, file scores, git churn\n  (with cache hit/miss), hotspots, duplication, targets, and total.\n  Works in both human and JSON modes.",
          "timestamp": "2026-04-09T18:37:58+02:00",
          "tree_id": "b1ccd5071a86f3d564aeec7243d79d54e2cba700",
          "url": "https://github.com/fallow-rs/fallow/commit/3b3f1484f58df1a8a5d03a519e5b45dbcb119c89"
        },
        "date": 1775752786027,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3592740,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15344,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "a2fa03c7df0e1a19d4eb88c4edf3c9e579fd023c",
          "message": "chore: release v2.26.1",
          "timestamp": "2026-04-09T18:39:47+02:00",
          "tree_id": "0ef80113c8f7593f8057c16ed4df215e9913e9e2",
          "url": "https://github.com/fallow-rs/fallow/commit/a2fa03c7df0e1a19d4eb88c4edf3c9e579fd023c"
        },
        "date": 1775752896777,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3587820,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15338,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "8157a284d61eb455f3b8be3a23a6b13b02241138",
          "message": "refactor(extract): deduplicate SFC template tag parser\n\nExtract parse_tag_attrs() to shared.rs, replacing the near-identical\nparse_tag (vue.rs) and parse_markup_tag (svelte.rs) implementations.\nThe shared parser accepts a braced_values flag for Svelte's {expr}\nattribute syntax. Also consolidates the duplicated HTML_COMMENT_RE\nregex into shared.rs.",
          "timestamp": "2026-04-10T09:42:54+02:00",
          "tree_id": "f5497442876bf6dafa376f6d0b804690fe210a11",
          "url": "https://github.com/fallow-rs/fallow/commit/8157a284d61eb455f3b8be3a23a6b13b02241138"
        },
        "date": 1775807563418,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3568380,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15302,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "5cfa7cbc5fd0d324b1c144167b929bb3136fd627",
          "message": "chore: address final review housekeeping items\n\n- Fix stale doc comment on extract_flags (remove \"need_flags\" reference)\n- Update .claude/rules/mcp-server.md tool count 9 -> 10, add feature_flags\n- Add schema_version comment referencing report/json.rs source of truth",
          "timestamp": "2026-04-10T12:02:43+02:00",
          "tree_id": "c4007e3f3b12f156ed3cf1c35be6fd8be73b9c05",
          "url": "https://github.com/fallow-rs/fallow/commit/5cfa7cbc5fd0d324b1c144167b929bb3136fd627"
        },
        "date": 1775815548547,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3575988,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15302,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 521517,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "e7992f9104a67f471bd526414e7d703f1fd1978e",
          "message": "fix: wire dead code cross-reference into fallow flags command\n\nThe correlate_with_dead_code() function existed but was never called\nfrom the flags command. Now runs full dead code analysis via\nanalyze_with_parse_result() (reusing pre-parsed modules) and populates\nguarded_dead_exports on each flag. Output shows \"Flags guarding dead\ncode\" section with line counts and dead export names.",
          "timestamp": "2026-04-10T12:39:31+02:00",
          "tree_id": "58fc1c68419aeba1690141437de80046e3e6c6a7",
          "url": "https://github.com/fallow-rs/fallow/commit/e7992f9104a67f471bd526414e7d703f1fd1978e"
        },
        "date": 1775817665231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3574252,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15300,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 521517,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "563824ea2e5219c2b0590d3ef5d6694d55f79b35",
          "message": "feat: add SARIF, Markdown, and CodeClimate format support for flags\n\nAll 6 output formats now supported by fallow flags:\n- SARIF 2.1.0 with rule definition and dead code cross-reference in messages\n- Markdown with cross-reference table first, then inventory table\n- CodeClimate (GitLab Code Quality) with FNV-1a fingerprints\n- Badge format emits a warning (health-only)",
          "timestamp": "2026-04-10T12:51:54+02:00",
          "tree_id": "98e50c1a7b900eefa49b28e198d5cde40aa02b91",
          "url": "https://github.com/fallow-rs/fallow/commit/563824ea2e5219c2b0590d3ef5d6694d55f79b35"
        },
        "date": 1775818414166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3593364,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15326,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 521517,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "ff02943f8825e764a78af080c36f9d72965426f3",
          "message": "fix: address format reviewer concerns for flags output\n\n- SARIF: badge format now returns exit code 2 (was silently returning 0)\n- SARIF/CodeClimate: use normalize_uri() for bracket-safe paths (Next.js)\n- Markdown: add summary heading, backtick escaping for paths/names\n- Markdown: dead exports shown in backticks for consistency",
          "timestamp": "2026-04-10T12:58:19+02:00",
          "tree_id": "885339c473fae0da38bea5d8fe8e14aa0bd0ac53",
          "url": "https://github.com/fallow-rs/fallow/commit/ff02943f8825e764a78af080c36f9d72965426f3"
        },
        "date": 1775818790039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3583532,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15316,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 521517,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "raihassanraza10@gmail.com",
            "name": "Muhammad Hassan Raza",
            "username": "M-Hassan-Raza"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c24a840f5b964fd8cca7bcc69d276b6e291da21",
          "message": "Improve Docusaurus convention coverage (#91)\n\n* refactor(core): share config parser AST helpers\n\n* feat(core): harden docusaurus convention coverage",
          "timestamp": "2026-04-10T13:20:23+02:00",
          "tree_id": "f337a9806aa317c7bac202b7cbd7705e747c0987",
          "url": "https://github.com/fallow-rs/fallow/commit/5c24a840f5b964fd8cca7bcc69d276b6e291da21"
        },
        "date": 1775820110071,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3588172,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15324,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 521517,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "raihassanraza10@gmail.com",
            "name": "Muhammad Hassan Raza",
            "username": "M-Hassan-Raza"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "af1c1a3ee1ac7de5ae1d14a3c19904e34cd9a6c2",
          "message": "feat(core): improve Docusaurus convention coverage (#91)",
          "timestamp": "2026-04-10T13:23:27+02:00",
          "tree_id": "f337a9806aa317c7bac202b7cbd7705e747c0987",
          "url": "https://github.com/fallow-rs/fallow/commit/af1c1a3ee1ac7de5ae1d14a3c19904e34cd9a6c2"
        },
        "date": 1775820925976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3599756,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15340,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 521517,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "970c16c2bbad2c20a38d3bde6eeb13a2074ab1e1",
          "message": "chore: release v2.27.0",
          "timestamp": "2026-04-10T13:47:36+02:00",
          "tree_id": "bdebe461be739022a7722500fa8ef476d182c4b9",
          "url": "https://github.com/fallow-rs/fallow/commit/970c16c2bbad2c20a38d3bde6eeb13a2074ab1e1"
        },
        "date": 1775821871891,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3594932,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15334,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 521517,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "33868b8595ff88595172049b8e0a7585115e2e62",
          "message": "fix(extract): Angular @defer, @let, @else if, and outputFromObservable support (#92, #93, #94)\n\nAdd missing Angular template syntax and signal API recognition to\neliminate false positive unused-class-member reports:\n\n- @defer (when expr) / (prefetch when) / (hydrate when) conditions\n- @let name = expr; template-local variables with scope tracking\n- @else if (condition) expression scanning\n- outputFromObservable() as Angular signal API in ANGULAR_SIGNAL_APIS\n\nBump CACHE_VERSION 28->29 for changed extraction semantics.",
          "timestamp": "2026-04-10T19:29:38+02:00",
          "tree_id": "911f33ad29bb98b0a36e953ad56fdb31037799c6",
          "url": "https://github.com/fallow-rs/fallow/commit/33868b8595ff88595172049b8e0a7585115e2e62"
        },
        "date": 1775842272039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3598820,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15346,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 521517,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "460afaee1c2411dbf289ae6dbec4fd95d0cd9bff",
          "message": "test(extract): harden Angular @defer nested parens and @else if word boundary\n\nAdd word boundary check for @else if detection to prevent matching\nidentifiers starting with \"if\" (e.g. @else iffy). Add test for\n@defer (on timer(1s)) confirming nested parentheses in triggers\ndon't break the scanner.",
          "timestamp": "2026-04-10T19:44:38+02:00",
          "tree_id": "efad6a8704b4dbc5f6bb99fd87094571a8581020",
          "url": "https://github.com/fallow-rs/fallow/commit/460afaee1c2411dbf289ae6dbec4fd95d0cd9bff"
        },
        "date": 1775843163115,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3575788,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15300,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 521517,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "3531f8e369452c04843ca6f56467e2fa4c2753c2",
          "message": "chore: release v2.27.1",
          "timestamp": "2026-04-10T19:50:06+02:00",
          "tree_id": "3b4d4381b4e477ccbeef204982fe33fd0293f106",
          "url": "https://github.com/fallow-rs/fallow/commit/3531f8e369452c04843ca6f56467e2fa4c2753c2"
        },
        "date": 1775843509547,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3581780,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15310,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 521517,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "a85dd288b75720ebda86b2e2b47d11eec859aa9c",
          "message": "fix: SCSS partial resolution and inheritance-aware class member detection (#95, #96)\n\nSCSS partial files prefixed with `_` now resolve when imported via `@use`\nor `@import` without the underscore prefix, eliminating cascading false\npositives across unresolved imports, unlisted dependencies, and unused\nfiles. Class members accessed via `this.*` in parent classes now propagate\nto child class overrides through an inheritance map built from `extends`\nclauses, reducing unused class member false positives from 7 to 1 in\ntypical polymorphic dispatch patterns.",
          "timestamp": "2026-04-10T19:57:39+02:00",
          "tree_id": "383a7a250dbbc2c170ca06d2b80898fae00a215b",
          "url": "https://github.com/fallow-rs/fallow/commit/a85dd288b75720ebda86b2e2b47d11eec859aa9c"
        },
        "date": 1775844114570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3612320,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15323,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "1b76bfa33b0fbe3f992790c709bddc2782219c40",
          "message": "chore: release v2.27.2",
          "timestamp": "2026-04-10T20:12:26+02:00",
          "tree_id": "0f63c8a8d53327d3eca3918f8a392abf633203be",
          "url": "https://github.com/fallow-rs/fallow/commit/1b76bfa33b0fbe3f992790c709bddc2782219c40"
        },
        "date": 1775845018441,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3605760,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15315,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "824884c7f9fd6825445b0bb90059df4b0de8b6e7",
          "message": "fix: harden SCSS index convention and default export class extends\n\nAdd SCSS directory index resolution: `@use 'components'` now resolves to\n`components/_index.scss` or `components/index.scss`. Add test coverage\nfor `export default class extends Foo` inheritance pattern.",
          "timestamp": "2026-04-10T20:40:38+02:00",
          "tree_id": "773e9796a59368ef19bd17f7d7b898cfaf9fec9f",
          "url": "https://github.com/fallow-rs/fallow/commit/824884c7f9fd6825445b0bb90059df4b0de8b6e7"
        },
        "date": 1775846656581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3602088,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15309,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "e629a4a0100da2643634b270fe621883d59d365b",
          "message": "fix: CSS scoped package imports and HTML workspace root-relative paths\n\nTwo false-positive fixes discovered by running fallow on fallow-cloud:\n\n1. CSS scoped npm package imports (e.g., @fontsource/monaspace-neon/400.css,\n   @fallow/design-system/styles.css) were being normalized with a leading ./,\n   causing them to be reported as unresolved instead of resolved from\n   node_modules. normalize_css_import_path() now keeps scoped specifiers\n   (@scope/pkg) bare regardless of file extension.\n\n2. HTML root-relative paths (<script src=\"/src/main.tsx\">) in workspace\n   members resolved against the monorepo root instead of the workspace member\n   root. site/index.html referencing /src/main.tsx was looking for\n   <root>/src/main.tsx instead of site/src/main.tsx. Now resolves from the\n   HTML file's parent directory first, with fallback to project root for\n   the public/index.html case.\n\nCACHE_VERSION bumped 29 -> 30 because the CSS change alters import specifiers\nstored at extraction time.",
          "timestamp": "2026-04-10T21:26:49+02:00",
          "tree_id": "7649e2e285a430448e4522b3b95222053e7a9177",
          "url": "https://github.com/fallow-rs/fallow/commit/e629a4a0100da2643634b270fe621883d59d365b"
        },
        "date": 1775849428858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3626824,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15349,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "254e25fc89d89d296e9d1c14b9775588d94a58f0",
          "message": "chore: release v2.27.3",
          "timestamp": "2026-04-10T21:31:19+02:00",
          "tree_id": "48d11b49cf0142881ac662bdeaf05f5dc0bfef0e",
          "url": "https://github.com/fallow-rs/fallow/commit/254e25fc89d89d296e9d1c14b9775588d94a58f0"
        },
        "date": 1775849730464,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3602088,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15309,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "7445a42021e50bca8cb498929dbdca192023a1ef",
          "message": "chore: shrink VS Code extension package and add CSS path alias tests\n\n- .vscodeignore now excludes pnpm-lock.yaml, .fallow/, .test-dist/,\n  test/, vitest.config.mts, tsconfig.test.json, and .fallowrc.json.\n  Reduces the VSIX from 192KB to 100KB (48% smaller).\n- Add regression tests for CSS path aliases (@/components/Button.css)\n  sharing the @-prefix with scoped packages. Path aliases must stay\n  bare so the resolver's alias path handles them.",
          "timestamp": "2026-04-10T22:26:29+02:00",
          "tree_id": "916a746b341c25a8e02c3aa4935c7446cd630dc1",
          "url": "https://github.com/fallow-rs/fallow/commit/7445a42021e50bca8cb498929dbdca192023a1ef"
        },
        "date": 1775853021426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3617360,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15335,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "1cb2d98e43d3068fbb0bd2dd5ab168c27a4540be",
          "message": "fix(graph): fallback resolution when sibling tsconfig has broken extends chain (#97)\n\nA solution-style tsconfig.json with references to a sibling tsconfig that has a\nbroken extends chain (e.g., extends pointing to a non-existent file) caused\noxc_resolver::Resolver::resolve_file to fail for every file in the workspace,\nincluding files covered by a healthy sibling tsconfig. All relative imports were\nreported as unresolved and the failure was silent.\n\nWhen resolve_file returns a tsconfig-loading error (TsconfigNotFound,\nTsconfigCircularExtend, TsconfigSelfReference, Json, IOError), retry with\nresolver.resolve(dir, specifier), which passes None for tsconfig in Auto mode and\nskips discovery entirely. Relative, absolute, and bare imports then resolve\nnormally; path aliases in the broken workspace remain unresolvable (they were\nalready broken in tsc).\n\nA shared Mutex<FxHashSet<String>> on ResolveContext dedupes tracing::warn! to one\nmessage per unique broken chain, surfacing the failure to users without log spam.\n\nAdds unit tests for the error classifier plus an integration fixture\n(tests/fixtures/tsconfig-broken-extends) that reproduces the bug verbatim.",
          "timestamp": "2026-04-10T22:34:06+02:00",
          "tree_id": "ac86c3b5b4c72bf41cfa3241e3fd65f7e64cc74e",
          "url": "https://github.com/fallow-rs/fallow/commit/1cb2d98e43d3068fbb0bd2dd5ab168c27a4540be"
        },
        "date": 1775853425981,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3590304,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15291,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "8b362e65f153b57cf96dc2efe1b99bcd7fcf33db",
          "message": "chore: release v2.27.4",
          "timestamp": "2026-04-10T22:38:30+02:00",
          "tree_id": "8040373a8f7c63d4c343e7d8105b2f14705bad0c",
          "url": "https://github.com/fallow-rs/fallow/commit/8b362e65f153b57cf96dc2efe1b99bcd7fcf33db"
        },
        "date": 1775853613531,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3600152,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15305,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "e05ebda310edacdc7a2946a9f9beb459e8500286",
          "message": "fix: detect import-then-reexport pattern as re-export\n\nThe pattern `import { X } from './a'; export { X };` is semantically\nequivalent to `export { X } from './a';` but the visitor was treating\nthe bottom export as a NEW local declaration, causing two false positive\nclasses:\n\n1. Duplicate-export findings when the same name was also exported from\n   the original source file (because both files appeared to declare X\n   locally).\n2. Unused-export findings at the export site, since the re-export chain\n   propagation only follows ReExportInfo edges and never reached the\n   misclassified ExportInfo entries.\n\nThe visitor now scans `self.imports` for a matching local binding when\nprocessing `export { X }` without a `from` clause. If found, it emits a\nReExportInfo pointing back to the original source instead of an\nExportInfo. Handles renames on either side, default imports\n(`imported_name: \"default\"`), and mixed local + re-export statements.\nOrder-sensitive: relies on imports preceding exports in source order\n(standard practice).\n\nCACHE_VERSION bumped 30 -> 31 because extraction output now differs for\nfiles using this pattern.\n\nEliminated 4 duplicate-export false positives in fallow-cloud's\n`packages/beacon/src/transport.ts` (a real-world Vite + Bun monorepo).\n9 new unit tests cover the basic case, type-only variants, renames on\nboth sides, default imports, mixed statements, namespace edge case, and\nthe regression guard for pure local exports.",
          "timestamp": "2026-04-10T23:20:03+02:00",
          "tree_id": "a2a3def3c63ff85b33f596e9fdf1ca81d3f3528a",
          "url": "https://github.com/fallow-rs/fallow/commit/e05ebda310edacdc7a2946a9f9beb459e8500286"
        },
        "date": 1775856256711,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3613504,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15331,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "0cbd99146c6eb610aa7b5eafab3bb7c328280691",
          "message": "fix: report accurate line numbers for unused re-exports\n\nRe-exports synthesized from ReExportInfo into ExportSymbol entries were\nreported with line :1 because the synthesis used Span::new(0, 0) as a\nsentinel for 'no source location'. This applied even to import-then-\nreexport patterns and `export { X } from './a'` statements that DO have\nreal source spans.\n\nPlumb a span field from ReExportInfo (set by the visitor) through\nReExportEdge into the synthesized ExportSymbol so unused-export reporting\ncan compute the correct line via byte_offset_to_line_col. The (0, 0)\nsentinel is now reserved for graph-internal synthesis (star re-export\nchain propagation, namespace narrowing).\n\nThe unused-export detector previously inferred is_re_export from the\nspan(0, 0) sentinel. With real spans propagating through, the detection\nnow looks up the export name in the module's re_exports list instead,\nwhich is the semantic check.\n\nCACHE_VERSION bumped 31 -> 32 because CachedReExport gained span_start\nand span_end fields. ReExportEdge size assertion bumped 56 -> 64 bytes\nto account for the new span field.",
          "timestamp": "2026-04-10T23:35:09+02:00",
          "tree_id": "ac482df32ec0cc4e16334add492c162d5a554c46",
          "url": "https://github.com/fallow-rs/fallow/commit/0cbd99146c6eb610aa7b5eafab3bb7c328280691"
        },
        "date": 1775857129845,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3600152,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15305,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "7d788037ade9caea0daaff0a8e8a183809c8e703",
          "message": "perf: O(N) re-export name lookup in unused-export detection\n\nThe is_re_export check introduced in the previous commit used\n`module.re_exports.iter().any(...)` per export specifier. For barrel\nfiles with hundreds of synthesized re-export entries, this made the\nper-module work O(N²) (N exports × M re_exports, where N ≈ M for\nbarrels).\n\nLift a FxHashSet<&str> of re-exported names out of the inner loop so\nthe lookup becomes O(1) per export, making total work O(N + M). vue-core\nhas barrel files with 86+ re-exports per file where this matters most.",
          "timestamp": "2026-04-10T23:45:17+02:00",
          "tree_id": "875f1f598d83ef3ad557ec86d9e2f600b4f1e5e6",
          "url": "https://github.com/fallow-rs/fallow/commit/7d788037ade9caea0daaff0a8e8a183809c8e703"
        },
        "date": 1775857789869,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3619280,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15335,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "da5f29945923d1ffb0920d62df138b33e2f1a4d3",
          "message": "fix(extract): normalize Angular templateUrl/styleUrl without ./ prefix (#100)\n\nAngular's @Component decorator resolves both 'app.component.html' and\n'./app.component.html' relative to the component file. Fallow was\nemitting the raw specifier as an ImportInfo source, so downstream\nresolution classified bare filenames as npm packages and reported them\nas unlisted dependencies.\n\nAdd a normalize_angular_asset_url helper that prepends './' to bare\nfilenames while leaving already-relative, absolute, URL, and scoped\npackage paths untouched. Mirrors the existing CSS import normalization\npattern. Bump CACHE_VERSION so warm caches don't keep the stale bare\nspecifier.\n\nFixes #99",
          "timestamp": "2026-04-10T23:57:22+02:00",
          "tree_id": "e99329854b2c6ba7e8998ca052fee39e37c361a2",
          "url": "https://github.com/fallow-rs/fallow/commit/da5f29945923d1ffb0920d62df138b33e2f1a4d3"
        },
        "date": 1775858333856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3601120,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15307,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "47f8ac37e3296d612bcb5eede0f154d44f02cdb1",
          "message": "chore: release v2.27.5",
          "timestamp": "2026-04-11T00:02:00+02:00",
          "tree_id": "fd8478487500ab9bd6502acf15b0e1dca5cb3e82",
          "url": "https://github.com/fallow-rs/fallow/commit/47f8ac37e3296d612bcb5eede0f154d44f02cdb1"
        },
        "date": 1775858817005,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3609816,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15321,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "413f950df3ce238d1b831d6118714473f6e553dc",
          "message": "fix(extract): normalize bare HTML/SFC asset specifiers without ./ prefix (#101)\n\nHTML `<script src>`, `<link rel=\"stylesheet\" href>`, and\n`<link rel=\"modulepreload\" href>` as well as Vue/Svelte `<script src>`\nwere emitting their raw user-authored strings as `ImportInfo.source`.\nBare filenames like `app.js`, `styles.css`, or `logic.ts` were then\nclassified as npm package specifiers and reported as unlisted\ndependencies. Browsers, Vite, Parcel, and Vue/Svelte tooling all\nresolve these references relative to the document or component file\nwhether or not they start with `./`.\n\nGeneralize the Angular templateUrl normalizer (from the #99 fix) into\na shared `crate::asset_url::normalize_asset_url` helper and call it\nfrom all five emission sites. The helper now also guards `data:` URIs\ndefensively so it's safe to call from sites that don't pre-filter via\n`is_remote_url`. Bump `CACHE_VERSION` 33 -> 34 so warm caches don't\nkeep stale bare specifiers.\n\nFound during the post-ship audit for #99.",
          "timestamp": "2026-04-11T00:24:28+02:00",
          "tree_id": "917011212a506748384b827b408a68ec2c648a9a",
          "url": "https://github.com/fallow-rs/fallow/commit/413f950df3ce238d1b831d6118714473f6e553dc"
        },
        "date": 1775859958138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3611768,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15329,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 540717,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
      }
    ]
  }
}