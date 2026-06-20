window.BENCHMARK_DATA = {
  "lastUpdate": 1781952852828,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a5c2923929118c54bf8a1dca7c311b10d30d918",
          "message": "fix(catalog): support Bun package.json catalogs\n\nRead Bun catalog definitions from root package.json workspaces.catalog and workspaces.catalogs so unresolved, unused, and empty catalog checks work on Bun workspaces without pnpm-workspace.yaml.\n\nKeep pnpm-workspace.yaml as the preferred catalog source when present, and keep package.json catalog fix paths read-only because Bun owns that format.\n\nFixes #1301.",
          "timestamp": "2026-06-17T19:15:23+02:00",
          "tree_id": "f3206fc0da8c0f3f5f8fc9346ad167ca104c21d3",
          "url": "https://github.com/fallow-rs/fallow/commit/4a5c2923929118c54bf8a1dca7c311b10d30d918"
        },
        "date": 1781716592981,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 958,
            "unit": "count"
          }
        ]
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
          "id": "9b1f4546ebcfbc186352c60fe19231563cf06bf9",
          "message": "chore: add analyzer follow-up tooling\n\n* chore: open post-pr-1300 followups branch\n\n* chore: add analyzer follow-up tooling\n\n* ci: skip bench targets in test job",
          "timestamp": "2026-06-17T20:11:50+02:00",
          "tree_id": "9170a63209b2faf0b28378f99b7f431744231b01",
          "url": "https://github.com/fallow-rs/fallow/commit/9b1f4546ebcfbc186352c60fe19231563cf06bf9"
        },
        "date": 1781719987259,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 958,
            "unit": "count"
          }
        ]
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
          "id": "cf96273eb884bd06dacf16f37b9917591ff77900",
          "message": "chore: harden CodSpeed benchmarks\n\nImprove benchmark isolation by replacing shared fixed temp paths with owned temporary directories.\n\nAdd a real-source CodSpeed shard that reuses the vendored Zod fixture, plus a bounded scaling shard for PR feedback. The slower full large-analysis suite remains limited to main and manual runs.",
          "timestamp": "2026-06-17T22:12:57+02:00",
          "tree_id": "0c930215c5dbb24c1aac3434340c59572bddca6c",
          "url": "https://github.com/fallow-rs/fallow/commit/cf96273eb884bd06dacf16f37b9917591ff77900"
        },
        "date": 1781727264564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 958,
            "unit": "count"
          }
        ]
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
          "id": "df6ab207a72fff23987a64615dd2d740c99d7ed8",
          "message": "fix: track CodSpeed benchmark fixture\n\nReplace the benchmark shard's machine-local real-world corpus path with a crate-local tracked representative TypeScript fixture.\n\nRename the shard to representative sources so clean checkouts build the bench target and the workflow label matches the measured input.",
          "timestamp": "2026-06-17T22:21:03+02:00",
          "tree_id": "df60b281c36fab653d0fa8866ae0b82b47e39db3",
          "url": "https://github.com/fallow-rs/fallow/commit/df6ab207a72fff23987a64615dd2d740c99d7ed8"
        },
        "date": 1781727961007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 958,
            "unit": "count"
          }
        ]
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
          "id": "44cbb237cc8a2ffdb25f86b8d5a3bc5dddf5b6bb",
          "message": "fix(review): harden final follow-up edges\n\nAddress final review findings across suppression reporting, catalog parsing, same-file export dependency credit, and LSP diagnostics.\n\nStale suppression findings now carry typed actions, split missing-reason identities across SARIF, CodeClimate, audit, and baselines, and keep generated schemas and editor contracts in sync. Package.json catalog line mapping now respects workspace catalog precedence.\n\nThe same-file export dependency collector now handles shadowed bindings without leaking block-local names, and LSP diagnostics avoid stale open buffers while emitting UTF-16-safe quick fixes.",
          "timestamp": "2026-06-18T07:29:17+02:00",
          "tree_id": "43e671185d3aa1b043e0927ff0b910be490983c7",
          "url": "https://github.com/fallow-rs/fallow/commit/44cbb237cc8a2ffdb25f86b8d5a3bc5dddf5b6bb"
        },
        "date": 1781760961297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 958,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a1c5876a9ff6facb052bce2e8eb28b01bbf6c33f",
          "message": "fix: restore green CI for suppression-reasons tests\n\nThe just-landed suppression-reasons feature added test code that broke\nclippy (--all-targets) and the VS Code tsc lint:\n\n- four RulesConfig::default() + field-reassign blocks in codeclimate.rs\n  and sarif.rs tripped clippy::field_reassign_with_default; rewritten as\n  struct-update literals\n- a needless Vec collect-then-contains in sarif.rs tripped\n  clippy::needless_collect; rewritten as .any()\n- dead_code_keys_cover_graph_boundary_catalog_and_override_variants was\n  153/150 lines; the results setup is extracted into a helper\n- StaleSuppression now requires the actions field, so the vscode tree\n  and status-bar test fixtures gained actions: []",
          "timestamp": "2026-06-18T08:06:33+02:00",
          "tree_id": "75352255fc09f0c8afbd569b9f3db8457132cc1b",
          "url": "https://github.com/fallow-rs/fallow/commit/a1c5876a9ff6facb052bce2e8eb28b01bbf6c33f"
        },
        "date": 1781762868238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 958,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c2be0d597118a1366eeb4f62727dae4cffa5f75c",
          "message": "chore: release v2.99.0",
          "timestamp": "2026-06-18T08:33:53+02:00",
          "tree_id": "357973101a685ee8ff7829e750558d99cb69b2a8",
          "url": "https://github.com/fallow-rs/fallow/commit/c2be0d597118a1366eeb4f62727dae4cffa5f75c"
        },
        "date": 1781764553447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 958,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "0eb7b4925fe623ee4eabec54eeeb42965fa1534f",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.99.0",
          "timestamp": "2026-06-18T09:27:57+02:00",
          "tree_id": "7e57a619a8e69d92ef62f92fc8e1899d3096a2a2",
          "url": "https://github.com/fallow-rs/fallow/commit/0eb7b4925fe623ee4eabec54eeeb42965fa1534f"
        },
        "date": 1781768010321,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 958,
            "unit": "count"
          }
        ]
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
          "id": "906d0beef87ce240c6558844d71070cad03d938a",
          "message": "perf(cli): stream SARIF file output\n\nWrite SARIF files through a buffered JSON writer instead of first building a pretty JSON string in memory. This keeps the existing parent directory handling and warning behavior while avoiding the extra allocation for file output.\n\nFlush the writer explicitly so late IO errors are still reported before the success message.",
          "timestamp": "2026-06-18T11:44:58+02:00",
          "tree_id": "38309af3ecbefd00f63ea57950b0111822757f04",
          "url": "https://github.com/fallow-rs/fallow/commit/906d0beef87ce240c6558844d71070cad03d938a"
        },
        "date": 1781776019777,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 958,
            "unit": "count"
          }
        ]
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
          "id": "fb33eae157748852a26f05154c3152ce5568c0d6",
          "message": "feat: detect duplicate code in web format sections\n\nDetect duplicate code in CSS-family files and authored template/style regions in Vue, Svelte, and Astro files.",
          "timestamp": "2026-06-18T12:52:39+02:00",
          "tree_id": "f3cdd630ad8cf9e3efc1def1c57f1407e7ad89c3",
          "url": "https://github.com/fallow-rs/fallow/commit/fb33eae157748852a26f05154c3152ce5568c0d6"
        },
        "date": 1781780037961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 960,
            "unit": "count"
          }
        ]
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
          "id": "daf95918dcb3b4d2220372402b0ef93ad6493eb4",
          "message": "feat: detect unused svelte component props\n\nExtends the existing unused-component-prop analyzer to consume Svelte 5 () harvest data alongside Vue and React prop findings.\\n\\nThe Svelte arm is dependency-gated on svelte or @sveltejs/kit, keeps the existing conservative abstains for opaque prop usage, and reports through the existing output shape and suppression token.\\n\\nUpdates generated contracts, SARIF snapshots, bundled docs, and integration fixtures for positive, usage-credit, abstain, and dependency-gate coverage.",
          "timestamp": "2026-06-18T13:30:19+02:00",
          "tree_id": "0e667e7780619f195eff4c8c60d333f88445fc6a",
          "url": "https://github.com/fallow-rs/fallow/commit/daf95918dcb3b4d2220372402b0ef93ad6493eb4"
        },
        "date": 1781782662976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 960,
            "unit": "count"
          }
        ]
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
          "id": "0a058b6912ef89ef22ac10afefdf3b18a7f18a3b",
          "message": "feat(security): add verifier workflow outputs\n\nAdd security survivor rendering so externally verified verdict files can be joined with raw fallow security candidates without rewriting the candidate output.\n\nAdd blind-spot grouping for unresolved security callees, wire the new output contracts through schema generation and generated TypeScript types, and document the CLI verification flow.",
          "timestamp": "2026-06-18T14:12:38+02:00",
          "tree_id": "a7104d83678d25dd50f02940cc1cd89729b1626b",
          "url": "https://github.com/fallow-rs/fallow/commit/0a058b6912ef89ef22ac10afefdf3b18a7f18a3b"
        },
        "date": 1781784946062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 960,
            "unit": "count"
          }
        ]
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
          "id": "c5f69714f4eafecfed254e2763bb2206fbc58422",
          "message": "feat: expose framework health diagnostics\n\nAdd optional framework health diagnostics to health JSON output when the run already has analysis data. The payload reports detected framework ids and scoped detector statuses for active, disabled, abstained, and not-checked detectors.\n\nPreserve pre-parsed health analysis parity by deriving release-time module fields before analysis, so framework detector abstains are visible in health score runs too.",
          "timestamp": "2026-06-18T14:20:32+02:00",
          "tree_id": "e3ce4fdab46c37fce036740c2b6bd31902950c32",
          "url": "https://github.com/fallow-rs/fallow/commit/c5f69714f4eafecfed254e2763bb2206fbc58422"
        },
        "date": 1781785784556,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 960,
            "unit": "count"
          }
        ]
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
          "id": "9cadc4b71b358695d9a77c60a9fab331fc800f93",
          "message": "perf: reduce duplicate matching work for web formats\n\nAdd a global duplicate-shingle prefilter, namespace duplicate token hashes across JS, style, and markup sections, and adjust the real-world benchmark watchdog for the expanded Next.js combined-analysis surface.",
          "timestamp": "2026-06-18T14:53:17+02:00",
          "tree_id": "2fb56bc22d8101e6966c6c392cb99a52d66a89fd",
          "url": "https://github.com/fallow-rs/fallow/commit/9cadc4b71b358695d9a77c60a9fab331fc800f93"
        },
        "date": 1781787268910,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 960,
            "unit": "count"
          }
        ]
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
          "id": "a742fe4d876d1ae634309d7e4f470b02f7a84eb5",
          "message": "feat(inspect): add CLI evidence bundle flow\n\nExpose `fallow inspect` as the CLI and editor path for the same evidence bundle that MCP `inspect_target` returns. The CLI composes trace, dead-code, duplication, complexity, and security evidence without adding a new analyzer pass.\n\nRoute the MCP tool through the CLI adapter, document the typed `inspect_target` root output in the schema, and regenerate the VS Code and npm contracts. The VS Code command now saves dirty active files before inspection and consumes the generated output type.\n\nTighten dogfood coverage for health, duplication, audit, duplicate config keys, and GitHub/GitLab renderer parity while keeping the core dead-code orchestration refactor local to result collection.",
          "timestamp": "2026-06-18T15:15:32+02:00",
          "tree_id": "d426dc2f6ada742222db53d12dd4ff1ad67be5c2",
          "url": "https://github.com/fallow-rs/fallow/commit/a742fe4d876d1ae634309d7e4f470b02f7a84eb5"
        },
        "date": 1781788670344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 960,
            "unit": "count"
          }
        ]
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
          "id": "f8efb2e131ec4ae132fe2a90476fdb5079319435",
          "message": "fix(security): reject unsupported workflow flags\n\nKeep derived security workflow subcommands honest by rendering clap parse errors as JSON when requested and rejecting hidden parent flags instead of accepting no-op behavior.\n\nClarify verdict fields that fallow preserves versus harness-owned audit fields, and cover the review findings with focused workflow tests.",
          "timestamp": "2026-06-18T15:28:35+02:00",
          "tree_id": "923a69ab0c385e1758391fc40408a02f5bf3228f",
          "url": "https://github.com/fallow-rs/fallow/commit/f8efb2e131ec4ae132fe2a90476fdb5079319435"
        },
        "date": 1781789401499,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 960,
            "unit": "count"
          }
        ]
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
          "id": "189b7e2e1682a6bb2f795bf9cc92eacbd6ad1688",
          "message": "fix(inspect): preserve inspect scope in child runs\n\nNormalize inspect targets before child analysis so absolute editor paths compare against root-relative analyzer output, and forward parent execution flags consistently without passing production toggles to security children.\n\nMake VS Code inspect resolve folder-scoped config, retry stale CLIs with the managed binary, and keep subcommand fallback parsing precise. Improve benchmark timeout cleanup and diagnostics while updating the generated fallow skill command list.",
          "timestamp": "2026-06-18T16:33:00+02:00",
          "tree_id": "913ce804943369e96dec6ea7111c584936806544",
          "url": "https://github.com/fallow-rs/fallow/commit/189b7e2e1682a6bb2f795bf9cc92eacbd6ad1688"
        },
        "date": 1781793268570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 960,
            "unit": "count"
          }
        ]
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
          "id": "a154759c88bf11a31bb1a8a721f2b1b3e16db686",
          "message": "fix(inspect): satisfy CI follow-up gates\n\nAdjust inspect test helpers for the full clippy target set, make target normalization tests host-native for Windows, and preserve the caught VS Code inspect fallback error as the thrown cause.",
          "timestamp": "2026-06-18T17:17:54+02:00",
          "tree_id": "03123e8bd781c1f0215fcddf5444af4b284edcc9",
          "url": "https://github.com/fallow-rs/fallow/commit/a154759c88bf11a31bb1a8a721f2b1b3e16db686"
        },
        "date": 1781796055755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 960,
            "unit": "count"
          }
        ]
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
          "id": "b3b936f277b6c2c99b584bab19799fdd30df7a5a",
          "message": "feat: add catalogue-backed effect policy\n\nAdd `banned-effect` rule-pack support backed by the security catalogue effect taxonomy. Rule packs can now ban effect classes such as network, storage, shell, crypto, randomness, DOM, and database while preserving the existing `policy-violation` output family and scoped suppression model.\n\nThe implementation annotates every security matcher with an effect, validates kind-specific rule-pack fields, resolves effect matches through written and import-resolved callee paths, and carries the new rule kind through JSON, schemas, SARIF, MCP, VS Code, npm contracts, action summaries, docs, and fixtures.\n\nFixes #1143.",
          "timestamp": "2026-06-19T07:25:44+02:00",
          "tree_id": "13bd5ccd4170c5cdb8a8b72e3d04a08257721477",
          "url": "https://github.com/fallow-rs/fallow/commit/b3b936f277b6c2c99b584bab19799fdd30df7a5a"
        },
        "date": 1781846958831,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 961,
            "unit": "count"
          }
        ]
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
          "id": "78e21330430985dea8dd419c156d81dc17094a8a",
          "message": "fix: tighten security workflow outputs\n\nTighten the security survivor and blind-spots workflows for CI and agent consumers.\n\nSurvivor output now uses schema version 2, reports unreviewed candidates through `summary.unverdicted`, and offers a strict complete-verdict gate for CI. The human output separates verifier dispositions from unreviewed candidates so fallow still presents candidates, not proven vulnerabilities.\n\nBlind-spots now accepts `--file` after the subcommand and keeps scoped unresolved-callee summary counts aligned with scoped diagnostics. Docs, generated schema, TypeScript contracts, and bundled agent guidance were updated with the new contract.",
          "timestamp": "2026-06-19T08:01:00+02:00",
          "tree_id": "8ed003b37d2346c8f35ed899401d27bd31119594",
          "url": "https://github.com/fallow-rs/fallow/commit/78e21330430985dea8dd419c156d81dc17094a8a"
        },
        "date": 1781849010391,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 961,
            "unit": "count"
          }
        ]
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
          "id": "b446f0068bc2729ccd7a6801722a2c5599012a6f",
          "message": "fix(unused-exports): report local-only value exports\n\nReport value exports as unused when they have no reachable cross-file references, even if another same-file export still needs the local declaration.\n\nThe fix keeps the existing remove-export action semantics, consumes matching unused-export suppressions, and leaves ignoreExportsUsedInFile as the opt-in escape hatch for teams that want to keep local-only exports public.",
          "timestamp": "2026-06-19T08:06:26+02:00",
          "tree_id": "d8021d05086577d09470630ab83f230b434ecc92",
          "url": "https://github.com/fallow-rs/fallow/commit/b446f0068bc2729ccd7a6801722a2c5599012a6f"
        },
        "date": 1781849254958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 961,
            "unit": "count"
          }
        ]
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
          "id": "f4026a890c4239a65c62f236cb99628891697f24",
          "message": "test(audit): cover shifted duplicate attribution\n\nAdds regression coverage for audit new-only duplicate attribution when an unchanged clone group shifts line numbers in a touched file.\n\nThe test builds a base branch and edit branch, forces the base snapshot attribution path, and asserts the shifted duplicate group remains reported as inherited rather than introduced.\n\nProduction attribution logic is unchanged because clone group keys already ignore line numbers.\n\nFixes #1340.",
          "timestamp": "2026-06-19T09:22:58+02:00",
          "tree_id": "cad31264918bdf3672a6e50f85c65de48f8213a0",
          "url": "https://github.com/fallow-rs/fallow/commit/f4026a890c4239a65c62f236cb99628891697f24"
        },
        "date": 1781853847114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 961,
            "unit": "count"
          }
        ]
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
          "id": "c637b0bdec7da180bdea27cb7d3bc5c07d301b46",
          "message": "fix: make dupes compact output traceable (#1345)\n\nDuplication compact output used an ordinal-only clone-group-N label with no stable identity. It now uses the canonical code-duplication issue tag and includes the stable dup:<id> fingerprint plus group, token, line, and instance metadata on each clone instance line, so agents can jump straight to fallow dupes --trace dup:<id> without scraping human output. The dup:<id> printed in compact output is byte-identical to the JSON clone_groups[].fingerprint.\n\nAlso includes an incidental clippy fix for format_push_string in audit_tests.rs, promoted to deny by clippy 1.95.0 under the workspace -D warnings gate.\n\nReplaces the stale draft #1318.",
          "timestamp": "2026-06-19T10:57:47+02:00",
          "tree_id": "4366f31820fcefae7e37f7e31a0ee4561f2ec312",
          "url": "https://github.com/fallow-rs/fallow/commit/c637b0bdec7da180bdea27cb7d3bc5c07d301b46"
        },
        "date": 1781859954918,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 961,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "1779391d89029381f0ca8130c64fc37b2b6009ab",
          "message": "test(audit): pin LF in shifted-duplicate test for Windows",
          "timestamp": "2026-06-19T12:21:05+02:00",
          "tree_id": "9ce75c125fa41e34c3dfa905939e0dd47d1454ab",
          "url": "https://github.com/fallow-rs/fallow/commit/1779391d89029381f0ca8130c64fc37b2b6009ab"
        },
        "date": 1781864539935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 961,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "eaeb0634af797a69bae7600d2020dd99b33402ad",
          "message": "chore: release v2.100.0",
          "timestamp": "2026-06-19T12:48:37+02:00",
          "tree_id": "0edaa42c712274637bcb7868f99c47771043ce3a",
          "url": "https://github.com/fallow-rs/fallow/commit/eaeb0634af797a69bae7600d2020dd99b33402ad"
        },
        "date": 1781866206622,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 961,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "411df94954babda13edc97328327db70eda21399",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.100.0",
          "timestamp": "2026-06-19T13:33:37+02:00",
          "tree_id": "bd173402d162c19b107f9b8b408c318622dbc280",
          "url": "https://github.com/fallow-rs/fallow/commit/411df94954babda13edc97328327db70eda21399"
        },
        "date": 1781869150170,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 961,
            "unit": "count"
          }
        ]
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
          "id": "dcaa8fcf8d22c210a6eb5b497dc696f045696780",
          "message": "perf(dupes): replace prefix-doubling suffix array with linear-time SA-IS\n\nClone detection built its suffix array with prefix-doubling + radix sort,\nan O(N log N) algorithm whose doubling passes dominated clone detection\n(the largest itemized stage of health/dupes/audit). Replace it with SA-IS\n(suffix array by induced sorting), which runs in linear time.\n\nThe i64 token stream (token ranks plus distinct negative per-file\nsentinels) is remapped to a dense non-negative alphabet with an appended\nunique smallest terminator; the terminator position is dropped from the\nresult, preserving the prefix-sorts-first ordering the LCP and clone\nextraction passes rely on.\n\nA within-process A/B on the same input measures ~2.7x to 11x faster suffix\narray construction with byte-identical output. The prefix-doubling routine\nis retained under cfg(test) as a differential-test reference, with a\nproperty test comparing SA-IS against it and a naive sort across thousands\nof random inputs including sentinel-separated streams.",
          "timestamp": "2026-06-19T17:15:08+02:00",
          "tree_id": "f77f83dd925c0b18b65ff6d553f42572bf355162",
          "url": "https://github.com/fallow-rs/fallow/commit/dcaa8fcf8d22c210a6eb5b497dc696f045696780"
        },
        "date": 1781882193324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 392,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 961,
            "unit": "count"
          }
        ]
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
          "id": "ca8dc6bfd241c6fc2dd43ca97f7162bd8ef82f4a",
          "message": "refactor: decompose oversized functions to clear SIG unit-size very-high-risk band\n\nBehavior-preserving decomposition of oversized functions across the workspace, driven by a SIG maintainability audit. Reduces the Unit Size very-high-risk band (function LOC in units >60 lines) from 19.3% to 4.0%, under the 8.3% 4-star ceiling, by splitting large orchestration and detector functions into focused private helpers across core, extract, graph, config, lsp, mcp, and cli.\n\nIrreducible field-plumbing, lookup/match tables, and wide struct literals are left intact rather than split arbitrarily; the >30 and >15 size bands remain capped by the codebase's inherent function granularity and are intentionally not pursued. Pure extraction, no behavior change: full workspace build, clippy -D warnings, and the full test suite pass; no public signatures, output, schema, config, or API surface changed.",
          "timestamp": "2026-06-19T17:55:33+02:00",
          "tree_id": "c3e09601b00d6d9d9e6c7fadbd97fd3575904b5c",
          "url": "https://github.com/fallow-rs/fallow/commit/ca8dc6bfd241c6fc2dd43ca97f7162bd8ef82f4a"
        },
        "date": 1781884602815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 393,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 974,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "47ec5324173cda53eb28259965bd22b3ad8aa029",
          "message": "perf(plugins): parallelize workspace file bucketing\n\nbucket_files_by_workspace assigned every discovered file to its first\nmatching workspace on a single thread: an O(files x workspaces) prefix\nscan plus a path clone and relative-path allocation per file. On a 21k-file\nmonorepo this was a measurable slice of the plugins pipeline stage.\n\nMove the per-file assignment to a rayon par_iter and keep only the cheap\nbucket fill sequential. First-match-by-workspace-declaration-order and\nper-bucket file order are both preserved, so output is byte-identical.\n\nPlugins stage ~655ms -> ~607ms on the next.js fixture (21043 files, 41\nworkspaces); dead-code JSON byte-identical on next.js and vue-core.",
          "timestamp": "2026-06-19T20:19:17+02:00",
          "tree_id": "72e8eac3bc8d81b9e2a84859cc4c245cb86f83db",
          "url": "https://github.com/fallow-rs/fallow/commit/47ec5324173cda53eb28259965bd22b3ad8aa029"
        },
        "date": 1781893320027,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 393,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 974,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "405d77aa44a49baaca9a8c19fba506a25414d1c5",
          "message": "perf(resolve): reuse a resolver session across external-stylesheet scans\n\naugment_external_style_package_usage resolves every node_modules stylesheet\nindividually, recursing through @import / @use chains. Each scan called the\nfull resolve_all_imports, which rebuilt the resolver instances, re-loaded the\nroot and per-workspace package.json manifests, and re-canonicalized every\nworkspace root. On a 41-workspace monorepo that re-did ~80 package.json reads\nand ~80 canonicalize calls per stylesheet, scaling with the external-style count.\n\nExtract that invariant setup into a reusable ResolverSession and split\nresolve_all_imports into build-session + resolve_all_imports_with_session (one\nshared resolution code path, so the parallel project pass is unchanged). The\nexternal-style scanner builds the session once and resolves each stylesheet\nthrough it.\n\nresolve-imports stage ~880ms -> ~847ms on the next.js fixture (21043 files, 41\nworkspaces); dead-code JSON byte-identical on next.js and vue-core.",
          "timestamp": "2026-06-19T20:32:53+02:00",
          "tree_id": "9ff9634d26883fe0cdd2b87afc79620443431669",
          "url": "https://github.com/fallow-rs/fallow/commit/405d77aa44a49baaca9a8c19fba506a25414d1c5"
        },
        "date": 1781894078647,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 393,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 974,
            "unit": "count"
          }
        ]
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
          "id": "5f2c90cb40919aae559babe971332fcd955d8ea9",
          "message": "feat(dupes): add private rolling duplicate detector\n\nAdd a private FALLOW_DUPES_ROLLING detector path to compare a rolling-window candidate-first strategy against the current suffix-array extraction. The default detector remains intact, component-heavy corpora fall back to the suffix path, and the prototype reuses existing filtering and statistics so parity can be measured without changing public CLI behavior.\n\nRefresh the jscpd benchmark harness and README with corrected jscpd v5 comparison data, a version-mismatch guard, JS web formats, and a dedicated rolling comparator. Add interval-pressure benchmark coverage, rolling detector tests, and the research plan covering kept and rejected optimization rounds.",
          "timestamp": "2026-06-19T20:59:40+02:00",
          "tree_id": "10bfcd1646cbebb1536f3f4804075fd7d7009175",
          "url": "https://github.com/fallow-rs/fallow/commit/5f2c90cb40919aae559babe971332fcd955d8ea9"
        },
        "date": 1781895701377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 394,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 981,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "661fcd6261dc59595219496f255366ba3a0799c6",
          "message": "docs(changelog): note faster plugin/config detection + traversal-rules refinement",
          "timestamp": "2026-06-19T21:48:42+02:00",
          "tree_id": "67c93a8a0e4a702d42e1c889b4302343f9d03aef",
          "url": "https://github.com/fallow-rs/fallow/commit/661fcd6261dc59595219496f255366ba3a0799c6"
        },
        "date": 1781899425382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 394,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 981,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "86ea6ebd886e6aa52e53176f6db6e5342b2c492f",
          "message": "perf(plugins): activate browser-extension/obsidian via discovery index\n\nRoute filesystem-manifest activation for the browser-extension and obsidian\nplugins through the discovery walk's ConfigCandidateIndex instead of probing\nevery candidate directory's manifest.json. Outside production mode the plugins\nconsult the in-memory listing the walk already built; in production (None) they\nfall back to the filesystem probe, preserving prior behavior.\n\nPlugin::is_enabled_with_files gains an Option<&ConfigCandidateIndex> argument\nthreaded from collect_active_plugins. danger/k6/varlock take the argument but\nignore it (their activation reads source files already in the walk). varlock's\ndead nested .env.schema scan is left for a follow-up.\n\nOutput is byte-identical across the 10 real-world benchmark fixtures; the\nplugins stage on next.js drops ~60ms under load.",
          "timestamp": "2026-06-20T09:08:05+02:00",
          "tree_id": "1a40b5b8d1c2129e4fcf3c94d3e91a119b98bc8b",
          "url": "https://github.com/fallow-rs/fallow/commit/86ea6ebd886e6aa52e53176f6db6e5342b2c492f"
        },
        "date": 1781939376166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 394,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 981,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "595f8d0a1c15d9cc0d2128d6ae1c478d2112f02e",
          "message": "refactor: group parse finalization inputs",
          "timestamp": "2026-06-20T09:24:24+02:00",
          "tree_id": "7f8f9c5cc04dd484143632298a6632ff5f98219f",
          "url": "https://github.com/fallow-rs/fallow/commit/595f8d0a1c15d9cc0d2128d6ae1c478d2112f02e"
        },
        "date": 1781940413580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 394,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 981,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b7055f6144038611012d5c0b78daa8feea72d061",
          "message": "refactor: split render fan-in analyzer phases",
          "timestamp": "2026-06-20T09:29:05+02:00",
          "tree_id": "071d7e49b22c667f2b7cb0c3d667562370412d0a",
          "url": "https://github.com/fallow-rs/fallow/commit/b7055f6144038611012d5c0b78daa8feea72d061"
        },
        "date": 1781940668660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 394,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 981,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "229418d90f09c7bac701306219b59dfe3b8971ef",
          "message": "refactor: share coverage upload helpers",
          "timestamp": "2026-06-20T09:34:47+02:00",
          "tree_id": "1b4979250dc5822d23b5069642f431926156a08a",
          "url": "https://github.com/fallow-rs/fallow/commit/229418d90f09c7bac701306219b59dfe3b8971ef"
        },
        "date": 1781941016670,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 394,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 981,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ade73c11cccb7b8ee9cc14f008dede26bff8d84b",
          "message": "refactor: split load data key analyzer phases",
          "timestamp": "2026-06-20T09:37:29+02:00",
          "tree_id": "6b24d8ce1cba64ba67371f35889bdb9ef80f2020",
          "url": "https://github.com/fallow-rs/fallow/commit/ade73c11cccb7b8ee9cc14f008dede26bff8d84b"
        },
        "date": 1781941169905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 394,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 981,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "bca4e1fae0b70a710cfec0b5f615299a54db9798",
          "message": "refactor: group sink site build inputs",
          "timestamp": "2026-06-20T09:41:10+02:00",
          "tree_id": "fb32b57fb16992960a2d1765ac813414d4dc6397",
          "url": "https://github.com/fallow-rs/fallow/commit/bca4e1fae0b70a710cfec0b5f615299a54db9798"
        },
        "date": 1781941391832,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 394,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 982,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6b23aecb084923791a902d278c9808d119d20335",
          "message": "refactor: split catalog dependency line scanner",
          "timestamp": "2026-06-20T09:43:49+02:00",
          "tree_id": "a75a6078eebd5744a31e360ef6026ce4e4e5151b",
          "url": "https://github.com/fallow-rs/fallow/commit/6b23aecb084923791a902d278c9808d119d20335"
        },
        "date": 1781941550294,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 395,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3793a46afa00ee7e764ca19abbc328abc7a28f11",
          "message": "fix: satisfy module info visibility lint",
          "timestamp": "2026-06-20T09:49:08+02:00",
          "tree_id": "26ba28f6678762de2760aed6e4722db85927ffa0",
          "url": "https://github.com/fallow-rs/fallow/commit/3793a46afa00ee7e764ca19abbc328abc7a28f11"
        },
        "date": 1781941821916,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 395,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "fb58c31e06489f6dd9d25b62994d23c4b08ccff3",
          "message": "refactor: split health core preparation",
          "timestamp": "2026-06-20T09:51:08+02:00",
          "tree_id": "fad958e07f329bf61ac8ea505eddaee30eac9874",
          "url": "https://github.com/fallow-rs/fallow/commit/fb58c31e06489f6dd9d25b62994d23c4b08ccff3"
        },
        "date": 1781941998922,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 396,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "4fcfb37eca53a258389f78b933942ae364ceaa3b",
          "message": "refactor: group tainted sink finding inputs",
          "timestamp": "2026-06-20T09:53:13+02:00",
          "tree_id": "e0b06acb330349365a5b13d60e4c0bcb60ff3398",
          "url": "https://github.com/fallow-rs/fallow/commit/4fcfb37eca53a258389f78b933942ae364ceaa3b"
        },
        "date": 1781942119369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 396,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "f351bb1a4432b08183d5a80c768f7ac6cdf528d5",
          "message": "refactor: share config import dependency collection",
          "timestamp": "2026-06-20T09:56:39+02:00",
          "tree_id": "caa49f933f99b4a5446fc6373f1efb52450b984d",
          "url": "https://github.com/fallow-rs/fallow/commit/f351bb1a4432b08183d5a80c768f7ac6cdf528d5"
        },
        "date": 1781942317998,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 396,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7d96c6788d0432ae78a153b1776b6d56255bec34",
          "message": "refactor: group review comment inputs",
          "timestamp": "2026-06-20T09:58:57+02:00",
          "tree_id": "73d98d1a94e89a92cbd0b3a10ccf77c6688d6c12",
          "url": "https://github.com/fallow-rs/fallow/commit/7d96c6788d0432ae78a153b1776b6d56255bec34"
        },
        "date": 1781942460471,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 396,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "1ab442dd938d92fa32a7c6f3ffad768f391ff475",
          "message": "refactor: split security ranking enrichment",
          "timestamp": "2026-06-20T10:05:22+02:00",
          "tree_id": "54a9fb6581fbcca6c06b29313201627573269e0f",
          "url": "https://github.com/fallow-rs/fallow/commit/1ab442dd938d92fa32a7c6f3ffad768f391ff475"
        },
        "date": 1781942847710,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 396,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d6c9ffc885d0804b43dd0abebaadb80bf6636588",
          "message": "refactor: group unlisted dependency inputs",
          "timestamp": "2026-06-20T10:06:51+02:00",
          "tree_id": "d90b055d36fd615e1df11db241b61f68539b0ef5",
          "url": "https://github.com/fallow-rs/fallow/commit/d6c9ffc885d0804b43dd0abebaadb80bf6636588"
        },
        "date": 1781942946238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 396,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7370db8da1ec126e839e88ce7b146dc79d2b3cb9",
          "message": "refactor: group client cone inputs",
          "timestamp": "2026-06-20T10:09:47+02:00",
          "tree_id": "aa3ede1ccaac1e1df8b06d15230832bc7c5c7e8f",
          "url": "https://github.com/fallow-rs/fallow/commit/7370db8da1ec126e839e88ce7b146dc79d2b3cb9"
        },
        "date": 1781943067064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 396,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a91fb3b8bfe0e98c2ef3cebf90439e679665f9fb",
          "message": "refactor: split react prop harvesting",
          "timestamp": "2026-06-20T10:13:57+02:00",
          "tree_id": "17bc040450229eec2c96084e619f6a6648f59982",
          "url": "https://github.com/fallow-rs/fallow/commit/a91fb3b8bfe0e98c2ef3cebf90439e679665f9fb"
        },
        "date": 1781943369841,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 396,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c26de3fb6b0a614d2ddc5c779309f258cec4345c",
          "message": "refactor: share namespace re-export reachability",
          "timestamp": "2026-06-20T10:17:06+02:00",
          "tree_id": "42d38d391c451d93a8625ce933d472774a6bc524",
          "url": "https://github.com/fallow-rs/fallow/commit/c26de3fb6b0a614d2ddc5c779309f258cec4345c"
        },
        "date": 1781943546758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 989,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7ec94d991a82f4eda1d2de880a33d4f2a1866d71",
          "message": "refactor: group workspace glob inputs",
          "timestamp": "2026-06-20T10:22:01+02:00",
          "tree_id": "1d36338f0c6e56d74b0514af8206cea7ba52df77",
          "url": "https://github.com/fallow-rs/fallow/commit/7ec94d991a82f4eda1d2de880a33d4f2a1866d71"
        },
        "date": 1781943844782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "bb67d07b377f6b24c9da697af14774f43c2e86fe",
          "message": "refactor: group duplicate adjacency inputs",
          "timestamp": "2026-06-20T10:24:24+02:00",
          "tree_id": "1396740c5aeb9ae6c7c48232d50614bd808509c7",
          "url": "https://github.com/fallow-rs/fallow/commit/bb67d07b377f6b24c9da697af14774f43c2e86fe"
        },
        "date": 1781943928889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "26e0f8e4782ddd99ea6691e3994e4e00f5081509",
          "message": "refactor: split mdx statement scanning",
          "timestamp": "2026-06-20T10:26:25+02:00",
          "tree_id": "fa6ab3405475616ead7a95219a377928c3219b7c",
          "url": "https://github.com/fallow-rs/fallow/commit/26e0f8e4782ddd99ea6691e3994e4e00f5081509"
        },
        "date": 1781944114666,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "88519c6c4bd828c2af44fc95adb55acd1e436c0a",
          "message": "refactor: group sfc template inputs",
          "timestamp": "2026-06-20T10:28:06+02:00",
          "tree_id": "c4deef171007c1ce480b12b6af3ed89644628fa9",
          "url": "https://github.com/fallow-rs/fallow/commit/88519c6c4bd828c2af44fc95adb55acd1e436c0a"
        },
        "date": 1781944219356,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6224a970d70c7f40456bb4a350ad3e05fb1a9154",
          "message": "refactor: split css theme block scanning",
          "timestamp": "2026-06-20T10:31:27+02:00",
          "tree_id": "834252e5e36f0f6890d0033af4404d0fa3020d55",
          "url": "https://github.com/fallow-rs/fallow/commit/6224a970d70c7f40456bb4a350ad3e05fb1a9154"
        },
        "date": 1781944367252,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "73d8cc568dac926d8c2ca8c67b43f84e64e33d30",
          "message": "fix(ci): bundle gitlab_common.sh in vendored GitLab template\n\nea5a81155 extracted ci/scripts/gitlab_common.sh as a shared helper\nsourced by comment.sh and review.sh and added it to the gitlab-ci.yml\ncp loops, but did not register it in GITLAB_FILES or add the template\nsymlink. Vendored pipelines would source a missing file at runtime, and\nthe for-loop drift test (gitlab_ci_template_for_loops_match_vendored_files)\nturned main red.",
          "timestamp": "2026-06-20T10:34:49+02:00",
          "tree_id": "8b9ef22baadc12ca7b7e5d5263e4e057c0224979",
          "url": "https://github.com/fallow-rs/fallow/commit/73d8cc568dac926d8c2ca8c67b43f84e64e33d30"
        },
        "date": 1781944590432,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "4e0096588013c6e13b6c9efa3fb2ef6846e1b7e9",
          "message": "refactor: split angular template reference scan",
          "timestamp": "2026-06-20T10:37:21+02:00",
          "tree_id": "43ff8216e8cf1fc7cdd04ca3ae5462707534ff60",
          "url": "https://github.com/fallow-rs/fallow/commit/4e0096588013c6e13b6c9efa3fb2ef6846e1b7e9"
        },
        "date": 1781944738955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "33bdcbb95d45edb2becf5a3909d25cf28fa050bd",
          "message": "refactor: split css module export scan",
          "timestamp": "2026-06-20T10:40:21+02:00",
          "tree_id": "a6f92ba3c09aecb551104e246c688734edbb675e",
          "url": "https://github.com/fallow-rs/fallow/commit/33bdcbb95d45edb2becf5a3909d25cf28fa050bd"
        },
        "date": 1781944903382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "17fe84ece83754b3df6839f1259fae3072e1bc7c",
          "message": "refactor: split svelte template usage scan",
          "timestamp": "2026-06-20T10:43:38+02:00",
          "tree_id": "6003210f72f4e7204674d88ccb424c092d1015c4",
          "url": "https://github.com/fallow-rs/fallow/commit/17fe84ece83754b3df6839f1259fae3072e1bc7c"
        },
        "date": 1781945107165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "17e911238ae50fdedeb89d26d731bcc5d355963a",
          "message": "refactor: split duplicate prop shape bucketing",
          "timestamp": "2026-06-20T10:46:45+02:00",
          "tree_id": "6a61790c132a5164ff4ba2ff2b943ab42c32651d",
          "url": "https://github.com/fallow-rs/fallow/commit/17e911238ae50fdedeb89d26d731bcc5d355963a"
        },
        "date": 1781945285137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ba042b08ddcc69dedc3c4ad80b973c9fd58e14bb",
          "message": "refactor: split thin wrapper classification",
          "timestamp": "2026-06-20T10:51:05+02:00",
          "tree_id": "ef2c6d7058c3f3beb3af67b9ebd17aa8cba743ff",
          "url": "https://github.com/fallow-rs/fallow/commit/ba042b08ddcc69dedc3c4ad80b973c9fd58e14bb"
        },
        "date": 1781945554415,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e3580aadecf8116309043eaa4d5f4b775712ad6f",
          "message": "refactor: split ci command extraction",
          "timestamp": "2026-06-20T10:53:24+02:00",
          "tree_id": "46e7b5ee9e1a78f43e8390ad6814362dbf5c8f8b",
          "url": "https://github.com/fallow-rs/fallow/commit/e3580aadecf8116309043eaa4d5f4b775712ad6f"
        },
        "date": 1781945683774,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b8170c2ac3ca29e25febb48a8d9be0543d40eb44",
          "message": "refactor: split pnpm catalog line scan",
          "timestamp": "2026-06-20T10:55:52+02:00",
          "tree_id": "b855585cfab2b0750bf6774675b90573cfcfa37d",
          "url": "https://github.com/fallow-rs/fallow/commit/b8170c2ac3ca29e25febb48a8d9be0543d40eb44"
        },
        "date": 1781945826985,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "890ff921c2418a58c859bd05b501eebce9631100",
          "message": "refactor: split churn git log parsing",
          "timestamp": "2026-06-20T10:59:46+02:00",
          "tree_id": "37d10608eacdb3ea880d6b0bb4e5d4e91c6c9894",
          "url": "https://github.com/fallow-rs/fallow/commit/890ff921c2418a58c859bd05b501eebce9631100"
        },
        "date": 1781946062287,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "512ba21ab9df2352f24d2ead1601a0cb64ed0737",
          "message": "refactor: split cached churn analysis",
          "timestamp": "2026-06-20T11:01:51+02:00",
          "tree_id": "59400636f713c30ab35b3226f33e4f670dd2c986",
          "url": "https://github.com/fallow-rs/fallow/commit/512ba21ab9df2352f24d2ead1601a0cb64ed0737"
        },
        "date": 1781946199808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "aca08587710d19d06771f112da63a5485e3c29f7",
          "message": "refactor: split tsconfig workspace collection",
          "timestamp": "2026-06-20T11:04:52+02:00",
          "tree_id": "932d2ce6cf2287fbd832705459870f429418d471",
          "url": "https://github.com/fallow-rs/fallow/commit/aca08587710d19d06771f112da63a5485e3c29f7"
        },
        "date": 1781946377622,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "42d6ea3e484e0913b496ff5483b46f7033cd2e4f",
          "message": "refactor: split shallow workspace traversal",
          "timestamp": "2026-06-20T11:07:11+02:00",
          "tree_id": "0065b13cbc20c054bdc910d85b45e2e6ebdc4358",
          "url": "https://github.com/fallow-rs/fallow/commit/42d6ea3e484e0913b496ff5483b46f7033cd2e4f"
        },
        "date": 1781946523643,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2ca638e13fc1541cd20f886591e0e3a19af1bc5a",
          "message": "refactor: split external plugin discovery",
          "timestamp": "2026-06-20T11:10:30+02:00",
          "tree_id": "1638b17f34d4adbf8fd52a6a860f94706ab4faa8",
          "url": "https://github.com/fallow-rs/fallow/commit/2ca638e13fc1541cd20f886591e0e3a19af1bc5a"
        },
        "date": 1781946714787,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "765e59f077f48e0fdb65e93b69a097b4b71d2b02",
          "message": "refactor: split external plugin file loading",
          "timestamp": "2026-06-20T11:12:16+02:00",
          "tree_id": "15da211549f550ae207d1afd1712afa8be6ea118",
          "url": "https://github.com/fallow-rs/fallow/commit/765e59f077f48e0fdb65e93b69a097b4b71d2b02"
        },
        "date": 1781946829155,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "bbfb3fcb64970a8d0a434841ddbba53b61be29eb",
          "message": "refactor: split churn file import folding",
          "timestamp": "2026-06-20T11:17:54+02:00",
          "tree_id": "b78cc819dd62db74ab1e9b1f17eaeff4694ee0f0",
          "url": "https://github.com/fallow-rs/fallow/commit/bbfb3fcb64970a8d0a434841ddbba53b61be29eb"
        },
        "date": 1781947157663,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2581bc7e0fc42859b84d013bdf43c845bb47db06",
          "message": "refactor: split changed file path filtering",
          "timestamp": "2026-06-20T11:22:00+02:00",
          "tree_id": "58701afac8da5adc0c6aa93c399ca2c1b86d5aff",
          "url": "https://github.com/fallow-rs/fallow/commit/2581bc7e0fc42859b84d013bdf43c845bb47db06"
        },
        "date": 1781947395818,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "766937d385795268deffd888aeca695c56caaf81",
          "message": "refactor: split boundary call scanning",
          "timestamp": "2026-06-20T11:24:19+02:00",
          "tree_id": "f29b863bb3e1e759d91a620ed075024a5ffe60fa",
          "url": "https://github.com/fallow-rs/fallow/commit/766937d385795268deffd888aeca695c56caaf81"
        },
        "date": 1781947539452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e52ae2dd339737f8e4f38cb487123050e70688ea",
          "message": "refactor: split mixed barrel classification",
          "timestamp": "2026-06-20T11:27:37+02:00",
          "tree_id": "3e8890163bfb3ee9b22277b0e577f8cd69b2aba7",
          "url": "https://github.com/fallow-rs/fallow/commit/e52ae2dd339737f8e4f38cb487123050e70688ea"
        },
        "date": 1781947746733,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "74468fe7c86535570d77df2937ca7c2c26ce8b91",
          "message": "refactor: split client leak emission",
          "timestamp": "2026-06-20T11:29:44+02:00",
          "tree_id": "7ef6a0334a17bb7e0033f93af49c03f1390f9dd8",
          "url": "https://github.com/fallow-rs/fallow/commit/74468fe7c86535570d77df2937ca7c2c26ce8b91"
        },
        "date": 1781947875985,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "235bbfcb3a09e6951fd0b654e12a0f2af1535fbf",
          "message": "refactor: split workspace plugin fast path",
          "timestamp": "2026-06-20T11:31:56+02:00",
          "tree_id": "b27e8d08193b76df79a1eb61f547a843eb1c0681",
          "url": "https://github.com/fallow-rs/fallow/commit/235bbfcb3a09e6951fd0b654e12a0f2af1535fbf"
        },
        "date": 1781948003759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a145b9396beebce87d3e4c44df1ac04237e8c7af",
          "message": "refactor: split root unused dependency scan",
          "timestamp": "2026-06-20T11:42:33+02:00",
          "tree_id": "a8181f00f966192ebd975736bd83ce63d8d0bd68",
          "url": "https://github.com/fallow-rs/fallow/commit/a145b9396beebce87d3e4c44df1ac04237e8c7af"
        },
        "date": 1781948679414,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "48ab37ffff16b61bfe7ef72842ab5468c8750fdd",
          "message": "refactor: split tainted sink matching",
          "timestamp": "2026-06-20T11:46:13+02:00",
          "tree_id": "c5884ee2fe56bcee65a5fc4b2b0a5ac7cb5fbaf2",
          "url": "https://github.com/fallow-rs/fallow/commit/48ab37ffff16b61bfe7ef72842ab5468c8750fdd"
        },
        "date": 1781948877439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "45010b550bdf8af1b5727f4351a1be3ad8a16cb7",
          "message": "refactor: split server action reclassification",
          "timestamp": "2026-06-20T11:50:19+02:00",
          "tree_id": "bca17ace1c30c31c13342b6781a7f69a2d845e03",
          "url": "https://github.com/fallow-rs/fallow/commit/45010b550bdf8af1b5727f4351a1be3ad8a16cb7"
        },
        "date": 1781949099248,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2c43844115098901019684487f2395c4f9394225",
          "message": "refactor: split rolling child extension",
          "timestamp": "2026-06-20T11:52:50+02:00",
          "tree_id": "99b85d904cd7ce6dec86460b15420274dc4c7f00",
          "url": "https://github.com/fallow-rs/fallow/commit/2c43844115098901019684487f2395c4f9394225"
        },
        "date": 1781949251048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9d890e248516d730b035a0aef636dd35fe68a470",
          "message": "refactor: split thin wrapper module scan",
          "timestamp": "2026-06-20T11:55:36+02:00",
          "tree_id": "c60f3b8b083192c6bc81c332a1b7f6c8baeead5f",
          "url": "https://github.com/fallow-rs/fallow/commit/9d890e248516d730b035a0aef636dd35fe68a470"
        },
        "date": 1781949412494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e827d3517a8f25ec04e26aa6284c84b8a1a94cd2",
          "message": "refactor: split vital signs module metrics",
          "timestamp": "2026-06-20T12:00:13+02:00",
          "tree_id": "8870483bbcffe29aa7e2bfc731cb3df9c4df4c3d",
          "url": "https://github.com/fallow-rs/fallow/commit/e827d3517a8f25ec04e26aa6284c84b8a1a94cd2"
        },
        "date": 1781949691424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "0ef619d64896d212c44aacb21a21639af7628fc8",
          "message": "refactor: split combined dupes setup",
          "timestamp": "2026-06-20T12:03:10+02:00",
          "tree_id": "e724c789dce2af3233fcee0cbf6c323705e606d2",
          "url": "https://github.com/fallow-rs/fallow/commit/0ef619d64896d212c44aacb21a21639af7628fc8"
        },
        "date": 1781949878259,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "64ead321071c8b461f7d479ab4a56f36eaa58ec1",
          "message": "refactor: split react prop module scan",
          "timestamp": "2026-06-20T12:06:20+02:00",
          "tree_id": "3dd7736f6903d3fe48f7af7b78c3eb505d76ec6f",
          "url": "https://github.com/fallow-rs/fallow/commit/64ead321071c8b461f7d479ab4a56f36eaa58ec1"
        },
        "date": 1781950069954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "8f24edd7475f0f23745839c9f50d829cadb58196",
          "message": "refactor: split angular input module scan",
          "timestamp": "2026-06-20T12:09:47+02:00",
          "tree_id": "82ca22d78ae3ed748798329f932827227fe54685",
          "url": "https://github.com/fallow-rs/fallow/commit/8f24edd7475f0f23745839c9f50d829cadb58196"
        },
        "date": 1781950273937,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e807a6750de0e9f3faf2969674137402be4ce3ce",
          "message": "refactor: split angular output module scan",
          "timestamp": "2026-06-20T12:11:59+02:00",
          "tree_id": "57e4872a22a51c2d452d5893676f083f5e625b00",
          "url": "https://github.com/fallow-rs/fallow/commit/e807a6750de0e9f3faf2969674137402be4ce3ce"
        },
        "date": 1781950398994,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b1b9db81153cacdc7c6781e5c0ba3178cbc6d085",
          "message": "refactor: split vue emit module scan",
          "timestamp": "2026-06-20T12:14:44+02:00",
          "tree_id": "f1e7728b87215eaa4da025de26dd769d0f655709",
          "url": "https://github.com/fallow-rs/fallow/commit/b1b9db81153cacdc7c6781e5c0ba3178cbc6d085"
        },
        "date": 1781950572233,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d7cb12b296dcf2e252fa479b8b19b49a4400dd36",
          "message": "refactor: split load data producer scan",
          "timestamp": "2026-06-20T12:16:53+02:00",
          "tree_id": "286bd0becbbca0dd51fea7d52aced612f7d3ba03",
          "url": "https://github.com/fallow-rs/fallow/commit/d7cb12b296dcf2e252fa479b8b19b49a4400dd36"
        },
        "date": 1781950697300,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3b6d31b954e1fd4dc739bb6b70f32e142334ce55",
          "message": "refactor: split dynamic segment conflict scan",
          "timestamp": "2026-06-20T12:18:56+02:00",
          "tree_id": "bd8f62bbbf1a4f4e92dba149406ea2ce4c2289e6",
          "url": "https://github.com/fallow-rs/fallow/commit/3b6d31b954e1fd4dc739bb6b70f32e142334ce55"
        },
        "date": 1781950819456,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "87439274b142ab6f4f9f58e41d7bc04122b17645",
          "message": "refactor: split invalid client export scan",
          "timestamp": "2026-06-20T12:20:50+02:00",
          "tree_id": "e6fde51666485ea6256dfc8ad274474c9056a095",
          "url": "https://github.com/fallow-rs/fallow/commit/87439274b142ab6f4f9f58e41d7bc04122b17645"
        },
        "date": 1781950936226,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d90ea931a452c2bc90acad4a8794e3a677c7c406",
          "message": "refactor: split inject finding construction",
          "timestamp": "2026-06-20T12:23:41+02:00",
          "tree_id": "d9d36463ec220803cb743b0ecb7fd71a0ff299bc",
          "url": "https://github.com/fallow-rs/fallow/commit/d90ea931a452c2bc90acad4a8794e3a677c7c406"
        },
        "date": 1781951101038,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "0c12f5ddbf87c2a768c2ee2aa44865d142407319",
          "message": "refactor: split angular unrendered emission",
          "timestamp": "2026-06-20T12:26:30+02:00",
          "tree_id": "2ca7e206911f9f60ed19e60e3e82efe4dce68c15",
          "url": "https://github.com/fallow-rs/fallow/commit/0c12f5ddbf87c2a768c2ee2aa44865d142407319"
        },
        "date": 1781951273954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "944d4207e5998f54c5a59cd807a8121fd8f08c47",
          "message": "refactor: split misplaced directive emission",
          "timestamp": "2026-06-20T12:29:11+02:00",
          "tree_id": "ea742aced9f5482227542f72e8d8684784586bef",
          "url": "https://github.com/fallow-rs/fallow/commit/944d4207e5998f54c5a59cd807a8121fd8f08c47"
        },
        "date": 1781951432425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "bfd96af68fde93e1be9a47924e74f36aef86fd37",
          "message": "refactor: split prop drilling state build",
          "timestamp": "2026-06-20T12:32:12+02:00",
          "tree_id": "7cd8597d0a683ea5535c536a76038d851a0babda",
          "url": "https://github.com/fallow-rs/fallow/commit/bfd96af68fde93e1be9a47924e74f36aef86fd37"
        },
        "date": 1781951617489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9a3595db940aa38fccb24b97432acdd290cadea6",
          "message": "refactor: split route collision buckets",
          "timestamp": "2026-06-20T12:34:16+02:00",
          "tree_id": "5171a63cffbbb50581746167289c71f14796a1de",
          "url": "https://github.com/fallow-rs/fallow/commit/9a3595db940aa38fccb24b97432acdd290cadea6"
        },
        "date": 1781951747397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b20308f0e3b36aa848aaec53ffea8f40608b54e5",
          "message": "refactor: split unused export finding build",
          "timestamp": "2026-06-20T12:36:50+02:00",
          "tree_id": "3212e80c06acbcf2384c4d721940bf0a23530c5d",
          "url": "https://github.com/fallow-rs/fallow/commit/b20308f0e3b36aa848aaec53ffea8f40608b54e5"
        },
        "date": 1781951896792,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b6b25e88339b4d039b2571119b9aec9bbd6033ae",
          "message": "refactor: split catalog consumer scan",
          "timestamp": "2026-06-20T12:41:55+02:00",
          "tree_id": "94ffdf1e922942bfa3bbb919f9608acf577b09ab",
          "url": "https://github.com/fallow-rs/fallow/commit/b6b25e88339b4d039b2571119b9aec9bbd6033ae"
        },
        "date": 1781952201723,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c2e36394ac33e4cda7693f468a2d3dfd720c9517",
          "message": "refactor: split render fan-in metric build",
          "timestamp": "2026-06-20T12:44:28+02:00",
          "tree_id": "ef5c37bde508b14afb2b0ec126a357d4e5cded47",
          "url": "https://github.com/fallow-rs/fallow/commit/c2e36394ac33e4cda7693f468a2d3dfd720c9517"
        },
        "date": 1781952351592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b467750f19c612a105322fb9a009518e59abf02b",
          "message": "refactor: share client server leak finding build",
          "timestamp": "2026-06-20T12:47:10+02:00",
          "tree_id": "e75f8e4dd54f0c7b108876375e07ee35eea02381",
          "url": "https://github.com/fallow-rs/fallow/commit/b467750f19c612a105322fb9a009518e59abf02b"
        },
        "date": 1781952510467,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9b346d48f3875c944faad00f33fd0f23081e9e37",
          "message": "refactor: split policy rule scoping",
          "timestamp": "2026-06-20T12:49:09+02:00",
          "tree_id": "23902436d48c6f6582229705a8e10d5f467a49e7",
          "url": "https://github.com/fallow-rs/fallow/commit/9b346d48f3875c944faad00f33fd0f23081e9e37"
        },
        "date": 1781952629464,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "15cb210d4f78506079613bd2bbb147b04e2ecfdb",
          "message": "refactor: split unlisted import site collection",
          "timestamp": "2026-06-20T12:50:48+02:00",
          "tree_id": "089261f185365ca4abfa1b0a62ebd0037db32a85",
          "url": "https://github.com/fallow-rs/fallow/commit/15cb210d4f78506079613bd2bbb147b04e2ecfdb"
        },
        "date": 1781952728846,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c3a58921aabd61ff0831d70f1ac70984cc5746ce",
          "message": "refactor: extract duplicate export union find",
          "timestamp": "2026-06-20T12:52:58+02:00",
          "tree_id": "c33994a70e1d10490a5e2dc84451599a9c6e0f6b",
          "url": "https://github.com/fallow-rs/fallow/commit/c3a58921aabd61ff0831d70f1ac70984cc5746ce"
        },
        "date": 1781952850459,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 27,
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
            "value": 398,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 991,
            "unit": "count"
          }
        ]
      }
    ]
  }
}