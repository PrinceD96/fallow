window.BENCHMARK_DATA = {
  "lastUpdate": 1781865047926,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ccd01ff82498bc7f2924faae33b3123a9e68ec76",
          "message": "feat(suggestions): first-contact setup pointer for unconfigured projects\n\nBare fallow and the standalone analyses now point first-time users at the\nguided-setup surface, on the channel each audience actually reads:\n\n- JSON envelopes (dead-code, health, dupes, combined) lead next_steps[]\n  with a read-only 'setup' step (command: fallow schema) whose manifest\n  lists the agent-guide and commit-gate commands to offer the user. The\n  read-only contract holds: the mutating commands are named in the\n  manifest and skill layer, never embedded in a next-step.\n- Bare fallow human output prints a one-line setup hint, deliberately\n  not TTY-gated so agents reading piped output see it too.\n\nBoth surfaces share one gate: no config file (searched to the repo\nroot), not CI, suggestions enabled, findings present, and no recorded\nfallow impact decline-onboarding. The human Next: line keeps showing an\nanalysis follow-up; the prose hint is the human setup channel.",
          "timestamp": "2026-06-11T21:59:09+02:00",
          "tree_id": "1584b4bc82f8d9508b0409b3cb767d6f3271975f",
          "url": "https://github.com/fallow-rs/fallow/commit/ccd01ff82498bc7f2924faae33b3123a9e68ec76"
        },
        "date": 1781208420865,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 280046432,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6ba7c22124b08d103612444f9a65e3b76d263d02",
          "message": "refactor(init): move the onboarding decline to fallow init --decline\n\nThe decline surfaced as a hidden impact subcommand because its storage\nlives in the Impact store, but storage is an implementation detail and\nthe command namespace is UX: declining setup has nothing to do with the\nImpact value report, and the setup hint now names the command in\nuser-facing output. init is the setup namespace, so the decline lives\nthere: fallow init --decline persists the decision (no config written,\nImpact stays untouched) and conflicts with the scaffolding flags. The\nimpact decline-onboarding subcommand is removed without an alias; it\nwas never released.",
          "timestamp": "2026-06-11T22:58:40+02:00",
          "tree_id": "32a26fb7a8dc66725564408a22a0eb780fa3857b",
          "url": "https://github.com/fallow-rs/fallow/commit/6ba7c22124b08d103612444f9a65e3b76d263d02"
        },
        "date": 1781212032183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 280070320,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c8e0ccc48e0b36c71088af5dd528384702bb3cd6",
          "message": "fix(suggestions): print the setup hint after the failure summary\n\nIn the header position the hint scrolled away on any sizable first run;\nthe failure summary tail is what a human actually reads. The hint now\nfollows the Failed: line on stderr, sharing its quiet gate, so it is\nthe last line of a failing first-contact run.",
          "timestamp": "2026-06-11T23:09:03+02:00",
          "tree_id": "2ed0a91b24eb73cf5108268ad29ccb2a4bafe1ad",
          "url": "https://github.com/fallow-rs/fallow/commit/c8e0ccc48e0b36c71088af5dd528384702bb3cd6"
        },
        "date": 1781212621191,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 280066304,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "290d639d13fd0cc357b4c155f3ed2d8781045dc2",
          "message": "refactor: continue sig unit-size cleanup",
          "timestamp": "2026-06-11T23:31:42+02:00",
          "tree_id": "9ea5193723fd3f1e0c0e24202a955d1c2cdc48a6",
          "url": "https://github.com/fallow-rs/fallow/commit/290d639d13fd0cc357b4c155f3ed2d8781045dc2"
        },
        "date": 1781213996227,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 280078024,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "781b3adf69cd2e1030506cbe00bb8d251e721a49",
          "message": "feat(cli): support coverage inputs in combined mode\n\nBare combined analysis now accepts the same Istanbul coverage inputs as standalone health, so default fallow runs can use exact CRAP scoring instead of silently falling back to the static estimate.\n\nThe CLI resolves coverage inputs for standalone health and bare combined mode with CLI, env, config, then auto-detection precedence. The coverage data is forwarded through CombinedOptions into the embedded health pass, while pre-subcommand bare coverage flags are rejected with a structured error so fallow --coverage file dead-code cannot be ignored.\n\nThe GitHub Action and GitLab template now forward coverage inputs for their default combined runs, and the config schema, docs, companion references, and regression tests cover CLI, env, config, mixed precedence, and wrapper paths.\n\nThe merge also keeps setup guidance from appearing for nonexistent analysis roots, which removes a local versus CI split in JSON snapshot tests after the latest mainline setup hint change.\n\nFixes #300.",
          "timestamp": "2026-06-11T23:40:28+02:00",
          "tree_id": "8cfa1e09ad3c9f98b4f629e59ab8dead96022157",
          "url": "https://github.com/fallow-rs/fallow/commit/781b3adf69cd2e1030506cbe00bb8d251e721a49"
        },
        "date": 1781214527899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 280167728,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "28e59c02f873b5036fa430a4859fcde3fabfaa08",
          "message": "feat(impact): periodic value digest and explicit opt-in decision state\n\nTwo agent-loop additions so the user hears what fallow does for them\nand is asked for the impact/telemetry opt-ins exactly once:\n\n- impact-report next_step: an at-most-weekly local value digest (real\n  counters: commits contained at the gate, findings resolved) on the\n  dead-code/health/dupes/combined envelopes, plus a one-line human\n  Impact: counterpart with the run summary. The cadence stamp lives in\n  the impact store so it is consistent across agents and sessions; CI,\n  disabled suggestions, and zero counters suppress it. Unlike every\n  other trigger it may ride a clean run: a clean project after a period\n  of containment is exactly when the value report is informative.\n- explicit_decision on the impact store and report: impact enable and\n  disable both record that the user decided, so a skill can distinguish\n  asked-and-declined from never-asked (mirrors telemetry's field) and\n  offer the opt-in once, also on already-configured projects.\n\nContracts regenerated (output-schema.json + both output-contract.d.ts).",
          "timestamp": "2026-06-11T23:54:12+02:00",
          "tree_id": "3b92376de1b404ddf9c4840e7a4ace657d242887",
          "url": "https://github.com/fallow-rs/fallow/commit/28e59c02f873b5036fa430a4859fcde3fabfaa08"
        },
        "date": 1781215333027,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 280219640,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rice@shawnrice.org",
            "name": "Shawn Patrick Rice",
            "username": "shawnrice"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e35d2b50c84318d3bda4b1f634fc61695fe6beb",
          "message": "fix(extract): skip multi-byte escapee in quoted attribute scanner\n\nThe quoted attribute scanner advanced a fixed byte count after a backslash, which could leave the cursor inside a multi-byte escaped character.\n\nAdvance past the backslash and then over one full UTF-8 character, matching the rest of the scanner and preventing char-boundary panics on Angular templates.",
          "timestamp": "2026-06-12T01:20:20+02:00",
          "tree_id": "6b3e5c5093658d4125e1c4735f7197328893cb87",
          "url": "https://github.com/fallow-rs/fallow/commit/4e35d2b50c84318d3bda4b1f634fc61695fe6beb"
        },
        "date": 1781220503602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 280221840,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "1a5676dbb1146d079ee2ef977f152087d96d38e5",
          "message": "chore: release v2.94.0",
          "timestamp": "2026-06-12T02:10:23+02:00",
          "tree_id": "0778f413eb6272cc3a9f65a5a5be1d476e400367",
          "url": "https://github.com/fallow-rs/fallow/commit/1a5676dbb1146d079ee2ef977f152087d96d38e5"
        },
        "date": 1781223523600,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 280304296,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "8d811649ba1750b819d43474a374fe81cb8a447e",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.94.0",
          "timestamp": "2026-06-12T02:48:45+02:00",
          "tree_id": "e88d0481fa0852ccb409725a1a66af33fec62691",
          "url": "https://github.com/fallow-rs/fallow/commit/8d811649ba1750b819d43474a374fe81cb8a447e"
        },
        "date": 1781225769734,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 280304296,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "969307e5d38b97cb7ef543d798f9a8098d916f78",
          "message": "refactor(unit-size): split oversized Rust functions\n\nContinue the SIG unit-size cleanup by extracting focused helpers from large CLI, config, core, extract, graph, LSP, and MCP functions.\n\nThe refactors keep behavior intact while reducing the share of function LOC in the high-risk unit-size buckets. Validation covered conflict-marker checks, em-dash checks, cargo build, and the workspace test suite before commit.",
          "timestamp": "2026-06-12T14:57:29+02:00",
          "tree_id": "ca9ebaaa7ee48b6c010664de4d4ff490543d8eaf",
          "url": "https://github.com/fallow-rs/fallow/commit/969307e5d38b97cb7ef543d798f9a8098d916f78"
        },
        "date": 1781269522326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 280348992,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9618e15c326f4202aa00b43e78a8c418c43edf84",
          "message": "feat: scope policy rule suppressions\n\nRule-pack policy suppressions can now target a single policy identity with `policy-violation:<pack>/<rule-id>`, while the bare `policy-violation` token remains the broad family suppression.\n\nThe implementation preserves scoped targets through extraction and duplicate caches, stale suppression reporting, active suppression attribution, generated actions, human guidance, and generated output contracts. Rule-pack names and rule ids now reject ambiguous characters so scoped tokens do not need escaping.\n\nFixes #1180.",
          "timestamp": "2026-06-12T15:36:32+02:00",
          "tree_id": "d87f6771b0525c4658c236c6de644a6f466e2877",
          "url": "https://github.com/fallow-rs/fallow/commit/9618e15c326f4202aa00b43e78a8c418c43edf84"
        },
        "date": 1781272126273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 280515440,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c187b94f0cddf9ea2e0f77e6a21707001764c434",
          "message": "feat: add health threshold overrides\n\nAdd health.thresholdOverrides for local cyclomatic, cognitive, and CRAP ceilings matched by file glob and optional function name.\n\nThread effective thresholds through health and audit, including report actions and active, stale, and no-match state across output contracts.\n\nUpdate docs, schemas, MCP descriptions, generated TypeScript contracts, and regression coverage for config loading, health output, audit behavior, scoped runs, and real fixture validation.\n\nFixes #1206.",
          "timestamp": "2026-06-12T16:00:16+02:00",
          "tree_id": "64ddd6978354d671c9aa7c93528ea126a7d06108",
          "url": "https://github.com/fallow-rs/fallow/commit/c187b94f0cddf9ea2e0f77e6a21707001764c434"
        },
        "date": 1781273269769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 281410440,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4d2d5113f84725fff0de249bb91e7125337e093",
          "message": "fix: credit Playwright fixture wrapper members\n\nPlaywright projects can compose typed fixture test objects through `mergeTests(...)` and wrapper `.extend(...)` calls. The direct fixture correlation already credited page-object methods, but wrapper test objects lost the fixture definition side of that correlation, so `unused-class-members` reported methods that were only reached through merged or extended fixtures.\n\nThis adds a conservative Playwright fixture alias sentinel in extraction and expands those aliases in the unused-member analyzer with a bounded, deduped fixed-point pass. The import gate only accepts Playwright's named `mergeTests` import, including aliased imports, and unmatched wrapper aliases do not credit anything. Namespace imports remain out of scope.\n\nRegression coverage includes extractor alias tests, a full issue fixture covering direct, merged, extended, and transitive wrapper paths, and controls proving genuinely unused decorated methods still report.\n\nFixes #1210.",
          "timestamp": "2026-06-12T16:28:13+02:00",
          "tree_id": "fadd10b74170c665bc37f3787ce8298bb618889f",
          "url": "https://github.com/fallow-rs/fallow/commit/f4d2d5113f84725fff0de249bb91e7125337e093"
        },
        "date": 1781274997142,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 281585456,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7efec6de07a5aff41d8e047cab2734d69580d2fc",
          "message": "chore: release v2.95.0",
          "timestamp": "2026-06-12T16:53:10+02:00",
          "tree_id": "856ce377e9c44f4e8f77d9976da5e9be6d427939",
          "url": "https://github.com/fallow-rs/fallow/commit/7efec6de07a5aff41d8e047cab2734d69580d2fc"
        },
        "date": 1781276543035,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 281541032,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "12504f54b9332c3b7f6038d22c21c8c1c3ac3d28",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.95.0",
          "timestamp": "2026-06-12T17:30:25+02:00",
          "tree_id": "f07d582b4f701f9c19fe93de14814933351b26c8",
          "url": "https://github.com/fallow-rs/fallow/commit/12504f54b9332c3b7f6038d22c21c8c1c3ac3d28"
        },
        "date": 1781278675472,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 281541032,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4925a499e2f1696435eca1afd5e69bd5be98273b",
          "message": "feat(dupes): make ignoreImports the default with opt-out (#1226)\n\nFlip `fallow dupes`'s `ignoreImports` from opt-in (shipped in 2.33.0) to default-`true`. Token-identical sorted import blocks are a formatting artifact, not copy-paste, so they no longer surface as clone groups on a first run.\n\nThe OR-merge could not express opt-out, so `DupesOptions.ignore_imports` (and the programmatic `DuplicationOptions`) became `Option<bool>` resolved by precedence (CLI override > config > default-true) at the single `build_dupes_config` chokepoint. New opt-out flags `--no-ignore-imports` (standalone) and `--dupes-no-ignore-imports` (combined), both `conflicts_with` their opt-in pair. MCP `find_dupes` / `trace_clone` emit `--no-ignore-imports` on `ignore_imports: false` and now name the default in their descriptions and param docs. The VS Code `fallow.duplication.ignoreImports` setting controls both directions (it previously no-op'd on `false`). A human-format-only stderr note points users at the opt-out when import blocks were excluded and clone groups were reported.\n\nScope is ES `import` declarations only; CommonJS `require()` calls and `export ... from` re-export blocks are still counted (extending coverage to those is queued as #1225). Upgraders with a tuned `duplicates.threshold` gate or saved duplication baselines/trends get explicit CHANGELOG notes (the measured percentage drops, so a tuned gate loosens and a one-time baseline/Impact step-down is expected).\n\nFixes #1224.",
          "timestamp": "2026-06-13T08:36:36+02:00",
          "tree_id": "c5247ba5afc62e720fb5de44dbfde1d03981a848",
          "url": "https://github.com/fallow-rs/fallow/commit/4925a499e2f1696435eca1afd5e69bd5be98273b"
        },
        "date": 1781333095947,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 281570608,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f54c7ea3a35dfdf4fb9255d584d68f4d51ce7ec",
          "message": "feat(impact): relocate store to user config dir; global opt-in default\n\nRelocates the Fallow Impact store out of each repo's .fallow/impact.json into the user's private config dir (<config-dir>/fallow/impact/<project-key>.json, the same base as telemetry.json), so enabling Impact or recording a run writes nothing into the working tree: no .fallow/ directory, no .gitignore edit. The store is keyed by repo identity via git rev-parse --git-common-dir, so running fallow impact from any subdirectory or any git worktree of a repo resolves to one shared history.\n\nAdds a user-global opt-in (fallow impact default on|off) with a per-project enable/disable always winning; the report and MCP tool gain enabled_source (project/user/default); new fallow impact reset [--all] deletes history (the global toggle survives a wipe); per-finding attribution baselines are namespaced per worktree (store schema 3 to 4); recording is forced off in CI. An existing in-repo .fallow/impact.json is imported once on first run and then left untouched. EnabledSource is regenerated into docs/output-schema.json and both TS contracts; ImpactReportSchemaVersion stays V1 (wire-additive).",
          "timestamp": "2026-06-13T09:21:01+02:00",
          "tree_id": "b9fea371c160c07b5c45809a6d2b786529e62b5f",
          "url": "https://github.com/fallow-rs/fallow/commit/0f54c7ea3a35dfdf4fb9255d584d68f4d51ce7ec"
        },
        "date": 1781335887928,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 282335848,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7bed9e48bf7a27d3a1e78f1d0c29b3a64a10c36c",
          "message": "fix(impact): isolate the CI record-gate in unit tests\n\nrecord_audit_run / record_combined_run short-circuit on telemetry::is_ci()\nso Impact never records on CI. The unit tests run on CI too (GitHub Actions\nsets CI / GITHUB_ACTIONS), so that gate made 16 record-dependent impact tests\nwrite nothing and fail on the Linux and Windows runners while passing on a\ndeveloper's machine where CI is unset.\n\nRoute the gate through a record_gate_is_ci() helper that, under #[cfg(test)],\nreads a per-test TEST_FORCE_CI thread-local (default false) instead of the\nambient env, mirroring the existing TEST_CONFIG_DIR isolation. Tests now record\ninto their isolated temp store regardless of the suite's CI environment, and a\nnew record_is_a_noop_in_ci test forces the override true to pin the production\ngate. The release binary is unchanged: under #[cfg(not(test))] the helper is\nexactly telemetry::is_ci(), so the feature's CI behavior is untouched.",
          "timestamp": "2026-06-13T09:45:57+02:00",
          "tree_id": "db3cd1b741a48d6c5a1d4a185c15580d4abc1042",
          "url": "https://github.com/fallow-rs/fallow/commit/7bed9e48bf7a27d3a1e78f1d0c29b3a64a10c36c"
        },
        "date": 1781337244160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 282335984,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "5d837a2353f383a7e576f8fe9c059813d12b8992",
          "message": "docs(impact): drop intra-doc link to cfg(test)-only TEST_FORCE_CI\n\nrecord_gate_is_ci is compiled in non-test builds, so cargo doc resolves its\ndoc comment; the [`TEST_FORCE_CI`] intra-doc link pointed at a #[cfg(test)]\nitem absent from the doc build, failing the Documentation job under\n-D warnings. Render it as a plain inline code span instead.",
          "timestamp": "2026-06-13T09:59:28+02:00",
          "tree_id": "e8e78d8d5777d2402e9e2b690a09c02dbdb4c344",
          "url": "https://github.com/fallow-rs/fallow/commit/5d837a2353f383a7e576f8fe9c059813d12b8992"
        },
        "date": 1781338019226,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 282335984,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "24a30b1d266f477c30f6878fc9e4c34c00d04d75",
          "message": "chore: release v2.96.0",
          "timestamp": "2026-06-13T10:20:00+02:00",
          "tree_id": "7fab582fbe8086f206009876318678e3fa5f2685",
          "url": "https://github.com/fallow-rs/fallow/commit/24a30b1d266f477c30f6878fc9e4c34c00d04d75"
        },
        "date": 1781339276156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 282407304,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4bbacc94af59a4e5b20523d7422bf21cd5f4696b",
          "message": "feat(nextjs): flag server-only exports in \"use client\" files (#1229)\n\nFirst stage of the Next.js RSC differentiated-detection program (panel-approved).\n\n**C.1 `invalid-client-export` (new issue type, default warn):** a file carrying the `\"use client\"` directive that also exports a Next.js server-only or route-segment-config name (`metadata`, `generateMetadata`, `generateStaticParams`, `getServerSideProps`, route HTTP methods, `revalidate`, `dynamic`, ...). Next.js throws this at build time; fallow catches it statically in the same pass as the rest of dead-code analysis. The client component's `default` export is never flagged, and the rule only runs when `next` is a declared dependency (FP gate). Reported across human, JSON, SARIF, CodeClimate, compact, and markdown plus the LSP; suppressible via `// fallow-ignore-next-line invalid-client-export`; participates in audit introduction attribution and baselines.\n\n**E (capability headline):** integration coverage proving fallow reports route-internal unused exports (a stray helper export or a typo'd `metadata`) inside `app/page.tsx` where knip cannot, because fallow credits a precise per-route-file export allowlist rather than treating the whole route file as an opaque entry point.\n\nTeam review: rust, cli-output, json-output, ci-formats, lsp, github-action reviewers; one BLOCK (audit-attribution annotation) and two CONCERNs (human footer/suppress hint, jq tests) all resolved with regression tests. Full workspace test, clippy, fmt, doc, VS Code codegen, and jq suites green.",
          "timestamp": "2026-06-13T10:39:15+02:00",
          "tree_id": "59623c553fab4695b70e4506f0bd2217beb4d544",
          "url": "https://github.com/fallow-rs/fallow/commit/4bbacc94af59a4e5b20523d7422bf21cd5f4696b"
        },
        "date": 1781340432629,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 283079480,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3bcde2d9e7558740987a852a23ade52b23ddd09e",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.96.0",
          "timestamp": "2026-06-13T10:56:53+02:00",
          "tree_id": "0c52351e18f9df84d7997f72bc78ef33d075ed1f",
          "url": "https://github.com/fallow-rs/fallow/commit/3bcde2d9e7558740987a852a23ade52b23ddd09e"
        },
        "date": 1781341457988,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 283079480,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e96ae8e67c33c9b923483e9827424c93db2e4bab",
          "message": "feat(security): flag use-client cones that reach server-only code (#1231)\n\nStage 2 of the Next.js RSC differentiated-detection program.\n\nExtends the opt-in `fallow security` `client-server-leak` rule (default `off`) with a second sink predicate: a `\"use client\"` file whose transitive static-import cone reaches **server-only code**, emitted as a distinct `server-only-import` candidate category on the same rule, suppress kind, and finding shape. fallow catches this without requiring the `server-only` poison package and before a build (Next.js only errors at build time when the marker is present).\n\n- **Narrow sink set** (FP-conservative, no DB-client heuristic): a `\"use server\"` module, a `server-only` import, or a named server-only API (`next/headers` `cookies`/`headers`/`draftMode`, `next/server`, node `fs`/`child_process`, both `node:` and bare forms).\n- **`next/dynamic(..., { ssr: false })` aware**: a server module reached only through the sanctioned client-only dynamic import is not a leak. The extract layer captures those import spans on `ModuleInfo.client_only_dynamic_import_spans` (CACHE_VERSION bump) and the BFS skips an edge reached only through them.\n- **Direct case**: a `\"use client\"` file that itself imports a server-only sink is reported with a single self-hop trace; the transitive emit is gated so it reports once.\n- Opt-in and candidate-framed (never a verified vulnerability); `security_findings` stays out of bare `fallow` / `audit`. `SecuritySchemaVersion` bumped to V7 since `client-server-leak` findings can now carry the `server-only-import` category.\n\nTeam review: rust, json-output, mcp reviewers (zero BLOCKs); the direct-case coverage gap, the V7 schema bump, stale doc/schema descriptions, a misleading fixture comment, and thin sink-predicate fixtures were all addressed with new tests. Full workspace test, clippy, fmt, doc, codegen, and the security smoke (10 findings, `schema_version: 7`, zero under bare `fallow`) green.",
          "timestamp": "2026-06-13T11:39:29+02:00",
          "tree_id": "50ea45079671eac9673e065f90adb8630273d4a0",
          "url": "https://github.com/fallow-rs/fallow/commit/e96ae8e67c33c9b923483e9827424c93db2e4bab"
        },
        "date": 1781344058220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 283392584,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e773171cd5d6dcf17019c270b7a8fe98a0f5f7b",
          "message": "feat(nextjs): flag barrels that re-export both client and server-only code (#1232)\n\nAdds the mixed-client-server-barrel issue type (default warn): a barrel file that re-exports BOTH a \"use client\" origin module AND a server-only origin module, dragging directive context across the React Server Components boundary.\n\nThe detector classifies only direct re-export origins, is gated on the project declaring next, and shares the server-only predicate with the security detector. FP guards: client + server-only trigger only (not client + plain util), type-only re-exports skipped. No auto-fix; suppress hint only. Full plumbing across results, audit attribution, all six report formats, LSP diagnostics, schema, and TS contracts.",
          "timestamp": "2026-06-13T12:38:33+02:00",
          "tree_id": "4d94908b3e5b24abd105202abd6a3388abc613cd",
          "url": "https://github.com/fallow-rs/fallow/commit/0e773171cd5d6dcf17019c270b7a8fe98a0f5f7b"
        },
        "date": 1781347699402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 284087464,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81f5da2d2376ed00a92cb29ea9e6d93b66489a5c",
          "message": "feat(impact): add cross-repo view (fallow impact --all)\n\nAggregate every project's Impact history into one roll-up: what has fallow done for me across all my repos. `fallow impact --all` reads the per-project stores in the user config dir (the substrate the v2.96 store relocation created); read-only, never writes.\n\n--all is a flag on the impact command (rejected with exit 2 alongside a mutating subcommand), with --sort {recent,resolved,contained,name} (default recent) and --limit N (totals always reflect every store). load_all enumerates the config dir, skipping corrupt files (counted, never defaulted); build_aggregate_report reuses build_report per store and sums totals over all tracked projects, excluding enabled-but-empty ones from the rows. New FallowOutput::ImpactCrossRepo(CrossRepoImpactReport) envelope (kind:\"impact-cross-repo\", independent schema version) embeds the per-project ImpactReport verbatim plus a stable project_key and a basename label; the single-project impact contract is byte-identical. Additive store field label (git-toplevel basename only, never a path; STORE_SCHEMA_VERSION 4 to 5) captured on record so rows are legible without reversing the opaque key. JSON/markdown leak zero paths.",
          "timestamp": "2026-06-13T13:17:02+02:00",
          "tree_id": "4b9a92b91e0837a61d99193ecbbdbe17bf04d279",
          "url": "https://github.com/fallow-rs/fallow/commit/81f5da2d2376ed00a92cb29ea9e6d93b66489a5c"
        },
        "date": 1781349894356,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 285072320,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781350457309,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 285072320,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781352162684,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 285862224,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781375031170,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 286853336,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781382243185,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 287849040,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781385010993,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 287876944,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781416140591,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 287876944,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781417652078,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 289796952,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781425528095,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 289810552,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781430217399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 289813440,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781439249789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 290690888,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781452121927,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 292280824,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781460562340,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 293736120,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781469858954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 294427816,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781506060008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 294433272,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781516884410,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 294452456,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781517931436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 294452352,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781520340057,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 294460976,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781522094150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 294468368,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781528706496,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 294468368,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781529739043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 294464720,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781533593311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 294470120,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781535014629,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 295421088,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781536712429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 295421088,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781537466436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 330844992,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781538415191,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 332782304,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781541151936,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 333604304,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781547428178,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 333633776,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781553877732,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 333633776,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1781556740727,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 333633784,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
      }
    ]
  }
}