window.BENCHMARK_DATA = {
  "lastUpdate": 1780775655027,
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
          "id": "5f928483d8635fc322e5954473772b45d085881d",
          "message": "fix(plugins): credit eslint meta-preset plugins pulled via peerDependencies (#805)\n\nA flat config that calls a preset factory (export default antfu({...}))\nnames no individual plugins, so the plugins the preset enables (declared\nas its own optional peerDependencies) surfaced as unused-dev-dependency.\nThe flat-config plugins object-key credit had nothing to match, and the\ngeneric required-peer-dependency closure intentionally skips optional peers.\n\nWhen the ESLint config imports a package whose name matches a preset shape\n(eslint-config-* or @scope/eslint-config[-*]), fallow now reads that preset's\nown package.json and credits the eslint-ecosystem entries (eslint-plugin-*,\nscoped plugins, shareable configs, parsers, import resolvers) it declares in\ndependencies / peerDependencies / optionalDependencies. General-purpose runtime\ndeps (globals, ansis) are excluded, and a plain plugin import does not pull in\nits own dependency fan.\n\nOn the real-world repro (antfu({...}).append({...})) this credits the three\nplugins antfu 9 genuinely pulls (@eslint-react/eslint-plugin, eslint-plugin-format,\neslint-plugin-react-refresh); plugins the preset does not declare stay reported.\n\nCloses #754.",
          "timestamp": "2026-05-30T10:59:11Z",
          "tree_id": "2075bfbb948d319cf4d2f856d649af79c434c210",
          "url": "https://github.com/fallow-rs/fallow/commit/5f928483d8635fc322e5954473772b45d085881d"
        },
        "date": 1780139899619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252582024,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780144201320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252570912,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780146253278,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252583720,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1780161539991,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252613984,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1780174285459,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252895032,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780177243791,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252795672,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780179835532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252795672,
            "unit": "bytes"
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
        "date": 1780298883779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252810496,
            "unit": "bytes"
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
        "date": 1780300855357,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252811688,
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
          "id": "a8e5d02f872a8aca8fb4eaf14d02693fd28ed848",
          "message": "Merge pull request #822 from fallow-rs/comment-cleanup\n\nfix(mcp): restore schema descriptions and regenerate schema",
          "timestamp": "2026-06-01T10:14:12+02:00",
          "tree_id": "1ae10301813b78020b2ddc76cf4427858637cb1f",
          "url": "https://github.com/fallow-rs/fallow/commit/a8e5d02f872a8aca8fb4eaf14d02693fd28ed848"
        },
        "date": 1780302048485,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252745872,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780302504400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252801416,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780303788015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252801416,
            "unit": "bytes"
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
        "date": 1780304238302,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252806576,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780305048642,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252839184,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780307256279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252931496,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780307753415,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252931984,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780308435786,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252934256,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780311319693,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252934256,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780312292150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 252934256,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780314382218,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 253079016,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780318135079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 253298040,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780319502281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 253848832,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780320202312,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 253891072,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780328079257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 253895760,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780328846836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 254747360,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780330637244,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 254783288,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780335122576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 255494128,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780339304685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 255494072,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780339746057,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 255605944,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780347440907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 255605944,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780391730113,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 255712976,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780395760120,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 257170736,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780398505391,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 257106064,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780400616716,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 257106064,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780402050249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 257150728,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780408797532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 257789728,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780415228298,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 257797920,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780415799559,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 257797920,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780417281843,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 257797920,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780427158581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 257803696,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780427927018,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 258131984,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780430066954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 258145976,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780433254815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 258333456,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780440957355,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 258880288,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780469284946,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 258980016,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780471363071,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 258980016,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780471967514,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 259003184,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780477595554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 259095736,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780479202193,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 259859576,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780484751022,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 259994216,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780489542125,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260016880,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780492360238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 259929968,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780493641730,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260140072,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780494442161,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260140072,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780500101299,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260147664,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780505491259,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260147664,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780507941676,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260147664,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780509401008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260157112,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780511505469,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260157112,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780550729054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260199560,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780564369776,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260224872,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780566207762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260320408,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780566798156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260320408,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780568453072,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260320408,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780569660393,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260400144,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780571109863,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260400144,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780590247533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260532752,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780591053957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260544248,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
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
        "date": 1780594275504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260544248,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08c11441fe165b62dd27696c4d05bcc22ed4c7f0",
          "message": "fix(cli): reclaim audit base-snapshot worktrees orphaned by external dir removal\n\nWhen an external cleanup process (a `$TMPDIR` reaper, a container restart, a CI cache eviction) removes a reusable base-snapshot worktree directory but leaves git's admin entry behind, the entry lingered indefinitely as a `prunable` row in `git worktree list`. The age-based sweep keyed only on the `.last-used` sidecar, which survives next to the deleted directory, so it re-touched a fresh sidecar and never reclaimed these orphans.\n\n`sweep_old_reusable_caches` now takes `Option<Duration>` and runs on every audit invocation. It reclaims any reusable entry whose directory is gone before the age branch: lock-guarded, re-checked under the lock against a concurrent rebuild, removing the git admin entry and the stale sidecar. The reclaim runs even when age-based GC is disabled, so dead admin entries no longer accumulate. Adds two regression tests covering enabled and disabled GC thresholds.",
          "timestamp": "2026-06-04T19:31:16+02:00",
          "tree_id": "dd1a2244fdad94a53a96fea1f9de12f06e4e3176",
          "url": "https://github.com/fallow-rs/fallow/commit/08c11441fe165b62dd27696c4d05bcc22ed4c7f0"
        },
        "date": 1780594716586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260546096,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8dea7f73197c1387cbdcdf97c1f464d293ac68",
          "message": "fix(vscode): review follow-ups for #904 (license-management)\n\n* fix(cli): emit full LicenseStatusJson shape on license deactivate\n\nThe deactivate --format json envelope hand-rolled a six-key json! literal,\nomitting seven fields (tier, seats, features, days_until_expiry,\ndays_since_expiry, refresh_suggested, runtime_coverage_enabled) that the\nLicenseStatusJson contract declares non-optional. The VS Code extension\nforce-casts every license envelope to that interface, so the gap was a latent\ncontract break.\n\nRoute deactivate through a shared build_status_payload helper so every envelope\ncarries the same field set; removed is now an Option<bool> with\nskip_serializing_if so status/activate/refresh envelopes stay byte-identical.\nAlso:\n\n- Report an honest <inline FALLOW_LICENSE> sentinel for license_path when the\n  inline JWT env var is set (loader precedence was previously mis-reported as\n  the default file path).\n- Log rather than silently swallow the rare JSON serialization failure.\n- Fix the LicenseStatusJson doc comment that wrongly claimed hard_fail carries\n  no claims.\n- Add a Rust key-parity test asserting the deactivate envelope matches the TS\n  interface, plus env-precedence coverage via a pure resolver.\n\n* fix(vscode): address review follow-ups for #904 license management\n\n- Surface the Deactivate License command in the dead-code view-title menu\n  (license@4 group), not just the command palette.\n- Drop the redundant disposeLicenseStatusBar wrapper pushed to subscriptions;\n  the item is already pushed and disposed in deactivate(), matching the main\n  analysis status-bar pattern (no double-dispose).\n- Document the deactivate envelope now carrying the full status shape in the\n  license-types.ts doc comment.\n- Document the license feature in README.md: a Features bullet, four\n  Commands-table rows, and two Settings-table rows.\n- Extend tests: a parseLicenseJson case for the full deactivate envelope and a\n  package-manifest assertion that every license command is in the view-title\n  menu.\n- Rebuild the dist bundle.",
          "timestamp": "2026-06-04T19:53:49+02:00",
          "tree_id": "b9e1b4e223db96760cc3071a68cb1b8dd02fff0c",
          "url": "https://github.com/fallow-rs/fallow/commit/cf8dea7f73197c1387cbdcdf97c1f464d293ac68"
        },
        "date": 1780596066970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260521256,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89e76ab006ca8f09293b36b692eefb5ec70cf085",
          "message": "perf(cli): avoid CI renderer JSON roundtrip\n\nKeep combined CodeClimate output as the same serialized array, but let the PR comment and review-envelope paths consume the typed CodeClimate issues directly. This removes the serialize-then-parse hop from combined CI renderers while preserving existing diff filtering and ordering.\n\nThe review envelope grouping now applies the comment cap during grouping so large reports stop building unused groups. Regression coverage pins typed severity parity and max-comment behavior, including zero comments and same-line merged findings.",
          "timestamp": "2026-06-04T20:25:43+02:00",
          "tree_id": "67bdfc2b26e0c2542f997bbfdc1bc94bd3255547",
          "url": "https://github.com/fallow-rs/fallow/commit/89e76ab006ca8f09293b36b692eefb5ec70cf085"
        },
        "date": 1780597984636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 260700696,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3f3bbdf4f699ffb35abb56d6785ed5a9d4b0eb8",
          "message": "feat(security): add catalogue sink rows\n\nAdd catalogue-only security sink rows for issue #882, covering dynamic CommonJS module loading, node:fs path sinks, response header injection, raw SQL escape hatches, DOM navigation, source-backed mass assignment, and additional SSRF clients.\n\nAdd a small source-required matcher gate for broad sinks such as `Object.assign`, keeping that category tied to the existing untrusted-source model instead of reporting source-free non-literal objects. Refresh the security command reference text and keep the VS Code self-analysis configuration clean after the rebase onto current main.\n\nFixes #882.",
          "timestamp": "2026-06-04T22:02:07+02:00",
          "tree_id": "64c59213a59e2d5a5ea137fe944f9f1f058cdbb1",
          "url": "https://github.com/fallow-rs/fallow/commit/c3f3bbdf4f699ffb35abb56d6785ed5a9d4b0eb8"
        },
        "date": 1780603770583,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 261052768,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f0d8893b41e3987151c16573c84a576b03716bc",
          "message": "fix(cli): name the upgrade-nudge opt-out inline (#988)\n\nThe #978 upgrade nudge repeats on every interactive run until you upgrade,\nunlike the one-time telemetry opt-in note, but it was the only unsolicited\nstderr line with no self-described way to silence it: FALLOW_UPDATE_CHECK=off\nwas undiscoverable from the output itself.\n\nAppend \"(silence: FALLOW_UPDATE_CHECK=off)\" to the printed line, interpolating\nthe existing env-var const so the name stays single-sourced. CHANGELOG\n[Unreleased] entry updated. No gating or logic change.\n\nRefs #978.",
          "timestamp": "2026-06-04T23:28:05+02:00",
          "tree_id": "78867aeb6c5398d2443ca4acbb5076dc62b54903",
          "url": "https://github.com/fallow-rs/fallow/commit/2f0d8893b41e3987151c16573c84a576b03716bc"
        },
        "date": 1780608955485,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 261052768,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0e29acf8b4b495952032e7890c4239dc0d978e9",
          "message": "feat(security): add catalogue sink rows batch 2 (#990)\n\nAdd catalogue-only tainted-sink rows for issue #897: insecure randomness\n(crypto.pseudoRandomBytes), deprecated cipher constructors\n(crypto.createCipher/createDecipher), template escape bypass (SafeString),\nXPath injection (xpath.select/select1), unsafe Buffer allocation\n(Buffer.allocUnsafe/allocUnsafeSlow), and react-native-webview injected\nscripts (injectJavaScript / injectedJavaScript, enabler-gated). Extend the\nraw-SQL escape-hatch row with Sequelize.literal.\n\nNo extractor, cache, or schema change: every row fits the existing\nnon-literal-arg sink model and fires on a non-literal argument only.\n\nThree of the issue's listed rows are deferred and documented in the catalogue\nDEFERRED block: sensitive client storage and info/error exposure need an\nidentifier / error-object shape gate (fold into #892), and mysql\nmultipleStatements needs option-object capture (#875).\n\nFixes #897.",
          "timestamp": "2026-06-04T23:46:30+02:00",
          "tree_id": "c95897cab8baef34767d3092a6e09ced9bea6d21",
          "url": "https://github.com/fallow-rs/fallow/commit/d0e29acf8b4b495952032e7890c4239dc0d978e9"
        },
        "date": 1780610029167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 261056864,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6898a24b96248c0eed09d9b8a88c57125d851b62",
          "message": "feat(telemetry): findings_present, workflow split, MCP surface tagging (#994)\n\nThree telemetry accuracy gaps, all telemetry-only (no analysis output, exit codes, or user-facing behavior change; payload stays off-by-default and allowlisted).\n\n#972 adds an optional findings_present field set from each analysis's real result, decoupled from the exit-code outcome gate (default-config dupes never gates, so outcome=success was the only signal). #974 routes Command::Impact/Security/Fix/Explain to their own Workflow variants. #973 tags MCP-spawned CLI runs as integration_surface=mcp with a per-tool mcp_tool dimension via FALLOW_INTEGRATION_SURFACE / FALLOW_MCP_TOOL, so one correctly-labeled event is emitted with the same privacy posture.\n\nCloses #972.\nCloses #973.\nCloses #974.",
          "timestamp": "2026-06-05T00:28:03+02:00",
          "tree_id": "946f7c8e86e4aab83898fa8b6b5081035b573788",
          "url": "https://github.com/fallow-rs/fallow/commit/6898a24b96248c0eed09d9b8a88c57125d851b62"
        },
        "date": 1780612511499,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 261100200,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddde044d2c739ac260aa9c425d9c664c82c4e8c9",
          "message": "feat(health): import VCS churn via --churn-file for non-git hotspots (#996)\n\nAdd a global --churn-file flag accepting a fallow-churn/v1 JSON document so\nprojects on a non-git VCS (Yandex Arc, Mercurial, Perforce) get hotspots,\nownership, and bus-factor. fallow runs all existing recency-weighting, trend,\nand ownership logic on the imported events unchanged (imported and git churn\naggregate identically). The file is authoritative for the window, so --since\nonly labels output; a malformed file is a loud up-front error (exit 2). No JSON\noutput shape change. Exposed on the MCP check_health tool as churn_file.\n\nScope: powers the churn-backed health signals only; audit, impact, and\n--changed-since still require git.\n\nCloses #980.",
          "timestamp": "2026-06-05T08:45:42+02:00",
          "tree_id": "e217f7a01e254e27b2ccf93898aace1be59f38dc",
          "url": "https://github.com/fallow-rs/fallow/commit/ddde044d2c739ac260aa9c425d9c664c82c4e8c9"
        },
        "date": 1780642404574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 261332352,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1657f10c9911ea96460a08868fad8130ef585045",
          "message": "fix(playwright): credit pnpm exec web server CLIs\n\nPlaywright web server commands can be written as template literals when they interpolate values such as ports. Recover static command text from those templates for command parsing while keeping path-like config extraction unchanged.\n\nThe Playwright plugin now sends those recovered commands through the existing script parser, so package-manager exec forms like pnpm exec srvx credit the invoked CLI package. Dynamic commands that start with interpolation or split a static shell token stay skipped.\n\nFixes #956.",
          "timestamp": "2026-06-05T11:46:30+02:00",
          "tree_id": "34b25554942dfd9e0214b7be4f3b77dc987ed187",
          "url": "https://github.com/fallow-rs/fallow/commit/1657f10c9911ea96460a08868fad8130ef585045"
        },
        "date": 1780653420550,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 261624176,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3fa9bc58bde716adda65d24bd66cdfb4af886d23",
          "message": "fix(mcp): gate unix-only test helpers",
          "timestamp": "2026-06-05T12:24:48+02:00",
          "tree_id": "7992326077e722733c6ee2427c7a80ea32bc77f2",
          "url": "https://github.com/fallow-rs/fallow/commit/3fa9bc58bde716adda65d24bd66cdfb4af886d23"
        },
        "date": 1780655613274,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 261624176,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6efaabdbc2c0978588eb4645c3b6c473e65c26e",
          "message": "fix(unused-deps): credit pino transport targets\n\nFixes #954.",
          "timestamp": "2026-06-05T14:10:24+02:00",
          "tree_id": "012eae776a0410fed85611554992d3dacc8f3f5e",
          "url": "https://github.com/fallow-rs/fallow/commit/d6efaabdbc2c0978588eb4645c3b6c473e65c26e"
        },
        "date": 1780661844557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 261667752,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b473402c34747e00e9f897cb1ee43d8447ba1cba",
          "message": "fix(dead-code): credit package path resolution deps\n\nRecord statically recoverable package path resolution references during JS and TS extraction, then credit those package names in the dependency graph. The detection is limited to package roots and package manifest lookups so arbitrary dynamic strings and unrelated subpaths do not hide unused dependencies.\n\nAdd a regression fixture for build-script package roots and static font package tables, including the real issue shape where a package name flows into require.resolve of package.json. Bump the extract cache version because cached modules now carry the new reference list.\n\nFixes #952.",
          "timestamp": "2026-06-05T14:20:00+02:00",
          "tree_id": "fff8d11f2760fc028721ebf67bf6498ea79953d2",
          "url": "https://github.com/fallow-rs/fallow/commit/b473402c34747e00e9f897cb1ee43d8447ba1cba"
        },
        "date": 1780662487550,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 262495552,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5eb0929aa20010f2d5735a0fb518a9b9dfed8180",
          "message": "fix: credit this-returning fluent chains\n\nCloses #953\n\nAlso keeps the filesystem-canonicalization fallback test out of Miri isolation, matching the existing CI scope for filesystem-heavy graph tests.",
          "timestamp": "2026-06-05T14:42:55+02:00",
          "tree_id": "187df349dbc92721dc717bc522b0653eeb7f811b",
          "url": "https://github.com/fallow-rs/fallow/commit/5eb0929aa20010f2d5735a0fb518a9b9dfed8180"
        },
        "date": 1780663817602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 262498000,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcb36bf9508bc94681cbf95a29b313424a6f397f",
          "message": "fix(security): detect template html sinks\n\n* chore: open issue 883 implementation branch\n\n* fix(security): detect template html sinks",
          "timestamp": "2026-06-05T15:08:38+02:00",
          "tree_id": "337bb276097106d4d52713ce51e9acb1431a6e57",
          "url": "https://github.com/fallow-rs/fallow/commit/dcb36bf9508bc94681cbf95a29b313424a6f397f"
        },
        "date": 1780665333461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 262585752,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "95c6ff90a9054864e6ef76d3937cb6833d469eca",
          "message": "test: improve coverage for trace reporting",
          "timestamp": "2026-06-05T16:34:39+02:00",
          "tree_id": "20dfd3803b865bfa267c58c2c124e1d2ef5cc5c1",
          "url": "https://github.com/fallow-rs/fallow/commit/95c6ff90a9054864e6ef76d3937cb6833d469eca"
        },
        "date": 1780670537859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 262612632,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4770ce5dca328f47d52d6eb4f9d4a65fd38c0613",
          "message": "feat(vscode): editor-intelligence batch for the extension and LSP (#1009)\n\nLands the in-editor intelligence work as one change on top of origin/main.\n\n- Per-decision-point complexity breakdown (health --complexity-breakdown, VS Code inline markers + hover, MCP complexity_breakdown).\n- Per-file circular-dependency diagnostics (one squiggly per file anchored at the closing import, rotated message, cycleId in Diagnostic.data, additive edges[] JSON), plus find_import_span_start anchoring on the value import on mixed type/value edges.\n- unresolved-import diagnostics anchored under the require specifier (source_span).\n- VS Code sidebar UX overhaul + references code-lens fix.\n- VS Code license indicator only shown when license material is present.\n\nCACHE_VERSION bumped to 122 (one-time re-extract on upgrade).",
          "timestamp": "2026-06-05T17:28:22+02:00",
          "tree_id": "da15d07b9c403db06de40f2b833f134e7cbf0089",
          "url": "https://github.com/fallow-rs/fallow/commit/4770ce5dca328f47d52d6eb4f9d4a65fd38c0613"
        },
        "date": 1780673773617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 262971232,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "647fe2d90f7316b9a95ccd690481224e9a95333b",
          "message": "chore: release v2.89.0",
          "timestamp": "2026-06-05T18:13:59+02:00",
          "tree_id": "4ff254848515b9a263a51bfdaa0160e2ea19f29e",
          "url": "https://github.com/fallow-rs/fallow/commit/647fe2d90f7316b9a95ccd690481224e9a95333b"
        },
        "date": 1780677143460,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 262922504,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "65e53f7f3a21226a1a36f2289d3c2be080b5037f",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.89.0",
          "timestamp": "2026-06-05T19:03:16+02:00",
          "tree_id": "eead14fa45ebe37658e426c37439f9e3ce986ddd",
          "url": "https://github.com/fallow-rs/fallow/commit/65e53f7f3a21226a1a36f2289d3c2be080b5037f"
        },
        "date": 1780679407845,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 262922504,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e665f88427a70751a7c0b7cecc8f7379d00d3da4",
          "message": "fix(cli): name canonical `fallow dead-code` in user-facing messages (#1011)\n\nSeveral user-facing messages still told users to run the deprecated `fallow check` alias (which already prints a deprecation warning). The fix skip notes, migrate caveat, regression-baseline hint, and fix MCP tool descriptions now reference `fallow dead-code`. Internal doc comments updated to match; the `check` alias keeps working.",
          "timestamp": "2026-06-06T11:14:42+02:00",
          "tree_id": "2ee8660fea286ffed5a9676ede49c8dfb5aecd6e",
          "url": "https://github.com/fallow-rs/fallow/commit/e665f88427a70751a7c0b7cecc8f7379d00d3da4"
        },
        "date": 1780737718899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 262922504,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "8939da6204bfba025c5769c0bd7f9638a777d062",
          "message": "test: improve coverage for napi and audit",
          "timestamp": "2026-06-06T13:26:53+02:00",
          "tree_id": "612f46a82a7dcfcbcf09eac14ec40c038c840021",
          "url": "https://github.com/fallow-rs/fallow/commit/8939da6204bfba025c5769c0bd7f9638a777d062"
        },
        "date": 1780747758948,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 262922504,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "7969561+jsgoldman@users.noreply.github.com",
            "name": "jsgoldman",
            "username": "jsgoldman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45b3d87f7686009c8429b20a3d6270beb01845d4",
          "message": "fix(extract): ignore prose JSDoc import examples\n\nTighten JSDoc import-type extraction so prose examples do not create false unresolved-import findings. The extractor now only follows import(\"...\") references inside type-bearing JSDoc brace groups, while preserving real annotations including @type, @returns, @satisfies, @template, and @enum.\n\nThanks @jsgoldman for the original patch in #1010.",
          "timestamp": "2026-06-06T14:20:02+02:00",
          "tree_id": "6ea5757997558fa23ff4b04d63294b50a79f7e50",
          "url": "https://github.com/fallow-rs/fallow/commit/45b3d87f7686009c8429b20a3d6270beb01845d4"
        },
        "date": 1780748827276,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 262961328,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "2c48dd5128ed461cc0255dd030dc7101d55774d2",
          "message": "test: cover coverage analyze helpers",
          "timestamp": "2026-06-06T14:42:13+02:00",
          "tree_id": "25f3b461ebf421cb52c18da530d70f1bbaf3645a",
          "url": "https://github.com/fallow-rs/fallow/commit/2c48dd5128ed461cc0255dd030dc7101d55774d2"
        },
        "date": 1780750564932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 262997408,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e5418b2b636b62246f79cf7f6821bd3e8d47944",
          "message": "feat(security): capture literal-aware sink candidates\n\nCapture literal-aware security sink candidates for wildcard postMessage origins, permissive CORS, insecure cookie options, weak crypto algorithms, string-code execution, JWT alg none, Math.random token contexts, and cloud metadata URLs.\n\nPreserve the existing opt-in fallow security candidate contract: extraction records richer sink metadata, catalogue rows decide which candidates emit. Bump the extract cache version for the expanded SinkSite wire shape.\n\nFixes #875.",
          "timestamp": "2026-06-06T15:07:36+02:00",
          "tree_id": "76e04c24a1569b401e68a21dc7721c6e1a08a1c0",
          "url": "https://github.com/fallow-rs/fallow/commit/5e5418b2b636b62246f79cf7f6821bd3e8d47944"
        },
        "date": 1780751729821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 263627776,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bf6bab61519f100b226c285e778114d04312df4",
          "message": "feat(lsp): add opt-in inline complexity lenses\n\nAdd opt-in LSP code lenses for functions that exceed Fallow Health cyclomatic or cognitive thresholds.\n\nWire the VS Code setting fallow.health.inlineComplexity, defaulting to false, through LSP initialization. Keep existing export reference code lenses intact and document the setting in the VS Code extension README.\n\nFixes #992.",
          "timestamp": "2026-06-06T15:16:41+02:00",
          "tree_id": "40d764ed317efc1438afc71dd0cfa1cfc2231cbf",
          "url": "https://github.com/fallow-rs/fallow/commit/9bf6bab61519f100b226c285e778114d04312df4"
        },
        "date": 1780752289332,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 263627784,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "dfd782b22e296802e272206565174c4bb996f482",
          "message": "fix(security): unwrap typed literal sink arguments",
          "timestamp": "2026-06-06T19:00:16+02:00",
          "tree_id": "64f7123415bde25d71d046623a72a2b2d74fc552",
          "url": "https://github.com/fallow-rs/fallow/commit/dfd782b22e296802e272206565174c4bb996f482"
        },
        "date": 1780765704873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 263624736,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dd55c2a9948a8969a604d88b1864e1e4a94beda",
          "message": "feat(security): detect source-backed log exposure\n\nAdd a source-backed logging sink category for fallow security. The catalogue now flags common console, logger, and log calls only when their first argument traces to process.env or request input, so ordinary literal and source-free logging remains quiet.\n\nStore direct source paths on captured sink arguments so expressions such as process.env.SECRET can be matched without an intermediate local binding. Bump the extraction cache version and add focused extraction plus integration coverage.\n\nFixes #876.",
          "timestamp": "2026-06-06T19:25:24+02:00",
          "tree_id": "c99ebadad92fab011c844eabc8a8f5b62736d2e8",
          "url": "https://github.com/fallow-rs/fallow/commit/5dd55c2a9948a8969a604d88b1864e1e4a94beda"
        },
        "date": 1780767167217,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 263745608,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de853cace5d58bff04fc6eb43a544c45e3fa735e",
          "message": "fix(security): flag jwt verify without algorithms\n\nDetect jsonwebtoken verify calls that omit an explicit algorithms option while keeping safe allowlisted calls and unprovenanced lookalikes quiet.\n\nFixes #898.",
          "timestamp": "2026-06-06T19:34:54+02:00",
          "tree_id": "ba5dffa33fbcb4f7baab9387f4bb9461e1d66ebe",
          "url": "https://github.com/fallow-rs/fallow/commit/de853cace5d58bff04fc6eb43a544c45e3fa735e"
        },
        "date": 1780767820340,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 263881480,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3de5f84b8817c0284d6808a17c4483db3c96e1ca",
          "message": "fix(security): flag disabled TLS validation\n\nAdd a security catalogue candidate for disabled TLS certificate validation in Node HTTPS and TLS option objects. The detector captures rejectUnauthorized: false only on provenance-gated HTTPS/TLS call shapes, plus the exact NODE_TLS_REJECT_UNAUTHORIZED = \"0\" assignment.\n\nThis keeps same-named local helpers and safe rejectUnauthorized values quiet, while preserving the opt-in candidate framing for agent verification.\n\nFixes #895.",
          "timestamp": "2026-06-06T19:45:52+02:00",
          "tree_id": "5d36c12045a52275207ed6730647eee70a1ff587",
          "url": "https://github.com/fallow-rs/fallow/commit/3de5f84b8817c0284d6808a17c4483db3c96e1ca"
        },
        "date": 1780768389206,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 263890208,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd60baab71a41f62fa4c0d10a50dac5d09d4501f",
          "message": "fix(security): unwrap static option objects for jwt checks\n\nFix a review-found gap in the JWT missing-algorithms candidate. Object-key metadata now unwraps static TypeScript wrappers such as `as const`, matching the existing literal and object-property capture behavior.\n\nThe regression fixture covers missing options, missing algorithm keys, static-wrapped missing keys, and static-wrapped safe allowlists.\n\nFollow-up to #898.",
          "timestamp": "2026-06-06T20:02:59+02:00",
          "tree_id": "7304af88a0c0aa7a60520ee2acdb57a6ec04c5f4",
          "url": "https://github.com/fallow-rs/fallow/commit/fd60baab71a41f62fa4c0d10a50dac5d09d4501f"
        },
        "date": 1780769453952,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 263889888,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "09a2417e6705c7363f9aa36ff579b2b7eab35b29",
          "message": "refactor: split report builders",
          "timestamp": "2026-06-06T20:20:58+02:00",
          "tree_id": "615bb33e420aa18850ffa048d4b5043f1631886a",
          "url": "https://github.com/fallow-rs/fallow/commit/09a2417e6705c7363f9aa36ff579b2b7eab35b29"
        },
        "date": 1780770537263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 263895280,
            "unit": "bytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33935030597a35f5f33577d8988584b78c3aacaa",
          "message": "feat(security): add opt-in hardcoded secret candidates\n\nAdd an opt-in hardcoded-secret security category for first-party literal credentials.\n\nDetect known provider credential prefixes first, and only use entropy when the surrounding binding or property name is secret-shaped. Evidence stays redacted and the category remains explicitly scoped through security category configuration.\n\nFixes #892.",
          "timestamp": "2026-06-06T21:42:46+02:00",
          "tree_id": "1e600c86eb4e70f2bf63f4fab7a6f73288785559",
          "url": "https://github.com/fallow-rs/fallow/commit/33935030597a35f5f33577d8988584b78c3aacaa"
        },
        "date": 1780775652211,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 264673880,
            "unit": "bytes"
          }
        ]
      }
    ]
  }
}