window.BENCHMARK_DATA = {
  "lastUpdate": 1775737769820,
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
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ae0442cea53729e201afd48d8dc377b00ab067bc",
          "message": "chore: document why --acyclic is omitted from coupling workflow",
          "timestamp": "2026-04-09T13:23:07+02:00",
          "tree_id": "b428e37f8cc8c059ed8a8aeaaa112bb9af282d59",
          "url": "https://github.com/fallow-rs/fallow/commit/ae0442cea53729e201afd48d8dc377b00ab067bc"
        },
        "date": 1775734096231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
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
          "id": "0838d23ef6c3f18bbc8045620028575c58a91990",
          "message": "feat(health): add large function drill-down and duplication score penalty\n\nAdd two new health features:\n\n1. Large function drill-down: list functions exceeding 60 LOC in a new\n   \"Large functions\" section when the very-high-risk bin is >= 3%.\n   Includes file path, function name, line number, and LOC count.\n   Sorted by line count descending, truncated to 10 items.\n\n2. Duplication in health score: run duplication analysis when --score is\n   active and penalize when duplication exceeds 5%. Formula:\n   min(max(0, duplication_pct - 5) * 1.0, 10), max 10 points.\n   Updates deductions line, vital signs metrics, JSON output,\n   trend tracking, and snapshot persistence.\n\nBump SNAPSHOT_SCHEMA_VERSION to 5 for the formula change.",
          "timestamp": "2026-04-09T14:28:14+02:00",
          "tree_id": "20a55bea7e01cdd5cbdbed931a437208bc00cc4f",
          "url": "https://github.com/fallow-rs/fallow/commit/0838d23ef6c3f18bbc8045620028575c58a91990"
        },
        "date": 1775737768303,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Max Fan-In (non-framework)",
            "value": 12,
            "unit": "deps"
          },
          {
            "name": "Max Fan-Out (non-framework)",
            "value": 11,
            "unit": "deps"
          },
          {
            "name": "Modules >20 Fan-In (%)",
            "value": 0,
            "unit": "%"
          },
          {
            "name": "Total Modules",
            "value": 216,
            "unit": "count"
          },
          {
            "name": "Total Edges",
            "value": 448,
            "unit": "count"
          }
        ]
      }
    ]
  }
}