window.BENCHMARK_DATA = {
  "lastUpdate": 1781101940143,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8d4f9fafe307febab0b98844c632d7fd83a71d3",
          "message": "fix(security): detect dynamic regex construction\n\nDetect non-literal RegExp(pattern) and new RegExp(pattern) through the existing security-sink catalogue, with CWE-1333 metadata and candidate framing.\n\nLiteral regex patterns stay quiet, and literal regex catastrophic-backtracking analysis remains out of scope for the separate regex-complexity work.\n\nFixes #896.",
          "timestamp": "2026-06-06T19:16:42+02:00",
          "tree_id": "b966124e0e7584d154cca907fcaaf08bc69402e1",
          "url": "https://github.com/fallow-rs/fallow/commit/d8d4f9fafe307febab0b98844c632d7fd83a71d3"
        },
        "date": 1780766582717,
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
          "id": "5dd55c2a9948a8969a604d88b1864e1e4a94beda",
          "message": "feat(security): detect source-backed log exposure\n\nAdd a source-backed logging sink category for fallow security. The catalogue now flags common console, logger, and log calls only when their first argument traces to process.env or request input, so ordinary literal and source-free logging remains quiet.\n\nStore direct source paths on captured sink arguments so expressions such as process.env.SECRET can be matched without an intermediate local binding. Bump the extraction cache version and add focused extraction plus integration coverage.\n\nFixes #876.",
          "timestamp": "2026-06-06T19:25:24+02:00",
          "tree_id": "c99ebadad92fab011c844eabc8a8f5b62736d2e8",
          "url": "https://github.com/fallow-rs/fallow/commit/5dd55c2a9948a8969a604d88b1864e1e4a94beda"
        },
        "date": 1780766917711,
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
          "id": "de853cace5d58bff04fc6eb43a544c45e3fa735e",
          "message": "fix(security): flag jwt verify without algorithms\n\nDetect jsonwebtoken verify calls that omit an explicit algorithms option while keeping safe allowlisted calls and unprovenanced lookalikes quiet.\n\nFixes #898.",
          "timestamp": "2026-06-06T19:34:54+02:00",
          "tree_id": "ba5dffa33fbcb4f7baab9387f4bb9461e1d66ebe",
          "url": "https://github.com/fallow-rs/fallow/commit/de853cace5d58bff04fc6eb43a544c45e3fa735e"
        },
        "date": 1780767725695,
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
          "id": "3de5f84b8817c0284d6808a17c4483db3c96e1ca",
          "message": "fix(security): flag disabled TLS validation\n\nAdd a security catalogue candidate for disabled TLS certificate validation in Node HTTPS and TLS option objects. The detector captures rejectUnauthorized: false only on provenance-gated HTTPS/TLS call shapes, plus the exact NODE_TLS_REJECT_UNAUTHORIZED = \"0\" assignment.\n\nThis keeps same-named local helpers and safe rejectUnauthorized values quiet, while preserving the opt-in candidate framing for agent verification.\n\nFixes #895.",
          "timestamp": "2026-06-06T19:45:52+02:00",
          "tree_id": "5d36c12045a52275207ed6730647eee70a1ff587",
          "url": "https://github.com/fallow-rs/fallow/commit/3de5f84b8817c0284d6808a17c4483db3c96e1ca"
        },
        "date": 1780768125157,
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
          "id": "fd60baab71a41f62fa4c0d10a50dac5d09d4501f",
          "message": "fix(security): unwrap static option objects for jwt checks\n\nFix a review-found gap in the JWT missing-algorithms candidate. Object-key metadata now unwraps static TypeScript wrappers such as `as const`, matching the existing literal and object-property capture behavior.\n\nThe regression fixture covers missing options, missing algorithm keys, static-wrapped missing keys, and static-wrapped safe allowlists.\n\nFollow-up to #898.",
          "timestamp": "2026-06-06T20:02:59+02:00",
          "tree_id": "7304af88a0c0aa7a60520ee2acdb57a6ec04c5f4",
          "url": "https://github.com/fallow-rs/fallow/commit/fd60baab71a41f62fa4c0d10a50dac5d09d4501f"
        },
        "date": 1780769172883,
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
          "id": "09a2417e6705c7363f9aa36ff579b2b7eab35b29",
          "message": "refactor: split report builders",
          "timestamp": "2026-06-06T20:20:58+02:00",
          "tree_id": "615bb33e420aa18850ffa048d4b5043f1631886a",
          "url": "https://github.com/fallow-rs/fallow/commit/09a2417e6705c7363f9aa36ff579b2b7eab35b29"
        },
        "date": 1780770310609,
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
          "id": "871a76504fc4878f2bad7208740639724d9d91e0",
          "message": "feat(mcp): scope security candidates by path\n\nAdd a file scope to the existing security_candidates MCP tool by forwarding path filters through fallow security.\n\nExpose the same scope as a repeated --file flag on the security command so agents can ask for candidates anchored in or traced through recently edited files without scanning unrelated findings.\n\nFixes #889.",
          "timestamp": "2026-06-06T21:36:57+02:00",
          "tree_id": "ae00436b2d8df65bfb833e1ff96a2fbe611dd0f2",
          "url": "https://github.com/fallow-rs/fallow/commit/871a76504fc4878f2bad7208740639724d9d91e0"
        },
        "date": 1780774961283,
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
          "id": "33935030597a35f5f33577d8988584b78c3aacaa",
          "message": "feat(security): add opt-in hardcoded secret candidates\n\nAdd an opt-in hardcoded-secret security category for first-party literal credentials.\n\nDetect known provider credential prefixes first, and only use entropy when the surrounding binding or property name is secret-shaped. Evidence stays redacted and the category remains explicitly scoped through security category configuration.\n\nFixes #892.",
          "timestamp": "2026-06-06T21:42:46+02:00",
          "tree_id": "1e600c86eb4e70f2bf63f4fab7a6f73288785559",
          "url": "https://github.com/fallow-rs/fallow/commit/33935030597a35f5f33577d8988584b78c3aacaa"
        },
        "date": 1780775255069,
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
          "id": "aeaa9768a40b4ff8f5d0930b2ac1e99a7a870754",
          "message": "docs: remove self analyzed badge",
          "timestamp": "2026-06-06T23:16:29+02:00",
          "tree_id": "b7490d6f69069a9459162a89a446523464b0534d",
          "url": "https://github.com/fallow-rs/fallow/commit/aeaa9768a40b4ff8f5d0930b2ac1e99a7a870754"
        },
        "date": 1780780786466,
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
          "id": "e36a9875896e61b54045da0e711c3023e8eaf317",
          "message": "docs: tidy readme badges",
          "timestamp": "2026-06-07T09:35:09+02:00",
          "tree_id": "c31c649cba6d2907c86f14b732837c255e65c22f",
          "url": "https://github.com/fallow-rs/fallow/commit/e36a9875896e61b54045da0e711c3023e8eaf317"
        },
        "date": 1780817887589,
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
          "id": "c8d99fed2020c7892332e41c9d1c73afa5a15cf7",
          "message": "docs: sync security candidate notes",
          "timestamp": "2026-06-07T09:48:42+02:00",
          "tree_id": "b7a34b0f9882e84eee595cc40784979f62b44864",
          "url": "https://github.com/fallow-rs/fallow/commit/c8d99fed2020c7892332e41c9d1c73afa5a15cf7"
        },
        "date": 1780818758388,
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
          "id": "7a9db3ff4e37e9279b56e9ffa7133aed251db180",
          "message": "feat(security): rank framework entry-point sources\n\nAdd dependency-gated source rows for framework handler inputs, Next.js handlers and server actions, queue job payloads, and MCP tool inputs.\n\nRecord recognizable framework callback parameters during extraction so existing security sink candidates can be ranked as source-backed. Direct request accessor paths still take precedence over broader handler-param bindings, keeping evidence specific when both sources are present.\n\nNestJS decorator-injected params remain out of scope because they need decorator parameter capture rather than member-path matching.\n\nFixes #879.",
          "timestamp": "2026-06-07T10:15:44+02:00",
          "tree_id": "05f61c32d5a79aeb01c0f8bfe527da426f40d08f",
          "url": "https://github.com/fallow-rs/fallow/commit/7a9db3ff4e37e9279b56e9ffa7133aed251db180"
        },
        "date": 1780820323940,
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
          "id": "beb99e87d7e6d777f40639c07441d391cc2c0af7",
          "message": "fix(security): rank one-hop source helper sinks\n\nRecord conservative same-module helper summaries for function declarations, const arrow helpers, and const function expressions that return source-backed parameter paths. Locals initialized from one helper call now inherit the source-backed ranking signal while aliases, cross-module calls, helper chains, and shadowed helper names stay unbacked.\n\nBump the extract cache version and cover the behavior with extract-layer and security catalogue regressions, including hoisted functions and negative shadowed or multi-hop cases.\n\nFixes #878.",
          "timestamp": "2026-06-07T10:22:10+02:00",
          "tree_id": "751529794f7f11307bfba82b43e3b770c4dceb5a",
          "url": "https://github.com/fallow-rs/fallow/commit/beb99e87d7e6d777f40639c07441d391cc2c0af7"
        },
        "date": 1780820746044,
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
          "id": "71394a249e57846fca99797a9a48c06876cb79c5",
          "message": "fix(security): add issue 901 literal rows\n\nFixes #901.\n\nAdds the remaining literal-tier security catalogue rows for Electron unsafe BrowserWindow preferences, world-writable chmod modes, predictable temp-file writes, and mysql/mysql2 multipleStatements options.\n\nVerification passed locally:\n- cargo check --workspace\n- cargo test --workspace --all-targets\n- cargo clippy --workspace --all-targets -- -D warnings\n- cargo fmt --all -- --check\n- git diff --check\n- typos .\n- rustdoc with warnings denied\n- fallow audit JSON\n- real-project fallow security JSON smoke",
          "timestamp": "2026-06-07T10:31:01+02:00",
          "tree_id": "3d41dc604ae831b9e2577c74d0a182546c6d2b15",
          "url": "https://github.com/fallow-rs/fallow/commit/71394a249e57846fca99797a9a48c06876cb79c5"
        },
        "date": 1780821378047,
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
          "id": "08912ff4b864e56e5e2f1439292338c12feb3207",
          "message": "fix(security): flag source-backed redos regex sinks\n\nCapture risky literal regex applications as source-backed security sink candidates. The extractor records the risky regex fragment for literal regexes and constant RegExp strings, then the existing catalogue emits redos-regex CWE-1333 findings only when the input traces to an untrusted source.\n\nSafe literal patterns, mutable regex bindings, and source-free inputs stay quiet. The extraction cache version is bumped because security_sinks now carries the optional regex fragment metadata.\n\nFixes #928.",
          "timestamp": "2026-06-07T10:38:38+02:00",
          "tree_id": "a4a3e3df008bb9c95870e97a515a18cd4009fd34",
          "url": "https://github.com/fallow-rs/fallow/commit/08912ff4b864e56e5e2f1439292338c12feb3207"
        },
        "date": 1780821722630,
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
          "id": "f7161395e92145f1e673fa5b9d99bf52e60ec28e",
          "message": "fix: tighten security source matching\n\nTighten framework-source detection and package-subpath provenance for the security catalogue follow-up.",
          "timestamp": "2026-06-07T11:20:22+02:00",
          "tree_id": "5294391a49e046cbaf9051049998d81006f00613",
          "url": "https://github.com/fallow-rs/fallow/commit/f7161395e92145f1e673fa5b9d99bf52e60ec28e"
        },
        "date": 1780824190392,
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
          "id": "c9a61199b79273e3aff6c43bd724ea781cef1c24",
          "message": "refactor: group file report inputs",
          "timestamp": "2026-06-07T11:44:44+02:00",
          "tree_id": "c26304f47df0fe3645a647cb63d5a4ba8bb60be6",
          "url": "https://github.com/fallow-rs/fallow/commit/c9a61199b79273e3aff6c43bd724ea781cef1c24"
        },
        "date": 1780826969422,
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
          "id": "122a6fc5f4d96af9f131ff844780461637cd27f3",
          "message": "refactor: group large function inputs",
          "timestamp": "2026-06-07T12:33:17+02:00",
          "tree_id": "01280b9464e868236493ac18cbe2d933fbdc62a0",
          "url": "https://github.com/fallow-rs/fallow/commit/122a6fc5f4d96af9f131ff844780461637cd27f3"
        },
        "date": 1780831322244,
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
          "id": "0c0b0205780338c7db2742fb39ce0a548972cb96",
          "message": "refactor: group health snapshot inputs",
          "timestamp": "2026-06-07T13:53:56+02:00",
          "tree_id": "dbb08a2244f2d7815b6a8a006e6647c51718e376",
          "url": "https://github.com/fallow-rs/fallow/commit/0c0b0205780338c7db2742fb39ce0a548972cb96"
        },
        "date": 1780841746128,
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
          "id": "65fcdcbe2e999e45fc3246ea8453aa314d5bb49b",
          "message": "fix: restore literal security tracking after rebase",
          "timestamp": "2026-06-07T23:54:53+02:00",
          "tree_id": "933a81834d1aa340d2108d5f1dfb5e509f47b2f7",
          "url": "https://github.com/fallow-rs/fallow/commit/65fcdcbe2e999e45fc3246ea8453aa314d5bb49b"
        },
        "date": 1780869585912,
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
            "email": "tris203@gmail.com",
            "name": "Tristan Knight",
            "username": "tris203"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24a5b4ad426c3683a4ebad174ff3ef34c63e6ce4",
          "message": "feat(lsp): modernize diagnostics and add Neovim integration docs (#1033)\n\nMigrates the LSP server from tower-lsp/lsp-types to the maintained tower-lsp-server + ls-types, adds LSP 3.17 pull diagnostics with workspace/diagnostic/refresh, and documents Neovim integration.\n\nDiagnostic delivery keys on whether a client actually pulls (a real textDocument/diagnostic), not on the advertised refreshSupport, so push-only clients like the VS Code extension keep receiving open-file diagnostics while pull clients (Neovim, Zed, Helix) avoid duplicate push/pull namespaces. Diagnostic and code-lens refreshes are fire-and-forget so a slow client cannot stall analysis. Includes a Server::serve-level integration test and allows the MIT-0 license for the new dependency chain.",
          "timestamp": "2026-06-08T07:38:38+02:00",
          "tree_id": "b0f13f1e032cb209944a995f717de7bd1424ffe4",
          "url": "https://github.com/fallow-rs/fallow/commit/24a5b4ad426c3683a4ebad174ff3ef34c63e6ce4"
        },
        "date": 1780897297726,
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
          "id": "1115f6667e18ad8f929366ee1432c9878ab3caf5",
          "message": "feat(vscode): always-visible status-bar toggle to hide/show diagnostics\n\nAdds an always-visible $(eye) Fallow status-bar button that hides or shows all\nFallow diagnostics in the editor with one click (it then reads $(eye-closed)\nFallow: hidden). Previously the only on/off control appeared after something was\nalready muted, so a first-time user had no visible way to silence the squiggles.\nThe button reuses the existing toggle command and the shared DiagnosticFilter,\nso it stays in sync with the right-gutter status item and the Manage quick pick.\nEditor-only: CI and fallow check still report every finding. Gated by the new\nfallow.diagnostics.statusBar setting (default on); created/disposed live on the\nsetting change, mirroring the audit status-bar item.\n\nAlso renames the diagnostic-visibility commands, quick pick, code action, and\nstatus messages to a consistent hide/show verb (command IDs and internal API\nunchanged).\n\nCloses #1035",
          "timestamp": "2026-06-08T07:47:57+02:00",
          "tree_id": "e8e3a89a9d3b5dbd2945d9e73f99ff4a1db83b00",
          "url": "https://github.com/fallow-rs/fallow/commit/1115f6667e18ad8f929366ee1432c9878ab3caf5"
        },
        "date": 1780897846167,
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
          "id": "a0775db69a3e6d8f571015c96b69238815240cb3",
          "message": "feat(vscode): add diagnostic mute baseline setting\n\nAdd a resource-scoped `fallow.diagnostics.mutedCategories` setting so teams can commit a shared editor mute baseline in `.vscode/settings.json`.\n\nCompose that baseline with the existing per-machine mute controls, including local overrides that can hide more categories or show a baseline-hidden category. Refresh the baseline after live diagnostic categories load so newly reported rule codes can be recognized without restarting.\n\nFixes #1039.",
          "timestamp": "2026-06-08T10:12:45+02:00",
          "tree_id": "a7f22d3f4cec83abe96ff1d85f1c16da2df3aea6",
          "url": "https://github.com/fallow-rs/fallow/commit/a0775db69a3e6d8f571015c96b69238815240cb3"
        },
        "date": 1780906754924,
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
          "id": "485fc8030389e7b4dfc848e1ce44c3f3d6cb0df1",
          "message": "feat(config): add configurable cache directory\n\nAdd `cache.dir` and `FALLOW_CACHE_DIR` so teams can relocate fallow's persistent extraction and audit snapshot caches outside the default `.fallow/` directory.\n\nKeep the default project-local cache path for compatibility, but print a one-time human first-run note when the default cache directory is newly created. Quiet runs, machine formats, CI, non-TTY paths, and `--no-cache` stay silent.\n\nFixes #1036.",
          "timestamp": "2026-06-08T10:23:39+02:00",
          "tree_id": "5704779c02e1e25d238fb58f7e800e31bd32499e",
          "url": "https://github.com/fallow-rs/fallow/commit/485fc8030389e7b4dfc848e1ce44c3f3d6cb0df1"
        },
        "date": 1780907211079,
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
          "id": "db88c3d2cf5cfb5451e37df043467a0567a500e1",
          "message": "test(cli): make cache remap tests platform-neutral\n\nMake the cache remap tests build platform-native absolute paths from a temporary directory so they pass on Windows as well as Unix.",
          "timestamp": "2026-06-08T10:36:09+02:00",
          "tree_id": "1c59e514a9c420241c811ce14814e100c9e3f8cb",
          "url": "https://github.com/fallow-rs/fallow/commit/db88c3d2cf5cfb5451e37df043467a0567a500e1"
        },
        "date": 1780908022772,
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
          "id": "fd52fb8b248ce9bc1ec31e22ebcc7fec609a2d03",
          "message": "Merge pull request #1049 from fallow-rs/chore/license-team-to-pro-doc\n\nchore(license): reflect team -> pro tier rename in claims doc and fixtures",
          "timestamp": "2026-06-08T10:50:34+02:00",
          "tree_id": "136bc7b503f3d3268a87d2e2c08fc0baa7281511",
          "url": "https://github.com/fallow-rs/fallow/commit/fd52fb8b248ce9bc1ec31e22ebcc7fec609a2d03"
        },
        "date": 1780908817106,
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
          "id": "7f8615170f7c3585b12f61e14a65f5b5ea62db90",
          "message": "ci: skip benchmark targets in Windows check\n\nKeep the Windows push check focused on library, binary, and integration test targets. This avoids executing benchmark binaries inside the timed Windows check job while benchmark execution remains covered by dedicated benchmark workflows.",
          "timestamp": "2026-06-08T10:57:31+02:00",
          "tree_id": "e8e63bf32244c58fad63150158768cde76325db0",
          "url": "https://github.com/fallow-rs/fallow/commit/7f8615170f7c3585b12f61e14a65f5b5ea62db90"
        },
        "date": 1780909225423,
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
          "id": "baec513f7210dde8a55a774c6dbd256309531021",
          "message": "feat(security): detect resource amplification sinks (CWE-400) (#1034)\n\nAdd a source-backed resource-amplification (CWE-400) category to the opt-in\nfallow security tainted-sink catalogue. Untrusted request input that reaches\nArray(n) / new Array(n), Buffer.alloc / allocUnsafe / allocUnsafeSlow, or\nString.prototype.repeat / padStart / padEnd now surfaces as a candidate for\nagent verification, so an attacker-controlled size that drives an unbounded\nallocation no longer looks clean.\n\nThe extract visitor skips size arguments that are directly clamped with\nMath.min(input, literalCap) (or a nested Math.max(..., Math.min(...))) before\ncatalogue matching, keeping the rule false-negative-biased. The matcher set\nlives in crates/core/data/security_matchers.toml; the clamp pruning lives in\ncrates/extract/src/visitor/visit_impl.rs; CACHE_VERSION bumps 134 to 135\nbecause warm caches predate the clamp pruning. The category reuses the existing\ntainted-sink finding kind, so there is no new IssueKind, CLI flag, or output\nformat, and findings never appear under bare fallow or audit.\n\nFixes #929.",
          "timestamp": "2026-06-08T11:00:57+02:00",
          "tree_id": "c44966ba91d36f3fe0fc7aa20e0e77c2805f1042",
          "url": "https://github.com/fallow-rs/fallow/commit/baec513f7210dde8a55a774c6dbd256309531021"
        },
        "date": 1780909459688,
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
          "id": "1e134741270e263249f4228f5298094005dfdf62",
          "message": "feat(security): rank sinks by source reachability\n\nAdd module-level untrusted-source reachability to security candidate ranking. The ranking pass now seeds source modules from existing source catalogue evidence and value-import graph traversal, keeps runtime reachability ahead of the new signal, and excludes client-server leaks and hardcoded-secret candidates.\n\nSurface the context through JSON, SARIF, human output, MCP descriptions, VS Code tooltips, generated contracts, and changed-file filtering. The trace is ranking context only and does not prove value flow.\n\nFixes #885.",
          "timestamp": "2026-06-08T11:35:15+02:00",
          "tree_id": "5bac23ee53f8fa769371625e9d5feb5526b6d7a5",
          "url": "https://github.com/fallow-rs/fallow/commit/1e134741270e263249f4228f5298094005dfdf62"
        },
        "date": 1780911582075,
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
          "id": "b6abad014ce375ed88a80cb57b0479dea588fa41",
          "message": "fix(security): keep source reachability diff matches\n\nShared diff filtering already retained security candidates when the sink anchor or detector trace matched the changed lines. Source reachability added a second trace under reachability, but that trace was not included in the diff predicate, so diff-scoped runs could hide a candidate introduced by an untrusted-source path change.\n\nInclude reachability.untrusted_source_trace in the shared diff filter, add regression coverage for that path, and update nearby comments so the ranking and SARIF docs describe the current source-reachability contract.\n\nFollow-up to #1050.",
          "timestamp": "2026-06-08T12:03:23+02:00",
          "tree_id": "3b3e8b4375605a49d7d50da1ab224a20e43afc17",
          "url": "https://github.com/fallow-rs/fallow/commit/b6abad014ce375ed88a80cb57b0479dea588fa41"
        },
        "date": 1780913293235,
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
          "id": "2e1d6f5b76f8f0e2510904b5bc25bdebc0be5835",
          "message": "feat(lsp): surface security candidates as opt-in diagnostics (#891)\n\nSurface AnalysisResults.security_findings as opt-in LSP diagnostics at INFORMATION severity (the LSP translation of the CLI's advisory framing for unverified candidates, not mapped from rule severity), with a confidence-first hover and a suppress code action. Reuses the existing diagnostics, hover, and code-action infrastructure; opt-in is automatic because the security rules default off and the LSP reuses the project config, so findings appear only when a rule is raised to warn or error.\n\nEach diagnostic carries structured data (kind, category, cwe, sourceBacked, reachableFromEntry, blastRadius, crossesBoundary) so agents reading editor diagnostics triage off the wire. The hover leads with the confidence signals and points to fallow security --file for the full trace. A line-level suppress is offered only for TaintedSink (the only kind whose detector honors line-level suppression); both kinds keep the file-level suppress.\n\nEditor-agnostic: the squiggle, hover, and code action work in any LSP client (VS Code, Neovim, Helix, Zed) with no client change.\n\nFixes #891.",
          "timestamp": "2026-06-08T14:26:30+02:00",
          "tree_id": "0c9527a081318ea6a8cfa0f10bdc655cf2de991b",
          "url": "https://github.com/fallow-rs/fallow/commit/2e1d6f5b76f8f0e2510904b5bc25bdebc0be5835"
        },
        "date": 1780921820401,
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
          "id": "a5bf70c7b630218ab4b514f2d184670377374292",
          "message": "feat(vscode): progressive-disclosure complexity breakdown\n\nReworks the VS Code inline complexity breakdown into progressive disclosure: a compact lens sits above each complex function (fallow.health.inlineComplexity, now default on), and the dense per-line +N breakdown is revealed per function instead of all at once.\n\nThree ways to reveal a function's breakdown, sharing one unified expansion state the lens reflects: select its finding in the Health view (lens reads hide breakdown while selected), click the lens to expand/collapse, or hover the function/decision-point line (popup, via a new HoverProvider decoupled from the decoration so peek works with afterText off). fallow.complexity.afterText now defaults to false.\n\nThe lens is rendered by the extension (ComplexityLensProvider) so it can toggle; the extension no longer forwards health.inlineComplexity to the LSP, so the editor-agnostic LSP complexity lens stays available to other editors (Neovim/Zed/Helix) with no double-render in VS Code.\n\nRefs #992.",
          "timestamp": "2026-06-08T15:04:52+02:00",
          "tree_id": "2d8953c5481fe6f83ac71e93d2a19c16270c78ec",
          "url": "https://github.com/fallow-rs/fallow/commit/a5bf70c7b630218ab4b514f2d184670377374292"
        },
        "date": 1780924072848,
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
          "id": "606aac909e8d2f0c64b9e9259bc98ae1a84687a8",
          "message": "feat(security): regression gate for new sinks in changed lines (#886)\n\nTier 1 of the security regression gate (#886). fallow security --gate new reports ONLY security-sink candidates introduced on a CHANGED line and exits 8 if any exist, so a PR can be gated on new exposure without gating on the whole candidate backlog. A refactor that merely touches a file already containing a sink passes; a diff the gate cannot compute is a loud exit 2, never a green gate.\n\nThe gate predicate is a separate, stricter pass than the advisory diff filter: it keeps a new sink anchor on an added line or an UntrustedSource/Sink trace hop on an added line, and drops the SecretSource file-level exception and pass-through hops. Exit 8 is dedicated and pure; the gate supersedes --fail-on-issues. Findings stay unverified candidates (REVIEW REQUIRED human output, SARIF level note with the verdict in run.properties.fallowGate, additive gate JSON block).\n\nTier 2 (newly-reachable reachability delta) is deferred and tracked in #1056.\n\nRefs #886.",
          "timestamp": "2026-06-08T15:36:55+02:00",
          "tree_id": "8f0b98e576157bf0833e26eb5727e9b23004b9c0",
          "url": "https://github.com/fallow-rs/fallow/commit/606aac909e8d2f0c64b9e9259bc98ae1a84687a8"
        },
        "date": 1780925993515,
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
          "id": "ea6e3daf3df99a5a3c637ab673f47abaa15c7269",
          "message": "fix(vscode,lsp): keep production mode in sync across editor surfaces (#1059)\n\n`fallow.production` reached the CLI-driven sidebar (`--production`) but was never forwarded to the `fallow-lsp` server, so the sidebar tree and the editor diagnostics disagreed on dead-code findings whenever production mode was on.\n\nThe setting is now forwarded to both surfaces and becomes a tri-state `auto` / `on` / `off` (default `auto`): `auto` defers to the project `.fallowrc.json`, `on` forces production on, `off` forces it off on both surfaces. A new global `--no-production` flag (conflicts with `--production`) gives the CLI sidebar the force-off the LSP override already has. `fallow.production` and the `fallow.duplication.*` settings now use `resource` scope so a stale global value no longer overrides a project's committed config.\n\nEditor-only: CI, `fallow dead-code`, and `fallow audit` are unchanged.\n\nFixes #1055.",
          "timestamp": "2026-06-08T16:28:34+02:00",
          "tree_id": "3e42f47c483e44bfdbbbe20c8f918b225be8ad6a",
          "url": "https://github.com/fallow-rs/fallow/commit/ea6e3daf3df99a5a3c637ab673f47abaa15c7269"
        },
        "date": 1780929339165,
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
          "id": "5dc83a4cb637758600098436cf11b665bf7b8c9e",
          "message": "feat(security): structure findings as agent-actionable candidate records\n\nReshape `fallow security --format json` so an AI agent can act on each finding directly. All additions are additive and output-only; the schema version stays V1, and human and SARIF output are unchanged.\n\nEvery finding gains a `candidate { source_kind, sink, boundary }` record (the untrusted-input kind as a stable catalogue id, a self-contained sink with the captured callee, and the boundary crossed), an optional `taint_flow { source, sink, path }` triple present only when an untrusted source is import-reachable to the sink, and a stable `finding_id` equal to its SARIF fingerprint for cross-run correlation. There is no `impact` field: deciding exploitability is the agent's job.\n\nThe candidate and taint_flow are pure re-projection of data the analysis already computes (the reachability pass, the previously-discarded catalogue source id, the SARIF fingerprint). No new taint analysis. The `taint_flow.path` is a compact shape; the full ordered hops stay on `reachability.untrusted_source_trace` and are not duplicated. The `export_visibility` and package boundary kinds are reserved for a follow-up rather than emitted as always-false.\n\nFixes #900.",
          "timestamp": "2026-06-08T16:54:37+02:00",
          "tree_id": "2f472a92829898760e8e8132db5451963b1167e7",
          "url": "https://github.com/fallow-rs/fallow/commit/5dc83a4cb637758600098436cf11b665bf7b8c9e"
        },
        "date": 1780930665295,
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
          "id": "171d49a4c1acc707f3b08d19a7da20d27557fc31",
          "message": "feat(security): expand source-backed entry inputs\n\nAdd catalogue rows and extractor bindings for GraphQL resolver args, tRPC procedure input, webhook raw request bodies, and exact DOM source reads. The tRPC capture is limited to procedure chains so ordinary query callbacks do not gain a source-backed ranking signal.\\n\\nAdd focused extractor, catalogue, integration, and fixture coverage for the new source shapes. Bump the extraction cache version so warm caches re-extract files with the updated tainted-binding semantics.\\n\\nFixes #899.",
          "timestamp": "2026-06-08T20:12:53+02:00",
          "tree_id": "5fe67bda57eca90f39db59f1988b9466c120a98a",
          "url": "https://github.com/fallow-rs/fallow/commit/171d49a4c1acc707f3b08d19a7da20d27557fc31"
        },
        "date": 1780942581764,
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
          "id": "3817259bae4480f42e261b14dd89ed2bfe642653",
          "message": "fix(vscode): restore security test contract\n\nUpdate VS Code security test fixtures for the current SecurityFinding wire contract by supplying stable finding ids and candidate records in shared helpers.\n\nApply the repository JS formatter to the touched VS Code sources and rename a shadowing parameter so the JS lint and format job passes again.",
          "timestamp": "2026-06-08T20:44:10+02:00",
          "tree_id": "ee129460a5374c5d5efce12c829d7bd83a7b17ff",
          "url": "https://github.com/fallow-rs/fallow/commit/3817259bae4480f42e261b14dd89ed2bfe642653"
        },
        "date": 1780944437716,
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
          "id": "22158ab9fd6601b6c00885558585df7e0dfd3577",
          "message": "feat(security): rank sink candidates with runtime coverage\n\nAdd opt-in runtime coverage enrichment to `fallow security` for tainted-sink candidates. The security output now records whether a candidate is runtime hot, runtime cold, never executed, or unknown when runtime evidence is supplied.\n\nUse the runtime state as an additive ranking signal: hot candidates move up, cold and never-executed candidates move down, and static reachability remains the fallback when no runtime evidence is available.\n\nFixes #887.",
          "timestamp": "2026-06-08T20:49:38+02:00",
          "tree_id": "c38248471c5de5f1794a4f80a492870f0b24ba49",
          "url": "https://github.com/fallow-rs/fallow/commit/22158ab9fd6601b6c00885558585df7e0dfd3577"
        },
        "date": 1780944796092,
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
          "id": "6215accdd197743fd176646afaad0c0d8139a0a2",
          "message": "feat(security): add attack surface inventory\n\nAdd an opt-in `fallow security --surface` JSON inventory that maps untrusted entry points to reachable sink candidates. The output is agent-facing and keeps defensive-boundary context as a verification prompt, not a human-facing missing-guard verdict.\n\nExpose the surface flag through MCP and keep the generated JSON schema and TypeScript contracts aligned with the new security output shape.\n\nFixes #888.",
          "timestamp": "2026-06-08T20:58:20+02:00",
          "tree_id": "1bb4928bc1a9e866aa2dff34bde53186d74a8a6e",
          "url": "https://github.com/fallow-rs/fallow/commit/6215accdd197743fd176646afaad0c0d8139a0a2"
        },
        "date": 1780945307103,
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
          "id": "1d26ae1ccca04cc69803a6ff3d19599c61cfb8d5",
          "message": "feat(security): secret-to-network exfil category with destination signal\n\nAdds an opt-in `secret-to-network` security candidate category (CWE-201): a non-public `process.env` / `import.meta.env` secret reaching a network sink's body/options argument (`fetch` / `axios` / `got` / `http(s).request`) via same-identifier source-backed flow, not module-level co-occurrence.\n\nBecause legitimate auth IS secret-to-network, the category is include-required (admitted only via `security.categories.include`, like `hardcoded-secret`). A new `requires_source_kinds` matcher field gates it to a SECRET source (`process-env` / `import-meta-env`), so request-input-to-fetch stays the `ssrf` category's job. Each candidate carries a destination-host signal (`candidate.network.destination`: the request URL when it is a static literal, usually intended auth, or absent when the destination is dynamic, the higher-signal exfil case) so a reviewing agent triages exfil from intended auth without re-reading source.\n\nThe change also stops treating public-by-convention env vars (`NEXT_PUBLIC_`, `VITE_`, `REACT_APP_`, ...) as secrets across the catalogue (the shared `is_public_env_var` predicate moved to fallow-types), which also removes a latent false positive from the shipped `secret-pii-log`, and models Vite's `import.meta.env` as a secret source via a new `flatten_member_path` MetaProperty arm. The destination is captured on `SinkSite.url_arg_literal`; `CACHE_VERSION` 137 -> 138. No new IssueKind or schema-version bump (the `candidate.network` field is additive, output-only). Hardcoded-secret-as-source and a provider-match heuristic are reserved follow-ups; the candidate carries no `impact` (the agent's job).\n\nFixes #890.",
          "timestamp": "2026-06-08T23:15:57+02:00",
          "tree_id": "5d94d6839aa477d6dc34a2cc579864ae75864225",
          "url": "https://github.com/fallow-rs/fallow/commit/1d26ae1ccca04cc69803a6ff3d19599c61cfb8d5"
        },
        "date": 1780953535193,
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
          "id": "c36e7746273b0eb5f2887836f8af2a7a34a4e245",
          "message": "chore: release v2.90.0",
          "timestamp": "2026-06-08T23:44:08+02:00",
          "tree_id": "9f895f30acebc9b4fd91b0237ed49600a2f99968",
          "url": "https://github.com/fallow-rs/fallow/commit/c36e7746273b0eb5f2887836f8af2a7a34a4e245"
        },
        "date": 1780990444504,
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
          "id": "bd1ec11575519b16a32fa6da2d82dae72fa58e9d",
          "message": "fix(telemetry): report findings presence for audit and security\n\nAudit and security now report findings_present from the final results that users and agents see. Audit records the OR of its sub-results, including the no-change path as false, while security records whether the final filtered security_findings list is non-empty.\n\nThe regression coverage exercises inspect-mode telemetry for positive and clean audit and security runs, keeps no-analysis commands omitting the field, and updates the telemetry docs and changelog to match the wire contract.\n\nFixes #1060.",
          "timestamp": "2026-06-09T09:46:59+02:00",
          "tree_id": "864a4dc3a49e10890771d10e501c8d935b80e8b9",
          "url": "https://github.com/fallow-rs/fallow/commit/bd1ec11575519b16a32fa6da2d82dae72fa58e9d"
        },
        "date": 1780991394114,
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
          "id": "b6aaa2eefeb3a8148f0164a029cf03eda6f0a1d2",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.90.0",
          "timestamp": "2026-06-09T10:11:20+02:00",
          "tree_id": "6b930100cf05e06bc723b4103776f8dda355cfbc",
          "url": "https://github.com/fallow-rs/fallow/commit/b6aaa2eefeb3a8148f0164a029cf03eda6f0a1d2"
        },
        "date": 1780992860358,
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
          "id": "b5868dd2d6ef5cd8f3c7f025bcc125f203e303d4",
          "message": "fix(vscode): open dynamic route paths\n\nRoute VS Code sidebar tree opens through an internal `fallow.openFile` command so bracketed filesystem paths remain decoded until the extension host calls `Uri.file(...)`.\n\nApply the same open-path handling across unused-code, duplicates, health, security, and coverage tree items, with unit coverage for decoded Next.js dynamic route paths and the command handler.\n\nFixes #1071.",
          "timestamp": "2026-06-09T11:04:17+02:00",
          "tree_id": "98242f4669e249b7a8778bb51df066a9bdb56f8e",
          "url": "https://github.com/fallow-rs/fallow/commit/b5868dd2d6ef5cd8f3c7f025bcc125f203e303d4"
        },
        "date": 1780996033720,
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
          "id": "3d2577419d553a28adceb0b3a045c76e43182272",
          "message": "test(core): cover issue 1032 multi-entry workspaces\n\nExtend the issue 1032 regression fixture so the workspace tsconfig case matches the reporter's follow-up shape: no root tsconfig, multiple runtime entry modules, and per-module path mappings into a sibling package src tree.\n\nThe assertions now prove App, Backend, Event, and the aliased Firlefanz source file remain reachable while unrelated sibling source still reports unused. This is test-only coverage for the already released fix.\n\nFollow-up to #1032.",
          "timestamp": "2026-06-09T11:40:26+02:00",
          "tree_id": "742392e37006d00e20a6547b7e51024124b31e06",
          "url": "https://github.com/fallow-rs/fallow/commit/3d2577419d553a28adceb0b3a045c76e43182272"
        },
        "date": 1780998296208,
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
          "id": "4ed32a0de76079a62b8102696b8b4c7b4a0b2819",
          "message": "feat(telemetry): split admin workflow buckets\n\nTelemetry now labels project inventory, setup, and license command families with coarse workflow values instead of collapsing them into unknown. Watch remains grouped with code quality review because it continuously reruns analysis.\n\nThe regression tests cover routing, inspect-mode payloads, and the absence of findings_present for non-analysis commands. The telemetry docs and changelog describe the allowlisted buckets and privacy boundary.\n\nFixes #1061.",
          "timestamp": "2026-06-09T11:55:30+02:00",
          "tree_id": "37b923db945eb8d35ccbe877c5f8f342d4904085",
          "url": "https://github.com/fallow-rs/fallow/commit/4ed32a0de76079a62b8102696b8b4c7b4a0b2819"
        },
        "date": 1780999207556,
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
          "id": "705379c845d566deb9e557809aa8f74c30b99ac5",
          "message": "feat(telemetry): add failure reason\n\nRecord a coarse allowlisted failure_reason on failed workflow telemetry events. Known post-parse validation, diff setup, and unsupported-format failures are tagged at explicit failure boundaries, while unclassified failures stay unknown instead of parsing error text.\n\nSuccessful workflow events continue to omit the field. The inspect-mode tests, telemetry docs, and packaged skill reference cover the new allowlist and omission behavior.\n\nFixes #1063.",
          "timestamp": "2026-06-09T12:05:20+02:00",
          "tree_id": "a5a257027c1195ead5daadcb6139f63ffff570e0",
          "url": "https://github.com/fallow-rs/fallow/commit/705379c845d566deb9e557809aa8f74c30b99ac5"
        },
        "date": 1780999791631,
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
          "id": "aceeecd930028947fd21302a3fa83b59cfb671c0",
          "message": "feat(telemetry): add outcome buckets\n\nRecord coarse result-count buckets and review/report truncation fields in workflow telemetry without exposing exact counts, paths, rule ids, finding names, or snippets.\n\nWire the bucket helpers from final command results, preserve the existing findings_present and failure_reason contracts, and document the inspect-mode payload.\n\nFixes #1080.",
          "timestamp": "2026-06-09T12:27:46+02:00",
          "tree_id": "80875a5447f76a36f50e2783c77413048eea30a5",
          "url": "https://github.com/fallow-rs/fallow/commit/aceeecd930028947fd21302a3fa83b59cfb671c0"
        },
        "date": 1781001330437,
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
          "id": "57b444fab427b1b8ed98377e85ddf24c7a4c0c14",
          "message": "feat(telemetry): expose safe follow-up dimensions\n\nCloses #1078.\n\nAdds privacy-safe parent-run follow-up dimensions to telemetry events, keeps raw parent-run tokens out of event properties, and uses sanitized correlation only as private upload metadata.",
          "timestamp": "2026-06-09T12:40:24+02:00",
          "tree_id": "e0a90a49ed6066aadc6c6713da12fe2b5c2edf7d",
          "url": "https://github.com/fallow-rs/fallow/commit/57b444fab427b1b8ed98377e85ddf24c7a4c0c14"
        },
        "date": 1781001984207,
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
          "id": "e10ddd5b4a0df3e4acdcadae99d3457450669b30",
          "message": "feat(telemetry): add cache context to code quality review\n\nAdd a privacy-safe cache_state dimension for combined code_quality_review telemetry events. Values are allowlisted to cold, warm, partial, or unknown, and raw cache paths, directories, counts, timings, and repository identifiers stay out of the payload.\n\nPreserve the existing telemetry dimensions from current main, including admin workflow buckets, failure reason, outcome buckets, result count and truncation fields, spooled delivery, and safe follow-up dimensions.\n\nFixes #1062.",
          "timestamp": "2026-06-09T12:47:19+02:00",
          "tree_id": "910a85f6e77f27f144158d94ea187114e5b64869",
          "url": "https://github.com/fallow-rs/fallow/commit/e10ddd5b4a0df3e4acdcadae99d3457450669b30"
        },
        "date": 1781002235596,
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
          "id": "3290cd87a23554fdab424758851ec10c63d82d69",
          "message": "feat(telemetry): add coarse run context dimensions\n\nAdd privacy-preserving workflow context fields for run scope, config shape, report destination, and analysis mode. The CLI derives them from parsed arguments and already-loaded config state, using fixed enum buckets only.\n\nExtend inspect-mode coverage and telemetry docs so agents and operators can verify the exact payload shape without sending events. The event contract avoids raw paths, workspace names, config file names, rule names, package names, command lines, and repository identifiers.\n\nFixes #1079.",
          "timestamp": "2026-06-09T12:53:13+02:00",
          "tree_id": "36eaa2de14cf47d05eb6c703f9db123ef4ce60ed",
          "url": "https://github.com/fallow-rs/fallow/commit/3290cd87a23554fdab424758851ec10c63d82d69"
        },
        "date": 1781002585936,
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
          "id": "b69e2ead08540bdf26e99716e355b8db3d6b30b8",
          "message": "feat(telemetry): add scale buckets\n\nOpt-in telemetry now records coarse file-count, function-count, and average fan-out buckets for eligible analysis workflows.\n\nThe values are derived only from counts and graph counters that the workflow already computed, so exact counts, paths, dependency names, graph diameter, depth, and coupling metrics stay out of the payload.\n\nFixes #1064.",
          "timestamp": "2026-06-09T13:02:12+02:00",
          "tree_id": "d78ebcea9f0ffda82428112510cc6a229a05e343",
          "url": "https://github.com/fallow-rs/fallow/commit/b69e2ead08540bdf26e99716e355b8db3d6b30b8"
        },
        "date": 1781003155759,
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
          "id": "adeb88f58a8bfe3b2efbaac65be5d27cdf06f2f2",
          "message": "docs(telemetry): clarify scale bucket privacy wording\n\nClarify the changelog entry for the new telemetry scale buckets. The previous wording said structural metrics were kept out of the payload, which was too broad because avg_fan_out_bucket is intentionally a coarse graph-counter bucket.\n\nThe updated text keeps the same privacy contract while distinguishing exact dependency graph shape and expensive structural metrics from the shipped allowlisted bucket.",
          "timestamp": "2026-06-09T13:33:42+02:00",
          "tree_id": "5918370b9d8872a7f5b759ac590a736bf8e3b828",
          "url": "https://github.com/fallow-rs/fallow/commit/adeb88f58a8bfe3b2efbaac65be5d27cdf06f2f2"
        },
        "date": 1781005006400,
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
          "id": "cd4f982b7ee8249dc6e2207d206142069b74987c",
          "message": "feat(security): propagate taint through local bindings\n\nRecord source-backed local bindings when template literals, string concatenation, or object literals embed recognized untrusted source member paths. This keeps fallow security in the existing advisory candidate model while improving rank and evidence for common injection shapes.\n\nThe extractor keeps propagation one-hop and same-module, bumps the extraction cache version, and adds focused visitor plus integration coverage for the new binding forms.\n\nFixes #1095.",
          "timestamp": "2026-06-09T14:03:34+02:00",
          "tree_id": "c59e3a586828feb13337fc683e91d8d5511c42bb",
          "url": "https://github.com/fallow-rs/fallow/commit/cd4f982b7ee8249dc6e2207d206142069b74987c"
        },
        "date": 1781006826378,
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
          "id": "6996b9675e53accd9048c0e0769daea6b4d7999d",
          "message": "fix(security): emit SARIF code flows and CWE metadata\n\nFixes #1097.",
          "timestamp": "2026-06-09T14:23:21+02:00",
          "tree_id": "fa5b26ae1b6b67576123e50322bc9e1f6475f4d0",
          "url": "https://github.com/fallow-rs/fallow/commit/6996b9675e53accd9048c0e0769daea6b4d7999d"
        },
        "date": 1781007978280,
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
          "id": "70d5167074917d27e02531e8a669463bb52784c5",
          "message": "fix(discover): skip oversized files to guard against large-repo OOM (#1107)\n\nRunning `fallow` at a large repository root read and parsed every discovered source file at once, so one multi-megabyte generated, vendored, or bundled file could exhaust all memory and hang before producing output.\n\nFallow now skips source files larger than a per-file limit (default 5 MB) at discovery, never reading, parsing, or analyzing them. Declaration files are exempt. The limit is set via `--max-file-size <MB>` or `FALLOW_MAX_FILE_SIZE` (`0` disables it). Skipped files surface in `workspace_diagnostics[]` (`kind: \"skipped-large-file\"`) and an aggregated stderr warn; a pre-parse note lists the largest files when the set or a single file is unusually large. Default ignores gain `*.bundle.js` and `*.min.cjs`.\n\nThe durable bounded-parse fix (#1104) and the VS Code backoff/memory ceiling (#1105) are tracked separately.\n\nRefs #1086.",
          "timestamp": "2026-06-09T14:34:59+02:00",
          "tree_id": "68aa2e0bba334fe16255fdcc9b6e63390532db3f",
          "url": "https://github.com/fallow-rs/fallow/commit/70d5167074917d27e02531e8a669463bb52784c5"
        },
        "date": 1781008773474,
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
          "id": "e823fe3032315b7f69a3c29ee980d732626ca515",
          "message": "fix(cli): explain security categories\n\nAdd security rule metadata to the standalone explain command so users can inspect tainted-sink, client-server-leak, hardcoded-secret, and catalogue-backed security IDs without running a scan.\n\nThe implementation keeps security detection and output unchanged. It adds drift guards against the security matcher catalogue and CLI regression coverage for the required explain tokens.\n\nFixes #1098.",
          "timestamp": "2026-06-09T15:06:44+02:00",
          "tree_id": "298ef81a734eaae9f9791955eb5c4a55fa86ffb5",
          "url": "https://github.com/fallow-rs/fallow/commit/e823fe3032315b7f69a3c29ee980d732626ca515"
        },
        "date": 1781010630442,
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
          "id": "a3eb38a2d942345236c4deba2f9488c3cf2dcbe9",
          "message": "fix(core): release graph-only parse payloads\n\nRelease extraction vectors that resolution and graph construction have already consumed, while keeping the module data needed by analysis, health, security, LSP, coverage, and fix drift checks.\n\nAdd focused unit coverage for the ModuleInfo compaction boundary and an integration regression that proves retained modules are compacted after analysis without losing line offsets or complexity data.\n\nFixes #1104.",
          "timestamp": "2026-06-09T15:10:55+02:00",
          "tree_id": "971c5f1f7f27428a9b056bad3472be2fa4fc89e6",
          "url": "https://github.com/fallow-rs/fallow/commit/a3eb38a2d942345236c4deba2f9488c3cf2dcbe9"
        },
        "date": 1781010910269,
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
          "id": "0de37afb42cb9e8d5694ecd5d8dc8721abb611ee",
          "message": "feat(security): receiver-gate HTTP sources, tier arg-vs-module taint (#1092, #1093)\n\nReceiver-gate the global HTTP-input source patterns (*.query/*.params/*.body) by a request-object allowlist so ORM receivers (db.query, prisma.query, knex) no longer classify their module as an untrusted source (#1092). Add a structured taint_confidence (arg-level | module-level) tier, a ModuleSource trace role for honest module-level labeling, and anchor the arg-level trace source node at the real source-read line via TaintedBinding.source_span_start (#1093). Ranking and gating behavior unchanged.\n\nCloses #1092.\nCloses #1093.",
          "timestamp": "2026-06-09T15:45:39+02:00",
          "tree_id": "c99c920981f97a03d4dadde9630e0062a1f74bd0",
          "url": "https://github.com/fallow-rs/fallow/commit/0de37afb42cb9e8d5694ecd5d8dc8721abb611ee"
        },
        "date": 1781013086958,
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
          "id": "32499248e30eebfc284ebfc71e99c8ecd0fcd84c",
          "message": "feat(security): surface severity tiers\n\nDerive high, medium, and low review-priority tiers for security candidates from runtime, reachability, boundary, and source-backed signals. Surface the tier in JSON, human output, SARIF levels, generated schemas, TypeScript contracts, and editor fixtures while keeping candidates unverified and gates unchanged.\n\nFixes #1096.",
          "timestamp": "2026-06-09T16:29:46+02:00",
          "tree_id": "98b5c7639f800f699b5d9f3cab5bc2a3dcbb44e7",
          "url": "https://github.com/fallow-rs/fallow/commit/32499248e30eebfc284ebfc71e99c8ecd0fcd84c"
        },
        "date": 1781015569584,
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
          "id": "340a1d11c5a82864bc58a610f6a17e834737340a",
          "message": "fix: align security candidate severity contract",
          "timestamp": "2026-06-09T17:17:45+02:00",
          "tree_id": "c57698d52272a66ee3d8d6654c464866f74be90e",
          "url": "https://github.com/fallow-rs/fallow/commit/340a1d11c5a82864bc58a610f6a17e834737340a"
        },
        "date": 1781018506275,
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
          "id": "9fbd0584d0da852012c61730a9b824b17a583ba2",
          "message": "chore(deps-dev): bump ovsx from 0.10.12 to 1.0.0 in /editors/vscode\n\nBumps [ovsx](https://github.com/eclipse-openvsx/openvsx/tree/HEAD/cli) from 0.10.12 to 1.0.0.\n- [Release notes](https://github.com/eclipse-openvsx/openvsx/releases)\n- [Changelog](https://github.com/eclipse-openvsx/openvsx/blob/main/cli/CHANGELOG.md)\n- [Commits](https://github.com/eclipse-openvsx/openvsx/commits/v1.0.0/cli)\n\n---\nupdated-dependencies:\n- dependency-name: ovsx\n  dependency-version: 1.0.0\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-06-09T15:39:33Z",
          "tree_id": "76a78a12bc1e6ddae4bc38d4067fc4d6c5abe03f",
          "url": "https://github.com/fallow-rs/fallow/commit/9fbd0584d0da852012c61730a9b824b17a583ba2"
        },
        "date": 1781019761266,
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
          "id": "6e87e12ff54a666badd1650aa191ededaad73237",
          "message": "chore: release v2.91.0",
          "timestamp": "2026-06-09T19:41:02+02:00",
          "tree_id": "1fee3017d90914a5f4c943759438d5c04de082bb",
          "url": "https://github.com/fallow-rs/fallow/commit/6e87e12ff54a666badd1650aa191ededaad73237"
        },
        "date": 1781027123458,
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
          "id": "84f2b2e8b10f48a66121f4c64d9bada29883fab4",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.91.0",
          "timestamp": "2026-06-09T20:20:36+02:00",
          "tree_id": "d6a31bd8377cf9b07e0cb17545aa04a06b8f3038",
          "url": "https://github.com/fallow-rs/fallow/commit/84f2b2e8b10f48a66121f4c64d9bada29883fab4"
        },
        "date": 1781029437126,
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
          "id": "0ccedb4c3076ea3e0303135bc43f2af4e9b01d12",
          "message": "docs(skills): re-vendor skills with corrected plugin count (121)",
          "timestamp": "2026-06-09T20:32:52+02:00",
          "tree_id": "6834f711e3574ca0f2c85010fbae5d6b9fde5e81",
          "url": "https://github.com/fallow-rs/fallow/commit/0ccedb4c3076ea3e0303135bc43f2af4e9b01d12"
        },
        "date": 1781030155846,
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
          "id": "9e888ff282ac362059db6b90ce09ff63812a3b9a",
          "message": "docs: correct plugin count to 121 across README, npm package, and rules",
          "timestamp": "2026-06-09T21:33:45+02:00",
          "tree_id": "0217df60a40df8394059839e1414a6c2087d768b",
          "url": "https://github.com/fallow-rs/fallow/commit/9e888ff282ac362059db6b90ce09ff63812a3b9a"
        },
        "date": 1781033809329,
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
          "id": "a97fb2d4635557aa5896d086fa3822698edce25d",
          "message": "docs: correct npm README knip speed multipliers to match benchmarks",
          "timestamp": "2026-06-09T21:57:34+02:00",
          "tree_id": "e0f31cb68e00d79e7f37e0c889c61876352a9986",
          "url": "https://github.com/fallow-rs/fallow/commit/a97fb2d4635557aa5896d086fa3822698edce25d"
        },
        "date": 1781035248704,
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
          "id": "4491deceee75ff2766a3a2ce2db68b2fc1a2d17f",
          "message": "fix(discovery): skip large minified JS assets\n\nVite-style generated assets can be smaller than the per-file byte limit while still expanding into very large parser and extraction payloads. Treat large one-line JS assets as generated output during source discovery while the max-file-size guard is enabled.\n\nThe discovery walk now records skipped minified assets as skipped-minified-file diagnostics, keeps --max-file-size 0 as the opt-out, and leaves declaration files plus large multiline JS in the analyzed set. The output schema, generated TypeScript contracts, and CLI reference now document the new diagnostic kind.\n\nFixes #1086.",
          "timestamp": "2026-06-09T22:33:13+02:00",
          "tree_id": "dc19f1e03e7c7a16aafe650497b07bbaa62c7ad3",
          "url": "https://github.com/fallow-rs/fallow/commit/4491deceee75ff2766a3a2ce2db68b2fc1a2d17f"
        },
        "date": 1781037406311,
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
          "id": "bac297f6ded5ea0481b58a2add428b7ea80e438c",
          "message": "feat(security): configure request receivers\n\nAdd `security.requestReceivers` so projects can register local HTTP request object names that should participate in tainted input detection.\n\nThe config stays additive to the built-in receiver list and is validated through the config schema. The detector now uses the configured receivers for local source tracking, direct sink arguments, and the ranking pass that marks findings as reachable from untrusted input.\n\nThe fixture covers configured, built-in, and unconfigured receiver behavior, including the expected arg-level reachability for configured request receivers.\n\nFixes #1125.",
          "timestamp": "2026-06-09T22:42:39+02:00",
          "tree_id": "9a41c09830b597b4e7bb293c2fa1f96b97ca69de",
          "url": "https://github.com/fallow-rs/fallow/commit/bac297f6ded5ea0481b58a2add428b7ea80e438c"
        },
        "date": 1781038121735,
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
          "id": "1b5eee77f7f249a31be86fb211096eb7bfb8f2ef",
          "message": "fix(cli): clarify security human output\n\nRework the fallow security human renderer so the first lines explain that findings are items to check, not confirmed vulnerabilities.\n\nUse plain-language labels for evidence, code paths, import traces, and blind spots. Keep the detailed candidate framing in place for JSON, SARIF, MCP, and downstream verifier workflows.",
          "timestamp": "2026-06-09T23:09:27+02:00",
          "tree_id": "813d64a4a72043bfd14f2a0cda453f9d9f15f208",
          "url": "https://github.com/fallow-rs/fallow/commit/1b5eee77f7f249a31be86fb211096eb7bfb8f2ef"
        },
        "date": 1781039722743,
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
          "id": "54ffd5d7adc99fa0d4f02e8710e9b3ce2a4d9c49",
          "message": "feat(security): gate newly reachable candidates\n\nAdd a newly-reachable mode for the security gate so CI and agents can catch existing sink candidates that become reachable from entry points. The mode compares the head tree with a materialized base tree from --changed-since and keeps the existing changed-line gate behavior unchanged.\n\nShare the base worktree helper with audit, wire the gate through CLI JSON and human output, and expose the parameter through the MCP security_candidates tool. Regenerate the published schema and TypeScript contracts.\n\nFixes #1056.",
          "timestamp": "2026-06-09T23:30:48+02:00",
          "tree_id": "9abd249d9c17118cea9123d2a6e905bd7fdc05cf",
          "url": "https://github.com/fallow-rs/fallow/commit/54ffd5d7adc99fa0d4f02e8710e9b3ce2a4d9c49"
        },
        "date": 1781040875542,
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
          "id": "208434a8ced4bbc3162153202858fcf956f5faf7",
          "message": "feat(mcp): add read-only Code Mode\n\nAdd code_execute, a bounded read-only JavaScript sandbox for MCP agents that need to compose multiple fallow analysis calls without shelling out repeatedly. It exposes a frozen allowlisted fallow host API, injects a default root, rejects mutating fix tools, and returns a stable mcp-code-execute/v1 envelope with call metadata and limits.\n\nThe implementation runs QuickJS with memory, stack, timeout, host-call, code-size, and output limits. Fallow subprocess output is redirected through temp files so large JSON cannot deadlock pipes, and oversized or timed-out runs fail with structured errors.\n\nDocs, telemetry allowlists, packaged agent guidance, and server schema tests were updated for the new tool. Mutating fixes remain available only through existing standalone MCP tools.",
          "timestamp": "2026-06-09T23:39:21+02:00",
          "tree_id": "a15b171324706ec165339482939e927cab5f3163",
          "url": "https://github.com/fallow-rs/fallow/commit/208434a8ced4bbc3162153202858fcf956f5faf7"
        },
        "date": 1781041418129,
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
          "id": "643080188c563ea9294448624d951f1d6b49603f",
          "message": "fix: emit telemetry run ids in json output",
          "timestamp": "2026-06-09T23:59:31+02:00",
          "tree_id": "a88baa8c6952b6384840dc7f107a398477ecd81d",
          "url": "https://github.com/fallow-rs/fallow/commit/643080188c563ea9294448624d951f1d6b49603f"
        },
        "date": 1781042587966,
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
          "id": "b8495b2425a493247cc471921ae82a3fb534f71a",
          "message": "fix: preserve security ranking within severity tiers\n\nKeep the final security candidate order grouped by high, medium, and low severity while preserving the existing within-tier priority signals. Runtime context, entry reachability, arg-level and module-level source reachability, blast radius, boundary crossing, and dead-code context now sort before path fallback when severity ties.\\n\\nThis keeps stronger same-severity candidates ahead of weaker ones without changing schema shape or treating candidates as verified vulnerabilities.\\n\\nFixes #1133.",
          "timestamp": "2026-06-10T00:25:21+02:00",
          "tree_id": "49678e41b94cfa0c0bf6335cc5b688dfb5afbda9",
          "url": "https://github.com/fallow-rs/fallow/commit/b8495b2425a493247cc471921ae82a3fb534f71a"
        },
        "date": 1781044106131,
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
          "id": "93aa49fc19329a3d901505b7c5e43a5a97d04e98",
          "message": "feat: add security JSON metadata\n\nAdd version, elapsed time, and privacy-safe config metadata to the security JSON envelope. The config block records configured and effective security rule severities plus category include and exclude filters without raw paths or config contents.\n\nEnable --explain for fallow security --format json and emit security-specific _meta through the shared typed metadata path so telemetry metadata remains compatible.\n\nFixes #1135.",
          "timestamp": "2026-06-10T00:50:39+02:00",
          "tree_id": "d1c581310fa904d7849d73b9b4b3780059e7f631",
          "url": "https://github.com/fallow-rs/fallow/commit/93aa49fc19329a3d901505b7c5e43a5a97d04e98"
        },
        "date": 1781045628933,
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
          "id": "dd4285e9bdc35772909fdad8095a00e4378b9c6b",
          "message": "fix: align security help with supported globals\n\nHide inherited global flags from the `fallow security` help surface when that command still rejects them through its structured validation path. This keeps `security --help` and `help security` aligned with runtime behavior without changing how unsupported flags are parsed or reported.\n\nKeep `--explain` visible and supported for security after the metadata work, and add regression coverage for the filtered help forms plus the validator contract for hidden globals.\n\nFixes #1131.",
          "timestamp": "2026-06-10T01:23:05+02:00",
          "tree_id": "dfc667ef5bae0f34aeec0a32512fde35718e58a8",
          "url": "https://github.com/fallow-rs/fallow/commit/dd4285e9bdc35772909fdad8095a00e4378b9c6b"
        },
        "date": 1781047673958,
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
          "id": "2e00978bd13ace7f98ac1f9d0eb9782ad50c76aa",
          "message": "fix: emit compact security summary json\n\nTeach security summary JSON to serialize a compact aggregate envelope instead of reusing the full candidate payload. The summary keeps the security discriminator, schema version, and gate state while exposing stable counts by severity, category, unresolved analysis limits, and attack-surface entries.\n\nThe summary path bypasses per-run telemetry metadata so repeated summary JSON is deterministic, and the output schema now documents both security JSON variants.\n\nFixes #1132.",
          "timestamp": "2026-06-10T01:51:07+02:00",
          "tree_id": "120795c89c4ce376708d622c31db2f641dfa43e4",
          "url": "https://github.com/fallow-rs/fallow/commit/2e00978bd13ace7f98ac1f9d0eb9782ad50c76aa"
        },
        "date": 1781049245707,
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
          "id": "e2d2dae4bc670c88a458b836f6946f53cb888ff8",
          "message": "feat: add unresolved callee diagnostics\n\n* chore: open issue 1134 implementation branch\n\n* feat: add unresolved callee diagnostics",
          "timestamp": "2026-06-10T02:46:14+02:00",
          "tree_id": "b26f9db14bc676a1f784b36db80ea6e2a6ad81e8",
          "url": "https://github.com/fallow-rs/fallow/commit/e2d2dae4bc670c88a458b836f6946f53cb888ff8"
        },
        "date": 1781052562846,
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
          "id": "7be005b9b27684c19b06a22691716ee8e2b08005",
          "message": "fix(plugins): hard error invalid plugin regexes\n\nInvalid regexes extracted from plugin path-rule exclusions now aggregate into a config-load error instead of being stripped from the rule with a warning. The core analysis path and list plugins path both surface the error as exit code 2 with the existing JSON error envelope.\n\nThe unchanged plugin-system silent-fail diagnostics for config pattern collisions and external enabler typos remain warnings. Regression coverage now pins core aggregation, CLI JSON behavior, list plugins behavior, and the TanStack Router config path.\n\nFixes #513.",
          "timestamp": "2026-06-10T07:48:00+02:00",
          "tree_id": "42b08c7466afbf1cd810ce98d2437bb766f63f65",
          "url": "https://github.com/fallow-rs/fallow/commit/7be005b9b27684c19b06a22691716ee8e2b08005"
        },
        "date": 1781071129851,
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
          "id": "87e983e33813043ae1f0c3733d0ca86219daf399",
          "message": "fix(security): align summary JSON metadata\n\nAlign the security command contract so advertised flags are supported consistently, JSON summary mode emits compact aggregate data, and machine consumers receive stable run metadata for comparisons.\n\nThe change also exposes capped unresolved-callee diagnostics and updates the generated output schema plus bundled agent reference so downstream consumers can rely on the new summary shape.\n\nFixes #1139.",
          "timestamp": "2026-06-10T08:10:51+02:00",
          "tree_id": "c83b7f5543d69b6599decac5915c05f3cf38fb42",
          "url": "https://github.com/fallow-rs/fallow/commit/87e983e33813043ae1f0c3733d0ca86219daf399"
        },
        "date": 1781072031570,
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
          "id": "bc9b5a364298fe016013efcfdcd997fbca4945d5",
          "message": "feat(health): add target relation evidence\n\nAdd relation evidence to health refactoring targets so JSON consumers can see direct importers and duplicate-code siblings without making separate trace calls.\n\nThe implementation reuses existing graph and duplication data, keeps the JSON fields additive, updates generated schema and TypeScript contracts, and only expands human target output when evidence is present.\n\nFixes #1145.",
          "timestamp": "2026-06-10T08:15:14+02:00",
          "tree_id": "d635777989c7a644bbecf20a05bc86eb8da910b2",
          "url": "https://github.com/fallow-rs/fallow/commit/bc9b5a364298fe016013efcfdcd997fbca4945d5"
        },
        "date": 1781072333587,
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
          "id": "245bd6071b1a3d8ce2f13e93eda7c70cb28590f7",
          "message": "fix(security): propagate constant sink literals\n\nClassify simple module-scope constant expressions before security sink matching. The extractor now carries literal metadata through const identifiers, String coercion, unary numeric constants, and constant-only templates so non-literal catalogue rows do not fire on static values.\n\nTreat public CI metadata env names as non-secret sources unless the env name is secret-shaped. This keeps build refs and SHAs out of source-backed logging candidates while preserving tokens and keys.\n\nFixes #1138.",
          "timestamp": "2026-06-10T08:35:46+02:00",
          "tree_id": "ed884f2ecacec48508a8c397e781e3b646ea8cfb",
          "url": "https://github.com/fallow-rs/fallow/commit/245bd6071b1a3d8ce2f13e93eda7c70cb28590f7"
        },
        "date": 1781073833905,
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
          "id": "6a1dd0a772820b7ee1102384fb584a0b62d95ad5",
          "message": "fix: trust local sanitizer flows\n\n* chore: open issue-1136 implementation branch\n\n* fix(security): trust local sanitizer flows",
          "timestamp": "2026-06-10T09:01:53+02:00",
          "tree_id": "2a3d78f3509f7bc139560d8c8edeb95d63c302bc",
          "url": "https://github.com/fallow-rs/fallow/commit/6a1dd0a772820b7ee1102384fb584a0b62d95ad5"
        },
        "date": 1781075103432,
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
          "id": "18c70b766e28138e5795dff81ad82c7432d980c9",
          "message": "fix(security): classify fixed-origin URL sinks\n\nClassifies URL-like security sink candidates as fixed-origin dynamic paths or dynamic origins, carries `candidate.sink.url_shape` through JSON/schema/generated contracts, and keeps literal fixed URL destinations omitted from nonliteral open-redirect candidates.\n\nFixes #1137.",
          "timestamp": "2026-06-10T09:11:16+02:00",
          "tree_id": "f391a29633aef93f018776728e3f6a36e5a2072f",
          "url": "https://github.com/fallow-rs/fallow/commit/18c70b766e28138e5795dff81ad82c7432d980c9"
        },
        "date": 1781075695787,
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
          "id": "30a3a0a10cfa8b252757bdd90ad230150b2ca825",
          "message": "feat(init): scaffold agent guidance\n\nAdd an opt-in init mode that writes a starter AGENTS.md for project-specific coding-agent context. The scaffold refuses to overwrite existing guidance and avoids project readiness scoring language.\n\nCloses #1124",
          "timestamp": "2026-06-10T09:46:55+02:00",
          "tree_id": "7cf1814ef39f69a274cd7e99054412a006f3389a",
          "url": "https://github.com/fallow-rs/fallow/commit/30a3a0a10cfa8b252757bdd90ad230150b2ca825"
        },
        "date": 1781077933952,
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
          "id": "f5f8944a679bab69f1ad4d9c0ee80beeeb1c9230",
          "message": "fix(schema): include security summary root contract\n\nFollow-up from final review across #1152, #1153, #1154, and #1155.",
          "timestamp": "2026-06-10T09:53:01+02:00",
          "tree_id": "e3b8636f465f9254c151d10e4cf2f73be8bd5f17",
          "url": "https://github.com/fallow-rs/fallow/commit/f5f8944a679bab69f1ad4d9c0ee80beeeb1c9230"
        },
        "date": 1781078170068,
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
          "id": "6a9b7d1600d9bacf4a79647b0f6dd5984b7ebc64",
          "message": "chore(agents): avoid inline interpreter snippets",
          "timestamp": "2026-06-10T10:07:52+02:00",
          "tree_id": "038b13b7868698729609ea2d0128050f2f2ddb74",
          "url": "https://github.com/fallow-rs/fallow/commit/6a9b7d1600d9bacf4a79647b0f6dd5984b7ebc64"
        },
        "date": 1781079377407,
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
          "id": "99dc0ce058d89ecd530b91d3040a82f281a86439",
          "message": "feat(boundaries): require zone coverage for files\n\nAdd `boundaries.coverage.requireAllFiles` and `boundaries.coverage.allowUnmatched` so teams can require analyzed source files to match a configured boundary zone.\n\nReport unmatched files as boundary coverage findings across CLI output, JSON/SARIF/CodeClimate, LSP diagnostics, baselines, regression counts, CI summaries, and generated schemas.\n\nRefs #1147.",
          "timestamp": "2026-06-10T10:17:17+02:00",
          "tree_id": "6daa8bc542250f84922aab1276c6870378ee6df9",
          "url": "https://github.com/fallow-rs/fallow/commit/99dc0ce058d89ecd530b91d3040a82f281a86439"
        },
        "date": 1781079870771,
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
          "id": "351085e83521d2a0fe7e4060920d6e2b4e48dbe7",
          "message": "chore(agents): add path-local AGENTS.md guides and pre-bash guard hook\n\nAdd per-area AGENTS.md guides (crates/cli, crates/core, crates/extract,\ncrates/graph, editors/vscode, tests, .github/workflows) so Codex and other\nagents pick up ownership maps and validation steps local to the files they\nedit, mirroring the colocated-guidance pattern.\n\nAdd a PreToolUse Bash guard (.claude/hooks/pre-bash-guard.py) that steers\nagents to the local fallow binary instead of an installed one, requires\nbounded output for workspace cargo runs, and blocks VS Code source commits\nthat omit the rebuilt dist bundle. Detection uses a quote-aware token walk\nover pipeline segments, so commands that only mention fallow or \"git commit\"\nas data (heredocs, fixtures, echoes) are not flagged, while chained or\nenv-prefixed real invocations are. Set SKIP_FALLOW_AGENT_GUARD=1 to bypass.\n\nThe guard activates on a committed sentinel (crates/cli/AGENTS.md) so it runs\non every clone, and track the new guides and hook despite the broad .claude/*\nand AGENTS.md ignore rules.",
          "timestamp": "2026-06-10T10:30:43+02:00",
          "tree_id": "1572c5577b5c874347272ce28f41c5598659e67f",
          "url": "https://github.com/fallow-rs/fallow/commit/351085e83521d2a0fe7e4060920d6e2b4e48dbe7"
        },
        "date": 1781080440350,
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
          "id": "e6d7e8316474e27dcd4ba3f616c5ca494b8df92a",
          "message": "fix(vscode): decode encoded route brackets\n\nTree-view paths can arrive with Next.js route brackets already percent-encoded, especially after an editor or cached result preserves the URI form. The VS Code extension now normalizes those route brackets before building the command payload, while keeping an existing literal percent-encoded filename unchanged.\n\nThis keeps sidebar navigation on decoded filesystem paths before the internal open-file command calls VS Code URI handling. Regression coverage exercises both encoded route inputs and literal percent filenames, and the extension bundle is regenerated.\n\nFixes #1160.",
          "timestamp": "2026-06-10T10:38:51+02:00",
          "tree_id": "b38ee986287ce8a08bd4435d1d97f2dd7bfde479",
          "url": "https://github.com/fallow-rs/fallow/commit/e6d7e8316474e27dcd4ba3f616c5ca494b8df92a"
        },
        "date": 1781080921776,
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
          "id": "c22eb0680279b8c96a9f15189d46ca1929600c40",
          "message": "fix: apply boundary coverage rules consistently\n\nApply per-file `boundary-violation` overrides to both import boundary findings and boundary coverage findings.\n\nRender boundary coverage in human output when it is the only structure finding, and keep embedded config-action paths relative in JSON output.",
          "timestamp": "2026-06-10T11:13:32+02:00",
          "tree_id": "28565d35fb506035c8af006e678a2666d9b3af88",
          "url": "https://github.com/fallow-rs/fallow/commit/c22eb0680279b8c96a9f15189d46ca1929600c40"
        },
        "date": 1781083011261,
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
          "id": "943b3671a293c9e7b853ecb08f6035028f8cea7d",
          "message": "chore(agents): drop a private maintainer path from json-output-reviewer\n\nThe plugin-count drift sweep named a private maintainer doc path that does\nnot exist in a public clone (it resolves through a gitignored symlink). Drop\nthe dead grep line and rephrase the guidance so it no longer points at the\nprivate surface.",
          "timestamp": "2026-06-10T12:12:22+02:00",
          "tree_id": "9cd81ad98149b732627bd8ab4c57e2986426d334",
          "url": "https://github.com/fallow-rs/fallow/commit/943b3671a293c9e7b853ecb08f6035028f8cea7d"
        },
        "date": 1781086531680,
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
          "id": "73bac370d02877bb88c84bab906eeebd9ce3373b",
          "message": "docs: sync fallow skill metadata",
          "timestamp": "2026-06-10T12:18:42+02:00",
          "tree_id": "2d3487c781ab02f7752830f971d568f60eb1aacd",
          "url": "https://github.com/fallow-rs/fallow/commit/73bac370d02877bb88c84bab906eeebd9ce3373b"
        },
        "date": 1781086954893,
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
          "id": "47a0e4cfd291e8203480fba8ae1dc6edda00f906",
          "message": "fix: credit napi-rs optional prebuild packages\n\nnapi-rs packages declare generated platform prebuilds as optionalDependencies, but their runtime loader selects them dynamically instead of through static imports. Fallow now reads package.json napi metadata and credits only exact generated package names listed in the same optionalDependencies map.\n\nThe plugin registry now has a package.json metadata hook that runs for both root and workspace packages. These credits are scoped to the declaring package.json, so unrelated sibling workspace dependencies remain reportable.\n\nFixes #1164.",
          "timestamp": "2026-06-10T12:24:02+02:00",
          "tree_id": "d376eb0b298dcf99c98bddc00292022ea7908391",
          "url": "https://github.com/fallow-rs/fallow/commit/47a0e4cfd291e8203480fba8ae1dc6edda00f906"
        },
        "date": 1781087237328,
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
          "id": "1921037ffca9d142168919be36583403b3aad7e5",
          "message": "fix(audit): resolve base to merge-base, not stale local main (#1169)\n\nfallow audit with no --base auto-detected the comparison base by discovering the default branch via origin/HEAD but returning the bare name 'main', which git resolves to the stale local refs/heads/main. On worktree checkouts cut from origin/main whose local main is never updated, this diffed every branch against an ancient base and could fail the agent gate on a one-line change (the agent-gate twin of #242).\n\nauto_detect_base_ref now resolves to the git merge-base (fork point) against the branch's upstream or the remote default (origin/HEAD, origin/main, origin/master), falling back to the upstream/remote tip on merge-base failure and to local main/master when there is no origin. A new FALLOW_AUDIT_BASE env var pins the base; the audit scope line, an additive-optional base_description JSON field, and the VS Code extension surface the resolved base with provenance.\n\nCloses #1168.",
          "timestamp": "2026-06-10T13:55:18+02:00",
          "tree_id": "1b1a8df099c827f9402b264005569f356e78967c",
          "url": "https://github.com/fallow-rs/fallow/commit/1921037ffca9d142168919be36583403b3aad7e5"
        },
        "date": 1781092707344,
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
          "id": "adbd09776e877b539ff5777a44e131aea9d21e9e",
          "message": "test(audit): cover FALLOW_AUDIT_BASE precedence and validation (#1170)\n\nSubprocess integration tests for the audit base env override (#1169): env value honored with provenance when no flag, explicit --base wins, malformed value exits 2. Test-only. Refs #1168.",
          "timestamp": "2026-06-10T14:12:36+02:00",
          "tree_id": "cafa827006e3a9b898d2d2ef7f7eca81ac15e908",
          "url": "https://github.com/fallow-rs/fallow/commit/adbd09776e877b539ff5777a44e131aea9d21e9e"
        },
        "date": 1781093899700,
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
          "id": "61ec8e856ef43245aaf6a13f33e1c9778d87f49d",
          "message": "feat(security): chain tainted local bindings through up to three hops (#1171)\n\nfallow security now traces untrusted input through chained same-module local bindings, up to three hops. Injection shapes that route a request value through one or two intermediate variables (alias, template literal, string concat, or object-literal initializers) are upgraded to arg-level confidence with the trace anchored at the original untrusted read instead of staying module-level.\n\nChaining stays conservative: call, conditional, and property-read initializers do not chain, and a flow that exceeds the hop limit degrades to module-level rather than claiming arg-level confidence. RUST_LOG=debug logs when a chain is dropped for exceeding the limit. Integration fixtures cover two-hop, three-hop, and over-limit four-hop flows, and the detection docs describe the bounded chaining behavior.\n\nFixes #1146.",
          "timestamp": "2026-06-10T14:28:47+02:00",
          "tree_id": "b487b2283c2f3f8109eb541c1cf7932003c64d87",
          "url": "https://github.com/fallow-rs/fallow/commit/61ec8e856ef43245aaf6a13f33e1c9778d87f49d"
        },
        "date": 1781094767012,
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
          "id": "447094fdf27a3518060479d411c53dac6ce6982f",
          "message": "test(audit): characterize base-reuse predicate (#1172)\n\nPin the behavior of the audit base-reuse predicate (can_reuse_current_as_base and js_ts_tokens_equivalent) before any refactor of its internals. The predicate decides whether fallow audit can skip the base snapshot analysis when every changed file is non-behavioral, so a wrong answer silently produces a wrong CI verdict.\n\nUnit tests cover token equivalence across whitespace-only, comment-only, identifier-rename, string-literal, suppression-marker, and non-JS cases, plus the file classification helpers. Two tests pin a known soundness gap: TemplateLiteral and RegExpLiteral tokens carry no payload, so content changes inside template literals or regex literals are treated as equivalent today. Integration tests assert end-to-end audit attribution across the reuse decision.",
          "timestamp": "2026-06-10T15:39:59+02:00",
          "tree_id": "4bf97b4e8b9013a3843cfe2381b24b8cc0287ecb",
          "url": "https://github.com/fallow-rs/fallow/commit/447094fdf27a3518060479d411c53dac6ce6982f"
        },
        "date": 1781099120638,
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
          "id": "557d2dc0beee0b27665580c9d3bf9d8847de3adc",
          "message": "feat(boundaries): forbid specific callee patterns per zone (#1173)\n\nAdds the opt-in boundaries.calls.forbidden config section. Boundary zones can now ban specific callee patterns per zone, with callee accepting a string or an array. Presets and existing zone rules are unchanged.\n\nMatching is segment-aware and import-resolved, so one pattern covers child_process and node:child_process across named, namespace, and default imports, plus globals like console.*. Violations report as boundary_call_violations across human, JSON, SARIF, CodeClimate, compact, and markdown output, LSP diagnostics, baselines, audit attribution, and GitHub Action / GitLab CI summaries, sharing the boundary-violation severity and suppression token. Forbidden-call rules apply only to files classified into a zone; a rule pointing at a zone that matches no files warns at analysis time, and inert patterns such as a bare * are rejected at config load.\n\nThe boundaries.effects.allowed section from the same proposal stays gated on #1143.\n\nFixes #1147.",
          "timestamp": "2026-06-10T15:57:09+02:00",
          "tree_id": "ee498a13e4a3379ac2e7625ca80a1e3dae8d9468",
          "url": "https://github.com/fallow-rs/fallow/commit/557d2dc0beee0b27665580c9d3bf9d8847de3adc"
        },
        "date": 1781100057962,
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
          "id": "f9ab4d12427777e4f2e8ee9c4dd31b35b1660b2f",
          "message": "refactor: extract health telemetry recording",
          "timestamp": "2026-06-10T16:27:35+02:00",
          "tree_id": "74d4d575464c0fcddc30cc3fd77efed1ca2778a9",
          "url": "https://github.com/fallow-rs/fallow/commit/f9ab4d12427777e4f2e8ee9c4dd31b35b1660b2f"
        },
        "date": 1781101937018,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.4,
            "unit": "%"
          }
        ]
      }
    ]
  }
}