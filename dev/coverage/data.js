window.BENCHMARK_DATA = {
  "lastUpdate": 1785738447009,
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
          "id": "32b3f89fe28c286c85a6b0aed4ec5be120f54da6",
          "message": "chore: release v3.6.0",
          "timestamp": "2026-07-15T21:05:35+02:00",
          "tree_id": "b27c5cd01e55fb4e58e8182595d25eb44ca07f41",
          "url": "https://github.com/fallow-rs/fallow/commit/32b3f89fe28c286c85a6b0aed4ec5be120f54da6"
        },
        "date": 1784142832994,
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
          "id": "3d30c38a4a49ccb912174e22d674e19377ebf910",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.6.0",
          "timestamp": "2026-07-15T22:36:00+02:00",
          "tree_id": "2c22bdd157bf5bf49b96498bdb32f0faf9c1f7f4",
          "url": "https://github.com/fallow-rs/fallow/commit/3d30c38a4a49ccb912174e22d674e19377ebf910"
        },
        "date": 1784148181736,
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
          "id": "398af909d30e0c68541fa2c089da743b7b30dda2",
          "message": "docs: document the multicall crate in the project-structure map",
          "timestamp": "2026-07-16T14:33:43+02:00",
          "tree_id": "e43c65ed411a8a7830da2b897f363277bf40ed68",
          "url": "https://github.com/fallow-rs/fallow/commit/398af909d30e0c68541fa2c089da743b7b30dda2"
        },
        "date": 1784205525080,
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
          "id": "41dc3988b0c371de1a42855e3fe76c6976a24f57",
          "message": "feat(vscode): set baseline at HEAD\n\nAdd a VS Code command that creates a local fallow baseline tag at HEAD, persists the effective changed-since setting, and refreshes analysis for a single-folder workspace. Existing tags, settings, and multi-root workspaces are handled explicitly.\n\nCreate the tag with --no-sign so user-level tag.gpgSign configuration cannot turn the lightweight local workflow into a signing failure. The command never pushes to a remote.",
          "timestamp": "2026-07-16T15:27:43+02:00",
          "tree_id": "51d89453d6c3247a0765b27cf62821e1a11c7b8a",
          "url": "https://github.com/fallow-rs/fallow/commit/41dc3988b0c371de1a42855e3fe76c6976a24f57"
        },
        "date": 1784209027286,
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
          "id": "fc632a1c2f2b57580bc0af8222038fe3b3cd1e53",
          "message": "fix: harden external input boundaries\n\nHarden external input boundaries before analysis: bound churn and diff reads, reject unsafe imported paths and aggregate overflow, and keep source and manifest symlink targets inside the configured project root. Oversized diffs continue with unfiltered reporting instead of truncated parsing.\n\nAdd focused regression coverage, real-repository probes, and Windows CI coverage for the platform-gated core symlink paths and all-target Clippy.",
          "timestamp": "2026-07-16T15:52:16+02:00",
          "tree_id": "2bd5478623b7cc405d91a7d073f9a2b1e2610db4",
          "url": "https://github.com/fallow-rs/fallow/commit/fc632a1c2f2b57580bc0af8222038fe3b3cd1e53"
        },
        "date": 1784210432444,
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
          "id": "fcc1d69e312a65c9348b64a4626ceb333e8db8e4",
          "message": "docs(detection): note the taint-binding breadth cap (#1843)\n\nRecords MAX_TAINTED_BINDINGS_PER_MODULE (4096) as the per-module breadth companion to the MAX_TAINT_BINDING_HOPS depth cap, and adds #1843 to the CACHE_VERSION bump list. Follow-up to the #1843 memory fix.",
          "timestamp": "2026-07-19T21:06:07+02:00",
          "tree_id": "6d69c10795e3ab76621cdadee70a1b44ad93b75c",
          "url": "https://github.com/fallow-rs/fallow/commit/fcc1d69e312a65c9348b64a4626ceb333e8db8e4"
        },
        "date": 1784488400570,
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
          "id": "6fbcd06f18ee0f2423fef4b4f5d63c92f54c4d6d",
          "message": "perf(analysis): harden super-linear paths found by the #1843 audit\n\nFollow-up to the #1843 taint-memory fix. Bounds or linearizes eight more paths with the same accumulator/scan pathology: duplicate-export and class-heritage grouping, star re-export propagation, object-binding and factory-return candidate caps, incremental JSDoc brace scanning, depth-guarded template and CSS-in-JS scanners (stack-overflow hardening), and linearized health-time line/mask scanners. Behavior-preserving on ordinary code (verified byte-identical old-vs-new across the fixture corpus). CACHE_VERSION 236 to 237 for the candidate caps.\n\nFollow-up to #1843.",
          "timestamp": "2026-07-20T00:35:50+02:00",
          "tree_id": "877ff829d7479d2103da37820e88ae78c8ca7e98",
          "url": "https://github.com/fallow-rs/fallow/commit/6fbcd06f18ee0f2423fef4b4f5d63c92f54c4d6d"
        },
        "date": 1784501055360,
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
          "id": "2f65edb595df848573d94fbec0125513a30cd466",
          "message": "perf(extract): bound the object-binding resolver on minified bundles (#1843)\n\nThe object-binding member-resolution fixed-point blew up on a real 2 MB minified vendor bundle full of nested object maps (>90s parse). Bounded three ways: an ancestor-prefix index makes copy_nested O(matches); a size cap (8192) stops the fixed-point from multiplying binding_target_names; and a pass cap (8) stops it running candidate-count passes. Byte-identical on ordinary code (over-cap files degrade to a false negative). The 2 MB bundle now analyzes in ~0.2s. CACHE_VERSION 237 to 238.\n\nFollow-up to #1843.",
          "timestamp": "2026-07-20T01:41:02+02:00",
          "tree_id": "533e3831f73940113352df8fa9302052f2efd5a6",
          "url": "https://github.com/fallow-rs/fallow/commit/2f65edb595df848573d94fbec0125513a30cd466"
        },
        "date": 1784504890224,
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
          "id": "4551fc703c79ba261513feb7c5d3f64d42b7ea82",
          "message": "chore(skills): re-vendor viz-less SKILL.md to match main binary contract",
          "timestamp": "2026-07-20T07:35:01+02:00",
          "tree_id": "482a3800cf3e678420066b2d2922c3dfdec353d5",
          "url": "https://github.com/fallow-rs/fallow/commit/4551fc703c79ba261513feb7c5d3f64d42b7ea82"
        },
        "date": 1784525990778,
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
          "id": "d9937cde797ecea0cd015ddacedd58a2fd867071",
          "message": "chore: release v3.7.0",
          "timestamp": "2026-07-20T08:43:24+02:00",
          "tree_id": "bce3fd11936daa8818656b2eb8dd3d83dfb77156",
          "url": "https://github.com/fallow-rs/fallow/commit/d9937cde797ecea0cd015ddacedd58a2fd867071"
        },
        "date": 1784530242922,
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
          "id": "e96d32efc7c124aeae8da4b399cbb1a9a56fc906",
          "message": "perf(graph): elide per-name synthetic-export scan on star re-export synthesis path\n\n`matching_synthetic_export_index` did an O(source_exports) `.position()` scan\nper re-exported name on the star re-export synthesis path (both call sites in\n`ensure_matching_star_exports`), giving O(names x source_exports) on a wide\nvalue+type merge barrel.\n\nReplace it with `synthesize_and_locate_star_export`: the branch only runs when\nthe source carries no earlier `Named(name)` export of that type-ness (otherwise\n`build_named_export_index` would have populated the index and skipped it) and\n`name` is never `default` (filtered upstream in `apply_star_refs_to_source`), so\na freshly appended stub at `exports.len() - 1` is the unique first match. The\npositional scan is retained as a defensive fallback for the currently-unreachable\n`default` / non-appending cases, so output is byte-identical.\n\nFollow-up to #1843 / #1914. Closes #1916.",
          "timestamp": "2026-07-20T09:42:02+02:00",
          "tree_id": "3864b9c0d8bbc11d1510834e72a8608c94c786bd",
          "url": "https://github.com/fallow-rs/fallow/commit/e96d32efc7c124aeae8da4b399cbb1a9a56fc906"
        },
        "date": 1784533863843,
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
          "id": "fe845138c24513e0c73f14eb69b3f187c96fe9b3",
          "message": "chore(docker): pin FALLOW_VERSION 3.7.0 with refreshed checksums",
          "timestamp": "2026-07-20T10:01:08+02:00",
          "tree_id": "aa900f5cd5383fdbe0bd044b5585dca684d8632e",
          "url": "https://github.com/fallow-rs/fallow/commit/fe845138c24513e0c73f14eb69b3f187c96fe9b3"
        },
        "date": 1784534780034,
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
          "id": "dbae50c8da7012a71ae84c7b1ae7582311390efe",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.7.0",
          "timestamp": "2026-07-20T10:08:41+02:00",
          "tree_id": "a9bcf8d24bd7eb11b679ec9d6b09a0ea96b42945",
          "url": "https://github.com/fallow-rs/fallow/commit/dbae50c8da7012a71ae84c7b1ae7582311390efe"
        },
        "date": 1784535257851,
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
          "id": "e20398e0809c10d47a46af8a351cdcef12d40285",
          "message": "fix(napi): restore @emnapi lockfile entries for cross-platform npm ci",
          "timestamp": "2026-07-20T10:26:26+02:00",
          "tree_id": "1cba20c4652fad2f21bc72491afc5bfe6ea2f9ba",
          "url": "https://github.com/fallow-rs/fallow/commit/e20398e0809c10d47a46af8a351cdcef12d40285"
        },
        "date": 1784536278683,
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
          "id": "124ad5cc84484f890cfd728240d6688d3b68df4d",
          "message": "fix(napi): bump lockfile fallow-node entries to v3.7.0",
          "timestamp": "2026-07-20T10:39:44+02:00",
          "tree_id": "03383d1f3a4318f706631c9828073077f8e936c7",
          "url": "https://github.com/fallow-rs/fallow/commit/124ad5cc84484f890cfd728240d6688d3b68df4d"
        },
        "date": 1784537210547,
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
          "id": "0d9185a5dc8258b44b89a8fbc670b6c55f0047e3",
          "message": "chore: prevent narrator-style comments\n\nAdd conservative comment guidance and a repository-owned guard for high-signal narrator comments while preserving Rustdoc, JSDoc, and non-obvious rationale.\n\nRun the guard for staged commits, Claude Stop hooks, and CI. Full-file context prevents false positives inside multiline strings, and repeated Stop hooks exit safely.",
          "timestamp": "2026-07-20T11:12:04+02:00",
          "tree_id": "4d7e554016e98edd67c1fce731138d171dccf299",
          "url": "https://github.com/fallow-rs/fallow/commit/0d9185a5dc8258b44b89a8fbc670b6c55f0047e3"
        },
        "date": 1784539099861,
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
          "id": "dacea3780abcf5e2c5d98ac208a88a4cdeb3529e",
          "message": "fix: inherited-member (#1910) and tsconfig-alias (#1911) false positives\n\nTwo dead-code false-positive fixes: credit members reached through an inherited/generic base-class property (#1910), and activate the TypeScript plugin on tsconfig presence so paths aliases are not misreported as unlisted dependencies (#1911).\n\nCloses #1910\nCloses #1911",
          "timestamp": "2026-07-20T09:21:52Z",
          "tree_id": "430b7bd8dde924b133675adce583910e58523691",
          "url": "https://github.com/fallow-rs/fallow/commit/dacea3780abcf5e2c5d98ac208a88a4cdeb3529e"
        },
        "date": 1784539600353,
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
          "id": "5988b978230134388b89060a39707a501211085a",
          "message": "chore: release v3.7.1",
          "timestamp": "2026-07-20T12:27:48+02:00",
          "tree_id": "2a8eb4aaa7cf4312714172670cd945dcd733705e",
          "url": "https://github.com/fallow-rs/fallow/commit/5988b978230134388b89060a39707a501211085a"
        },
        "date": 1784543766052,
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
          "id": "8e45850977cdecfe8624d5ec4abe7def0fe484bf",
          "message": "chore(docker): pin FALLOW_VERSION 3.7.1 with refreshed checksums\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-20T14:00:52+02:00",
          "tree_id": "cb735ea714bb297a16c03060aaa67ec08f2f61b2",
          "url": "https://github.com/fallow-rs/fallow/commit/8e45850977cdecfe8624d5ec4abe7def0fe484bf"
        },
        "date": 1784549279123,
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
          "id": "bfe588034642dfa5d812e9e06d8c79d00d3cb0ca",
          "message": "ci: replace docker-lockstep PR job with maintainer-flow Dockerfile pin\n\nThe release.yml docker-lockstep job opened a docker-lockstep/vX.Y.Z PR each\nrelease that then needed an admin merge. Fold the Dockerfile pin into the\nmaintainer release flow (fallow-release skill step 13) as a direct commit to\nmain, mirroring the crates/napi lockfile catch-up (step 12): download the\njust-published musl assets, re-hash them, run update-dockerfile-pins.mjs, and\npush. The ci.yml Docker job re-verifies the pin end-to-end on that commit.\n\nThe shared rewrite helper and its node --test suite stay. Refs #1817.",
          "timestamp": "2026-07-20T14:11:24+02:00",
          "tree_id": "50633c7753304941a21647e1b8381a13690fef9c",
          "url": "https://github.com/fallow-rs/fallow/commit/bfe588034642dfa5d812e9e06d8c79d00d3cb0ca"
        },
        "date": 1784549789526,
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
          "id": "443638cb2a7135230a5768ebc98948c87f87db0f",
          "message": "docs(changelog): move the fallow viz entry to Unreleased\n\nThe viz feature squash-merged while v3.7.0 was freshly cut, so the server-side\n3-way merge anchored its CHANGELOG entry inside the released 3.7.0 section even\nthough that binary does not contain viz. Move it under [Unreleased]. Also\nclarify the object-binding termination test comment to name the resolver's\nper-module caps (main's #1843 breadth and size caps) instead of the depth cap\nthis branch's now-superseded fix used.",
          "timestamp": "2026-07-21T11:39:34+02:00",
          "tree_id": "719fabeb50978ab23f43135eaf897a5ba37c09e7",
          "url": "https://github.com/fallow-rs/fallow/commit/443638cb2a7135230a5768ebc98948c87f87db0f"
        },
        "date": 1784627189806,
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
          "id": "b47f16da3b607980aed5603a8db39fdff99c6472",
          "message": "fix(hooks): add viz-frontend/src to pre-commit JS lint scope\n\nfeat(viz) added viz-frontend/src to the lint:js / fmt:js:check targets in\npackage.json and to CI, but not to the pre-commit hook's staged-path\nexpression. The command-policy parity test enforces the hook mirror the\npackage.json scopes, so it failed once oxfmt stopped masking it. Mirror the\nnew scope in the hook.",
          "timestamp": "2026-07-21T13:34:54+02:00",
          "tree_id": "e33af38844f3e8aebcb6894c870cbd6460d02f05",
          "url": "https://github.com/fallow-rs/fallow/commit/b47f16da3b607980aed5603a8db39fdff99c6472"
        },
        "date": 1784634135302,
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
          "id": "d3a107c408d5d1b7eec23965391b5fd13d0f64f7",
          "message": "fix(skills): regenerate SKILL.md so viz row matches generated order\n\nMy earlier re-vendor mirrored canonical, which placed the viz row after\n`workspaces` and tripped the contract bundle drift gate (generate-all emits\nit after `setup-hooks`). Regenerate from generate-all so the vendored copy\nsatisfies both the contract bundle and vendor-drift gates; canonical was\naligned in fallow-skills 241ddf6.",
          "timestamp": "2026-07-21T13:49:57+02:00",
          "tree_id": "0e147f3761af637343b1e1b3ab85094e74800477",
          "url": "https://github.com/fallow-rs/fallow/commit/d3a107c408d5d1b7eec23965391b5fd13d0f64f7"
        },
        "date": 1784634881262,
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
          "id": "aa5cff99933b7d37be9b7dabd99dcf5efbd8ca82",
          "message": "chore(deps): bump taiki-e/install-action from 2.82.10 to 2.83.2 (#1925)\n\nBumps [taiki-e/install-action](https://github.com/taiki-e/install-action) from 2.82.10 to 2.83.2.\n- [Release notes](https://github.com/taiki-e/install-action/releases)\n- [Changelog](https://github.com/taiki-e/install-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/taiki-e/install-action/compare/50414676f9f5d50a65992c6dd2ed02641263226c...43aecc8d72668fbcfe75c31400bc4f890f1c5853)\n\n---\nupdated-dependencies:\n- dependency-name: taiki-e/install-action\n  dependency-version: 2.83.2\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-21T15:33:22+02:00",
          "tree_id": "4ccccb17864a13cab73ff5413abcc369224ba681",
          "url": "https://github.com/fallow-rs/fallow/commit/aa5cff99933b7d37be9b7dabd99dcf5efbd8ca82"
        },
        "date": 1784641364180,
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
          "id": "3b67f6ddd01b98a6b038ce0c19cae8ab7a9e954c",
          "message": "chore(deps): bump actions/setup-node from 6.4.0 to 7.0.0 (#1934)\n\nBumps [actions/setup-node](https://github.com/actions/setup-node) from 6.4.0 to 7.0.0.\n- [Release notes](https://github.com/actions/setup-node/releases)\n- [Commits](https://github.com/actions/setup-node/compare/48b55a011bda9f5d6aeb4c2d9c7362e8dae4041e...820762786026740c76f36085b0efc47a31fe5020)\n\n---\nupdated-dependencies:\n- dependency-name: actions/setup-node\n  dependency-version: 7.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-21T13:56:04Z",
          "tree_id": "41212ebb767fedf80c0adbbda0aae9f27f82ad03",
          "url": "https://github.com/fallow-rs/fallow/commit/3b67f6ddd01b98a6b038ce0c19cae8ab7a9e954c"
        },
        "date": 1784642460037,
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
          "id": "9698f06c5a93231cea94dc2e1ff27813c0a432f1",
          "message": "chore(deps): bump astral-sh/setup-uv from 8.3.1 to 8.3.2 (#1933)\n\nClean GitHub Actions bump, all checks green.",
          "timestamp": "2026-07-21T16:14:52+02:00",
          "tree_id": "ffa68163faf9ca970b4daa98b1b331aad2645577",
          "url": "https://github.com/fallow-rs/fallow/commit/9698f06c5a93231cea94dc2e1ff27813c0a432f1"
        },
        "date": 1784643617539,
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
          "id": "5184b9d74d2ede605538a96f1bae9ec0edaf73e3",
          "message": "fix: resolve audit and analysis improvement findings\n\nImprove inherited member and alias resolution, audit comparison context, styling attribution, and annotation safety across CLI, API, MCP, CI, and editor surfaces.\n\nReuse shared repository context for audit attribution and base snapshots, and reduce clone-family and warm CSS analysis overhead without changing stable output contracts. Preserve the existing CSS benchmark workload and track the heavier many-file workload separately.\n\nRefresh dependency coverage and invalidate affected extraction and audit caches.",
          "timestamp": "2026-07-22T10:13:36+02:00",
          "tree_id": "29fab722dabc0865d6662233b000dddb805f52df",
          "url": "https://github.com/fallow-rs/fallow/commit/5184b9d74d2ede605538a96f1bae9ec0edaf73e3"
        },
        "date": 1784708417437,
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
          "id": "8f0dcb3c2c3cdfda0b1341c221c93615ebe36868",
          "message": "chore(deps-dev): update TypeScript in viz frontend\n\nUpdate the visualization frontend to TypeScript 7. Its focused lint, test, and build checks pass.",
          "timestamp": "2026-07-22T11:16:18+02:00",
          "tree_id": "751862b29fcffa80ccae06fe5a86ffab3a8ef618",
          "url": "https://github.com/fallow-rs/fallow/commit/8f0dcb3c2c3cdfda0b1341c221c93615ebe36868"
        },
        "date": 1784712268562,
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
          "id": "a495ce796f1c5f89fc07e5dd1f6c5fe0ca56bd1e",
          "message": "chore(deps): resolve nested workspace updates\n\nApply the useful nested-workspace dependency updates with their required compatibility changes. Migrate review Electron to TypeScript 7 and Babel 8, align its Node types with the embedded runtime, and hold Vite majors until electron-vite supports them.\n\nUpdate the N-API generator and checked-in loader, remove the unused Tinybench dependency, and preserve the Dependabot boundaries with repository policy tests.",
          "timestamp": "2026-07-22T11:40:49+02:00",
          "tree_id": "0302c416f04c93061a12aca874961d92a870a905",
          "url": "https://github.com/fallow-rs/fallow/commit/a495ce796f1c5f89fc07e5dd1f6c5fe0ca56bd1e"
        },
        "date": 1784714064748,
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
          "id": "1fbe048925397c809a429d640fd07d7df958e67f",
          "message": "fix(ci): hold incompatible React Vite plugin major\n\nKeep @vitejs/plugin-react on its Vite 7-compatible major while electron-vite 5 prevents the review app from moving to Vite 8. A clean install of the proposed plugin major fails its peer dependency resolution.\n\nExtend the repository policy test so Dependabot cannot reopen that incompatible major independently.",
          "timestamp": "2026-07-22T12:06:59+02:00",
          "tree_id": "5754ad1e137637c751ebca571c1ce45820bd01a9",
          "url": "https://github.com/fallow-rs/fallow/commit/1fbe048925397c809a429d640fd07d7df958e67f"
        },
        "date": 1784716209870,
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
          "id": "a4474ddd16488a27aee1e515e6f40e45c516f513",
          "message": "refactor: narrow internal Rust visibility with Hawk\n\nApply Hawk's lint-clean visibility reductions across internal Rust modules while preserving supported contract crates and externally compiled benchmark surfaces.\n\nKeep dead-public deletion out of scope until Hawk exposes stable cross-target identities, and align rustdoc with the narrower module boundaries.",
          "timestamp": "2026-07-22T13:02:02+02:00",
          "tree_id": "0b77dfec341fc8433b5835a7d2095be8925de35a",
          "url": "https://github.com/fallow-rs/fallow/commit/a4474ddd16488a27aee1e515e6f40e45c516f513"
        },
        "date": 1784719562826,
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
          "id": "038aa0b9c9c0ef61c699ced92aa110f7df93dd32",
          "message": "fix(zed): remove obsolete ed25519 feature\n\nRemove the obsolete `std` feature from the Zed extension's `ed25519-dalek` 3 dependency while keeping default features disabled.\n\nThis restores native tests and the packaged WASM build after the major dependency update in #1951.",
          "timestamp": "2026-07-22T13:31:16+02:00",
          "tree_id": "01938b811854bcce502f124c1eb5372673886973",
          "url": "https://github.com/fallow-rs/fallow/commit/038aa0b9c9c0ef61c699ced92aa110f7df93dd32"
        },
        "date": 1784720296196,
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
          "id": "c2e967fdb4fcd2bbe8d5fbaa4a09732369c418bc",
          "message": "fix(ci): make fuzzing operational\n\nRun every cargo-fuzz harness under AddressSanitizer for relevant pull requests and pushes, with a longer weekly campaign. Pin the nightly toolchain and cargo-fuzz version, validate locked dependencies, and preserve crash inputs as workflow artifacts.\n\nAlign corpus directories with their target names, enforce the workflow contract in policy tests, and exclude seed fixtures from fallow self-analysis. Keep each run bounded while allowing every target to execute even when an earlier target fails.",
          "timestamp": "2026-07-22T13:44:53+02:00",
          "tree_id": "3e430dfb011514b7aae61fb1a7ac00f5ff0b9969",
          "url": "https://github.com/fallow-rs/fallow/commit/c2e967fdb4fcd2bbe8d5fbaa4a09732369c418bc"
        },
        "date": 1784721078139,
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
          "id": "29308d1c2e3a4ec957e2115bd906175abf6656a8",
          "message": "fix(ci): repair dependency validation gaps\n\nRequire the path-specific Zed job in aggregate CI, with a policy test preventing accidental removal.\n\nMake Electron E2E runs deterministic by reviewing isolated Git fixtures and resolving an available release, debug, or PATH binary. Keep screenshot capture separate from asserted E2E runs.",
          "timestamp": "2026-07-22T13:52:10+02:00",
          "tree_id": "98d934b1d294a01d40249c76b9c1d4a998a85eb0",
          "url": "https://github.com/fallow-rs/fallow/commit/29308d1c2e3a4ec957e2115bd906175abf6656a8"
        },
        "date": 1784721413077,
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
          "id": "73cc071cf4d346cfc867e9270fc726a1e9977f8b",
          "message": "fix: credit Next.js fallback metadata exports\n\nNext.js resolves metadata and viewport exports from App Router fallback modules. Credit those framework-consumed exports for not-found, default, forbidden, unauthorized, and root global-not-found files while leaving unsupported special files and arbitrary helpers reportable.\n\nAdd exact plugin and integration coverage for static and generated forms, plus negative controls that preserve unused-export precision.\n\nFixes #1987.",
          "timestamp": "2026-07-22T16:21:32+02:00",
          "tree_id": "e0c96fb111ba5451a29f575ef613f280b8e311f9",
          "url": "https://github.com/fallow-rs/fallow/commit/73cc071cf4d346cfc867e9270fc726a1e9977f8b"
        },
        "date": 1784730526927,
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
          "id": "85f36fcdf367ea349cb77b6f647f7ae24e755236",
          "message": "chore: release v3.8.0",
          "timestamp": "2026-07-22T17:08:05+02:00",
          "tree_id": "99667e89bdc6e3390f7dd3e630c015a1d41334fa",
          "url": "https://github.com/fallow-rs/fallow/commit/85f36fcdf367ea349cb77b6f647f7ae24e755236"
        },
        "date": 1784733476948,
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
          "id": "acd28051c4c2c217f9fac612f288e9546c86b6c3",
          "message": "chore(docker): pin FALLOW_VERSION 3.8.0 with refreshed checksums",
          "timestamp": "2026-07-22T18:22:02+02:00",
          "tree_id": "5bf53cfdd40c8f868aabf82e4e2e49b99e4a7d96",
          "url": "https://github.com/fallow-rs/fallow/commit/acd28051c4c2c217f9fac612f288e9546c86b6c3"
        },
        "date": 1784738166894,
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
          "id": "2a85bcce4e5ae2df6ff4a3ab0550e5a5bf71d118",
          "message": "fix: preserve cloud runtime actionability\n\nPreserve the cloud runtime-context actionability decision, evidence reason, verdict, and deployment provenance in cloud analysis output.\n\nOlder cloud responses keep the existing tracked-function fallback. Repository self-audit also excludes the bundled comparison fixtures it should not treat as product source.",
          "timestamp": "2026-07-23T13:45:02+02:00",
          "tree_id": "dbb8600b33891813d461a24c30f955480a920dec",
          "url": "https://github.com/fallow-rs/fallow/commit/2a85bcce4e5ae2df6ff4a3ab0550e5a5bf71d118"
        },
        "date": 1784807516265,
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
          "id": "fe967602b0e6c71225406ab1dcb2087f2cbee9f3",
          "message": "chore: integrate trigger-tree agent telemetry\n\nIntegrate trigger-tree v1.21.0 for Codex and Claude Code with pinned plugin sources and project-specific documentation routing.\n\nKeep Fallow prompt telemetry hash-only, use an off fallback for unconfigured Codex repositories, preserve existing hooks, and document hook trust, upgrades, privacy, and removal.\n\nValidate both clients with real host sessions, client-attributed events, prompt privacy probes, healthy doctors, and repository gates.",
          "timestamp": "2026-07-23T14:25:14+02:00",
          "tree_id": "e8a9034fa9d07b180466002c0cdd0d1256a79a2b",
          "url": "https://github.com/fallow-rs/fallow/commit/fe967602b0e6c71225406ab1dcb2087f2cbee9f3"
        },
        "date": 1784809782510,
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
          "id": "69be8fc7a004f28e7a43e3ed3d9ad3eb64b962f7",
          "message": "chore: release v3.8.1",
          "timestamp": "2026-07-23T15:07:31+02:00",
          "tree_id": "08640f77484c57a195e14940f1dbb8ce096343df",
          "url": "https://github.com/fallow-rs/fallow/commit/69be8fc7a004f28e7a43e3ed3d9ad3eb64b962f7"
        },
        "date": 1784812604411,
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
          "id": "f2561ae8d7e7b3a4b602f8056a9531ce76e6ebf7",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.8.1",
          "timestamp": "2026-07-23T16:53:11+02:00",
          "tree_id": "84fbfbf791f4d366d4c0389a2d7615ff5f826c0f",
          "url": "https://github.com/fallow-rs/fallow/commit/f2561ae8d7e7b3a4b602f8056a9531ce76e6ebf7"
        },
        "date": 1784818911339,
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
          "id": "3b652718d6934f22e7418c3dc2c96fcf43c181b9",
          "message": "chore: upgrade trigger-tree to v1.22.0\n\nPin the Claude and Codex Trigger Tree integrations to v1.22.0 and its exact tagged commit. Preserve Fallow's project prompt hashing and the Codex user-wide marker-only fallback.\n\nDocument and validate the new deterministic GitLab Code Quality output from the static documentation gate.",
          "timestamp": "2026-07-23T17:10:33+02:00",
          "tree_id": "46e205611ea647d87ff6ea7719f6fa78e7166a48",
          "url": "https://github.com/fallow-rs/fallow/commit/3b652718d6934f22e7418c3dc2c96fcf43c181b9"
        },
        "date": 1784819702244,
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
          "id": "91869523531eca1fe5aae45af2d4fe6a6b6a385b",
          "message": "chore: upgrade trigger-tree to v1.23.1\n\nPin the Claude and Codex Trigger Tree integrations to v1.23.1 and its exact tagged commit. Use the upstream user-wide configuration layer for marker-only defaults while preserving Fallow's project hash override.\n\nKeep Codex CLI 0.144.6 deterministic through a local tag-exact marketplace entry until upstream issue #6 is resolved, without modifying Trigger Tree runtime code.",
          "timestamp": "2026-07-23T17:39:24+02:00",
          "tree_id": "f8859588b08b25c6d32f74f78b13832e927e2959",
          "url": "https://github.com/fallow-rs/fallow/commit/91869523531eca1fe5aae45af2d4fe6a6b6a385b"
        },
        "date": 1784821460429,
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
          "id": "fd3770291d0495b80a8fc724b7c32a463a2f8949",
          "message": "chore: upgrade trigger-tree to v1.23.2\n\nPin the Claude and Codex Trigger Tree integrations to v1.23.2 and its exact tagged commit. Use the official Codex marketplace now that relative plugin resolution makes the documented tag pin deterministic.\n\nPreserve the upstream user-wide marker-only default and Fallow's project hash override while removing the obsolete local marketplace wrapper.",
          "timestamp": "2026-07-23T17:56:58+02:00",
          "tree_id": "70783aeb270e7ad51ac35ed26b4c8e246642b700",
          "url": "https://github.com/fallow-rs/fallow/commit/fd3770291d0495b80a8fc724b7c32a463a2f8949"
        },
        "date": 1784822577128,
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
          "id": "faf2b968cfd44d94b34146575b853d64510f0aae",
          "message": "fix: preserve cloud never-called confidence\n\nPreserve the Cloud provenance that distinguishes runtime-observed never-called functions from inventory backfill.\n\nKeep inventory-backed, missing, and future provenance conservative. Only runtime-observed evidence can retain the existing high-confidence deletion recommendation.",
          "timestamp": "2026-07-23T19:17:09+02:00",
          "tree_id": "e5fddc0e980063a53dc7f59c72d193950bc73a9d",
          "url": "https://github.com/fallow-rs/fallow/commit/faf2b968cfd44d94b34146575b853d64510f0aae"
        },
        "date": 1784827372707,
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
          "id": "46297d2677f54cc64d51d9d308e79016fadd19c3",
          "message": "chore: refresh vendored Fallow skill\n\nRefresh the bundled npm skill from the current canonical fallow-skills repository.\n\nInclude the OpenAI agent manifest and remove metadata no longer present in the canonical skill so the push-only vendor drift gate is green again.",
          "timestamp": "2026-07-23T19:40:13+02:00",
          "tree_id": "87d561717a6f0420c349e25060ff53fd0cce22ab",
          "url": "https://github.com/fallow-rs/fallow/commit/46297d2677f54cc64d51d9d308e79016fadd19c3"
        },
        "date": 1784828752390,
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
          "id": "fbe63e3efcf10b43fa5a670976f5755416ce267e",
          "message": "docs: establish portable knowledge architecture\n\n* chore: open documentation architecture implementation\n\n* docs: add portable maintainer skills\n\n* docs: route stable agent knowledge through references\n\n* docs: establish canonical knowledge architecture\n\n* docs: align skill examples with current release\n\n* fix: make Fallow the public skill contract source\n\n* fix: require tracked knowledge surfaces",
          "timestamp": "2026-07-23T20:35:04+02:00",
          "tree_id": "1b205c73920ca00b56b1ae904fbfcb8c93642362",
          "url": "https://github.com/fallow-rs/fallow/commit/fbe63e3efcf10b43fa5a670976f5755416ce267e"
        },
        "date": 1784831991045,
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
          "id": "ddbdaa94e3dadb5bf39914d17ddf100bdcc38c07",
          "message": "docs: harden maintainer knowledge architecture",
          "timestamp": "2026-07-23T22:40:55+02:00",
          "tree_id": "57260586ef2df0e5cf5a10ed16b78036e2132b22",
          "url": "https://github.com/fallow-rs/fallow/commit/ddbdaa94e3dadb5bf39914d17ddf100bdcc38c07"
        },
        "date": 1784839754286,
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
          "distinct": false,
          "id": "3925887ede0b710c855a60d1a5a48e215593360b",
          "message": "docs: complete unreleased changelog",
          "timestamp": "2026-07-23T23:01:37+02:00",
          "tree_id": "9f549f91c275ee3116a72e9721ced17dcca9f9f1",
          "url": "https://github.com/fallow-rs/fallow/commit/3925887ede0b710c855a60d1a5a48e215593360b"
        },
        "date": 1784841741595,
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
          "id": "b9f65158db327fba64d2bad2ebb216c1e4bb4693",
          "message": "chore: release v3.9.0",
          "timestamp": "2026-07-23T23:35:52+02:00",
          "tree_id": "30f8f746d0053f3a648f8ec516604b605572a26b",
          "url": "https://github.com/fallow-rs/fallow/commit/b9f65158db327fba64d2bad2ebb216c1e4bb4693"
        },
        "date": 1784843255459,
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
          "id": "3f6d4a5f817525d322365d64953940ff47175bf2",
          "message": "chore: release v3.9.1",
          "timestamp": "2026-07-24T00:01:26+02:00",
          "tree_id": "b65b4e0cfd7b53c4e78d3e744f2656632ffc91b1",
          "url": "https://github.com/fallow-rs/fallow/commit/3f6d4a5f817525d322365d64953940ff47175bf2"
        },
        "date": 1784844606014,
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
          "id": "1548c96af4d6675a0a8488d7e0690fcc07f4413c",
          "message": "fix: validate Impact statusline flags",
          "timestamp": "2026-07-24T00:38:29+02:00",
          "tree_id": "d420bbd1259a67fbbe665d24342ae26a8699d078",
          "url": "https://github.com/fallow-rs/fallow/commit/1548c96af4d6675a0a8488d7e0690fcc07f4413c"
        },
        "date": 1784846628276,
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
          "id": "45f1642a21b049771ecf54fb92133dda4ce0c1fe",
          "message": "chore(docker): pin FALLOW_VERSION 3.9.1 with refreshed checksums",
          "timestamp": "2026-07-24T01:22:42+02:00",
          "tree_id": "73bee3e92aa4e7f1025a39dade93875c9ed4741d",
          "url": "https://github.com/fallow-rs/fallow/commit/45f1642a21b049771ecf54fb92133dda4ce0c1fe"
        },
        "date": 1784849396489,
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
          "id": "20972d541b1deadad79108d780ffae6fd9c48163",
          "message": "feat: add stable type-aware TypeScript analysis\n\n* chore: open type-aware proof of concept branch\n\n* feat: prototype type-aware class member refinement\n\n* fix: harden type-aware proof of concept\n\n* fix: cover type-aware sidecar in git hook\n\n* fix: keep unpublished flags out of agent docs\n\n* feat: mature type-aware class member refinement\n\n* fix: harden type-aware refinement gates\n\n* test: isolate case-sensitive sidecar projects\n\n* fix: satisfy Windows process tree lint\n\n* fix: harden type-aware release evidence\n\n* fix: defer type-aware corpus dependencies\n\n* test: isolate optional sidecar dependencies\n\n* feat: add project-wide type-aware analysis\n\n* test: cover type-aware protocol adapter\n\n* fix: apply type-aware API surface results\n\n* feat: complete type-aware analysis integration\n\n* fix: make type-aware CI dependencies explicit\n\n* feat: expand type-aware semantic analysis\n\n* feat: refine type-aware unused exports\n\n* fix: update vulnerable VS Code dependency\n\n* fix: harden type-aware export evidence\n\n* refactor: stabilize type-aware architecture\n\n* perf: benchmark type-aware cold and warm paths\n\n* fix: await instrumented type-aware benchmarks\n\n* fix: use supported CodSpeed walltime runner\n\n* fix: run type-aware walltime on available runner\n\n* feat: recommend type-aware analysis for TypeScript\n\n* fix(ci): verify branded PR comment author",
          "timestamp": "2026-07-27T12:30:03+02:00",
          "tree_id": "8d29e98abd6ab9eb32502f7ac2f06c942c1b26fd",
          "url": "https://github.com/fallow-rs/fallow/commit/20972d541b1deadad79108d780ffae6fd9c48163"
        },
        "date": 1785148655962,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "9746941c8cdc6cea9e287245bd46e54963c203f6",
          "message": "chore: release v3.10.0",
          "timestamp": "2026-07-27T13:12:14+02:00",
          "tree_id": "7ac54040090a916b3f8961fb88cd1f083a3864a7",
          "url": "https://github.com/fallow-rs/fallow/commit/9746941c8cdc6cea9e287245bd46e54963c203f6"
        },
        "date": 1785151050364,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "fe1b11d8f5f17b94a26e2434b1c56c55c136a0a8",
          "message": "test: derive type-aware version from package metadata",
          "timestamp": "2026-07-27T13:26:02+02:00",
          "tree_id": "6c5e4345ecf158602fd960385984b3ed45ded499",
          "url": "https://github.com/fallow-rs/fallow/commit/fe1b11d8f5f17b94a26e2434b1c56c55c136a0a8"
        },
        "date": 1785151899677,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "ac87521aae348889b4aa8d7826d7fdd0fdf06f7b",
          "message": "fix: add breathing room to Fallow icons\n\n* chore: prepare icon breathing room update\n\n* fix: add breathing room to Fallow icons",
          "timestamp": "2026-07-27T13:47:15+02:00",
          "tree_id": "4f8bdfe262c925df0e1e7aeaa595b4d503d689a1",
          "url": "https://github.com/fallow-rs/fallow/commit/ac87521aae348889b4aa8d7826d7fdd0fdf06f7b"
        },
        "date": 1785153155395,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "e207ccdcdd2f44b18d28030ef791e70ac5b1588c",
          "message": "fix: preserve type-aware package binary",
          "timestamp": "2026-07-27T14:10:43+02:00",
          "tree_id": "ca8cda21c36ba83339f1b1c00ab4f97e53763fdf",
          "url": "https://github.com/fallow-rs/fallow/commit/e207ccdcdd2f44b18d28030ef791e70ac5b1588c"
        },
        "date": 1785154565318,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "9b26c3a21ea6d2f15ccd21492408d36bd56406e3",
          "message": "test: stabilize Windows sidecar validation",
          "timestamp": "2026-07-27T16:26:14+02:00",
          "tree_id": "81749f10c5dde42bea7006090b13aa6925d66cba",
          "url": "https://github.com/fallow-rs/fallow/commit/9b26c3a21ea6d2f15ccd21492408d36bd56406e3"
        },
        "date": 1785162692147,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "c151c4ef468487308c62a8202e92fb1f07932dd6",
          "message": "fix: make type-aware release validation portable",
          "timestamp": "2026-07-27T17:04:09+02:00",
          "tree_id": "8b0bc9c95d042081217951e9e5e966e7b3a5e663",
          "url": "https://github.com/fallow-rs/fallow/commit/c151c4ef468487308c62a8202e92fb1f07932dd6"
        },
        "date": 1785165001011,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "1142d229914e21b25dba587d48983ecd6fb06fd4",
          "message": "test: expose type-aware CLI failure output",
          "timestamp": "2026-07-27T17:18:35+02:00",
          "tree_id": "912e7f901b1fe3b530d441ac2cc9d2d6596aedbe",
          "url": "https://github.com/fallow-rs/fallow/commit/1142d229914e21b25dba587d48983ecd6fb06fd4"
        },
        "date": 1785166189933,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "11bf96c8fcadfe58b247ceaea44c9de656950fde",
          "message": "fix: increase standalone icon safe area",
          "timestamp": "2026-07-27T15:43:43Z",
          "tree_id": "309750bdd7d62c1da34ceb8edb47fd65c736986c",
          "url": "https://github.com/fallow-rs/fallow/commit/11bf96c8fcadfe58b247ceaea44c9de656950fde"
        },
        "date": 1785167478695,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "7667b6ab3b9987ab6f254947d0a005a4f6e0355a",
          "message": "test: share type-aware sidecar launcher",
          "timestamp": "2026-07-27T17:51:31+02:00",
          "tree_id": "0fc4f74b2b4d8b428d4f3570e150ea7bf83c1637",
          "url": "https://github.com/fallow-rs/fallow/commit/7667b6ab3b9987ab6f254947d0a005a4f6e0355a"
        },
        "date": 1785168062833,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "cca693b5988ca2626d1f522e09df6fff954050ec",
          "message": "test: avoid global sidecar environment mutation",
          "timestamp": "2026-07-27T18:16:53+02:00",
          "tree_id": "70fc9a0df8679b4adc30e2ab77cd27ead7d48492",
          "url": "https://github.com/fallow-rs/fallow/commit/cca693b5988ca2626d1f522e09df6fff954050ec"
        },
        "date": 1785169343541,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "55d72c006cfda0e5843bcdb12035ccf433320eaf",
          "message": "feat(config): add ignoreFindings to hide findings without removing files from the graph\n\nknip's `ignore` migrated to `ignorePatterns`, which removes matching files from discovery, resolution, and the module graph, so anything they imported became unreachable and surfaced as new findings. `ignoreFindings` hides the findings a path owns while keeping the file fully analyzed, and `fallow migrate` now targets it.\n\nA finding with multiple source owners is hidden only when every owner matches. Negated `!` patterns keep matching paths reportable. Architecture, policy, suppression-hygiene, and framework-correctness findings stay visible, as do manifest-owned findings that no source file owns.\n\nAdmin merge: the only failing check is Commit messages, which rejects a `merge:` subject in this branch's history. The squash collapses that history and this subject replaces it.\n\nCloses #1991",
          "timestamp": "2026-07-27T18:27:25+02:00",
          "tree_id": "40fbc4522266fce22678ecc573d2e945e0627516",
          "url": "https://github.com/fallow-rs/fallow/commit/55d72c006cfda0e5843bcdb12035ccf433320eaf"
        },
        "date": 1785170171879,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "28810138faa8fdbc830b8d585d0c15d65c39c3fd",
          "message": "test: scope process lint expectation to Unix",
          "timestamp": "2026-07-27T18:36:55+02:00",
          "tree_id": "81f7a366361951493117f4736d3a811d6effdf83",
          "url": "https://github.com/fallow-rs/fallow/commit/28810138faa8fdbc830b8d585d0c15d65c39c3fd"
        },
        "date": 1785170551253,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "882f31056decb2fca13d70580c76075b203f3cad",
          "message": "chore(docker): pin FALLOW_VERSION 3.10.0 with refreshed checksums",
          "timestamp": "2026-07-27T20:33:20+02:00",
          "tree_id": "c4958ec9940a4178dbddf8fa70554e0c194947f2",
          "url": "https://github.com/fallow-rs/fallow/commit/882f31056decb2fca13d70580c76075b203f3cad"
        },
        "date": 1785177661412,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "a8e0a2bb3611219c9a77a13324de38e25f93e421",
          "message": "fix(plugins): close config-extraction and dependency-crediting gaps\n\nWrapper calls were scanned for the first object literal at any argument position, so a wrapper's own options object shadowed the config whenever the config arrived as an identifier or a nested call, which is the shape the @sentry/nextjs wizard emits. Config callbacks were searched for a return only among top-level statements, so the mode-branching shape Vite documents extracted nothing. Vite and Vitest also load .cts and .cjs configs, which were not enumerated.\n\nAlongside those: the fully qualified `jest-environment-jsdom` now gets the same optional-peer credit as the bare name, `edge-runtime` credits `@edge-runtime/vm` instead of two names that do not exist, and scoped eslint formatters such as `@microsoft/eslint-formatter-sarif` are no longer mistaken for file paths.\n\nEvery change is paired with a negative case, and a real-project probe holds at 752 issues with all seven genuine unused dependencies still reported.\n\nAdmin merge: the only failing check is CodSpeed Performance Analysis, which reports an internal error while processing the run's data. Every benchmark job in the workflow itself succeeded, and analysis timing on a real project is unchanged (101-167ms against a 156ms baseline).",
          "timestamp": "2026-07-27T20:42:40+02:00",
          "tree_id": "5a47dbd4e0169278059c4a2b7f0a79cd42821a66",
          "url": "https://github.com/fallow-rs/fallow/commit/a8e0a2bb3611219c9a77a13324de38e25f93e421"
        },
        "date": 1785178136064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "722e4a64347f3c7c544df5084ce9211b2aa18d25",
          "message": "chore(napi): refresh 3.10.0 lockfile after publish",
          "timestamp": "2026-07-27T21:01:11+02:00",
          "tree_id": "d2da57f724338c0b0a8278f3bdab4b1706403c63",
          "url": "https://github.com/fallow-rs/fallow/commit/722e4a64347f3c7c544df5084ce9211b2aa18d25"
        },
        "date": 1785179197715,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "52732287e06d6ca4886ec548c7686b7563724943",
          "message": "fix(brand): tighten standalone icon safe area",
          "timestamp": "2026-07-27T19:43:09Z",
          "tree_id": "b9374c05679fd87b6e32abc8d8c77bd9031a3985",
          "url": "https://github.com/fallow-rs/fallow/commit/52732287e06d6ca4886ec548c7686b7563724943"
        },
        "date": 1785181778254,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "818b7ad2318c4ea83f4dd7f8e7626f467c3b67f7",
          "message": "docs: record the type-aware sidecar install as local setup\n\nThe type-aware CLI tests launch the real sidecar from tools/type-aware-sidecar, which needs its own npm install. Without it three tests fail with exit code 2 and empty stderr, which reads as a code defect rather than a missing install. CI installs the sidecar, so the failure never reproduces there.",
          "timestamp": "2026-07-27T22:28:20+02:00",
          "tree_id": "8e1b9b5579ea72787c46f8e5966e410209969f08",
          "url": "https://github.com/fallow-rs/fallow/commit/818b7ad2318c4ea83f4dd7f8e7626f467c3b67f7"
        },
        "date": 1785184431137,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "56d87f100dbf21718a0131599eed21136623bee9",
          "message": "docs(action): explain branded comment permissions",
          "timestamp": "2026-07-27T23:21:12+02:00",
          "tree_id": "9e89e85c7d0c4e2565586d7465bc65878b2c8eb7",
          "url": "https://github.com/fallow-rs/fallow/commit/56d87f100dbf21718a0131599eed21136623bee9"
        },
        "date": 1785187613742,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "2ffd3a327285b23e4163bd8b867d8b784a5d7f4e",
          "message": "fix: make report favicon edge to edge",
          "timestamp": "2026-07-27T21:44:29Z",
          "tree_id": "d37f37a0852463ca65cd18423f1e07e1d6eb10f6",
          "url": "https://github.com/fallow-rs/fallow/commit/2ffd3a327285b23e4163bd8b867d8b784a5d7f4e"
        },
        "date": 1785188999745,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "1faf718e4589333a9d1a82e8f3810c17cdf5e0f3",
          "message": "ci: give each CodSpeed run a single instrument\n\nCodSpeed had been unable to generate a performance report since 20972d541b1, the commit that added the type-aware walltime benchmark next to the Rust simulation shards. Every benchmark job collected and uploaded successfully, so the failure was report assembly: CodSpeed received two instruments for one commit and could not reconcile them.\n\nThe walltime benchmark moves to its own workflow so each run carries a single instrument. Verified before merge: Performance Gate Passed, the first green check since 24 July, with the walltime run still collecting both benches.\n\nThe harness guard now asserts the two stay separated, and checks the CodSpeedHQ/action pin across both workflows so they cannot drift apart.\n\nFixes #2024",
          "timestamp": "2026-07-28T00:04:22+02:00",
          "tree_id": "e45b0f70c9a0d034005185a8a1cebade59bef659",
          "url": "https://github.com/fallow-rs/fallow/commit/1faf718e4589333a9d1a82e8f3810c17cdf5e0f3"
        },
        "date": 1785190194970,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "e0ae72ba0344f3ab2cf9daa555463f5229672ca7",
          "message": "feat(plugins): parse nx.json and .releaserc.json, credit lightningcss and folded CI runs\n\nNx and semantic-release both listed a config file for activation but not for parsing, so it was protected from unused-file reporting while everything it declared stayed invisible. nx.json now yields its plugins, targetDefaults executors and task runners; .releaserc.json joins the JS forms already parsed, while the YAML forms and the extensionless variant stay activation-only because the extractor is a JS/JSON parser.\n\nVite ships the lightningcss integration but not the package, so css.transformer or build.cssMinify selecting it makes the dependency load-bearing with no import anywhere.\n\nThe CI scanner recognized only the literal block scalar, so a folded 'run: >' pushed the string '>' as the command and discarded the actual script.\n\nAn empty ignoreFindings pattern is also no longer a hard config-load failure: ignorePatterns already accepts it, and the error message named a negation the pattern does not contain.\n\nEach fix carries a negative control, and the real-project probe holds at 752 issues with all seven genuine unused dependencies still reported.\n\nCloses #2015",
          "timestamp": "2026-07-28T00:43:49+02:00",
          "tree_id": "9ad7d9b47329ee4a3067d16aceabc0bfd555e1b3",
          "url": "https://github.com/fallow-rs/fallow/commit/e0ae72ba0344f3ab2cf9daa555463f5229672ca7"
        },
        "date": 1785192584291,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "55944e88c96fe0cc60679470781808977fd1e0fc",
          "message": "fix(dupes): apply the duplication threshold gate to standalone runs\n\nStandalone `fallow dupes` rendered through `print_dupes_result_with_grouping`,\nwhich returned the renderer's exit code without ever consulting\n`exceeds_threshold`. The gate lived only in `print_dupes_result`, which\nstandalone runs no longer call after the grouping refactor, so\n`fallow dupes --threshold 1` exited 0 at 100% duplication and printed no\ndiagnostic. Both the `--threshold` flag and a `duplicates.threshold` config\nvalue were affected, in every output format. Combined mode (bare `fallow`)\nrendered through the second, near-identical function that did gate, so the two\nentry points disagreed.\n\nThe two renderers differed only in `group_by`, which `print_dupes_result`\nalready passed as `None`. That duplication is what let the gate drift out of\none copy, so they are collapsed into one: `print_dupes_result` delegates and\nthe gate moves onto the single shared renderer. The source diff is\nnet-negative. New coverage in `crates/cli/tests/dupes_tests.rs` exercises the\nflag path, the config path, and the output formats, each with a\nbelow-threshold control so it cannot pass vacuously. The existing\n`exit_code_tests` case asserted `code == 0 || code == 1`, true of any\nnon-crashing run, and was named for `--fail-on-issues`, which `fallow dupes`\ndoes not wire. It is renamed to `dupes_threshold_exits_1_with_clones`, asserts\nthe exit code exactly, and carries a comment recording why the inert flag is\nabsent. Wiring `--fail-on-issues` for dupes is a separate behaviour change and\nis out of scope here.\n\nProjects that set a duplication threshold and were silently passing will start\nfailing as documented. Runs that set no threshold are unaffected, since the\ndefault (`0`) still means no limit.\n\nFixes #2009.",
          "timestamp": "2026-07-28T02:37:53+02:00",
          "tree_id": "dc0a7a43d729e195b937921a821d25263be28584",
          "url": "https://github.com/fallow-rs/fallow/commit/55944e88c96fe0cc60679470781808977fd1e0fc"
        },
        "date": 1785199383430,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "bbdec44c0964406f20247f65c5223d71a7182617",
          "message": "fix(release): require curated release notes",
          "timestamp": "2026-07-28T15:27:21Z",
          "tree_id": "76cc8df92eee59ac7fe0e7e8bfb85388c94f09a2",
          "url": "https://github.com/fallow-rs/fallow/commit/bbdec44c0964406f20247f65c5223d71a7182617"
        },
        "date": 1785253505243,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "fcd09f24f768d522e455363ca85713e6df72b6c1",
          "message": "fix(audit): label empty boundary-zone warnings from the base revision (#2055)\n\n`fallow audit --base` analyzes the base revision in an isolated worktree. A boundary zone whose files only exist in the working tree matched nothing there and produced the same unqualified `boundary zone ... matched 0 reachable files` warning used for the working tree, which read as a broken current configuration.\n\nThe base pass now prefixes the warning with `base revision snapshot (audit --base)` and states that the finding is about the base revision only. The working-tree warning, all output formats, and exit codes are unchanged.\n\nCloses #2013",
          "timestamp": "2026-07-28T18:24:53+02:00",
          "tree_id": "d1d5bc745bd91424baaf1385ef18fc60514f063f",
          "url": "https://github.com/fallow-rs/fallow/commit/fcd09f24f768d522e455363ca85713e6df72b6c1"
        },
        "date": 1785256893438,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "ebc64c0c5a600e97d712fd369859b1a05c9a0c60",
          "message": "fix(release): create version tag after publication",
          "timestamp": "2026-07-28T17:22:43Z",
          "tree_id": "491714bae55d23487ca0e98af5ccbcf586b54fb8",
          "url": "https://github.com/fallow-rs/fallow/commit/ebc64c0c5a600e97d712fd369859b1a05c9a0c60"
        },
        "date": 1785259813171,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "8522c08fb87a482adefab47355d39cdc0be4b001",
          "message": "feat(plugins): drive config-value dependency credits from a catalogue (#2059)\n\nThree hardcoded arms credited packages named by a config value: jsdom's optional peer canvas, vitest's edge-runtime peer, and vite's lightningcss.\n\nThey now read from crates/core/data/config_value_credits.toml, embedded and parsed once like tooling.toml, keyed on (surface, value) -> credits. Adding a rule for an existing surface is a one-entry data change. An unknown surface, unknown field, empty value or credit, or duplicate row fails the catalogue parse loudly.\n\nBehavior is unchanged for the three migrated cases.\n\nFixes #2018",
          "timestamp": "2026-07-28T19:34:24+02:00",
          "tree_id": "4790a7520c6bf72979424b8574d27dd75e839287",
          "url": "https://github.com/fallow-rs/fallow/commit/8522c08fb87a482adefab47355d39cdc0be4b001"
        },
        "date": 1785260502682,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "a7ed46b6758d5fee85aa1b20fbc848dcb3cc44c0",
          "message": "fix(release): enforce the immutability flag and gate release metadata locally\n\nThe immutability check used a jq select filter, which produces empty output\nand exit 0 when the flag is disabled, so the gate passed on exactly the\nrepositories it was meant to stop.\n\nTag-last publication also removed the workflow's curated-metadata validation,\nbecause the release no longer exists while the workflow runs. Move the title\nformat, em-dash, and comparison-link checks into the maintainer flow, where\nthey still run before an immutable release is created.",
          "timestamp": "2026-07-28T20:54:49+02:00",
          "tree_id": "e0ef7063b379f218005d178db030fba2d970b907",
          "url": "https://github.com/fallow-rs/fallow/commit/a7ed46b6758d5fee85aa1b20fbc848dcb3cc44c0"
        },
        "date": 1785265276617,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "aee9ce139a7808f99ffca977e2b5bea95af8757e",
          "message": "fix(release): verify release immutability in the maintainer pre-flight\n\nThe immutable-releases endpoint needs the Administration read permission.\nThat scope is not grantable to a workflow token: declaring administration\nmakes the workflow unparseable and every dispatch fails with HTTP 422, while\ncontents: read gets HTTP 403 from the endpoint itself.\n\nMove the check to the release skill's pre-flight, where maintainer\ncredentials can read it, and record why the workflow cannot own it.",
          "timestamp": "2026-07-28T21:32:28+02:00",
          "tree_id": "be637af9421a18db117d2a290d54d66c8bd15040",
          "url": "https://github.com/fallow-rs/fallow/commit/aee9ce139a7808f99ffca977e2b5bea95af8757e"
        },
        "date": 1785267487808,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "ca5106060c0bcfc7e189cd086d3a368c8a300dfa",
          "message": "feat(config): let ignoreFindings cover the remaining result families (#2061)\n\nprop_drilling_chains, thin_wrappers and duplicate_prop_shapes are source-owned and now honour ignoreFindings; security findings and their blind-spot diagnostics stay visible regardless of the pattern. prop_drilling_chains follows the documented multi-owner rule and is suppressed only when every hop file matches, matching circular_dependencies rather than changed-file anchor filtering. An exhaustive destructuring helper next to remove_ignored_dead_code_findings makes the next result field a compile error instead of a silent escape. docs/backwards-compatibility.md updated.\n\nRefs #2017",
          "timestamp": "2026-07-28T21:53:29+02:00",
          "tree_id": "95546d7ce411cb148e0fca893c1b7c0b0b138fb1",
          "url": "https://github.com/fallow-rs/fallow/commit/ca5106060c0bcfc7e189cd086d3a368c8a300dfa"
        },
        "date": 1785268774427,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "64b5ac68735d19e0f221cdb45163143b0b79d36f",
          "message": "docs(release): fix list continuation indent under the two-digit publish step\n\nThe publish step became item 10 when the immutability check was added, so its\nthree-space continuation no longer nests under the marker and the shell block\nescaped the list item.",
          "timestamp": "2026-07-28T22:09:57+02:00",
          "tree_id": "91f3401a89923d3c369ab7ec5fb871af70faf886",
          "url": "https://github.com/fallow-rs/fallow/commit/64b5ac68735d19e0f221cdb45163143b0b79d36f"
        },
        "date": 1785269813306,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "ce52c96d7e71cb3ab3076144b7b426be7048c986",
          "message": "feat(scripts): follow package-manager indirection into script bodies (#2063)\n\nnpm run <script> -- --flag and yarn <script> --flag were dropped before flag scanning, so the flag-value dependency crediting from #2006 never reached the shape most projects actually use. Script bodies now resolve through the catalogue and are rescanned, bounded by a depth limit and a global expansion budget.\n\nAmbiguity is sticky: a script name declared with different bodies across packages is never followed, regardless of workspace order. Names and bodies filter separately under --production, so a filtered script name still wins over a same-named dependency binary. Entry files from workspace bodies no longer seed root-relative patterns.\n\nRefs #2016",
          "timestamp": "2026-07-28T22:35:43+02:00",
          "tree_id": "346ac6934e0ed41497fc51d1614a2f43ba505ee5",
          "url": "https://github.com/fallow-rs/fallow/commit/ce52c96d7e71cb3ab3076144b7b426be7048c986"
        },
        "date": 1785271392290,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "57adb47d2ddc8720f1870dcaabca5096529d0c05",
          "message": "feat(health): add an identity-preserving baseline mode (#2064)\n\nThe default count baseline matches per file and category, so a new hotspot replacing an old one in the same file consumed the existing allowance and the gate stayed green. --baseline-mode identity matches per function identity instead: a replacement hotspot is reported, line shifts and severity improvements stay suppressed, and resolved findings disappear without a refresh.\n\nThe default stays count. Identity baselines keep their count buckets so both modes read them, and comparing in identity mode against a count-only baseline is an input error rather than a silent fallback. A finding identity is file path plus function name, so renaming or moving a function that is still in the baseline reports it as new; the flag documentation states that limit and the re-save rule.\n\nRefs #2010",
          "timestamp": "2026-07-28T22:48:23+02:00",
          "tree_id": "8adad1a994a5a7ed9a53b46a83d928fdc7142377",
          "url": "https://github.com/fallow-rs/fallow/commit/57adb47d2ddc8720f1870dcaabca5096529d0c05"
        },
        "date": 1785272034173,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "4da4d122e66be28e091fa1be9cb6d2b56de14889",
          "message": "chore(agents): track the canonical client-neutral knowledge tree (#2067)\n\nA .git/info/exclude entry covering all of .agents/ predated that tree becoming canonical. Excludes only apply to untracked paths, so the files committed before it stayed tracked while everything added since stayed invisible, including the rules and reviewer definitions the thin review skills read and the source of the vendored user-facing skill.\n\nNarrow the exclude to the three genuinely local paths and track the rest, so a future gap shows up in git status. Restate the guidance in two reviewer definitions without the private documentation path they referenced.\n\nFix the adapter generator, which wrote SKILL.md but never the files a skill links to, so every skill shipping a references directory produced an adapter with dangling links. Drop the fallow-analysis skill: it is the former name of the fallow skill, its references moved with the rename, and it carried a stale plugin count.",
          "timestamp": "2026-07-29T12:47:36+02:00",
          "tree_id": "1596bf875af5258de6f84ddd88506d00df0eb3fd",
          "url": "https://github.com/fallow-rs/fallow/commit/4da4d122e66be28e091fa1be9cb6d2b56de14889"
        },
        "date": 1785322366809,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "59e6655ff94f17b0922e5f1f0cbd79ee69b8d779",
          "message": "fix(scripts): remove companion files the canonical skill no longer ships (#2071)\n\nThe adapter generator copies every file a skill ships next to its SKILL.md, but it only walked the source tree, so a reference deleted from a canonical skill left the generated copy in place indefinitely and --check reported nothing.\n\nIt now walks the destination as well and drops what the source no longer has. The companion walk is also guarded against a missing directory, so a skill shipping only a SKILL.md is not a hard error.",
          "timestamp": "2026-07-29T23:58:18+02:00",
          "tree_id": "3268bd0abdd23006eea4574b2707f81f95306705",
          "url": "https://github.com/fallow-rs/fallow/commit/59e6655ff94f17b0922e5f1f0cbd79ee69b8d779"
        },
        "date": 1785362616753,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "92623a5f54a52e1834318256218ba989efadeefc",
          "message": "chore(agents): finish the reviewer-skill migration (#2072)\n\nSeven review subjects already follow one shape: a thin <x>-review skill that reads its checklist from .agents/agents/<x>-reviewer.md and its constraints from .agents/rules. Three still carried the older fat <x>-reviewer skill alongside it, so both generations loaded and competed for the same triggers.\n\nThe fat skills were not pure duplicates, so their unique content moved into the agent definitions first: the four CI-format audits, the human-format audit, the pluralization rule for counted nouns, and the note that the real-world corpus must be downloaded before any audit command works, which was missing from every agent definition.\n\nReviewer names in team-assembly refer to agents to spawn rather than skills, so they keep resolving.",
          "timestamp": "2026-07-30T00:06:22+02:00",
          "tree_id": "2050d8485f4a67a74abb8419bfe0669488ed0a90",
          "url": "https://github.com/fallow-rs/fallow/commit/92623a5f54a52e1834318256218ba989efadeefc"
        },
        "date": 1785363096623,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.2,
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
          "id": "52b30f51ec5639ccbefec3bb9a130f5a8afd436a",
          "message": "docs(changelog): call out review reconciliation and mocked-coverage behavior shifts (#2081)\n\nDocuments the unscoped fingerprint narrowing that shipped with #2078 and adds the missing entry with upgrade callout for the mocked-module coverage change from #2068.",
          "timestamp": "2026-08-01T22:41:01+02:00",
          "tree_id": "1454b69d9cf8e6a3b61479cac1ce1e65d1c40b67",
          "url": "https://github.com/fallow-rs/fallow/commit/52b30f51ec5639ccbefec3bb9a130f5a8afd436a"
        },
        "date": 1785617205706,
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
          "id": "de65b31999b0551377dd0006eeff7d4d337ca9c9",
          "message": "fix(security): stop treating \"use server\" as a server-only marker (#2088)\n\nA \"use server\" directive declares a Server Action boundary that client components are meant to import; the server-only-import rule treated it like server-only or node:fs, flagging every Server Action call site in App Router projects as high severity. The sink set now builds from imported server-only code only, while a \"use server\" module that imports server-only code and leaks it through a non-action export is still reported. Remediation and SARIF text updated to match.\n\nFixes #2074",
          "timestamp": "2026-08-02T00:46:49+02:00",
          "tree_id": "2f4fedd4835c67ad61c69b30cf5b65625568b647",
          "url": "https://github.com/fallow-rs/fallow/commit/de65b31999b0551377dd0006eeff7d4d337ca9c9"
        },
        "date": 1785624892068,
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
          "id": "9a40a7f9d74bb52fe16d5b5fa727cc2cedc6ffeb",
          "message": "feat(config): report unused npm dependency overrides (#2090)\n\nnpm overrides in the root package.json are now parsed like pnpm overrides, including nested objects and the \".\" self-pin key, and feed the same unused and misconfigured override analysis. $package reference values are credited rather than reported. package-lock.json resolved packages credit override targets the way pnpm-lock.yaml does. Yarn and bun remain out of scope.\n\nFixes #2069",
          "timestamp": "2026-08-02T01:07:52+02:00",
          "tree_id": "74c026dbcb066c2f637029fe36906ad617b82ecb",
          "url": "https://github.com/fallow-rs/fallow/commit/9a40a7f9d74bb52fe16d5b5fa727cc2cedc6ffeb"
        },
        "date": 1785626504760,
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
          "id": "e025bccb9edd184b0c3c3e586b8441eb8b31d880",
          "message": "fix(scripts): fold plain multi-line run scalars into one CI command (#2086)\n\nPlain multi-line run: scalars in CI workflows now keep their continuation lines, anchored at the run key column so sibling step keys terminate the scalar and their values do not leak into entry files.\n\nFixes #2016",
          "timestamp": "2026-08-02T02:24:07+02:00",
          "tree_id": "482bad1944ba114640d2d90cc9f5da88d4b7c993",
          "url": "https://github.com/fallow-rs/fallow/commit/e025bccb9edd184b0c3c3e586b8441eb8b31d880"
        },
        "date": 1785631274481,
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
          "id": "f5a898f9a5e03d4839f46b88996371218dda8b34",
          "message": "fix(graph): credit the whole React Native platform-extension family (#2087)\n\nA specifier that resolves into a Metro platform family now credits every member (.ios, .android, .native, .web, and the base file) across static imports, dynamic imports, require calls, and re-exports. Explicit platform specifiers keep a single edge.\n\nFixes #2073",
          "timestamp": "2026-08-02T03:30:24+02:00",
          "tree_id": "9f3bea18b6096339c0b9f148ecf603754774ca50",
          "url": "https://github.com/fallow-rs/fallow/commit/f5a898f9a5e03d4839f46b88996371218dda8b34"
        },
        "date": 1785635061515,
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
          "id": "1d2a61e8c57c3f29258d6e20dbafbcd1727b15f7",
          "message": "fix(core): resolve indexed-access getter types in unused-class-members (#2089)\n\nA Playwright fixture typed as Factory[\"getter\"] now resolves through the factory's public getter to the getter's declared return-type class, so members called through the fixture are credited. Computed keys and non-literal indices abstain.\n\nFixes #2070",
          "timestamp": "2026-08-02T04:27:22+02:00",
          "tree_id": "55be730f92c7c9dc173f65c24e9fa8c7962f8a00",
          "url": "https://github.com/fallow-rs/fallow/commit/1d2a61e8c57c3f29258d6e20dbafbcd1727b15f7"
        },
        "date": 1785637990299,
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
          "id": "942c6eec1f55bd2bf1abcd5f8371b41f06018593",
          "message": "fix: harden Deno workspace support follow-ups (#2091)\n\nEngine AnalysisSession::from_resolved_config now uses strict workspace discovery so every command exits 2 on a malformed root manifest; resolve_specifier skips the Deno import-map lookup when no package scope declares a map; deno.json workspace accepts the object form {\"members\": [...]}.",
          "timestamp": "2026-08-02T05:13:43+02:00",
          "tree_id": "cc1c7cdd4d989cc14792a246b84efc44d794f9f6",
          "url": "https://github.com/fallow-rs/fallow/commit/942c6eec1f55bd2bf1abcd5f8371b41f06018593"
        },
        "date": 1785640837917,
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
          "id": "c1e15ea0bab981252060e6118df8957929946c9e",
          "message": "fix(release): bump the type-aware sidecar in lockstep with the CLI version\n\nThe Windows release-validation lifecycle tests enforce the exact-version\nmatch between fallow and the in-repo type-aware sidecar, so the sidecar\npackage.json and lockfile must move with the release commit.",
          "timestamp": "2026-08-02T07:09:01+02:00",
          "tree_id": "7bdb219df594ea3b85e0aebce0a6ca985ca8738d",
          "url": "https://github.com/fallow-rs/fallow/commit/c1e15ea0bab981252060e6118df8957929946c9e"
        },
        "date": 1785647822074,
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
          "id": "763066883ef36e51c0c99c9971b676beca9a8e55",
          "message": "docs: use dead-code instead of the deprecated check alias in the migration doc",
          "timestamp": "2026-08-02T08:28:57+02:00",
          "tree_id": "862758f21f51712d7653e45a3d002fccf64e0d57",
          "url": "https://github.com/fallow-rs/fallow/commit/763066883ef36e51c0c99c9971b676beca9a8e55"
        },
        "date": 1785652493862,
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
      }
    ]
  }
}