# beatrizgarcia.net: new site preview

This is a working preview of the redesigned website of Dr Beatriz García. The current site is still at [beatrizgarcia.net](https://www.beatrizgarcia.net/).

Search engines can't see the preview. Every page has a `noindex` tag, `robots.txt` blocks crawlers, and a violet bar at the top of each page says it is a preview.

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

**Change wording.** Open the page's file and click the pencil icon. Edit the text between the tags, then click **Commit changes**. The preview updates within a couple of minutes.

**Replace a photo.** Open `assets/img` and click **Add file → Upload files**. Upload the new photo under exactly the same file name, then commit. Most frames crop the photo to fit, so keep the subject near the centre.

**Change the contact email.** The address lives in one place: line 7 of `assets/js/site.js`. Every email link on the site follows it. The address is put together by the browser, so spam robots can't read it from the pages.

**Menu and footer.** These are repeated in each of the nine pages. A change to them needs the same edit in every file.

## When the new design goes live

1. Delete the line `<meta name="robots" content="noindex, nofollow">` from each page.
2. In `robots.txt`, change `Disallow: /` to `Allow: /`.
3. Hide the preview bar by adding `.preview-bar{display:none}` at the end of `assets/css/site.css`.

The preview also works as the blueprint for rebuilding these pages in WordPress.

`_config.yml` only keeps this README off the published site.

## Credits

- **Text and photographs:** © Beatriz García and the photographers credited on the pages. They may not be reused without permission.
- **Typefaces:** [Newsreader](https://github.com/productiontype/Newsreader) by Production Type and [Schibsted Grotesk](https://github.com/schibsted/schibsted-grotesk) by Schibsted. Both are used under the SIL Open Font License; the licences are in `assets/fonts`.
