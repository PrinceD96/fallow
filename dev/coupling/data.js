window.BENCHMARK_DATA = {
  "lastUpdate": 1780037048503,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Module Coupling": [
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "92e2533d695ad798636f8e5e072c87085928c647",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.78.0",
          "timestamp": "2026-05-22T14:44:02+02:00",
          "tree_id": "407ba1d548c54e39b5efb1729371b2af2aae0974",
          "url": "https://github.com/fallow-rs/fallow/commit/92e2533d695ad798636f8e5e072c87085928c647"
        },
        "date": 1779453906907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b467e04c1377424747107ce1554a82bf64687a22",
          "message": "fix(ci): silence two more Windows-only clippy regressions on `main`\n\nSibling to PR #587 and the v2.78.0 release commit's mcp tests fix. Rust 1.95's\nstrict `-D warnings` surfaced two more Windows-only paths on the post-release\nci.yml run for main:\n\n- `crates/cli/src/ci_template.rs::set_executable` Windows stub returns\n  `std::io::Result<()>` to match the Unix signature so the unconditional\n  caller can `?`-propagate without `#[cfg]` branching. The Windows body is\n  trivially `Ok(())`, so clippy's `unnecessary_wraps` fires. Suppress via\n  `#[expect(clippy::unnecessary_wraps, reason = \"...\")]` on the Windows\n  stub; matching the Unix signature is load-bearing for the caller.\n\n- `crates/cli/src/signal/scoped_child.rs::assert_deregistered` test helper\n  is only called from two `#[cfg(unix)]` tests in the same module. Gating\n  the helper itself with `#[cfg(unix)]` aligns it with its callers and\n  silences the `dead-code` lint on Windows.\n\nBoth are post-release CI fixes; v2.78.0 binaries are unaffected. Refs #447.",
          "timestamp": "2026-05-22T16:15:53+02:00",
          "tree_id": "05dfc715ccb9403790a2796c1247b4c3dd63fee6",
          "url": "https://github.com/fallow-rs/fallow/commit/b467e04c1377424747107ce1554a82bf64687a22"
        },
        "date": 1779459419290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
          }
        ]
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
          "id": "721f47b3d036b2582f6acd68b32693713dc71f0c",
          "message": "fix(cli): silence Windows-only dead_code on ScopedChild::id (#595)\n\nAfter PR #587 and b467e04c closed the bulk of the cfg(windows) clippy hits, one Rust 1.95 lint remained that POSIX clippy never sees: ScopedChild::id is consumed only by the cfg(unix) signal_test_helper in main.rs; on Windows the helper is excluded so the method has no caller. Tag with #[cfg_attr(not(unix), expect(dead_code))] to preserve the symmetric public surface for embedders rather than gating the method itself with #[cfg(unix)].\n\nPOSIX clippy + workspace tests stay green.\n\nRefs #561",
          "timestamp": "2026-05-22T17:47:50+01:00",
          "tree_id": "991866f70fad5320edde9b52b7ead5ebbaeb88f4",
          "url": "https://github.com/fallow-rs/fallow/commit/721f47b3d036b2582f6acd68b32693713dc71f0c"
        },
        "date": 1779468536655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7f89de4fc78789364b4d35df1a7e647ed783e316",
          "message": "chore: release v2.78.1",
          "timestamp": "2026-05-22T19:06:03+02:00",
          "tree_id": "35d64bc4b79b7ac57ab36da1c73cfc80ecd3f260",
          "url": "https://github.com/fallow-rs/fallow/commit/7f89de4fc78789364b4d35df1a7e647ed783e316"
        },
        "date": 1779469645474,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "dfa5b8996744d934a8173a793473f192f51ed53d",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.78.1",
          "timestamp": "2026-05-22T19:38:31+02:00",
          "tree_id": "c92064d5310efe013a6cd73c0826a354f98c9210",
          "url": "https://github.com/fallow-rs/fallow/commit/dfa5b8996744d934a8173a793473f192f51ed53d"
        },
        "date": 1779471572146,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
          }
        ]
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
          "id": "8604f89c14304bd43d3394782b736ffc983bce9a",
          "message": "fix(cli): gate scoped_child::tests module behind cfg(unix) (#599)\n\nAfter PR #595 and the v2.78.1 follow-up release made assert_deregistered cfg(unix), every test inside scoped_child::tests is cfg(unix) (they all exec /bin/sh / true / echo). On Windows the module reduces to just use super::*;, which Rust 1.95's -D unused-imports flags.\n\nGate the module itself with #[cfg(all(test, unix))] so the whole suite (and its imports) only compile when the bodies have a chance to run. No Windows test loss because there were no Windows tests in this module to begin with.\n\nRefs #561",
          "timestamp": "2026-05-22T18:40:15+01:00",
          "tree_id": "498d8a4c02a390681e72aafa4e36372e6f4547e1",
          "url": "https://github.com/fallow-rs/fallow/commit/8604f89c14304bd43d3394782b736ffc983bce9a"
        },
        "date": 1779471681698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
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
          "id": "57110c3385106100bd0b3bc431632db66c1fab18",
          "message": "fix: reduce Wrangler, Content Collections, and loader false positives (#596)\n\nReduces false positives across three framework / runtime conventions:\n\n* Cloudflare Workers: read `wrangler.{toml,json,jsonc}` for the `main:`\n  worker entry plus `env.<name>.main` overrides, and widen the static\n  glob to `src/{index,worker}.{ts,tsx,js,jsx,mts,mjs}` so JSX worker\n  entries (rwsdk, React Router worker, Hono on Workers) stay reachable.\n\n* Node `module.register()`: credit loader-hook exports (`initialize`,\n  `resolve`, `load`, `globalPreload`, plus the legacy `getFormat`,\n  `getSource`, `transformSource` for projects still on older Node) on\n  the resolved loader target so they survive `unused-export` detection.\n  Resolves both literal-string and `new URL(...)`-bound specifiers,\n  including the conditional `condition ? srcUrl : distUrl` shape.\n\n* Content Collections: new plugin marking\n  `content-collections.{ts,tsx,js,jsx,mts,mjs,cts,cjs}` as a framework\n  entry and crediting the `@content-collections/*` tooling. Activates on\n  any of `@content-collections/{core,vite,next,solid-start,remix-vite,qwik,vinxi}`\n  so projects that only list a framework integration at the top level\n  (the common case) are still detected.\n\nBumps the extraction cache version so users on warm caches pick up the\nloader-hook credit on first run after upgrading.\n\nCloses #588\nCloses #589\nCloses #590",
          "timestamp": "2026-05-22T19:53:19+01:00",
          "tree_id": "3c6695a333e7ae1ea11cd865ccef53dbd3e2019f",
          "url": "https://github.com/fallow-rs/fallow/commit/57110c3385106100bd0b3bc431632db66c1fab18"
        },
        "date": 1779476059809,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 301,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 688,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5a4bcc0b8c0498059a19894948d554e72716f746",
          "message": "docs: reposition fallow as codebase intelligence",
          "timestamp": "2026-05-22T21:34:50+02:00",
          "tree_id": "b890279d99ac3adf9069bede3ddb65d93175a2ae",
          "url": "https://github.com/fallow-rs/fallow/commit/5a4bcc0b8c0498059a19894948d554e72716f746"
        },
        "date": 1779478566238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 301,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 688,
            "unit": "count"
          }
        ]
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
          "id": "07b784a4b81c774ed3367b04678a2fa9c907ee05",
          "message": "fix(unused-class-members): credit Playwright helper fixtures\n\nPlaywright users can wrap base.extend in exported helper functions that do local setup before returning the extended test. The extractor previously only recognized helper bodies whose sole statement was return base.extend, so nested fixture page-object methods could be reported as unused.\n\nThis updates helper-function extraction to inspect the final returned call while preserving the existing direct-return and alias-chain behavior. The extraction cache is bumped because cached modules from older builds can miss the fixture definition sentinels.\n\nRegression coverage adds an extractor unit test plus an integration fixture that checks both the local-setup helper path and a direct-return control path, while still reporting genuinely unused methods.\n\nFixes #586.",
          "timestamp": "2026-05-22T20:46:21+01:00",
          "tree_id": "91b82ce3b832350e276d7a95c4ea2e3fd676077e",
          "url": "https://github.com/fallow-rs/fallow/commit/07b784a4b81c774ed3367b04678a2fa9c907ee05"
        },
        "date": 1779479289640,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 301,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 688,
            "unit": "count"
          }
        ]
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
          "id": "e63fbe4d1783276468f87bd81ca022fe8d7a5d48",
          "message": "fix(cli): polish human summary output\n\nCombined human summary output now lets the combined renderer own the section headings while the per-analysis summary renderers suppress their duplicate titles. The report context carries that choice through dead-code, duplication, and health output without changing JSON or CI formats.\n\nExplain accepts issue labels split across words, so commands like `fallow explain unused files` resolve to the same rule metadata as the hyphenated form. Config-loaded notices are deduped by canonical config path so combined runs do not repeat the same line while separate configs still report independently.",
          "timestamp": "2026-05-22T21:05:15+01:00",
          "tree_id": "dcca61d3d8ed640dbc187769c5032fa093b32c53",
          "url": "https://github.com/fallow-rs/fallow/commit/e63fbe4d1783276468f87bd81ca022fe8d7a5d48"
        },
        "date": 1779480395412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 301,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 688,
            "unit": "count"
          }
        ]
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
          "id": "4e7eecf09fdb817b09e0d4654cf6f1f962f4d8d4",
          "message": "fix(tanstack): suppress generated route tree imports\n\nTanStack Router and Start projects commonly import the generated\nroute tree as ./routeTree.gen before src/routeTree.gen.ts exists in a\nclean checkout. That framework artifact was reported as an unresolved\nimport even though TanStack tooling creates it during codegen.\n\nRegister /routeTree.gen as a TanStack Router generated import suffix\nthrough the existing plugin hook. The suppression stays plugin-gated,\nso non-TanStack projects still report the same missing import.\n\nAdd a regression fixture with an active TanStack Router project, no\ngenerated route tree file, and a separate missing import control. The\ntest locks in both the false-positive fix and the ordinary unresolved\nimport behavior.\n\nFixes #646.",
          "timestamp": "2026-05-22T21:17:01+01:00",
          "tree_id": "2063a9403501a471813b45358e0f121025b00554",
          "url": "https://github.com/fallow-rs/fallow/commit/4e7eecf09fdb817b09e0d4654cf6f1f962f4d8d4"
        },
        "date": 1779481107605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 301,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 688,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mike@mike-engel.com",
            "name": "Mike Engel",
            "username": "mike-engel"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cdc1f078a43b692b968ea393adcea07f4f14c06",
          "message": "feat(glimmer): add support for strict-mode glimmer/ember\n\nAdds native support for Ember strict-mode glimmer components (.gts, .gjs):\n\n- New ember.js / glimmer / embroider plugin (97 total framework plugins)\n- Scan glimmer <template> blocks for imported-binding usage, including triple-stash helpers\n- Resolve .ts/.js imports to sibling .gts/.gjs files\n- Skip template-placeholder specifiers in HTML asset scanner\n- ember-classic integration fixture\n- CACHE_VERSION 95\n\nCloses #369.",
          "timestamp": "2026-05-22T21:51:29+01:00",
          "tree_id": "63434c0b9548677a685b7478d1a9257c8a102e90",
          "url": "https://github.com/fallow-rs/fallow/commit/2cdc1f078a43b692b968ea393adcea07f4f14c06"
        },
        "date": 1779483147492,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
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
          "id": "9a142be9494a3779f06db016f54080a84010c652",
          "message": "fix(jsx): ignore generic JSX resource attributes as side-effect imports\n\nBefore, lowercase intrinsic `<script src=\"...\">` and\n`<link rel=\"stylesheet|modulepreload\" href=\"...\">` literals inside JSX\nand TSX files emitted synthetic `SideEffect` imports via the AST\nvisitor, so SSR-style serializer tests (notably Hono's JSX layout\ntests) produced large false `unresolved-imports` clusters for runtime\nHTML metadata that is not bundler-resolved.\n\nAfter, the JSX visitor path that recorded those attributes is removed.\nHTML files keep their dedicated asset scanner, and bare `html` tagged\ntemplates in JS/TS continue to extract asset references via the\nregex-based HTML scanner. The web-root-relative resolver still applies\nto JS/TS-family files for the tagged-template case. Framework-specific\nJSX asset semantics can be reintroduced later as constrained opt-in\nlogic rather than broad attribute extraction.\n\nExtraction `CACHE_VERSION` is bumped to 96 so warm caches drop the\nstale JSX resource edges on first run after upgrade. Tests are\nrestructured: the unit suite in `tests/js_ts/jsx_assets.rs` asserts the\nnew no-emission behavior, and the integration test renames the fixture\nfrom a static-folder layout to a JSDoc-consumer shape that exercises\nthe remaining JSDoc and `html` tagged-template paths.\n\nFixes #640.",
          "timestamp": "2026-05-22T21:58:29+01:00",
          "tree_id": "cc5eb1a3ab7a022a28240272893cd3489117b688",
          "url": "https://github.com/fallow-rs/fallow/commit/9a142be9494a3779f06db016f54080a84010c652"
        },
        "date": 1779483588641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
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
          "id": "62bed8d6298ba5e83a178f4fcbee05ee7ae548d1",
          "message": "fix(unused-class-members): preserve public package APIs\n\nTreat class members on classes exported from non-private package entry points as part of the public package API, including transitive star barrels and source-first package entry fallbacks. This keeps library builder APIs from being reported as removable internals while still reporting genuinely unused internal members and enum members.\n\nResolve package entry paths that point at missing root build artifacts back to source indexes, and recognize exportless source subpath indexes when no exports map exists. Package manifests also ignore non-boolean private values instead of aborting analysis on permissive real-world package.json data.\n\nFixes #643.",
          "timestamp": "2026-05-22T22:04:17+01:00",
          "tree_id": "da1796a0cbdf1cd2c9b6b88b6351b1ad7f71817a",
          "url": "https://github.com/fallow-rs/fallow/commit/62bed8d6298ba5e83a178f4fcbee05ee7ae548d1"
        },
        "date": 1779483927967,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6d5b84cd74fbb99e839d1b75ff12933eb26c84b6",
          "message": "chore: release v2.79.0",
          "timestamp": "2026-05-22T23:29:18+02:00",
          "tree_id": "d476e7566053f30eb08ef07ff88ca5fa1f716bff",
          "url": "https://github.com/fallow-rs/fallow/commit/6d5b84cd74fbb99e839d1b75ff12933eb26c84b6"
        },
        "date": 1779485486750,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a23dba54581ec3f59a19ef5e13aaf2713b0896c7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.79.0",
          "timestamp": "2026-05-22T23:59:39+02:00",
          "tree_id": "eb1bb2f69d5d896e3508e09d2dec9c819fcd6fa0",
          "url": "https://github.com/fallow-rs/fallow/commit/a23dba54581ec3f59a19ef5e13aaf2713b0896c7"
        },
        "date": 1779487250143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
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
          "id": "4a4873a732459e727c9cba9b37152be367648227",
          "message": "fix(graph): resolve prebuild package maps to source\n\nResolve package.json imports and workspace/root package exports that point at missing prebuild output back to tracked source files. The resolver now loads root and workspace package manifests, evaluates package maps in manifest order, and keeps blocked or unmatched subpaths unresolved instead of turning them into dependency noise.\n\nPreserve dependency accounting by carrying package usage metadata alongside internal file resolution, so self/workspace package imports can still feed unused and unlisted dependency analysis while participating in the module graph.\n\nAdds regression fixtures for Nitro-style package imports and Redux Toolkit-style workspace exports, including blocked, missing, unexported, declared, and undeclared workspace import cases.\n\nFixes #641.",
          "timestamp": "2026-05-23T07:40:46+01:00",
          "tree_id": "91e435d207290ee63851ccaa878a435209f235e9",
          "url": "https://github.com/fallow-rs/fallow/commit/4a4873a732459e727c9cba9b37152be367648227"
        },
        "date": 1779518541716,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
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
          "id": "e4bb70d946e9481c738f8857c15df5a2ba01b648",
          "message": "fix(plugins): suppress React Router route type imports\n\nReact Router v7 and Remix generate sibling ./+types route modules during typegen, and clean checkouts can omit those files. Thread a plugin-provided generated type-import prefix through aggregation and unresolved-import filtering so type-only imports under that prefix do not report as missing.\n\nKeep the suppression narrow: it is plugin-gated, exact-prefix based, and only applies to type-only imports. Runtime imports under ./+types/ continue to report as unresolved, and projects without the React Router or Remix plugins keep the normal missing-import behavior.\n\nAdd unit coverage for the type-only filter, plugin-gated behavior, and runtime negative case, plus React Router and Remix integration fixture coverage.\n\nFixes #645.",
          "timestamp": "2026-05-23T07:45:49+01:00",
          "tree_id": "b0f0c1bc46d749073991cdc2944d731ca925574b",
          "url": "https://github.com/fallow-rs/fallow/commit/e4bb70d946e9481c738f8857c15df5a2ba01b648"
        },
        "date": 1779518828473,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
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
          "id": "2f8fc779cffcde8caf01b419a60e1017307a5a49",
          "message": "fix(mdx): ignore imports inside documentation code fences\n\nMDX extraction previously treated import and export examples inside fenced Markdown blocks as executable top-level MDX statements. Documentation snippets that use virtual file boundaries could therefore create graph edges and false unresolved-import findings.\n\nTrack CommonMark-style backtick and tilde fences before the existing MDX statement extractor runs. Fenced blocks are skipped entirely, while real top-level MDX imports and exports continue through the same parser path.\n\nAdd unit, parser, and integration coverage for fenced examples, including a fixture that preserves a real top-level missing import as a control. Bump the extraction cache version so warm MDX cache entries are re-extracted on upgrade.\n\nFixes #639.",
          "timestamp": "2026-05-23T07:47:09+01:00",
          "tree_id": "a5459ca8fa383ccdc1ae4582d7cbe993efb94235",
          "url": "https://github.com/fallow-rs/fallow/commit/2f8fc779cffcde8caf01b419a60e1017307a5a49"
        },
        "date": 1779518946527,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
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
          "id": "a9cefb483b39a3fe21e171d56fa7def1dc4bace4",
          "message": "fix(core): treat bare bun as builtin\n\nCloses #642.",
          "timestamp": "2026-05-23T08:04:32+01:00",
          "tree_id": "7ffcc0816f0bda828e6478c5186a364c86c15a22",
          "url": "https://github.com/fallow-rs/fallow/commit/a9cefb483b39a3fe21e171d56fa7def1dc4bace4"
        },
        "date": 1779519934834,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
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
          "id": "f92318a75a2aee0732382d8069d8366931f01572",
          "message": "fix(tanstack): suppress Start virtual modules\n\nTanStack Start imports manifest and injected-head script modules through framework-provided virtual specifiers with a :v suffix. Those specifiers are not npm packages, but the TanStack plugin did not register them as virtual modules, so dead-code analysis reported them as unlisted dependencies.\n\nRegister the colon-suffixed TanStack Start virtual module prefixes through the existing plugin virtual-prefix hook. Add plugin-gated positive and negative coverage, including unresolved-import suppression and end-to-end analysis fixtures for static and dynamic imports.\n\nFixes #636.",
          "timestamp": "2026-05-23T08:33:06+01:00",
          "tree_id": "f8c31997a7b57f6ab66e7a20f46bd0f0e039a531",
          "url": "https://github.com/fallow-rs/fallow/commit/f92318a75a2aee0732382d8069d8366931f01572"
        },
        "date": 1779521698098,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
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
          "id": "a13ec35cec22c6edab315ed472cd634d218f6451",
          "message": "fix(extract): credit Node script runner entrypoints\n\nResolve extensionless package-script paths through directory index files after exact and extension fallback.\n\nCredit statically resolvable local child_process.fork runner targets from proven Node child_process imports and requires, including path.resolve(fileURLToPath(import.meta.url), ...).\n\nFixes #638.",
          "timestamp": "2026-05-23T15:25:08+01:00",
          "tree_id": "cc2a64b75e2862a036c38750f4687a0c2e105a93",
          "url": "https://github.com/fallow-rs/fallow/commit/a13ec35cec22c6edab315ed472cd634d218f6451"
        },
        "date": 1779546473243,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
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
          "id": "ef3298ddc9e17197bf75522d55e90454b35bd006",
          "message": "feat: add Fumadocs plugin\n\nfeat: add Fumadocs plugin\n\nAdd a built-in plugin that recognizes Fumadocs source config files, generated .source modules, configured MDX content roots, and fumadocs-mdx virtual imports. This replaces broad dynamicallyLoaded workarounds with framework-scoped detection.\n\nThe plugin parses literal collection dir values from defineCollections, defineDocs, and direct defineConfig collections entries while avoiding unrelated nested option dir fields. Regression coverage exercises a workspace-shaped docs package and the public everr-labs/everr smoke confirms the old-vs-new docs-content delta.\n\nHarden graph validation exposed by CI: re-export cycle regression tests now assert structured graph payloads instead of captured tracing output, and the package-map lookup skips the canonicalize fallback under Miri because isolated Miri does not support realpath.\n\nFixes #633.",
          "timestamp": "2026-05-23T15:34:07+01:00",
          "tree_id": "79279bff93588e6c08cade4b8d79874d3da115be",
          "url": "https://github.com/fallow-rs/fallow/commit/ef3298ddc9e17197bf75522d55e90454b35bd006"
        },
        "date": 1779546910409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 304,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 694,
            "unit": "count"
          }
        ]
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
          "id": "ac81b9247538cf526db76f97dd2bf18a2f4dceb3",
          "message": "fix(core): honor Wrangler config precedence\n\nMatch Wrangler's same-directory config selection before extracting worker main entries. Only the highest-precedence sibling config contributes main and environment main entry patterns, while all wrangler config files remain credited as used.\n\nPin Wrangler's current source order, json, jsonc, toml, with pairwise tests, a no-fallback presence test, non-sibling isolation, and an end-to-end unused-file regression for stale migration configs.\n\nFixes #630.",
          "timestamp": "2026-05-23T15:52:30+01:00",
          "tree_id": "fb031db1f013464842049888ef4d77509678aaaa",
          "url": "https://github.com/fallow-rs/fallow/commit/ac81b9247538cf526db76f97dd2bf18a2f4dceb3"
        },
        "date": 1779548007883,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 304,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 694,
            "unit": "count"
          }
        ]
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
          "id": "c82ba6ffbb26df4fa411b342fe3f0116e00b8eef",
          "message": "feat: add optional review guidance\n\n* feat: add optional review guidance\n\n* test(ci): cover review guidance wiring",
          "timestamp": "2026-05-23T18:25:52+01:00",
          "tree_id": "3bb8bded8e399b9bc2fc1885ddabb9acbacb7aec",
          "url": "https://github.com/fallow-rs/fallow/commit/c82ba6ffbb26df4fa411b342fe3f0116e00b8eef"
        },
        "date": 1779557213020,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 304,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 694,
            "unit": "count"
          }
        ]
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
          "id": "4ce779558a06ddbe8cae6096de095b4fee39e9dd",
          "message": "feat: add PR comment summary scope\n\n* chore: open issue #661 implementation branch\n\n* fix(ci): add diff scope for sticky summaries\n\n* test(ci): avoid racy summary scope env mutation",
          "timestamp": "2026-05-24T08:28:55+01:00",
          "tree_id": "4cc7a012a41ca56fae83a44ae06a2000ad424af2",
          "url": "https://github.com/fallow-rs/fallow/commit/4ce779558a06ddbe8cae6096de095b4fee39e9dd"
        },
        "date": 1779607791142,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 304,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 694,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "017658ea7af7473dcc87c921a092f0bd507457fd",
          "message": "chore: release v2.80.0",
          "timestamp": "2026-05-24T09:38:07+02:00",
          "tree_id": "46bd21cb4f96e15a0d4a8dce8b03a8d51af3ba2a",
          "url": "https://github.com/fallow-rs/fallow/commit/017658ea7af7473dcc87c921a092f0bd507457fd"
        },
        "date": 1779608391731,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 304,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 694,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e32cc0a415dcfddc776e9ec032eed6de218e0135",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.80.0",
          "timestamp": "2026-05-24T10:10:02+02:00",
          "tree_id": "c1be6b2b1dc4f2a25c95e6b5029c47cca05d7dd2",
          "url": "https://github.com/fallow-rs/fallow/commit/e32cc0a415dcfddc776e9ec032eed6de218e0135"
        },
        "date": 1779610264887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 304,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 694,
            "unit": "count"
          }
        ]
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
          "id": "04fc48077af977a27894861d8db1a7c4243c4640",
          "message": "fix: recognize Danger and Stryker tooling configs\n\n* chore: open issue #618 implementation branch\n\n* fix: recognize Danger and Stryker tooling configs",
          "timestamp": "2026-05-25T12:08:53+01:00",
          "tree_id": "ebcbe56176684396b09e661625d1befe40aaa2c8",
          "url": "https://github.com/fallow-rs/fallow/commit/04fc48077af977a27894861d8db1a7c4243c4640"
        },
        "date": 1779707666270,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 699,
            "unit": "count"
          }
        ]
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
          "id": "3d93824183baf1a797d8fa4baf36edd9a168bc16",
          "message": "fix: skip platform builtins in unresolved imports\n\nSkip unresolved-import findings when an unresolvable specifier is accepted by is_builtin_module.\n\nAdd regression coverage for current Node, Bun, Cloudflare, Sass, and Deno builtin forms, while keeping builtin-like package names and fake node subpaths reportable.\n\nFixes #634.",
          "timestamp": "2026-05-25T12:26:22+01:00",
          "tree_id": "518433c3eacf3d2fcf6ff740632d20956da63b76",
          "url": "https://github.com/fallow-rs/fallow/commit/3d93824183baf1a797d8fa4baf36edd9a168bc16"
        },
        "date": 1779708445971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 699,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77008265+pasTa4667@users.noreply.github.com",
            "name": "pasTa",
            "username": "pasTa4667"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "683ccdedea393f00b2ca6b7b57852b0db671d3e1",
          "message": "fix(plugins): parse jsPlugins for oxlint config (#667)\n\nParse jsPlugins from .oxlintrc.json, oxlint.json, and oxlint.config.ts: credit string entries, alias-object specifier values, and tuple first-elements as npm dependencies; record relative/absolute plugin paths as setup files; ignore built-in plugin names.\n\nThanks @pasTa4667.\n\nCloses #607",
          "timestamp": "2026-05-25T13:04:26+01:00",
          "tree_id": "eff4e67a238a89e5c503cc2b6eeb43759e02b2a1",
          "url": "https://github.com/fallow-rs/fallow/commit/683ccdedea393f00b2ca6b7b57852b0db671d3e1"
        },
        "date": 1779710740020,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 700,
            "unit": "count"
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
          "id": "0ba5cf0b0d03c821b244625fa24fcce4c9c61a6e",
          "message": "fix: handle re-export resolver source edges (#666)\n\nFixes resolver source edges that were only handled for imports.\n\nUnresolved named and star re-export sources now use the same source-edge contract as imports, so they are reported instead of being skipped.\n\nPackage imports and exports array targets now preserve fallback order. Package imports also credit external package targets, which avoids false unlisted dependency reports for package import aliases.",
          "timestamp": "2026-05-25T13:26:13+01:00",
          "tree_id": "0c56b912166f6340edb225166aeb0458a9ee8dd9",
          "url": "https://github.com/fallow-rs/fallow/commit/0ba5cf0b0d03c821b244625fa24fcce4c9c61a6e"
        },
        "date": 1779712035956,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 701,
            "unit": "count"
          }
        ]
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
          "id": "2f4a8313def90099019820c3e03ba0d571c5bdae",
          "message": "fix: guard CachedModule cache shape\n\n* chore: open issue 443 implementation branch\n\n* fix: guard cached module shape",
          "timestamp": "2026-05-25T13:57:59+01:00",
          "tree_id": "a414603807ce9de5bc42c3bc5f3a639ecb8b0a68",
          "url": "https://github.com/fallow-rs/fallow/commit/2f4a8313def90099019820c3e03ba0d571c5bdae"
        },
        "date": 1779713938247,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 701,
            "unit": "count"
          }
        ]
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
          "id": "a48e02fed77f1ec08347e771a8c6e72d465801ef",
          "message": "fix(health): clarify ownership state\n\nFixes #478.",
          "timestamp": "2026-05-25T14:46:04+01:00",
          "tree_id": "4649914d7218365d935d0c06bc54813332c0733a",
          "url": "https://github.com/fallow-rs/fallow/commit/a48e02fed77f1ec08347e771a8c6e72d465801ef"
        },
        "date": 1779716844531,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 701,
            "unit": "count"
          }
        ]
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
          "id": "c0f47b501edd68de711a5c59cdec99d52ef5e91b",
          "message": "fix: harden programmatic napi analysis context\n\nAdd per-call Rayon pools for programmatic and N-API analyses so thread counts do not become first-call-wins process state.\n\nAdd programmatic diff_file and N-API diffFile, and thread explicit diff indexes through dead-code, duplication, and health execution without letting embedded callers fall back to the CLI shared diff cache.\n\nAdd regression coverage for CLI global parity, per-call thread counts, per-call diff scoping, shared-diff isolation, and Node diffFile usage.\n\nFixes #469.",
          "timestamp": "2026-05-25T14:59:20+01:00",
          "tree_id": "b3afbf6694de62a65356b73ca946001919187f5c",
          "url": "https://github.com/fallow-rs/fallow/commit/c0f47b501edd68de711a5c59cdec99d52ef5e91b"
        },
        "date": 1779717624234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
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
          "id": "2a38c0a6b2ae19425265647648c7bfc4d03e8abb",
          "message": "fix: harden fallow cloud API client\n\nCentralize cloud API client setup, Retry-After handling, shared error-envelope parsing, and FALLOW_CA_BUNDLE support across fallow cloud paths.\n\nFixes #464.",
          "timestamp": "2026-05-25T15:10:51+01:00",
          "tree_id": "983f95bba320d2c443d068ddd73c11162e609973",
          "url": "https://github.com/fallow-rs/fallow/commit/2a38c0a6b2ae19425265647648c7bfc4d03e8abb"
        },
        "date": 1779718314979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
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
          "id": "de21eb76e285ceb042bfb24a08cae294c60200fa",
          "message": "fix: harden reconcile-review apply\n\n* chore: open issue #459 implementation branch\n\n* fix: make reconcile review apply fail fast",
          "timestamp": "2026-05-25T19:08:44+01:00",
          "tree_id": "6ac8bcc88c718f5e1778035edd064d95cba0bcf0",
          "url": "https://github.com/fallow-rs/fallow/commit/de21eb76e285ceb042bfb24a08cae294c60200fa"
        },
        "date": 1779732582649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
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
          "id": "32ba9d5bed686d80322176eebd695868c8061590",
          "message": "fix: make coverage setup resumable\n\nPersist coverage setup progress in `.fallow/setup.json`, guard human setup runs with `.fallow/setup.lock`, and validate resume state against current project artifacts before skipping work.\n\nFixes #460.",
          "timestamp": "2026-05-25T19:15:09+01:00",
          "tree_id": "e9570c8b648845afc03c142805cdb7d5bc93d878",
          "url": "https://github.com/fallow-rs/fallow/commit/32ba9d5bed686d80322176eebd695868c8061590"
        },
        "date": 1779732994212,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
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
          "id": "3bbc57c10ff91d823d29d06779921330da07b935",
          "message": "test: gate MCP tool default drift\n\nCloses #455",
          "timestamp": "2026-05-25T19:24:23+01:00",
          "tree_id": "92b272b9aed73a1a8ddcb463550cdeada56cee99",
          "url": "https://github.com/fallow-rs/fallow/commit/3bbc57c10ff91d823d29d06779921330da07b935"
        },
        "date": 1779733539736,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
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
          "id": "7f225736d007ddfa3a0959f71c274cc0ba3d144c",
          "message": "fix: treat scaffold templates as used assets\n\n* chore: open issue #635 implementation branch\n\n* fix: treat scaffold templates as used assets",
          "timestamp": "2026-05-25T22:07:46+01:00",
          "tree_id": "f2c36b50d7864fa21033a8a0bb305726d775117a",
          "url": "https://github.com/fallow-rs/fallow/commit/7f225736d007ddfa3a0959f71c274cc0ba3d144c"
        },
        "date": 1779743365780,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "10c5ec717d3b09c0c151dec306f458555fdd7ebc",
          "message": "fix: normalize coverage lock path assertion",
          "timestamp": "2026-05-25T23:16:13+02:00",
          "tree_id": "8ccaf38c7ef9e7167bc3dbde0a1bcd868f5a43c6",
          "url": "https://github.com/fallow-rs/fallow/commit/10c5ec717d3b09c0c151dec306f458555fdd7ebc"
        },
        "date": 1779743860587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
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
          "id": "1eafebd46c6c3aa7d88ddf7504aea857402c117d",
          "message": "feat: add RedwoodSDK worker entrypoints\n\nAdd a built-in RedwoodSDK plugin activated by `rwsdk` that marks `src/worker.*` as a runtime entrypoint within the active workspace. Keep Vite config ownership with the existing Vite plugin so `rwsdk/vite` apps do not trigger config-pattern collisions.\n\nFixes #632.",
          "timestamp": "2026-05-25T22:20:23+01:00",
          "tree_id": "5e45b3ed56c62e94eb0e97d9f84c2fcc43767891",
          "url": "https://github.com/fallow-rs/fallow/commit/1eafebd46c6c3aa7d88ddf7504aea857402c117d"
        },
        "date": 1779744150601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 307,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 704,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c0a171773f0af14a229b9bb3199db896cd69cf2d",
          "message": "test: drain mock HTTP requests in reconcile tests",
          "timestamp": "2026-05-25T23:32:25+02:00",
          "tree_id": "16b26941c764053be0bb7300f4c79dbbd63ad8d0",
          "url": "https://github.com/fallow-rs/fallow/commit/c0a171773f0af14a229b9bb3199db896cd69cf2d"
        },
        "date": 1779744802939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 307,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 704,
            "unit": "count"
          }
        ]
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
          "id": "52a20b670b9f1da1838afdb6e5eb1687bdcb7c90",
          "message": "fix: add Wuchale plugin support\n\n* chore: open issue-631 implementation branch\n\n* fix: add Wuchale plugin support\n\n* fix: activate Wuchale plugin from config file\n\nWuchale projects can be identifiable by the documented wuchale.config.js file even when package dependencies are not enough to activate the plugin path. Teach the plugin to activate from that config file, and keep the narrow JavaScript-only config contract for Vite configFile references.\n\nAdd regression coverage for config-file activation without an enabler dependency so the adapter package import is credited only through the config path.\n\nFixes #631.",
          "timestamp": "2026-05-25T22:33:24+01:00",
          "tree_id": "a33dd7cb4d1ffc490438d4aca44e1b72f387ce96",
          "url": "https://github.com/fallow-rs/fallow/commit/52a20b670b9f1da1838afdb6e5eb1687bdcb7c90"
        },
        "date": 1779744870359,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 308,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 707,
            "unit": "count"
          }
        ]
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
          "id": "295e2904232c41f81b021716955278d72c059e6b",
          "message": "feat: add OpenCode plugin support\n\nAdds built-in OpenCode plugin support so OpenCode project plugin files and opencode.json plugin dependencies are treated as reachable.\n\nFixes #629.",
          "timestamp": "2026-05-25T22:37:32+01:00",
          "tree_id": "7794b0b1c5573b7148375d0a8fc6d6b0970773cd",
          "url": "https://github.com/fallow-rs/fallow/commit/295e2904232c41f81b021716955278d72c059e6b"
        },
        "date": 1779745128273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 309,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 709,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6e9b848395bcb0199dbfffc2c65df00fff5d7ffc",
          "message": "test: reject rooted package asset entries",
          "timestamp": "2026-05-25T23:49:27+02:00",
          "tree_id": "1064d747d2f58c1f3938b4376e52a928f5a24c99",
          "url": "https://github.com/fallow-rs/fallow/commit/6e9b848395bcb0199dbfffc2c65df00fff5d7ffc"
        },
        "date": 1779745835820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 309,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 709,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9c7a564b9b65a6bde49dc60d4e1e8c1b1d26e8c1",
          "message": "test: scope unix-only coverage imports",
          "timestamp": "2026-05-26T00:06:57+02:00",
          "tree_id": "90a117df701ad5cdaef388717b14e74e55827a0f",
          "url": "https://github.com/fallow-rs/fallow/commit/9c7a564b9b65a6bde49dc60d4e1e8c1b1d26e8c1"
        },
        "date": 1779746881479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 309,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 709,
            "unit": "count"
          }
        ]
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
          "id": "ebe0042e39ce7455a85dc957a7ff0b673eddf1da",
          "message": "fix(graph): classify node:sqlite and mandatory-node-prefix builtins\n\nis_builtin_module stripped the node: prefix and checked the remainder\nagainst a flat builtin list that omitted sqlite and sea, so imports of\nnode:sqlite surfaced as unlisted dependencies or unresolved imports and\nforced projects to add node:sqlite to ignoreDependencies.\n\nIntroduce NODE_PREFIX_ONLY_BUILTINS (sea, sqlite, test, test/reporters),\nthe modules Node documents as available only under the node: scheme, and\nmatch them only when the node: prefix is present. The bare forms now\nclassify as ordinary npm packages, because Node refuses to resolve these\nwithout the prefix and real npm packages share the names (sqlite,\nbetter-sqlite3, the test package). test and test/reporters move out of\nthe always-available list, so a bare import 'test' is no longer treated\nas a builtin (behavior change). is_builtin_module is the single gate for\nboth the unlisted-dependency path and the unresolved-import path, and\nextract_package_name retains the node: prefix on the package-usage key,\nso the one predicate covers both.\n\nFixes #627.",
          "timestamp": "2026-05-25T23:44:12+01:00",
          "tree_id": "ca57f2d898b6d34da670be9b031eae71263c7db8",
          "url": "https://github.com/fallow-rs/fallow/commit/ebe0042e39ce7455a85dc957a7ff0b673eddf1da"
        },
        "date": 1779749113517,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 309,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 709,
            "unit": "count"
          }
        ]
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
          "id": "f12e98010219a828e6ff9264e6b0c6a78d86ef1c",
          "message": "feat(plugins): credit Lexical custom node lifecycle methods as used (#682)\n\nLexical reconstructs, clones, serializes, reconciles, and decorates custom\nnodes through a fixed set of class methods called reflectively at runtime.\nLocal project code never calls them directly, so they surfaced as\nunused-class-member false positives.\n\nThe new built-in lexical plugin (enabler: lexical, @lexical/) returns\nheritage-scoped used_class_member_rules for the three documented extendable\nnode bases: DecoratorNode, ElementNode, and TextNode. The shared lifecycle\nset (getType, clone, importJSON, importDOM, exportJSON, exportDOM, createDOM,\nupdateDOM, updateFromJSON, getTextContent, isInline) is credited on all three;\ndecorate is scoped to DecoratorNode only. Non-lifecycle methods on a node\nsubclass are still reported.\n\nReplaces the manual scoped usedClassMembers allowlist users hand-write today.\n\nFixes #628",
          "timestamp": "2026-05-25T23:47:26+01:00",
          "tree_id": "d627bb3d543c2683c735a31557e5081c29f93843",
          "url": "https://github.com/fallow-rs/fallow/commit/f12e98010219a828e6ff9264e6b0c6a78d86ef1c"
        },
        "date": 1779749321329,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 310,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 711,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9de44d7faf6a0832739993df9829a11f5812ac2d",
          "message": "chore: release v2.81.0",
          "timestamp": "2026-05-26T06:48:04+02:00",
          "tree_id": "c3d1de812df994e846909ad2229dcda901e8834f",
          "url": "https://github.com/fallow-rs/fallow/commit/9de44d7faf6a0832739993df9829a11f5812ac2d"
        },
        "date": 1779770997048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 310,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 711,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7c2888f05cc6ef87c40e24a384083b78a87229af",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.81.0",
          "timestamp": "2026-05-26T07:22:59+02:00",
          "tree_id": "253ee97ac5f1b60662600a187c0ba573a67fa3f6",
          "url": "https://github.com/fallow-rs/fallow/commit/7c2888f05cc6ef87c40e24a384083b78a87229af"
        },
        "date": 1779773045934,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 310,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 711,
            "unit": "count"
          }
        ]
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
          "id": "3c1b1c8e0a1736cc3dc26f7e2b01a6166a5c675e",
          "message": "chore(lint): adopt oxlint + oxfmt across JS/TS surfaces\n\nAdds `oxlint` 1.66.0 and `oxfmt` 0.51.0 as root devDependencies and wires\nthem into CI. Closes a real gap: until this PR fallow's own JS/TS code\n(npm wrapper, benchmarks, .github scripts, VS Code extension, crates/napi)\nshipped with no linter and no formatter at all. CodeQL caught a leaked\n`freshEnv` dead-helper in lazy-verify.test.js (PR #684) that an\noxlint `no-unused-vars` pass would have caught locally before commit.\n\nWhat lands:\n\n1. `.oxlintrc.json` at the repo root. Plugins: import, node, promise,\n   unicorn. Categories: correctness + suspicious as error, perf as\n   warn. Stylistic rules (`no-underscore-dangle`, `no-await-in-loop`,\n   `unicorn/consistent-function-scoping`) explicitly off where they\n   conflicted with existing conventions (test helpers prefixed `_`,\n   intentional sequential `await` in `verifyInstalled`'s per-binary\n   loop). Test files relax the rest-siblings rule.\n2. `.oxfmtrc.json` at the repo root. `ignorePatterns` only; oxfmt is\n   opinionated (matches Oxc ecosystem consistency from CLAUDE.md).\n3. Root `package.json` scripts: `lint:js`, `fmt:js`, `fmt:js:check`.\n4. CI: new `JS Lint and Format` job runs both on every push + PR;\n   added to the `ci-ok` aggregate `needs:` list.\n5. Existing JS/TS files reformatted to oxfmt's house style (single ->\n   double quotes, line wrapping). Lint findings fixed: removed three\n   unused imports (`relative` in generate-dupes-fixtures, `writeFileSync`\n   in bench-circular + compare), prefixed three unused params with `_`,\n   renamed shadowed `stats` to `jscpdStats` in bench-dupes, removed dead\n   `freshEnv`-style spread fallback, fixed promise-always-return in\n   extension.ts, migrated `.sort()` -> `.toSorted()` everywhere, and\n   bumped editors/vscode tsconfig `target`/`lib` to ES2023 so\n   `Array.prototype.toSorted` resolves (VS Code 1.96 ships with Node\n   20.18 which supports it).\n\nThe npm wrapper itself ships unchanged. This PR is pure tooling +\nmechanical reformatting; no functional behavior changes.",
          "timestamp": "2026-05-26T08:16:47+01:00",
          "tree_id": "4398bc810dd4a8677a3f2fc91ad67506f0a0f04f",
          "url": "https://github.com/fallow-rs/fallow/commit/3c1b1c8e0a1736cc3dc26f7e2b01a6166a5c675e"
        },
        "date": 1779779900745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 310,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 711,
            "unit": "count"
          }
        ]
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
          "id": "e97b955e2daed6a34a12dfec9c6a66adb0ce5650",
          "message": "feat(perf): annotate parallel parse CPU and reused stages in --performance (#687)\n\nTwo clarity fixes to the `--performance` breakdown (issue #481).\n\nParallel parse annotation: parse_all_files now sums the wall-clock time of\nthe actual AST parses across rayon workers (cache-miss path only, so warm\nruns add ~0 and pay no measurement overhead). The renderer appends\n`(parallel: ~Nms CPU)` to the parse/extract line when the stage cleared a\n5ms floor and the summed CPU is at least 1.5x the stage's wall-clock. This\nshows that a stage whose wall-clock looks cheap can burn far more CPU, which\nis what users tuning thread counts on CI runners need to see.\n\nReused-stage label: in combined mode health reuses the dead-code pass's\ndiscovered + parsed files, so those stages previously rendered a misleading\n`0.0ms`. They now read `(measured above)`, pointing at the Pipeline\nPerformance box. The shared-parse path also measures its own config load\ninstead of reporting `0.0ms`.\n\nReconciliation: both tables gain an `(other)` row (TOTAL minus the displayed\nstages) so the rows provably sum to TOTAL. Health TOTAL now folds in\nconfig/discover/parse, which it previously excluded, so the breakdown\nreconciles in every mode.\n\nJSON `--performance` gains `parse_cpu_ms` (PipelineTimings + HealthTimings)\nand `shared_parse` (HealthTimings); additive, observational, non-deterministic.\n\nCloses #481",
          "timestamp": "2026-05-26T08:25:13+01:00",
          "tree_id": "49979184f39e9f53079ae6f2b131c1dea0f59d02",
          "url": "https://github.com/fallow-rs/fallow/commit/e97b955e2daed6a34a12dfec9c6a66adb0ce5650"
        },
        "date": 1779780418896,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 310,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 711,
            "unit": "count"
          }
        ]
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
          "id": "116332ae2e92de62f07e1bf246f29ce66791cad3",
          "message": "feat(plugins): add Mintlify plugin (#689)\n\n* feat: add Mintlify plugin\n\nModel Mintlify documentation sites driven by docs.json / mint.json and\nthe mint / mintlify CLI. The plugin activates on the mint / mintlify\ndependency or the presence of docs.json / mint.json, keeps the config\nfile always-used, credits the CLI as tooling, and marks {md,mdx} under\nthe config file's directory as runtime-used so docs content no longer\nneeds manual dynamicallyLoaded entries. The content pattern is scoped\nto the docs root so non-Mintlify MDX stays governed by other plugins.\n\nFixes #626\n\n* docs: document Mintlify plugin\n\nAdd the Mintlify plugin to detection.md, plugins.md, the README plugin\ncount (now 105 with Lexical and Mintlify), and the CHANGELOG.\n\nRefs #626",
          "timestamp": "2026-05-26T09:17:34+01:00",
          "tree_id": "a66f2bffe4ee871013deb89e945107a92fed8499",
          "url": "https://github.com/fallow-rs/fallow/commit/116332ae2e92de62f07e1bf246f29ce66791cad3"
        },
        "date": 1779783588766,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 311,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 713,
            "unit": "count"
          }
        ]
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
          "id": "04add82a217ad0dfcc1c0d7c23f85daeca764eb6",
          "message": "feat: add k6 runtime entry surfaces\n\n* chore: open issue #625 implementation branch\n\n* feat: add k6 runtime entry support",
          "timestamp": "2026-05-26T09:44:13+01:00",
          "tree_id": "05f3191da24e2d895d697156bb1206798f3abd75",
          "url": "https://github.com/fallow-rs/fallow/commit/04add82a217ad0dfcc1c0d7c23f85daeca764eb6"
        },
        "date": 1779785114700,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 312,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 715,
            "unit": "count"
          }
        ]
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
          "id": "4f150680c3140e2ded8314447cfaefdcee310149",
          "message": "fix: handle Deno jsr/npm/url imports and Supabase Edge Function roots (#690)\n\nTreat jsr: and URL specifiers as external runtime imports and normalize\nnpm:<pkg>@version to its npm package so Deno/Supabase Edge Function imports\nno longer report as unresolved-import or bogus unlisted dependencies. A\npackage imported only via npm: is self-declaring and not reported as\nunlisted (mirrors the per-file bun: carve-out). Add a built-in supabase\nplugin that marks supabase/functions/*/index.* as runtime entry roots and\ncredits the supabase CLI as tooling; _shared code stays reachable via\nrelative imports.\n\nCloses #624",
          "timestamp": "2026-05-26T10:12:40+01:00",
          "tree_id": "734d030720646d638895e03bca2e2e0634880a53",
          "url": "https://github.com/fallow-rs/fallow/commit/4f150680c3140e2ded8314447cfaefdcee310149"
        },
        "date": 1779786912335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 313,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 717,
            "unit": "count"
          }
        ]
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
          "id": "9c4b1d0a00a7e599a27cde0d6dc895f640fb67da",
          "message": "fix(fix): withhold low-confidence unused-export rewrites when consumers may be off-graph\n\n`fallow fix --yes` stripped the export keyword from every export reported\nas unused, including symbols consumed only through paths fallow's graph\ncannot see (Vitest mock aliases, off-workspace e2e suites, fixture/golden\nbuild steps). That turned an analysis false positive into a source-level\nbreak.\n\nThe export fixer now withholds removals in two low-confidence cases:\nfiles under an off-graph consumer directory (__mocks__, __fixtures__,\nfixtures, e2e, e2e-tests, cypress, playwright, examples, evals, golden)\nand files that themselves have an unresolved import. Both surface as\nintentional skips: new SkipReason::LowConfidenceOffGraph /\nLowConfidenceUnresolvedImports, a combined skipped_low_confidence_exports\nenvelope counter, per-record skip_reason, and a human summary line. The\nskip does not change the exit code; the export stays reported by\n`fallow check` for manual review. High-confidence exports are removed\nunchanged.\n\nFixes #602",
          "timestamp": "2026-05-26T11:15:25+01:00",
          "tree_id": "6ffdc2b3f12f9bea40378a1572ed0d2e3dbb0b8c",
          "url": "https://github.com/fallow-rs/fallow/commit/9c4b1d0a00a7e599a27cde0d6dc895f640fb67da"
        },
        "date": 1779790678396,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 313,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 717,
            "unit": "count"
          }
        ]
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
          "id": "b4305cbb928b7af0f5295456654248f7423277a3",
          "message": "fix: credit class members reached via new Class().method() receivers (#692)\n\nMethods called on a freshly-constructed instance were not traced, so they\nsurfaced as unused-class-member false positives. Two public adoption PRs had\nto add inline fallow-ignore comments / usedClassMembers entries for exactly\nthis gap (everr#144, graphql-markdown#2949).\n\nExtends the #387 static-factory chain credit to constructor roots:\n\n- static_member_object_name gains a NewExpression arm (bare Identifier callee,\n  builtin-guarded), so direct new Repo(client).search(data) and the first\n  method off any constructor chain credit Class.member through the existing\n  local_to_export_keys path.\n- try_record_fluent_chain_access recognizes a NewExpression root and emits a\n  distinct FLUENT_CHAIN_NEW_SENTINEL ({class}:{chain}, no root method).\n- propagate_fluent_chain_new_accesses resolves the class, walks re-export\n  origins, and credits downstream members only when every chain step is a\n  self-returning ClassMethod, preserving the #387 safety check.\n\nCACHE_VERSION 98 -> 99 (extraction output changes for these patterns).\n\nFixes #605",
          "timestamp": "2026-05-26T11:32:17+01:00",
          "tree_id": "bed51ce8cd4b059d40344977ced3fd9f37d47f43",
          "url": "https://github.com/fallow-rs/fallow/commit/b4305cbb928b7af0f5295456654248f7423277a3"
        },
        "date": 1779791602010,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 313,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 717,
            "unit": "count"
          }
        ]
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
          "id": "4727b97948b2e24d1563167aeda78f5cf94ef4e1",
          "message": "feat(plugins): recognize Vitest test.alias/resolve.alias in vite.config, projects, and workspace files (#698)\n\nFollow-up to #601. The Vitest plugin parsed test.alias only from a top-level\nvitest.config.* (plus test.projects[*].test.alias), leaving three common shapes\nas false unresolved-import / unlisted-dependency / unused-export findings:\n- the Vitest config embedded in vite.config.ts (defineConfig({ test, resolve }));\n- project-level resolve.alias mocks (test.projects[*].resolve.alias);\n- the vitest.workspace.{ts,js} array file (defineWorkspace([...])), which\n  find_config_object cannot reach (array default export).\n\nA new shared crate::plugins::test_alias module funnels every alias surface\nthrough one process_test_alias: the Vitest plugin handles vitest.config.* and the\nworkspace-array file; the Vite plugin reuses apply_test_block_aliases for the\ntest-block + projects surfaces inside vite.config.* (which never reaches the\nVitest plugin). Top-level resolve.alias in vite.config.* keeps its existing\npath-alias-only behavior to avoid changing non-test Vite projects.\n\nThe package-to-package special case ('lodash-es' -> 'lodash') is now\ndistinguished from a directory alias (@ -> path.resolve(__dirname, 'src')) by a\ndeterministic, filesystem-free check: a path-builder or ./-prefixed replacement\nis a path, a plain bare string literal is a package (extract_config_aliases_kinded\nflags this). No is_dir() probe, so results are identical across sparse checkouts,\nDocker layers, and published tarballs.\n\nStatically-unreachable config shapes (mergeConfig, imported-and-spread base\nconfigs) and nested test.projects inside a workspace-array element are out of\nscope; the former emits a RUST_LOG=debug line.\n\nRefs #601.",
          "timestamp": "2026-05-26T13:59:14+01:00",
          "tree_id": "6cd63ce932b58393e065d30a623893ad65b93135",
          "url": "https://github.com/fallow-rs/fallow/commit/4727b97948b2e24d1563167aeda78f5cf94ef4e1"
        },
        "date": 1779800458098,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 720,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b460904c42446648518f40584d3a74109fb2ecf2",
          "message": "test(types): property-test the forward-slash path serializer\n\nThe example tests only exercise a local normalize() proxy; the real\nserde_path::serialize / serialize_vec functions were never driven through\na Serializer. Add proptests over arbitrary mixed-separator paths that run\nthe real functions through serde_json:\n\n- output never contains a backslash and equals input with every backslash\n  rewritten to a forward slash (the cross-platform JSON/SARIF invariant)\n- a serialized path reads back as its normalized form\n- serialization is idempotent over already-normalized input\n- the vec serializer agrees element-for-element with the scalar one\n\nproptest reads its failure-persistence file via env::current_dir() at\nstartup, which aborts under Miri isolation (getcwd unsupported), so skip\nproptests in the fallow-types Miri job to match the fallow-graph job.",
          "timestamp": "2026-05-26T15:37:54+02:00",
          "tree_id": "0743f723d9b4539f622ae499f06d5465f8b27e49",
          "url": "https://github.com/fallow-rs/fallow/commit/b460904c42446648518f40584d3a74109fb2ecf2"
        },
        "date": 1779802969953,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 720,
            "unit": "count"
          }
        ]
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
          "id": "1c1fb174f8209ec69e14a383be743f068278cb4a",
          "message": "fix(plugins): evaluate path-helper calls in bundler entry config (#700)\n\n* fix(plugins): evaluate path-helper calls in bundler entry config\n\nbuild.rollupOptions.input and build.lib.entry values written as\npath-helper calls (resolve(__dirname, \"src/app.ts\"), path.resolve(...),\njoin(...), and the import.meta.dirname equivalents) were CallExpressions\nthat the leaf evaluator dropped, so files declared only via path helpers\nwere reported as unused until the user duplicated the entry list into\n.fallowrc.\n\nexpression_to_string_or_array now evaluates leaf values through\nexpression_to_path_string (a superset of expression_to_string that\nfalls through to it for string/template literals), so the change is\nadditive: it only adds previously-dropped path-helper entries, never\nchanging string-literal behavior. call_expression_to_path_string also\ntreats import.meta.dirname as a current-directory anchor alongside\n__dirname, which improves alias resolution for every config sharing the\nhelper. CSS inputs are preserved like any other entry.\n\nFixes #604\n\n* docs(changelog): note path-helper evaluation in bundler entry config\n\nDocument issue #604 fix in CHANGELOG [Unreleased], detection.md, and\nplugins.md (Vite entry/input now evaluates resolve/path.resolve/join +\nimport.meta.dirname path-helper calls via the shared extractor).",
          "timestamp": "2026-05-26T15:54:23+01:00",
          "tree_id": "ac1b51f51694d7d886c85ad53553519f200713c4",
          "url": "https://github.com/fallow-rs/fallow/commit/1c1fb174f8209ec69e14a383be743f068278cb4a"
        },
        "date": 1779807521172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 720,
            "unit": "count"
          }
        ]
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
          "id": "27f7ae06183552e141e47ead1141e11bbfa176f4",
          "message": "feat(plugins): parse Playwright webServer.command for CLI deps and script entries\n\nParse webServer.command (object and array forms) from playwright.config.* and run\neach command through the shared package.json script parser: invoked npm binaries are\ncredited as referenced dependencies and local file arguments are seeded as reachable\nsetup files. File paths (and globalSetup/globalTeardown) resolve relative to the\nconfig file's directory, matching Playwright's webServer.cwd default; an explicit cwd\noverrides that base. Package-manager delegations (npm run start) credit nothing.\n\nFixes #621.",
          "timestamp": "2026-05-26T16:00:09+01:00",
          "tree_id": "ca3b44127b7cf2062ee473d5bfbfda9ed97f042f",
          "url": "https://github.com/fallow-rs/fallow/commit/27f7ae06183552e141e47ead1141e11bbfa176f4"
        },
        "date": 1779807699569,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 721,
            "unit": "count"
          }
        ]
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
          "id": "61a391d392dd1485fb56625cd8fcf33bf6eceb25",
          "message": "feat(plugins): parse electron.vite.config rollupOptions.input entries (#701)\n\nThe Electron plugin activated for electron-vite and kept\nelectron.vite.config.{ts,js,mjs} alive but never parsed it, so\nmulti-window renderer HTML entries declared in\nrenderer.build.rollupOptions.input (commonly\nresolve(__dirname, 'src/renderer/index.html')) were missed and the\n<script src> source trees behind them reported as unused-files. The\nplugin now reads the main/preload/renderer build.rollupOptions.input in\nstring, array, and object forms and seeds each value as an entry point,\nnormalized relative to the config file so monorepo subpackage configs\nmap correctly.\n\nObject/array values commonly use path helpers, so a new electron-only\nconfig_parser::extract_config_path_string_or_array routes each value\nthrough expression_to_path_string, recovering resolve(__dirname, ...),\njoin(...), fileURLToPath(...), and new URL(..., import.meta.url) plus\nplain string and template literals. The shared\nextract_config_string_or_array is intentionally left unchanged (it only\nrecovers string literals in object/array positions); broadening it is a\nseparate, benchmark-moving change. The static main/preload fallback\nglobs also widen to {ts,tsx,js,jsx,mts,mjs}.\n\nCrediting is scoped to declared inputs, so a renderer source file linked\nfrom no declared entry is still reported. Per-section function-wrapped\nconfigs (renderer: defineConfig({...})) are out of scope, matching the\nVite plugin's plain-object nesting requirement.\n\nFixes #600.",
          "timestamp": "2026-05-26T16:02:10+01:00",
          "tree_id": "2f79087d9af571ba49a6d9bbf83d4d0d60c09a4e",
          "url": "https://github.com/fallow-rs/fallow/commit/61a391d392dd1485fb56625cd8fcf33bf6eceb25"
        },
        "date": 1779807804047,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 722,
            "unit": "count"
          }
        ]
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
          "id": "3f54a2d2656a3ae0fde8693486e738f2a66d75fa",
          "message": "feat(plugins): parse ng-packagr ng-package.json lib.entryFile as Angular library public API (#703)\n\nThe Angular plugin now reads lib.entryFile from ng-package.json /\nng-package.prod.json and treats it as a package entry point, resolved\nrelative to the config directory. ng-packagr, not the app graph, consumes\nthat file, so previously the public-api entry file surfaced as unused-file\nand its re-exported symbols as unused-export.\n\nWhen lib.entryFile is omitted it falls back to ng-packagr's schema default\nsrc/public_api.ts (underscore, per ng-package.schema.json; hyphenated\npublic-api.ts libraries set entryFile explicitly). Nested\nsecondary-entry-point configs in the package subtree are scanned too\n(bounded depth, skipping node_modules/dist/out/tmp/coverage/hidden dirs;\nsame-directory siblings left to config discovery). The plugin also\nactivates on a ng-packagr dependency in addition to @angular/core;\nenabler detection reads peerDependencies.\n\nVerified on unjs/unhead packages/angular: the primary entry plus the\nclient/server secondary entries (12 angular findings) flip from unused to\nused with zero collateral elsewhere. Benchmark counts unchanged on all\nfixtures (the path is gated behind Angular enablers + ng-package*.json).\n\nFixes #606",
          "timestamp": "2026-05-26T16:17:52+01:00",
          "tree_id": "c902536473f52db8fb02af22cf0db13168b4f331",
          "url": "https://github.com/fallow-rs/fallow/commit/3f54a2d2656a3ae0fde8693486e738f2a66d75fa"
        },
        "date": 1779808736952,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 722,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "eb934f3b435899da5d74bb1fb67c118548d82801",
          "message": "test(plugins): make Playwright nested-config-dir tests platform-absolute for Windows CI\n\nThe three nested-config Playwright tests passed `/project/apps/web/...`\nconfig paths, which are absolute on Unix but NOT on Windows (no drive\nletter). resolve_config's `parent().is_absolute()` gate therefore dropped\nthe nested config directory on Windows and fell back to the project root,\nfailing the assertions on windows-latest CI while passing on Unix.\n\nThe registry always passes a genuinely-absolute config path at runtime\n(drive-rooted on Windows), so the production resolution is correct; only\nthe tests were Unix-only. Added an `abs()` test helper that drive-roots\n`/project/...` logical paths on Windows and is the identity on Unix, and\nrouted resolve_at + the three nested assertions through it. Test-only\nchange, no production behavior difference.",
          "timestamp": "2026-05-26T17:32:23+02:00",
          "tree_id": "901c5a8ab28e9131b75d0cc5b835536ce2651d5e",
          "url": "https://github.com/fallow-rs/fallow/commit/eb934f3b435899da5d74bb1fb67c118548d82801"
        },
        "date": 1779809629357,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 722,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c9d5682ac1beb16d4952fe098a60c6322e588d5f",
          "message": "chore: release v2.82.0",
          "timestamp": "2026-05-26T17:52:47+02:00",
          "tree_id": "94dde70ddc824f19cf6bf7f30fc107c5da118921",
          "url": "https://github.com/fallow-rs/fallow/commit/c9d5682ac1beb16d4952fe098a60c6322e588d5f"
        },
        "date": 1779810876509,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 722,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b00e97c1253cf5fbf986dbf11baea64d4c8f9236",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.82.0",
          "timestamp": "2026-05-26T19:26:31+02:00",
          "tree_id": "cc4819276aa7c621ee7fa3fbeadc3d54c2fd1e47",
          "url": "https://github.com/fallow-rs/fallow/commit/b00e97c1253cf5fbf986dbf11baea64d4c8f9236"
        },
        "date": 1779816466019,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 722,
            "unit": "count"
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
          "id": "1b91ccf1e04dc7dfb411d8fcca35315107b2f224",
          "message": "chore(deps): bump sha2 from 0.10.9 to 0.11.0 (#717)\n\nBumps [sha2](https://github.com/RustCrypto/hashes) from 0.10.9 to 0.11.0.\n- [Commits](https://github.com/RustCrypto/hashes/compare/sha2-v0.10.9...sha2-v0.11.0)\n\n---\nupdated-dependencies:\n- dependency-name: sha2\n  dependency-version: 0.11.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-26T22:15:04+01:00",
          "tree_id": "a7a37cbd2cd3e785e7ff52e0233f8e56515d48d1",
          "url": "https://github.com/fallow-rs/fallow/commit/1b91ccf1e04dc7dfb411d8fcca35315107b2f224"
        },
        "date": 1779830554888,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 723,
            "unit": "count"
          }
        ]
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
          "id": "033a5fa88d4e22320b737aa9f6b2d9035d9feb84",
          "message": "fix: parse browser extension manifest entrypoints\n\n* chore: open issue #616 implementation branch\n\n* fix: parse browser extension manifest entrypoints",
          "timestamp": "2026-05-26T22:32:35+01:00",
          "tree_id": "fc86255d043ff905ac5c0f143dff28c19360e2d7",
          "url": "https://github.com/fallow-rs/fallow/commit/033a5fa88d4e22320b737aa9f6b2d9035d9feb84"
        },
        "date": 1779831356874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 315,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 726,
            "unit": "count"
          }
        ]
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
          "id": "89626663b10ddea96a9341ee06ed458fd5b653d9",
          "message": "feat: add Varlock plugin\n\nAdd a built-in Varlock plugin that keeps .env.schema reachable, credits package-like @plugin(...) schema references, and treats varlock plus @varlock/vite-integration as tooling dependencies.\\n\\nUpdate regression coverage and plugin-count docs.\\n\\nFixes #622.",
          "timestamp": "2026-05-26T22:38:13+01:00",
          "tree_id": "42fdb42b68d8fe4f70af8f0f950fb992a301d70f",
          "url": "https://github.com/fallow-rs/fallow/commit/89626663b10ddea96a9341ee06ed458fd5b653d9"
        },
        "date": 1779831632296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 316,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 728,
            "unit": "count"
          }
        ]
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
          "id": "d8c40a1ab4032ae94dc415f72031ddc8fa528210",
          "message": "fix: share cross-platform absolute path helper\n\nMove the cross-platform absolute path helper into fallow-types while preserving the existing CLI re-export.\n\nUse the shared helper in the config extends resolver, plugin setup-file resolver, and health coverage path resolver so Windows-drive and POSIX-rooted absolute paths are not root-joined on the wrong host.\n\nFixes #614.",
          "timestamp": "2026-05-26T22:54:03+01:00",
          "tree_id": "5b9057774c29f26c4c41ed41e819c44d32ea5618",
          "url": "https://github.com/fallow-rs/fallow/commit/d8c40a1ab4032ae94dc415f72031ddc8fa528210"
        },
        "date": 1779832783989,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 316,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 728,
            "unit": "count"
          }
        ]
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
          "id": "deb45dfc573e56bece471e92de81d487e0dcea10",
          "message": "fix: support OpenNext Cloudflare config\n\n* chore: start issue 613 implementation\n\n* fix: support OpenNext Cloudflare config",
          "timestamp": "2026-05-27T06:32:34+01:00",
          "tree_id": "01da804a832353b882ed79c56daa11d2420bff8b",
          "url": "https://github.com/fallow-rs/fallow/commit/deb45dfc573e56bece471e92de81d487e0dcea10"
        },
        "date": 1779860016104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 317,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 732,
            "unit": "count"
          }
        ]
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
          "id": "a2ece98c46f8e93d64e1f9f821211117e28f7282",
          "message": "feat: add WXT plugin\n\n* chore: open issue #612 implementation branch\n\n* feat: add WXT plugin",
          "timestamp": "2026-05-27T06:34:14+01:00",
          "tree_id": "90eb1bd388bbf7fb26f8d1cdb5d367d93c5eee01",
          "url": "https://github.com/fallow-rs/fallow/commit/a2ece98c46f8e93d64e1f9f821211117e28f7282"
        },
        "date": 1779860140260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 318,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 735,
            "unit": "count"
          }
        ]
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
          "id": "0c90dbf8e14973c113698f5c210d587249a2defe",
          "message": "feat: add Obsidian plugin support\n\n* chore: open issue 617 implementation branch\n\n* feat: add Obsidian plugin support",
          "timestamp": "2026-05-27T07:09:05+01:00",
          "tree_id": "31ac4e0e89f47d3f1492e3b53aee638584a4fa76",
          "url": "https://github.com/fallow-rs/fallow/commit/0c90dbf8e14973c113698f5c210d587249a2defe"
        },
        "date": 1779862210678,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 319,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 737,
            "unit": "count"
          }
        ]
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
          "id": "26635fbe5f2fcc92badc4a78c48d135d35874e8f",
          "message": "fix(graph): resolve no-exports workspace packages to source\n\nResolve workspace packages without exports back to source when legacy package fields point at missing prebuild output.\n\nAdd a focused workspace regression fixture for #725 and keep exports-blocked package map behavior unchanged. Gate an existing cwd-dependent path test under Miri isolation after CI exposed the unrelated failure on this PR.\n\nFixes #725.",
          "timestamp": "2026-05-27T08:14:09+01:00",
          "tree_id": "c7390dff1bdcb28499451c7f4bd73346d94dcd5d",
          "url": "https://github.com/fallow-rs/fallow/commit/26635fbe5f2fcc92badc4a78c48d135d35874e8f"
        },
        "date": 1779866109513,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 319,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 737,
            "unit": "count"
          }
        ]
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
          "id": "abba841bd3bf1aa319a0c82726365cb55314511a",
          "message": "feat: add Contentlayer plugin\n\nAdd a built-in Contentlayer plugin that activates from Contentlayer and next-contentlayer packages or a root config file. The plugin keeps Contentlayer config files, generated .contentlayer modules, and static content roots reachable without requiring users to hand-maintain entry globs.\n\nThe config resolver credits imported packages and extracts static contentDirPath plus same-file defineDocumentType filePathPattern literals. Dynamic config execution and cross-file document type evaluation stay out of scope so the plugin avoids broad over-crediting.\n\nFixes #610.",
          "timestamp": "2026-05-27T08:27:32+01:00",
          "tree_id": "01b5ccc9ec41a775ec7d38ec34713f362432777b",
          "url": "https://github.com/fallow-rs/fallow/commit/abba841bd3bf1aa319a0c82726365cb55314511a"
        },
        "date": 1779866966275,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 740,
            "unit": "count"
          }
        ]
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
          "id": "ceaac6dfad07cc265d87067126f92bb76ed970b2",
          "message": "fix(tests): normalize Contentlayer fixture paths\n\nThe Contentlayer integration test asserted Unix-style suffixes against raw analyzer file paths. On Windows the analyzer can return absolute backslash paths, which made the test fail even though the orphan file was correctly reported.\n\nNormalize unused file paths relative to the fixture root before making the reachability assertions. This keeps the regression coverage focused on Contentlayer behavior instead of host path formatting.",
          "timestamp": "2026-05-27T08:50:48+01:00",
          "tree_id": "825a41a8bfb2804300f2fd5fa8938702702ce9cb",
          "url": "https://github.com/fallow-rs/fallow/commit/ceaac6dfad07cc265d87067126f92bb76ed970b2"
        },
        "date": 1779868313754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 740,
            "unit": "count"
          }
        ]
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
          "id": "041b717044b03317649fdedb2c21681f340cca2c",
          "message": "fix(health): sort file scores by triage concern and tag the driver\n\nSort file health scores by risk-aware triage concern instead of bare Maintainability Index, tag each human-table row with the signal that placed it, and break equal-concern ties by raw CRAP so the visible Risk column reads top-down.\n\nFixes #554.",
          "timestamp": "2026-05-27T08:52:18+01:00",
          "tree_id": "9ee977478dd6ebd1c8d2f77d2da6d558cd874a12",
          "url": "https://github.com/fallow-rs/fallow/commit/041b717044b03317649fdedb2c21681f340cca2c"
        },
        "date": 1779868409741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 741,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "102022084+Hal-Spidernight@users.noreply.github.com",
            "name": "Hal",
            "username": "Hal-Spidernight"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fea97b1fa7cb64ea86fd14a37cfc0864648ef5e3",
          "message": "fix(audit): symlink Nuxt/Astro generated dirs into base worktree\n\nExtend the audit base worktree's host-symlink mechanism (previously node_modules only) to also cover the gitignored `.nuxt/` and `.astro/` meta-framework generated directories, driven by a shared MATERIALIZED_CONTEXT_DIRS constant. Without them, `git worktree add --detach` left the base pass unable to resolve tsconfig `references` chains into the generated tsconfigs, emitting spurious \"missing .nuxt/tsconfig.json\" / \"missing .astro/\" warnings and falling back to resolver-less resolution. The trade-off matches node_modules: the symlinked dir is HEAD-shaped, not base-shaped, but the recovered alias-resolution accuracy outweighs the residual drift.\n\nIncludes a cross-reference between MATERIALIZED_CONTEXT_DIRS and the plugin registry's meta-framework prerequisite list so the two sets cannot silently drift, plus unit tests covering symlink creation, the skip-when-absent and preserve-real-dir branches, and per-dir independence.",
          "timestamp": "2026-05-27T09:12:40+01:00",
          "tree_id": "0cc6fb34d385b66bb70c7e7f99ba1e5d24880bd2",
          "url": "https://github.com/fallow-rs/fallow/commit/fea97b1fa7cb64ea86fd14a37cfc0864648ef5e3"
        },
        "date": 1779869629229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 741,
            "unit": "count"
          }
        ]
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
          "id": "8a1a699fa7482dc2d15427e006ff74cc19417bd5",
          "message": "feat: ignore unresolved imports by specifier\n\nCloses #726",
          "timestamp": "2026-05-27T10:21:33+01:00",
          "tree_id": "f6443cb41a853e6528688181f8d08fb50f5e085b",
          "url": "https://github.com/fallow-rs/fallow/commit/8a1a699fa7482dc2d15427e006ff74cc19417bd5"
        },
        "date": 1779873759784,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 741,
            "unit": "count"
          }
        ]
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
          "id": "92cc0594d45d2266153478496993a64c437bae87",
          "message": "feat(coverage): consume FunctionIdentity v2 across coverage joins\n\nAdopt fallow-cov-protocol 0.7.1's FunctionIdentity (a fallow:fn:<hash> join\nkey over file + name + start_line, line-position-independent). Fallow now\nproduces it on the static inventory and the sidecar request, and consumes\nidentity.stable_id as the join key (preferring it over (path, name, line)).\n\n- Inventory walker emits 1-indexed UTF-16 columns + end position per function;\n  upload-inventory builds a Resolved FunctionIdentity over the REPO-RELATIVE\n  path (not the --path-prefix-prefixed filePath) so producer and consumer agree.\n- health build_request constructs the now-#[non_exhaustive] StaticFunction via a\n  serde round-trip and attaches an Unresolved identity (stable_id only, no\n  columns; source not retained at health time).\n- convert_response, coverage analyze --cloud, and the cloud client thread\n  stable_id; analyze adds a stable_id-first match tier with a debug log when a\n  present stable_id diverges but path/name/line still matches.\n- Runtime-coverage JSON exposes stable_id on findings/hot-paths/blast/importance.\n- Baseline keys prefer stable_id when present; readers accept both the stable_id\n  and the legacy fallow:prod: id during the grace window, so old baselines keep\n  suppressing and new ones survive line moves.\n- --explain documents the fallback order and the suppression-key vs join-key\n  distinction. RiskBand/CoverageSource Unknown sentinels handled. Schema + TS\n  contracts regenerated.\n\nCloses #506",
          "timestamp": "2026-05-27T11:03:47+01:00",
          "tree_id": "0c55474739cf0c389d3e759488cf007a99a4ad29",
          "url": "https://github.com/fallow-rs/fallow/commit/92cc0594d45d2266153478496993a64c437bae87"
        },
        "date": 1779876290781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 741,
            "unit": "count"
          }
        ]
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
          "id": "e581961b5f8f1a63708017c4aeeb8beb299e855a",
          "message": "docs(coverage): correct stable_id cross-surface framing\n\nA thorough end-to-end smoke (real published 0.3.0 sidecar) showed stable_id is NOT immune to a function moving lines: function_identity_id hashes start_line, so a moved function gets a new stable_id (verified: coldFn fallow:fn:de5223fd@2 -> fallow:fn:62a6be2a@5, and the finding resurfaced against a saved baseline).\n\nThe shipped #506 docs claimed stable_id 'survives line moves' and that baselines keyed on it 'keep suppressing after a function moves lines'. That is false. Correct the framing in CHANGELOG, the --explain text (explain.rs), the baseline.rs writer/reader comments, and the RuntimeCoverageFinding.stable_id doc to describe the ACTUAL property: stable_id is a cross-surface (one value across findings/hot-paths/blast-radius/importance; the per-finding id uses a per-surface salt) and cross-producer (V8/Istanbul/oxc agree, columns excluded) join key. Like id, it changes when file/name/start_line change.\n\nCode behavior is unchanged; this is a documentation accuracy fix. Schema + VS Code/npm TS contracts regenerated. Refs #506.",
          "timestamp": "2026-05-27T11:24:58+01:00",
          "tree_id": "86df69d5fb7e0554fe4b088aefa40da42b530ecf",
          "url": "https://github.com/fallow-rs/fallow/commit/e581961b5f8f1a63708017c4aeeb8beb299e855a"
        },
        "date": 1779877564097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 741,
            "unit": "count"
          }
        ]
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
          "id": "429577db22e94059e6a5a674cc8522f5dba0f847",
          "message": "feat(plugins): resolve Nuxt convention auto-imported components in the module graph (#743)\n\nFrameworks like Nuxt expose components to templates by filesystem convention\n(`<Card001 />` resolving to `components/Card001.vue`) with no `import` statement,\nso fallow previously kept whole convention directories alive as entry points and\ncould never report a genuinely-unreferenced component as unused.\n\nThis adds a first-class `Plugin::auto_imports` capability. The work splits across\ntwo layers so per-file extraction caching stays correct: extraction captures the\nunmatched PascalCase template tags into `ModuleInfo.auto_import_candidates`\n(content-local, cached), and graph-build synthesizes the edges from the active\nplugins' auto-import table (a function of other files, never cached). The Nuxt\nplugin derives the directory-prefixed PascalCase name with prefix-overlap dedup,\npre-expands the implicit `Lazy` variant, strips `.client` / `.server` / `.global`\nsuffixes, and preserves acronym casing (`UICard`).\n\nSynthesis is unconditional and additive (a component's default export is credited\nunder `--include-entry-exports` with zero new `unused-file` reports). The opt-in\n`autoImports: true` config field gates only the Nuxt component entry-pattern\nremoval, guarded by a tolerant `components:` check on the root and workspace\n`nuxt.config` files so custom `prefix` / `pathPrefix` / `dirs` layouts keep their\nprotection. Composable, util, and Pinia store auto-imports are tracked separately\nin follow-up issues. Bumps the extract CACHE_VERSION for the new field.\n\nFixes #704.",
          "timestamp": "2026-05-27T12:04:56+01:00",
          "tree_id": "dc9924670aac42e7f8e04b0eaf800bea7dd8cdb0",
          "url": "https://github.com/fallow-rs/fallow/commit/429577db22e94059e6a5a674cc8522f5dba0f847"
        },
        "date": 1779879980598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 741,
            "unit": "count"
          }
        ]
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
          "id": "92b245db9bd6eecc588360f0df8159251a39a215",
          "message": "fix: recognize tsdown mts and cts configs\n\n* chore: open issue #744 implementation branch\n\n* fix: recognize tsdown mts and cts configs\n\n* docs: correct plugin notes count",
          "timestamp": "2026-05-27T14:45:47+01:00",
          "tree_id": "45ca3f519f2924e2db1255edd572f9b3fb5f87d9",
          "url": "https://github.com/fallow-rs/fallow/commit/92b245db9bd6eecc588360f0df8159251a39a215"
        },
        "date": 1779889615937,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 741,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7871342186d731f10d0f5caa971c57cbbd8aee2d",
          "message": "feat(coverage)!: adopt fallow-cov-protocol 0.8.0 stable_id recipe\n\nBump the fallow-cov-protocol pin 0.7 -> 0.8 in cli + extract so the CLI's\nemitted stable_id uses the reconciled recipe (NUL-delimited file/name/\nstart_line, 16 hex, fallow:fn: prefix), matching the cloud and sidecar\nproducers byte-for-byte. Updated the cross-producer conformance anchors\nto the 0.8.0 value (fallow:fn:cb4482d6aef7c79a for render@42).\n\nBREAKING: CLI-emitted stable_ids change. Runtime-coverage baselines\nwritten on 0.7.x re-surface once and need re-baselining; a\nfunction_identity_id_v1 grace-window match is a follow-up. source_hash\nline-move suppression (the additive #742 work) is unaffected.",
          "timestamp": "2026-05-27T15:52:28+02:00",
          "tree_id": "f8e1d0b75ee8c13a6c77c2e7123f99785077ee05",
          "url": "https://github.com/fallow-rs/fallow/commit/7871342186d731f10d0f5caa971c57cbbd8aee2d"
        },
        "date": 1779890139087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 741,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "8c5618273a1c514abede395ba9cc1de37a158425",
          "message": "chore: release v2.83.0",
          "timestamp": "2026-05-27T16:24:18+02:00",
          "tree_id": "9e1a43f8439c7726bbaa8769f0db662382aaa357",
          "url": "https://github.com/fallow-rs/fallow/commit/8c5618273a1c514abede395ba9cc1de37a158425"
        },
        "date": 1779891998775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 741,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "bcd212c555565601468535fb59a364a4f5bec638",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.83.0",
          "timestamp": "2026-05-27T17:00:27+02:00",
          "tree_id": "387d451daa0c0b8edf83c7aa30aafeb29165fb5a",
          "url": "https://github.com/fallow-rs/fallow/commit/bcd212c555565601468535fb59a364a4f5bec638"
        },
        "date": 1779894102644,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 741,
            "unit": "count"
          }
        ]
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
          "id": "9475785bd2600544b6d20161623e8655574f40d0",
          "message": "feat(plugins): add @sanity/pkg-utils build-config plugin (#749)\n\nProjects built with @sanity/pkg-utils discover their build configs by\nfilename convention rather than importing them from source, so each\npackage.config.* and package.bundle.* surfaced as an unused-file and had\nto be listed manually in the entry config.\n\nAdds a dedicated pkg-utils plugin that activates only on an exact\n@sanity/pkg-utils dependency (not the broad @sanity/ prefix the CMS\nsanity plugin uses, so plain @sanity/client consumers are unaffected). It\nmarks package.config.{ts,js,mts,mjs,cts,cjs} and package.bundle.* as\nalways-used at the repo root and in every workspace package (each pattern\nin bare and **/-prefixed form, since always_used matching uses\nliteral_separator with no auto prefix), and credits @sanity/pkg-utils as\na tooling dependency. No config parsing: the exports.source condition\nplus the workspace-package fallback already keep src/** reachable, so\nseeding package.bundle.ts's lib.entry would be redundant.\n\nThe credit is scoped to the two build-config filenames, so an\nunreferenced ordinary source file still reports. pkg-utils monorepos can\nnow drop the package.config.ts / package.bundle.ts lines from their entry\nconfig entirely.",
          "timestamp": "2026-05-28T12:22:03+01:00",
          "tree_id": "fcbc946a292393aed772a150f9885f7c4cd38704",
          "url": "https://github.com/fallow-rs/fallow/commit/9475785bd2600544b6d20161623e8655574f40d0"
        },
        "date": 1779967388529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 321,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 743,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "1fe7ae6722408aa817501c164933637a57af56a9",
          "message": "chore: release v2.84.0",
          "timestamp": "2026-05-28T13:39:56+02:00",
          "tree_id": "f3d04772b3909376c77bee6e263d3ce2115b6aed",
          "url": "https://github.com/fallow-rs/fallow/commit/1fe7ae6722408aa817501c164933637a57af56a9"
        },
        "date": 1779968587730,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 321,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 743,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "739840a0fe4afd3744d7429774fae0aca3f0d236",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.84.0",
          "timestamp": "2026-05-28T14:16:12+02:00",
          "tree_id": "d1d920151f1c89d1d76d5fab046517e4d4794223",
          "url": "https://github.com/fallow-rs/fallow/commit/739840a0fe4afd3744d7429774fae0aca3f0d236"
        },
        "date": 1779970642811,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 321,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 743,
            "unit": "count"
          }
        ]
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
          "id": "38a0387a8baa0d127f5ff341d7f57586034da0c7",
          "message": "fix: catch baseline drift on config-only PRs\n\n* chore: open issue 746 implementation branch\n\n* fix: disable auto PR scoping for baseline config changes",
          "timestamp": "2026-05-28T13:34:02+01:00",
          "tree_id": "44cee84a34eba33a025983ec540196f096177a06",
          "url": "https://github.com/fallow-rs/fallow/commit/38a0387a8baa0d127f5ff341d7f57586034da0c7"
        },
        "date": 1779971711875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 321,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 743,
            "unit": "count"
          }
        ]
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
          "id": "ff672bef2ae5895a0b7717fd8284b978b9686408",
          "message": "feat(dupes): clone fingerprint + trace-by-fingerprint deep-dive\n\n* feat(dupes): clone fingerprint + trace-by-fingerprint deep-dive\n\nAdd a stable content fingerprint (dup:<8hex>) to every clone group,\nsurfaced in the dupes human listing and the JSON output (clone_groups[]\nand the per-bucket --group-by output), and let 'fallow dupes --trace'\naddress a group by 'dup:<fp>' in addition to FILE:LINE.\n\nThe trace deep-dive now carries, per group, a fingerprint header, a\ngroup-level extract-function suggestion with estimated line savings, a\nbest-effort suggested name (dominant non-generic identifier; omitted when\ngeneric or tied), and a docs link.\n\nThe MCP trace_clone tool accepts an optional 'fingerprint' (file/line are\nnow optional, exactly-one-of enforced) so an agent can discover a group\nvia find_dupes (clone_groups[].fingerprint) and deep-dive it in one\nfollow-up call.\n\nThe fingerprint is derived from the representative instance's source\nfragment, so it is stable across runs, content-derived (not line-based),\nand sibling-stable (editing one group never changes another's id).\n\n* docs(dupes): document trace fingerprint, apply review notes\n\nCHANGELOG [Unreleased] entry, .claude/rules/mcp-server.md (trace_clone\ntwo addressing forms + TraceCloneParams now derives Default + find_dupes\nfingerprint), and .claude/rules/cli-crate.md (dupes --trace dup:<fp>).\n\nReview-note follow-ups: correct the clone_fingerprint empty-group\ndocstring, document the AttributedCloneGroupFinding fingerprint\norder-preservation invariant, and consolidate the duplicated docs URL\nonto the shared DOCS_DUPLICATION constant.\n\n* fix(dupes): never propose single-letter clone-extract names\n\nThe trace deep-dive's best-effort suggested_name now rejects any\nsingle-character identifier, so generic type params (T, U, K, V) and\nloop/lambda vars join the existing single-lowercase exclusions and are\nnever proposed as an extract-function name. Also document the\ndupes --trace dup:<fp> form in the README quick-reference.\n\n* fix(dupes): drop TS type keywords + globals from clone-extract names\n\nThe trace deep-dive's suggested_name was proposing TS primitive type\nkeywords (string, number, any, never, ...) and JS globals (Math, BigInt,\nJSON, ...) on type-heavy codebases, where they win the frequency count;\non zod they were the single most-proposed name. Extend is_generic_identifier\n(which already excluded void/object) with the remaining TS primitives and\ncommon globals, so these abstain instead. Verified on zod: the top name\nshifts from 'string' to 'expect'/'parse' and every keyword/global name is\ngone, while vue-core's real names are unaffected.\n\nAlso correct the MCP trace_clone description: suggested_name is OMITTED\n(serde skip_serializing_if), not null, when there is no confident name;\nagents should branch on key presence and never auto-apply.",
          "timestamp": "2026-05-28T19:10:06+01:00",
          "tree_id": "c31e1452f45377ce5cc1fbe4550b3678d307ea62",
          "url": "https://github.com/fallow-rs/fallow/commit/ff672bef2ae5895a0b7717fd8284b978b9686408"
        },
        "date": 1779991872259,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 322,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 746,
            "unit": "count"
          }
        ]
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
          "id": "bfb1e43410644b1d0376c62a8b9cf0661b4cd796",
          "message": "fix(scripts): credit a binary run via `bun --flag <bin>` in a script (#761)\n\nA package.json script like \"prepare\": \"is-ci || bun --bun prek install\"\nleft the providing package flagged unused. The shell parser treated\n`bun --bun ...` as a bare `bun <script>` invocation (like `yarn build`)\nand dropped the whole command before the `prek` binary could be resolved\nto its package.\n\nbun's leading boolean runtime flags (--bun, --watch, --hot, --smol,\n--no-clear-screen) are now skipped so the executed binary is extracted\nand credited through the existing bin-to-package map. `bun --watch run\ndev` and bare `bun <script>` still resolve to script delegations, and\n`bun x <pkg>` (the bun-native alias of bunx) is recognized. An\nunrecognized leading flag is conservatively treated as a script\ndelegation rather than guessed at, since it may consume a value.\n\nCloses #755",
          "timestamp": "2026-05-28T21:08:49+01:00",
          "tree_id": "8414e9c93daeae582b473d8c497c7aa378ba1f50",
          "url": "https://github.com/fallow-rs/fallow/commit/bfb1e43410644b1d0376c62a8b9cf0661b4cd796"
        },
        "date": 1779998993842,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 322,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 746,
            "unit": "count"
          }
        ]
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
          "id": "d789bba393152501e4083c326a73bb67786dde3c",
          "message": "fix(plugins): credit babel-plugin-react-compiler via reactCompilerPreset() (#764)\n\nThe #623 react-compiler detection only recognised the dependency when it\nwas wired through a Babel `plugins` array. The documented @vitejs/plugin-react\n6.x setup enables React Compiler through the `reactCompilerPreset()` preset\nhelper instead (`babel({ presets: [reactCompilerPreset()] })` via the\nstandalone @rolldown/plugin-babel), so the dependency kept surfacing as an\nunused dev-dependency and projects worked around it with ignoreDependencies.\n\nExtracts the react-compiler crediting logic out of vite.rs into a shared\ncrates/core/src/plugins/react_compiler.rs module used by both the Vite and\nElectron plugins. The Vite plugin scans the top-level `plugins` array; the\nElectron plugin scans each electron-vite section (main/preload/renderer)\n`<section>.plugins` array, since the Vite plugin never sees\nelectron.vite.config.*. Plugin-name strings/tuples are credited on `plugins`\npaths (the #623 shape); the provenance-checked `reactCompilerPreset()` helper\ncall is credited only inside `presets`/`babel.presets` arrays. A preset call\nin a `plugins` slot, the namespace-import form, and the variable-indirection\nform are deliberately not credited.\n\nFixes #751.",
          "timestamp": "2026-05-28T20:26:08Z",
          "tree_id": "06ad0cc1fc277de483a1f23e2fb90f26a663b523",
          "url": "https://github.com/fallow-rs/fallow/commit/d789bba393152501e4083c326a73bb67786dde3c"
        },
        "date": 1780000036762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 323,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 747,
            "unit": "count"
          }
        ]
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
          "id": "7d66ae525b5387a8bf41378a9fa42aaa286df16e",
          "message": "fix: resolve workspace imports when tsconfig paths point at unbuilt dist (#763)\n\nA common monorepo convention maps a sibling-package specifier to compiled\noutput in tsconfig (`\"@scope/*\": [\"../*/dist/index.d.ts\"]`). The TypeScript\nplugin registers `@scope/` as a path alias, so a `@scope/pkg` import matches\n`matches_plugin_alias`. When the project is analyzed pre-build, the dist target\ndoes not exist, `try_path_alias_fallback` returns None, and `resolve_specifier`\nreturned `Unresolvable` without trying the workspace-package fallback. Every\nconsumer reported `unresolved-import` and the package reported\n`unused-dependency`.\n\nIn the Failed branch's `is_alias || matches_plugin_alias` arm, fall through to\n`try_workspace_package_fallback` for a valid bare package specifier when the\nalias fallback fails, before reporting `Unresolvable`. The workspace fallback\nalready maps `dist`->`src`, so the import resolves against the package source.\n\nPre-build clone of graphql-markdown/graphql-markdown: 264 false\n`unresolved-import` findings and the matching `unused-dependency` reports clear.\nBenchmark deltas are directionally correct (astro/next.js/vite unresolved down,\nunused deps down; a small unlisted increase is correct reclassification of\npreviously-unresolved workspace imports).\n\nFixes #757",
          "timestamp": "2026-05-28T21:28:18+01:00",
          "tree_id": "345d36a26d1b63b2da6a09fdf2465a92efe39dfc",
          "url": "https://github.com/fallow-rs/fallow/commit/7d66ae525b5387a8bf41378a9fa42aaa286df16e"
        },
        "date": 1780000163618,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 323,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 747,
            "unit": "count"
          }
        ]
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
          "id": "d22ba3781fb7c0588c7a62acd6fc242b41ff8ce2",
          "message": "fix(extract): credit class members used via typed destructure bindings (#762)\n\nClass methods/properties called as `<local>.<method>(...)` where `<local>`\nis a typed destructured binding (`let { resultState }: Props = $props()` with\n`interface Props { resultState: ResultState }`, or an inline type literal, or a\ndestructured function parameter) were reported as `unused-class-member`. The\nvisitor only seeded `binding_target_names` for `new`-expression instances,\nsingle-identifier typed bindings, formal params, and class properties, never\nfor destructured bindings, so neither script-level calls nor Svelte/Vue\ntemplate member access credited the class members.\n\nTyped destructure bindings now populate `binding_target_names`: inline type\nliterals resolve in place; named interface / object-type-alias references defer\nto a finalize step that resolves through a module-scope property-type map\n(source-order-independent, since interfaces hoist). Wired into the SFC path\nbefore the template scan reads the targets. Resolution is type-driven, so it\nalso covers plain TypeScript and Vue. Conservative: only bare single-name\nproperty types resolve; genuinely unused members are still reported.\n\nBumps the extract CACHE_VERSION (102 -> 103) because the resulting\nmember_accesses change.\n\nFixes #752",
          "timestamp": "2026-05-28T20:45:49Z",
          "tree_id": "d51918e2852f050046c6d27013648ee06ecfc900",
          "url": "https://github.com/fallow-rs/fallow/commit/d22ba3781fb7c0588c7a62acd6fc242b41ff8ce2"
        },
        "date": 1780001212667,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 323,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 747,
            "unit": "count"
          }
        ]
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
          "id": "ae4801953a1bf07f585b5795592671c4840f7451",
          "message": "fix: activate Danger plugin from dangerfiles\n\n* chore: open issue 758 implementation branch\n\n* fix: activate Danger plugin from dangerfiles",
          "timestamp": "2026-05-28T22:51:43+01:00",
          "tree_id": "7022d2bd7cf381aa7dca43696f7c41cd6ceb31d9",
          "url": "https://github.com/fallow-rs/fallow/commit/ae4801953a1bf07f585b5795592671c4840f7451"
        },
        "date": 1780005167595,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 323,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 747,
            "unit": "count"
          }
        ]
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
          "id": "a48fa7e875adb5cbf80fd7e003319568ca4a5e06",
          "message": "test(cli): guard credential redaction paths\n\nAdds regression guards for authenticated ureq paths that must pass transport errors through sanitize_network_error.\n\nAdds source-level guards that known credential-bearing CLI argument and request structs keep manual Debug implementations that redact token fields.\n\nRefs #476.",
          "timestamp": "2026-05-28T23:05:58+01:00",
          "tree_id": "aa3336e2d564054eb917ffa26e76ad6fe7b69708",
          "url": "https://github.com/fallow-rs/fallow/commit/a48fa7e875adb5cbf80fd7e003319568ca4a5e06"
        },
        "date": 1780006021796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 323,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 747,
            "unit": "count"
          }
        ]
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
          "id": "7a1efb9bfce7a5e177c6a1bd008ce4365056a365",
          "message": "feat(health): add coverage intelligence verdict (#768)\n\n* chore: open issue #507 implementation branch\n\n* feat: add coverage intelligence verdict\n\n* fix: tighten coverage intelligence output",
          "timestamp": "2026-05-29T07:01:29+01:00",
          "tree_id": "9045cdfa4e17ce2e66c0b4ce5ca3d3f0d8073fbb",
          "url": "https://github.com/fallow-rs/fallow/commit/7a1efb9bfce7a5e177c6a1bd008ce4365056a365"
        },
        "date": 1780034552286,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 325,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 758,
            "unit": "count"
          }
        ]
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
          "id": "bd359f719bf1f512f32aed3bad6562fa6c5af0a6",
          "message": "fix(extract): preserve container source positions\n\nPreserve source-authored spans when MDX, Astro, Vue/Svelte SFC, and CSS/SCSS extraction feed generated fragments through the JavaScript parser. The shared remapper translates parsed spans back to original container byte offsets before module info is finalized, while intentionally synthetic reachability edges remain unpositioned.\n\nAlso credit Svelte 5 $derived(new Class()) and $derived.by(...) template member access through the derived class instance.\n\nCloses #445.",
          "timestamp": "2026-05-29T06:43:04Z",
          "tree_id": "b01bed3d94bec33fd8e37788dabe070966551de5",
          "url": "https://github.com/fallow-rs/fallow/commit/bd359f719bf1f512f32aed3bad6562fa6c5af0a6"
        },
        "date": 1780037046969,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 20,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 326,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 761,
            "unit": "count"
          }
        ]
      }
    ]
  }
}