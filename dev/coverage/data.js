window.BENCHMARK_DATA = {
  "lastUpdate": 1779365692877,
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
          "id": "b14fd612ce21ea710ee9c41860c24d73c14d0589",
          "message": "fix(extract): barrel re-export member propagation, source-order-independent (#427)\n\nClass-inheritance and interface-implementer credit now walks re-export\norigins, so a child class extends BaseShape (or implements RenderableShape)\nthrough a contracts/index.ts barrel correctly credits the parent's this.*\naccesses on the actual defining file. The visitor also now resolves\nexport { X }; import { X } from './a'; (export-before-import) as a\nre-export instead of a local export, matching the existing import-before-\nexport behavior. A local declaration of X in the same module shadows the\nimport and keeps the export local.\n\nCACHE_VERSION bumped 83 to 84 so warm caches get the new ModuleInfo shape\non upgrade.\n\nThanks @M-Hassan-Raza for the patch.",
          "timestamp": "2026-05-20T15:20:42+01:00",
          "tree_id": "992b899202c8d6c9d38cd81a03c384a179f20b7f",
          "url": "https://github.com/fallow-rs/fallow/commit/b14fd612ce21ea710ee9c41860c24d73c14d0589"
        },
        "date": 1779286998847,
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
          "id": "e91ccd2086db43b2854ede205ba416450931ae42",
          "message": "fix(cli): redact api_key and bearer tokens from Debug + ureq errors (#487)\n\nCloudRequest, UploadInventoryArgs, and ActivateArgs previously derived\nDebug on their public api_key / raw_jwt fields. A future tracing::debug!,\ndbg!, or unwrap-on-Err with the Debug formatter would have leaked the\nfull credential to stderr (and into CI logs).\n\nureq's Display impl can include the outgoing request's headers on TLS,\nconnection, and internal failure modes. Any Authorization: Bearer <key>\nwe set on the request could bleed into stderr via emit_error.\n\nMask the secrets at the type level via manual fmt::Debug impls, and\nadd sanitize_network_error(detail: &str) in crates/cli/src/api.rs to\nreplace every Bearer <token> substring with Bearer ***. The helper is\nwired at every format!(\"{err}\") site that runs after an Authorization:\nBearer header is set: cloud_client, upload_inventory, upload_source_maps,\nlicense::activate_trial, license::refresh_active_license, and the\nci::with_rate_limit_retry path used by GitHub PR-comment posting.\n\nToken charset matches the JWT / fallow API-key alphabet\n([A-Za-z0-9_.\\-=]); non-token bytes after `Bearer ` are preserved so\nprose mentioning the literal `Bearer ` is untouched.\n\nNo real disclosure has hit production; this is a defensive lockdown.\n\nTests: api::sanitize_network_error_* (5 cases),\ncloud_request_debug_masks_api_key, upload_inventory_args_debug_masks_api_key,\nactivate_args_debug_masks_raw_jwt.\n\nFixes #476",
          "timestamp": "2026-05-20T16:21:54+01:00",
          "tree_id": "3e20c1fdb0a294c401613fc61beef1123e1c2b17",
          "url": "https://github.com/fallow-rs/fallow/commit/e91ccd2086db43b2854ede205ba416450931ae42"
        },
        "date": 1779290645849,
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
          "id": "96484ac412e8cc275af2729dc1b5ae75e3b0f154",
          "message": "fix(action): verify npm binaries before execution (#488)\n\nAdds Ed25519 and GitHub Release SHA-256 checks for npm platform binaries, runs the GitHub Action verifier from the checked-out action after --ignore-scripts install, and preserves provenance-only npm publishing.\n\nFixes #465",
          "timestamp": "2026-05-20T16:24:55+01:00",
          "tree_id": "f7feb8208fdaee2c3f2a9933155ed9239fb5f9c6",
          "url": "https://github.com/fallow-rs/fallow/commit/96484ac412e8cc275af2729dc1b5ae75e3b0f154"
        },
        "date": 1779290860332,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ddf12455f8bd9d65b2730e3ca105e0051224416b",
          "message": "fix(action): keep smoke tests compatible before release\n\nResolve global npm optional packages from the installed fallow package directory and skip binary verification only in the Action self-test workflow, where checked-out verifier code can be newer than the published npm platform packages before the next release.",
          "timestamp": "2026-05-20T17:27:20+02:00",
          "tree_id": "b9d3b06333c2b19628f9984d3925b99df53a1ec9",
          "url": "https://github.com/fallow-rs/fallow/commit/ddf12455f8bd9d65b2730e3ca105e0051224416b"
        },
        "date": 1779291006297,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "54552a01e8b58619da71b45000d174ab28eafcad",
          "message": "fix(ci): sync bundled gitlab template",
          "timestamp": "2026-05-20T17:35:06+02:00",
          "tree_id": "741872199ed7811f87f2567e9277a472722e06d1",
          "url": "https://github.com/fallow-rs/fallow/commit/54552a01e8b58619da71b45000d174ab28eafcad"
        },
        "date": 1779291452327,
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
          "id": "a526f8ff6f50d2f5ae5da2bebbcb21ca18472606",
          "message": "fix(lsp): escape hover markdown + validate code-action line shape (#490)\n\nHover bodies now embed user-controlled identifiers via CommonMark code spans (new `format_inline_code` helper with fence escalation), and `build_remove_export_actions` validates the live declaration shape via `declares_export_name` before producing a `TextEdit`. The validator strips `export ` + declaration/modifier keywords and asserts the leading identifier equals the cached name, rejecting substring collisions, value-position collisions (cached `foo` vs live `export const bar = foo;` which would otherwise strip `export ` from `bar`), and re-export blocks. `Diagnostic.message` stays plain text per the LSP spec so VS Code's \"Fix all in file\" correlation keeps working.\n\nFixes #480",
          "timestamp": "2026-05-20T17:50:47+01:00",
          "tree_id": "8ef9e5f17c20ec22f51184b7382f8f3e30db50aa",
          "url": "https://github.com/fallow-rs/fallow/commit/a526f8ff6f50d2f5ae5da2bebbcb21ca18472606"
        },
        "date": 1779296018848,
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
          "id": "1a8de48c697d54b89100cf5867035ddc335ecba5",
          "message": "chore(deps-dev): bump @commitlint/config-conventional (#435)\n\nBumps [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/HEAD/@commitlint/config-conventional) from 20.5.3 to 21.0.1.\n- [Release notes](https://github.com/conventional-changelog/commitlint/releases)\n- [Changelog](https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/CHANGELOG.md)\n- [Commits](https://github.com/conventional-changelog/commitlint/commits/v21.0.1/@commitlint/config-conventional)\n\n---\nupdated-dependencies:\n- dependency-name: \"@commitlint/config-conventional\"\n  dependency-version: 21.0.1\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-20T18:23:55+01:00",
          "tree_id": "507db30649da7b38929b103797f249cfd4c6c8c1",
          "url": "https://github.com/fallow-rs/fallow/commit/1a8de48c697d54b89100cf5867035ddc335ecba5"
        },
        "date": 1779297974634,
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
          "id": "4ae297e6a6cc9f8cb370f44a1548aec9f33cc53e",
          "message": "fix(audit): harden worktree lifecycle against panic, Windows orphans, parallel races (#489)\n\nThree structural fragilities in fallow audit's git worktree lifecycle:\n\n1. WorktreeCleanupGuard rolls back both git's `.git/worktrees/<name>`\n   registration and the on-disk directory on any early-return between\n   `git worktree add` success and `BaseWorktree` struct construction.\n   `defuse(&mut self)` is idempotent and consumes no return value.\n\n2. `process_is_alive` on Windows was a `cfg(not(unix)) true` stub; orphan\n   sweep never cleaned worktrees owned by dead PIDs. Real Windows impl\n   added via target-gated `windows-sys 0.61`: `OpenProcess` +\n   `WaitForSingleObject(handle, 0) != WAIT_OBJECT_0`, with\n   `ProcessHandle(HANDLE)` RAII for `CloseHandle`.\n   `ERROR_ACCESS_DENIED` is treated as alive (matches Unix `kill -0`\n   EPERM); `ERROR_INVALID_PARAMETER` is dead. `WaitForSingleObject` is\n   preferred over `GetExitCodeProcess + STILL_ACTIVE` because 259 is a\n   valid u32 exit code.\n\n3. `BaseWorktree::reuse_or_create` now takes a kernel-level advisory\n   lock on `<reusable_audit_worktree_path>.lock` via\n   `std::fs::File::try_lock` (stable since Rust 1.89, MSRV is 1.92).\n   `flock(2)` on Unix, `LockFileEx` on Windows. Concurrent `fallow\n   audit` runs against the same `base_sha` no longer race on\n   `git worktree add` against the same cached path; the loser falls\n   through to the non-reusable PID-named worktree.\n\n`remove_audit_worktree` now emits `tracing::warn!` only when\n`git worktree remove --force` returns non-zero AND the on-disk dir\nsurvives, so leaked git registrations are observable under\n`RUST_LOG=warn` rather than silent.\n\nFive new tests cover guard cleanup, guard defuse, dead-PID sweep,\nlive-PID sweep, and lock exclusion. The lock test exercises the\nin-process exclusion path only (same-process re-acquire is not\nasserted because macOS `flock(2)` can keep the lock visible to other\nopen file descriptions in the same process for a brief window after\nclose; cross-process release is exercised by every real audit run).\n\nNo new third-party deps; `windows-sys` is target-gated to `cfg(windows)`.\n\nFixes #472",
          "timestamp": "2026-05-20T18:56:40+01:00",
          "tree_id": "01e57d04c0ec892295212239fafc123112ca0f1b",
          "url": "https://github.com/fallow-rs/fallow/commit/4ae297e6a6cc9f8cb370f44a1548aec9f33cc53e"
        },
        "date": 1779299947368,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "1ecdecf68222686f7a08c592cdf69134929b3207",
          "message": "feat(unused-class-members): add ignoreDecorators config opt-out (#508)\n\nCloses #471\n\nAdds FallowConfig.ignoreDecorators so users can opt utility decorators (Playwright @step, internal @measure/@log) out of the default skip-all-decorated behavior. Methods decorated only with listed names are checked for usage like undecorated methods; methods with any non-listed decorator stay skipped, preserving NestJS / Angular / TypeORM defaults. Default empty list = no behavior change.\n\nDual matching: dotted entries (\"decorators.log\") match the full path; bare entries (\"step\" or \"decorators\") match the leftmost segment. Both \"@step\" and \"step\" round-trip equivalently. Unmatched entries emit a one-time warning at end of run via a pre-pass over all class members' decorator names (so the warning does not falsely fire when the decorator only appears on used members).\n\nCACHE_VERSION bumped 84 -> 85 so warm caches invalidate on upgrade.\n\nThanks @vethman for the report.",
          "timestamp": "2026-05-20T20:02:27+01:00",
          "tree_id": "a84908d9c7171cd34e983fb7d4e51306e0939f81",
          "url": "https://github.com/fallow-rs/fallow/commit/1ecdecf68222686f7a08c592cdf69134929b3207"
        },
        "date": 1779303884252,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "be4f7e30099dc104dd57eb09400229b5e2d71022",
          "message": "fix(config): warn on misspelled rule names with Levenshtein suggestion (#510)\n\n* fix(config): warn on misspelled rule names with Levenshtein suggestion\n\nPhase 1 of a staged migration toward `#[serde(deny_unknown_fields)]` on\n`RulesConfig` / `PartialRulesConfig`. Today a typo in a rule name in\n`.fallowrc.json` is silently dropped, and the affected rule falls back\nto its hardcoded default severity, so the user's intent is lost without\nany signal.\n\n`crates/config/src/config/rules.rs` now ships a canonical\n`KNOWN_RULE_NAMES` list covering every canonical kebab-case rule name\nplus every documented `#[serde(alias)]` form, a small Levenshtein\nhelper, and `find_unknown_rule_keys(value, context)` returning a typed\n`Vec<UnknownRuleKey>` so tests can assert against the data without\nsubscribing to tracing output.\n\n`FallowConfig::load` walks the merged config value after `extends`\nresolution and emits one `tracing::warn!` per unknown key under `rules`\nor `overrides[i].rules`. Warnings are deduped process-wide via a\n`OnceLock<Mutex<FxHashSet<_>>>` keyed on `\"{context}::{key}\"`, so a\ncombined-mode run (`check` + `dupes` + `health` through one config\nload path) emits at most one warning per (context, key) pair instead\nof three.\n\nThree drift guards: a count assertion, a serialized-default walk that\nasserts every canonical name is in the list, and a per-entry roundtrip\nthrough `PartialRulesConfig` that catches stale or missing aliases.\n\nA wiring regression test asserts `FallowConfig::load` actually invokes\nthe warn pass on the merged value by introspecting a process-wide\ncounter that increments on every emitted warning; verified to fail\nwhen the wiring line is removed from `load`.\n\nPhase 2 (a future minor release) will flip `RulesConfig` and\n`PartialRulesConfig` to `#[serde(deny_unknown_fields)]` and turn the\nwarning into a hard config-load error. `_typos.toml` exempts the two\nintentional misspellings used in the new test fixtures (`unsued`,\n`dependnecy`).\n\nCloses #467\n\n* fix(config): tighten dedupe + thread-local wiring + source-level alias drift guard\n\nThree corrections raised by parallel review on the previous commit:\n\n1. Dedupe key now includes the config file path: two different config\n   files with the same typo each warn once, instead of the second one\n   being silenced by the process-wide cache. The warning text now also\n   names the config path so the user knows which file to fix.\n\n2. The wiring regression test was switched from a process-wide atomic\n   counter with an exact `+1` assertion to a thread-local capture\n   buffer. The previous shape was a CI flake risk under parallel test\n   execution: any other `FallowConfig::load` racing into the warn path\n   could increment the same counter between the test's `before` /\n   `after` reads. The thread-local buffer is installed for the duration\n   of the test's `body` closure and discarded after, so parallel\n   threads cannot collide.\n\n3. A source-level drift guard reads the `rules.rs` source at test\n   time, extracts every `alias = \"<kebab>\"` literal, and asserts each\n   one is in `KNOWN_RULE_NAMES`. The existing count and roundtrip\n   guards already caught new-field and stale-entry drift; this third\n   guard catches the harder case where a contributor adds a NEW alias\n   to an existing field but forgets to update `KNOWN_RULE_NAMES`.\n   Verified by mental-revert: removing an entry from the const fails\n   the test with `serde alias 'X' is in rules.rs source but missing\n   from KNOWN_RULE_NAMES`.\n\nRefs #467",
          "timestamp": "2026-05-20T20:08:57+01:00",
          "tree_id": "1c578c4c73e8866ab3705d9bdc8c52f54844c1de",
          "url": "https://github.com/fallow-rs/fallow/commit/be4f7e30099dc104dd57eb09400229b5e2d71022"
        },
        "date": 1779304288385,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "6bfda71d4bf4c04dc5b02ea7c88f273bbb14cb13",
          "message": "fix(unused-class-members): credit Playwright POM methods via helper-function fixtures\n\nThe #268 fix correlated `const test = base.extend<MyFixtures>(...)` definitions\nwith their callback-side member uses, but the helper form (`export function\nappTest() { return base.extend<MyFixtures>(...); }` consumed as `appTest()(...)`)\nreintroduced the false positive on nested POM methods. Three declarator shapes\nnow capture the helper (function declaration, arrow expression, function\nexpression) when the body is a single `return <call>` statement; a finalize-time\npass gates the `base` local on `@playwright/test`'s `test` named import and\nemits the same def-sentinel `MemberAccess` the analyzer already correlates with\nuse sentinels. Same-file helper chains propagate via a capped fixed-point pass\nover `(caller, callee)` aliases. The use-side `appTest()(...)` form is\nrecognised by extending `playwright_test_callee_name` with a `CallExpression`\nrecursion arm. Cross-file helper chains are out of scope.\n\nBumps `CACHE_VERSION` to 86 so warm caches refresh on upgrade.\n\nFixes #491.",
          "timestamp": "2026-05-20T20:56:00+01:00",
          "tree_id": "9bd374296be7afbf2ac3acc6ae50499efaec28fa",
          "url": "https://github.com/fallow-rs/fallow/commit/6bfda71d4bf4c04dc5b02ea7c88f273bbb14cb13"
        },
        "date": 1779307135318,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "a55c1b180a88e4afa4976bfbbd861c48f3af687d",
          "message": "fix(plugins): surface silent-fail diagnostics for collisions, enabler typos, invalid regex\n\n* fix(plugins): surface silent-fail diagnostics for collisions, enabler typos, invalid regex\n\nThree plugin-system silent-fail patterns now emit `tracing::warn!` at config\nload time instead of letting users hit confusing analysis output:\n\n1. Two plugins (built-in or external) declaring an identical config_patterns\n   string warn once per (pattern, owners) pair and document the\n   registration-order precedence rule. Sub-glob overlap is intentionally out\n   of scope; only byte-identical patterns collide.\n\n2. External plugin enablers that do not match any project dependency but\n   have a Levenshtein-close dep name warn with \"did you mean '<closest>'?\".\n   Plugins with a `detection` block or empty enablers are skipped; no warn\n   fires when no close dep exists, so plugins that legitimately do not\n   apply stay silent.\n\n3. Invalid regexes in PathRule.exclude_regexes / exclude_segment_regexes\n   (extracted by built-in plugins from user code) are validated eagerly\n   inside process_config_result; invalid patterns are dropped after a warn\n   that names the plugin and the source config file.\n\nLevenshtein helper lifted out of crates/config/src/config/rules.rs into a\nshared crates/config/src/levenshtein.rs module so both the rule-name path\n(closest_known_rule_name from #467) and the new enabler-typo path share one\ndistance/length policy.\n\nAll three diagnostics dedupe process-wide via OnceLock<Mutex<FxHashSet>>\nso combined-mode (check + dupes + health) emits at most one warning per\n(kind, key) pair. Tracing-warn matches #467 / #510's staged-migration\nprecedent: no exit non-zero, no new CLI flag.\n\nTested via 9 new unit tests in crates/core/src/plugins/registry/tests.rs.\n\nFixes #479\n\n* fix(plugins): preserve registration order in collision warning; add staged-migration notice\n\nPanel review of #479 flagged two refinements over the initial commit:\n\n1. detect_pattern_collisions previously sorted owners alphabetically, so\n   the warning's 'owners[0] runs first (registration order)' could disagree\n   with reality. Switch the per-pattern owner store to an insertion-ordered\n   Vec (with a sibling FxHashSet for self-dedup) so the winner field is\n   actually correct.\n\n2. All three diagnostics (collision, enabler typo, invalid regex) now end\n   with 'A future release may reject ...' so users see the staged-migration\n   intent on first encounter, matching #510's 'A future release will reject\n   unknown rule names' precedent. The collision message also now says\n   'identical pattern' explicitly so the byte-equal scope is visible from\n   the warning itself.\n\nCHANGELOG entry updated to document the byte-identical scope and the\nstaged-migration design.\n\nRefs #479",
          "timestamp": "2026-05-20T21:14:12+01:00",
          "tree_id": "60d8ea0e30e71a219fdec5dd3eee2b9975cf4e40",
          "url": "https://github.com/fallow-rs/fallow/commit/a55c1b180a88e4afa4976bfbbd861c48f3af687d"
        },
        "date": 1779308238314,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "92fc81875c763396c746ffa9573b79fdbafc357e",
          "message": "fix(boundaries): exit 2 on unknown zone references and redundant root prefixes\n\n* fix(boundaries): exit 2 on unknown zone references and redundant root prefixes\n\nBoundary validation in resolution.rs previously emitted `tracing::error!`\nand continued. A typo'd `from`/`allow`/`allowTypeOnly` zone name or a stale\nreference from a renamed zone left the rule active with a phantom target,\nand `is_import_allowed` returned `false` for every import to the\nnon-existent zone. Users saw a flood of false-positive boundary violations\n(\"ui cannot import from typo-zone\") with no signal that the config itself\nwas the problem; the `tracing::error!` was invisible in normal operation.\n\nThis change moves both `validate_zone_references` and\n`validate_root_prefixes` from gentle-fail into a hard config-load error\nreturned through `FallowConfig::validate_resolved_boundaries(root: &Path)`.\nValidation runs AFTER preset expansion and `expand_auto_discover`, so\nBulletproof's authored rule referencing the logical `features` group still\nloads cleanly once children are discovered. Every offending tuple lands in\none rendered diagnostic so users fix all entries in one pass.\n\nTwo wiring sites cover all real-world load paths:\n- `runtime_support::load_config_for_analysis` (CLI: check, dupes, health,\n  watch, audit, combined; renders `invalid boundary configuration:\\n  - ...`\n  via the existing `emit_error` ladder, exit code 2).\n- `core::lib::config_for_project` (LSP server, programmatic embedders via\n  `fallow_core::config_for_project`; surfaces as `FallowError::config`).\n\n`validate_zone_references` returns `Vec<UnknownZoneRef { rule_index, kind,\nzone_name }>` instead of `Vec<(usize, &str)>` so the diagnostic surfaces\nWHICH field (`from`/`allow`/`allowTypeOnly`) carries the typo.\n`validate_root_prefixes` returns `Vec<RedundantRootPrefix { zone_name,\npattern, root }>` instead of `Vec<String>`; the `Display` impl on\n`ZoneValidationError::RedundantRootPrefix` preserves the legacy\n`FALLOW-BOUNDARY-ROOT-REDUNDANT-PREFIX` tag so existing CI grep recipes\ncontinue to work. The `tracing::error!` calls in `resolution.rs::resolve()`\nare dropped; resolve() now relies on callers having validated upstream.\n\nTests:\n- 5 unit tests in `crates/config/src/config/parsing.rs` covering\n  happy-path, unknown-zone-aggregation, redundant-root-prefix, mixed,\n  Bulletproof-preset expansion.\n- 3 integration tests in `crates/cli/tests/exit_code_tests.rs` covering\n  the CLI exit-2 path end-to-end with stderr substring assertions.\n\nThe invalid-glob-pattern half of #468 was already closed by #486\n(`validate_user_globs` covering `boundaries.zones[].{patterns, root,\nautoDiscover}`); this PR completes the issue.\n\nFixes #468\nRefs #486, #499\n\n* fix(boundaries): wire #468 validation into `fallow config` and respect --format on `fallow list`\n\nReview of e4925042 surfaced two wiring gaps in the lesser-trafficked CLI\nsubcommands that bypassed the new boundary-validation contract:\n\n1. `fallow config` (config.rs) called `FallowConfig::load` /\n   `find_and_load` directly, never the new\n   `validate_resolved_boundaries`. A config with `allow: [\"typo-zone\"]`\n   exited 0 from `fallow config` while `fallow check` (correctly) exited 2.\n   Users hitting `fallow config` for debugging would see a false \"loaded\n   fine\" view. Validation now runs after the load, mirroring the analysis\n   path's contract.\n\n2. `fallow list` (list.rs) passed `OutputFormat::Human` to `load_config`\n   instead of threading `opts.output` through. `fallow list --boundaries\n   --format json` correctly exited 2 on bad boundary config, but the error\n   surfaced as human text on stderr instead of the structured\n   `{\"error\": true, \"message\": ..., \"exit_code\": 2}` JSON envelope on\n   stdout. Agents and CI consumers expecting the JSON contract saw raw\n   text; trivial one-line fix threads the user's actual format through.\n\n`run_config` gained an `output: OutputFormat` parameter (call site in\nmain.rs updated, six existing unit tests + one new one cover the new\nsignature). `run_list` no change to its public surface; the hardcoded\n`OutputFormat::Human` becomes `opts.output`.\n\nTests:\n- `fallow_config_subcommand_rejects_unknown_boundary_zone` (integration):\n  verifies exit 2 on the config subcommand human path.\n- `fallow_config_subcommand_json_format_emits_structured_error_envelope`\n  (integration): asserts the JSON envelope shape on stdout for\n  `fallow --format json config`.\n- `fallow_list_boundaries_json_format_emits_structured_error_envelope`\n  (integration): same shape assertion for `fallow --format json list\n  --boundaries`.\n- `run_config_rejects_unknown_boundary_zone_reference` (unit): in-process\n  exit-code check via `tempfile::tempdir`.\n\nRefs #468",
          "timestamp": "2026-05-21T08:39:35+01:00",
          "tree_id": "c7d48ae17d813d6f9588c6792e5199b44e08e134",
          "url": "https://github.com/fallow-rs/fallow/commit/92fc81875c763396c746ffa9573b79fdbafc357e"
        },
        "date": 1779349323635,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "7bf1fa2e4bfbb5e7368f073353aaa2bfc08a7996",
          "message": "fix(action,ci): surface gh api + pagination failures instead of silent degradation\n\nSix call sites in action/scripts/{analyze,review,comment}.sh and\nci/scripts/{review,comment}.sh previously masked gh api / curl_paginate\nfailures behind `2>/dev/null || true` and `... || echo '[]'` patterns.\nA transient 5xx during the changed-files lookup made the action run\nunscoped (every finding posted, not just findings on PR-changed lines);\na 502 on page 2 of an existing-comment dedup lookup made the action\npost N duplicate review threads on every retry.\n\nEach site now consumes the helper exit code via a two-step capture and\nemits structured diagnostics:\n\n- changed-files lookup failure (analyze.sh) emits a ::warning:: naming the\n  API failure mode and writes changed_files_unavailable=true to\n  GITHUB_OUTPUT; initialized to false unconditionally so downstream gates\n  always see a definitive value.\n\n- Multi-comment fingerprint dedup failure (review.sh) aborts the inline\n  review POST because N duplicate threads is materially worse than no\n  inline review. Exit policy splits on failure class: stderr matching a\n  permanent 4xx pattern (excluding 429, which is retry-eligible)\n  escalates to exit 1 for loud CI failure; 5xx / 429 / network errors\n  fall through to exit 0 so transient blips do not break PRs.\n\n- Summary-only dedup failure (comment.sh, review.sh summary branch)\n  posts a fresh summary anyway because a duplicate summary is collapsible\n  while a missing summary is silently broken. Two distinct markers\n  capture this: post_skipped_reason flips only on the multi-comment\n  abort, dedup_lookup_failed flips on any lookup failure including the\n  post-anyway paths.\n\n- GitLab template writes parallel sidecar artifacts (fallow-skip-reason.txt,\n  fallow-dedup-lookup-failed.txt) declared in artifacts: paths: so\n  downstream jobs can gate on them. review.sh only initializes a marker\n  when the file does not already exist, so comment.sh's prior `true`\n  value (when both steps run in sequence) is preserved rather than\n  clobbered. gitlab-ci.yml's existing `bash review.sh || echo \"WARNING:\n  ...\"` swallows our exit 1, so the 4xx escalation is advisory for the\n  default template; operators who want CI-fatal behavior can drop the\n  `|| echo` or gate on the sidecars.\n\n- action.yml exposes three new composite outputs: changed-files-unavailable,\n  post-skipped-reason, dedup-lookup-failed. The composite expression for\n  dedup-lookup-failed evaluates each step output's string value\n  explicitly (`== 'true'`) rather than relying on truthiness, since\n  non-empty strings (including the literal \"false\") evaluate truthy in\n  GitHub Actions expressions. Step IDs added to Post PR comment + Post\n  review comments.\n\n- mktemp files cleaned up via single `trap '... EXIT'` per script.\n\nThe bundled `fallow ci-template gitlab` payload at crates/cli/templates/ci/\nis kept byte-equivalent to the workspace sources via the existing\n`bundled_templates_match_workspace_sources` drift gate.\n\nRegression tests inject synthetic 5xx, 4xx, and retry-exhausted 429\nfailures on every affected call site and assert marker contracts plus\nabsence of duplicate POSTs. Added test covers the comment-before-review\nmarker preservation contract on the GitLab side.\n\nCloses #470",
          "timestamp": "2026-05-21T09:15:20+01:00",
          "tree_id": "93b7bd0b4d1e87ebde90078ffeecbd4e18185c17",
          "url": "https://github.com/fallow-rs/fallow/commit/7bf1fa2e4bfbb5e7368f073353aaa2bfc08a7996"
        },
        "date": 1779351466960,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "b099e2f6bca12ca9ea7b2d1876f5442de7461065",
          "message": "fix(graph): harden re-export chain resolution against silent truncation\n\n* fix(graph): harden re-export chain resolution against silent truncation\n\nTwo structural silent-fail bugs in Phase 4 re-export chain resolution:\n\n1. The fixpoint loop in resolve_re_export_chains capped iterations at 20\n   and emitted only a tracing::warn! when the cap was hit. Barrel chains\n   deeper than 20 hops silently under-credited references on the leaf.\n   The cap is now removed; the fixpoint terminates naturally because\n   each propagation helper adds references through an FxHashSet\n   dedup-by-from_file check, bounding monotone growth by |files| *\n   |exports|. A defensive safety backstop bounded by re_export_info.len()\n   + 1 iterations stays in place and logs tracing::error! if a future\n   regression violates monotonicity.\n\n2. Re-export cycles (a.ts: export * from './b' paired with\n   b.ts: export * from './a') and barrels that re-export from\n   themselves were silently absorbed by the iteration cap. They are now\n   detected up front via iterative Tarjan SCC over the (barrel, source)\n   edge subgraph and surfaced as one tracing::warn! per cycle or\n   self-loop with the member file paths.\n\n3. propagate_star_re_export's synthetic bridge stub hardcoded\n   is_type_only: false, so multi-hop export type * chains lost the\n   type-only flag at every synthesised hop. The stub now inherits\n   is_type_only from the triggering re-export edge. When both a\n   type-only and a value star edge reach the same source for the same\n   name, a synthetic_stubs side set tracks the stub identity so the\n   value edge can downgrade is_type_only: false. Real export type Foo\n   declarations on the source are never in the set and stay type-only.\n\n6 new regression tests cover: 21-hop and 25-hop chains (just over and\nwell past the old cap), a 3-node cycle non-blocking unrelated\npropagation, type-only star chains via both entry-point and named\nconsumer paths, contradictory type-only/value paths resolving to value,\nand self-re-export not panicking.\n\nNo CACHE_VERSION bump (no extract-layer change). No CLI surface, JSON\nshape, MCP tool, or companion-repo change. Surfacing the cycle\ndiagnostic as a structured AnalysisResults finding is tracked\nseparately as a follow-up.\n\nFixes #442\n\n* docs(changelog): link issue #515 for re-export cycle surfacing follow-up\n\n* docs(changelog): merge re-export bullet into existing Unreleased Fixed section\n\nThe post-rebase tree had two ### Fixed sections under [Unreleased]: a new\none above ### Added carrying the #442 bullet, and the pre-existing one\nbeneath ### Changed carrying #491/#479/#467/#480/#472/#427/#476. Keep-a-\nChangelog prescribes one subsection per category, so merge the new bullet\ninto the existing ### Fixed section.\n\n* test(graph): assert exact tracing::warn! payload on re-export cycles and self-loops\n\nAdds tracing-subscriber as a dev-dep on fallow-graph plus a scoped\nMakeWriter helper that captures warn output inside a single test block\nvia tracing::subscriber::with_default. Two new tests cover the gap that\nPR #516's review flagged as non-blocking: the existing structural tests\nprove cycles terminate without panic but never read the warn message,\nso a regression to a context-free \"cycle detected\" string would pass\nsilently.\n\n- re_export_cycle_warn_payload_lists_member_paths: 3-node cycle,\n  asserts the warn header, every member path, and the cycle_size=3\n  field appear in the captured output.\n- self_re_export_warn_payload_names_file: self-loop, asserts the warn\n  header and the offending file path appear in the captured output.\n\nThe capture helper is scoped to the test block (with_default rather\nthan try_init) so it never leaks across parallel test threads.\n\n* chore(graph): sync Cargo.lock for tracing-subscriber dev-dep",
          "timestamp": "2026-05-21T09:22:17+01:00",
          "tree_id": "b16f8fc165ef649ec790f2ce193a0a0eb8cb62f5",
          "url": "https://github.com/fallow-rs/fallow/commit/b099e2f6bca12ca9ea7b2d1876f5442de7461065"
        },
        "date": 1779351892494,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "4394edac78a1ad60bb94ee1ee44f78073e68451e",
          "message": "fix(regression): exit 2 on schema_version mismatch with regenerate hint\n\n`load_regression_baseline` in `crates/cli/src/regression/baseline.rs`\ndeserialized via `serde_json::from_str` without validating `schema_version`.\n`CheckCounts` carries `#[serde(default)]` on every field, so a baseline\nwritten under a different `REGRESSION_SCHEMA_VERSION` silently loaded with\nmissing fields defaulting to zero, masking real regressions and letting\nCI gates pass on a structurally invalid baseline.\n\nThe loader now validates `baseline.schema_version == REGRESSION_SCHEMA_VERSION`\nimmediately after parse, with two helpers (`format_schema_mismatch_error`,\n`format_missing_schema_version_error`) producing actionable messages that\nname the path, expected and actual versions, the writer fallow version,\nand a copy-pasteable `fallow check --save-regression-baseline <path>`\nregenerate command. `schema_version: 0` is special-cased as \"predates\nschema versioning\"; baselines missing the field entirely get the same\nhint instead of raw serde \"missing field\" noise. The pre-existing\nNotFound, read-error, parse-error paths plus the new mismatch path all\nroute through `emit_error`, so `--format json` CI consumers receive the\nstructured `{\"error\": true, \"message\": \"...\", \"exit_code\": 2}` envelope\non stdout instead of human text on stderr.\n\n`RegressionOpts` gains an `output: OutputFormat` field threaded through\n`compare_check_regression` into `load_regression_baseline`. The single-caller\n`build_regression_opts` helper is inlined into `DispatchContext::regression_opts`\nto keep the constructor under clippy's `too_many_arguments` limit. Existing\nbaselines with `schema_version: 1` continue to load unchanged; future\nschema bumps require regenerating.\n\nFixes #451.",
          "timestamp": "2026-05-21T09:34:37+01:00",
          "tree_id": "8d1793f02d64e543c622fb77a060716ab58e695e",
          "url": "https://github.com/fallow-rs/fallow/commit/4394edac78a1ad60bb94ee1ee44f78073e68451e"
        },
        "date": 1779352621783,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "eae99cc6d6592d55bcac3a5ea97665cb3a0ed01d",
          "message": "fix(suppress): surface unknown issue-kind tokens as stale findings\n\nSuppression markers with a typo or an obsolete issue-kind name no longer\nsilently discard the entire line. `// fallow-ignore-next-line\nunused-export, complexity-typo` now suppresses `unused-export` normally\nand surfaces `complexity-typo` as a `stale-suppression` finding so the\nuser sees the typo instead of losing their suppression in silence.\n\n`parse_issue_kind_list` in `crates/extract/src/suppress.rs` switches from\nreturning `Option<Vec<IssueKind>>` to `(Vec<IssueKind>, Vec<String>)`,\naccumulating known kinds alongside unknown tokens. The new\n`UnknownSuppressionKind` type on `ModuleInfo` carries each token through\nthe parser, cache, and graph layers; `SuppressionContext::find_stale`\nemits one extra `StaleSuppression` per unknown token, reusing\n`SuppressionOrigin::Comment` with a new additive `kind_known: bool` wire\nfield so JSON, MCP, and CI consumers can distinguish unknown-kind tokens\nfrom stale-but-known kinds without parsing prose. The\n`StaleSuppression::explanation()` and `display_message()` helpers branch\non `kind_known` to render `'<token>' is not a recognized fallow issue\nkind. Did you mean '<closest>'? Other tokens on this line still apply.`\nwith a Levenshtein hint when an existing kind is within edit distance 2;\nSARIF, CodeClimate, and compact pick up the same actionable copy via the\nnew helper.\n\nCACHE_VERSION bumps 86 to 87 so warm `.fallow/cache` directories pick up\nthe new field on upgrade. The bundled GitHub Action annotation and\nsummary jq scripts plus the GitLab CI summary jq branch on\n`origin.kind_known == false` to render the typo-fix copy instead of \"no\nlonger matches any active issue.\" `ModuleInfo` size assertion bumps 472\nto 496 bytes for the new `Vec<UnknownSuppressionKind>` field. The\n`docs/output-schema.json` regenerates with the additive optional\n`kind_known` (non-required), and the generated TypeScript bindings in\n`editors/vscode/src/generated/` and `npm/fallow/types/` flow through.\n\nFixes #449.",
          "timestamp": "2026-05-21T09:48:33+01:00",
          "tree_id": "dca450d6eecafd0ba5583259d5a1d6d15c313da6",
          "url": "https://github.com/fallow-rs/fallow/commit/eae99cc6d6592d55bcac3a5ea97665cb3a0ed01d"
        },
        "date": 1779353449372,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "3b2733f372944ecb2d88b51c56e277efb202bd24",
          "message": "fix(suppress): skip stale emission when rule severity is off\n\nSuppression markers for a rule currently disabled (rules.<kind> == \"off\",\nincluding per-file overrides.rules) no longer surface as stale-suppression\nfindings. SuppressionContext::find_stale resolves rules once per file via\nResolvedConfig::resolve_rules_for_path and skips emission when the\nsuppression's target kind has severity Off. The marker documents\nintentional dormancy and becomes valid again when the rule is re-enabled.\n\nBlanket markers without a kind continue to surface as stale when nothing\nmatches, since they are not anchored to any specific dormant rule.\n\nA new exhaustive severity_for_kind helper in fallow-core maps every\nIssueKind to its corresponding RulesConfig field, so a future IssueKind\nvariant triggers a compile error here.\n\nFixes #482",
          "timestamp": "2026-05-21T10:41:36+01:00",
          "tree_id": "4be6dbdf1d6290d05e4b22d872c64bf9cd1dad1c",
          "url": "https://github.com/fallow-rs/fallow/commit/3b2733f372944ecb2d88b51c56e277efb202bd24"
        },
        "date": 1779356650543,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "6fd51d1802ec2c1e78944d839f761e1b2bdba63c",
          "message": "test(stale-suppressions): relax exact-count assertion to lower bound\n\n`total_stale_suppressions_count` asserted `len() == 4` against the\nstale-suppressions fixture. Future additions to the fixture (or sibling\ntests that grow the fixture's stale surface) would break this test\nwithout surfacing a real regression. Each of the 4 documented findings\nis already covered by a dedicated presence assertion above, so the\ncount test's safety net is \"no expected finding is silently dropped\"\nwhich `>=` preserves.\n\nRelax the assertion to `>= 4` and update the rationale comment.",
          "timestamp": "2026-05-21T10:47:16+01:00",
          "tree_id": "9289079f54eb3cef4f1602224889c6a8892030e5",
          "url": "https://github.com/fallow-rs/fallow/commit/6fd51d1802ec2c1e78944d839f761e1b2bdba63c"
        },
        "date": 1779357001175,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "c224787ed950fa22c5d039f6f38358339e8b946f",
          "message": "fix(fix): refuse stale writes, batch commits atomically, compose cross-fixer edits\n\n`fallow fix` re-ran analysis in-process and then wrote each per-file rewrite\nvia a standalone `atomic_write`. If a parallel editor save, CI rebase, or\nother tool mutated a target file between the analysis read and the\nfix-time write, the line offsets computed during analysis landed on the\nwrong bytes and silently corrupted the file. Per-file writes also ran\nunbatched, so an OOM or transient I/O failure mid-run left the project in\na half-applied state where the surviving files' offsets no longer matched\nthe original analysis.\n\nCapture every parsed source file's xxh3 content hash during analysis (the\nsame value the extract cache already computes) and thread the\n`CapturedHashes` map through each fixer. Per-file entry recomputes the\nhash and emits a `skipped: true` record with `skip_reason: \"content_changed\"`\non mismatch; the run exits 2 so CI surfaces the mismatch instead of\ntreating a partial run as a clean no-op. The new `FixPlan` accumulator in\n`crates/cli/src/fix/plan.rs` stages every rewrite into a sibling\n`NamedTempFile`; the orchestrator commits the plan in one batch after all\nfixers run. Stage failure leaves every target file at its original\ncontent; rename failure mid-batch is reported per-path.\n\nTwo structural invariants the pre-refactor `atomic_write` provided were\npreserved explicitly: (1) the second fixer reads its source bytes from\nthe in-flight plan when the path is already staged, so cross-fixer\nsame-file edits compose into one coherent rewrite instead of overwriting\nvia last-write-wins; (2) the commit canonicalizes through symlinks so the\nfinal rename writes to the real target instead of replacing the link\nitself with a regular file.\n\nJSON envelope gains a top-level `skipped_content_changed: number` (always\npresent) and a new per-file entry shape\n`{type: \"skipped\", path: ..., skipped: true, skip_reason: \"content_changed\"}`\nin `fixes[]`. The existing `skipped` counter keeps its prior semantics\n(catalog / YAML guard skips only). `action/jq/summary-fix.jq` counts\nsuccessful fix attempts in its headline and surfaces\n`skipped_content_changed` in the prose. MCP `fix_preview` / `fix_apply`\ndescriptions and the VS Code `FallowFixResult` type document the new\nfield and skip reason.\n\nFive new regression tests cover round-trip clearing of targeted findings,\nbatch abort on a read-only target directory, the envelope-field contract,\ncross-fixer composition, and symlink follow-through.\n\nFixes #454.",
          "timestamp": "2026-05-21T10:59:03+01:00",
          "tree_id": "d682cc7ef0d9a814b4a6703777cad403627d6062",
          "url": "https://github.com/fallow-rs/fallow/commit/c224787ed950fa22c5d039f6f38358339e8b946f"
        },
        "date": 1779357830722,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "c53b74337579d8c5bb7c1ba73984d2de92285d5d",
          "message": "fix(config): preserve target file mode in atomic_write and FixPlan commit\n\n`NamedTempFile` creates the temp with mode `0600` by default. Both the\npre-existing `fallow_config::atomic_write` and the issue #454\n`FixPlan::commit` persisted that temp directly, so a target file\npreviously at `0644` ended up at `0600` post-write. Shared workspaces and\nCI runners that rely on group / other read permissions broke silently\nbecause the JSON output reported `applied: true` and the bytes on disk\nwere correct; only the mode bits had drifted.\n\nIntroduce `fallow_config::preserve_target_mode(temp, target)` as a thin\nhelper called between the temp write and the rename. When the target\nexists, copy its mode (lower 12 bits) onto the temp; when the target\ndoes not yet exist (fresh creation, e.g. the duplicate-exports config-add\nfallback writing `.fallowrc.json` for the first time), leave the temp's\ndefault mode in place so the user's umask still applies via whatever\n`NamedTempFile` produces. Windows ACLs persist with the underlying file\nacross `MoveFileEx`, so the helper is a no-op on non-Unix targets.\n\nThree new regression tests pin the contract: `atomic_write` against an\nexisting target at `0644` (must preserve), `atomic_write` against a\nfresh path (must produce a non-zero mode), and `FixPlan::commit` against\nan existing target at `0644` (must preserve). A real-world smoke against\nthe issue #454 reproducer confirms the fix flows through:\n`fallow fix --yes` on a `0644` source file produces a `0644` post-fix\nfile instead of the previous `0600`.",
          "timestamp": "2026-05-21T11:15:24+01:00",
          "tree_id": "7261f97e84097f2d7885fd999984ba6d8c111ea4",
          "url": "https://github.com/fallow-rs/fallow/commit/c53b74337579d8c5bb7c1ba73984d2de92285d5d"
        },
        "date": 1779358669107,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "8c3c68497551b1d29543c804460321996a0a5e75",
          "message": "fix(workspace): surface malformed package.json and unreachable glob matches\n\nSeven silent-drop sites in crates/config/src/workspace/{mod.rs,parsers.rs}\nbecome typed WorkspaceDiagnostic values carrying a kind discriminator\n(undeclared-workspace, malformed-package-json, glob-matched-no-package-json,\nmalformed-tsconfig, tsconfig-reference-dir-missing). Severity is per site: a\nmalformed root package.json exits 2 at config load (mirrors #468); declared\nworkspace package.json malformed warns and continues so analysis still runs\non the rest; glob-matched-no-package-json warns only when the path is not in\nthe conventional skip list and not in user ignorePatterns; shallow-scan\ncandidates stay silent because the user did not declare them; missing\ntsconfig.json stays silent. Diagnostics emit via deduplicated tracing::warn!\n(process-wide OnceLock keyed on canonical-root + kind + path) and land in a\nshared registry so the JSON envelope on check / dupes / health carries a new\noptional workspace_diagnostics[] field.\n\nA new fallow list --workspaces flag and a dedicated fallow workspaces\nsubcommand expose the discovery topology for introspection. The legacy\ndiscover_workspaces back-compat wrapper now routes through a silent\ncollector that does NOT emit, so sibling analyze + file-discovery callers\nno longer re-warn on paths the user already excluded via ignorePatterns.\nThe analyze pipeline's undeclared-workspace pass also folds into the same\nregistry and suppresses entries that already carry a MalformedPackageJson\ndiagnostic, so a typo'd workspace is no longer double-reported. Path\nnormalisation handles macOS /private/tmp canonicalisation symmetrically;\nPackageJson::load strips a leading UTF-8 BOM so Windows-authored or\nvite-fixture-style configs do not surface as false positives.\n\nFixes #473.",
          "timestamp": "2026-05-21T11:23:46+01:00",
          "tree_id": "0770a3196b14e7e72198f1e234c0302132f9905a",
          "url": "https://github.com/fallow-rs/fallow/commit/8c3c68497551b1d29543c804460321996a0a5e75"
        },
        "date": 1779359166893,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "85f3507ae3fa57993d3f6517eb8b50f97b62d45f",
          "message": "fix(signal): install SIGINT/SIGTERM handlers + reap spawned subprocesses\n\n* feat(signal): install SIGINT/SIGTERM handlers + scoped child registry (#477)\n\nWires a process-wide signal handler into the CLI so long-running\nspawned children (fallow-cov sidecar, npm install, self-invoked\nfallow health, git log churn analysis, git worktree audit ops) are\nkilled when the user hits Ctrl+C or CI sends SIGTERM.\n\nNew module `crates/cli/src/signal/`:\n- `ChildRegistry` keyed by monotonic AtomicU64, stores PIDs only;\n  signal handler kills by PID (libc kill -9 on Unix, TerminateProcess\n  on Windows) so the wrapper can own the Child outright and call\n  wait_with_output normally.\n- `ScopedChild` RAII wrapper: register on spawn, deregister on\n  wait/drop.\n- Unix listener: signal-hook 0.4 iterator on a dedicated std::thread\n  (blocking sigwait sidesteps async-signal-safety constraints).\n- Windows listener: SetConsoleCtrlHandler via windows-sys\n  (CTRL_C/BREAK -> 130, CTRL_CLOSE/LOGOFF/SHUTDOWN -> 143).\n- One-shot drain guard + bounded try_wait budget (500ms Unix, 1500ms\n  Windows).\n\nRefactored spawn sites to ScopedChild:\n- crates/cli/src/health/coverage.rs::run_sidecar (fallow-cov)\n- crates/cli/src/coverage/mod.rs::install_sidecar + run_health_analysis\n- crates/cli/src/audit.rs BaseWorktree::{create, reuse_or_create} +\n  remove_audit_worktree\n- crates/core/src/churn.rs::analyze_churn_events via set_spawn_hook\n  function pointer so core stays cli-independent\n\nWatch mode (crates/cli/src/watch.rs) opts into cooperative shutdown\nvia GracefulModeGuard: SIGINT only sets a flag, watch loop polls via\nrecv_timeout(200ms) and exits cleanly with code 0 because Ctrl+C is\nthe documented termination path.\n\nLSP shutdown (crates/lsp/src/main.rs) now cancels via Arc<AtomicBool>:\nrun_analysis checks the flag at entry and after spawn_blocking so\npost-shutdown publishes are suppressed. Honest doc-comment: rayon\nwork in flight runs to completion on the blocking thread pool; the\n250ms grace is for quiescence, not cancellation.\n\nTests:\n- 8 unit tests under crates/cli/src/signal/*\n- 2 integration tests under crates/cli/tests/signal_tests.rs using\n  sub-process pattern via env!(\"CARGO_BIN_EXE_fallow\") +\n  FALLOW_TEST_SIGNAL_HELPER=1; asserts exit 130/143 + inner sleep PID\n  reaped within 5s.\n- 2 LSP unit tests verifying shutdown flips cancellation and\n  run_analysis short-circuits afterwards.\n\nCloses #477\n\n* fix(signal,docs): apply review fixes + changelog + cli-crate rule note (#477)\n\nReview fixes from rust-reviewer + lsp-reviewer:\n\n- Drop unused `ScopedChild::kill` method (was YAGNI; signal handler\n  covers cancel via PID side channel).\n- Remove dead `EXIT_CODE` static from signal/windows.rs (its stored\n  value was never read; `handle_signal` takes `exit_code` as a\n  parameter directly).\n- Update registry.rs + scoped_child.rs module docs to say `kill -9\n  <pid>` shell exec on Unix instead of the misleading `libc::kill`\n  (we avoid adding `libc` as a workspace dep).\n- Drop the unnecessary `pid as i32` cast + #[expect] annotation in\n  kill_pid (the shell command takes a string).\n- Tighten `scoped_child::output` to unconditionally set\n  `stdin(Stdio::null())` plus piped stdout/stderr, matching\n  `Command::output` semantics exactly.\n- Replace the vacuous `try_lock().is_ok()` assertion in the LSP\n  short-circuit test with `backend.results.read().await.is_none()`,\n  which is the actual post-condition that proves cancellation\n  short-circuited `spawn_blocking`.\n\nDocs:\n- CHANGELOG.md [Unreleased] entry under Fixed.\n- .claude/rules/cli-crate.md `signal/` section with adoption\n  guidance + cross-platform notes.\n\nRefs #477\n\n* fix(signal): codex review fixes for #477\n\nTwo BLOCK-level findings from parallel /fallow-review (Codex):\n\n1. **changed_files.rs git subprocesses were unregistered.**\n   crates/core/src/changed_files.rs:117,147 still called raw\n   git_command(cwd,...).output() through git_env, so SIGINT delivered\n   to the parent during watch + --changed-since left git rev-parse /\n   git diff / git ls-files children running. Added the same\n   ChurnSpawnHook-style function pointer as crates/core/src/churn.rs\n   (set_spawn_hook + spawn_output) and installed it from cli's main()\n   pointing at signal::scoped_child::output. Core stays cli-\n   independent; the indirection costs nothing for embedders / tests\n   that don't install a hook.\n\n2. **Watch graceful mode skipped registry drain.**\n   handle_signal returned early on GRACEFUL=true BEFORE\n   drain_and_kill, so a Ctrl+C during analyze_and_report (which spawns\n   git via changed_files / churn) let those git subprocesses run to\n   completion - defeating the contract issue #477 spelled out for\n   watch mode. Moved drain_and_kill BEFORE the graceful check; the\n   graceful path now always reaps in-flight children but returns\n   instead of process::exit, letting the watch loop's outer\n   is_shutting_down() check terminate cleanly with exit 0.\n\nRegression coverage:\n- New integration test sigint_in_graceful_mode_drains_children_but_does_not_exit\n  asserts the post-fix behavior. Achieved via a new\n  FALLOW_TEST_SIGNAL_HELPER_GRACEFUL=1 env-var gate on the test-helper\n  subcommand that flips graceful mode before spawning the inner sleep.\n- Existing integration tests for non-graceful 130/143 paths still\n  pass.\n\nAlso (non-blocking CONCERN from Codex):\n- Documented the PID-recycle race in scoped_child.rs module doc\n  (microseconds-wide window between wait_with_output returning and\n  deregister; consequence is one stray SIGKILL during shutdown).\n\nRefs #477",
          "timestamp": "2026-05-21T12:37:23+01:00",
          "tree_id": "5f72da805ba34021671aae06988c1c6010b26b0b",
          "url": "https://github.com/fallow-rs/fallow/commit/85f3507ae3fa57993d3f6517eb8b50f97b62d45f"
        },
        "date": 1779363645069,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "ab3a66f3b831f5bb9c9720d837d0faab77aceb91",
          "message": "fix(ci-template): symlink bundled GitLab templates to workspace sources\n\nReplaces the byte-copy of `crates/cli/templates/ci/{gitlab-ci.yml,\nscripts/comment.sh, scripts/review.sh}` with git symlinks pointing at the\ncanonical workspace `ci/` files. Contributors now edit one source of\ntruth; `cargo package` dereferences the symlinks into regular files so\nthe published crate stays self-contained.\n\nRemoves the `bundled_templates_match_workspace_sources` byte-drift test\nin favour of the inode equivalence the symlink provides. The companion\n`gitlab_ci_template_for_loops_match_vendored_files` test still guards\nthe `GITLAB_FILES` list against `for f in ...` loop drift inside the\ntemplate.\n\nDocuments the Windows prerequisite (`git config --global core.symlinks\ntrue`) in `CONTRIBUTING.md` and updates `.claude/rules/cli-crate.md` to\ndescribe the new packaging contract.\n\nFixes #518.",
          "timestamp": "2026-05-21T12:49:52+01:00",
          "tree_id": "0e813a531d3e692f016e49c9dc118c7dc1238478",
          "url": "https://github.com/fallow-rs/fallow/commit/ab3a66f3b831f5bb9c9720d837d0faab77aceb91"
        },
        "date": 1779364404304,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "1e4e082a906ced586687ddf01f063f1145386dca",
          "message": "fix(cache): write-time size cap + config-aware invalidation\n\n* feat(cache): write-time cap + LRU eviction + config-aware invalidation\n\nCloses #466.\n\nTwo structural gaps in `crates/extract/src/cache/`:\n\n1. Write-time size cap. The 256 MB cap was only enforced at load time, so\n   long-lived developer caches silently discarded everything once they crossed\n   the threshold. `CacheStore::save` now encodes once, evicts LRU entries when\n   the encoded size exceeds 80% of the cap, re-encodes after eviction, and\n   writes atomically via tmp+rename. The eviction floor honors the user's cap\n   (single-entry overshoot logs `tracing::warn!` rather than silently lying).\n\n   `last_access_secs: u64` lives on `CachedModule`. It is set at insertion\n   time (cache miss or content change) and NOT refreshed on cache-hit reads;\n   refreshing on read would collapse the LRU because `update_cache`\n   iterates every in-scope file every run.\n\n   Override via `FALLOW_CACHE_MAX_SIZE` env var or `cache.maxSizeMb` config\n   field (env var wins). No CLI flag, matching the ecosystem convention\n   (knip, eslint, biome, turbo all use config or implicit caps).\n\n2. Config-aware invalidation. The cache key is `(file_path, content_hash)`\n   plus a global `CACHE_VERSION`. Disabling a plugin or removing a\n   `framework: [...]` entry left the cache stale. The cache header now\n   carries a `config_hash: u64` computed via xxh3 over a sorted list of\n   active external plugin names plus inline framework definition names. A\n   mismatch on load discards the cache (same shape as a version mismatch).\n\n   ADR-009 documents the narrow ingredient set, the rationale for excluding\n   `entry`/`ignorePatterns` (detection inputs, not extraction inputs), the\n   plugin-file-content limitation, and the contract for adding new\n   ingredients.\n\n`CACHE_VERSION` bumps 87 -> 88 (new field on `CachedModule`, new header\nfield on `CacheStore`). A `tracing::info!` fires on the version-mismatch\nload path so users see the one-time rebuild.\n\nEviction is `tracing::debug!` by default and promotes to `tracing::info!`\nonly when at least 25% of entries are removed in a single save, so warm-cache\nsaves stay silent.\n\nPre panel-review: dropped the proposed `--cache-max-size` global flag,\nadopted env-var + config-field surface, replaced two-encode eviction with\nsingle-encode plus an estimated cost check, replaced the \"100-entry floor\"\nwith always-honor-cap-plus-warn, added atomic save.\n\n* fix(cache): preserve last_access_secs on metadata-only refresh + safe BPS math\n\nPost review-fix for #466.\n\nTwo correctness gaps the rust-reviewer surfaced:\n\n1. `update_cache`'s `touch`-handling branch (mtime/size differ, content\n   hash matches) previously rebuilt the cache entry via `module_to_cached`,\n   which stamps the current epoch second into `last_access_secs`. Result:\n   any build pipeline that `touch`es files before invoking fallow (common\n   with sed-based codegen and `make` rebuilds) would refresh every entry's\n   LRU recency on every run, defeating the eviction order. Now: the\n   refreshed entry preserves the existing `last_access_secs`, so the LRU\n   continues to discriminate even across `touch`-heavy workflows.\n\n2. `max_size_bytes.saturating_mul(EVICTION_TRIGGER_BPS) / 10_000` could\n   saturate at pathologically-large caps (above ~2.3 PB) and produce a\n   trigger threshold half of the intended value. Divide-first ordering\n   keeps the arithmetic well below `usize::MAX` at every realistic cap,\n   with at most 0.008% rounding error. Applied to both the trigger and\n   target computations. `initial_entries * EVICTION_SIGNIFICANT_BPS` stays\n   multiply-then-divide since `initial_entries` is bounded by the file\n   count (typically 100k-1M) and small caches need the precision to keep\n   the significance threshold non-zero.\n\n* docs(changelog): cache hardening Unreleased entry for #466\n\n* fix(cache): honor user cache cap on load + emit upgrade log on decode fail\n\nPost /fallow-review + Codex BLOCK fixes for #466.\n\n(1) `CacheStore::load` now takes `max_size_bytes` so a user setting\n    `cache.maxSizeMb = 512` (or `FALLOW_CACHE_MAX_SIZE=512`) can write a\n    400 MB cache and load it back; the previous code gated load on the\n    hardcoded `DEFAULT_CACHE_MAX_SIZE` (256 MB) and silently discarded any\n    larger cache on the next run. The load ceiling is now\n    `max(max_size_bytes, DEFAULT_CACHE_MAX_SIZE)` so a misconfigured tiny\n    cap (e.g. `FALLOW_CACHE_MAX_SIZE=1`) does NOT trash a valid existing\n    cache; user caps take effect on the next SAVE via the eviction logic.\n    All four load callsites updated (`core/lib.rs`, `cli/flags.rs`,\n    `cli/health/mod.rs`, `cli/coverage/analyze.rs`) via a new\n    `fallow_core::resolve_cache_max_size_bytes(&config)` helper.\n\n(2) The upgrade `tracing::info!(\"Cache format upgraded, rebuilding ...\")`\n    log now fires on bitcode decode FAILURE as well as version mismatch.\n    Across a `CACHE_VERSION` bump the on-disk schema typically changes\n    shape, so the new `CacheStore` struct cannot deserialize old bytes\n    and bitcode returns an error before reaching the version check.\n    The old code went silent on this common path; now both paths emit\n    the same info log.\n\n(3) Regenerated `schema.json` to publish the new `cache.maxSizeMb`\n    config field + `CacheConfig` definition for IDE autocomplete.\n\n(4) Added `FALLOW_CACHE_MAX_SIZE` to the in-repo env var inventories\n    (`CLAUDE.md`, `.claude/rules/cli-crate.md`) so future contributors\n    discover it. Companion-repo docs already carry it.\n\nTwo new regression tests in `crates/extract/src/cache/tests.rs`:\n- `cache_load_honors_user_max_size_above_default`: covers both the\n  \"user cap > default\" load path and the \"user cap < default does not\n  discard valid cache\" floor semantics.\n- `cache_load_returns_none_on_bitcode_decode_failure`: covers the\n  upgrade-path decode failure that the old test (which mutated the\n  version byte inside the new schema) did not exercise.",
          "timestamp": "2026-05-21T12:57:52+01:00",
          "tree_id": "ed9d1910ed8aaf810bebd8677dc6008b534a7007",
          "url": "https://github.com/fallow-rs/fallow/commit/1e4e082a906ced586687ddf01f063f1145386dca"
        },
        "date": 1779364871541,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "7b6ae40f93ded729402406f422930214763f3089",
          "message": "fix(migrate): warn on dropped knip rules + glob-drift caveat\n\n`fallow migrate` previously dropped three classes of knip input without\ndiagnostic: rule keys under `rules` / `exclude` / `include` that were\nneither in `KNIP_RULE_MAP` nor in `KNIP_UNMAPPABLE_ISSUE_TYPES` (typos,\nfuture knip rules, internal rules the migrator had not yet catalogued)\ndisappeared from the generated config, and `entry` / `ignorePatterns`\nglobs were copied verbatim with no statement about knip's glob engine vs\nfallow's `globset` potentially diverging on corner cases.\n\n`warn_unmapped_rule_key` in `crates/cli/src/migrate/knip_fields.rs` now\nemits a `MigrationWarning` for every untranslated key across all three\nfields, with two shapes: documented-unmappable issue types keep the\nexisting message; completely-unknown keys get a new \"unknown knip issue\ntype\" message with a docs-URL suggestion. `run_migrate` appends a single\n`Note:` line after the warnings section when knip was a migration source\nAND the migrated config carries `entry` or `ignorePatterns`, suppressed\nfor jscpd-only and rules-only knip configs. The warnings header is now\nsingular/plural-aware since a single typo'd rule is the most common\ncount-one case. Content-detected `--from custom-name.json` paths are\ntagged internally with `(knip config)` so the glob caveat fires through\nthat branch; a `source_head` helper strips the tag (via `rsplit_once`\nplus closing-paren guard, so paths containing their own ` (...)` segment\nare preserved) before printing the user-visible \"Migrated from:\" line\nand the generated `// Migrated from ...` header. `OutputFormat::pick`\nruns through the same helper so `.jsonc` auto-mirror keeps working\nthrough tagged sources.\n\nA new `migrate_roundtrip_globs_match_knip_documented_semantics`\nintegration test builds a Next.js-shaped fixture project, runs the\nmigrator, runs `fallow list --files` against the migrated config, and\nasserts the discovered file set exactly matches a hand-recorded ground\ntruth derived from knip's documented glob semantics; new unit tests\ncover the unknown-key warning at all three field paths, the glob-caveat\ngating across knip / jscpd / combined sources, the `source_head` edge\ncases (path with parens, unclosed paren, empty input), and a small set\nof `knip_glob_equivalence_*` assertions documenting where both engines\nagree today plus one negative case for `!` negation drift.\n\nFixes #457.",
          "timestamp": "2026-05-21T13:12:17+01:00",
          "tree_id": "c8d51d269fb703648629e8b71495d2cba501e478",
          "url": "https://github.com/fallow-rs/fallow/commit/7b6ae40f93ded729402406f422930214763f3089"
        },
        "date": 1779365691746,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
            "unit": "%"
          }
        ]
      }
    ]
  }
}