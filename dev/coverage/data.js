window.BENCHMARK_DATA = {
  "lastUpdate": 1779284704869,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Fallow Coverage": [
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
        "date": 1775820906636,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "1c456632db6209fcfa460ba128944b006c1f5b03",
          "message": "chore: ignore symlinks for shared gitignored directories\n\nPatterns with trailing slash only match directories, not symlinks.\nAdding patterns without trailing slash ensures the symlinks used in\nfallow-2 to share .internal/, quality/, reference/, and benchmarks/\nwith the main fallow repo are properly ignored.",
          "timestamp": "2026-04-10T13:42:35+02:00",
          "tree_id": "7372fb618f3ef8125278c083794ed0009a4a2a01",
          "url": "https://github.com/fallow-rs/fallow/commit/1c456632db6209fcfa460ba128944b006c1f5b03"
        },
        "date": 1775821436853,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "970c16c2bbad2c20a38d3bde6eeb13a2074ab1e1",
          "message": "chore: release v2.27.0",
          "timestamp": "2026-04-10T13:47:36+02:00",
          "tree_id": "bdebe461be739022a7722500fa8ef476d182c4b9",
          "url": "https://github.com/fallow-rs/fallow/commit/970c16c2bbad2c20a38d3bde6eeb13a2074ab1e1"
        },
        "date": 1775821854474,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "0c42c5dc4c22864e2c599c17d33187a35dc895cd",
          "message": "docs: add codex repo overlay",
          "timestamp": "2026-04-10T15:30:56+02:00",
          "tree_id": "d854271fb48f8a5cf5bf24d2ba6ae062a8d467d7",
          "url": "https://github.com/fallow-rs/fallow/commit/0c42c5dc4c22864e2c599c17d33187a35dc895cd"
        },
        "date": 1775827929977,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "9255270050b2acc196bbda0b40b7774bb9c84407",
          "message": "chore: gitignore AGENTS.md and .codex (local agent config)\n\nAgent-specific development workflows (Codex skills, Claude overlay)\nare local tooling configuration, not project source.",
          "timestamp": "2026-04-10T17:40:16+02:00",
          "tree_id": "bec1584a7d04a5a0e2727bc3190aedaa52af3f30",
          "url": "https://github.com/fallow-rs/fallow/commit/9255270050b2acc196bbda0b40b7774bb9c84407"
        },
        "date": 1775835739772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "33868b8595ff88595172049b8e0a7585115e2e62",
          "message": "fix(extract): Angular @defer, @let, @else if, and outputFromObservable support (#92, #93, #94)\n\nAdd missing Angular template syntax and signal API recognition to\neliminate false positive unused-class-member reports:\n\n- @defer (when expr) / (prefetch when) / (hydrate when) conditions\n- @let name = expr; template-local variables with scope tracking\n- @else if (condition) expression scanning\n- outputFromObservable() as Angular signal API in ANGULAR_SIGNAL_APIS\n\nBump CACHE_VERSION 28->29 for changed extraction semantics.",
          "timestamp": "2026-04-10T19:29:38+02:00",
          "tree_id": "911f33ad29bb98b0a36e953ad56fdb31037799c6",
          "url": "https://github.com/fallow-rs/fallow/commit/33868b8595ff88595172049b8e0a7585115e2e62"
        },
        "date": 1775842256912,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "460afaee1c2411dbf289ae6dbec4fd95d0cd9bff",
          "message": "test(extract): harden Angular @defer nested parens and @else if word boundary\n\nAdd word boundary check for @else if detection to prevent matching\nidentifiers starting with \"if\" (e.g. @else iffy). Add test for\n@defer (on timer(1s)) confirming nested parentheses in triggers\ndon't break the scanner.",
          "timestamp": "2026-04-10T19:44:38+02:00",
          "tree_id": "efad6a8704b4dbc5f6bb99fd87094571a8581020",
          "url": "https://github.com/fallow-rs/fallow/commit/460afaee1c2411dbf289ae6dbec4fd95d0cd9bff"
        },
        "date": 1775843164019,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "8e94a96bb4fab971564f47da95676e404a8effb7",
          "message": "chore: release v2.27.0",
          "timestamp": "2026-04-10T19:48:25+02:00",
          "tree_id": "377e4e1641bd937f9454fbe5c8aea074311b6347",
          "url": "https://github.com/fallow-rs/fallow/commit/8e94a96bb4fab971564f47da95676e404a8effb7"
        },
        "date": 1775843396921,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "3531f8e369452c04843ca6f56467e2fa4c2753c2",
          "message": "chore: release v2.27.1",
          "timestamp": "2026-04-10T19:50:06+02:00",
          "tree_id": "3b4d4381b4e477ccbeef204982fe33fd0293f106",
          "url": "https://github.com/fallow-rs/fallow/commit/3531f8e369452c04843ca6f56467e2fa4c2753c2"
        },
        "date": 1775843484817,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.4,
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
          "id": "a85dd288b75720ebda86b2e2b47d11eec859aa9c",
          "message": "fix: SCSS partial resolution and inheritance-aware class member detection (#95, #96)\n\nSCSS partial files prefixed with `_` now resolve when imported via `@use`\nor `@import` without the underscore prefix, eliminating cascading false\npositives across unresolved imports, unlisted dependencies, and unused\nfiles. Class members accessed via `this.*` in parent classes now propagate\nto child class overrides through an inheritance map built from `extends`\nclauses, reducing unused class member false positives from 7 to 1 in\ntypical polymorphic dispatch patterns.",
          "timestamp": "2026-04-10T19:57:39+02:00",
          "tree_id": "383a7a250dbbc2c170ca06d2b80898fae00a215b",
          "url": "https://github.com/fallow-rs/fallow/commit/a85dd288b75720ebda86b2e2b47d11eec859aa9c"
        },
        "date": 1775844098655,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "1b76bfa33b0fbe3f992790c709bddc2782219c40",
          "message": "chore: release v2.27.2",
          "timestamp": "2026-04-10T20:12:26+02:00",
          "tree_id": "0f63c8a8d53327d3eca3918f8a392abf633203be",
          "url": "https://github.com/fallow-rs/fallow/commit/1b76bfa33b0fbe3f992790c709bddc2782219c40"
        },
        "date": 1775845009015,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "824884c7f9fd6825445b0bb90059df4b0de8b6e7",
          "message": "fix: harden SCSS index convention and default export class extends\n\nAdd SCSS directory index resolution: `@use 'components'` now resolves to\n`components/_index.scss` or `components/index.scss`. Add test coverage\nfor `export default class extends Foo` inheritance pattern.",
          "timestamp": "2026-04-10T20:40:38+02:00",
          "tree_id": "773e9796a59368ef19bd17f7d7b898cfaf9fec9f",
          "url": "https://github.com/fallow-rs/fallow/commit/824884c7f9fd6825445b0bb90059df4b0de8b6e7"
        },
        "date": 1775846654681,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "e629a4a0100da2643634b270fe621883d59d365b",
          "message": "fix: CSS scoped package imports and HTML workspace root-relative paths\n\nTwo false-positive fixes discovered by running fallow on fallow-cloud:\n\n1. CSS scoped npm package imports (e.g., @fontsource/monaspace-neon/400.css,\n   @fallow/design-system/styles.css) were being normalized with a leading ./,\n   causing them to be reported as unresolved instead of resolved from\n   node_modules. normalize_css_import_path() now keeps scoped specifiers\n   (@scope/pkg) bare regardless of file extension.\n\n2. HTML root-relative paths (<script src=\"/src/main.tsx\">) in workspace\n   members resolved against the monorepo root instead of the workspace member\n   root. site/index.html referencing /src/main.tsx was looking for\n   <root>/src/main.tsx instead of site/src/main.tsx. Now resolves from the\n   HTML file's parent directory first, with fallback to project root for\n   the public/index.html case.\n\nCACHE_VERSION bumped 29 -> 30 because the CSS change alters import specifiers\nstored at extraction time.",
          "timestamp": "2026-04-10T21:26:49+02:00",
          "tree_id": "7649e2e285a430448e4522b3b95222053e7a9177",
          "url": "https://github.com/fallow-rs/fallow/commit/e629a4a0100da2643634b270fe621883d59d365b"
        },
        "date": 1775849412161,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "254e25fc89d89d296e9d1c14b9775588d94a58f0",
          "message": "chore: release v2.27.3",
          "timestamp": "2026-04-10T21:31:19+02:00",
          "tree_id": "48d11b49cf0142881ac662bdeaf05f5dc0bfef0e",
          "url": "https://github.com/fallow-rs/fallow/commit/254e25fc89d89d296e9d1c14b9775588d94a58f0"
        },
        "date": 1775849708311,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "8d2200f3a3502cde1ecd76336b85560dfb265a6c",
          "message": "fix: include LICENSE file in VS Code extension package\n\nvsce package warns when no LICENSE/LICENSE.md/LICENSE.txt is present in\nthe extension directory. The repo root has LICENSE, but vsce only reads\nthe extension's working directory, so the root file isn't bundled.\n\n- release.yml copies root LICENSE into editors/vscode/ before packaging\n- A prepackage npm lifecycle script does the same for local pnpm package\n- .gitignore excludes the copied file so the root LICENSE remains the\n  single source of truth",
          "timestamp": "2026-04-10T22:10:40+02:00",
          "tree_id": "0988482567c17a1afeadbc0cea51cad6a429bb49",
          "url": "https://github.com/fallow-rs/fallow/commit/8d2200f3a3502cde1ecd76336b85560dfb265a6c"
        },
        "date": 1775852053237,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "7445a42021e50bca8cb498929dbdca192023a1ef",
          "message": "chore: shrink VS Code extension package and add CSS path alias tests\n\n- .vscodeignore now excludes pnpm-lock.yaml, .fallow/, .test-dist/,\n  test/, vitest.config.mts, tsconfig.test.json, and .fallowrc.json.\n  Reduces the VSIX from 192KB to 100KB (48% smaller).\n- Add regression tests for CSS path aliases (@/components/Button.css)\n  sharing the @-prefix with scoped packages. Path aliases must stay\n  bare so the resolver's alias path handles them.",
          "timestamp": "2026-04-10T22:26:29+02:00",
          "tree_id": "916a746b341c25a8e02c3aa4935c7446cd630dc1",
          "url": "https://github.com/fallow-rs/fallow/commit/7445a42021e50bca8cb498929dbdca192023a1ef"
        },
        "date": 1775853013972,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "1cb2d98e43d3068fbb0bd2dd5ab168c27a4540be",
          "message": "fix(graph): fallback resolution when sibling tsconfig has broken extends chain (#97)\n\nA solution-style tsconfig.json with references to a sibling tsconfig that has a\nbroken extends chain (e.g., extends pointing to a non-existent file) caused\noxc_resolver::Resolver::resolve_file to fail for every file in the workspace,\nincluding files covered by a healthy sibling tsconfig. All relative imports were\nreported as unresolved and the failure was silent.\n\nWhen resolve_file returns a tsconfig-loading error (TsconfigNotFound,\nTsconfigCircularExtend, TsconfigSelfReference, Json, IOError), retry with\nresolver.resolve(dir, specifier), which passes None for tsconfig in Auto mode and\nskips discovery entirely. Relative, absolute, and bare imports then resolve\nnormally; path aliases in the broken workspace remain unresolvable (they were\nalready broken in tsc).\n\nA shared Mutex<FxHashSet<String>> on ResolveContext dedupes tracing::warn! to one\nmessage per unique broken chain, surfacing the failure to users without log spam.\n\nAdds unit tests for the error classifier plus an integration fixture\n(tests/fixtures/tsconfig-broken-extends) that reproduces the bug verbatim.",
          "timestamp": "2026-04-10T22:34:06+02:00",
          "tree_id": "ac86c3b5b4c72bf41cfa3241e3fd65f7e64cc74e",
          "url": "https://github.com/fallow-rs/fallow/commit/1cb2d98e43d3068fbb0bd2dd5ab168c27a4540be"
        },
        "date": 1775853407039,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "8b362e65f153b57cf96dc2efe1b99bcd7fcf33db",
          "message": "chore: release v2.27.4",
          "timestamp": "2026-04-10T22:38:30+02:00",
          "tree_id": "8040373a8f7c63d4c343e7d8105b2f14705bad0c",
          "url": "https://github.com/fallow-rs/fallow/commit/8b362e65f153b57cf96dc2efe1b99bcd7fcf33db"
        },
        "date": 1775853597064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "e05ebda310edacdc7a2946a9f9beb459e8500286",
          "message": "fix: detect import-then-reexport pattern as re-export\n\nThe pattern `import { X } from './a'; export { X };` is semantically\nequivalent to `export { X } from './a';` but the visitor was treating\nthe bottom export as a NEW local declaration, causing two false positive\nclasses:\n\n1. Duplicate-export findings when the same name was also exported from\n   the original source file (because both files appeared to declare X\n   locally).\n2. Unused-export findings at the export site, since the re-export chain\n   propagation only follows ReExportInfo edges and never reached the\n   misclassified ExportInfo entries.\n\nThe visitor now scans `self.imports` for a matching local binding when\nprocessing `export { X }` without a `from` clause. If found, it emits a\nReExportInfo pointing back to the original source instead of an\nExportInfo. Handles renames on either side, default imports\n(`imported_name: \"default\"`), and mixed local + re-export statements.\nOrder-sensitive: relies on imports preceding exports in source order\n(standard practice).\n\nCACHE_VERSION bumped 30 -> 31 because extraction output now differs for\nfiles using this pattern.\n\nEliminated 4 duplicate-export false positives in fallow-cloud's\n`packages/beacon/src/transport.ts` (a real-world Vite + Bun monorepo).\n9 new unit tests cover the basic case, type-only variants, renames on\nboth sides, default imports, mixed statements, namespace edge case, and\nthe regression guard for pure local exports.",
          "timestamp": "2026-04-10T23:20:03+02:00",
          "tree_id": "a2a3def3c63ff85b33f596e9fdf1ca81d3f3528a",
          "url": "https://github.com/fallow-rs/fallow/commit/e05ebda310edacdc7a2946a9f9beb459e8500286"
        },
        "date": 1775856243735,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "0cbd99146c6eb610aa7b5eafab3bb7c328280691",
          "message": "fix: report accurate line numbers for unused re-exports\n\nRe-exports synthesized from ReExportInfo into ExportSymbol entries were\nreported with line :1 because the synthesis used Span::new(0, 0) as a\nsentinel for 'no source location'. This applied even to import-then-\nreexport patterns and `export { X } from './a'` statements that DO have\nreal source spans.\n\nPlumb a span field from ReExportInfo (set by the visitor) through\nReExportEdge into the synthesized ExportSymbol so unused-export reporting\ncan compute the correct line via byte_offset_to_line_col. The (0, 0)\nsentinel is now reserved for graph-internal synthesis (star re-export\nchain propagation, namespace narrowing).\n\nThe unused-export detector previously inferred is_re_export from the\nspan(0, 0) sentinel. With real spans propagating through, the detection\nnow looks up the export name in the module's re_exports list instead,\nwhich is the semantic check.\n\nCACHE_VERSION bumped 31 -> 32 because CachedReExport gained span_start\nand span_end fields. ReExportEdge size assertion bumped 56 -> 64 bytes\nto account for the new span field.",
          "timestamp": "2026-04-10T23:35:09+02:00",
          "tree_id": "ac482df32ec0cc4e16334add492c162d5a554c46",
          "url": "https://github.com/fallow-rs/fallow/commit/0cbd99146c6eb610aa7b5eafab3bb7c328280691"
        },
        "date": 1775857124334,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "7d788037ade9caea0daaff0a8e8a183809c8e703",
          "message": "perf: O(N) re-export name lookup in unused-export detection\n\nThe is_re_export check introduced in the previous commit used\n`module.re_exports.iter().any(...)` per export specifier. For barrel\nfiles with hundreds of synthesized re-export entries, this made the\nper-module work O(N²) (N exports × M re_exports, where N ≈ M for\nbarrels).\n\nLift a FxHashSet<&str> of re-exported names out of the inner loop so\nthe lookup becomes O(1) per export, making total work O(N + M). vue-core\nhas barrel files with 86+ re-exports per file where this matters most.",
          "timestamp": "2026-04-10T23:45:17+02:00",
          "tree_id": "875f1f598d83ef3ad557ec86d9e2f600b4f1e5e6",
          "url": "https://github.com/fallow-rs/fallow/commit/7d788037ade9caea0daaff0a8e8a183809c8e703"
        },
        "date": 1775857770979,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "da5f29945923d1ffb0920d62df138b33e2f1a4d3",
          "message": "fix(extract): normalize Angular templateUrl/styleUrl without ./ prefix (#100)\n\nAngular's @Component decorator resolves both 'app.component.html' and\n'./app.component.html' relative to the component file. Fallow was\nemitting the raw specifier as an ImportInfo source, so downstream\nresolution classified bare filenames as npm packages and reported them\nas unlisted dependencies.\n\nAdd a normalize_angular_asset_url helper that prepends './' to bare\nfilenames while leaving already-relative, absolute, URL, and scoped\npackage paths untouched. Mirrors the existing CSS import normalization\npattern. Bump CACHE_VERSION so warm caches don't keep the stale bare\nspecifier.\n\nFixes #99",
          "timestamp": "2026-04-10T23:57:22+02:00",
          "tree_id": "e99329854b2c6ba7e8998ca052fee39e37c361a2",
          "url": "https://github.com/fallow-rs/fallow/commit/da5f29945923d1ffb0920d62df138b33e2f1a4d3"
        },
        "date": 1775858323846,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "47f8ac37e3296d612bcb5eede0f154d44f02cdb1",
          "message": "chore: release v2.27.5",
          "timestamp": "2026-04-11T00:02:00+02:00",
          "tree_id": "fd8478487500ab9bd6502acf15b0e1dca5cb3e82",
          "url": "https://github.com/fallow-rs/fallow/commit/47f8ac37e3296d612bcb5eede0f154d44f02cdb1"
        },
        "date": 1775858791285,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "413f950df3ce238d1b831d6118714473f6e553dc",
          "message": "fix(extract): normalize bare HTML/SFC asset specifiers without ./ prefix (#101)\n\nHTML `<script src>`, `<link rel=\"stylesheet\" href>`, and\n`<link rel=\"modulepreload\" href>` as well as Vue/Svelte `<script src>`\nwere emitting their raw user-authored strings as `ImportInfo.source`.\nBare filenames like `app.js`, `styles.css`, or `logic.ts` were then\nclassified as npm package specifiers and reported as unlisted\ndependencies. Browsers, Vite, Parcel, and Vue/Svelte tooling all\nresolve these references relative to the document or component file\nwhether or not they start with `./`.\n\nGeneralize the Angular templateUrl normalizer (from the #99 fix) into\na shared `crate::asset_url::normalize_asset_url` helper and call it\nfrom all five emission sites. The helper now also guards `data:` URIs\ndefensively so it's safe to call from sites that don't pre-filter via\n`is_remote_url`. Bump `CACHE_VERSION` 33 -> 34 so warm caches don't\nkeep stale bare specifiers.\n\nFound during the post-ship audit for #99.",
          "timestamp": "2026-04-11T00:24:28+02:00",
          "tree_id": "917011212a506748384b827b408a68ec2c648a9a",
          "url": "https://github.com/fallow-rs/fallow/commit/413f950df3ce238d1b831d6118714473f6e553dc"
        },
        "date": 1775859951172,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "79b1fc8050f8a278776f5302d6da992b0489ae7c",
          "message": "chore: release v2.27.6",
          "timestamp": "2026-04-11T00:27:17+02:00",
          "tree_id": "b649d3a4de2a3b262d371aa7b834ecd164079414",
          "url": "https://github.com/fallow-rs/fallow/commit/79b1fc8050f8a278776f5302d6da992b0489ae7c"
        },
        "date": 1775860131115,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "32c198b8cf4d0c18214e540c423d60b5435fd001",
          "message": "fix: resolve three false-positive sources in dead-code analysis\n\n- #102: entry points in ignored output dirs (dist/build/out/esm/cjs)\n  fall back to src/index.*, src/main.*, index.*, main.* when no direct\n  src/ mirror exists. Prevents the entire source tree becoming\n  unreachable in TypeScript libraries whose compiled entry has no\n  one-to-one source mapping.\n\n- #98: class member allowlist is now configurable. Top-level\n  FallowConfig.usedClassMembers and ExternalPluginDef.usedClassMembers\n  extend the built-in Angular/React lifecycle check with third-party\n  framework-invoked method names (ag-Grid agInit/refresh, Web Components\n  connectedCallback, TypeORM MigrationInterface.up/down). The allowlist\n  is merged with plugin contributions in analyze/mod.rs and scoped to\n  class members only, so enum members with matching names are still\n  flagged.\n\n- #103: Angular plugin reads stylePreprocessorOptions.includePaths from\n  angular.json, and the Nx plugin reads the same key from project.json.\n  Absolute directories thread through PluginResult.scssIncludePaths into\n  ResolveContext. Bare SCSS specifiers that fail file-local resolution\n  retry against each include directory using the SCSS partial / index\n  conventions. Parent-relative specifiers (../shared/vars) are left\n  untouched.\n\nSchema regenerated for the new usedClassMembers config fields. New\nintegration fixture tests/fixtures/angular-scss-include-paths/ covers\nthe end-to-end SCSS include-path flow.",
          "timestamp": "2026-04-11T13:18:12+02:00",
          "tree_id": "f4fa2973ee4091ab15e099c49a8e7114743183dd",
          "url": "https://github.com/fallow-rs/fallow/commit/32c198b8cf4d0c18214e540c423d60b5435fd001"
        },
        "date": 1775906379804,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "017fa39da072d4ab068fced7f2cf6211eac34795",
          "message": "fix: resolve sass builtins and workspace self-references\n\n- #104: SCSS sass:* built-in modules (sass:string, sass:math, etc.) are\n  now recognized as platform builtins alongside node:, bun:, cloudflare:,\n  and Deno std. Sass built-ins are language features provided by the Sass\n  compiler and cannot appear in package.json — imports like\n  `@use 'sass:color'` previously produced one false unlisted dependency\n  per unique module used across a codebase (up to 7). The sass: prefix\n  check is strict: the `sass` compiler package, sass-loader, and\n  @types/sass remain normal npm packages.\n\n- #106: Workspace libraries that use self-referencing package imports\n  (a Node.js v12+ feature commonly used by Angular libraries built with\n  ng-packagr) no longer report every secondary entry point file as\n  unused. A new workspace package fallback strips the matching package\n  name prefix from any bare specifier whose package name is in the\n  workspace registry and resolves the remainder against the library's\n  source tree via oxc_resolver::resolve_file, bypassing package.json\n  exports maps that point at compiled output. The fallback also covers\n  cross-workspace imports in monorepos that haven't run npm install,\n  where bare `@org/pkg/sub` specifiers would previously fall through to\n  NpmPackage classification and create false unused-file and\n  unlisted-dependency reports.\n\n  Wired into three sites in resolve/specifier.rs: the Err branch before\n  NpmPackage classification (primary path for the reproduction), and\n  both the Ok(canonical) and Err-canonical branches where the resolver\n  landed inside node_modules for a workspace package name but neither\n  try_source_fallback nor try_pnpm_workspace_fallback could map it back\n  to a source file.\n\nIssue #105 (HTML <script src=\\\"file.ts\\\"> bare filename) was already\nfixed in 2.27.6 by PR #101 (normalize_asset_url in html.rs) — no code\nchange needed.\n\nNew integration test fixture under\ntests/fixtures/workspace-self-reference/ mirrors the exact repro from\nissue #106.",
          "timestamp": "2026-04-11T19:05:06+02:00",
          "tree_id": "7ce2e029dd2e8fcd184db7bb370b8e0ae9eeed2e",
          "url": "https://github.com/fallow-rs/fallow/commit/017fa39da072d4ab068fced7f2cf6211eac34795"
        },
        "date": 1775927405254,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "e31cf48749026072c259b881e57ea8ac2c29a21b",
          "message": "chore: release v2.28.0",
          "timestamp": "2026-04-11T19:17:12+02:00",
          "tree_id": "a95c524acd7646e6e5497c948ed25b591fd7e081",
          "url": "https://github.com/fallow-rs/fallow/commit/e31cf48749026072c259b881e57ea8ac2c29a21b"
        },
        "date": 1775927941012,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "1ae2f7e6cc4ea56a5174fb156dd80074f715008b",
          "message": "chore: release v2.28.1",
          "timestamp": "2026-04-11T20:48:57+02:00",
          "tree_id": "7aecae1d27deb3eb517de61519d8b98be6b0823b",
          "url": "https://github.com/fallow-rs/fallow/commit/1ae2f7e6cc4ea56a5174fb156dd80074f715008b"
        },
        "date": 1775933485677,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "d2d4600a7903ba89c7163cc53e30dcaa413c528a",
          "message": "test(extract): direct unit tests for scan_jsdoc_imports_in and has_public_tag\n\nAdd a `#[cfg(test)] mod tests` block in parse.rs with 26 direct unit\ntests for the two pure helper functions introduced in #105 and earlier.\n\nThe scan_jsdoc_imports_in tests (21) cover: single import with member,\nsingle/double quoted paths, multiple imports per body, union annotations\nwith multiple import() expressions, nested member access (first segment\nwins), parent-relative paths, bare package specifiers, side-effect form\nwithout a member, empty path, truncated body with no closing quote,\nmissing closing paren, whitespace between `)` and `.`, whitespace\nbetween `(` and quote, non-quote char after `(`, prose containing the\nword \"import\" but not the expression, multi-byte UTF-8 in paths, empty\nbody, body with no import(), append-to-existing-vec behavior, member\nident boundary parsing, and empty member name after the dot.\n\nThe has_public_tag tests (5) cover: bare @public tag, @api public\nvariant, rejection of partial words (@publicly), rejection of\n@apipublic, and rejection of unprefixed \"public\".\n\nNo behavior change. Addresses the rust-reviewer CONCERN on the original\n#105 implementation that flagged the absence of direct unit tests for\ncursor-advancement edge cases in the byte-scanning loop.",
          "timestamp": "2026-04-11T21:36:27+02:00",
          "tree_id": "19e6cdfb34d2ad91b015da9e490b1ed344e29106",
          "url": "https://github.com/fallow-rs/fallow/commit/d2d4600a7903ba89c7163cc53e30dcaa413c528a"
        },
        "date": 1775936276767,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "ba2141a1b3270ffceaac23c7e78d1d5bfef1c19e",
          "message": "fix(extract): track html`` tagged template literal asset references (#105)\n\nFollow-up to till's comment on #105: the v2.28.1 JSX `<script src>` /\n`<link href>` override only fires on JSX opening elements, but Hono\nlayouts written in plain `.ts` files emit HTML through the\n`hono/html` tagged template literal — so `/static/otp-input.js`\nreferenced from `` html`<script src=\"/static/otp-input.js\">` `` was\nstill being flagged as unused.\n\nA new `visit_tagged_template_expression` override mirrors the JSX path\nfor tagged templates whose tag is the bare identifier `html`. Each\nquasi is scanned independently with the existing HTML asset regexes\n(extracted into a shared `crate::html::collect_asset_refs` helper so\nthe HTML file parser and the visitor share one pipeline). Asset\nreferences that span an interpolation boundary\n(`` html`<script src=\"${base}/app.js\">` ``) are deliberately skipped\nrather than producing a garbled, unresolvable specifier.\n\nThe match is intentionally conservative — only the bare `html`\nidentifier is recognised. `css`, `sql`, `gql`, `styled.div`, and\nmember/call expressions are left alone so unrelated tagged templates\nin the same file are never misread as HTML. Mirrors the JSX\noverride's \"lowercase intrinsic only\" posture.\n\nCache version 35 -> 36 so warm caches miss the new extraction\nsemantics. Includes 14 unit tests and 1 end-to-end integration test\nvia a new `hono-html-tagged-template` fixture exercising the full\n`html\\`\\`` -> `static/otp-input.js` (SideEffect) reachability chain\nwith no external dependencies.",
          "timestamp": "2026-04-11T22:40:30+02:00",
          "tree_id": "d7a59c770bbd44f7ee3429abd33b9c61e1b55169",
          "url": "https://github.com/fallow-rs/fallow/commit/ba2141a1b3270ffceaac23c7e78d1d5bfef1c19e"
        },
        "date": 1775940274535,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "d0d69aa669ece6b526e6166761cbf6afa70cbe8c",
          "message": "chore: release v2.28.2",
          "timestamp": "2026-04-11T22:47:06+02:00",
          "tree_id": "68566d470d3f4348762a67ac2818c80bced1d51d",
          "url": "https://github.com/fallow-rs/fallow/commit/d0d69aa669ece6b526e6166761cbf6afa70cbe8c"
        },
        "date": 1775940695125,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "181525e9dc53f439e8664d210983665314f10709",
          "message": "chore: add standalone plugin-schema.json (#109)\n\nExtracts the plugin JSON Schema into a separate file at the repo root\nso plugin authors can reference it via $schema in their config files.",
          "timestamp": "2026-04-12T09:32:00+02:00",
          "tree_id": "d21bc43e2b0d1decb6ce561c36131d677e823652",
          "url": "https://github.com/fallow-rs/fallow/commit/181525e9dc53f439e8664d210983665314f10709"
        },
        "date": 1775979196502,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "65104286192c17e875cc95b7ba5ac86b32abb892",
          "message": "feat(health): inline suppression for complexity findings (#108)\n\nAdd `IssueKind::Complexity` (discriminant 18) to the inline\nsuppression system so health command complexity findings can be\nsuppressed per-function or per-file:\n\n  // fallow-ignore-next-line complexity\n  function parseCsv(text) { ... }\n\n  // fallow-ignore-file complexity   (suppresses all functions in file)\n  // fallow-ignore-next-line         (blanket, also covers complexity)\n\nThe check happens in `collect_findings()` before pushing a finding,\nusing `suppress::is_suppressed()` with the function's line number.\nFile scores, vital signs, and hotspots are unaffected by suppression\nsince they reflect actual complexity, not alerting.\n\nHuman output now shows a suppress hint in the findings footer when\n3+ functions exceed thresholds.\n\nCache version 36 -> 37 so stale caches re-parse files that already\ncontain `// fallow-ignore-next-line complexity` comments (previously\nsilently ignored because the kind was unrecognised).",
          "timestamp": "2026-04-12T09:32:55+02:00",
          "tree_id": "4115c434a1562834e193e4a93e8b699f85100ddf",
          "url": "https://github.com/fallow-rs/fallow/commit/65104286192c17e875cc95b7ba5ac86b32abb892"
        },
        "date": 1775979410416,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "888b6ec5a6807219e20b1f3bd13436ac2a776e44",
          "message": "chore: release v2.29.0",
          "timestamp": "2026-04-12T09:39:00+02:00",
          "tree_id": "b17f3cd2d4d29ba9160114ba4c14ddab6013e99d",
          "url": "https://github.com/fallow-rs/fallow/commit/888b6ec5a6807219e20b1f3bd13436ac2a776e44"
        },
        "date": 1775979812060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "5ea37114e61b8f961c154288622959eb77afa39f",
          "message": "fix(flags): wire inline suppression into feature flag collection\n\nThe JSON output action suggested `// fallow-ignore-next-line feature-flag`\nbut the flags command never checked suppressions. Both the built-in and\ncustom flag collection loops now call `is_suppressed()` /\n`is_file_suppressed()` with `IssueKind::FeatureFlag`, matching the\ncontract the JSON output already promised.",
          "timestamp": "2026-04-12T10:00:05+02:00",
          "tree_id": "945fa52df7642983222a90b91013b73861cc78bb",
          "url": "https://github.com/fallow-rs/fallow/commit/5ea37114e61b8f961c154288622959eb77afa39f"
        },
        "date": 1775981036455,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "85ab8885f35c91c5ec5fb006dfa0fddd54385dd9",
          "message": "test(flags): regression test for feature-flag inline suppression\n\nThe fix in 5ea37114 wired is_suppressed() into the flags collection\nloop but shipped without a test. Add a CLI-level regression test\nverifying that // fallow-ignore-next-line feature-flag suppresses the\nannotated flag while leaving unsuppressed flags visible. Uses a\ndedicated feature-flag-suppression fixture with two env var flags,\none suppressed and one not.",
          "timestamp": "2026-04-12T10:09:31+02:00",
          "tree_id": "4d61e434fabebeb0c06dd493017d282763f98aa7",
          "url": "https://github.com/fallow-rs/fallow/commit/85ab8885f35c91c5ec5fb006dfa0fddd54385dd9"
        },
        "date": 1775981599539,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "920a8e0cca3e1b58d0ef5bf106aacde11102cb96",
          "message": "chore: release v2.29.1",
          "timestamp": "2026-04-12T10:13:19+02:00",
          "tree_id": "f81e7cb7beb5212473becb3033f76f4a0820a639",
          "url": "https://github.com/fallow-rs/fallow/commit/920a8e0cca3e1b58d0ef5bf106aacde11102cb96"
        },
        "date": 1775981878376,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "712bc212ac0d728a6065422a6b49847e2954d7e4",
          "message": "test: integration tests for all 5 features, fix default export resolution\n\nAdd 4 test fixtures and 7 integration tests:\n- arrow-wrapped-dynamic-imports: React.lazy, lazy() reachability + default export credit\n- visibility-tags: @public/@internal/@beta/@alpha suppress unused-export detection\n- entry-export-validation: --include-entry-exports flag enables/disables entry skip\n- script-multiplexers: concurrently/npm-run-all deps not false-flagged\n\nFix: arrow-wrapped imports with destructured_names [\"default\"] now produce\nImportedName::Default instead of ImportedName::Named(\"default\"), so the\ndefault export is correctly credited in the module graph.",
          "timestamp": "2026-04-13T00:07:27+02:00",
          "tree_id": "2157129d81c7b481451fa37e3bea58c8aa38aa70",
          "url": "https://github.com/fallow-rs/fallow/commit/712bc212ac0d728a6065422a6b49847e2954d7e4"
        },
        "date": 1776031913856,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "92840d926064010154146be73bfcadfbe468741b",
          "message": "docs: update README with new features\n\nAdd arrow-wrapped dynamic imports, visibility tags (@public, @internal,\n@beta, @alpha), --file flag for lint-staged, --include-entry-exports for\nentry validation, and script multiplexer support.",
          "timestamp": "2026-04-13T00:16:14+02:00",
          "tree_id": "607c0038fe4071f7665f721d6de088156cd73c58",
          "url": "https://github.com/fallow-rs/fallow/commit/92840d926064010154146be73bfcadfbe468741b"
        },
        "date": 1776032256972,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "7266c648d08820283e95da0567017783b810755b",
          "message": "chore: release v2.30.0",
          "timestamp": "2026-04-13T00:22:53+02:00",
          "tree_id": "64da1dfc25eb916ef271c9a9ba666650d7406d29",
          "url": "https://github.com/fallow-rs/fallow/commit/7266c648d08820283e95da0567017783b810755b"
        },
        "date": 1776032661290,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "cf3fa79f9c1215b1bf796f3a8d49f525ae71f56c",
          "message": "feat: add Hardhat, UnoCSS, Qwik, Convex, pnpm plugins (85 -> 90)\n\nFive new framework plugins, each validated against real open source\nprojects:\n\n- Hardhat: Ethereum dev framework. Parses hardhat.config via new\n  extract_imports_and_requires() to capture both import statements and\n  side-effect require() calls. Entry points for test/, scripts/, tasks/,\n  deploy/, ignition/modules/.\n- UnoCSS: Atomic CSS engine. Supports both uno.config and unocss.config\n  file names. Extracts preset/transformer imports via imports_only.\n  Prefix enabler @unocss/ catches all scoped packages.\n- Qwik: Web framework (v1 @builder.io + v2 @qwik.dev). File-system\n  routing with used_exports for route handlers (onGet, onPost, etc.)\n  and layouts including reset layouts (layout!).\n- Convex: Backend platform. All convex/**/*.ts files are entry points.\n  Protects _generated/, schema, auth, http from unused-file detection.\n- pnpm: Package manager with file-existence detection (pnpm-lock.yaml,\n  pnpm-workspace.yaml) since pnpm is rarely a package.json dependency.\n\nAlso adds extract_imports_and_requires() to config_parser.rs for\nconfigs that load plugins via top-level require() statements.",
          "timestamp": "2026-04-13T09:29:52+02:00",
          "tree_id": "49a7c77b15fdb3a97dfb38b63788a078c79ecb5b",
          "url": "https://github.com/fallow-rs/fallow/commit/cf3fa79f9c1215b1bf796f3a8d49f525ae71f56c"
        },
        "date": 1776065509627,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "7916cc5c85af7a96188948f16af08b69ef891f11",
          "message": "docs: update detection.md with production mode config glob details (#111)",
          "timestamp": "2026-04-13T09:53:29+02:00",
          "tree_id": "8cf5ce3cb688b532a87caa723ccb599a82453f76",
          "url": "https://github.com/fallow-rs/fallow/commit/7916cc5c85af7a96188948f16af08b69ef891f11"
        },
        "date": 1776066951879,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "9687a650ad8d6722b8a205a3e868c02e6dbcbc45",
          "message": "chore: release v2.31.0",
          "timestamp": "2026-04-13T10:18:52+02:00",
          "tree_id": "a0c54496251ea78ed8811f676f0df20d30786b69",
          "url": "https://github.com/fallow-rs/fallow/commit/9687a650ad8d6722b8a205a3e868c02e6dbcbc45"
        },
        "date": 1776068450335,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "bc2ac04af20694bea9f773243d21077df9aec6ed",
          "message": "fix(test): prevent git operations from leaking into main repo via GIT_DIR\n\nWhen the pre-push hook runs cargo test, git sets GIT_DIR in the hook\nenvironment pointing to the main repo's .git directory. Test helpers\nthat create temp git repos via current_dir() were still committing to\nthe main repo because GIT_DIR overrides current_dir. Added\nenv_remove(\"GIT_DIR\") and env_remove(\"GIT_WORK_TREE\") to both the\nhealth_tests and audit_tests git helpers.",
          "timestamp": "2026-04-13T10:44:32+02:00",
          "tree_id": "bd03c9a8667771534930d1508746e7694dcf2c59",
          "url": "https://github.com/fallow-rs/fallow/commit/bc2ac04af20694bea9f773243d21077df9aec6ed"
        },
        "date": 1776069953182,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "9a372be83e39b91758711aeb2b6789cb2be605d6",
          "message": "docs: update README, output schema, and knip analysis for stale suppressions\n\nAdd stale suppression comments and @expected-unused JSDoc tag to\nREADME \"Dead code\" section. Add StaleSuppression definition and\nstale_suppressions field to docs/output-schema.json. Mark items\n#6 and #10 as shipped in knip-issue-analysis.md.",
          "timestamp": "2026-04-13T13:29:09+02:00",
          "tree_id": "5b28531801a5ed9f8da1167861fb20db9df28e37",
          "url": "https://github.com/fallow-rs/fallow/commit/9a372be83e39b91758711aeb2b6789cb2be605d6"
        },
        "date": 1776079920442,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.4,
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
          "id": "0fd3a4f91d73186af661911c7c46052c6d052a78",
          "message": "chore: release v2.32.0",
          "timestamp": "2026-04-13T13:33:21+02:00",
          "tree_id": "b05a03262ade3b3b5ac680df61ecbb4cedc14324",
          "url": "https://github.com/fallow-rs/fallow/commit/0fd3a4f91d73186af661911c7c46052c6d052a78"
        },
        "date": 1776080102664,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.4,
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
          "id": "06c108192e0308605c8c4839d9d11932d343d3e9",
          "message": "test: add integration fixture and exhaustiveness test for stale suppressions\n\nIntegration fixture exercises all stale suppression variants:\n- Stale next-line comment (used export)\n- Active next-line comment (unused export, suppression working)\n- Stale blanket comment (no issues on next line)\n- Stale file-level comment (file is reachable)\n- Stale @expected-unused tag (export became used)\n- Active @expected-unused tag (export genuinely unused)\n\nExhaustiveness test ensures every IssueKind variant is classified\nin either core_kinds (checked by SuppressionContext) or NON_CORE_KINDS\n(excluded from stale detection). Fails when a new variant is added\nwithout being classified.",
          "timestamp": "2026-04-13T13:50:36+02:00",
          "tree_id": "82700228de6a3dc1cba36a97c3a39e73d0e09d10",
          "url": "https://github.com/fallow-rs/fallow/commit/06c108192e0308605c8c4839d9d11932d343d3e9"
        },
        "date": 1776081117338,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "2b76af893757da9d453ffdddab26b3e864f7925f",
          "message": "style: apply rustfmt to stale suppression tests",
          "timestamp": "2026-04-13T13:53:03+02:00",
          "tree_id": "0ec9e18ccb5b1cd07772aec91c67ed5f80a20760",
          "url": "https://github.com/fallow-rs/fallow/commit/2b76af893757da9d453ffdddab26b3e864f7925f"
        },
        "date": 1776081262159,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "a9458e58fbb4d2943a732a5bc0f8f0be9dd929e1",
          "message": "fix: use is_config_file predicate for workspace-level config detection (#112)\n\nAfter #111 narrowed PRODUCTION_EXCLUDE_PATTERNS from **/*.config.* to\n*.config.* (root-anchored), find_test_only_dependencies no longer matched\nworkspace-level config files like packages/foo/vitest.config.ts.\n\nAdd is_config_file() as an additional predicate alongside the glob match.\nThe curated predicate checks filenames against ~50 known config patterns\nat any depth, avoiding false matches on application configs like\napp.config.ts while correctly matching workspace-level tooling configs.\n\nCloses #112",
          "timestamp": "2026-04-13T14:13:01+02:00",
          "tree_id": "57e8c1bad9d7e2db0d2928e7bdd34287c0ae4068",
          "url": "https://github.com/fallow-rs/fallow/commit/a9458e58fbb4d2943a732a5bc0f8f0be9dd929e1"
        },
        "date": 1776082612044,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "ea005f479a5a184cd55a9b98fa38d416dc28f00b",
          "message": "chore: release v2.32.1",
          "timestamp": "2026-04-13T14:16:33+02:00",
          "tree_id": "33766a0603a3ac74230de23772a0c749721588eb",
          "url": "https://github.com/fallow-rs/fallow/commit/ea005f479a5a184cd55a9b98fa38d416dc28f00b"
        },
        "date": 1776082858967,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "ac43d767717fa11e1ed4d1537d378acf55ad9419",
          "message": "fix: harden CI workflow permissions for OpenSSF Scorecard\n\nRemove unnecessary `deployments: write` from 7 benchmark/CI workflows\nsince benchmark-action only needs `contents: write` for gh-pages push.\n\nAdd top-level `permissions: {}` to test-action.yml and move\ndependabot-auto-merge.yml permissions from workflow to job level.",
          "timestamp": "2026-04-13T15:32:46+02:00",
          "tree_id": "001a4bc0c736b419b62c35796d92bf2c9ae1968a",
          "url": "https://github.com/fallow-rs/fallow/commit/ac43d767717fa11e1ed4d1537d378acf55ad9419"
        },
        "date": 1776091154986,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "f0efabefc8f162fb96b4e44b325f6fc2aac6f9e3",
          "message": "feat: add ignoreImports option to exclude imports from duplication detection\n\nAdd `ignoreImports` config option and `--ignore-imports` CLI flag that\nstrips ES import declarations from the token stream before clone\ndetection. Reduces noise from sorted import blocks that naturally look\nsimilar across files.\n\nCloses #113",
          "timestamp": "2026-04-13T19:56:18+02:00",
          "tree_id": "c51384d5672b9ec0a8ded6962702190e1d8dc23f",
          "url": "https://github.com/fallow-rs/fallow/commit/f0efabefc8f162fb96b4e44b325f6fc2aac6f9e3"
        },
        "date": 1776103062377,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "8e38ff62d1daa5c4454569c8a3f3a921c84bc2d3",
          "message": "chore: release v2.33.0",
          "timestamp": "2026-04-13T19:57:50+02:00",
          "tree_id": "9fa73cb7ce8a1bb5a4e79e6741fa6ff62a6da95e",
          "url": "https://github.com/fallow-rs/fallow/commit/8e38ff62d1daa5c4454569c8a3f3a921c84bc2d3"
        },
        "date": 1776103175933,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "a7f42022f109241317d9b06833310ea59d8ca7e0",
          "message": "feat: surface per-file LOC in health output\n\nShow file line count as the first metric on the file health detail line,\ninclude LOC in SplitHighImpact, ExtractComplexFunctions, and\nExtractDependencies recommendation messages, and add a \"lines\" metric\nentry to health_meta() for JSON explain consumers.",
          "timestamp": "2026-04-13T23:12:20+02:00",
          "tree_id": "33aa79294ae5091b5493993ed26dc54bc9317bc1",
          "url": "https://github.com/fallow-rs/fallow/commit/a7f42022f109241317d9b06833310ea59d8ca7e0"
        },
        "date": 1776114961331,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "bfe4b648ce1a82563114bf55510d89c949270512",
          "message": "perf: borrow line_offsets in compute_complexity instead of cloning\n\nChange ComplexityVisitor to borrow &[u32] line offsets instead of\ntaking ownership of Vec<u32>. Eliminates one Vec clone per file\nwhen complexity metrics are enabled (health command).",
          "timestamp": "2026-04-13T23:16:57+02:00",
          "tree_id": "c1dd51c07f5afb99b234d41fb7b25cb4cee2914c",
          "url": "https://github.com/fallow-rs/fallow/commit/bfe4b648ce1a82563114bf55510d89c949270512"
        },
        "date": 1776115351162,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "148a8d0fcf4e254145e71807e4705ebdaa09771e",
          "message": "perf: eliminate O(n^2) patterns in analyze, cross-reference, and families\n\n- Pre-compile public_packages glob matchers once instead of per-workspace\n- Use FxHashSet for ignore_dependencies in find_type_only_dependencies\n  (was linear scan, matching sibling functions)\n- Build per-file index for cross_reference unused export lookup\n  (was O(clones * all_exports), now O(clones * per_file_exports))\n- Use FxHashMap for clone family grouping (was O(N*M) Vec scan)",
          "timestamp": "2026-04-14T00:07:02+02:00",
          "tree_id": "7f3d6bb02e974520337b1592e2d3ebe9dc4d90b2",
          "url": "https://github.com/fallow-rs/fallow/commit/148a8d0fcf4e254145e71807e4705ebdaa09771e"
        },
        "date": 1776118283367,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "e2ba7dd6e8900c560af50301fabed82e1a58e267",
          "message": "feat: add total LOC vital sign and improve penalty breakdown visibility\n\nAdd total_loc to VitalSigns, computed unconditionally from parsed module\nline counts. Populate VitalSignsCounts.total_lines unconditionally\n(previously only set by the duplication pipeline). Bump snapshot schema\nto v6.\n\nImprove health score penalty breakdown: sort penalties by magnitude\n(largest first), highlight the top penalty in yellow, dim the rest.\nShorten labels to \"deps\" per design system conventions.\n\nSurfaces in all output formats: human (thousands-formatted in Metrics\nline), JSON (total_loc field), compact (total_loc=N), markdown (table\nrow).",
          "timestamp": "2026-04-14T00:13:38+02:00",
          "tree_id": "3d31c302eef8f5a0ea0c347dee75e9fac55295db",
          "url": "https://github.com/fallow-rs/fallow/commit/e2ba7dd6e8900c560af50301fabed82e1a58e267"
        },
        "date": 1776118504157,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "da0cf78405cc033bc17bdd2f24a990b5447ef255",
          "message": "fix: add deterministic tiebreaker to clone family sort\n\nFxHashMap iteration order is non-deterministic, so families with\nequal total_duplicated_lines and group count could appear in\narbitrary order. Add first file path as a third sort key.",
          "timestamp": "2026-04-14T00:16:16+02:00",
          "tree_id": "f604a6d4d24a68ad90633329b1d659a65f3695ff",
          "url": "https://github.com/fallow-rs/fallow/commit/da0cf78405cc033bc17bdd2f24a990b5447ef255"
        },
        "date": 1776118808235,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "cfb451e3794e9c884a32cabfa39a317ef6c51ea8",
          "message": "revert: remove unmeasured perf changes, keep parallel walker\n\nReverts the O(n^2) algorithmic fixes and export dedup that showed\nno measurable improvement on real projects or benchmarks. Keeps only\nthe parallel file walker and line_offsets borrow which had verified\nreal-world impact.\n\nReverted commits:\n- perf: eliminate O(n^2) patterns in analyze, cross-reference, and families\n- fix: add deterministic tiebreaker to clone family sort\n- perf: O(1) export name dedup in build_module_node",
          "timestamp": "2026-04-14T00:19:10+02:00",
          "tree_id": "5fe15b72345d2b3d48251d6c1cc5f39aeddddd3e",
          "url": "https://github.com/fallow-rs/fallow/commit/cfb451e3794e9c884a32cabfa39a317ef6c51ea8"
        },
        "date": 1776118976335,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "8c957bdae413dc5401ba0167d6871447febbd30c",
          "message": "chore: benchmark full pipeline (check) instead of dead-code only\n\nThe real-world benchmark now runs `fallow check` which exercises\ndead-code + dupes + health together, matching what users actually\nrun. Previously only measured dead-code analysis.",
          "timestamp": "2026-04-14T00:26:07+02:00",
          "tree_id": "ecb0a0ed7d2c15d311ac1c6c1b3d405b8f77e1bd",
          "url": "https://github.com/fallow-rs/fallow/commit/8c957bdae413dc5401ba0167d6871447febbd30c"
        },
        "date": 1776119372419,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "c157b043953c6bf27780b0545b07b83ad7a18079",
          "message": "fix: use bare fallow (not check) for real-world benchmarks\n\n`fallow check` is an alias for `fallow dead-code`. Bare `fallow`\nruns the full pipeline (dead-code + dupes + health).",
          "timestamp": "2026-04-14T00:33:17+02:00",
          "tree_id": "1441af4a8b2bcb29a60202ea0d3310794c116b0f",
          "url": "https://github.com/fallow-rs/fallow/commit/c157b043953c6bf27780b0545b07b83ad7a18079"
        },
        "date": 1776119806421,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "7b468e52310cf9a90e61e86fb8449ae5a2b224b8",
          "message": "perf: share parsed modules between check and health in combined mode\n\nWhen running bare `fallow` (dead-code + dupes + health), the check\npipeline now parses with need_complexity=true and retains the\nmodules + discovered files. Health reuses them, skipping its own\ndiscovery and parse pass.\n\nOn next.js (21K files): eliminates ~374ms of redundant parsing.\nNet wall-clock savings ~250ms (complexity visitor adds ~100ms to\nthe check parse, offsetting part of the savings).",
          "timestamp": "2026-04-14T07:29:58+02:00",
          "tree_id": "3461b3f22786ecfa1f93d7345101797cc9734167",
          "url": "https://github.com/fallow-rs/fallow/commit/7b468e52310cf9a90e61e86fb8449ae5a2b224b8"
        },
        "date": 1776144829030,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "committer": {
            "email": "test@example.com",
            "name": "Test User"
          },
          "distinct": true,
          "id": "a8a54f45cc69fd3ec94ae0cd21e2380ad69d921d",
          "message": "perf: share analysis graph between check and health in combined mode\n\nExtends the shared parse optimization to also share the module graph\nand analysis results. Health's compute_filtered_file_scores now\nreuses the pre-computed AnalysisOutput instead of re-running\ndiscovery + plugins + resolution + graph build for file scoring.\n\nOn next.js (21K files): eliminates ~1.5s of redundant analysis.\nCombined with module sharing: 6.2s -> ~5.0s (-19%).",
          "timestamp": "2026-04-14T09:37:56+02:00",
          "tree_id": "92a0f4faf53210c6bc9fd0ba151372b4c826d3bb",
          "url": "https://github.com/fallow-rs/fallow/commit/a8a54f45cc69fd3ec94ae0cd21e2380ad69d921d"
        },
        "date": 1776152505351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "aaee82e2b04b77783a12c6aafd46073a0426e197",
          "message": "perf: share analysis graph between check and health in combined mode\n\nExtends the shared parse optimization to also share the module graph\nand analysis results. Health's compute_filtered_file_scores now\nreuses the pre-computed AnalysisOutput instead of re-running\ndiscovery + plugins + resolution + graph build for file scoring.\n\nOn next.js (21K files): eliminates ~1.5s of redundant analysis.\nCombined with module sharing: 6.2s -> ~5.0s (-19%).",
          "timestamp": "2026-04-14T09:37:56+02:00",
          "tree_id": "92a0f4faf53210c6bc9fd0ba151372b4c826d3bb",
          "url": "https://github.com/fallow-rs/fallow/commit/aaee82e2b04b77783a12c6aafd46073a0426e197"
        },
        "date": 1776152947775,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "7b1c7d7d1d690641a6b6c3bae38b416b6487f21d",
          "message": "fix: expand {projectRoot} and {workspaceRoot} tokens in Nx includePaths (#114)\n\nNx project.json uses {projectRoot} and {workspaceRoot} placeholder\ntokens in stylePreprocessorOptions.includePaths. These are now expanded\nbefore resolving SCSS include directories, fixing false unresolved\nimport reports in Angular+Nx monorepos.",
          "timestamp": "2026-04-14T10:28:43+02:00",
          "tree_id": "7815b65e705126ce64f70956f3bf1b53eef5caad",
          "url": "https://github.com/fallow-rs/fallow/commit/7b1c7d7d1d690641a6b6c3bae38b416b6487f21d"
        },
        "date": 1776155416616,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "b6cbf40ab98fb34614c20165b823224b56936d63",
          "message": "chore: bump cache version for .then() extraction, clean up clone",
          "timestamp": "2026-04-14T10:40:11+02:00",
          "tree_id": "7a56106c839368eff8f7a3c9f83b9e3501c082cc",
          "url": "https://github.com/fallow-rs/fallow/commit/b6cbf40ab98fb34614c20165b823224b56936d63"
        },
        "date": 1776156097307,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "89130f8d7377c10d72e1749e7a8729d71d89ab18",
          "message": "fix: expand Nx tokens in main and tsConfig fields, not just includePaths\n\n{projectRoot} and {workspaceRoot} can appear in any path-valued field\nin project.json. Hoisted token expansion above all three path fields\n(main, tsConfig, includePaths) so they all expand consistently.",
          "timestamp": "2026-04-14T10:49:59+02:00",
          "tree_id": "43bf52d8c0f2ec92ae902ddce0dfee644e3a28b8",
          "url": "https://github.com/fallow-rs/fallow/commit/89130f8d7377c10d72e1749e7a8729d71d89ab18"
        },
        "date": 1776156689851,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.5,
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
          "id": "fab9482b633f9d3a456f1f711831f1a0c6b93ddd",
          "message": "fix: track fixture node_modules for bin-script-deps integration test\n\nThe bin-script-deps fixture needs stub node_modules entries so\nbuild_bin_to_package_map can resolve divergent binary names (attw ->\n@arethetypeswrong/cli). These were gitignored, causing the test to\npanic in CI.",
          "timestamp": "2026-04-14T12:39:47+02:00",
          "tree_id": "21da41a43ce6d1521aaf1c1c37950ee763f1fca0",
          "url": "https://github.com/fallow-rs/fallow/commit/fab9482b633f9d3a456f1f711831f1a0c6b93ddd"
        },
        "date": 1776163354732,
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
          "id": "56264f745abdb403647240a6e8969368043bb9ac",
          "message": "feat: add severity tiers to health findings, fix MI formula for small files (#118, #119)\n\nAdd FindingSeverity (moderate/high/critical) to HealthFinding based on\nhow far above thresholds. Default thresholds: cognitive 25/40, cyclomatic\n30/50. Add --min-severity flag for CI exit code filtering.\n\nFix Maintainability Index formula distortion for small files by adding\nLOC dampening factor min(lines/50, 1.0). A 5-line type guard no longer\nscores worse than a 192-line nightmare function.\n\nChanges:\n- FindingSeverity enum with Ord derive, compute_finding_severity() helper\n- MI formula: dampening prevents density from dominating on files <50 lines\n- --min-severity moderate|high|critical CLI flag for exit code filtering\n- Severity counts on HealthSummary (computed before --top truncation)\n- All 6 report formats: human (CRITICAL/HIGH badges), JSON (severity field),\n  SARIF (level mapping), compact, markdown (Severity column), CodeClimate\n- MCP server: min_severity param on HealthParams\n- GitHub Action: min-severity input, severity in annotations/summaries\n- GitLab CI: severity column in summary table\n- SARIF defaultConfiguration.level updated to \"note\" for health rules\n- SNAPSHOT_SCHEMA_VERSION bumped to 7\n- Health test fixtures with actual findings covering all severity levels",
          "timestamp": "2026-04-14T15:59:18+02:00",
          "tree_id": "852dd24db82407225c397d7ad13e5964a1549b6d",
          "url": "https://github.com/fallow-rs/fallow/commit/56264f745abdb403647240a6e8969368043bb9ac"
        },
        "date": 1776175451145,
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
          "id": "485d7de07bc7c0a532f96436bf78d92fd6cc068d",
          "message": "chore: release v2.35.0",
          "timestamp": "2026-04-14T16:08:41+02:00",
          "tree_id": "d12b9b7e5cc2bea1c4225c6d707afe6f1cddf44f",
          "url": "https://github.com/fallow-rs/fallow/commit/485d7de07bc7c0a532f96436bf78d92fd6cc068d"
        },
        "date": 1776175985305,
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
          "id": "a36a915fa5afbc806c186ad90f60f0563f24db66",
          "message": "chore: release v2.36.0",
          "timestamp": "2026-04-14T23:38:28+02:00",
          "tree_id": "de2f70dfc477f5b74915f68c6e846838137ab119",
          "url": "https://github.com/fallow-rs/fallow/commit/a36a915fa5afbc806c186ad90f60f0563f24db66"
        },
        "date": 1776202793268,
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
          "id": "073d29d979974a036c0103c95b0bd09a8ff98577",
          "message": "fix(plugins): extract object-form `input` from Angular/Nx entry arrays\n\nThe Angular CLI workspace schema allows two forms in `styles`, `scripts`,\nand `polyfills` arrays:\n\n  \"styles\": [\n    \"src/styles.scss\",\n    { \"input\": \"src/theme.scss\", \"bundleName\": \"theme\", \"inject\": false }\n  ]\n\nThe object form is used for vendor stylesheets that opt out of\nauto-injection or need an explicit bundle name. The shared helper\n`expression_to_string_or_array` in `config_parser.rs` silently dropped\nobject-form array elements because its `ArrayExpression` arm filtered\neach element through `expression_to_string`, which returns `None` for\n`ObjectExpression`. That caused false-positive \"unused file\" reports\nfor any file referenced via the object form in either `angular.json`\n(Angular plugin) or `project.json` (Nx plugin).\n\nFix: when an array element is an object, extract its `input` property\nvia the pre-existing `find_property` helper. Objects without `input`\nare still dropped (matches previous behavior). Strings are unchanged.\nOther property values like `bundleName` are NOT extracted as paths.\n\nTests: direct unit test on the helper plus end-to-end tests through\nboth Angular and Nx plugins covering string-form preserved, object-form\nextracted, objects-without-input ignored, and no-leak of other properties.\n\nCloses #126.",
          "timestamp": "2026-04-15T09:28:17+02:00",
          "tree_id": "de48f8bd7c7fa7f15bbf7ca45b4f64cb37bbedc5",
          "url": "https://github.com/fallow-rs/fallow/commit/073d29d979974a036c0103c95b0bd09a8ff98577"
        },
        "date": 1776238638955,
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
          "id": "c07d06b0000536b69f883c56cb3ce95e4eea88f4",
          "message": "chore: release v2.37.0",
          "timestamp": "2026-04-15T09:39:07+02:00",
          "tree_id": "fcd20f02d94471d15b576e6498af3f852217019b",
          "url": "https://github.com/fallow-rs/fallow/commit/c07d06b0000536b69f883c56cb3ce95e4eea88f4"
        },
        "date": 1776239015855,
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
          "id": "40c70bd59d5dec11828bc0d0745377720f205b85",
          "message": "chore(ci): bump softprops/action-gh-release to v3.0.0\n\nv3.0.0 moves the action runtime from Node.js 20 to Node.js 24, silencing\nthe deprecation annotation emitted by GitHub Actions on recent releases.\nv3 is a pure runtime bump — no API changes, drop-in replacement. Pinned\nto commit SHA per fallow-rs supply-chain policy.\n\nAnnotation observed on the v2.37.0 release run (24442626182):\n> Node.js 20 actions are deprecated. Actions will be forced to run with\n> Node.js 24 by default starting June 2nd, 2026.\n\nRef: https://github.com/softprops/action-gh-release/releases/tag/v3.0.0",
          "timestamp": "2026-04-15T10:16:59+02:00",
          "tree_id": "feb6db986423d4796ec7d8e974bd5cde92d1e198",
          "url": "https://github.com/fallow-rs/fallow/commit/40c70bd59d5dec11828bc0d0745377720f205b85"
        },
        "date": 1776241223852,
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
          "id": "77c956fb040565e5f76901e7380751f9da1a3ba7",
          "message": "chore: release v2.38.0",
          "timestamp": "2026-04-15T10:53:07+02:00",
          "tree_id": "7227bcaf30f778bbce1d103164549f8397c31667",
          "url": "https://github.com/fallow-rs/fallow/commit/77c956fb040565e5f76901e7380751f9da1a3ba7"
        },
        "date": 1776243279276,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.4,
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
          "id": "039fb44c1627d0512f7c578a0b7839b670219e85",
          "message": "fix: stabilize production coverage health flow",
          "timestamp": "2026-04-16T11:36:50+02:00",
          "tree_id": "0b1acc311e2c78591ed966b8bc399ab48150fefe",
          "url": "https://github.com/fallow-rs/fallow/commit/039fb44c1627d0512f7c578a0b7839b670219e85"
        },
        "date": 1776332453905,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.4,
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
          "id": "0fc7fc01cb7c7588910909c2c96956a2e98e3aae",
          "message": "fix: finalize production coverage hardening",
          "timestamp": "2026-04-16T15:37:39+02:00",
          "tree_id": "a9eda4090cdb9c1c64d539874e4cc8506b733a58",
          "url": "https://github.com/fallow-rs/fallow/commit/0fc7fc01cb7c7588910909c2c96956a2e98e3aae"
        },
        "date": 1776346855246,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "0368c055cc3f971a8569012544d528ead40a2a46",
          "message": "fix: polish coverage input detection and docs",
          "timestamp": "2026-04-16T16:01:45+02:00",
          "tree_id": "eba619400b8fafafd59679f58dc2ea6048e81c38",
          "url": "https://github.com/fallow-rs/fallow/commit/0368c055cc3f971a8569012544d528ead40a2a46"
        },
        "date": 1776348209688,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "e9a71762d7f4fd8c0d982a94694c725ce2d69dd9",
          "message": "fix: publish new crates before cli release",
          "timestamp": "2026-04-16T16:17:46+02:00",
          "tree_id": "4627d1e3bd649b8f2df013f0c1faf735052faefc",
          "url": "https://github.com/fallow-rs/fallow/commit/e9a71762d7f4fd8c0d982a94694c725ce2d69dd9"
        },
        "date": 1776349388758,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "5c228a9bdc3ce5d2f65ec9c56cce52925a247fa9",
          "message": "fix: resolve CI regressions on main",
          "timestamp": "2026-04-16T16:36:04+02:00",
          "tree_id": "b5d83a6d772586be73e5634e7e3d5dc7e0f6a48a",
          "url": "https://github.com/fallow-rs/fallow/commit/5c228a9bdc3ce5d2f65ec9c56cce52925a247fa9"
        },
        "date": 1776350290009,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "0936e8e8d02e6dcc211ce798f5c0f6ce2650dee6",
          "message": "fix: stabilize remaining CI checks",
          "timestamp": "2026-04-16T22:55:21+02:00",
          "tree_id": "fbca194f0b389966642deb0400fcb8e052b7fb7d",
          "url": "https://github.com/fallow-rs/fallow/commit/0936e8e8d02e6dcc211ce798f5c0f6ce2650dee6"
        },
        "date": 1776373023421,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "23a90cc0da3a4f1bb8f850a33590ffd523819de9",
          "message": "fix: address rust 1.95 clippy regressions",
          "timestamp": "2026-04-16T23:04:42+02:00",
          "tree_id": "a674c7987d4e8a369c8b3cadb2f84d0a10b3ce79",
          "url": "https://github.com/fallow-rs/fallow/commit/23a90cc0da3a4f1bb8f850a33590ffd523819de9"
        },
        "date": 1776373572773,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "d6d73ac91d5af4878f7c4ec6f736e6c7b90c55a6",
          "message": "fix: address rust 1.95 ci regressions\n\n- Swap Duration::from_secs for from_mins to satisfy the new\n  clippy::duration_suboptimal_units lint in 1.95.\n- Soft-fail the Module Coupling job: cargo-modules (via cargo_metadata)\n  still passes --lockfile-path to `cargo metadata`, which 1.95 removed.\n  Drop --locked to let a fixed cargo_metadata land, gate analyze/store\n  steps on actual graph collection, and mark the job continue-on-error\n  so this metric workflow does not block main while upstream catches up.",
          "timestamp": "2026-04-16T23:30:56+02:00",
          "tree_id": "08448ef675577b0c8d40790b78febab319a777fa",
          "url": "https://github.com/fallow-rs/fallow/commit/d6d73ac91d5af4878f7c4ec6f736e6c7b90c55a6"
        },
        "date": 1776375155356,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "4698e93faf00335d4d98650893155c98fdf3c377",
          "message": "fix: resolve toolchain from rust-toolchain.toml in setup-rust\n\nThe pinned dtolnay/rust-toolchain commit requires a non-empty\ntoolchain input, so the previous default change ('' meaning\n\"read rust-toolchain.toml\") failed every workflow at setup:\n\n    'toolchain' is a required input\n\nInstead, resolve the toolchain in a pre-step: honor the action\ninput when set, otherwise parse the channel from rust-toolchain.toml,\notherwise fall back to 'stable'. Keeps CI consistent with the\nlocally pinned channel without requiring each workflow to pass it\nexplicitly.",
          "timestamp": "2026-04-16T23:48:00+02:00",
          "tree_id": "17366d1ee523c6ffebe0b3c2c7cfc30f58a998a8",
          "url": "https://github.com/fallow-rs/fallow/commit/4698e93faf00335d4d98650893155c98fdf3c377"
        },
        "date": 1776376231698,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "33e919ac16cba068fd7151e080bb61ddfccfa1ff",
          "message": "fix(cli): address production-coverage review findings\n\nPost-v2.38.0 cleanup after the team review of the Phase 2\nproduction-coverage landing. Combines three CI-format correctness\nblockers, a batch of ship-with-notes concerns, and a follow-up on\nthe license/refresh error surface.\n\nSARIF:\n- register fallow/production-never-called,\n  fallow/production-coverage-unavailable, and fallow/production-coverage\n  in tool.driver.rules with matching explain.rs entries\n  (fullDescription + helpUri)\n- replace Debug formatting in the result message with the Display impl\n\nCodeClimate:\n- category \"ProductionCoverage\" -> \"Bug Risk\" (valid GitLab category)\n- severity \"info\" -> \"minor\" so CoverageUnavailable entries render as\n  MR inline annotations\n- replace Debug formatting in the description with the Display impl\n\nTypes + JSON:\n- add Display impls on ProductionCoverageState / Confidence / Verdict /\n  Watermark, backed by as_str() returning kebab-case strings that match\n  serde rename_all\n- #[serde(rename = \"type\")] on ProductionCoverageAction.kind so JSON\n  emits `type` natively; drop the post-hoc normalize_embedded_actions\n  rename hack\n- ProductionCoverageHotPath gains actions: Vec<Action> with\n  skip_serializing_if for future per-hot-path recommendations\n- expose pub fn build_health_json so insta snapshot tests can lock the\n  health JSON shape without stdout capture; new\n  json_health_with_production_coverage snapshot\n\nCompact + Markdown:\n- replace {:?} with {} in every production-coverage code path so the\n  compact grep contract and markdown tables use kebab-case\n- markdown paths wrapped via normalize_uri + escape_backticks (Windows\n  backslash handling)\n- prepend a blank line before ## Production Coverage so GFM parses the\n  heading correctly\n\nLicense:\n- fallow-license: LicenseClaims gains refresh_after: Option<i64> parsed\n  with #[serde(default)]; round-trip test\n- CLI license activate: write ~/.fallow/license.jwt with mode 0600 on\n  Unix; parse trialEndsAt from the backend response and surface it on\n  stdout during trial activation\n- CLI license status: append a refresh hint when refresh_after has\n  passed (proactive nudge while license is still valid)\n- http_status_message now parses the {error, message, code} envelope\n  and maps refresh/token_stale, refresh/invalid_token,\n  refresh|trial/unauthorized, and trial/rate_limit_exceeded to targeted\n  reactivation and rate-limit hints; unknown codes fall back to the\n  backend message, then the raw body\n- --trial help text mentions the 5/hr/IP rate limit and the CI\n  FALLOW_LICENSE fallback\n\nSidecar discovery:\n- FALLOW_COV_BIN set to a non-existent file now returns a helpful\n  error instead of silently falling through to auto-discovery\n\nexplain.rs:\n- add health_meta entries for the new production-coverage metrics\n  (verdict, state, confidence, invocations, percent_dead_in_production)\n- add HEALTH_RULES entries for the three new rules so --explain JSON\n  covers them and SARIF rules carry fullDescription + helpUri\n\nMCP:\n- HealthParams gains production_coverage: Option<String> and\n  min_invocations_hot: Option<u64>; threaded through build_health_args\n- check_health tool description documents the new params and notes the\n  FALLOW_TIMEOUT_SECS knob for long coverage analyses\n- schema test + arg-builder tests updated; new test asserting the\n  description mentions production_coverage\n\ndocs/output-schema.json:\n- ProductionCoverageHotPath gains actions[]\n\n.claude/rules:\n- cli-crate.md + mcp-server.md updated with new license behavior,\n  FALLOW_COV_BIN early-error, and MCP check_health params\n\n10 new unit tests (4 license error-mapping, 1 refresh_after round-trip,\n5 Display/kebab-case/action-rename). All existing tests and snapshots\nupdated. cargo check / test / clippy / fmt pass.",
          "timestamp": "2026-04-16T23:56:27+02:00",
          "tree_id": "20c4901917a37dd6d212c306f87604d6a4a1c6b8",
          "url": "https://github.com/fallow-rs/fallow/commit/33e919ac16cba068fd7151e080bb61ddfccfa1ff"
        },
        "date": 1776376909066,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "b9e06014a170bcabfb53f78ffd88b8e5940936bc",
          "message": "fix(license): resolve user home dir on Windows via USERPROFILE\n\ndefault_license_path() and canonical_sidecar_path() both read $HOME\ndirectly and fell back to \"./.fallow/...\" when unset. On native Windows\n(cmd / PowerShell, not Git Bash) $HOME is not set; the fallback silently\nwrites the license JWT to a cwd-relative .fallow directory, which breaks\nCI runners that run fallow from a repo checkout.\n\nAdds fallow_license::user_home_dir() which checks $HOME first (Unix and\nGit Bash / MSYS / Cygwin on Windows) then %USERPROFILE% (native Windows),\nreturning None only when neither resolves to a non-empty value. Both\ncallers switch to this helper.\n\nAlso guards against the CI footgun of HOME=\"\" (exported but empty): the\nprevious code would return PathBuf::from(\"\") whose .join(\".fallow\")\nproduced \"/.fallow\" — invalid.\n\n4 unit tests cover: HOME preferred over USERPROFILE, USERPROFILE\nfallback, empty-string skip, and the no-home-at-all None case.\n\nNo behavior change on Unix. No new dependencies.",
          "timestamp": "2026-04-17T09:20:28+02:00",
          "tree_id": "5f0be0c6932ddfe92e68d7ba9202200b31b3a134",
          "url": "https://github.com/fallow-rs/fallow/commit/b9e06014a170bcabfb53f78ffd88b8e5940936bc"
        },
        "date": 1776410629743,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "781f9c0fd1221ef7faa99c546bc320c02cb63644",
          "message": "fix(cli): support GitLab CODEOWNERS section headers and exclusions\n\nCloses #127. The CODEOWNERS parser previously treated `[Section name]`\nheaders as glob character classes, causing hard errors for `--group-by\nowner` and silent null ownership for `--ownership` on any GitLab\nproject using sections.\n\n- Recognize section headers (`[Name]`, `^[Name]`, `[Name][N]`) and skip\n  them as rules; propagate section default owners to bare pattern lines.\n- Accept GitLab 17.10+ exclusion patterns (`!path`) and clear ownership\n  for files whose last matching rule is a negation.\n- Emit a stderr warning when `--ownership` encounters an unparsable\n  CODEOWNERS instead of silently returning null ownership data.",
          "timestamp": "2026-04-17T10:46:47+02:00",
          "tree_id": "de8c3da53f739f1f4881b916258b941081fa78c7",
          "url": "https://github.com/fallow-rs/fallow/commit/781f9c0fd1221ef7faa99c546bc320c02cb63644"
        },
        "date": 1776415715249,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "04c3c04d8b9f9f0e3992e2795a8a014f16880a8c",
          "message": "chore(cli): flip fallow-cov-protocol from path dep to crates.io 0.2\n\nNow that fallow-cov-protocol 0.2.0 is published, drop the path dep used\nduring the Wave 3 integration. The CLI ships against the identical bytes\nthe sidecar consumes.",
          "timestamp": "2026-04-17T11:18:17+02:00",
          "tree_id": "5e3a348fa860e8e0eb19369bd7536fe6122dd68b",
          "url": "https://github.com/fallow-rs/fallow/commit/04c3c04d8b9f9f0e3992e2795a8a014f16880a8c"
        },
        "date": 1776417721945,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "f1f24d2e54705609eff99ae6c1a476cd88d4ebfe",
          "message": "chore: release v2.39.0",
          "timestamp": "2026-04-17T11:24:26+02:00",
          "tree_id": "cbf0e78ae13212f38bc1015ae94f86989b9f14b7",
          "url": "https://github.com/fallow-rs/fallow/commit/f1f24d2e54705609eff99ae6c1a476cd88d4ebfe"
        },
        "date": 1776418113266,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "90869d0bc79d760fed5dbc273dcd4315414a725c",
          "message": "fix(cli): allow unnecessary_wraps on non-unix license permission stub\n\nThe #[cfg(not(unix))] stub returns Result<(), String> to mirror the Unix\nvariant's signature, but rust 1.95 clippy's unnecessary_wraps flags it.\nSuppress with an explicit reason; #[expect] would be unfulfilled on Unix.",
          "timestamp": "2026-04-17T12:50:15+02:00",
          "tree_id": "b814fa6a792b3780d698d4eaa7a9a42cb213c48a",
          "url": "https://github.com/fallow-rs/fallow/commit/90869d0bc79d760fed5dbc273dcd4315414a725c"
        },
        "date": 1776423234042,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
            "unit": "%"
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
          "id": "c7cfff394380542f9007e4162bb7f6a6bea0a5a2",
          "message": "feat: add scoped usedClassMembers rules",
          "timestamp": "2026-04-17T13:05:15+02:00",
          "tree_id": "080fd1b8e9fcb7c514be06704e4412718a9d21da",
          "url": "https://github.com/fallow-rs/fallow/commit/c7cfff394380542f9007e4162bb7f6a6bea0a5a2"
        },
        "date": 1776424007916,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "215f4d0f7c62187e81dcd035aee5d7870f7a9ad7",
          "message": "feat(cli): install real BINARY_SIGNING_VERIFY_KEY pubkey (Phase 2.5 B1)\n\nReplaces the Phase 2.5 A' placeholder (32 zero bytes) with the public\nkey matching the Ed25519 seed that was provisioned to:\n\n  - Fly secret ED25519_BINARY_SIGNING_PRIVATE_KEY on app fallow-api (staged)\n  - GitHub Actions secret ED25519_BINARY_SIGNING_PRIVATE_KEY on\n    fallow-rs/fallow-cloud (used by release-sidecar.yml to sign every\n    platform binary)\n  - GitHub Actions repo variable ED25519_BINARY_SIGNING_PUBLIC_KEY on\n    fallow-rs/fallow-cloud (used by release-sidecar.yml to self-verify\n    the signature it just produced, and by binary-signing-parity.yml\n    to assert byte-for-byte equality with THIS constant daily)\n\nThe placeholder-guard unit test is now unconditional (was #[ignore]'d);\nany future revert to [0u8; 32] would break cargo test immediately,\nnot just release-time.\n\nRotation procedure: fallow-cloud/decisions/008-sidecar-key-rotation.md.\n\nThis commit is a prerequisite for v2.40.0. The next step is to run\n/fallow-release to cut the CLI release, then tag sidecar-v0.1.0 in\nfallow-cloud which triggers the first signed sidecar publish to npm.",
          "timestamp": "2026-04-17T16:10:22+02:00",
          "tree_id": "0850292a8ae5c6b3733d789e51b994c07e37da02",
          "url": "https://github.com/fallow-rs/fallow/commit/215f4d0f7c62187e81dcd035aee5d7870f7a9ad7"
        },
        "date": 1776435264350,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "987d9e205a120678411973bc90280cc3dc4ffcc8",
          "message": "chore: release v2.40.0",
          "timestamp": "2026-04-17T16:24:33+02:00",
          "tree_id": "698e1d247e68134da994de20b7ff67fd6b5ae03c",
          "url": "https://github.com/fallow-rs/fallow/commit/987d9e205a120678411973bc90280cc3dc4ffcc8"
        },
        "date": 1776436225257,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "0d19245369b74b6b439c1e7d924bd60838bbee4f",
          "message": "feat(cli): rotate BINARY_SIGNING_VERIFY_KEY to fix sidecar-v0.1.0/0.1.1 failure\n\nThe first two sidecar release tags (sidecar-v0.1.0, sidecar-v0.1.1)\nfailed in CI because the ED25519_BINARY_SIGNING_PRIVATE_KEY GitHub\nsecret on fallow-rs/fallow-cloud was set with the wrong flag\ncombination (`gh secret set --body -`, which gh interprets as body=\nliteral '-' rather than stdin). The sign step reported 'expected\n32-byte Ed25519 seed, got 0 bytes' because base64-decoding '-'\nreturns an empty buffer.\n\nSince the previous seed was scrubbed from the shell env after write\nand fly/gh secrets are write-only, the recovery was to regenerate\nthe keypair from scratch: new seed, new pubkey, new values in\nthe fly secret, GH secret (correctly, no --body flag), and GH\nvariable. This commit updates BINARY_SIGNING_VERIFY_KEY to match.\n\nValidation: dispatched release-sidecar.yml via workflow_dispatch\nbefore committing; sign-binary.mjs produced a 64-byte signature on\nboth darwin targets against the new seed, confirming the GH secret\nis correctly set this time.\n\nRequires cutting fallow v2.40.1 so the published CLI binary embeds\nthe new pubkey. sidecar-v0.1.0 and sidecar-v0.1.1 tags will remain\nas tombstones on origin (per OIDC 'never force-push once published'\nrule, even though neither tag reached npm publish); first real\nsidecar release will be sidecar-v0.1.2 against v2.40.1.",
          "timestamp": "2026-04-17T17:38:17+02:00",
          "tree_id": "c3254e3d06604184cbca6714cbdfc1e6cd3a3228",
          "url": "https://github.com/fallow-rs/fallow/commit/0d19245369b74b6b439c1e7d924bd60838bbee4f"
        },
        "date": 1776440512966,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "1419e2d3261b6864438808c237e1bdc60abd00f0",
          "message": "chore: release v2.40.1",
          "timestamp": "2026-04-17T17:45:57+02:00",
          "tree_id": "ad63d6e2c67c46dd3a079b627c124440e722004a",
          "url": "https://github.com/fallow-rs/fallow/commit/1419e2d3261b6864438808c237e1bdc60abd00f0"
        },
        "date": 1776441466881,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "5d433b3afe73a12bdf017b7f89cd244a5399bd93",
          "message": "fix(extract): credit super.method() calls to parent class\n\nsuper.method() calls inside a subclass body were silently dropped by\nthe visitor because visit_static_member_expression only handled\nExpression::Identifier and Expression::ThisExpression objects, not\nExpression::Super. This caused false-positive unused-class-member\nreports on base class methods only called via super.method() from\nsubclasses.\n\nTrack a class_super_stack in the visitor: push the extends identifier\non visit_class entry, pop on exit. When visiting Super.member, emit a\nMemberAccess against the super-class local identifier. The existing\nlocal_to_imported mapping in find_unused_members resolves it to the\nparent's export name, crediting the member as used.\n\nVerified against svelte (13 false positives eliminated, all with real\nsuper.X calls in source) and vite (-2). Zero new findings introduced.\n\nCloses #130",
          "timestamp": "2026-04-17T21:08:34+02:00",
          "tree_id": "ad1b2c23536e3c058c8ea690878a03af34533148",
          "url": "https://github.com/fallow-rs/fallow/commit/5d433b3afe73a12bdf017b7f89cd244a5399bd93"
        },
        "date": 1776453135022,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "6f2d860b48f52d32fac48daa10354d1441b97642",
          "message": "chore: release v2.40.2",
          "timestamp": "2026-04-17T21:12:20+02:00",
          "tree_id": "4a165af62506084a5a5e9eebf61cbc1213083c27",
          "url": "https://github.com/fallow-rs/fallow/commit/6f2d860b48f52d32fac48daa10354d1441b97642"
        },
        "date": 1776453238060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.1,
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
          "id": "25960fda32a6460c52f1fdd6c21d763eeec4f195",
          "message": "chore(deps): bump similar from 2.7.0 to 3.1.0 (#439)\n\nBumps [similar](https://github.com/mitsuhiko/similar) from 2.7.0 to 3.1.0.\n- [Changelog](https://github.com/mitsuhiko/similar/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/mitsuhiko/similar/compare/2.7.0...3.1.0)\n\n---\nupdated-dependencies:\n- dependency-name: similar\n  dependency-version: 3.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-20T14:29:38+01:00",
          "tree_id": "5e4bdef9c939bc84d2d0789ae62b869792b20c18",
          "url": "https://github.com/fallow-rs/fallow/commit/25960fda32a6460c52f1fdd6c21d763eeec4f195"
        },
        "date": 1779284124822,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.7,
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
          "id": "a212e66d1edc5110cac8e4274626f18c20325069",
          "message": "feat(config): validate user-supplied glob patterns at load time (#486)\n\nReject absolute paths, `..` traversal segments, and invalid glob syntax in\nevery user-controlled config field that compiles to a glob or names a\nproject-relative directory. Loading fails with exit code 2 and a message\nnaming every offending field + pattern in one run.\n\nCovered glob fields: entry, ignorePatterns, dynamicallyLoaded,\nduplicates.ignore, health.ignore, overrides[].files, ignoreExports[].file,\nignoreCatalogReferences[].consumer, boundaries.zones[].patterns, plus every\nglob-bearing field on inline framework[] plugin definitions and on external\nplugin files discovered from .fallow/plugins/, root-level\nfallow-plugin-*.{toml,json,jsonc}, or the plugins: config list. Covered\ndirectory-path fields: boundaries.zones[].root and\nboundaries.zones[].autoDiscover.\n\nPreviously, invalid patterns silently no-op'd at three compile sites in\nentry_points.rs and warn-and-skipped at the other sites. The\nframework[].detection.fileExists.pattern path was the most dangerous: it\nreaches glob::glob on disk via root.join(pattern) in\ncrates/core/src/plugins/registry/helpers.rs, so a .fallowrc.json or\n.fallow/plugins/leak.json shipped via PR on a misconfigured CI runner could\nenumerate real filesystem paths outside the project root.\n\nCompile sites now trust pre-validated input via .expect(); existing\nwarn-and-skip tests rewritten as should_panic to pin the new contract.\n\nFixes #463",
          "timestamp": "2026-05-20T14:42:35+01:00",
          "tree_id": "6de2502d6766725d5ed5846c5e79e22820f16187",
          "url": "https://github.com/fallow-rs/fallow/commit/a212e66d1edc5110cac8e4274626f18c20325069"
        },
        "date": 1779284702416,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.7,
            "unit": "%"
          }
        ]
      }
    ]
  }
}