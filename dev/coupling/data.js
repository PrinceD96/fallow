window.BENCHMARK_DATA = {
  "lastUpdate": 1787042621121,
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
          "id": "a8e0a2bb3611219c9a77a13324de38e25f93e421",
          "message": "fix(plugins): close config-extraction and dependency-crediting gaps\n\nWrapper calls were scanned for the first object literal at any argument position, so a wrapper's own options object shadowed the config whenever the config arrived as an identifier or a nested call, which is the shape the @sentry/nextjs wizard emits. Config callbacks were searched for a return only among top-level statements, so the mode-branching shape Vite documents extracted nothing. Vite and Vitest also load .cts and .cjs configs, which were not enumerated.\n\nAlongside those: the fully qualified `jest-environment-jsdom` now gets the same optional-peer credit as the bare name, `edge-runtime` credits `@edge-runtime/vm` instead of two names that do not exist, and scoped eslint formatters such as `@microsoft/eslint-formatter-sarif` are no longer mistaken for file paths.\n\nEvery change is paired with a negative case, and a real-project probe holds at 752 issues with all seven genuine unused dependencies still reported.\n\nAdmin merge: the only failing check is CodSpeed Performance Analysis, which reports an internal error while processing the run's data. Every benchmark job in the workflow itself succeeded, and analysis timing on a real project is unchanged (101-167ms against a 156ms baseline).",
          "timestamp": "2026-07-27T20:42:40+02:00",
          "tree_id": "5a47dbd4e0169278059c4a2b7f0a79cd42821a66",
          "url": "https://github.com/fallow-rs/fallow/commit/a8e0a2bb3611219c9a77a13324de38e25f93e421"
        },
        "date": 1785178105102,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
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
          "id": "722e4a64347f3c7c544df5084ce9211b2aa18d25",
          "message": "chore(napi): refresh 3.10.0 lockfile after publish",
          "timestamp": "2026-07-27T21:01:11+02:00",
          "tree_id": "d2da57f724338c0b0a8278f3bdab4b1706403c63",
          "url": "https://github.com/fallow-rs/fallow/commit/722e4a64347f3c7c544df5084ce9211b2aa18d25"
        },
        "date": 1785178958867,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
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
          "id": "742076bafcbcb626e8b39a01aa35ec13eddd86c0",
          "message": "fix(plugins): let a callback's own return outrank a branch return\n\nBranch descent searched returns at the same precedence as the callback's own statements, so a guard clause shadowed the real config: `if (!mode) { return {}; } return { test: {...} };` resolved to the empty object. That shape worked before descent existed, so it was a regression.\n\nA return at the body's own level now always wins; branches are searched only when there is none, which keeps Vite's documented if/else form working.\n\nThe test meant to guard this asserted the regressed value, so it locked the bug in rather than catching it. Replaced with cases that pin the trailing return, plus an else-if chain.\n\nAdmin merge: the only failing check is CodSpeed Performance Analysis reporting an internal error while processing the run's data; every benchmark job in the workflow succeeded.",
          "timestamp": "2026-07-27T21:38:40+02:00",
          "tree_id": "4b56dd17d210e593241e480bcfe8fb7a8b78001a",
          "url": "https://github.com/fallow-rs/fallow/commit/742076bafcbcb626e8b39a01aa35ec13eddd86c0"
        },
        "date": 1785181199164,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
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
          "id": "52732287e06d6ca4886ec548c7686b7563724943",
          "message": "fix(brand): tighten standalone icon safe area",
          "timestamp": "2026-07-27T19:43:09Z",
          "tree_id": "b9374c05679fd87b6e32abc8d8c77bd9031a3985",
          "url": "https://github.com/fallow-rs/fallow/commit/52732287e06d6ca4886ec548c7686b7563724943"
        },
        "date": 1785181461318,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
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
          "id": "2ffd3a327285b23e4163bd8b867d8b784a5d7f4e",
          "message": "fix: make report favicon edge to edge",
          "timestamp": "2026-07-27T21:44:29Z",
          "tree_id": "d37f37a0852463ca65cd18423f1e07e1d6eb10f6",
          "url": "https://github.com/fallow-rs/fallow/commit/2ffd3a327285b23e4163bd8b867d8b784a5d7f4e"
        },
        "date": 1785188733713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
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
          "id": "e0ae72ba0344f3ab2cf9daa555463f5229672ca7",
          "message": "feat(plugins): parse nx.json and .releaserc.json, credit lightningcss and folded CI runs\n\nNx and semantic-release both listed a config file for activation but not for parsing, so it was protected from unused-file reporting while everything it declared stayed invisible. nx.json now yields its plugins, targetDefaults executors and task runners; .releaserc.json joins the JS forms already parsed, while the YAML forms and the extensionless variant stay activation-only because the extractor is a JS/JSON parser.\n\nVite ships the lightningcss integration but not the package, so css.transformer or build.cssMinify selecting it makes the dependency load-bearing with no import anywhere.\n\nThe CI scanner recognized only the literal block scalar, so a folded 'run: >' pushed the string '>' as the command and discarded the actual script.\n\nAn empty ignoreFindings pattern is also no longer a hard config-load failure: ignorePatterns already accepts it, and the error message named a negation the pattern does not contain.\n\nEach fix carries a negative control, and the real-project probe holds at 752 issues with all seven genuine unused dependencies still reported.\n\nCloses #2015",
          "timestamp": "2026-07-28T00:43:49+02:00",
          "tree_id": "9ad7d9b47329ee4a3067d16aceabc0bfd555e1b3",
          "url": "https://github.com/fallow-rs/fallow/commit/e0ae72ba0344f3ab2cf9daa555463f5229672ca7"
        },
        "date": 1785192560841,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
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
          "id": "55944e88c96fe0cc60679470781808977fd1e0fc",
          "message": "fix(dupes): apply the duplication threshold gate to standalone runs\n\nStandalone `fallow dupes` rendered through `print_dupes_result_with_grouping`,\nwhich returned the renderer's exit code without ever consulting\n`exceeds_threshold`. The gate lived only in `print_dupes_result`, which\nstandalone runs no longer call after the grouping refactor, so\n`fallow dupes --threshold 1` exited 0 at 100% duplication and printed no\ndiagnostic. Both the `--threshold` flag and a `duplicates.threshold` config\nvalue were affected, in every output format. Combined mode (bare `fallow`)\nrendered through the second, near-identical function that did gate, so the two\nentry points disagreed.\n\nThe two renderers differed only in `group_by`, which `print_dupes_result`\nalready passed as `None`. That duplication is what let the gate drift out of\none copy, so they are collapsed into one: `print_dupes_result` delegates and\nthe gate moves onto the single shared renderer. The source diff is\nnet-negative. New coverage in `crates/cli/tests/dupes_tests.rs` exercises the\nflag path, the config path, and the output formats, each with a\nbelow-threshold control so it cannot pass vacuously. The existing\n`exit_code_tests` case asserted `code == 0 || code == 1`, true of any\nnon-crashing run, and was named for `--fail-on-issues`, which `fallow dupes`\ndoes not wire. It is renamed to `dupes_threshold_exits_1_with_clones`, asserts\nthe exit code exactly, and carries a comment recording why the inert flag is\nabsent. Wiring `--fail-on-issues` for dupes is a separate behaviour change and\nis out of scope here.\n\nProjects that set a duplication threshold and were silently passing will start\nfailing as documented. Runs that set no threshold are unaffected, since the\ndefault (`0`) still means no limit.\n\nFixes #2009.",
          "timestamp": "2026-07-28T02:37:53+02:00",
          "tree_id": "dc0a7a43d729e195b937921a821d25263be28584",
          "url": "https://github.com/fallow-rs/fallow/commit/55944e88c96fe0cc60679470781808977fd1e0fc"
        },
        "date": 1785199137853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
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
          "id": "1e39ca6da3fe60a19b9ea64f7778d10be204f49c",
          "message": "docs(migrate): state that ignoreFindings is narrower than knip ignore (#2056)\n\nknip's ignore suppresses every issue whose file path matches, including dependency and manifest issues. fallow's ignoreFindings only hides findings a matching source file owns, so a migrated config silently narrows the semantics.\n\nfallow migrate now prints one note about that scope difference for every knip migration, not only when ignore was present. The generated config and the exit codes are unchanged.\n\nFixes #2017",
          "timestamp": "2026-07-28T16:02:49+02:00",
          "tree_id": "c42a71ded879dabba87ef13a1678c2369f26daa1",
          "url": "https://github.com/fallow-rs/fallow/commit/1e39ca6da3fe60a19b9ea64f7778d10be204f49c"
        },
        "date": 1785248992257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
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
          "id": "fcd09f24f768d522e455363ca85713e6df72b6c1",
          "message": "fix(audit): label empty boundary-zone warnings from the base revision (#2055)\n\n`fallow audit --base` analyzes the base revision in an isolated worktree. A boundary zone whose files only exist in the working tree matched nothing there and produced the same unqualified `boundary zone ... matched 0 reachable files` warning used for the working tree, which read as a broken current configuration.\n\nThe base pass now prefixes the warning with `base revision snapshot (audit --base)` and states that the finding is about the base revision only. The working-tree warning, all output formats, and exit codes are unchanged.\n\nCloses #2013",
          "timestamp": "2026-07-28T18:24:53+02:00",
          "tree_id": "d1d5bc745bd91424baaf1385ef18fc60514f063f",
          "url": "https://github.com/fallow-rs/fallow/commit/fcd09f24f768d522e455363ca85713e6df72b6c1"
        },
        "date": 1785256482035,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.35,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 446,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1167,
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
          "id": "8522c08fb87a482adefab47355d39cdc0be4b001",
          "message": "feat(plugins): drive config-value dependency credits from a catalogue (#2059)\n\nThree hardcoded arms credited packages named by a config value: jsdom's optional peer canvas, vitest's edge-runtime peer, and vite's lightningcss.\n\nThey now read from crates/core/data/config_value_credits.toml, embedded and parsed once like tooling.toml, keyed on (surface, value) -> credits. Adding a rule for an existing surface is a one-entry data change. An unknown surface, unknown field, empty value or credit, or duplicate row fails the catalogue parse loudly.\n\nBehavior is unchanged for the three migrated cases.\n\nFixes #2018",
          "timestamp": "2026-07-28T19:34:24+02:00",
          "tree_id": "4790a7520c6bf72979424b8574d27dd75e839287",
          "url": "https://github.com/fallow-rs/fallow/commit/8522c08fb87a482adefab47355d39cdc0be4b001"
        },
        "date": 1785260384788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.34,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 447,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1168,
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
          "id": "ca5106060c0bcfc7e189cd086d3a368c8a300dfa",
          "message": "feat(config): let ignoreFindings cover the remaining result families (#2061)\n\nprop_drilling_chains, thin_wrappers and duplicate_prop_shapes are source-owned and now honour ignoreFindings; security findings and their blind-spot diagnostics stay visible regardless of the pattern. prop_drilling_chains follows the documented multi-owner rule and is suppressed only when every hop file matches, matching circular_dependencies rather than changed-file anchor filtering. An exhaustive destructuring helper next to remove_ignored_dead_code_findings makes the next result field a compile error instead of a silent escape. docs/backwards-compatibility.md updated.\n\nRefs #2017",
          "timestamp": "2026-07-28T21:53:29+02:00",
          "tree_id": "95546d7ce411cb148e0fca893c1b7c0b0b138fb1",
          "url": "https://github.com/fallow-rs/fallow/commit/ca5106060c0bcfc7e189cd086d3a368c8a300dfa"
        },
        "date": 1785268751305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.34,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 447,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1168,
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
          "id": "ce52c96d7e71cb3ab3076144b7b426be7048c986",
          "message": "feat(scripts): follow package-manager indirection into script bodies (#2063)\n\nnpm run <script> -- --flag and yarn <script> --flag were dropped before flag scanning, so the flag-value dependency crediting from #2006 never reached the shape most projects actually use. Script bodies now resolve through the catalogue and are rescanned, bounded by a depth limit and a global expansion budget.\n\nAmbiguity is sticky: a script name declared with different bodies across packages is never followed, regardless of workspace order. Names and bodies filter separately under --production, so a filtered script name still wins over a same-named dependency binary. Entry files from workspace bodies no longer seed root-relative patterns.\n\nRefs #2016",
          "timestamp": "2026-07-28T22:35:43+02:00",
          "tree_id": "346ac6934e0ed41497fc51d1614a2f43ba505ee5",
          "url": "https://github.com/fallow-rs/fallow/commit/ce52c96d7e71cb3ab3076144b7b426be7048c986"
        },
        "date": 1785271030592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.34,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 447,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1168,
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
          "id": "57adb47d2ddc8720f1870dcaabca5096529d0c05",
          "message": "feat(health): add an identity-preserving baseline mode (#2064)\n\nThe default count baseline matches per file and category, so a new hotspot replacing an old one in the same file consumed the existing allowance and the gate stayed green. --baseline-mode identity matches per function identity instead: a replacement hotspot is reported, line shifts and severity improvements stay suppressed, and resolved findings disappear without a refresh.\n\nThe default stays count. Identity baselines keep their count buckets so both modes read them, and comparing in identity mode against a count-only baseline is an input error rather than a silent fallback. A finding identity is file path plus function name, so renaming or moving a function that is still in the baseline reports it as new; the flag documentation states that limit and the re-save rule.\n\nRefs #2010",
          "timestamp": "2026-07-28T22:48:23+02:00",
          "tree_id": "8adad1a994a5a7ed9a53b46a83d928fdc7142377",
          "url": "https://github.com/fallow-rs/fallow/commit/57adb47d2ddc8720f1870dcaabca5096529d0c05"
        },
        "date": 1785271780821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.34,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 447,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1168,
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
          "id": "cf897c27da5f671cde789a7437433b2da5fd84ef",
          "message": "fix(health): respect mocked modules in test reachability (#2068)\n\nExtraction records ordered vi.mock/vi.unmock facts for the literal vitest vi binding with statically proven closed factories; resolution canonicalizes targets through the specifier pipeline; the graph masks ESM edges per test root with bit-parallel reachability profiles and exact reference provenance, while CommonJS require paths stay live. Health coverage gaps, export gaps, and estimated CRAP consume the shared masked view.\n\nFixes #2031",
          "timestamp": "2026-08-01T22:32:56+02:00",
          "tree_id": "dfc7382d1f0c19dd0a1322b0a1b8b44777e1c6bb",
          "url": "https://github.com/fallow-rs/fallow/commit/cf897c27da5f671cde789a7437433b2da5fd84ef"
        },
        "date": 1785616484014,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.34,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 447,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1170,
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
          "id": "de65b31999b0551377dd0006eeff7d4d337ca9c9",
          "message": "fix(security): stop treating \"use server\" as a server-only marker (#2088)\n\nA \"use server\" directive declares a Server Action boundary that client components are meant to import; the server-only-import rule treated it like server-only or node:fs, flagging every Server Action call site in App Router projects as high severity. The sink set now builds from imported server-only code only, while a \"use server\" module that imports server-only code and leaks it through a non-action export is still reported. Remediation and SARIF text updated to match.\n\nFixes #2074",
          "timestamp": "2026-08-02T00:46:49+02:00",
          "tree_id": "2f4fedd4835c67ad61c69b30cf5b65625568b647",
          "url": "https://github.com/fallow-rs/fallow/commit/de65b31999b0551377dd0006eeff7d4d337ca9c9"
        },
        "date": 1785625102433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.34,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 449,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1175,
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
          "id": "9a40a7f9d74bb52fe16d5b5fa727cc2cedc6ffeb",
          "message": "feat(config): report unused npm dependency overrides (#2090)\n\nnpm overrides in the root package.json are now parsed like pnpm overrides, including nested objects and the \".\" self-pin key, and feed the same unused and misconfigured override analysis. $package reference values are credited rather than reported. package-lock.json resolved packages credit override targets the way pnpm-lock.yaml does. Yarn and bun remain out of scope.\n\nFixes #2069",
          "timestamp": "2026-08-02T01:07:52+02:00",
          "tree_id": "74c026dbcb066c2f637029fe36906ad617b82ecb",
          "url": "https://github.com/fallow-rs/fallow/commit/9a40a7f9d74bb52fe16d5b5fa727cc2cedc6ffeb"
        },
        "date": 1785625800203,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 450,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1178,
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
          "id": "e025bccb9edd184b0c3c3e586b8441eb8b31d880",
          "message": "fix(scripts): fold plain multi-line run scalars into one CI command (#2086)\n\nPlain multi-line run: scalars in CI workflows now keep their continuation lines, anchored at the run key column so sibling step keys terminate the scalar and their values do not leak into entry files.\n\nFixes #2016",
          "timestamp": "2026-08-02T02:24:07+02:00",
          "tree_id": "482bad1944ba114640d2d90cc9f5da88d4b7c993",
          "url": "https://github.com/fallow-rs/fallow/commit/e025bccb9edd184b0c3c3e586b8441eb8b31d880"
        },
        "date": 1785630583879,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 450,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1178,
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
          "id": "f5a898f9a5e03d4839f46b88996371218dda8b34",
          "message": "fix(graph): credit the whole React Native platform-extension family (#2087)\n\nA specifier that resolves into a Metro platform family now credits every member (.ios, .android, .native, .web, and the base file) across static imports, dynamic imports, require calls, and re-exports. Explicit platform specifiers keep a single edge.\n\nFixes #2073",
          "timestamp": "2026-08-02T03:30:24+02:00",
          "tree_id": "9f3bea18b6096339c0b9f148ecf603754774ca50",
          "url": "https://github.com/fallow-rs/fallow/commit/f5a898f9a5e03d4839f46b88996371218dda8b34"
        },
        "date": 1785634300466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 450,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1179,
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
          "id": "1d2a61e8c57c3f29258d6e20dbafbcd1727b15f7",
          "message": "fix(core): resolve indexed-access getter types in unused-class-members (#2089)\n\nA Playwright fixture typed as Factory[\"getter\"] now resolves through the factory's public getter to the getter's declared return-type class, so members called through the fixture are credited. Computed keys and non-literal indices abstain.\n\nFixes #2070",
          "timestamp": "2026-08-02T04:27:22+02:00",
          "tree_id": "55be730f92c7c9dc173f65c24e9fa8c7962f8a00",
          "url": "https://github.com/fallow-rs/fallow/commit/1d2a61e8c57c3f29258d6e20dbafbcd1727b15f7"
        },
        "date": 1785637716871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 450,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1179,
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
          "id": "942c6eec1f55bd2bf1abcd5f8371b41f06018593",
          "message": "fix: harden Deno workspace support follow-ups (#2091)\n\nEngine AnalysisSession::from_resolved_config now uses strict workspace discovery so every command exits 2 on a malformed root manifest; resolve_specifier skips the Deno import-map lookup when no package scope declares a map; deno.json workspace accepts the object form {\"members\": [...]}.",
          "timestamp": "2026-08-02T05:13:43+02:00",
          "tree_id": "cc1c7cdd4d989cc14792a246b84efc44d794f9f6",
          "url": "https://github.com/fallow-rs/fallow/commit/942c6eec1f55bd2bf1abcd5f8371b41f06018593"
        },
        "date": 1785640489153,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 450,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1179,
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
          "id": "9f950e75d0f9e37c1db8d968b788b3f76193f208",
          "message": "chore: release v3.11.0",
          "timestamp": "2026-08-02T06:00:36+02:00",
          "tree_id": "87b0d1fa53d22ecc3e27e7573687e27c2aa36457",
          "url": "https://github.com/fallow-rs/fallow/commit/9f950e75d0f9e37c1db8d968b788b3f76193f208"
        },
        "date": 1785643637579,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 450,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1179,
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
          "id": "fbfae06e32395ab6c3d600b6e591b2fe83174eb7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.11.0",
          "timestamp": "2026-08-02T08:26:20+02:00",
          "tree_id": "7c111438b93b0377ec0986cd35bca551147772a0",
          "url": "https://github.com/fallow-rs/fallow/commit/fbfae06e32395ab6c3d600b6e591b2fe83174eb7"
        },
        "date": 1785652337402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 450,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1179,
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
          "id": "f990d58f9d59e675ee85c51d6501c1708158fe6d",
          "message": "fix(audit): compare type-aware identities by compatibility, not equality (#2105)\n\nThe degrade decision now uses SemanticAnalysisIdentity::incompatible_fields() and tolerates a side that ran no semantic queries, and the sidecar's effective project-config hash no longer includes the root file listing, so a diff that merely adds a file no longer degrades the gate. Genuinely incompatible identities still degrade with a warning.\n\nFixes #2102",
          "timestamp": "2026-08-03T07:42:59+02:00",
          "tree_id": "3f6fd22cfa12f7e18e62e5f61dda01f6f58d8785",
          "url": "https://github.com/fallow-rs/fallow/commit/f990d58f9d59e675ee85c51d6501c1708158fe6d"
        },
        "date": 1785736983876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "fab6c5029dcc44c7d2dbd5d0adf24dc5fe4faf7e",
          "message": "chore: release v3.12.0",
          "timestamp": "2026-08-03T09:13:13+02:00",
          "tree_id": "093606a090063318e520589db7c9e6fa4925d4b7",
          "url": "https://github.com/fallow-rs/fallow/commit/fab6c5029dcc44c7d2dbd5d0adf24dc5fe4faf7e"
        },
        "date": 1785741587033,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "87cae517c52aa09cfc9e65250f708e98bc1dba99",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.12.0",
          "timestamp": "2026-08-03T10:58:53+02:00",
          "tree_id": "e0f6aa954331fa714f36793f08e5cb4b443f096c",
          "url": "https://github.com/fallow-rs/fallow/commit/87cae517c52aa09cfc9e65250f708e98bc1dba99"
        },
        "date": 1785747905517,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "9a3ae1440dc7bbd228306924083746c818837eb3",
          "message": "fix(hooks): recognize git commit and push behind git-level flags in the agent gate (#2111)\n\nThe agent gate replaced its single regex with a tokenizer that steps over git-level options (-c k=v, -C dir, --no-pager, --git-dir=, and friends) before matching the subcommand, so flagged invocations audit while lookalikes like git log commit-message.txt still skip. FALLOW_GATE_DEBUG surfaces skip decisions on stderr.\n\nFixes #2106",
          "timestamp": "2026-08-03T16:09:04+02:00",
          "tree_id": "46385236668b614f2cec86a38a97aad84908bae1",
          "url": "https://github.com/fallow-rs/fallow/commit/9a3ae1440dc7bbd228306924083746c818837eb3"
        },
        "date": 1785766445620,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "4274c9397ca6a46eb0277bee312baeff96b408c4",
          "message": "chore: release v3.13.0",
          "timestamp": "2026-08-03T17:02:58+02:00",
          "tree_id": "ec00145cac21238b68eb687bf69d19d4bc26887f",
          "url": "https://github.com/fallow-rs/fallow/commit/4274c9397ca6a46eb0277bee312baeff96b408c4"
        },
        "date": 1785769732749,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "32673b7c882a4980b64d7c5469620a80ac931fa1",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.13.0",
          "timestamp": "2026-08-03T19:45:38+02:00",
          "tree_id": "584acecceded478cca0cd98852bd07d4c8861496",
          "url": "https://github.com/fallow-rs/fallow/commit/32673b7c882a4980b64d7c5469620a80ac931fa1"
        },
        "date": 1785779501976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "4bc061f29fa9968c587fdb9c94f30c16927badd5",
          "message": "perf(config): cache manifest probes during workspace discovery (#2115)\n\nA per-discovery manifest cache replays the first probe outcome for members visited via multiple workspace sources, Deno config probing collapses to a single filesystem probe per directory shared with the import-map load, and the resolver stops parsing member deno.json twice. Behavior and diagnostics identical.",
          "timestamp": "2026-08-03T21:17:06+02:00",
          "tree_id": "b23c343e13b50a1fb241c71ef9d6f576b3c32630",
          "url": "https://github.com/fallow-rs/fallow/commit/4bc061f29fa9968c587fdb9c94f30c16927badd5"
        },
        "date": 1785784705492,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "d00354b85399a5908d45f38bb890877c78e5375b",
          "message": "fix(api): report truthful type-aware discovery sources (#2113)\n\nFallow's own launchers mark self-injected FALLOW_TYPE_AWARE_BIN wiring, so type-aware status now distinguishes npm-wrapper and github-action wiring from a genuinely user-set environment-override, keeps installed-sibling for the adjacent-binary path, and gives wrapper-wired discovery failures the right remediation.",
          "timestamp": "2026-08-03T21:18:47+02:00",
          "tree_id": "b222ea1b48695ba138b57c2a31f9fea17c50863b",
          "url": "https://github.com/fallow-rs/fallow/commit/d00354b85399a5908d45f38bb890877c78e5375b"
        },
        "date": 1785784823561,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "6e808833500f1f04c5ad3cd4110c0fed347e275c",
          "message": "feat(health): credit doMock targets and pin the automock coverage decision (#2119)\n\nvi.doMock and jest.doMock never mask (unhoisted and order-sensitive) but now contribute credit edges for static path-shaped targets and their manual-mock siblings on all proven receiver shapes, and doUnmock cannot clear a hoisted mask. Automock keeps coverage credit by pinned, documented decision. Public coverage-gaps docs now state the mock-aware semantics.\n\nFixes #2082",
          "timestamp": "2026-08-03T22:54:13+02:00",
          "tree_id": "14d3a42ba674d29a4e81debc496f9d0549066220",
          "url": "https://github.com/fallow-rs/fallow/commit/6e808833500f1f04c5ad3cd4110c0fed347e275c"
        },
        "date": 1785790781265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "b6f6adc5d8882daf58b1b24a022501d24adea047",
          "message": "fix(mcp): satisfy redundant_pub_crate on the Windows test lock\n\nThe cfg(windows) test_support module is private, so the pub(crate) static\ntripped clippy's redundant_pub_crate on the Windows validation leg.",
          "timestamp": "2026-08-04T08:17:00+02:00",
          "tree_id": "f669c7d197ba434ab4b2bc23ab6c68e2ae55fa5d",
          "url": "https://github.com/fallow-rs/fallow/commit/b6f6adc5d8882daf58b1b24a022501d24adea047"
        },
        "date": 1785824602602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "5de19d4e50ee457c03f2f666aae93fb7319dd994",
          "message": "test(process): harden the Unix process-tree registry test against slow runners\n\nSame flake family as #2112, Linux leg: the pid-file wait gains slow-CI\nheadroom with non-empty-content polling so a mid-write read cannot race\nthe parse, the kill wait widens, and the fixture sleep outlives the\nraised window.\n\nRefs #2112",
          "timestamp": "2026-08-04T08:59:50+02:00",
          "tree_id": "37e9fef9f7b937cbe1047b336341e1761456283d",
          "url": "https://github.com/fallow-rs/fallow/commit/5de19d4e50ee457c03f2f666aae93fb7319dd994"
        },
        "date": 1785826886286,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "3cf8074a0e2e91c895c0a4224ba1c3bec4630d65",
          "message": "chore: release v3.14.0",
          "timestamp": "2026-08-04T09:26:26+02:00",
          "tree_id": "7169d090d5ffedbe17318e0ff4f421c33178d3db",
          "url": "https://github.com/fallow-rs/fallow/commit/3cf8074a0e2e91c895c0a4224ba1c3bec4630d65"
        },
        "date": 1785828509221,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "08d39b4dca36f62c1892e389bee8632b5954d8d7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.14.0",
          "timestamp": "2026-08-04T11:00:28+02:00",
          "tree_id": "65b7e8785eed0360bfb9e44dcae8b730f397e9ec",
          "url": "https://github.com/fallow-rs/fallow/commit/08d39b4dca36f62c1892e389bee8632b5954d8d7"
        },
        "date": 1785834375020,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "8330bfdf7e8d17017ea134d687035d85cc39ed7d",
          "message": "chore(deps): batch the remaining JS dependency updates (#2147)\n\noxlint 1.76.0, radix-ui 1.6.7, jscpd 5.0.14, rolldown 1.2.0 with the vendored viz assets regenerated in the same commit, and lightningcss 1.0.0-alpha.72. The two previously red dependabot PRs were diagnosed: the rolldown failure was vendored-asset drift now fixed here, and the lightningcss Windows failure was a cancelled job, not a real incompatibility.\n\nCloses #2121\nCloses #2130\nCloses #2033\nCloses #2050",
          "timestamp": "2026-08-04T16:31:07+02:00",
          "tree_id": "b3a49c9b224a876b62a9bec6d9554455da11d984",
          "url": "https://github.com/fallow-rs/fallow/commit/8330bfdf7e8d17017ea134d687035d85cc39ed7d"
        },
        "date": 1785856362621,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1183,
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
          "id": "9c3d5e3c8e527fabee9fe52a02b1ffc3b9b0470c",
          "message": "chore: overnight quality, performance, and docs sweep (#2148)\n\nVerified overnight batch: resolver and detector fixes from dogfooding (ignoreUnresolvedImports ./ matching, .js to .d.ts fallback, one unresolved-import finding per specifier), non-blocking LSP analysis with burst coalescing and the push/pull double-render fix, markdown escaping for untrusted values in github-summary and report tables, loud config errors for malformed extends and unknown override/ignoreExports keys, MCP workspace comma lists and guard validation, graph resolution performance work, duplication consolidations, and docs, changelog, and rustdoc updates. Panel-review consensus fixes included.",
          "timestamp": "2026-08-05T20:11:48+02:00",
          "tree_id": "424411e3641436fba11f43fa7a1303b634419a7b",
          "url": "https://github.com/fallow-rs/fallow/commit/9c3d5e3c8e527fabee9fe52a02b1ffc3b9b0470c"
        },
        "date": 1785953940237,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "afc7ffa7e967f84dcc49fba878edf7e05651afd7",
          "message": "fix: resolver false positives, LSP dispatch blocking, and config silent drops (#2148)\n\nResolver: ignoreUnresolvedImports matches ./-prefixed entries again, .js\nspecifiers fall back to declaration-only .d.ts modules, one\nunresolved-import finding per specifier per file. LSP: analyses spawn off\nthe dispatch loop, bursts coalesce, push and pull diagnostics no longer\ndouble after the client's first pull. Output: untrusted values escaped in\ngithub-summary and report markdown tables. Config: malformed extends\nvalues and unknown override/ignoreExports keys fail loud with a\ndeduplicated, actionable error. Also: MCP workspace comma lists and guard\nvalidation, graph resolution performance (canonicalize cache, memoized\nglobs, indexed reference attachment), duplication consolidations,\nVS Code download and cancellation fixes, CI job timeouts, docs,\nchangelog, and rustdoc updates.",
          "timestamp": "2026-08-05T20:53:14+02:00",
          "tree_id": "424411e3641436fba11f43fa7a1303b634419a7b",
          "url": "https://github.com/fallow-rs/fallow/commit/afc7ffa7e967f84dcc49fba878edf7e05651afd7"
        },
        "date": 1785956416162,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "1029c3496e494a0abe9f2d09aaffdecdea2018d6",
          "message": "feat(cli): progressive root help, specifier-anchored unresolved imports, code-span table cells (#2149)\n\nfallow -h leads with the task cheat sheet, shows the Analysis and Workflow groups plus everyday options, and points to --help for the complete list (197 to 49 lines; the machine schema is unchanged). Unresolved-import findings anchor on the source specifier via new statement and source spans threaded through extract, the caches, and the graph, so one suppression above a multi-line re-export covers the deduped finding and the stale-suppression contradiction is gone. Identifier and path cells in github-summary tables render as code spans with pipe escaping, mirrored in the action/ and ci/ jq fallback renderers, and the shared helper collapses CR/LF so identifiers cannot split a table row.",
          "timestamp": "2026-08-05T23:34:55+02:00",
          "tree_id": "046f67861970ef25827049e68a08da9d1a1cf16b",
          "url": "https://github.com/fallow-rs/fallow/commit/1029c3496e494a0abe9f2d09aaffdecdea2018d6"
        },
        "date": 1785965767951,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "24e84bc0ca81bd48d3b0a520cbcdcd2ab090ef75",
          "message": "feat(cli): progressive root help, specifier-anchored imports, code-span table cells (#2149)\n\nfallow -h leads with the task cheat sheet, shows the Analysis and Workflow groups plus everyday options, and points to --help for the complete list (197 to 49 lines; the machine schema is unchanged). Unresolved-import findings anchor on the source specifier via new statement and source spans threaded through extract, the caches, and the graph, so one suppression above a multi-line re-export covers the deduped finding and the stale-suppression contradiction is gone. Identifier and path cells in github-summary tables render as code spans with pipe escaping, mirrored in the action/ and ci/ jq fallback renderers, and the shared helper collapses CR/LF so identifiers cannot split a table row.",
          "timestamp": "2026-08-05T23:37:28+02:00",
          "tree_id": "046f67861970ef25827049e68a08da9d1a1cf16b",
          "url": "https://github.com/fallow-rs/fallow/commit/24e84bc0ca81bd48d3b0a520cbcdcd2ab090ef75"
        },
        "date": 1785965958681,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "acab6e72f14ee8c7f5e1c3fe239c2cb456551281",
          "message": "refactor: share resolve payloads, consolidate the discovery walk, document four crates (#2153)\n\nThe seven heavy read-only extraction fields on ModuleInfo/ResolvedModule are Arc slices, so per-file resolution and graph-cache restore bump refcounts instead of deep-copying (measured 2-4% CPU reduction and lower peak RSS on real projects; cached wire shapes untouched). The engine's near-verbatim fork of the core discovery walk is deleted (net -1974 lines) along with its hardcoded config-candidate list, the no-drift gate that guarded it, and the orphaned ignore dependency; engine routes through a core_backend adapter and config candidates derive from the plugin registry, with JSON output verified byte-identical on real projects. missing_docs is burned to zero in fallow-output, fallow-api, fallow-engine, and fallow-config, each now enforcing the lint; generated contract surfaces are regenerated and the inspect identity verdict fields carry typed boolean/string schemas matching runtime output.",
          "timestamp": "2026-08-07T07:50:26+02:00",
          "tree_id": "12000ab501f15e49f4ea0ee1100e7c41745ac6cd",
          "url": "https://github.com/fallow-rs/fallow/commit/acab6e72f14ee8c7f5e1c3fe239c2cb456551281"
        },
        "date": 1786082170800,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "d8de238c7fce3f4805a1d671cf54b408e9e9d445",
          "message": "refactor: consolidate entry-point discovery on the fallow-core implementation (#2154)\n\nDeletes the engine's diverged copy of entry-point discovery (net +131/-1428) and routes the engine through core_backend pass-throughs, mirroring the discovery-walk consolidation. BackendAggregatedPluginResult wraps the core AggregatedPluginResult directly so plugin entry-point provenance survives without mirror-type reconstruction; the engine e2e tests moved to core before the fork was deleted; the orphaned regex and glob dependencies are removed. Behavior verified byte-identical against a pristine baseline binary on three real projects (dead-code, check, and list JSON, cold and warm cache). One log-only change: the skipped-entry warning dedupe is a single process-wide set.",
          "timestamp": "2026-08-07T09:14:05+02:00",
          "tree_id": "ad2aba4d13d4f1be5707b5a0efe1cca2aebca583",
          "url": "https://github.com/fallow-rs/fallow/commit/d8de238c7fce3f4805a1d671cf54b408e9e9d445"
        },
        "date": 1786087114304,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "1791333192526e898de933a5245ba9dcfd22d48e",
          "message": "feat: rank and triage distant duplicate code\n\n* feat: start duplication triage improvements\n\n* feat: improve duplication triage\n\n* test: update VS Code schema fixtures\n\n* test: refresh VS Code integration CLI version",
          "timestamp": "2026-08-07T23:00:20+02:00",
          "tree_id": "70ceedb6abe93ce657c9843d13a1b3f234e6480b",
          "url": "https://github.com/fallow-rs/fallow/commit/1791333192526e898de933a5245ba9dcfd22d48e"
        },
        "date": 1786136688748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "49c0bb438c8ddf4b207ad35446f6525147ecb2ae",
          "message": "refactor: keep one definition of each discovery constant (#2159)\n\nSOURCE_EXTENSIONS, PRODUCTION_EXCLUDE_PATTERNS, and ALLOWED_HIDDEN_DIRS were byte-identical copies in the engine and the core walk that consumes them; the engine re-exports the core definitions through the backend adapter, leaving its public paths unchanged. OUTPUT_DIRS had a third copy and moves to fallow-graph, the lowest crate both sides already depend on, so no adapter hop or boundary exception is needed. Verified byte-identical check and list JSON on two real projects against a binary built from a pristine worktree at the parent commit.",
          "timestamp": "2026-08-08T00:15:56+02:00",
          "tree_id": "ccd62f158eb0fff46d7ffd34dc9061aa175a6f3e",
          "url": "https://github.com/fallow-rs/fallow/commit/49c0bb438c8ddf4b207ad35446f6525147ecb2ae"
        },
        "date": 1786141071994,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "dffec365267ba06a983bfa0944be5ff339f1fb64",
          "message": "refactor: harden duplication architecture\n\n* refactor: start duplication architecture hardening\n\n* refactor: harden duplication architecture\n\n* test: keep spread proptest out of miri",
          "timestamp": "2026-08-08T06:48:38Z",
          "tree_id": "9dea107b803e597dc40092ec7e719931ca75b72f",
          "url": "https://github.com/fallow-rs/fallow/commit/dffec365267ba06a983bfa0944be5ff339f1fb64"
        },
        "date": 1786172059888,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "9ebcfc87b04045556abb61e5c4dfb6a390564139",
          "message": "fix(health): label Svelte await complexity contributions\n\n* fix(health): label Svelte await complexity contributions\n\n* test(vscode): update schema version fixtures\n\n* fix(output): version JSON envelopes independently\n\n* docs: defer public v4 skill guidance\n\n* fix(types): preserve schema version compatibility",
          "timestamp": "2026-08-08T22:09:01+02:00",
          "tree_id": "f2e322855620560659ec5fb50ceb796bc3d4b1e2",
          "url": "https://github.com/fallow-rs/fallow/commit/9ebcfc87b04045556abb61e5c4dfb6a390564139"
        },
        "date": 1786219851752,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "d4c08465b2c66afbaf3ea1e25b6259a02da30327",
          "message": "fix: close duplication sweep gaps\n\n* chore: start duplication filter follow-up\n\n* fix: close duplication sweep gaps",
          "timestamp": "2026-08-08T20:57:45Z",
          "tree_id": "56100040f2ddcb3269abc022a5eb6e0e68f8e403",
          "url": "https://github.com/fallow-rs/fallow/commit/d4c08465b2c66afbaf3ea1e25b6259a02da30327"
        },
        "date": 1786222741296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "b8e9c8c305dd7a5ae9f4f3afa7880738028ad943",
          "message": "fix(health): handle inline Svelte await states",
          "timestamp": "2026-08-09T21:00:28Z",
          "tree_id": "624248b4aea1879c39d244ecbbe5954cd38bbfe2",
          "url": "https://github.com/fallow-rs/fallow/commit/b8e9c8c305dd7a5ae9f4f3afa7880738028ad943"
        },
        "date": 1786309587197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "4934a353b9e283a1e8880ba0ce7545d98ab71e0c",
          "message": "fix: respect explicit private-type-leaks off under type-aware (#2201)\n\nFixes #2170",
          "timestamp": "2026-08-11T17:19:52+02:00",
          "tree_id": "94d80eadf32c2d330c08a233bbcfafbbd2c6b455",
          "url": "https://github.com/fallow-rs/fallow/commit/4934a353b9e283a1e8880ba0ce7545d98ab71e0c"
        },
        "date": 1786462874347,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "6b61518bb8d55ad8e8eca7eff525cd3445c4e0f0",
          "message": "fix(audit): keep --gate new-only from failing clone-removal refactors (#2202)\n\nFixes #2164",
          "timestamp": "2026-08-11T17:47:50+02:00",
          "tree_id": "afb17bc44fa6b9a649866be7c3c30e3cc9863fa9",
          "url": "https://github.com/fallow-rs/fallow/commit/6b61518bb8d55ad8e8eca7eff525cd3445c4e0f0"
        },
        "date": 1786463488810,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "1ef78a594e3d1268175741a628ac8f417542b5b1",
          "message": "fix(audit): reclaim abandoned base-snapshot caches across repo hashes (#2203)\n\nFixes #2169",
          "timestamp": "2026-08-11T17:56:48+02:00",
          "tree_id": "b500ae4004e0f6cef60716805562ba2318781f8e",
          "url": "https://github.com/fallow-rs/fallow/commit/1ef78a594e3d1268175741a628ac8f417542b5b1"
        },
        "date": 1786464505111,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "1c08e714744061b81d58b5a439f78d5a6a541980",
          "message": "fix(health): apply thresholdOverrides to synthetic SFC template findings (#2168)\n\nFixes #2163",
          "timestamp": "2026-08-11T18:39:05+02:00",
          "tree_id": "c6b99a342562c7635b7bc5c8ce964e7b6116e4bd",
          "url": "https://github.com/fallow-rs/fallow/commit/1c08e714744061b81d58b5a439f78d5a6a541980"
        },
        "date": 1786467120310,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "4dadd3021e5c0dfae34229041753c0dc0ae21237",
          "message": "fix(engine): pass forward-slashed paths to the untracked-file diff on Windows",
          "timestamp": "2026-08-11T20:37:13+02:00",
          "tree_id": "fb8c2f2b735a4f05795161be68e9f347eb4af493",
          "url": "https://github.com/fallow-rs/fallow/commit/4dadd3021e5c0dfae34229041753c0dc0ae21237"
        },
        "date": 1786473788064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "eaaeb4a54485969660625cdf33466ae10e02f7a0",
          "message": "chore: release v3.15.0",
          "timestamp": "2026-08-11T21:33:16+02:00",
          "tree_id": "18d775e6950af8e85cb5421290b920b55f7c932b",
          "url": "https://github.com/fallow-rs/fallow/commit/eaaeb4a54485969660625cdf33466ae10e02f7a0"
        },
        "date": 1786476968090,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "1e09e51be050e6af76ec086f8e7da59e23da4d79",
          "message": "fix: sync the npm package versions with the 3.15.0 workspace (#2208)\n\nThe release moved the Rust workspace to 3.15.0 without running the npm\nversion sync, so the type-aware companion and the node bindings stayed\nat 3.14.0. The CLI refuses a companion whose version does not match, so\nthree audit tests fail on main, and the repository policy test asserts\nthe same equality directly.",
          "timestamp": "2026-08-11T22:29:47+02:00",
          "tree_id": "11e02ea0ebe1c5b43a50b464883112635f841f59",
          "url": "https://github.com/fallow-rs/fallow/commit/1e09e51be050e6af76ec086f8e7da59e23da4d79"
        },
        "date": 1786480531633,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "1c59d2d951cfc5092da157e4a567bf2262112354",
          "message": "fix(health): make threshold-override rows agree with their findings (#2207)\n\nFollow-up to #2163. Five defects a pre-ship review found after that work landed: the `<component>` rollup never consulted the override resolver, `outstanding` swapped dimensions between same-named units, a `maxUnitSize`-only override was silent when it matched and loud when it did not, status was scored per ceiling in isolation and contradicted its own `outstanding`, and CodeClimate plus github-annotations still quoted the run-global threshold while SARIF and human quoted the effective one. Each was reproduced against a pristine main build and re-checked after. With no overrides configured the JSON envelope is byte-identical to main on four fixtures and two real projects. No wire shape change; the health schema stays at version 10.\n\nRefs #2163",
          "timestamp": "2026-08-11T22:39:35+02:00",
          "tree_id": "43bfa549674eed778b9fc427635ffa178dbed6cf",
          "url": "https://github.com/fallow-rs/fallow/commit/1c59d2d951cfc5092da157e4a567bf2262112354"
        },
        "date": 1786480990971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "66ae724873c3002fe4c81d20d4a30ecb78139802",
          "message": "fix(napi): keep the node-binding manifests at the last published version until the release publishes\n\nThe npm-prep job runs npm ci in crates/napi before CI bumps the version\nfrom the dispatched tag, so the committed package.json and lockfile must\nstay at the last version whose platform packages exist on npm. The 3.15.0\nbump left the nested platform entries unresolvable and npm ci rejects the\ntree; the post-release sync brings these files to 3.15.0 once the platform\npackages are published.",
          "timestamp": "2026-08-11T23:05:14+02:00",
          "tree_id": "c8b029cbaa6df2c840cab95a61e72c53099af6e7",
          "url": "https://github.com/fallow-rs/fallow/commit/66ae724873c3002fe4c81d20d4a30ecb78139802"
        },
        "date": 1786482667413,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "d8a1bd9afc3eaabcc4e886b66f34a00df3d1ea5f",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.15.0",
          "timestamp": "2026-08-12T09:48:46+02:00",
          "tree_id": "e9485009d42559385d3803582a89b156dfe0e80d",
          "url": "https://github.com/fallow-rs/fallow/commit/d8a1bd9afc3eaabcc4e886b66f34a00df3d1ea5f"
        },
        "date": 1786521010871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "c97f4b9dbb324e655c5e66e0f10b205a36381fc6",
          "message": "Merge pull request #2212 from fallow-rs/feat/css-reference-index-perf\n\nrefactor: index CSS reference lookups",
          "timestamp": "2026-08-12T14:40:50+02:00",
          "tree_id": "83d7481b74a847bc52a2abeabc69ad9604c3bcc6",
          "url": "https://github.com/fallow-rs/fallow/commit/c97f4b9dbb324e655c5e66e0f10b205a36381fc6"
        },
        "date": 1786538755575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "32b6a010485b317873f5788dd1d83cf1cf3067fa",
          "message": "Merge pull request #2223 from fallow-rs/feat/css-inventory-reuse\n\nperf(engine): reuse CSS class inventory",
          "timestamp": "2026-08-12T15:50:14+02:00",
          "tree_id": "f6c2b68cbc5b9c77db24f1c952461c045eefa37b",
          "url": "https://github.com/fallow-rs/fallow/commit/32b6a010485b317873f5788dd1d83cf1cf3067fa"
        },
        "date": 1786542756397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "e0d27b060044b5c8758ccbfc725779758652846e",
          "message": "Merge pull request #2229 from fallow-rs/feat/css-lazy-token-candidates\n\nperf(engine): build styling token candidates lazily",
          "timestamp": "2026-08-12T16:23:00+02:00",
          "tree_id": "0a48cc90a4daa9b01c97a2fc2b661ae385ad293b",
          "url": "https://github.com/fallow-rs/fallow/commit/e0d27b060044b5c8758ccbfc725779758652846e"
        },
        "date": 1786544655442,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "73bb630b9510462e3139b3a65ba0179999380752",
          "message": "fix(health): explain override rows a reader could not act on (#2230)\n\nOverride metrics gain an optional line_count on complexity rows so a unit-size breach claim sits next to the number it was scored on; the human override section caps at the ten most actionable rows with an overflow line while JSON, compact and markdown stay complete; and a complexity override scoped to a suppressed function reads stale instead of no_match, mirroring the CRAP semantics from #2207. Additive only; health schema stays at version 10.\n\nRefs #2163",
          "timestamp": "2026-08-12T16:40:46+02:00",
          "tree_id": "af0295c2558347e66c11af566af0bcfa15ecd07c",
          "url": "https://github.com/fallow-rs/fallow/commit/73bb630b9510462e3139b3a65ba0179999380752"
        },
        "date": 1786545775411,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "b2837f8c10b4da6bdc3282ccc517a6499afbdf58",
          "message": "fix(graph): drop speculative mock candidates that resolve to package space (#2224)\n\nFactory-less jest.mock/vi.mock of a bare scoped specifier synthesized a __mocks__ sibling candidate that classified as an npm package, bypassing the speculative drop guard and surfacing as a phantom unlisted-dependency finding (@scope/__mocks__) that blocks gated CI in Jest projects. Drop speculative dynamic-import candidates that resolve to package space, bump GRAPH_CACHE_VERSION so warm caches stop replaying the phantom edges, and pin the behavior with resolver unit tests and an end-to-end regression test.\n\nCloses #2213",
          "timestamp": "2026-08-12T15:48:49Z",
          "tree_id": "348c34a0caa6ec65725906befd884c04f3ca245b",
          "url": "https://github.com/fallow-rs/fallow/commit/b2837f8c10b4da6bdc3282ccc517a6499afbdf58"
        },
        "date": 1786550059377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
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
          "id": "64e3ce36c4a8086bd7a34aeaf7fd7d019d1548ca",
          "message": "feat(plugins): expand declarative manifest entries (#2165)\n\nImplements the declarative manifest extensions from #1774.\n\nThe public skills contract check is red by construction on a contributor PR: the regenerated CLI reference in this branch is correct, and the companion repository can only be updated by a maintainer afterwards. That sync follows immediately.",
          "timestamp": "2026-08-12T18:12:18+02:00",
          "tree_id": "e985537ff7c697dba46a75dc3f67605334f5cf1f",
          "url": "https://github.com/fallow-rs/fallow/commit/64e3ce36c4a8086bd7a34aeaf7fd7d019d1548ca"
        },
        "date": 1786551292115,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1202,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jernej.barbaric@gmail.com",
            "name": "Jerc92",
            "username": "Jerc92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d086f80e1224f2534ae12a0945efcd8f3b6f828",
          "message": "fix(core): keep package tooling out of production reachability (#2211)\n\nCo-authored-by: Jernej Barbaric <jernej.barbaric@login5.org>\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-08-12T18:30:49+02:00",
          "tree_id": "fc7038f62744b8f9baaf0ebe20fe80572f7b8ef4",
          "url": "https://github.com/fallow-rs/fallow/commit/6d086f80e1224f2534ae12a0945efcd8f3b6f828"
        },
        "date": 1786552561808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1201,
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
          "id": "4f756e1f90972efa4190ca4f00ba6a3df3642b9b",
          "message": "Merge pull request #2232 from fallow-rs/feat/css-color-direct-parse\n\nperf(benchmarks): cover CSS color candidates",
          "timestamp": "2026-08-12T19:54:16+02:00",
          "tree_id": "d561b401029e193f6e2adf861531aab0604795c0",
          "url": "https://github.com/fallow-rs/fallow/commit/4f756e1f90972efa4190ca4f00ba6a3df3642b9b"
        },
        "date": 1786557593083,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1201,
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
          "id": "19606bfef48834a4d0844172f466c2438cb4256e",
          "message": "Merge pull request #2234 from fallow-rs/feat/css-color-direct-parse-product\n\nperf(extract): parse CSS colors directly",
          "timestamp": "2026-08-12T20:42:28+02:00",
          "tree_id": "fa7b6fb416303e594914bf58d897cd758a294c2e",
          "url": "https://github.com/fallow-rs/fallow/commit/19606bfef48834a4d0844172f466c2438cb4256e"
        },
        "date": 1786560481367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1201,
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
          "id": "dfc0bba8ba7635efb3832b4be26771714748515c",
          "message": "Merge pull request #2240 from fallow-rs/feat/cache-production-exclude-globset\n\nperf: cache production exclude globset",
          "timestamp": "2026-08-12T23:42:34+02:00",
          "tree_id": "170ded617baca4a02249d86faff91c588b9c8ab0",
          "url": "https://github.com/fallow-rs/fallow/commit/dfc0bba8ba7635efb3832b4be26771714748515c"
        },
        "date": 1786571038881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1201,
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
          "id": "13bfa07f4494ca66c5168c43a531981b1ff98a8b",
          "message": "Merge pull request #2241 from fallow-rs/feat/cache-plugin-config-matchers\n\nperf(core): cache built-in plugin matchers",
          "timestamp": "2026-08-13T00:27:20+02:00",
          "tree_id": "43692e0aab8bfbbd902a47e3fcafabfb41423fb9",
          "url": "https://github.com/fallow-rs/fallow/commit/13bfa07f4494ca66c5168c43a531981b1ff98a8b"
        },
        "date": 1786573703270,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1201,
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
          "id": "f86dc17482f42b69dc50a1bc3875c1c3812342b9",
          "message": "Merge pull request #2242 from fallow-rs/perf/output-escape-md-single-pass\n\nperf(output): escape Markdown in one pass",
          "timestamp": "2026-08-13T00:58:20+02:00",
          "tree_id": "7061186070974620e90cff4b70707464e3d88765",
          "url": "https://github.com/fallow-rs/fallow/commit/f86dc17482f42b69dc50a1bc3875c1c3812342b9"
        },
        "date": 1786575844074,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1201,
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
          "id": "36197a403b1deca55231fc95a6e4f41bfcef054f",
          "message": "Merge pull request #2243 from fallow-rs/feat/security-control-predicate-order\n\nperf(extract): skip irrelevant package scans",
          "timestamp": "2026-08-13T01:44:12+02:00",
          "tree_id": "29b90777a6ba69cada2c04834e18a081f2cbaf3f",
          "url": "https://github.com/fallow-rs/fallow/commit/36197a403b1deca55231fc95a6e4f41bfcef054f"
        },
        "date": 1786578327351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.33,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 451,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1201,
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
          "id": "9aa5e697ccead870f7137a39a758feb470f1dc72",
          "message": "fix(graph): resolve effective barrel exports (#2210)\n\nResolves named and star re-exports through one graph-owned effective binding model: explicit-over-star precedence, ambiguous star collisions vs convergent diamonds, separate type/value namespaces with fallback lanes so real type declarations win over value-derived fallbacks, default exports excluded from star propagation, opaque bindings for external re-export surfaces, and canonical binding identity through usage propagation, public exports, duplicate analysis, traces, caches, and the type-aware sidecar. Explicit Options-API defaults earn render credit, extraction hardens binding resolution against name collisions, and workspace public-API entry points honor publicPackages.",
          "timestamp": "2026-08-13T03:41:48+02:00",
          "tree_id": "93ddc4687a7bc1f78ea09c196fac96b00d41f1b6",
          "url": "https://github.com/fallow-rs/fallow/commit/9aa5e697ccead870f7137a39a758feb470f1dc72"
        },
        "date": 1786585643086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 46,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 453,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1219,
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
          "id": "6866dc917cb85276c2ef8c2d16d0deff25d2a09b",
          "message": "fix(analyze): align jest/vitest __mocks__ manual-mock semantics (#2250)\n\n* fix(analyze): align jest/vitest __mocks__ manual-mock semantics\n\nFactory-less vi.mock and jest.mock calls with a bare package specifier now\nsynthesize a speculative root-level __mocks__/<specifier> candidate. The\nresolver probes ancestor __mocks__ directories of the test file and credits\nthe manual mock file when it exists, so root-level node-module manual mocks\nno longer surface as unused files in vitest projects (issue #2225). A root\nmock without a matching mock call keeps surfacing under vitest, which\napplies manual mocks only through vi.mock; jest keeps its __mocks__ entry\npatterns, matching its automatic node-module mocking.\n\nThe vitest plugin no longer declares the /__mocks__ virtual package suffix:\nliteral X/__mocks__ imports carry no runner semantics, so they are reported\nas unlisted dependencies under both runners (issue #2226). Extract and\ngraph cache versions are bumped because extraction output and resolution\nbehavior changed.\n\n* docs(agents): align plugins rule with removed vitest /__mocks__ suffix\n\nNo built-in plugin declares a virtual package suffix since issue #2226;\nthe old example claimed @aws-sdk/__mocks__ stays suppressed, which is\nexactly the literal-import case that now reports as unlisted.",
          "timestamp": "2026-08-13T11:58:20+02:00",
          "tree_id": "2a54471f69408aab37ebdc1af6cd88709ce26aaf",
          "url": "https://github.com/fallow-rs/fallow/commit/6866dc917cb85276c2ef8c2d16d0deff25d2a09b"
        },
        "date": 1786615686836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "c40adbdfbe7847a0f63bc8acf2bb353c6e638db9",
          "message": "feat(audit): surface new-only duplication demotion (#2256)\n\n* feat(audit): surface new-only duplication demotion\n\nAn introduced clone group none of whose instances overlap an added line\nis demoted to inherited under --gate new-only (issue #2164). The\ndemotion was invisible: nothing in the output said a group was demoted\nor why.\n\nMake it observable, with no verdict or exit-code change:\n\n- AuditDomainLedger records each demoted key and exposes demoted_count,\n  demoted_keys, and record-order demoted membership.\n- Demoted clone groups carry an additive optional demotion_reason field\n  (typed CloneDemotionReason, kebab-case, currently no-added-lines) in\n  audit JSON, on the typed programmatic path, and in the review brief.\n- Audit-family attribution blocks always include an integer\n  duplication_demoted, derived from the serialized clone groups by the\n  new attach_audit_wire_attribution single entry point, mirroring the\n  styling attribution precedent (no schema_version bump).\n- Human output folds the demotion into the gate-excluded note as an\n  indented sub-line naming the deciding diff source; --explain adds one\n  line per demoted group (report-scoped dup:<fp>, locations, rule) and\n  one line naming the diff source, capped like the clone listing.\n- The GitHub Action and GitLab CI summaries print a footnote when\n  duplication_demoted is nonzero.\n- Docs record the diff-source precedence (shared diff index over\n  merge-base worktree diff), the narrower-base over-demotion caveat,\n  and the additive-field compatibility rationale.\n\nCloses #2220\n\n* docs(cli): align LoadedDiff rustdoc with retained source label",
          "timestamp": "2026-08-13T12:35:36+02:00",
          "tree_id": "c620685c988c392694dc2a3b6e5b5fc3bc9cfea4",
          "url": "https://github.com/fallow-rs/fallow/commit/c40adbdfbe7847a0f63bc8acf2bb353c6e638db9"
        },
        "date": 1786617409819,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "12a15fb2155d56dea28dc2128b9f6682e6d0722f",
          "message": "feat(health): drop CRAP from template units and score Svelte {#snippet} blocks as their own units (#2258)\n\n* feat(health): drop CRAP from template units and score Svelte snippets\n\nSynthetic template-family units leave the CRAP dimension in every dialect\n(Closes #2235). A template carries no measurable coverage, so its CRAP was\na hidden second cyclomatic gate at 5 / 10 / 28 depending on the estimate\ntier. Template findings no longer carry crap, coverage_pct, coverage_tier,\ncoverage_source, or inherited_from; template units no longer count toward\ncrap_max, crap_above_threshold, refactoring targets, or Istanbul match\nstatistics. A maxCrap override scoped to a template unit reports a matched\nstale crap-dimension row with the CRAP value absent and copy saying the\nentry can be removed, instead of regressing to no_match. Component rollups\nare built from extracted template complexity rather than the findings\nlist, so a component whose template stops producing its own finding keeps\nits rollup. The unreachable template arm of the CRAP coverage action is\ndeleted, and the explain, MCP, and SARIF rule-help contract surfaces are\nupdated to match.\n\nTop-level Svelte {#snippet name(params)} blocks become their own\n<snippet:name> complexity units (Closes #2227). The body is scored with\nnesting rebased to zero and no longer accumulates into the parent\n<template>, so in-file snippet extraction now scores like the equivalent\nfile split instead of carrying a nesting surcharge. Snippet units are\nexact-match keys for health.thresholdOverrides[].functions, suppress with\nthe SFC markup comment above the reported anchor line, and render with a\ndistinct display name; the .svelte refactor advice names the snippet lever\nbefore a file split. Nested or unnameable snippets keep the folded\nbehavior and an unclosed snippet keeps the all-or-nothing\nmalformed-template drop. Extraction CACHE_VERSION bumps to 270.\n\nNew snippet unit names create new health-baseline buckets and overflow a\npre-existing baseline in both identity and count modes; the changelog\ntells adopters to re-save baselines on upgrade. The CRAP removal alone is\nabsorbed by baselined severity allowances and does not flip a gate.\n\n* docs(changelog): state the intentional template and snippet line-count overlap",
          "timestamp": "2026-08-13T13:04:08+02:00",
          "tree_id": "843c48061d498ca53b2bdd45f0e36d048b71bcea",
          "url": "https://github.com/fallow-rs/fallow/commit/12a15fb2155d56dea28dc2128b9f6682e6d0722f"
        },
        "date": 1786619385476,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "e5bf4e24fafe7798e97255aa458e4b62d8660ea3",
          "message": "fix: collect Rust walltime benchmark results\n\n* fix(benchmarks): use CodSpeed macro runner\n\n* fix(benchmarks): collect Rust walltime results",
          "timestamp": "2026-08-13T14:57:24+02:00",
          "tree_id": "7529a1fb2b352f9f9b7574ce36a879a04cc79876",
          "url": "https://github.com/fallow-rs/fallow/commit/e5bf4e24fafe7798e97255aa458e4b62d8660ea3"
        },
        "date": 1786626182172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "93e765835bf3aa5b3048468753ad0fd228bbef15",
          "message": "perf: skip side-effect export indexes",
          "timestamp": "2026-08-13T15:41:30+02:00",
          "tree_id": "65970b121ab3e0902b67919ecf298a124e4db4eb",
          "url": "https://github.com/fallow-rs/fallow/commit/93e765835bf3aa5b3048468753ad0fd228bbef15"
        },
        "date": 1786628762681,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "04b49162b342f0889b8eb50e3c69ba010f18aee5",
          "message": "perf: compact source discovery globs",
          "timestamp": "2026-08-13T16:08:41+02:00",
          "tree_id": "354e7483492f34085f8391b63dff92dc0be7dd4b",
          "url": "https://github.com/fallow-rs/fallow/commit/04b49162b342f0889b8eb50e3c69ba010f18aee5"
        },
        "date": 1786630398561,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "74f5a847a45709ef4d09a5d8f7918d6fcb70cb9d",
          "message": "perf(core): cache default entry matchers",
          "timestamp": "2026-08-13T16:57:26+02:00",
          "tree_id": "5f23453ab749809c83ad7f68b0ce87b612840b0f",
          "url": "https://github.com/fallow-rs/fallow/commit/74f5a847a45709ef4d09a5d8f7918d6fcb70cb9d"
        },
        "date": 1786633350065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "400835b0ed607faeb8bca1443d39647223bab41e",
          "message": "fix(audit-cache): stop counting deregistered legacy entries as reclaimed (#2260)\n\nA pre-#1815 registration at the current cache path is only deregistered\nand stays warm on disk. Prune now reports it as kept with reason\nlegacy-deregistered, surfaces an additive deregistered count in the JSON\nenvelope plus a matching human summary line, and excludes its size from\nreclaimed_bytes and the human reclaim total. Released SHA-keyed\nregistrations are genuinely removed and stay counted.\n\nThe audit-cache prune long help now states that --dry-run previews the\npolicy; no generated contract surface embeds the nested subcommand help,\nso the generated contracts are unchanged.\n\nNew-only duplication demotion diff sources gain coverage beyond the\nWorktree state: integration tests for shared-diff precedence over the\nmerge-base worktree diff, the skipped-state --explain line, and the\ndemotion note wording, plus unit tests for the diff-source labels and\nthe retained shared-diff source label.",
          "timestamp": "2026-08-13T17:28:55+02:00",
          "tree_id": "e55cbd805de3d86dcd4413e74351be99849a981a",
          "url": "https://github.com/fallow-rs/fallow/commit/400835b0ed607faeb8bca1443d39647223bab41e"
        },
        "date": 1786634995020,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "008e2b2056841859745afae6b92047f847e5553e",
          "message": "test(audit): surface verdict context in the reshaped-clone demotion assert",
          "timestamp": "2026-08-13T18:13:44+02:00",
          "tree_id": "68eb1f43b3c9b57f7f28fb4514448f3c7ba877c2",
          "url": "https://github.com/fallow-rs/fallow/commit/008e2b2056841859745afae6b92047f847e5553e"
        },
        "date": 1786637722071,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "defaf599b13af50aa35df2138c3772c6a93de032",
          "message": "test(audit): dump base duplicate-export keys in the demotion assert",
          "timestamp": "2026-08-13T18:29:55+02:00",
          "tree_id": "429b863690666afbf6eba0ad37f74e8aa5acfe4a",
          "url": "https://github.com/fallow-rs/fallow/commit/defaf599b13af50aa35df2138c3772c6a93de032"
        },
        "date": 1786638697402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "88507a56c272a0ec00cd59cc33c0405563f0ebf4",
          "message": "test(audit): dump full base snapshot keys in the demotion assert",
          "timestamp": "2026-08-13T18:41:16+02:00",
          "tree_id": "e32ded3879f3fba7b45ba73d38937df13e0571ed",
          "url": "https://github.com/fallow-rs/fallow/commit/88507a56c272a0ec00cd59cc33c0405563f0ebf4"
        },
        "date": 1786639357397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "fb44ef467c8a032dc12453fb3b2842c115ec10da",
          "message": "fix(audit): keep base attribution when the focus remap fails\n\nThe base-snapshot focus set is built from `git rev-parse --show-toplevel`,\nwhose spelling can differ from the caller's canonicalized root (Windows 8.3\ncomponents and drive-letter case, verbatim prefixes), so a literal\nstrip_prefix mapped no path at all. The base dead-code results were then\nfiltered against an empty focus set and every base finding disappeared, which\nmade each inherited finding look introduced and failed `--gate new-only` on\npre-existing findings.\n\nThe remap now compares simplified and canonicalized forms before giving up on\na path, and a base run whose focus set cannot be expressed leaves its results\nunfiltered instead of filtering them against an empty set.",
          "timestamp": "2026-08-13T20:01:56+02:00",
          "tree_id": "a32c69c82618dc6eee83c07431f87f5eed349ee2",
          "url": "https://github.com/fallow-rs/fallow/commit/fb44ef467c8a032dc12453fb3b2842c115ec10da"
        },
        "date": 1786644204652,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "aec0bd07a5e2532ad242a3587459b7aaade345df",
          "message": "test(audit-cache): ignore lazy directory mtimes in the prune snapshot",
          "timestamp": "2026-08-13T20:17:19+02:00",
          "tree_id": "93e3fee7ae6c8e79248acf298c739fe8ecdbc395",
          "url": "https://github.com/fallow-rs/fallow/commit/aec0bd07a5e2532ad242a3587459b7aaade345df"
        },
        "date": 1786645132505,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "45fd28766199acb1f939f6862274a37aad12770b",
          "message": "chore: release v3.16.0",
          "timestamp": "2026-08-13T21:13:19+02:00",
          "tree_id": "75fc52ec7f7b8ff5a32073a0c7f8f8145dd2f75a",
          "url": "https://github.com/fallow-rs/fallow/commit/45fd28766199acb1f939f6862274a37aad12770b"
        },
        "date": 1786648511412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "c64f703114d452f52077a3a1737696a22a342ec9",
          "message": "perf(graph): reserve named export index capacity",
          "timestamp": "2026-08-13T23:53:47+02:00",
          "tree_id": "bdbad5be9280f810e1c0cf7527b6a71fc6d80ef4",
          "url": "https://github.com/fallow-rs/fallow/commit/c64f703114d452f52077a3a1737696a22a342ec9"
        },
        "date": 1786658366303,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "c2b6c9efff2e4de57a32bfad828bc5a3a3574070",
          "message": "perf(output): insert root kind in place",
          "timestamp": "2026-08-14T00:15:47+02:00",
          "tree_id": "9aa3e9c8065828466f34323fb9593765664c96cf",
          "url": "https://github.com/fallow-rs/fallow/commit/c2b6c9efff2e4de57a32bfad828bc5a3a3574070"
        },
        "date": 1786659425433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "8b32aa4f6a285d1ae6897986f99dde834ecb7579",
          "message": "chore(docker): pin FALLOW_VERSION 3.16.0 with refreshed checksums",
          "timestamp": "2026-08-14T00:38:42+02:00",
          "tree_id": "362c1fbc84741f399cd199621f74bde72b1d11cf",
          "url": "https://github.com/fallow-rs/fallow/commit/8b32aa4f6a285d1ae6897986f99dde834ecb7579"
        },
        "date": 1786660809425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 454,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1225,
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
          "id": "95a7ae9faf9e987616fe2366b74e99626dfd58c6",
          "message": "fix: surface star-export ambiguity instead of blaming the sources (#2268)\n\nWhen two star re-export sources supply the same name, the barrel exports nothing under that name. Unused-export and unused-type findings are now suppressed for the declarations that contribute to such a collision, instead of blaming both source files for a mistake in the barrel. Traces carry an optional star_export_ambiguity block naming the contributing files and namespaces, so an ambiguous name is no longer indistinguishable from a misspelled one. The unrendered-component and unprovided-inject headers now state the guarantee the code actually offers, including the abstain carve-out that remains. The value-derived type fallback lane is seeded lazily, which makes barrel-chain resolution roughly ten percent cheaper.\n\nCloses #2262\nCloses #2263\nCloses #2264",
          "timestamp": "2026-08-14T08:35:39+02:00",
          "tree_id": "daf704ab51453c6880b4fb3c5d8775efa97cafce",
          "url": "https://github.com/fallow-rs/fallow/commit/95a7ae9faf9e987616fe2366b74e99626dfd58c6"
        },
        "date": 1786689412935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 455,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1230,
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
          "id": "6ab2c847bad9bc88a85e6fa29139a811db7203a0",
          "message": "fix(type-aware): bound generic scans and identify Svelte host gaps\n\n* chore: start type-aware issue fixes\n\n* fix: harden type-aware generic and Svelte analysis",
          "timestamp": "2026-08-14T11:14:51+02:00",
          "tree_id": "e9541817bdca9b64870fd20eab3e4911020d11d0",
          "url": "https://github.com/fallow-rs/fallow/commit/6ab2c847bad9bc88a85e6fa29139a811db7203a0"
        },
        "date": 1786698966673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 455,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1230,
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
          "id": "7a8442440410c9e3211ac28028fd415e8ee4e303",
          "message": "perf(types): bucket clone spread locations",
          "timestamp": "2026-08-15T23:51:41+02:00",
          "tree_id": "5f52d8af626c7e62b2ce1239d7963bbfc93e8c92",
          "url": "https://github.com/fallow-rs/fallow/commit/7a8442440410c9e3211ac28028fd415e8ee4e303"
        },
        "date": 1786831064544,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 455,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1230,
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
          "id": "4084184901c496642c96f0b8937ce933342cfa2e",
          "message": "perf(extract): deduplicate local type declarations once",
          "timestamp": "2026-08-15T22:01:25Z",
          "tree_id": "2b57ead18d3817001821489850716112f9185888",
          "url": "https://github.com/fallow-rs/fallow/commit/4084184901c496642c96f0b8937ce933342cfa2e"
        },
        "date": 1786831364640,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 455,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1230,
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
          "id": "8437d52e6688cd1ce823d5da8c6670e7a23f839f",
          "message": "fix: close analysis and audit follow-ups\n\n* chore: start issue follow-up batch\n\n* chore: start issue follow-up batch\n\n* fix: close analysis and audit follow-ups",
          "timestamp": "2026-08-16T01:07:16+02:00",
          "tree_id": "84124fa62f20213b3fbefff9d07a20d84d5a33fd",
          "url": "https://github.com/fallow-rs/fallow/commit/8437d52e6688cd1ce823d5da8c6670e7a23f839f"
        },
        "date": 1786835300596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 455,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1230,
            "unit": "count"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jernej.barbaric@gmail.com",
            "name": "Jerc92",
            "username": "Jerc92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78632bbbada683198be1cc47e1ea9023c7c8cebc",
          "message": "feat(ci): render type-aware feedback from saved results\n\n* feat(ci): render type-aware feedback from saved results\n\n* fix(ci): harden saved report rendering\n\n---------\n\nCo-authored-by: Jernej Barbaric <jernej.barbaric@login5.org>\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-08-16T18:20:58Z",
          "tree_id": "b5d9359e208820c8c0ff7ecb0ee38be2d3824e5b",
          "url": "https://github.com/fallow-rs/fallow/commit/78632bbbada683198be1cc47e1ea9023c7c8cebc"
        },
        "date": 1786904718569,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 455,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1230,
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
          "id": "e08e3e05fe9909916f92b089fb7e8ae5ff544e32",
          "message": "chore: release v3.17.0",
          "timestamp": "2026-08-16T23:47:53+02:00",
          "tree_id": "5418df7130ee9f4317fffae9b8c21e2f27282181",
          "url": "https://github.com/fallow-rs/fallow/commit/e08e3e05fe9909916f92b089fb7e8ae5ff544e32"
        },
        "date": 1786917230191,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 455,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1230,
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
          "id": "fc234ba804a29edc872f2ace40045b6254da5c81",
          "message": "chore(docker): pin v3.17.0 assets",
          "timestamp": "2026-08-17T02:40:35+02:00",
          "tree_id": "0c18118291abdea71c5f0798efb0c53da759674a",
          "url": "https://github.com/fallow-rs/fallow/commit/fc234ba804a29edc872f2ace40045b6254da5c81"
        },
        "date": 1786927595285,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 455,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1230,
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
          "id": "aba36fe9c341c4365ead772ba7ff274a74ecf8eb",
          "message": "chore(benchmarks): remove stale CodSpeed coverage\n\n* chore: start CodSpeed benchmark cleanup\n\n* chore(benchmarks): remove stale CodSpeed coverage",
          "timestamp": "2026-08-17T09:32:16+02:00",
          "tree_id": "1ae690447248416f42d7419692136895a319c362",
          "url": "https://github.com/fallow-rs/fallow/commit/aba36fe9c341c4365ead772ba7ff274a74ecf8eb"
        },
        "date": 1786952282583,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 455,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1230,
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
          "id": "6ebdf806df1a1ce1389026401af225d8fc7ab38f",
          "message": "perf(engine): coalesce duplicate line ranges",
          "timestamp": "2026-08-17T16:44:24+02:00",
          "tree_id": "2c1af25ee8f999aa236ef4107e1b91d6d82d24ed",
          "url": "https://github.com/fallow-rs/fallow/commit/6ebdf806df1a1ce1389026401af225d8fc7ab38f"
        },
        "date": 1786977942866,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 455,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1230,
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
          "id": "f44fa8e5f47a37383c5b48bea7df41ab8729087c",
          "message": "perf(engine): preallocate health candidate paths",
          "timestamp": "2026-08-18T10:37:56+02:00",
          "tree_id": "f17d09561f443acf7ee864bb1c79077f03ab38fa",
          "url": "https://github.com/fallow-rs/fallow/commit/f44fa8e5f47a37383c5b48bea7df41ab8729087c"
        },
        "date": 1787042617535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 47,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 28,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 1.32,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 455,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 1230,
            "unit": "count"
          }
        ]
      }
    ]
  }
}