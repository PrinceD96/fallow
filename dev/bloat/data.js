window.BENCHMARK_DATA = {
  "lastUpdate": 1781537468972,
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
          "id": "6e87e12ff54a666badd1650aa191ededaad73237",
          "message": "chore: release v2.91.0",
          "timestamp": "2026-06-09T19:41:02+02:00",
          "tree_id": "1fee3017d90914a5f4c943759438d5c04de082bb",
          "url": "https://github.com/fallow-rs/fallow/commit/6e87e12ff54a666badd1650aa191ededaad73237"
        },
        "date": 1781027461908,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 269786640,
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
          "id": "84f2b2e8b10f48a66121f4c64d9bada29883fab4",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.91.0",
          "timestamp": "2026-06-09T20:20:36+02:00",
          "tree_id": "d6a31bd8377cf9b07e0cb17545aa04a06b8f3038",
          "url": "https://github.com/fallow-rs/fallow/commit/84f2b2e8b10f48a66121f4c64d9bada29883fab4"
        },
        "date": 1781029757273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 269786640,
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
          "id": "a97fb2d4635557aa5896d086fa3822698edce25d",
          "message": "docs: correct npm README knip speed multipliers to match benchmarks",
          "timestamp": "2026-06-09T21:57:34+02:00",
          "tree_id": "e0f31cb68e00d79e7f37e0c889c61876352a9986",
          "url": "https://github.com/fallow-rs/fallow/commit/a97fb2d4635557aa5896d086fa3822698edce25d"
        },
        "date": 1781035495336,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 269786640,
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
          "id": "4491deceee75ff2766a3a2ce2db68b2fc1a2d17f",
          "message": "fix(discovery): skip large minified JS assets\n\nVite-style generated assets can be smaller than the per-file byte limit while still expanding into very large parser and extraction payloads. Treat large one-line JS assets as generated output during source discovery while the max-file-size guard is enabled.\n\nThe discovery walk now records skipped minified assets as skipped-minified-file diagnostics, keeps --max-file-size 0 as the opt-out, and leaves declaration files plus large multiline JS in the analyzed set. The output schema, generated TypeScript contracts, and CLI reference now document the new diagnostic kind.\n\nFixes #1086.",
          "timestamp": "2026-06-09T22:33:13+02:00",
          "tree_id": "dc19f1e03e7c7a16aafe650497b07bbaa62c7ad3",
          "url": "https://github.com/fallow-rs/fallow/commit/4491deceee75ff2766a3a2ce2db68b2fc1a2d17f"
        },
        "date": 1781037752713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 269843744,
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
          "id": "bac297f6ded5ea0481b58a2add428b7ea80e438c",
          "message": "feat(security): configure request receivers\n\nAdd `security.requestReceivers` so projects can register local HTTP request object names that should participate in tainted input detection.\n\nThe config stays additive to the built-in receiver list and is validated through the config schema. The detector now uses the configured receivers for local source tracking, direct sink arguments, and the ranking pass that marks findings as reachable from untrusted input.\n\nThe fixture covers configured, built-in, and unconfigured receiver behavior, including the expected arg-level reachability for configured request receivers.\n\nFixes #1125.",
          "timestamp": "2026-06-09T22:42:39+02:00",
          "tree_id": "9a41c09830b597b4e7bb293c2fa1f96b97ca69de",
          "url": "https://github.com/fallow-rs/fallow/commit/bac297f6ded5ea0481b58a2add428b7ea80e438c"
        },
        "date": 1781038214873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 269917352,
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
          "id": "1b5eee77f7f249a31be86fb211096eb7bfb8f2ef",
          "message": "fix(cli): clarify security human output\n\nRework the fallow security human renderer so the first lines explain that findings are items to check, not confirmed vulnerabilities.\n\nUse plain-language labels for evidence, code paths, import traces, and blind spots. Keep the detailed candidate framing in place for JSON, SARIF, MCP, and downstream verifier workflows.",
          "timestamp": "2026-06-09T23:09:27+02:00",
          "tree_id": "813d64a4a72043bfd14f2a0cda453f9d9f15f208",
          "url": "https://github.com/fallow-rs/fallow/commit/1b5eee77f7f249a31be86fb211096eb7bfb8f2ef"
        },
        "date": 1781040115520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 269941456,
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
          "id": "208434a8ced4bbc3162153202858fcf956f5faf7",
          "message": "feat(mcp): add read-only Code Mode\n\nAdd code_execute, a bounded read-only JavaScript sandbox for MCP agents that need to compose multiple fallow analysis calls without shelling out repeatedly. It exposes a frozen allowlisted fallow host API, injects a default root, rejects mutating fix tools, and returns a stable mcp-code-execute/v1 envelope with call metadata and limits.\n\nThe implementation runs QuickJS with memory, stack, timeout, host-call, code-size, and output limits. Fallow subprocess output is redirected through temp files so large JSON cannot deadlock pipes, and oversized or timed-out runs fail with structured errors.\n\nDocs, telemetry allowlists, packaged agent guidance, and server schema tests were updated for the new tool. Mutating fixes remain available only through existing standalone MCP tools.",
          "timestamp": "2026-06-09T23:39:21+02:00",
          "tree_id": "a15b171324706ec165339482939e927cab5f3163",
          "url": "https://github.com/fallow-rs/fallow/commit/208434a8ced4bbc3162153202858fcf956f5faf7"
        },
        "date": 1781041734447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 270225992,
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
          "id": "643080188c563ea9294448624d951f1d6b49603f",
          "message": "fix: emit telemetry run ids in json output",
          "timestamp": "2026-06-09T23:59:31+02:00",
          "tree_id": "a88baa8c6952b6384840dc7f107a398477ecd81d",
          "url": "https://github.com/fallow-rs/fallow/commit/643080188c563ea9294448624d951f1d6b49603f"
        },
        "date": 1781042872166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 270433256,
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
          "id": "b8495b2425a493247cc471921ae82a3fb534f71a",
          "message": "fix: preserve security ranking within severity tiers\n\nKeep the final security candidate order grouped by high, medium, and low severity while preserving the existing within-tier priority signals. Runtime context, entry reachability, arg-level and module-level source reachability, blast radius, boundary crossing, and dead-code context now sort before path fallback when severity ties.\\n\\nThis keeps stronger same-severity candidates ahead of weaker ones without changing schema shape or treating candidates as verified vulnerabilities.\\n\\nFixes #1133.",
          "timestamp": "2026-06-10T00:25:21+02:00",
          "tree_id": "49678e41b94cfa0c0bf6335cc5b688dfb5afbda9",
          "url": "https://github.com/fallow-rs/fallow/commit/b8495b2425a493247cc471921ae82a3fb534f71a"
        },
        "date": 1781044466972,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 270419704,
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
          "id": "93aa49fc19329a3d901505b7c5e43a5a97d04e98",
          "message": "feat: add security JSON metadata\n\nAdd version, elapsed time, and privacy-safe config metadata to the security JSON envelope. The config block records configured and effective security rule severities plus category include and exclude filters without raw paths or config contents.\n\nEnable --explain for fallow security --format json and emit security-specific _meta through the shared typed metadata path so telemetry metadata remains compatible.\n\nFixes #1135.",
          "timestamp": "2026-06-10T00:50:39+02:00",
          "tree_id": "d1c581310fa904d7849d73b9b4b3780059e7f631",
          "url": "https://github.com/fallow-rs/fallow/commit/93aa49fc19329a3d901505b7c5e43a5a97d04e98"
        },
        "date": 1781045875363,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 270818304,
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
          "id": "dd4285e9bdc35772909fdad8095a00e4378b9c6b",
          "message": "fix: align security help with supported globals\n\nHide inherited global flags from the `fallow security` help surface when that command still rejects them through its structured validation path. This keeps `security --help` and `help security` aligned with runtime behavior without changing how unsupported flags are parsed or reported.\n\nKeep `--explain` visible and supported for security after the metadata work, and add regression coverage for the filtered help forms plus the validator contract for hidden globals.\n\nFixes #1131.",
          "timestamp": "2026-06-10T01:23:05+02:00",
          "tree_id": "dfc667ef5bae0f34aeec0a32512fde35718e58a8",
          "url": "https://github.com/fallow-rs/fallow/commit/dd4285e9bdc35772909fdad8095a00e4378b9c6b"
        },
        "date": 1781047827391,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 270916936,
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
          "id": "2e00978bd13ace7f98ac1f9d0eb9782ad50c76aa",
          "message": "fix: emit compact security summary json\n\nTeach security summary JSON to serialize a compact aggregate envelope instead of reusing the full candidate payload. The summary keeps the security discriminator, schema version, and gate state while exposing stable counts by severity, category, unresolved analysis limits, and attack-surface entries.\n\nThe summary path bypasses per-run telemetry metadata so repeated summary JSON is deterministic, and the output schema now documents both security JSON variants.\n\nFixes #1132.",
          "timestamp": "2026-06-10T01:51:07+02:00",
          "tree_id": "120795c89c4ce376708d622c31db2f641dfa43e4",
          "url": "https://github.com/fallow-rs/fallow/commit/2e00978bd13ace7f98ac1f9d0eb9782ad50c76aa"
        },
        "date": 1781049473102,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 271011872,
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
          "id": "e2d2dae4bc670c88a458b836f6946f53cb888ff8",
          "message": "feat: add unresolved callee diagnostics\n\n* chore: open issue 1134 implementation branch\n\n* feat: add unresolved callee diagnostics",
          "timestamp": "2026-06-10T02:46:14+02:00",
          "tree_id": "b26f9db14bc676a1f784b36db80ea6e2a6ad81e8",
          "url": "https://github.com/fallow-rs/fallow/commit/e2d2dae4bc670c88a458b836f6946f53cb888ff8"
        },
        "date": 1781052809927,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 272001664,
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
          "id": "7be005b9b27684c19b06a22691716ee8e2b08005",
          "message": "fix(plugins): hard error invalid plugin regexes\n\nInvalid regexes extracted from plugin path-rule exclusions now aggregate into a config-load error instead of being stripped from the rule with a warning. The core analysis path and list plugins path both surface the error as exit code 2 with the existing JSON error envelope.\n\nThe unchanged plugin-system silent-fail diagnostics for config pattern collisions and external enabler typos remain warnings. Regression coverage now pins core aggregation, CLI JSON behavior, list plugins behavior, and the TanStack Router config path.\n\nFixes #513.",
          "timestamp": "2026-06-10T07:48:00+02:00",
          "tree_id": "42b08c7466afbf1cd810ce98d2437bb766f63f65",
          "url": "https://github.com/fallow-rs/fallow/commit/7be005b9b27684c19b06a22691716ee8e2b08005"
        },
        "date": 1781071040741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 272201808,
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
          "id": "bc9b5a364298fe016013efcfdcd997fbca4945d5",
          "message": "feat(health): add target relation evidence\n\nAdd relation evidence to health refactoring targets so JSON consumers can see direct importers and duplicate-code siblings without making separate trace calls.\n\nThe implementation reuses existing graph and duplication data, keeps the JSON fields additive, updates generated schema and TypeScript contracts, and only expands human target output when evidence is present.\n\nFixes #1145.",
          "timestamp": "2026-06-10T08:15:14+02:00",
          "tree_id": "d635777989c7a644bbecf20a05bc86eb8da910b2",
          "url": "https://github.com/fallow-rs/fallow/commit/bc9b5a364298fe016013efcfdcd997fbca4945d5"
        },
        "date": 1781072612885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 273178056,
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
          "id": "245bd6071b1a3d8ce2f13e93eda7c70cb28590f7",
          "message": "fix(security): propagate constant sink literals\n\nClassify simple module-scope constant expressions before security sink matching. The extractor now carries literal metadata through const identifiers, String coercion, unary numeric constants, and constant-only templates so non-literal catalogue rows do not fire on static values.\n\nTreat public CI metadata env names as non-secret sources unless the env name is secret-shaped. This keeps build refs and SHAs out of source-backed logging candidates while preserving tokens and keys.\n\nFixes #1138.",
          "timestamp": "2026-06-10T08:35:46+02:00",
          "tree_id": "ed884f2ecacec48508a8c397e781e3b646ea8cfb",
          "url": "https://github.com/fallow-rs/fallow/commit/245bd6071b1a3d8ce2f13e93eda7c70cb28590f7"
        },
        "date": 1781073861717,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 273343856,
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
          "id": "6a1dd0a772820b7ee1102384fb584a0b62d95ad5",
          "message": "fix: trust local sanitizer flows\n\n* chore: open issue-1136 implementation branch\n\n* fix(security): trust local sanitizer flows",
          "timestamp": "2026-06-10T09:01:53+02:00",
          "tree_id": "2a3d78f3509f7bc139560d8c8edeb95d63c302bc",
          "url": "https://github.com/fallow-rs/fallow/commit/6a1dd0a772820b7ee1102384fb584a0b62d95ad5"
        },
        "date": 1781075357916,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 273558256,
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
          "id": "18c70b766e28138e5795dff81ad82c7432d980c9",
          "message": "fix(security): classify fixed-origin URL sinks\n\nClassifies URL-like security sink candidates as fixed-origin dynamic paths or dynamic origins, carries `candidate.sink.url_shape` through JSON/schema/generated contracts, and keeps literal fixed URL destinations omitted from nonliteral open-redirect candidates.\n\nFixes #1137.",
          "timestamp": "2026-06-10T09:11:16+02:00",
          "tree_id": "f391a29633aef93f018776728e3f6a36e5a2072f",
          "url": "https://github.com/fallow-rs/fallow/commit/18c70b766e28138e5795dff81ad82c7432d980c9"
        },
        "date": 1781075944818,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 273607584,
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
          "id": "f5f8944a679bab69f1ad4d9c0ee80beeeb1c9230",
          "message": "fix(schema): include security summary root contract\n\nFollow-up from final review across #1152, #1153, #1154, and #1155.",
          "timestamp": "2026-06-10T09:53:01+02:00",
          "tree_id": "e3b8636f465f9254c151d10e4cf2f73be8bd5f17",
          "url": "https://github.com/fallow-rs/fallow/commit/f5f8944a679bab69f1ad4d9c0ee80beeeb1c9230"
        },
        "date": 1781078460867,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 273636464,
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
          "id": "99dc0ce058d89ecd530b91d3040a82f281a86439",
          "message": "feat(boundaries): require zone coverage for files\n\nAdd `boundaries.coverage.requireAllFiles` and `boundaries.coverage.allowUnmatched` so teams can require analyzed source files to match a configured boundary zone.\n\nReport unmatched files as boundary coverage findings across CLI output, JSON/SARIF/CodeClimate, LSP diagnostics, baselines, regression counts, CI summaries, and generated schemas.\n\nRefs #1147.",
          "timestamp": "2026-06-10T10:17:17+02:00",
          "tree_id": "6daa8bc542250f84922aab1276c6870378ee6df9",
          "url": "https://github.com/fallow-rs/fallow/commit/99dc0ce058d89ecd530b91d3040a82f281a86439"
        },
        "date": 1781079980809,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 274575512,
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
          "id": "351085e83521d2a0fe7e4060920d6e2b4e48dbe7",
          "message": "chore(agents): add path-local AGENTS.md guides and pre-bash guard hook\n\nAdd per-area AGENTS.md guides (crates/cli, crates/core, crates/extract,\ncrates/graph, editors/vscode, tests, .github/workflows) so Codex and other\nagents pick up ownership maps and validation steps local to the files they\nedit, mirroring the colocated-guidance pattern.\n\nAdd a PreToolUse Bash guard (.claude/hooks/pre-bash-guard.py) that steers\nagents to the local fallow binary instead of an installed one, requires\nbounded output for workspace cargo runs, and blocks VS Code source commits\nthat omit the rebuilt dist bundle. Detection uses a quote-aware token walk\nover pipeline segments, so commands that only mention fallow or \"git commit\"\nas data (heredocs, fixtures, echoes) are not flagged, while chained or\nenv-prefixed real invocations are. Set SKIP_FALLOW_AGENT_GUARD=1 to bypass.\n\nThe guard activates on a committed sentinel (crates/cli/AGENTS.md) so it runs\non every clone, and track the new guides and hook despite the broad .claude/*\nand AGENTS.md ignore rules.",
          "timestamp": "2026-06-10T10:30:43+02:00",
          "tree_id": "1572c5577b5c874347272ce28f41c5598659e67f",
          "url": "https://github.com/fallow-rs/fallow/commit/351085e83521d2a0fe7e4060920d6e2b4e48dbe7"
        },
        "date": 1781080710616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 274575512,
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
          "id": "c22eb0680279b8c96a9f15189d46ca1929600c40",
          "message": "fix: apply boundary coverage rules consistently\n\nApply per-file `boundary-violation` overrides to both import boundary findings and boundary coverage findings.\n\nRender boundary coverage in human output when it is the only structure finding, and keep embedded config-action paths relative in JSON output.",
          "timestamp": "2026-06-10T11:13:32+02:00",
          "tree_id": "28565d35fb506035c8af006e678a2666d9b3af88",
          "url": "https://github.com/fallow-rs/fallow/commit/c22eb0680279b8c96a9f15189d46ca1929600c40"
        },
        "date": 1781083260139,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 274614216,
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
          "id": "47a0e4cfd291e8203480fba8ae1dc6edda00f906",
          "message": "fix: credit napi-rs optional prebuild packages\n\nnapi-rs packages declare generated platform prebuilds as optionalDependencies, but their runtime loader selects them dynamically instead of through static imports. Fallow now reads package.json napi metadata and credits only exact generated package names listed in the same optionalDependencies map.\n\nThe plugin registry now has a package.json metadata hook that runs for both root and workspace packages. These credits are scoped to the declaring package.json, so unrelated sibling workspace dependencies remain reportable.\n\nFixes #1164.",
          "timestamp": "2026-06-10T12:24:02+02:00",
          "tree_id": "d376eb0b298dcf99c98bddc00292022ea7908391",
          "url": "https://github.com/fallow-rs/fallow/commit/47a0e4cfd291e8203480fba8ae1dc6edda00f906"
        },
        "date": 1781087620683,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 275263064,
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
          "id": "1921037ffca9d142168919be36583403b3aad7e5",
          "message": "fix(audit): resolve base to merge-base, not stale local main (#1169)\n\nfallow audit with no --base auto-detected the comparison base by discovering the default branch via origin/HEAD but returning the bare name 'main', which git resolves to the stale local refs/heads/main. On worktree checkouts cut from origin/main whose local main is never updated, this diffed every branch against an ancient base and could fail the agent gate on a one-line change (the agent-gate twin of #242).\n\nauto_detect_base_ref now resolves to the git merge-base (fork point) against the branch's upstream or the remote default (origin/HEAD, origin/main, origin/master), falling back to the upstream/remote tip on merge-base failure and to local main/master when there is no origin. A new FALLOW_AUDIT_BASE env var pins the base; the audit scope line, an additive-optional base_description JSON field, and the VS Code extension surface the resolved base with provenance.\n\nCloses #1168.",
          "timestamp": "2026-06-10T13:55:18+02:00",
          "tree_id": "1b1a8df099c827f9402b264005569f356e78967c",
          "url": "https://github.com/fallow-rs/fallow/commit/1921037ffca9d142168919be36583403b3aad7e5"
        },
        "date": 1781093004495,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 275287736,
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
          "id": "adbd09776e877b539ff5777a44e131aea9d21e9e",
          "message": "test(audit): cover FALLOW_AUDIT_BASE precedence and validation (#1170)\n\nSubprocess integration tests for the audit base env override (#1169): env value honored with provenance when no flag, explicit --base wins, malformed value exits 2. Test-only. Refs #1168.",
          "timestamp": "2026-06-10T14:12:36+02:00",
          "tree_id": "cafa827006e3a9b898d2d2ef7f7eca81ac15e908",
          "url": "https://github.com/fallow-rs/fallow/commit/adbd09776e877b539ff5777a44e131aea9d21e9e"
        },
        "date": 1781094099031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 275287736,
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
          "id": "61ec8e856ef43245aaf6a13f33e1c9778d87f49d",
          "message": "feat(security): chain tainted local bindings through up to three hops (#1171)\n\nfallow security now traces untrusted input through chained same-module local bindings, up to three hops. Injection shapes that route a request value through one or two intermediate variables (alias, template literal, string concat, or object-literal initializers) are upgraded to arg-level confidence with the trace anchored at the original untrusted read instead of staying module-level.\n\nChaining stays conservative: call, conditional, and property-read initializers do not chain, and a flow that exceeds the hop limit degrades to module-level rather than claiming arg-level confidence. RUST_LOG=debug logs when a chain is dropped for exceeding the limit. Integration fixtures cover two-hop, three-hop, and over-limit four-hop flows, and the detection docs describe the bounded chaining behavior.\n\nFixes #1146.",
          "timestamp": "2026-06-10T14:28:47+02:00",
          "tree_id": "b487b2283c2f3f8109eb541c1cf7932003c64d87",
          "url": "https://github.com/fallow-rs/fallow/commit/61ec8e856ef43245aaf6a13f33e1c9778d87f49d"
        },
        "date": 1781095010461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 275348800,
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
          "id": "447094fdf27a3518060479d411c53dac6ce6982f",
          "message": "test(audit): characterize base-reuse predicate (#1172)\n\nPin the behavior of the audit base-reuse predicate (can_reuse_current_as_base and js_ts_tokens_equivalent) before any refactor of its internals. The predicate decides whether fallow audit can skip the base snapshot analysis when every changed file is non-behavioral, so a wrong answer silently produces a wrong CI verdict.\n\nUnit tests cover token equivalence across whitespace-only, comment-only, identifier-rename, string-literal, suppression-marker, and non-JS cases, plus the file classification helpers. Two tests pin a known soundness gap: TemplateLiteral and RegExpLiteral tokens carry no payload, so content changes inside template literals or regex literals are treated as equivalent today. Integration tests assert end-to-end audit attribution across the reuse decision.",
          "timestamp": "2026-06-10T15:39:59+02:00",
          "tree_id": "4bf97b4e8b9013a3843cfe2381b24b8cc0287ecb",
          "url": "https://github.com/fallow-rs/fallow/commit/447094fdf27a3518060479d411c53dac6ce6982f"
        },
        "date": 1781099281378,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 275348800,
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
          "id": "557d2dc0beee0b27665580c9d3bf9d8847de3adc",
          "message": "feat(boundaries): forbid specific callee patterns per zone (#1173)\n\nAdds the opt-in boundaries.calls.forbidden config section. Boundary zones can now ban specific callee patterns per zone, with callee accepting a string or an array. Presets and existing zone rules are unchanged.\n\nMatching is segment-aware and import-resolved, so one pattern covers child_process and node:child_process across named, namespace, and default imports, plus globals like console.*. Violations report as boundary_call_violations across human, JSON, SARIF, CodeClimate, compact, and markdown output, LSP diagnostics, baselines, audit attribution, and GitHub Action / GitLab CI summaries, sharing the boundary-violation severity and suppression token. Forbidden-call rules apply only to files classified into a zone; a rule pointing at a zone that matches no files warns at analysis time, and inert patterns such as a bare * are rejected at config load.\n\nThe boundaries.effects.allowed section from the same proposal stays gated on #1143.\n\nFixes #1147.",
          "timestamp": "2026-06-10T15:57:09+02:00",
          "tree_id": "ee498a13e4a3379ac2e7625ca80a1e3dae8d9468",
          "url": "https://github.com/fallow-rs/fallow/commit/557d2dc0beee0b27665580c9d3bf9d8847de3adc"
        },
        "date": 1781100295029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 277088216,
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
          "id": "f9ab4d12427777e4f2e8ee9c4dd31b35b1660b2f",
          "message": "refactor: extract health telemetry recording",
          "timestamp": "2026-06-10T16:27:35+02:00",
          "tree_id": "74d4d575464c0fcddc30cc3fd77efed1ca2778a9",
          "url": "https://github.com/fallow-rs/fallow/commit/f9ab4d12427777e4f2e8ee9c4dd31b35b1660b2f"
        },
        "date": 1781102197903,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 277100688,
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
          "id": "b6be7f1ea787634fab9f67b1fc222f1f707cda7e",
          "message": "refactor: satisfy helper clippy checks",
          "timestamp": "2026-06-10T17:25:30+02:00",
          "tree_id": "0f71711d30d87997c60d8adc5f9746969de61d92",
          "url": "https://github.com/fallow-rs/fallow/commit/b6be7f1ea787634fab9f67b1fc222f1f707cda7e"
        },
        "date": 1781105748321,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 277133752,
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
          "id": "a9994097865b74302c423eabd590ef8e258541b4",
          "message": "feat(init): prefill AGENTS.md scaffold from detected project info (#1177)\n\nfallow init --agents previously wrote a static template with empty placeholders even though run_init already calls detect_project and uses the result to tailor the generated config. The agents guide now prefills the lines detection can answer reliably and leaves everything else blank.\n\nPrefill rules are deliberately conservative, since a confidently wrong line in an agent-consumed file is worse than a blank one: Primary app stays blank, Module boundaries fills for monorepos only, no UI-framework or Storybook lines, a provenance comment appears only when something was prefilled, Install derives from packageManager or pnpm-workspace.yaml and never from lockfile sniffing, Test only when exactly one framework is detected, Typecheck only for TypeScript. Empty-project output stays byte-identical to the previous template, pinned by a regression test.",
          "timestamp": "2026-06-10T17:45:16+02:00",
          "tree_id": "99272bd11bebd7d311f7b770268eb8934156cc10",
          "url": "https://github.com/fallow-rs/fallow/commit/a9994097865b74302c423eabd590ef8e258541b4"
        },
        "date": 1781106828705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 277210328,
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
          "id": "1f5b9e799c7e0cbee4556b6b5e33b6fab844212d",
          "message": "fix(boundaries): accept the boundary-call-violation suppression token (#1178)\n\nThe boundary-call-violation finding suppresses via the family token\nboundary-violation, but every other fallow finding has a token that\nmatches its rule id, so users derive boundary-call-violation by analogy\nand previously got a silent no-op. The rule-id-shaped token (and its\nplural) now parse as aliases of the boundary family kind, so either\ntoken suppresses import, coverage, and call findings alike, and the\nalias is consumed rather than surfaced as an unknown-kind stale\nsuppression.\n\nThe boundary-calls human section now ends with a suppress hint naming\nthe working token, and the explain guide for\nfallow/boundary-call-violation spells out the one-family-token model\nwith the alias noted. README and detection notes lead the forbidden-call\nrollout with a staged warn-then-error path, correct the optional-chaining\nclaim (cp?.exec() call sites are matched), and document that the check\ncovers direct callee paths only. Test pins cover optional-chaining\ncapture, re-bound callees staying quiet, and written-form dedupe.\n\nFixes #1147",
          "timestamp": "2026-06-10T17:57:55+02:00",
          "tree_id": "345d6768e4a88e15c696f9e1eb81d312fc4904cd",
          "url": "https://github.com/fallow-rs/fallow/commit/1f5b9e799c7e0cbee4556b6b5e33b6fab844212d"
        },
        "date": 1781107571967,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 277215608,
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
          "id": "d0ca8ab8e786cbfa01fbcc933194290a02fec503",
          "message": "feat(config): declarative rule packs with policy-violation findings\n\nAdds the rulePacks config key: standalone JSON/JSONC pack files of\nbanned-call and banned-import rules that encode project policy as pure\ndata. Loading a pack never executes project code, and matches report as\npolicy-violation findings identified by <pack>/<rule-id>.\n\nbanned-call matching is segment-aware and import-resolved over the\nexisting callee_uses capture (one child_process.* pattern covers bare\nand node:-prefixed named, namespace, and default imports, including\nliteral-only and zero-argument calls); banned-import matches raw\nspecifiers segment-aware over imports and re-exports with an\nignoreTypeOnly escape hatch. Rules scope via files/exclude globs and\ncarry an optional per-rule severity overriding the rules.\"policy-violation\"\nmaster (default warn); the exit-code gate reads the effective per-finding\nseverity. Findings flow through human, JSON, SARIF, CodeClimate, compact,\nand markdown output, LSP diagnostics, baselines, audit attribution,\nregression counts, workspace and issue filters, and the GitHub Action and\nGitLab CI summaries. The fallow rule-pack-schema command prints the pack\nJSON Schema, committed at the repo root so documented $schema URLs\nresolve, and invalid packs fail config load loudly with exit code 2.\n\nFixes #1148.",
          "timestamp": "2026-06-10T19:56:15+02:00",
          "tree_id": "525d1ac48caf22010af9d4660803fcee308bebc5",
          "url": "https://github.com/fallow-rs/fallow/commit/d0ca8ab8e786cbfa01fbcc933194290a02fec503"
        },
        "date": 1781114716216,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279243640,
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
          "id": "fd30d63408240c5dd6c02c435165262f0915012c",
          "message": "chore: release v2.92.0",
          "timestamp": "2026-06-10T21:10:32+02:00",
          "tree_id": "67581680361bd1e91ce348dd6df8ab8162e08170",
          "url": "https://github.com/fallow-rs/fallow/commit/fd30d63408240c5dd6c02c435165262f0915012c"
        },
        "date": 1781119195225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279177528,
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
          "id": "1f9aaac198a279b340f688bd4ee56655e43551f4",
          "message": "chore: release v2.92.1",
          "timestamp": "2026-06-10T21:54:40+02:00",
          "tree_id": "9dc4f2ff03f6671976eaa53b0383036b88cd0904",
          "url": "https://github.com/fallow-rs/fallow/commit/1f9aaac198a279b340f688bd4ee56655e43551f4"
        },
        "date": 1781121682062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279262992,
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
          "id": "e451a5be35445a18909739c4dcfd3aa9d8d5c2e1",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.92.1",
          "timestamp": "2026-06-10T22:33:55+02:00",
          "tree_id": "aea86598af7fd93199cbbeaee0328e92a58a02d7",
          "url": "https://github.com/fallow-rs/fallow/commit/e451a5be35445a18909739c4dcfd3aa9d8d5c2e1"
        },
        "date": 1781124169165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279262992,
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
          "id": "b1db5200de6ee324da58be5be7a9b0b612e3aad3",
          "message": "test: improve coverage across cli workflows",
          "timestamp": "2026-06-11T07:14:57+02:00",
          "tree_id": "31b0001b1281d9963d5125c16c42e0ffdb92b920",
          "url": "https://github.com/fallow-rs/fallow/commit/b1db5200de6ee324da58be5be7a9b0b612e3aad3"
        },
        "date": 1781155480478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279262992,
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
          "id": "3895e47fca699364537ff366377ffd078aedc44d",
          "message": "refactor: split security human rendering",
          "timestamp": "2026-06-11T07:51:26+02:00",
          "tree_id": "92ffd20fe48592915a030ca8b4d6f133ed22bf92",
          "url": "https://github.com/fallow-rs/fallow/commit/3895e47fca699364537ff366377ffd078aedc44d"
        },
        "date": 1781157717854,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279241600,
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
            "email": "bartwaardenburg@gmail.com",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d0a3e7206b1e462bd3457ded727f34a9d1d72769",
          "message": "refactor(cli): split combined.rs into orchestrator, output, orientation, impact modules\n\ncombined.rs concentrated analysis orchestration, the output-format printers,\nthe orientation header, entry-point display, and impact recording in a single\nlarge file, making it the repo's merge-conflict magnet.\n\nSplit it into a combined/ module: mod.rs keeps the orchestrator\n(CombinedOptions, resolve_analyses, run_combined, run_combined_dupes,\nbuild_health_opts); output.rs holds the format printers; orientation.rs the\nheader and entry-point display; impact.rs the telemetry recording. Pure code\nmotion with zero behavior change (visibility and use-paths only); the\nrayon::join parallelism and shared-parse threading are untouched. Test and\nsnapshot suites pass with no modifications.",
          "timestamp": "2026-06-11T10:23:01+02:00",
          "tree_id": "b3a40c57e6b9a6cf8c55554884d39ddf0b39fd9e",
          "url": "https://github.com/fallow-rs/fallow/commit/d0a3e7206b1e462bd3457ded727f34a9d1d72769"
        },
        "date": 1781166645124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279324336,
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
            "email": "bartwaardenburg@gmail.com",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ba3580ac64d4458843366acda80376fb395c2047",
          "message": "docs(combined): narrow the conflict-magnet rule to combined/mod.rs\n\ncombined.rs was split into a combined/ module, so the merge-conflict\nconcentration now lives in the orchestrator (combined/mod.rs); the output,\norientation, and impact submodules are independent files editable in\nparallel. Relax the CLAUDE.md serialization rule accordingly.",
          "timestamp": "2026-06-11T10:33:05+02:00",
          "tree_id": "4b8bc1e9dd931312c2ce9c51193904fac5da34cd",
          "url": "https://github.com/fallow-rs/fallow/commit/ba3580ac64d4458843366acda80376fb395c2047"
        },
        "date": 1781167279174,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279324192,
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
          "id": "be84f982ad20fbdf9c3b9b78c5bb4b09afff12a5",
          "message": "docs(mcp): align runtime_coverage license prose with single-capture-free nuance\n\nThe check_health and audit tool descriptions said the runtime_coverage param is a paid feature / license-gated without the carve-out the five dedicated runtime-coverage tools document: a single local capture is free, only continuous or multi-capture monitoring requires a license. Wording now matches across all seven runtime-coverage surfaces.",
          "timestamp": "2026-06-11T10:58:58+02:00",
          "tree_id": "9b56c7b831623b022f430f05e5f04f6dae1b9e8e",
          "url": "https://github.com/fallow-rs/fallow/commit/be84f982ad20fbdf9c3b9b78c5bb4b09afff12a5"
        },
        "date": 1781169113437,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279224000,
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
          "id": "1f2bf7070b2650dd2e613fe0b84df61f7363a741",
          "message": "fix(cli): clear test-only-dependency findings under single-type filters (#1194)\n\nIssueFilters::apply() clears every issue category not selected by a single-type filter flag, but the --unused-deps clear arm omitted test_only_dependencies, so a focused run like `fallow dead-code --unused-files` on a project with a production dependency imported only from test files leaked that test-only finding alongside the requested issue type.\n\nThis groups test-only-dependency with the other dependency kinds under --unused-deps (matching type-only and the --file scope, which already cleared all five categories), sets filter_flag to --unused-deps for the test-only-dependency row in the capability manifest, regenerates the SKILL.md issue-types table, and adds a neuter-verified filter-parity regression test.\n\nFixes #1192.",
          "timestamp": "2026-06-11T12:56:25+02:00",
          "tree_id": "6b7edb8f5c3a17bc453260d61349ba1c2e906f76",
          "url": "https://github.com/fallow-rs/fallow/commit/1f2bf7070b2650dd2e613fe0b84df61f7363a741"
        },
        "date": 1781176034040,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279226776,
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
          "id": "f1a5e17acccb3a01b2b7bc28e5775962f871ff54",
          "message": "fix(unused-class-members): credit imported Playwright fixtures\n\nPlaywright fixture definitions can route setup through an orchestrator class while declaring the fixture shape through an imported object type alias. The unused class member analyzer previously correlated callback-side fixture uses only with locally collected fixture map aliases, so nested methods on the target POM class could still report unused.\n\nThis teaches extraction to emit fixture-type sentinel accesses for imported alias bindings and expands those aliases in core before correlating Playwright fixture definitions with uses. The regression fixture keeps an actually unused decorated method to ensure the fix credits only the used chain.\n\nOut of scope: recursive imported alias expansion across multiple imported alias hops remains conservative.\n\nFixes #1190.",
          "timestamp": "2026-06-11T13:30:44+02:00",
          "tree_id": "980204cbafc6467feb3ee53a41857e6efc8cda2f",
          "url": "https://github.com/fallow-rs/fallow/commit/f1a5e17acccb3a01b2b7bc28e5775962f871ff54"
        },
        "date": 1781177933702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279330480,
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
          "id": "f3f2e8b5f51fe84c98f3450a6ab957c1a680822b",
          "message": "feat(cli): add command-level next_steps[] to JSON envelopes\n\nAdds an optional top-level next_steps[] array to the dead-code, health, dupes, combined, audit, and grouped JSON envelopes, plus a TTY-only Next: hint on bare fallow's human output. Each entry is { id, command, reason }: a read-only, runnable follow-up command computed from the run's findings, pointing agents and humans at fallow's adjacent verification surface (trace, complexity breakdown, audit, workspace scoping) that telemetry shows agents rarely discover from the output alone.\n\nTwo contracts hold for every entry, enforced by a constructor debug-assert and unit tests: the command is never a fix or any other mutating command (fallow surfaces evidence; deciding and applying the change is the agent's job), and it is runnable as-is with no placeholders. The array is deduplicated, priority-ordered, capped at three, and omitted when empty; it never contributes to total_issues. FALLOW_SUGGESTIONS=off suppresses it.\n\nAdditive-optional field, no schema-version bump. Schema and both TS contracts regenerated; the field rides through the MCP tools unchanged.",
          "timestamp": "2026-06-11T14:45:50+02:00",
          "tree_id": "da335935bd9cda0b838465f75d830bab6bfd3c7e",
          "url": "https://github.com/fallow-rs/fallow/commit/f3f2e8b5f51fe84c98f3450a6ab957c1a680822b"
        },
        "date": 1781182478545,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279697704,
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
          "id": "4b63590037a81906054633c47cad1762809f8e42",
          "message": "fix(graph): keep tsconfig aliases out of dependency reports\n\nWhen a bare specifier matches compilerOptions.paths, a missing local alias target was falling through to NpmPackage and surfacing as an unlisted dependency. That made imports like @app/foo look like missing package.json entries even though they are project-local aliases.\n\nResolve local tsconfig path aliases before package fallback even outside the broken-tsconfig fallback path, and only mark an alias unresolved after package imports and workspace package fallbacks have had a chance to resolve it.\n\nThe regression covers the false positive, listed package credit, and a real unlisted scoped package in the same tsconfig-path project so the fix does not hide genuine dependency issues.",
          "timestamp": "2026-06-11T16:09:03+02:00",
          "tree_id": "ab41d7007fcc3318b88df34006f5c5a04f7ed43f",
          "url": "https://github.com/fallow-rs/fallow/commit/4b63590037a81906054633c47cad1762809f8e42"
        },
        "date": 1781187533950,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279699840,
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
          "id": "0fa99d2eaeb7eae5c440dcb374ab94bfc84bcd4c",
          "message": "feat(cli): agent task-to-command matrix and telemetry install id\n\nTelemetry shows AI agents cluster on dead-code, audit, dupes, and health and never discover the rest of the CLI surface. This lands the remaining discoverability work.\n\nA task-to-command matrix is defined once in crates/cli/src/task_matrix.rs and rendered into four surfaces: an additive task_matrix section in the fallow schema capability manifest, the init --agents AGENTS.md template, the managed AGENTS.md block that hooks install --target agent refreshes on upgrade, and a compact cheat sheet in the root --help. The agent-docs generator renders the same matrix into SKILL.md from the schema JSON, tolerating targets that have not adopted the markers. Drift tests parse every row through the live CLI, and a unit test pins the read-only contract (no mutating commands).\n\nOpt-in telemetry gains a stable anonymous install grouping token so adoption breadth (distinct workflows per install per week) becomes measurable. The token is freshly random, minted on explicit enable (or lazily under env-only FALLOW_TELEMETRY=on without persisting a config-level enable), deleted on disable, and sent only as the X-Fallow-Install transport header, never as an event property, keeping serialized events identifier-free.",
          "timestamp": "2026-06-11T17:01:07+02:00",
          "tree_id": "6c8b22263a3ce5c1897fff1f15b07210a30c25f8",
          "url": "https://github.com/fallow-rs/fallow/commit/0fa99d2eaeb7eae5c440dcb374ab94bfc84bcd4c"
        },
        "date": 1781190616668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279755512,
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
          "id": "af46158ac03683c59215ccdf0b697a6e31296865",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.93.0",
          "timestamp": "2026-06-11T17:36:58+02:00",
          "tree_id": "a416807dc2edb6726faa6522d8128e33d5af394d",
          "url": "https://github.com/fallow-rs/fallow/commit/af46158ac03683c59215ccdf0b697a6e31296865"
        },
        "date": 1781192711974,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279755512,
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
          "id": "b49fc78ccf5554ebb543948bc196527253f177bf",
          "message": "refactor(telemetry): thread the install id into the spool drain as a parameter\n\ndrain_spool_file resolved the install grouping token internally, reading the real env and config dir; on a developer machine with telemetry enabled, cargo test could mint a token into the developer's real telemetry.json. The live resolution moves to the flush_spool_in_background spawn site (same background thread, same On-gating) and the drain takes the resolved token as a parameter, so unit tests never touch the real environment.",
          "timestamp": "2026-06-11T18:27:56+02:00",
          "tree_id": "ff29ba110e98165102a0ed390b52398e9c605722",
          "url": "https://github.com/fallow-rs/fallow/commit/b49fc78ccf5554ebb543948bc196527253f177bf"
        },
        "date": 1781195730037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279762176,
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
          "id": "2feb62016515316b235bce1133be0a6ebe8bd731",
          "message": "refactor: reduce oversized analysis helpers",
          "timestamp": "2026-06-11T18:48:08+02:00",
          "tree_id": "1c594f6f51249415fe15ff67dd041122ecd25837",
          "url": "https://github.com/fallow-rs/fallow/commit/2feb62016515316b235bce1133be0a6ebe8bd731"
        },
        "date": 1781197066334,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279714056,
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
          "id": "6afcaa987555292f319e8a7d70856afeaea7a82c",
          "message": "feat(agent): add onboarding flow primitives\n\nAdd read-only hook status JSON for Git, Claude, and Codex surfaces so agents can inspect managed setup before mutating files. Mark agent gate audit runs with the existing hidden gate marker so Impact can record blocked-then-cleared containment events.\n\nPersist project-level onboarding declines in the existing Impact store and expose telemetry explicit-decision state so the skill can avoid repeat prompts and avoid asking users who already chose telemetry on or off.",
          "timestamp": "2026-06-11T21:06:34+02:00",
          "tree_id": "cb2fba2ffa59622ff0bcb8f0f5af09c89f9d8007",
          "url": "https://github.com/fallow-rs/fallow/commit/6afcaa987555292f319e8a7d70856afeaea7a82c"
        },
        "date": 1781205404309,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279942368,
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
          "id": "291c4b22f6121b8ac7e442dac0dd2c50d3392a13",
          "message": "fix(hooks): raise agent gate version floor to 2.85.0\n\nThe gate script now passes --gate-marker agent, a flag introduced in\nv2.85.0. A PATH binary between 2.46.0 and 2.84.x passed the old floor\ncheck but rejects the flag with a usage error, so every audit took the\nfail-open skip path and the gate silently stopped gating. Raising the\nfloor turns that combination into the designed hard block with an\nupgrade hint.",
          "timestamp": "2026-06-11T21:39:13+02:00",
          "tree_id": "cae9ecd0176487471c7e152a83a645db117742d7",
          "url": "https://github.com/fallow-rs/fallow/commit/291c4b22f6121b8ac7e442dac0dd2c50d3392a13"
        },
        "date": 1781207211220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 279942368,
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
      }
    ]
  }
}