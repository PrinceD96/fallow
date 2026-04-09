window.BENCHMARK_DATA = {
  "lastUpdate": 1775734097041,
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
      }
    ]
  }
}