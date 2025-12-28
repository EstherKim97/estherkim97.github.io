(function () {
  const el = document.getElementById("typed-text");
  if (!el) return;

  const PHRASES = [
    "Clinical AI",
    "Clinical Data",
    "Biomedical Data"
  ];

  const TYPE_MS = 60;
  const DELETE_MS = 35;
  const HOLD_MS = 900;

  let i = 0;
  let j = 0;
  let deleting = false;

  function tick() {
    const text = PHRASES[i];

    if (!deleting) {
      el.textContent = text.slice(0, j++);
      if (j > text.length) {
        deleting = true;
        setTimeout(tick, HOLD_MS);
        return;
      }
    } else {
      el.textContent = text.slice(0, j--);
      if (j === 0) {
        deleting = false;
        i = (i + 1) % PHRASES.length;
      }
    }
    setTimeout(tick, deleting ? DELETE_MS : TYPE_MS);
  }

  tick();
})();