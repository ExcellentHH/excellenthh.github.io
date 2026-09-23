# Homepage V1 — outstanding material

No missing academic information has been inferred. Missing sidebar resources are hidden; this document retains the outstanding items. These items must be resolved before claiming the specification's full V1 acceptance criteria are met.

## Required assets and links

- [x] Supplied profile photograph: `images/profile.jpg`; set `author.avatar` in `_config.yml`.
- [x] Use a Google Scholar author-search link; a personal profile is not required.
- [x] DBLP and ORCID profiles cross-checked and connected in `_config.yml`.
- [ ] Optional for now: supply CV at `files/Haohua_Duan_CV.pdf`; set `author.cv` to reveal its sidebar link.
- [x] Supply PVMark overview figure: `images/pvmark.png`.
- [x] Supply TDSC overview figure: `images/verifiable-fl.png`.
- [x] Supply TIFS/Terrace overview figure: `images/terrace.png`.
- [x] Set each supplied image path in `_data/publications.yml`; keep the complete diagram visible.
- [x] PVMark Paper uses the supplied `/images/PVMark-duan.pdf`.
- [x] PVMark Code URL supplied and connected: https://github.com/ExcellentHH/PVMark.
- [x] PVMark poster linked at `images/PVMark_Poster.pdf`.
- [x] PVMark slides linked at `images/PVMark_slides.pdf`.

- PPTX button removed by user request; no original-presentation upload is required.
- [x] Supply the award certificate JPG/PNG/WebP, e.g. `images/PVMark_CCSC2026_Certificate.jpg`; set `pvmark.certificate_image` in `_data/awards.yml`.

Portrait and certificate are user-supplied. The three PNG figures are rendered from the supplied PDFs, without changing their content. Original files remain in images/. TDSC/TIFS Paper links still use their supplied DOI URLs.

## Wording and reference confirmation

- [x] TIFS acceptance date confirmed by the user as 2023-06-11 and added to News.

- [x] Certificate confirms China Cyber Security Congress (CCSC 2026) and 最佳海报. News and Honors now use Best Poster Award (最佳海报); the English award wording is a translation of the Chinese certificate text.
- [x] CN119579975B granted-patent URL verified and connected.
- [x] School email displayed using [at] / [dot] at the user's request; no raw mailto link is emitted in homepage HTML.
- [ ] Confirm the selected tagline: Applied Cryptography × Trustworthy AI.
- [ ] Optional: approve “Prior experience in cryptography is helpful but not required.” This optional sentence is currently omitted.
- [ ] Optional: replace the template favicon set with personal icons; update the manifest if filenames change.
- [ ] Before publication, check all external resource destinations. This implementation does not claim independent verification of supplied academic records.

## Release boundary

- [x] Supplied image/PDF integration checked with a production build, resource requests, and desktop/mobile previews. Repeat after future additions.
- [x] Verify the real certificate opens in the image viewer.
- [x] Verify supplied PDF responses and image loading, with figure enlargement on mobile. Full-size PNGs and vector PDFs are available for dense diagram details.
- [x] User explicitly authorized final review, merging to main, and publication. Future releases still require authorization.
