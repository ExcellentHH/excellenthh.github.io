# Homepage V1 — implementation and checks

## Personal favicon — 2026-10-01

Replaced the template's white A on a blue circle with the user-requested white D, preserving the blue color and transparent corners. `images/favicon.svg` is the editable vector source; the five PNG icons and six-size `favicon.ico` use the same geometry. Browser links and manifest icon URLs include a version marker to refresh cached assets.

Modified `_includes/head/custom.html`, `images/site.webmanifest`, the six existing icon assets, README.md, TODO.md, and this report; added `images/favicon.svg`. The production Jekyll build passed using the existing WSL dependency cache. Generated HTML references, manifest targets, PNG dimensions/transparency, ICO sizes, and `git diff --check` passed. The D design was visually inspected. No new TODOs; the existing optional CV remains missing. The user explicitly authorized publication on 2026-10-01; deployment is checked after pushing to `main`.

Date: 2026-09-23 (Asia/Shanghai)

## Delivery state

- Current branch: `homepage-v1` (created from the existing local `main`).
- Changes remain in the local working tree; no commit, push, merge, or publication was performed.
- The AcadHomepage/Jekyll architecture is retained. The nine sections (Featured Research removed at the user's request), three consistent publication cards, profile links, recruitment content, and supplied patent/teaching/education information are implemented.
- Missing material is deliberately represented by visible TODOs. Full publication readiness still depends on `TODO.md`; no academic information was invented.
- `AGENTS.md.md`, `HOMEPAGE_SPEC.md.md`, and `LINKS.md.md` were originally untracked. Their filenames were normalized to a single `.md` extension. AGENTS.md retains its supplied contents; HOMEPAGE_SPEC.md now starts with the user's follow-up decisions, and LINKS.md consolidates supplied references and pending resources.

## Build environment and dependency repair

The existing Ubuntu/WSL installation had no Ruby toolchain. Ruby 3.2.3 and build prerequisites were installed there; Bundler and site gems were installed in the user's WSL directories, outside the repository.

The first frozen install of the template lock failed because `nokogiri 1.13.3` requires Ruby below 3.2. Dependencies were therefore aligned with the [official GitHub Pages dependency list](https://pages.github.com/versions/): `github-pages 232`, Jekyll 3.10.0, and Nokogiri 1.16.7. Gemfile.lock was regenerated with Bundler 2.5.23. No frontend framework or theme migration was introduced. WEBrick supports local serving on modern Ruby; obsolete Hawkins live serving was replaced by Jekyll's built-in live reload.

## Checks performed

| Check | Result |
| --- | --- |
| `JEKYLL_ENV=production bundle exec jekyll build --safe --strict_front_matter --trace` | PASS, exit 0 |
| Production output built separately from the running preview | PASS; canonical URL is `https://excellenthh.github.io/`, with no live-reload script |
| `bundle exec jekyll doctor` | PASS: Everything looks fine |
| `bash run_server.sh` | PASS; local server at http://127.0.0.1:4000/ |
| WSL edit detection | Fixed using `--force_polling`; regeneration observed after a source edit |
| YAML, Liquid includes, Sass compilation | PASS |
| Nine required section IDs and order | PASS |
| No Featured section and exactly three Selected Publication cards | PASS |
| Unique HTML IDs, local href/src targets, and section anchors | PASS |
| `/about/` and `/about.html` redirects, sitemap, CSS, JavaScript, and manifest icons | PASS |
| Internal documents and build/maintenance files excluded from output | PASS |
| Empty links, demo academic content, Scholar requests, Analytics requests | None in the checked homepage |
| Certificate image/lightbox markup, Slides/Poster PDF new-tab links, PPTX download attribute | PASS with an in-memory data fixture; no real assets fabricated |
| `git diff --check` | PASS |

The production build was generated into a temporary directory outside the repository for the final output checks, so the live preview could not overwrite its production URL metadata.

## Browser verification

Checked using local headless Microsoft Edge via Playwright. Screenshots were inspected at desktop and mobile sizes; automated checks covered these viewports:

| Viewport | Horizontal overflow | JavaScript errors | Failed page/resource requests |
| --- | --- | --- | --- |
| 1440 × 1000 | None | None | None |
| 768 × 1024 | None | None | None |
| 390 × 844 | None | None | None |
| 320 × 740 | None | None | None |

The profile's Email/GitHub links remain visible at all four sizes. Overflow navigation opens and closes, reports its expanded state, and closes after selecting a section. The PVMark Patent link was clicked at every viewport. A discovered mobile scroll-offset problem was repaired: the target heading now lands below the sticky navigation, rather than behind it. Resource TODOs are non-clickable spans, and figure/photo TODOs do not request nonexistent files.

## Follow-up: certificate and PVMark resources

The Featured section, its navigation entry, and unused Featured styles were removed. The patent cross-link now targets `#publication-pvmark`. PVMark keeps its short summary and a single card with Paper, Code, Slides (PDF), PPTX download, Poster (PDF), Patent, and USENIX entries.

`_data/awards.yml` and `_includes/award-certificate.html` add a responsive certificate image under Honors with an enlargement link. Missing certificates remain an explicit TODO. Approved image files go in `images/`; PDFs and original slide files go in `files/`. Instructions and pending items were updated in README.md, files/README.md, LINKS.md, TODO.md, and the specification's follow-up note.

After this follow-up, production build, nine-section/card-count checks, local link/anchor checks, four-viewport browser checks, and diff checks passed again. A separate in-memory Jekyll rendering fixture exercised the normally hidden certificate/PDF/PPTX branches and verified their HTML attributes. It did not write dummy academic material into the repository or preview.

## Follow-up: About Me emphasis

At the user's request, About Me now leads with **LLM Security · AI Agent Security**, labeled **Current research interests**. **Applied Cryptography × Trustworthy AI** remains immediately below as the supporting research identity. Changed `_pages/about.md` and `_sass/_homepage.scss`, with the decision recorded in HOMEPAGE_SPEC.md. No new academic claims or asset TODOs were introduced.

Production Jekyll build and `git diff --check` passed. A focused browser check at 1440, 768, 390, and 320 px confirmed no horizontal overflow and a larger topic heading than the supporting identity: 27 px on desktop/tablet, 24.75 px on mobile, versus 16.5 px for the identity. The mobile heading keeps each topic on its own line. The existing missing-material TODOs remain unchanged.

## Follow-up: teaching and education details

Added the user's newly supplied details to `_pages/about.md`: Data Structures teaching assistant at Shanghai Jiao Tong University during Ph.D. studies; Ph.D. advisors Liyao Xiang (向立瑶) and Xinbing Wang (王新兵); and 吉林大学唐敖庆理科试验班（计算机班） for the undergraduate program. No teaching semester or unofficial program translation was invented. The source of these additions was recorded in HOMEPAGE_SPEC.md, and README.md now contains an explicit image-file/configuration table.

Production Jekyll build, generated-HTML checks for these details, and `git diff --check` passed. No new material TODOs were introduced. A separate Chinese homepage has not been added; the primary language remains English.

## Follow-up: About Me mentors and verified English program wording

Updated `_pages/about.md` to name Liyao Xiang and Xinbing Wang as Ph.D. advisors in About Me, add the user-provided undergraduate experience studying in Prof. En Wang's lab, and link all three names to verified personal homepages. Education entries use the same advisor links.

The undergraduate program is now **Tang Aoqing Program (Computer Science)**. The base name appears on JLU's official School of Public Foreign Language Education English page; the subject in parentheses is the user's supplied track, not a claimed exact official translation of the complete Chinese title. Sources and limitations are recorded in LINKS.md, and the revised decisions are recorded in HOMEPAGE_SPEC.md. No formal lab role, duration, or undergraduate research output was inferred.

Production Jekyll build and `git diff --check` passed. Generated-HTML inspection confirmed the About Me text, four clickable mentor/program references, and consistent English program wording. Existing asset TODOs remain unchanged.

## Follow-up: professor titles and CCF-A labels

About Me and Education now use **Prof. Liyao Xiang and Prof. Xinbing Wang** with the existing homepage links. Publication author lists retain plain names. Each of the three publication cards displays a CCF-A label next to its venue, linked to the official CCF directory; USENIX Security, TDSC, and TIFS were confirmed in its A-class lists.

Changed files: `_pages/about.md`, `_data/publications.yml`, `_includes/paper-card.html`, `_sass/_homepage.scss`, `HOMEPAGE_SPEC.md`, `LINKS.md`, and this report. Production Jekyll build and `git diff --check` passed. Rendered HTML checks confirmed both advisor mentions, unchanged author formatting, and three ranking links. Edge browser checks at 1440, 390, and 320 pixels confirmed visible labels without horizontal overflow. No new TODOs were introduced; existing asset TODOs remain. Work remains local on `homepage-v1` without merge or publication.

## Follow-up: coherent research narrative and application focus

Reviewed the complete homepage copy, including profile text, research interests, publication cards, news, awards, patents, recruitment, teaching, and education. Revised About Me, the research vision, Research Interests, and Prospective Students to connect the cryptographic foundation with LLM/agent security and an intended energy/power application setting. The application paragraph explicitly covers data security and privacy alongside trustworthy LLM/agent use. Aspirational wording preserves the distinction between existing work and planned exploration; no new achievements or projects were added.

Changed files: `_pages/about.md`, `HOMEPAGE_SPEC.md`, and this report. The production Jekyll build, rendered-content checks, and `git diff --check` passed. The live preview was checked at 1440, 390, and 320 pixels without horizontal overflow, and its desktop research section was visually inspected. All nine sections, three publication cards, and three CCF-A labels remain present. Existing material/reference TODOs remain unchanged; no new TODOs were introduced. No merge or publication was performed.

## Follow-up: supplied images and PDF resources

Connected the supplied portrait and award certificate. Rendered three PNG previews with Poppler from PVMark_framework.pdf, VPNNT_framework_1.pdf, and Terrace_example.pdf. The full diagrams are preserved, with clickable enlargement and links to their source PDFs. VPNNT_framework_2.pdf is available as Training (PDF). PVMark's supplied paper (21 pages), poster (1 page), and slides (7 pages) are linked at their original paths in images/; no source files were moved or edited.

The certificate confirms **China Cyber Security Congress (CCSC 2026)** and **最佳海报**. Updated News and Honors accordingly; Best Poster Award is the English translation of the Chinese award text, not an English award name printed on the certificate.

Production Jekyll build and `git diff --check` passed. Edge checks at 1440, 390, and 320 pixels confirmed five loaded content images, no remaining image placeholders, no horizontal overflow or JavaScript errors, and working enlargement for all three figures and the certificate. All seven supplied PDF URLs returned successful application/pdf responses. Desktop and mobile screenshots were visually inspected. Dense figure details are available through enlargement and the vector PDF links. Original PPT/PPTX remains absent and its download cannot yet be tested. No hashes were computed.

Changed source/configuration files: `_config.yml`, `_data/publications.yml`, `_data/awards.yml`, `_includes/paper-card.html`, `_sass/_homepage.scss`, `_pages/about.md`. Added generated assets: `images/pvmark.png`, `images/verifiable-fl.png`, `images/terrace.png`. Updated maintenance documents: README.md, files/README.md, TODO.md, LINKS.md, HOMEPAGE_SPEC.md, and this report. The user-supplied originals remain in images/. Work remains local on `homepage-v1`, without merge or publication.

## Follow-up: contact details, authorship, links, and teaching semesters

Connected the user-supplied PVMark repository and removed the PPTX button and requirement. Displayed email as `duanhaohua [at] ecust [dot] edu [dot] cn` in the sidebar and recruitment section, without a raw mailto address in generated homepage HTML. Added per-paper corresponding-author metadata for Liyao Xiang, rendered as superscript asterisks with a legend. Teaching now records CS149 Data Structure and Algorithms (TA, Fall 2022) and New Computer Networks (Instructor, Fall 2026, current semester), based on the user's details.

DBLP was matched by publications and coauthors. ORCID 0000-0002-7508-6852 was cross-checked against its public person/works API and Crossref's matching TDSC author metadata, rather than relying solely on DBLP's inferred-ID marker. Both patent destinations were verified; the second now links to the B publication, with no patent TODO line. Sources are recorded in LINKS.md.

Production Jekyll build, generated-HTML checks, and `git diff --check` passed. Confirmed two obfuscated email displays, three corresponding-author marks on the intended author, profile/code/patent links, precise teaching details, and no PVMark resource TODOs or PPTX button. Edge checks at 1440, 390, and 320 pixels passed without horizontal overflow; sidebar and publication screenshots were visually inspected. No merge, push, publication, or content hashes.

Changed implementation files: `_config.yml`, `_pages/about.md`, `_data/publications.yml`, `_includes/author-profile.html`, `_includes/paper-card.html`, `_sass/_homepage.scss`. Updated README.md, files/README.md, LINKS.md, TODO.md, HOMEPAGE_SPEC.md, and this report. Main remaining material: Google Scholar profile and CV. Email obfuscation is a presentation measure, not guaranteed protection against crawlers or exposure through public source documents.

## Follow-up: author search, education placement, and news

Google Scholar now uses the requested `author:"Haohua Duan"` search URL in the sidebar and Full publication list, with search labels rather than implying a personal profile. Removed the About Me research banner and its unused styles. Moved Education & Experience directly after About Me and updated navigation. The sidebar adds LLM Security and hides unavailable profile/CV entries instead of displaying TODOs.

Added News for the user-provided June 2025 Ph.D. in Engineering; TDSC acceptance on 12 January 2024, verified in the lower-left history on the published PDF's first page; and TIFS acceptance on 11 June 2023, explicitly confirmed by the user after IEEE access was unavailable. The TDSC source and both dates' provenance are in LINKS.md. No publication date was substituted for acceptance.

Production Jekyll build and `git diff --check` passed. Rendered checks confirmed the nine-section order, exact decoded Scholar query, hidden sidebar TODOs, and news dates. Edge layout and Education navigation passed at 1440, 390, and 320 pixels, with desktop/mobile screenshots inspected. The first navigation assertion incorrectly expected smooth scrolling to change the URL hash; validation was corrected to check the actual heading position below the masthead, matching the template's existing behavior. No navigation implementation change was required.

Changed `_pages/about.md`, `_data/navigation.yml`, `_config.yml`, `_includes/author-profile.html`, `_sass/_homepage.scss`, plus HOMEPAGE_SPEC.md, LINKS.md, TODO.md, README.md, and this report. CV remains optional and hidden until supplied. The user-modified certificate and its newly supplied backup were left untouched. Changes remain local on `homepage-v1` without merge or publication.

## Follow-up: concise student invitation and month-only news

Removed Prospective Students and its navigation entry. About Me now ends with the user's requested invitation for self-motivated undergraduate and graduate students interested in LLM security, trustworthy machine learning, information security, and privacy protection, with the obfuscated email. The page has eight main sections. Acceptance news displays 2026.06 for PVMark (user supplied), 2024.01 for TDSC, and 2023.06 for TIFS; exact known dates remain documented in LINKS.md.

Changed `_pages/about.md`, `_data/navigation.yml`, README.md, HOMEPAGE_SPEC.md, LINKS.md, and this report. Production build, generated-content checks, and `git diff --check` passed. Browser checks at 1440, 390, and 320 pixels confirmed the revised content and no horizontal overflow. No new TODOs; CV remains optional and hidden. Work remains on `homepage-v1` without merge or publication.

## Follow-up: bilingual identity and complete clickable-link audit

Updated `_pages/about.md` to add 华东理工大学 after ECUST and bold both USENIX Security 2026 mentions in News. Updated `_config.yml` to show Lecturer（讲师） / Master's Supervisor（硕士生导师）. HOMEPAGE_SPEC.md records these preferences.

The homepage has **46 anchor elements, 38 unique destinations, and one navigation toggle button**. All anchors have nonempty, concrete URLs. The 38 destinations comprise 10 valid page anchors, 11 local assets (7 PDFs and 4 linked images), and 17 external destinations. All local assets returned HTTP 200 with appropriate content types. No missing target or 404 was found. The obfuscated email intentionally remains plain text; the unavailable CV is hidden.

Clicked desktop navigation, the mobile overflow menu, all visible section links, both patent/publication cross-links, all seven PDF buttons (correct URLs opened in new tabs), and all four image viewers including next/close controls. Checked 1440, 390, and 320 pixel layouts: no horizontal overflow or JavaScript errors. Bilingual sidebar and About Me screenshots were inspected. The mobile test was adjusted to select the visible About Me link rather than the intentionally hidden duplicate Homepage link. Production Jekyll build and `git diff --check` passed.

External results distinguish destination content from anti-bot pages: **12 accessible, 5 limited by third-party access checks**. ORCID's JavaScript page was verified in a browser as Haohua Duan's record. Search, bibliography and DOI identifiers remain the previously verified URLs. No CAPTCHA was solved or access restriction bypassed.

| Link | Destination | Result |
| --- | --- | --- |
| Google Scholar (search), Google Scholar (author search) | https://scholar.google.com/scholar?q=author%3A%22Haohua%20Duan%22 | Human verification required |
| GitHub | https://github.com/ExcellentHH | Content accessible (HTTP 200) |
| DBLP | https://dblp.org/pid/351/0141.html | Bot protection / access denied in automated browser |
| ORCID | https://orcid.org/0000-0002-7508-6852 | Content accessible (HTTP 200) |
| East China University of Science and Technology (ECUST, 华东理工大学) | https://faculty.ecust.edu.cn/cise/dhh/main.htm | Content accessible (HTTP 200) |
| Prof. Liyao Xiang | https://xiangliyao.cn/ | Content accessible (HTTP 200) |
| Prof. Xinbing Wang | https://www.cs.sjtu.edu.cn/~wang-xb/ | Content accessible (HTTP 200) |
| Tang Aoqing Program | https://sflc.jlu.edu.cn/en/Teaching/Undergraduates.htm | Content accessible (HTTP 200) |
| En Wang | https://teachers.jlu.edu.cn/WE/zh_CN/index.htm | Content accessible (HTTP 200) |
| CCF-A | https://www.ccf.org.cn/Academic_Evaluation/NIS/ | Slider verification required |
| Code | https://github.com/ExcellentHH/PVMark | Content accessible (HTTP 200) |
| USENIX | https://www.usenix.org/conference/usenixsecurity26/presentation/duan | Content accessible (HTTP 200) |
| Paper | https://doi.org/10.1109/TDSC.2024.3369658 | DOI resolves; IEEE unusual-traffic restriction |
| Code | https://github.com/ExcellentHH/sumcheck-matrix-ops | Content accessible (HTTP 200) |
| Paper | https://doi.org/10.1109/TIFS.2023.3288454 | DOI resolves; IEEE unusual-traffic restriction |
| Patent record | https://patents.google.com/patent/CN119577708B/en | Content accessible (HTTP 200) |
| Patent record | https://patents.google.com/patent/CN119579975B/en | Content accessible (HTTP 200) |

Changed files: `_pages/about.md`, `_config.yml`, HOMEPAGE_SPEC.md, LINKS.md, and this report. No new missing-resource TODOs; CV remains optional and hidden. Third-party access limits remain a verification limitation. Work remains on `homepage-v1` without merge or publication.

## Remaining limitations

- The final CLI output retains a non-fatal Faraday notice about its optional retry middleware. Build and doctor exit codes are 0.
- Early builds warned about unauthenticated GitHub metadata and an API rate limit. SEO now uses the explicitly configured site URL without evaluating `site.github.url`; those warnings did not appear in the final production build.
- Native Windows Ruby, Safari, Firefox, and remote GitHub Pages builds were not tested. Remote builds were not triggered because publication was not authorized.
- All currently clickable external destinations were checked in the latest audit above. Five require third-party verification or restrict automated access; full scientific contents and future availability are not certified by a link check.
- Portrait, research figures, certificate, PDFs, PVMark Code URL, DBLP, ORCID, and patent links are integrated. CV remains optional and hidden; see TODO.md. Google Scholar uses an author search, with no personal profile required. PPT/PPTX was removed from requirements at the user's request.
- No SHA-256 or other content-hash consistency checks were performed.

## Complete file change list

Paths below are relative to this repository. They include the original untracked handoff documents under their normalized filenames.

| Status | File |
| --- | --- |
| Modified | `.github/FUNDING.yml` |
| Modified | `.github/workflows/google_scholar_crawler.yaml` |
| Modified | `.gitignore` |
| Modified | `Gemfile` |
| Modified | `Gemfile.lock` |
| Modified | `README.md` |
| Modified | `_config.yml` |
| Modified | `_data/navigation.yml` |
| Modified | `_includes/analytics.html` |
| Modified | `_includes/author-profile.html` |
| Modified | `_includes/head.html` |
| Modified | `_includes/head/custom.html` |
| Modified | `_includes/masthead.html` |
| Modified | `_includes/scripts.html` |
| Modified | `_includes/seo.html` |
| Modified | `_layouts/default.html` |
| Modified | `_pages/about.md` |
| Modified | `_sass/_page.scss` |
| Modified | `assets/css/main.scss` |
| Deleted | `images/500x300.png` |
| Modified | `images/site.webmanifest` |
| Modified | `run_server.sh` |
| New / previously untracked | `.gitattributes` |
| New / previously untracked | `AGENTS.md` |
| New / previously untracked | `BUILD_CHECKS.md` |
| New / previously untracked | `HOMEPAGE_SPEC.md` |
| New / previously untracked | `LINKS.md` |
| New / previously untracked | `TODO.md` |
| New / previously untracked | `_data/awards.yml` |
| New / previously untracked | `_data/publications.yml` |
| New / previously untracked | `_includes/award-certificate.html` |
| New / previously untracked | `_includes/paper-card.html` |
| New / previously untracked | `_includes/research-links.html` |
| New / previously untracked | `_sass/_homepage.scss` |
| New / previously untracked | `assets/js/homepage.js` |
| New / previously untracked | `files/README.md` |

## Release preflight — user authorized merge and publication

The user explicitly requested final review, merge to main, and publication on 2026-09-23. Refreshed origin refs; local and remote main share the same starting commit, with no remote changes to reconcile. Repository permissions include administration and push. Pages was not enabled; the release will configure its built-in branch deployment from main at /.

Production `jekyll build --safe --strict_front_matter --trace`, `jekyll doctor`, and whitespace checks pass. The isolated production output has the correct HTTPS canonical URL, all eight sections and three publication cards, no visible TODO or development URLs, valid local assets/anchors, and no analytics/Scholar crawler scripts. Maintenance documents and the unreferenced certificate backup are excluded. The backup is retained locally and ignored by Git. The complete desktop/mobile and external-link audit immediately preceding release remains applicable; no public-facing behavior changed during preflight.

CV remains optional and hidden. Five external destinations may show third-party verification; this is documented in the clickable-link audit and does not indicate missing URLs. No hash-based asset checks were run. Deployment success must be verified against the live site and GitHub Pages build after pushing main.

Release staging review also marked `*.pdf` as binary to prevent Windows line-ending normalization. All seven staged PDFs open without parser repair. Markdown trailing spaces in the original handoff document are intentional hard breaks and are allowed by its Git whitespace attribute.
