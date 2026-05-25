window.BENCHMARK_DATA = {
  "lastUpdate": 1779743907614,
  "repoUrl": "https://github.com/fallow-rs/fallow",
  "entries": {
    "Fallow Allocations": [
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
          "id": "b14fd612ce21ea710ee9c41860c24d73c14d0589",
          "message": "fix(extract): barrel re-export member propagation, source-order-independent (#427)\n\nClass-inheritance and interface-implementer credit now walks re-export\norigins, so a child class extends BaseShape (or implements RenderableShape)\nthrough a contracts/index.ts barrel correctly credits the parent's this.*\naccesses on the actual defining file. The visitor also now resolves\nexport { X }; import { X } from './a'; (export-before-import) as a\nre-export instead of a local export, matching the existing import-before-\nexport behavior. A local declaration of X in the same module shadows the\nimport and keeps the export local.\n\nCACHE_VERSION bumped 83 to 84 so warm caches get the new ModuleInfo shape\non upgrade.\n\nThanks @M-Hassan-Raza for the patch.",
          "timestamp": "2026-05-20T15:20:42+01:00",
          "tree_id": "992b899202c8d6c9d38cd81a03c384a179f20b7f",
          "url": "https://github.com/fallow-rs/fallow/commit/b14fd612ce21ea710ee9c41860c24d73c14d0589"
        },
        "date": 1779286984768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5060772,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27444,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708591,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "e91ccd2086db43b2854ede205ba416450931ae42",
          "message": "fix(cli): redact api_key and bearer tokens from Debug + ureq errors (#487)\n\nCloudRequest, UploadInventoryArgs, and ActivateArgs previously derived\nDebug on their public api_key / raw_jwt fields. A future tracing::debug!,\ndbg!, or unwrap-on-Err with the Debug formatter would have leaked the\nfull credential to stderr (and into CI logs).\n\nureq's Display impl can include the outgoing request's headers on TLS,\nconnection, and internal failure modes. Any Authorization: Bearer <key>\nwe set on the request could bleed into stderr via emit_error.\n\nMask the secrets at the type level via manual fmt::Debug impls, and\nadd sanitize_network_error(detail: &str) in crates/cli/src/api.rs to\nreplace every Bearer <token> substring with Bearer ***. The helper is\nwired at every format!(\"{err}\") site that runs after an Authorization:\nBearer header is set: cloud_client, upload_inventory, upload_source_maps,\nlicense::activate_trial, license::refresh_active_license, and the\nci::with_rate_limit_retry path used by GitHub PR-comment posting.\n\nToken charset matches the JWT / fallow API-key alphabet\n([A-Za-z0-9_.\\-=]); non-token bytes after `Bearer ` are preserved so\nprose mentioning the literal `Bearer ` is untouched.\n\nNo real disclosure has hit production; this is a defensive lockdown.\n\nTests: api::sanitize_network_error_* (5 cases),\ncloud_request_debug_masks_api_key, upload_inventory_args_debug_masks_api_key,\nactivate_args_debug_masks_raw_jwt.\n\nFixes #476",
          "timestamp": "2026-05-20T16:21:54+01:00",
          "tree_id": "3e20c1fdb0a294c401613fc61beef1123e1c2b17",
          "url": "https://github.com/fallow-rs/fallow/commit/e91ccd2086db43b2854ede205ba416450931ae42"
        },
        "date": 1779290644491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5089580,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27479,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708035,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6792,
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
          "id": "54552a01e8b58619da71b45000d174ab28eafcad",
          "message": "fix(ci): sync bundled gitlab template",
          "timestamp": "2026-05-20T17:35:06+02:00",
          "tree_id": "741872199ed7811f87f2567e9277a472722e06d1",
          "url": "https://github.com/fallow-rs/fallow/commit/54552a01e8b58619da71b45000d174ab28eafcad"
        },
        "date": 1779291448904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5091508,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27475,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711736,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6830,
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
          "id": "a526f8ff6f50d2f5ae5da2bebbcb21ca18472606",
          "message": "fix(lsp): escape hover markdown + validate code-action line shape (#490)\n\nHover bodies now embed user-controlled identifiers via CommonMark code spans (new `format_inline_code` helper with fence escalation), and `build_remove_export_actions` validates the live declaration shape via `declares_export_name` before producing a `TextEdit`. The validator strips `export ` + declaration/modifier keywords and asserts the leading identifier equals the cached name, rejecting substring collisions, value-position collisions (cached `foo` vs live `export const bar = foo;` which would otherwise strip `export ` from `bar`), and re-export blocks. `Diagnostic.message` stays plain text per the LSP spec so VS Code's \"Fix all in file\" correlation keeps working.\n\nFixes #480",
          "timestamp": "2026-05-20T17:50:47+01:00",
          "tree_id": "8ef9e5f17c20ec22f51184b7382f8f3e30db50aa",
          "url": "https://github.com/fallow-rs/fallow/commit/a526f8ff6f50d2f5ae5da2bebbcb21ca18472606"
        },
        "date": 1779296014548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5057644,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27439,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708035,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6792,
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
          "id": "4ae297e6a6cc9f8cb370f44a1548aec9f33cc53e",
          "message": "fix(audit): harden worktree lifecycle against panic, Windows orphans, parallel races (#489)\n\nThree structural fragilities in fallow audit's git worktree lifecycle:\n\n1. WorktreeCleanupGuard rolls back both git's `.git/worktrees/<name>`\n   registration and the on-disk directory on any early-return between\n   `git worktree add` success and `BaseWorktree` struct construction.\n   `defuse(&mut self)` is idempotent and consumes no return value.\n\n2. `process_is_alive` on Windows was a `cfg(not(unix)) true` stub; orphan\n   sweep never cleaned worktrees owned by dead PIDs. Real Windows impl\n   added via target-gated `windows-sys 0.61`: `OpenProcess` +\n   `WaitForSingleObject(handle, 0) != WAIT_OBJECT_0`, with\n   `ProcessHandle(HANDLE)` RAII for `CloseHandle`.\n   `ERROR_ACCESS_DENIED` is treated as alive (matches Unix `kill -0`\n   EPERM); `ERROR_INVALID_PARAMETER` is dead. `WaitForSingleObject` is\n   preferred over `GetExitCodeProcess + STILL_ACTIVE` because 259 is a\n   valid u32 exit code.\n\n3. `BaseWorktree::reuse_or_create` now takes a kernel-level advisory\n   lock on `<reusable_audit_worktree_path>.lock` via\n   `std::fs::File::try_lock` (stable since Rust 1.89, MSRV is 1.92).\n   `flock(2)` on Unix, `LockFileEx` on Windows. Concurrent `fallow\n   audit` runs against the same `base_sha` no longer race on\n   `git worktree add` against the same cached path; the loser falls\n   through to the non-reusable PID-named worktree.\n\n`remove_audit_worktree` now emits `tracing::warn!` only when\n`git worktree remove --force` returns non-zero AND the on-disk dir\nsurvives, so leaked git registrations are observable under\n`RUST_LOG=warn` rather than silent.\n\nFive new tests cover guard cleanup, guard defuse, dead-PID sweep,\nlive-PID sweep, and lock exclusion. The lock test exercises the\nin-process exclusion path only (same-process re-acquire is not\nasserted because macOS `flock(2)` can keep the lock visible to other\nopen file descriptions in the same process for a brief window after\nclose; cross-process release is exercised by every real audit run).\n\nNo new third-party deps; `windows-sys` is target-gated to `cfg(windows)`.\n\nFixes #472",
          "timestamp": "2026-05-20T18:56:40+01:00",
          "tree_id": "01e57d04c0ec892295212239fafc123112ca0f1b",
          "url": "https://github.com/fallow-rs/fallow/commit/4ae297e6a6cc9f8cb370f44a1548aec9f33cc53e"
        },
        "date": 1779299929426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5088540,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27470,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 706459,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "1ecdecf68222686f7a08c592cdf69134929b3207",
          "message": "feat(unused-class-members): add ignoreDecorators config opt-out (#508)\n\nCloses #471\n\nAdds FallowConfig.ignoreDecorators so users can opt utility decorators (Playwright @step, internal @measure/@log) out of the default skip-all-decorated behavior. Methods decorated only with listed names are checked for usage like undecorated methods; methods with any non-listed decorator stay skipped, preserving NestJS / Angular / TypeORM defaults. Default empty list = no behavior change.\n\nDual matching: dotted entries (\"decorators.log\") match the full path; bare entries (\"step\" or \"decorators\") match the leftmost segment. Both \"@step\" and \"step\" round-trip equivalently. Unmatched entries emit a one-time warning at end of run via a pre-pass over all class members' decorator names (so the warning does not falsely fire when the decorator only appears on used members).\n\nCACHE_VERSION bumped 84 -> 85 so warm caches invalidate on upgrade.\n\nThanks @vethman for the report.",
          "timestamp": "2026-05-20T20:02:27+01:00",
          "tree_id": "a84908d9c7171cd34e983fb7d4e51306e0939f81",
          "url": "https://github.com/fallow-rs/fallow/commit/1ecdecf68222686f7a08c592cdf69134929b3207"
        },
        "date": 1779303882242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5087028,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27469,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708299,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6795,
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
          "id": "be4f7e30099dc104dd57eb09400229b5e2d71022",
          "message": "fix(config): warn on misspelled rule names with Levenshtein suggestion (#510)\n\n* fix(config): warn on misspelled rule names with Levenshtein suggestion\n\nPhase 1 of a staged migration toward `#[serde(deny_unknown_fields)]` on\n`RulesConfig` / `PartialRulesConfig`. Today a typo in a rule name in\n`.fallowrc.json` is silently dropped, and the affected rule falls back\nto its hardcoded default severity, so the user's intent is lost without\nany signal.\n\n`crates/config/src/config/rules.rs` now ships a canonical\n`KNOWN_RULE_NAMES` list covering every canonical kebab-case rule name\nplus every documented `#[serde(alias)]` form, a small Levenshtein\nhelper, and `find_unknown_rule_keys(value, context)` returning a typed\n`Vec<UnknownRuleKey>` so tests can assert against the data without\nsubscribing to tracing output.\n\n`FallowConfig::load` walks the merged config value after `extends`\nresolution and emits one `tracing::warn!` per unknown key under `rules`\nor `overrides[i].rules`. Warnings are deduped process-wide via a\n`OnceLock<Mutex<FxHashSet<_>>>` keyed on `\"{context}::{key}\"`, so a\ncombined-mode run (`check` + `dupes` + `health` through one config\nload path) emits at most one warning per (context, key) pair instead\nof three.\n\nThree drift guards: a count assertion, a serialized-default walk that\nasserts every canonical name is in the list, and a per-entry roundtrip\nthrough `PartialRulesConfig` that catches stale or missing aliases.\n\nA wiring regression test asserts `FallowConfig::load` actually invokes\nthe warn pass on the merged value by introspecting a process-wide\ncounter that increments on every emitted warning; verified to fail\nwhen the wiring line is removed from `load`.\n\nPhase 2 (a future minor release) will flip `RulesConfig` and\n`PartialRulesConfig` to `#[serde(deny_unknown_fields)]` and turn the\nwarning into a hard config-load error. `_typos.toml` exempts the two\nintentional misspellings used in the new test fixtures (`unsued`,\n`dependnecy`).\n\nCloses #467\n\n* fix(config): tighten dedupe + thread-local wiring + source-level alias drift guard\n\nThree corrections raised by parallel review on the previous commit:\n\n1. Dedupe key now includes the config file path: two different config\n   files with the same typo each warn once, instead of the second one\n   being silenced by the process-wide cache. The warning text now also\n   names the config path so the user knows which file to fix.\n\n2. The wiring regression test was switched from a process-wide atomic\n   counter with an exact `+1` assertion to a thread-local capture\n   buffer. The previous shape was a CI flake risk under parallel test\n   execution: any other `FallowConfig::load` racing into the warn path\n   could increment the same counter between the test's `before` /\n   `after` reads. The thread-local buffer is installed for the duration\n   of the test's `body` closure and discarded after, so parallel\n   threads cannot collide.\n\n3. A source-level drift guard reads the `rules.rs` source at test\n   time, extracts every `alias = \"<kebab>\"` literal, and asserts each\n   one is in `KNOWN_RULE_NAMES`. The existing count and roundtrip\n   guards already caught new-field and stale-entry drift; this third\n   guard catches the harder case where a contributor adds a NEW alias\n   to an existing field but forgets to update `KNOWN_RULE_NAMES`.\n   Verified by mental-revert: removing an entry from the const fails\n   the test with `serde alias 'X' is in rules.rs source but missing\n   from KNOWN_RULE_NAMES`.\n\nRefs #467",
          "timestamp": "2026-05-20T20:08:57+01:00",
          "tree_id": "1c578c4c73e8866ab3705d9bdc8c52f54844c1de",
          "url": "https://github.com/fallow-rs/fallow/commit/be4f7e30099dc104dd57eb09400229b5e2d71022"
        },
        "date": 1779304320713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5138268,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27504,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 664243,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6292,
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
          "id": "6bfda71d4bf4c04dc5b02ea7c88f273bbb14cb13",
          "message": "fix(unused-class-members): credit Playwright POM methods via helper-function fixtures\n\nThe #268 fix correlated `const test = base.extend<MyFixtures>(...)` definitions\nwith their callback-side member uses, but the helper form (`export function\nappTest() { return base.extend<MyFixtures>(...); }` consumed as `appTest()(...)`)\nreintroduced the false positive on nested POM methods. Three declarator shapes\nnow capture the helper (function declaration, arrow expression, function\nexpression) when the body is a single `return <call>` statement; a finalize-time\npass gates the `base` local on `@playwright/test`'s `test` named import and\nemits the same def-sentinel `MemberAccess` the analyzer already correlates with\nuse sentinels. Same-file helper chains propagate via a capped fixed-point pass\nover `(caller, callee)` aliases. The use-side `appTest()(...)` form is\nrecognised by extending `playwright_test_callee_name` with a `CallExpression`\nrecursion arm. Cross-file helper chains are out of scope.\n\nBumps `CACHE_VERSION` to 86 so warm caches refresh on upgrade.\n\nFixes #491.",
          "timestamp": "2026-05-20T20:56:00+01:00",
          "tree_id": "9bd374296be7afbf2ac3acc6ae50499efaec28fa",
          "url": "https://github.com/fallow-rs/fallow/commit/6bfda71d4bf4c04dc5b02ea7c88f273bbb14cb13"
        },
        "date": 1779307127628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5076924,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27469,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 706459,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "a55c1b180a88e4afa4976bfbbd861c48f3af687d",
          "message": "fix(plugins): surface silent-fail diagnostics for collisions, enabler typos, invalid regex\n\n* fix(plugins): surface silent-fail diagnostics for collisions, enabler typos, invalid regex\n\nThree plugin-system silent-fail patterns now emit `tracing::warn!` at config\nload time instead of letting users hit confusing analysis output:\n\n1. Two plugins (built-in or external) declaring an identical config_patterns\n   string warn once per (pattern, owners) pair and document the\n   registration-order precedence rule. Sub-glob overlap is intentionally out\n   of scope; only byte-identical patterns collide.\n\n2. External plugin enablers that do not match any project dependency but\n   have a Levenshtein-close dep name warn with \"did you mean '<closest>'?\".\n   Plugins with a `detection` block or empty enablers are skipped; no warn\n   fires when no close dep exists, so plugins that legitimately do not\n   apply stay silent.\n\n3. Invalid regexes in PathRule.exclude_regexes / exclude_segment_regexes\n   (extracted by built-in plugins from user code) are validated eagerly\n   inside process_config_result; invalid patterns are dropped after a warn\n   that names the plugin and the source config file.\n\nLevenshtein helper lifted out of crates/config/src/config/rules.rs into a\nshared crates/config/src/levenshtein.rs module so both the rule-name path\n(closest_known_rule_name from #467) and the new enabler-typo path share one\ndistance/length policy.\n\nAll three diagnostics dedupe process-wide via OnceLock<Mutex<FxHashSet>>\nso combined-mode (check + dupes + health) emits at most one warning per\n(kind, key) pair. Tracing-warn matches #467 / #510's staged-migration\nprecedent: no exit non-zero, no new CLI flag.\n\nTested via 9 new unit tests in crates/core/src/plugins/registry/tests.rs.\n\nFixes #479\n\n* fix(plugins): preserve registration order in collision warning; add staged-migration notice\n\nPanel review of #479 flagged two refinements over the initial commit:\n\n1. detect_pattern_collisions previously sorted owners alphabetically, so\n   the warning's 'owners[0] runs first (registration order)' could disagree\n   with reality. Switch the per-pattern owner store to an insertion-ordered\n   Vec (with a sibling FxHashSet for self-dedup) so the winner field is\n   actually correct.\n\n2. All three diagnostics (collision, enabler typo, invalid regex) now end\n   with 'A future release may reject ...' so users see the staged-migration\n   intent on first encounter, matching #510's 'A future release will reject\n   unknown rule names' precedent. The collision message also now says\n   'identical pattern' explicitly so the byte-equal scope is visible from\n   the warning itself.\n\nCHANGELOG entry updated to document the byte-identical scope and the\nstaged-migration design.\n\nRefs #479",
          "timestamp": "2026-05-20T21:14:12+01:00",
          "tree_id": "60d8ea0e30e71a219fdec5dd3eee2b9975cf4e40",
          "url": "https://github.com/fallow-rs/fallow/commit/a55c1b180a88e4afa4976bfbbd861c48f3af687d"
        },
        "date": 1779308213755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5069892,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27452,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 706459,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "92fc81875c763396c746ffa9573b79fdbafc357e",
          "message": "fix(boundaries): exit 2 on unknown zone references and redundant root prefixes\n\n* fix(boundaries): exit 2 on unknown zone references and redundant root prefixes\n\nBoundary validation in resolution.rs previously emitted `tracing::error!`\nand continued. A typo'd `from`/`allow`/`allowTypeOnly` zone name or a stale\nreference from a renamed zone left the rule active with a phantom target,\nand `is_import_allowed` returned `false` for every import to the\nnon-existent zone. Users saw a flood of false-positive boundary violations\n(\"ui cannot import from typo-zone\") with no signal that the config itself\nwas the problem; the `tracing::error!` was invisible in normal operation.\n\nThis change moves both `validate_zone_references` and\n`validate_root_prefixes` from gentle-fail into a hard config-load error\nreturned through `FallowConfig::validate_resolved_boundaries(root: &Path)`.\nValidation runs AFTER preset expansion and `expand_auto_discover`, so\nBulletproof's authored rule referencing the logical `features` group still\nloads cleanly once children are discovered. Every offending tuple lands in\none rendered diagnostic so users fix all entries in one pass.\n\nTwo wiring sites cover all real-world load paths:\n- `runtime_support::load_config_for_analysis` (CLI: check, dupes, health,\n  watch, audit, combined; renders `invalid boundary configuration:\\n  - ...`\n  via the existing `emit_error` ladder, exit code 2).\n- `core::lib::config_for_project` (LSP server, programmatic embedders via\n  `fallow_core::config_for_project`; surfaces as `FallowError::config`).\n\n`validate_zone_references` returns `Vec<UnknownZoneRef { rule_index, kind,\nzone_name }>` instead of `Vec<(usize, &str)>` so the diagnostic surfaces\nWHICH field (`from`/`allow`/`allowTypeOnly`) carries the typo.\n`validate_root_prefixes` returns `Vec<RedundantRootPrefix { zone_name,\npattern, root }>` instead of `Vec<String>`; the `Display` impl on\n`ZoneValidationError::RedundantRootPrefix` preserves the legacy\n`FALLOW-BOUNDARY-ROOT-REDUNDANT-PREFIX` tag so existing CI grep recipes\ncontinue to work. The `tracing::error!` calls in `resolution.rs::resolve()`\nare dropped; resolve() now relies on callers having validated upstream.\n\nTests:\n- 5 unit tests in `crates/config/src/config/parsing.rs` covering\n  happy-path, unknown-zone-aggregation, redundant-root-prefix, mixed,\n  Bulletproof-preset expansion.\n- 3 integration tests in `crates/cli/tests/exit_code_tests.rs` covering\n  the CLI exit-2 path end-to-end with stderr substring assertions.\n\nThe invalid-glob-pattern half of #468 was already closed by #486\n(`validate_user_globs` covering `boundaries.zones[].{patterns, root,\nautoDiscover}`); this PR completes the issue.\n\nFixes #468\nRefs #486, #499\n\n* fix(boundaries): wire #468 validation into `fallow config` and respect --format on `fallow list`\n\nReview of e4925042 surfaced two wiring gaps in the lesser-trafficked CLI\nsubcommands that bypassed the new boundary-validation contract:\n\n1. `fallow config` (config.rs) called `FallowConfig::load` /\n   `find_and_load` directly, never the new\n   `validate_resolved_boundaries`. A config with `allow: [\"typo-zone\"]`\n   exited 0 from `fallow config` while `fallow check` (correctly) exited 2.\n   Users hitting `fallow config` for debugging would see a false \"loaded\n   fine\" view. Validation now runs after the load, mirroring the analysis\n   path's contract.\n\n2. `fallow list` (list.rs) passed `OutputFormat::Human` to `load_config`\n   instead of threading `opts.output` through. `fallow list --boundaries\n   --format json` correctly exited 2 on bad boundary config, but the error\n   surfaced as human text on stderr instead of the structured\n   `{\"error\": true, \"message\": ..., \"exit_code\": 2}` JSON envelope on\n   stdout. Agents and CI consumers expecting the JSON contract saw raw\n   text; trivial one-line fix threads the user's actual format through.\n\n`run_config` gained an `output: OutputFormat` parameter (call site in\nmain.rs updated, six existing unit tests + one new one cover the new\nsignature). `run_list` no change to its public surface; the hardcoded\n`OutputFormat::Human` becomes `opts.output`.\n\nTests:\n- `fallow_config_subcommand_rejects_unknown_boundary_zone` (integration):\n  verifies exit 2 on the config subcommand human path.\n- `fallow_config_subcommand_json_format_emits_structured_error_envelope`\n  (integration): asserts the JSON envelope shape on stdout for\n  `fallow --format json config`.\n- `fallow_list_boundaries_json_format_emits_structured_error_envelope`\n  (integration): same shape assertion for `fallow --format json list\n  --boundaries`.\n- `run_config_rejects_unknown_boundary_zone_reference` (unit): in-process\n  exit-code check via `tempfile::tempdir`.\n\nRefs #468",
          "timestamp": "2026-05-21T08:39:35+01:00",
          "tree_id": "c7d48ae17d813d6f9588c6792e5199b44e08e134",
          "url": "https://github.com/fallow-rs/fallow/commit/92fc81875c763396c746ffa9573b79fdbafc357e"
        },
        "date": 1779349305143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5091572,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27480,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 706459,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "7bf1fa2e4bfbb5e7368f073353aaa2bfc08a7996",
          "message": "fix(action,ci): surface gh api + pagination failures instead of silent degradation\n\nSix call sites in action/scripts/{analyze,review,comment}.sh and\nci/scripts/{review,comment}.sh previously masked gh api / curl_paginate\nfailures behind `2>/dev/null || true` and `... || echo '[]'` patterns.\nA transient 5xx during the changed-files lookup made the action run\nunscoped (every finding posted, not just findings on PR-changed lines);\na 502 on page 2 of an existing-comment dedup lookup made the action\npost N duplicate review threads on every retry.\n\nEach site now consumes the helper exit code via a two-step capture and\nemits structured diagnostics:\n\n- changed-files lookup failure (analyze.sh) emits a ::warning:: naming the\n  API failure mode and writes changed_files_unavailable=true to\n  GITHUB_OUTPUT; initialized to false unconditionally so downstream gates\n  always see a definitive value.\n\n- Multi-comment fingerprint dedup failure (review.sh) aborts the inline\n  review POST because N duplicate threads is materially worse than no\n  inline review. Exit policy splits on failure class: stderr matching a\n  permanent 4xx pattern (excluding 429, which is retry-eligible)\n  escalates to exit 1 for loud CI failure; 5xx / 429 / network errors\n  fall through to exit 0 so transient blips do not break PRs.\n\n- Summary-only dedup failure (comment.sh, review.sh summary branch)\n  posts a fresh summary anyway because a duplicate summary is collapsible\n  while a missing summary is silently broken. Two distinct markers\n  capture this: post_skipped_reason flips only on the multi-comment\n  abort, dedup_lookup_failed flips on any lookup failure including the\n  post-anyway paths.\n\n- GitLab template writes parallel sidecar artifacts (fallow-skip-reason.txt,\n  fallow-dedup-lookup-failed.txt) declared in artifacts: paths: so\n  downstream jobs can gate on them. review.sh only initializes a marker\n  when the file does not already exist, so comment.sh's prior `true`\n  value (when both steps run in sequence) is preserved rather than\n  clobbered. gitlab-ci.yml's existing `bash review.sh || echo \"WARNING:\n  ...\"` swallows our exit 1, so the 4xx escalation is advisory for the\n  default template; operators who want CI-fatal behavior can drop the\n  `|| echo` or gate on the sidecars.\n\n- action.yml exposes three new composite outputs: changed-files-unavailable,\n  post-skipped-reason, dedup-lookup-failed. The composite expression for\n  dedup-lookup-failed evaluates each step output's string value\n  explicitly (`== 'true'`) rather than relying on truthiness, since\n  non-empty strings (including the literal \"false\") evaluate truthy in\n  GitHub Actions expressions. Step IDs added to Post PR comment + Post\n  review comments.\n\n- mktemp files cleaned up via single `trap '... EXIT'` per script.\n\nThe bundled `fallow ci-template gitlab` payload at crates/cli/templates/ci/\nis kept byte-equivalent to the workspace sources via the existing\n`bundled_templates_match_workspace_sources` drift gate.\n\nRegression tests inject synthetic 5xx, 4xx, and retry-exhausted 429\nfailures on every affected call site and assert marker contracts plus\nabsence of duplicate POSTs. Added test covers the comment-before-review\nmarker preservation contract on the GitLab side.\n\nCloses #470",
          "timestamp": "2026-05-21T09:15:20+01:00",
          "tree_id": "93b7bd0b4d1e87ebde90078ffeecbd4e18185c17",
          "url": "https://github.com/fallow-rs/fallow/commit/7bf1fa2e4bfbb5e7368f073353aaa2bfc08a7996"
        },
        "date": 1779351554260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5107236,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27499,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708599,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6797,
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
          "id": "b099e2f6bca12ca9ea7b2d1876f5442de7461065",
          "message": "fix(graph): harden re-export chain resolution against silent truncation\n\n* fix(graph): harden re-export chain resolution against silent truncation\n\nTwo structural silent-fail bugs in Phase 4 re-export chain resolution:\n\n1. The fixpoint loop in resolve_re_export_chains capped iterations at 20\n   and emitted only a tracing::warn! when the cap was hit. Barrel chains\n   deeper than 20 hops silently under-credited references on the leaf.\n   The cap is now removed; the fixpoint terminates naturally because\n   each propagation helper adds references through an FxHashSet\n   dedup-by-from_file check, bounding monotone growth by |files| *\n   |exports|. A defensive safety backstop bounded by re_export_info.len()\n   + 1 iterations stays in place and logs tracing::error! if a future\n   regression violates monotonicity.\n\n2. Re-export cycles (a.ts: export * from './b' paired with\n   b.ts: export * from './a') and barrels that re-export from\n   themselves were silently absorbed by the iteration cap. They are now\n   detected up front via iterative Tarjan SCC over the (barrel, source)\n   edge subgraph and surfaced as one tracing::warn! per cycle or\n   self-loop with the member file paths.\n\n3. propagate_star_re_export's synthetic bridge stub hardcoded\n   is_type_only: false, so multi-hop export type * chains lost the\n   type-only flag at every synthesised hop. The stub now inherits\n   is_type_only from the triggering re-export edge. When both a\n   type-only and a value star edge reach the same source for the same\n   name, a synthetic_stubs side set tracks the stub identity so the\n   value edge can downgrade is_type_only: false. Real export type Foo\n   declarations on the source are never in the set and stay type-only.\n\n6 new regression tests cover: 21-hop and 25-hop chains (just over and\nwell past the old cap), a 3-node cycle non-blocking unrelated\npropagation, type-only star chains via both entry-point and named\nconsumer paths, contradictory type-only/value paths resolving to value,\nand self-re-export not panicking.\n\nNo CACHE_VERSION bump (no extract-layer change). No CLI surface, JSON\nshape, MCP tool, or companion-repo change. Surfacing the cycle\ndiagnostic as a structured AnalysisResults finding is tracked\nseparately as a follow-up.\n\nFixes #442\n\n* docs(changelog): link issue #515 for re-export cycle surfacing follow-up\n\n* docs(changelog): merge re-export bullet into existing Unreleased Fixed section\n\nThe post-rebase tree had two ### Fixed sections under [Unreleased]: a new\none above ### Added carrying the #442 bullet, and the pre-existing one\nbeneath ### Changed carrying #491/#479/#467/#480/#472/#427/#476. Keep-a-\nChangelog prescribes one subsection per category, so merge the new bullet\ninto the existing ### Fixed section.\n\n* test(graph): assert exact tracing::warn! payload on re-export cycles and self-loops\n\nAdds tracing-subscriber as a dev-dep on fallow-graph plus a scoped\nMakeWriter helper that captures warn output inside a single test block\nvia tracing::subscriber::with_default. Two new tests cover the gap that\nPR #516's review flagged as non-blocking: the existing structural tests\nprove cycles terminate without panic but never read the warn message,\nso a regression to a context-free \"cycle detected\" string would pass\nsilently.\n\n- re_export_cycle_warn_payload_lists_member_paths: 3-node cycle,\n  asserts the warn header, every member path, and the cycle_size=3\n  field appear in the captured output.\n- self_re_export_warn_payload_names_file: self-loop, asserts the warn\n  header and the offending file path appear in the captured output.\n\nThe capture helper is scoped to the test block (with_default rather\nthan try_init) so it never leaks across parallel test threads.\n\n* chore(graph): sync Cargo.lock for tracing-subscriber dev-dep",
          "timestamp": "2026-05-21T09:22:17+01:00",
          "tree_id": "b16f8fc165ef649ec790f2ce193a0a0eb8cb62f5",
          "url": "https://github.com/fallow-rs/fallow/commit/b099e2f6bca12ca9ea7b2d1876f5442de7461065"
        },
        "date": 1779351908789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5097012,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27457,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 710603,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6798,
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
          "id": "4394edac78a1ad60bb94ee1ee44f78073e68451e",
          "message": "fix(regression): exit 2 on schema_version mismatch with regenerate hint\n\n`load_regression_baseline` in `crates/cli/src/regression/baseline.rs`\ndeserialized via `serde_json::from_str` without validating `schema_version`.\n`CheckCounts` carries `#[serde(default)]` on every field, so a baseline\nwritten under a different `REGRESSION_SCHEMA_VERSION` silently loaded with\nmissing fields defaulting to zero, masking real regressions and letting\nCI gates pass on a structurally invalid baseline.\n\nThe loader now validates `baseline.schema_version == REGRESSION_SCHEMA_VERSION`\nimmediately after parse, with two helpers (`format_schema_mismatch_error`,\n`format_missing_schema_version_error`) producing actionable messages that\nname the path, expected and actual versions, the writer fallow version,\nand a copy-pasteable `fallow check --save-regression-baseline <path>`\nregenerate command. `schema_version: 0` is special-cased as \"predates\nschema versioning\"; baselines missing the field entirely get the same\nhint instead of raw serde \"missing field\" noise. The pre-existing\nNotFound, read-error, parse-error paths plus the new mismatch path all\nroute through `emit_error`, so `--format json` CI consumers receive the\nstructured `{\"error\": true, \"message\": \"...\", \"exit_code\": 2}` envelope\non stdout instead of human text on stderr.\n\n`RegressionOpts` gains an `output: OutputFormat` field threaded through\n`compare_check_regression` into `load_regression_baseline`. The single-caller\n`build_regression_opts` helper is inlined into `DispatchContext::regression_opts`\nto keep the constructor under clippy's `too_many_arguments` limit. Existing\nbaselines with `schema_version: 1` continue to load unchanged; future\nschema bumps require regenerating.\n\nFixes #451.",
          "timestamp": "2026-05-21T09:34:37+01:00",
          "tree_id": "8d1793f02d64e543c622fb77a060716ab58e695e",
          "url": "https://github.com/fallow-rs/fallow/commit/4394edac78a1ad60bb94ee1ee44f78073e68451e"
        },
        "date": 1779352649557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5083868,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27443,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 712743,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6799,
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
          "id": "eae99cc6d6592d55bcac3a5ea97665cb3a0ed01d",
          "message": "fix(suppress): surface unknown issue-kind tokens as stale findings\n\nSuppression markers with a typo or an obsolete issue-kind name no longer\nsilently discard the entire line. `// fallow-ignore-next-line\nunused-export, complexity-typo` now suppresses `unused-export` normally\nand surfaces `complexity-typo` as a `stale-suppression` finding so the\nuser sees the typo instead of losing their suppression in silence.\n\n`parse_issue_kind_list` in `crates/extract/src/suppress.rs` switches from\nreturning `Option<Vec<IssueKind>>` to `(Vec<IssueKind>, Vec<String>)`,\naccumulating known kinds alongside unknown tokens. The new\n`UnknownSuppressionKind` type on `ModuleInfo` carries each token through\nthe parser, cache, and graph layers; `SuppressionContext::find_stale`\nemits one extra `StaleSuppression` per unknown token, reusing\n`SuppressionOrigin::Comment` with a new additive `kind_known: bool` wire\nfield so JSON, MCP, and CI consumers can distinguish unknown-kind tokens\nfrom stale-but-known kinds without parsing prose. The\n`StaleSuppression::explanation()` and `display_message()` helpers branch\non `kind_known` to render `'<token>' is not a recognized fallow issue\nkind. Did you mean '<closest>'? Other tokens on this line still apply.`\nwith a Levenshtein hint when an existing kind is within edit distance 2;\nSARIF, CodeClimate, and compact pick up the same actionable copy via the\nnew helper.\n\nCACHE_VERSION bumps 86 to 87 so warm `.fallow/cache` directories pick up\nthe new field on upgrade. The bundled GitHub Action annotation and\nsummary jq scripts plus the GitLab CI summary jq branch on\n`origin.kind_known == false` to render the typo-fix copy instead of \"no\nlonger matches any active issue.\" `ModuleInfo` size assertion bumps 472\nto 496 bytes for the new `Vec<UnknownSuppressionKind>` field. The\n`docs/output-schema.json` regenerates with the additive optional\n`kind_known` (non-required), and the generated TypeScript bindings in\n`editors/vscode/src/generated/` and `npm/fallow/types/` flow through.\n\nFixes #449.",
          "timestamp": "2026-05-21T09:48:33+01:00",
          "tree_id": "dca450d6eecafd0ba5583259d5a1d6d15c313da6",
          "url": "https://github.com/fallow-rs/fallow/commit/eae99cc6d6592d55bcac3a5ea97665cb3a0ed01d"
        },
        "date": 1779353461491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5069524,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27449,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708259,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6790,
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
          "id": "3b2733f372944ecb2d88b51c56e277efb202bd24",
          "message": "fix(suppress): skip stale emission when rule severity is off\n\nSuppression markers for a rule currently disabled (rules.<kind> == \"off\",\nincluding per-file overrides.rules) no longer surface as stale-suppression\nfindings. SuppressionContext::find_stale resolves rules once per file via\nResolvedConfig::resolve_rules_for_path and skips emission when the\nsuppression's target kind has severity Off. The marker documents\nintentional dormancy and becomes valid again when the rule is re-enabled.\n\nBlanket markers without a kind continue to surface as stale when nothing\nmatches, since they are not anchored to any specific dormant rule.\n\nA new exhaustive severity_for_kind helper in fallow-core maps every\nIssueKind to its corresponding RulesConfig field, so a future IssueKind\nvariant triggers a compile error here.\n\nFixes #482",
          "timestamp": "2026-05-21T10:41:36+01:00",
          "tree_id": "4be6dbdf1d6290d05e4b22d872c64bf9cd1dad1c",
          "url": "https://github.com/fallow-rs/fallow/commit/3b2733f372944ecb2d88b51c56e277efb202bd24"
        },
        "date": 1779356727714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5091044,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27467,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711059,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "6fd51d1802ec2c1e78944d839f761e1b2bdba63c",
          "message": "test(stale-suppressions): relax exact-count assertion to lower bound\n\n`total_stale_suppressions_count` asserted `len() == 4` against the\nstale-suppressions fixture. Future additions to the fixture (or sibling\ntests that grow the fixture's stale surface) would break this test\nwithout surfacing a real regression. Each of the 4 documented findings\nis already covered by a dedicated presence assertion above, so the\ncount test's safety net is \"no expected finding is silently dropped\"\nwhich `>=` preserves.\n\nRelax the assertion to `>= 4` and update the rationale comment.",
          "timestamp": "2026-05-21T10:47:16+01:00",
          "tree_id": "9289079f54eb3cef4f1602224889c6a8892030e5",
          "url": "https://github.com/fallow-rs/fallow/commit/6fd51d1802ec2c1e78944d839f761e1b2bdba63c"
        },
        "date": 1779356983636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5077844,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27447,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 662659,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6292,
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
          "id": "c224787ed950fa22c5d039f6f38358339e8b946f",
          "message": "fix(fix): refuse stale writes, batch commits atomically, compose cross-fixer edits\n\n`fallow fix` re-ran analysis in-process and then wrote each per-file rewrite\nvia a standalone `atomic_write`. If a parallel editor save, CI rebase, or\nother tool mutated a target file between the analysis read and the\nfix-time write, the line offsets computed during analysis landed on the\nwrong bytes and silently corrupted the file. Per-file writes also ran\nunbatched, so an OOM or transient I/O failure mid-run left the project in\na half-applied state where the surviving files' offsets no longer matched\nthe original analysis.\n\nCapture every parsed source file's xxh3 content hash during analysis (the\nsame value the extract cache already computes) and thread the\n`CapturedHashes` map through each fixer. Per-file entry recomputes the\nhash and emits a `skipped: true` record with `skip_reason: \"content_changed\"`\non mismatch; the run exits 2 so CI surfaces the mismatch instead of\ntreating a partial run as a clean no-op. The new `FixPlan` accumulator in\n`crates/cli/src/fix/plan.rs` stages every rewrite into a sibling\n`NamedTempFile`; the orchestrator commits the plan in one batch after all\nfixers run. Stage failure leaves every target file at its original\ncontent; rename failure mid-batch is reported per-path.\n\nTwo structural invariants the pre-refactor `atomic_write` provided were\npreserved explicitly: (1) the second fixer reads its source bytes from\nthe in-flight plan when the path is already staged, so cross-fixer\nsame-file edits compose into one coherent rewrite instead of overwriting\nvia last-write-wins; (2) the commit canonicalizes through symlinks so the\nfinal rename writes to the real target instead of replacing the link\nitself with a regular file.\n\nJSON envelope gains a top-level `skipped_content_changed: number` (always\npresent) and a new per-file entry shape\n`{type: \"skipped\", path: ..., skipped: true, skip_reason: \"content_changed\"}`\nin `fixes[]`. The existing `skipped` counter keeps its prior semantics\n(catalog / YAML guard skips only). `action/jq/summary-fix.jq` counts\nsuccessful fix attempts in its headline and surfaces\n`skipped_content_changed` in the prose. MCP `fix_preview` / `fix_apply`\ndescriptions and the VS Code `FallowFixResult` type document the new\nfield and skip reason.\n\nFive new regression tests cover round-trip clearing of targeted findings,\nbatch abort on a read-only target directory, the envelope-field contract,\ncross-fixer composition, and symlink follow-through.\n\nFixes #454.",
          "timestamp": "2026-05-21T10:59:03+01:00",
          "tree_id": "d682cc7ef0d9a814b4a6703777cad403627d6062",
          "url": "https://github.com/fallow-rs/fallow/commit/c224787ed950fa22c5d039f6f38358339e8b946f"
        },
        "date": 1779357673692,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5072476,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27535,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711075,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6797,
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
          "id": "c53b74337579d8c5bb7c1ba73984d2de92285d5d",
          "message": "fix(config): preserve target file mode in atomic_write and FixPlan commit\n\n`NamedTempFile` creates the temp with mode `0600` by default. Both the\npre-existing `fallow_config::atomic_write` and the issue #454\n`FixPlan::commit` persisted that temp directly, so a target file\npreviously at `0644` ended up at `0600` post-write. Shared workspaces and\nCI runners that rely on group / other read permissions broke silently\nbecause the JSON output reported `applied: true` and the bytes on disk\nwere correct; only the mode bits had drifted.\n\nIntroduce `fallow_config::preserve_target_mode(temp, target)` as a thin\nhelper called between the temp write and the rename. When the target\nexists, copy its mode (lower 12 bits) onto the temp; when the target\ndoes not yet exist (fresh creation, e.g. the duplicate-exports config-add\nfallback writing `.fallowrc.json` for the first time), leave the temp's\ndefault mode in place so the user's umask still applies via whatever\n`NamedTempFile` produces. Windows ACLs persist with the underlying file\nacross `MoveFileEx`, so the helper is a no-op on non-Unix targets.\n\nThree new regression tests pin the contract: `atomic_write` against an\nexisting target at `0644` (must preserve), `atomic_write` against a\nfresh path (must produce a non-zero mode), and `FixPlan::commit` against\nan existing target at `0644` (must preserve). A real-world smoke against\nthe issue #454 reproducer confirms the fix flows through:\n`fallow fix --yes` on a `0644` source file produces a `0644` post-fix\nfile instead of the previous `0600`.",
          "timestamp": "2026-05-21T11:15:24+01:00",
          "tree_id": "7261f97e84097f2d7885fd999984ba6d8c111ea4",
          "url": "https://github.com/fallow-rs/fallow/commit/c53b74337579d8c5bb7c1ba73984d2de92285d5d"
        },
        "date": 1779358681375,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5145308,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27589,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 713027,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6798,
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
          "id": "8c3c68497551b1d29543c804460321996a0a5e75",
          "message": "fix(workspace): surface malformed package.json and unreachable glob matches\n\nSeven silent-drop sites in crates/config/src/workspace/{mod.rs,parsers.rs}\nbecome typed WorkspaceDiagnostic values carrying a kind discriminator\n(undeclared-workspace, malformed-package-json, glob-matched-no-package-json,\nmalformed-tsconfig, tsconfig-reference-dir-missing). Severity is per site: a\nmalformed root package.json exits 2 at config load (mirrors #468); declared\nworkspace package.json malformed warns and continues so analysis still runs\non the rest; glob-matched-no-package-json warns only when the path is not in\nthe conventional skip list and not in user ignorePatterns; shallow-scan\ncandidates stay silent because the user did not declare them; missing\ntsconfig.json stays silent. Diagnostics emit via deduplicated tracing::warn!\n(process-wide OnceLock keyed on canonical-root + kind + path) and land in a\nshared registry so the JSON envelope on check / dupes / health carries a new\noptional workspace_diagnostics[] field.\n\nA new fallow list --workspaces flag and a dedicated fallow workspaces\nsubcommand expose the discovery topology for introspection. The legacy\ndiscover_workspaces back-compat wrapper now routes through a silent\ncollector that does NOT emit, so sibling analyze + file-discovery callers\nno longer re-warn on paths the user already excluded via ignorePatterns.\nThe analyze pipeline's undeclared-workspace pass also folds into the same\nregistry and suppresses entries that already carry a MalformedPackageJson\ndiagnostic, so a typo'd workspace is no longer double-reported. Path\nnormalisation handles macOS /private/tmp canonicalisation symmetrically;\nPackageJson::load strips a leading UTF-8 BOM so Windows-authored or\nvite-fixture-style configs do not surface as false positives.\n\nFixes #473.",
          "timestamp": "2026-05-21T11:23:46+01:00",
          "tree_id": "0770a3196b14e7e72198f1e234c0302132f9905a",
          "url": "https://github.com/fallow-rs/fallow/commit/8c3c68497551b1d29543c804460321996a0a5e75"
        },
        "date": 1779359175491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5139562,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27589,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 715167,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6799,
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
          "id": "85f3507ae3fa57993d3f6517eb8b50f97b62d45f",
          "message": "fix(signal): install SIGINT/SIGTERM handlers + reap spawned subprocesses\n\n* feat(signal): install SIGINT/SIGTERM handlers + scoped child registry (#477)\n\nWires a process-wide signal handler into the CLI so long-running\nspawned children (fallow-cov sidecar, npm install, self-invoked\nfallow health, git log churn analysis, git worktree audit ops) are\nkilled when the user hits Ctrl+C or CI sends SIGTERM.\n\nNew module `crates/cli/src/signal/`:\n- `ChildRegistry` keyed by monotonic AtomicU64, stores PIDs only;\n  signal handler kills by PID (libc kill -9 on Unix, TerminateProcess\n  on Windows) so the wrapper can own the Child outright and call\n  wait_with_output normally.\n- `ScopedChild` RAII wrapper: register on spawn, deregister on\n  wait/drop.\n- Unix listener: signal-hook 0.4 iterator on a dedicated std::thread\n  (blocking sigwait sidesteps async-signal-safety constraints).\n- Windows listener: SetConsoleCtrlHandler via windows-sys\n  (CTRL_C/BREAK -> 130, CTRL_CLOSE/LOGOFF/SHUTDOWN -> 143).\n- One-shot drain guard + bounded try_wait budget (500ms Unix, 1500ms\n  Windows).\n\nRefactored spawn sites to ScopedChild:\n- crates/cli/src/health/coverage.rs::run_sidecar (fallow-cov)\n- crates/cli/src/coverage/mod.rs::install_sidecar + run_health_analysis\n- crates/cli/src/audit.rs BaseWorktree::{create, reuse_or_create} +\n  remove_audit_worktree\n- crates/core/src/churn.rs::analyze_churn_events via set_spawn_hook\n  function pointer so core stays cli-independent\n\nWatch mode (crates/cli/src/watch.rs) opts into cooperative shutdown\nvia GracefulModeGuard: SIGINT only sets a flag, watch loop polls via\nrecv_timeout(200ms) and exits cleanly with code 0 because Ctrl+C is\nthe documented termination path.\n\nLSP shutdown (crates/lsp/src/main.rs) now cancels via Arc<AtomicBool>:\nrun_analysis checks the flag at entry and after spawn_blocking so\npost-shutdown publishes are suppressed. Honest doc-comment: rayon\nwork in flight runs to completion on the blocking thread pool; the\n250ms grace is for quiescence, not cancellation.\n\nTests:\n- 8 unit tests under crates/cli/src/signal/*\n- 2 integration tests under crates/cli/tests/signal_tests.rs using\n  sub-process pattern via env!(\"CARGO_BIN_EXE_fallow\") +\n  FALLOW_TEST_SIGNAL_HELPER=1; asserts exit 130/143 + inner sleep PID\n  reaped within 5s.\n- 2 LSP unit tests verifying shutdown flips cancellation and\n  run_analysis short-circuits afterwards.\n\nCloses #477\n\n* fix(signal,docs): apply review fixes + changelog + cli-crate rule note (#477)\n\nReview fixes from rust-reviewer + lsp-reviewer:\n\n- Drop unused `ScopedChild::kill` method (was YAGNI; signal handler\n  covers cancel via PID side channel).\n- Remove dead `EXIT_CODE` static from signal/windows.rs (its stored\n  value was never read; `handle_signal` takes `exit_code` as a\n  parameter directly).\n- Update registry.rs + scoped_child.rs module docs to say `kill -9\n  <pid>` shell exec on Unix instead of the misleading `libc::kill`\n  (we avoid adding `libc` as a workspace dep).\n- Drop the unnecessary `pid as i32` cast + #[expect] annotation in\n  kill_pid (the shell command takes a string).\n- Tighten `scoped_child::output` to unconditionally set\n  `stdin(Stdio::null())` plus piped stdout/stderr, matching\n  `Command::output` semantics exactly.\n- Replace the vacuous `try_lock().is_ok()` assertion in the LSP\n  short-circuit test with `backend.results.read().await.is_none()`,\n  which is the actual post-condition that proves cancellation\n  short-circuited `spawn_blocking`.\n\nDocs:\n- CHANGELOG.md [Unreleased] entry under Fixed.\n- .claude/rules/cli-crate.md `signal/` section with adoption\n  guidance + cross-platform notes.\n\nRefs #477\n\n* fix(signal): codex review fixes for #477\n\nTwo BLOCK-level findings from parallel /fallow-review (Codex):\n\n1. **changed_files.rs git subprocesses were unregistered.**\n   crates/core/src/changed_files.rs:117,147 still called raw\n   git_command(cwd,...).output() through git_env, so SIGINT delivered\n   to the parent during watch + --changed-since left git rev-parse /\n   git diff / git ls-files children running. Added the same\n   ChurnSpawnHook-style function pointer as crates/core/src/churn.rs\n   (set_spawn_hook + spawn_output) and installed it from cli's main()\n   pointing at signal::scoped_child::output. Core stays cli-\n   independent; the indirection costs nothing for embedders / tests\n   that don't install a hook.\n\n2. **Watch graceful mode skipped registry drain.**\n   handle_signal returned early on GRACEFUL=true BEFORE\n   drain_and_kill, so a Ctrl+C during analyze_and_report (which spawns\n   git via changed_files / churn) let those git subprocesses run to\n   completion - defeating the contract issue #477 spelled out for\n   watch mode. Moved drain_and_kill BEFORE the graceful check; the\n   graceful path now always reaps in-flight children but returns\n   instead of process::exit, letting the watch loop's outer\n   is_shutting_down() check terminate cleanly with exit 0.\n\nRegression coverage:\n- New integration test sigint_in_graceful_mode_drains_children_but_does_not_exit\n  asserts the post-fix behavior. Achieved via a new\n  FALLOW_TEST_SIGNAL_HELPER_GRACEFUL=1 env-var gate on the test-helper\n  subcommand that flips graceful mode before spawning the inner sleep.\n- Existing integration tests for non-graceful 130/143 paths still\n  pass.\n\nAlso (non-blocking CONCERN from Codex):\n- Documented the PID-recycle race in scoped_child.rs module doc\n  (microseconds-wide window between wait_with_output returning and\n  deregister; consequence is one stray SIGKILL during shutdown).\n\nRefs #477",
          "timestamp": "2026-05-21T12:37:23+01:00",
          "tree_id": "5f72da805ba34021671aae06988c1c6010b26b0b",
          "url": "https://github.com/fallow-rs/fallow/commit/85f3507ae3fa57993d3f6517eb8b50f97b62d45f"
        },
        "date": 1779363575123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5093321,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27535,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 655911,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6267,
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
          "id": "ab3a66f3b831f5bb9c9720d837d0faab77aceb91",
          "message": "fix(ci-template): symlink bundled GitLab templates to workspace sources\n\nReplaces the byte-copy of `crates/cli/templates/ci/{gitlab-ci.yml,\nscripts/comment.sh, scripts/review.sh}` with git symlinks pointing at the\ncanonical workspace `ci/` files. Contributors now edit one source of\ntruth; `cargo package` dereferences the symlinks into regular files so\nthe published crate stays self-contained.\n\nRemoves the `bundled_templates_match_workspace_sources` byte-drift test\nin favour of the inode equivalence the symlink provides. The companion\n`gitlab_ci_template_for_loops_match_vendored_files` test still guards\nthe `GITLAB_FILES` list against `for f in ...` loop drift inside the\ntemplate.\n\nDocuments the Windows prerequisite (`git config --global core.symlinks\ntrue`) in `CONTRIBUTING.md` and updates `.claude/rules/cli-crate.md` to\ndescribe the new packaging contract.\n\nFixes #518.",
          "timestamp": "2026-05-21T12:49:52+01:00",
          "tree_id": "0e813a531d3e692f016e49c9dc118c7dc1238478",
          "url": "https://github.com/fallow-rs/fallow/commit/ab3a66f3b831f5bb9c9720d837d0faab77aceb91"
        },
        "date": 1779364374575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5101042,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27579,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708539,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6795,
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
          "id": "1e4e082a906ced586687ddf01f063f1145386dca",
          "message": "fix(cache): write-time size cap + config-aware invalidation\n\n* feat(cache): write-time cap + LRU eviction + config-aware invalidation\n\nCloses #466.\n\nTwo structural gaps in `crates/extract/src/cache/`:\n\n1. Write-time size cap. The 256 MB cap was only enforced at load time, so\n   long-lived developer caches silently discarded everything once they crossed\n   the threshold. `CacheStore::save` now encodes once, evicts LRU entries when\n   the encoded size exceeds 80% of the cap, re-encodes after eviction, and\n   writes atomically via tmp+rename. The eviction floor honors the user's cap\n   (single-entry overshoot logs `tracing::warn!` rather than silently lying).\n\n   `last_access_secs: u64` lives on `CachedModule`. It is set at insertion\n   time (cache miss or content change) and NOT refreshed on cache-hit reads;\n   refreshing on read would collapse the LRU because `update_cache`\n   iterates every in-scope file every run.\n\n   Override via `FALLOW_CACHE_MAX_SIZE` env var or `cache.maxSizeMb` config\n   field (env var wins). No CLI flag, matching the ecosystem convention\n   (knip, eslint, biome, turbo all use config or implicit caps).\n\n2. Config-aware invalidation. The cache key is `(file_path, content_hash)`\n   plus a global `CACHE_VERSION`. Disabling a plugin or removing a\n   `framework: [...]` entry left the cache stale. The cache header now\n   carries a `config_hash: u64` computed via xxh3 over a sorted list of\n   active external plugin names plus inline framework definition names. A\n   mismatch on load discards the cache (same shape as a version mismatch).\n\n   ADR-009 documents the narrow ingredient set, the rationale for excluding\n   `entry`/`ignorePatterns` (detection inputs, not extraction inputs), the\n   plugin-file-content limitation, and the contract for adding new\n   ingredients.\n\n`CACHE_VERSION` bumps 87 -> 88 (new field on `CachedModule`, new header\nfield on `CacheStore`). A `tracing::info!` fires on the version-mismatch\nload path so users see the one-time rebuild.\n\nEviction is `tracing::debug!` by default and promotes to `tracing::info!`\nonly when at least 25% of entries are removed in a single save, so warm-cache\nsaves stay silent.\n\nPre panel-review: dropped the proposed `--cache-max-size` global flag,\nadopted env-var + config-field surface, replaced two-encode eviction with\nsingle-encode plus an estimated cost check, replaced the \"100-entry floor\"\nwith always-honor-cap-plus-warn, added atomic save.\n\n* fix(cache): preserve last_access_secs on metadata-only refresh + safe BPS math\n\nPost review-fix for #466.\n\nTwo correctness gaps the rust-reviewer surfaced:\n\n1. `update_cache`'s `touch`-handling branch (mtime/size differ, content\n   hash matches) previously rebuilt the cache entry via `module_to_cached`,\n   which stamps the current epoch second into `last_access_secs`. Result:\n   any build pipeline that `touch`es files before invoking fallow (common\n   with sed-based codegen and `make` rebuilds) would refresh every entry's\n   LRU recency on every run, defeating the eviction order. Now: the\n   refreshed entry preserves the existing `last_access_secs`, so the LRU\n   continues to discriminate even across `touch`-heavy workflows.\n\n2. `max_size_bytes.saturating_mul(EVICTION_TRIGGER_BPS) / 10_000` could\n   saturate at pathologically-large caps (above ~2.3 PB) and produce a\n   trigger threshold half of the intended value. Divide-first ordering\n   keeps the arithmetic well below `usize::MAX` at every realistic cap,\n   with at most 0.008% rounding error. Applied to both the trigger and\n   target computations. `initial_entries * EVICTION_SIGNIFICANT_BPS` stays\n   multiply-then-divide since `initial_entries` is bounded by the file\n   count (typically 100k-1M) and small caches need the precision to keep\n   the significance threshold non-zero.\n\n* docs(changelog): cache hardening Unreleased entry for #466\n\n* fix(cache): honor user cache cap on load + emit upgrade log on decode fail\n\nPost /fallow-review + Codex BLOCK fixes for #466.\n\n(1) `CacheStore::load` now takes `max_size_bytes` so a user setting\n    `cache.maxSizeMb = 512` (or `FALLOW_CACHE_MAX_SIZE=512`) can write a\n    400 MB cache and load it back; the previous code gated load on the\n    hardcoded `DEFAULT_CACHE_MAX_SIZE` (256 MB) and silently discarded any\n    larger cache on the next run. The load ceiling is now\n    `max(max_size_bytes, DEFAULT_CACHE_MAX_SIZE)` so a misconfigured tiny\n    cap (e.g. `FALLOW_CACHE_MAX_SIZE=1`) does NOT trash a valid existing\n    cache; user caps take effect on the next SAVE via the eviction logic.\n    All four load callsites updated (`core/lib.rs`, `cli/flags.rs`,\n    `cli/health/mod.rs`, `cli/coverage/analyze.rs`) via a new\n    `fallow_core::resolve_cache_max_size_bytes(&config)` helper.\n\n(2) The upgrade `tracing::info!(\"Cache format upgraded, rebuilding ...\")`\n    log now fires on bitcode decode FAILURE as well as version mismatch.\n    Across a `CACHE_VERSION` bump the on-disk schema typically changes\n    shape, so the new `CacheStore` struct cannot deserialize old bytes\n    and bitcode returns an error before reaching the version check.\n    The old code went silent on this common path; now both paths emit\n    the same info log.\n\n(3) Regenerated `schema.json` to publish the new `cache.maxSizeMb`\n    config field + `CacheConfig` definition for IDE autocomplete.\n\n(4) Added `FALLOW_CACHE_MAX_SIZE` to the in-repo env var inventories\n    (`CLAUDE.md`, `.claude/rules/cli-crate.md`) so future contributors\n    discover it. Companion-repo docs already carry it.\n\nTwo new regression tests in `crates/extract/src/cache/tests.rs`:\n- `cache_load_honors_user_max_size_above_default`: covers both the\n  \"user cap > default\" load path and the \"user cap < default does not\n  discard valid cache\" floor semantics.\n- `cache_load_returns_none_on_bitcode_decode_failure`: covers the\n  upgrade-path decode failure that the old test (which mutated the\n  version byte inside the new schema) did not exercise.",
          "timestamp": "2026-05-21T12:57:52+01:00",
          "tree_id": "ed9d1910ed8aaf810bebd8677dc6008b534a7007",
          "url": "https://github.com/fallow-rs/fallow/commit/1e4e082a906ced586687ddf01f063f1145386dca"
        },
        "date": 1779364822565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5104906,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27578,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711075,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6797,
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
          "id": "7b6ae40f93ded729402406f422930214763f3089",
          "message": "fix(migrate): warn on dropped knip rules + glob-drift caveat\n\n`fallow migrate` previously dropped three classes of knip input without\ndiagnostic: rule keys under `rules` / `exclude` / `include` that were\nneither in `KNIP_RULE_MAP` nor in `KNIP_UNMAPPABLE_ISSUE_TYPES` (typos,\nfuture knip rules, internal rules the migrator had not yet catalogued)\ndisappeared from the generated config, and `entry` / `ignorePatterns`\nglobs were copied verbatim with no statement about knip's glob engine vs\nfallow's `globset` potentially diverging on corner cases.\n\n`warn_unmapped_rule_key` in `crates/cli/src/migrate/knip_fields.rs` now\nemits a `MigrationWarning` for every untranslated key across all three\nfields, with two shapes: documented-unmappable issue types keep the\nexisting message; completely-unknown keys get a new \"unknown knip issue\ntype\" message with a docs-URL suggestion. `run_migrate` appends a single\n`Note:` line after the warnings section when knip was a migration source\nAND the migrated config carries `entry` or `ignorePatterns`, suppressed\nfor jscpd-only and rules-only knip configs. The warnings header is now\nsingular/plural-aware since a single typo'd rule is the most common\ncount-one case. Content-detected `--from custom-name.json` paths are\ntagged internally with `(knip config)` so the glob caveat fires through\nthat branch; a `source_head` helper strips the tag (via `rsplit_once`\nplus closing-paren guard, so paths containing their own ` (...)` segment\nare preserved) before printing the user-visible \"Migrated from:\" line\nand the generated `// Migrated from ...` header. `OutputFormat::pick`\nruns through the same helper so `.jsonc` auto-mirror keeps working\nthrough tagged sources.\n\nA new `migrate_roundtrip_globs_match_knip_documented_semantics`\nintegration test builds a Next.js-shaped fixture project, runs the\nmigrator, runs `fallow list --files` against the migrated config, and\nasserts the discovered file set exactly matches a hand-recorded ground\ntruth derived from knip's documented glob semantics; new unit tests\ncover the unknown-key warning at all three field paths, the glob-caveat\ngating across knip / jscpd / combined sources, the `source_head` edge\ncases (path with parens, unclosed paren, empty input), and a small set\nof `knip_glob_equivalence_*` assertions documenting where both engines\nagree today plus one negative case for `!` negation drift.\n\nFixes #457.",
          "timestamp": "2026-05-21T13:12:17+01:00",
          "tree_id": "c8d51d269fb703648629e8b71495d2cba501e478",
          "url": "https://github.com/fallow-rs/fallow/commit/7b6ae40f93ded729402406f422930214763f3089"
        },
        "date": 1779365692427,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5096130,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27573,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708883,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "99c315052e24624532a7ae160650f873e26b0b12",
          "message": "chore(ci): unblock Documentation + Windows ARM64 jobs\n\nTwo CI failures landed on main in the back-to-back merges of #473\n(workspace diagnostics) and #477 (signal handlers). Both are\none-line follow-ups; #466 caught them on its post-merge run.\n\nDocumentation job: `discover_workspaces` in `crates/config/src/\nworkspace/mod.rs:70` referenced the private `emit_warn` helper via\na rustdoc intra-doc link `[`emit_warn`]`. `-D warnings` promotes\n`rustdoc::private_intra_doc_links` to a hard error since `emit_warn`\nis `pub(super)` inside the sibling `diagnostics` module. Switched to\na plain backtick code span plus a short pointer to where the helper\nlives so the reader can still find it without the link.\n\nWindows ARM64 Native Compile job: `crates/cli/src/signal/windows.rs`\nimported `BOOL` from `windows_sys::Win32::Foundation::BOOL`, which\nno longer resolves under windows-sys 0.61. Confirmed via the crate\nsource that `BOOL` now lives at `windows_sys::core::BOOL` and matches\nthe `SetConsoleCtrlHandler` signature `add: windows_sys::core::BOOL\n-> windows_sys::core::BOOL`. Updated the import path and added a\ncomment explaining the move so the next windows-sys bump audit picks\nit up.",
          "timestamp": "2026-05-21T13:24:18+01:00",
          "tree_id": "404c3d2146d38996544a601c21b3e63ecdff1894",
          "url": "https://github.com/fallow-rs/fallow/commit/99c315052e24624532a7ae160650f873e26b0b12"
        },
        "date": 1779366483744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5098586,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27587,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 710731,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "9d47eda745e6e35534bd4b578b0f4bc77653379a",
          "message": "fix(lsp): skip stale diagnostic publishes when document version moves mid-analysis\n\n* fix(lsp): skip stale diagnostic publishes when document version moves mid-analysis\n\nThe LSP captured analysis input at run_analysis entry and published its\noutput unconditionally, even when the user had typed further between\nspawn_blocking dispatch and publish. Squiggles ended up pinned to lines\nthe user no longer wrote.\n\nTrack per-URI document `version` alongside the cached text (LSP supplies\nit on did_open / did_change). Snapshot the live version map once at\nrun_analysis entry, thread the snapshot through to\npublish_collected_diagnostics, and per URI:\n\n  - If the live version has advanced past the snapshot (strict `>`), or\n    if the document was closed mid-run (in snapshot, absent from live),\n    skip publish + cache update. Still insert the URI into `new_uris`\n    so the next-run stale-clearing branch does not erase the last-valid\n    diagnostics from the client.\n  - Otherwise publish as before, passing `Some(snapshot_version)` to\n    `publish_diagnostics` so LSP 3.17 clients can use the standard\n    PublishDiagnosticsParams.version slot.\n\nThe single-flight `analysis_guard`, did_save debouncer, and pull-model\ndiagnostic handler are unchanged. The stale-clearing branch mirrors the\nsame skip and reads all needed live versions before acquiring the\n`cached_diagnostics.write()` lock (avoids holding a write-lock across an\nawait on `documents.read()`).\n\nAdds 7 tests covering: stale-skip on advanced version, equal-version\npublishes, URI-not-in-snapshot publishes, did_close-mid-run skip,\n`Some(snapshot_version)` is threaded to publish_diagnostics, stale-\nclearing branch skips advanced URIs, skipped URIs land in\nprevious_diagnostic_uris.\n\nFixes #450\n\n* docs(lsp): document diagnostic publish staleness invariant + changelog\n\nAdds a \"Diagnostic publish staleness\" section to .claude/rules/lsp-server.md\ncovering the snapshot-then-compare semantics, the stale-skip + new_uris\npreservation invariant, the LSP 3.17 PublishDiagnosticsParams.version slot\nthreading, and the pull-model cache-at-last-valid behavior. Adds the\nmatching user-facing CHANGELOG entry under Unreleased.\n\nCompanion to #450.\n\n* fix(lsp): also treat opened-mid-run URIs as stale; tighten staleness contract\n\nCodex's parallel /fallow-review on the #450 stale-publish fix BLOCKed on a\nrace in `uri_is_stale`: a URI absent from the snapshot but PRESENT in\n`live_versions` was treated as non-stale. That covered the legitimate\n\"cross-file diagnostic on a never-opened file\" case, but it also let an\n`did_open` landing between snapshot capture and publish slip through:\nthe analysis ran without seeing the just-opened buffer, the publish went\nout with `version: None` (no snapshot for that URI), and the client could\nnot version-discard the mismatched payload server-to-client.\n\n`uri_is_stale` now requires a URI to be absent from BOTH the snapshot AND\nthe live `documents` map to count as non-stale. Three conditions now\nshort-circuit to STALE: live > snapshot (edited mid-run), snapshot\npresent + live absent (closed mid-run), snapshot absent + live present\n(opened mid-run). Only the (None, None) case publishes unconditionally,\ncovering cross-file diagnostics anchored to files the user never opened\nvia the LSP (`package.json`, `pnpm-workspace.yaml`).\n\nAdds `publish_skips_uri_when_opened_mid_run`; renames the existing\n`publish_emits_when_uri_absent_from_snapshot` to\n`publish_emits_when_uri_absent_from_snapshot_and_live` and tightens its\ncomment so the contract is explicit. Updates the LSP staleness invariant\nsection in `.claude/rules/lsp-server.md` to match the corrected\nsemantics.\n\nRefs #450.",
          "timestamp": "2026-05-21T13:36:44+01:00",
          "tree_id": "d0af9dda8e722a2896fac93f1b68e79904549967",
          "url": "https://github.com/fallow-rs/fallow/commit/9d47eda745e6e35534bd4b578b0f4bc77653379a"
        },
        "date": 1779367161229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5152962,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27607,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 715203,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6798,
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
          "id": "9035c4b2e8b10bc1d444b32a36732c548d3ca581",
          "message": "chore(ci): add schema.json drift gate against FallowConfig::json_schema()\n\nMirrors the docs/output-schema.json drift gate (issue #338) on the\nsymmetric config-input chain. A new `#[cfg(test)] mod config_schema_drift`\nin crates/cli/src/init.rs parses the committed schema.json and the live\n`FallowConfig::json_schema()` output to `serde_json::Value` and\n`assert_eq!`s them, guarded by `is_object()` against the production\ncode's `unwrap_or_default()` swallowing a future schemars failure into\n`Value::Null`. On mismatch a three-line panic points at the regen\ncommand (`cargo run --bin fallow -- config-schema > schema.json`).\n\nThe include_str! path resolves inside the crate via a git symlink\ncrates/cli/schema.json -> ../../schema.json so cargo package dereferences\ninto a self-contained tarball, matching the existing pattern at\ncrates/cli/templates/ci/gitlab-ci.yml. The ci.yml `rust:` paths-filter\nnow also matches edits to schema.json directly so schema-only PRs still\ntrigger the check job; `schema.json` is added to the `npm-package:`\nfilter too so the new `diff schema.json npm/fallow/schema.json` step\nfires at PR time on schema-only PRs. Both ci.yml and release.yml now\nfollow `cp schema.json npm/fallow/schema.json` with a `diff` invariant\nguard so a future refactor that drops or moves the cp fails loud rather\nthan shipping a stale schema to npm consumers.\n\nFixes #440.",
          "timestamp": "2026-05-21T14:08:02+01:00",
          "tree_id": "8877b82009ffadd726fc9aa70a78fb47ee53c226",
          "url": "https://github.com/fallow-rs/fallow/commit/9035c4b2e8b10bc1d444b32a36732c548d3ca581"
        },
        "date": 1779369019105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5087858,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27573,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 710587,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6793,
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
          "id": "7755f3637f5f5420f87c0ae37a99c18daf93e77e",
          "message": "feat(audit): age-based GC for persistent reusable base-snapshot caches\n\n* feat(audit): age-based GC for persistent reusable base-snapshot caches\n\n`fallow audit` keys persistent worktree caches in\n`std::env::temp_dir()/fallow-audit-base-cache-<repo_hash>-<sha>`. Until\nnow these never expired: every distinct base SHA the user ever audited\naccumulated a cache entry, easily reaching hundreds of MB to multiple\nGB on developer machines after weeks of daily audits.\n\nAdd `sweep_old_reusable_caches` invoked at the top of `execute_audit`\nthat walks git-registered worktrees, filters to reusable cache paths,\nand removes entries whose sidecar `.last-used` mtime exceeds the\nconfigured age. The sidecar is touched on every cache-hit reuse so the\nstaleness signal stays current even when the cache directory itself\nis not mutated.\n\nConfiguration:\n- env: FALLOW_AUDIT_CACHE_MAX_AGE_DAYS (wins)\n- config: `audit.cacheMaxAgeDays` (Option<u32>)\n- default: 30 days\n- `0` from either source disables the sweep\n- Invalid env values silently fall back to config / default\n\nConcurrency invariants:\n- Each candidate is gated by `ReusableWorktreeLock::try_acquire`; the\n  sweep skips on contention so an in-flight `fallow audit` mid-rebuild\n  is not disturbed.\n- The `.lock` file is NEVER deleted. An unlinked-but-still-flocked\n  inode plus a racer's `open(O_CREAT)` at the same path would produce\n  two processes each holding a kernel flock on different inodes. Lock\n  files are tens of bytes; leaking them is harmless.\n\nPre-upgrade grace: existing caches lacking a sidecar (created before\nthis feature shipped) are NOT removed on first encounter; instead the\nsweep seeds a fresh sidecar so the next invocation can age from real\nlast-use. Without this grace, the dir's own mtime (= creation date on\nPOSIX) would wipe every legitimately-warm pre-upgrade cache on the\nfirst run after upgrade.\n\nObservability: per-entry removal failures emit `tracing::warn!`; the\nsweep emits a `tracing::info!` summary line on non-empty reclaim and\na stderr \"fallow: reclaimed N stale base-snapshot caches\" when\n`!opts.quiet`.\n\nFixes #498\n\n* docs(audit): document #498 GC threshold env var + config field\n\n- CHANGELOG.md: user-facing bold entry under [Unreleased] Fixed.\n- .claude/rules/cli-crate.md: env var section + audit.rs bullet (#498 lifecycle).\n- docs/backwards-compatibility.md: list FALLOW_AUDIT_CACHE_MAX_AGE_DAYS as stable.\n- schema.json: regenerated from updated AuditConfig.\n\nRefs #498\n\n* fix(audit): only count actually-removed cache entries in reclaim summary\n\nrust-reviewer flagged that `removed += 1` unconditionally incremented\nthe counter after the `remove_dir_all` match block. When the directory\nsurvived removal (the `warn!` branch), the summary line \"fallow:\nreclaimed N stale base-snapshot caches\" and the `tracing::info!` event\nboth over-counted by including entries whose on-disk content was NOT\nactually reclaimed. The git registration cleanup still happens in that\nbranch (via the preceding `remove_audit_worktree`), so `git worktree\nprune` remains correct; only the user-facing count was misleading.\n\nTrack dir-removal success and only bump the counter on Ok / NotFound.\n\nRefs #498\n\n* fix(audit): stamp sidecar on fresh-create so age is measured from creation\n\n`AuditConfig::cache_max_age_days`'s docstring contract reads\n\"Maximum age (in days since last reuse or fresh create)\". The shipped\ncode touched the sidecar on the cache-hit branch only, leaving every\nfreshly-created cache without a sidecar until the NEXT audit\ninvocation grace-seeded it. For one-off base SHAs the cache would\nsurvive the first stale sweep regardless of age; for users who run\naudit infrequently the documented 30-day window expanded into\n\"30 days starting from the next audit run\", silently doubling the\neffective lifespan.\n\nStamp the sidecar at the end of the fresh-create branch in\n`BaseWorktree::reuse_or_create`, mirroring what the cache-hit branch\nalready does. The sweep's sidecar-absent grace path is still\nload-bearing for pre-upgrade caches created before this feature\nshipped (it seeds them on first encounter rather than wiping).\n\nAdd a regression test that pins both halves of the contract: a fresh\n`reuse_or_create` writes a near-now sidecar AND backdating that\nsidecar causes the next sweep to actually remove the entry.\n\nRefs #498\n\n* docs(rules): drop em-dash on touched audit.rs bullet in cli-crate.md\n\nCLAUDE.md style rule forbids em-dashes in any output. My #498 edit\nappended an \"Age-based GC\" paragraph to the audit.rs bullet, which\nre-emits the bullet's leading \"audit.rs — Audit command:\" through git\ndiff. Swap that em-dash for a colon + parenthesis on the line I\ntouched so the diff is em-dash-clean. Other untouched bullets in the\nsame file retain their em-dashes (drive-by reformatting is out of\nscope for this PR).",
          "timestamp": "2026-05-21T14:45:20+01:00",
          "tree_id": "361bacc1b8750cb701ca6ac8f280b6d04b45776c",
          "url": "https://github.com/fallow-rs/fallow/commit/7755f3637f5f5420f87c0ae37a99c18daf93e77e"
        },
        "date": 1779371349815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5080402,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27564,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708131,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6789,
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
          "id": "bfe89df1823479e7d3dbe6d44472e0bab3ed605f",
          "message": "chore(audit): name lock-lifecycle invariant in test comments substantively\n\nTest comments and assertion messages in `reusable_cache_gc_preserves_lock_file_after_removal`\nreferenced an internal review-process label rather than the substantive\ninvariant they pin. Switch to \"lock-file lifecycle invariant\" so the\ntest reads correctly to future maintainers without dependencies on\nout-of-tree review nomenclature.\n\nNo functional change.",
          "timestamp": "2026-05-21T14:50:11+01:00",
          "tree_id": "1a3968b6e5dfc332584e928b2c97e0580a9b77b1",
          "url": "https://github.com/fallow-rs/fallow/commit/bfe89df1823479e7d3dbe6d44472e0bab3ed605f"
        },
        "date": 1779371568737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5083090,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27565,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 656799,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6285,
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
          "id": "ec210c3b255b8f1d7594b15773461ff9e1df1154",
          "message": "fix(fix): preserve UTF-8 BOM + skip mixed CRLF/LF files\n\nTwo file-encoding correctness gaps in `fallow fix` are closed in one\npass. Previously, mixed CRLF/LF source files were silently mangled\nbecause `read_source` detected the line ending by `contains(\"\\r\\n\")`\nand then split exclusively on that style; lines that did not end with\nthe detected separator got embedded into adjacent lines and the fix\nwrote to the wrong line. Now `read_source` returns `EncodingError::\nMixedLineEndings` on detection, the orchestrator translates that into\n`SkipReason::MixedLineEndings`, the JSON envelope grows an additive\nsibling counter `skipped_mixed_line_endings: N` next to the existing\n`skipped_content_changed`, and the run exits with code 2. The skip is\nNOT self-healing: a stderr line names `dos2unix` and `git config\ncore.autocrlf input` as the required remediation. `FixPlan::skip`\ndedupes on `(path, reason)` so a file carrying findings for multiple\nfixers (e.g. an unused export AND an unused enum member) surfaces as\none entry, not one per fixer.\n\nUTF-8 BOM handling becomes symmetric. The extract layer's three read\nentry points (`parse_single_file_cached`, `parse_single_file`,\n`parse_from_content`) now strip the leading BOM before hashing and\nbefore parsing, so `content_hash`, `compute_line_offsets`, and the\noxc parser all see a consistent post-BOM byte sequence; line numbers\non BOM-bearing files no longer shift by the codepoint. The fix layer's\n`stage_fixed_content` re-prepends the BOM bytes (`EF BB BF`) on write\nwhen the source had one, so Windows-authored files round-trip with\ntheir BOM intact. `parse_source_to_module` carries a defense-in-depth\nstrip for out-of-tree callers (fuzzers, integration fixtures). fallow\nneither adds nor removes a BOM. The extraction cache `CACHE_VERSION`\nbumps from 88 to 89 because pre-fix caches keyed hashes over BOM-\nincluded bytes; first run after upgrade is uncached, subsequent runs\nare warm.\n\nThe `fix_preview` and `fix_apply` MCP tool descriptions are updated to\nflag the non-self-healing nature of the mixed-EOL skip for AI agents.\nCompanion-repo docs (fallow-docs/cli/fix.mdx + fallow-skills/.../cli-\nreference.md) get a new \"File encoding contract\" section covering both\nhalves.\n\nFixes #475.",
          "timestamp": "2026-05-21T15:25:53+01:00",
          "tree_id": "2aed5ba11fc461928f0a95014d0ddd36f63174fb",
          "url": "https://github.com/fallow-rs/fallow/commit/ec210c3b255b8f1d7594b15773461ff9e1df1154"
        },
        "date": 1779373718082,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5113866,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27598,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711280,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6867,
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
          "id": "3e8f66272385783858d138445678968cb31c6119",
          "message": "feat: surface re-export cycles as user-visible findings\n\n* feat(types,config,graph,core,cli): scaffold re-export-cycle finding (WIP)\n\nAdds the new `re-export-cycle` issue type across the types, config,\ngraph crates plus the cross-cutting match-arm + struct-literal sites in\ncore, cli, and regression baseline. Detection logic already exists in\n`crates/graph/src/graph/re_exports/mod.rs::find_re_export_cycles`\n(formerly `warn_on_re_export_cycles`, added in #442); this commit gives\nit a structured return type, threads cycles onto the ModuleGraph, and\nprepares every downstream literal so the rest of the pipeline (D-L from\n.plans/issue-515-re-export-cycles.md) can be hooked up incrementally\nwithout per-step compile breakage.\n\ntypes:\n- `ReExportCycle { files, kind: ReExportCycleKind }` plus wrapper\n  `ReExportCycleFinding` carrying typed `actions[]`\n  (`refactor-re-export-cycle` informational primary + `suppress-file`\n  secondary; cycles are file-scoped so a single suppression on\n  alphabetically-first member breaks the cycle).\n- `IssueKind::ReExportCycle` (discriminant 26) with parse aliases\n  `re-export-cycle`, `re-export-cycles`, `reexport-cycle`,\n  `reexport-cycles`.\n- `FixActionType::RefactorReExportCycle`.\n\nconfig:\n- `RulesConfig.re_export_cycle: Severity` defaulting to `Warn`\n  (panel-reviewed: existing projects with latent cycles do not get\n  sudden CI failures on upgrade). Same three serde aliases on both\n  `RulesConfig` and `PartialRulesConfig`.\n- Per-file `overrides.rules.re-export-cycle` is a no-op (cycle spans\n  multiple files); load-time warn block extended to point users at the\n  working escape hatch.\n- `KNOWN_RULE_NAMES.len()` 48 -> 52; alias-in-source drift guard passes.\n\ngraph:\n- `find_re_export_cycles` (renamed from `warn_on_re_export_cycles`)\n  returns `Vec<GraphReExportCycle>` while keeping the existing\n  `RUST_LOG=warn` emissions intact. Carries parallel `files` +\n  `file_ids` arrays so the downstream detector can call\n  `suppressions.is_file_suppressed` without a path-to-FileId lookup.\n- `ModuleGraph` gains a `re_export_cycles: Vec<GraphReExportCycle>`\n  field populated after Phase 4 chain resolution.\n\ncore (cross-cutting only):\n- `severity_for_kind` and the stale-suppression kind-to-string map\n  cover the new `IssueKind::ReExportCycle` variant.\n\ncli, regression baseline (cross-cutting only):\n- `CheckCounts` + `RegressionBaseline` (cli local + fallow_config) gain\n  a `re_export_cycles: usize` field.\n- All `RulesConfig {}` test literals across cli/check/rules.rs,\n  cli/report/*, cli/tests/snapshot_tests.rs, core integration tests\n  gain `re_export_cycle: Severity::<X>` to keep workspace builds clean.\n\nRemaining work for #515:\n- Wire `find_re_export_cycles` detector into `find_dead_code_full` and\n  populate `AnalysisResults.re_export_cycles`.\n- CLI plumbing: `--re-export-cycles` flag, IssueFilters, baseline\n  retain, explain RuleDef, all 6 report formats.\n- LSP diagnostic + MCP tool description + GH Action/GitLab CI jq +\n  VS Code TS contract.\n- Snapshot tests + integration fixtures + schema regen.\n\nRefs #515\n\n* feat(core,cli,lsp,mcp,types): wire re-export-cycle finding end-to-end (WIP)\n\nLifts the upfront Tarjan SCC pass added in #442 from a `tracing::warn!`\ninto a user-visible AnalysisResults finding, then threads it through the\nCLI filter / baseline / explain / 6 output formats, the LSP diagnostic\nprovider, and the MCP tool registry.\n\ncore:\n- new `analyze/re_export_cycles.rs` detector: walks the graph-layer\n  `GraphReExportCycle` vec, applies file-level suppression (any member\n  file with `// fallow-ignore-file re-export-cycle` short-circuits the\n  whole cycle), and maps each entry to a typed `ReExportCycleFinding`\n  via the existing `with_actions` wrapper.\n- `find_dead_code_full` rayon-join arm hoisted into three small helper\n  fns (`run_circular_dep_detector`, `run_re_export_cycle_detector`,\n  `run_export_usages_collector`) to keep the tree under the clippy\n  `excessive_nesting` threshold (7); each helper does the `Severity::Off`\n  gate plus the wrapper map.\n- `core::results` re-exports `ReExportCycleFinding`, `ReExportCycle`,\n  `ReExportCycleKind` so downstream crates (cli, lsp) can build literals\n  without touching `fallow_types::*` directly.\n\ncli:\n- `--re-export-cycles` clap flag on `check` and the matching field on\n  `IssueFilters`, `DeadCodeFilters`, and the napi `DeadCodeOptionsJs`.\n- `apply_rules` / `has_error_severity_issues` / `promote_warns_to_errors`\n  arms for the new `rules.re_export_cycle` severity.\n- workspace + changed-files retain logic (`retain(any-member-under-X)`,\n  matching circular_dependencies).\n- baseline: new `re_export_cycles: Vec<String>` field keyed by\n  `kind:<sorted-paths-joined-with-<->` so self-loops cannot\n  keyspace-collide with future single-file multi-node shapes (panel\n  catch #7, Sarah/Aisha).\n- explain `RuleDef` entry under \"Architecture\" with plain-English fix\n  guidance; `CHECK_RULES.len()` bumped 22 -> 23.\n- all six report formats:\n  human/check.rs: `build_re_export_cycles_section` + Structure-category\n  hookup + summary-line \"re-export cycles\" and Re-Export Cycles row in\n  `print_check_summary`.\n  json.rs: count in `CheckSummary`, `suppression_kind_rank` arm at 10\n  (between circular-dependency at 9 and boundary-violation at 11).\n  sarif.rs: `sarif_re_export_cycle_fields` builder + rule registration\n  with helpUri pointing at `explanations/dead-code#re-export-cycles`.\n  compact.rs: emits `re-export-cycle:<first>:1:0:<chain>(self-loop)?`.\n  markdown.rs: Re-export-cycles section renders chain joined by `<->`\n  with `*(self-loop)*` italic tag.\n  codeclimate.rs: `push_re_export_cycle_issues` with kind-prefixed\n  fingerprint so self-loop and multi-node shapes hash distinctly.\n  ci/pr_comment.rs: `fallow/re-export-cycle` registered as\n  source-file-scoped (not project-level).\n\nlsp:\n- `push_re_export_cycle_diagnostics` emits one Diagnostic per member\n  file at line 1 col 0 (cycle is file-scoped; per-edge anchoring\n  deferred). Severity inherits from the resolved rule severity.\n- `DIAGNOSTIC_ISSUE_TYPES` extended with `re-export-cycle` so editor\n  clients can toggle it via `initializationOptions.issueTypes`.\n- `merge_results` and `dedup_results` paths cover the new field; the\n  dedup key includes the `kind` discriminant for the same self-loop\n  collision reason as the baseline key.\n\nmcp:\n- `(\"re-export-cycles\", \"--re-export-cycles\")` added to\n  `ISSUE_TYPE_FLAGS`; flag-count assertion bumped 18 -> 19.\n- `analyze` tool description prose updated with the explicit Kai wording\n  \"barrel files that form a structural loop, silently breaking\n  re-exports\".\n- `params.rs` `issue_types` doc comment extended.\n\ntypes/envelope:\n- `CheckSummary.re_export_cycles: usize` with `#[serde(default)]` so\n  pre-existing baselines and consumers parse unchanged.\n\ntests:\n- 5 per-format snapshot tests (json / sarif / compact / markdown /\n  codeclimate) drive a 2-finding fixture (one multi-node, one self-loop)\n  to lock the wire shape; sample_results gains one re-export-cycle so\n  every existing snapshot exercises the additive field too.\n- 4-arm alias round-trip test in config/rules.rs:\n  `re-export-cycle` / `re-export-cycles` / `reexport-cycle` /\n  `reexport-cycles` all deserialize to the same field (panel catch #10).\n- 4 fixtures under `tests/fixtures/re-export-cycle-{2-node,3-node,\n  self-loop,type-only}/` plus the matching integration test asserting\n  the cycle list is populated, the `kind` discriminator is correct, and\n  every finding ships with a non-empty `actions[]` (AC19); type-only\n  fixture also pins panel catch #9 (chain propagation is a no-op for\n  `export type *` cycles, so the finding still fires).\n\nDrift-guard / count bumps:\n- `KNOWN_RULE_NAMES`: 48 -> 52 (4 new alias name forms).\n- `KNOWN_ISSUE_KIND_NAMES`: matching bump.\n- `CHECK_RULES.len()`: 22 -> 23.\n- `ISSUE_TYPE_FLAGS.len()`: 18 -> 19.\n- `IssueKind::ReExportCycle` discriminant: 26 (next free after\n  `EmptyCatalogGroup = 25`).\n- `severity_for_kind` + stale-suppression kind-to-string map cover the\n  new variant.\n\nDefault severity stays `Warn` (user-confirmed): existing projects with\nlatent cycles don't get sudden CI failures on upgrade. Users opt into\n`error` via `rules.re-export-cycle: error`.\n\nRefs #515\n\n* feat(schema,action,ci,vscode): wire re-export-cycle into ci surfaces + tooling\n\nLands the remaining downstream surfaces for the #515 finding type after\nthe core/cli/lsp/mcp/types work in 62a54f26.\n\nschema:\n- regenerated docs/output-schema.json from the Rust source via the\n  fallow-schema-emit binary; new `re_export_cycles` arrays + summary\n  count + `ReExportCycleFinding` + `ReExportCycle` + `ReExportCycleKind`\n  + `refactor-re-export-cycle` FixActionType constant. All additions are\n  optional on the wire (`?`) so pinned consumers stay typecheck-clean.\n- regenerated editors/vscode/src/generated/output-contract.d.ts and\n  npm/fallow/types/output-contract.d.ts via codegen-types.mjs.\n- ajv strict=true passes; tsc --noEmit passes (covers panel catch #5b\n  in the additive-shape sense; the field is `?` so a pinned consumer\n  that doesn't reference it stays valid).\n\naction/ (GitHub Action):\n- summary-check.jq: new \"Re-export cycles\" table_row + section block\n  rendering chain joined by ` <-> ` plus a kind column.\n- summary-combined.jq: per-category count row gated on length > 0.\n- summary-audit.jq: audit-table row using the same chain format and\n  the `kind` discriminator as item.\n- annotations-check.jq: one ::warning per member file, with copy that\n  branches on `kind == \"self-loop\"` for the fix hint.\n- filter-changed.jq: `.re_export_cycles |= map(select(.files | any(in_changed)))`\n  retain + matching `(.re_export_cycles // [] | length) +` term in the\n  total_issues recalc block (panel catch #11).\n- fixtures patched via jq (not echoed wrappers, per the seed-by-patch\n  rule); `bash action/tests/run.sh` -> 238 passed.\n\nci/ (GitLab CI):\n- summary-check.jq, summary-combined.jq, summary-audit.jq: same shape\n  as the action/ jq.\n- HARD ACK: `grep -n total_issues ci/jq/` returns no\n  filter-changed.jq; the GitLab pipeline currently has no\n  changed-file filter. No total_issues recalc to mirror.\n- fixtures patched the same way; `bash ci/tests/run.sh` -> 222 passed.\n\neditors/vscode:\n- labels.ts: new `re-export-cycles` IssueCategory + \"Re-Export Cycles\"\n  label.\n- settings.ts: new `re-export-cycles: boolean` field on\n  IssueTypeConfig.\n- commands.ts: filter arm + summary count.\n- treeView.ts: tree node entry using the `sync-ignored` icon (visually\n  distinct from circular_dependencies' `sync`); the IssueItem label\n  branches on kind (Self-loop vs N files).\n- analysis-utils.ts: `re_export_cycles?.length ?? 0` added to the\n  total-issues sum.\n- statusBar-utils.ts: `reExportCycles: number` on\n  AnalysisCompleteParams + the buildParamsFromCli mapping + a\n  BreakdownLine row in STATUS_BAR_BREAKDOWN.\n- config.ts: default `re-export-cycles: true` in getIssueTypes.\n- diagnosticFilter.ts: bundled DIAGNOSTIC_CATEGORIES fallback row\n  matching the new LSP issue type so muting still works if the\n  `fallow/issueTypes` LSP request fails.\n- package.json: enabled in `fallow.issueTypes` default + a new\n  `re-export-cycles: boolean` property in the schema.\n- test fixture updated for AnalysisCompleteParams shape.\n- `pnpm lint` + `pnpm test` -> all 104 tests pass.\n- bundled dist/extension.js regenerated via prebuild + codegen.\n\nRefs #515\n\n* fix(audit,changed-since,types): close re-export-cycle attribution gaps from review\n\nAddresses BLOCK + CONCERN findings from the rust-reviewer and\ncli-output-reviewer Phase 4 audit.\n\nBLOCK fixes:\n\n1. Audit attribution trio (rust-reviewer): re_export_cycles was missing\n   from all three attribution surfaces in crates/cli/src/audit.rs, so a\n   newly-introduced re-export cycle would never set `introduced: true`\n   on the JSON, the `retain_introduced_dead_code` gate-filter would not\n   touch it, and `dead_code_keys` would undercount the verdict.\n   - `dead_code_keys`: new key block. Format `re-export-cycle:<kind>:<sorted-paths-joined-with-|>`\n     where kind is `multi-node` or `self-loop`, mirroring the baseline\n     `re_export_cycle_key` rationale (panel catch #7: prevent self-loop\n     vs single-file multi-node keyspace collision).\n   - `retain_introduced_dead_code`: matching `.retain` block.\n   - `annotate_dead_code_json`: matching `annotate_issue_array` call\n     under key `\"re_export_cycles\"`.\n\n2. Changed-since filter (rust-reviewer):\n   `crates/core/src/changed_files.rs::filter_results_by_changed_files`\n   had no retain block for re_export_cycles, so the `--changed-since`\n   path silently dropped every re-export-cycle finding regardless of\n   the changed file set. Added a retain mirroring the circular_deps\n   shape (any member file in the changed set keeps the cycle).\n\n3. Absolute-path leak in SuppressFile description (rust-reviewer +\n   json-output-reviewer; both flagged BLOCK):\n   `ReExportCycleFinding::with_actions` was embedding raw\n   `PathBuf::display().to_string()` paths into the SuppressFile\n   `description` string. The CLI's `strip_root_prefix` post-pass only\n   strips strings that START with the prefix; the description text\n   starts with \"Suppress with...\" so absolute machine paths were\n   leaking into the JSON `description` field on every multi-node\n   cycle.\n   Fix: the description no longer embeds member paths. Consumers\n   needing the member list read the sibling `files` array; the new\n   wording points them there explicitly.\n\nCONCERN fixes:\n\n4. Docs URL noise in human output (cli-output-reviewer): every\n   re-export-cycle entry rendered its own\n   `https://fallow.tools/explanations/dead-code#re-export-cycles`\n   trailer. No other section in `report/human/check.rs` repeats the\n   docs URL per item; the SARIF helpUri already covers tool-driven\n   navigation. Dropped the per-item URL.\n\n5. Compact `:1:0:` placeholder (cli-output-reviewer): the line was\n   `re-export-cycle:<file>:1:0:<chain>` even though the finding is\n   file-scoped (no real line/col exists). The convention for other\n   file-scoped issues (`unlisted-dep`, `duplicate-export`) omits\n   line/col entirely. Aligned to `re-export-cycle:<file>:<chain>`.\n\nNotes on a rust-reviewer recommendation we did NOT take:\n\nThe reviewer suggested adding `!has_overrides` symmetry guard to\n`has_error_severity_issues` for re_export_cycle, parallel to\ncircular_dependencies. The guard exists for circular_dependencies\nbecause the file-scoped block above re-resolves circular_dependencies\nseverity per-cycle-member-path. Re-export-cycle is intentionally NOT\nfile-scopable (`overrides.rules.re-export-cycle` is a no-op per\n`crates/config/src/config/resolution.rs`), so it is NOT included in\nthe file-scoped block. Adding the `!has_overrides` guard would\nsilently mute re_export_cycle errors whenever an override exists for\nany unrelated rule — the opposite of the reviewer's intent.\nDocumented in a comment at the call site so the asymmetry doesn't\nlook like a bug.\n\nLSP unit tests (lsp-reviewer CONCERN):\n\nAdded two tests to crates/lsp/src/diagnostics/structural.rs:\n- `re_export_cycle_multi_node_emits_one_diagnostic_per_member`: pins\n  the one-diagnostic-per-member behavior (deliberate divergence from\n  circular-dep which emits one per cycle), the helpUri anchor, the\n  message format, the related_information skip-self, and the file-\n  scoped line/col (0,0).\n- `re_export_cycle_self_loop_emits_self_loop_message_and_no_related_info`:\n  pins the singularized \"1 file\" copy and the self-loop fix hint, and\n  that single-member findings emit no related_information.\n\nRefs #515\n\n* fix(action,ci): consolidate re-export-cycle annotation + strip bogus fixture summary\n\nTwo fixes from github-action-reviewer Phase 4 CONCERN:\n\n1. Annotation fan-out budget (action/jq/annotations-check.jq line 45-47).\n   The previous implementation emitted one ::warning per member file for\n   each cycle, so a 6-file cycle would burn 6 of GitHub's 10 annotations-\n   per-step budget on a single finding. Aligned with the circular-\n   dependency pattern at line 44: emit ONE annotation per cycle,\n   anchored at $files[0]. The annotation body still names every member\n   so the user sees the full chain; the diff between the two patterns\n   is purely the annotation-count fan-out, not the displayed info.\n   (LSP keeps per-member diagnostics; the jump-to-any-file UX makes\n   sense in an editor's Problems panel but is the wrong tradeoff against\n   GitHub's hard annotation cap.)\n\n2. Self-loop fixture gap. check.json carried only a multi-node entry,\n   so the self-loop arm of the jq `if $kind == \"self-loop\"` branch in\n   annotations-check.jq line 47 was untested. Added a second\n   re_export_cycles entry with kind=\"self-loop\" via jq patch.\n\nAlso: stripped a bogus `.summary` object I inadvertently added to all 8\naction/ci fixtures in the earlier J/K commits. The real CLI envelope's\ntop-level `summary` is computed elsewhere and the jq scripts read\ndirectly from the array fields; the patched `.summary` object only ever\nheld a stub `re_export_cycles` count that no script consumed.\n\n`bash action/tests/run.sh` -> 238 passed.\n`bash ci/tests/run.sh` -> 222 passed.\n\nRefs #515\n\n* docs: re-export-cycle finding type — CHANGELOG, detection rules, AGENTS issue tokens\n\nPhase 5 in-repo documentation for #515. Captures the user-visible\ncontract of the new `re-export-cycle` finding so consumers reading\nCHANGELOG / AGENTS / detection.md understand the surface ahead of\nthe companion-repo docs update (fallow-docs + fallow-skills).\n\nCHANGELOG.md (Unreleased > Added):\n- New entry leading with the finding's role: lifts the upfront SCC\n  pass added in #442 from `tracing::warn!` into a structured\n  AnalysisResults finding with `files`, `kind` (`multi-node` /\n  `self-loop`), and a typed `actions[]` array. Names the explicit\n  CLI flag (`--re-export-cycles`), default severity (`Warn`), four\n  config aliases, suppression form, panel-catch wording (\"barrel\n  files that form a structural loop, silently breaking re-exports\")\n  in the MCP description, and the heads-up note about `total_issues`\n  showing a step change on the first run after upgrade (panel catch\n  from Marcus). Cache version is intentionally NOT bumped.\n\n.claude/rules/detection.md (`export *` chain propagation bullet):\n- Extended the existing #442 bullet to point at the new\n  user-visible surface. Documents BOTH paths surfacing in parallel:\n  `tracing::warn!` for RUST_LOG=warn discoverability AND the typed\n  `AnalysisResults.re_export_cycles` finding. Names the four\n  suppression alias spellings, the file-scoped semantics\n  (`overrides.rules.re-export-cycle` is a no-op), and the type-only\n  cycle behavior (still fires).\n\nAGENTS.md:\n- Added `--re-export-cycles` to the dead-code issue-type filter\n  list.\n- Added `re-export-cycle` to the issue-type tokens list.\n\nDid NOT touch:\n- `.claude/rules/cli-crate.md` (no per-flag enumeration to extend).\n- `.claude/rules/mcp-server.md` (tool count unchanged; per-tool\n  description was already updated in 62a54f26).\n- `docs/backwards-compatibility.md` (the stable-list is global\n  flags only, no per-issue-type filter table to extend).\n- `docs/output-schema.json` (regenerated in c9a4bf2d).\n\nRefs #515\n\n* docs(schema): regenerate root config-input schema for re-export-cycle rule\n\nCatches the root `schema.json` regen that was missed in the #515\nimplementation. This is the config-input schema (powers\n`.fallowrc.json` IDE autocomplete and ships verbatim in the npm\npackage), distinct from `docs/output-schema.json` (output envelope,\nalready regenerated in c9a4bf2d). The root file has no CI drift gate\n(`project_schema_json_no_drift_gate.md`), so the gap survived through\nPhase 5 docs and was caught by `/fallow-review`.\n\nDiff:\n- `RulesConfig` default map: `\"re-export-cycle\": \"warn\"` so editors\n  show the live default when a user creates a fresh `.fallowrc.json`.\n- `RulesConfig` schema property `\"re-export-cycle\"` referencing\n  `#/$defs/Severity` with `default: \"warn\"`.\n- `PartialRulesConfig` (per-file overrides) arm `\"re-export-cycle\"`\n  with the same `Severity | null` anyOf shape every sibling carries.\n  Per-file overrides for re-export-cycle are documented as no-ops at\n  runtime (the cycle spans multiple files), but the schema still\n  needs to accept the key to avoid an editor \"unknown property\"\n  squiggle on a config the resolver gracefully ignores.\n- `RegressionBaseline.counts` schema: `reExportCycles` integer with\n  `default: 0` matching the rest of the per-issue-type counts.\n\nRegenerated via `cargo run --bin fallow -- config-schema`. Diff is\npurely additive (no field renames or removals). Existing\n`.fallowrc.json` files validate unchanged.\n\nRefs #515\n\n* fix(codegen,docs): export bare ReExportCycle alias + extend stable issue-type list\n\nTwo follow-ups from the /fallow-review verdict that would have leaked\ninto the npm release if not caught:\n\n1. `editors/vscode/scripts/codegen-types.mjs::BARE_DEAD_CODE_ALIASES`\n   was missing the `ReExportCycle` entry. Because\n   `ReExportCycleFinding` uses `#[serde(flatten)] cycle: ReExportCycle`,\n   json-schema-to-typescript dedupes the parent type away (the same\n   pattern documented in `project_serde_flatten_ts_codegen_dedupes`),\n   so the bare `ReExportCycle` interface never appeared in\n   `npm/fallow/types/output-contract.d.ts`. External consumers doing\n   `import type { ReExportCycle } from \"fallow/types\"` would have\n   failed at type-check while every sibling bare alias\n   (`CircularDependency`, `BoundaryViolation`, `DuplicateExport`, ...)\n   worked. Adding the alias entry, regenerating both committed TS\n   contracts; `pnpm run check:codegen` clean.\n\n2. `docs/backwards-compatibility.md:20` stable issue-type-arrays list\n   was missing `re_export_cycles`. Adding it keeps the list authoritative\n   for SemVer / backwards-compat reasoning (the array follows the same\n   wire-shape stability contract as every sibling: skip-serializing-if-\n   empty so absence is the default, additive optional field so\n   schema_version does not bump).\n\nThe /fallow-review noted both as FIX FIRST: (1) is a real consumer\nbreak the npm release would have shipped; (2) is a docs-truth gate.\nBoth land before the fallow PR opens so the npm types and the\nbackwards-compat doc agree with the wire shape on day one.\n\nRefs #515",
          "timestamp": "2026-05-21T17:58:36+01:00",
          "tree_id": "ade3e118b72c66c9f49499197e544e06c8444b9d",
          "url": "https://github.com/fallow-rs/fallow/commit/3e8f66272385783858d138445678968cb31c6119"
        },
        "date": 1779382916508,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5120154,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27579,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 713027,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6798,
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
          "id": "ba5885547ea36666b3722639c9cba570e94fba1f",
          "message": "feat(review): evolve review-{github,gitlab} envelope to v2\n\n* feat(review): evolve review-{github,gitlab} envelope to v2\n\nCloses #528.\n\nAdds five additive fields to ReviewEnvelopeOutput plus one independent\ncorrectness fix for GitLab inline comments on renamed files. v1 readers\nare unaffected (additive shape); v2 readers populate the new fields and\nrecognize the new marker shape.\n\n- ReviewEnvelopeSchema::V2 (\"fallow-review-envelope/v2\") bumped because\n  comments[] is no longer 1:1 with findings (same-line merging) and the\n  fingerprint-marker shape changed. v1 retained on the enum for read-\n  side back-compat.\n- summary: { body, fingerprint } at root. Body is byte-identical to the\n  legacy top-level body field; fingerprint is FNV-1a(body). Consumers\n  upsert a single sticky PR/MR summary by marker reconciliation without\n  invoking fallow twice.\n- marker_regex at root. Stable\n  (?m)^<!-- fallow-fingerprint:v2: ((?:[a-z]+:)?[0-9a-f]{16}) -->\\s*$\n  consumers grep + capture against. Works in Rust regex and JS ES2018\n  via the inline (?m) flag, no flag-awareness on consumer side. The\n  :v2: magic-byte segment prevents v1 marker collision and reduces\n  user-paste spoofing.\n- Same-(path, line) merging in comments[] with a two-tier fingerprint\n  contract: primary fingerprint = linecomp:<16-hex of path:line>\n  stable across runs, plus constituent_fingerprints: Vec<String>\n  carrying the per-finding fingerprints. (Reverted to hashed-composite\n  in a follow-up commit; see the next fix(review) entry.)\n- UTF-8-safe body truncation at 65,536 bytes (conservative floor under\n  GitHub's 65,536-char limit; GitLab is 1,000,000 chars per\n  https://docs.gitlab.com/administration/instance_limits/). Three\n  signals: typed truncated: bool field, inline <!-- fallow-truncated -->\n  HTML marker, and human \"... (truncated)\" text. Char-boundary safe.\n- DiffIndex.rename_pairs (head_path -> base_path) populated from\n  rename from / rename to extended-diff headers. Threaded through\n  render_review_envelope to render_merged_comment; GitLab position\n  block's old_path now carries the base-side filename for renamed\n  files. Wire-correctness bug fix valid under v1 schema too; ships\n  together for one-PR atomicity.\n\nReconcile-review (fallow ci reconcile-review) gains\nextract_fallow_fingerprint() helper that accepts both v1 and v2 marker\nshapes so consumers migrating from v1 captures continue to reconcile.\n\nSchema regenerated: ReviewEnvelopeSummary added to\ndocs/output-schema.json definitions; new fields in\nReviewEnvelopeOutput, GitHubReviewComment, GitLabReviewComment.\nTypeScript types regenerated in editors/vscode/src/generated/ and\nnpm/fallow/types/.\n\nOut of scope (deferred):\n\n- TS pipeline steps for per-file unused-export grouping, per-group\n  clone-instance dedup, and refactoring-target drops.\n- New CLI flag for --max-comments paralleling FALLOW_MAX_COMMENTS.\n- Body byte-cap as a configurable knob.\n\n* fix(review): make vendor shell scripts accept v2 envelope shape\n\nBundled action/scripts/review.sh and ci/scripts/review.sh gated on\n.meta.schema == \"fallow-review-envelope/v1\" exactly, so the v1->v2\nschema bump silently breaks the entire posting step: render_with_fallow\nreturns 1, the if-guard skips the POST loop, no inline comments are\nposted, and the workflow exits 0 with only a warning in the log.\nCompound regression: the sed-based dedup fingerprint extractor matches\n`fallow-fingerprint: ` (with space) which is wrong for the v2 marker\nshape (`fallow-fingerprint:v2:` with no space before the namespace);\nv2 markers had captured `v2:` as the fingerprint, breaking dedup\nidempotency on re-runs.\n\nBoth shell scripts now accept any `fallow-review-envelope/v<N>` schema\nvia `test(\"^fallow-review-envelope/v[0-9]+$\")`. The sed dedup extracts\nfingerprints from both v1 and v2 marker shapes (v2 first to avoid the\nv1 substring capturing `v2:`), sort -u to dedupe in case a single\ncomment carries both. ci/scripts/review.sh is symlinked into\ncrates/cli/templates/ci/ so the bundled drift gate stays green.\n\nThree follow-up cleanups folded in:\n\n- output_envelope.rs::is_false drops the spurious clippy #[expect] in\n  favor of #[allow] (trivially_copy_pass_by_ref is pedantic-only and\n  fires inconsistently across build configurations, which would trip\n  unfulfilled_lint_expectations under #[expect]; project convention in\n  .claude/rules/code-quality.md is #[allow] with reason for\n  pedantic-only lints).\n- truncation breadcrumb in review.rs::TRUNCATION_SUFFIX moves from\n  `... (truncated)` plain prose to `> Body truncated by fallow.`\n  blockquote, matching the existing `> Run fallow fix --files...`\n  convention in suggestion.rs so the breadcrumb reads as fallow\n  speaking rather than as truncated content. Co-presence invariant\n  with `truncated: bool` and `<!-- fallow-truncated -->` HTML marker\n  spelled out in the doc comment.\n- GitHub + GitLab comment `truncated` doc comments document the\n  three-signal invariant explicitly (typed bool authoritative, HTML\n  marker + blockquote always co-present).\n\nSchema regenerated + TS codegen regenerated (no breaking changes;\nonly description-string updates on `truncated` fields).\n\n* docs(review): document v2 envelope evolution\n\nCHANGELOG.md [Unreleased] gains a bold one-liner under Changed for\nthe issue #528 review-envelope v2 migration, covering all five\nadditive surface changes (summary block, marker_regex, same-line\nmerging with stable linecomp:<...> primary fingerprint plus\nconstituent_fingerprints array, UTF-8-safe body truncation with\nco-present truncated/HTML-marker/blockquote signals, GitLab\nposition.old_path for renamed files) and the v1/v2 marker\nrecognition in both the bundled reconcile-review subcommand and the\nGitHub Action + GitLab CI template scripts.\n\n(The CHANGELOG entry is corrected in the follow-up fix(review)\ncommit when same-line merging is reverted to hashed-composite.)\n\n.claude/rules/cli-crate.md adds an entry for report/ci/review.rs\ncovering the render pipeline shape (group_by_path_line then\nrender_merged_comment, body truncation byte budget, GitLab old_path\nplumbing via DiffIndex.rename_pairs) and tightens the ci.rs entry to\ndocument the extract_fallow_fingerprint v2-first ordering plus the\nschema-version regex used by the bundled shell scripts. So future\nimplementers don't re-litigate the marker shape or v1->v2 fingerprint\nextraction ordering when extending this surface.\n\nThe fallow-docs CI section was updated in the companion repo\n(fallow-rs/docs@0504e8d) in the same drop.\n\nCompanion to fallow-rs/fallow#528.\n\n* fix(review): use hashed-composite fingerprint for merged comments\n\nReplaces the prior per-line stable identity (linecomp:<hash of path:line>)\nplus secondary constituent_fingerprints array with a single hashed-\ncomposite primary fingerprint: merged:<16-char hash of sorted\nconstituent fingerprints>. Single-finding comments keep the bare v1-\nstyle fingerprint. The constituent_fingerprints field is dropped from\nboth GitHubReviewComment and GitLabReviewComment.\n\nThe motivation: the bundled wrappers (action/scripts/review.sh,\nci/scripts/review.sh) and `fallow ci reconcile-review` dedupe on the\nprimary fingerprint only. Under the prior stable-linecomp design that\nmeant a merged comment whose constituent findings changed kept showing\nstale content forever (primary fingerprint unchanged so skip-if-exists\nsilently skipped the re-post). Under hashed-composite the primary\nfingerprint changes when constituents change, so the existing\nskip-if-exists logic correctly re-posts on content change.\n\nConsumers that need true update-in-place reconciliation (preserve\nreviewer reply threads across content changes) implement their own\nidentity tracking via marker_regex and the vendor edit endpoints\n(`PATCH /pulls/comments/{id}` on GitHub, `PUT /discussions/.../notes/\n{note_id}` on GitLab). The bundled scripts intentionally do not pay\nthat cost; the auth scopes, retry semantics, and edit-on-resolved-\nthread 422 handling are non-trivial.\n\nAlso clarifies the ReviewEnvelopeSummary::fingerprint docstring:\nthe FNV-1a hash is computed over the summary body BEFORE the trailing\nfallow-fingerprint marker line is appended (the marker contains the\nfingerprint, so the fingerprint cannot depend on the marker without\ncircularity). Consumers verifying from summary.body strip the line\nmatching marker_regex and hash the remainder.\n\nCompanion fallow-docs commit: fallow-rs/docs@8918062.\n\nOut of scope (unchanged): bundled shell scripts, ci.rs envelope\nreconciliation, marker shape, truncation contract, rename-pair plumbing.\nTouches output_envelope.rs, fingerprint.rs, review.rs, ci.rs (doc\nupdate), docs/output-schema.json (regen), TS codegen (regen),\nsnapshots, CHANGELOG, .claude/rules/cli-crate.md.\n\nRefs #528.\n\n* fix(review): split marker_regex from marker_regex_flags for JS compat\n\nThe v2 contract claim that the marker regex \"works in both Rust regex\nand JavaScript ES2018 RegExp without flag-awareness on the consumer\nside\" was wrong: JavaScript RegExp rejects the standalone `(?m)`\ninline flag group with `SyntaxError: Invalid regular expression ...\nInvalid group`. Verified by `node -e 'new RegExp(\"(?m)foo\")'` against\nNode 22.\n\nThe envelope now emits two fields:\n\n- `marker_regex`: anchored pattern WITHOUT `(?m)` baked in:\n  `^<!-- fallow-fingerprint:v2: ((?:[a-z]+:)?[0-9a-f]{16}) -->\\s*$`\n- `marker_regex_flags`: `\"m\"` so the anchored `^` / `$` match per-line\n  inside multi-line comment bodies.\n\nConsumers pass both to their regex engine:\n\n- JS: `new RegExp(env.marker_regex, env.marker_regex_flags)`\n- Rust: `RegexBuilder::new(&pat).multi_line(true).build()`\n\nVerified in Node: the new pattern + `m` flag compiles, matches a\nmarker on its own line, and rejects a marker pasted mid-line\n(anti-spoofing intact).\n\nSchema, TS codegen, and snapshots regenerated. CHANGELOG + cli-crate\nrule updated to describe the two-field contract. Companion fallow-docs\ncommit `fallow-rs/docs@2e1497b` updates the documented wire example,\nJS/Rust construction snippets, and consumer-side reconciliation\nexample.\n\nRefs #528.",
          "timestamp": "2026-05-21T18:20:39+01:00",
          "tree_id": "57119969498c6d84346cf8a5ccfbb6fb534ca3d3",
          "url": "https://github.com/fallow-rs/fallow/commit/ba5885547ea36666b3722639c9cba570e94fba1f"
        },
        "date": 1779384225794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5118818,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27572,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 712539,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6794,
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
          "id": "ce9f2b1ec960d1792bef6c0d7c60ac223493cc9f",
          "message": "chore(fix): rename test comment to describe BOM-preservation invariant\n\nThe test comment on `staged_content_round_trip_through_second_fixer_preserves_bom`\nreferenced the review-process source of the invariant (\"per panel\nfeedback\") instead of the substantive property being asserted (BOM\npreservation across the staged-content fast path). Rename the comment\nto describe the invariant directly so the public source on GitHub\nreads as a self-contained assertion of the behavior, not a pointer to\ninternal review notes.\n\nMirrors the discipline added in `.claude/skills/fallow-implement` Phase\n4d: internal review nomenclature (\"panel BLOCK 1\", \"panelist 3 caught\",\n\"panel feedback\") must not leak into shipped source comments or test\nassertions; the comment should name the property being asserted and\nthe location where it is enforced, not the review step that\nidentified it.\n\nNo behavioral change. Existing test passes unchanged.",
          "timestamp": "2026-05-21T18:28:30+01:00",
          "tree_id": "590b96e01ba59904fb2b66154deb0903a7879803",
          "url": "https://github.com/fallow-rs/fallow/commit/ce9f2b1ec960d1792bef6c0d7c60ac223493cc9f"
        },
        "date": 1779384640143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5083122,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27561,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 662959,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6294,
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
          "id": "fed4b483dd1cbba8c1f55dcfe5b9599c389f95a8",
          "message": "chore: release v2.77.0",
          "timestamp": "2026-05-21T19:42:46+02:00",
          "tree_id": "1f9b319f425e05d1da67a05a3cdf791363e2fc06",
          "url": "https://github.com/fallow-rs/fallow/commit/fed4b483dd1cbba8c1f55dcfe5b9599c389f95a8"
        },
        "date": 1779385769057,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5091802,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27580,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711059,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "b16f3cdf097edf08def56aef0584d12160135067",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.77.0",
          "timestamp": "2026-05-21T21:07:36+02:00",
          "tree_id": "9e30bd688dac06bc66a225b18893caf378beb1fd",
          "url": "https://github.com/fallow-rs/fallow/commit/b16f3cdf097edf08def56aef0584d12160135067"
        },
        "date": 1779390583086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5104426,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27576,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 710595,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6794,
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
          "id": "6303864bf02c45bd1f9b7c3dceae7f6b4d89533d",
          "message": "fix(cli): classify POSIX-style absolute paths as absolute on Windows\n\n* fix(cli): classify POSIX-style absolute paths as absolute on Windows\n\n`Path::is_absolute()` returns false on Windows for POSIX-style paths\nlike `/project/foo.ts` (Windows requires `C:\\foo` or a UNC root). Five\ncall sites in `crates/cli/src/` gated on `Path::is_absolute()` directly,\nso cross-platform user-supplied paths (CiIssue.path deserialized from\nJSON output on a Unix host, --diff-file/--file CLI flags in a CI config\nshared across runners, audit baseline path in .fallowrc.json, source\nmap content authored on any OS) leaked through as \"relative\" on Windows\nand downstream logic produced wrong results. Surfaced by 13 test\nfailures on the new push-to-main Windows CI matrix leg from #447.\n\nNew crates/cli/src/path_util.rs exposes is_absolute_path_any_platform\nwhich recognises host absolute (via Path::is_absolute), POSIX-style\nroot (via Component::RootDir which matches `/foo` on both platforms),\nand Windows-style drive prefix (via byte-level scan of OsStr encoding\nso Unix hosts classify `C:/foo` source-map content correctly too). The\nexisting looks_like_windows_absolute_path helper in coverage.rs is\nlifted into the same module.\n\nWired into relative_to_diff_path (the original 13-test root cause),\nresolve_audit_baseline_path, resolve_source_map_base, the --file\nfilter in check/mod.rs, and supersedes the local helper in coverage.rs.\nrelative_to_diff_path now strip_prefix-first regardless of platform,\nfalling back on the helper only for the outside-root early-return.\n\nSix new path_util unit tests cover POSIX root, Windows drive, relative\nshapes, host absolute via current_dir, the &str variant, and a\nPathBuf round-trip from a Windows drive-prefixed string. All 13\npreviously-failing Windows tests pass under the new logic; Ubuntu and\nmacOS behaviour is unchanged.\n\nFixes #545.\nRefs #447.\n\n* chore(cli): replace 'mis-classify' with 'misclassify' to satisfy typos\n\nThe previous fix(cli) commit lost the typos-fix Edits between Edit-buffer\nand stash-pop merge during the pre-commit cycle. typos rejects `mis` as\nan unknown word when separated by hyphen; the merged form passes the\ngate.",
          "timestamp": "2026-05-21T21:10:02+01:00",
          "tree_id": "e7013f68a0750b755d34cea8aed92290268786fc",
          "url": "https://github.com/fallow-rs/fallow/commit/6303864bf02c45bd1f9b7c3dceae7f6b4d89533d"
        },
        "date": 1779394335758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5103466,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27595,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708883,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "02dc1cccb62b7b55ccb94904f91fdad960503fb1",
          "message": "fix(cli): classify POSIX-style absolute paths in health diff filter on Windows\n\nFollow-up to PR #548 (the #545 main fix). The Windows CI matrix run on\n`6303864b` showed 6 health::* test failures remained after the\ncheck-side fix: `crates/cli/src/health/mod.rs` carried a near-duplicate\n`relative_to_root` helper with the same `Path::is_absolute()` gate bug,\nand `retain_hot_paths_in_change_scope` applied the same gate to\n`hot_path.path` before joining against the root.\n\nBoth sites are now routed through the shared `crate::path_util`\nhelpers introduced in PR #548. `relative_to_root` adopts the\nstrip_prefix-first shape that mirrors\n`report::ci::diff_filter::relative_to_diff_path`, so POSIX-style\nabsolute paths in cross-platform CI configs (or deserialized from JSON\noutput authored on a Unix host) classify correctly on Windows.\n\nAll 6 previously-failing tests pass under the new logic on Ubuntu;\nthe Windows CI matrix on push to main will be the empirical\nconfirmation.\n\nRefs #545.",
          "timestamp": "2026-05-21T21:22:45+01:00",
          "tree_id": "a1db6d1b65fd722830f01a52197d2d674b583b74",
          "url": "https://github.com/fallow-rs/fallow/commit/02dc1cccb62b7b55ccb94904f91fdad960503fb1"
        },
        "date": 1779395106907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5140098,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27595,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 714739,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "8ee61a22454a80a815b04b53d34616b41f8a6370",
          "message": "fix(cli): normalise fallow-cov sidecar request paths to forward slashes\n\n`crates/cli/src/health/coverage.rs::build_request` emitted\n`static_findings.files[].path` via `relative.to_string_lossy().into_owned()`,\nwhich preserves backslashes on Windows checkouts. The sidecar JSON\nwire format must be host-OS-independent (a sidecar or downstream\nconsumer can run on a different machine), so the path now goes\nthrough `.replace('\\\\\\\\', \"/\")` to match the existing convention in\n`report::ci::diff_filter::relative_to_diff_path` and\n`health::mod::relative_to_root`.\n\nCloses the last Windows-only test failure observed on the push-to-main\nCI matrix after PR #548 + #551 (13 -> 6 -> 1 -> 0).\n\nRefs #545.",
          "timestamp": "2026-05-21T21:42:45+01:00",
          "tree_id": "d55a1ddf02c24ff3f3623ea8d4e5a4e91400fcaf",
          "url": "https://github.com/fallow-rs/fallow/commit/8ee61a22454a80a815b04b53d34616b41f8a6370"
        },
        "date": 1779396278076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5105042,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27559,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 674388,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6371,
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
          "id": "936fee7235c98eb460b9726c90ca418cdce6fe03",
          "message": "fix(cli): group top-level help commands",
          "timestamp": "2026-05-21T23:45:56+02:00",
          "tree_id": "8334c179a9f5e820c0ea25d8959ad8c474100b87",
          "url": "https://github.com/fallow-rs/fallow/commit/936fee7235c98eb460b9726c90ca418cdce6fe03"
        },
        "date": 1779400119320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5112666,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27587,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711075,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6797,
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
          "id": "2d26dc151e1416fb46f3103da9df1d6326ae257e",
          "message": "fix(audit): normalise Windows verbatim path prefix in relative_key_path\n\n`crates/cli/src/audit.rs::relative_key_path` stripped the project root\nfrom each finding path before building the BASE-vs-HEAD intersection\nkey. On Windows, `config.root` (often canonicalised via\n`std::fs::canonicalize`, which adds the `\\\\?\\` verbatim prefix) and\n`finding.path` (constructed from the BASE worktree's\n`std::env::temp_dir()` join, which does NOT) disagreed on prefix\nshape; `strip_prefix` silently fell through to the un-stripped path,\nHEAD keys landed as `src/foo.ts` while BASE keys landed as\n`C:/Users/.../Temp/fallow-audit-base-xxx/src/foo.ts`, and the\nintersection was empty.\n\nResult on the push-to-main Windows CI matrix: 8 audit integration\ntests in `crates/cli/tests/audit_tests.rs` reported 0 pre-existing\nfindings where 5+ were expected, because every inherited finding\nlanded as \"introduced\".\n\nFix: route both inputs through `dunce::simplified` before\n`strip_prefix`. `dunce::simplified` strips the `\\\\?\\` verbatim prefix\nwithout touching the filesystem; on POSIX it is a no-op so there is\nno behaviour change off-Windows.\n\nFixes #561.\nRefs #447, #545.",
          "timestamp": "2026-05-21T22:49:13+01:00",
          "tree_id": "3cdcb113204c9b8ae47f0ea7f8023e626cbc77e0",
          "url": "https://github.com/fallow-rs/fallow/commit/2d26dc151e1416fb46f3103da9df1d6326ae257e"
        },
        "date": 1779400300464,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5098946,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27574,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711023,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6797,
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
          "id": "fb814dac1f7fcb483768f923c200c3ccec6c7c49",
          "message": "fix(cli): render workspace-relative paths in nudge and rollup lines\n\n* fix(cli): render workspace-relative paths in nudge and rollup lines\n\nReplace four human-output sites that previously rendered bare basenames\nvia `path.file_name()` with workspace-relative paths via a new\n`format_display_path` helper in `report/mod.rs`. Affects:\n\n- combined-mode failure footer (\"start with index.ts\" becomes \"start\n  with apps/server/src/index.ts\").\n- combined-mode refactoring-targets nudge.\n- Angular component rollup template path in the health rollup line.\n- inherited-from owner display on CRAP-coverage suffix.\n\nIn Nx / Angular / Rust workspaces, many files share basenames like\n`index.ts`, `mod.rs`, `*.component.ts`. Bare basenames cannot identify\nthe intended file, so the nudge tells users nothing actionable.\nWorkspace-relative paths resolve the ambiguity in a single uniform\nshape across all four sites, matching knip / ts-prune / depcheck.\n\nJSON, SARIF, CodeClimate, and MCP output already serialize full paths\nand are unchanged.\n\nFixes #547\n\n* docs(changelog): note workspace-relative paths in nudge / rollup / inherited-from\n\nAdds the [Unreleased] entry for #547 covering the four human-output\nsites whose bare-basename rendering was replaced with project-relative\npaths.",
          "timestamp": "2026-05-21T23:02:02+01:00",
          "tree_id": "b7336b749be8b697745aa29c713826edd66d08d5",
          "url": "https://github.com/fallow-rs/fallow/commit/fb814dac1f7fcb483768f923c200c3ccec6c7c49"
        },
        "date": 1779401064063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5104034,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27577,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 710323,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6790,
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
          "id": "b3b1ae8a68f99860c2304953c362e0b7ec749e10",
          "message": "chore(cli): route dupes + health file headers through format_display_path\n\nFollow-up to #547. Two human-output sites (`dupes.rs:240`,\n`health.rs:861`) still rendered file paths via\n`relative_path(...).display().to_string()` without forward-slash\nnormalisation, so on Windows the dupes section and the complexity\nfindings file header emitted backslashes while the four #547 sites\nemitted forward slashes within the same combined run. Routing both\nsites through the shared `format_display_path` helper closes the\ncross-line inconsistency without changing macOS or Linux output. No\nJSON / SARIF / CodeClimate / MCP shape changes.\n\nSurfaced by the cli-output-reviewer pass on #547 as a non-blocking\nfollow-up.",
          "timestamp": "2026-05-21T23:09:41+01:00",
          "tree_id": "4ac2d1de841155d0fc85ff14d210933dc66ab3bf",
          "url": "https://github.com/fallow-rs/fallow/commit/b3b1ae8a68f99860c2304953c362e0b7ec749e10"
        },
        "date": 1779401587791,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5143818,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27598,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 713027,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6798,
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
          "id": "ac09e464b7f835bb9babc3b542f8c442c4018510",
          "message": "fix(extract): record real source positions on CSS Modules exports\n\nextract_css_module_exports emitted Span::default() (start=0, end=0) on\nevery ExportInfo, so downstream compute_line_offsets resolved every\n.module.css and .module.scss unused-export finding to line:1 col:0\nregardless of where the class actually appeared in the file. LSP go-to\ndefinition jumped to the file header, SARIF regions all anchored at\nline 1, and the --diff-file line-overlap classifier never intersected\nreal diff hunks because every CSS-Modules finding looked like it lived\non line 1.\n\nThe four pre-existing strip passes (block comments, SCSS line comments,\nquoted strings plus url(...), and the @layer / @import prelude strip\nadded in #540) now replace each match with ASCII spaces of equal byte\nlength instead of collapsing the range, so CSS_CLASS_RE capture offsets\nin the masked buffer index 1:1 back into the original source. Each\nemitted ExportInfo carries Span::new(start, end) pointing at the bare\nclass identifier (no leading dot), matching how oxc spans identifiers\nelsewhere in the codebase. The function signature gains is_scss: bool\nso the SCSS-line-comment strip only fires for .module.scss; the lone\nin-tree callers (parse_css_to_module, the fuzz target, the fallow-core\nre-export) move with it.\n\nCACHE_VERSION bumps 90 to 91 because cached ExportInfo.span payloads\nchange shape from default to real offsets; warm caches invalidate on\nupgrade and re-extract CSS-Modules files on first run.\n\nFixes #549.",
          "timestamp": "2026-05-21T23:22:03+01:00",
          "tree_id": "6ba61e41584664b0cf6c3b7e42297f4ab30bd1f4",
          "url": "https://github.com/fallow-rs/fallow/commit/ac09e464b7f835bb9babc3b542f8c442c4018510"
        },
        "date": 1779402249392,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5149506,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27600,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 715203,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6798,
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
          "id": "19b761ef61cc7f7bc6f0a7c12d1915e4bf90a289",
          "message": "fix(audit): sweep std::fs::canonicalize to dunce in audit.rs production sites\n\nFollow-up to PR #566. The earlier fix to `resolve_git_toplevel` closed\nthe changed_files mismatch but the next Windows CI run surfaced 3\naudit unit tests that still fail with assertion panics:\n\n- `audit_dupes_only_materializes_groups_touching_changed_files`:\n  \"changed file should still match unchanged duplicate code\"\n- `audit_gate_new_only_inherits_pre_existing_duplicates_in_focused_files`:\n  \"current run should detect the pre-existing duplicate\"\n- `audit_gate_new_only_skips_base_snapshot_for_docs_only_diff`:\n  \"assertion failed: result.base_snapshot_skipped\"\n\nRoot cause: four other production sites in `crates/cli/src/audit.rs`\nstill used `std::fs::canonicalize`, each producing a `\\\\?\\C:\\...`\nverbatim path on Windows that mismatched against non-verbatim paths\nfrom other code paths. Sites switched to `dunce::canonicalize`:\n\n- `can_reuse_current_as_base::canonical_cache_dir` (load-bearing for\n  the docs-only test: `path.starts_with(canonical_cache_dir)` checked\n  a verbatim path against a non-verbatim changed_files entry)\n- `reusable_audit_worktree_path::repo_root` (hashes the repo root, so\n  inconsistent prefix shape produces unstable cache keys)\n- `paths_equal` (worktree-identity equality check)\n- `path_is_inside_temp_dir` (worktree temp-dir filter)\n\n`dunce::canonicalize` is identical to `std::fs::canonicalize` on POSIX\nso behaviour off Windows is unchanged.\n\nRefs #561.",
          "timestamp": "2026-05-21T23:27:03+01:00",
          "tree_id": "53cdbd59056d0392ba10a6e05e02375cbc5b2d33",
          "url": "https://github.com/fallow-rs/fallow/commit/19b761ef61cc7f7bc6f0a7c12d1915e4bf90a289"
        },
        "date": 1779402607493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5094522,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27573,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 711023,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6797,
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
          "id": "86ce691866f97fa9852823d22f812a621a83d97a",
          "message": "fix(audit): normalise forward-slash segments + simplify temp-dir path comparison\n\nTwo distinct Windows-only path-shape bugs surface after PR #569\nfixed the docs-only fast path but exposed a regression and two\nremaining audit test failures:\n\n1. `try_get_changed_files` joined forward-slash segments from\n   `git diff --name-only` (`src/legacy.ts`) onto an absolute toplevel\n   via `PathBuf::join`. On Windows, `join` appends with the native\n   backslash separator without converting separators inside the\n   appended segment, so the resulting buffer landed as\n   `C:\\Users\\...\\Temp\\test\\src/legacy.ts` (mixed separators). File\n   discovery via walkdir produces all-backslash paths. `FxHashSet`'s\n   `contains` compares bytes, not components, so the two shapes\n   mismatched and the focused duplicates / changed-since filter\n   silently dropped every finding. This broke\n   `audit_dupes_only_materializes_groups_touching_changed_files`\n   and `audit_gate_new_only_inherits_pre_existing_duplicates_in_focused_files`.\n\n   Fix: `#[cfg(windows)]`-guarded `replace('/', \"\\\\\")` on the\n   relative segment before `toplevel.join(...)`. POSIX path is\n   unchanged (no-op on the segment).\n\n2. `path_is_inside_temp_dir`'s previous switch to `dunce::canonicalize`\n   broke `audit_worktree_helpers_filter_to_fallow_temp_prefix` because\n   the test constructs synthetic worktree paths that DO NOT exist on\n   disk. `dunce::canonicalize` (which wraps `std::fs::canonicalize`)\n   returns Err for non-existent paths, so the fallback never ran. The\n   pre-fix std path happened to match because the test pre-canonicalised\n   with the same std function.\n\n   Fix: use `dunce::simplified` (string-level prefix strip, no I/O) for\n   the primary comparison. Keep the canonicalize fallback for symlinked\n   temp dirs but route both ends through `dunce::simplified` after\n   canonicalising. This accepts both verbatim and non-verbatim input\n   shapes.\n\nRefs #561.",
          "timestamp": "2026-05-21T23:45:31+01:00",
          "tree_id": "c8ad288b7349bb43295822669dffea82de6f9602",
          "url": "https://github.com/fallow-rs/fallow/commit/86ce691866f97fa9852823d22f812a621a83d97a"
        },
        "date": 1779403683187,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5110586,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27561,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 666947,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6297,
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
          "id": "31412c065fd0f34a3fcc95553ed227e477c51673",
          "message": "feat(flags): expand SDK detection to PostHog, Vercel Flags, ConfigCat, Optimizely, Eppo\n\nBroadens the built-in feature-flag SDK detection set in fallow-extract\nfrom six providers to eleven, and teaches the recognizer to read flag\nkeys from object arguments (Vercel's documented flag({ key: \"...\" })\nshape) in addition to plain string arguments. Custom flag.sdkPatterns\nconfigurations keep their original flag(\"...\") matcher behavior so\nuser-defined recognizers never get shadowed by built-in providers.\n\nNew providers and surfaces: PostHog (useFeatureFlagEnabled,\nuseFeatureFlagPayload, isFeatureEnabled, getFeatureFlag); Vercel Flags\n(flag({ key }), evaluate(...) when imported from flags/* or\n@vercel/flags*); ConfigCat (getValueDetails for typed evaluation);\nOptimizely (decide/decideForKeys/useDecision and the typed Variable*\nfamily); Eppo (typed assignment + assignmentDetails getters across\nstring/boolean/numeric/integer/JSON).\n\nObject-argument extraction is import-scoped: Vercel's flag and\nevaluate symbols only match when the call site imports them from a\nflags package, so generic local flag or evaluate functions stay out\nof the catalog. CACHE_VERSION bumps to 92 (stacking on #549's 91) to\ninvalidate stale flag_uses entries on upgrade.\n\nUpdates the CLI flag-uses description, the MCP feature_flags tool\ntext, FlagsConfig.sdkPatterns docstring, and .claude/rules/detection.md\nto enumerate all eleven providers and the 40+ aggregate count.\n\nFixes #563.",
          "timestamp": "2026-05-21T23:52:12+01:00",
          "tree_id": "298e98bd04ff6093bff114e332e9687cd9053f78",
          "url": "https://github.com/fallow-rs/fallow/commit/31412c065fd0f34a3fcc95553ed227e477c51673"
        },
        "date": 1779404088549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5081426,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27560,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 710587,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6793,
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
          "id": "71f0be74c121c353c567d382e1b799ac0d90c125",
          "message": "fix(dupes): normalise focused-mode path comparison against verbatim Windows prefix\n\n* fix(dupes): normalise focused-mode path comparison against verbatim Windows prefix\n\nLast 2 Windows-only audit test failures from the push-to-main CI matrix\ntrace to focused duplicate analysis silently filtering every file as\nnon-focus.\n\nRoot cause: `crates/core/src/duplicates/shingle_filter.rs` and\n`crates/core/src/duplicates/detect/mod.rs` both did\n`focus_files.contains(&file.path)` directly. On Windows, focus_files\nenters non-verbatim (`C:\\Users\\Temp\\test\\src\\foo.ts`, joined onto a\ndunce-canonicalised toplevel from `try_get_changed_files`), while\nfile.path may carry the `\\\\?\\` verbatim prefix when the caller\npre-canonicalised opts.root with `std::fs::canonicalize` (the audit\ntest fixtures do this to exercise the macOS `/var/folders/...` ->\n`/private/var/folders/...` symlink case). Byte-level FxHashSet\ncontains mismatches on the prefix component, every file is marked\nnon-focus, the dupes detector materialises zero clone groups, and\nthe audit test panics on `dupes_report.clone_groups` empty.\n\nFix: normalise the focus set's entries through `dunce::simplified`\nonce at function entry, then look up via\n`normalized_focus.contains(dunce::simplified(&file.path))`.\n`dunce::simplified` is a no-op string-level operation on POSIX and\non non-verbatim Windows paths.\n\nTests that should pass after this lands:\n- audit_dupes_only_materializes_groups_touching_changed_files\n- audit_gate_new_only_inherits_pre_existing_duplicates_in_focused_files\n\nRefs #561.\n\n* chore(fmt): apply rustfmt reflow to path_is_focus closure",
          "timestamp": "2026-05-22T00:07:48+01:00",
          "tree_id": "01ec67063842e2086ddca9b6e7a12b17218e393f",
          "url": "https://github.com/fallow-rs/fallow/commit/71f0be74c121c353c567d382e1b799ac0d90c125"
        },
        "date": 1779404996344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5136754,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27626,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708883,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "c0b8ebb699a1e25657c537056cccde0e60323012",
          "message": "fix(audit): normalise verbatim prefix in changed-files filter lookups (#573)\n\nPre-normalise the changed-files set via dunce::simplified once at function entry, then normalise the lookup side per comparison through a local contains_normalised helper. POSIX is a no-op.\n\nDiagnoses the remaining 2 Windows audit failures from the #561 push-to-main rollup: filter_results_by_changed_files and filter_duplication_by_changed_files in fallow-core did byte-level FxHashSet::contains against analysis-pipeline paths. After #566, try_get_changed_files joins git-emitted segments onto the dunce::canonicalize'd toplevel (non-verbatim); clone-instance and finding paths inherit the verbatim shape of opts.root because test fixtures pre-canonicalise with std::fs::canonicalize. The mismatch dropped every clone group from the safety-net filter_by_changed_files pass and every file-level finding from the dead-code filter.\n\nAdds two cfg(windows) regression tests pinning a verbatim instance / finding path against a non-verbatim changed-files entry.\n\nFixes #561",
          "timestamp": "2026-05-22T06:14:44+01:00",
          "tree_id": "6ac038d2d3fcde391eb87b0ed27c8621f56ad714",
          "url": "https://github.com/fallow-rs/fallow/commit/c0b8ebb699a1e25657c537056cccde0e60323012"
        },
        "date": 1779427010783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5083346,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27566,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708883,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "30cd07215d3dba9d11a9c15c114d9ddc248bba1c",
          "message": "fix(audit): accept root-anchored coverage-root prefix on Windows (#574)\n\nRelax validate_coverage_root_absolute to Path::has_root. validate_coverage_root_absolute previously checked Path::is_absolute, which on Windows requires a drive letter or UNC prefix. Linux-CI Istanbul data uses POSIX-shaped paths like /ci/workspace/src/index.ts, so --coverage-root /ci/workspace was the only shape that lined up with the data but was rejected with exit 2 on Windows. Path::has_root accepts both Windows-absolute and root-anchored POSIX prefixes while still rejecting truly-relative inputs.\n\nAdds POSIX unit tests for accept/reject/None paths, and cfg(windows) tests pinning that both shapes are accepted on Windows. The component-wise strip_prefix in load_istanbul_coverage tolerates either separator orientation, so no other call site changes.\n\nRefs #561",
          "timestamp": "2026-05-22T06:54:39+01:00",
          "tree_id": "b3aa48e7ef7fa5df45036fee83e7ea80da2743f7",
          "url": "https://github.com/fallow-rs/fallow/commit/30cd07215d3dba9d11a9c15c114d9ddc248bba1c"
        },
        "date": 1779429403459,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5080530,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27565,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708883,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6796,
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
          "id": "60b197c329c3976c3ffd6bcdfd59d8228f790545",
          "message": "fix(list): emit forward-slashed paths in --files and --entry-points JSON (#575)\n\nMirror the workspaces / nudge / rollup path-normalisation convention. fallow list --files --format json and --entry-points --format json projected per-path JSON without the .replace('\\\\', \"/\") that the workspaces array already applies, so consumers received backslashed paths on Windows. JSON output must be stable cross-platform for CI glob filters, MCP agents, and downstream pipelines.\n\nExisting list_files_includes_plugin_scoped_hidden_dirs_for_react_router and ..._for_remix tests already assert the forward-slash shape; they were silently passing on POSIX and failing on the push-to-main Windows matrix, so they are exactly the regression coverage.\n\nRefs #561",
          "timestamp": "2026-05-22T07:21:41+01:00",
          "tree_id": "6c086fec5003edd68a0e9ccc0eaa8ea6d2095fbf",
          "url": "https://github.com/fallow-rs/fallow/commit/60b197c329c3976c3ffd6bcdfd59d8228f790545"
        },
        "date": 1779431032682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5112354,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27595,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 710451,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6791,
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
          "id": "b200f528d8be062ab3b1f057bd83a2b48ea40453",
          "message": "refactor(core): single persistent progress spinner\n\nReplace the per-stage MultiProgress + ephemeral ProgressBar pattern in\nAnalysisProgress with a single ProgressBar constructed at new() and\nupdated in place via set_stage(). Each pipeline stage previously created\nand finished its own bar, producing visible flicker between stages and\ngaps for stages without an explicit spinner call.\n\nThe new template \"{spinner:.cyan} fallow: {msg} ({elapsed})\" adds the\n\"fallow:\" prefix and an elapsed timer that runs across the whole\npipeline at 30 Hz via stderr_with_hz(30). Twelve call sites in\nanalyze_with_parse_result + analyze_full migrate from\nlet pb = progress.stage_spinner(msg); ...; pb.finish_and_clear();\nto a single progress.set_stage(msg); line. Stage labels are lowercased\nto fit the template. TTY suppression still short-circuits via the\nOption<ProgressBar>::None path; non-tty invocations remain\nallocation-free.\n\nCloses #560.",
          "timestamp": "2026-05-22T07:41:53+01:00",
          "tree_id": "19f91889fab9aac61c3dc430cb17bc78a9b351a8",
          "url": "https://github.com/fallow-rs/fallow/commit/b200f528d8be062ab3b1f057bd83a2b48ea40453"
        },
        "date": 1779432253333,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5105174,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27326,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 650729,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6046,
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
          "id": "7cd0a8655e814d0e0f82c54443d6b9af037a3577",
          "message": "chore(types): align schemars optional fields with serde(default) + add drift gate\n\nThe wire shape and the JSON schema disagreed for fields marked\n`#[serde(skip_serializing_if = \"Vec::is_empty\"|\"Option::is_none\")]`\nwithout a matching `serde(default)`: producers stripped the field\nfrom JSON output, but the schema kept it in `required[]`. Consumers\nvalidating against the published schema would reject otherwise-valid\nfallow output.\n\nAdds `serde(default)` to 33 such fields across the health_types\nmodules, output_envelope, config boundaries, types results, and the\n`SuppressionOrigin::Comment.issue_kind` enum variant. Regenerates\n`docs/output-schema.json` plus the VS Code and npm TS contracts so\n`FeatureFlag.guarded_dead_exports` and `TargetEvidence.{unused_exports,\ncomplex_functions, cycle_path}` are now properly optional on the wire.\n\nAdds a syn-based drift gate in `crates/cli/tests/schema_tests.rs` that\nwalks every `JsonSchema`-deriving struct AND enum struct-variant, flags\nany `Vec<T>`/`Option<T>` field that uses `skip_serializing_if` without\n`default`, and prints the canonical fix-hint inline. New dev-deps\n`proc-macro2` (with `span-locations`) and `syn` (full) drive the AST\nwalk. Three unit tests pin the gate's behavior on synthetic offenders,\nincluding the enum-variant branch.",
          "timestamp": "2026-05-22T07:47:16+01:00",
          "tree_id": "ebfe0bfbf6877403572ee285b3764d22ef95c7dd",
          "url": "https://github.com/fallow-rs/fallow/commit/7cd0a8655e814d0e0f82c54443d6b9af037a3577"
        },
        "date": 1779432576400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5110814,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27313,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 699783,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6538,
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
          "id": "ab27dc47ed26981eeacabf2540c688ac8f948d77",
          "message": "fix(config): drop is_absolute gate from existing-entry dedup (#576)\n\nrecord_existing_file in crates/config/src/config_writer.rs skipped the dir-relative dedup key whenever the existing entry was not Path::is_absolute. On Windows that gate rejects POSIX-rooted paths like /project/src/a.ts because Windows requires a drive letter or UNC prefix for is_absolute, so a Linux-CI-written config silently lost its dedup signal on Windows and the writer appended a relative duplicate of every entry on every run.\n\nstrip_prefix already returns Err for entries that do not start with config_dir, so the absoluteness pre-gate is redundant. Drop it.\n\nSame class of fix as PR #574 (validate_coverage_root_absolute). Existing dedupes_existing_absolute_paths_against_relative_emissions tests are the regression coverage.\n\nRefs #561",
          "timestamp": "2026-05-22T07:53:04+01:00",
          "tree_id": "946d981ac402c01c1711f9297919d09691c0e5b1",
          "url": "https://github.com/fallow-rs/fallow/commit/ab27dc47ed26981eeacabf2540c688ac8f948d77"
        },
        "date": 1779433033565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5118710,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27340,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697367,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6535,
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
          "id": "b726cbe0d2e3edf4303bc71c4f4ff7d2d64eb5e4",
          "message": "fix(cli): type combined explain metadata",
          "timestamp": "2026-05-22T08:57:51+02:00",
          "tree_id": "ee305331a668cf42d9d8647374b7367ec9b0c670",
          "url": "https://github.com/fallow-rs/fallow/commit/b726cbe0d2e3edf4303bc71c4f4ff7d2d64eb5e4"
        },
        "date": 1779433226574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5115990,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27346,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697779,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6537,
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
          "id": "8c74aefb490f2d8eda3f972f59d3eea93c7cfc04",
          "message": "test(core): canonicalise init_repo via dunce so test fixtures match production toplevel (#580)\n\ninit_repo and resolve_git_toplevel_returns_canonical_path called std::fs::canonicalize, which on Windows returns the \\\\?\\ verbatim form. Production resolve_git_toplevel was swapped to dunce::canonicalize in PR #566 so it strips that prefix. The test-side verbatim path then diverged from the production-side non-verbatim path and every changed.contains(&expected) assertion silently failed. Swap both test-side call sites to dunce::canonicalize; POSIX behaviour is identical.\n\nAlso marks proc-macro2 as cargo-shear-ignored in crates/cli/Cargo.toml. The dep was added in 7cd0a865 as a dev-dependency without an explicit import, but its span-locations feature is what makes syn-returned .span().start().line report real source positions inside the schema-drift gate. Removing the dep would silently collapse the gate; ignore it via [package.metadata.cargo-shear].ignored instead, matching the established miette precedent.\n\nCloses #561",
          "timestamp": "2026-05-22T08:22:08+01:00",
          "tree_id": "3acf5705597fab9507fa731599a02078c78d3681",
          "url": "https://github.com/fallow-rs/fallow/commit/8c74aefb490f2d8eda3f972f59d3eea93c7cfc04"
        },
        "date": 1779434647661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5066334,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27292,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697231,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6533,
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
          "id": "fa3bd8a38156acd544c5a50475e715fa3fe8d79c",
          "message": "fix(cli): route fallow list paths through format_display_path on all four emission sites\n\n`fallow list --files` and `fallow list --entry-points` previously\nemitted forward-slashed paths via `--format json` but raw\n`relative.display()` via plain-text stdout. On Windows the JSON\nsurface was POSIX-shaped while the human surface leaked backslashes,\ninconsistent for CI consumers that xargs/grep the plain output.\n\nRoute all four list emission sites (JSON files + entry_points,\nplain-text files + entry_points) through the canonical\n`report::format_display_path` helper so Windows backslashes never\nreach stdout regardless of format.\n\nTighten the two existing list_json regression tests with\n`assert!(!path.contains('\\\\'))` and replace the lenient\n`starts_with(\\\"src/\\\") || starts_with(\\\"src\\\\\\\\\\\")` clause with strict\n`starts_with(\\\"src/\\\")` so a backslashed path now fails CI on the\nWindows leg pre-fix and passes post-fix.\n\nRefs #561",
          "timestamp": "2026-05-22T08:40:03+01:00",
          "tree_id": "f69d8cc949cf1d758a29db68066ef5a944640b70",
          "url": "https://github.com/fallow-rs/fallow/commit/fa3bd8a38156acd544c5a50475e715fa3fe8d79c"
        },
        "date": 1779435759272,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5115918,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27346,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 695311,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6536,
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
          "id": "239f75a6d9704fadfe1db30ab14665a355ee673a",
          "message": "fix(core): normalise path separators in trace::path_matches (#584)\n\npath_matches did byte-level string comparison between the filesystem-shaped module_path (backslash-separated on Windows) and the forward-slash-shaped user_path (the convention every cross-platform consumer uses, including the MCP server's trace_export / trace_file tools which pass src/utils.ts literally). On Windows the four comparisons all silently missed even when the file was in the graph, so fallow dead-code --trace src/utils.ts:foo returned \"no module found\" instead of the trace payload.\n\nNormalise both sides to forward slashes before each comparison; POSIX is a no-op. Two regression tests pin the fix using PathBuf::from(r\"D:\\\\a\\\\...\") raw-string Windows-shaped literals that work cross-platform.\n\nFixes the MCP e2e e2e_trace_export_returns_json and e2e_trace_file_returns_json failures.\n\nRefs #561",
          "timestamp": "2026-05-22T09:18:24+01:00",
          "tree_id": "cf4323d1cf6175e7c975e5e1f150d4aa803af4b2",
          "url": "https://github.com/fallow-rs/fallow/commit/239f75a6d9704fadfe1db30ab14665a355ee673a"
        },
        "date": 1779438030935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5110766,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27329,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 698602,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6559,
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
          "id": "d177bab8546290ca50321e3a8ab16d02ca74d456",
          "message": "fix(core): serialise trace output PathBufs with serde_path forward-slash (#585)\n\nAttach #[serde(serialize_with = \"serde_path::serialize\")] to every single-PathBuf field and serialize_vec to every Vec<PathBuf> field in the trace output structs (ExportTrace, ExportReference, ReExportChain, FileTrace, TracedReExport, DependencyTrace, CloneTrace). After PR #584 fixed path_matches so the lookup succeeded on Windows, the output still serialised backslash-separated paths via serde's default, breaking JSON consumers (MCP agents, CI glob filters, downstream pipelines) that expect forward-slash. CloneInstance.file already used this convention; trace structs now match.\n\nTwo cross-platform regression tests build a backslash-shaped PathBuf literal and assert the JSON contains the forward-slash form for every newly-decorated field.\n\nFixes the remaining MCP e2e e2e_trace_export_returns_json and e2e_trace_file_returns_json failures.\n\nRefs #561",
          "timestamp": "2026-05-22T09:43:06+01:00",
          "tree_id": "fc7d1cc4e6428d6546c061d96045d4a1f4241da4",
          "url": "https://github.com/fallow-rs/fallow/commit/d177bab8546290ca50321e3a8ab16d02ca74d456"
        },
        "date": 1779439509987,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5068782,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27298,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697503,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6537,
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
          "id": "949013ad769c933b751d05d7726f68069b621be0",
          "message": "fix(cli): silence Windows-only clippy lints that Rust 1.95 surfaced (#587)\n\ncargo clippy --workspace --all-targets -- -D warnings on the Windows runner failed with 6 errors that POSIX clippy never sees because the offending code is #[cfg(windows)]-gated:\n\naudit.rs:1644 - match_same_arms: named ERROR_ACCESS_DENIED arm documents the cross-session protected-process case; add #[expect(clippy::match_same_arms)].\nsignal/registry.rs:108,140 - unsafe_code on Win32 FFI blocks (OpenProcess/TerminateProcess/WaitForSingleObject/CloseHandle); add #[expect(unsafe_code)] to each enclosing function, mirroring the existing pattern around mod windows_process in audit.rs.\nsignal/windows.rs:38 - unsafe_code on the unsafe extern \"system\" fn handler PHANDLER_ROUTINE callback declaration; add #[expect(unsafe_code)] and rewrite the leading /// SAFETY: doc as a # Safety heading so unnecessary_safety_comment also clears.\nsignal/windows.rs:53 - unsafe_code on the SetConsoleCtrlHandler FFI call inside install().\n\nAll annotations use #[expect] (preferred over #[allow] per project convention) because the lint reliably fires whenever the gated code is compiled. POSIX clippy keeps green because the items are excluded.\n\nRefs #561",
          "timestamp": "2026-05-22T12:35:32+01:00",
          "tree_id": "fbd90a186af489a21671e25b341ca4c3b343c839",
          "url": "https://github.com/fallow-rs/fallow/commit/949013ad769c933b751d05d7726f68069b621be0"
        },
        "date": 1779449857825,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5110766,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27331,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 705747,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6622,
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
          "id": "0b4dd4b5ab71f033ae66eabff22167e61dd5b670",
          "message": "fix(cli): render --score health line in combined human output\n\n`fallow --score` (bare combined mode) and `fallow --trend` already\nserialized the health score / trend to JSON / SARIF / CodeClimate, but\n`combined::print_orientation_header` never called the existing\nrender_health_score / render_health_trend helpers in\nreport::human::health, so the headline a user came to read was missing\nfrom terminal output. `fallow health --score` (the subcommand) already\nrendered the score via its inline path, so the contract documented at\nfallow-docs `cli/health.mdx` was only half-true.\n\nPromote both helpers from private fn to pub fn, re-export them from\nreport::mod, and call them at the top of print_orientation_header.\nSuppress the leading blank in the vital signs block when the score\nblock already wrote its trailing blank.\n\nA naive add-call-site fix renders the score twice because the\ndownstream Complexity section's print_health_human also invokes\nrender_health_score via build_health_human_lines_with_explain. Add\nskip_score_and_trend: bool to ReportContext, thread it through\nprint_health_result, print_health_human, and\nbuild_health_human_lines_with_explain. Combined-mode caller sets\ntrue (orientation header is the single render site); standalone\n`fallow health` and `fallow audit` keep false so their renderers stay\ninline. check.rs, dupes.rs, watch.rs ctx literals updated with false\n(no orientation header upstream).\n\nRegression tests assert EXACTLY ONE \"Health score:\" line for both\ncombined --score and standalone health --score (the previous\n.contains() shape passed even with a duplicate). A control test pins\nthat bare `fallow` without --score does not render the line. A\nstandalone test covers `fallow health --min-score 100` to confirm the\nCI gate still fires when the score is below threshold.\n\nJSON / SARIF / CodeClimate / markdown output and the --min-score\nexit-code gate are unchanged.\n\nFixes #557.",
          "timestamp": "2026-05-22T12:38:52+01:00",
          "tree_id": "1ea82333bbf6aed037c0def7591bb7e19cd32b41",
          "url": "https://github.com/fallow-rs/fallow/commit/0b4dd4b5ab71f033ae66eabff22167e61dd5b670"
        },
        "date": 1779450331706,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5104710,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27323,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 695603,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6537,
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
          "id": "23c7403f0e1ccd0e271d1d9448f739b5452acb81",
          "message": "fix(report): defer CodeClimate severity mapping + centralise next to SARIF\n\nThe three generic-iterator helpers in `crates/cli/src/report/codeclimate.rs`\n(`push_dep_cc_issues`, `push_unused_export_issues`, `push_unused_member_issues`)\neagerly called `severity_to_codeclimate(severity)` BEFORE iterating their\nfindings, so any caller passing `severity = Off` and an empty (or\nproduction-filtered) findings vec hit the `Off => unreachable!()` arm and\nexited 101 with `internal error: entered unreachable code`. Reproduced via\n`fallow check --format codeclimate --root benchmarks/fixtures/real-world/zod\n--production`. The slice-based helpers were already safe via their existing\n`is_empty()` early-return guards. The fix moves the severity mapping inside\neach generic helper's loop body so the call only fires when there is a\nfinding to emit; behaviour for non-empty findings stays byte-identical.\n\nIn the same pass, the inline `severity_to_codeclimate` body is now a one-line\ndelegate to a new `crates/cli/src/report/ci/severity.rs::codeclimate_severity`\nhelper, alongside the pre-existing `sarif_level` and `review_label` mappers.\nAll three CI-format severity vocabularies now live in one module, and adding\na future `Severity` variant compile-fails at every mapper simultaneously\nrather than silently fallthrough on the CodeClimate side. The 14+ call sites\nof `severity_to_codeclimate` are unchanged (mirrors the\n`severity_to_sarif_level` wrapper pattern in `sarif.rs`).\n\nNew regression test\n`build_codeclimate_with_off_severity_and_empty_findings_does_not_panic` locks\nin the production-mode safety property. A new\n`codeclimate_severity_off_is_unreachable` `#[should_panic]` test in\n`ci/severity.rs::tests` mirrors the SARIF mapper's coverage. The pre-existing\nstale `severity_off_maps_to_minor` test name (which actually asserts the\n`unreachable!()` panic) was renamed opportunistically to\n`severity_off_is_unreachable`.\n\nFixes #452.",
          "timestamp": "2026-05-22T12:47:43+01:00",
          "tree_id": "9ead4a026629d06b5e8fea35149bf1a9a01675a9",
          "url": "https://github.com/fallow-rs/fallow/commit/23c7403f0e1ccd0e271d1d9448f739b5452acb81"
        },
        "date": 1779450624442,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5137638,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27341,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 699319,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6536,
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
          "id": "e5e082abbfa94ce234d6a33036b38975e30fef9a",
          "message": "chore: release v2.78.0",
          "timestamp": "2026-05-22T14:10:23+02:00",
          "tree_id": "7476225041fb4838486d000a08f8ab0de925903f",
          "url": "https://github.com/fallow-rs/fallow/commit/e5e082abbfa94ce234d6a33036b38975e30fef9a"
        },
        "date": 1779451950533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5142750,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27347,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 695643,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6529,
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
          "id": "92e2533d695ad798636f8e5e072c87085928c647",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.78.0",
          "timestamp": "2026-05-22T14:44:02+02:00",
          "tree_id": "407ba1d548c54e39b5efb1729371b2af2aae0974",
          "url": "https://github.com/fallow-rs/fallow/commit/92e2533d695ad798636f8e5e072c87085928c647"
        },
        "date": 1779453965714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5094102,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27316,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697503,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6537,
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
          "id": "b467e04c1377424747107ce1554a82bf64687a22",
          "message": "fix(ci): silence two more Windows-only clippy regressions on `main`\n\nSibling to PR #587 and the v2.78.0 release commit's mcp tests fix. Rust 1.95's\nstrict `-D warnings` surfaced two more Windows-only paths on the post-release\nci.yml run for main:\n\n- `crates/cli/src/ci_template.rs::set_executable` Windows stub returns\n  `std::io::Result<()>` to match the Unix signature so the unconditional\n  caller can `?`-propagate without `#[cfg]` branching. The Windows body is\n  trivially `Ok(())`, so clippy's `unnecessary_wraps` fires. Suppress via\n  `#[expect(clippy::unnecessary_wraps, reason = \"...\")]` on the Windows\n  stub; matching the Unix signature is load-bearing for the caller.\n\n- `crates/cli/src/signal/scoped_child.rs::assert_deregistered` test helper\n  is only called from two `#[cfg(unix)]` tests in the same module. Gating\n  the helper itself with `#[cfg(unix)]` aligns it with its callers and\n  silences the `dead-code` lint on Windows.\n\nBoth are post-release CI fixes; v2.78.0 binaries are unaffected. Refs #447.",
          "timestamp": "2026-05-22T16:15:53+02:00",
          "tree_id": "05dfc715ccb9403790a2796c1247b4c3dd63fee6",
          "url": "https://github.com/fallow-rs/fallow/commit/b467e04c1377424747107ce1554a82bf64687a22"
        },
        "date": 1779459485127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5052806,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27263,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697367,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6535,
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
          "id": "721f47b3d036b2582f6acd68b32693713dc71f0c",
          "message": "fix(cli): silence Windows-only dead_code on ScopedChild::id (#595)\n\nAfter PR #587 and b467e04c closed the bulk of the cfg(windows) clippy hits, one Rust 1.95 lint remained that POSIX clippy never sees: ScopedChild::id is consumed only by the cfg(unix) signal_test_helper in main.rs; on Windows the helper is excluded so the method has no caller. Tag with #[cfg_attr(not(unix), expect(dead_code))] to preserve the symmetric public surface for embedders rather than gating the method itself with #[cfg(unix)].\n\nPOSIX clippy + workspace tests stay green.\n\nRefs #561",
          "timestamp": "2026-05-22T17:47:50+01:00",
          "tree_id": "991866f70fad5320edde9b52b7ead5ebbaeb88f4",
          "url": "https://github.com/fallow-rs/fallow/commit/721f47b3d036b2582f6acd68b32693713dc71f0c"
        },
        "date": 1779468602694,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5100966,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27321,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697847,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6538,
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
          "id": "7f89de4fc78789364b4d35df1a7e647ed783e316",
          "message": "chore: release v2.78.1",
          "timestamp": "2026-05-22T19:06:03+02:00",
          "tree_id": "35d64bc4b79b7ac57ab36da1c73cfc80ecd3f260",
          "url": "https://github.com/fallow-rs/fallow/commit/7f89de4fc78789364b4d35df1a7e647ed783e316"
        },
        "date": 1779469717167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5127070,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27330,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 654063,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6039,
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
          "id": "8604f89c14304bd43d3394782b736ffc983bce9a",
          "message": "fix(cli): gate scoped_child::tests module behind cfg(unix) (#599)\n\nAfter PR #595 and the v2.78.1 follow-up release made assert_deregistered cfg(unix), every test inside scoped_child::tests is cfg(unix) (they all exec /bin/sh / true / echo). On Windows the module reduces to just use super::*;, which Rust 1.95's -D unused-imports flags.\n\nGate the module itself with #[cfg(all(test, unix))] so the whole suite (and its imports) only compile when the bodies have a chance to run. No Windows test loss because there were no Windows tests in this module to begin with.\n\nRefs #561",
          "timestamp": "2026-05-22T18:40:15+01:00",
          "tree_id": "498d8a4c02a390681e72aafa4e36372e6f4547e1",
          "url": "https://github.com/fallow-rs/fallow/commit/8604f89c14304bd43d3394782b736ffc983bce9a"
        },
        "date": 1779471764714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5098718,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27321,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 704269,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6601,
            "unit": "allocations"
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
        "date": 1779476186398,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5104686,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27334,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 691499,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6527,
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
          "id": "5a4bcc0b8c0498059a19894948d554e72716f746",
          "message": "docs: reposition fallow as codebase intelligence",
          "timestamp": "2026-05-22T21:34:50+02:00",
          "tree_id": "b890279d99ac3adf9069bede3ddb65d93175a2ae",
          "url": "https://github.com/fallow-rs/fallow/commit/5a4bcc0b8c0498059a19894948d554e72716f746"
        },
        "date": 1779478618686,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5122326,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27321,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 701991,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6540,
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
          "id": "07b784a4b81c774ed3367b04678a2fa9c907ee05",
          "message": "fix(unused-class-members): credit Playwright helper fixtures\n\nPlaywright users can wrap base.extend in exported helper functions that do local setup before returning the extended test. The extractor previously only recognized helper bodies whose sole statement was return base.extend, so nested fixture page-object methods could be reported as unused.\n\nThis updates helper-function extraction to inspect the final returned call while preserving the existing direct-return and alias-chain behavior. The extraction cache is bumped because cached modules from older builds can miss the fixture definition sentinels.\n\nRegression coverage adds an extractor unit test plus an integration fixture that checks both the local-setup helper path and a direct-return control path, while still reporting genuinely unused methods.\n\nFixes #586.",
          "timestamp": "2026-05-22T20:46:21+01:00",
          "tree_id": "91b82ce3b832350e276d7a95c4ea2e3fd676077e",
          "url": "https://github.com/fallow-rs/fallow/commit/07b784a4b81c774ed3367b04678a2fa9c907ee05"
        },
        "date": 1779479336057,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5101686,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27324,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 643571,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6026,
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
          "id": "e63fbe4d1783276468f87bd81ca022fe8d7a5d48",
          "message": "fix(cli): polish human summary output\n\nCombined human summary output now lets the combined renderer own the section headings while the per-analysis summary renderers suppress their duplicate titles. The report context carries that choice through dead-code, duplication, and health output without changing JSON or CI formats.\n\nExplain accepts issue labels split across words, so commands like `fallow explain unused files` resolve to the same rule metadata as the hyphenated form. Config-loaded notices are deduped by canonical config path so combined runs do not repeat the same line while separate configs still report independently.",
          "timestamp": "2026-05-22T21:05:15+01:00",
          "tree_id": "dcca61d3d8ed640dbc187769c5032fa093b32c53",
          "url": "https://github.com/fallow-rs/fallow/commit/e63fbe4d1783276468f87bd81ca022fe8d7a5d48"
        },
        "date": 1779480451188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5131542,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27326,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 699173,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6533,
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
          "id": "4e7eecf09fdb817b09e0d4654cf6f1f962f4d8d4",
          "message": "fix(tanstack): suppress generated route tree imports\n\nTanStack Router and Start projects commonly import the generated\nroute tree as ./routeTree.gen before src/routeTree.gen.ts exists in a\nclean checkout. That framework artifact was reported as an unresolved\nimport even though TanStack tooling creates it during codegen.\n\nRegister /routeTree.gen as a TanStack Router generated import suffix\nthrough the existing plugin hook. The suppression stays plugin-gated,\nso non-TanStack projects still report the same missing import.\n\nAdd a regression fixture with an active TanStack Router project, no\ngenerated route tree file, and a separate missing import control. The\ntest locks in both the false-positive fix and the ordinary unresolved\nimport behavior.\n\nFixes #646.",
          "timestamp": "2026-05-22T21:17:01+01:00",
          "tree_id": "2063a9403501a471813b45358e0f121025b00554",
          "url": "https://github.com/fallow-rs/fallow/commit/4e7eecf09fdb817b09e0d4654cf6f1f962f4d8d4"
        },
        "date": 1779481172440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5128590,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27323,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 701639,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6538,
            "unit": "allocations"
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
        "date": 1779483216844,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5100914,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27332,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 696915,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6530,
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
          "id": "9a142be9494a3779f06db016f54080a84010c652",
          "message": "fix(jsx): ignore generic JSX resource attributes as side-effect imports\n\nBefore, lowercase intrinsic `<script src=\"...\">` and\n`<link rel=\"stylesheet|modulepreload\" href=\"...\">` literals inside JSX\nand TSX files emitted synthetic `SideEffect` imports via the AST\nvisitor, so SSR-style serializer tests (notably Hono's JSX layout\ntests) produced large false `unresolved-imports` clusters for runtime\nHTML metadata that is not bundler-resolved.\n\nAfter, the JSX visitor path that recorded those attributes is removed.\nHTML files keep their dedicated asset scanner, and bare `html` tagged\ntemplates in JS/TS continue to extract asset references via the\nregex-based HTML scanner. The web-root-relative resolver still applies\nto JS/TS-family files for the tagged-template case. Framework-specific\nJSX asset semantics can be reintroduced later as constrained opt-in\nlogic rather than broad attribute extraction.\n\nExtraction `CACHE_VERSION` is bumped to 96 so warm caches drop the\nstale JSX resource edges on first run after upgrade. Tests are\nrestructured: the unit suite in `tests/js_ts/jsx_assets.rs` asserts the\nnew no-emission behavior, and the integration test renames the fixture\nfrom a static-folder layout to a JSDoc-consumer shape that exercises\nthe remaining JSDoc and `html` tagged-template paths.\n\nFixes #640.",
          "timestamp": "2026-05-22T21:58:29+01:00",
          "tree_id": "cc5eb1a3ab7a022a28240272893cd3489117b688",
          "url": "https://github.com/fallow-rs/fallow/commit/9a142be9494a3779f06db016f54080a84010c652"
        },
        "date": 1779483819444,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5106586,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27339,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 695175,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6534,
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
          "id": "62bed8d6298ba5e83a178f4fcbee05ee7ae548d1",
          "message": "fix(unused-class-members): preserve public package APIs\n\nTreat class members on classes exported from non-private package entry points as part of the public package API, including transitive star barrels and source-first package entry fallbacks. This keeps library builder APIs from being reported as removable internals while still reporting genuinely unused internal members and enum members.\n\nResolve package entry paths that point at missing root build artifacts back to source indexes, and recognize exportless source subpath indexes when no exports map exists. Package manifests also ignore non-boolean private values instead of aborting analysis on permissive real-world package.json data.\n\nFixes #643.",
          "timestamp": "2026-05-22T22:04:17+01:00",
          "tree_id": "da1796a0cbdf1cd2c9b6b88b6351b1ad7f71817a",
          "url": "https://github.com/fallow-rs/fallow/commit/62bed8d6298ba5e83a178f4fcbee05ee7ae548d1"
        },
        "date": 1779484004614,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5146840,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27572,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 701547,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6538,
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
          "id": "6d5b84cd74fbb99e839d1b75ff12933eb26c84b6",
          "message": "chore: release v2.79.0",
          "timestamp": "2026-05-22T23:29:18+02:00",
          "tree_id": "d476e7566053f30eb08ef07ff88ca5fa1f716bff",
          "url": "https://github.com/fallow-rs/fallow/commit/6d5b84cd74fbb99e839d1b75ff12933eb26c84b6"
        },
        "date": 1779485554142,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5090800,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27534,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697883,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6539,
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
          "id": "a23dba54581ec3f59a19ef5e13aaf2713b0896c7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.79.0",
          "timestamp": "2026-05-22T23:59:39+02:00",
          "tree_id": "eb1bb2f69d5d896e3508e09d2dec9c819fcd6fa0",
          "url": "https://github.com/fallow-rs/fallow/commit/a23dba54581ec3f59a19ef5e13aaf2713b0896c7"
        },
        "date": 1779487308779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5128288,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27562,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 650430,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6112,
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
          "id": "4a4873a732459e727c9cba9b37152be367648227",
          "message": "fix(graph): resolve prebuild package maps to source\n\nResolve package.json imports and workspace/root package exports that point at missing prebuild output back to tracked source files. The resolver now loads root and workspace package manifests, evaluates package maps in manifest order, and keeps blocked or unmatched subpaths unresolved instead of turning them into dependency noise.\n\nPreserve dependency accounting by carrying package usage metadata alongside internal file resolution, so self/workspace package imports can still feed unused and unlisted dependency analysis while participating in the module graph.\n\nAdds regression fixtures for Nitro-style package imports and Redux Toolkit-style workspace exports, including blocked, missing, unexported, declared, and undeclared workspace import cases.\n\nFixes #641.",
          "timestamp": "2026-05-23T07:40:46+01:00",
          "tree_id": "91e435d207290ee63851ccaa878a435209f235e9",
          "url": "https://github.com/fallow-rs/fallow/commit/4a4873a732459e727c9cba9b37152be367648227"
        },
        "date": 1779518614323,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5140103,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27607,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 695691,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6538,
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
          "id": "2f8fc779cffcde8caf01b419a60e1017307a5a49",
          "message": "fix(mdx): ignore imports inside documentation code fences\n\nMDX extraction previously treated import and export examples inside fenced Markdown blocks as executable top-level MDX statements. Documentation snippets that use virtual file boundaries could therefore create graph edges and false unresolved-import findings.\n\nTrack CommonMark-style backtick and tilde fences before the existing MDX statement extractor runs. Fenced blocks are skipped entirely, while real top-level MDX imports and exports continue through the same parser path.\n\nAdd unit, parser, and integration coverage for fenced examples, including a fixture that preserves a real top-level missing import as a control. Bump the extraction cache version so warm MDX cache entries are re-extracted on upgrade.\n\nFixes #639.",
          "timestamp": "2026-05-23T07:47:09+01:00",
          "tree_id": "a5459ca8fa383ccdc1ae4582d7cbe993efb94235",
          "url": "https://github.com/fallow-rs/fallow/commit/2f8fc779cffcde8caf01b419a60e1017307a5a49"
        },
        "date": 1779519025804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5088607,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27542,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697403,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6536,
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
          "id": "a9cefb483b39a3fe21e171d56fa7def1dc4bace4",
          "message": "fix(core): treat bare bun as builtin\n\nCloses #642.",
          "timestamp": "2026-05-23T08:04:32+01:00",
          "tree_id": "7ffcc0816f0bda828e6478c5186a364c86c15a22",
          "url": "https://github.com/fallow-rs/fallow/commit/a9cefb483b39a3fe21e171d56fa7def1dc4bace4"
        },
        "date": 1779519999551,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5103023,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27560,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 649339,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6033,
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
          "id": "f92318a75a2aee0732382d8069d8366931f01572",
          "message": "fix(tanstack): suppress Start virtual modules\n\nTanStack Start imports manifest and injected-head script modules through framework-provided virtual specifiers with a :v suffix. Those specifiers are not npm packages, but the TanStack plugin did not register them as virtual modules, so dead-code analysis reported them as unlisted dependencies.\n\nRegister the colon-suffixed TanStack Start virtual module prefixes through the existing plugin virtual-prefix hook. Add plugin-gated positive and negative coverage, including unresolved-import suppression and end-to-end analysis fixtures for static and dynamic imports.\n\nFixes #636.",
          "timestamp": "2026-05-23T08:33:06+01:00",
          "tree_id": "f8c31997a7b57f6ab66e7a20f46bd0f0e039a531",
          "url": "https://github.com/fallow-rs/fallow/commit/f92318a75a2aee0732382d8069d8366931f01572"
        },
        "date": 1779521740352,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5123383,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27579,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697531,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6537,
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
          "id": "a13ec35cec22c6edab315ed472cd634d218f6451",
          "message": "fix(extract): credit Node script runner entrypoints\n\nResolve extensionless package-script paths through directory index files after exact and extension fallback.\n\nCredit statically resolvable local child_process.fork runner targets from proven Node child_process imports and requires, including path.resolve(fileURLToPath(import.meta.url), ...).\n\nFixes #638.",
          "timestamp": "2026-05-23T15:25:08+01:00",
          "tree_id": "cc2a64b75e2862a036c38750f4687a0c2e105a93",
          "url": "https://github.com/fallow-rs/fallow/commit/a13ec35cec22c6edab315ed472cd634d218f6451"
        },
        "date": 1779546522305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5139287,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27687,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697883,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6539,
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
          "id": "ef3298ddc9e17197bf75522d55e90454b35bd006",
          "message": "feat: add Fumadocs plugin\n\nfeat: add Fumadocs plugin\n\nAdd a built-in plugin that recognizes Fumadocs source config files, generated .source modules, configured MDX content roots, and fumadocs-mdx virtual imports. This replaces broad dynamicallyLoaded workarounds with framework-scoped detection.\n\nThe plugin parses literal collection dir values from defineCollections, defineDocs, and direct defineConfig collections entries while avoiding unrelated nested option dir fields. Regression coverage exercises a workspace-shaped docs package and the public everr-labs/everr smoke confirms the old-vs-new docs-content delta.\n\nHarden graph validation exposed by CI: re-export cycle regression tests now assert structured graph payloads instead of captured tracing output, and the package-map lookup skips the canonicalize fallback under Miri because isolated Miri does not support realpath.\n\nFixes #633.",
          "timestamp": "2026-05-23T15:34:07+01:00",
          "tree_id": "79279bff93588e6c08cade4b8d79874d3da115be",
          "url": "https://github.com/fallow-rs/fallow/commit/ef3298ddc9e17197bf75522d55e90454b35bd006"
        },
        "date": 1779546999028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5138791,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27709,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 651891,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6038,
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
          "id": "ac81b9247538cf526db76f97dd2bf18a2f4dceb3",
          "message": "fix(core): honor Wrangler config precedence\n\nMatch Wrangler's same-directory config selection before extracting worker main entries. Only the highest-precedence sibling config contributes main and environment main entry patterns, while all wrangler config files remain credited as used.\n\nPin Wrangler's current source order, json, jsonc, toml, with pairwise tests, a no-fallback presence test, non-sibling isolation, and an end-to-end unused-file regression for stale migration configs.\n\nFixes #630.",
          "timestamp": "2026-05-23T15:52:30+01:00",
          "tree_id": "fb031db1f013464842049888ef4d77509678aaaa",
          "url": "https://github.com/fallow-rs/fallow/commit/ac81b9247538cf526db76f97dd2bf18a2f4dceb3"
        },
        "date": 1779548081151,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5144807,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27737,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697883,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6539,
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
          "id": "c82ba6ffbb26df4fa411b342fe3f0116e00b8eef",
          "message": "feat: add optional review guidance\n\n* feat: add optional review guidance\n\n* test(ci): cover review guidance wiring",
          "timestamp": "2026-05-23T18:25:52+01:00",
          "tree_id": "3bb8bded8e399b9bc2fc1885ddabb9acbacb7aec",
          "url": "https://github.com/fallow-rs/fallow/commit/c82ba6ffbb26df4fa411b342fe3f0116e00b8eef"
        },
        "date": 1779557278568,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5139119,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27732,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697883,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6539,
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
          "id": "4ce779558a06ddbe8cae6096de095b4fee39e9dd",
          "message": "feat: add PR comment summary scope\n\n* chore: open issue #661 implementation branch\n\n* fix(ci): add diff scope for sticky summaries\n\n* test(ci): avoid racy summary scope env mutation",
          "timestamp": "2026-05-24T08:28:55+01:00",
          "tree_id": "4cc7a012a41ca56fae83a44ae06a2000ad424af2",
          "url": "https://github.com/fallow-rs/fallow/commit/4ce779558a06ddbe8cae6096de095b4fee39e9dd"
        },
        "date": 1779607866270,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5149239,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27748,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697531,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6537,
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
          "id": "017658ea7af7473dcc87c921a092f0bd507457fd",
          "message": "chore: release v2.80.0",
          "timestamp": "2026-05-24T09:38:07+02:00",
          "tree_id": "46bd21cb4f96e15a0d4a8dce8b03a8d51af3ba2a",
          "url": "https://github.com/fallow-rs/fallow/commit/017658ea7af7473dcc87c921a092f0bd507457fd"
        },
        "date": 1779608466904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5107119,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27702,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697267,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6534,
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
          "id": "e32cc0a415dcfddc776e9ec032eed6de218e0135",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.80.0",
          "timestamp": "2026-05-24T10:10:02+02:00",
          "tree_id": "c1be6b2b1dc4f2a25c95e6b5029c47cca05d7dd2",
          "url": "https://github.com/fallow-rs/fallow/commit/e32cc0a415dcfddc776e9ec032eed6de218e0135"
        },
        "date": 1779610329294,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5170871,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27733,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 708442,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6603,
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
          "id": "04fc48077af977a27894861d8db1a7c4243c4640",
          "message": "fix: recognize Danger and Stryker tooling configs\n\n* chore: open issue #618 implementation branch\n\n* fix: recognize Danger and Stryker tooling configs",
          "timestamp": "2026-05-25T12:08:53+01:00",
          "tree_id": "ebcbe56176684396b09e661625d1befe40aaa2c8",
          "url": "https://github.com/fallow-rs/fallow/commit/04fc48077af977a27894861d8db1a7c4243c4640"
        },
        "date": 1779707511671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5149983,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27750,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697131,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6532,
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
          "id": "3d93824183baf1a797d8fa4baf36edd9a168bc16",
          "message": "fix: skip platform builtins in unresolved imports\n\nSkip unresolved-import findings when an unresolvable specifier is accepted by is_builtin_module.\n\nAdd regression coverage for current Node, Bun, Cloudflare, Sass, and Deno builtin forms, while keeping builtin-like package names and fake node subpaths reportable.\n\nFixes #634.",
          "timestamp": "2026-05-25T12:26:22+01:00",
          "tree_id": "518433c3eacf3d2fcf6ff740632d20956da63b76",
          "url": "https://github.com/fallow-rs/fallow/commit/3d93824183baf1a797d8fa4baf36edd9a168bc16"
        },
        "date": 1779708510669,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5114303,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27711,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697539,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6538,
            "unit": "allocations"
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
        "date": 1779710862866,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5132991,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27726,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 705250,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6616,
            "unit": "allocations"
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
        "date": 1779712111180,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5130535,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27724,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697883,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6539,
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
          "id": "2f4a8313def90099019820c3e03ba0d571c5bdae",
          "message": "fix: guard CachedModule cache shape\n\n* chore: open issue 443 implementation branch\n\n* fix: guard cached module shape",
          "timestamp": "2026-05-25T13:57:59+01:00",
          "tree_id": "a414603807ce9de5bc42c3bc5f3a639ecb8b0a68",
          "url": "https://github.com/fallow-rs/fallow/commit/2f4a8313def90099019820c3e03ba0d571c5bdae"
        },
        "date": 1779714009046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5154263,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27731,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 695679,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6530,
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
          "id": "a48e02fed77f1ec08347e771a8c6e72d465801ef",
          "message": "fix(health): clarify ownership state\n\nFixes #478.",
          "timestamp": "2026-05-25T14:46:04+01:00",
          "tree_id": "4649914d7218365d935d0c06bc54813332c0733a",
          "url": "https://github.com/fallow-rs/fallow/commit/a48e02fed77f1ec08347e771a8c6e72d465801ef"
        },
        "date": 1779716912944,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5136263,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27728,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697823,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6538,
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
          "id": "c0f47b501edd68de711a5c59cdec99d52ef5e91b",
          "message": "fix: harden programmatic napi analysis context\n\nAdd per-call Rayon pools for programmatic and N-API analyses so thread counts do not become first-call-wins process state.\n\nAdd programmatic diff_file and N-API diffFile, and thread explicit diff indexes through dead-code, duplication, and health execution without letting embedded callers fall back to the CLI shared diff cache.\n\nAdd regression coverage for CLI global parity, per-call thread counts, per-call diff scoping, shared-diff isolation, and Node diffFile usage.\n\nFixes #469.",
          "timestamp": "2026-05-25T14:59:20+01:00",
          "tree_id": "b3afbf6694de62a65356b73ca946001919187f5c",
          "url": "https://github.com/fallow-rs/fallow/commit/c0f47b501edd68de711a5c59cdec99d52ef5e91b"
        },
        "date": 1779717691893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5108175,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27705,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 649939,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6037,
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
          "id": "2a38c0a6b2ae19425265647648c7bfc4d03e8abb",
          "message": "fix: harden fallow cloud API client\n\nCentralize cloud API client setup, Retry-After handling, shared error-envelope parsing, and FALLOW_CA_BUNDLE support across fallow cloud paths.\n\nFixes #464.",
          "timestamp": "2026-05-25T15:10:51+01:00",
          "tree_id": "983f95bba320d2c443d068ddd73c11162e609973",
          "url": "https://github.com/fallow-rs/fallow/commit/2a38c0a6b2ae19425265647648c7bfc4d03e8abb"
        },
        "date": 1779718386271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5159687,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27733,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 695679,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6530,
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
          "id": "de21eb76e285ceb042bfb24a08cae294c60200fa",
          "message": "fix: harden reconcile-review apply\n\n* chore: open issue #459 implementation branch\n\n* fix: make reconcile review apply fail fast",
          "timestamp": "2026-05-25T19:08:44+01:00",
          "tree_id": "6ac8bcc88c718f5e1778035edd064d95cba0bcf0",
          "url": "https://github.com/fallow-rs/fallow/commit/de21eb76e285ceb042bfb24a08cae294c60200fa"
        },
        "date": 1779732646181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5148775,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27745,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697259,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6533,
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
          "id": "32ba9d5bed686d80322176eebd695868c8061590",
          "message": "fix: make coverage setup resumable\n\nPersist coverage setup progress in `.fallow/setup.json`, guard human setup runs with `.fallow/setup.lock`, and validate resume state against current project artifacts before skipping work.\n\nFixes #460.",
          "timestamp": "2026-05-25T19:15:09+01:00",
          "tree_id": "e9570c8b648845afc03c142805cdb7d5bc93d878",
          "url": "https://github.com/fallow-rs/fallow/commit/32ba9d5bed686d80322176eebd695868c8061590"
        },
        "date": 1779733093161,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5188015,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27761,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 701411,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6536,
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
          "id": "3bbc57c10ff91d823d29d06779921330da07b935",
          "message": "test: gate MCP tool default drift\n\nCloses #455",
          "timestamp": "2026-05-25T19:24:23+01:00",
          "tree_id": "92b272b9aed73a1a8ddcb463550cdeada56cee99",
          "url": "https://github.com/fallow-rs/fallow/commit/3bbc57c10ff91d823d29d06779921330da07b935"
        },
        "date": 1779733609595,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5132671,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27723,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 697539,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6538,
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
          "id": "7f225736d007ddfa3a0959f71c274cc0ba3d144c",
          "message": "fix: treat scaffold templates as used assets\n\n* chore: open issue #635 implementation branch\n\n* fix: treat scaffold templates as used assets",
          "timestamp": "2026-05-25T22:07:46+01:00",
          "tree_id": "f2c36b50d7864fa21033a8a0bb305726d775117a",
          "url": "https://github.com/fallow-rs/fallow/commit/7f225736d007ddfa3a0959f71c274cc0ba3d144c"
        },
        "date": 1779743467416,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5165407,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27738,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 699483,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6538,
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
          "id": "10c5ec717d3b09c0c151dec306f458555fdd7ebc",
          "message": "fix: normalize coverage lock path assertion",
          "timestamp": "2026-05-25T23:16:13+02:00",
          "tree_id": "8ccaf38c7ef9e7167bc3dbde0a1bcd868f5a43c6",
          "url": "https://github.com/fallow-rs/fallow/commit/10c5ec717d3b09c0c151dec306f458555fdd7ebc"
        },
        "date": 1779743906003,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 5147767,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 27741,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 691535,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 6528,
            "unit": "allocations"
          }
        ]
      }
    ]
  }
}