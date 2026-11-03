# dr.beatrizgarcia.net

This repository holds the website of Dr Beatriz García, published at [dr.beatrizgarcia.net](https://dr.beatrizgarcia.net/). Her archive of earlier publications, talks and projects stays at [beatrizgarcia.net](https://www.beatrizgarcia.net/), and a slim bar at the top of every page links to it.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about/index.html` |
| Press kit | `about/press/index.html` |
| Advisory | `advisory/index.html` |
| Research | `research/index.html` |
| Speaking | `speaking/index.html` |
| Media | `media/index.html` |
| Euphoric Cities | `euphoric-cities/index.html` |
| Contact | `contact/index.html` |

The site is plain HTML and CSS. It has no build step, no tracking and no cookies. Videos load from YouTube's privacy-enhanced mode, and only when someone presses play.

## Making changes on GitHub

**Change wording.** Open the page's file and click the pencil icon. Edit the text between the tags, then click **Commit changes**. The site updates within a couple of minutes.

**Replace a photo.** Open `assets/img` and click **Add file → Upload files**. Upload the new photo under exactly the same file name, then commit. Most frames crop the photo to fit, so keep the subject near the centre.

**Change the contact email.** The address lives in one place: line 7 of `assets/js/site.js`. Every email link on the site follows it. The address is put together by the browser, so spam robots can't read it from the pages.

**Menu, footer and archive bar.** These are repeated in each of the nine pages. A change to them needs the same edit in every file.

## Search engines and sharing

- `robots.txt` lets search engines in and points them to `sitemap.xml`, which lists the nine pages. Add any new page there too.
- Each page names its own address (`canonical`) and carries a share image, `assets/img/og-card.jpg`, used when a link is posted on LinkedIn or elsewhere.
- The home page describes Dr Beatriz García for search engines in a small block of structured data.

## Domain

The `CNAME` file connects this site to dr.beatrizgarcia.net. Don't delete it. `_config.yml` only keeps this README off the published site.

## Credits

- **Text and photographs:** © Beatriz García and the photographers credited on the pages. They may not be reused without permission.
- **Typefaces:** [Newsreader](https://github.com/productiontype/Newsreader) by Production Type and [Schibsted Grotesk](https://github.com/schibsted/schibsted-grotesk) by Schibsted. Both are used under the SIL Open Font License; the licences are in `assets/fonts`.
