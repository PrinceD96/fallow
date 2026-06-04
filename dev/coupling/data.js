window.BENCHMARK_DATA = {
  "lastUpdate": 1780594007736,
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
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51e5aa2199c98611d72f84f7506e61e655b2b75c",
          "message": "test(cli): snapshot coverage-intelligence render + drop stale dead_code allow (#771)\n\n* chore(health): drop stale dead_code allow on includes_crap\n\nExceededThreshold::includes_crap carried an #[allow(dead_code)] whose doc\ncomment claimed \"the binary target has no direct caller today\". That is no\nlonger true: baseline.rs, finding.rs, health/mod.rs, and the new\ncoverage_intelligence.rs all call it on the binary side, so the lint cannot\nfire. Remove the attribute and the stale rationale, aligning the doc comment\nwith its includes_cyclomatic / includes_cognitive siblings. Clippy stays\nclean with -D warnings.\n\n* test(cli): snapshot coverage-intelligence render across formats\n\nAdd a HealthReport fixture that carries a populated coverage_intelligence\nblock (a risky changed hot path plus a high-confidence delete candidate, with\none ambiguous match skipped) alongside runtime coverage, then render it\nthrough the public build_health_json / build_health_markdown /\nbuild_health_sarif / build_health_codeclimate entry points and snapshot each.\n\nPreviously the coverage-intelligence rendering was exercised only by\nper-format helper unit tests; these committed snapshots lock the live combined\nwire format across all four string-returning formats so future changes to the\nblock surface as reviewable snapshot diffs. The compact path keeps its\nexisting dedicated unit test (it prints to stdout rather than returning a\nstring).",
          "timestamp": "2026-05-29T06:56:51Z",
          "tree_id": "f11e27302b06d0014a2552c15df217e69c5287da",
          "url": "https://github.com/fallow-rs/fallow/commit/51e5aa2199c98611d72f84f7506e61e655b2b75c"
        },
        "date": 1780037911440,
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
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a3791a07ff9d064cd7bf2f568e06c982ccb62cc",
          "message": "fix: harden dupes deep-dive handles (#769)\n\nReport-scoped dupes fingerprint assignment preserves short dup:<8hex> handles by default and widens only colliding groups, routed through human output, JSON wrappers, grouped output, clone-family nested groups, and trace lookup so ambiguous short handles never resolve to the wrong group.\n\nTightens suggested_name selection with deterministic scoring, structured-name preference, near-tie abstention, and stronger margins for plain single-token names. Updates MCP/README/CHANGELOG/schema/generated TypeScript contract wording for widened fingerprints.\n\nCloses #759",
          "timestamp": "2026-05-29T07:08:55Z",
          "tree_id": "18a37376184019ab08a7bae032649f590f718d3d",
          "url": "https://github.com/fallow-rs/fallow/commit/0a3791a07ff9d064cd7bf2f568e06c982ccb62cc"
        },
        "date": 1780038599925,
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
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de3503081b23a8ba6d0962a47424ed74174eec42",
          "message": "feat(telemetry): opt-in agent and CI workflow telemetry\n\nOpt-in, off-by-default product telemetry for improving agent, CI, MCP, and editor workflows.\n\nAdds `fallow telemetry status|enable|disable|inspect`, coarse allowlisted workflow events (never code, paths, names, config, or raw env), `FALLOW_AGENT_SOURCE` attribution, and a non-blocking best-effort upload that never affects command output or exit code. DO_NOT_TRACK honored. Docs and drift-guard tests included.",
          "timestamp": "2026-05-29T07:37:47Z",
          "tree_id": "292f3789fda0ba9eda79e82b87d2a0470cec1e0b",
          "url": "https://github.com/fallow-rs/fallow/commit/de3503081b23a8ba6d0962a47424ed74174eec42"
        },
        "date": 1780040331436,
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
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2221f056c19880ef70edad19a5b0c3f1262fded3",
          "message": "feat(plugins): add Velite plugin (#774)\n\n* feat(plugins): add Velite plugin\n\nDetect Velite content-pipeline projects (velite dependency or\nvelite.config.{ts,mts,cts,js,mjs,cjs}). Keep the config and generated\n.velite output reachable, traverse the hidden .velite dir, and parse\ndefineConfig/defineCollection to mark content roots (root default\ncontent, joined with each collection pattern) as support entry points\nso Velite-managed markdown/MDX content is not reported as unused.\nCredit velite as a tooling dependency.\n\nRefs #609\n\n* test(plugins): add Velite integration fixture (#609)\n\npetersen-pack-shaped fixture: velite.config.ts, content/blog content,\nand generated .velite output stay credited; an MDX file outside the\ncontent root and a plain orphan stay reported; left-pad stays an\nunused dev dependency. Verified regression-strength (fails when the\nplugin registration is removed).\n\n* fix(plugins): refine Velite output-data + negation handling; document\n\nAddress review of the Velite plugin: fall back to the content-root glob\nwhen only negation patterns survive (not just when no pattern parses),\nand compare the raw output.data value against the default before\nnormalizing so a monorepo config that spells out the default .velite\ndoes not add a redundant always-used entry. Add tests for negation-only\nfallback, default output.data in a workspace, and config-relative custom\noutput.data.\n\nDocument the plugin in detection.md and plugins.md (rich-config count\n25 to 26, total 110 to 115), bump the README plugin count to 115, and\nadd a CHANGELOG entry.\n\nVerified on BlakePetersen/petersen-pack: velite.config.ts and 43\ncontent MDX files flip from unused to credited, zero new findings.\n\nRefs #609",
          "timestamp": "2026-05-29T07:50:40Z",
          "tree_id": "1e782fab9918555ff9e31de0753774745fddcc47",
          "url": "https://github.com/fallow-rs/fallow/commit/2221f056c19880ef70edad19a5b0c3f1262fded3"
        },
        "date": 1780041103951,
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
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 764,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56a30b5f529fbbfa40871b6e783548c75f0d84a9",
          "message": "feat(core): enforce git-only process spawning on the analysis path (#773)\n\n* feat(core): enforce git-only process spawning on the analysis path\n\nfallow's static analysis never executes the analyzed project's code; the\nonly external program the analysis path runs is git. This makes that\ninvariant machine-checkable instead of a prose promise.\n\nAdds fallow_core::spawn::git, the single sanctioned caller of\nstd::process::Command::new in fallow-core/extract/graph, and routes the\nexisting changed_files and churn git invocations through it. A new\n.clippy.toml disallowed-methods ban on std::process::Command::new is set\nto allow workspace-wide (the CLI and MCP crates legitimately spawn git\nworktrees, the coverage sidecar, and subprocesses off the analysis path)\nand re-denied at the crate root of fallow-core/extract/graph via\ncfg_attr(not(test)), so any new process spawn on the analysis path fails\nthe build and the author is pointed at the wrapper. Test helpers that\nshell out to git to build fixtures stay exempt.\n\nA new safe_analysis integration test is the runtime backstop: it runs\nanalysis on a project whose package.json declares preinstall/postinstall/\nprepare scripts that would write a sentinel file, and asserts the sentinel\nnever appears (fallow reads package.json as data, it never invokes a\npackage manager).\n\n* chore(security): harden build-time supply chain and document the trust boundary\n\nSets `yanked = \"deny\"` in deny.toml so a yanked crate (an early signal of\na withdrawn or compromised release) fails the cargo-deny gate, alongside the\nexisting advisories-deny-by-default, wildcard ban, and unknown-source ban.\nCargo build scripts and proc-macros run arbitrary code at build time on the\nrunner that signs fallow's binaries, and npm --ignore-scripts does nothing\nfor that Cargo-side vector, so cargo-deny is the gate for it.\n\nDocuments the build-time trust boundary in SECURITY.md as a section distinct\nfrom the existing runtime threat model, and notes that the runtime\n\"does not execute user code\" property is now compile-time enforced via the\nanalysis-crate Command::new ban introduced in the preceding commit.\n\n* test(core): make the safe-analysis non-vacuity assertion graph-dependent\n\nMake index.ts the package `main` so it is an entry point, then assert\nused.ts is reachable (NOT unused) in addition to orphan.ts being unused.\nThe used.ts assertion specifically requires the import graph to have been\ntraversed; the prior orphan-only assertion passed even with no entry points\n(all files unreachable), so it did not actually prove the pipeline ran.\n\n* docs(core): document the spawn::git process-spawn boundary in the crate rule\n\n* refactor(core): use #[expect] over #[allow] on the spawn::git guard suppression\n\nThe lint fires (Command::new is actually called), so #[expect] is fulfilled\nin both the non-test deny config and the test allow config. Per\n.claude/rules/code-quality.md, #[allow] is reserved for cases where #[expect]\nwould be unfulfilled; this is not one.\n\n* docs(core): use a colon separator in the spawn.rs rule entry (no em-dash)",
          "timestamp": "2026-05-29T08:10:09Z",
          "tree_id": "6989cc0986a9e5b9b9333ddb9ebd1f83dfc876a4",
          "url": "https://github.com/fallow-rs/fallow/commit/56a30b5f529fbbfa40871b6e783548c75f0d84a9"
        },
        "date": 1780042275064,
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
            "value": 763,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49b820fde252762f4fb4b74a2acee76f9cdea575",
          "message": "refactor(core,lsp): unify plugin-result merging via field-exhaustive merge_into (#776)\n\nReplace the two hand-maintained field-by-field merge sites with merge_into\nmethods that exhaustively destructure their own struct, so adding a field\nbecomes a compile error in the merge logic instead of a silent divergence\nbetween the CLI and the LSP.\n\n- AggregatedPluginResult::merge_into + apply_workspace_prefix (core): the\n  workspace merge loop in run_plugins now prefixes each workspace result then\n  folds it in via the single union method. Pre-refactor behavior preserved\n  exactly: workspace config_patterns / used_class_members / scss_include_paths\n  (populated by run_workspace_fast but never merged) stay dropped, and\n  script_used_packages (never populated there) is cleared too so a future\n  change cannot silently alter root script-credit. Whether the populated-field\n  drops are latent bugs is tracked in #772.\n- AnalysisResults::merge_into (types): the LSP merge_results becomes a thin\n  wrapper delegating to it.\n- merge_test_source_with_all_fields drops ..Default::default() so the test\n  fixture is also a compile-time field-coverage gate.\n- Re-export FeatureFlag / FlagKind / FlagConfidence from fallow_core::results\n  so the feature_flags element type is nameable by consumers.\n\nPure refactor: no change to merged outputs (all benchmark fixtures\nbyte-identical OLD vs NEW).\n\nCloses #444.",
          "timestamp": "2026-05-29T09:14:41Z",
          "tree_id": "a57b1fcb7b92649f6808b949f48161f317161131",
          "url": "https://github.com/fallow-rs/fallow/commit/49b820fde252762f4fb4b74a2acee76f9cdea575"
        },
        "date": 1780046909394,
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
            "value": 763,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9af2175229a48f92e08f38e0a03eddbe47792a25",
          "message": "feat(config): warn when multiple config files coexist in one directory (#780)\n\nfind_and_load picks the first of .fallowrc.json > .fallowrc.jsonc >\nfallow.toml > .fallow.toml per directory. Previously a stale lower-precedence\nconfig (left over from a migration or a partial fallow init) was silently\nshadowed, so output looked correct but came from the wrong source.\n\nNow config discovery emits a deduped tracing::warn! (visible on stderr at the\ndefault level) naming the loaded file and the lower-precedence file(s) it\nignored, mirroring the existing warn_on_unknown_rule_keys path (process-wide\nOnceLock dedupe keyed on the canonical directory, thread-local test capture\nwith capture-before-dedupe). It fires once per directory per run; an explicit\n--config <path> performs no discovery and never warns.\n\nDocs and the fallow config help text now state that .fallowrc.json accepts\nJSONC and .fallowrc.jsonc is identical (the extension is only an editor hint),\nand document the first-match-wins precedence ladder.\n\nCloses #458",
          "timestamp": "2026-05-29T10:35:55Z",
          "tree_id": "a516a9285d0c810023508297377cc006b1fa1026",
          "url": "https://github.com/fallow-rs/fallow/commit/9af2175229a48f92e08f38e0a03eddbe47792a25"
        },
        "date": 1780051762367,
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
            "value": 763,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "4ff2796af4fe081fbe4aad2a25363c67df1cd359",
          "message": "refactor(v8-coverage): document oxc_coverage_v8 boundary, drop dead emitter (#784)\n\nfallow-v8-coverage and oxc_coverage_v8 solve inverse problems in opposite\nunit spaces: fallow maps real Node V8 dumps in UTF-16-code-unit space, while\noxc_coverage_v8 fills an AST-built Istanbul FileCoverage in byte space. They\nare intentionally not consolidated; record the rationale in ADR-010.\n\nReal Node (v22) emits coverage offsets in UTF-16 code units (a function\npreceded by an emoji on the same line is reported at the UTF-16 offset, not\nthe byte offset), so fallow's LineOffsetTable is correct and a byte model is\nnot. Harden the UTF-16 conformance test to assert a within-line column, where\nthat distinction is observable, instead of a line start.\n\nRemove the crate's never-consumed forward emitter (normalize_script and its\nIstanbulFileCoverage / IstanbulFunction / IstanbulRange output types). The CLI\nbuilds its own remapped output from the input structs plus LineOffsetTable, and\nCRAP scoring uses a separate local IstanbulFileCoverage, so these were dead\nwithin fallow. Keep IstanbulPosition (LineOffsetTable::position's return type)\nand retarget the null-column regression test onto it directly.\n\nNo change to the CLI's behavior, output, or the runtime-coverage wire format.\n\nFixes #509",
          "timestamp": "2026-05-29T11:45:24Z",
          "tree_id": "7c4986fe87eb66113ccf89c785b01da185440a8c",
          "url": "https://github.com/fallow-rs/fallow/commit/4ff2796af4fe081fbe4aad2a25363c67df1cd359"
        },
        "date": 1780055906226,
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
            "value": 763,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5bc8c5c64989d04f1c2310f8bdfc7a62a6de312",
          "message": "feat(flags): surface configuration hint on empty fallow flags output (#785)\n\nWhen `fallow flags` finds nothing, the human-output empty line now appends\na discovery hint: the built-in env prefixes and SDK providers fallow scanned\nfor (sourced from crates/extract/src/flags.rs, not hardcoded), plus pointers\nto flags.sdkPatterns / flags.configObjectHeuristics and the docs URL. Users\nwho already configured custom flags.* patterns get a single terse line\nacknowledging their config instead of the discovery block.\n\nJSON / SARIF / compact / markdown / codeclimate output is unchanged; no\nschema bump. --quiet still suppresses the whole block.\n\nRefs #562",
          "timestamp": "2026-05-29T11:48:11Z",
          "tree_id": "1959f593bce693e2dc1dbc4c581554ba6f70ddc9",
          "url": "https://github.com/fallow-rs/fallow/commit/b5bc8c5c64989d04f1c2310f8bdfc7a62a6de312"
        },
        "date": 1780056122531,
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
            "value": 763,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e73fdd8b0b06b973203ee55c3f404e37e56459e",
          "message": "fix(plugins): add rspress plugin crediting @theme virtual module (#787)\n\nrspress exposes its theme layer through the `@theme` build-time virtual\nmodule (and `@theme/<component>` subpaths), the same convention as\nDocusaurus. fallow had no rspress plugin, so importing `@theme` from docs\nor source surfaced as an unlisted-dependency. A new minimal rspress plugin\nactivates on `rspress` or any `@rspress/`-scoped dependency and contributes\n`@theme/` and `@theme-original/` as virtual_module_prefixes(), covering both\nunlisted-dependency and unresolved-import for the bare specifier and its\nsubpaths. Real scoped packages like `@theme-ui/core` are unaffected.\nDocusaurus already covered bare `@theme` via the existing `@theme/` entry.\n\nFixes #756",
          "timestamp": "2026-05-29T12:09:59Z",
          "tree_id": "f025e6d85827d5ffb7abb89b5e90e040676928f1",
          "url": "https://github.com/fallow-rs/fallow/commit/5e73fdd8b0b06b973203ee55c3f404e37e56459e"
        },
        "date": 1780057392335,
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
            "value": 765,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "7c3bbc09fd78a9393826abbb548855e21137f94f",
          "message": "feat(impact): add `fallow impact` value report (v1: surfacing, trend, containment) (#788)\n\n* feat(impact): add `fallow impact` value report (v1: surfacing, trend, containment)\n\nAdds an opt-in, local-only `fallow impact` command reporting what fallow has\ndone for you: how many issues it is surfacing, the trend since the last\nrecorded run, and how many commits its pre-commit gate blocked then cleared.\n\nHistory accrues in a single rolling .fallow/impact.json (gitignored) on\n`fallow audit` runs, once enabled via `fallow impact enable`. Writes are\nbest-effort and never change a command's exit code or output. The generated\npre-commit hook now tags gate runs with --gate-marker pre-commit so\nblocked-then-fixed commits are recorded as contained.\n\nPer-finding resolved/suppressed/moved attribution is intentionally deferred\nuntil active-suppression state can be captured, so a suppressed finding is\nnever miscounted as a win.\n\n* fix(impact): address review (top-level help, JSON schema surface, lint hygiene, docs)\n\nResolves the pre-ship and parallel review findings on the impact v1 feature:\n\n- Add `impact` to the top-level --help command listing + extend the\n  help-grouping test, so the new stable command is discoverable.\n- Register the `fallow impact --format json` shape in the published output\n  schema: a FallowOutput::Impact variant plus JsonSchema-derived ImpactReport,\n  ImpactCounts, TrendSummary, ImpactTrendDirection, and ContainmentEvent\n  definitions, wired into schema-emit. Regenerated docs/output-schema.json and\n  the VS Code + npm TypeScript contracts; drift and path-field gates pass.\n- Swap the three new lint suppressions from #[allow] to #[expect] (the\n  expectations are fulfilled under -D warnings).\n- Document the command in CHANGELOG, README, CLAUDE.md, and the cli-crate rules.\n\n* fix(impact): atomic store writes, scope-honest labels, unified trend vocab, latest sha\n\nAddresses the post-implementation panel review:\n\n- Persist the rolling store with `fallow_config::atomic_write` (tempfile +\n  rename) instead of plain `fs::write`, so a crash or concurrent writer can no\n  longer leave a torn file that the next load treats as corrupt and silently\n  disables tracking on. A present-but-unparsable store now warns (once) and\n  degrades, rather than silently resetting; the corrupt file is left on disk.\n- Relabel the report: the per-run counts are CHANGED-FILE scoped (each record\n  comes from a `fallow audit` run whose default new-only gate counts only\n  changed files), so 'SURFACING N issues you can act on' becomes\n  'LATEST RUN (changed files): N flagged', and the trend is qualified as\n  changed-file scope across the last two runs. Avoids presenting a per-diff\n  number as a project total.\n- Use one human-facing trend vocabulary (down/up/flat) in both the text and\n  markdown renderers via a shared `trend_arrow`; the JSON enum stays the\n  machine form.\n- Add `latest_git_sha` to the JSON report so a consumer can tell which commit\n  the counts belong to. Schema and TS contracts regenerated.\n\n* chore(security): re-bless agent-file baseline for impact docs\n\nThe impact feature added an `impact.rs` entry to `.claude/rules/cli-crate.md`\nand registered the module in `CLAUDE.md`'s crate map. Update the blessed\nhashes in scripts/agent-files.sha256 so the agent-file hidden-unicode guard\nstops flagging these two legitimate edits as drift once they land on main.",
          "timestamp": "2026-05-29T12:41:59Z",
          "tree_id": "5fb455fbfe6441394218714ca33b920cf64cd900",
          "url": "https://github.com/fallow-rs/fallow/commit/7c3bbc09fd78a9393826abbb548855e21137f94f"
        },
        "date": 1780059344114,
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
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 767,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3afc7256c1d353fc9c3331a637c944e887373902",
          "message": "feat(cli): make fallow health a usable CI gate (--min-score authoritative, --report-only) (#790)\n\nfallow health previously exited 1 whenever any above-threshold function\nexisted, regardless of the health score, so --min-score only added a second\nfail condition and 'fallow health --min-score 0' still exited 1. Health could\nonly ever be advisory.\n\nWhen --min-score N is set it is now the authoritative complexity gate: the run\nexits 0 when score >= N (so --min-score 0 always passes) and complexity findings\nare demoted to informational while still printed. --min-severity composes with\n--min-score (fail if either gate trips). Plain 'fallow health' with no gate flag\nkeeps the back-compatible behavior of exiting 1 on any finding.\n\nNew --report-only flag prints the score and findings but never fails CI (always\nexit 0); it is mutually exclusive with --min-score / --min-severity (exit 2). The\nruntime-coverage and coverage-gap gates stay independent explicit opt-ins. The\n--min-score help text now signposts 'fallow audit --gate new-only' for gating on\nnewly-introduced complexity.\n\nFixes #786",
          "timestamp": "2026-05-29T12:52:02Z",
          "tree_id": "78bbc7818c0d50a844deed514ced3644453ff49e",
          "url": "https://github.com/fallow-rs/fallow/commit/3afc7256c1d353fc9c3331a637c944e887373902"
        },
        "date": 1780059934849,
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
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 767,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3297be51072765aab0cdd9bf6fab7acd88bf152e",
          "message": "fix(impact): gitignore the store on enable; reject unsupported formats (#795)\n\nTwo gaps found smoke-testing `fallow impact`:\n\n`fallow impact enable` created `.fallow/impact.json` but did not ensure\n`.fallow/` was gitignored. In a project that had not run `fallow init` (which\ndoes add the entry), a routine `git add -A` would stage and push the store,\ncontradicting the feature's local-only / \"never uploaded\" promise that the\nenable message itself prints. `enable` now appends `.fallow/` to `.gitignore`\nbest-effort (idempotent, and a no-op when the entry already exists), so the\nguarantee holds at the moment the store is created regardless of caller. The\nhelper is self-contained in impact.rs because that module is in the library\ncrate while setup_hooks (which has the equivalent) is binary-only.\n\n`fallow impact --format sarif|compact|codeclimate|badge|...` silently fell back\nto the human report, so a CI step requesting a machine format got human text it\ncould not parse. The format dispatch is now exhaustive and rejects unsupported\nformats with exit 2 and a clear message, matching `fallow explain`. The\nsupported set (human, json, markdown) is unchanged.\n\nBoth paths are covered by a new unit test (enable gitignores, idempotent) and\nverified end-to-end.",
          "timestamp": "2026-05-29T18:37:19Z",
          "tree_id": "3ac9d81a9ade3541eb09725e8f4907755df04a24",
          "url": "https://github.com/fallow-rs/fallow/commit/3297be51072765aab0cdd9bf6fab7acd88bf152e"
        },
        "date": 1780080713713,
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
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 767,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "7f9cda0deff535e29c3fadb2521a802e8ab8ac3b",
          "message": "feat(cli): upload-static-findings subcommand for the source-evidence viewer (#796)\n\n* feat(cli): upload-static-findings subcommand for source-evidence viewer\n\nAdd `fallow coverage upload-static-findings`, the CLI emit for the\nPOST /v1/coverage/:repo/static-findings cloud endpoint (ADR 024). Runs\nfallow static analysis and uploads unused_export + dead_file verdicts\nkeyed to a git SHA, mirroring upload-inventory's structure.\n\nFindings are replace-by-SHA: each run sends the complete set for the\nSHA, so an empty set is a valid clearing (no empty-result rejection,\nunlike upload-inventory). filePath is repo-relative POSIX so it lines\nup with source-map sources in the viewer. The error classifier maps\nHTTP 413 (not 400) to PayloadTooLarge for the 200,000-finding cap.\nAuth uses a live FALLOW_API_KEY; the unauthorized hint calls out that\na publishable ingest key is rejected here.\n\n* style(cli): rustfmt upload-static-findings",
          "timestamp": "2026-05-29T18:49:39Z",
          "tree_id": "bb13b89cd7711e5c0a5cea454fe3f3d814cae1ab",
          "url": "https://github.com/fallow-rs/fallow/commit/7f9cda0deff535e29c3fadb2521a802e8ab8ac3b"
        },
        "date": 1780081752596,
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
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 767,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "20fe77f83733dc5e3bbf36135f7e0c2b4522a668",
          "message": "fix(health): surface churn-hotspot window in metrics line and markdown vital signs (#799)\n\nThe hotspot analysis window (default 6m, --since) only appeared in the\n'Hotspots (N files, since 6 months)' section header, which is omitted\nentirely at zero hotspots. The orientation 'Metrics:' line read\n'0 churn hotspots' with no anchor, so a reader could not tell zero in the\nwindow from zero ever, and the window vanished on healthy repos.\n\nAppend '(since <window>)' to the hotspot segment of the human Metrics line\nand to the markdown Vital Signs row label, sourced from\nreport.hotspot_summary.since. Falls back to no suffix when the churn\npipeline did not run (hotspot_summary absent). Human and markdown output\nonly; JSON/SARIF/compact/CodeClimate unchanged.\n\nCloses #552",
          "timestamp": "2026-05-29T19:14:07Z",
          "tree_id": "9120782b369f89f05711c11777286a4e7dd7477a",
          "url": "https://github.com/fallow-rs/fallow/commit/20fe77f83733dc5e3bbf36135f7e0c2b4522a668"
        },
        "date": 1780083017239,
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
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 767,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1eb8b5d7deeedbcf3697421ac5fba0150c227b8f",
          "message": "fix(impact): apply post-merge review polish (#798)\n\n* fix(impact): apply post-merge review polish\n\nSix findings from the post-merge team review of the (unreleased) impact\nfeature:\n\n1. ImpactReport now carries a required schema_version on the JSON wire, typed\n   as its own ImpactReportSchemaVersion discriminator (serializes as \"1\"),\n   matching the other independently-versioned envelopes. This is decoupled from\n   the on-disk store version (renamed to STORE_SCHEMA_VERSION) and from the\n   global SchemaVersion, so the store shape and the report wire shape can evolve\n   on their own cadences. Regenerated docs/output-schema.json and both TS\n   contracts.\n2. latest_git_sha is documented as an abbreviated SHA (it flows from audit's\n   short head_sha); consumers joining against a full 40-char SHA are warned in\n   the schema description rather than misled. Full-SHA emission is deferred.\n3. Human and markdown footers show the first-recorded date only (2026-05-29)\n   instead of a raw ISO timestamp, and markdown now shows it for parity with the\n   human renderer.\n4. load() emits a tracing::warn when a store's schema_version is newer than this\n   build understands, mirroring the corrupt-store warning.\n5. TREND_TOLERANCE's comment now matches its zero value.\n6. The .gitignore write in enable() goes through atomic_write, matching the\n   store write's durability.\n\nNew unit tests cover schema_version presence (enabled and disabled), the\ndate-only trim, and best-effort load of a future-version store.\n\n* docs(impact): fix rustdoc intra-doc links on ImpactReportSchemaVersion\n\nThe doc comment used `[crate::output_envelope::SchemaVersion]` (unresolved\npath) and `[STORE_SCHEMA_VERSION]` (a public item linking to a private const),\nboth of which fail under the Documentation CI job's RUSTDOCFLAGS=-D warnings\n(broken-intra-doc-links and private-intra-doc-links). Drop the intra-doc links\nto plain code spans; the references are descriptive, not navigational.",
          "timestamp": "2026-05-29T19:24:29Z",
          "tree_id": "b662a8c54e5fe30f5e06689222d5ecdfffa7e4c3",
          "url": "https://github.com/fallow-rs/fallow/commit/1eb8b5d7deeedbcf3697421ac5fba0150c227b8f"
        },
        "date": 1780083458710,
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
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 767,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "69acf17bcd03460535d3739b5b6459add545c395",
          "message": "fix(plugins): recognize SvelteKit layout-reset routes as entry points (#797)\n\n* fix(plugins): recognize SvelteKit layout-reset routes as entry points\n\nThe SvelteKit plugin matched +page.svelte / +layout.svelte literally but\nnot the @-suffixed layout-reset variants (+page@.svelte, +page@named.svelte,\n+layout@.svelte, +layout@named.svelte), so routes using SvelteKit's\nbreak-out-of-layout convention were reported as unused-file.\n\nAdd src/routes/**/+page@*.svelte and src/routes/**/+layout@*.svelte as entry\npatterns plus matching used_exports rules crediting the default export. The *\ncovers both the empty (@.svelte) and named (@named.svelte) forms;\nliteral_separator(true) keeps the match within one path segment. Only .svelte\ncomponent files take the suffix: SvelteKit throws on @ in .ts/.js route files,\nso the co-located load files are unaffected.\n\nFixes #791\n\n* test(plugins): cover SvelteKit layout-reset group form\n\nAdd a +page@(checkout).svelte fixture and assertion to\nsveltekit_layout_reset_routes_are_entry_points so the parenthesized\ngroup form of the layout-reset segment is exercised end to end. This is\nthe riskiest assumption in the +page@*.svelte entry glob: globset treats\n( and ) as literal characters, not metacharacters, so * must match the\n(group) form. Neither the existing unit nor integration test covered it.\n\nRefs #791.\n\n* chore(security): re-bless agent-file baseline for detection.md\n\nThe SvelteKit layout-reset bullet added to .claude/rules/detection.md\nchanged the file's hash; re-bless scripts/agent-files.sha256 so the\nagent-file drift gate passes. No content concern (no hidden unicode;\nplain ASCII bullet).\n\nRefs #791.",
          "timestamp": "2026-05-29T20:02:22Z",
          "tree_id": "9574d7d24c2d7e94b8ede54d7f4c431bfdcf1dd4",
          "url": "https://github.com/fallow-rs/fallow/commit/69acf17bcd03460535d3739b5b6459add545c395"
        },
        "date": 1780086184464,
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
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 767,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "2280b31dabf6cbb8a31ec083de967a43dc3276b2",
          "message": "fix(core): preserve workspace class members and scss include paths through merge (#783)\n\nThe run_plugins workspace-merge loop cleared used_class_members and\nscss_include_paths on each workspace result before folding it into the\nroot aggregate, silently dropping every workspace package's framework\ncontributions. In a monorepo where a framework is active only in a\nworkspace package (Lit/Lexical/Ember class-member allowlists, or\nAngular/Nx stylePreprocessorOptions.includePaths), the package's\nheritage-scoped class-member allowlist was dropped (false\nunused-class-member findings) and its SCSS include paths were dropped\n(false unresolved-import for @use/@import resolving via includePaths).\n\nBoth fields are prefix-agnostic (member names and absolute directories),\nso apply_workspace_prefix leaves them untouched and merge_into unions\nthem as-is. config_patterns stays cleared (inert post-merge) and\nscript_used_packages stays cleared (never populated by\nrun_workspace_fast). Single-package projects were never affected.\n\nAdds a monorepo fixture activating Lit only in packages/elements and\nAngular only in packages/ng-styles, with integration tests asserting the\npackage's Lit firstUpdated() survives the merge (with a genuinely-unused\ncontrol still flagged) and its SCSS @import 'variables' resolves.\n\nFixes #772",
          "timestamp": "2026-05-29T20:14:19Z",
          "tree_id": "8d004752700c6f1f2bf62b0fc8c791f4c8098a29",
          "url": "https://github.com/fallow-rs/fallow/commit/2280b31dabf6cbb8a31ec083de967a43dc3276b2"
        },
        "date": 1780086494676,
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
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 767,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "132771e3fb63bd67405870ba64b06b3d87b6971d",
          "message": "feat(impact): per-finding attribution crediting resolved findings (v1.5) (#803)\n\nTeach `fallow impact` to credit genuinely resolved findings while never\ncounting a `fallow-ignore` suppression as a win. Captures present-suppression\nstate during analysis (AnalysisResults.active_suppressions, an internal\nserde-skip field populated from SuppressionContext) and adds a per-file\nfrontier plus a fingerprint-keyed clone frontier to the store (bumped to\nSTORE_SCHEMA_VERSION 2, forward-compatible read of v1 stores) that audit diffs\neach run for the files it re-analyzed. Each disappearance is classified\nresolved, suppressed (conservative: a covering suppression that newly appeared\nis never a win), or moved (within-run cross-file cancellation plus a\ncross-run un-credit when a prior resolution's symbol reappears elsewhere;\nwithin-file line moves are free since the identity excludes line). Covers\ndead code, complexity, and duplication.\n\nSurfaces resolved_total, suppressed_total, and a recent-resolutions list\n(ResolutionEvent) in human, json (schema-registered), and markdown, with\nneutral \"marked intentional\" wording, an always-present RESOLVED section, an\nhonest empty state, a bounded recent list, and on-disk frontier pruning.\nAttribution is documented as a local-developer signal that accrues only where\n.fallow/impact.json persists across runs. Boundary-violation identities are\nforward-slash normalized for cross-platform stability.\n\nBuilds on the unreleased impact v1 (surfacing/trend/containment) and its\n#795/#798 follow-ups (gitignore-on-enable, format rejection, report wire\nschema_version). No MCP/LSP/CI surface in this change.",
          "timestamp": "2026-05-29T20:22:07Z",
          "tree_id": "22bdd109bddfdc98624bbe9daaf5e64d67af7e33",
          "url": "https://github.com/fallow-rs/fallow/commit/132771e3fb63bd67405870ba64b06b3d87b6971d"
        },
        "date": 1780087225372,
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
            "value": 0.31,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 770,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db4a8cc6b595d04a2d8f946da8b1770d766a06d6",
          "message": "feat(mcp): expose fallow impact as a read-only MCP tool (#804)\n\n* feat(mcp): expose fallow impact as a read-only MCP tool\n\nAdd an \"impact\" tool wrapping \"fallow impact --format json\" so AI agents\ncan read the local value report (surfacing, trend, gate containment, and\nv1.5 resolved/suppressed attribution) the same way they query check_health\nand audit. Impact was the only first-class CLI surface with no MCP tool.\n\nThe tool is read-only and root-only: it runs no analysis and reads only\n.fallow/impact.json, so the config / no_cache / threads knobs the analysis\ntools expose are omitted as inert. The mutating enable / disable lifecycle\nis intentionally not exposed; on an enabled:false report the agent should\nrecommend the user run \"fallow impact enable\", not toggle it. Annotated\nread_only_hint=true, idempotent_hint=true, open_world_hint=false (a single\nclosed-world local file read, like fallow_explain).\n\n* docs(mcp): document the impact MCP tool\n\nBump the fallow-mcp tool count to 21 and add an impact entry in\n.claude/rules/mcp-server.md, add a CHANGELOG [Unreleased] note, and\nre-bless scripts/agent-files.sha256 for the rules-file edit (CI drift gate).",
          "timestamp": "2026-05-29T20:52:35Z",
          "tree_id": "01a38e3a6c5c5c1bc97576d9265737b97887e250",
          "url": "https://github.com/fallow-rs/fallow/commit/db4a8cc6b595d04a2d8f946da8b1770d766a06d6"
        },
        "date": 1780088622862,
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
            "value": 0.31,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 770,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0cb61ab23a37e0189decdfcc344eeaf676050f7",
          "message": "fix(plugins): credit @nuxt/content content.config.ts as a default-export entry (#801)\n\n* fix(plugins): credit @nuxt/content content.config.ts as a default-export entry\n\n@nuxt/content v3 reads a root content.config.ts (export default\ndefineContentConfig(...)) at build time; nothing in app source imports it,\nso fallow reported it as unused-file plus unused-export. When @nuxt/content\nis registered in the nuxt.config modules: array, credit\ncontent.config.{ts,js,mts,mjs,cts,cjs} (config-dir-relative) as a\ndefault-export entry via the existing push_used_export_rule path.\n\nGated on module registration rather than mere package.json presence: an\ninstalled-but-unregistered @nuxt/content leaves a genuinely-orphan\ncontent.config correctly flagged. Scoped to the first-party @nuxt/content\nonly (per #138).\n\nFixes #792\n\n* docs(plugins): document @nuxt/content content.config crediting (#792)\n\ndetection.md bullet + plugins.md Nuxt line + CHANGELOG [Unreleased] entry,\nand re-bless scripts/agent-files.sha256 for the detection.md/plugins.md edits.",
          "timestamp": "2026-05-29T22:04:38Z",
          "tree_id": "312dd6e5be2e8c222e31c4c0b4adc6429bb955ad",
          "url": "https://github.com/fallow-rs/fallow/commit/b0cb61ab23a37e0189decdfcc344eeaf676050f7"
        },
        "date": 1780093090555,
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
            "value": 0.31,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 770,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a483c3144b8641acdee3d6c967358a99ada205b",
          "message": "refactor(plugins): move tooling list to TOML catalogue (#806)\n\n* refactor(plugins): move tooling list to data-driven TOML catalogue, drop framework-plugin shadows\n\nMove the hardcoded prefix + exact tooling lists in tooling.rs into a\ncommunity-maintainable crates/core/data/tooling.toml, embedded via\ninclude_str! and parsed once at startup behind a OnceLock. is_known_tooling_dependency\nkeeps its API; adding a tool is now a one-line TOML edit with no regen step.\n\nDrop the framework-plugin-specific exact entries (vite-plugin-svgr,\nvite-plugin-eslint, prettier-plugin-tailwindcss, prettier-plugin-organize-imports,\n@ianvs/prettier-plugin-sort-imports). These were a false negative: a plugin\ndeclared in devDependencies but never wired into the config was silently\ntreated as used by the exact-name shadow. They are now credited only when they\nactually appear (vite plugins via the import graph on the discovered config\nfile; prettier plugins via the Prettier config parser), so a declared-but-unused\nplugin correctly surfaces.\n\nClose the prettier gap: parse the plugins array from .prettierrc.{yml,yaml,toml}\n(the import graph cannot read non-JS config), so YAML/TOML configs keep their\nlisted plugins credited.\n\nGuards (parse tests): pattern/name required, empty/whitespace prefixes rejected\n(an empty prefix would match every package), duplicates rejected, and\nvite-plugin-* / prettier-plugin-* / eslint-plugin-* / @rollup/plugin-* rejected\nas exact entries so the shadow cannot be reintroduced via a TOML PR.\n\nRefs #462\n\n* docs(plugins): document data-driven tooling catalogue + framework-plugin shadow removal\n\n- CONTRIBUTING.md: 'Adding a known tooling dependency' section (one TOML entry, no regen, validation command, framework-plugin exclusion).\n- detection.md: known-tooling catalogue bullet covering the data-driven move and the shadow-removal behavior change.\n- plugins.md: Prettier entry now notes YAML/TOML + package.json#prettier plugin parsing and the credit-only-when-listed behavior.\n- CHANGELOG [Unreleased] Changed: behavior change (declared-but-unused framework plugins now surface) + the catalogue move.\n- Re-bless scripts/agent-files.sha256 for the detection.md + plugins.md edits.\n\nRefs #462",
          "timestamp": "2026-05-29T22:31:50Z",
          "tree_id": "c0c6a9116ee88cf11697921a3ac6650273b01e14",
          "url": "https://github.com/fallow-rs/fallow/commit/8a483c3144b8641acdee3d6c967358a99ada205b"
        },
        "date": 1780094679548,
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
            "value": 0.31,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 770,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "005462b33c2696e8a810721f3fdd4a92495498d0",
          "message": "fix(plugins): credit oxlint CLI tooling packages (oxlint-tsgolint) as used (#802)\n\n* fix(plugins): credit oxlint CLI tooling packages (oxlint-tsgolint) as used\n\noxlint-tsgolint is the type-aware companion package the oxlint binary loads\nat runtime (via --type-aware / options.typeAware). It is never imported in\nsource nor listed in an .oxlintrc.json jsPlugins array, so the #607 jsPlugins\ncredit does not cover it. When declared in prod dependencies (where the general\ntooling-prefix credit does not apply, that only covers devDependencies), it was\nfalsely reported as unused.\n\nAdd oxlint-tsgolint to the oxlint plugin's tooling_dependencies, which is honored\nfor both prod and dev categories and is gated on the oxlint plugin being active.\nExact-name credit, not an oxlint- prefix, so an unrelated oxlint-prefixed prod\ndependency still reports.\n\nFixes #753\n\n* docs(plugins): document oxlint CLI tooling credit (oxlint-tsgolint)\n\ndetection.md + plugins.md note the exact-name oxlint-tsgolint tooling credit,\nCHANGELOG [Unreleased] gets the user-facing entry, and the agent-file baseline\nis re-blessed for the two edited rule files.\n\nRefs #753",
          "timestamp": "2026-05-30T05:37:34Z",
          "tree_id": "0eec03b87d2697abd80008cd7eeddb698138cbac",
          "url": "https://github.com/fallow-rs/fallow/commit/005462b33c2696e8a810721f3fdd4a92495498d0"
        },
        "date": 1780120243542,
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
            "value": 0.31,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 770,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f928483d8635fc322e5954473772b45d085881d",
          "message": "fix(plugins): credit eslint meta-preset plugins pulled via peerDependencies (#805)\n\nA flat config that calls a preset factory (export default antfu({...}))\nnames no individual plugins, so the plugins the preset enables (declared\nas its own optional peerDependencies) surfaced as unused-dev-dependency.\nThe flat-config plugins object-key credit had nothing to match, and the\ngeneric required-peer-dependency closure intentionally skips optional peers.\n\nWhen the ESLint config imports a package whose name matches a preset shape\n(eslint-config-* or @scope/eslint-config[-*]), fallow now reads that preset's\nown package.json and credits the eslint-ecosystem entries (eslint-plugin-*,\nscoped plugins, shareable configs, parsers, import resolvers) it declares in\ndependencies / peerDependencies / optionalDependencies. General-purpose runtime\ndeps (globals, ansis) are excluded, and a plain plugin import does not pull in\nits own dependency fan.\n\nOn the real-world repro (antfu({...}).append({...})) this credits the three\nplugins antfu 9 genuinely pulls (@eslint-react/eslint-plugin, eslint-plugin-format,\neslint-plugin-react-refresh); plugins the preset does not declare stay reported.\n\nCloses #754.",
          "timestamp": "2026-05-30T10:59:11Z",
          "tree_id": "2075bfbb948d319cf4d2f856d649af79c434c210",
          "url": "https://github.com/fallow-rs/fallow/commit/5f928483d8635fc322e5954473772b45d085881d"
        },
        "date": 1780139555879,
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
            "value": 0.31,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 770,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d5c5a722b0bf86c9c3c5169c96d1ea3ccf7d9bd",
          "message": "fix(dupes): forward-slash normalize paths in human output on Windows (#807)\n\nThe clone-group, clone-family, and grouped-bucket listings in\nreport/human/dupes.rs rendered file paths via raw relative_path().display(),\nwhich emits backslashes on Windows (src\\copy1.ts) instead of the forward\nslashes used everywhere else in fallow output. The directory/filename split\nkeys on '/', so it also misfired on those paths. This made the\ndupes_human_output snapshot test fail on windows-latest CI.\n\nRoute all four sites through crate::report::format_display_path (the same\nhelper the family-names branch already uses), which appends .replace('\\\\',\n\"/\"). No change on Unix (no backslashes to replace); Windows output now\nmatches the committed forward-slash snapshot.",
          "timestamp": "2026-05-30T12:13:00Z",
          "tree_id": "47f9d1faeb684c74d0d49cc528e38472bd994ff3",
          "url": "https://github.com/fallow-rs/fallow/commit/6d5c5a722b0bf86c9c3c5169c96d1ea3ccf7d9bd"
        },
        "date": 1780143852417,
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
            "value": 0.31,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 770,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbb3e0233abf8ffa3af3ccf8c345552422b68f7f",
          "message": "fix(dupes): make clone fingerprints CRLF-invariant for cross-platform stability (#809)\n\nThe clone fingerprint (dup:<id>) hashes a group's representative source\nfragment via xxh3. The fragment carried the raw line endings, so a CRLF\n(Windows) checkout produced a different hash than an LF (Unix) checkout for\nidentical code, breaking `dupes --trace dup:<id>` and fingerprint-keyed\nbaselines across platforms (e.g. Windows dev vs Linux CI). This also made the\ndupes_human_output snapshot fail on windows-latest after the path-separator\nfix landed (the only remaining diff was the fingerprint).\n\nAdd a hash_fragment helper that strips \\r before hashing and route both\nfingerprint sites (CloneFingerprintSet::from_groups and\nfingerprint_for_fragment) through it. The strip is a no-op on Unix-checkout\nfragments, so existing fingerprints and the committed snapshot are unchanged.\n\nAlso pin tests/fixtures/** to LF via .gitattributes so fixture bytes (and\nthus snapshot output) are deterministic across platforms regardless of\ncore.autocrlf.",
          "timestamp": "2026-05-30T12:44:58Z",
          "tree_id": "7ec0cd6352b6d3953a5c955060498f327e96a94b",
          "url": "https://github.com/fallow-rs/fallow/commit/bbb3e0233abf8ffa3af3ccf8c345552422b68f7f"
        },
        "date": 1780145930781,
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
            "value": 0.31,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 770,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "986651adbe6817842da67fdd126eca359e33bbd5",
          "message": "feat(coverage): upload each source map's repo-relative path for monorepo source resolution (#810)\n\nupload-source-maps now sends the map file's path relative to the repo\nroot (e.g. dashboard/dist/assets/X.js.map) alongside the existing\nfileName, as a new optional mapPath field. The fallow.cloud\nsource-evidence viewer uses it to resolve a map's relative sources[]\n(../../src/components/X.tsx) against the map's directory, recovering the\npackage-prefixed path dashboard/src/components/X.tsx so it matches the\nmonorepo-relative runtime coverage path. Previously only the basename\nwas known, so the cloud collapsed ../../src/X to src/X and the viewer\nreported source_not_in_maps for monorepo sub-packages.\n\nThe field is omitted when a map is not under the repo root (an absolute\n--dir outside it); the cloud then falls back to its prior root-anchored\nnormalization, so the change is backwards compatible and a no-op for\nsingle-package projects. fileName and --strip-path are unchanged.\n\nCloses fallow-rs/fallow-cloud#260.",
          "timestamp": "2026-05-30T17:00:19Z",
          "tree_id": "425d5323b3ea41b2261ecc8e87f99e94abf893dc",
          "url": "https://github.com/fallow-rs/fallow/commit/986651adbe6817842da67fdd126eca359e33bbd5"
        },
        "date": 1780161198312,
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
            "value": 0.31,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 770,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "238ca291e95bdf9b70018a132bb52ec9b437b1ee",
          "message": "feat(impact): whole-project value track credited from full fallow runs (#812)\n\nAdd a separate whole-project Impact track recorded best-effort at the\nend of a full fallow run, kept apart from the changed-file audit track\nso the two scopes never share a trend. A full run also credits\nduplication and whole-repo cleanups fixed outside a changed-file audit.\n\nThe writer is gated airtight so it records only on a true whole-repo run\n(check + dupes + health, no scope-narrowing flags, no diff filter, no\nproduction mode). A reshaped clone still duplicated under a new\nfingerprint is not falsely credited resolved. ImpactReport gains\noptional project_surfacing and project_trend (report schema_version\nstays 1); human and markdown render an understated whole-project\nsection labelled context, not a to-do.",
          "timestamp": "2026-05-30T20:32:55Z",
          "tree_id": "f3c5e7b2ca700bfbfe3aa87d0b8f9f08744b5d8d",
          "url": "https://github.com/fallow-rs/fallow/commit/238ca291e95bdf9b70018a132bb52ec9b437b1ee"
        },
        "date": 1780173967664,
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
            "value": 0.31,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 770,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b1f7da57699cd3a92a409967f2d8460a6f306f2a",
          "message": "chore: release v2.85.0 (#815)",
          "timestamp": "2026-05-30T21:22:21Z",
          "tree_id": "7a381898583ee1ee23f233c7e3191d86da6ab105",
          "url": "https://github.com/fallow-rs/fallow/commit/b1f7da57699cd3a92a409967f2d8460a6f306f2a"
        },
        "date": 1780176953477,
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
            "value": 0.31,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 770,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cab4ab3dacdefa41a43f2172801f189ea42b5df4",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.85.0 (#816)\n\n* chore(napi): sync package.json / package-lock / index.js to v2.85.0\n\n* docs(telemetry): bump payload example version to 2.85.0",
          "timestamp": "2026-05-30T22:04:25Z",
          "tree_id": "be9ac7e6e6fde965133ae6e9402ecafe207cc518",
          "url": "https://github.com/fallow-rs/fallow/commit/cab4ab3dacdefa41a43f2172801f189ea42b5df4"
        },
        "date": 1780179503377,
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
            "value": 0.31,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 327,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 770,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niels.mentink@gmail.com",
            "name": "Niels Mentink",
            "username": "V1RE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a157e80af66838463fde5c0a21d5c470dd76635",
          "message": "fix: mark vercel.ts config as used (#821)\n\n* fix: mark vercel ts config as used\n\n* chore: address Vercel plugin review follow-ups\n\nUpdate the documented built-in plugin count after adding the Vercel plugin and list deployment-oriented plugins separately in the README table.\n\nRename the Vercel regression fixture and integration test from issue 819 to issue 820 so the test history matches the bug this PR closes.\n\nRefs #820.\n\n---------\n\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-06-01T07:11:29Z",
          "tree_id": "066feaed586c60e2529c090c00c9bae5c17cab9c",
          "url": "https://github.com/fallow-rs/fallow/commit/5a157e80af66838463fde5c0a21d5c470dd76635"
        },
        "date": 1780298546206,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niels@ment.ink",
            "name": "Niels Mentink",
            "username": "V1RE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "618e24ac0555a3e627905720fdb1f83323252b28",
          "message": "fix: credit package.json prettier string configs (#819)",
          "timestamp": "2026-06-01T07:41:00Z",
          "tree_id": "305062407a449d44c95f2e968191496aec0ca03e",
          "url": "https://github.com/fallow-rs/fallow/commit/618e24ac0555a3e627905720fdb1f83323252b28"
        },
        "date": 1780300460965,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
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
          "id": "a8e5d02f872a8aca8fb4eaf14d02693fd28ed848",
          "message": "Merge pull request #822 from fallow-rs/comment-cleanup\n\nfix(mcp): restore schema descriptions and regenerate schema",
          "timestamp": "2026-06-01T10:14:12+02:00",
          "tree_id": "1ae10301813b78020b2ddc76cf4427858637cb1f",
          "url": "https://github.com/fallow-rs/fallow/commit/a8e5d02f872a8aca8fb4eaf14d02693fd28ed848"
        },
        "date": 1780301721318,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e4f488b6130e5514e00850cc64bc7aa00baa846a",
          "message": "refactor(plugins): drop json from alias sibling extension probe\n\nJSON parses as a bare expression with no export, so find_exported_init can\nnever recover an alias literal from it; probing .json was dead I/O.",
          "timestamp": "2026-06-01T10:18:01+02:00",
          "tree_id": "b4d0a3021ad4cc9173d55c05e3d5a40e9e0c19f6",
          "url": "https://github.com/fallow-rs/fallow/commit/e4f488b6130e5514e00850cc64bc7aa00baa846a"
        },
        "date": 1780302158962,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2005da8df9f06501189cb65d2c7c9a664abc96cc",
          "message": "chore(vscode): regenerate output-contract TS after output-schema change\n\nThe output schema was regenerated when doc comments were cleaned up, but\nthe dependent TypeScript contracts (`editors/vscode/src/generated/` and\n`npm/fallow/types/`) were not, so the VS Code Extension `check:codegen`\ngate failed with the generated files out of date with\n`docs/output-schema.json`. Regenerated via `codegen:types` so the\ncontracts match the current schema.",
          "timestamp": "2026-06-01T10:42:14+02:00",
          "tree_id": "76f30ef02ac879a25004c6d4524d7810a3ee7c5d",
          "url": "https://github.com/fallow-rs/fallow/commit/2005da8df9f06501189cb65d2c7c9a664abc96cc"
        },
        "date": 1780303406713,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niels@ment.ink",
            "name": "Niels Mentink",
            "username": "V1RE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b747ddcc3e2b1d00a60a27212b43e0c8bc02513",
          "message": "fix(resolve): preserve pnpm package source aliases (#824)\n\n* fix: preserve pnpm package source aliases\n\n* fix(resolve): keep resolved package name for bare path-alias imports\n\nFollow-up to the pnpm package-source-alias fix: package_usage_name_for_resolved_package\ncredited the declared specifier for every bare specifier, but Node.js subpath\nimports (#foo), ~/ , @/ , @@/ and PascalCase scope aliases are also bare and can\nmap to an external npm package whose real name is only recoverable from the\nresolved node_modules path. Guard the declared-name branch with !is_path_alias so\nthose keep the resolved-package name, preventing a false unused-dependency when a\npackage.json imports map points at an external package. Adds a direct regression\ntest for the pnpm-alias, scoped-subpath, common, #import-guard, and not-in-node_modules\ncases.\n\n---------\n\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-06-01T08:50:15Z",
          "tree_id": "d5d8089d8f32730e83a73bcb3f782ee1a687b9dd",
          "url": "https://github.com/fallow-rs/fallow/commit/1b747ddcc3e2b1d00a60a27212b43e0c8bc02513"
        },
        "date": 1780303880608,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "f84edcc82320d3cb3caa861bdba10e1d9114e505",
          "message": "fix(plugins): suppress built-in-only config_patterns collision warning\n\nThe silent-fail plugin diagnostic (#479) warned about config_patterns\ncollisions between two built-in plugins, e.g. vite and tanstack-router\nboth claiming vite.config.{ts,js,mts,mjs} (tanstack-router parses the\ntanstackRouter({...}) call there to find a custom generatedRouteTree\npath). The collision is benign: Phase 3a config matching runs every\nmatching plugin's resolve_config independently, so there is no data\nloss. The warning is also un-actionable for a built-in: its advice to\nrename the pattern or remove the duplicate plugin cannot be followed.\n\ndetect_pattern_collisions now emits a finding only when at least one\nowner is NOT a built-in plugin. Keying suppression on the built-in name\nset (rather than the external set) is robust even if a user-authored\nexternal plugin shares a built-in's name: the built-in owner alone never\nre-enables the warning. Built-in-vs-external and external-vs-external\ncollisions still warn. Regression tests use the real vite +\ntanstack-router pair (silent), a built-in-vs-external pair (warns), and a\nname-shadowing external (still silent).\n\nCloses #808",
          "timestamp": "2026-06-01T11:03:01+02:00",
          "tree_id": "e3b6c4124792f74ce5962ef320151b8ddac65f0b",
          "url": "https://github.com/fallow-rs/fallow/commit/f84edcc82320d3cb3caa861bdba10e1d9114e505"
        },
        "date": 1780304698142,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d36365a6311919213b6d38b89d6084e67855c263",
          "message": "fix(health): clarify CRAP coverage hints\n\nHuman health output now explains whether CRAP scores come from Istanbul coverage or fallow's export-reference estimate. Mixed Istanbul runs also call out that unmatched functions fall back to estimates, so the high-complexity section no longer shows CRAP values without provenance.\n\nThe top-level parser now catches the common bare --coverage typo before clap suggests unrelated global flags. The regular subcommand error path is preserved for commands that do not support coverage, and focused tests cover both paths plus the human-output coverage notes.\n\nRefs #474.",
          "timestamp": "2026-06-01T11:40:49+02:00",
          "tree_id": "22d6824dfa78c51215e0d2705f405b0775311e85",
          "url": "https://github.com/fallow-rs/fallow/commit/d36365a6311919213b6d38b89d6084e67855c263"
        },
        "date": 1780306929322,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "40f7519af2a9039ba344867231791991e4b7f953",
          "message": "fix(health): detect Istanbul notes from match counts\n\nComplexity-only health output intentionally omits summary.coverage_model, but it can still include Istanbul match counters when --coverage or auto-detected coverage is active. The human CRAP provenance note now treats those counters as the source signal, so mixed coverage runs no longer claim every CRAP score is estimated.\n\nA regression test covers this complexity-only shape using Istanbul match counts without a populated coverage_model.\n\nRefs #474.",
          "timestamp": "2026-06-01T11:49:10+02:00",
          "tree_id": "99c09511f4ea18abda4b6a0072c365868a36ef34",
          "url": "https://github.com/fallow-rs/fallow/commit/40f7519af2a9039ba344867231791991e4b7f953"
        },
        "date": 1780307428090,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "4989d5e09f35689a525c2d9bc30f2ca4763d09a3",
          "message": "chore(lints): require unwrap and expect justifications\n\nEnable the workspace clippy unwrap_used and expect_used lints so new panic-prone calls need an explicit local reason instead of slipping into production code unnoticed.\n\nProduction sites now either avoid the panic path or carry scoped expectations for analyzer invariants such as validated glob patterns, infallible string formatting, hard-coded regexes, and guarded graph traversal state. Test and benchmark entry points get cfg/test allowances so fixture setup can stay concise without weakening release builds.\n\nThis is limited to the lint ratchet and required mechanical cleanup. It does not change CLI output contracts or analysis semantics.\n\nFixes #446.",
          "timestamp": "2026-06-01T11:59:58+02:00",
          "tree_id": "f697278aa4080de1b6f479c2330b3c839b23c76f",
          "url": "https://github.com/fallow-rs/fallow/commit/4989d5e09f35689a525c2d9bc30f2ca4763d09a3"
        },
        "date": 1780308077803,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5340c6912fab59e9a963c66d50e52306e1203ee7",
          "message": "test(coverage): isolate git fixture signing\n\nCoverage upload tests create temporary git repositories to exercise dirty-worktree validation. Those repos should not inherit global commit signing settings from the developer machine or agent environment.\n\nDisable commit.gpgsign inside the fixture repositories while keeping the local author identity explicit. This keeps the tests focused on worktree state instead of host GPG availability.",
          "timestamp": "2026-06-01T12:47:59+02:00",
          "tree_id": "88403513b28353735f2cfc005de037a57ef73db8",
          "url": "https://github.com/fallow-rs/fallow/commit/5340c6912fab59e9a963c66d50e52306e1203ee7"
        },
        "date": 1780311010314,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b54c3be7ea7af3c6dd49932de28d8b35941e744d",
          "message": "test(schema): allow schema drift expects\n\nThe schema-emit CI path runs clippy against the test build of fallow-schema-emit with the schema-emit feature enabled. Its drift tests intentionally use expect calls for invariant checks over the committed schema.\n\nAdd the same test-only unwrap and expect allowance used by other test entry points so production schema generation remains covered while CI can compile the drift checks under the workspace lint ratchet.",
          "timestamp": "2026-06-01T13:04:43+02:00",
          "tree_id": "9b72c8141951b37314efc21f1d99072365c6df91",
          "url": "https://github.com/fallow-rs/fallow/commit/b54c3be7ea7af3c6dd49932de28d8b35941e744d"
        },
        "date": 1780311960195,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d57b9ba37630c6b5f9cf748b6a25ae3bb9a6c6bb",
          "message": "refactor(plugins): type config path parsing\n\nPath-shaped values extracted from JavaScript and TypeScript config files now flow through typed PathBuf helpers instead of plain strings. The parser keeps plugin output in forward-slash string form at the boundary, while webpack, Nuxt, Vite, SvelteKit, TypeScript, Wrangler, and Docusaurus consume filesystem paths internally where appropriate.\n\nThis keeps package-style alias semantics out of scope and preserves the existing PluginResult contract. Regression coverage now exercises mixed separators, project-root-style leading slashes, imported alias spread kind preservation, webpack context entries, and Nuxt srcDir normalization.\n\nFixes #448.",
          "timestamp": "2026-06-01T13:39:26+02:00",
          "tree_id": "456a9d8b8de6820a54b1563bfcdfcb55adc71c94",
          "url": "https://github.com/fallow-rs/fallow/commit/d57b9ba37630c6b5f9cf748b6a25ae3bb9a6c6bb"
        },
        "date": 1780314058779,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "351f2cd34cf7abe42f57a5053e7852e61eb2b307",
          "message": "feat(nuxt): resolve script auto-import providers\n\nNuxt composables and utils can be referenced from scripts without explicit imports, so fallow now records unresolved value identifiers during JS, TS, and SFC script extraction and resolves them through the plugin auto-import table during graph build.\n\nThe Nuxt plugin scans convention script providers, including recursive shared utils and shared types, emits named and default export rules, and keeps custom imports configs on the fallback entry-pattern path. The resolver skips known JS, Web, Vue, and Nuxt built-ins so framework globals do not credit user files by accident.\n\nRegression fixtures cover zero-import script setup usage, normal TS files, default basename exports, collisions, explicit imports, local shadowing, built-ins, type-only references, and custom imports config fallbacks.\n\nFixes #739.",
          "timestamp": "2026-06-01T14:42:18+02:00",
          "tree_id": "4fad3bc5f4b9d1dbde527d7675d4ef1cc474ce63",
          "url": "https://github.com/fallow-rs/fallow/commit/351f2cd34cf7abe42f57a5053e7852e61eb2b307"
        },
        "date": 1780317814016,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c72736fbf9c7df6cdf0c09541e0f68cc12e87e81",
          "message": "feat(schema): add JSON kind discriminator\n\nFallow's object-shaped JSON roots previously required consumers to infer report type from field presence. That was fragile for generated contracts and agent integrations, especially while the legacy check command continues as an alias.\n\nSerialize typed FallowOutput roots with canonical kind values, add --legacy-envelope to remove only the document-root discriminator for one cycle, and keep check deprecated with dead-code wire names. Schema emission now rewrites the FallowOutput union into draft-07 allOf intersections so validators and TypeScript codegen see the discriminator.\n\nRefresh generated schemas, snapshots, N-API option docs and tests, and packaged agent guidance. Helper roots such as flags, non-boundary list, SARIF, and CodeClimate stay outside this migration.\n\nFixes #413.",
          "timestamp": "2026-06-01T15:04:35+02:00",
          "tree_id": "5fb71993fcc679c4bff5815cdcd83ef12bcb2e73",
          "url": "https://github.com/fallow-rs/fallow/commit/c72736fbf9c7df6cdf0c09541e0f68cc12e87e81"
        },
        "date": 1780319179513,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b888a0bd7b5db2d4698cf64ca414bc0041d76309",
          "message": "feat(health): expose CRAP source consistency\n\nCRAP health findings now keep their coverage provenance visible across the JSON contract. The health report summary and grouped health buckets expose coverage_source_consistency so agents can distinguish uniform source data from mixed Istanbul and estimated inputs.\n\nThe scoring path now centralizes CRAP coverage source precedence: Angular template inheritance wins first, Istanbul data wins next, and static estimates remain the fallback. Istanbul path canonicalization stays inside the Istanbul branch so ordinary static scoring does not add filesystem work.\n\nThe secondary CRAP refactor action also moves from a fixed internal constant to health.crapRefactorBand, with config schema, output schema, generated TypeScript contracts, MCP prose, and tests updated around the new contract.\n\nFixes #474.",
          "timestamp": "2026-06-01T15:16:04+02:00",
          "tree_id": "9a9a38239174b0ac0d0362dbdadd2dd912c89864",
          "url": "https://github.com/fallow-rs/fallow/commit/b888a0bd7b5db2d4698cf64ca414bc0041d76309"
        },
        "date": 1780319880378,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e855cab3f26e5b73854af4185aeb2b0d92c8aeef",
          "message": "fix(plugins): clarify TanStack route ignore regex warnings\n\nTanStack Router accepts JavaScript regular expressions for routeFileIgnorePattern, but fallow validates route ignore patterns with Rust's regex engine before matching route file segments. JavaScript-only syntax such as lookahead should not look like a generic user typo or a future hard-error candidate in v2.\n\nThis keeps the existing warn-and-ignore behavior and routes TanStack segment-regex failures through a compatibility-specific warning. Generic plugin exclude regex diagnostics keep the existing wording, and the registry tests cover live unsupported pattern shapes plus the unchanged strip behavior.\n\nRefs #513.",
          "timestamp": "2026-06-01T17:26:25+02:00",
          "tree_id": "3e7358d4ebb747852d2cb0b22b376fc7bbd0f189",
          "url": "https://github.com/fallow-rs/fallow/commit/e855cab3f26e5b73854af4185aeb2b0d92c8aeef"
        },
        "date": 1780327667255,
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
            "value": 328,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 772,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ee7c5c2b3e57845140a898905a7e035ab6cab02d",
          "message": "feat(security): add client-server leak scan\n\nAdd an opt-in fallow security command for local security candidates. The MVP enables a single graph-structural client-server-leak rule that starts at React client boundaries and reports direct or transitive access to non-public process.env values.\n\nWire the command through human, JSON, and SARIF output with typed root envelopes, suppress actions, schema/codegen updates, cache versioning, and CI flag parity. Security candidates stay outside bare fallow and audit, and the findings remain framed for human or agent verification rather than as confirmed vulnerabilities.\n\nKeep incremental CI filtering trace-aware so a changed secret-source module on an existing client import path is not silently dropped.",
          "timestamp": "2026-06-01T17:35:14+02:00",
          "tree_id": "db995891fb2707ad112c1df529324bb0f3eb439e",
          "url": "https://github.com/fallow-rs/fallow/commit/ee7c5c2b3e57845140a898905a7e035ab6cab02d"
        },
        "date": 1780328508132,
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
            "value": 330,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 778,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a0fec05ac5d4a8ffdaf975c2c62780d8c15d83e8",
          "message": "fix(coverage): use srcmap offset lookup for remapping\n\nUpdate the direct CLI source-map consumer to srcmap v0.3.7 so runtime coverage remapping can use GeneratedOffsetLookup for generated-source position lookup.\n\nKeep the dependency aliased because oxc_coverage_instrument still exact-pins the registry srcmap v0.3.6 packages. The remapper preserves the existing V8 UTF-16 offset contract by converting those offsets to generated-source byte offsets before calling the new srcmap lookup helper.",
          "timestamp": "2026-06-01T18:09:54+02:00",
          "tree_id": "b77099d317d2d7cdaba6381dcd7f800071e741e4",
          "url": "https://github.com/fallow-rs/fallow/commit/a0fec05ac5d4a8ffdaf975c2c62780d8c15d83e8"
        },
        "date": 1780330284346,
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
            "value": 330,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 778,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b75aa9f9e05fe6d713ba436cfa68855761f1d2f2",
          "message": "fix(coverage): use registry srcmap dependencies\n\nMove fallow onto oxc_coverage_instrument 0.7.6, which depends on the registry-published srcmap 0.3.7 crates. This removes the temporary git source alias while keeping the GeneratedOffsetLookup remapping path in place.\n\nUpdate the CLI fixture construction for the newer FileCoverage shape, refresh the stale agent-file manifest that was already failing CI, and align VS Code test fixtures with the generated output contract.",
          "timestamp": "2026-06-01T19:14:01+02:00",
          "tree_id": "cd845142b8b04970956f63d85fea28c675b48ca4",
          "url": "https://github.com/fallow-rs/fallow/commit/b75aa9f9e05fe6d713ba436cfa68855761f1d2f2"
        },
        "date": 1780334770374,
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
            "value": 330,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 778,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5d142fa900321ab2f997eebefb19d9db1bd806a4",
          "message": "fix: ignore Svelte script src imports\n\nSvelte treats markup-level script src tags as runtime HTML, including tags in svelte:head. The extractor still parses src metadata for spans, but only Vue external scripts emit graph imports now.\n\nThis keeps root-relative browser assets out of unresolved-imports while preserving Vue script src and SFC style src behavior. The cache version is bumped to drop stale synthetic Svelte script edges.\n\nFixes #835.",
          "timestamp": "2026-06-01T20:32:49+02:00",
          "tree_id": "2ba71c88026959f2b76c5afbb76251a7279e6f5e",
          "url": "https://github.com/fallow-rs/fallow/commit/5d142fa900321ab2f997eebefb19d9db1bd806a4"
        },
        "date": 1780338888778,
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
            "value": 330,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 778,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "216094f3ecfc0452033d9a81c6c89b21150d4724",
          "message": "fix(pinia): resolve Nuxt store auto-imports\n\nPinia's Nuxt module makes direct stores/ and app/stores/ files available to user code without imports. Fallow already captured unresolved script identifiers for Nuxt auto-imports, but it had no plugin rules mapping store factory names back to store files.\n\nAdd a Pinia plugin activated by @pinia/nuxt. It contributes analysis-time auto-import rules for value exports named use<Name>Store from direct default store directories, which keeps the provider file and matching export reachable while leaving unrelated sibling exports reportable.\n\nNested store directories and custom storesDirs config remain out of scope for the default detector. The regression fixtures cover the supported directories, disabled activation, type-only exports, non-store exports, and nested-store exclusion.\n\nFixes #740.",
          "timestamp": "2026-06-01T20:41:36+02:00",
          "tree_id": "e43bde7cf96742d1ea189a94198f43fccccd8d83",
          "url": "https://github.com/fallow-rs/fallow/commit/216094f3ecfc0452033d9a81c6c89b21150d4724"
        },
        "date": 1780339395349,
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
            "value": 331,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 780,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5efa81c680e8f5a0af1d7cede4d34c68acac572e",
          "message": "test: cover runtime-coverage pure helpers (sidecar, source-map, utf16)\n\nAdd unit tests for the deterministic, network-free helpers in the\nruntime-coverage module that the fixture-heavy integration tests don't\nreach directly: parse_sidecar_version_key, sidecar_package_version_key,\nnormalize_package_manager_path, project_local_sidecar_names,\nsidecar_missing_message (generic + pnpm project root),\nutf16_source_offset_to_byte_offset (surrogate-pair and out-of-range\ncases), file_url_to_path, resolve_source_map_base (inline/relative/\nremote), virtual_source_candidates, resolve_virtual_source_path scheme\nguard, and location_precedes ordering.",
          "timestamp": "2026-06-01T22:50:21+02:00",
          "tree_id": "a828eb16f0330b929a70baf020cdc0be6bc3f39c",
          "url": "https://github.com/fallow-rs/fallow/commit/5efa81c680e8f5a0af1d7cede4d34c68acac572e"
        },
        "date": 1780347112508,
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
            "value": 331,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 780,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "89f1fa216afdc45088beedf6b433d07e6934ef8c",
          "message": "docs: changelog and detection notes for #838-#848 fixes\n\nRecords the nine shipped fixes (issues #838, #839, #840, #841, #843, #845, #846, #847, #848) in CHANGELOG, with detection.md / plugins.md capability notes and the agent-file manifest re-bless.",
          "timestamp": "2026-06-02T11:05:07+02:00",
          "tree_id": "a1ca9716b0015e1c6b8a21a12709bc55088cba7f",
          "url": "https://github.com/fallow-rs/fallow/commit/89f1fa216afdc45088beedf6b433d07e6934ef8c"
        },
        "date": 1780391367556,
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
            "value": 331,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 781,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2df7aaebcb8dba125545bcd933c793bba37c40fe",
          "message": "feat(security): data-driven tainted-sink candidate catalogue\n\nAdd a deterministic, opt-in local security-candidate layer surfaced only by\n`fallow security`. Findings are CANDIDATES for downstream agent verification\n(the DeepSec / Warden model), never under bare `fallow` or the audit gate.\n\nA shape-agnostic ModuleInfo.security_sinks extract capture feeds a data-driven\nmatcher catalogue (crates/core/data/security_matchers.toml + catalogue.rs), so\nadding a CWE category is a TOML row with no Rust enum churn. One generic\nSecurityFindingKind::TaintedSink carries category + cwe; IssueKind::SecuritySink\nand a default-off security_sink rule gate it. Nine seed categories ship, each\nwith positive and literal-negative integration fixtures: dangerous-html (CWE-79),\ncommand-injection (78, provenance-gated), code-injection (94, eval + vm),\nsql-injection (89), ssrf (918), path-traversal (22), open-redirect (601),\nweak-crypto (327), unsafe-deserialization (502). The bespoke graph-structural\nclient-server-leak class is unchanged.\n\nConservative non-literal-argument trigger (literal args never fire); blind spots\ncounted in-band via unresolved_callee_sites. Human / JSON / SARIF output carry\ncategory + cwe. ADR-021 non-goals (SCA, CVE/advisory feeds, auth-logic finding)\nstay out of scope.",
          "timestamp": "2026-06-02T12:10:35+02:00",
          "tree_id": "2142dd9c28752b63b29c50ef875c7fa7355116d4",
          "url": "https://github.com/fallow-rs/fallow/commit/2df7aaebcb8dba125545bcd933c793bba37c40fe"
        },
        "date": 1780395327523,
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
            "value": 333,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 787,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "1c8319d890a2c984d3ef6dd67aaeca79fa1a284c",
          "message": "chore: release v2.86.0",
          "timestamp": "2026-06-02T13:00:50+02:00",
          "tree_id": "82e1a936d7429e3d2926df3785762549bc316c05",
          "url": "https://github.com/fallow-rs/fallow/commit/1c8319d890a2c984d3ef6dd67aaeca79fa1a284c"
        },
        "date": 1780398174207,
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
            "value": 333,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 787,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a6b63f1e411fcaf1f217779f7353f395eade348c",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.86.0",
          "timestamp": "2026-06-02T13:36:55+02:00",
          "tree_id": "8f8002300c66d5dec673e5c2b211d209070064e5",
          "url": "https://github.com/fallow-rs/fallow/commit/a6b63f1e411fcaf1f217779f7353f395eade348c"
        },
        "date": 1780400290152,
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
            "value": 333,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 787,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ae240a0a375ac6fb691cd611c055f223c9826a49",
          "message": "fix(extract): bind useMemo-returned class instances for member crediting\n\nA service instantiated through useMemo (const svc = useMemo(() => new Svc(), [])) left its methods reported as unused-class-member, because only the array-destructured useState form was tracked. useMemo returns the factory's product directly, so the non-destructured identifier is now bound to the constructed class. Scoped to useMemo / React.useMemo: useState (tuple-returning) and arbitrary wrappers are not bound from the non-destructured form. Bumps the extraction CACHE_VERSION.\n\nFixes #844",
          "timestamp": "2026-06-02T13:57:50+02:00",
          "tree_id": "66eea1ea710fbd6e6d265fe94ef6d4692384e5d4",
          "url": "https://github.com/fallow-rs/fallow/commit/ae240a0a375ac6fb691cd611c055f223c9826a49"
        },
        "date": 1780401693919,
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
            "value": 333,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 788,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "eecb1d601bf131e0c3fa59d63496cea1749f9ed9",
          "message": "feat(security): reachability-weighted ranking from entry points (#860)",
          "timestamp": "2026-06-02T15:22:50+02:00",
          "tree_id": "8d32c1089005507044774d50ed6c92fea03ee3de",
          "url": "https://github.com/fallow-rs/fallow/commit/eecb1d601bf131e0c3fa59d63496cea1749f9ed9"
        },
        "date": 1780407825510,
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
          "id": "85eb70dd15a1a1adcf2ec2a0af13c2616a2e13e6",
          "message": "feat(security): framework-aware sinks via the plugin system (#861)",
          "timestamp": "2026-06-02T15:43:29+02:00",
          "tree_id": "6a30e96efa35758e0c4c60816feb33396cb62114",
          "url": "https://github.com/fallow-rs/fallow/commit/85eb70dd15a1a1adcf2ec2a0af13c2616a2e13e6"
        },
        "date": 1780408097925,
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
          "id": "0c58d98394040e3e68c3d15ea8469fe9a4f640a7",
          "message": "feat(security): model untrusted sources for source-to-sink precision (#859)",
          "timestamp": "2026-06-02T15:52:02+02:00",
          "tree_id": "05e9c2a49722d8a5379fa6f643e8a088e961da10",
          "url": "https://github.com/fallow-rs/fallow/commit/0c58d98394040e3e68c3d15ea8469fe9a4f640a7"
        },
        "date": 1780408442107,
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
          "id": "1243f9893f5852ace2f7804e5ec27ba34580fe7a",
          "message": "feat(security): add deterministic CWE catalogue categories (#862)",
          "timestamp": "2026-06-02T17:36:39+02:00",
          "tree_id": "49d48ad019ff309b9a761b193781c65508f16968",
          "url": "https://github.com/fallow-rs/fallow/commit/1243f9893f5852ace2f7804e5ec27ba34580fe7a"
        },
        "date": 1780414884258,
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
          "id": "766aeafafe109ee223af9deee98276f4ca34ac52",
          "message": "docs(security): fix redundant explicit doc link in tainted_sink\n\nThe catalogue detector module doc used an explicit [`SinkSite`](path)\ntarget; the bare label already resolves, so rustdoc's\n`redundant-explicit-links` lint failed the Documentation CI job (the\nlocal pre-push hook only runs fmt+clippy, so it slipped through).",
          "timestamp": "2026-06-02T17:49:35+02:00",
          "tree_id": "13e45472566f94188acf68c5a12e0b1407f500b5",
          "url": "https://github.com/fallow-rs/fallow/commit/766aeafafe109ee223af9deee98276f4ca34ac52"
        },
        "date": 1780415456747,
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
      }
    ]
  }
}