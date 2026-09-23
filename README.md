# Haohua Duan — academic homepage

English academic homepage for Haohua Duan (段皓铧), based on [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io). The existing Jekyll, Liquid, Sass, and responsive sidebar architecture is retained.

## Homepage V1

The page contains About Me, Education & Experience, Research Interests, News, Selected Publications, Honors & Awards, Patents, and Teaching, in that order. The student invitation appears at the end of About Me.

The research identity is **Applied Cryptography × Trustworthy AI**. Existing publications are distinguished from current interests in LLM security, agent security, and energy data security.

Homepage V1 was developed on `homepage-v1`. The user has authorized merging to `main` and publishing at https://excellenthh.github.io. GitHub Pages uses the `main` branch root. Missing sidebar resources are hidden; remaining material needs are tracked in TODO.md. See [TODO.md](TODO.md) and [BUILD_CHECKS.md](BUILD_CHECKS.md).

## Content maintenance

- `_config.yml`: profile, site identity, and feature flags.
- `_pages/about.md`: homepage prose, news, patents, teaching, and experience.
- `_data/publications.yml`: all three papers and resource links. PVMark appears once, with its summary and all research resources.
- `_data/awards.yml`: award certificate image path and alternative text.
- `_data/navigation.yml`: navigation labels and explicit section anchors.
- `_includes/paper-card.html` and `_includes/research-links.html`: reusable native `paper-box` presentation.
- `_sass/_homepage.scss`: focused homepage styles, imported by `assets/css/main.scss`.
- `images/`: profile and research images when supplied. Set the corresponding image field only after the file exists.
- `files/`: CV, poster, and slides when supplied. See `files/README.md` for filenames.
- `LINKS.md`: supplied links and pending verification. This inventory does not generate the website; update the relevant configuration or paper record too.

An empty paper URL renders a TODO label. An empty image field renders an HTML/CSS placeholder with no request to a nonexistent file. A missing profile URL or CV is omitted from the sidebar. The existing template favicons are temporary; no personal photo or research figure has been invented or downloaded.

The Scholar crawler has no automatic triggers and its job is disabled. The front-end Scholar and Analytics flags are false. Do not enable them without explicit authorization.

## Adding certificates, posters, and slides

Upload/copy approved files into this repository, then fill their paths in the data files. This is the maintenance workflow for the static site; the page itself does not store visitor uploads.

All homepage images belong in the root `images/` directory:

| Image | Suggested filename | Configuration |
| --- | --- | --- |
| Portrait | `profile.jpg` | `_config.yml`: `author.avatar` |
| PVMark overview | `pvmark.png` | `_data/publications.yml`: PVMark `image` |
| Verifiable FL overview | `verifiable-fl.png` | `_data/publications.yml`: FL `image` |
| Terrace overview | `terrace.png` | `_data/publications.yml`: Terrace `image` |
| Award certificate | `PVMark_CCSC2026_Certificate.jpg` | `_data/awards.yml`: `pvmark.certificate_image` |

Use paths such as `/images/profile.jpg` in configuration. If the supplied file has a different extension, update the path accordingly. Copying a file alone does not replace a TODO; its configuration field must also be filled.


- Certificate: put a JPG, PNG, or WebP in `images/`, then set `pvmark.certificate_image` in `_data/awards.yml`. Honors shows a responsive thumbnail. Clicking it opens the template's image viewer; the link also opens the original image when JavaScript is unavailable.
- Poster: put the PDF in `files/`, then set the `Poster (PDF)` URL in `_data/publications.yml`.
- Slides: the supplied PDF is available for browser viewing. No PPT/PPTX button or upload is currently required.
- `new_tab: true` opens a resource in a new tab, suitable for PDFs; browser/device PDF settings determine whether it previews or downloads. `download: true` offers the original local file for download. PPT/PPTX is paired with a PDF for browser reading.
- More resources can be added as additional items in the paper's `links` array; there is no fixed button limit.

Do not fill a local URL until its file exists. Missing files remain non-clickable TODO labels. For new awards, check the wording against their certificate before removing any TODO.

## Currently integrated assets

The supplied originals remain in `images/`. Portrait and certificate are connected. Publication figures `pvmark.png`, `verifiable-fl.png`, and `terrace.png` are Poppler renders of `PVMark_framework.pdf`, `VPNNT_framework_1.pdf`, and `Terrace_example.pdf`, respectively; each supports full-size viewing and a source PDF link. The second FL diagram is available as Training (PDF).

PVMark Paper, Poster (PDF), and Slides (PDF) now point to `images/PVMark-duan.pdf`, `images/PVMark_Poster.pdf`, and `images/PVMark_slides.pdf`. These existing files do not need to be copied into `files/`. CV is still missing. The original PPT/PPTX button was removed at the user's request; Slides (PDF) remains available.

The certificate supplies the conference name China Cyber Security Congress and the award text 最佳海报, translated on the page as Best Poster Award.

## Local build and preview

Use Ruby 3.2 with Bundler 2.5.23, preferably Linux or WSL on Windows. GitHub Pages dependencies are pinned to `github-pages 232`, Jekyll 3.10.0, and Nokogiri 1.16.7. Dependency reference: https://pages.github.com/versions/.

```bash
gem install --user-install bundler -v 2.5.23
export PATH="$(ruby -r rubygems -e 'puts Gem.user_dir')/bin:$PATH"
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll build --safe --strict_front_matter --trace
bash run_server.sh
```

Open http://127.0.0.1:4000. The preview script uses polling so edits on a Windows-mounted WSL directory are detected. Restart the server after changing `_config.yml`. Native Windows Ruby installation has not been tested; use the WSL path above.

`AGENTS.md`, `HOMEPAGE_SPEC.md`, `LINKS.md`, `TODO.md`, `BUILD_CHECKS.md`, and maintenance READMEs are excluded from the generated site. The license and upstream credits remain in this repository.

## Publication, only when explicitly requested

Before publication, supply the missing material, resolve the award wording and patent-link TODOs, build again, and check desktop/mobile layouts and resource links. Then review GitHub Pages source settings for `ExcellentHH/excellenthh.github.io`. The release uses GitHub Pages' built-in branch deployment; no custom publishing workflow is required.

## Credits

Based on RayeRen's AcadHomepage and its Minimal Mistakes / Academic Pages foundations. Preserve the repository LICENSE and the existing third-party Font Awesome, Academicons, and theme attribution notices.

## Contact and teaching details

Email is displayed as [at] / [dot] text in the sidebar and recruitment section; the homepage does not emit a raw mailto address. This is simple obfuscation, not guaranteed crawler protection. DBLP and ORCID are connected after cross-checking publication identifiers. Each paper record uses `corresponding_authors` to mark the requested names with a superscript asterisk. Teaching semesters are explicit; update the current-semester note when Fall 2026 ends.

Google Scholar links use the requested author search because no personal profile exists. Both sidebar and publication links identify this as a search. The About Me intro banner is removed; the sidebar includes LLM Security, while research details remain in Research Interests.
