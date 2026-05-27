window.BENCHMARK_DATA = {
  "lastUpdate": 1779868316441,
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
          "id": "ab27bcfbf1607f145649d52ed95777f50221710a",
          "message": "fix(audit): strip Windows verbatim prefix at git_toplevel for --changed-since + audit\n\nThe real Windows-only bug behind #561 (the dunce::simplified fix in\n40b000f8 was a real correctness improvement but not load-bearing for\nthis issue): `resolve_git_toplevel` in `crates/core/src/changed_files.rs`\nused `std::fs::canonicalize`, which on Windows adds the `\\\\?\\`\nverbatim prefix to its result. Every path from `git diff --name-only`\ngot joined onto this verbatim-prefixed toplevel, producing\nchanged-files paths shaped like `\\\\?\\C:\\Users\\...\\Temp\\test\\src\\foo.ts`.\n\nDownstream `strip_prefix` comparisons against `opts.root` (the CLI's\nproject root from clap, which carries NO verbatim prefix) walk the\ncomponent graph and see `Prefix(VerbatimDisk('C'))` against\n`Prefix(Disk('C'))`. They are not equal. Every entry in the\nchanged-files set silently failed the prefix check, the focus filter\ndropped EVERY finding before the audit attribution pass ran, and\naudit reported 0 pre-existing findings.\n\nThat's the root cause of the 8 audit integration tests in\n`crates/cli/tests/audit_tests.rs` that report\n`expected at least 5 pre-existing unused exports, got 0` on Windows.\nThree sites switch from `std::fs::canonicalize` to\n`dunce::canonicalize`:\n\n- `crates/core/src/changed_files.rs::resolve_git_toplevel`\n- `crates/cli/src/audit.rs::git_toplevel`\n- `crates/cli/src/audit.rs::base_analysis_root` (current_root)\n\n`dunce::canonicalize` strips the `\\\\?\\` prefix on Windows and is\nidentical to `std::fs::canonicalize` on POSIX, so behaviour off\nWindows is unchanged.\n\nRefs #561, #447, #545.",
          "timestamp": "2026-05-21T23:06:17+01:00",
          "tree_id": "35c4d13c1fcdbff03c98af73fb387f21669ce563",
          "url": "https://github.com/fallow-rs/fallow/commit/ab27bcfbf1607f145649d52ed95777f50221710a"
        },
        "date": 1779401243939,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779401579996,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779402352286,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779402489507,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779403710846,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779404011548,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779404922106,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779426944569,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779429339594,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779430964902,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779432240979,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779432509184,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a3268f9785fdf864dedb7acc16eda9d58bdfb8c",
          "message": "feat(cli): plumb --explain through human + combined JSON output\n\nIn human format, --explain now prints a Description: line under each\nsection header for check, dupes, and health (standalone, grouped, and\ncombined). Previously the flag was JSON-only and the human reference\ntables claimed descriptions were always shown, which was never true.\n\nIn combined JSON, --explain emits a sectioned _meta block with check,\ndupes, and health keys carrying their per-analysis rules, metrics, and\nfield definitions. The standalone _meta shapes are unchanged; combined\nmode just nests them under one analysis-keyed envelope so a single\nfetch covers every analysis the run produced.\n\nRegression coverage in crates/cli/tests/exit_code_tests.rs covers the\ncombined human path, the standalone human path, the --group-by human\npath, and the combined JSON _meta shape. Generated output contract +\ndocs/output-schema.json updated to match.\n\nFixes #559.",
          "timestamp": "2026-05-22T07:51:20+01:00",
          "tree_id": "8826fa30fd074c9299828cf0405dca953e961a84",
          "url": "https://github.com/fallow-rs/fallow/commit/4a3268f9785fdf864dedb7acc16eda9d58bdfb8c"
        },
        "date": 1779432749353,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779432879113,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779433159100,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779434590897,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779435826276,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779437967591,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779439451903,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779449797466,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 682,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779450100332,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 683,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779450612003,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779451906977,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779453906907,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779459419290,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779468536655,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779469645474,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "dfa5b8996744d934a8173a793473f192f51ed53d",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.78.1",
          "timestamp": "2026-05-22T19:38:31+02:00",
          "tree_id": "c92064d5310efe013a6cd73c0826a354f98c9210",
          "url": "https://github.com/fallow-rs/fallow/commit/dfa5b8996744d934a8173a793473f192f51ed53d"
        },
        "date": 1779471572146,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779471681698,
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
            "value": 300,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 685,
            "unit": "count"
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
        "date": 1779476059809,
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
            "value": 301,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 688,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779478566238,
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
            "value": 301,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 688,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779479289640,
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
            "value": 301,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 688,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779480395412,
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
            "value": 301,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 688,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779481107605,
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
            "value": 301,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 688,
            "unit": "count"
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
        "date": 1779483147492,
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
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779483588641,
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
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779483927967,
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
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779485486750,
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
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779487250143,
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
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779518541716,
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
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4bb70d946e9481c738f8857c15df5a2ba01b648",
          "message": "fix(plugins): suppress React Router route type imports\n\nReact Router v7 and Remix generate sibling ./+types route modules during typegen, and clean checkouts can omit those files. Thread a plugin-provided generated type-import prefix through aggregation and unresolved-import filtering so type-only imports under that prefix do not report as missing.\n\nKeep the suppression narrow: it is plugin-gated, exact-prefix based, and only applies to type-only imports. Runtime imports under ./+types/ continue to report as unresolved, and projects without the React Router or Remix plugins keep the normal missing-import behavior.\n\nAdd unit coverage for the type-only filter, plugin-gated behavior, and runtime negative case, plus React Router and Remix integration fixture coverage.\n\nFixes #645.",
          "timestamp": "2026-05-23T07:45:49+01:00",
          "tree_id": "b0f0c1bc46d749073991cdc2944d731ca925574b",
          "url": "https://github.com/fallow-rs/fallow/commit/e4bb70d946e9481c738f8857c15df5a2ba01b648"
        },
        "date": 1779518828473,
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
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779518946527,
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
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779519934834,
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
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779521698098,
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
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779546473243,
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
            "value": 303,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 691,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779546910409,
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
            "value": 304,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 694,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779548007883,
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
            "value": 304,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 694,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779557213020,
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
            "value": 304,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 694,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779607791142,
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
            "value": 304,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 694,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779608391731,
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
            "value": 304,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 694,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779610264887,
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
            "value": 304,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 694,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779707666270,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 699,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779708445971,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 699,
            "unit": "count"
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
        "date": 1779710740020,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 700,
            "unit": "count"
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
        "date": 1779712035956,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 701,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779713938247,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 701,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779716844531,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 701,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779717624234,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779718314979,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de21eb76e285ceb042bfb24a08cae294c60200fa",
          "message": "fix: harden reconcile-review apply\n\n* chore: open issue #459 implementation branch\n\n* fix: make reconcile review apply fail fast",
          "timestamp": "2026-05-25T19:08:44+01:00",
          "tree_id": "6ac8bcc88c718f5e1778035edd064d95cba0bcf0",
          "url": "https://github.com/fallow-rs/fallow/commit/de21eb76e285ceb042bfb24a08cae294c60200fa"
        },
        "date": 1779732582649,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779732994212,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779733539736,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779743365780,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779743860587,
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
            "value": 306,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 702,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779744150601,
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
            "value": 307,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 704,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c0a171773f0af14a229b9bb3199db896cd69cf2d",
          "message": "test: drain mock HTTP requests in reconcile tests",
          "timestamp": "2026-05-25T23:32:25+02:00",
          "tree_id": "16b26941c764053be0bb7300f4c79dbbd63ad8d0",
          "url": "https://github.com/fallow-rs/fallow/commit/c0a171773f0af14a229b9bb3199db896cd69cf2d"
        },
        "date": 1779744802939,
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
            "value": 307,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 704,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779744870359,
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
            "value": 308,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 707,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779745128273,
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
            "value": 309,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 709,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779745835820,
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
            "value": 309,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 709,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779746881479,
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
            "value": 309,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 709,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779749113517,
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
            "value": 309,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 709,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779749321329,
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
            "value": 310,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 711,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779770997048,
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
            "value": 310,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 711,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779773045934,
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
            "value": 310,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 711,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779779900745,
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
            "value": 310,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 711,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779780418896,
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
            "value": 310,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 711,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779783588766,
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
            "value": 311,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 713,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779785114700,
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
            "value": 312,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 715,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779786912335,
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
            "value": 313,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 717,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779790678396,
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
            "value": 313,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 717,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779791602010,
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
            "value": 313,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 717,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779800458098,
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
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 720,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779802969953,
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
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 720,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c1fb174f8209ec69e14a383be743f068278cb4a",
          "message": "fix(plugins): evaluate path-helper calls in bundler entry config (#700)\n\n* fix(plugins): evaluate path-helper calls in bundler entry config\n\nbuild.rollupOptions.input and build.lib.entry values written as\npath-helper calls (resolve(__dirname, \"src/app.ts\"), path.resolve(...),\njoin(...), and the import.meta.dirname equivalents) were CallExpressions\nthat the leaf evaluator dropped, so files declared only via path helpers\nwere reported as unused until the user duplicated the entry list into\n.fallowrc.\n\nexpression_to_string_or_array now evaluates leaf values through\nexpression_to_path_string (a superset of expression_to_string that\nfalls through to it for string/template literals), so the change is\nadditive: it only adds previously-dropped path-helper entries, never\nchanging string-literal behavior. call_expression_to_path_string also\ntreats import.meta.dirname as a current-directory anchor alongside\n__dirname, which improves alias resolution for every config sharing the\nhelper. CSS inputs are preserved like any other entry.\n\nFixes #604\n\n* docs(changelog): note path-helper evaluation in bundler entry config\n\nDocument issue #604 fix in CHANGELOG [Unreleased], detection.md, and\nplugins.md (Vite entry/input now evaluates resolve/path.resolve/join +\nimport.meta.dirname path-helper calls via the shared extractor).",
          "timestamp": "2026-05-26T15:54:23+01:00",
          "tree_id": "ac1b51f51694d7d886c85ad53553519f200713c4",
          "url": "https://github.com/fallow-rs/fallow/commit/1c1fb174f8209ec69e14a383be743f068278cb4a"
        },
        "date": 1779807521172,
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
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 720,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27f7ae06183552e141e47ead1141e11bbfa176f4",
          "message": "feat(plugins): parse Playwright webServer.command for CLI deps and script entries\n\nParse webServer.command (object and array forms) from playwright.config.* and run\neach command through the shared package.json script parser: invoked npm binaries are\ncredited as referenced dependencies and local file arguments are seeded as reachable\nsetup files. File paths (and globalSetup/globalTeardown) resolve relative to the\nconfig file's directory, matching Playwright's webServer.cwd default; an explicit cwd\noverrides that base. Package-manager delegations (npm run start) credit nothing.\n\nFixes #621.",
          "timestamp": "2026-05-26T16:00:09+01:00",
          "tree_id": "ca3b44127b7cf2062ee473d5bfbfda9ed97f042f",
          "url": "https://github.com/fallow-rs/fallow/commit/27f7ae06183552e141e47ead1141e11bbfa176f4"
        },
        "date": 1779807699569,
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
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 721,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779807804047,
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
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 722,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779808736952,
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
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 722,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779809629357,
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
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 722,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779810876509,
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
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 722,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779816466019,
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
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 722,
            "unit": "count"
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
        "date": 1779830554888,
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
            "value": 314,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 723,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "033a5fa88d4e22320b737aa9f6b2d9035d9feb84",
          "message": "fix: parse browser extension manifest entrypoints\n\n* chore: open issue #616 implementation branch\n\n* fix: parse browser extension manifest entrypoints",
          "timestamp": "2026-05-26T22:32:35+01:00",
          "tree_id": "fc86255d043ff905ac5c0f143dff28c19360e2d7",
          "url": "https://github.com/fallow-rs/fallow/commit/033a5fa88d4e22320b737aa9f6b2d9035d9feb84"
        },
        "date": 1779831356874,
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
            "value": 315,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 726,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779831632296,
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
            "value": 316,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 728,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779832783989,
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
            "value": 316,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 728,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "deb45dfc573e56bece471e92de81d487e0dcea10",
          "message": "fix: support OpenNext Cloudflare config\n\n* chore: start issue 613 implementation\n\n* fix: support OpenNext Cloudflare config",
          "timestamp": "2026-05-27T06:32:34+01:00",
          "tree_id": "01da804a832353b882ed79c56daa11d2420bff8b",
          "url": "https://github.com/fallow-rs/fallow/commit/deb45dfc573e56bece471e92de81d487e0dcea10"
        },
        "date": 1779860016104,
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
            "value": 317,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 732,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779860140260,
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
            "value": 318,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 735,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779862210678,
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
            "value": 319,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 737,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779866109513,
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
            "value": 319,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 737,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1779866966275,
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
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 740,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ceaac6dfad07cc265d87067126f92bb76ed970b2",
          "message": "fix(tests): normalize Contentlayer fixture paths\n\nThe Contentlayer integration test asserted Unix-style suffixes against raw analyzer file paths. On Windows the analyzer can return absolute backslash paths, which made the test fail even though the orphan file was correctly reported.\n\nNormalize unused file paths relative to the fixture root before making the reachability assertions. This keeps the regression coverage focused on Contentlayer behavior instead of host path formatting.",
          "timestamp": "2026-05-27T08:50:48+01:00",
          "tree_id": "825a41a8bfb2804300f2fd5fa8938702702ce9cb",
          "url": "https://github.com/fallow-rs/fallow/commit/ceaac6dfad07cc265d87067126f92bb76ed970b2"
        },
        "date": 1779868313754,
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
            "value": 320,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 740,
            "unit": "count"
          }
        ]
      }
    ]
  }
}