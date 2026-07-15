window.BENCHMARK_DATA = {
  "lastUpdate": 1784100081162,
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
          "id": "630722b016a5b785d6fa05ee54db6b339eb3c4fa",
          "message": "chore: release v3.0.0",
          "timestamp": "2026-07-04T10:58:59+02:00",
          "tree_id": "f011cc378131a241699dd790fca05d8f01d804ea",
          "url": "https://github.com/fallow-rs/fallow/commit/630722b016a5b785d6fa05ee54db6b339eb3c4fa"
        },
        "date": 1783155723705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 948,
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
          "id": "a45a7865b6a646be5e121c3687127357408c81b9",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.0.0",
          "timestamp": "2026-07-04T12:17:42+02:00",
          "tree_id": "6918a5a2e08e156c62134dbf8c931ce81d6657d1",
          "url": "https://github.com/fallow-rs/fallow/commit/a45a7865b6a646be5e121c3687127357408c81b9"
        },
        "date": 1783160530176,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 948,
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
          "id": "79987bd2dc5ee5d29c0ff5ed6615022f28f4fab6",
          "message": "docs(brand): fold styling into crate/npm/vscode descriptions, demote build attributes",
          "timestamp": "2026-07-04T16:58:09+02:00",
          "tree_id": "07e3265f1c6568af6b83287ec68552b015bfaef7",
          "url": "https://github.com/fallow-rs/fallow/commit/79987bd2dc5ee5d29c0ff5ed6615022f28f4fab6"
        },
        "date": 1783177162734,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 948,
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
          "id": "ff76b924a3ac0190f0f187c5917bda19275a3fcf",
          "message": "refactor(quality): reduce Rust unit size\n\nContinue the SIG unit-size cleanup by splitting long Rust functions across CLI, API, engine, extractor, graph, LSP, MCP, output, config, and types surfaces into narrower private helpers. The changes keep public output contracts and analysis behavior intact while making pipelines, renderers, mappers, and diagnostics easier to scan.\n\nThe loop only kept measured improvements and dropped the final non-improving split. No new user-facing capability is intended, this is maintainability work for future feature and bug-fix changes.",
          "timestamp": "2026-07-04T20:25:47+02:00",
          "tree_id": "7a6acf2979fb6307c8b0922ad92d265ca2058c9d",
          "url": "https://github.com/fallow-rs/fallow/commit/ff76b924a3ac0190f0f187c5917bda19275a3fcf"
        },
        "date": 1783189970542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "b1a2c07b8a247658f61eb133c0ce35c78e017606",
          "message": "fix(extract): credit factory members via return-type annotation (#1744)\n\nCross-module factory-return member crediting was body-only: it fired for\n`return new Class()` or a returned identifier whose type is a proven local,\nbut ignored the factory's own return-TYPE annotation. So a hook/factory\nwhose body has no value proof (`function useController(): ReadyAppController {\nreturn registry.get() as ReadyAppController }`) recorded no class binding,\nand every public method read on `const c = useController()` false-flagged as\nunused-class-member even though the class export itself was reachable.\n\nThread the function's declared return-type annotation into the factory-return\nrecording. When neither body value-proof fires, a sync (non-async,\nnon-generator) factory whose return type names a class records a strict\nfactory-return entry, so the cross-module `exported_factory_returns` metadata\ncredits `c.method()` across the module boundary (both fn-decl and arrow\nforms). This deliberately widens the #1441 value-vs-type doctrine: unlike a\nreturned-identifier's contradictable variable annotation, a function\nreturn-type annotation is the author's compiler-checked contract. It stays\nover-credit-safe: the analyze layer credits only when the name resolves to a\nreal class-with-members export, so a wrong annotation is a false negative at\nworst, never a false positive. A genuinely-unused method on the returned\nclass still reports.\n\nAdds extract unit tests (records the strict entry, arrow variant, async\nabstain) and a cross-file integration fixture + test. Bumps extract\nCACHE_VERSION 220 to 221 (the exported_factory_returns output changes).",
          "timestamp": "2026-07-05T10:05:26+02:00",
          "tree_id": "7aad836e6bbf254f5ed2dd84d04cfc6fa965335d",
          "url": "https://github.com/fallow-rs/fallow/commit/b1a2c07b8a247658f61eb133c0ce35c78e017606"
        },
        "date": 1783239098332,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "517ded7c8bba49aec699370c857cbc3d50c8af25",
          "message": "docs: document architecture north star",
          "timestamp": "2026-07-05T10:50:43+02:00",
          "tree_id": "4657ef068d500709b97aa6b7e476276185b1b3ff",
          "url": "https://github.com/fallow-rs/fallow/commit/517ded7c8bba49aec699370c857cbc3d50c8af25"
        },
        "date": 1783241631156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "f48b56c4743acb3ff4493798b39be227b413c0d1",
          "message": "docs: make core migration guide self-contained",
          "timestamp": "2026-07-05T10:55:53+02:00",
          "tree_id": "fc1297507a75de6892feed30fe7006b9a013b753",
          "url": "https://github.com/fallow-rs/fallow/commit/f48b56c4743acb3ff4493798b39be227b413c0d1"
        },
        "date": 1783241856080,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "5b4201a7cedb48de258965eaf46f359ec44856a1",
          "message": "docs: keep core migration warnings self-contained",
          "timestamp": "2026-07-05T10:59:25+02:00",
          "tree_id": "8520a06d9ee3710a3f1c173e59a1b7b216eb6269",
          "url": "https://github.com/fallow-rs/fallow/commit/5b4201a7cedb48de258965eaf46f359ec44856a1"
        },
        "date": 1783242082343,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "8762f20680c8a0b0a39dbee1a6b1f8d9e33e715f",
          "message": "test(cli): isolate workflow_event config_shape from accumulator leak\n\nbuild_workflow_event reads process-global telemetry accumulators (config\nshape, findings, cache state, scale buckets). These are static because\nproduction runs one analysis batch per process, but the in-process test\nbinary shares them: any test that loads a config calls note_config_shape,\nleaving CONFIG_SHAPE set for whatever test runs next. workflow_event_buckets_exit_codes\nthen read a leaked CustomConfig instead of its record's CustomRules and\nfailed nondeterministically (deterministically under --test-threads=1).\n\nAdd a cfg(test) reset_run_accumulators_for_test that restores the\nfresh-process UNSET state, and call it at the start of the affected test.",
          "timestamp": "2026-07-05T11:09:25+02:00",
          "tree_id": "4e828112e3b7e1932a7ba2278857cd1305bdad68",
          "url": "https://github.com/fallow-rs/fallow/commit/8762f20680c8a0b0a39dbee1a6b1f8d9e33e715f"
        },
        "date": 1783242658468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "784ffed5d6a2113262787585d8599dc1cf8acd9a",
          "message": "feat(trace): fall back to a class-member trace on export miss (#1744)\n\n`fallow dead-code --trace FILE:NAME` errored `export 'NAME' not found` when NAME was a class / enum / store MEMBER rather than a top-level export, so a member finding could not be debugged from the trace tool. On an export miss, `handle_trace_export` now falls back to a `trace_class_member` primitive that finds the export whose members contain NAME and reports the owning export's reachability and usage (reusing `trace_export`), who imports it, the re-export chains it is reachable through, and a `fallow dead-code --unused-<kind>-members --file <file>` pointer.\n\nThe trace path runs on the module graph only, so it does not report per-member crediting provenance. Trace JSON goes through the generic `print_trace_json` (not in the published schema), so the new `ClassMemberTrace` type needs no schema or TS-codegen regen. Adds core + human-renderer tests; human and `--format json` supported.\n\nCloses #1744.",
          "timestamp": "2026-07-05T11:16:58+02:00",
          "tree_id": "40bcb08fba8878fd48278a93a3974b02f6231ebf",
          "url": "https://github.com/fallow-rs/fallow/commit/784ffed5d6a2113262787585d8599dc1cf8acd9a"
        },
        "date": 1783243167762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "6b9eb819620baf9aaf892e2ec552e92eb8a63e2e",
          "message": "refactor(engine): route workspace discovery through engine",
          "timestamp": "2026-07-05T11:44:05+02:00",
          "tree_id": "b3d4e7baf45ecd11c4357acc578d0b29f434926b",
          "url": "https://github.com/fallow-rs/fallow/commit/6b9eb819620baf9aaf892e2ec552e92eb8a63e2e"
        },
        "date": 1783244771687,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "3bb785ce9a64066a096f33379e34b2b7a3e0c31c",
          "message": "refactor(engine): own workspace scope resolution",
          "timestamp": "2026-07-05T11:57:09+02:00",
          "tree_id": "9ccd27402baee33ddc5c915b2ebdb63edf474c74",
          "url": "https://github.com/fallow-rs/fallow/commit/3bb785ce9a64066a096f33379e34b2b7a3e0c31c"
        },
        "date": 1783245567250,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "fefe43f91c89c9662e090da068c5ca916856a02d",
          "message": "refactor(engine): own list inventory composition",
          "timestamp": "2026-07-05T12:05:28+02:00",
          "tree_id": "e68e6ddad3991f77357ec479a84eec7560d04d5c",
          "url": "https://github.com/fallow-rs/fallow/commit/fefe43f91c89c9662e090da068c5ca916856a02d"
        },
        "date": 1783246053730,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "callum.howard@checkbox.ai",
            "name": "Callum Howard",
            "username": "CallumHoward"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f0cef748adc8b602c6ac87ec6c2e6e8128c5dd6",
          "message": "feat: add dev-dependency-in-production rule (#1740)\n\n* feat: add dev-dependency-in-production rule\n\nFlag a package in devDependencies that is imported by production\n(non-test, non-config) source code via a runtime/value import, so it can\nbe promoted to dependencies. A production-only install\n(pnpm install --prod) omits devDependencies, so such an import breaks at\nruntime. This is the promote-side mirror of the existing\ntest-only-dependency and type-only-dependency rules.\n\nDetection reuses the prod-vs-test file partition and the per-import\nvalue/type accounting already used by the sibling rules:\n\n- flag only when a production file has a runtime (value) import\n- do not flag type-only production imports (erased at build time)\n- do not flag imports that come only from test/config files\n- skip workspace packages, known tooling (@types/*, typescript, ...),\n  ignoreDependencies entries, and packages also declared in\n  dependencies / peerDependencies / optionalDependencies\n\nDefault severity warn; gated by the dev-dependencies-in-production rule\nkey; suppress a package with ignoreDependencies. Wired through human,\nJSON, SARIF, Code Climate, compact, and markdown output, fallow explain,\nthe LSP diagnostic surface, the GitHub Action / GitLab CI jq summaries,\nthe VS Code extension, regression baselines, and the generated contracts.\nAdds a fixture, integration test, and unit tests covering the flag and\neach abstain path.\n\n* fix(deps): harden dev-dependency-in-production before ship\n\nFilter parity: clear dev_dependencies_in_production in the --unused-deps\nclear arm and the --file scoping path like every sibling dependency kind,\nand render devDependenciesInProduction in the TOML regression baseline so\na saved fallow.toml baseline does not report a phantom regression.\n\nDetection: only count imports from files reachable from a RUNTIME entry\npoint (repo tooling like scripts/, benchmarks/, and rollup-config chains\nis not production evidence), skip files owned by a workspace package\n(root-manifest scope; a hoisted root devDep declared in the workspace's\nown dependencies is not a misplacement), and keep the rule active in\nproduction mode where its signal is cleanest.\n\nSurfaces: align jq summary labels with the registry label (drift gate),\nadd the kind to the action drift-guard fallback table, the VS Code status\nbar registry, and the @fallow/node typings; drop the never-released\nprod-usage-of-dev-dependency alias; strip the CHANGELOG em-dash and\ndocument the runtime-reachability semantics and known limitations.\n\n---------\n\nCo-authored-by: Claude <noreply@anthropic.com>\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-07-05T12:12:06+02:00",
          "tree_id": "a8ebacaf0ecb0096ff459dde001ae13057175b33",
          "url": "https://github.com/fallow-rs/fallow/commit/7f0cef748adc8b602c6ac87ec6c2e6e8128c5dd6"
        },
        "date": 1783246427688,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "f86039289acd6dee37597d41a7988b893a7f26f8",
          "message": "refactor(engine): own routing git identities",
          "timestamp": "2026-07-05T12:14:05+02:00",
          "tree_id": "f7bd6c7a9dc2a9b810495dc82c403d9275e63823",
          "url": "https://github.com/fallow-rs/fallow/commit/f86039289acd6dee37597d41a7988b893a7f26f8"
        },
        "date": 1783246623585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "6ea5700b9d00292aa47a60b3fec634abd4a39e8a",
          "message": "refactor(engine): own audit repo refs",
          "timestamp": "2026-07-05T12:25:53+02:00",
          "tree_id": "69d957791c764e65aabf9d75e3c5ffc29b73043a",
          "url": "https://github.com/fallow-rs/fallow/commit/6ea5700b9d00292aa47a60b3fec634abd4a39e8a"
        },
        "date": 1783247250012,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "fcbeb2005efeb2e4d86dca222e218a311e6a5aed",
          "message": "refactor(engine): own public api key policy",
          "timestamp": "2026-07-05T12:32:08+02:00",
          "tree_id": "c493902e15e5583b11d7ca8671fc3dcebfb0c9ad",
          "url": "https://github.com/fallow-rs/fallow/commit/fcbeb2005efeb2e4d86dca222e218a311e6a5aed"
        },
        "date": 1783247607620,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "26e195b3627ec190680fbf857ca2c5743ae1f703",
          "message": "refactor(engine): own project workspace scope",
          "timestamp": "2026-07-05T12:35:57+02:00",
          "tree_id": "363995c9789ce9dac9c60928365fe64e8a0bd8f2",
          "url": "https://github.com/fallow-rs/fallow/commit/26e195b3627ec190680fbf857ca2c5743ae1f703"
        },
        "date": 1783247847475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "71410c4e92a13dd4cd79a9970225349bfc78b8eb",
          "message": "chore: release v3.1.0",
          "timestamp": "2026-07-05T13:07:30+02:00",
          "tree_id": "b767cc9188067db4027fabd70d0d71e77c412a51",
          "url": "https://github.com/fallow-rs/fallow/commit/71410c4e92a13dd4cd79a9970225349bfc78b8eb"
        },
        "date": 1783249806386,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "a5e0327261f94261dd6752d27261758860eb7dfb",
          "message": "perf(api): reuse audit analysis context",
          "timestamp": "2026-07-05T14:13:22+02:00",
          "tree_id": "f4f1c0f80057d4190dea8a84aae9693c79bfa360",
          "url": "https://github.com/fallow-rs/fallow/commit/a5e0327261f94261dd6752d27261758860eb7dfb"
        },
        "date": 1783253963692,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "ede3bcd2c01c06d0b63178ee54491103cfe5ff11",
          "message": "docs: correct benchmark ratio claims",
          "timestamp": "2026-07-05T19:40:18+02:00",
          "tree_id": "a3659bf288831ff1b37b04933f8f616c8dca4e55",
          "url": "https://github.com/fallow-rs/fallow/commit/ede3bcd2c01c06d0b63178ee54491103cfe5ff11"
        },
        "date": 1783273323577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "1d14a7714bb46de6c36fc0fb3ffbc01f7aa35767",
          "message": "feat(health): add maxUnitSize threshold override for the large-function check (#1751)\n\nAdds a health.maxUnitSize line-count threshold (global default 60) plus a per-file thresholdOverrides[].maxUnitSize, so a user can raise the function-too-big bar for test files (or any glob) without disabling complexity checks the way health.ignore does.\n\nDesign is list-only, matching the existing maxCyclomatic/maxCognitive/maxCrap override precedent: it filters the reported large-functions list on the resolved per-file effective threshold, while the descriptive unit-size profile and the health score still reflect raw sizes.\n\nFixes #1731.",
          "timestamp": "2026-07-05T21:07:56+02:00",
          "tree_id": "0ff5613e7c0964c0f88d669d6a6b776856503be0",
          "url": "https://github.com/fallow-rs/fallow/commit/1d14a7714bb46de6c36fc0fb3ffbc01f7aa35767"
        },
        "date": 1783278843991,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "9dc768e2cc481d98d70c3cd24eb424712ea0d89e",
          "message": "perf: broaden codspeed benchmark coverage",
          "timestamp": "2026-07-05T21:35:49+02:00",
          "tree_id": "8efe61fc0d959fe8b7bf2e4634316d18b70a6cc7",
          "url": "https://github.com/fallow-rs/fallow/commit/9dc768e2cc481d98d70c3cd24eb424712ea0d89e"
        },
        "date": 1783280255974,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "185c6a728a4759c5c34afcae1d262ccb09e41a8c",
          "message": "feat(health): expose max unit size threshold in summary\n\nAdd max_unit_size_threshold to the health JSON summary so consumers can read the configured global health.maxUnitSize alongside the existing cyclomatic, cognitive, and CRAP thresholds.\n\nThe human large-functions section now reflects the configured global threshold, and the markdown/human fallback effective-threshold wiring carries the same value for parity with the other thresholds.\n\nFixes #1750.",
          "timestamp": "2026-07-05T22:15:25+02:00",
          "tree_id": "ff38a4bc359bb161c5746c4abd7ff6381f68399a",
          "url": "https://github.com/fallow-rs/fallow/commit/185c6a728a4759c5c34afcae1d262ccb09e41a8c"
        },
        "date": 1783282740641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "afa3c171257bcb18cd0edbad9cf033d2be8f0443",
          "message": "fix(health): pluralize the large-functions unit-size footer (#1753)\n\nThe large-functions footer from #1750 read \"exceeding 1 lines\" when health.maxUnitSize is 1; guard the noun so a ceiling of 1 renders \"1 line\". Refs #1750.",
          "timestamp": "2026-07-05T22:35:46+02:00",
          "tree_id": "b388d3dcf64b25ac2d88c6e4a0b38dfbcdf95c2a",
          "url": "https://github.com/fallow-rs/fallow/commit/afa3c171257bcb18cd0edbad9cf033d2be8f0443"
        },
        "date": 1783283822759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "0d568277b6cf91e95c98cb92f8228154e58d6984",
          "message": "chore: release v3.2.0",
          "timestamp": "2026-07-05T23:33:08+02:00",
          "tree_id": "06f0a215a30c01d1d15b2bcfa60193d5391080d5",
          "url": "https://github.com/fallow-rs/fallow/commit/0d568277b6cf91e95c98cb92f8228154e58d6984"
        },
        "date": 1783287321407,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "6280c23c3709f69691ebdaef9172c81a4883bdef",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.2.0",
          "timestamp": "2026-07-06T00:38:45+02:00",
          "tree_id": "a5f6f2c47a377bd2c9f4265e282161708d4e6003",
          "url": "https://github.com/fallow-rs/fallow/commit/6280c23c3709f69691ebdaef9172c81a4883bdef"
        },
        "date": 1783291492692,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "9807e2e414a3a3bd379727b6cc6c7ae21d25ce7a",
          "message": "fix(unused-class-members): credit iteration bindings\n\nCredit unused-class-member usage through typed iteration bindings in Vue, Angular external templates, and function-local JavaScript arrays.\n\nThe extractor now preserves scoped array element facts for local loops and callbacks, records Angular component field array types for templateUrl usage, and avoids parallel overhead for tiny warm-cache parse sets.\n\nFixes #1716.\nFixes #1717.\nFixes #1718.",
          "timestamp": "2026-07-06T11:12:22+02:00",
          "tree_id": "93944c9477529094a9f9e31e34ad0ccfc77fbe95",
          "url": "https://github.com/fallow-rs/fallow/commit/9807e2e414a3a3bd379727b6cc6c7ae21d25ce7a"
        },
        "date": 1783329211130,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "2c9ecd2f9091c56b92b0177b7d4d01a45e044f6d",
          "message": "feat(analysis): add route-loader and CSS-in-JS quality checks\n\nAdds framework-scoped route-loader data key harvesting for React Router and Remix while keeping SvelteKit load data isolated. The extractor now records the correct producer mode, bumps the cache version, and the analyzer keeps SvelteKit whole-object abstain from suppressing route-loader findings.\n\nAdds CSS-in-JS near-duplicate token reporting to the CSS analytics contract, human health output, schema, generated TypeScript contracts, and styling findings. Partial-scope scans abstain from the whole-project comparison so changed-file output stays conservative.",
          "timestamp": "2026-07-06T11:46:31+02:00",
          "tree_id": "f7d59442271c692c1e336839424ecf12abe89e11",
          "url": "https://github.com/fallow-rs/fallow/commit/2c9ecd2f9091c56b92b0177b7d4d01a45e044f6d"
        },
        "date": 1783331298626,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "ba423ccec8b0e7edc3e5cdb67ba97ea1c9b2c25d",
          "message": "docs(extract): clarify parse scheduling\n\nClarifies that extraction uses a sequential fast path for small file sets and parallel parsing for larger file sets.\n\nAlso documents why the small-input threshold exists: avoiding Rayon scheduling overhead on cache-hot inputs.",
          "timestamp": "2026-07-06T12:02:31+02:00",
          "tree_id": "84b49d92c5c25e14c2625b2381ca9d4d60d46302",
          "url": "https://github.com/fallow-rs/fallow/commit/ba423ccec8b0e7edc3e5cdb67ba97ea1c9b2c25d"
        },
        "date": 1783332220932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "f1b9d4c1b12acebe53841a259b91ba36d7607468",
          "message": "feat(architecture): add contract guardrails\n\nAdd generated contract surface checks, architecture invariants, SARIF/LSP contract cleanup, MCP CLI fallbacks, and public smoke conformance guardrails.",
          "timestamp": "2026-07-06T19:07:35+02:00",
          "tree_id": "72031856c10c4af91c5c074522e91270a772f573",
          "url": "https://github.com/fallow-rs/fallow/commit/f1b9d4c1b12acebe53841a259b91ba36d7607468"
        },
        "date": 1783357727914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "2c96a30db4904bab4d269782cad4874bcbbfc72e",
          "message": "refactor(architecture): close output boundary leftovers\n\nMove reusable SARIF result assembly and audit styling render facts into fallow-output so API and CLI code stop owning shared output contract behavior.\n\nKeep fallow-core contained as engine backend debt by removing the benchmark convenience dependency and adding crate-boundary guards. Complete the FallowOutput schema manifest for trace, feature flags, and decision surface, then drift-test the backwards compatibility docs and regenerated TypeScript contracts.",
          "timestamp": "2026-07-06T23:53:20+02:00",
          "tree_id": "a189a2313c041ef55c41a310e4ea13f65108a0e3",
          "url": "https://github.com/fallow-rs/fallow/commit/2c96a30db4904bab4d269782cad4874bcbbfc72e"
        },
        "date": 1783374872098,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "e7878f27ede3575df0ca7142e03db38ad56acb00",
          "message": "refactor: remove architecture debt\n\nMove SARIF-family assembly and shared formatter facts behind fallow-output while keeping fallow-api as a compatibility facade.\n\nReclassify fallow-core as an internal detector backend behind fallow-engine, tighten architecture guards for direct core calls, IO/cache ownership, analyzer placement, manifest drift, and protocol prose.\n\nRemove stale exception language from contributor docs and add pre-ship guard coverage so the architecture debt cannot silently return.",
          "timestamp": "2026-07-07T07:51:22+02:00",
          "tree_id": "db8be59ca0bf3c1f9de75a9cf302d1874c84c199",
          "url": "https://github.com/fallow-rs/fallow/commit/e7878f27ede3575df0ca7142e03db38ad56acb00"
        },
        "date": 1783404167007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 404,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 949,
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
          "id": "90d340dcdc8f15c8bc2dfbecbf348b51894f72d9",
          "message": "fix(resolve): clarify incomplete-tsconfig-chain warning\n\nThe \"Broken tsconfig chain ... path aliases from missing inherited configs will not [work]\" warning read as if every path alias was unresolved, alarming users of large monorepos whose aliases resolve fine. When a per-file tsconfig extends/references chain cannot be fully loaded (commonly a node_modules base config not installed yet), fallow falls back to resolver-less resolution, but aliases declared in a discovered root or workspace tsconfig are still applied project-wide by the TypeScript plugin. The warning now says so and only flags aliases declared solely in the unreadable inherited config. Wording and documentation only; resolution behavior is unchanged.",
          "timestamp": "2026-07-07T21:06:38+02:00",
          "tree_id": "8a35075bdbd2b0b2de755d2aa78a346500f24683",
          "url": "https://github.com/fallow-rs/fallow/commit/90d340dcdc8f15c8bc2dfbecbf348b51894f72d9"
        },
        "date": 1783451591812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 405,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 951,
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
          "id": "68626df671925eae57fdf8d099a4116b8a2609dd",
          "message": "feat(onboarding): cold-start config recommendation for agents\n\nAdds an agent onboarding surface that takes a cold-start agent (arriving via\nGitHub, npx, or MCP) from zero to a project-tailored fallow config. `fallow\nschema` is a capability manifest (commands, global flags, issue types with\ndefault severities / opt-in / frameworks, boundary presets, taste choices,\nsecurity categories, MCP tools, related schemas); `fallow recommend` emits a\ndetection-derived `proposed_config` that loads through the real loader plus a\nthree-valued `decisions[]` list (auto applied silently, default disclosed and\noverridable, taste surfaced as an open AskUserQuestion with no baked-in answer);\na read-only `recommend` MCP tool mirrors it 1:1; and `fallow config-schema` is\nself-documenting from the Rust config types.\n\n`fallow init` now derives its detection base (entry, workspaces.patterns,\nStorybook ignore) from the same recommend core so init and recommend never\ndrift, and the `--toml` scaffold writes the loader's `patterns` key instead of\nthe silently-dropped `packages` (with a `packages` back-compat serde alias so\nexisting configs keep scoping). Framework and test-framework detection now\naggregate dependency names across workspace members, not just the root\npackage.json, so a monorepo whose frameworks live in packages (Next.js in\napps/web) is reported instead of showing as frameworkless.\n\n`fallow config` on a zero-config project now prints the effective defaults as\nclean JSON and exits 0 (was exit 3 with no output); `--path` still exits 3 when\nno file exists. `fallow recommend`'s concise human output points at\n`--format json` for the full structured decision set. Companion docs\n(fallow-docs) are updated separately; the vendored skill/manifest contracts are\nregenerated in this change.",
          "timestamp": "2026-07-07T22:08:34+02:00",
          "tree_id": "cb83096934bdae92ee359eb934e4619109dd3dff",
          "url": "https://github.com/fallow-rs/fallow/commit/68626df671925eae57fdf8d099a4116b8a2609dd"
        },
        "date": 1783455342157,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 406,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 953,
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
          "id": "2244b5c42d096f04a8334e4e84d13bd5f6de9d2f",
          "message": "chore(deps): unblock Dependabot PRs (crossbeam-epoch security + npm tooling) (#1778)\n\n* fix(deps): bump crossbeam-epoch to 0.9.20 for RUSTSEC-2026-0204\n\ncrossbeam-epoch 0.9.18 (transitive via rayon-core and ignore) is flagged\nby RUSTSEC-2026-0204: invalid pointer dereference in the fmt::Display impl\nfor Atomic/Shared on null pointers. Fixed in >=0.9.20. Cargo.lock-only\nbump; clears the Cargo Deny and Security Audit failures on main and every\nopen PR.\n\n* chore(deps-dev): bump commitlint, oxfmt, oxlint and resync lockfile\n\nBumps @commitlint/cli and @commitlint/config-conventional to 21.2.0,\noxfmt to 0.57.0, oxlint to 1.72.0. Regenerates package-lock.json with a\nreal npm install so the nested conventional-commits-parser@6.4.0 entry is\nrestored; Dependabot's per-package lockfile regeneration had pruned it,\nbreaking npm ci (the JS Lint and Commit messages checks) on every npm PR.\n\nSupersedes #1761, #1763, #1764, #1765.",
          "timestamp": "2026-07-07T20:48:06Z",
          "tree_id": "29570e966bace28ce0c12094d6726e16f5885c39",
          "url": "https://github.com/fallow-rs/fallow/commit/2244b5c42d096f04a8334e4e84d13bd5f6de9d2f"
        },
        "date": 1783457614000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 406,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 953,
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
          "id": "66e4400cbcaeb3e134e76965b0c15aa7f0f1e91e",
          "message": "chore(deps): migrate MCP server to rmcp 2.x (#1779)\n\nBumps rmcp 1.8 -> 2.1 (manifest floor \"2.0\"). The 2.0 model reorg renamed\nthe content type: `Content` (an `Annotated<RawContent>` with a `.raw`\nfield) became the flat `ContentBlock` enum, and the `RawContent` enum was\nremoved. Migrated all tool response builders and result-parsing helpers:\n\n- `rmcp::model::Content` -> `ContentBlock`; `Content::text` -> `ContentBlock::text`\n- `let RawContent::Text(t) = &content.raw` -> `let ContentBlock::Text(t) = content`\n- `match &result.content[0].raw { RawContent::Text(t) => .. }` -> `match &result.content[0] { ContentBlock::Text(t) => .. }`\n\nThe tool-router macros (`#[tool]`, `tool_router`, `tool_handler`),\n`ServerHandler`, `Parameters`, and stdio transport are unchanged across\nthe major. Verified: builds, clippy clean, mcp tests pass, and a live\nstdio session (initialize -> tools/list -> tools/call fallow_explain)\nreturns correct results.\n\nCloses #1773.",
          "timestamp": "2026-07-07T21:12:18Z",
          "tree_id": "a9b35be271a7c773aa72924e003fd7f3ccea9f8e",
          "url": "https://github.com/fallow-rs/fallow/commit/66e4400cbcaeb3e134e76965b0c15aa7f0f1e91e"
        },
        "date": 1783459120942,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 406,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 953,
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
          "id": "7a827074ceedafb3199ae6ea1f729910ec1354b1",
          "message": "feat(plugins): add fallow plugin-check for agent plugin-authoring\n\nRead-only fallow plugin-check [--format json] dry-run so an agent can verify an external plugin (fallow-plugin-*.jsonc, especially manifestEntries) without a full analysis. Reports per plugin whether it activated (with the unmet detection/enabler requirement when inactive), and for active manifestEntries plugins the per-rule matched manifests, when-gate result, seeded entries (with path_exists), and typed warnings. The report is a shared RuleReport that production seeding also consumes, so the two cannot drift. Deterministic output; always exits 0 (advisory).\n\nA dead-code --format json run with active external plugins + unused files surfaces a verify-plugins next step, and fallow schema related_schemas gained plugin_schema_command / plugin_check_command pointers. Fixes the dead fallow.dev/plugin-schema.json URL to raw.githubusercontent. Refs #1774.",
          "timestamp": "2026-07-08T09:28:12+02:00",
          "tree_id": "59c68ebaa68a4fc92a8a4b9736537407dc07fadd",
          "url": "https://github.com/fallow-rs/fallow/commit/7a827074ceedafb3199ae6ea1f729910ec1354b1"
        },
        "date": 1783496050222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 406,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 953,
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
          "id": "dc47771ba6fbee568a862ca72516fde9fd3f89cb",
          "message": "style: apply rustfmt after css_analytics split",
          "timestamp": "2026-07-08T12:14:50+02:00",
          "tree_id": "0ca632c18a104fcfa9f74f45b1e90bbb8d6601b6",
          "url": "https://github.com/fallow-rs/fallow/commit/dc47771ba6fbee568a862ca72516fde9fd3f89cb"
        },
        "date": 1783506215429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 406,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 953,
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
          "id": "d0871a46eebeb930dceb737aee2be48270635f62",
          "message": "fix(distribution): harden agent-facing release surfaces\n\nHarden the shipped npm wrapper so signal-terminated binaries propagate a failing shell-style exit code, and make Linux libc fallback choose the musl package unless glibc is detected.\n\nMove hot-path fan I/O reference signals to a precomputed graph pass, convert LSP byte columns to UTF-16 at the protocol boundary, and keep Node addon panics catchable by using a NAPI-specific unwind profile.\n\nExpose impact_closure as a read-only MCP tool that wraps the existing dead-code impact closure CLI path, including Code Mode, manifest, schema, documentation, and regression coverage.",
          "timestamp": "2026-07-08T19:11:23+02:00",
          "tree_id": "4d6526bd83f630e06d1ca1d822844e202932d8f6",
          "url": "https://github.com/fallow-rs/fallow/commit/d0871a46eebeb930dceb737aee2be48270635f62"
        },
        "date": 1783531426455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0.99,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 406,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 953,
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
          "id": "ef6b1de673addd85cc57bc4b02d3f3487bfce2d2",
          "message": "test(cli): update architecture guardrails after core detector deletion\n\nThe core_backend forbidden list dropped its fallow_core::duplicates::*\nentries: the module no longer exists, so that routing cannot compile and\nthe string guards are vacuous. The BackendCloneFingerprintSet adapter\nguard and the engine-side ownership assertions stay. Also repoints a\ndoc-comment path in audit_tests.rs to the engine detector tree.",
          "timestamp": "2026-07-08T21:22:28+02:00",
          "tree_id": "f20d25cbe6e9bbb56c3c1a6a11b5ba11b0267cae",
          "url": "https://github.com/fallow-rs/fallow/commit/ef6b1de673addd85cc57bc4b02d3f3487bfce2d2"
        },
        "date": 1783545088405,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.03,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 388,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 918,
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
          "id": "a4fb282920ee12d521d48a2f13be9ad77d3665ef",
          "message": "docs(rules): point churn wiring at fallow_engine paths in cli-crate.md",
          "timestamp": "2026-07-08T23:17:03+02:00",
          "tree_id": "bb38d0056949b8ed70e36793b19a100ba1ae8c97",
          "url": "https://github.com/fallow-rs/fallow/commit/a4fb282920ee12d521d48a2f13be9ad77d3665ef"
        },
        "date": 1783545595231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.03,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 388,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 918,
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
          "id": "c196a300d6a420d9c2abe69df1f771b336942b7f",
          "message": "fix(members): credit member access through interface/type-alias property hops\n\nA dotted member chain whose receiver's type hop goes through a named interface or type-literal alias (interface Opts { c: OptDep }, constructor(private opts: Opts), this.opts.c.optM()) was never resolved, same-file or cross-module: the per-file interface property-type map's only consumer was destructured typed bindings. Codebases wiring classes through constructor-injected options objects saw near-100% false-positive unused-class-member rates and had to disable the rule.\n\nThe extraction layer now expands compound binding targets through the file's own interface/alias property types (one path segment per hop, so self-referential types terminate; local-class compounds stay on the instance_bindings path). When a hop's type name is imported, the property maps persist as ModuleInfo.type_member_types and a new TypedPropertyMemberAccess semantic fact joins consumer, declaring module, and class at analyze time, mirroring the factory-return machinery with the same export_is_class_with_members over-credit gate, so a wrong annotation can only under-report, never flag. Same-file renamed interface exports (export { Foo as Bar }) resolve through the export's declared local name.\n\nAlso fixed: interface-declared Playwright fixture maps (base.extend<MyFixtures> where MyFixtures is an interface) now resolve identically to the type-alias form, and the SFC merge path now carries semantic_facts, so Vue/Svelte script blocks participate in every cross-module fact join they previously dropped. CACHE_VERSION 224 to 225; warm caches invalidate on upgrade.\n\nFixes #1785.",
          "timestamp": "2026-07-08T23:51:37+02:00",
          "tree_id": "be50085faab8293d5d61c4509a6ae7f5e6c56a29",
          "url": "https://github.com/fallow-rs/fallow/commit/c196a300d6a420d9c2abe69df1f771b336942b7f"
        },
        "date": 1783547608521,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.03,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 388,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 918,
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
          "id": "be01c9abe56fa40fc225537f95dfa1e270e17326",
          "message": "fix(members): hop through local unexported options classes in typed-property expansion\n\nFollow-up to #1787: an options object typed by a LOCAL, UNEXPORTED class whose property type is imported (class Opts { constructor(public c: ImportedDep) {} } + this.opts.c.optM()) still reported ImportedDep.optM as an unused-class-member. The unexported class never resolves through local_to_export_keys, so the analyze-side instance-binding chain dead-ends, and the #1785 expansion returned Opaque for every local-class root.\n\nexpand_typed_property_compound now continues through a locally-declared class's own typed-property bindings, unifying the class hop with the interface/alias hop. Exported classes keep their analyze-side path (the extract-side credit is additive and gated identically downstream, so a wrong hop can only under-report); an unknown property on a local-class hop abstains. CACHE_VERSION 225 to 226.\n\nFixes #1788.",
          "timestamp": "2026-07-09T08:57:56+02:00",
          "tree_id": "0bdf9b44b1e3fc71656f095fd27ae84bf6241b72",
          "url": "https://github.com/fallow-rs/fallow/commit/be01c9abe56fa40fc225537f95dfa1e270e17326"
        },
        "date": 1783580609333,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.03,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 388,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 918,
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
          "id": "48f415e1191095a8b4a7a170e0ceee8eaccb402e",
          "message": "refactor(core): remove engine-owned copy modules\n\nRemove the stale fallow-core copies for churn, trace, trace-chain, and cross-reference now that fallow-engine owns those surfaces. This keeps core focused on internal orchestration instead of publishing duplicate adapters that can drift.\n\nMove the trace and trace-chain regression coverage onto the engine path, add an architecture guardrail that rejects reintroducing the core modules, and drop the unused core bitcode dependency.",
          "timestamp": "2026-07-09T10:47:28+02:00",
          "tree_id": "edda384dd8da235bd8d6202781eae85c4e6a0c36",
          "url": "https://github.com/fallow-rs/fallow/commit/48f415e1191095a8b4a7a170e0ceee8eaccb402e"
        },
        "date": 1783587301751,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.03,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 388,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 918,
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
          "id": "b005d105c275f2dd0da67767862b12e702295cec",
          "message": "fix(members): credit Playwright POM methods through function-wrapped fixture consts (#1792)\n\nA Playwright fixture exported as a function that wraps a local base.extend<T>({...}) fixture const via <const>.extend({}) and called in specs as myTest()(\"title\", cb) left every Page Object method reported as unused-class-member. The equivalent direct const form credited them correctly.\n\nThe use side already handled the double-call; the def side dropped it because try_capture_playwright_factory_helper bailed on a wrapping .extend({}) with no type argument. The helper now records a (helper, base) alias whenever it returns <base>.extend(...), and the finalize-time fixed point inherits fixture bindings from local base.extend<T>({...}) consts (a new transient playwright_local_fixture_defs map) as an inheritance source only, gated on @playwright/test resolution so non-Playwright code is unaffected. Bumps the extract CACHE_VERSION 226 to 227.\n\nFixes #1791.",
          "timestamp": "2026-07-09T11:34:57+02:00",
          "tree_id": "8b12d6f9466b770766c095d664acf0edfe623f31",
          "url": "https://github.com/fallow-rs/fallow/commit/b005d105c275f2dd0da67767862b12e702295cec"
        },
        "date": 1783590167455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.03,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 388,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 918,
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
          "id": "c9326d9395c0b46f4077290473060b3e950b6e8c",
          "message": "chore: release v3.3.0",
          "timestamp": "2026-07-09T13:33:19+02:00",
          "tree_id": "ec96dac95d61fa33fa75fa03f8df2d0c1ff95914",
          "url": "https://github.com/fallow-rs/fallow/commit/c9326d9395c0b46f4077290473060b3e950b6e8c"
        },
        "date": 1783597228520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.03,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 388,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 918,
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
          "id": "ac9cf46f94303c658e15c5a6789137075ad65fba",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.3.0",
          "timestamp": "2026-07-09T14:32:39+02:00",
          "tree_id": "db8f60e46559097639047210300ebd59ce045d22",
          "url": "https://github.com/fallow-rs/fallow/commit/ac9cf46f94303c658e15c5a6789137075ad65fba"
        },
        "date": 1783600844383,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.03,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 388,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 918,
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
          "id": "89d83c73d3a64f1e3fcde52cdafe72d7fc7c3071",
          "message": "chore(contracts): regenerate output schema, TS contracts, and capabilities for suppression-inventory",
          "timestamp": "2026-07-09T21:14:57+02:00",
          "tree_id": "5e2a71e73fc3bd5e8bbea43a90b213df96f7529a",
          "url": "https://github.com/fallow-rs/fallow/commit/89d83c73d3a64f1e3fcde52cdafe72d7fc7c3071"
        },
        "date": 1783624959905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.03,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 388,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 918,
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
          "id": "49f62ff29ae896681e541a0b7bd9a1bb04d963f8",
          "message": "docs: changelog entry and regenerated capability manifest for the GitHub formats\n\nCHANGELOG under Unreleased/Added for --format github-annotations,\n--format github-summary, and fallow report --from. capabilities.json,\nthe vendored SKILL.md task matrix, and the CLI reference regenerate from\nlive clap via npm run generate:contracts (new --format values, the\n--annotations-path-prefix global flag, and the report command).",
          "timestamp": "2026-07-09T22:10:58+02:00",
          "tree_id": "dfd4a9a305814386afdad0a1c662ca3e1b754dca",
          "url": "https://github.com/fallow-rs/fallow/commit/49f62ff29ae896681e541a0b7bd9a1bb04d963f8"
        },
        "date": 1783628234180,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 26,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.02,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 391,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 922,
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
          "id": "05a23e93d82583f43a8982dc3e9ebce5581bdf58",
          "message": "docs: drop deleted core-module references from agent and security docs\n\nPoints CLAUDE.md, the crate rule files, crates/core/AGENTS.md, SECURITY.md, detection.md, and CONTRIBUTING.md at the current module owners (engine duplication_detector/ and churn.rs, types-crate duplication types, analyze/members/) and removes the deleted duplicates/, cross_reference.rs, trace.rs, and spawn::git references.",
          "timestamp": "2026-07-09T22:59:12+02:00",
          "tree_id": "a5000fc6def84bd7543f7bc250130fe3962949a2",
          "url": "https://github.com/fallow-rs/fallow/commit/05a23e93d82583f43a8982dc3e9ebce5581bdf58"
        },
        "date": 1783631348268,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 983,
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
          "id": "38f36755518bad4df0c4b4aa9071eba5c7e97561",
          "message": "fix: harden config trust and process lifecycle\n\n* chore: open audit security implementation branch\n\n* fix: harden config trust and process lifecycle\n\n* test: run MCP process cleanup on Windows\n\n* test: fix Windows process tree fixture",
          "timestamp": "2026-07-10T00:18:47+02:00",
          "tree_id": "47f3eab1e34610ea0c4a31ec5b4e1ace829571c3",
          "url": "https://github.com/fallow-rs/fallow/commit/38f36755518bad4df0c4b4aa9071eba5c7e97561"
        },
        "date": 1783635864595,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 985,
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
          "id": "d10ef7616a78bc7268948cec15690cfbb7b9365a",
          "message": "test(core,engine): drop timing-dependent asserts and profiling pseudo-test\n\nGates the assert-free dupes profiling harness behind #[ignore], removes the wall-clock asserts from the dupes stress tests (bench workflows own perf signal), makes the graph-cache transparency test deterministic without the mtime sleep, and moves the test-only tempfile dependency to dev-dependencies.",
          "timestamp": "2026-07-10T00:29:19+02:00",
          "tree_id": "8b358b861bfe734dad120c0ec01c3f92372d91e8",
          "url": "https://github.com/fallow-rs/fallow/commit/d10ef7616a78bc7268948cec15690cfbb7b9365a"
        },
        "date": 1783636246609,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 985,
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
          "id": "ee20cbaf15378649088b951bc4ecb4c72622ea34",
          "message": "test: strengthen CI and contributor guidance\n\n* chore: open audit CI and docs implementation branch\n\n* test: strengthen CI and contributor guidance",
          "timestamp": "2026-07-10T01:13:22+02:00",
          "tree_id": "6a4a450c205ffb93c1439c2faa6633652f97a911",
          "url": "https://github.com/fallow-rs/fallow/commit/ee20cbaf15378649088b951bc4ecb4c72622ea34"
        },
        "date": 1783639138794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 985,
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
          "id": "f92a06ffd7163d012d7d2fd86ab893390ff4f955",
          "message": "perf: share parsed modules across warm sessions",
          "timestamp": "2026-07-10T02:48:28+02:00",
          "tree_id": "2a50af72f2c4552e120c1abf2173880450988f36",
          "url": "https://github.com/fallow-rs/fallow/commit/f92a06ffd7163d012d7d2fd86ab893390ff4f955"
        },
        "date": 1783644575671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 985,
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
          "id": "d26a96b43b4001b9aa0368583c53ff4de248a210",
          "message": "fix(ci): lint Windows MCP lifecycle code (#1807)\n\nRepair the Windows-only MCP Clippy failure and run focused MCP Clippy in the pull request lifecycle gate.\n\nAdd a workflow policy regression test so the Windows lint command cannot drift.",
          "timestamp": "2026-07-10T05:23:10Z",
          "tree_id": "d1eeaef212a3f173a52b7f6afe093d16bc38a38f",
          "url": "https://github.com/fallow-rs/fallow/commit/d26a96b43b4001b9aa0368583c53ff4de248a210"
        },
        "date": 1783661057098,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 985,
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
          "id": "4d019eeb4785ea71412d8e7f56dc8a208d03e94f",
          "message": "feat(mcp): add list_suppressions tool for the suppression inventory\n\nThe fallow suppressions inventory was CLI-only, so agents on the MCP surface could not see what a clean verdict was hiding without shelling out. The new read-only list_suppressions tool wraps `fallow suppressions --format json` as a subprocess (the security_candidates shape, so timeout handling, telemetry tagging, and process-lifecycle hardening come from the shared run_tool path) and returns the suppression-inventory envelope verbatim, introducing no new wire contract.\n\nThe tool forwards workspace, changed_since, and repeated file scoping plus production, root, config, no_cache, threads, and the per-request allow_remote_extends config-trust opt-in; empty file entries are rejected with a structured validation error. changed-workspaces is deliberately not forwarded in v1. Includes the capability-manifest row, regenerated capabilities.json and MCP tools table, tests, and a corrected feature_flags doc line that advertised never-forwarded params.",
          "timestamp": "2026-07-10T11:19:18+02:00",
          "tree_id": "07bb50fe205935fb717528bc8bfca610d941a6b4",
          "url": "https://github.com/fallow-rs/fallow/commit/4d019eeb4785ea71412d8e7f56dc8a208d03e94f"
        },
        "date": 1783675559702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 985,
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
          "id": "36875ed79d16710af94c5d7654667404d72de828",
          "message": "fix: address audit improvement findings\n\nHarden source and fix I/O, audit base materialization, LSP failure handling, route-loader reachability, and grouped workspace diagnostics so failures cannot be mistaken for clean analysis.\n\nAdd transactional contract generation, Node 22 runtime contracts, documentation updates, and measured graph and extraction performance improvements. Include regression coverage for unreadable warm-cache sources found during final review.",
          "timestamp": "2026-07-10T14:18:12+02:00",
          "tree_id": "f3ac0e7b9051f15fabe7ae919f715e9885cec173",
          "url": "https://github.com/fallow-rs/fallow/commit/36875ed79d16710af94c5d7654667404d72de828"
        },
        "date": 1783685966636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 985,
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
          "id": "51e7e899919d4d6e04d3ab6c221d983311d8b94b",
          "message": "test(types): normalize source-read path assertion\n\nThe source-read diagnostic serializer emits forward slashes on every platform. Normalize the expected path so the regression matches the wire contract on Windows.",
          "timestamp": "2026-07-10T14:41:03+02:00",
          "tree_id": "0726139f394857f0c68262e48033be70cd1e2505",
          "url": "https://github.com/fallow-rs/fallow/commit/51e7e899919d4d6e04d3ab6c221d983311d8b94b"
        },
        "date": 1783687405348,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 985,
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
          "id": "5f77b7b5e86af87a570ca874a2531445ec58aa2f",
          "message": "fix(report): singular nouns for one-finding GitHub format headlines\n\nSmoke testing the unreleased GitHub-native formats surfaced two count==1 grammar defects: the annotations budget notice rendered \"fallow emitted 1 annotations\" and the job-summary headline rendered \"**1 issues** found\". A pull request that introduces exactly one issue is the most common CI case, so both strings now branch on the count.\n\nGolden snapshots are unchanged (their fixtures are plural); new unit and integration tests pin the singular forms.",
          "timestamp": "2026-07-11T21:08:08+02:00",
          "tree_id": "62b1f8435a829356be6bc2e28091b6e02dac4d35",
          "url": "https://github.com/fallow-rs/fallow/commit/5f77b7b5e86af87a570ca874a2531445ec58aa2f"
        },
        "date": 1783797143353,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 985,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jernej.barbaric@gmail.com",
            "name": "Jerc92",
            "username": "Jerc92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43a4faaa2fbef129c29b908a5d3eb7f5e871d580",
          "message": "fix(members): three false positives in unused-class-members (#1811)\n\n* fix(members): credit members reached through a local subclass\n\n`class Sub extends Base {}` without an `export` never becomes an export, so the\nanalyze layer cannot resolve the object in `Sub.someStatic`: its import/export\nmap holds only imports and exports, and the heritage parent-to-children map is\nbuilt from exports alone. Every member reached only through the subclass was\nreported unused. Exporting the subclass makes the identical code resolve, which\nis the tell.\n\nThe fix belongs in extract, where the data already exists. Non-exported\ntop-level classes are recorded with their superclass, so walk that `extends`\nchain to the first name that is not locally declared -- the imported or exported\nbase -- and re-emit the access against it. The existing import-to-export\nresolution then credits the base. No synthetic export keys, which would be both\nsemantically wrong for a non-export and prone to collide across files.\n\nCycle detection, not a depth cap, terminates the walk. A cap would silently\nabstain on a legitimately deep chain and leave its members falsely reported,\nwhich is the failure this rule must never make.\n\nThe pass runs after `resolve_bound_member_accesses`, because that is what\nmaterializes the class-qualified access for `const s = new Sub(); s.member`.\nRunning earlier saw only the statics spelled `Sub.member` in source and left\nevery instance member reached through a local subclass reported.\n\nA mixin superclass records no name and abstains: `class Sub extends mixin(Base)`\nmay redefine what the subclass exposes, so crediting through it would be a\nguess. That pre-existing false positive is pinned by a test rather than fixed by\naccident.\n\nOver-crediting is safe here. A subclass that shadows a base member credits the\nbase too, which is a false negative -- the direction this rule must err in, since\na false positive is what made it untrustworthy.\n\nThe regression fixture is cross-file. A same-file fixture passes for the wrong\nreason: a class whose instance escapes through a same-file factory is skipped\nwholesale by the whole-object gate, so it reports nothing either way.\n\n* fix(members): credit factory results read without a named binding\n\nCross-module factory-return propagation already credited `const s = f(); s.m`.\nIt never fired for the two shapes real composables and singletons actually use:\n\n    useApi().member                 // chained call\n    const { member } = useApi()     // destructure\n\nThe extractor recorded a factory-return candidate only for a plain binding\nidentifier, so an object pattern was dropped, and a chained call is not a\nvariable declarator at all, so nothing recorded it. Both fell through to \"no\naccess\", and every member of the returned class was reported unused -- 81% false\npositives on the codebase that prompted this.\n\nBoth shapes name a callee and a member at capture time, so record that pair\ndirectly. A same-file factory binds the class immediately; an imported callee\nemits the typed fact the analyze layer resolves through the strict, value-proven\n`exported_factory_returns` gate. Any other callee resolves to no proven factory\nexport and credits nothing, so recording every `identifier().member` is safe.\nRouting through a stand-in local instead would have made each such call a\ncandidate, and candidate resolution rescans every member access -- quadratic on a\nfile full of helper calls.\n\nOnly the first level of the result belongs to the factory's class. `f().a.b`\ncredits `a`; `b` is read off whatever type `a` has. `{ a: { b } }` credits `a`\nfor the same reason. A member-expression callee (`obj.f().a`) and a call of a\ncall (`f()().a`) resolve to no proven factory export, so crediting through them\nwould be a guess and they stay uncredited.\n\n`const { a, ...rest } = f()` and a computed key can read ANY property, so no set\nof visible keys describes what is used. Crediting just `a` would leave every\nother live member reported -- the same false positive, narrowed. The returned\nclass is marked wholly used instead, via a new `FactoryFnWholeObject` fact\nresolved through the same gate as the member facts. Reporting nothing for that\nclass is a deliberate false negative: under-reporting is safe here,\nover-reporting is what made the rule untrustworthy. The variant is appended to\n`SemanticFact`, never inserted: bitcode encodes an enum by ordinal, so moving an\nexisting variant would make an old cache decode one fact as another.\n\nFixtures are cross-file. A same-file factory is skipped wholesale by the\nwhole-object gate, because the returned instance escapes the module, so a\nsame-file fixture reports nothing and passes for the wrong reason. That is why\nthe fixture added with the previous fix for this bug went green while the\nreported bug stayed live.\n\n* fix(members): index imports and pin the namespace-base gap\n\nFollow-ups from an adversarial review of the two preceding commits.\n\n`resolve_factory_inline_accesses` scanned every import for each `f().member` it\nrecorded. A file that reads many helper results was O(accesses x imports).\nIndex the imported local names once instead.\n\nThe callee is matched by name and not by scope, so a local binding that shadows\nan imported factory is treated as that factory. It can only add credit, so the\nworst case is a member that stays unreported. Say so where it happens.\n\n`class Sub extends ns.Base {}` walks to the dotted name `ns.Base`, which the\nanalyze layer cannot resolve: its import/export map keys bare local names. The\nbase's members stay reported. That is a pre-existing gap rather than a\nregression, and it is wider than subclassing -- a direct `ns.Base.someStatic()`\nis equally uncredited on main, verified by running both binaries against the\nsame fixture. The doc comment claimed the dotted form was handled; it is not.\n\nPin it with a test, as with the mixin superclass, so a future change to\nnamespace resolution has to decide the case deliberately rather than flip it by\naccident.\n\n* refactor(members): share the factory-to-class resolution chain\n\nPure refactor from a simplification review. Behavior is unchanged: every fixture\nacross the branch produces byte-identical output, and no extraction fact changes\nmeaning, so `CACHE_VERSION` stays where it is.\n\n`propagate_factory_fn_accesses` and the new whole-object pass each walked the\ncallee -> re-export origins -> `exported_factory_returns` -> class-with-members\nchain themselves, and `credit_factory_return_class_member` re-implemented the\ninner half of it a third time. Each link of that chain is an over-credit gate,\nso three copies are three places for the gates to drift apart. They now share\n`factory_return_classes_for_callee` and `factory_return_class_origins`.\n`credit_factory_return_class_member` keeps its own name because\n`typed_property.rs` calls it too.\n\n`record_factory_return_candidate` matched a bare `identifier(...)` callee by\nhand next to a helper doing exactly that. It now calls the helper, renamed\n`bare_call_callee_name` since it recognizes any bare call, not only a factory.\n\n`factory_inline_accesses` became `factory_unnamed_result_accesses`: it also\nholds destructured keys, so \"inline\" claimed less than the code does.\n\nTwo comments were left describing a synthetic-local mechanism that no longer\nexists, and one doc claimed a `None` return from a function returning a `Vec`.\n\n`extract_destructured_names` and `destructured_factory_keys` look like the same\nfunction and are not: the former drops a computed key and keeps the rest, the\nlatter makes a single unnameable key opaque the whole pattern, because a caller\ncrediting class members off it must abstain rather than credit what it can see.\nCollapsing them would have silently dropped destructured names from taint-source\ntracking and two other callers. Both now say so.",
          "timestamp": "2026-07-12T11:14:23+02:00",
          "tree_id": "fe20de1959bf3c022864853a6ff1b1e9c655dc72",
          "url": "https://github.com/fallow-rs/fallow/commit/43a4faaa2fbef129c29b908a5d3eb7f5e871d580"
        },
        "date": 1783848004173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 985,
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
          "id": "2723871c33b6fb591227b2b09bf3a99b3af47da1",
          "message": "fix(extract): credit member access through private class fields (#1822)\n\nA member reached through a `#`-private DI field (`this.#dep.m()`) on a\nclass in another module was reported as unused-class-member because the\nprivate-field receiver recorded no member access and no binding target,\nunlike the equivalent public `this.dep.m()` receiver.\n\nAdd the three missing `#`-private arms so a private field produces the\nsame binding-key + member-access pair a public field does:\n- static_member_object_name yields the `this.#dep` receiver key,\n- visit_property_definition derives the `#dep` member key for the typed,\n  inline-new, and inject binding arms (the hardcoded-secret sink stays\n  gated on static_name only),\n- visit_assignment_expression handles the PrivateFieldExpression target\n  for `this.#dep = new Dep()` / `this.#dep = dep`.\n\nBump CACHE_VERSION: warm caches lack the private-field member accesses.\n\nFixes #1821",
          "timestamp": "2026-07-12T12:56:56+02:00",
          "tree_id": "95f593b914baecaae299a1a5493a959fcee97396",
          "url": "https://github.com/fallow-rs/fallow/commit/2723871c33b6fb591227b2b09bf3a99b3af47da1"
        },
        "date": 1783853904515,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 985,
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
          "id": "acc994aa8ec24673399d016db7dede091338c8e7",
          "message": "fix(config): ship a local schema path instead of the dead fallow.dev fallback (#1826)\n\nThe generated config's $schema hardcoded the remote raw.githubusercontent\nURL, which VS Code treats as an untrusted remote schema location and\ndeclines to load without a manual trust grant. The schema's own doc comment\nseparately recommended https://fallow.dev/schema.json, a domain that has\nnever resolved in DNS.\n\nSingle canonical story now: when a local, version-aligned\nnode_modules/fallow/schema.json is present (any npm install), fallow init,\nfallow recommend, and fallow migrate point $schema at it, offline and with\nno editor trust prompt. Non-npm installs (cargo, homebrew, a bare binary)\nkeep falling back to the remote GitHub URL. Detection is a filesystem\nexistence check on ProjectInfo.has_local_schema, threaded through\nproposed_config_value (shared by init and recommend) and generate_jsonc\n(migrate).\n\nFixes #1794",
          "timestamp": "2026-07-12T13:03:58+02:00",
          "tree_id": "cb4ca4445e49d3b1876390a2a8c5893aaed9d5ba",
          "url": "https://github.com/fallow-rs/fallow/commit/acc994aa8ec24673399d016db7dede091338c8e7"
        },
        "date": 1783855200737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 986,
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
          "id": "d87215889a57d05c7b52a4be32c902bd3f731e68",
          "message": "test(cli): isolate orphan-sweep fixtures from the shared temp dir (#1829)\n\nThe #1815 orphan sweep scans std::env::temp_dir() globally for dead-pid\nworktree directories, so a test fixture fabricated there with a fake dead\nPID is legitimate prey for any concurrent sweep (a parallel test or a\nspawned fallow binary). Under full-suite parallelism this raced the\nfixture's own assertions: the fixture dir vanished between git worktree\nadd and the registration precondition check.\n\nMake the scanned temp root injectable (sweep_orphan_audit_worktrees_in)\nand point the three orphan-sweep tests at their own TempDir. Production\nbehavior is unchanged: the public wrapper still scans the real temp dir.",
          "timestamp": "2026-07-12T13:35:32+02:00",
          "tree_id": "29f35de772eeb87ef746e409499e9388e45986ef",
          "url": "https://github.com/fallow-rs/fallow/commit/d87215889a57d05c7b52a4be32c902bd3f731e68"
        },
        "date": 1783856255088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 986,
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
          "id": "4cb65794e5631bdfd8e6a4aec016d45b560a0d68",
          "message": "test(cli): make workflow-event assertions immune to parallel accumulator writes (#1830)\n\nworkflow_event_buckets_exit_codes asserted config_shape through\nbuild_workflow_event, which reads process-global accumulators. The\nreset-before-read guard cannot close the race against a PARALLEL test\ndriving a real command path (load_config_for_analysis ->\nnote_config_shape) mid-test; the Coverage CI run on main caught exactly\nthat with CustomConfig leaking over the expected CustomRules.\n\nSplit build_workflow_event into a pure build_workflow_event_with taking\na RunAccumulatorSnapshot; production snapshots the globals once per\nevent (behavior unchanged), the test passes the UNSET snapshot and is\ndeterministic under any parallelism. The reset helper and the two\none-line derivation wrappers are folded away.",
          "timestamp": "2026-07-12T13:40:45+02:00",
          "tree_id": "5aac6ac3c0556d25f58e2457b3992d1256de6659",
          "url": "https://github.com/fallow-rs/fallow/commit/4cb65794e5631bdfd8e6a4aec016d45b560a0d68"
        },
        "date": 1783856658380,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 986,
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
          "id": "e893500daea980960952ccb948c24c78f9c4b59f",
          "message": "docs(cli): drop intra-doc link to the cfg(test)-only UNSET snapshot (#1831)\n\nThe Documentation CI job documents non-test code, where\nRunAccumulatorSnapshot::UNSET does not exist, so the intra-doc link from\n#1830 was unresolved under -D warnings. Plain code span instead.",
          "timestamp": "2026-07-12T14:10:25+02:00",
          "tree_id": "cc027cbc180653c4f03b987f0fbc77d3424f58b7",
          "url": "https://github.com/fallow-rs/fallow/commit/e893500daea980960952ccb948c24c78f9c4b59f"
        },
        "date": 1783858490795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 986,
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
          "id": "8cd68866fadd5c274c7bf261a8fb7c2436622f35",
          "message": "style(cli): wrap is_file_level_only matches! arm over rustfmt width (#1832)\n\nFollow-up to #1820: the added \"unused-file\" token pushed the matches!\nline over the rustfmt width; the contributor's fork disallows maintainer\nedits, so the wrap lands as this immediate follow-up.",
          "timestamp": "2026-07-12T19:45:18+02:00",
          "tree_id": "c77add0a1d66e0d8cac47deefa90ba807b6f57d1",
          "url": "https://github.com/fallow-rs/fallow/commit/8cd68866fadd5c274c7bf261a8fb7c2436622f35"
        },
        "date": 1783878402262,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 986,
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
          "id": "2c21d5498e9c322669842d725da43423fdd092fc",
          "message": "fix(extract): scope this.* binding keys per enclosing class (#1833)\n\n`binding_target_names` is module-flat, so two classes in one module that\ndeclare a same-named field collided on the `this.<field>` key via\nlast-write-wins: `constructor(private dep: DepA)` in one class and\n`readonly dep = new DepB()` in another both wrote `this.dep`, so every\n`this.dep.*` access in the module resolved against the surviving target\nonly, and the losing class's dep members were falsely reported as\nunused-class-member cross-module. This is the collision behind the issue's\nprivParam row (order-dependent: reversing the class declarations flipped\nwhich class's members were flagged).\n\nQualify `this.`-rooted binding keys and receiver spellings with an internal\nper-class scope id during the walk (`this@<id>.<field>`), pushed and popped\nalongside the class-super / class-context stacks in `visit_class`. Both the\ninsert side and the access / whole-object / iteration-receiver read sides\nare qualified consistently, so the longest-prefix resolution and the typed\nproperty-hop expansion keep working within one class scope. The qualifier\nis an extraction-only disambiguator: `strip_this_scope_qualifiers` runs last\nin `finalize_resolution_phase`, after every resolution pass, and rewrites\nevery `this@<id>.` spelling back to `this.` across `member_accesses` and\n`whole_object_uses` before any spelling reaches `ModuleInfo`, so no\npersisted spelling and no downstream consumer (core self-access `== \"this\"`,\nheritage `!= \"this\"`, unused-component-output `this.<name>`, SFC template\n`starts_with(\"this.\")`) ever sees it. Bare `this` (the per-file self-access\nkey) and module-level `this` are never qualified.\n\nCorrecting last-write-wins removes accidental credit, so a member that\nexists on both colliding classes but is called on only one can surface as a\nnew true-positive finding. Validated on ten real-world projects: one such\nfinding (`NextNodeServer.revalidate` in next.js, where a `this.server`\ngetter on an unrelated class had been borrowing a sibling class's\n`server: NextNodeServer` field binding) and zero non-member drift.\n\nCACHE_VERSION 233 -> 234 (the emitted member_accesses change for modules\nwith same-named fields across classes; warm 233 caches keep the collision).\n\nFixes #1821",
          "timestamp": "2026-07-12T21:49:10+02:00",
          "tree_id": "bc6ab1b2c0eb6cca94da84fec8c310d9e3c18818",
          "url": "https://github.com/fallow-rs/fallow/commit/2c21d5498e9c322669842d725da43423fdd092fc"
        },
        "date": 1783885826639,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 986,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jernej.barbaric@gmail.com",
            "name": "Jerc92",
            "username": "Jerc92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "976a868175368846efa5c43145b367ca9224c76d",
          "message": "fix(report)!: address CI files from the repository root (#1808)\n\n* fix(report)!: address CI files from the repository root\n\nWhen --root pointed at a package inside a larger repo, fallow's CI output was\nunusable in two ways that shared one cause: findings were keyed and emitted\nrelative to the analysis root, while CI platforms and git address files from\nthe repository root.\n\nReport paths. codeclimate, review-github, and review-gitlab emitted\n--root-relative paths, so GitLab's Code Quality widget matched nothing and\nevery inline review discussion was rejected for naming a file absent from the\nMR diff. github-annotations already rebased onto the git toplevel; the others\nnow do too, via the same PathRebase. The review and sticky-summary formats\nderive their paths from CodeClimate issues, so one seam covers them all.\n--annotations-path-prefix becomes --report-path-prefix (old name kept as an\nalias) and governs every CI format. Both names are now registered in\nglobal_value_options, fixing a latent misparse of the following subcommand.\nThe generated capability manifest and CLI reference are regenerated for the\nrename.\n\nThe prefix is presentation only. The review and sticky-summary filters used to\nkey issues by their rendered path, so a custom or empty prefix silently stopped\nmatching the diff and dropped every inline comment. They now key by the\nanalysis-root-relative path plus the diff's own base.\n\nDiff filtering. --diff-file compared diff keys against finding paths already\nstripped to --root, so below the toplevel nothing matched: every\nsource-anchored finding was dropped and the run reported a clean diff, exit 0,\nsilently. A unified diff does not declare its own base, and both conventions\noccur in practice -- `git diff` writes toplevel-relative paths, `git diff\n--relative` writes root-relative ones. The base is therefore resolved from the\ndiff's paths themselves: whichever candidate directory they actually name\nfiles under wins. The chosen base rides on DiffIndex, the type that defines\nthe namespace, so every filter call site picks it up and callers that build\ntheir own index keep today's behavior.\n\nExistence cannot always place a diff. A path naming a real file under both\ncandidates is ambiguous, and a path naming one under neither is foreign. Both\nare reported. Silence here would rebuild the very failure this change removes:\na filter that matches nothing looks exactly like a clean diff.\n\nWhen --root is the repository toplevel the two candidates coincide and output\nis byte-identical, which the untouched snapshot suite pins.\n\nSARIF is deliberately excluded: four builders and its own URI encoding make it\na separate change, so it is left out of the flag's allowlist rather than\nhalf-rebased.\n\nBREAKING CHANGE: codeclimate, review-github, and review-gitlab now emit\nrepository-root-relative paths when --root is a subdirectory. Consumers that\nprepend the offset themselves should drop that step or pass\n--report-path-prefix '' to restore the previous output.\n\n* fix(report): filter parsed diffs with no analyzable files to zero scope\n\nA diff that parses but names no analyzable head-side file (empty,\ndeletion-only, or binary-only) is a real empty scope, not an unplaceable\nbase. init_shared_diff conflated the two: choose_diff_base returned None\nfor both, so such diffs were discarded and the run reported at full\nscope, flipping a change that touches nothing analyzable from clean to\nnoisy (including when --root equals the git toplevel).\n\nSplit the two: touched_files being empty keeps the empty index so every\nsource-anchored finding filters out; only a diff whose paths resolve\nnowhere (foreign) or in two places at once (ambiguous) still falls open.\n\nMake the discard decision authoritative for the FALLOW_DIFF_FILE path\ntoo: filter_issues_from_env now distinguishes a resolved cache, a\ndeliberately-discarded cache (full scope), and an unset cache (embedder\nfallback), so the env route no longer re-reads and re-filters against a\ndiff base detection already rejected.\n\nAlign the ambiguous- and foreign-base warnings with the fail-open\nbehavior: they report at full scope, not a clean report.\n\n* perf(report): resolve CI path prefix only for formats that use it\n\ninit_report_prefix shells out to git rev-parse --show-toplevel on every\nrun, but only codeclimate and review-{github,gitlab} read the resolved\nglobal (report_prefix()); the github-native formats compute their rebase\nfrom root directly. Gate the probe on those three formats so the other\nformats skip the subprocess.\n\n---------\n\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-07-12T23:52:34+02:00",
          "tree_id": "cf4aed763f9b85800c73ae295cb2a8c621b0cd00",
          "url": "https://github.com/fallow-rs/fallow/commit/976a868175368846efa5c43145b367ca9224c76d"
        },
        "date": 1783893226203,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 987,
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
          "id": "ab61b4073f08af78335aef83d5fb997836c57c85",
          "message": "fix(cli): emit parseable suppress tokens in every human footer section (#1835)\n\nsection_suppress_rule in the human report emitted hardcoded token strings that\nfallow_types::suppress::parse_suppression_target did not recognize for eight\nsections (unused-exports, unused-types, unused-dependencies, unused-enum-members,\nunused-class-members, unresolved-imports, unlisted-dependencies, duplicate-exports):\nthe strings existed only as config keys or MCP names, never as IssueKind codes or\naliases. Following the printed hint produced a comment that suppressed nothing and\nthen surfaced a stale-suppression finding.\n\nDerive each section's token from the issue registry instead. A section-title to\nIssueKind map feeds issue_kind_to_kebab (the kind's suppress_token, falling back\nto its code), so the emitted token always parses back to the same kind.\nis_file_level_only is likewise derived from the registry's suppress_file_level\nflag, fixing two drifts: duplicate-export (file-level-only per its detector) now\nprints the file-level form, and circular-dependency / boundary-violation (which\nhonor next-line suppression) now print the next-line form. Dependency sections\nwhose findings live in package.json emit no hint rather than a token pointing at\nan impossible inline comment.\n\nA roundtrip guard test asserts every token section_suppress_rule can emit parses\nvia parse_suppression_target and uses the file-level form exactly when the\nregistry marks the kind file-level-only, so this surface stays locked down.\n\nFixes #1828",
          "timestamp": "2026-07-13T10:51:20+02:00",
          "tree_id": "5d74c6a0f39afac5e1717b56035bbf5f97dc1cea",
          "url": "https://github.com/fallow-rs/fallow/commit/ab61b4073f08af78335aef83d5fb997836c57c85"
        },
        "date": 1783932761623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 987,
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
          "id": "0f2de24d23679cca1568b85aa8028d9f4ea6ed38",
          "message": "chore: release v3.4.0",
          "timestamp": "2026-07-13T11:35:29+02:00",
          "tree_id": "9e849ef300cd8fa21173a0444904b2d36b1cc74f",
          "url": "https://github.com/fallow-rs/fallow/commit/0f2de24d23679cca1568b85aa8028d9f4ea6ed38"
        },
        "date": 1783935469131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 987,
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
          "id": "83762f1dc7852f6910e70e3c3a1ca0eb179ff98e",
          "message": "chore: release v3.4.1\n\nv3.4.0's tag never published: the first Windows run of the relocated\ncross-platform checks failed the staged subgenerator byte-comparison\nbecause core.autocrlf converted the committed contract surfaces to CRLF\nwhile generators write LF. Contract surfaces are now pinned to LF in\n.gitattributes; the 3.4.0 changelog section ships unchanged as 3.4.1.",
          "timestamp": "2026-07-13T12:42:02+02:00",
          "tree_id": "04359d9b49accbf637cf688407585c1a31ba21df",
          "url": "https://github.com/fallow-rs/fallow/commit/83762f1dc7852f6910e70e3c3a1ca0eb179ff98e"
        },
        "date": 1783939662543,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 987,
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
          "id": "4789329b984be2a65ab7d3878825738f812d2a49",
          "message": "chore: release v3.4.2\n\nv3.4.0 and v3.4.1 never published: the relocated Windows correctness\njob failed both byte-comparison directions of the CRLF class (committed\nside CRLF in v3.4.0, generator-input side CRLF in v3.4.1). The\nrepo-wide LF normalization commit precedes this release; the 3.4.0\nchangelog content ships unchanged as 3.4.2.",
          "timestamp": "2026-07-13T13:34:25+02:00",
          "tree_id": "b1e75a7e2a4911de01eadf77439db666fed1301e",
          "url": "https://github.com/fallow-rs/fallow/commit/4789329b984be2a65ab7d3878825738f812d2a49"
        },
        "date": 1783943190359,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 987,
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
          "id": "29770c49b2ca0ddf978fa502d8441620e7597981",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.4.2",
          "timestamp": "2026-07-13T15:01:41+02:00",
          "tree_id": "7ac98fc1ec476d0b4bc8dd67b1a59b7920fa3747",
          "url": "https://github.com/fallow-rs/fallow/commit/29770c49b2ca0ddf978fa502d8441620e7597981"
        },
        "date": 1783948043137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 987,
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
          "id": "0b17f59b8052f78b9ba7a9a66b9c9f48c24faaa5",
          "message": "feat: harden review and reliability workflows (#1840)\n\nReviewed and validated across the CLI, editor, Electron, and real-project surfaces.",
          "timestamp": "2026-07-13T18:01:34+02:00",
          "tree_id": "d9e90111eb2e84c40f4dbb45b85adf6169358478",
          "url": "https://github.com/fallow-rs/fallow/commit/0b17f59b8052f78b9ba7a9a66b9c9f48c24faaa5"
        },
        "date": 1783958741036,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 31,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.01,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 397,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 988,
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
          "id": "a876f51642cf3c317d046c7696d2e1f69f770c18",
          "message": "feat(npm): ship one multicall binary per platform package (#1841)\n\n* refactor(lsp,mcp): extract reusable stdio server entry points\n\nMove the fallow-lsp and fallow-mcp binary bodies into library crates\nexposing run_stdio_server(), leaving each main.rs as a thin delegator.\nEach entry builds its own multi-threaded tokio runtime (replacing\ntokio::main) so a synchronous caller can drive it, and preserves the\nversion-probe, stdio wiring, and exit semantics of the standalone\nbinaries unchanged. This makes both server entries callable from a\nfuture multicall fallow binary without duplicating the runtime setup.\n\n* refactor(cli): expose run() as the library entry point\n\nPromote the clap command tree and dispatch from the fallow binary's\nmain.rs into the fallow-cli library as pub fn run(), leaving main.rs a\nthin delegator. This lets the multicall fallow-multicall binary drive\nthe full CLI without forking the command surface. The single coverage\nunit-test snapshot compiled into the old bin moves to the fallow_cli__\ninsta prefix (payload unchanged) now that its module lives in the lib.\n\n* feat(multicall): add fallow-multicall single-binary entry\n\nNew publish=false crate producing the fallow-multicall binary, which the\nnpm platform packages and the VS Code extension ship (renamed to fallow)\nso one binary answers as the CLI, the LSP server, and the MCP server.\nargv[1] lsp-server / mcp-server route to the bundled server entries;\nevery other invocation delegates verbatim to fallow_cli::run. Parity\ntests pin byte-identical CLI behavior against the standalone fallow bin\nand the exact fallow X.Y.Z version shape; dispatch tests prove each\nserver subcommand routes correctly and the LSP server completes an\ninitialize handshake when started as a multicall subcommand. Keeping the\ncrate publish=false leaves crates.io publishing and cargo install\nfallow-cli untouched.\n\n* feat(npm): ship one multicall binary per platform package\n\nPlatform packages (@fallow-cli/<platform>) now ship a single `fallow`\nbinary built from fallow-multicall instead of three fat binaries that\neach statically link the analysis engine. The bundled `fallow-lsp` /\n`fallow-mcp` npm bins become launcher shims that spawn `fallow\nlsp-server` / `fallow mcp-server` through the existing run-binary\nmachinery, preserving stdio, signal, and exit-code forwarding.\n\nrelease.yml builds fallow-multicall per target (cargo-zigbuild on\naarch64-musl since it links rquickjs through the MCP lib), signs it, and\nstages it as the platform payload; the standalone fallow/fallow-lsp/\nfallow-mcp GitHub release assets and the crates.io publish list are\nunchanged. The verify machinery (lazy-verify + verify-binary) and each\nplatform package.json `files` list now track the single shipped binary;\nthe GitHub Action installer verifies the same package. Tests updated to\nthe single-binary shape (npm scripts, action install verify,\nverify-pack-contents). actionlint clean; zizmor adds only low-confidence\ntemplate-injection findings on trusted matrix vars (no new medium/high).\n\n* feat(vscode): resolve the multicall fallow binary for the LSP\n\nWhen the workspace platform package ships only the bundled `fallow`\nbinary, resolve the LSP to `fallow lsp-server` instead of a standalone\nfallow-lsp. binary-utils gains findLocalLspBinary, which returns a\n{command, args} pair: a real fallow-lsp (args []) when present, else the\nmulticall fallow (args [\"lsp-server\"]), else the Unix .bin launcher\nshim. client.ts threads that shape through resolveBinaryPath and the LSP\nserverOptions. Configured paths, PATH lookups, and the GitHub\nauto-download still resolve real fallow-lsp binaries, so a new npm\npackage with an older extension degrades to the auto-download path and\nold and new installs coexist.\n\n* ci: track all shipped binary sizes, changelog the multicall packaging\n\nThe Binary Size workflow tracked only the fallow CLI, so the ~5x\nfallow-mcp growth in v2.104.0 went unseen. It now builds and records\nfallow, fallow-lsp, fallow-mcp, and fallow-multicall as separate\ncustomSmallerIsBetter series, so a per-binary jump trips the alert. Adds\nan Unreleased changelog entry for the single-binary platform packaging,\nthe roughly-halved install size, and the unchanged-consumer compat\nstory.\n\n* fix(cli): reconcile source references after the run() extraction\n\nThe fallow-cli command tree moving from main.rs to lib.rs had three\nfollow-on effects: restore the error module to pub (a public report doc\nlink resolves to it, matching the pre-move lib surface); repoint the MCP\ntool-description default-drift gate at cli/src/lib.rs where the clap\ndefaults now live; and add the new crates/multicall crate to the\nCONTRIBUTING project map that the architecture-boundaries test enforces.",
          "timestamp": "2026-07-13T18:34:00+02:00",
          "tree_id": "b5257724f5f20c1c068370225686a939a81f11b5",
          "url": "https://github.com/fallow-rs/fallow/commit/a876f51642cf3c317d046c7696d2e1f69f770c18"
        },
        "date": 1783960771952,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
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
          "id": "bc4e0fe190675feb5db6966e7376284c9ef1c0a3",
          "message": "fix(cli): box the large MapOutcome::Ready variant (Windows clippy) (#1844)\n\nclippy's large_enum_variant fires on Windows (the Ready payload is 256\nbytes there, over the 200-byte threshold; under it on macOS/Linux, so\nit never showed in PR CI). The Windows clippy step only runs in the\nrelease-validation Windows job, so this was latent on main and would\nhave failed the next release. Boxing the variant drops it to a pointer\non every platform.",
          "timestamp": "2026-07-13T20:26:19+02:00",
          "tree_id": "8f9f5c709118b7f5e2438a15abfb4154ebdf0954",
          "url": "https://github.com/fallow-rs/fallow/commit/bc4e0fe190675feb5db6966e7376284c9ef1c0a3"
        },
        "date": 1783967314346,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
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
          "id": "91565369edcad66c4ec5bddb049be22d2bc31163",
          "message": "fix(output): conform feature-flags _meta to the published schema\n\n`fallow flags --format json` without --explain injects a _meta.telemetry block, but the schema required the explain-only feature_flags field and did not model telemetry, so the default-path document failed schema validation. The MCP feature_flags tool and Code Mode emit the same shape. FeatureFlagsMeta now models both fields optional, mirroring Meta/CombinedMeta. Wire bytes unchanged (no schema_version bump); schema + TS contracts regenerated; regression test added.\n\nFound by the plan-028 agent-surface instance-validation probe.",
          "timestamp": "2026-07-13T20:35:28+02:00",
          "tree_id": "4c1b03947381ab82b292b70c8306f409e5028068",
          "url": "https://github.com/fallow-rs/fallow/commit/91565369edcad66c4ec5bddb049be22d2bc31163"
        },
        "date": 1783967848613,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
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
          "id": "06b8ccb911d5e364c158a92c8d6d29482d651d18",
          "message": "test(cli): per-IssueKind drift guard for the GitHub-native formats\n\nAdds a Rust guard iterating the counted dead-code ISSUE_RESULT_META rows and asserting each kind renders in both github-summary and github-annotations, mirroring the shell drift guard so the native GitHub surfaces cannot silently drop a counted IssueKind. Includes a fixture-vs-registry trip-wire and a count pin. Advisor plan 027 Phase A; hardens the live native path and prerequisites the eventual jq retirement (Phase B deferred).",
          "timestamp": "2026-07-13T20:39:56+02:00",
          "tree_id": "4b9bd3b5f64b1fee4669c5e5170af9b0c781b54c",
          "url": "https://github.com/fallow-rs/fallow/commit/06b8ccb911d5e364c158a92c8d6d29482d651d18"
        },
        "date": 1783968377112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
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
          "id": "b6dd3032cc311d1a7de0ca97a517f8b30c1442ad",
          "message": "fix(cli): expect unsafe_code on the Windows source-map canonicalizer (#1847)\n\nSecond latent Windows-only clippy failure in the same file: the\ncfg(windows) securely_open_source_map makes three Win32 FFI calls\n(GetFinalPathNameByHandleW, CompareStringOrdinal) whose unsafe blocks\ntrip -D unsafe_code, which only runs on the release Windows clippy leg.\nAnnotated at the function level with a reason, matching the existing\nWin32 FFI pattern in crates/mcp process_tree.rs.",
          "timestamp": "2026-07-13T20:51:06+02:00",
          "tree_id": "6af59bb236cf751c0605b4495cfb028ddf51e9a0",
          "url": "https://github.com/fallow-rs/fallow/commit/b6dd3032cc311d1a7de0ca97a517f8b30c1442ad"
        },
        "date": 1783969113635,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
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
          "id": "f0f242566fed03cee095aed08a7966cd8155d4ee",
          "message": "test: agent-surface contract tests (instance validation + cross-surface parity)\n\nHeld item F5. Adds instance-level conformance (jsonschema dev-dep) validating real api-serializer and real-binary JSON output per-kind against docs/output-schema.json, and a CAPABILITY_PARITY table drift-tested from all three agent surfaces (31 MCP tools, 7 napi exports, 17 api runners) with required omission-intent notes. The Step 0 probe found the feature-flags _meta schema bug fixed in #1845. Recorded follow-ups: un-enveloped trace serializers, unmodeled error envelope, possibly-orphaned SymbolChainTrace `trace` kind.",
          "timestamp": "2026-07-13T21:19:52+02:00",
          "tree_id": "ec203f4bc72b96184792d99897b5b4c0542ec970",
          "url": "https://github.com/fallow-rs/fallow/commit/f0f242566fed03cee095aed08a7966cd8155d4ee"
        },
        "date": 1783970554878,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
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
          "id": "98c028c8b53da9d8de9cf27fe431bf089920ec91",
          "message": "fix(cli): label config edit failures accurately\n\nDistinguish configuration read failures from errors while preparing ignoreExports edits. Add behavior-level regression coverage for unreadable and malformed configs.",
          "timestamp": "2026-07-13T19:26:36Z",
          "tree_id": "a0f2feede7936c3de78e94319a0372ba5183f0ac",
          "url": "https://github.com/fallow-rs/fallow/commit/98c028c8b53da9d8de9cf27fe431bf089920ec91"
        },
        "date": 1783970878087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
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
          "id": "2e7c2abfa177f0a31320532eb50cb5ee880aaab2",
          "message": "feat(output): model the --format json error envelope in the published schema\n\nCloses the plan-028 (F5) contract follow-ups. The structured --format json error document is now a typed ErrorOutput document-root branch in docs/output-schema.json (discriminated by error:true, no kind), exported from fallow/types; emit_error serializes the typed struct byte-identically (no wire change). The CLI `fallow trace` kind:\"trace\" surface is confirmed live and validated end-to-end; the api programmatic trace serializers stay deliberately un-enveloped (guard doc updated). Adds CLI conformance coverage for the error envelope and the trace kind.",
          "timestamp": "2026-07-13T21:45:47+02:00",
          "tree_id": "b6461c6447abf7fe5ab6325ff3c64eeb3361364c",
          "url": "https://github.com/fallow-rs/fallow/commit/2e7c2abfa177f0a31320532eb50cb5ee880aaab2"
        },
        "date": 1783972332768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
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
          "id": "26d268c16940da3423a558fed32f57b1f02ab08e",
          "message": "feat(report): render the fix job summary from a saved envelope via report --from\n\nAdds EnvelopeKind::Fix so `fallow report --from <fix-results.json> --format github-summary` renders the auto-fix job summary natively (advisor plan 027 fix-kind follow-up). No wire change: the fix envelope stays kind-less and is detected by field presence (fixes array + numeric total_fixed); the renderer reuses the existing render_fix_summary (a 1:1 port of summary-fix.jq), so output is byte-identical to the direct run. github-annotations for fix emits nothing, matching the action. Verified: 31 github-format tests, neuter-checked, clippy/fmt clean, empty + non-empty smoke parity.",
          "timestamp": "2026-07-13T23:14:14+02:00",
          "tree_id": "72d9450930da3e83dca19f32c46097ee1697721d",
          "url": "https://github.com/fallow-rs/fallow/commit/26d268c16940da3423a558fed32f57b1f02ab08e"
        },
        "date": 1783977326042,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1104,
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
          "id": "c68954e6de9bee9d9895cf11b4e086e2f987023d",
          "message": "fix(graph): bound star re-export propagation work (#1855)\n\nReuse the named-import origin index across star re-export propagation and batch reference deduplication per export.\n\nFixes #1843.",
          "timestamp": "2026-07-14T00:18:41+02:00",
          "tree_id": "8097a0e09139f95f49a944f049c4397da3e44115",
          "url": "https://github.com/fallow-rs/fallow/commit/c68954e6de9bee9d9895cf11b4e086e2f987023d"
        },
        "date": 1783981177468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "3d8d11622bc1529345e167025ec7eef34ebf0300",
          "message": "fix(report): singular noun for a single fix in the github-summary headline\n\nThe --format github-summary auto-fix headline read 'would apply 1 fixes' for a single fix; it now reads '1 fix', branching on the count. Shared by the live fallow fix and report --from paths (both call render_fix_summary). Adds a singular-case test; plural snapshot unchanged.",
          "timestamp": "2026-07-14T06:37:44+02:00",
          "tree_id": "b787e737c42c695cef7eb294e5d8f0485fa585a0",
          "url": "https://github.com/fallow-rs/fallow/commit/3d8d11622bc1529345e167025ec7eef34ebf0300"
        },
        "date": 1784003988018,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "5b06369ef95a02f68414220b02198da409f45d3d",
          "message": "chore: release v3.5.0",
          "timestamp": "2026-07-14T07:38:53+02:00",
          "tree_id": "68ca7aab37aede7785c0bc19de300a692045c4ce",
          "url": "https://github.com/fallow-rs/fallow/commit/5b06369ef95a02f68414220b02198da409f45d3d"
        },
        "date": 1784007629229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "bc7cd251ba3f813b7d7a35712fa140baaf058647",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.5.0",
          "timestamp": "2026-07-14T08:58:48+02:00",
          "tree_id": "daae30760de81297d79fa7067241c61b7a76d9b6",
          "url": "https://github.com/fallow-rs/fallow/commit/bc7cd251ba3f813b7d7a35712fa140baaf058647"
        },
        "date": 1784012666160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "c7936189eb0040a97190baafb7522d9a9e392ded",
          "message": "fix: harden analysis boundaries and verification (#1860)\n\nPreserve Git path identity across changed-file and churn flows, redact and canonicalize remote config URLs, and clean completed MCP process trees on every return path.\n\nBound extraction-cache eviction work, align Action and generated-contract verification with current ownership, and add focused Windows PR coverage for platform-specific paths and cleanup.",
          "timestamp": "2026-07-14T11:41:35+02:00",
          "tree_id": "5056d2b5d840cfb50d24214c048864db8db69dbc",
          "url": "https://github.com/fallow-rs/fallow/commit/c7936189eb0040a97190baafb7522d9a9e392ded"
        },
        "date": 1784022168578,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "f15d741df3d05f922d721a2a30d110acaa1edeb3",
          "message": "fix(members): credit class members through object-literal factory returns (#1862)\n\n`unused-class-members` no longer false-flags a class method reached through a factory that returns an object literal whose property values are class instances (`export function createUi() { const factory = new InvokerFactory(); return { orders: factory.ordersPage } }`), consumed as `const ui = createUi(); ui.orders.member()`. This is the general root cause behind the Playwright page-object-factory pattern; it is not Playwright-specific.\n\nEvery property-value shape resolves: a direct `new Class()`, a local `const` alias, and a member read of a separately-constructed instance (field or getter). Nested literals, the assigned-then-returned form, and same-file consumption are covered, cross-module and same-file.\n\nAdditive, false-negative-only, over-credit-safe: a new `function_body_returns_object_shape` classifier captures the returned literal's shape; a finalize resolver reuses the proven #1785/#1788 `resolve_bound_object_name` + `expand_typed_property_compound` helpers; the shape persists on a new `ModuleInfo.exported_factory_return_object_shapes` field; a new `FactoryReturnObjectPropertyAccess` fact and `propagate_factory_return_object_accesses` analyze pass join them, gated by the existing `export_is_class_with_members` guard. CACHE_VERSION 234 to 235. The assigned-then-returned trace is restricted to `const` so a reassigned mutable binding cannot record a stale shape.\n\nOut of scope (documented follow-ups): a factory class in a different file than the factory function, a property value that is itself a factory call, and an unbound consumer call-chain.\n\nThanks @committedpazz for the precise bisection.\n\nFixes #1858.",
          "timestamp": "2026-07-14T14:29:07+02:00",
          "tree_id": "b61d4bd682e53c1bc12ab73fe14719ce031fbcc9",
          "url": "https://github.com/fallow-rs/fallow/commit/f15d741df3d05f922d721a2a30d110acaa1edeb3"
        },
        "date": 1784032291263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "9314f204e4aac4c803bf725056fe502effe5d2e5",
          "message": "fix: harden analysis correctness and verification\n\nCorrect star re-export default semantics, store license tokens through private atomic files, and clean completed MCP process trees. Preserve exact changed-file paths across the GitHub Action boundary.\n\nExercise packaged launchers and repository scripts in CI, refresh security and ownership guidance, and add benchmark-backed indexes for named re-export stubs and workspace bucketing. The higher-risk re-export fixpoint rewrite remains out of scope because current measurements do not justify it.",
          "timestamp": "2026-07-14T14:38:26+02:00",
          "tree_id": "0682a832ceb6207fbdb281a5c023ae8f4abfdd80",
          "url": "https://github.com/fallow-rs/fallow/commit/9314f204e4aac4c803bf725056fe502effe5d2e5"
        },
        "date": 1784032922010,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "a3f68d3c81c9304ee105c1896ab63da1120d0a17",
          "message": "fix(members): credit interface-typed property dispatch through implementers (#1863)\n\nunused-class-members false-flagged a method reached through a property whose declared type is an interface, on a class that implements that interface (ports-and-adapters / hexagonal DI): useIt(deps: Deps) { deps.greeter.greet() } where Deps.greeter: GreeterPort and class GreeterAdapter implements GreeterPort. The interface dispatch already worked through a direct parameter or variable; this closes the remaining gap where the receiver is reached via an interface property hop.\n\nThe #1785 typed-property hop resolves the terminal to interface GreeterPort, but the terminal credit only handled classes (export_is_class_with_members gates out interfaces), so it never reached the interface-to-implementer propagation that already covers the direct-parameter case. propagate_typed_property_accesses now routes an interface terminal to its canonical export key so the later propagate_interface_member_accesses pass carries the member to every implementing class.\n\nAdditive and false-negative-only. Analyze-only, so no CACHE_VERSION bump. Third in the #1785 / #1788 / #1858 cluster. Thanks @lukeramsden for the clean minimal reduction.\n\nCloses #1863",
          "timestamp": "2026-07-14T16:38:25+02:00",
          "tree_id": "c0583cfcc376ff50a6c5d81f6456c1c2d41f4fce",
          "url": "https://github.com/fallow-rs/fallow/commit/a3f68d3c81c9304ee105c1896ab63da1120d0a17"
        },
        "date": 1784040556172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "52989ec9627d0ca7baaa74d36a6b1bb17d11b688",
          "message": "chore(deps): consolidate dependabot bumps (napi, oxlint/oxfmt, vscode) (#1891)\n\nnapi 3.10.3 + napi-derive 3.5.9, oxlint 1.73.0 + oxfmt 0.58.0, vscode-languageclient 10.1.0 + @types/node 26.1.0. Each pair needed a coordinated lockfile or paired bump to compile/pass; landing them together avoids the per-PR failures.\n\nCloses #1867\nCloses #1869\nCloses #1870\nCloses #1875\nCloses #1878\nCloses #1880",
          "timestamp": "2026-07-14T15:52:57Z",
          "tree_id": "9f924e60d9167241146921ec96a60bc7d697c771",
          "url": "https://github.com/fallow-rs/fallow/commit/52989ec9627d0ca7baaa74d36a6b1bb17d11b688"
        },
        "date": 1784044721055,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "811fa409b4aecaddf64596646e9c5553a6327882",
          "message": "refactor: group dependency override inputs",
          "timestamp": "2026-07-14T19:23:11+02:00",
          "tree_id": "d2c9b75e9f93144ab387cdfc9d3320b6cd5f8a73",
          "url": "https://github.com/fallow-rs/fallow/commit/811fa409b4aecaddf64596646e9c5553a6327882"
        },
        "date": 1784050181511,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "4d22ff4bc095d641781cf7cbcfd5e67de6615daf",
          "message": "fix(nextjs): credit metadata route config exports\n\nCredit framework-consumed config exports in App Router metadata routes while leaving dynamicParams and arbitrary helpers reportable.\n\nCorrect Knip migration suppression hints, preserve documented suppression reasons, and clarify config-backed regression baseline updates across generated and companion documentation.",
          "timestamp": "2026-07-14T19:52:04+02:00",
          "tree_id": "12d5945835e0a6d8f1592bbb62df3f79a8639c22",
          "url": "https://github.com/fallow-rs/fallow/commit/4d22ff4bc095d641781cf7cbcfd5e67de6615daf"
        },
        "date": 1784051691859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "6ef02ff843a6e46a44d42eb70fcfbdcb5dc7e849",
          "message": "test(core): normalize path separators in workspace-bucketing assertion\n\nThe workspace-bucketing test built its expected relative paths with\nPathBuf::join (all-backslash on Windows) while the code preserves the\ninput path's original separators, which are mixed when the fixture is\nbuilt via multiple join calls (web\\src/first.ts). Compare with\nseparators normalized so the assertion checks bucketing and file order,\nnot host path formatting. Windows-only failure; passed on Linux/macOS.",
          "timestamp": "2026-07-14T21:26:23+02:00",
          "tree_id": "8e3fea4a14c6cdc1194876b639b61f66ad45b837",
          "url": "https://github.com/fallow-rs/fallow/commit/6ef02ff843a6e46a44d42eb70fcfbdcb5dc7e849"
        },
        "date": 1784057291806,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "4e29fb136c133b964f1c0afa40ae00619930e594",
          "message": "fix(mcp): prevent stale process-group cleanup\n\nKeep completed Unix child leaders unreaped until their dedicated process group has been cleaned. This prevents stale process-group identifiers from targeting unrelated concurrent subprocesses.\n\nApply the protected lifecycle to MCP CLI subprocesses and Code Mode, while retaining Windows Job Object cleanup. Harden regression guards so cleanup never signals PIDs already confirmed dead.",
          "timestamp": "2026-07-14T22:11:24+02:00",
          "tree_id": "2cd1acd91e20cf30c54f8940ecdc6a2e0431d9d6",
          "url": "https://github.com/fallow-rs/fallow/commit/4e29fb136c133b964f1c0afa40ae00619930e594"
        },
        "date": 1784059958390,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "11f0adea9977d1946e2d7736f0ae14085e994b1a",
          "message": "chore: release v3.5.1",
          "timestamp": "2026-07-14T22:16:02+02:00",
          "tree_id": "d983980b5d370b3d48c8132b5a4363d57488d274",
          "url": "https://github.com/fallow-rs/fallow/commit/11f0adea9977d1946e2d7736f0ae14085e994b1a"
        },
        "date": 1784060285103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "3a1b86d22d922863b71cfe056cf544bb231bc532",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.5.1",
          "timestamp": "2026-07-15T08:16:27+02:00",
          "tree_id": "50abd2d4c0ab4480c28b72409911f962a02fffb8",
          "url": "https://github.com/fallow-rs/fallow/commit/3a1b86d22d922863b71cfe056cf544bb231bc532"
        },
        "date": 1784096542220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 32,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.13,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 443,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1105,
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
          "id": "d86455c69123a2f8ff5d4aeb6e3fc0786609c534",
          "message": "feat(cli): compact JSON output by default\n\nEmit compact machine-readable JSON across CLI, error, watch, and MCP paths while preserving the parsed schema and fixed CI formats.\n\nAdd `--pretty` for explicit indented output and validate it against each command's actual payload. This addresses the efficiency goal without adding TOON or another interchange format.\n\nFixes #1861.",
          "timestamp": "2026-07-15T09:16:39+02:00",
          "tree_id": "38f02292575111462610616899818b653baadc5c",
          "url": "https://github.com/fallow-rs/fallow/commit/d86455c69123a2f8ff5d4aeb6e3fc0786609c534"
        },
        "date": 1784100078092,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 44,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 444,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1149,
            "unit": "count"
          }
        ]
      }
    ]
  }
}