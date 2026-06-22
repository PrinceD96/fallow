window.BENCHMARK_DATA = {
  "lastUpdate": 1782125855295,
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
        "date": 1781685405820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7748905,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36788,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 750154,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6195,
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
          "id": "fcff566238d53f9a8b1a13d3364a80652fb9043b",
          "message": "fix(pinia): credit inline storeToRefs members\n\nPinia consumers commonly destructure refs directly from an inline store factory call, for example `storeToRefs(usePermissionsStore())`. The store-member detector already credited `storeToRefs(storeLocal)` and direct `useStore()` destructures, but the inline refs-helper form left those members looking unused.\n\nThis adds a narrow refs-helper argument resolver for tracked store locals and bare store-factory identifier calls, then records the original destructured store key as a member access. Dynamic helper arguments, member callees, and refs-object locals remain out of scope.\n\nThe regression coverage includes extractor tests, a Vue SFC integration fixture, an aliased destructure case, a non-store control, and extraction cache invalidation for the new member-access semantics.\n\nFixes #1282.",
          "timestamp": "2026-06-17T11:01:29+02:00",
          "tree_id": "5105b112a28fba223fcebf490af6d61937637461",
          "url": "https://github.com/fallow-rs/fallow/commit/fcff566238d53f9a8b1a13d3364a80652fb9043b"
        },
        "date": 1781687227739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7719417,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36742,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 793938,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6694,
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
          "id": "592deffc4a140d7d731ac43abf86975dbdd3ad60",
          "message": "chore: release v2.98.0",
          "timestamp": "2026-06-17T11:40:07+02:00",
          "tree_id": "ee8fbef1ae61d66a1b2801cc0aa78d8ff701f0f7",
          "url": "https://github.com/fallow-rs/fallow/commit/592deffc4a140d7d731ac43abf86975dbdd3ad60"
        },
        "date": 1781689454240,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7693745,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36751,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 746010,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6193,
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
          "id": "9fb44aac4684f23967b73dcaaa30ca8598e2a4f1",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.98.0",
          "timestamp": "2026-06-17T12:30:55+02:00",
          "tree_id": "8f38b1deccdef7256fda48244739ac78d55046c3",
          "url": "https://github.com/fallow-rs/fallow/commit/9fb44aac4684f23967b73dcaaa30ca8598e2a4f1"
        },
        "date": 1781692552683,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7695001,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36771,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 793886,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6694,
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
          "id": "a7c8bc7de7abfc05e695aa28edd921df410b83af",
          "message": "test: improve coverage across CLI output helpers\n\nAdds focused coverage for CLI audit output, combined output helpers, cache notice lifecycle, and human report helper behavior.\n\nThe branch keeps production code unchanged and stops the coverage loop once the remaining gains became marginal.",
          "timestamp": "2026-06-17T13:10:47+02:00",
          "tree_id": "4ae405990625b22a3186685e65385c6e4eeab2d7",
          "url": "https://github.com/fallow-rs/fallow/commit/a7c8bc7de7abfc05e695aa28edd921df410b83af"
        },
        "date": 1781694859885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7756665,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36790,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 798082,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6696,
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
          "id": "e99bd54613928a8d6908d9be35e1f445512f081b",
          "message": "feat(benchmarks): add codspeed command profiles\n\nAdds a dedicated unpublished benchmark crate using the CodSpeed Divan compatibility layer. The suite covers programmatic command profiles for dead code, duplication, circular dependency, health, CSS, warm-cache, library, app-router, and monorepo shapes.\n\nWires the CSS health option through the programmatic and NAPI surfaces so the benchmark suite can exercise the same command-adjacent API path that integrations use.\n\nUpdates the CodSpeed workflow to run core analysis and programmatic command profiles together, pins cargo-codspeed, and makes the multiline action run fail fast.",
          "timestamp": "2026-06-17T13:44:43+02:00",
          "tree_id": "a9a0cdee9e84fc58ef5f7281ca6a89e54f3ce53a",
          "url": "https://github.com/fallow-rs/fallow/commit/e99bd54613928a8d6908d9be35e1f445512f081b"
        },
        "date": 1781696914671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7703257,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36749,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 793938,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6694,
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
          "id": "a2f60564123faa767dd8775a16bc1dfafaf09f13",
          "message": "feat(benchmarks): sharpen codspeed insights\n\nSplits the CodSpeed simulation workflow into separate matrix shards for core analysis and programmatic command profiles. This keeps reports grouped by benchmark family while preserving tokenless public-repository uploads and the existing fast PR budget.\n\nExpands the programmatic command benchmark fixtures so the CodSpeed report names the command and repo shape being exercised. The suite now distinguishes package exports, Next app-router segments, cross-package workspace imports, repeated route callback duplication, domain graph cycles, service complexity, Tailwind CSS health, and warm-cache analysis.\n\nLeaves true binary-level CLI benchmarking out of scope for this change because spawned-child Divan benches are not the right simulation target. A future walltime or codspeed exec path can measure the release binary directly.",
          "timestamp": "2026-06-17T14:25:13+02:00",
          "tree_id": "499fa20855a0ec10880f6df902eec3828cf8f2aa",
          "url": "https://github.com/fallow-rs/fallow/commit/a2f60564123faa767dd8775a16bc1dfafaf09f13"
        },
        "date": 1781699505773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7726473,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36745,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 797738,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6695,
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
          "id": "cd157f0c02d8b1ed5d668eb9e4ae6409cc449351",
          "message": "chore: add Cargo lint profile hygiene",
          "timestamp": "2026-06-17T14:56:34+02:00",
          "tree_id": "d738cf5900bd19a0bcad3f049ca8c92934400813",
          "url": "https://github.com/fallow-rs/fallow/commit/cd157f0c02d8b1ed5d668eb9e4ae6409cc449351"
        },
        "date": 1781701380529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7723537,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36749,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 793938,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6694,
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
          "id": "cb4b4c2fb465ceb89894dc668478e201f090eabd",
          "message": "refactor: centralize issue metadata and regeneration\n\n* chore: open issue metadata implementation branch\n\n* refactor: centralize issue metadata and regeneration\n\n* chore: fix benchmark dependency placement\n\n* ci: trim miri extract scope",
          "timestamp": "2026-06-17T17:00:04+02:00",
          "tree_id": "50038da8d5d891d0443f691fdcd832f0dfc8cf4c",
          "url": "https://github.com/fallow-rs/fallow/commit/cb4b4c2fb465ceb89894dc668478e201f090eabd"
        },
        "date": 1781708607554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7706561,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36770,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 793322,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6689,
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
          "id": "c7bcdd3e516736bb9bd923db39303d4c5d20e11f",
          "message": "refactor: reduce SIG unit interfacing\n\nReduce SIG unit-interfacing pressure by grouping long argument lists behind focused input structs while preserving existing analyzer and reporting behavior.\n\nKeep review fixes with the branch: CodeClimate severity handling stays guarded for empty output, benchmark-only dependencies live under dev-dependencies, and CI runs targeted extract Miri checks to stay within the runner budget.",
          "timestamp": "2026-06-17T17:20:28+02:00",
          "tree_id": "2a0d71aee037ba0023bd7743c9a3d249df61406a",
          "url": "https://github.com/fallow-rs/fallow/commit/c7bcdd3e516736bb9bd923db39303d4c5d20e11f"
        },
        "date": 1781709884963,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7740593,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36744,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 798082,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6696,
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
          "id": "4767347e04cdf0662e17a06027dd73a3cd35f496",
          "message": "fix(vscode): defer startup LSP analysis\n\nWait until the first document opens before triggering workspace analysis from the LSP server. VS Codium was showing stale startup totals because the extension consumed the initial analysis result before the workspace had published any open documents.\n\nSave-triggered analysis now waits behind the in-flight startup analysis instead of being dropped when the analysis guard is busy. The runner re-checks cancellation after acquiring the guard so shutdown still avoids publishing stale results.\n\nFixes #1303.",
          "timestamp": "2026-06-17T17:49:10+02:00",
          "tree_id": "2c09258df26a7172e19ed15329adabdf1535a88d",
          "url": "https://github.com/fallow-rs/fallow/commit/4767347e04cdf0662e17a06027dd73a3cd35f496"
        },
        "date": 1781711557239,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7694281,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36748,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 798078,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6685,
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
          "id": "e588428bc570a98397ea182e069e72b07bd52811",
          "message": "chore(benchmarks): switch codspeed benches to criterion2\n\nReplace the Divan compatibility harness with criterion2 for the Rust benchmark suites while preserving CodSpeed simulation coverage.\n\nConvert the core analysis, large analysis, and programmatic command benches to Criterion-style groups so local benchmark output includes the statistical comparisons used by the Oxc ecosystem.\n\nWire the benchmark packages through a codspeed feature and update the benchmark workflow to build instrumented criterion2 harnesses before running the existing shards.",
          "timestamp": "2026-06-17T17:58:33+02:00",
          "tree_id": "976dc05fee60f9aba85853a2439c35430174792e",
          "url": "https://github.com/fallow-rs/fallow/commit/e588428bc570a98397ea182e069e72b07bd52811"
        },
        "date": 1781712266642,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7705585,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36786,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 793312,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6688,
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
          "id": "770863eb7e314dc6fb2fee0a547f90eb51fa319c",
          "message": "feat(suppressions): support suppression reasons\n\nParse optional reason text from fallow-ignore comments and @expected-unused tags, carry it through extraction, cache conversion, graph propagation, and stale-suppression reporting.\n\nAdd the opt-in rules.require-suppression-reason setting so teams can enforce documented suppressions without changing the default behavior. Regenerate schema artifacts and generated TypeScript contracts for the additive output and config fields.\n\nFixes #1302.",
          "timestamp": "2026-06-17T18:16:38+02:00",
          "tree_id": "1a7a244cf3f4784b54857c75be833a596feaadb3",
          "url": "https://github.com/fallow-rs/fallow/commit/770863eb7e314dc6fb2fee0a547f90eb51fa319c"
        },
        "date": 1781713486728,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7714041,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36750,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 822670,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6693,
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
          "id": "23d02bbac845ccf9fad1ce6b22de02590a8d5027",
          "message": "fix(unused-exports): credit same-file schema value deps\n\nCredit same-file value exports when they are runtime dependencies of a reachable exported value. This handles Effect Schema patterns where an exported schema value and same-name type alias coexist, and another exported schema references the value locally.\n\nThe detector stays conservative: unrelated sibling schemas and schemas used only by unused parents remain reportable.\n\nFixes #1304.",
          "timestamp": "2026-06-17T18:35:03+02:00",
          "tree_id": "5f7624d49b21f3498e7254a0b885b289aa8495ac",
          "url": "https://github.com/fallow-rs/fallow/commit/23d02bbac845ccf9fad1ce6b22de02590a8d5027"
        },
        "date": 1781714294141,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8612937,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37656,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 825948,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6688,
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
          "id": "4a5c2923929118c54bf8a1dca7c311b10d30d918",
          "message": "fix(catalog): support Bun package.json catalogs\n\nRead Bun catalog definitions from root package.json workspaces.catalog and workspaces.catalogs so unresolved, unused, and empty catalog checks work on Bun workspaces without pnpm-workspace.yaml.\n\nKeep pnpm-workspace.yaml as the preferred catalog source when present, and keep package.json catalog fix paths read-only because Bun owns that format.\n\nFixes #1301.",
          "timestamp": "2026-06-17T19:15:23+02:00",
          "tree_id": "f3206fc0da8c0f3f5f8fc9346ad167ca104c21d3",
          "url": "https://github.com/fallow-rs/fallow/commit/4a5c2923929118c54bf8a1dca7c311b10d30d918"
        },
        "date": 1781716722765,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8649064,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37679,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 826882,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6696,
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
          "id": "9b1f4546ebcfbc186352c60fe19231563cf06bf9",
          "message": "chore: add analyzer follow-up tooling\n\n* chore: open post-pr-1300 followups branch\n\n* chore: add analyzer follow-up tooling\n\n* ci: skip bench targets in test job",
          "timestamp": "2026-06-17T20:11:50+02:00",
          "tree_id": "9170a63209b2faf0b28378f99b7f431744231b01",
          "url": "https://github.com/fallow-rs/fallow/commit/9b1f4546ebcfbc186352c60fe19231563cf06bf9"
        },
        "date": 1781720111013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8589112,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37681,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 822738,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6694,
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
          "id": "cf96273eb884bd06dacf16f37b9917591ff77900",
          "message": "chore: harden CodSpeed benchmarks\n\nImprove benchmark isolation by replacing shared fixed temp paths with owned temporary directories.\n\nAdd a real-source CodSpeed shard that reuses the vendored Zod fixture, plus a bounded scaling shard for PR feedback. The slower full large-analysis suite remains limited to main and manual runs.",
          "timestamp": "2026-06-17T22:12:57+02:00",
          "tree_id": "0c930215c5dbb24c1aac3434340c59572bddca6c",
          "url": "https://github.com/fallow-rs/fallow/commit/cf96273eb884bd06dacf16f37b9917591ff77900"
        },
        "date": 1781727381937,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8660507,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37680,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 791831,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6280,
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
          "id": "df6ab207a72fff23987a64615dd2d740c99d7ed8",
          "message": "fix: track CodSpeed benchmark fixture\n\nReplace the benchmark shard's machine-local real-world corpus path with a crate-local tracked representative TypeScript fixture.\n\nRename the shard to representative sources so clean checkouts build the bench target and the workflow label matches the measured input.",
          "timestamp": "2026-06-17T22:21:03+02:00",
          "tree_id": "df60b281c36fab653d0fa8866ae0b82b47e39db3",
          "url": "https://github.com/fallow-rs/fallow/commit/df6ab207a72fff23987a64615dd2d740c99d7ed8"
        },
        "date": 1781727883478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8658955,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37649,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 826956,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6687,
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
          "id": "44cbb237cc8a2ffdb25f86b8d5a3bc5dddf5b6bb",
          "message": "fix(review): harden final follow-up edges\n\nAddress final review findings across suppression reporting, catalog parsing, same-file export dependency credit, and LSP diagnostics.\n\nStale suppression findings now carry typed actions, split missing-reason identities across SARIF, CodeClimate, audit, and baselines, and keep generated schemas and editor contracts in sync. Package.json catalog line mapping now respects workspace catalog precedence.\n\nThe same-file export dependency collector now handles shadowed bindings without leaking block-local names, and LSP diagnostics avoid stale open buffers while emitting UTF-16-safe quick fixes.",
          "timestamp": "2026-06-18T07:29:17+02:00",
          "tree_id": "43e671185d3aa1b043e0927ff0b910be490983c7",
          "url": "https://github.com/fallow-rs/fallow/commit/44cbb237cc8a2ffdb25f86b8d5a3bc5dddf5b6bb"
        },
        "date": 1781760847090,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8632802,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37688,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827708,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6694,
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
          "id": "a1c5876a9ff6facb052bce2e8eb28b01bbf6c33f",
          "message": "fix: restore green CI for suppression-reasons tests\n\nThe just-landed suppression-reasons feature added test code that broke\nclippy (--all-targets) and the VS Code tsc lint:\n\n- four RulesConfig::default() + field-reassign blocks in codeclimate.rs\n  and sarif.rs tripped clippy::field_reassign_with_default; rewritten as\n  struct-update literals\n- a needless Vec collect-then-contains in sarif.rs tripped\n  clippy::needless_collect; rewritten as .any()\n- dead_code_keys_cover_graph_boundary_catalog_and_override_variants was\n  153/150 lines; the results setup is extracted into a helper\n- StaleSuppression now requires the actions field, so the vscode tree\n  and status-bar test fixtures gained actions: []",
          "timestamp": "2026-06-18T08:06:33+02:00",
          "tree_id": "75352255fc09f0c8afbd569b9f3db8457132cc1b",
          "url": "https://github.com/fallow-rs/fallow/commit/a1c5876a9ff6facb052bce2e8eb28b01bbf6c33f"
        },
        "date": 1781763022968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8609178,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37661,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 779156,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6187,
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
          "id": "c2be0d597118a1366eeb4f62727dae4cffa5f75c",
          "message": "chore: release v2.99.0",
          "timestamp": "2026-06-18T08:33:53+02:00",
          "tree_id": "357973101a685ee8ff7829e750558d99cb69b2a8",
          "url": "https://github.com/fallow-rs/fallow/commit/c2be0d597118a1366eeb4f62727dae4cffa5f75c"
        },
        "date": 1781764651266,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8629474,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37659,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827088,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6689,
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
          "id": "0eb7b4925fe623ee4eabec54eeeb42965fa1534f",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.99.0",
          "timestamp": "2026-06-18T09:27:57+02:00",
          "tree_id": "7e57a619a8e69d92ef62f92fc8e1899d3096a2a2",
          "url": "https://github.com/fallow-rs/fallow/commit/0eb7b4925fe623ee4eabec54eeeb42965fa1534f"
        },
        "date": 1781767962454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8636234,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37647,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827708,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6694,
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
          "id": "906d0beef87ce240c6558844d71070cad03d938a",
          "message": "perf(cli): stream SARIF file output\n\nWrite SARIF files through a buffered JSON writer instead of first building a pretty JSON string in memory. This keeps the existing parent directory handling and warning behavior while avoiding the extra allocation for file output.\n\nFlush the writer explicitly so late IO errors are still reported before the success message.",
          "timestamp": "2026-06-18T11:44:58+02:00",
          "tree_id": "38309af3ecbefd00f63ea57950b0111822757f04",
          "url": "https://github.com/fallow-rs/fallow/commit/906d0beef87ce240c6558844d71070cad03d938a"
        },
        "date": 1781776220578,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8626682,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37678,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 830253,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6719,
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
          "id": "fb33eae157748852a26f05154c3152ce5568c0d6",
          "message": "feat: detect duplicate code in web format sections\n\nDetect duplicate code in CSS-family files and authored template/style regions in Vue, Svelte, and Astro files.",
          "timestamp": "2026-06-18T12:52:39+02:00",
          "tree_id": "f3cdd630ad8cf9e3efc1def1c57f1407e7ad89c3",
          "url": "https://github.com/fallow-rs/fallow/commit/fb33eae157748852a26f05154c3152ce5568c0d6"
        },
        "date": 1781780157871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8626978,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37681,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 828588,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6774,
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
          "id": "daf95918dcb3b4d2220372402b0ef93ad6493eb4",
          "message": "feat: detect unused svelte component props\n\nExtends the existing unused-component-prop analyzer to consume Svelte 5 () harvest data alongside Vue and React prop findings.\\n\\nThe Svelte arm is dependency-gated on svelte or @sveltejs/kit, keeps the existing conservative abstains for opaque prop usage, and reports through the existing output shape and suppression token.\\n\\nUpdates generated contracts, SARIF snapshots, bundled docs, and integration fixtures for positive, usage-credit, abstain, and dependency-gate coverage.",
          "timestamp": "2026-06-18T13:30:19+02:00",
          "tree_id": "0e667e7780619f195eff4c8c60d333f88445fc6a",
          "url": "https://github.com/fallow-rs/fallow/commit/daf95918dcb3b4d2220372402b0ef93ad6493eb4"
        },
        "date": 1781782626848,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8634650,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37686,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 831852,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6696,
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
          "id": "c5f69714f4eafecfed254e2763bb2206fbc58422",
          "message": "feat: expose framework health diagnostics\n\nAdd optional framework health diagnostics to health JSON output when the run already has analysis data. The payload reports detected framework ids and scoped detector statuses for active, disabled, abstained, and not-checked detectors.\n\nPreserve pre-parsed health analysis parity by deriving release-time module fields before analysis, so framework detector abstains are visible in health score runs too.",
          "timestamp": "2026-06-18T14:20:32+02:00",
          "tree_id": "e3ce4fdab46c37fce036740c2b6bd31902950c32",
          "url": "https://github.com/fallow-rs/fallow/commit/c5f69714f4eafecfed254e2763bb2206fbc58422"
        },
        "date": 1781785467048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8622930,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37666,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827220,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6690,
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
          "id": "9cadc4b71b358695d9a77c60a9fab331fc800f93",
          "message": "perf: reduce duplicate matching work for web formats\n\nAdd a global duplicate-shingle prefilter, namespace duplicate token hashes across JS, style, and markup sections, and adjust the real-world benchmark watchdog for the expanded Next.js combined-analysis surface.",
          "timestamp": "2026-06-18T14:53:17+02:00",
          "tree_id": "2fb56bc22d8101e6966c6c392cb99a52d66a89fd",
          "url": "https://github.com/fallow-rs/fallow/commit/9cadc4b71b358695d9a77c60a9fab331fc800f93"
        },
        "date": 1781787406671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8638138,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37692,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 826954,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6687,
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
          "id": "a742fe4d876d1ae634309d7e4f470b02f7a84eb5",
          "message": "feat(inspect): add CLI evidence bundle flow\n\nExpose `fallow inspect` as the CLI and editor path for the same evidence bundle that MCP `inspect_target` returns. The CLI composes trace, dead-code, duplication, complexity, and security evidence without adding a new analyzer pass.\n\nRoute the MCP tool through the CLI adapter, document the typed `inspect_target` root output in the schema, and regenerate the VS Code and npm contracts. The VS Code command now saves dirty active files before inspection and consumes the generated output type.\n\nTighten dogfood coverage for health, duplication, audit, duplicate config keys, and GitHub/GitLab renderer parity while keeping the core dead-code orchestration refactor local to result collection.",
          "timestamp": "2026-06-18T15:15:32+02:00",
          "tree_id": "d426dc2f6ada742222db53d12dd4ff1ad67be5c2",
          "url": "https://github.com/fallow-rs/fallow/commit/a742fe4d876d1ae634309d7e4f470b02f7a84eb5"
        },
        "date": 1781788818459,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8668858,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37675,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 831784,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6695,
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
          "id": "f8efb2e131ec4ae132fe2a90476fdb5079319435",
          "message": "fix(security): reject unsupported workflow flags\n\nKeep derived security workflow subcommands honest by rendering clap parse errors as JSON when requested and rejecting hidden parent flags instead of accepting no-op behavior.\n\nClarify verdict fields that fallow preserves versus harness-owned audit fields, and cover the review findings with focused workflow tests.",
          "timestamp": "2026-06-18T15:28:35+02:00",
          "tree_id": "923a69ab0c385e1758391fc40408a02f5bf3228f",
          "url": "https://github.com/fallow-rs/fallow/commit/f8efb2e131ec4ae132fe2a90476fdb5079319435"
        },
        "date": 1781789555481,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8672074,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37664,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 831372,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6693,
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
          "id": "189b7e2e1682a6bb2f795bf9cc92eacbd6ad1688",
          "message": "fix(inspect): preserve inspect scope in child runs\n\nNormalize inspect targets before child analysis so absolute editor paths compare against root-relative analyzer output, and forward parent execution flags consistently without passing production toggles to security children.\n\nMake VS Code inspect resolve folder-scoped config, retry stale CLIs with the managed binary, and keep subcommand fallback parsing precise. Improve benchmark timeout cleanup and diagnostics while updating the generated fallow skill command list.",
          "timestamp": "2026-06-18T16:33:00+02:00",
          "tree_id": "913ce804943369e96dec6ea7111c584936806544",
          "url": "https://github.com/fallow-rs/fallow/commit/189b7e2e1682a6bb2f795bf9cc92eacbd6ad1688"
        },
        "date": 1781793566237,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8636346,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37670,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 779720,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6192,
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
          "id": "a154759c88bf11a31bb1a8a721f2b1b3e16db686",
          "message": "fix(inspect): satisfy CI follow-up gates\n\nAdjust inspect test helpers for the full clippy target set, make target normalization tests host-native for Windows, and preserve the caught VS Code inspect fallback error as the thrown cause.",
          "timestamp": "2026-06-18T17:17:54+02:00",
          "tree_id": "03123e8bd781c1f0215fcddf5444af4b284edcc9",
          "url": "https://github.com/fallow-rs/fallow/commit/a154759c88bf11a31bb1a8a721f2b1b3e16db686"
        },
        "date": 1781796111168,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8635234,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37664,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 828986,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6779,
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
          "id": "b3b936f277b6c2c99b584bab19799fdd30df7a5a",
          "message": "feat: add catalogue-backed effect policy\n\nAdd `banned-effect` rule-pack support backed by the security catalogue effect taxonomy. Rule packs can now ban effect classes such as network, storage, shell, crypto, randomness, DOM, and database while preserving the existing `policy-violation` output family and scoped suppression model.\n\nThe implementation annotates every security matcher with an effect, validates kind-specific rule-pack fields, resolves effect matches through written and import-resolved callee paths, and carries the new rule kind through JSON, schemas, SARIF, MCP, VS Code, npm contracts, action summaries, docs, and fixtures.\n\nFixes #1143.",
          "timestamp": "2026-06-19T07:25:44+02:00",
          "tree_id": "13bd5ccd4170c5cdb8a8b72e3d04a08257721477",
          "url": "https://github.com/fallow-rs/fallow/commit/b3b936f277b6c2c99b584bab19799fdd30df7a5a"
        },
        "date": 1781846958953,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 8623522,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37670,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 834805,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6767,
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
          "id": "b446f0068bc2729ccd7a6801722a2c5599012a6f",
          "message": "fix(unused-exports): report local-only value exports\n\nReport value exports as unused when they have no reachable cross-file references, even if another same-file export still needs the local declaration.\n\nThe fix keeps the existing remove-export action semantics, consumes matching unused-export suppressions, and leaves ignoreExportsUsedInFile as the opt-in escape hatch for teams that want to keep local-only exports public.",
          "timestamp": "2026-06-19T08:06:26+02:00",
          "tree_id": "d8021d05086577d09470630ab83f230b434ecc92",
          "url": "https://github.com/fallow-rs/fallow/commit/b446f0068bc2729ccd7a6801722a2c5599012a6f"
        },
        "date": 1781849398452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7799906,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36769,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 829608,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6695,
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
          "id": "f4026a890c4239a65c62f236cb99628891697f24",
          "message": "test(audit): cover shifted duplicate attribution\n\nAdds regression coverage for audit new-only duplicate attribution when an unchanged clone group shifts line numbers in a touched file.\n\nThe test builds a base branch and edit branch, forces the base snapshot attribution path, and asserts the shifted duplicate group remains reported as inherited rather than introduced.\n\nProduction attribution logic is unchanged because clone group keys already ignore line numbers.\n\nFixes #1340.",
          "timestamp": "2026-06-19T09:22:58+02:00",
          "tree_id": "cad31264918bdf3672a6e50f85c65de48f8213a0",
          "url": "https://github.com/fallow-rs/fallow/commit/f4026a890c4239a65c62f236cb99628891697f24"
        },
        "date": 1781853977991,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7777738,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36755,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 828196,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6720,
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
          "id": "c637b0bdec7da180bdea27cb7d3bc5c07d301b46",
          "message": "fix: make dupes compact output traceable (#1345)\n\nDuplication compact output used an ordinal-only clone-group-N label with no stable identity. It now uses the canonical code-duplication issue tag and includes the stable dup:<id> fingerprint plus group, token, line, and instance metadata on each clone instance line, so agents can jump straight to fallow dupes --trace dup:<id> without scraping human output. The dup:<id> printed in compact output is byte-identical to the JSON clone_groups[].fingerprint.\n\nAlso includes an incidental clippy fix for format_push_string in audit_tests.rs, promoted to deny by clippy 1.95.0 under the workspace -D warnings gate.\n\nReplaces the stale draft #1318.",
          "timestamp": "2026-06-19T10:57:47+02:00",
          "tree_id": "4366f31820fcefae7e37f7e31a0ee4561f2ec312",
          "url": "https://github.com/fallow-rs/fallow/commit/c637b0bdec7da180bdea27cb7d3bc5c07d301b46"
        },
        "date": 1781859993239,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7748586,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36761,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827692,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6693,
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
          "id": "1779391d89029381f0ca8130c64fc37b2b6009ab",
          "message": "test(audit): pin LF in shifted-duplicate test for Windows",
          "timestamp": "2026-06-19T12:21:05+02:00",
          "tree_id": "9ce75c125fa41e34c3dfa905939e0dd47d1454ab",
          "url": "https://github.com/fallow-rs/fallow/commit/1779391d89029381f0ca8130c64fc37b2b6009ab"
        },
        "date": 1781864669546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7789506,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36786,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 831100,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6689,
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
          "id": "eaeb0634af797a69bae7600d2020dd99b33402ad",
          "message": "chore: release v2.100.0",
          "timestamp": "2026-06-19T12:48:37+02:00",
          "tree_id": "0edaa42c712274637bcb7868f99c47771043ce3a",
          "url": "https://github.com/fallow-rs/fallow/commit/eaeb0634af797a69bae7600d2020dd99b33402ad"
        },
        "date": 1781866329123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7778450,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36776,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827656,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6694,
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
          "id": "411df94954babda13edc97328327db70eda21399",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.100.0",
          "timestamp": "2026-06-19T13:33:37+02:00",
          "tree_id": "bd173402d162c19b107f9b8b408c318622dbc280",
          "url": "https://github.com/fallow-rs/fallow/commit/411df94954babda13edc97328327db70eda21399"
        },
        "date": 1781869097551,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7767434,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36754,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827092,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6689,
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
          "id": "dcaa8fcf8d22c210a6eb5b497dc696f045696780",
          "message": "perf(dupes): replace prefix-doubling suffix array with linear-time SA-IS\n\nClone detection built its suffix array with prefix-doubling + radix sort,\nan O(N log N) algorithm whose doubling passes dominated clone detection\n(the largest itemized stage of health/dupes/audit). Replace it with SA-IS\n(suffix array by induced sorting), which runs in linear time.\n\nThe i64 token stream (token ranks plus distinct negative per-file\nsentinels) is remapped to a dense non-negative alphabet with an appended\nunique smallest terminator; the terminator position is dropped from the\nresult, preserving the prefix-sorts-first ordering the LCP and clone\nextraction passes rely on.\n\nA within-process A/B on the same input measures ~2.7x to 11x faster suffix\narray construction with byte-identical output. The prefix-doubling routine\nis retained under cfg(test) as a differential-test reference, with a\nproperty test comparing SA-IS against it and a naive sort across thousands\nof random inputs including sentinel-separated streams.",
          "timestamp": "2026-06-19T17:15:08+02:00",
          "tree_id": "f77f83dd925c0b18b65ff6d553f42572bf355162",
          "url": "https://github.com/fallow-rs/fallow/commit/dcaa8fcf8d22c210a6eb5b497dc696f045696780"
        },
        "date": 1781882305581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7751018,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36759,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827228,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6691,
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
          "id": "ca8dc6bfd241c6fc2dd43ca97f7162bd8ef82f4a",
          "message": "refactor: decompose oversized functions to clear SIG unit-size very-high-risk band\n\nBehavior-preserving decomposition of oversized functions across the workspace, driven by a SIG maintainability audit. Reduces the Unit Size very-high-risk band (function LOC in units >60 lines) from 19.3% to 4.0%, under the 8.3% 4-star ceiling, by splitting large orchestration and detector functions into focused private helpers across core, extract, graph, config, lsp, mcp, and cli.\n\nIrreducible field-plumbing, lookup/match tables, and wide struct literals are left intact rather than split arbitrarily; the >30 and >15 size bands remain capped by the codebase's inherent function granularity and are intentionally not pursued. Pure extraction, no behavior change: full workspace build, clippy -D warnings, and the full test suite pass; no public signatures, output, schema, config, or API surface changed.",
          "timestamp": "2026-06-19T17:55:33+02:00",
          "tree_id": "c3e09601b00d6d9d9e6c7fadbd97fd3575904b5c",
          "url": "https://github.com/fallow-rs/fallow/commit/ca8dc6bfd241c6fc2dd43ca97f7162bd8ef82f4a"
        },
        "date": 1781884737858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7749396,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36861,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827364,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6693,
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
          "id": "47ec5324173cda53eb28259965bd22b3ad8aa029",
          "message": "perf(plugins): parallelize workspace file bucketing\n\nbucket_files_by_workspace assigned every discovered file to its first\nmatching workspace on a single thread: an O(files x workspaces) prefix\nscan plus a path clone and relative-path allocation per file. On a 21k-file\nmonorepo this was a measurable slice of the plugins pipeline stage.\n\nMove the per-file assignment to a rayon par_iter and keep only the cheap\nbucket fill sequential. First-match-by-workspace-declaration-order and\nper-bucket file order are both preserved, so output is byte-identical.\n\nPlugins stage ~655ms -> ~607ms on the next.js fixture (21043 files, 41\nworkspaces); dead-code JSON byte-identical on next.js and vue-core.",
          "timestamp": "2026-06-19T20:19:17+02:00",
          "tree_id": "72e8eac3bc8d81b9e2a84859cc4c245cb86f83db",
          "url": "https://github.com/fallow-rs/fallow/commit/47ec5324173cda53eb28259965bd22b3ad8aa029"
        },
        "date": 1781893449987,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7805748,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 36883,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 831852,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6696,
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
          "id": "405d77aa44a49baaca9a8c19fba506a25414d1c5",
          "message": "perf(resolve): reuse a resolver session across external-stylesheet scans\n\naugment_external_style_package_usage resolves every node_modules stylesheet\nindividually, recursing through @import / @use chains. Each scan called the\nfull resolve_all_imports, which rebuilt the resolver instances, re-loaded the\nroot and per-workspace package.json manifests, and re-canonicalized every\nworkspace root. On a 41-workspace monorepo that re-did ~80 package.json reads\nand ~80 canonicalize calls per stylesheet, scaling with the external-style count.\n\nExtract that invariant setup into a reusable ResolverSession and split\nresolve_all_imports into build-session + resolve_all_imports_with_session (one\nshared resolution code path, so the parallel project pass is unchanged). The\nexternal-style scanner builds the session once and resolves each stylesheet\nthrough it.\n\nresolve-imports stage ~880ms -> ~847ms on the next.js fixture (21043 files, 41\nworkspaces); dead-code JSON byte-identical on next.js and vue-core.",
          "timestamp": "2026-06-19T20:32:53+02:00",
          "tree_id": "9ff9634d26883fe0cdd2b87afc79620443431669",
          "url": "https://github.com/fallow-rs/fallow/commit/405d77aa44a49baaca9a8c19fba506a25414d1c5"
        },
        "date": 1781894213056,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7915628,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37143,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 829660,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6695,
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
          "id": "5f2c90cb40919aae559babe971332fcd955d8ea9",
          "message": "feat(dupes): add private rolling duplicate detector\n\nAdd a private FALLOW_DUPES_ROLLING detector path to compare a rolling-window candidate-first strategy against the current suffix-array extraction. The default detector remains intact, component-heavy corpora fall back to the suffix path, and the prototype reuses existing filtering and statistics so parity can be measured without changing public CLI behavior.\n\nRefresh the jscpd benchmark harness and README with corrected jscpd v5 comparison data, a version-mismatch guard, JS web formats, and a dedicated rolling comparator. Add interval-pressure benchmark coverage, rolling detector tests, and the research plan covering kept and rejected optimization rounds.",
          "timestamp": "2026-06-19T20:59:40+02:00",
          "tree_id": "10bfcd1646cbebb1536f3f4804075fd7d7009175",
          "url": "https://github.com/fallow-rs/fallow/commit/5f2c90cb40919aae559babe971332fcd955d8ea9"
        },
        "date": 1781895884037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 7891108,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 37135,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 827220,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6690,
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
          "id": "661fcd6261dc59595219496f255366ba3a0799c6",
          "message": "docs(changelog): note faster plugin/config detection + traversal-rules refinement",
          "timestamp": "2026-06-19T21:48:42+02:00",
          "tree_id": "67c93a8a0e4a702d42e1c889b4302343f9d03aef",
          "url": "https://github.com/fallow-rs/fallow/commit/661fcd6261dc59595219496f255366ba3a0799c6"
        },
        "date": 1781899530334,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10439963,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56531,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "86ea6ebd886e6aa52e53176f6db6e5342b2c492f",
          "message": "perf(plugins): activate browser-extension/obsidian via discovery index\n\nRoute filesystem-manifest activation for the browser-extension and obsidian\nplugins through the discovery walk's ConfigCandidateIndex instead of probing\nevery candidate directory's manifest.json. Outside production mode the plugins\nconsult the in-memory listing the walk already built; in production (None) they\nfall back to the filesystem probe, preserving prior behavior.\n\nPlugin::is_enabled_with_files gains an Option<&ConfigCandidateIndex> argument\nthreaded from collect_active_plugins. danger/k6/varlock take the argument but\nignore it (their activation reads source files already in the walk). varlock's\ndead nested .env.schema scan is left for a follow-up.\n\nOutput is byte-identical across the 10 real-world benchmark fixtures; the\nplugins stage on next.js drops ~60ms under load.",
          "timestamp": "2026-06-20T09:08:05+02:00",
          "tree_id": "1a40b5b8d1c2129e4fcf3c94d3e91a119b98bc8b",
          "url": "https://github.com/fallow-rs/fallow/commit/86ea6ebd886e6aa52e53176f6db6e5342b2c492f"
        },
        "date": 1781939508073,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10413243,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56541,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "595f8d0a1c15d9cc0d2128d6ae1c478d2112f02e",
          "message": "refactor: group parse finalization inputs",
          "timestamp": "2026-06-20T09:24:24+02:00",
          "tree_id": "7f8f9c5cc04dd484143632298a6632ff5f98219f",
          "url": "https://github.com/fallow-rs/fallow/commit/595f8d0a1c15d9cc0d2128d6ae1c478d2112f02e"
        },
        "date": 1781940560921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10432923,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56530,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "b7055f6144038611012d5c0b78daa8feea72d061",
          "message": "refactor: split render fan-in analyzer phases",
          "timestamp": "2026-06-20T09:29:05+02:00",
          "tree_id": "071d7e49b22c667f2b7cb0c3d667562370412d0a",
          "url": "https://github.com/fallow-rs/fallow/commit/b7055f6144038611012d5c0b78daa8feea72d061"
        },
        "date": 1781940765359,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10463979,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56532,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "ade73c11cccb7b8ee9cc14f008dede26bff8d84b",
          "message": "refactor: split load data key analyzer phases",
          "timestamp": "2026-06-20T09:37:29+02:00",
          "tree_id": "6b24d8ce1cba64ba67371f35889bdb9ef80f2020",
          "url": "https://github.com/fallow-rs/fallow/commit/ade73c11cccb7b8ee9cc14f008dede26bff8d84b"
        },
        "date": 1781941300769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10427091,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56532,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "6b23aecb084923791a902d278c9808d119d20335",
          "message": "refactor: split catalog dependency line scanner",
          "timestamp": "2026-06-20T09:43:49+02:00",
          "tree_id": "a75a6078eebd5744a31e360ef6026ce4e4e5151b",
          "url": "https://github.com/fallow-rs/fallow/commit/6b23aecb084923791a902d278c9808d119d20335"
        },
        "date": 1781941678997,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10460187,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56546,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "7d96c6788d0432ae78a153b1776b6d56255bec34",
          "message": "refactor: group review comment inputs",
          "timestamp": "2026-06-20T09:58:57+02:00",
          "tree_id": "73d98d1a94e89a92cbd0b3a10ccf77c6688d6c12",
          "url": "https://github.com/fallow-rs/fallow/commit/7d96c6788d0432ae78a153b1776b6d56255bec34"
        },
        "date": 1781942613605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10419843,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56511,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "17e911238ae50fdedeb89d26d731bcc5d355963a",
          "message": "refactor: split duplicate prop shape bucketing",
          "timestamp": "2026-06-20T10:46:45+02:00",
          "tree_id": "6a61790c132a5164ff4ba2ff2b943ab42c32651d",
          "url": "https://github.com/fallow-rs/fallow/commit/17e911238ae50fdedeb89d26d731bcc5d355963a"
        },
        "date": 1781945440603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10404123,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56525,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "b8170c2ac3ca29e25febb48a8d9be0543d40eb44",
          "message": "refactor: split pnpm catalog line scan",
          "timestamp": "2026-06-20T10:55:52+02:00",
          "tree_id": "b855585cfab2b0750bf6774675b90573cfcfa37d",
          "url": "https://github.com/fallow-rs/fallow/commit/b8170c2ac3ca29e25febb48a8d9be0543d40eb44"
        },
        "date": 1781945972455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10400739,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56531,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "765e59f077f48e0fdb65e93b69a097b4b71d2b02",
          "message": "refactor: split external plugin file loading",
          "timestamp": "2026-06-20T11:12:16+02:00",
          "tree_id": "15da211549f550ae207d1afd1712afa8be6ea118",
          "url": "https://github.com/fallow-rs/fallow/commit/765e59f077f48e0fdb65e93b69a097b4b71d2b02"
        },
        "date": 1781946953256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10412435,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56567,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "bbfb3fcb64970a8d0a434841ddbba53b61be29eb",
          "message": "refactor: split churn file import folding",
          "timestamp": "2026-06-20T11:17:54+02:00",
          "tree_id": "b78cc819dd62db74ab1e9b1f17eaeff4694ee0f0",
          "url": "https://github.com/fallow-rs/fallow/commit/bbfb3fcb64970a8d0a434841ddbba53b61be29eb"
        },
        "date": 1781947285750,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10454091,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56565,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "235bbfcb3a09e6951fd0b654e12a0f2af1535fbf",
          "message": "refactor: split workspace plugin fast path",
          "timestamp": "2026-06-20T11:31:56+02:00",
          "tree_id": "b27e8d08193b76df79a1eb61f547a843eb1c0681",
          "url": "https://github.com/fallow-rs/fallow/commit/235bbfcb3a09e6951fd0b654e12a0f2af1535fbf"
        },
        "date": 1781948149393,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10392483,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56522,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "48ab37ffff16b61bfe7ef72842ab5468c8750fdd",
          "message": "refactor: split tainted sink matching",
          "timestamp": "2026-06-20T11:46:13+02:00",
          "tree_id": "c5884ee2fe56bcee65a5fc4b2b0a5ac7cb5fbaf2",
          "url": "https://github.com/fallow-rs/fallow/commit/48ab37ffff16b61bfe7ef72842ab5468c8750fdd"
        },
        "date": 1781949004279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10436695,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56534,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "9d890e248516d730b035a0aef636dd35fe68a470",
          "message": "refactor: split thin wrapper module scan",
          "timestamp": "2026-06-20T11:55:36+02:00",
          "tree_id": "c60f3b8b083192c6bc81c332a1b7f6c8baeead5f",
          "url": "https://github.com/fallow-rs/fallow/commit/9d890e248516d730b035a0aef636dd35fe68a470"
        },
        "date": 1781949555602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10462143,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56535,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "b20308f0e3b36aa848aaec53ffea8f40608b54e5",
          "message": "refactor: split unused export finding build",
          "timestamp": "2026-06-20T12:36:50+02:00",
          "tree_id": "3212e80c06acbcf2384c4d721940bf0a23530c5d",
          "url": "https://github.com/fallow-rs/fallow/commit/b20308f0e3b36aa848aaec53ffea8f40608b54e5"
        },
        "date": 1781952047604,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10415367,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56513,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "051eff6da9c2adf3bfccb44960dc89027bea6c11",
          "message": "refactor: split angular component scan target",
          "timestamp": "2026-06-20T13:15:35+02:00",
          "tree_id": "4e9d2a33bf90d1a3be647ca048d6fa7e1d58b7de",
          "url": "https://github.com/fallow-rs/fallow/commit/051eff6da9c2adf3bfccb44960dc89027bea6c11"
        },
        "date": 1781954350355,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10416487,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56551,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "6ca8b73f42d93cde47f40708ff07157103cca64e",
          "message": "refactor: split prop drilling target resolution",
          "timestamp": "2026-06-20T13:32:27+02:00",
          "tree_id": "51981527a503cb9728b5befc69c9d62e792eb812",
          "url": "https://github.com/fallow-rs/fallow/commit/6ca8b73f42d93cde47f40708ff07157103cca64e"
        },
        "date": 1781955365183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10424447,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56529,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "9b5bbf68e8890723cce26bfe0b84252e9ab77024",
          "message": "refactor: split unlisted dependency plugin context",
          "timestamp": "2026-06-20T14:04:27+02:00",
          "tree_id": "fb1d49dab6d21aac7e490ab903ae51d7d69217f9",
          "url": "https://github.com/fallow-rs/fallow/commit/9b5bbf68e8890723cce26bfe0b84252e9ab77024"
        },
        "date": 1781957289675,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10459055,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56610,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "82e69fc9b56153051749a81fa6bd5a5fd94b3967",
          "message": "refactor: split check result completion",
          "timestamp": "2026-06-20T14:08:06+02:00",
          "tree_id": "dbe4ca8e8425adf1abe4332b9711f4b9853a38ba",
          "url": "https://github.com/fallow-rs/fallow/commit/82e69fc9b56153051749a81fa6bd5a5fd94b3967"
        },
        "date": 1781957497039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10453639,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56586,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "5bce473c4dc3c6d97cf8f761e4bf8127399503dc",
          "message": "refactor: split agents guide prefill",
          "timestamp": "2026-06-20T14:25:50+02:00",
          "tree_id": "cef5fc6c5c60bb0881270ed0b83b041f0a3cddc9",
          "url": "https://github.com/fallow-rs/fallow/commit/5bce473c4dc3c6d97cf8f761e4bf8127399503dc"
        },
        "date": 1781958574813,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10421567,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56603,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "c1dc0da9a24611711db12bac734df541d9dcfdcb",
          "message": "refactor: split changed-file result filters",
          "timestamp": "2026-06-20T14:30:48+02:00",
          "tree_id": "c6b980ce7a7e59bca6a98a6ab21e89b0712cb2af",
          "url": "https://github.com/fallow-rs/fallow/commit/c1dc0da9a24611711db12bac734df541d9dcfdcb"
        },
        "date": 1781958850273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10405319,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56592,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "341c7a8d35a051fdacbe4cc1c8a63901adaa5f78",
          "message": "refactor: split full analysis core run",
          "timestamp": "2026-06-20T14:38:53+02:00",
          "tree_id": "46e071e07c0fae9e8efe98ce70ab3f84b492718a",
          "url": "https://github.com/fallow-rs/fallow/commit/341c7a8d35a051fdacbe4cc1c8a63901adaa5f78"
        },
        "date": 1781959292102,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10444767,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56600,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "4e87a61b68123a9873ee70c7e38dc724756c09aa",
          "message": "refactor: split health result assembly",
          "timestamp": "2026-06-20T14:47:34+02:00",
          "tree_id": "05741d294fde5f91d705dd16f33c88e6037a4140",
          "url": "https://github.com/fallow-rs/fallow/commit/4e87a61b68123a9873ee70c7e38dc724756c09aa"
        },
        "date": 1781959873165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10438599,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56594,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "7a7eb10f39beb057536bc12059bb2e9f9f2cd503",
          "message": "refactor: split health core section prep",
          "timestamp": "2026-06-20T14:53:19+02:00",
          "tree_id": "f9e040addacdf7b2c5450745bca1474132bd717d",
          "url": "https://github.com/fallow-rs/fallow/commit/7a7eb10f39beb057536bc12059bb2e9f9f2cd503"
        },
        "date": 1781960205770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10393767,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56580,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "76e3ab1a9b0c9db3ffe7b87c4cd028072cc32040",
          "message": "test: improve runtime coverage sidecar tests",
          "timestamp": "2026-06-20T14:57:30+02:00",
          "tree_id": "14cb8ef4d3d70b94264a0dcc11b4d86acf0c6311",
          "url": "https://github.com/fallow-rs/fallow/commit/76e3ab1a9b0c9db3ffe7b87c4cd028072cc32040"
        },
        "date": 1781960460207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10433655,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56593,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "16fcfaf1d914e0aded6e0124e725594e08a3cad3",
          "message": "refactor: split programmatic analysis options",
          "timestamp": "2026-06-20T15:00:26+02:00",
          "tree_id": "4aabe866b974a0ee759e63557528ac2f326bcd38",
          "url": "https://github.com/fallow-rs/fallow/commit/16fcfaf1d914e0aded6e0124e725594e08a3cad3"
        },
        "date": 1781960685019,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10395719,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56577,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "a12395fa191f9d08522e875b642412d3e6a478a2",
          "message": "refactor: split component baseline filtering",
          "timestamp": "2026-06-20T15:05:59+02:00",
          "tree_id": "4900c81efa400850762c78b6f259b5eee17e7475",
          "url": "https://github.com/fallow-rs/fallow/commit/a12395fa191f9d08522e875b642412d3e6a478a2"
        },
        "date": 1781960971887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10404351,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56593,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "0bae19fb9d15a6ef6433a0a8f99d6ceb68ba943f",
          "message": "refactor: split config resolution phases",
          "timestamp": "2026-06-20T15:13:55+02:00",
          "tree_id": "28cd450ec00f55ddb9e5238f992cc8c0e56a10f4",
          "url": "https://github.com/fallow-rs/fallow/commit/0bae19fb9d15a6ef6433a0a8f99d6ceb68ba943f"
        },
        "date": 1781961448079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10395391,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56574,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "2e7473e679250855cc4827a1e2144a91e4d30735",
          "message": "refactor: split prop drilling population",
          "timestamp": "2026-06-20T15:36:10+02:00",
          "tree_id": "6781048366d8bdf0b5534db06f8826f975162016",
          "url": "https://github.com/fallow-rs/fallow/commit/2e7473e679250855cc4827a1e2144a91e4d30735"
        },
        "date": 1781962804181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10419351,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56612,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "83096135fb6d43f6aafe6979061406cdbb7da62d",
          "message": "refactor: group framework finding population",
          "timestamp": "2026-06-20T15:41:01+02:00",
          "tree_id": "cdeb27705e596f8ac8c4869f6c3aefee420a33f9",
          "url": "https://github.com/fallow-rs/fallow/commit/83096135fb6d43f6aafe6979061406cdbb7da62d"
        },
        "date": 1781963082263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10400031,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56584,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "6fff1cae115b97f486f779f140dbdec47521733e",
          "message": "refactor: split changed-file framework filtering",
          "timestamp": "2026-06-20T15:51:41+02:00",
          "tree_id": "b10248014363959ca182815ca6e009bf14ae86fa",
          "url": "https://github.com/fallow-rs/fallow/commit/6fff1cae115b97f486f779f140dbdec47521733e"
        },
        "date": 1781963717548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10489292,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56633,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "af5f0874d424d303b206caff92cf331cf317ca72",
          "message": "refactor: split clone interval extraction",
          "timestamp": "2026-06-20T15:58:47+02:00",
          "tree_id": "c20c676283875666581ba148f4131f09d90e1d86",
          "url": "https://github.com/fallow-rs/fallow/commit/af5f0874d424d303b206caff92cf331cf317ca72"
        },
        "date": 1781964146051,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10418951,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56584,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "edf288a8af526c09c2a0909dcef07ad2494cff6a",
          "message": "refactor: split health shared analysis prep",
          "timestamp": "2026-06-20T16:05:33+02:00",
          "tree_id": "826dd61b4317fc7e4ef2515f2439410af4cd12d8",
          "url": "https://github.com/fallow-rs/fallow/commit/edf288a8af526c09c2a0909dcef07ad2494cff6a"
        },
        "date": 1781964532875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10440671,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56604,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "16360a0025390b9ecca036ec07664d33a6bb5204",
          "message": "refactor: group code mode arg dispatch",
          "timestamp": "2026-06-20T16:09:06+02:00",
          "tree_id": "9b7709b68168e2e09ddf92c1f9842c92412d6801",
          "url": "https://github.com/fallow-rs/fallow/commit/16360a0025390b9ecca036ec07664d33a6bb5204"
        },
        "date": 1781964752026,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10394655,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56575,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "97462e517bf3524c5309673b0770a43fc3b8816a",
          "message": "refactor: split codeowners parse state",
          "timestamp": "2026-06-20T16:13:39+02:00",
          "tree_id": "ce3163fb68c09b91c4830799b4396ffa1ce469c7",
          "url": "https://github.com/fallow-rs/fallow/commit/97462e517bf3524c5309673b0770a43fc3b8816a"
        },
        "date": 1781965028809,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10435295,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56595,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "498a0948fe7d39c27616b4f00e2ced6bb07e6a3d",
          "message": "refactor: split analysis pipeline phases",
          "timestamp": "2026-06-20T16:18:21+02:00",
          "tree_id": "08778436dbf57fbb2910d800947d120bcac98055",
          "url": "https://github.com/fallow-rs/fallow/commit/498a0948fe7d39c27616b4f00e2ced6bb07e6a3d"
        },
        "date": 1781965303655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10472767,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56592,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "71d4f8ed28ee53b34e3cbfa29846ec37ff532e45",
          "message": "refactor: split health finding collection",
          "timestamp": "2026-06-20T16:21:42+02:00",
          "tree_id": "cb8c49f9c2adf662dad5984529820017707adcee",
          "url": "https://github.com/fallow-rs/fallow/commit/71d4f8ed28ee53b34e3cbfa29846ec37ff532e45"
        },
        "date": 1781965509451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10441655,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56597,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "8f313d479b98ada7112ec674cd2135c2cfa235f6",
          "message": "refactor: split base collection rules",
          "timestamp": "2026-06-20T16:28:56+02:00",
          "tree_id": "f899e788f427fd078c3cb42d566d5af57a591157",
          "url": "https://github.com/fallow-rs/fallow/commit/8f313d479b98ada7112ec674cd2135c2cfa235f6"
        },
        "date": 1781965950499,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10427583,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56580,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "ac987df598ee477b778417ab2591b455ce4c2328",
          "message": "refactor: split specifier resolution phases",
          "timestamp": "2026-06-20T16:42:50+02:00",
          "tree_id": "a33879001b43a2634e4825474d05cabf4a421294",
          "url": "https://github.com/fallow-rs/fallow/commit/ac987df598ee477b778417ab2591b455ce4c2328"
        },
        "date": 1781966785509,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10393279,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56574,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "90312950b59f8a69f44b181283271c5748cd2fae",
          "message": "refactor: split css property token collection",
          "timestamp": "2026-06-20T16:47:00+02:00",
          "tree_id": "861454345c1f383fc9b94131512ec3106759dc80",
          "url": "https://github.com/fallow-rs/fallow/commit/90312950b59f8a69f44b181283271c5748cd2fae"
        },
        "date": 1781967035333,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10430063,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56576,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "a7b117a8e66538ddc2cfbe7e989bbd226fb87481",
          "message": "refactor: split call sink capture",
          "timestamp": "2026-06-20T17:02:45+02:00",
          "tree_id": "b448824da3fcef62509c204ae01059343dd770db",
          "url": "https://github.com/fallow-rs/fallow/commit/a7b117a8e66538ddc2cfbe7e989bbd226fb87481"
        },
        "date": 1781967997542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10452631,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56614,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "9a154d2b0d82d2ec737efe64b87fc24b02764da9",
          "message": "refactor: split member assignment sink capture",
          "timestamp": "2026-06-20T17:10:09+02:00",
          "tree_id": "172910a0cad58507db2c492adb9954fd0d94701f",
          "url": "https://github.com/fallow-rs/fallow/commit/9a154d2b0d82d2ec737efe64b87fc24b02764da9"
        },
        "date": 1781968422798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10441383,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56605,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "086246b5e8c4b6706cce868d443c1201e42910c9",
          "message": "refactor: split health report input assembly",
          "timestamp": "2026-06-20T17:20:28+02:00",
          "tree_id": "79151e178b642066489a6bdcf6639544eca218a2",
          "url": "https://github.com/fallow-rs/fallow/commit/086246b5e8c4b6706cce868d443c1201e42910c9"
        },
        "date": 1781969040238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10434591,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56596,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "17f2f49aebd1fda430dbe1c521a7a86996246b46",
          "message": "refactor: split lsp code action assembly",
          "timestamp": "2026-06-20T17:24:47+02:00",
          "tree_id": "d820b316644c2124e836531c9b91b8caf8f57b24",
          "url": "https://github.com/fallow-rs/fallow/commit/17f2f49aebd1fda430dbe1c521a7a86996246b46"
        },
        "date": 1781969299113,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10432303,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56579,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "e8c584bb058c547d215603e5e5eb23f6046c5c98",
          "message": "refactor: split extractor merge phases",
          "timestamp": "2026-06-20T17:31:37+02:00",
          "tree_id": "b9d2a207807e91dffc3ac8b93f838e3566965558",
          "url": "https://github.com/fallow-rs/fallow/commit/e8c584bb058c547d215603e5e5eb23f6046c5c98"
        },
        "date": 1781969728628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10421583,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56563,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "48cb04fabb7375f32edaff7e635fe45c995076ae",
          "message": "refactor: split introduced finding filtering",
          "timestamp": "2026-06-20T17:40:07+02:00",
          "tree_id": "93f132799218e2a311f1517baacceaecec5b7e6d",
          "url": "https://github.com/fallow-rs/fallow/commit/48cb04fabb7375f32edaff7e635fe45c995076ae"
        },
        "date": 1781970176363,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10448383,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56572,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "fe51f1c840c9ce790a7e8d081b20d5cb5663f428",
          "message": "fix(unrendered-component): credit Vue components rendered through namespace re-exports\n\nThe unrendered-component render-usage chain walk (credit_rendered_sfc_chain)\nfollowed named and star re-export edges but never followed a namespace\nre-export edge (export * as List from './components/List', encoded as\nimported_name == \"*\", exported_name == \"List\"). A design system that exposes\ncompound components as namespaces and renders members via dotted tags\n(import { List } from '@/design-system'; <List.Root />) had every such member\nfalsely reported as reachable-but-rendered-nowhere.\n\nThe chain walk now follows a namespace re-export edge matching the walked name\nand credits every SFC the namespace target re-exports via a name-agnostic\ncredit_all_reexported_sfcs helper, mirroring the existing direct import * as ns\nhandling. Over-crediting can only suppress a finding, never create one. A\nnamespace barrel that is never consumed stays correctly flagged. Analyze-layer\nonly, so no CACHE_VERSION bump and no output/schema/CLI change.\n\nFixes #1351.",
          "timestamp": "2026-06-20T23:20:08+02:00",
          "tree_id": "a7465f66caf4ba901fb47a10ed68d64601101792",
          "url": "https://github.com/fallow-rs/fallow/commit/fe51f1c840c9ce790a7e8d081b20d5cb5663f428"
        },
        "date": 1781990803077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10404391,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56590,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "dab1571c0f49795d93ebe1725dc84449ae2bb025",
          "message": "fix(unrendered-component): credit whole-namespace-import rendered components\n\nFollow-up to the #1351 named-import fix. The unrendered-component detector also\nfalse-flagged components rendered through a whole-namespace import\n(import * as DS from '@/design-system'; <DS.List.Root />) when the design-system\nbarrel re-exported through nested export * as / export * barrels. That path goes\nthrough the ImportedName::Namespace arm of credit_static_import, which re-walked\neach re-export edge under the unmatched name '*', crediting nothing past a direct\nleaf named re-export.\n\nThe arm now routes through the name-agnostic credit_all_reexported_sfcs helper,\ncrediting every SFC reachable from the imported module through any re-export\nshape. A component reachable but outside the imported namespace still flags.\n8 benchmark fixtures byte-identical.\n\nRefs #1351.",
          "timestamp": "2026-06-20T23:42:59+02:00",
          "tree_id": "cebcb77bc1aaf6c1bd7b7f773a8570f9749ad4dc",
          "url": "https://github.com/fallow-rs/fallow/commit/dab1571c0f49795d93ebe1725dc84449ae2bb025"
        },
        "date": 1781992114438,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10432335,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56580,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "5da5e73aba1b06bebe51be17f1d65c30c5a36ee7",
          "message": "chore: release v2.101.0",
          "timestamp": "2026-06-21T00:12:15+02:00",
          "tree_id": "d912638b67ebf4779656a5082130ceba5dfcd5aa",
          "url": "https://github.com/fallow-rs/fallow/commit/5da5e73aba1b06bebe51be17f1d65c30c5a36ee7"
        },
        "date": 1781993776311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10430271,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56589,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "16ef25b141f81fc45db5809eee3a6abd725a9a16",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.101.0",
          "timestamp": "2026-06-21T00:56:22+02:00",
          "tree_id": "ca000e10f40d551ed0ec73addf20fae7c8f59c11",
          "url": "https://github.com/fallow-rs/fallow/commit/16ef25b141f81fc45db5809eee3a6abd725a9a16"
        },
        "date": 1781996384585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10436623,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56597,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "6fde7abc51cd3cc841cc981968bac245b22fce12",
          "message": "refactor: ratchet unit-size/interfacing clippy gates and bundle param clusters\n\nTighten the project's SIG-aligned unit-size and unit-interfacing gates to their next ratchet step and eliminate the resulting outliers with genuine refactors.\n\n- .clippy.toml: too_many_lines 150 to 100, too_many_arguments 7 to 6. Every production function is now under 100 lines; the 7-parameter outliers drop from 25 to 4 (frozen public/deprecated APIs with reasoned #[expect]).\n- Over-100-line production functions are split into cohesive private helpers; private 7-param functions are bundled into input/context structs (SarifCtx, HealthScanCtx, SecurityRankingInput, LoadConfigArgs, and several *Input structs).\n- Test fixtures keep their length via reasoned #[expect] rather than being fragmented.\n\nBehavior is unchanged: clippy --all-targets -D warnings clean at the new thresholds, full test suite green, output byte-identical across all formats.",
          "timestamp": "2026-06-21T11:55:42+02:00",
          "tree_id": "ace49869b9140fea7508da29f06e9c12a7d54020",
          "url": "https://github.com/fallow-rs/fallow/commit/6fde7abc51cd3cc841cc981968bac245b22fce12"
        },
        "date": 1782035982041,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10414959,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56559,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
            "email": "bartwaardenburg@gmail.com",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "de828f7de4029d5b61344f15f82a9fb76b997877",
          "message": "test: cover hardcoded-secret classification and import-resolution fallbacks",
          "timestamp": "2026-06-21T20:37:49+02:00",
          "tree_id": "253c25e92677f18774115490d78fef368c6086d5",
          "url": "https://github.com/fallow-rs/fallow/commit/de828f7de4029d5b61344f15f82a9fb76b997877"
        },
        "date": 1782067323509,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10396327,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56576,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "b594834c097157dda41ea60229d9d4e193f1f8a9",
          "message": "test(config,ci): make env-var tests deterministic on Windows CI\n\nurl_timeout and FALLOW_BOT_LOGIN tests raced on parallel env mutation (passed on macOS, failed windows-latest). config: pure url_timeout_from parser, no env mutation. ci: serialize the two FALLOW_BOT_LOGIN override tests behind a shared mutex.",
          "timestamp": "2026-06-22T09:30:30+02:00",
          "tree_id": "b8815aae5fca9fbdc9145db97ca9e3e92af85ffa",
          "url": "https://github.com/fallow-rs/fallow/commit/b594834c097157dda41ea60229d9d4e193f1f8a9"
        },
        "date": 1782113952172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10457143,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56565,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "1584760b83c1e91ded7b8431455772ee0de9efc2",
          "message": "ci: de-flake sidecar-resolution tests and pin zizmor version\n\nExtract pure resolve_sidecar_from_output helper so the yarn/npm sidecar tests stop spawning a subprocess (flaked under instrumented Coverage CI). Pin Actions Security to uvx zizmor@1.26.1 so a new audit cannot redden main with no fallow change.",
          "timestamp": "2026-06-22T10:11:04+02:00",
          "tree_id": "67875dd49ec395a5a4dc454b10cd649c6bbb9810",
          "url": "https://github.com/fallow-rs/fallow/commit/1584760b83c1e91ded7b8431455772ee0de9efc2"
        },
        "date": 1782116475445,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10451447,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56586,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
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
          "id": "93e9700587dda05b878ea7fa8b20e027254e9a52",
          "message": "Merge pull request #1363 from fallow-rs/fix/review-quality\n\nfeat: graph-grounded review brief, decision surface, walkthrough loop, and symbol trace",
          "timestamp": "2026-06-22T10:44:26+02:00",
          "tree_id": "d978aafb6323609462762565ee59cb62a2329047",
          "url": "https://github.com/fallow-rs/fallow/commit/93e9700587dda05b878ea7fa8b20e027254e9a52"
        },
        "date": 1782118387140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10443087,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56579,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "88fe8a03a5384d902d0ddc025bad03d29266b1ce",
          "message": "fix(vscode): resolve native fallow binaries from platform packages (#1359)\n\nThe extension only probed node_modules/.bin/<name> and honored fallow.lspPath\nvia a bare existsSync, so a global or local npm install was never detected and\nthe LSP was re-downloaded on every startup (and CLI resolution failed with\nautoDownload off). On Windows the .bin entry is a non-spawnable .cmd/.ps1\nlauncher shim, and the real executable lives in the @fallow-cli/<target>\nplatform package.\n\nResolve the real native executable directly:\n- findLocalBinary now probes node_modules/@fallow-cli/<target>/<name>(.exe)\n  first (mirroring npm/fallow/scripts/platform-package.js), then the unix .bin\n  shim; on Windows it never returns the unspawnable shim.\n- findBinaryInPath re-resolves a .cmd/.ps1 launcher shim on PATH to the sibling\n  platform-package exe (both npm-prefix layouts), skipping it if absent.\n- resolveConfiguredBinaryPath honors fallow.lspPath as typed: exact file, a\n  directory install folder, a missing Windows extension, and a directly\n  configured launcher shim, plus the fallow CLI sibling for commands.ts.\n\nOn Linux both gnu and musl package names are probed since libc is not detected\nin the extension host. Adds deterministic cross-platform regression tests that\nmock os/fs/path to exercise the win32 and linux resolution from a POSIX host.",
          "timestamp": "2026-06-22T11:09:37+02:00",
          "tree_id": "0c7b8b8e6fc8fec7e10a1883bca5e3cc7c846629",
          "url": "https://github.com/fallow-rs/fallow/commit/88fe8a03a5384d902d0ddc025bad03d29266b1ce"
        },
        "date": 1782119701488,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10425135,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56564,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
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
          "id": "d65589eac55a4823d0f9cbf98990200f7c200e30",
          "message": "fix(audit): make non-reusable base-worktree paths unique per call\n\nBaseWorktree::create built the non-reusable worktree path from pid plus a\nwall-clock nanos read. nanos is not monotonic and repeats across threads, so two\naudit runs in one process (parallel unit tests, or a future in-process batch)\ncould mint the same temp path and race on `git worktree add`; the loser failed\nand the audit aborted with a generic exit 2. It surfaced as a flaky\naudit::tests::audit_dupes_falls_back_to_own_discovery_when_health_off (and audit\nsiblings) under parallel test runs, exposed once the Windows schema stack\noverflow stopped aborting the suite before those tests ran.\n\nAppend a process-global monotonic counter so every path is distinct regardless\nof clock resolution; the pid stays the first segment so orphan-sweep parsing is\nunchanged. Adds deterministic uniqueness and pid-parse regression tests.",
          "timestamp": "2026-06-22T12:52:17+02:00",
          "tree_id": "77d1a352eb910070ee9620c34c0d204ad7858c00",
          "url": "https://github.com/fallow-rs/fallow/commit/d65589eac55a4823d0f9cbf98990200f7c200e30"
        },
        "date": 1782125851526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10416703,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56594,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 957673,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7376,
            "unit": "allocations"
          }
        ]
      }
    ]
  }
}