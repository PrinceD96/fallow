window.BENCHMARK_DATA = {
  "lastUpdate": 1781849414645,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df250ec9880b62786b61ed3a13b014fbe56dbc34",
          "message": "docs(impact): fix stale store path and redundant intra-doc link (#1234)\n\nUpdate the README impact paragraph to reflect the relocated store: history\nnow lives in the user config directory, not a gitignored .fallow/impact.json\nin the repo, and add a pointer to the new fallow impact --all cross-repo view.\n\nAlso drop the redundant explicit target on the is_server_only_module intra-doc\nlink in the mixed-barrel detection module docs, which was tripping the\ncargo doc -D warnings Documentation CI check on main.",
          "timestamp": "2026-06-13T13:26:11+02:00",
          "tree_id": "502219210e3db1d45775f87cc66d1d4f66837d92",
          "url": "https://github.com/fallow-rs/fallow/commit/df250ec9880b62786b61ed3a13b014fbe56dbc34"
        },
        "date": 1781350203148,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
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
          "id": "af513438fe3f37b814718301d535b9fb4965da5e",
          "message": "feat(nextjs): flag misplaced use client / use server directives (#1236)\n\nAdds the misplaced-directive issue type (default warn): a \"use client\" / \"use server\" directive written below an import rather than in the leading prologue, which the parser silently ignores so the file is treated as a server module.\n\nA new extract pass scans program.body for the two RSC directive strings (CACHE_VERSION 151 to 152, CachedModule mirror + conversion both directions), gated on the project declaring next. No auto-fix; suppress hint only. Full plumbing across results, audit attribution, all six report formats, LSP diagnostics, schema, and TS contracts. Also wires the human-output footer + suppress hint for the three RSC siblings in the agent capability manifest.",
          "timestamp": "2026-06-13T13:50:06+02:00",
          "tree_id": "66416533b8e092e9cc52e65c81e02a2ad0a40442",
          "url": "https://github.com/fallow-rs/fallow/commit/af513438fe3f37b814718301d535b9fb4965da5e"
        },
        "date": 1781351676346,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "b66864c5a7fb3ebbd2b3c7c751f0c71bb909c996",
          "message": "fix(vscode): harden LSP client lifecycle and binary download (#1237)\n\nFive robustness fixes from a VS Code extension audit. Lifecycle: re-register the\nanalysisComplete handler per client (status bar no longer freezes after a\nrestart), serialize restartClient (no racing server processes), and make\nstopClient swallow start-timeouts and stop() rejections (no orphaned process or\npermanently-dead LSP). Download: guard httpsDownload's response stream (a\ndropped download no longer crashes the extension host) and purge only the\nmismatched binary on a version mismatch (no longer deletes the verified LSP).\n\nExtension-only; regression tests added; no schema/CLI/output change.",
          "timestamp": "2026-06-13T14:02:51+02:00",
          "tree_id": "a4044662b4609913529c691ee9456d972ad53e3e",
          "url": "https://github.com/fallow-rs/fallow/commit/b66864c5a7fb3ebbd2b3c7c751f0c71bb909c996"
        },
        "date": 1781352379879,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "2fb49f159e44b1ff34d1902e0d861cf442d6bf63",
          "message": "docs(readme): mention mixed-barrel and misplaced-directive RSC checks (#1239)\n\nExtend the Architecture section's Next.js correctness blurb to also name the mixed-client-server-barrel and misplaced-directive checks that shipped alongside invalid-client-export.",
          "timestamp": "2026-06-13T14:31:15+02:00",
          "tree_id": "d1f5a1628f613dde5c1165ad44204dc2e3795f9d",
          "url": "https://github.com/fallow-rs/fallow/commit/2fb49f159e44b1ff34d1902e0d861cf442d6bf63"
        },
        "date": 1781354096191,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "19355177b187133a4a1855795972bdd117384bbf",
          "message": "fix(vscode): harden diagnostics, lifecycle, download, and tree-view robustness (#1240)\n\nCompletes the adversarially-audited robustness batch for the VS Code extension across diagnostics filtering, LSP lifecycle, binary resolution, and tree/status UI.\n\n- Binary version probing runs off the activation/restart thread (promisify(execFile)); the per-binary --version probe stays authoritative, the shared marker is only a fallback.\n- Diagnostic mute filter recovers from corrupt persisted state, applies the manage-pick selection in one cycle, and drains the persist queue on deactivate.\n- Tree/status providers are tied to the extension lifetime and null their view on dispose.\n- empty_catalog_groups is counted (matching the CLI total) and rendered as a navigable Issues-tree category.\n- duplication.mode is validated against its enum before being forwarded as --dupes-mode.",
          "timestamp": "2026-06-13T17:23:11+02:00",
          "tree_id": "e9e28c07ab7e8da229ae02eba80d991e1d848eb2",
          "url": "https://github.com/fallow-rs/fallow/commit/19355177b187133a4a1855795972bdd117384bbf"
        },
        "date": 1781364389152,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "11af6fe65f62f375350560b63317bdb7d94098d7",
          "message": "feat(stores): cross-graph unused Pinia store member detection (#1241)\n\nAdds a new unused-store-member rule (default warn): a Pinia store member (an option-store state/getters/actions key, or a setup-store returned key) declared but accessed by zero consumers project-wide. The cross-file dead-input direction that single-file linters and type-checkers do not cover. Reuses unused_members.rs via MemberKind::StoreMember; gated on pinia/@pinia/nuxt; suppress-only. Validated on vue-vben-admin with zero false positives. Wired through all report formats, LSP, MCP, schema/codegen, and CI jq.",
          "timestamp": "2026-06-13T20:15:26+02:00",
          "tree_id": "4f49ea8a22a2b1232d9f28288ee4ed2c618645a9",
          "url": "https://github.com/fallow-rs/fallow/commit/11af6fe65f62f375350560b63317bdb7d94098d7"
        },
        "date": 1781374747845,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "5bd32d41321e69532655c72707b6e04f976d5f99",
          "message": "feat(unprovided-inject): flag Vue inject / Svelte getContext with no provider\n\nAdd a new cross-graph `unprovided-inject` rule (default severity warn, suppress-only) that flags a Vue inject(KEY) or Svelte getContext(KEY) whose symbol key is provide()/setContext()'d nowhere in the analyzed project. At runtime a dead inject silently returns undefined, surfaced only when the affected path renders; no static tool in the Vue/Svelte/Nuxt ecosystems catches it.\n\nNew persisted ModuleInfo.di_key_sites + has_dynamic_provide (CACHE_VERSION 153 to 155) feed a two-pass set-difference detector keyed on the canonical defining-site ExportKey, so a direct-imported provide and a barrel-imported inject of the same key match. Zero-FP abstain ladder: dep-gated on vue/@vue/runtime-core/svelte; package-imported keys, string-literal-const keys, public-API keys, and any dynamic-keyed provide all abstain. Wired through every report format, LSP, MCP, napi, VS Code, schema.json, the JSON contract, and the jq summaries. Nuxt string-keyed provide and the provided-never-injected direction are out of scope.",
          "timestamp": "2026-06-13T22:14:17+02:00",
          "tree_id": "ca538b23960136b75dda32e29723cf2c7165bcf9",
          "url": "https://github.com/fallow-rs/fallow/commit/5bd32d41321e69532655c72707b6e04f976d5f99"
        },
        "date": 1781381916733,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "58dc4fe0e548ffc1577b54c63b895e0044e83981",
          "message": "fix: address post-release v2.96.0 review follow-ups (#1244)\n\nCumulative follow-up patch for findings from the post-release retrospective of v2.96.0..HEAD.\n\n- The three Next.js RSC checks (invalid-client-export, mixed-client-server-barrel, misplaced-directive) emit a structured fix action in JSON output (move-to-server-module / split-mixed-barrel / hoist-directive) alongside the suppress action.\n- The combined-mode CI summary (GitHub Action + GitLab CI) lists the three RSC finding types in the Code issues breakdown table.\n- fallow impact --all --format markdown pluralizes project / issue counts.\n- fallow dead-code --explain injects a description for the misplaced-directive section.\n- collect_matching_rules covers mixed-barrels under --group-by owner, pinned by a neuter-checked regression test.\n- The impact_all MCP open-world annotation is asserted; its description guides agents on an empty (project_count 0) result.\n- The SARIF invalid-client-export fallback string matches explain.rs.\n- The VS Code orphan-temp sweep is deferred off the synchronous getInstallDir path; two code comments are corrected.\n\nSchema and TypeScript contracts regenerated; JSON snapshots accepted.",
          "timestamp": "2026-06-13T23:00:15+02:00",
          "tree_id": "e37312d8c48b6b8adc06aa731bb569018ac0d137",
          "url": "https://github.com/fallow-rs/fallow/commit/58dc4fe0e548ffc1577b54c63b895e0044e83981"
        },
        "date": 1781384627493,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "60781db879d8ef414c75742116a3648e8e1f0922",
          "message": "fix(vscode,lsp): drive un-hide diagnostics through server refresh (#1243)\n\nAfter \"Toggle Hide All Findings\", showing findings again now re-renders open files immediately. The mute toggle asks the language server to re-drive its diagnostic refresh (the path used after analysis and on file reopen, which fires every pull provider unconditionally) instead of relying only on a client-side per-document re-pull that could silently match nothing.\n\nServer: new fallow/refreshDiagnostics custom request that re-drives workspace/diagnostic/refresh (gated on whether the client pulls). Client: the toggle sends it fire-and-forget (swallowing MethodNotFound on older binaries), keeping the local re-pull as a fast-path fallback.\n\nAdds a Fallow: Reset Hidden Findings (Restart Server) command that clears every editor-side hide and restarts the client, the guaranteed recovery for a stuck-hidden workspace. Because the hidden state is stored per workspace and survives uninstalling the extension and deleting .fallow, the extension also nudges once when everything is hidden, with a one-click Show all findings. CI and the CLI are unaffected by these editor-only filters.\n\nRefs discussion #287.",
          "timestamp": "2026-06-14T07:39:57+02:00",
          "tree_id": "3db24d4e3b10b66366306dc045258ccc5720c76c",
          "url": "https://github.com/fallow-rs/fallow/commit/60781db879d8ef414c75742116a3648e8e1f0922"
        },
        "date": 1781415838501,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "de74ee1c7f347a65a6965715436c9a259d540e99",
          "message": "feat(sfc): flag missing static template asset refs via unresolved-import (#1246)\n\nVue / Svelte SFC markup is now scanned for static relative asset references (img/source/video/audio/track/embed src and poster). A reference that points to no file on disk surfaces as unresolved-import; an existing asset resolves with no finding.\n\nExtraction-only, reuses the existing unresolved-import category (no new rule, flag, or finding type). Conservative to stay false-positive-safe: only plain relative literals on genuine asset elements are checked; dynamic, aliased, root-relative, remote, interpolated, and query-suffixed values are skipped, custom-component src props are never read as assets, and refs inside script/style/comments are masked before scanning.\n\nCACHE_VERSION bumped 155 to 156 (SFC markup asset refs now emit SideEffect imports into the cached module shape).",
          "timestamp": "2026-06-14T08:03:13+02:00",
          "tree_id": "5af017763f8f3de7619ef25e7d51f2222d34b0d3",
          "url": "https://github.com/fallow-rs/fallow/commit/de74ee1c7f347a65a6965715436c9a259d540e99"
        },
        "date": 1781417531008,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "f9b6926884113b997f08366df1474c236d81b46d",
          "message": "fix(extract): credit Vue components rendered after a nested template slot (#1247)\n\nThe Vue SFC template-usage scanner matched the root template against the first </template> (non-greedy capture), truncating the body at a nested <template #slot> close and dropping every component rendered after it, causing false unused-export findings.\n\nThe scanner now locates the root close with nesting depth tracking, byte-safe (CJK), with an unclosed-comment fall-through. Verified on a real corpus: vue-vben-admin layout-ui went from 4 false unused-exports to 0, no new FPs. CACHE_VERSION 156 to 157.",
          "timestamp": "2026-06-14T10:16:14+02:00",
          "tree_id": "4b2fb34d5bedf580400126865fb4529fab347508",
          "url": "https://github.com/fallow-rs/fallow/commit/f9b6926884113b997f08366df1474c236d81b46d"
        },
        "date": 1781425175740,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "d0f5b42e4588b0452eb5859c3578500a5695d05d",
          "message": "feat(nextjs): graduate route-collision to default error, keep dynamic-segment-name-conflict at warn\n\nroute-collision now defaults to error (it mirrors a next build failure, so a project hitting it was already red); dynamic-segment-name-conflict stays warn (a runtime crash next build does NOT catch) and graduates to error in a later release once field-proven.\n\nAlso corrects the dynamic-segment-name-conflict rustdoc (it wrongly claimed the build fails), rewrites the human and markdown conflict line to be crash-grade, and adds a monorepo-gate regression test proving the rule arms when next is declared only in a sub-app. Regenerated schema.json and re-accepted SARIF snapshots (route-collision rule level warning to error). No JSON schema or TS contract change.",
          "timestamp": "2026-06-14T11:32:57+02:00",
          "tree_id": "c8eca53852b845ab75dd48c5716d953b3b426a3e",
          "url": "https://github.com/fallow-rs/fallow/commit/d0f5b42e4588b0452eb5859c3578500a5695d05d"
        },
        "date": 1781429807443,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "a53c744cf95aa09768c6e27e4b46d904d1409932",
          "message": "feat(analyze): flag Vue/Svelte components reachable but rendered nowhere (#1249)\n\nNew unrendered-component rule (default warn): a Vue/Svelte SFC default export kept reachable by a barrel re-export but instantiated nowhere (no tag, :is/this, components/app.component, h()/auto-import, or value-read). unused-file and unused-export both miss it.\n\nReuses the module graph; only new persisted state is a derived ModuleInfo.referenced_import_bindings (uncached). Rendered set built liberally (barrel chains, Nuxt auto-imports, dynamic/side-effect imports). Abstains: dep-gate, entry-point components, and components re-exported through the full multi-hop chain from a non-private package entry point. Suppress-only.\n\nValidated on a 10-project real corpus: 11 true positives (bits-ui orphaned icons, vue-vben-admin shadcn context-menu variants), zero false positives. Reports through human/JSON/SARIF/CodeClimate/compact/markdown/LSP/MCP.",
          "timestamp": "2026-06-14T14:05:43+02:00",
          "tree_id": "466aca746cb18c809762697b4acd6bade58d439c",
          "url": "https://github.com/fallow-rs/fallow/commit/a53c744cf95aa09768c6e27e4b46d904d1409932"
        },
        "date": 1781439006257,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "60d77438381022256ef51249f1f04dc35fe0484a",
          "message": "feat(analyze): flag Vue defineProps props used nowhere in their component (#1251)\n\nNew unused-component-prop rule (default warn): a Vue <script setup> defineProps declared prop referenced by no code in its own SFC (script or template). Harvests inline TS / runtime object / withDefaults forms; credits script (destructured local / props.foo) and template usage. False-positive-safe abstains: $attrs/props fallthrough, whole-object props use, defineExpose, defineModel, renamed-destructure alias, v-bind forward, imported prop-type alias. Vue <script setup> only.\n\nReports through human/JSON/SARIF/CodeClimate/compact/markdown/LSP/MCP. Validated on a real corpus: 7 true positives (elk, vue-vben-admin, vuestic-admin, nuxt-ui), zero false positives.",
          "timestamp": "2026-06-14T17:37:16+02:00",
          "tree_id": "7daf23c242845ff61d3dac2545aa056f13284d0e",
          "url": "https://github.com/fallow-rs/fallow/commit/60d77438381022256ef51249f1f04dc35fe0484a"
        },
        "date": 1781451788708,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "79727c19a63d502662438990750448bfd9f0ba24",
          "message": "docs(types): fix mis-flagged typo in ModuleInfo abstain comments (#1253)\n\nReword the `has_unharvestable_props` / `has_unharvestable_emits` doc comments from \"mis-flagged\" (the `mis` token trips the typos check) to \"falsely flagged\". Doc-comment only, no behavior change.",
          "timestamp": "2026-06-14T20:00:11+02:00",
          "tree_id": "3e145a1ea62da8348dfebbd76b2d3ac8b76d1ee8",
          "url": "https://github.com/fallow-rs/fallow/commit/79727c19a63d502662438990750448bfd9f0ba24"
        },
        "date": 1781460229141,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "b8c03ae81e1f6e90327aede79d8753711a447047",
          "message": "feat(nextjs): flag unused server actions (use-server exports referenced nowhere) (#1254)\n\nAdds a new unused-server-action rule (default warn): an exported function in a Next.js \"use server\" file that no code in the project references (no import-and-call, no action={fn} binding, no <form action={fn}>). Cross-file dead-action direction eslint-plugin-next cannot see.\n\nRe-classifies the server-action subset of unused_exports (files whose directives contain \"use server\") into unused_server_actions, after the parallel detectors and before stale-suppression detection, inheriting every unused-exports abstain. action={fn} / <form action={fn}> are already credited as references by oxc_semantic. Gated on next; when the rule is off, findings stay as unused-export.\n\nWired across types/suppress (IssueKind disc 40, CACHE_VERSION 161), config, all six report formats, baseline, audit attribution, LSP, MCP, NAPI, and the regenerated schema + TS contracts. Validated zero false positives on 13 real Next.js projects plus local projects (one true positive). Inline \"use server\" body directives deferred.",
          "timestamp": "2026-06-14T22:36:05+02:00",
          "tree_id": "09c89a6c71039f9da98c81d5e00164b42bc033b1",
          "url": "https://github.com/fallow-rs/fallow/commit/b8c03ae81e1f6e90327aede79d8753711a447047"
        },
        "date": 1781469561805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "1de4f0125e8d5d99dc13639ac579b546a060369d",
          "message": "feat(extract): track SvelteKit data-prop destructure as member accesses (#1255)\n\nPrimitive A for unused-load-data-key: a destructure off the SvelteKit `data` prop (`const { user } = data`) emits `data.<key>` member accesses (rest -> whole-object abstain). CACHE_VERSION 162. Findings-byte-identical on all 10 benchmark fixtures; full test + clippy green.",
          "timestamp": "2026-06-15T08:39:18+02:00",
          "tree_id": "cda7ee180568bd52e5ad15451612859084209203",
          "url": "https://github.com/fallow-rs/fallow/commit/1de4f0125e8d5d99dc13639ac579b546a060369d"
        },
        "date": 1781505785179,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "b91a1d942ef2547f41a596d64f96815666c0ed07",
          "message": "fix(ci): gate combined dupes on visible groups\n\nCombined CI mode previously used the raw duplication stats counter to decide whether the run had duplicate issues. That could fail a GitHub Action or GitLab CI run even when filtered output had no actionable `dupes.clone_groups[]` to render or annotate.\n\nThis changes the combined-mode GitHub Action and GitLab CI gates and summaries to count visible clone groups instead. Standalone `fallow dupes` keeps its existing stats behavior, while combined CI now matches the actionable result set users can inspect.\n\nFixes #1250.",
          "timestamp": "2026-06-15T11:05:21+02:00",
          "tree_id": "4271d89968418ef95a1cc53e285832dba7fed2e2",
          "url": "https://github.com/fallow-rs/fallow/commit/b91a1d942ef2547f41a596d64f96815666c0ed07"
        },
        "date": 1781514543770,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "05c25a03012b3bd728860b88f4effb9ee26b8335",
          "message": "feat(extract): credit SvelteKit route data prop as template-visible (#1257)\n\nPrimitive B for unused-load-data-key: a SvelteKit route component now credits the `data` prop as a template-visible root, so `{data.x}` and `{#each data.items as i}` markup reads emit `data.<key>` member accesses for the cross-file load-data-key join.\n\nRoute-narrowed (not all `.svelte`): a non-route component's parent-passed `data` is a different binding, so crediting it as load data would be semantically wrong. The predicate matches `+page.svelte` / `+layout.svelte` AND their layout-reset variants, all of which still receive the `load()` data prop; `+error.svelte` and non-route `+pageHelper.svelte` are excluded by the grammar.\n\nInternal extraction primitive with zero finding delta, so no CHANGELOG/detection.md entry, mirroring Primitive A (#1255). CACHE_VERSION 162 to 163. Findings byte-identical on all 10 benchmark fixtures and 10 real SvelteKit apps; extract + core + full-workspace tests, clippy, fmt, and cargo doc all green.",
          "timestamp": "2026-06-15T11:38:26+02:00",
          "tree_id": "a58325f0f0ba3147687e6ff07640d036a71e36be",
          "url": "https://github.com/fallow-rs/fallow/commit/05c25a03012b3bd728860b88f4effb9ee26b8335"
        },
        "date": 1781516519998,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "39d9ff2c8adddcb936ae0531ee923bf503d340e3",
          "message": "feat(nextjs): graduate dynamic-segment-name-conflict to default error (#1259)\n\ndynamic-segment-name-conflict now defaults to error, joining route-collision in the error-runtime severity tier: a green next build that fallow fails because the route is a deterministic runtime crash on first request that next build lets through, so fallow is the only gate that catches it.\n\nThe detector is pure path arithmetic on the same route_tree primitive as route-collision (no AST, no heuristic to misfire), and its false-positive surface (route groups, parallel slots, per-app-root monorepo scoping) was exercised false-positive-free across a 22-project corpus, so the graduation rests on the path-deterministic primitive, not a zero-findings count. Human and markdown lines were already crash-grade, so no message change. Regenerated schema.json and re-accepted the default-derived SARIF snapshots (warning to error); the explicit sarif_mixed_severity fixture stays at warn. No JSON output schema or TS contract change.",
          "timestamp": "2026-06-15T11:56:02+02:00",
          "tree_id": "2178cc6c1393340cfa104fee6f3477efea1878b9",
          "url": "https://github.com/fallow-rs/fallow/commit/39d9ff2c8adddcb936ae0531ee923bf503d340e3"
        },
        "date": 1781517611557,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "8c26b85369db46e2d00234d19aa8825475b07618",
          "message": "feat(extract): recover SvelteKit page.data.<key> depth in templates (#1260)\n\nPrimitive C for unused-load-data-key: a SvelteKit global page-store read in a template, `{$page.data.KEY}` (Svelte 4 `$app/stores`) or `{page.data.KEY}` (Svelte 5 `$app/state`), now recovers the nested `page.data.<key>` member access for the cross-file load-data-key detector's project-wide global-store consumer channel.\n\nThe template scanner's `remap_object_name` previously remapped only the root identifier and dropped the `.data` suffix, so the consumed key was lost. It now recovers the canonical `page.data` object, gated on the Svelte dollar-ref path (excludes Vue) and scoped to the page store's `data` member. The script context already emitted the dotted form via the visitor's recursive member-name builder, so no visit_impl.rs change was needed.\n\nInternal extraction primitive with zero finding delta, so no CHANGELOG/detection.md entry, mirroring Primitives A (#1255) and B (#1257). CACHE_VERSION 164. Findings byte-identical on all 10 benchmark fixtures and 10 real SvelteKit corpus apps; extract + core + full-workspace tests, clippy, fmt, and cargo doc all green.",
          "timestamp": "2026-06-15T12:37:14+02:00",
          "tree_id": "24635a4b4b60e55ad741c4cd99416367843eec1e",
          "url": "https://github.com/fallow-rs/fallow/commit/8c26b85369db46e2d00234d19aa8825475b07618"
        },
        "date": 1781520055146,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "8593f955ae31647444ec6f6f679571339cefafec",
          "message": "fix(dupes): ignore module wiring in imports filter\n\nExtend the existing ignoreImports duplicate filter beyond ES imports so re-export barrels and top-level static CommonJS require binding declarations no longer create clone groups by default.\n\nThe tokenizer now skips source-backed re-exports and whole top-level require-binding declarations while preserving runtime code, local exports, side-effect require calls, nested require calls, dynamic require arguments, and mixed declarations. The duplicate token cache version is bumped so warm caches do not reuse the old token stream.\n\nConfig schema, CLI help, changelog, agent rules, and shipped skill reference wording now describe the broader module-wiring scope.\n\nFixes #1225.",
          "timestamp": "2026-06-15T13:06:02+02:00",
          "tree_id": "34508a99dd9f5fca0403666dd7af6834922cb6dc",
          "url": "https://github.com/fallow-rs/fallow/commit/8593f955ae31647444ec6f6f679571339cefafec"
        },
        "date": 1781521854691,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "2f636206b0f16edd8cac2f493331f2e8ba8dc322",
          "message": "fix: wire post-2.96.0 IssueKinds through LSP severity, VS Code, and CI summaries (#1262)\n\nThe cluster of new IssueKinds shipped since v2.96.0 was complete in the Rust output but under-wired in three surfaces outside the Rust drift gates.\n\nLSP: route-collision and dynamic-segment-name-conflict now emit ERROR severity to match their core default (were hardcoded WARNING), with regression tests. VS Code: the new kinds are now counted, rendered in the Issues tree, and filterable instead of silently dropped from the sidebar; dist rebuilt. CI: the five missing kinds plus route-collision and dynamic-segment-name-conflict now appear in the GitHub Action and GitLab CI summary, annotation, combined, and audit breakdowns, with jq tests added. A shared drift guard fails when a future dead-code IssueKind is absent from the summary scripts.",
          "timestamp": "2026-06-15T14:57:12+02:00",
          "tree_id": "a5e385775dd165214646469edeaa96bef41fcfdb",
          "url": "https://github.com/fallow-rs/fallow/commit/2f636206b0f16edd8cac2f493331f2e8ba8dc322"
        },
        "date": 1781528465392,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "11d777118a0b23ddf36329c9415319a05398fef1",
          "message": "refactor: group vue template tag inputs",
          "timestamp": "2026-06-15T15:11:33+02:00",
          "tree_id": "a61db4a756b9fa9e0e85a3bcd8421713233f6a02",
          "url": "https://github.com/fallow-rs/fallow/commit/11d777118a0b23ddf36329c9415319a05398fef1"
        },
        "date": 1781529423081,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "0ab909935fe847968140860cbffd8dffd8cd9722",
          "message": "fix(coverage): tolerate null caller_count/cyclomatic/owner_count in cloud runtime-context\n\nThe cloud runtime-context response now emits null for caller_count, caller_count_weighted_by_traffic, cyclomatic, and owner_count when the caller-graph (blast-radius) or complexity/CODEOWNERS inputs (importance) are unavailable, instead of a placeholder 0/1. The deserializer declared these as non-Option u32/u64, so serde failed to parse the response and broke `fallow coverage analyze --cloud`.\n\nMake the four fields Option + #[serde(default)] (tolerates null, absent, and legacy numeric values), and map None to 0 at the render conversion so display is unchanged. risk_band already has an Unknown variant, so \"unknown\" was already safe.\n\nCloses #1263",
          "timestamp": "2026-06-15T16:17:56+02:00",
          "tree_id": "ede116fdeff554fdb5d94ed5fd024dce7b663ec4",
          "url": "https://github.com/fallow-rs/fallow/commit/0ab909935fe847968140860cbffd8dffd8cd9722"
        },
        "date": 1781533281331,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "e4e53f9a95d6b7a0a21cf7196a786f53e416c35b",
          "message": "feat(analyze): flag unused SvelteKit load() return-object keys (#1265)\n\nNew issue type unused-load-data-key (IssueKind 41, default warn, suppress-only, gated on @sveltejs/kit): a route load() return-object key read by no consumer, neither the sibling +page.svelte's data.<key> nor any project-wide page.data.<key> / $page.data.<key>. A dead returned key runs a real server-side fetch / DB cost per request for data nothing renders; no competitor flags this unused-input direction.\n\nBuilds on three shipped consumer primitives (#1255 / #1257 / #1260) and adds the producer harvest, with a zero-FP abstain ladder (route-pinned whole-data, server-to-universal chain, project-wide reflective page.data abstain). Full new-issue-type fan-out (6 report formats, filters, baseline, MCP, LSP, CI summaries, schema). Validated zero false positives across a 10-app SvelteKit corpus.",
          "timestamp": "2026-06-15T16:39:47+02:00",
          "tree_id": "fb19a4fef3943577aec303fb9a8c2f412b267d44",
          "url": "https://github.com/fallow-rs/fallow/commit/e4e53f9a95d6b7a0a21cf7196a786f53e416c35b"
        },
        "date": 1781534944652,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "543a32ab70c35053316738f12c5248210c844e4e",
          "message": "fix: extend IssueKind drift gates and close the surface gaps they found (#1266)\n\nExtends IssueKind drift coverage to every layer so a new dead-code finding cannot silently drop from a secondary surface, and closes the gaps it surfaced.\n\nCI: the shared guard asserts the schema-derived canonical dead-code set against every jq summary/annotation surface. VS Code: a new test chains DIAGNOSTIC_CATEGORIES to countCheckIssues, the tree, and labels with a keyof CheckOutput map (compile-time sync). LSP: a severity gate exhaustively destructures AnalysisResults so a new field must be classified to compile.\n\nGaps closed: test-only-dependency now gets a CI annotation and a correct --changed-since count; empty-catalog-group is filterable in VS Code; and the new SvelteKit unused-load-data-key finding (#1265) is wired across the CI summaries, the VS Code sidebar, and the LSP severity map. circular-dependency and the boundary-violation family stay editor-softer WARNING by recorded decision.",
          "timestamp": "2026-06-15T17:09:00+02:00",
          "tree_id": "e307ea00ac6000393bf52cbce7c1b37810b9b182",
          "url": "https://github.com/fallow-rs/fallow/commit/543a32ab70c35053316738f12c5248210c844e4e"
        },
        "date": 1781536343482,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "d69830c3b1ee4387dc469c8ada7ce43dccd5befb",
          "message": "feat(health): opt-in CSS analytics (fallow health --css) (#1230)\n\nOpt-in structural CSS analytics section for `fallow health --css`: specificity hotspots, !important density, complex selectors, deep nesting, empty rules, design-token sprawl, unreferenced custom properties / @keyframes, dead scoped classes, unused @property / @layer, undefined-keyframe references, duplicate declaration blocks, and Tailwind arbitrary-value bypasses. Candidate-framed, never gated, exit-code-neutral.",
          "timestamp": "2026-06-15T17:20:59+02:00",
          "tree_id": "b9b7556313c7f89ea012385589e648202d8af938",
          "url": "https://github.com/fallow-rs/fallow/commit/d69830c3b1ee4387dc469c8ada7ce43dccd5befb"
        },
        "date": 1781537133087,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "fa96043e4cad2034d9bf84fa88228642c35aea96",
          "message": "feat(health): CSS class-reach candidates for `fallow health --css` (#1261)\n\nAdds four `fallow health --css` candidates: likely CSS class-name typos in markup (near-miss edit-distance), unreferenced global CSS classes, unused @font-face web fonts, and font-size scales mixed across length units. All candidate-framed, never gated, heavily FP-guarded and validated zero-FP across Bootstrap / Svelte / Excalidraw / reveal.js plus local projects. Reported in human, markdown, and JSON (css_analytics.unresolved_class_references / unreferenced_css_classes / unused_font_faces / font_size_unit_mix).",
          "timestamp": "2026-06-15T17:36:58+02:00",
          "tree_id": "93004955a94b36a068a6e0b3fa05b71a6d3d9799",
          "url": "https://github.com/fallow-rs/fallow/commit/fa96043e4cad2034d9bf84fa88228642c35aea96"
        },
        "date": 1781538140683,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "a021530577d96f3a711a598612acafac8c0d6161",
          "message": "feat(health): flag unused Tailwind v4 @theme design tokens (--css) (#1267)\n\nA `fallow health --css` candidate for Tailwind v4 `@theme` tokens whose generated utility no markup uses (cross-surface token reachability). Suffix-match against the documented v4 namespaces, published-library / plugin abstains, 0 FP / 21 TP smoke. Candidate-framed, opt-in, JSON `css_analytics.unused_theme_tokens`.",
          "timestamp": "2026-06-15T18:21:37+02:00",
          "tree_id": "f7b6aa043b45210b84e7adce4ca387abf9eca6a6",
          "url": "https://github.com/fallow-rs/fallow/commit/a021530577d96f3a711a598612acafac8c0d6161"
        },
        "date": 1781540769939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "16aa6a905beba4ea5d42ab65c1bf71af23ea11de",
          "message": "fix(vscode): gate DIAGNOSTIC_CATEGORIES drift and wire policy-violation in the sidebar (#1268)\n\nCloses the last drift-coverage blind spot: the VS Code DIAGNOSTIC_CATEGORIES catalog was the one surface nothing gated against the schema, so a new LSP-emitted dead-code code that was never added there stayed uncounted and unfilterable in the editor.\n\nThe shared CI drift guard now asserts DIAGNOSTIC_CATEGORIES carries every canonical dead-code kind (derived from fallow schema), mapping each id to its diagnostic code so the boundary family is matched under the single boundary-violation editor code. The new gate immediately found a real gap: policy-violation is emitted by the LSP but was missing from every VS Code registry. It is now wired end to end (catalog, count, tree, labels, settings, config, schema, drift map, filterCheckResult toggle) so rule-pack policy violations are counted, rendered, and filterable like every other kind.",
          "timestamp": "2026-06-15T18:40:41+02:00",
          "tree_id": "29d34f4add51c927f07bf368809f9a465c7fab84",
          "url": "https://github.com/fallow-rs/fallow/commit/16aa6a905beba4ea5d42ab65c1bf71af23ea11de"
        },
        "date": 1781541993992,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "b38b8b25c256577cab82f52ff9dab1222ef178ea",
          "message": "chore(deps): bump crate-ci/typos to 1.47.2\n\nBumps [crate-ci/typos](https://github.com/crate-ci/typos) from 1.47.1 to 1.47.2.\n- [Release notes](https://github.com/crate-ci/typos/releases)\n- [Changelog](https://github.com/crate-ci/typos/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/crate-ci/typos/compare/44e2070e6017f834bf069503acb35ca0ca0b75f2...37bb98842b0d8c4ffebdb75301a13db0267cef89)\n\n---\nupdated-dependencies:\n- dependency-name: crate-ci/typos\n  dependency-version: 1.47.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-15T18:46:55+02:00",
          "tree_id": "4c23506e8249257e6a993f6e61b6fedd5f3212e8",
          "url": "https://github.com/fallow-rs/fallow/commit/b38b8b25c256577cab82f52ff9dab1222ef178ea"
        },
        "date": 1781542233756,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "d2ccd78184f74a2e6211d60d2a304cfe6182b28e",
          "message": "chore(ci): retrigger main checks",
          "timestamp": "2026-06-15T19:15:14+02:00",
          "tree_id": "6a4e20fbba022d2d11631752cd76920208795746",
          "url": "https://github.com/fallow-rs/fallow/commit/d2ccd78184f74a2e6211d60d2a304cfe6182b28e"
        },
        "date": 1781543941236,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "10ef245eadaa2d83105f0a85a98987d764a6a2b1",
          "message": "fix(health): credit authored CSS classes in typo scan",
          "timestamp": "2026-06-15T20:07:46+02:00",
          "tree_id": "cb42b0f7543c999cb69e8205bbf1839efaa5982e",
          "url": "https://github.com/fallow-rs/fallow/commit/10ef245eadaa2d83105f0a85a98987d764a6a2b1"
        },
        "date": 1781547097584,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "34b66b8222ee811c12fbba09a437ec0fff12ebd4",
          "message": "docs(health): clarify CSS preprocessor handling",
          "timestamp": "2026-06-15T21:56:37+02:00",
          "tree_id": "a7680b4c97c359f6dbb2ba48d50a6677bc501e86",
          "url": "https://github.com/fallow-rs/fallow/commit/34b66b8222ee811c12fbba09a437ec0fff12ebd4"
        },
        "date": 1781553678556,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "871dab1c3b7ed6f532d952aee13d848fd23862b8",
          "message": "docs(extract): document the lightningcss/regex hybrid in css.rs\n\nRecords why standard-CSS class membership is lightningcss-owned while the\nregex chain and the entire SCSS path stay regex-based: lightningcss does\nnot parse SCSS (@use, @forward, // comments, $variables), so the regex\nscanners are permanent infrastructure, not a transitional step toward an\nall-parser tokenizer.",
          "timestamp": "2026-06-15T22:43:03+02:00",
          "tree_id": "2782133763bdad7e90c2fa0ab74c93af19c05acd",
          "url": "https://github.com/fallow-rs/fallow/commit/871dab1c3b7ed6f532d952aee13d848fd23862b8"
        },
        "date": 1781556424563,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "8f89a62931fc9dd062c3ee187b954292df2f0160",
          "message": "docs(changelog): note the --cloud coverage runtime-context parse fix\n\nThe #1263 fix (tolerate null caller_count/cyclomatic/owner_count in the\ncloud runtime-context response) shipped without an Unreleased entry; add\nit under Fixed.",
          "timestamp": "2026-06-16T00:00:47+02:00",
          "tree_id": "7f753a1fd97c1bc5fafd9323078128466b028e1c",
          "url": "https://github.com/fallow-rs/fallow/commit/8f89a62931fc9dd062c3ee187b954292df2f0160"
        },
        "date": 1781561067160,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "c541c92cf270988b4b6dd7b75d03c2da812ac335",
          "message": "refactor: reduce sig unit-size hotspots\n\nSplit large Rust units across CLI audit, health, reporting, LSP, MCP, config, extract, and core analysis paths into focused helpers.\n\nThis is a maintainability-only refactor. Output contracts, schemas, and user-facing behavior stay stable while the SIG unit-size pressure drops across the branch.",
          "timestamp": "2026-06-16T12:40:25+02:00",
          "tree_id": "88672e9442e3720880dabda08a43bbdeb38629c9",
          "url": "https://github.com/fallow-rs/fallow/commit/c541c92cf270988b4b6dd7b75d03c2da812ac335"
        },
        "date": 1781606672065,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "f2ac13530e8ae5d4c775c295b4d60e8d6567d14c",
          "message": "feat(health): React/JSX component-health suite\n\nA React/Preact component-health layer on a new JSX structural extraction pass\n(component functions, props, hooks, render edges), mirroring and extending the\nVue component-analysis stack. CACHE_VERSION 170.\n\nSignals (dep-gated on react/react-dom/next/preact):\n- unused-component-prop React arm (default warn): prop declared but read nowhere\n  in the component body; shares the Vue rule key / suppress token.\n- React-aware complexity: JSX nesting depth folds into cognitive, hook/prop\n  density into the per-component contribution; descriptive hook profile (kind\n  breakdown + max useEffect dep-array arity).\n- prop-drilling (opt-in, off): a prop forwarded unused through >= 3 pass-through\n  components; located per-chain records + small capped health penalty.\n- thin-wrapper (opt-in, off): a component whose whole body is a spread-forwarded\n  single child render.\n- duplicate-prop-shape (opt-in, off): 3+ components across 2+ files with an\n  identical significant prop-name set.\n- render fan-in: descriptive blast-radius metric (component-graph analogue of\n  module fan-in) with a located top-N list; headline is distinct render\n  locations, test/spec files excluded.\n\nThe shared ChildResolver lives in analyze/react_resolve.rs. Validated zero false\npositives across next.js, query, preact, and vrs-portals; duplicate-prop-shape\nfound 23 true positives on vrs-portals. Companion docs (fallow-docs,\nfallow-skills) updated separately.",
          "timestamp": "2026-06-16T13:53:37+02:00",
          "tree_id": "760f06b6aaf5108232e8cf154138d1c91da61716",
          "url": "https://github.com/fallow-rs/fallow/commit/f2ac13530e8ae5d4c775c295b4d60e8d6567d14c"
        },
        "date": 1781611074558,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "0157c64f4dee894f6e63cd16ee502e40f4a045d1",
          "message": "fix(ci): classify React-health IssueKinds as advisory in the drift guard\n\nprop-drilling, thin-wrapper, and duplicate-prop-shape are command-tagged\ndead-code IssueKinds, but they are opt-in (default-off) React/Preact advisory\nhealth signals surfaced only in the CLI human report and raw JSON. The LSP does\nnot emit them as diagnostics and the PR-summary jq surfaces do not carry them,\nso the IssueKind drift guard now classifies them alongside complexity and\ncoverage-gaps (skipped, not gated for surface presence) rather than demanding a\nJSON-key mapping. Repairs the red \"Test GitLab CI scripts\" job on main.",
          "timestamp": "2026-06-16T15:13:37+02:00",
          "tree_id": "5588440fa2bd0aeaf51731d8427f5fce094bb54b",
          "url": "https://github.com/fallow-rs/fallow/commit/0157c64f4dee894f6e63cd16ee502e40f4a045d1"
        },
        "date": 1781615843528,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "0b524021686cf1445b974ba9011b4c523de09363",
          "message": "chore: release v2.97.0",
          "timestamp": "2026-06-16T15:42:53+02:00",
          "tree_id": "26809da2a6e86cf19736803421e1aae2dff5f71d",
          "url": "https://github.com/fallow-rs/fallow/commit/0b524021686cf1445b974ba9011b4c523de09363"
        },
        "date": 1781617663849,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "d1e3c7e0c1708ccc398575f1cecc6154fcba77f2",
          "message": "feat(angular): unused-component-input / unused-component-output (#1278)\n\nTwo new default-warn IssueKinds gated on @angular/core: unused-component-input\n(@Input/input()/model() read nowhere in its own component, template or class)\nand unused-component-output (@Output/output() emitted nowhere). The\nin-component dead-input/output direction no Angular tooling covers. Direct\nanalogue of the Vue unused-component-prop/-emit rules; real-world validated on\nangular/components at zero false positives. Full surface wiring, fixtures,\nintegration tests, and docs. Wave 2 W2.1 of the framework-parity program.",
          "timestamp": "2026-06-16T16:26:52+02:00",
          "tree_id": "c69b52a30b2b542d893f4bce8c1f54084f194ad2",
          "url": "https://github.com/fallow-rs/fallow/commit/d1e3c7e0c1708ccc398575f1cecc6154fcba77f2"
        },
        "date": 1781620591784,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "6fb5ff7dc01193cf6cf7a90fd3a1a9b64d008f11",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.97.0",
          "timestamp": "2026-06-16T17:41:30+02:00",
          "tree_id": "0a852678ba08cef3e0d73eee156b754a9d24a8ea",
          "url": "https://github.com/fallow-rs/fallow/commit/6fb5ff7dc01193cf6cf7a90fd3a1a9b64d008f11"
        },
        "date": 1781624868119,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "5eba61acd872199708efb426f460ae7710a87d80",
          "message": "feat(extract): Vue Options-API coverage for unused-component-prop/-emit (#1279)\n\nExtends unused-component-prop / unused-component-emit (previously script-setup\nonly) to the Vue Options API: harvests props:/emits: from export default {} /\ndefineComponent({}) in non-setup <script>. this.<prop>/template usage credit\nfor props; this.\\$emit/template \\$emit for emits. Whole-component abstain on\nmixins:/extends:, dynamic access, unharvestable values, and setup(props,{emit}).\nNo new IssueKind; CACHE_VERSION 171->172. Wave 2 W2.3.",
          "timestamp": "2026-06-16T17:50:57+02:00",
          "tree_id": "69cbb06a58c196e3f88ab5f5033cfcf18aecf438",
          "url": "https://github.com/fallow-rs/fallow/commit/5eba61acd872199708efb426f460ae7710a87d80"
        },
        "date": 1781625342219,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "dfaf4dc8d18b0ca7f29d49e3b800492bfe524661",
          "message": "feat(extract): Svelte 5 runes extraction (script module + $props harvest) (#1280)\n\nRecognize bare <script module> (Svelte 5) as module context via\nSVELTE_MODULE_ATTR_RE (FP fix in Svelte unused-import/export detection), and\nharvest \\$props() destructure into declared prop names (reusing the Vue\nComponentProp IR + abstain flags) as groundwork for W2.2. Ships no Svelte prop\ndetector (prop-deadness is a non-goal). CACHE_VERSION 172->173. Wave 1 W1.1.",
          "timestamp": "2026-06-16T18:19:06+02:00",
          "tree_id": "6d41c92fbedd473cc9e480aad04477f7eedbf844",
          "url": "https://github.com/fallow-rs/fallow/commit/dfaf4dc8d18b0ca7f29d49e3b800492bfe524661"
        },
        "date": 1781627028755,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "5275ec5945b195269797dfb9e45b190b61a86251",
          "message": "feat(analyze): flag Svelte events dispatched but listened nowhere (#1283)\n\nNew default-warn IssueKind unused-svelte-event (gated on svelte): a Svelte\ncomponent dispatching a custom event via createEventDispatcher whose name is\nlistened to nowhere project-wide. Cross-file dead-output direction, no native\ncoverage. Two-pass set-difference detector (liberal listened set, flag the\ndisjoint). Abstains on dynamic/forwarded dispatch; DOM on:click excluded.\nCACHE_VERSION 173->174. Zero-FP on Budibase (6 true positives). Wave 2 W2.2.",
          "timestamp": "2026-06-16T22:39:46+02:00",
          "tree_id": "5790f221257bf3363db2b3cc870585d4dc87d585",
          "url": "https://github.com/fallow-rs/fallow/commit/5275ec5945b195269797dfb9e45b190b61a86251"
        },
        "date": 1781642626198,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "687edc3286d61c90f9c13bcc3ce2173a7130c03e",
          "message": "feat(analyze): extend unrendered-component to Angular (#1286)\n\nAdds an Angular arm to the existing unrendered-component rule (framework\nangular, no new IssueKind): an @Component whose element selector is used in no\ntemplate project-wide and that is not routed/bootstrapped/dynamically\nrendered. FP-safe abstains incl. the bare loadComponent default-export lazy\nform (default-export-referenced graph signal). CACHE_VERSION 174->175. Zero-FP\non angular-realworld. Wave 4 W4.2.",
          "timestamp": "2026-06-16T23:36:53+02:00",
          "tree_id": "58262c2d20a52583fa91c1d3f42b7c73256f9f46",
          "url": "https://github.com/fallow-rs/fallow/commit/687edc3286d61c90f9c13bcc3ce2173a7130c03e"
        },
        "date": 1781646284142,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "3f991594b29a987a5eef87315bb12d46d8bef3cc",
          "message": "feat(unprovided-inject): extend to Angular InjectionToken DI (#1287)\n\nExtends the existing unprovided-inject rule (Vue/Svelte) to Angular: a user\nInjectionToken injected via inject(TOKEN) or an @Inject(TOKEN) constructor\nparameter that is supplied by no provider project-wide is flagged. Reuses the\nIssueKind, rule key, and suppress token; gated on @angular/core. Scopes to user\nInjectionToken symbols only (class tokens out of scope), with abstains for\noptional injects, npm-package tokens, public-API tokens, and an opaque provider\ngraph. Validated at zero false positives on the angular/components monorepo.",
          "timestamp": "2026-06-17T00:25:17+02:00",
          "tree_id": "36651da7d9cff528b8ae34f0454e3b2aff423a25",
          "url": "https://github.com/fallow-rs/fallow/commit/3f991594b29a987a5eef87315bb12d46d8bef3cc"
        },
        "date": 1781648981243,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "7537eccdf15dddfd7713b06a81587e0f266765dc",
          "message": "feat(health): score Vue and Svelte SFC template complexity (#1288)\n\nVue and Svelte SFCs now contribute a synthetic <template> complexity entry to\nthe health complexity aggregate, mirroring Angular's path: template control flow\n(v-if/v-for; {#if}/{#each}/{#await}) plus bound-directive and interpolation\nexpressions fold into the file's complexity score, hotspots, and\nhealth --complexity findings. Reuses existing thresholds; no new rule or surface.\nThe JS-expression engine is factored into template_complexity/engine.rs and\nshared by all three scanners (Angular unchanged). Each SFC scanner masks\n<script>/<style> so script complexity is not double-counted. CACHE_VERSION 177.\nSFC render fan-in is a deliberate non-goal (module fan-in covers it). Validated\non vue-element-admin, svelte realworld, and bits-ui with no panics.",
          "timestamp": "2026-06-17T00:52:18+02:00",
          "tree_id": "2882ff7e8c6d8b4bf696a680baac15f609af8043",
          "url": "https://github.com/fallow-rs/fallow/commit/7537eccdf15dddfd7713b06a81587e0f266765dc"
        },
        "date": 1781650605136,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "362b93bf156231ce4e1096e8aa72d7e7fa82b26e",
          "message": "feat(rsc): widen directive rules beyond Next + cover inline use-server actions (#1289)\n\nW4.3: misplaced-directive and mixed-client-server-barrel now activate for any RSC\nbundler (next, waku, @lazarv/react-server, react-server-dom-{webpack,vite,parcel},\n@vitejs/plugin-rsc) via a shared project_uses_rsc_directives predicate, since both\nfootguns are universal RSC. invalid-client-export and unused-server-action stay\nNext-gated. W4.4: unused-server-action now also reclassifies inline \"use server\"\nbody directives (export async function f() { \"use server\" }) from unused-export to\nunused-server-action, inheriting every unused-export abstain. CACHE_VERSION 178.\nZero false positives on vercel ai-chatbot and commerce.",
          "timestamp": "2026-06-17T01:19:16+02:00",
          "tree_id": "d91442b7b6151469fd2cf547e1ab62fa5f667b2e",
          "url": "https://github.com/fallow-rs/fallow/commit/362b93bf156231ce4e1096e8aa72d7e7fa82b26e"
        },
        "date": 1781652409097,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "aec4ed5ea2647241eae08f956818e4a2af639aac",
          "message": "fix: credit Playwright fixture branch aliases\n\nPlaywright fixture callbacks now track simple local aliases that resolve to destructured fixture objects or dotted fixture paths. Ternaries, if/else assignments, and switch assignments credit every fixture target when all branches remain fixture-derived, while shadowing and unknown reassignments stay conservative.\n\nSame-file local base.extend<T>(...) fixture constants now participate in mergeTests(...) wrapper expansion through a Playwright-only internal key, so merged tests inherit local fixture targets without changing public export semantics. The extraction cache is bumped because warm caches can miss the new fixture-use sentinels.\n\nFixes #1270.",
          "timestamp": "2026-06-17T08:32:58+02:00",
          "tree_id": "9f9b935f4760f43cdb7f389c81697ccf5d66ccd2",
          "url": "https://github.com/fallow-rs/fallow/commit/aec4ed5ea2647241eae08f956818e4a2af639aac"
        },
        "date": 1781678535088,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "fc51fe60a4420d96fe3ee74204b519795e14c0b3",
          "message": "fix(health): score Svelte attribute-binding expressions in template complexity (#1291)\n\nThe Svelte SFC <template> complexity scanner skipped each HTML tag wholesale, so\nexpression complexity inside attribute bindings (class={cond ? a : b},\nonclick={x && y}, class:active={...}) was never counted, while Vue (:class) and\nAngular ([class]) scored it. scan_element now scans tag-interior { ... } bindings\nand scores each expression (quote-aware, reusing find_matching_curly). Text\ninterpolations and {#block} control flow unchanged (no double-counting). All five\ncross-framework calibration cases now score identically across Vue/Svelte/Angular.\nThe SFC template complexity feature is unreleased, so no published behavior changes.",
          "timestamp": "2026-06-17T08:44:00+02:00",
          "tree_id": "3319bc4f5000c3bee72d2283a8a8ccc075f9d183",
          "url": "https://github.com/fallow-rs/fallow/commit/fc51fe60a4420d96fe3ee74204b519795e14c0b3"
        },
        "date": 1781679011251,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "29e69c21158eecf3578e21a9b353692e89e47f3c",
          "message": "fix: keep JSX depth descriptive\n\nKeep JSX nesting as descriptive React layout context instead of folding it into cognitive complexity. Presentational React and Preact components still report react_jsx_max_depth for hotspot context, but pure markup depth no longer emits jsx-depth contributions or deepens nested ternary weights.\n\nKeep the public jsx-depth contribution kind in the schema for compatibility, update MCP and docs wording, and bump the extract cache version so stale cached React complexity scores are refreshed.\n\nFixes #1281.",
          "timestamp": "2026-06-17T08:52:41+02:00",
          "tree_id": "9c3221f40dba9f2a3c7973fe8b23b8f9ae1e7c2d",
          "url": "https://github.com/fallow-rs/fallow/commit/29e69c21158eecf3578e21a9b353692e89e47f3c"
        },
        "date": 1781679406351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "f59a2d6417b597fc13b1d1872c8415924c7fcef8",
          "message": "chore(vscode): stop committing dist bundle; build fresh in CI/release\n\nThe marketplace VSIX is built fresh from src by ci.yml and release.yml\n(vscode-prep runs pnpm build then pnpm package), so the committed\ndist/extension.js never reached users. Tracking it only produced\nrecurring stale-dist CI failures whenever a direct-to-main push touched\nsrc or the output schema without rebuilding the bundle.\n\nGitignore editors/vscode/dist/, untrack the bundle and its sourcemap,\nand drop the now-pointless check:dist drift guard (CI step + script).\nUpdate AGENTS.md and the vscode-reviewer checklist to match.",
          "timestamp": "2026-06-17T09:17:50+02:00",
          "tree_id": "c33c983d29f5490dce99ff0099607a792d919988",
          "url": "https://github.com/fallow-rs/fallow/commit/f59a2d6417b597fc13b1d1872c8415924c7fcef8"
        },
        "date": 1781680903707,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "822d53caac16c115f9420a58606b266564391753",
          "message": "chore(deps-dev): bump @vscode/test-electron in /editors/vscode\n\nBumps [@vscode/test-electron](https://github.com/Microsoft/vscode-test) from 2.5.2 to 3.0.0.\n- [Changelog](https://github.com/microsoft/vscode-test/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/Microsoft/vscode-test/commits)\n\n---\nupdated-dependencies:\n- dependency-name: \"@vscode/test-electron\"\n  dependency-version: 3.0.0\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-17T09:23:53+02:00",
          "tree_id": "428c2930677f7583ce23aff7e30164a173d0cb19",
          "url": "https://github.com/fallow-rs/fallow/commit/822d53caac16c115f9420a58606b266564391753"
        },
        "date": 1781681251995,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "71af94a214c69cbd80165083bc1ef99f69c2826f",
          "message": "chore(deps): bump docker node runtime to 26",
          "timestamp": "2026-06-17T10:05:40+02:00",
          "tree_id": "6c1dcb678a90afe87a75dfa2033848311d6191ec",
          "url": "https://github.com/fallow-rs/fallow/commit/71af94a214c69cbd80165083bc1ef99f69c2826f"
        },
        "date": 1781683781118,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "b66c18ac23a61de62a4a192ac0ec90b5f573af86",
          "message": "fix(output): add framework action guidance\n\nLead framework dead-code findings with manual fix actions before the suppress fallback. The new action discriminants cover server actions, injects, SvelteKit load keys, unrendered components, Vue props and emits, and Svelte events while keeping every path non-auto-fixable.\n\nClarify template and component complexity rows in human and markdown health output while keeping machine-readable names stable. Regenerate the output schema and published TypeScript contracts so structured consumers see the new action vocabulary.",
          "timestamp": "2026-06-17T10:27:54+02:00",
          "tree_id": "7897d210ecf44770fef884e9d41ea7fe742cac88",
          "url": "https://github.com/fallow-rs/fallow/commit/b66c18ac23a61de62a4a192ac0ec90b5f573af86"
        },
        "date": 1781685538716,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "fcff566238d53f9a8b1a13d3364a80652fb9043b",
          "message": "fix(pinia): credit inline storeToRefs members\n\nPinia consumers commonly destructure refs directly from an inline store factory call, for example `storeToRefs(usePermissionsStore())`. The store-member detector already credited `storeToRefs(storeLocal)` and direct `useStore()` destructures, but the inline refs-helper form left those members looking unused.\n\nThis adds a narrow refs-helper argument resolver for tracked store locals and bare store-factory identifier calls, then records the original destructured store key as a member access. Dynamic helper arguments, member callees, and refs-object locals remain out of scope.\n\nThe regression coverage includes extractor tests, a Vue SFC integration fixture, an aliased destructure case, a non-store control, and extraction cache invalidation for the new member-access semantics.\n\nFixes #1282.",
          "timestamp": "2026-06-17T11:01:29+02:00",
          "tree_id": "5105b112a28fba223fcebf490af6d61937637461",
          "url": "https://github.com/fallow-rs/fallow/commit/fcff566238d53f9a8b1a13d3364a80652fb9043b"
        },
        "date": 1781687447659,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "592deffc4a140d7d731ac43abf86975dbdd3ad60",
          "message": "chore: release v2.98.0",
          "timestamp": "2026-06-17T11:40:07+02:00",
          "tree_id": "ee8fbef1ae61d66a1b2801cc0aa78d8ff701f0f7",
          "url": "https://github.com/fallow-rs/fallow/commit/592deffc4a140d7d731ac43abf86975dbdd3ad60"
        },
        "date": 1781689487824,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "9fb44aac4684f23967b73dcaaa30ca8598e2a4f1",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.98.0",
          "timestamp": "2026-06-17T12:30:55+02:00",
          "tree_id": "8f38b1deccdef7256fda48244739ac78d55046c3",
          "url": "https://github.com/fallow-rs/fallow/commit/9fb44aac4684f23967b73dcaaa30ca8598e2a4f1"
        },
        "date": 1781692625413,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "a7c8bc7de7abfc05e695aa28edd921df410b83af",
          "message": "test: improve coverage across CLI output helpers\n\nAdds focused coverage for CLI audit output, combined output helpers, cache notice lifecycle, and human report helper behavior.\n\nThe branch keeps production code unchanged and stops the coverage loop once the remaining gains became marginal.",
          "timestamp": "2026-06-17T13:10:47+02:00",
          "tree_id": "4ae405990625b22a3186685e65385c6e4eeab2d7",
          "url": "https://github.com/fallow-rs/fallow/commit/a7c8bc7de7abfc05e695aa28edd921df410b83af"
        },
        "date": 1781694911090,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "e99bd54613928a8d6908d9be35e1f445512f081b",
          "message": "feat(benchmarks): add codspeed command profiles\n\nAdds a dedicated unpublished benchmark crate using the CodSpeed Divan compatibility layer. The suite covers programmatic command profiles for dead code, duplication, circular dependency, health, CSS, warm-cache, library, app-router, and monorepo shapes.\n\nWires the CSS health option through the programmatic and NAPI surfaces so the benchmark suite can exercise the same command-adjacent API path that integrations use.\n\nUpdates the CodSpeed workflow to run core analysis and programmatic command profiles together, pins cargo-codspeed, and makes the multiline action run fail fast.",
          "timestamp": "2026-06-17T13:44:43+02:00",
          "tree_id": "a9a0cdee9e84fc58ef5f7281ca6a89e54f3ce53a",
          "url": "https://github.com/fallow-rs/fallow/commit/e99bd54613928a8d6908d9be35e1f445512f081b"
        },
        "date": 1781696903641,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "a2f60564123faa767dd8775a16bc1dfafaf09f13",
          "message": "feat(benchmarks): sharpen codspeed insights\n\nSplits the CodSpeed simulation workflow into separate matrix shards for core analysis and programmatic command profiles. This keeps reports grouped by benchmark family while preserving tokenless public-repository uploads and the existing fast PR budget.\n\nExpands the programmatic command benchmark fixtures so the CodSpeed report names the command and repo shape being exercised. The suite now distinguishes package exports, Next app-router segments, cross-package workspace imports, repeated route callback duplication, domain graph cycles, service complexity, Tailwind CSS health, and warm-cache analysis.\n\nLeaves true binary-level CLI benchmarking out of scope for this change because spawned-child Divan benches are not the right simulation target. A future walltime or codspeed exec path can measure the release binary directly.",
          "timestamp": "2026-06-17T14:25:13+02:00",
          "tree_id": "499fa20855a0ec10880f6df902eec3828cf8f2aa",
          "url": "https://github.com/fallow-rs/fallow/commit/a2f60564123faa767dd8775a16bc1dfafaf09f13"
        },
        "date": 1781699484082,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "cd157f0c02d8b1ed5d668eb9e4ae6409cc449351",
          "message": "chore: add Cargo lint profile hygiene",
          "timestamp": "2026-06-17T14:56:34+02:00",
          "tree_id": "d738cf5900bd19a0bcad3f049ca8c92934400813",
          "url": "https://github.com/fallow-rs/fallow/commit/cd157f0c02d8b1ed5d668eb9e4ae6409cc449351"
        },
        "date": 1781701283767,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "cb4b4c2fb465ceb89894dc668478e201f090eabd",
          "message": "refactor: centralize issue metadata and regeneration\n\n* chore: open issue metadata implementation branch\n\n* refactor: centralize issue metadata and regeneration\n\n* chore: fix benchmark dependency placement\n\n* ci: trim miri extract scope",
          "timestamp": "2026-06-17T17:00:04+02:00",
          "tree_id": "50038da8d5d891d0443f691fdcd832f0dfc8cf4c",
          "url": "https://github.com/fallow-rs/fallow/commit/cb4b4c2fb465ceb89894dc668478e201f090eabd"
        },
        "date": 1781708779629,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "c7bcdd3e516736bb9bd923db39303d4c5d20e11f",
          "message": "refactor: reduce SIG unit interfacing\n\nReduce SIG unit-interfacing pressure by grouping long argument lists behind focused input structs while preserving existing analyzer and reporting behavior.\n\nKeep review fixes with the branch: CodeClimate severity handling stays guarded for empty output, benchmark-only dependencies live under dev-dependencies, and CI runs targeted extract Miri checks to stay within the runner budget.",
          "timestamp": "2026-06-17T17:20:28+02:00",
          "tree_id": "2a0d71aee037ba0023bd7743c9a3d249df61406a",
          "url": "https://github.com/fallow-rs/fallow/commit/c7bcdd3e516736bb9bd923db39303d4c5d20e11f"
        },
        "date": 1781710042440,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "4767347e04cdf0662e17a06027dd73a3cd35f496",
          "message": "fix(vscode): defer startup LSP analysis\n\nWait until the first document opens before triggering workspace analysis from the LSP server. VS Codium was showing stale startup totals because the extension consumed the initial analysis result before the workspace had published any open documents.\n\nSave-triggered analysis now waits behind the in-flight startup analysis instead of being dropped when the analysis guard is busy. The runner re-checks cancellation after acquiring the guard so shutdown still avoids publishing stale results.\n\nFixes #1303.",
          "timestamp": "2026-06-17T17:49:10+02:00",
          "tree_id": "2c09258df26a7172e19ed15329adabdf1535a88d",
          "url": "https://github.com/fallow-rs/fallow/commit/4767347e04cdf0662e17a06027dd73a3cd35f496"
        },
        "date": 1781711657640,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "e588428bc570a98397ea182e069e72b07bd52811",
          "message": "chore(benchmarks): switch codspeed benches to criterion2\n\nReplace the Divan compatibility harness with criterion2 for the Rust benchmark suites while preserving CodSpeed simulation coverage.\n\nConvert the core analysis, large analysis, and programmatic command benches to Criterion-style groups so local benchmark output includes the statistical comparisons used by the Oxc ecosystem.\n\nWire the benchmark packages through a codspeed feature and update the benchmark workflow to build instrumented criterion2 harnesses before running the existing shards.",
          "timestamp": "2026-06-17T17:58:33+02:00",
          "tree_id": "976dc05fee60f9aba85853a2439c35430174792e",
          "url": "https://github.com/fallow-rs/fallow/commit/e588428bc570a98397ea182e069e72b07bd52811"
        },
        "date": 1781712373605,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "770863eb7e314dc6fb2fee0a547f90eb51fa319c",
          "message": "feat(suppressions): support suppression reasons\n\nParse optional reason text from fallow-ignore comments and @expected-unused tags, carry it through extraction, cache conversion, graph propagation, and stale-suppression reporting.\n\nAdd the opt-in rules.require-suppression-reason setting so teams can enforce documented suppressions without changing the default behavior. Regenerate schema artifacts and generated TypeScript contracts for the additive output and config fields.\n\nFixes #1302.",
          "timestamp": "2026-06-17T18:16:38+02:00",
          "tree_id": "1a7a244cf3f4784b54857c75be833a596feaadb3",
          "url": "https://github.com/fallow-rs/fallow/commit/770863eb7e314dc6fb2fee0a547f90eb51fa319c"
        },
        "date": 1781713282389,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "23d02bbac845ccf9fad1ce6b22de02590a8d5027",
          "message": "fix(unused-exports): credit same-file schema value deps\n\nCredit same-file value exports when they are runtime dependencies of a reachable exported value. This handles Effect Schema patterns where an exported schema value and same-name type alias coexist, and another exported schema references the value locally.\n\nThe detector stays conservative: unrelated sibling schemas and schemas used only by unused parents remain reportable.\n\nFixes #1304.",
          "timestamp": "2026-06-17T18:35:03+02:00",
          "tree_id": "5f7624d49b21f3498e7254a0b885b289aa8495ac",
          "url": "https://github.com/fallow-rs/fallow/commit/23d02bbac845ccf9fad1ce6b22de02590a8d5027"
        },
        "date": 1781714421261,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "4a5c2923929118c54bf8a1dca7c311b10d30d918",
          "message": "fix(catalog): support Bun package.json catalogs\n\nRead Bun catalog definitions from root package.json workspaces.catalog and workspaces.catalogs so unresolved, unused, and empty catalog checks work on Bun workspaces without pnpm-workspace.yaml.\n\nKeep pnpm-workspace.yaml as the preferred catalog source when present, and keep package.json catalog fix paths read-only because Bun owns that format.\n\nFixes #1301.",
          "timestamp": "2026-06-17T19:15:23+02:00",
          "tree_id": "f3206fc0da8c0f3f5f8fc9346ad167ca104c21d3",
          "url": "https://github.com/fallow-rs/fallow/commit/4a5c2923929118c54bf8a1dca7c311b10d30d918"
        },
        "date": 1781716749020,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "9b1f4546ebcfbc186352c60fe19231563cf06bf9",
          "message": "chore: add analyzer follow-up tooling\n\n* chore: open post-pr-1300 followups branch\n\n* chore: add analyzer follow-up tooling\n\n* ci: skip bench targets in test job",
          "timestamp": "2026-06-17T20:11:50+02:00",
          "tree_id": "9170a63209b2faf0b28378f99b7f431744231b01",
          "url": "https://github.com/fallow-rs/fallow/commit/9b1f4546ebcfbc186352c60fe19231563cf06bf9"
        },
        "date": 1781720270976,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "67cc9032ab5eb85b4d0b515160a861ed34917e17",
          "message": "ci: run full codspeed suite on main\n\nKeep pull request CodSpeed feedback focused on the existing fast shards while adding the slower large-analysis shard for main pushes and manual benchmark runs.\n\nThis keeps PR latency low, but gives CodSpeed a fuller current baseline for long-running benchmarks. Removed historical benchmark IDs still need CodSpeed archival after the updated main run lands.",
          "timestamp": "2026-06-17T20:34:43+02:00",
          "tree_id": "f5fafbe261558c891aa4b62fef94f45b384526d4",
          "url": "https://github.com/fallow-rs/fallow/commit/67cc9032ab5eb85b4d0b515160a861ed34917e17"
        },
        "date": 1781721523404,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "cf96273eb884bd06dacf16f37b9917591ff77900",
          "message": "chore: harden CodSpeed benchmarks\n\nImprove benchmark isolation by replacing shared fixed temp paths with owned temporary directories.\n\nAdd a real-source CodSpeed shard that reuses the vendored Zod fixture, plus a bounded scaling shard for PR feedback. The slower full large-analysis suite remains limited to main and manual runs.",
          "timestamp": "2026-06-17T22:12:57+02:00",
          "tree_id": "0c930215c5dbb24c1aac3434340c59572bddca6c",
          "url": "https://github.com/fallow-rs/fallow/commit/cf96273eb884bd06dacf16f37b9917591ff77900"
        },
        "date": 1781727399523,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "df6ab207a72fff23987a64615dd2d740c99d7ed8",
          "message": "fix: track CodSpeed benchmark fixture\n\nReplace the benchmark shard's machine-local real-world corpus path with a crate-local tracked representative TypeScript fixture.\n\nRename the shard to representative sources so clean checkouts build the bench target and the workflow label matches the measured input.",
          "timestamp": "2026-06-17T22:21:03+02:00",
          "tree_id": "df60b281c36fab653d0fa8866ae0b82b47e39db3",
          "url": "https://github.com/fallow-rs/fallow/commit/df6ab207a72fff23987a64615dd2d740c99d7ed8"
        },
        "date": 1781728063682,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "44cbb237cc8a2ffdb25f86b8d5a3bc5dddf5b6bb",
          "message": "fix(review): harden final follow-up edges\n\nAddress final review findings across suppression reporting, catalog parsing, same-file export dependency credit, and LSP diagnostics.\n\nStale suppression findings now carry typed actions, split missing-reason identities across SARIF, CodeClimate, audit, and baselines, and keep generated schemas and editor contracts in sync. Package.json catalog line mapping now respects workspace catalog precedence.\n\nThe same-file export dependency collector now handles shadowed bindings without leaking block-local names, and LSP diagnostics avoid stale open buffers while emitting UTF-16-safe quick fixes.",
          "timestamp": "2026-06-18T07:29:17+02:00",
          "tree_id": "43e671185d3aa1b043e0927ff0b910be490983c7",
          "url": "https://github.com/fallow-rs/fallow/commit/44cbb237cc8a2ffdb25f86b8d5a3bc5dddf5b6bb"
        },
        "date": 1781760839708,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "a1c5876a9ff6facb052bce2e8eb28b01bbf6c33f",
          "message": "fix: restore green CI for suppression-reasons tests\n\nThe just-landed suppression-reasons feature added test code that broke\nclippy (--all-targets) and the VS Code tsc lint:\n\n- four RulesConfig::default() + field-reassign blocks in codeclimate.rs\n  and sarif.rs tripped clippy::field_reassign_with_default; rewritten as\n  struct-update literals\n- a needless Vec collect-then-contains in sarif.rs tripped\n  clippy::needless_collect; rewritten as .any()\n- dead_code_keys_cover_graph_boundary_catalog_and_override_variants was\n  153/150 lines; the results setup is extracted into a helper\n- StaleSuppression now requires the actions field, so the vscode tree\n  and status-bar test fixtures gained actions: []",
          "timestamp": "2026-06-18T08:06:33+02:00",
          "tree_id": "75352255fc09f0c8afbd569b9f3db8457132cc1b",
          "url": "https://github.com/fallow-rs/fallow/commit/a1c5876a9ff6facb052bce2e8eb28b01bbf6c33f"
        },
        "date": 1781763022594,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "6f1803626b4b5f0dfae0aabe205ce5c16f470436",
          "message": "ci(codspeed): harden benchmark workflow\n\nAligns the CodSpeed benchmark workflow with the working sibling-project setup while keeping the existing cargo-codspeed shard model.\n\nThe jobs now request OIDC only where CodSpeed uploads need it, avoid persisting checkout credentials, include setup-rust changes in workflow triggers, and build with debug metadata for better CodSpeed analysis input.",
          "timestamp": "2026-06-18T08:26:30+02:00",
          "tree_id": "4e2b8bbed0c31bdeffe896851ff046440ad96ad6",
          "url": "https://github.com/fallow-rs/fallow/commit/6f1803626b4b5f0dfae0aabe205ce5c16f470436"
        },
        "date": 1781764217019,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "c2be0d597118a1366eeb4f62727dae4cffa5f75c",
          "message": "chore: release v2.99.0",
          "timestamp": "2026-06-18T08:33:53+02:00",
          "tree_id": "357973101a685ee8ff7829e750558d99cb69b2a8",
          "url": "https://github.com/fallow-rs/fallow/commit/c2be0d597118a1366eeb4f62727dae4cffa5f75c"
        },
        "date": 1781764694524,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "0eb7b4925fe623ee4eabec54eeeb42965fa1534f",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.99.0",
          "timestamp": "2026-06-18T09:27:57+02:00",
          "tree_id": "7e57a619a8e69d92ef62f92fc8e1899d3096a2a2",
          "url": "https://github.com/fallow-rs/fallow/commit/0eb7b4925fe623ee4eabec54eeeb42965fa1534f"
        },
        "date": 1781768040818,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "397b1b0e439885eb3adc28930840df7236138cc2",
          "message": "docs: refresh jscpd v5 benchmark results\n\nUpdate the duplication benchmark harness to use jscpd v5 and refresh the README table from a new real-world run.\n\nKeep the benchmark output neutral by reporting the faster tool instead of treating fallow as the baseline. The README now states that jscpd v5 is faster for raw duplication scanning while fallow keeps duplication inside the broader audit flow.\n\nFixes #1316.",
          "timestamp": "2026-06-18T11:13:12+02:00",
          "tree_id": "758245eae85e8e813639e0bcbc4d3ed2378e29e1",
          "url": "https://github.com/fallow-rs/fallow/commit/397b1b0e439885eb3adc28930840df7236138cc2"
        },
        "date": 1781774224402,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "fb33eae157748852a26f05154c3152ce5568c0d6",
          "message": "feat: detect duplicate code in web format sections\n\nDetect duplicate code in CSS-family files and authored template/style regions in Vue, Svelte, and Astro files.",
          "timestamp": "2026-06-18T12:52:39+02:00",
          "tree_id": "f3cdd630ad8cf9e3efc1def1c57f1407e7ad89c3",
          "url": "https://github.com/fallow-rs/fallow/commit/fb33eae157748852a26f05154c3152ce5568c0d6"
        },
        "date": 1781780184712,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "709fe1bf62bfc5da82d8462f4010a880ef94c642",
          "message": "docs(benchmarks): refresh comparison tables\n\nRefresh the benchmark harness to compare dead-code runs against the current installed knip package instead of carrying legacy knip version columns. Align dead-code and dupes benchmark summaries around the same comparator and faster-tool fields, and keep the comparison helper from reporting n/a when knip has no comparable findings.\n\nUpdate the README performance section with current real-world benchmark medians from the refreshed harness, and keep benchmark scripts ASCII-clean for the repo style rules.",
          "timestamp": "2026-06-18T13:13:30+02:00",
          "tree_id": "b2bff590fda98c76d60ce8089781e58589350a94",
          "url": "https://github.com/fallow-rs/fallow/commit/709fe1bf62bfc5da82d8462f4010a880ef94c642"
        },
        "date": 1781781424365,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "daf95918dcb3b4d2220372402b0ef93ad6493eb4",
          "message": "feat: detect unused svelte component props\n\nExtends the existing unused-component-prop analyzer to consume Svelte 5 () harvest data alongside Vue and React prop findings.\\n\\nThe Svelte arm is dependency-gated on svelte or @sveltejs/kit, keeps the existing conservative abstains for opaque prop usage, and reports through the existing output shape and suppression token.\\n\\nUpdates generated contracts, SARIF snapshots, bundled docs, and integration fixtures for positive, usage-credit, abstain, and dependency-gate coverage.",
          "timestamp": "2026-06-18T13:30:19+02:00",
          "tree_id": "0e667e7780619f195eff4c8c60d333f88445fc6a",
          "url": "https://github.com/fallow-rs/fallow/commit/daf95918dcb3b4d2220372402b0ef93ad6493eb4"
        },
        "date": 1781782742484,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "0a058b6912ef89ef22ac10afefdf3b18a7f18a3b",
          "message": "feat(security): add verifier workflow outputs\n\nAdd security survivor rendering so externally verified verdict files can be joined with raw fallow security candidates without rewriting the candidate output.\n\nAdd blind-spot grouping for unresolved security callees, wire the new output contracts through schema generation and generated TypeScript types, and document the CLI verification flow.",
          "timestamp": "2026-06-18T14:12:38+02:00",
          "tree_id": "a7104d83678d25dd50f02940cc1cd89729b1626b",
          "url": "https://github.com/fallow-rs/fallow/commit/0a058b6912ef89ef22ac10afefdf3b18a7f18a3b"
        },
        "date": 1781785093285,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "c5f69714f4eafecfed254e2763bb2206fbc58422",
          "message": "feat: expose framework health diagnostics\n\nAdd optional framework health diagnostics to health JSON output when the run already has analysis data. The payload reports detected framework ids and scoped detector statuses for active, disabled, abstained, and not-checked detectors.\n\nPreserve pre-parsed health analysis parity by deriving release-time module fields before analysis, so framework detector abstains are visible in health score runs too.",
          "timestamp": "2026-06-18T14:20:32+02:00",
          "tree_id": "e3ce4fdab46c37fce036740c2b6bd31902950c32",
          "url": "https://github.com/fallow-rs/fallow/commit/c5f69714f4eafecfed254e2763bb2206fbc58422"
        },
        "date": 1781785858595,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "9cadc4b71b358695d9a77c60a9fab331fc800f93",
          "message": "perf: reduce duplicate matching work for web formats\n\nAdd a global duplicate-shingle prefilter, namespace duplicate token hashes across JS, style, and markup sections, and adjust the real-world benchmark watchdog for the expanded Next.js combined-analysis surface.",
          "timestamp": "2026-06-18T14:53:17+02:00",
          "tree_id": "2fb56bc22d8101e6966c6c392cb99a52d66a89fd",
          "url": "https://github.com/fallow-rs/fallow/commit/9cadc4b71b358695d9a77c60a9fab331fc800f93"
        },
        "date": 1781787429768,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "a742fe4d876d1ae634309d7e4f470b02f7a84eb5",
          "message": "feat(inspect): add CLI evidence bundle flow\n\nExpose `fallow inspect` as the CLI and editor path for the same evidence bundle that MCP `inspect_target` returns. The CLI composes trace, dead-code, duplication, complexity, and security evidence without adding a new analyzer pass.\n\nRoute the MCP tool through the CLI adapter, document the typed `inspect_target` root output in the schema, and regenerate the VS Code and npm contracts. The VS Code command now saves dirty active files before inspection and consumes the generated output type.\n\nTighten dogfood coverage for health, duplication, audit, duplicate config keys, and GitHub/GitLab renderer parity while keeping the core dead-code orchestration refactor local to result collection.",
          "timestamp": "2026-06-18T15:15:32+02:00",
          "tree_id": "d426dc2f6ada742222db53d12dd4ff1ad67be5c2",
          "url": "https://github.com/fallow-rs/fallow/commit/a742fe4d876d1ae634309d7e4f470b02f7a84eb5"
        },
        "date": 1781788923239,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "f8efb2e131ec4ae132fe2a90476fdb5079319435",
          "message": "fix(security): reject unsupported workflow flags\n\nKeep derived security workflow subcommands honest by rendering clap parse errors as JSON when requested and rejecting hidden parent flags instead of accepting no-op behavior.\n\nClarify verdict fields that fallow preserves versus harness-owned audit fields, and cover the review findings with focused workflow tests.",
          "timestamp": "2026-06-18T15:28:35+02:00",
          "tree_id": "923a69ab0c385e1758391fc40408a02f5bf3228f",
          "url": "https://github.com/fallow-rs/fallow/commit/f8efb2e131ec4ae132fe2a90476fdb5079319435"
        },
        "date": 1781789662552,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "bbc4116ec005e9e96d892da45bc869800b5c3373",
          "message": "ci: keep benchmark watchdog in script\n\nReplace the external timeout wrapper with a script-local PID watchdog so real-world benchmark timeouts produce normal diagnostics and artifacts.",
          "timestamp": "2026-06-18T15:43:11+02:00",
          "tree_id": "81dd11d159f54f7ea40135a2e9fa0138855231f8",
          "url": "https://github.com/fallow-rs/fallow/commit/bbc4116ec005e9e96d892da45bc869800b5c3373"
        },
        "date": 1781790416854,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "4ee0c2e35aedea68cf6eadc87f7207ca71ec8142",
          "message": "fix(ci): stream real-world benchmark logs\n\nKeep the real-world benchmark stderr artifact while also streaming progress to the Actions log, so benchmark runs do not go silent and timeout diagnostics remain visible.",
          "timestamp": "2026-06-18T16:00:35+02:00",
          "tree_id": "87329f8c0472743a17d50b546281c25dd6f47759",
          "url": "https://github.com/fallow-rs/fallow/commit/4ee0c2e35aedea68cf6eadc87f7207ca71ec8142"
        },
        "date": 1781791459577,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "148f4cbc1137f63d2285322393a823c442cd6482",
          "message": "ci: stream real-world benchmark progress\n\nStream real-world benchmark progress to Actions logs while preserving stderr artifacts, preventing silent benchmark steps from being terminated before diagnostics upload.",
          "timestamp": "2026-06-18T16:19:37+02:00",
          "tree_id": "cea8d7ac62b6cf9e7494d58f56c8849c181f8704",
          "url": "https://github.com/fallow-rs/fallow/commit/148f4cbc1137f63d2285322393a823c442cd6482"
        },
        "date": 1781792614136,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "126864019f9b31d5f8a52a9751d7190b840ced48",
          "message": "fix(ci): keep benchmark harness active\n\nAdd heartbeat output during long real-world benchmark installs and fallow runs so CI does not terminate the harness without artifacts.",
          "timestamp": "2026-06-18T16:27:34+02:00",
          "tree_id": "a0505dbed0e0b8b148b751f3f252ee66cee698bb",
          "url": "https://github.com/fallow-rs/fallow/commit/126864019f9b31d5f8a52a9751d7190b840ced48"
        },
        "date": 1781793090414,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "189b7e2e1682a6bb2f795bf9cc92eacbd6ad1688",
          "message": "fix(inspect): preserve inspect scope in child runs\n\nNormalize inspect targets before child analysis so absolute editor paths compare against root-relative analyzer output, and forward parent execution flags consistently without passing production toggles to security children.\n\nMake VS Code inspect resolve folder-scoped config, retry stale CLIs with the managed binary, and keep subcommand fallback parsing precise. Improve benchmark timeout cleanup and diagnostics while updating the generated fallow skill command list.",
          "timestamp": "2026-06-18T16:33:00+02:00",
          "tree_id": "913ce804943369e96dec6ea7111c584936806544",
          "url": "https://github.com/fallow-rs/fallow/commit/189b7e2e1682a6bb2f795bf9cc92eacbd6ad1688"
        },
        "date": 1781793437968,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "a154759c88bf11a31bb1a8a721f2b1b3e16db686",
          "message": "fix(inspect): satisfy CI follow-up gates\n\nAdjust inspect test helpers for the full clippy target set, make target normalization tests host-native for Windows, and preserve the caught VS Code inspect fallback error as the thrown cause.",
          "timestamp": "2026-06-18T17:17:54+02:00",
          "tree_id": "03123e8bd781c1f0215fcddf5444af4b284edcc9",
          "url": "https://github.com/fallow-rs/fallow/commit/a154759c88bf11a31bb1a8a721f2b1b3e16db686"
        },
        "date": 1781796092640,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "88b0c6b8465dd6272d86f813f14e560e85430502",
          "message": "fix(ci): skip timed out benchmark projects\n\nKeep real-world benchmark runs from failing the whole workflow when one project hits the per-project watchdog; partial benchmark JSON is still produced with skip diagnostics.",
          "timestamp": "2026-06-18T17:28:02+02:00",
          "tree_id": "88006cb5528184ebfdf5bc4b26819e7254468c7b",
          "url": "https://github.com/fallow-rs/fallow/commit/88b0c6b8465dd6272d86f813f14e560e85430502"
        },
        "date": 1781796733812,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "ce9c16897b048a487804b0cb6429a5b897728663",
          "message": "fix(vscode): forward inspect production opt-out\n\nForward the explicit VS Code production=false override to fallow inspect as --no-production so editor inspect matches the sidebar and project-level CLI behavior.\n\nAdd a focused argument-builder regression test for the false override.",
          "timestamp": "2026-06-18T19:29:58+02:00",
          "tree_id": "e9f055fbf1781e41d8221dd1b3ad4061e2b1b379",
          "url": "https://github.com/fallow-rs/fallow/commit/ce9c16897b048a487804b0cb6429a5b897728663"
        },
        "date": 1781804018123,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "b3b936f277b6c2c99b584bab19799fdd30df7a5a",
          "message": "feat: add catalogue-backed effect policy\n\nAdd `banned-effect` rule-pack support backed by the security catalogue effect taxonomy. Rule packs can now ban effect classes such as network, storage, shell, crypto, randomness, DOM, and database while preserving the existing `policy-violation` output family and scoped suppression model.\n\nThe implementation annotates every security matcher with an effect, validates kind-specific rule-pack fields, resolves effect matches through written and import-resolved callee paths, and carries the new rule kind through JSON, schemas, SARIF, MCP, VS Code, npm contracts, action summaries, docs, and fixtures.\n\nFixes #1143.",
          "timestamp": "2026-06-19T07:25:44+02:00",
          "tree_id": "13bd5ccd4170c5cdb8a8b72e3d04a08257721477",
          "url": "https://github.com/fallow-rs/fallow/commit/b3b936f277b6c2c99b584bab19799fdd30df7a5a"
        },
        "date": 1781847391947,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "78e21330430985dea8dd419c156d81dc17094a8a",
          "message": "fix: tighten security workflow outputs\n\nTighten the security survivor and blind-spots workflows for CI and agent consumers.\n\nSurvivor output now uses schema version 2, reports unreviewed candidates through `summary.unverdicted`, and offers a strict complete-verdict gate for CI. The human output separates verifier dispositions from unreviewed candidates so fallow still presents candidates, not proven vulnerabilities.\n\nBlind-spots now accepts `--file` after the subcommand and keeps scoped unresolved-callee summary counts aligned with scoped diagnostics. Docs, generated schema, TypeScript contracts, and bundled agent guidance were updated with the new contract.",
          "timestamp": "2026-06-19T08:01:00+02:00",
          "tree_id": "8ed003b37d2346c8f35ed899401d27bd31119594",
          "url": "https://github.com/fallow-rs/fallow/commit/78e21330430985dea8dd419c156d81dc17094a8a"
        },
        "date": 1781849123659,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "b446f0068bc2729ccd7a6801722a2c5599012a6f",
          "message": "fix(unused-exports): report local-only value exports\n\nReport value exports as unused when they have no reachable cross-file references, even if another same-file export still needs the local declaration.\n\nThe fix keeps the existing remove-export action semantics, consumes matching unused-export suppressions, and leaves ignoreExportsUsedInFile as the opt-in escape hatch for teams that want to keep local-only exports public.",
          "timestamp": "2026-06-19T08:06:26+02:00",
          "tree_id": "d8021d05086577d09470630ab83f230b434ecc92",
          "url": "https://github.com/fallow-rs/fallow/commit/b446f0068bc2729ccd7a6801722a2c5599012a6f"
        },
        "date": 1781849412079,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
          }
        ]
      }
    ]
  }
}