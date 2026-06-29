window.BENCHMARK_DATA = {
  "lastUpdate": 1782740076738,
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
          "id": "c541c92cf270988b4b6dd7b75d03c2da812ac335",
          "message": "refactor: reduce sig unit-size hotspots\n\nSplit large Rust units across CLI audit, health, reporting, LSP, MCP, config, extract, and core analysis paths into focused helpers.\n\nThis is a maintainability-only refactor. Output contracts, schemas, and user-facing behavior stay stable while the SIG unit-size pressure drops across the branch.",
          "timestamp": "2026-06-16T12:40:25+02:00",
          "tree_id": "88672e9442e3720880dabda08a43bbdeb38629c9",
          "url": "https://github.com/fallow-rs/fallow/commit/c541c92cf270988b4b6dd7b75d03c2da812ac335"
        },
        "date": 1781606968642,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 334167280,
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
          "id": "f2ac13530e8ae5d4c775c295b4d60e8d6567d14c",
          "message": "feat(health): React/JSX component-health suite\n\nA React/Preact component-health layer on a new JSX structural extraction pass\n(component functions, props, hooks, render edges), mirroring and extending the\nVue component-analysis stack. CACHE_VERSION 170.\n\nSignals (dep-gated on react/react-dom/next/preact):\n- unused-component-prop React arm (default warn): prop declared but read nowhere\n  in the component body; shares the Vue rule key / suppress token.\n- React-aware complexity: JSX nesting depth folds into cognitive, hook/prop\n  density into the per-component contribution; descriptive hook profile (kind\n  breakdown + max useEffect dep-array arity).\n- prop-drilling (opt-in, off): a prop forwarded unused through >= 3 pass-through\n  components; located per-chain records + small capped health penalty.\n- thin-wrapper (opt-in, off): a component whose whole body is a spread-forwarded\n  single child render.\n- duplicate-prop-shape (opt-in, off): 3+ components across 2+ files with an\n  identical significant prop-name set.\n- render fan-in: descriptive blast-radius metric (component-graph analogue of\n  module fan-in) with a located top-N list; headline is distinct render\n  locations, test/spec files excluded.\n\nThe shared ChildResolver lives in analyze/react_resolve.rs. Validated zero false\npositives across next.js, query, preact, and vrs-portals; duplicate-prop-shape\nfound 23 true positives on vrs-portals. Companion docs (fallow-docs,\nfallow-skills) updated separately.",
          "timestamp": "2026-06-16T13:53:37+02:00",
          "tree_id": "760f06b6aaf5108232e8cf154138d1c91da61716",
          "url": "https://github.com/fallow-rs/fallow/commit/f2ac13530e8ae5d4c775c295b4d60e8d6567d14c"
        },
        "date": 1781611420819,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 340938424,
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
          "id": "0b524021686cf1445b974ba9011b4c523de09363",
          "message": "chore: release v2.97.0",
          "timestamp": "2026-06-16T15:42:53+02:00",
          "tree_id": "26809da2a6e86cf19736803421e1aae2dff5f71d",
          "url": "https://github.com/fallow-rs/fallow/commit/0b524021686cf1445b974ba9011b4c523de09363"
        },
        "date": 1781618008296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 340884136,
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
          "id": "d1e3c7e0c1708ccc398575f1cecc6154fcba77f2",
          "message": "feat(angular): unused-component-input / unused-component-output (#1278)\n\nTwo new default-warn IssueKinds gated on @angular/core: unused-component-input\n(@Input/input()/model() read nowhere in its own component, template or class)\nand unused-component-output (@Output/output() emitted nowhere). The\nin-component dead-input/output direction no Angular tooling covers. Direct\nanalogue of the Vue unused-component-prop/-emit rules; real-world validated on\nangular/components at zero false positives. Full surface wiring, fixtures,\nintegration tests, and docs. Wave 2 W2.1 of the framework-parity program.",
          "timestamp": "2026-06-16T16:26:52+02:00",
          "tree_id": "c69b52a30b2b542d893f4bce8c1f54084f194ad2",
          "url": "https://github.com/fallow-rs/fallow/commit/d1e3c7e0c1708ccc398575f1cecc6154fcba77f2"
        },
        "date": 1781620745040,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 342704512,
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
          "id": "5eba61acd872199708efb426f460ae7710a87d80",
          "message": "feat(extract): Vue Options-API coverage for unused-component-prop/-emit (#1279)\n\nExtends unused-component-prop / unused-component-emit (previously script-setup\nonly) to the Vue Options API: harvests props:/emits: from export default {} /\ndefineComponent({}) in non-setup <script>. this.<prop>/template usage credit\nfor props; this.\\$emit/template \\$emit for emits. Whole-component abstain on\nmixins:/extends:, dynamic access, unharvestable values, and setup(props,{emit}).\nNo new IssueKind; CACHE_VERSION 171->172. Wave 2 W2.3.",
          "timestamp": "2026-06-16T17:50:57+02:00",
          "tree_id": "69cbb06a58c196e3f88ab5f5033cfcf18aecf438",
          "url": "https://github.com/fallow-rs/fallow/commit/5eba61acd872199708efb426f460ae7710a87d80"
        },
        "date": 1781625684099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 343308424,
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
          "id": "dfaf4dc8d18b0ca7f29d49e3b800492bfe524661",
          "message": "feat(extract): Svelte 5 runes extraction (script module + $props harvest) (#1280)\n\nRecognize bare <script module> (Svelte 5) as module context via\nSVELTE_MODULE_ATTR_RE (FP fix in Svelte unused-import/export detection), and\nharvest \\$props() destructure into declared prop names (reusing the Vue\nComponentProp IR + abstain flags) as groundwork for W2.2. Ships no Svelte prop\ndetector (prop-deadness is a non-goal). CACHE_VERSION 172->173. Wave 1 W1.1.",
          "timestamp": "2026-06-16T18:19:06+02:00",
          "tree_id": "6d41c92fbedd473cc9e480aad04477f7eedbf844",
          "url": "https://github.com/fallow-rs/fallow/commit/dfaf4dc8d18b0ca7f29d49e3b800492bfe524661"
        },
        "date": 1781627286851,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 343360696,
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
          "id": "5275ec5945b195269797dfb9e45b190b61a86251",
          "message": "feat(analyze): flag Svelte events dispatched but listened nowhere (#1283)\n\nNew default-warn IssueKind unused-svelte-event (gated on svelte): a Svelte\ncomponent dispatching a custom event via createEventDispatcher whose name is\nlistened to nowhere project-wide. Cross-file dead-output direction, no native\ncoverage. Two-pass set-difference detector (liberal listened set, flag the\ndisjoint). Abstains on dynamic/forwarded dispatch; DOM on:click excluded.\nCACHE_VERSION 173->174. Zero-FP on Budibase (6 true positives). Wave 2 W2.2.",
          "timestamp": "2026-06-16T22:39:46+02:00",
          "tree_id": "5790f221257bf3363db2b3cc870585d4dc87d585",
          "url": "https://github.com/fallow-rs/fallow/commit/5275ec5945b195269797dfb9e45b190b61a86251"
        },
        "date": 1781642981470,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 344379192,
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
          "id": "687edc3286d61c90f9c13bcc3ce2173a7130c03e",
          "message": "feat(analyze): extend unrendered-component to Angular (#1286)\n\nAdds an Angular arm to the existing unrendered-component rule (framework\nangular, no new IssueKind): an @Component whose element selector is used in no\ntemplate project-wide and that is not routed/bootstrapped/dynamically\nrendered. FP-safe abstains incl. the bare loadComponent default-export lazy\nform (default-export-referenced graph signal). CACHE_VERSION 174->175. Zero-FP\non angular-realworld. Wave 4 W4.2.",
          "timestamp": "2026-06-16T23:36:53+02:00",
          "tree_id": "58262c2d20a52583fa91c1d3f42b7c73256f9f46",
          "url": "https://github.com/fallow-rs/fallow/commit/687edc3286d61c90f9c13bcc3ce2173a7130c03e"
        },
        "date": 1781646459550,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 344857152,
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
          "id": "3f991594b29a987a5eef87315bb12d46d8bef3cc",
          "message": "feat(unprovided-inject): extend to Angular InjectionToken DI (#1287)\n\nExtends the existing unprovided-inject rule (Vue/Svelte) to Angular: a user\nInjectionToken injected via inject(TOKEN) or an @Inject(TOKEN) constructor\nparameter that is supplied by no provider project-wide is flagged. Reuses the\nIssueKind, rule key, and suppress token; gated on @angular/core. Scopes to user\nInjectionToken symbols only (class tokens out of scope), with abstains for\noptional injects, npm-package tokens, public-API tokens, and an opaque provider\ngraph. Validated at zero false positives on the angular/components monorepo.",
          "timestamp": "2026-06-17T00:25:17+02:00",
          "tree_id": "36651da7d9cff528b8ae34f0454e3b2aff423a25",
          "url": "https://github.com/fallow-rs/fallow/commit/3f991594b29a987a5eef87315bb12d46d8bef3cc"
        },
        "date": 1781649280571,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 344935248,
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
          "id": "7537eccdf15dddfd7713b06a81587e0f266765dc",
          "message": "feat(health): score Vue and Svelte SFC template complexity (#1288)\n\nVue and Svelte SFCs now contribute a synthetic <template> complexity entry to\nthe health complexity aggregate, mirroring Angular's path: template control flow\n(v-if/v-for; {#if}/{#each}/{#await}) plus bound-directive and interpolation\nexpressions fold into the file's complexity score, hotspots, and\nhealth --complexity findings. Reuses existing thresholds; no new rule or surface.\nThe JS-expression engine is factored into template_complexity/engine.rs and\nshared by all three scanners (Angular unchanged). Each SFC scanner masks\n<script>/<style> so script complexity is not double-counted. CACHE_VERSION 177.\nSFC render fan-in is a deliberate non-goal (module fan-in covers it). Validated\non vue-element-admin, svelte realworld, and bits-ui with no panics.",
          "timestamp": "2026-06-17T00:52:18+02:00",
          "tree_id": "2882ff7e8c6d8b4bf696a680baac15f609af8043",
          "url": "https://github.com/fallow-rs/fallow/commit/7537eccdf15dddfd7713b06a81587e0f266765dc"
        },
        "date": 1781650898593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345084424,
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
          "id": "362b93bf156231ce4e1096e8aa72d7e7fa82b26e",
          "message": "feat(rsc): widen directive rules beyond Next + cover inline use-server actions (#1289)\n\nW4.3: misplaced-directive and mixed-client-server-barrel now activate for any RSC\nbundler (next, waku, @lazarv/react-server, react-server-dom-{webpack,vite,parcel},\n@vitejs/plugin-rsc) via a shared project_uses_rsc_directives predicate, since both\nfootguns are universal RSC. invalid-client-export and unused-server-action stay\nNext-gated. W4.4: unused-server-action now also reclassifies inline \"use server\"\nbody directives (export async function f() { \"use server\" }) from unused-export to\nunused-server-action, inheriting every unused-export abstain. CACHE_VERSION 178.\nZero false positives on vercel ai-chatbot and commerce.",
          "timestamp": "2026-06-17T01:19:16+02:00",
          "tree_id": "d91442b7b6151469fd2cf547e1ab62fa5f667b2e",
          "url": "https://github.com/fallow-rs/fallow/commit/362b93bf156231ce4e1096e8aa72d7e7fa82b26e"
        },
        "date": 1781652508180,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345203048,
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
          "id": "29e69c21158eecf3578e21a9b353692e89e47f3c",
          "message": "fix: keep JSX depth descriptive\n\nKeep JSX nesting as descriptive React layout context instead of folding it into cognitive complexity. Presentational React and Preact components still report react_jsx_max_depth for hotspot context, but pure markup depth no longer emits jsx-depth contributions or deepens nested ternary weights.\n\nKeep the public jsx-depth contribution kind in the schema for compatibility, update MCP and docs wording, and bump the extract cache version so stale cached React complexity scores are refreshed.\n\nFixes #1281.",
          "timestamp": "2026-06-17T08:52:41+02:00",
          "tree_id": "9c3221f40dba9f2a3c7973fe8b23b8f9ae1e7c2d",
          "url": "https://github.com/fallow-rs/fallow/commit/29e69c21158eecf3578e21a9b353692e89e47f3c"
        },
        "date": 1781679895440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345843968,
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
          "id": "b66c18ac23a61de62a4a192ac0ec90b5f573af86",
          "message": "fix(output): add framework action guidance\n\nLead framework dead-code findings with manual fix actions before the suppress fallback. The new action discriminants cover server actions, injects, SvelteKit load keys, unrendered components, Vue props and emits, and Svelte events while keeping every path non-auto-fixable.\n\nClarify template and component complexity rows in human and markdown health output while keeping machine-readable names stable. Regenerate the output schema and published TypeScript contracts so structured consumers see the new action vocabulary.",
          "timestamp": "2026-06-17T10:27:54+02:00",
          "tree_id": "7897d210ecf44770fef884e9d41ea7fe742cac88",
          "url": "https://github.com/fallow-rs/fallow/commit/b66c18ac23a61de62a4a192ac0ec90b5f573af86"
        },
        "date": 1781686003040,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345899656,
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
          "id": "fcff566238d53f9a8b1a13d3364a80652fb9043b",
          "message": "fix(pinia): credit inline storeToRefs members\n\nPinia consumers commonly destructure refs directly from an inline store factory call, for example `storeToRefs(usePermissionsStore())`. The store-member detector already credited `storeToRefs(storeLocal)` and direct `useStore()` destructures, but the inline refs-helper form left those members looking unused.\n\nThis adds a narrow refs-helper argument resolver for tracked store locals and bare store-factory identifier calls, then records the original destructured store key as a member access. Dynamic helper arguments, member callees, and refs-object locals remain out of scope.\n\nThe regression coverage includes extractor tests, a Vue SFC integration fixture, an aliased destructure case, a non-store control, and extraction cache invalidation for the new member-access semantics.\n\nFixes #1282.",
          "timestamp": "2026-06-17T11:01:29+02:00",
          "tree_id": "5105b112a28fba223fcebf490af6d61937637461",
          "url": "https://github.com/fallow-rs/fallow/commit/fcff566238d53f9a8b1a13d3364a80652fb9043b"
        },
        "date": 1781687506839,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345953640,
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
          "id": "592deffc4a140d7d731ac43abf86975dbdd3ad60",
          "message": "chore: release v2.98.0",
          "timestamp": "2026-06-17T11:40:07+02:00",
          "tree_id": "ee8fbef1ae61d66a1b2801cc0aa78d8ff701f0f7",
          "url": "https://github.com/fallow-rs/fallow/commit/592deffc4a140d7d731ac43abf86975dbdd3ad60"
        },
        "date": 1781689826713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345986592,
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
          "id": "9fb44aac4684f23967b73dcaaa30ca8598e2a4f1",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.98.0",
          "timestamp": "2026-06-17T12:30:55+02:00",
          "tree_id": "8f38b1deccdef7256fda48244739ac78d55046c3",
          "url": "https://github.com/fallow-rs/fallow/commit/9fb44aac4684f23967b73dcaaa30ca8598e2a4f1"
        },
        "date": 1781692792214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345986592,
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
          "id": "a7c8bc7de7abfc05e695aa28edd921df410b83af",
          "message": "test: improve coverage across CLI output helpers\n\nAdds focused coverage for CLI audit output, combined output helpers, cache notice lifecycle, and human report helper behavior.\n\nThe branch keeps production code unchanged and stops the coverage loop once the remaining gains became marginal.",
          "timestamp": "2026-06-17T13:10:47+02:00",
          "tree_id": "4ae405990625b22a3186685e65385c6e4eeab2d7",
          "url": "https://github.com/fallow-rs/fallow/commit/a7c8bc7de7abfc05e695aa28edd921df410b83af"
        },
        "date": 1781695221382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345986592,
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
          "id": "e99bd54613928a8d6908d9be35e1f445512f081b",
          "message": "feat(benchmarks): add codspeed command profiles\n\nAdds a dedicated unpublished benchmark crate using the CodSpeed Divan compatibility layer. The suite covers programmatic command profiles for dead code, duplication, circular dependency, health, CSS, warm-cache, library, app-router, and monorepo shapes.\n\nWires the CSS health option through the programmatic and NAPI surfaces so the benchmark suite can exercise the same command-adjacent API path that integrations use.\n\nUpdates the CodSpeed workflow to run core analysis and programmatic command profiles together, pins cargo-codspeed, and makes the multiline action run fail fast.",
          "timestamp": "2026-06-17T13:44:43+02:00",
          "tree_id": "a9a0cdee9e84fc58ef5f7281ca6a89e54f3ce53a",
          "url": "https://github.com/fallow-rs/fallow/commit/e99bd54613928a8d6908d9be35e1f445512f081b"
        },
        "date": 1781697299005,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345986592,
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
          "id": "a2f60564123faa767dd8775a16bc1dfafaf09f13",
          "message": "feat(benchmarks): sharpen codspeed insights\n\nSplits the CodSpeed simulation workflow into separate matrix shards for core analysis and programmatic command profiles. This keeps reports grouped by benchmark family while preserving tokenless public-repository uploads and the existing fast PR budget.\n\nExpands the programmatic command benchmark fixtures so the CodSpeed report names the command and repo shape being exercised. The suite now distinguishes package exports, Next app-router segments, cross-package workspace imports, repeated route callback duplication, domain graph cycles, service complexity, Tailwind CSS health, and warm-cache analysis.\n\nLeaves true binary-level CLI benchmarking out of scope for this change because spawned-child Divan benches are not the right simulation target. A future walltime or codspeed exec path can measure the release binary directly.",
          "timestamp": "2026-06-17T14:25:13+02:00",
          "tree_id": "499fa20855a0ec10880f6df902eec3828cf8f2aa",
          "url": "https://github.com/fallow-rs/fallow/commit/a2f60564123faa767dd8775a16bc1dfafaf09f13"
        },
        "date": 1781699757519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345986592,
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
          "id": "cd157f0c02d8b1ed5d668eb9e4ae6409cc449351",
          "message": "chore: add Cargo lint profile hygiene",
          "timestamp": "2026-06-17T14:56:34+02:00",
          "tree_id": "d738cf5900bd19a0bcad3f049ca8c92934400813",
          "url": "https://github.com/fallow-rs/fallow/commit/cd157f0c02d8b1ed5d668eb9e4ae6409cc449351"
        },
        "date": 1781701687197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345986592,
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
          "id": "cb4b4c2fb465ceb89894dc668478e201f090eabd",
          "message": "refactor: centralize issue metadata and regeneration\n\n* chore: open issue metadata implementation branch\n\n* refactor: centralize issue metadata and regeneration\n\n* chore: fix benchmark dependency placement\n\n* ci: trim miri extract scope",
          "timestamp": "2026-06-17T17:00:04+02:00",
          "tree_id": "50038da8d5d891d0443f691fdcd832f0dfc8cf4c",
          "url": "https://github.com/fallow-rs/fallow/commit/cb4b4c2fb465ceb89894dc668478e201f090eabd"
        },
        "date": 1781708951444,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345995272,
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
          "id": "c7bcdd3e516736bb9bd923db39303d4c5d20e11f",
          "message": "refactor: reduce SIG unit interfacing\n\nReduce SIG unit-interfacing pressure by grouping long argument lists behind focused input structs while preserving existing analyzer and reporting behavior.\n\nKeep review fixes with the branch: CodeClimate severity handling stays guarded for empty output, benchmark-only dependencies live under dev-dependencies, and CI runs targeted extract Miri checks to stay within the runner budget.",
          "timestamp": "2026-06-17T17:20:28+02:00",
          "tree_id": "2a0d71aee037ba0023bd7743c9a3d249df61406a",
          "url": "https://github.com/fallow-rs/fallow/commit/c7bcdd3e516736bb9bd923db39303d4c5d20e11f"
        },
        "date": 1781710221754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345726208,
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
          "id": "e588428bc570a98397ea182e069e72b07bd52811",
          "message": "chore(benchmarks): switch codspeed benches to criterion2\n\nReplace the Divan compatibility harness with criterion2 for the Rust benchmark suites while preserving CodSpeed simulation coverage.\n\nConvert the core analysis, large analysis, and programmatic command benches to Criterion-style groups so local benchmark output includes the statistical comparisons used by the Oxc ecosystem.\n\nWire the benchmark packages through a codspeed feature and update the benchmark workflow to build instrumented criterion2 harnesses before running the existing shards.",
          "timestamp": "2026-06-17T17:58:33+02:00",
          "tree_id": "976dc05fee60f9aba85853a2439c35430174792e",
          "url": "https://github.com/fallow-rs/fallow/commit/e588428bc570a98397ea182e069e72b07bd52811"
        },
        "date": 1781712527672,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 345726208,
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
          "id": "770863eb7e314dc6fb2fee0a547f90eb51fa319c",
          "message": "feat(suppressions): support suppression reasons\n\nParse optional reason text from fallow-ignore comments and @expected-unused tags, carry it through extraction, cache conversion, graph propagation, and stale-suppression reporting.\n\nAdd the opt-in rules.require-suppression-reason setting so teams can enforce documented suppressions without changing the default behavior. Regenerate schema artifacts and generated TypeScript contracts for the additive output and config fields.\n\nFixes #1302.",
          "timestamp": "2026-06-17T18:16:38+02:00",
          "tree_id": "1a7a244cf3f4784b54857c75be833a596feaadb3",
          "url": "https://github.com/fallow-rs/fallow/commit/770863eb7e314dc6fb2fee0a547f90eb51fa319c"
        },
        "date": 1781713597999,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 346070968,
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
          "id": "23d02bbac845ccf9fad1ce6b22de02590a8d5027",
          "message": "fix(unused-exports): credit same-file schema value deps\n\nCredit same-file value exports when they are runtime dependencies of a reachable exported value. This handles Effect Schema patterns where an exported schema value and same-name type alias coexist, and another exported schema references the value locally.\n\nThe detector stays conservative: unrelated sibling schemas and schemas used only by unused parents remain reportable.\n\nFixes #1304.",
          "timestamp": "2026-06-17T18:35:03+02:00",
          "tree_id": "5f7624d49b21f3498e7254a0b885b289aa8495ac",
          "url": "https://github.com/fallow-rs/fallow/commit/23d02bbac845ccf9fad1ce6b22de02590a8d5027"
        },
        "date": 1781715057949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 346758896,
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
          "id": "4a5c2923929118c54bf8a1dca7c311b10d30d918",
          "message": "fix(catalog): support Bun package.json catalogs\n\nRead Bun catalog definitions from root package.json workspaces.catalog and workspaces.catalogs so unresolved, unused, and empty catalog checks work on Bun workspaces without pnpm-workspace.yaml.\n\nKeep pnpm-workspace.yaml as the preferred catalog source when present, and keep package.json catalog fix paths read-only because Bun owns that format.\n\nFixes #1301.",
          "timestamp": "2026-06-17T19:15:23+02:00",
          "tree_id": "f3206fc0da8c0f3f5f8fc9346ad167ca104c21d3",
          "url": "https://github.com/fallow-rs/fallow/commit/4a5c2923929118c54bf8a1dca7c311b10d30d918"
        },
        "date": 1781717088755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 346889432,
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
          "id": "9b1f4546ebcfbc186352c60fe19231563cf06bf9",
          "message": "chore: add analyzer follow-up tooling\n\n* chore: open post-pr-1300 followups branch\n\n* chore: add analyzer follow-up tooling\n\n* ci: skip bench targets in test job",
          "timestamp": "2026-06-17T20:11:50+02:00",
          "tree_id": "9170a63209b2faf0b28378f99b7f431744231b01",
          "url": "https://github.com/fallow-rs/fallow/commit/9b1f4546ebcfbc186352c60fe19231563cf06bf9"
        },
        "date": 1781720490426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 346889432,
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
          "id": "df6ab207a72fff23987a64615dd2d740c99d7ed8",
          "message": "fix: track CodSpeed benchmark fixture\n\nReplace the benchmark shard's machine-local real-world corpus path with a crate-local tracked representative TypeScript fixture.\n\nRename the shard to representative sources so clean checkouts build the bench target and the workflow label matches the measured input.",
          "timestamp": "2026-06-17T22:21:03+02:00",
          "tree_id": "df60b281c36fab653d0fa8866ae0b82b47e39db3",
          "url": "https://github.com/fallow-rs/fallow/commit/df6ab207a72fff23987a64615dd2d740c99d7ed8"
        },
        "date": 1781728676171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 346889432,
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
          "id": "44cbb237cc8a2ffdb25f86b8d5a3bc5dddf5b6bb",
          "message": "fix(review): harden final follow-up edges\n\nAddress final review findings across suppression reporting, catalog parsing, same-file export dependency credit, and LSP diagnostics.\n\nStale suppression findings now carry typed actions, split missing-reason identities across SARIF, CodeClimate, audit, and baselines, and keep generated schemas and editor contracts in sync. Package.json catalog line mapping now respects workspace catalog precedence.\n\nThe same-file export dependency collector now handles shadowed bindings without leaking block-local names, and LSP diagnostics avoid stale open buffers while emitting UTF-16-safe quick fixes.",
          "timestamp": "2026-06-18T07:29:17+02:00",
          "tree_id": "43e671185d3aa1b043e0927ff0b910be490983c7",
          "url": "https://github.com/fallow-rs/fallow/commit/44cbb237cc8a2ffdb25f86b8d5a3bc5dddf5b6bb"
        },
        "date": 1781761319977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 346865496,
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
          "id": "a1c5876a9ff6facb052bce2e8eb28b01bbf6c33f",
          "message": "fix: restore green CI for suppression-reasons tests\n\nThe just-landed suppression-reasons feature added test code that broke\nclippy (--all-targets) and the VS Code tsc lint:\n\n- four RulesConfig::default() + field-reassign blocks in codeclimate.rs\n  and sarif.rs tripped clippy::field_reassign_with_default; rewritten as\n  struct-update literals\n- a needless Vec collect-then-contains in sarif.rs tripped\n  clippy::needless_collect; rewritten as .any()\n- dead_code_keys_cover_graph_boundary_catalog_and_override_variants was\n  153/150 lines; the results setup is extracted into a helper\n- StaleSuppression now requires the actions field, so the vscode tree\n  and status-bar test fixtures gained actions: []",
          "timestamp": "2026-06-18T08:06:33+02:00",
          "tree_id": "75352255fc09f0c8afbd569b9f3db8457132cc1b",
          "url": "https://github.com/fallow-rs/fallow/commit/a1c5876a9ff6facb052bce2e8eb28b01bbf6c33f"
        },
        "date": 1781763354458,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 346865496,
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
          "id": "c2be0d597118a1366eeb4f62727dae4cffa5f75c",
          "message": "chore: release v2.99.0",
          "timestamp": "2026-06-18T08:33:53+02:00",
          "tree_id": "357973101a685ee8ff7829e750558d99cb69b2a8",
          "url": "https://github.com/fallow-rs/fallow/commit/c2be0d597118a1366eeb4f62727dae4cffa5f75c"
        },
        "date": 1781765005882,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 346894448,
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
          "id": "0eb7b4925fe623ee4eabec54eeeb42965fa1534f",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.99.0",
          "timestamp": "2026-06-18T09:27:57+02:00",
          "tree_id": "7e57a619a8e69d92ef62f92fc8e1899d3096a2a2",
          "url": "https://github.com/fallow-rs/fallow/commit/0eb7b4925fe623ee4eabec54eeeb42965fa1534f"
        },
        "date": 1781768258628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 346894448,
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
          "id": "906d0beef87ce240c6558844d71070cad03d938a",
          "message": "perf(cli): stream SARIF file output\n\nWrite SARIF files through a buffered JSON writer instead of first building a pretty JSON string in memory. This keeps the existing parent directory handling and warning behavior while avoiding the extra allocation for file output.\n\nFlush the writer explicitly so late IO errors are still reported before the success message.",
          "timestamp": "2026-06-18T11:44:58+02:00",
          "tree_id": "38309af3ecbefd00f63ea57950b0111822757f04",
          "url": "https://github.com/fallow-rs/fallow/commit/906d0beef87ce240c6558844d71070cad03d938a"
        },
        "date": 1781776504721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 346961536,
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
          "id": "fb33eae157748852a26f05154c3152ce5568c0d6",
          "message": "feat: detect duplicate code in web format sections\n\nDetect duplicate code in CSS-family files and authored template/style regions in Vue, Svelte, and Astro files.",
          "timestamp": "2026-06-18T12:52:39+02:00",
          "tree_id": "f3cdd630ad8cf9e3efc1def1c57f1407e7ad89c3",
          "url": "https://github.com/fallow-rs/fallow/commit/fb33eae157748852a26f05154c3152ce5568c0d6"
        },
        "date": 1781780534959,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 347356280,
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
          "id": "daf95918dcb3b4d2220372402b0ef93ad6493eb4",
          "message": "feat: detect unused svelte component props\n\nExtends the existing unused-component-prop analyzer to consume Svelte 5 () harvest data alongside Vue and React prop findings.\\n\\nThe Svelte arm is dependency-gated on svelte or @sveltejs/kit, keeps the existing conservative abstains for opaque prop usage, and reports through the existing output shape and suppression token.\\n\\nUpdates generated contracts, SARIF snapshots, bundled docs, and integration fixtures for positive, usage-credit, abstain, and dependency-gate coverage.",
          "timestamp": "2026-06-18T13:30:19+02:00",
          "tree_id": "0e667e7780619f195eff4c8c60d333f88445fc6a",
          "url": "https://github.com/fallow-rs/fallow/commit/daf95918dcb3b4d2220372402b0ef93ad6493eb4"
        },
        "date": 1781782747350,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 347366464,
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
          "id": "c5f69714f4eafecfed254e2763bb2206fbc58422",
          "message": "feat: expose framework health diagnostics\n\nAdd optional framework health diagnostics to health JSON output when the run already has analysis data. The payload reports detected framework ids and scoped detector statuses for active, disabled, abstained, and not-checked detectors.\n\nPreserve pre-parsed health analysis parity by deriving release-time module fields before analysis, so framework detector abstains are visible in health score runs too.",
          "timestamp": "2026-06-18T14:20:32+02:00",
          "tree_id": "e3ce4fdab46c37fce036740c2b6bd31902950c32",
          "url": "https://github.com/fallow-rs/fallow/commit/c5f69714f4eafecfed254e2763bb2206fbc58422"
        },
        "date": 1781786215896,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351355792,
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
          "id": "9cadc4b71b358695d9a77c60a9fab331fc800f93",
          "message": "perf: reduce duplicate matching work for web formats\n\nAdd a global duplicate-shingle prefilter, namespace duplicate token hashes across JS, style, and markup sections, and adjust the real-world benchmark watchdog for the expanded Next.js combined-analysis surface.",
          "timestamp": "2026-06-18T14:53:17+02:00",
          "tree_id": "2fb56bc22d8101e6966c6c392cb99a52d66a89fd",
          "url": "https://github.com/fallow-rs/fallow/commit/9cadc4b71b358695d9a77c60a9fab331fc800f93"
        },
        "date": 1781787801579,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351430296,
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
          "id": "a742fe4d876d1ae634309d7e4f470b02f7a84eb5",
          "message": "feat(inspect): add CLI evidence bundle flow\n\nExpose `fallow inspect` as the CLI and editor path for the same evidence bundle that MCP `inspect_target` returns. The CLI composes trace, dead-code, duplication, complexity, and security evidence without adding a new analyzer pass.\n\nRoute the MCP tool through the CLI adapter, document the typed `inspect_target` root output in the schema, and regenerate the VS Code and npm contracts. The VS Code command now saves dirty active files before inspection and consumes the generated output type.\n\nTighten dogfood coverage for health, duplication, audit, duplicate config keys, and GitHub/GitLab renderer parity while keeping the core dead-code orchestration refactor local to result collection.",
          "timestamp": "2026-06-18T15:15:32+02:00",
          "tree_id": "d426dc2f6ada742222db53d12dd4ff1ad67be5c2",
          "url": "https://github.com/fallow-rs/fallow/commit/a742fe4d876d1ae634309d7e4f470b02f7a84eb5"
        },
        "date": 1781789215955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351786776,
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
          "id": "f8efb2e131ec4ae132fe2a90476fdb5079319435",
          "message": "fix(security): reject unsupported workflow flags\n\nKeep derived security workflow subcommands honest by rendering clap parse errors as JSON when requested and rejecting hidden parent flags instead of accepting no-op behavior.\n\nClarify verdict fields that fallow preserves versus harness-owned audit fields, and cover the review findings with focused workflow tests.",
          "timestamp": "2026-06-18T15:28:35+02:00",
          "tree_id": "923a69ab0c385e1758391fc40408a02f5bf3228f",
          "url": "https://github.com/fallow-rs/fallow/commit/f8efb2e131ec4ae132fe2a90476fdb5079319435"
        },
        "date": 1781789920411,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351824224,
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
          "id": "189b7e2e1682a6bb2f795bf9cc92eacbd6ad1688",
          "message": "fix(inspect): preserve inspect scope in child runs\n\nNormalize inspect targets before child analysis so absolute editor paths compare against root-relative analyzer output, and forward parent execution flags consistently without passing production toggles to security children.\n\nMake VS Code inspect resolve folder-scoped config, retry stale CLIs with the managed binary, and keep subcommand fallback parsing precise. Improve benchmark timeout cleanup and diagnostics while updating the generated fallow skill command list.",
          "timestamp": "2026-06-18T16:33:00+02:00",
          "tree_id": "913ce804943369e96dec6ea7111c584936806544",
          "url": "https://github.com/fallow-rs/fallow/commit/189b7e2e1682a6bb2f795bf9cc92eacbd6ad1688"
        },
        "date": 1781794125744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351897016,
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
          "id": "a154759c88bf11a31bb1a8a721f2b1b3e16db686",
          "message": "fix(inspect): satisfy CI follow-up gates\n\nAdjust inspect test helpers for the full clippy target set, make target normalization tests host-native for Windows, and preserve the caught VS Code inspect fallback error as the thrown cause.",
          "timestamp": "2026-06-18T17:17:54+02:00",
          "tree_id": "03123e8bd781c1f0215fcddf5444af4b284edcc9",
          "url": "https://github.com/fallow-rs/fallow/commit/a154759c88bf11a31bb1a8a721f2b1b3e16db686"
        },
        "date": 1781796533200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351897024,
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
          "id": "b3b936f277b6c2c99b584bab19799fdd30df7a5a",
          "message": "feat: add catalogue-backed effect policy\n\nAdd `banned-effect` rule-pack support backed by the security catalogue effect taxonomy. Rule packs can now ban effect classes such as network, storage, shell, crypto, randomness, DOM, and database while preserving the existing `policy-violation` output family and scoped suppression model.\n\nThe implementation annotates every security matcher with an effect, validates kind-specific rule-pack fields, resolves effect matches through written and import-resolved callee paths, and carries the new rule kind through JSON, schemas, SARIF, MCP, VS Code, npm contracts, action summaries, docs, and fixtures.\n\nFixes #1143.",
          "timestamp": "2026-06-19T07:25:44+02:00",
          "tree_id": "13bd5ccd4170c5cdb8a8b72e3d04a08257721477",
          "url": "https://github.com/fallow-rs/fallow/commit/b3b936f277b6c2c99b584bab19799fdd30df7a5a"
        },
        "date": 1781847570883,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352375448,
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
          "id": "b446f0068bc2729ccd7a6801722a2c5599012a6f",
          "message": "fix(unused-exports): report local-only value exports\n\nReport value exports as unused when they have no reachable cross-file references, even if another same-file export still needs the local declaration.\n\nThe fix keeps the existing remove-export action semantics, consumes matching unused-export suppressions, and leaves ignoreExportsUsedInFile as the opt-in escape hatch for teams that want to keep local-only exports public.",
          "timestamp": "2026-06-19T08:06:26+02:00",
          "tree_id": "d8021d05086577d09470630ab83f230b434ecc92",
          "url": "https://github.com/fallow-rs/fallow/commit/b446f0068bc2729ccd7a6801722a2c5599012a6f"
        },
        "date": 1781849797410,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351753328,
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
          "id": "f4026a890c4239a65c62f236cb99628891697f24",
          "message": "test(audit): cover shifted duplicate attribution\n\nAdds regression coverage for audit new-only duplicate attribution when an unchanged clone group shifts line numbers in a touched file.\n\nThe test builds a base branch and edit branch, forces the base snapshot attribution path, and asserts the shifted duplicate group remains reported as inherited rather than introduced.\n\nProduction attribution logic is unchanged because clone group keys already ignore line numbers.\n\nFixes #1340.",
          "timestamp": "2026-06-19T09:22:58+02:00",
          "tree_id": "cad31264918bdf3672a6e50f85c65de48f8213a0",
          "url": "https://github.com/fallow-rs/fallow/commit/f4026a890c4239a65c62f236cb99628891697f24"
        },
        "date": 1781854365339,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351753328,
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
          "id": "c637b0bdec7da180bdea27cb7d3bc5c07d301b46",
          "message": "fix: make dupes compact output traceable (#1345)\n\nDuplication compact output used an ordinal-only clone-group-N label with no stable identity. It now uses the canonical code-duplication issue tag and includes the stable dup:<id> fingerprint plus group, token, line, and instance metadata on each clone instance line, so agents can jump straight to fallow dupes --trace dup:<id> without scraping human output. The dup:<id> printed in compact output is byte-identical to the JSON clone_groups[].fingerprint.\n\nAlso includes an incidental clippy fix for format_push_string in audit_tests.rs, promoted to deny by clippy 1.95.0 under the workspace -D warnings gate.\n\nReplaces the stale draft #1318.",
          "timestamp": "2026-06-19T10:57:47+02:00",
          "tree_id": "4366f31820fcefae7e37f7e31a0ee4561f2ec312",
          "url": "https://github.com/fallow-rs/fallow/commit/c637b0bdec7da180bdea27cb7d3bc5c07d301b46"
        },
        "date": 1781860030665,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351755008,
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
          "id": "1779391d89029381f0ca8130c64fc37b2b6009ab",
          "message": "test(audit): pin LF in shifted-duplicate test for Windows",
          "timestamp": "2026-06-19T12:21:05+02:00",
          "tree_id": "9ce75c125fa41e34c3dfa905939e0dd47d1454ab",
          "url": "https://github.com/fallow-rs/fallow/commit/1779391d89029381f0ca8130c64fc37b2b6009ab"
        },
        "date": 1781865045214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351755008,
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
          "id": "eaeb0634af797a69bae7600d2020dd99b33402ad",
          "message": "chore: release v2.100.0",
          "timestamp": "2026-06-19T12:48:37+02:00",
          "tree_id": "0edaa42c712274637bcb7868f99c47771043ce3a",
          "url": "https://github.com/fallow-rs/fallow/commit/eaeb0634af797a69bae7600d2020dd99b33402ad"
        },
        "date": 1781866701007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351650224,
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
          "id": "411df94954babda13edc97328327db70eda21399",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.100.0",
          "timestamp": "2026-06-19T13:33:37+02:00",
          "tree_id": "bd173402d162c19b107f9b8b408c318622dbc280",
          "url": "https://github.com/fallow-rs/fallow/commit/411df94954babda13edc97328327db70eda21399"
        },
        "date": 1781869418781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351650224,
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
          "id": "dcaa8fcf8d22c210a6eb5b497dc696f045696780",
          "message": "perf(dupes): replace prefix-doubling suffix array with linear-time SA-IS\n\nClone detection built its suffix array with prefix-doubling + radix sort,\nan O(N log N) algorithm whose doubling passes dominated clone detection\n(the largest itemized stage of health/dupes/audit). Replace it with SA-IS\n(suffix array by induced sorting), which runs in linear time.\n\nThe i64 token stream (token ranks plus distinct negative per-file\nsentinels) is remapped to a dense non-negative alphabet with an appended\nunique smallest terminator; the terminator position is dropped from the\nresult, preserving the prefix-sorts-first ordering the LCP and clone\nextraction passes rely on.\n\nA within-process A/B on the same input measures ~2.7x to 11x faster suffix\narray construction with byte-identical output. The prefix-doubling routine\nis retained under cfg(test) as a differential-test reference, with a\nproperty test comparing SA-IS against it and a naive sort across thousands\nof random inputs including sentinel-separated streams.",
          "timestamp": "2026-06-19T17:15:08+02:00",
          "tree_id": "f77f83dd925c0b18b65ff6d553f42572bf355162",
          "url": "https://github.com/fallow-rs/fallow/commit/dcaa8fcf8d22c210a6eb5b497dc696f045696780"
        },
        "date": 1781882712718,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 351689864,
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
          "id": "ca8dc6bfd241c6fc2dd43ca97f7162bd8ef82f4a",
          "message": "refactor: decompose oversized functions to clear SIG unit-size very-high-risk band\n\nBehavior-preserving decomposition of oversized functions across the workspace, driven by a SIG maintainability audit. Reduces the Unit Size very-high-risk band (function LOC in units >60 lines) from 19.3% to 4.0%, under the 8.3% 4-star ceiling, by splitting large orchestration and detector functions into focused private helpers across core, extract, graph, config, lsp, mcp, and cli.\n\nIrreducible field-plumbing, lookup/match tables, and wide struct literals are left intact rather than split arbitrarily; the >30 and >15 size bands remain capped by the codebase's inherent function granularity and are intentionally not pursued. Pure extraction, no behavior change: full workspace build, clippy -D warnings, and the full test suite pass; no public signatures, output, schema, config, or API surface changed.",
          "timestamp": "2026-06-19T17:55:33+02:00",
          "tree_id": "c3e09601b00d6d9d9e6c7fadbd97fd3575904b5c",
          "url": "https://github.com/fallow-rs/fallow/commit/ca8dc6bfd241c6fc2dd43ca97f7162bd8ef82f4a"
        },
        "date": 1781885108014,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352105576,
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
          "id": "47ec5324173cda53eb28259965bd22b3ad8aa029",
          "message": "perf(plugins): parallelize workspace file bucketing\n\nbucket_files_by_workspace assigned every discovered file to its first\nmatching workspace on a single thread: an O(files x workspaces) prefix\nscan plus a path clone and relative-path allocation per file. On a 21k-file\nmonorepo this was a measurable slice of the plugins pipeline stage.\n\nMove the per-file assignment to a rayon par_iter and keep only the cheap\nbucket fill sequential. First-match-by-workspace-declaration-order and\nper-bucket file order are both preserved, so output is byte-identical.\n\nPlugins stage ~655ms -> ~607ms on the next.js fixture (21043 files, 41\nworkspaces); dead-code JSON byte-identical on next.js and vue-core.",
          "timestamp": "2026-06-19T20:19:17+02:00",
          "tree_id": "72e8eac3bc8d81b9e2a84859cc4c245cb86f83db",
          "url": "https://github.com/fallow-rs/fallow/commit/47ec5324173cda53eb28259965bd22b3ad8aa029"
        },
        "date": 1781893828972,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352373048,
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
          "id": "405d77aa44a49baaca9a8c19fba506a25414d1c5",
          "message": "perf(resolve): reuse a resolver session across external-stylesheet scans\n\naugment_external_style_package_usage resolves every node_modules stylesheet\nindividually, recursing through @import / @use chains. Each scan called the\nfull resolve_all_imports, which rebuilt the resolver instances, re-loaded the\nroot and per-workspace package.json manifests, and re-canonicalized every\nworkspace root. On a 41-workspace monorepo that re-did ~80 package.json reads\nand ~80 canonicalize calls per stylesheet, scaling with the external-style count.\n\nExtract that invariant setup into a reusable ResolverSession and split\nresolve_all_imports into build-session + resolve_all_imports_with_session (one\nshared resolution code path, so the parallel project pass is unchanged). The\nexternal-style scanner builds the session once and resolves each stylesheet\nthrough it.\n\nresolve-imports stage ~880ms -> ~847ms on the next.js fixture (21043 files, 41\nworkspaces); dead-code JSON byte-identical on next.js and vue-core.",
          "timestamp": "2026-06-19T20:32:53+02:00",
          "tree_id": "9ff9634d26883fe0cdd2b87afc79620443431669",
          "url": "https://github.com/fallow-rs/fallow/commit/405d77aa44a49baaca9a8c19fba506a25414d1c5"
        },
        "date": 1781894615880,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352456904,
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
          "id": "5f2c90cb40919aae559babe971332fcd955d8ea9",
          "message": "feat(dupes): add private rolling duplicate detector\n\nAdd a private FALLOW_DUPES_ROLLING detector path to compare a rolling-window candidate-first strategy against the current suffix-array extraction. The default detector remains intact, component-heavy corpora fall back to the suffix path, and the prototype reuses existing filtering and statistics so parity can be measured without changing public CLI behavior.\n\nRefresh the jscpd benchmark harness and README with corrected jscpd v5 comparison data, a version-mismatch guard, JS web formats, and a dedicated rolling comparator. Add interval-pressure benchmark coverage, rolling detector tests, and the research plan covering kept and rejected optimization rounds.",
          "timestamp": "2026-06-19T20:59:40+02:00",
          "tree_id": "10bfcd1646cbebb1536f3f4804075fd7d7009175",
          "url": "https://github.com/fallow-rs/fallow/commit/5f2c90cb40919aae559babe971332fcd955d8ea9"
        },
        "date": 1781896068955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352811800,
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
          "id": "661fcd6261dc59595219496f255366ba3a0799c6",
          "message": "docs(changelog): note faster plugin/config detection + traversal-rules refinement",
          "timestamp": "2026-06-19T21:48:42+02:00",
          "tree_id": "67c93a8a0e4a702d42e1c889b4302343f9d03aef",
          "url": "https://github.com/fallow-rs/fallow/commit/661fcd6261dc59595219496f255366ba3a0799c6"
        },
        "date": 1781899931362,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 353110280,
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
          "id": "86ea6ebd886e6aa52e53176f6db6e5342b2c492f",
          "message": "perf(plugins): activate browser-extension/obsidian via discovery index\n\nRoute filesystem-manifest activation for the browser-extension and obsidian\nplugins through the discovery walk's ConfigCandidateIndex instead of probing\nevery candidate directory's manifest.json. Outside production mode the plugins\nconsult the in-memory listing the walk already built; in production (None) they\nfall back to the filesystem probe, preserving prior behavior.\n\nPlugin::is_enabled_with_files gains an Option<&ConfigCandidateIndex> argument\nthreaded from collect_active_plugins. danger/k6/varlock take the argument but\nignore it (their activation reads source files already in the walk). varlock's\ndead nested .env.schema scan is left for a follow-up.\n\nOutput is byte-identical across the 10 real-world benchmark fixtures; the\nplugins stage on next.js drops ~60ms under load.",
          "timestamp": "2026-06-20T09:08:05+02:00",
          "tree_id": "1a40b5b8d1c2129e4fcf3c94d3e91a119b98bc8b",
          "url": "https://github.com/fallow-rs/fallow/commit/86ea6ebd886e6aa52e53176f6db6e5342b2c492f"
        },
        "date": 1781939876567,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 353118808,
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
          "id": "235bbfcb3a09e6951fd0b654e12a0f2af1535fbf",
          "message": "refactor: split workspace plugin fast path",
          "timestamp": "2026-06-20T11:31:56+02:00",
          "tree_id": "b27e8d08193b76df79a1eb61f547a843eb1c0681",
          "url": "https://github.com/fallow-rs/fallow/commit/235bbfcb3a09e6951fd0b654e12a0f2af1535fbf"
        },
        "date": 1781948541854,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 353035008,
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
          "id": "83096135fb6d43f6aafe6979061406cdbb7da62d",
          "message": "refactor: group framework finding population",
          "timestamp": "2026-06-20T15:41:01+02:00",
          "tree_id": "cdeb27705e596f8ac8c4869f6c3aefee420a33f9",
          "url": "https://github.com/fallow-rs/fallow/commit/83096135fb6d43f6aafe6979061406cdbb7da62d"
        },
        "date": 1781963487460,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352940816,
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
          "id": "48cb04fabb7375f32edaff7e635fe45c995076ae",
          "message": "refactor: split introduced finding filtering",
          "timestamp": "2026-06-20T17:40:07+02:00",
          "tree_id": "93f132799218e2a311f1517baacceaecec5b7e6d",
          "url": "https://github.com/fallow-rs/fallow/commit/48cb04fabb7375f32edaff7e635fe45c995076ae"
        },
        "date": 1781970593503,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352809936,
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
          "id": "fe51f1c840c9ce790a7e8d081b20d5cb5663f428",
          "message": "fix(unrendered-component): credit Vue components rendered through namespace re-exports\n\nThe unrendered-component render-usage chain walk (credit_rendered_sfc_chain)\nfollowed named and star re-export edges but never followed a namespace\nre-export edge (export * as List from './components/List', encoded as\nimported_name == \"*\", exported_name == \"List\"). A design system that exposes\ncompound components as namespaces and renders members via dotted tags\n(import { List } from '@/design-system'; <List.Root />) had every such member\nfalsely reported as reachable-but-rendered-nowhere.\n\nThe chain walk now follows a namespace re-export edge matching the walked name\nand credits every SFC the namespace target re-exports via a name-agnostic\ncredit_all_reexported_sfcs helper, mirroring the existing direct import * as ns\nhandling. Over-crediting can only suppress a finding, never create one. A\nnamespace barrel that is never consumed stays correctly flagged. Analyze-layer\nonly, so no CACHE_VERSION bump and no output/schema/CLI change.\n\nFixes #1351.",
          "timestamp": "2026-06-20T23:20:08+02:00",
          "tree_id": "a7465f66caf4ba901fb47a10ed68d64601101792",
          "url": "https://github.com/fallow-rs/fallow/commit/fe51f1c840c9ce790a7e8d081b20d5cb5663f428"
        },
        "date": 1781991069619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352825792,
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
          "id": "dab1571c0f49795d93ebe1725dc84449ae2bb025",
          "message": "fix(unrendered-component): credit whole-namespace-import rendered components\n\nFollow-up to the #1351 named-import fix. The unrendered-component detector also\nfalse-flagged components rendered through a whole-namespace import\n(import * as DS from '@/design-system'; <DS.List.Root />) when the design-system\nbarrel re-exported through nested export * as / export * barrels. That path goes\nthrough the ImportedName::Namespace arm of credit_static_import, which re-walked\neach re-export edge under the unmatched name '*', crediting nothing past a direct\nleaf named re-export.\n\nThe arm now routes through the name-agnostic credit_all_reexported_sfcs helper,\ncrediting every SFC reachable from the imported module through any re-export\nshape. A component reachable but outside the imported namespace still flags.\n8 benchmark fixtures byte-identical.\n\nRefs #1351.",
          "timestamp": "2026-06-20T23:42:59+02:00",
          "tree_id": "cebcb77bc1aaf6c1bd7b7f773a8570f9749ad4dc",
          "url": "https://github.com/fallow-rs/fallow/commit/dab1571c0f49795d93ebe1725dc84449ae2bb025"
        },
        "date": 1781992441148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352792288,
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
          "id": "5da5e73aba1b06bebe51be17f1d65c30c5a36ee7",
          "message": "chore: release v2.101.0",
          "timestamp": "2026-06-21T00:12:15+02:00",
          "tree_id": "d912638b67ebf4779656a5082130ceba5dfcd5aa",
          "url": "https://github.com/fallow-rs/fallow/commit/5da5e73aba1b06bebe51be17f1d65c30c5a36ee7"
        },
        "date": 1781994165404,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352801376,
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
          "id": "16ef25b141f81fc45db5809eee3a6abd725a9a16",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.101.0",
          "timestamp": "2026-06-21T00:56:22+02:00",
          "tree_id": "ca000e10f40d551ed0ec73addf20fae7c8f59c11",
          "url": "https://github.com/fallow-rs/fallow/commit/16ef25b141f81fc45db5809eee3a6abd725a9a16"
        },
        "date": 1781996786798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352801376,
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
          "id": "6fde7abc51cd3cc841cc981968bac245b22fce12",
          "message": "refactor: ratchet unit-size/interfacing clippy gates and bundle param clusters\n\nTighten the project's SIG-aligned unit-size and unit-interfacing gates to their next ratchet step and eliminate the resulting outliers with genuine refactors.\n\n- .clippy.toml: too_many_lines 150 to 100, too_many_arguments 7 to 6. Every production function is now under 100 lines; the 7-parameter outliers drop from 25 to 4 (frozen public/deprecated APIs with reasoned #[expect]).\n- Over-100-line production functions are split into cohesive private helpers; private 7-param functions are bundled into input/context structs (SarifCtx, HealthScanCtx, SecurityRankingInput, LoadConfigArgs, and several *Input structs).\n- Test fixtures keep their length via reasoned #[expect] rather than being fragmented.\n\nBehavior is unchanged: clippy --all-targets -D warnings clean at the new thresholds, full test suite green, output byte-identical across all formats.",
          "timestamp": "2026-06-21T11:55:42+02:00",
          "tree_id": "ace49869b9140fea7508da29f06e9c12a7d54020",
          "url": "https://github.com/fallow-rs/fallow/commit/6fde7abc51cd3cc841cc981968bac245b22fce12"
        },
        "date": 1782036341579,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352825552,
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
          "id": "de828f7de4029d5b61344f15f82a9fb76b997877",
          "message": "test: cover hardcoded-secret classification and import-resolution fallbacks",
          "timestamp": "2026-06-21T20:37:49+02:00",
          "tree_id": "253c25e92677f18774115490d78fef368c6086d5",
          "url": "https://github.com/fallow-rs/fallow/commit/de828f7de4029d5b61344f15f82a9fb76b997877"
        },
        "date": 1782067687774,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352825552,
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
          "id": "b594834c097157dda41ea60229d9d4e193f1f8a9",
          "message": "test(config,ci): make env-var tests deterministic on Windows CI\n\nurl_timeout and FALLOW_BOT_LOGIN tests raced on parallel env mutation (passed on macOS, failed windows-latest). config: pure url_timeout_from parser, no env mutation. ci: serialize the two FALLOW_BOT_LOGIN override tests behind a shared mutex.",
          "timestamp": "2026-06-22T09:30:30+02:00",
          "tree_id": "b8815aae5fca9fbdc9145db97ca9e3e92af85ffa",
          "url": "https://github.com/fallow-rs/fallow/commit/b594834c097157dda41ea60229d9d4e193f1f8a9"
        },
        "date": 1782114054251,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 352825672,
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
          "id": "1584760b83c1e91ded7b8431455772ee0de9efc2",
          "message": "ci: de-flake sidecar-resolution tests and pin zizmor version\n\nExtract pure resolve_sidecar_from_output helper so the yarn/npm sidecar tests stop spawning a subprocess (flaked under instrumented Coverage CI). Pin Actions Security to uvx zizmor@1.26.1 so a new audit cannot redden main with no fallow change.",
          "timestamp": "2026-06-22T10:11:04+02:00",
          "tree_id": "67875dd49ec395a5a4dc454b10cd649c6bbb9810",
          "url": "https://github.com/fallow-rs/fallow/commit/1584760b83c1e91ded7b8431455772ee0de9efc2"
        },
        "date": 1782117118762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 353784704,
            "unit": "bytes"
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
        "date": 1782118575145,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 359806648,
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
          "id": "88fe8a03a5384d902d0ddc025bad03d29266b1ce",
          "message": "fix(vscode): resolve native fallow binaries from platform packages (#1359)\n\nThe extension only probed node_modules/.bin/<name> and honored fallow.lspPath\nvia a bare existsSync, so a global or local npm install was never detected and\nthe LSP was re-downloaded on every startup (and CLI resolution failed with\nautoDownload off). On Windows the .bin entry is a non-spawnable .cmd/.ps1\nlauncher shim, and the real executable lives in the @fallow-cli/<target>\nplatform package.\n\nResolve the real native executable directly:\n- findLocalBinary now probes node_modules/@fallow-cli/<target>/<name>(.exe)\n  first (mirroring npm/fallow/scripts/platform-package.js), then the unix .bin\n  shim; on Windows it never returns the unspawnable shim.\n- findBinaryInPath re-resolves a .cmd/.ps1 launcher shim on PATH to the sibling\n  platform-package exe (both npm-prefix layouts), skipping it if absent.\n- resolveConfiguredBinaryPath honors fallow.lspPath as typed: exact file, a\n  directory install folder, a missing Windows extension, and a directly\n  configured launcher shim, plus the fallow CLI sibling for commands.ts.\n\nOn Linux both gnu and musl package names are probed since libc is not detected\nin the extension host. Adds deterministic cross-platform regression tests that\nmock os/fs/path to exercise the win32 and linux resolution from a POSIX host.",
          "timestamp": "2026-06-22T11:09:37+02:00",
          "tree_id": "0c7b8b8e6fc8fec7e10a1883bca5e3cc7c846629",
          "url": "https://github.com/fallow-rs/fallow/commit/88fe8a03a5384d902d0ddc025bad03d29266b1ce"
        },
        "date": 1782119996962,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 359829096,
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
          "id": "d65589eac55a4823d0f9cbf98990200f7c200e30",
          "message": "fix(audit): make non-reusable base-worktree paths unique per call\n\nBaseWorktree::create built the non-reusable worktree path from pid plus a\nwall-clock nanos read. nanos is not monotonic and repeats across threads, so two\naudit runs in one process (parallel unit tests, or a future in-process batch)\ncould mint the same temp path and race on `git worktree add`; the loser failed\nand the audit aborted with a generic exit 2. It surfaced as a flaky\naudit::tests::audit_dupes_falls_back_to_own_discovery_when_health_off (and audit\nsiblings) under parallel test runs, exposed once the Windows schema stack\noverflow stopped aborting the suite before those tests ran.\n\nAppend a process-global monotonic counter so every path is distinct regardless\nof clock resolution; the pid stays the first segment so orphan-sweep parsing is\nunchanged. Adds deterministic uniqueness and pid-parse regression tests.",
          "timestamp": "2026-06-22T12:52:17+02:00",
          "tree_id": "77d1a352eb910070ee9620c34c0d204ad7858c00",
          "url": "https://github.com/fallow-rs/fallow/commit/d65589eac55a4823d0f9cbf98990200f7c200e30"
        },
        "date": 1782126258484,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 359828584,
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
          "id": "d2ce880ffbb3ddd8ec62daee23e545c067584f4a",
          "message": "perf(cli): speed up command-only surfaces\n\nReuse file discovery in fallow list so plugin and entry-point listing do not walk the same project twice.\n\nRun optional fallow inspect evidence queries concurrently while capping each child to a fair share of the requested thread budget. Skip dirty-worktree checks for coverage upload dry-runs because no SHA-keyed upload happens.\n\nBenchmarked the affected release-binary command paths with hyperfine and verified output equivalence for the changed JSON and text surfaces.",
          "timestamp": "2026-06-23T00:22:47+02:00",
          "tree_id": "7cffd6e4edff66653cc96f929df11b94f1f9506d",
          "url": "https://github.com/fallow-rs/fallow/commit/d2ce880ffbb3ddd8ec62daee23e545c067584f4a"
        },
        "date": 1782167789397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 360016656,
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
          "id": "a8c0f881df379523229daf23bef79db86d45e3fe",
          "message": "fix(telemetry): classify CLI failure reasons\n\nRecord lower-level cloud runtime failures before they reach generic emit_error paths, and let the workflow epilogue use explicit, noted, or fallback failure reasons before telemetry is serialized.\n\nAdd a scheduled PostHog fail-rate gate for the published CLI version so regressions like the 2.101.0 spike are detected against a trailing baseline after enough telemetry is present.\n\nFixes fallow-rs/fallow-cloud#375.\nFixes fallow-rs/fallow-cloud#376.",
          "timestamp": "2026-06-23T09:37:24+02:00",
          "tree_id": "4f4f98c5bdc0f4547e3977b0632c1486af79f15a",
          "url": "https://github.com/fallow-rs/fallow/commit/a8c0f881df379523229daf23bef79db86d45e3fe"
        },
        "date": 1782200829900,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 360023208,
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
          "id": "5de6a978fd5fd97b5533d6710ab8228c5c108062",
          "message": "feat(review): change_anchors for the walkthrough guide + validator (#1367)\n\nPer-hunk content-addressed change_anchors in the walkthrough guide; the validator accepts signal_id OR change_anchor (anchor_kind), folded into the snapshot hash. Schema + .d.ts regenerated.",
          "timestamp": "2026-06-23T10:10:30+02:00",
          "tree_id": "c61803b365bdcefc84e1d1e4efe16e9dd42ae0b2",
          "url": "https://github.com/fallow-rs/fallow/commit/5de6a978fd5fd97b5533d6710ab8228c5c108062"
        },
        "date": 1782202942740,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 360253312,
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
          "id": "95e55a7cd35a29eaa7b53b4973225a81982c9fff",
          "message": "feat(cli): enrich decision surface with honest consumer count + trade-off clause\n\nThe human decision surface presented each removal or rename decision without two facts that change how a reviewer reads it: how many in-repo modules still import the symbol, and the structural trade-off the change makes. Deleting an export reads very differently when zero modules depend on it versus eight.\n\nThis computes an honest internal_consumer_count from the module graph per decision and renders a one-line trade-off clause in the human surface (audit_decision_surface.rs, audit_brief.rs, check/mod.rs). Both fields are added to the JSON contract and the generated TypeScript and JSON schemas, so the review surface and any agent read the same data. The clause keeps subject-verb agreement across singular and plural consumer counts.",
          "timestamp": "2026-06-23T10:24:30+02:00",
          "tree_id": "4f9301c0736bb915968055ec60b482f7054b7215",
          "url": "https://github.com/fallow-rs/fallow/commit/95e55a7cd35a29eaa7b53b4973225a81982c9fff"
        },
        "date": 1782203695255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 360500232,
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
          "id": "0ffd4caa625a79cdcc9bb233d73c6c69a5e51131",
          "message": "test(unused-members): cover issue-844 typed-instance crediting at monorepo path-alias scale\n\nAdds a regression test for issue #844's useMemo-bound typed-instance crediting at multi-package monorepo + tsconfig path-alias scale, reparented into the existing issue_844 module with a monorepo fixture. Test-only, no source change.",
          "timestamp": "2026-06-23T11:07:32+02:00",
          "tree_id": "b8b748e3b7226b7d114b1588c912a4b3ac9f3c1b",
          "url": "https://github.com/fallow-rs/fallow/commit/0ffd4caa625a79cdcc9bb233d73c6c69a5e51131"
        },
        "date": 1782206306610,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 361714864,
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
          "id": "b5e53b54fc2c0fc7668449b432727f58044bd839",
          "message": "fix(dead-code): credit merged namespace star re-export values\n\nMerged namespace/value declarations can produce duplicate same-named exports. A value consumer imported through an export-star barrel now keeps the same type/value intent as a direct named import, including multi-hop star barrels that need synthetic forwarding stubs.\n\nThe graph re-export pass now carries importer context through star propagation, splits synthetic type and value forwarding, and trace selection prefers the referenced duplicate export. The regression fixture covers the reported shape plus mixed type/value consumers.\n\nFixes #1373.",
          "timestamp": "2026-06-23T17:16:46+02:00",
          "tree_id": "6cb71d05a8c607d2375e4b8d4a9d9cd3af82b1be",
          "url": "https://github.com/fallow-rs/fallow/commit/b5e53b54fc2c0fc7668449b432727f58044bd839"
        },
        "date": 1782228501876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362006568,
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
          "id": "8a83dc0e86232d874f845eee306c75f3fb9c95d7",
          "message": "chore: release v2.102.0",
          "timestamp": "2026-06-23T21:57:36+02:00",
          "tree_id": "85570dec2eca4a16b2f60214ee9c23381f294998",
          "url": "https://github.com/fallow-rs/fallow/commit/8a83dc0e86232d874f845eee306c75f3fb9c95d7"
        },
        "date": 1782245367508,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362086056,
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
          "id": "bb16e3b6c725d214056e46b098dac56b46226d24",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.102.0",
          "timestamp": "2026-06-23T22:50:32+02:00",
          "tree_id": "7912ec0c3aea28faa9bc8b0c09de18eee3f3bac8",
          "url": "https://github.com/fallow-rs/fallow/commit/bb16e3b6c725d214056e46b098dac56b46226d24"
        },
        "date": 1782248466590,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362086056,
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
          "id": "7de6b4ee07eb2635621af39a10e120bd8b75db8b",
          "message": "fix(config): normalize leading dot ignore patterns\n\nStrip a single leading ./ before compiling ignorePatterns and ignoreUnresolvedImports so user globs match the project-root-relative paths used by source discovery and unresolved-import filtering.\n\nAdd focused regression coverage for resolved matchers and the source walker so the silent no-match case stays fixed.\n\nFixes #1385.",
          "timestamp": "2026-06-24T11:56:51+02:00",
          "tree_id": "4076857b89fbc8bc694e5149f0acaf8a8de66a4f",
          "url": "https://github.com/fallow-rs/fallow/commit/7de6b4ee07eb2635621af39a10e120bd8b75db8b"
        },
        "date": 1782295617318,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362089120,
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
          "id": "c0a7fdd8e75cae2c130f6c9ba24e822f4ba8d13a",
          "message": "feat(dupes): ignore tests by default\n\nAdd test and mock path defaults to duplicate detection while keeping duplicates.ignoreDefaults: false as the opt-out. Optimize merged ignore matching so default skip accounting does not add another glob pass per file.\\n\\nFixes #1386.",
          "timestamp": "2026-06-24T14:16:50+02:00",
          "tree_id": "a273c5ad4ad73933ad99e582f5d4e433a598ac4b",
          "url": "https://github.com/fallow-rs/fallow/commit/c0a7fdd8e75cae2c130f6c9ba24e822f4ba8d13a"
        },
        "date": 1782304065380,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362093664,
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
          "id": "7d80978332b8dba841a4ace0abc8a375b4b19df3",
          "message": "feat(coverage): hint source-map upload command when cloud coverage is unresolved (#1431)\n\nWhen `fallow coverage analyze --cloud` returns a coverage_unresolved warning\n(the cloud could not map runtime positions to source, almost always because no\nsource maps were uploaded for the commit) and the project has built source maps\non disk, print a copy-paste hint naming the exact upload command and build dir:\n\n  Hint: found source maps under .next/ that may not be uploaded for this commit.\n    Run `fallow coverage upload-source-maps --dir .next` so runtime coverage\n    attributes to your source files.\n\nRe-running the upload fixes both the never-uploaded and the stale-SHA cases, so\none hint covers both. Human output only: JSON consumers already get the\nstructured coverage_unresolved warning in report.warnings. The hint is gated on\nthe cloud warning code so it never fires when resolution is healthy. Scanned\nbuild dirs (dist, .next, out, build) cover the common bundlers; the scan skips\nnode_modules and stops at the first .map.",
          "timestamp": "2026-06-24T21:53:51Z",
          "tree_id": "9ed8d496f7d3d8bd34088f9149ce52df056d0600",
          "url": "https://github.com/fallow-rs/fallow/commit/7d80978332b8dba841a4ace0abc8a375b4b19df3"
        },
        "date": 1782338723797,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362124064,
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
          "id": "4c8927efaf8a3677d36986701e43f4a1ed574758",
          "message": "fix(extract): harden member usage crediting (#1634)\n\n* fix(extract): harden member usage crediting\n\nConsolidate Vue template close parsing, inline Pinia store member crediting, and same-file/cross-module factory-return member tracing into one extract false-positive hardening slice.\n\nBump parse cache semantics for the new extraction facts and add regression fixtures across extract, graph, and core.\n\n* perf(extract): omit empty factory returns from cache\n\n* perf(extract): compact factory return payloads",
          "timestamp": "2026-06-26T15:03:14+02:00",
          "tree_id": "750609ea8a4058e92a9c8204421f5fee75fd1072",
          "url": "https://github.com/fallow-rs/fallow/commit/4c8927efaf8a3677d36986701e43f4a1ed574758"
        },
        "date": 1782479595180,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362723672,
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
          "id": "367ecaf9c03de9a5643aba4e141a520ba035171e",
          "message": "fix(extract): credit Pinia store members through typed params (#1489 Case 2)\n\nA Pinia store passed as a param typed ReturnType<typeof useFooStore> (inline or\nvia a local type alias), and read as store.member, props.store.member, or\nconst { member } = props.store, was reported as an unused-store-members false\npositive: crediting only joined on the store-factory name and never resolved a\nparam typed as the store.\n\nRecords the type-alias-to-factory mapping and resolves a store-typed param to\nthe factory name through the existing binding_target_names remap, gated on the\nuse<Name>Store convention so a non-store ReturnType param never masks a real\nunused member. Extract-only; no analyze, CLI, or LSP change. CACHE_VERSION\nbumped 191 to 192.\n\nCompletes #1489 (Case 1, the inline form, shipped in #1634).\n\nCloses #1489.",
          "timestamp": "2026-06-26T15:23:40+02:00",
          "tree_id": "55fa1adc270c18c91bcb83e840e4d6b4e622e668",
          "url": "https://github.com/fallow-rs/fallow/commit/367ecaf9c03de9a5643aba4e141a520ba035171e"
        },
        "date": 1782480838976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362758296,
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
          "id": "400c8416172afe7c1ae78c8bdd04dfb159e91ec7",
          "message": "test(core): pin #1441 inferred-return factory member crediting\n\n## Summary\n\nThe factory/composable indirection false positive for `unused-class-members` was\nfixed in #1634 (factory-return crediting), but its fixtures all annotate the\nfactory return type. Issue #1441's headline is specifically the INFERRED return\ntype: `const api = useApi(); api.Member()` where `useApi` has no return\nannotation, so the class type reaches the consumer only through the typed\nmodule-local the factory returns.\n\nVerified on current `main` that the exact #1441 repro is fixed (`Api.ViaFactory`\nno longer flagged), with a non-vacuous control (a genuinely dead member still\nflags). This PR pins that exact inferred-return shape against regression and\nrecords the user-facing CHANGELOG entry the original fix omitted.\n\nTest-only plus a fixture and CHANGELOG entry; no production code change.\n\nCloses #1441.",
          "timestamp": "2026-06-26T15:45:14+02:00",
          "tree_id": "92818d3665d76f20bfd3ee13407fd89fcb7b544c",
          "url": "https://github.com/fallow-rs/fallow/commit/400c8416172afe7c1ae78c8bdd04dfb159e91ec7"
        },
        "date": 1782482170592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362758296,
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
          "id": "7dadcaa188d4cc744330d120389c0b4b942fb098",
          "message": "fix(svelte): credit bind:/style:/class: directive shorthands as prop usage\n\nA Svelte directive written without an explicit value is shorthand for `directive:NAME={NAME}`, so the directive name itself references a local binding: `bind:open` = `bind:open={open}`, `style:height` = `style:height={height}`, `class:active` = `class:active={active}`. The template scanner only credited `use:`/`animate:`/`in:`/`out:`/`transition:` directive names, so a prop referenced only through a `bind:`/`style:`/`class:` shorthand was reported as `unused-component-props`.\n\nCredit the directive name as a reference only for value-less attributes; with an explicit `={...}` value the name is a target (child prop, CSS property, or class name) and the value path already credits the real binding. A leading-character guard skips CSS custom properties (`style:--accent`).\n\nCACHE_VERSION 192 -> 193: prop `used_in_template` flags change.\n\nFixes #1641",
          "timestamp": "2026-06-27T21:28:41+02:00",
          "tree_id": "74631c1ce7cab6cf9b65d269c0befb2e9eb5ab07",
          "url": "https://github.com/fallow-rs/fallow/commit/7dadcaa188d4cc744330d120389c0b4b942fb098"
        },
        "date": 1782589512057,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362783944,
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
          "id": "1775944e57c47367250f410889f2948545f8789a",
          "message": "fix(vue): credit v-bind shorthand and <style> v-bind() as prop usage\n\nTwo Vue `unused-component-props` false positives from the SFC scanner missing prop references.\n\n1. Value-less `v-bind` same-name shorthand (Vue 3.4+): `:open` = `:open=\"open\"`, `:some-prop` = `:some-prop=\"someProp\"`. The camelCase argument of a value-less `:arg` / `v-bind:arg` is now credited.\n\n2. `<style> v-bind()`: Vue SFC CSS `v-bind(accent)` / `v-bind(props.accent)` / `v-bind('a.b')` binds a script or prop value into CSS. `<style>` bodies are now scanned for these references (quote- and paren-aware) and the referenced binding is credited.\n\nA `v-bind` written with an explicit value is unchanged. CACHE_VERSION 193 -> 195.\n\nRefs #1641.",
          "timestamp": "2026-06-27T22:20:18+02:00",
          "tree_id": "70fcb3b09cffc2a37b3a5d6cf85294cfe1ee98cb",
          "url": "https://github.com/fallow-rs/fallow/commit/1775944e57c47367250f410889f2948545f8789a"
        },
        "date": 1782592338076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362818480,
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
          "id": "b006fb79cf1e6b80608532b80cdf290a9d9baad3",
          "message": "feat(coverage): confidence-discriminator contract on analyze findings (#1645)\n\n* feat(coverage): emit confidence-discriminator contract on analyze findings (#321)\n\nEvery `coverage analyze` finding now carries a `discriminators` block alongside its verdict so an agent can reproduce the verdict and see the min-observation confidence cap instead of re-deriving them: tracking_state (called / never_called / untracked) from the three-state signal, invocation_ratio (invocations / trace_count), the low_traffic_threshold + min_observation_volume in effect (resolved CLI-side with the sidecar's own defaults, 0.001 / 5000), and trace_count + meets_observation_volume (floor visibility).\n\nF4: makes the EXISTING Fallow-owned discriminators legible; not a new or external signal and gates nothing. Additive + backwards-compatible (Optional, omitted when absent; the merge pipeline populates it, the cloud-join path omits it pending #328). All output formats + snapshots unaffected (fixtures omit it). fallow-rs/fallow-cloud#321\n\n* chore(schema): regenerate output-schema for the discriminator block (#321)\n\nThe new RuntimeCoverageDiscriminators struct + discriminators finding field changed the derived JsonSchema; regenerate the committed docs/output-schema.json so the schema_emit drift tests pass. Additive only.",
          "timestamp": "2026-06-27T23:00:07+02:00",
          "tree_id": "38924ceb8cc7d7b8c8eccadfb0a8c3dcde340fc0",
          "url": "https://github.com/fallow-rs/fallow/commit/b006fb79cf1e6b80608532b80cdf290a9d9baad3"
        },
        "date": 1782594736562,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362850024,
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
          "id": "5a664dea3888b76e535b83f46b4ab2b4d4cf0f49",
          "message": "feat(coverage): mirror cloud trust-output contract on local analyze report (#1646)\n\n* feat(coverage): mirror cloud trust-output contract on local analyze report (#316, #319)\n\n`coverage analyze` now emits the cloud runtime-context trust-output shape on the local report: actionable + actionability_reason + actionability_verdict (#316, a capture with no tracked functions is non-actionable with a first-class insufficient_evidence verdict, never read as cold) and a provenance block (#319: data_source, is_production 'unknown' locally, freshness_days, untracked_ratio, unresolved_ratio, stale, stale_after_days 14 mirrored from the cloud RUNTIME_STALE_AFTER_DAYS).\n\nF4: actionable is a non-action floor and provenance is context only; neither gates a positive verdict or confidence. The cloud-join path (analyze --cloud) carries the same shape; full cloud-provenance pass-through is #328. Additive (only the JSON format surfaces the block; 2 snapshots updated). fallow-rs/fallow-cloud#316 fallow-rs/fallow-cloud#319\n\n* chore(schema): regenerate output-schema for runtime-coverage provenance/actionable (#316, #319)\n\nThe new RuntimeCoverageProvenance struct + actionable/provenance report fields changed the derived JsonSchema; regenerate the committed docs/output-schema.json so the schema_emit drift tests pass. Additive only.",
          "timestamp": "2026-06-27T23:27:47+02:00",
          "tree_id": "4a134cb6d61be100c26b2f3907c296dc54b08da4",
          "url": "https://github.com/fallow-rs/fallow/commit/5a664dea3888b76e535b83f46b4ab2b4d4cf0f49"
        },
        "date": 1782596309505,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 362893032,
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
          "id": "f8eb3dd6a2103fdcd20f210957ed7a0d4ff8914b",
          "message": "refactor: consolidate engine api and output contracts\n\nSplit the architecture into explicit engine, output, API, and programmatic CLI boundaries so CLI rendering is no longer the implicit API surface. Typed engine results now feed CLI, LSP, NAPI, MCP, and programmatic consumers through shared contracts.\n\nMove output contracts out of CLI ownership, replace extraction sentinel protocols with typed semantic facts, unify issue metadata and cache fingerprints, and keep the graph cache behind stable FileId-aware keys. The final perf pass also removes an allocation from dupes identifier labeling.",
          "timestamp": "2026-06-28T07:30:51+02:00",
          "tree_id": "d9c5eb2f44852a326fc1c97da926f36b46b28d80",
          "url": "https://github.com/fallow-rs/fallow/commit/f8eb3dd6a2103fdcd20f210957ed7a0d4ff8914b"
        },
        "date": 1782625345261,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 378555840,
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
          "id": "ac68a1a4e99d9ee38ff9198c519f438d172358d2",
          "message": "chore: release v2.103.0",
          "timestamp": "2026-06-28T08:34:02+02:00",
          "tree_id": "790514ee70408a663a30317868d06140ab2ba051",
          "url": "https://github.com/fallow-rs/fallow/commit/ac68a1a4e99d9ee38ff9198c519f438d172358d2"
        },
        "date": 1782629096914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 378577232,
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
          "id": "e28929f58d96b190038826bce07c38808cff4166",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.103.0",
          "timestamp": "2026-06-28T09:38:13+02:00",
          "tree_id": "9575d956e7f2887730990aedd3331d1ee44d733d",
          "url": "https://github.com/fallow-rs/fallow/commit/e28929f58d96b190038826bce07c38808cff4166"
        },
        "date": 1782633024854,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 378577232,
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
          "id": "00f0814ca8d59228a2ff587a2ddaaaad524ceb6e",
          "message": "fix(config): resolve config passed as a named const to a wrapper call\n\n`find_config_object` (the shared resolver behind every config-parsing plugin) resolved a bare `export default config` identifier but not a config passed as an identifier argument to a wrapper call: `export default withMDX(nextConfig)` (the official @next/mdx docs idiom), `module.exports = createJestConfig(customConfig)`, nested `withMDX(withFoo(nextConfig))`, and curried `compose(...)(nextConfig)` all resolved to nothing, so the Next.js plugin never saw `pageExtensions` and App Router `page.mdx` pages were reported as unused-files.\n\n`resolve_wrapped_config_object` follows a wrapper call's argument (through nested wrapper calls and TS `satisfies`/`as`) to its local `const NAME = {...}`, wired as a fallback in both the default-export and `module.exports` paths. Already-resolving shapes are unchanged; byte-identical issue counts on all eight benchmark fixtures. On leerob.io (exact idiom) the fix removes all 4 App Router `page.mdx` false positives and adds nothing.\n\nFixes #1642.",
          "timestamp": "2026-06-28T15:32:16+02:00",
          "tree_id": "1a7774334197fb53b43f93881c1202b1b506e1a1",
          "url": "https://github.com/fallow-rs/fallow/commit/00f0814ca8d59228a2ff587a2ddaaaad524ceb6e"
        },
        "date": 1782654095218,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 378588408,
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
          "id": "7226852618979a43dbceeb860ca3bacc8369e7a5",
          "message": "perf(graph): cache dunce::canonicalize results during import resolution\n\nImport classification realpath's every specifier that resolves to a\nnode_modules / output-dir / symlinked target (the non-raw-map hits in\nResolvedPathContext::resolve), and the same package path is\nre-canonicalized once per file that imports the package. canonicalize\nis a pure function of the path's on-disk state, constant within a run.\n\nAdd a session-local CanonicalizeCache on ResolveContext keyed by input\npath (created fresh per resolve_all_imports call, so watch-mode rebuilds\nsee filesystem changes). Cuts the resolve-imports stage ~5% on a large\nmonorepo; the realpath/canonicalize syscalls also dominate the resolver\nFS traffic that the resolve-bound health command pays. Output is\nbyte-identical.",
          "timestamp": "2026-06-28T23:40:46+02:00",
          "tree_id": "9ab4ad01fba8f73b295e5017f61a4298818fbd16",
          "url": "https://github.com/fallow-rs/fallow/commit/7226852618979a43dbceeb860ca3bacc8369e7a5"
        },
        "date": 1782683461318,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 378664704,
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
          "id": "4caf4a8dfd12600fe6f5d01d752d3917128faf51",
          "message": "test(core): pin scoped-canonical symlink fallback for public-API entry points\n\nExtract the matching core of resolve_entry_via_scoped_canonical into a\nModuleGraph-free helper (match_canonical_entry_under_package) and add a\nUnix-only tempdir+symlink unit test for the intra-project-symlink case\nthe fallback exists to handle: a module discovered through a symlinked\ndirectory whose raw path differs from the canonicalized entry path. The\ncommon no-symlink path is covered by the byte-identical integration\ncorpus; this pins the residual branch the raw-map lookup cannot reach,\nplus the package-root scoping and non-match negatives.",
          "timestamp": "2026-06-29T09:58:47+02:00",
          "tree_id": "0bb2821cebb0d91e1ad76767c82aaab0695e8e6f",
          "url": "https://github.com/fallow-rs/fallow/commit/4caf4a8dfd12600fe6f5d01d752d3917128faf51"
        },
        "date": 1782720522735,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 378695840,
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
          "id": "4f5aabde8eda855175aee7c0e1dbd695f31e9923",
          "message": "test(release): guard crates.io publish list matches publishable workspace crates",
          "timestamp": "2026-06-29T10:19:37+02:00",
          "tree_id": "e545ffd666a6dc86ee5d9cc7f957f4e730cabff1",
          "url": "https://github.com/fallow-rs/fallow/commit/4f5aabde8eda855175aee7c0e1dbd695f31e9923"
        },
        "date": 1782721747614,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 378695840,
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
          "id": "a338591d631f24f0e14e108b19437a93e2179e4e",
          "message": "fix(members): credit framework-dispatched OpenLayers methods and coerced toString\n\nTwo `unused-class-members` false positives where the only use is not an explicit `instance.member()` call (split from #1441).\n\nGAP 1: a method OpenLayers invokes by convention on a subclass of an `ol/interaction/*` base (`handleEvent`, the `PointerInteraction` `handle*Event` / `stopDown` protocol) is credited via a heritage-scoped, import-source-verified built-in. A same-named local base does not credit; a genuinely-dead non-dispatched member still reports. Analyze-time only.\n\nGAP 2: a `toString` invoked only through string coercion (template-literal interpolation, `String(...)`, or `+` with a string sibling) is credited when `new Class()` flows directly into the coercion position. A tagged template (`html` / styled-components / `gql`) is NOT a coercion position and does not credit (an `in_tagged_template_quasi` guard, consumed per-quasi so a nested plain template still coerces). CACHE_VERSION bumped.\n\nFixes #1638.",
          "timestamp": "2026-06-29T10:57:22+02:00",
          "tree_id": "be9a162d693d208216b4e64dcb96d539ec15f428",
          "url": "https://github.com/fallow-rs/fallow/commit/a338591d631f24f0e14e108b19437a93e2179e4e"
        },
        "date": 1782724054210,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 378812576,
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
          "id": "a64ff318455f77583bbe9d4805792fc5da7e2962",
          "message": "fix(telemetry): note find-state for security survivors and blind-spots\n\nThe security survivors and blind-spots subcommands emit a security workflow\ntelemetry event but never noted their find-state, so the process-global\nfindings-present accumulator stayed unset and findings_present serialized as\nnull. findings_present is the field that distinguishes found-candidates from\nerrored (security exits non-zero only on findings when the rule is raised to\nerror), so a null value lost that signal for these modes.\n\nrun_survivors now notes its retained (non-dismissed) candidate count and\nrun_blind_spots notes its unresolved-callee-site count before exit, matching the\ndefault, --file, and --gate paths. No change to the telemetry payload shape.\nFour neuter-verified regression tests assert findings_present is non-null per\nsubcommand.\n\nFixes #1650.",
          "timestamp": "2026-06-29T11:55:32+02:00",
          "tree_id": "3e35cb9e456b47f0693db84438926a4e688139ab",
          "url": "https://github.com/fallow-rs/fallow/commit/a64ff318455f77583bbe9d4805792fc5da7e2962"
        },
        "date": 1782727525480,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 378814248,
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
          "id": "ae0214951c811db6eb71ff52ef0dbd4413a460b9",
          "message": "feat(config): exempt props via unusedComponentProps.ignorePattern (#1654)\n\nAdds an opt-in `unusedComponentProps: { ignorePattern: \"<regex>\" }` config section. The regex is matched against each declared component prop's local destructure binding name (e.g. `_stage`), exempting it from `unused-component-props`. Honors the leading-underscore \"accepted-but-intentionally-unused\" convention (Svelte 5 `$props()`, React destructure) mirroring TypeScript `noUnusedParameters` and ESLint `varsIgnorePattern` / `argsIgnorePattern`.\n\nApplies to all four arms sharing the `ComponentProp` IR (Vue, Svelte, Astro, React/Preact). Validated at config load (invalid regex fails load with exit 2), compiled defensively at resolve. Matching is unanchored, so users anchor with `^_`. A human-output note reports the exempted count. No `CACHE_VERSION` bump. Default behavior unchanged (opt-in only).\n\nFixes #1648.",
          "timestamp": "2026-06-29T12:36:17+02:00",
          "tree_id": "7b1f22d13dcc425a67d2b921a0f36ad30246f441",
          "url": "https://github.com/fallow-rs/fallow/commit/ae0214951c811db6eb71ff52ef0dbd4413a460b9"
        },
        "date": 1782730001367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 379268288,
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
          "id": "59b20c7565930a5cb0df3e62a3e711941b1cde69",
          "message": "fix(telemetry): note find-state for flags/watch and guard the workflow class\n\nFollow-up to #1650. flags and watch emit a code_quality_review telemetry event\n(the same workflow as combined fallow, which populates findings_present) but\nnever noted their find-state, so findings_present serialized as null. flags now\nnotes its feature-flag count and watch notes each cycle's issue count.\n\nFocused dead-code/dupes trace and impact-closure views early-return before the\nnormal note; they still run the full analysis, so they now record its result\ncount. findings_present reflects what the analysis surfaced independent of the\noutput view.\n\nAdds a structural guard: an exhaustive Workflow::surfaces_findings()\nclassification (a new workflow variant fails to compile until classified) plus a\ndebug-build invariant at the single telemetry event-emission point that fails\nfast if a finding-surfacing workflow records a non-failing event without noting\nfind-state. The guard caught the dead-code and dupes trace-mode gaps during this\nchange. No change to the telemetry payload shape.\n\nRefs #1650.",
          "timestamp": "2026-06-29T13:01:42+02:00",
          "tree_id": "76e2940f8897c7b8bda5f8e293138ee89bb0cb44",
          "url": "https://github.com/fallow-rs/fallow/commit/59b20c7565930a5cb0df3e62a3e711941b1cde69"
        },
        "date": 1782731519455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 379275432,
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
          "id": "1fcfee6ad71b3bc70c16cabc59b5b6fa4d93123d",
          "message": "feat(review): runtime-weighted focus map + safe explicit-skip\n\nWhen `--runtime-coverage` is present, the weighted focus map (the `fallow\nreview` / `audit --brief` attention ranking) weights hot files by bucketed\ninvocation count so a hot path amplifies the blast and outranks an\notherwise-equal cold unit, and a unit the runtime proves cold (only\nsafe-to-delete findings, no hot path) that carries zero deterministic signal and\nno confidence flag earns the safe explicit-skip label. With no runtime input the\noutput is byte-identical to the existing deterministic focus map: the runtime\ncomponent is 0 and omitted from the wire, and no unit can reach the skip arm.\n\n- output: FocusLabel::Skip (runtime-backed only) + additive FocusScore.runtime\n- engine: RuntimeFocus on FocusInputs; score_unit adds the bucketed weight;\n  is_safe_skip gates on runtime-cold + zero static signal + no confidence flag\n- wiring: build_runtime_focus derives per-file hot/cold from the runtime-coverage\n  report; reconcile_runtime_focus (pure, unit-tested) does the mixed-verdict\n  exclusion + hot-excludes-cold + peak aggregation\n- docs/output-schema.json + the generated VS Code / npm type contracts\n  regenerated (FocusLabel gains skip, FocusScore gains runtime)\n\nHonest boundary: the runtime report's findings omit active functions, so a\nmid-traffic active function below the hot threshold is invisible to the cold\nsignal; hence safe-skip is gated on zero static risk + no confidence flag,\nscoped to diff files, and always advisory (kept in the escape-hatch list).",
          "timestamp": "2026-06-29T12:50:55Z",
          "tree_id": "2941ce7c1624b4a06c1a72af23f076d2d85ed4c7",
          "url": "https://github.com/fallow-rs/fallow/commit/1fcfee6ad71b3bc70c16cabc59b5b6fa4d93123d"
        },
        "date": 1782738108723,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 380409904,
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
          "id": "19a5a58c8a5ce73b2928dd0a8ed2b7d7a6e3f15b",
          "message": "test(review): end-to-end runtime-weighted focus map coverage\n\nAdds a gated integration test driving real `fallow review --runtime-coverage`:\na signed stub sidecar reports a hot path on a changed module, and the test\nasserts the brief's focus map weights it (a `runtime` score component that\nlifts the file into `review-here`). A negative control runs the same repo\nwithout `--runtime-coverage` and asserts no `runtime` component and no `skip`\nlabel.\n\nCovers the seam the unit tests cannot reach on their own: that\n`--runtime-coverage` populates `result.health.report.runtime_coverage` and that\n`build_runtime_focus` joins it onto the focus map end-to-end. Gated behind the\n`test-sidecar-key` cargo feature (signed stub + minted license).",
          "timestamp": "2026-06-29T13:26:11Z",
          "tree_id": "83dd19a5d0c726271e84d53a33e105516eb9f4fc",
          "url": "https://github.com/fallow-rs/fallow/commit/19a5a58c8a5ce73b2928dd0a8ed2b7d7a6e3f15b"
        },
        "date": 1782740073710,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 380409904,
            "unit": "bytes"
          }
        ]
      }
    ]
  }
}