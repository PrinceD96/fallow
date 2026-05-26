window.BENCHMARK_DATA = {
  "lastUpdate": 1779773142625,
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
          "id": "4394edac78a1ad60bb94ee1ee44f78073e68451e",
          "message": "fix(regression): exit 2 on schema_version mismatch with regenerate hint\n\n`load_regression_baseline` in `crates/cli/src/regression/baseline.rs`\ndeserialized via `serde_json::from_str` without validating `schema_version`.\n`CheckCounts` carries `#[serde(default)]` on every field, so a baseline\nwritten under a different `REGRESSION_SCHEMA_VERSION` silently loaded with\nmissing fields defaulting to zero, masking real regressions and letting\nCI gates pass on a structurally invalid baseline.\n\nThe loader now validates `baseline.schema_version == REGRESSION_SCHEMA_VERSION`\nimmediately after parse, with two helpers (`format_schema_mismatch_error`,\n`format_missing_schema_version_error`) producing actionable messages that\nname the path, expected and actual versions, the writer fallow version,\nand a copy-pasteable `fallow check --save-regression-baseline <path>`\nregenerate command. `schema_version: 0` is special-cased as \"predates\nschema versioning\"; baselines missing the field entirely get the same\nhint instead of raw serde \"missing field\" noise. The pre-existing\nNotFound, read-error, parse-error paths plus the new mismatch path all\nroute through `emit_error`, so `--format json` CI consumers receive the\nstructured `{\"error\": true, \"message\": \"...\", \"exit_code\": 2}` envelope\non stdout instead of human text on stderr.\n\n`RegressionOpts` gains an `output: OutputFormat` field threaded through\n`compare_check_regression` into `load_regression_baseline`. The single-caller\n`build_regression_opts` helper is inlined into `DispatchContext::regression_opts`\nto keep the constructor under clippy's `too_many_arguments` limit. Existing\nbaselines with `schema_version: 1` continue to load unchanged; future\nschema bumps require regenerating.\n\nFixes #451.",
          "timestamp": "2026-05-21T09:34:37+01:00",
          "tree_id": "8d1793f02d64e543c622fb77a060716ab58e695e",
          "url": "https://github.com/fallow-rs/fallow/commit/4394edac78a1ad60bb94ee1ee44f78073e68451e"
        },
        "date": 1779352621783,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "eae99cc6d6592d55bcac3a5ea97665cb3a0ed01d",
          "message": "fix(suppress): surface unknown issue-kind tokens as stale findings\n\nSuppression markers with a typo or an obsolete issue-kind name no longer\nsilently discard the entire line. `// fallow-ignore-next-line\nunused-export, complexity-typo` now suppresses `unused-export` normally\nand surfaces `complexity-typo` as a `stale-suppression` finding so the\nuser sees the typo instead of losing their suppression in silence.\n\n`parse_issue_kind_list` in `crates/extract/src/suppress.rs` switches from\nreturning `Option<Vec<IssueKind>>` to `(Vec<IssueKind>, Vec<String>)`,\naccumulating known kinds alongside unknown tokens. The new\n`UnknownSuppressionKind` type on `ModuleInfo` carries each token through\nthe parser, cache, and graph layers; `SuppressionContext::find_stale`\nemits one extra `StaleSuppression` per unknown token, reusing\n`SuppressionOrigin::Comment` with a new additive `kind_known: bool` wire\nfield so JSON, MCP, and CI consumers can distinguish unknown-kind tokens\nfrom stale-but-known kinds without parsing prose. The\n`StaleSuppression::explanation()` and `display_message()` helpers branch\non `kind_known` to render `'<token>' is not a recognized fallow issue\nkind. Did you mean '<closest>'? Other tokens on this line still apply.`\nwith a Levenshtein hint when an existing kind is within edit distance 2;\nSARIF, CodeClimate, and compact pick up the same actionable copy via the\nnew helper.\n\nCACHE_VERSION bumps 86 to 87 so warm `.fallow/cache` directories pick up\nthe new field on upgrade. The bundled GitHub Action annotation and\nsummary jq scripts plus the GitLab CI summary jq branch on\n`origin.kind_known == false` to render the typo-fix copy instead of \"no\nlonger matches any active issue.\" `ModuleInfo` size assertion bumps 472\nto 496 bytes for the new `Vec<UnknownSuppressionKind>` field. The\n`docs/output-schema.json` regenerates with the additive optional\n`kind_known` (non-required), and the generated TypeScript bindings in\n`editors/vscode/src/generated/` and `npm/fallow/types/` flow through.\n\nFixes #449.",
          "timestamp": "2026-05-21T09:48:33+01:00",
          "tree_id": "dca450d6eecafd0ba5583259d5a1d6d15c313da6",
          "url": "https://github.com/fallow-rs/fallow/commit/eae99cc6d6592d55bcac3a5ea97665cb3a0ed01d"
        },
        "date": 1779353449372,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "3b2733f372944ecb2d88b51c56e277efb202bd24",
          "message": "fix(suppress): skip stale emission when rule severity is off\n\nSuppression markers for a rule currently disabled (rules.<kind> == \"off\",\nincluding per-file overrides.rules) no longer surface as stale-suppression\nfindings. SuppressionContext::find_stale resolves rules once per file via\nResolvedConfig::resolve_rules_for_path and skips emission when the\nsuppression's target kind has severity Off. The marker documents\nintentional dormancy and becomes valid again when the rule is re-enabled.\n\nBlanket markers without a kind continue to surface as stale when nothing\nmatches, since they are not anchored to any specific dormant rule.\n\nA new exhaustive severity_for_kind helper in fallow-core maps every\nIssueKind to its corresponding RulesConfig field, so a future IssueKind\nvariant triggers a compile error here.\n\nFixes #482",
          "timestamp": "2026-05-21T10:41:36+01:00",
          "tree_id": "4be6dbdf1d6290d05e4b22d872c64bf9cd1dad1c",
          "url": "https://github.com/fallow-rs/fallow/commit/3b2733f372944ecb2d88b51c56e277efb202bd24"
        },
        "date": 1779356650543,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "6fd51d1802ec2c1e78944d839f761e1b2bdba63c",
          "message": "test(stale-suppressions): relax exact-count assertion to lower bound\n\n`total_stale_suppressions_count` asserted `len() == 4` against the\nstale-suppressions fixture. Future additions to the fixture (or sibling\ntests that grow the fixture's stale surface) would break this test\nwithout surfacing a real regression. Each of the 4 documented findings\nis already covered by a dedicated presence assertion above, so the\ncount test's safety net is \"no expected finding is silently dropped\"\nwhich `>=` preserves.\n\nRelax the assertion to `>= 4` and update the rationale comment.",
          "timestamp": "2026-05-21T10:47:16+01:00",
          "tree_id": "9289079f54eb3cef4f1602224889c6a8892030e5",
          "url": "https://github.com/fallow-rs/fallow/commit/6fd51d1802ec2c1e78944d839f761e1b2bdba63c"
        },
        "date": 1779357001175,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "c224787ed950fa22c5d039f6f38358339e8b946f",
          "message": "fix(fix): refuse stale writes, batch commits atomically, compose cross-fixer edits\n\n`fallow fix` re-ran analysis in-process and then wrote each per-file rewrite\nvia a standalone `atomic_write`. If a parallel editor save, CI rebase, or\nother tool mutated a target file between the analysis read and the\nfix-time write, the line offsets computed during analysis landed on the\nwrong bytes and silently corrupted the file. Per-file writes also ran\nunbatched, so an OOM or transient I/O failure mid-run left the project in\na half-applied state where the surviving files' offsets no longer matched\nthe original analysis.\n\nCapture every parsed source file's xxh3 content hash during analysis (the\nsame value the extract cache already computes) and thread the\n`CapturedHashes` map through each fixer. Per-file entry recomputes the\nhash and emits a `skipped: true` record with `skip_reason: \"content_changed\"`\non mismatch; the run exits 2 so CI surfaces the mismatch instead of\ntreating a partial run as a clean no-op. The new `FixPlan` accumulator in\n`crates/cli/src/fix/plan.rs` stages every rewrite into a sibling\n`NamedTempFile`; the orchestrator commits the plan in one batch after all\nfixers run. Stage failure leaves every target file at its original\ncontent; rename failure mid-batch is reported per-path.\n\nTwo structural invariants the pre-refactor `atomic_write` provided were\npreserved explicitly: (1) the second fixer reads its source bytes from\nthe in-flight plan when the path is already staged, so cross-fixer\nsame-file edits compose into one coherent rewrite instead of overwriting\nvia last-write-wins; (2) the commit canonicalizes through symlinks so the\nfinal rename writes to the real target instead of replacing the link\nitself with a regular file.\n\nJSON envelope gains a top-level `skipped_content_changed: number` (always\npresent) and a new per-file entry shape\n`{type: \"skipped\", path: ..., skipped: true, skip_reason: \"content_changed\"}`\nin `fixes[]`. The existing `skipped` counter keeps its prior semantics\n(catalog / YAML guard skips only). `action/jq/summary-fix.jq` counts\nsuccessful fix attempts in its headline and surfaces\n`skipped_content_changed` in the prose. MCP `fix_preview` / `fix_apply`\ndescriptions and the VS Code `FallowFixResult` type document the new\nfield and skip reason.\n\nFive new regression tests cover round-trip clearing of targeted findings,\nbatch abort on a read-only target directory, the envelope-field contract,\ncross-fixer composition, and symlink follow-through.\n\nFixes #454.",
          "timestamp": "2026-05-21T10:59:03+01:00",
          "tree_id": "d682cc7ef0d9a814b4a6703777cad403627d6062",
          "url": "https://github.com/fallow-rs/fallow/commit/c224787ed950fa22c5d039f6f38358339e8b946f"
        },
        "date": 1779357830722,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "c53b74337579d8c5bb7c1ba73984d2de92285d5d",
          "message": "fix(config): preserve target file mode in atomic_write and FixPlan commit\n\n`NamedTempFile` creates the temp with mode `0600` by default. Both the\npre-existing `fallow_config::atomic_write` and the issue #454\n`FixPlan::commit` persisted that temp directly, so a target file\npreviously at `0644` ended up at `0600` post-write. Shared workspaces and\nCI runners that rely on group / other read permissions broke silently\nbecause the JSON output reported `applied: true` and the bytes on disk\nwere correct; only the mode bits had drifted.\n\nIntroduce `fallow_config::preserve_target_mode(temp, target)` as a thin\nhelper called between the temp write and the rename. When the target\nexists, copy its mode (lower 12 bits) onto the temp; when the target\ndoes not yet exist (fresh creation, e.g. the duplicate-exports config-add\nfallback writing `.fallowrc.json` for the first time), leave the temp's\ndefault mode in place so the user's umask still applies via whatever\n`NamedTempFile` produces. Windows ACLs persist with the underlying file\nacross `MoveFileEx`, so the helper is a no-op on non-Unix targets.\n\nThree new regression tests pin the contract: `atomic_write` against an\nexisting target at `0644` (must preserve), `atomic_write` against a\nfresh path (must produce a non-zero mode), and `FixPlan::commit` against\nan existing target at `0644` (must preserve). A real-world smoke against\nthe issue #454 reproducer confirms the fix flows through:\n`fallow fix --yes` on a `0644` source file produces a `0644` post-fix\nfile instead of the previous `0600`.",
          "timestamp": "2026-05-21T11:15:24+01:00",
          "tree_id": "7261f97e84097f2d7885fd999984ba6d8c111ea4",
          "url": "https://github.com/fallow-rs/fallow/commit/c53b74337579d8c5bb7c1ba73984d2de92285d5d"
        },
        "date": 1779358669107,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "8c3c68497551b1d29543c804460321996a0a5e75",
          "message": "fix(workspace): surface malformed package.json and unreachable glob matches\n\nSeven silent-drop sites in crates/config/src/workspace/{mod.rs,parsers.rs}\nbecome typed WorkspaceDiagnostic values carrying a kind discriminator\n(undeclared-workspace, malformed-package-json, glob-matched-no-package-json,\nmalformed-tsconfig, tsconfig-reference-dir-missing). Severity is per site: a\nmalformed root package.json exits 2 at config load (mirrors #468); declared\nworkspace package.json malformed warns and continues so analysis still runs\non the rest; glob-matched-no-package-json warns only when the path is not in\nthe conventional skip list and not in user ignorePatterns; shallow-scan\ncandidates stay silent because the user did not declare them; missing\ntsconfig.json stays silent. Diagnostics emit via deduplicated tracing::warn!\n(process-wide OnceLock keyed on canonical-root + kind + path) and land in a\nshared registry so the JSON envelope on check / dupes / health carries a new\noptional workspace_diagnostics[] field.\n\nA new fallow list --workspaces flag and a dedicated fallow workspaces\nsubcommand expose the discovery topology for introspection. The legacy\ndiscover_workspaces back-compat wrapper now routes through a silent\ncollector that does NOT emit, so sibling analyze + file-discovery callers\nno longer re-warn on paths the user already excluded via ignorePatterns.\nThe analyze pipeline's undeclared-workspace pass also folds into the same\nregistry and suppresses entries that already carry a MalformedPackageJson\ndiagnostic, so a typo'd workspace is no longer double-reported. Path\nnormalisation handles macOS /private/tmp canonicalisation symmetrically;\nPackageJson::load strips a leading UTF-8 BOM so Windows-authored or\nvite-fixture-style configs do not surface as false positives.\n\nFixes #473.",
          "timestamp": "2026-05-21T11:23:46+01:00",
          "tree_id": "0770a3196b14e7e72198f1e234c0302132f9905a",
          "url": "https://github.com/fallow-rs/fallow/commit/8c3c68497551b1d29543c804460321996a0a5e75"
        },
        "date": 1779359166893,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "85f3507ae3fa57993d3f6517eb8b50f97b62d45f",
          "message": "fix(signal): install SIGINT/SIGTERM handlers + reap spawned subprocesses\n\n* feat(signal): install SIGINT/SIGTERM handlers + scoped child registry (#477)\n\nWires a process-wide signal handler into the CLI so long-running\nspawned children (fallow-cov sidecar, npm install, self-invoked\nfallow health, git log churn analysis, git worktree audit ops) are\nkilled when the user hits Ctrl+C or CI sends SIGTERM.\n\nNew module `crates/cli/src/signal/`:\n- `ChildRegistry` keyed by monotonic AtomicU64, stores PIDs only;\n  signal handler kills by PID (libc kill -9 on Unix, TerminateProcess\n  on Windows) so the wrapper can own the Child outright and call\n  wait_with_output normally.\n- `ScopedChild` RAII wrapper: register on spawn, deregister on\n  wait/drop.\n- Unix listener: signal-hook 0.4 iterator on a dedicated std::thread\n  (blocking sigwait sidesteps async-signal-safety constraints).\n- Windows listener: SetConsoleCtrlHandler via windows-sys\n  (CTRL_C/BREAK -> 130, CTRL_CLOSE/LOGOFF/SHUTDOWN -> 143).\n- One-shot drain guard + bounded try_wait budget (500ms Unix, 1500ms\n  Windows).\n\nRefactored spawn sites to ScopedChild:\n- crates/cli/src/health/coverage.rs::run_sidecar (fallow-cov)\n- crates/cli/src/coverage/mod.rs::install_sidecar + run_health_analysis\n- crates/cli/src/audit.rs BaseWorktree::{create, reuse_or_create} +\n  remove_audit_worktree\n- crates/core/src/churn.rs::analyze_churn_events via set_spawn_hook\n  function pointer so core stays cli-independent\n\nWatch mode (crates/cli/src/watch.rs) opts into cooperative shutdown\nvia GracefulModeGuard: SIGINT only sets a flag, watch loop polls via\nrecv_timeout(200ms) and exits cleanly with code 0 because Ctrl+C is\nthe documented termination path.\n\nLSP shutdown (crates/lsp/src/main.rs) now cancels via Arc<AtomicBool>:\nrun_analysis checks the flag at entry and after spawn_blocking so\npost-shutdown publishes are suppressed. Honest doc-comment: rayon\nwork in flight runs to completion on the blocking thread pool; the\n250ms grace is for quiescence, not cancellation.\n\nTests:\n- 8 unit tests under crates/cli/src/signal/*\n- 2 integration tests under crates/cli/tests/signal_tests.rs using\n  sub-process pattern via env!(\"CARGO_BIN_EXE_fallow\") +\n  FALLOW_TEST_SIGNAL_HELPER=1; asserts exit 130/143 + inner sleep PID\n  reaped within 5s.\n- 2 LSP unit tests verifying shutdown flips cancellation and\n  run_analysis short-circuits afterwards.\n\nCloses #477\n\n* fix(signal,docs): apply review fixes + changelog + cli-crate rule note (#477)\n\nReview fixes from rust-reviewer + lsp-reviewer:\n\n- Drop unused `ScopedChild::kill` method (was YAGNI; signal handler\n  covers cancel via PID side channel).\n- Remove dead `EXIT_CODE` static from signal/windows.rs (its stored\n  value was never read; `handle_signal` takes `exit_code` as a\n  parameter directly).\n- Update registry.rs + scoped_child.rs module docs to say `kill -9\n  <pid>` shell exec on Unix instead of the misleading `libc::kill`\n  (we avoid adding `libc` as a workspace dep).\n- Drop the unnecessary `pid as i32` cast + #[expect] annotation in\n  kill_pid (the shell command takes a string).\n- Tighten `scoped_child::output` to unconditionally set\n  `stdin(Stdio::null())` plus piped stdout/stderr, matching\n  `Command::output` semantics exactly.\n- Replace the vacuous `try_lock().is_ok()` assertion in the LSP\n  short-circuit test with `backend.results.read().await.is_none()`,\n  which is the actual post-condition that proves cancellation\n  short-circuited `spawn_blocking`.\n\nDocs:\n- CHANGELOG.md [Unreleased] entry under Fixed.\n- .claude/rules/cli-crate.md `signal/` section with adoption\n  guidance + cross-platform notes.\n\nRefs #477\n\n* fix(signal): codex review fixes for #477\n\nTwo BLOCK-level findings from parallel /fallow-review (Codex):\n\n1. **changed_files.rs git subprocesses were unregistered.**\n   crates/core/src/changed_files.rs:117,147 still called raw\n   git_command(cwd,...).output() through git_env, so SIGINT delivered\n   to the parent during watch + --changed-since left git rev-parse /\n   git diff / git ls-files children running. Added the same\n   ChurnSpawnHook-style function pointer as crates/core/src/churn.rs\n   (set_spawn_hook + spawn_output) and installed it from cli's main()\n   pointing at signal::scoped_child::output. Core stays cli-\n   independent; the indirection costs nothing for embedders / tests\n   that don't install a hook.\n\n2. **Watch graceful mode skipped registry drain.**\n   handle_signal returned early on GRACEFUL=true BEFORE\n   drain_and_kill, so a Ctrl+C during analyze_and_report (which spawns\n   git via changed_files / churn) let those git subprocesses run to\n   completion - defeating the contract issue #477 spelled out for\n   watch mode. Moved drain_and_kill BEFORE the graceful check; the\n   graceful path now always reaps in-flight children but returns\n   instead of process::exit, letting the watch loop's outer\n   is_shutting_down() check terminate cleanly with exit 0.\n\nRegression coverage:\n- New integration test sigint_in_graceful_mode_drains_children_but_does_not_exit\n  asserts the post-fix behavior. Achieved via a new\n  FALLOW_TEST_SIGNAL_HELPER_GRACEFUL=1 env-var gate on the test-helper\n  subcommand that flips graceful mode before spawning the inner sleep.\n- Existing integration tests for non-graceful 130/143 paths still\n  pass.\n\nAlso (non-blocking CONCERN from Codex):\n- Documented the PID-recycle race in scoped_child.rs module doc\n  (microseconds-wide window between wait_with_output returning and\n  deregister; consequence is one stray SIGKILL during shutdown).\n\nRefs #477",
          "timestamp": "2026-05-21T12:37:23+01:00",
          "tree_id": "5f72da805ba34021671aae06988c1c6010b26b0b",
          "url": "https://github.com/fallow-rs/fallow/commit/85f3507ae3fa57993d3f6517eb8b50f97b62d45f"
        },
        "date": 1779363645069,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "ab3a66f3b831f5bb9c9720d837d0faab77aceb91",
          "message": "fix(ci-template): symlink bundled GitLab templates to workspace sources\n\nReplaces the byte-copy of `crates/cli/templates/ci/{gitlab-ci.yml,\nscripts/comment.sh, scripts/review.sh}` with git symlinks pointing at the\ncanonical workspace `ci/` files. Contributors now edit one source of\ntruth; `cargo package` dereferences the symlinks into regular files so\nthe published crate stays self-contained.\n\nRemoves the `bundled_templates_match_workspace_sources` byte-drift test\nin favour of the inode equivalence the symlink provides. The companion\n`gitlab_ci_template_for_loops_match_vendored_files` test still guards\nthe `GITLAB_FILES` list against `for f in ...` loop drift inside the\ntemplate.\n\nDocuments the Windows prerequisite (`git config --global core.symlinks\ntrue`) in `CONTRIBUTING.md` and updates `.claude/rules/cli-crate.md` to\ndescribe the new packaging contract.\n\nFixes #518.",
          "timestamp": "2026-05-21T12:49:52+01:00",
          "tree_id": "0e813a531d3e692f016e49c9dc118c7dc1238478",
          "url": "https://github.com/fallow-rs/fallow/commit/ab3a66f3b831f5bb9c9720d837d0faab77aceb91"
        },
        "date": 1779364404304,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "1e4e082a906ced586687ddf01f063f1145386dca",
          "message": "fix(cache): write-time size cap + config-aware invalidation\n\n* feat(cache): write-time cap + LRU eviction + config-aware invalidation\n\nCloses #466.\n\nTwo structural gaps in `crates/extract/src/cache/`:\n\n1. Write-time size cap. The 256 MB cap was only enforced at load time, so\n   long-lived developer caches silently discarded everything once they crossed\n   the threshold. `CacheStore::save` now encodes once, evicts LRU entries when\n   the encoded size exceeds 80% of the cap, re-encodes after eviction, and\n   writes atomically via tmp+rename. The eviction floor honors the user's cap\n   (single-entry overshoot logs `tracing::warn!` rather than silently lying).\n\n   `last_access_secs: u64` lives on `CachedModule`. It is set at insertion\n   time (cache miss or content change) and NOT refreshed on cache-hit reads;\n   refreshing on read would collapse the LRU because `update_cache`\n   iterates every in-scope file every run.\n\n   Override via `FALLOW_CACHE_MAX_SIZE` env var or `cache.maxSizeMb` config\n   field (env var wins). No CLI flag, matching the ecosystem convention\n   (knip, eslint, biome, turbo all use config or implicit caps).\n\n2. Config-aware invalidation. The cache key is `(file_path, content_hash)`\n   plus a global `CACHE_VERSION`. Disabling a plugin or removing a\n   `framework: [...]` entry left the cache stale. The cache header now\n   carries a `config_hash: u64` computed via xxh3 over a sorted list of\n   active external plugin names plus inline framework definition names. A\n   mismatch on load discards the cache (same shape as a version mismatch).\n\n   ADR-009 documents the narrow ingredient set, the rationale for excluding\n   `entry`/`ignorePatterns` (detection inputs, not extraction inputs), the\n   plugin-file-content limitation, and the contract for adding new\n   ingredients.\n\n`CACHE_VERSION` bumps 87 -> 88 (new field on `CachedModule`, new header\nfield on `CacheStore`). A `tracing::info!` fires on the version-mismatch\nload path so users see the one-time rebuild.\n\nEviction is `tracing::debug!` by default and promotes to `tracing::info!`\nonly when at least 25% of entries are removed in a single save, so warm-cache\nsaves stay silent.\n\nPre panel-review: dropped the proposed `--cache-max-size` global flag,\nadopted env-var + config-field surface, replaced two-encode eviction with\nsingle-encode plus an estimated cost check, replaced the \"100-entry floor\"\nwith always-honor-cap-plus-warn, added atomic save.\n\n* fix(cache): preserve last_access_secs on metadata-only refresh + safe BPS math\n\nPost review-fix for #466.\n\nTwo correctness gaps the rust-reviewer surfaced:\n\n1. `update_cache`'s `touch`-handling branch (mtime/size differ, content\n   hash matches) previously rebuilt the cache entry via `module_to_cached`,\n   which stamps the current epoch second into `last_access_secs`. Result:\n   any build pipeline that `touch`es files before invoking fallow (common\n   with sed-based codegen and `make` rebuilds) would refresh every entry's\n   LRU recency on every run, defeating the eviction order. Now: the\n   refreshed entry preserves the existing `last_access_secs`, so the LRU\n   continues to discriminate even across `touch`-heavy workflows.\n\n2. `max_size_bytes.saturating_mul(EVICTION_TRIGGER_BPS) / 10_000` could\n   saturate at pathologically-large caps (above ~2.3 PB) and produce a\n   trigger threshold half of the intended value. Divide-first ordering\n   keeps the arithmetic well below `usize::MAX` at every realistic cap,\n   with at most 0.008% rounding error. Applied to both the trigger and\n   target computations. `initial_entries * EVICTION_SIGNIFICANT_BPS` stays\n   multiply-then-divide since `initial_entries` is bounded by the file\n   count (typically 100k-1M) and small caches need the precision to keep\n   the significance threshold non-zero.\n\n* docs(changelog): cache hardening Unreleased entry for #466\n\n* fix(cache): honor user cache cap on load + emit upgrade log on decode fail\n\nPost /fallow-review + Codex BLOCK fixes for #466.\n\n(1) `CacheStore::load` now takes `max_size_bytes` so a user setting\n    `cache.maxSizeMb = 512` (or `FALLOW_CACHE_MAX_SIZE=512`) can write a\n    400 MB cache and load it back; the previous code gated load on the\n    hardcoded `DEFAULT_CACHE_MAX_SIZE` (256 MB) and silently discarded any\n    larger cache on the next run. The load ceiling is now\n    `max(max_size_bytes, DEFAULT_CACHE_MAX_SIZE)` so a misconfigured tiny\n    cap (e.g. `FALLOW_CACHE_MAX_SIZE=1`) does NOT trash a valid existing\n    cache; user caps take effect on the next SAVE via the eviction logic.\n    All four load callsites updated (`core/lib.rs`, `cli/flags.rs`,\n    `cli/health/mod.rs`, `cli/coverage/analyze.rs`) via a new\n    `fallow_core::resolve_cache_max_size_bytes(&config)` helper.\n\n(2) The upgrade `tracing::info!(\"Cache format upgraded, rebuilding ...\")`\n    log now fires on bitcode decode FAILURE as well as version mismatch.\n    Across a `CACHE_VERSION` bump the on-disk schema typically changes\n    shape, so the new `CacheStore` struct cannot deserialize old bytes\n    and bitcode returns an error before reaching the version check.\n    The old code went silent on this common path; now both paths emit\n    the same info log.\n\n(3) Regenerated `schema.json` to publish the new `cache.maxSizeMb`\n    config field + `CacheConfig` definition for IDE autocomplete.\n\n(4) Added `FALLOW_CACHE_MAX_SIZE` to the in-repo env var inventories\n    (`CLAUDE.md`, `.claude/rules/cli-crate.md`) so future contributors\n    discover it. Companion-repo docs already carry it.\n\nTwo new regression tests in `crates/extract/src/cache/tests.rs`:\n- `cache_load_honors_user_max_size_above_default`: covers both the\n  \"user cap > default\" load path and the \"user cap < default does not\n  discard valid cache\" floor semantics.\n- `cache_load_returns_none_on_bitcode_decode_failure`: covers the\n  upgrade-path decode failure that the old test (which mutated the\n  version byte inside the new schema) did not exercise.",
          "timestamp": "2026-05-21T12:57:52+01:00",
          "tree_id": "ed9d1910ed8aaf810bebd8677dc6008b534a7007",
          "url": "https://github.com/fallow-rs/fallow/commit/1e4e082a906ced586687ddf01f063f1145386dca"
        },
        "date": 1779364871541,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "7b6ae40f93ded729402406f422930214763f3089",
          "message": "fix(migrate): warn on dropped knip rules + glob-drift caveat\n\n`fallow migrate` previously dropped three classes of knip input without\ndiagnostic: rule keys under `rules` / `exclude` / `include` that were\nneither in `KNIP_RULE_MAP` nor in `KNIP_UNMAPPABLE_ISSUE_TYPES` (typos,\nfuture knip rules, internal rules the migrator had not yet catalogued)\ndisappeared from the generated config, and `entry` / `ignorePatterns`\nglobs were copied verbatim with no statement about knip's glob engine vs\nfallow's `globset` potentially diverging on corner cases.\n\n`warn_unmapped_rule_key` in `crates/cli/src/migrate/knip_fields.rs` now\nemits a `MigrationWarning` for every untranslated key across all three\nfields, with two shapes: documented-unmappable issue types keep the\nexisting message; completely-unknown keys get a new \"unknown knip issue\ntype\" message with a docs-URL suggestion. `run_migrate` appends a single\n`Note:` line after the warnings section when knip was a migration source\nAND the migrated config carries `entry` or `ignorePatterns`, suppressed\nfor jscpd-only and rules-only knip configs. The warnings header is now\nsingular/plural-aware since a single typo'd rule is the most common\ncount-one case. Content-detected `--from custom-name.json` paths are\ntagged internally with `(knip config)` so the glob caveat fires through\nthat branch; a `source_head` helper strips the tag (via `rsplit_once`\nplus closing-paren guard, so paths containing their own ` (...)` segment\nare preserved) before printing the user-visible \"Migrated from:\" line\nand the generated `// Migrated from ...` header. `OutputFormat::pick`\nruns through the same helper so `.jsonc` auto-mirror keeps working\nthrough tagged sources.\n\nA new `migrate_roundtrip_globs_match_knip_documented_semantics`\nintegration test builds a Next.js-shaped fixture project, runs the\nmigrator, runs `fallow list --files` against the migrated config, and\nasserts the discovered file set exactly matches a hand-recorded ground\ntruth derived from knip's documented glob semantics; new unit tests\ncover the unknown-key warning at all three field paths, the glob-caveat\ngating across knip / jscpd / combined sources, the `source_head` edge\ncases (path with parens, unclosed paren, empty input), and a small set\nof `knip_glob_equivalence_*` assertions documenting where both engines\nagree today plus one negative case for `!` negation drift.\n\nFixes #457.",
          "timestamp": "2026-05-21T13:12:17+01:00",
          "tree_id": "c8d51d269fb703648629e8b71495d2cba501e478",
          "url": "https://github.com/fallow-rs/fallow/commit/7b6ae40f93ded729402406f422930214763f3089"
        },
        "date": 1779365691746,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "99c315052e24624532a7ae160650f873e26b0b12",
          "message": "chore(ci): unblock Documentation + Windows ARM64 jobs\n\nTwo CI failures landed on main in the back-to-back merges of #473\n(workspace diagnostics) and #477 (signal handlers). Both are\none-line follow-ups; #466 caught them on its post-merge run.\n\nDocumentation job: `discover_workspaces` in `crates/config/src/\nworkspace/mod.rs:70` referenced the private `emit_warn` helper via\na rustdoc intra-doc link `[`emit_warn`]`. `-D warnings` promotes\n`rustdoc::private_intra_doc_links` to a hard error since `emit_warn`\nis `pub(super)` inside the sibling `diagnostics` module. Switched to\na plain backtick code span plus a short pointer to where the helper\nlives so the reader can still find it without the link.\n\nWindows ARM64 Native Compile job: `crates/cli/src/signal/windows.rs`\nimported `BOOL` from `windows_sys::Win32::Foundation::BOOL`, which\nno longer resolves under windows-sys 0.61. Confirmed via the crate\nsource that `BOOL` now lives at `windows_sys::core::BOOL` and matches\nthe `SetConsoleCtrlHandler` signature `add: windows_sys::core::BOOL\n-> windows_sys::core::BOOL`. Updated the import path and added a\ncomment explaining the move so the next windows-sys bump audit picks\nit up.",
          "timestamp": "2026-05-21T13:24:18+01:00",
          "tree_id": "404c3d2146d38996544a601c21b3e63ecdff1894",
          "url": "https://github.com/fallow-rs/fallow/commit/99c315052e24624532a7ae160650f873e26b0b12"
        },
        "date": 1779366406658,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "9d47eda745e6e35534bd4b578b0f4bc77653379a",
          "message": "fix(lsp): skip stale diagnostic publishes when document version moves mid-analysis\n\n* fix(lsp): skip stale diagnostic publishes when document version moves mid-analysis\n\nThe LSP captured analysis input at run_analysis entry and published its\noutput unconditionally, even when the user had typed further between\nspawn_blocking dispatch and publish. Squiggles ended up pinned to lines\nthe user no longer wrote.\n\nTrack per-URI document `version` alongside the cached text (LSP supplies\nit on did_open / did_change). Snapshot the live version map once at\nrun_analysis entry, thread the snapshot through to\npublish_collected_diagnostics, and per URI:\n\n  - If the live version has advanced past the snapshot (strict `>`), or\n    if the document was closed mid-run (in snapshot, absent from live),\n    skip publish + cache update. Still insert the URI into `new_uris`\n    so the next-run stale-clearing branch does not erase the last-valid\n    diagnostics from the client.\n  - Otherwise publish as before, passing `Some(snapshot_version)` to\n    `publish_diagnostics` so LSP 3.17 clients can use the standard\n    PublishDiagnosticsParams.version slot.\n\nThe single-flight `analysis_guard`, did_save debouncer, and pull-model\ndiagnostic handler are unchanged. The stale-clearing branch mirrors the\nsame skip and reads all needed live versions before acquiring the\n`cached_diagnostics.write()` lock (avoids holding a write-lock across an\nawait on `documents.read()`).\n\nAdds 7 tests covering: stale-skip on advanced version, equal-version\npublishes, URI-not-in-snapshot publishes, did_close-mid-run skip,\n`Some(snapshot_version)` is threaded to publish_diagnostics, stale-\nclearing branch skips advanced URIs, skipped URIs land in\nprevious_diagnostic_uris.\n\nFixes #450\n\n* docs(lsp): document diagnostic publish staleness invariant + changelog\n\nAdds a \"Diagnostic publish staleness\" section to .claude/rules/lsp-server.md\ncovering the snapshot-then-compare semantics, the stale-skip + new_uris\npreservation invariant, the LSP 3.17 PublishDiagnosticsParams.version slot\nthreading, and the pull-model cache-at-last-valid behavior. Adds the\nmatching user-facing CHANGELOG entry under Unreleased.\n\nCompanion to #450.\n\n* fix(lsp): also treat opened-mid-run URIs as stale; tighten staleness contract\n\nCodex's parallel /fallow-review on the #450 stale-publish fix BLOCKed on a\nrace in `uri_is_stale`: a URI absent from the snapshot but PRESENT in\n`live_versions` was treated as non-stale. That covered the legitimate\n\"cross-file diagnostic on a never-opened file\" case, but it also let an\n`did_open` landing between snapshot capture and publish slip through:\nthe analysis ran without seeing the just-opened buffer, the publish went\nout with `version: None` (no snapshot for that URI), and the client could\nnot version-discard the mismatched payload server-to-client.\n\n`uri_is_stale` now requires a URI to be absent from BOTH the snapshot AND\nthe live `documents` map to count as non-stale. Three conditions now\nshort-circuit to STALE: live > snapshot (edited mid-run), snapshot\npresent + live absent (closed mid-run), snapshot absent + live present\n(opened mid-run). Only the (None, None) case publishes unconditionally,\ncovering cross-file diagnostics anchored to files the user never opened\nvia the LSP (`package.json`, `pnpm-workspace.yaml`).\n\nAdds `publish_skips_uri_when_opened_mid_run`; renames the existing\n`publish_emits_when_uri_absent_from_snapshot` to\n`publish_emits_when_uri_absent_from_snapshot_and_live` and tightens its\ncomment so the contract is explicit. Updates the LSP staleness invariant\nsection in `.claude/rules/lsp-server.md` to match the corrected\nsemantics.\n\nRefs #450.",
          "timestamp": "2026-05-21T13:36:44+01:00",
          "tree_id": "d0af9dda8e722a2896fac93f1b68e79904549967",
          "url": "https://github.com/fallow-rs/fallow/commit/9d47eda745e6e35534bd4b578b0f4bc77653379a"
        },
        "date": 1779367138527,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "9035c4b2e8b10bc1d444b32a36732c548d3ca581",
          "message": "chore(ci): add schema.json drift gate against FallowConfig::json_schema()\n\nMirrors the docs/output-schema.json drift gate (issue #338) on the\nsymmetric config-input chain. A new `#[cfg(test)] mod config_schema_drift`\nin crates/cli/src/init.rs parses the committed schema.json and the live\n`FallowConfig::json_schema()` output to `serde_json::Value` and\n`assert_eq!`s them, guarded by `is_object()` against the production\ncode's `unwrap_or_default()` swallowing a future schemars failure into\n`Value::Null`. On mismatch a three-line panic points at the regen\ncommand (`cargo run --bin fallow -- config-schema > schema.json`).\n\nThe include_str! path resolves inside the crate via a git symlink\ncrates/cli/schema.json -> ../../schema.json so cargo package dereferences\ninto a self-contained tarball, matching the existing pattern at\ncrates/cli/templates/ci/gitlab-ci.yml. The ci.yml `rust:` paths-filter\nnow also matches edits to schema.json directly so schema-only PRs still\ntrigger the check job; `schema.json` is added to the `npm-package:`\nfilter too so the new `diff schema.json npm/fallow/schema.json` step\nfires at PR time on schema-only PRs. Both ci.yml and release.yml now\nfollow `cp schema.json npm/fallow/schema.json` with a `diff` invariant\nguard so a future refactor that drops or moves the cp fails loud rather\nthan shipping a stale schema to npm consumers.\n\nFixes #440.",
          "timestamp": "2026-05-21T14:08:02+01:00",
          "tree_id": "8877b82009ffadd726fc9aa70a78fb47ee53c226",
          "url": "https://github.com/fallow-rs/fallow/commit/9035c4b2e8b10bc1d444b32a36732c548d3ca581"
        },
        "date": 1779369022850,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "bfe89df1823479e7d3dbe6d44472e0bab3ed605f",
          "message": "chore(audit): name lock-lifecycle invariant in test comments substantively\n\nTest comments and assertion messages in `reusable_cache_gc_preserves_lock_file_after_removal`\nreferenced an internal review-process label rather than the substantive\ninvariant they pin. Switch to \"lock-file lifecycle invariant\" so the\ntest reads correctly to future maintainers without dependencies on\nout-of-tree review nomenclature.\n\nNo functional change.",
          "timestamp": "2026-05-21T14:50:11+01:00",
          "tree_id": "1a3968b6e5dfc332584e928b2c97e0580a9b77b1",
          "url": "https://github.com/fallow-rs/fallow/commit/bfe89df1823479e7d3dbe6d44472e0bab3ed605f"
        },
        "date": 1779371674772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "ec210c3b255b8f1d7594b15773461ff9e1df1154",
          "message": "fix(fix): preserve UTF-8 BOM + skip mixed CRLF/LF files\n\nTwo file-encoding correctness gaps in `fallow fix` are closed in one\npass. Previously, mixed CRLF/LF source files were silently mangled\nbecause `read_source` detected the line ending by `contains(\"\\r\\n\")`\nand then split exclusively on that style; lines that did not end with\nthe detected separator got embedded into adjacent lines and the fix\nwrote to the wrong line. Now `read_source` returns `EncodingError::\nMixedLineEndings` on detection, the orchestrator translates that into\n`SkipReason::MixedLineEndings`, the JSON envelope grows an additive\nsibling counter `skipped_mixed_line_endings: N` next to the existing\n`skipped_content_changed`, and the run exits with code 2. The skip is\nNOT self-healing: a stderr line names `dos2unix` and `git config\ncore.autocrlf input` as the required remediation. `FixPlan::skip`\ndedupes on `(path, reason)` so a file carrying findings for multiple\nfixers (e.g. an unused export AND an unused enum member) surfaces as\none entry, not one per fixer.\n\nUTF-8 BOM handling becomes symmetric. The extract layer's three read\nentry points (`parse_single_file_cached`, `parse_single_file`,\n`parse_from_content`) now strip the leading BOM before hashing and\nbefore parsing, so `content_hash`, `compute_line_offsets`, and the\noxc parser all see a consistent post-BOM byte sequence; line numbers\non BOM-bearing files no longer shift by the codepoint. The fix layer's\n`stage_fixed_content` re-prepends the BOM bytes (`EF BB BF`) on write\nwhen the source had one, so Windows-authored files round-trip with\ntheir BOM intact. `parse_source_to_module` carries a defense-in-depth\nstrip for out-of-tree callers (fuzzers, integration fixtures). fallow\nneither adds nor removes a BOM. The extraction cache `CACHE_VERSION`\nbumps from 88 to 89 because pre-fix caches keyed hashes over BOM-\nincluded bytes; first run after upgrade is uncached, subsequent runs\nare warm.\n\nThe `fix_preview` and `fix_apply` MCP tool descriptions are updated to\nflag the non-self-healing nature of the mixed-EOL skip for AI agents.\nCompanion-repo docs (fallow-docs/cli/fix.mdx + fallow-skills/.../cli-\nreference.md) get a new \"File encoding contract\" section covering both\nhalves.\n\nFixes #475.",
          "timestamp": "2026-05-21T15:25:53+01:00",
          "tree_id": "2aed5ba11fc461928f0a95014d0ddd36f63174fb",
          "url": "https://github.com/fallow-rs/fallow/commit/ec210c3b255b8f1d7594b15773461ff9e1df1154"
        },
        "date": 1779373707066,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "ba5885547ea36666b3722639c9cba570e94fba1f",
          "message": "feat(review): evolve review-{github,gitlab} envelope to v2\n\n* feat(review): evolve review-{github,gitlab} envelope to v2\n\nCloses #528.\n\nAdds five additive fields to ReviewEnvelopeOutput plus one independent\ncorrectness fix for GitLab inline comments on renamed files. v1 readers\nare unaffected (additive shape); v2 readers populate the new fields and\nrecognize the new marker shape.\n\n- ReviewEnvelopeSchema::V2 (\"fallow-review-envelope/v2\") bumped because\n  comments[] is no longer 1:1 with findings (same-line merging) and the\n  fingerprint-marker shape changed. v1 retained on the enum for read-\n  side back-compat.\n- summary: { body, fingerprint } at root. Body is byte-identical to the\n  legacy top-level body field; fingerprint is FNV-1a(body). Consumers\n  upsert a single sticky PR/MR summary by marker reconciliation without\n  invoking fallow twice.\n- marker_regex at root. Stable\n  (?m)^<!-- fallow-fingerprint:v2: ((?:[a-z]+:)?[0-9a-f]{16}) -->\\s*$\n  consumers grep + capture against. Works in Rust regex and JS ES2018\n  via the inline (?m) flag, no flag-awareness on consumer side. The\n  :v2: magic-byte segment prevents v1 marker collision and reduces\n  user-paste spoofing.\n- Same-(path, line) merging in comments[] with a two-tier fingerprint\n  contract: primary fingerprint = linecomp:<16-hex of path:line>\n  stable across runs, plus constituent_fingerprints: Vec<String>\n  carrying the per-finding fingerprints. (Reverted to hashed-composite\n  in a follow-up commit; see the next fix(review) entry.)\n- UTF-8-safe body truncation at 65,536 bytes (conservative floor under\n  GitHub's 65,536-char limit; GitLab is 1,000,000 chars per\n  https://docs.gitlab.com/administration/instance_limits/). Three\n  signals: typed truncated: bool field, inline <!-- fallow-truncated -->\n  HTML marker, and human \"... (truncated)\" text. Char-boundary safe.\n- DiffIndex.rename_pairs (head_path -> base_path) populated from\n  rename from / rename to extended-diff headers. Threaded through\n  render_review_envelope to render_merged_comment; GitLab position\n  block's old_path now carries the base-side filename for renamed\n  files. Wire-correctness bug fix valid under v1 schema too; ships\n  together for one-PR atomicity.\n\nReconcile-review (fallow ci reconcile-review) gains\nextract_fallow_fingerprint() helper that accepts both v1 and v2 marker\nshapes so consumers migrating from v1 captures continue to reconcile.\n\nSchema regenerated: ReviewEnvelopeSummary added to\ndocs/output-schema.json definitions; new fields in\nReviewEnvelopeOutput, GitHubReviewComment, GitLabReviewComment.\nTypeScript types regenerated in editors/vscode/src/generated/ and\nnpm/fallow/types/.\n\nOut of scope (deferred):\n\n- TS pipeline steps for per-file unused-export grouping, per-group\n  clone-instance dedup, and refactoring-target drops.\n- New CLI flag for --max-comments paralleling FALLOW_MAX_COMMENTS.\n- Body byte-cap as a configurable knob.\n\n* fix(review): make vendor shell scripts accept v2 envelope shape\n\nBundled action/scripts/review.sh and ci/scripts/review.sh gated on\n.meta.schema == \"fallow-review-envelope/v1\" exactly, so the v1->v2\nschema bump silently breaks the entire posting step: render_with_fallow\nreturns 1, the if-guard skips the POST loop, no inline comments are\nposted, and the workflow exits 0 with only a warning in the log.\nCompound regression: the sed-based dedup fingerprint extractor matches\n`fallow-fingerprint: ` (with space) which is wrong for the v2 marker\nshape (`fallow-fingerprint:v2:` with no space before the namespace);\nv2 markers had captured `v2:` as the fingerprint, breaking dedup\nidempotency on re-runs.\n\nBoth shell scripts now accept any `fallow-review-envelope/v<N>` schema\nvia `test(\"^fallow-review-envelope/v[0-9]+$\")`. The sed dedup extracts\nfingerprints from both v1 and v2 marker shapes (v2 first to avoid the\nv1 substring capturing `v2:`), sort -u to dedupe in case a single\ncomment carries both. ci/scripts/review.sh is symlinked into\ncrates/cli/templates/ci/ so the bundled drift gate stays green.\n\nThree follow-up cleanups folded in:\n\n- output_envelope.rs::is_false drops the spurious clippy #[expect] in\n  favor of #[allow] (trivially_copy_pass_by_ref is pedantic-only and\n  fires inconsistently across build configurations, which would trip\n  unfulfilled_lint_expectations under #[expect]; project convention in\n  .claude/rules/code-quality.md is #[allow] with reason for\n  pedantic-only lints).\n- truncation breadcrumb in review.rs::TRUNCATION_SUFFIX moves from\n  `... (truncated)` plain prose to `> Body truncated by fallow.`\n  blockquote, matching the existing `> Run fallow fix --files...`\n  convention in suggestion.rs so the breadcrumb reads as fallow\n  speaking rather than as truncated content. Co-presence invariant\n  with `truncated: bool` and `<!-- fallow-truncated -->` HTML marker\n  spelled out in the doc comment.\n- GitHub + GitLab comment `truncated` doc comments document the\n  three-signal invariant explicitly (typed bool authoritative, HTML\n  marker + blockquote always co-present).\n\nSchema regenerated + TS codegen regenerated (no breaking changes;\nonly description-string updates on `truncated` fields).\n\n* docs(review): document v2 envelope evolution\n\nCHANGELOG.md [Unreleased] gains a bold one-liner under Changed for\nthe issue #528 review-envelope v2 migration, covering all five\nadditive surface changes (summary block, marker_regex, same-line\nmerging with stable linecomp:<...> primary fingerprint plus\nconstituent_fingerprints array, UTF-8-safe body truncation with\nco-present truncated/HTML-marker/blockquote signals, GitLab\nposition.old_path for renamed files) and the v1/v2 marker\nrecognition in both the bundled reconcile-review subcommand and the\nGitHub Action + GitLab CI template scripts.\n\n(The CHANGELOG entry is corrected in the follow-up fix(review)\ncommit when same-line merging is reverted to hashed-composite.)\n\n.claude/rules/cli-crate.md adds an entry for report/ci/review.rs\ncovering the render pipeline shape (group_by_path_line then\nrender_merged_comment, body truncation byte budget, GitLab old_path\nplumbing via DiffIndex.rename_pairs) and tightens the ci.rs entry to\ndocument the extract_fallow_fingerprint v2-first ordering plus the\nschema-version regex used by the bundled shell scripts. So future\nimplementers don't re-litigate the marker shape or v1->v2 fingerprint\nextraction ordering when extending this surface.\n\nThe fallow-docs CI section was updated in the companion repo\n(fallow-rs/docs@0504e8d) in the same drop.\n\nCompanion to fallow-rs/fallow#528.\n\n* fix(review): use hashed-composite fingerprint for merged comments\n\nReplaces the prior per-line stable identity (linecomp:<hash of path:line>)\nplus secondary constituent_fingerprints array with a single hashed-\ncomposite primary fingerprint: merged:<16-char hash of sorted\nconstituent fingerprints>. Single-finding comments keep the bare v1-\nstyle fingerprint. The constituent_fingerprints field is dropped from\nboth GitHubReviewComment and GitLabReviewComment.\n\nThe motivation: the bundled wrappers (action/scripts/review.sh,\nci/scripts/review.sh) and `fallow ci reconcile-review` dedupe on the\nprimary fingerprint only. Under the prior stable-linecomp design that\nmeant a merged comment whose constituent findings changed kept showing\nstale content forever (primary fingerprint unchanged so skip-if-exists\nsilently skipped the re-post). Under hashed-composite the primary\nfingerprint changes when constituents change, so the existing\nskip-if-exists logic correctly re-posts on content change.\n\nConsumers that need true update-in-place reconciliation (preserve\nreviewer reply threads across content changes) implement their own\nidentity tracking via marker_regex and the vendor edit endpoints\n(`PATCH /pulls/comments/{id}` on GitHub, `PUT /discussions/.../notes/\n{note_id}` on GitLab). The bundled scripts intentionally do not pay\nthat cost; the auth scopes, retry semantics, and edit-on-resolved-\nthread 422 handling are non-trivial.\n\nAlso clarifies the ReviewEnvelopeSummary::fingerprint docstring:\nthe FNV-1a hash is computed over the summary body BEFORE the trailing\nfallow-fingerprint marker line is appended (the marker contains the\nfingerprint, so the fingerprint cannot depend on the marker without\ncircularity). Consumers verifying from summary.body strip the line\nmatching marker_regex and hash the remainder.\n\nCompanion fallow-docs commit: fallow-rs/docs@8918062.\n\nOut of scope (unchanged): bundled shell scripts, ci.rs envelope\nreconciliation, marker shape, truncation contract, rename-pair plumbing.\nTouches output_envelope.rs, fingerprint.rs, review.rs, ci.rs (doc\nupdate), docs/output-schema.json (regen), TS codegen (regen),\nsnapshots, CHANGELOG, .claude/rules/cli-crate.md.\n\nRefs #528.\n\n* fix(review): split marker_regex from marker_regex_flags for JS compat\n\nThe v2 contract claim that the marker regex \"works in both Rust regex\nand JavaScript ES2018 RegExp without flag-awareness on the consumer\nside\" was wrong: JavaScript RegExp rejects the standalone `(?m)`\ninline flag group with `SyntaxError: Invalid regular expression ...\nInvalid group`. Verified by `node -e 'new RegExp(\"(?m)foo\")'` against\nNode 22.\n\nThe envelope now emits two fields:\n\n- `marker_regex`: anchored pattern WITHOUT `(?m)` baked in:\n  `^<!-- fallow-fingerprint:v2: ((?:[a-z]+:)?[0-9a-f]{16}) -->\\s*$`\n- `marker_regex_flags`: `\"m\"` so the anchored `^` / `$` match per-line\n  inside multi-line comment bodies.\n\nConsumers pass both to their regex engine:\n\n- JS: `new RegExp(env.marker_regex, env.marker_regex_flags)`\n- Rust: `RegexBuilder::new(&pat).multi_line(true).build()`\n\nVerified in Node: the new pattern + `m` flag compiles, matches a\nmarker on its own line, and rejects a marker pasted mid-line\n(anti-spoofing intact).\n\nSchema, TS codegen, and snapshots regenerated. CHANGELOG + cli-crate\nrule updated to describe the two-field contract. Companion fallow-docs\ncommit `fallow-rs/docs@2e1497b` updates the documented wire example,\nJS/Rust construction snippets, and consumer-side reconciliation\nexample.\n\nRefs #528.",
          "timestamp": "2026-05-21T18:20:39+01:00",
          "tree_id": "57119969498c6d84346cf8a5ccfbb6fb534ca3d3",
          "url": "https://github.com/fallow-rs/fallow/commit/ba5885547ea36666b3722639c9cba570e94fba1f"
        },
        "date": 1779384192941,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "ce9f2b1ec960d1792bef6c0d7c60ac223493cc9f",
          "message": "chore(fix): rename test comment to describe BOM-preservation invariant\n\nThe test comment on `staged_content_round_trip_through_second_fixer_preserves_bom`\nreferenced the review-process source of the invariant (\"per panel\nfeedback\") instead of the substantive property being asserted (BOM\npreservation across the staged-content fast path). Rename the comment\nto describe the invariant directly so the public source on GitHub\nreads as a self-contained assertion of the behavior, not a pointer to\ninternal review notes.\n\nMirrors the discipline added in `.claude/skills/fallow-implement` Phase\n4d: internal review nomenclature (\"panel BLOCK 1\", \"panelist 3 caught\",\n\"panel feedback\") must not leak into shipped source comments or test\nassertions; the comment should name the property being asserted and\nthe location where it is enforced, not the review step that\nidentified it.\n\nNo behavioral change. Existing test passes unchanged.",
          "timestamp": "2026-05-21T18:28:30+01:00",
          "tree_id": "590b96e01ba59904fb2b66154deb0903a7879803",
          "url": "https://github.com/fallow-rs/fallow/commit/ce9f2b1ec960d1792bef6c0d7c60ac223493cc9f"
        },
        "date": 1779384662355,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "fed4b483dd1cbba8c1f55dcfe5b9599c389f95a8",
          "message": "chore: release v2.77.0",
          "timestamp": "2026-05-21T19:42:46+02:00",
          "tree_id": "1f9b319f425e05d1da67a05a3cdf791363e2fc06",
          "url": "https://github.com/fallow-rs/fallow/commit/fed4b483dd1cbba8c1f55dcfe5b9599c389f95a8"
        },
        "date": 1779385781043,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "b16f3cdf097edf08def56aef0584d12160135067",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.77.0",
          "timestamp": "2026-05-21T21:07:36+02:00",
          "tree_id": "9e30bd688dac06bc66a225b18893caf378beb1fd",
          "url": "https://github.com/fallow-rs/fallow/commit/b16f3cdf097edf08def56aef0584d12160135067"
        },
        "date": 1779390615709,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "6ef6a5c37f926961130baa5590890805e2e04598",
          "message": "chore(ci): re-enable Windows in main Rust Check job on push to main\n\nThe `check` job in `.github/workflows/ci.yml` was hard-coded to\n`ubuntu-latest` to conserve CI minutes (per the comment block: \"Run\nmacos + windows locally before release\"). Reviewer enforcement is not\nenough: Windows-specific path bugs (backslash separators, UNC paths,\nlong-path `\\\\?\\` prefix, case insensitivity) only surfaced at release\ntime or via user reports (PR #55 history, ongoing case-sensitivity\nedge cases).\n\nExpand the matrix on push to `main` only, mirroring the structural\npattern already in use for the `zed` job at ci.yml:267. PR runs stay\nubuntu-only for fast feedback and to keep the April 2026 Actions\nbudget tightening (commit 7f2e61e6) honored. macOS stays out of the\nmatrix because it is a 10x multiplier vs Windows 2x; local pre-release\nruns continue to cover that platform.\n\nFixes #447.",
          "timestamp": "2026-05-21T20:37:34+01:00",
          "tree_id": "d459f638960716655f7af62adfdc21e6ad44e102",
          "url": "https://github.com/fallow-rs/fallow/commit/6ef6a5c37f926961130baa5590890805e2e04598"
        },
        "date": 1779392394139,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "6303864bf02c45bd1f9b7c3dceae7f6b4d89533d",
          "message": "fix(cli): classify POSIX-style absolute paths as absolute on Windows\n\n* fix(cli): classify POSIX-style absolute paths as absolute on Windows\n\n`Path::is_absolute()` returns false on Windows for POSIX-style paths\nlike `/project/foo.ts` (Windows requires `C:\\foo` or a UNC root). Five\ncall sites in `crates/cli/src/` gated on `Path::is_absolute()` directly,\nso cross-platform user-supplied paths (CiIssue.path deserialized from\nJSON output on a Unix host, --diff-file/--file CLI flags in a CI config\nshared across runners, audit baseline path in .fallowrc.json, source\nmap content authored on any OS) leaked through as \"relative\" on Windows\nand downstream logic produced wrong results. Surfaced by 13 test\nfailures on the new push-to-main Windows CI matrix leg from #447.\n\nNew crates/cli/src/path_util.rs exposes is_absolute_path_any_platform\nwhich recognises host absolute (via Path::is_absolute), POSIX-style\nroot (via Component::RootDir which matches `/foo` on both platforms),\nand Windows-style drive prefix (via byte-level scan of OsStr encoding\nso Unix hosts classify `C:/foo` source-map content correctly too). The\nexisting looks_like_windows_absolute_path helper in coverage.rs is\nlifted into the same module.\n\nWired into relative_to_diff_path (the original 13-test root cause),\nresolve_audit_baseline_path, resolve_source_map_base, the --file\nfilter in check/mod.rs, and supersedes the local helper in coverage.rs.\nrelative_to_diff_path now strip_prefix-first regardless of platform,\nfalling back on the helper only for the outside-root early-return.\n\nSix new path_util unit tests cover POSIX root, Windows drive, relative\nshapes, host absolute via current_dir, the &str variant, and a\nPathBuf round-trip from a Windows drive-prefixed string. All 13\npreviously-failing Windows tests pass under the new logic; Ubuntu and\nmacOS behaviour is unchanged.\n\nFixes #545.\nRefs #447.\n\n* chore(cli): replace 'mis-classify' with 'misclassify' to satisfy typos\n\nThe previous fix(cli) commit lost the typos-fix Edits between Edit-buffer\nand stash-pop merge during the pre-commit cycle. typos rejects `mis` as\nan unknown word when separated by hyphen; the merged form passes the\ngate.",
          "timestamp": "2026-05-21T21:10:02+01:00",
          "tree_id": "e7013f68a0750b755d34cea8aed92290268786fc",
          "url": "https://github.com/fallow-rs/fallow/commit/6303864bf02c45bd1f9b7c3dceae7f6b4d89533d"
        },
        "date": 1779394339561,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "02dc1cccb62b7b55ccb94904f91fdad960503fb1",
          "message": "fix(cli): classify POSIX-style absolute paths in health diff filter on Windows\n\nFollow-up to PR #548 (the #545 main fix). The Windows CI matrix run on\n`6303864b` showed 6 health::* test failures remained after the\ncheck-side fix: `crates/cli/src/health/mod.rs` carried a near-duplicate\n`relative_to_root` helper with the same `Path::is_absolute()` gate bug,\nand `retain_hot_paths_in_change_scope` applied the same gate to\n`hot_path.path` before joining against the root.\n\nBoth sites are now routed through the shared `crate::path_util`\nhelpers introduced in PR #548. `relative_to_root` adopts the\nstrip_prefix-first shape that mirrors\n`report::ci::diff_filter::relative_to_diff_path`, so POSIX-style\nabsolute paths in cross-platform CI configs (or deserialized from JSON\noutput authored on a Unix host) classify correctly on Windows.\n\nAll 6 previously-failing tests pass under the new logic on Ubuntu;\nthe Windows CI matrix on push to main will be the empirical\nconfirmation.\n\nRefs #545.",
          "timestamp": "2026-05-21T21:22:45+01:00",
          "tree_id": "a1db6d1b65fd722830f01a52197d2d674b583b74",
          "url": "https://github.com/fallow-rs/fallow/commit/02dc1cccb62b7b55ccb94904f91fdad960503fb1"
        },
        "date": 1779395113133,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "429b178122f56c4feea4fd173318547b67118d78",
          "message": "fix(extract): strip @layer/@import preludes before CSS Modules class scan\n\n* fix(extract): strip @layer/@import preludes before CSS Modules class scan\n\nFixes #540. CSS Modules files using nested cascade-layer syntax\n(`@layer foo.bar { ... }`) previously reported phantom `unused-export`\nfindings on every sub-segment of the layer name because the class scanner\ntokenised every `.<ident>` pattern as a class selector regardless of\nsyntactic context.\n\nThe fix introduces a narrow at-rule prelude strip that runs after string\nand url() removal but before the class regex. The regex\n`@(?:layer|import)\\b[^;{]*` matches the keyword plus the prelude\n(everything up to `;` or `{`) so block bodies are preserved. Only\n`@layer` and `@import` are in the allowlist: their preludes carry\ndot-separated layer names (`@layer foo.bar`, `@import url(x.css)\nlayer(theme.button)`) with no selector semantics. `@scope (.foo) to\n(.bar)` and every other at-rule keep today's behavior, because their\nprelude classes ARE genuine selector references.\n\nCACHE_VERSION bumps 89 to 90 so warm caches do not return the phantom\nexports after upgrade.\n\nTests cover the bug (statement / list / block / nested @media variants),\nthe no-regression contract (`@media`, `@scope`, `@-webkit-keyframes`,\nmulti-line preludes, class-then-at-rule on same line, `@keyframes` with\nnumeric `.5` literal), and the integration-level reproduction from the\nissue body verbatim.\n\nCloses #540\n\n* test(extract): add multiline @layer prelude test, clarify @media test comment\n\nTwo amendments from rust-reviewer on the #540 fix:\n\n1. `classes_inside_multi_line_media_query` previously claimed to validate the\n   new at-rule prelude regex's newline handling, but `@media` is not in the\n   allowlist so the new regex never fires on it. Rewrote the comment to make\n   clear that test guards the pre-existing scanner behavior.\n\n2. Added `at_layer_multiline_prelude_keeps_body_classes` to actually exercise\n   the new regex's multi-line behavior with a layer name split across lines.\n\nRefs #540\n\n* docs(changelog): add CSS Modules @layer prelude fix entry under Unreleased (#540)\n\n* docs(rules): add detection.md bullet for @layer/@import prelude strip (#540)",
          "timestamp": "2026-05-21T21:29:25+01:00",
          "tree_id": "19185e0d04e38ec8e424493aa3d0cd9bb9f97d8e",
          "url": "https://github.com/fallow-rs/fallow/commit/429b178122f56c4feea4fd173318547b67118d78"
        },
        "date": 1779395513990,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "8ee61a22454a80a815b04b53d34616b41f8a6370",
          "message": "fix(cli): normalise fallow-cov sidecar request paths to forward slashes\n\n`crates/cli/src/health/coverage.rs::build_request` emitted\n`static_findings.files[].path` via `relative.to_string_lossy().into_owned()`,\nwhich preserves backslashes on Windows checkouts. The sidecar JSON\nwire format must be host-OS-independent (a sidecar or downstream\nconsumer can run on a different machine), so the path now goes\nthrough `.replace('\\\\\\\\', \"/\")` to match the existing convention in\n`report::ci::diff_filter::relative_to_diff_path` and\n`health::mod::relative_to_root`.\n\nCloses the last Windows-only test failure observed on the push-to-main\nCI matrix after PR #548 + #551 (13 -> 6 -> 1 -> 0).\n\nRefs #545.",
          "timestamp": "2026-05-21T21:42:45+01:00",
          "tree_id": "d55a1ddf02c24ff3f3623ea8d4e5a4e91400fcaf",
          "url": "https://github.com/fallow-rs/fallow/commit/8ee61a22454a80a815b04b53d34616b41f8a6370"
        },
        "date": 1779396313286,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "9cdae3051c30dcd052453fd2595f4e312dd4bf0a",
          "message": "fix(ci): bump Windows fallow binary main-thread stack from 1 MiB to 16 MiB\n\nThe push-to-main Windows CI matrix from #447 surfaced 22+ audit\nintegration tests in `crates/cli/tests/audit_tests.rs` crashing with\n`STATUS_STACK_OVERFLOW` (exit `-1073741571`) when invoking the fallow\nbinary as a subprocess on `windows-latest`. Some recursive code path\ninside `fallow audit` (graph traversal, AST visitor, glob matching,\ngit worktree orchestration) exceeds the Windows default 1 MiB main\nthread stack but stays under the POSIX default 8 MiB.\n\n`.cargo/config.toml` now sets `link-arg=/STACK:16777216` for both\n`x86_64-pc-windows-msvc` and `aarch64-pc-windows-msvc` targets,\nmatching the 16 MiB ceiling that `crates/cli/src/rayon_pool.rs::WORKER_STACK_SIZE`\nalready enforces on rayon worker threads. `/STACK` reserves virtual\naddress space lazily so there is no runtime memory cost until the\nstack actually grows.\n\n`.gitignore` was rewritten from `.cargo/` to `.cargo/* + !.cargo/config.toml`\nso the committed config ships with the repo while local credentials\nunder `.cargo/credentials.toml` stay ignored.\n\nIdentifying and flattening the specific recursive offender is a\nfollow-up; this PR is the unblock-Windows-CI quick fix.\n\nFixes #556.\nRefs #447.",
          "timestamp": "2026-05-21T22:24:30+01:00",
          "tree_id": "9303fed54d79091cb144460d8c76caa71e751bd1",
          "url": "https://github.com/fallow-rs/fallow/commit/9cdae3051c30dcd052453fd2595f4e312dd4bf0a"
        },
        "date": 1779398813528,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "936fee7235c98eb460b9726c90ca418cdce6fe03",
          "message": "fix(cli): group top-level help commands",
          "timestamp": "2026-05-21T23:45:56+02:00",
          "tree_id": "8334c179a9f5e820c0ea25d8959ad8c474100b87",
          "url": "https://github.com/fallow-rs/fallow/commit/936fee7235c98eb460b9726c90ca418cdce6fe03"
        },
        "date": 1779400132088,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "2d26dc151e1416fb46f3103da9df1d6326ae257e",
          "message": "fix(audit): normalise Windows verbatim path prefix in relative_key_path\n\n`crates/cli/src/audit.rs::relative_key_path` stripped the project root\nfrom each finding path before building the BASE-vs-HEAD intersection\nkey. On Windows, `config.root` (often canonicalised via\n`std::fs::canonicalize`, which adds the `\\\\?\\` verbatim prefix) and\n`finding.path` (constructed from the BASE worktree's\n`std::env::temp_dir()` join, which does NOT) disagreed on prefix\nshape; `strip_prefix` silently fell through to the un-stripped path,\nHEAD keys landed as `src/foo.ts` while BASE keys landed as\n`C:/Users/.../Temp/fallow-audit-base-xxx/src/foo.ts`, and the\nintersection was empty.\n\nResult on the push-to-main Windows CI matrix: 8 audit integration\ntests in `crates/cli/tests/audit_tests.rs` reported 0 pre-existing\nfindings where 5+ were expected, because every inherited finding\nlanded as \"introduced\".\n\nFix: route both inputs through `dunce::simplified` before\n`strip_prefix`. `dunce::simplified` strips the `\\\\?\\` verbatim prefix\nwithout touching the filesystem; on POSIX it is a no-op so there is\nno behaviour change off-Windows.\n\nFixes #561.\nRefs #447, #545.",
          "timestamp": "2026-05-21T22:49:13+01:00",
          "tree_id": "3cdcb113204c9b8ae47f0ea7f8023e626cbc77e0",
          "url": "https://github.com/fallow-rs/fallow/commit/2d26dc151e1416fb46f3103da9df1d6326ae257e"
        },
        "date": 1779400298368,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "fb814dac1f7fcb483768f923c200c3ccec6c7c49",
          "message": "fix(cli): render workspace-relative paths in nudge and rollup lines\n\n* fix(cli): render workspace-relative paths in nudge and rollup lines\n\nReplace four human-output sites that previously rendered bare basenames\nvia `path.file_name()` with workspace-relative paths via a new\n`format_display_path` helper in `report/mod.rs`. Affects:\n\n- combined-mode failure footer (\"start with index.ts\" becomes \"start\n  with apps/server/src/index.ts\").\n- combined-mode refactoring-targets nudge.\n- Angular component rollup template path in the health rollup line.\n- inherited-from owner display on CRAP-coverage suffix.\n\nIn Nx / Angular / Rust workspaces, many files share basenames like\n`index.ts`, `mod.rs`, `*.component.ts`. Bare basenames cannot identify\nthe intended file, so the nudge tells users nothing actionable.\nWorkspace-relative paths resolve the ambiguity in a single uniform\nshape across all four sites, matching knip / ts-prune / depcheck.\n\nJSON, SARIF, CodeClimate, and MCP output already serialize full paths\nand are unchanged.\n\nFixes #547\n\n* docs(changelog): note workspace-relative paths in nudge / rollup / inherited-from\n\nAdds the [Unreleased] entry for #547 covering the four human-output\nsites whose bare-basename rendering was replaced with project-relative\npaths.",
          "timestamp": "2026-05-21T23:02:02+01:00",
          "tree_id": "b7336b749be8b697745aa29c713826edd66d08d5",
          "url": "https://github.com/fallow-rs/fallow/commit/fb814dac1f7fcb483768f923c200c3ccec6c7c49"
        },
        "date": 1779401059781,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "ab27bcfbf1607f145649d52ed95777f50221710a",
          "message": "fix(audit): strip Windows verbatim prefix at git_toplevel for --changed-since + audit\n\nThe real Windows-only bug behind #561 (the dunce::simplified fix in\n40b000f8 was a real correctness improvement but not load-bearing for\nthis issue): `resolve_git_toplevel` in `crates/core/src/changed_files.rs`\nused `std::fs::canonicalize`, which on Windows adds the `\\\\?\\`\nverbatim prefix to its result. Every path from `git diff --name-only`\ngot joined onto this verbatim-prefixed toplevel, producing\nchanged-files paths shaped like `\\\\?\\C:\\Users\\...\\Temp\\test\\src\\foo.ts`.\n\nDownstream `strip_prefix` comparisons against `opts.root` (the CLI's\nproject root from clap, which carries NO verbatim prefix) walk the\ncomponent graph and see `Prefix(VerbatimDisk('C'))` against\n`Prefix(Disk('C'))`. They are not equal. Every entry in the\nchanged-files set silently failed the prefix check, the focus filter\ndropped EVERY finding before the audit attribution pass ran, and\naudit reported 0 pre-existing findings.\n\nThat's the root cause of the 8 audit integration tests in\n`crates/cli/tests/audit_tests.rs` that report\n`expected at least 5 pre-existing unused exports, got 0` on Windows.\nThree sites switch from `std::fs::canonicalize` to\n`dunce::canonicalize`:\n\n- `crates/core/src/changed_files.rs::resolve_git_toplevel`\n- `crates/cli/src/audit.rs::git_toplevel`\n- `crates/cli/src/audit.rs::base_analysis_root` (current_root)\n\n`dunce::canonicalize` strips the `\\\\?\\` prefix on Windows and is\nidentical to `std::fs::canonicalize` on POSIX, so behaviour off\nWindows is unchanged.\n\nRefs #561, #447, #545.",
          "timestamp": "2026-05-21T23:06:17+01:00",
          "tree_id": "35c4d13c1fcdbff03c98af73fb387f21669ce563",
          "url": "https://github.com/fallow-rs/fallow/commit/ab27bcfbf1607f145649d52ed95777f50221710a"
        },
        "date": 1779401385026,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "b3b1ae8a68f99860c2304953c362e0b7ec749e10",
          "message": "chore(cli): route dupes + health file headers through format_display_path\n\nFollow-up to #547. Two human-output sites (`dupes.rs:240`,\n`health.rs:861`) still rendered file paths via\n`relative_path(...).display().to_string()` without forward-slash\nnormalisation, so on Windows the dupes section and the complexity\nfindings file header emitted backslashes while the four #547 sites\nemitted forward slashes within the same combined run. Routing both\nsites through the shared `format_display_path` helper closes the\ncross-line inconsistency without changing macOS or Linux output. No\nJSON / SARIF / CodeClimate / MCP shape changes.\n\nSurfaced by the cli-output-reviewer pass on #547 as a non-blocking\nfollow-up.",
          "timestamp": "2026-05-21T23:09:41+01:00",
          "tree_id": "4ac2d1de841155d0fc85ff14d210933dc66ab3bf",
          "url": "https://github.com/fallow-rs/fallow/commit/b3b1ae8a68f99860c2304953c362e0b7ec749e10"
        },
        "date": 1779401673309,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "ac09e464b7f835bb9babc3b542f8c442c4018510",
          "message": "fix(extract): record real source positions on CSS Modules exports\n\nextract_css_module_exports emitted Span::default() (start=0, end=0) on\nevery ExportInfo, so downstream compute_line_offsets resolved every\n.module.css and .module.scss unused-export finding to line:1 col:0\nregardless of where the class actually appeared in the file. LSP go-to\ndefinition jumped to the file header, SARIF regions all anchored at\nline 1, and the --diff-file line-overlap classifier never intersected\nreal diff hunks because every CSS-Modules finding looked like it lived\non line 1.\n\nThe four pre-existing strip passes (block comments, SCSS line comments,\nquoted strings plus url(...), and the @layer / @import prelude strip\nadded in #540) now replace each match with ASCII spaces of equal byte\nlength instead of collapsing the range, so CSS_CLASS_RE capture offsets\nin the masked buffer index 1:1 back into the original source. Each\nemitted ExportInfo carries Span::new(start, end) pointing at the bare\nclass identifier (no leading dot), matching how oxc spans identifiers\nelsewhere in the codebase. The function signature gains is_scss: bool\nso the SCSS-line-comment strip only fires for .module.scss; the lone\nin-tree callers (parse_css_to_module, the fuzz target, the fallow-core\nre-export) move with it.\n\nCACHE_VERSION bumps 90 to 91 because cached ExportInfo.span payloads\nchange shape from default to real offsets; warm caches invalidate on\nupgrade and re-extract CSS-Modules files on first run.\n\nFixes #549.",
          "timestamp": "2026-05-21T23:22:03+01:00",
          "tree_id": "6ba61e41584664b0cf6c3b7e42297f4ab30bd1f4",
          "url": "https://github.com/fallow-rs/fallow/commit/ac09e464b7f835bb9babc3b542f8c442c4018510"
        },
        "date": 1779402365448,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "19b761ef61cc7f7bc6f0a7c12d1915e4bf90a289",
          "message": "fix(audit): sweep std::fs::canonicalize to dunce in audit.rs production sites\n\nFollow-up to PR #566. The earlier fix to `resolve_git_toplevel` closed\nthe changed_files mismatch but the next Windows CI run surfaced 3\naudit unit tests that still fail with assertion panics:\n\n- `audit_dupes_only_materializes_groups_touching_changed_files`:\n  \"changed file should still match unchanged duplicate code\"\n- `audit_gate_new_only_inherits_pre_existing_duplicates_in_focused_files`:\n  \"current run should detect the pre-existing duplicate\"\n- `audit_gate_new_only_skips_base_snapshot_for_docs_only_diff`:\n  \"assertion failed: result.base_snapshot_skipped\"\n\nRoot cause: four other production sites in `crates/cli/src/audit.rs`\nstill used `std::fs::canonicalize`, each producing a `\\\\?\\C:\\...`\nverbatim path on Windows that mismatched against non-verbatim paths\nfrom other code paths. Sites switched to `dunce::canonicalize`:\n\n- `can_reuse_current_as_base::canonical_cache_dir` (load-bearing for\n  the docs-only test: `path.starts_with(canonical_cache_dir)` checked\n  a verbatim path against a non-verbatim changed_files entry)\n- `reusable_audit_worktree_path::repo_root` (hashes the repo root, so\n  inconsistent prefix shape produces unstable cache keys)\n- `paths_equal` (worktree-identity equality check)\n- `path_is_inside_temp_dir` (worktree temp-dir filter)\n\n`dunce::canonicalize` is identical to `std::fs::canonicalize` on POSIX\nso behaviour off Windows is unchanged.\n\nRefs #561.",
          "timestamp": "2026-05-21T23:27:03+01:00",
          "tree_id": "53cdbd59056d0392ba10a6e05e02375cbc5b2d33",
          "url": "https://github.com/fallow-rs/fallow/commit/19b761ef61cc7f7bc6f0a7c12d1915e4bf90a289"
        },
        "date": 1779402586489,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "86ce691866f97fa9852823d22f812a621a83d97a",
          "message": "fix(audit): normalise forward-slash segments + simplify temp-dir path comparison\n\nTwo distinct Windows-only path-shape bugs surface after PR #569\nfixed the docs-only fast path but exposed a regression and two\nremaining audit test failures:\n\n1. `try_get_changed_files` joined forward-slash segments from\n   `git diff --name-only` (`src/legacy.ts`) onto an absolute toplevel\n   via `PathBuf::join`. On Windows, `join` appends with the native\n   backslash separator without converting separators inside the\n   appended segment, so the resulting buffer landed as\n   `C:\\Users\\...\\Temp\\test\\src/legacy.ts` (mixed separators). File\n   discovery via walkdir produces all-backslash paths. `FxHashSet`'s\n   `contains` compares bytes, not components, so the two shapes\n   mismatched and the focused duplicates / changed-since filter\n   silently dropped every finding. This broke\n   `audit_dupes_only_materializes_groups_touching_changed_files`\n   and `audit_gate_new_only_inherits_pre_existing_duplicates_in_focused_files`.\n\n   Fix: `#[cfg(windows)]`-guarded `replace('/', \"\\\\\")` on the\n   relative segment before `toplevel.join(...)`. POSIX path is\n   unchanged (no-op on the segment).\n\n2. `path_is_inside_temp_dir`'s previous switch to `dunce::canonicalize`\n   broke `audit_worktree_helpers_filter_to_fallow_temp_prefix` because\n   the test constructs synthetic worktree paths that DO NOT exist on\n   disk. `dunce::canonicalize` (which wraps `std::fs::canonicalize`)\n   returns Err for non-existent paths, so the fallback never ran. The\n   pre-fix std path happened to match because the test pre-canonicalised\n   with the same std function.\n\n   Fix: use `dunce::simplified` (string-level prefix strip, no I/O) for\n   the primary comparison. Keep the canonicalize fallback for symlinked\n   temp dirs but route both ends through `dunce::simplified` after\n   canonicalising. This accepts both verbatim and non-verbatim input\n   shapes.\n\nRefs #561.",
          "timestamp": "2026-05-21T23:45:31+01:00",
          "tree_id": "c8ad288b7349bb43295822669dffea82de6f9602",
          "url": "https://github.com/fallow-rs/fallow/commit/86ce691866f97fa9852823d22f812a621a83d97a"
        },
        "date": 1779403749941,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "31412c065fd0f34a3fcc95553ed227e477c51673",
          "message": "feat(flags): expand SDK detection to PostHog, Vercel Flags, ConfigCat, Optimizely, Eppo\n\nBroadens the built-in feature-flag SDK detection set in fallow-extract\nfrom six providers to eleven, and teaches the recognizer to read flag\nkeys from object arguments (Vercel's documented flag({ key: \"...\" })\nshape) in addition to plain string arguments. Custom flag.sdkPatterns\nconfigurations keep their original flag(\"...\") matcher behavior so\nuser-defined recognizers never get shadowed by built-in providers.\n\nNew providers and surfaces: PostHog (useFeatureFlagEnabled,\nuseFeatureFlagPayload, isFeatureEnabled, getFeatureFlag); Vercel Flags\n(flag({ key }), evaluate(...) when imported from flags/* or\n@vercel/flags*); ConfigCat (getValueDetails for typed evaluation);\nOptimizely (decide/decideForKeys/useDecision and the typed Variable*\nfamily); Eppo (typed assignment + assignmentDetails getters across\nstring/boolean/numeric/integer/JSON).\n\nObject-argument extraction is import-scoped: Vercel's flag and\nevaluate symbols only match when the call site imports them from a\nflags package, so generic local flag or evaluate functions stay out\nof the catalog. CACHE_VERSION bumps to 92 (stacking on #549's 91) to\ninvalidate stale flag_uses entries on upgrade.\n\nUpdates the CLI flag-uses description, the MCP feature_flags tool\ntext, FlagsConfig.sdkPatterns docstring, and .claude/rules/detection.md\nto enumerate all eleven providers and the 40+ aggregate count.\n\nFixes #563.",
          "timestamp": "2026-05-21T23:52:12+01:00",
          "tree_id": "298e98bd04ff6093bff114e332e9687cd9053f78",
          "url": "https://github.com/fallow-rs/fallow/commit/31412c065fd0f34a3fcc95553ed227e477c51673"
        },
        "date": 1779404086102,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "71f0be74c121c353c567d382e1b799ac0d90c125",
          "message": "fix(dupes): normalise focused-mode path comparison against verbatim Windows prefix\n\n* fix(dupes): normalise focused-mode path comparison against verbatim Windows prefix\n\nLast 2 Windows-only audit test failures from the push-to-main CI matrix\ntrace to focused duplicate analysis silently filtering every file as\nnon-focus.\n\nRoot cause: `crates/core/src/duplicates/shingle_filter.rs` and\n`crates/core/src/duplicates/detect/mod.rs` both did\n`focus_files.contains(&file.path)` directly. On Windows, focus_files\nenters non-verbatim (`C:\\Users\\Temp\\test\\src\\foo.ts`, joined onto a\ndunce-canonicalised toplevel from `try_get_changed_files`), while\nfile.path may carry the `\\\\?\\` verbatim prefix when the caller\npre-canonicalised opts.root with `std::fs::canonicalize` (the audit\ntest fixtures do this to exercise the macOS `/var/folders/...` ->\n`/private/var/folders/...` symlink case). Byte-level FxHashSet\ncontains mismatches on the prefix component, every file is marked\nnon-focus, the dupes detector materialises zero clone groups, and\nthe audit test panics on `dupes_report.clone_groups` empty.\n\nFix: normalise the focus set's entries through `dunce::simplified`\nonce at function entry, then look up via\n`normalized_focus.contains(dunce::simplified(&file.path))`.\n`dunce::simplified` is a no-op string-level operation on POSIX and\non non-verbatim Windows paths.\n\nTests that should pass after this lands:\n- audit_dupes_only_materializes_groups_touching_changed_files\n- audit_gate_new_only_inherits_pre_existing_duplicates_in_focused_files\n\nRefs #561.\n\n* chore(fmt): apply rustfmt reflow to path_is_focus closure",
          "timestamp": "2026-05-22T00:07:48+01:00",
          "tree_id": "01ec67063842e2086ddca9b6e7a12b17218e393f",
          "url": "https://github.com/fallow-rs/fallow/commit/71f0be74c121c353c567d382e1b799ac0d90c125"
        },
        "date": 1779405008346,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "c0b8ebb699a1e25657c537056cccde0e60323012",
          "message": "fix(audit): normalise verbatim prefix in changed-files filter lookups (#573)\n\nPre-normalise the changed-files set via dunce::simplified once at function entry, then normalise the lookup side per comparison through a local contains_normalised helper. POSIX is a no-op.\n\nDiagnoses the remaining 2 Windows audit failures from the #561 push-to-main rollup: filter_results_by_changed_files and filter_duplication_by_changed_files in fallow-core did byte-level FxHashSet::contains against analysis-pipeline paths. After #566, try_get_changed_files joins git-emitted segments onto the dunce::canonicalize'd toplevel (non-verbatim); clone-instance and finding paths inherit the verbatim shape of opts.root because test fixtures pre-canonicalise with std::fs::canonicalize. The mismatch dropped every clone group from the safety-net filter_by_changed_files pass and every file-level finding from the dead-code filter.\n\nAdds two cfg(windows) regression tests pinning a verbatim instance / finding path against a non-verbatim changed-files entry.\n\nFixes #561",
          "timestamp": "2026-05-22T06:14:44+01:00",
          "tree_id": "6ac038d2d3fcde391eb87b0ed27c8621f56ad714",
          "url": "https://github.com/fallow-rs/fallow/commit/c0b8ebb699a1e25657c537056cccde0e60323012"
        },
        "date": 1779427022116,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "60b197c329c3976c3ffd6bcdfd59d8228f790545",
          "message": "fix(list): emit forward-slashed paths in --files and --entry-points JSON (#575)\n\nMirror the workspaces / nudge / rollup path-normalisation convention. fallow list --files --format json and --entry-points --format json projected per-path JSON without the .replace('\\\\', \"/\") that the workspaces array already applies, so consumers received backslashed paths on Windows. JSON output must be stable cross-platform for CI glob filters, MCP agents, and downstream pipelines.\n\nExisting list_files_includes_plugin_scoped_hidden_dirs_for_react_router and ..._for_remix tests already assert the forward-slash shape; they were silently passing on POSIX and failing on the push-to-main Windows matrix, so they are exactly the regression coverage.\n\nRefs #561",
          "timestamp": "2026-05-22T07:21:41+01:00",
          "tree_id": "6c086fec5003edd68a0e9ccc0eaa8ea6d2095fbf",
          "url": "https://github.com/fallow-rs/fallow/commit/60b197c329c3976c3ffd6bcdfd59d8228f790545"
        },
        "date": 1779431040883,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "b200f528d8be062ab3b1f057bd83a2b48ea40453",
          "message": "refactor(core): single persistent progress spinner\n\nReplace the per-stage MultiProgress + ephemeral ProgressBar pattern in\nAnalysisProgress with a single ProgressBar constructed at new() and\nupdated in place via set_stage(). Each pipeline stage previously created\nand finished its own bar, producing visible flicker between stages and\ngaps for stages without an explicit spinner call.\n\nThe new template \"{spinner:.cyan} fallow: {msg} ({elapsed})\" adds the\n\"fallow:\" prefix and an elapsed timer that runs across the whole\npipeline at 30 Hz via stderr_with_hz(30). Twelve call sites in\nanalyze_with_parse_result + analyze_full migrate from\nlet pb = progress.stage_spinner(msg); ...; pb.finish_and_clear();\nto a single progress.set_stage(msg); line. Stage labels are lowercased\nto fit the template. TTY suppression still short-circuits via the\nOption<ProgressBar>::None path; non-tty invocations remain\nallocation-free.\n\nCloses #560.",
          "timestamp": "2026-05-22T07:41:53+01:00",
          "tree_id": "19f91889fab9aac61c3dc430cb17bc78a9b351a8",
          "url": "https://github.com/fallow-rs/fallow/commit/b200f528d8be062ab3b1f057bd83a2b48ea40453"
        },
        "date": 1779432385123,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "7cd0a8655e814d0e0f82c54443d6b9af037a3577",
          "message": "chore(types): align schemars optional fields with serde(default) + add drift gate\n\nThe wire shape and the JSON schema disagreed for fields marked\n`#[serde(skip_serializing_if = \"Vec::is_empty\"|\"Option::is_none\")]`\nwithout a matching `serde(default)`: producers stripped the field\nfrom JSON output, but the schema kept it in `required[]`. Consumers\nvalidating against the published schema would reject otherwise-valid\nfallow output.\n\nAdds `serde(default)` to 33 such fields across the health_types\nmodules, output_envelope, config boundaries, types results, and the\n`SuppressionOrigin::Comment.issue_kind` enum variant. Regenerates\n`docs/output-schema.json` plus the VS Code and npm TS contracts so\n`FeatureFlag.guarded_dead_exports` and `TargetEvidence.{unused_exports,\ncomplex_functions, cycle_path}` are now properly optional on the wire.\n\nAdds a syn-based drift gate in `crates/cli/tests/schema_tests.rs` that\nwalks every `JsonSchema`-deriving struct AND enum struct-variant, flags\nany `Vec<T>`/`Option<T>` field that uses `skip_serializing_if` without\n`default`, and prints the canonical fix-hint inline. New dev-deps\n`proc-macro2` (with `span-locations`) and `syn` (full) drive the AST\nwalk. Three unit tests pin the gate's behavior on synthetic offenders,\nincluding the enum-variant branch.",
          "timestamp": "2026-05-22T07:47:16+01:00",
          "tree_id": "ebfe0bfbf6877403572ee285b3764d22ef95c7dd",
          "url": "https://github.com/fallow-rs/fallow/commit/7cd0a8655e814d0e0f82c54443d6b9af037a3577"
        },
        "date": 1779432604834,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.8,
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
          "id": "ab27dc47ed26981eeacabf2540c688ac8f948d77",
          "message": "fix(config): drop is_absolute gate from existing-entry dedup (#576)\n\nrecord_existing_file in crates/config/src/config_writer.rs skipped the dir-relative dedup key whenever the existing entry was not Path::is_absolute. On Windows that gate rejects POSIX-rooted paths like /project/src/a.ts because Windows requires a drive letter or UNC prefix for is_absolute, so a Linux-CI-written config silently lost its dedup signal on Windows and the writer appended a relative duplicate of every entry on every run.\n\nstrip_prefix already returns Err for entries that do not start with config_dir, so the absoluteness pre-gate is redundant. Drop it.\n\nSame class of fix as PR #574 (validate_coverage_root_absolute). Existing dedupes_existing_absolute_paths_against_relative_emissions tests are the regression coverage.\n\nRefs #561",
          "timestamp": "2026-05-22T07:53:04+01:00",
          "tree_id": "946d981ac402c01c1711f9297919d09691c0e5b1",
          "url": "https://github.com/fallow-rs/fallow/commit/ab27dc47ed26981eeacabf2540c688ac8f948d77"
        },
        "date": 1779432964742,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "b726cbe0d2e3edf4303bc71c4f4ff7d2d64eb5e4",
          "message": "fix(cli): type combined explain metadata",
          "timestamp": "2026-05-22T08:57:51+02:00",
          "tree_id": "ee305331a668cf42d9d8647374b7367ec9b0c670",
          "url": "https://github.com/fallow-rs/fallow/commit/b726cbe0d2e3edf4303bc71c4f4ff7d2d64eb5e4"
        },
        "date": 1779433262324,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "8c74aefb490f2d8eda3f972f59d3eea93c7cfc04",
          "message": "test(core): canonicalise init_repo via dunce so test fixtures match production toplevel (#580)\n\ninit_repo and resolve_git_toplevel_returns_canonical_path called std::fs::canonicalize, which on Windows returns the \\\\?\\ verbatim form. Production resolve_git_toplevel was swapped to dunce::canonicalize in PR #566 so it strips that prefix. The test-side verbatim path then diverged from the production-side non-verbatim path and every changed.contains(&expected) assertion silently failed. Swap both test-side call sites to dunce::canonicalize; POSIX behaviour is identical.\n\nAlso marks proc-macro2 as cargo-shear-ignored in crates/cli/Cargo.toml. The dep was added in 7cd0a865 as a dev-dependency without an explicit import, but its span-locations feature is what makes syn-returned .span().start().line report real source positions inside the schema-drift gate. Removing the dep would silently collapse the gate; ignore it via [package.metadata.cargo-shear].ignored instead, matching the established miette precedent.\n\nCloses #561",
          "timestamp": "2026-05-22T08:22:08+01:00",
          "tree_id": "3acf5705597fab9507fa731599a02078c78d3681",
          "url": "https://github.com/fallow-rs/fallow/commit/8c74aefb490f2d8eda3f972f59d3eea93c7cfc04"
        },
        "date": 1779434646779,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "fa3bd8a38156acd544c5a50475e715fa3fe8d79c",
          "message": "fix(cli): route fallow list paths through format_display_path on all four emission sites\n\n`fallow list --files` and `fallow list --entry-points` previously\nemitted forward-slashed paths via `--format json` but raw\n`relative.display()` via plain-text stdout. On Windows the JSON\nsurface was POSIX-shaped while the human surface leaked backslashes,\ninconsistent for CI consumers that xargs/grep the plain output.\n\nRoute all four list emission sites (JSON files + entry_points,\nplain-text files + entry_points) through the canonical\n`report::format_display_path` helper so Windows backslashes never\nreach stdout regardless of format.\n\nTighten the two existing list_json regression tests with\n`assert!(!path.contains('\\\\'))` and replace the lenient\n`starts_with(\\\"src/\\\") || starts_with(\\\"src\\\\\\\\\\\")` clause with strict\n`starts_with(\\\"src/\\\")` so a backslashed path now fails CI on the\nWindows leg pre-fix and passes post-fix.\n\nRefs #561",
          "timestamp": "2026-05-22T08:40:03+01:00",
          "tree_id": "f69d8cc949cf1d758a29db68066ef5a944640b70",
          "url": "https://github.com/fallow-rs/fallow/commit/fa3bd8a38156acd544c5a50475e715fa3fe8d79c"
        },
        "date": 1779435904726,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "239f75a6d9704fadfe1db30ab14665a355ee673a",
          "message": "fix(core): normalise path separators in trace::path_matches (#584)\n\npath_matches did byte-level string comparison between the filesystem-shaped module_path (backslash-separated on Windows) and the forward-slash-shaped user_path (the convention every cross-platform consumer uses, including the MCP server's trace_export / trace_file tools which pass src/utils.ts literally). On Windows the four comparisons all silently missed even when the file was in the graph, so fallow dead-code --trace src/utils.ts:foo returned \"no module found\" instead of the trace payload.\n\nNormalise both sides to forward slashes before each comparison; POSIX is a no-op. Two regression tests pin the fix using PathBuf::from(r\"D:\\\\a\\\\...\") raw-string Windows-shaped literals that work cross-platform.\n\nFixes the MCP e2e e2e_trace_export_returns_json and e2e_trace_file_returns_json failures.\n\nRefs #561",
          "timestamp": "2026-05-22T09:18:24+01:00",
          "tree_id": "cf4323d1cf6175e7c975e5e1f150d4aa803af4b2",
          "url": "https://github.com/fallow-rs/fallow/commit/239f75a6d9704fadfe1db30ab14665a355ee673a"
        },
        "date": 1779438045909,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "d177bab8546290ca50321e3a8ab16d02ca74d456",
          "message": "fix(core): serialise trace output PathBufs with serde_path forward-slash (#585)\n\nAttach #[serde(serialize_with = \"serde_path::serialize\")] to every single-PathBuf field and serialize_vec to every Vec<PathBuf> field in the trace output structs (ExportTrace, ExportReference, ReExportChain, FileTrace, TracedReExport, DependencyTrace, CloneTrace). After PR #584 fixed path_matches so the lookup succeeded on Windows, the output still serialised backslash-separated paths via serde's default, breaking JSON consumers (MCP agents, CI glob filters, downstream pipelines) that expect forward-slash. CloneInstance.file already used this convention; trace structs now match.\n\nTwo cross-platform regression tests build a backslash-shaped PathBuf literal and assert the JSON contains the forward-slash form for every newly-decorated field.\n\nFixes the remaining MCP e2e e2e_trace_export_returns_json and e2e_trace_file_returns_json failures.\n\nRefs #561",
          "timestamp": "2026-05-22T09:43:06+01:00",
          "tree_id": "fc7d1cc4e6428d6546c061d96045d4a1f4241da4",
          "url": "https://github.com/fallow-rs/fallow/commit/d177bab8546290ca50321e3a8ab16d02ca74d456"
        },
        "date": 1779439527706,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "949013ad769c933b751d05d7726f68069b621be0",
          "message": "fix(cli): silence Windows-only clippy lints that Rust 1.95 surfaced (#587)\n\ncargo clippy --workspace --all-targets -- -D warnings on the Windows runner failed with 6 errors that POSIX clippy never sees because the offending code is #[cfg(windows)]-gated:\n\naudit.rs:1644 - match_same_arms: named ERROR_ACCESS_DENIED arm documents the cross-session protected-process case; add #[expect(clippy::match_same_arms)].\nsignal/registry.rs:108,140 - unsafe_code on Win32 FFI blocks (OpenProcess/TerminateProcess/WaitForSingleObject/CloseHandle); add #[expect(unsafe_code)] to each enclosing function, mirroring the existing pattern around mod windows_process in audit.rs.\nsignal/windows.rs:38 - unsafe_code on the unsafe extern \"system\" fn handler PHANDLER_ROUTINE callback declaration; add #[expect(unsafe_code)] and rewrite the leading /// SAFETY: doc as a # Safety heading so unnecessary_safety_comment also clears.\nsignal/windows.rs:53 - unsafe_code on the SetConsoleCtrlHandler FFI call inside install().\n\nAll annotations use #[expect] (preferred over #[allow] per project convention) because the lint reliably fires whenever the gated code is compiled. POSIX clippy keeps green because the items are excluded.\n\nRefs #561",
          "timestamp": "2026-05-22T12:35:32+01:00",
          "tree_id": "fbd90a186af489a21671e25b341ca4c3b343c839",
          "url": "https://github.com/fallow-rs/fallow/commit/949013ad769c933b751d05d7726f68069b621be0"
        },
        "date": 1779449897622,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "0b4dd4b5ab71f033ae66eabff22167e61dd5b670",
          "message": "fix(cli): render --score health line in combined human output\n\n`fallow --score` (bare combined mode) and `fallow --trend` already\nserialized the health score / trend to JSON / SARIF / CodeClimate, but\n`combined::print_orientation_header` never called the existing\nrender_health_score / render_health_trend helpers in\nreport::human::health, so the headline a user came to read was missing\nfrom terminal output. `fallow health --score` (the subcommand) already\nrendered the score via its inline path, so the contract documented at\nfallow-docs `cli/health.mdx` was only half-true.\n\nPromote both helpers from private fn to pub fn, re-export them from\nreport::mod, and call them at the top of print_orientation_header.\nSuppress the leading blank in the vital signs block when the score\nblock already wrote its trailing blank.\n\nA naive add-call-site fix renders the score twice because the\ndownstream Complexity section's print_health_human also invokes\nrender_health_score via build_health_human_lines_with_explain. Add\nskip_score_and_trend: bool to ReportContext, thread it through\nprint_health_result, print_health_human, and\nbuild_health_human_lines_with_explain. Combined-mode caller sets\ntrue (orientation header is the single render site); standalone\n`fallow health` and `fallow audit` keep false so their renderers stay\ninline. check.rs, dupes.rs, watch.rs ctx literals updated with false\n(no orientation header upstream).\n\nRegression tests assert EXACTLY ONE \"Health score:\" line for both\ncombined --score and standalone health --score (the previous\n.contains() shape passed even with a duplicate). A control test pins\nthat bare `fallow` without --score does not render the line. A\nstandalone test covers `fallow health --min-score 100` to confirm the\nCI gate still fires when the score is below threshold.\n\nJSON / SARIF / CodeClimate / markdown output and the --min-score\nexit-code gate are unchanged.\n\nFixes #557.",
          "timestamp": "2026-05-22T12:38:52+01:00",
          "tree_id": "1ea82333bbf6aed037c0def7591bb7e19cd32b41",
          "url": "https://github.com/fallow-rs/fallow/commit/0b4dd4b5ab71f033ae66eabff22167e61dd5b670"
        },
        "date": 1779450333455,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "23c7403f0e1ccd0e271d1d9448f739b5452acb81",
          "message": "fix(report): defer CodeClimate severity mapping + centralise next to SARIF\n\nThe three generic-iterator helpers in `crates/cli/src/report/codeclimate.rs`\n(`push_dep_cc_issues`, `push_unused_export_issues`, `push_unused_member_issues`)\neagerly called `severity_to_codeclimate(severity)` BEFORE iterating their\nfindings, so any caller passing `severity = Off` and an empty (or\nproduction-filtered) findings vec hit the `Off => unreachable!()` arm and\nexited 101 with `internal error: entered unreachable code`. Reproduced via\n`fallow check --format codeclimate --root benchmarks/fixtures/real-world/zod\n--production`. The slice-based helpers were already safe via their existing\n`is_empty()` early-return guards. The fix moves the severity mapping inside\neach generic helper's loop body so the call only fires when there is a\nfinding to emit; behaviour for non-empty findings stays byte-identical.\n\nIn the same pass, the inline `severity_to_codeclimate` body is now a one-line\ndelegate to a new `crates/cli/src/report/ci/severity.rs::codeclimate_severity`\nhelper, alongside the pre-existing `sarif_level` and `review_label` mappers.\nAll three CI-format severity vocabularies now live in one module, and adding\na future `Severity` variant compile-fails at every mapper simultaneously\nrather than silently fallthrough on the CodeClimate side. The 14+ call sites\nof `severity_to_codeclimate` are unchanged (mirrors the\n`severity_to_sarif_level` wrapper pattern in `sarif.rs`).\n\nNew regression test\n`build_codeclimate_with_off_severity_and_empty_findings_does_not_panic` locks\nin the production-mode safety property. A new\n`codeclimate_severity_off_is_unreachable` `#[should_panic]` test in\n`ci/severity.rs::tests` mirrors the SARIF mapper's coverage. The pre-existing\nstale `severity_off_maps_to_minor` test name (which actually asserts the\n`unreachable!()` panic) was renamed opportunistically to\n`severity_off_is_unreachable`.\n\nFixes #452.",
          "timestamp": "2026-05-22T12:47:43+01:00",
          "tree_id": "9ead4a026629d06b5e8fea35149bf1a9a01675a9",
          "url": "https://github.com/fallow-rs/fallow/commit/23c7403f0e1ccd0e271d1d9448f739b5452acb81"
        },
        "date": 1779450670001,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "e5e082abbfa94ce234d6a33036b38975e30fef9a",
          "message": "chore: release v2.78.0",
          "timestamp": "2026-05-22T14:10:23+02:00",
          "tree_id": "7476225041fb4838486d000a08f8ab0de925903f",
          "url": "https://github.com/fallow-rs/fallow/commit/e5e082abbfa94ce234d6a33036b38975e30fef9a"
        },
        "date": 1779451981582,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "92e2533d695ad798636f8e5e072c87085928c647",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.78.0",
          "timestamp": "2026-05-22T14:44:02+02:00",
          "tree_id": "407ba1d548c54e39b5efb1729371b2af2aae0974",
          "url": "https://github.com/fallow-rs/fallow/commit/92e2533d695ad798636f8e5e072c87085928c647"
        },
        "date": 1779453989902,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "b467e04c1377424747107ce1554a82bf64687a22",
          "message": "fix(ci): silence two more Windows-only clippy regressions on `main`\n\nSibling to PR #587 and the v2.78.0 release commit's mcp tests fix. Rust 1.95's\nstrict `-D warnings` surfaced two more Windows-only paths on the post-release\nci.yml run for main:\n\n- `crates/cli/src/ci_template.rs::set_executable` Windows stub returns\n  `std::io::Result<()>` to match the Unix signature so the unconditional\n  caller can `?`-propagate without `#[cfg]` branching. The Windows body is\n  trivially `Ok(())`, so clippy's `unnecessary_wraps` fires. Suppress via\n  `#[expect(clippy::unnecessary_wraps, reason = \"...\")]` on the Windows\n  stub; matching the Unix signature is load-bearing for the caller.\n\n- `crates/cli/src/signal/scoped_child.rs::assert_deregistered` test helper\n  is only called from two `#[cfg(unix)]` tests in the same module. Gating\n  the helper itself with `#[cfg(unix)]` aligns it with its callers and\n  silences the `dead-code` lint on Windows.\n\nBoth are post-release CI fixes; v2.78.0 binaries are unaffected. Refs #447.",
          "timestamp": "2026-05-22T16:15:53+02:00",
          "tree_id": "05dfc715ccb9403790a2796c1247b4c3dd63fee6",
          "url": "https://github.com/fallow-rs/fallow/commit/b467e04c1377424747107ce1554a82bf64687a22"
        },
        "date": 1779459534961,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "721f47b3d036b2582f6acd68b32693713dc71f0c",
          "message": "fix(cli): silence Windows-only dead_code on ScopedChild::id (#595)\n\nAfter PR #587 and b467e04c closed the bulk of the cfg(windows) clippy hits, one Rust 1.95 lint remained that POSIX clippy never sees: ScopedChild::id is consumed only by the cfg(unix) signal_test_helper in main.rs; on Windows the helper is excluded so the method has no caller. Tag with #[cfg_attr(not(unix), expect(dead_code))] to preserve the symmetric public surface for embedders rather than gating the method itself with #[cfg(unix)].\n\nPOSIX clippy + workspace tests stay green.\n\nRefs #561",
          "timestamp": "2026-05-22T17:47:50+01:00",
          "tree_id": "991866f70fad5320edde9b52b7ead5ebbaeb88f4",
          "url": "https://github.com/fallow-rs/fallow/commit/721f47b3d036b2582f6acd68b32693713dc71f0c"
        },
        "date": 1779468641323,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "7f89de4fc78789364b4d35df1a7e647ed783e316",
          "message": "chore: release v2.78.1",
          "timestamp": "2026-05-22T19:06:03+02:00",
          "tree_id": "35d64bc4b79b7ac57ab36da1c73cfc80ecd3f260",
          "url": "https://github.com/fallow-rs/fallow/commit/7f89de4fc78789364b4d35df1a7e647ed783e316"
        },
        "date": 1779469735280,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "8604f89c14304bd43d3394782b736ffc983bce9a",
          "message": "fix(cli): gate scoped_child::tests module behind cfg(unix) (#599)\n\nAfter PR #595 and the v2.78.1 follow-up release made assert_deregistered cfg(unix), every test inside scoped_child::tests is cfg(unix) (they all exec /bin/sh / true / echo). On Windows the module reduces to just use super::*;, which Rust 1.95's -D unused-imports flags.\n\nGate the module itself with #[cfg(all(test, unix))] so the whole suite (and its imports) only compile when the bodies have a chance to run. No Windows test loss because there were no Windows tests in this module to begin with.\n\nRefs #561",
          "timestamp": "2026-05-22T18:40:15+01:00",
          "tree_id": "498d8a4c02a390681e72aafa4e36372e6f4547e1",
          "url": "https://github.com/fallow-rs/fallow/commit/8604f89c14304bd43d3394782b736ffc983bce9a"
        },
        "date": 1779471901096,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "99c5b45ee6cc068b55a0e064d3cc275a4ed7cd59",
          "message": "docs(changelog): note Wrangler / Content Collections / module.register fixes (#596)\n\nUser-facing notes for the three convention-driven false-positive fixes\nthat landed via PR #596 (M-Hassan-Raza, rework). Calls out the warm-cache\nre-extract on first run after upgrading.",
          "timestamp": "2026-05-22T20:54:48+02:00",
          "tree_id": "951dda39288ae1300680d30d54a45d20e95db4e0",
          "url": "https://github.com/fallow-rs/fallow/commit/99c5b45ee6cc068b55a0e064d3cc275a4ed7cd59"
        },
        "date": 1779476335155,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "5a4bcc0b8c0498059a19894948d554e72716f746",
          "message": "docs: reposition fallow as codebase intelligence",
          "timestamp": "2026-05-22T21:34:50+02:00",
          "tree_id": "b890279d99ac3adf9069bede3ddb65d93175a2ae",
          "url": "https://github.com/fallow-rs/fallow/commit/5a4bcc0b8c0498059a19894948d554e72716f746"
        },
        "date": 1779478646159,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "07b784a4b81c774ed3367b04678a2fa9c907ee05",
          "message": "fix(unused-class-members): credit Playwright helper fixtures\n\nPlaywright users can wrap base.extend in exported helper functions that do local setup before returning the extended test. The extractor previously only recognized helper bodies whose sole statement was return base.extend, so nested fixture page-object methods could be reported as unused.\n\nThis updates helper-function extraction to inspect the final returned call while preserving the existing direct-return and alias-chain behavior. The extraction cache is bumped because cached modules from older builds can miss the fixture definition sentinels.\n\nRegression coverage adds an extractor unit test plus an integration fixture that checks both the local-setup helper path and a direct-return control path, while still reporting genuinely unused methods.\n\nFixes #586.",
          "timestamp": "2026-05-22T20:46:21+01:00",
          "tree_id": "91b82ce3b832350e276d7a95c4ea2e3fd676077e",
          "url": "https://github.com/fallow-rs/fallow/commit/07b784a4b81c774ed3367b04678a2fa9c907ee05"
        },
        "date": 1779479346986,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "325a409eef77c7686d2405500073fc662848da44",
          "message": "docs(readme): improve CI integration docs\n\nExpand the README CI section around the current GitHub Action and GitLab template capabilities.\n\nDocument audit as the PR gate, richer Action modes, GitLab review envelope v2 behavior, Code Quality output, diff filtering, monorepo scoping, and runtime-backed health examples.",
          "timestamp": "2026-05-22T21:50:23+02:00",
          "tree_id": "3221affaf0e1d4267bc9d0167aafaf93426b30d7",
          "url": "https://github.com/fallow-rs/fallow/commit/325a409eef77c7686d2405500073fc662848da44"
        },
        "date": 1779479577639,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "e63fbe4d1783276468f87bd81ca022fe8d7a5d48",
          "message": "fix(cli): polish human summary output\n\nCombined human summary output now lets the combined renderer own the section headings while the per-analysis summary renderers suppress their duplicate titles. The report context carries that choice through dead-code, duplication, and health output without changing JSON or CI formats.\n\nExplain accepts issue labels split across words, so commands like `fallow explain unused files` resolve to the same rule metadata as the hyphenated form. Config-loaded notices are deduped by canonical config path so combined runs do not repeat the same line while separate configs still report independently.",
          "timestamp": "2026-05-22T21:05:15+01:00",
          "tree_id": "dcca61d3d8ed640dbc187769c5032fa093b32c53",
          "url": "https://github.com/fallow-rs/fallow/commit/e63fbe4d1783276468f87bd81ca022fe8d7a5d48"
        },
        "date": 1779480458964,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "4e7eecf09fdb817b09e0d4654cf6f1f962f4d8d4",
          "message": "fix(tanstack): suppress generated route tree imports\n\nTanStack Router and Start projects commonly import the generated\nroute tree as ./routeTree.gen before src/routeTree.gen.ts exists in a\nclean checkout. That framework artifact was reported as an unresolved\nimport even though TanStack tooling creates it during codegen.\n\nRegister /routeTree.gen as a TanStack Router generated import suffix\nthrough the existing plugin hook. The suppression stays plugin-gated,\nso non-TanStack projects still report the same missing import.\n\nAdd a regression fixture with an active TanStack Router project, no\ngenerated route tree file, and a separate missing import control. The\ntest locks in both the false-positive fix and the ordinary unresolved\nimport behavior.\n\nFixes #646.",
          "timestamp": "2026-05-22T21:17:01+01:00",
          "tree_id": "2063a9403501a471813b45358e0f121025b00554",
          "url": "https://github.com/fallow-rs/fallow/commit/4e7eecf09fdb817b09e0d4654cf6f1f962f4d8d4"
        },
        "date": 1779481195552,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
            "unit": "%"
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
        "date": 1779483236870,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "9a142be9494a3779f06db016f54080a84010c652",
          "message": "fix(jsx): ignore generic JSX resource attributes as side-effect imports\n\nBefore, lowercase intrinsic `<script src=\"...\">` and\n`<link rel=\"stylesheet|modulepreload\" href=\"...\">` literals inside JSX\nand TSX files emitted synthetic `SideEffect` imports via the AST\nvisitor, so SSR-style serializer tests (notably Hono's JSX layout\ntests) produced large false `unresolved-imports` clusters for runtime\nHTML metadata that is not bundler-resolved.\n\nAfter, the JSX visitor path that recorded those attributes is removed.\nHTML files keep their dedicated asset scanner, and bare `html` tagged\ntemplates in JS/TS continue to extract asset references via the\nregex-based HTML scanner. The web-root-relative resolver still applies\nto JS/TS-family files for the tagged-template case. Framework-specific\nJSX asset semantics can be reintroduced later as constrained opt-in\nlogic rather than broad attribute extraction.\n\nExtraction `CACHE_VERSION` is bumped to 96 so warm caches drop the\nstale JSX resource edges on first run after upgrade. Tests are\nrestructured: the unit suite in `tests/js_ts/jsx_assets.rs` asserts the\nnew no-emission behavior, and the integration test renames the fixture\nfrom a static-folder layout to a JSDoc-consumer shape that exercises\nthe remaining JSDoc and `html` tagged-template paths.\n\nFixes #640.",
          "timestamp": "2026-05-22T21:58:29+01:00",
          "tree_id": "cc5eb1a3ab7a022a28240272893cd3489117b688",
          "url": "https://github.com/fallow-rs/fallow/commit/9a142be9494a3779f06db016f54080a84010c652"
        },
        "date": 1779483731218,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 90.9,
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
          "id": "62bed8d6298ba5e83a178f4fcbee05ee7ae548d1",
          "message": "fix(unused-class-members): preserve public package APIs\n\nTreat class members on classes exported from non-private package entry points as part of the public package API, including transitive star barrels and source-first package entry fallbacks. This keeps library builder APIs from being reported as removable internals while still reporting genuinely unused internal members and enum members.\n\nResolve package entry paths that point at missing root build artifacts back to source indexes, and recognize exportless source subpath indexes when no exports map exists. Package manifests also ignore non-boolean private values instead of aborting analysis on permissive real-world package.json data.\n\nFixes #643.",
          "timestamp": "2026-05-22T22:04:17+01:00",
          "tree_id": "da1796a0cbdf1cd2c9b6b88b6351b1ad7f71817a",
          "url": "https://github.com/fallow-rs/fallow/commit/62bed8d6298ba5e83a178f4fcbee05ee7ae548d1"
        },
        "date": 1779484017444,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "d7f0b1bab714f1781a84f0455d5e5a242ac177cb",
          "message": "docs(skill): bring remaining vendored plugin counts to 97\n\nBumps the four other 94/95-counted lines in npm/fallow/skills/fallow/SKILL.md to 97 to match the bump landed in #369. Mirrors canonical fallow-skills b371366 + docs c8591e3.",
          "timestamp": "2026-05-22T22:11:24+01:00",
          "tree_id": "b6ccc9e8d759185c125b99d21158cd209ab0651f",
          "url": "https://github.com/fallow-rs/fallow/commit/d7f0b1bab714f1781a84f0455d5e5a242ac177cb"
        },
        "date": 1779484433855,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "6d5b84cd74fbb99e839d1b75ff12933eb26c84b6",
          "message": "chore: release v2.79.0",
          "timestamp": "2026-05-22T23:29:18+02:00",
          "tree_id": "d476e7566053f30eb08ef07ff88ca5fa1f716bff",
          "url": "https://github.com/fallow-rs/fallow/commit/6d5b84cd74fbb99e839d1b75ff12933eb26c84b6"
        },
        "date": 1779485571209,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "a23dba54581ec3f59a19ef5e13aaf2713b0896c7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.79.0",
          "timestamp": "2026-05-22T23:59:39+02:00",
          "tree_id": "eb1bb2f69d5d896e3508e09d2dec9c819fcd6fa0",
          "url": "https://github.com/fallow-rs/fallow/commit/a23dba54581ec3f59a19ef5e13aaf2713b0896c7"
        },
        "date": 1779487335946,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "4a4873a732459e727c9cba9b37152be367648227",
          "message": "fix(graph): resolve prebuild package maps to source\n\nResolve package.json imports and workspace/root package exports that point at missing prebuild output back to tracked source files. The resolver now loads root and workspace package manifests, evaluates package maps in manifest order, and keeps blocked or unmatched subpaths unresolved instead of turning them into dependency noise.\n\nPreserve dependency accounting by carrying package usage metadata alongside internal file resolution, so self/workspace package imports can still feed unused and unlisted dependency analysis while participating in the module graph.\n\nAdds regression fixtures for Nitro-style package imports and Redux Toolkit-style workspace exports, including blocked, missing, unexported, declared, and undeclared workspace import cases.\n\nFixes #641.",
          "timestamp": "2026-05-23T07:40:46+01:00",
          "tree_id": "91e435d207290ee63851ccaa878a435209f235e9",
          "url": "https://github.com/fallow-rs/fallow/commit/4a4873a732459e727c9cba9b37152be367648227"
        },
        "date": 1779518600628,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "2f8fc779cffcde8caf01b419a60e1017307a5a49",
          "message": "fix(mdx): ignore imports inside documentation code fences\n\nMDX extraction previously treated import and export examples inside fenced Markdown blocks as executable top-level MDX statements. Documentation snippets that use virtual file boundaries could therefore create graph edges and false unresolved-import findings.\n\nTrack CommonMark-style backtick and tilde fences before the existing MDX statement extractor runs. Fenced blocks are skipped entirely, while real top-level MDX imports and exports continue through the same parser path.\n\nAdd unit, parser, and integration coverage for fenced examples, including a fixture that preserves a real top-level missing import as a control. Bump the extraction cache version so warm MDX cache entries are re-extracted on upgrade.\n\nFixes #639.",
          "timestamp": "2026-05-23T07:47:09+01:00",
          "tree_id": "a5459ca8fa383ccdc1ae4582d7cbe993efb94235",
          "url": "https://github.com/fallow-rs/fallow/commit/2f8fc779cffcde8caf01b419a60e1017307a5a49"
        },
        "date": 1779519159972,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "a9cefb483b39a3fe21e171d56fa7def1dc4bace4",
          "message": "fix(core): treat bare bun as builtin\n\nCloses #642.",
          "timestamp": "2026-05-23T08:04:32+01:00",
          "tree_id": "7ffcc0816f0bda828e6478c5186a364c86c15a22",
          "url": "https://github.com/fallow-rs/fallow/commit/a9cefb483b39a3fe21e171d56fa7def1dc4bace4"
        },
        "date": 1779520016280,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "f92318a75a2aee0732382d8069d8366931f01572",
          "message": "fix(tanstack): suppress Start virtual modules\n\nTanStack Start imports manifest and injected-head script modules through framework-provided virtual specifiers with a :v suffix. Those specifiers are not npm packages, but the TanStack plugin did not register them as virtual modules, so dead-code analysis reported them as unlisted dependencies.\n\nRegister the colon-suffixed TanStack Start virtual module prefixes through the existing plugin virtual-prefix hook. Add plugin-gated positive and negative coverage, including unresolved-import suppression and end-to-end analysis fixtures for static and dynamic imports.\n\nFixes #636.",
          "timestamp": "2026-05-23T08:33:06+01:00",
          "tree_id": "f8c31997a7b57f6ab66e7a20f46bd0f0e039a531",
          "url": "https://github.com/fallow-rs/fallow/commit/f92318a75a2aee0732382d8069d8366931f01572"
        },
        "date": 1779521768208,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "a13ec35cec22c6edab315ed472cd634d218f6451",
          "message": "fix(extract): credit Node script runner entrypoints\n\nResolve extensionless package-script paths through directory index files after exact and extension fallback.\n\nCredit statically resolvable local child_process.fork runner targets from proven Node child_process imports and requires, including path.resolve(fileURLToPath(import.meta.url), ...).\n\nFixes #638.",
          "timestamp": "2026-05-23T15:25:08+01:00",
          "tree_id": "cc2a64b75e2862a036c38750f4687a0c2e105a93",
          "url": "https://github.com/fallow-rs/fallow/commit/a13ec35cec22c6edab315ed472cd634d218f6451"
        },
        "date": 1779546612579,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "ef3298ddc9e17197bf75522d55e90454b35bd006",
          "message": "feat: add Fumadocs plugin\n\nfeat: add Fumadocs plugin\n\nAdd a built-in plugin that recognizes Fumadocs source config files, generated .source modules, configured MDX content roots, and fumadocs-mdx virtual imports. This replaces broad dynamicallyLoaded workarounds with framework-scoped detection.\n\nThe plugin parses literal collection dir values from defineCollections, defineDocs, and direct defineConfig collections entries while avoiding unrelated nested option dir fields. Regression coverage exercises a workspace-shaped docs package and the public everr-labs/everr smoke confirms the old-vs-new docs-content delta.\n\nHarden graph validation exposed by CI: re-export cycle regression tests now assert structured graph payloads instead of captured tracing output, and the package-map lookup skips the canonicalize fallback under Miri because isolated Miri does not support realpath.\n\nFixes #633.",
          "timestamp": "2026-05-23T15:34:07+01:00",
          "tree_id": "79279bff93588e6c08cade4b8d79874d3da115be",
          "url": "https://github.com/fallow-rs/fallow/commit/ef3298ddc9e17197bf75522d55e90454b35bd006"
        },
        "date": 1779546968568,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "ac81b9247538cf526db76f97dd2bf18a2f4dceb3",
          "message": "fix(core): honor Wrangler config precedence\n\nMatch Wrangler's same-directory config selection before extracting worker main entries. Only the highest-precedence sibling config contributes main and environment main entry patterns, while all wrangler config files remain credited as used.\n\nPin Wrangler's current source order, json, jsonc, toml, with pairwise tests, a no-fallback presence test, non-sibling isolation, and an end-to-end unused-file regression for stale migration configs.\n\nFixes #630.",
          "timestamp": "2026-05-23T15:52:30+01:00",
          "tree_id": "fb031db1f013464842049888ef4d77509678aaaa",
          "url": "https://github.com/fallow-rs/fallow/commit/ac81b9247538cf526db76f97dd2bf18a2f4dceb3"
        },
        "date": 1779548116987,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "c82ba6ffbb26df4fa411b342fe3f0116e00b8eef",
          "message": "feat: add optional review guidance\n\n* feat: add optional review guidance\n\n* test(ci): cover review guidance wiring",
          "timestamp": "2026-05-23T18:25:52+01:00",
          "tree_id": "3bb8bded8e399b9bc2fc1885ddabb9acbacb7aec",
          "url": "https://github.com/fallow-rs/fallow/commit/c82ba6ffbb26df4fa411b342fe3f0116e00b8eef"
        },
        "date": 1779557299027,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "4ce779558a06ddbe8cae6096de095b4fee39e9dd",
          "message": "feat: add PR comment summary scope\n\n* chore: open issue #661 implementation branch\n\n* fix(ci): add diff scope for sticky summaries\n\n* test(ci): avoid racy summary scope env mutation",
          "timestamp": "2026-05-24T08:28:55+01:00",
          "tree_id": "4cc7a012a41ca56fae83a44ae06a2000ad424af2",
          "url": "https://github.com/fallow-rs/fallow/commit/4ce779558a06ddbe8cae6096de095b4fee39e9dd"
        },
        "date": 1779607879967,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "017658ea7af7473dcc87c921a092f0bd507457fd",
          "message": "chore: release v2.80.0",
          "timestamp": "2026-05-24T09:38:07+02:00",
          "tree_id": "46bd21cb4f96e15a0d4a8dce8b03a8d51af3ba2a",
          "url": "https://github.com/fallow-rs/fallow/commit/017658ea7af7473dcc87c921a092f0bd507457fd"
        },
        "date": 1779608474632,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "e32cc0a415dcfddc776e9ec032eed6de218e0135",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.80.0",
          "timestamp": "2026-05-24T10:10:02+02:00",
          "tree_id": "c1be6b2b1dc4f2a25c95e6b5029c47cca05d7dd2",
          "url": "https://github.com/fallow-rs/fallow/commit/e32cc0a415dcfddc776e9ec032eed6de218e0135"
        },
        "date": 1779610343119,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "04fc48077af977a27894861d8db1a7c4243c4640",
          "message": "fix: recognize Danger and Stryker tooling configs\n\n* chore: open issue #618 implementation branch\n\n* fix: recognize Danger and Stryker tooling configs",
          "timestamp": "2026-05-25T12:08:53+01:00",
          "tree_id": "ebcbe56176684396b09e661625d1befe40aaa2c8",
          "url": "https://github.com/fallow-rs/fallow/commit/04fc48077af977a27894861d8db1a7c4243c4640"
        },
        "date": 1779707831134,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "3d93824183baf1a797d8fa4baf36edd9a168bc16",
          "message": "fix: skip platform builtins in unresolved imports\n\nSkip unresolved-import findings when an unresolvable specifier is accepted by is_builtin_module.\n\nAdd regression coverage for current Node, Bun, Cloudflare, Sass, and Deno builtin forms, while keeping builtin-like package names and fake node subpaths reportable.\n\nFixes #634.",
          "timestamp": "2026-05-25T12:26:22+01:00",
          "tree_id": "518433c3eacf3d2fcf6ff740632d20956da63b76",
          "url": "https://github.com/fallow-rs/fallow/commit/3d93824183baf1a797d8fa4baf36edd9a168bc16"
        },
        "date": 1779708531825,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
            "unit": "%"
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
        "date": 1779711019678,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
            "unit": "%"
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
        "date": 1779712078049,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "2f4a8313def90099019820c3e03ba0d571c5bdae",
          "message": "fix: guard CachedModule cache shape\n\n* chore: open issue 443 implementation branch\n\n* fix: guard cached module shape",
          "timestamp": "2026-05-25T13:57:59+01:00",
          "tree_id": "a414603807ce9de5bc42c3bc5f3a639ecb8b0a68",
          "url": "https://github.com/fallow-rs/fallow/commit/2f4a8313def90099019820c3e03ba0d571c5bdae"
        },
        "date": 1779714030703,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "ba8a3d97556bc3271fdc634c333dcc2b19992970",
          "message": "fix(ci): dogfood JS and TS surfaces\n\n* chore: open issue #483 implementation branch\n\n* fix(ci): dogfood JS and TS surfaces\n\nAdd a fallow-self-analyze CI job that builds the local fallow binary and runs dead-code analysis against the VS Code extension and npm wrapper package on relevant PRs and every push to main.\n\nConfigure each JavaScript and TypeScript surface with explicit entry points and warning-level intentional findings, preserve the existing VS Code package handling, and stop exporting the unused npm fetchReleaseDigest helper.\n\nWire npm wrapper unit tests into CI and document the self-analysis gate in the README and changelog.\n\nFixes #483.",
          "timestamp": "2026-05-25T14:39:27+01:00",
          "tree_id": "84ebfff940bc806dafd107d5d52cddd3ddf2423b",
          "url": "https://github.com/fallow-rs/fallow/commit/ba8a3d97556bc3271fdc634c333dcc2b19992970"
        },
        "date": 1779716660477,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "a48e02fed77f1ec08347e771a8c6e72d465801ef",
          "message": "fix(health): clarify ownership state\n\nFixes #478.",
          "timestamp": "2026-05-25T14:46:04+01:00",
          "tree_id": "4649914d7218365d935d0c06bc54813332c0733a",
          "url": "https://github.com/fallow-rs/fallow/commit/a48e02fed77f1ec08347e771a8c6e72d465801ef"
        },
        "date": 1779716910736,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "c0f47b501edd68de711a5c59cdec99d52ef5e91b",
          "message": "fix: harden programmatic napi analysis context\n\nAdd per-call Rayon pools for programmatic and N-API analyses so thread counts do not become first-call-wins process state.\n\nAdd programmatic diff_file and N-API diffFile, and thread explicit diff indexes through dead-code, duplication, and health execution without letting embedded callers fall back to the CLI shared diff cache.\n\nAdd regression coverage for CLI global parity, per-call thread counts, per-call diff scoping, shared-diff isolation, and Node diffFile usage.\n\nFixes #469.",
          "timestamp": "2026-05-25T14:59:20+01:00",
          "tree_id": "b3afbf6694de62a65356b73ca946001919187f5c",
          "url": "https://github.com/fallow-rs/fallow/commit/c0f47b501edd68de711a5c59cdec99d52ef5e91b"
        },
        "date": 1779717714200,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "2a38c0a6b2ae19425265647648c7bfc4d03e8abb",
          "message": "fix: harden fallow cloud API client\n\nCentralize cloud API client setup, Retry-After handling, shared error-envelope parsing, and FALLOW_CA_BUNDLE support across fallow cloud paths.\n\nFixes #464.",
          "timestamp": "2026-05-25T15:10:51+01:00",
          "tree_id": "983f95bba320d2c443d068ddd73c11162e609973",
          "url": "https://github.com/fallow-rs/fallow/commit/2a38c0a6b2ae19425265647648c7bfc4d03e8abb"
        },
        "date": 1779718403296,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91,
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
          "id": "32ba9d5bed686d80322176eebd695868c8061590",
          "message": "fix: make coverage setup resumable\n\nPersist coverage setup progress in `.fallow/setup.json`, guard human setup runs with `.fallow/setup.lock`, and validate resume state against current project artifacts before skipping work.\n\nFixes #460.",
          "timestamp": "2026-05-25T19:15:09+01:00",
          "tree_id": "e9570c8b648845afc03c142805cdb7d5bc93d878",
          "url": "https://github.com/fallow-rs/fallow/commit/32ba9d5bed686d80322176eebd695868c8061590"
        },
        "date": 1779733168313,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "3bbc57c10ff91d823d29d06779921330da07b935",
          "message": "test: gate MCP tool default drift\n\nCloses #455",
          "timestamp": "2026-05-25T19:24:23+01:00",
          "tree_id": "92b272b9aed73a1a8ddcb463550cdeada56cee99",
          "url": "https://github.com/fallow-rs/fallow/commit/3bbc57c10ff91d823d29d06779921330da07b935"
        },
        "date": 1779733610854,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "7f225736d007ddfa3a0959f71c274cc0ba3d144c",
          "message": "fix: treat scaffold templates as used assets\n\n* chore: open issue #635 implementation branch\n\n* fix: treat scaffold templates as used assets",
          "timestamp": "2026-05-25T22:07:46+01:00",
          "tree_id": "f2c36b50d7864fa21033a8a0bb305726d775117a",
          "url": "https://github.com/fallow-rs/fallow/commit/7f225736d007ddfa3a0959f71c274cc0ba3d144c"
        },
        "date": 1779743464109,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "10c5ec717d3b09c0c151dec306f458555fdd7ebc",
          "message": "fix: normalize coverage lock path assertion",
          "timestamp": "2026-05-25T23:16:13+02:00",
          "tree_id": "8ccaf38c7ef9e7167bc3dbde0a1bcd868f5a43c6",
          "url": "https://github.com/fallow-rs/fallow/commit/10c5ec717d3b09c0c151dec306f458555fdd7ebc"
        },
        "date": 1779743928031,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "1eafebd46c6c3aa7d88ddf7504aea857402c117d",
          "message": "feat: add RedwoodSDK worker entrypoints\n\nAdd a built-in RedwoodSDK plugin activated by `rwsdk` that marks `src/worker.*` as a runtime entrypoint within the active workspace. Keep Vite config ownership with the existing Vite plugin so `rwsdk/vite` apps do not trigger config-pattern collisions.\n\nFixes #632.",
          "timestamp": "2026-05-25T22:20:23+01:00",
          "tree_id": "5e45b3ed56c62e94eb0e97d9f84c2fcc43767891",
          "url": "https://github.com/fallow-rs/fallow/commit/1eafebd46c6c3aa7d88ddf7504aea857402c117d"
        },
        "date": 1779744195826,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "52a20b670b9f1da1838afdb6e5eb1687bdcb7c90",
          "message": "fix: add Wuchale plugin support\n\n* chore: open issue-631 implementation branch\n\n* fix: add Wuchale plugin support\n\n* fix: activate Wuchale plugin from config file\n\nWuchale projects can be identifiable by the documented wuchale.config.js file even when package dependencies are not enough to activate the plugin path. Teach the plugin to activate from that config file, and keep the narrow JavaScript-only config contract for Vite configFile references.\n\nAdd regression coverage for config-file activation without an enabler dependency so the adapter package import is credited only through the config path.\n\nFixes #631.",
          "timestamp": "2026-05-25T22:33:24+01:00",
          "tree_id": "a33dd7cb4d1ffc490438d4aca44e1b72f387ce96",
          "url": "https://github.com/fallow-rs/fallow/commit/52a20b670b9f1da1838afdb6e5eb1687bdcb7c90"
        },
        "date": 1779744973191,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "295e2904232c41f81b021716955278d72c059e6b",
          "message": "feat: add OpenCode plugin support\n\nAdds built-in OpenCode plugin support so OpenCode project plugin files and opencode.json plugin dependencies are treated as reachable.\n\nFixes #629.",
          "timestamp": "2026-05-25T22:37:32+01:00",
          "tree_id": "7794b0b1c5573b7148375d0a8fc6d6b0970773cd",
          "url": "https://github.com/fallow-rs/fallow/commit/295e2904232c41f81b021716955278d72c059e6b"
        },
        "date": 1779745214723,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "6e9b848395bcb0199dbfffc2c65df00fff5d7ffc",
          "message": "test: reject rooted package asset entries",
          "timestamp": "2026-05-25T23:49:27+02:00",
          "tree_id": "1064d747d2f58c1f3938b4376e52a928f5a24c99",
          "url": "https://github.com/fallow-rs/fallow/commit/6e9b848395bcb0199dbfffc2c65df00fff5d7ffc"
        },
        "date": 1779745916322,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "9c7a564b9b65a6bde49dc60d4e1e8c1b1d26e8c1",
          "message": "test: scope unix-only coverage imports",
          "timestamp": "2026-05-26T00:06:57+02:00",
          "tree_id": "90a117df701ad5cdaef388717b14e74e55827a0f",
          "url": "https://github.com/fallow-rs/fallow/commit/9c7a564b9b65a6bde49dc60d4e1e8c1b1d26e8c1"
        },
        "date": 1779746965522,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "ebe0042e39ce7455a85dc957a7ff0b673eddf1da",
          "message": "fix(graph): classify node:sqlite and mandatory-node-prefix builtins\n\nis_builtin_module stripped the node: prefix and checked the remainder\nagainst a flat builtin list that omitted sqlite and sea, so imports of\nnode:sqlite surfaced as unlisted dependencies or unresolved imports and\nforced projects to add node:sqlite to ignoreDependencies.\n\nIntroduce NODE_PREFIX_ONLY_BUILTINS (sea, sqlite, test, test/reporters),\nthe modules Node documents as available only under the node: scheme, and\nmatch them only when the node: prefix is present. The bare forms now\nclassify as ordinary npm packages, because Node refuses to resolve these\nwithout the prefix and real npm packages share the names (sqlite,\nbetter-sqlite3, the test package). test and test/reporters move out of\nthe always-available list, so a bare import 'test' is no longer treated\nas a builtin (behavior change). is_builtin_module is the single gate for\nboth the unlisted-dependency path and the unresolved-import path, and\nextract_package_name retains the node: prefix on the package-usage key,\nso the one predicate covers both.\n\nFixes #627.",
          "timestamp": "2026-05-25T23:44:12+01:00",
          "tree_id": "ca57f2d898b6d34da670be9b031eae71263c7db8",
          "url": "https://github.com/fallow-rs/fallow/commit/ebe0042e39ce7455a85dc957a7ff0b673eddf1da"
        },
        "date": 1779749194178,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "f12e98010219a828e6ff9264e6b0c6a78d86ef1c",
          "message": "feat(plugins): credit Lexical custom node lifecycle methods as used (#682)\n\nLexical reconstructs, clones, serializes, reconciles, and decorates custom\nnodes through a fixed set of class methods called reflectively at runtime.\nLocal project code never calls them directly, so they surfaced as\nunused-class-member false positives.\n\nThe new built-in lexical plugin (enabler: lexical, @lexical/) returns\nheritage-scoped used_class_member_rules for the three documented extendable\nnode bases: DecoratorNode, ElementNode, and TextNode. The shared lifecycle\nset (getType, clone, importJSON, importDOM, exportJSON, exportDOM, createDOM,\nupdateDOM, updateFromJSON, getTextContent, isInline) is credited on all three;\ndecorate is scoped to DecoratorNode only. Non-lifecycle methods on a node\nsubclass are still reported.\n\nReplaces the manual scoped usedClassMembers allowlist users hand-write today.\n\nFixes #628",
          "timestamp": "2026-05-25T23:47:26+01:00",
          "tree_id": "d627bb3d543c2683c735a31557e5081c29f93843",
          "url": "https://github.com/fallow-rs/fallow/commit/f12e98010219a828e6ff9264e6b0c6a78d86ef1c"
        },
        "date": 1779749408900,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "9de44d7faf6a0832739993df9829a11f5812ac2d",
          "message": "chore: release v2.81.0",
          "timestamp": "2026-05-26T06:48:04+02:00",
          "tree_id": "c3d1de812df994e846909ad2229dcda901e8834f",
          "url": "https://github.com/fallow-rs/fallow/commit/9de44d7faf6a0832739993df9829a11f5812ac2d"
        },
        "date": 1779771093320,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
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
          "id": "7c2888f05cc6ef87c40e24a384083b78a87229af",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.81.0",
          "timestamp": "2026-05-26T07:22:59+02:00",
          "tree_id": "253ee97ac5f1b60662600a187c0ba573a67fa3f6",
          "url": "https://github.com/fallow-rs/fallow/commit/7c2888f05cc6ef87c40e24a384083b78a87229af"
        },
        "date": 1779773141233,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 91.4,
            "unit": "%"
          }
        ]
      }
    ]
  }
}