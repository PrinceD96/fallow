window.BENCHMARK_DATA = {
  "lastUpdate": 1783459042638,
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
          "id": "c0a7fdd8e75cae2c130f6c9ba24e822f4ba8d13a",
          "message": "feat(dupes): ignore tests by default\n\nAdd test and mock path defaults to duplicate detection while keeping duplicates.ignoreDefaults: false as the opt-out. Optimize merged ignore matching so default skip accounting does not add another glob pass per file.\\n\\nFixes #1386.",
          "timestamp": "2026-06-24T14:16:50+02:00",
          "tree_id": "a273c5ad4ad73933ad99e582f5d4e433a598ac4b",
          "url": "https://github.com/fallow-rs/fallow/commit/c0a7fdd8e75cae2c130f6c9ba24e822f4ba8d13a"
        },
        "date": 1782303643109,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10484009,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 56993,
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
          "id": "7d80978332b8dba841a4ace0abc8a375b4b19df3",
          "message": "feat(coverage): hint source-map upload command when cloud coverage is unresolved (#1431)\n\nWhen `fallow coverage analyze --cloud` returns a coverage_unresolved warning\n(the cloud could not map runtime positions to source, almost always because no\nsource maps were uploaded for the commit) and the project has built source maps\non disk, print a copy-paste hint naming the exact upload command and build dir:\n\n  Hint: found source maps under .next/ that may not be uploaded for this commit.\n    Run `fallow coverage upload-source-maps --dir .next` so runtime coverage\n    attributes to your source files.\n\nRe-running the upload fixes both the never-uploaded and the stale-SHA cases, so\none hint covers both. Human output only: JSON consumers already get the\nstructured coverage_unresolved warning in report.warnings. The hint is gated on\nthe cloud warning code so it never fires when resolution is healthy. Scanned\nbuild dirs (dist, .next, out, build) cover the common bundlers; the scan skips\nnode_modules and stops at the first .map.",
          "timestamp": "2026-06-24T21:53:51Z",
          "tree_id": "9ed8d496f7d3d8bd34088f9149ce52df056d0600",
          "url": "https://github.com/fallow-rs/fallow/commit/7d80978332b8dba841a4ace0abc8a375b4b19df3"
        },
        "date": 1782338304800,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10463489,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 57008,
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
          "id": "4c8927efaf8a3677d36986701e43f4a1ed574758",
          "message": "fix(extract): harden member usage crediting (#1634)\n\n* fix(extract): harden member usage crediting\n\nConsolidate Vue template close parsing, inline Pinia store member crediting, and same-file/cross-module factory-return member tracing into one extract false-positive hardening slice.\n\nBump parse cache semantics for the new extraction facts and add regression fixtures across extract, graph, and core.\n\n* perf(extract): omit empty factory returns from cache\n\n* perf(extract): compact factory return payloads",
          "timestamp": "2026-06-26T15:03:14+02:00",
          "tree_id": "750609ea8a4058e92a9c8204421f5fee75fd1072",
          "url": "https://github.com/fallow-rs/fallow/commit/4c8927efaf8a3677d36986701e43f4a1ed574758"
        },
        "date": 1782479267417,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10627257,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58589,
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
          "id": "367ecaf9c03de9a5643aba4e141a520ba035171e",
          "message": "fix(extract): credit Pinia store members through typed params (#1489 Case 2)\n\nA Pinia store passed as a param typed ReturnType<typeof useFooStore> (inline or\nvia a local type alias), and read as store.member, props.store.member, or\nconst { member } = props.store, was reported as an unused-store-members false\npositive: crediting only joined on the store-factory name and never resolved a\nparam typed as the store.\n\nRecords the type-alias-to-factory mapping and resolves a store-typed param to\nthe factory name through the existing binding_target_names remap, gated on the\nuse<Name>Store convention so a non-store ReturnType param never masks a real\nunused member. Extract-only; no analyze, CLI, or LSP change. CACHE_VERSION\nbumped 191 to 192.\n\nCompletes #1489 (Case 1, the inline form, shipped in #1634).\n\nCloses #1489.",
          "timestamp": "2026-06-26T15:23:40+02:00",
          "tree_id": "55fa1adc270c18c91bcb83e840e4d6b4e622e668",
          "url": "https://github.com/fallow-rs/fallow/commit/367ecaf9c03de9a5643aba4e141a520ba035171e"
        },
        "date": 1782480423967,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10646073,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58567,
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
          "id": "400c8416172afe7c1ae78c8bdd04dfb159e91ec7",
          "message": "test(core): pin #1441 inferred-return factory member crediting\n\n## Summary\n\nThe factory/composable indirection false positive for `unused-class-members` was\nfixed in #1634 (factory-return crediting), but its fixtures all annotate the\nfactory return type. Issue #1441's headline is specifically the INFERRED return\ntype: `const api = useApi(); api.Member()` where `useApi` has no return\nannotation, so the class type reaches the consumer only through the typed\nmodule-local the factory returns.\n\nVerified on current `main` that the exact #1441 repro is fixed (`Api.ViaFactory`\nno longer flagged), with a non-vacuous control (a genuinely dead member still\nflags). This PR pins that exact inferred-return shape against regression and\nrecords the user-facing CHANGELOG entry the original fix omitted.\n\nTest-only plus a fixture and CHANGELOG entry; no production code change.\n\nCloses #1441.",
          "timestamp": "2026-06-26T15:45:14+02:00",
          "tree_id": "92818d3665d76f20bfd3ee13407fd89fcb7b544c",
          "url": "https://github.com/fallow-rs/fallow/commit/400c8416172afe7c1ae78c8bdd04dfb159e91ec7"
        },
        "date": 1782481906214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10657225,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58586,
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
          "id": "7dadcaa188d4cc744330d120389c0b4b942fb098",
          "message": "fix(svelte): credit bind:/style:/class: directive shorthands as prop usage\n\nA Svelte directive written without an explicit value is shorthand for `directive:NAME={NAME}`, so the directive name itself references a local binding: `bind:open` = `bind:open={open}`, `style:height` = `style:height={height}`, `class:active` = `class:active={active}`. The template scanner only credited `use:`/`animate:`/`in:`/`out:`/`transition:` directive names, so a prop referenced only through a `bind:`/`style:`/`class:` shorthand was reported as `unused-component-props`.\n\nCredit the directive name as a reference only for value-less attributes; with an explicit `={...}` value the name is a target (child prop, CSS property, or class name) and the value path already credits the real binding. A leading-character guard skips CSS custom properties (`style:--accent`).\n\nCACHE_VERSION 192 -> 193: prop `used_in_template` flags change.\n\nFixes #1641",
          "timestamp": "2026-06-27T21:28:41+02:00",
          "tree_id": "74631c1ce7cab6cf9b65d269c0befb2e9eb5ab07",
          "url": "https://github.com/fallow-rs/fallow/commit/7dadcaa188d4cc744330d120389c0b4b942fb098"
        },
        "date": 1782589064106,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10613072,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58546,
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
          "id": "1775944e57c47367250f410889f2948545f8789a",
          "message": "fix(vue): credit v-bind shorthand and <style> v-bind() as prop usage\n\nTwo Vue `unused-component-props` false positives from the SFC scanner missing prop references.\n\n1. Value-less `v-bind` same-name shorthand (Vue 3.4+): `:open` = `:open=\"open\"`, `:some-prop` = `:some-prop=\"someProp\"`. The camelCase argument of a value-less `:arg` / `v-bind:arg` is now credited.\n\n2. `<style> v-bind()`: Vue SFC CSS `v-bind(accent)` / `v-bind(props.accent)` / `v-bind('a.b')` binds a script or prop value into CSS. `<style>` bodies are now scanned for these references (quote- and paren-aware) and the referenced binding is credited.\n\nA `v-bind` written with an explicit value is unchanged. CACHE_VERSION 193 -> 195.\n\nRefs #1641.",
          "timestamp": "2026-06-27T22:20:18+02:00",
          "tree_id": "70fcb3b09cffc2a37b3a5d6cf85294cfe1ee98cb",
          "url": "https://github.com/fallow-rs/fallow/commit/1775944e57c47367250f410889f2948545f8789a"
        },
        "date": 1782592065884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10640625,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58613,
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
          "id": "b006fb79cf1e6b80608532b80cdf290a9d9baad3",
          "message": "feat(coverage): confidence-discriminator contract on analyze findings (#1645)\n\n* feat(coverage): emit confidence-discriminator contract on analyze findings (#321)\n\nEvery `coverage analyze` finding now carries a `discriminators` block alongside its verdict so an agent can reproduce the verdict and see the min-observation confidence cap instead of re-deriving them: tracking_state (called / never_called / untracked) from the three-state signal, invocation_ratio (invocations / trace_count), the low_traffic_threshold + min_observation_volume in effect (resolved CLI-side with the sidecar's own defaults, 0.001 / 5000), and trace_count + meets_observation_volume (floor visibility).\n\nF4: makes the EXISTING Fallow-owned discriminators legible; not a new or external signal and gates nothing. Additive + backwards-compatible (Optional, omitted when absent; the merge pipeline populates it, the cloud-join path omits it pending #328). All output formats + snapshots unaffected (fixtures omit it). fallow-rs/fallow-cloud#321\n\n* chore(schema): regenerate output-schema for the discriminator block (#321)\n\nThe new RuntimeCoverageDiscriminators struct + discriminators finding field changed the derived JsonSchema; regenerate the committed docs/output-schema.json so the schema_emit drift tests pass. Additive only.",
          "timestamp": "2026-06-27T23:00:07+02:00",
          "tree_id": "38924ceb8cc7d7b8c8eccadfb0a8c3dcde340fc0",
          "url": "https://github.com/fallow-rs/fallow/commit/b006fb79cf1e6b80608532b80cdf290a9d9baad3"
        },
        "date": 1782594334483,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10640305,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58612,
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
          "id": "5a664dea3888b76e535b83f46b4ab2b4d4cf0f49",
          "message": "feat(coverage): mirror cloud trust-output contract on local analyze report (#1646)\n\n* feat(coverage): mirror cloud trust-output contract on local analyze report (#316, #319)\n\n`coverage analyze` now emits the cloud runtime-context trust-output shape on the local report: actionable + actionability_reason + actionability_verdict (#316, a capture with no tracked functions is non-actionable with a first-class insufficient_evidence verdict, never read as cold) and a provenance block (#319: data_source, is_production 'unknown' locally, freshness_days, untracked_ratio, unresolved_ratio, stale, stale_after_days 14 mirrored from the cloud RUNTIME_STALE_AFTER_DAYS).\n\nF4: actionable is a non-action floor and provenance is context only; neither gates a positive verdict or confidence. The cloud-join path (analyze --cloud) carries the same shape; full cloud-provenance pass-through is #328. Additive (only the JSON format surfaces the block; 2 snapshots updated). fallow-rs/fallow-cloud#316 fallow-rs/fallow-cloud#319\n\n* chore(schema): regenerate output-schema for runtime-coverage provenance/actionable (#316, #319)\n\nThe new RuntimeCoverageProvenance struct + actionable/provenance report fields changed the derived JsonSchema; regenerate the committed docs/output-schema.json so the schema_emit drift tests pass. Additive only.",
          "timestamp": "2026-06-27T23:27:47+02:00",
          "tree_id": "4a134cb6d61be100c26b2f3907c296dc54b08da4",
          "url": "https://github.com/fallow-rs/fallow/commit/5a664dea3888b76e535b83f46b4ab2b4d4cf0f49"
        },
        "date": 1782595937153,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10631257,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58598,
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
          "id": "f8eb3dd6a2103fdcd20f210957ed7a0d4ff8914b",
          "message": "refactor: consolidate engine api and output contracts\n\nSplit the architecture into explicit engine, output, API, and programmatic CLI boundaries so CLI rendering is no longer the implicit API surface. Typed engine results now feed CLI, LSP, NAPI, MCP, and programmatic consumers through shared contracts.\n\nMove output contracts out of CLI ownership, replace extraction sentinel protocols with typed semantic facts, unify issue metadata and cache fingerprints, and keep the graph cache behind stable FileId-aware keys. The final perf pass also removes an allocation from dupes identifier labeling.",
          "timestamp": "2026-06-28T07:30:51+02:00",
          "tree_id": "d9c5eb2f44852a326fc1c97da926f36b46b28d80",
          "url": "https://github.com/fallow-rs/fallow/commit/f8eb3dd6a2103fdcd20f210957ed7a0d4ff8914b"
        },
        "date": 1782624937640,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10590968,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58376,
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
          "id": "ac68a1a4e99d9ee38ff9198c519f438d172358d2",
          "message": "chore: release v2.103.0",
          "timestamp": "2026-06-28T08:34:02+02:00",
          "tree_id": "790514ee70408a663a30317868d06140ab2ba051",
          "url": "https://github.com/fallow-rs/fallow/commit/ac68a1a4e99d9ee38ff9198c519f438d172358d2"
        },
        "date": 1782628740967,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10566809,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58414,
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
          "id": "e28929f58d96b190038826bce07c38808cff4166",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.103.0",
          "timestamp": "2026-06-28T09:38:13+02:00",
          "tree_id": "9575d956e7f2887730990aedd3331d1ee44d733d",
          "url": "https://github.com/fallow-rs/fallow/commit/e28929f58d96b190038826bce07c38808cff4166"
        },
        "date": 1782632594040,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10602281,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58421,
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
          "id": "00f0814ca8d59228a2ff587a2ddaaaad524ceb6e",
          "message": "fix(config): resolve config passed as a named const to a wrapper call\n\n`find_config_object` (the shared resolver behind every config-parsing plugin) resolved a bare `export default config` identifier but not a config passed as an identifier argument to a wrapper call: `export default withMDX(nextConfig)` (the official @next/mdx docs idiom), `module.exports = createJestConfig(customConfig)`, nested `withMDX(withFoo(nextConfig))`, and curried `compose(...)(nextConfig)` all resolved to nothing, so the Next.js plugin never saw `pageExtensions` and App Router `page.mdx` pages were reported as unused-files.\n\n`resolve_wrapped_config_object` follows a wrapper call's argument (through nested wrapper calls and TS `satisfies`/`as`) to its local `const NAME = {...}`, wired as a fallback in both the default-export and `module.exports` paths. Already-resolving shapes are unchanged; byte-identical issue counts on all eight benchmark fixtures. On leerob.io (exact idiom) the fix removes all 4 App Router `page.mdx` false positives and adds nothing.\n\nFixes #1642.",
          "timestamp": "2026-06-28T15:32:16+02:00",
          "tree_id": "1a7774334197fb53b43f93881c1202b1b506e1a1",
          "url": "https://github.com/fallow-rs/fallow/commit/00f0814ca8d59228a2ff587a2ddaaaad524ceb6e"
        },
        "date": 1782653874101,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10614385,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58438,
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
          "id": "7226852618979a43dbceeb860ca3bacc8369e7a5",
          "message": "perf(graph): cache dunce::canonicalize results during import resolution\n\nImport classification realpath's every specifier that resolves to a\nnode_modules / output-dir / symlinked target (the non-raw-map hits in\nResolvedPathContext::resolve), and the same package path is\nre-canonicalized once per file that imports the package. canonicalize\nis a pure function of the path's on-disk state, constant within a run.\n\nAdd a session-local CanonicalizeCache on ResolveContext keyed by input\npath (created fresh per resolve_all_imports call, so watch-mode rebuilds\nsee filesystem changes). Cuts the resolve-imports stage ~5% on a large\nmonorepo; the realpath/canonicalize syscalls also dominate the resolver\nFS traffic that the resolve-bound health command pays. Output is\nbyte-identical.",
          "timestamp": "2026-06-28T23:40:46+02:00",
          "tree_id": "9ab4ad01fba8f73b295e5017f61a4298818fbd16",
          "url": "https://github.com/fallow-rs/fallow/commit/7226852618979a43dbceeb860ca3bacc8369e7a5"
        },
        "date": 1782683075619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10598393,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58418,
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
          "id": "226f80498eaa9aa7159cb8181709c7b59245a1f3",
          "message": "perf(core): scope public-API entry-point canonicalization to the entry's package\n\npublic_api_package_entry_points built a path->FileId index that\ncanonicalized every module up front (one realpath syscall per module,\n~21k on a large monorepo) so an entry point expressed in a module's\ncanonical form could be matched. That eager sweep is almost entirely\nwasted: the consumer already canonicalizes the ENTRY and matches it\nagainst raw module paths, which covers every project with no\nintra-project symlinks.\n\nBuild the index from raw module paths only, and handle the residual\nsymlinked-module case lazily and package-scoped: on a miss, canonicalize\nonly the modules under the entry's own package_root. A fruitless miss\n(e.g. a bin script that is not a discovered module) is now bounded by\nthat package's file count instead of canonicalizing the whole graph.\n\nCuts the analyze stage ~30% (~280ms) on a 21k-file monorepo, and the\nremoved realpath storm also stabilizes the stage's run-to-run variance.\nOutput is byte-identical.",
          "timestamp": "2026-06-29T09:45:45+02:00",
          "tree_id": "f5c49bda62dfa1a6ad737d409281f799b3237416",
          "url": "https://github.com/fallow-rs/fallow/commit/226f80498eaa9aa7159cb8181709c7b59245a1f3"
        },
        "date": 1782719379414,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10565022,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58318,
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
          "id": "b294a60257e6900b0a209a2ffc0da38dd20ebcc0",
          "message": "chore: mark fallow-programmatic-cli publish = false to match release crate list",
          "timestamp": "2026-06-29T09:54:58+02:00",
          "tree_id": "d7af88fbd12ad06a63fd3d4ee2dfa4bd93809cf5",
          "url": "https://github.com/fallow-rs/fallow/commit/b294a60257e6900b0a209a2ffc0da38dd20ebcc0"
        },
        "date": 1782719933278,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10567534,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58322,
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
          "id": "4caf4a8dfd12600fe6f5d01d752d3917128faf51",
          "message": "test(core): pin scoped-canonical symlink fallback for public-API entry points\n\nExtract the matching core of resolve_entry_via_scoped_canonical into a\nModuleGraph-free helper (match_canonical_entry_under_package) and add a\nUnix-only tempdir+symlink unit test for the intra-project-symlink case\nthe fallback exists to handle: a module discovered through a symlinked\ndirectory whose raw path differs from the canonicalized entry path. The\ncommon no-symlink path is covered by the byte-identical integration\ncorpus; this pins the residual branch the raw-map lookup cannot reach,\nplus the package-root scoping and non-match negatives.",
          "timestamp": "2026-06-29T09:58:47+02:00",
          "tree_id": "0bb2821cebb0d91e1ad76767c82aaab0695e8e6f",
          "url": "https://github.com/fallow-rs/fallow/commit/4caf4a8dfd12600fe6f5d01d752d3917128faf51"
        },
        "date": 1782720153541,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10562126,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58316,
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
          "id": "4f5aabde8eda855175aee7c0e1dbd695f31e9923",
          "message": "test(release): guard crates.io publish list matches publishable workspace crates",
          "timestamp": "2026-06-29T10:19:37+02:00",
          "tree_id": "e545ffd666a6dc86ee5d9cc7f957f4e730cabff1",
          "url": "https://github.com/fallow-rs/fallow/commit/4f5aabde8eda855175aee7c0e1dbd695f31e9923"
        },
        "date": 1782721372817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10591294,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58314,
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
          "id": "a338591d631f24f0e14e108b19437a93e2179e4e",
          "message": "fix(members): credit framework-dispatched OpenLayers methods and coerced toString\n\nTwo `unused-class-members` false positives where the only use is not an explicit `instance.member()` call (split from #1441).\n\nGAP 1: a method OpenLayers invokes by convention on a subclass of an `ol/interaction/*` base (`handleEvent`, the `PointerInteraction` `handle*Event` / `stopDown` protocol) is credited via a heritage-scoped, import-source-verified built-in. A same-named local base does not credit; a genuinely-dead non-dispatched member still reports. Analyze-time only.\n\nGAP 2: a `toString` invoked only through string coercion (template-literal interpolation, `String(...)`, or `+` with a string sibling) is credited when `new Class()` flows directly into the coercion position. A tagged template (`html` / styled-components / `gql`) is NOT a coercion position and does not credit (an `in_tagged_template_quasi` guard, consumed per-quasi so a nested plain template still coerces). CACHE_VERSION bumped.\n\nFixes #1638.",
          "timestamp": "2026-06-29T10:57:22+02:00",
          "tree_id": "be9a162d693d208216b4e64dcb96d539ec15f428",
          "url": "https://github.com/fallow-rs/fallow/commit/a338591d631f24f0e14e108b19437a93e2179e4e"
        },
        "date": 1782723897386,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10585385,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58557,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "a64ff318455f77583bbe9d4805792fc5da7e2962",
          "message": "fix(telemetry): note find-state for security survivors and blind-spots\n\nThe security survivors and blind-spots subcommands emit a security workflow\ntelemetry event but never noted their find-state, so the process-global\nfindings-present accumulator stayed unset and findings_present serialized as\nnull. findings_present is the field that distinguishes found-candidates from\nerrored (security exits non-zero only on findings when the rule is raised to\nerror), so a null value lost that signal for these modes.\n\nrun_survivors now notes its retained (non-dismissed) candidate count and\nrun_blind_spots notes its unresolved-callee-site count before exit, matching the\ndefault, --file, and --gate paths. No change to the telemetry payload shape.\nFour neuter-verified regression tests assert findings_present is non-null per\nsubcommand.\n\nFixes #1650.",
          "timestamp": "2026-06-29T11:55:32+02:00",
          "tree_id": "3e35cb9e456b47f0693db84438926a4e688139ab",
          "url": "https://github.com/fallow-rs/fallow/commit/a64ff318455f77583bbe9d4805792fc5da7e2962"
        },
        "date": 1782727246252,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10618336,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58533,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "ae0214951c811db6eb71ff52ef0dbd4413a460b9",
          "message": "feat(config): exempt props via unusedComponentProps.ignorePattern (#1654)\n\nAdds an opt-in `unusedComponentProps: { ignorePattern: \"<regex>\" }` config section. The regex is matched against each declared component prop's local destructure binding name (e.g. `_stage`), exempting it from `unused-component-props`. Honors the leading-underscore \"accepted-but-intentionally-unused\" convention (Svelte 5 `$props()`, React destructure) mirroring TypeScript `noUnusedParameters` and ESLint `varsIgnorePattern` / `argsIgnorePattern`.\n\nApplies to all four arms sharing the `ComponentProp` IR (Vue, Svelte, Astro, React/Preact). Validated at config load (invalid regex fails load with exit 2), compiled defensively at resolve. Matching is unanchored, so users anchor with `^_`. A human-output note reports the exempted count. No `CACHE_VERSION` bump. Default behavior unchanged (opt-in only).\n\nFixes #1648.",
          "timestamp": "2026-06-29T12:36:17+02:00",
          "tree_id": "7b1f22d13dcc425a67d2b921a0f36ad30246f441",
          "url": "https://github.com/fallow-rs/fallow/commit/ae0214951c811db6eb71ff52ef0dbd4413a460b9"
        },
        "date": 1782729652188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10621953,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58565,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "59b20c7565930a5cb0df3e62a3e711941b1cde69",
          "message": "fix(telemetry): note find-state for flags/watch and guard the workflow class\n\nFollow-up to #1650. flags and watch emit a code_quality_review telemetry event\n(the same workflow as combined fallow, which populates findings_present) but\nnever noted their find-state, so findings_present serialized as null. flags now\nnotes its feature-flag count and watch notes each cycle's issue count.\n\nFocused dead-code/dupes trace and impact-closure views early-return before the\nnormal note; they still run the full analysis, so they now record its result\ncount. findings_present reflects what the analysis surfaced independent of the\noutput view.\n\nAdds a structural guard: an exhaustive Workflow::surfaces_findings()\nclassification (a new workflow variant fails to compile until classified) plus a\ndebug-build invariant at the single telemetry event-emission point that fails\nfast if a finding-surfacing workflow records a non-failing event without noting\nfind-state. The guard caught the dead-code and dupes trace-mode gaps during this\nchange. No change to the telemetry payload shape.\n\nRefs #1650.",
          "timestamp": "2026-06-29T13:01:42+02:00",
          "tree_id": "76e2940f8897c7b8bda5f8e293138ee89bb0cb44",
          "url": "https://github.com/fallow-rs/fallow/commit/59b20c7565930a5cb0df3e62a3e711941b1cde69"
        },
        "date": 1782731606310,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10584473,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58557,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "1fcfee6ad71b3bc70c16cabc59b5b6fa4d93123d",
          "message": "feat(review): runtime-weighted focus map + safe explicit-skip\n\nWhen `--runtime-coverage` is present, the weighted focus map (the `fallow\nreview` / `audit --brief` attention ranking) weights hot files by bucketed\ninvocation count so a hot path amplifies the blast and outranks an\notherwise-equal cold unit, and a unit the runtime proves cold (only\nsafe-to-delete findings, no hot path) that carries zero deterministic signal and\nno confidence flag earns the safe explicit-skip label. With no runtime input the\noutput is byte-identical to the existing deterministic focus map: the runtime\ncomponent is 0 and omitted from the wire, and no unit can reach the skip arm.\n\n- output: FocusLabel::Skip (runtime-backed only) + additive FocusScore.runtime\n- engine: RuntimeFocus on FocusInputs; score_unit adds the bucketed weight;\n  is_safe_skip gates on runtime-cold + zero static signal + no confidence flag\n- wiring: build_runtime_focus derives per-file hot/cold from the runtime-coverage\n  report; reconcile_runtime_focus (pure, unit-tested) does the mixed-verdict\n  exclusion + hot-excludes-cold + peak aggregation\n- docs/output-schema.json + the generated VS Code / npm type contracts\n  regenerated (FocusLabel gains skip, FocusScore gains runtime)\n\nHonest boundary: the runtime report's findings omit active functions, so a\nmid-traffic active function below the hot threshold is invisible to the cold\nsignal; hence safe-skip is gated on zero static risk + no confidence flag,\nscoped to diff files, and always advisory (kept in the escape-hatch list).",
          "timestamp": "2026-06-29T12:50:55Z",
          "tree_id": "2941ce7c1624b4a06c1a72af23f076d2d85ed4c7",
          "url": "https://github.com/fallow-rs/fallow/commit/1fcfee6ad71b3bc70c16cabc59b5b6fa4d93123d"
        },
        "date": 1782737687760,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10573649,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58538,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "19a5a58c8a5ce73b2928dd0a8ed2b7d7a6e3f15b",
          "message": "test(review): end-to-end runtime-weighted focus map coverage\n\nAdds a gated integration test driving real `fallow review --runtime-coverage`:\na signed stub sidecar reports a hot path on a changed module, and the test\nasserts the brief's focus map weights it (a `runtime` score component that\nlifts the file into `review-here`). A negative control runs the same repo\nwithout `--runtime-coverage` and asserts no `runtime` component and no `skip`\nlabel.\n\nCovers the seam the unit tests cannot reach on their own: that\n`--runtime-coverage` populates `result.health.report.runtime_coverage` and that\n`build_runtime_focus` joins it onto the focus map end-to-end. Gated behind the\n`test-sidecar-key` cargo feature (signed stub + minted license).",
          "timestamp": "2026-06-29T13:26:11Z",
          "tree_id": "83dd19a5d0c726271e84d53a33e105516eb9f4fc",
          "url": "https://github.com/fallow-rs/fallow/commit/19a5a58c8a5ce73b2928dd0a8ed2b7d7a6e3f15b"
        },
        "date": 1782739788888,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10626201,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58573,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "35bf033986a4d8bc2aea76d6fb52febf16202fb9",
          "message": "docs(test): target the binary in the runtime-focus e2e run command\n\nThe documented run command used a bare `runtime_focus` name filter, which\nmatches none of the test fn names (`review_runtime_coverage_*`) and so runs\nzero of the two tests. Use `--test audit_brief_runtime_focus_tests` instead.",
          "timestamp": "2026-06-29T14:14:28Z",
          "tree_id": "87278c037e32f028ed04c59953929fae4b7b6703",
          "url": "https://github.com/fallow-rs/fallow/commit/35bf033986a4d8bc2aea76d6fb52febf16202fb9"
        },
        "date": 1782742713173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10630377,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58576,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "4f87432ab0118d4ef65ee82dd2f0bdef0d80a85c",
          "message": "fix(review): correct --walkthrough rendered output\n\nFollow-up to #1657. Smoke-testing the walkthrough on a real multi-file\ndiff surfaced rendered-output bugs (the data and plumbing were fine):\n\n- counts: the Review Focus header, the status line, and the real changed\n  set now reconcile (staged + cleared + excluded == changed), with the\n  breakdown shown instead of three disagreeing totals.\n- non-source files (migrations, lockfiles, config) are surfaced as an\n  honest \"N non-source not reviewed\" bucket instead of silently dropped.\n- a de-prioritized or --mark-viewed file now collapses out of its stage\n  and appears only under Cleared (each file in exactly one place).\n- Stage-1 guidance is no longer truncated mid-word; the trailing\n  coordination question survives and only the contract-member list caps\n  to N + \"+M more\".\n- markdown no longer re-prints the path or emits escaped backticks.\n- dropped the contradictory raw \"(score N)\"; the visible fact carries\n  the ordering signal.\n\nThe fact, accounting, and membership logic is shared in a new\nfallow-output::walkthrough_render module so the human and markdown\nsurfaces stay consistent by construction. The --walkthrough-guide and\n--walkthrough-file JSON contracts and the review exit-0 invariant are\nuntouched: --walkthrough --format json stays byte-identical to\n--walkthrough-guide.",
          "timestamp": "2026-06-29T16:50:54+02:00",
          "tree_id": "286331f9188607b44c2dc9667e02a752cebbd806",
          "url": "https://github.com/fallow-rs/fallow/commit/4f87432ab0118d4ef65ee82dd2f0bdef0d80a85c"
        },
        "date": 1782744889805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10604377,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58543,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "bab6c6815925776b36ddccb503ea8bd73e9daba6",
          "message": "fix(review): make --walkthrough output release-clean\n\nFollow-up to #1660. A tidiness pass on the walkthrough renderer:\n\n- ordering: each stage now orders by the concrete count it displays, so\n  position is explained by a visible number. Stage 1 by out-of-diff\n  consumer count (\"consumed by N modules\"); Stage 2 by fan-in importer\n  count, then fan-out. The most-imported file leads Stage 2 instead of\n  sitting mid-list, and no abstract score/connectedness number is shown.\n- markdown now honors --mark-viewed: viewed files collapse out of their\n  stage into Cleared in markdown too (was silently ignored), matching the\n  human surface.\n- the status line reports the number of stages actually rendered (was a\n  hardcoded \"2 stages\" that could lie when a stage was empty).\n- removed em-dashes from the rendered output (headers and list\n  separators) for one consistent separator vocabulary.\n\nRender-surface and sort-order only: --walkthrough --format json stays\nbyte-identical to --walkthrough-guide, and the review exit-0 invariant is\nuntouched.",
          "timestamp": "2026-06-29T18:44:52+02:00",
          "tree_id": "7763038eecab77495314b931d2a072315b509489",
          "url": "https://github.com/fallow-rs/fallow/commit/bab6c6815925776b36ddccb503ea8bd73e9daba6"
        },
        "date": 1782751710451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10579977,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58549,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "309059d83fa1302f18488cd06726af84538bcac6",
          "message": "feat(health): confidence-gate the styling-health grade on sparse CSS\n\nAdd a descriptive confidence marker to the styling-health CSS-quality grade so a grade computed from a thin authored-CSS surface is not read with the same weight as one from a full design system (CSS program roadmap Phase 1). Descriptive-only: no exit-code, badge, gating, or code-score effect.\n\nStylingHealth gains confidence (high/low) and confidence_reason; low when total_declarations is below 50, where the declaration-normalized penalty ratios are hypersensitive. Score, grade, penalties, and STYLING_HEALTH_FORMULA_VERSION are byte-identical. Human output dims a low-confidence grade (prefixed ~) with a plain-text caveat; the JSON field is additive (schema + both TS contracts regenerated). The v2 rubric was re-validated against a 10-project corpus and left unchanged.",
          "timestamp": "2026-06-29T19:44:03+02:00",
          "tree_id": "fa620d70e56cf122261ec1a3ecdacf5d0bd95ff4",
          "url": "https://github.com/fallow-rs/fallow/commit/309059d83fa1302f18488cd06726af84538bcac6"
        },
        "date": 1782755501065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10582001,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58553,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "716522dbb4270242ee5d82b592bad536178e135e",
          "message": "feat(coverage): emit per-function complexity and per-file churn in inventory upload (#1663)\n\nv2 inventory payload with optional per-function cyclomatic/cognitive and a top-level per-file churn map (commits, weightedCommits, linesAdded/Deleted, trend, authorCount=distinct git authors, lastCommitTs). All fields optional, backward compatible. CodSpeed's single flagged regression is a cross-environment measurement artifact on a cache-hit benchmark that does not touch the changed code.",
          "timestamp": "2026-06-29T22:02:41+02:00",
          "tree_id": "eeeb979be30d0ed5fe1a8eb7dd26a984639b7711",
          "url": "https://github.com/fallow-rs/fallow/commit/716522dbb4270242ee5d82b592bad536178e135e"
        },
        "date": 1782763579451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10625817,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58571,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "d5eb3efa80660d0798bd8f19861bfd02e8485b88",
          "message": "feat(health): emit token_consumers blast-radius in CSS health JSON\n\nfallow health --css --format json now carries css_analytics.token_consumers: per Tailwind v4 @theme token, the defining site + a consumer_count + a capped located consumers sample tagged theme-var/css-var/utility/apply, so an agent can read a token's blast radius before changing it (CSS program roadmap Phase 2, first slice).\n\nAdditive reverse index keyed on the same gated candidate set as the unused-theme-token scan (which is byte-unchanged); descriptive-only (no actions array, the dead-token action stays on unused_theme_tokens); consumer_count is a static lower bound. Engine-local data, no CACHE_VERSION bump; plain non-css health JSON byte-unchanged, no schema_version bump. Token VALUES/drift and the get_token_blast_radius MCP tool are out of scope (later phases).",
          "timestamp": "2026-06-29T22:11:40+02:00",
          "tree_id": "449c8f2233e6b64f444710f3d8125f49184fe80c",
          "url": "https://github.com/fallow-rs/fallow/commit/d5eb3efa80660d0798bd8f19861bfd02e8485b88"
        },
        "date": 1782764483625,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10590345,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58567,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "857111c3427c83917374ddcbc3dac8f920a2680b",
          "message": "fix(coverage): read cloud stable_id as snake_case on runtime-context (#1666)\n\nThe runtime-context response serializes CloudRuntimeFunction fields snake_case; the consumer renamed only stable_id to camelCase stableId, so the cross-surface join key always deserialized to None. Drop the rename (and on the blast/importance entry structs) so stable_id is read like every sibling field.",
          "timestamp": "2026-06-29T20:35:10Z",
          "tree_id": "1cd96711a96d3b163aa7ff8c64539ff79f058ce9",
          "url": "https://github.com/fallow-rs/fallow/commit/857111c3427c83917374ddcbc3dac8f920a2680b"
        },
        "date": 1782765521238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10630673,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58585,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "5b6693dce5e4b83ad329cadef849600d297f48d7",
          "message": "feat(mcp): add get_token_blast_radius tool wrapping token_consumers\n\nA focused read-only MCP tool that runs fallow health --css --format json and steers agents to css_analytics.token_consumers (the Tailwind v4 token blast-radius reverse index), so an agent can query a token's blast radius directly without setting css=true on check_health. Per @theme token: defining site + consumer_count + a capped located consumers sample tagged theme-var/css-var/utility/apply.\n\nMirrors the get_blast_radius health-slice pattern: minimal params (root/config/no_cache/threads, no coverage/scope flags since token_consumers abstains on partial scope), --css forced, telemetry-tagged dispatch, registered in code_mode + mcp_manifest (kind analysis, license Free, read_only), annotated read_only/idempotent/open_world_hint=false. A scoping aid, not a deletion gate (the dead-token verdict stays on unused_theme_tokens). No CLI flag, no JSON schema change.",
          "timestamp": "2026-06-29T22:40:57+02:00",
          "tree_id": "091785874a4a086c5349fff87d91c2c2a81b468a",
          "url": "https://github.com/fallow-rs/fallow/commit/5b6693dce5e4b83ad329cadef849600d297f48d7"
        },
        "date": 1782765829056,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10620273,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58559,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "ce3c76b0cea9e091b8471c63f7cc0e992a14b806",
          "message": "feat(health): CSS-in-JS first-class in styling analytics (CSS program Phase 3)\n\nCSS program Phase 3: make CSS-in-JS a first-class citizen of fallow's CSS analytics.\n\n3a: characterizes that styled-components / emotion / vanilla-extract styled bindings are ordinary value exports already covered by unused-export, and the libraries are credited via their value imports (no new detection code, dep gate, or IssueKind). Adds a fixture, a no-regression integration test, and a detection.md entry.\n\n3b: adds css_in_js_virtual_stylesheet, a lexical lifter (the tagged-template analogue of sfc_virtual_stylesheet) that lifts styled/css/keyframes template-literal CSS into a blank-line-padded virtual stylesheet, masking interpolations to a CSS-valid placeholder, so compute_css_analytics + styling-health analyze CSS-in-JS like a .css file. The engine admits a JS/TS arm in the CSS walk (CssScanKind::CssInJs) dep-gated on project_uses_css_in_js, so a non-CSS-in-JS project never scans JS/TS files. Template-literal form only; health-time-only over source (no CACHE_VERSION bump, no new wire field); styling-health stays descriptive-only.",
          "timestamp": "2026-06-30T08:04:26+02:00",
          "tree_id": "1d901e0018d491d65a5bb49238c895a4dcaf7619",
          "url": "https://github.com/fallow-rs/fallow/commit/ce3c76b0cea9e091b8471c63f7cc0e992a14b806"
        },
        "date": 1782800010101,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10621857,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58566,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "a4d52c9b662e50826c20bab87cfffc680bce83a0",
          "message": "feat(dupes): CSS-aware value canonicalization for fuzzy CSS clones (CSS program Phase 4)\n\nCSS program Phase 4. Adds CSS value canonicalization to the duplicate-detection lexical tokenizer's style path (zero-unit collapse 0px/0em/0% -> 0, hex-color expansion #fff -> #ffffff, #abcd -> #aabbccdd) so the SA-IS clone engine catches near-miss / value-drifted CSS clones. Gated on a css flag set true only on the style path; JS/TS go through the oxc AST extractor and are unchanged. DUPES_CACHE_VERSION bumped 8 to 9. Validated zero false matches on the astro repo.",
          "timestamp": "2026-06-30T08:24:17+02:00",
          "tree_id": "1ccee5742017a243e957bb28da30172435148685",
          "url": "https://github.com/fallow-rs/fallow/commit/a4d52c9b662e50826c20bab87cfffc680bce83a0"
        },
        "date": 1782800938160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10593081,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58565,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "8b0796b923954b049210e16f7b61713edaee8a33",
          "message": "feat(health): object-notation CSS-in-JS in styling analytics (CSS program Phase 3c) (#1671)\n\n* feat(health): object-notation CSS-in-JS in styling analytics (CSS program Phase 3c)\n\nAdd an AST object->CSS serializer that lifts object-notation CSS-in-JS\n(vanilla-extract style({...})/globalStyle/styleVariants/recipe, emotion\ncss({...})/styled.div({...}), Panda css({...})/cva({...}), StyleX\nstylex.create({...})) into the same virtual-stylesheet -> compute_css_analytics\n+ styling-health pipeline that the Phase 3b template-literal lifter feeds. Both\nforms now converge on one pipeline.\n\nHealth-time only (no CACHE_VERSION bump); dep-gated via project_uses_css_in_js\nplus per-call import-binding provenance, so a project with none of the object\ndeps is byte-identical and a same-named local style/css or an unrelated cva\nnever fires. Static values only (camelCase->kebab, implicit-px + unitless list,\none-level nesting); dynamic/spread/computed-key values are dropped, never\nguessed.\n\nFlat-by-construction atomic CSS (StyleX/Panda) is excluded from the\nstyling-health structural penalty inputs and from duplicate-block\nfingerprints, and a predominantly-atomic project is marked low-confidence with\na stated reason, so atomic CSS-in-JS never inflates the grade. Token-sprawl and\nduplicate-block findings are fed for all object libraries. Every\ndeclaration-normalized penalty (duplication, dead-surface, structural) and the\nconfidence trigger read the non-atomic declaration count so atomic CSS cannot\ndilute them. Descriptive-only; styling-health never gates an exit code or badge.\n\n* fix(health): address 3c review (aliased imports, numeric literals, docs)\n\nReview fixes for CSS program Phase 3c:\n- Recognize aliased named imports (import { style as s }) by dispatching on the\n  canonical imported name, not the local alias (rust-reviewer: silent miss).\n- Render numeric literals from their parsed value, so a hex / scientific literal\n  (0xFF, 1e3) becomes valid CSS (255, 1000) instead of a non-CSS token.\n- kebab-case the lowercase ms vendor prefix to -ms- (msFlexAlign -> -ms-flex-align).\n- Count files_analyzed once per source file, not once per lifted virtual sheet,\n  so the count stays 1:1 with files (cli-output-reviewer).\n- Update the StylingHealth confidence / CssAnalyticsSummary docs to cover the new\n  predominantly-atomic low-confidence trigger and object-form sheets, and gate on\n  confidence (not total_declarations, which now includes excluded atomic\n  declarations); regenerate output-schema.json + the TS contracts (json-output\n  -reviewer: the published rule was stale and drift-gated).\n\n* docs(detection): record object-notation CSS-in-JS (Phase 3c)\n\nAdd the Phase 3c detection bullet and the css_in_js_object.rs extract-crate entry.\n\n* chore(clippy): unblock pre-existing too_many_lines expectation on the 3b CSS-in-JS test\n\nmain was already red on this unfulfilled #[expect(clippy::too_many_lines)] (the 3b test body sits on the 100-line threshold, so the lint is clippy-version dependent). Switch to #[allow] per the project convention for boundary pedantic lints, so 3c can ship with clippy --all-targets green.\n\n* docs(detection): fix stale css_report_stylesheet_source ref in the 3b bullet\n\nThe 3c walk refactor renamed css_report_stylesheet_source to css_report_scan_items; update the Phase 3b detection bullet to match (fallow-review finding).",
          "timestamp": "2026-06-30T11:22:58+02:00",
          "tree_id": "bdd972b78feea6bf865d9b81e48a12cf1ccbd3ae",
          "url": "https://github.com/fallow-rs/fallow/commit/8b0796b923954b049210e16f7b61713edaee8a33"
        },
        "date": 1782811788952,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10586641,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58553,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "5c72d26939cd6f21847c0897de42f81873842184",
          "message": "fix(health): no implicit px on custom-property values in object CSS-in-JS (#1672)\n\nThe object serializer applied implicit-px to numeric custom-property values\n(`--space: 8` -> `--space:8px`), fabricating a unit the bundler never emits.\nEmotion's own serializer guards px with `!isCustomProperty(key)`\n(@emotion/serialize) and React does the same, so a numeric `--x` value stays\nunitless. Skip implicit px for `--*` properties so the lifted CSS matches the\nreal compiled output. Found while smoke-testing the emotion site's\n`<Global>` custom-property block on real public projects.",
          "timestamp": "2026-06-30T12:33:40+02:00",
          "tree_id": "7457c935790576edb2b4f119f6072c43a2d65a9c",
          "url": "https://github.com/fallow-rs/fallow/commit/5c72d26939cd6f21847c0897de42f81873842184"
        },
        "date": 1782816173786,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10589121,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58564,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "fbe60a8d3c7117421605c3b87476b8c302e77f92",
          "message": "fix(review): clearer wording for contract-change decisions\n\nThe contract-change decision read as a wall of one repeated, awkward\nsentence on every flagged file (\"...consumed by N modules NOT in this\ndiff. Coordinate the change, or is the contract stable?\").\n\n- Reword the decision question (decision surface, shared with the brief\n  and the JSON): plain \"changes exports (...) imported by N files outside\n  this PR\" instead of \"consumed by N modules NOT in this diff\", and a\n  single open question \"Does this change break or alter what those callers\n  expect?\" instead of the imperative-plus-question hybrid.\n- In the guided tour, the per-file line now shows just the observation:\n  the section header frames the action once, and the open question stays\n  in the decisions brief and the JSON (where each decision stands alone),\n  so the rows read as distinct facts rather than a repeated sentence.\n\nRender-surface plus decision-question wording only. The `question` text is\nfree-text framing (deterministic: false); the guide/brief/JSON schema and\nthe agent contract are unchanged, and --walkthrough --format json stays\nbyte-identical to --walkthrough-guide.",
          "timestamp": "2026-06-30T14:26:22+02:00",
          "tree_id": "09f06dc2ba8ffeeab1e731ac99d930862d5f9fd0",
          "url": "https://github.com/fallow-rs/fallow/commit/fbe60a8d3c7117421605c3b87476b8c302e77f92"
        },
        "date": 1782822568551,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10616985,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58560,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "8c43ab02152b157973694b61ad627cdc5816c126",
          "message": "feat(health): weight styling-health toward CSS value drift over exact repetition (formula v3) (#1674)\n\nDown-weights the styling-health `duplication` exact-block penalty (200 -> 80, soft hint, 20pt cap kept) and adds a var()-blind hardcoded-value-sprawl drift sub-term to `token_erosion` (distinct unique_box_shadows/border_radii/line_heights above per-axis baselines 10/8/6, saturating, 5pt sub-cap inside the unchanged 10pt cap). STYLING_HEALTH_FORMULA_VERSION 2 -> 3. Descriptive-only; no wire field; no CACHE_VERSION bump. Corpus-locked: no band misclassification. Reviewed via /panel-review (NARROW) + rust-reviewer + cli-output-reviewer.",
          "timestamp": "2026-06-30T14:34:24+02:00",
          "tree_id": "a1d791fab2fa8e426bca2f525fbd31bd2c1a321a",
          "url": "https://github.com/fallow-rs/fallow/commit/8c43ab02152b157973694b61ad627cdc5816c126"
        },
        "date": 1782823113171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10591145,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58566,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "1ecf9d859f92801d61e3704fe24278307bbf75b4",
          "message": "feat(coverage): add --with-callers to upload importer edges (#1675)\n\n`fallow coverage upload-inventory --with-callers` builds the import graph and\nuploads importer edges (which files import each function), keyed by the callee\nfunction's stable_id, so the cloud can show change-time blast radius for a\nfunction an agent is about to edit. Each edge is an importer file plus the\nsymbol names it imports; import-edge granularity, not a file:line call-site.\n\nOpt-in by design: building the graph runs the full static analysis, whereas the\ndefault upload stays a fast per-file walk and the existing wire shape. The graph\nis cached, so a CI step that already ran analysis pays little extra.\nBest-effort: a graph-build failure still ships the inventory.\n\nThe symbol-to-function attribution is a pure, unit-tested step; the payload\nfield is omitted entirely unless edges are present, so the default upload is\nbyte-unchanged.",
          "timestamp": "2026-06-30T15:07:26+02:00",
          "tree_id": "736f98af054702faf1bc851cc51ec9f5e860ae97",
          "url": "https://github.com/fallow-rs/fallow/commit/1ecf9d859f92801d61e3704fe24278307bbf75b4"
        },
        "date": 1782827056356,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10581193,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58553,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "686b8034bf7e807c4d4761e24de1123648abed0c",
          "message": "fix(review): grammar + tighter wording for walkthrough decision facts\n\nSmoke-testing the contract-change wording surfaced two nits:\n\n- Singular/plural: a single changed export rendered \"changes exports\n  (createBeaconLifecycle)\". Pluralize the noun by symbol count, so one\n  export reads \"changes export (X)\" and several read \"changes exports (...)\".\n- The consolidated public-API-surface question carried a generic filler\n  sentence (\"These become maintained contracts.\") that, with the question\n  dropped in the tour, left a wordy two-sentence fact. Fold it into the\n  question (\"This change adds N exports to the public API surface. Intended\n  as maintained contracts, or should they stay internal?\"), so the tour\n  fact is one clean sentence.\n\nVerified the coordination (singular + plural) and boundary facts on real\nand synthetic diffs; added a unit test pinning the public-API-surface tour\nfact. Decision-question wording only; the schemas and the agent contract\nare unchanged.",
          "timestamp": "2026-06-30T15:46:02+02:00",
          "tree_id": "056f4535ece3cfc61893d3f20bd590ba44d286b9",
          "url": "https://github.com/fallow-rs/fallow/commit/686b8034bf7e807c4d4761e24de1123648abed0c"
        },
        "date": 1782828585503,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10632481,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58581,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
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
          "id": "903d6f95d9b937daa623a3dab396ef113bfeca03",
          "message": "chore(deps): bump oxc_resolver from 11.21.0 to 11.21.3 in the oxc group (#1693)\n\nBumps the oxc group with 1 update: [oxc_resolver](https://github.com/oxc-project/oxc-resolver).\n\n\nUpdates `oxc_resolver` from 11.21.0 to 11.21.3\n- [Release notes](https://github.com/oxc-project/oxc-resolver/releases)\n- [Changelog](https://github.com/oxc-project/oxc-resolver/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc-resolver/compare/v11.21.0...v11.21.3)\n\n---\nupdated-dependencies:\n- dependency-name: oxc_resolver\n  dependency-version: 11.21.3\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: oxc\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-30T14:14:25Z",
          "tree_id": "adf8ef90b20f813988b74b429eb0139d6f34f48c",
          "url": "https://github.com/fallow-rs/fallow/commit/903d6f95d9b937daa623a3dab396ef113bfeca03"
        },
        "date": 1782829361925,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10440020,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58478,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
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
          "id": "f4b0b190cc69209073f30568bc8da23970a154d5",
          "message": "chore(deps): bump criterion2 from 3.0.3 to 3.0.4 (#1697)\n\nBumps [criterion2](https://github.com/Boshen/criterion2.rs) from 3.0.3 to 3.0.4.\n- [Release notes](https://github.com/Boshen/criterion2.rs/releases)\n- [Changelog](https://github.com/Boshen/criterion2.rs/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/Boshen/criterion2.rs/commits/v3.0.4)\n\n---\nupdated-dependencies:\n- dependency-name: criterion2\n  dependency-version: 3.0.4\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-30T14:51:30Z",
          "tree_id": "91e34f364eca3799e5b2a81cfa6a9465d060b7b2",
          "url": "https://github.com/fallow-rs/fallow/commit/f4b0b190cc69209073f30568bc8da23970a154d5"
        },
        "date": 1782831626893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10435820,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58466,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
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
          "id": "6325aee5c0d3247d047f7759252dfd70f8ff6a44",
          "message": "chore(deps): bump napi from 3.9.2 to 3.9.3 (#1696)\n\nBumps [napi](https://github.com/napi-rs/napi-rs) from 3.9.2 to 3.9.3.\n- [Release notes](https://github.com/napi-rs/napi-rs/releases)\n- [Commits](https://github.com/napi-rs/napi-rs/compare/napi-v3.9.2...napi-v3.9.3)\n\n---\nupdated-dependencies:\n- dependency-name: napi\n  dependency-version: 3.9.3\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-30T15:08:50Z",
          "tree_id": "3671adc5d6fd6bf2a20e36eebe4af27e3407a6a3",
          "url": "https://github.com/fallow-rs/fallow/commit/6325aee5c0d3247d047f7759252dfd70f8ff6a44"
        },
        "date": 1782832424594,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10421092,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58447,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
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
          "id": "16d44a1e5b65cbeb799506a730378bc8a57eab72",
          "message": "chore(deps): bump rmcp from 1.7.0 to 1.8.0 (#1698)\n\nBumps [rmcp](https://github.com/modelcontextprotocol/rust-sdk) from 1.7.0 to 1.8.0.\n- [Release notes](https://github.com/modelcontextprotocol/rust-sdk/releases)\n- [Changelog](https://github.com/modelcontextprotocol/rust-sdk/blob/main/release-plz.toml)\n- [Commits](https://github.com/modelcontextprotocol/rust-sdk/compare/rmcp-v1.7.0...rmcp-v1.8.0)\n\n---\nupdated-dependencies:\n- dependency-name: rmcp\n  dependency-version: 1.8.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-30T15:19:25Z",
          "tree_id": "8dc10699be2e6a40f02b4b5d7028debd76a0877a",
          "url": "https://github.com/fallow-rs/fallow/commit/16d44a1e5b65cbeb799506a730378bc8a57eab72"
        },
        "date": 1782833032643,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10404588,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58464,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "0408c5a174382529d2e6bbec391f3055bcec02bb",
          "message": "feat(css): design-token blast-radius for CSS-in-JS token definitions (Phase 3d) (#1701)\n\nExtend css_analytics.token_consumers + the get_token_blast_radius MCP tool from Tailwind v4 @theme tokens to CSS-in-JS token definitions (StyleX defineVars, vanilla-extract createTheme family). Descriptive-only, dep-gated, additive ConsumerKind::JsMember, no new wire field, no CACHE_VERSION bump. Panda deferred to 3e.",
          "timestamp": "2026-06-30T17:45:49+02:00",
          "tree_id": "ceea2a353cebb35511e90238997969a9e414cfd0",
          "url": "https://github.com/fallow-rs/fallow/commit/0408c5a174382529d2e6bbec391f3055bcec02bb"
        },
        "date": 1782834603799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10433628,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58464,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "7ec9a8b187f1e2c986430ca49c7caa55355f3fd6",
          "message": "refactor(extract): consolidate CSS-in-JS front-ends into a css_in_js/ module\n\nConsolidate the three flat CSS-in-JS files (template lexer 3b, object serializer 3c, token graph 3d, ~2300 lines) into a css_in_js/ module dir (template.rs / object.rs / tokens.rs / shared.rs / mod.rs). shared.rs single-sources the count_newlines helper and the WRAPPER synthetic selector both front-ends emit. Behavior-preserving: the public API and every downstream import path are unchanged (mod.rs re-exports what lib.rs re-exports). No logic change; reviewed by two rust-reviewer agents (APPROVE); full workspace test + clippy + fmt green.",
          "timestamp": "2026-07-01T09:48:09+02:00",
          "tree_id": "112f9ed9b1d704f4666a66cb8cf8469d1e7ec02c",
          "url": "https://github.com/fallow-rs/fallow/commit/7ec9a8b187f1e2c986430ca49c7caa55355f3fd6"
        },
        "date": 1782892762267,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10439700,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58473,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "f25b68582fe93aecdb676ef777db0ab3c77b5004",
          "message": "perf(audit): skip clean-tree worktree sweep\n\nMove reusable audit worktree cleanup after changed-file discovery so clean-tree audit exits without listing or pruning base worktrees. Changed-code audit still sweeps before any base snapshot work, preserving stale worktree cleanup for real analysis runs.\n\nThis keeps the no-change fast path focused on base-ref resolution and changed-file detection while leaving new-only attribution and base snapshot behavior unchanged. It also tightens architecture boundary comments that still referenced compatibility adapters.",
          "timestamp": "2026-07-01T10:22:20+02:00",
          "tree_id": "2f08a36acf11283f2fdd35bef12581e2e885771c",
          "url": "https://github.com/fallow-rs/fallow/commit/f25b68582fe93aecdb676ef777db0ab3c77b5004"
        },
        "date": 1782894503927,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10420724,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58445,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "8b1d50f565587a84801a00db9b8d006e12e7455c",
          "message": "refactor(css): tighten CSS-in-JS object lifter internals\n\n- sanitize_selector strips `;` (not just `{`/`}`) so an adversarial\n  globalStyle selector cannot split a declaration in the virtual stylesheet.\n- Lib + module_library are pub(super): used only within css_in_js/, no crate\n  public-API surface.\n- add a coexistence test: Panda `cva` and class-variance-authority `cva` under\n  distinct local aliases in one file (only Panda's base serializes).",
          "timestamp": "2026-07-01T10:59:57+02:00",
          "tree_id": "12896870ab600cfb3ae5c887cab62131831240b2",
          "url": "https://github.com/fallow-rs/fallow/commit/8b1d50f565587a84801a00db9b8d006e12e7455c"
        },
        "date": 1782896633580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10388948,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58447,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "b6435a03598e019253b410a783a0bc062d3794da",
          "message": "docs(extract): unlink private submodules in css_in_js module doc (#1705)\n\nThe css_in_js module doc linked to its private submodules via intra-doc\nlinks ([`template`], [`object`], [`tokens`], [`shared`]). Since css_in_js\nis `pub mod`, rustdoc's private_intra_doc_links lint fired under the\nDocumentation job's RUSTDOCFLAGS=-D warnings, breaking 'cargo doc\n--workspace --document-private-items' on main and blocking every Rust PR.\n\nReference the private front-end modules as inline code instead of links.\nVerified: RUSTDOCFLAGS='-D warnings' cargo doc --workspace --no-deps\n--document-private-items now exits 0.",
          "timestamp": "2026-07-01T09:08:38Z",
          "tree_id": "d69afa8add5107c5fc40825ff9408ea7269fbab7",
          "url": "https://github.com/fallow-rs/fallow/commit/b6435a03598e019253b410a783a0bc062d3794da"
        },
        "date": 1782897134279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10390580,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58444,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
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
          "id": "16d7934f39e7cb96d0e29f906b251fb621af3d18",
          "message": "chore(deps): bump syn from 2.0.117 to 2.0.118 (#1695)\n\nBumps [syn](https://github.com/dtolnay/syn) from 2.0.117 to 2.0.118.\n- [Release notes](https://github.com/dtolnay/syn/releases)\n- [Commits](https://github.com/dtolnay/syn/compare/2.0.117...2.0.118)\n\n---\nupdated-dependencies:\n- dependency-name: syn\n  dependency-version: 2.0.118\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-01T09:28:01Z",
          "tree_id": "b0ad8450f64e5721e60464435e5404e2bb75001c",
          "url": "https://github.com/fallow-rs/fallow/commit/16d7934f39e7cb96d0e29f906b251fb621af3d18"
        },
        "date": 1782898352268,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10423220,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58448,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "335218664154eee1ba9df187cd6651c0e20f8abb",
          "message": "chore(license): drop redundant ed25519-dalek dev-dependency\n\nThe dev-dependency duplicated the normal dependency, which already\nprovides ed25519-dalek. Tests use only core APIs (SigningKey::from_bytes,\nsign, verifying_key) available with the std feature, so the extra dev\nentry was unnecessary.",
          "timestamp": "2026-07-01T14:04:40+02:00",
          "tree_id": "ecc23d616817930341bec3bf45ff6c2ad3f0a3d2",
          "url": "https://github.com/fallow-rs/fallow/commit/335218664154eee1ba9df187cd6651c0e20f8abb"
        },
        "date": 1782907760061,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10402620,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58459,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "66697ddb827190d7f195b78c7ebbc550f01ec368",
          "message": "refactor(architecture): finish typed engine split\n\nFinish the fallow-engine, fallow-output and fallow-api split so CLI, MCP, LSP and NAPI depend on typed programmatic contracts instead of CLI or Core internals.\n\nRemove legacy bridge paths for root envelopes and extraction facts, route audit and decision surfaces through reusable API sessions, and keep graph-cache correctness tied to stable FileIds and SourceFingerprint invalidation.\n\nThis keeps public JSON and generated TypeScript surfaces regenerated while leaving persisted graph cache behavior transparent to callers.",
          "timestamp": "2026-07-01T14:12:53+02:00",
          "tree_id": "81a5227bd4f00e8fd4bbdfb550a275aff2c4f426",
          "url": "https://github.com/fallow-rs/fallow/commit/66697ddb827190d7f195b78c7ebbc550f01ec368"
        },
        "date": 1782908208011,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10406180,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58471,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "db5405148d299fdb353983d72a01c63985a686f2",
          "message": "fix(extract): credit Vue v-for loop variable class member accesses (#1709)\n\nA Vue `v-for` loop variable iterating over a typed array or reactive array of a class (`v-for=\"(util, index) of utils\"` where `utils` is `Util[]` or `computed(() => Util[])`) had no element-type binding, so template member accesses on the item were dropped and the class members were falsely reported as `unused-class-member`.\n\nThe visitor now infers the element class of a module-scope array / reactive-array binding (declarator annotation, a reactivity generic type argument, a reactivity callback returning a typed array or a `new T()` array literal, or a direct `new T()` array literal). The Vue SFC template scanner types the first bare-identifier v-for item to that class and excludes it from the locals stack so its member accesses remap onto the class. Over-credit only: it can only remove findings, never add one. CACHE_VERSION 215 to 216.\n\nThanks @Ericlm for the report and the minimal reproduction.\n\nFixes #1707.",
          "timestamp": "2026-07-01T15:30:20+02:00",
          "tree_id": "3523732a360b1701072ad4a02a69b3e6e3cd9378",
          "url": "https://github.com/fallow-rs/fallow/commit/db5405148d299fdb353983d72a01c63985a686f2"
        },
        "date": 1782912965465,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10380948,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58434,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "91fb0eeb104bf10ea104346457bbc53063fb23c9",
          "message": "fix(extract): credit iteration-binding class members (#1710)\n\nFollow-up to #1707. Types an iteration variable to the element class of a typed array / reactive array so member accesses on it credit the class instead of false-reporting unused-class-member. Reuses the #1707 element-type inference.\n\nJS arm: array-method callbacks (map/forEach/filter/find/findLast/findIndex/findLastIndex/flatMap/some/every; reduce/reduceRight excluded, accumulator param) and for...of loops, covering React/Preact JSX .map. Svelte arm: {#each utils as util} items. Over-credit only. Deferred: Vue props.items, Angular @for, Astro .map. CACHE_VERSION 216 to 217.\n\nRefs #1707.",
          "timestamp": "2026-07-01T16:38:01+02:00",
          "tree_id": "dfd000e110caa16ff1bb4d67d847c66af09a92c9",
          "url": "https://github.com/fallow-rs/fallow/commit/91fb0eeb104bf10ea104346457bbc53063fb23c9"
        },
        "date": 1782916977985,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10428964,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58461,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "b8ef5a048e39b53b5820746dba2ea89cd213543f",
          "message": "fix(extract): credit deferred iteration-binding sibling class members (#1715)\n\nFixes the three deferred iteration-binding sibling cases from the #1707 / #1710 follow-up, each a false unused-class-member where an iteration item typed as the element class of an array was not credited. All over-credit-only: they can only remove a false finding, never add one.\n\n- #1711 Vue v-for over props.<field>: the defineProps inline-type harvest records each array-typed prop field element class as props.<field> into array_binding_element_types; the existing v-for scanner matches it.\n- #1712 Angular @for / *ngFor: the visitor collects component-field array element types and the Angular scanner types a bare-identifier loop var to that class, remapping util.member onto the element class. Inline template only.\n- #1713 Astro template .map: template {...} expression regions are re-parsed through the member-recording visitor seeded with frontmatter element types, reusing bind_iterable_callback_parameter.\n\nEach fix ships a reachable fixture with a non-vacuous control plus a neuter test. CACHE_VERSION 217 to 220.\n\nCloses #1711, #1712, #1713.",
          "timestamp": "2026-07-01T18:09:57+02:00",
          "tree_id": "864760094817bb661212fd06e9a6f3c51a96f011",
          "url": "https://github.com/fallow-rs/fallow/commit/b8ef5a048e39b53b5820746dba2ea89cd213543f"
        },
        "date": 1782922915552,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10419540,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58446,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "ea88340200e529d0f1416303cc436ae9ac370044",
          "message": "fix(napi): align smoke test with consolidated engine root-validation message\n\nThe engine consolidation refactor (f8eb3dd6a) changed validate_root's\nerror message from \"analysis root does not exist\" to the more\ninformative \"invalid root path '<path>': <os-error>\", but the NAPI\nsmoke test still asserted the old wording, reddening the Check job on\nboth ubuntu and windows. Match the stable substring instead of the\nOS-specific error text.",
          "timestamp": "2026-07-01T20:16:39+02:00",
          "tree_id": "92bdd3b04580279f931e136aacb504464312a418",
          "url": "https://github.com/fallow-rs/fallow/commit/ea88340200e529d0f1416303cc436ae9ac370044"
        },
        "date": 1782930118995,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10410483,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58409,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "37f7c79c7ef944cd0fd8cd4212884c1203263b57",
          "message": "feat(inventory): name callback arguments from the callee (#1719)\n\nThe inventory walker named bindings, methods, and function ids but left every\nfunction passed as a call/`new` argument as `(anonymous_N)`. Meanwhile the\nruntime instrumenter (oxc-coverage-instrument) with name_callback_arguments (the\nFallow beacon enables it) names those from the callee. So the static inventory\nand the runtime coverage drifted to different names for the same callback\n(`.references(() => ...)`, `arr.map(cb)`, route handlers), and the backfilled\nnever_called functions surfaced as anonymous.\n\nName a function-valued call/`new` argument from the callee (identifier, member\nproperty, or computed string-literal key), matching the instrumenter's\ncallee-naming exactly. Precedence stays parent-binding -> own id -> callee ->\ncounter (a new pending_callee_name slot ranks below the id, so a named function\nexpression keeps its id). The callee subtree is visited before the arguments, so\na chained call never leaks the earlier callee onto a later callback.\n\nVerified on a real Drizzle schema: 0/47 anonymous (was ~47). 2560 extract tests\ngreen; clippy + fmt clean.",
          "timestamp": "2026-07-01T21:01:34+02:00",
          "tree_id": "c2d61a5101aea70b7fd980a20eac1047b484d9ba",
          "url": "https://github.com/fallow-rs/fallow/commit/37f7c79c7ef944cd0fd8cd4212884c1203263b57"
        },
        "date": 1782932938043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10428668,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58457,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "7d7ca6d3c8d7737501beba662a7b50146ff8a4be",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.104.0",
          "timestamp": "2026-07-01T23:16:48+02:00",
          "tree_id": "db4a97930ea52a57dba1c156f329cc96119dd355",
          "url": "https://github.com/fallow-rs/fallow/commit/7d7ca6d3c8d7737501beba662a7b50146ff8a4be"
        },
        "date": 1782940981301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10406484,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58469,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "afff35d14a7b17ec6bf02b9deb80a698ef53d786",
          "message": "feat(ci): improve PR and MR reporting\n\n## Summary\n\n- Moves sticky PR/MR comments, inline review posting, and GitHub Check Run payloads behind typed Rust adapters.\n- Adds shared PR summary, decision, details, status, and comment-post plan contracts in fallow-output.\n- Documents comment layout controls and keeps legacy markdown rendering compatible.\n\n## Verification\n\n- cargo build --workspace\n- cargo test --workspace --lib --bins --tests --examples\n- cargo fmt --all -- --check\n- cargo test -p fallow-output pr_summary\n- cargo test -p fallow-cli --bin fallow combined\n- bash action/tests/run.sh\n- bash ci/tests/run.sh",
          "timestamp": "2026-07-03T17:35:03+02:00",
          "tree_id": "59e041933e42f85f068e5883e02819bc1e14c6ed",
          "url": "https://github.com/fallow-rs/fallow/commit/afff35d14a7b17ec6bf02b9deb80a698ef53d786"
        },
        "date": 1783093198045,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10439460,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58473,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "ac7df1b8c2ed0d3c6898c5a90bcc44ebb76c3994",
          "message": "refactor(architecture): finish engine and registry split\n\nComplete the architecture roadmap by routing command, API, MCP, and editor flows through typed engine and API boundaries. Combined and audit now reuse retained project artifacts for dead code, duplication, and health instead of repeating discovery, parse, and graph work.\n\nMove output and issue metadata ownership into generated contracts, including suppressions, SARIF summaries, TypeScript aliases, and VS Code labels. Add fallow-security so security catalogue data no longer lives inside core analysis orchestration.\n\nKeep Cache V2 out of this change until FileId and invalidation guarantees are proven. Add an old-vs-new audit benchmark harness so future runtime claims have explicit semantic and timing evidence.",
          "timestamp": "2026-07-03T20:48:58+02:00",
          "tree_id": "66271d3eee62d81a788880bdc5c90ad9f70d28ad",
          "url": "https://github.com/fallow-rs/fallow/commit/ac7df1b8c2ed0d3c6898c5a90bcc44ebb76c3994"
        },
        "date": 1783105135555,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10395908,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58456,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "2c67798f2629db09e82117ce345130c1c822bf6d",
          "message": "feat(cli): add rule-pack authoring commands\n\nAdds rule-pack authoring commands, bundled templates, and generated agent/docs surfaces for declarative policy packs.",
          "timestamp": "2026-07-04T08:55:41+02:00",
          "tree_id": "2fc8a3f632c54acc1e0ea448c4311bf736d29b4c",
          "url": "https://github.com/fallow-rs/fallow/commit/2c67798f2629db09e82117ce345130c1c822bf6d"
        },
        "date": 1783148292601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10421964,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58443,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "691c3f906938e74967a630d997edf1eb5f4c9cac",
          "message": "feat: add v3 styling analysis integration\n\nAdds default audit styling intelligence with CSS and CSS-in-JS analytics, raw style value token drift, duplicate styling blocks, selector complexity, dead styling surface, broken references, and styling health surfaces.\n\nKeeps styling findings report-only and verify-first with CSS deep controls, output contracts, docs, MCP, NAPI, skills, and real-project smoke harness coverage.\n\nRebases onto the current architecture with registry-owned explain token lookup and Code Mode combined routed through the programmatic API.",
          "timestamp": "2026-07-04T09:47:54+02:00",
          "tree_id": "bcf5a2b20def65ed9c2da14b8cacca36401be76d",
          "url": "https://github.com/fallow-rs/fallow/commit/691c3f906938e74967a630d997edf1eb5f4c9cac"
        },
        "date": 1783151480381,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10401212,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58465,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "348caa5d35f0c8d73f79c4950f9ab55db056b150",
          "message": "feat(core): add rule-pack v2 matchers\n\nAdds zone-scoped rule-pack policies, banned-export rules, and deep-import matching while keeping policy violations on the existing typed output contract.",
          "timestamp": "2026-07-04T10:15:19+02:00",
          "tree_id": "88f8e4c3424131dfe9015df0f0aa84f415bcb355",
          "url": "https://github.com/fallow-rs/fallow/commit/348caa5d35f0c8d73f79c4950f9ab55db056b150"
        },
        "date": 1783153352973,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10438404,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58469,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "630722b016a5b785d6fa05ee54db6b339eb3c4fa",
          "message": "chore: release v3.0.0",
          "timestamp": "2026-07-04T10:58:59+02:00",
          "tree_id": "f011cc378131a241699dd790fca05d8f01d804ea",
          "url": "https://github.com/fallow-rs/fallow/commit/630722b016a5b785d6fa05ee54db6b339eb3c4fa"
        },
        "date": 1783155864588,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10435844,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58470,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "a45a7865b6a646be5e121c3687127357408c81b9",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.0.0",
          "timestamp": "2026-07-04T12:17:42+02:00",
          "tree_id": "6918a5a2e08e156c62134dbf8c931ce81d6657d1",
          "url": "https://github.com/fallow-rs/fallow/commit/a45a7865b6a646be5e121c3687127357408c81b9"
        },
        "date": 1783160548955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10426308,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58452,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "79987bd2dc5ee5d29c0ff5ed6615022f28f4fab6",
          "message": "docs(brand): fold styling into crate/npm/vscode descriptions, demote build attributes",
          "timestamp": "2026-07-04T16:58:09+02:00",
          "tree_id": "07e3265f1c6568af6b83287ec68552b015bfaef7",
          "url": "https://github.com/fallow-rs/fallow/commit/79987bd2dc5ee5d29c0ff5ed6615022f28f4fab6"
        },
        "date": 1783177300573,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10384372,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58437,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "ff76b924a3ac0190f0f187c5917bda19275a3fcf",
          "message": "refactor(quality): reduce Rust unit size\n\nContinue the SIG unit-size cleanup by splitting long Rust functions across CLI, API, engine, extractor, graph, LSP, MCP, output, config, and types surfaces into narrower private helpers. The changes keep public output contracts and analysis behavior intact while making pipelines, renderers, mappers, and diagnostics easier to scan.\n\nThe loop only kept measured improvements and dropped the final non-improving split. No new user-facing capability is intended, this is maintainability work for future feature and bug-fix changes.",
          "timestamp": "2026-07-04T20:25:47+02:00",
          "tree_id": "7a6acf2979fb6307c8b0922ad92d265ca2058c9d",
          "url": "https://github.com/fallow-rs/fallow/commit/ff76b924a3ac0190f0f187c5917bda19275a3fcf"
        },
        "date": 1783190074241,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10403532,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58463,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "b1a2c07b8a247658f61eb133c0ce35c78e017606",
          "message": "fix(extract): credit factory members via return-type annotation (#1744)\n\nCross-module factory-return member crediting was body-only: it fired for\n`return new Class()` or a returned identifier whose type is a proven local,\nbut ignored the factory's own return-TYPE annotation. So a hook/factory\nwhose body has no value proof (`function useController(): ReadyAppController {\nreturn registry.get() as ReadyAppController }`) recorded no class binding,\nand every public method read on `const c = useController()` false-flagged as\nunused-class-member even though the class export itself was reachable.\n\nThread the function's declared return-type annotation into the factory-return\nrecording. When neither body value-proof fires, a sync (non-async,\nnon-generator) factory whose return type names a class records a strict\nfactory-return entry, so the cross-module `exported_factory_returns` metadata\ncredits `c.method()` across the module boundary (both fn-decl and arrow\nforms). This deliberately widens the #1441 value-vs-type doctrine: unlike a\nreturned-identifier's contradictable variable annotation, a function\nreturn-type annotation is the author's compiler-checked contract. It stays\nover-credit-safe: the analyze layer credits only when the name resolves to a\nreal class-with-members export, so a wrong annotation is a false negative at\nworst, never a false positive. A genuinely-unused method on the returned\nclass still reports.\n\nAdds extract unit tests (records the strict entry, arrow variant, async\nabstain) and a cross-file integration fixture + test. Bumps extract\nCACHE_VERSION 220 to 221 (the exported_factory_returns output changes).",
          "timestamp": "2026-07-05T10:05:26+02:00",
          "tree_id": "7aad836e6bbf254f5ed2dd84d04cfc6fa965335d",
          "url": "https://github.com/fallow-rs/fallow/commit/b1a2c07b8a247658f61eb133c0ce35c78e017606"
        },
        "date": 1783239242152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10404652,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58471,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "517ded7c8bba49aec699370c857cbc3d50c8af25",
          "message": "docs: document architecture north star",
          "timestamp": "2026-07-05T10:50:43+02:00",
          "tree_id": "4657ef068d500709b97aa6b7e476276185b1b3ff",
          "url": "https://github.com/fallow-rs/fallow/commit/517ded7c8bba49aec699370c857cbc3d50c8af25"
        },
        "date": 1783241760971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10398556,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58461,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "f48b56c4743acb3ff4493798b39be227b413c0d1",
          "message": "docs: make core migration guide self-contained",
          "timestamp": "2026-07-05T10:55:53+02:00",
          "tree_id": "fc1297507a75de6892feed30fe7006b9a013b753",
          "url": "https://github.com/fallow-rs/fallow/commit/f48b56c4743acb3ff4493798b39be227b413c0d1"
        },
        "date": 1783241987884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10403756,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58467,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "5b4201a7cedb48de258965eaf46f359ec44856a1",
          "message": "docs: keep core migration warnings self-contained",
          "timestamp": "2026-07-05T10:59:25+02:00",
          "tree_id": "8520a06d9ee3710a3f1c173e59a1b7b216eb6269",
          "url": "https://github.com/fallow-rs/fallow/commit/5b4201a7cedb48de258965eaf46f359ec44856a1"
        },
        "date": 1783242217463,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10387748,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58444,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "8762f20680c8a0b0a39dbee1a6b1f8d9e33e715f",
          "message": "test(cli): isolate workflow_event config_shape from accumulator leak\n\nbuild_workflow_event reads process-global telemetry accumulators (config\nshape, findings, cache state, scale buckets). These are static because\nproduction runs one analysis batch per process, but the in-process test\nbinary shares them: any test that loads a config calls note_config_shape,\nleaving CONFIG_SHAPE set for whatever test runs next. workflow_event_buckets_exit_codes\nthen read a leaked CustomConfig instead of its record's CustomRules and\nfailed nondeterministically (deterministically under --test-threads=1).\n\nAdd a cfg(test) reset_run_accumulators_for_test that restores the\nfresh-process UNSET state, and call it at the start of the affected test.",
          "timestamp": "2026-07-05T11:09:25+02:00",
          "tree_id": "4e828112e3b7e1932a7ba2278857cd1305bdad68",
          "url": "https://github.com/fallow-rs/fallow/commit/8762f20680c8a0b0a39dbee1a6b1f8d9e33e715f"
        },
        "date": 1783242800410,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10430204,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58467,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "784ffed5d6a2113262787585d8599dc1cf8acd9a",
          "message": "feat(trace): fall back to a class-member trace on export miss (#1744)\n\n`fallow dead-code --trace FILE:NAME` errored `export 'NAME' not found` when NAME was a class / enum / store MEMBER rather than a top-level export, so a member finding could not be debugged from the trace tool. On an export miss, `handle_trace_export` now falls back to a `trace_class_member` primitive that finds the export whose members contain NAME and reports the owning export's reachability and usage (reusing `trace_export`), who imports it, the re-export chains it is reachable through, and a `fallow dead-code --unused-<kind>-members --file <file>` pointer.\n\nThe trace path runs on the module graph only, so it does not report per-member crediting provenance. Trace JSON goes through the generic `print_trace_json` (not in the published schema), so the new `ClassMemberTrace` type needs no schema or TS-codegen regen. Adds core + human-renderer tests; human and `--format json` supported.\n\nCloses #1744.",
          "timestamp": "2026-07-05T11:16:58+02:00",
          "tree_id": "40bcb08fba8878fd48278a93a3974b02f6231ebf",
          "url": "https://github.com/fallow-rs/fallow/commit/784ffed5d6a2113262787585d8599dc1cf8acd9a"
        },
        "date": 1783243292592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10416812,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58439,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "6b9eb819620baf9aaf892e2ec552e92eb8a63e2e",
          "message": "refactor(engine): route workspace discovery through engine",
          "timestamp": "2026-07-05T11:44:05+02:00",
          "tree_id": "b3d4e7baf45ecd11c4357acc578d0b29f434926b",
          "url": "https://github.com/fallow-rs/fallow/commit/6b9eb819620baf9aaf892e2ec552e92eb8a63e2e"
        },
        "date": 1783244884512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10383668,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58435,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "3bb785ce9a64066a096f33379e34b2b7a3e0c31c",
          "message": "refactor(engine): own workspace scope resolution",
          "timestamp": "2026-07-05T11:57:09+02:00",
          "tree_id": "9ccd27402baee33ddc5c915b2ebdb63edf474c74",
          "url": "https://github.com/fallow-rs/fallow/commit/3bb785ce9a64066a096f33379e34b2b7a3e0c31c"
        },
        "date": 1783245776384,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10440540,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58473,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "fefe43f91c89c9662e090da068c5ca916856a02d",
          "message": "refactor(engine): own list inventory composition",
          "timestamp": "2026-07-05T12:05:28+02:00",
          "tree_id": "e68e6ddad3991f77357ec479a84eec7560d04d5c",
          "url": "https://github.com/fallow-rs/fallow/commit/fefe43f91c89c9662e090da068c5ca916856a02d"
        },
        "date": 1783246160614,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10433012,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 58463,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "f86039289acd6dee37597d41a7988b893a7f26f8",
          "message": "refactor(engine): own routing git identities",
          "timestamp": "2026-07-05T12:14:05+02:00",
          "tree_id": "f7bd6c7a9dc2a9b810495dc82c403d9275e63823",
          "url": "https://github.com/fallow-rs/fallow/commit/f86039289acd6dee37597d41a7988b893a7f26f8"
        },
        "date": 1783246931558,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10939472,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62120,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "6ea5700b9d00292aa47a60b3fec634abd4a39e8a",
          "message": "refactor(engine): own audit repo refs",
          "timestamp": "2026-07-05T12:25:53+02:00",
          "tree_id": "69d957791c764e65aabf9d75e3c5ffc29b73043a",
          "url": "https://github.com/fallow-rs/fallow/commit/6ea5700b9d00292aa47a60b3fec634abd4a39e8a"
        },
        "date": 1783247415790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10986624,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62140,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "fcbeb2005efeb2e4d86dca222e218a311e6a5aed",
          "message": "refactor(engine): own public api key policy",
          "timestamp": "2026-07-05T12:32:08+02:00",
          "tree_id": "c493902e15e5583b11d7ca8671fc3dcebfb0c9ad",
          "url": "https://github.com/fallow-rs/fallow/commit/fcbeb2005efeb2e4d86dca222e218a311e6a5aed"
        },
        "date": 1783247743900,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10982496,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62142,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "26e195b3627ec190680fbf857ca2c5743ae1f703",
          "message": "refactor(engine): own project workspace scope",
          "timestamp": "2026-07-05T12:35:57+02:00",
          "tree_id": "363995c9789ce9dac9c60928365fe64e8a0bd8f2",
          "url": "https://github.com/fallow-rs/fallow/commit/26e195b3627ec190680fbf857ca2c5743ae1f703"
        },
        "date": 1783247973846,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10962384,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62147,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "71410c4e92a13dd4cd79a9970225349bfc78b8eb",
          "message": "chore: release v3.1.0",
          "timestamp": "2026-07-05T13:07:30+02:00",
          "tree_id": "b767cc9188067db4027fabd70d0d71e77c412a51",
          "url": "https://github.com/fallow-rs/fallow/commit/71410c4e92a13dd4cd79a9970225349bfc78b8eb"
        },
        "date": 1783249935301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10943056,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62122,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "a5e0327261f94261dd6752d27261758860eb7dfb",
          "message": "perf(api): reuse audit analysis context",
          "timestamp": "2026-07-05T14:13:22+02:00",
          "tree_id": "f4f1c0f80057d4190dea8a84aae9693c79bfa360",
          "url": "https://github.com/fallow-rs/fallow/commit/a5e0327261f94261dd6752d27261758860eb7dfb"
        },
        "date": 1783253901782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10952176,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62140,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "ede3bcd2c01c06d0b63178ee54491103cfe5ff11",
          "message": "docs: correct benchmark ratio claims",
          "timestamp": "2026-07-05T19:40:18+02:00",
          "tree_id": "a3659bf288831ff1b37b04933f8f616c8dca4e55",
          "url": "https://github.com/fallow-rs/fallow/commit/ede3bcd2c01c06d0b63178ee54491103cfe5ff11"
        },
        "date": 1783273453215,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10933560,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62109,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "1d14a7714bb46de6c36fc0fb3ffbc01f7aa35767",
          "message": "feat(health): add maxUnitSize threshold override for the large-function check (#1751)\n\nAdds a health.maxUnitSize line-count threshold (global default 60) plus a per-file thresholdOverrides[].maxUnitSize, so a user can raise the function-too-big bar for test files (or any glob) without disabling complexity checks the way health.ignore does.\n\nDesign is list-only, matching the existing maxCyclomatic/maxCognitive/maxCrap override precedent: it filters the reported large-functions list on the resolved per-file effective threshold, while the descriptive unit-size profile and the health score still reflect raw sizes.\n\nFixes #1731.",
          "timestamp": "2026-07-05T21:07:56+02:00",
          "tree_id": "0ff5613e7c0964c0f88d669d6a6b776856503be0",
          "url": "https://github.com/fallow-rs/fallow/commit/1d14a7714bb46de6c36fc0fb3ffbc01f7aa35767"
        },
        "date": 1783278833411,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10941192,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62121,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "9dc768e2cc481d98d70c3cd24eb424712ea0d89e",
          "message": "perf: broaden codspeed benchmark coverage",
          "timestamp": "2026-07-05T21:35:49+02:00",
          "tree_id": "8efe61fc0d959fe8b7bf2e4634316d18b70a6cc7",
          "url": "https://github.com/fallow-rs/fallow/commit/9dc768e2cc481d98d70c3cd24eb424712ea0d89e"
        },
        "date": 1783280403692,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10977744,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62127,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "185c6a728a4759c5c34afcae1d262ccb09e41a8c",
          "message": "feat(health): expose max unit size threshold in summary\n\nAdd max_unit_size_threshold to the health JSON summary so consumers can read the configured global health.maxUnitSize alongside the existing cyclomatic, cognitive, and CRAP thresholds.\n\nThe human large-functions section now reflects the configured global threshold, and the markdown/human fallback effective-threshold wiring carries the same value for parity with the other thresholds.\n\nFixes #1750.",
          "timestamp": "2026-07-05T22:15:25+02:00",
          "tree_id": "ff38a4bc359bb161c5746c4abd7ff6381f68399a",
          "url": "https://github.com/fallow-rs/fallow/commit/185c6a728a4759c5c34afcae1d262ccb09e41a8c"
        },
        "date": 1783282957404,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10939336,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62120,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "afa3c171257bcb18cd0edbad9cf033d2be8f0443",
          "message": "fix(health): pluralize the large-functions unit-size footer (#1753)\n\nThe large-functions footer from #1750 read \"exceeding 1 lines\" when health.maxUnitSize is 1; guard the noun so a ceiling of 1 renders \"1 line\". Refs #1750.",
          "timestamp": "2026-07-05T22:35:46+02:00",
          "tree_id": "b388d3dcf64b25ac2d88c6e4a0b38dfbcdf95c2a",
          "url": "https://github.com/fallow-rs/fallow/commit/afa3c171257bcb18cd0edbad9cf033d2be8f0443"
        },
        "date": 1783283977259,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10964000,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62112,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "0d568277b6cf91e95c98cb92f8228154e58d6984",
          "message": "chore: release v3.2.0",
          "timestamp": "2026-07-05T23:33:08+02:00",
          "tree_id": "06f0a215a30c01d1d15b2bcfa60193d5391080d5",
          "url": "https://github.com/fallow-rs/fallow/commit/0d568277b6cf91e95c98cb92f8228154e58d6984"
        },
        "date": 1783287459958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10969224,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62120,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "6280c23c3709f69691ebdaef9172c81a4883bdef",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.2.0",
          "timestamp": "2026-07-06T00:38:45+02:00",
          "tree_id": "a5f6f2c47a377bd2c9f4265e282161708d4e6003",
          "url": "https://github.com/fallow-rs/fallow/commit/6280c23c3709f69691ebdaef9172c81a4883bdef"
        },
        "date": 1783291437787,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10965752,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62118,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "9807e2e414a3a3bd379727b6cc6c7ae21d25ce7a",
          "message": "fix(unused-class-members): credit iteration bindings\n\nCredit unused-class-member usage through typed iteration bindings in Vue, Angular external templates, and function-local JavaScript arrays.\n\nThe extractor now preserves scoped array element facts for local loops and callbacks, records Angular component field array types for templateUrl usage, and avoids parallel overhead for tiny warm-cache parse sets.\n\nFixes #1716.\nFixes #1717.\nFixes #1718.",
          "timestamp": "2026-07-06T11:12:22+02:00",
          "tree_id": "93944c9477529094a9f9e31e34ad0ccfc77fbe95",
          "url": "https://github.com/fallow-rs/fallow/commit/9807e2e414a3a3bd379727b6cc6c7ae21d25ce7a"
        },
        "date": 1783329345579,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10983816,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62217,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "2c9ecd2f9091c56b92b0177b7d4d01a45e044f6d",
          "message": "feat(analysis): add route-loader and CSS-in-JS quality checks\n\nAdds framework-scoped route-loader data key harvesting for React Router and Remix while keeping SvelteKit load data isolated. The extractor now records the correct producer mode, bumps the cache version, and the analyzer keeps SvelteKit whole-object abstain from suppressing route-loader findings.\n\nAdds CSS-in-JS near-duplicate token reporting to the CSS analytics contract, human health output, schema, generated TypeScript contracts, and styling findings. Partial-scope scans abstain from the whole-project comparison so changed-file output stays conservative.",
          "timestamp": "2026-07-06T11:46:31+02:00",
          "tree_id": "f7d59442271c692c1e336839424ecf12abe89e11",
          "url": "https://github.com/fallow-rs/fallow/commit/2c9ecd2f9091c56b92b0177b7d4d01a45e044f6d"
        },
        "date": 1783331534656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10965296,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62232,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "ba423ccec8b0e7edc3e5cdb67ba97ea1c9b2c25d",
          "message": "docs(extract): clarify parse scheduling\n\nClarifies that extraction uses a sequential fast path for small file sets and parallel parsing for larger file sets.\n\nAlso documents why the small-input threshold exists: avoiding Rayon scheduling overhead on cache-hot inputs.",
          "timestamp": "2026-07-06T12:02:31+02:00",
          "tree_id": "84b49d92c5c25e14c2625b2381ca9d4d60d46302",
          "url": "https://github.com/fallow-rs/fallow/commit/ba423ccec8b0e7edc3e5cdb67ba97ea1c9b2c25d"
        },
        "date": 1783332581890,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 11002936,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62251,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "f1b9d4c1b12acebe53841a259b91ba36d7607468",
          "message": "feat(architecture): add contract guardrails\n\nAdd generated contract surface checks, architecture invariants, SARIF/LSP contract cleanup, MCP CLI fallbacks, and public smoke conformance guardrails.",
          "timestamp": "2026-07-06T19:07:35+02:00",
          "tree_id": "72031856c10c4af91c5c074522e91270a772f573",
          "url": "https://github.com/fallow-rs/fallow/commit/f1b9d4c1b12acebe53841a259b91ba36d7607468"
        },
        "date": 1783357868494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10958696,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62227,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "2c96a30db4904bab4d269782cad4874bcbbfc72e",
          "message": "refactor(architecture): close output boundary leftovers\n\nMove reusable SARIF result assembly and audit styling render facts into fallow-output so API and CLI code stop owning shared output contract behavior.\n\nKeep fallow-core contained as engine backend debt by removing the benchmark convenience dependency and adding crate-boundary guards. Complete the FallowOutput schema manifest for trace, feature flags, and decision surface, then drift-test the backwards compatibility docs and regenerated TypeScript contracts.",
          "timestamp": "2026-07-06T23:53:20+02:00",
          "tree_id": "a189a2313c041ef55c41a310e4ea13f65108a0e3",
          "url": "https://github.com/fallow-rs/fallow/commit/2c96a30db4904bab4d269782cad4874bcbbfc72e"
        },
        "date": 1783375028599,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10999864,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62244,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "e7878f27ede3575df0ca7142e03db38ad56acb00",
          "message": "refactor: remove architecture debt\n\nMove SARIF-family assembly and shared formatter facts behind fallow-output while keeping fallow-api as a compatibility facade.\n\nReclassify fallow-core as an internal detector backend behind fallow-engine, tighten architecture guards for direct core calls, IO/cache ownership, analyzer placement, manifest drift, and protocol prose.\n\nRemove stale exception language from contributor docs and add pre-ship guard coverage so the architecture debt cannot silently return.",
          "timestamp": "2026-07-07T07:51:22+02:00",
          "tree_id": "db8be59ca0bf3c1f9de75a9cf302d1874c84c199",
          "url": "https://github.com/fallow-rs/fallow/commit/e7878f27ede3575df0ca7142e03db38ad56acb00"
        },
        "date": 1783403817871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10983464,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62224,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "df76662b0e166beb87b831b26c927a46e4cecf2d",
          "message": "feat(plugins): add manifestEntries to external plugins\n\nAdds a declarative manifestEntries capability to external plugins: a fallow-plugin-*.jsonc can seed entry points DERIVED from framework manifest files. Each rule finds manifests by a recursive .gitignore-respecting walk, parses JSON/JSONC, gates on a dotted-field when (strict equality), and resolves each entries[].path (with ${dotted.field} string/array fan-out) relative to the manifest's directory into an entry point under the plugin's entryPointRole. Loud warns on zero-match glob, when-excludes-all, typo'd field paths, empty entries, and unparseable manifests. Regenerates plugin-schema.json + schema.json.\n\nValidated on a real Kibana clone: unused files 21,932 to 5,318, unresolved_imports stays 0, 100% of the 383 plugins' declared entries seeded. Per-seed role and TOML/YAML manifests deferred (additive-safe).\n\nRefs #1774.",
          "timestamp": "2026-07-07T20:59:01+02:00",
          "tree_id": "2932ae0649ca1ecedded3189c04113d11aca6426",
          "url": "https://github.com/fallow-rs/fallow/commit/df76662b0e166beb87b831b26c927a46e4cecf2d"
        },
        "date": 1783451042082,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10991776,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62236,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "90d340dcdc8f15c8bc2dfbecbf348b51894f72d9",
          "message": "fix(resolve): clarify incomplete-tsconfig-chain warning\n\nThe \"Broken tsconfig chain ... path aliases from missing inherited configs will not [work]\" warning read as if every path alias was unresolved, alarming users of large monorepos whose aliases resolve fine. When a per-file tsconfig extends/references chain cannot be fully loaded (commonly a node_modules base config not installed yet), fallow falls back to resolver-less resolution, but aliases declared in a discovered root or workspace tsconfig are still applied project-wide by the TypeScript plugin. The warning now says so and only flags aliases declared solely in the unreadable inherited config. Wording and documentation only; resolution behavior is unchanged.",
          "timestamp": "2026-07-07T21:06:38+02:00",
          "tree_id": "8a35075bdbd2b0b2de755d2aa78a346500f24683",
          "url": "https://github.com/fallow-rs/fallow/commit/90d340dcdc8f15c8bc2dfbecbf348b51894f72d9"
        },
        "date": 1783451422708,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10965352,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62238,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "68626df671925eae57fdf8d099a4116b8a2609dd",
          "message": "feat(onboarding): cold-start config recommendation for agents\n\nAdds an agent onboarding surface that takes a cold-start agent (arriving via\nGitHub, npx, or MCP) from zero to a project-tailored fallow config. `fallow\nschema` is a capability manifest (commands, global flags, issue types with\ndefault severities / opt-in / frameworks, boundary presets, taste choices,\nsecurity categories, MCP tools, related schemas); `fallow recommend` emits a\ndetection-derived `proposed_config` that loads through the real loader plus a\nthree-valued `decisions[]` list (auto applied silently, default disclosed and\noverridable, taste surfaced as an open AskUserQuestion with no baked-in answer);\na read-only `recommend` MCP tool mirrors it 1:1; and `fallow config-schema` is\nself-documenting from the Rust config types.\n\n`fallow init` now derives its detection base (entry, workspaces.patterns,\nStorybook ignore) from the same recommend core so init and recommend never\ndrift, and the `--toml` scaffold writes the loader's `patterns` key instead of\nthe silently-dropped `packages` (with a `packages` back-compat serde alias so\nexisting configs keep scoping). Framework and test-framework detection now\naggregate dependency names across workspace members, not just the root\npackage.json, so a monorepo whose frameworks live in packages (Next.js in\napps/web) is reported instead of showing as frameworkless.\n\n`fallow config` on a zero-config project now prints the effective defaults as\nclean JSON and exits 0 (was exit 3 with no output); `--path` still exits 3 when\nno file exists. `fallow recommend`'s concise human output points at\n`--format json` for the full structured decision set. Companion docs\n(fallow-docs) are updated separately; the vendored skill/manifest contracts are\nregenerated in this change.",
          "timestamp": "2026-07-07T22:08:34+02:00",
          "tree_id": "cb83096934bdae92ee359eb934e4619109dd3dff",
          "url": "https://github.com/fallow-rs/fallow/commit/68626df671925eae57fdf8d099a4116b8a2609dd"
        },
        "date": 1783455618708,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10957992,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62228,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "2244b5c42d096f04a8334e4e84d13bd5f6de9d2f",
          "message": "chore(deps): unblock Dependabot PRs (crossbeam-epoch security + npm tooling) (#1778)\n\n* fix(deps): bump crossbeam-epoch to 0.9.20 for RUSTSEC-2026-0204\n\ncrossbeam-epoch 0.9.18 (transitive via rayon-core and ignore) is flagged\nby RUSTSEC-2026-0204: invalid pointer dereference in the fmt::Display impl\nfor Atomic/Shared on null pointers. Fixed in >=0.9.20. Cargo.lock-only\nbump; clears the Cargo Deny and Security Audit failures on main and every\nopen PR.\n\n* chore(deps-dev): bump commitlint, oxfmt, oxlint and resync lockfile\n\nBumps @commitlint/cli and @commitlint/config-conventional to 21.2.0,\noxfmt to 0.57.0, oxlint to 1.72.0. Regenerates package-lock.json with a\nreal npm install so the nested conventional-commits-parser@6.4.0 entry is\nrestored; Dependabot's per-package lockfile regeneration had pruned it,\nbreaking npm ci (the JS Lint and Commit messages checks) on every npm PR.\n\nSupersedes #1761, #1763, #1764, #1765.",
          "timestamp": "2026-07-07T20:48:06Z",
          "tree_id": "29570e966bace28ce0c12094d6726e16f5885c39",
          "url": "https://github.com/fallow-rs/fallow/commit/2244b5c42d096f04a8334e4e84d13bd5f6de9d2f"
        },
        "date": 1783457568788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10944784,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62208,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
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
          "id": "66e4400cbcaeb3e134e76965b0c15aa7f0f1e91e",
          "message": "chore(deps): migrate MCP server to rmcp 2.x (#1779)\n\nBumps rmcp 1.8 -> 2.1 (manifest floor \"2.0\"). The 2.0 model reorg renamed\nthe content type: `Content` (an `Annotated<RawContent>` with a `.raw`\nfield) became the flat `ContentBlock` enum, and the `RawContent` enum was\nremoved. Migrated all tool response builders and result-parsing helpers:\n\n- `rmcp::model::Content` -> `ContentBlock`; `Content::text` -> `ContentBlock::text`\n- `let RawContent::Text(t) = &content.raw` -> `let ContentBlock::Text(t) = content`\n- `match &result.content[0].raw { RawContent::Text(t) => .. }` -> `match &result.content[0] { ContentBlock::Text(t) => .. }`\n\nThe tool-router macros (`#[tool]`, `tool_router`, `tool_handler`),\n`ServerHandler`, `Parameters`, and stdio transport are unchanged across\nthe major. Verified: builds, clippy clean, mcp tests pass, and a live\nstdio session (initialize -> tools/list -> tools/call fallow_explain)\nreturns correct results.\n\nCloses #1773.",
          "timestamp": "2026-07-07T21:12:18Z",
          "tree_id": "a9b35be271a7c773aa72924e003fd7f3ccea9f8e",
          "url": "https://github.com/fallow-rs/fallow/commit/66e4400cbcaeb3e134e76965b0c15aa7f0f1e91e"
        },
        "date": 1783459039971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 10963264,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 62235,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 965547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 7458,
            "unit": "allocations"
          }
        ]
      }
    ]
  }
}