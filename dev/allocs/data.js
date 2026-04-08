window.BENCHMARK_DATA = {
  "lastUpdate": 1775646137828,
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
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6f461b6f1968810f71cec0f17b70c32674d9d1f5",
          "message": "fix: skip duplicate-export for value/type declaration merging\n\nTypeScript allows a const and a type to share the same name via\ndeclaration merging. This is idiomatic with Zod (`export const Status =\nz.enum([...]); export type Status = z.infer<typeof Status>`), Prisma\ngenerated types, and class+interface patterns. These were falsely\nflagged as duplicate exports because the detection only compared names\nwithout considering is_type_only.\n\nNow tracks whether each export is type-only and skips groups where\nexports span both value and type namespaces, unless either namespace\nalone has cross-file duplicates.\n\nCloses #81",
          "timestamp": "2026-04-07T21:23:45+02:00",
          "tree_id": "c86bfbf3f3c176a32af7ddf46df428a6cd278ec0",
          "url": "https://github.com/fallow-rs/fallow/commit/6f461b6f1968810f71cec0f17b70c32674d9d1f5"
        },
        "date": 1775589921254,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3609952,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15558,
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
          "id": "518aea81f2bd3dbc6c1c983a7e8e7c05f9db7c0f",
          "message": "chore: release v2.19.1",
          "timestamp": "2026-04-07T21:26:54+02:00",
          "tree_id": "5c4b1769d0b51c144905f106e474f11fbd741c7f",
          "url": "https://github.com/fallow-rs/fallow/commit/518aea81f2bd3dbc6c1c983a7e8e7c05f9db7c0f"
        },
        "date": 1775590110600,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3586064,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15514,
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
          "id": "8004a7f34830d528770197a77f9ca4d5d10ec79c",
          "message": "test: improve coverage for plugins, specifier resolution, results, and duplicate detection\n\nAdd 105 tests across 7 files targeting the largest coverage gaps:\nplugins (tailwind, playwright, semantic_release, tsdown), resolve\nspecifier classification, results sort/serialization, and clone\ndetection edge cases. Overall coverage 90.2% to 90.6%.",
          "timestamp": "2026-04-07T21:49:48+02:00",
          "tree_id": "d44939c849f3687cfcdc87b10b6d9d32909283c0",
          "url": "https://github.com/fallow-rs/fallow/commit/8004a7f34830d528770197a77f9ca4d5d10ec79c"
        },
        "date": 1775591578875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3586376,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "e51d40440c4cc37febfd2be9c730f5b9a00484ac",
          "message": "test: improve coverage for svelte, shared templates, config format, gatsby, and churn\n\nAdd 153 tests across 5 files: svelte template parsing (42), shared\ntemplate utilities (64), config format detection (4), gatsby plugin\n(12), and git churn analysis (31). Overall coverage 90.6% to 90.9%.",
          "timestamp": "2026-04-07T22:57:08+02:00",
          "tree_id": "903669856c8e0d9d3141f4c5a8a9a92cb9f8a999",
          "url": "https://github.com/fallow-rs/fallow/commit/e51d40440c4cc37febfd2be9c730f5b9a00484ac"
        },
        "date": 1775595517475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578528,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15502,
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
          "id": "e1fed16c3ae8e3de70fd2bfcd922b8a81f1c60c2",
          "message": "chore: apply rustfmt to test files from coverage session",
          "timestamp": "2026-04-08T00:06:06+02:00",
          "tree_id": "ea28275757ea247e3224d1c86604347d0716bc0a",
          "url": "https://github.com/fallow-rs/fallow/commit/e1fed16c3ae8e3de70fd2bfcd922b8a81f1c60c2"
        },
        "date": 1775599657554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3591584,
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
          "id": "621225af0cf364089b9b1684068b9ec7a4c5f794",
          "message": "chore: release v2.19.2",
          "timestamp": "2026-04-08T00:08:56+02:00",
          "tree_id": "0b517965cd9c591cea4a3b699f166993359167f3",
          "url": "https://github.com/fallow-rs/fallow/commit/621225af0cf364089b9b1684068b9ec7a4c5f794"
        },
        "date": 1775599839261,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3582400,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "59cf13a3fb42a09d19145257a898c9c4a77d5a41",
          "message": "fix: skip create_resolver tests under Miri (statx unsupported)\n\nTests directly calling specifier::create_resolver() trigger oxc_resolver\nwhich uses the statx syscall via rustix. Miri doesn't support statx\nunder isolation. Added #[cfg_attr(miri, ignore)] to 5 tests.",
          "timestamp": "2026-04-08T08:34:51+02:00",
          "tree_id": "4ab6a9daf9a39db01d9de97156a1be8ab8592b01",
          "url": "https://github.com/fallow-rs/fallow/commit/59cf13a3fb42a09d19145257a898c9c4a77d5a41"
        },
        "date": 1775630182232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578816,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15502,
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
          "id": "bd459982c085b657be302888ba986b9abfe87f82",
          "message": "fix: match ignorePatterns against relative paths during file discovery\n\nGlob patterns in ignorePatterns (e.g. \"src/api/generated/**\") were matched\nagainst absolute walker paths, so only patterns with **/ prefix worked.\nStrip project root before matching, consistent with production_excludes.\n\nCloses #83",
          "timestamp": "2026-04-08T10:07:23+02:00",
          "tree_id": "00601be2891f0eb3bf70206a82e206dd580e4144",
          "url": "https://github.com/fallow-rs/fallow/commit/bd459982c085b657be302888ba986b9abfe87f82"
        },
        "date": 1775635747674,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3578768,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15501,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "f7955c8067782e012efc811550f2a90faa15a897",
          "message": "chore: release v2.19.3",
          "timestamp": "2026-04-08T10:12:24+02:00",
          "tree_id": "cd5e8df572dc4a1229c03ff1e81f5e3360ebfa3a",
          "url": "https://github.com/fallow-rs/fallow/commit/f7955c8067782e012efc811550f2a90faa15a897"
        },
        "date": 1775636041094,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3602160,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15541,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b8c47704ae3a5386d1536ba1f789e2928ac400c5",
          "message": "chore: raise benchmark alert thresholds to reduce false positives\n\nThe github-action-benchmark action compares against the single previous\nstored data point, which can be many commits old when path-filtered\nworkflows skip non-Rust changes. This causes false regression alerts\nfrom normal CI runner variance.\n\nChanges:\n- real-world benchmarks: 120% -> 200% (highest runner variance)\n- conformance: 115% -> 130% (upstream repos change between daily runs)\n- binary size: 115% -> 120% (deterministic but LTO varies slightly)\n- allocations: add explicit 120% (was using default 110%)\n- add max-items-in-chart: 100 to prevent unbounded gh-pages growth",
          "timestamp": "2026-04-08T10:31:35+02:00",
          "tree_id": "193d92dda1c35c0aa0768ac4a5845d6d07abcbe6",
          "url": "https://github.com/fallow-rs/fallow/commit/b8c47704ae3a5386d1536ba1f789e2928ac400c5"
        },
        "date": 1775637193729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3587768,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15519,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "36b0664949574c5474abc466075412ee3f344153",
          "message": "chore: release v2.20.0",
          "timestamp": "2026-04-08T11:09:12+02:00",
          "tree_id": "2450f9aba8357e8febc2ad47b395afa58270d904",
          "url": "https://github.com/fallow-rs/fallow/commit/36b0664949574c5474abc466075412ee3f344153"
        },
        "date": 1775639452067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3584760,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15511,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3a8fc3d4f64f84e0e36f64e8bf39b5f1512b4243",
          "message": "feat: Istanbul match-rate stats, snapshot coverage_model, CI warning, --coverage-root\n\n- Add istanbul_matched/istanbul_total to HealthSummary JSON (only when\n  coverage_model is istanbul). Human output shows match rate in footer.\n- Persist coverage_model in VitalSignsSnapshot (schema v3). Trend output\n  warns when comparing snapshots with different CRAP models.\n- CI auto-detection note: when CI=true and coverage was auto-detected,\n  emit \"note:\" on stderr suggesting explicit --coverage.\n- New --coverage-root flag to rebase Istanbul file paths for cross-\n  environment matching (CI runner paths vs local checkout).",
          "timestamp": "2026-04-08T12:00:55+02:00",
          "tree_id": "bbc1f72ddd6b4f5202ebbbe8e41b996946946e5a",
          "url": "https://github.com/fallow-rs/fallow/commit/3a8fc3d4f64f84e0e36f64e8bf39b5f1512b4243"
        },
        "date": 1775642536316,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3589024,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15521,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "b49a818eb3832f3ead6d1f3be8ccc0fe65433042",
          "message": "chore: release v2.21.0",
          "timestamp": "2026-04-08T12:02:49+02:00",
          "tree_id": "656a38347e069cac00a29db44c32889fc05bfd3b",
          "url": "https://github.com/fallow-rs/fallow/commit/b49a818eb3832f3ead6d1f3be8ccc0fe65433042"
        },
        "date": 1775642668740,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3605168,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15549,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
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
          "id": "0932ae169e5d742f02b15a132739166eaa7c6211",
          "message": "feat: expand framework convention coverage across Astro, React Router, Remix, Gatsby, and VitePress (#84)\n\n* feat: expand Astro and Gatsby convention coverage\n\n* feat: cover React Router and Remix route contracts\n\n* feat: support VitePress docs scaffold conventions",
          "timestamp": "2026-04-08T13:00:53+02:00",
          "tree_id": "5f96cb8c151c87ec21a8357284cd87a74f5929b4",
          "url": "https://github.com/fallow-rs/fallow/commit/0932ae169e5d742f02b15a132739166eaa7c6211"
        },
        "date": 1775646136725,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total Bytes Allocated",
            "value": 3592608,
            "unit": "bytes"
          },
          {
            "name": "Total Allocations",
            "value": 15529,
            "unit": "allocations"
          },
          {
            "name": "Peak Memory",
            "value": 519093,
            "unit": "bytes"
          },
          {
            "name": "Peak Allocations",
            "value": 5525,
            "unit": "allocations"
          }
        ]
      }
    ]
  }
}