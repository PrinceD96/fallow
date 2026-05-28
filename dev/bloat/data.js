window.BENCHMARK_DATA = {
  "lastUpdate": 1779971967193,
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
          "id": "ec210c3b255b8f1d7594b15773461ff9e1df1154",
          "message": "fix(fix): preserve UTF-8 BOM + skip mixed CRLF/LF files\n\nTwo file-encoding correctness gaps in `fallow fix` are closed in one\npass. Previously, mixed CRLF/LF source files were silently mangled\nbecause `read_source` detected the line ending by `contains(\"\\r\\n\")`\nand then split exclusively on that style; lines that did not end with\nthe detected separator got embedded into adjacent lines and the fix\nwrote to the wrong line. Now `read_source` returns `EncodingError::\nMixedLineEndings` on detection, the orchestrator translates that into\n`SkipReason::MixedLineEndings`, the JSON envelope grows an additive\nsibling counter `skipped_mixed_line_endings: N` next to the existing\n`skipped_content_changed`, and the run exits with code 2. The skip is\nNOT self-healing: a stderr line names `dos2unix` and `git config\ncore.autocrlf input` as the required remediation. `FixPlan::skip`\ndedupes on `(path, reason)` so a file carrying findings for multiple\nfixers (e.g. an unused export AND an unused enum member) surfaces as\none entry, not one per fixer.\n\nUTF-8 BOM handling becomes symmetric. The extract layer's three read\nentry points (`parse_single_file_cached`, `parse_single_file`,\n`parse_from_content`) now strip the leading BOM before hashing and\nbefore parsing, so `content_hash`, `compute_line_offsets`, and the\noxc parser all see a consistent post-BOM byte sequence; line numbers\non BOM-bearing files no longer shift by the codepoint. The fix layer's\n`stage_fixed_content` re-prepends the BOM bytes (`EF BB BF`) on write\nwhen the source had one, so Windows-authored files round-trip with\ntheir BOM intact. `parse_source_to_module` carries a defense-in-depth\nstrip for out-of-tree callers (fuzzers, integration fixtures). fallow\nneither adds nor removes a BOM. The extraction cache `CACHE_VERSION`\nbumps from 88 to 89 because pre-fix caches keyed hashes over BOM-\nincluded bytes; first run after upgrade is uncached, subsequent runs\nare warm.\n\nThe `fix_preview` and `fix_apply` MCP tool descriptions are updated to\nflag the non-self-healing nature of the mixed-EOL skip for AI agents.\nCompanion-repo docs (fallow-docs/cli/fix.mdx + fallow-skills/.../cli-\nreference.md) get a new \"File encoding contract\" section covering both\nhalves.\n\nFixes #475.",
          "timestamp": "2026-05-21T15:25:53+01:00",
          "tree_id": "2aed5ba11fc461928f0a95014d0ddd36f63174fb",
          "url": "https://github.com/fallow-rs/fallow/commit/ec210c3b255b8f1d7594b15773461ff9e1df1154"
        },
        "date": 1779373937522,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 233451168,
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
          "id": "3e8f66272385783858d138445678968cb31c6119",
          "message": "feat: surface re-export cycles as user-visible findings\n\n* feat(types,config,graph,core,cli): scaffold re-export-cycle finding (WIP)\n\nAdds the new `re-export-cycle` issue type across the types, config,\ngraph crates plus the cross-cutting match-arm + struct-literal sites in\ncore, cli, and regression baseline. Detection logic already exists in\n`crates/graph/src/graph/re_exports/mod.rs::find_re_export_cycles`\n(formerly `warn_on_re_export_cycles`, added in #442); this commit gives\nit a structured return type, threads cycles onto the ModuleGraph, and\nprepares every downstream literal so the rest of the pipeline (D-L from\n.plans/issue-515-re-export-cycles.md) can be hooked up incrementally\nwithout per-step compile breakage.\n\ntypes:\n- `ReExportCycle { files, kind: ReExportCycleKind }` plus wrapper\n  `ReExportCycleFinding` carrying typed `actions[]`\n  (`refactor-re-export-cycle` informational primary + `suppress-file`\n  secondary; cycles are file-scoped so a single suppression on\n  alphabetically-first member breaks the cycle).\n- `IssueKind::ReExportCycle` (discriminant 26) with parse aliases\n  `re-export-cycle`, `re-export-cycles`, `reexport-cycle`,\n  `reexport-cycles`.\n- `FixActionType::RefactorReExportCycle`.\n\nconfig:\n- `RulesConfig.re_export_cycle: Severity` defaulting to `Warn`\n  (panel-reviewed: existing projects with latent cycles do not get\n  sudden CI failures on upgrade). Same three serde aliases on both\n  `RulesConfig` and `PartialRulesConfig`.\n- Per-file `overrides.rules.re-export-cycle` is a no-op (cycle spans\n  multiple files); load-time warn block extended to point users at the\n  working escape hatch.\n- `KNOWN_RULE_NAMES.len()` 48 -> 52; alias-in-source drift guard passes.\n\ngraph:\n- `find_re_export_cycles` (renamed from `warn_on_re_export_cycles`)\n  returns `Vec<GraphReExportCycle>` while keeping the existing\n  `RUST_LOG=warn` emissions intact. Carries parallel `files` +\n  `file_ids` arrays so the downstream detector can call\n  `suppressions.is_file_suppressed` without a path-to-FileId lookup.\n- `ModuleGraph` gains a `re_export_cycles: Vec<GraphReExportCycle>`\n  field populated after Phase 4 chain resolution.\n\ncore (cross-cutting only):\n- `severity_for_kind` and the stale-suppression kind-to-string map\n  cover the new `IssueKind::ReExportCycle` variant.\n\ncli, regression baseline (cross-cutting only):\n- `CheckCounts` + `RegressionBaseline` (cli local + fallow_config) gain\n  a `re_export_cycles: usize` field.\n- All `RulesConfig {}` test literals across cli/check/rules.rs,\n  cli/report/*, cli/tests/snapshot_tests.rs, core integration tests\n  gain `re_export_cycle: Severity::<X>` to keep workspace builds clean.\n\nRemaining work for #515:\n- Wire `find_re_export_cycles` detector into `find_dead_code_full` and\n  populate `AnalysisResults.re_export_cycles`.\n- CLI plumbing: `--re-export-cycles` flag, IssueFilters, baseline\n  retain, explain RuleDef, all 6 report formats.\n- LSP diagnostic + MCP tool description + GH Action/GitLab CI jq +\n  VS Code TS contract.\n- Snapshot tests + integration fixtures + schema regen.\n\nRefs #515\n\n* feat(core,cli,lsp,mcp,types): wire re-export-cycle finding end-to-end (WIP)\n\nLifts the upfront Tarjan SCC pass added in #442 from a `tracing::warn!`\ninto a user-visible AnalysisResults finding, then threads it through the\nCLI filter / baseline / explain / 6 output formats, the LSP diagnostic\nprovider, and the MCP tool registry.\n\ncore:\n- new `analyze/re_export_cycles.rs` detector: walks the graph-layer\n  `GraphReExportCycle` vec, applies file-level suppression (any member\n  file with `// fallow-ignore-file re-export-cycle` short-circuits the\n  whole cycle), and maps each entry to a typed `ReExportCycleFinding`\n  via the existing `with_actions` wrapper.\n- `find_dead_code_full` rayon-join arm hoisted into three small helper\n  fns (`run_circular_dep_detector`, `run_re_export_cycle_detector`,\n  `run_export_usages_collector`) to keep the tree under the clippy\n  `excessive_nesting` threshold (7); each helper does the `Severity::Off`\n  gate plus the wrapper map.\n- `core::results` re-exports `ReExportCycleFinding`, `ReExportCycle`,\n  `ReExportCycleKind` so downstream crates (cli, lsp) can build literals\n  without touching `fallow_types::*` directly.\n\ncli:\n- `--re-export-cycles` clap flag on `check` and the matching field on\n  `IssueFilters`, `DeadCodeFilters`, and the napi `DeadCodeOptionsJs`.\n- `apply_rules` / `has_error_severity_issues` / `promote_warns_to_errors`\n  arms for the new `rules.re_export_cycle` severity.\n- workspace + changed-files retain logic (`retain(any-member-under-X)`,\n  matching circular_dependencies).\n- baseline: new `re_export_cycles: Vec<String>` field keyed by\n  `kind:<sorted-paths-joined-with-<->` so self-loops cannot\n  keyspace-collide with future single-file multi-node shapes (panel\n  catch #7, Sarah/Aisha).\n- explain `RuleDef` entry under \"Architecture\" with plain-English fix\n  guidance; `CHECK_RULES.len()` bumped 22 -> 23.\n- all six report formats:\n  human/check.rs: `build_re_export_cycles_section` + Structure-category\n  hookup + summary-line \"re-export cycles\" and Re-Export Cycles row in\n  `print_check_summary`.\n  json.rs: count in `CheckSummary`, `suppression_kind_rank` arm at 10\n  (between circular-dependency at 9 and boundary-violation at 11).\n  sarif.rs: `sarif_re_export_cycle_fields` builder + rule registration\n  with helpUri pointing at `explanations/dead-code#re-export-cycles`.\n  compact.rs: emits `re-export-cycle:<first>:1:0:<chain>(self-loop)?`.\n  markdown.rs: Re-export-cycles section renders chain joined by `<->`\n  with `*(self-loop)*` italic tag.\n  codeclimate.rs: `push_re_export_cycle_issues` with kind-prefixed\n  fingerprint so self-loop and multi-node shapes hash distinctly.\n  ci/pr_comment.rs: `fallow/re-export-cycle` registered as\n  source-file-scoped (not project-level).\n\nlsp:\n- `push_re_export_cycle_diagnostics` emits one Diagnostic per member\n  file at line 1 col 0 (cycle is file-scoped; per-edge anchoring\n  deferred). Severity inherits from the resolved rule severity.\n- `DIAGNOSTIC_ISSUE_TYPES` extended with `re-export-cycle` so editor\n  clients can toggle it via `initializationOptions.issueTypes`.\n- `merge_results` and `dedup_results` paths cover the new field; the\n  dedup key includes the `kind` discriminant for the same self-loop\n  collision reason as the baseline key.\n\nmcp:\n- `(\"re-export-cycles\", \"--re-export-cycles\")` added to\n  `ISSUE_TYPE_FLAGS`; flag-count assertion bumped 18 -> 19.\n- `analyze` tool description prose updated with the explicit Kai wording\n  \"barrel files that form a structural loop, silently breaking\n  re-exports\".\n- `params.rs` `issue_types` doc comment extended.\n\ntypes/envelope:\n- `CheckSummary.re_export_cycles: usize` with `#[serde(default)]` so\n  pre-existing baselines and consumers parse unchanged.\n\ntests:\n- 5 per-format snapshot tests (json / sarif / compact / markdown /\n  codeclimate) drive a 2-finding fixture (one multi-node, one self-loop)\n  to lock the wire shape; sample_results gains one re-export-cycle so\n  every existing snapshot exercises the additive field too.\n- 4-arm alias round-trip test in config/rules.rs:\n  `re-export-cycle` / `re-export-cycles` / `reexport-cycle` /\n  `reexport-cycles` all deserialize to the same field (panel catch #10).\n- 4 fixtures under `tests/fixtures/re-export-cycle-{2-node,3-node,\n  self-loop,type-only}/` plus the matching integration test asserting\n  the cycle list is populated, the `kind` discriminator is correct, and\n  every finding ships with a non-empty `actions[]` (AC19); type-only\n  fixture also pins panel catch #9 (chain propagation is a no-op for\n  `export type *` cycles, so the finding still fires).\n\nDrift-guard / count bumps:\n- `KNOWN_RULE_NAMES`: 48 -> 52 (4 new alias name forms).\n- `KNOWN_ISSUE_KIND_NAMES`: matching bump.\n- `CHECK_RULES.len()`: 22 -> 23.\n- `ISSUE_TYPE_FLAGS.len()`: 18 -> 19.\n- `IssueKind::ReExportCycle` discriminant: 26 (next free after\n  `EmptyCatalogGroup = 25`).\n- `severity_for_kind` + stale-suppression kind-to-string map cover the\n  new variant.\n\nDefault severity stays `Warn` (user-confirmed): existing projects with\nlatent cycles don't get sudden CI failures on upgrade. Users opt into\n`error` via `rules.re-export-cycle: error`.\n\nRefs #515\n\n* feat(schema,action,ci,vscode): wire re-export-cycle into ci surfaces + tooling\n\nLands the remaining downstream surfaces for the #515 finding type after\nthe core/cli/lsp/mcp/types work in 62a54f26.\n\nschema:\n- regenerated docs/output-schema.json from the Rust source via the\n  fallow-schema-emit binary; new `re_export_cycles` arrays + summary\n  count + `ReExportCycleFinding` + `ReExportCycle` + `ReExportCycleKind`\n  + `refactor-re-export-cycle` FixActionType constant. All additions are\n  optional on the wire (`?`) so pinned consumers stay typecheck-clean.\n- regenerated editors/vscode/src/generated/output-contract.d.ts and\n  npm/fallow/types/output-contract.d.ts via codegen-types.mjs.\n- ajv strict=true passes; tsc --noEmit passes (covers panel catch #5b\n  in the additive-shape sense; the field is `?` so a pinned consumer\n  that doesn't reference it stays valid).\n\naction/ (GitHub Action):\n- summary-check.jq: new \"Re-export cycles\" table_row + section block\n  rendering chain joined by ` <-> ` plus a kind column.\n- summary-combined.jq: per-category count row gated on length > 0.\n- summary-audit.jq: audit-table row using the same chain format and\n  the `kind` discriminator as item.\n- annotations-check.jq: one ::warning per member file, with copy that\n  branches on `kind == \"self-loop\"` for the fix hint.\n- filter-changed.jq: `.re_export_cycles |= map(select(.files | any(in_changed)))`\n  retain + matching `(.re_export_cycles // [] | length) +` term in the\n  total_issues recalc block (panel catch #11).\n- fixtures patched via jq (not echoed wrappers, per the seed-by-patch\n  rule); `bash action/tests/run.sh` -> 238 passed.\n\nci/ (GitLab CI):\n- summary-check.jq, summary-combined.jq, summary-audit.jq: same shape\n  as the action/ jq.\n- HARD ACK: `grep -n total_issues ci/jq/` returns no\n  filter-changed.jq; the GitLab pipeline currently has no\n  changed-file filter. No total_issues recalc to mirror.\n- fixtures patched the same way; `bash ci/tests/run.sh` -> 222 passed.\n\neditors/vscode:\n- labels.ts: new `re-export-cycles` IssueCategory + \"Re-Export Cycles\"\n  label.\n- settings.ts: new `re-export-cycles: boolean` field on\n  IssueTypeConfig.\n- commands.ts: filter arm + summary count.\n- treeView.ts: tree node entry using the `sync-ignored` icon (visually\n  distinct from circular_dependencies' `sync`); the IssueItem label\n  branches on kind (Self-loop vs N files).\n- analysis-utils.ts: `re_export_cycles?.length ?? 0` added to the\n  total-issues sum.\n- statusBar-utils.ts: `reExportCycles: number` on\n  AnalysisCompleteParams + the buildParamsFromCli mapping + a\n  BreakdownLine row in STATUS_BAR_BREAKDOWN.\n- config.ts: default `re-export-cycles: true` in getIssueTypes.\n- diagnosticFilter.ts: bundled DIAGNOSTIC_CATEGORIES fallback row\n  matching the new LSP issue type so muting still works if the\n  `fallow/issueTypes` LSP request fails.\n- package.json: enabled in `fallow.issueTypes` default + a new\n  `re-export-cycles: boolean` property in the schema.\n- test fixture updated for AnalysisCompleteParams shape.\n- `pnpm lint` + `pnpm test` -> all 104 tests pass.\n- bundled dist/extension.js regenerated via prebuild + codegen.\n\nRefs #515\n\n* fix(audit,changed-since,types): close re-export-cycle attribution gaps from review\n\nAddresses BLOCK + CONCERN findings from the rust-reviewer and\ncli-output-reviewer Phase 4 audit.\n\nBLOCK fixes:\n\n1. Audit attribution trio (rust-reviewer): re_export_cycles was missing\n   from all three attribution surfaces in crates/cli/src/audit.rs, so a\n   newly-introduced re-export cycle would never set `introduced: true`\n   on the JSON, the `retain_introduced_dead_code` gate-filter would not\n   touch it, and `dead_code_keys` would undercount the verdict.\n   - `dead_code_keys`: new key block. Format `re-export-cycle:<kind>:<sorted-paths-joined-with-|>`\n     where kind is `multi-node` or `self-loop`, mirroring the baseline\n     `re_export_cycle_key` rationale (panel catch #7: prevent self-loop\n     vs single-file multi-node keyspace collision).\n   - `retain_introduced_dead_code`: matching `.retain` block.\n   - `annotate_dead_code_json`: matching `annotate_issue_array` call\n     under key `\"re_export_cycles\"`.\n\n2. Changed-since filter (rust-reviewer):\n   `crates/core/src/changed_files.rs::filter_results_by_changed_files`\n   had no retain block for re_export_cycles, so the `--changed-since`\n   path silently dropped every re-export-cycle finding regardless of\n   the changed file set. Added a retain mirroring the circular_deps\n   shape (any member file in the changed set keeps the cycle).\n\n3. Absolute-path leak in SuppressFile description (rust-reviewer +\n   json-output-reviewer; both flagged BLOCK):\n   `ReExportCycleFinding::with_actions` was embedding raw\n   `PathBuf::display().to_string()` paths into the SuppressFile\n   `description` string. The CLI's `strip_root_prefix` post-pass only\n   strips strings that START with the prefix; the description text\n   starts with \"Suppress with...\" so absolute machine paths were\n   leaking into the JSON `description` field on every multi-node\n   cycle.\n   Fix: the description no longer embeds member paths. Consumers\n   needing the member list read the sibling `files` array; the new\n   wording points them there explicitly.\n\nCONCERN fixes:\n\n4. Docs URL noise in human output (cli-output-reviewer): every\n   re-export-cycle entry rendered its own\n   `https://fallow.tools/explanations/dead-code#re-export-cycles`\n   trailer. No other section in `report/human/check.rs` repeats the\n   docs URL per item; the SARIF helpUri already covers tool-driven\n   navigation. Dropped the per-item URL.\n\n5. Compact `:1:0:` placeholder (cli-output-reviewer): the line was\n   `re-export-cycle:<file>:1:0:<chain>` even though the finding is\n   file-scoped (no real line/col exists). The convention for other\n   file-scoped issues (`unlisted-dep`, `duplicate-export`) omits\n   line/col entirely. Aligned to `re-export-cycle:<file>:<chain>`.\n\nNotes on a rust-reviewer recommendation we did NOT take:\n\nThe reviewer suggested adding `!has_overrides` symmetry guard to\n`has_error_severity_issues` for re_export_cycle, parallel to\ncircular_dependencies. The guard exists for circular_dependencies\nbecause the file-scoped block above re-resolves circular_dependencies\nseverity per-cycle-member-path. Re-export-cycle is intentionally NOT\nfile-scopable (`overrides.rules.re-export-cycle` is a no-op per\n`crates/config/src/config/resolution.rs`), so it is NOT included in\nthe file-scoped block. Adding the `!has_overrides` guard would\nsilently mute re_export_cycle errors whenever an override exists for\nany unrelated rule — the opposite of the reviewer's intent.\nDocumented in a comment at the call site so the asymmetry doesn't\nlook like a bug.\n\nLSP unit tests (lsp-reviewer CONCERN):\n\nAdded two tests to crates/lsp/src/diagnostics/structural.rs:\n- `re_export_cycle_multi_node_emits_one_diagnostic_per_member`: pins\n  the one-diagnostic-per-member behavior (deliberate divergence from\n  circular-dep which emits one per cycle), the helpUri anchor, the\n  message format, the related_information skip-self, and the file-\n  scoped line/col (0,0).\n- `re_export_cycle_self_loop_emits_self_loop_message_and_no_related_info`:\n  pins the singularized \"1 file\" copy and the self-loop fix hint, and\n  that single-member findings emit no related_information.\n\nRefs #515\n\n* fix(action,ci): consolidate re-export-cycle annotation + strip bogus fixture summary\n\nTwo fixes from github-action-reviewer Phase 4 CONCERN:\n\n1. Annotation fan-out budget (action/jq/annotations-check.jq line 45-47).\n   The previous implementation emitted one ::warning per member file for\n   each cycle, so a 6-file cycle would burn 6 of GitHub's 10 annotations-\n   per-step budget on a single finding. Aligned with the circular-\n   dependency pattern at line 44: emit ONE annotation per cycle,\n   anchored at $files[0]. The annotation body still names every member\n   so the user sees the full chain; the diff between the two patterns\n   is purely the annotation-count fan-out, not the displayed info.\n   (LSP keeps per-member diagnostics; the jump-to-any-file UX makes\n   sense in an editor's Problems panel but is the wrong tradeoff against\n   GitHub's hard annotation cap.)\n\n2. Self-loop fixture gap. check.json carried only a multi-node entry,\n   so the self-loop arm of the jq `if $kind == \"self-loop\"` branch in\n   annotations-check.jq line 47 was untested. Added a second\n   re_export_cycles entry with kind=\"self-loop\" via jq patch.\n\nAlso: stripped a bogus `.summary` object I inadvertently added to all 8\naction/ci fixtures in the earlier J/K commits. The real CLI envelope's\ntop-level `summary` is computed elsewhere and the jq scripts read\ndirectly from the array fields; the patched `.summary` object only ever\nheld a stub `re_export_cycles` count that no script consumed.\n\n`bash action/tests/run.sh` -> 238 passed.\n`bash ci/tests/run.sh` -> 222 passed.\n\nRefs #515\n\n* docs: re-export-cycle finding type — CHANGELOG, detection rules, AGENTS issue tokens\n\nPhase 5 in-repo documentation for #515. Captures the user-visible\ncontract of the new `re-export-cycle` finding so consumers reading\nCHANGELOG / AGENTS / detection.md understand the surface ahead of\nthe companion-repo docs update (fallow-docs + fallow-skills).\n\nCHANGELOG.md (Unreleased > Added):\n- New entry leading with the finding's role: lifts the upfront SCC\n  pass added in #442 from `tracing::warn!` into a structured\n  AnalysisResults finding with `files`, `kind` (`multi-node` /\n  `self-loop`), and a typed `actions[]` array. Names the explicit\n  CLI flag (`--re-export-cycles`), default severity (`Warn`), four\n  config aliases, suppression form, panel-catch wording (\"barrel\n  files that form a structural loop, silently breaking re-exports\")\n  in the MCP description, and the heads-up note about `total_issues`\n  showing a step change on the first run after upgrade (panel catch\n  from Marcus). Cache version is intentionally NOT bumped.\n\n.claude/rules/detection.md (`export *` chain propagation bullet):\n- Extended the existing #442 bullet to point at the new\n  user-visible surface. Documents BOTH paths surfacing in parallel:\n  `tracing::warn!` for RUST_LOG=warn discoverability AND the typed\n  `AnalysisResults.re_export_cycles` finding. Names the four\n  suppression alias spellings, the file-scoped semantics\n  (`overrides.rules.re-export-cycle` is a no-op), and the type-only\n  cycle behavior (still fires).\n\nAGENTS.md:\n- Added `--re-export-cycles` to the dead-code issue-type filter\n  list.\n- Added `re-export-cycle` to the issue-type tokens list.\n\nDid NOT touch:\n- `.claude/rules/cli-crate.md` (no per-flag enumeration to extend).\n- `.claude/rules/mcp-server.md` (tool count unchanged; per-tool\n  description was already updated in 62a54f26).\n- `docs/backwards-compatibility.md` (the stable-list is global\n  flags only, no per-issue-type filter table to extend).\n- `docs/output-schema.json` (regenerated in c9a4bf2d).\n\nRefs #515\n\n* docs(schema): regenerate root config-input schema for re-export-cycle rule\n\nCatches the root `schema.json` regen that was missed in the #515\nimplementation. This is the config-input schema (powers\n`.fallowrc.json` IDE autocomplete and ships verbatim in the npm\npackage), distinct from `docs/output-schema.json` (output envelope,\nalready regenerated in c9a4bf2d). The root file has no CI drift gate\n(`project_schema_json_no_drift_gate.md`), so the gap survived through\nPhase 5 docs and was caught by `/fallow-review`.\n\nDiff:\n- `RulesConfig` default map: `\"re-export-cycle\": \"warn\"` so editors\n  show the live default when a user creates a fresh `.fallowrc.json`.\n- `RulesConfig` schema property `\"re-export-cycle\"` referencing\n  `#/$defs/Severity` with `default: \"warn\"`.\n- `PartialRulesConfig` (per-file overrides) arm `\"re-export-cycle\"`\n  with the same `Severity | null` anyOf shape every sibling carries.\n  Per-file overrides for re-export-cycle are documented as no-ops at\n  runtime (the cycle spans multiple files), but the schema still\n  needs to accept the key to avoid an editor \"unknown property\"\n  squiggle on a config the resolver gracefully ignores.\n- `RegressionBaseline.counts` schema: `reExportCycles` integer with\n  `default: 0` matching the rest of the per-issue-type counts.\n\nRegenerated via `cargo run --bin fallow -- config-schema`. Diff is\npurely additive (no field renames or removals). Existing\n`.fallowrc.json` files validate unchanged.\n\nRefs #515\n\n* fix(codegen,docs): export bare ReExportCycle alias + extend stable issue-type list\n\nTwo follow-ups from the /fallow-review verdict that would have leaked\ninto the npm release if not caught:\n\n1. `editors/vscode/scripts/codegen-types.mjs::BARE_DEAD_CODE_ALIASES`\n   was missing the `ReExportCycle` entry. Because\n   `ReExportCycleFinding` uses `#[serde(flatten)] cycle: ReExportCycle`,\n   json-schema-to-typescript dedupes the parent type away (the same\n   pattern documented in `project_serde_flatten_ts_codegen_dedupes`),\n   so the bare `ReExportCycle` interface never appeared in\n   `npm/fallow/types/output-contract.d.ts`. External consumers doing\n   `import type { ReExportCycle } from \"fallow/types\"` would have\n   failed at type-check while every sibling bare alias\n   (`CircularDependency`, `BoundaryViolation`, `DuplicateExport`, ...)\n   worked. Adding the alias entry, regenerating both committed TS\n   contracts; `pnpm run check:codegen` clean.\n\n2. `docs/backwards-compatibility.md:20` stable issue-type-arrays list\n   was missing `re_export_cycles`. Adding it keeps the list authoritative\n   for SemVer / backwards-compat reasoning (the array follows the same\n   wire-shape stability contract as every sibling: skip-serializing-if-\n   empty so absence is the default, additive optional field so\n   schema_version does not bump).\n\nThe /fallow-review noted both as FIX FIRST: (1) is a real consumer\nbreak the npm release would have shipped; (2) is a docs-truth gate.\nBoth land before the fallow PR opens so the npm types and the\nbackwards-compat doc agree with the wire shape on day one.\n\nRefs #515",
          "timestamp": "2026-05-21T17:58:36+01:00",
          "tree_id": "ade3e118b72c66c9f49499197e544e06c8444b9d",
          "url": "https://github.com/fallow-rs/fallow/commit/3e8f66272385783858d138445678968cb31c6119"
        },
        "date": 1779383134522,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234709624,
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
          "id": "ba5885547ea36666b3722639c9cba570e94fba1f",
          "message": "feat(review): evolve review-{github,gitlab} envelope to v2\n\n* feat(review): evolve review-{github,gitlab} envelope to v2\n\nCloses #528.\n\nAdds five additive fields to ReviewEnvelopeOutput plus one independent\ncorrectness fix for GitLab inline comments on renamed files. v1 readers\nare unaffected (additive shape); v2 readers populate the new fields and\nrecognize the new marker shape.\n\n- ReviewEnvelopeSchema::V2 (\"fallow-review-envelope/v2\") bumped because\n  comments[] is no longer 1:1 with findings (same-line merging) and the\n  fingerprint-marker shape changed. v1 retained on the enum for read-\n  side back-compat.\n- summary: { body, fingerprint } at root. Body is byte-identical to the\n  legacy top-level body field; fingerprint is FNV-1a(body). Consumers\n  upsert a single sticky PR/MR summary by marker reconciliation without\n  invoking fallow twice.\n- marker_regex at root. Stable\n  (?m)^<!-- fallow-fingerprint:v2: ((?:[a-z]+:)?[0-9a-f]{16}) -->\\s*$\n  consumers grep + capture against. Works in Rust regex and JS ES2018\n  via the inline (?m) flag, no flag-awareness on consumer side. The\n  :v2: magic-byte segment prevents v1 marker collision and reduces\n  user-paste spoofing.\n- Same-(path, line) merging in comments[] with a two-tier fingerprint\n  contract: primary fingerprint = linecomp:<16-hex of path:line>\n  stable across runs, plus constituent_fingerprints: Vec<String>\n  carrying the per-finding fingerprints. (Reverted to hashed-composite\n  in a follow-up commit; see the next fix(review) entry.)\n- UTF-8-safe body truncation at 65,536 bytes (conservative floor under\n  GitHub's 65,536-char limit; GitLab is 1,000,000 chars per\n  https://docs.gitlab.com/administration/instance_limits/). Three\n  signals: typed truncated: bool field, inline <!-- fallow-truncated -->\n  HTML marker, and human \"... (truncated)\" text. Char-boundary safe.\n- DiffIndex.rename_pairs (head_path -> base_path) populated from\n  rename from / rename to extended-diff headers. Threaded through\n  render_review_envelope to render_merged_comment; GitLab position\n  block's old_path now carries the base-side filename for renamed\n  files. Wire-correctness bug fix valid under v1 schema too; ships\n  together for one-PR atomicity.\n\nReconcile-review (fallow ci reconcile-review) gains\nextract_fallow_fingerprint() helper that accepts both v1 and v2 marker\nshapes so consumers migrating from v1 captures continue to reconcile.\n\nSchema regenerated: ReviewEnvelopeSummary added to\ndocs/output-schema.json definitions; new fields in\nReviewEnvelopeOutput, GitHubReviewComment, GitLabReviewComment.\nTypeScript types regenerated in editors/vscode/src/generated/ and\nnpm/fallow/types/.\n\nOut of scope (deferred):\n\n- TS pipeline steps for per-file unused-export grouping, per-group\n  clone-instance dedup, and refactoring-target drops.\n- New CLI flag for --max-comments paralleling FALLOW_MAX_COMMENTS.\n- Body byte-cap as a configurable knob.\n\n* fix(review): make vendor shell scripts accept v2 envelope shape\n\nBundled action/scripts/review.sh and ci/scripts/review.sh gated on\n.meta.schema == \"fallow-review-envelope/v1\" exactly, so the v1->v2\nschema bump silently breaks the entire posting step: render_with_fallow\nreturns 1, the if-guard skips the POST loop, no inline comments are\nposted, and the workflow exits 0 with only a warning in the log.\nCompound regression: the sed-based dedup fingerprint extractor matches\n`fallow-fingerprint: ` (with space) which is wrong for the v2 marker\nshape (`fallow-fingerprint:v2:` with no space before the namespace);\nv2 markers had captured `v2:` as the fingerprint, breaking dedup\nidempotency on re-runs.\n\nBoth shell scripts now accept any `fallow-review-envelope/v<N>` schema\nvia `test(\"^fallow-review-envelope/v[0-9]+$\")`. The sed dedup extracts\nfingerprints from both v1 and v2 marker shapes (v2 first to avoid the\nv1 substring capturing `v2:`), sort -u to dedupe in case a single\ncomment carries both. ci/scripts/review.sh is symlinked into\ncrates/cli/templates/ci/ so the bundled drift gate stays green.\n\nThree follow-up cleanups folded in:\n\n- output_envelope.rs::is_false drops the spurious clippy #[expect] in\n  favor of #[allow] (trivially_copy_pass_by_ref is pedantic-only and\n  fires inconsistently across build configurations, which would trip\n  unfulfilled_lint_expectations under #[expect]; project convention in\n  .claude/rules/code-quality.md is #[allow] with reason for\n  pedantic-only lints).\n- truncation breadcrumb in review.rs::TRUNCATION_SUFFIX moves from\n  `... (truncated)` plain prose to `> Body truncated by fallow.`\n  blockquote, matching the existing `> Run fallow fix --files...`\n  convention in suggestion.rs so the breadcrumb reads as fallow\n  speaking rather than as truncated content. Co-presence invariant\n  with `truncated: bool` and `<!-- fallow-truncated -->` HTML marker\n  spelled out in the doc comment.\n- GitHub + GitLab comment `truncated` doc comments document the\n  three-signal invariant explicitly (typed bool authoritative, HTML\n  marker + blockquote always co-present).\n\nSchema regenerated + TS codegen regenerated (no breaking changes;\nonly description-string updates on `truncated` fields).\n\n* docs(review): document v2 envelope evolution\n\nCHANGELOG.md [Unreleased] gains a bold one-liner under Changed for\nthe issue #528 review-envelope v2 migration, covering all five\nadditive surface changes (summary block, marker_regex, same-line\nmerging with stable linecomp:<...> primary fingerprint plus\nconstituent_fingerprints array, UTF-8-safe body truncation with\nco-present truncated/HTML-marker/blockquote signals, GitLab\nposition.old_path for renamed files) and the v1/v2 marker\nrecognition in both the bundled reconcile-review subcommand and the\nGitHub Action + GitLab CI template scripts.\n\n(The CHANGELOG entry is corrected in the follow-up fix(review)\ncommit when same-line merging is reverted to hashed-composite.)\n\n.claude/rules/cli-crate.md adds an entry for report/ci/review.rs\ncovering the render pipeline shape (group_by_path_line then\nrender_merged_comment, body truncation byte budget, GitLab old_path\nplumbing via DiffIndex.rename_pairs) and tightens the ci.rs entry to\ndocument the extract_fallow_fingerprint v2-first ordering plus the\nschema-version regex used by the bundled shell scripts. So future\nimplementers don't re-litigate the marker shape or v1->v2 fingerprint\nextraction ordering when extending this surface.\n\nThe fallow-docs CI section was updated in the companion repo\n(fallow-rs/docs@0504e8d) in the same drop.\n\nCompanion to fallow-rs/fallow#528.\n\n* fix(review): use hashed-composite fingerprint for merged comments\n\nReplaces the prior per-line stable identity (linecomp:<hash of path:line>)\nplus secondary constituent_fingerprints array with a single hashed-\ncomposite primary fingerprint: merged:<16-char hash of sorted\nconstituent fingerprints>. Single-finding comments keep the bare v1-\nstyle fingerprint. The constituent_fingerprints field is dropped from\nboth GitHubReviewComment and GitLabReviewComment.\n\nThe motivation: the bundled wrappers (action/scripts/review.sh,\nci/scripts/review.sh) and `fallow ci reconcile-review` dedupe on the\nprimary fingerprint only. Under the prior stable-linecomp design that\nmeant a merged comment whose constituent findings changed kept showing\nstale content forever (primary fingerprint unchanged so skip-if-exists\nsilently skipped the re-post). Under hashed-composite the primary\nfingerprint changes when constituents change, so the existing\nskip-if-exists logic correctly re-posts on content change.\n\nConsumers that need true update-in-place reconciliation (preserve\nreviewer reply threads across content changes) implement their own\nidentity tracking via marker_regex and the vendor edit endpoints\n(`PATCH /pulls/comments/{id}` on GitHub, `PUT /discussions/.../notes/\n{note_id}` on GitLab). The bundled scripts intentionally do not pay\nthat cost; the auth scopes, retry semantics, and edit-on-resolved-\nthread 422 handling are non-trivial.\n\nAlso clarifies the ReviewEnvelopeSummary::fingerprint docstring:\nthe FNV-1a hash is computed over the summary body BEFORE the trailing\nfallow-fingerprint marker line is appended (the marker contains the\nfingerprint, so the fingerprint cannot depend on the marker without\ncircularity). Consumers verifying from summary.body strip the line\nmatching marker_regex and hash the remainder.\n\nCompanion fallow-docs commit: fallow-rs/docs@8918062.\n\nOut of scope (unchanged): bundled shell scripts, ci.rs envelope\nreconciliation, marker shape, truncation contract, rename-pair plumbing.\nTouches output_envelope.rs, fingerprint.rs, review.rs, ci.rs (doc\nupdate), docs/output-schema.json (regen), TS codegen (regen),\nsnapshots, CHANGELOG, .claude/rules/cli-crate.md.\n\nRefs #528.\n\n* fix(review): split marker_regex from marker_regex_flags for JS compat\n\nThe v2 contract claim that the marker regex \"works in both Rust regex\nand JavaScript ES2018 RegExp without flag-awareness on the consumer\nside\" was wrong: JavaScript RegExp rejects the standalone `(?m)`\ninline flag group with `SyntaxError: Invalid regular expression ...\nInvalid group`. Verified by `node -e 'new RegExp(\"(?m)foo\")'` against\nNode 22.\n\nThe envelope now emits two fields:\n\n- `marker_regex`: anchored pattern WITHOUT `(?m)` baked in:\n  `^<!-- fallow-fingerprint:v2: ((?:[a-z]+:)?[0-9a-f]{16}) -->\\s*$`\n- `marker_regex_flags`: `\"m\"` so the anchored `^` / `$` match per-line\n  inside multi-line comment bodies.\n\nConsumers pass both to their regex engine:\n\n- JS: `new RegExp(env.marker_regex, env.marker_regex_flags)`\n- Rust: `RegexBuilder::new(&pat).multi_line(true).build()`\n\nVerified in Node: the new pattern + `m` flag compiles, matches a\nmarker on its own line, and rejects a marker pasted mid-line\n(anti-spoofing intact).\n\nSchema, TS codegen, and snapshots regenerated. CHANGELOG + cli-crate\nrule updated to describe the two-field contract. Companion fallow-docs\ncommit `fallow-rs/docs@2e1497b` updates the documented wire example,\nJS/Rust construction snippets, and consumer-side reconciliation\nexample.\n\nRefs #528.",
          "timestamp": "2026-05-21T18:20:39+01:00",
          "tree_id": "57119969498c6d84346cf8a5ccfbb6fb534ca3d3",
          "url": "https://github.com/fallow-rs/fallow/commit/ba5885547ea36666b3722639c9cba570e94fba1f"
        },
        "date": 1779384452373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234860264,
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
          "id": "ce9f2b1ec960d1792bef6c0d7c60ac223493cc9f",
          "message": "chore(fix): rename test comment to describe BOM-preservation invariant\n\nThe test comment on `staged_content_round_trip_through_second_fixer_preserves_bom`\nreferenced the review-process source of the invariant (\"per panel\nfeedback\") instead of the substantive property being asserted (BOM\npreservation across the staged-content fast path). Rename the comment\nto describe the invariant directly so the public source on GitHub\nreads as a self-contained assertion of the behavior, not a pointer to\ninternal review notes.\n\nMirrors the discipline added in `.claude/skills/fallow-implement` Phase\n4d: internal review nomenclature (\"panel BLOCK 1\", \"panelist 3 caught\",\n\"panel feedback\") must not leak into shipped source comments or test\nassertions; the comment should name the property being asserted and\nthe location where it is enforced, not the review step that\nidentified it.\n\nNo behavioral change. Existing test passes unchanged.",
          "timestamp": "2026-05-21T18:28:30+01:00",
          "tree_id": "590b96e01ba59904fb2b66154deb0903a7879803",
          "url": "https://github.com/fallow-rs/fallow/commit/ce9f2b1ec960d1792bef6c0d7c60ac223493cc9f"
        },
        "date": 1779384913727,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234860264,
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
          "id": "fed4b483dd1cbba8c1f55dcfe5b9599c389f95a8",
          "message": "chore: release v2.77.0",
          "timestamp": "2026-05-21T19:42:46+02:00",
          "tree_id": "1f9b319f425e05d1da67a05a3cdf791363e2fc06",
          "url": "https://github.com/fallow-rs/fallow/commit/fed4b483dd1cbba8c1f55dcfe5b9599c389f95a8"
        },
        "date": 1779385951575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234877184,
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
          "id": "b16f3cdf097edf08def56aef0584d12160135067",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.77.0",
          "timestamp": "2026-05-21T21:07:36+02:00",
          "tree_id": "9e30bd688dac06bc66a225b18893caf378beb1fd",
          "url": "https://github.com/fallow-rs/fallow/commit/b16f3cdf097edf08def56aef0584d12160135067"
        },
        "date": 1779390835428,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234877184,
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
          "id": "6303864bf02c45bd1f9b7c3dceae7f6b4d89533d",
          "message": "fix(cli): classify POSIX-style absolute paths as absolute on Windows\n\n* fix(cli): classify POSIX-style absolute paths as absolute on Windows\n\n`Path::is_absolute()` returns false on Windows for POSIX-style paths\nlike `/project/foo.ts` (Windows requires `C:\\foo` or a UNC root). Five\ncall sites in `crates/cli/src/` gated on `Path::is_absolute()` directly,\nso cross-platform user-supplied paths (CiIssue.path deserialized from\nJSON output on a Unix host, --diff-file/--file CLI flags in a CI config\nshared across runners, audit baseline path in .fallowrc.json, source\nmap content authored on any OS) leaked through as \"relative\" on Windows\nand downstream logic produced wrong results. Surfaced by 13 test\nfailures on the new push-to-main Windows CI matrix leg from #447.\n\nNew crates/cli/src/path_util.rs exposes is_absolute_path_any_platform\nwhich recognises host absolute (via Path::is_absolute), POSIX-style\nroot (via Component::RootDir which matches `/foo` on both platforms),\nand Windows-style drive prefix (via byte-level scan of OsStr encoding\nso Unix hosts classify `C:/foo` source-map content correctly too). The\nexisting looks_like_windows_absolute_path helper in coverage.rs is\nlifted into the same module.\n\nWired into relative_to_diff_path (the original 13-test root cause),\nresolve_audit_baseline_path, resolve_source_map_base, the --file\nfilter in check/mod.rs, and supersedes the local helper in coverage.rs.\nrelative_to_diff_path now strip_prefix-first regardless of platform,\nfalling back on the helper only for the outside-root early-return.\n\nSix new path_util unit tests cover POSIX root, Windows drive, relative\nshapes, host absolute via current_dir, the &str variant, and a\nPathBuf round-trip from a Windows drive-prefixed string. All 13\npreviously-failing Windows tests pass under the new logic; Ubuntu and\nmacOS behaviour is unchanged.\n\nFixes #545.\nRefs #447.\n\n* chore(cli): replace 'mis-classify' with 'misclassify' to satisfy typos\n\nThe previous fix(cli) commit lost the typos-fix Edits between Edit-buffer\nand stash-pop merge during the pre-commit cycle. typos rejects `mis` as\nan unknown word when separated by hyphen; the merged form passes the\ngate.",
          "timestamp": "2026-05-21T21:10:02+01:00",
          "tree_id": "e7013f68a0750b755d34cea8aed92290268786fc",
          "url": "https://github.com/fallow-rs/fallow/commit/6303864bf02c45bd1f9b7c3dceae7f6b4d89533d"
        },
        "date": 1779394619214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234869704,
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
          "id": "02dc1cccb62b7b55ccb94904f91fdad960503fb1",
          "message": "fix(cli): classify POSIX-style absolute paths in health diff filter on Windows\n\nFollow-up to PR #548 (the #545 main fix). The Windows CI matrix run on\n`6303864b` showed 6 health::* test failures remained after the\ncheck-side fix: `crates/cli/src/health/mod.rs` carried a near-duplicate\n`relative_to_root` helper with the same `Path::is_absolute()` gate bug,\nand `retain_hot_paths_in_change_scope` applied the same gate to\n`hot_path.path` before joining against the root.\n\nBoth sites are now routed through the shared `crate::path_util`\nhelpers introduced in PR #548. `relative_to_root` adopts the\nstrip_prefix-first shape that mirrors\n`report::ci::diff_filter::relative_to_diff_path`, so POSIX-style\nabsolute paths in cross-platform CI configs (or deserialized from JSON\noutput authored on a Unix host) classify correctly on Windows.\n\nAll 6 previously-failing tests pass under the new logic on Ubuntu;\nthe Windows CI matrix on push to main will be the empirical\nconfirmation.\n\nRefs #545.",
          "timestamp": "2026-05-21T21:22:45+01:00",
          "tree_id": "a1db6d1b65fd722830f01a52197d2d674b583b74",
          "url": "https://github.com/fallow-rs/fallow/commit/02dc1cccb62b7b55ccb94904f91fdad960503fb1"
        },
        "date": 1779395332442,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234862792,
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
          "id": "8ee61a22454a80a815b04b53d34616b41f8a6370",
          "message": "fix(cli): normalise fallow-cov sidecar request paths to forward slashes\n\n`crates/cli/src/health/coverage.rs::build_request` emitted\n`static_findings.files[].path` via `relative.to_string_lossy().into_owned()`,\nwhich preserves backslashes on Windows checkouts. The sidecar JSON\nwire format must be host-OS-independent (a sidecar or downstream\nconsumer can run on a different machine), so the path now goes\nthrough `.replace('\\\\\\\\', \"/\")` to match the existing convention in\n`report::ci::diff_filter::relative_to_diff_path` and\n`health::mod::relative_to_root`.\n\nCloses the last Windows-only test failure observed on the push-to-main\nCI matrix after PR #548 + #551 (13 -> 6 -> 1 -> 0).\n\nRefs #545.",
          "timestamp": "2026-05-21T21:42:45+01:00",
          "tree_id": "d55a1ddf02c24ff3f3623ea8d4e5a4e91400fcaf",
          "url": "https://github.com/fallow-rs/fallow/commit/8ee61a22454a80a815b04b53d34616b41f8a6370"
        },
        "date": 1779396582846,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234866784,
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
          "id": "2d26dc151e1416fb46f3103da9df1d6326ae257e",
          "message": "fix(audit): normalise Windows verbatim path prefix in relative_key_path\n\n`crates/cli/src/audit.rs::relative_key_path` stripped the project root\nfrom each finding path before building the BASE-vs-HEAD intersection\nkey. On Windows, `config.root` (often canonicalised via\n`std::fs::canonicalize`, which adds the `\\\\?\\` verbatim prefix) and\n`finding.path` (constructed from the BASE worktree's\n`std::env::temp_dir()` join, which does NOT) disagreed on prefix\nshape; `strip_prefix` silently fell through to the un-stripped path,\nHEAD keys landed as `src/foo.ts` while BASE keys landed as\n`C:/Users/.../Temp/fallow-audit-base-xxx/src/foo.ts`, and the\nintersection was empty.\n\nResult on the push-to-main Windows CI matrix: 8 audit integration\ntests in `crates/cli/tests/audit_tests.rs` reported 0 pre-existing\nfindings where 5+ were expected, because every inherited finding\nlanded as \"introduced\".\n\nFix: route both inputs through `dunce::simplified` before\n`strip_prefix`. `dunce::simplified` strips the `\\\\?\\` verbatim prefix\nwithout touching the filesystem; on POSIX it is a no-op so there is\nno behaviour change off-Windows.\n\nFixes #561.\nRefs #447, #545.",
          "timestamp": "2026-05-21T22:49:13+01:00",
          "tree_id": "3cdcb113204c9b8ae47f0ea7f8023e626cbc77e0",
          "url": "https://github.com/fallow-rs/fallow/commit/2d26dc151e1416fb46f3103da9df1d6326ae257e"
        },
        "date": 1779400585401,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234865984,
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
          "id": "b3b1ae8a68f99860c2304953c362e0b7ec749e10",
          "message": "chore(cli): route dupes + health file headers through format_display_path\n\nFollow-up to #547. Two human-output sites (`dupes.rs:240`,\n`health.rs:861`) still rendered file paths via\n`relative_path(...).display().to_string()` without forward-slash\nnormalisation, so on Windows the dupes section and the complexity\nfindings file header emitted backslashes while the four #547 sites\nemitted forward slashes within the same combined run. Routing both\nsites through the shared `format_display_path` helper closes the\ncross-line inconsistency without changing macOS or Linux output. No\nJSON / SARIF / CodeClimate / MCP shape changes.\n\nSurfaced by the cli-output-reviewer pass on #547 as a non-blocking\nfollow-up.",
          "timestamp": "2026-05-21T23:09:41+01:00",
          "tree_id": "4ac2d1de841155d0fc85ff14d210933dc66ab3bf",
          "url": "https://github.com/fallow-rs/fallow/commit/b3b1ae8a68f99860c2304953c362e0b7ec749e10"
        },
        "date": 1779401869787,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234841152,
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
          "id": "19b761ef61cc7f7bc6f0a7c12d1915e4bf90a289",
          "message": "fix(audit): sweep std::fs::canonicalize to dunce in audit.rs production sites\n\nFollow-up to PR #566. The earlier fix to `resolve_git_toplevel` closed\nthe changed_files mismatch but the next Windows CI run surfaced 3\naudit unit tests that still fail with assertion panics:\n\n- `audit_dupes_only_materializes_groups_touching_changed_files`:\n  \"changed file should still match unchanged duplicate code\"\n- `audit_gate_new_only_inherits_pre_existing_duplicates_in_focused_files`:\n  \"current run should detect the pre-existing duplicate\"\n- `audit_gate_new_only_skips_base_snapshot_for_docs_only_diff`:\n  \"assertion failed: result.base_snapshot_skipped\"\n\nRoot cause: four other production sites in `crates/cli/src/audit.rs`\nstill used `std::fs::canonicalize`, each producing a `\\\\?\\C:\\...`\nverbatim path on Windows that mismatched against non-verbatim paths\nfrom other code paths. Sites switched to `dunce::canonicalize`:\n\n- `can_reuse_current_as_base::canonical_cache_dir` (load-bearing for\n  the docs-only test: `path.starts_with(canonical_cache_dir)` checked\n  a verbatim path against a non-verbatim changed_files entry)\n- `reusable_audit_worktree_path::repo_root` (hashes the repo root, so\n  inconsistent prefix shape produces unstable cache keys)\n- `paths_equal` (worktree-identity equality check)\n- `path_is_inside_temp_dir` (worktree temp-dir filter)\n\n`dunce::canonicalize` is identical to `std::fs::canonicalize` on POSIX\nso behaviour off Windows is unchanged.\n\nRefs #561.",
          "timestamp": "2026-05-21T23:27:03+01:00",
          "tree_id": "53cdbd59056d0392ba10a6e05e02375cbc5b2d33",
          "url": "https://github.com/fallow-rs/fallow/commit/19b761ef61cc7f7bc6f0a7c12d1915e4bf90a289"
        },
        "date": 1779402864300,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234859424,
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
          "id": "31412c065fd0f34a3fcc95553ed227e477c51673",
          "message": "feat(flags): expand SDK detection to PostHog, Vercel Flags, ConfigCat, Optimizely, Eppo\n\nBroadens the built-in feature-flag SDK detection set in fallow-extract\nfrom six providers to eleven, and teaches the recognizer to read flag\nkeys from object arguments (Vercel's documented flag({ key: \"...\" })\nshape) in addition to plain string arguments. Custom flag.sdkPatterns\nconfigurations keep their original flag(\"...\") matcher behavior so\nuser-defined recognizers never get shadowed by built-in providers.\n\nNew providers and surfaces: PostHog (useFeatureFlagEnabled,\nuseFeatureFlagPayload, isFeatureEnabled, getFeatureFlag); Vercel Flags\n(flag({ key }), evaluate(...) when imported from flags/* or\n@vercel/flags*); ConfigCat (getValueDetails for typed evaluation);\nOptimizely (decide/decideForKeys/useDecision and the typed Variable*\nfamily); Eppo (typed assignment + assignmentDetails getters across\nstring/boolean/numeric/integer/JSON).\n\nObject-argument extraction is import-scoped: Vercel's flag and\nevaluate symbols only match when the call site imports them from a\nflags package, so generic local flag or evaluate functions stay out\nof the catalog. CACHE_VERSION bumps to 92 (stacking on #549's 91) to\ninvalidate stale flag_uses entries on upgrade.\n\nUpdates the CLI flag-uses description, the MCP feature_flags tool\ntext, FlagsConfig.sdkPatterns docstring, and .claude/rules/detection.md\nto enumerate all eleven providers and the 40+ aggregate count.\n\nFixes #563.",
          "timestamp": "2026-05-21T23:52:12+01:00",
          "tree_id": "298e98bd04ff6093bff114e332e9687cd9053f78",
          "url": "https://github.com/fallow-rs/fallow/commit/31412c065fd0f34a3fcc95553ed227e477c51673"
        },
        "date": 1779404346691,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234889504,
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
          "id": "71f0be74c121c353c567d382e1b799ac0d90c125",
          "message": "fix(dupes): normalise focused-mode path comparison against verbatim Windows prefix\n\n* fix(dupes): normalise focused-mode path comparison against verbatim Windows prefix\n\nLast 2 Windows-only audit test failures from the push-to-main CI matrix\ntrace to focused duplicate analysis silently filtering every file as\nnon-focus.\n\nRoot cause: `crates/core/src/duplicates/shingle_filter.rs` and\n`crates/core/src/duplicates/detect/mod.rs` both did\n`focus_files.contains(&file.path)` directly. On Windows, focus_files\nenters non-verbatim (`C:\\Users\\Temp\\test\\src\\foo.ts`, joined onto a\ndunce-canonicalised toplevel from `try_get_changed_files`), while\nfile.path may carry the `\\\\?\\` verbatim prefix when the caller\npre-canonicalised opts.root with `std::fs::canonicalize` (the audit\ntest fixtures do this to exercise the macOS `/var/folders/...` ->\n`/private/var/folders/...` symlink case). Byte-level FxHashSet\ncontains mismatches on the prefix component, every file is marked\nnon-focus, the dupes detector materialises zero clone groups, and\nthe audit test panics on `dupes_report.clone_groups` empty.\n\nFix: normalise the focus set's entries through `dunce::simplified`\nonce at function entry, then look up via\n`normalized_focus.contains(dunce::simplified(&file.path))`.\n`dunce::simplified` is a no-op string-level operation on POSIX and\non non-verbatim Windows paths.\n\nTests that should pass after this lands:\n- audit_dupes_only_materializes_groups_touching_changed_files\n- audit_gate_new_only_inherits_pre_existing_duplicates_in_focused_files\n\nRefs #561.\n\n* chore(fmt): apply rustfmt reflow to path_is_focus closure",
          "timestamp": "2026-05-22T00:07:48+01:00",
          "tree_id": "01ec67063842e2086ddca9b6e7a12b17218e393f",
          "url": "https://github.com/fallow-rs/fallow/commit/71f0be74c121c353c567d382e1b799ac0d90c125"
        },
        "date": 1779405230163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 234986720,
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
          "id": "c0b8ebb699a1e25657c537056cccde0e60323012",
          "message": "fix(audit): normalise verbatim prefix in changed-files filter lookups (#573)\n\nPre-normalise the changed-files set via dunce::simplified once at function entry, then normalise the lookup side per comparison through a local contains_normalised helper. POSIX is a no-op.\n\nDiagnoses the remaining 2 Windows audit failures from the #561 push-to-main rollup: filter_results_by_changed_files and filter_duplication_by_changed_files in fallow-core did byte-level FxHashSet::contains against analysis-pipeline paths. After #566, try_get_changed_files joins git-emitted segments onto the dunce::canonicalize'd toplevel (non-verbatim); clone-instance and finding paths inherit the verbatim shape of opts.root because test fixtures pre-canonicalise with std::fs::canonicalize. The mismatch dropped every clone group from the safety-net filter_by_changed_files pass and every file-level finding from the dead-code filter.\n\nAdds two cfg(windows) regression tests pinning a verbatim instance / finding path against a non-verbatim changed-files entry.\n\nFixes #561",
          "timestamp": "2026-05-22T06:14:44+01:00",
          "tree_id": "6ac038d2d3fcde391eb87b0ed27c8621f56ad714",
          "url": "https://github.com/fallow-rs/fallow/commit/c0b8ebb699a1e25657c537056cccde0e60323012"
        },
        "date": 1779427251494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235055936,
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
          "id": "30cd07215d3dba9d11a9c15c114d9ddc248bba1c",
          "message": "fix(audit): accept root-anchored coverage-root prefix on Windows (#574)\n\nRelax validate_coverage_root_absolute to Path::has_root. validate_coverage_root_absolute previously checked Path::is_absolute, which on Windows requires a drive letter or UNC prefix. Linux-CI Istanbul data uses POSIX-shaped paths like /ci/workspace/src/index.ts, so --coverage-root /ci/workspace was the only shape that lined up with the data but was rejected with exit 2 on Windows. Path::has_root accepts both Windows-absolute and root-anchored POSIX prefixes while still rejecting truly-relative inputs.\n\nAdds POSIX unit tests for accept/reject/None paths, and cfg(windows) tests pinning that both shapes are accepted on Windows. The component-wise strip_prefix in load_istanbul_coverage tolerates either separator orientation, so no other call site changes.\n\nRefs #561",
          "timestamp": "2026-05-22T06:54:39+01:00",
          "tree_id": "b3aa48e7ef7fa5df45036fee83e7ea80da2743f7",
          "url": "https://github.com/fallow-rs/fallow/commit/30cd07215d3dba9d11a9c15c114d9ddc248bba1c"
        },
        "date": 1779429636199,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235056176,
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
          "id": "60b197c329c3976c3ffd6bcdfd59d8228f790545",
          "message": "fix(list): emit forward-slashed paths in --files and --entry-points JSON (#575)\n\nMirror the workspaces / nudge / rollup path-normalisation convention. fallow list --files --format json and --entry-points --format json projected per-path JSON without the .replace('\\\\', \"/\") that the workspaces array already applies, so consumers received backslashed paths on Windows. JSON output must be stable cross-platform for CI glob filters, MCP agents, and downstream pipelines.\n\nExisting list_files_includes_plugin_scoped_hidden_dirs_for_react_router and ..._for_remix tests already assert the forward-slash shape; they were silently passing on POSIX and failing on the push-to-main Windows matrix, so they are exactly the regression coverage.\n\nRefs #561",
          "timestamp": "2026-05-22T07:21:41+01:00",
          "tree_id": "6c086fec5003edd68a0e9ccc0eaa8ea6d2095fbf",
          "url": "https://github.com/fallow-rs/fallow/commit/60b197c329c3976c3ffd6bcdfd59d8228f790545"
        },
        "date": 1779431245871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235065392,
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
          "id": "b726cbe0d2e3edf4303bc71c4f4ff7d2d64eb5e4",
          "message": "fix(cli): type combined explain metadata",
          "timestamp": "2026-05-22T08:57:51+02:00",
          "tree_id": "ee305331a668cf42d9d8647374b7367ec9b0c670",
          "url": "https://github.com/fallow-rs/fallow/commit/b726cbe0d2e3edf4303bc71c4f4ff7d2d64eb5e4"
        },
        "date": 1779433460814,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235174048,
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
          "id": "8c74aefb490f2d8eda3f972f59d3eea93c7cfc04",
          "message": "test(core): canonicalise init_repo via dunce so test fixtures match production toplevel (#580)\n\ninit_repo and resolve_git_toplevel_returns_canonical_path called std::fs::canonicalize, which on Windows returns the \\\\?\\ verbatim form. Production resolve_git_toplevel was swapped to dunce::canonicalize in PR #566 so it strips that prefix. The test-side verbatim path then diverged from the production-side non-verbatim path and every changed.contains(&expected) assertion silently failed. Swap both test-side call sites to dunce::canonicalize; POSIX behaviour is identical.\n\nAlso marks proc-macro2 as cargo-shear-ignored in crates/cli/Cargo.toml. The dep was added in 7cd0a865 as a dev-dependency without an explicit import, but its span-locations feature is what makes syn-returned .span().start().line report real source positions inside the schema-drift gate. Removing the dep would silently collapse the gate; ignore it via [package.metadata.cargo-shear].ignored instead, matching the established miette precedent.\n\nCloses #561",
          "timestamp": "2026-05-22T08:22:08+01:00",
          "tree_id": "3acf5705597fab9507fa731599a02078c78d3681",
          "url": "https://github.com/fallow-rs/fallow/commit/8c74aefb490f2d8eda3f972f59d3eea93c7cfc04"
        },
        "date": 1779434879758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235174048,
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
          "id": "fa3bd8a38156acd544c5a50475e715fa3fe8d79c",
          "message": "fix(cli): route fallow list paths through format_display_path on all four emission sites\n\n`fallow list --files` and `fallow list --entry-points` previously\nemitted forward-slashed paths via `--format json` but raw\n`relative.display()` via plain-text stdout. On Windows the JSON\nsurface was POSIX-shaped while the human surface leaked backslashes,\ninconsistent for CI consumers that xargs/grep the plain output.\n\nRoute all four list emission sites (JSON files + entry_points,\nplain-text files + entry_points) through the canonical\n`report::format_display_path` helper so Windows backslashes never\nreach stdout regardless of format.\n\nTighten the two existing list_json regression tests with\n`assert!(!path.contains('\\\\'))` and replace the lenient\n`starts_with(\\\"src/\\\") || starts_with(\\\"src\\\\\\\\\\\")` clause with strict\n`starts_with(\\\"src/\\\")` so a backslashed path now fails CI on the\nWindows leg pre-fix and passes post-fix.\n\nRefs #561",
          "timestamp": "2026-05-22T08:40:03+01:00",
          "tree_id": "f69d8cc949cf1d758a29db68066ef5a944640b70",
          "url": "https://github.com/fallow-rs/fallow/commit/fa3bd8a38156acd544c5a50475e715fa3fe8d79c"
        },
        "date": 1779436028566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235164360,
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
          "id": "239f75a6d9704fadfe1db30ab14665a355ee673a",
          "message": "fix(core): normalise path separators in trace::path_matches (#584)\n\npath_matches did byte-level string comparison between the filesystem-shaped module_path (backslash-separated on Windows) and the forward-slash-shaped user_path (the convention every cross-platform consumer uses, including the MCP server's trace_export / trace_file tools which pass src/utils.ts literally). On Windows the four comparisons all silently missed even when the file was in the graph, so fallow dead-code --trace src/utils.ts:foo returned \"no module found\" instead of the trace payload.\n\nNormalise both sides to forward slashes before each comparison; POSIX is a no-op. Two regression tests pin the fix using PathBuf::from(r\"D:\\\\a\\\\...\") raw-string Windows-shaped literals that work cross-platform.\n\nFixes the MCP e2e e2e_trace_export_returns_json and e2e_trace_file_returns_json failures.\n\nRefs #561",
          "timestamp": "2026-05-22T09:18:24+01:00",
          "tree_id": "cf4323d1cf6175e7c975e5e1f150d4aa803af4b2",
          "url": "https://github.com/fallow-rs/fallow/commit/239f75a6d9704fadfe1db30ab14665a355ee673a"
        },
        "date": 1779438277126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235193192,
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
          "id": "d177bab8546290ca50321e3a8ab16d02ca74d456",
          "message": "fix(core): serialise trace output PathBufs with serde_path forward-slash (#585)\n\nAttach #[serde(serialize_with = \"serde_path::serialize\")] to every single-PathBuf field and serialize_vec to every Vec<PathBuf> field in the trace output structs (ExportTrace, ExportReference, ReExportChain, FileTrace, TracedReExport, DependencyTrace, CloneTrace). After PR #584 fixed path_matches so the lookup succeeded on Windows, the output still serialised backslash-separated paths via serde's default, breaking JSON consumers (MCP agents, CI glob filters, downstream pipelines) that expect forward-slash. CloneInstance.file already used this convention; trace structs now match.\n\nTwo cross-platform regression tests build a backslash-shaped PathBuf literal and assert the JSON contains the forward-slash form for every newly-decorated field.\n\nFixes the remaining MCP e2e e2e_trace_export_returns_json and e2e_trace_file_returns_json failures.\n\nRefs #561",
          "timestamp": "2026-05-22T09:43:06+01:00",
          "tree_id": "fc7d1cc4e6428d6546c061d96045d4a1f4241da4",
          "url": "https://github.com/fallow-rs/fallow/commit/d177bab8546290ca50321e3a8ab16d02ca74d456"
        },
        "date": 1779439747522,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235231264,
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
          "id": "23c7403f0e1ccd0e271d1d9448f739b5452acb81",
          "message": "fix(report): defer CodeClimate severity mapping + centralise next to SARIF\n\nThe three generic-iterator helpers in `crates/cli/src/report/codeclimate.rs`\n(`push_dep_cc_issues`, `push_unused_export_issues`, `push_unused_member_issues`)\neagerly called `severity_to_codeclimate(severity)` BEFORE iterating their\nfindings, so any caller passing `severity = Off` and an empty (or\nproduction-filtered) findings vec hit the `Off => unreachable!()` arm and\nexited 101 with `internal error: entered unreachable code`. Reproduced via\n`fallow check --format codeclimate --root benchmarks/fixtures/real-world/zod\n--production`. The slice-based helpers were already safe via their existing\n`is_empty()` early-return guards. The fix moves the severity mapping inside\neach generic helper's loop body so the call only fires when there is a\nfinding to emit; behaviour for non-empty findings stays byte-identical.\n\nIn the same pass, the inline `severity_to_codeclimate` body is now a one-line\ndelegate to a new `crates/cli/src/report/ci/severity.rs::codeclimate_severity`\nhelper, alongside the pre-existing `sarif_level` and `review_label` mappers.\nAll three CI-format severity vocabularies now live in one module, and adding\na future `Severity` variant compile-fails at every mapper simultaneously\nrather than silently fallthrough on the CodeClimate side. The 14+ call sites\nof `severity_to_codeclimate` are unchanged (mirrors the\n`severity_to_sarif_level` wrapper pattern in `sarif.rs`).\n\nNew regression test\n`build_codeclimate_with_off_severity_and_empty_findings_does_not_panic` locks\nin the production-mode safety property. A new\n`codeclimate_severity_off_is_unreachable` `#[should_panic]` test in\n`ci/severity.rs::tests` mirrors the SARIF mapper's coverage. The pre-existing\nstale `severity_off_maps_to_minor` test name (which actually asserts the\n`unreachable!()` panic) was renamed opportunistically to\n`severity_off_is_unreachable`.\n\nFixes #452.",
          "timestamp": "2026-05-22T12:47:43+01:00",
          "tree_id": "9ead4a026629d06b5e8fea35149bf1a9a01675a9",
          "url": "https://github.com/fallow-rs/fallow/commit/23c7403f0e1ccd0e271d1d9448f739b5452acb81"
        },
        "date": 1779450916275,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235298320,
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
          "id": "e5e082abbfa94ce234d6a33036b38975e30fef9a",
          "message": "chore: release v2.78.0",
          "timestamp": "2026-05-22T14:10:23+02:00",
          "tree_id": "7476225041fb4838486d000a08f8ab0de925903f",
          "url": "https://github.com/fallow-rs/fallow/commit/e5e082abbfa94ce234d6a33036b38975e30fef9a"
        },
        "date": 1779452265053,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235306640,
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
          "id": "92e2533d695ad798636f8e5e072c87085928c647",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.78.0",
          "timestamp": "2026-05-22T14:44:02+02:00",
          "tree_id": "407ba1d548c54e39b5efb1729371b2af2aae0974",
          "url": "https://github.com/fallow-rs/fallow/commit/92e2533d695ad798636f8e5e072c87085928c647"
        },
        "date": 1779454200044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235306640,
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
          "id": "b467e04c1377424747107ce1554a82bf64687a22",
          "message": "fix(ci): silence two more Windows-only clippy regressions on `main`\n\nSibling to PR #587 and the v2.78.0 release commit's mcp tests fix. Rust 1.95's\nstrict `-D warnings` surfaced two more Windows-only paths on the post-release\nci.yml run for main:\n\n- `crates/cli/src/ci_template.rs::set_executable` Windows stub returns\n  `std::io::Result<()>` to match the Unix signature so the unconditional\n  caller can `?`-propagate without `#[cfg]` branching. The Windows body is\n  trivially `Ok(())`, so clippy's `unnecessary_wraps` fires. Suppress via\n  `#[expect(clippy::unnecessary_wraps, reason = \"...\")]` on the Windows\n  stub; matching the Unix signature is load-bearing for the caller.\n\n- `crates/cli/src/signal/scoped_child.rs::assert_deregistered` test helper\n  is only called from two `#[cfg(unix)]` tests in the same module. Gating\n  the helper itself with `#[cfg(unix)]` aligns it with its callers and\n  silences the `dead-code` lint on Windows.\n\nBoth are post-release CI fixes; v2.78.0 binaries are unaffected. Refs #447.",
          "timestamp": "2026-05-22T16:15:53+02:00",
          "tree_id": "05dfc715ccb9403790a2796c1247b4c3dd63fee6",
          "url": "https://github.com/fallow-rs/fallow/commit/b467e04c1377424747107ce1554a82bf64687a22"
        },
        "date": 1779459717413,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235306640,
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
          "id": "721f47b3d036b2582f6acd68b32693713dc71f0c",
          "message": "fix(cli): silence Windows-only dead_code on ScopedChild::id (#595)\n\nAfter PR #587 and b467e04c closed the bulk of the cfg(windows) clippy hits, one Rust 1.95 lint remained that POSIX clippy never sees: ScopedChild::id is consumed only by the cfg(unix) signal_test_helper in main.rs; on Windows the helper is excluded so the method has no caller. Tag with #[cfg_attr(not(unix), expect(dead_code))] to preserve the symmetric public surface for embedders rather than gating the method itself with #[cfg(unix)].\n\nPOSIX clippy + workspace tests stay green.\n\nRefs #561",
          "timestamp": "2026-05-22T17:47:50+01:00",
          "tree_id": "991866f70fad5320edde9b52b7ead5ebbaeb88f4",
          "url": "https://github.com/fallow-rs/fallow/commit/721f47b3d036b2582f6acd68b32693713dc71f0c"
        },
        "date": 1779468845426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235306640,
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
          "id": "7f89de4fc78789364b4d35df1a7e647ed783e316",
          "message": "chore: release v2.78.1",
          "timestamp": "2026-05-22T19:06:03+02:00",
          "tree_id": "35d64bc4b79b7ac57ab36da1c73cfc80ecd3f260",
          "url": "https://github.com/fallow-rs/fallow/commit/7f89de4fc78789364b4d35df1a7e647ed783e316"
        },
        "date": 1779469939849,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235274480,
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
          "id": "8604f89c14304bd43d3394782b736ffc983bce9a",
          "message": "fix(cli): gate scoped_child::tests module behind cfg(unix) (#599)\n\nAfter PR #595 and the v2.78.1 follow-up release made assert_deregistered cfg(unix), every test inside scoped_child::tests is cfg(unix) (they all exec /bin/sh / true / echo). On Windows the module reduces to just use super::*;, which Rust 1.95's -D unused-imports flags.\n\nGate the module itself with #[cfg(all(test, unix))] so the whole suite (and its imports) only compile when the bodies have a chance to run. No Windows test loss because there were no Windows tests in this module to begin with.\n\nRefs #561",
          "timestamp": "2026-05-22T18:40:15+01:00",
          "tree_id": "498d8a4c02a390681e72aafa4e36372e6f4547e1",
          "url": "https://github.com/fallow-rs/fallow/commit/8604f89c14304bd43d3394782b736ffc983bce9a"
        },
        "date": 1779471976982,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235274480,
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
          "id": "57110c3385106100bd0b3bc431632db66c1fab18",
          "message": "fix: reduce Wrangler, Content Collections, and loader false positives (#596)\n\nReduces false positives across three framework / runtime conventions:\n\n* Cloudflare Workers: read `wrangler.{toml,json,jsonc}` for the `main:`\n  worker entry plus `env.<name>.main` overrides, and widen the static\n  glob to `src/{index,worker}.{ts,tsx,js,jsx,mts,mjs}` so JSX worker\n  entries (rwsdk, React Router worker, Hono on Workers) stay reachable.\n\n* Node `module.register()`: credit loader-hook exports (`initialize`,\n  `resolve`, `load`, `globalPreload`, plus the legacy `getFormat`,\n  `getSource`, `transformSource` for projects still on older Node) on\n  the resolved loader target so they survive `unused-export` detection.\n  Resolves both literal-string and `new URL(...)`-bound specifiers,\n  including the conditional `condition ? srcUrl : distUrl` shape.\n\n* Content Collections: new plugin marking\n  `content-collections.{ts,tsx,js,jsx,mts,mjs,cts,cjs}` as a framework\n  entry and crediting the `@content-collections/*` tooling. Activates on\n  any of `@content-collections/{core,vite,next,solid-start,remix-vite,qwik,vinxi}`\n  so projects that only list a framework integration at the top level\n  (the common case) are still detected.\n\nBumps the extraction cache version so users on warm caches pick up the\nloader-hook credit on first run after upgrading.\n\nCloses #588\nCloses #589\nCloses #590",
          "timestamp": "2026-05-22T19:53:19+01:00",
          "tree_id": "3c6695a333e7ae1ea11cd865ccef53dbd3e2019f",
          "url": "https://github.com/fallow-rs/fallow/commit/57110c3385106100bd0b3bc431632db66c1fab18"
        },
        "date": 1779476392716,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235746000,
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
          "id": "5a4bcc0b8c0498059a19894948d554e72716f746",
          "message": "docs: reposition fallow as codebase intelligence",
          "timestamp": "2026-05-22T21:34:50+02:00",
          "tree_id": "b890279d99ac3adf9069bede3ddb65d93175a2ae",
          "url": "https://github.com/fallow-rs/fallow/commit/5a4bcc0b8c0498059a19894948d554e72716f746"
        },
        "date": 1779478878682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235746000,
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
          "id": "07b784a4b81c774ed3367b04678a2fa9c907ee05",
          "message": "fix(unused-class-members): credit Playwright helper fixtures\n\nPlaywright users can wrap base.extend in exported helper functions that do local setup before returning the extended test. The extractor previously only recognized helper bodies whose sole statement was return base.extend, so nested fixture page-object methods could be reported as unused.\n\nThis updates helper-function extraction to inspect the final returned call while preserving the existing direct-return and alias-chain behavior. The extraction cache is bumped because cached modules from older builds can miss the fixture definition sentinels.\n\nRegression coverage adds an extractor unit test plus an integration fixture that checks both the local-setup helper path and a direct-return control path, while still reporting genuinely unused methods.\n\nFixes #586.",
          "timestamp": "2026-05-22T20:46:21+01:00",
          "tree_id": "91b82ce3b832350e276d7a95c4ea2e3fd676077e",
          "url": "https://github.com/fallow-rs/fallow/commit/07b784a4b81c774ed3367b04678a2fa9c907ee05"
        },
        "date": 1779479567512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235746720,
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
          "id": "e63fbe4d1783276468f87bd81ca022fe8d7a5d48",
          "message": "fix(cli): polish human summary output\n\nCombined human summary output now lets the combined renderer own the section headings while the per-analysis summary renderers suppress their duplicate titles. The report context carries that choice through dead-code, duplication, and health output without changing JSON or CI formats.\n\nExplain accepts issue labels split across words, so commands like `fallow explain unused files` resolve to the same rule metadata as the hyphenated form. Config-loaded notices are deduped by canonical config path so combined runs do not repeat the same line while separate configs still report independently.",
          "timestamp": "2026-05-22T21:05:15+01:00",
          "tree_id": "dcca61d3d8ed640dbc187769c5032fa093b32c53",
          "url": "https://github.com/fallow-rs/fallow/commit/e63fbe4d1783276468f87bd81ca022fe8d7a5d48"
        },
        "date": 1779480779945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235801344,
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
          "id": "4e7eecf09fdb817b09e0d4654cf6f1f962f4d8d4",
          "message": "fix(tanstack): suppress generated route tree imports\n\nTanStack Router and Start projects commonly import the generated\nroute tree as ./routeTree.gen before src/routeTree.gen.ts exists in a\nclean checkout. That framework artifact was reported as an unresolved\nimport even though TanStack tooling creates it during codegen.\n\nRegister /routeTree.gen as a TanStack Router generated import suffix\nthrough the existing plugin hook. The suppression stays plugin-gated,\nso non-TanStack projects still report the same missing import.\n\nAdd a regression fixture with an active TanStack Router project, no\ngenerated route tree file, and a separate missing import control. The\ntest locks in both the false-positive fix and the ordinary unresolved\nimport behavior.\n\nFixes #646.",
          "timestamp": "2026-05-22T21:17:01+01:00",
          "tree_id": "2063a9403501a471813b45358e0f121025b00554",
          "url": "https://github.com/fallow-rs/fallow/commit/4e7eecf09fdb817b09e0d4654cf6f1f962f4d8d4"
        },
        "date": 1779481397603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 235801776,
            "unit": "bytes"
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
        "date": 1779483452111,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 236077848,
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
          "id": "62bed8d6298ba5e83a178f4fcbee05ee7ae548d1",
          "message": "fix(unused-class-members): preserve public package APIs\n\nTreat class members on classes exported from non-private package entry points as part of the public package API, including transitive star barrels and source-first package entry fallbacks. This keeps library builder APIs from being reported as removable internals while still reporting genuinely unused internal members and enum members.\n\nResolve package entry paths that point at missing root build artifacts back to source indexes, and recognize exportless source subpath indexes when no exports map exists. Package manifests also ignore non-boolean private values instead of aborting analysis on permissive real-world package.json data.\n\nFixes #643.",
          "timestamp": "2026-05-22T22:04:17+01:00",
          "tree_id": "da1796a0cbdf1cd2c9b6b88b6351b1ad7f71817a",
          "url": "https://github.com/fallow-rs/fallow/commit/62bed8d6298ba5e83a178f4fcbee05ee7ae548d1"
        },
        "date": 1779484209123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 236424504,
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
          "id": "6d5b84cd74fbb99e839d1b75ff12933eb26c84b6",
          "message": "chore: release v2.79.0",
          "timestamp": "2026-05-22T23:29:18+02:00",
          "tree_id": "d476e7566053f30eb08ef07ff88ca5fa1f716bff",
          "url": "https://github.com/fallow-rs/fallow/commit/6d5b84cd74fbb99e839d1b75ff12933eb26c84b6"
        },
        "date": 1779485773702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 236451856,
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
          "id": "a23dba54581ec3f59a19ef5e13aaf2713b0896c7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.79.0",
          "timestamp": "2026-05-22T23:59:39+02:00",
          "tree_id": "eb1bb2f69d5d896e3508e09d2dec9c819fcd6fa0",
          "url": "https://github.com/fallow-rs/fallow/commit/a23dba54581ec3f59a19ef5e13aaf2713b0896c7"
        },
        "date": 1779487538014,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 236451856,
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
          "id": "2f8fc779cffcde8caf01b419a60e1017307a5a49",
          "message": "fix(mdx): ignore imports inside documentation code fences\n\nMDX extraction previously treated import and export examples inside fenced Markdown blocks as executable top-level MDX statements. Documentation snippets that use virtual file boundaries could therefore create graph edges and false unresolved-import findings.\n\nTrack CommonMark-style backtick and tilde fences before the existing MDX statement extractor runs. Fenced blocks are skipped entirely, while real top-level MDX imports and exports continue through the same parser path.\n\nAdd unit, parser, and integration coverage for fenced examples, including a fixture that preserves a real top-level missing import as a control. Bump the extraction cache version so warm MDX cache entries are re-extracted on upgrade.\n\nFixes #639.",
          "timestamp": "2026-05-23T07:47:09+01:00",
          "tree_id": "a5459ca8fa383ccdc1ae4582d7cbe993efb94235",
          "url": "https://github.com/fallow-rs/fallow/commit/2f8fc779cffcde8caf01b419a60e1017307a5a49"
        },
        "date": 1779519276423,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 236976000,
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
          "id": "a9cefb483b39a3fe21e171d56fa7def1dc4bace4",
          "message": "fix(core): treat bare bun as builtin\n\nCloses #642.",
          "timestamp": "2026-05-23T08:04:32+01:00",
          "tree_id": "7ffcc0816f0bda828e6478c5186a364c86c15a22",
          "url": "https://github.com/fallow-rs/fallow/commit/a9cefb483b39a3fe21e171d56fa7def1dc4bace4"
        },
        "date": 1779520239805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 236991800,
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
          "id": "f92318a75a2aee0732382d8069d8366931f01572",
          "message": "fix(tanstack): suppress Start virtual modules\n\nTanStack Start imports manifest and injected-head script modules through framework-provided virtual specifiers with a :v suffix. Those specifiers are not npm packages, but the TanStack plugin did not register them as virtual modules, so dead-code analysis reported them as unlisted dependencies.\n\nRegister the colon-suffixed TanStack Start virtual module prefixes through the existing plugin virtual-prefix hook. Add plugin-gated positive and negative coverage, including unresolved-import suppression and end-to-end analysis fixtures for static and dynamic imports.\n\nFixes #636.",
          "timestamp": "2026-05-23T08:33:06+01:00",
          "tree_id": "f8c31997a7b57f6ab66e7a20f46bd0f0e039a531",
          "url": "https://github.com/fallow-rs/fallow/commit/f92318a75a2aee0732382d8069d8366931f01572"
        },
        "date": 1779521959675,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 236992392,
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
          "id": "a13ec35cec22c6edab315ed472cd634d218f6451",
          "message": "fix(extract): credit Node script runner entrypoints\n\nResolve extensionless package-script paths through directory index files after exact and extension fallback.\n\nCredit statically resolvable local child_process.fork runner targets from proven Node child_process imports and requires, including path.resolve(fileURLToPath(import.meta.url), ...).\n\nFixes #638.",
          "timestamp": "2026-05-23T15:25:08+01:00",
          "tree_id": "cc2a64b75e2862a036c38750f4687a0c2e105a93",
          "url": "https://github.com/fallow-rs/fallow/commit/a13ec35cec22c6edab315ed472cd634d218f6451"
        },
        "date": 1779546732881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 237395496,
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
          "id": "ef3298ddc9e17197bf75522d55e90454b35bd006",
          "message": "feat: add Fumadocs plugin\n\nfeat: add Fumadocs plugin\n\nAdd a built-in plugin that recognizes Fumadocs source config files, generated .source modules, configured MDX content roots, and fumadocs-mdx virtual imports. This replaces broad dynamicallyLoaded workarounds with framework-scoped detection.\n\nThe plugin parses literal collection dir values from defineCollections, defineDocs, and direct defineConfig collections entries while avoiding unrelated nested option dir fields. Regression coverage exercises a workspace-shaped docs package and the public everr-labs/everr smoke confirms the old-vs-new docs-content delta.\n\nHarden graph validation exposed by CI: re-export cycle regression tests now assert structured graph payloads instead of captured tracing output, and the package-map lookup skips the canonicalize fallback under Miri because isolated Miri does not support realpath.\n\nFixes #633.",
          "timestamp": "2026-05-23T15:34:07+01:00",
          "tree_id": "79279bff93588e6c08cade4b8d79874d3da115be",
          "url": "https://github.com/fallow-rs/fallow/commit/ef3298ddc9e17197bf75522d55e90454b35bd006"
        },
        "date": 1779547221331,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 237858952,
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
          "id": "ac81b9247538cf526db76f97dd2bf18a2f4dceb3",
          "message": "fix(core): honor Wrangler config precedence\n\nMatch Wrangler's same-directory config selection before extracting worker main entries. Only the highest-precedence sibling config contributes main and environment main entry patterns, while all wrangler config files remain credited as used.\n\nPin Wrangler's current source order, json, jsonc, toml, with pairwise tests, a no-fallback presence test, non-sibling isolation, and an end-to-end unused-file regression for stale migration configs.\n\nFixes #630.",
          "timestamp": "2026-05-23T15:52:30+01:00",
          "tree_id": "fb031db1f013464842049888ef4d77509678aaaa",
          "url": "https://github.com/fallow-rs/fallow/commit/ac81b9247538cf526db76f97dd2bf18a2f4dceb3"
        },
        "date": 1779548315302,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 237869024,
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
          "id": "c82ba6ffbb26df4fa411b342fe3f0116e00b8eef",
          "message": "feat: add optional review guidance\n\n* feat: add optional review guidance\n\n* test(ci): cover review guidance wiring",
          "timestamp": "2026-05-23T18:25:52+01:00",
          "tree_id": "3bb8bded8e399b9bc2fc1885ddabb9acbacb7aec",
          "url": "https://github.com/fallow-rs/fallow/commit/c82ba6ffbb26df4fa411b342fe3f0116e00b8eef"
        },
        "date": 1779557533737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 237889752,
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
          "id": "4ce779558a06ddbe8cae6096de095b4fee39e9dd",
          "message": "feat: add PR comment summary scope\n\n* chore: open issue #661 implementation branch\n\n* fix(ci): add diff scope for sticky summaries\n\n* test(ci): avoid racy summary scope env mutation",
          "timestamp": "2026-05-24T08:28:55+01:00",
          "tree_id": "4cc7a012a41ca56fae83a44ae06a2000ad424af2",
          "url": "https://github.com/fallow-rs/fallow/commit/4ce779558a06ddbe8cae6096de095b4fee39e9dd"
        },
        "date": 1779608105106,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 237897744,
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
          "id": "017658ea7af7473dcc87c921a092f0bd507457fd",
          "message": "chore: release v2.80.0",
          "timestamp": "2026-05-24T09:38:07+02:00",
          "tree_id": "46bd21cb4f96e15a0d4a8dce8b03a8d51af3ba2a",
          "url": "https://github.com/fallow-rs/fallow/commit/017658ea7af7473dcc87c921a092f0bd507457fd"
        },
        "date": 1779608711743,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 237894656,
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
          "id": "e32cc0a415dcfddc776e9ec032eed6de218e0135",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.80.0",
          "timestamp": "2026-05-24T10:10:02+02:00",
          "tree_id": "c1be6b2b1dc4f2a25c95e6b5029c47cca05d7dd2",
          "url": "https://github.com/fallow-rs/fallow/commit/e32cc0a415dcfddc776e9ec032eed6de218e0135"
        },
        "date": 1779610554475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 237894656,
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
          "id": "04fc48077af977a27894861d8db1a7c4243c4640",
          "message": "fix: recognize Danger and Stryker tooling configs\n\n* chore: open issue #618 implementation branch\n\n* fix: recognize Danger and Stryker tooling configs",
          "timestamp": "2026-05-25T12:08:53+01:00",
          "tree_id": "ebcbe56176684396b09e661625d1befe40aaa2c8",
          "url": "https://github.com/fallow-rs/fallow/commit/04fc48077af977a27894861d8db1a7c4243c4640"
        },
        "date": 1779707729642,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 237968520,
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
          "id": "3d93824183baf1a797d8fa4baf36edd9a168bc16",
          "message": "fix: skip platform builtins in unresolved imports\n\nSkip unresolved-import findings when an unresolvable specifier is accepted by is_builtin_module.\n\nAdd regression coverage for current Node, Bun, Cloudflare, Sass, and Deno builtin forms, while keeping builtin-like package names and fake node subpaths reportable.\n\nFixes #634.",
          "timestamp": "2026-05-25T12:26:22+01:00",
          "tree_id": "518433c3eacf3d2fcf6ff740632d20956da63b76",
          "url": "https://github.com/fallow-rs/fallow/commit/3d93824183baf1a797d8fa4baf36edd9a168bc16"
        },
        "date": 1779708748587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 237968760,
            "unit": "bytes"
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
        "date": 1779711187968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 238042224,
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
          "id": "0ba5cf0b0d03c821b244625fa24fcce4c9c61a6e",
          "message": "fix: handle re-export resolver source edges (#666)\n\nFixes resolver source edges that were only handled for imports.\n\nUnresolved named and star re-export sources now use the same source-edge contract as imports, so they are reported instead of being skipped.\n\nPackage imports and exports array targets now preserve fallback order. Package imports also credit external package targets, which avoids false unlisted dependency reports for package import aliases.",
          "timestamp": "2026-05-25T13:26:13+01:00",
          "tree_id": "0c56b912166f6340edb225166aeb0458a9ee8dd9",
          "url": "https://github.com/fallow-rs/fallow/commit/0ba5cf0b0d03c821b244625fa24fcce4c9c61a6e"
        },
        "date": 1779712327750,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 238146016,
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
          "id": "2f4a8313def90099019820c3e03ba0d571c5bdae",
          "message": "fix: guard CachedModule cache shape\n\n* chore: open issue 443 implementation branch\n\n* fix: guard cached module shape",
          "timestamp": "2026-05-25T13:57:59+01:00",
          "tree_id": "a414603807ce9de5bc42c3bc5f3a639ecb8b0a68",
          "url": "https://github.com/fallow-rs/fallow/commit/2f4a8313def90099019820c3e03ba0d571c5bdae"
        },
        "date": 1779714241487,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 238146576,
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
          "id": "a48e02fed77f1ec08347e771a8c6e72d465801ef",
          "message": "fix(health): clarify ownership state\n\nFixes #478.",
          "timestamp": "2026-05-25T14:46:04+01:00",
          "tree_id": "4649914d7218365d935d0c06bc54813332c0733a",
          "url": "https://github.com/fallow-rs/fallow/commit/a48e02fed77f1ec08347e771a8c6e72d465801ef"
        },
        "date": 1779717145058,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 238350720,
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
          "id": "c0f47b501edd68de711a5c59cdec99d52ef5e91b",
          "message": "fix: harden programmatic napi analysis context\n\nAdd per-call Rayon pools for programmatic and N-API analyses so thread counts do not become first-call-wins process state.\n\nAdd programmatic diff_file and N-API diffFile, and thread explicit diff indexes through dead-code, duplication, and health execution without letting embedded callers fall back to the CLI shared diff cache.\n\nAdd regression coverage for CLI global parity, per-call thread counts, per-call diff scoping, shared-diff isolation, and Node diffFile usage.\n\nFixes #469.",
          "timestamp": "2026-05-25T14:59:20+01:00",
          "tree_id": "b3afbf6694de62a65356b73ca946001919187f5c",
          "url": "https://github.com/fallow-rs/fallow/commit/c0f47b501edd68de711a5c59cdec99d52ef5e91b"
        },
        "date": 1779717932047,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 238354424,
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
          "id": "2a38c0a6b2ae19425265647648c7bfc4d03e8abb",
          "message": "fix: harden fallow cloud API client\n\nCentralize cloud API client setup, Retry-After handling, shared error-envelope parsing, and FALLOW_CA_BUNDLE support across fallow cloud paths.\n\nFixes #464.",
          "timestamp": "2026-05-25T15:10:51+01:00",
          "tree_id": "983f95bba320d2c443d068ddd73c11162e609973",
          "url": "https://github.com/fallow-rs/fallow/commit/2a38c0a6b2ae19425265647648c7bfc4d03e8abb"
        },
        "date": 1779718608693,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 238616160,
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
          "id": "3bbc57c10ff91d823d29d06779921330da07b935",
          "message": "test: gate MCP tool default drift\n\nCloses #455",
          "timestamp": "2026-05-25T19:24:23+01:00",
          "tree_id": "92b272b9aed73a1a8ddcb463550cdeada56cee99",
          "url": "https://github.com/fallow-rs/fallow/commit/3bbc57c10ff91d823d29d06779921330da07b935"
        },
        "date": 1779733852551,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 239017392,
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
          "id": "7f225736d007ddfa3a0959f71c274cc0ba3d144c",
          "message": "fix: treat scaffold templates as used assets\n\n* chore: open issue #635 implementation branch\n\n* fix: treat scaffold templates as used assets",
          "timestamp": "2026-05-25T22:07:46+01:00",
          "tree_id": "f2c36b50d7864fa21033a8a0bb305726d775117a",
          "url": "https://github.com/fallow-rs/fallow/commit/7f225736d007ddfa3a0959f71c274cc0ba3d144c"
        },
        "date": 1779743632023,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 239158672,
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
          "id": "1eafebd46c6c3aa7d88ddf7504aea857402c117d",
          "message": "feat: add RedwoodSDK worker entrypoints\n\nAdd a built-in RedwoodSDK plugin activated by `rwsdk` that marks `src/worker.*` as a runtime entrypoint within the active workspace. Keep Vite config ownership with the existing Vite plugin so `rwsdk/vite` apps do not trigger config-pattern collisions.\n\nFixes #632.",
          "timestamp": "2026-05-25T22:20:23+01:00",
          "tree_id": "5e45b3ed56c62e94eb0e97d9f84c2fcc43767891",
          "url": "https://github.com/fallow-rs/fallow/commit/1eafebd46c6c3aa7d88ddf7504aea857402c117d"
        },
        "date": 1779744374406,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 239183856,
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
          "id": "295e2904232c41f81b021716955278d72c059e6b",
          "message": "feat: add OpenCode plugin support\n\nAdds built-in OpenCode plugin support so OpenCode project plugin files and opencode.json plugin dependencies are treated as reachable.\n\nFixes #629.",
          "timestamp": "2026-05-25T22:37:32+01:00",
          "tree_id": "7794b0b1c5573b7148375d0a8fc6d6b0970773cd",
          "url": "https://github.com/fallow-rs/fallow/commit/295e2904232c41f81b021716955278d72c059e6b"
        },
        "date": 1779745407077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240092744,
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
          "id": "6e9b848395bcb0199dbfffc2c65df00fff5d7ffc",
          "message": "test: reject rooted package asset entries",
          "timestamp": "2026-05-25T23:49:27+02:00",
          "tree_id": "1064d747d2f58c1f3938b4376e52a928f5a24c99",
          "url": "https://github.com/fallow-rs/fallow/commit/6e9b848395bcb0199dbfffc2c65df00fff5d7ffc"
        },
        "date": 1779746148806,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240092728,
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
          "id": "9c7a564b9b65a6bde49dc60d4e1e8c1b1d26e8c1",
          "message": "test: scope unix-only coverage imports",
          "timestamp": "2026-05-26T00:06:57+02:00",
          "tree_id": "90a117df701ad5cdaef388717b14e74e55827a0f",
          "url": "https://github.com/fallow-rs/fallow/commit/9c7a564b9b65a6bde49dc60d4e1e8c1b1d26e8c1"
        },
        "date": 1779747198543,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240092728,
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
          "id": "f12e98010219a828e6ff9264e6b0c6a78d86ef1c",
          "message": "feat(plugins): credit Lexical custom node lifecycle methods as used (#682)\n\nLexical reconstructs, clones, serializes, reconciles, and decorates custom\nnodes through a fixed set of class methods called reflectively at runtime.\nLocal project code never calls them directly, so they surfaced as\nunused-class-member false positives.\n\nThe new built-in lexical plugin (enabler: lexical, @lexical/) returns\nheritage-scoped used_class_member_rules for the three documented extendable\nnode bases: DecoratorNode, ElementNode, and TextNode. The shared lifecycle\nset (getType, clone, importJSON, importDOM, exportJSON, exportDOM, createDOM,\nupdateDOM, updateFromJSON, getTextContent, isInline) is credited on all three;\ndecorate is scoped to DecoratorNode only. Non-lifecycle methods on a node\nsubclass are still reported.\n\nReplaces the manual scoped usedClassMembers allowlist users hand-write today.\n\nFixes #628",
          "timestamp": "2026-05-25T23:47:26+01:00",
          "tree_id": "d627bb3d543c2683c735a31557e5081c29f93843",
          "url": "https://github.com/fallow-rs/fallow/commit/f12e98010219a828e6ff9264e6b0c6a78d86ef1c"
        },
        "date": 1779749681850,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240171624,
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
          "id": "9de44d7faf6a0832739993df9829a11f5812ac2d",
          "message": "chore: release v2.81.0",
          "timestamp": "2026-05-26T06:48:04+02:00",
          "tree_id": "c3d1de812df994e846909ad2229dcda901e8834f",
          "url": "https://github.com/fallow-rs/fallow/commit/9de44d7faf6a0832739993df9829a11f5812ac2d"
        },
        "date": 1779771298729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240168144,
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
          "id": "7c2888f05cc6ef87c40e24a384083b78a87229af",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.81.0",
          "timestamp": "2026-05-26T07:22:59+02:00",
          "tree_id": "253ee97ac5f1b60662600a187c0ba573a67fa3f6",
          "url": "https://github.com/fallow-rs/fallow/commit/7c2888f05cc6ef87c40e24a384083b78a87229af"
        },
        "date": 1779773344571,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240168144,
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
          "id": "3c1b1c8e0a1736cc3dc26f7e2b01a6166a5c675e",
          "message": "chore(lint): adopt oxlint + oxfmt across JS/TS surfaces\n\nAdds `oxlint` 1.66.0 and `oxfmt` 0.51.0 as root devDependencies and wires\nthem into CI. Closes a real gap: until this PR fallow's own JS/TS code\n(npm wrapper, benchmarks, .github scripts, VS Code extension, crates/napi)\nshipped with no linter and no formatter at all. CodeQL caught a leaked\n`freshEnv` dead-helper in lazy-verify.test.js (PR #684) that an\noxlint `no-unused-vars` pass would have caught locally before commit.\n\nWhat lands:\n\n1. `.oxlintrc.json` at the repo root. Plugins: import, node, promise,\n   unicorn. Categories: correctness + suspicious as error, perf as\n   warn. Stylistic rules (`no-underscore-dangle`, `no-await-in-loop`,\n   `unicorn/consistent-function-scoping`) explicitly off where they\n   conflicted with existing conventions (test helpers prefixed `_`,\n   intentional sequential `await` in `verifyInstalled`'s per-binary\n   loop). Test files relax the rest-siblings rule.\n2. `.oxfmtrc.json` at the repo root. `ignorePatterns` only; oxfmt is\n   opinionated (matches Oxc ecosystem consistency from CLAUDE.md).\n3. Root `package.json` scripts: `lint:js`, `fmt:js`, `fmt:js:check`.\n4. CI: new `JS Lint and Format` job runs both on every push + PR;\n   added to the `ci-ok` aggregate `needs:` list.\n5. Existing JS/TS files reformatted to oxfmt's house style (single ->\n   double quotes, line wrapping). Lint findings fixed: removed three\n   unused imports (`relative` in generate-dupes-fixtures, `writeFileSync`\n   in bench-circular + compare), prefixed three unused params with `_`,\n   renamed shadowed `stats` to `jscpdStats` in bench-dupes, removed dead\n   `freshEnv`-style spread fallback, fixed promise-always-return in\n   extension.ts, migrated `.sort()` -> `.toSorted()` everywhere, and\n   bumped editors/vscode tsconfig `target`/`lib` to ES2023 so\n   `Array.prototype.toSorted` resolves (VS Code 1.96 ships with Node\n   20.18 which supports it).\n\nThe npm wrapper itself ships unchanged. This PR is pure tooling +\nmechanical reformatting; no functional behavior changes.",
          "timestamp": "2026-05-26T08:16:47+01:00",
          "tree_id": "4398bc810dd4a8677a3f2fc91ad67506f0a0f04f",
          "url": "https://github.com/fallow-rs/fallow/commit/3c1b1c8e0a1736cc3dc26f7e2b01a6166a5c675e"
        },
        "date": 1779780191562,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240168144,
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
          "id": "e97b955e2daed6a34a12dfec9c6a66adb0ce5650",
          "message": "feat(perf): annotate parallel parse CPU and reused stages in --performance (#687)\n\nTwo clarity fixes to the `--performance` breakdown (issue #481).\n\nParallel parse annotation: parse_all_files now sums the wall-clock time of\nthe actual AST parses across rayon workers (cache-miss path only, so warm\nruns add ~0 and pay no measurement overhead). The renderer appends\n`(parallel: ~Nms CPU)` to the parse/extract line when the stage cleared a\n5ms floor and the summed CPU is at least 1.5x the stage's wall-clock. This\nshows that a stage whose wall-clock looks cheap can burn far more CPU, which\nis what users tuning thread counts on CI runners need to see.\n\nReused-stage label: in combined mode health reuses the dead-code pass's\ndiscovered + parsed files, so those stages previously rendered a misleading\n`0.0ms`. They now read `(measured above)`, pointing at the Pipeline\nPerformance box. The shared-parse path also measures its own config load\ninstead of reporting `0.0ms`.\n\nReconciliation: both tables gain an `(other)` row (TOTAL minus the displayed\nstages) so the rows provably sum to TOTAL. Health TOTAL now folds in\nconfig/discover/parse, which it previously excluded, so the breakdown\nreconciles in every mode.\n\nJSON `--performance` gains `parse_cpu_ms` (PipelineTimings + HealthTimings)\nand `shared_parse` (HealthTimings); additive, observational, non-deterministic.\n\nCloses #481",
          "timestamp": "2026-05-26T08:25:13+01:00",
          "tree_id": "49979184f39e9f53079ae6f2b131c1dea0f59d02",
          "url": "https://github.com/fallow-rs/fallow/commit/e97b955e2daed6a34a12dfec9c6a66adb0ce5650"
        },
        "date": 1779780697627,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240200968,
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
          "id": "116332ae2e92de62f07e1bf246f29ce66791cad3",
          "message": "feat(plugins): add Mintlify plugin (#689)\n\n* feat: add Mintlify plugin\n\nModel Mintlify documentation sites driven by docs.json / mint.json and\nthe mint / mintlify CLI. The plugin activates on the mint / mintlify\ndependency or the presence of docs.json / mint.json, keeps the config\nfile always-used, credits the CLI as tooling, and marks {md,mdx} under\nthe config file's directory as runtime-used so docs content no longer\nneeds manual dynamicallyLoaded entries. The content pattern is scoped\nto the docs root so non-Mintlify MDX stays governed by other plugins.\n\nFixes #626\n\n* docs: document Mintlify plugin\n\nAdd the Mintlify plugin to detection.md, plugins.md, the README plugin\ncount (now 105 with Lexical and Mintlify), and the CHANGELOG.\n\nRefs #626",
          "timestamp": "2026-05-26T09:17:34+01:00",
          "tree_id": "a66f2bffe4ee871013deb89e945107a92fed8499",
          "url": "https://github.com/fallow-rs/fallow/commit/116332ae2e92de62f07e1bf246f29ce66791cad3"
        },
        "date": 1779783875535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240227080,
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
          "id": "04add82a217ad0dfcc1c0d7c23f85daeca764eb6",
          "message": "feat: add k6 runtime entry surfaces\n\n* chore: open issue #625 implementation branch\n\n* feat: add k6 runtime entry support",
          "timestamp": "2026-05-26T09:44:13+01:00",
          "tree_id": "05f3191da24e2d895d697156bb1206798f3abd75",
          "url": "https://github.com/fallow-rs/fallow/commit/04add82a217ad0dfcc1c0d7c23f85daeca764eb6"
        },
        "date": 1779785437524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240430296,
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
          "id": "4f150680c3140e2ded8314447cfaefdcee310149",
          "message": "fix: handle Deno jsr/npm/url imports and Supabase Edge Function roots (#690)\n\nTreat jsr: and URL specifiers as external runtime imports and normalize\nnpm:<pkg>@version to its npm package so Deno/Supabase Edge Function imports\nno longer report as unresolved-import or bogus unlisted dependencies. A\npackage imported only via npm: is self-declaring and not reported as\nunlisted (mirrors the per-file bun: carve-out). Add a built-in supabase\nplugin that marks supabase/functions/*/index.* as runtime entry roots and\ncredits the supabase CLI as tooling; _shared code stays reachable via\nrelative imports.\n\nCloses #624",
          "timestamp": "2026-05-26T10:12:40+01:00",
          "tree_id": "734d030720646d638895e03bca2e2e0634880a53",
          "url": "https://github.com/fallow-rs/fallow/commit/4f150680c3140e2ded8314447cfaefdcee310149"
        },
        "date": 1779787205846,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240502656,
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
          "id": "9c4b1d0a00a7e599a27cde0d6dc895f640fb67da",
          "message": "fix(fix): withhold low-confidence unused-export rewrites when consumers may be off-graph\n\n`fallow fix --yes` stripped the export keyword from every export reported\nas unused, including symbols consumed only through paths fallow's graph\ncannot see (Vitest mock aliases, off-workspace e2e suites, fixture/golden\nbuild steps). That turned an analysis false positive into a source-level\nbreak.\n\nThe export fixer now withholds removals in two low-confidence cases:\nfiles under an off-graph consumer directory (__mocks__, __fixtures__,\nfixtures, e2e, e2e-tests, cypress, playwright, examples, evals, golden)\nand files that themselves have an unresolved import. Both surface as\nintentional skips: new SkipReason::LowConfidenceOffGraph /\nLowConfidenceUnresolvedImports, a combined skipped_low_confidence_exports\nenvelope counter, per-record skip_reason, and a human summary line. The\nskip does not change the exit code; the export stays reported by\n`fallow check` for manual review. High-confidence exports are removed\nunchanged.\n\nFixes #602",
          "timestamp": "2026-05-26T11:15:25+01:00",
          "tree_id": "6ffdc2b3f12f9bea40378a1572ed0d2e3dbb0b8c",
          "url": "https://github.com/fallow-rs/fallow/commit/9c4b1d0a00a7e599a27cde0d6dc895f640fb67da"
        },
        "date": 1779790900396,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240550632,
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
          "id": "b4305cbb928b7af0f5295456654248f7423277a3",
          "message": "fix: credit class members reached via new Class().method() receivers (#692)\n\nMethods called on a freshly-constructed instance were not traced, so they\nsurfaced as unused-class-member false positives. Two public adoption PRs had\nto add inline fallow-ignore comments / usedClassMembers entries for exactly\nthis gap (everr#144, graphql-markdown#2949).\n\nExtends the #387 static-factory chain credit to constructor roots:\n\n- static_member_object_name gains a NewExpression arm (bare Identifier callee,\n  builtin-guarded), so direct new Repo(client).search(data) and the first\n  method off any constructor chain credit Class.member through the existing\n  local_to_export_keys path.\n- try_record_fluent_chain_access recognizes a NewExpression root and emits a\n  distinct FLUENT_CHAIN_NEW_SENTINEL ({class}:{chain}, no root method).\n- propagate_fluent_chain_new_accesses resolves the class, walks re-export\n  origins, and credits downstream members only when every chain step is a\n  self-returning ClassMethod, preserving the #387 safety check.\n\nCACHE_VERSION 98 -> 99 (extraction output changes for these patterns).\n\nFixes #605",
          "timestamp": "2026-05-26T11:32:17+01:00",
          "tree_id": "bed51ce8cd4b059d40344977ced3fd9f37d47f43",
          "url": "https://github.com/fallow-rs/fallow/commit/b4305cbb928b7af0f5295456654248f7423277a3"
        },
        "date": 1779791933073,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 240620288,
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
          "id": "4727b97948b2e24d1563167aeda78f5cf94ef4e1",
          "message": "feat(plugins): recognize Vitest test.alias/resolve.alias in vite.config, projects, and workspace files (#698)\n\nFollow-up to #601. The Vitest plugin parsed test.alias only from a top-level\nvitest.config.* (plus test.projects[*].test.alias), leaving three common shapes\nas false unresolved-import / unlisted-dependency / unused-export findings:\n- the Vitest config embedded in vite.config.ts (defineConfig({ test, resolve }));\n- project-level resolve.alias mocks (test.projects[*].resolve.alias);\n- the vitest.workspace.{ts,js} array file (defineWorkspace([...])), which\n  find_config_object cannot reach (array default export).\n\nA new shared crate::plugins::test_alias module funnels every alias surface\nthrough one process_test_alias: the Vitest plugin handles vitest.config.* and the\nworkspace-array file; the Vite plugin reuses apply_test_block_aliases for the\ntest-block + projects surfaces inside vite.config.* (which never reaches the\nVitest plugin). Top-level resolve.alias in vite.config.* keeps its existing\npath-alias-only behavior to avoid changing non-test Vite projects.\n\nThe package-to-package special case ('lodash-es' -> 'lodash') is now\ndistinguished from a directory alias (@ -> path.resolve(__dirname, 'src')) by a\ndeterministic, filesystem-free check: a path-builder or ./-prefixed replacement\nis a path, a plain bare string literal is a package (extract_config_aliases_kinded\nflags this). No is_dir() probe, so results are identical across sparse checkouts,\nDocker layers, and published tarballs.\n\nStatically-unreachable config shapes (mergeConfig, imported-and-spread base\nconfigs) and nested test.projects inside a workspace-array element are out of\nscope; the former emits a RUST_LOG=debug line.\n\nRefs #601.",
          "timestamp": "2026-05-26T13:59:14+01:00",
          "tree_id": "6cd63ce932b58393e065d30a623893ad65b93135",
          "url": "https://github.com/fallow-rs/fallow/commit/4727b97948b2e24d1563167aeda78f5cf94ef4e1"
        },
        "date": 1779800740611,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 241453120,
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
          "id": "b460904c42446648518f40584d3a74109fb2ecf2",
          "message": "test(types): property-test the forward-slash path serializer\n\nThe example tests only exercise a local normalize() proxy; the real\nserde_path::serialize / serialize_vec functions were never driven through\na Serializer. Add proptests over arbitrary mixed-separator paths that run\nthe real functions through serde_json:\n\n- output never contains a backslash and equals input with every backslash\n  rewritten to a forward slash (the cross-platform JSON/SARIF invariant)\n- a serialized path reads back as its normalized form\n- serialization is idempotent over already-normalized input\n- the vec serializer agrees element-for-element with the scalar one\n\nproptest reads its failure-persistence file via env::current_dir() at\nstartup, which aborts under Miri isolation (getcwd unsupported), so skip\nproptests in the fallow-types Miri job to match the fallow-graph job.",
          "timestamp": "2026-05-26T15:37:54+02:00",
          "tree_id": "0743f723d9b4539f622ae499f06d5465f8b27e49",
          "url": "https://github.com/fallow-rs/fallow/commit/b460904c42446648518f40584d3a74109fb2ecf2"
        },
        "date": 1779803281790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 241453120,
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
          "id": "61a391d392dd1485fb56625cd8fcf33bf6eceb25",
          "message": "feat(plugins): parse electron.vite.config rollupOptions.input entries (#701)\n\nThe Electron plugin activated for electron-vite and kept\nelectron.vite.config.{ts,js,mjs} alive but never parsed it, so\nmulti-window renderer HTML entries declared in\nrenderer.build.rollupOptions.input (commonly\nresolve(__dirname, 'src/renderer/index.html')) were missed and the\n<script src> source trees behind them reported as unused-files. The\nplugin now reads the main/preload/renderer build.rollupOptions.input in\nstring, array, and object forms and seeds each value as an entry point,\nnormalized relative to the config file so monorepo subpackage configs\nmap correctly.\n\nObject/array values commonly use path helpers, so a new electron-only\nconfig_parser::extract_config_path_string_or_array routes each value\nthrough expression_to_path_string, recovering resolve(__dirname, ...),\njoin(...), fileURLToPath(...), and new URL(..., import.meta.url) plus\nplain string and template literals. The shared\nextract_config_string_or_array is intentionally left unchanged (it only\nrecovers string literals in object/array positions); broadening it is a\nseparate, benchmark-moving change. The static main/preload fallback\nglobs also widen to {ts,tsx,js,jsx,mts,mjs}.\n\nCrediting is scoped to declared inputs, so a renderer source file linked\nfrom no declared entry is still reported. Per-section function-wrapped\nconfigs (renderer: defineConfig({...})) are out of scope, matching the\nVite plugin's plain-object nesting requirement.\n\nFixes #600.",
          "timestamp": "2026-05-26T16:02:10+01:00",
          "tree_id": "2f79087d9af571ba49a6d9bbf83d4d0d60c09a4e",
          "url": "https://github.com/fallow-rs/fallow/commit/61a391d392dd1485fb56625cd8fcf33bf6eceb25"
        },
        "date": 1779808221587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 241577344,
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
          "id": "3f54a2d2656a3ae0fde8693486e738f2a66d75fa",
          "message": "feat(plugins): parse ng-packagr ng-package.json lib.entryFile as Angular library public API (#703)\n\nThe Angular plugin now reads lib.entryFile from ng-package.json /\nng-package.prod.json and treats it as a package entry point, resolved\nrelative to the config directory. ng-packagr, not the app graph, consumes\nthat file, so previously the public-api entry file surfaced as unused-file\nand its re-exported symbols as unused-export.\n\nWhen lib.entryFile is omitted it falls back to ng-packagr's schema default\nsrc/public_api.ts (underscore, per ng-package.schema.json; hyphenated\npublic-api.ts libraries set entryFile explicitly). Nested\nsecondary-entry-point configs in the package subtree are scanned too\n(bounded depth, skipping node_modules/dist/out/tmp/coverage/hidden dirs;\nsame-directory siblings left to config discovery). The plugin also\nactivates on a ng-packagr dependency in addition to @angular/core;\nenabler detection reads peerDependencies.\n\nVerified on unjs/unhead packages/angular: the primary entry plus the\nclient/server secondary entries (12 angular findings) flip from unused to\nused with zero collateral elsewhere. Benchmark counts unchanged on all\nfixtures (the path is gated behind Angular enablers + ng-package*.json).\n\nFixes #606",
          "timestamp": "2026-05-26T16:17:52+01:00",
          "tree_id": "c902536473f52db8fb02af22cf0db13168b4f331",
          "url": "https://github.com/fallow-rs/fallow/commit/3f54a2d2656a3ae0fde8693486e738f2a66d75fa"
        },
        "date": 1779809027507,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 241628368,
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
          "id": "eb934f3b435899da5d74bb1fb67c118548d82801",
          "message": "test(plugins): make Playwright nested-config-dir tests platform-absolute for Windows CI\n\nThe three nested-config Playwright tests passed `/project/apps/web/...`\nconfig paths, which are absolute on Unix but NOT on Windows (no drive\nletter). resolve_config's `parent().is_absolute()` gate therefore dropped\nthe nested config directory on Windows and fell back to the project root,\nfailing the assertions on windows-latest CI while passing on Unix.\n\nThe registry always passes a genuinely-absolute config path at runtime\n(drive-rooted on Windows), so the production resolution is correct; only\nthe tests were Unix-only. Added an `abs()` test helper that drive-roots\n`/project/...` logical paths on Windows and is the identity on Unix, and\nrouted resolve_at + the three nested assertions through it. Test-only\nchange, no production behavior difference.",
          "timestamp": "2026-05-26T17:32:23+02:00",
          "tree_id": "901c5a8ab28e9131b75d0cc5b835536ce2651d5e",
          "url": "https://github.com/fallow-rs/fallow/commit/eb934f3b435899da5d74bb1fb67c118548d82801"
        },
        "date": 1779809923597,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 241628368,
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
          "id": "c9d5682ac1beb16d4952fe098a60c6322e588d5f",
          "message": "chore: release v2.82.0",
          "timestamp": "2026-05-26T17:52:47+02:00",
          "tree_id": "94dde70ddc824f19cf6bf7f30fc107c5da118921",
          "url": "https://github.com/fallow-rs/fallow/commit/c9d5682ac1beb16d4952fe098a60c6322e588d5f"
        },
        "date": 1779811167949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 241643792,
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
          "id": "b00e97c1253cf5fbf986dbf11baea64d4c8f9236",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.82.0",
          "timestamp": "2026-05-26T19:26:31+02:00",
          "tree_id": "cc4819276aa7c621ee7fa3fbeadc3d54c2fd1e47",
          "url": "https://github.com/fallow-rs/fallow/commit/b00e97c1253cf5fbf986dbf11baea64d4c8f9236"
        },
        "date": 1779816765063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 241643792,
            "unit": "bytes"
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
        "date": 1779830641680,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 242575264,
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
          "id": "89626663b10ddea96a9341ee06ed458fd5b653d9",
          "message": "feat: add Varlock plugin\n\nAdd a built-in Varlock plugin that keeps .env.schema reachable, credits package-like @plugin(...) schema references, and treats varlock plus @varlock/vite-integration as tooling dependencies.\\n\\nUpdate regression coverage and plugin-count docs.\\n\\nFixes #622.",
          "timestamp": "2026-05-26T22:38:13+01:00",
          "tree_id": "42fdb42b68d8fe4f70af8f0f950fb992a301d70f",
          "url": "https://github.com/fallow-rs/fallow/commit/89626663b10ddea96a9341ee06ed458fd5b653d9"
        },
        "date": 1779832066733,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 243122544,
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
          "id": "d8c40a1ab4032ae94dc415f72031ddc8fa528210",
          "message": "fix: share cross-platform absolute path helper\n\nMove the cross-platform absolute path helper into fallow-types while preserving the existing CLI re-export.\n\nUse the shared helper in the config extends resolver, plugin setup-file resolver, and health coverage path resolver so Windows-drive and POSIX-rooted absolute paths are not root-joined on the wrong host.\n\nFixes #614.",
          "timestamp": "2026-05-26T22:54:03+01:00",
          "tree_id": "5b9057774c29f26c4c41ed41e819c44d32ea5618",
          "url": "https://github.com/fallow-rs/fallow/commit/d8c40a1ab4032ae94dc415f72031ddc8fa528210"
        },
        "date": 1779832961197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 243035344,
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
          "id": "a2ece98c46f8e93d64e1f9f821211117e28f7282",
          "message": "feat: add WXT plugin\n\n* chore: open issue #612 implementation branch\n\n* feat: add WXT plugin",
          "timestamp": "2026-05-27T06:34:14+01:00",
          "tree_id": "90eb1bd388bbf7fb26f8d1cdb5d367d93c5eee01",
          "url": "https://github.com/fallow-rs/fallow/commit/a2ece98c46f8e93d64e1f9f821211117e28f7282"
        },
        "date": 1779860464488,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 243173432,
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
          "id": "0c90dbf8e14973c113698f5c210d587249a2defe",
          "message": "feat: add Obsidian plugin support\n\n* chore: open issue 617 implementation branch\n\n* feat: add Obsidian plugin support",
          "timestamp": "2026-05-27T07:09:05+01:00",
          "tree_id": "31ac4e0e89f47d3f1492e3b53aee638584a4fa76",
          "url": "https://github.com/fallow-rs/fallow/commit/0c90dbf8e14973c113698f5c210d587249a2defe"
        },
        "date": 1779862523157,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 243280816,
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
          "id": "26635fbe5f2fcc92badc4a78c48d135d35874e8f",
          "message": "fix(graph): resolve no-exports workspace packages to source\n\nResolve workspace packages without exports back to source when legacy package fields point at missing prebuild output.\n\nAdd a focused workspace regression fixture for #725 and keep exports-blocked package map behavior unchanged. Gate an existing cwd-dependent path test under Miri isolation after CI exposed the unrelated failure on this PR.\n\nFixes #725.",
          "timestamp": "2026-05-27T08:14:09+01:00",
          "tree_id": "c7390dff1bdcb28499451c7f4bd73346d94dcd5d",
          "url": "https://github.com/fallow-rs/fallow/commit/26635fbe5f2fcc92badc4a78c48d135d35874e8f"
        },
        "date": 1779866371088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 243280608,
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
          "id": "abba841bd3bf1aa319a0c82726365cb55314511a",
          "message": "feat: add Contentlayer plugin\n\nAdd a built-in Contentlayer plugin that activates from Contentlayer and next-contentlayer packages or a root config file. The plugin keeps Contentlayer config files, generated .contentlayer modules, and static content roots reachable without requiring users to hand-maintain entry globs.\n\nThe config resolver credits imported packages and extracts static contentDirPath plus same-file defineDocumentType filePathPattern literals. Dynamic config execution and cross-file document type evaluation stay out of scope so the plugin avoids broad over-crediting.\n\nFixes #610.",
          "timestamp": "2026-05-27T08:27:32+01:00",
          "tree_id": "01b5ccc9ec41a775ec7d38ec34713f362432777b",
          "url": "https://github.com/fallow-rs/fallow/commit/abba841bd3bf1aa319a0c82726365cb55314511a"
        },
        "date": 1779867286808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 243732384,
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
          "id": "041b717044b03317649fdedb2c21681f340cca2c",
          "message": "fix(health): sort file scores by triage concern and tag the driver\n\nSort file health scores by risk-aware triage concern instead of bare Maintainability Index, tag each human-table row with the signal that placed it, and break equal-concern ties by raw CRAP so the visible Risk column reads top-down.\n\nFixes #554.",
          "timestamp": "2026-05-27T08:52:18+01:00",
          "tree_id": "9ee977478dd6ebd1c8d2f77d2da6d558cd874a12",
          "url": "https://github.com/fallow-rs/fallow/commit/041b717044b03317649fdedb2c21681f340cca2c"
        },
        "date": 1779868774896,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 243795536,
            "unit": "bytes"
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
        "date": 1779869948797,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 243798240,
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
          "id": "8a1a699fa7482dc2d15427e006ff74cc19417bd5",
          "message": "feat: ignore unresolved imports by specifier\n\nCloses #726",
          "timestamp": "2026-05-27T10:21:33+01:00",
          "tree_id": "f6443cb41a853e6528688181f8d08fb50f5e085b",
          "url": "https://github.com/fallow-rs/fallow/commit/8a1a699fa7482dc2d15427e006ff74cc19417bd5"
        },
        "date": 1779874106117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 243863896,
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
          "id": "92cc0594d45d2266153478496993a64c437bae87",
          "message": "feat(coverage): consume FunctionIdentity v2 across coverage joins\n\nAdopt fallow-cov-protocol 0.7.1's FunctionIdentity (a fallow:fn:<hash> join\nkey over file + name + start_line, line-position-independent). Fallow now\nproduces it on the static inventory and the sidecar request, and consumes\nidentity.stable_id as the join key (preferring it over (path, name, line)).\n\n- Inventory walker emits 1-indexed UTF-16 columns + end position per function;\n  upload-inventory builds a Resolved FunctionIdentity over the REPO-RELATIVE\n  path (not the --path-prefix-prefixed filePath) so producer and consumer agree.\n- health build_request constructs the now-#[non_exhaustive] StaticFunction via a\n  serde round-trip and attaches an Unresolved identity (stable_id only, no\n  columns; source not retained at health time).\n- convert_response, coverage analyze --cloud, and the cloud client thread\n  stable_id; analyze adds a stable_id-first match tier with a debug log when a\n  present stable_id diverges but path/name/line still matches.\n- Runtime-coverage JSON exposes stable_id on findings/hot-paths/blast/importance.\n- Baseline keys prefer stable_id when present; readers accept both the stable_id\n  and the legacy fallow:prod: id during the grace window, so old baselines keep\n  suppressing and new ones survive line moves.\n- --explain documents the fallback order and the suppression-key vs join-key\n  distinction. RiskBand/CoverageSource Unknown sentinels handled. Schema + TS\n  contracts regenerated.\n\nCloses #506",
          "timestamp": "2026-05-27T11:03:47+01:00",
          "tree_id": "0c55474739cf0c389d3e759488cf007a99a4ad29",
          "url": "https://github.com/fallow-rs/fallow/commit/92cc0594d45d2266153478496993a64c437bae87"
        },
        "date": 1779876598108,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 244165280,
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
          "id": "e581961b5f8f1a63708017c4aeeb8beb299e855a",
          "message": "docs(coverage): correct stable_id cross-surface framing\n\nA thorough end-to-end smoke (real published 0.3.0 sidecar) showed stable_id is NOT immune to a function moving lines: function_identity_id hashes start_line, so a moved function gets a new stable_id (verified: coldFn fallow:fn:de5223fd@2 -> fallow:fn:62a6be2a@5, and the finding resurfaced against a saved baseline).\n\nThe shipped #506 docs claimed stable_id 'survives line moves' and that baselines keyed on it 'keep suppressing after a function moves lines'. That is false. Correct the framing in CHANGELOG, the --explain text (explain.rs), the baseline.rs writer/reader comments, and the RuntimeCoverageFinding.stable_id doc to describe the ACTUAL property: stable_id is a cross-surface (one value across findings/hot-paths/blast-radius/importance; the per-finding id uses a per-surface salt) and cross-producer (V8/Istanbul/oxc agree, columns excluded) join key. Like id, it changes when file/name/start_line change.\n\nCode behavior is unchanged; this is a documentation accuracy fix. Schema + VS Code/npm TS contracts regenerated. Refs #506.",
          "timestamp": "2026-05-27T11:24:58+01:00",
          "tree_id": "86df69d5fb7e0554fe4b088aefa40da42b530ecf",
          "url": "https://github.com/fallow-rs/fallow/commit/e581961b5f8f1a63708017c4aeeb8beb299e855a"
        },
        "date": 1779877926658,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 244165280,
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
          "id": "429577db22e94059e6a5a674cc8522f5dba0f847",
          "message": "feat(plugins): resolve Nuxt convention auto-imported components in the module graph (#743)\n\nFrameworks like Nuxt expose components to templates by filesystem convention\n(`<Card001 />` resolving to `components/Card001.vue`) with no `import` statement,\nso fallow previously kept whole convention directories alive as entry points and\ncould never report a genuinely-unreferenced component as unused.\n\nThis adds a first-class `Plugin::auto_imports` capability. The work splits across\ntwo layers so per-file extraction caching stays correct: extraction captures the\nunmatched PascalCase template tags into `ModuleInfo.auto_import_candidates`\n(content-local, cached), and graph-build synthesizes the edges from the active\nplugins' auto-import table (a function of other files, never cached). The Nuxt\nplugin derives the directory-prefixed PascalCase name with prefix-overlap dedup,\npre-expands the implicit `Lazy` variant, strips `.client` / `.server` / `.global`\nsuffixes, and preserves acronym casing (`UICard`).\n\nSynthesis is unconditional and additive (a component's default export is credited\nunder `--include-entry-exports` with zero new `unused-file` reports). The opt-in\n`autoImports: true` config field gates only the Nuxt component entry-pattern\nremoval, guarded by a tolerant `components:` check on the root and workspace\n`nuxt.config` files so custom `prefix` / `pathPrefix` / `dirs` layouts keep their\nprotection. Composable, util, and Pinia store auto-imports are tracked separately\nin follow-up issues. Bumps the extract CACHE_VERSION for the new field.\n\nFixes #704.",
          "timestamp": "2026-05-27T12:04:56+01:00",
          "tree_id": "dc9924670aac42e7f8e04b0eaf800bea7dd8cdb0",
          "url": "https://github.com/fallow-rs/fallow/commit/429577db22e94059e6a5a674cc8522f5dba0f847"
        },
        "date": 1779880294225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 244638544,
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
          "id": "92b245db9bd6eecc588360f0df8159251a39a215",
          "message": "fix: recognize tsdown mts and cts configs\n\n* chore: open issue #744 implementation branch\n\n* fix: recognize tsdown mts and cts configs\n\n* docs: correct plugin notes count",
          "timestamp": "2026-05-27T14:45:47+01:00",
          "tree_id": "45ca3f519f2924e2db1255edd572f9b3fb5f87d9",
          "url": "https://github.com/fallow-rs/fallow/commit/92b245db9bd6eecc588360f0df8159251a39a215"
        },
        "date": 1779889933426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 244638544,
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
          "id": "7871342186d731f10d0f5caa971c57cbbd8aee2d",
          "message": "feat(coverage)!: adopt fallow-cov-protocol 0.8.0 stable_id recipe\n\nBump the fallow-cov-protocol pin 0.7 -> 0.8 in cli + extract so the CLI's\nemitted stable_id uses the reconciled recipe (NUL-delimited file/name/\nstart_line, 16 hex, fallow:fn: prefix), matching the cloud and sidecar\nproducers byte-for-byte. Updated the cross-producer conformance anchors\nto the 0.8.0 value (fallow:fn:cb4482d6aef7c79a for render@42).\n\nBREAKING: CLI-emitted stable_ids change. Runtime-coverage baselines\nwritten on 0.7.x re-surface once and need re-baselining; a\nfunction_identity_id_v1 grace-window match is a follow-up. source_hash\nline-move suppression (the additive #742 work) is unaffected.",
          "timestamp": "2026-05-27T15:52:28+02:00",
          "tree_id": "f8e1d0b75ee8c13a6c77c2e7123f99785077ee05",
          "url": "https://github.com/fallow-rs/fallow/commit/7871342186d731f10d0f5caa971c57cbbd8aee2d"
        },
        "date": 1779890448169,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 244719088,
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
          "id": "8c5618273a1c514abede395ba9cc1de37a158425",
          "message": "chore: release v2.83.0",
          "timestamp": "2026-05-27T16:24:18+02:00",
          "tree_id": "9e1a43f8439c7726bbaa8769f0db662382aaa357",
          "url": "https://github.com/fallow-rs/fallow/commit/8c5618273a1c514abede395ba9cc1de37a158425"
        },
        "date": 1779892332889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 244733656,
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
          "id": "bcd212c555565601468535fb59a364a4f5bec638",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.83.0",
          "timestamp": "2026-05-27T17:00:27+02:00",
          "tree_id": "387d451daa0c0b8edf83c7aa30aafeb29165fb5a",
          "url": "https://github.com/fallow-rs/fallow/commit/bcd212c555565601468535fb59a364a4f5bec638"
        },
        "date": 1779894417316,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 244733656,
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
          "id": "9475785bd2600544b6d20161623e8655574f40d0",
          "message": "feat(plugins): add @sanity/pkg-utils build-config plugin (#749)\n\nProjects built with @sanity/pkg-utils discover their build configs by\nfilename convention rather than importing them from source, so each\npackage.config.* and package.bundle.* surfaced as an unused-file and had\nto be listed manually in the entry config.\n\nAdds a dedicated pkg-utils plugin that activates only on an exact\n@sanity/pkg-utils dependency (not the broad @sanity/ prefix the CMS\nsanity plugin uses, so plain @sanity/client consumers are unaffected). It\nmarks package.config.{ts,js,mts,mjs,cts,cjs} and package.bundle.* as\nalways-used at the repo root and in every workspace package (each pattern\nin bare and **/-prefixed form, since always_used matching uses\nliteral_separator with no auto prefix), and credits @sanity/pkg-utils as\na tooling dependency. No config parsing: the exports.source condition\nplus the workspace-package fallback already keep src/** reachable, so\nseeding package.bundle.ts's lib.entry would be redundant.\n\nThe credit is scoped to the two build-config filenames, so an\nunreferenced ordinary source file still reports. pkg-utils monorepos can\nnow drop the package.config.ts / package.bundle.ts lines from their entry\nconfig entirely.",
          "timestamp": "2026-05-28T12:22:03+01:00",
          "tree_id": "fcbc946a292393aed772a150f9885f7c4cd38704",
          "url": "https://github.com/fallow-rs/fallow/commit/9475785bd2600544b6d20161623e8655574f40d0"
        },
        "date": 1779967703960,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 244746864,
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
          "id": "1fe7ae6722408aa817501c164933637a57af56a9",
          "message": "chore: release v2.84.0",
          "timestamp": "2026-05-28T13:39:56+02:00",
          "tree_id": "f3d04772b3909376c77bee6e263d3ce2115b6aed",
          "url": "https://github.com/fallow-rs/fallow/commit/1fe7ae6722408aa817501c164933637a57af56a9"
        },
        "date": 1779968930828,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 244773464,
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
          "id": "739840a0fe4afd3744d7429774fae0aca3f0d236",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.84.0",
          "timestamp": "2026-05-28T14:16:12+02:00",
          "tree_id": "d1d920151f1c89d1d76d5fab046517e4d4794223",
          "url": "https://github.com/fallow-rs/fallow/commit/739840a0fe4afd3744d7429774fae0aca3f0d236"
        },
        "date": 1779970944207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 244773464,
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
          "id": "38a0387a8baa0d127f5ff341d7f57586034da0c7",
          "message": "fix: catch baseline drift on config-only PRs\n\n* chore: open issue 746 implementation branch\n\n* fix: disable auto PR scoping for baseline config changes",
          "timestamp": "2026-05-28T13:34:02+01:00",
          "tree_id": "44cee84a34eba33a025983ec540196f096177a06",
          "url": "https://github.com/fallow-rs/fallow/commit/38a0387a8baa0d127f5ff341d7f57586034da0c7"
        },
        "date": 1779971964531,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 244776888,
            "unit": "bytes"
          }
        ]
      }
    ]
  }
}