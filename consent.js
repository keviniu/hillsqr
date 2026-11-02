/* Hillsqr cookie consent + Google tag (consent mode: cookies stay off until the visitor accepts) */
(function () {
  var TAG_ID = 'AW-18546763041';
  var CONVERSION_LABEL = ''; // e.g. 'AbCdEfGhIjK' from Google Ads (conversion action); leave empty until you have it
  var KEY = 'hillsqr_cookie_choice';

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  // Default: nothing stored until the visitor accepts.
  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied',
    ad_personalization: 'denied', analytics_storage: 'denied',
    wait_for_update: 500
  });
  gtag('js', new Date());
  gtag('config', TAG_ID);
  // The gtag.js library itself is loaded by the <script async src="...gtag/js?id=AW-..."> tag in each page's <head>.

  function getChoice() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function setChoice(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function clearChoice() { try { localStorage.removeItem(KEY); } catch (e) {} }

  function grant() {
    gtag('consent', 'update', {
      ad_storage: 'granted', ad_user_data: 'granted',
      ad_personalization: 'granted', analytics_storage: 'granted'
    });
  }
  function deny() {
    gtag('consent', 'update', {
      ad_storage: 'denied', ad_user_data: 'denied',
      ad_personalization: 'denied', analytics_storage: 'denied'
    });
  }

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
      '<p>We use a Google tag to measure how well our online advertising works. ' +
      'Cookies are only set if you accept. <a href="privacy.html">Privacy &amp; cookies</a></p>' +
      '<div class="cookie-actions">' +
      '<button type="button" class="btn btn-outline" id="cookie-reject">Reject</button>' +
      '<button type="button" class="btn btn-primary" id="cookie-accept">Accept</button></div>';
    document.body.appendChild(b);
    document.getElementById('cookie-accept').onclick = function () { setChoice('granted'); hideBanner(); grant(); };
    document.getElementById('cookie-reject').onclick = function () { setChoice('denied'); hideBanner(); deny(); };
  }

  // Called by the enquiry form after a successful send.
  window.hillsqrConversion = function () {
    gtag('event', 'generate_lead');
    if (CONVERSION_LABEL) gtag('event', 'conversion', { send_to: TAG_ID + '/' + CONVERSION_LABEL });
  };
  // Lets the privacy page reopen the choice.
  window.hillsqrCookieSettings = function () { clearChoice(); deny(); showBanner(); };

  function init() {
    var c = getChoice();
    if (c === 'granted') grant();
    else if (c !== 'denied') showBanner();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
