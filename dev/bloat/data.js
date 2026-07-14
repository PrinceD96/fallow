window.BENCHMARK_DATA = {
  "lastUpdate": 1784041080388,
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
          "id": "309059d83fa1302f18488cd06726af84538bcac6",
          "message": "feat(health): confidence-gate the styling-health grade on sparse CSS\n\nAdd a descriptive confidence marker to the styling-health CSS-quality grade so a grade computed from a thin authored-CSS surface is not read with the same weight as one from a full design system (CSS program roadmap Phase 1). Descriptive-only: no exit-code, badge, gating, or code-score effect.\n\nStylingHealth gains confidence (high/low) and confidence_reason; low when total_declarations is below 50, where the declaration-normalized penalty ratios are hypersensitive. Score, grade, penalties, and STYLING_HEALTH_FORMULA_VERSION are byte-identical. Human output dims a low-confidence grade (prefixed ~) with a plain-text caveat; the JSON field is additive (schema + both TS contracts regenerated). The v2 rubric was re-validated against a 10-project corpus and left unchanged.",
          "timestamp": "2026-06-29T19:44:03+02:00",
          "tree_id": "fa620d70e56cf122261ec1a3ecdacf5d0bd95ff4",
          "url": "https://github.com/fallow-rs/fallow/commit/309059d83fa1302f18488cd06726af84538bcac6"
        },
        "date": 1782755641688,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 381037488,
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
          "id": "d5eb3efa80660d0798bd8f19861bfd02e8485b88",
          "message": "feat(health): emit token_consumers blast-radius in CSS health JSON\n\nfallow health --css --format json now carries css_analytics.token_consumers: per Tailwind v4 @theme token, the defining site + a consumer_count + a capped located consumers sample tagged theme-var/css-var/utility/apply, so an agent can read a token's blast radius before changing it (CSS program roadmap Phase 2, first slice).\n\nAdditive reverse index keyed on the same gated candidate set as the unused-theme-token scan (which is byte-unchanged); descriptive-only (no actions array, the dead-token action stays on unused_theme_tokens); consumer_count is a static lower bound. Engine-local data, no CACHE_VERSION bump; plain non-css health JSON byte-unchanged, no schema_version bump. Token VALUES/drift and the get_token_blast_radius MCP tool are out of scope (later phases).",
          "timestamp": "2026-06-29T22:11:40+02:00",
          "tree_id": "449c8f2233e6b64f444710f3d8125f49184fe80c",
          "url": "https://github.com/fallow-rs/fallow/commit/d5eb3efa80660d0798bd8f19861bfd02e8485b88"
        },
        "date": 1782764621586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 382009000,
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
          "id": "5b6693dce5e4b83ad329cadef849600d297f48d7",
          "message": "feat(mcp): add get_token_blast_radius tool wrapping token_consumers\n\nA focused read-only MCP tool that runs fallow health --css --format json and steers agents to css_analytics.token_consumers (the Tailwind v4 token blast-radius reverse index), so an agent can query a token's blast radius directly without setting css=true on check_health. Per @theme token: defining site + consumer_count + a capped located consumers sample tagged theme-var/css-var/utility/apply.\n\nMirrors the get_blast_radius health-slice pattern: minimal params (root/config/no_cache/threads, no coverage/scope flags since token_consumers abstains on partial scope), --css forced, telemetry-tagged dispatch, registered in code_mode + mcp_manifest (kind analysis, license Free, read_only), annotated read_only/idempotent/open_world_hint=false. A scoping aid, not a deletion gate (the dead-token verdict stays on unused_theme_tokens). No CLI flag, no JSON schema change.",
          "timestamp": "2026-06-29T22:40:57+02:00",
          "tree_id": "091785874a4a086c5349fff87d91c2c2a81b468a",
          "url": "https://github.com/fallow-rs/fallow/commit/5b6693dce5e4b83ad329cadef849600d297f48d7"
        },
        "date": 1782766515814,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 382013392,
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
          "id": "ce3c76b0cea9e091b8471c63f7cc0e992a14b806",
          "message": "feat(health): CSS-in-JS first-class in styling analytics (CSS program Phase 3)\n\nCSS program Phase 3: make CSS-in-JS a first-class citizen of fallow's CSS analytics.\n\n3a: characterizes that styled-components / emotion / vanilla-extract styled bindings are ordinary value exports already covered by unused-export, and the libraries are credited via their value imports (no new detection code, dep gate, or IssueKind). Adds a fixture, a no-regression integration test, and a detection.md entry.\n\n3b: adds css_in_js_virtual_stylesheet, a lexical lifter (the tagged-template analogue of sfc_virtual_stylesheet) that lifts styled/css/keyframes template-literal CSS into a blank-line-padded virtual stylesheet, masking interpolations to a CSS-valid placeholder, so compute_css_analytics + styling-health analyze CSS-in-JS like a .css file. The engine admits a JS/TS arm in the CSS walk (CssScanKind::CssInJs) dep-gated on project_uses_css_in_js, so a non-CSS-in-JS project never scans JS/TS files. Template-literal form only; health-time-only over source (no CACHE_VERSION bump, no new wire field); styling-health stays descriptive-only.",
          "timestamp": "2026-06-30T08:04:26+02:00",
          "tree_id": "1d901e0018d491d65a5bb49238c895a4dcaf7619",
          "url": "https://github.com/fallow-rs/fallow/commit/ce3c76b0cea9e091b8471c63f7cc0e992a14b806"
        },
        "date": 1782800040471,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 382101888,
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
          "id": "a4d52c9b662e50826c20bab87cfffc680bce83a0",
          "message": "feat(dupes): CSS-aware value canonicalization for fuzzy CSS clones (CSS program Phase 4)\n\nCSS program Phase 4. Adds CSS value canonicalization to the duplicate-detection lexical tokenizer's style path (zero-unit collapse 0px/0em/0% -> 0, hex-color expansion #fff -> #ffffff, #abcd -> #aabbccdd) so the SA-IS clone engine catches near-miss / value-drifted CSS clones. Gated on a css flag set true only on the style path; JS/TS go through the oxc AST extractor and are unchanged. DUPES_CACHE_VERSION bumped 8 to 9. Validated zero false matches on the astro repo.",
          "timestamp": "2026-06-30T08:24:17+02:00",
          "tree_id": "1ccee5742017a243e957bb28da30172435148685",
          "url": "https://github.com/fallow-rs/fallow/commit/a4d52c9b662e50826c20bab87cfffc680bce83a0"
        },
        "date": 1782801277889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 382159336,
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
          "id": "8b0796b923954b049210e16f7b61713edaee8a33",
          "message": "feat(health): object-notation CSS-in-JS in styling analytics (CSS program Phase 3c) (#1671)\n\n* feat(health): object-notation CSS-in-JS in styling analytics (CSS program Phase 3c)\n\nAdd an AST object->CSS serializer that lifts object-notation CSS-in-JS\n(vanilla-extract style({...})/globalStyle/styleVariants/recipe, emotion\ncss({...})/styled.div({...}), Panda css({...})/cva({...}), StyleX\nstylex.create({...})) into the same virtual-stylesheet -> compute_css_analytics\n+ styling-health pipeline that the Phase 3b template-literal lifter feeds. Both\nforms now converge on one pipeline.\n\nHealth-time only (no CACHE_VERSION bump); dep-gated via project_uses_css_in_js\nplus per-call import-binding provenance, so a project with none of the object\ndeps is byte-identical and a same-named local style/css or an unrelated cva\nnever fires. Static values only (camelCase->kebab, implicit-px + unitless list,\none-level nesting); dynamic/spread/computed-key values are dropped, never\nguessed.\n\nFlat-by-construction atomic CSS (StyleX/Panda) is excluded from the\nstyling-health structural penalty inputs and from duplicate-block\nfingerprints, and a predominantly-atomic project is marked low-confidence with\na stated reason, so atomic CSS-in-JS never inflates the grade. Token-sprawl and\nduplicate-block findings are fed for all object libraries. Every\ndeclaration-normalized penalty (duplication, dead-surface, structural) and the\nconfidence trigger read the non-atomic declaration count so atomic CSS cannot\ndilute them. Descriptive-only; styling-health never gates an exit code or badge.\n\n* fix(health): address 3c review (aliased imports, numeric literals, docs)\n\nReview fixes for CSS program Phase 3c:\n- Recognize aliased named imports (import { style as s }) by dispatching on the\n  canonical imported name, not the local alias (rust-reviewer: silent miss).\n- Render numeric literals from their parsed value, so a hex / scientific literal\n  (0xFF, 1e3) becomes valid CSS (255, 1000) instead of a non-CSS token.\n- kebab-case the lowercase ms vendor prefix to -ms- (msFlexAlign -> -ms-flex-align).\n- Count files_analyzed once per source file, not once per lifted virtual sheet,\n  so the count stays 1:1 with files (cli-output-reviewer).\n- Update the StylingHealth confidence / CssAnalyticsSummary docs to cover the new\n  predominantly-atomic low-confidence trigger and object-form sheets, and gate on\n  confidence (not total_declarations, which now includes excluded atomic\n  declarations); regenerate output-schema.json + the TS contracts (json-output\n  -reviewer: the published rule was stale and drift-gated).\n\n* docs(detection): record object-notation CSS-in-JS (Phase 3c)\n\nAdd the Phase 3c detection bullet and the css_in_js_object.rs extract-crate entry.\n\n* chore(clippy): unblock pre-existing too_many_lines expectation on the 3b CSS-in-JS test\n\nmain was already red on this unfulfilled #[expect(clippy::too_many_lines)] (the 3b test body sits on the 100-line threshold, so the lint is clippy-version dependent). Switch to #[allow] per the project convention for boundary pedantic lints, so 3c can ship with clippy --all-targets green.\n\n* docs(detection): fix stale css_report_stylesheet_source ref in the 3b bullet\n\nThe 3c walk refactor renamed css_report_stylesheet_source to css_report_scan_items; update the Phase 3b detection bullet to match (fallow-review finding).",
          "timestamp": "2026-06-30T11:22:58+02:00",
          "tree_id": "bdd972b78feea6bf865d9b81e48a12cf1ccbd3ae",
          "url": "https://github.com/fallow-rs/fallow/commit/8b0796b923954b049210e16f7b61713edaee8a33"
        },
        "date": 1782812069560,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 382881568,
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
          "id": "5c72d26939cd6f21847c0897de42f81873842184",
          "message": "fix(health): no implicit px on custom-property values in object CSS-in-JS (#1672)\n\nThe object serializer applied implicit-px to numeric custom-property values\n(`--space: 8` -> `--space:8px`), fabricating a unit the bundler never emits.\nEmotion's own serializer guards px with `!isCustomProperty(key)`\n(@emotion/serialize) and React does the same, so a numeric `--x` value stays\nunitless. Skip implicit px for `--*` properties so the lifted CSS matches the\nreal compiled output. Found while smoke-testing the emotion site's\n`<Global>` custom-property block on real public projects.",
          "timestamp": "2026-06-30T12:33:40+02:00",
          "tree_id": "7457c935790576edb2b4f119f6072c43a2d65a9c",
          "url": "https://github.com/fallow-rs/fallow/commit/5c72d26939cd6f21847c0897de42f81873842184"
        },
        "date": 1782816550290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 382882288,
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
          "id": "8c43ab02152b157973694b61ad627cdc5816c126",
          "message": "feat(health): weight styling-health toward CSS value drift over exact repetition (formula v3) (#1674)\n\nDown-weights the styling-health `duplication` exact-block penalty (200 -> 80, soft hint, 20pt cap kept) and adds a var()-blind hardcoded-value-sprawl drift sub-term to `token_erosion` (distinct unique_box_shadows/border_radii/line_heights above per-axis baselines 10/8/6, saturating, 5pt sub-cap inside the unchanged 10pt cap). STYLING_HEALTH_FORMULA_VERSION 2 -> 3. Descriptive-only; no wire field; no CACHE_VERSION bump. Corpus-locked: no band misclassification. Reviewed via /panel-review (NARROW) + rust-reviewer + cli-output-reviewer.",
          "timestamp": "2026-06-30T14:34:24+02:00",
          "tree_id": "a1d791fab2fa8e426bca2f525fbd31bd2c1a321a",
          "url": "https://github.com/fallow-rs/fallow/commit/8c43ab02152b157973694b61ad627cdc5816c126"
        },
        "date": 1782823496883,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 382904392,
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
          "id": "1ecf9d859f92801d61e3704fe24278307bbf75b4",
          "message": "feat(coverage): add --with-callers to upload importer edges (#1675)\n\n`fallow coverage upload-inventory --with-callers` builds the import graph and\nuploads importer edges (which files import each function), keyed by the callee\nfunction's stable_id, so the cloud can show change-time blast radius for a\nfunction an agent is about to edit. Each edge is an importer file plus the\nsymbol names it imports; import-edge granularity, not a file:line call-site.\n\nOpt-in by design: building the graph runs the full static analysis, whereas the\ndefault upload stays a fast per-file walk and the existing wire shape. The graph\nis cached, so a CI step that already ran analysis pays little extra.\nBest-effort: a graph-build failure still ships the inventory.\n\nThe symbol-to-function attribution is a pure, unit-tested step; the payload\nfield is omitted entirely unless edges are present, so the default upload is\nbyte-unchanged.",
          "timestamp": "2026-06-30T15:07:26+02:00",
          "tree_id": "736f98af054702faf1bc851cc51ec9f5e860ae97",
          "url": "https://github.com/fallow-rs/fallow/commit/1ecf9d859f92801d61e3704fe24278307bbf75b4"
        },
        "date": 1782826559425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 383829888,
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
          "id": "686b8034bf7e807c4d4761e24de1123648abed0c",
          "message": "fix(review): grammar + tighter wording for walkthrough decision facts\n\nSmoke-testing the contract-change wording surfaced two nits:\n\n- Singular/plural: a single changed export rendered \"changes exports\n  (createBeaconLifecycle)\". Pluralize the noun by symbol count, so one\n  export reads \"changes export (X)\" and several read \"changes exports (...)\".\n- The consolidated public-API-surface question carried a generic filler\n  sentence (\"These become maintained contracts.\") that, with the question\n  dropped in the tour, left a wordy two-sentence fact. Fold it into the\n  question (\"This change adds N exports to the public API surface. Intended\n  as maintained contracts, or should they stay internal?\"), so the tour\n  fact is one clean sentence.\n\nVerified the coordination (singular + plural) and boundary facts on real\nand synthetic diffs; added a unit test pinning the public-API-surface tour\nfact. Decision-question wording only; the schemas and the agent contract\nare unchanged.",
          "timestamp": "2026-06-30T15:46:02+02:00",
          "tree_id": "056f4535ece3cfc61893d3f20bd590ba44d286b9",
          "url": "https://github.com/fallow-rs/fallow/commit/686b8034bf7e807c4d4761e24de1123648abed0c"
        },
        "date": 1782828375156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 383829352,
            "unit": "bytes"
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
          "id": "903d6f95d9b937daa623a3dab396ef113bfeca03",
          "message": "chore(deps): bump oxc_resolver from 11.21.0 to 11.21.3 in the oxc group (#1693)\n\nBumps the oxc group with 1 update: [oxc_resolver](https://github.com/oxc-project/oxc-resolver).\n\n\nUpdates `oxc_resolver` from 11.21.0 to 11.21.3\n- [Release notes](https://github.com/oxc-project/oxc-resolver/releases)\n- [Changelog](https://github.com/oxc-project/oxc-resolver/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/oxc-project/oxc-resolver/compare/v11.21.0...v11.21.3)\n\n---\nupdated-dependencies:\n- dependency-name: oxc_resolver\n  dependency-version: 11.21.3\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: oxc\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-30T14:14:25Z",
          "tree_id": "adf8ef90b20f813988b74b429eb0139d6f34f48c",
          "url": "https://github.com/fallow-rs/fallow/commit/903d6f95d9b937daa623a3dab396ef113bfeca03"
        },
        "date": 1782829509753,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 382932528,
            "unit": "bytes"
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
        "date": 1782831971521,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 384419088,
            "unit": "bytes"
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
          "id": "16d44a1e5b65cbeb799506a730378bc8a57eab72",
          "message": "chore(deps): bump rmcp from 1.7.0 to 1.8.0 (#1698)\n\nBumps [rmcp](https://github.com/modelcontextprotocol/rust-sdk) from 1.7.0 to 1.8.0.\n- [Release notes](https://github.com/modelcontextprotocol/rust-sdk/releases)\n- [Changelog](https://github.com/modelcontextprotocol/rust-sdk/blob/main/release-plz.toml)\n- [Commits](https://github.com/modelcontextprotocol/rust-sdk/compare/rmcp-v1.7.0...rmcp-v1.8.0)\n\n---\nupdated-dependencies:\n- dependency-name: rmcp\n  dependency-version: 1.8.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-30T15:19:25Z",
          "tree_id": "8dc10699be2e6a40f02b4b5d7028debd76a0877a",
          "url": "https://github.com/fallow-rs/fallow/commit/16d44a1e5b65cbeb799506a730378bc8a57eab72"
        },
        "date": 1782833464400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 384419088,
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
          "id": "0408c5a174382529d2e6bbec391f3055bcec02bb",
          "message": "feat(css): design-token blast-radius for CSS-in-JS token definitions (Phase 3d) (#1701)\n\nExtend css_analytics.token_consumers + the get_token_blast_radius MCP tool from Tailwind v4 @theme tokens to CSS-in-JS token definitions (StyleX defineVars, vanilla-extract createTheme family). Descriptive-only, dep-gated, additive ConsumerKind::JsMember, no new wire field, no CACHE_VERSION bump. Panda deferred to 3e.",
          "timestamp": "2026-06-30T17:45:49+02:00",
          "tree_id": "ceea2a353cebb35511e90238997969a9e414cfd0",
          "url": "https://github.com/fallow-rs/fallow/commit/0408c5a174382529d2e6bbec391f3055bcec02bb"
        },
        "date": 1782835142812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 386041552,
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
          "id": "7ec9a8b187f1e2c986430ca49c7caa55355f3fd6",
          "message": "refactor(extract): consolidate CSS-in-JS front-ends into a css_in_js/ module\n\nConsolidate the three flat CSS-in-JS files (template lexer 3b, object serializer 3c, token graph 3d, ~2300 lines) into a css_in_js/ module dir (template.rs / object.rs / tokens.rs / shared.rs / mod.rs). shared.rs single-sources the count_newlines helper and the WRAPPER synthetic selector both front-ends emit. Behavior-preserving: the public API and every downstream import path are unchanged (mod.rs re-exports what lib.rs re-exports). No logic change; reviewed by two rust-reviewer agents (APPROVE); full workspace test + clippy + fmt green.",
          "timestamp": "2026-07-01T09:48:09+02:00",
          "tree_id": "112f9ed9b1d704f4666a66cb8cf8469d1e7ec02c",
          "url": "https://github.com/fallow-rs/fallow/commit/7ec9a8b187f1e2c986430ca49c7caa55355f3fd6"
        },
        "date": 1782893063734,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 386039992,
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
          "id": "f25b68582fe93aecdb676ef777db0ab3c77b5004",
          "message": "perf(audit): skip clean-tree worktree sweep\n\nMove reusable audit worktree cleanup after changed-file discovery so clean-tree audit exits without listing or pruning base worktrees. Changed-code audit still sweeps before any base snapshot work, preserving stale worktree cleanup for real analysis runs.\n\nThis keeps the no-change fast path focused on base-ref resolution and changed-file detection while leaving new-only attribution and base snapshot behavior unchanged. It also tightens architecture boundary comments that still referenced compatibility adapters.",
          "timestamp": "2026-07-01T10:22:20+02:00",
          "tree_id": "2f08a36acf11283f2fdd35bef12581e2e885771c",
          "url": "https://github.com/fallow-rs/fallow/commit/f25b68582fe93aecdb676ef777db0ab3c77b5004"
        },
        "date": 1782895347847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 386034376,
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
          "id": "b6435a03598e019253b410a783a0bc062d3794da",
          "message": "docs(extract): unlink private submodules in css_in_js module doc (#1705)\n\nThe css_in_js module doc linked to its private submodules via intra-doc\nlinks ([`template`], [`object`], [`tokens`], [`shared`]). Since css_in_js\nis `pub mod`, rustdoc's private_intra_doc_links lint fired under the\nDocumentation job's RUSTDOCFLAGS=-D warnings, breaking 'cargo doc\n--workspace --document-private-items' on main and blocking every Rust PR.\n\nReference the private front-end modules as inline code instead of links.\nVerified: RUSTDOCFLAGS='-D warnings' cargo doc --workspace --no-deps\n--document-private-items now exits 0.",
          "timestamp": "2026-07-01T09:08:38Z",
          "tree_id": "d69afa8add5107c5fc40825ff9408ea7269fbab7",
          "url": "https://github.com/fallow-rs/fallow/commit/b6435a03598e019253b410a783a0bc062d3794da"
        },
        "date": 1782897576535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 386037320,
            "unit": "bytes"
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
        "date": 1782898734820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 386000120,
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
          "id": "66697ddb827190d7f195b78c7ebbc550f01ec368",
          "message": "refactor(architecture): finish typed engine split\n\nFinish the fallow-engine, fallow-output and fallow-api split so CLI, MCP, LSP and NAPI depend on typed programmatic contracts instead of CLI or Core internals.\n\nRemove legacy bridge paths for root envelopes and extraction facts, route audit and decision surfaces through reusable API sessions, and keep graph-cache correctness tied to stable FileIds and SourceFingerprint invalidation.\n\nThis keeps public JSON and generated TypeScript surfaces regenerated while leaving persisted graph cache behavior transparent to callers.",
          "timestamp": "2026-07-01T14:12:53+02:00",
          "tree_id": "81a5227bd4f00e8fd4bbdfb550a275aff2c4f426",
          "url": "https://github.com/fallow-rs/fallow/commit/66697ddb827190d7f195b78c7ebbc550f01ec368"
        },
        "date": 1782908747536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 386168168,
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
          "id": "db5405148d299fdb353983d72a01c63985a686f2",
          "message": "fix(extract): credit Vue v-for loop variable class member accesses (#1709)\n\nA Vue `v-for` loop variable iterating over a typed array or reactive array of a class (`v-for=\"(util, index) of utils\"` where `utils` is `Util[]` or `computed(() => Util[])`) had no element-type binding, so template member accesses on the item were dropped and the class members were falsely reported as `unused-class-member`.\n\nThe visitor now infers the element class of a module-scope array / reactive-array binding (declarator annotation, a reactivity generic type argument, a reactivity callback returning a typed array or a `new T()` array literal, or a direct `new T()` array literal). The Vue SFC template scanner types the first bare-identifier v-for item to that class and excludes it from the locals stack so its member accesses remap onto the class. Over-credit only: it can only remove findings, never add one. CACHE_VERSION 215 to 216.\n\nThanks @Ericlm for the report and the minimal reproduction.\n\nFixes #1707.",
          "timestamp": "2026-07-01T15:30:20+02:00",
          "tree_id": "3523732a360b1701072ad4a02a69b3e6e3cd9378",
          "url": "https://github.com/fallow-rs/fallow/commit/db5405148d299fdb353983d72a01c63985a686f2"
        },
        "date": 1782913420938,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 386376320,
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
          "id": "91fb0eeb104bf10ea104346457bbc53063fb23c9",
          "message": "fix(extract): credit iteration-binding class members (#1710)\n\nFollow-up to #1707. Types an iteration variable to the element class of a typed array / reactive array so member accesses on it credit the class instead of false-reporting unused-class-member. Reuses the #1707 element-type inference.\n\nJS arm: array-method callbacks (map/forEach/filter/find/findLast/findIndex/findLastIndex/flatMap/some/every; reduce/reduceRight excluded, accumulator param) and for...of loops, covering React/Preact JSX .map. Svelte arm: {#each utils as util} items. Over-credit only. Deferred: Vue props.items, Angular @for, Astro .map. CACHE_VERSION 216 to 217.\n\nRefs #1707.",
          "timestamp": "2026-07-01T16:38:01+02:00",
          "tree_id": "dfd000e110caa16ff1bb4d67d847c66af09a92c9",
          "url": "https://github.com/fallow-rs/fallow/commit/91fb0eeb104bf10ea104346457bbc53063fb23c9"
        },
        "date": 1782917490904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 386421264,
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
          "id": "b8ef5a048e39b53b5820746dba2ea89cd213543f",
          "message": "fix(extract): credit deferred iteration-binding sibling class members (#1715)\n\nFixes the three deferred iteration-binding sibling cases from the #1707 / #1710 follow-up, each a false unused-class-member where an iteration item typed as the element class of an array was not credited. All over-credit-only: they can only remove a false finding, never add one.\n\n- #1711 Vue v-for over props.<field>: the defineProps inline-type harvest records each array-typed prop field element class as props.<field> into array_binding_element_types; the existing v-for scanner matches it.\n- #1712 Angular @for / *ngFor: the visitor collects component-field array element types and the Angular scanner types a bare-identifier loop var to that class, remapping util.member onto the element class. Inline template only.\n- #1713 Astro template .map: template {...} expression regions are re-parsed through the member-recording visitor seeded with frontmatter element types, reusing bind_iterable_callback_parameter.\n\nEach fix ships a reachable fixture with a non-vacuous control plus a neuter test. CACHE_VERSION 217 to 220.\n\nCloses #1711, #1712, #1713.",
          "timestamp": "2026-07-01T18:09:57+02:00",
          "tree_id": "864760094817bb661212fd06e9a6f3c51a96f011",
          "url": "https://github.com/fallow-rs/fallow/commit/b8ef5a048e39b53b5820746dba2ea89cd213543f"
        },
        "date": 1782923066153,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 386612408,
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
          "id": "ea88340200e529d0f1416303cc436ae9ac370044",
          "message": "fix(napi): align smoke test with consolidated engine root-validation message\n\nThe engine consolidation refactor (f8eb3dd6a) changed validate_root's\nerror message from \"analysis root does not exist\" to the more\ninformative \"invalid root path '<path>': <os-error>\", but the NAPI\nsmoke test still asserted the old wording, reddening the Check job on\nboth ubuntu and windows. Match the stable substring instead of the\nOS-specific error text.",
          "timestamp": "2026-07-01T20:16:39+02:00",
          "tree_id": "92bdd3b04580279f931e136aacb504464312a418",
          "url": "https://github.com/fallow-rs/fallow/commit/ea88340200e529d0f1416303cc436ae9ac370044"
        },
        "date": 1782930431534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 386612408,
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
          "id": "37f7c79c7ef944cd0fd8cd4212884c1203263b57",
          "message": "feat(inventory): name callback arguments from the callee (#1719)\n\nThe inventory walker named bindings, methods, and function ids but left every\nfunction passed as a call/`new` argument as `(anonymous_N)`. Meanwhile the\nruntime instrumenter (oxc-coverage-instrument) with name_callback_arguments (the\nFallow beacon enables it) names those from the callee. So the static inventory\nand the runtime coverage drifted to different names for the same callback\n(`.references(() => ...)`, `arr.map(cb)`, route handlers), and the backfilled\nnever_called functions surfaced as anonymous.\n\nName a function-valued call/`new` argument from the callee (identifier, member\nproperty, or computed string-literal key), matching the instrumenter's\ncallee-naming exactly. Precedence stays parent-binding -> own id -> callee ->\ncounter (a new pending_callee_name slot ranks below the id, so a named function\nexpression keeps its id). The callee subtree is visited before the arguments, so\na chained call never leaks the earlier callee onto a later callback.\n\nVerified on a real Drizzle schema: 0/47 anonymous (was ~47). 2560 extract tests\ngreen; clippy + fmt clean.",
          "timestamp": "2026-07-01T21:01:34+02:00",
          "tree_id": "c2d61a5101aea70b7fd980a20eac1047b484d9ba",
          "url": "https://github.com/fallow-rs/fallow/commit/37f7c79c7ef944cd0fd8cd4212884c1203263b57"
        },
        "date": 1782933339276,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 386684152,
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
          "id": "7d7ca6d3c8d7737501beba662a7b50146ff8a4be",
          "message": "chore(napi): sync package.json / package-lock / index.js to v2.104.0",
          "timestamp": "2026-07-01T23:16:48+02:00",
          "tree_id": "db4a97930ea52a57dba1c156f329cc96119dd355",
          "url": "https://github.com/fallow-rs/fallow/commit/7d7ca6d3c8d7737501beba662a7b50146ff8a4be"
        },
        "date": 1782941399119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 387917600,
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
          "id": "afff35d14a7b17ec6bf02b9deb80a698ef53d786",
          "message": "feat(ci): improve PR and MR reporting\n\n## Summary\n\n- Moves sticky PR/MR comments, inline review posting, and GitHub Check Run payloads behind typed Rust adapters.\n- Adds shared PR summary, decision, details, status, and comment-post plan contracts in fallow-output.\n- Documents comment layout controls and keeps legacy markdown rendering compatible.\n\n## Verification\n\n- cargo build --workspace\n- cargo test --workspace --lib --bins --tests --examples\n- cargo fmt --all -- --check\n- cargo test -p fallow-output pr_summary\n- cargo test -p fallow-cli --bin fallow combined\n- bash action/tests/run.sh\n- bash ci/tests/run.sh",
          "timestamp": "2026-07-03T17:35:03+02:00",
          "tree_id": "59e041933e42f85f068e5883e02819bc1e14c6ed",
          "url": "https://github.com/fallow-rs/fallow/commit/afff35d14a7b17ec6bf02b9deb80a698ef53d786"
        },
        "date": 1783093704592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 390458880,
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
          "id": "ac7df1b8c2ed0d3c6898c5a90bcc44ebb76c3994",
          "message": "refactor(architecture): finish engine and registry split\n\nComplete the architecture roadmap by routing command, API, MCP, and editor flows through typed engine and API boundaries. Combined and audit now reuse retained project artifacts for dead code, duplication, and health instead of repeating discovery, parse, and graph work.\n\nMove output and issue metadata ownership into generated contracts, including suppressions, SARIF summaries, TypeScript aliases, and VS Code labels. Add fallow-security so security catalogue data no longer lives inside core analysis orchestration.\n\nKeep Cache V2 out of this change until FileId and invalidation guarantees are proven. Add an old-vs-new audit benchmark harness so future runtime claims have explicit semantic and timing evidence.",
          "timestamp": "2026-07-03T20:48:58+02:00",
          "tree_id": "66271d3eee62d81a788880bdc5c90ad9f70d28ad",
          "url": "https://github.com/fallow-rs/fallow/commit/ac7df1b8c2ed0d3c6898c5a90bcc44ebb76c3994"
        },
        "date": 1783105263252,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 391095216,
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
          "id": "2c67798f2629db09e82117ce345130c1c822bf6d",
          "message": "feat(cli): add rule-pack authoring commands\n\nAdds rule-pack authoring commands, bundled templates, and generated agent/docs surfaces for declarative policy packs.",
          "timestamp": "2026-07-04T08:55:41+02:00",
          "tree_id": "2fc8a3f632c54acc1e0ea448c4311bf736d29b4c",
          "url": "https://github.com/fallow-rs/fallow/commit/2c67798f2629db09e82117ce345130c1c822bf6d"
        },
        "date": 1783148708721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 391952376,
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
          "id": "691c3f906938e74967a630d997edf1eb5f4c9cac",
          "message": "feat: add v3 styling analysis integration\n\nAdds default audit styling intelligence with CSS and CSS-in-JS analytics, raw style value token drift, duplicate styling blocks, selector complexity, dead styling surface, broken references, and styling health surfaces.\n\nKeeps styling findings report-only and verify-first with CSS deep controls, output contracts, docs, MCP, NAPI, skills, and real-project smoke harness coverage.\n\nRebases onto the current architecture with registry-owned explain token lookup and Code Mode combined routed through the programmatic API.",
          "timestamp": "2026-07-04T09:47:54+02:00",
          "tree_id": "bcf5a2b20def65ed9c2da14b8cacca36401be76d",
          "url": "https://github.com/fallow-rs/fallow/commit/691c3f906938e74967a630d997edf1eb5f4c9cac"
        },
        "date": 1783151900655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 399324760,
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
          "id": "348caa5d35f0c8d73f79c4950f9ab55db056b150",
          "message": "feat(core): add rule-pack v2 matchers\n\nAdds zone-scoped rule-pack policies, banned-export rules, and deep-import matching while keeping policy violations on the existing typed output contract.",
          "timestamp": "2026-07-04T10:15:19+02:00",
          "tree_id": "88f8e4c3424131dfe9015df0f0aa84f415bcb355",
          "url": "https://github.com/fallow-rs/fallow/commit/348caa5d35f0c8d73f79c4950f9ab55db056b150"
        },
        "date": 1783153701511,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 400154640,
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
          "id": "630722b016a5b785d6fa05ee54db6b339eb3c4fa",
          "message": "chore: release v3.0.0",
          "timestamp": "2026-07-04T10:58:59+02:00",
          "tree_id": "f011cc378131a241699dd790fca05d8f01d804ea",
          "url": "https://github.com/fallow-rs/fallow/commit/630722b016a5b785d6fa05ee54db6b339eb3c4fa"
        },
        "date": 1783156258258,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 400198256,
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
          "id": "a45a7865b6a646be5e121c3687127357408c81b9",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.0.0",
          "timestamp": "2026-07-04T12:17:42+02:00",
          "tree_id": "6918a5a2e08e156c62134dbf8c931ce81d6657d1",
          "url": "https://github.com/fallow-rs/fallow/commit/a45a7865b6a646be5e121c3687127357408c81b9"
        },
        "date": 1783160992298,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 400198256,
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
          "id": "79987bd2dc5ee5d29c0ff5ed6615022f28f4fab6",
          "message": "docs(brand): fold styling into crate/npm/vscode descriptions, demote build attributes",
          "timestamp": "2026-07-04T16:58:09+02:00",
          "tree_id": "07e3265f1c6568af6b83287ec68552b015bfaef7",
          "url": "https://github.com/fallow-rs/fallow/commit/79987bd2dc5ee5d29c0ff5ed6615022f28f4fab6"
        },
        "date": 1783177696153,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 400198256,
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
          "id": "ff76b924a3ac0190f0f187c5917bda19275a3fcf",
          "message": "refactor(quality): reduce Rust unit size\n\nContinue the SIG unit-size cleanup by splitting long Rust functions across CLI, API, engine, extractor, graph, LSP, MCP, output, config, and types surfaces into narrower private helpers. The changes keep public output contracts and analysis behavior intact while making pipelines, renderers, mappers, and diagnostics easier to scan.\n\nThe loop only kept measured improvements and dropped the final non-improving split. No new user-facing capability is intended, this is maintainability work for future feature and bug-fix changes.",
          "timestamp": "2026-07-04T20:25:47+02:00",
          "tree_id": "7a6acf2979fb6307c8b0922ad92d265ca2058c9d",
          "url": "https://github.com/fallow-rs/fallow/commit/ff76b924a3ac0190f0f187c5917bda19275a3fcf"
        },
        "date": 1783190301474,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 400346320,
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
          "id": "b1a2c07b8a247658f61eb133c0ce35c78e017606",
          "message": "fix(extract): credit factory members via return-type annotation (#1744)\n\nCross-module factory-return member crediting was body-only: it fired for\n`return new Class()` or a returned identifier whose type is a proven local,\nbut ignored the factory's own return-TYPE annotation. So a hook/factory\nwhose body has no value proof (`function useController(): ReadyAppController {\nreturn registry.get() as ReadyAppController }`) recorded no class binding,\nand every public method read on `const c = useController()` false-flagged as\nunused-class-member even though the class export itself was reachable.\n\nThread the function's declared return-type annotation into the factory-return\nrecording. When neither body value-proof fires, a sync (non-async,\nnon-generator) factory whose return type names a class records a strict\nfactory-return entry, so the cross-module `exported_factory_returns` metadata\ncredits `c.method()` across the module boundary (both fn-decl and arrow\nforms). This deliberately widens the #1441 value-vs-type doctrine: unlike a\nreturned-identifier's contradictable variable annotation, a function\nreturn-type annotation is the author's compiler-checked contract. It stays\nover-credit-safe: the analyze layer credits only when the name resolves to a\nreal class-with-members export, so a wrong annotation is a false negative at\nworst, never a false positive. A genuinely-unused method on the returned\nclass still reports.\n\nAdds extract unit tests (records the strict entry, arrow variant, async\nabstain) and a cross-file integration fixture + test. Bumps extract\nCACHE_VERSION 220 to 221 (the exported_factory_returns output changes).",
          "timestamp": "2026-07-05T10:05:26+02:00",
          "tree_id": "7aad836e6bbf254f5ed2dd84d04cfc6fa965335d",
          "url": "https://github.com/fallow-rs/fallow/commit/b1a2c07b8a247658f61eb133c0ce35c78e017606"
        },
        "date": 1783239626799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 400351360,
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
          "id": "784ffed5d6a2113262787585d8599dc1cf8acd9a",
          "message": "feat(trace): fall back to a class-member trace on export miss (#1744)\n\n`fallow dead-code --trace FILE:NAME` errored `export 'NAME' not found` when NAME was a class / enum / store MEMBER rather than a top-level export, so a member finding could not be debugged from the trace tool. On an export miss, `handle_trace_export` now falls back to a `trace_class_member` primitive that finds the export whose members contain NAME and reports the owning export's reachability and usage (reusing `trace_export`), who imports it, the re-export chains it is reachable through, and a `fallow dead-code --unused-<kind>-members --file <file>` pointer.\n\nThe trace path runs on the module graph only, so it does not report per-member crediting provenance. Trace JSON goes through the generic `print_trace_json` (not in the published schema), so the new `ClassMemberTrace` type needs no schema or TS-codegen regen. Adds core + human-renderer tests; human and `--format json` supported.\n\nCloses #1744.",
          "timestamp": "2026-07-05T11:16:58+02:00",
          "tree_id": "40bcb08fba8878fd48278a93a3974b02f6231ebf",
          "url": "https://github.com/fallow-rs/fallow/commit/784ffed5d6a2113262787585d8599dc1cf8acd9a"
        },
        "date": 1783243798725,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 400495760,
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
          "id": "6b9eb819620baf9aaf892e2ec552e92eb8a63e2e",
          "message": "refactor(engine): route workspace discovery through engine",
          "timestamp": "2026-07-05T11:44:05+02:00",
          "tree_id": "b3d4e7baf45ecd11c4357acc578d0b29f434926b",
          "url": "https://github.com/fallow-rs/fallow/commit/6b9eb819620baf9aaf892e2ec552e92eb8a63e2e"
        },
        "date": 1783245317889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 400497128,
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
          "id": "26e195b3627ec190680fbf857ca2c5743ae1f703",
          "message": "refactor(engine): own project workspace scope",
          "timestamp": "2026-07-05T12:35:57+02:00",
          "tree_id": "363995c9789ce9dac9c60928365fe64e8a0bd8f2",
          "url": "https://github.com/fallow-rs/fallow/commit/26e195b3627ec190680fbf857ca2c5743ae1f703"
        },
        "date": 1783248388918,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401225792,
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
          "id": "71410c4e92a13dd4cd79a9970225349bfc78b8eb",
          "message": "chore: release v3.1.0",
          "timestamp": "2026-07-05T13:07:30+02:00",
          "tree_id": "b767cc9188067db4027fabd70d0d71e77c412a51",
          "url": "https://github.com/fallow-rs/fallow/commit/71410c4e92a13dd4cd79a9970225349bfc78b8eb"
        },
        "date": 1783250335217,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401184416,
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
          "id": "a5e0327261f94261dd6752d27261758860eb7dfb",
          "message": "perf(api): reuse audit analysis context",
          "timestamp": "2026-07-05T14:13:22+02:00",
          "tree_id": "f4f1c0f80057d4190dea8a84aae9693c79bfa360",
          "url": "https://github.com/fallow-rs/fallow/commit/a5e0327261f94261dd6752d27261758860eb7dfb"
        },
        "date": 1783254338619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401184416,
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
          "id": "ede3bcd2c01c06d0b63178ee54491103cfe5ff11",
          "message": "docs: correct benchmark ratio claims",
          "timestamp": "2026-07-05T19:40:18+02:00",
          "tree_id": "a3659bf288831ff1b37b04933f8f616c8dca4e55",
          "url": "https://github.com/fallow-rs/fallow/commit/ede3bcd2c01c06d0b63178ee54491103cfe5ff11"
        },
        "date": 1783273879286,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401184416,
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
          "id": "1d14a7714bb46de6c36fc0fb3ffbc01f7aa35767",
          "message": "feat(health): add maxUnitSize threshold override for the large-function check (#1751)\n\nAdds a health.maxUnitSize line-count threshold (global default 60) plus a per-file thresholdOverrides[].maxUnitSize, so a user can raise the function-too-big bar for test files (or any glob) without disabling complexity checks the way health.ignore does.\n\nDesign is list-only, matching the existing maxCyclomatic/maxCognitive/maxCrap override precedent: it filters the reported large-functions list on the resolved per-file effective threshold, while the descriptive unit-size profile and the health score still reflect raw sizes.\n\nFixes #1731.",
          "timestamp": "2026-07-05T21:07:56+02:00",
          "tree_id": "0ff5613e7c0964c0f88d669d6a6b776856503be0",
          "url": "https://github.com/fallow-rs/fallow/commit/1d14a7714bb46de6c36fc0fb3ffbc01f7aa35767"
        },
        "date": 1783279106918,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401221232,
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
          "id": "9dc768e2cc481d98d70c3cd24eb424712ea0d89e",
          "message": "perf: broaden codspeed benchmark coverage",
          "timestamp": "2026-07-05T21:35:49+02:00",
          "tree_id": "8efe61fc0d959fe8b7bf2e4634316d18b70a6cc7",
          "url": "https://github.com/fallow-rs/fallow/commit/9dc768e2cc481d98d70c3cd24eb424712ea0d89e"
        },
        "date": 1783280812178,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401221232,
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
          "id": "185c6a728a4759c5c34afcae1d262ccb09e41a8c",
          "message": "feat(health): expose max unit size threshold in summary\n\nAdd max_unit_size_threshold to the health JSON summary so consumers can read the configured global health.maxUnitSize alongside the existing cyclomatic, cognitive, and CRAP thresholds.\n\nThe human large-functions section now reflects the configured global threshold, and the markdown/human fallback effective-threshold wiring carries the same value for parity with the other thresholds.\n\nFixes #1750.",
          "timestamp": "2026-07-05T22:15:25+02:00",
          "tree_id": "ff38a4bc359bb161c5746c4abd7ff6381f68399a",
          "url": "https://github.com/fallow-rs/fallow/commit/185c6a728a4759c5c34afcae1d262ccb09e41a8c"
        },
        "date": 1783283193422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401235016,
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
          "id": "afa3c171257bcb18cd0edbad9cf033d2be8f0443",
          "message": "fix(health): pluralize the large-functions unit-size footer (#1753)\n\nThe large-functions footer from #1750 read \"exceeding 1 lines\" when health.maxUnitSize is 1; guard the noun so a ceiling of 1 renders \"1 line\". Refs #1750.",
          "timestamp": "2026-07-05T22:35:46+02:00",
          "tree_id": "b388d3dcf64b25ac2d88c6e4a0b38dfbcdf95c2a",
          "url": "https://github.com/fallow-rs/fallow/commit/afa3c171257bcb18cd0edbad9cf033d2be8f0443"
        },
        "date": 1783284516838,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401235304,
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
          "id": "0d568277b6cf91e95c98cb92f8228154e58d6984",
          "message": "chore: release v3.2.0",
          "timestamp": "2026-07-05T23:33:08+02:00",
          "tree_id": "06f0a215a30c01d1d15b2bcfa60193d5391080d5",
          "url": "https://github.com/fallow-rs/fallow/commit/0d568277b6cf91e95c98cb92f8228154e58d6984"
        },
        "date": 1783287882988,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401249016,
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
          "id": "6280c23c3709f69691ebdaef9172c81a4883bdef",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.2.0",
          "timestamp": "2026-07-06T00:38:45+02:00",
          "tree_id": "a5f6f2c47a377bd2c9f4265e282161708d4e6003",
          "url": "https://github.com/fallow-rs/fallow/commit/6280c23c3709f69691ebdaef9172c81a4883bdef"
        },
        "date": 1783291903167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401249016,
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
          "id": "9807e2e414a3a3bd379727b6cc6c7ae21d25ce7a",
          "message": "fix(unused-class-members): credit iteration bindings\n\nCredit unused-class-member usage through typed iteration bindings in Vue, Angular external templates, and function-local JavaScript arrays.\n\nThe extractor now preserves scoped array element facts for local loops and callbacks, records Angular component field array types for templateUrl usage, and avoids parallel overhead for tiny warm-cache parse sets.\n\nFixes #1716.\nFixes #1717.\nFixes #1718.",
          "timestamp": "2026-07-06T11:12:22+02:00",
          "tree_id": "93944c9477529094a9f9e31e34ad0ccfc77fbe95",
          "url": "https://github.com/fallow-rs/fallow/commit/9807e2e414a3a3bd379727b6cc6c7ae21d25ce7a"
        },
        "date": 1783329732614,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401392648,
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
          "id": "2c9ecd2f9091c56b92b0177b7d4d01a45e044f6d",
          "message": "feat(analysis): add route-loader and CSS-in-JS quality checks\n\nAdds framework-scoped route-loader data key harvesting for React Router and Remix while keeping SvelteKit load data isolated. The extractor now records the correct producer mode, bumps the cache version, and the analyzer keeps SvelteKit whole-object abstain from suppressing route-loader findings.\n\nAdds CSS-in-JS near-duplicate token reporting to the CSS analytics contract, human health output, schema, generated TypeScript contracts, and styling findings. Partial-scope scans abstain from the whole-project comparison so changed-file output stays conservative.",
          "timestamp": "2026-07-06T11:46:31+02:00",
          "tree_id": "f7d59442271c692c1e336839424ecf12abe89e11",
          "url": "https://github.com/fallow-rs/fallow/commit/2c9ecd2f9091c56b92b0177b7d4d01a45e044f6d"
        },
        "date": 1783331833735,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401822888,
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
          "id": "ba423ccec8b0e7edc3e5cdb67ba97ea1c9b2c25d",
          "message": "docs(extract): clarify parse scheduling\n\nClarifies that extraction uses a sequential fast path for small file sets and parallel parsing for larger file sets.\n\nAlso documents why the small-input threshold exists: avoiding Rayon scheduling overhead on cache-hot inputs.",
          "timestamp": "2026-07-06T12:02:31+02:00",
          "tree_id": "84b49d92c5c25e14c2625b2381ca9d4d60d46302",
          "url": "https://github.com/fallow-rs/fallow/commit/ba423ccec8b0e7edc3e5cdb67ba97ea1c9b2c25d"
        },
        "date": 1783332796759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401822896,
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
          "id": "f1b9d4c1b12acebe53841a259b91ba36d7607468",
          "message": "feat(architecture): add contract guardrails\n\nAdd generated contract surface checks, architecture invariants, SARIF/LSP contract cleanup, MCP CLI fallbacks, and public smoke conformance guardrails.",
          "timestamp": "2026-07-06T19:07:35+02:00",
          "tree_id": "72031856c10c4af91c5c074522e91270a772f573",
          "url": "https://github.com/fallow-rs/fallow/commit/f1b9d4c1b12acebe53841a259b91ba36d7607468"
        },
        "date": 1783358272360,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401819384,
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
          "id": "2c96a30db4904bab4d269782cad4874bcbbfc72e",
          "message": "refactor(architecture): close output boundary leftovers\n\nMove reusable SARIF result assembly and audit styling render facts into fallow-output so API and CLI code stop owning shared output contract behavior.\n\nKeep fallow-core contained as engine backend debt by removing the benchmark convenience dependency and adding crate-boundary guards. Complete the FallowOutput schema manifest for trace, feature flags, and decision surface, then drift-test the backwards compatibility docs and regenerated TypeScript contracts.",
          "timestamp": "2026-07-06T23:53:20+02:00",
          "tree_id": "a189a2313c041ef55c41a310e4ea13f65108a0e3",
          "url": "https://github.com/fallow-rs/fallow/commit/2c96a30db4904bab4d269782cad4874bcbbfc72e"
        },
        "date": 1783375421971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 401842584,
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
          "id": "e7878f27ede3575df0ca7142e03db38ad56acb00",
          "message": "refactor: remove architecture debt\n\nMove SARIF-family assembly and shared formatter facts behind fallow-output while keeping fallow-api as a compatibility facade.\n\nReclassify fallow-core as an internal detector backend behind fallow-engine, tighten architecture guards for direct core calls, IO/cache ownership, analyzer placement, manifest drift, and protocol prose.\n\nRemove stale exception language from contributor docs and add pre-ship guard coverage so the architecture debt cannot silently return.",
          "timestamp": "2026-07-07T07:51:22+02:00",
          "tree_id": "db8be59ca0bf3c1f9de75a9cf302d1874c84c199",
          "url": "https://github.com/fallow-rs/fallow/commit/e7878f27ede3575df0ca7142e03db38ad56acb00"
        },
        "date": 1783404558365,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 407568488,
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
          "id": "90d340dcdc8f15c8bc2dfbecbf348b51894f72d9",
          "message": "fix(resolve): clarify incomplete-tsconfig-chain warning\n\nThe \"Broken tsconfig chain ... path aliases from missing inherited configs will not [work]\" warning read as if every path alias was unresolved, alarming users of large monorepos whose aliases resolve fine. When a per-file tsconfig extends/references chain cannot be fully loaded (commonly a node_modules base config not installed yet), fallow falls back to resolver-less resolution, but aliases declared in a discovered root or workspace tsconfig are still applied project-wide by the TypeScript plugin. The warning now says so and only flags aliases declared solely in the unreadable inherited config. Wording and documentation only; resolution behavior is unchanged.",
          "timestamp": "2026-07-07T21:06:38+02:00",
          "tree_id": "8a35075bdbd2b0b2de755d2aa78a346500f24683",
          "url": "https://github.com/fallow-rs/fallow/commit/90d340dcdc8f15c8bc2dfbecbf348b51894f72d9"
        },
        "date": 1783452536119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 411569624,
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
          "id": "68626df671925eae57fdf8d099a4116b8a2609dd",
          "message": "feat(onboarding): cold-start config recommendation for agents\n\nAdds an agent onboarding surface that takes a cold-start agent (arriving via\nGitHub, npx, or MCP) from zero to a project-tailored fallow config. `fallow\nschema` is a capability manifest (commands, global flags, issue types with\ndefault severities / opt-in / frameworks, boundary presets, taste choices,\nsecurity categories, MCP tools, related schemas); `fallow recommend` emits a\ndetection-derived `proposed_config` that loads through the real loader plus a\nthree-valued `decisions[]` list (auto applied silently, default disclosed and\noverridable, taste surfaced as an open AskUserQuestion with no baked-in answer);\na read-only `recommend` MCP tool mirrors it 1:1; and `fallow config-schema` is\nself-documenting from the Rust config types.\n\n`fallow init` now derives its detection base (entry, workspaces.patterns,\nStorybook ignore) from the same recommend core so init and recommend never\ndrift, and the `--toml` scaffold writes the loader's `patterns` key instead of\nthe silently-dropped `packages` (with a `packages` back-compat serde alias so\nexisting configs keep scoping). Framework and test-framework detection now\naggregate dependency names across workspace members, not just the root\npackage.json, so a monorepo whose frameworks live in packages (Next.js in\napps/web) is reported instead of showing as frameworkless.\n\n`fallow config` on a zero-config project now prints the effective defaults as\nclean JSON and exits 0 (was exit 3 with no output); `--path` still exits 3 when\nno file exists. `fallow recommend`'s concise human output points at\n`--format json` for the full structured decision set. Companion docs\n(fallow-docs) are updated separately; the vendored skill/manifest contracts are\nregenerated in this change.",
          "timestamp": "2026-07-07T22:08:34+02:00",
          "tree_id": "cb83096934bdae92ee359eb934e4619109dd3dff",
          "url": "https://github.com/fallow-rs/fallow/commit/68626df671925eae57fdf8d099a4116b8a2609dd"
        },
        "date": 1783455566042,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 412461360,
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
          "id": "2244b5c42d096f04a8334e4e84d13bd5f6de9d2f",
          "message": "chore(deps): unblock Dependabot PRs (crossbeam-epoch security + npm tooling) (#1778)\n\n* fix(deps): bump crossbeam-epoch to 0.9.20 for RUSTSEC-2026-0204\n\ncrossbeam-epoch 0.9.18 (transitive via rayon-core and ignore) is flagged\nby RUSTSEC-2026-0204: invalid pointer dereference in the fmt::Display impl\nfor Atomic/Shared on null pointers. Fixed in >=0.9.20. Cargo.lock-only\nbump; clears the Cargo Deny and Security Audit failures on main and every\nopen PR.\n\n* chore(deps-dev): bump commitlint, oxfmt, oxlint and resync lockfile\n\nBumps @commitlint/cli and @commitlint/config-conventional to 21.2.0,\noxfmt to 0.57.0, oxlint to 1.72.0. Regenerates package-lock.json with a\nreal npm install so the nested conventional-commits-parser@6.4.0 entry is\nrestored; Dependabot's per-package lockfile regeneration had pruned it,\nbreaking npm ci (the JS Lint and Commit messages checks) on every npm PR.\n\nSupersedes #1761, #1763, #1764, #1765.",
          "timestamp": "2026-07-07T20:48:06Z",
          "tree_id": "29570e966bace28ce0c12094d6726e16f5885c39",
          "url": "https://github.com/fallow-rs/fallow/commit/2244b5c42d096f04a8334e4e84d13bd5f6de9d2f"
        },
        "date": 1783457827329,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 412487592,
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
          "id": "66e4400cbcaeb3e134e76965b0c15aa7f0f1e91e",
          "message": "chore(deps): migrate MCP server to rmcp 2.x (#1779)\n\nBumps rmcp 1.8 -> 2.1 (manifest floor \"2.0\"). The 2.0 model reorg renamed\nthe content type: `Content` (an `Annotated<RawContent>` with a `.raw`\nfield) became the flat `ContentBlock` enum, and the `RawContent` enum was\nremoved. Migrated all tool response builders and result-parsing helpers:\n\n- `rmcp::model::Content` -> `ContentBlock`; `Content::text` -> `ContentBlock::text`\n- `let RawContent::Text(t) = &content.raw` -> `let ContentBlock::Text(t) = content`\n- `match &result.content[0].raw { RawContent::Text(t) => .. }` -> `match &result.content[0] { ContentBlock::Text(t) => .. }`\n\nThe tool-router macros (`#[tool]`, `tool_router`, `tool_handler`),\n`ServerHandler`, `Parameters`, and stdio transport are unchanged across\nthe major. Verified: builds, clippy clean, mcp tests pass, and a live\nstdio session (initialize -> tools/list -> tools/call fallow_explain)\nreturns correct results.\n\nCloses #1773.",
          "timestamp": "2026-07-07T21:12:18Z",
          "tree_id": "a9b35be271a7c773aa72924e003fd7f3ccea9f8e",
          "url": "https://github.com/fallow-rs/fallow/commit/66e4400cbcaeb3e134e76965b0c15aa7f0f1e91e"
        },
        "date": 1783459540932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 412487592,
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
          "id": "7a827074ceedafb3199ae6ea1f729910ec1354b1",
          "message": "feat(plugins): add fallow plugin-check for agent plugin-authoring\n\nRead-only fallow plugin-check [--format json] dry-run so an agent can verify an external plugin (fallow-plugin-*.jsonc, especially manifestEntries) without a full analysis. Reports per plugin whether it activated (with the unmet detection/enabler requirement when inactive), and for active manifestEntries plugins the per-rule matched manifests, when-gate result, seeded entries (with path_exists), and typed warnings. The report is a shared RuleReport that production seeding also consumes, so the two cannot drift. Deterministic output; always exits 0 (advisory).\n\nA dead-code --format json run with active external plugins + unused files surfaces a verify-plugins next step, and fallow schema related_schemas gained plugin_schema_command / plugin_check_command pointers. Fixes the dead fallow.dev/plugin-schema.json URL to raw.githubusercontent. Refs #1774.",
          "timestamp": "2026-07-08T09:28:12+02:00",
          "tree_id": "59c68ebaa68a4fc92a8a4b9736537407dc07fadd",
          "url": "https://github.com/fallow-rs/fallow/commit/7a827074ceedafb3199ae6ea1f729910ec1354b1"
        },
        "date": 1783496499680,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 413812064,
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
          "id": "dc47771ba6fbee568a862ca72516fde9fd3f89cb",
          "message": "style: apply rustfmt after css_analytics split",
          "timestamp": "2026-07-08T12:14:50+02:00",
          "tree_id": "0ca632c18a104fcfa9f74f45b1e90bbb8d6601b6",
          "url": "https://github.com/fallow-rs/fallow/commit/dc47771ba6fbee568a862ca72516fde9fd3f89cb"
        },
        "date": 1783506631579,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 413842160,
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
          "id": "d0871a46eebeb930dceb737aee2be48270635f62",
          "message": "fix(distribution): harden agent-facing release surfaces\n\nHarden the shipped npm wrapper so signal-terminated binaries propagate a failing shell-style exit code, and make Linux libc fallback choose the musl package unless glibc is detected.\n\nMove hot-path fan I/O reference signals to a precomputed graph pass, convert LSP byte columns to UTF-16 at the protocol boundary, and keep Node addon panics catchable by using a NAPI-specific unwind profile.\n\nExpose impact_closure as a read-only MCP tool that wraps the existing dead-code impact closure CLI path, including Code Mode, manifest, schema, documentation, and regression coverage.",
          "timestamp": "2026-07-08T19:11:23+02:00",
          "tree_id": "4d6526bd83f630e06d1ca1d822844e202932d8f6",
          "url": "https://github.com/fallow-rs/fallow/commit/d0871a46eebeb930dceb737aee2be48270635f62"
        },
        "date": 1783531506252,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 413857712,
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
          "id": "a4fb282920ee12d521d48a2f13be9ad77d3665ef",
          "message": "docs(rules): point churn wiring at fallow_engine paths in cli-crate.md",
          "timestamp": "2026-07-08T23:17:03+02:00",
          "tree_id": "bb38d0056949b8ed70e36793b19a100ba1ae8c97",
          "url": "https://github.com/fallow-rs/fallow/commit/a4fb282920ee12d521d48a2f13be9ad77d3665ef"
        },
        "date": 1783546267449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 413875744,
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
          "id": "c196a300d6a420d9c2abe69df1f771b336942b7f",
          "message": "fix(members): credit member access through interface/type-alias property hops\n\nA dotted member chain whose receiver's type hop goes through a named interface or type-literal alias (interface Opts { c: OptDep }, constructor(private opts: Opts), this.opts.c.optM()) was never resolved, same-file or cross-module: the per-file interface property-type map's only consumer was destructured typed bindings. Codebases wiring classes through constructor-injected options objects saw near-100% false-positive unused-class-member rates and had to disable the rule.\n\nThe extraction layer now expands compound binding targets through the file's own interface/alias property types (one path segment per hop, so self-referential types terminate; local-class compounds stay on the instance_bindings path). When a hop's type name is imported, the property maps persist as ModuleInfo.type_member_types and a new TypedPropertyMemberAccess semantic fact joins consumer, declaring module, and class at analyze time, mirroring the factory-return machinery with the same export_is_class_with_members over-credit gate, so a wrong annotation can only under-report, never flag. Same-file renamed interface exports (export { Foo as Bar }) resolve through the export's declared local name.\n\nAlso fixed: interface-declared Playwright fixture maps (base.extend<MyFixtures> where MyFixtures is an interface) now resolve identically to the type-alias form, and the SFC merge path now carries semantic_facts, so Vue/Svelte script blocks participate in every cross-module fact join they previously dropped. CACHE_VERSION 224 to 225; warm caches invalidate on upgrade.\n\nFixes #1785.",
          "timestamp": "2026-07-08T23:51:37+02:00",
          "tree_id": "be50085faab8293d5d61c4509a6ae7f5e6c56a29",
          "url": "https://github.com/fallow-rs/fallow/commit/c196a300d6a420d9c2abe69df1f771b336942b7f"
        },
        "date": 1783548148712,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 414560216,
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
          "id": "be01c9abe56fa40fc225537f95dfa1e270e17326",
          "message": "fix(members): hop through local unexported options classes in typed-property expansion\n\nFollow-up to #1787: an options object typed by a LOCAL, UNEXPORTED class whose property type is imported (class Opts { constructor(public c: ImportedDep) {} } + this.opts.c.optM()) still reported ImportedDep.optM as an unused-class-member. The unexported class never resolves through local_to_export_keys, so the analyze-side instance-binding chain dead-ends, and the #1785 expansion returned Opaque for every local-class root.\n\nexpand_typed_property_compound now continues through a locally-declared class's own typed-property bindings, unifying the class hop with the interface/alias hop. Exported classes keep their analyze-side path (the extract-side credit is additive and gated identically downstream, so a wrong hop can only under-report); an unknown property on a local-class hop abstains. CACHE_VERSION 225 to 226.\n\nFixes #1788.",
          "timestamp": "2026-07-09T08:57:56+02:00",
          "tree_id": "0bdf9b44b1e3fc71656f095fd27ae84bf6241b72",
          "url": "https://github.com/fallow-rs/fallow/commit/be01c9abe56fa40fc225537f95dfa1e270e17326"
        },
        "date": 1783580981840,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 414562296,
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
          "id": "48f415e1191095a8b4a7a170e0ceee8eaccb402e",
          "message": "refactor(core): remove engine-owned copy modules\n\nRemove the stale fallow-core copies for churn, trace, trace-chain, and cross-reference now that fallow-engine owns those surfaces. This keeps core focused on internal orchestration instead of publishing duplicate adapters that can drift.\n\nMove the trace and trace-chain regression coverage onto the engine path, add an architecture guardrail that rejects reintroducing the core modules, and drop the unused core bitcode dependency.",
          "timestamp": "2026-07-09T10:47:28+02:00",
          "tree_id": "edda384dd8da235bd8d6202781eae85c4e6a0c36",
          "url": "https://github.com/fallow-rs/fallow/commit/48f415e1191095a8b4a7a170e0ceee8eaccb402e"
        },
        "date": 1783587646821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 414567776,
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
          "id": "b005d105c275f2dd0da67767862b12e702295cec",
          "message": "fix(members): credit Playwright POM methods through function-wrapped fixture consts (#1792)\n\nA Playwright fixture exported as a function that wraps a local base.extend<T>({...}) fixture const via <const>.extend({}) and called in specs as myTest()(\"title\", cb) left every Page Object method reported as unused-class-member. The equivalent direct const form credited them correctly.\n\nThe use side already handled the double-call; the def side dropped it because try_capture_playwright_factory_helper bailed on a wrapping .extend({}) with no type argument. The helper now records a (helper, base) alias whenever it returns <base>.extend(...), and the finalize-time fixed point inherits fixture bindings from local base.extend<T>({...}) consts (a new transient playwright_local_fixture_defs map) as an inheritance source only, gated on @playwright/test resolution so non-Playwright code is unaffected. Bumps the extract CACHE_VERSION 226 to 227.\n\nFixes #1791.",
          "timestamp": "2026-07-09T11:34:57+02:00",
          "tree_id": "8b12d6f9466b770766c095d664acf0edfe623f31",
          "url": "https://github.com/fallow-rs/fallow/commit/b005d105c275f2dd0da67767862b12e702295cec"
        },
        "date": 1783590734088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 414643800,
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
          "id": "c9326d9395c0b46f4077290473060b3e950b6e8c",
          "message": "chore: release v3.3.0",
          "timestamp": "2026-07-09T13:33:19+02:00",
          "tree_id": "ec96dac95d61fa33fa75fa03f8df2d0c1ff95914",
          "url": "https://github.com/fallow-rs/fallow/commit/c9326d9395c0b46f4077290473060b3e950b6e8c"
        },
        "date": 1783597662364,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 414038408,
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
          "id": "ac9cf46f94303c658e15c5a6789137075ad65fba",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.3.0",
          "timestamp": "2026-07-09T14:32:39+02:00",
          "tree_id": "db8f60e46559097639047210300ebd59ce045d22",
          "url": "https://github.com/fallow-rs/fallow/commit/ac9cf46f94303c658e15c5a6789137075ad65fba"
        },
        "date": 1783601242434,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 414038408,
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
          "id": "89d83c73d3a64f1e3fcde52cdafe72d7fc7c3071",
          "message": "chore(contracts): regenerate output schema, TS contracts, and capabilities for suppression-inventory",
          "timestamp": "2026-07-09T21:14:57+02:00",
          "tree_id": "5e2a71e73fc3bd5e8bbea43a90b213df96f7529a",
          "url": "https://github.com/fallow-rs/fallow/commit/89d83c73d3a64f1e3fcde52cdafe72d7fc7c3071"
        },
        "date": 1783625420089,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 415054616,
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
          "id": "49f62ff29ae896681e541a0b7bd9a1bb04d963f8",
          "message": "docs: changelog entry and regenerated capability manifest for the GitHub formats\n\nCHANGELOG under Unreleased/Added for --format github-annotations,\n--format github-summary, and fallow report --from. capabilities.json,\nthe vendored SKILL.md task matrix, and the CLI reference regenerate from\nlive clap via npm run generate:contracts (new --format values, the\n--annotations-path-prefix global flag, and the report command).",
          "timestamp": "2026-07-09T22:10:58+02:00",
          "tree_id": "dfd4a9a305814386afdad0a1c662ca3e1b754dca",
          "url": "https://github.com/fallow-rs/fallow/commit/49f62ff29ae896681e541a0b7bd9a1bb04d963f8"
        },
        "date": 1783628811945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 419125704,
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
          "id": "05a23e93d82583f43a8982dc3e9ebce5581bdf58",
          "message": "docs: drop deleted core-module references from agent and security docs\n\nPoints CLAUDE.md, the crate rule files, crates/core/AGENTS.md, SECURITY.md, detection.md, and CONTRIBUTING.md at the current module owners (engine duplication_detector/ and churn.rs, types-crate duplication types, analyze/members/) and removes the deleted duplicates/, cross_reference.rs, trace.rs, and spawn::git references.",
          "timestamp": "2026-07-09T22:59:12+02:00",
          "tree_id": "a5000fc6def84bd7543f7bc250130fe3962949a2",
          "url": "https://github.com/fallow-rs/fallow/commit/05a23e93d82583f43a8982dc3e9ebce5581bdf58"
        },
        "date": 1783631832148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 419098520,
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
          "id": "d10ef7616a78bc7268948cec15690cfbb7b9365a",
          "message": "test(core,engine): drop timing-dependent asserts and profiling pseudo-test\n\nGates the assert-free dupes profiling harness behind #[ignore], removes the wall-clock asserts from the dupes stress tests (bench workflows own perf signal), makes the graph-cache transparency test deterministic without the mtime sleep, and moves the test-only tempfile dependency to dev-dependencies.",
          "timestamp": "2026-07-10T00:29:19+02:00",
          "tree_id": "8b358b861bfe734dad120c0ec01c3f92372d91e8",
          "url": "https://github.com/fallow-rs/fallow/commit/d10ef7616a78bc7268948cec15690cfbb7b9365a"
        },
        "date": 1783636977804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 419311296,
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
          "id": "ee20cbaf15378649088b951bc4ecb4c72622ea34",
          "message": "test: strengthen CI and contributor guidance\n\n* chore: open audit CI and docs implementation branch\n\n* test: strengthen CI and contributor guidance",
          "timestamp": "2026-07-10T01:13:22+02:00",
          "tree_id": "6a4a450c205ffb93c1439c2faa6633652f97a911",
          "url": "https://github.com/fallow-rs/fallow/commit/ee20cbaf15378649088b951bc4ecb4c72622ea34"
        },
        "date": 1783639450760,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 419311296,
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
          "id": "f92a06ffd7163d012d7d2fd86ab893390ff4f955",
          "message": "perf: share parsed modules across warm sessions",
          "timestamp": "2026-07-10T02:48:28+02:00",
          "tree_id": "2a50af72f2c4552e120c1abf2173880450988f36",
          "url": "https://github.com/fallow-rs/fallow/commit/f92a06ffd7163d012d7d2fd86ab893390ff4f955"
        },
        "date": 1783645144262,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 419522048,
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
          "id": "d26a96b43b4001b9aa0368583c53ff4de248a210",
          "message": "fix(ci): lint Windows MCP lifecycle code (#1807)\n\nRepair the Windows-only MCP Clippy failure and run focused MCP Clippy in the pull request lifecycle gate.\n\nAdd a workflow policy regression test so the Windows lint command cannot drift.",
          "timestamp": "2026-07-10T05:23:10Z",
          "tree_id": "d1eeaef212a3f173a52b7f6afe093d16bc38a38f",
          "url": "https://github.com/fallow-rs/fallow/commit/d26a96b43b4001b9aa0368583c53ff4de248a210"
        },
        "date": 1783661636834,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 419522048,
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
          "id": "4d019eeb4785ea71412d8e7f56dc8a208d03e94f",
          "message": "feat(mcp): add list_suppressions tool for the suppression inventory\n\nThe fallow suppressions inventory was CLI-only, so agents on the MCP surface could not see what a clean verdict was hiding without shelling out. The new read-only list_suppressions tool wraps `fallow suppressions --format json` as a subprocess (the security_candidates shape, so timeout handling, telemetry tagging, and process-lifecycle hardening come from the shared run_tool path) and returns the suppression-inventory envelope verbatim, introducing no new wire contract.\n\nThe tool forwards workspace, changed_since, and repeated file scoping plus production, root, config, no_cache, threads, and the per-request allow_remote_extends config-trust opt-in; empty file entries are rejected with a structured validation error. changed-workspaces is deliberately not forwarded in v1. Includes the capability-manifest row, regenerated capabilities.json and MCP tools table, tests, and a corrected feature_flags doc line that advertised never-forwarded params.",
          "timestamp": "2026-07-10T11:19:18+02:00",
          "tree_id": "07bb50fe205935fb717528bc8bfca610d941a6b4",
          "url": "https://github.com/fallow-rs/fallow/commit/4d019eeb4785ea71412d8e7f56dc8a208d03e94f"
        },
        "date": 1783675957668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 419522272,
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
          "id": "36875ed79d16710af94c5d7654667404d72de828",
          "message": "fix: address audit improvement findings\n\nHarden source and fix I/O, audit base materialization, LSP failure handling, route-loader reachability, and grouped workspace diagnostics so failures cannot be mistaken for clean analysis.\n\nAdd transactional contract generation, Node 22 runtime contracts, documentation updates, and measured graph and extraction performance improvements. Include regression coverage for unreadable warm-cache sources found during final review.",
          "timestamp": "2026-07-10T14:18:12+02:00",
          "tree_id": "f3ac0e7b9051f15fabe7ae919f715e9885cec173",
          "url": "https://github.com/fallow-rs/fallow/commit/36875ed79d16710af94c5d7654667404d72de828"
        },
        "date": 1783687015025,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 420450880,
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
          "id": "51e7e899919d4d6e04d3ab6c221d983311d8b94b",
          "message": "test(types): normalize source-read path assertion\n\nThe source-read diagnostic serializer emits forward slashes on every platform. Normalize the expected path so the regression matches the wire contract on Windows.",
          "timestamp": "2026-07-10T14:41:03+02:00",
          "tree_id": "0726139f394857f0c68262e48033be70cd1e2505",
          "url": "https://github.com/fallow-rs/fallow/commit/51e7e899919d4d6e04d3ab6c221d983311d8b94b"
        },
        "date": 1783687930517,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 420450880,
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
          "id": "5f77b7b5e86af87a570ca874a2531445ec58aa2f",
          "message": "fix(report): singular nouns for one-finding GitHub format headlines\n\nSmoke testing the unreleased GitHub-native formats surfaced two count==1 grammar defects: the annotations budget notice rendered \"fallow emitted 1 annotations\" and the job-summary headline rendered \"**1 issues** found\". A pull request that introduces exactly one issue is the most common CI case, so both strings now branch on the count.\n\nGolden snapshots are unchanged (their fixtures are plural); new unit and integration tests pin the singular forms.",
          "timestamp": "2026-07-11T21:08:08+02:00",
          "tree_id": "62b1f8435a829356be6bc2e28091b6e02dac4d35",
          "url": "https://github.com/fallow-rs/fallow/commit/5f77b7b5e86af87a570ca874a2531445ec58aa2f"
        },
        "date": 1783797537984,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 420448184,
            "unit": "bytes"
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
          "id": "43a4faaa2fbef129c29b908a5d3eb7f5e871d580",
          "message": "fix(members): three false positives in unused-class-members (#1811)\n\n* fix(members): credit members reached through a local subclass\n\n`class Sub extends Base {}` without an `export` never becomes an export, so the\nanalyze layer cannot resolve the object in `Sub.someStatic`: its import/export\nmap holds only imports and exports, and the heritage parent-to-children map is\nbuilt from exports alone. Every member reached only through the subclass was\nreported unused. Exporting the subclass makes the identical code resolve, which\nis the tell.\n\nThe fix belongs in extract, where the data already exists. Non-exported\ntop-level classes are recorded with their superclass, so walk that `extends`\nchain to the first name that is not locally declared -- the imported or exported\nbase -- and re-emit the access against it. The existing import-to-export\nresolution then credits the base. No synthetic export keys, which would be both\nsemantically wrong for a non-export and prone to collide across files.\n\nCycle detection, not a depth cap, terminates the walk. A cap would silently\nabstain on a legitimately deep chain and leave its members falsely reported,\nwhich is the failure this rule must never make.\n\nThe pass runs after `resolve_bound_member_accesses`, because that is what\nmaterializes the class-qualified access for `const s = new Sub(); s.member`.\nRunning earlier saw only the statics spelled `Sub.member` in source and left\nevery instance member reached through a local subclass reported.\n\nA mixin superclass records no name and abstains: `class Sub extends mixin(Base)`\nmay redefine what the subclass exposes, so crediting through it would be a\nguess. That pre-existing false positive is pinned by a test rather than fixed by\naccident.\n\nOver-crediting is safe here. A subclass that shadows a base member credits the\nbase too, which is a false negative -- the direction this rule must err in, since\na false positive is what made it untrustworthy.\n\nThe regression fixture is cross-file. A same-file fixture passes for the wrong\nreason: a class whose instance escapes through a same-file factory is skipped\nwholesale by the whole-object gate, so it reports nothing either way.\n\n* fix(members): credit factory results read without a named binding\n\nCross-module factory-return propagation already credited `const s = f(); s.m`.\nIt never fired for the two shapes real composables and singletons actually use:\n\n    useApi().member                 // chained call\n    const { member } = useApi()     // destructure\n\nThe extractor recorded a factory-return candidate only for a plain binding\nidentifier, so an object pattern was dropped, and a chained call is not a\nvariable declarator at all, so nothing recorded it. Both fell through to \"no\naccess\", and every member of the returned class was reported unused -- 81% false\npositives on the codebase that prompted this.\n\nBoth shapes name a callee and a member at capture time, so record that pair\ndirectly. A same-file factory binds the class immediately; an imported callee\nemits the typed fact the analyze layer resolves through the strict, value-proven\n`exported_factory_returns` gate. Any other callee resolves to no proven factory\nexport and credits nothing, so recording every `identifier().member` is safe.\nRouting through a stand-in local instead would have made each such call a\ncandidate, and candidate resolution rescans every member access -- quadratic on a\nfile full of helper calls.\n\nOnly the first level of the result belongs to the factory's class. `f().a.b`\ncredits `a`; `b` is read off whatever type `a` has. `{ a: { b } }` credits `a`\nfor the same reason. A member-expression callee (`obj.f().a`) and a call of a\ncall (`f()().a`) resolve to no proven factory export, so crediting through them\nwould be a guess and they stay uncredited.\n\n`const { a, ...rest } = f()` and a computed key can read ANY property, so no set\nof visible keys describes what is used. Crediting just `a` would leave every\nother live member reported -- the same false positive, narrowed. The returned\nclass is marked wholly used instead, via a new `FactoryFnWholeObject` fact\nresolved through the same gate as the member facts. Reporting nothing for that\nclass is a deliberate false negative: under-reporting is safe here,\nover-reporting is what made the rule untrustworthy. The variant is appended to\n`SemanticFact`, never inserted: bitcode encodes an enum by ordinal, so moving an\nexisting variant would make an old cache decode one fact as another.\n\nFixtures are cross-file. A same-file factory is skipped wholesale by the\nwhole-object gate, because the returned instance escapes the module, so a\nsame-file fixture reports nothing and passes for the wrong reason. That is why\nthe fixture added with the previous fix for this bug went green while the\nreported bug stayed live.\n\n* fix(members): index imports and pin the namespace-base gap\n\nFollow-ups from an adversarial review of the two preceding commits.\n\n`resolve_factory_inline_accesses` scanned every import for each `f().member` it\nrecorded. A file that reads many helper results was O(accesses x imports).\nIndex the imported local names once instead.\n\nThe callee is matched by name and not by scope, so a local binding that shadows\nan imported factory is treated as that factory. It can only add credit, so the\nworst case is a member that stays unreported. Say so where it happens.\n\n`class Sub extends ns.Base {}` walks to the dotted name `ns.Base`, which the\nanalyze layer cannot resolve: its import/export map keys bare local names. The\nbase's members stay reported. That is a pre-existing gap rather than a\nregression, and it is wider than subclassing -- a direct `ns.Base.someStatic()`\nis equally uncredited on main, verified by running both binaries against the\nsame fixture. The doc comment claimed the dotted form was handled; it is not.\n\nPin it with a test, as with the mixin superclass, so a future change to\nnamespace resolution has to decide the case deliberately rather than flip it by\naccident.\n\n* refactor(members): share the factory-to-class resolution chain\n\nPure refactor from a simplification review. Behavior is unchanged: every fixture\nacross the branch produces byte-identical output, and no extraction fact changes\nmeaning, so `CACHE_VERSION` stays where it is.\n\n`propagate_factory_fn_accesses` and the new whole-object pass each walked the\ncallee -> re-export origins -> `exported_factory_returns` -> class-with-members\nchain themselves, and `credit_factory_return_class_member` re-implemented the\ninner half of it a third time. Each link of that chain is an over-credit gate,\nso three copies are three places for the gates to drift apart. They now share\n`factory_return_classes_for_callee` and `factory_return_class_origins`.\n`credit_factory_return_class_member` keeps its own name because\n`typed_property.rs` calls it too.\n\n`record_factory_return_candidate` matched a bare `identifier(...)` callee by\nhand next to a helper doing exactly that. It now calls the helper, renamed\n`bare_call_callee_name` since it recognizes any bare call, not only a factory.\n\n`factory_inline_accesses` became `factory_unnamed_result_accesses`: it also\nholds destructured keys, so \"inline\" claimed less than the code does.\n\nTwo comments were left describing a synthetic-local mechanism that no longer\nexists, and one doc claimed a `None` return from a function returning a `Vec`.\n\n`extract_destructured_names` and `destructured_factory_keys` look like the same\nfunction and are not: the former drops a computed key and keeps the rest, the\nlatter makes a single unnameable key opaque the whole pattern, because a caller\ncrediting class members off it must abstain rather than credit what it can see.\nCollapsing them would have silently dropped destructured names from taint-source\ntracking and two other callers. Both now say so.",
          "timestamp": "2026-07-12T11:14:23+02:00",
          "tree_id": "fe20de1959bf3c022864853a6ff1b1e9c655dc72",
          "url": "https://github.com/fallow-rs/fallow/commit/43a4faaa2fbef129c29b908a5d3eb7f5e871d580"
        },
        "date": 1783848435974,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 420794400,
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
          "id": "acc994aa8ec24673399d016db7dede091338c8e7",
          "message": "fix(config): ship a local schema path instead of the dead fallow.dev fallback (#1826)\n\nThe generated config's $schema hardcoded the remote raw.githubusercontent\nURL, which VS Code treats as an untrusted remote schema location and\ndeclines to load without a manual trust grant. The schema's own doc comment\nseparately recommended https://fallow.dev/schema.json, a domain that has\nnever resolved in DNS.\n\nSingle canonical story now: when a local, version-aligned\nnode_modules/fallow/schema.json is present (any npm install), fallow init,\nfallow recommend, and fallow migrate point $schema at it, offline and with\nno editor trust prompt. Non-npm installs (cargo, homebrew, a bare binary)\nkeep falling back to the remote GitHub URL. Detection is a filesystem\nexistence check on ProjectInfo.has_local_schema, threaded through\nproposed_config_value (shared by init and recommend) and generate_jsonc\n(migrate).\n\nFixes #1794",
          "timestamp": "2026-07-12T13:03:58+02:00",
          "tree_id": "cb4ca4445e49d3b1876390a2a8c5893aaed9d5ba",
          "url": "https://github.com/fallow-rs/fallow/commit/acc994aa8ec24673399d016db7dede091338c8e7"
        },
        "date": 1783855668606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 421010056,
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
          "id": "4cb65794e5631bdfd8e6a4aec016d45b560a0d68",
          "message": "test(cli): make workflow-event assertions immune to parallel accumulator writes (#1830)\n\nworkflow_event_buckets_exit_codes asserted config_shape through\nbuild_workflow_event, which reads process-global accumulators. The\nreset-before-read guard cannot close the race against a PARALLEL test\ndriving a real command path (load_config_for_analysis ->\nnote_config_shape) mid-test; the Coverage CI run on main caught exactly\nthat with CustomConfig leaking over the expected CustomRules.\n\nSplit build_workflow_event into a pure build_workflow_event_with taking\na RunAccumulatorSnapshot; production snapshots the globals once per\nevent (behavior unchanged), the test passes the UNSET snapshot and is\ndeterministic under any parallelism. The reset helper and the two\none-line derivation wrappers are folded away.",
          "timestamp": "2026-07-12T13:40:45+02:00",
          "tree_id": "5aac6ac3c0556d25f58e2457b3992d1256de6659",
          "url": "https://github.com/fallow-rs/fallow/commit/4cb65794e5631bdfd8e6a4aec016d45b560a0d68"
        },
        "date": 1783857195976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 421008616,
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
          "id": "e893500daea980960952ccb948c24c78f9c4b59f",
          "message": "docs(cli): drop intra-doc link to the cfg(test)-only UNSET snapshot (#1831)\n\nThe Documentation CI job documents non-test code, where\nRunAccumulatorSnapshot::UNSET does not exist, so the intra-doc link from\n#1830 was unresolved under -D warnings. Plain code span instead.",
          "timestamp": "2026-07-12T14:10:25+02:00",
          "tree_id": "cc027cbc180653c4f03b987f0fbc77d3424f58b7",
          "url": "https://github.com/fallow-rs/fallow/commit/e893500daea980960952ccb948c24c78f9c4b59f"
        },
        "date": 1783858900475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 421008616,
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
          "id": "8cd68866fadd5c274c7bf261a8fb7c2436622f35",
          "message": "style(cli): wrap is_file_level_only matches! arm over rustfmt width (#1832)\n\nFollow-up to #1820: the added \"unused-file\" token pushed the matches!\nline over the rustfmt width; the contributor's fork disallows maintainer\nedits, so the wrap lands as this immediate follow-up.",
          "timestamp": "2026-07-12T19:45:18+02:00",
          "tree_id": "c77add0a1d66e0d8cac47deefa90ba807b6f57d1",
          "url": "https://github.com/fallow-rs/fallow/commit/8cd68866fadd5c274c7bf261a8fb7c2436622f35"
        },
        "date": 1783879022354,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 421008960,
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
          "id": "2c21d5498e9c322669842d725da43423fdd092fc",
          "message": "fix(extract): scope this.* binding keys per enclosing class (#1833)\n\n`binding_target_names` is module-flat, so two classes in one module that\ndeclare a same-named field collided on the `this.<field>` key via\nlast-write-wins: `constructor(private dep: DepA)` in one class and\n`readonly dep = new DepB()` in another both wrote `this.dep`, so every\n`this.dep.*` access in the module resolved against the surviving target\nonly, and the losing class's dep members were falsely reported as\nunused-class-member cross-module. This is the collision behind the issue's\nprivParam row (order-dependent: reversing the class declarations flipped\nwhich class's members were flagged).\n\nQualify `this.`-rooted binding keys and receiver spellings with an internal\nper-class scope id during the walk (`this@<id>.<field>`), pushed and popped\nalongside the class-super / class-context stacks in `visit_class`. Both the\ninsert side and the access / whole-object / iteration-receiver read sides\nare qualified consistently, so the longest-prefix resolution and the typed\nproperty-hop expansion keep working within one class scope. The qualifier\nis an extraction-only disambiguator: `strip_this_scope_qualifiers` runs last\nin `finalize_resolution_phase`, after every resolution pass, and rewrites\nevery `this@<id>.` spelling back to `this.` across `member_accesses` and\n`whole_object_uses` before any spelling reaches `ModuleInfo`, so no\npersisted spelling and no downstream consumer (core self-access `== \"this\"`,\nheritage `!= \"this\"`, unused-component-output `this.<name>`, SFC template\n`starts_with(\"this.\")`) ever sees it. Bare `this` (the per-file self-access\nkey) and module-level `this` are never qualified.\n\nCorrecting last-write-wins removes accidental credit, so a member that\nexists on both colliding classes but is called on only one can surface as a\nnew true-positive finding. Validated on ten real-world projects: one such\nfinding (`NextNodeServer.revalidate` in next.js, where a `this.server`\ngetter on an unrelated class had been borrowing a sibling class's\n`server: NextNodeServer` field binding) and zero non-member drift.\n\nCACHE_VERSION 233 -> 234 (the emitted member_accesses change for modules\nwith same-named fields across classes; warm 233 caches keep the collision).\n\nFixes #1821",
          "timestamp": "2026-07-12T21:49:10+02:00",
          "tree_id": "bc6ab1b2c0eb6cca94da84fec8c310d9e3c18818",
          "url": "https://github.com/fallow-rs/fallow/commit/2c21d5498e9c322669842d725da43423fdd092fc"
        },
        "date": 1783886417914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 421049072,
            "unit": "bytes"
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
          "id": "976a868175368846efa5c43145b367ca9224c76d",
          "message": "fix(report)!: address CI files from the repository root (#1808)\n\n* fix(report)!: address CI files from the repository root\n\nWhen --root pointed at a package inside a larger repo, fallow's CI output was\nunusable in two ways that shared one cause: findings were keyed and emitted\nrelative to the analysis root, while CI platforms and git address files from\nthe repository root.\n\nReport paths. codeclimate, review-github, and review-gitlab emitted\n--root-relative paths, so GitLab's Code Quality widget matched nothing and\nevery inline review discussion was rejected for naming a file absent from the\nMR diff. github-annotations already rebased onto the git toplevel; the others\nnow do too, via the same PathRebase. The review and sticky-summary formats\nderive their paths from CodeClimate issues, so one seam covers them all.\n--annotations-path-prefix becomes --report-path-prefix (old name kept as an\nalias) and governs every CI format. Both names are now registered in\nglobal_value_options, fixing a latent misparse of the following subcommand.\nThe generated capability manifest and CLI reference are regenerated for the\nrename.\n\nThe prefix is presentation only. The review and sticky-summary filters used to\nkey issues by their rendered path, so a custom or empty prefix silently stopped\nmatching the diff and dropped every inline comment. They now key by the\nanalysis-root-relative path plus the diff's own base.\n\nDiff filtering. --diff-file compared diff keys against finding paths already\nstripped to --root, so below the toplevel nothing matched: every\nsource-anchored finding was dropped and the run reported a clean diff, exit 0,\nsilently. A unified diff does not declare its own base, and both conventions\noccur in practice -- `git diff` writes toplevel-relative paths, `git diff\n--relative` writes root-relative ones. The base is therefore resolved from the\ndiff's paths themselves: whichever candidate directory they actually name\nfiles under wins. The chosen base rides on DiffIndex, the type that defines\nthe namespace, so every filter call site picks it up and callers that build\ntheir own index keep today's behavior.\n\nExistence cannot always place a diff. A path naming a real file under both\ncandidates is ambiguous, and a path naming one under neither is foreign. Both\nare reported. Silence here would rebuild the very failure this change removes:\na filter that matches nothing looks exactly like a clean diff.\n\nWhen --root is the repository toplevel the two candidates coincide and output\nis byte-identical, which the untouched snapshot suite pins.\n\nSARIF is deliberately excluded: four builders and its own URI encoding make it\na separate change, so it is left out of the flag's allowlist rather than\nhalf-rebased.\n\nBREAKING CHANGE: codeclimate, review-github, and review-gitlab now emit\nrepository-root-relative paths when --root is a subdirectory. Consumers that\nprepend the offset themselves should drop that step or pass\n--report-path-prefix '' to restore the previous output.\n\n* fix(report): filter parsed diffs with no analyzable files to zero scope\n\nA diff that parses but names no analyzable head-side file (empty,\ndeletion-only, or binary-only) is a real empty scope, not an unplaceable\nbase. init_shared_diff conflated the two: choose_diff_base returned None\nfor both, so such diffs were discarded and the run reported at full\nscope, flipping a change that touches nothing analyzable from clean to\nnoisy (including when --root equals the git toplevel).\n\nSplit the two: touched_files being empty keeps the empty index so every\nsource-anchored finding filters out; only a diff whose paths resolve\nnowhere (foreign) or in two places at once (ambiguous) still falls open.\n\nMake the discard decision authoritative for the FALLOW_DIFF_FILE path\ntoo: filter_issues_from_env now distinguishes a resolved cache, a\ndeliberately-discarded cache (full scope), and an unset cache (embedder\nfallback), so the env route no longer re-reads and re-filters against a\ndiff base detection already rejected.\n\nAlign the ambiguous- and foreign-base warnings with the fail-open\nbehavior: they report at full scope, not a clean report.\n\n* perf(report): resolve CI path prefix only for formats that use it\n\ninit_report_prefix shells out to git rev-parse --show-toplevel on every\nrun, but only codeclimate and review-{github,gitlab} read the resolved\nglobal (report_prefix()); the github-native formats compute their rebase\nfrom root directly. Gate the probe on those three formats so the other\nformats skip the subprocess.\n\n---------\n\nCo-authored-by: Bart Waardenburg <bart@waardenburg.dev>",
          "timestamp": "2026-07-12T23:52:34+02:00",
          "tree_id": "cf4aed763f9b85800c73ae295cb2a8c621b0cd00",
          "url": "https://github.com/fallow-rs/fallow/commit/976a868175368846efa5c43145b367ca9224c76d"
        },
        "date": 1783893771258,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 421359448,
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
          "id": "ab61b4073f08af78335aef83d5fb997836c57c85",
          "message": "fix(cli): emit parseable suppress tokens in every human footer section (#1835)\n\nsection_suppress_rule in the human report emitted hardcoded token strings that\nfallow_types::suppress::parse_suppression_target did not recognize for eight\nsections (unused-exports, unused-types, unused-dependencies, unused-enum-members,\nunused-class-members, unresolved-imports, unlisted-dependencies, duplicate-exports):\nthe strings existed only as config keys or MCP names, never as IssueKind codes or\naliases. Following the printed hint produced a comment that suppressed nothing and\nthen surfaced a stale-suppression finding.\n\nDerive each section's token from the issue registry instead. A section-title to\nIssueKind map feeds issue_kind_to_kebab (the kind's suppress_token, falling back\nto its code), so the emitted token always parses back to the same kind.\nis_file_level_only is likewise derived from the registry's suppress_file_level\nflag, fixing two drifts: duplicate-export (file-level-only per its detector) now\nprints the file-level form, and circular-dependency / boundary-violation (which\nhonor next-line suppression) now print the next-line form. Dependency sections\nwhose findings live in package.json emit no hint rather than a token pointing at\nan impossible inline comment.\n\nA roundtrip guard test asserts every token section_suppress_rule can emit parses\nvia parse_suppression_target and uses the file-level form exactly when the\nregistry marks the kind file-level-only, so this surface stays locked down.\n\nFixes #1828",
          "timestamp": "2026-07-13T10:51:20+02:00",
          "tree_id": "5d74c6a0f39afac5e1717b56035bbf5f97dc1cea",
          "url": "https://github.com/fallow-rs/fallow/commit/ab61b4073f08af78335aef83d5fb997836c57c85"
        },
        "date": 1783933366055,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 421358656,
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
          "id": "0f2de24d23679cca1568b85aa8028d9f4ea6ed38",
          "message": "chore: release v3.4.0",
          "timestamp": "2026-07-13T11:35:29+02:00",
          "tree_id": "9e849ef300cd8fa21173a0444904b2d36b1cc74f",
          "url": "https://github.com/fallow-rs/fallow/commit/0f2de24d23679cca1568b85aa8028d9f4ea6ed38"
        },
        "date": 1783936061571,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 421761328,
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
          "id": "83762f1dc7852f6910e70e3c3a1ca0eb179ff98e",
          "message": "chore: release v3.4.1\n\nv3.4.0's tag never published: the first Windows run of the relocated\ncross-platform checks failed the staged subgenerator byte-comparison\nbecause core.autocrlf converted the committed contract surfaces to CRLF\nwhile generators write LF. Contract surfaces are now pinned to LF in\n.gitattributes; the 3.4.0 changelog section ships unchanged as 3.4.1.",
          "timestamp": "2026-07-13T12:42:02+02:00",
          "tree_id": "04359d9b49accbf637cf688407585c1a31ba21df",
          "url": "https://github.com/fallow-rs/fallow/commit/83762f1dc7852f6910e70e3c3a1ca0eb179ff98e"
        },
        "date": 1783940091268,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 421331200,
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
          "id": "4789329b984be2a65ab7d3878825738f812d2a49",
          "message": "chore: release v3.4.2\n\nv3.4.0 and v3.4.1 never published: the relocated Windows correctness\njob failed both byte-comparison directions of the CRLF class (committed\nside CRLF in v3.4.0, generator-input side CRLF in v3.4.1). The\nrepo-wide LF normalization commit precedes this release; the 3.4.0\nchangelog content ships unchanged as 3.4.2.",
          "timestamp": "2026-07-13T13:34:25+02:00",
          "tree_id": "b1e75a7e2a4911de01eadf77439db666fed1301e",
          "url": "https://github.com/fallow-rs/fallow/commit/4789329b984be2a65ab7d3878825738f812d2a49"
        },
        "date": 1783943541337,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 421783200,
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
          "id": "29770c49b2ca0ddf978fa502d8441620e7597981",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.4.2",
          "timestamp": "2026-07-13T15:01:41+02:00",
          "tree_id": "7ac98fc1ec476d0b4bc8dd67b1a59b7920fa3747",
          "url": "https://github.com/fallow-rs/fallow/commit/29770c49b2ca0ddf978fa502d8441620e7597981"
        },
        "date": 1783948488901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 421783200,
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
          "id": "0b17f59b8052f78b9ba7a9a66b9c9f48c24faaa5",
          "message": "feat: harden review and reliability workflows (#1840)\n\nReviewed and validated across the CLI, editor, Electron, and real-project surfaces.",
          "timestamp": "2026-07-13T18:01:34+02:00",
          "tree_id": "d9e90111eb2e84c40f4dbb45b85adf6169358478",
          "url": "https://github.com/fallow-rs/fallow/commit/0b17f59b8052f78b9ba7a9a66b9c9f48c24faaa5"
        },
        "date": 1783959145092,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 422365024,
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
          "id": "9a377bb2ecb4626f46670efae3cf1cec5e07373c",
          "message": "fix(ci): scope bloat debug profile to CLI",
          "timestamp": "2026-07-13T20:43:45Z",
          "tree_id": "cc2819b9e7f9412956c9e52738f3c55c0fe520a6",
          "url": "https://github.com/fallow-rs/fallow/commit/9a377bb2ecb4626f46670efae3cf1cec5e07373c"
        },
        "date": 1783976056029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 422070152,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18533408,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23812728,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34570200,
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
          "id": "26d268c16940da3423a558fed32f57b1f02ab08e",
          "message": "feat(report): render the fix job summary from a saved envelope via report --from\n\nAdds EnvelopeKind::Fix so `fallow report --from <fix-results.json> --format github-summary` renders the auto-fix job summary natively (advisor plan 027 fix-kind follow-up). No wire change: the fix envelope stays kind-less and is detected by field presence (fixes array + numeric total_fixed); the renderer reuses the existing render_fix_summary (a 1:1 port of summary-fix.jq), so output is byte-identical to the direct run. github-annotations for fix emits nothing, matching the action. Verified: 31 github-format tests, neuter-checked, clippy/fmt clean, empty + non-empty smoke parity.",
          "timestamp": "2026-07-13T23:14:14+02:00",
          "tree_id": "72d9450930da3e83dca19f32c46097ee1697721d",
          "url": "https://github.com/fallow-rs/fallow/commit/26d268c16940da3423a558fed32f57b1f02ab08e"
        },
        "date": 1783977986774,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 422069376,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18533408,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23812728,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34570520,
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
          "id": "c68954e6de9bee9d9895cf11b4e086e2f987023d",
          "message": "fix(graph): bound star re-export propagation work (#1855)\n\nReuse the named-import origin index across star re-export propagation and batch reference deduplication per export.\n\nFixes #1843.",
          "timestamp": "2026-07-14T00:18:41+02:00",
          "tree_id": "8097a0e09139f95f49a944f049c4397da3e44115",
          "url": "https://github.com/fallow-rs/fallow/commit/c68954e6de9bee9d9895cf11b4e086e2f987023d"
        },
        "date": 1783981713208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 422083088,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18534816,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23813624,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34571416,
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
          "id": "3d8d11622bc1529345e167025ec7eef34ebf0300",
          "message": "fix(report): singular noun for a single fix in the github-summary headline\n\nThe --format github-summary auto-fix headline read 'would apply 1 fixes' for a single fix; it now reads '1 fix', branching on the count. Shared by the live fallow fix and report --from paths (both call render_fix_summary). Adds a singular-case test; plural snapshot unchanged.",
          "timestamp": "2026-07-14T06:37:44+02:00",
          "tree_id": "b787e737c42c695cef7eb294e5d8f0485fa585a0",
          "url": "https://github.com/fallow-rs/fallow/commit/3d8d11622bc1529345e167025ec7eef34ebf0300"
        },
        "date": 1784004544996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 422083312,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18534816,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23813624,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34571480,
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
          "id": "5b06369ef95a02f68414220b02198da409f45d3d",
          "message": "chore: release v3.5.0",
          "timestamp": "2026-07-14T07:38:53+02:00",
          "tree_id": "68ca7aab37aede7785c0bc19de300a692045c4ce",
          "url": "https://github.com/fallow-rs/fallow/commit/5b06369ef95a02f68414220b02198da409f45d3d"
        },
        "date": 1784008181841,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 422078472,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18513056,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23791864,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34549720,
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
          "id": "bc7cd251ba3f813b7d7a35712fa140baaf058647",
          "message": "chore(napi): sync package.json / package-lock / index.js to v3.5.0",
          "timestamp": "2026-07-14T08:58:48+02:00",
          "tree_id": "daae30760de81297d79fa7067241c61b7a76d9b6",
          "url": "https://github.com/fallow-rs/fallow/commit/bc7cd251ba3f813b7d7a35712fa140baaf058647"
        },
        "date": 1784013110410,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 422078472,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18513056,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23791864,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34549720,
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
          "id": "c7936189eb0040a97190baafb7522d9a9e392ded",
          "message": "fix: harden analysis boundaries and verification (#1860)\n\nPreserve Git path identity across changed-file and churn flows, redact and canonicalize remote config URLs, and clean completed MCP process trees on every return path.\n\nBound extraction-cache eviction work, align Action and generated-contract verification with current ownership, and add focused Windows PR coverage for platform-specific paths and cleanup.",
          "timestamp": "2026-07-14T11:41:35+02:00",
          "tree_id": "5056d2b5d840cfb50d24214c048864db8db69dbc",
          "url": "https://github.com/fallow-rs/fallow/commit/c7936189eb0040a97190baafb7522d9a9e392ded"
        },
        "date": 1784022671656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 422692496,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18538400,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23827800,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34585272,
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
          "id": "9314f204e4aac4c803bf725056fe502effe5d2e5",
          "message": "fix: harden analysis correctness and verification\n\nCorrect star re-export default semantics, store license tokens through private atomic files, and clean completed MCP process trees. Preserve exact changed-file paths across the GitHub Action boundary.\n\nExercise packaged launchers and repository scripts in CI, refresh security and ownership guidance, and add benchmark-backed indexes for named re-export stubs and workspace bucketing. The higher-risk re-export fixpoint rewrite remains out of scope because current measurements do not justify it.",
          "timestamp": "2026-07-14T14:38:26+02:00",
          "tree_id": "0682a832ceb6207fbdb281a5c023ae8f4abfdd80",
          "url": "https://github.com/fallow-rs/fallow/commit/9314f204e4aac4c803bf725056fe502effe5d2e5"
        },
        "date": 1784034039729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423306576,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18567392,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23862200,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34618456,
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
          "id": "a3f68d3c81c9304ee105c1896ab63da1120d0a17",
          "message": "fix(members): credit interface-typed property dispatch through implementers (#1863)\n\nunused-class-members false-flagged a method reached through a property whose declared type is an interface, on a class that implements that interface (ports-and-adapters / hexagonal DI): useIt(deps: Deps) { deps.greeter.greet() } where Deps.greeter: GreeterPort and class GreeterAdapter implements GreeterPort. The interface dispatch already worked through a direct parameter or variable; this closes the remaining gap where the receiver is reached via an interface property hop.\n\nThe #1785 typed-property hop resolves the terminal to interface GreeterPort, but the terminal credit only handled classes (export_is_class_with_members gates out interfaces), so it never reached the interface-to-implementer propagation that already covers the direct-parameter case. propagate_typed_property_accesses now routes an interface terminal to its canonical export key so the later propagate_interface_member_accesses pass carries the member to every implementing class.\n\nAdditive and false-negative-only. Analyze-only, so no CACHE_VERSION bump. Third in the #1785 / #1788 / #1858 cluster. Thanks @lukeramsden for the clean minimal reduction.\n\nCloses #1863",
          "timestamp": "2026-07-14T16:38:25+02:00",
          "tree_id": "c0583cfcc376ff50a6c5d81f6456c1c2d41f4fce",
          "url": "https://github.com/fallow-rs/fallow/commit/a3f68d3c81c9304ee105c1896ab63da1120d0a17"
        },
        "date": 1784041077344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (fallow)",
            "value": 423514552,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-lsp)",
            "value": 18607360,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-mcp)",
            "value": 23895672,
            "unit": "bytes"
          },
          {
            "name": "Binary Size (fallow-multicall)",
            "value": 34662744,
            "unit": "bytes"
          }
        ]
      }
    ]
  }
}