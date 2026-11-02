/* beatrizgarcia.net — small helpers, no tracking, no cookies. */

/* The contact address, in one place. It is assembled here rather than written
   into the pages, so spam harvesters can't read it.
   When office@beatrizgarcia.net exists, change these two words to
   ['office', 'beatrizgarcia.net'] and every email link on the site follows. */
var EMAIL = ['drbeatrizgarcia', 'gmail.com'];

(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  var address = EMAIL[0] + '@' + EMAIL[1];

  /* Email links: <a class="js-email" data-subject="...">. */
  document.querySelectorAll('.js-email').forEach(function (a) {
    var subject = a.getAttribute('data-subject');
    a.setAttribute('href', 'mailto:' + address + (subject ? '?subject=' + encodeURIComponent(subject) : ''));
    if (a.hasAttribute('data-show-address')) { a.textContent = address; }
  });

  /* Mobile menu. */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* Videos load from YouTube (privacy-enhanced mode) only after a click. */
  document.querySelectorAll('.video[data-youtube]').forEach(function (box) {
    var btn = box.querySelector('.video-play');
    if (!btn) { return; }
    btn.addEventListener('click', function () {
      var id = box.getAttribute('data-youtube');
      var frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
      frame.title = box.getAttribute('data-title') || 'Video';
      frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      frame.setAttribute('allowfullscreen', '');
      box.innerHTML = '';
      box.appendChild(frame);
      frame.focus();
    });
  });

  /* Copy buttons on the press kit. */
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.querySelector(btn.getAttribute('data-copy'));
      if (!target) { return; }
      var text = target.innerText.trim();
      var done = function () {
        var label = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = label; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { selectText(target); });
      } else {
        selectText(target);
      }
    });
  });

  function selectText(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  /* Print button (press kit fact sheet). */
  document.querySelectorAll('.js-print').forEach(function (btn) {
    btn.addEventListener('click', function () { window.print(); });
  });
})();
