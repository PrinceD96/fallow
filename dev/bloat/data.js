window.BENCHMARK_DATA = {
  "lastUpdate": 1786172536713,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Fallow Binary Size": [
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
        "date": 1784004544996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 422083312,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18534816,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23813624,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34571480,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1784008181841,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 422078472,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18513056,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23791864,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34549720,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1784013110410,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 422078472,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18513056,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23791864,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34549720,
            "unit": "bytes"
          }
        ]
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
        "date": 1784022671656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 422692496,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18538400,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23827800,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34585272,
            "unit": "bytes"
          }
        ]
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
        "date": 1784034039729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423306576,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18567392,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23862200,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34618456,
            "unit": "bytes"
          }
        ]
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
        "date": 1784041077344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423514552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18607360,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23895672,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34662744,
            "unit": "bytes"
          }
        ]
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
        "date": 1784045091346,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423514552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18607360,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23895672,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34662744,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1784050427165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423515560,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18607168,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23895672,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34662936,
            "unit": "bytes"
          }
        ]
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
        "date": 1784052124004,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423515280,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18607552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23896056,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34663288,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1784057838944,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423515280,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18607552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23896056,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34663288,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1784061091948,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423023968,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18576384,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23874616,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34630872,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1784096927644,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423023968,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18576384,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23874616,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34630872,
            "unit": "bytes"
          }
        ]
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
        "date": 1784100380134,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423664256,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18576384,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23870968,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34652632,
            "unit": "bytes"
          }
        ]
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
          "id": "3ab6c16927f569c2df9455d0c393c5f66baf8b88",
          "message": "fix(cli): honor JSON style for schema commands\n\nSchema-oriented CLI commands now use the shared JSON presentation style, producing compact output by default while honoring `--pretty` for manual inspection.\n\nThe contract generator explicitly requests pretty output so committed schema artifacts remain reviewable and byte-stable. JSON values, field ordering, exit codes, and schema versions are unchanged.",
          "timestamp": "2026-07-15T11:56:01+02:00",
          "tree_id": "f6418489b00606b724db13231e9bc75e7aeb999f",
          "url": "https://github.com/fallow-rs/fallow/commit/3ab6c16927f569c2df9455d0c393c5f66baf8b88"
        },
        "date": 1784111205077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423930936,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18576192,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23871032,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34682328,
            "unit": "bytes"
          }
        ]
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
          "id": "a6c74e746d31b1821dae87247754e76aefb00bb8",
          "message": "fix: harden analysis and integration contracts\n\nHarden dependency attribution, CSS artifact reuse, Action input validation, and current-binary integration coverage across the GitHub Action and VS Code extension.\\n\\nAlign repository tooling and documentation contracts, and preserve parent dependency ownership for package-less TypeScript project references. The fallow fix promotion-race item remains out of scope.",
          "timestamp": "2026-07-15T13:43:28+02:00",
          "tree_id": "1f667074e29803c7a1e21258c9c1a4ca35aad006",
          "url": "https://github.com/fallow-rs/fallow/commit/a6c74e746d31b1821dae87247754e76aefb00bb8"
        },
        "date": 1784116744836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423835552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18577600,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23864440,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34664600,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "502e793f2fe86c35db582f2a4d181b5a3bc03000",
          "message": "test(audit): mirror production hashing in reusable-cache identity test\n\nThe Windows correctness gate failed on\nreusable_cache_identity_is_canonical_root_owned_and_sha_independent: the\ntest recomputed the expected cache identity from Path::canonicalize plus\nto_string_lossy bytes, which diverges from production on Windows. There,\nstd canonicalize keeps the \\\\?\\ verbatim prefix (production strips it via\ndunce) and the path identity is hashed as UTF-16LE bytes, not UTF-8, so\nboth the repo and root hashes differed.\n\nExpose canonical_root_hash and source the expected hashes from it, so the\nidentity assertion is reconstructed through the exact production code path\non every platform. No production behavior change.",
          "timestamp": "2026-07-15T18:51:49+02:00",
          "tree_id": "28e46fd142862ae943066d026ba3dbb76ecc93c2",
          "url": "https://github.com/fallow-rs/fallow/commit/502e793f2fe86c35db582f2a4d181b5a3bc03000"
        },
        "date": 1784135018921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423835552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18577600,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23864440,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34664600,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2fb4b7d3676f1800e5fbad5bb2ffbb5c07135ebf",
          "message": "test(audit): resolve integration cache paths via production hash\n\nThe Windows correctness gate failed on the audit-cache remove integration\ntests: audit_cache_paths recomputed the cache identity from\nPath::canonicalize + to_string_lossy bytes, which diverges from production\non Windows (std canonicalize keeps the \\\\?\\ verbatim prefix that production\nstrips via dunce, and the identity is hashed as UTF-16LE, not UTF-8). The\nfixtures then landed at paths the spawned binary never enumerated, so\nwould_remove was wrong and the lock-contention path reported success.\n\nRe-export canonical_root_hash and derive the fixture paths from it, matching\nthe exact hashing the binary uses on every platform.",
          "timestamp": "2026-07-15T19:07:45+02:00",
          "tree_id": "5057f610b15a34f838af21991359e9d46a1b586a",
          "url": "https://github.com/fallow-rs/fallow/commit/2fb4b7d3676f1800e5fbad5bb2ffbb5c07135ebf"
        },
        "date": 1784135893982,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423845536,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18577600,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23864440,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34664600,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "4e46717fc4b5822227380febf2955468e5473f83",
          "message": "fix(audit): silence Windows unnecessary_wraps on ownership no-op\n\nThe release-validation Windows Clippy job flagged\nclippy::unnecessary_wraps on the #[cfg(not(unix))] ensure_cache_entry_is_owned\nstub: it always returns Ok(()) because there is no POSIX owner to verify on\nnon-Unix. The io::Result signature must mirror the fallible Unix ownership\ncheck, so annotate the stub with #[expect(clippy::unnecessary_wraps)],\nmatching the sibling stubs in crates/engine/src/repo_refs.rs.",
          "timestamp": "2026-07-15T19:34:51+02:00",
          "tree_id": "dd7327aec050e87acb7f5c0dd63d50e2e2eb875c",
          "url": "https://github.com/fallow-rs/fallow/commit/4e46717fc4b5822227380febf2955468e5473f83"
        },
        "date": 1784137528616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423845536,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18577600,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23864440,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34664600,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "32b3f89fe28c286c85a6b0aed4ec5be120f54da6",
          "message": "chore: release v3.6.0",
          "timestamp": "2026-07-15T21:05:35+02:00",
          "tree_id": "b27c5cd01e55fb4e58e8182595d25eb44ca07f41",
          "url": "https://github.com/fallow-rs/fallow/commit/32b3f89fe28c286c85a6b0aed4ec5be120f54da6"
        },
        "date": 1784143129612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424287488,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18599680,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23887544,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34688856,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3d30c38a4a49ccb912174e22d674e19377ebf910",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.6.0",
          "timestamp": "2026-07-15T22:36:00+02:00",
          "tree_id": "2c22bdd157bf5bf49b96498bdb32f0faf9c1f7f4",
          "url": "https://github.com/fallow-rs/fallow/commit/3d30c38a4a49ccb912174e22d674e19377ebf910"
        },
        "date": 1784148498614,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424287488,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18599680,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23887544,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34688856,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "398af909d30e0c68541fa2c089da743b7b30dda2",
          "message": "docs: document the multicall crate in the project-structure map",
          "timestamp": "2026-07-16T14:33:43+02:00",
          "tree_id": "e43c65ed411a8a7830da2b897f363277bf40ed68",
          "url": "https://github.com/fallow-rs/fallow/commit/398af909d30e0c68541fa2c089da743b7b30dda2"
        },
        "date": 1784206089939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424281280,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18599680,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23887544,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34688792,
            "unit": "bytes"
          }
        ]
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
          "id": "979a5591649778f4cb9ca8e03f959b8552b6ea59",
          "message": "perf: queue re-export propagation work\n\nReplace repeated full re-export scans with a deterministic FIFO queue that revisits only propagation edges affected by newly added state. Differential tests preserve the legacy result and stable ordering.\n\nKeep termination protection operational by bounding synthetic-export states to modules that actually contain star re-exports. Benchmarks retain the measured improvement at both reviewed chain sizes.",
          "timestamp": "2026-07-16T15:26:24+02:00",
          "tree_id": "7e96607c3d4ec1cae42bcc22bab4bfcc5e14d6e3",
          "url": "https://github.com/fallow-rs/fallow/commit/979a5591649778f4cb9ca8e03f959b8552b6ea59"
        },
        "date": 1784209517168,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424382224,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18602240,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23889976,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34692568,
            "unit": "bytes"
          }
        ]
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
          "id": "fc632a1c2f2b57580bc0af8222038fe3b3cd1e53",
          "message": "fix: harden external input boundaries\n\nHarden external input boundaries before analysis: bound churn and diff reads, reject unsafe imported paths and aggregate overflow, and keep source and manifest symlink targets inside the configured project root. Oversized diffs continue with unfiltered reporting instead of truncated parsing.\n\nAdd focused regression coverage, real-repository probes, and Windows CI coverage for the platform-gated core symlink paths and all-target Clippy.",
          "timestamp": "2026-07-16T15:52:16+02:00",
          "tree_id": "2bd5478623b7cc405d91a7d073f9a2b1e2610db4",
          "url": "https://github.com/fallow-rs/fallow/commit/fc632a1c2f2b57580bc0af8222038fe3b3cd1e53"
        },
        "date": 1784210546432,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424537984,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18608752,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23902504,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34705032,
            "unit": "bytes"
          }
        ]
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
          "id": "6fbcd06f18ee0f2423fef4b4f5d63c92f54c4d6d",
          "message": "perf(analysis): harden super-linear paths found by the #1843 audit\n\nFollow-up to the #1843 taint-memory fix. Bounds or linearizes eight more paths with the same accumulator/scan pathology: duplicate-export and class-heritage grouping, star re-export propagation, object-binding and factory-return candidate caps, incremental JSDoc brace scanning, depth-guarded template and CSS-in-JS scanners (stack-overflow hardening), and linearized health-time line/mask scanners. Behavior-preserving on ordinary code (verified byte-identical old-vs-new across the fixture corpus). CACHE_VERSION 236 to 237 for the candidate caps.\n\nFollow-up to #1843.",
          "timestamp": "2026-07-20T00:35:50+02:00",
          "tree_id": "877ff829d7479d2103da37820e88ae78c8ca7e98",
          "url": "https://github.com/fallow-rs/fallow/commit/6fbcd06f18ee0f2423fef4b4f5d63c92f54c4d6d"
        },
        "date": 1784501308853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424646584,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18613392,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23907464,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34709992,
            "unit": "bytes"
          }
        ]
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
          "id": "2f65edb595df848573d94fbec0125513a30cd466",
          "message": "perf(extract): bound the object-binding resolver on minified bundles (#1843)\n\nThe object-binding member-resolution fixed-point blew up on a real 2 MB minified vendor bundle full of nested object maps (>90s parse). Bounded three ways: an ancestor-prefix index makes copy_nested O(matches); a size cap (8192) stops the fixed-point from multiplying binding_target_names; and a pass cap (8) stops it running candidate-count passes. Byte-identical on ordinary code (over-cap files degrade to a false negative). The 2 MB bundle now analyzes in ~0.2s. CACHE_VERSION 237 to 238.\n\nFollow-up to #1843.",
          "timestamp": "2026-07-20T01:41:02+02:00",
          "tree_id": "533e3831f73940113352df8fa9302052f2efd5a6",
          "url": "https://github.com/fallow-rs/fallow/commit/2f65edb595df848573d94fbec0125513a30cd466"
        },
        "date": 1784505119713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424723088,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18618800,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23912776,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34715272,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d9937cde797ecea0cd015ddacedd58a2fd867071",
          "message": "chore: release v3.7.0",
          "timestamp": "2026-07-20T08:43:24+02:00",
          "tree_id": "bce3fd11936daa8818656b2eb8dd3d83dfb77156",
          "url": "https://github.com/fallow-rs/fallow/commit/d9937cde797ecea0cd015ddacedd58a2fd867071"
        },
        "date": 1784530477044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424258448,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18618800,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23912968,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34715400,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e96d32efc7c124aeae8da4b399cbb1a9a56fc906",
          "message": "perf(graph): elide per-name synthetic-export scan on star re-export synthesis path\n\n`matching_synthetic_export_index` did an O(source_exports) `.position()` scan\nper re-exported name on the star re-export synthesis path (both call sites in\n`ensure_matching_star_exports`), giving O(names x source_exports) on a wide\nvalue+type merge barrel.\n\nReplace it with `synthesize_and_locate_star_export`: the branch only runs when\nthe source carries no earlier `Named(name)` export of that type-ness (otherwise\n`build_named_export_index` would have populated the index and skipped it) and\n`name` is never `default` (filtered upstream in `apply_star_refs_to_source`), so\na freshly appended stub at `exports.len() - 1` is the unique first match. The\npositional scan is retained as a defensive fallback for the currently-unreachable\n`default` / non-appending cases, so output is byte-identical.\n\nFollow-up to #1843 / #1914. Closes #1916.",
          "timestamp": "2026-07-20T09:42:02+02:00",
          "tree_id": "3864b9c0d8bbc11d1510834e72a8608c94c786bd",
          "url": "https://github.com/fallow-rs/fallow/commit/e96d32efc7c124aeae8da4b399cbb1a9a56fc906"
        },
        "date": 1784534021905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424264192,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18617968,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23912200,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34714568,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "dbae50c8da7012a71ae84c7b1ae7582311390efe",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.7.0",
          "timestamp": "2026-07-20T10:08:41+02:00",
          "tree_id": "a9bcf8d24bd7eb11b679ec9d6b09a0ea96b42945",
          "url": "https://github.com/fallow-rs/fallow/commit/dbae50c8da7012a71ae84c7b1ae7582311390efe"
        },
        "date": 1784535531894,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424264192,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18617968,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23912200,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34714568,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e20398e0809c10d47a46af8a351cdcef12d40285",
          "message": "fix(napi): restore @emnapi lockfile entries for cross-platform npm ci",
          "timestamp": "2026-07-20T10:26:26+02:00",
          "tree_id": "1cba20c4652fad2f21bc72491afc5bfe6ea2f9ba",
          "url": "https://github.com/fallow-rs/fallow/commit/e20398e0809c10d47a46af8a351cdcef12d40285"
        },
        "date": 1784536582827,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424264192,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18617968,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23912200,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34714568,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "124ad5cc84484f890cfd728240d6688d3b68df4d",
          "message": "fix(napi): bump lockfile fallow-node entries to v3.7.0",
          "timestamp": "2026-07-20T10:39:44+02:00",
          "tree_id": "03383d1f3a4318f706631c9828073077f8e936c7",
          "url": "https://github.com/fallow-rs/fallow/commit/124ad5cc84484f890cfd728240d6688d3b68df4d"
        },
        "date": 1784537510661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424264192,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18617968,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23912200,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34714568,
            "unit": "bytes"
          }
        ]
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
          "id": "dacea3780abcf5e2c5d98ac208a88a4cdeb3529e",
          "message": "fix: inherited-member (#1910) and tsconfig-alias (#1911) false positives\n\nTwo dead-code false-positive fixes: credit members reached through an inherited/generic base-class property (#1910), and activate the TypeScript plugin on tsconfig presence so paths aliases are not misreported as unlisted dependencies (#1911).\n\nCloses #1910\nCloses #1911",
          "timestamp": "2026-07-20T09:21:52Z",
          "tree_id": "430b7bd8dde924b133675adce583910e58523691",
          "url": "https://github.com/fallow-rs/fallow/commit/dacea3780abcf5e2c5d98ac208a88a4cdeb3529e"
        },
        "date": 1784540135840,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 424890816,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18651520,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23945288,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34748424,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5988b978230134388b89060a39707a501211085a",
          "message": "chore: release v3.7.1",
          "timestamp": "2026-07-20T12:27:48+02:00",
          "tree_id": "2a8eb4aaa7cf4312714172670cd945dcd733705e",
          "url": "https://github.com/fallow-rs/fallow/commit/5988b978230134388b89060a39707a501211085a"
        },
        "date": 1784544013703,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 425405360,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18651648,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23945416,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34748424,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2e7d5bdc0e9b0fa564b7f98f7ce6b9b07e361f9e",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.7.1",
          "timestamp": "2026-07-20T13:53:45+02:00",
          "tree_id": "e7f3c47ed6d7bac7b84ccf92a1b8f43481579f06",
          "url": "https://github.com/fallow-rs/fallow/commit/2e7d5bdc0e9b0fa564b7f98f7ce6b9b07e361f9e"
        },
        "date": 1784549138847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 425405360,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18651648,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23945416,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34748424,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "443638cb2a7135230a5768ebc98948c87f87db0f",
          "message": "docs(changelog): move the fallow viz entry to Unreleased\n\nThe viz feature squash-merged while v3.7.0 was freshly cut, so the server-side\n3-way merge anchored its CHANGELOG entry inside the released 3.7.0 section even\nthough that binary does not contain viz. Move it under [Unreleased]. Also\nclarify the object-binding termination test comment to name the resolver's\nper-module caps (main's #1843 breadth and size caps) instead of the depth cap\nthis branch's now-superseded fix used.",
          "timestamp": "2026-07-21T11:39:34+02:00",
          "tree_id": "719fabeb50978ab23f43135eaf897a5ba37c09e7",
          "url": "https://github.com/fallow-rs/fallow/commit/443638cb2a7135230a5768ebc98948c87f87db0f"
        },
        "date": 1784627947441,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 427623816,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18651648,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23945608,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 35150440,
            "unit": "bytes"
          }
        ]
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
          "id": "5184b9d74d2ede605538a96f1bae9ec0edaf73e3",
          "message": "fix: resolve audit and analysis improvement findings\n\nImprove inherited member and alias resolution, audit comparison context, styling attribution, and annotation safety across CLI, API, MCP, CI, and editor surfaces.\n\nReuse shared repository context for audit attribution and base snapshots, and reduce clone-family and warm CSS analysis overhead without changing stable output contracts. Preserve the existing CSS benchmark workload and track the heavier many-file workload separately.\n\nRefresh dependency coverage and invalidate affected extraction and audit caches.",
          "timestamp": "2026-07-22T10:13:36+02:00",
          "tree_id": "29fab722dabc0865d6662233b000dddb805f52df",
          "url": "https://github.com/fallow-rs/fallow/commit/5184b9d74d2ede605538a96f1bae9ec0edaf73e3"
        },
        "date": 1784709505016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 428675568,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18677120,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24011960,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 35209448,
            "unit": "bytes"
          }
        ]
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
          "id": "31e30337a694755e762c93d7b627d3aea97c1de9",
          "message": "chore(deps): update Cargo lockfile dependencies\n\nUpdate regex, toml, toml_edit, and indicatif to their latest compatible releases after GitHub's Dependabot Cargo updater failed while generating the lockfile changes.\n\nInclude the compatible transitive lockfile updates selected by Cargo's resolver.",
          "timestamp": "2026-07-22T12:03:36+02:00",
          "tree_id": "367005f1de267fe92702134bd218b7478d4c6773",
          "url": "https://github.com/fallow-rs/fallow/commit/31e30337a694755e762c93d7b627d3aea97c1de9"
        },
        "date": 1784716979621,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 428315472,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18679296,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24014808,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 35211752,
            "unit": "bytes"
          }
        ]
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
          "id": "a4474ddd16488a27aee1e515e6f40e45c516f513",
          "message": "refactor: narrow internal Rust visibility with Hawk\n\nApply Hawk's lint-clean visibility reductions across internal Rust modules while preserving supported contract crates and externally compiled benchmark surfaces.\n\nKeep dead-public deletion out of scope until Hawk exposes stable cross-target identities, and align rustdoc with the narrower module boundaries.",
          "timestamp": "2026-07-22T13:02:02+02:00",
          "tree_id": "0b77dfec341fc8433b5835a7d2095be8925de35a",
          "url": "https://github.com/fallow-rs/fallow/commit/a4474ddd16488a27aee1e515e6f40e45c516f513"
        },
        "date": 1784720173258,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 453781016,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18584880,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23845304,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34925928,
            "unit": "bytes"
          }
        ]
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
          "id": "73cc071cf4d346cfc867e9270fc726a1e9977f8b",
          "message": "fix: credit Next.js fallback metadata exports\n\nNext.js resolves metadata and viewport exports from App Router fallback modules. Credit those framework-consumed exports for not-found, default, forbidden, unauthorized, and root global-not-found files while leaving unsupported special files and arbitrary helpers reportable.\n\nAdd exact plugin and integration coverage for static and generated forms, plus negative controls that preserve unused-export precision.\n\nFixes #1987.",
          "timestamp": "2026-07-22T16:21:32+02:00",
          "tree_id": "e0c96fb111ba5451a29f575ef613f280b8e311f9",
          "url": "https://github.com/fallow-rs/fallow/commit/73cc071cf4d346cfc867e9270fc726a1e9977f8b"
        },
        "date": 1784730809537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 453781048,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18584912,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23845336,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34925960,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "85f36fcdf367ea349cb77b6f647f7ae24e755236",
          "message": "chore: release v3.8.0",
          "timestamp": "2026-07-22T17:08:05+02:00",
          "tree_id": "99667e89bdc6e3390f7dd3e630c015a1d41334fa",
          "url": "https://github.com/fallow-rs/fallow/commit/85f36fcdf367ea349cb77b6f647f7ae24e755236"
        },
        "date": 1784733756769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 453724664,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18576912,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23836888,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34917320,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2f632e879b550d333df14dfae1ec50490f99a07d",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.8.0",
          "timestamp": "2026-07-22T18:20:56+02:00",
          "tree_id": "e1029e15210b9263478b4e4b892596fddc327fce",
          "url": "https://github.com/fallow-rs/fallow/commit/2f632e879b550d333df14dfae1ec50490f99a07d"
        },
        "date": 1784738173186,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 453724664,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18576912,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23836888,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34917320,
            "unit": "bytes"
          }
        ]
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
          "id": "2a85bcce4e5ae2df6ff4a3ab0550e5a5bf71d118",
          "message": "fix: preserve cloud runtime actionability\n\nPreserve the cloud runtime-context actionability decision, evidence reason, verdict, and deployment provenance in cloud analysis output.\n\nOlder cloud responses keep the existing tracked-function fallback. Repository self-audit also excludes the bundled comparison fixtures it should not treat as product source.",
          "timestamp": "2026-07-23T13:45:02+02:00",
          "tree_id": "dbb8600b33891813d461a24c30f955480a920dec",
          "url": "https://github.com/fallow-rs/fallow/commit/2a85bcce4e5ae2df6ff4a3ab0550e5a5bf71d118"
        },
        "date": 1784807807962,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 453858200,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18576912,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23836888,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34928648,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "69be8fc7a004f28e7a43e3ed3d9ad3eb64b962f7",
          "message": "chore: release v3.8.1",
          "timestamp": "2026-07-23T15:07:31+02:00",
          "tree_id": "08640f77484c57a195e14940f1dbb8ce096343df",
          "url": "https://github.com/fallow-rs/fallow/commit/69be8fc7a004f28e7a43e3ed3d9ad3eb64b962f7"
        },
        "date": 1784812923938,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 454589920,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18585552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23846296,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34939144,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "f2561ae8d7e7b3a4b602f8056a9531ce76e6ebf7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.8.1",
          "timestamp": "2026-07-23T16:53:11+02:00",
          "tree_id": "84fbfbf791f4d366d4c0389a2d7615ff5f826c0f",
          "url": "https://github.com/fallow-rs/fallow/commit/f2561ae8d7e7b3a4b602f8056a9531ce76e6ebf7"
        },
        "date": 1784819172247,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 454589920,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18585552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23846296,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34939144,
            "unit": "bytes"
          }
        ]
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
          "id": "faf2b968cfd44d94b34146575b853d64510f0aae",
          "message": "fix: preserve cloud never-called confidence\n\nPreserve the Cloud provenance that distinguishes runtime-observed never-called functions from inventory backfill.\n\nKeep inventory-backed, missing, and future provenance conservative. Only runtime-observed evidence can retain the existing high-confidence deletion recommendation.",
          "timestamp": "2026-07-23T19:17:09+02:00",
          "tree_id": "e5fddc0e980063a53dc7f59c72d193950bc73a9d",
          "url": "https://github.com/fallow-rs/fallow/commit/faf2b968cfd44d94b34146575b853d64510f0aae"
        },
        "date": 1784827632299,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 454610416,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18585552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23846296,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34940584,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ddbdaa94e3dadb5bf39914d17ddf100bdcc38c07",
          "message": "docs: harden maintainer knowledge architecture",
          "timestamp": "2026-07-23T22:40:55+02:00",
          "tree_id": "57260586ef2df0e5cf5a10ed16b78036e2132b22",
          "url": "https://github.com/fallow-rs/fallow/commit/ddbdaa94e3dadb5bf39914d17ddf100bdcc38c07"
        },
        "date": 1784840007721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 454610416,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18585552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23846296,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34940584,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": false,
          "id": "3925887ede0b710c855a60d1a5a48e215593360b",
          "message": "docs: complete unreleased changelog",
          "timestamp": "2026-07-23T23:01:37+02:00",
          "tree_id": "9f549f91c275ee3116a72e9721ced17dcca9f9f1",
          "url": "https://github.com/fallow-rs/fallow/commit/3925887ede0b710c855a60d1a5a48e215593360b"
        },
        "date": 1784842156807,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 454674424,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18585552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23846296,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34946312,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b9f65158db327fba64d2bad2ebb216c1e4bb4693",
          "message": "chore: release v3.9.0",
          "timestamp": "2026-07-23T23:35:52+02:00",
          "tree_id": "30f8f746d0053f3a648f8ec516604b605572a26b",
          "url": "https://github.com/fallow-rs/fallow/commit/b9f65158db327fba64d2bad2ebb216c1e4bb4693"
        },
        "date": 1784843719680,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 454695128,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18577552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23838808,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34938632,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3f6d4a5f817525d322365d64953940ff47175bf2",
          "message": "chore: release v3.9.1",
          "timestamp": "2026-07-24T00:01:26+02:00",
          "tree_id": "b65b4e0cfd7b53c4e78d3e744f2656632ffc91b1",
          "url": "https://github.com/fallow-rs/fallow/commit/3f6d4a5f817525d322365d64953940ff47175bf2"
        },
        "date": 1784845164095,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 453951616,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18607120,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23867800,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34967880,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bartwaardenburg@gmail.com",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "1548c96af4d6675a0a8488d7e0690fcc07f4413c",
          "message": "fix: validate Impact statusline flags",
          "timestamp": "2026-07-24T00:38:29+02:00",
          "tree_id": "d420bbd1259a67fbbe665d24342ae26a8699d078",
          "url": "https://github.com/fallow-rs/fallow/commit/1548c96af4d6675a0a8488d7e0690fcc07f4413c"
        },
        "date": 1784847045566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 453951528,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18607120,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23867800,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34967880,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "45f1642a21b049771ecf54fb92133dda4ce0c1fe",
          "message": "chore(docker): pin FALLOW_VERSION 3.9.1 with refreshed checksums",
          "timestamp": "2026-07-24T01:22:42+02:00",
          "tree_id": "73bee3e92aa4e7f1025a39dade93875c9ed4741d",
          "url": "https://github.com/fallow-rs/fallow/commit/45f1642a21b049771ecf54fb92133dda4ce0c1fe"
        },
        "date": 1784849706583,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 453951528,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18607120,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23867800,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34967880,
            "unit": "bytes"
          }
        ]
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
          "id": "20972d541b1deadad79108d780ffae6fd9c48163",
          "message": "feat: add stable type-aware TypeScript analysis\n\n* chore: open type-aware proof of concept branch\n\n* feat: prototype type-aware class member refinement\n\n* fix: harden type-aware proof of concept\n\n* fix: cover type-aware sidecar in git hook\n\n* fix: keep unpublished flags out of agent docs\n\n* feat: mature type-aware class member refinement\n\n* fix: harden type-aware refinement gates\n\n* test: isolate case-sensitive sidecar projects\n\n* fix: satisfy Windows process tree lint\n\n* fix: harden type-aware release evidence\n\n* fix: defer type-aware corpus dependencies\n\n* test: isolate optional sidecar dependencies\n\n* feat: add project-wide type-aware analysis\n\n* test: cover type-aware protocol adapter\n\n* fix: apply type-aware API surface results\n\n* feat: complete type-aware analysis integration\n\n* fix: make type-aware CI dependencies explicit\n\n* feat: expand type-aware semantic analysis\n\n* feat: refine type-aware unused exports\n\n* fix: update vulnerable VS Code dependency\n\n* fix: harden type-aware export evidence\n\n* refactor: stabilize type-aware architecture\n\n* perf: benchmark type-aware cold and warm paths\n\n* fix: await instrumented type-aware benchmarks\n\n* fix: use supported CodSpeed walltime runner\n\n* fix: run type-aware walltime on available runner\n\n* feat: recommend type-aware analysis for TypeScript\n\n* fix(ci): verify branded PR comment author",
          "timestamp": "2026-07-27T12:30:03+02:00",
          "tree_id": "8d29e98abd6ab9eb32502f7ac2f06c942c1b26fd",
          "url": "https://github.com/fallow-rs/fallow/commit/20972d541b1deadad79108d780ffae6fd9c48163"
        },
        "date": 1785148929384,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 480577304,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19260624,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24535304,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36868584,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9746941c8cdc6cea9e287245bd46e54963c203f6",
          "message": "chore: release v3.10.0",
          "timestamp": "2026-07-27T13:12:14+02:00",
          "tree_id": "7ac54040090a916b3f8961fb88cd1f083a3864a7",
          "url": "https://github.com/fallow-rs/fallow/commit/9746941c8cdc6cea9e287245bd46e54963c203f6"
        },
        "date": 1785151413516,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481176280,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19252688,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24531976,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36860968,
            "unit": "bytes"
          }
        ]
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
          "id": "ac87521aae348889b4aa8d7826d7fdd0fdf06f7b",
          "message": "fix: add breathing room to Fallow icons\n\n* chore: prepare icon breathing room update\n\n* fix: add breathing room to Fallow icons",
          "timestamp": "2026-07-27T13:47:15+02:00",
          "tree_id": "4f8bdfe262c925df0e1e7aeaa595b4d503d689a1",
          "url": "https://github.com/fallow-rs/fallow/commit/ac87521aae348889b4aa8d7826d7fdd0fdf06f7b"
        },
        "date": 1785153495627,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481176280,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19252688,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24531976,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36860968,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9b26c3a21ea6d2f15ccd21492408d36bd56406e3",
          "message": "test: stabilize Windows sidecar validation",
          "timestamp": "2026-07-27T16:26:14+02:00",
          "tree_id": "81749f10c5dde42bea7006090b13aa6925d66cba",
          "url": "https://github.com/fallow-rs/fallow/commit/9b26c3a21ea6d2f15ccd21492408d36bd56406e3"
        },
        "date": 1785163038144,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481176280,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19252688,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24531976,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36860968,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c151c4ef468487308c62a8202e92fb1f07932dd6",
          "message": "fix: make type-aware release validation portable",
          "timestamp": "2026-07-27T17:04:09+02:00",
          "tree_id": "8b0bc9c95d042081217951e9e5e966e7b3a5e663",
          "url": "https://github.com/fallow-rs/fallow/commit/c151c4ef468487308c62a8202e92fb1f07932dd6"
        },
        "date": 1785165317888,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481176280,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19252688,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24531976,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36860968,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "1142d229914e21b25dba587d48983ecd6fb06fd4",
          "message": "test: expose type-aware CLI failure output",
          "timestamp": "2026-07-27T17:18:35+02:00",
          "tree_id": "912e7f901b1fe3b530d441ac2cc9d2d6596aedbe",
          "url": "https://github.com/fallow-rs/fallow/commit/1142d229914e21b25dba587d48983ecd6fb06fd4"
        },
        "date": 1785166637854,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481176280,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19252688,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24531976,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36860968,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7667b6ab3b9987ab6f254947d0a005a4f6e0355a",
          "message": "test: share type-aware sidecar launcher",
          "timestamp": "2026-07-27T17:51:31+02:00",
          "tree_id": "0fc4f74b2b4d8b428d4f3570e150ea7bf83c1637",
          "url": "https://github.com/fallow-rs/fallow/commit/7667b6ab3b9987ab6f254947d0a005a4f6e0355a"
        },
        "date": 1785168624788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481177344,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19252752,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24532040,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36860840,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "28810138faa8fdbc830b8d585d0c15d65c39c3fd",
          "message": "test: scope process lint expectation to Unix",
          "timestamp": "2026-07-27T18:36:55+02:00",
          "tree_id": "81f7a366361951493117f4736d3a811d6effdf83",
          "url": "https://github.com/fallow-rs/fallow/commit/28810138faa8fdbc830b8d585d0c15d65c39c3fd"
        },
        "date": 1785170847246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481616968,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19267952,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24549896,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36883144,
            "unit": "bytes"
          }
        ]
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
          "id": "a8e0a2bb3611219c9a77a13324de38e25f93e421",
          "message": "fix(plugins): close config-extraction and dependency-crediting gaps\n\nWrapper calls were scanned for the first object literal at any argument position, so a wrapper's own options object shadowed the config whenever the config arrived as an identifier or a nested call, which is the shape the @sentry/nextjs wizard emits. Config callbacks were searched for a return only among top-level statements, so the mode-branching shape Vite documents extracted nothing. Vite and Vitest also load .cts and .cjs configs, which were not enumerated.\n\nAlongside those: the fully qualified `jest-environment-jsdom` now gets the same optional-peer credit as the bare name, `edge-runtime` credits `@edge-runtime/vm` instead of two names that do not exist, and scoped eslint formatters such as `@microsoft/eslint-formatter-sarif` are no longer mistaken for file paths.\n\nEvery change is paired with a negative case, and a real-project probe holds at 752 issues with all seven genuine unused dependencies still reported.\n\nAdmin merge: the only failing check is CodSpeed Performance Analysis, which reports an internal error while processing the run's data. Every benchmark job in the workflow itself succeeded, and analysis timing on a real project is unchanged (101-167ms against a 156ms baseline).",
          "timestamp": "2026-07-27T20:42:40+02:00",
          "tree_id": "5a47dbd4e0169278059c4a2b7f0a79cd42821a66",
          "url": "https://github.com/fallow-rs/fallow/commit/a8e0a2bb3611219c9a77a13324de38e25f93e421"
        },
        "date": 1785178576188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481659848,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19270192,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24552072,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36885448,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "722e4a64347f3c7c544df5084ce9211b2aa18d25",
          "message": "chore(napi): refresh 3.10.0 lockfile after publish",
          "timestamp": "2026-07-27T21:01:11+02:00",
          "tree_id": "d2da57f724338c0b0a8278f3bdab4b1706403c63",
          "url": "https://github.com/fallow-rs/fallow/commit/722e4a64347f3c7c544df5084ce9211b2aa18d25"
        },
        "date": 1785179527148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481659848,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19270192,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24552072,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36885448,
            "unit": "bytes"
          }
        ]
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
          "id": "52732287e06d6ca4886ec548c7686b7563724943",
          "message": "fix(brand): tighten standalone icon safe area",
          "timestamp": "2026-07-27T19:43:09Z",
          "tree_id": "b9374c05679fd87b6e32abc8d8c77bd9031a3985",
          "url": "https://github.com/fallow-rs/fallow/commit/52732287e06d6ca4886ec548c7686b7563724943"
        },
        "date": 1785182142765,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481669904,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19271024,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24552904,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36886280,
            "unit": "bytes"
          }
        ]
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
          "id": "2ffd3a327285b23e4163bd8b867d8b784a5d7f4e",
          "message": "fix: make report favicon edge to edge",
          "timestamp": "2026-07-27T21:44:29Z",
          "tree_id": "d37f37a0852463ca65cd18423f1e07e1d6eb10f6",
          "url": "https://github.com/fallow-rs/fallow/commit/2ffd3a327285b23e4163bd8b867d8b784a5d7f4e"
        },
        "date": 1785189358452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481669904,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19271024,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24552904,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36886280,
            "unit": "bytes"
          }
        ]
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
          "id": "e0ae72ba0344f3ab2cf9daa555463f5229672ca7",
          "message": "feat(plugins): parse nx.json and .releaserc.json, credit lightningcss and folded CI runs\n\nNx and semantic-release both listed a config file for activation but not for parsing, so it was protected from unused-file reporting while everything it declared stayed invisible. nx.json now yields its plugins, targetDefaults executors and task runners; .releaserc.json joins the JS forms already parsed, while the YAML forms and the extensionless variant stay activation-only because the extractor is a JS/JSON parser.\n\nVite ships the lightningcss integration but not the package, so css.transformer or build.cssMinify selecting it makes the dependency load-bearing with no import anywhere.\n\nThe CI scanner recognized only the literal block scalar, so a folded 'run: >' pushed the string '>' as the command and discarded the actual script.\n\nAn empty ignoreFindings pattern is also no longer a hard config-load failure: ignorePatterns already accepts it, and the error message named a negation the pattern does not contain.\n\nEach fix carries a negative control, and the real-project probe holds at 752 issues with all seven genuine unused dependencies still reported.\n\nCloses #2015",
          "timestamp": "2026-07-28T00:43:49+02:00",
          "tree_id": "9ad7d9b47329ee4a3067d16aceabc0bfd555e1b3",
          "url": "https://github.com/fallow-rs/fallow/commit/e0ae72ba0344f3ab2cf9daa555463f5229672ca7"
        },
        "date": 1785192905281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481730808,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19274128,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24556072,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36889384,
            "unit": "bytes"
          }
        ]
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
          "id": "55944e88c96fe0cc60679470781808977fd1e0fc",
          "message": "fix(dupes): apply the duplication threshold gate to standalone runs\n\nStandalone `fallow dupes` rendered through `print_dupes_result_with_grouping`,\nwhich returned the renderer's exit code without ever consulting\n`exceeds_threshold`. The gate lived only in `print_dupes_result`, which\nstandalone runs no longer call after the grouping refactor, so\n`fallow dupes --threshold 1` exited 0 at 100% duplication and printed no\ndiagnostic. Both the `--threshold` flag and a `duplicates.threshold` config\nvalue were affected, in every output format. Combined mode (bare `fallow`)\nrendered through the second, near-identical function that did gate, so the two\nentry points disagreed.\n\nThe two renderers differed only in `group_by`, which `print_dupes_result`\nalready passed as `None`. That duplication is what let the gate drift out of\none copy, so they are collapsed into one: `print_dupes_result` delegates and\nthe gate moves onto the single shared renderer. The source diff is\nnet-negative. New coverage in `crates/cli/tests/dupes_tests.rs` exercises the\nflag path, the config path, and the output formats, each with a\nbelow-threshold control so it cannot pass vacuously. The existing\n`exit_code_tests` case asserted `code == 0 || code == 1`, true of any\nnon-crashing run, and was named for `--fail-on-issues`, which `fallow dupes`\ndoes not wire. It is renamed to `dupes_threshold_exits_1_with_clones`, asserts\nthe exit code exactly, and carries a comment recording why the inert flag is\nabsent. Wiring `--fail-on-issues` for dupes is a separate behaviour change and\nis out of scope here.\n\nProjects that set a duplication threshold and were silently passing will start\nfailing as documented. Runs that set no threshold are unaffected, since the\ndefault (`0`) still means no limit.\n\nFixes #2009.",
          "timestamp": "2026-07-28T02:37:53+02:00",
          "tree_id": "dc0a7a43d729e195b937921a821d25263be28584",
          "url": "https://github.com/fallow-rs/fallow/commit/55944e88c96fe0cc60679470781808977fd1e0fc"
        },
        "date": 1785199818297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481726728,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19274128,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24556072,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36888872,
            "unit": "bytes"
          }
        ]
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
          "id": "1e39ca6da3fe60a19b9ea64f7778d10be204f49c",
          "message": "docs(migrate): state that ignoreFindings is narrower than knip ignore (#2056)\n\nknip's ignore suppresses every issue whose file path matches, including dependency and manifest issues. fallow's ignoreFindings only hides findings a matching source file owns, so a migrated config silently narrows the semantics.\n\nfallow migrate now prints one note about that scope difference for every knip migration, not only when ignore was present. The generated config and the exit codes are unchanged.\n\nFixes #2017",
          "timestamp": "2026-07-28T16:02:49+02:00",
          "tree_id": "c42a71ded879dabba87ef13a1678c2369f26daa1",
          "url": "https://github.com/fallow-rs/fallow/commit/1e39ca6da3fe60a19b9ea64f7778d10be204f49c"
        },
        "date": 1785252088152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481728128,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19274128,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24556072,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36889288,
            "unit": "bytes"
          }
        ]
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
          "id": "fcd09f24f768d522e455363ca85713e6df72b6c1",
          "message": "fix(audit): label empty boundary-zone warnings from the base revision (#2055)\n\n`fallow audit --base` analyzes the base revision in an isolated worktree. A boundary zone whose files only exist in the working tree matched nothing there and produced the same unqualified `boundary zone ... matched 0 reachable files` warning used for the working tree, which read as a broken current configuration.\n\nThe base pass now prefixes the warning with `base revision snapshot (audit --base)` and states that the finding is about the base revision only. The working-tree warning, all output formats, and exit codes are unchanged.\n\nCloses #2013",
          "timestamp": "2026-07-28T18:24:53+02:00",
          "tree_id": "d1d5bc745bd91424baaf1385ef18fc60514f063f",
          "url": "https://github.com/fallow-rs/fallow/commit/fcd09f24f768d522e455363ca85713e6df72b6c1"
        },
        "date": 1785258020447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481686104,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19282320,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24563880,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36901992,
            "unit": "bytes"
          }
        ]
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
          "id": "8522c08fb87a482adefab47355d39cdc0be4b001",
          "message": "feat(plugins): drive config-value dependency credits from a catalogue (#2059)\n\nThree hardcoded arms credited packages named by a config value: jsdom's optional peer canvas, vitest's edge-runtime peer, and vite's lightningcss.\n\nThey now read from crates/core/data/config_value_credits.toml, embedded and parsed once like tooling.toml, keyed on (surface, value) -> credits. Adding a rule for an existing surface is a one-entry data change. An unknown surface, unknown field, empty value or credit, or duplicate row fails the catalogue parse loudly.\n\nBehavior is unchanged for the three migrated cases.\n\nFixes #2018",
          "timestamp": "2026-07-28T19:34:24+02:00",
          "tree_id": "4790a7520c6bf72979424b8574d27dd75e839287",
          "url": "https://github.com/fallow-rs/fallow/commit/8522c08fb87a482adefab47355d39cdc0be4b001"
        },
        "date": 1785260919198,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481699776,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19320016,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24596424,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36935304,
            "unit": "bytes"
          }
        ]
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
          "id": "ca5106060c0bcfc7e189cd086d3a368c8a300dfa",
          "message": "feat(config): let ignoreFindings cover the remaining result families (#2061)\n\nprop_drilling_chains, thin_wrappers and duplicate_prop_shapes are source-owned and now honour ignoreFindings; security findings and their blind-spot diagnostics stay visible regardless of the pattern. prop_drilling_chains follows the documented multi-owner rule and is suppressed only when every hop file matches, matching circular_dependencies rather than changed-file anchor filtering. An exhaustive destructuring helper next to remove_ignored_dead_code_findings makes the next result field a compile error instead of a silent escape. docs/backwards-compatibility.md updated.\n\nRefs #2017",
          "timestamp": "2026-07-28T21:53:29+02:00",
          "tree_id": "95546d7ce411cb148e0fca893c1b7c0b0b138fb1",
          "url": "https://github.com/fallow-rs/fallow/commit/ca5106060c0bcfc7e189cd086d3a368c8a300dfa"
        },
        "date": 1785269265729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481824600,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19323536,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24599624,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36939720,
            "unit": "bytes"
          }
        ]
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
          "id": "ce52c96d7e71cb3ab3076144b7b426be7048c986",
          "message": "feat(scripts): follow package-manager indirection into script bodies (#2063)\n\nnpm run <script> -- --flag and yarn <script> --flag were dropped before flag scanning, so the flag-value dependency crediting from #2006 never reached the shape most projects actually use. Script bodies now resolve through the catalogue and are rescanned, bounded by a depth limit and a global expansion budget.\n\nAmbiguity is sticky: a script name declared with different bodies across packages is never followed, regardless of workspace order. Names and bodies filter separately under --production, so a filtered script name still wins over a same-named dependency binary. Entry files from workspace bodies no longer seed root-relative patterns.\n\nRefs #2016",
          "timestamp": "2026-07-28T22:35:43+02:00",
          "tree_id": "346ac6934e0ed41497fc51d1614a2f43ba505ee5",
          "url": "https://github.com/fallow-rs/fallow/commit/ce52c96d7e71cb3ab3076144b7b426be7048c986"
        },
        "date": 1785271621491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 481982832,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19332400,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24608520,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36948616,
            "unit": "bytes"
          }
        ]
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
          "id": "57adb47d2ddc8720f1870dcaabca5096529d0c05",
          "message": "feat(health): add an identity-preserving baseline mode (#2064)\n\nThe default count baseline matches per file and category, so a new hotspot replacing an old one in the same file consumed the existing allowance and the gate stayed green. --baseline-mode identity matches per function identity instead: a replacement hotspot is reported, line shifts and severity improvements stay suppressed, and resolved findings disappear without a refresh.\n\nThe default stays count. Identity baselines keep their count buckets so both modes read them, and comparing in identity mode against a count-only baseline is an input error rather than a silent fallback. A finding identity is file path plus function name, so renaming or moving a function that is still in the baseline reports it as new; the flag documentation states that limit and the re-save rule.\n\nRefs #2010",
          "timestamp": "2026-07-28T22:48:23+02:00",
          "tree_id": "8adad1a994a5a7ed9a53b46a83d928fdc7142377",
          "url": "https://github.com/fallow-rs/fallow/commit/57adb47d2ddc8720f1870dcaabca5096529d0c05"
        },
        "date": 1785272384950,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 482124056,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19332400,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24610696,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 36968680,
            "unit": "bytes"
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
          "id": "cf897c27da5f671cde789a7437433b2da5fd84ef",
          "message": "fix(health): respect mocked modules in test reachability (#2068)\n\nExtraction records ordered vi.mock/vi.unmock facts for the literal vitest vi binding with statically proven closed factories; resolution canonicalizes targets through the specifier pipeline; the graph masks ESM edges per test root with bit-parallel reachability profiles and exact reference provenance, while CommonJS require paths stay live. Health coverage gaps, export gaps, and estimated CRAP consume the shared masked view.\n\nFixes #2031",
          "timestamp": "2026-08-01T22:32:56+02:00",
          "tree_id": "dfc7382d1f0c19dd0a1322b0a1b8b44777e1c6bb",
          "url": "https://github.com/fallow-rs/fallow/commit/cf897c27da5f671cde789a7437433b2da5fd84ef"
        },
        "date": 1785617058925,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 487495456,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19562192,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24833000,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37208200,
            "unit": "bytes"
          }
        ]
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
          "id": "de65b31999b0551377dd0006eeff7d4d337ca9c9",
          "message": "fix(security): stop treating \"use server\" as a server-only marker (#2088)\n\nA \"use server\" directive declares a Server Action boundary that client components are meant to import; the server-only-import rule treated it like server-only or node:fs, flagging every Server Action call site in App Router projects as high severity. The sink set now builds from imported server-only code only, while a \"use server\" module that imports server-only code and leaks it through a non-action export is still reported. Remediation and SARIF text updated to match.\n\nFixes #2074",
          "timestamp": "2026-08-02T00:46:49+02:00",
          "tree_id": "2f4fedd4835c67ad61c69b30cf5b65625568b647",
          "url": "https://github.com/fallow-rs/fallow/commit/de65b31999b0551377dd0006eeff7d4d337ca9c9"
        },
        "date": 1785625632224,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 488237296,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19604080,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24877160,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37248552,
            "unit": "bytes"
          }
        ]
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
          "id": "9a40a7f9d74bb52fe16d5b5fa727cc2cedc6ffeb",
          "message": "feat(config): report unused npm dependency overrides (#2090)\n\nnpm overrides in the root package.json are now parsed like pnpm overrides, including nested objects and the \".\" self-pin key, and feed the same unused and misconfigured override analysis. $package reference values are credited rather than reported. package-lock.json resolved packages credit override targets the way pnpm-lock.yaml does. Yarn and bun remain out of scope.\n\nFixes #2069",
          "timestamp": "2026-08-02T01:07:52+02:00",
          "tree_id": "74c026dbcb066c2f637029fe36906ad617b82ecb",
          "url": "https://github.com/fallow-rs/fallow/commit/9a40a7f9d74bb52fe16d5b5fa727cc2cedc6ffeb"
        },
        "date": 1785626875494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 488332352,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19612432,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24885544,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37255944,
            "unit": "bytes"
          }
        ]
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
          "id": "e025bccb9edd184b0c3c3e586b8441eb8b31d880",
          "message": "fix(scripts): fold plain multi-line run scalars into one CI command (#2086)\n\nPlain multi-line run: scalars in CI workflows now keep their continuation lines, anchored at the run key column so sibling step keys terminate the scalar and their values do not leak into entry files.\n\nFixes #2016",
          "timestamp": "2026-08-02T02:24:07+02:00",
          "tree_id": "482bad1944ba114640d2d90cc9f5da88d4b7c993",
          "url": "https://github.com/fallow-rs/fallow/commit/e025bccb9edd184b0c3c3e586b8441eb8b31d880"
        },
        "date": 1785631276944,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 488346176,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19613008,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24886120,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37256520,
            "unit": "bytes"
          }
        ]
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
          "id": "f5a898f9a5e03d4839f46b88996371218dda8b34",
          "message": "fix(graph): credit the whole React Native platform-extension family (#2087)\n\nA specifier that resolves into a Metro platform family now credits every member (.ios, .android, .native, .web, and the base file) across static imports, dynamic imports, require calls, and re-exports. Explicit platform specifiers keep a single edge.\n\nFixes #2073",
          "timestamp": "2026-08-02T03:30:24+02:00",
          "tree_id": "9f3bea18b6096339c0b9f148ecf603754774ca50",
          "url": "https://github.com/fallow-rs/fallow/commit/f5a898f9a5e03d4839f46b88996371218dda8b34"
        },
        "date": 1785635083429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 488534000,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19622608,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24895240,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37265544,
            "unit": "bytes"
          }
        ]
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
          "id": "1d2a61e8c57c3f29258d6e20dbafbcd1727b15f7",
          "message": "fix(core): resolve indexed-access getter types in unused-class-members (#2089)\n\nA Playwright fixture typed as Factory[\"getter\"] now resolves through the factory's public getter to the getter's declared return-type class, so members called through the fixture are credited. Computed keys and non-literal indices abstain.\n\nFixes #2070",
          "timestamp": "2026-08-02T04:27:22+02:00",
          "tree_id": "55be730f92c7c9dc173f65c24e9fa8c7962f8a00",
          "url": "https://github.com/fallow-rs/fallow/commit/1d2a61e8c57c3f29258d6e20dbafbcd1727b15f7"
        },
        "date": 1785638360314,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 488660336,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19629712,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24902280,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37272648,
            "unit": "bytes"
          }
        ]
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
          "id": "942c6eec1f55bd2bf1abcd5f8371b41f06018593",
          "message": "fix: harden Deno workspace support follow-ups (#2091)\n\nEngine AnalysisSession::from_resolved_config now uses strict workspace discovery so every command exits 2 on a malformed root manifest; resolve_specifier skips the Deno import-map lookup when no package scope declares a map; deno.json workspace accepts the object form {\"members\": [...]}.",
          "timestamp": "2026-08-02T05:13:43+02:00",
          "tree_id": "cc1c7cdd4d989cc14792a246b84efc44d794f9f6",
          "url": "https://github.com/fallow-rs/fallow/commit/942c6eec1f55bd2bf1abcd5f8371b41f06018593"
        },
        "date": 1785641139308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 488640864,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19632272,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24905096,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37278216,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9f950e75d0f9e37c1db8d968b788b3f76193f208",
          "message": "chore: release v3.11.0",
          "timestamp": "2026-08-02T06:00:36+02:00",
          "tree_id": "87b0d1fa53d22ecc3e27e7573687e27c2aa36457",
          "url": "https://github.com/fallow-rs/fallow/commit/9f950e75d0f9e37c1db8d968b788b3f76193f208"
        },
        "date": 1785644110238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 489223360,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19634128,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24907784,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37282184,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "fbfae06e32395ab6c3d600b6e591b2fe83174eb7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.11.0",
          "timestamp": "2026-08-02T08:26:20+02:00",
          "tree_id": "7c111438b93b0377ec0986cd35bca551147772a0",
          "url": "https://github.com/fallow-rs/fallow/commit/fbfae06e32395ab6c3d600b6e591b2fe83174eb7"
        },
        "date": 1785652823008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 489223360,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19634128,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24907784,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37282184,
            "unit": "bytes"
          }
        ]
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
          "id": "f990d58f9d59e675ee85c51d6501c1708158fe6d",
          "message": "fix(audit): compare type-aware identities by compatibility, not equality (#2105)\n\nThe degrade decision now uses SemanticAnalysisIdentity::incompatible_fields() and tolerates a side that ran no semantic queries, and the sidecar's effective project-config hash no longer includes the root file listing, so a diff that merely adds a file no longer degrades the gate. Genuinely incompatible identities still degrade with a warning.\n\nFixes #2102",
          "timestamp": "2026-08-03T07:42:59+02:00",
          "tree_id": "3f6fd22cfa12f7e18e62e5f61dda01f6f58d8785",
          "url": "https://github.com/fallow-rs/fallow/commit/f990d58f9d59e675ee85c51d6501c1708158fe6d"
        },
        "date": 1785738689113,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 490970392,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19683984,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24989064,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37390792,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "fab6c5029dcc44c7d2dbd5d0adf24dc5fe4faf7e",
          "message": "chore: release v3.12.0",
          "timestamp": "2026-08-03T09:13:13+02:00",
          "tree_id": "093606a090063318e520589db7c9e6fa4925d4b7",
          "url": "https://github.com/fallow-rs/fallow/commit/fab6c5029dcc44c7d2dbd5d0adf24dc5fe4faf7e"
        },
        "date": 1785742225979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 490341008,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19682064,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24985992,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37386824,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "87cae517c52aa09cfc9e65250f708e98bc1dba99",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.12.0",
          "timestamp": "2026-08-03T10:58:53+02:00",
          "tree_id": "e0f6aa954331fa714f36793f08e5cb4b443f096c",
          "url": "https://github.com/fallow-rs/fallow/commit/87cae517c52aa09cfc9e65250f708e98bc1dba99"
        },
        "date": 1785748380603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 490341008,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19682064,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24985992,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37386824,
            "unit": "bytes"
          }
        ]
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
          "id": "9a3ae1440dc7bbd228306924083746c818837eb3",
          "message": "fix(hooks): recognize git commit and push behind git-level flags in the agent gate (#2111)\n\nThe agent gate replaced its single regex with a tokenizer that steps over git-level options (-c k=v, -C dir, --no-pager, --git-dir=, and friends) before matching the subcommand, so flagged invocations audit while lookalikes like git log commit-message.txt still skip. FALLOW_GATE_DEBUG surfaces skip decisions on stderr.\n\nFixes #2106",
          "timestamp": "2026-08-03T16:09:04+02:00",
          "tree_id": "46385236668b614f2cec86a38a97aad84908bae1",
          "url": "https://github.com/fallow-rs/fallow/commit/9a3ae1440dc7bbd228306924083746c818837eb3"
        },
        "date": 1785766801126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 490341008,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19682064,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24985992,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37386824,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "4274c9397ca6a46eb0277bee312baeff96b408c4",
          "message": "chore: release v3.13.0",
          "timestamp": "2026-08-03T17:02:58+02:00",
          "tree_id": "ec00145cac21238b68eb687bf69d19d4bc26887f",
          "url": "https://github.com/fallow-rs/fallow/commit/4274c9397ca6a46eb0277bee312baeff96b408c4"
        },
        "date": 1785770148603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 490971528,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19683984,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24989064,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37390728,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "32673b7c882a4980b64d7c5469620a80ac931fa1",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.13.0",
          "timestamp": "2026-08-03T19:45:38+02:00",
          "tree_id": "584acecceded478cca0cd98852bd07d4c8861496",
          "url": "https://github.com/fallow-rs/fallow/commit/32673b7c882a4980b64d7c5469620a80ac931fa1"
        },
        "date": 1785780056158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 490971528,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19683984,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24989064,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37390728,
            "unit": "bytes"
          }
        ]
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
          "id": "d00354b85399a5908d45f38bb890877c78e5375b",
          "message": "fix(api): report truthful type-aware discovery sources (#2113)\n\nFallow's own launchers mark self-injected FALLOW_TYPE_AWARE_BIN wiring, so type-aware status now distinguishes npm-wrapper and github-action wiring from a genuinely user-set environment-override, keeps installed-sibling for the adjacent-binary path, and gives wrapper-wired discovery failures the right remediation.",
          "timestamp": "2026-08-03T21:18:47+02:00",
          "tree_id": "b222ea1b48695ba138b57c2a31f9fea17c50863b",
          "url": "https://github.com/fallow-rs/fallow/commit/d00354b85399a5908d45f38bb890877c78e5375b"
        },
        "date": 1785785730445,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 491141720,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19693776,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24999176,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37401384,
            "unit": "bytes"
          }
        ]
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
          "id": "6e808833500f1f04c5ad3cd4110c0fed347e275c",
          "message": "feat(health): credit doMock targets and pin the automock coverage decision (#2119)\n\nvi.doMock and jest.doMock never mask (unhoisted and order-sensitive) but now contribute credit edges for static path-shaped targets and their manual-mock siblings on all proven receiver shapes, and doUnmock cannot clear a hoisted mask. Automock keeps coverage credit by pinned, documented decision. Public coverage-gaps docs now state the mock-aware semantics.\n\nFixes #2082",
          "timestamp": "2026-08-03T22:54:13+02:00",
          "tree_id": "14d3a42ba674d29a4e81debc496f9d0549066220",
          "url": "https://github.com/fallow-rs/fallow/commit/6e808833500f1f04c5ad3cd4110c0fed347e275c"
        },
        "date": 1785791623233,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 491148992,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19694544,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 25000008,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37402088,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b6f6adc5d8882daf58b1b24a022501d24adea047",
          "message": "fix(mcp): satisfy redundant_pub_crate on the Windows test lock\n\nThe cfg(windows) test_support module is private, so the pub(crate) static\ntripped clippy's redundant_pub_crate on the Windows validation leg.",
          "timestamp": "2026-08-04T08:17:00+02:00",
          "tree_id": "f669c7d197ba434ab4b2bc23ab6c68e2ae55fa5d",
          "url": "https://github.com/fallow-rs/fallow/commit/b6f6adc5d8882daf58b1b24a022501d24adea047"
        },
        "date": 1785824951812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 491148992,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19694544,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 25000008,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37402088,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5de19d4e50ee457c03f2f666aae93fb7319dd994",
          "message": "test(process): harden the Unix process-tree registry test against slow runners\n\nSame flake family as #2112, Linux leg: the pid-file wait gains slow-CI\nheadroom with non-empty-content polling so a mid-write read cannot race\nthe parse, the kill wait widens, and the fixture sleep outlives the\nraised window.\n\nRefs #2112",
          "timestamp": "2026-08-04T08:59:50+02:00",
          "tree_id": "37e9fef9f7b937cbe1047b336341e1761456283d",
          "url": "https://github.com/fallow-rs/fallow/commit/5de19d4e50ee457c03f2f666aae93fb7319dd994"
        },
        "date": 1785827493487,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 491148992,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19694544,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 25000008,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37402088,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3cf8074a0e2e91c895c0a4224ba1c3bec4630d65",
          "message": "chore: release v3.14.0",
          "timestamp": "2026-08-04T09:26:26+02:00",
          "tree_id": "7169d090d5ffedbe17318e0ff4f421c33178d3db",
          "url": "https://github.com/fallow-rs/fallow/commit/3cf8074a0e2e91c895c0a4224ba1c3bec4630d65"
        },
        "date": 1785829139667,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 491146264,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19692624,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24996808,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37398120,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "08d39b4dca36f62c1892e389bee8632b5954d8d7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.14.0",
          "timestamp": "2026-08-04T11:00:28+02:00",
          "tree_id": "65b7e8785eed0360bfb9e44dcae8b730f397e9ec",
          "url": "https://github.com/fallow-rs/fallow/commit/08d39b4dca36f62c1892e389bee8632b5954d8d7"
        },
        "date": 1785834842493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 491146264,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19692624,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24996808,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37398120,
            "unit": "bytes"
          }
        ]
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
          "id": "8330bfdf7e8d17017ea134d687035d85cc39ed7d",
          "message": "chore(deps): batch the remaining JS dependency updates (#2147)\n\noxlint 1.76.0, radix-ui 1.6.7, jscpd 5.0.14, rolldown 1.2.0 with the vendored viz assets regenerated in the same commit, and lightningcss 1.0.0-alpha.72. The two previously red dependabot PRs were diagnosed: the rolldown failure was vendored-asset drift now fixed here, and the lightningcss Windows failure was a cancelled job, not a real incompatibility.\n\nCloses #2121\nCloses #2130\nCloses #2033\nCloses #2050",
          "timestamp": "2026-08-04T16:31:07+02:00",
          "tree_id": "b3a49c9b224a876b62a9bec6d9554455da11d984",
          "url": "https://github.com/fallow-rs/fallow/commit/8330bfdf7e8d17017ea134d687035d85cc39ed7d"
        },
        "date": 1785858088294,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 491180984,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19671216,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24976296,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37377640,
            "unit": "bytes"
          }
        ]
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
          "id": "9c3d5e3c8e527fabee9fe52a02b1ffc3b9b0470c",
          "message": "chore: overnight quality, performance, and docs sweep (#2148)\n\nVerified overnight batch: resolver and detector fixes from dogfooding (ignoreUnresolvedImports ./ matching, .js to .d.ts fallback, one unresolved-import finding per specifier), non-blocking LSP analysis with burst coalescing and the push/pull double-render fix, markdown escaping for untrusted values in github-summary and report tables, loud config errors for malformed extends and unknown override/ignoreExports keys, MCP workspace comma lists and guard validation, graph resolution performance work, duplication consolidations, and docs, changelog, and rustdoc updates. Panel-review consensus fixes included.",
          "timestamp": "2026-08-05T20:11:48+02:00",
          "tree_id": "424411e3641436fba11f43fa7a1303b634419a7b",
          "url": "https://github.com/fallow-rs/fallow/commit/9c3d5e3c8e527fabee9fe52a02b1ffc3b9b0470c"
        },
        "date": 1785954629512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 491696568,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19693488,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24992552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37397960,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "afc7ffa7e967f84dcc49fba878edf7e05651afd7",
          "message": "fix: resolver false positives, LSP dispatch blocking, and config silent drops (#2148)\n\nResolver: ignoreUnresolvedImports matches ./-prefixed entries again, .js\nspecifiers fall back to declaration-only .d.ts modules, one\nunresolved-import finding per specifier per file. LSP: analyses spawn off\nthe dispatch loop, bursts coalesce, push and pull diagnostics no longer\ndouble after the client's first pull. Output: untrusted values escaped in\ngithub-summary and report markdown tables. Config: malformed extends\nvalues and unknown override/ignoreExports keys fail loud with a\ndeduplicated, actionable error. Also: MCP workspace comma lists and guard\nvalidation, graph resolution performance (canonicalize cache, memoized\nglobs, indexed reference attachment), duplication consolidations,\nVS Code download and cancellation fixes, CI job timeouts, docs,\nchangelog, and rustdoc updates.",
          "timestamp": "2026-08-05T20:53:14+02:00",
          "tree_id": "424411e3641436fba11f43fa7a1303b634419a7b",
          "url": "https://github.com/fallow-rs/fallow/commit/afc7ffa7e967f84dcc49fba878edf7e05651afd7"
        },
        "date": 1785956786093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 491696568,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19693488,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24992552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37397960,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "24e84bc0ca81bd48d3b0a520cbcdcd2ab090ef75",
          "message": "feat(cli): progressive root help, specifier-anchored imports, code-span table cells (#2149)\n\nfallow -h leads with the task cheat sheet, shows the Analysis and Workflow groups plus everyday options, and points to --help for the complete list (197 to 49 lines; the machine schema is unchanged). Unresolved-import findings anchor on the source specifier via new statement and source spans threaded through extract, the caches, and the graph, so one suppression above a multi-line re-export covers the deduped finding and the stale-suppression contradiction is gone. Identifier and path cells in github-summary tables render as code spans with pipe escaping, mirrored in the action/ and ci/ jq fallback renderers, and the shared helper collapses CR/LF so identifiers cannot split a table row.",
          "timestamp": "2026-08-05T23:37:28+02:00",
          "tree_id": "046f67861970ef25827049e68a08da9d1a1cf16b",
          "url": "https://github.com/fallow-rs/fallow/commit/24e84bc0ca81bd48d3b0a520cbcdcd2ab090ef75"
        },
        "date": 1785966803320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 491507128,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19698160,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24997224,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37400520,
            "unit": "bytes"
          }
        ]
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
          "id": "acab6e72f14ee8c7f5e1c3fe239c2cb456551281",
          "message": "refactor: share resolve payloads, consolidate the discovery walk, document four crates (#2153)\n\nThe seven heavy read-only extraction fields on ModuleInfo/ResolvedModule are Arc slices, so per-file resolution and graph-cache restore bump refcounts instead of deep-copying (measured 2-4% CPU reduction and lower peak RSS on real projects; cached wire shapes untouched). The engine's near-verbatim fork of the core discovery walk is deleted (net -1974 lines) along with its hardcoded config-candidate list, the no-drift gate that guarded it, and the orphaned ignore dependency; engine routes through a core_backend adapter and config candidates derive from the plugin registry, with JSON output verified byte-identical on real projects. missing_docs is burned to zero in fallow-output, fallow-api, fallow-engine, and fallow-config, each now enforcing the lint; generated contract surfaces are regenerated and the inspect identity verdict fields carry typed boolean/string schemas matching runtime output.",
          "timestamp": "2026-08-07T07:50:26+02:00",
          "tree_id": "12000ab501f15e49f4ea0ee1100e7c41745ac6cd",
          "url": "https://github.com/fallow-rs/fallow/commit/acab6e72f14ee8c7f5e1c3fe239c2cb456551281"
        },
        "date": 1786082661975,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 491302752,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19690672,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24986344,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37396744,
            "unit": "bytes"
          }
        ]
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
          "id": "d8de238c7fce3f4805a1d671cf54b408e9e9d445",
          "message": "refactor: consolidate entry-point discovery on the fallow-core implementation (#2154)\n\nDeletes the engine's diverged copy of entry-point discovery (net +131/-1428) and routes the engine through core_backend pass-throughs, mirroring the discovery-walk consolidation. BackendAggregatedPluginResult wraps the core AggregatedPluginResult directly so plugin entry-point provenance survives without mirror-type reconstruction; the engine e2e tests moved to core before the fork was deleted; the orphaned regex and glob dependencies are removed. Behavior verified byte-identical against a pristine baseline binary on three real projects (dead-code, check, and list JSON, cold and warm cache). One log-only change: the skipped-entry warning dedupe is a single process-wide set.",
          "timestamp": "2026-08-07T09:14:05+02:00",
          "tree_id": "ad2aba4d13d4f1be5707b5a0efe1cca2aebca583",
          "url": "https://github.com/fallow-rs/fallow/commit/d8de238c7fce3f4805a1d671cf54b408e9e9d445"
        },
        "date": 1786087656071,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 490043752,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19635840,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 24905432,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37312952,
            "unit": "bytes"
          }
        ]
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
          "id": "1791333192526e898de933a5245ba9dcfd22d48e",
          "message": "feat: rank and triage distant duplicate code\n\n* feat: start duplication triage improvements\n\n* feat: improve duplication triage\n\n* test: update VS Code schema fixtures\n\n* test: refresh VS Code integration CLI version",
          "timestamp": "2026-08-07T23:00:20+02:00",
          "tree_id": "70ceedb6abe93ce657c9843d13a1b3f234e6480b",
          "url": "https://github.com/fallow-rs/fallow/commit/1791333192526e898de933a5245ba9dcfd22d48e"
        },
        "date": 1786137006491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 492520768,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19793120,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 25034104,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37449784,
            "unit": "bytes"
          }
        ]
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
          "id": "49c0bb438c8ddf4b207ad35446f6525147ecb2ae",
          "message": "refactor: keep one definition of each discovery constant (#2159)\n\nSOURCE_EXTENSIONS, PRODUCTION_EXCLUDE_PATTERNS, and ALLOWED_HIDDEN_DIRS were byte-identical copies in the engine and the core walk that consumes them; the engine re-exports the core definitions through the backend adapter, leaving its public paths unchanged. OUTPUT_DIRS had a third copy and moves to fallow-graph, the lowest crate both sides already depend on, so no adapter hop or boundary exception is needed. Verified byte-identical check and list JSON on two real projects against a binary built from a pristine worktree at the parent commit.",
          "timestamp": "2026-08-08T00:15:56+02:00",
          "tree_id": "ccd62f158eb0fff46d7ffd34dc9061aa175a6f3e",
          "url": "https://github.com/fallow-rs/fallow/commit/49c0bb438c8ddf4b207ad35446f6525147ecb2ae"
        },
        "date": 1786141789221,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 492520720,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19793120,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 25034104,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37449784,
            "unit": "bytes"
          }
        ]
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
          "id": "dffec365267ba06a983bfa0944be5ff339f1fb64",
          "message": "refactor: harden duplication architecture\n\n* refactor: start duplication architecture hardening\n\n* refactor: harden duplication architecture\n\n* test: keep spread proptest out of miri",
          "timestamp": "2026-08-08T06:48:38Z",
          "tree_id": "9dea107b803e597dc40092ec7e719931ca75b72f",
          "url": "https://github.com/fallow-rs/fallow/commit/dffec365267ba06a983bfa0944be5ff339f1fb64"
        },
        "date": 1786172532650,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 492774800,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 19812032,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 25052888,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 37468504,
            "unit": "bytes"
          }
        ]
      }
    ]
  }
}