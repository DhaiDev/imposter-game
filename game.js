/* Imposter — trilingual pass & play party game. Vanilla JS, no dependencies. */
(function () {
  "use strict";

  var app = document.getElementById("app");
  var BANK = window.WORD_BANK;
  var LANGS = window.LANGS;             // ["en","ms","zh"]
  var LANG_LABEL = window.LANG_LABEL;   // {en:"EN", ms:"BM", zh:"中文"}
  var LI = window.LANG_INDEX;           // {en:0, ms:1, zh:2}
  var AVATARS = ["🦊","🐼","🐵","🐸","🐯","🦁","🐨","🐷","🐰","🐮","🐔","🦉","🐙","🦄","🐲","🐶"];

  var state = {
    players: 4,
    imposters: 1,
    lang: "en",                         // display language for word + hint
    categories: Object.keys(BANK).slice(0, 6),
    useHints: true,
    rotateStart: true,
    timerSecs: 180,
    names: [],
    round: null,
    revealIndex: 0,
    revealedNow: false,                 // is the current card flipped open
    startRotation: 0
  };

  // pick localized string from a [en, ms, zh] array
  function L(arr) { return arr[LI[state.lang]]; }

  function ensureNames() {
    for (var i = 0; i < state.players; i++) {
      if (!state.names[i]) state.names[i] = "Player " + (i + 1);
    }
    state.names.length = state.players;
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  // Professional in-app confirm dialog (replaces native confirm/alert)
  function showModal(opts) {
    var overlay = el("div", "modal-overlay");
    var modal = el("div", "modal");
    modal.innerHTML =
      '<div class="m-icon">' + (opts.icon || "❓") + "</div>" +
      "<h3>" + escapeHtml(opts.title || "") + "</h3>" +
      "<p>" + escapeHtml(opts.message || "") + "</p>";
    var actions = el("div", "modal-actions");

    function close(cb) {
      overlay.classList.remove("show");
      setTimeout(function () { overlay.remove(); document.removeEventListener("keydown", onKey); if (cb) cb(); }, 200);
    }
    var confirmBtn = el("button", "btn " + (opts.danger ? "btn-danger" : "btn-primary"));
    confirmBtn.textContent = opts.confirmText || "Confirm";
    confirmBtn.onclick = function () { close(opts.onConfirm); };
    var cancelBtn = el("button", "btn btn-ghost");
    cancelBtn.textContent = opts.cancelText || "Cancel";
    cancelBtn.onclick = function () { close(opts.onCancel); };
    actions.appendChild(confirmBtn);
    actions.appendChild(cancelBtn);
    modal.appendChild(actions);
    overlay.appendChild(modal);

    overlay.onclick = function (e) { if (e.target === overlay) close(opts.onCancel); };
    function onKey(e) { if (e.key === "Escape") close(opts.onCancel); }
    document.addEventListener("keydown", onKey);

    document.body.appendChild(overlay);
    requestAnimationFrame(function () { overlay.classList.add("show"); });
  }

  function toast(msg) {
    var t = document.createElement("div");
    t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 300); }, 1600);
  }

  function totalWords() {
    var n = 0; Object.keys(BANK).forEach(function (k) { n += BANK[k].words.length; }); return n;
  }

  // ---- Round setup ----
  function startRound() {
    ensureNames();
    var cats = state.categories.length ? state.categories : Object.keys(BANK);
    var catKey = pick(cats);
    var cat = BANK[catKey];
    var word = pick(cat.words);            // the [en, ms, zh] array

    var idx = [];
    for (var i = 0; i < state.players; i++) idx.push(i);
    shuffle(idx);
    var impSet = {};
    for (var k = 0; k < state.imposters; k++) impSet[idx[k]] = true;

    state.round = {
      catKey: catKey,
      catLabel: cat.label,               // [en, ms, zh]
      catEmoji: cat.emoji,
      word: word,                        // [en, ms, zh]
      imposters: impSet,
      starter: state.rotateStart ? (state.startRotation % state.players)
                                  : Math.floor(Math.random() * state.players)
    };
    state.startRotation++;
    state.revealIndex = 0;
    state.revealedNow = false;
    renderPass();
  }

  // ================= SCREENS =================

  function renderHome() {
    ensureNames();
    app.innerHTML = "";
    var s = el("div", "screen");
    s.appendChild(brand());

    // Global language switch
    s.appendChild(langSwitch(function () { renderHome(); }));

    var hero = el("div", "hero");
    hero.innerHTML =
      '<h2>Sus out the <span class="grad">Imposter</span></h2>' +
      '<p>Everyone shares one secret word — except the imposter. Give one-word clues, sniff out the fake, and don\'t blow your cover.</p>';
    s.appendChild(hero);

    var start = el("button", "btn btn-primary");
    start.textContent = "▶  Start Game";
    start.onclick = startRound;
    s.appendChild(start);

    var c1 = el("div", "card");
    c1.appendChild(sectionTitle("Players"));
    c1.appendChild(stepperRow("Number of players", state.players, 3, 12, function (v) {
      state.players = v;
      if (state.imposters > maxImposters()) state.imposters = maxImposters();
      ensureNames(); renderHome();
    }, state.players + " people sharing one phone"));
    c1.appendChild(stepperRow("Imposters", state.imposters, 1, maxImposters(), function (v) {
      state.imposters = v; renderHome();
    }, "How many fakes are hidden in the group"));
    s.appendChild(c1);

    var c2 = el("div", "card");
    c2.appendChild(sectionTitle("Categories · " + totalWords() + " words (EN / BM / 中文)"));
    var chips = el("div", "chips");
    Object.keys(BANK).forEach(function (key) {
      var on = state.categories.indexOf(key) >= 0;
      var chip = el("div", "chip" + (on ? " on" : ""));
      chip.innerHTML = BANK[key].emoji + " " + escapeHtml(L(BANK[key].label));
      chip.onclick = function () {
        var i = state.categories.indexOf(key);
        if (i >= 0) {
          if (state.categories.length === 1) { toast("Pick at least one category"); return; }
          state.categories.splice(i, 1);
        } else state.categories.push(key);
        renderHome();
      };
      chips.appendChild(chip);
    });
    c2.appendChild(chips);
    s.appendChild(c2);

    var c3 = el("div", "card");
    c3.appendChild(sectionTitle("Options"));
    c3.appendChild(switchRow("Imposter gets a hint", "Show the category to imposters so they can bluff", state.useHints, function (v) { state.useHints = v; }));
    c3.appendChild(switchRow("Rotate starting player", "First clue-giver advances each round", state.rotateStart, function (v) { state.rotateStart = v; }));
    var timerRow = stepperRow("Discussion timer", 0, 1, 20, function (v) { state.timerSecs = v * 30; renderHome(); }, fmtTime(state.timerSecs) + " of clue-giving & debate");
    timerRow.querySelector(".val").textContent = fmtTime(state.timerSecs);
    c3.appendChild(timerRow);
    s.appendChild(c3);

    var c4 = el("div", "card");
    c4.appendChild(sectionTitle("Player names (optional)"));
    var names = el("div", "names");
    for (var i = 0; i < state.players; i++) {
      (function (i) {
        var row = el("div", "name-row");
        var idx = el("div", "idx"); idx.textContent = i + 1;
        var inp = document.createElement("input");
        inp.type = "text"; inp.value = state.names[i]; inp.maxLength = 18;
        inp.placeholder = "Player " + (i + 1);
        inp.oninput = function () { state.names[i] = inp.value.trim() || ("Player " + (i + 1)); };
        row.appendChild(idx); row.appendChild(inp);
        names.appendChild(row);
      })(i);
    }
    c4.appendChild(names);
    s.appendChild(c4);

    s.appendChild(howToPlay());
    s.appendChild(footer());
    app.appendChild(s);
    window.scrollTo(0, 0);
  }

  function renderPass() {
    var r = state.round;
    var i = state.revealIndex;
    app.innerHTML = "";
    var s = el("div", "screen");

    var top = el("div", "row"); top.style.borderTop = "none";
    var back = el("button", "btn-ghost btn small");
    back.textContent = "✕ Quit";
    back.onclick = function () {
      showModal({
        icon: "🚪",
        title: "Quit this round?",
        message: "Your current round will be lost and everyone returns to the setup screen.",
        confirmText: "Quit round",
        cancelText: "Keep playing",
        danger: true,
        onConfirm: renderHome
      });
    };
    top.appendChild(back);
    var prog = el("div", "pill-tag");
    prog.textContent = "Reveal " + (i + 1) + " / " + state.players;
    top.appendChild(prog);
    s.appendChild(top);

    // Fast language switch — re-renders the card in place, keeping it open
    s.appendChild(langSwitch(function () { renderPass(); }));

    var pass = el("div", "pass");
    var av = el("div", "avatar"); av.textContent = AVATARS[i % AVATARS.length];
    pass.appendChild(av);
    var h = el("div", "muted"); h.style.fontSize = "18px";
    h.innerHTML = 'Pass the phone to<br><h2 class="who">' + escapeHtml(state.names[i]) + "</h2>";
    pass.appendChild(h);

    var isImp = !!r.imposters[i];

    var flip = el("div", "flip");
    var inner = el("div", "flip-inner");
    var front = el("div", "flip-face flip-front");
    front.innerHTML = '<div class="tap-emoji">🤫</div><div class="tap-text">Tap to reveal your word<br>(only ' + escapeHtml(state.names[i]) + ' should look)</div>';
    var back2 = el("div", "flip-face flip-back " + (isImp ? "imposter" : "civilian"));
    if (isImp) {
      back2.innerHTML =
        '<div class="role-tag">You are the</div>' +
        '<div class="word imp">IMPOSTER 🤫</div>' +
        (state.useHints ? '<div class="hint">Hint: <b>' + r.catEmoji + " " + escapeHtml(L(r.catLabel)) + "</b></div>" : "") +
        '<div class="note">Blend in. Give a vague clue and figure out the secret word before they catch you.</div>';
    } else {
      back2.innerHTML =
        '<div class="role-tag">Your secret word</div>' +
        '<div class="word">' + escapeHtml(L(r.word)) + "</div>" +
        '<div class="hint">' + r.catEmoji + " " + escapeHtml(L(r.catLabel)) + "</div>" +
        '<div class="note">Give a one-word clue that proves you know it — without making it too obvious.</div>';
    }
    inner.appendChild(front); inner.appendChild(back2);
    flip.appendChild(inner);

    // keep the open/closed state across language switches
    flip.classList.toggle("revealed", state.revealedNow);

    flip.onclick = function () {
      state.revealedNow = !state.revealedNow;
      flip.classList.toggle("revealed", state.revealedNow);
      nextBtn.style.display = state.revealedNow ? "block" : "none";
      tapHint.style.display = state.revealedNow ? "none" : "block";
    };
    pass.appendChild(flip);

    var tapHint = el("div", "hint-tap");
    tapHint.textContent = "Tap the card to peek  ·  switch EN / BM / 中文 above";
    tapHint.style.display = state.revealedNow ? "none" : "block";
    pass.appendChild(tapHint);
    s.appendChild(pass);

    var nextBtn = el("button", "btn btn-primary");
    nextBtn.style.display = state.revealedNow ? "block" : "none";
    var last = i === state.players - 1;
    nextBtn.textContent = last ? "Everyone's seen it →" : "Got it — pass on →";
    nextBtn.onclick = function () {
      state.revealedNow = false;
      if (last) renderDiscuss();
      else { state.revealIndex++; renderPass(); }
    };
    s.appendChild(nextBtn);

    app.appendChild(s);
    window.scrollTo(0, 0);
  }

  function renderDiscuss() {
    var r = state.round;
    app.innerHTML = "";
    var s = el("div", "screen");
    s.appendChild(brand());

    var starter = el("div", "starter");
    starter.innerHTML = "🎙️ <b>" + escapeHtml(state.names[r.starter]) + "</b> gives the first clue, then go clockwise.";
    s.appendChild(starter);

    var card = el("div", "card");
    card.appendChild(sectionTitle("Discussion time"));
    var tw = el("div", "timer-wrap");
    var timerEl = el("div", "timer");
    var remaining = state.timerSecs;
    timerEl.textContent = fmtTime(remaining);
    tw.appendChild(timerEl);
    var sub = el("div", "muted"); sub.style.fontSize = "13px";
    sub.textContent = "One-word clues only. No repeats. No saying the word.";
    tw.appendChild(sub);
    card.appendChild(tw);

    var btns = el("div", "btn-row"); btns.style.marginTop = "14px";
    var startStop = el("button", "btn btn-ghost small"); startStop.textContent = "▶ Start timer";
    var add = el("button", "btn btn-ghost small"); add.textContent = "+30s";
    btns.appendChild(startStop); btns.appendChild(add);
    card.appendChild(btns);
    s.appendChild(card);

    var running = false, tick = null;
    function paint() { timerEl.textContent = fmtTime(remaining); timerEl.classList.toggle("low", remaining <= 15); }
    function stop() { running = false; clearInterval(tick); }
    startStop.onclick = function () {
      if (running) { stop(); startStop.textContent = "▶ Resume"; return; }
      running = true; startStop.textContent = "⏸ Pause";
      tick = setInterval(function () {
        remaining--; paint();
        if (remaining <= 0) { stop(); startStop.textContent = "▶ Start timer"; remaining = 0; paint(); toast("Time! Vote now."); navigator.vibrate && navigator.vibrate(200); }
      }, 1000);
    };
    add.onclick = function () { remaining += 30; paint(); };

    var c2 = el("div", "card");
    c2.appendChild(sectionTitle("Then vote"));
    var ol = document.createElement("ol"); ol.className = "list-clean";
    ["Each player gives one clue word about the secret word.",
     "Discuss who sounds unsure or too vague.",
     "Count to three and everyone points at their suspect.",
     "Reveal below to see who the imposter really was."].forEach(function (t, n) {
      var li = document.createElement("li");
      li.innerHTML = '<span class="num">' + (n + 1) + "</span><span>" + t + "</span>";
      ol.appendChild(li);
    });
    c2.appendChild(ol);
    s.appendChild(c2);

    s.appendChild(el("div", "spacer"));
    var reveal = el("button", "btn btn-danger");
    reveal.textContent = "👁  Reveal the Imposter";
    reveal.onclick = function () { clearInterval(tick); renderResult(); };
    s.appendChild(reveal);

    app.appendChild(s);
    window.scrollTo(0, 0);
  }

  function renderResult() {
    var r = state.round;
    app.innerHTML = "";
    var s = el("div", "screen");
    s.appendChild(brand());

    s.appendChild(langSwitch(function () { renderResult(); }));

    var card = el("div", "card");
    card.appendChild(sectionTitle("The secret word was"));
    var rw = el("div", "result-word");
    rw.innerHTML =
      '<div class="v">' + r.catEmoji + " " + escapeHtml(L(r.word)) + "</div>" +
      '<div class="k" style="margin-top:8px">' +
        escapeHtml(r.word[0]) + " · " + escapeHtml(r.word[1]) + " · " + escapeHtml(r.word[2]) +
      "</div>";
    card.appendChild(rw);
    s.appendChild(card);

    var card2 = el("div", "card");
    var impNames = [];
    for (var i = 0; i < state.players; i++) if (r.imposters[i]) impNames.push(i);
    card2.appendChild(sectionTitle(impNames.length > 1 ? "The imposters were" : "The imposter was"));
    var list = el("div", "imp-list");
    impNames.forEach(function (i) {
      var pill = el("div", "imp-pill");
      pill.innerHTML = '<span class="face">' + AVATARS[i % AVATARS.length] + '</span>' +
        '<div><div class="nm">' + escapeHtml(state.names[i]) + '</div><div class="rl">was faking it 🤫</div></div>';
      list.appendChild(pill);
    });
    card2.appendChild(list);
    s.appendChild(card2);

    s.appendChild(el("div", "spacer"));
    var again = el("button", "btn btn-primary");
    again.textContent = "🔄  Play another round";
    again.onclick = startRound;
    s.appendChild(again);
    var home = el("button", "btn btn-ghost");
    home.textContent = "⚙  Back to setup";
    home.onclick = renderHome;
    s.appendChild(home);

    app.appendChild(s);
    window.scrollTo(0, 0);
  }

  // ================= UI HELPERS =================

  function el(tag, cls) { var e = document.createElement(tag); if (cls) e.className = cls; return e; }
  function sectionTitle(t) { var e = el("div", "section-title"); e.textContent = t; return e; }

  function brand() {
    var b = el("div", "brand");
    b.innerHTML = '<span class="logo">🕵️</span><h1>IMPOSTER</h1>';
    return b;
  }

  // Segmented EN / BM / 中文 control. onChange called after lang updates.
  function langSwitch(onChange) {
    var seg = el("div", "lang-seg");
    LANGS.forEach(function (lng) {
      var b = el("button", "lang-btn" + (state.lang === lng ? " on" : ""));
      b.textContent = LANG_LABEL[lng];
      b.onclick = function () { if (state.lang !== lng) { state.lang = lng; onChange(); } };
      seg.appendChild(b);
    });
    return seg;
  }

  function stepperRow(label, val, min, max, onChange, sub) {
    var row = el("div", "row");
    var left = el("div");
    left.innerHTML = '<div class="label">' + escapeHtml(label) + "</div>" + (sub ? '<div class="sub">' + escapeHtml(sub) + "</div>" : "");
    var st = el("div", "stepper");
    var minus = el("button"); minus.textContent = "−"; minus.disabled = val <= min;
    var v = el("div", "val"); v.textContent = val;
    var plus = el("button"); plus.textContent = "+"; plus.disabled = val >= max;
    minus.onclick = function () { if (val > min) onChange(val - 1); };
    plus.onclick = function () { if (val < max) onChange(val + 1); };
    st.appendChild(minus); st.appendChild(v); st.appendChild(plus);
    row.appendChild(left); row.appendChild(st);
    return row;
  }

  function switchRow(label, sub, checked, onChange) {
    var row = el("div", "row");
    var left = el("div");
    left.innerHTML = '<div class="label">' + escapeHtml(label) + "</div>" + (sub ? '<div class="sub">' + escapeHtml(sub) + "</div>" : "");
    var sw = el("label", "switch");
    var inp = document.createElement("input"); inp.type = "checkbox"; inp.checked = checked;
    inp.onchange = function () { onChange(inp.checked); };
    var track = el("span", "track"); var knob = el("span", "knob");
    sw.appendChild(inp); sw.appendChild(track); sw.appendChild(knob);
    row.appendChild(left); row.appendChild(sw);
    return row;
  }

  function howToPlay() {
    var c = el("div", "card");
    c.appendChild(sectionTitle("How to play"));
    var ol = document.createElement("ol"); ol.className = "list-clean";
    [["Pass & reveal", "Each player taps the card to privately see the secret word — except the imposter."],
     ["Give clues", "Going around, everyone says one word linked to the secret word."],
     ["Debate & vote", "Spot who's bluffing. Point at your suspect together."],
     ["Reveal", "Find out who the imposter was. Imposters win if they survive!"]
    ].forEach(function (p, n) {
      var li = document.createElement("li");
      li.innerHTML = '<span class="num">' + (n + 1) + '</span><span><b>' + p[0] + ".</b> " + p[1] + "</span>";
      ol.appendChild(li);
    });
    c.appendChild(ol);
    return c;
  }

  function footer() {
    var f = el("div", "footer-note");
    f.textContent = "Best with 4–10 players · One phone · EN / BM / 中文";
    return f;
  }

  function maxImposters() { return Math.max(1, Math.floor((state.players - 1) / 2)); }
  function fmtTime(s) { var m = Math.floor(s / 60), ss = s % 60; return m + ":" + (ss < 10 ? "0" : "") + ss; }
  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  renderHome();
})();
