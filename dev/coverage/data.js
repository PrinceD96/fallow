window.BENCHMARK_DATA = {
  "lastUpdate": 1787092846955,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c3b171a4c9b67320915779ba40b16b246c1dffee",
          "message": "fix(npm): pin fallow-type-aware optionalDependency in lockstep with the CLI\n\nThe release bump only covered @fallow-cli/* keys, so fallow@3.11.0 shipped\npinning fallow-type-aware to 3.10.0 while the launcher requires an exact\nversion match, leaving the sidecar unwired for every npm install.\n\nRefs #2103",
          "timestamp": "2026-08-03T06:48:59+02:00",
          "tree_id": "a4cc72fa01c591f529b6fb47fdbbf594f17a39b8",
          "url": "https://github.com/fallow-rs/fallow/commit/c3b171a4c9b67320915779ba40b16b246c1dffee"
        },
        "date": 1785732957843,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "7145cf78d75499ab96d8f81bc6dbe85574e461cb",
          "message": "fix(release): sync the fallow-type-aware pin from the tag at npm publish time\n\nThe wrapper sync only bumped @fallow-cli/* optionalDependencies, so the\npublished fallow package pinned fallow-type-aware to the committed value\nof the previous release and the exact-match launcher never wired the\nsidecar.\n\nRefs #2103",
          "timestamp": "2026-08-03T07:45:41+02:00",
          "tree_id": "5170c9852a03ce1f8bfc94c4fb0f284d4caa38f1",
          "url": "https://github.com/fallow-rs/fallow/commit/7145cf78d75499ab96d8f81bc6dbe85574e461cb"
        },
        "date": 1785738444263,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "fab6c5029dcc44c7d2dbd5d0adf24dc5fe4faf7e",
          "message": "chore: release v3.12.0",
          "timestamp": "2026-08-03T09:13:13+02:00",
          "tree_id": "093606a090063318e520589db7c9e6fa4925d4b7",
          "url": "https://github.com/fallow-rs/fallow/commit/fab6c5029dcc44c7d2dbd5d0adf24dc5fe4faf7e"
        },
        "date": 1785741828637,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "4e83c23c025e17874f34f0c674166c86cfba6bf1",
          "message": "chore(docker): pin FALLOW_VERSION 3.12.0 with refreshed checksums",
          "timestamp": "2026-08-03T10:59:33+02:00",
          "tree_id": "f53f05eb207d16d1f2964bf0252346f3e711da3a",
          "url": "https://github.com/fallow-rs/fallow/commit/4e83c23c025e17874f34f0c674166c86cfba6bf1"
        },
        "date": 1785748189452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "d4e759f1c49929cd7ba340c1099337609a02929c",
          "message": "feat(action): provision the fallow-type-aware sidecar for typeAware-enabled projects (#2110)\n\nThe Action gains a tri-state type-aware input (auto reads the project config, true forces, false skips and passes --no-type-aware). When enabled it installs fallow-type-aware at exactly the resolved CLI version into a runner tool dir, verifies the exact-version match fail-closed, and exports FALLOW_TYPE_AWARE_BIN.\n\nFixes #2107",
          "timestamp": "2026-08-03T16:11:23+02:00",
          "tree_id": "0c6f10b65768219432b24d2c1aa3923987ecc084",
          "url": "https://github.com/fallow-rs/fallow/commit/d4e759f1c49929cd7ba340c1099337609a02929c"
        },
        "date": 1785766751217,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "4274c9397ca6a46eb0277bee312baeff96b408c4",
          "message": "chore: release v3.13.0",
          "timestamp": "2026-08-03T17:02:58+02:00",
          "tree_id": "ec00145cac21238b68eb687bf69d19d4bc26887f",
          "url": "https://github.com/fallow-rs/fallow/commit/4274c9397ca6a46eb0277bee312baeff96b408c4"
        },
        "date": 1785769976665,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "afb3f6f286c11995000dd9f8ede7b0f381fda3bb",
          "message": "chore(docker): pin FALLOW_VERSION 3.13.0 with refreshed checksums",
          "timestamp": "2026-08-03T19:46:33+02:00",
          "tree_id": "ee440f986ade51fe4fef1770793658d8a5c348ef",
          "url": "https://github.com/fallow-rs/fallow/commit/afb3f6f286c11995000dd9f8ede7b0f381fda3bb"
        },
        "date": 1785779713516,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "a99fb67f3a78c6250bd62a67ac560055354e2089",
          "message": "fix(vscode): override brace-expansion to 5.0.9 for GHSA-rgw5-rvv9-x895\n\nThe transitive dependency via vscode-languageclient's minimatch sat at\n5.0.8, which the new advisory marks vulnerable; the override plus the\nrelease-age exclude move it to the patched 5.0.9.",
          "timestamp": "2026-08-03T20:11:13+02:00",
          "tree_id": "14b37c9a4ea3cd796e1af095caca491a48f43768",
          "url": "https://github.com/fallow-rs/fallow/commit/a99fb67f3a78c6250bd62a67ac560055354e2089"
        },
        "date": 1785781013409,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "d00354b85399a5908d45f38bb890877c78e5375b",
          "message": "fix(api): report truthful type-aware discovery sources (#2113)\n\nFallow's own launchers mark self-injected FALLOW_TYPE_AWARE_BIN wiring, so type-aware status now distinguishes npm-wrapper and github-action wiring from a genuinely user-set environment-override, keeps installed-sibling for the adjacent-binary path, and gives wrapper-wired discovery failures the right remediation.",
          "timestamp": "2026-08-03T21:18:47+02:00",
          "tree_id": "b222ea1b48695ba138b57c2a31f9fea17c50863b",
          "url": "https://github.com/fallow-rs/fallow/commit/d00354b85399a5908d45f38bb890877c78e5375b"
        },
        "date": 1785785378853,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "6e808833500f1f04c5ad3cd4110c0fed347e275c",
          "message": "feat(health): credit doMock targets and pin the automock coverage decision (#2119)\n\nvi.doMock and jest.doMock never mask (unhoisted and order-sensitive) but now contribute credit edges for static path-shaped targets and their manual-mock siblings on all proven receiver shapes, and doUnmock cannot clear a hoisted mask. Automock keeps coverage credit by pinned, documented decision. Public coverage-gaps docs now state the mock-aware semantics.\n\nFixes #2082",
          "timestamp": "2026-08-03T22:54:13+02:00",
          "tree_id": "14d3a42ba674d29a4e81debc496f9d0549066220",
          "url": "https://github.com/fallow-rs/fallow/commit/6e808833500f1f04c5ad3cd4110c0fed347e275c"
        },
        "date": 1785791053085,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "b6f6adc5d8882daf58b1b24a022501d24adea047",
          "message": "fix(mcp): satisfy redundant_pub_crate on the Windows test lock\n\nThe cfg(windows) test_support module is private, so the pub(crate) static\ntripped clippy's redundant_pub_crate on the Windows validation leg.",
          "timestamp": "2026-08-04T08:17:00+02:00",
          "tree_id": "f669c7d197ba434ab4b2bc23ab6c68e2ae55fa5d",
          "url": "https://github.com/fallow-rs/fallow/commit/b6f6adc5d8882daf58b1b24a022501d24adea047"
        },
        "date": 1785824732791,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "5de19d4e50ee457c03f2f666aae93fb7319dd994",
          "message": "test(process): harden the Unix process-tree registry test against slow runners\n\nSame flake family as #2112, Linux leg: the pid-file wait gains slow-CI\nheadroom with non-empty-content polling so a mid-write read cannot race\nthe parse, the kill wait widens, and the fixture sleep outlives the\nraised window.\n\nRefs #2112",
          "timestamp": "2026-08-04T08:59:50+02:00",
          "tree_id": "37e9fef9f7b937cbe1047b336341e1761456283d",
          "url": "https://github.com/fallow-rs/fallow/commit/5de19d4e50ee457c03f2f666aae93fb7319dd994"
        },
        "date": 1785827114484,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "3cf8074a0e2e91c895c0a4224ba1c3bec4630d65",
          "message": "chore: release v3.14.0",
          "timestamp": "2026-08-04T09:26:26+02:00",
          "tree_id": "7169d090d5ffedbe17318e0ff4f421c33178d3db",
          "url": "https://github.com/fallow-rs/fallow/commit/3cf8074a0e2e91c895c0a4224ba1c3bec4630d65"
        },
        "date": 1785828873020,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "7093ed409c5b7e64162bd70826dd62e7db88a08c",
          "message": "chore(docker): pin FALLOW_VERSION 3.14.0 with refreshed checksums",
          "timestamp": "2026-08-04T11:01:32+02:00",
          "tree_id": "d9312a3d7b5141dd36e676ce009563447ed234ea",
          "url": "https://github.com/fallow-rs/fallow/commit/7093ed409c5b7e64162bd70826dd62e7db88a08c"
        },
        "date": 1785834490695,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "8330bfdf7e8d17017ea134d687035d85cc39ed7d",
          "message": "chore(deps): batch the remaining JS dependency updates (#2147)\n\noxlint 1.76.0, radix-ui 1.6.7, jscpd 5.0.14, rolldown 1.2.0 with the vendored viz assets regenerated in the same commit, and lightningcss 1.0.0-alpha.72. The two previously red dependabot PRs were diagnosed: the rolldown failure was vendored-asset drift now fixed here, and the lightningcss Windows failure was a cancelled job, not a real incompatibility.\n\nCloses #2121\nCloses #2130\nCloses #2033\nCloses #2050",
          "timestamp": "2026-08-04T16:31:07+02:00",
          "tree_id": "b3a49c9b224a876b62a9bec6d9554455da11d984",
          "url": "https://github.com/fallow-rs/fallow/commit/8330bfdf7e8d17017ea134d687035d85cc39ed7d"
        },
        "date": 1785856850746,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "32ac1d3e34cc28f0c8f29b5ab0168360bdffea96",
          "message": "fix(viz): restore wasm32-wasi transitive entries in the viz-frontend lockfile\n\nThe rolldown 1.2.0 lock regeneration on macOS pruned the platform-independent\nwasm binding's @emnapi closure, so npm ci failed on the missing nested\nentries. Regenerated with the full optional tree; clean npm ci passes with\nand without --omit=optional, and the build and tests are green.",
          "timestamp": "2026-08-04T18:12:48+02:00",
          "tree_id": "e1f80f1d97bd92d7d0c9bbae7e161133747e8414",
          "url": "https://github.com/fallow-rs/fallow/commit/32ac1d3e34cc28f0c8f29b5ab0168360bdffea96"
        },
        "date": 1785860482754,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "589885290490eeeb02fcc274defc55a3c11789dc",
          "message": "fix(viz): add the wasm-runtime peer entry for @emnapi/runtime 1.11.3\n\nThe @napi-rs/wasm-runtime peer dependency needs a top-level runtime entry\nthat macOS resolution never materializes; clean npm ci now passes with and\nwithout --omit=optional and the build and tests are green from scratch.",
          "timestamp": "2026-08-04T18:31:25+02:00",
          "tree_id": "a51646b9cd509dace2fe2a2d5ff1b42707f888e6",
          "url": "https://github.com/fallow-rs/fallow/commit/589885290490eeeb02fcc274defc55a3c11789dc"
        },
        "date": 1785861461825,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.3,
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
          "id": "9c3d5e3c8e527fabee9fe52a02b1ffc3b9b0470c",
          "message": "chore: overnight quality, performance, and docs sweep (#2148)\n\nVerified overnight batch: resolver and detector fixes from dogfooding (ignoreUnresolvedImports ./ matching, .js to .d.ts fallback, one unresolved-import finding per specifier), non-blocking LSP analysis with burst coalescing and the push/pull double-render fix, markdown escaping for untrusted values in github-summary and report tables, loud config errors for malformed extends and unknown override/ignoreExports keys, MCP workspace comma lists and guard validation, graph resolution performance work, duplication consolidations, and docs, changelog, and rustdoc updates. Panel-review consensus fixes included.",
          "timestamp": "2026-08-05T20:11:48+02:00",
          "tree_id": "424411e3641436fba11f43fa7a1303b634419a7b",
          "url": "https://github.com/fallow-rs/fallow/commit/9c3d5e3c8e527fabee9fe52a02b1ffc3b9b0470c"
        },
        "date": 1785954261561,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "afc7ffa7e967f84dcc49fba878edf7e05651afd7",
          "message": "fix: resolver false positives, LSP dispatch blocking, and config silent drops (#2148)\n\nResolver: ignoreUnresolvedImports matches ./-prefixed entries again, .js\nspecifiers fall back to declaration-only .d.ts modules, one\nunresolved-import finding per specifier per file. LSP: analyses spawn off\nthe dispatch loop, bursts coalesce, push and pull diagnostics no longer\ndouble after the client's first pull. Output: untrusted values escaped in\ngithub-summary and report markdown tables. Config: malformed extends\nvalues and unknown override/ignoreExports keys fail loud with a\ndeduplicated, actionable error. Also: MCP workspace comma lists and guard\nvalidation, graph resolution performance (canonicalize cache, memoized\nglobs, indexed reference attachment), duplication consolidations,\nVS Code download and cancellation fixes, CI job timeouts, docs,\nchangelog, and rustdoc updates.",
          "timestamp": "2026-08-05T20:53:14+02:00",
          "tree_id": "424411e3641436fba11f43fa7a1303b634419a7b",
          "url": "https://github.com/fallow-rs/fallow/commit/afc7ffa7e967f84dcc49fba878edf7e05651afd7"
        },
        "date": 1785956534922,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "24e84bc0ca81bd48d3b0a520cbcdcd2ab090ef75",
          "message": "feat(cli): progressive root help, specifier-anchored imports, code-span table cells (#2149)\n\nfallow -h leads with the task cheat sheet, shows the Analysis and Workflow groups plus everyday options, and points to --help for the complete list (197 to 49 lines; the machine schema is unchanged). Unresolved-import findings anchor on the source specifier via new statement and source spans threaded through extract, the caches, and the graph, so one suppression above a multi-line re-export covers the deduped finding and the stale-suppression contradiction is gone. Identifier and path cells in github-summary tables render as code spans with pipe escaping, mirrored in the action/ and ci/ jq fallback renderers, and the shared helper collapses CR/LF so identifiers cannot split a table row.",
          "timestamp": "2026-08-05T23:37:28+02:00",
          "tree_id": "046f67861970ef25827049e68a08da9d1a1cf16b",
          "url": "https://github.com/fallow-rs/fallow/commit/24e84bc0ca81bd48d3b0a520cbcdcd2ab090ef75"
        },
        "date": 1785966205451,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "acab6e72f14ee8c7f5e1c3fe239c2cb456551281",
          "message": "refactor: share resolve payloads, consolidate the discovery walk, document four crates (#2153)\n\nThe seven heavy read-only extraction fields on ModuleInfo/ResolvedModule are Arc slices, so per-file resolution and graph-cache restore bump refcounts instead of deep-copying (measured 2-4% CPU reduction and lower peak RSS on real projects; cached wire shapes untouched). The engine's near-verbatim fork of the core discovery walk is deleted (net -1974 lines) along with its hardcoded config-candidate list, the no-drift gate that guarded it, and the orphaned ignore dependency; engine routes through a core_backend adapter and config candidates derive from the plugin registry, with JSON output verified byte-identical on real projects. missing_docs is burned to zero in fallow-output, fallow-api, fallow-engine, and fallow-config, each now enforcing the lint; generated contract surfaces are regenerated and the inspect identity verdict fields carry typed boolean/string schemas matching runtime output.",
          "timestamp": "2026-08-07T07:50:26+02:00",
          "tree_id": "12000ab501f15e49f4ea0ee1100e7c41745ac6cd",
          "url": "https://github.com/fallow-rs/fallow/commit/acab6e72f14ee8c7f5e1c3fe239c2cb456551281"
        },
        "date": 1786082330029,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
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
          "id": "d8de238c7fce3f4805a1d671cf54b408e9e9d445",
          "message": "refactor: consolidate entry-point discovery on the fallow-core implementation (#2154)\n\nDeletes the engine's diverged copy of entry-point discovery (net +131/-1428) and routes the engine through core_backend pass-throughs, mirroring the discovery-walk consolidation. BackendAggregatedPluginResult wraps the core AggregatedPluginResult directly so plugin entry-point provenance survives without mirror-type reconstruction; the engine e2e tests moved to core before the fork was deleted; the orphaned regex and glob dependencies are removed. Behavior verified byte-identical against a pristine baseline binary on three real projects (dead-code, check, and list JSON, cold and warm cache). One log-only change: the skipped-entry warning dedupe is a single process-wide set.",
          "timestamp": "2026-08-07T09:14:05+02:00",
          "tree_id": "ad2aba4d13d4f1be5707b5a0efe1cca2aebca583",
          "url": "https://github.com/fallow-rs/fallow/commit/d8de238c7fce3f4805a1d671cf54b408e9e9d445"
        },
        "date": 1786087395159,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "4066db66e0b2251a54a9e4b8441025d2f35374fa",
          "message": "docs(changelog): record the framework-template complexity breakdown (#2157)\n\nThe fix landed in #2152 without a changelog entry while GitHub Actions was down. Records the user-facing behavior: the VS Code inline breakdown and health --complexity-breakdown now render contributing conditions for Vue, Angular, Svelte, and Astro templates, metric totals are unchanged, and two things are visible on upgrade (a Svelte block whose condition sits away from the block open can report a different line and column, and the first analysis re-extracts because older caches hold no breakdown).",
          "timestamp": "2026-08-07T22:03:25+02:00",
          "tree_id": "a0c9834418bb264743d3661bbfa107ff4295e360",
          "url": "https://github.com/fallow-rs/fallow/commit/4066db66e0b2251a54a9e4b8441025d2f35374fa"
        },
        "date": 1786133275506,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "1791333192526e898de933a5245ba9dcfd22d48e",
          "message": "feat: rank and triage distant duplicate code\n\n* feat: start duplication triage improvements\n\n* feat: improve duplication triage\n\n* test: update VS Code schema fixtures\n\n* test: refresh VS Code integration CLI version",
          "timestamp": "2026-08-07T23:00:20+02:00",
          "tree_id": "70ceedb6abe93ce657c9843d13a1b3f234e6480b",
          "url": "https://github.com/fallow-rs/fallow/commit/1791333192526e898de933a5245ba9dcfd22d48e"
        },
        "date": 1786136883047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "49c0bb438c8ddf4b207ad35446f6525147ecb2ae",
          "message": "refactor: keep one definition of each discovery constant (#2159)\n\nSOURCE_EXTENSIONS, PRODUCTION_EXCLUDE_PATTERNS, and ALLOWED_HIDDEN_DIRS were byte-identical copies in the engine and the core walk that consumes them; the engine re-exports the core definitions through the backend adapter, leaving its public paths unchanged. OUTPUT_DIRS had a third copy and moves to fallow-graph, the lowest crate both sides already depend on, so no adapter hop or boundary exception is needed. Verified byte-identical check and list JSON on two real projects against a binary built from a pristine worktree at the parent commit.",
          "timestamp": "2026-08-08T00:15:56+02:00",
          "tree_id": "ccd62f158eb0fff46d7ffd34dc9061aa175a6f3e",
          "url": "https://github.com/fallow-rs/fallow/commit/49c0bb438c8ddf4b207ad35446f6525147ecb2ae"
        },
        "date": 1786141504182,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "dffec365267ba06a983bfa0944be5ff339f1fb64",
          "message": "refactor: harden duplication architecture\n\n* refactor: start duplication architecture hardening\n\n* refactor: harden duplication architecture\n\n* test: keep spread proptest out of miri",
          "timestamp": "2026-08-08T06:48:38Z",
          "tree_id": "9dea107b803e597dc40092ec7e719931ca75b72f",
          "url": "https://github.com/fallow-rs/fallow/commit/dffec365267ba06a983bfa0944be5ff339f1fb64"
        },
        "date": 1786172170839,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "9ebcfc87b04045556abb61e5c4dfb6a390564139",
          "message": "fix(health): label Svelte await complexity contributions\n\n* fix(health): label Svelte await complexity contributions\n\n* test(vscode): update schema version fixtures\n\n* fix(output): version JSON envelopes independently\n\n* docs: defer public v4 skill guidance\n\n* fix(types): preserve schema version compatibility",
          "timestamp": "2026-08-08T22:09:01+02:00",
          "tree_id": "f2e322855620560659ec5fb50ceb796bc3d4b1e2",
          "url": "https://github.com/fallow-rs/fallow/commit/9ebcfc87b04045556abb61e5c4dfb6a390564139"
        },
        "date": 1786220170064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "d4c08465b2c66afbaf3ea1e25b6259a02da30327",
          "message": "fix: close duplication sweep gaps\n\n* chore: start duplication filter follow-up\n\n* fix: close duplication sweep gaps",
          "timestamp": "2026-08-08T20:57:45Z",
          "tree_id": "56100040f2ddcb3269abc022a5eb6e0e68f8e403",
          "url": "https://github.com/fallow-rs/fallow/commit/d4c08465b2c66afbaf3ea1e25b6259a02da30327"
        },
        "date": 1786223011641,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "74ccc085c31e9c716ff60360016e6cb0cea8d590",
          "message": "fix: repair dangling anchors in the CLI reference (#2166)\n\nThree table-of-contents and cross-reference links pointed at renamed headings. Point them at the current headings, spell the ampersand in the health heading as a word so the slug carries no doubled hyphen, and add a test that fails on any in-document link whose target heading is absent.\n\nReported in fallow-rs/fallow-skills#6.",
          "timestamp": "2026-08-09T22:50:59+02:00",
          "tree_id": "515ba74826323b85917e33e54e45feb7eaddb390",
          "url": "https://github.com/fallow-rs/fallow/commit/74ccc085c31e9c716ff60360016e6cb0cea8d590"
        },
        "date": 1786309098157,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "b8e9c8c305dd7a5ae9f4f3afa7880738028ad943",
          "message": "fix(health): handle inline Svelte await states",
          "timestamp": "2026-08-09T21:00:28Z",
          "tree_id": "624248b4aea1879c39d244ecbbe5954cd38bbfe2",
          "url": "https://github.com/fallow-rs/fallow/commit/b8e9c8c305dd7a5ae9f4f3afa7880738028ad943"
        },
        "date": 1786309663887,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "4934a353b9e283a1e8880ba0ce7545d98ab71e0c",
          "message": "fix: respect explicit private-type-leaks off under type-aware (#2201)\n\nFixes #2170",
          "timestamp": "2026-08-11T17:19:52+02:00",
          "tree_id": "94d80eadf32c2d330c08a233bbcfafbbd2c6b455",
          "url": "https://github.com/fallow-rs/fallow/commit/4934a353b9e283a1e8880ba0ce7545d98ab71e0c"
        },
        "date": 1786462668040,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "1ef78a594e3d1268175741a628ac8f417542b5b1",
          "message": "fix(audit): reclaim abandoned base-snapshot caches across repo hashes (#2203)\n\nFixes #2169",
          "timestamp": "2026-08-11T17:56:48+02:00",
          "tree_id": "b500ae4004e0f6cef60716805562ba2318781f8e",
          "url": "https://github.com/fallow-rs/fallow/commit/1ef78a594e3d1268175741a628ac8f417542b5b1"
        },
        "date": 1786465377899,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "1c08e714744061b81d58b5a439f78d5a6a541980",
          "message": "fix(health): apply thresholdOverrides to synthetic SFC template findings (#2168)\n\nFixes #2163",
          "timestamp": "2026-08-11T18:39:05+02:00",
          "tree_id": "c6b99a342562c7635b7bc5c8ce964e7b6116e4bd",
          "url": "https://github.com/fallow-rs/fallow/commit/1c08e714744061b81d58b5a439f78d5a6a541980"
        },
        "date": 1786468457580,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "54082f0b474b7c47239cd3543d7595e068c35009",
          "message": "chore(deps): move the Oxc tooling to oxlint 1.78 and oxfmt 0.63 (#2204)\n\nBoth released past the versions the open bumps targeted. The linter\nfinds nothing new in either scope; the formatter hugs a single arrow\nargument in one file, which is the only source change here.",
          "timestamp": "2026-08-11T19:42:55+02:00",
          "tree_id": "95eff3e60315fbab41158b76e88f14a320e6f2a6",
          "url": "https://github.com/fallow-rs/fallow/commit/54082f0b474b7c47239cd3543d7595e068c35009"
        },
        "date": 1786470549940,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "a6848ae481aa99f6b79db69406569dcba1e99ff9",
          "message": "test(vscode): pin combined and health envelopes at schema 10 (#2205)\n\nRepairs the VS Code Extension job on main after the combined/health schema moved to 10.",
          "timestamp": "2026-08-11T19:55:02+02:00",
          "tree_id": "05d258d6e81db276f7b00e619ada4be1bd304981",
          "url": "https://github.com/fallow-rs/fallow/commit/a6848ae481aa99f6b79db69406569dcba1e99ff9"
        },
        "date": 1786471251877,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "4dadd3021e5c0dfae34229041753c0dc0ae21237",
          "message": "fix(engine): pass forward-slashed paths to the untracked-file diff on Windows",
          "timestamp": "2026-08-11T20:37:13+02:00",
          "tree_id": "fb8c2f2b735a4f05795161be68e9f347eb4af493",
          "url": "https://github.com/fallow-rs/fallow/commit/4dadd3021e5c0dfae34229041753c0dc0ae21237"
        },
        "date": 1786473768397,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "1e09e51be050e6af76ec086f8e7da59e23da4d79",
          "message": "fix: sync the npm package versions with the 3.15.0 workspace (#2208)\n\nThe release moved the Rust workspace to 3.15.0 without running the npm\nversion sync, so the type-aware companion and the node bindings stayed\nat 3.14.0. The CLI refuses a companion whose version does not match, so\nthree audit tests fail on main, and the repository policy test asserts\nthe same equality directly.",
          "timestamp": "2026-08-11T22:29:47+02:00",
          "tree_id": "11e02ea0ebe1c5b43a50b464883112635f841f59",
          "url": "https://github.com/fallow-rs/fallow/commit/1e09e51be050e6af76ec086f8e7da59e23da4d79"
        },
        "date": 1786480648405,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "4b48d655bae0d7948d2d225b2a5ee940ec7af6b3",
          "message": "ci: retry the ecosystem project clone (#2206)\n\nThe analysis step in this workflow is deliberately non-gating, but the\nclone above it was not, so a transient TLS error while fetching a\nthird-party repository failed the whole job. That is what happened on\nthe next.js matrix entry: git reported a certificate verification\nfailure and the run went red while the same job passed on main before\nand after.\n\nRetry the clone three times with a growing pause, and keep failing\nloudly if it still does not succeed, so a genuinely moved or renamed\nrepository is still reported.",
          "timestamp": "2026-08-11T22:44:10+02:00",
          "tree_id": "c4186180c2e30091be3547d4fc602fed612cc47c",
          "url": "https://github.com/fallow-rs/fallow/commit/4b48d655bae0d7948d2d225b2a5ee940ec7af6b3"
        },
        "date": 1786481597772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "66ae724873c3002fe4c81d20d4a30ecb78139802",
          "message": "fix(napi): keep the node-binding manifests at the last published version until the release publishes\n\nThe npm-prep job runs npm ci in crates/napi before CI bumps the version\nfrom the dispatched tag, so the committed package.json and lockfile must\nstay at the last version whose platform packages exist on npm. The 3.15.0\nbump left the nested platform entries unresolvable and npm ci rejects the\ntree; the post-release sync brings these files to 3.15.0 once the platform\npackages are published.",
          "timestamp": "2026-08-11T23:05:14+02:00",
          "tree_id": "c8b029cbaa6df2c840cab95a61e72c53099af6e7",
          "url": "https://github.com/fallow-rs/fallow/commit/66ae724873c3002fe4c81d20d4a30ecb78139802"
        },
        "date": 1786482814340,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "354ee1c6a92bdf2e8f84c336cb35e22eff039dd8",
          "message": "chore(docker): pin FALLOW_VERSION 3.15.0 with refreshed checksums",
          "timestamp": "2026-08-12T09:51:43+02:00",
          "tree_id": "ad603a1286fa91d0ae9daa2b0128eb17b7e4484d",
          "url": "https://github.com/fallow-rs/fallow/commit/354ee1c6a92bdf2e8f84c336cb35e22eff039dd8"
        },
        "date": 1786521632834,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "14a4e64476d1d4f019de1f6e8c7f26ddf5c8e613",
          "message": "docs(release): name the two version-bearing manifests outside the bump (#2214)\n\nStep 8 said \"every version-bearing artifact\", which named neither of the two manifests that sit outside the workspace bump and follow opposite rules. v3.15.0 left `tools/type-aware-sidecar` at 3.14.0 and went red on Windows validation; the repair then bumped `crates/napi` too, which broke npm ci on unresolvable platform entries and had to be reverted. The step now names both, their opposite rules, and the lockfile check that version-string assertions miss.",
          "timestamp": "2026-08-12T10:35:27+02:00",
          "tree_id": "8c5b9b57a264d9ace4b0eb2fe32a369c7414d3c7",
          "url": "https://github.com/fallow-rs/fallow/commit/14a4e64476d1d4f019de1f6e8c7f26ddf5c8e613"
        },
        "date": 1786524068579,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "1a470d104851cfa3373eb836f915ccfdc8fb3147",
          "message": "ci: gate the release on the type-aware companion version (#2215)\n\nThe v3.15.0 release commit bumped the workspace without bumping the\ncompanion, so the CLI it produced refused to run type-aware analysis.\nThat surfaced in the Windows validation job, and once the commit was on\nmain it failed the audit tests there too.\n\nCheck the companion against the workspace version in the step that\nalready verifies the tag, before anything is built or published, and\npoint at the fix in the error rather than at the sync script, which\nwould also move the node bindings ahead of publish.",
          "timestamp": "2026-08-12T10:44:40+02:00",
          "tree_id": "dbfccd70e00514d5ce8225050e31e7ef25384bc3",
          "url": "https://github.com/fallow-rs/fallow/commit/1a470d104851cfa3373eb836f915ccfdc8fb3147"
        },
        "date": 1786524689770,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "bca40b53bffdfb518c8d65d1795847d8be1367ba",
          "message": "ci(release): drop the duplicate sidecar version check from the dispatch gate",
          "timestamp": "2026-08-12T14:44:59+02:00",
          "tree_id": "65a927db25cea89a864f527e44af9234e9731115",
          "url": "https://github.com/fallow-rs/fallow/commit/bca40b53bffdfb518c8d65d1795847d8be1367ba"
        },
        "date": 1786539243695,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
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
          "id": "038c5922e7a6f0fcf8a8dc636cb93b20d6969432",
          "message": "fix(ci): surface partial GitLab review posts (#2209)\n\nCo-authored-by: Jernej Barbaric <jernej.barbaric@login5.org>",
          "timestamp": "2026-08-12T14:56:41+02:00",
          "tree_id": "9cd3d7cae9145ad7cde876b5d54a2f18808d618d",
          "url": "https://github.com/fallow-rs/fallow/commit/038c5922e7a6f0fcf8a8dc636cb93b20d6969432"
        },
        "date": 1786540026564,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
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
        "date": 1786543003690,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
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
        "date": 1786544992303,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "73bb630b9510462e3139b3a65ba0179999380752",
          "message": "fix(health): explain override rows a reader could not act on (#2230)\n\nOverride metrics gain an optional line_count on complexity rows so a unit-size breach claim sits next to the number it was scored on; the human override section caps at the ten most actionable rows with an overflow line while JSON, compact and markdown stay complete; and a complexity override scoped to a suppressed function reads stale instead of no_match, mirroring the CRAP semantics from #2207. Additive only; health schema stays at version 10.\n\nRefs #2163",
          "timestamp": "2026-08-12T16:40:46+02:00",
          "tree_id": "af0295c2558347e66c11af566af0bcfa15ecd07c",
          "url": "https://github.com/fallow-rs/fallow/commit/73bb630b9510462e3139b3a65ba0179999380752"
        },
        "date": 1786545977945,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "b2837f8c10b4da6bdc3282ccc517a6499afbdf58",
          "message": "fix(graph): drop speculative mock candidates that resolve to package space (#2224)\n\nFactory-less jest.mock/vi.mock of a bare scoped specifier synthesized a __mocks__ sibling candidate that classified as an npm package, bypassing the speculative drop guard and surfacing as a phantom unlisted-dependency finding (@scope/__mocks__) that blocks gated CI in Jest projects. Drop speculative dynamic-import candidates that resolve to package space, bump GRAPH_CACHE_VERSION so warm caches stop replaying the phantom edges, and pin the behavior with resolver unit tests and an end-to-end regression test.\n\nCloses #2213",
          "timestamp": "2026-08-12T15:48:49Z",
          "tree_id": "348c34a0caa6ec65725906befd884c04f3ca245b",
          "url": "https://github.com/fallow-rs/fallow/commit/b2837f8c10b4da6bdc3282ccc517a6499afbdf58"
        },
        "date": 1786550214371,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
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
          "id": "64e3ce36c4a8086bd7a34aeaf7fd7d019d1548ca",
          "message": "feat(plugins): expand declarative manifest entries (#2165)\n\nImplements the declarative manifest extensions from #1774.\n\nThe public skills contract check is red by construction on a contributor PR: the regenerated CLI reference in this branch is correct, and the companion repository can only be updated by a maintainer afterwards. That sync follows immediately.",
          "timestamp": "2026-08-12T18:12:18+02:00",
          "tree_id": "e985537ff7c697dba46a75dc3f67605334f5cf1f",
          "url": "https://github.com/fallow-rs/fallow/commit/64e3ce36c4a8086bd7a34aeaf7fd7d019d1548ca"
        },
        "date": 1786551658790,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.5,
            "unit": "%"
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
        "date": 1786553169238,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
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
        "date": 1786557737847,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "6abca717a7d9a561014364f420e64c5358731683",
          "message": "chore(deps): bump CodSpeedHQ/action to v5.0.3 (#2233)\n\nPatch release over the v5 measurement change already in place: it retries\npinned binary downloads and accepts the estimation flags without a value.\nNo baseline impact.",
          "timestamp": "2026-08-12T20:46:05+02:00",
          "tree_id": "dcc1b25aa798dd46bd979078a80bdd083788700f",
          "url": "https://github.com/fallow-rs/fallow/commit/6abca717a7d9a561014364f420e64c5358731683"
        },
        "date": 1786560970337,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "ce300ac5a840a0728d026e0606c132883c27d988",
          "message": "ci: retry the remaining third-party fetches (#2237)\n\nThree jobs failed on network reads from github.com in a single day, none\ncaused by the change under test: an ecosystem clone, a checkout, and a\nrunner downloading its pinned binary.\n\nThe workflow-level ecosystem clone already retries. These are the two\nplaces left that reach a third-party host once and give up: the clone\ninside the full ecosystem script, and the Hawk archive download, which\nverifies its checksum afterwards but had nothing covering availability.",
          "timestamp": "2026-08-12T21:34:56+02:00",
          "tree_id": "717b96308a9a0965f744a9b858fbe11d1a9f7adf",
          "url": "https://github.com/fallow-rs/fallow/commit/ce300ac5a840a0728d026e0606c132883c27d988"
        },
        "date": 1786563710835,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "798918a2a34a323508e510631a49c3cc67faa7b9",
          "message": "ci: retry the image and template downloads (#2238)\n\nThe Docker job on main failed with curl exit 22 on a 503 while fetching\nthe release asset. Both this download and the GitLab template's script\nbootstrap verify what they receive but had nothing covering whether the\nrequest arrives at all.\n\ncurl treats 5xx as transient, so --retry covers exactly the observed\nfailure. The template already degrades with a warning per missing\nscript; retrying first means it degrades far less often.",
          "timestamp": "2026-08-12T22:43:23+02:00",
          "tree_id": "2eb9a780eff24fbd293e050fbd90632af72e9843",
          "url": "https://github.com/fallow-rs/fallow/commit/798918a2a34a323508e510631a49c3cc67faa7b9"
        },
        "date": 1786567725968,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
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
        "date": 1786571591253,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
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
        "date": 1786574443747,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
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
        "date": 1786576218649,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
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
        "date": 1786578597011,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "9aa5e697ccead870f7137a39a758feb470f1dc72",
          "message": "fix(graph): resolve effective barrel exports (#2210)\n\nResolves named and star re-exports through one graph-owned effective binding model: explicit-over-star precedence, ambiguous star collisions vs convergent diamonds, separate type/value namespaces with fallback lanes so real type declarations win over value-derived fallbacks, default exports excluded from star propagation, opaque bindings for external re-export surfaces, and canonical binding identity through usage propagation, public exports, duplicate analysis, traces, caches, and the type-aware sidecar. Explicit Options-API defaults earn render credit, extraction hardens binding resolution against name collisions, and workspace public-API entry points honor publicPackages.",
          "timestamp": "2026-08-13T03:41:48+02:00",
          "tree_id": "93ddc4687a7bc1f78ea09c196fac96b00d41f1b6",
          "url": "https://github.com/fallow-rs/fallow/commit/9aa5e697ccead870f7137a39a758feb470f1dc72"
        },
        "date": 1786585849671,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
            "unit": "%"
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
          "id": "95728543e804a0e4a4a0ca9dd239f328c6adde4d",
          "message": "Merge pull request #2247 from fallow-rs/feat/manual-rust-walltime\n\nci: add manual Rust walltime benchmarks",
          "timestamp": "2026-08-13T08:56:58+02:00",
          "tree_id": "7fa519205f63b391d2b9936c8b61aa94b21f9c6c",
          "url": "https://github.com/fallow-rs/fallow/commit/95728543e804a0e4a4a0ca9dd239f328c6adde4d"
        },
        "date": 1786605211089,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "6866dc917cb85276c2ef8c2d16d0deff25d2a09b",
          "message": "fix(analyze): align jest/vitest __mocks__ manual-mock semantics (#2250)\n\n* fix(analyze): align jest/vitest __mocks__ manual-mock semantics\n\nFactory-less vi.mock and jest.mock calls with a bare package specifier now\nsynthesize a speculative root-level __mocks__/<specifier> candidate. The\nresolver probes ancestor __mocks__ directories of the test file and credits\nthe manual mock file when it exists, so root-level node-module manual mocks\nno longer surface as unused files in vitest projects (issue #2225). A root\nmock without a matching mock call keeps surfacing under vitest, which\napplies manual mocks only through vi.mock; jest keeps its __mocks__ entry\npatterns, matching its automatic node-module mocking.\n\nThe vitest plugin no longer declares the /__mocks__ virtual package suffix:\nliteral X/__mocks__ imports carry no runner semantics, so they are reported\nas unlisted dependencies under both runners (issue #2226). Extract and\ngraph cache versions are bumped because extraction output and resolution\nbehavior changed.\n\n* docs(agents): align plugins rule with removed vitest /__mocks__ suffix\n\nNo built-in plugin declares a virtual package suffix since issue #2226;\nthe old example claimed @aws-sdk/__mocks__ stays suppressed, which is\nexactly the literal-import case that now reports as unlisted.",
          "timestamp": "2026-08-13T11:58:20+02:00",
          "tree_id": "2a54471f69408aab37ebdc1af6cd88709ce26aaf",
          "url": "https://github.com/fallow-rs/fallow/commit/6866dc917cb85276c2ef8c2d16d0deff25d2a09b"
        },
        "date": 1786615714265,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "c40adbdfbe7847a0f63bc8acf2bb353c6e638db9",
          "message": "feat(audit): surface new-only duplication demotion (#2256)\n\n* feat(audit): surface new-only duplication demotion\n\nAn introduced clone group none of whose instances overlap an added line\nis demoted to inherited under --gate new-only (issue #2164). The\ndemotion was invisible: nothing in the output said a group was demoted\nor why.\n\nMake it observable, with no verdict or exit-code change:\n\n- AuditDomainLedger records each demoted key and exposes demoted_count,\n  demoted_keys, and record-order demoted membership.\n- Demoted clone groups carry an additive optional demotion_reason field\n  (typed CloneDemotionReason, kebab-case, currently no-added-lines) in\n  audit JSON, on the typed programmatic path, and in the review brief.\n- Audit-family attribution blocks always include an integer\n  duplication_demoted, derived from the serialized clone groups by the\n  new attach_audit_wire_attribution single entry point, mirroring the\n  styling attribution precedent (no schema_version bump).\n- Human output folds the demotion into the gate-excluded note as an\n  indented sub-line naming the deciding diff source; --explain adds one\n  line per demoted group (report-scoped dup:<fp>, locations, rule) and\n  one line naming the diff source, capped like the clone listing.\n- The GitHub Action and GitLab CI summaries print a footnote when\n  duplication_demoted is nonzero.\n- Docs record the diff-source precedence (shared diff index over\n  merge-base worktree diff), the narrower-base over-demotion caveat,\n  and the additive-field compatibility rationale.\n\nCloses #2220\n\n* docs(cli): align LoadedDiff rustdoc with retained source label",
          "timestamp": "2026-08-13T12:35:36+02:00",
          "tree_id": "c620685c988c392694dc2a3b6e5b5fc3bc9cfea4",
          "url": "https://github.com/fallow-rs/fallow/commit/c40adbdfbe7847a0f63bc8acf2bb353c6e638db9"
        },
        "date": 1786617768496,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "12a15fb2155d56dea28dc2128b9f6682e6d0722f",
          "message": "feat(health): drop CRAP from template units and score Svelte {#snippet} blocks as their own units (#2258)\n\n* feat(health): drop CRAP from template units and score Svelte snippets\n\nSynthetic template-family units leave the CRAP dimension in every dialect\n(Closes #2235). A template carries no measurable coverage, so its CRAP was\na hidden second cyclomatic gate at 5 / 10 / 28 depending on the estimate\ntier. Template findings no longer carry crap, coverage_pct, coverage_tier,\ncoverage_source, or inherited_from; template units no longer count toward\ncrap_max, crap_above_threshold, refactoring targets, or Istanbul match\nstatistics. A maxCrap override scoped to a template unit reports a matched\nstale crap-dimension row with the CRAP value absent and copy saying the\nentry can be removed, instead of regressing to no_match. Component rollups\nare built from extracted template complexity rather than the findings\nlist, so a component whose template stops producing its own finding keeps\nits rollup. The unreachable template arm of the CRAP coverage action is\ndeleted, and the explain, MCP, and SARIF rule-help contract surfaces are\nupdated to match.\n\nTop-level Svelte {#snippet name(params)} blocks become their own\n<snippet:name> complexity units (Closes #2227). The body is scored with\nnesting rebased to zero and no longer accumulates into the parent\n<template>, so in-file snippet extraction now scores like the equivalent\nfile split instead of carrying a nesting surcharge. Snippet units are\nexact-match keys for health.thresholdOverrides[].functions, suppress with\nthe SFC markup comment above the reported anchor line, and render with a\ndistinct display name; the .svelte refactor advice names the snippet lever\nbefore a file split. Nested or unnameable snippets keep the folded\nbehavior and an unclosed snippet keeps the all-or-nothing\nmalformed-template drop. Extraction CACHE_VERSION bumps to 270.\n\nNew snippet unit names create new health-baseline buckets and overflow a\npre-existing baseline in both identity and count modes; the changelog\ntells adopters to re-save baselines on upgrade. The CRAP removal alone is\nabsorbed by baselined severity allowances and does not flip a gate.\n\n* docs(changelog): state the intentional template and snippet line-count overlap",
          "timestamp": "2026-08-13T13:04:08+02:00",
          "tree_id": "843c48061d498ca53b2bdd45f0e36d048b71bcea",
          "url": "https://github.com/fallow-rs/fallow/commit/12a15fb2155d56dea28dc2128b9f6682e6d0722f"
        },
        "date": 1786619403847,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "e5bf4e24fafe7798e97255aa458e4b62d8660ea3",
          "message": "fix: collect Rust walltime benchmark results\n\n* fix(benchmarks): use CodSpeed macro runner\n\n* fix(benchmarks): collect Rust walltime results",
          "timestamp": "2026-08-13T14:57:24+02:00",
          "tree_id": "7529a1fb2b352f9f9b7574ce36a879a04cc79876",
          "url": "https://github.com/fallow-rs/fallow/commit/e5bf4e24fafe7798e97255aa458e4b62d8660ea3"
        },
        "date": 1786626812125,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "93e765835bf3aa5b3048468753ad0fd228bbef15",
          "message": "perf: skip side-effect export indexes",
          "timestamp": "2026-08-13T15:41:30+02:00",
          "tree_id": "65970b121ab3e0902b67919ecf298a124e4db4eb",
          "url": "https://github.com/fallow-rs/fallow/commit/93e765835bf3aa5b3048468753ad0fd228bbef15"
        },
        "date": 1786629089339,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "4a2c8cb05c0ac87bc3db8614dc7a4369d0207b41",
          "message": "docs(quality-gates): root npm ci suffices for type-aware test targets (#2259)\n\nThe one-time setup section still led with the sidecar-local install as a\nblanket requirement. After #2246 the root package.json overrides entry keeps\nthe root typescript install in lockstep with the sidecar, so both the\ntype-aware CLI test targets and the sidecar's own node --test suite pass\nafter a root-only npm ci (verified locally without a sidecar-local install).\nDocument the two remaining cases that still need the local install: the\nsidecar bench devDependencies and an absent or out-of-lockstep root install,\nwhere the preflight exits 2 with the resolved version and the fix.\n\nRefs #2246",
          "timestamp": "2026-08-13T16:18:36+02:00",
          "tree_id": "3f44df2384fbdcf69e31a4b091f0baab0bae23c5",
          "url": "https://github.com/fallow-rs/fallow/commit/4a2c8cb05c0ac87bc3db8614dc7a4369d0207b41"
        },
        "date": 1786631396502,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "74f5a847a45709ef4d09a5d8f7918d6fcb70cb9d",
          "message": "perf(core): cache default entry matchers",
          "timestamp": "2026-08-13T16:57:26+02:00",
          "tree_id": "5f23453ab749809c83ad7f68b0ce87b612840b0f",
          "url": "https://github.com/fallow-rs/fallow/commit/74f5a847a45709ef4d09a5d8f7918d6fcb70cb9d"
        },
        "date": 1786633497971,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "8cde8ee26e9e0061403420077209b2395fb58901",
          "message": "build(scripts): fail loudly when node resolution escapes the checkout (#2261)\n\nNode resolves bare specifiers by walking ancestor directories, and `npm run`\nextends PATH the same way. A checkout nested inside another checkout borrows\nthe outer install when it has none of its own, so lint, format, and contract\ngeneration silently ran tool versions this checkout does not pin.\n\nAdd `scripts/assert-local-resolution.mjs`, which locates the package directory\nNode would load and fails when it sits outside this checkout, naming the\nforeign path and the install command. Wire it into the JavaScript lint and\nformat scripts through npm pre-scripts and into contract generation before the\nextension codegen runs. Entrypoints that import only `node:` builtins cannot\nescape and stay untouched; the type-aware sidecar keeps its own preflight\nbecause it also checks the backend version.\n\nRefs #2246",
          "timestamp": "2026-08-13T17:29:13+02:00",
          "tree_id": "7bfcb387334f1739cf4335f47d80133a5e8171fd",
          "url": "https://github.com/fallow-rs/fallow/commit/8cde8ee26e9e0061403420077209b2395fb58901"
        },
        "date": 1786635636083,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "400835b0ed607faeb8bca1443d39647223bab41e",
          "message": "fix(audit-cache): stop counting deregistered legacy entries as reclaimed (#2260)\n\nA pre-#1815 registration at the current cache path is only deregistered\nand stays warm on disk. Prune now reports it as kept with reason\nlegacy-deregistered, surfaces an additive deregistered count in the JSON\nenvelope plus a matching human summary line, and excludes its size from\nreclaimed_bytes and the human reclaim total. Released SHA-keyed\nregistrations are genuinely removed and stay counted.\n\nThe audit-cache prune long help now states that --dry-run previews the\npolicy; no generated contract surface embeds the nested subcommand help,\nso the generated contracts are unchanged.\n\nNew-only duplication demotion diff sources gain coverage beyond the\nWorktree state: integration tests for shared-diff precedence over the\nmerge-base worktree diff, the skipped-state --explain line, and the\ndemotion note wording, plus unit tests for the diff-source labels and\nthe retained shared-diff source label.",
          "timestamp": "2026-08-13T17:28:55+02:00",
          "tree_id": "e55cbd805de3d86dcd4413e74351be99849a981a",
          "url": "https://github.com/fallow-rs/fallow/commit/400835b0ed607faeb8bca1443d39647223bab41e"
        },
        "date": 1786636258112,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "008e2b2056841859745afae6b92047f847e5553e",
          "message": "test(audit): surface verdict context in the reshaped-clone demotion assert",
          "timestamp": "2026-08-13T18:13:44+02:00",
          "tree_id": "68eb1f43b3c9b57f7f28fb4514448f3c7ba877c2",
          "url": "https://github.com/fallow-rs/fallow/commit/008e2b2056841859745afae6b92047f847e5553e"
        },
        "date": 1786637952628,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "defaf599b13af50aa35df2138c3772c6a93de032",
          "message": "test(audit): dump base duplicate-export keys in the demotion assert",
          "timestamp": "2026-08-13T18:29:55+02:00",
          "tree_id": "429b863690666afbf6eba0ad37f74e8aa5acfe4a",
          "url": "https://github.com/fallow-rs/fallow/commit/defaf599b13af50aa35df2138c3772c6a93de032"
        },
        "date": 1786638928179,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "88507a56c272a0ec00cd59cc33c0405563f0ebf4",
          "message": "test(audit): dump full base snapshot keys in the demotion assert",
          "timestamp": "2026-08-13T18:41:16+02:00",
          "tree_id": "e32ded3879f3fba7b45ba73d38937df13e0571ed",
          "url": "https://github.com/fallow-rs/fallow/commit/88507a56c272a0ec00cd59cc33c0405563f0ebf4"
        },
        "date": 1786639597782,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "fb44ef467c8a032dc12453fb3b2842c115ec10da",
          "message": "fix(audit): keep base attribution when the focus remap fails\n\nThe base-snapshot focus set is built from `git rev-parse --show-toplevel`,\nwhose spelling can differ from the caller's canonicalized root (Windows 8.3\ncomponents and drive-letter case, verbatim prefixes), so a literal\nstrip_prefix mapped no path at all. The base dead-code results were then\nfiltered against an empty focus set and every base finding disappeared, which\nmade each inherited finding look introduced and failed `--gate new-only` on\npre-existing findings.\n\nThe remap now compares simplified and canonicalized forms before giving up on\na path, and a base run whose focus set cannot be expressed leaves its results\nunfiltered instead of filtering them against an empty set.",
          "timestamp": "2026-08-13T20:01:56+02:00",
          "tree_id": "a32c69c82618dc6eee83c07431f87f5eed349ee2",
          "url": "https://github.com/fallow-rs/fallow/commit/fb44ef467c8a032dc12453fb3b2842c115ec10da"
        },
        "date": 1786644434729,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "aec0bd07a5e2532ad242a3587459b7aaade345df",
          "message": "test(audit-cache): ignore lazy directory mtimes in the prune snapshot",
          "timestamp": "2026-08-13T20:17:19+02:00",
          "tree_id": "93e3fee7ae6c8e79248acf298c739fe8ecdbc395",
          "url": "https://github.com/fallow-rs/fallow/commit/aec0bd07a5e2532ad242a3587459b7aaade345df"
        },
        "date": 1786645383770,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "45fd28766199acb1f939f6862274a37aad12770b",
          "message": "chore: release v3.16.0",
          "timestamp": "2026-08-13T21:13:19+02:00",
          "tree_id": "75fc52ec7f7b8ff5a32073a0c7f8f8145dd2f75a",
          "url": "https://github.com/fallow-rs/fallow/commit/45fd28766199acb1f939f6862274a37aad12770b"
        },
        "date": 1786648881562,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "9f8b753e84f47c53eda2c4b7a61002f3bc34c511",
          "message": "ci(benchmarks): add output walltime suite",
          "timestamp": "2026-08-13T23:07:05+02:00",
          "tree_id": "2890796b061e16f3345a62b03a99b8142fce6229",
          "url": "https://github.com/fallow-rs/fallow/commit/9f8b753e84f47c53eda2c4b7a61002f3bc34c511"
        },
        "date": 1786655842872,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "c64f703114d452f52077a3a1737696a22a342ec9",
          "message": "perf(graph): reserve named export index capacity",
          "timestamp": "2026-08-13T23:53:47+02:00",
          "tree_id": "bdbad5be9280f810e1c0cf7527b6a71fc6d80ef4",
          "url": "https://github.com/fallow-rs/fallow/commit/c64f703114d452f52077a3a1737696a22a342ec9"
        },
        "date": 1786658441174,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "c2b6c9efff2e4de57a32bfad828bc5a3a3574070",
          "message": "perf(output): insert root kind in place",
          "timestamp": "2026-08-14T00:15:47+02:00",
          "tree_id": "9aa3e9c8065828466f34323fb9593765664c96cf",
          "url": "https://github.com/fallow-rs/fallow/commit/c2b6c9efff2e4de57a32bfad828bc5a3a3574070"
        },
        "date": 1786659723138,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "8b32aa4f6a285d1ae6897986f99dde834ecb7579",
          "message": "chore(docker): pin FALLOW_VERSION 3.16.0 with refreshed checksums",
          "timestamp": "2026-08-14T00:38:42+02:00",
          "tree_id": "362c1fbc84741f399cd199621f74bde72b1d11cf",
          "url": "https://github.com/fallow-rs/fallow/commit/8b32aa4f6a285d1ae6897986f99dde834ecb7579"
        },
        "date": 1786661067603,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.6,
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
          "id": "95a7ae9faf9e987616fe2366b74e99626dfd58c6",
          "message": "fix: surface star-export ambiguity instead of blaming the sources (#2268)\n\nWhen two star re-export sources supply the same name, the barrel exports nothing under that name. Unused-export and unused-type findings are now suppressed for the declarations that contribute to such a collision, instead of blaming both source files for a mistake in the barrel. Traces carry an optional star_export_ambiguity block naming the contributing files and namespaces, so an ambiguous name is no longer indistinguishable from a misspelled one. The unrendered-component and unprovided-inject headers now state the guarantee the code actually offers, including the abstain carve-out that remains. The value-derived type fallback lane is seeded lazily, which makes barrel-chain resolution roughly ten percent cheaper.\n\nCloses #2262\nCloses #2263\nCloses #2264",
          "timestamp": "2026-08-14T08:35:39+02:00",
          "tree_id": "daf704ab51453c6880b4fb3c5d8775efa97cafce",
          "url": "https://github.com/fallow-rs/fallow/commit/95a7ae9faf9e987616fe2366b74e99626dfd58c6"
        },
        "date": 1786689690068,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "6ab2c847bad9bc88a85e6fa29139a811db7203a0",
          "message": "fix(type-aware): bound generic scans and identify Svelte host gaps\n\n* chore: start type-aware issue fixes\n\n* fix: harden type-aware generic and Svelte analysis",
          "timestamp": "2026-08-14T11:14:51+02:00",
          "tree_id": "e9541817bdca9b64870fd20eab3e4911020d11d0",
          "url": "https://github.com/fallow-rs/fallow/commit/6ab2c847bad9bc88a85e6fa29139a811db7203a0"
        },
        "date": 1786699228747,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
            "email": "bartwaardenburg@gmail.com",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "f66e6e8d30cdeedaec9f07c740a4584a00442269",
          "message": "ci(benchmarks): add round five walltime suites",
          "timestamp": "2026-08-15T22:47:15+02:00",
          "tree_id": "1d34def8c9735809e8ff79a0133f5758b0244fa0",
          "url": "https://github.com/fallow-rs/fallow/commit/f66e6e8d30cdeedaec9f07c740a4584a00442269"
        },
        "date": 1786827147250,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "7a8442440410c9e3211ac28028fd415e8ee4e303",
          "message": "perf(types): bucket clone spread locations",
          "timestamp": "2026-08-15T23:51:41+02:00",
          "tree_id": "5f52d8af626c7e62b2ce1239d7963bbfc93e8c92",
          "url": "https://github.com/fallow-rs/fallow/commit/7a8442440410c9e3211ac28028fd415e8ee4e303"
        },
        "date": 1786831116930,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "4084184901c496642c96f0b8937ce933342cfa2e",
          "message": "perf(extract): deduplicate local type declarations once",
          "timestamp": "2026-08-15T22:01:25Z",
          "tree_id": "2b57ead18d3817001821489850716112f9185888",
          "url": "https://github.com/fallow-rs/fallow/commit/4084184901c496642c96f0b8937ce933342cfa2e"
        },
        "date": 1786831615576,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "8437d52e6688cd1ce823d5da8c6670e7a23f839f",
          "message": "fix: close analysis and audit follow-ups\n\n* chore: start issue follow-up batch\n\n* chore: start issue follow-up batch\n\n* fix: close analysis and audit follow-ups",
          "timestamp": "2026-08-16T01:07:16+02:00",
          "tree_id": "84124fa62f20213b3fbefff9d07a20d84d5a33fd",
          "url": "https://github.com/fallow-rs/fallow/commit/8437d52e6688cd1ce823d5da8c6670e7a23f839f"
        },
        "date": 1786835550900,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
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
        "date": 1786904831177,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "7e8519ba93148bf2671b4566b7ea0938a753a850",
          "message": "fix: start type-aware reliably on Windows\n\nFixes #2284.",
          "timestamp": "2026-08-16T22:33:00+02:00",
          "tree_id": "b603852bc707adf8e22356ea7436e31668a37872",
          "url": "https://github.com/fallow-rs/fallow/commit/7e8519ba93148bf2671b4566b7ea0938a753a850"
        },
        "date": 1786912652496,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "e08e3e05fe9909916f92b089fb7e8ae5ff544e32",
          "message": "chore: release v3.17.0",
          "timestamp": "2026-08-16T23:47:53+02:00",
          "tree_id": "5418df7130ee9f4317fffae9b8c21e2f27282181",
          "url": "https://github.com/fallow-rs/fallow/commit/e08e3e05fe9909916f92b089fb7e8ae5ff544e32"
        },
        "date": 1786917740517,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "ecf5a314fd3e10974acb4f5a7f867c433030522d",
          "message": "fix(release): install Windows platform candidate",
          "timestamp": "2026-08-17T00:12:46+02:00",
          "tree_id": "10a644dfa693b2320558228999bbac4a03b2bf0b",
          "url": "https://github.com/fallow-rs/fallow/commit/ecf5a314fd3e10974acb4f5a7f867c433030522d"
        },
        "date": 1786918695636,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "fc234ba804a29edc872f2ace40045b6254da5c81",
          "message": "chore(docker): pin v3.17.0 assets",
          "timestamp": "2026-08-17T02:40:35+02:00",
          "tree_id": "0c18118291abdea71c5f0798efb0c53da759674a",
          "url": "https://github.com/fallow-rs/fallow/commit/fc234ba804a29edc872f2ace40045b6254da5c81"
        },
        "date": 1786927732692,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "aba36fe9c341c4365ead772ba7ff274a74ecf8eb",
          "message": "chore(benchmarks): remove stale CodSpeed coverage\n\n* chore: start CodSpeed benchmark cleanup\n\n* chore(benchmarks): remove stale CodSpeed coverage",
          "timestamp": "2026-08-17T09:32:16+02:00",
          "tree_id": "1ae690447248416f42d7419692136895a319c362",
          "url": "https://github.com/fallow-rs/fallow/commit/aba36fe9c341c4365ead772ba7ff274a74ecf8eb"
        },
        "date": 1786952428149,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "6ebdf806df1a1ce1389026401af225d8fc7ab38f",
          "message": "perf(engine): coalesce duplicate line ranges",
          "timestamp": "2026-08-17T16:44:24+02:00",
          "tree_id": "2c1af25ee8f999aa236ef4107e1b91d6d82d24ed",
          "url": "https://github.com/fallow-rs/fallow/commit/6ebdf806df1a1ce1389026401af225d8fc7ab38f"
        },
        "date": 1786978202703,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
            "email": "bartwaardenburg@gmail.com",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "08aad0e35721f0adcf599f890a6a8ac3ea344f35",
          "message": "test(npm): cover lazy verification on Windows",
          "timestamp": "2026-08-17T19:45:34+02:00",
          "tree_id": "4b09526a14aa4eae81f876c06ffcec173fced62c",
          "url": "https://github.com/fallow-rs/fallow/commit/08aad0e35721f0adcf599f890a6a8ac3ea344f35"
        },
        "date": 1786989067464,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "4651de0ef4cb03746823c471a4e97c74479da7a8",
          "message": "feat(vscode): publish platform-specific extension packages\n\nPublishes smaller target-specific VSIX packages for macOS, Linux, and Windows while retaining the universal compatibility fallback. Hardens release publication with exact artifact inventory, isolated registry credentials, and credential-free public verification.",
          "timestamp": "2026-08-17T20:51:17+02:00",
          "tree_id": "24857f17e4e59fb69f56e21d57432db9bbe56d5b",
          "url": "https://github.com/fallow-rs/fallow/commit/4651de0ef4cb03746823c471a4e97c74479da7a8"
        },
        "date": 1786992985835,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "172d9f1ca0f3eb73b1a8404548b67cbe6dafdee4",
          "message": "ci(benchmarks): add config walltime workload",
          "timestamp": "2026-08-17T21:38:28+02:00",
          "tree_id": "6c881a427b010bca176695a1414908e16eba8843",
          "url": "https://github.com/fallow-rs/fallow/commit/172d9f1ca0f3eb73b1a8404548b67cbe6dafdee4"
        },
        "date": 1786995783729,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "f44fa8e5f47a37383c5b48bea7df41ab8729087c",
          "message": "perf(engine): preallocate health candidate paths",
          "timestamp": "2026-08-18T10:37:56+02:00",
          "tree_id": "f17d09561f443acf7ee864bb1c79077f03ab38fa",
          "url": "https://github.com/fallow-rs/fallow/commit/f44fa8e5f47a37383c5b48bea7df41ab8729087c"
        },
        "date": 1787042781018,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "00be8921cfd7397d579693a592e60e2944fc1a2a",
          "message": "perf(benchmarks): cover saved report rendering",
          "timestamp": "2026-08-18T11:20:35+02:00",
          "tree_id": "b3f35a4ca0b97461757bbdcf219e9fa16a1e8b6b",
          "url": "https://github.com/fallow-rs/fallow/commit/00be8921cfd7397d579693a592e60e2944fc1a2a"
        },
        "date": 1787045433729,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "21b304caa4484b4395588e526df4663db8a1d7aa",
          "message": "perf(core): cache discovery file type matchers",
          "timestamp": "2026-08-18T22:20:39+02:00",
          "tree_id": "d8ecea9f32a90f11c1f4b6fb18ae40000db1ba7e",
          "url": "https://github.com/fallow-rs/fallow/commit/21b304caa4484b4395588e526df4663db8a1d7aa"
        },
        "date": 1787084920049,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
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
          "id": "fc2a90cef2bae23eca27f00c464122dd25a7904b",
          "message": "chore(deps): bump taiki-e/install-action from 2.85.8 to 2.85.11 (#2317)\n\nBumps [taiki-e/install-action](https://github.com/taiki-e/install-action) from 2.85.8 to 2.85.11.\n- [Release notes](https://github.com/taiki-e/install-action/releases)\n- [Changelog](https://github.com/taiki-e/install-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/taiki-e/install-action/compare/cb33e69fad06166ca28a42b2575e4dadabf62ee8...7f4eb899022d8fe70b20c4f3de697aa85c309026)\n\n---\nupdated-dependencies:\n- dependency-name: taiki-e/install-action\n  dependency-version: 2.85.11\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-18T23:29:46+02:00",
          "tree_id": "05b1c5c4704c2b9b12bd24c3c8d8a20c3acccdb5",
          "url": "https://github.com/fallow-rs/fallow/commit/fc2a90cef2bae23eca27f00c464122dd25a7904b"
        },
        "date": 1787090786717,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
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
          "id": "7e1e075d314031e000c552e8af2f5de26084d0a1",
          "message": "chore(deps-dev): bump ovsx to 1.1.1 and rolldown to 1.2.3 (#2322)",
          "timestamp": "2026-08-18T22:33:27Z",
          "tree_id": "c80bf47d3b43378343eb88ec2a0df0d9c4b08206",
          "url": "https://github.com/fallow-rs/fallow/commit/7e1e075d314031e000c552e8af2f5de26084d0a1"
        },
        "date": 1787092843016,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.7,
            "unit": "%"
          }
        ]
      }
    ]
  }
}