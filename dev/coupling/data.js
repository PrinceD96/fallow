window.BENCHMARK_DATA = {
  "lastUpdate": 1780953611758,
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
          "id": "a3adfa9fd45ac6440cd11202c2b00ddd507b921e",
          "message": "test(security): pin prototype-pollution __proto__ matcher + cast blind spot\n\nThe catalogue had a `*.__proto__` member-assign matcher but the fixture\nonly exercised the recursive-merge row. Add a static `obj.__proto__ = x`\npositive (asserted by line so it is distinct from the merge candidate)\nand a TypeScript-cast `(obj as {...}).__proto__ = x` negative that pins\nthe documented flattening blind spot (cast object is a TSAsExpression,\nnot a bare identifier, so the callee path does not resolve). Also note\nthe blind spot in security_matchers.toml.",
          "timestamp": "2026-06-02T18:14:33+02:00",
          "tree_id": "002613256f3816c6016fcc9360a434ce3531d53a",
          "url": "https://github.com/fallow-rs/fallow/commit/a3adfa9fd45ac6440cd11202c2b00ddd507b921e"
        },
        "date": 1780416953301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 334,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 789,
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
          "id": "60a9b7667a7e6536d2838fd408f8432f84cf4ca5",
          "message": "fix(extract): remap SFC security sink spans\n\nSecurity sink extraction in Vue and Svelte scripts reused parser-local byte offsets after the surrounding SFC source had been restored for line lookup. This made reports point at the same line number inside the script body instead of the real line in the component file.\n\nRemap captured sink spans through the same SFC offset translation used for imports, exports, and other extracted references. Add a Vue script setup regression test that checks the sink span resolves to the original component source.",
          "timestamp": "2026-06-02T20:58:53+02:00",
          "tree_id": "004ab96213410aa65db768a4c7faa2f662d35373",
          "url": "https://github.com/fallow-rs/fallow/commit/60a9b7667a7e6536d2838fd408f8432f84cf4ca5"
        },
        "date": 1780426820525,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 334,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 789,
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
          "id": "50d1ef0541b80b6ee0432d95949eb21621fcc95d",
          "message": "feat(mcp): add security candidates tool\n\nAgents need a structured way to inspect the existing fallow security candidate surface without shelling out or enabling mutating CLI paths. Add a read-only MCP tool that runs fallow security in JSON mode and keeps the wording explicit that results are unverified candidates, not confirmed vulnerabilities.\n\nThe MCP layer now has SecurityCandidatesParams plus a dedicated arg builder, server registration, schema and description checks, argument tests, and an e2e smoke against the security fixture. The exposed params are limited to root, config, workspace, changed_since, changed_workspaces, no_cache, and threads; SARIF, CI, failure, summary, baseline, and fix behavior remain CLI-only.\n\nThe MCP rule docs, bundled npm skill, changelog, and agent-file checksum are updated for the new tool inventory.\n\nFixes #864.",
          "timestamp": "2026-06-02T21:09:17+02:00",
          "tree_id": "9841920ddf28744782405080f2cd832957decb8e",
          "url": "https://github.com/fallow-rs/fallow/commit/50d1ef0541b80b6ee0432d95949eb21621fcc95d"
        },
        "date": 1780427447051,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 334,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 789,
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
          "id": "571d78a5805e1dff2e27f3ae93b01d7ff9ec031b",
          "message": "fix(security): suppress DOMPurify-backed HTML sinks\n\nHTML sink candidates are higher signal when fallow can distinguish values that pass through a trusted sanitizer before they reach the sink. This teaches extraction to recognize DOMPurify and isomorphic-dompurify provenance from default imports, namespace imports, and CommonJS require bindings, then records sanitized sink arguments for the security analyzer.\n\nSanitized locals are resolved lexically during extraction so shadowed identifiers cannot suppress unrelated sinks. The analyzer only applies the suppression to HTML sink categories; redirect and path-containment sanitizer handling remains out of scope.\n\nRefs #863.",
          "timestamp": "2026-06-02T21:10:48+02:00",
          "tree_id": "fee314638f09ed803c84ab30035451b6a275c0b2",
          "url": "https://github.com/fallow-rs/fallow/commit/571d78a5805e1dff2e27f3ae93b01d7ff9ec031b"
        },
        "date": 1780427566042,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 334,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 789,
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
          "id": "92fbd74399bc6138a771c51a9dde7c8dbd83ae95",
          "message": "fix(unused-class-members): credit Ionic lifecycle hooks\n\nIonic Angular invokes page lifecycle methods by name through its router outlet, with the TypeScript interfaces acting as optional compile-time structure rather than the runtime dispatch boundary. Treat the documented Ionic page hooks as framework-used whenever the Ionic Angular plugin is active.\n\nAdd a built-in Ionic plugin that activates on @ionic/angular, keeps ionic.config.json reachable, and credits common Ionic tooling dependencies. The regression fixture keeps the real lifecycle names quiet while preserving a same-prefix typo as an unused class member.\n\nFixes #868.",
          "timestamp": "2026-06-02T21:46:24+02:00",
          "tree_id": "0e0ad03b4b8e40a540f04161c387088fa5fa503b",
          "url": "https://github.com/fallow-rs/fallow/commit/92fbd74399bc6138a771c51a9dde7c8dbd83ae95"
        },
        "date": 1780429720413,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 335,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 791,
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
          "id": "011ab0d125ddc254e3c76ecaac775e21912e1124",
          "message": "fix(sass): resolve package entrypoint imports\n\nSass package roots can resolve through package export conditions such as `sass` and `style`, but fallow only applied the style resolver to package subpaths that already looked like stylesheet files. This left Angular Material theming imports reported as unresolved and cascaded into unused dependency findings.\n\nThis wires the Sass condition into the style resolver, preserves resolved package stylesheets as external style files, and lets the external style scanner follow package-local relative Sass imports with partial and index lookup. Synthetic package credits are limited to packages declared by the importing root or workspace, so dependency internals do not create new unlisted dependency findings.\n\nFixes #871.",
          "timestamp": "2026-06-02T22:40:27+02:00",
          "tree_id": "87709ce8bb0467c3c2a1047338d6e4fb13900076",
          "url": "https://github.com/fallow-rs/fallow/commit/011ab0d125ddc254e3c76ecaac775e21912e1124"
        },
        "date": 1780432903881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 335,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 791,
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
          "id": "d96cd668b184d9f01d6c7654ae52858869e8821c",
          "message": "fix(plugins): keep Firebase Messaging worker reachable\n\nFirebase Messaging loads its default service worker by browser convention from public/firebase-messaging-sw.js, so normal import graph reachability cannot see it. Treating that file as an ordinary unreferenced source file caused valid notification setups to report an unused file.\n\nThis adds a built-in Firebase plugin that activates on the exact firebase dependency and marks the root and nested public service worker paths as always used. Dependency credit is intentionally unchanged, so the firebase package still depends on source imports or other package usage.\n\nThe regression fixture covers root and nested public workers plus ordinary public control files, and the detection note records the convention for future plugin work.\n\nFixes #873.",
          "timestamp": "2026-06-03T00:46:07+02:00",
          "tree_id": "071e4dacfa38951d4a196470a95c6559ebdf3b1a",
          "url": "https://github.com/fallow-rs/fallow/commit/d96cd668b184d9f01d6c7654ae52858869e8821c"
        },
        "date": 1780440445106,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 793,
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
          "id": "b1d9593b4341ff105f424cffd6a8dc89aa8f9c5f",
          "message": "fix(security): suppress sanitized sink candidates\n\nTeach the extraction pipeline to carry sanitizer metadata for URL and path security sink candidates without changing the security output contract.\n\nURL suppression is limited to fail-closed guards backed by literal local const arrays or Sets. Path suppression is limited to path.resolve, path.normalize, or path.join values tied to path.relative containment checks. Mutated allowlists, reassigned guarded values, helper predicates, post-use guards, and wrong-domain sanitizer use remain candidates.\n\nThe analyzer applies each sanitizer scope only to matching catalogue categories, and the extraction cache version is bumped so warm caches re-extract affected files.\n\nFixes #863.",
          "timestamp": "2026-06-03T00:48:10+02:00",
          "tree_id": "9ab3ecae27aff89ac1aa5eabd45f2f8bb0fe10d5",
          "url": "https://github.com/fallow-rs/fallow/commit/b1d9593b4341ff105f424cffd6a8dc89aa8f9c5f"
        },
        "date": 1780440583754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 793,
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
          "id": "d9d22a3d447bf9581594d0cced31796cd294d9e2",
          "message": "chore: release v2.87.0",
          "timestamp": "2026-06-03T08:39:52+02:00",
          "tree_id": "815db7248a43c7e4143447b82a5460727d8b5229",
          "url": "https://github.com/fallow-rs/fallow/commit/d9d22a3d447bf9581594d0cced31796cd294d9e2"
        },
        "date": 1780468927204,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 793,
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
          "id": "423f294107bf5e29eb8e30e8740ede36cf66ce29",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.87.0",
          "timestamp": "2026-06-03T09:15:48+02:00",
          "tree_id": "b63977ad16375415cb575923f4d794efc98ce773",
          "url": "https://github.com/fallow-rs/fallow/commit/423f294107bf5e29eb8e30e8740ede36cf66ce29"
        },
        "date": 1780471029904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 793,
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
          "id": "ce102d0bd0315b0f52f96d003c268fd44f574899",
          "message": "feat(dupes): surface minOccurrences in combined mode and VS Code\n\nThe duplication minOccurrences threshold (rule-of-three control) was\nonly reachable via the config file or the standalone `fallow dupes`\nsubcommand, so users who drive fallow through the bare combined command\nor the VS Code extension could not raise it. Add a global\n`--dupes-min-occurrences` flag (combined mode), validated `>= 2` through\nthe shared `parse_min_occurrences` parser and threaded through\nCombinedOptions into the dupes options with a config-value fallback, and\na matching `fallow.duplication.minOccurrences` extension setting\nforwarded to the CLI in commands.ts.\n\nWhile surfacing it, fix a pre-existing mislabel on the neighbouring\n`fallow.duplication.threshold` setting: it forwards `--dupes-threshold`\n(a duplication-percentage failure cap where 0 means no limit), not a\nminimum line count, and it defaulted to 5, silently imposing a 5%\nfailure ceiling that diverged from the CLI default. Correct the\ndescription and align the default to 0.\n\nLive LSP diagnostics continue to read the config file directly, matching\nhow the existing mode and threshold settings behave; that path is out of\nscope here. Docs and the settings enumeration are updated to match.\n\nFixes #894.",
          "timestamp": "2026-06-03T09:25:13+02:00",
          "tree_id": "10db92e160e4dc1dfd6ea19a0490631de3b8415e",
          "url": "https://github.com/fallow-rs/fallow/commit/ce102d0bd0315b0f52f96d003c268fd44f574899"
        },
        "date": 1780471589108,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 793,
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
          "id": "9910174dcf74e1be3826e7dcba76c13cf0d650a5",
          "message": "fix(unused-class-members): credit Angular inject templates\n\nAngular external templates can reference service members through component fields initialized with Angular's inject() helper. Those untyped fields were already credited for in-class member access, but they were missing from ClassHeritageInfo instance bindings, so the external-template bridge could not resolve the target service member.\n\nThis change shares the Angular inject target extraction with class instance binding extraction, keeps the match gated to named imports from @angular/core, and covers alias imports such as inject as ngInject. It also bumps the extract cache version so warm caches re-extract affected component files.\n\nFixes #911.",
          "timestamp": "2026-06-03T10:59:32+02:00",
          "tree_id": "d71167b481164c85a137b6aeafb418bd28de077d",
          "url": "https://github.com/fallow-rs/fallow/commit/9910174dcf74e1be3826e7dcba76c13cf0d650a5"
        },
        "date": 1780477403862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 793,
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
          "id": "5a6884f0ae6526884aff0b17024a3786b44fe399",
          "message": "fix(extract): credit structural class member calls\n\nTrack local typed function calls that receive concrete class instances and credit only the class members read through the matching typed parameter. The extractor keeps this scoped to local callees, exact argument positions, direct constructor arguments, and constructor-bound identifiers.\n\nRespect block-scoped shadows of the typed parameter name so unrelated local objects do not credit the concrete class argument. The change adds extractor and core regressions, updates detection notes, bumps the extraction cache for the new member-access semantics, and aligns the CODEOWNERS smoke test with the current scoped owner file.\n\nFixes #910.",
          "timestamp": "2026-06-03T11:25:35+02:00",
          "tree_id": "58212b3a8868620e346dafbf2e92f33f4072b0fb",
          "url": "https://github.com/fallow-rs/fallow/commit/5a6884f0ae6526884aff0b17024a3786b44fe399"
        },
        "date": 1780478819390,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 793,
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
          "id": "a45deb010be1b521c33ab78f8e3be4106658c183",
          "message": "fix: credit bare pnpm script binaries\n\nCredit dependency usage for package scripts, workspace scripts, and CI run blocks that invoke a declared package binary through bare `pnpm <binary>`. The parser keeps its syntax-only public path conservative, while the analysis path now receives dependency and script-name context before crediting pnpm implicit execution.\n\nKeep pnpm script delegation and built-in commands out of dependency credit, including local script names that were filtered out of production-mode analysis. This avoids trading the envinfo false positive for new false negatives around `pnpm build`, `pnpm lint`, `pnpm test`, `pnpm start`, `pnpm install`, `pnpm audit`, and `pnpm add`.\n\nFixes #914.",
          "timestamp": "2026-06-03T12:59:58+02:00",
          "tree_id": "aa78ad8e40397ea78ab35ac1f18779dcc68133d8",
          "url": "https://github.com/fallow-rs/fallow/commit/a45deb010be1b521c33ab78f8e3be4106658c183"
        },
        "date": 1780484463714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "5a7ea079cf47bdc2dd22426693ce151c3e2190cf",
          "message": "feat(cli): accept -v as a version flag alias\n\nMake -v, -V, and --version all print the version. Previously clap's\ndefault exposed only -V/--version. Lowercase -v is the version flag in\nthe TS/JS toolchain fallow's users run (node, npm, pnpm, yarn, bun, tsc,\neslint, prettier), so it becomes the primary short form; -V is kept for\nback-compat (matching knip, oxlint, biome).\n\nDisables clap's auto version flag and adds a custom version arg with\nshort = 'v', visible_short_alias = 'V', and long = version, keeping the\ncrate version string set so ArgAction::Version has a value to print.\n\nFixes #916.",
          "timestamp": "2026-06-03T14:14:58+02:00",
          "tree_id": "a6379be25bc14a82ca7b6b091761903b8cd2ba92",
          "url": "https://github.com/fallow-rs/fallow/commit/5a7ea079cf47bdc2dd22426693ce151c3e2190cf"
        },
        "date": 1780488964787,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "e55a2e99465680156af180a0ce5732672a633a09",
          "message": "fix: resolve root HTML public assets\n\nHTML entries can reference assets from a Vite-style public directory with browser-root URLs. The resolver keeps the existing document-root lookup order, then tries <root>/public/... only for real .html importers so JS and TS root-relative imports keep their previous behavior.\n\nStatic directory joins now reject parent traversal, absolute paths, and Windows drive prefixes before probing the filesystem. The regression fixture covers the reported public JS and CSS assets and preserves unresolved reporting for missing public files.\n\nFixes #915.",
          "timestamp": "2026-06-03T14:18:20+02:00",
          "tree_id": "491354d34c1f48a5042baee9b48477709b2964d3",
          "url": "https://github.com/fallow-rs/fallow/commit/e55a2e99465680156af180a0ce5732672a633a09"
        },
        "date": 1780489164088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "9a3dc7dafe169bb807b17c73211c516ec807895f",
          "message": "chore: release v2.88.0",
          "timestamp": "2026-06-03T15:04:14+02:00",
          "tree_id": "b5e28a237500fdb4e688a46330759930b4a12e81",
          "url": "https://github.com/fallow-rs/fallow/commit/9a3dc7dafe169bb807b17c73211c516ec807895f"
        },
        "date": 1780492015344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "0686852b1a7ea66e1d4e94e6965b227b35065c5a",
          "message": "fix: credit Angular inject(InjectionToken) template members (#924)\n\nFollow-up to #911 / #913. A component field initialized with inject(SOME_TOKEN), where SOME_TOKEN is an InjectionToken<Interface> and a project class implements that interface, left the implementation's methods reported as unused class members when the only reference was an Angular external-template call through that field. #913 fixed the concrete-class case; this covers the token case the prior fix could not reach.\n\nExtraction records new InjectionToken<I>(...) declarations from @angular/core as (token, interface) pairs on ModuleInfo.injection_tokens. The analyze-layer template-chain bridge follows the token to its interface and credits the accessed member on every class implementing that interface, covering both the untyped and interface-typed field forms. Crediting all implementers is the safe over-credit direction; provider parsing is out of scope. Extract CACHE_VERSION bumped.\n\nFixes #920.",
          "timestamp": "2026-06-03T15:26:36+02:00",
          "tree_id": "64a8a9b1ca7af09cb39e94f10306c4c4b62135fe",
          "url": "https://github.com/fallow-rs/fallow/commit/0686852b1a7ea66e1d4e94e6965b227b35065c5a"
        },
        "date": 1780493313987,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "2b077f76c560fa11399796a662ee6f31b984f7e7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.88.0",
          "timestamp": "2026-06-03T15:40:02+02:00",
          "tree_id": "033007ff69aeaaa1dbce82d40beacffafdbeb337",
          "url": "https://github.com/fallow-rs/fallow/commit/2b077f76c560fa11399796a662ee6f31b984f7e7"
        },
        "date": 1780494089880,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "157f6bd4d53c0c7ad3bb8293dec6c6c1bc366571",
          "message": "chore: release v2.88.1",
          "timestamp": "2026-06-03T17:13:41+02:00",
          "tree_id": "847a5172bc2fbda88d8994035de8cb55ae6f7c1e",
          "url": "https://github.com/fallow-rs/fallow/commit/157f6bd4d53c0c7ad3bb8293dec6c6c1bc366571"
        },
        "date": 1780499734566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "dfecf5f20c9971519820c658f6c9b935187f8e98",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.88.1",
          "timestamp": "2026-06-03T18:45:42+02:00",
          "tree_id": "15e23789422a41b3a03ba44ec7d8de4f2cdbb154",
          "url": "https://github.com/fallow-rs/fallow/commit/dfecf5f20c9971519820c658f6c9b935187f8e98"
        },
        "date": 1780505221370,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "8e76b84eb47170f9d6338dc54bcabedfbc855f3f",
          "message": "fix(lsp): report a version for --version so binary-skew detection works (#926)\n\nfallow-lsp and fallow-mcp were stdio servers with no argument parsing, so a --version probe started the server, hit EOF on stdin, and exited silently. The VS Code binary-skew check reads <binary> --version, so getBinaryVersion's loose semver regex latched onto stray numbers (a Node crash banner, a sentinel-path digit, the npm shim's verified line), producing a bogus version-mismatch warning.\n\nfallow-lsp / fallow-mcp now honor --version / -V / -v and print <bin> <version>; getBinaryVersion anchors to that shape and returns null otherwise.\n\nSurfaced while investigating the regression in #894.",
          "timestamp": "2026-06-03T19:23:56+02:00",
          "tree_id": "6952e46edf47a6d7ee9d0423efc21835a81057a0",
          "url": "https://github.com/fallow-rs/fallow/commit/8e76b84eb47170f9d6338dc54bcabedfbc855f3f"
        },
        "date": 1780507512658,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "9492a4d98b5c4ca95670716fced39029cc28f375",
          "message": "chore: release v2.88.2",
          "timestamp": "2026-06-03T19:49:51+02:00",
          "tree_id": "1cc38f272b3a33b077eb84d47342f2f7469e5327",
          "url": "https://github.com/fallow-rs/fallow/commit/9492a4d98b5c4ca95670716fced39029cc28f375"
        },
        "date": 1780509077140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "45f8c17eed7cf602ffff88ff8b9b8e8d648838aa",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.88.2",
          "timestamp": "2026-06-03T20:24:13+02:00",
          "tree_id": "2546e14eba7661a574b0460f9d12efc8a4c98534",
          "url": "https://github.com/fallow-rs/fallow/commit/45f8c17eed7cf602ffff88ff8b9b8e8d648838aa"
        },
        "date": 1780511125150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "d1521c271ae0eb77482c7b211ec07532742b616b",
          "message": "test(core): cover Vite array aliases\n\nThe issue report used Vite's resolve.alias array form with an @ shortcut that maps to src via path.resolve. Existing resolver support handled this shape, but there was no fixture matching the reported config, so future resolver changes could regress it silently.\n\nAdd a dedicated Vite fixture with array aliases and an integration assertion that @/auth.js is resolved, src/auth.js is not treated as unused, and unused exports inside the reachable module still report normally.\n\nRefs #915.",
          "timestamp": "2026-06-04T07:14:07+02:00",
          "tree_id": "a44361b5ce5c700a35521112460f9371aee1f199",
          "url": "https://github.com/fallow-rs/fallow/commit/d1521c271ae0eb77482c7b211ec07532742b616b"
        },
        "date": 1780550409086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "6e1a3db21cdeed9e0a83376e283d7adb4a4c9805",
          "message": "chore: release v2.88.3\n\nShips the #944 packaging integrity gate (declared-files + every-binary-signed),\nthe version-aware sig-missing error, the Action dual-knob failure context, the\nfallow --version signing annotation, and the SECURITY.md signing-epoch section.\nAlso includes two fixes that landed since v2.88.2: fallow -v through the npm\nlauncher now prints the verified line, and the VS Code extension self-heals\nwhen the resolved CLI predates the extension.\n\nBundles an oxfmt 0.52.0 reformat of run-binary.test.js (one wrapped assert line)\nto keep main CI green after the oxfmt dependency bump.",
          "timestamp": "2026-06-04T11:04:52+02:00",
          "tree_id": "eefa33722cc29adcf00f1b95b192341a653aea0f",
          "url": "https://github.com/fallow-rs/fallow/commit/6e1a3db21cdeed9e0a83376e283d7adb4a4c9805"
        },
        "date": 1780564043914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "a9763c24cf7ddbf973bf71e0edb6fe08e70c5a4d",
          "message": "feat(vscode): expose duplication settings\n\nExpose the remaining duplication settings in VS Code and pass them through the sidebar combined analysis run.\n\nAdd matching combined-mode duplication flags in the CLI so the extension can apply those settings without creating a temporary config file. Keep stale resolved CLIs on the existing version-gated degradation path.\n\nFixes #909.",
          "timestamp": "2026-06-04T11:24:25+02:00",
          "tree_id": "1434758cb1bb4758f24aab67aec052a9a492bf4f",
          "url": "https://github.com/fallow-rs/fallow/commit/a9763c24cf7ddbf973bf71e0edb6fe08e70c5a4d"
        },
        "date": 1780565150518,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "200a337dc3acc3bcb6879f6c76d71dc521c4d8ba",
          "message": "fix(unused-class-members): credit Angular inline inject tokens\n\nInline Angular templates now feed same-file template chains through the existing InjectionToken to interface to implementer bridge. This credits inline-only calls such as greeter.inlineGreet() while preserving unused-member reporting for unrelated members on the same class.\n\nFixes #923.",
          "timestamp": "2026-06-04T11:31:50+02:00",
          "tree_id": "fd317337a4efe09304043448845fe2feb80abcae",
          "url": "https://github.com/fallow-rs/fallow/commit/200a337dc3acc3bcb6879f6c76d71dc521c4d8ba"
        },
        "date": 1780565658762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "88fd8c96b801e150e85353f6e28fa34c594d2838",
          "message": "fix: resolve relative package root source entries\n\nRelative imports that point at the package root could be reported unresolved when the package only has source files and package metadata points at an unbuilt entry. This affected source-first packages such as preact, where tests import ../../ and the generated dist entry is absent from the fixture.\n\nThis adds a narrow fallback for relative imports that land exactly on a known package root. The fallback resolves through safe package source entries and existing source-index conventions, with regression coverage for non-standard source entry paths.",
          "timestamp": "2026-06-04T11:34:55+02:00",
          "tree_id": "a54e3bf530bc2e27a636ea3ee62cc8211a54100f",
          "url": "https://github.com/fallow-rs/fallow/commit/88fd8c96b801e150e85353f6e28fa34c594d2838"
        },
        "date": 1780565847055,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "e0c6e2171bba529b632a2e7f54e52513a951a796",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.88.3",
          "timestamp": "2026-06-04T11:46:20+02:00",
          "tree_id": "5c5fc2e17ff7c88bd7f62cdb5c51e2c5257ed554",
          "url": "https://github.com/fallow-rs/fallow/commit/e0c6e2171bba529b632a2e7f54e52513a951a796"
        },
        "date": 1780566457617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "219211dbfd1021a75f88d95fbc2b359569e3596b",
          "message": "test(conformance): harden source fallback coverage\n\nAdd explicit positive and negative coverage for package source path handling so relative package source entries stay accepted while unsafe paths remain rejected.\n\nUpdate the conformance comparison script to tolerate BOM-prefixed JSON, normalize relative and absolute path shapes, and report real tool execution errors separately from JSON parse failures.",
          "timestamp": "2026-06-04T12:13:18+02:00",
          "tree_id": "aceebf2a049587839b01f91433ddfb00582b3074",
          "url": "https://github.com/fallow-rs/fallow/commit/219211dbfd1021a75f88d95fbc2b359569e3596b"
        },
        "date": 1780568061810,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 336,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 792,
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
          "id": "b740cf1a817c8d9bc8a7498f61e0e404f71a4ba4",
          "message": "fix(vscode): align provider and duplication behavior\n\nAdd a VS Code plugin that credits provider interface methods when a class implements the matching VS Code provider interface.\n\nForward VS Code duplication settings into LSP initialization options so live diagnostics match sidebar CLI analysis.\n\nHarden VS Code LSP restart handling for rapid config changes during client startup.\n\nFixes #948.\nFixes #905.",
          "timestamp": "2026-06-04T12:33:57+02:00",
          "tree_id": "b6fe6d55376f03a7da643ad0d48ee9923d9e8d29",
          "url": "https://github.com/fallow-rs/fallow/commit/b740cf1a817c8d9bc8a7498f61e0e404f71a4ba4"
        },
        "date": 1780569304728,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 337,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 794,
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
          "id": "88f048b7af1acc3200cd32b7f3ef2b1adc27e0ab",
          "message": "fix(vscode): honor explicit duplication overrides\n\nRead VS Code duplication settings as explicit overrides instead of effective package defaults, so project config remains the source of truth unless the user configured a setting.\n\nSidebar analysis now forwards only configured duplication CLI flags. LSP initialization sends the same optional override payload and applies explicit boolean values after project config. The client restart path also waits through startup so config restarts do not race stale clients.",
          "timestamp": "2026-06-04T12:57:14+02:00",
          "tree_id": "ef5a596290ed50c15cdba45db7db027bd36ae973",
          "url": "https://github.com/fallow-rs/fallow/commit/88f048b7af1acc3200cd32b7f3ef2b1adc27e0ab"
        },
        "date": 1780570724175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 337,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 794,
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
          "id": "d85c07a9b940a6025bf5466e7867ab293efc4493",
          "message": "feat(vscode): manage the fallow license from the editor (#904)\n\nCloses #904",
          "timestamp": "2026-06-04T18:16:32+02:00",
          "tree_id": "fa105078eda95c7b0b0d2ec3b3d67a17b0955e4e",
          "url": "https://github.com/fallow-rs/fallow/commit/d85c07a9b940a6025bf5466e7867ab293efc4493"
        },
        "date": 1780589975104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 337,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 794,
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
          "id": "131343784f7b80cbc874948fc6dde33714bd6f3b",
          "message": "fix(graph): dedup dynamic-import-pattern edge symbols per importing file (#968)\n\nGlob-matched dynamic-import patterns each resolve to a set of target files, and a single importing file can hold many such patterns whose match sets overlap. The edge builder pushed one Namespace symbol per matched file per pattern, accumulating O(patterns * files) symbols and Phase-2 references that drove the language server into tens of GB on large React Native / Expo trees.\n\nThe duplicate symbols are redundant: a Namespace symbol with an empty local_name credits the whole target for reachability, the first one already does that, reachability BFS reads only edge.target, and Phase-2 attach_reference already dedups by from_file. Each distinct target is now credited at most once per importing file. Output is byte-identical on all 8 benchmark fixtures; recursive cross-directory matching is preserved.\n\nFixes #963.",
          "timestamp": "2026-06-04T18:30:46+02:00",
          "tree_id": "87ee72f1a98b011599cd3534963971a0d040ef39",
          "url": "https://github.com/fallow-rs/fallow/commit/131343784f7b80cbc874948fc6dde33714bd6f3b"
        },
        "date": 1780590712379,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 337,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 794,
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
          "id": "85618a165b956bcb1d9e58af6141a483dd4b13c7",
          "message": "fix(lsp): analyze the workspace root once instead of per workspace package (#977)\n\nThe LSP returned the workspace root plus every discovered sub-package from find_project_roots and re-ran the full analysis pipeline per root, then collapsed the cross-root duplicates with a dedup pass. The single root pass already walks the whole tree and is workspace-aware (run_workspace_fast applies each package's plugin and script config), so the per-package passes were redundant CPU and allocation, and analyzing a sub-package in isolation lost cross-package reachability, surfacing false-positive unused-export findings the root pass resolves.\n\nfind_project_roots now returns exactly one root (the canonicalized workspace root), matching the CLI. The now-unreachable dedup_results/dedup_by_key_preserving_order helpers and their five cross-root tests are removed; merge_results/merge_duplication stay to fold the single result and keep the field-drift guard. A sub-package's own .fallowrc.json still applies when that folder is opened directly as the editor workspace.\n\nAlso allowlists unparseable and vulnerabilit in _typos.toml (left un-allowlisted by recent VS Code editor-parity work, which was blocking local commits via the whole-repo typos gate).\n\nCloses #971.",
          "timestamp": "2026-06-04T19:25:15+02:00",
          "tree_id": "90d7af0512c63402a248800a5e4f14dc4d690d4c",
          "url": "https://github.com/fallow-rs/fallow/commit/85618a165b956bcb1d9e58af6141a483dd4b13c7"
        },
        "date": 1780594006006,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 337,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 794,
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
          "id": "08c11441fe165b62dd27696c4d05bcc22ed4c7f0",
          "message": "fix(cli): reclaim audit base-snapshot worktrees orphaned by external dir removal\n\nWhen an external cleanup process (a `$TMPDIR` reaper, a container restart, a CI cache eviction) removes a reusable base-snapshot worktree directory but leaves git's admin entry behind, the entry lingered indefinitely as a `prunable` row in `git worktree list`. The age-based sweep keyed only on the `.last-used` sidecar, which survives next to the deleted directory, so it re-touched a fresh sidecar and never reclaimed these orphans.\n\n`sweep_old_reusable_caches` now takes `Option<Duration>` and runs on every audit invocation. It reclaims any reusable entry whose directory is gone before the age branch: lock-guarded, re-checked under the lock against a concurrent rebuild, removing the git admin entry and the stale sidecar. The reclaim runs even when age-based GC is disabled, so dead admin entries no longer accumulate. Adds two regression tests covering enabled and disabled GC thresholds.",
          "timestamp": "2026-06-04T19:31:16+02:00",
          "tree_id": "dd1a2244fdad94a53a96fea1f9de12f06e4e3176",
          "url": "https://github.com/fallow-rs/fallow/commit/08c11441fe165b62dd27696c4d05bcc22ed4c7f0"
        },
        "date": 1780594388352,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 337,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 794,
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
          "id": "cf8dea7f73197c1387cbdcdf97c1f464d293ac68",
          "message": "fix(vscode): review follow-ups for #904 (license-management)\n\n* fix(cli): emit full LicenseStatusJson shape on license deactivate\n\nThe deactivate --format json envelope hand-rolled a six-key json! literal,\nomitting seven fields (tier, seats, features, days_until_expiry,\ndays_since_expiry, refresh_suggested, runtime_coverage_enabled) that the\nLicenseStatusJson contract declares non-optional. The VS Code extension\nforce-casts every license envelope to that interface, so the gap was a latent\ncontract break.\n\nRoute deactivate through a shared build_status_payload helper so every envelope\ncarries the same field set; removed is now an Option<bool> with\nskip_serializing_if so status/activate/refresh envelopes stay byte-identical.\nAlso:\n\n- Report an honest <inline FALLOW_LICENSE> sentinel for license_path when the\n  inline JWT env var is set (loader precedence was previously mis-reported as\n  the default file path).\n- Log rather than silently swallow the rare JSON serialization failure.\n- Fix the LicenseStatusJson doc comment that wrongly claimed hard_fail carries\n  no claims.\n- Add a Rust key-parity test asserting the deactivate envelope matches the TS\n  interface, plus env-precedence coverage via a pure resolver.\n\n* fix(vscode): address review follow-ups for #904 license management\n\n- Surface the Deactivate License command in the dead-code view-title menu\n  (license@4 group), not just the command palette.\n- Drop the redundant disposeLicenseStatusBar wrapper pushed to subscriptions;\n  the item is already pushed and disposed in deactivate(), matching the main\n  analysis status-bar pattern (no double-dispose).\n- Document the deactivate envelope now carrying the full status shape in the\n  license-types.ts doc comment.\n- Document the license feature in README.md: a Features bullet, four\n  Commands-table rows, and two Settings-table rows.\n- Extend tests: a parseLicenseJson case for the full deactivate envelope and a\n  package-manifest assertion that every license command is in the view-title\n  menu.\n- Rebuild the dist bundle.",
          "timestamp": "2026-06-04T19:53:49+02:00",
          "tree_id": "b9e1b4e223db96760cc3071a68cb1b8dd02fff0c",
          "url": "https://github.com/fallow-rs/fallow/commit/cf8dea7f73197c1387cbdcdf97c1f464d293ac68"
        },
        "date": 1780595697125,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 337,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 794,
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
          "id": "89e76ab006ca8f09293b36b692eefb5ec70cf085",
          "message": "perf(cli): avoid CI renderer JSON roundtrip\n\nKeep combined CodeClimate output as the same serialized array, but let the PR comment and review-envelope paths consume the typed CodeClimate issues directly. This removes the serialize-then-parse hop from combined CI renderers while preserving existing diff filtering and ordering.\n\nThe review envelope grouping now applies the comment cap during grouping so large reports stop building unused groups. Regression coverage pins typed severity parity and max-comment behavior, including zero comments and same-line merged findings.",
          "timestamp": "2026-06-04T20:25:43+02:00",
          "tree_id": "67bdfc2b26e0c2542f997bbfdc1bc94bd3255547",
          "url": "https://github.com/fallow-rs/fallow/commit/89e76ab006ca8f09293b36b692eefb5ec70cf085"
        },
        "date": 1780597643704,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 337,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 795,
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
          "id": "fd40652326c8c20e240b17537688a2a319d99e67",
          "message": "feat(cli): nudge stale local installs\n\nAdds a cached, human-TTY-only upgrade nudge for stale local fallow installs. The nudge is displayed from a local cache so command startup never waits on the network, while a detached best-effort fetch refreshes the cache for later runs.\\n\\nAdds FALLOW_UPDATE_CHECK as the explicit opt-out and honors DO_NOT_TRACK, FALLOW_TELEMETRY_DISABLED, CI, quiet, non-TTY, and machine-format paths. The live api.fallow.cloud endpoint returns the latest stable version, and all failure paths stay silent.\\n\\nFixes #978.",
          "timestamp": "2026-06-04T21:54:33+02:00",
          "tree_id": "43b20d938c661a16ef1facd277b6432b8b890126",
          "url": "https://github.com/fallow-rs/fallow/commit/fd40652326c8c20e240b17537688a2a319d99e67"
        },
        "date": 1780603121456,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 337,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 795,
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
          "id": "c3f3bbdf4f699ffb35abb56d6785ed5a9d4b0eb8",
          "message": "feat(security): add catalogue sink rows\n\nAdd catalogue-only security sink rows for issue #882, covering dynamic CommonJS module loading, node:fs path sinks, response header injection, raw SQL escape hatches, DOM navigation, source-backed mass assignment, and additional SSRF clients.\n\nAdd a small source-required matcher gate for broad sinks such as `Object.assign`, keeping that category tied to the existing untrusted-source model instead of reporting source-free non-literal objects. Refresh the security command reference text and keep the VS Code self-analysis configuration clean after the rebase onto current main.\n\nFixes #882.",
          "timestamp": "2026-06-04T22:02:07+02:00",
          "tree_id": "64c59213a59e2d5a5ea137fe944f9f1f058cdbb1",
          "url": "https://github.com/fallow-rs/fallow/commit/c3f3bbdf4f699ffb35abb56d6785ed5a9d4b0eb8"
        },
        "date": 1780603390688,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 337,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 795,
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
          "id": "2f0d8893b41e3987151c16573c84a576b03716bc",
          "message": "fix(cli): name the upgrade-nudge opt-out inline (#988)\n\nThe #978 upgrade nudge repeats on every interactive run until you upgrade,\nunlike the one-time telemetry opt-in note, but it was the only unsolicited\nstderr line with no self-described way to silence it: FALLOW_UPDATE_CHECK=off\nwas undiscoverable from the output itself.\n\nAppend \"(silence: FALLOW_UPDATE_CHECK=off)\" to the printed line, interpolating\nthe existing env-var const so the name stays single-sourced. CHANGELOG\n[Unreleased] entry updated. No gating or logic change.\n\nRefs #978.",
          "timestamp": "2026-06-04T23:28:05+02:00",
          "tree_id": "78867aeb6c5398d2443ca4acbb5076dc62b54903",
          "url": "https://github.com/fallow-rs/fallow/commit/2f0d8893b41e3987151c16573c84a576b03716bc"
        },
        "date": 1780608552475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 337,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 795,
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
          "id": "d0e29acf8b4b495952032e7890c4239dc0d978e9",
          "message": "feat(security): add catalogue sink rows batch 2 (#990)\n\nAdd catalogue-only tainted-sink rows for issue #897: insecure randomness\n(crypto.pseudoRandomBytes), deprecated cipher constructors\n(crypto.createCipher/createDecipher), template escape bypass (SafeString),\nXPath injection (xpath.select/select1), unsafe Buffer allocation\n(Buffer.allocUnsafe/allocUnsafeSlow), and react-native-webview injected\nscripts (injectJavaScript / injectedJavaScript, enabler-gated). Extend the\nraw-SQL escape-hatch row with Sequelize.literal.\n\nNo extractor, cache, or schema change: every row fits the existing\nnon-literal-arg sink model and fires on a non-literal argument only.\n\nThree of the issue's listed rows are deferred and documented in the catalogue\nDEFERRED block: sensitive client storage and info/error exposure need an\nidentifier / error-object shape gate (fold into #892), and mysql\nmultipleStatements needs option-object capture (#875).\n\nFixes #897.",
          "timestamp": "2026-06-04T23:46:30+02:00",
          "tree_id": "c95897cab8baef34767d3092a6e09ced9bea6d21",
          "url": "https://github.com/fallow-rs/fallow/commit/d0e29acf8b4b495952032e7890c4239dc0d978e9"
        },
        "date": 1780609661142,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 337,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 795,
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
          "id": "6898a24b96248c0eed09d9b8a88c57125d851b62",
          "message": "feat(telemetry): findings_present, workflow split, MCP surface tagging (#994)\n\nThree telemetry accuracy gaps, all telemetry-only (no analysis output, exit codes, or user-facing behavior change; payload stays off-by-default and allowlisted).\n\n#972 adds an optional findings_present field set from each analysis's real result, decoupled from the exit-code outcome gate (default-config dupes never gates, so outcome=success was the only signal). #974 routes Command::Impact/Security/Fix/Explain to their own Workflow variants. #973 tags MCP-spawned CLI runs as integration_surface=mcp with a per-tool mcp_tool dimension via FALLOW_INTEGRATION_SURFACE / FALLOW_MCP_TOOL, so one correctly-labeled event is emitted with the same privacy posture.\n\nCloses #972.\nCloses #973.\nCloses #974.",
          "timestamp": "2026-06-05T00:28:03+02:00",
          "tree_id": "946f7c8e86e4aab83898fa8b6b5081035b573788",
          "url": "https://github.com/fallow-rs/fallow/commit/6898a24b96248c0eed09d9b8a88c57125d851b62"
        },
        "date": 1780612171759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "ddde044d2c739ac260aa9c425d9c664c82c4e8c9",
          "message": "feat(health): import VCS churn via --churn-file for non-git hotspots (#996)\n\nAdd a global --churn-file flag accepting a fallow-churn/v1 JSON document so\nprojects on a non-git VCS (Yandex Arc, Mercurial, Perforce) get hotspots,\nownership, and bus-factor. fallow runs all existing recency-weighting, trend,\nand ownership logic on the imported events unchanged (imported and git churn\naggregate identically). The file is authoritative for the window, so --since\nonly labels output; a malformed file is a loud up-front error (exit 2). No JSON\noutput shape change. Exposed on the MCP check_health tool as churn_file.\n\nScope: powers the churn-backed health signals only; audit, impact, and\n--changed-since still require git.\n\nCloses #980.",
          "timestamp": "2026-06-05T08:45:42+02:00",
          "tree_id": "e217f7a01e254e27b2ccf93898aace1be59f38dc",
          "url": "https://github.com/fallow-rs/fallow/commit/ddde044d2c739ac260aa9c425d9c664c82c4e8c9"
        },
        "date": 1780642123660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "927fb614f5eb5779b74cccf5b6be82e12d127b1b",
          "message": "fix(bun): discover default test files\n\nModel Bun's documented test file discovery patterns as plugin entry roots so projects do not need manual entry workarounds for bun test files.\n\nWhen bunfig.toml declares [test].root, replace the unscoped Bun defaults with root-scoped patterns while preserving top-level and test preload entries. Add regression coverage for scoped discovery and non-test helpers under the test root.\n\nFixes #951.",
          "timestamp": "2026-06-05T11:34:35+02:00",
          "tree_id": "f982df1a28bb4f6107d52bc9cd1c261a0f9f191c",
          "url": "https://github.com/fallow-rs/fallow/commit/927fb614f5eb5779b74cccf5b6be82e12d127b1b"
        },
        "date": 1780652312636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "1657f10c9911ea96460a08868fad8130ef585045",
          "message": "fix(playwright): credit pnpm exec web server CLIs\n\nPlaywright web server commands can be written as template literals when they interpolate values such as ports. Recover static command text from those templates for command parsing while keeping path-like config extraction unchanged.\n\nThe Playwright plugin now sends those recovered commands through the existing script parser, so package-manager exec forms like pnpm exec srvx credit the invoked CLI package. Dynamic commands that start with interpolation or split a static shell token stay skipped.\n\nFixes #956.",
          "timestamp": "2026-06-05T11:46:30+02:00",
          "tree_id": "34b25554942dfd9e0214b7be4f3b77dc987ed187",
          "url": "https://github.com/fallow-rs/fallow/commit/1657f10c9911ea96460a08868fad8130ef585045"
        },
        "date": 1780652975805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "3fa9bc58bde716adda65d24bd66cdfb4af886d23",
          "message": "fix(mcp): gate unix-only test helpers",
          "timestamp": "2026-06-05T12:24:48+02:00",
          "tree_id": "7992326077e722733c6ee2427c7a80ea32bc77f2",
          "url": "https://github.com/fallow-rs/fallow/commit/3fa9bc58bde716adda65d24bd66cdfb4af886d23"
        },
        "date": 1780655388333,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "d6efaabdbc2c0978588eb4645c3b6c473e65c26e",
          "message": "fix(unused-deps): credit pino transport targets\n\nFixes #954.",
          "timestamp": "2026-06-05T14:10:24+02:00",
          "tree_id": "012eae776a0410fed85611554992d3dacc8f3f5e",
          "url": "https://github.com/fallow-rs/fallow/commit/d6efaabdbc2c0978588eb4645c3b6c473e65c26e"
        },
        "date": 1780661494513,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "b473402c34747e00e9f897cb1ee43d8447ba1cba",
          "message": "fix(dead-code): credit package path resolution deps\n\nRecord statically recoverable package path resolution references during JS and TS extraction, then credit those package names in the dependency graph. The detection is limited to package roots and package manifest lookups so arbitrary dynamic strings and unrelated subpaths do not hide unused dependencies.\n\nAdd a regression fixture for build-script package roots and static font package tables, including the real issue shape where a package name flows into require.resolve of package.json. Bump the extract cache version because cached modules now carry the new reference list.\n\nFixes #952.",
          "timestamp": "2026-06-05T14:20:00+02:00",
          "tree_id": "fff8d11f2760fc028721ebf67bf6498ea79953d2",
          "url": "https://github.com/fallow-rs/fallow/commit/b473402c34747e00e9f897cb1ee43d8447ba1cba"
        },
        "date": 1780662113274,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "5eb0929aa20010f2d5735a0fb518a9b9dfed8180",
          "message": "fix: credit this-returning fluent chains\n\nCloses #953\n\nAlso keeps the filesystem-canonicalization fallback test out of Miri isolation, matching the existing CI scope for filesystem-heavy graph tests.",
          "timestamp": "2026-06-05T14:42:55+02:00",
          "tree_id": "187df349dbc92721dc717bc522b0653eeb7f811b",
          "url": "https://github.com/fallow-rs/fallow/commit/5eb0929aa20010f2d5735a0fb518a9b9dfed8180"
        },
        "date": 1780663442420,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "dcb36bf9508bc94681cbf95a29b313424a6f397f",
          "message": "fix(security): detect template html sinks\n\n* chore: open issue 883 implementation branch\n\n* fix(security): detect template html sinks",
          "timestamp": "2026-06-05T15:08:38+02:00",
          "tree_id": "337bb276097106d4d52713ce51e9acb1431a6e57",
          "url": "https://github.com/fallow-rs/fallow/commit/dcb36bf9508bc94681cbf95a29b313424a6f397f"
        },
        "date": 1780664983447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "95c6ff90a9054864e6ef76d3937cb6833d469eca",
          "message": "test: improve coverage for trace reporting",
          "timestamp": "2026-06-05T16:34:39+02:00",
          "tree_id": "20dfd3803b865bfa267c58c2c124e1d2ef5cc5c1",
          "url": "https://github.com/fallow-rs/fallow/commit/95c6ff90a9054864e6ef76d3937cb6833d469eca"
        },
        "date": 1780670177575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "4770ce5dca328f47d52d6eb4f9d4a65fd38c0613",
          "message": "feat(vscode): editor-intelligence batch for the extension and LSP (#1009)\n\nLands the in-editor intelligence work as one change on top of origin/main.\n\n- Per-decision-point complexity breakdown (health --complexity-breakdown, VS Code inline markers + hover, MCP complexity_breakdown).\n- Per-file circular-dependency diagnostics (one squiggly per file anchored at the closing import, rotated message, cycleId in Diagnostic.data, additive edges[] JSON), plus find_import_span_start anchoring on the value import on mixed type/value edges.\n- unresolved-import diagnostics anchored under the require specifier (source_span).\n- VS Code sidebar UX overhaul + references code-lens fix.\n- VS Code license indicator only shown when license material is present.\n\nCACHE_VERSION bumped to 122 (one-time re-extract on upgrade).",
          "timestamp": "2026-06-05T17:28:22+02:00",
          "tree_id": "da15d07b9c403db06de40f2b833f134e7cbf0089",
          "url": "https://github.com/fallow-rs/fallow/commit/4770ce5dca328f47d52d6eb4f9d4a65fd38c0613"
        },
        "date": 1780673395802,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "647fe2d90f7316b9a95ccd690481224e9a95333b",
          "message": "chore: release v2.89.0",
          "timestamp": "2026-06-05T18:13:59+02:00",
          "tree_id": "4ff254848515b9a263a51bfdaa0160e2ea19f29e",
          "url": "https://github.com/fallow-rs/fallow/commit/647fe2d90f7316b9a95ccd690481224e9a95333b"
        },
        "date": 1780677020312,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "65e53f7f3a21226a1a36f2289d3c2be080b5037f",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.89.0",
          "timestamp": "2026-06-05T19:03:16+02:00",
          "tree_id": "eead14fa45ebe37658e426c37439f9e3ce986ddd",
          "url": "https://github.com/fallow-rs/fallow/commit/65e53f7f3a21226a1a36f2289d3c2be080b5037f"
        },
        "date": 1780679070502,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "e665f88427a70751a7c0b7cecc8f7379d00d3da4",
          "message": "fix(cli): name canonical `fallow dead-code` in user-facing messages (#1011)\n\nSeveral user-facing messages still told users to run the deprecated `fallow check` alias (which already prints a deprecation warning). The fix skip notes, migrate caveat, regression-baseline hint, and fix MCP tool descriptions now reference `fallow dead-code`. Internal doc comments updated to match; the `check` alias keeps working.",
          "timestamp": "2026-06-06T11:14:42+02:00",
          "tree_id": "2ee8660fea286ffed5a9676ede49c8dfb5aecd6e",
          "url": "https://github.com/fallow-rs/fallow/commit/e665f88427a70751a7c0b7cecc8f7379d00d3da4"
        },
        "date": 1780737341632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "8939da6204bfba025c5769c0bd7f9638a777d062",
          "message": "test: improve coverage for napi and audit",
          "timestamp": "2026-06-06T13:26:53+02:00",
          "tree_id": "612f46a82a7dcfcbcf09eac14ec40c038c840021",
          "url": "https://github.com/fallow-rs/fallow/commit/8939da6204bfba025c5769c0bd7f9638a777d062"
        },
        "date": 1780747423338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "c575f84da75c61b276392aa443edd7b0ff20fef1",
          "message": "test: improve coverage for node bindings",
          "timestamp": "2026-06-06T14:15:39+02:00",
          "tree_id": "6a5f80c40cd215682f88104f5a73eac5f8a85b9c",
          "url": "https://github.com/fallow-rs/fallow/commit/c575f84da75c61b276392aa443edd7b0ff20fef1"
        },
        "date": 1780748244365,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "7969561+jsgoldman@users.noreply.github.com",
            "name": "jsgoldman",
            "username": "jsgoldman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45b3d87f7686009c8429b20a3d6270beb01845d4",
          "message": "fix(extract): ignore prose JSDoc import examples\n\nTighten JSDoc import-type extraction so prose examples do not create false unresolved-import findings. The extractor now only follows import(\"...\") references inside type-bearing JSDoc brace groups, while preserving real annotations including @type, @returns, @satisfies, @template, and @enum.\n\nThanks @jsgoldman for the original patch in #1010.",
          "timestamp": "2026-06-06T14:20:02+02:00",
          "tree_id": "6ea5757997558fa23ff4b04d63294b50a79f7e50",
          "url": "https://github.com/fallow-rs/fallow/commit/45b3d87f7686009c8429b20a3d6270beb01845d4"
        },
        "date": 1780748463093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "2ee51cbae9014a263c9d23ef230ef3ae21ad1baa",
          "message": "fix(vscode): schema-gate workspaces output\n\nAdd a Rust-owned schema contract for `fallow workspaces --format json`, regenerate the JSON schema plus VS Code and npm declaration outputs, and route the VS Code workspace picker through the generated type surface.\n\nFixes #991.",
          "timestamp": "2026-06-06T14:38:01+02:00",
          "tree_id": "137305f275c65fbc7b1637f3baa0da1cb83f41e3",
          "url": "https://github.com/fallow-rs/fallow/commit/2ee51cbae9014a263c9d23ef230ef3ae21ad1baa"
        },
        "date": 1780749840888,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "2c48dd5128ed461cc0255dd030dc7101d55774d2",
          "message": "test: cover coverage analyze helpers",
          "timestamp": "2026-06-06T14:42:13+02:00",
          "tree_id": "25f3b461ebf421cb52c18da530d70f1bbaf3645a",
          "url": "https://github.com/fallow-rs/fallow/commit/2c48dd5128ed461cc0255dd030dc7101d55774d2"
        },
        "date": 1780750198059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "13b5c322dac21fbbff9f575d221dc6395f39d83f",
          "message": "fix(deps): credit pnpm workspace package imports\n\nCredit valid bare package imports when resolver canonicalization follows a pnpm workspace symlink outside the analyzed package root.\n\nKeep path aliases excluded from the fallback, so aliases like @/shared and #polyfill are not credited as dependencies. Add regression coverage for analyzing a consumer workspace package directly.\n\nFixes #1008.",
          "timestamp": "2026-06-06T15:02:53+02:00",
          "tree_id": "5074eb5757799ddcdc6bd800b4972a84bf6a0fcc",
          "url": "https://github.com/fallow-rs/fallow/commit/13b5c322dac21fbbff9f575d221dc6395f39d83f"
        },
        "date": 1780751065450,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "5e5418b2b636b62246f79cf7f6821bd3e8d47944",
          "message": "feat(security): capture literal-aware sink candidates\n\nCapture literal-aware security sink candidates for wildcard postMessage origins, permissive CORS, insecure cookie options, weak crypto algorithms, string-code execution, JWT alg none, Math.random token contexts, and cloud metadata URLs.\n\nPreserve the existing opt-in fallow security candidate contract: extraction records richer sink metadata, catalogue rows decide which candidates emit. Bump the extract cache version for the expanded SinkSite wire shape.\n\nFixes #875.",
          "timestamp": "2026-06-06T15:07:36+02:00",
          "tree_id": "76e04c24a1569b401e68a21dc7721c6e1a08a1c0",
          "url": "https://github.com/fallow-rs/fallow/commit/5e5418b2b636b62246f79cf7f6821bd3e8d47944"
        },
        "date": 1780751488989,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "9bf6bab61519f100b226c285e778114d04312df4",
          "message": "feat(lsp): add opt-in inline complexity lenses\n\nAdd opt-in LSP code lenses for functions that exceed Fallow Health cyclomatic or cognitive thresholds.\n\nWire the VS Code setting fallow.health.inlineComplexity, defaulting to false, through LSP initialization. Keep existing export reference code lenses intact and document the setting in the VS Code extension README.\n\nFixes #992.",
          "timestamp": "2026-06-06T15:16:41+02:00",
          "tree_id": "40d764ed317efc1438afc71dd0cfa1cfc2231cbf",
          "url": "https://github.com/fallow-rs/fallow/commit/9bf6bab61519f100b226c285e778114d04312df4"
        },
        "date": 1780751983331,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "dfd782b22e296802e272206565174c4bb996f482",
          "message": "fix(security): unwrap typed literal sink arguments",
          "timestamp": "2026-06-06T19:00:16+02:00",
          "tree_id": "64f7123415bde25d71d046623a72a2b2d74fc552",
          "url": "https://github.com/fallow-rs/fallow/commit/dfd782b22e296802e272206565174c4bb996f482"
        },
        "date": 1780765301648,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "d8d4f9fafe307febab0b98844c632d7fd83a71d3",
          "message": "fix(security): detect dynamic regex construction\n\nDetect non-literal RegExp(pattern) and new RegExp(pattern) through the existing security-sink catalogue, with CWE-1333 metadata and candidate framing.\n\nLiteral regex patterns stay quiet, and literal regex catastrophic-backtracking analysis remains out of scope for the separate regex-complexity work.\n\nFixes #896.",
          "timestamp": "2026-06-06T19:16:42+02:00",
          "tree_id": "b966124e0e7584d154cca907fcaaf08bc69402e1",
          "url": "https://github.com/fallow-rs/fallow/commit/d8d4f9fafe307febab0b98844c632d7fd83a71d3"
        },
        "date": 1780766515579,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "5dd55c2a9948a8969a604d88b1864e1e4a94beda",
          "message": "feat(security): detect source-backed log exposure\n\nAdd a source-backed logging sink category for fallow security. The catalogue now flags common console, logger, and log calls only when their first argument traces to process.env or request input, so ordinary literal and source-free logging remains quiet.\n\nStore direct source paths on captured sink arguments so expressions such as process.env.SECRET can be matched without an intermediate local binding. Bump the extraction cache version and add focused extraction plus integration coverage.\n\nFixes #876.",
          "timestamp": "2026-06-06T19:25:24+02:00",
          "tree_id": "c99ebadad92fab011c844eabc8a8f5b62736d2e8",
          "url": "https://github.com/fallow-rs/fallow/commit/5dd55c2a9948a8969a604d88b1864e1e4a94beda"
        },
        "date": 1780766863487,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "de853cace5d58bff04fc6eb43a544c45e3fa735e",
          "message": "fix(security): flag jwt verify without algorithms\n\nDetect jsonwebtoken verify calls that omit an explicit algorithms option while keeping safe allowlisted calls and unprovenanced lookalikes quiet.\n\nFixes #898.",
          "timestamp": "2026-06-06T19:34:54+02:00",
          "tree_id": "ba5dffa33fbcb4f7baab9387f4bb9461e1d66ebe",
          "url": "https://github.com/fallow-rs/fallow/commit/de853cace5d58bff04fc6eb43a544c45e3fa735e"
        },
        "date": 1780767373438,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "3de5f84b8817c0284d6808a17c4483db3c96e1ca",
          "message": "fix(security): flag disabled TLS validation\n\nAdd a security catalogue candidate for disabled TLS certificate validation in Node HTTPS and TLS option objects. The detector captures rejectUnauthorized: false only on provenance-gated HTTPS/TLS call shapes, plus the exact NODE_TLS_REJECT_UNAUTHORIZED = \"0\" assignment.\n\nThis keeps same-named local helpers and safe rejectUnauthorized values quiet, while preserving the opt-in candidate framing for agent verification.\n\nFixes #895.",
          "timestamp": "2026-06-06T19:45:52+02:00",
          "tree_id": "5d36c12045a52275207ed6730647eee70a1ff587",
          "url": "https://github.com/fallow-rs/fallow/commit/3de5f84b8817c0284d6808a17c4483db3c96e1ca"
        },
        "date": 1780768037142,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "fd60baab71a41f62fa4c0d10a50dac5d09d4501f",
          "message": "fix(security): unwrap static option objects for jwt checks\n\nFix a review-found gap in the JWT missing-algorithms candidate. Object-key metadata now unwraps static TypeScript wrappers such as `as const`, matching the existing literal and object-property capture behavior.\n\nThe regression fixture covers missing options, missing algorithm keys, static-wrapped missing keys, and static-wrapped safe allowlists.\n\nFollow-up to #898.",
          "timestamp": "2026-06-06T20:02:59+02:00",
          "tree_id": "7304af88a0c0aa7a60520ee2acdb57a6ec04c5f4",
          "url": "https://github.com/fallow-rs/fallow/commit/fd60baab71a41f62fa4c0d10a50dac5d09d4501f"
        },
        "date": 1780769050052,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 796,
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
          "id": "09a2417e6705c7363f9aa36ff579b2b7eab35b29",
          "message": "refactor: split report builders",
          "timestamp": "2026-06-06T20:20:58+02:00",
          "tree_id": "615bb33e420aa18850ffa048d4b5043f1631886a",
          "url": "https://github.com/fallow-rs/fallow/commit/09a2417e6705c7363f9aa36ff579b2b7eab35b29"
        },
        "date": 1780770199643,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 797,
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
          "id": "871a76504fc4878f2bad7208740639724d9d91e0",
          "message": "feat(mcp): scope security candidates by path\n\nAdd a file scope to the existing security_candidates MCP tool by forwarding path filters through fallow security.\n\nExpose the same scope as a repeated --file flag on the security command so agents can ask for candidates anchored in or traced through recently edited files without scanning unrelated findings.\n\nFixes #889.",
          "timestamp": "2026-06-06T21:36:57+02:00",
          "tree_id": "ae00436b2d8df65bfb833e1ff96a2fbe611dd0f2",
          "url": "https://github.com/fallow-rs/fallow/commit/871a76504fc4878f2bad7208740639724d9d91e0"
        },
        "date": 1780774770017,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.3,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 338,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 798,
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
          "id": "33935030597a35f5f33577d8988584b78c3aacaa",
          "message": "feat(security): add opt-in hardcoded secret candidates\n\nAdd an opt-in hardcoded-secret security category for first-party literal credentials.\n\nDetect known provider credential prefixes first, and only use entropy when the surrounding binding or property name is secret-shaped. Evidence stays redacted and the category remains explicitly scoped through security category configuration.\n\nFixes #892.",
          "timestamp": "2026-06-06T21:42:46+02:00",
          "tree_id": "1e600c86eb4e70f2bf63f4fab7a6f73288785559",
          "url": "https://github.com/fallow-rs/fallow/commit/33935030597a35f5f33577d8988584b78c3aacaa"
        },
        "date": 1780775097284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 339,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 801,
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
          "id": "7a9db3ff4e37e9279b56e9ffa7133aed251db180",
          "message": "feat(security): rank framework entry-point sources\n\nAdd dependency-gated source rows for framework handler inputs, Next.js handlers and server actions, queue job payloads, and MCP tool inputs.\n\nRecord recognizable framework callback parameters during extraction so existing security sink candidates can be ranked as source-backed. Direct request accessor paths still take precedence over broader handler-param bindings, keeping evidence specific when both sources are present.\n\nNestJS decorator-injected params remain out of scope because they need decorator parameter capture rather than member-path matching.\n\nFixes #879.",
          "timestamp": "2026-06-07T10:15:44+02:00",
          "tree_id": "05f61c32d5a79aeb01c0f8bfe527da426f40d08f",
          "url": "https://github.com/fallow-rs/fallow/commit/7a9db3ff4e37e9279b56e9ffa7133aed251db180"
        },
        "date": 1780820209718,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 339,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 801,
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
          "id": "beb99e87d7e6d777f40639c07441d391cc2c0af7",
          "message": "fix(security): rank one-hop source helper sinks\n\nRecord conservative same-module helper summaries for function declarations, const arrow helpers, and const function expressions that return source-backed parameter paths. Locals initialized from one helper call now inherit the source-backed ranking signal while aliases, cross-module calls, helper chains, and shadowed helper names stay unbacked.\n\nBump the extract cache version and cover the behavior with extract-layer and security catalogue regressions, including hoisted functions and negative shadowed or multi-hop cases.\n\nFixes #878.",
          "timestamp": "2026-06-07T10:22:10+02:00",
          "tree_id": "751529794f7f11307bfba82b43e3b770c4dceb5a",
          "url": "https://github.com/fallow-rs/fallow/commit/beb99e87d7e6d777f40639c07441d391cc2c0af7"
        },
        "date": 1780820675848,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 339,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 801,
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
          "id": "71394a249e57846fca99797a9a48c06876cb79c5",
          "message": "fix(security): add issue 901 literal rows\n\nFixes #901.\n\nAdds the remaining literal-tier security catalogue rows for Electron unsafe BrowserWindow preferences, world-writable chmod modes, predictable temp-file writes, and mysql/mysql2 multipleStatements options.\n\nVerification passed locally:\n- cargo check --workspace\n- cargo test --workspace --all-targets\n- cargo clippy --workspace --all-targets -- -D warnings\n- cargo fmt --all -- --check\n- git diff --check\n- typos .\n- rustdoc with warnings denied\n- fallow audit JSON\n- real-project fallow security JSON smoke",
          "timestamp": "2026-06-07T10:31:01+02:00",
          "tree_id": "3d41dc604ae831b9e2577c74d0a182546c6d2b15",
          "url": "https://github.com/fallow-rs/fallow/commit/71394a249e57846fca99797a9a48c06876cb79c5"
        },
        "date": 1780821223464,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 339,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 801,
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
          "id": "08912ff4b864e56e5e2f1439292338c12feb3207",
          "message": "fix(security): flag source-backed redos regex sinks\n\nCapture risky literal regex applications as source-backed security sink candidates. The extractor records the risky regex fragment for literal regexes and constant RegExp strings, then the existing catalogue emits redos-regex CWE-1333 findings only when the input traces to an untrusted source.\n\nSafe literal patterns, mutable regex bindings, and source-free inputs stay quiet. The extraction cache version is bumped because security_sinks now carries the optional regex fragment metadata.\n\nFixes #928.",
          "timestamp": "2026-06-07T10:38:38+02:00",
          "tree_id": "a4a3e3df008bb9c95870e97a515a18cd4009fd34",
          "url": "https://github.com/fallow-rs/fallow/commit/08912ff4b864e56e5e2f1439292338c12feb3207"
        },
        "date": 1780821614315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 339,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 801,
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
          "id": "f7161395e92145f1e673fa5b9d99bf52e60ec28e",
          "message": "fix: tighten security source matching\n\nTighten framework-source detection and package-subpath provenance for the security catalogue follow-up.",
          "timestamp": "2026-06-07T11:20:22+02:00",
          "tree_id": "5294391a49e046cbaf9051049998d81006f00613",
          "url": "https://github.com/fallow-rs/fallow/commit/f7161395e92145f1e673fa5b9d99bf52e60ec28e"
        },
        "date": 1780824084097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 339,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 801,
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
          "id": "c9a61199b79273e3aff6c43bd724ea781cef1c24",
          "message": "refactor: group file report inputs",
          "timestamp": "2026-06-07T11:44:44+02:00",
          "tree_id": "c26304f47df0fe3645a647cb63d5a4ba8bb60be6",
          "url": "https://github.com/fallow-rs/fallow/commit/c9a61199b79273e3aff6c43bd724ea781cef1c24"
        },
        "date": 1780826859277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 339,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 801,
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
          "id": "122a6fc5f4d96af9f131ff844780461637cd27f3",
          "message": "refactor: group large function inputs",
          "timestamp": "2026-06-07T12:33:17+02:00",
          "tree_id": "01280b9464e868236493ac18cbe2d933fbdc62a0",
          "url": "https://github.com/fallow-rs/fallow/commit/122a6fc5f4d96af9f131ff844780461637cd27f3"
        },
        "date": 1780831212598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 339,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 802,
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
          "id": "0c0b0205780338c7db2742fb39ce0a548972cb96",
          "message": "refactor: group health snapshot inputs",
          "timestamp": "2026-06-07T13:53:56+02:00",
          "tree_id": "dbb08a2244f2d7815b6a8a006e6647c51718e376",
          "url": "https://github.com/fallow-rs/fallow/commit/0c0b0205780338c7db2742fb39ce0a548972cb96"
        },
        "date": 1780841639492,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 19,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 339,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 802,
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
          "id": "65fcdcbe2e999e45fc3246ea8453aa314d5bb49b",
          "message": "fix: restore literal security tracking after rebase",
          "timestamp": "2026-06-07T23:54:53+02:00",
          "tree_id": "933a81834d1aa340d2108d5f1dfb5e509f47b2f7",
          "url": "https://github.com/fallow-rs/fallow/commit/65fcdcbe2e999e45fc3246ea8453aa314d5bb49b"
        },
        "date": 1780869503755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 835,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tris203@gmail.com",
            "name": "Tristan Knight",
            "username": "tris203"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24a5b4ad426c3683a4ebad174ff3ef34c63e6ce4",
          "message": "feat(lsp): modernize diagnostics and add Neovim integration docs (#1033)\n\nMigrates the LSP server from tower-lsp/lsp-types to the maintained tower-lsp-server + ls-types, adds LSP 3.17 pull diagnostics with workspace/diagnostic/refresh, and documents Neovim integration.\n\nDiagnostic delivery keys on whether a client actually pulls (a real textDocument/diagnostic), not on the advertised refreshSupport, so push-only clients like the VS Code extension keep receiving open-file diagnostics while pull clients (Neovim, Zed, Helix) avoid duplicate push/pull namespaces. Diagnostic and code-lens refreshes are fire-and-forget so a slow client cannot stall analysis. Includes a Server::serve-level integration test and allows the MIT-0 license for the new dependency chain.",
          "timestamp": "2026-06-08T07:38:38+02:00",
          "tree_id": "b0f13f1e032cb209944a995f717de7bd1424ffe4",
          "url": "https://github.com/fallow-rs/fallow/commit/24a5b4ad426c3683a4ebad174ff3ef34c63e6ce4"
        },
        "date": 1780897182160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 835,
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
          "id": "a89af3aaad692a74ab9c95c5c18f13f735f4b347",
          "message": "fix(vscode): remove redundant pull diagnostic plumbing\n\nRemove the VS Code pull-disable override now that the LSP server uses observed pull requests, not advertised refresh support, to decide when push diagnostics should be suppressed.\n\nWire the existing diagnostic filter into pull diagnostics so editor mutes apply consistently across push and pull delivery. Refresh the LSP comments and rule prose to describe the observed-pull invariant without relying on the old VS Code-specific workaround.\n\nFixes #1041.",
          "timestamp": "2026-06-08T10:05:03+02:00",
          "tree_id": "3657139c14056a04cf96c3067dafd022d831406c",
          "url": "https://github.com/fallow-rs/fallow/commit/a89af3aaad692a74ab9c95c5c18f13f735f4b347"
        },
        "date": 1780905981371,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 835,
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
          "id": "7a62ce34de8dd92f6635f71f0ffa122d6bc16c06",
          "message": "feat(cli): add --output-file / -o to write the report to a file\n\nAdds a global --output-file <PATH> flag (short -o) that redirects the rendered\nreport to a file instead of stdout, for any --format (human, JSON, SARIF,\ncompact, markdown, CodeClimate, badge, PR/MR comment and review envelopes),\nincluding bare/combined mode and audit. The file never contains ANSI codes, even\nwhen run attached to a TTY; progress and a 'Report written to <path>'\nconfirmation stay on stderr (suppressed by --quiet and by a no-content-written\nguard).\n\nImplemented as an ambient process-global sink (report/sink.rs) read by new\noutln!/out! macros that replace println!/print! at every report-content site,\nset once in main before dispatch so no Options struct threads the path and the\nprogrammatic/NAPI consumers are unaffected. Valid with\ndead-code/dupes/health/security/audit/bare (mirrors --sarif-file's gate) and\ncomposes with --sarif-file.\n\nCloses #1037.",
          "timestamp": "2026-06-08T10:09:54+02:00",
          "tree_id": "50fdf94a2068ecae8f043d90a09bd3942532352a",
          "url": "https://github.com/fallow-rs/fallow/commit/7a62ce34de8dd92f6635f71f0ffa122d6bc16c06"
        },
        "date": 1780906488311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 835,
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
          "id": "485fc8030389e7b4dfc848e1ce44c3f3d6cb0df1",
          "message": "feat(config): add configurable cache directory\n\nAdd `cache.dir` and `FALLOW_CACHE_DIR` so teams can relocate fallow's persistent extraction and audit snapshot caches outside the default `.fallow/` directory.\n\nKeep the default project-local cache path for compatibility, but print a one-time human first-run note when the default cache directory is newly created. Quiet runs, machine formats, CI, non-TTY paths, and `--no-cache` stay silent.\n\nFixes #1036.",
          "timestamp": "2026-06-08T10:23:39+02:00",
          "tree_id": "5704779c02e1e25d238fb58f7e800e31bd32499e",
          "url": "https://github.com/fallow-rs/fallow/commit/485fc8030389e7b4dfc848e1ce44c3f3d6cb0df1"
        },
        "date": 1780907136623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 835,
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
          "id": "db88c3d2cf5cfb5451e37df043467a0567a500e1",
          "message": "test(cli): make cache remap tests platform-neutral\n\nMake the cache remap tests build platform-native absolute paths from a temporary directory so they pass on Windows as well as Unix.",
          "timestamp": "2026-06-08T10:36:09+02:00",
          "tree_id": "1c59e514a9c420241c811ce14814e100c9e3f8cb",
          "url": "https://github.com/fallow-rs/fallow/commit/db88c3d2cf5cfb5451e37df043467a0567a500e1"
        },
        "date": 1780907909389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 835,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bartwaardenburg@gmail.com",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd52fb8b248ce9bc1ec31e22ebcc7fec609a2d03",
          "message": "Merge pull request #1049 from fallow-rs/chore/license-team-to-pro-doc\n\nchore(license): reflect team -> pro tier rename in claims doc and fixtures",
          "timestamp": "2026-06-08T10:50:34+02:00",
          "tree_id": "136bc7b503f3d3268a87d2e2c08fc0baa7281511",
          "url": "https://github.com/fallow-rs/fallow/commit/fd52fb8b248ce9bc1ec31e22ebcc7fec609a2d03"
        },
        "date": 1780908700338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 835,
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
          "id": "baec513f7210dde8a55a774c6dbd256309531021",
          "message": "feat(security): detect resource amplification sinks (CWE-400) (#1034)\n\nAdd a source-backed resource-amplification (CWE-400) category to the opt-in\nfallow security tainted-sink catalogue. Untrusted request input that reaches\nArray(n) / new Array(n), Buffer.alloc / allocUnsafe / allocUnsafeSlow, or\nString.prototype.repeat / padStart / padEnd now surfaces as a candidate for\nagent verification, so an attacker-controlled size that drives an unbounded\nallocation no longer looks clean.\n\nThe extract visitor skips size arguments that are directly clamped with\nMath.min(input, literalCap) (or a nested Math.max(..., Math.min(...))) before\ncatalogue matching, keeping the rule false-negative-biased. The matcher set\nlives in crates/core/data/security_matchers.toml; the clamp pruning lives in\ncrates/extract/src/visitor/visit_impl.rs; CACHE_VERSION bumps 134 to 135\nbecause warm caches predate the clamp pruning. The category reuses the existing\ntainted-sink finding kind, so there is no new IssueKind, CLI flag, or output\nformat, and findings never appear under bare fallow or audit.\n\nFixes #929.",
          "timestamp": "2026-06-08T11:00:57+02:00",
          "tree_id": "c44966ba91d36f3fe0fc7aa20e0e77c2805f1042",
          "url": "https://github.com/fallow-rs/fallow/commit/baec513f7210dde8a55a774c6dbd256309531021"
        },
        "date": 1780909350082,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 835,
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
          "id": "1e134741270e263249f4228f5298094005dfdf62",
          "message": "feat(security): rank sinks by source reachability\n\nAdd module-level untrusted-source reachability to security candidate ranking. The ranking pass now seeds source modules from existing source catalogue evidence and value-import graph traversal, keeps runtime reachability ahead of the new signal, and excludes client-server leaks and hardcoded-secret candidates.\n\nSurface the context through JSON, SARIF, human output, MCP descriptions, VS Code tooltips, generated contracts, and changed-file filtering. The trace is ranking context only and does not prove value flow.\n\nFixes #885.",
          "timestamp": "2026-06-08T11:35:15+02:00",
          "tree_id": "5bac23ee53f8fa769371625e9d5feb5526b6d7a5",
          "url": "https://github.com/fallow-rs/fallow/commit/1e134741270e263249f4228f5298094005dfdf62"
        },
        "date": 1780911416060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 836,
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
          "id": "b6abad014ce375ed88a80cb57b0479dea588fa41",
          "message": "fix(security): keep source reachability diff matches\n\nShared diff filtering already retained security candidates when the sink anchor or detector trace matched the changed lines. Source reachability added a second trace under reachability, but that trace was not included in the diff predicate, so diff-scoped runs could hide a candidate introduced by an untrusted-source path change.\n\nInclude reachability.untrusted_source_trace in the shared diff filter, add regression coverage for that path, and update nearby comments so the ranking and SARIF docs describe the current source-reachability contract.\n\nFollow-up to #1050.",
          "timestamp": "2026-06-08T12:03:23+02:00",
          "tree_id": "3b3e8b4375605a49d7d50da1ab224a20e43afc17",
          "url": "https://github.com/fallow-rs/fallow/commit/b6abad014ce375ed88a80cb57b0479dea588fa41"
        },
        "date": 1780913068374,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 836,
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
          "id": "2e1d6f5b76f8f0e2510904b5bc25bdebc0be5835",
          "message": "feat(lsp): surface security candidates as opt-in diagnostics (#891)\n\nSurface AnalysisResults.security_findings as opt-in LSP diagnostics at INFORMATION severity (the LSP translation of the CLI's advisory framing for unverified candidates, not mapped from rule severity), with a confidence-first hover and a suppress code action. Reuses the existing diagnostics, hover, and code-action infrastructure; opt-in is automatic because the security rules default off and the LSP reuses the project config, so findings appear only when a rule is raised to warn or error.\n\nEach diagnostic carries structured data (kind, category, cwe, sourceBacked, reachableFromEntry, blastRadius, crossesBoundary) so agents reading editor diagnostics triage off the wire. The hover leads with the confidence signals and points to fallow security --file for the full trace. A line-level suppress is offered only for TaintedSink (the only kind whose detector honors line-level suppression); both kinds keep the file-level suppress.\n\nEditor-agnostic: the squiggle, hover, and code action work in any LSP client (VS Code, Neovim, Helix, Zed) with no client change.\n\nFixes #891.",
          "timestamp": "2026-06-08T14:26:30+02:00",
          "tree_id": "0c9527a081318ea6a8cfa0f10bdc655cf2de991b",
          "url": "https://github.com/fallow-rs/fallow/commit/2e1d6f5b76f8f0e2510904b5bc25bdebc0be5835"
        },
        "date": 1780921771758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 836,
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
          "id": "606aac909e8d2f0c64b9e9259bc98ae1a84687a8",
          "message": "feat(security): regression gate for new sinks in changed lines (#886)\n\nTier 1 of the security regression gate (#886). fallow security --gate new reports ONLY security-sink candidates introduced on a CHANGED line and exits 8 if any exist, so a PR can be gated on new exposure without gating on the whole candidate backlog. A refactor that merely touches a file already containing a sink passes; a diff the gate cannot compute is a loud exit 2, never a green gate.\n\nThe gate predicate is a separate, stricter pass than the advisory diff filter: it keeps a new sink anchor on an added line or an UntrustedSource/Sink trace hop on an added line, and drops the SecretSource file-level exception and pass-through hops. Exit 8 is dedicated and pure; the gate supersedes --fail-on-issues. Findings stay unverified candidates (REVIEW REQUIRED human output, SARIF level note with the verdict in run.properties.fallowGate, additive gate JSON block).\n\nTier 2 (newly-reachable reachability delta) is deferred and tracked in #1056.\n\nRefs #886.",
          "timestamp": "2026-06-08T15:36:55+02:00",
          "tree_id": "8f0b98e576157bf0833e26eb5727e9b23004b9c0",
          "url": "https://github.com/fallow-rs/fallow/commit/606aac909e8d2f0c64b9e9259bc98ae1a84687a8"
        },
        "date": 1780925883212,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 836,
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
          "id": "ea6e3daf3df99a5a3c637ab673f47abaa15c7269",
          "message": "fix(vscode,lsp): keep production mode in sync across editor surfaces (#1059)\n\n`fallow.production` reached the CLI-driven sidebar (`--production`) but was never forwarded to the `fallow-lsp` server, so the sidebar tree and the editor diagnostics disagreed on dead-code findings whenever production mode was on.\n\nThe setting is now forwarded to both surfaces and becomes a tri-state `auto` / `on` / `off` (default `auto`): `auto` defers to the project `.fallowrc.json`, `on` forces production on, `off` forces it off on both surfaces. A new global `--no-production` flag (conflicts with `--production`) gives the CLI sidebar the force-off the LSP override already has. `fallow.production` and the `fallow.duplication.*` settings now use `resource` scope so a stale global value no longer overrides a project's committed config.\n\nEditor-only: CI, `fallow dead-code`, and `fallow audit` are unchanged.\n\nFixes #1055.",
          "timestamp": "2026-06-08T16:28:34+02:00",
          "tree_id": "3e42f47c483e44bfdbbbe20c8f918b225be8ad6a",
          "url": "https://github.com/fallow-rs/fallow/commit/ea6e3daf3df99a5a3c637ab673f47abaa15c7269"
        },
        "date": 1780929029901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 836,
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
          "id": "5dc83a4cb637758600098436cf11b665bf7b8c9e",
          "message": "feat(security): structure findings as agent-actionable candidate records\n\nReshape `fallow security --format json` so an AI agent can act on each finding directly. All additions are additive and output-only; the schema version stays V1, and human and SARIF output are unchanged.\n\nEvery finding gains a `candidate { source_kind, sink, boundary }` record (the untrusted-input kind as a stable catalogue id, a self-contained sink with the captured callee, and the boundary crossed), an optional `taint_flow { source, sink, path }` triple present only when an untrusted source is import-reachable to the sink, and a stable `finding_id` equal to its SARIF fingerprint for cross-run correlation. There is no `impact` field: deciding exploitability is the agent's job.\n\nThe candidate and taint_flow are pure re-projection of data the analysis already computes (the reachability pass, the previously-discarded catalogue source id, the SARIF fingerprint). No new taint analysis. The `taint_flow.path` is a compact shape; the full ordered hops stay on `reachability.untrusted_source_trace` and are not duplicated. The `export_visibility` and package boundary kinds are reserved for a follow-up rather than emitted as always-false.\n\nFixes #900.",
          "timestamp": "2026-06-08T16:54:37+02:00",
          "tree_id": "2f472a92829898760e8e8132db5451963b1167e7",
          "url": "https://github.com/fallow-rs/fallow/commit/5dc83a4cb637758600098436cf11b665bf7b8c9e"
        },
        "date": 1780930530826,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 836,
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
          "id": "171d49a4c1acc707f3b08d19a7da20d27557fc31",
          "message": "feat(security): expand source-backed entry inputs\n\nAdd catalogue rows and extractor bindings for GraphQL resolver args, tRPC procedure input, webhook raw request bodies, and exact DOM source reads. The tRPC capture is limited to procedure chains so ordinary query callbacks do not gain a source-backed ranking signal.\\n\\nAdd focused extractor, catalogue, integration, and fixture coverage for the new source shapes. Bump the extraction cache version so warm caches re-extract files with the updated tainted-binding semantics.\\n\\nFixes #899.",
          "timestamp": "2026-06-08T20:12:53+02:00",
          "tree_id": "5fe67bda57eca90f39db59f1988b9466c120a98a",
          "url": "https://github.com/fallow-rs/fallow/commit/171d49a4c1acc707f3b08d19a7da20d27557fc31"
        },
        "date": 1780942554540,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 836,
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
          "id": "22158ab9fd6601b6c00885558585df7e0dfd3577",
          "message": "feat(security): rank sink candidates with runtime coverage\n\nAdd opt-in runtime coverage enrichment to `fallow security` for tainted-sink candidates. The security output now records whether a candidate is runtime hot, runtime cold, never executed, or unknown when runtime evidence is supplied.\n\nUse the runtime state as an additive ranking signal: hot candidates move up, cold and never-executed candidates move down, and static reachability remains the fallback when no runtime evidence is available.\n\nFixes #887.",
          "timestamp": "2026-06-08T20:49:38+02:00",
          "tree_id": "c38248471c5de5f1794a4f80a492870f0b24ba49",
          "url": "https://github.com/fallow-rs/fallow/commit/22158ab9fd6601b6c00885558585df7e0dfd3577"
        },
        "date": 1780944657828,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 838,
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
          "id": "6215accdd197743fd176646afaad0c0d8139a0a2",
          "message": "feat(security): add attack surface inventory\n\nAdd an opt-in `fallow security --surface` JSON inventory that maps untrusted entry points to reachable sink candidates. The output is agent-facing and keeps defensive-boundary context as a verification prompt, not a human-facing missing-guard verdict.\n\nExpose the surface flag through MCP and keep the generated JSON schema and TypeScript contracts aligned with the new security output shape.\n\nFixes #888.",
          "timestamp": "2026-06-08T20:58:20+02:00",
          "tree_id": "1bb4928bc1a9e866aa2dff34bde53186d74a8a6e",
          "url": "https://github.com/fallow-rs/fallow/commit/6215accdd197743fd176646afaad0c0d8139a0a2"
        },
        "date": 1780945200507,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 838,
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
          "id": "1d26ae1ccca04cc69803a6ff3d19599c61cfb8d5",
          "message": "feat(security): secret-to-network exfil category with destination signal\n\nAdds an opt-in `secret-to-network` security candidate category (CWE-201): a non-public `process.env` / `import.meta.env` secret reaching a network sink's body/options argument (`fetch` / `axios` / `got` / `http(s).request`) via same-identifier source-backed flow, not module-level co-occurrence.\n\nBecause legitimate auth IS secret-to-network, the category is include-required (admitted only via `security.categories.include`, like `hardcoded-secret`). A new `requires_source_kinds` matcher field gates it to a SECRET source (`process-env` / `import-meta-env`), so request-input-to-fetch stays the `ssrf` category's job. Each candidate carries a destination-host signal (`candidate.network.destination`: the request URL when it is a static literal, usually intended auth, or absent when the destination is dynamic, the higher-signal exfil case) so a reviewing agent triages exfil from intended auth without re-reading source.\n\nThe change also stops treating public-by-convention env vars (`NEXT_PUBLIC_`, `VITE_`, `REACT_APP_`, ...) as secrets across the catalogue (the shared `is_public_env_var` predicate moved to fallow-types), which also removes a latent false positive from the shipped `secret-pii-log`, and models Vite's `import.meta.env` as a secret source via a new `flatten_member_path` MetaProperty arm. The destination is captured on `SinkSite.url_arg_literal`; `CACHE_VERSION` 137 -> 138. No new IssueKind or schema-version bump (the `candidate.network` field is additive, output-only). Hardcoded-secret-as-source and a provider-match heuristic are reserved follow-ups; the candidate carries no `impact` (the agent's job).\n\nFixes #890.",
          "timestamp": "2026-06-08T23:15:57+02:00",
          "tree_id": "5d94d6839aa477d6dc34a2cc579864ae75864225",
          "url": "https://github.com/fallow-rs/fallow/commit/1d26ae1ccca04cc69803a6ff3d19599c61cfb8d5"
        },
        "date": 1780953609830,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 25,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 21,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.29,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 349,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 838,
            "unit": "count"
          }
        ]
      }
    ]
  }
}