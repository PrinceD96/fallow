window.BENCHMARK_DATA = {
  "lastUpdate": 1783675778014,
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
          "id": "716522dbb4270242ee5d82b592bad536178e135e",
          "message": "feat(coverage): emit per-function complexity and per-file churn in inventory upload (#1663)\n\nv2 inventory payload with optional per-function cyclomatic/cognitive and a top-level per-file churn map (commits, weightedCommits, linesAdded/Deleted, trend, authorCount=distinct git authors, lastCommitTs). All fields optional, backward compatible. CodSpeed's single flagged regression is a cross-environment measurement artifact on a cache-hit benchmark that does not touch the changed code.",
          "timestamp": "2026-06-29T22:02:41+02:00",
          "tree_id": "eeeb979be30d0ed5fe1a8eb7dd26a984639b7711",
          "url": "https://github.com/fallow-rs/fallow/commit/716522dbb4270242ee5d82b592bad536178e135e"
        },
        "date": 1782763596501,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5eb3efa80660d0798bd8f19861bfd02e8485b88",
          "message": "feat(health): emit token_consumers blast-radius in CSS health JSON\n\nfallow health --css --format json now carries css_analytics.token_consumers: per Tailwind v4 @theme token, the defining site + a consumer_count + a capped located consumers sample tagged theme-var/css-var/utility/apply, so an agent can read a token's blast radius before changing it (CSS program roadmap Phase 2, first slice).\n\nAdditive reverse index keyed on the same gated candidate set as the unused-theme-token scan (which is byte-unchanged); descriptive-only (no actions array, the dead-token action stays on unused_theme_tokens); consumer_count is a static lower bound. Engine-local data, no CACHE_VERSION bump; plain non-css health JSON byte-unchanged, no schema_version bump. Token VALUES/drift and the get_token_blast_radius MCP tool are out of scope (later phases).",
          "timestamp": "2026-06-29T22:11:40+02:00",
          "tree_id": "449c8f2233e6b64f444710f3d8125f49184fe80c",
          "url": "https://github.com/fallow-rs/fallow/commit/d5eb3efa80660d0798bd8f19861bfd02e8485b88"
        },
        "date": 1782764204237,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "857111c3427c83917374ddcbc3dac8f920a2680b",
          "message": "fix(coverage): read cloud stable_id as snake_case on runtime-context (#1666)\n\nThe runtime-context response serializes CloudRuntimeFunction fields snake_case; the consumer renamed only stable_id to camelCase stableId, so the cross-surface join key always deserialized to None. Drop the rename (and on the blast/importance entry structs) so stable_id is read like every sibling field.",
          "timestamp": "2026-06-29T20:35:10Z",
          "tree_id": "1cd96711a96d3b163aa7ff8c64539ff79f058ce9",
          "url": "https://github.com/fallow-rs/fallow/commit/857111c3427c83917374ddcbc3dac8f920a2680b"
        },
        "date": 1782765537365,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b6693dce5e4b83ad329cadef849600d297f48d7",
          "message": "feat(mcp): add get_token_blast_radius tool wrapping token_consumers\n\nA focused read-only MCP tool that runs fallow health --css --format json and steers agents to css_analytics.token_consumers (the Tailwind v4 token blast-radius reverse index), so an agent can query a token's blast radius directly without setting css=true on check_health. Per @theme token: defining site + consumer_count + a capped located consumers sample tagged theme-var/css-var/utility/apply.\n\nMirrors the get_blast_radius health-slice pattern: minimal params (root/config/no_cache/threads, no coverage/scope flags since token_consumers abstains on partial scope), --css forced, telemetry-tagged dispatch, registered in code_mode + mcp_manifest (kind analysis, license Free, read_only), annotated read_only/idempotent/open_world_hint=false. A scoping aid, not a deletion gate (the dead-token verdict stays on unused_theme_tokens). No CLI flag, no JSON schema change.",
          "timestamp": "2026-06-29T22:40:57+02:00",
          "tree_id": "091785874a4a086c5349fff87d91c2c2a81b468a",
          "url": "https://github.com/fallow-rs/fallow/commit/5b6693dce5e4b83ad329cadef849600d297f48d7"
        },
        "date": 1782765971706,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d62115038dcb272d608f698e294848f441b17881",
          "message": "docs(changelog): record CSS-in-JS first-class (Phase 3, PR #1668)",
          "timestamp": "2026-06-30T08:05:29+02:00",
          "tree_id": "ed3ca34d2e8f991179af3fe7984a078d23b34965",
          "url": "https://github.com/fallow-rs/fallow/commit/d62115038dcb272d608f698e294848f441b17881"
        },
        "date": 1782799905952,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "f47519d5a421444f6515200b944b0efb3a4be4af",
          "message": "docs(changelog): record fuzzy CSS clones (Phase 4, PR #1669)",
          "timestamp": "2026-06-30T08:25:01+02:00",
          "tree_id": "91e2dcf2c9fbb250c6a8516b9d4f6a26431465c6",
          "url": "https://github.com/fallow-rs/fallow/commit/f47519d5a421444f6515200b944b0efb3a4be4af"
        },
        "date": 1782801285577,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b0796b923954b049210e16f7b61713edaee8a33",
          "message": "feat(health): object-notation CSS-in-JS in styling analytics (CSS program Phase 3c) (#1671)\n\n* feat(health): object-notation CSS-in-JS in styling analytics (CSS program Phase 3c)\n\nAdd an AST object->CSS serializer that lifts object-notation CSS-in-JS\n(vanilla-extract style({...})/globalStyle/styleVariants/recipe, emotion\ncss({...})/styled.div({...}), Panda css({...})/cva({...}), StyleX\nstylex.create({...})) into the same virtual-stylesheet -> compute_css_analytics\n+ styling-health pipeline that the Phase 3b template-literal lifter feeds. Both\nforms now converge on one pipeline.\n\nHealth-time only (no CACHE_VERSION bump); dep-gated via project_uses_css_in_js\nplus per-call import-binding provenance, so a project with none of the object\ndeps is byte-identical and a same-named local style/css or an unrelated cva\nnever fires. Static values only (camelCase->kebab, implicit-px + unitless list,\none-level nesting); dynamic/spread/computed-key values are dropped, never\nguessed.\n\nFlat-by-construction atomic CSS (StyleX/Panda) is excluded from the\nstyling-health structural penalty inputs and from duplicate-block\nfingerprints, and a predominantly-atomic project is marked low-confidence with\na stated reason, so atomic CSS-in-JS never inflates the grade. Token-sprawl and\nduplicate-block findings are fed for all object libraries. Every\ndeclaration-normalized penalty (duplication, dead-surface, structural) and the\nconfidence trigger read the non-atomic declaration count so atomic CSS cannot\ndilute them. Descriptive-only; styling-health never gates an exit code or badge.\n\n* fix(health): address 3c review (aliased imports, numeric literals, docs)\n\nReview fixes for CSS program Phase 3c:\n- Recognize aliased named imports (import { style as s }) by dispatching on the\n  canonical imported name, not the local alias (rust-reviewer: silent miss).\n- Render numeric literals from their parsed value, so a hex / scientific literal\n  (0xFF, 1e3) becomes valid CSS (255, 1000) instead of a non-CSS token.\n- kebab-case the lowercase ms vendor prefix to -ms- (msFlexAlign -> -ms-flex-align).\n- Count files_analyzed once per source file, not once per lifted virtual sheet,\n  so the count stays 1:1 with files (cli-output-reviewer).\n- Update the StylingHealth confidence / CssAnalyticsSummary docs to cover the new\n  predominantly-atomic low-confidence trigger and object-form sheets, and gate on\n  confidence (not total_declarations, which now includes excluded atomic\n  declarations); regenerate output-schema.json + the TS contracts (json-output\n  -reviewer: the published rule was stale and drift-gated).\n\n* docs(detection): record object-notation CSS-in-JS (Phase 3c)\n\nAdd the Phase 3c detection bullet and the css_in_js_object.rs extract-crate entry.\n\n* chore(clippy): unblock pre-existing too_many_lines expectation on the 3b CSS-in-JS test\n\nmain was already red on this unfulfilled #[expect(clippy::too_many_lines)] (the 3b test body sits on the 100-line threshold, so the lint is clippy-version dependent). Switch to #[allow] per the project convention for boundary pedantic lints, so 3c can ship with clippy --all-targets green.\n\n* docs(detection): fix stale css_report_stylesheet_source ref in the 3b bullet\n\nThe 3c walk refactor renamed css_report_stylesheet_source to css_report_scan_items; update the Phase 3b detection bullet to match (fallow-review finding).",
          "timestamp": "2026-06-30T11:22:58+02:00",
          "tree_id": "bdd972b78feea6bf865d9b81e48a12cf1ccbd3ae",
          "url": "https://github.com/fallow-rs/fallow/commit/8b0796b923954b049210e16f7b61713edaee8a33"
        },
        "date": 1782811985689,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c72d26939cd6f21847c0897de42f81873842184",
          "message": "fix(health): no implicit px on custom-property values in object CSS-in-JS (#1672)\n\nThe object serializer applied implicit-px to numeric custom-property values\n(`--space: 8` -> `--space:8px`), fabricating a unit the bundler never emits.\nEmotion's own serializer guards px with `!isCustomProperty(key)`\n(@emotion/serialize) and React does the same, so a numeric `--x` value stays\nunitless. Skip implicit px for `--*` properties so the lifted CSS matches the\nreal compiled output. Found while smoke-testing the emotion site's\n`<Global>` custom-property block on real public projects.",
          "timestamp": "2026-06-30T12:33:40+02:00",
          "tree_id": "7457c935790576edb2b4f119f6072c43a2d65a9c",
          "url": "https://github.com/fallow-rs/fallow/commit/5c72d26939cd6f21847c0897de42f81873842184"
        },
        "date": 1782816253306,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
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
          "id": "fbe60a8d3c7117421605c3b87476b8c302e77f92",
          "message": "fix(review): clearer wording for contract-change decisions\n\nThe contract-change decision read as a wall of one repeated, awkward\nsentence on every flagged file (\"...consumed by N modules NOT in this\ndiff. Coordinate the change, or is the contract stable?\").\n\n- Reword the decision question (decision surface, shared with the brief\n  and the JSON): plain \"changes exports (...) imported by N files outside\n  this PR\" instead of \"consumed by N modules NOT in this diff\", and a\n  single open question \"Does this change break or alter what those callers\n  expect?\" instead of the imperative-plus-question hybrid.\n- In the guided tour, the per-file line now shows just the observation:\n  the section header frames the action once, and the open question stays\n  in the decisions brief and the JSON (where each decision stands alone),\n  so the rows read as distinct facts rather than a repeated sentence.\n\nRender-surface plus decision-question wording only. The `question` text is\nfree-text framing (deterministic: false); the guide/brief/JSON schema and\nthe agent contract are unchanged, and --walkthrough --format json stays\nbyte-identical to --walkthrough-guide.",
          "timestamp": "2026-06-30T14:26:22+02:00",
          "tree_id": "09f06dc2ba8ffeeab1e731ac99d930862d5f9fd0",
          "url": "https://github.com/fallow-rs/fallow/commit/fbe60a8d3c7117421605c3b87476b8c302e77f92"
        },
        "date": 1782822612189,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c43ab02152b157973694b61ad627cdc5816c126",
          "message": "feat(health): weight styling-health toward CSS value drift over exact repetition (formula v3) (#1674)\n\nDown-weights the styling-health `duplication` exact-block penalty (200 -> 80, soft hint, 20pt cap kept) and adds a var()-blind hardcoded-value-sprawl drift sub-term to `token_erosion` (distinct unique_box_shadows/border_radii/line_heights above per-axis baselines 10/8/6, saturating, 5pt sub-cap inside the unchanged 10pt cap). STYLING_HEALTH_FORMULA_VERSION 2 -> 3. Descriptive-only; no wire field; no CACHE_VERSION bump. Corpus-locked: no band misclassification. Reviewed via /panel-review (NARROW) + rust-reviewer + cli-output-reviewer.",
          "timestamp": "2026-06-30T14:34:24+02:00",
          "tree_id": "a1d791fab2fa8e426bca2f525fbd31bd2c1a321a",
          "url": "https://github.com/fallow-rs/fallow/commit/8c43ab02152b157973694b61ad627cdc5816c126"
        },
        "date": 1782823443279,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ecf9d859f92801d61e3704fe24278307bbf75b4",
          "message": "feat(coverage): add --with-callers to upload importer edges (#1675)\n\n`fallow coverage upload-inventory --with-callers` builds the import graph and\nuploads importer edges (which files import each function), keyed by the callee\nfunction's stable_id, so the cloud can show change-time blast radius for a\nfunction an agent is about to edit. Each edge is an importer file plus the\nsymbol names it imports; import-edge granularity, not a file:line call-site.\n\nOpt-in by design: building the graph runs the full static analysis, whereas the\ndefault upload stays a fast per-file walk and the existing wire shape. The graph\nis cached, so a CI step that already ran analysis pays little extra.\nBest-effort: a graph-build failure still ships the inventory.\n\nThe symbol-to-function attribution is a pure, unit-tested step; the payload\nfield is omitted entirely unless edges are present, so the default upload is\nbyte-unchanged.",
          "timestamp": "2026-06-30T15:07:26+02:00",
          "tree_id": "736f98af054702faf1bc851cc51ec9f5e860ae97",
          "url": "https://github.com/fallow-rs/fallow/commit/1ecf9d859f92801d61e3704fe24278307bbf75b4"
        },
        "date": 1782826882994,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a350562ea8b2c4957121c39ad0ed3455c7244036",
          "message": "chore(deps): bump @commitlint/cli and config-conventional to 21.1.0 (#1700)\n\nSupersedes #1683 and #1687. Dependabot's #1683 lockfile was generated on a\nstale base (it downgraded oxfmt 0.56.0 to 0.55.0) and was missing\nconventional-commits-parser@6.4.0, failing npm ci. commitlint 21.1.0 also\nmakes config-conventional a direct dependency of cli, so both bump together.\n\nLockfile regenerated cleanly off current main; npm ci is back in sync.\n\nCloses #1683\nCloses #1687",
          "timestamp": "2026-06-30T14:19:18Z",
          "tree_id": "b99974f2e26c17c6e8ed8d91d98bec829f28819b",
          "url": "https://github.com/fallow-rs/fallow/commit/a350562ea8b2c4957121c39ad0ed3455c7244036"
        },
        "date": 1782829689834,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
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
          "id": "b1679306e76c14001f24bfcdd6e21016c971d491",
          "message": "chore(deps): bump actions/checkout from 6.0.3 to 7.0.0 (#1692)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 6.0.3 to 7.0.0.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/df4cb1c069e1874edd31b4311f1884172cec0e10...9c091bb21b7c1c1d1991bb908d89e4e9dddfe3e0)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: 7.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-30T14:28:59Z",
          "tree_id": "dedeb98ca0126655fc3a06ecd9e7e129e982cba4",
          "url": "https://github.com/fallow-rs/fallow/commit/b1679306e76c14001f24bfcdd6e21016c971d491"
        },
        "date": 1782830593399,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.6,
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
          "id": "f4b0b190cc69209073f30568bc8da23970a154d5",
          "message": "chore(deps): bump criterion2 from 3.0.3 to 3.0.4 (#1697)\n\nBumps [criterion2](https://github.com/Boshen/criterion2.rs) from 3.0.3 to 3.0.4.\n- [Release notes](https://github.com/Boshen/criterion2.rs/releases)\n- [Changelog](https://github.com/Boshen/criterion2.rs/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/Boshen/criterion2.rs/commits/v3.0.4)\n\n---\nupdated-dependencies:\n- dependency-name: criterion2\n  dependency-version: 3.0.4\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-30T14:51:30Z",
          "tree_id": "91e34f364eca3799e5b2a81cfa6a9465d060b7b2",
          "url": "https://github.com/fallow-rs/fallow/commit/f4b0b190cc69209073f30568bc8da23970a154d5"
        },
        "date": 1782831501449,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "968316f4fc03ec0051c17f30441775b68e7ea33a",
          "message": "ci: fix taiki-e/install-action tool selection for audit/shear/llvm-cov (#1703)\n\nThe Security Audit and Unused Dependencies jobs (both required checks) were\nfailing on main with 'no such command: audit' / 'no such command: shear'.\n\nThese steps selected the tool via the action ref (the `cargo-audit` /\n`cargo-shear` tags), which only works when the ref is the tool tag. #1686\nbumped taiki-e/install-action and re-pinned those refs to a version-release\nSHA, so tool detection silently broke and the tools never installed. The\nsame latent bug was present in coverage.yml (cargo-llvm-cov).\n\nPin all three to the same version SHA as bench.yml (v2.82.2) and select the\ntool explicitly via `with: tool:`, matching the cargo-codspeed step. This is\nrobust to future SHA re-pins by Dependabot.",
          "timestamp": "2026-07-01T08:14:44Z",
          "tree_id": "dc9208260a0605f6dd218185417dbca2b69507d6",
          "url": "https://github.com/fallow-rs/fallow/commit/968316f4fc03ec0051c17f30441775b68e7ea33a"
        },
        "date": 1782894047004,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f25b68582fe93aecdb676ef777db0ab3c77b5004",
          "message": "perf(audit): skip clean-tree worktree sweep\n\nMove reusable audit worktree cleanup after changed-file discovery so clean-tree audit exits without listing or pruning base worktrees. Changed-code audit still sweeps before any base snapshot work, preserving stale worktree cleanup for real analysis runs.\n\nThis keeps the no-change fast path focused on base-ref resolution and changed-file detection while leaving new-only attribution and base snapshot behavior unchanged. It also tightens architecture boundary comments that still referenced compatibility adapters.",
          "timestamp": "2026-07-01T10:22:20+02:00",
          "tree_id": "2f08a36acf11283f2fdd35bef12581e2e885771c",
          "url": "https://github.com/fallow-rs/fallow/commit/f25b68582fe93aecdb676ef777db0ab3c77b5004"
        },
        "date": 1782894574472,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "8b1d50f565587a84801a00db9b8d006e12e7455c",
          "message": "refactor(css): tighten CSS-in-JS object lifter internals\n\n- sanitize_selector strips `;` (not just `{`/`}`) so an adversarial\n  globalStyle selector cannot split a declaration in the virtual stylesheet.\n- Lib + module_library are pub(super): used only within css_in_js/, no crate\n  public-API surface.\n- add a coexistence test: Panda `cva` and class-variance-authority `cva` under\n  distinct local aliases in one file (only Panda's base serializes).",
          "timestamp": "2026-07-01T10:59:57+02:00",
          "tree_id": "12896870ab600cfb3ae5c887cab62131831240b2",
          "url": "https://github.com/fallow-rs/fallow/commit/8b1d50f565587a84801a00db9b8d006e12e7455c"
        },
        "date": 1782896658732,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6435a03598e019253b410a783a0bc062d3794da",
          "message": "docs(extract): unlink private submodules in css_in_js module doc (#1705)\n\nThe css_in_js module doc linked to its private submodules via intra-doc\nlinks ([`template`], [`object`], [`tokens`], [`shared`]). Since css_in_js\nis `pub mod`, rustdoc's private_intra_doc_links lint fired under the\nDocumentation job's RUSTDOCFLAGS=-D warnings, breaking 'cargo doc\n--workspace --document-private-items' on main and blocking every Rust PR.\n\nReference the private front-end modules as inline code instead of links.\nVerified: RUSTDOCFLAGS='-D warnings' cargo doc --workspace --no-deps\n--document-private-items now exits 0.",
          "timestamp": "2026-07-01T09:08:38Z",
          "tree_id": "d69afa8add5107c5fc40825ff9408ea7269fbab7",
          "url": "https://github.com/fallow-rs/fallow/commit/b6435a03598e019253b410a783a0bc062d3794da"
        },
        "date": 1782897160570,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
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
          "id": "16d7934f39e7cb96d0e29f906b251fb621af3d18",
          "message": "chore(deps): bump syn from 2.0.117 to 2.0.118 (#1695)\n\nBumps [syn](https://github.com/dtolnay/syn) from 2.0.117 to 2.0.118.\n- [Release notes](https://github.com/dtolnay/syn/releases)\n- [Commits](https://github.com/dtolnay/syn/compare/2.0.117...2.0.118)\n\n---\nupdated-dependencies:\n- dependency-name: syn\n  dependency-version: 2.0.118\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-01T09:28:01Z",
          "tree_id": "b0ad8450f64e5721e60464435e5404e2bb75001c",
          "url": "https://github.com/fallow-rs/fallow/commit/16d7934f39e7cb96d0e29f906b251fb621af3d18"
        },
        "date": 1782898572574,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "335218664154eee1ba9df187cd6651c0e20f8abb",
          "message": "chore(license): drop redundant ed25519-dalek dev-dependency\n\nThe dev-dependency duplicated the normal dependency, which already\nprovides ed25519-dalek. Tests use only core APIs (SigningKey::from_bytes,\nsign, verifying_key) available with the std feature, so the extra dev\nentry was unnecessary.",
          "timestamp": "2026-07-01T14:04:40+02:00",
          "tree_id": "ecc23d616817930341bec3bf45ff6c2ad3f0a3d2",
          "url": "https://github.com/fallow-rs/fallow/commit/335218664154eee1ba9df187cd6651c0e20f8abb"
        },
        "date": 1782907788042,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66697ddb827190d7f195b78c7ebbc550f01ec368",
          "message": "refactor(architecture): finish typed engine split\n\nFinish the fallow-engine, fallow-output and fallow-api split so CLI, MCP, LSP and NAPI depend on typed programmatic contracts instead of CLI or Core internals.\n\nRemove legacy bridge paths for root envelopes and extraction facts, route audit and decision surfaces through reusable API sessions, and keep graph-cache correctness tied to stable FileIds and SourceFingerprint invalidation.\n\nThis keeps public JSON and generated TypeScript surfaces regenerated while leaving persisted graph cache behavior transparent to callers.",
          "timestamp": "2026-07-01T14:12:53+02:00",
          "tree_id": "81a5227bd4f00e8fd4bbdfb550a275aff2c4f426",
          "url": "https://github.com/fallow-rs/fallow/commit/66697ddb827190d7f195b78c7ebbc550f01ec368"
        },
        "date": 1782908261842,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.2,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db5405148d299fdb353983d72a01c63985a686f2",
          "message": "fix(extract): credit Vue v-for loop variable class member accesses (#1709)\n\nA Vue `v-for` loop variable iterating over a typed array or reactive array of a class (`v-for=\"(util, index) of utils\"` where `utils` is `Util[]` or `computed(() => Util[])`) had no element-type binding, so template member accesses on the item were dropped and the class members were falsely reported as `unused-class-member`.\n\nThe visitor now infers the element class of a module-scope array / reactive-array binding (declarator annotation, a reactivity generic type argument, a reactivity callback returning a typed array or a `new T()` array literal, or a direct `new T()` array literal). The Vue SFC template scanner types the first bare-identifier v-for item to that class and excludes it from the locals stack so its member accesses remap onto the class. Over-credit only: it can only remove findings, never add one. CACHE_VERSION 215 to 216.\n\nThanks @Ericlm for the report and the minimal reproduction.\n\nFixes #1707.",
          "timestamp": "2026-07-01T15:30:20+02:00",
          "tree_id": "3523732a360b1701072ad4a02a69b3e6e3cd9378",
          "url": "https://github.com/fallow-rs/fallow/commit/db5405148d299fdb353983d72a01c63985a686f2"
        },
        "date": 1782913079529,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.2,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91fb0eeb104bf10ea104346457bbc53063fb23c9",
          "message": "fix(extract): credit iteration-binding class members (#1710)\n\nFollow-up to #1707. Types an iteration variable to the element class of a typed array / reactive array so member accesses on it credit the class instead of false-reporting unused-class-member. Reuses the #1707 element-type inference.\n\nJS arm: array-method callbacks (map/forEach/filter/find/findLast/findIndex/findLastIndex/flatMap/some/every; reduce/reduceRight excluded, accumulator param) and for...of loops, covering React/Preact JSX .map. Svelte arm: {#each utils as util} items. Over-credit only. Deferred: Vue props.items, Angular @for, Astro .map. CACHE_VERSION 216 to 217.\n\nRefs #1707.",
          "timestamp": "2026-07-01T16:38:01+02:00",
          "tree_id": "dfd000e110caa16ff1bb4d67d847c66af09a92c9",
          "url": "https://github.com/fallow-rs/fallow/commit/91fb0eeb104bf10ea104346457bbc53063fb23c9"
        },
        "date": 1782917376198,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ce42a141d471908771f79ae43471fb7494a375e",
          "message": "docs: link iteration-binding follow-up issues (#1714)\n\nCite tracking issues #1711 (Vue props.items), #1712 (Angular @for), #1713 (Astro .map) for the deferred iteration-binding sibling cases in detection.md and CHANGELOG. Refs #1707.",
          "timestamp": "2026-07-01T17:04:47+02:00",
          "tree_id": "8d1fb741ff016e0085548c22ac7fdd16881a62ce",
          "url": "https://github.com/fallow-rs/fallow/commit/8ce42a141d471908771f79ae43471fb7494a375e"
        },
        "date": 1782918532372,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b8ef5a048e39b53b5820746dba2ea89cd213543f",
          "message": "fix(extract): credit deferred iteration-binding sibling class members (#1715)\n\nFixes the three deferred iteration-binding sibling cases from the #1707 / #1710 follow-up, each a false unused-class-member where an iteration item typed as the element class of an array was not credited. All over-credit-only: they can only remove a false finding, never add one.\n\n- #1711 Vue v-for over props.<field>: the defineProps inline-type harvest records each array-typed prop field element class as props.<field> into array_binding_element_types; the existing v-for scanner matches it.\n- #1712 Angular @for / *ngFor: the visitor collects component-field array element types and the Angular scanner types a bare-identifier loop var to that class, remapping util.member onto the element class. Inline template only.\n- #1713 Astro template .map: template {...} expression regions are re-parsed through the member-recording visitor seeded with frontmatter element types, reusing bind_iterable_callback_parameter.\n\nEach fix ships a reachable fixture with a non-vacuous control plus a neuter test. CACHE_VERSION 217 to 220.\n\nCloses #1711, #1712, #1713.",
          "timestamp": "2026-07-01T18:09:57+02:00",
          "tree_id": "864760094817bb661212fd06e9a6f3c51a96f011",
          "url": "https://github.com/fallow-rs/fallow/commit/b8ef5a048e39b53b5820746dba2ea89cd213543f"
        },
        "date": 1782922492748,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "bcc1f7866f04b1e6455609f828be97ed0d06a8bb",
          "message": "docs: link iteration-binding residual follow-up issues (#1716, #1717, #1718)\n\nCite the tracking issues for the deferred iteration-binding sibling cases in\ndetection.md: #1716 (Vue `v-for` over `<ref>.value` / `store.<field>`), #1717\n(Angular `@for` / `*ngFor` in an external `templateUrl`), and #1718 (JS\niteration-binding over a function-local array receiver). Mirrors #1714. Refs #1707.",
          "timestamp": "2026-07-01T20:11:20+02:00",
          "tree_id": "de93487b5d0ab96a7182c35b6d59c84fd4e85a90",
          "url": "https://github.com/fallow-rs/fallow/commit/bcc1f7866f04b1e6455609f828be97ed0d06a8bb"
        },
        "date": 1782929732341,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ea88340200e529d0f1416303cc436ae9ac370044",
          "message": "fix(napi): align smoke test with consolidated engine root-validation message\n\nThe engine consolidation refactor (f8eb3dd6a) changed validate_root's\nerror message from \"analysis root does not exist\" to the more\ninformative \"invalid root path '<path>': <os-error>\", but the NAPI\nsmoke test still asserted the old wording, reddening the Check job on\nboth ubuntu and windows. Match the stable substring instead of the\nOS-specific error text.",
          "timestamp": "2026-07-01T20:16:39+02:00",
          "tree_id": "92bdd3b04580279f931e136aacb504464312a418",
          "url": "https://github.com/fallow-rs/fallow/commit/ea88340200e529d0f1416303cc436ae9ac370044"
        },
        "date": 1782930263340,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37f7c79c7ef944cd0fd8cd4212884c1203263b57",
          "message": "feat(inventory): name callback arguments from the callee (#1719)\n\nThe inventory walker named bindings, methods, and function ids but left every\nfunction passed as a call/`new` argument as `(anonymous_N)`. Meanwhile the\nruntime instrumenter (oxc-coverage-instrument) with name_callback_arguments (the\nFallow beacon enables it) names those from the callee. So the static inventory\nand the runtime coverage drifted to different names for the same callback\n(`.references(() => ...)`, `arr.map(cb)`, route handlers), and the backfilled\nnever_called functions surfaced as anonymous.\n\nName a function-valued call/`new` argument from the callee (identifier, member\nproperty, or computed string-literal key), matching the instrumenter's\ncallee-naming exactly. Precedence stays parent-binding -> own id -> callee ->\ncounter (a new pending_callee_name slot ranks below the id, so a named function\nexpression keeps its id). The callee subtree is visited before the arguments, so\na chained call never leaks the earlier callee onto a later callback.\n\nVerified on a real Drizzle schema: 0/47 anonymous (was ~47). 2560 extract tests\ngreen; clippy + fmt clean.",
          "timestamp": "2026-07-01T21:01:34+02:00",
          "tree_id": "c2d61a5101aea70b7fd980a20eac1047b484d9ba",
          "url": "https://github.com/fallow-rs/fallow/commit/37f7c79c7ef944cd0fd8cd4212884c1203263b57"
        },
        "date": 1782933179605,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.3,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "7d7ca6d3c8d7737501beba662a7b50146ff8a4be",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.104.0",
          "timestamp": "2026-07-01T23:16:48+02:00",
          "tree_id": "db4a97930ea52a57dba1c156f329cc96119dd355",
          "url": "https://github.com/fallow-rs/fallow/commit/7d7ca6d3c8d7737501beba662a7b50146ff8a4be"
        },
        "date": 1782941135930,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.2,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "revaz.zakalashvili@gmail.com",
            "name": "Revaz Zakalashvili",
            "username": "revazi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88c3f434bd53d2536914607ee9a6d193a7bacb82",
          "message": "docs: add repo-scoped agent skills\n\nAdd portable Agent Skills adapters for the CI formats, CLI output, and JSON output reviewers.\n\nKeep the Agent Skills bodies aligned with their Claude reviewer counterparts where possible, while removing dependencies on local internal files or private maintainer context.",
          "timestamp": "2026-07-03T09:55:37+02:00",
          "tree_id": "19189030b5534463b67d7c191b2b7a9bd17e3fe6",
          "url": "https://github.com/fallow-rs/fallow/commit/88c3f434bd53d2536914607ee9a6d193a7bacb82"
        },
        "date": 1783065723314,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 93.2,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afff35d14a7b17ec6bf02b9deb80a698ef53d786",
          "message": "feat(ci): improve PR and MR reporting\n\n## Summary\n\n- Moves sticky PR/MR comments, inline review posting, and GitHub Check Run payloads behind typed Rust adapters.\n- Adds shared PR summary, decision, details, status, and comment-post plan contracts in fallow-output.\n- Documents comment layout controls and keeps legacy markdown rendering compatible.\n\n## Verification\n\n- cargo build --workspace\n- cargo test --workspace --lib --bins --tests --examples\n- cargo fmt --all -- --check\n- cargo test -p fallow-output pr_summary\n- cargo test -p fallow-cli --bin fallow combined\n- bash action/tests/run.sh\n- bash ci/tests/run.sh",
          "timestamp": "2026-07-03T17:35:03+02:00",
          "tree_id": "59e041933e42f85f068e5883e02819bc1e14c6ed",
          "url": "https://github.com/fallow-rs/fallow/commit/afff35d14a7b17ec6bf02b9deb80a698ef53d786"
        },
        "date": 1783093178107,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac7df1b8c2ed0d3c6898c5a90bcc44ebb76c3994",
          "message": "refactor(architecture): finish engine and registry split\n\nComplete the architecture roadmap by routing command, API, MCP, and editor flows through typed engine and API boundaries. Combined and audit now reuse retained project artifacts for dead code, duplication, and health instead of repeating discovery, parse, and graph work.\n\nMove output and issue metadata ownership into generated contracts, including suppressions, SARIF summaries, TypeScript aliases, and VS Code labels. Add fallow-security so security catalogue data no longer lives inside core analysis orchestration.\n\nKeep Cache V2 out of this change until FileId and invalidation guarantees are proven. Add an old-vs-new audit benchmark harness so future runtime claims have explicit semantic and timing evidence.",
          "timestamp": "2026-07-03T20:48:58+02:00",
          "tree_id": "66271d3eee62d81a788880bdc5c90ad9f70d28ad",
          "url": "https://github.com/fallow-rs/fallow/commit/ac7df1b8c2ed0d3c6898c5a90bcc44ebb76c3994"
        },
        "date": 1783104920699,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "606685c64a2a8ea619d9a7b9cd1208e794b6bec6",
          "message": "chore: fix vscode guard dist check",
          "timestamp": "2026-07-03T20:58:58+02:00",
          "tree_id": "2aa7bd3f0d1d5e2de1c73d2da4c76ba5daf1dab4",
          "url": "https://github.com/fallow-rs/fallow/commit/606685c64a2a8ea619d9a7b9cd1208e794b6bec6"
        },
        "date": 1783105410423,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dac94e1a27fe044da0992fa7e68cc8fe60717d0",
          "message": "feat(action): post PR output as the branded Fallow app (#1737)\n\nWhen a workflow grants `id-token: write` and the Fallow app is installed on the\nrepo, the action now requests a short-lived GitHub OIDC token, exchanges it for\na repo-scoped app installation token, and posts PR comments and reviews with it,\nso they are authored by the Fallow app instead of github-actions.\n\nFails safe: without id-token permission, without the app installed, or on any\nerror, it falls back to the default github-token exactly as before, so the check\nnever breaks. The minted token is masked. New `branded-token` (default true) and\n`broker-url` inputs; SARIF upload stays on github-token.",
          "timestamp": "2026-07-04T01:06:42+02:00",
          "tree_id": "4e054ec8e99dd4c08b7d27eda41487c959b01600",
          "url": "https://github.com/fallow-rs/fallow/commit/0dac94e1a27fe044da0992fa7e68cc8fe60717d0"
        },
        "date": 1783120360224,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80dd2c3d601ff337d527a020bc5a1d3e9ca71df8",
          "message": "feat(brand): new fallow f-wing logo (#1733)\n\nReplaces the three-bar mark with the new f-wing brand mark across the icon,\nthe wordmark lockups (light + dark), and the vscode sidebar icon. The mark was\nvectorized cleanly and kept in the brand palette (cream #FDFAEF on warm-black\n#1C1B1C); the wordmark text is unchanged. Regenerated the icon and logo PNGs.",
          "timestamp": "2026-07-04T08:36:45+02:00",
          "tree_id": "1407eaff83e2c04186577b389d61ff84be5485f4",
          "url": "https://github.com/fallow-rs/fallow/commit/80dd2c3d601ff337d527a020bc5a1d3e9ca71df8"
        },
        "date": 1783147252339,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "d4e8a860ed3e60c250bcea2895ec1684f4cb3bc9",
          "message": "fix(brand): update GitHub Pages favicon to the f-wing mark\n\nThe metrics landing page still embedded the old three-bar mark as its data-URI favicon. Swaps in the new f-wing mark to match the rebrand in #1733.",
          "timestamp": "2026-07-04T08:43:15+02:00",
          "tree_id": "410267c7b9654e5f142348b3fb8fd62a90f34cba",
          "url": "https://github.com/fallow-rs/fallow/commit/d4e8a860ed3e60c250bcea2895ec1684f4cb3bc9"
        },
        "date": 1783147689781,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c67798f2629db09e82117ce345130c1c822bf6d",
          "message": "feat(cli): add rule-pack authoring commands\n\nAdds rule-pack authoring commands, bundled templates, and generated agent/docs surfaces for declarative policy packs.",
          "timestamp": "2026-07-04T08:55:41+02:00",
          "tree_id": "2fc8a3f632c54acc1e0ea448c4311bf736d29b4c",
          "url": "https://github.com/fallow-rs/fallow/commit/2c67798f2629db09e82117ce345130c1c822bf6d"
        },
        "date": 1783148385159,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "691c3f906938e74967a630d997edf1eb5f4c9cac",
          "message": "feat: add v3 styling analysis integration\n\nAdds default audit styling intelligence with CSS and CSS-in-JS analytics, raw style value token drift, duplicate styling blocks, selector complexity, dead styling surface, broken references, and styling health surfaces.\n\nKeeps styling findings report-only and verify-first with CSS deep controls, output contracts, docs, MCP, NAPI, skills, and real-project smoke harness coverage.\n\nRebases onto the current architecture with registry-owned explain token lookup and Code Mode combined routed through the programmatic API.",
          "timestamp": "2026-07-04T09:47:54+02:00",
          "tree_id": "bcf5a2b20def65ed9c2da14b8cacca36401be76d",
          "url": "https://github.com/fallow-rs/fallow/commit/691c3f906938e74967a630d997edf1eb5f4c9cac"
        },
        "date": 1783151517848,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "348caa5d35f0c8d73f79c4950f9ab55db056b150",
          "message": "feat(core): add rule-pack v2 matchers\n\nAdds zone-scoped rule-pack policies, banned-export rules, and deep-import matching while keeping policy violations on the existing typed output contract.",
          "timestamp": "2026-07-04T10:15:19+02:00",
          "tree_id": "88f8e4c3424131dfe9015df0f0aa84f415bcb355",
          "url": "https://github.com/fallow-rs/fallow/commit/348caa5d35f0c8d73f79c4950f9ab55db056b150"
        },
        "date": 1783153239699,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "630722b016a5b785d6fa05ee54db6b339eb3c4fa",
          "message": "chore: release v3.0.0",
          "timestamp": "2026-07-04T10:58:59+02:00",
          "tree_id": "f011cc378131a241699dd790fca05d8f01d804ea",
          "url": "https://github.com/fallow-rs/fallow/commit/630722b016a5b785d6fa05ee54db6b339eb3c4fa"
        },
        "date": 1783155923598,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a45a7865b6a646be5e121c3687127357408c81b9",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.0.0",
          "timestamp": "2026-07-04T12:17:42+02:00",
          "tree_id": "6918a5a2e08e156c62134dbf8c931ce81d6657d1",
          "url": "https://github.com/fallow-rs/fallow/commit/a45a7865b6a646be5e121c3687127357408c81b9"
        },
        "date": 1783160521063,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "79987bd2dc5ee5d29c0ff5ed6615022f28f4fab6",
          "message": "docs(brand): fold styling into crate/npm/vscode descriptions, demote build attributes",
          "timestamp": "2026-07-04T16:58:09+02:00",
          "tree_id": "07e3265f1c6568af6b83287ec68552b015bfaef7",
          "url": "https://github.com/fallow-rs/fallow/commit/79987bd2dc5ee5d29c0ff5ed6615022f28f4fab6"
        },
        "date": 1783177350367,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "4722bc298c3e9655d9b912bf6f1822d255106e25",
          "message": "docs(brand): finish positioning sweep in README and vendored skill",
          "timestamp": "2026-07-04T17:02:28+02:00",
          "tree_id": "60335441c5311214cc0a9f1b801051ccae929b85",
          "url": "https://github.com/fallow-rs/fallow/commit/4722bc298c3e9655d9b912bf6f1822d255106e25"
        },
        "date": 1783177617072,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff76b924a3ac0190f0f187c5917bda19275a3fcf",
          "message": "refactor(quality): reduce Rust unit size\n\nContinue the SIG unit-size cleanup by splitting long Rust functions across CLI, API, engine, extractor, graph, LSP, MCP, output, config, and types surfaces into narrower private helpers. The changes keep public output contracts and analysis behavior intact while making pipelines, renderers, mappers, and diagnostics easier to scan.\n\nThe loop only kept measured improvements and dropped the final non-improving split. No new user-facing capability is intended, this is maintainability work for future feature and bug-fix changes.",
          "timestamp": "2026-07-04T20:25:47+02:00",
          "tree_id": "7a6acf2979fb6307c8b0922ad92d265ca2058c9d",
          "url": "https://github.com/fallow-rs/fallow/commit/ff76b924a3ac0190f0f187c5917bda19275a3fcf"
        },
        "date": 1783190134599,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "8762f20680c8a0b0a39dbee1a6b1f8d9e33e715f",
          "message": "test(cli): isolate workflow_event config_shape from accumulator leak\n\nbuild_workflow_event reads process-global telemetry accumulators (config\nshape, findings, cache state, scale buckets). These are static because\nproduction runs one analysis batch per process, but the in-process test\nbinary shares them: any test that loads a config calls note_config_shape,\nleaving CONFIG_SHAPE set for whatever test runs next. workflow_event_buckets_exit_codes\nthen read a leaked CustomConfig instead of its record's CustomRules and\nfailed nondeterministically (deterministically under --test-threads=1).\n\nAdd a cfg(test) reset_run_accumulators_for_test that restores the\nfresh-process UNSET state, and call it at the start of the affected test.",
          "timestamp": "2026-07-05T11:09:25+02:00",
          "tree_id": "4e828112e3b7e1932a7ba2278857cd1305bdad68",
          "url": "https://github.com/fallow-rs/fallow/commit/8762f20680c8a0b0a39dbee1a6b1f8d9e33e715f"
        },
        "date": 1783242834615,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "784ffed5d6a2113262787585d8599dc1cf8acd9a",
          "message": "feat(trace): fall back to a class-member trace on export miss (#1744)\n\n`fallow dead-code --trace FILE:NAME` errored `export 'NAME' not found` when NAME was a class / enum / store MEMBER rather than a top-level export, so a member finding could not be debugged from the trace tool. On an export miss, `handle_trace_export` now falls back to a `trace_class_member` primitive that finds the export whose members contain NAME and reports the owning export's reachability and usage (reusing `trace_export`), who imports it, the re-export chains it is reachable through, and a `fallow dead-code --unused-<kind>-members --file <file>` pointer.\n\nThe trace path runs on the module graph only, so it does not report per-member crediting provenance. Trace JSON goes through the generic `print_trace_json` (not in the published schema), so the new `ClassMemberTrace` type needs no schema or TS-codegen regen. Adds core + human-renderer tests; human and `--format json` supported.\n\nCloses #1744.",
          "timestamp": "2026-07-05T11:16:58+02:00",
          "tree_id": "40bcb08fba8878fd48278a93a3974b02f6231ebf",
          "url": "https://github.com/fallow-rs/fallow/commit/784ffed5d6a2113262787585d8599dc1cf8acd9a"
        },
        "date": 1783243275993,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6b9eb819620baf9aaf892e2ec552e92eb8a63e2e",
          "message": "refactor(engine): route workspace discovery through engine",
          "timestamp": "2026-07-05T11:44:05+02:00",
          "tree_id": "b3d4e7baf45ecd11c4357acc578d0b29f434926b",
          "url": "https://github.com/fallow-rs/fallow/commit/6b9eb819620baf9aaf892e2ec552e92eb8a63e2e"
        },
        "date": 1783244928279,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "3bb785ce9a64066a096f33379e34b2b7a3e0c31c",
          "message": "refactor(engine): own workspace scope resolution",
          "timestamp": "2026-07-05T11:57:09+02:00",
          "tree_id": "9ccd27402baee33ddc5c915b2ebdb63edf474c74",
          "url": "https://github.com/fallow-rs/fallow/commit/3bb785ce9a64066a096f33379e34b2b7a3e0c31c"
        },
        "date": 1783245752626,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "f86039289acd6dee37597d41a7988b893a7f26f8",
          "message": "refactor(engine): own routing git identities",
          "timestamp": "2026-07-05T12:14:05+02:00",
          "tree_id": "f7bd6c7a9dc2a9b810495dc82c403d9275e63823",
          "url": "https://github.com/fallow-rs/fallow/commit/f86039289acd6dee37597d41a7988b893a7f26f8"
        },
        "date": 1783246799543,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6ea5700b9d00292aa47a60b3fec634abd4a39e8a",
          "message": "refactor(engine): own audit repo refs",
          "timestamp": "2026-07-05T12:25:53+02:00",
          "tree_id": "69d957791c764e65aabf9d75e3c5ffc29b73043a",
          "url": "https://github.com/fallow-rs/fallow/commit/6ea5700b9d00292aa47a60b3fec634abd4a39e8a"
        },
        "date": 1783247429933,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "26e195b3627ec190680fbf857ca2c5743ae1f703",
          "message": "refactor(engine): own project workspace scope",
          "timestamp": "2026-07-05T12:35:57+02:00",
          "tree_id": "363995c9789ce9dac9c60928365fe64e8a0bd8f2",
          "url": "https://github.com/fallow-rs/fallow/commit/26e195b3627ec190680fbf857ca2c5743ae1f703"
        },
        "date": 1783248045815,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58a83e31057807c6d557b397f815675a45319ce4",
          "message": "docs(mcp): correct trace tools' in-process framing in mcp-server.md\n\nAll four trace MCP tools (trace_export / trace_file / trace_dependency / trace_clone) are API-backed in-process via fallow_api::run_trace_*, not a CLI subprocess. Reframe the three stale mcp-server.md bullets to match. Docs-only.",
          "timestamp": "2026-07-05T12:46:24+02:00",
          "tree_id": "1890a032a89bec3d1b2f81b5a900f763878cb0dc",
          "url": "https://github.com/fallow-rs/fallow/commit/58a83e31057807c6d557b397f815675a45319ce4"
        },
        "date": 1783248643490,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "71410c4e92a13dd4cd79a9970225349bfc78b8eb",
          "message": "chore: release v3.1.0",
          "timestamp": "2026-07-05T13:07:30+02:00",
          "tree_id": "b767cc9188067db4027fabd70d0d71e77c412a51",
          "url": "https://github.com/fallow-rs/fallow/commit/71410c4e92a13dd4cd79a9970225349bfc78b8eb"
        },
        "date": 1783249998774,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "a5e0327261f94261dd6752d27261758860eb7dfb",
          "message": "perf(api): reuse audit analysis context",
          "timestamp": "2026-07-05T14:13:22+02:00",
          "tree_id": "f4f1c0f80057d4190dea8a84aae9693c79bfa360",
          "url": "https://github.com/fallow-rs/fallow/commit/a5e0327261f94261dd6752d27261758860eb7dfb"
        },
        "date": 1783254013701,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "ede3bcd2c01c06d0b63178ee54491103cfe5ff11",
          "message": "docs: correct benchmark ratio claims",
          "timestamp": "2026-07-05T19:40:18+02:00",
          "tree_id": "a3659bf288831ff1b37b04933f8f616c8dca4e55",
          "url": "https://github.com/fallow-rs/fallow/commit/ede3bcd2c01c06d0b63178ee54491103cfe5ff11"
        },
        "date": 1783273498718,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "c6bbfa3d6697269811e1e9d942e0d212832931a1",
          "message": "docs: align benchmark file count",
          "timestamp": "2026-07-05T19:45:59+02:00",
          "tree_id": "47877230143b5ef1ddb44e2bdd994b23fe5774ca",
          "url": "https://github.com/fallow-rs/fallow/commit/c6bbfa3d6697269811e1e9d942e0d212832931a1"
        },
        "date": 1783273807947,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d14a7714bb46de6c36fc0fb3ffbc01f7aa35767",
          "message": "feat(health): add maxUnitSize threshold override for the large-function check (#1751)\n\nAdds a health.maxUnitSize line-count threshold (global default 60) plus a per-file thresholdOverrides[].maxUnitSize, so a user can raise the function-too-big bar for test files (or any glob) without disabling complexity checks the way health.ignore does.\n\nDesign is list-only, matching the existing maxCyclomatic/maxCognitive/maxCrap override precedent: it filters the reported large-functions list on the resolved per-file effective threshold, while the descriptive unit-size profile and the health score still reflect raw sizes.\n\nFixes #1731.",
          "timestamp": "2026-07-05T21:07:56+02:00",
          "tree_id": "0ff5613e7c0964c0f88d669d6a6b776856503be0",
          "url": "https://github.com/fallow-rs/fallow/commit/1d14a7714bb46de6c36fc0fb3ffbc01f7aa35767"
        },
        "date": 1783279055972,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "9dc768e2cc481d98d70c3cd24eb424712ea0d89e",
          "message": "perf: broaden codspeed benchmark coverage",
          "timestamp": "2026-07-05T21:35:49+02:00",
          "tree_id": "8efe61fc0d959fe8b7bf2e4634316d18b70a6cc7",
          "url": "https://github.com/fallow-rs/fallow/commit/9dc768e2cc481d98d70c3cd24eb424712ea0d89e"
        },
        "date": 1783280404236,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "47220ee76899388cf5bc1298b083c644a5067495",
          "message": "ci: shard benchmarks by affected component",
          "timestamp": "2026-07-05T21:41:55+02:00",
          "tree_id": "82a80080e018646894c56c860aecfaf9089b28b6",
          "url": "https://github.com/fallow-rs/fallow/commit/47220ee76899388cf5bc1298b083c644a5067495"
        },
        "date": 1783280769290,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "185c6a728a4759c5c34afcae1d262ccb09e41a8c",
          "message": "feat(health): expose max unit size threshold in summary\n\nAdd max_unit_size_threshold to the health JSON summary so consumers can read the configured global health.maxUnitSize alongside the existing cyclomatic, cognitive, and CRAP thresholds.\n\nThe human large-functions section now reflects the configured global threshold, and the markdown/human fallback effective-threshold wiring carries the same value for parity with the other thresholds.\n\nFixes #1750.",
          "timestamp": "2026-07-05T22:15:25+02:00",
          "tree_id": "ff38a4bc359bb161c5746c4abd7ff6381f68399a",
          "url": "https://github.com/fallow-rs/fallow/commit/185c6a728a4759c5c34afcae1d262ccb09e41a8c"
        },
        "date": 1783282968113,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afa3c171257bcb18cd0edbad9cf033d2be8f0443",
          "message": "fix(health): pluralize the large-functions unit-size footer (#1753)\n\nThe large-functions footer from #1750 read \"exceeding 1 lines\" when health.maxUnitSize is 1; guard the noun so a ceiling of 1 renders \"1 line\". Refs #1750.",
          "timestamp": "2026-07-05T22:35:46+02:00",
          "tree_id": "b388d3dcf64b25ac2d88c6e4a0b38dfbcdf95c2a",
          "url": "https://github.com/fallow-rs/fallow/commit/afa3c171257bcb18cd0edbad9cf033d2be8f0443"
        },
        "date": 1783284061647,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "0d568277b6cf91e95c98cb92f8228154e58d6984",
          "message": "chore: release v3.2.0",
          "timestamp": "2026-07-05T23:33:08+02:00",
          "tree_id": "06f0a215a30c01d1d15b2bcfa60193d5391080d5",
          "url": "https://github.com/fallow-rs/fallow/commit/0d568277b6cf91e95c98cb92f8228154e58d6984"
        },
        "date": 1783287508295,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "distinct": true,
          "id": "6280c23c3709f69691ebdaef9172c81a4883bdef",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.2.0",
          "timestamp": "2026-07-06T00:38:45+02:00",
          "tree_id": "a5f6f2c47a377bd2c9f4265e282161708d4e6003",
          "url": "https://github.com/fallow-rs/fallow/commit/6280c23c3709f69691ebdaef9172c81a4883bdef"
        },
        "date": 1783291540638,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9807e2e414a3a3bd379727b6cc6c7ae21d25ce7a",
          "message": "fix(unused-class-members): credit iteration bindings\n\nCredit unused-class-member usage through typed iteration bindings in Vue, Angular external templates, and function-local JavaScript arrays.\n\nThe extractor now preserves scoped array element facts for local loops and callbacks, records Angular component field array types for templateUrl usage, and avoids parallel overhead for tiny warm-cache parse sets.\n\nFixes #1716.\nFixes #1717.\nFixes #1718.",
          "timestamp": "2026-07-06T11:12:22+02:00",
          "tree_id": "93944c9477529094a9f9e31e34ad0ccfc77fbe95",
          "url": "https://github.com/fallow-rs/fallow/commit/9807e2e414a3a3bd379727b6cc6c7ae21d25ce7a"
        },
        "date": 1783329395110,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.9,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c9ecd2f9091c56b92b0177b7d4d01a45e044f6d",
          "message": "feat(analysis): add route-loader and CSS-in-JS quality checks\n\nAdds framework-scoped route-loader data key harvesting for React Router and Remix while keeping SvelteKit load data isolated. The extractor now records the correct producer mode, bumps the cache version, and the analyzer keeps SvelteKit whole-object abstain from suppressing route-loader findings.\n\nAdds CSS-in-JS near-duplicate token reporting to the CSS analytics contract, human health output, schema, generated TypeScript contracts, and styling findings. Partial-scope scans abstain from the whole-project comparison so changed-file output stays conservative.",
          "timestamp": "2026-07-06T11:46:31+02:00",
          "tree_id": "f7d59442271c692c1e336839424ecf12abe89e11",
          "url": "https://github.com/fallow-rs/fallow/commit/2c9ecd2f9091c56b92b0177b7d4d01a45e044f6d"
        },
        "date": 1783331511241,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba423ccec8b0e7edc3e5cdb67ba97ea1c9b2c25d",
          "message": "docs(extract): clarify parse scheduling\n\nClarifies that extraction uses a sequential fast path for small file sets and parallel parsing for larger file sets.\n\nAlso documents why the small-input threshold exists: avoiding Rayon scheduling overhead on cache-hot inputs.",
          "timestamp": "2026-07-06T12:02:31+02:00",
          "tree_id": "84b49d92c5c25e14c2625b2381ca9d4d60d46302",
          "url": "https://github.com/fallow-rs/fallow/commit/ba423ccec8b0e7edc3e5cdb67ba97ea1c9b2c25d"
        },
        "date": 1783332459761,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1b9d4c1b12acebe53841a259b91ba36d7607468",
          "message": "feat(architecture): add contract guardrails\n\nAdd generated contract surface checks, architecture invariants, SARIF/LSP contract cleanup, MCP CLI fallbacks, and public smoke conformance guardrails.",
          "timestamp": "2026-07-06T19:07:35+02:00",
          "tree_id": "72031856c10c4af91c5c074522e91270a772f573",
          "url": "https://github.com/fallow-rs/fallow/commit/f1b9d4c1b12acebe53841a259b91ba36d7607468"
        },
        "date": 1783358047391,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c96a30db4904bab4d269782cad4874bcbbfc72e",
          "message": "refactor(architecture): close output boundary leftovers\n\nMove reusable SARIF result assembly and audit styling render facts into fallow-output so API and CLI code stop owning shared output contract behavior.\n\nKeep fallow-core contained as engine backend debt by removing the benchmark convenience dependency and adding crate-boundary guards. Complete the FallowOutput schema manifest for trace, feature flags, and decision surface, then drift-test the backwards compatibility docs and regenerated TypeScript contracts.",
          "timestamp": "2026-07-06T23:53:20+02:00",
          "tree_id": "a189a2313c041ef55c41a310e4ea13f65108a0e3",
          "url": "https://github.com/fallow-rs/fallow/commit/2c96a30db4904bab4d269782cad4874bcbbfc72e"
        },
        "date": 1783375111966,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7878f27ede3575df0ca7142e03db38ad56acb00",
          "message": "refactor: remove architecture debt\n\nMove SARIF-family assembly and shared formatter facts behind fallow-output while keeping fallow-api as a compatibility facade.\n\nReclassify fallow-core as an internal detector backend behind fallow-engine, tighten architecture guards for direct core calls, IO/cache ownership, analyzer placement, manifest drift, and protocol prose.\n\nRemove stale exception language from contributor docs and add pre-ship guard coverage so the architecture debt cannot silently return.",
          "timestamp": "2026-07-07T07:51:22+02:00",
          "tree_id": "db8be59ca0bf3c1f9de75a9cf302d1874c84c199",
          "url": "https://github.com/fallow-rs/fallow/commit/e7878f27ede3575df0ca7142e03db38ad56acb00"
        },
        "date": 1783404014515,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90d340dcdc8f15c8bc2dfbecbf348b51894f72d9",
          "message": "fix(resolve): clarify incomplete-tsconfig-chain warning\n\nThe \"Broken tsconfig chain ... path aliases from missing inherited configs will not [work]\" warning read as if every path alias was unresolved, alarming users of large monorepos whose aliases resolve fine. When a per-file tsconfig extends/references chain cannot be fully loaded (commonly a node_modules base config not installed yet), fallow falls back to resolver-less resolution, but aliases declared in a discovered root or workspace tsconfig are still applied project-wide by the TypeScript plugin. The warning now says so and only flags aliases declared solely in the unreadable inherited config. Wording and documentation only; resolution behavior is unchanged.",
          "timestamp": "2026-07-07T21:06:38+02:00",
          "tree_id": "8a35075bdbd2b0b2de755d2aa78a346500f24683",
          "url": "https://github.com/fallow-rs/fallow/commit/90d340dcdc8f15c8bc2dfbecbf348b51894f72d9"
        },
        "date": 1783451642444,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68626df671925eae57fdf8d099a4116b8a2609dd",
          "message": "feat(onboarding): cold-start config recommendation for agents\n\nAdds an agent onboarding surface that takes a cold-start agent (arriving via\nGitHub, npx, or MCP) from zero to a project-tailored fallow config. `fallow\nschema` is a capability manifest (commands, global flags, issue types with\ndefault severities / opt-in / frameworks, boundary presets, taste choices,\nsecurity categories, MCP tools, related schemas); `fallow recommend` emits a\ndetection-derived `proposed_config` that loads through the real loader plus a\nthree-valued `decisions[]` list (auto applied silently, default disclosed and\noverridable, taste surfaced as an open AskUserQuestion with no baked-in answer);\na read-only `recommend` MCP tool mirrors it 1:1; and `fallow config-schema` is\nself-documenting from the Rust config types.\n\n`fallow init` now derives its detection base (entry, workspaces.patterns,\nStorybook ignore) from the same recommend core so init and recommend never\ndrift, and the `--toml` scaffold writes the loader's `patterns` key instead of\nthe silently-dropped `packages` (with a `packages` back-compat serde alias so\nexisting configs keep scoping). Framework and test-framework detection now\naggregate dependency names across workspace members, not just the root\npackage.json, so a monorepo whose frameworks live in packages (Next.js in\napps/web) is reported instead of showing as frameworkless.\n\n`fallow config` on a zero-config project now prints the effective defaults as\nclean JSON and exits 0 (was exit 3 with no output); `--path` still exits 3 when\nno file exists. `fallow recommend`'s concise human output points at\n`--format json` for the full structured decision set. Companion docs\n(fallow-docs) are updated separately; the vendored skill/manifest contracts are\nregenerated in this change.",
          "timestamp": "2026-07-07T22:08:34+02:00",
          "tree_id": "cb83096934bdae92ee359eb934e4619109dd3dff",
          "url": "https://github.com/fallow-rs/fallow/commit/68626df671925eae57fdf8d099a4116b8a2609dd"
        },
        "date": 1783455438387,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
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
          "id": "be8ec988c852de3af86a494c2931ef02bbe507e2",
          "message": "chore(deps): bump crate-ci/typos from 1.47.2 to 1.48.0 (#1769)\n\nBumps [crate-ci/typos](https://github.com/crate-ci/typos) from 1.47.2 to 1.48.0.\n- [Release notes](https://github.com/crate-ci/typos/releases)\n- [Changelog](https://github.com/crate-ci/typos/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/crate-ci/typos/compare/37bb98842b0d8c4ffebdb75301a13db0267cef89...bee27e3a4fd1ea2111cf90ab89cd076c870fce14)\n\n---\nupdated-dependencies:\n- dependency-name: crate-ci/typos\n  dependency-version: 1.48.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-07T22:38:19+02:00",
          "tree_id": "b5ed1506cc641f32f5a3b815399a9ab2fedfaebd",
          "url": "https://github.com/fallow-rs/fallow/commit/be8ec988c852de3af86a494c2931ef02bbe507e2"
        },
        "date": 1783457093020,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2244b5c42d096f04a8334e4e84d13bd5f6de9d2f",
          "message": "chore(deps): unblock Dependabot PRs (crossbeam-epoch security + npm tooling) (#1778)\n\n* fix(deps): bump crossbeam-epoch to 0.9.20 for RUSTSEC-2026-0204\n\ncrossbeam-epoch 0.9.18 (transitive via rayon-core and ignore) is flagged\nby RUSTSEC-2026-0204: invalid pointer dereference in the fmt::Display impl\nfor Atomic/Shared on null pointers. Fixed in >=0.9.20. Cargo.lock-only\nbump; clears the Cargo Deny and Security Audit failures on main and every\nopen PR.\n\n* chore(deps-dev): bump commitlint, oxfmt, oxlint and resync lockfile\n\nBumps @commitlint/cli and @commitlint/config-conventional to 21.2.0,\noxfmt to 0.57.0, oxlint to 1.72.0. Regenerates package-lock.json with a\nreal npm install so the nested conventional-commits-parser@6.4.0 entry is\nrestored; Dependabot's per-package lockfile regeneration had pruned it,\nbreaking npm ci (the JS Lint and Commit messages checks) on every npm PR.\n\nSupersedes #1761, #1763, #1764, #1765.",
          "timestamp": "2026-07-07T20:48:06Z",
          "tree_id": "29570e966bace28ce0c12094d6726e16f5885c39",
          "url": "https://github.com/fallow-rs/fallow/commit/2244b5c42d096f04a8334e4e84d13bd5f6de9d2f"
        },
        "date": 1783457557647,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66e4400cbcaeb3e134e76965b0c15aa7f0f1e91e",
          "message": "chore(deps): migrate MCP server to rmcp 2.x (#1779)\n\nBumps rmcp 1.8 -> 2.1 (manifest floor \"2.0\"). The 2.0 model reorg renamed\nthe content type: `Content` (an `Annotated<RawContent>` with a `.raw`\nfield) became the flat `ContentBlock` enum, and the `RawContent` enum was\nremoved. Migrated all tool response builders and result-parsing helpers:\n\n- `rmcp::model::Content` -> `ContentBlock`; `Content::text` -> `ContentBlock::text`\n- `let RawContent::Text(t) = &content.raw` -> `let ContentBlock::Text(t) = content`\n- `match &result.content[0].raw { RawContent::Text(t) => .. }` -> `match &result.content[0] { ContentBlock::Text(t) => .. }`\n\nThe tool-router macros (`#[tool]`, `tool_router`, `tool_handler`),\n`ServerHandler`, `Parameters`, and stdio transport are unchanged across\nthe major. Verified: builds, clippy clean, mcp tests pass, and a live\nstdio session (initialize -> tools/list -> tools/call fallow_explain)\nreturns correct results.\n\nCloses #1773.",
          "timestamp": "2026-07-07T21:12:18Z",
          "tree_id": "a9b35be271a7c773aa72924e003fd7f3ccea9f8e",
          "url": "https://github.com/fallow-rs/fallow/commit/66e4400cbcaeb3e134e76965b0c15aa7f0f1e91e"
        },
        "date": 1783459362781,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Code Coverage",
            "value": 92.8,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bart@waardenburg.dev",
            "name": "Bart Waardenburg",
            "username": "BartWaardenburg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a827074ceedafb3199ae6ea1f729910ec1354b1",
          "message": "feat(plugins): add fallow plugin-check for agent plugin-authoring\n\nRead-only fallow plugin-check [--format json] dry-run so an agent can verify an external plugin (fallow-plugin-*.jsonc, especially manifestEntries) without a full analysis. Reports per plugin whether it activated (with the unmet detection/enabler requirement when inactive), and for active manifestEntries plugins the per-rule matched manifests, when-gate result, seeded entries (with path_exists), and typed warnings. The report is a shared RuleReport that production seeding also consumes, so the two cannot drift. Deterministic output; always exits 0 (advisory).\n\nA dead-code --format json run with active external plugins + unused files surfaces a verify-plugins next step, and fallow schema related_schemas gained plugin_schema_command / plugin_check_command pointers. Fixes the dead fallow.dev/plugin-schema.json URL to raw.githubusercontent. Refs #1774.",
          "timestamp": "2026-07-08T09:28:12+02:00",
          "tree_id": "59c68ebaa68a4fc92a8a4b9736537407dc07fadd",
          "url": "https://github.com/fallow-rs/fallow/commit/7a827074ceedafb3199ae6ea1f729910ec1354b1"
        },
        "date": 1783496027716,
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
          "id": "df2f052a926c23937a359551ba771fcbe795cbe2",
          "message": "refactor(skill): split MCP catalogue to references/mcp.md; add vendored-skill drift gate (#1781)\n\nMove the MCP tool catalogue out of the always-loaded SKILL.md into references/mcp.md, add a CI gate keeping npm/fallow/skills in lockstep with canonical fallow-skills, and reconcile capabilities.json + both skill trees with the binary (adds plugin-check, fixing the stale contract bundle).",
          "timestamp": "2026-07-08T11:24:03+02:00",
          "tree_id": "e41b6d7f7df9a925338928861e4e038490724677",
          "url": "https://github.com/fallow-rs/fallow/commit/df2f052a926c23937a359551ba771fcbe795cbe2"
        },
        "date": 1783503047933,
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
          "id": "dc47771ba6fbee568a862ca72516fde9fd3f89cb",
          "message": "style: apply rustfmt after css_analytics split",
          "timestamp": "2026-07-08T12:14:50+02:00",
          "tree_id": "0ca632c18a104fcfa9f74f45b1e90bbb8d6601b6",
          "url": "https://github.com/fallow-rs/fallow/commit/dc47771ba6fbee568a862ca72516fde9fd3f89cb"
        },
        "date": 1783506134642,
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
          "id": "5f17bad395911bb1c18992c53d9f7105b757d9bf",
          "message": "fix(ci): skills-vendor gate ignores version-string lines; add vendor-skills unit tests (#1782)\n\nNormalize `\"version\"` strings in the skills-vendor drift comparison so the transient release-window bump (step 5c vs 10a-pre) does not false-fail CI; guard main() behind an import.meta check so importing the module never runs it; add unit tests for vendor-skills.mjs.",
          "timestamp": "2026-07-08T12:24:29+02:00",
          "tree_id": "62d5c2f5ef39923bc580b1728cecb9df09a7d0ea",
          "url": "https://github.com/fallow-rs/fallow/commit/5f17bad395911bb1c18992c53d9f7105b757d9bf"
        },
        "date": 1783506668319,
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
          "id": "4f6dfc9fcf12d0cda5680cd91a8a4aacbc9b2755",
          "message": "chore(contracts): regenerate output schema after dupes doc-comment refresh",
          "timestamp": "2026-07-08T14:29:47+02:00",
          "tree_id": "e8b4671376a932acfa57ecffac7c94237c02ed6d",
          "url": "https://github.com/fallow-rs/fallow/commit/4f6dfc9fcf12d0cda5680cd91a8a4aacbc9b2755"
        },
        "date": 1783514063447,
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
          "id": "bd988db96ecd7aaf80b94525d27662ac5820363f",
          "message": "refactor(ci): make vendor-skills main testable and quiet diff output in tests (#1784)\n\nExtract the main() dispatch into a pure decide(), export main(), and add a renderDiffs option to runCheck so tests exercise the changed-file drift path without spawning git diff into the TAP stream. Adds decide + main unit tests.",
          "timestamp": "2026-07-08T14:50:39+02:00",
          "tree_id": "f753d1dc00cc8d464bf9457579b705d95174843f",
          "url": "https://github.com/fallow-rs/fallow/commit/bd988db96ecd7aaf80b94525d27662ac5820363f"
        },
        "date": 1783515319182,
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
          "id": "d0871a46eebeb930dceb737aee2be48270635f62",
          "message": "fix(distribution): harden agent-facing release surfaces\n\nHarden the shipped npm wrapper so signal-terminated binaries propagate a failing shell-style exit code, and make Linux libc fallback choose the musl package unless glibc is detected.\n\nMove hot-path fan I/O reference signals to a precomputed graph pass, convert LSP byte columns to UTF-16 at the protocol boundary, and keep Node addon panics catchable by using a NAPI-specific unwind profile.\n\nExpose impact_closure as a read-only MCP tool that wraps the existing dead-code impact closure CLI path, including Code Mode, manifest, schema, documentation, and regression coverage.",
          "timestamp": "2026-07-08T19:11:23+02:00",
          "tree_id": "4d6526bd83f630e06d1ca1d822844e202932d8f6",
          "url": "https://github.com/fallow-rs/fallow/commit/d0871a46eebeb930dceb737aee2be48270635f62"
        },
        "date": 1783531095925,
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
          "id": "5a3dc000ce563ed822b1a176a9390970f413c49e",
          "message": "chore(contracts): regenerate capabilities and vendored MCP catalogue for impact_closure",
          "timestamp": "2026-07-08T20:26:38+02:00",
          "tree_id": "d462c99c3c744ca94a81a94f80fa1fb50c45db19",
          "url": "https://github.com/fallow-rs/fallow/commit/5a3dc000ce563ed822b1a176a9390970f413c49e"
        },
        "date": 1783535645073,
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
          "id": "ef6b1de673addd85cc57bc4b02d3f3487bfce2d2",
          "message": "test(cli): update architecture guardrails after core detector deletion\n\nThe core_backend forbidden list dropped its fallow_core::duplicates::*\nentries: the module no longer exists, so that routing cannot compile and\nthe string guards are vacuous. The BackendCloneFingerprintSet adapter\nguard and the engine-side ownership assertions stay. Also repoints a\ndoc-comment path in audit_tests.rs to the engine detector tree.",
          "timestamp": "2026-07-08T21:22:28+02:00",
          "tree_id": "f20d25cbe6e9bbb56c3c1a6a11b5ba11b0267cae",
          "url": "https://github.com/fallow-rs/fallow/commit/ef6b1de673addd85cc57bc4b02d3f3487bfce2d2"
        },
        "date": 1783545367054,
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
          "id": "a4fb282920ee12d521d48a2f13be9ad77d3665ef",
          "message": "docs(rules): point churn wiring at fallow_engine paths in cli-crate.md",
          "timestamp": "2026-07-08T23:17:03+02:00",
          "tree_id": "bb38d0056949b8ed70e36793b19a100ba1ae8c97",
          "url": "https://github.com/fallow-rs/fallow/commit/a4fb282920ee12d521d48a2f13be9ad77d3665ef"
        },
        "date": 1783545718988,
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
          "id": "c196a300d6a420d9c2abe69df1f771b336942b7f",
          "message": "fix(members): credit member access through interface/type-alias property hops\n\nA dotted member chain whose receiver's type hop goes through a named interface or type-literal alias (interface Opts { c: OptDep }, constructor(private opts: Opts), this.opts.c.optM()) was never resolved, same-file or cross-module: the per-file interface property-type map's only consumer was destructured typed bindings. Codebases wiring classes through constructor-injected options objects saw near-100% false-positive unused-class-member rates and had to disable the rule.\n\nThe extraction layer now expands compound binding targets through the file's own interface/alias property types (one path segment per hop, so self-referential types terminate; local-class compounds stay on the instance_bindings path). When a hop's type name is imported, the property maps persist as ModuleInfo.type_member_types and a new TypedPropertyMemberAccess semantic fact joins consumer, declaring module, and class at analyze time, mirroring the factory-return machinery with the same export_is_class_with_members over-credit gate, so a wrong annotation can only under-report, never flag. Same-file renamed interface exports (export { Foo as Bar }) resolve through the export's declared local name.\n\nAlso fixed: interface-declared Playwright fixture maps (base.extend<MyFixtures> where MyFixtures is an interface) now resolve identically to the type-alias form, and the SFC merge path now carries semantic_facts, so Vue/Svelte script blocks participate in every cross-module fact join they previously dropped. CACHE_VERSION 224 to 225; warm caches invalidate on upgrade.\n\nFixes #1785.",
          "timestamp": "2026-07-08T23:51:37+02:00",
          "tree_id": "be50085faab8293d5d61c4509a6ae7f5e6c56a29",
          "url": "https://github.com/fallow-rs/fallow/commit/c196a300d6a420d9c2abe69df1f771b336942b7f"
        },
        "date": 1783548019215,
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
          "id": "be01c9abe56fa40fc225537f95dfa1e270e17326",
          "message": "fix(members): hop through local unexported options classes in typed-property expansion\n\nFollow-up to #1787: an options object typed by a LOCAL, UNEXPORTED class whose property type is imported (class Opts { constructor(public c: ImportedDep) {} } + this.opts.c.optM()) still reported ImportedDep.optM as an unused-class-member. The unexported class never resolves through local_to_export_keys, so the analyze-side instance-binding chain dead-ends, and the #1785 expansion returned Opaque for every local-class root.\n\nexpand_typed_property_compound now continues through a locally-declared class's own typed-property bindings, unifying the class hop with the interface/alias hop. Exported classes keep their analyze-side path (the extract-side credit is additive and gated identically downstream, so a wrong hop can only under-report); an unknown property on a local-class hop abstains. CACHE_VERSION 225 to 226.\n\nFixes #1788.",
          "timestamp": "2026-07-09T08:57:56+02:00",
          "tree_id": "0bdf9b44b1e3fc71656f095fd27ae84bf6241b72",
          "url": "https://github.com/fallow-rs/fallow/commit/be01c9abe56fa40fc225537f95dfa1e270e17326"
        },
        "date": 1783580722998,
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
          "id": "48f415e1191095a8b4a7a170e0ceee8eaccb402e",
          "message": "refactor(core): remove engine-owned copy modules\n\nRemove the stale fallow-core copies for churn, trace, trace-chain, and cross-reference now that fallow-engine owns those surfaces. This keeps core focused on internal orchestration instead of publishing duplicate adapters that can drift.\n\nMove the trace and trace-chain regression coverage onto the engine path, add an architecture guardrail that rejects reintroducing the core modules, and drop the unused core bitcode dependency.",
          "timestamp": "2026-07-09T10:47:28+02:00",
          "tree_id": "edda384dd8da235bd8d6202781eae85c4e6a0c36",
          "url": "https://github.com/fallow-rs/fallow/commit/48f415e1191095a8b4a7a170e0ceee8eaccb402e"
        },
        "date": 1783587454179,
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
          "id": "b005d105c275f2dd0da67767862b12e702295cec",
          "message": "fix(members): credit Playwright POM methods through function-wrapped fixture consts (#1792)\n\nA Playwright fixture exported as a function that wraps a local base.extend<T>({...}) fixture const via <const>.extend({}) and called in specs as myTest()(\"title\", cb) left every Page Object method reported as unused-class-member. The equivalent direct const form credited them correctly.\n\nThe use side already handled the double-call; the def side dropped it because try_capture_playwright_factory_helper bailed on a wrapping .extend({}) with no type argument. The helper now records a (helper, base) alias whenever it returns <base>.extend(...), and the finalize-time fixed point inherits fixture bindings from local base.extend<T>({...}) consts (a new transient playwright_local_fixture_defs map) as an inheritance source only, gated on @playwright/test resolution so non-Playwright code is unaffected. Bumps the extract CACHE_VERSION 226 to 227.\n\nFixes #1791.",
          "timestamp": "2026-07-09T11:34:57+02:00",
          "tree_id": "8b12d6f9466b770766c095d664acf0edfe623f31",
          "url": "https://github.com/fallow-rs/fallow/commit/b005d105c275f2dd0da67767862b12e702295cec"
        },
        "date": 1783590123535,
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
          "id": "b39782a149db879383734aef60f1329e967b0317",
          "message": "docs(rules): document the PositionMapper byte-to-UTF-16 boundary convention",
          "timestamp": "2026-07-09T12:27:10+02:00",
          "tree_id": "80949b8bcb5a3a4f734f375d1bf1783eace7ca1c",
          "url": "https://github.com/fallow-rs/fallow/commit/b39782a149db879383734aef60f1329e967b0317"
        },
        "date": 1783593250746,
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
          "id": "c9326d9395c0b46f4077290473060b3e950b6e8c",
          "message": "chore: release v3.3.0",
          "timestamp": "2026-07-09T13:33:19+02:00",
          "tree_id": "ec96dac95d61fa33fa75fa03f8df2d0c1ff95914",
          "url": "https://github.com/fallow-rs/fallow/commit/c9326d9395c0b46f4077290473060b3e950b6e8c"
        },
        "date": 1783597151140,
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
          "id": "ac9cf46f94303c658e15c5a6789137075ad65fba",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.3.0",
          "timestamp": "2026-07-09T14:32:39+02:00",
          "tree_id": "db8f60e46559097639047210300ebd59ce045d22",
          "url": "https://github.com/fallow-rs/fallow/commit/ac9cf46f94303c658e15c5a6789137075ad65fba"
        },
        "date": 1783600896935,
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
          "id": "89d83c73d3a64f1e3fcde52cdafe72d7fc7c3071",
          "message": "chore(contracts): regenerate output schema, TS contracts, and capabilities for suppression-inventory",
          "timestamp": "2026-07-09T21:14:57+02:00",
          "tree_id": "5e2a71e73fc3bd5e8bbea43a90b213df96f7529a",
          "url": "https://github.com/fallow-rs/fallow/commit/89d83c73d3a64f1e3fcde52cdafe72d7fc7c3071"
        },
        "date": 1783625299838,
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
          "id": "49f62ff29ae896681e541a0b7bd9a1bb04d963f8",
          "message": "docs: changelog entry and regenerated capability manifest for the GitHub formats\n\nCHANGELOG under Unreleased/Added for --format github-annotations,\n--format github-summary, and fallow report --from. capabilities.json,\nthe vendored SKILL.md task matrix, and the CLI reference regenerate from\nlive clap via npm run generate:contracts (new --format values, the\n--annotations-path-prefix global flag, and the report command).",
          "timestamp": "2026-07-09T22:10:58+02:00",
          "tree_id": "dfd4a9a305814386afdad0a1c662ca3e1b754dca",
          "url": "https://github.com/fallow-rs/fallow/commit/49f62ff29ae896681e541a0b7bd9a1bb04d963f8"
        },
        "date": 1783628416689,
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
          "id": "05a23e93d82583f43a8982dc3e9ebce5581bdf58",
          "message": "docs: drop deleted core-module references from agent and security docs\n\nPoints CLAUDE.md, the crate rule files, crates/core/AGENTS.md, SECURITY.md, detection.md, and CONTRIBUTING.md at the current module owners (engine duplication_detector/ and churn.rs, types-crate duplication types, analyze/members/) and removes the deleted duplicates/, cross_reference.rs, trace.rs, and spawn::git references.",
          "timestamp": "2026-07-09T22:59:12+02:00",
          "tree_id": "a5000fc6def84bd7543f7bc250130fe3962949a2",
          "url": "https://github.com/fallow-rs/fallow/commit/05a23e93d82583f43a8982dc3e9ebce5581bdf58"
        },
        "date": 1783631458337,
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
          "id": "38f36755518bad4df0c4b4aa9071eba5c7e97561",
          "message": "fix: harden config trust and process lifecycle\n\n* chore: open audit security implementation branch\n\n* fix: harden config trust and process lifecycle\n\n* test: run MCP process cleanup on Windows\n\n* test: fix Windows process tree fixture",
          "timestamp": "2026-07-10T00:18:47+02:00",
          "tree_id": "47f3eab1e34610ea0c4a31ec5b4e1ace829571c3",
          "url": "https://github.com/fallow-rs/fallow/commit/38f36755518bad4df0c4b4aa9071eba5c7e97561"
        },
        "date": 1783635899361,
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
          "id": "e484a4312bcb482bca3e8b900b785bc752ca19b9",
          "message": "chore(docker): bump default FALLOW_VERSION to 3.3.0 with refreshed checksums\n\nBumps the default image version to 3.3.0 with freshly verified per-arch sha256 pins and documents the version/hash lockstep rule.",
          "timestamp": "2026-07-10T00:29:55+02:00",
          "tree_id": "39563153ffada37d2b776cada8a8d8db7f6a0824",
          "url": "https://github.com/fallow-rs/fallow/commit/e484a4312bcb482bca3e8b900b785bc752ca19b9"
        },
        "date": 1783636831612,
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
          "id": "ee20cbaf15378649088b951bc4ecb4c72622ea34",
          "message": "test: strengthen CI and contributor guidance\n\n* chore: open audit CI and docs implementation branch\n\n* test: strengthen CI and contributor guidance",
          "timestamp": "2026-07-10T01:13:22+02:00",
          "tree_id": "6a4a450c205ffb93c1439c2faa6633652f97a911",
          "url": "https://github.com/fallow-rs/fallow/commit/ee20cbaf15378649088b951bc4ecb4c72622ea34"
        },
        "date": 1783639219135,
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
          "id": "f92a06ffd7163d012d7d2fd86ab893390ff4f955",
          "message": "perf: share parsed modules across warm sessions",
          "timestamp": "2026-07-10T02:48:28+02:00",
          "tree_id": "2a50af72f2c4552e120c1abf2173880450988f36",
          "url": "https://github.com/fallow-rs/fallow/commit/f92a06ffd7163d012d7d2fd86ab893390ff4f955"
        },
        "date": 1783644787632,
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
          "id": "d26a96b43b4001b9aa0368583c53ff4de248a210",
          "message": "fix(ci): lint Windows MCP lifecycle code (#1807)\n\nRepair the Windows-only MCP Clippy failure and run focused MCP Clippy in the pull request lifecycle gate.\n\nAdd a workflow policy regression test so the Windows lint command cannot drift.",
          "timestamp": "2026-07-10T05:23:10Z",
          "tree_id": "d1eeaef212a3f173a52b7f6afe093d16bc38a38f",
          "url": "https://github.com/fallow-rs/fallow/commit/d26a96b43b4001b9aa0368583c53ff4de248a210"
        },
        "date": 1783661260998,
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
          "id": "4d019eeb4785ea71412d8e7f56dc8a208d03e94f",
          "message": "feat(mcp): add list_suppressions tool for the suppression inventory\n\nThe fallow suppressions inventory was CLI-only, so agents on the MCP surface could not see what a clean verdict was hiding without shelling out. The new read-only list_suppressions tool wraps `fallow suppressions --format json` as a subprocess (the security_candidates shape, so timeout handling, telemetry tagging, and process-lifecycle hardening come from the shared run_tool path) and returns the suppression-inventory envelope verbatim, introducing no new wire contract.\n\nThe tool forwards workspace, changed_since, and repeated file scoping plus production, root, config, no_cache, threads, and the per-request allow_remote_extends config-trust opt-in; empty file entries are rejected with a structured validation error. changed-workspaces is deliberately not forwarded in v1. Includes the capability-manifest row, regenerated capabilities.json and MCP tools table, tests, and a corrected feature_flags doc line that advertised never-forwarded params.",
          "timestamp": "2026-07-10T11:19:18+02:00",
          "tree_id": "07bb50fe205935fb717528bc8bfca610d941a6b4",
          "url": "https://github.com/fallow-rs/fallow/commit/4d019eeb4785ea71412d8e7f56dc8a208d03e94f"
        },
        "date": 1783675774396,
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