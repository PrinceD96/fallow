window.BENCHMARK_DATA = {
  "lastUpdate": 1775584665120,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "bd1e9597c24d5083496cde7e016efa4246bcf52a",
          "message": "feat: add historical metric tracking and GitHub Pages dashboard\n\nAdd benchmark-action/github-action-benchmark tracking to allocs,\ncoverage, and conformance workflows alongside the existing bench\nworkflow. Each pushes to its own gh-pages directory (dev/allocs/,\ndev/coverage/, dev/conformance/) with auto-generated trend charts.\n\n- allocs.yml: track allocations over time (customSmallerIsBetter),\n  PR comments on allocation changes\n- coverage.yml: track coverage % over time (customBiggerIsBetter),\n  migrate badge push from fragile git stash to git worktree\n- conformance.yml: track agreement rate over time\n  (customBiggerIsBetter), upgrade permissions for gh-pages push\n- bench.yml: deploy dashboard index.html to gh-pages root\n- Add .github/pages/index.html dashboard linking to all 4 charts",
          "timestamp": "2026-03-23T10:55:20+01:00",
          "tree_id": "d760a210ccec7fe6e80dedc6efb46d2559f7201a",
          "url": "https://github.com/fallow-rs/fallow/commit/bd1e9597c24d5083496cde7e016efa4246bcf52a"
        },
        "date": 1774259804484,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 2995539,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11565,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 400810,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3667,
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
          "id": "dc388543a716872d2e4999785ecff85eea6e903e",
          "message": "feat: add type-only-dependencies rule and fix formatter gaps\n\nAdd `type-only-dependencies` to RulesConfig (default: warn) so it is\nconfigurable like all other rules. Previously hardcoded to warn in\nhuman/SARIF output.\n\nAlso adds missing type_only_dependencies support to compact and SARIF\nformatters, deduplicates dependency formatting in human.rs, and\nextracts shared format_dependency helper in markdown.rs.",
          "timestamp": "2026-03-23T11:12:58+01:00",
          "tree_id": "d4a14d535e02845b2d8440f3066f06497e0664e6",
          "url": "https://github.com/fallow-rs/fallow/commit/dc388543a716872d2e4999785ecff85eea6e903e"
        },
        "date": 1774260872154,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 2987907,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11553,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 403618,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3673,
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
          "id": "eb707bfebfe7aba7168b56eca51af00e4ee64ecb",
          "message": "fix: add missing type_only_dependencies field in snapshot test",
          "timestamp": "2026-03-23T11:15:50+01:00",
          "tree_id": "3a196e9777ef417ef043e1da34a35fde455dd63b",
          "url": "https://github.com/fallow-rs/fallow/commit/eb707bfebfe7aba7168b56eca51af00e4ee64ecb"
        },
        "date": 1774261031656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3002275,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11577,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 401746,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3669,
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
          "id": "9ee22e0ac9ee52892c55a4e6267c91a351533322",
          "message": "feat: add JSDoc @public tag support for library exports\n\nExports annotated with `/** @public */` or `/** @api public */` are\nnever reported as unused. Designed for library authors whose exports\nare consumed by external projects outside the analyzed repository.\n\nPipeline: ExportInfo.is_public extracted during parsing via\nComment.attached_to matching, cached through bincode (CACHE_VERSION\n12→13), propagated to ExportSymbol in the graph, and checked before\nreporting in find_unused_exports.\n\nWorks with all export types: named, default, class, interface, enum,\ntype alias, and multi-specifier exports. Only /** */ JSDoc block\ncomments are recognized.",
          "timestamp": "2026-03-23T13:24:21+01:00",
          "tree_id": "cbbdcd445be02a1f71452bc5c36acf170735a416",
          "url": "https://github.com/fallow-rs/fallow/commit/9ee22e0ac9ee52892c55a4e6267c91a351533322"
        },
        "date": 1774268745400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 2980419,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11537,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 396130,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3657,
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
          "id": "f51532c34fee568e60cd01e014c829366596e283",
          "message": "test: add integration test for package.json #subpath imports\n\nVerify that imports using # prefixes (e.g., `import { foo } from '#utils'`)\nresolve correctly via the package.json `imports` field. oxc_resolver already\nhandles this natively via its default `imports_fields` configuration.\n\nAdds test fixture with simple and wildcard patterns, and integration test\nasserting zero unresolved imports and correct unused-export detection.\n\nAlso verified against real-world Vite (74 # imports) and Svelte fixtures\nwith zero false positives.",
          "timestamp": "2026-03-23T14:41:15+01:00",
          "tree_id": "ac55c34a44be8860482520045cf6f8a08116dbeb",
          "url": "https://github.com/fallow-rs/fallow/commit/f51532c34fee568e60cd01e014c829366596e283"
        },
        "date": 1774273357965,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 2994907,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11567,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 408298,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3683,
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
          "id": "ef25d6dfb0a344ee4565ea6a5aedbaffbd82cadd",
          "message": "feat: track class member usage through instance variables\n\nDetect `const x = new ClassName()` patterns and map subsequent\n`x.method()` / `x.property` accesses to `ClassName.method` /\n`ClassName.property`, so the unused class member detector correctly\nrecognizes instance-level usage.\n\nOn TanStack Query this eliminates 89 false positives (134 → 45 unused\nclass members). Built-in constructors (URL, Map, Set, etc.) are\nfiltered out to avoid spurious mappings.",
          "timestamp": "2026-03-23T15:26:22+01:00",
          "tree_id": "d46975e75975b260e1118bec84460380b601a405",
          "url": "https://github.com/fallow-rs/fallow/commit/ef25d6dfb0a344ee4565ea6a5aedbaffbd82cadd"
        },
        "date": 1774276072603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 2983675,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11543,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 397066,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3659,
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
          "id": "c323a2e6d01c2aef0fb7aa9a69e27ceb1eae896b",
          "message": "chore: release v1.4.0",
          "timestamp": "2026-03-23T16:32:34+01:00",
          "tree_id": "12c0e584694d2450a2fc49a47ccf1987efbf4288",
          "url": "https://github.com/fallow-rs/fallow/commit/c323a2e6d01c2aef0fb7aa9a69e27ceb1eae896b"
        },
        "date": 1774280520684,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3002315,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11579,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 406426,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3679,
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
          "id": "d61097c7c1194ca2ef9a35f2480481a8da2bfd2a",
          "message": "docs: update demo GIF with Victor Mono rendering",
          "timestamp": "2026-03-23T20:00:19+01:00",
          "tree_id": "ed81d0796cde7e0bea5cbcd989239120452b39c4",
          "url": "https://github.com/fallow-rs/fallow/commit/d61097c7c1194ca2ef9a35f2480481a8da2bfd2a"
        },
        "date": 1774292501833,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 2983979,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11547,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 405490,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3677,
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
          "id": "cfc40e10e5c7565c9f289b246a6b1ad35915f9dd",
          "message": "fix: use relative paths in JSON output for readable CI summaries",
          "timestamp": "2026-03-23T20:16:02+01:00",
          "tree_id": "7d790ee98f30b035b64c44c56b4d87a15ce279f1",
          "url": "https://github.com/fallow-rs/fallow/commit/cfc40e10e5c7565c9f289b246a6b1ad35915f9dd"
        },
        "date": 1774293445156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 2996739,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11569,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 405490,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3677,
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
          "id": "4a63117b8c4c8c3996151ef3988992bf70bcdc78",
          "message": "fix: add line/column numbers to duplicate export locations\n\nDuplicateExport.locations changes from Vec<PathBuf> to\nVec<DuplicateLocation> with path, line, and col fields. This fixes\nSARIF and LSP annotations that previously showed :1 for every\nduplicate export because no line information was available.\n\nThe export line/col data was already available in the detection code\nvia ExportSymbol.span but was dropped when only the path was stored.\n\nJSON output schema_version bumped from 1 to 2 (breaking: locations\nchanged from string array to object array).",
          "timestamp": "2026-03-23T21:59:59+01:00",
          "tree_id": "81d41047a78fd95272c116db942408162586aa23",
          "url": "https://github.com/fallow-rs/fallow/commit/4a63117b8c4c8c3996151ef3988992bf70bcdc78"
        },
        "date": 1774299686560,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3002731,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11571,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 412042,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3691,
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
          "id": "459128955d419e835fa2ebba606c758f3335b4bd",
          "message": "chore: release v1.5.0",
          "timestamp": "2026-03-24T00:42:37+01:00",
          "tree_id": "9ebc48e41e3ff5edbea0edb6f48ff4a40233c805",
          "url": "https://github.com/fallow-rs/fallow/commit/459128955d419e835fa2ebba606c758f3335b4bd"
        },
        "date": 1774309447011,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3050719,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12174,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 429258,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3985,
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
          "id": "c15ef2db6b7f25836bc1804b8f0943291d2f801c",
          "message": "feat: add precise line/column locations to all SARIF results\n\nSARIF results for unlisted deps, unused deps, type-only deps, and\ncircular deps previously had no region, causing GitHub Code Scanning\nto default to line 1. Now all issue types emit precise locations:\n\n- Unlisted dependencies: point to the actual import statement in the\n  source file (with line/col from resolved module spans)\n- Unused dependencies: point to the dependency entry line in package.json\n  (via text scan of raw JSON, with JSONC comment skipping)\n- Type-only dependencies: same package.json line scan approach\n- Circular dependencies: point to the import statement that starts the\n  cycle (via graph edge span lookup)\n\nAlso fixes pre-existing output-schema.json bugs (missing\nunused_optional_dependencies, wrong DuplicateExport.locations type)\nand bumps JSON schema_version to 3.",
          "timestamp": "2026-03-24T09:11:17+01:00",
          "tree_id": "7bec724bf30cda7622f46b1179f4d719e5835115",
          "url": "https://github.com/fallow-rs/fallow/commit/c15ef2db6b7f25836bc1804b8f0943291d2f801c"
        },
        "date": 1774339961742,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3053694,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12177,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420834,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3967,
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
          "id": "d64a62b31c6d71e32f97372beee47d5cd259bf43",
          "message": "chore: release v1.6.0",
          "timestamp": "2026-03-24T09:33:24+01:00",
          "tree_id": "863dd4d48f4a05aea1dcd165780b1955cbb8d296",
          "url": "https://github.com/fallow-rs/fallow/commit/d64a62b31c6d71e32f97372beee47d5cd259bf43"
        },
        "date": 1774341313820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3032046,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12141,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 419434,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "30c09c79bb4ab0a643344f586b72809211df5107",
          "message": "feat: add markdown and SARIF output formats for health command\n\n- Add --format markdown support for fallow health: renders a table\n  with file, function, cyclomatic, cognitive, and line count columns.\n  Functions exceeding thresholds get a **!** marker. Pipes cleanly\n  to gh pr comment.\n\n- Add --format sarif support for fallow health: emits SARIF 2.1.0\n  with three rule IDs (fallow/high-cyclomatic-complexity,\n  fallow/high-cognitive-complexity, fallow/high-complexity) so\n  GitHub Code Scanning shows inline annotations on PR diffs.\n\n- Update action.yml to support command: health with inputs for\n  max-cyclomatic, max-cognitive, top, sort. Includes job summary,\n  PR comment, SARIF upload, and input validation. The --top flag\n  is intentionally omitted from the SARIF fallback run to ensure\n  Code Scanning sees all findings.\n\n- Refresh public ROADMAP.md with user-facing narrative.",
          "timestamp": "2026-03-24T10:00:36+01:00",
          "tree_id": "a17bcec9ad105d466f4a9a512be7f0296469cf51",
          "url": "https://github.com/fallow-rs/fallow/commit/30c09c79bb4ab0a643344f586b72809211df5107"
        },
        "date": 1774342917791,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3038598,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12155,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 424578,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3975,
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
          "id": "8a7e806633aa3f00fcb6b8398d92cb3b13a846cd",
          "message": "feat: wire --workspace and --baseline/--save-baseline for health command\n\nThese flags were accepted by the CLI parser but silently ignored.\nNow they work:\n\n- --workspace scopes findings to a single workspace package\n  (path-based filtering, same as check command)\n- --save-baseline saves findings as path:name:line keys to JSON\n- --baseline filters out known findings from a previous baseline\n  (save happens before --top truncation, filter before --top)\n\nAlso re-exports resolve_workspace_filter from check module for\nreuse by health.",
          "timestamp": "2026-03-24T10:15:16+01:00",
          "tree_id": "164c27ce47d4f9ddf0c9ee6ef973df54bc09ceb7",
          "url": "https://github.com/fallow-rs/fallow/commit/8a7e806633aa3f00fcb6b8398d92cb3b13a846cd"
        },
        "date": 1774343810163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3051478,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12175,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 423642,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3973,
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
          "id": "f2bc1c02ea1a9dc0468addd7df06da9ab4faa30f",
          "message": "fix: hard error on health baseline I/O failures, capture threshold count before baseline filter\n\n- Baseline read/write/parse failures now return exit code 2 (matching\n  dupes behavior) instead of printing a warning and continuing silently.\n- functions_above_threshold is now captured before baseline filtering,\n  so the summary always reflects the true count of threshold violations\n  regardless of whether --baseline is active.",
          "timestamp": "2026-03-24T10:18:09+01:00",
          "tree_id": "000eb1d146e844b5c6a6fd1764d1f49f683b9277",
          "url": "https://github.com/fallow-rs/fallow/commit/f2bc1c02ea1a9dc0468addd7df06da9ab4faa30f"
        },
        "date": 1774343973949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3048326,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12171,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 425514,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3977,
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
          "id": "5b1a6b4a03ab7b65097c6769a34b53595cd6ee5c",
          "message": "fix: deterministic re-export chain propagation and bare specifier resolution\n\nTwo correctness fixes in the module graph:\n\n1. Entry point barrels (e.g., src/index.js re-exporting from ./render)\n   now propagate \"used\" status to source exports even with zero in-graph\n   consumers. Named and star re-exports are both handled. Star re-exports\n   correctly exclude default exports per ES spec.\n\n2. Remove the DashMap-backed BareSpecifierCache that caused non-deterministic\n   results in multi-threaded mode. With TsconfigDiscovery::Auto, the same\n   bare specifier can resolve to InternalModule (via tsconfig paths) or\n   NpmPackage (via node_modules) depending on the importing file's context.\n   The cache poisoned cross-context results. Replaced with a deterministic\n   post-resolution pass that upgrades NpmPackage to InternalModule when any\n   file resolved the specifier to a source file. A fast path skips\n   canonicalize() for non-workspace non-pnpm bare specifiers to recover\n   most of the lost cache performance.",
          "timestamp": "2026-03-24T13:17:40+01:00",
          "tree_id": "4c37559e9f28e5bf3709ee4a1c7d191686652682",
          "url": "https://github.com/fallow-rs/fallow/commit/5b1a6b4a03ab7b65097c6769a34b53595cd6ee5c"
        },
        "date": 1774354750489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3037169,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12152,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 423466,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3976,
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
          "id": "4e0b6b886431611ee78dc0dd8ac1042d8946bab6",
          "message": "chore: release v1.6.1",
          "timestamp": "2026-03-24T13:19:35+01:00",
          "tree_id": "9c3adafd5dab74d3e2262cd25c07a9f45c40d21f",
          "url": "https://github.com/fallow-rs/fallow/commit/4e0b6b886431611ee78dc0dd8ac1042d8946bab6"
        },
        "date": 1774354880633,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3055049,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12182,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 426274,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3982,
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
          "id": "fa929d6334e8c2286869ac75785133bcefc5f500",
          "message": "fix: typo checker false positive and Windows path separator in list tests\n\n- Rename `fo` variable to `fan_out` in markdown health report to avoid\n  typos CI flagging it as a misspelling\n- Use platform-aware path assertions in list_tests.rs: accept both\n  forward and backslash separators, and Windows UNC/drive-letter paths",
          "timestamp": "2026-03-24T13:39:11+01:00",
          "tree_id": "55b16625b9a7a591d2fccabd4a89d5fcdf3f3649",
          "url": "https://github.com/fallow-rs/fallow/commit/fa929d6334e8c2286869ac75785133bcefc5f500"
        },
        "date": 1774356037537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3051897,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12178,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 428146,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3986,
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
          "id": "eea2ee65096c378e3ce1cede9dbc260c8a9b5f1b",
          "message": "fix: skip /bin/sh-dependent MCP tests on Windows\n\nGate MCP server tests that shell out to `/bin/sh` with `#[cfg(unix)]`\nsince `/bin/sh` does not exist on Windows.",
          "timestamp": "2026-03-24T13:53:58+01:00",
          "tree_id": "1afd5f598e5e0f57af12661989b944ee89f64c42",
          "url": "https://github.com/fallow-rs/fallow/commit/eea2ee65096c378e3ce1cede9dbc260c8a9b5f1b"
        },
        "date": 1774356923291,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3038105,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12154,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 424402,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3978,
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
          "id": "60af661085bbc0e3207180679b882773fa00d197",
          "message": "chore: release v1.7.0",
          "timestamp": "2026-03-24T15:23:48+01:00",
          "tree_id": "086b0c428fa093968631ea159046eae448eb662e",
          "url": "https://github.com/fallow-rs/fallow/commit/60af661085bbc0e3207180679b882773fa00d197"
        },
        "date": 1774362454620,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3036897,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12148,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 419434,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "df293aa9727a78d323217d03b320932f950828e5",
          "message": "refactor: replace eprintln! with tracing::warn! in config crate\n\nLibrary crates should not print directly to stderr. Replace all\neprintln! calls in fallow-config with tracing::warn! so warnings\nflow through the structured logging pipeline. Removes all\n#[expect(clippy::print_stderr)] annotations from the config crate.",
          "timestamp": "2026-03-24T15:55:09+01:00",
          "tree_id": "f7c77d0e446e76fbdd0faae764b01648a6a3aeb8",
          "url": "https://github.com/fallow-rs/fallow/commit/df293aa9727a78d323217d03b320932f950828e5"
        },
        "date": 1774364214459,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3035297,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12148,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 421594,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3972,
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
          "id": "4b2f9a09e497a7aac6222cd0a25b3c327738ef5f",
          "message": "docs: update descriptions to include complexity hotspots, normalize TypeScript/JavaScript ordering\n\nFallow is no longer just an unused code and duplication tool. Updates\nall public-facing descriptions (README, npm, MCP, AGENTS, positioning)\nto reflect health/complexity/hotspot capabilities. Standardizes on\n\"TypeScript/JavaScript\" ordering everywhere.",
          "timestamp": "2026-03-24T16:28:58+01:00",
          "tree_id": "dc74524d53d8bf8434b7148988c3c9a58a344e19",
          "url": "https://github.com/fallow-rs/fallow/commit/4b2f9a09e497a7aac6222cd0a25b3c327738ef5f"
        },
        "date": 1774366276676,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3031553,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12140,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 419434,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "0f69c6c15c5de568fccf928d7bfa4b7482b66d0c",
          "message": "feat: add --explain flag for metric explainability in all output formats\n\nAdd centralized metric/rule definitions (explain.rs) and wire them through\nall output formats so both humans and AI agents can understand what CLI\noutput means:\n\n- JSON: --explain adds _meta object with metric definitions, ranges,\n  interpretations, and docs URLs (check/health/dupes)\n- SARIF: fullDescription and helpUri on all 17 rules (always included)\n- Markdown: collapsible metric legend after health tables\n- Human: docs footer link after health findings\n- MCP: always passes --explain so agents always get _meta\n\nAlso completes the DupesOutput stub in docs/output-schema.json and adds\nthe Meta type definition.",
          "timestamp": "2026-03-24T20:02:19+01:00",
          "tree_id": "2e0c6e9b9bbcfebae78f7b82825c60450b6fedd1",
          "url": "https://github.com/fallow-rs/fallow/commit/0f69c6c15c5de568fccf928d7bfa4b7482b66d0c"
        },
        "date": 1774382118377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3032489,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12142,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 419434,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "347f885469a2dd45befff4f0dd9ccc2bb0ef52ba",
          "message": "feat: per-section explain footers, mirrored dir detection, consistency polish\n\n- Add per-section footer with description + docs link to all human output\n  sections (check, health, dupes) — always shown, no --explain needed\n- Add mirrored directory detection in dupes output (e.g., src/ ↔ deno/lib/)\n- Group circular deps by hub file with path elision\n- Add elide_common_prefix utility for shorter paths in chains\n- Truncate health file scores (max 10), dupes mirrored/families sections\n- Compact health footer to 1 line, add ✗ prefix to dupes footer\n- Shorten summary footer labels (files, exports, types vs unused files, etc.)\n- Update all docs URLs to /explanations/{dead-code,health,duplication}\n- Add 21 new tests for utilities, truncation, mirroring, footers\n- Remove unused _explain params from dupes/health human functions",
          "timestamp": "2026-03-24T23:21:26+01:00",
          "tree_id": "5716f1bf5ca92a849467b703097cdf82e20ffc15",
          "url": "https://github.com/fallow-rs/fallow/commit/347f885469a2dd45befff4f0dd9ccc2bb0ef52ba"
        },
        "date": 1774390991875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3035297,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12148,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 421594,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3972,
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
          "id": "da022b097ad3208e0364e1f3e76a80ad15adb2a0",
          "message": "chore: release v1.8.0",
          "timestamp": "2026-03-24T23:24:41+01:00",
          "tree_id": "f5de5912764469863e2e543043d1d1def12feff6",
          "url": "https://github.com/fallow-rs/fallow/commit/da022b097ad3208e0364e1f3e76a80ad15adb2a0"
        },
        "date": 1774391185564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3041553,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12160,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 425338,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3980,
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
          "id": "49cad71ec5ee2978e6a70789649d73098032668e",
          "message": "Merge branch 'worktree-agent-a8f8b47c'",
          "timestamp": "2026-03-24T23:32:43+01:00",
          "tree_id": "21c55b2f8b467219a5008141256af3017db92fb3",
          "url": "https://github.com/fallow-rs/fallow/commit/49cad71ec5ee2978e6a70789649d73098032668e"
        },
        "date": 1774391772633,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3033409,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12042,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 419434,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "9cfedd96d8195004b83382bd3cf7f33d664c7c8b",
          "message": "refactor: split human.rs into health, dupes, traces, and perf modules",
          "timestamp": "2026-03-24T23:51:15+01:00",
          "tree_id": "dfc69fd5587361bd7d508b7760ea55b26cb2f17c",
          "url": "https://github.com/fallow-rs/fallow/commit/9cfedd96d8195004b83382bd3cf7f33d664c7c8b"
        },
        "date": 1774392862384,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3027129,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12032,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 419434,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "5d4e06f89e7bb8da14741c36b1f5490ceb5b30ba",
          "message": "chore: apply cargo fmt to test code from refactoring agents",
          "timestamp": "2026-03-24T23:58:24+01:00",
          "tree_id": "22eb7bda7c26dbb7a4490be0e478e6454a3e7ff9",
          "url": "https://github.com/fallow-rs/fallow/commit/5d4e06f89e7bb8da14741c36b1f5490ceb5b30ba"
        },
        "date": 1774393182448,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3037745,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12054,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 423466,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3976,
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
          "id": "851e9a2ec31f34155064750d2be1fd1c94a21fd3",
          "message": "chore: release v1.8.1",
          "timestamp": "2026-03-25T09:48:26+01:00",
          "tree_id": "59f42d726540a477846f896d0b20ea5b29b618b2",
          "url": "https://github.com/fallow-rs/fallow/commit/851e9a2ec31f34155064750d2be1fd1c94a21fd3"
        },
        "date": 1774428616131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3043201,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12062,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 427186,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3982,
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
          "id": "c479b3f59c31c6ac203f19e8ac04c956fb27188c",
          "message": "fix: qualify Span in benchmark to resolve ambiguous import",
          "timestamp": "2026-03-25T09:51:51+01:00",
          "tree_id": "2bf39f35c8b234f291084a777104795c11dd36df",
          "url": "https://github.com/fallow-rs/fallow/commit/c479b3f59c31c6ac203f19e8ac04c956fb27188c"
        },
        "date": 1774428805853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3035073,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12046,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 421570,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3970,
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
          "id": "65f8edaf07e434ac76a23ad85515e2f2db901dea",
          "message": "test: add ~100 unit tests across 6 crates to close coverage gaps\n\nAdd test coverage for previously untested functions and edge cases:\n\n- types/extract: compute_line_offsets, byte_offset_to_line_col, ExportName\n- types/serde_path: backslash→forward slash normalization\n- types/suppress: code-duplication parse token, near-misses, discriminant edges\n- types/results: fix total_issues test to cover all 13 issue categories\n- config/duplicates_config: ResolvedNormalization 4 modes + overrides, DetectionMode\n- config/health: HealthConfig defaults and JSON deserialization\n- config/rules: Severity Display, apply_partial completeness\n- graph/resolve/fallbacks: make_glob_from_pattern\n- extract/complexity: do-while, for-of, for-in, optional chaining cyclomatic\n- extract/tests/js_ts: JSX retry fallback for .js files with JSX\n- core/churn: parse_git_log, compute_trend boundary cases\n- cli/watch: is_relevant_source, is_relevant_config, collect_changed_paths\n- cli/explain: rule_by_id, rule_docs_url, meta builders, rule completeness\n- cli/check/rules: override-aware apply_rules and has_error_severity_issues\n- cli/baseline: circular_dep_key sort-stability",
          "timestamp": "2026-03-25T11:04:08+01:00",
          "tree_id": "6557d7ca20a396ea9ee3315cdd4602c9cf925b2a",
          "url": "https://github.com/fallow-rs/fallow/commit/65f8edaf07e434ac76a23ad85515e2f2db901dea"
        },
        "date": 1774433245112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3028521,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12032,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "46742ccb2fcbbf94530539da650b33b871a43acb",
          "message": "chore: release v1.9.0",
          "timestamp": "2026-03-25T16:07:04+01:00",
          "tree_id": "717075cb447508d1ebda424b1968a2f935e97cbb",
          "url": "https://github.com/fallow-rs/fallow/commit/46742ccb2fcbbf94530539da650b33b871a43acb"
        },
        "date": 1774451326136,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3039753,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12056,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 426250,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3980,
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
          "id": "36b6d5197bc085ff4c055b75bd15a21f5e4e7620",
          "message": "refactor: rename check to dead-code across MCP, benchmarks, and docs\n\nUpdate all remaining references to `fallow check` to use `fallow dead-code`\n(or bare `fallow`) after the CLI restructure. Covers MCP server tools and\ntests, benchmark scripts, screenshot generator, CLAUDE.md build command,\nand explain.rs docs URL.",
          "timestamp": "2026-03-25T18:50:14+01:00",
          "tree_id": "718e12e0ad76bd980055c744dda6cf6d74b1d859",
          "url": "https://github.com/fallow-rs/fallow/commit/36b6d5197bc085ff4c055b75bd15a21f5e4e7620"
        },
        "date": 1774461128786,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3052953,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12076,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 424378,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3976,
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
          "id": "1dc7818b00ce8eae81af8649f11f1e48628dc079",
          "message": "chore: release v2.0.0",
          "timestamp": "2026-03-25T18:54:56+01:00",
          "tree_id": "0a211b776e610b05f9cd42299921440fc685bfe2",
          "url": "https://github.com/fallow-rs/fallow/commit/1dc7818b00ce8eae81af8649f11f1e48628dc079"
        },
        "date": 1774461399921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3044849,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12058,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "b5355ff0299f405dfc0b12da19fc641528562b95",
          "message": "docs: escape angle brackets in doc comments for rustdoc compatibility",
          "timestamp": "2026-03-25T19:50:41+01:00",
          "tree_id": "8c4b2d0f8360f5d56f7a7408058337c3ac75b855",
          "url": "https://github.com/fallow-rs/fallow/commit/b5355ff0299f405dfc0b12da19fc641528562b95"
        },
        "date": 1774464737742,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3043593,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12056,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "48650d8d08b8185490c17e10497098a52cc3e971",
          "message": "chore: release v2.0.1",
          "timestamp": "2026-03-25T22:23:18+01:00",
          "tree_id": "c12c630748e302aa7e030961d4b7643729bb538e",
          "url": "https://github.com/fallow-rs/fallow/commit/48650d8d08b8185490c17e10497098a52cc3e971"
        },
        "date": 1774473909065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3042289,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12058,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 422506,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3972,
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
          "id": "09d744cc09e7a81f292deba39d0cecbc67f5d2d2",
          "message": "chore: release v2.1.0",
          "timestamp": "2026-03-26T09:28:15+01:00",
          "tree_id": "74a9125eaf2ff8ce8354fe35b60fd4a4b6540c4d",
          "url": "https://github.com/fallow-rs/fallow/commit/09d744cc09e7a81f292deba39d0cecbc67f5d2d2"
        },
        "date": 1774513940561,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3043273,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12056,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "06ae1122bd093070ac5b2a4264b7d96a3fa99937",
          "message": "fix: SARIF version redaction, action bare invocation, Miri resolve tests\n\n- SARIF snapshot tests: redact_sarif_version now targets the tool driver\n  version contextually (matching \"name\": \"fallow\" prefix) instead of\n  blanket-replacing \"2.1.0\" which collided with the SARIF spec version.\n- GitHub Action: bare invocation (no command) no longer passes empty\n  string as first arg, which clap rejected as unrecognized subcommand.\n- Miri: gate with_empty_ctx with #[cfg(not(miri))] since oxc_resolver\n  uses statx syscall unsupported by Miri. Pure logic resolve tests in\n  fallbacks, react_native, path_info still run under Miri.",
          "timestamp": "2026-03-26T09:53:33+01:00",
          "tree_id": "35f0262fa8f192c171a31358be896668a38efd52",
          "url": "https://github.com/fallow-rs/fallow/commit/06ae1122bd093070ac5b2a4264b7d96a3fa99937"
        },
        "date": 1774515297373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3038497,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12054,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 426250,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3980,
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
          "id": "62ce7db6b7e9444e772342cae52c3a31aab56a64",
          "message": "fix: correct dead-code command description and MCP analyze tool description\n\ndead-code subcommand help text incorrectly claimed it finds \"code\nduplication\" — it only finds unused code and circular dependencies.\nMCP analyze tool description similarly claimed it finds \"code duplication,\ncomplexity hotspots\" — those are find_dupes and check_health respectively.",
          "timestamp": "2026-03-26T11:33:36+01:00",
          "tree_id": "74076a47437f367d1b4cb19201550285befb9e2b",
          "url": "https://github.com/fallow-rs/fallow/commit/62ce7db6b7e9444e772342cae52c3a31aab56a64"
        },
        "date": 1774521354183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3034801,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12042,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "fe288bfa67f5cbb67871928f3b21610aa7fc5462",
          "message": "chore(deps): bump proptest from 1.10.0 to 1.11.0 (#26)\n\nBumps [proptest](https://github.com/proptest-rs/proptest) from 1.10.0 to 1.11.0.\n- [Release notes](https://github.com/proptest-rs/proptest/releases)\n- [Changelog](https://github.com/proptest-rs/proptest/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/proptest-rs/proptest/compare/v1.10.0...v1.11.0)\n\n---\nupdated-dependencies:\n- dependency-name: proptest\n  dependency-version: 1.11.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-26T12:00:23+01:00",
          "tree_id": "85b110308c2d91e803f2eb1e1a242fec3a4755d2",
          "url": "https://github.com/fallow-rs/fallow/commit/fe288bfa67f5cbb67871928f3b21610aa7fc5462"
        },
        "date": 1774522913064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3039481,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12052,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "75229388f47b6d288e5fab2d733c63039964aef7",
          "message": "chore(deps): bump toml from 1.0.7+spec-1.1.0 to 1.1.0+spec-1.1.0 (#25)\n\nBumps [toml](https://github.com/toml-rs/toml) from 1.0.7+spec-1.1.0 to 1.1.0+spec-1.1.0.\n- [Commits](https://github.com/toml-rs/toml/compare/toml-v1.0.7...toml-v1.1.0)\n\n---\nupdated-dependencies:\n- dependency-name: toml\n  dependency-version: 1.1.0+spec-1.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-26T12:54:48+01:00",
          "tree_id": "20f4c42161172c71f4780fad1b141814bbaf4347",
          "url": "https://github.com/fallow-rs/fallow/commit/75229388f47b6d288e5fab2d733c63039964aef7"
        },
        "date": 1774526164407,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3040737,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12054,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "00e1a5d688340bf3f5af293cc3af354fab03482e",
          "message": "feat: add efficiency score, confidence levels, and adaptive thresholds to refactoring targets\n\nTargets are now sorted by efficiency (priority/effort) to surface quick wins\nfirst. Each target includes a confidence level (high/medium/low) based on data\nsource reliability, and fan-in/fan-out thresholds adapt to the project's\ndistribution using percentiles instead of hardcoded constants.\n\nOutput improvements from expert panel review:\n- Human: efficiency as hero number, labeled effort:/confidence:, effort summary\n- Compact: underscore category labels (circular_dep, dead_code) for parsing\n- Markdown: reduced from 7 to 5 columns\n- SARIF: priority, efficiency, confidence in message\n- JSON: target_thresholds object with adaptive percentile values\n- Cycle path evidence deduplicated",
          "timestamp": "2026-03-26T16:07:01+01:00",
          "tree_id": "bff7f2618da14866803f188a8941bbc937ab9a9b",
          "url": "https://github.com/fallow-rs/fallow/commit/00e1a5d688340bf3f5af293cc3af354fab03482e"
        },
        "date": 1774537764597,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3035737,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12044,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "8428221faca4cbd5f6447b6c5deb296f1b96a47d",
          "message": "feat: add efficiency score, confidence levels, and adaptive thresholds to refactoring targets\n\nTargets are now sorted by efficiency (priority/effort) to surface quick wins\nfirst. Each target includes a confidence level (high/medium/low) based on data\nsource reliability, and fan-in/fan-out thresholds adapt to the project's\ndistribution using percentiles instead of hardcoded constants.\n\nOutput improvements from expert panel review:\n- Human: efficiency as hero number, labeled effort:/confidence:, effort summary\n- Compact: underscore category labels (circular_dep, dead_code) for parsing\n- Markdown: reduced from 7 to 5 columns\n- SARIF: priority, efficiency, confidence in message\n- JSON: target_thresholds object with adaptive percentile values\n- Cycle path evidence deduplicated",
          "timestamp": "2026-03-26T16:07:01+01:00",
          "tree_id": "01dbc5c80d8c4b577077b25a579f0a3ed3446f96",
          "url": "https://github.com/fallow-rs/fallow/commit/8428221faca4cbd5f6447b6c5deb296f1b96a47d"
        },
        "date": 1774538571929,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3029457,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12034,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "65a26631b2fa3979f1f05857fa3044d361b1afa2",
          "message": "chore: release v2.2.0",
          "timestamp": "2026-03-26T16:26:30+01:00",
          "tree_id": "4075bac2045b7933724cb44671815061d88947ee",
          "url": "https://github.com/fallow-rs/fallow/commit/65a26631b2fa3979f1f05857fa3044d361b1afa2"
        },
        "date": 1774538890790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3036969,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 12048,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "6bd74234fd32f865b4b772c584c3699590ceac21",
          "message": "perf: lazy canonicalize with OnceLock fallback + code quality fixes\n\nSkip bulk canonicalize() of all source files when project root is\nalready canonical (common case). A lazy OnceLock-based fallback\nhandles the rare intra-project symlink edge case on first miss.\n\nAlso:\n- Eliminate raw_file_paths Vec<PathBuf> allocation (21k heap allocs)\n- O(n²) active_plugins dedup → FxHashSet O(n)\n- Upgrade CanonicalFallback log to warn for observability\n- Guard bench.mjs against null status (timeout/signal kills)\n- Add CanonicalFallback unit tests (miri-gated)\n- Fix stale comment referencing old field name\n- Fix missing canonical_fallback in test ctx constructor\n\nBenchmarks (cold, no-cache, median of 3):\n- next.js: 1532ms → 1207ms (-21%)\n- vite:    507ms → 408ms  (-20%)\n- query:   191ms → 160ms  (-16%)\n\nAll 8 benchmark projects produce identical issue counts.",
          "timestamp": "2026-03-26T20:50:22+01:00",
          "tree_id": "1ac04c5104d269d27fa1928eb4b05c6232079b41",
          "url": "https://github.com/fallow-rs/fallow/commit/6bd74234fd32f865b4b772c584c3699590ceac21"
        },
        "date": 1774554706275,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3040042,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11967,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "246502e30e80a5606cfbd6341bf925ff78136a29",
          "message": "chore: release v2.2.1",
          "timestamp": "2026-03-26T21:04:40+01:00",
          "tree_id": "51da0e7c03aa11dc67c945ddf21f625867943025",
          "url": "https://github.com/fallow-rs/fallow/commit/246502e30e80a5606cfbd6341bf925ff78136a29"
        },
        "date": 1774555567009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3040410,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11963,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "82208086b343566f4c91241229be5030b0757f31",
          "message": "test: add ~283 tests across extract, graph, core, and config crates\n\nCover complexity metrics, JSDoc @public tags, config extends/merge,\nre-export chain propagation, dynamic import patterns, declaration\nextraction, visitor helpers, analysis predicates, cycle detection,\nand file discovery with infrastructure entry points.\n\nAlso fix test_dir to use tempfile::tempdir() for panic-safe cleanup\nand replace tautological production pattern checks with GlobSet\nmatching assertions.",
          "timestamp": "2026-03-27T08:08:06+01:00",
          "tree_id": "d1ea455c08a614f5cf1ade6cc5632fde3346b832",
          "url": "https://github.com/fallow-rs/fallow/commit/82208086b343566f4c91241229be5030b0757f31"
        },
        "date": 1774595460083,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3024722,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11937,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "280fa8f27836a15549c515ddfb44285475067879",
          "message": "chore: release v2.2.2",
          "timestamp": "2026-03-27T08:14:09+01:00",
          "tree_id": "561149cf0c664947ec592587ac7b5fbcb35c34a4",
          "url": "https://github.com/fallow-rs/fallow/commit/280fa8f27836a15549c515ddfb44285475067879"
        },
        "date": 1774595757714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3041346,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11965,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "87a04f23f8d13d1209efe56f45af20c96296e1c2",
          "message": "fix: normalize path separators in discovery tests for Windows",
          "timestamp": "2026-03-27T08:22:42+01:00",
          "tree_id": "e8bc879c46922544d685e5103f01832cdd30f8e2",
          "url": "https://github.com/fallow-rs/fallow/commit/87a04f23f8d13d1209efe56f45af20c96296e1c2"
        },
        "date": 1774596270608,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3033490,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11953,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "46f631633f91e246dabdb1956c009221c39bae94",
          "message": "fix: run cargo fmt on entry_points test path normalization",
          "timestamp": "2026-03-27T08:41:36+01:00",
          "tree_id": "5a0ba06b24e125b28524417591bc2b6648f9e93c",
          "url": "https://github.com/fallow-rs/fallow/commit/46f631633f91e246dabdb1956c009221c39bae94"
        },
        "date": 1774597385351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3024722,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11937,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "22ee80595999ee8784e93520d18f1c761accf564",
          "message": "Improve code quality and harden watch reloads",
          "timestamp": "2026-03-27T09:33:16+01:00",
          "tree_id": "488046ee4e9dfd8066d522d088c12d74f7ceb002",
          "url": "https://github.com/fallow-rs/fallow/commit/22ee80595999ee8784e93520d18f1c761accf564"
        },
        "date": 1774600489784,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3033762,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11957,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420346,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "3cd88222fa193fd203a41196a527734f0ef5773e",
          "message": "feat: expand VS Code extension UX and pnpm tooling",
          "timestamp": "2026-03-27T10:29:12+01:00",
          "tree_id": "55d28599bacf2e47b511563a66d807564e0e9802",
          "url": "https://github.com/fallow-rs/fallow/commit/3cd88222fa193fd203a41196a527734f0ef5773e"
        },
        "date": 1774603896449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3043786,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11975,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 423974,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3888,
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
          "id": "d99ca6bef225c0aebdfbbba24fffc4c92476b0fd",
          "message": "refactor: comprehensive code quality improvements across all crates\n\nPerformance:\n- Eliminate health double pipeline by reusing parsed modules via\n  new analyze_with_parse_result() API in fallow-core\n- Convert unused_import_bindings from Vec to FxHashSet for O(1) lookups\n- Optimize mark_member_exports_referenced to avoid per-export\n  to_string() allocation and linear scan\n- Convert GENERAL_TOOLING_EXACT to OnceLock<FxHashSet> for O(1) lookups\n- Cache line offsets in collect_export_usages (was recomputed per ref)\n\nCode deduplication:\n- Add emit_json(), plural(), build_json_envelope() report helpers\n- Consolidate 6 copies of sample_results into shared test helper\n- Extract read_source/write_fixed_content in fix module\n- Deduplicate TSTypeAlias/TSInterface export push via push_type_export()\n- Consolidate parse test helper into shared parse_ts()\n- Deduplicate config parser traversal with shared closure helper\n- Extend define_plugin! macro with imports_only resolve_config variant,\n  migrate Cypress/Commitlint/Remark plugins\n\nRefactoring:\n- Add ReportContext struct for unified report dispatcher signatures\n- Replace score 6-tuple with Option<FileScoreOutput> + TargetAuxData::From\n- Extract build_ignore_set, collect_findings, save_health_baseline\n  from execute_health god-function\n- Add Default derive for FallowConfig and ModuleInfoExtractor\n- Remove dead _config parameters from public analysis functions\n- Remove orphaned graph/build/ directory (1,986 lines never compiled)\n\nCleanup:\n- Fix redundant closures with method references (String::as_str, etc.)\n- Add const fn to match-based lookup functions\n- Fix single_match_else patterns in LSP and MCP\n- Update CLAUDE.md build commands to use --all-targets",
          "timestamp": "2026-03-27T12:27:00+01:00",
          "tree_id": "a9a74c5879883d62974546a9f082101459a095e8",
          "url": "https://github.com/fallow-rs/fallow/commit/d99ca6bef225c0aebdfbbba24fffc4c92476b0fd"
        },
        "date": 1774610908918,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3023998,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11931,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420734,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "de836c95c858d3877c254d261307f948c515a53e",
          "message": "feat: add review-comments for rich inline PR feedback with markdown\n\nNew input `review-comments: true` posts findings as GitHub PR review\ncomments with full markdown support: code blocks, tables, links,\nand actionable suggestions.\n\n- Creates a single review per run (one notification)\n- Dismisses previous fallow review on re-runs (no stacking)\n- Uses COMMENT event (doesn't block merging)\n- Prepends root path for monorepo support\n- Falls back to individual comments if batch fails (diff line mismatch)\n- Automatically disables plain-text annotations when enabled\n- Covers all issue types: dead code, duplication, complexity, refactoring targets",
          "timestamp": "2026-03-27T12:29:45+01:00",
          "tree_id": "1e06398da4386d6face56e03059051568bc17b1d",
          "url": "https://github.com/fallow-rs/fallow/commit/de836c95c858d3877c254d261307f948c515a53e"
        },
        "date": 1774611067554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3042942,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11963,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420734,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "a2f72ea6a3b4476f50e8120339d38c7d2c817759",
          "message": "refactor: migrate 5 more plugins to define_plugin! imports_only macro",
          "timestamp": "2026-03-27T12:40:16+01:00",
          "tree_id": "1406214f0a632d83d59aa87ef497b9fd7ed8553e",
          "url": "https://github.com/fallow-rs/fallow/commit/a2f72ea6a3b4476f50e8120339d38c7d2c817759"
        },
        "date": 1774611704954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3037550,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11959,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 424018,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3882,
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
          "id": "93867ff0f4e0aceb5df35285f14a9bfb2dce38cc",
          "message": "refactor: extract CI setup into composite actions\n\n- Create .github/actions/setup-rust and .github/actions/store-benchmark composite actions\n- Migrate 11 workflows to use composite actions (-162 lines)\n- Add --all-targets to cargo test/clippy in ci.yml\n- Fix MSRV job: add explicit toolchain: '1.92.0'\n- Simplify release.yml: 7 artifact downloads → 1 pattern download\n- Fix pre-existing issues exposed by --all-targets: Windows clippy warnings, env var test race, needless_collect",
          "timestamp": "2026-03-27T14:30:50+01:00",
          "tree_id": "1881e34156acd840a46b32565e3c07bfa3f8089e",
          "url": "https://github.com/fallow-rs/fallow/commit/93867ff0f4e0aceb5df35285f14a9bfb2dce38cc"
        },
        "date": 1774618346949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3031062,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11945,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420734,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "664b4fa8418057e9870c9080a2877287016ce211",
          "message": "chore: release v2.3.0",
          "timestamp": "2026-03-27T17:44:30+01:00",
          "tree_id": "9a236179ddd12c9258009a737eec5f806097f307",
          "url": "https://github.com/fallow-rs/fallow/commit/664b4fa8418057e9870c9080a2877287016ce211"
        },
        "date": 1774629958521,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3026510,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11935,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420734,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "71607c663bf77959a6df31a588ca3340f24bb29c",
          "message": "fix: remove unnecessary raw string hashes in plugin test",
          "timestamp": "2026-03-27T19:39:40+01:00",
          "tree_id": "7e1b4ee0a1b35446c0d8872e798cb9ac8297b792",
          "url": "https://github.com/fallow-rs/fallow/commit/71607c663bf77959a6df31a588ca3340f24bb29c"
        },
        "date": 1774637110307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3038022,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11957,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420734,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "db9bff2d56b45a518445f0103d88fc930832ec2b",
          "message": "test: add integration tests and additional unit test coverage\n\nIntegration test for unreachable mixed exports, additional visitor tests,\nplugin config resolution tests, and detect algorithm edge cases.",
          "timestamp": "2026-03-27T21:08:55+01:00",
          "tree_id": "cc72c280ae6ce0d84ef5a2353a18d0c73e9e1c87",
          "url": "https://github.com/fallow-rs/fallow/commit/db9bff2d56b45a518445f0103d88fc930832ec2b"
        },
        "date": 1774642245834,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3034954,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11956,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420734,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "6ca1111298dee70f8c2ac40085800dc4efc39f18",
          "message": "Merge branch 'worktree-agent-aee04371'",
          "timestamp": "2026-03-27T21:20:23+01:00",
          "tree_id": "0441f5a5c28ab8036efebdfe8f8666161febbd0d",
          "url": "https://github.com/fallow-rs/fallow/commit/6ca1111298dee70f8c2ac40085800dc4efc39f18"
        },
        "date": 1774643033559,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3035714,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11954,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420734,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "3d6ad8957f919db4e8db202668dde479ad29a698",
          "message": "chore: release v2.3.1",
          "timestamp": "2026-03-27T21:48:28+01:00",
          "tree_id": "ddade8129abe358f6baafdf9b360423259969b52",
          "url": "https://github.com/fallow-rs/fallow/commit/3d6ad8957f919db4e8db202668dde479ad29a698"
        },
        "date": 1774644686554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3032442,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11952,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 420734,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5168,
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
          "id": "483bb84e822fb970851c062bfdcd68964209a906",
          "message": "fix: Windows CI test failure and typos check\n\n- Use platform-appropriate absolute path in extends_absolute_path_rejected\n  test (Unix: /path, Windows: C:\\path)\n- Add German unicode test words (Konfiguration, Paket) to typos allowlist",
          "timestamp": "2026-03-27T22:03:32+01:00",
          "tree_id": "095f6e0a0ae1b9adc2855b655a4f79d49bd9326c",
          "url": "https://github.com/fallow-rs/fallow/commit/483bb84e822fb970851c062bfdcd68964209a906"
        },
        "date": 1774645495401,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3045786,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 11976,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 424018,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 3882,
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
          "id": "1df6ff665a644d3ada4d68ea44ec4bdfdf27ba21",
          "message": "fix: remove tooling prefix over-exemptions and add config-based detection\n\nRemove 8 over-broad prefixes from GENERAL_TOOLING_PREFIXES (eslint,\n@typescript-eslint, postcss, autoprefixer, tailwindcss, @tailwindcss,\n@storybook/, storybook) that blanket-exempted devDeps without checking\nconfig files. Plugins with config parsing now handle these accurately.\n\nTrim tooling_dependencies() in 6 plugins (ESLint, Storybook, Tailwind,\nJest, Vitest, Prettier) to only packages genuinely not discoverable by\nconfig parsing.\n\nAdd ESLint shared config following: reads imported config packages'\nentry points one level deep to discover peer deps (e.g., @sveltejs/\neslint-config → typescript-eslint, eslint-plugin-svelte, @eslint/js).\n\nAdd PrettierPlugin config parsing: extracts plugins array from\n.prettierrc and prettier.config.* files, with package_json_config_key\nfor inline config.\n\nAdd EslintPlugin package_json_config_key(\"eslintConfig\") for inline\nconfig in package.json.\n\nAlso includes test_only_dependencies issue type (parallel agent work)\nwith full pipeline wiring and snapshot updates.",
          "timestamp": "2026-03-27T22:29:11+01:00",
          "tree_id": "8550629d55f2da8b971f1c8c0c2eaac3c30e06a1",
          "url": "https://github.com/fallow-rs/fallow/commit/1df6ff665a644d3ada4d68ea44ec4bdfdf27ba21"
        },
        "date": 1774647040880,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3560724,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15635,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "6c07b7a474dbc42decd683345774b85dcb05aff5",
          "message": "docs: add test-only-dependencies to README and output schema\n\nUpdate \"What it finds\" list to include the new test-only production\ndependency diagnostic (14 issue types total). Add TestOnlyDependency\ndefinition and field to docs/output-schema.json. Regenerate schema.json.\nIncludes residual formatting from rustfmt.",
          "timestamp": "2026-03-27T22:36:33+01:00",
          "tree_id": "7b92b205753a426cc46ee4a133cf128c10fda990",
          "url": "https://github.com/fallow-rs/fallow/commit/6c07b7a474dbc42decd683345774b85dcb05aff5"
        },
        "date": 1774647482121,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3576188,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15661,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "4eee0a6dceff37b708cc2109b2c29e5c301c5bd3",
          "message": "fix: handle exports field in shared config resolution, storybook addon object form\n\n- read_package_entry now resolves \"exports\".\".\" (string, import, default)\n  before falling back to \"module\" → \"main\" → \"index.js\"\n- Storybook addon parsing now handles object form { name: \"...\", options: {} }\n  via extract_config_property_strings supplementary pass\n- Add unit tests: shared config following with tempdir fixtures, exports\n  field resolution, storybook addon string/object forms, graceful fallback\n  when node_modules is missing",
          "timestamp": "2026-03-27T22:39:30+01:00",
          "tree_id": "7e7c0f1c550a0144fe800c7747f17e6bcf5a9915",
          "url": "https://github.com/fallow-rs/fallow/commit/4eee0a6dceff37b708cc2109b2c29e5c301c5bd3"
        },
        "date": 1774647659048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3567004,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15645,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "7dff1ea823869e9c9400fb8bb9c07d1865721ab8",
          "message": "fix: add missing type-only-dependency suppression and update issue counts to 14\n\nAdd TypeOnlyDependency variant to IssueKind (discriminant 13, bumps\ntest-only to 14). This was a pre-existing gap where type-only deps\ncould not be suppressed with fallow-ignore-next-line comments.\n\nUpdate stale \"13 issue types\" references to 14 in ROADMAP.md and\ntest comments in compact.rs and sarif.rs.",
          "timestamp": "2026-03-27T22:45:17+01:00",
          "tree_id": "5f8f60bf18d09a4fecfbcb5dee6461b193736a50",
          "url": "https://github.com/fallow-rs/fallow/commit/7dff1ea823869e9c9400fb8bb9c07d1865721ab8"
        },
        "date": 1774648004422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3568444,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15645,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "3776223d02022ab8988308dbb4ce7222b2f210d1",
          "message": "chore: release v2.4.0",
          "timestamp": "2026-03-27T23:01:46+01:00",
          "tree_id": "338d929dcec5d0055534bfc06bbb6d41fd501e81",
          "url": "https://github.com/fallow-rs/fallow/commit/3776223d02022ab8988308dbb4ce7222b2f210d1"
        },
        "date": 1774649055228,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3575300,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15655,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "9e6d4afaf61e53928ed2c5db945f849730b5304b",
          "message": "feat: add regression detection with config-embedded baselines\n\nAdd `--fail-on-regression` and `--tolerance` flags for CI regression gates.\nBaselines are stored in the config file by default (no separate file to manage),\nwith `--regression-baseline <PATH>` as an explicit override.\n\nNew global CLI flags:\n- `--fail-on-regression` — exit 1 if issue count increased beyond tolerance\n- `--tolerance <N>` — \"2%\" (percentage) or \"5\" (absolute), default \"0\"\n- `--regression-baseline <PATH>` — explicit baseline file (overrides config)\n- `--save-regression-baseline [PATH]` — no path writes to config, with path writes file\n\nConfig embedding:\n- `regression.baseline` section in .fallowrc.json / fallow.toml\n- Text-level patching preserves JSONC comments\n- Creates config file if none exists\n\nIntegration:\n- JSON output includes optional `regression` object when flag is active\n- MCP server: 4 new params on analyze + check_changed tools\n- GitHub Action: 4 new inputs with env var wiring\n- GitLab CI: 4 new variables with arg building\n- Skips with warning when --changed-since or --workspace active\n- Warns when saving baseline from scoped results\n- Warns when saved path is gitignored\n\nAlso fixes pre-existing test gap: adds unused_optional_dependencies to shared\nsample_results (fixes compact + SARIF issue-count assertions).",
          "timestamp": "2026-03-28T00:39:04+01:00",
          "tree_id": "eea40667279c1665795b6b32627148ea2f27ee9f",
          "url": "https://github.com/fallow-rs/fallow/commit/9e6d4afaf61e53928ed2c5db945f849730b5304b"
        },
        "date": 1774654843865,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3563420,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15637,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "e894387049ccf059c0dab63718a19b2a132a3ff3",
          "message": "feat: add project health score with letter grade (`--score`, `--min-score`)\n\nAggregates vital signs into a single 0-100 score with A/B/C/D/F grade.\nPenalties for dead code, complexity, maintainability, hotspots, unused\nand circular dependencies. --min-score enables CI quality gates.\n\nIncludes documentation updates across all companion repos, snapshot\ntests, and backwards-compatibility policy additions.\n\n# Conflicts:\n#\tAGENTS.md\n#\tcrates/cli/src/report/sarif.rs\n#\tdocs/output-schema.json",
          "timestamp": "2026-03-28T00:44:26+01:00",
          "tree_id": "fea7e88659795b9f937be13e403443755df26787",
          "url": "https://github.com/fallow-rs/fallow/commit/e894387049ccf059c0dab63718a19b2a132a3ff3"
        },
        "date": 1774655535434,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3593300,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15691,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "944bae67330ef74a86de8b28f9316cf758d2608a",
          "message": "fix: show health score by default when no section flags are set\n\nThe score is a project-level summary — it should appear alongside\ncomplexity, file-scores, hotspots, and targets when running bare\n`fallow health`. Using --score as a section flag still works to\nshow only the score.",
          "timestamp": "2026-03-28T00:55:02+01:00",
          "tree_id": "c25472cb40ba3931c9caf5606d509a8018a8afa7",
          "url": "https://github.com/fallow-rs/fallow/commit/944bae67330ef74a86de8b28f9316cf758d2608a"
        },
        "date": 1774655834787,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3564100,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15639,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "14945524c744dd0cc4defe847daef5213b7a5437",
          "message": "docs: update --score docs to reflect default-on behavior\n\nThe score is shown by default when no section flags are set.\n--save-snapshot now automatically includes the score.\nUpdate CLI help, AGENTS.md, and companion repos to match.",
          "timestamp": "2026-03-28T01:06:27+01:00",
          "tree_id": "97cd8d662e4fb9e9d09d539bf0d96acbabec0f94",
          "url": "https://github.com/fallow-rs/fallow/commit/14945524c744dd0cc4defe847daef5213b7a5437"
        },
        "date": 1774656468988,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3579092,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15667,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "9e65ad1327a908010b3815c3411e8e7e2348d680",
          "message": "chore: release v2.5.0",
          "timestamp": "2026-03-28T01:11:56+01:00",
          "tree_id": "a5a2c9a1d34ec52fb3a2eae028837e5ab807c06f",
          "url": "https://github.com/fallow-rs/fallow/commit/9e65ad1327a908010b3815c3411e8e7e2348d680"
        },
        "date": 1774656811798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3576556,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15657,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "004661077c460895cb9502437c6f172668bb8f14",
          "message": "fix: update discriminant_roundtrip boundary check for new IssueKind variants\n\nThe out-of-range assertion used discriminant 14, which is now occupied by\nTestOnlyDependency. Bump to 15 to match the current variant count.",
          "timestamp": "2026-03-28T13:25:24+01:00",
          "tree_id": "46bda71149042d8e493d49508581a16c3f158773",
          "url": "https://github.com/fallow-rs/fallow/commit/004661077c460895cb9502437c6f172668bb8f14"
        },
        "date": 1774700810179,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3558292,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15627,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "dac5541e0c759703fa8ffd858cc957e1ebfd870f",
          "message": "fix: use relative paths in duplication refactoring suggestions\n\nThe location hint in clone family suggestions (e.g. \"Extract ... into\nsrc/hooks\") was printing absolute paths from the filesystem. Thread\nthe project root through group_into_families and strip_prefix it from\ndirectory paths so suggestions always show project-relative paths.",
          "timestamp": "2026-03-28T19:33:17+01:00",
          "tree_id": "31e81a09eca4ac9c6cec8023403aafd1433205c6",
          "url": "https://github.com/fallow-rs/fallow/commit/dac5541e0c759703fa8ffd858cc957e1ebfd870f"
        },
        "date": 1774722886728,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3573076,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15651,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "14bdc956c891961215879504eca8a29cb727ab45",
          "message": "fix: use relative paths in duplication refactoring suggestions\n\nThe location hint in clone family suggestions (e.g. \"Extract ... into\nsrc/hooks\") was printing absolute paths from the filesystem. Thread\nthe project root through group_into_families and strip_prefix it from\ndirectory paths so suggestions always show project-relative paths.",
          "timestamp": "2026-03-28T19:36:46+01:00",
          "tree_id": "2c1c21ae1393cd380ec889c230494c41cd47b186",
          "url": "https://github.com/fallow-rs/fallow/commit/14bdc956c891961215879504eca8a29cb727ab45"
        },
        "date": 1774723096702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3573676,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15657,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "8e04e73aa6ff54683886ba6af4a3f39e018ff6e6",
          "message": "chore: release v2.5.1",
          "timestamp": "2026-03-28T19:39:48+01:00",
          "tree_id": "3d34306926606d8655034e6331c93397f478e04b",
          "url": "https://github.com/fallow-rs/fallow/commit/8e04e73aa6ff54683886ba6af4a3f39e018ff6e6"
        },
        "date": 1774723283224,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3558292,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15627,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "5b17d92e1b8378597aba50c279dca682a12d170e",
          "message": "docs: document safety invariants for u32 bounds and interval merging",
          "timestamp": "2026-03-28T19:43:20+01:00",
          "tree_id": "dfebe92b9327f4e4a19dfaaa67ed89fb6b2f7272",
          "url": "https://github.com/fallow-rs/fallow/commit/5b17d92e1b8378597aba50c279dca682a12d170e"
        },
        "date": 1774723490619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3574252,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15657,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "32080e97352e96a61a13e5c85c0e1dc364021237",
          "message": "chore: release v2.5.2",
          "timestamp": "2026-03-28T21:15:18+01:00",
          "tree_id": "65d6f23bcf57f754cf1a7f8892bec2f955276c24",
          "url": "https://github.com/fallow-rs/fallow/commit/32080e97352e96a61a13e5c85c0e1dc364021237"
        },
        "date": 1774729044933,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3562338,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15639,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "d24146869615e35f37e05b669afae94ba60b483c",
          "message": "fix: reduce false positives for unused enum members in type-level usage\n\nTrack enum member access in TypeScript type positions:\n- TSQualifiedName (e.g., `type X = Status.Active`) as member access\n- TSMappedType constraint (e.g., `{ [K in Enum]: ... }`) as whole-object use",
          "timestamp": "2026-03-28T22:02:33+01:00",
          "tree_id": "7316b9824b9473338f4fb369923874af38bc55e9",
          "url": "https://github.com/fallow-rs/fallow/commit/d24146869615e35f37e05b669afae94ba60b483c"
        },
        "date": 1774731847729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3560010,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15633,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "22fa64be94ed9ab619c325e79737a4b11b97396a",
          "message": "chore: release v2.5.3",
          "timestamp": "2026-03-28T22:06:05+01:00",
          "tree_id": "f9c9ae2311ce3dc1b23ef372ea0fa9aa5aef0b0a",
          "url": "https://github.com/fallow-rs/fallow/commit/22fa64be94ed9ab619c325e79737a4b11b97396a"
        },
        "date": 1774732130545,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3576730,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15661,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "d2f217aa5752319c356b964a1bb56acaebb6fe05",
          "message": "chore: release v2.5.4",
          "timestamp": "2026-03-28T22:41:27+01:00",
          "tree_id": "46ae10555f88fa4a595b285fd9ec273727bcc985",
          "url": "https://github.com/fallow-rs/fallow/commit/d2f217aa5752319c356b964a1bb56acaebb6fe05"
        },
        "date": 1774734191744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3573562,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15661,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "e566c19e440413d2eedd19e6fb254c9294996b33",
          "message": "chore: release v2.5.5",
          "timestamp": "2026-03-28T22:54:59+01:00",
          "tree_id": "fb09e9b3d825dfd48705d90c478f22cf06f97a1a",
          "url": "https://github.com/fallow-rs/fallow/commit/e566c19e440413d2eedd19e6fb254c9294996b33"
        },
        "date": 1774734983999,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3569298,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15651,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "9a10769adcd44174a91945238758424486f8d81e",
          "message": "fix: gate parser-invoking extract tests with #[cfg(not(miri))]\n\nThe sfc, astro, and mdx parse_*_to_module tests invoke the Oxc parser\nwhich is ~1000x slower under Miri, causing the 30-minute CI timeout.\nGate these 11 tests so only string-extraction tests run under Miri.",
          "timestamp": "2026-03-28T23:39:21+01:00",
          "tree_id": "1aff9d5abc0d73a310af83c19e58786e053d9633",
          "url": "https://github.com/fallow-rs/fallow/commit/9a10769adcd44174a91945238758424486f8d81e"
        },
        "date": 1774737648345,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3557498,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15629,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "0bf57c0b30c309ba5c716c6f74772e27b9331e55",
          "message": "fix: gate entire sfc/astro/mdx test modules under Miri\n\nThe previous per-test gating only removed 11 parser-invoking tests but\nleft 83 regex/string tests that still take ~10s each under Miri,\nexceeding the 30-minute timeout. These modules exercise regex-based\nstring extraction with no unsafe code — no Miri-specific value.\n\nOnly suppress, css, and visitor/helpers tests run under Miri now (~87\ntests, ~15 minutes).",
          "timestamp": "2026-03-29T11:19:02+02:00",
          "tree_id": "9351ec1d4dc2a5ce9ed26db84c27faf8be0e2754",
          "url": "https://github.com/fallow-rs/fallow/commit/0bf57c0b30c309ba5c716c6f74772e27b9331e55"
        },
        "date": 1774776031536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3562442,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15641,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "64bd7d52f66192542e93a8a8493ccd43cb38fedf",
          "message": "chore: release v2.6.0",
          "timestamp": "2026-03-30T09:53:58+02:00",
          "tree_id": "2eb1cfa09c288089a796d7904bfa3e239b29cccd",
          "url": "https://github.com/fallow-rs/fallow/commit/64bd7d52f66192542e93a8a8493ccd43cb38fedf"
        },
        "date": 1774857663163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3570058,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15649,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "89bada15370c22a3d3bc3fba3d5eb7619b4bf30e",
          "message": "chore: release v2.7.0",
          "timestamp": "2026-03-30T12:21:42+02:00",
          "tree_id": "1f3f5de48d60fd4d869d749ecaacb2fefad26665",
          "url": "https://github.com/fallow-rs/fallow/commit/89bada15370c22a3d3bc3fba3d5eb7619b4bf30e"
        },
        "date": 1774866224891,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578090,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15665,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "58931ffd8d01f03136e83c6a891ec50141ae0b05",
          "message": "refactor: replace redundant closures with method references",
          "timestamp": "2026-03-30T18:15:04+02:00",
          "tree_id": "463737bf7b4c80750cadc922cf320131c1050d5e",
          "url": "https://github.com/fallow-rs/fallow/commit/58931ffd8d01f03136e83c6a891ec50141ae0b05"
        },
        "date": 1774887393722,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3583114,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15673,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534634,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5820,
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
          "id": "7baa31f79daa4dd233d3c9c22c01b5fbe4d63d4b",
          "message": "refactor: extract helpers from long functions\n\nExtract shared helper functions from overly long functions flagged by\nclippy::too_many_lines (>100 lines threshold):\n\n- core/lib.rs: Extract analyze_all_scripts() and discover_all_entry_points()\n  from both analyze_with_parse_result (177→~120 lines) and analyze_full\n  (212→~150 lines), eliminating duplicated script analysis and entry point\n  discovery code between the two pipeline functions.\n\n- core/plugins/jest.rs: Extract extract_jest_setup_files() and\n  extract_jest_dependencies() from resolve_config (126→~25 lines),\n  splitting setup file extraction from dependency extraction.\n\n- core/duplicates/tokenize/mod.rs: Extract tokenize_sfc(), tokenize_astro(),\n  tokenize_mdx(), tokenize_js_ts(), and empty_tokens() from\n  tokenize_file_inner (109→~15 lines), one helper per file type.\n\n- graph/cycles.rs: Extract enumerate_cycles_from_sccs() from find_cycles\n  (128→~100 lines), separating Tarjan SCC detection from cycle enumeration.\n\n- cli/main.rs: Extract dispatch_bare_command(), dispatch_subcommand(),\n  and dispatch_health() from main (329→~80 lines), splitting CLI argument\n  validation from command dispatch.",
          "timestamp": "2026-03-30T18:39:15+02:00",
          "tree_id": "a5ceeee583657976e5b726f34c7b4af5b05d1323",
          "url": "https://github.com/fallow-rs/fallow/commit/7baa31f79daa4dd233d3c9c22c01b5fbe4d63d4b"
        },
        "date": 1774888982868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3564954,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15645,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "7ad926e8cc7385fd5ecda9dbaf37fb02d7c0f825",
          "message": "refactor: annotate intentional usize-to-u32 casts with expect",
          "timestamp": "2026-03-30T19:02:37+02:00",
          "tree_id": "51f09cc2feef4679b0cf4ef0843bbd4f03b30fae",
          "url": "https://github.com/fallow-rs/fallow/commit/7ad926e8cc7385fd5ecda9dbaf37fb02d7c0f825"
        },
        "date": 1774890410450,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3561370,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15637,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "0132ea69dc297e2a5eb2035964ce5f71fd4d0511",
          "message": "refactor: use #[expect] instead of #[allow] for wildcard import suppressions",
          "timestamp": "2026-03-30T19:32:29+02:00",
          "tree_id": "966fe63028a185173e247d82df72167afb6cf230",
          "url": "https://github.com/fallow-rs/fallow/commit/0132ea69dc297e2a5eb2035964ce5f71fd4d0511"
        },
        "date": 1774892031905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3567074,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15647,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "68ae15d3b29e0ba9bbd7df8709728612056ebbe1",
          "message": "fix: use #[allow] for pedantic-only lint suppressions",
          "timestamp": "2026-03-30T19:33:51+02:00",
          "tree_id": "82f6a752e43603d8589aedcb7e29ecae29456221",
          "url": "https://github.com/fallow-rs/fallow/commit/68ae15d3b29e0ba9bbd7df8709728612056ebbe1"
        },
        "date": 1774892115160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3579058,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15667,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "c833d799e938aff7f1cb698a6cc126eeaf5a10de",
          "message": "fix: suppress SvelteKit virtual modules and generated types\n\nFix two false positive categories in SvelteKit projects:\n\n1. Virtual module prefixes like `$app/` failed to match extracted\n   package names like `$app` because `starts_with(\"$app/\")` requires\n   a trailing slash. Now also checks `prefix.strip_suffix('/') == name`.\n   This also fixes the same latent bug for Docusaurus prefixes.\n\n2. SvelteKit generates `./$types` imports in route files at build time.\n   These are relative imports to files that don't exist during static\n   analysis. Added `generated_import_patterns()` to the Plugin trait\n   so frameworks can declare build-time generated import suffixes that\n   should be suppressed from unresolved import detection.\n\nCloses fallow-rs/fallow#34",
          "timestamp": "2026-03-30T22:57:26+02:00",
          "tree_id": "8501feee7f9e4f36cfc71592fe95cf264b6fa55e",
          "url": "https://github.com/fallow-rs/fallow/commit/c833d799e938aff7f1cb698a6cc126eeaf5a10de"
        },
        "date": 1774904344451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3576546,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15663,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "2d9f5541c611336bf2f1a649cdafbd3949870c4a",
          "message": "chore: release v2.7.1",
          "timestamp": "2026-03-30T22:59:42+02:00",
          "tree_id": "d2695b58b69d7ae41ff72cfe1fef157000657df4",
          "url": "https://github.com/fallow-rs/fallow/commit/2d9f5541c611336bf2f1a649cdafbd3949870c4a"
        },
        "date": 1774904472753,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3559434,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15633,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "5b05cd6b6dbb694cbf6c02539702c734771bced3",
          "message": "docs: add missing # Panics sections to public functions",
          "timestamp": "2026-03-30T23:21:23+02:00",
          "tree_id": "77772126b5dbfa3751c44a83c961b9cb30ee8150",
          "url": "https://github.com/fallow-rs/fallow/commit/5b05cd6b6dbb694cbf6c02539702c734771bced3"
        },
        "date": 1774905766260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3557498,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15629,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "1c685b1a3e1aad0cd10adacd136d2898f3541109",
          "message": "test: improve health scoring coverage",
          "timestamp": "2026-03-30T23:44:02+02:00",
          "tree_id": "ca18e35fbe67e69a52d9640c00143c9cd37f2033",
          "url": "https://github.com/fallow-rs/fallow/commit/1c685b1a3e1aad0cd10adacd136d2898f3541109"
        },
        "date": 1774907222274,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3557026,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15631,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "c088431e58f091651ba53737a4e90e0fcad2a8cd",
          "message": "chore: release v2.7.2",
          "timestamp": "2026-03-31T13:44:40+02:00",
          "tree_id": "6a43ccfa2a99c46affe44169aa32384443b6f622",
          "url": "https://github.com/fallow-rs/fallow/commit/c088431e58f091651ba53737a4e90e0fcad2a8cd"
        },
        "date": 1774957588123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3573538,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15655,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "fc332b882823f92743ffdf6074f719a747313aae",
          "message": "fix: `--format badge` auto-enables `--score`\n\nPreviously `fallow health --complexity --format badge` would error\nbecause score computation wasn't triggered when explicit section flags\nwere passed. Badge format now implies --score, matching the behavior\nof --min-score, --trend, and --save-snapshot.",
          "timestamp": "2026-03-31T15:41:00+02:00",
          "tree_id": "73c8c8eac6365930066d5901ec75ca703aacd561",
          "url": "https://github.com/fallow-rs/fallow/commit/fc332b882823f92743ffdf6074f719a747313aae"
        },
        "date": 1774964555585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3580418,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15671,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "dba526fc5a78f4b5d79e2992d3c6073304a0ab3c",
          "message": "chore: release v2.7.3",
          "timestamp": "2026-03-31T15:42:38+02:00",
          "tree_id": "2c908a790c7ec8fc923e9a27b3a7b4f7a7b7c9a2",
          "url": "https://github.com/fallow-rs/fallow/commit/dba526fc5a78f4b5d79e2992d3c6073304a0ab3c"
        },
        "date": 1774964649601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3570738,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15651,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "4d15817e9d6c067b2e0fd342b1b47bf74a746108",
          "message": "perf: use panic=abort in release profile for smaller binary",
          "timestamp": "2026-03-31T16:00:37+02:00",
          "tree_id": "8f80ecfb95955a00e05ef0e68cdda51f35182574",
          "url": "https://github.com/fallow-rs/fallow/commit/4d15817e9d6c067b2e0fd342b1b47bf74a746108"
        },
        "date": 1774965727996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3558466,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15631,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "7731c196c1322b31490ed48a9d0e032cf33214b9",
          "message": "docs: update code-quality rules with new lints and release profile",
          "timestamp": "2026-03-31T16:05:34+02:00",
          "tree_id": "909335bfad8746d10ca22c4aee299f45b27f9828",
          "url": "https://github.com/fallow-rs/fallow/commit/7731c196c1322b31490ed48a9d0e032cf33214b9"
        },
        "date": 1774966031437,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3562522,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15637,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "636fe4f18d157410ed9f8ef8ff5d9257a0524a7b",
          "message": "refactor: add 6 restriction lints from oxc\n\n- filetype_is_file: use !is_dir() to include symlinked source files\n- rest_pat_in_fully_bound_structs: catch redundant .. in patterns\n- pub_underscore_fields: catch accidentally public _-prefixed fields\n- non_zero_suggestions: suggest NonZero types\n- precedence_bits: catch bitwise precedence mistakes\n- map_with_unused_argument_over_ranges: prefer repeat/repeat_with",
          "timestamp": "2026-03-31T16:30:34+02:00",
          "tree_id": "ca50dd95900edf34dd7b2b82fd0bae3a0719939f",
          "url": "https://github.com/fallow-rs/fallow/commit/636fe4f18d157410ed9f8ef8ff5d9257a0524a7b"
        },
        "date": 1774967535754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3582826,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15673,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "5fa39ed52836790417a3deaf4fbe31ff7de48450",
          "message": "docs: mention .gitignore in init section of README",
          "timestamp": "2026-04-01T09:21:59+02:00",
          "tree_id": "add738702bd90bd3ff9bb2847d412fab51106f88",
          "url": "https://github.com/fallow-rs/fallow/commit/5fa39ed52836790417a3deaf4fbe31ff7de48450"
        },
        "date": 1775028211335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3585154,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15679,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "c5be34d097e4ef85a85a2775624ca84ef802a44a",
          "message": "feat: add `fallow audit` command for reviewing AI-generated code\n\nCombines dead-code + complexity + duplication scoped to changed files\nand returns a verdict (pass/warn/fail). Auto-detects the base branch\nif --base is not specified.\n\n- CLI: `fallow audit [--base <ref>]` with all 6 output formats\n- MCP: `audit` tool (8th tool, wraps CLI)\n- Global: `--base` alias for `--changed-since` on all commands\n- Verdict: pass (exit 0), warn (exit 0), fail (exit 1)\n- Hard error on failed git ref resolution (no silent fallback)\n- JSON envelope: verdict, summary, full sub-results with actions",
          "timestamp": "2026-04-01T09:43:30+02:00",
          "tree_id": "97932c571c38071a5ec0a56c711499bc9617fadc",
          "url": "https://github.com/fallow-rs/fallow/commit/c5be34d097e4ef85a85a2775624ca84ef802a44a"
        },
        "date": 1775029517935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3576442,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15661,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "38ce08ade8ead8635595db67d232ceeb787b3f7e",
          "message": "chore: release v2.8.0",
          "timestamp": "2026-04-01T09:55:32+02:00",
          "tree_id": "a912c3e91f772b267300f75027aebc20b44d000d",
          "url": "https://github.com/fallow-rs/fallow/commit/38ce08ade8ead8635595db67d232ceeb787b3f7e"
        },
        "date": 1775030233958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3569482,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15649,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "e6de2a325aa1df10c5d4d5f0eef381e378818f60",
          "message": "chore: release v2.8.1",
          "timestamp": "2026-04-01T10:55:18+02:00",
          "tree_id": "2e004ff3896d48f0be60800286223642773f3bfb",
          "url": "https://github.com/fallow-rs/fallow/commit/e6de2a325aa1df10c5d4d5f0eef381e378818f60"
        },
        "date": 1775033829900,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3573538,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15655,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "d27615897a99cbfee3dac999f805e8d748823d17",
          "message": "test: add integration tests for audit, fix, schema, migrate, production, workspace\n\nCover the remaining untested CLI commands:\n- audit: verdict logic (pass/warn/fail), JSON structure, badge format rejection\n- fix: dry-run output, fixable items, non-TTY guard\n- schema/config-schema/plugin-schema: valid JSON output, key fields\n- migrate: dry-run JSONC/TOML output, missing config error\n- --production mode: accepted on check/health/dupes\n- --workspace scoping: limits output to named package\n- --regression-baseline round-trip: save and compare",
          "timestamp": "2026-04-01T11:19:42+02:00",
          "tree_id": "c67c39d64676891aed52181ea67987e5b70bbb0d",
          "url": "https://github.com/fallow-rs/fallow/commit/d27615897a99cbfee3dac999f805e8d748823d17"
        },
        "date": 1775035271428,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3574610,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15659,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "debf8af9a797e5a6c21d7fb583ef42aa13f5d920",
          "message": "test: add integration tests for audit, fix, schema, migrate, production, workspace\n\nCover the remaining untested CLI commands:\n- audit: verdict logic (pass/warn/fail), JSON structure, badge format rejection\n- fix: dry-run output, fixable items, non-TTY guard\n- schema/config-schema/plugin-schema: valid JSON output, key fields\n- migrate: dry-run JSONC/TOML output, missing config error\n- --production mode: accepted on check/health/dupes\n- --workspace scoping: limits output to named package\n- --regression-baseline round-trip: save and compare",
          "timestamp": "2026-04-01T11:27:36+02:00",
          "tree_id": "55012f41c329dc67fb4920a93b233bbfe86b9f1c",
          "url": "https://github.com/fallow-rs/fallow/commit/debf8af9a797e5a6c21d7fb583ef42aa13f5d920"
        },
        "date": 1775035746230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3580994,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15671,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "b1c2d04f6b27621c91d60e9c125d3772f368ed7e",
          "message": "chore(deps): bump the oxc group across 1 directory with 7 updates (#35)\n\n* chore(deps): bump the oxc group with 7 updates\n\nBumps the oxc group with 7 updates:\n\n| Package | From | To |\n| --- | --- | --- |\n| [oxc_allocator](https://github.com/oxc-project/oxc) | `0.120.0` | `0.122.0` |\n| [oxc_ast](https://github.com/oxc-project/oxc) | `0.120.0` | `0.122.0` |\n| [oxc_ast_visit](https://github.com/oxc-project/oxc) | `0.120.0` | `0.122.0` |\n| [oxc_parser](https://github.com/oxc-project/oxc) | `0.120.0` | `0.122.0` |\n| [oxc_semantic](https://github.com/oxc-project/oxc) | `0.120.0` | `0.122.0` |\n| [oxc_span](https://github.com/oxc-project/oxc) | `0.120.0` | `0.122.0` |\n| [oxc_syntax](https://github.com/oxc-project/oxc) | `0.120.0` | `0.122.0` |\n\n\nUpdates `oxc_allocator` from 0.120.0 to 0.122.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.120.0...crates_v0.122.0)\n\nUpdates `oxc_ast` from 0.120.0 to 0.122.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.120.0...crates_v0.122.0)\n\nUpdates `oxc_ast_visit` from 0.120.0 to 0.122.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.120.0...crates_v0.122.0)\n\nUpdates `oxc_parser` from 0.120.0 to 0.122.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.120.0...crates_v0.122.0)\n\nUpdates `oxc_semantic` from 0.120.0 to 0.122.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.120.0...crates_v0.122.0)\n\nUpdates `oxc_span` from 0.120.0 to 0.122.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.120.0...crates_v0.122.0)\n\nUpdates `oxc_syntax` from 0.120.0 to 0.122.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.120.0...crates_v0.122.0)\n\n---\nupdated-dependencies:\n- dependency-name: oxc_allocator\n  dependency-version: 0.122.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_ast\n  dependency-version: 0.122.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_ast_visit\n  dependency-version: 0.122.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_parser\n  dependency-version: 0.122.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_semantic\n  dependency-version: 0.122.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_span\n  dependency-version: 0.122.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_syntax\n  dependency-version: 0.122.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* fix: append .exe to binary path on Windows for e2e tests\n\n* chore: fix rustfmt style in audit_tests\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-04-01T12:03:29+02:00",
          "tree_id": "20ccde1bd5fb17578d48fc0e2ac026c84f944fe5",
          "url": "https://github.com/fallow-rs/fallow/commit/b1c2d04f6b27621c91d60e9c125d3772f368ed7e"
        },
        "date": 1775037910271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3560402,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15635,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "63a613f3c4e56ccf6c2a06eb2d18f7c2400c2343",
          "message": "fix: coverage CI fails because cargo-llvm-cov uses different target dir\n\nThe MCP e2e tests look for the fallow binary at target/debug/fallow,\nbut cargo-llvm-cov redirects output to target/llvm-cov-target. Build\nthe CLI binary separately and pass FALLOW_BIN to the coverage run.",
          "timestamp": "2026-04-01T14:08:49+02:00",
          "tree_id": "20a126f4163ffed6d71cf2327285951889adf04f",
          "url": "https://github.com/fallow-rs/fallow/commit/63a613f3c4e56ccf6c2a06eb2d18f7c2400c2343"
        },
        "date": 1775045417824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3566890,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15649,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "89e9c6a876189baffd684cb2a770baa0eaf75fec",
          "message": "feat: add architecture boundaries types and config (Phase 1)\n\nAdd the type and config foundation for architecture boundary\nenforcement. Zones define directory groupings, rules define which zones\nmay import from which using an allowlist model.\n\nNew issue type: BoundaryViolation (IssueKind discriminant 15)\nNew config section: boundaries { zones, rules }\nNew rule: boundary-violation (default: error)\n\nIncludes zone name validation at config load, pre-compiled glob\nmatchers, zone classification, import allowlist checking, regression\nbaseline support, and full rules integration (apply_rules,\nhas_error_severity_issues, promote_warns_to_errors).\n\nDetector (Phase 2), reporting (Phase 3), and MCP (Phase 4) follow in\nsubsequent commits.",
          "timestamp": "2026-04-01T15:38:11+02:00",
          "tree_id": "92d8d0cf7f33143fce191766692a545a18864d3b",
          "url": "https://github.com/fallow-rs/fallow/commit/89e9c6a876189baffd684cb2a770baa0eaf75fec"
        },
        "date": 1775050850498,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3592914,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15883,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "f93db9ee717332d2c6500e4e814e4923049832d5",
          "message": "feat: add architecture boundary violation detector (Phase 2)\n\nImplements the boundary violation detector that checks imports against\nuser-defined architecture zones and rules. Classifies modules into zones\nvia glob patterns and detects cross-zone imports that violate the\nconfigured allowlist.\n\nPipeline: for each reachable module, classify into zone → for each\nimport edge, classify target → if not in allowlist, emit violation.\nZone classification is cached per FileId for performance.\n\nIncludes: detector with unit tests, integration into analyze/mod.rs,\nCLI --boundary-violations filter flag, all 6 report formats (human,\nJSON, SARIF, compact, markdown, CodeClimate), LSP diagnostics with\nrelated info, baseline support, workspace/changed-file filtering,\nregression tracking, integration tests, test fixture, snapshot updates,\nand documentation updates (README, AGENTS, CLAUDE, detection rules,\noutput schema, backwards compatibility).",
          "timestamp": "2026-04-01T16:31:24+02:00",
          "tree_id": "c84e283d06b946bc03d81c98866f8af4f2bb7090",
          "url": "https://github.com/fallow-rs/fallow/commit/f93db9ee717332d2c6500e4e814e4923049832d5"
        },
        "date": 1775054443429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3590298,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15877,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "4f9e625584f2862f514254cf0f46b9a25a261010",
          "message": "feat: add boundary violations to GitHub Action, GitLab CI, and MCP server\n\nWire boundary violations through the remaining integration points:\n\n- GitHub Action: summary table row + detail section, review comments\n  with zone info and docs link, annotations with file/line/col\n- GitLab CI: summary table row + detail section, combined summary count\n- MCP server: boundary-violations added to ISSUE_TYPE_FLAGS, params\n  doc comment, and tool description\n- All test fixtures and inline test JSON updated with boundary_violations field",
          "timestamp": "2026-04-01T16:51:16+02:00",
          "tree_id": "8e4371032dd30f94de850a9a8d9c6eee4d2759a8",
          "url": "https://github.com/fallow-rs/fallow/commit/4f9e625584f2862f514254cf0f46b9a25a261010"
        },
        "date": 1775055165745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3575018,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15849,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "0f07026ef5b61a78c5ad0acfd0eeddce042e289e",
          "message": "fix: replace typo in boundary test and add pre-commit typos hook\n\nThe test used \"databse\" as an invalid zone name, which triggered the\ntypos CI check. Replaced with \"nonexistent\". Added typos to the Claude\npre-commit hook so agents can't commit code with typos.",
          "timestamp": "2026-04-01T17:22:55+02:00",
          "tree_id": "9e9b363cbd9aa51942b2343006b5a259122d79c7",
          "url": "https://github.com/fallow-rs/fallow/commit/0f07026ef5b61a78c5ad0acfd0eeddce042e289e"
        },
        "date": 1775057079208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3590378,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15873,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "a1e8cd1f56ec94ebbdcd36493f9e15de5f782f2c",
          "message": "docs: align positioning guide with codebase analyzer branding\n\nAdd architecture boundary violations to all copy templates, elevator\npitch, and approved one-liners. Replace \"dead code\" with \"unused code\"\nin the Why section.",
          "timestamp": "2026-04-01T19:03:43+02:00",
          "tree_id": "54b5f730fbfa9880f964974be07045904d0a4724",
          "url": "https://github.com/fallow-rs/fallow/commit/a1e8cd1f56ec94ebbdcd36493f9e15de5f782f2c"
        },
        "date": 1775063122949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3574546,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15851,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "04cd592b8241667154ca6c799c8e456ec0382a44",
          "message": "feat: add bulletproof architecture boundary preset\n\nAdd a fourth built-in preset for the Bulletproof React pattern:\napp → features → shared + server. The shared zone covers components,\nhooks, lib, utils, utilities, providers, shared, types, styles, i18n.\n\nMatches the dominant React/Next.js architecture where feature modules\nare isolated from each other and shared utilities form the base layer.\n\nIncludes 3 unit tests for zone expansion, rule correctness, and\nfile classification via resolved glob matchers.",
          "timestamp": "2026-04-01T20:21:49+02:00",
          "tree_id": "8ed76b2b34508f661d905110f1b6fdf0ce0a8e53",
          "url": "https://github.com/fallow-rs/fallow/commit/04cd592b8241667154ca6c799c8e456ec0382a44"
        },
        "date": 1775067795413,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3575514,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15853,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "90f15c2a4239ce612da04fa9bffe24a20af271d9",
          "message": "chore: release v2.9.0",
          "timestamp": "2026-04-01T20:23:55+02:00",
          "tree_id": "bc64fd893382f292f8ad74f269dbf3e5c7d316c6",
          "url": "https://github.com/fallow-rs/fallow/commit/90f15c2a4239ce612da04fa9bffe24a20af271d9"
        },
        "date": 1775067928152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3581482,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15857,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "e8ac7a8d75943a4f22685a369cb25d113bbc90bd",
          "message": "test: add bulletproof preset integration test fixture\n\nFixture with an intentional features→app violation. Integration test\nverifies exactly 1 boundary violation is detected with correct zone\nclassification.",
          "timestamp": "2026-04-01T20:40:59+02:00",
          "tree_id": "dade9d50e91825d41fc34771e3234bf561dd1e18",
          "url": "https://github.com/fallow-rs/fallow/commit/e8ac7a8d75943a4f22685a369cb25d113bbc90bd"
        },
        "date": 1775068953136,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3579858,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15859,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "181f611ec3433b99dada91ea4aa26885e18b54ad",
          "message": "refactor: use Display for EntryPointSource and relative paths in list output\n\nAdd Display impl for EntryPointSource with human-readable strings\n(e.g. \"package.json main\" instead of \"PackageJsonMain\"). Switch list\ncommand human output to relative paths and Display formatting.",
          "timestamp": "2026-04-02T09:42:06+02:00",
          "tree_id": "847e9f12d07e624543604e25f05e2715adabc3be",
          "url": "https://github.com/fallow-rs/fallow/commit/181f611ec3433b99dada91ea4aa26885e18b54ad"
        },
        "date": 1775115970367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3565154,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15831,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "189c5bfef115b1b8b4109a540cb451135c1b726e",
          "message": "fix: address review findings from pre-ship audit\n\n- Remove expect() in save_snapshot by passing path as parameter\n- Add missing unused_optional_dependencies assertion in config test\n- Fix inaccurate doc: static_imports handles import declarations only\n- Update CLAUDE.md and rules for regression/ and diagnostics/ splits",
          "timestamp": "2026-04-02T11:13:57+02:00",
          "tree_id": "62a5ee52b0fa0809facc4409e3a45b4bbf163e88",
          "url": "https://github.com/fallow-rs/fallow/commit/189c5bfef115b1b8b4109a540cb451135c1b726e"
        },
        "date": 1775121515528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3581794,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15863,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "07672829d12b9726615eaf48dc2431fe557d12f4",
          "message": "refactor: split health_types.rs into focused submodules\n\nSplit into health_types/ directory with:\n- mod.rs: HealthReport + re-exports\n- scores.rs: score types, penalties, thresholds\n- vital_signs.rs: vital signs + snapshot schema\n- trends.rs: trend tracking types\n- targets.rs: refactoring targets + evidence",
          "timestamp": "2026-04-02T11:46:39+02:00",
          "tree_id": "e5dddea145693ad07bba1130ff3a146c73d27d04",
          "url": "https://github.com/fallow-rs/fallow/commit/07672829d12b9726615eaf48dc2431fe557d12f4"
        },
        "date": 1775123362392,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3586442,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15858,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "9026172cd64b9a4f92aa03ba8757bb6ccdaf3494",
          "message": "fix: sort circular deps by files and export usage reference locations\n\nAddress review findings: sort circular_dependencies by files (not\nlength) for path-consistent ordering, and sort nested\nreference_locations within export_usages for LSP determinism.",
          "timestamp": "2026-04-02T12:53:36+02:00",
          "tree_id": "8b5e065307648cf479390d8949eea6a3d8c19a7b",
          "url": "https://github.com/fallow-rs/fallow/commit/9026172cd64b9a4f92aa03ba8757bb6ccdaf3494"
        },
        "date": 1775127312748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3586050,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15856,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "3e39c26723fc9a6177aeb55acfe8db5ebd32046e",
          "message": "chore: release v2.9.1",
          "timestamp": "2026-04-02T13:03:06+02:00",
          "tree_id": "9d0752e16ccf69f0d95c154afe98f6267fed10ba",
          "url": "https://github.com/fallow-rs/fallow/commit/3e39c26723fc9a6177aeb55acfe8db5ebd32046e"
        },
        "date": 1775127868114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3572154,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15838,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "f1fe55081e25831e99fb0ba4410eab0b153dd391",
          "message": "feat: harden MCP server to quality 9\n\n- Add subprocess timeout (120s default, FALLOW_TIMEOUT_SECS env var)\n- Pass through structured JSON errors from CLI stdout on exit code 2+\n- Inject actions into health JSON (findings, targets, hotspots)\n- Inject actions into dupes JSON (clone families, clone groups)\n- Audit inherits actions for all three sub-analyses\n- Add list_boundaries tool (9th MCP tool)\n- Add boundary_violations convenience param on analyze\n- Add changed_since param on find_dupes\n- Add section params on project_info (entry_points, files, plugins, boundaries)",
          "timestamp": "2026-04-02T16:10:10+02:00",
          "tree_id": "6d215dbd9b3bfc5aef3af78bae82b913c2ede8fa",
          "url": "https://github.com/fallow-rs/fallow/commit/f1fe55081e25831e99fb0ba4410eab0b153dd391"
        },
        "date": 1775139092209,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3581234,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15852,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "e3699a2f65d287c3f0af6e480256389458535116",
          "message": "feat: add npm package resolution to config extends field\n\nSupport `npm:` prefixed specifiers in the `extends` config field for\ncross-repo config inheritance via npm packages.\n\nResolution: walks up `node_modules/`, checks `package.json`\nexports/main (including `node` condition), falls back to standard\nconfig file names. Subpaths supported (e.g., `npm:@co/config/strict.json`).\n\nSecurity: path confinement via canonicalize + starts_with on all\nresolution paths, package name validation rejects traversal components,\nmalformed package.json is a hard error.\n\nIncompatible with Yarn PnP (no `node_modules/` directory).",
          "timestamp": "2026-04-02T17:24:49+02:00",
          "tree_id": "35942bfa1fc1a797d6b7fb56448de2842480ac7f",
          "url": "https://github.com/fallow-rs/fallow/commit/e3699a2f65d287c3f0af6e480256389458535116"
        },
        "date": 1775144077727,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3579482,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15846,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "5a63d4ea14799b93a73cb4232f8ebce0656eb502",
          "message": "chore: release v2.9.2",
          "timestamp": "2026-04-02T19:33:44+02:00",
          "tree_id": "9a05251d5250855d1aab868aae4ea379b2ff4bc9",
          "url": "https://github.com/fallow-rs/fallow/commit/5a63d4ea14799b93a73cb4232f8ebce0656eb502"
        },
        "date": 1775151350904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3583850,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15858,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "e62239363b17b9627f6dc869754c6e96e281292d",
          "message": "chore: release v2.9.3",
          "timestamp": "2026-04-03T07:25:29+02:00",
          "tree_id": "8accee72b1cce0bdd30dd8a12a32bc7575841beb",
          "url": "https://github.com/fallow-rs/fallow/commit/e62239363b17b9627f6dc869754c6e96e281292d"
        },
        "date": 1775194054749,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3579194,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15846,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "69aa4bb6c8e6c49e0d983408072c1f603fba4949",
          "message": "feat: add HTTPS URL resolution to config extends field\n\nThe `extends` field in `.fallowrc.json` now supports three resolution\nstrategies: relative paths, npm packages (`npm:`), and HTTPS URLs.\n\nURL extends fetch remote JSON configs with a 5s timeout (configurable\nvia `FALLOW_EXTENDS_TIMEOUT_SECS`), enforce HTTPS-only, cap response\nbodies at 1 MB, and normalize URLs for cycle detection. URL-sourced\nconfigs may extend other URLs or npm packages but not relative paths.",
          "timestamp": "2026-04-03T08:20:56+02:00",
          "tree_id": "761ff2f282e64f893daa86344cfe65e99cdbdf38",
          "url": "https://github.com/fallow-rs/fallow/commit/69aa4bb6c8e6c49e0d983408072c1f603fba4949"
        },
        "date": 1775197358161,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3582882,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15856,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "f7fda81f4d9c7739dce649f4f5e614dcc2fc7657",
          "message": "chore: release v2.10.0",
          "timestamp": "2026-04-03T08:27:35+02:00",
          "tree_id": "f4766ca2b2fa84b732e57a3caec0979ce65ae73a",
          "url": "https://github.com/fallow-rs/fallow/commit/f7fda81f4d9c7739dce649f4f5e614dcc2fc7657"
        },
        "date": 1775197746936,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3588954,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15862,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "285c6dfbec92d5e730b469ac64aa2b9caa7389a6",
          "message": "chore: release v2.10.1",
          "timestamp": "2026-04-03T08:53:11+02:00",
          "tree_id": "a418a2b4770a64f0bb77d7d9cc7a8e16111a13e7",
          "url": "https://github.com/fallow-rs/fallow/commit/285c6dfbec92d5e730b469ac64aa2b9caa7389a6"
        },
        "date": 1775199295267,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3596698,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15878,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "f021dec3e7b9bfaeff9550c51d82439c2474e7db",
          "message": "feat: add --group-by owner|directory for team-level issue triage\n\nCODEOWNERS parser with auto-probe (CODEOWNERS, .github/CODEOWNERS,\n.gitlab/CODEOWNERS, docs/CODEOWNERS), last-match-wins pattern semantics,\nfirst-owner-on-line selection. Groups all dead-code analysis output into\nlabeled sections by team ownership or first directory component.\n\nAll 6 output formats supported: human (colored group headers), JSON\n(grouped envelope with groups array), compact (group prefix per line),\nmarkdown (## sections), SARIF (properties.owner), CodeClimate (owner field).\n\nConfig: optional `codeowners` path field for custom CODEOWNERS location.\nMCP: `group_by` parameter on the analyze tool.",
          "timestamp": "2026-04-03T10:04:05+02:00",
          "tree_id": "276e4231c44f1c0213a17c1621841cc30b8e814f",
          "url": "https://github.com/fallow-rs/fallow/commit/f021dec3e7b9bfaeff9550c51d82439c2474e7db"
        },
        "date": 1775203535513,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3589162,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15866,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "fc879aeffe737846ec2c326c29bcda6b8c1977cb",
          "message": "feat: polish --group-by output with summary, sort, rule annotations\n\nFive improvements from panel review:\n1. Summary line at top showing all groups sorted by issue count\n2. Sort groups by count descending (biggest first, unowned last)\n3. CODEOWNERS rule annotation on group headers (e.g. \"matched by *.tsx\")\n4. Deduplicate doc URL footers across groups (each appears once)\n5. Breakdown in group header showing per-type counts",
          "timestamp": "2026-04-03T10:23:57+02:00",
          "tree_id": "ee1ce3c698e27f1ba0793185b14dfb94da8e7ad6",
          "url": "https://github.com/fallow-rs/fallow/commit/fc879aeffe737846ec2c326c29bcda6b8c1977cb"
        },
        "date": 1775204735597,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3575322,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15838,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "e7c16e59db867a83f0c47b231cac985eed652209",
          "message": "fix: wire --group-by through combined mode and add grouping tests\n\nCombined mode (no subcommand) now passes the ownership resolver to\nprint_check_result instead of hardcoded None, so `fallow --group-by\ndirectory` produces grouped output.\n\nAdds 19 unit tests for group_analysis_results covering: empty input,\nsingle/multiple groups, count-descending sort, unowned-last ordering,\nmulti-location type fallbacks, directory mode, and owner mode.",
          "timestamp": "2026-04-03T11:14:37+02:00",
          "tree_id": "3115d70e1a49e2931141b1346f2dd8b1ba2d7b5d",
          "url": "https://github.com/fallow-rs/fallow/commit/e7c16e59db867a83f0c47b231cac985eed652209"
        },
        "date": 1775207767920,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3582858,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15850,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "ba0af01e313788b4726aee30efc8c0785c89e9b1",
          "message": "chore: release v2.11.0",
          "timestamp": "2026-04-03T11:16:17+02:00",
          "tree_id": "5224d714756e3888542c6c42f97697984bf099f7",
          "url": "https://github.com/fallow-rs/fallow/commit/ba0af01e313788b4726aee30efc8c0785c89e9b1"
        },
        "date": 1775207867728,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578514,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15844,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "ad6aefd99dfcbba905aca34200082fb3a6a698c4",
          "message": "feat: comprehensive human output improvements from panel review\n\nOrientation header: vital signs + analysis scope + \"start here\" nudge at\ntop of combined output, repeated in the Failed: line at the bottom.\n\nInformation hierarchy: directory rollup for >200 unused files with\n\"(project root)\" grouping for root-level files, test vs src split\nannotation, scoping hints (--workspace/--changed-since) on all truncation\npaths including rollups.\n\nTrust fixes: duplicate count now shows pairs not raw structs, \"churn\nhotspot\" terminology unified across combined and standalone modes, MI\nscore contextualized with good/moderate/low labels and scale legend,\npre-pluralized labels singularized for count=1.\n\nFalse positive reduction: generated code (generated) annotation on AJV\nvalidators, (type-only) tag on .d.ts circular dependency cycles,\nunused exports suppressed when file is already reported as unused.\n\nConfig guidance: dominant-directory signal with branched advice (source\ndirs suggest entry-point verification, test/example dirs suggest\nignorePatterns/--production with explanation), docs URLs on all advisory\nnotes, duplication mirror advisory at 80%+ rate.\n\nSuppression UX: inline hints gated at ≥3 items, file-level hint for\ncircular deps/boundary violations, config-level hint for directory\nrollups, auto-fix hint (fallow fix --dry-run) for fixable categories.\n\nSeverity defaults: unused_dev_dependencies and unused_optional_dependencies\nnow default to Warn (was Error). BREAKING for CI users relying on the old\ndefault.\n\nNew flags: --top N on dead-code check command, consistent with existing\n--top on dupes and health.\n\nFailed: line now includes health results and repeats the start-here\nrefactoring target for terminal scroll visibility.",
          "timestamp": "2026-04-03T19:35:32+02:00",
          "tree_id": "6aa89b5fe6990d278c67332e635e8fe432fb2887",
          "url": "https://github.com/fallow-rs/fallow/commit/ad6aefd99dfcbba905aca34200082fb3a6a698c4"
        },
        "date": 1775237837824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3572522,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15834,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "1008f2daac43bbc835870256d06aaff6c4023327",
          "message": "fix: suppressed-export ordering, --top test, gitignore proptest\n\n- Fix insert_test_src_split ordering: suppressed-export count now\n  inserts before the trailing blank line, keeping it visually\n  connected to the section it belongs to\n- Add test for --top flag effect on build_human_lines (reviewer\n  finding #4: verifies truncation at custom limit)\n- Add proptest-regressions/ to .gitignore",
          "timestamp": "2026-04-03T19:41:16+02:00",
          "tree_id": "d52685bb50da8bde780c3936b7f299be3c4648e0",
          "url": "https://github.com/fallow-rs/fallow/commit/1008f2daac43bbc835870256d06aaff6c4023327"
        },
        "date": 1775238156962,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3593114,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15870,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "86579fef424125f618f9676f41dcca57d307cf87",
          "message": "chore: regenerate schema.json, add singularization test, gitignore proptest\n\n- Regenerate schema.json to reflect devDeps/optionalDeps default change\n  from Error to Warn\n- Add test for count=1 singularization of pre-pluralized summary labels\n  (\"1 enum member\" not \"1 enum members\")\n- Add proptest-regressions/ to .gitignore",
          "timestamp": "2026-04-03T19:55:35+02:00",
          "tree_id": "cf88ec4f4d48f8952f1064c4be0c591afc4ca1b5",
          "url": "https://github.com/fallow-rs/fallow/commit/86579fef424125f618f9676f41dcca57d307cf87"
        },
        "date": 1775239017141,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3583354,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15854,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "28f45e286d4423b80f6bf6256df14cf633c21bbe",
          "message": "fix: improve section footer descriptions for clarity and actionability\n\nRewrite section footer descriptions to be more actionable:\n- \"Files not reachable from any entry point\" (was \"not imported or referenced\")\n- \"Exported symbols with no known consumers\" (was \"not imported by any reachable file\")\n- Split dep descriptions per category (dependencies/devDependencies/optionalDependencies)\n- \"Import paths that could not be resolved — check for missing packages\" (was generic)\n- \"Import cycles that can cause initialization failures\" (was \"files that import each other\")\n- Add boundary violations footer text\n- \"consider moving to devDependencies\" for type-only deps",
          "timestamp": "2026-04-03T20:02:58+02:00",
          "tree_id": "8edd14cb86a3e9c519a614f21e5231703f9997b5",
          "url": "https://github.com/fallow-rs/fallow/commit/28f45e286d4423b80f6bf6256df14cf633c21bbe"
        },
        "date": 1775239461125,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3584818,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15860,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534576,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5819,
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
          "id": "8932dc7c3f40e173b1445cc1fd507449148b5924",
          "message": "feat: panel review improvements — vital signs referents, baseline deltas, entry-point display, and blocker fixes\n\nImplements 22 items from the panel review improvement plan across 5 batches:\n\nBatch 1 (human output): MI legend gating, plugin discovery hint, config note\nthreshold, --effort filter, dynamicallyLoaded config, non-test nudge filter,\ncross-package circular deps, fixture_glob_patterns, summary footer filtered\ncounts, scale-aware nudge, advisory placement, mirrored directories in JSON,\nsecond-level rollup, --group-by package, publicPackages config, smarter init,\nundeclared workspace diagnostic, entry-point detection inline.\n\nBatch 2-5 (cross-cutting): vital signs percentage referents (\"63.5% (N of M)\"),\ncheck JSON entry_points object, baseline-aware deltas (BaselineDeltas struct),\n--summary flag wiring, MCP server params for --effort and --summary.\n\nBlocker fixes: filter non-package-name unlisted deps ($DIR, __barrel_optimize__),\nskip nudge when all targets are test/fixture paths, extend is_test_path with\nplayground/examples/generated-file heuristics.",
          "timestamp": "2026-04-03T23:56:18+02:00",
          "tree_id": "fd72ee20920258f2923d16563a13ca2a6b6fcb48",
          "url": "https://github.com/fallow-rs/fallow/commit/8932dc7c3f40e173b1445cc1fd507449148b5924"
        },
        "date": 1775253460682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3583642,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15857,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "7bcce6c5cc0d41420cc576286fbd00104dd50ed6",
          "message": "feat: complete --summary dispatch and JSON per-category summary counts\n\nWire the --summary flag through CLI arg → options → ReportContext dispatch.\nThree summary rendering functions added for check (category counts with\nseverity colors), dupes (families, groups, lines, rate), and health\n(functions analyzed, threshold, MI, score).\n\nAdd per-category summary counts object to check JSON output — enables\nCI dashboards to read issue counts without computing array lengths.",
          "timestamp": "2026-04-04T00:16:30+02:00",
          "tree_id": "df6940a8a8ff19018715b71cc104b6f568fc5d2e",
          "url": "https://github.com/fallow-rs/fallow/commit/7bcce6c5cc0d41420cc576286fbd00104dd50ed6"
        },
        "date": 1775254677271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3580738,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15851,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "fc0321f8aa0dc39a312d71aa92b2b6e8f8a514c8",
          "message": "chore: release v2.12.0",
          "timestamp": "2026-04-04T00:37:34+02:00",
          "tree_id": "bfbcc8910d8dfc87e1e9cb0bc51d55c5e8d3eb2b",
          "url": "https://github.com/fallow-rs/fallow/commit/fc0321f8aa0dc39a312d71aa92b2b6e8f8a514c8"
        },
        "date": 1775256034619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3575426,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15843,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "e82a7d1733469c9ff5ff4b4b72818e36f1ead127",
          "message": "style: fix trailing blank line in export fix tests",
          "timestamp": "2026-04-04T11:12:48+02:00",
          "tree_id": "c61033dae3a04e871279c4b6fd4de7571b2131ea",
          "url": "https://github.com/fallow-rs/fallow/commit/e82a7d1733469c9ff5ff4b4b72818e36f1ead127"
        },
        "date": 1775294081402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3570586,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15833,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "fb94c27136d55fd22de1b8204efea94d79161bb4",
          "message": "chore: release v2.12.1",
          "timestamp": "2026-04-04T11:22:02+02:00",
          "tree_id": "7f0d0ecba22c76bdd097d972ae68fe081503ea88",
          "url": "https://github.com/fallow-rs/fallow/commit/fb94c27136d55fd22de1b8204efea94d79161bb4"
        },
        "date": 1775295399137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3591858,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15871,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "31ad2b795659f758b0815386fdacc05d56844e61",
          "message": "chore: release v2.13.0",
          "timestamp": "2026-04-04T12:03:19+02:00",
          "tree_id": "05d19286a08e2d2d3c8da10469c4304354b81d1a",
          "url": "https://github.com/fallow-rs/fallow/commit/31ad2b795659f758b0815386fdacc05d56844e61"
        },
        "date": 1775297104770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3586546,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15863,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "h.raza1164@yahoo.com",
            "name": "Muhammad Hassan Raza",
            "username": "M-Hassan-Raza"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71790b18bec1f38a36bd3ecb7ae7e69a8b5d96ae",
          "message": "fix: align init hook CLI names (#43)",
          "timestamp": "2026-04-05T15:23:06+02:00",
          "tree_id": "d39c2898c45bf580390a370231e2231c4028fce4",
          "url": "https://github.com/fallow-rs/fallow/commit/71790b18bec1f38a36bd3ecb7ae7e69a8b5d96ae"
        },
        "date": 1775395467903,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3573098,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15837,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "f704663f6934ef7e8f522227c27285bc820fdb56",
          "message": "fix: replace legacy fallow check with fallow dead-code in user-facing messages",
          "timestamp": "2026-04-05T15:29:52+02:00",
          "tree_id": "eb693f7db712f487d194542b03750770e3daa0c1",
          "url": "https://github.com/fallow-rs/fallow/commit/f704663f6934ef7e8f522227c27285bc820fdb56"
        },
        "date": 1775395878620,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3591570,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15871,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "0d88519cb64edfca6142a28a772ac8c3aae0b012",
          "message": "chore: release v2.13.1",
          "timestamp": "2026-04-05T15:39:05+02:00",
          "tree_id": "22e95308560e66b8c93627dac0056cf318004b41",
          "url": "https://github.com/fallow-rs/fallow/commit/0d88519cb64edfca6142a28a772ac8c3aae0b012"
        },
        "date": 1775396433186,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3595730,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15879,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "3a61a3e4d421bedd3f99e542c3a6df1df0d024b2",
          "message": "fix: use dead-code instead of check in Failed summary line",
          "timestamp": "2026-04-05T19:54:55+02:00",
          "tree_id": "a0c5570162f534bd5392ad2022d9f3fa834bc18b",
          "url": "https://github.com/fallow-rs/fallow/commit/3a61a3e4d421bedd3f99e542c3a6df1df0d024b2"
        },
        "date": 1775411788079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3595338,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15877,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "48ee537e6dfdaa8c382024acc72070862b2ba466",
          "message": "fix: include plugin entry points in list mode (#45)",
          "timestamp": "2026-04-05T20:29:43+02:00",
          "tree_id": "4cb4f03b3faf49df4641fb44a2a1d928a794c2cd",
          "url": "https://github.com/fallow-rs/fallow/commit/48ee537e6dfdaa8c382024acc72070862b2ba466"
        },
        "date": 1775413868898,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3597666,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15883,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "d6fa214ed900fe1009c08ffe8a194e452e1946b8",
          "message": "chore: release v2.13.2",
          "timestamp": "2026-04-05T20:33:26+02:00",
          "tree_id": "a0b967cb692362166ffb2dad165200a91a01ce63",
          "url": "https://github.com/fallow-rs/fallow/commit/d6fa214ed900fe1009c08ffe8a194e452e1946b8"
        },
        "date": 1775414087704,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3570586,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15833,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "61c8cb97b5271f83ca4d4513c858b1b239720baa",
          "message": "fix: label health score deductions and metrics lines for clarity",
          "timestamp": "2026-04-05T20:51:48+02:00",
          "tree_id": "ba7fa121fee167c25f8595307a2f3568f1a9a007",
          "url": "https://github.com/fallow-rs/fallow/commit/61c8cb97b5271f83ca4d4513c858b1b239720baa"
        },
        "date": 1775415203752,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3584402,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15855,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "dca8c3017f7d2bfb056c1308ab5fa79f1262689b",
          "message": "fix: spell out maintainability instead of MI in all user-facing output",
          "timestamp": "2026-04-05T21:13:03+02:00",
          "tree_id": "2288463488835f884ca25a528766ab9ec6793602",
          "url": "https://github.com/fallow-rs/fallow/commit/dca8c3017f7d2bfb056c1308ab5fa79f1262689b"
        },
        "date": 1775416471818,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3576866,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15843,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "fda33d3ec9971efb55bbdd8af7b5a3692b2f76c7",
          "message": "fix: spell out dependencies instead of deps in all user-facing output",
          "timestamp": "2026-04-05T21:27:35+02:00",
          "tree_id": "adad5ce3ef8769a12289dd302573302f9014f466",
          "url": "https://github.com/fallow-rs/fallow/commit/fda33d3ec9971efb55bbdd8af7b5a3692b2f76c7"
        },
        "date": 1775417347211,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3581890,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15851,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "e004c98ae162291e935879551bab015fc67007c8",
          "message": "fix: keep boundaries opt-in in list output (#49)\n\n* test: cover list boundaries output\n\n* fix: keep boundaries opt-in in list output\n\n* test: format list boundaries assertions",
          "timestamp": "2026-04-05T21:49:38+02:00",
          "tree_id": "1f7e8f73a733c33ede411c33fb171df104cd8892",
          "url": "https://github.com/fallow-rs/fallow/commit/e004c98ae162291e935879551bab015fc67007c8"
        },
        "date": 1775418662947,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3580266,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15853,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "e927425d6a5ec9f831f5288c5c1588ab4772e6c9",
          "message": "fix: label audit metrics line, update stale command names and plugin counts\n\n- Add \"Metrics:\" label to audit vital signs line (same fix as combined.rs)\n- Replace legacy `fallow check` with `fallow dead-code` in bench-ci.sh and\n  conformance/run.sh\n- Correct plugin count from 84 to 85 across README, docs, and rules",
          "timestamp": "2026-04-05T21:58:23+02:00",
          "tree_id": "9600cd1d2a3a9cc2e03fe018df990ae239690f19",
          "url": "https://github.com/fallow-rs/fallow/commit/e927425d6a5ec9f831f5288c5c1588ab4772e6c9"
        },
        "date": 1775419195131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3564986,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15825,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "8950c4c74a6d26e1bac8568f22c563e6a8fc1547",
          "message": "feat: add section headers to dead-code human output\n\nVisually separates issue types into three categories:\n- Unused Code (files, exports, types, enum/class members)\n- Dependencies (unused, unlisted, unresolved, type-only, test-only)\n- Structure (duplicate exports, circular dependencies, boundary violations)\n\nAlso updates the dead-code command description to reflect all three categories.",
          "timestamp": "2026-04-05T22:06:12+02:00",
          "tree_id": "0742bcdb9d86917d42f0e3efb66e25f0de0fb334",
          "url": "https://github.com/fallow-rs/fallow/commit/8950c4c74a6d26e1bac8568f22c563e6a8fc1547"
        },
        "date": 1775419669597,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3590418,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15871,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "5045d6cb72ad88570d7263331c7d829d12844a3d",
          "message": "style: apply rustfmt formatting",
          "timestamp": "2026-04-05T22:13:19+02:00",
          "tree_id": "b75c04a6ce894d948966d9181d1bd79fa605885b",
          "url": "https://github.com/fallow-rs/fallow/commit/5045d6cb72ad88570d7263331c7d829d12844a3d"
        },
        "date": 1775420081093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3588770,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15867,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "d6206bfed89d0109df56dbbc35bc73b23b4fdca0",
          "message": "chore: release v2.13.3",
          "timestamp": "2026-04-05T22:24:13+02:00",
          "tree_id": "b1101c76898b7c4c586c33b5a6060b618d0af934",
          "url": "https://github.com/fallow-rs/fallow/commit/d6206bfed89d0109df56dbbc35bc73b23b4fdca0"
        },
        "date": 1775420743092,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3588090,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15865,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "628c8db924d10eed320430184edaf6727965fdad",
          "message": "fix: keep unreachable subtrees dead in unused file analysis (#51)\n\n* fix: keep unreachable subtrees dead in unused file analysis\n\n* test: cover unreachable subtree edge cases",
          "timestamp": "2026-04-06T08:27:17+02:00",
          "tree_id": "b9ad3f1b02c24e54504db1e198ad3b5f5797ded5",
          "url": "https://github.com/fallow-rs/fallow/commit/628c8db924d10eed320430184edaf6727965fdad"
        },
        "date": 1775456923495,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3596594,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15879,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
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
          "id": "c78e241a27479311715dedcc0d8984bed19a4ec1",
          "message": "chore: release v2.13.4",
          "timestamp": "2026-04-06T09:17:00+02:00",
          "tree_id": "14a7d5c9dabd8525133e2294870a812b20e744ba",
          "url": "https://github.com/fallow-rs/fallow/commit/c78e241a27479311715dedcc0d8984bed19a4ec1"
        },
        "date": 1775459917037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3591178,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15869,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 534716,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5821,
            "unit": "allocations"
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
          "id": "80669b3be214442eecf11be73a2beecdc7eeff0a",
          "message": "feat: add static coverage gaps to health (#53)\n\nfeat: add static coverage gaps to health",
          "timestamp": "2026-04-06T13:12:58+02:00",
          "tree_id": "1af722df2d997da5666ed7be4df0bd686e6896d9",
          "url": "https://github.com/fallow-rs/fallow/commit/80669b3be214442eecf11be73a2beecdc7eeff0a"
        },
        "date": 1775474064612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3580895,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15863,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 535949,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "fede7734a7708f05d79bd3ff863091c7c5b1381f",
          "message": "docs: add coverage-gaps to schema, docs, and stable flags list",
          "timestamp": "2026-04-06T13:13:42+02:00",
          "tree_id": "d19ab1281cf238c2052eb3511b67f7ef806c5b90",
          "url": "https://github.com/fallow-rs/fallow/commit/fede7734a7708f05d79bd3ff863091c7c5b1381f"
        },
        "date": 1775474199020,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3589007,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15875,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 535949,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "53ded201ee9e51db70149cd87a16d6ce72061862",
          "message": "chore: release v2.14.0",
          "timestamp": "2026-04-06T13:16:34+02:00",
          "tree_id": "39bf7d0362d3c175eb5dc2b853ba478b9dc94ccd",
          "url": "https://github.com/fallow-rs/fallow/commit/53ded201ee9e51db70149cd87a16d6ce72061862"
        },
        "date": 1775474286538,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3594135,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15885,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 535949,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "f0eabbe1001a8bae4619bf0872c68539003bc8ca",
          "message": "feat: coverage gap improvements and MCP integration\n\n- Add suppress-file action to coverage gap JSON output for incremental adoption\n- Filter CSS/SCSS/LESS/SASS files from coverage gap analysis (not testable)\n- Group barrel file re-exports in human output (collapse >10 exports per file)\n- Add coverage_gaps param to MCP health tool with description update",
          "timestamp": "2026-04-06T16:43:37+02:00",
          "tree_id": "cc7a7021c6e739fa32f2b7d6b784ed09f762b3f0",
          "url": "https://github.com/fallow-rs/fallow/commit/f0eabbe1001a8bae4619bf0872c68539003bc8ca"
        },
        "date": 1775486699972,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3584951,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15869,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 535949,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "75402d16385f847b68829c094a7de09814bf892b",
          "message": "feat: coverage gap improvements and MCP integration\n\n- Add suppress-file action to coverage gap JSON output for incremental adoption\n- Filter CSS/SCSS/LESS/SASS files from coverage gap analysis (not testable)\n- Group barrel file re-exports in human output (collapse >10 exports per file)\n- Add coverage_gaps param to MCP health tool with description update",
          "timestamp": "2026-04-06T16:45:28+02:00",
          "tree_id": "9a27c1520453daaa495a9196eae39f79e17e02c6",
          "url": "https://github.com/fallow-rs/fallow/commit/75402d16385f847b68829c094a7de09814bf892b"
        },
        "date": 1775486857732,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3572575,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15847,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 535949,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "f1aee24dc81bf57ac0940a59ac790e6ae2e2230f",
          "message": "feat: wire coverage-gaps into inline suppression system\n\nAdd IssueKind::CoverageGaps variant (discriminant 16) so\n`// fallow-ignore-file coverage-gaps` comments are parsed and\nhonored. Coverage gap analysis now checks file suppressions\nbefore counting runtime files or reporting untested exports.",
          "timestamp": "2026-04-06T16:51:00+02:00",
          "tree_id": "d1de27ff0e3c8ceead662d4676096233f82c4dc5",
          "url": "https://github.com/fallow-rs/fallow/commit/f1aee24dc81bf57ac0940a59ac790e6ae2e2230f"
        },
        "date": 1775487142476,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3598975,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15895,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 535949,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "ee2a012538ca83af772fa0bd87a7d3ef9a28bb93",
          "message": "test: add integration test for coverage-gaps inline suppression\n\nVerifies that `// fallow-ignore-file coverage-gaps` excludes a file\nand its exports from coverage gap analysis end-to-end.",
          "timestamp": "2026-04-06T17:17:48+02:00",
          "tree_id": "b35275bb72554cc68c5bacac3d5100d0ec05c02e",
          "url": "https://github.com/fallow-rs/fallow/commit/ee2a012538ca83af772fa0bd87a7d3ef9a28bb93"
        },
        "date": 1775488750866,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3582255,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15867,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 535949,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "15302258efc225303ba4d0f0ca6354a1752dd639",
          "message": "chore: release v2.14.1",
          "timestamp": "2026-04-06T17:19:13+02:00",
          "tree_id": "8808c56d3dbcecda57ea97b0fa89311d55e21989",
          "url": "https://github.com/fallow-rs/fallow/commit/15302258efc225303ba4d0f0ca6354a1752dd639"
        },
        "date": 1775488836692,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3610036,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16112,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 535949,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "3ffa128a9c0d90ee1c1cdb418e7090df65407f0e",
          "message": "fix: reduce false positives for type-only cycles and duplicate exports\n\nTwo detection accuracy improvements addressing #54:\n\n1. Type-only circular dependency filtering: `import type` edges now carry\n   `is_type_only` through `ImportedSymbol` to cycle detection. Edges where\n   all symbols are type-only are excluded from Tarjan's SCC, preventing\n   false circular dependency reports from type-only bidirectional imports.\n\n2. Duplicate export common-importer filter: duplicate exports are only\n   reported when at least two files sharing the same export name also share\n   a common importer in the module graph. Unrelated leaf files (e.g.,\n   SvelteKit route modules in different directories) that coincidentally\n   export the same name are no longer flagged.",
          "timestamp": "2026-04-06T19:38:24+02:00",
          "tree_id": "b4c6199b69b7d632d29da37f24c6fcf16b02be7b",
          "url": "https://github.com/fallow-rs/fallow/commit/3ffa128a9c0d90ee1c1cdb418e7090df65407f0e"
        },
        "date": 1775498057925,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3604204,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16102,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 537549,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "1a6a31fba5b6e99386ba0da57de85cc6ccfc2ca7",
          "message": "test: add integration test fixtures for type-only cycles and duplicate exports\n\nEnd-to-end fixtures validating the #54 false positive fixes:\n\n- type-only-cycle: user.ts and post.ts with bidirectional `import type`\n  verifies no circular dependency is reported\n- route-duplicate-exports: SvelteKit-style route files with same export\n  names but separate importers, plus shared utils with a common importer\n  verifies the common-importer filter works correctly",
          "timestamp": "2026-04-06T20:07:51+02:00",
          "tree_id": "1ebfb190a1ab67ffabcf86866a1257e737c9e92b",
          "url": "https://github.com/fallow-rs/fallow/commit/1a6a31fba5b6e99386ba0da57de85cc6ccfc2ca7"
        },
        "date": 1775498957128,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3624508,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16138,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 537549,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
            "unit": "allocations"
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
          "id": "da2dc07b4718a9331880bea23705c3b593eea056",
          "message": "Merge pull request #58 from M-Hassan-Raza/feat/sfc-template-usage\n\nfeat: track template-visible import usage in SFCs",
          "timestamp": "2026-04-06T20:15:42+02:00",
          "tree_id": "bc7e6477f60ffabd9b94c0c528b4f7cc1687a41f",
          "url": "https://github.com/fallow-rs/fallow/commit/da2dc07b4718a9331880bea23705c3b593eea056"
        },
        "date": 1775499426420,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3614540,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16118,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 537549,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "4bdb26a6ae0c90b99945a56f95f70f88def04245",
          "message": "fix: bump CACHE_VERSION to 20 for SFC template extraction changes",
          "timestamp": "2026-04-06T20:20:41+02:00",
          "tree_id": "1470ce28f39fc28ed720ba0d3bb594643e63d462",
          "url": "https://github.com/fallow-rs/fallow/commit/4bdb26a6ae0c90b99945a56f95f70f88def04245"
        },
        "date": 1775499718778,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3628356,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16140,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 537549,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kamilthedev@gmail.com",
            "name": "Kamil",
            "username": "KamilDev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "949316dd543825d8ad1ec0992415039aa821fecf",
          "message": "fix: use dunce::canonicalize to avoid \\?\\ path prefix on Windows (#55)",
          "timestamp": "2026-04-06T20:25:00+02:00",
          "tree_id": "4e1a65ae2d493c70c97a1392752a0638b41c589e",
          "url": "https://github.com/fallow-rs/fallow/commit/949316dd543825d8ad1ec0992415039aa821fecf"
        },
        "date": 1775499984117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3617916,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16122,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 537549,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "e00f1724786da9266e6bae510fb350cd6c855b11",
          "message": "fix: propagate generated_import_patterns and path_aliases from workspace plugins\n\nThe workspace plugin merge loop was not merging generated_import_patterns\nor path_aliases from workspace-level plugins. This caused SvelteKit's\n$types suppression and $lib/ alias to silently fail in monorepo setups,\nproducing false-positive unresolved imports for every ./$types reference.\n\nFixes #54 ($types portion)",
          "timestamp": "2026-04-06T21:14:36+02:00",
          "tree_id": "b72c49f555266cd57cd6fc4e65621888153bb58b",
          "url": "https://github.com/fallow-rs/fallow/commit/e00f1724786da9266e6bae510fb350cd6c855b11"
        },
        "date": 1775502958111,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3627100,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16138,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 537549,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "a670b7c16f6c7884435991b27c1def4831a38c95",
          "message": "chore: release v2.14.2",
          "timestamp": "2026-04-06T21:16:27+02:00",
          "tree_id": "997d4c73cb95682678e33ed2a09af6bb0414c6a9",
          "url": "https://github.com/fallow-rs/fallow/commit/a670b7c16f6c7884435991b27c1def4831a38c95"
        },
        "date": 1775503112075,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3611636,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16112,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 537549,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "52029bed1d363f0fc43035201762e64d763a2705",
          "message": "feat: expand framework convention and template coverage (#59)\n\n- Expand Next.js convention handling: App Router/Pages Router special files,\n  route segment exports, mdx-components, instrumentation, proxy, and\n  transpilePackages treated as framework usage\n- Parse config aliases for Vite, Nuxt, and SvelteKit, feed into resolver\n  fallbacks so config-defined aliases stop producing false reports\n- Improve Vue and Svelte SFC template extraction: component tags, custom\n  directives, v-on=\"handlers\", Svelte attribute expressions, shorthand\n  props, and $store subscriptions mark imports as used\n- Harden unused export analysis so entry-point files with framework-used\n  exports still report unrelated unused helpers\n- Add Nuxt srcDir support with custom alias, imports.dirs, and components\n  directory detection\n- Bump CACHE_VERSION to 21 for new template extraction semantics\n- Fix Svelte template scanner index advancement after HTML tag parsing\n- Fix panic on malformed Svelte brace attribute expressions\n\nCloses #59",
          "timestamp": "2026-04-06T22:48:19+02:00",
          "tree_id": "9908c120264b7097d39be203e0d3e837b3e752b6",
          "url": "https://github.com/fallow-rs/fallow/commit/52029bed1d363f0fc43035201762e64d763a2705"
        },
        "date": 1775508592137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3622260,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16128,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 537549,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "1749b8ecacdd45be89a43c09973aab43f87cd249",
          "message": "chore: release v2.15.0",
          "timestamp": "2026-04-06T22:50:09+02:00",
          "tree_id": "e3d485f2fafdd21638a43a93a6644736c262c389",
          "url": "https://github.com/fallow-rs/fallow/commit/1749b8ecacdd45be89a43c09973aab43f87cd249"
        },
        "date": 1775508694923,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3612604,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16114,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 537549,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "e9f639c22ee528aa40afcd90423172db148df8f4",
          "message": "chore: release v2.15.0",
          "timestamp": "2026-04-06T23:03:18+02:00",
          "tree_id": "e3d485f2fafdd21638a43a93a6644736c262c389",
          "url": "https://github.com/fallow-rs/fallow/commit/e9f639c22ee528aa40afcd90423172db148df8f4"
        },
        "date": 1775509510181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3619276,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16126,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 537549,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "682617040f37ed60c90467752c86623946831e38",
          "message": "test: add route group parentheses coverage for SvelteKit $types (#54)\n\nAdds a fixture file inside nested route groups (app)/(admin) importing\n./$types to verify that parentheses in route group names do not break\ngenerated import suppression. The matching operates on the specifier\nstring, not the file path, so parentheses are irrelevant.",
          "timestamp": "2026-04-06T23:38:56+02:00",
          "tree_id": "54cadec0b0442477515d95dee939a05c16df8ea0",
          "url": "https://github.com/fallow-rs/fallow/commit/682617040f37ed60c90467752c86623946831e38"
        },
        "date": 1775511624242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3628564,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16144,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 537549,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "21e62ef76d6815b6b77a992c05a0119530f34094",
          "message": "fix: normalize Windows path separators in health coverage-gaps tests\n\nBackslash paths on Windows caused 3 coverage-gaps test assertions to\nfail. Normalize at the collection point with .replace('\\\\', \"/\") so\nends_with/contains checks work cross-platform.",
          "timestamp": "2026-04-06T23:48:58+02:00",
          "tree_id": "6271baf285760342c4d5d42ea1aa730ecbc47f9f",
          "url": "https://github.com/fallow-rs/fallow/commit/21e62ef76d6815b6b77a992c05a0119530f34094"
        },
        "date": 1775512224515,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3609700,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 16108,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 537549,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5826,
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
          "id": "ce34a911c04101597021ab985cb8b64233e7769e",
          "message": "perf: lazy complexity, packed ModuleNode flags, smart BFS, dupe detection\n\nSkip per-function complexity AST walk in the dead-code pipeline (only\nneeded by health command), reducing full_pipeline_1000 by ~35%.  Cache\nhits with missing complexity are skipped when the caller needs it,\npreventing cross-contamination between check and health commands.\n\nPack ModuleNode's 5 boolean flags into a u8 bitfield, shrinking the\nstruct from 104 to 96 bytes for better cache line utilization.\n\nSkip redundant BFS passes in mark_reachable when runtime entry points\nequal overall entry points or test entry points are empty (common case\nvia build()).\n\nOptimize dupe detection: explicit HashMap entry match in ranking, direct\nloop for line table construction, cleaner path index in subset removal.",
          "timestamp": "2026-04-07T00:41:42+02:00",
          "tree_id": "a378206b743b4ef3af75f7ed64be2e1ff70e43b1",
          "url": "https://github.com/fallow-rs/fallow/commit/ce34a911c04101597021ab985cb8b64233e7769e"
        },
        "date": 1775515396029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3587488,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15526,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "3861d72528b1815c1066cfbaa48be252c541c337",
          "message": "chore: release v2.16.0",
          "timestamp": "2026-04-07T07:40:46+02:00",
          "tree_id": "b58847e1861aa27174fa473fb0550e5c109e2e75",
          "url": "https://github.com/fallow-rs/fallow/commit/3861d72528b1815c1066cfbaa48be252c541c337"
        },
        "date": 1775540572855,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3581888,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15518,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "da3f00fda8a08e6c63388f2329d8df3afee5be71",
          "message": "test: add integration tests for root-relative HTML resolution\n\nAdd fixture and 3 integration tests covering root-relative paths\n(/src/entry.ts, /src/global.css) in HTML files. Also add missing\ncanonical_fallback lookup for symlink parity with the main resolution\npath.",
          "timestamp": "2026-04-07T08:26:07+02:00",
          "tree_id": "30b22b849e8597ba2cc23c6f405f0cd936f6211c",
          "url": "https://github.com/fallow-rs/fallow/commit/da3f00fda8a08e6c63388f2329d8df3afee5be71"
        },
        "date": 1775543275885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3569720,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15500,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "8dc91a2b81a0e696a765f0e164835210e1101435",
          "message": "feat: harden Vue and Nuxt framework edge cases (#60)",
          "timestamp": "2026-04-07T09:40:31+02:00",
          "tree_id": "aa7bbc8e3bb49614c5b6b9c2a8af35ed2f511ac3",
          "url": "https://github.com/fallow-rs/fallow/commit/8dc91a2b81a0e696a765f0e164835210e1101435"
        },
        "date": 1775547724068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3586624,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15526,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "b434ec77dddff007406ec3267cfa42840e57dfd4",
          "message": "chore: release v2.17.0",
          "timestamp": "2026-04-07T10:18:42+02:00",
          "tree_id": "bf4fd6f117333efd1ab0ad31ee1304c2e91cf2c5",
          "url": "https://github.com/fallow-rs/fallow/commit/b434ec77dddff007406ec3267cfa42840e57dfd4"
        },
        "date": 1775550017874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578120,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15512,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "a9c906bd202f254b954dc31e732bf8e06e5f2853",
          "message": "chore: release v2.17.1",
          "timestamp": "2026-04-07T10:58:17+02:00",
          "tree_id": "32d50cbb6874ddb21b12c82e2f47eb363bfebf06",
          "url": "https://github.com/fallow-rs/fallow/commit/a9c906bd202f254b954dc31e732bf8e06e5f2853"
        },
        "date": 1775552396257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3573672,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15504,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "96be261b4fa3cc4daf6a50ea76c1715b6ba355fb",
          "message": "fix(action): use metric labels, add first-run hint, improve CI docs\n\n- Use trend metric .label field (e.g., \"avg complexity\") instead of\n  hardcoded names in delta header for robustness and clarity\n- Add progressive disclosure footnote on first run (score present but\n  no trend): suggests enabling save-snapshot for trend tracking\n- Fix action.yml descriptions to mention bare command support and\n  snapshot location (.fallow/snapshots/)\n- Add inline comments to GitLab CI env vars for discoverability",
          "timestamp": "2026-04-07T11:53:42+02:00",
          "tree_id": "abadf24e78d4f2540485b79b1112c5ad02f8d63b",
          "url": "https://github.com/fallow-rs/fallow/commit/96be261b4fa3cc4daf6a50ea76c1715b6ba355fb"
        },
        "date": 1775555959361,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3583352,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15524,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "f4b28b6229cab9ac6dd8d8e9bccbf08098ceb643",
          "message": "chore: release v2.18.0",
          "timestamp": "2026-04-07T12:04:41+02:00",
          "tree_id": "03847cd5bb04cac27726b72b27e344c0b7228c09",
          "url": "https://github.com/fallow-rs/fallow/commit/f4b28b6229cab9ac6dd8d8e9bccbf08098ceb643"
        },
        "date": 1775556376010,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3589632,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15534,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "ef6f521dfd40c5a4dbd2f38897c22826eb677f2c",
          "message": "test: add integration tests for unused fixtures\n\n- barrel-default-reexport: verify unused Card re-export detected,\n  Button correctly recognized as used\n- config-toml-project: verify fallow.toml config loading, rule\n  severity parsing, and full analysis pipeline with TOML config\n- workspace-nested-exports: verify dist/esm/ exports map paths\n  resolve back to source files via fallback",
          "timestamp": "2026-04-07T13:18:41+02:00",
          "tree_id": "80fcfb6df782f6a49ee42f7ad5a7211f8628ed14",
          "url": "https://github.com/fallow-rs/fallow/commit/ef6f521dfd40c5a4dbd2f38897c22826eb677f2c"
        },
        "date": 1775561110395,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3567392,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15494,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "324fbba6d9acc7bbf694654a148206a55ebe505a",
          "message": "chore: low-priority quality improvements from audit\n\n- Decompose run_combined from 275 to 127 lines (4 extracted functions)\n- Narrow tokio features from \"full\" to 6 specific features\n- Move miette fancy feature from config to CLI only\n- Add --all-targets to pre-commit/pre-push hooks\n- Add npm ecosystem entries to Dependabot (vscode, npm wrapper)\n- Replace magic numbers: 86400 -> SECS_PER_DAY, 30 -> COGNITIVE_EXTRACTION_THRESHOLD\n- Fix release.yml: publish-crates needs build, remove duplicate npm install\n- Switch test temp dirs to tempfile::tempdir() for RAII cleanup\n- Add LSP boundary violation diagnostic tests (5 tests)\n- Add plugin resolve_config tests for tsup, rollup, rolldown (20 tests)",
          "timestamp": "2026-04-07T13:42:06+02:00",
          "tree_id": "7a02bff40c85b666f6c1e0e11a698bbd982f24e3",
          "url": "https://github.com/fallow-rs/fallow/commit/324fbba6d9acc7bbf694654a148206a55ebe505a"
        },
        "date": 1775562224762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3580448,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15518,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "c684f8f965af619e67e9e3d949767e9c70ca9622",
          "message": "refactor: replace bincode with bitcode for cache serialization\n\nBincode is archived and unmaintained. Bitcode provides the same\nEncode/Decode derive pattern with smaller output and faster\nencode/decode. Bump CACHE_VERSION 21→22 to invalidate old caches.",
          "timestamp": "2026-04-07T13:53:46+02:00",
          "tree_id": "c3ce508c1571d4efa97d9fb0fd59972785258fd8",
          "url": "https://github.com/fallow-rs/fallow/commit/c684f8f965af619e67e9e3d949767e9c70ca9622"
        },
        "date": 1775563151781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3577440,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15510,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "20f4148bb7c0ce7d4de8e429eaa202dc874b44f0",
          "message": "chore(deps): bump rmcp from 1.2.0 to 1.3.0 (#70)\n\nBumps [rmcp](https://github.com/modelcontextprotocol/rust-sdk) from 1.2.0 to 1.3.0.\n- [Release notes](https://github.com/modelcontextprotocol/rust-sdk/releases)\n- [Changelog](https://github.com/modelcontextprotocol/rust-sdk/blob/main/release-plz.toml)\n- [Commits](https://github.com/modelcontextprotocol/rust-sdk/compare/rmcp-v1.2.0...rmcp-v1.3.0)\n\n---\nupdated-dependencies:\n- dependency-name: rmcp\n  dependency-version: 1.3.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-07T14:04:13+02:00",
          "tree_id": "45ab112165f78d4117601886ab2919ce3ecb6ba2",
          "url": "https://github.com/fallow-rs/fallow/commit/20f4148bb7c0ce7d4de8e429eaa202dc874b44f0"
        },
        "date": 1775563572761,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3583352,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15524,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "fd4aeed83d72054e5ea39f595c59ea34cbda35ce",
          "message": "chore(deps): bump the oxc group with 7 updates (#67)\n\nBumps the oxc group with 7 updates:\n\n| Package | From | To |\n| --- | --- | --- |\n| [oxc_allocator](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_ast](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_ast_visit](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_parser](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_semantic](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_span](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n| [oxc_syntax](https://github.com/oxc-project/oxc) | `0.122.0` | `0.123.0` |\n\n\nUpdates `oxc_allocator` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_ast` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_ast_visit` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_parser` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_semantic` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_span` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\nUpdates `oxc_syntax` from 0.122.0 to 0.123.0\n- [Release notes](https://github.com/oxc-project/oxc/releases)\n- [Changelog](https://github.com/oxc-project/oxc/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc/compare/crates_v0.122.0...crates_v0.123.0)\n\n---\nupdated-dependencies:\n- dependency-name: oxc_allocator\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_ast\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_ast_visit\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_parser\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_semantic\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_span\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n- dependency-name: oxc_syntax\n  dependency-version: 0.123.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: oxc\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-07T14:06:47+02:00",
          "tree_id": "af4578715f266b33af55b71e8510b27bc92aa801",
          "url": "https://github.com/fallow-rs/fallow/commit/fd4aeed83d72054e5ea39f595c59ea34cbda35ce"
        },
        "date": 1775563743923,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578696,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15512,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "0dee83f4a5e0650a0dd0975f71672b7b2692c728",
          "message": "fix(extract): bump CACHE_VERSION for this.field chained access tracking\n\nInvalidates stale caches that lack the new MemberAccess entries with\nsynthetic \"this.field\" object keys added in #63. Also documents the\nchained access pattern in detection.md.",
          "timestamp": "2026-04-07T14:24:54+02:00",
          "tree_id": "72ed7a6c719003b4079177d4e29717c028e491d1",
          "url": "https://github.com/fallow-rs/fallow/commit/0dee83f4a5e0650a0dd0975f71672b7b2692c728"
        },
        "date": 1775564805570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578904,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15516,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "4ab51218db1aa28f1c020ff05429f6dec6d99731",
          "message": "chore: release v2.18.1",
          "timestamp": "2026-04-07T15:15:41+02:00",
          "tree_id": "721ba0103fbd3fdfb8dbfb9543554823e9791d22",
          "url": "https://github.com/fallow-rs/fallow/commit/4ab51218db1aa28f1c020ff05429f6dec6d99731"
        },
        "date": 1775567871324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3587200,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15526,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "4ddfaf43529cc55cded694b921f22cd0a02d0559",
          "message": "chore: release v2.18.2",
          "timestamp": "2026-04-07T16:06:14+02:00",
          "tree_id": "0baaec0ca3593326969f85c0ec1e3d40e338d33f",
          "url": "https://github.com/fallow-rs/fallow/commit/4ddfaf43529cc55cded694b921f22cd0a02d0559"
        },
        "date": 1775570861893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3575032,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15508,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mohamd514.m@gmail.com",
            "name": "Muhammad Swalha",
            "username": "swalha1999"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23b1d4c5c99022e6fe1c7084ae1f7b4ab5a6fa5c",
          "message": "fix: handle `export { ... }` specifier lists in fix command (#74)\n\nPreviously, `fallow fix` would strip `export ` from `export { A, B }`\nlines, leaving invalid `{ A, B }` syntax. Now it properly handles\nnamed export lists by removing individual specifiers or deleting the\nentire line when all specifiers are unused.\n\nHandles:\n- `export { A, B, C }` — remove individual unused specifiers\n- `export { A, B } from \"./mod\"` — same with re-exports\n- `export type { A, B }` — same for type exports\n- `export { A as B }` — aliased specifiers\n- Delete entire line when all specifiers are removed",
          "timestamp": "2026-04-07T16:17:44+02:00",
          "tree_id": "e9bcbaf5667d60820219813160ebd7be558a8070",
          "url": "https://github.com/fallow-rs/fallow/commit/23b1d4c5c99022e6fe1c7084ae1f7b4ab5a6fa5c"
        },
        "date": 1775571558520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3584504,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15524,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "618337cb6880ce422a212f6aa50c7773332a6c78",
          "message": "refactor(fix): robustify export type whitespace detection",
          "timestamp": "2026-04-07T16:19:06+02:00",
          "tree_id": "af56e304c467eb53ed9c4db5e56372422f9f9f12",
          "url": "https://github.com/fallow-rs/fallow/commit/618337cb6880ce422a212f6aa50c7773332a6c78"
        },
        "date": 1775571652444,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3574064,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15506,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "e24ccda4e623128111b49cd10b8260923b72d08e",
          "message": "chore: release v2.18.3",
          "timestamp": "2026-04-07T16:39:29+02:00",
          "tree_id": "2a5f4d1813696868d3cea7d3cc1fdfb510a0c1cd",
          "url": "https://github.com/fallow-rs/fallow/commit/e24ccda4e623128111b49cd10b8260923b72d08e"
        },
        "date": 1775572862703,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3590312,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15536,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "4d530b570a3be4f496d4f98fde3af8cf87631a58",
          "message": "feat: Angular template tracking for external HTML files\n\nParse @Component decorators to extract templateUrl/styleUrl references,\ncreating graph edges that prevent false unused-file reports. Scan Angular\nHTML templates for identifier references in interpolation ({{ }}),\nproperty bindings ([prop]), event bindings ((event)), two-way bindings\n([(ngModel)]), structural directives (*ngIf, *ngFor), Angular 17+\ncontrol flow (@if, @for, @switch), and pipes (| pipeName). Bridge\ntemplate-referenced identifiers to component class members to prevent\nfalse unused-class-member reports.\n\nCloses #73",
          "timestamp": "2026-04-07T17:41:41+02:00",
          "tree_id": "3a5ff13c1694ec313e245cab2577e9da1504bb9b",
          "url": "https://github.com/fallow-rs/fallow/commit/4d530b570a3be4f496d4f98fde3af8cf87631a58"
        },
        "date": 1775576619418,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3580840,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15520,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kamilthedev@gmail.com",
            "name": "KamilDev",
            "username": "KamilDev"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a67f9c5c617e9bc477da106c242bc7aea88de1d6",
          "message": "fix(extract): track class instances through factory initializers (#79)\n\nWhen a class is instantiated inside a factory function passed to a\nwrapper like React's useState, e.g. `const [svc] = useState(() => new\nMyService())`, the first array-destructured binding is now recognized\nas an instance of that class, so member accesses on it correctly count\nas usage.\n\nHandles arrow expression bodies, arrow block bodies, and function\nexpressions. Built-in constructors are filtered. Whole-object use\npropagation works through the factory pattern.\n\nCloses #79",
          "timestamp": "2026-04-07T19:31:02+02:00",
          "tree_id": "ebf820523170b03366fec0a0f75ff850dcb2723c",
          "url": "https://github.com/fallow-rs/fallow/commit/a67f9c5c617e9bc477da106c242bc7aea88de1d6"
        },
        "date": 1775583155855,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3585000,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15528,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "b16139982a6b342e09f7a6cad7710da59fb54798",
          "message": "chore: release v2.19.0",
          "timestamp": "2026-04-07T19:52:22+02:00",
          "tree_id": "7e71084079a9bf4c00c4ec7dab9e716ff608aa1d",
          "url": "https://github.com/fallow-rs/fallow/commit/b16139982a6b342e09f7a6cad7710da59fb54798"
        },
        "date": 1775584440999,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3589056,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15534,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
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
          "id": "f192c52ab78007cf0a06cb9a90e80816caeee040",
          "message": "refactor: split large modules into focused submodules\n\nSplit graph/build.rs narrowing helpers into graph/narrowing.rs and\nanalyze/predicates.rs into predicates/{file,import,lifecycle}.rs for\nbetter cohesion. Zero API changes, all call sites unchanged.",
          "timestamp": "2026-04-07T19:54:23+02:00",
          "tree_id": "2e801a594aea5b7b4f298680d8cea6a3acc07a94",
          "url": "https://github.com/fallow-rs/fallow/commit/f192c52ab78007cf0a06cb9a90e80816caeee040"
        },
        "date": 1775584664359,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3582176,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15518,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519141,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5526,
            "unit": "allocations"
          }
        ]
      }
    ]
  }
}