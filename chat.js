/* Hill Square website chat: a small chat window that talks to the assistant at app.hillsqr.com.
   The chat is saved and passed to Hill Square; the notice in the window says so. */
(function () {
  var API = 'https://app.hillsqr.com/api/webchat';
  var KEY = 'hillsqr_chat_id';
  var id = null;
  try { id = sessionStorage.getItem(KEY); } catch (e) {}
  if (!id) {
    var a = new Uint8Array(16);
    (window.crypto || window.msCrypto).getRandomValues(a);
    id = Array.prototype.map.call(a, function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
    try { sessionStorage.setItem(KEY, id); } catch (e) {}
  }
  var sent = false, busy = false, over = false;

  var css = document.createElement('link');
  css.rel = 'stylesheet'; css.href = 'chat.css';
  document.head.appendChild(css);

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in (attrs || {})) n.setAttribute(k, attrs[k]);
    if (text) n.textContent = text;
    return n;
  }

  var btn = el('button', { id: 'hs-chat-btn', type: 'button', 'aria-label': 'Open chat with the Hill Square assistant', 'aria-expanded': 'false' });
  btn.appendChild(el('span', { 'aria-hidden': 'true' }, '💬 '));
  btn.appendChild(document.createTextNode('Chat with us'));

  var panel = el('div', { id: 'hs-chat', role: 'dialog', 'aria-label': 'Chat with the Hill Square assistant', hidden: '' });
  var head = el('div', { class: 'hs-head' });
  head.appendChild(el('strong', {}, 'Hill Square assistant'));
  var close = el('button', { type: 'button', 'aria-label': 'Close chat', class: 'hs-x' }, '×');
  head.appendChild(close);
  var note = el('p', { class: 'hs-note' });
  note.appendChild(document.createTextNode('Automated assistant. This chat is saved and passed to Hill Square. '));
  var pl = el('a', { href: 'privacy.html' }, 'Privacy notice');
  note.appendChild(pl);
  var log = el('div', { class: 'hs-log', 'aria-live': 'polite' });
  var form = el('form', { class: 'hs-form', autocomplete: 'off' });
  var input = el('input', { type: 'text', maxlength: '500', placeholder: 'Type your message', 'aria-label': 'Your message', required: '' });
  var send = el('button', { type: 'submit', class: 'hs-send' }, 'Send');
  form.appendChild(input); form.appendChild(send);
  panel.appendChild(head); panel.appendChild(note); panel.appendChild(log); panel.appendChild(form);

  function add(text, who) {
    var m = el('div', { class: 'hs-msg hs-' + who });
    m.textContent = text;
    log.appendChild(m);
    log.scrollTop = log.scrollHeight;
    return m;
  }
  add('Hi! Ask me about Hill Square, or leave a message and we will get back to you.', 'bot');

  function open() {
    panel.hidden = false; btn.setAttribute('aria-expanded', 'true'); btn.style.display = 'none';
    input.focus();
  }
  function shut() {
    panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); btn.style.display = '';
    btn.focus();
  }
  btn.addEventListener('click', open);
  close.addEventListener('click', shut);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) shut(); });
  // Links like <a href="#chat"> open the window.
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-open-chat]');
    if (t) { e.preventDefault(); open(); }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text || busy || over) return;
    add(text, 'me'); input.value = ''; busy = true; send.disabled = true; sent = true;
    var wait = add('…', 'bot');
    fetch(API + '/message', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id, text: text })
    }).then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
      .then(function (x) {
        wait.textContent = x.ok ? x.d.reply : (x.d.error || 'Sorry, something went wrong.');
        if (x.ok && x.d.done) { over = true; input.disabled = true; input.placeholder = 'Chat ended'; }
      })
      .catch(function () { wait.textContent = 'Sorry, I could not connect. Please email info@hillsqr.com.'; })
      .then(function () { busy = false; send.disabled = false; log.scrollTop = log.scrollHeight; if (!over) input.focus(); });
  });

  // Leaving the page ends the chat, so the summary is sent at once.
  window.addEventListener('pagehide', function () {
    if (!sent || over) return;
    try {
      fetch(API + '/end', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: id }), keepalive: true });
    } catch (e) {}
  });

  document.body.appendChild(btn);
  document.body.appendChild(panel);
})();
