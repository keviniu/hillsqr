/* Hillsqr cookie consent + Google tag (loads only after the visitor accepts) */
(function () {
  var TAG_ID = 'AW-18546763041';
  var CONVERSION_LABEL = ''; // e.g. 'AbCdEfGhIjK' from Google Ads (conversion action); leave empty until you have it
  var KEY = 'hillsqr_cookie_choice';

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied',
    ad_personalization: 'denied', analytics_storage: 'denied'
  });

  var loaded = false;
  function loadTag() {
    if (loaded) return; loaded = true;
    gtag('consent', 'update', {
      ad_storage: 'granted', ad_user_data: 'granted',
      ad_personalization: 'granted', analytics_storage: 'granted'
    });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + TAG_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', TAG_ID);
  }

  function getChoice() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function setChoice(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function clearChoice() { try { localStorage.removeItem(KEY); } catch (e) {} }

  function hideBanner() {
    var b = document.getElementById('cookie-banner');
    if (b) b.remove();
  }
  function showBanner() {
    if (document.getElementById('cookie-banner')) return;
    var b = document.createElement('div');
    b.id = 'cookie-banner';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Cookie choices');
    b.innerHTML =
      '<p>We use a Google tag, with cookies, to measure how well our online advertising works. ' +
      'It only runs if you accept. <a href="privacy.html">Privacy &amp; cookies</a></p>' +
      '<div class="cookie-actions">' +
      '<button type="button" class="btn btn-outline" id="cookie-reject">Reject</button>' +
      '<button type="button" class="btn btn-primary" id="cookie-accept">Accept</button></div>';
    document.body.appendChild(b);
    document.getElementById('cookie-accept').onclick = function () { setChoice('granted'); hideBanner(); loadTag(); };
    document.getElementById('cookie-reject').onclick = function () { setChoice('denied'); hideBanner(); };
  }

  // Called by the enquiry form after a successful send.
  window.hillsqrConversion = function () {
    if (!loaded) return;
    gtag('event', 'generate_lead');
    if (CONVERSION_LABEL) gtag('event', 'conversion', { send_to: TAG_ID + '/' + CONVERSION_LABEL });
  };
  // Lets the privacy page reopen the choice.
  window.hillsqrCookieSettings = function () { clearChoice(); showBanner(); };

  function init() {
    var c = getChoice();
    if (c === 'granted') loadTag();
    else if (c !== 'denied') showBanner();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
